import '../global';

const i18n = {
	ariaLinkLabel: 'Altcha (rəsmi vebsayt)',
	enterCode: 'Kodu daxil edin',
	enterCodeAria: 'Eşitdiyiniz kodu daxil edin. Səsi dinləmək üçün Boşluq düyməsinə basın.',
	error: 'Təsdiqləmə uğursuz oldu. Daha sonra yenidən cəhd edin.',
	expired: 'Təsdiqləmə vaxtı bitdi. Yenidən cəhd edin.',
	footer:
		'Qorunur <a href="https://altcha.org/" tabindex="-1" target="_blank" rel="noopener" aria-label="Altcha (rəsmi vebsayt)">ALTCHA</a> tərəfindən',
	getAudioChallenge: 'Audio tapşırıq alın',
	label: 'Mən robot deyiləm',
	loading: 'Yüklənir...',
	reload: 'Yenilə',
	verify: 'Təsdiqlə',
	verificationRequired: 'Təsdiqləmə tələb olunur!',
	verified: 'Təsdiqləndi',
	verifying: 'Təsdiqlənir...',
	waitAlert: 'Təsdiqlənir... zəhmət olmasa gözləyin.',
	cancel: 'İmtina et',
	enterCodeFromImage: 'Davam etmək üçün, zəhmət olmasa aşağıdakı şəkildəki kodu daxil edin.'
};

globalThis.$altcha.i18n.set('az', i18n);
