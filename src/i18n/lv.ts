const i18n = {
	ariaLinkLabel: 'Apmeklējiet Altcha.org',
	enterCode: 'Ievadiet kodu',
	enterCodeAria: 'Ievadiet dzirdamo kodu. Nospiediet atstarpes taustiņu, lai atskaņotu audio.',
	error: 'Verifikācija neizdevās. Mēģiniet vēlāk vēlreiz.',
	expired: 'Verifikācijas laiks ir beidzies. Mēģiniet vēlreiz.',
	footer:
		'Aizsargāts ar <a href="https://altcha.org/" target="_blank" aria-label="Apmeklējiet Altcha.org">ALTCHA</a>',
	getAudioChallenge: 'Saņemt audio izaicinājumu',
	label: 'Es neesmu robots',
	loading: 'Notiek ielāde...',
	reload: 'Pārlādēt',
	verify: 'Verificēt',
	verificationRequired: 'Nepieciešama verifikācija!',
	verified: 'Verificēts',
	verifying: 'Notiek verifikācija...',
	waitAlert: 'Notiek verifikācija... lūdzu, uzgaidiet.',
	cancel: 'Atcelt',
	enterCodeFromImage: 'Lai turpinātu, lūdzu, ievadiet zemāk redzamo attēlu kodu.'
};

if ('$altcha' in globalThis) {
	globalThis.$altcha.i18n.set('lv', i18n);
}
