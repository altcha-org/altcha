(function(factory) {
  typeof define === "function" && define.amd ? define(factory) : factory();
})((function() {
  "use strict";
  const i18n = {
    ariaLinkLabel: "Altcha (opinber vefsíða)",
    enterCode: "Sláðu inn kóða",
    enterCodeAria: "Sláðu inn kóðann sem þú heyrir. Ýttu á Space til að spila hljóðið.",
    error: "Staðfesting mistókst. Reyndu aftur síðar.",
    expired: "Staðfesting er útrunnin. Reyndu aftur.",
    footer: 'Verndað af <a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (opinber vefsíða)">ALTCHA</a>',
    getAudioChallenge: "Fá hljóðáskorun",
    label: "Ég er ekki robot",
    loading: "Hleður...",
    reload: "Hleð aftur",
    verify: "Staðfesta",
    verificationRequired: "Staðfesting er nauðsynleg!",
    verified: "Staðfest",
    verifying: "Að staðfesta...",
    waitAlert: "Að staðfesta... vinsamlegast bíða.",
    cancel: "Hætta við",
    enterCodeFromImage: "Til að halda áfram, vinsamlegast sláðu inn kóðann af myndinni hér að neðan."
  };
  if ("$altcha" in globalThis) {
    globalThis.$altcha.i18n.set("is", i18n);
  }
}));
