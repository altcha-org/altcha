(function(factory) {
  typeof define === "function" && define.amd ? define(factory) : factory();
})((function() {
  "use strict";
  const i18n = {
    ariaLinkLabel: "Altcha (amptelike webwerf)",
    enterCode: "Voer kode in",
    enterCodeAria: "Voer die kode in wat jy hoor. Druk Spasie om die klank af te speel.",
    error: "Verifikasie het misluk. Probeer later weer.",
    expired: "Verifikasie het verval. Probeer weer.",
    footer: 'Beskerm deur <a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (amptelike webwerf)">ALTCHA</a>',
    getAudioChallenge: "Kry 'n klankuitdaging",
    label: "Ek is nie 'n robot nie",
    loading: "Laai...",
    reload: "Laai weer",
    verify: "Verifieer",
    verificationRequired: "Verifikasie is vereis!",
    verified: "Geverifieer",
    verifying: "Verifieer...",
    waitAlert: "Verifieer... wag asseblief.",
    cancel: "Kanselleer",
    enterCodeFromImage: "Om voort te gaan, voer asseblief die kode vanaf die onderstaande prentjie in."
  };
  if ("$altcha" in globalThis) {
    globalThis.$altcha.i18n.set("af", i18n);
  }
}));
