const i18n = {
  ariaLinkLabel: "Visitar Altcha.org",
  enterCode: "Ingresa el código",
  enterCodeAria: "Ingresa el código que escuchas. Presiona Espacio para reproducir el audio.",
  error: "Falló la verificación. Por favor vuelve a intentarlo más tarde.",
  expired: "La verificación expiró. Por favor inténtalo de nuevo.",
  footer: 'Protegido por <a href="https://altcha.org/" target="_blank" aria-label="Visitar Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Obtener un reto de audio",
  label: "No soy un robot",
  loading: "Cargando...",
  reload: "Volver a cargar",
  verify: "Verificar",
  verificationRequired: "¡Verificación requerida!",
  verified: "Verificado",
  verifying: "Verificando...",
  waitAlert: "Verificando... por favor espera.",
  cancel: "Cancelar",
  enterCodeFromImage: "Para continuar, ingresa el código de la imagen a continuación."
};
if ("$altcha" in globalThis) {
  globalThis.$altcha.i18n.set("es-419", i18n);
}
