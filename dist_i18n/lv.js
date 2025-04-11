const l = () => {
};
function g(e, i) {
  return e != e ? i == i : e !== i || e !== null && typeof e == "object" || typeof e == "function";
}
let c = !1;
function h(e) {
  var i = c;
  try {
    return c = !0, e();
  } finally {
    c = i;
  }
}
function k(e, i, r) {
  if (e == null)
    return i(void 0), l;
  const n = h(
    () => e.subscribe(
      i,
      // @ts-expect-error
      r
    )
  );
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const s = [];
function p(e, i = l) {
  let r = null;
  const n = /* @__PURE__ */ new Set();
  function o(a) {
    if (g(e, a) && (e = a, r)) {
      const u = !s.length;
      for (const t of n)
        t[1](), s.push(t, e);
      if (u) {
        for (let t = 0; t < s.length; t += 2)
          s[t][0](s[t + 1]);
        s.length = 0;
      }
    }
  }
  function b(a) {
    o(a(
      /** @type {T} */
      e
    ));
  }
  function d(a, u = l) {
    const t = [a, u];
    return n.add(t), n.size === 1 && (r = i(o, b) || l), a(
      /** @type {T} */
      e
    ), () => {
      n.delete(t), n.size === 0 && r && (r(), r = null);
    };
  }
  return { set: o, update: b, subscribe: d };
}
function f(e) {
  let i;
  return k(e, (r) => i = r)(), i;
}
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (e) => f(globalThis.altchaI18n.store)[e],
  set: (e, i) => {
    Object.assign(f(globalThis.altchaI18n.store), {
      [e]: i
    }), globalThis.altchaI18n.store.set(f(globalThis.altchaI18n.store));
  },
  store: p({})
};
const v = {
  ariaLinkLabel: "Apmeklējiet Altcha.org",
  enterCode: "Ievadiet kodu",
  enterCodeAria: "Ievadiet dzirdamo kodu. Nospiediet atstarpes taustiņu, lai atskaņotu audio.",
  error: "Verifikācija neizdevās. Mēģiniet vēlāk vēlreiz.",
  expired: "Verifikācijas laiks ir beidzies. Mēģiniet vēlreiz.",
  verificationRequired: "Nepieciešama verifikācija!",
  footer: 'Aizsargāts ar <a href="https://altcha.org/" target="_blank" aria-label="Apmeklējiet Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Saņemt audio izaicinājumu",
  label: "Es neesmu robots",
  loading: "Notiek ielāde...",
  reload: "Pārlādēt",
  verify: "Verificēt",
  verified: "Verificēts",
  verifying: "Notiek verifikācija...",
  waitAlert: "Notiek verifikācija... lūdzu, uzgaidiet."
};
globalThis.altchaI18n.set("lv", v);
export {
  v as i18n
};
