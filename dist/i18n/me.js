const i18n = {
  ariaLinkLabel: "Altcha (zvanična web stranica)",
  enterCode: "Unesite kod",
  enterCodeAria: "Unesite kod koji čujete. Pritisnite Space za puštanje zvuka.",
  error: "Verifikacija nije uspjela. Pokušajte ponovo kasnije.",
  expired: "Verifikacija je istekla. Pokušajte ponovo.",
  footer: 'Zaštićeno putem <a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (zvanična web stranica)">ALTCHA</a>',
  getAudioChallenge: "Preuzmi audio izazov",
  label: "Nijesam robot",
  loading: "Učitavanje...",
  reload: "Ponovo učitaj",
  verify: "Verifikuj",
  verificationRequired: "Potrebna je verifikacija!",
  verified: "Verifikovano",
  verifying: "Verifikacija u toku...",
  waitAlert: "Verifikujem... molimo sačekajte.",
  cancel: "Odustani",
  enterCodeFromImage: "Za nastavak, molimo unesite kod sa slike ispod."
};
if ("$altcha" in globalThis) {
  globalThis.$altcha.i18n.set("me", i18n);
}
