(function(factory) {
  typeof define === "function" && define.amd ? define(factory) : factory();
})((function() {
  "use strict";
  const i18n = {
    ariaLinkLabel: "前往 Altcha.org",
    cancel: "取消",
    enterCode: "輸入代碼",
    enterCodeAria: "輸入你聽到嘅代碼。按空格鍵播放音訊。",
    enterCodeFromImage: "要繼續，請輸入下面圖片入面嘅代碼。",
    error: "驗證失敗。請稍後再試。",
    expired: "驗證已過期。請再試一次。",
    footer: '由 <a href="https://altcha.org/" target="_blank" aria-label="前往 Altcha.org">ALTCHA</a> 提供保護',
    getAudioChallenge: "取得音訊驗證",
    label: "我唔係機械人",
    loading: "載入中...",
    reload: "重新載入",
    verify: "驗證",
    verificationRequired: "需要驗證！",
    verified: "已驗證",
    verifying: "驗證中...",
    waitAlert: "驗證中... 請稍候。"
  };
  if ("$altcha" in globalThis) {
    globalThis.$altcha.i18n.set("zh-hk", i18n);
  }
}));
