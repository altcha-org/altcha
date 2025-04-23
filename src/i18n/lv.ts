export const i18n = {
  ariaLinkLabel: 'Apmeklējiet Altcha.org',
  enterCode: 'Ievadiet kodu',
  enterCodeAria: 'Ievadiet dzirdamo kodu. Nospiediet atstarpes taustiņu, lai atskaņotu audio.',
  error: 'Verifikācija neizdevās. Mēģiniet vēlāk vēlreiz.',
  expired: 'Verifikācijas laiks ir beidzies. Mēģiniet vēlreiz.',
  extraCheck: 'Nepieciešama verifikācija!',
  footer:
    'Aizsargāts ar <a href="https://altcha.org/" target="_blank" aria-label="Apmeklējiet Altcha.org">ALTCHA</a>',
  getAudioChallenge: 'Saņemt audio izaicinājumu',
  label: 'Es neesmu robots',
  loading: 'Notiek ielāde...',
  reload: 'Pārlādēt',
  verify: 'Verificēt',
  verified: 'Verificēts',
  verifying: 'Notiek verifikācija...',
  waitAlert: 'Notiek verifikācija... lūdzu, uzgaidiet.',
};

if (typeof globalThis.altchaI18n !== 'object') {
  globalThis.altchaI18n = {};
}

globalThis.altchaI18n['lv'] = i18n;
