const i18n = {
	ariaLinkLabel: 'Żur Altcha.org',
	enterCode: 'Idħol il-kodiċi',
	enterCodeAria: "Idħol il-kodiċi li tisma'. Agħfas Spazju biex tindaqq l-awdjo.",
	error: 'Il-verifika falliet. Erġa’ pprova aktar tard.',
	expired: 'Il-verifika skadiet. Erġa’ pprova.',
	footer:
		'Protett minn <a href="https://altcha.org/" target="_blank" aria-label="Żur Altcha.org">ALTCHA</a>',
	getAudioChallenge: 'Ikseb sfida bl-awdjo',
	label: 'M’inix robot',
	loading: 'Qed jitgħabba...',
	reload: 'Ittella’ mill-ġdid',
	verify: 'Ivverifika',
	verificationRequired: 'Verifika meħtieġa!',
	verified: 'Ivverifikat',
	verifying: 'Verifika għaddejja...',
	waitAlert: 'Verifika għaddejja... stenna ftit.',
	cancel: 'Ikkanċella',
	enterCodeFromImage: 'Biex tipproċedi, jekk jogħġbok daħħal il-kodiċi mill-immaġni hawn taħt.'
};

if ('$altcha' in globalThis) {
	globalThis.$altcha.i18n.set('mt', i18n);
}
