const o = () => {
};
function f(t, n) {
  return t != t ? n == n : t !== n || t !== null && typeof t == "object" || typeof t == "function";
}
let a = !1;
function p(t) {
  var n = a;
  try {
    return a = !0, t();
  } finally {
    a = n;
  }
}
function d(t, n, i) {
  if (t == null)
    return n(void 0), o;
  const r = p(
    () => t.subscribe(
      n,
      // @ts-expect-error
      i
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const c = [];
function T(t, n = o) {
  let i = null;
  const r = /* @__PURE__ */ new Set();
  function s(l) {
    if (f(t, l) && (t = l, i)) {
      const h = !c.length;
      for (const e of r)
        e[1](), c.push(e, t);
      if (h) {
        for (let e = 0; e < c.length; e += 2)
          c[e][0](c[e + 1]);
        c.length = 0;
      }
    }
  }
  function b(l) {
    s(l(
      /** @type {T} */
      t
    ));
  }
  function g(l, h = o) {
    const e = [l, h];
    return r.add(e), r.size === 1 && (i = n(s, b) || o), l(
      /** @type {T} */
      t
    ), () => {
      r.delete(e), r.size === 0 && i && (i(), i = null);
    };
  }
  return { set: s, update: b, subscribe: g };
}
function u(t) {
  let n;
  return d(t, (i) => n = i)(), n;
}
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (t) => u(globalThis.altchaI18n.store)[t],
  set: (t, n) => {
    Object.assign(u(globalThis.altchaI18n.store), {
      [t]: n
    }), globalThis.altchaI18n.store.set(u(globalThis.altchaI18n.store));
  },
  store: T({})
};
const m = {
  ariaLinkLabel: "Truy cập Altcha.org",
  enterCode: "Nhập mã",
  enterCodeAria: "Nhập mã bạn nghe được. Nhấn Phím cách để phát âm thanh.",
  error: "Xác minh thất bại. Vui lòng thử lại sau.",
  expired: "Xác minh đã hết hạn. Vui lòng thử lại.",
  verificationRequired: "Yêu cầu xác minh!",
  footer: 'Được bảo vệ bởi <a href="https://altcha.org/" target="_blank" aria-label="Truy cập Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Nhận thử thách âm thanh",
  label: "Tôi không phải là robot",
  loading: "Đang tải...",
  reload: "Tải lại",
  verify: "Xác minh",
  verified: "Đã xác minh",
  verifying: "Đang xác minh...",
  waitAlert: "Đang xác minh... vui lòng chờ."
};
globalThis.altchaI18n.set("vi", m);
export {
  m as i18n
};
