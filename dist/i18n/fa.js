const i18n = {
  ariaLinkLabel: "Altcha (وب‌سایت رسمی)",
  enterCode: "کد را وارد کنید",
  enterCodeAria: "کدی که می‌شنوید را وارد کنید. برای پخش صدا Space را فشار دهید.",
  error: "احراز هویت ناموفق بود. بعداً دوباره تلاش کنید.",
  expired: "احراز هویت منقضی شد. دوباره تلاش کنید.",
  footer: 'محافظت شده توسط <a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (وب‌سایت رسمی)">ALTCHA</a>',
  getAudioChallenge: "دریافت چالش صوتی",
  label: "من ربات نیستم",
  loading: "در حال بارگذاری...",
  reload: "بارگذاری مجدد",
  verify: "تایید",
  verificationRequired: "احراز هویت لازم است!",
  verified: "تایید شد",
  verifying: "در حال تایید...",
  waitAlert: "در حال تایید... لطفا منتظر بمانید.",
  cancel: "لغو کردن",
  enterCodeFromImage: "برای ادامه، لطفاً کد تصویر زیر را وارد کنید."
};
if ("$altcha" in globalThis) {
  globalThis.$altcha.i18n.set("fa", i18n);
}
