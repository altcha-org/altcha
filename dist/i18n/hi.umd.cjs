(function(factory) {
  typeof define === "function" && define.amd ? define(factory) : factory();
})((function() {
  "use strict";
  const i18n = {
    ariaLinkLabel: "Altcha (आधिकारिक वेबसाइट)",
    enterCode: "कोड दर्ज करेंं",
    enterCodeAria: "आप जो कोड सुनते हैं उसे दर्ज करें। ऑडियो चलाने के लिए स्पेस दबाएं।",
    error: "सत्यापन विफल। कृपया बाद में फिर से प्रयास करें।",
    expired: "सत्यापन समाप्त हो गया है। कृपया पुनः प्रयास करें।",
    footer: 'द्वारा संरक्षित <a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (आधिकारिक वेबसाइट)">ALTCHA</a>',
    getAudioChallenge: "ऑडियो चुनौती प्राप्त करें",
    label: "मैं रोबोट नहीं हूँ",
    loading: "लोड हो रहा है...",
    reload: "पुनः लोड करें",
    verify: "सत्यापित करें",
    verificationRequired: "सत्यापन आवश्यक है!",
    verified: "सत्यापित",
    verifying: "सत्यापित कर रहे हैं...",
    waitAlert: "सत्यापित किया जा रहा है... कृपया प्रतीक्षा करें।",
    cancel: "रद्द करें",
    enterCodeFromImage: "आगे बढ़ने के लिए, कृपया नीचे दी गई छवि से कोड दर्ज करें।"
  };
  if ("$altcha" in globalThis) {
    globalThis.$altcha.i18n.set("hi", i18n);
  }
}));
