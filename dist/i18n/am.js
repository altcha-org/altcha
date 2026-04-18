const i18n = {
  ariaLinkLabel: "Altcha (ዋናው ድህረ ገጽ)",
  enterCode: "ኮድ አስገባ",
  enterCodeAria: "የሚሰማዎትን ኮድ ያስገቡ። ድምጽ ለመጫወት Space ን ይጫኑ።",
  error: "ማረጋገጫ አልተሳካም። በኋላ ላይ እንደገና ይሞክሩ።",
  expired: "ማረጋገጫው ጊዜው አልፏል። እንደገና ይሞክሩ።",
  footer: 'በ <a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (ዋናው ድህረ ገጽ)">ALTCHA</a> የተጠበቀ',
  getAudioChallenge: "የድምጽ ፈተና ያግኙ",
  label: "እኔ ሮቦት አይደለሁም",
  loading: "በመጫን ላይ...",
  reload: "እንደገና ጫን",
  verify: "አረጋግጥ",
  verificationRequired: "ማረጋገጫ ያስፈልጋል!",
  verified: "ተረጋግጧል",
  verifying: "በማረጋገጥ ላይ...",
  waitAlert: "በማረጋገጥ ላይ... እባክዎ ይጠብቁ።",
  cancel: "ይቅር",
  enterCodeFromImage: "ለመቀጠል፣ እባክዎን ከታች ካለው ምስል ኮዱን ያስገቡ።"
};
if ("$altcha" in globalThis) {
  globalThis.$altcha.i18n.set("am", i18n);
}
