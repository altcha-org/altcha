import '../globals';

export const i18n = {
  ariaLinkLabel: 'Apsilankykite Altcha.org',
  enterCode: 'Įveskite kodą',
  enterCodeAria:
    'Įveskite girdimą kodą. Paspauskite tarpo klavišą, kad grotumėte garso įrašą.',
  error: 'Patvirtinimas nepavyko. Bandykite vėliau.',
  expired: 'Patvirtinimo laikas baigėsi. Bandykite dar kartą.',
  verificationRequired: 'Reikalingas patvirtinimas!',
  footer:
    'Apsaugota <a href="https://altcha.org/" target="_blank" aria-label="Apsilankykite Altcha.org">ALTCHA</a>',
  getAudioChallenge: 'Gauti garso užduotį',
  label: 'Aš nesu robotas',
  loading: 'Įkeliama...',
  reload: 'Įkelti iš naujo',
  verify: 'Patvirtinti',
  verified: 'Patvirtinta',
  verifying: 'Tikrinama...',
  waitAlert: 'Tikrinama... prašome palaukti.',
};

globalThis.altchaI18n.set('lt', i18n);
