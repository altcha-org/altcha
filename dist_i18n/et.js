const a = {
  ariaLinkLabel: "Külasta Altcha.org",
  enterCode: "Sisesta kood",
  enterCodeAria: "Sisestage kuuldu kood. Vajutage tühikut, et esitada heli.",
  error: "Kinnitamine ebaõnnestus. Proovi hiljem uuesti.",
  expired: "Kinnitamine aegus. Proovi uuesti.",
  verificationRequired: "Kontroll on vajalik!",
  footer: 'Kaitstud <a href="https://altcha.org/" target="_blank" aria-label="Külasta Altcha.org">ALTCHA</a> poolt',
  getAudioChallenge: "Hangi heliülesanne",
  label: "Ma ei ole robot",
  loading: "Laadimine...",
  reload: "Laadi uuesti",
  verify: "Kinnita",
  verified: "Kinnitatud",
  verifying: "Kinnitamine...",
  waitAlert: "Kinnitamine... palun oota."
};
typeof globalThis.altchaI18n != "object" && (globalThis.altchaI18n = {});
globalThis.altchaI18n.et = a;
export {
  a as i18n
};
