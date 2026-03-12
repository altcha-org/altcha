import { describe, expect, test } from 'vitest';
import * as helpers from '../src/helpers';

const textEncoder = new TextEncoder();

describe('helpers', () => {
	describe('bufferStartsWith()', () => {
		test('should return true if the buffer starts with prefix', () => {
			expect(
				helpers.bufferStartsWith(textEncoder.encode('Hello World'), textEncoder.encode('Hello'))
			).toEqual(true);
		});

		test('should return false if the buffer does not starts with prefix', () => {
			expect(
				helpers.bufferStartsWith(textEncoder.encode('Hello World'), textEncoder.encode('invalid'))
			).toEqual(false);
		});
	});

	describe('bufferToHex()', () => {
		test('should return HEX-encoded buffer', () => {
			expect(helpers.bufferToHex(textEncoder.encode('Hello World'))).toEqual(
				'48656c6c6f20576f726c64'
			);
		});
	});

	describe('canonicalJSON()', () => {
		test('should return a JSON string with keys sorted', () => {
			const obj = {
				a: 'a',
				c: {
					e: 'e',
					d: 'd'
				},
				b: 'b'
			};
			expect(helpers.canonicalJSON(obj)).toEqual(
				JSON.stringify({
					a: 'a',
					b: 'b',
					c: {
						d: 'd',
						e: 'e'
					}
				})
			);
		});
	});

	describe('concatBuffers()', () => {
		test('should concatenate buffers', () => {
			expect(
				helpers.concatBuffers(textEncoder.encode('Hello '), textEncoder.encode('World'))
			).toEqual(textEncoder.encode('Hello World'));
		});
	});

	describe('hexToBuffer()', () => {
		test('should return a buffer from a HEX-string', () => {
			expect(helpers.hexToBuffer('48656c6c6f20576f726c64')).toEqual(
				textEncoder.encode('Hello World')
			);
		});
	});

	describe('hash()', () => {
		test('should return a SHA-256 as buffer', async () => {
			expect(helpers.bufferToHex(await helpers.hash('SHA-256', 'Hello World'))).toEqual(
				'a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e'
			);
		});
	});

	describe('hmac()', () => {
		test('should return a SHA-256 HMAC as buffer', async () => {
			expect(helpers.bufferToHex(await helpers.hash('SHA-256', 'Hello World'))).toEqual(
				'a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e'
			);
		});
	});

	describe('randomInt()', () => {
		test('should return a random integer in given range', () => {
			const check = (min: number, max: number) => {
				const result = helpers.randomInt(min, max);
				expect(result).toBeGreaterThanOrEqual(min);
				expect(result).toBeLessThanOrEqual(max);
			};
			check(0, 0);
			check(1, 1);
			check(0, 1);
			check(0, 10);
			check(10, 100);
		});
	});

	describe('sortKeys()', () => {
		test('should return a new object with keys sorted', () => {
			const obj = {
				a: 'a',
				c: {
					e: 'e',
					d: 'd'
				},
				b: 'b'
			};
			const result = helpers.sortKeys(obj);
			expect(Object.keys(result)).toEqual(['a', 'b', 'c']);
			expect(Object.keys(result.c)).toEqual(['d', 'e']);
		});
	});
});
