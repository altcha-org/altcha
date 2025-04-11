const a = () => {
};
function h(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
let c = !1;
function d(e) {
  var t = c;
  try {
    return c = !0, e();
  } finally {
    c = t;
  }
}
function j(e, t, i) {
  if (e == null)
    return t(void 0), a;
  const r = d(
    () => e.subscribe(
      t,
      // @ts-expect-error
      i
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const s = [];
function p(e, t = a) {
  let i = null;
  const r = /* @__PURE__ */ new Set();
  function l(o) {
    if (h(e, o) && (e = o, i)) {
      const u = !s.length;
      for (const n of r)
        n[1](), s.push(n, e);
      if (u) {
        for (let n = 0; n < s.length; n += 2)
          s[n][0](s[n + 1]);
        s.length = 0;
      }
    }
  }
  function f(o) {
    l(o(
      /** @type {T} */
      e
    ));
  }
  function g(o, u = a) {
    const n = [o, u];
    return r.add(n), r.size === 1 && (i = t(l, f) || a), o(
      /** @type {T} */
      e
    ), () => {
      r.delete(n), r.size === 0 && i && (i(), i = null);
    };
  }
  return { set: l, update: f, subscribe: g };
}
function b(e) {
  let t;
  return j(e, (i) => t = i)(), t;
}
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (e) => b(globalThis.altchaI18n.store)[e],
  set: (e, t) => {
    Object.assign(b(globalThis.altchaI18n.store), {
      [e]: t
    }), globalThis.altchaI18n.store.set(b(globalThis.altchaI18n.store));
  },
  store: p({})
};
const v = {
  ariaLinkLabel: "Obiščite Altcha.org",
  enterCode: "Vnesite kodo",
  enterCodeAria: "Vnesite kodo, ki jo slišite. Pritisnite preslednico za predvajanje zvoka.",
  error: "Preverjanje ni uspelo. Poskusite znova kasneje.",
  expired: "Preverjanje je poteklo. Poskusite znova.",
  verificationRequired: "Potrebna je preveritev!",
  footer: 'Zaščiteno z <a href="https://altcha.org/" target="_blank" aria-label="Obiščite Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Pridobite zvočni izziv",
  label: "Nisem robot",
  loading: "Nalagam...",
  reload: "Ponovno naloži",
  verify: "Preveri",
  verified: "Preverjeno",
  verifying: "Preverjanje...",
  waitAlert: "Preverjanje... prosim počakajte."
};
globalThis.altchaI18n.set("sl", v);
export {
  v as i18n
};
