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
function j(e, i, n) {
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
const l = [];
function T(e, i = s) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function a(o) {
    if (h(e, o) && (e = o, n)) {
      const u = !l.length;
      for (const t of r)
        t[1](), l.push(t, e);
      if (u) {
        for (let t = 0; t < l.length; t += 2)
          l[t][0](l[t + 1]);
        l.length = 0;
      }
    }
  }
  function f(o) {
    a(o(
      /** @type {T} */
      e
    ));
  }
  function g(o, u = s) {
    const t = [o, u];
    return r.add(t), r.size === 1 && (n = i(a, f) || s), o(
      /** @type {T} */
      e
    ), () => {
      r.delete(t), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: a, update: f, subscribe: g };
}
function b(e) {
  let i;
  return j(e, (n) => i = n)(), i;
}
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (e) => b(globalThis.altchaI18n.store)[e],
  set: (e, i) => {
    Object.assign(b(globalThis.altchaI18n.store), {
      [e]: i
    }), globalThis.altchaI18n.store.set(b(globalThis.altchaI18n.store));
  },
  store: T({})
};
const k = {
  ariaLinkLabel: "Ṣe abẹwo si Altcha.org",
  enterCode: "Tẹ koodu sii",
  enterCodeAria: "Tẹ koodu ti o ngbọ sii. Tẹ Space lati ṣe ohun orin.",
  error: "Ìdájọ́kòwò kò ṣẹ́ṣe. Gbiyanju lẹẹkansi ni ọjọ́ iwájú.",
  expired: "Ìdájọ́kòwò ti pari. Gbiyanju lẹẹkansi.",
  footer: 'Ti wa ni ààbò nipasẹ <a href="https://altcha.org/" target="_blank" aria-label="Ṣe abẹwo si Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Gba ìjàdú ohùn",
  label: "Emi kii ṣe ẹrọ",
  loading: "Ó ń gbé sílẹ̀...",
  reload: "Tún gbé wọlé",
  verify: "Ṣàdájọ́",
  verificationRequired: "Ìdájọ́kòwò ni a nílò!",
  verified: "A ti dájọ́",
  verifying: "Ó ń ṣàdájọ́...",
  waitAlert: "Ó ń ṣàdájọ́... ẹ jọ̀ọ́ ẹ duro."
};
globalThis.altchaI18n.set("yo", k);
export {
  k as i18n
};
