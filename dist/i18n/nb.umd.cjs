(function(factory) {
  typeof define === "function" && define.amd ? define(factory) : factory();
})((function() {
  "use strict";
  const i18n = {
    ariaLinkLabel: "Altcha (offisiell nettside)",
    enterCode: "Skriv inn kode",
    enterCodeAria: "Skriv inn koden du hører. Trykk på Space for å spille av lyden.",
    error: "Verifisering mislyktes. Prøv igjen senere.",
    expired: "Verifiseringen utløp. Prøv igjen.",
    footer: 'Beskyttet av <a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (offisiell nettside)">ALTCHA</a>',
    getAudioChallenge: "Få en lydutfordring",
    label: "Jeg er ikke en robot",
    loading: "Laster...",
    reload: "Last på nytt",
    verify: "Verifiser",
    verificationRequired: "Verifisering kreves!",
    verified: "Verifisert",
    verifying: "Verifiserer...",
    waitAlert: "Verifiserer... vennligst vent.",
    cancel: "Avbryt",
    enterCodeFromImage: "For å fortsette, vennligst skriv inn koden fra bildet nedenfor."
  };
  if ("$altcha" in globalThis) {
    globalThis.$altcha.i18n.set("nb", i18n);
  }
}));
