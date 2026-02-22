(function(factory) {
  typeof define === "function" && define.amd ? define(factory) : factory();
})((function() {
  "use strict";
  const i18n = {
    ariaLinkLabel: "Ṣe abẹwo si Altcha.org",
    enterCode: "Tẹ koodu sii",
    enterCodeAria: "Tẹ koodu ti o ngbọ sii. Tẹ Space lati ṣe ohun orin.",
    error: "Ìdájọ́kòwò kò ṣẹ́ṣe. Gbiyanju lẹẹkansi ni ọjọ́ iwájú.",
    expired: "Ìdájọ́kòwò ti pari. Gbiyanju lẹẹkansi.",
    footer: 'Ti wa ni ààbò nipasẹ <a href="https://altcha.org/" target="_blank" aria-label="Ṣe abẹwo si Altcha.org">ALTCHA</a>',
    getAudioChallenge: "Gba ìjàdú ohùn",
    label: "Emi kii ṣe ẹrọ",
    loading: "Ó ń gbé sílẹ̀...",
    reload: "Tún gbé wọlé",
    verify: "Ṣàdájọ́",
    verificationRequired: "Ìdájọ́kòwò ni a nílò!",
    verified: "A ti dájọ́",
    verifying: "Ó ń ṣàdájọ́...",
    waitAlert: "Ó ń ṣàdájọ́... ẹ jọ̀ọ́ ẹ duro.",
    cancel: "Fagbọsẹ",
    enterCodeFromImage: "Lati tẹsiwaju, jọwọ tẹ koodu ti o wa lati aworan isalẹ sii."
  };
  if ("$altcha" in globalThis) {
    globalThis.$altcha.i18n.set("yo", i18n);
  }
}));
