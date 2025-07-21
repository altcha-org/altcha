const a = () => {
};
function f(n, i) {
  return n != n ? i == i : n !== i || n !== null && typeof n == "object" || typeof n == "function";
}
let c = !1;
function g(n) {
  var i = c;
  try {
    return c = !0, n();
  } finally {
    c = i;
  }
}
function T(n, i, e) {
  if (n == null)
    return i(void 0), a;
  const l = g(
    () => n.subscribe(
      i,
      // @ts-expect-error
      e
    )
  );
  return l.unsubscribe ? () => l.unsubscribe() : l;
}
const s = [];
function q(n, i = a) {
  let e = null;
  const l = /* @__PURE__ */ new Set();
  function o(r) {
    if (f(n, r) && (n = r, e)) {
      const u = !s.length;
      for (const t of l)
        t[1](), s.push(t, n);
      if (u) {
        for (let t = 0; t < s.length; t += 2)
          s[t][0](s[t + 1]);
        s.length = 0;
      }
    }
  }
  function b(r) {
    o(r(
      /** @type {T} */
      n
    ));
  }
  function h(r, u = a) {
    const t = [r, u];
    return l.add(t), l.size === 1 && (e = i(o, b) || a), r(
      /** @type {T} */
      n
    ), () => {
      l.delete(t), l.size === 0 && e && (e(), e = null);
    };
  }
  return { set: o, update: b, subscribe: h };
}
function d(n) {
  let i;
  return T(n, (e) => i = e)(), i;
}
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (n) => d(globalThis.altchaI18n.store)[n],
  set: (n, i) => {
    Object.assign(d(globalThis.altchaI18n.store), {
      [n]: i
    }), globalThis.altchaI18n.store.set(d(globalThis.altchaI18n.store));
  },
  store: q({})
};
const y = {
  ariaLinkLabel: "Altcha.org saytına daxil olun",
  enterCode: "Kodu daxil edin",
  enterCodeAria: "Eşitdiyiniz kodu daxil edin. Səsi dinləmək üçün Boşluq düyməsinə basın.",
  error: "Təsdiqləmə uğursuz oldu. Daha sonra yenidən cəhd edin.",
  expired: "Təsdiqləmə vaxtı bitdi. Yenidən cəhd edin.",
  footer: 'Qorunur <a href="https://altcha.org/" target="_blank" aria-label="Altcha.org saytına daxil olun">ALTCHA</a> tərəfindən',
  getAudioChallenge: "Audio tapşırıq alın",
  label: "Mən robot deyiləm",
  loading: "Yüklənir...",
  reload: "Yenilə",
  verify: "Təsdiqlə",
  verificationRequired: "Təsdiqləmə tələb olunur!",
  verified: "Təsdiqləndi",
  verifying: "Təsdiqlənir...",
  waitAlert: "Təsdiqlənir... zəhmət olmasa gözləyin."
};
globalThis.altchaI18n.set("az", y);
export {
  y as i18n
};
