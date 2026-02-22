import { describe, expect, test } from 'vitest';
import {
	PasswordBuffer,
	bufferToHex,
	canonicalJSON,
	concatBuffers,
	createChallenge,
	hexToBuffer,
	signChallenge,
	solveChallenge,
	verifySolution
} from '../src/pow';
import * as pbkdf2 from '../src/algorithms/pbkdf2';
import { Challenge, CreateChallengeOptions, HmacAlgorithm, Solution } from '../src/types';

const HMAC_SIGNATURE_SECRET = 'signature.secret';
const HMAC_KEY_SECRET = 'key.secret';

describe('pow', () => {
	describe('bufferToHex()', () => {
		test('should return a HEX string for a buffer', () => {
			expect(bufferToHex(new TextEncoder().encode('Hello World'))).toEqual(
				'48656c6c6f20576f726c64'
			);
		});
	});

	describe('concatBuffers()', () => {
		test('should return concatenated buffers', () => {
			expect(
				concatBuffers(new TextEncoder().encode('Hello'), new TextEncoder().encode(' World'))
			).toStrictEqual(new TextEncoder().encode('Hello World'));
		});
	});

	describe('hexToBuffer()', () => {
		test('should return a buffer for a HEX string', () => {
			expect(hexToBuffer('48656c6c6f20576f726c64')).toStrictEqual(
				new TextEncoder().encode('Hello World')
			);
		});
	});

	describe('canonicalJSON()', () => {
		test('should return JSON string with keys sorted', () => {
			const obj = {
				a: 'a',
				c: 'c',
				b: 'b',
				B: 'B',
				x: {
					a: 'a',
					f: 'f',
					c: 'c'
				}
			};
			const result = canonicalJSON(obj);
			expect(result).toStrictEqual(
				JSON.stringify({
					B: 'B',
					a: 'a',
					b: 'b',
					c: 'c',
					x: {
						a: 'a',
						c: 'c',
						f: 'f'
					}
				})
			);
		});
	});

	describe('signChallenge()', () => {
		test('should return a signed challenge', async () => {
			const challenge: Challenge = {
				parameters: {
					algorithm: 'PBKDF2/SHA-256',
					nonce: '39baf91a19d671f8231217f9e28342a6',
					salt: '5e00d5d152e1a5db7d44fb6404a40a5e',
					keyPrefix: '00',
					cost: 1000,
					keyLength: 32
				}
			};
			const result = await signChallenge(
				HmacAlgorithm.SHA_256,
				challenge.parameters,
				null,
				HMAC_SIGNATURE_SECRET,
				HMAC_KEY_SECRET
			);
			expect(result).toEqual({
				parameters: challenge.parameters,
				signature: expect.any(String)
			});
			expect(result.signature).toEqual(
				'a10045ef3381d5516e0c3fd6bf0b90e02fab68d576ffe9e0e1c2d1cd1e404f2a'
			);
		});
	});

	describe('createChallenge()', () => {
		test('should return a new challenge (without signature)', async () => {
			const result = await createChallenge({
				algorithm: 'PBKDF2/SHA-256',
				cost: 1000,
				deriveKey: pbkdf2.deriveKey
			});
			expect(result).toEqual({
				parameters: {
					algorithm: 'PBKDF2/SHA-256',
					nonce: expect.any(String),
					salt: expect.any(String),
					cost: 1000,
					keyLength: 32,
					keyPrefix: '00'
				}
			});
			expect(result.parameters.nonce.length).toEqual(32);
			expect(result.parameters.salt.length).toEqual(32);
			expect(result.signature).toBeUndefined();
		});

		test('should return a new challenge with fixed counter (without signature)', async () => {
			const result = await createChallenge({
				algorithm: 'PBKDF2/SHA-256',
				cost: 1000,
				counter: 1000,
				deriveKey: pbkdf2.deriveKey
			});
			expect(result).toEqual({
				parameters: {
					algorithm: 'PBKDF2/SHA-256',
					nonce: expect.any(String),
					salt: expect.any(String),
					cost: 1000,
					keyLength: 32,
					keyPrefix: expect.any(String)
				}
			});
			expect(result.parameters.nonce.length).toEqual(32);
			expect(result.parameters.salt.length).toEqual(32);
			expect(result.parameters.keyPrefix.length).toEqual(32);
			expect(result.signature).toBeUndefined();
		});

		test('should return a new challenge with signature', async () => {
			const result = await createChallenge({
				algorithm: 'PBKDF2/SHA-256',
				cost: 1000,
				deriveKey: pbkdf2.deriveKey,
				hmacSignatureSecret: HMAC_SIGNATURE_SECRET,
				hmacKeySignatureSecret: HMAC_KEY_SECRET
			});
			expect(result).toEqual({
				parameters: {
					algorithm: 'PBKDF2/SHA-256',
					nonce: expect.any(String),
					salt: expect.any(String),
					cost: 1000,
					keyLength: 32,
					keyPrefix: '00'
				},
				signature: expect.any(String)
			});
			expect(result.parameters.nonce.length).toEqual(32);
			expect(result.parameters.salt.length).toEqual(32);
			expect(result.signature?.length).toEqual(64);
		});

		test('should return a new challenge in deterministic mode with key signature', async () => {
			const result = await createChallenge({
				algorithm: 'PBKDF2/SHA-256',
				cost: 1000,
				counter: 1000,
				deriveKey: pbkdf2.deriveKey,
				hmacSignatureSecret: HMAC_SIGNATURE_SECRET,
				hmacKeySignatureSecret: HMAC_KEY_SECRET
			});
			expect(result).toEqual({
				parameters: {
					algorithm: 'PBKDF2/SHA-256',
					nonce: expect.any(String),
					salt: expect.any(String),
					cost: 1000,
					keyLength: 32,
					keyPrefix: expect.any(String),
					keySignature: expect.any(String)
				},
				signature: expect.any(String)
			});
			expect(result.parameters.nonce.length).toEqual(32);
			expect(result.parameters.salt.length).toEqual(32);
			expect(result.parameters.keyPrefix.length).toEqual(32);
			expect(result.parameters.keySignature?.length).toEqual(64);
			expect(result.signature?.length).toEqual(64);
		});
	});

	describe('solveChallenge()', () => {
		test('should return a solution', async () => {
			const challenge = await createChallenge({
				algorithm: 'PBKDF2/SHA-256',
				cost: 100,
				deriveKey: pbkdf2.deriveKey
			});
			const solution = await solveChallenge({
				challenge,
				deriveKey: pbkdf2.deriveKey
			});
			expect(solution).toEqual({
				counter: expect.any(Number),
				derivedKey: expect.any(String),
				time: expect.any(Number)
			});
			expect(solution?.derivedKey?.length).toEqual(64);
		});

		test('should timeout and return null', async () => {
			const challenge = await createChallenge({
				algorithm: 'PBKDF2/SHA-256',
				cost: 100,
				counter: 1_000_000,
				deriveKey: pbkdf2.deriveKey
			});
			const solution = await solveChallenge({
				challenge,
				deriveKey: pbkdf2.deriveKey,
				timeout: 1_000 // 1 second timeout
			});
			expect(solution).toEqual(null);
		});
	});

	describe('verifySolution()', () => {
		const solve = async (options?: Partial<CreateChallengeOptions>) => {
			const challenge = await createChallenge({
				algorithm: 'PBKDF2/SHA-256',
				cost: 100,
				deriveKey: pbkdf2.deriveKey,
				hmacSignatureSecret: HMAC_SIGNATURE_SECRET,
				hmacKeySignatureSecret: HMAC_KEY_SECRET,
				...options
			});
			const solution = (await solveChallenge({
				challenge,
				deriveKey: pbkdf2.deriveKey
			})) as Solution;
			return {
				challenge,
				solution
			};
		};

		test('should successfully verify', async () => {
			const { challenge, solution } = await solve();
			const result = await verifySolution({
				challenge,
				deriveKey: pbkdf2.deriveKey,
				hmacSignatureSecret: HMAC_SIGNATURE_SECRET,
				hmacKeySignatureSecret: HMAC_KEY_SECRET,
				solution
			});
			expect(result).toEqual({
				expired: false,
				signatureVerified: true,
				solutionVerified: true,
				time: expect.any(Number),
				verified: true
			});
		});

		test('should successfully verify in deterministic mode', async () => {
			const { challenge, solution } = await solve({
				counter: 100
			});
			const result = await verifySolution({
				challenge,
				deriveKey: pbkdf2.deriveKey,
				hmacSignatureSecret: HMAC_SIGNATURE_SECRET,
				hmacKeySignatureSecret: HMAC_KEY_SECRET,
				solution
			});
			expect(result).toEqual({
				expired: false,
				signatureVerified: true,
				solutionVerified: true,
				time: expect.any(Number),
				verified: true
			});
		});

		test('should fail verification with invalid HMAC key', async () => {
			const { challenge, solution } = await solve();
			const result = await verifySolution({
				challenge,
				deriveKey: pbkdf2.deriveKey,
				hmacSignatureSecret: HMAC_SIGNATURE_SECRET + 'invalid',
				hmacKeySignatureSecret: HMAC_KEY_SECRET + 'invalid',
				solution
			});
			expect(result).toEqual({
				expired: false,
				signatureVerified: false,
				solutionVerified: null,
				time: expect.any(Number),
				verified: false
			});
		});

		test('should fail verification with wrong solution counter', async () => {
			const { challenge, solution } = await solve();
			const result = await verifySolution({
				challenge,
				deriveKey: pbkdf2.deriveKey,
				hmacSignatureSecret: HMAC_SIGNATURE_SECRET,
				hmacKeySignatureSecret: HMAC_KEY_SECRET,
				solution: {
					...solution,
					counter: solution.counter + 1
				}
			});
			expect(result).toEqual({
				expired: false,
				signatureVerified: true,
				solutionVerified: false,
				time: expect.any(Number),
				verified: false
			});
		});

		test('should fail verification when expired', async () => {
			const { challenge, solution } = await solve({
				expiresAt: Math.floor((Date.now() - 1_000) / 1_000)
			});
			const result = await verifySolution({
				challenge,
				deriveKey: pbkdf2.deriveKey,
				hmacSignatureSecret: HMAC_SIGNATURE_SECRET,
				hmacKeySignatureSecret: HMAC_KEY_SECRET,
				solution: {
					...solution,
					counter: solution.counter + 1
				}
			});
			expect(result).toEqual({
				expired: true,
				signatureVerified: null,
				solutionVerified: null,
				time: expect.any(Number),
				verified: false
			});
		});

		test('should fail verification with a tampered keyPrefix', async () => {
			const { challenge, solution } = await solve();
			const result = await verifySolution({
				challenge: {
					parameters: {
						...challenge.parameters,
						keyPrefix: 'a'
					},
					signature: challenge.signature
				},
				deriveKey: pbkdf2.deriveKey,
				hmacSignatureSecret: HMAC_SIGNATURE_SECRET,
				hmacKeySignatureSecret: HMAC_KEY_SECRET,
				solution
			});
			expect(result).toEqual({
				expired: false,
				signatureVerified: false,
				solutionVerified: null,
				time: expect.any(Number),
				verified: false
			});
		});

		test('should fail verification with a spoofed solution', async () => {
			const challenge = await createChallenge({
				algorithm: 'PBKDF2/SHA-256',
				cost: 100,
				counter: 100,
				deriveKey: pbkdf2.deriveKey,
				hmacSignatureSecret: HMAC_SIGNATURE_SECRET,
				hmacKeySignatureSecret: HMAC_KEY_SECRET
			});
			const result = await verifySolution({
				challenge,
				deriveKey: pbkdf2.deriveKey,
				hmacSignatureSecret: HMAC_SIGNATURE_SECRET,
				hmacKeySignatureSecret: HMAC_KEY_SECRET,
				solution: {
					counter: 100,
					derivedKey: challenge.parameters.keyPrefix,
					time: 10
				}
			});
			expect(result).toEqual({
				expired: false,
				signatureVerified: true,
				solutionVerified: false,
				time: expect.any(Number),
				verified: false
			});
		});
	});

	describe('PasswordBuffer', () => {
		test('should return buffer with uint32 (single byte)', () => {
			const counter = 123;
			const nonce = crypto.getRandomValues(new Uint8Array(16));
			const password = new PasswordBuffer(nonce);
			const result = password.setCounter(counter);
			expect(result.slice(-4)).toStrictEqual(new Uint8Array([0, 0, 0, counter]));
		});

		test('should return buffer with uint32 (multiple bytes)', () => {
			const counter = 9999999;
			const nonce = crypto.getRandomValues(new Uint8Array(16));
			const password = new PasswordBuffer(nonce);
			const result = password.setCounter(counter);

			// verification buffer
			const buf = new Uint8Array(nonce.length + 4);
			buf.set(nonce, 0);
			const dataView = new DataView(buf.buffer);
			dataView.setUint32(nonce.length, counter, false);

			expect(result).toStrictEqual(buf);
			expect(new DataView(result.buffer).getUint32(nonce.length, false)).toEqual(counter);
		});
	});
});
