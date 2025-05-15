import '../globals';

export const i18n = {
  ariaLinkLabel: "Altcha.org'yu ziyaret edin",
  enterCode: 'Kodu girin',
  enterCodeAria:
    'Duyduğunuz kodu girin. Ses dosyasını oynatmak için Boşluk tuşuna basın.',
  error: 'Doğrulama başarısız oldu. Lütfen daha sonra tekrar deneyin.',
  expired: 'Doğrulama süresi doldu. Lütfen tekrar deneyin.',
  verificationRequired: 'Doğrulama gerekli!',
  footer:
    'ALTCHA tarafından korunuyor <a href="https://altcha.org/" target="_blank" aria-label="Altcha.org\'yu ziyaret edin">ALTCHA</a>',
  getAudioChallenge: 'Sesli doğrulama al',
  label: 'Ben robot değilim',
  loading: 'Yükleniyor...',
  reload: 'Yeniden yükle',
  verify: 'Doğrula',
  verified: 'Doğrulandı',
  verifying: 'Doğrulama yapılıyor...',
  waitAlert: 'Doğrulama yapılıyor... lütfen bekleyin.',
};

globalThis.altchaI18n.set('tr', i18n);
