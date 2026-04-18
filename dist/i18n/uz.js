const i18n = {
  ariaLinkLabel: "Altcha (rasmiy veb-sayt)",
  enterCode: "Kodni kiriting",
  enterCodeAria: "Eshitgan kodingizni kiriting. Audioni ijro etish uchun Bo'sh joy tugmasini bosing.",
  error: "Tekshiruv muvaffaqiyatsiz tugadi. Keyinroq qayta urinib ko'ring.",
  expired: "Tekshiruv muddati tugadi. Qayta urinib ko'ring.",
  footer: '<a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (rasmiy veb-sayt)">ALTCHA</a> tomonidan himoyalangan',
  getAudioChallenge: "Audio sinovni olish",
  label: "Men robot emasman",
  loading: "Yuklanmoqda...",
  reload: "Qayta yuklash",
  verify: "Tekshirish",
  verificationRequired: "Tekshiruv talab qilinadi!",
  verified: "Tekshirildi",
  verifying: "Tekshirilmoqda...",
  waitAlert: "Tekshirilmoqda... iltimos kuting.",
  cancel: "Bekor qilish",
  enterCodeFromImage: "Davom etish uchun, iltimos, quyidagi rasmda ko'rsatilgan kodni kiriting."
};
if ("$altcha" in globalThis) {
  globalThis.$altcha.i18n.set("uz", i18n);
}
