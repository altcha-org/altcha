const i18n = {
  ariaLinkLabel: "Перейти на Altcha.org",
  enterCode: "Введите код",
  enterCodeAria: "Введите код, который слышите. Нажмите пробел для воспроизведения аудио.",
  error: "Ошибка верификации. Попробуйте позже.",
  expired: "Срок действия верификации истек. Попробуйте снова.",
  footer: 'Защищено <a href="https://altcha.org/" target="_blank" aria-label="Перейти на Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Получить аудио задачу",
  label: "Я не робот",
  loading: "Загрузка...",
  reload: "Перезагрузить",
  verify: "Проверить",
  verificationRequired: "Требуется проверка!",
  verified: "Проверено",
  verifying: "Идет проверка...",
  waitAlert: "Идет проверка... Пожалуйста, подождите.",
  cancel: "Отмена",
  enterCodeFromImage: "Чтобы продолжить, пожалуйста, введите код с изображения ниже."
};
if ("$altcha" in globalThis) {
  globalThis.$altcha.i18n.set("ru", i18n);
}
