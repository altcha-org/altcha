import '../globals';

export const i18n = {
  ariaLinkLabel: 'เยี่ยมชม Altcha.org',
  enterCode: 'ป้อนรหัส',
  enterCodeAria: 'ป้อนรหัสที่คุณได้ยิน กด Space เพื่อเล่นเสียง',
  error: 'การตรวจสอบล้มเหลว กรุณาลองอีกครั้งภายหลัง',
  expired: 'การตรวจสอบหมดอายุ กรุณาลองใหม่',
  verificationRequired: 'จำเป็นต้องตรวจสอบ!',
  footer:
    'ป้องกันโดย <a href="https://altcha.org/" target="_blank" aria-label="เยี่ยมชม Altcha.org">ALTCHA</a>',
  getAudioChallenge: 'รับการท้าทายเสียง',
  label: 'ฉันไม่ใช่บอท',
  loading: 'กำลังโหลด...',
  reload: 'โหลดใหม่',
  verify: 'ตรวจสอบ',
  verified: 'ตรวจสอบแล้ว',
  verifying: 'กำลังตรวจสอบ...',
  waitAlert: 'กำลังตรวจสอบ... กรุณารอ',
};

globalThis.altchaI18n.set('th', i18n);
