const s = () => {
};
function g(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
let c = !1;
function j(e) {
  var t = c;
  try {
    return c = !0, e();
  } finally {
    c = t;
  }
}
function k(e, t, n) {
  if (e == null)
    return t(void 0), s;
  const o = j(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return o.unsubscribe ? () => o.unsubscribe() : o;
}
const r = [];
function d(e, t = s) {
  let n = null;
  const o = /* @__PURE__ */ new Set();
  function l(a) {
    if (g(e, a) && (e = a, n)) {
      const u = !r.length;
      for (const i of o)
        i[1](), r.push(i, e);
      if (u) {
        for (let i = 0; i < r.length; i += 2)
          r[i][0](r[i + 1]);
        r.length = 0;
      }
    }
  }
  function b(a) {
    l(a(
      /** @type {T} */
      e
    ));
  }
  function h(a, u = s) {
    const i = [a, u];
    return o.add(i), o.size === 1 && (n = t(l, b) || s), a(
      /** @type {T} */
      e
    ), () => {
      o.delete(i), o.size === 0 && n && (n(), n = null);
    };
  }
  return { set: l, update: b, subscribe: h };
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
  store: d({})
};
const p = {
  ariaLinkLabel: "Posjetite Altcha.org",
  enterCode: "Unesite kod",
  enterCodeAria: "Unesite kod koji čujete. Pritisnite Space za puštanje zvuka.",
  error: "Verifikacija nije uspjela. Pokušajte ponovo kasnije.",
  expired: "Verifikacija je istekla. Pokušajte ponovo.",
  footer: 'Zaštićeno putem <a href="https://altcha.org/" target="_blank" aria-label="Posjetite Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Preuzmi audio izazov",
  label: "Nijesam robot",
  loading: "Učitavanje...",
  reload: "Ponovo učitaj",
  verify: "Verifikuj",
  verificationRequired: "Potrebna je verifikacija!",
  verified: "Verifikovano",
  verifying: "Verifikacija u toku...",
  waitAlert: "Verifikujem... molimo sačekajte."
};
globalThis.altchaI18n.set("me", p);
export {
  p as i18n
};
