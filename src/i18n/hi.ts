import '../globals';

export const i18n = {
  ariaLinkLabel: 'Altcha.org पर जाएं',
  enterCode: 'कोड दर्ज करेंं',
  enterCodeAria:
    'आप जो कोड सुनते हैं उसे दर्ज करें। ऑडियो चलाने के लिए स्पेस दबाएं।',
  error: 'सत्यापन विफल। कृपया बाद में फिर से प्रयास करें।',
  expired: 'सत्यापन समाप्त हो गया है। कृपया पुनः प्रयास करें।',
  verificationRequired: 'सत्यापन आवश्यक है!',
  footer:
    'द्वारा संरक्षित <a href="https://altcha.org/" target="_blank" aria-label="Altcha.org पर जाएं">ALTCHA</a>',
  getAudioChallenge: 'ऑडियो चुनौती प्राप्त करें',
  label: 'मैं रोबोट नहीं हूँ',
  loading: 'लोड हो रहा है...',
  reload: 'पुनः लोड करें',
  verify: 'सत्यापित करें',
  verified: 'सत्यापित',
  verifying: 'सत्यापित कर रहे हैं...',
  waitAlert: 'सत्यापित किया जा रहा है... कृपया प्रतीक्षा करें।',
};

globalThis.altchaI18n.set('hi', i18n);
