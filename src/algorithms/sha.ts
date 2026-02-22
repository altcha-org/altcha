import { concatBuffers } from '../pow';
import type { ChallengeParameters, DeriveKeyFunctionResult } from '../types';

export async function deriveKey(
	parameters: ChallengeParameters,
	salt: Uint8Array,
	password: Uint8Array
): Promise<DeriveKeyFunctionResult> {
	const { algorithm, keyLength = 32 } = parameters;
	const iterations = Math.max(1, parameters.cost);
	let data: Uint8Array | undefined = undefined;
	let derivedKey: Uint8Array | undefined = undefined;
	for (let i = 0; i < iterations; i++) {
		if (i === 0) {
			data = concatBuffers(salt, password);
		} else {
			data = derivedKey;
		}
		derivedKey = new Uint8Array(
			(await crypto.subtle.digest(algorithm, data as BufferSource)).slice(0, keyLength)
		);
	}
	return {
		parameters: {},
		derivedKey: derivedKey!
	};
}
