import '../globals';

export const i18n = {
  ariaLinkLabel: 'Besök Altcha.org',
  enterCode: 'Ange kod',
  enterCodeAria:
    'Ange koden du hör. Tryck på mellanslag för att spela upp ljudet.',
  error: 'Verifiering misslyckades. Försök igen senare.',
  expired: 'Verifieringen har gått ut. Försök igen.',
  verificationRequired: 'Verifiering krävs!',
  footer:
    'Skyddad av <a href="https://altcha.org/" target="_blank" aria-label="Besök Altcha.org">ALTCHA</a>',
  getAudioChallenge: 'Få ljudutmaning',
  label: 'Jag är inte en robot',
  loading: 'Laddar...',
  reload: 'Ladda om',
  verify: 'Verifiera',
  verified: 'Verifierad',
  verifying: 'Verifierar...',
  waitAlert: 'Verifierar... vänligen vänta.',
};

globalThis.altchaI18n.set('sv', i18n);
