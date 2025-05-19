const s = () => {
};
function h(e, i) {
  return e != e ? i == i : e !== i || e !== null && typeof e == "object" || typeof e == "function";
}
let c = !1;
function d(e) {
  var i = c;
  try {
    return c = !0, e();
  } finally {
    c = i;
  }
}
function k(e, i, n) {
  if (e == null)
    return i(void 0), s;
  const t = d(
    () => e.subscribe(
      i,
      // @ts-expect-error
      n
    )
  );
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
const l = [];
function p(e, i = s) {
  let n = null;
  const t = /* @__PURE__ */ new Set();
  function u(r) {
    if (h(e, r) && (e = r, n)) {
      const o = !l.length;
      for (const a of t)
        a[1](), l.push(a, e);
      if (o) {
        for (let a = 0; a < l.length; a += 2)
          l[a][0](l[a + 1]);
        l.length = 0;
      }
    }
  }
  function b(r) {
    u(r(
      /** @type {T} */
      e
    ));
  }
  function f(r, o = s) {
    const a = [r, o];
    return t.add(a), t.size === 1 && (n = i(u, b) || s), r(
      /** @type {T} */
      e
    ), () => {
      t.delete(a), t.size === 0 && n && (n(), n = null);
    };
  }
  return { set: u, update: b, subscribe: f };
}
function g(e) {
  let i;
  return k(e, (n) => i = n)(), i;
}
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (e) => g(globalThis.altchaI18n.store)[e],
  set: (e, i) => {
    Object.assign(g(globalThis.altchaI18n.store), {
      [e]: i
    }), globalThis.altchaI18n.store.set(g(globalThis.altchaI18n.store));
  },
  store: p({})
};
const T = {
  ariaLinkLabel: "Kunjungi Altcha.org",
  enterCode: "Masukkan kode",
  enterCodeAria: "Masukkan kode yang Anda dengar. Tekan Spasi untuk memutar audio.",
  error: "Verifikasi gagal. Coba lagi nanti.",
  expired: "Verifikasi telah kedaluwarsa. Coba lagi.",
  verificationRequired: "Verifikasi diperlukan!",
  footer: 'Dilindungi oleh <a href="https://altcha.org/" target="_blank" aria-label="Kunjungi Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Dapatkan tantangan audio",
  label: "Saya bukan robot",
  loading: "Memuat...",
  reload: "Muat ulang",
  verify: "Verifikasi",
  verified: "Terverifikasi",
  verifying: "Memverifikasi...",
  waitAlert: "Memverifikasi... harap tunggu."
};
globalThis.altchaI18n.set("id", T);
export {
  T as i18n
};
