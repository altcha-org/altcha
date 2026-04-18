(function(factory) {
  typeof define === "function" && define.amd ? define(factory) : factory();
})((function() {
  "use strict";
  const i18n$6 = {
    ariaLinkLabel: "Altcha (amptelike webwerf)",
    enterCode: "Voer kode in",
    enterCodeAria: "Voer die kode in wat jy hoor. Druk Spasie om die klank af te speel.",
    error: "Verifikasie het misluk. Probeer later weer.",
    expired: "Verifikasie het verval. Probeer weer.",
    footer: 'Beskerm deur <a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (amptelike webwerf)">ALTCHA</a>',
    getAudioChallenge: "Kry 'n klankuitdaging",
    label: "Ek is nie 'n robot nie",
    loading: "Laai...",
    reload: "Laai weer",
    verify: "Verifieer",
    verificationRequired: "Verifikasie is vereis!",
    verified: "Geverifieer",
    verifying: "Verifieer...",
    waitAlert: "Verifieer... wag asseblief.",
    cancel: "Kanselleer",
    enterCodeFromImage: "Om voort te gaan, voer asseblief die kode vanaf die onderstaande prentjie in."
  };
  if ("$altcha" in globalThis) {
    globalThis.$altcha.i18n.set("af", i18n$6);
  }
  const i18n$5 = {
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
    globalThis.$altcha.i18n.set("am", i18n$5);
  }
  const i18n$4 = {
    ariaLinkLabel: "Altcha (الموقع الرسمي)",
    enterCode: "أدخل الرمز",
    enterCodeAria: "أدخل الرمز الذي تسمعه. اضغط على المسافة لتشغيل الصوت.",
    error: "فشل التحقق. حاول مرة أخرى لاحقاً.",
    expired: "انتهت صلاحية التحقق. حاول مرة أخرى.",
    footer: 'محمي بواسطة <a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (الموقع الرسمي)">ALTCHA</a>',
    getAudioChallenge: "احصل على تحدي صوتي",
    label: "أنا لست روبوتاً",
    loading: "جارٍ التحميل...",
    reload: "إعادة تحميل",
    verify: "تحقق",
    verificationRequired: "مطلوب التحقق!",
    verified: "تم التحقق",
    verifying: "جارٍ التحقق...",
    waitAlert: "جارٍ التحقق... يرجى الانتظار.",
    cancel: "إلغاء",
    enterCodeFromImage: "للمتابعة، يرجى إدخال الرمز من الصورة أدناه."
  };
  if ("$altcha" in globalThis) {
    globalThis.$altcha.i18n.set("ar", i18n$4);
  }
  const i18n$3 = {
    ariaLinkLabel: "Altcha (site officiel)",
    enterCode: "Entrez le code",
    enterCodeAria: "Entrez le code que vous entendez. Appuyez sur Espace pour écouter l'audio.",
    error: "Échec de la vérification. Essayez à nouveau plus tard.",
    expired: "La vérification a expiré. Essayez à nouveau.",
    footer: 'Protégé par <a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (site officiel)">ALTCHA</a>',
    getAudioChallenge: "Obtenir un défi audio",
    label: "Je ne suis pas un robot",
    loading: "Chargement...",
    reload: "Recharger",
    verify: "Vérifier",
    verificationRequired: "Vérification requise !",
    verified: "Vérifié",
    verifying: "Vérification en cours...",
    waitAlert: "Vérification en cours... veuillez patienter.",
    cancel: "Annuler",
    enterCodeFromImage: "Pour continuer, veuillez entrer le code de l'image ci-dessous."
  };
  if ("$altcha" in globalThis) {
    globalThis.$altcha.i18n.set("fr-fr", i18n$3);
  }
  const i18n$2 = {
    ariaLinkLabel: "Altcha (site oficial)",
    enterCode: "Introduza o código",
    enterCodeAria: "Introduza o código que ouve. Prima Espaço para reproduzir o áudio.",
    error: "A verificação falhou. Por favor, tente novamente mais tarde.",
    expired: "Verificação expirada. Por favor, tente novamente.",
    footer: 'Protegido por <a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (site oficial)">ALTCHA</a>',
    getAudioChallenge: "Obter desafio de áudio",
    label: "Não sou um robô",
    loading: "A carregar...",
    reload: "Recarregar",
    verify: "Verificar",
    verificationRequired: "Verificação necessária!",
    verified: "Verificado",
    verifying: "A verificar...",
    waitAlert: "A verificar... por favor aguarde.",
    cancel: "Cancelar",
    enterCodeFromImage: "Para prosseguir, introduza o código da imagem abaixo."
  };
  if ("$altcha" in globalThis) {
    globalThis.$altcha.i18n.set("pt-pt", i18n$2);
  }
  const i18n$1 = {
    ariaLinkLabel: "Altcha (tovuti rasmi)",
    enterCode: "Weka nambari",
    enterCodeAria: "Weka nambari unayosikia. Bonyeza Space kucheza sauti.",
    error: "Uthibitishaji umeshindwa. Jaribu tena baadaye.",
    expired: "Uthibitishaji umeisha. Jaribu tena.",
    footer: 'Imealindwa na <a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (tovuti rasmi)">ALTCHA</a>',
    getAudioChallenge: "Pata changamoto ya sauti",
    label: "Mimi sio roboti",
    loading: "Inapakia...",
    reload: "Pakia tena",
    verify: "Thibitisha",
    verificationRequired: "Uthibitishaji unahitajika!",
    verified: "Imethibitishwa",
    verifying: "Inathibitisha...",
    waitAlert: "Inathibitisha... tafadhali subiri.",
    cancel: "Ghairi",
    enterCodeFromImage: "Ili kuendelea, tafadhali weka nambari kutoka kwa picha hapa chini."
  };
  if ("$altcha" in globalThis) {
    globalThis.$altcha.i18n.set("sw", i18n$1);
  }
  const i18n = {
    ariaLinkLabel: "Altcha (oju opo wẹẹbu osise)",
    enterCode: "Tẹ koodu sii",
    enterCodeAria: "Tẹ koodu ti o ngbọ sii. Tẹ Space lati ṣe ohun orin.",
    error: "Ìdájọ́kòwò kò ṣẹ́ṣe. Gbiyanju lẹẹkansi ni ọjọ́ iwájú.",
    expired: "Ìdájọ́kòwò ti pari. Gbiyanju lẹẹkansi.",
    footer: 'Ti wa ni ààbò nipasẹ <a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (oju opo wẹẹbu osise)">ALTCHA</a>',
    getAudioChallenge: "Gba ìjàdú ohùn",
    label: "Emi kii ṣe ẹrọ",
    loading: "Ó ń gbé sílẹ̀...",
    reload: "Tún gbé wọlé",
    verify: "Ṣàdájọ́",
    verificationRequired: "Ìdájọ́kòwò ni a nílò!",
    verified: "A ti dájọ́",
    verifying: "Ó ń ṣàdájọ́...",
    waitAlert: "Ó ń ṣàdájọ́... ẹ jọ̀ọ́ ẹ duro.",
    cancel: "Fagbọsẹ",
    enterCodeFromImage: "Lati tẹsiwaju, jọwọ tẹ koodu ti o wa lati aworan isalẹ sii."
  };
  if ("$altcha" in globalThis) {
    globalThis.$altcha.i18n.set("yo", i18n);
  }
}));
