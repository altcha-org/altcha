import { Selector } from 'testcafe';
import { delay, renderWidget } from '../helpers';
import { Challenge } from '../../src/types';

fixture`Name Attribute`.page`../index.html`.clientScripts([
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

test('should use a custom input name (attribute)', async (t) => {
	await renderWidget({
		attributes: {
			name: 'custom-name'
		},
		config: {
			challenge
		}
	});
	await t.click('.altcha-checkbox');
	await delay(1000);
	await t.expect(Selector('.altcha-checkbox input').checked).ok();
	await t.expect(Selector('input[name="custom-name"]').value).ok();
});

test('should use a custom input name (config)', async (t) => {
	await renderWidget({
		config: {
			challenge,
			name: 'custom-name'
		}
	});
	await t.click('.altcha-checkbox');
	await delay(1000);
	await t.expect(Selector('.altcha-checkbox input').checked).ok();
	await t.expect(Selector('input[name="custom-name"]').value).ok();
});
