import { scrypt } from 'hash-wasm';
import type { ChallengeParameters, DeriveKeyFunctionResult } from '../types';

export async function deriveKey(
	parameters: ChallengeParameters,
	salt: Uint8Array,
	password: Uint8Array
): Promise<DeriveKeyFunctionResult> {
	const { cost, keyLength = 32, memoryCost = 8, parallelism = 1 } = parameters;
	return {
		parameters: {
			memoryCost,
			parallelism
		},
		derivedKey: await scrypt({
			password,
			salt,
			blockSize: memoryCost,
			costFactor: cost,
			hashLength: keyLength,
			parallelism,
			outputType: 'binary'
		})
	};
}
