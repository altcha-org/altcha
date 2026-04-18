const i18n = {
  ariaLinkLabel: "Altcha (अधिकृत संकेतस्थळ)",
  enterCode: "कोड टाकाा",
  enterCodeAria: "तुम्ही ऐकत असलेला कोड टाका. ऑडिओ प्ले करण्यासाठी स्पेस दाबा.",
  error: "पुष्टीकरण अयशस्वी झाले. कृपया नंतर पुन्हा प्रयत्न करा.",
  expired: "पुष्टीकरण कालबाह्य झाले आहे. कृपया पुन्हा प्रयत्न करा.",
  footer: 'द्वारे संरक्षित <a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (अधिकृत संकेतस्थळ)">ALTCHA</a>',
  getAudioChallenge: "ऑडिओ चॅलेंज मिळवा",
  label: "मी रोबोट नाही",
  loading: "लोड होत आहे...",
  reload: "पुन्हा लोड करा",
  verify: "पुष्टीकरण करा",
  verificationRequired: "पडताळणी आवश्यक आहे!",
  verified: "पुष्टीकरण झाले",
  verifying: "पुष्टीकरण करत आहे...",
  waitAlert: "पुष्टीकरण करत आहे... कृपया थोडा वेळ थांबा.",
  cancel: "रद्द करा",
  enterCodeFromImage: "पुढे जाण्यासाठी, कृपया खालील प्रतिमेतील कोड प्रविष्ट करा."
};
if ("$altcha" in globalThis) {
  globalThis.$altcha.i18n.set("mr", i18n);
}
