import '../globals';

export const i18n = {
  ariaLinkLabel: 'ეწვიეთ Altcha.org-ს',
  enterCode: 'შეიყვანეთ კოდი',
  enterCodeAria: 'შეიყვანეთ კოდი, რომელსაც გაიგონებთ. აუდიოს მოსასმენად დააჭირეთ Space-ს.',
  error: 'ვერიფიკაცია ჩაიშალა. სცადეთ მოგვიანებით.',
  expired: 'ვერიფიკაციის ვადა გავიდა. სცადეთ ხელახლა.',
  footer:
    'დაცულია <a href="https://altcha.org/" target="_blank" aria-label="ეწვიეთ Altcha.org-ს">ALTCHA</a>-ით',
  getAudioChallenge: 'მიიღეთ აუდიო გამოწვევა',
  label: 'მე არ ვარ რობოტი',
  loading: 'იტვირთება...',
  reload: 'განახლება',
  verify: 'დადასტურება',
  verificationRequired: 'საჭიროა ვერიფიკაცია!',
  verified: 'დადასტურებულია',
  verifying: 'დადასტურება მიმდინარეობს...',
  waitAlert: 'დადასტურება მიმდინარეობს... გთხოვთ, დაიცადეთ.',
};

globalThis.altchaI18n.set('ka', i18n);
