const s = () => {
};
function g(t, a) {
  return t != t ? a == a : t !== a || t !== null && typeof t == "object" || typeof t == "function";
}
let u = !1;
function d(t) {
  var a = u;
  try {
    return u = !0, t();
  } finally {
    u = a;
  }
}
function T(t, a, i) {
  if (t == null)
    return a(void 0), s;
  const n = d(
    () => t.subscribe(
      a,
      // @ts-expect-error
      i
    )
  );
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const l = [];
function p(t, a = s) {
  let i = null;
  const n = /* @__PURE__ */ new Set();
  function o(r) {
    if (g(t, r) && (t = r, i)) {
      const c = !l.length;
      for (const e of n)
        e[1](), l.push(e, t);
      if (c) {
        for (let e = 0; e < l.length; e += 2)
          l[e][0](l[e + 1]);
        l.length = 0;
      }
    }
  }
  function b(r) {
    o(r(
      /** @type {T} */
      t
    ));
  }
  function f(r, c = s) {
    const e = [r, c];
    return n.add(e), n.size === 1 && (i = a(o, b) || s), r(
      /** @type {T} */
      t
    ), () => {
      n.delete(e), n.size === 0 && i && (i(), i = null);
    };
  }
  return { set: o, update: b, subscribe: f };
}
function h(t) {
  let a;
  return T(t, (i) => a = i)(), a;
}
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (t) => h(globalThis.altchaI18n.store)[t],
  set: (t, a) => {
    Object.assign(h(globalThis.altchaI18n.store), {
      [t]: a
    }), globalThis.altchaI18n.store.set(h(globalThis.altchaI18n.store));
  },
  store: p({})
};
const A = {
  ariaLinkLabel: "Tabhair cuairt ar Altcha.org",
  enterCode: "Iontráil cód",
  enterCodeAria: "Cuir isteach an cód a chloiseann tú. Brúigh Spás chun an fuaime a sheinm.",
  error: "Theip ar an bhfíorú. Bain triail eile as níos déanaí.",
  expired: "Tá an fíorú as feidhm. Bain triail eile as.",
  verificationRequired: "Fíorú riachtanach!",
  footer: 'Cosanta ag <a href="https://altcha.org/" target="_blank" aria-label="Tabhair cuairt ar Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Faigh dúshlán fuaime",
  label: "Níl mé i mo róbat",
  loading: "Á luchtú...",
  reload: "Athluchtaigh",
  verify: "Fíoraigh",
  verified: "Fíoraithe",
  verifying: "Fíorú ar siúl...",
  waitAlert: "Fíorú ar siúl... fan go fóill."
};
globalThis.altchaI18n.set("ga", A);
export {
  A as i18n
};
