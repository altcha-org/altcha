(function(factory) {
  typeof define === "function" && define.amd ? define(factory) : factory();
})((function() {
  "use strict";
  const i18n = {
    ariaLinkLabel: "Bezoek Altcha.org",
    enterCode: "Voer code in",
    enterCodeAria: "Voer de code in die je hoort. Druk op Spatie om de audio af te spelen.",
    error: "Verificatie mislukt. Probeer het later opnieuw.",
    expired: "Verificatie verlopen. Probeer het opnieuw.",
    footer: 'Beschermd door <a href="https://altcha.org/" target="_blank" aria-label="Bezoek Altcha.org">ALTCHA</a>',
    getAudioChallenge: "Audio-uitdaging ontvangen",
    label: "Ik ben geen robot",
    loading: "Laden...",
    reload: "Herladen",
    verify: "Verifiëren",
    verificationRequired: "Verificatie vereist!",
    verified: "Geverifieerd",
    verifying: "Bezig met verifiëren...",
    waitAlert: "Bezig met verifiëren... even geduld a.u.b.",
    cancel: "Annuleren",
    enterCodeFromImage: "Om door te gaan, voert u de code uit de onderstaande afbeelding in."
  };
  if ("$altcha" in globalThis) {
    globalThis.$altcha.i18n.set("nl", i18n);
  }
}));
