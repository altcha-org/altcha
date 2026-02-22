(function(factory) {
  typeof define === "function" && define.amd ? define(factory) : factory();
})((function() {
  "use strict";
  const i18n = {
    ariaLinkLabel: "Kunjungi Altcha.org",
    enterCode: "Masukkan kode",
    enterCodeAria: "Masukkan kode yang Anda dengar. Tekan Spasi untuk memutar audio.",
    error: "Verifikasi gagal. Coba lagi nanti.",
    expired: "Verifikasi telah kedaluwarsa. Coba lagi.",
    footer: 'Dilindungi oleh <a href="https://altcha.org/" target="_blank" aria-label="Kunjungi Altcha.org">ALTCHA</a>',
    getAudioChallenge: "Dapatkan tantangan audio",
    label: "Saya bukan robot",
    loading: "Memuat...",
    reload: "Muat ulang",
    verify: "Verifikasi",
    verificationRequired: "Verifikasi diperlukan!",
    verified: "Terverifikasi",
    verifying: "Memverifikasi...",
    waitAlert: "Memverifikasi... harap tunggu.",
    cancel: "Batal",
    enterCodeFromImage: "Untuk melanjutkan, silakan masukkan kode dari gambar di bawah ini."
  };
  if ("$altcha" in globalThis) {
    globalThis.$altcha.i18n.set("id", i18n);
  }
}));
