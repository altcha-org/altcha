import '../globals';

export const i18n = {
  ariaLinkLabel: 'Visitez Altcha.org',
  enterCode: 'Entrez le code',
  enterCodeAria:
    "Entrez le code que vous entendez. Appuyez sur la barre d'espace pour écouter l'audio.",
  error: 'Échec de la vérification. Réessayez plus tard.',
  expired: 'La vérification a expiré. Réessayez.',
  verificationRequired: 'Vérification requise !',
  footer:
    'Protégé par <a href="https://altcha.org/" target="_blank" aria-label="Visitez Altcha.org">ALTCHA</a>',
  getAudioChallenge: 'Obtenir un défi audio',
  label: 'Pas un robot',
  loading: 'Chargement...',
  reload: 'Recharger',
  verify: 'Vérifier',
  verified: 'Vérifié',
  verifying: 'Vérification en cours...',
  waitAlert: 'Vérification en cours... veuillez patienter.',
};

globalThis.altchaI18n.set('fr-ca', i18n);
