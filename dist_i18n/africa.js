const l = () => {
};
function g(e, i) {
  return e != e ? i == i : e !== i || e !== null && typeof e == "object" || typeof e == "function";
}
let u = !1;
function b(e) {
  var i = u;
  try {
    return u = !0, e();
  } finally {
    u = i;
  }
}
function A(e, i, r) {
  if (e == null)
    return i(void 0), l;
  const t = b(
    () => e.subscribe(
      i,
      // @ts-expect-error
      r
    )
  );
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
const n = [];
function k(e, i = l) {
  let r = null;
  const t = /* @__PURE__ */ new Set();
  function s(o) {
    if (g(e, o) && (e = o, r)) {
      const c = !n.length;
      for (const a of t)
        a[1](), n.push(a, e);
      if (c) {
        for (let a = 0; a < n.length; a += 2)
          n[a][0](n[a + 1]);
        n.length = 0;
      }
    }
  }
  function h(o) {
    s(o(
      /** @type {T} */
      e
    ));
  }
  function f(o, c = l) {
    const a = [o, c];
    return t.add(a), t.size === 1 && (r = i(s, h) || l), o(
      /** @type {T} */
      e
    ), () => {
      t.delete(a), t.size === 0 && r && (r(), r = null);
    };
  }
  return { set: s, update: h, subscribe: f };
}
function d(e) {
  let i;
  return A(e, (r) => i = r)(), i;
}
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (e) => d(globalThis.altchaI18n.store)[e],
  set: (e, i) => {
    Object.assign(d(globalThis.altchaI18n.store), {
      [e]: i
    }), globalThis.altchaI18n.store.set(d(globalThis.altchaI18n.store));
  },
  store: k({})
};
const p = {
  ariaLinkLabel: "Besoek Altcha.org",
  enterCode: "Voer kode in",
  enterCodeAria: "Voer die kode in wat jy hoor. Druk Spasie om die klank af te speel.",
  error: "Verifikasie het misluk. Probeer later weer.",
  expired: "Verifikasie het verval. Probeer weer.",
  footer: 'Beskerm deur <a href="https://altcha.org/" target="_blank" aria-label="Besoek Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Kry 'n klankuitdaging",
  label: "Ek is nie 'n robot nie",
  loading: "Laai...",
  reload: "Laai weer",
  verify: "Verifieer",
  verificationRequired: "Verifikasie is vereis!",
  verified: "Geverifieer",
  verifying: "Verifieer...",
  waitAlert: "Verifieer... wag asseblief."
};
globalThis.altchaI18n.set("af", p);
const v = {
  ariaLinkLabel: "Altcha.org ይጎብኙ",
  enterCode: "ኮድ አስገባ",
  enterCodeAria: "የሚሰማዎትን ኮድ ያስገቡ። ድምጽ ለመጫወት Space ን ይጫኑ።",
  error: "ማረጋገጫ አልተሳካም። በኋላ ላይ እንደገና ይሞክሩ።",
  expired: "ማረጋገጫው ጊዜው አልፏል። እንደገና ይሞክሩ።",
  footer: 'በ <a href="https://altcha.org/" target="_blank" aria-label="Altcha.org ይጎብኙ">ALTCHA</a> የተጠበቀ',
  getAudioChallenge: "የድምጽ ፈተና ያግኙ",
  label: "እኔ ሮቦት አይደለሁም",
  loading: "በመጫን ላይ...",
  reload: "እንደገና ጫን",
  verify: "አረጋግጥ",
  verificationRequired: "ማረጋገጫ ያስፈልጋል!",
  verified: "ተረጋግጧል",
  verifying: "በማረጋገጥ ላይ...",
  waitAlert: "በማረጋገጥ ላይ... እባክዎ ይጠብቁ።"
};
globalThis.altchaI18n.set("am", v);
const y = {
  ariaLinkLabel: "زور Altcha.org",
  enterCode: "أدخل الرمز",
  enterCodeAria: "أدخل الرمز الذي تسمعه. اضغط على المسافة لتشغيل الصوت.",
  error: "فشل التحقق. حاول مرة أخرى لاحقاً.",
  expired: "انتهت صلاحية التحقق. حاول مرة أخرى.",
  verificationRequired: "مطلوب التحقق!",
  footer: 'محمي بواسطة <a href="https://altcha.org/" target="_blank" aria-label="زور Altcha.org">ALTCHA</a>',
  getAudioChallenge: "احصل على تحدي صوتي",
  label: "أنا لست روبوتاً",
  loading: "جارٍ التحميل...",
  reload: "إعادة تحميل",
  verify: "تحقق",
  verified: "تم التحقق",
  verifying: "جارٍ التحقق...",
  waitAlert: "جارٍ التحقق... يرجى الانتظار."
};
globalThis.altchaI18n.set("ar", y);
const T = {
  ariaLinkLabel: "Visitez Altcha.org",
  enterCode: "Entrez le code",
  enterCodeAria: "Entrez le code que vous entendez. Appuyez sur Espace pour écouter l'audio.",
  error: "Échec de la vérification. Essayez à nouveau plus tard.",
  expired: "La vérification a expiré. Essayez à nouveau.",
  verificationRequired: "Vérification requise !",
  footer: 'Protégé par <a href="https://altcha.org/" target="_blank" aria-label="Visitez Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Obtenir un défi audio",
  label: "Pas un robot",
  loading: "Chargement...",
  reload: "Recharger",
  verify: "Vérifier",
  verified: "Vérifié",
  verifying: "Vérification en cours...",
  waitAlert: "Vérification en cours... veuillez patienter."
};
globalThis.altchaI18n.set("fr-fr", T);
const C = {
  ariaLinkLabel: "Visitar Altcha.org",
  enterCode: "Introduza o código",
  enterCodeAria: "Introduza o código que ouve. Prima Espaço para reproduzir o áudio.",
  error: "A verificação falhou. Por favor, tente novamente mais tarde.",
  expired: "Verificação expirada. Por favor, tente novamente.",
  verificationRequired: "Verificação necessária!",
  footer: 'Protegido por <a href="https://altcha.org/" target="_blank" aria-label="Visitar Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Obter desafio de áudio",
  label: "Não sou um robô",
  loading: "A carregar...",
  reload: "Recarregar",
  verify: "Verificar",
  verified: "Verificado",
  verifying: "A verificar...",
  waitAlert: "A verificar... por favor aguarde."
};
globalThis.altchaI18n.set("pt-pt", C);
const w = {
  ariaLinkLabel: "Tembelea Altcha.org",
  enterCode: "Weka nambari",
  enterCodeAria: "Weka nambari unayosikia. Bonyeza Space kucheza sauti.",
  error: "Uthibitishaji umeshindwa. Jaribu tena baadaye.",
  expired: "Uthibitishaji umeisha. Jaribu tena.",
  footer: 'Imealindwa na <a href="https://altcha.org/" target="_blank" aria-label="Tembelea Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Pata changamoto ya sauti",
  label: "Mimi sio roboti",
  loading: "Inapakia...",
  reload: "Pakia tena",
  verify: "Thibitisha",
  verificationRequired: "Uthibitishaji unahitajika!",
  verified: "Imethibitishwa",
  verifying: "Inathibitisha...",
  waitAlert: "Inathibitisha... tafadhali subiri."
};
globalThis.altchaI18n.set("sw", w);
const L = {
  ariaLinkLabel: "Ṣe abẹwo si Altcha.org",
  enterCode: "Tẹ koodu sii",
  enterCodeAria: "Tẹ koodu ti o ngbọ sii. Tẹ Space lati ṣe ohun orin.",
  error: "Ìdájọ́kòwò kò ṣẹ́ṣe. Gbiyanju lẹẹkansi ni ọjọ́ iwájú.",
  expired: "Ìdájọ́kòwò ti pari. Gbiyanju lẹẹkansi.",
  footer: 'Ti wa ni ààbò nipasẹ <a href="https://altcha.org/" target="_blank" aria-label="Ṣe abẹwo si Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Gba ìjàdú ohùn",
  label: "Emi kii ṣe ẹrọ",
  loading: "Ó ń gbé sílẹ̀...",
  reload: "Tún gbé wọlé",
  verify: "Ṣàdájọ́",
  verificationRequired: "Ìdájọ́kòwò ni a nílò!",
  verified: "A ti dájọ́",
  verifying: "Ó ń ṣàdájọ́...",
  waitAlert: "Ó ń ṣàdájọ́... ẹ jọ̀ọ́ ẹ duro."
};
globalThis.altchaI18n.set("yo", L);
