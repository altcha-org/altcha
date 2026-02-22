import { writable } from 'svelte/store';
import type { WidgetOptions } from './types';

export const logs = writable<any[][]>([]);
export const logsOpen = persistentWritable<boolean>('logsOpen', true);
export const widgetOptions = persistentWritable<WidgetOptions>(
	'widgetOptions',
	getDefaultWidgetOptions()
);
export const submitUrl = persistentWritable<string>('submitUrl', 'https://httpbin.org/post');

export function getDefaultWidgetOptions(): WidgetOptions {
	return {
		challenge: '',
		debug: true,
		display: 'standard',
		codeChallengeDisplay: 'standard',
		language: 'en',
		mockError: false,
		theme: 'default',
		type: 'checkbox',
		algorithm: 'PBKDF2/SHA-256',
		cost: 5_000,
		counter: 5_000,
		memoryCost: 0,
		workers: Math.min(8, navigator.hardwareConcurrency || 4),
		mockChallenge: true,
		mockCodeChallenge: false,
		randomEffort: true,
		hmacKeySignatureSecret: 'key.secret',
		hmacSignatureSecret: 'signature.secret',
		auto: 'off'
	};
}

function persistentWritable<T>(name: string, value?: T) {
	const w = writable<T>(
		(() => {
			try {
				return JSON.parse(localStorage.getItem(name) || 'undefined');
			} catch {}
			return value;
		})()
	);
	w.subscribe((v) => {
		try {
			localStorage.setItem(name, JSON.stringify(v));
		} catch {}
	});
	return w;
}
