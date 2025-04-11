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
function p(e, t, i) {
  if (e == null)
    return t(void 0), s;
  const n = d(
    () => e.subscribe(
      t,
      // @ts-expect-error
      i
    )
  );
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const o = [];
function z(e, t = s) {
  let i = null;
  const n = /* @__PURE__ */ new Set();
  function l(a) {
    if (g(e, a) && (e = a, i)) {
      const u = !o.length;
      for (const r of n)
        r[1](), o.push(r, e);
      if (u) {
        for (let r = 0; r < o.length; r += 2)
          o[r][0](o[r + 1]);
        o.length = 0;
      }
    }
  }
  function b(a) {
    l(a(
      /** @type {T} */
      e
    ));
  }
  function h(a, u = s) {
    const r = [a, u];
    return n.add(r), n.size === 1 && (i = t(l, b) || s), a(
      /** @type {T} */
      e
    ), () => {
      n.delete(r), n.size === 0 && i && (i(), i = null);
    };
  }
  return { set: l, update: b, subscribe: h };
}
function f(e) {
  let t;
  return p(e, (i) => t = i)(), t;
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
  enterCodeAria: "Entrez le code que vous entendez. Appuyez sur la barre d'espace pour écouter l'audio.",
  error: "Échec de la vérification. Réessayez plus tard.",
  expired: "La vérification a expiré. Réessayez.",
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
globalThis.altchaI18n.set("fr-ca", T);
export {
  T as i18n
};
