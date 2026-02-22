const i18n = {
  ariaLinkLabel: "Visitar Altcha.org",
  enterCode: "Digite o código",
  enterCodeAria: "Digite o código que você ouve. Pressione Espaço para reproduzir o áudio.",
  error: "Falha na verificação. Por favor, tente novamente mais tarde.",
  expired: "Verificação expirada. Por favor, tente novamente.",
  footer: 'Protegido por <a href="https://altcha.org/" target="_blank" aria-label="Visitar Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Obter desafio de áudio",
  label: "Eu não sou um robô",
  loading: "Carregando...",
  reload: "Recarregar",
  verify: "Verificar",
  verificationRequired: "Verificação necessária!",
  verified: "Verificado",
  verifying: "Verificando...",
  waitAlert: "Verificando... por favor aguarde.",
  cancel: "Cancelar",
  enterCodeFromImage: "Para prosseguir, digite o código da imagem abaixo."
};
if ("$altcha" in globalThis) {
  globalThis.$altcha.i18n.set("pt-br", i18n);
}
