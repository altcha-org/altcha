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
function p(e, t, r) {
  if (e == null)
    return t(void 0), a;
  const n = d(
    () => e.subscribe(
      t,
      // @ts-expect-error
      r
    )
  );
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const l = [];
function k(e, t = a) {
  let r = null;
  const n = /* @__PURE__ */ new Set();
  function s(o) {
    if (h(e, o) && (e = o, r)) {
      const u = !l.length;
      for (const i of n)
        i[1](), l.push(i, e);
      if (u) {
        for (let i = 0; i < l.length; i += 2)
          l[i][0](l[i + 1]);
        l.length = 0;
      }
    }
  }
  function f(o) {
    s(o(
      /** @type {T} */
      e
    ));
  }
  function g(o, u = a) {
    const i = [o, u];
    return n.add(i), n.size === 1 && (r = t(s, f) || a), o(
      /** @type {T} */
      e
    ), () => {
      n.delete(i), n.size === 0 && r && (r(), r = null);
    };
  }
  return { set: s, update: f, subscribe: g };
}
function b(e) {
  let t;
  return p(e, (r) => t = r)(), t;
}
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (e) => b(globalThis.altchaI18n.store)[e],
  set: (e, t) => {
    Object.assign(b(globalThis.altchaI18n.store), {
      [e]: t
    }), globalThis.altchaI18n.store.set(b(globalThis.altchaI18n.store));
  },
  store: k({})
};
const T = {
  ariaLinkLabel: "Bezoek Altcha.org",
  enterCode: "Voer code in",
  enterCodeAria: "Voer de code in die je hoort. Druk op Spatie om de audio af te spelen.",
  error: "Verificatie mislukt. Probeer het later opnieuw.",
  expired: "Verificatie verlopen. Probeer het opnieuw.",
  verificationRequired: "Verificatie vereist!",
  footer: 'Beschermd door <a href="https://altcha.org/" target="_blank" aria-label="Bezoek Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Audio-uitdaging ontvangen",
  label: "Ik ben geen robot",
  loading: "Laden...",
  reload: "Herladen",
  verify: "Verifiëren",
  verified: "Geverifieerd",
  verifying: "Bezig met verifiëren...",
  waitAlert: "Bezig met verifiëren... even geduld a.u.b."
};
globalThis.altchaI18n.set("nl", T);
export {
  T as i18n
};
