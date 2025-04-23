export const i18n = {
  ariaLinkLabel: 'Посетете Altcha.org',
  enterCode: 'Въведете код',
  enterCodeAria: 'Въведете кода, който чувате. Натиснете Space за възпроизвеждане на аудио.',
  error: 'Проверката неуспешна. Моля, опитайте по-късно.',
  expired: 'Времето за проверка изтече. Моля, опитайте отново.',
  extraCheck: 'Изисква се проверка!',
  footer:
    'Защитено от <a href="https://altcha.org/" target="_blank" aria-label="Посетете Altcha.org">ALTCHA</a>',
  getAudioChallenge: 'Аудио проверка',
  label: "Аз не съм робот",
  loading: 'Зареждане...',
  reload: 'Презареди',
  verify: 'Провери',
  verified: 'Проверено',
  verifying: 'Проверява се...',
  waitAlert: 'Проверката е в процес... моля изчакайте.',
};

if (typeof globalThis.altchaI18n !== 'object') {
  globalThis.altchaI18n = {};
}

globalThis.altchaI18n['bg'] = i18n;