(function(factory) {
  typeof define === "function" && define.amd ? define(factory) : factory();
})((function() {
  "use strict";
  const i18n = {
    ariaLinkLabel: "Посетете Altcha.org",
    enterCode: "Въведете код",
    enterCodeAria: "Въведете кода, който чувате. Натиснете Space за възпроизвеждане на аудио.",
    error: "Проверката неуспешна. Моля, опитайте по-късно.",
    expired: "Времето за проверка изтече. Моля, опитайте отново.",
    footer: 'Защитено от <a href="https://altcha.org/" target="_blank" aria-label="Посетете Altcha.org">ALTCHA</a>',
    getAudioChallenge: "Аудио проверка",
    label: "Аз не съм робот",
    loading: "Зареждане...",
    reload: "Презареди",
    verify: "Провери",
    verificationRequired: "Изисква се проверка!",
    verified: "Проверено",
    verifying: "Проверява се...",
    waitAlert: "Проверката е в процес... моля изчакайте.",
    cancel: "Отказ",
    enterCodeFromImage: "За да продължите, моля, въведете кода от изображението по-долу."
  };
  if ("$altcha" in globalThis) {
    globalThis.$altcha.i18n.set("bg", i18n);
  }
}));
