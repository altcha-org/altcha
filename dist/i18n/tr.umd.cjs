(function(factory) {
  typeof define === "function" && define.amd ? define(factory) : factory();
})((function() {
  "use strict";
  const i18n = {
    ariaLinkLabel: "Altcha (resmi web sitesi)",
    enterCode: "Kodu girin",
    enterCodeAria: "Duyduğunuz kodu girin. Ses dosyasını oynatmak için Boşluk tuşuna basın.",
    error: "Doğrulama başarısız oldu. Lütfen daha sonra tekrar deneyin.",
    expired: "Doğrulama süresi doldu. Lütfen tekrar deneyin.",
    footer: 'ALTCHA tarafından korunuyor <a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (resmi web sitesi)">ALTCHA</a>',
    getAudioChallenge: "Sesli doğrulama al",
    label: "Ben robot değilim",
    loading: "Yükleniyor...",
    reload: "Yeniden yükle",
    verify: "Doğrula",
    verificationRequired: "Doğrulama gerekli!",
    verified: "Doğrulandı",
    verifying: "Doğrulama yapılıyor...",
    waitAlert: "Doğrulama yapılıyor... lütfen bekleyin.",
    cancel: "İptal",
    enterCodeFromImage: "Devam etmek için lütfen aşağıdaki resimdeki kodu girin."
  };
  if ("$altcha" in globalThis) {
    globalThis.$altcha.i18n.set("tr", i18n);
  }
}));
