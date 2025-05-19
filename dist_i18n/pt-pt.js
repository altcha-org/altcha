const s = () => {
};
function h(e, r) {
  return e != e ? r == r : e !== r || e !== null && typeof e == "object" || typeof e == "function";
}
let c = !1;
function d(e) {
  var r = c;
  try {
    return c = !0, e();
  } finally {
    c = r;
  }
}
function p(e, r, i) {
  if (e == null)
    return r(void 0), s;
  const o = d(
    () => e.subscribe(
      r,
      // @ts-expect-error
      i
    )
  );
  return o.unsubscribe ? () => o.unsubscribe() : o;
}
const n = [];
function v(e, r = s) {
  let i = null;
  const o = /* @__PURE__ */ new Set();
  function l(a) {
    if (h(e, a) && (e = a, i)) {
      const u = !n.length;
      for (const t of o)
        t[1](), n.push(t, e);
      if (u) {
        for (let t = 0; t < n.length; t += 2)
          n[t][0](n[t + 1]);
        n.length = 0;
      }
    }
  }
  function b(a) {
    l(a(
      /** @type {T} */
      e
    ));
  }
  function g(a, u = s) {
    const t = [a, u];
    return o.add(t), o.size === 1 && (i = r(l, b) || s), a(
      /** @type {T} */
      e
    ), () => {
      o.delete(t), o.size === 0 && i && (i(), i = null);
    };
  }
  return { set: l, update: b, subscribe: g };
}
function f(e) {
  let r;
  return p(e, (i) => r = i)(), r;
}
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (e) => f(globalThis.altchaI18n.store)[e],
  set: (e, r) => {
    Object.assign(f(globalThis.altchaI18n.store), {
      [e]: r
    }), globalThis.altchaI18n.store.set(f(globalThis.altchaI18n.store));
  },
  store: v({})
};
const A = {
  ariaLinkLabel: "Visitar Altcha.org",
  enterCode: "Introduza o código",
  enterCodeAria: "Introduza o código que ouve. Prima Espaço para reproduzir o áudio.",
  error: "A verificação falhou. Por favor, tente novamente mais tarde.",
  expired: "Verificação expirada. Por favor, tente novamente.",
  verificationRequired: "Verificação necessária!",
  footer: 'Protegido por <a href="https://altcha.org/" target="_blank" aria-label="Visitar Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Obter desafio de áudio",
  label: "Não sou um robô",
  loading: "A carregar...",
  reload: "Recarregar",
  verify: "Verificar",
  verified: "Verificado",
  verifying: "A verificar...",
  waitAlert: "A verificar... por favor aguarde."
};
globalThis.altchaI18n.set("pt-pt", A);
export {
  A as i18n
};
