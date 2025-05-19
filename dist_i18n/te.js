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
  ariaLinkLabel: "Altcha.org సందర్శించండి",
  enterCode: "కోడ్‌ని నమోదు చేయండి",
  enterCodeAria: "మీరు విన్న కోడ్‌ని నమోదు చేయండి. ఆడియో ప్లే చేయడానికి స్పేస్‌ను నొక్కండి.",
  error: "చెకింగ్ విఫలమైంది. దయచేసి మరల ప్రయత్నించండి.",
  expired: "చెకింగ్ కాలం ముగిసింది. దయచేసి మరల ప్రయత్నించండి.",
  verificationRequired: "ధృవీకరణ అవసరం!",
  footer: 'ఈ సైట్ రక్షించబడింది <a href="https://altcha.org/" target="_blank" aria-label="Altcha.org సందర్శించండి">ALTCHA</a>',
  getAudioChallenge: "ఆడియో ఛాలెంజ్ పొందండి",
  label: "నేను రోబోట్ కాదు",
  loading: "లోడ్ అవుతోంది...",
  reload: "మళ్ళీ లోడ్ చేయండి",
  verify: "ధ్రువీకరించు",
  verified: "ధ్రువీకరించబడింది",
  verifying: "ధ్రువీకరణ జరుగుతుంది...",
  waitAlert: "ధ్రువీకరణ జరుగుతుంది... దయచేసి వేచి ఉండండి."
};
globalThis.altchaI18n.set("te", A);
export {
  A as i18n
};
