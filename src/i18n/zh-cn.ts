import '../globals';

export const i18n = {
  ariaLinkLabel: '访问 Altcha.org',
  enterCode: '输入代码',
  enterCodeAria: '输入您听到的代码。按空格键播放音频。',
  error: '验证失败。稍后再试。',
  expired: '验证已过期。请重试。',
  verificationRequired: '需要验证！',
  footer:
    '由 <a href="https://altcha.org/" target="_blank" aria-label="访问 Altcha.org">ALTCHA</a> 保护',
  getAudioChallenge: '获取音频挑战',
  label: '我不是机器人',
  loading: '加载中...',
  reload: '重新加载',
  verify: '验证',
  verified: '已验证',
  verifying: '正在验证...',
  waitAlert: '正在验证... 请稍等。',
};

globalThis.altchaI18n.set('zh-cn', i18n);
