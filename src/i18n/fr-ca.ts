const i18n = {
	ariaLinkLabel: 'Altcha (site officiel)',
	enterCode: 'Entrez le code',
	enterCodeAria:
		"Entrez le code que vous entendez. Appuyez sur la barre d'espace pour écouter l'audio.",
	error: 'Échec de la vérification. Réessayez plus tard.',
	expired: 'La vérification a expiré. Réessayez.',
	footer:
		'Protégé par <a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (site officiel)">ALTCHA</a>',
	getAudioChallenge: 'Obtenir un défi audio',
	label: 'Je ne suis pas un robot',
	loading: 'Chargement...',
	reload: 'Recharger',
	verify: 'Vérifier',
	verificationRequired: 'Vérification requise !',
	verified: 'Vérifié',
	verifying: 'Vérification en cours...',
	waitAlert: 'Vérification en cours... veuillez patienter.',
	cancel: 'Annuler',
	enterCodeFromImage: "Pour continuer, veuillez entrer le code de l'image ci-dessous."
};

if ('$altcha' in globalThis) {
	globalThis.$altcha.i18n.set('fr-ca', i18n);
}
