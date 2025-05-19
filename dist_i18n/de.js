const u = () => {
};
function g(e, t) {
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
function p(e, t, n) {
  if (e == null)
    return t(void 0), u;
  const i = d(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return i.unsubscribe ? () => i.unsubscribe() : i;
}
const l = [];
function T(e, t = u) {
  let n = null;
  const i = /* @__PURE__ */ new Set();
  function o(s) {
    if (g(e, s) && (e = s, n)) {
      const a = !l.length;
      for (const r of i)
        r[1](), l.push(r, e);
      if (a) {
        for (let r = 0; r < l.length; r += 2)
          l[r][0](l[r + 1]);
        l.length = 0;
      }
    }
  }
  function f(s) {
    o(s(
      /** @type {T} */
      e
    ));
  }
  function h(s, a = u) {
    const r = [s, a];
    return i.add(r), i.size === 1 && (n = t(o, f) || u), s(
      /** @type {T} */
      e
    ), () => {
      i.delete(r), i.size === 0 && n && (n(), n = null);
    };
  }
  return { set: o, update: f, subscribe: h };
}
function b(e) {
  let t;
  return p(e, (n) => t = n)(), t;
}
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (e) => b(globalThis.altchaI18n.store)[e],
  set: (e, t) => {
    Object.assign(b(globalThis.altchaI18n.store), {
      [e]: t
    }), globalThis.altchaI18n.store.set(b(globalThis.altchaI18n.store));
  },
  store: T({})
};
const A = {
  ariaLinkLabel: "Besuche Altcha.org",
  enterCode: "Code eingeben",
  enterCodeAria: "Geben Sie den Code ein, den Sie hören. Drücken Sie die Leertaste, um die Audio abzuspielen.",
  error: "Überprüfung fehlgeschlagen. Bitte versuchen Sie es später erneut.",
  expired: "Überprüfung abgelaufen. Bitte versuchen Sie es erneut.",
  verificationRequired: "Überprüfung erforderlich!",
  footer: 'Geschützt durch <a href="https://altcha.org/" target="_blank" aria-label="Besuche Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Audio-Herausforderung anfordern",
  label: "Ich bin kein Roboter",
  loading: "Lade...",
  reload: "Neu laden",
  verify: "Überprüfen",
  verified: "Überprüft",
  verifying: "Wird überprüft...",
  waitAlert: "Überprüfung läuft... bitte warten."
};
globalThis.altchaI18n.set("de", A);
export {
  A as i18n
};
