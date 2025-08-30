const o = () => {
};
function f(i, t) {
  return i != i ? t == t : i !== t || i !== null && typeof i == "object" || typeof i == "function";
}
let c = !1;
function d(i) {
  var t = c;
  try {
    return c = !0, i();
  } finally {
    c = t;
  }
}
function k(i, t, e) {
  if (i == null)
    return t(void 0), o;
  const r = d(
    () => i.subscribe(
      t,
      // @ts-expect-error
      e
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const s = [];
function y(i, t = o) {
  let e = null;
  const r = /* @__PURE__ */ new Set();
  function l(a) {
    if (f(i, a) && (i = a, e)) {
      const u = !s.length;
      for (const n of r)
        n[1](), s.push(n, i);
      if (u) {
        for (let n = 0; n < s.length; n += 2)
          s[n][0](s[n + 1]);
        s.length = 0;
      }
    }
  }
  function g(a) {
    l(a(
      /** @type {T} */
      i
    ));
  }
  function b(a, u = o) {
    const n = [a, u];
    return r.add(n), r.size === 1 && (e = t(l, g) || o), a(
      /** @type {T} */
      i
    ), () => {
      r.delete(n), r.size === 0 && e && (e(), e = null);
    };
  }
  return { set: l, update: g, subscribe: b };
}
function h(i) {
  let t;
  return k(i, (e) => t = e)(), t;
}
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (i) => h(globalThis.altchaI18n.store)[i],
  set: (i, t) => {
    Object.assign(h(globalThis.altchaI18n.store), {
      [i]: t
    }), globalThis.altchaI18n.store.set(h(globalThis.altchaI18n.store));
  },
  store: y({})
};
const T = {
  ariaLinkLabel: "Altcha.org saytiga tashrif buyuring",
  enterCode: "Kodni kiriting",
  enterCodeAria: "Eshitgan kodingizni kiriting. Audioni ijro etish uchun Bo'sh joy tugmasini bosing.",
  error: "Tekshiruv muvaffaqiyatsiz tugadi. Keyinroq qayta urinib ko'ring.",
  expired: "Tekshiruv muddati tugadi. Qayta urinib ko'ring.",
  footer: '<a href="https://altcha.org/" target="_blank" aria-label="Altcha.org saytiga tashrif buyuring">ALTCHA</a> tomonidan himoyalangan',
  getAudioChallenge: "Audio sinovni olish",
  label: "Men robot emasman",
  loading: "Yuklanmoqda...",
  reload: "Qayta yuklash",
  verify: "Tekshirish",
  verificationRequired: "Tekshiruv talab qilinadi!",
  verified: "Tekshirildi",
  verifying: "Tekshirilmoqda...",
  waitAlert: "Tekshirilmoqda... iltimos kuting."
};
globalThis.altchaI18n.set("uz", T);
export {
  T as i18n
};
