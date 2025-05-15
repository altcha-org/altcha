const s = () => {
};
function g(i, e) {
  return i != i ? e == e : i !== e || i !== null && typeof i == "object" || typeof i == "function";
}
let u = !1;
function d(i) {
  var e = u;
  try {
    return u = !0, i();
  } finally {
    u = e;
  }
}
function p(i, e, r) {
  if (i == null)
    return e(void 0), s;
  const n = d(
    () => i.subscribe(
      e,
      // @ts-expect-error
      r
    )
  );
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const o = [];
function T(i, e = s) {
  let r = null;
  const n = /* @__PURE__ */ new Set();
  function c(a) {
    if (g(i, a) && (i = a, r)) {
      const l = !o.length;
      for (const t of n)
        t[1](), o.push(t, i);
      if (l) {
        for (let t = 0; t < o.length; t += 2)
          o[t][0](o[t + 1]);
        o.length = 0;
      }
    }
  }
  function b(a) {
    c(a(
      /** @type {T} */
      i
    ));
  }
  function h(a, l = s) {
    const t = [a, l];
    return n.add(t), n.size === 1 && (r = e(c, b) || s), a(
      /** @type {T} */
      i
    ), () => {
      n.delete(t), n.size === 0 && r && (r(), r = null);
    };
  }
  return { set: c, update: b, subscribe: h };
}
function f(i) {
  let e;
  return p(i, (r) => e = r)(), e;
}
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (i) => f(globalThis.altchaI18n.store)[i],
  set: (i, e) => {
    Object.assign(f(globalThis.altchaI18n.store), {
      [i]: e
    }), globalThis.altchaI18n.store.set(f(globalThis.altchaI18n.store));
  },
  store: T({})
};
const I = {
  ariaLinkLabel: "Visita Altcha.org",
  enterCode: "Inserisci il codice",
  enterCodeAria: "Inserisci il codice che senti. Premi Spazio per riprodurre l'audio.",
  error: "Verifica fallita. Riprova più tardi.",
  expired: "Verifica scaduta. Riprova.",
  verificationRequired: "Verifica richiesta!",
  footer: 'Protetto da <a href="https://altcha.org/" target="_blank" aria-label="Visita Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Ottieni una sfida audio",
  label: "Non sono un robot",
  loading: "Caricamento...",
  reload: "Ricarica",
  verify: "Verifica",
  verified: "Verificato",
  verifying: "Verifica in corso...",
  waitAlert: "Verifica in corso... attendere."
};
globalThis.altchaI18n.set("it", I);
export {
  I as i18n
};
