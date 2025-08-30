const s = () => {
};
function h(i, r) {
  return i != i ? r == r : i !== r || i !== null && typeof i == "object" || typeof i == "function";
}
let c = !1;
function k(i) {
  var r = c;
  try {
    return c = !0, i();
  } finally {
    c = r;
  }
}
function d(i, r, t) {
  if (i == null)
    return r(void 0), s;
  const n = k(
    () => i.subscribe(
      r,
      // @ts-expect-error
      t
    )
  );
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const a = [];
function p(i, r = s) {
  let t = null;
  const n = /* @__PURE__ */ new Set();
  function u(o) {
    if (h(i, o) && (i = o, t)) {
      const l = !a.length;
      for (const e of n)
        e[1](), a.push(e, i);
      if (l) {
        for (let e = 0; e < a.length; e += 2)
          a[e][0](a[e + 1]);
        a.length = 0;
      }
    }
  }
  function b(o) {
    u(o(
      /** @type {T} */
      i
    ));
  }
  function g(o, l = s) {
    const e = [o, l];
    return n.add(e), n.size === 1 && (t = r(u, b) || s), o(
      /** @type {T} */
      i
    ), () => {
      n.delete(e), n.size === 0 && t && (t(), t = null);
    };
  }
  return { set: u, update: b, subscribe: g };
}
function f(i) {
  let r;
  return d(i, (t) => r = t)(), r;
}
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (i) => f(globalThis.altchaI18n.store)[i],
  set: (i, r) => {
    Object.assign(f(globalThis.altchaI18n.store), {
      [i]: r
    }), globalThis.altchaI18n.store.set(f(globalThis.altchaI18n.store));
  },
  store: p({})
};
const T = {
  ariaLinkLabel: "Vizitoni Altcha.org",
  enterCode: "Fut kodin",
  enterCodeAria: "Fut kodin që dëgjon. Shtypni Hapësirë për të luajtur audio.",
  error: "Verifikimi dështoi. Provoni përsëri më vonë.",
  expired: "Verifikimi ka skaduar. Provoni përsëri.",
  footer: 'I mbrojtur nga <a href="https://altcha.org/" target="_blank" aria-label="Vizitoni Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Merr një sfidë audio",
  label: "Unë nuk jam një robot",
  loading: "Duke u ngarkuar...",
  reload: "Ringarko",
  verify: "Verifiko",
  verificationRequired: "Kërkohet verifikimi!",
  verified: "I verifikuar",
  verifying: "Duke verifikuar...",
  waitAlert: "Duke verifikuar... ju lutem prisni."
};
globalThis.altchaI18n.set("sq", T);
export {
  T as i18n
};
