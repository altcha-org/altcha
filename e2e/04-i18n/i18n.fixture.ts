import { Selector } from 'testcafe';
import { renderWidget } from '../helpers';

fixture`I18n`.page`../index.html`.clientScripts([
	{
		path: '../../dist/main/altcha.umd.cjs'
	},
	{
		path: '../../dist/i18n/all.umd.cjs'
	}
]);

test('should render the widget in German when language is "de" (attribute)', async (t) => {
	await renderWidget({
		attributes: {
			language: 'de'
		}
	});
	await t.expect(Selector('.altcha').exists).ok();
	await t
		.expect(Selector('.altcha-checkbox-wrap label').withText('Ich bin kein Roboter').exists)
		.ok();
});

test('should render the widget in German when language is "de" (config)', async (t) => {
	await renderWidget({
		config: {
			language: 'de'
		}
	});
	await t.expect(Selector('.altcha').exists).ok();
	await t
		.expect(Selector('.altcha-checkbox-wrap label').withText('Ich bin kein Roboter').exists)
		.ok();
});

test('should apply dir="rtl" if language is "ar"', async (t) => {
	await renderWidget({
		attributes: {
			language: 'ar'
		}
	});
	await t.expect(Selector('.altcha').withAttribute('dir', 'rtl').exists).ok();
});

test('should apply dir="rtl" if language is "he"', async (t) => {
	await renderWidget({
		attributes: {
			language: 'he'
		}
	});
	await t.expect(Selector('.altcha').withAttribute('dir', 'rtl').exists).ok();
});
