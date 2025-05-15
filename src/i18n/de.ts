import '../globals';

export const i18n = {
  ariaLinkLabel: 'Besuche Altcha.org',
  enterCode: 'Code eingeben',
  enterCodeAria:
    'Geben Sie den Code ein, den Sie hören. Drücken Sie die Leertaste, um die Audio abzuspielen.',
  error: 'Überprüfung fehlgeschlagen. Bitte versuchen Sie es später erneut.',
  expired: 'Überprüfung abgelaufen. Bitte versuchen Sie es erneut.',
  verificationRequired: 'Überprüfung erforderlich!',
  footer:
    'Geschützt durch <a href="https://altcha.org/" target="_blank" aria-label="Besuche Altcha.org">ALTCHA</a>',
  getAudioChallenge: 'Audio-Herausforderung anfordern',
  label: 'Ich bin kein Roboter',
  loading: 'Lade...',
  reload: 'Neu laden',
  verify: 'Überprüfen',
  verified: 'Überprüft',
  verifying: 'Wird überprüft...',
  waitAlert: 'Überprüfung läuft... bitte warten.',
};

globalThis.altchaI18n.set('de', i18n);
