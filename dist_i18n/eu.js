const u = () => {
};
function h(t, e) {
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
function z(t, e, i) {
  if (t == null)
    return e(void 0), u;
  const r = d(
    () => t.subscribe(
      e,
      // @ts-expect-error
      i
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const o = [];
function k(t, e = u) {
  let i = null;
  const r = /* @__PURE__ */ new Set();
  function s(n) {
    if (h(t, n) && (t = n, i)) {
      const l = !o.length;
      for (const a of r)
        a[1](), o.push(a, t);
      if (l) {
        for (let a = 0; a < o.length; a += 2)
          o[a][0](o[a + 1]);
        o.length = 0;
      }
    }
  }
  function g(n) {
    s(n(
      /** @type {T} */
      t
    ));
  }
  function f(n, l = u) {
    const a = [n, l];
    return r.add(a), r.size === 1 && (i = e(s, g) || u), n(
      /** @type {T} */
      t
    ), () => {
      r.delete(a), r.size === 0 && i && (i(), i = null);
    };
  }
  return { set: s, update: g, subscribe: f };
}
function b(t) {
  let e;
  return z(t, (i) => e = i)(), e;
}
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (t) => b(globalThis.altchaI18n.store)[t],
  set: (t, e) => {
    Object.assign(b(globalThis.altchaI18n.store), {
      [t]: e
    }), globalThis.altchaI18n.store.set(b(globalThis.altchaI18n.store));
  },
  store: k({})
};
const p = {
  ariaLinkLabel: "Bisitatu Altcha.org",
  enterCode: "Sartu kodea",
  enterCodeAria: "Sartu entzun duzun kodea. Sakatu Espazioa audioa erreproduzitzeko.",
  error: "Egiaztatzeak huts egin du. Saiatu berriro geroago.",
  expired: "Egiaztatzea iraungi da. Saiatu berriro.",
  verificationRequired: "Egiaztatzea beharrezkoa da!",
  footer: '<a href="https://altcha.org/" target="_blank" aria-label="Bisitatu Altcha.org">ALTCHA</a>k babestuta',
  getAudioChallenge: "Jaso audio-erronka bat",
  label: "Ez naiz robot bat",
  loading: "Kargatzen...",
  reload: "Birkargatu",
  verify: "Egiaztatu",
  verified: "Egiaztatuta",
  verifying: "Egiaztatzen...",
  waitAlert: "Egiaztatzen... itxaron mesedez."
};
globalThis.altchaI18n.set("eu", p);
export {
  p as i18n
};
