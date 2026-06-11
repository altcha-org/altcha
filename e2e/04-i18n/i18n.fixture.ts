import { describe, test } from 'vitest';
import '../../dist/main/altcha.js';
import '../../dist/i18n/all.js';
import { renderWidget, waitForSelector } from '../helpers';

describe('I18n', () => {
	test('should render the widget in German when language is "de" (attribute)', async () => {
		await renderWidget({
			attributes: {
				language: 'de'
			}
		});
		await waitForSelector('.altcha');
		await waitForSelector('.altcha-checkbox-wrap label', { text: 'Ich bin kein Roboter' });
	});

	test('should render the widget in German when language is "de" (config)', async () => {
		await renderWidget({
			config: {
				language: 'de'
			}
		});
		await waitForSelector('.altcha');
		await waitForSelector('.altcha-checkbox-wrap label', { text: 'Ich bin kein Roboter' });
	});

	test('should apply dir="rtl" if language is "ar"', async () => {
		await renderWidget({
			attributes: {
				language: 'ar'
			}
		});
		await waitForSelector('.altcha[dir="rtl"]');
	});

	test('should apply dir="rtl" if language is "he"', async () => {
		await renderWidget({
			attributes: {
				language: 'he'
			}
		});
		await waitForSelector('.altcha[dir="rtl"]');
	});
});
