import '../globals';

export const i18n = {
  ariaLinkLabel: 'Látogass el az Altcha.org oldalra',
  enterCode: 'Írja be a kódot',
  enterCodeAria:
    'Írja be a hallott kódot. Nyomja meg a Szóköz billentyűt a hang lejátszásához.',
  error: 'A hitelesítés nem sikerült. Próbáld meg később újra.',
  expired: 'A hitelesítés lejárt. Próbáld újra.',
  verificationRequired: 'Ellenőrzés szükséges!',
  footer:
    'Védve a következő által: <a href="https://altcha.org/" target="_blank" aria-label="Látogass el az Altcha.org oldalra">ALTCHA</a>',
  getAudioChallenge: 'Hangalapú kihívás kérése',
  label: 'Nem vagyok robot',
  loading: 'Betöltés...',
  reload: 'Újratöltés',
  verify: 'Ellenőrzés',
  verified: 'Ellenőrizve',
  verifying: 'Ellenőrzés folyamatban...',
  waitAlert: 'Ellenőrzés folyamatban... kérlek várj.',
};

globalThis.altchaI18n.set('hu', i18n);
