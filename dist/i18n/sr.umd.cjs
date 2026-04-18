(function(factory) {
  typeof define === "function" && define.amd ? define(factory) : factory();
})((function() {
  "use strict";
  const i18n = {
    ariaLinkLabel: "Altcha (zvanična web stranica)",
    enterCode: "Unesite kod",
    enterCodeAria: "Unesite kod koji čujete. Pritisnite Space da biste pustili zvuk.",
    error: "Verifikacija nije uspela. Pokušajte ponovo kasnije.",
    expired: "Verifikacija je istekla. Pokušajte ponovo.",
    footer: 'Zaštićeno od strane <a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (zvanična web stranica)">ALTCHA</a>',
    getAudioChallenge: "Dohvatite audio izazov",
    label: "Nisam robot",
    loading: "Učitavanje...",
    reload: "Ponovo učitaj",
    verify: "Verifikuj",
    verificationRequired: "Verifikacija je obavezna!",
    verified: "Verifikovano",
    verifying: "Verifikacija u toku...",
    waitAlert: "Verifikacija u toku... molimo vas da sačekate.",
    cancel: "Откажи",
    enterCodeFromImage: "Да бисте наставили, унесите код са слике испод."
  };
  if ("$altcha" in globalThis) {
    globalThis.$altcha.i18n.set("sr", i18n);
  }
}));
