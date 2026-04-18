const i18n = {
	ariaLinkLabel: 'Altcha (službena web stranica)',
	enterCode: 'Unesite kod',
	enterCodeAria: 'Unesite kod koji čujete. Pritisnite razmaknicu za reprodukciju zvuka.',
	error: 'Provjera nije uspjela. Molimo pokušajte kasnije.',
	expired: 'Provjera je istekla. Molimo pokušajte ponovo.',
	footer:
		'Zaštićeno od strane <a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (službena web stranica)">ALTCHA</a>',
	getAudioChallenge: 'Audio provjera',
	label: 'Ja nisam robot',
	loading: 'Učitavanje...',
	reload: 'Ponovno učitaj',
	verify: 'Provjeri',
	verificationRequired: 'Potrebna je provjera!',
	verified: 'Provjereno',
	verifying: 'Provjeravanje...',
	waitAlert: 'Provjera je u tijeku... molimo pričekajte.',
	cancel: 'Odustani',
	enterCodeFromImage: 'Za nastavak molimo unesite kod sa slike ispod.'
};

if ('$altcha' in globalThis) {
	globalThis.$altcha.i18n.set('hr', i18n);
}
