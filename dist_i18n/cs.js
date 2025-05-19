const l = () => {
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
function v(e, t, o) {
  if (e == null)
    return t(void 0), l;
  const r = d(
    () => e.subscribe(
      t,
      // @ts-expect-error
      o
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const i = [];
function p(e, t = l) {
  let o = null;
  const r = /* @__PURE__ */ new Set();
  function a(s) {
    if (g(e, s) && (e = s, o)) {
      const u = !i.length;
      for (const n of r)
        n[1](), i.push(n, e);
      if (u) {
        for (let n = 0; n < i.length; n += 2)
          i[n][0](i[n + 1]);
        i.length = 0;
      }
    }
  }
  function h(s) {
    a(s(
      /** @type {T} */
      e
    ));
  }
  function f(s, u = l) {
    const n = [s, u];
    return r.add(n), r.size === 1 && (o = t(a, h) || l), s(
      /** @type {T} */
      e
    ), () => {
      r.delete(n), r.size === 0 && o && (o(), o = null);
    };
  }
  return { set: a, update: h, subscribe: f };
}
function b(e) {
  let t;
  return v(e, (o) => t = o)(), t;
}
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (e) => b(globalThis.altchaI18n.store)[e],
  set: (e, t) => {
    Object.assign(b(globalThis.altchaI18n.store), {
      [e]: t
    }), globalThis.altchaI18n.store.set(b(globalThis.altchaI18n.store));
  },
  store: p({})
};
const k = {
  ariaLinkLabel: "Navštivte Altcha.org",
  enterCode: "Zadejte kód",
  enterCodeAria: "Zadejte kód, který slyšíte. Stisknutím mezerníku přehrajete zvuk.",
  error: "Ověření selhalo. Zkuste to prosím později.",
  expired: "Ověření vypršelo. Zkuste to prosím znovu.",
  verificationRequired: "Vyžaduje se ověření!",
  footer: 'Chráněno pomocí <a href="https://altcha.org/" target="_blank" aria-label="Navštivte Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Získat audio výzvu",
  label: "Nejsem robot",
  loading: "Načítání...",
  reload: "Znovu načíst",
  verify: "Ověřit",
  verified: "Ověřeno",
  verifying: "Ověřování...",
  waitAlert: "Probíhá ověření... prosím počkejte."
};
globalThis.altchaI18n.set("cs", k);
export {
  k as i18n
};
