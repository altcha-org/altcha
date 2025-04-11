import '../globals';

export const i18n = {
  ariaLinkLabel: 'Visitar Altcha.org',
  enterCode: 'Introduza o código',
  enterCodeAria:
    'Introduza o código que ouve. Prima Espaço para reproduzir o áudio.',
  error: 'A verificação falhou. Por favor, tente novamente mais tarde.',
  expired: 'Verificação expirada. Por favor, tente novamente.',
  verificationRequired: 'Verificação necessária!',
  footer:
    'Protegido por <a href="https://altcha.org/" target="_blank" aria-label="Visitar Altcha.org">ALTCHA</a>',
  getAudioChallenge: 'Obter desafio de áudio',
  label: 'Não sou um robô',
  loading: 'A carregar...',
  reload: 'Recarregar',
  verify: 'Verificar',
  verified: 'Verificado',
  verifying: 'A verificar...',
  waitAlert: 'A verificar... por favor aguarde.',
};

globalThis.altchaI18n.set('pt-pt', i18n);
