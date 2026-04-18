(function(factory) {
  typeof define === "function" && define.amd ? define(factory) : factory();
})((function() {
  "use strict";
  const i18n = {
    ariaLinkLabel: "Altcha (láithreán gréasáin oifigiúil)",
    enterCode: "Iontráil cód",
    enterCodeAria: "Cuir isteach an cód a chloiseann tú. Brúigh Spás chun an fuaime a sheinm.",
    error: "Theip ar an bhfíorú. Bain triail eile as níos déanaí.",
    expired: "Tá an fíorú as feidhm. Bain triail eile as.",
    footer: 'Cosanta ag <a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (láithreán gréasáin oifigiúil)">ALTCHA</a>',
    getAudioChallenge: "Faigh dúshlán fuaime",
    label: "Níl mé i mo róbat",
    loading: "Á luchtú...",
    reload: "Athluchtaigh",
    verify: "Fíoraigh",
    verificationRequired: "Fíorú riachtanach!",
    verified: "Fíoraithe",
    verifying: "Fíorú ar siúl...",
    waitAlert: "Fíorú ar siúl... fan go fóill.",
    cancel: "Cealaigh",
    enterCodeFromImage: "Chun dul ar aghaidh, le do thoil cuir isteach an cód ón íomhá thíos."
  };
  if ("$altcha" in globalThis) {
    globalThis.$altcha.i18n.set("ga", i18n);
  }
}));
