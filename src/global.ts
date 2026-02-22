import { get, writable } from 'svelte/store';
import type { AltchaGlobal, Configuration } from './types/';

function store<T extends object, K extends keyof T = keyof T>(defaultValue: T) {
	const scope = {
		get: (name: K) => {
			return get(scope.store)[name];
		},
		set: <N extends K>(name: N | T, value?: T[N]) => {
			if (typeof name === 'string') {
				Object.assign(get(scope.store), {
					[name]: value
				});
			} else {
				Object.assign(get(scope.store), name);
			}
			scope.store.set(get(scope.store));
		},
		store: writable<T>(defaultValue)
	};
	return scope;
}

globalThis.$altcha =
	globalThis.$altcha ||
	({
		algorithms: new Map(),
		defaults: store<Partial<Configuration>>({}),
		i18n: store<Record<string, Record<string, string>>>({}),
		instances: new Set(),
		plugins: new Set()
	} satisfies AltchaGlobal);
