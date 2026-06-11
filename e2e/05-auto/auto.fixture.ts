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

function submitForm() {
	document.querySelector<HTMLFormElement>('form[data-test-form]')?.requestSubmit();
}

describe('Auto Attribute', () => {
	test('should verify on render when auto is "onload" (attribute)', async () => {
		await renderWidget({
			attributes: {
				auto: 'onload'
			},
			config: {
				challenge
			}
		});
		await waitForVerified();
	});

	test('should verify on render when auto is "onload" (config)', async () => {
		await renderWidget({
			config: {
				auto: 'onload',
				challenge
			}
		});
		await waitForVerified();
	});

	test('should verify on form focus when auto is "onfocus" (attribute)', async () => {
		await renderWidget({
			attributes: {
				auto: 'onfocus'
			},
			config: {
				challenge
			},
			form: true
		});
		await userEvent.fill(
			await waitForSelector<HTMLInputElement>('input[data-test-input]'),
			'abcdef'
		);
		await waitForVerified();
	});

	test('should verify on form focus when auto is "onfocus" (config)', async () => {
		await renderWidget({
			config: {
				auto: 'onfocus',
				challenge
			},
			form: true
		});
		await userEvent.fill(
			await waitForSelector<HTMLInputElement>('input[data-test-input]'),
			'abcdef'
		);
		await waitForVerified();
	});

	test('should verify on form submit when auto is "onsubmit" (attribute)', async () => {
		await renderWidget({
			attributes: {
				auto: 'onsubmit'
			},
			config: {
				challenge
			},
			form: true
		});
		submitForm();
		await waitForVerified();
	});

	test('should verify on form submit when auto is "onsubmit" (config)', async () => {
		await renderWidget({
			config: {
				auto: 'onsubmit',
				challenge
			},
			form: true
		});
		submitForm();
		await waitForVerified();
	});
});
