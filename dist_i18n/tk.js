const s = () => {
};
function y(e, a) {
  return e != e ? a == a : e !== a || e !== null && typeof e == "object" || typeof e == "function";
}
let c = !1;
function f(e) {
  var a = c;
  try {
    return c = !0, e();
  } finally {
    c = a;
  }
}
function d(e, a, r) {
  if (e == null)
    return a(void 0), s;
  const t = f(
    () => e.subscribe(
      a,
      // @ts-expect-error
      r
    )
  );
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
const l = [];
function k(e, a = s) {
  let r = null;
  const t = /* @__PURE__ */ new Set();
  function o(i) {
    if (y(e, i) && (e = i, r)) {
      const u = !l.length;
      for (const n of t)
        n[1](), l.push(n, e);
      if (u) {
        for (let n = 0; n < l.length; n += 2)
          l[n][0](l[n + 1]);
        l.length = 0;
      }
    }
  }
  function g(i) {
    o(i(
      /** @type {T} */
      e
    ));
  }
  function h(i, u = s) {
    const n = [i, u];
    return t.add(n), t.size === 1 && (r = a(o, g) || s), i(
      /** @type {T} */
      e
    ), () => {
      t.delete(n), t.size === 0 && r && (r(), r = null);
    };
  }
  return { set: o, update: g, subscribe: h };
}
function b(e) {
  let a;
  return d(e, (r) => a = r)(), a;
}
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (e) => b(globalThis.altchaI18n.store)[e],
  set: (e, a) => {
    Object.assign(b(globalThis.altchaI18n.store), {
      [e]: a
    }), globalThis.altchaI18n.store.set(b(globalThis.altchaI18n.store));
  },
  store: k({})
};
const p = {
  ariaLinkLabel: "Altcha.org sahypasyna giriň",
  enterCode: "Kody giriziň",
  enterCodeAria: "Eşiden kodyňyzy giriziň. Sesli görkezmäni diňlemek üçin Space basyň.",
  error: "Barlamak şowsuz boldy. Has soňrak synanyşyň.",
  expired: "Barlamanyň möhleti gutardy. Gaýtadan synanyşyň.",
  footer: 'Goralan <a href="https://altcha.org/" target="_blank" aria-label="Altcha.org sahypasyna giriň">ALTCHA</a> tarapyndan',
  getAudioChallenge: "Sesli tabşyryk alyň",
  label: "Men robot däl",
  loading: "Ýüklenýär...",
  reload: "Täzeden ýükle",
  verify: "Barla",
  verificationRequired: "Barlamak zerurdyr!",
  verified: "Barlandy",
  verifying: "Barlanýar...",
  waitAlert: "Barlanýar... garaşyň."
};
globalThis.altchaI18n.set("tk", p);
export {
  p as i18n
};
