import { describe, expect, test } from 'vitest';
import { deriveKey } from '../../src/algorithms/pbkdf2';
import { PasswordBuffer } from '../../src/pow';
import { bufferToHex, hexToBuffer } from '../../src/helpers';
import { ChallengeParameters } from '../../src/types';

describe('PBKDF2', () => {
	const nonce = '39baf91a19d671f8231217f9e28342a6';
	const salt = '5e00d5d152e1a5db7d44fb6404a40a5e';
	const parameters: ChallengeParameters = {
		algorithm: 'PBKDF2/SHA-256',
		cost: 1,
		keyLength: 32,
		nonce,
		salt,
		keyPrefix: ''
	};

	test('should return a derived key (SHA-256, cost: 1)', async () => {
		const password = new PasswordBuffer(hexToBuffer(nonce), 'uint32');
		password.setCounter(123);
		const result = await deriveKey(parameters, hexToBuffer(salt), password.buffer);
		expect(bufferToHex(result.derivedKey)).toEqual(
			'722ede188d41e7a7c9fd5447dca6cbb84e09c15724dbaadfb5bfb37d2cd4effa'
		);
	});

	test('should return a derived key (SHA-256, cost: 2)', async () => {
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
			'cba117f9a790022a55589d5008c9f003e49c011ff7fe34fc838788a1825524f7'
		);
	});

	test('should return a derived key (SHA-384, cost: 1)', async () => {
		const password = new PasswordBuffer(hexToBuffer(nonce), 'uint32');
		password.setCounter(123);
		const result = await deriveKey(
			{
				...parameters,
				algorithm: 'PBKDF2/SHA-384',
				cost: 1
			},
			hexToBuffer(salt),
			password.buffer
		);
		expect(bufferToHex(result.derivedKey)).toEqual(
			'16fa2f9d7433fd956d7bb82745148bd18f44b8e87f8a57b47d1387f589402851'
		);
	});

	test('should return a derived key (SHA-512, cost: 1)', async () => {
		const password = new PasswordBuffer(hexToBuffer(nonce), 'uint32');
		password.setCounter(123);
		const result = await deriveKey(
			{
				...parameters,
				algorithm: 'PBKDF2/SHA-512',
				cost: 1
			},
			hexToBuffer(salt),
			password.buffer
		);
		expect(bufferToHex(result.derivedKey)).toEqual(
			'd1033a8a8ae79a03ed06bdcfd8ad361aaafc72701c5db9da40fdeecefe3ec41a'
		);
	});
});
