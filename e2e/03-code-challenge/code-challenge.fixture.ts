import { describe, expect, test, vi } from 'vitest';
import { userEvent } from 'vitest/browser';
import '../../dist/main/altcha.js';
import { renderWidget, waitForSelector, waitForVerified } from '../helpers';
import { Challenge } from '../../src/types';

const challenge: Challenge = {
	codeChallenge: {
		image: 'data:image/gif;base64,R0lGODdhAQABAIABAAAAAN0N4ywAAAAAAQABAAACAkwBADs=',
		length: 5
	},
	parameters: {
		algorithm: 'PBKDF2/SHA-256',
		nonce: '770a108004cbe8fa42e58f26c6675677',
		salt: 'd1389cd1d38c46fa26d40f5450c085ee',
		cost: 10,
		keyLength: 32,
		keyPrefix: '20921c1047202fabbe131f35b27101f0'
	}
};

describe('Code Challenge', () => {
	test('should request code challenge verification and succeed', async () => {
		await renderWidget({
			config: {
				challenge,
				verifyFunction: (_payload, _code) => {
					return Promise.resolve({
						payload: '',
						signature: '',
						verified: true,
						algorithm: '',
						verificationData: ''
					});
				}
			}
		});
		await userEvent.click(await waitForSelector('.altcha-checkbox'));
		await waitForSelector('.altcha-checkbox-wrap label', { text: 'Verifying...' });
		await waitForSelector('.altcha-checkbox-wrap label', { text: 'Verification required!' });
		await waitForSelector('.altcha-code-challenge-image');
		const elInput = await waitForSelector<HTMLInputElement>('.altcha-code-challenge input');
		await userEvent.fill(elInput, 'abcdef');
		await userEvent.click(await waitForSelector('.altcha-code-challenge button[type="submit"]'));
		await waitForSelector('.altcha-checkbox-wrap label', { text: 'Verified' });
		await waitForVerified();
	});

	test('should request code challenge verification and display an error message if fails', async () => {
		await renderWidget({
			config: {
				challenge,
				verifyFunction: (_payload, _code) => {
					return Promise.resolve({
						reason: 'Wrong code.'
					});
				}
			}
		});
		await userEvent.click(await waitForSelector('.altcha-checkbox'));
		await waitForSelector('.altcha-checkbox-wrap label', { text: 'Verifying...' });
		await waitForSelector('.altcha-checkbox-wrap label', { text: 'Verification required!' });
		await waitForSelector('.altcha-code-challenge-image');
		const elInput = await waitForSelector<HTMLInputElement>('.altcha-code-challenge input');
		await userEvent.fill(elInput, 'abcdef');
		await userEvent.click(await waitForSelector('.altcha-code-challenge button[type="submit"]'));
		await waitForSelector('.altcha-error');
	});

	test('should request form submission after code challenge when auto=onsubmit', async () => {
		await renderWidget({
			form: true,
			config: {
				auto: 'onsubmit',
				challenge,
				verifyFunction: (_payload, _code) => {
					return Promise.resolve({
						payload: '',
						signature: '',
						verified: true,
						algorithm: '',
						verificationData: ''
					});
				}
			}
		});
		let formSubmitted = false;
		document.querySelector('form[data-test-form]')?.addEventListener('submit', () => {
			formSubmitted = true;
		});
		await userEvent.click(await waitForSelector('button[data-test-button]'));
		await waitForSelector('.altcha-checkbox-wrap label', { text: 'Verifying...' });
		await waitForSelector('.altcha-checkbox-wrap label', { text: 'Verification required!' });
		await waitForSelector('.altcha-code-challenge-image');
		const elInput = await waitForSelector<HTMLInputElement>('.altcha-code-challenge input');
		await userEvent.fill(elInput, 'abcdef');
		await userEvent.click(await waitForSelector('.altcha-code-challenge button[type="submit"]'));
		await vi.waitFor(() => expect(formSubmitted).toBe(true), { timeout: 10_000 });
	});
});
