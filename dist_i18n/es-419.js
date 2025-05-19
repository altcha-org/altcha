const l = () => {
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
    return r(void 0), l;
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
function v(e, r = l) {
  let t = null;
  const n = /* @__PURE__ */ new Set();
  function s(a) {
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
    s(a(
      /** @type {T} */
      e
    ));
  }
  function g(a, c = l) {
    const i = [a, c];
    return n.add(i), n.size === 1 && (t = r(s, b) || l), a(
      /** @type {T} */
      e
    ), () => {
      n.delete(i), n.size === 0 && t && (t(), t = null);
    };
  }
  return { set: s, update: b, subscribe: g };
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
  store: v({})
};
const T = {
  ariaLinkLabel: "Visitar Altcha.org",
  enterCode: "Ingresa el código",
  enterCodeAria: "Ingresa el código que escuchas. Presiona Espacio para reproducir el audio.",
  error: "Falló la verificación. Por favor vuelve a intentarlo más tarde.",
  expired: "La verificación expiró. Por favor inténtalo de nuevo.",
  verificationRequired: "¡Verificación requerida!",
  footer: 'Protegido por <a href="https://altcha.org/" target="_blank" aria-label="Visitar Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Obtener un reto de audio",
  label: "No soy un robot",
  loading: "Cargando...",
  reload: "Volver a cargar",
  verify: "Verificar",
  verified: "Verificado",
  verifying: "Verificando...",
  waitAlert: "Verificando... por favor espera."
};
globalThis.altchaI18n.set("es-419", T);
export {
  T as i18n
};
