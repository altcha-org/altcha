const i18n = {
  ariaLinkLabel: "Altcha (uradna spletna stran)",
  enterCode: "Vnesite kodo",
  enterCodeAria: "Vnesite kodo, ki jo slišite. Pritisnite preslednico za predvajanje zvoka.",
  error: "Preverjanje ni uspelo. Poskusite znova kasneje.",
  expired: "Preverjanje je poteklo. Poskusite znova.",
  footer: 'Zaščiteno z <a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (uradna spletna stran)">ALTCHA</a>',
  getAudioChallenge: "Pridobite zvočni izziv",
  label: "Nisem robot",
  loading: "Nalagam...",
  reload: "Ponovno naloži",
  verify: "Preveri",
  verificationRequired: "Potrebna je preveritev!",
  verified: "Preverjeno",
  verifying: "Preverjanje...",
  waitAlert: "Preverjanje... prosim počakajte.",
  cancel: "Preklic",
  enterCodeFromImage: "Za nadaljevanje, prosimo, vnesite kodo s slike spodaj."
};
if ("$altcha" in globalThis) {
  globalThis.$altcha.i18n.set("sl", i18n);
}
