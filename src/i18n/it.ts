export const i18n = {
  ariaLinkLabel: 'Visita Altcha.org',
  enterCode: 'Inserisci il codice',
  enterCodeAria:
    "Inserisci il codice che senti. Premi Spazio per riprodurre l'audio.",
  error: 'Verifica fallita. Riprova più tardi.',
  expired: 'Verifica scaduta. Riprova.',
  verificationRequired: 'Verifica richiesta!',
  footer:
    'Protetto da <a href="https://altcha.org/" target="_blank" aria-label="Visita Altcha.org">ALTCHA</a>',
  getAudioChallenge: 'Ottieni una sfida audio',
  label: 'Non sono un robot',
  loading: 'Caricamento...',
  reload: 'Ricarica',
  verify: 'Verifica',
  verified: 'Verificato',
  verifying: 'Verifica in corso...',
  waitAlert: 'Verifica in corso... attendere.',
};

if (typeof globalThis.altchaI18n !== 'object') {
  globalThis.altchaI18n = {};
}

globalThis.altchaI18n['it'] = i18n;
