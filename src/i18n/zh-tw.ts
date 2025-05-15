import '../globals';

export const i18n = {
  ariaLinkLabel: '訪問 Altcha.org',
  enterCode: '輸入代碼',
  enterCodeAria: '輸入您聽到的代碼。按空格鍵播放音頻。',
  error: '驗證失敗。稍後再試。',
  expired: '驗證已過期。請重試。',
  verificationRequired: '需要驗證！',
  footer:
    '由 <a href="https://altcha.org/" target="_blank" aria-label="訪問 Altcha.org">ALTCHA</a> 保護',
  getAudioChallenge: '獲取音頻挑戰',
  label: '我不是機器人',
  loading: '載入中...',
  reload: '重新載入',
  verify: '驗證',
  verified: '已驗證',
  verifying: '正在驗證...',
  waitAlert: '正在驗證... 請稍等。',
};

globalThis.altchaI18n.set('zh-tw', i18n);
