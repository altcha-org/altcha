const s = () => {
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
function p(e, t, n) {
  if (e == null)
    return t(void 0), s;
  const r = d(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const l = [];
function k(e, t = s) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function a(o) {
    if (g(e, o) && (e = o, n)) {
      const u = !l.length;
      for (const i of r)
        i[1](), l.push(i, e);
      if (u) {
        for (let i = 0; i < l.length; i += 2)
          l[i][0](l[i + 1]);
        l.length = 0;
      }
    }
  }
  function b(o) {
    a(o(
      /** @type {T} */
      e
    ));
  }
  function h(o, u = s) {
    const i = [o, u];
    return r.add(i), r.size === 1 && (n = t(a, b) || s), o(
      /** @type {T} */
      e
    ), () => {
      r.delete(i), r.size === 0 && n && (n(), n = null);
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
  store: k({})
};
const T = {
  ariaLinkLabel: "Besicht Altcha.org",
  enterCode: "Code aginn",
  enterCodeAria: "Gitt de Code an deen dir héiert. Dréckt op d'Weltraumtast fir Audio ofzespillen.",
  error: "Verifikatioun ass feelgeschloen. Probéiert méi spéit nach emol.",
  expired: "Verifikatioun ofgelaf. Probéiert nach emol.",
  footer: 'Geschützt vun <a href="https://altcha.org/" target="_blank" aria-label="Besicht Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Kritt eng Audio-Herausfuerderung",
  label: "Ech sinn keen Robot",
  loading: "Lueden...",
  reload: "Nei lueden",
  verify: "Verifizéieren",
  verificationRequired: "Verifikatioun néideg!",
  verified: "Verifizéiert",
  verifying: "Verifizéieren...",
  waitAlert: "Verifizéieren... waart wgl."
};
globalThis.altchaI18n.set("lb", T);
export {
  T as i18n
};
