(function(factory) {
  typeof define === "function" && define.amd ? define(factory) : factory();
})((function() {
  "use strict";
  const i18n = {
    ariaLinkLabel: "Altcha (hivatalos weboldal)",
    enterCode: "Írja be a kódot",
    enterCodeAria: "Írja be a hallott kódot. Nyomja meg a Szóköz billentyűt a hang lejátszásához.",
    error: "A hitelesítés nem sikerült. Próbáld meg később újra.",
    expired: "A hitelesítés lejárt. Próbáld újra.",
    footer: 'Védve a következő által: <a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (hivatalos weboldal)">ALTCHA</a>',
    getAudioChallenge: "Hangalapú kihívás kérése",
    label: "Nem vagyok robot",
    loading: "Betöltés...",
    reload: "Újratöltés",
    verify: "Ellenőrzés",
    verificationRequired: "Ellenőrzés szükséges!",
    verified: "Ellenőrizve",
    verifying: "Ellenőrzés folyamatban...",
    waitAlert: "Ellenőrzés folyamatban... kérlek várj.",
    cancel: "Mégse",
    enterCodeFromImage: "A folytatáshoz, kérjük, adja meg az alábbi kép kódját."
  };
  if ("$altcha" in globalThis) {
    globalThis.$altcha.i18n.set("hu", i18n);
  }
}));
