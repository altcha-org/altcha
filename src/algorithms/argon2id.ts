import { argon2id } from 'hash-wasm';
import type { ChallengeParameters, DeriveKeyFunctionResult } from '../types';

export async function deriveKey(
	parameters: ChallengeParameters,
	salt: Uint8Array,
	password: Uint8Array
): Promise<DeriveKeyFunctionResult> {
	const {
		cost,
		keyLength = 32,
		memoryCost = 16384, // in KB
		parallelism = 1
	} = parameters;
	return {
		parameters: {
			memoryCost,
			parallelism
		},
		derivedKey: await argon2id({
			password,
			salt,
			parallelism,
			iterations: cost,
			memorySize: memoryCost,
			hashLength: keyLength,
			outputType: 'binary'
		})
	};
}
