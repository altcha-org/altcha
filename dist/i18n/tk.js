const i18n = {
  ariaLinkLabel: "Altcha (resmi web sahypa)",
  enterCode: "Kody giriziň",
  enterCodeAria: "Eşiden kodyňyzy giriziň. Sesli görkezmäni diňlemek üçin Space basyň.",
  error: "Barlamak şowsuz boldy. Has soňrak synanyşyň.",
  expired: "Barlamanyň möhleti gutardy. Gaýtadan synanyşyň.",
  footer: 'Goralan <a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (resmi web sahypa)">ALTCHA</a> tarapyndan',
  getAudioChallenge: "Sesli tabşyryk alyň",
  label: "Men robot däl",
  loading: "Ýüklenýär...",
  reload: "Täzeden ýükle",
  verify: "Barla",
  verificationRequired: "Barlamak zerurdyr!",
  verified: "Barlandy",
  verifying: "Barlanýar...",
  waitAlert: "Barlanýar... garaşyň.",
  cancel: "Ýapmak",
  enterCodeFromImage: "Dowam etmek üçin, aşakdaky suratyň koduny giriziň."
};
if ("$altcha" in globalThis) {
  globalThis.$altcha.i18n.set("tk", i18n);
}
