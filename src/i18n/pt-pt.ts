const i18n = {
	ariaLinkLabel: 'Visitar Altcha.org',
	enterCode: 'Introduza o código',
	enterCodeAria: 'Introduza o código que ouve. Prima Espaço para reproduzir o áudio.',
	error: 'A verificação falhou. Por favor, tente novamente mais tarde.',
	expired: 'Verificação expirada. Por favor, tente novamente.',
	footer:
		'Protegido por <a href="https://altcha.org/" target="_blank" aria-label="Visitar Altcha.org">ALTCHA</a>',
	getAudioChallenge: 'Obter desafio de áudio',
	label: 'Não sou um robô',
	loading: 'A carregar...',
	reload: 'Recarregar',
	verify: 'Verificar',
	verificationRequired: 'Verificação necessária!',
	verified: 'Verificado',
	verifying: 'A verificar...',
	waitAlert: 'A verificar... por favor aguarde.',
	cancel: 'Cancelar',
	enterCodeFromImage: 'Para prosseguir, introduza o código da imagem abaixo.'
};

if ('$altcha' in globalThis) {
	globalThis.$altcha.i18n.set('pt-pt', i18n);
}
