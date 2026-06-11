import { vi } from 'vitest';
import type {} from '../src/types/global';
import type { Configuration, WidgetAttributes, WidgetMethods } from '../src/types/index';

export type AltchaElement = HTMLElement & WidgetMethods;

export async function delay(ms: number) {
	await new Promise((resolve) => setTimeout(resolve, ms));
}

export async function waitForSelector<T extends Element = HTMLElement>(
	selector: string,
	options: { text?: string; timeout?: number } = {}
): Promise<T> {
	const { text, timeout = 10_000 } = options;
	return vi.waitFor(
		() => {
			const elements = [...document.querySelectorAll<T>(selector)];
			const el =
				text === undefined
					? elements[0]
					: elements.find((node) => node.textContent?.includes(text));
			if (!el) {
				throw new Error(`Element not found: ${selector}${text ? ` with text "${text}"` : ''}`);
			}
			return el;
		},
		{ interval: 50, timeout }
	);
}

export async function waitForVerified(name: string = 'altcha') {
	await vi.waitFor(
		() => {
			const elCheckbox = document.querySelector<HTMLInputElement>('.altcha-checkbox input');
			const elPayload = document.querySelector<HTMLInputElement>(`input[name="${name}"]`);
			if (!elCheckbox?.checked || !elPayload?.value) {
				throw new Error('Widget not verified');
			}
		},
		{ interval: 50, timeout: 10_000 }
	);
}

export async function renderWidget(
	options: {
		attributes?: WidgetAttributes;
		config?: Partial<Configuration>;
		form?: boolean;
		workers?: Record<string, string>;
	} = {}
): Promise<AltchaElement> {
	removeWidget();
	const { attributes, config, form, workers } = options;
	const el = document.createElement('altcha-widget') as AltchaElement;
	if (attributes) {
		Object.entries(attributes).forEach(([name, value]) => {
			el.setAttribute(name, value);
		});
	}
	if (workers) {
		Object.entries(workers).forEach(([name, code]) => {
			const blob = new Blob([code], { type: 'application/javascript' });
			$altcha.algorithms.set(name, () => new Worker(URL.createObjectURL(blob)));
		});
	}
	if (form) {
		const elForm = document.createElement('form');
		const elInput = document.createElement('input');
		const elButton = document.createElement('button');
		elButton.setAttribute('type', 'submit');
		elButton.setAttribute('data-test-button', '');
		elButton.innerText = 'Submit';
		elForm.setAttribute('data-test-form', '');
		elForm.addEventListener('submit', (ev) => {
			ev.preventDefault();
		});
		elInput.setAttribute('data-test-input', '');
		elForm.appendChild(elInput);
		elForm.appendChild(elButton);
		elForm.appendChild(el);
		document.body.appendChild(elForm);
	} else {
		document.body.appendChild(el);
	}
	// Widget methods are available only after mount
	await delay(0);
	if (config) {
		await el.configure(config);
	}
	return el;
}

export function removeWidget() {
	document.querySelector('form[data-test-form]')?.remove();
	document.querySelector('altcha-widget')?.remove();
}
