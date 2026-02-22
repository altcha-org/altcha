import { describe, expect, test } from 'vitest';
import { deriveKey } from '../../src/algorithms/scrypt';
import { bufferToHex, hexToBuffer, PasswordBuffer } from '../../src/pow';
import { ChallengeParameters } from '../../src/types';

describe('SCRYPT', () => {
	const nonce = '39baf91a19d671f8231217f9e28342a6';
	const salt = '5e00d5d152e1a5db7d44fb6404a40a5e';
	const parameters: ChallengeParameters = {
		algorithm: 'SCRYPT',
		cost: 2,
		keyLength: 32,
		nonce,
		salt,
		keyPrefix: ''
	};

	test('should return a derived key (cost: 2)', async () => {
		const password = new PasswordBuffer(hexToBuffer(nonce), 'uint32');
		password.setCounter(123);
		const result = await deriveKey(parameters, hexToBuffer(salt), password.buffer);
		expect(bufferToHex(result.derivedKey)).toEqual(
			'04a0a1bf845a8174d65b4cf36d956f3606efb479dfbe02a6695d580be4ba2fcd'
		);
	});

	test('should return a derived key (cost: 4)', async () => {
		const password = new PasswordBuffer(hexToBuffer(nonce), 'uint32');
		password.setCounter(123);
		const result = await deriveKey(
			{
				...parameters,
				cost: 4
			},
			hexToBuffer(salt),
			password.buffer
		);
		expect(bufferToHex(result.derivedKey)).toEqual(
			'4fc35af70e7f3af0d83bf989e25ba131c2f944165135cee6aaf78f2ca85fea1d'
		);
	});
});
