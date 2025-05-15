import '../globals';

export const i18n = {
  ariaLinkLabel: 'Kunjungi Altcha.org',
  enterCode: 'Masukkan kode',
  enterCodeAria:
    'Masukkan kode yang Anda dengar. Tekan Spasi untuk memutar audio.',
  error: 'Verifikasi gagal. Coba lagi nanti.',
  expired: 'Verifikasi telah kedaluwarsa. Coba lagi.',
  verificationRequired: 'Verifikasi diperlukan!',
  footer:
    'Dilindungi oleh <a href="https://altcha.org/" target="_blank" aria-label="Kunjungi Altcha.org">ALTCHA</a>',
  getAudioChallenge: 'Dapatkan tantangan audio',
  label: 'Saya bukan robot',
  loading: 'Memuat...',
  reload: 'Muat ulang',
  verify: 'Verifikasi',
  verified: 'Terverifikasi',
  verifying: 'Memverifikasi...',
  waitAlert: 'Memverifikasi... harap tunggu.',
};

globalThis.altchaI18n.set('id', i18n);
