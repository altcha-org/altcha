var Ae = Object.defineProperty;
var Ge = (t, e, n) => e in t ? Ae(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var x = (t, e, n) => (Ge(t, typeof e != "symbol" ? e + "" : e, n), n);
function Z() {
}
function de(t) {
  return t();
}
function ie() {
  return /* @__PURE__ */ Object.create(null);
}
function W(t) {
  t.forEach(de);
}
function ve(t) {
  return typeof t == "function";
}
function Se(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function Ue(t) {
  return Object.keys(t).length === 0;
}
function g(t, e) {
  t.appendChild(e);
}
function Ve(t, e, n) {
  const i = Me(t);
  if (!i.getElementById(e)) {
    const l = _("style");
    l.id = e, l.textContent = n, Fe(i, l);
  }
}
function Me(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : t.ownerDocument;
}
function Fe(t, e) {
  return g(
    /** @type {Document} */
    t.head || t,
    e
  ), e.sheet;
}
function R(t, e, n) {
  t.insertBefore(e, n || null);
}
function L(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function _(t) {
  return document.createElement(t);
}
function G(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function Oe(t) {
  return document.createTextNode(t);
}
function M() {
  return Oe(" ");
}
function K(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function c(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function Ye(t) {
  return Array.from(t.childNodes);
}
function le(t, e, n) {
  t.classList.toggle(e, !!n);
}
function Ze(t, e, { bubbles: n = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: n, cancelable: i });
}
function Be(t) {
  const e = {};
  return t.childNodes.forEach(
    /** @param {Element} node */
    (n) => {
      e[n.slot || "default"] = !0;
    }
  ), e;
}
let H;
function B(t) {
  H = t;
}
function ee() {
  if (!H)
    throw new Error("Function called outside component initialization");
  return H;
}
function He(t) {
  ee().$$.on_mount.push(t);
}
function We(t) {
  ee().$$.on_destroy.push(t);
}
function Pe() {
  const t = ee();
  return (e, n, { cancelable: i = !1 } = {}) => {
    const l = t.$$.callbacks[e];
    if (l) {
      const r = Ze(
        /** @type {string} */
        e,
        n,
        { cancelable: i }
      );
      return l.slice().forEach((s) => {
        s.call(t, r);
      }), !r.defaultPrevented;
    }
    return !0;
  };
}
const O = [], J = [];
let Y = [];
const oe = [], ge = /* @__PURE__ */ Promise.resolve();
let Q = !1;
function me() {
  Q || (Q = !0, ge.then(C));
}
function Te() {
  return me(), ge;
}
function q(t) {
  Y.push(t);
}
const z = /* @__PURE__ */ new Set();
let F = 0;
function C() {
  if (F !== 0)
    return;
  const t = H;
  do {
    try {
      for (; F < O.length; ) {
        const e = O[F];
        F++, B(e), Xe(e.$$);
      }
    } catch (e) {
      throw O.length = 0, F = 0, e;
    }
    for (B(null), O.length = 0, F = 0; J.length; )
      J.pop()();
    for (let e = 0; e < Y.length; e += 1) {
      const n = Y[e];
      z.has(n) || (z.add(n), n());
    }
    Y.length = 0;
  } while (O.length);
  for (; oe.length; )
    oe.pop()();
  Q = !1, z.clear(), B(t);
}
function Xe(t) {
  if (t.fragment !== null) {
    t.update(), W(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(q);
  }
}
function De(t) {
  const e = [], n = [];
  Y.forEach((i) => t.indexOf(i) === -1 ? e.push(i) : n.push(i)), n.forEach((i) => i()), Y = e;
}
const Ke = /* @__PURE__ */ new Set();
function ze(t, e) {
  t && t.i && (Ke.delete(t), t.i(e));
}
function Je(t, e, n) {
  const { fragment: i, after_update: l } = t.$$;
  i && i.m(e, n), q(() => {
    const r = t.$$.on_mount.map(de).filter(ve);
    t.$$.on_destroy ? t.$$.on_destroy.push(...r) : W(r), t.$$.on_mount = [];
  }), l.forEach(q);
}
function Qe(t, e) {
  const n = t.$$;
  n.fragment !== null && (De(n.after_update), W(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function qe(t, e) {
  t.$$.dirty[0] === -1 && (O.push(t), me(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function et(t, e, n, i, l, r, s = null, a = [-1]) {
  const f = H;
  B(t);
  const u = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: Z,
    not_equal: l,
    bound: ie(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: ie(),
    dirty: a,
    skip_bound: !1,
    root: e.target || f.$$.root
  };
  s && s(u.root);
  let N = !1;
  if (u.ctx = n ? n(t, e.props || {}, (y, j, ...I) => {
    const A = I.length ? I[0] : j;
    return u.ctx && l(u.ctx[y], u.ctx[y] = A) && (!u.skip_bound && u.bound[y] && u.bound[y](A), N && qe(t, y)), j;
  }) : [], u.update(), N = !0, W(u.before_update), u.fragment = i ? i(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const y = Ye(e.target);
      u.fragment && u.fragment.l(y), y.forEach(L);
    } else
      u.fragment && u.fragment.c();
    e.intro && ze(t.$$.fragment), Je(t, e.target, e.anchor), C();
  }
  B(f);
}
let we;
typeof HTMLElement == "function" && (we = class extends HTMLElement {
  constructor(e, n, i) {
    super();
    /** The Svelte component constructor */
    x(this, "$$ctor");
    /** Slots */
    x(this, "$$s");
    /** The Svelte component instance */
    x(this, "$$c");
    /** Whether or not the custom element is connected */
    x(this, "$$cn", !1);
    /** Component props data */
    x(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    x(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    x(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    x(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    x(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = e, this.$$s = n, i && this.attachShadow({ mode: "open" });
  }
  addEventListener(e, n, i) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(n), this.$$c) {
      const l = this.$$c.$on(e, n);
      this.$$l_u.set(n, l);
    }
    super.addEventListener(e, n, i);
  }
  removeEventListener(e, n, i) {
    if (super.removeEventListener(e, n, i), this.$$c) {
      const l = this.$$l_u.get(n);
      l && (l(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(r) {
        return () => {
          let s;
          return {
            c: function() {
              s = _("slot"), r !== "default" && c(s, "name", r);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(u, N) {
              R(u, s, N);
            },
            d: function(u) {
              u && L(s);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, i = Be(this);
      for (const r of this.$$s)
        r in i && (n[r] = [e(r)]);
      for (const r of this.attributes) {
        const s = this.$$g_p(r.name);
        s in this.$$d || (this.$$d[s] = T(s, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = new this.$$ctor({
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$scope: {
            ctx: []
          }
        }
      });
      const l = () => {
        this.$$r = !0;
        for (const r in this.$$p_d)
          if (this.$$d[r] = this.$$c.$$.ctx[this.$$c.$$.props[r]], this.$$p_d[r].reflect) {
            const s = T(
              r,
              this.$$d[r],
              this.$$p_d,
              "toAttribute"
            );
            s == null ? this.removeAttribute(this.$$p_d[r].attribute || r) : this.setAttribute(this.$$p_d[r].attribute || r, s);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(l), l();
      for (const r in this.$$l)
        for (const s of this.$$l[r]) {
          const a = this.$$c.$on(r, s);
          this.$$l_u.set(s, a);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(e, n, i) {
    var l;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = T(e, i, this.$$p_d, "toProp"), (l = this.$$c) == null || l.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      this.$$cn || (this.$$c.$destroy(), this.$$c = void 0);
    });
  }
  $$g_p(e) {
    return Object.keys(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === e || !this.$$p_d[n].attribute && n.toLowerCase() === e
    ) || e;
  }
});
function T(t, e, n, i) {
  var r;
  const l = (r = n[t]) == null ? void 0 : r.type;
  if (e = l === "Boolean" && typeof e != "boolean" ? e != null : e, !i || !n[t])
    return e;
  if (i === "toAttribute")
    switch (l) {
      case "Object":
      case "Array":
        return e == null ? null : JSON.stringify(e);
      case "Boolean":
        return e ? "" : null;
      case "Number":
        return e ?? null;
      default:
        return e;
    }
  else
    switch (l) {
      case "Object":
      case "Array":
        return e && JSON.parse(e);
      case "Boolean":
        return e;
      case "Number":
        return e != null ? +e : e;
      default:
        return e;
    }
}
function tt(t, e, n, i, l, r) {
  let s = class extends we {
    constructor() {
      super(t, n, l), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Object.keys(e).map(
        (a) => (e[a].attribute || a).toLowerCase()
      );
    }
  };
  return Object.keys(e).forEach((a) => {
    Object.defineProperty(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(f) {
        var u;
        f = T(a, f, e), this.$$d[a] = f, (u = this.$$c) == null || u.$set({ [a]: f });
      }
    });
  }), i.forEach((a) => {
    Object.defineProperty(s.prototype, a, {
      get() {
        var f;
        return (f = this.$$c) == null ? void 0 : f[a];
      }
    });
  }), r && (s = r(s)), t.element = /** @type {any} */
  s, s;
}
class nt {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    x(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    x(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Qe(this, 1), this.$destroy = Z;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!ve(n))
      return Z;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return i.push(n), () => {
      const l = i.indexOf(n);
      l !== -1 && i.splice(l, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !Ue(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const rt = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(rt);
const be = "KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2NvbnN0IHI9bmV3IFRleHRFbmNvZGVyO2Z1bmN0aW9uIGMoZSl7cmV0dXJuWy4uLm5ldyBVaW50OEFycmF5KGUpXS5tYXAobj0+bi50b1N0cmluZygxNikucGFkU3RhcnQoMiwiMCIpKS5qb2luKCIiKX1hc3luYyBmdW5jdGlvbiBsKGUsbixhKXtyZXR1cm4gYyhhd2FpdCBjcnlwdG8uc3VidGxlLmRpZ2VzdChhLnRvVXBwZXJDYXNlKCksci5lbmNvZGUoZStuKSkpfWFzeW5jIGZ1bmN0aW9uIGkoZSxuLGE9IlNIQS0yNTYiLG89MWU3KXtjb25zdCBzPURhdGUubm93KCk7Zm9yKGxldCB0PTA7dDw9bzt0KyspaWYoYXdhaXQgbChuLHQsYSk9PT1lKXJldHVybntudW1iZXI6dCx0b29rOkRhdGUubm93KCktc307cmV0dXJuIG51bGx9b25tZXNzYWdlPWFzeW5jIGU9Pntjb25zdHthbGc6bixjaGFsbGVuZ2U6YSxtYXg6byxzYWx0OnN9PWUuZGF0YXx8e307aWYoYSYmcyl7Y29uc3QgdD1hd2FpdCBpKGEscyxuLG8pO3NlbGYucG9zdE1lc3NhZ2UodCYmey4uLnQsd29ya2VyOiEwfSl9ZWxzZSBzZWxmLnBvc3RNZXNzYWdlKG51bGwpfX0pKCk7Cg==", it = (t) => Uint8Array.from(atob(t), (e) => e.charCodeAt(0)), se = typeof window < "u" && window.Blob && new Blob([it(be)], { type: "text/javascript;charset=utf-8" });
function lt(t) {
  let e;
  try {
    if (e = se && (window.URL || window.webkitURL).createObjectURL(se), !e)
      throw "";
    const n = new Worker(e, {
      name: t == null ? void 0 : t.name
    });
    return n.addEventListener("error", () => {
      (window.URL || window.webkitURL).revokeObjectURL(e);
    }), n;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + be,
      {
        name: t == null ? void 0 : t.name
      }
    );
  } finally {
    e && (window.URL || window.webkitURL).revokeObjectURL(e);
  }
}
const ot = 1e7, st = new TextEncoder();
function ct(t) {
  return [...new Uint8Array(t)].map((e) => e.toString(16).padStart(2, "0")).join("");
}
async function at(t = 1e5, e = "SHA-256") {
  const n = Date.now().toString(16), i = Math.round(Math.random() * t), l = await $e(n, i, e);
  return {
    algorithm: e,
    challenge: l,
    salt: n,
    signature: ""
  };
}
async function $e(t, e, n) {
  return ct(await crypto.subtle.digest(n.toUpperCase(), st.encode(t + e)));
}
async function ut(t, e, n = "SHA-256", i = ot) {
  const l = Date.now();
  for (let r = 0; r <= i; r++)
    if (await $e(e, r, n) === t)
      return {
        number: r,
        took: Date.now() - l
      };
  return null;
}
var p = /* @__PURE__ */ ((t) => (t.ERROR = "error", t.VERIFIED = "verified", t.VERIFYING = "verifying", t.UNVERIFIED = "unverified", t))(p || {});
function ft(t) {
  Ve(t, "svelte-1wvv726", ".altcha.svelte-1wvv726.svelte-1wvv726{background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 3px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);overflow:hidden;position:relative;text-align:left}.altcha.svelte-1wvv726.svelte-1wvv726:focus-within{border-color:var(--altcha-color-border-focus, currentColor)}.altcha-main.svelte-1wvv726.svelte-1wvv726{align-items:center;display:flex;gap:0.4rem;padding:0.7rem}.altcha-label.svelte-1wvv726.svelte-1wvv726{flex-grow:1}.altcha-label.svelte-1wvv726 label.svelte-1wvv726{cursor:pointer}.altcha-logo.svelte-1wvv726.svelte-1wvv726{color:currentColor;opacity:0.3}.altcha-logo.svelte-1wvv726.svelte-1wvv726:hover{opacity:1}.altcha-error.svelte-1wvv726.svelte-1wvv726{color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem}.altcha-footer.svelte-1wvv726.svelte-1wvv726{align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.4;padding:0.2rem 0.7rem;text-align:right}.altcha-footer.svelte-1wvv726.svelte-1wvv726:hover{opacity:1}.altcha-footer.svelte-1wvv726>.svelte-1wvv726:first-child{flex-grow:1}.altcha-footer.svelte-1wvv726 a{color:currentColor}.altcha-checkbox.svelte-1wvv726.svelte-1wvv726{display:flex;align-items:center;height:24px;width:24px}.altcha-checkbox.svelte-1wvv726 input.svelte-1wvv726{width:18px;height:18px;margin:0}.altcha-hidden.svelte-1wvv726.svelte-1wvv726{display:none}.altcha-spinner.svelte-1wvv726.svelte-1wvv726{animation:svelte-1wvv726-altcha-spinner 0.75s infinite linear;transform-origin:center}@keyframes svelte-1wvv726-altcha-spinner{100%{transform:rotate(360deg)}}");
}
function ce(t) {
  let e, n, i;
  return {
    c() {
      e = G("svg"), n = G("path"), i = G("path"), c(n, "d", "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"), c(n, "fill", "currentColor"), c(n, "opacity", ".25"), c(i, "d", "M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"), c(i, "fill", "currentColor"), c(i, "class", "altcha-spinner svelte-1wvv726"), c(e, "width", "24"), c(e, "height", "24"), c(e, "viewBox", "0 0 24 24"), c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(l, r) {
      R(l, e, r), g(e, n), g(e, i);
    },
    d(l) {
      l && L(e);
    }
  };
}
function ht(t) {
  let e, n = (
    /*_strings*/
    t[9].label + ""
  ), i;
  return {
    c() {
      e = _("label"), c(e, "for", i = /*name*/
      t[3] + "_checkbox"), c(e, "class", "svelte-1wvv726");
    },
    m(l, r) {
      R(l, e, r), e.innerHTML = n;
    },
    p(l, r) {
      r[0] & /*_strings*/
      512 && n !== (n = /*_strings*/
      l[9].label + "") && (e.innerHTML = n), r[0] & /*name*/
      8 && i !== (i = /*name*/
      l[3] + "_checkbox") && c(e, "for", i);
    },
    d(l) {
      l && L(e);
    }
  };
}
function dt(t) {
  let e, n = (
    /*_strings*/
    t[9].verifying + ""
  );
  return {
    c() {
      e = _("span");
    },
    m(i, l) {
      R(i, e, l), e.innerHTML = n;
    },
    p(i, l) {
      l[0] & /*_strings*/
      512 && n !== (n = /*_strings*/
      i[9].verifying + "") && (e.innerHTML = n);
    },
    d(i) {
      i && L(e);
    }
  };
}
function vt(t) {
  let e, n = (
    /*_strings*/
    t[9].verified + ""
  ), i, l;
  return {
    c() {
      e = _("span"), i = M(), l = _("input"), c(l, "type", "hidden"), c(
        l,
        "name",
        /*name*/
        t[3]
      ), l.value = /*payload*/
      t[4];
    },
    m(r, s) {
      R(r, e, s), e.innerHTML = n, R(r, i, s), R(r, l, s);
    },
    p(r, s) {
      s[0] & /*_strings*/
      512 && n !== (n = /*_strings*/
      r[9].verified + "") && (e.innerHTML = n), s[0] & /*name*/
      8 && c(
        l,
        "name",
        /*name*/
        r[3]
      ), s[0] & /*payload*/
      16 && (l.value = /*payload*/
      r[4]);
    },
    d(r) {
      r && (L(e), L(i), L(l));
    }
  };
}
function ae(t) {
  let e, n, i, l, r, s;
  return {
    c() {
      e = _("div"), n = _("a"), i = G("svg"), l = G("path"), r = G("path"), s = G("path"), c(l, "d", "M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z"), c(l, "fill", "currentColor"), c(r, "d", "M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z"), c(r, "fill", "currentColor"), c(s, "d", "M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z"), c(s, "fill", "currentColor"), c(i, "width", "22"), c(i, "height", "22"), c(i, "viewBox", "0 0 20 20"), c(i, "fill", "none"), c(i, "xmlns", "http://www.w3.org/2000/svg"), c(n, "href", _e), c(n, "target", "_blank"), c(n, "class", "altcha-logo svelte-1wvv726");
    },
    m(a, f) {
      R(a, e, f), g(e, n), g(n, i), g(i, l), g(i, r), g(i, s);
    },
    p: Z,
    d(a) {
      a && L(e);
    }
  };
}
function ue(t) {
  let e, n, i, l, r, s = (
    /*_strings*/
    t[9].error + ""
  );
  return {
    c() {
      e = _("div"), n = G("svg"), i = G("path"), l = M(), r = _("div"), c(i, "stroke-linecap", "round"), c(i, "stroke-linejoin", "round"), c(i, "d", "M6 18L18 6M6 6l12 12"), c(n, "width", "14"), c(n, "height", "14"), c(n, "xmlns", "http://www.w3.org/2000/svg"), c(n, "fill", "none"), c(n, "viewBox", "0 0 24 24"), c(n, "stroke-width", "1.5"), c(n, "stroke", "currentColor"), c(
        r,
        "title",
        /*error*/
        t[8]
      ), c(e, "class", "altcha-error svelte-1wvv726");
    },
    m(a, f) {
      R(a, e, f), g(e, n), g(n, i), g(e, l), g(e, r), r.innerHTML = s;
    },
    p(a, f) {
      f[0] & /*_strings*/
      512 && s !== (s = /*_strings*/
      a[9].error + "") && (r.innerHTML = s), f[0] & /*error*/
      256 && c(
        r,
        "title",
        /*error*/
        a[8]
      );
    },
    d(a) {
      a && L(e);
    }
  };
}
function fe(t) {
  let e, n, i = (
    /*_strings*/
    t[9].footer + ""
  );
  return {
    c() {
      e = _("div"), n = _("div"), c(n, "class", "svelte-1wvv726"), c(e, "class", "altcha-footer svelte-1wvv726");
    },
    m(l, r) {
      R(l, e, r), g(e, n), n.innerHTML = i;
    },
    p(l, r) {
      r[0] & /*_strings*/
      512 && i !== (i = /*_strings*/
      l[9].footer + "") && (n.innerHTML = i);
    },
    d(l) {
      l && L(e);
    }
  };
}
function gt(t) {
  let e, n, i, l, r, s, a, f, u, N, y, j, I, A, b = (
    /*state*/
    t[5] === p.VERIFYING && ce()
  );
  function S(h, w) {
    return (
      /*state*/
      h[5] === p.VERIFIED ? vt : (
        /*state*/
        h[5] === p.VERIFYING ? dt : ht
      )
    );
  }
  let V = S(t), k = V(t), v = (
    /*hidelogo*/
    t[2] !== !0 && ae()
  ), m = (
    /*error*/
    t[8] && ue(t)
  ), d = (
    /*_strings*/
    t[9].footer && /*hidefooter*/
    t[1] !== !0 && fe(t)
  );
  return {
    c() {
      e = _("div"), n = _("div"), b && b.c(), i = M(), l = _("div"), r = _("input"), f = M(), u = _("div"), k.c(), N = M(), v && v.c(), y = M(), m && m.c(), j = M(), d && d.c(), c(r, "type", "checkbox"), c(r, "id", s = /*name*/
      t[3] + "_checkbox"), r.required = a = /*auto*/
      t[0] !== "onsubmit", c(r, "class", "svelte-1wvv726"), c(l, "class", "altcha-checkbox svelte-1wvv726"), le(
        l,
        "altcha-hidden",
        /*state*/
        t[5] === p.VERIFYING
      ), c(u, "class", "altcha-label svelte-1wvv726"), c(n, "class", "altcha-main svelte-1wvv726"), c(e, "class", "altcha svelte-1wvv726"), c(
        e,
        "data-state",
        /*state*/
        t[5]
      );
    },
    m(h, w) {
      R(h, e, w), g(e, n), b && b.m(n, null), g(n, i), g(n, l), g(l, r), r.checked = /*checked*/
      t[6], g(n, f), g(n, u), k.m(u, null), g(n, N), v && v.m(n, null), g(e, y), m && m.m(e, null), g(e, j), d && d.m(e, null), t[23](e), I || (A = [
        K(
          r,
          "change",
          /*input_change_handler*/
          t[22]
        ),
        K(
          r,
          "change",
          /*onCheckedChange*/
          t[10]
        ),
        K(
          r,
          "invalid",
          /*onInvalid*/
          t[11]
        )
      ], I = !0);
    },
    p(h, w) {
      /*state*/
      h[5] === p.VERIFYING ? b || (b = ce(), b.c(), b.m(n, i)) : b && (b.d(1), b = null), w[0] & /*name*/
      8 && s !== (s = /*name*/
      h[3] + "_checkbox") && c(r, "id", s), w[0] & /*auto*/
      1 && a !== (a = /*auto*/
      h[0] !== "onsubmit") && (r.required = a), w[0] & /*checked*/
      64 && (r.checked = /*checked*/
      h[6]), w[0] & /*state*/
      32 && le(
        l,
        "altcha-hidden",
        /*state*/
        h[5] === p.VERIFYING
      ), V === (V = S(h)) && k ? k.p(h, w) : (k.d(1), k = V(h), k && (k.c(), k.m(u, null))), /*hidelogo*/
      h[2] !== !0 ? v ? v.p(h, w) : (v = ae(), v.c(), v.m(n, null)) : v && (v.d(1), v = null), /*error*/
      h[8] ? m ? m.p(h, w) : (m = ue(h), m.c(), m.m(e, j)) : m && (m.d(1), m = null), /*_strings*/
      h[9].footer && /*hidefooter*/
      h[1] !== !0 ? d ? d.p(h, w) : (d = fe(h), d.c(), d.m(e, null)) : d && (d.d(1), d = null), w[0] & /*state*/
      32 && c(
        e,
        "data-state",
        /*state*/
        h[5]
      );
    },
    i: Z,
    o: Z,
    d(h) {
      h && L(e), b && b.d(), k.d(), v && v.d(), m && m.d(), d && d.d(), t[23](null), I = !1, W(A);
    }
  };
}
const _e = "https://altcha.org/";
function he(t) {
  return JSON.parse(t);
}
function mt(t, e, n) {
  let i, l, r, { auto: s = void 0 } = e, { challengeurl: a = void 0 } = e, { challengejson: f = void 0 } = e, { debug: u = !1 } = e, { hidefooter: N = !1 } = e, { hidelogo: y = !1 } = e, { name: j = "altcha" } = e, { maxnumber: I = void 0 } = e, { mockerror: A = !1 } = e, { strings: b = void 0 } = e, { test: S = !1 } = e;
  const V = Pe(), k = ["SHA-256", "SHA-384", "SHA-512"];
  let v = !1, m, d = null, h = null, w = null, U = p.UNVERIFIED;
  We(() => {
    d && (d.removeEventListener("submit", te), d.removeEventListener("reset", ne), d = null);
  }), He(() => {
    E("mounted", "0.1.7"), S && E("using test mode"), s !== void 0 && E("auto", s), d = m.closest("form"), d && (d.addEventListener("submit", te), d.addEventListener("reset", ne)), s === "onload" && P();
  });
  function E(...o) {
    (u || o.some(($) => $ instanceof Error)) && console[o[0] instanceof Error ? "error" : "log"]("ALTCHA", ...o);
  }
  function te(o) {
    d && s === "onsubmit" && U === p.UNVERIFIED && (o.preventDefault(), o.stopPropagation(), P().then(() => {
      d == null || d.requestSubmit();
    }));
  }
  function ne() {
    X();
  }
  function pe(o, $) {
    return btoa(JSON.stringify({
      algorithm: o.algorithm,
      challenge: o.challenge,
      number: $.number,
      salt: o.salt,
      signature: o.signature,
      test: S ? !0 : void 0,
      took: $.took
    }));
  }
  function ye(o) {
    if (!o.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (o.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!k.includes(o.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${k.join(", ")}`);
    if (!o.challenge || o.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!o.salt || o.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function ke() {
    if (A)
      throw E("mocking error"), new Error("Mocked error.");
    if (i)
      return E("using provided json data"), i;
    if (S)
      return E("generating test challenge"), at();
    {
      if (!a)
        throw new Error("Attribute challengeurl not set.");
      E("fetching challenge from", a);
      const o = await fetch(a);
      if (o.status !== 200)
        throw new Error(`Server responded with ${o.status}.`);
      return o.json();
    }
  }
  async function Ee(o) {
    let $ = null;
    if ("Worker" in window) {
      try {
        $ = await Ce(o.challenge, o.salt, o.algorithm);
      } catch (D) {
        E(D);
      }
      if (($ == null ? void 0 : $.number) !== void 0)
        return { data: o, solution: $ };
    }
    return {
      data: o,
      solution: await ut(o.challenge, o.salt, o.algorithm, I)
    };
  }
  async function Ce(o, $, D) {
    const re = new lt();
    return new Promise((Ne) => {
      re.addEventListener("message", (je) => {
        Ne(je.data);
      }), re.postMessage({ alg: D, challenge: o, max: I, salt: $ });
    });
  }
  function xe() {
    [p.UNVERIFIED, p.ERROR].includes(U) ? P() : n(6, v = !0);
  }
  function Le() {
    U === p.VERIFYING && alert(r.waitAlert);
  }
  function X(o = p.UNVERIFIED) {
    n(6, v = !1), n(8, h = null), n(4, w = null), n(5, U = o);
  }
  async function P() {
    return X(p.VERIFYING), ke().then((o) => (ye(o), E("challenge", o), Ee(o))).then(({ data: o, solution: $ }) => {
      if (E("solution", $), ($ == null ? void 0 : $.number) !== void 0)
        E("verified"), n(5, U = p.VERIFIED), n(6, v = !0), n(4, w = pe(o, $)), E("payload", w), Te().then(() => {
          V("verified", { payload: w });
        });
      else
        throw new Error("Unexpected result returned.");
    }).catch((o) => {
      E(o), n(5, U = p.ERROR), n(6, v = !1), n(8, h = o);
    });
  }
  function Ie() {
    v = this.checked, n(6, v);
  }
  function Re(o) {
    J[o ? "unshift" : "push"](() => {
      m = o, n(7, m);
    });
  }
  return t.$$set = (o) => {
    "auto" in o && n(0, s = o.auto), "challengeurl" in o && n(12, a = o.challengeurl), "challengejson" in o && n(13, f = o.challengejson), "debug" in o && n(14, u = o.debug), "hidefooter" in o && n(1, N = o.hidefooter), "hidelogo" in o && n(2, y = o.hidelogo), "name" in o && n(3, j = o.name), "maxnumber" in o && n(15, I = o.maxnumber), "mockerror" in o && n(16, A = o.mockerror), "strings" in o && n(17, b = o.strings), "test" in o && n(18, S = o.test);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*challengejson*/
    8192 && (i = f ? he(f) : void 0), t.$$.dirty[0] & /*strings*/
    131072 && n(21, l = b ? he(b) : {}), t.$$.dirty[0] & /*parsedStrings*/
    2097152 && n(9, r = {
      error: "Verification failed. Try again later.",
      footer: `Protected by <a href="${_e}" target="_blank">ALTCHA</a>`,
      label: "I'm not a robot",
      verified: "Verified",
      verifying: "Verifying...",
      waitAlert: "Verifying... please wait.",
      ...l
    }), t.$$.dirty[0] & /*payload, state*/
    48 && V("statechange", { payload: w, state: U });
  }, [
    s,
    N,
    y,
    j,
    w,
    U,
    v,
    m,
    h,
    r,
    xe,
    Le,
    a,
    f,
    u,
    I,
    A,
    b,
    S,
    X,
    P,
    l,
    Ie,
    Re
  ];
}
class wt extends nt {
  constructor(e) {
    super(), et(
      this,
      e,
      mt,
      gt,
      Se,
      {
        auto: 0,
        challengeurl: 12,
        challengejson: 13,
        debug: 14,
        hidefooter: 1,
        hidelogo: 2,
        name: 3,
        maxnumber: 15,
        mockerror: 16,
        strings: 17,
        test: 18,
        reset: 19,
        verify: 20
      },
      ft,
      [-1, -1]
    );
  }
  get auto() {
    return this.$$.ctx[0];
  }
  set auto(e) {
    this.$$set({ auto: e }), C();
  }
  get challengeurl() {
    return this.$$.ctx[12];
  }
  set challengeurl(e) {
    this.$$set({ challengeurl: e }), C();
  }
  get challengejson() {
    return this.$$.ctx[13];
  }
  set challengejson(e) {
    this.$$set({ challengejson: e }), C();
  }
  get debug() {
    return this.$$.ctx[14];
  }
  set debug(e) {
    this.$$set({ debug: e }), C();
  }
  get hidefooter() {
    return this.$$.ctx[1];
  }
  set hidefooter(e) {
    this.$$set({ hidefooter: e }), C();
  }
  get hidelogo() {
    return this.$$.ctx[2];
  }
  set hidelogo(e) {
    this.$$set({ hidelogo: e }), C();
  }
  get name() {
    return this.$$.ctx[3];
  }
  set name(e) {
    this.$$set({ name: e }), C();
  }
  get maxnumber() {
    return this.$$.ctx[15];
  }
  set maxnumber(e) {
    this.$$set({ maxnumber: e }), C();
  }
  get mockerror() {
    return this.$$.ctx[16];
  }
  set mockerror(e) {
    this.$$set({ mockerror: e }), C();
  }
  get strings() {
    return this.$$.ctx[17];
  }
  set strings(e) {
    this.$$set({ strings: e }), C();
  }
  get test() {
    return this.$$.ctx[18];
  }
  set test(e) {
    this.$$set({ test: e }), C();
  }
  get reset() {
    return this.$$.ctx[19];
  }
  get verify() {
    return this.$$.ctx[20];
  }
}
customElements.define("altcha-widget", tt(wt, { auto: {}, challengeurl: {}, challengejson: {}, debug: { type: "Boolean" }, hidefooter: { type: "Boolean" }, hidelogo: { type: "Boolean" }, name: {}, maxnumber: {}, mockerror: { type: "Boolean" }, strings: {}, test: { type: "Boolean" } }, [], ["reset", "verify"], !1));
export {
  wt as Altcha
};
