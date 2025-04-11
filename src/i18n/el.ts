import '../globals';

export const i18n = {
  ariaLinkLabel: 'Επισκεφθείτε το Altcha.org',
  enterCode: 'Εισαγάγετε κωδικό',
  enterCodeAria:
    'Εισαγάγετε τον κωδικό που ακούτε. Πατήστε Space για να παίξετε τον ήχο.',
  error: 'Η επαλήθευση απέτυχε. Δοκιμάστε ξανά αργότερα.',
  expired: 'Η επαλήθευση έληξε. Δοκιμάστε ξανά.',
  verificationRequired: 'Απαιτείται έλεγχος!',
  footer:
    'Προστατεύεται από το <a href="https://altcha.org/" target="_blank" aria-label="Επισκεφθείτε το Altcha.org">ALTCHA</a>',
  getAudioChallenge: 'Λήψη ηχητικής δοκιμασίας',
  label: 'Δεν είμαι ρομπότ',
  loading: 'Φόρτωση...',
  reload: 'Επαναφόρτωση',
  verify: 'Επαλήθευση',
  verified: 'Επαληθεύτηκε',
  verifying: 'Γίνεται επαλήθευση...',
  waitAlert: 'Γίνεται επαλήθευση... παρακαλώ περιμένετε.',
};

globalThis.altchaI18n.set('el', i18n);
