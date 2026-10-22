import '../global';

const i18n = {
	ariaLinkLabel: 'Altcha (ოფიციალური ვებსაიტი)',
	enterCode: 'შეიყვანეთ კოდი',
	enterCodeAria: 'შეიყვანეთ კოდი, რომელსაც გაიგონებთ. აუდიოს მოსასმენად დააჭირეთ Space-ს.',
	error: 'ვერიფიკაცია ჩაიშალა. სცადეთ მოგვიანებით.',
	expired: 'ვერიფიკაციის ვადა გავიდა. სცადეთ ხელახლა.',
	footer:
		'დაცულია <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (ოფიციალური ვებსაიტი, იხსნება ახალ ჩანართში)">ALTCHA</a>-ით',
	getAudioChallenge: 'მიიღეთ აუდიო გამოწვევა',
	label: 'მე არ ვარ რობოტი',
	loading: 'იტვირთება...',
	reload: 'განახლება',
	verify: 'დადასტურება',
	verificationRequired: 'საჭიროა ვერიფიკაცია!',
	verified: 'დადასტურებულია',
	verifying: 'დადასტურება მიმდინარეობს...',
	waitAlert: 'დადასტურება მიმდინარეობს... გთხოვთ, დაიცადეთ.',
	cancel: 'გაუქმება',
	enterCodeFromImage: 'გაგრძელების მიზნით, გთხოვთ შეიყვანოთ კოდი ქვემოთ მოცემული სურათიდან.'
};

globalThis.$altcha.i18n.set('ka', i18n);
