import { describe, expect, test } from 'vitest';
import { deriveKey } from '../../src/algorithms/scrypt';
import { PasswordBuffer } from '../../src/pow';
import { bufferToHex, hexToBuffer } from '../../src/helpers';
import { ChallengeParameters } from '../../src/types';

describe('SCRYPT', () => {
	const nonce = '39baf91a19d671f8231217f9e28342a6';
	const salt = '5e00d5d152e1a5db7d44fb6404a40a5e';
	const parameters: ChallengeParameters = {
		algorithm: 'SCRYPT',
		cost: 16384,
		keyLength: 32,
		memoryCost: 8,
		nonce,
		salt,
		keyPrefix: ''
	};

	test('should return a derived key (cost: 16384, memoryCost: 8)', async () => {
		const password = new PasswordBuffer(hexToBuffer(nonce), 'uint32');
		password.setCounter(123);
		const result = await deriveKey(parameters, hexToBuffer(salt), password.buffer);
		expect(bufferToHex(result.derivedKey)).toEqual(
			'1cc78d75577b791a65ba2b27894aec3c6af99b64155e79f50f4725fd43341070'
		);
	});

	test('should return a derived key (cost: 32768, memoryCost: 8)', async () => {
		const password = new PasswordBuffer(hexToBuffer(nonce), 'uint32');
		password.setCounter(123);
		const result = await deriveKey(
			{
				...parameters,
				cost: 32768
			},
			hexToBuffer(salt),
			password.buffer
		);
		expect(bufferToHex(result.derivedKey)).toEqual(
			'6597973da7e41352ed98dd86fefa6568d7762ad8f42f06830d54700d452763da'
		);
	});
});
