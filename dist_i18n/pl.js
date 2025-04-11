const s = () => {
};
function h(e, i) {
  return e != e ? i == i : e !== i || e !== null && typeof e == "object" || typeof e == "function";
}
let u = !1;
function d(e) {
  var i = u;
  try {
    return u = !0, e();
  } finally {
    u = i;
  }
}
function p(e, i, n) {
  if (e == null)
    return i(void 0), s;
  const r = d(
    () => e.subscribe(
      i,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const o = [];
function w(e, i = s) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function l(a) {
    if (h(e, a) && (e = a, n)) {
      const c = !o.length;
      for (const t of r)
        t[1](), o.push(t, e);
      if (c) {
        for (let t = 0; t < o.length; t += 2)
          o[t][0](o[t + 1]);
        o.length = 0;
      }
    }
  }
  function f(a) {
    l(a(
      /** @type {T} */
      e
    ));
  }
  function g(a, c = s) {
    const t = [a, c];
    return r.add(t), r.size === 1 && (n = i(l, f) || s), a(
      /** @type {T} */
      e
    ), () => {
      r.delete(t), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: l, update: f, subscribe: g };
}
function b(e) {
  let i;
  return p(e, (n) => i = n)(), i;
}
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (e) => b(globalThis.altchaI18n.store)[e],
  set: (e, i) => {
    Object.assign(b(globalThis.altchaI18n.store), {
      [e]: i
    }), globalThis.altchaI18n.store.set(b(globalThis.altchaI18n.store));
  },
  store: w({})
};
const y = {
  ariaLinkLabel: "Odwiedź Altcha.org",
  enterCode: "Wprowadź kod",
  enterCodeAria: "Wpisz kod, który słyszysz. Naciśnij Spację, aby odtworzyć dźwięk.",
  error: "Weryfikacja nie powiodła się. Spróbuj ponownie później.",
  expired: "Weryfikacja wygasła. Spróbuj ponownie.",
  verificationRequired: "Wymagana weryfikacja!",
  footer: 'Chronione przez <a href="https://altcha.org/" target="_blank" aria-label="Odwiedź Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Pobierz zadanie dźwiękowe",
  label: "Nie jestem robotem",
  loading: "Ładowanie...",
  reload: "Odśwież",
  verify: "Zweryfikuj",
  verified: "Zweryfikowano",
  verifying: "Weryfikacja...",
  waitAlert: "Trwa weryfikacja... proszę czekać."
};
globalThis.altchaI18n.set("pl", y);
export {
  y as i18n
};
