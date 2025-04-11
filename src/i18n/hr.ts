import '../globals';

export const i18n = {
  ariaLinkLabel: 'Posjetite Altcha.org',
  enterCode: 'Unesite kod',
  enterCodeAria:
    'Unesite kod koji čujete. Pritisnite razmaknicu za reprodukciju zvuka.',
  error: 'Provjera nije uspjela. Molimo pokušajte kasnije.',
  expired: 'Provjera je istekla. Molimo pokušajte ponovo.',
  verificationRequired: 'Potrebna je provjera!',
  footer:
    'Zaštićeno od strane <a href="https://altcha.org/" target="_blank" aria-label="Posjetite Altcha.org">ALTCHA</a>',
  getAudioChallenge: 'Audio provjera',
  label: 'Ja nisam robot',
  loading: 'Učitavanje...',
  reload: 'Ponovno učitaj',
  verify: 'Provjeri',
  verified: 'Provjereno',
  verifying: 'Provjeravanje...',
  waitAlert: 'Provjera je u tijeku... molimo pričekajte.',
};

globalThis.altchaI18n.set('hr', i18n);
