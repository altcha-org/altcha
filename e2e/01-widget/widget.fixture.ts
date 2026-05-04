import { ClientFunction, Selector } from 'testcafe';
import { delay, renderWidget } from '../helpers';
import { State } from '../../src/types';

fixture`Widget`.page`../index.html`.clientScripts([
	{
		path: '../../dist/main/altcha.umd.cjs'
	}
]);

const dispatchPageshow = ClientFunction((persisted = false) => {
	window.dispatchEvent(
		new PageTransitionEvent('pageshow', {
			persisted
		})
	);
});

test('should render the widget with default config', async (t) => {
	await renderWidget();
	await t.expect(Selector('.altcha').exists).ok();
	await t.expect(Selector('.altcha-checkbox').exists).ok();
	await t.expect(Selector('.altcha-logo').exists).ok();
	await t.expect(Selector('.altcha-footer').exists).ok();
});

test('should render the widget with the native checkbox when type is "native" (attribute)', async (t) => {
	await renderWidget({
		attributes: {
			type: 'native'
		}
	});
	await t.expect(Selector('.altcha-checkbox-native').exists).ok();
});

test('should render the widget with the native checkbox when type is "native" (config)', async (t) => {
	await renderWidget({
		config: {
			type: 'native'
		}
	});
	await t.expect(Selector('.altcha-checkbox-native').exists).ok();
});

test('should render the widget with the native checkbox when type is "switch" (attribute)', async (t) => {
	await renderWidget({
		attributes: {
			type: 'switch'
		}
	});
	await t.expect(Selector('.altcha-switch').exists).ok();
});

test('should render the widget with the native checkbox when type is "switch" (config)', async (t) => {
	await renderWidget({
		config: {
			type: 'switch'
		}
	});
	await t.expect(Selector('.altcha-switch').exists).ok();
});

test('should render the widget in the standard mode with defaults', async (t) => {
	await renderWidget();
	await t.expect(Selector('.altcha[data-display="standard"]').exists).ok();
});

['bar', 'floating', 'invisible', 'overlay', 'standard'].forEach((display) => {
	test(`should render the widget with display "${display}" (attribute)`, async (t) => {
		await renderWidget({
			attributes: {
				// @ts-ignore
				display
			}
		});
		await t.expect(Selector(`.altcha[data-display="${display}"]`).exists).ok();
	});

	test(`should render the widget with display "${display}" (config)`, async (t) => {
		await renderWidget({
			config: {
				// @ts-ignore
				display
			}
		});
		await t.expect(Selector(`.altcha[data-display="${display}"]`).exists).ok();
	});
});

test('should render the widget without the logo when hideLogo is true', async (t) => {
	await renderWidget({
		config: {
			hideLogo: true
		}
	});
	await t.expect(Selector('.altcha').exists).ok();
	await t.expect(Selector('.altcha-footer').exists).ok();
	await t.expect(Selector('.altcha-logo').exists).notOk();
});

test('should render the widget without the footer when hideFooter is true', async (t) => {
	await renderWidget({
		config: {
			hideFooter: true
		}
	});
	await t.expect(Selector('.altcha').exists).ok();
	await t.expect(Selector('.altcha-logo').exists).ok();
	await t.expect(Selector('.altcha-footer').exists).notOk();
});

test('should display the error message after clicking the checkbox when mockError is true', async (t) => {
	await renderWidget({
		config: {
			mockError: true
		}
	});
	await t.click('.altcha-checkbox');
	await t.expect(Selector('.altcha-error').exists).ok();
});

test('should reset state when a bfcache pageshow event fires', async (t) => {
	await renderWidget({
		config: {
			minDuration: 200,
			test: true
		}
	});
	await t.click('.altcha-checkbox');
	await t.expect(Selector('.altcha').getAttribute('data-state')).eql(State.VERIFYING);
	await dispatchPageshow(true);
	await delay(10);
	await t.expect(Selector('.altcha').getAttribute('data-state')).eql(State.UNVERIFIED);
});

test('should not reset state when a non-bfcache pageshow event fires', async (t) => {
	await renderWidget({
		config: {
			minDuration: 200,
			test: true
		}
	});
	await t.click('.altcha-checkbox');
	await t.expect(Selector('.altcha').getAttribute('data-state')).eql(State.VERIFYING);
	await dispatchPageshow(false);
	await delay(10);
	await t.expect(Selector('.altcha').getAttribute('data-state')).eql(State.VERIFYING);
});
