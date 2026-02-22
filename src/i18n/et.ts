const i18n = {
	ariaLinkLabel: 'Külasta Altcha.org',
	enterCode: 'Sisesta kood',
	enterCodeAria: 'Sisestage kuuldu kood. Vajutage tühikut, et esitada heli.',
	error: 'Kinnitamine ebaõnnestus. Proovi hiljem uuesti.',
	expired: 'Kinnitamine aegus. Proovi uuesti.',
	footer:
		'Kaitstud <a href="https://altcha.org/" target="_blank" aria-label="Külasta Altcha.org">ALTCHA</a> poolt',
	getAudioChallenge: 'Hangi heliülesanne',
	label: 'Ma ei ole robot',
	loading: 'Laadimine...',
	reload: 'Laadi uuesti',
	verify: 'Kinnita',
	verificationRequired: 'Kontroll on vajalik!',
	verified: 'Kinnitatud',
	verifying: 'Kinnitamine...',
	waitAlert: 'Kinnitamine... palun oota.',
	cancel: 'Tühista',
	enterCodeFromImage: 'Jätkamiseks sisestage alloleval pildil olev kood.'
};

if ('$altcha' in globalThis) {
	globalThis.$altcha.i18n.set('et', i18n);
}
