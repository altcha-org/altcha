import { describe, expect, test } from 'vitest';
import { userEvent } from 'vitest/browser';
import '../../dist/main/altcha.js';
import { delay, renderWidget, waitForSelector } from '../helpers';
import { State } from '../../src/types';

function dispatchPageshow(persisted = false) {
	window.dispatchEvent(
		new PageTransitionEvent('pageshow', {
			persisted
		})
	);
}

describe('Widget', () => {
	test('should render the widget with default config', async () => {
		await renderWidget();
		await waitForSelector('.altcha');
		await waitForSelector('.altcha-checkbox');
		await waitForSelector('.altcha-logo');
		await waitForSelector('.altcha-footer');
	});

	test('should render the widget with the native checkbox when type is "native" (attribute)', async () => {
		await renderWidget({
			attributes: {
				type: 'native'
			}
		});
		await waitForSelector('.altcha-checkbox-native');
	});

	test('should render the widget with the native checkbox when type is "native" (config)', async () => {
		await renderWidget({
			config: {
				type: 'native'
			}
		});
		await waitForSelector('.altcha-checkbox-native');
	});

	test('should render the widget with the native checkbox when type is "switch" (attribute)', async () => {
		await renderWidget({
			attributes: {
				type: 'switch'
			}
		});
		await waitForSelector('.altcha-switch');
	});

	test('should render the widget with the native checkbox when type is "switch" (config)', async () => {
		await renderWidget({
			config: {
				type: 'switch'
			}
		});
		await waitForSelector('.altcha-switch');
	});

	test('should render the widget in the standard mode with defaults', async () => {
		await renderWidget();
		await waitForSelector('.altcha[data-display="standard"]');
	});

	['bar', 'floating', 'invisible', 'overlay', 'standard'].forEach((display) => {
		test(`should render the widget with display "${display}" (attribute)`, async () => {
			await renderWidget({
				attributes: {
					// @ts-ignore
					display
				}
			});
			await waitForSelector(`.altcha[data-display="${display}"]`);
		});

		test(`should render the widget with display "${display}" (config)`, async () => {
			await renderWidget({
				config: {
					// @ts-ignore
					display
				}
			});
			await waitForSelector(`.altcha[data-display="${display}"]`);
		});
	});

	test('should render the widget without the logo when hideLogo is true', async () => {
		await renderWidget({
			config: {
				hideLogo: true
			}
		});
		await waitForSelector('.altcha');
		await waitForSelector('.altcha-footer');
		expect(document.querySelector('.altcha-logo')).toBeNull();
	});

	test('should render the widget without the footer when hideFooter is true', async () => {
		await renderWidget({
			config: {
				hideFooter: true
			}
		});
		await waitForSelector('.altcha');
		await waitForSelector('.altcha-logo');
		expect(document.querySelector('.altcha-footer')).toBeNull();
	});

	test('should display the error message after clicking the checkbox when mockError is true', async () => {
		await renderWidget({
			config: {
				mockError: true
			}
		});
		await userEvent.click(await waitForSelector('.altcha-checkbox'));
		await waitForSelector('.altcha-error');
	});

	test('should reset state when a bfcache pageshow event fires', async () => {
		await renderWidget({
			config: {
				minDuration: 200,
				test: true
			}
		});
		await userEvent.click(await waitForSelector('.altcha-checkbox'));
		await waitForSelector(`.altcha[data-state="${State.VERIFYING}"]`);
		dispatchPageshow(true);
		await delay(10);
		expect(document.querySelector('.altcha')?.getAttribute('data-state')).toBe(State.UNVERIFIED);
	});

	test('should not reset state when a non-bfcache pageshow event fires', async () => {
		await renderWidget({
			config: {
				minDuration: 200,
				test: true
			}
		});
		await userEvent.click(await waitForSelector('.altcha-checkbox'));
		await waitForSelector(`.altcha[data-state="${State.VERIFYING}"]`);
		dispatchPageshow(false);
		await delay(10);
		expect(document.querySelector('.altcha')?.getAttribute('data-state')).toBe(State.VERIFYING);
	});
});
