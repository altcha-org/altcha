const i18n = {
  ariaLinkLabel: "Altcha.org পরিদর্শন করুন",
  enterCode: "কোড লিখুন",
  enterCodeAria: "আপনি যে কোড শুনতে পান তা লিখুন। অডিও প্লে করতে স্পেস বাটন টিপুন।",
  error: "যাচাইকরণ ব্যর্থ হয়েছে। পরে আবার চেষ্টা করুন।",
  expired: "যাচাইকরণ সময়সীমা শেষ হয়েছে। আবার চেষ্টা করুন।",
  footer: 'দ্বারা সুরক্ষিত <a href="https://altcha.org/" target="_blank" aria-label="Altcha.org পরিদর্শন করুন">ALTCHA</a>',
  getAudioChallenge: "অডিও চ্যালেঞ্জ নিন",
  label: "আমি রোবট নই",
  loading: "লোড হচ্ছে...",
  reload: "পুনরায় লোড করুন",
  verify: "যাচাই করুন",
  verificationRequired: "যাচাই প্রয়োজন!",
  verified: "যাচাই করা হয়েছে",
  verifying: "যাচাই করা হচ্ছে...",
  waitAlert: "যাচাই করা হচ্ছে... দয়া করে অপেক্ষা করুন।",
  cancel: "বাতিল করুন",
  enterCodeFromImage: "এগিয়ে যেতে, অনুগ্রহ করে নীচের চিত্র থেকে কোডটি প্রবেশ করান।"
};
if ("$altcha" in globalThis) {
  globalThis.$altcha.i18n.set("bn", i18n);
}
