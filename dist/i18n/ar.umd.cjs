(function(factory) {
  typeof define === "function" && define.amd ? define(factory) : factory();
})((function() {
  "use strict";
  const i18n = {
    ariaLinkLabel: "Altcha (الموقع الرسمي)",
    enterCode: "أدخل الرمز",
    enterCodeAria: "أدخل الرمز الذي تسمعه. اضغط على المسافة لتشغيل الصوت.",
    error: "فشل التحقق. حاول مرة أخرى لاحقاً.",
    expired: "انتهت صلاحية التحقق. حاول مرة أخرى.",
    footer: 'محمي بواسطة <a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (الموقع الرسمي)">ALTCHA</a>',
    getAudioChallenge: "احصل على تحدي صوتي",
    label: "أنا لست روبوتاً",
    loading: "جارٍ التحميل...",
    reload: "إعادة تحميل",
    verify: "تحقق",
    verificationRequired: "مطلوب التحقق!",
    verified: "تم التحقق",
    verifying: "جارٍ التحقق...",
    waitAlert: "جارٍ التحقق... يرجى الانتظار.",
    cancel: "إلغاء",
    enterCodeFromImage: "للمتابعة، يرجى إدخال الرمز من الصورة أدناه."
  };
  if ("$altcha" in globalThis) {
    globalThis.$altcha.i18n.set("ar", i18n);
  }
}));
