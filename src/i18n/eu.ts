const i18n = {
	ariaLinkLabel: 'Altcha (webgune ofiziala)',
	enterCode: 'Sartu kodea',
	enterCodeAria: 'Sartu entzun duzun kodea. Sakatu Espazioa audioa erreproduzitzeko.',
	error: 'Egiaztatzeak huts egin du. Saiatu berriro geroago.',
	expired: 'Egiaztatzea iraungi da. Saiatu berriro.',
	footer:
		'<a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (webgune ofiziala)">ALTCHA</a>k babestuta',
	getAudioChallenge: 'Jaso audio-erronka bat',
	label: 'Ez naiz robot bat',
	loading: 'Kargatzen...',
	reload: 'Birkargatu',
	verify: 'Egiaztatu',
	verificationRequired: 'Egiaztatzea beharrezkoa da!',
	verified: 'Egiaztatuta',
	verifying: 'Egiaztatzen...',
	waitAlert: 'Egiaztatzen... itxaron mesedez.',
	cancel: 'Utzi',
	enterCodeFromImage: 'Jarraitzeko, idatzi beheko irudiko kodea.'
};

if ('$altcha' in globalThis) {
	globalThis.$altcha.i18n.set('eu', i18n);
}
