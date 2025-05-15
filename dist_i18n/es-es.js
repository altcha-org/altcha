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
  const n = h(
    () => e.subscribe(
      r,
      // @ts-expect-error
      i
    )
  );
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const o = [];
function T(e, r = s) {
  let i = null;
  const n = /* @__PURE__ */ new Set();
  function l(a) {
    if (d(e, a) && (e = a, i)) {
      const c = !o.length;
      for (const t of n)
        t[1](), o.push(t, e);
      if (c) {
        for (let t = 0; t < o.length; t += 2)
          o[t][0](o[t + 1]);
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
    const t = [a, c];
    return n.add(t), n.size === 1 && (i = r(l, b) || s), a(
      /** @type {T} */
      e
    ), () => {
      n.delete(t), n.size === 0 && i && (i(), i = null);
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
  store: T({})
};
const I = {
  ariaLinkLabel: "Visitar Altcha.org",
  enterCode: "Introduce el código",
  enterCodeAria: "Introduce el código que escuchas. Pulsa Espacio para reproducir el audio.",
  error: "Falló la verificación. Por favor intente nuevamente más tarde.",
  expired: "Verificación expirada. Por favor intente nuevamente.",
  verificationRequired: "¡Verificación requerida!",
  footer: 'Protegido por <a href="https://altcha.org/" target="_blank" aria-label="Visitar Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Obtener un desafío de audio",
  label: "No soy un robot",
  loading: "Cargando...",
  reload: "Recargar",
  verify: "Verificar",
  verified: "Verificado",
  verifying: "Verificando...",
  waitAlert: "Verificando... por favor espere."
};
globalThis.altchaI18n.set("es-es", I);
export {
  I as i18n
};
