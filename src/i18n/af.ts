import '../globals';

export const i18n = {
  ariaLinkLabel: 'Besoek Altcha.org',
  enterCode: 'Voer kode in',
  enterCodeAria:
    'Voer die kode in wat jy hoor. Druk Spasie om die klank af te speel.',
  error: 'Verifikasie het misluk. Probeer later weer.',
  expired: 'Verifikasie het verval. Probeer weer.',
  footer:
    'Beskerm deur <a href="https://altcha.org/" target="_blank" aria-label="Besoek Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Kry 'n klankuitdaging",
  label: "Ek is nie 'n robot nie",
  loading: 'Laai...',
  reload: 'Laai weer',
  verify: 'Verifieer',
  verificationRequired: 'Verifikasie is vereis!',
  verified: 'Geverifieer',
  verifying: 'Verifieer...',
  waitAlert: 'Verifieer... wag asseblief.',
};

globalThis.altchaI18n.set('af', i18n);
