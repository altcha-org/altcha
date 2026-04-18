(function(factory) {
  typeof define === "function" && define.amd ? define(factory) : factory();
})((function() {
  "use strict";
  const i18n = {
    ariaLinkLabel: "Altcha (అధికారిక వెబ్‌సైట్)",
    enterCode: "కోడ్‌ని నమోదు చేయండి",
    enterCodeAria: "మీరు విన్న కోడ్‌ని నమోదు చేయండి. ఆడియో ప్లే చేయడానికి స్పేస్‌ను నొక్కండి.",
    error: "చెకింగ్ విఫలమైంది. దయచేసి మరల ప్రయత్నించండి.",
    expired: "చెకింగ్ కాలం ముగిసింది. దయచేసి మరల ప్రయత్నించండి.",
    footer: 'ఈ సైట్ రక్షించబడింది <a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (అధికారిక వెబ్‌సైట్)">ALTCHA</a>',
    getAudioChallenge: "ఆడియో ఛాలెంజ్ పొందండి",
    label: "నేను రోబోట్ కాదు",
    loading: "లోడ్ అవుతోంది...",
    reload: "మళ్ళీ లోడ్ చేయండి",
    verify: "ధ్రువీకరించు",
    verificationRequired: "ధృవీకరణ అవసరం!",
    verified: "ధ్రువీకరించబడింది",
    verifying: "ధ్రువీకరణ జరుగుతుంది...",
    waitAlert: "ధ్రువీకరణ జరుగుతుంది... దయచేసి వేచి ఉండండి.",
    cancel: "రద్దు చేయండి",
    enterCodeFromImage: "కొనసాగడానికి, దయచేసి క్రింది చిత్రంలో ఉన్న కోడ్‌ను నమోదు చేయండి."
  };
  if ("$altcha" in globalThis) {
    globalThis.$altcha.i18n.set("te", i18n);
  }
}));
