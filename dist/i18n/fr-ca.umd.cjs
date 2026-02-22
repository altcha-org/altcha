(function(factory) {
  typeof define === "function" && define.amd ? define(factory) : factory();
})((function() {
  "use strict";
  const i18n = {
    ariaLinkLabel: "Visitez Altcha.org",
    enterCode: "Entrez le code",
    enterCodeAria: "Entrez le code que vous entendez. Appuyez sur la barre d'espace pour écouter l'audio.",
    error: "Échec de la vérification. Réessayez plus tard.",
    expired: "La vérification a expiré. Réessayez.",
    footer: 'Protégé par <a href="https://altcha.org/" target="_blank" aria-label="Visitez Altcha.org">ALTCHA</a>',
    getAudioChallenge: "Obtenir un défi audio",
    label: "Pas un robot",
    loading: "Chargement...",
    reload: "Recharger",
    verify: "Vérifier",
    verificationRequired: "Vérification requise !",
    verified: "Vérifié",
    verifying: "Vérification en cours...",
    waitAlert: "Vérification en cours... veuillez patienter.",
    cancel: "Annuler",
    enterCodeFromImage: "Pour continuer, veuillez entrer le code de l'image ci-dessous."
  };
  if ("$altcha" in globalThis) {
    globalThis.$altcha.i18n.set("fr-ca", i18n);
  }
}));
