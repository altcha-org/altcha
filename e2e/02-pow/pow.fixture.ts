import { describe, test } from 'vitest';
import { userEvent } from 'vitest/browser';
import '../../dist/main/altcha.js';
// @ts-expect-error
import argon2idWorker from '../../dist/workers/argon2id.js?raw';
// @ts-expect-error
import scryptWorker from '../../dist/workers/scrypt.js?raw';
import { delay, renderWidget, waitForSelector, waitForVerified } from '../helpers';
import { ChallengeParameters } from '../../src/types';

describe('PoW', () => {
	test('should successfully verify (PBKDF2/SHA-256)', async () => {
		await renderWidget({
			config: {
				challenge: {
					parameters: {
						algorithm: 'PBKDF2/SHA-256',
						nonce: '48451910200329cef2613e7386e002e9',
						salt: '69233ec009c4027efcc30bdc0644a8c2',
						cost: 10,
						keyLength: 32,
						keyPrefix: 'c94ebe900464a1482b268f2a333ff35f'
					}
				}
			}
		});
		await userEvent.click(await waitForSelector('.altcha-checkbox'));
		await waitForSelector('.altcha-checkbox-wrap label', { text: 'Verifying...' });
		await waitForSelector('.altcha-checkbox-wrap label', { text: 'Verified' });
		await waitForVerified();
	});

	test('should successfully verify (SHA-256)', async () => {
		await renderWidget({
			config: {
				challenge: {
					parameters: {
						algorithm: 'SHA-256',
						nonce: '4b5f073ade660e75f8c7b79e12ecd5e0',
						salt: '6755dff916f3d3fa73ed5c4ac79508d2',
						cost: 10,
						keyLength: 32,
						keyPrefix: '1e069a0242d5ebf33ebf68b4de5340e2'
					}
				}
			}
		});
		await userEvent.click(await waitForSelector('.altcha-checkbox'));
		await waitForSelector('.altcha-checkbox-wrap label', { text: 'Verifying...' });
		await waitForSelector('.altcha-checkbox-wrap label', { text: 'Verified' });
		await waitForVerified();
	});

	test('should successfully verify (ARGON2ID)', async () => {
		await renderWidget({
			config: {
				challenge: {
					parameters: {
						algorithm: 'ARGON2ID',
						nonce: '3886bdc1e67799a47b23f759cb38934e',
						salt: 'df0da721f437c24644bcf9965147582f',
						cost: 1,
						keyLength: 32,
						memoryCost: 16384,
						parallelism: 1,
						keyPrefix: '7f480a52b961bc4a1e1f93152800f8b4'
					}
				}
			},
			workers: {
				ARGON2ID: argon2idWorker
			}
		});
		await userEvent.click(await waitForSelector('.altcha-checkbox'));
		await waitForSelector('.altcha-checkbox-wrap label', { text: 'Verifying...' });
		await waitForSelector('.altcha-checkbox-wrap label', { text: 'Verified' });
		await waitForVerified();
	});

	test('should successfully verify (SCRYPT)', async () => {
		await renderWidget({
			config: {
				challenge: {
					parameters: {
						algorithm: 'SCRYPT',
						nonce: 'f3e1080daa4343a35416baeeb336637c',
						salt: 'aac6aa70ee4e20020f42ba6dd7a5a63d',
						cost: 16384,
						keyLength: 32,
						memoryCost: 8,
						parallelism: 1,
						keyPrefix: '47ae7cc61814e73510640c38f11b2cc7'
					}
				}
			},
			workers: {
				SCRYPT: scryptWorker
			}
		});
		await userEvent.click(await waitForSelector('.altcha-checkbox'));
		await waitForSelector('.altcha-checkbox-wrap label', { text: 'Verifying...' });
		await waitForSelector('.altcha-checkbox-wrap label', { text: 'Verified' });
		await waitForVerified();
	});

	test('should fail verification with invalid algorithm', async () => {
		await renderWidget({
			config: {
				challenge: {
					parameters: {
						algorithm: 'invalid-algo',
						nonce: '770a108004cbe8fa42e58f26c6675677',
						salt: 'd1389cd1d38c46fa26d40f5450c085ee',
						cost: 10,
						keyLength: 32,
						keyPrefix: '20921c1047202fabbe131f35b27101f0'
					}
				}
			}
		});
		await userEvent.click(await waitForSelector('.altcha-checkbox'));
		await waitForSelector('.altcha-error');
	});

	test('should fail verification with invalid challenge object', async () => {
		await renderWidget({
			config: {
				challenge: {
					parameters: {} as ChallengeParameters
				}
			}
		});
		await userEvent.click(await waitForSelector('.altcha-checkbox'));
		await waitForSelector('.altcha-error');
	});

	test('should display error the expiration error message', async () => {
		await renderWidget({
			config: {
				challenge: {
					parameters: {
						algorithm: 'PBKDF2/SHA-256',
						expiresAt: Math.floor((Date.now() + 1000) / 1000),
						nonce: '770a108004cbe8fa42e58f26c6675677',
						salt: 'd1389cd1d38c46fa26d40f5450c085ee',
						cost: 10,
						keyLength: 32,
						keyPrefix: '20921c1047202fabbe131f35b27101f0'
					}
				}
			}
		});
		await delay(1100);
		await userEvent.click(await waitForSelector('.altcha-checkbox'));
		await waitForSelector('.altcha-error');
		await waitForSelector('.altcha-error', { text: 'Verification expired. Try again.' });
	});
});
