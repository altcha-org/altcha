import { ClientFunction, Selector } from 'testcafe';
import { delay, renderWidget } from '../helpers';
import { Challenge } from '../../src/types';

fixture`Code Challenge`.page`../index.html`.clientScripts([
	{
		path: '../../dist/main/altcha.umd.cjs'
	}
]);

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

test('should request code challenge verification and succeed', async (t) => {
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
	await t.click('.altcha-checkbox');
	await t.expect(Selector('.altcha-checkbox-wrap label').withText('Verifying...').exists).ok();
	await delay(1000);
	await t
		.expect(Selector('.altcha-checkbox-wrap label').withText('Verification required!').exists)
		.ok();
	await t.expect(Selector('.altcha-code-challenge-image').exists).ok();
	await t.expect(Selector('.altcha-code-challenge input').exists).ok();
	await t.typeText('.altcha-code-challenge input', 'abcdef');
	await t.click('.altcha-code-challenge button[type="submit"]');
	await t.expect(Selector('.altcha-checkbox-wrap label').withText('Verified').exists).ok();
	await t.expect(Selector('.altcha-checkbox input').checked).ok();
	await t.expect(Selector('input[name="altcha"]').value).ok();
});

test('should request code challenge verification and display an error message if fails', async (t) => {
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
	await t.click('.altcha-checkbox');
	await t.expect(Selector('.altcha-checkbox-wrap label').withText('Verifying...').exists).ok();
	await delay(1000);
	await t
		.expect(Selector('.altcha-checkbox-wrap label').withText('Verification required!').exists)
		.ok();
	await t.expect(Selector('.altcha-code-challenge-image').exists).ok();
	await t.expect(Selector('.altcha-code-challenge input').exists).ok();
	await t.typeText('.altcha-code-challenge input', 'abcdef');
	await t.click('.altcha-code-challenge button[type="submit"]');
	await t.expect(Selector('.altcha-error').exists).ok();
});

test('should request form submission after code challenge when auto=onsubmit', async (t) => {
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
	const getSubmitEventFired = ClientFunction(function (this: { formSubmitted?: boolean }) {
		this.formSubmitted = false;
		document.querySelector('form[data-test-form]')?.addEventListener('submit', () => {
			this.formSubmitted = true;
		});
	});
	await getSubmitEventFired();
	await t.click('button[data-test-button]');
	await t.expect(Selector('.altcha-checkbox-wrap label').withText('Verifying...').exists).ok();
	await delay(1000);
	await t
		.expect(Selector('.altcha-checkbox-wrap label').withText('Verification required!').exists)
		.ok();
	await t.expect(Selector('.altcha-code-challenge-image').exists).ok();
	await t.expect(Selector('.altcha-code-challenge input').exists).ok();
	await t.typeText('.altcha-code-challenge input', 'abcdef');
	await t.click('.altcha-code-challenge button[type="submit"]');
	await t
		.expect(
			await ClientFunction(function (this: { formSubmitted?: boolean }) {
				return this.formSubmitted;
			})()
		)
		.ok();
});
