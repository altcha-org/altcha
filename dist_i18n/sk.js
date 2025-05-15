const s = () => {
};
function g(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
let c = !1;
function k(e) {
  var t = c;
  try {
    return c = !0, e();
  } finally {
    c = t;
  }
}
function d(e, t, r) {
  if (e == null)
    return t(void 0), s;
  const a = k(
    () => e.subscribe(
      t,
      // @ts-expect-error
      r
    )
  );
  return a.unsubscribe ? () => a.unsubscribe() : a;
}
const o = [];
function v(e, t = s) {
  let r = null;
  const a = /* @__PURE__ */ new Set();
  function l(n) {
    if (g(e, n) && (e = n, r)) {
      const u = !o.length;
      for (const i of a)
        i[1](), o.push(i, e);
      if (u) {
        for (let i = 0; i < o.length; i += 2)
          o[i][0](o[i + 1]);
        o.length = 0;
      }
    }
  }
  function f(n) {
    l(n(
      /** @type {T} */
      e
    ));
  }
  function h(n, u = s) {
    const i = [n, u];
    return a.add(i), a.size === 1 && (r = t(l, f) || s), n(
      /** @type {T} */
      e
    ), () => {
      a.delete(i), a.size === 0 && r && (r(), r = null);
    };
  }
  return { set: l, update: f, subscribe: h };
}
function b(e) {
  let t;
  return d(e, (r) => t = r)(), t;
}
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (e) => b(globalThis.altchaI18n.store)[e],
  set: (e, t) => {
    Object.assign(b(globalThis.altchaI18n.store), {
      [e]: t
    }), globalThis.altchaI18n.store.set(b(globalThis.altchaI18n.store));
  },
  store: v({})
};
const p = {
  ariaLinkLabel: "Navštívte Altcha.org",
  enterCode: "Zadajte kód",
  enterCodeAria: "Zadajte kód, ktorý počujete. Stlačením medzerníka prehráte zvuk.",
  error: "Verifikácia zlyhala. Skúste to znova neskôr.",
  expired: "Verifikácia vypršala. Skúste to znova.",
  verificationRequired: "Vyžaduje sa overenie!",
  footer: 'Chránené <a href="https://altcha.org/" target="_blank" aria-label="Navštívte Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Získať audio výzvu",
  label: "Nie som robot",
  loading: "Načítava sa...",
  reload: "Obnoviť",
  verify: "Verifikovať",
  verified: "Verifikované",
  verifying: "Prebieha verifikácia...",
  waitAlert: "Prebieha verifikácia... prosím čakajte."
};
globalThis.altchaI18n.set("sk", p);
export {
  p as i18n
};
