import { afterEach, describe, expect, test } from 'vitest';
import { userEvent } from 'vitest/browser';
import '../../dist/main/altcha.js';
import { renderWidget, waitForSelector, waitForVerified } from '../helpers';
import { Challenge } from '../../src/types';

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

const formId = 'external-form';

/** Renders `<form id>` plus a text input and submit button associated via `form="…"`, all outside the form */
function renderExternalForm() {
	const elForm = document.createElement('form');
	elForm.id = formId;
	elForm.addEventListener('submit', (ev) => ev.preventDefault());
	const elInput = document.createElement('input');
	elInput.setAttribute('form', formId);
	elInput.setAttribute('data-test-input', '');
	elInput.name = 'email';
	const elButton = document.createElement('button');
	elButton.setAttribute('form', formId);
	elButton.setAttribute('data-test-button', '');
	elButton.type = 'submit';
	document.body.append(elForm, elInput, elButton);
	return elForm;
}

afterEach(() => {
	document.querySelectorAll(`altcha-widget, form, [form="${formId}"]`).forEach((el) => el.remove());
});

describe('Form Attribute', () => {
	test('should submit the payload with a form the widget is not nested in', async () => {
		const elForm = renderExternalForm();
		await renderWidget({ attributes: { form: formId }, config: { challenge } });
		await userEvent.click(await waitForSelector('.altcha-checkbox'));
		await waitForVerified();
		const payload = new FormData(elForm).get('altcha');
		expect(payload).toBeTruthy();
	});

	test('should block submission of the associated form until verified', async () => {
		const elForm = renderExternalForm();
		await renderWidget({ attributes: { form: formId }, config: { challenge } });
		await waitForSelector('.altcha-checkbox');
		expect(elForm.checkValidity()).toBe(false);
	});

	test('should verify on focus of an associated field when auto is "onfocus"', async () => {
		renderExternalForm();
		await renderWidget({ attributes: { auto: 'onfocus', form: formId }, config: { challenge } });
		await userEvent.click(await waitForSelector('input[data-test-input]'));
		await waitForVerified();
	});

	test('should verify on submit of the associated form when auto is "onsubmit"', async () => {
		renderExternalForm();
		await renderWidget({ attributes: { auto: 'onsubmit', form: formId }, config: { challenge } });
		await userEvent.click(await waitForSelector('button[data-test-button]'));
		await waitForVerified();
	});

	test('should ignore an ancestor form when the form attribute points elsewhere', async () => {
		const elExternal = renderExternalForm();
		await renderWidget({ attributes: { form: formId }, config: { challenge }, form: true });
		await userEvent.click(await waitForSelector('.altcha-checkbox'));
		await waitForVerified();
		const elAncestor = document.querySelector<HTMLFormElement>('altcha-widget')!.closest('form')!;
		expect(new FormData(elAncestor).get('altcha')).toBeNull();
		expect(new FormData(elExternal).get('altcha')).toBeTruthy();
	});
});
