import '../globals';

export const i18n = {
  ariaLinkLabel: 'بازدید از Altcha.org',
  enterCode: 'کد را وارد کنید',
  enterCodeAria: 'کدی که می‌شنوید را وارد کنید. برای پخش صدا Space را فشار دهید.',
  error: 'احراز هویت ناموفق بود. بعداً دوباره تلاش کنید.',
  expired: 'احراز هویت منقضی شد. دوباره تلاش کنید.',
  footer:
    'محافظت شده توسط <a href="https://altcha.org/" target="_blank" aria-label="بازدید از Altcha.org">ALTCHA</a>',
  getAudioChallenge: 'دریافت چالش صوتی',
  label: 'من ربات نیستم',
  loading: 'در حال بارگذاری...',
  reload: 'بارگذاری مجدد',
  verify: 'تایید',
  verificationRequired: 'احراز هویت لازم است!',
  verified: 'تایید شد',
  verifying: 'در حال تایید...',
  waitAlert: 'در حال تایید... لطفا منتظر بمانید.',
};

globalThis.altchaI18n.set('fa', i18n);