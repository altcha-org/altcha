const l = () => {
};
function h(t, e) {
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
function k(t, e, r) {
  if (t == null)
    return e(void 0), l;
  const i = d(
    () => t.subscribe(
      e,
      // @ts-expect-error
      r
    )
  );
  return i.unsubscribe ? () => i.unsubscribe() : i;
}
const a = [];
function p(t, e = l) {
  let r = null;
  const i = /* @__PURE__ */ new Set();
  function o(s) {
    if (h(t, s) && (t = s, r)) {
      const u = !a.length;
      for (const n of i)
        n[1](), a.push(n, t);
      if (u) {
        for (let n = 0; n < a.length; n += 2)
          a[n][0](a[n + 1]);
        a.length = 0;
      }
    }
  }
  function b(s) {
    o(s(
      /** @type {T} */
      t
    ));
  }
  function g(s, u = l) {
    const n = [s, u];
    return i.add(n), i.size === 1 && (r = e(o, b) || l), s(
      /** @type {T} */
      t
    ), () => {
      i.delete(n), i.size === 0 && r && (r(), r = null);
    };
  }
  return { set: o, update: b, subscribe: g };
}
function f(t) {
  let e;
  return k(t, (r) => e = r)(), e;
}
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (t) => f(globalThis.altchaI18n.store)[t],
  set: (t, e) => {
    Object.assign(f(globalThis.altchaI18n.store), {
      [t]: e
    }), globalThis.altchaI18n.store.set(f(globalThis.altchaI18n.store));
  },
  store: p({})
};
const y = {
  ariaLinkLabel: "Heimsækja Altcha.org",
  enterCode: "Sláðu inn kóða",
  enterCodeAria: "Sláðu inn kóðann sem þú heyrir. Ýttu á Space til að spila hljóðið.",
  error: "Staðfesting mistókst. Reyndu aftur síðar.",
  expired: "Staðfesting er útrunnin. Reyndu aftur.",
  footer: 'Verndað af <a href="https://altcha.org/" target="_blank" aria-label="Heimsækja Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Fá hljóðáskorun",
  label: "Ég er ekki robot",
  loading: "Hleður...",
  reload: "Hleð aftur",
  verify: "Staðfesta",
  verificationRequired: "Staðfesting er nauðsynleg!",
  verified: "Staðfest",
  verifying: "Að staðfesta...",
  waitAlert: "Að staðfesta... vinsamlegast bíða."
};
globalThis.altchaI18n.set("is", y);
export {
  y as i18n
};
