(function(factory) {
  typeof define === "function" && define.amd ? define(factory) : factory();
})((function() {
  "use strict";
  const i18n = {
    ariaLinkLabel: "Altcha (ametlik veebisait)",
    enterCode: "Sisesta kood",
    enterCodeAria: "Sisestage kuuldu kood. Vajutage tühikut, et esitada heli.",
    error: "Kinnitamine ebaõnnestus. Proovi hiljem uuesti.",
    expired: "Kinnitamine aegus. Proovi uuesti.",
    footer: 'Kaitstud <a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (ametlik veebisait)">ALTCHA</a> poolt',
    getAudioChallenge: "Hangi heliülesanne",
    label: "Ma ei ole robot",
    loading: "Laadimine...",
    reload: "Laadi uuesti",
    verify: "Kinnita",
    verificationRequired: "Kontroll on vajalik!",
    verified: "Kinnitatud",
    verifying: "Kinnitamine...",
    waitAlert: "Kinnitamine... palun oota.",
    cancel: "Tühista",
    enterCodeFromImage: "Jätkamiseks sisestage alloleval pildil olev kood."
  };
  if ("$altcha" in globalThis) {
    globalThis.$altcha.i18n.set("et", i18n);
  }
}));
