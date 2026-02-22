(function(factory) {
  typeof define === "function" && define.amd ? define(factory) : factory();
})((function() {
  "use strict";
  const i18n = {
    ariaLinkLabel: "Navštivte Altcha.org",
    enterCode: "Zadejte kód",
    enterCodeAria: "Zadejte kód, který slyšíte. Stisknutím mezerníku přehrajete zvuk.",
    error: "Ověření selhalo. Zkuste to prosím později.",
    expired: "Ověření vypršelo. Zkuste to prosím znovu.",
    footer: 'Chráněno pomocí <a href="https://altcha.org/" target="_blank" aria-label="Navštivte Altcha.org">ALTCHA</a>',
    getAudioChallenge: "Získat audio výzvu",
    label: "Nejsem robot",
    loading: "Načítání...",
    reload: "Znovu načíst",
    verify: "Ověřit",
    verificationRequired: "Vyžaduje se ověření!",
    verified: "Ověřeno",
    verifying: "Ověřování...",
    waitAlert: "Probíhá ověření... prosím počkejte.",
    cancel: "Zrušit",
    enterCodeFromImage: "Pro pokračování zadejte kód z obrázku níže."
  };
  if ("$altcha" in globalThis) {
    globalThis.$altcha.i18n.set("cs", i18n);
  }
}));
