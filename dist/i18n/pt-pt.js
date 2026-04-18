const i18n = {
  ariaLinkLabel: "Altcha (site oficial)",
  enterCode: "Introduza o código",
  enterCodeAria: "Introduza o código que ouve. Prima Espaço para reproduzir o áudio.",
  error: "A verificação falhou. Por favor, tente novamente mais tarde.",
  expired: "Verificação expirada. Por favor, tente novamente.",
  footer: 'Protegido por <a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (site oficial)">ALTCHA</a>',
  getAudioChallenge: "Obter desafio de áudio",
  label: "Não sou um robô",
  loading: "A carregar...",
  reload: "Recarregar",
  verify: "Verificar",
  verificationRequired: "Verificação necessária!",
  verified: "Verificado",
  verifying: "A verificar...",
  waitAlert: "A verificar... por favor aguarde.",
  cancel: "Cancelar",
  enterCodeFromImage: "Para prosseguir, introduza o código da imagem abaixo."
};
if ("$altcha" in globalThis) {
  globalThis.$altcha.i18n.set("pt-pt", i18n);
}
