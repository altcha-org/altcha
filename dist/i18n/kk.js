const i18n = {
  ariaLinkLabel: "Altcha (ресми веб-сайт)",
  enterCode: "Кодты енгізіңіз",
  enterCodeAria: "Естіген кодыңызды енгізіңіз. Аудионы ойнату үшін Бос орынды басыңыз.",
  error: "Тексеру сәтсіз аяқталды. Кейінірек қайталаңыз.",
  expired: "Тексеру мерзімі аяқталды. Қайталаңыз.",
  footer: '<a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (ресми веб-сайт)">ALTCHA</a> қорғайды',
  getAudioChallenge: "Аудио сынақ алу",
  label: "Мен робот емеспін",
  loading: "Жүктелуде...",
  reload: "Қайта жүктеу",
  verify: "Тексеру",
  verificationRequired: "Тексеру талап етіледі!",
  verified: "Тексерілді",
  verifying: "Тексеруде...",
  waitAlert: "Тексерілуде... күте тұрыңыз.",
  cancel: "Болдыру",
  enterCodeFromImage: "Жалғастыру үшін төмендегі суреттегі кодты енгізіңіз."
};
if ("$altcha" in globalThis) {
  globalThis.$altcha.i18n.set("kk", i18n);
}
