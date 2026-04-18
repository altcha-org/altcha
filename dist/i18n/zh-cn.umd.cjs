(function(factory) {
  typeof define === "function" && define.amd ? define(factory) : factory();
})((function() {
  "use strict";
  const i18n = {
    ariaLinkLabel: "Altcha (官方网站)",
    enterCode: "输入代码",
    enterCodeAria: "输入您听到的代码。按空格键播放音频。",
    error: "验证失败。稍后再试。",
    expired: "验证已过期。请重试。",
    footer: '由 <a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (官方网站)">ALTCHA</a> 保护',
    getAudioChallenge: "获取音频挑战",
    label: "我不是机器人",
    loading: "加载中...",
    reload: "重新加载",
    verify: "验证",
    verificationRequired: "需要验证！",
    verified: "已验证",
    verifying: "正在验证...",
    waitAlert: "正在验证... 请稍等。",
    cancel: "取消",
    enterCodeFromImage: "为继续操作，请输入下图中显示的验证码。"
  };
  if ("$altcha" in globalThis) {
    globalThis.$altcha.i18n.set("zh-cn", i18n);
  }
}));
