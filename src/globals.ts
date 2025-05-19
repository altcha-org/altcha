import { get, writable } from 'svelte/store';

globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (language: string) => {
    return get(globalThis.altchaI18n.store)[language];
  },
  set: (language: string, translation: Record<string, string>) => {
    Object.assign(get(globalThis.altchaI18n.store), {
      [language]: translation,
    });
    globalThis.altchaI18n.store.set(get(globalThis.altchaI18n.store));
  },
  store: writable({}),
};