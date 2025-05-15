const l = () => {
};
function h(t, i) {
  return t != t ? i == i : t !== i || t !== null && typeof t == "object" || typeof t == "function";
}
let c = !1;
function k(t) {
  var i = c;
  try {
    return c = !0, t();
  } finally {
    c = i;
  }
}
function d(t, i, a) {
  if (t == null)
    return i(void 0), l;
  const n = k(
    () => t.subscribe(
      i,
      // @ts-expect-error
      a
    )
  );
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const s = [];
function p(t, i = l) {
  let a = null;
  const n = /* @__PURE__ */ new Set();
  function o(r) {
    if (h(t, r) && (t = r, a)) {
      const u = !s.length;
      for (const e of n)
        e[1](), s.push(e, t);
      if (u) {
        for (let e = 0; e < s.length; e += 2)
          s[e][0](s[e + 1]);
        s.length = 0;
      }
    }
  }
  function g(r) {
    o(r(
      /** @type {T} */
      t
    ));
  }
  function f(r, u = l) {
    const e = [r, u];
    return n.add(e), n.size === 1 && (a = i(o, g) || l), r(
      /** @type {T} */
      t
    ), () => {
      n.delete(e), n.size === 0 && a && (a(), a = null);
    };
  }
  return { set: o, update: g, subscribe: f };
}
function b(t) {
  let i;
  return d(t, (a) => i = a)(), i;
}
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (t) => b(globalThis.altchaI18n.store)[t],
  set: (t, i) => {
    Object.assign(b(globalThis.altchaI18n.store), {
      [t]: i
    }), globalThis.altchaI18n.store.set(b(globalThis.altchaI18n.store));
  },
  store: p({})
};
const v = {
  ariaLinkLabel: "Apsilankykite Altcha.org",
  enterCode: "Įveskite kodą",
  enterCodeAria: "Įveskite girdimą kodą. Paspauskite tarpo klavišą, kad grotumėte garso įrašą.",
  error: "Patvirtinimas nepavyko. Bandykite vėliau.",
  expired: "Patvirtinimo laikas baigėsi. Bandykite dar kartą.",
  verificationRequired: "Reikalingas patvirtinimas!",
  footer: 'Apsaugota <a href="https://altcha.org/" target="_blank" aria-label="Apsilankykite Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Gauti garso užduotį",
  label: "Aš nesu robotas",
  loading: "Įkeliama...",
  reload: "Įkelti iš naujo",
  verify: "Patvirtinti",
  verified: "Patvirtinta",
  verifying: "Tikrinama...",
  waitAlert: "Tikrinama... prašome palaukti."
};
globalThis.altchaI18n.set("lt", v);
export {
  v as i18n
};
