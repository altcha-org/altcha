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
const k = {
  ariaLinkLabel: "Altcha.org сайтына кіру",
  enterCode: "Кодты енгізіңіз",
  enterCodeAria: "Естіген кодыңызды енгізіңіз. Аудионы ойнату үшін Бос орынды басыңыз.",
  error: "Тексеру сәтсіз аяқталды. Кейінірек қайталаңыз.",
  expired: "Тексеру мерзімі аяқталды. Қайталаңыз.",
  footer: '<a href="https://altcha.org/" target="_blank" aria-label="Altcha.org сайтына кіру">ALTCHA</a> қорғайды',
  getAudioChallenge: "Аудио сынақ алу",
  label: "Мен робот емеспін",
  loading: "Жүктелуде...",
  reload: "Қайта жүктеу",
  verify: "Тексеру",
  verificationRequired: "Тексеру талап етіледі!",
  verified: "Тексерілді",
  verifying: "Тексеруде...",
  waitAlert: "Тексерілуде... күте тұрыңыз."
};
globalThis.altchaI18n.set("kk", k);
export {
  k as i18n
};
