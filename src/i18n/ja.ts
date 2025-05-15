import '../globals';

export const i18n = {
  ariaLinkLabel: 'Altcha.orgを訪問',
  enterCode: 'コードを入力',
  enterCodeAria:
    '聞こえるコードを入力してください。スペースキーを押して音声を再生します。',
  error: '認証に失敗しました。後でもう一度試してください。',
  expired: '認証が期限切れです。再試行してください。',
  verificationRequired: '認証が必要です！',
  footer:
    '保護されています <a href="https://altcha.org/" target="_blank" aria-label="Altcha.orgを訪問">ALTCHA</a>',
  getAudioChallenge: '音声チャレンジを取得',
  label: 'ロボットじゃない',
  loading: '読み込み中...',
  reload: '再読み込み',
  verify: '確認',
  verified: '確認済み',
  verifying: '確認中...',
  waitAlert: '確認中...少々お待ちください。',
};

globalThis.altchaI18n.set('ja', i18n);
