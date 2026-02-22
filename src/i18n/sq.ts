const i18n = {
	ariaLinkLabel: 'Vizitoni Altcha.org',
	enterCode: 'Fut kodin',
	enterCodeAria: 'Fut kodin që dëgjon. Shtypni Hapësirë për të luajtur audio.',
	error: 'Verifikimi dështoi. Provoni përsëri më vonë.',
	expired: 'Verifikimi ka skaduar. Provoni përsëri.',
	footer:
		'I mbrojtur nga <a href="https://altcha.org/" target="_blank" aria-label="Vizitoni Altcha.org">ALTCHA</a>',
	getAudioChallenge: 'Merr një sfidë audio',
	label: 'Unë nuk jam një robot',
	loading: 'Duke u ngarkuar...',
	reload: 'Ringarko',
	verify: 'Verifiko',
	verificationRequired: 'Kërkohet verifikimi!',
	verified: 'I verifikuar',
	verifying: 'Duke verifikuar...',
	waitAlert: 'Duke verifikuar... ju lutem prisni.',
	cancel: 'Anuloje',
	enterCodeFromImage: 'Për të vazhduar, ju lutemi fusni kodin nga imazhi më poshtë.'
};

if ('$altcha' in globalThis) {
	globalThis.$altcha.i18n.set('sq', i18n);
}
