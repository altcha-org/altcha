const o = () => {
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
function p(e, t, r) {
  if (e == null)
    return t(void 0), o;
  const i = d(
    () => e.subscribe(
      t,
      // @ts-expect-error
      r
    )
  );
  return i.unsubscribe ? () => i.unsubscribe() : i;
}
const s = [];
function T(e, t = o) {
  let r = null;
  const i = /* @__PURE__ */ new Set();
  function a(l) {
    if (g(e, l) && (e = l, r)) {
      const u = !s.length;
      for (const n of i)
        n[1](), s.push(n, e);
      if (u) {
        for (let n = 0; n < s.length; n += 2)
          s[n][0](s[n + 1]);
        s.length = 0;
      }
    }
  }
  function f(l) {
    a(l(
      /** @type {T} */
      e
    ));
  }
  function h(l, u = o) {
    const n = [l, u];
    return i.add(n), i.size === 1 && (r = t(a, f) || o), l(
      /** @type {T} */
      e
    ), () => {
      i.delete(n), i.size === 0 && r && (r(), r = null);
    };
  }
  return { set: a, update: f, subscribe: h };
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
  store: T({})
};
const A = {
  ariaLinkLabel: "Altcha.org ይጎብኙ",
  enterCode: "ኮድ አስገባ",
  enterCodeAria: "የሚሰማዎትን ኮድ ያስገቡ። ድምጽ ለመጫወት Space ን ይጫኑ።",
  error: "ማረጋገጫ አልተሳካም። በኋላ ላይ እንደገና ይሞክሩ።",
  expired: "ማረጋገጫው ጊዜው አልፏል። እንደገና ይሞክሩ።",
  footer: 'በ <a href="https://altcha.org/" target="_blank" aria-label="Altcha.org ይጎብኙ">ALTCHA</a> የተጠበቀ',
  getAudioChallenge: "የድምጽ ፈተና ያግኙ",
  label: "እኔ ሮቦት አይደለሁም",
  loading: "በመጫን ላይ...",
  reload: "እንደገና ጫን",
  verify: "አረጋግጥ",
  verificationRequired: "ማረጋገጫ ያስፈልጋል!",
  verified: "ተረጋግጧል",
  verifying: "በማረጋገጥ ላይ...",
  waitAlert: "በማረጋገጥ ላይ... እባክዎ ይጠብቁ።"
};
globalThis.altchaI18n.set("am", A);
export {
  A as i18n
};
