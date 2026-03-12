import type { ChallengeParameters, DeriveKeyFunctionResult } from '../types';

function getDigest(algorithm: string) {
	switch (algorithm) {
		case 'PBKDF2/SHA-512':
			return 'SHA-512';
		case 'PBKDF2/SHA-384':
			return 'SHA-384';
		case 'PBKDF2/SHA-256':
		default:
			return 'SHA-256';
	}
}

const times: number[] = [];

export async function deriveKey(
	parameters: ChallengeParameters,
	salt: Uint8Array,
	password: Uint8Array
): Promise<DeriveKeyFunctionResult> {
	const { algorithm, cost, keyLength = 32 } = parameters;
	const passwordKey = await crypto.subtle.importKey(
		'raw',
		password as Uint8Array<ArrayBuffer>,
		{ name: 'PBKDF2' },
		false,
		['deriveKey']
	);
	const derivedKey = await crypto.subtle.deriveKey(
		{
			name: 'PBKDF2',
			salt: salt as Uint8Array<ArrayBuffer>,
			iterations: cost,
			hash: getDigest(algorithm)
		},
		passwordKey,
		{ name: 'AES-GCM', length: keyLength * 8 },
		true,
		['encrypt']
	);
	return {
		derivedKey: new Uint8Array(await crypto.subtle.exportKey('raw', derivedKey))
	};
}
