import { afterEach, describe, expect, test } from 'vitest';
import { userEvent } from 'vitest/browser';
import '../../dist/main/altcha.js';
import { removeWidget, renderWidget, waitForSelector, waitForVerified } from '../helpers';
import { Challenge, Configuration } from '../../src/types';

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

/** Fields appended to the test form: [tag, type, name, value, excluded via data-no-spamfilter] */
const formFields: [string, string | null, string, string, boolean][] = [
	['input', 'text', 'name', 'John', false],
	['input', 'email', 'email', 'john@example.com', false],
	['input', 'tel', 'phone', '123456', false],
	['input', 'text', 'secret', 'hidden', true],
	['textarea', null, 'message', 'line1\nline2', false],
	['select', null, 'topic', 'sales', false]
];

async function verifyWithFields(config: Partial<Configuration>) {
	const verifyBodies: { fields?: Record<string, string> }[] = [];
	const fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
		const path = new URL(String(input), location.href).pathname;
		if (path === '/verify' && init?.method === 'POST') {
			verifyBodies.push(JSON.parse(String(init.body)));
			return Response.json({ verified: true, payload: 'x' });
		}
		throw new Error(`Unexpected fetch ${init?.method || 'GET'} ${path}`);
	};
	const el = await renderWidget({
		config: { challenge, fetch, serverVerificationFields: true, verifyUrl: '/verify', ...config },
		form: true
	});
	const elForm = el.closest('form')!;
	for (const [tag, type, name, value, excluded] of formFields) {
		const elField = document.createElement(tag) as HTMLInputElement;
		if (tag === 'select') {
			elField.append(new Option(value, value, true, true));
		}
		if (type) {
			elField.type = type;
		}
		if (excluded) {
			elField.setAttribute('data-no-spamfilter', '');
		}
		elField.name = name;
		elField.value = value;
		elForm.prepend(elField);
	}
	await userEvent.click(await waitForSelector('.altcha-checkbox'));
	await waitForVerified();
	expect(verifyBodies).toHaveLength(1);
	return verifyBodies[0].fields;
}

afterEach(() => {
	removeWidget();
});

describe('Server Verification Fields', () => {
	test('should send text, email and textarea fields by default', async () => {
		expect(await verifyWithFields({})).toEqual({
			email: 'john@example.com',
			message: 'line1\r\nline2',
			name: 'John'
		});
	});

	test('should send fields matching serverVerificationFieldsSelector', async () => {
		expect(
			await verifyWithFields({ serverVerificationFieldsSelector: 'input[type="tel"], select' })
		).toEqual({ phone: '123456', topic: 'sales' });
	});

	test('should send only fields named in serverVerificationFieldNames', async () => {
		expect(
			await verifyWithFields({
				serverVerificationFieldNames: ['message', 'secret', 'topic'],
				serverVerificationFieldsSelector: 'input[type="tel"]'
			})
		).toEqual({ message: 'line1\r\nline2', secret: 'hidden', topic: 'sales' });
	});

	test('should not send fields when serverVerificationFields is disabled', async () => {
		expect(await verifyWithFields({ serverVerificationFields: false })).toBeUndefined();
	});
});
