import { describe, expect, test } from 'vitest';
import {
	parseVerificationData,
	verifyFieldsHash,
	verifyServerSignature
} from '../src/server-signature';
import { bufferToHex, hash, hmac } from '../src/helpers';
import { HmacAlgorithm } from '../src/types';

describe('Server Signature', () => {
	describe('parseVerificationData()', () => {
		test('should return an object with parsed verification data', () => {
			expect(
				parseVerificationData('expire=12345&time=1.2&score=2.5&fields=a,b,c&verified=true')
			).toEqual({
				expire: 12345,
				time: 1.2,
				score: 2.5,
				fields: ['a', 'b', 'c'],
				verified: true
			});
		});
	});

	describe('verifyFieldsHash()', () => {
		test('should return true if the fields hash matches', async () => {
			const algorithm = 'SHA-256';
			const formData = new FormData();
			formData.set('a', '1');
			formData.set('b', '2');
			expect(
				await verifyFieldsHash({
					fields: ['a', 'b'],
					fieldsHash: bufferToHex(
						await hash(algorithm, Object.values(Object.fromEntries(formData)).join('\n'))
					),
					formData
				})
			).toEqual(true);
		});

		test('should return true if the fields hash matches with multi-line values', async () => {
			const algorithm = 'SHA-256';
			const formData = new FormData();
			formData.set('a', '1');
			formData.set('b', 'multi\r\nline\nvalue');
			expect(
				await verifyFieldsHash({
					fields: ['a', 'b'],
					fieldsHash: bufferToHex(
						await hash(algorithm, Object.values(Object.fromEntries(formData)).join('\n'))
					),
					formData
				})
			).toEqual(true);
		});

		test('should return false if the fields data are tampered', async () => {
			const algorithm = 'SHA-256';
			const formData = new FormData();
			formData.set('a', '1');
			formData.set('b', '2');
			const fieldsHash = bufferToHex(
				await hash(algorithm, Object.values(Object.fromEntries(formData)).join('\n'))
			);
			formData.set('b', '3');
			expect(
				await verifyFieldsHash({
					fields: ['a', 'b'],
					fieldsHash,
					formData
				})
			).toEqual(false);
		});
	});

	describe('verifyServerSignature()', () => {
		const algorithm = HmacAlgorithm.SHA_256;
		const hmacSecret = 'secret';

		test('should return successful verification result', async () => {
			const verificationData = 'verified=true';
			const signature = bufferToHex(
				await hmac(algorithm, await hash(algorithm, verificationData), hmacSecret)
			);
			expect(
				await verifyServerSignature({
					hmacSecret,
					payload: {
						algorithm,
						signature,
						verificationData,
						verified: true
					}
				})
			).toEqual({
				expired: false,
				invalidSignature: false,
				invalidSolution: false,
				time: expect.any(Number),
				verificationData: parseVerificationData(verificationData),
				verified: true
			});
		});

		test('should return failed verification result if unverified', async () => {
			const verificationData = `verified=false`;
			const signature = bufferToHex(
				await hmac(algorithm, await hash(algorithm, verificationData), hmacSecret)
			);
			expect(
				await verifyServerSignature({
					hmacSecret,
					payload: {
						algorithm,
						signature,
						verificationData,
						verified: true
					}
				})
			).toEqual({
				expired: false,
				invalidSignature: false,
				invalidSolution: true,
				time: expect.any(Number),
				verificationData: parseVerificationData(verificationData),
				verified: false
			});
		});

		test('should return failed verification result if signature is incorrect', async () => {
			const verificationData = `verified=true`;
			const signature = bufferToHex(
				await hmac(algorithm, await hash(algorithm, verificationData), 'invalid')
			);
			expect(
				await verifyServerSignature({
					hmacSecret,
					payload: {
						algorithm,
						signature,
						verificationData,
						verified: true
					}
				})
			).toEqual({
				expired: false,
				invalidSignature: true,
				invalidSolution: false,
				time: expect.any(Number),
				verificationData: parseVerificationData(verificationData),
				verified: false
			});
		});

		test('should return failed verification result if expired', async () => {
			const verificationData = `expire=${Math.floor(Date.now() - 1_000) / 1_000}&verified=true`;
			const signature = bufferToHex(
				await hmac(algorithm, await hash(algorithm, verificationData), hmacSecret)
			);
			expect(
				await verifyServerSignature({
					hmacSecret,
					payload: {
						algorithm,
						signature,
						verificationData,
						verified: true
					}
				})
			).toEqual({
				expired: true,
				invalidSignature: false,
				invalidSolution: false,
				time: expect.any(Number),
				verificationData: parseVerificationData(verificationData),
				verified: false
			});
		});
	});
});
