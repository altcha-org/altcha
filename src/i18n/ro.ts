import '../global';

const i18n = {
	ariaLinkLabel: 'Altcha (site oficial)',
	enterCode: 'Introduceți codul',
	enterCodeAria: 'Introduceți codul pe care îl auziți. Apăsați Spațiu pentru a reda audio.',
	error: 'Verificarea a eșuat. Încearcă din nou mai târziu.',
	expired: 'Verificarea a expirat. Încearcă din nou.',
	footer:
		'Protejat de <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (site oficial, se deschide într-o filă nouă)">ALTCHA</a>',
	getAudioChallenge: 'Obține o provocare audio',
	label: 'Nu sunt un robot',
	loading: 'Se încarcă...',
	reload: 'Reîncarcă',
	verify: 'Verifică',
	verificationRequired: 'Verificare necesară!',
	verified: 'Verificat',
	verifying: 'Se verifică...',
	waitAlert: 'Se verifică... te rugăm să aștepți.',
	cancel: 'Anulare',
	enterCodeFromImage: 'Pentru a continua, vă rugăm să introduceți codul din imaginea de mai jos.'
};

globalThis.$altcha.i18n.set('ro', i18n);
