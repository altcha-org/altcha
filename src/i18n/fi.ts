const i18n = {
	ariaLinkLabel: 'Altcha (virallinen verkkosivusto)',
	enterCode: 'Syötä koodi',
	enterCodeAria: 'Kirjoita kuulemasi koodi. Paina välilyöntiä toistaaksesi äänen.',
	error: 'Varmennus epäonnistui. Yritä myöhemmin uudelleen.',
	expired: 'Varmennus vanhentui. Yritä uudelleen.',
	footer:
		'Suojattu <a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (virallinen verkkosivusto)">ALTCHA</a>:lla',
	getAudioChallenge: 'Hae äänitehtävä',
	label: 'En ole robotti',
	loading: 'Ladataan...',
	reload: 'Lataa uudelleen',
	verify: 'Vahvista',
	verificationRequired: 'Vahvistus vaaditaan!',
	verified: 'Vahvistettu',
	verifying: 'Vahvistetaan...',
	waitAlert: 'Vahvistetaan... odota hetki.',
	cancel: 'Peruuta',
	enterCodeFromImage: 'Jatkaaksesi, syötä alla olevan kuvan koodi.'
};

if ('$altcha' in globalThis) {
	globalThis.$altcha.i18n.set('fi', i18n);
}
