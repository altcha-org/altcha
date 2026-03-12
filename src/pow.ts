import {
	bufferStartsWith,
	bufferToHex,
	canonicalJSON,
	concatBuffers,
	constantTimeEqual,
	delay,
	hexToBuffer,
	hmac,
	sortKeys,
	timeDuration
} from './helpers';
import {
	type CreateChallengeOptions,
	type Challenge,
	type ChallengeParameters,
	type DeriveKeyFunctionResult,
	type SolveChallengeOptions,
	type Solution,
	type VerifySolutionOptions,
	type VerifySolutionResult,
	HmacAlgorithm
} from './types';

/**
 * Manages a buffer that combines a nonce with a counter value.
 * Used to generate unique passwords for each iteration of the challenge solver.
 */
export class PasswordBuffer {
	readonly COUNTER_BYTES = 4;

	readonly buffer: Uint8Array;

	readonly dataView: DataView;

	readonly encoder = new TextEncoder();

	constructor(
		readonly nonce: Uint8Array,
		readonly mode: 'uint32' | 'string' = 'uint32'
	) {
		this.buffer = new Uint8Array(this.nonce.length + this.COUNTER_BYTES);
		this.buffer.set(this.nonce, 0);
		this.dataView = new DataView(this.buffer.buffer);
	}

	/**
	 * Appends the counter to the nonce buffer.
	 * In 'string' mode, encodes the counter as a UTF-8 string.
	 * In 'uint32' mode, writes the counter as a big-endian 32-bit integer.
	 */
	setCounter(n: number) {
		if (this.mode === 'string') {
			return concatBuffers(this.nonce, this.encoder.encode(n.toString()));
		}
		this.dataView.setUint32(this.nonce.length, n, false);
		return this.buffer;
	}
}

/**
 * Creates a new proof-of-work challenge.
 *
 * Generates random nonce and salt, optionally pre-computes a key prefix
 * from a known counter value, and optionally signs the challenge with HMAC.
 */
export async function createChallenge(options: CreateChallengeOptions): Promise<Challenge> {
	const {
		algorithm,
		counter,
		counterMode = 'uint32',
		cost,
		deriveKey,
		data,
		expiresAt,
		hmacAlgorithm = HmacAlgorithm.SHA_256,
		hmacKeySignatureSecret,
		hmacSignatureSecret,
		keyLength = 32,
		keyPrefix = '00',
		keyPrefixLength = keyLength / 2,
		memoryCost,
		parallelism
	} = options;
	const parameters: ChallengeParameters = {
		algorithm,
		nonce: bufferToHex(crypto.getRandomValues(new Uint8Array(16))),
		salt: bufferToHex(crypto.getRandomValues(new Uint8Array(16))),
		cost,
		keyLength,
		memoryCost,
		parallelism,
		keyPrefix,
		expiresAt: expiresAt instanceof Date ? Math.floor(expiresAt.getTime() / 1_000) : expiresAt,
		data
	};

	// If a counter is provided, derive the key and extract the prefix the solver must match.
	let deriveKeyResult: DeriveKeyFunctionResult | null = null;
	if (counter !== undefined) {
		const nonceBuf = hexToBuffer(parameters.nonce);
		deriveKeyResult = await deriveKey(
			parameters,
			hexToBuffer(parameters.salt),
			new PasswordBuffer(nonceBuf, counterMode).setCounter(counter)
		);
		if (deriveKeyResult.parameters) {
			Object.assign(parameters, deriveKeyResult.parameters);
		}
		parameters.keyPrefix = bufferToHex(deriveKeyResult.derivedKey.slice(0, keyPrefixLength));
	}

	// Return unsigned challenge if no HMAC secret is provided.
	if (!hmacSignatureSecret) {
		return {
			parameters: sortKeys(parameters)
		};
	}
	return signChallenge(
		hmacAlgorithm,
		parameters,
		deriveKeyResult?.derivedKey,
		hmacSignatureSecret,
		hmacKeySignatureSecret
	);
}

/**
 * Solves a challenge by brute-forcing counter values until the derived key
 * starts with the required prefix. Returns the solution or null on timeout/abort.
 */
export async function solveChallenge(options: SolveChallengeOptions): Promise<Solution | null> {
	const {
		challenge,
		controller,
		counterMode = 'uint32',
		counterStart = 0,
		counterStep = 1,
		deriveKey,
		timeout = 90_000
	} = options;
	const { nonce, keyPrefix, salt } = challenge.parameters;
	const nonceBuf = hexToBuffer(nonce);
	const saltBuf = hexToBuffer(salt);
	const keyPrefixBuf = keyPrefix.length % 2 === 0 ? hexToBuffer(keyPrefix) : null;
	const password = new PasswordBuffer(nonceBuf, counterMode);
	const start = performance.now();
	let counter = counterStart;
	let derivedKeyHex = '';
	let lastYield = start;
	while (true) {
		// Check for abort signal or timeout every 10 iterations.
		if (
			controller?.signal.aborted ||
			(timeout && counter % 10 === 0 && performance.now() - start > timeout)
		) {
			return null;
		}
		const { derivedKey } = await deriveKey(
			challenge.parameters,
			saltBuf,
			password.setCounter(counter)
		);
		// Yield to the event loop periodically.
		if (counter % 10 === 0 && performance.now() - lastYield > 200) {
			await delay(0);
			lastYield = performance.now();
		}
		// Check if the derived key matches the required prefix.
		if (
			keyPrefixBuf
				? bufferStartsWith(derivedKey, keyPrefixBuf)
				: bufferToHex(derivedKey).startsWith(keyPrefix)
		) {
			derivedKeyHex = bufferToHex(derivedKey);
			break;
		}
		counter = counter + counterStep;
	}
	return {
		counter,
		derivedKey: derivedKeyHex,
		time: timeDuration(start)
	};
}

/**
 * Solves a challenge using multiple Web Workers in parallel.
 * Each worker tests a different subset of counter values (interleaved by concurrency).
 * Automatically retries with fewer workers on out-of-memory errors.
 */
export async function solveChallengeWorkers(
	options: Omit<SolveChallengeOptions, 'deriveKey'> & {
		concurrency: number;
		createWorker: (algorithm: string) => Worker | Promise<Worker>;
		onOutOfMemory?: (concurrency: number) => number | void;
	}
) {
	const {
		challenge,
		concurrency = navigator.hardwareConcurrency,
		controller = new AbortController(),
		createWorker,
		onOutOfMemory = (c) => (c > 1 ? Math.floor(c / 2) : 0),
		counterMode
	} = options;
	const workersConcurrency = Math.min(16, Math.max(1, concurrency));
	const workersInstances: Worker[] = [];
	const terminate = () => {
		for (const worker of workersInstances) {
			worker.terminate();
		}
	};
	for (let i = 0; i < workersConcurrency; i++) {
		workersInstances.push(await createWorker(challenge.parameters.algorithm));
	}
	let solution: Solution | null = null;
	try {
		// Race all workers — first one to find a solution wins.
		solution = await Promise.race(
			workersInstances.map((worker, i) => {
				controller.signal.addEventListener('abort', () => {
					worker.postMessage({ type: 'abort' });
				});
				return new Promise((resolve, reject) => {
					worker.addEventListener('error', (err) => {
						reject(err);
					});
					worker.addEventListener('message', (message: MessageEvent) => {
						if (message.data) {
							// Tell other workers to stop once one finds the answer.
							for (const w of workersInstances) {
								if (w !== worker) {
									w.postMessage({ type: 'abort' });
								}
							}
							if (message.data.error) {
								return reject(new Error(message.data.error));
							}
						}
						resolve(message.data);
					});
					// Each worker starts at a different offset and steps by concurrency count.
					worker.postMessage({
						challenge,
						counterMode,
						counterStart: i,
						counterStep: workersConcurrency,
						type: 'work'
					});
				}) as Promise<Solution | null>;
			})
		);
	} catch (err: unknown) {
		// On OOM, retry with fewer workers if the callback allows it.
		const isOOM = err instanceof Error && !!err?.message?.includes('Out of memory');
		if (isOOM) {
			if (onOutOfMemory) {
				terminate();
				const retryConcurrency = onOutOfMemory(workersConcurrency);
				if (retryConcurrency) {
					return solveChallengeWorkers({
						...options,
						challenge,
						controller,
						concurrency: retryConcurrency,
						createWorker
					});
				}
			}
		}
		throw err;
	} finally {
		terminate();
	}
	if (controller.signal.aborted) {
		return null;
	}
	return solution || null;
}

/**
 * Signs challenge parameters with HMAC.
 * Optionally also signs the derived key separately for additional verification.
 */
export async function signChallenge(
	algorithm: HmacAlgorithm,
	parameters: ChallengeParameters,
	derivedKey: Uint8Array | null | undefined,
	hmacSignatureSecret: string,
	hmacKeySignatureSecret?: string
) {
	if (derivedKey && hmacKeySignatureSecret) {
		parameters.keySignature = bufferToHex(
			await hmac(algorithm, derivedKey, hmacKeySignatureSecret)
		);
	}
	parameters = sortKeys(parameters);
	return {
		parameters,
		signature: bufferToHex(await hmac(algorithm, JSON.stringify(parameters), hmacSignatureSecret))
	};
}

/**
 * Verifies a submitted solution against a challenge.
 *
 * Checks (in order):
 * 1. Whether the challenge has expired.
 * 2. Whether the challenge has signature parameter.
 * 3. Whether the challenge signature is valid (tamper check).
 * 4. Whether the derived key matches — either via key signature or by re-deriving.
 */
export async function verifySolution(
	options: VerifySolutionOptions
): Promise<VerifySolutionResult> {
	const {
		challenge,
		counterMode,
		deriveKey,
		hmacAlgorithm = HmacAlgorithm.SHA_256,
		hmacKeySignatureSecret,
		hmacSignatureSecret,
		solution
	} = options;
	const start = performance.now();

	// 1. Check expiration.
	if (challenge.parameters.expiresAt && challenge.parameters.expiresAt < Date.now() / 1_000) {
		return {
			expired: true,
			invalidSignature: null,
			invalidSolution: null,
			time: timeDuration(start),
			verified: false
		};
	}

	// 2. Signature parameter check.
	if (!challenge.signature) {
		return {
			expired: false,
			invalidSignature: true,
			invalidSolution: null,
			time: timeDuration(start),
			verified: false
		};
	}

	// 3. Verify challenge signature to ensure parameters haven't been tampered with.
	const signatureCheck = bufferToHex(
		await hmac(hmacAlgorithm, canonicalJSON(challenge.parameters), hmacSignatureSecret)
	);
	const signatureVerified = constantTimeEqual(challenge.signature, signatureCheck);
	if (!signatureVerified) {
		return {
			expired: false,
			invalidSignature: true,
			invalidSolution: null,
			time: timeDuration(start),
			verified: false
		};
	}

	// 4a. If a key signature exists, verify the derived key against it (faster path).
	if (challenge.parameters.keySignature && hmacKeySignatureSecret) {
		const derivedKeySignatureCheck = bufferToHex(
			await hmac(hmacAlgorithm, hexToBuffer(solution.derivedKey), hmacKeySignatureSecret)
		);
		const derivedKeySignatureValid = constantTimeEqual(
			challenge.parameters.keySignature,
			derivedKeySignatureCheck
		);
		return {
			expired: false,
			invalidSignature: false,
			invalidSolution: !derivedKeySignatureValid,
			time: timeDuration(start),
			verified: derivedKeySignatureValid
		};
	}

	// 4b. Otherwise, re-derive the key from the solution's counter and compare.
	const nonceBuf = hexToBuffer(challenge.parameters.nonce);
	const saltBuf = hexToBuffer(challenge.parameters.salt);
	const { derivedKey } = await deriveKey(
		challenge.parameters,
		saltBuf,
		new PasswordBuffer(nonceBuf, counterMode).setCounter(solution.counter)
	);
	const derivedKeyHex = bufferToHex(derivedKey);
	const invalidSolution = !constantTimeEqual(derivedKeyHex, solution.derivedKey);
	return {
		expired: false,
		invalidSignature: false,
		invalidSolution,
		time: timeDuration(start),
		verified: !invalidSolution && signatureVerified
	};
}
