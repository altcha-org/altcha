const i18n = {
  ariaLinkLabel: "Altcha (офіційний сайт)",
  enterCode: "Введіть код",
  enterCodeAria: "Введіть код, який ви чуєте. Натисніть пробіл, щоб відтворити аудіо.",
  error: "Перевірка не вдалася. Спробуйте пізніше.",
  expired: "Перевірка прострочена. Спробуйте знову.",
  footer: 'Захищено <a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (офіційний сайт)">ALTCHA</a>',
  getAudioChallenge: "Отримати аудіо-челлендж",
  label: "Я не робот",
  loading: "Завантаження...",
  reload: "Перезавантажити",
  verify: "Перевірити",
  verificationRequired: "Потрібна перевірка!",
  verified: "Перевірено",
  verifying: "Перевіряється...",
  waitAlert: "Перевірка... будь ласка, зачекайте.",
  cancel: "Скасувати",
  enterCodeFromImage: "Щоб продовжити, введіть код із зображення нижче."
};
if ("$altcha" in globalThis) {
  globalThis.$altcha.i18n.set("uk", i18n);
}
