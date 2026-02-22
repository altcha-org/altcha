const i18n = {
  ariaLinkLabel: "Altcha.org 방문하기",
  enterCode: "코드 입력",
  enterCodeAria: "들리는 코드를 입력하세요. 스페이스 바를 눌러 오디오를 재생합니다.",
  error: "인증 실패. 나중에 다시 시도해주세요.",
  expired: "인증이 만료되었습니다. 다시 시도해주세요.",
  footer: 'ALTCHA에서 보호됨 <a href="https://altcha.org/" target="_blank" aria-label="Altcha.org 방문하기">ALTCHA</a>',
  getAudioChallenge: "오디오 챌린지 받기",
  label: "저는 로봇이 아닙니다",
  loading: "로딩 중...",
  reload: "새로 고침",
  verify: "확인",
  verificationRequired: "인증이 필요합니다!",
  verified: "확인됨",
  verifying: "확인 중...",
  waitAlert: "확인 중... 잠시만 기다려주세요.",
  cancel: "취소",
  enterCodeFromImage: "계속 진행하려면 아래 이미지에서 코드를 입력하세요."
};
if ("$altcha" in globalThis) {
  globalThis.$altcha.i18n.set("ko", i18n);
}
