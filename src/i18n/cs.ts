export const i18n = {
  ariaLinkLabel: 'Navštivte Altcha.org',
  enterCode: 'Zadejte kód',
  enterCodeAria: 'Zadejte kód, který slyšíte. Stisknutím mezerníku přehrajete zvuk.',
  error: 'Ověření selhalo. Zkuste to prosím později.',
  expired: 'Ověření vypršelo. Zkuste to prosím znovu.',
  extraCheck: 'Vyžaduje se ověření!',
  footer:
    'Chráněno pomocí <a href="https://altcha.org/" target="_blank" aria-label="Navštivte Altcha.org">ALTCHA</a>',
  getAudioChallenge: 'Získat audio výzvu',
  label: "Nejsem robot",
  loading: 'Načítání...',
  reload: 'Znovu načíst',
  verify: 'Ověřit',
  verified: 'Ověřeno',
  verifying: 'Ověřování...',
  waitAlert: 'Probíhá ověření... prosím počkejte.',
};

if (typeof globalThis.altchaI18n !== 'object') {
  globalThis.altchaI18n = {};
}

globalThis.altchaI18n['cs'] = i18n;