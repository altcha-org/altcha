const l = () => {
};
function h(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
let u = !1;
function d(e) {
  var t = u;
  try {
    return u = !0, e();
  } finally {
    u = t;
  }
}
function p(e, t, n) {
  if (e == null)
    return t(void 0), l;
  const r = d(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const o = [];
function y(e, t = l) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function s(a) {
    if (h(e, a) && (e = a, n)) {
      const c = !o.length;
      for (const i of r)
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
    return r.add(i), r.size === 1 && (n = t(s, b) || l), a(
      /** @type {T} */
      e
    ), () => {
      r.delete(i), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: s, update: b, subscribe: g };
}
function f(e) {
  let t;
  return p(e, (n) => t = n)(), t;
}
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (e) => f(globalThis.altchaI18n.store)[e],
  set: (e, t) => {
    Object.assign(f(globalThis.altchaI18n.store), {
      [e]: t
    }), globalThis.altchaI18n.store.set(f(globalThis.altchaI18n.store));
  },
  store: y({})
};
const T = {
  ariaLinkLabel: "Visit Altcha.org",
  enterCode: "Enter code",
  enterCodeAria: "Enter code you hear. Press Space to play audio.",
  error: "Verification failed. Try again later.",
  expired: "Verification expired. Try again.",
  footer: 'Protected by <a href="https://altcha.org/" target="_blank" aria-label="Visit Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Get an audio challenge",
  label: "I'm not a robot",
  loading: "Loading...",
  reload: "Reload",
  verify: "Verify",
  verificationRequired: "Verification required!",
  verified: "Verified",
  verifying: "Verifying...",
  waitAlert: "Verifying... please wait."
};
globalThis.altchaI18n.set("en", T);
export {
  T as i18n
};
