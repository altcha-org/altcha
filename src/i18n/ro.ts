import '../globals';

export const i18n = {
  ariaLinkLabel: 'Vizitează Altcha.org',
  enterCode: 'Introduceți codul',
  enterCodeAria:
    'Introduceți codul pe care îl auziți. Apăsați Spațiu pentru a reda audio.',
  error: 'Verificarea a eșuat. Încearcă din nou mai târziu.',
  expired: 'Verificarea a expirat. Încearcă din nou.',
  verificationRequired: 'Verificare necesară!',
  footer:
    'Protejat de <a href="https://altcha.org/" target="_blank" aria-label="Vizitează Altcha.org">ALTCHA</a>',
  getAudioChallenge: 'Obține o provocare audio',
  label: 'Nu sunt un robot',
  loading: 'Se încarcă...',
  reload: 'Reîncarcă',
  verify: 'Verifică',
  verified: 'Verificat',
  verifying: 'Se verifică...',
  waitAlert: 'Se verifică... te rugăm să aștepți.',
};

globalThis.altchaI18n.set('ro', i18n);
