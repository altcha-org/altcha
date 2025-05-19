import '../globals';

export const i18n = {
  ariaLinkLabel: 'Besøk Altcha.org',
  enterCode: 'Skriv inn kode',
  enterCodeAria: 'Skriv inn koden du hører. Trykk på Space for å spille av lyden.',
  error: 'Verifisering mislyktes. Prøv igjen senere.',
  expired: 'Verifiseringen utløp. Prøv igjen.',
  footer:
    'Beskyttet av <a href="https://altcha.org/" target="_blank" aria-label="Besøk Altcha.org">ALTCHA</a>',
  getAudioChallenge: 'Få en lydutfordring',
  label: "Jeg er ikke en robot",
  loading: 'Laster...',
  reload: 'Last på nytt',
  verify: 'Verifiser',
  verificationRequired: 'Verifisering kreves!',
  verified: 'Verifisert',
  verifying: 'Verifiserer...',
  waitAlert: 'Verifiserer... vennligst vent.',
};

globalThis.altchaI18n.set('nb', i18n);
globalThis.altchaI18n.set('no', i18n);
