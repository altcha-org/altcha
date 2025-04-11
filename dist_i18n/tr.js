const o = () => {
};
function g(e, n) {
  return e != e ? n == n : e !== n || e !== null && typeof e == "object" || typeof e == "function";
}
let c = !1;
function h(e) {
  var n = c;
  try {
    return c = !0, e();
  } finally {
    c = n;
  }
}
function y(e, n, r) {
  if (e == null)
    return n(void 0), o;
  const a = h(
    () => e.subscribe(
      n,
      // @ts-expect-error
      r
    )
  );
  return a.unsubscribe ? () => a.unsubscribe() : a;
}
const l = [];
function k(e, n = o) {
  let r = null;
  const a = /* @__PURE__ */ new Set();
  function u(i) {
    if (g(e, i) && (e = i, r)) {
      const s = !l.length;
      for (const t of a)
        t[1](), l.push(t, e);
      if (s) {
        for (let t = 0; t < l.length; t += 2)
          l[t][0](l[t + 1]);
        l.length = 0;
      }
    }
  }
  function f(i) {
    u(i(
      /** @type {T} */
      e
    ));
  }
  function d(i, s = o) {
    const t = [i, s];
    return a.add(t), a.size === 1 && (r = n(u, f) || o), i(
      /** @type {T} */
      e
    ), () => {
      a.delete(t), a.size === 0 && r && (r(), r = null);
    };
  }
  return { set: u, update: f, subscribe: d };
}
function b(e) {
  let n;
  return y(e, (r) => n = r)(), n;
}
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (e) => b(globalThis.altchaI18n.store)[e],
  set: (e, n) => {
    Object.assign(b(globalThis.altchaI18n.store), {
      [e]: n
    }), globalThis.altchaI18n.store.set(b(globalThis.altchaI18n.store));
  },
  store: k({})
};
const p = {
  ariaLinkLabel: "Altcha.org'yu ziyaret edin",
  enterCode: "Kodu girin",
  enterCodeAria: "Duyduğunuz kodu girin. Ses dosyasını oynatmak için Boşluk tuşuna basın.",
  error: "Doğrulama başarısız oldu. Lütfen daha sonra tekrar deneyin.",
  expired: "Doğrulama süresi doldu. Lütfen tekrar deneyin.",
  verificationRequired: "Doğrulama gerekli!",
  footer: `ALTCHA tarafından korunuyor <a href="https://altcha.org/" target="_blank" aria-label="Altcha.org'yu ziyaret edin">ALTCHA</a>`,
  getAudioChallenge: "Sesli doğrulama al",
  label: "Ben robot değilim",
  loading: "Yükleniyor...",
  reload: "Yeniden yükle",
  verify: "Doğrula",
  verified: "Doğrulandı",
  verifying: "Doğrulama yapılıyor...",
  waitAlert: "Doğrulama yapılıyor... lütfen bekleyin."
};
globalThis.altchaI18n.set("tr", p);
export {
  p as i18n
};
