(function(factory) {
  typeof define === "function" && define.amd ? define(factory) : factory();
})((function() {
  "use strict";
  const i18n = {
    ariaLinkLabel: "Apsilankykite Altcha.org",
    enterCode: "Įveskite kodą",
    enterCodeAria: "Įveskite girdimą kodą. Paspauskite tarpo klavišą, kad grotumėte garso įrašą.",
    error: "Patvirtinimas nepavyko. Bandykite vėliau.",
    expired: "Patvirtinimo laikas baigėsi. Bandykite dar kartą.",
    footer: 'Apsaugota <a href="https://altcha.org/" target="_blank" aria-label="Apsilankykite Altcha.org">ALTCHA</a>',
    getAudioChallenge: "Gauti garso užduotį",
    label: "Aš nesu robotas",
    loading: "Įkeliama...",
    reload: "Įkelti iš naujo",
    verify: "Patvirtinti",
    verificationRequired: "Reikalingas patvirtinimas!",
    verified: "Patvirtinta",
    verifying: "Tikrinama...",
    waitAlert: "Tikrinama... prašome palaukti.",
    cancel: "Atšaukti",
    enterCodeFromImage: "Norėdami tęsti, įveskite kodą iš paveikslėlio žemiau."
  };
  if ("$altcha" in globalThis) {
    globalThis.$altcha.i18n.set("lt", i18n);
  }
}));
