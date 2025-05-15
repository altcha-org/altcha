const o = () => {
};
function g(e, i) {
  return e != e ? i == i : e !== i || e !== null && typeof e == "object" || typeof e == "function";
}
let c = !1;
function d(e) {
  var i = c;
  try {
    return c = !0, e();
  } finally {
    c = i;
  }
}
function k(e, i, t) {
  if (e == null)
    return i(void 0), o;
  const n = d(
    () => e.subscribe(
      i,
      // @ts-expect-error
      t
    )
  );
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const a = [];
function p(e, i = o) {
  let t = null;
  const n = /* @__PURE__ */ new Set();
  function l(s) {
    if (g(e, s) && (e = s, t)) {
      const u = !a.length;
      for (const r of n)
        r[1](), a.push(r, e);
      if (u) {
        for (let r = 0; r < a.length; r += 2)
          a[r][0](a[r + 1]);
        a.length = 0;
      }
    }
  }
  function b(s) {
    l(s(
      /** @type {T} */
      e
    ));
  }
  function h(s, u = o) {
    const r = [s, u];
    return n.add(r), n.size === 1 && (t = i(l, b) || o), s(
      /** @type {T} */
      e
    ), () => {
      n.delete(r), n.size === 0 && t && (t(), t = null);
    };
  }
  return { set: l, update: b, subscribe: h };
}
function f(e) {
  let i;
  return k(e, (t) => i = t)(), i;
}
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (e) => f(globalThis.altchaI18n.store)[e],
  set: (e, i) => {
    Object.assign(f(globalThis.altchaI18n.store), {
      [e]: i
    }), globalThis.altchaI18n.store.set(f(globalThis.altchaI18n.store));
  },
  store: p({})
};
const T = {
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
globalThis.altchaI18n.set("af", T);
export {
  T as i18n
};
