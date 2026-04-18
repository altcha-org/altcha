const i18n = {
	ariaLinkLabel: 'Altcha (سرکاری ویب سائٹ)',
	enterCode: 'کوڈ درج کریں',
	enterCodeAria: 'جو کوڈ آپ سنتے ہیں وہ درج کریں۔ آڈیو چلانے کے لیے اسپیس دبائیں۔',
	error: 'توثیق ناکام ہو گئی۔ براہ کرم بعد میں دوبارہ کوشش کریں۔',
	expired: 'توثیق کی مدت ختم ہو گئی ہے۔ براہ کرم دوبارہ کوشش کریں۔',
	footer:
		'کے ذریعے محفوظ <a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (سرکاری ویب سائٹ)">ALTCHA</a>',
	getAudioChallenge: 'آڈیو چیلنج حاصل کریں',
	label: 'میں روبوٹ نہیں ہوں',
	loading: 'لوڈ ہو رہا ہے...',
	reload: 'دوبارہ لوڈ کریں',
	verify: 'توثیق کریں',
	verificationRequired: 'تصدیق ضروری ہے!',
	verified: 'توثیق شدہ',
	verifying: 'توثیق ہو رہی ہے...',
	waitAlert: 'توثیق ہو رہی ہے... براہ کرم انتظار کریں۔',
	cancel: 'منسوخ کریں',
	enterCodeFromImage: 'اگلے مرحلے پر جانے کے لیے، براہ کرم نیچے دی گئی تصویر سے کوڈ درج کریں۔'
};

if ('$altcha' in globalThis) {
	globalThis.$altcha.i18n.set('ur', i18n);
}
