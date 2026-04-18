(function(factory) {
  typeof define === "function" && define.amd ? define(factory) : factory();
})((function() {
  "use strict";
  const i18n = {
    ariaLinkLabel: "Altcha (официјален веб-сајт)",
    enterCode: "Внесете код",
    enterCodeAria: "Внесете го кодот што го слушате. Притиснете Space за да ја пуштите аудио снимката.",
    error: "Проверката не успеа. Обидете се подоцна.",
    expired: "Проверката истече. Обидете се повторно.",
    footer: 'Заштитено со <a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (официјален веб-сајт)">ALTCHA</a>',
    getAudioChallenge: "Земете аудио предизвик",
    label: "Јас не сум робот",
    loading: "Се вчитува...",
    reload: "Превчитај",
    verify: "Провери",
    verificationRequired: "Потребна е проверка!",
    verified: "Потврдено",
    verifying: "Се проверува...",
    waitAlert: "Се проверува... ве молиме почекајте.",
    cancel: "Откажи",
    enterCodeFromImage: "За да продолжите, ве молиме внесете го кодот од сликата подолу."
  };
  if ("$altcha" in globalThis) {
    globalThis.$altcha.i18n.set("mk", i18n);
  }
}));
