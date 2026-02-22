const i18n = {
  ariaLinkLabel: "Visitar Altcha.org",
  enterCode: "Introduce el código",
  enterCodeAria: "Introduce el código que escuchas. Pulsa Espacio para reproducir el audio.",
  error: "Falló la verificación. Por favor intente nuevamente más tarde.",
  expired: "Verificación expirada. Por favor intente nuevamente.",
  footer: 'Protegido por <a href="https://altcha.org/" target="_blank" aria-label="Visitar Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Obtener un desafío de audio",
  label: "No soy un robot",
  loading: "Cargando...",
  reload: "Recargar",
  verify: "Verificar",
  verificationRequired: "¡Verificación requerida!",
  verified: "Verificado",
  verifying: "Verificando...",
  waitAlert: "Verificando... por favor espere.",
  cancel: "Cancelar",
  enterCodeFromImage: "Para continuar, introduzca el código de la imagen de abajo."
};
if ("$altcha" in globalThis) {
  globalThis.$altcha.i18n.set("es-es", i18n);
}
