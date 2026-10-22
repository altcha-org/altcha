import { describe, expect, test, vi } from 'vitest';
import { userEvent } from 'vitest/browser';
import '../../dist/main/altcha.js';
import { renderWidget, waitForSelector, waitForVerified } from '../helpers';
import { Challenge } from '../../src/types';
import type { HisData } from '../../src/his';

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
		await waitForSelector('.altcha-error', { text: 'Verification failed. Try again later.' });
	});

	test('should display the network error message if code verification request fails', async () => {
		await renderWidget({
			config: {
				challenge,
				fetch: () => Promise.reject(new TypeError('Failed to fetch')),
				verifyUrl: '/verify'
			}
		});
		await userEvent.click(await waitForSelector('.altcha-checkbox'));
		await waitForSelector('.altcha-code-challenge-image');
		const elInput = await waitForSelector<HTMLInputElement>('.altcha-code-challenge input');
		await userEvent.fill(elInput, 'abcdef');
		await userEvent.click(await waitForSelector('.altcha-code-challenge button[type="submit"]'));
		await waitForSelector('.altcha-error', { text: 'Error: Failed to fetch' });
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

	function mockHisFetch(codeChallengeHis: boolean, options: { failFirstVerify?: boolean } = {}) {
		const calls: { challengeHis: HisData[]; verifyBodies: { his?: HisData }[] } = {
			challengeHis: [],
			verifyBodies: []
		};
		const fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
			const path = new URL(String(input), location.href).pathname;
			const method = init?.method || 'GET';
			if (path === '/challenge' && method === 'GET') {
				return Response.json({ his: { url: '/challenge' } });
			}
			if (path === '/challenge' && method === 'POST') {
				calls.challengeHis.push(JSON.parse(String(init?.body)).his);
				return Response.json({
					...challenge,
					codeChallenge: { ...challenge.codeChallenge, his: codeChallengeHis || undefined }
				});
			}
			if (path === '/verify' && method === 'POST') {
				calls.verifyBodies.push(JSON.parse(String(init?.body)));
				if (options.failFirstVerify && calls.verifyBodies.length === 1) {
					return Response.json({ verified: false, reason: 'Wrong code.' });
				}
				return Response.json({ verified: true, payload: 'x' });
			}
			throw new Error(`Unexpected fetch ${method} ${path}`);
		};
		return { calls, fetch };
	}

	async function submitCode(code: string) {
		await userEvent.click(await waitForSelector('.altcha-checkbox'));
		const elInput = await waitForSelector<HTMLInputElement>('.altcha-code-challenge input');
		await userEvent.type(elInput, code);
		await userEvent.click(await waitForSelector('.altcha-code-challenge button[type="submit"]'));
	}

	async function solveWithCode() {
		await submitCode('abcde');
		await waitForVerified();
	}

	function verifyHis(body: { his?: HisData }): HisData {
		if (!body.his) {
			throw new Error('Verify request without his');
		}
		return body.his;
	}

	test('should send HIS collected since the challenge to verifyUrl when codeChallenge.his is set', async () => {
		const { calls, fetch } = mockHisFetch(true);
		await renderWidget({ config: { challenge: '/challenge', verifyUrl: '/verify', fetch } });
		await solveWithCode();
		const challengeHis = calls.challengeHis[0];
		expect(challengeHis.key).toHaveLength(0);
		const his = verifyHis(calls.verifyBodies[0]);
		expect(his.key.length).toBeGreaterThanOrEqual(5);
		const maxChallengeClick = Math.max(-Infinity, ...challengeHis.click.map((c: number[]) => c[2]));
		expect(his.click.length).toBeGreaterThan(0);
		for (const c of his.click) {
			expect(c[2]).toBeGreaterThan(maxChallengeClick);
		}
	});

	test('should not send HIS to verifyUrl when codeChallenge.his is not set', async () => {
		const { calls, fetch } = mockHisFetch(false);
		await renderWidget({ config: { challenge: '/challenge', verifyUrl: '/verify', fetch } });
		await solveWithCode();
		expect(calls.verifyBodies[0]).toBeDefined();
		expect('his' in calls.verifyBodies[0]).toBe(false);
	});

	test('should send the whole interaction on a retry challenge and only new interaction to verify', async () => {
		const { calls, fetch } = mockHisFetch(true, { failFirstVerify: true });
		const el = await renderWidget({
			config: { challenge: '/challenge', verifyUrl: '/verify', fetch }
		});
		await submitCode('abcde');
		await waitForSelector('.altcha-error');
		el.reset();
		await submitCode('fghij');
		await waitForVerified();

		const [firstChallenge, retryChallenge] = calls.challengeHis;
		const firstVerifyHis = verifyHis(calls.verifyBodies[0]);
		const retryVerifyHis = verifyHis(calls.verifyBodies[1]);
		const retryClicks = retryChallenge.click.map((c: number[]) => c[2]);
		const retryKeys = retryChallenge.key.map((k: number[]) => k[0]);
		expect(firstChallenge.click.length).toBeGreaterThan(0);
		for (const c of firstChallenge.click) {
			expect(retryClicks).toContain(c[2]);
		}
		expect(firstVerifyHis.key.length).toBeGreaterThanOrEqual(5);
		for (const k of firstVerifyHis.key) {
			expect(retryKeys).toContain(k[0]);
		}
		const maxRetryKey = Math.max(...retryKeys);
		expect(retryVerifyHis.key.length).toBeGreaterThanOrEqual(5);
		for (const k of retryVerifyHis.key) {
			expect(k[0]).toBeGreaterThan(maxRetryKey);
		}
	});
});
