const s = () => {
};
function f(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
let c = !1;
function d(t) {
  var e = c;
  try {
    return c = !0, t();
  } finally {
    c = e;
  }
}
function p(t, e, n) {
  if (t == null)
    return e(void 0), s;
  const a = d(
    () => t.subscribe(
      e,
      // @ts-expect-error
      n
    )
  );
  return a.unsubscribe ? () => a.unsubscribe() : a;
}
const l = [];
function k(t, e = s) {
  let n = null;
  const a = /* @__PURE__ */ new Set();
  function r(o) {
    if (f(t, o) && (t = o, n)) {
      const u = !l.length;
      for (const i of a)
        i[1](), l.push(i, t);
      if (u) {
        for (let i = 0; i < l.length; i += 2)
          l[i][0](l[i + 1]);
        l.length = 0;
      }
    }
  }
  function h(o) {
    r(o(
      /** @type {T} */
      t
    ));
  }
  function g(o, u = s) {
    const i = [o, u];
    return a.add(i), a.size === 1 && (n = e(r, h) || s), o(
      /** @type {T} */
      t
    ), () => {
      a.delete(i), a.size === 0 && n && (n(), n = null);
    };
  }
  return { set: r, update: h, subscribe: g };
}
function b(t) {
  let e;
  return p(t, (n) => e = n)(), e;
}
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (t) => b(globalThis.altchaI18n.store)[t],
  set: (t, e) => {
    Object.assign(b(globalThis.altchaI18n.store), {
      [t]: e
    }), globalThis.altchaI18n.store.set(b(globalThis.altchaI18n.store));
  },
  store: k({})
};
const K = {
  ariaLinkLabel: "Külasta Altcha.org",
  enterCode: "Sisesta kood",
  enterCodeAria: "Sisestage kuuldu kood. Vajutage tühikut, et esitada heli.",
  error: "Kinnitamine ebaõnnestus. Proovi hiljem uuesti.",
  expired: "Kinnitamine aegus. Proovi uuesti.",
  verificationRequired: "Kontroll on vajalik!",
  footer: 'Kaitstud <a href="https://altcha.org/" target="_blank" aria-label="Külasta Altcha.org">ALTCHA</a> poolt',
  getAudioChallenge: "Hangi heliülesanne",
  label: "Ma ei ole robot",
  loading: "Laadimine...",
  reload: "Laadi uuesti",
  verify: "Kinnita",
  verified: "Kinnitatud",
  verifying: "Kinnitamine...",
  waitAlert: "Kinnitamine... palun oota."
};
globalThis.altchaI18n.set("et", K);
export {
  K as i18n
};
