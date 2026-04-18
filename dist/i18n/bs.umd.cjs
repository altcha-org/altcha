(function(factory) {
  typeof define === "function" && define.amd ? define(factory) : factory();
})((function() {
  "use strict";
  const i18n = {
    ariaLinkLabel: "Altcha (službena web stranica)",
    enterCode: "Unesite kod",
    enterCodeAria: "Unesite kod koji čujete. Pritisnite Space da biste pustili zvuk.",
    error: "Verifikacija nije uspjela. Pokušajte ponovo kasnije.",
    expired: "Verifikacija je istekla. Pokušajte ponovo.",
    footer: 'Zaštićeno od strane <a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (službena web stranica)">ALTCHA</a>',
    getAudioChallenge: "Dohvatite audio izazov",
    label: "Nisam robot",
    loading: "Učitavanje...",
    reload: "Ponovno učitaj",
    verify: "Verifikuj",
    verificationRequired: "Verifikacija je obavezna!",
    verified: "Verifikovano",
    verifying: "Verifikacija u toku...",
    waitAlert: "Verifikacija u toku... molimo vas da sačekate.",
    cancel: "Odustani",
    enterCodeFromImage: "Za nastavak, molimo unesite kod sa slike ispod."
  };
  if ("$altcha" in globalThis) {
    globalThis.$altcha.i18n.set("bs", i18n);
  }
}));
