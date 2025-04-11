import '../globals';

export const i18n = {
  ariaLinkLabel: 'Bisitatu Altcha.org',
  enterCode: 'Sartu kodea',
  enterCodeAria:
    'Sartu entzun duzun kodea. Sakatu Espazioa audioa erreproduzitzeko.',
  error: 'Egiaztatzeak huts egin du. Saiatu berriro geroago.',
  expired: 'Egiaztatzea iraungi da. Saiatu berriro.',
  verificationRequired: 'Egiaztatzea beharrezkoa da!',
  footer:
    '<a href="https://altcha.org/" target="_blank" aria-label="Bisitatu Altcha.org">ALTCHA</a>k babestuta',
  getAudioChallenge: 'Jaso audio-erronka bat',
  label: 'Ez naiz robot bat',
  loading: 'Kargatzen...',
  reload: 'Birkargatu',
  verify: 'Egiaztatu',
  verified: 'Egiaztatuta',
  verifying: 'Egiaztatzen...',
  waitAlert: 'Egiaztatzen... itxaron mesedez.',
};

globalThis.altchaI18n.set('eu', i18n);
