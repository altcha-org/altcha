const o = () => {
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
function p(t, e, r) {
  if (t == null)
    return e(void 0), o;
  const i = d(
    () => t.subscribe(
      e,
      // @ts-expect-error
      r
    )
  );
  return i.unsubscribe ? () => i.unsubscribe() : i;
}
const s = [];
function T(t, e = o) {
  let r = null;
  const i = /* @__PURE__ */ new Set();
  function a(l) {
    if (g(t, l) && (t = l, r)) {
      const u = !s.length;
      for (const n of i)
        n[1](), s.push(n, t);
      if (u) {
        for (let n = 0; n < s.length; n += 2)
          s[n][0](s[n + 1]);
        s.length = 0;
      }
    }
  }
  function f(l) {
    a(l(
      /** @type {T} */
      t
    ));
  }
  function h(l, u = o) {
    const n = [l, u];
    return i.add(n), i.size === 1 && (r = e(a, f) || o), l(
      /** @type {T} */
      t
    ), () => {
      i.delete(n), i.size === 0 && r && (r(), r = null);
    };
  }
  return { set: a, update: f, subscribe: h };
}
function b(t) {
  let e;
  return p(t, (r) => e = r)(), e;
}
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (t) => b(globalThis.altchaI18n.store)[t],
  set: (t, e) => {
    Object.assign(b(globalThis.altchaI18n.store), {
      [t]: e
    }), globalThis.altchaI18n.store.set(b(globalThis.altchaI18n.store));
  },
  store: T({})
};
const A = {
  ariaLinkLabel: "Altcha.org पर जाएं",
  enterCode: "कोड दर्ज करेंं",
  enterCodeAria: "आप जो कोड सुनते हैं उसे दर्ज करें। ऑडियो चलाने के लिए स्पेस दबाएं।",
  error: "सत्यापन विफल। कृपया बाद में फिर से प्रयास करें।",
  expired: "सत्यापन समाप्त हो गया है। कृपया पुनः प्रयास करें।",
  verificationRequired: "सत्यापन आवश्यक है!",
  footer: 'द्वारा संरक्षित <a href="https://altcha.org/" target="_blank" aria-label="Altcha.org पर जाएं">ALTCHA</a>',
  getAudioChallenge: "ऑडियो चुनौती प्राप्त करें",
  label: "मैं रोबोट नहीं हूँ",
  loading: "लोड हो रहा है...",
  reload: "पुनः लोड करें",
  verify: "सत्यापित करें",
  verified: "सत्यापित",
  verifying: "सत्यापित कर रहे हैं...",
  waitAlert: "सत्यापित किया जा रहा है... कृपया प्रतीक्षा करें।"
};
globalThis.altchaI18n.set("hi", A);
export {
  A as i18n
};
