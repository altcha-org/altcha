import '../globals';

export const i18n = {
  ariaLinkLabel: 'Posjetite Altcha.org',
  enterCode: 'Unesite kod',
  enterCodeAria: 'Unesite kod koji čujete. Pritisnite Space za puštanje zvuka.',
  error: 'Verifikacija nije uspjela. Pokušajte ponovo kasnije.',
  expired: 'Verifikacija je istekla. Pokušajte ponovo.',
  footer:
    'Zaštićeno putem <a href="https://altcha.org/" target="_blank" aria-label="Posjetite Altcha.org">ALTCHA</a>',
  getAudioChallenge: 'Preuzmi audio izazov',
  label: 'Nijesam robot',
  loading: 'Učitavanje...',
  reload: 'Ponovo učitaj',
  verify: 'Verifikuj',
  verificationRequired: 'Potrebna je verifikacija!',
  verified: 'Verifikovano',
  verifying: 'Verifikacija u toku...',
  waitAlert: 'Verifikujem... molimo sačekajte.',
};

globalThis.altchaI18n.set('me', i18n);
