import { describe, expect, test } from 'vitest';
import { deriveKey } from '../../src/algorithms/argon2id';
import { PasswordBuffer } from '../../src/pow';
import { bufferToHex, hexToBuffer } from '../../src/helpers';
import { ChallengeParameters } from '../../src/types';

describe('ARGON2ID', () => {
	const nonce = '39baf91a19d671f8231217f9e28342a6';
	const salt = '5e00d5d152e1a5db7d44fb6404a40a5e';
	const parameters: ChallengeParameters = {
		algorithm: 'ARGON2ID',
		cost: 1,
		keyLength: 32,
		memoryCost: 16384,
		nonce,
		salt,
		keyPrefix: ''
	};

	test('should return a derived key (cost: 1, memoryCost: 16384)', async () => {
		const password = new PasswordBuffer(hexToBuffer(nonce), 'uint32');
		password.setCounter(123);
		const result = await deriveKey(parameters, hexToBuffer(salt), password.buffer);
		expect(bufferToHex(result.derivedKey)).toEqual(
			'e5231033e21615aae48d8bc9b8e5e6c8f6538756f99dbcd5666f6e20832f30de'
		);
	});

	test('should return a derived key (cost: 2, memoryCost: 16384)', async () => {
		const password = new PasswordBuffer(hexToBuffer(nonce), 'uint32');
		password.setCounter(123);
		const result = await deriveKey(
			{
				...parameters,
				cost: 2
			},
			hexToBuffer(salt),
			password.buffer
		);
		expect(bufferToHex(result.derivedKey)).toEqual(
			'e2e86adb59f793f14f7a9d38a52d531fa7ae6ca77d39b8448e4ebc2e724b094f'
		);
	});
});
