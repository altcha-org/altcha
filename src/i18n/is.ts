import '../globals';

export const i18n = {
  ariaLinkLabel: 'Heimsækja Altcha.org',
  enterCode: 'Sláðu inn kóða',
  enterCodeAria: 'Sláðu inn kóðann sem þú heyrir. Ýttu á Space til að spila hljóðið.',
  error: 'Staðfesting mistókst. Reyndu aftur síðar.',
  expired: 'Staðfesting er útrunnin. Reyndu aftur.',
  footer:
    'Verndað af <a href="https://altcha.org/" target="_blank" aria-label="Heimsækja Altcha.org">ALTCHA</a>',
  getAudioChallenge: 'Fá hljóðáskorun',
  label: "Ég er ekki robot",
  loading: 'Hleður...',
  reload: 'Hleð aftur',
  verify: 'Staðfesta',
  verificationRequired: 'Staðfesting er nauðsynleg!',
  verified: 'Staðfest',
  verifying: 'Að staðfesta...',
  waitAlert: 'Að staðfesta... vinsamlegast bíða.',
};

globalThis.altchaI18n.set('is', i18n);
