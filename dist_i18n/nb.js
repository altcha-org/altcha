const o = () => {
};
function d(e, t) {
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
function p(e, t, n) {
  if (e == null)
    return t(void 0), o;
  const i = k(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return i.unsubscribe ? () => i.unsubscribe() : i;
}
const l = [];
function y(e, t = o) {
  let n = null;
  const i = /* @__PURE__ */ new Set();
  function a(s) {
    if (d(e, s) && (e = s, n)) {
      const u = !l.length;
      for (const r of i)
        r[1](), l.push(r, e);
      if (u) {
        for (let r = 0; r < l.length; r += 2)
          l[r][0](l[r + 1]);
        l.length = 0;
      }
    }
  }
  function b(s) {
    a(s(
      /** @type {T} */
      e
    ));
  }
  function h(s, u = o) {
    const r = [s, u];
    return i.add(r), i.size === 1 && (n = t(a, b) || o), s(
      /** @type {T} */
      e
    ), () => {
      i.delete(r), i.size === 0 && n && (n(), n = null);
    };
  }
  return { set: a, update: b, subscribe: h };
}
function f(e) {
  let t;
  return p(e, (n) => t = n)(), t;
}
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (e) => f(globalThis.altchaI18n.store)[e],
  set: (e, t) => {
    Object.assign(f(globalThis.altchaI18n.store), {
      [e]: t
    }), globalThis.altchaI18n.store.set(f(globalThis.altchaI18n.store));
  },
  store: y({})
};
const g = {
  ariaLinkLabel: "Besøk Altcha.org",
  enterCode: "Skriv inn kode",
  enterCodeAria: "Skriv inn koden du hører. Trykk på Space for å spille av lyden.",
  error: "Verifisering mislyktes. Prøv igjen senere.",
  expired: "Verifiseringen utløp. Prøv igjen.",
  footer: 'Beskyttet av <a href="https://altcha.org/" target="_blank" aria-label="Besøk Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Få en lydutfordring",
  label: "Jeg er ikke en robot",
  loading: "Laster...",
  reload: "Last på nytt",
  verify: "Verifiser",
  verificationRequired: "Verifisering kreves!",
  verified: "Verifisert",
  verifying: "Verifiserer...",
  waitAlert: "Verifiserer... vennligst vent."
};
globalThis.altchaI18n.set("nb", g);
globalThis.altchaI18n.set("no", g);
export {
  g as i18n
};
