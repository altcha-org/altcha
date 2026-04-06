import { describe, expect, test } from 'vitest';
import { deriveKey } from '../../src/algorithms/pbkdf2';
import { ObfuscationPlugin } from '../../src/plugins/obfuscation.plugin';

describe('ObfuscationPlugin', () => {
	describe('obfuscate()', () => {
		test('should return obfuscated data as base64 string', async () => {
			const result = await ObfuscationPlugin.obfuscate('hello world');
			expect(result).toBeTypeOf('string');
			const decoded = JSON.parse(atob(result));
			expect(decoded.parameters.algorithm).toEqual('PBKDF2/SHA-256');
			expect(decoded.parameters.cost).toBeDefined();
			expect(decoded.parameters.salt).toBeDefined();
			expect(decoded.parameters.nonce).toBeDefined();
			expect(decoded.parameters.keyPrefix).toBeDefined();
			expect(decoded.cipher.iv).toBeDefined();
			expect(decoded.cipher.data).toBeDefined();
		});
	});

	describe('deobfuscate()', () => {
		test('should return de-obfuscated data', async () => {
			const data = await ObfuscationPlugin.obfuscate('hello world');
			const result = await ObfuscationPlugin.deobfuscate(data, {
				deriveKey
			});
			expect(result).toEqual('hello world');
		});
	});
});
