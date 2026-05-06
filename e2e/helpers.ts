import { ClientFunction } from 'testcafe';
import type {} from '../src/types/global';
import type { Configuration, WidgetAttributes, WidgetMethods } from '../src/types/index';

export async function delay(ms: number) {
	await new Promise((resolve) => setTimeout(resolve, ms));
}

export async function renderWidget(
	options: {
		attributes?: WidgetAttributes;
		config?: Partial<Configuration>;
		form?: boolean;
		workers?: Record<string, string>;
	} = {}
) {
	await removeWidget();
	await ClientFunction((options: Parameters<typeof renderWidget>[0] = {}) => {
		const { attributes, config, form, workers } = options;
		const el = document.createElement('altcha-widget') as HTMLElement & WidgetMethods;
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
		return new Promise((resolve) => {
			// Widget methods are available only after mount
			setTimeout(() => {
				if (config) {
					el.configure(config);
				}
				resolve(undefined);
			}, 0);
		});
	})(options);
}

export async function removeWidget() {
	await ClientFunction(() => {
		const el = document.querySelector('altcha-widget');
		if (el) {
			document.body.removeChild(el);
		}
	})();
}
