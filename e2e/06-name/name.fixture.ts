import { describe, test } from 'vitest';
import { userEvent } from 'vitest/browser';
import '../../dist/main/altcha.js';
import { renderWidget, waitForSelector, waitForVerified } from '../helpers';
import { Challenge } from '../../src/types';

const challenge: Challenge = {
	parameters: {
		algorithm: 'PBKDF2/SHA-256',
		nonce: '770a108004cbe8fa42e58f26c6675677',
		salt: 'd1389cd1d38c46fa26d40f5450c085ee',
		cost: 10,
		keyLength: 32,
		keyPrefix: '20921c1047202fabbe131f35b27101f0'
	}
};

describe('Name Attribute', () => {
	test('should use a custom input name (attribute)', async () => {
		await renderWidget({
			attributes: {
				name: 'custom-name'
			},
			config: {
				challenge
			}
		});
		await userEvent.click(await waitForSelector('.altcha-checkbox'));
		await waitForVerified('custom-name');
	});

	test('should use a custom input name (config)', async () => {
		await renderWidget({
			config: {
				challenge,
				name: 'custom-name'
			}
		});
		await userEvent.click(await waitForSelector('.altcha-checkbox'));
		await waitForVerified('custom-name');
	});
});
