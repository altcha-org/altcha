(function(factory) {
  typeof define === "function" && define.amd ? define(factory) : factory();
})((function() {
  "use strict";
  const i18n = {
    ariaLinkLabel: "Altcha (அதிகாரப்பூர்வ வலைத்தளம்)",
    enterCode: "குறியீட்டை உள்ளிடவும்",
    enterCodeAria: "நீங்கள் கேட்கும் குறியீட்டை உள்ளிடவும். ஆடியோவை இயக்க Space ஐ அழுத்தவும்.",
    error: "சரிபார்ப்பு தோல்வி. பிறகு மீண்டும் முயற்சிக்கவும்.",
    expired: "சரிபார்ப்பு காலாவதியானது. மீண்டும் முயற்சிக்கவும்.",
    footer: 'மூலமாக பாதுகாக்கப்பட்டவை <a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (அதிகாரப்பூர்வ வலைத்தளம்)">ALTCHA</a>',
    getAudioChallenge: "ஒலி சவாலை பெறவும்",
    label: "நான் ரோபோடான அல்ல",
    loading: "செயலாக்கம்...",
    reload: "மீண்டும் புதுப்பிக்கவும்",
    verify: "சரிபார்க்கவும்",
    verificationRequired: "சரிபார்ப்பு தேவை!",
    verified: "சரிபார்க்கப்பட்டது",
    verifying: "சரிபார்க்கப்படுகிறது...",
    waitAlert: "சரிபார்க்கப்படுகிறது... தயவுசெய்து காத்திருக்கவும்.",
    cancel: "ரத்துசெய்",
    enterCodeFromImage: "தொடர, கீழே உள்ள படத்திலிருந்து குறியீட்டை உள்ளிடவும்."
  };
  if ("$altcha" in globalThis) {
    globalThis.$altcha.i18n.set("ta", i18n);
  }
}));
