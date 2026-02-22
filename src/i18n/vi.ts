const i18n = {
	ariaLinkLabel: 'Truy cập Altcha.org',
	enterCode: 'Nhập mã',
	enterCodeAria: 'Nhập mã bạn nghe được. Nhấn Phím cách để phát âm thanh.',
	error: 'Xác minh thất bại. Vui lòng thử lại sau.',
	expired: 'Xác minh đã hết hạn. Vui lòng thử lại.',
	footer:
		'Được bảo vệ bởi <a href="https://altcha.org/" target="_blank" aria-label="Truy cập Altcha.org">ALTCHA</a>',
	getAudioChallenge: 'Nhận thử thách âm thanh',
	label: 'Tôi không phải là robot',
	loading: 'Đang tải...',
	reload: 'Tải lại',
	verify: 'Xác minh',
	verificationRequired: 'Yêu cầu xác minh!',
	verified: 'Đã xác minh',
	verifying: 'Đang xác minh...',
	waitAlert: 'Đang xác minh... vui lòng chờ.',
	cancel: 'Hủy bỏ',
	enterCodeFromImage: 'Để tiếp tục, vui lòng nhập mã từ hình ảnh bên dưới.'
};

if ('$altcha' in globalThis) {
	globalThis.$altcha.i18n.set('vi', i18n);
}
