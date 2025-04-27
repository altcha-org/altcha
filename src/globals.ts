globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  register: (language: string, translation: Record<string, string>) => {
    globalThis.altchaI18n[language] = translation;
  },
};