var Ae = Object.defineProperty;
var Ge = (t, e, n) => e in t ? Ae(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var x = (t, e, n) => (Ge(t, typeof e != "symbol" ? e + "" : e, n), n);
function Z() {
}
function de(t) {
  return t();
}
function oe() {
  return /* @__PURE__ */ Object.create(null);
}
function W(t) {
  t.forEach(de);
}
function ge(t) {
  return typeof t == "function";
}
function Se(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function Ue(t) {
  return Object.keys(t).length === 0;
}
function b(t, e) {
  t.appendChild(e);
}
function Ve(t, e, n) {
  const o = Me(t);
  if (!o.getElementById(e)) {
    const i = w("style");
    i.id = e, i.textContent = n, Fe(o, i);
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
  return b(
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
function w(t) {
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
function K(t, e, n, o) {
  return t.addEventListener(e, n, o), () => t.removeEventListener(e, n, o);
}
function c(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function Ye(t) {
  return Array.from(t.childNodes);
}
function ie(t, e, n) {
  t.classList.toggle(e, !!n);
}
function Ze(t, e, { bubbles: n = !1, cancelable: o = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: n, cancelable: o });
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
  return (e, n, { cancelable: o = !1 } = {}) => {
    const i = t.$$.callbacks[e];
    if (i) {
      const r = Ze(
        /** @type {string} */
        e,
        n,
        { cancelable: o }
      );
      return i.slice().forEach((s) => {
        s.call(t, r);
      }), !r.defaultPrevented;
    }
    return !0;
  };
}
const O = [], J = [];
let Y = [];
const le = [], be = /* @__PURE__ */ Promise.resolve();
let Q = !1;
function me() {
  Q || (Q = !0, be.then(C));
}
function Te() {
  return me(), be;
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
  for (; le.length; )
    le.pop()();
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
  Y.forEach((o) => t.indexOf(o) === -1 ? e.push(o) : n.push(o)), n.forEach((o) => o()), Y = e;
}
const Ke = /* @__PURE__ */ new Set();
function ze(t, e) {
  t && t.i && (Ke.delete(t), t.i(e));
}
function Je(t, e, n) {
  const { fragment: o, after_update: i } = t.$$;
  o && o.m(e, n), q(() => {
    const r = t.$$.on_mount.map(de).filter(ge);
    t.$$.on_destroy ? t.$$.on_destroy.push(...r) : W(r), t.$$.on_mount = [];
  }), i.forEach(q);
}
function Qe(t, e) {
  const n = t.$$;
  n.fragment !== null && (De(n.after_update), W(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function qe(t, e) {
  t.$$.dirty[0] === -1 && (O.push(t), me(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function et(t, e, n, o, i, r, s = null, a = [-1]) {
  const f = H;
  B(t);
  const u = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: Z,
    not_equal: i,
    bound: oe(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: oe(),
    dirty: a,
    skip_bound: !1,
    root: e.target || f.$$.root
  };
  s && s(u.root);
  let N = !1;
  if (u.ctx = n ? n(t, e.props || {}, (y, j, ...I) => {
    const A = I.length ? I[0] : j;
    return u.ctx && i(u.ctx[y], u.ctx[y] = A) && (!u.skip_bound && u.bound[y] && u.bound[y](A), N && qe(t, y)), j;
  }) : [], u.update(), N = !0, W(u.before_update), u.fragment = o ? o(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const y = Ye(e.target);
      u.fragment && u.fragment.l(y), y.forEach(L);
    } else
      u.fragment && u.fragment.c();
    e.intro && ze(t.$$.fragment), Je(t, e.target, e.anchor), C();
  }
  B(f);
}
let ve;
typeof HTMLElement == "function" && (ve = class extends HTMLElement {
  constructor(e, n, o) {
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
    this.$$ctor = e, this.$$s = n, o && this.attachShadow({ mode: "open" });
  }
  addEventListener(e, n, o) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(n), this.$$c) {
      const i = this.$$c.$on(e, n);
      this.$$l_u.set(n, i);
    }
    super.addEventListener(e, n, o);
  }
  removeEventListener(e, n, o) {
    if (super.removeEventListener(e, n, o), this.$$c) {
      const i = this.$$l_u.get(n);
      i && (i(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(r) {
        return () => {
          let s;
          return {
            c: function() {
              s = w("slot"), r !== "default" && c(s, "name", r);
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
      const n = {}, o = Be(this);
      for (const r of this.$$s)
        r in o && (n[r] = [e(r)]);
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
      const i = () => {
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
      this.$$c.$$.after_update.push(i), i();
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
  attributeChangedCallback(e, n, o) {
    var i;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = T(e, o, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [e]: this.$$d[e] }));
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
function T(t, e, n, o) {
  var r;
  const i = (r = n[t]) == null ? void 0 : r.type;
  if (e = i === "Boolean" && typeof e != "boolean" ? e != null : e, !o || !n[t])
    return e;
  if (o === "toAttribute")
    switch (i) {
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
    switch (i) {
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
function tt(t, e, n, o, i, r) {
  let s = class extends ve {
    constructor() {
      super(t, n, i), this.$$p_d = e;
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
  }), o.forEach((a) => {
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
    if (!ge(n))
      return Z;
    const o = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return o.push(n), () => {
      const i = o.indexOf(n);
      i !== -1 && o.splice(i, 1);
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
const $e = "KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2NvbnN0IHI9bmV3IFRleHRFbmNvZGVyO2Z1bmN0aW9uIGMoZSl7cmV0dXJuWy4uLm5ldyBVaW50OEFycmF5KGUpXS5tYXAobj0+bi50b1N0cmluZygxNikucGFkU3RhcnQoMiwiMCIpKS5qb2luKCIiKX1hc3luYyBmdW5jdGlvbiBsKGUsbixhKXtyZXR1cm4gYyhhd2FpdCBjcnlwdG8uc3VidGxlLmRpZ2VzdChhLnRvVXBwZXJDYXNlKCksci5lbmNvZGUoZStuKSkpfWFzeW5jIGZ1bmN0aW9uIGkoZSxuLGE9IlNIQS0yNTYiLG89MWU3KXtjb25zdCBzPURhdGUubm93KCk7Zm9yKGxldCB0PTA7dDw9bzt0KyspaWYoYXdhaXQgbChuLHQsYSk9PT1lKXJldHVybntudW1iZXI6dCx0b29rOkRhdGUubm93KCktc307cmV0dXJuIG51bGx9b25tZXNzYWdlPWFzeW5jIGU9Pntjb25zdHthbGc6bixjaGFsbGVuZ2U6YSxtYXg6byxzYWx0OnN9PWUuZGF0YXx8e307aWYoYSYmcyl7Y29uc3QgdD1hd2FpdCBpKGEscyxuLG8pO3NlbGYucG9zdE1lc3NhZ2UodCYmey4uLnQsd29ya2VyOiEwfSl9ZWxzZSBzZWxmLnBvc3RNZXNzYWdlKG51bGwpfX0pKCk7Cg==", ot = (t) => Uint8Array.from(atob(t), (e) => e.charCodeAt(0)), se = typeof window < "u" && window.Blob && new Blob([ot($e)], { type: "text/javascript;charset=utf-8" });
function it(t) {
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
      "data:text/javascript;base64," + $e,
      {
        name: t == null ? void 0 : t.name
      }
    );
  } finally {
    e && (window.URL || window.webkitURL).revokeObjectURL(e);
  }
}
const lt = 1e7, st = new TextEncoder();
function ct(t) {
  return [...new Uint8Array(t)].map((e) => e.toString(16).padStart(2, "0")).join("");
}
async function at(t = 1e5, e = "SHA-256") {
  const n = Date.now().toString(16), o = Math.round(Math.random() * t), i = await _e(n, o, e);
  return {
    algorithm: e,
    challenge: i,
    salt: n,
    signature: ""
  };
}
async function _e(t, e, n) {
  return ct(await crypto.subtle.digest(n.toUpperCase(), st.encode(t + e)));
}
async function ut(t, e, n = "SHA-256", o = lt) {
  const i = Date.now();
  for (let r = 0; r <= o; r++)
    if (await _e(e, r, n) === t)
      return {
        number: r,
        took: Date.now() - i
      };
  return null;
}
var p = /* @__PURE__ */ ((t) => (t.ERROR = "error", t.VERIFIED = "verified", t.VERIFYING = "verifying", t.UNVERIFIED = "unverified", t))(p || {});
function ft(t) {
  Ve(t, "svelte-vuofbg", ".altcha.svelte-vuofbg.svelte-vuofbg{background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);overflow:hidden;position:relative;text-align:left}.altcha.svelte-vuofbg.svelte-vuofbg:focus-within{border-color:var(--altcha-color-border-focus, currentColor)}.altcha-main.svelte-vuofbg.svelte-vuofbg{align-items:center;display:flex;gap:0.4rem;padding:0.7rem}.altcha-label.svelte-vuofbg.svelte-vuofbg{flex-grow:1}.altcha-label.svelte-vuofbg label.svelte-vuofbg{cursor:pointer}.altcha-logo.svelte-vuofbg.svelte-vuofbg{color:currentColor;opacity:0.3}.altcha-logo.svelte-vuofbg.svelte-vuofbg:hover{opacity:1}.altcha-error.svelte-vuofbg.svelte-vuofbg{color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem}.altcha-footer.svelte-vuofbg.svelte-vuofbg{align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.4;padding:0.2rem 0.7rem;text-align:right}.altcha-footer.svelte-vuofbg.svelte-vuofbg:hover{opacity:1}.altcha-footer.svelte-vuofbg>.svelte-vuofbg:first-child{flex-grow:1}.altcha-footer.svelte-vuofbg a{color:currentColor}.altcha-checkbox.svelte-vuofbg.svelte-vuofbg{display:flex;align-items:center;height:24px;width:24px}.altcha-checkbox.svelte-vuofbg input.svelte-vuofbg{width:18px;height:18px;margin:0}.altcha-hidden.svelte-vuofbg.svelte-vuofbg{display:none}.altcha-spinner.svelte-vuofbg.svelte-vuofbg{animation:svelte-vuofbg-altcha-spinner 0.75s infinite linear;transform-origin:center}@keyframes svelte-vuofbg-altcha-spinner{100%{transform:rotate(360deg)}}");
}
function ce(t) {
  let e, n, o;
  return {
    c() {
      e = G("svg"), n = G("path"), o = G("path"), c(n, "d", "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"), c(n, "fill", "currentColor"), c(n, "opacity", ".25"), c(o, "d", "M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"), c(o, "fill", "currentColor"), c(o, "class", "altcha-spinner svelte-vuofbg"), c(e, "width", "24"), c(e, "height", "24"), c(e, "viewBox", "0 0 24 24"), c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(i, r) {
      R(i, e, r), b(e, n), b(e, o);
    },
    d(i) {
      i && L(e);
    }
  };
}
function ht(t) {
  let e, n = (
    /*_strings*/
    t[9].label + ""
  ), o;
  return {
    c() {
      e = w("label"), c(e, "for", o = /*name*/
      t[3] + "_checkbox"), c(e, "class", "svelte-vuofbg");
    },
    m(i, r) {
      R(i, e, r), e.innerHTML = n;
    },
    p(i, r) {
      r[0] & /*_strings*/
      512 && n !== (n = /*_strings*/
      i[9].label + "") && (e.innerHTML = n), r[0] & /*name*/
      8 && o !== (o = /*name*/
      i[3] + "_checkbox") && c(e, "for", o);
    },
    d(i) {
      i && L(e);
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
      e = w("span");
    },
    m(o, i) {
      R(o, e, i), e.innerHTML = n;
    },
    p(o, i) {
      i[0] & /*_strings*/
      512 && n !== (n = /*_strings*/
      o[9].verifying + "") && (e.innerHTML = n);
    },
    d(o) {
      o && L(e);
    }
  };
}
function gt(t) {
  let e, n = (
    /*_strings*/
    t[9].verified + ""
  ), o, i;
  return {
    c() {
      e = w("span"), o = M(), i = w("input"), c(i, "type", "hidden"), c(
        i,
        "name",
        /*name*/
        t[3]
      ), i.value = /*payload*/
      t[4];
    },
    m(r, s) {
      R(r, e, s), e.innerHTML = n, R(r, o, s), R(r, i, s);
    },
    p(r, s) {
      s[0] & /*_strings*/
      512 && n !== (n = /*_strings*/
      r[9].verified + "") && (e.innerHTML = n), s[0] & /*name*/
      8 && c(
        i,
        "name",
        /*name*/
        r[3]
      ), s[0] & /*payload*/
      16 && (i.value = /*payload*/
      r[4]);
    },
    d(r) {
      r && (L(e), L(o), L(i));
    }
  };
}
function ae(t) {
  let e, n, o, i, r, s;
  return {
    c() {
      e = w("div"), n = w("a"), o = G("svg"), i = G("path"), r = G("path"), s = G("path"), c(i, "d", "M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z"), c(i, "fill", "currentColor"), c(r, "d", "M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z"), c(r, "fill", "currentColor"), c(s, "d", "M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z"), c(s, "fill", "currentColor"), c(o, "width", "22"), c(o, "height", "22"), c(o, "viewBox", "0 0 20 20"), c(o, "fill", "none"), c(o, "xmlns", "http://www.w3.org/2000/svg"), c(n, "href", we), c(n, "target", "_blank"), c(n, "class", "altcha-logo svelte-vuofbg");
    },
    m(a, f) {
      R(a, e, f), b(e, n), b(n, o), b(o, i), b(o, r), b(o, s);
    },
    p: Z,
    d(a) {
      a && L(e);
    }
  };
}
function ue(t) {
  let e, n, o, i, r, s = (
    /*_strings*/
    t[9].error + ""
  );
  return {
    c() {
      e = w("div"), n = G("svg"), o = G("path"), i = M(), r = w("div"), c(o, "stroke-linecap", "round"), c(o, "stroke-linejoin", "round"), c(o, "d", "M6 18L18 6M6 6l12 12"), c(n, "width", "14"), c(n, "height", "14"), c(n, "xmlns", "http://www.w3.org/2000/svg"), c(n, "fill", "none"), c(n, "viewBox", "0 0 24 24"), c(n, "stroke-width", "1.5"), c(n, "stroke", "currentColor"), c(
        r,
        "title",
        /*error*/
        t[8]
      ), c(e, "class", "altcha-error svelte-vuofbg");
    },
    m(a, f) {
      R(a, e, f), b(e, n), b(n, o), b(e, i), b(e, r), r.innerHTML = s;
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
  let e, n, o = (
    /*_strings*/
    t[9].footer + ""
  );
  return {
    c() {
      e = w("div"), n = w("div"), c(n, "class", "svelte-vuofbg"), c(e, "class", "altcha-footer svelte-vuofbg");
    },
    m(i, r) {
      R(i, e, r), b(e, n), n.innerHTML = o;
    },
    p(i, r) {
      r[0] & /*_strings*/
      512 && o !== (o = /*_strings*/
      i[9].footer + "") && (n.innerHTML = o);
    },
    d(i) {
      i && L(e);
    }
  };
}
function bt(t) {
  let e, n, o, i, r, s, a, f, u, N, y, j, I, A, $ = (
    /*state*/
    t[5] === p.VERIFYING && ce()
  );
  function S(h, v) {
    return (
      /*state*/
      h[5] === p.VERIFIED ? gt : (
        /*state*/
        h[5] === p.VERIFYING ? dt : ht
      )
    );
  }
  let V = S(t), k = V(t), g = (
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
      e = w("div"), n = w("div"), $ && $.c(), o = M(), i = w("div"), r = w("input"), f = M(), u = w("div"), k.c(), N = M(), g && g.c(), y = M(), m && m.c(), j = M(), d && d.c(), c(r, "type", "checkbox"), c(r, "id", s = /*name*/
      t[3] + "_checkbox"), r.required = a = /*auto*/
      t[0] !== "onsubmit", c(r, "class", "svelte-vuofbg"), c(i, "class", "altcha-checkbox svelte-vuofbg"), ie(
        i,
        "altcha-hidden",
        /*state*/
        t[5] === p.VERIFYING
      ), c(u, "class", "altcha-label svelte-vuofbg"), c(n, "class", "altcha-main svelte-vuofbg"), c(e, "class", "altcha svelte-vuofbg"), c(
        e,
        "data-state",
        /*state*/
        t[5]
      );
    },
    m(h, v) {
      R(h, e, v), b(e, n), $ && $.m(n, null), b(n, o), b(n, i), b(i, r), r.checked = /*checked*/
      t[6], b(n, f), b(n, u), k.m(u, null), b(n, N), g && g.m(n, null), b(e, y), m && m.m(e, null), b(e, j), d && d.m(e, null), t[23](e), I || (A = [
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
    p(h, v) {
      /*state*/
      h[5] === p.VERIFYING ? $ || ($ = ce(), $.c(), $.m(n, o)) : $ && ($.d(1), $ = null), v[0] & /*name*/
      8 && s !== (s = /*name*/
      h[3] + "_checkbox") && c(r, "id", s), v[0] & /*auto*/
      1 && a !== (a = /*auto*/
      h[0] !== "onsubmit") && (r.required = a), v[0] & /*checked*/
      64 && (r.checked = /*checked*/
      h[6]), v[0] & /*state*/
      32 && ie(
        i,
        "altcha-hidden",
        /*state*/
        h[5] === p.VERIFYING
      ), V === (V = S(h)) && k ? k.p(h, v) : (k.d(1), k = V(h), k && (k.c(), k.m(u, null))), /*hidelogo*/
      h[2] !== !0 ? g ? g.p(h, v) : (g = ae(), g.c(), g.m(n, null)) : g && (g.d(1), g = null), /*error*/
      h[8] ? m ? m.p(h, v) : (m = ue(h), m.c(), m.m(e, j)) : m && (m.d(1), m = null), /*_strings*/
      h[9].footer && /*hidefooter*/
      h[1] !== !0 ? d ? d.p(h, v) : (d = fe(h), d.c(), d.m(e, null)) : d && (d.d(1), d = null), v[0] & /*state*/
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
      h && L(e), $ && $.d(), k.d(), g && g.d(), m && m.d(), d && d.d(), t[23](null), I = !1, W(A);
    }
  };
}
const we = "https://altcha.org/";
function he(t) {
  return JSON.parse(t);
}
function mt(t, e, n) {
  let o, i, r, { auto: s = void 0 } = e, { challengeurl: a = void 0 } = e, { challengejson: f = void 0 } = e, { debug: u = !1 } = e, { hidefooter: N = !1 } = e, { hidelogo: y = !1 } = e, { name: j = "altcha" } = e, { maxnumber: I = void 0 } = e, { mockerror: A = !1 } = e, { strings: $ = void 0 } = e, { test: S = !1 } = e;
  const V = Pe(), k = ["SHA-256", "SHA-384", "SHA-512"];
  let g = !1, m, d = null, h = null, v = null, U = p.UNVERIFIED;
  We(() => {
    d && (d.removeEventListener("submit", te), d.removeEventListener("reset", ne), d = null);
  }), He(() => {
    E("mounted", "0.1.8"), S && E("using test mode"), s !== void 0 && E("auto", s), d = m.closest("form"), d && (d.addEventListener("submit", te), d.addEventListener("reset", ne)), s === "onload" && P();
  });
  function E(...l) {
    (u || l.some((_) => _ instanceof Error)) && console[l[0] instanceof Error ? "error" : "log"]("ALTCHA", ...l);
  }
  function te(l) {
    d && s === "onsubmit" && U === p.UNVERIFIED && (l.preventDefault(), l.stopPropagation(), P().then(() => {
      d == null || d.requestSubmit();
    }));
  }
  function ne() {
    X();
  }
  function pe(l, _) {
    return btoa(JSON.stringify({
      algorithm: l.algorithm,
      challenge: l.challenge,
      number: _.number,
      salt: l.salt,
      signature: l.signature,
      test: S ? !0 : void 0,
      took: _.took
    }));
  }
  function ye(l) {
    if (!l.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (l.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!k.includes(l.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${k.join(", ")}`);
    if (!l.challenge || l.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!l.salt || l.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function ke() {
    if (A)
      throw E("mocking error"), new Error("Mocked error.");
    if (o)
      return E("using provided json data"), o;
    if (S)
      return E("generating test challenge"), at();
    {
      if (!a)
        throw new Error("Attribute challengeurl not set.");
      E("fetching challenge from", a);
      const l = await fetch(a);
      if (l.status !== 200)
        throw new Error(`Server responded with ${l.status}.`);
      return l.json();
    }
  }
  async function Ee(l) {
    let _ = null;
    if ("Worker" in window) {
      try {
        _ = await Ce(l.challenge, l.salt, l.algorithm);
      } catch (D) {
        E(D);
      }
      if ((_ == null ? void 0 : _.number) !== void 0)
        return { data: l, solution: _ };
    }
    return {
      data: l,
      solution: await ut(l.challenge, l.salt, l.algorithm, I)
    };
  }
  async function Ce(l, _, D) {
    const re = new it();
    return new Promise((Ne) => {
      re.addEventListener("message", (je) => {
        Ne(je.data);
      }), re.postMessage({ alg: D, challenge: l, max: I, salt: _ });
    });
  }
  function xe() {
    [p.UNVERIFIED, p.ERROR].includes(U) ? P() : n(6, g = !0);
  }
  function Le() {
    U === p.VERIFYING && alert(r.waitAlert);
  }
  function X(l = p.UNVERIFIED) {
    n(6, g = !1), n(8, h = null), n(4, v = null), n(5, U = l);
  }
  async function P() {
    return X(p.VERIFYING), ke().then((l) => (ye(l), E("challenge", l), Ee(l))).then(({ data: l, solution: _ }) => {
      if (E("solution", _), (_ == null ? void 0 : _.number) !== void 0)
        E("verified"), n(5, U = p.VERIFIED), n(6, g = !0), n(4, v = pe(l, _)), E("payload", v), Te().then(() => {
          V("verified", { payload: v });
        });
      else
        throw new Error("Unexpected result returned.");
    }).catch((l) => {
      E(l), n(5, U = p.ERROR), n(6, g = !1), n(8, h = l);
    });
  }
  function Ie() {
    g = this.checked, n(6, g);
  }
  function Re(l) {
    J[l ? "unshift" : "push"](() => {
      m = l, n(7, m);
    });
  }
  return t.$$set = (l) => {
    "auto" in l && n(0, s = l.auto), "challengeurl" in l && n(12, a = l.challengeurl), "challengejson" in l && n(13, f = l.challengejson), "debug" in l && n(14, u = l.debug), "hidefooter" in l && n(1, N = l.hidefooter), "hidelogo" in l && n(2, y = l.hidelogo), "name" in l && n(3, j = l.name), "maxnumber" in l && n(15, I = l.maxnumber), "mockerror" in l && n(16, A = l.mockerror), "strings" in l && n(17, $ = l.strings), "test" in l && n(18, S = l.test);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*challengejson*/
    8192 && (o = f ? he(f) : void 0), t.$$.dirty[0] & /*strings*/
    131072 && n(21, i = $ ? he($) : {}), t.$$.dirty[0] & /*parsedStrings*/
    2097152 && n(9, r = {
      error: "Verification failed. Try again later.",
      footer: `Protected by <a href="${we}" target="_blank">ALTCHA</a>`,
      label: "I'm not a robot",
      verified: "Verified",
      verifying: "Verifying...",
      waitAlert: "Verifying... please wait.",
      ...i
    }), t.$$.dirty[0] & /*payload, state*/
    48 && V("statechange", { payload: v, state: U });
  }, [
    s,
    N,
    y,
    j,
    v,
    U,
    g,
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
    $,
    S,
    X,
    P,
    i,
    Ie,
    Re
  ];
}
class vt extends nt {
  constructor(e) {
    super(), et(
      this,
      e,
      mt,
      bt,
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
customElements.define("altcha-widget", tt(vt, { auto: {}, challengeurl: {}, challengejson: {}, debug: { type: "Boolean" }, hidefooter: { type: "Boolean" }, hidelogo: { type: "Boolean" }, name: {}, maxnumber: {}, mockerror: { type: "Boolean" }, strings: {}, test: { type: "Boolean" } }, [], ["reset", "verify"], !1));
export {
  vt as Altcha
};
