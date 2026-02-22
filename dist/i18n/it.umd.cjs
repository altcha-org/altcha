(function(factory) {
  typeof define === "function" && define.amd ? define(factory) : factory();
})((function() {
  "use strict";
  const i18n = {
    ariaLinkLabel: "Visita Altcha.org",
    enterCode: "Inserisci il codice",
    enterCodeAria: "Inserisci il codice che senti. Premi Spazio per riprodurre l'audio.",
    error: "Verifica fallita. Riprova più tardi.",
    expired: "Verifica scaduta. Riprova.",
    footer: 'Protetto da <a href="https://altcha.org/" target="_blank" aria-label="Visita Altcha.org">ALTCHA</a>',
    getAudioChallenge: "Ottieni una sfida audio",
    label: "Non sono un robot",
    loading: "Caricamento...",
    reload: "Ricarica",
    verify: "Verifica",
    verificationRequired: "Verifica richiesta!",
    verified: "Verificato",
    verifying: "Verifica in corso...",
    waitAlert: "Verifica in corso... attendere.",
    cancel: "Annulla",
    enterCodeFromImage: "Per procedere, inserisci il codice dall'immagine sottostante."
  };
  if ("$altcha" in globalThis) {
    globalThis.$altcha.i18n.set("it", i18n);
  }
}));
