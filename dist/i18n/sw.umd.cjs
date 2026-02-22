(function(factory) {
  typeof define === "function" && define.amd ? define(factory) : factory();
})((function() {
  "use strict";
  const i18n = {
    ariaLinkLabel: "Tembelea Altcha.org",
    enterCode: "Weka nambari",
    enterCodeAria: "Weka nambari unayosikia. Bonyeza Space kucheza sauti.",
    error: "Uthibitishaji umeshindwa. Jaribu tena baadaye.",
    expired: "Uthibitishaji umeisha. Jaribu tena.",
    footer: 'Imealindwa na <a href="https://altcha.org/" target="_blank" aria-label="Tembelea Altcha.org">ALTCHA</a>',
    getAudioChallenge: "Pata changamoto ya sauti",
    label: "Mimi sio roboti",
    loading: "Inapakia...",
    reload: "Pakia tena",
    verify: "Thibitisha",
    verificationRequired: "Uthibitishaji unahitajika!",
    verified: "Imethibitishwa",
    verifying: "Inathibitisha...",
    waitAlert: "Inathibitisha... tafadhali subiri.",
    cancel: "Ghairi",
    enterCodeFromImage: "Ili kuendelea, tafadhali weka nambari kutoka kwa picha hapa chini."
  };
  if ("$altcha" in globalThis) {
    globalThis.$altcha.i18n.set("sw", i18n);
  }
}));
