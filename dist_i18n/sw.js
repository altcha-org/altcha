const l = () => {
};
function g(i, t) {
  return i != i ? t == t : i !== t || i !== null && typeof i == "object" || typeof i == "function";
}
let b = !1;
function d(i) {
  var t = b;
  try {
    return b = !0, i();
  } finally {
    b = t;
  }
}
function T(i, t, e) {
  if (i == null)
    return t(void 0), l;
  const n = d(
    () => i.subscribe(
      t,
      // @ts-expect-error
      e
    )
  );
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const r = [];
function k(i, t = l) {
  let e = null;
  const n = /* @__PURE__ */ new Set();
  function o(s) {
    if (g(i, s) && (i = s, e)) {
      const u = !r.length;
      for (const a of n)
        a[1](), r.push(a, i);
      if (u) {
        for (let a = 0; a < r.length; a += 2)
          r[a][0](r[a + 1]);
        r.length = 0;
      }
    }
  }
  function c(s) {
    o(s(
      /** @type {T} */
      i
    ));
  }
  function f(s, u = l) {
    const a = [s, u];
    return n.add(a), n.size === 1 && (e = t(o, c) || l), s(
      /** @type {T} */
      i
    ), () => {
      n.delete(a), n.size === 0 && e && (e(), e = null);
    };
  }
  return { set: o, update: c, subscribe: f };
}
function h(i) {
  let t;
  return T(i, (e) => t = e)(), t;
}
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (i) => h(globalThis.altchaI18n.store)[i],
  set: (i, t) => {
    Object.assign(h(globalThis.altchaI18n.store), {
      [i]: t
    }), globalThis.altchaI18n.store.set(h(globalThis.altchaI18n.store));
  },
  store: k({})
};
const p = {
  ariaLinkLabel: "Tembelea Altcha.org",
  enterCode: "Weka nambari",
  enterCodeAria: "Weka nambari unayosikia. Bonyeza Space kucheza sauti.",
  error: "Uthibitishaji umeshindwa. Jaribu tena baadaye.",
  expired: "Uthibitishaji umeisha. Jaribu tena.",
  footer: 'Imealindwa na <a href="https://altcha.org/" target="_blank" aria-label="Tembelea Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Pata changamoto ya sauti",
  label: "Mimi sio roboti",
  loading: "Inapakia...",
  reload: "Pakia tena",
  verify: "Thibitisha",
  verificationRequired: "Uthibitishaji unahitajika!",
  verified: "Imethibitishwa",
  verifying: "Inathibitisha...",
  waitAlert: "Inathibitisha... tafadhali subiri."
};
globalThis.altchaI18n.set("sw", p);
export {
  p as i18n
};
