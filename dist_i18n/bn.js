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
  ariaLinkLabel: "Altcha.org পরিদর্শন করুন",
  enterCode: "কোড লিখুন",
  enterCodeAria: "আপনি যে কোড শুনতে পান তা লিখুন। অডিও প্লে করতে স্পেস বাটন টিপুন।",
  error: "যাচাইকরণ ব্যর্থ হয়েছে। পরে আবার চেষ্টা করুন।",
  expired: "যাচাইকরণ সময়সীমা শেষ হয়েছে। আবার চেষ্টা করুন।",
  verificationRequired: "যাচাই প্রয়োজন!",
  footer: 'দ্বারা সুরক্ষিত <a href="https://altcha.org/" target="_blank" aria-label="Altcha.org পরিদর্শন করুন">ALTCHA</a>',
  getAudioChallenge: "অডিও চ্যালেঞ্জ নিন",
  label: "আমি রোবট নই",
  loading: "লোড হচ্ছে...",
  reload: "পুনরায় লোড করুন",
  verify: "যাচাই করুন",
  verified: "যাচাই করা হয়েছে",
  verifying: "যাচাই করা হচ্ছে...",
  waitAlert: "যাচাই করা হচ্ছে... দয়া করে অপেক্ষা করুন।"
};
globalThis.altchaI18n.set("bn", A);
export {
  A as i18n
};
