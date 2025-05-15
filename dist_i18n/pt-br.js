const s = () => {
};
function d(e, r) {
  return e != e ? r == r : e !== r || e !== null && typeof e == "object" || typeof e == "function";
}
let u = !1;
function h(e) {
  var r = u;
  try {
    return u = !0, e();
  } finally {
    u = r;
  }
}
function p(e, r, i) {
  if (e == null)
    return r(void 0), s;
  const o = h(
    () => e.subscribe(
      r,
      // @ts-expect-error
      i
    )
  );
  return o.unsubscribe ? () => o.unsubscribe() : o;
}
const a = [];
function v(e, r = s) {
  let i = null;
  const o = /* @__PURE__ */ new Set();
  function l(n) {
    if (d(e, n) && (e = n, i)) {
      const c = !a.length;
      for (const t of o)
        t[1](), a.push(t, e);
      if (c) {
        for (let t = 0; t < a.length; t += 2)
          a[t][0](a[t + 1]);
        a.length = 0;
      }
    }
  }
  function b(n) {
    l(n(
      /** @type {T} */
      e
    ));
  }
  function g(n, c = s) {
    const t = [n, c];
    return o.add(t), o.size === 1 && (i = r(l, b) || s), n(
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
const T = {
  ariaLinkLabel: "Visitar Altcha.org",
  enterCode: "Digite o código",
  enterCodeAria: "Digite o código que você ouve. Pressione Espaço para reproduzir o áudio.",
  error: "Falha na verificação. Por favor, tente novamente mais tarde.",
  expired: "Verificação expirada. Por favor, tente novamente.",
  verificationRequired: "Verificação necessária!",
  footer: 'Protegido por <a href="https://altcha.org/" target="_blank" aria-label="Visitar Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Obter desafio de áudio",
  label: "Eu não sou um robô",
  loading: "Carregando...",
  reload: "Recarregar",
  verify: "Verificar",
  verified: "Verificado",
  verifying: "Verificando...",
  waitAlert: "Verificando... por favor aguarde."
};
globalThis.altchaI18n.set("pt-br", T);
export {
  T as i18n
};
