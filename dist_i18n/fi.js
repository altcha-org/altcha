const s = () => {
};
function g(t, e) {
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
function v(t, e, n) {
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
const r = [];
function p(t, e = s) {
  let n = null;
  const a = /* @__PURE__ */ new Set();
  function o(l) {
    if (g(t, l) && (t = l, n)) {
      const u = !r.length;
      for (const i of a)
        i[1](), r.push(i, t);
      if (u) {
        for (let i = 0; i < r.length; i += 2)
          r[i][0](r[i + 1]);
        r.length = 0;
      }
    }
  }
  function b(l) {
    o(l(
      /** @type {T} */
      t
    ));
  }
  function f(l, u = s) {
    const i = [l, u];
    return a.add(i), a.size === 1 && (n = e(o, b) || s), l(
      /** @type {T} */
      t
    ), () => {
      a.delete(i), a.size === 0 && n && (n(), n = null);
    };
  }
  return { set: o, update: b, subscribe: f };
}
function h(t) {
  let e;
  return v(t, (n) => e = n)(), e;
}
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (t) => h(globalThis.altchaI18n.store)[t],
  set: (t, e) => {
    Object.assign(h(globalThis.altchaI18n.store), {
      [t]: e
    }), globalThis.altchaI18n.store.set(h(globalThis.altchaI18n.store));
  },
  store: p({})
};
const k = {
  ariaLinkLabel: "Vieraile sivulla Altcha.org",
  enterCode: "Syötä koodi",
  enterCodeAria: "Kirjoita kuulemasi koodi. Paina välilyöntiä toistaaksesi äänen.",
  error: "Varmennus epäonnistui. Yritä myöhemmin uudelleen.",
  expired: "Varmennus vanhentui. Yritä uudelleen.",
  verificationRequired: "Vahvistus vaaditaan!",
  footer: 'Suojattu <a href="https://altcha.org/" target="_blank" aria-label="Vieraile sivulla Altcha.org">ALTCHA</a>:lla',
  getAudioChallenge: "Hae äänitehtävä",
  label: "En ole robotti",
  loading: "Ladataan...",
  reload: "Lataa uudelleen",
  verify: "Vahvista",
  verified: "Vahvistettu",
  verifying: "Vahvistetaan...",
  waitAlert: "Vahvistetaan... odota hetki."
};
globalThis.altchaI18n.set("fi", k);
export {
  k as i18n
};
