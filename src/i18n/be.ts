const i18n = {
	ariaLinkLabel: 'Altcha (афіцыйны сайт)',
	enterCode: 'Увядзіце код',
	enterCodeAria: 'Увядзіце код, які вы чуеце. Націсніце прабел, каб прайграць аўдыё.',
	error: 'Праверка не прайшла. Паспрабуйце пазней.',
	expired: 'Тэрмін праверкі скончыўся. Паспрабуйце зноў.',
	footer:
		'Абаронена <a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (афіцыйны сайт)">ALTCHA</a>',
	getAudioChallenge: 'Атрымаць аўдыё выклік',
	label: 'Я не робат',
	loading: 'Загрузка...',
	reload: 'Перазагрузіць',
	verify: 'Праверыць',
	verificationRequired: 'Патрабуецца праверка!',
	verified: 'Праверана',
	verifying: 'Правяраем...',
	waitAlert: 'Праверка... калі ласка, пачакайце.',
	cancel: 'Скасаваць',
	enterCodeFromImage: 'Каб працягнуць, увядзіце код з малюнка ніжэй.'
};

if ('$altcha' in globalThis) {
	globalThis.$altcha.i18n.set('be', i18n);
}
