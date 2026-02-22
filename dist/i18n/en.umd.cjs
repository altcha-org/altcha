(function(factory) {
  typeof define === "function" && define.amd ? define(factory) : factory();
})((function() {
  "use strict";
  const i18n = {
    ariaLinkLabel: "Visit Altcha.org",
    cancel: "Cancel",
    enterCode: "Enter code",
    enterCodeAria: "Enter code you hear. Press Space to play audio.",
    enterCodeFromImage: "To proceed, please enter the code from the image below.",
    error: "Verification failed. Try again later.",
    expired: "Verification expired. Try again.",
    footer: 'Protected by <a href="https://altcha.org/" target="_blank" aria-label="Visit Altcha.org">ALTCHA</a>',
    getAudioChallenge: "Get an audio challenge",
    label: "I'm not a robot",
    loading: "Loading...",
    reload: "Reload",
    verify: "Verify",
    verificationRequired: "Verification required!",
    verified: "Verified",
    verifying: "Verifying...",
    waitAlert: "Verifying... please wait."
  };
  if ("$altcha" in globalThis) {
    globalThis.$altcha.i18n.set("en", i18n);
  }
}));
