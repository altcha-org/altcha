const o = () => {
};
function g(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
let c = !1;
function h(t) {
  var e = c;
  try {
    return c = !0, t();
  } finally {
    c = e;
  }
}
function k(t, e, a) {
  if (t == null)
    return e(void 0), o;
  const r = h(
    () => t.subscribe(
      e,
      // @ts-expect-error
      a
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const l = [];
function p(t, e = o) {
  let a = null;
  const r = /* @__PURE__ */ new Set();
  function s(n) {
    if (g(t, n) && (t = n, a)) {
      const u = !l.length;
      for (const i of r)
        i[1](), l.push(i, t);
      if (u) {
        for (let i = 0; i < l.length; i += 2)
          l[i][0](l[i + 1]);
        l.length = 0;
      }
    }
  }
  function b(n) {
    s(n(
      /** @type {T} */
      t
    ));
  }
  function d(n, u = o) {
    const i = [n, u];
    return r.add(i), r.size === 1 && (a = e(s, b) || o), n(
      /** @type {T} */
      t
    ), () => {
      r.delete(i), r.size === 0 && a && (a(), a = null);
    };
  }
  return { set: s, update: b, subscribe: d };
}
function f(t) {
  let e;
  return k(t, (a) => e = a)(), e;
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
const I = {
  ariaLinkLabel: "Żur Altcha.org",
  enterCode: "Idħol il-kodiċi",
  enterCodeAria: "Idħol il-kodiċi li tisma'. Agħfas Spazju biex tindaqq l-awdjo.",
  error: "Il-verifika falliet. Erġa’ pprova aktar tard.",
  expired: "Il-verifika skadiet. Erġa’ pprova.",
  verificationRequired: "Verifika meħtieġa!",
  footer: 'Protett minn <a href="https://altcha.org/" target="_blank" aria-label="Żur Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Ikseb sfida bl-awdjo",
  label: "M’inix robot",
  loading: "Qed jitgħabba...",
  reload: "Ittella’ mill-ġdid",
  verify: "Ivverifika",
  verified: "Ivverifikat",
  verifying: "Verifika għaddejja...",
  waitAlert: "Verifika għaddejja... stenna ftit."
};
globalThis.altchaI18n.set("mt", I);
export {
  I as i18n
};
