const l = () => {
};
function h(e, r) {
  return e != e ? r == r : e !== r || e !== null && typeof e == "object" || typeof e == "function";
}
let c = !1;
function d(e) {
  var r = c;
  try {
    return c = !0, e();
  } finally {
    c = r;
  }
}
function k(e, r, n) {
  if (e == null)
    return r(void 0), l;
  const i = d(
    () => e.subscribe(
      r,
      // @ts-expect-error
      n
    )
  );
  return i.unsubscribe ? () => i.unsubscribe() : i;
}
const s = [];
function p(e, r = l) {
  let n = null;
  const i = /* @__PURE__ */ new Set();
  function o(a) {
    if (h(e, a) && (e = a, n)) {
      const u = !s.length;
      for (const t of i)
        t[1](), s.push(t, e);
      if (u) {
        for (let t = 0; t < s.length; t += 2)
          s[t][0](s[t + 1]);
        s.length = 0;
      }
    }
  }
  function f(a) {
    o(a(
      /** @type {T} */
      e
    ));
  }
  function b(a, u = l) {
    const t = [a, u];
    return i.add(t), i.size === 1 && (n = r(o, f) || l), a(
      /** @type {T} */
      e
    ), () => {
      i.delete(t), i.size === 0 && n && (n(), n = null);
    };
  }
  return { set: o, update: f, subscribe: b };
}
function g(e) {
  let r;
  return k(e, (n) => r = n)(), r;
}
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (e) => g(globalThis.altchaI18n.store)[e],
  set: (e, r) => {
    Object.assign(g(globalThis.altchaI18n.store), {
      [e]: r
    }), globalThis.altchaI18n.store.set(g(globalThis.altchaI18n.store));
  },
  store: p({})
};
const T = {
  ariaLinkLabel: "Besök Altcha.org",
  enterCode: "Ange kod",
  enterCodeAria: "Ange koden du hör. Tryck på mellanslag för att spela upp ljudet.",
  error: "Verifiering misslyckades. Försök igen senare.",
  expired: "Verifieringen har gått ut. Försök igen.",
  verificationRequired: "Verifiering krävs!",
  footer: 'Skyddad av <a href="https://altcha.org/" target="_blank" aria-label="Besök Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Få ljudutmaning",
  label: "Jag är inte en robot",
  loading: "Laddar...",
  reload: "Ladda om",
  verify: "Verifiera",
  verified: "Verifierad",
  verifying: "Verifierar...",
  waitAlert: "Verifierar... vänligen vänta."
};
globalThis.altchaI18n.set("sv", T);
export {
  T as i18n
};
