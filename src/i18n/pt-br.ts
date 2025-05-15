import '../globals';

export const i18n = {
  ariaLinkLabel: 'Visitar Altcha.org',
  enterCode: 'Digite o código',
  enterCodeAria:
    'Digite o código que você ouve. Pressione Espaço para reproduzir o áudio.',
  error: 'Falha na verificação. Por favor, tente novamente mais tarde.',
  expired: 'Verificação expirada. Por favor, tente novamente.',
  verificationRequired: 'Verificação necessária!',
  footer:
    'Protegido por <a href="https://altcha.org/" target="_blank" aria-label="Visitar Altcha.org">ALTCHA</a>',
  getAudioChallenge: 'Obter desafio de áudio',
  label: 'Eu não sou um robô',
  loading: 'Carregando...',
  reload: 'Recarregar',
  verify: 'Verificar',
  verified: 'Verificado',
  verifying: 'Verificando...',
  waitAlert: 'Verificando... por favor aguarde.',
};

globalThis.altchaI18n.set('pt-br', i18n);
