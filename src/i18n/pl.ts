const i18n = {
	ariaLinkLabel: 'Odwiedź Altcha.org',
	enterCode: 'Wprowadź kod',
	enterCodeAria: 'Wpisz kod, który słyszysz. Naciśnij Spację, aby odtworzyć dźwięk.',
	error: 'Weryfikacja nie powiodła się. Spróbuj ponownie później.',
	expired: 'Weryfikacja wygasła. Spróbuj ponownie.',
	footer:
		'Chronione przez <a href="https://altcha.org/" target="_blank" aria-label="Odwiedź Altcha.org">ALTCHA</a>',
	getAudioChallenge: 'Pobierz zadanie dźwiękowe',
	label: 'Nie jestem robotem',
	loading: 'Ładowanie...',
	reload: 'Odśwież',
	verify: 'Zweryfikuj',
	verificationRequired: 'Wymagana weryfikacja!',
	verified: 'Zweryfikowano',
	verifying: 'Weryfikacja...',
	waitAlert: 'Trwa weryfikacja... proszę czekać.',
	cancel: 'Anuluj',
	enterCodeFromImage: 'Aby kontynuować, wprowadź kod z poniższego obrazka.'
};

if ('$altcha' in globalThis) {
	globalThis.$altcha.i18n.set('pl', i18n);
}
