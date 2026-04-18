const i18n = {
  ariaLinkLabel: "Altcha (επίσημος ιστότοπος)",
  enterCode: "Εισαγάγετε κωδικό",
  enterCodeAria: "Εισαγάγετε τον κωδικό που ακούτε. Πατήστε Space για να παίξετε τον ήχο.",
  error: "Η επαλήθευση απέτυχε. Δοκιμάστε ξανά αργότερα.",
  expired: "Η επαλήθευση έληξε. Δοκιμάστε ξανά.",
  footer: 'Προστατεύεται από το <a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (επίσημος ιστότοπος)">ALTCHA</a>',
  getAudioChallenge: "Λήψη ηχητικής δοκιμασίας",
  label: "Δεν είμαι ρομπότ",
  loading: "Φόρτωση...",
  reload: "Επαναφόρτωση",
  verify: "Επαλήθευση",
  verificationRequired: "Απαιτείται έλεγχος!",
  verified: "Επαληθεύτηκε",
  verifying: "Γίνεται επαλήθευση...",
  waitAlert: "Γίνεται επαλήθευση... παρακαλώ περιμένετε.",
  cancel: "Ακύρωση",
  enterCodeFromImage: "Για να συνεχίσετε, εισάγετε τον κωδικό από την παρακάτω εικόνα."
};
if ("$altcha" in globalThis) {
  globalThis.$altcha.i18n.set("el", i18n);
}
