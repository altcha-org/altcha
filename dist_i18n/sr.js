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
function d(e, t, o) {
  if (e == null)
    return t(void 0), s;
  const n = k(
    () => e.subscribe(
      t,
      // @ts-expect-error
      o
    )
  );
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const r = [];
function j(e, t = s) {
  let o = null;
  const n = /* @__PURE__ */ new Set();
  function l(a) {
    if (g(e, a) && (e = a, o)) {
      const u = !r.length;
      for (const i of n)
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
    return n.add(i), n.size === 1 && (o = t(l, b) || s), a(
      /** @type {T} */
      e
    ), () => {
      n.delete(i), n.size === 0 && o && (o(), o = null);
    };
  }
  return { set: l, update: b, subscribe: h };
}
function f(e) {
  let t;
  return d(e, (o) => t = o)(), t;
}
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (e) => f(globalThis.altchaI18n.store)[e],
  set: (e, t) => {
    Object.assign(f(globalThis.altchaI18n.store), {
      [e]: t
    }), globalThis.altchaI18n.store.set(f(globalThis.altchaI18n.store));
  },
  store: j({})
};
const p = {
  ariaLinkLabel: "Posetite Altcha.org",
  enterCode: "Unesite kod",
  enterCodeAria: "Unesite kod koji čujete. Pritisnite Space da biste pustili zvuk.",
  error: "Verifikacija nije uspela. Pokušajte ponovo kasnije.",
  expired: "Verifikacija je istekla. Pokušajte ponovo.",
  footer: 'Zaštićeno od strane <a href="https://altcha.org/" target="_blank" aria-label="Posetite Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Dohvatite audio izazov",
  label: "Nisam robot",
  loading: "Učitavanje...",
  reload: "Ponovo učitaj",
  verify: "Verifikuj",
  verificationRequired: "Verifikacija je obavezna!",
  verified: "Verifikovano",
  verifying: "Verifikacija u toku...",
  waitAlert: "Verifikacija u toku... molimo vas da sačekate."
};
globalThis.altchaI18n.set("sr", p);
export {
  p as i18n
};
