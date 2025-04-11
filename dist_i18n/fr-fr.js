const s = () => {
};
function g(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
let c = !1;
function d(e) {
  var t = c;
  try {
    return c = !0, e();
  } finally {
    c = t;
  }
}
function p(e, t, r) {
  if (e == null)
    return t(void 0), s;
  const n = d(
    () => e.subscribe(
      t,
      // @ts-expect-error
      r
    )
  );
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const a = [];
function z(e, t = s) {
  let r = null;
  const n = /* @__PURE__ */ new Set();
  function l(o) {
    if (g(e, o) && (e = o, r)) {
      const u = !a.length;
      for (const i of n)
        i[1](), a.push(i, e);
      if (u) {
        for (let i = 0; i < a.length; i += 2)
          a[i][0](a[i + 1]);
        a.length = 0;
      }
    }
  }
  function b(o) {
    l(o(
      /** @type {T} */
      e
    ));
  }
  function h(o, u = s) {
    const i = [o, u];
    return n.add(i), n.size === 1 && (r = t(l, b) || s), o(
      /** @type {T} */
      e
    ), () => {
      n.delete(i), n.size === 0 && r && (r(), r = null);
    };
  }
  return { set: l, update: b, subscribe: h };
}
function f(e) {
  let t;
  return p(e, (r) => t = r)(), t;
}
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (e) => f(globalThis.altchaI18n.store)[e],
  set: (e, t) => {
    Object.assign(f(globalThis.altchaI18n.store), {
      [e]: t
    }), globalThis.altchaI18n.store.set(f(globalThis.altchaI18n.store));
  },
  store: z({})
};
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
export {
  T as i18n
};
