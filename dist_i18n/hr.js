const s = () => {
};
function j(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
let c = !1;
function g(e) {
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
  const n = g(
    () => e.subscribe(
      t,
      // @ts-expect-error
      r
    )
  );
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const a = [];
function p(e, t = s) {
  let r = null;
  const n = /* @__PURE__ */ new Set();
  function l(i) {
    if (j(e, i) && (e = i, r)) {
      const u = !a.length;
      for (const o of n)
        o[1](), a.push(o, e);
      if (u) {
        for (let o = 0; o < a.length; o += 2)
          a[o][0](a[o + 1]);
        a.length = 0;
      }
    }
  }
  function f(i) {
    l(i(
      /** @type {T} */
      e
    ));
  }
  function h(i, u = s) {
    const o = [i, u];
    return n.add(o), n.size === 1 && (r = t(l, f) || s), i(
      /** @type {T} */
      e
    ), () => {
      n.delete(o), n.size === 0 && r && (r(), r = null);
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
  store: p({})
};
const k = {
  ariaLinkLabel: "Posjetite Altcha.org",
  enterCode: "Unesite kod",
  enterCodeAria: "Unesite kod koji čujete. Pritisnite razmaknicu za reprodukciju zvuka.",
  error: "Provjera nije uspjela. Molimo pokušajte kasnije.",
  expired: "Provjera je istekla. Molimo pokušajte ponovo.",
  verificationRequired: "Potrebna je provjera!",
  footer: 'Zaštićeno od strane <a href="https://altcha.org/" target="_blank" aria-label="Posjetite Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Audio provjera",
  label: "Ja nisam robot",
  loading: "Učitavanje...",
  reload: "Ponovno učitaj",
  verify: "Provjeri",
  verified: "Provjereno",
  verifying: "Provjeravanje...",
  waitAlert: "Provjera je u tijeku... molimo pričekajte."
};
globalThis.altchaI18n.set("hr", k);
export {
  k as i18n
};
