const i18n = {
  ariaLinkLabel: "Altcha (เว็บไซต์ทางการ)",
  enterCode: "ป้อนรหัส",
  enterCodeAria: "ป้อนรหัสที่คุณได้ยิน กด Space เพื่อเล่นเสียง",
  error: "การตรวจสอบล้มเหลว กรุณาลองอีกครั้งภายหลัง",
  expired: "การตรวจสอบหมดอายุ กรุณาลองใหม่",
  footer: 'ป้องกันโดย <a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (เว็บไซต์ทางการ)">ALTCHA</a>',
  getAudioChallenge: "รับการท้าทายเสียง",
  label: "ฉันไม่ใช่บอท",
  loading: "กำลังโหลด...",
  reload: "โหลดใหม่",
  verify: "ตรวจสอบ",
  verificationRequired: "จำเป็นต้องตรวจสอบ!",
  verified: "ตรวจสอบแล้ว",
  verifying: "กำลังตรวจสอบ...",
  waitAlert: "กำลังตรวจสอบ... กรุณารอ",
  cancel: "ยกเลิก",
  enterCodeFromImage: "เพื่อดำเนินการต่อ โปรดป้อนรหัสจากรูปภาพด้านล่าง"
};
if ("$altcha" in globalThis) {
  globalThis.$altcha.i18n.set("th", i18n);
}
