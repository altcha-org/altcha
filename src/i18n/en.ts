import '../globals';

export const i18n = {
  ariaLinkLabel: 'Visit Altcha.org',
  enterCode: 'Enter code',
  enterCodeAria: 'Enter code you hear. Press Space to play audio.',
  error: 'Verification failed. Try again later.',
  expired: 'Verification expired. Try again.',
  footer:
    'Protected by <a href="https://altcha.org/" target="_blank" aria-label="Visit Altcha.org">ALTCHA</a>',
  getAudioChallenge: 'Get an audio challenge',
  label: "I'm not a robot",
  loading: 'Loading...',
  reload: 'Reload',
  verify: 'Verify',
  verificationRequired: 'Verification required!',
  verified: 'Verified',
  verifying: 'Verifying...',
  waitAlert: 'Verifying... please wait.',
};

globalThis.altchaI18n.set('en', i18n);
