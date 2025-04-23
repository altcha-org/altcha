const a = {
  ariaLinkLabel: "Visitar Altcha.org",
  enterCode: "Ingresa el código",
  enterCodeAria: "Ingresa el código que escuchas. Presiona Espacio para reproducir el audio.",
  error: "Falló la verificación. Por favor vuelve a intentarlo más tarde.",
  expired: "La verificación expiró. Por favor inténtalo de nuevo.",
  extraCheck: "¡Verificación requerida!",
  footer: 'Protegido por <a href="https://altcha.org/" target="_blank" aria-label="Visitar Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Obtener un reto de audio",
  label: "No soy un robot",
  loading: "Cargando...",
  reload: "Volver a cargar",
  verify: "Verificar",
  verified: "Verificado",
  verifying: "Verificando...",
  waitAlert: "Verificando... por favor espera."
};
typeof globalThis.altchaI18n != "object" && (globalThis.altchaI18n = {});
globalThis.altchaI18n["es-419"] = a;
export {
  a as i18n
};
