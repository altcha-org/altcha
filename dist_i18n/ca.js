const s = () => {
};
function h(e, r) {
  return e != e ? r == r : e !== r || e !== null && typeof e == "object" || typeof e == "function";
}
let u = !1;
function d(e) {
  var r = u;
  try {
    return u = !0, e();
  } finally {
    u = r;
  }
}
function p(e, r, t) {
  if (e == null)
    return r(void 0), s;
  const n = d(
    () => e.subscribe(
      r,
      // @ts-expect-error
      t
    )
  );
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const o = [];
function T(e, r = s) {
  let t = null;
  const n = /* @__PURE__ */ new Set();
  function l(a) {
    if (h(e, a) && (e = a, t)) {
      const c = !o.length;
      for (const i of n)
        i[1](), o.push(i, e);
      if (c) {
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
  function g(a, c = s) {
    const i = [a, c];
    return n.add(i), n.size === 1 && (t = r(l, b) || s), a(
      /** @type {T} */
      e
    ), () => {
      n.delete(i), n.size === 0 && t && (t(), t = null);
    };
  }
  return { set: l, update: b, subscribe: g };
}
function f(e) {
  let r;
  return p(e, (t) => r = t)(), r;
}
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (e) => f(globalThis.altchaI18n.store)[e],
  set: (e, r) => {
    Object.assign(f(globalThis.altchaI18n.store), {
      [e]: r
    }), globalThis.altchaI18n.store.set(f(globalThis.altchaI18n.store));
  },
  store: T({})
};
const I = {
  ariaLinkLabel: "Visita Altcha.org",
  enterCode: "Introdueix el codi",
  enterCodeAria: "Introdueix el codi que escoltes. Prem Espai per reproduir l’àudio.",
  error: "Verificació fallida. Torna-ho a provar més tard.",
  expired: "Verificació expirada. Torna-ho a provar.",
  footer: 'Protegit per <a href="https://altcha.org/" target="_blank" aria-label="Visita Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Obtenir un desafiament d’àudio",
  label: "No sóc un robot",
  loading: "Carregant...",
  reload: "Torna a carregar",
  verify: "Verificar",
  verificationRequired: "Es requereix verificació!",
  verified: "Verificat",
  verifying: "Verificant...",
  waitAlert: "Verificant... si us plau, espera."
};
globalThis.altchaI18n.set("ca", I);
export {
  I as i18n
};
