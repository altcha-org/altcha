const c = () => {
};
function h(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
let s = !1;
function d(e) {
  var t = s;
  try {
    return s = !0, e();
  } finally {
    s = t;
  }
}
function p(e, t, r) {
  if (e == null)
    return t(void 0), c;
  const n = d(
    () => e.subscribe(
      t,
      // @ts-expect-error
      r
    )
  );
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const o = [];
function T(e, t = c) {
  let r = null;
  const n = /* @__PURE__ */ new Set();
  function l(a) {
    if (h(e, a) && (e = a, r)) {
      const u = !o.length;
      for (const i of n)
        i[1](), o.push(i, e);
      if (u) {
        for (let i = 0; i < o.length; i += 2)
          o[i][0](o[i + 1]);
        o.length = 0;
      }
    }
  }
  function b(a) {
    l(a(
      /** @type {T} */
      e
    ));
  }
  function g(a, u = c) {
    const i = [a, u];
    return n.add(i), n.size === 1 && (r = t(l, b) || c), a(
      /** @type {T} */
      e
    ), () => {
      n.delete(i), n.size === 0 && r && (r(), r = null);
    };
  }
  return { set: l, update: b, subscribe: g };
}
function f(e) {
  let t;
  return p(e, (r) => t = r)(), t;
}
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (e) => f(globalThis.altchaI18n.store)[e],
  set: (e, t) => {
    Object.assign(f(globalThis.altchaI18n.store), {
      [e]: t
    }), globalThis.altchaI18n.store.set(f(globalThis.altchaI18n.store));
  },
  store: T({})
};
const I = {
  ariaLinkLabel: "Vizitează Altcha.org",
  enterCode: "Introduceți codul",
  enterCodeAria: "Introduceți codul pe care îl auziți. Apăsați Spațiu pentru a reda audio.",
  error: "Verificarea a eșuat. Încearcă din nou mai târziu.",
  expired: "Verificarea a expirat. Încearcă din nou.",
  verificationRequired: "Verificare necesară!",
  footer: 'Protejat de <a href="https://altcha.org/" target="_blank" aria-label="Vizitează Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Obține o provocare audio",
  label: "Nu sunt un robot",
  loading: "Se încarcă...",
  reload: "Reîncarcă",
  verify: "Verifică",
  verified: "Verificat",
  verifying: "Se verifică...",
  waitAlert: "Se verifică... te rugăm să aștepți."
};
globalThis.altchaI18n.set("ro", I);
export {
  I as i18n
};
