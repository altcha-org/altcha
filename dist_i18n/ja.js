const o = () => {
};
function g(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
let c = !1;
function d(t) {
  var e = c;
  try {
    return c = !0, t();
  } finally {
    c = e;
  }
}
function p(t, e, r) {
  if (t == null)
    return e(void 0), o;
  const i = d(
    () => t.subscribe(
      e,
      // @ts-expect-error
      r
    )
  );
  return i.unsubscribe ? () => i.unsubscribe() : i;
}
const s = [];
function T(t, e = o) {
  let r = null;
  const i = /* @__PURE__ */ new Set();
  function a(l) {
    if (g(t, l) && (t = l, r)) {
      const u = !s.length;
      for (const n of i)
        n[1](), s.push(n, t);
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
      t
    ));
  }
  function h(l, u = o) {
    const n = [l, u];
    return i.add(n), i.size === 1 && (r = e(a, f) || o), l(
      /** @type {T} */
      t
    ), () => {
      i.delete(n), i.size === 0 && r && (r(), r = null);
    };
  }
  return { set: a, update: f, subscribe: h };
}
function b(t) {
  let e;
  return p(t, (r) => e = r)(), e;
}
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (t) => b(globalThis.altchaI18n.store)[t],
  set: (t, e) => {
    Object.assign(b(globalThis.altchaI18n.store), {
      [t]: e
    }), globalThis.altchaI18n.store.set(b(globalThis.altchaI18n.store));
  },
  store: T({})
};
const A = {
  ariaLinkLabel: "Altcha.orgを訪問",
  enterCode: "コードを入力",
  enterCodeAria: "聞こえるコードを入力してください。スペースキーを押して音声を再生します。",
  error: "認証に失敗しました。後でもう一度試してください。",
  expired: "認証が期限切れです。再試行してください。",
  verificationRequired: "認証が必要です！",
  footer: '保護されています <a href="https://altcha.org/" target="_blank" aria-label="Altcha.orgを訪問">ALTCHA</a>',
  getAudioChallenge: "音声チャレンジを取得",
  label: "私はロボットではありません",
  loading: "読み込み中...",
  reload: "再読み込み",
  verify: "確認",
  verified: "確認済み",
  verifying: "確認中...",
  waitAlert: "確認中...少々お待ちください。"
};
globalThis.altchaI18n.set("ja", A);
export {
  A as i18n
};
