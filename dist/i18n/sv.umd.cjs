(function(factory) {
  typeof define === "function" && define.amd ? define(factory) : factory();
})((function() {
  "use strict";
  const i18n = {
    ariaLinkLabel: "Altcha (officiell webbplats)",
    enterCode: "Ange kod",
    enterCodeAria: "Ange koden du hör. Tryck på mellanslag för att spela upp ljudet.",
    error: "Verifiering misslyckades. Försök igen senare.",
    expired: "Verifieringen har gått ut. Försök igen.",
    footer: 'Skyddad av <a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (officiell webbplats)">ALTCHA</a>',
    getAudioChallenge: "Få ljudutmaning",
    label: "Jag är inte en robot",
    loading: "Laddar...",
    reload: "Ladda om",
    verify: "Verifiera",
    verificationRequired: "Verifiering krävs!",
    verified: "Verifierad",
    verifying: "Verifierar...",
    waitAlert: "Verifierar... vänligen vänta.",
    cancel: "Avbryt",
    enterCodeFromImage: "För att fortsätta, ange koden från bilden nedan."
  };
  if ("$altcha" in globalThis) {
    globalThis.$altcha.i18n.set("sv", i18n);
  }
}));
