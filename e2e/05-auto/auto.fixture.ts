import { ClientFunction, Selector } from 'testcafe';
import { delay, renderWidget } from '../helpers';
import { Challenge } from '../../src/types';

fixture`Auto Attribute`.page`../index.html`.clientScripts([
	{
		path: '../../dist/main/altcha.umd.cjs'
	}
]);

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

test('should verify on render when auto is "onload" (attribute)', async (t) => {
	await renderWidget({
		attributes: {
			auto: 'onload'
		},
		config: {
			challenge
		}
	});
	await delay(1000);
	await t.expect(Selector('.altcha-checkbox input').checked).ok();
	await t.expect(Selector('input[name="altcha"]').value).ok();
});

test('should verify on render when auto is "onload" (config)', async (t) => {
	await renderWidget({
		config: {
			auto: 'onload',
			challenge
		}
	});
	await delay(1000);
	await t.expect(Selector('.altcha-checkbox input').checked).ok();
	await t.expect(Selector('input[name="altcha"]').value).ok();
});

test('should verify on form focus when auto is "onfocus" (attribute)', async (t) => {
	await renderWidget({
		attributes: {
			auto: 'onfocus'
		},
		config: {
			challenge
		},
		form: true
	});
	await t.typeText('input[data-test-input]', 'abcdef');
	await delay(1000);
	await t.expect(Selector('.altcha-checkbox input').checked).ok();
	await t.expect(Selector('input[name="altcha"]').value).ok();
});

test('should verify on form focus when auto is "onfocus" (config)', async (t) => {
	await renderWidget({
		config: {
			auto: 'onfocus',
			challenge
		},
		form: true
	});
	await t.typeText('input[data-test-input]', 'abcdef');
	await delay(1000);
	await t.expect(Selector('.altcha-checkbox input').checked).ok();
	await t.expect(Selector('input[name="altcha"]').value).ok();
});

test('should verify on form submit when auto is "onsubmit" (attribute)', async (t) => {
	await renderWidget({
		attributes: {
			auto: 'onsubmit'
		},
		config: {
			challenge
		},
		form: true
	});
	const submitForm = ClientFunction(() => {
		// @ts-ignore
		document.querySelector('form[data-test-form]')?.requestSubmit();
	});
	await submitForm();
	await delay(1000);
	await t.expect(Selector('.altcha-checkbox input').checked).ok();
	await t.expect(Selector('input[name="altcha"]').value).ok();
});

test('should verify on form submit when auto is "onsubmit" (config)', async (t) => {
	await renderWidget({
		config: {
			auto: 'onsubmit',
			challenge
		},
		form: true
	});
	const submitForm = ClientFunction(() => {
		// @ts-ignore
		document.querySelector('form[data-test-form]')?.requestSubmit();
	});
	await submitForm();
	await delay(1000);
	await t.expect(Selector('.altcha-checkbox input').checked).ok();
	await t.expect(Selector('input[name="altcha"]').value).ok();
});
