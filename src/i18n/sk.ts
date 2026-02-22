const i18n = {
	ariaLinkLabel: 'Navštívte Altcha.org',
	enterCode: 'Zadajte kód',
	enterCodeAria: 'Zadajte kód, ktorý počujete. Stlačením medzerníka prehráte zvuk.',
	error: 'Verifikácia zlyhala. Skúste to znova neskôr.',
	expired: 'Verifikácia vypršala. Skúste to znova.',
	footer:
		'Chránené <a href="https://altcha.org/" target="_blank" aria-label="Navštívte Altcha.org">ALTCHA</a>',
	getAudioChallenge: 'Získať audio výzvu',
	label: 'Nie som robot',
	loading: 'Načítava sa...',
	reload: 'Obnoviť',
	verify: 'Verifikovať',
	verificationRequired: 'Vyžaduje sa overenie!',
	verified: 'Verifikované',
	verifying: 'Prebieha verifikácia...',
	waitAlert: 'Prebieha verifikácia... prosím čakajte.',
	cancel: 'Zrušiť',
	enterCodeFromImage: 'Na pokračovanie, prosím, zadajte kód z obrázka nižšie.'
};

if ('$altcha' in globalThis) {
	globalThis.$altcha.i18n.set('sk', i18n);
}
