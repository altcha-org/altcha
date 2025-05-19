const o = () => {
};
function d(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
let u = !1;
function h(e) {
  var t = u;
  try {
    return u = !0, e();
  } finally {
    u = t;
  }
}
function k(e, t, n) {
  if (e == null)
    return t(void 0), o;
  const i = h(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return i.unsubscribe ? () => i.unsubscribe() : i;
}
const l = [];
function p(e, t = o) {
  let n = null;
  const i = /* @__PURE__ */ new Set();
  function a(s) {
    if (d(e, s) && (e = s, n)) {
      const c = !l.length;
      for (const r of i)
        r[1](), l.push(r, e);
      if (c) {
        for (let r = 0; r < l.length; r += 2)
          l[r][0](l[r + 1]);
        l.length = 0;
      }
    }
  }
  function g(s) {
    a(s(
      /** @type {T} */
      e
    ));
  }
  function b(s, c = o) {
    const r = [s, c];
    return i.add(r), i.size === 1 && (n = t(a, g) || o), s(
      /** @type {T} */
      e
    ), () => {
      i.delete(r), i.size === 0 && n && (n(), n = null);
    };
  }
  return { set: a, update: g, subscribe: b };
}
function f(e) {
  let t;
  return k(e, (n) => t = n)(), t;
}
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (e) => f(globalThis.altchaI18n.store)[e],
  set: (e, t) => {
    Object.assign(f(globalThis.altchaI18n.store), {
      [e]: t
    }), globalThis.altchaI18n.store.set(f(globalThis.altchaI18n.store));
  },
  store: p({})
};
const y = {
  ariaLinkLabel: "Besøg Altcha.org",
  enterCode: "Indtast kode",
  enterCodeAria: "Indtast den kode, du hører. Tryk på mellemrumstasten for at afspille lyd.",
  error: "Verificering mislykkedes. Prøv venligst igen senere.",
  expired: "Verificering udløbet. Prøv venligst igen.",
  verificationRequired: "Verificering kræves!",
  footer: 'Beskyttet af <a href="https://altcha.org/" target="_blank" aria-label="Besøg Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Hent lydudfordring",
  label: "Jeg er ikke en robot",
  loading: "Indlæser...",
  reload: "Genindlæs",
  verify: "Verificer",
  verified: "Verificeret",
  verifying: "Verificerer...",
  waitAlert: "Verificerer... vent venligst."
};
globalThis.altchaI18n.set("da", y);
export {
  y as i18n
};
