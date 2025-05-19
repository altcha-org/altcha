import '../globals';

export const i18n = {
  ariaLinkLabel: 'Tabhair cuairt ar Altcha.org',
  enterCode: 'Iontráil cód',
  enterCodeAria:
    'Cuir isteach an cód a chloiseann tú. Brúigh Spás chun an fuaime a sheinm.',
  error: 'Theip ar an bhfíorú. Bain triail eile as níos déanaí.',
  expired: 'Tá an fíorú as feidhm. Bain triail eile as.',
  verificationRequired: 'Fíorú riachtanach!',
  footer:
    'Cosanta ag <a href="https://altcha.org/" target="_blank" aria-label="Tabhair cuairt ar Altcha.org">ALTCHA</a>',
  getAudioChallenge: 'Faigh dúshlán fuaime',
  label: 'Níl mé i mo róbat',
  loading: 'Á luchtú...',
  reload: 'Athluchtaigh',
  verify: 'Fíoraigh',
  verified: 'Fíoraithe',
  verifying: 'Fíorú ar siúl...',
  waitAlert: 'Fíorú ar siúl... fan go fóill.',
};

globalThis.altchaI18n.set('ga', i18n);
