const o = () => {
};
function f(e, t) {
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
function k(e, t, r) {
  if (e == null)
    return t(void 0), o;
  const a = d(
    () => e.subscribe(
      t,
      // @ts-expect-error
      r
    )
  );
  return a.unsubscribe ? () => a.unsubscribe() : a;
}
const s = [];
function z(e, t = o) {
  let r = null;
  const a = /* @__PURE__ */ new Set();
  function i(n) {
    if (f(e, n) && (e = n, r)) {
      const u = !s.length;
      for (const l of a)
        l[1](), s.push(l, e);
      if (u) {
        for (let l = 0; l < s.length; l += 2)
          s[l][0](s[l + 1]);
        s.length = 0;
      }
    }
  }
  function g(n) {
    i(n(
      /** @type {T} */
      e
    ));
  }
  function h(n, u = o) {
    const l = [n, u];
    return a.add(l), a.size === 1 && (r = t(i, g) || o), n(
      /** @type {T} */
      e
    ), () => {
      a.delete(l), a.size === 0 && r && (r(), r = null);
    };
  }
  return { set: i, update: g, subscribe: h };
}
function b(e) {
  let t;
  return k(e, (r) => t = r)(), t;
}
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (e) => b(globalThis.altchaI18n.store)[e],
  set: (e, t) => {
    Object.assign(b(globalThis.altchaI18n.store), {
      [e]: t
    }), globalThis.altchaI18n.store.set(b(globalThis.altchaI18n.store));
  },
  store: z({})
};
const j = {
  ariaLinkLabel: "Látogass el az Altcha.org oldalra",
  enterCode: "Írja be a kódot",
  enterCodeAria: "Írja be a hallott kódot. Nyomja meg a Szóköz billentyűt a hang lejátszásához.",
  error: "A hitelesítés nem sikerült. Próbáld meg később újra.",
  expired: "A hitelesítés lejárt. Próbáld újra.",
  verificationRequired: "Ellenőrzés szükséges!",
  footer: 'Védve a következő által: <a href="https://altcha.org/" target="_blank" aria-label="Látogass el az Altcha.org oldalra">ALTCHA</a>',
  getAudioChallenge: "Hangalapú kihívás kérése",
  label: "Nem vagyok robot",
  loading: "Betöltés...",
  reload: "Újratöltés",
  verify: "Ellenőrzés",
  verified: "Ellenőrizve",
  verifying: "Ellenőrzés folyamatban...",
  waitAlert: "Ellenőrzés folyamatban... kérlek várj."
};
globalThis.altchaI18n.set("hu", j);
export {
  j as i18n
};
