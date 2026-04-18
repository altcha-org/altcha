(function(factory) {
  typeof define === "function" && define.amd ? define(factory) : factory();
})((function() {
  "use strict";
  const i18n = {
    ariaLinkLabel: "Altcha (אתר רשמי)",
    enterCode: "הזן קוד",
    enterCodeAria: "הזן את הקוד שאתה שומע. לחץ על רווח להפעלת השמע.",
    error: "האימות נכשל. נסה שוב מאוחר יותר.",
    expired: "תוקף האימות פג. נסה שוב.",
    footer: 'מוגן על ידי <a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (אתר רשמי)">ALTCHA</a>',
    getAudioChallenge: "קבל אתגר שמע",
    label: "אני לא רובוט",
    loading: "טוען...",
    reload: "טען מחדש",
    verify: "אמת",
    verificationRequired: "נדרש אימות!",
    verified: "אומת",
    verifying: "מאמת...",
    waitAlert: "מבצע אימות... אנא המתן.",
    cancel: "ביטול",
    enterCodeFromImage: "כדי להמשיך, אנא הזן את הקוד מהתמונה למטה."
  };
  if ("$altcha" in globalThis) {
    globalThis.$altcha.i18n.set("he", i18n);
  }
}));
