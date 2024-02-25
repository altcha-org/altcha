var Ge = Object.defineProperty;
var Se = (t, e, n) => e in t ? Ge(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var L = (t, e, n) => (Se(t, typeof e != "symbol" ? e + "" : e, n), n);
function Z() {
}
function ge(t) {
  return t();
}
function ie() {
  return /* @__PURE__ */ Object.create(null);
}
function P(t) {
  t.forEach(ge);
}
function be(t) {
  return typeof t == "function";
}
function Ue(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function Ve(t) {
  return Object.keys(t).length === 0;
}
function b(t, e) {
  t.appendChild(e);
}
function Me(t, e, n) {
  const o = Fe(t);
  if (!o.getElementById(e)) {
    const l = $("style");
    l.id = e, l.textContent = n, Oe(o, l);
  }
}
function Fe(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : t.ownerDocument;
}
function Oe(t, e) {
  return b(
    /** @type {Document} */
    t.head || t,
    e
  ), e.sheet;
}
function N(t, e, n) {
  t.insertBefore(e, n || null);
}
function I(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function $(t) {
  return document.createElement(t);
}
function S(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function Ye(t) {
  return document.createTextNode(t);
}
function M() {
  return Ye(" ");
}
function K(t, e, n, o) {
  return t.addEventListener(e, n, o), () => t.removeEventListener(e, n, o);
}
function c(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function Ze(t) {
  return Array.from(t.childNodes);
}
function le(t, e, n) {
  t.classList.toggle(e, !!n);
}
function Be(t, e, { bubbles: n = !1, cancelable: o = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: n, cancelable: o });
}
function He(t) {
  const e = {};
  return t.childNodes.forEach(
    /** @param {Element} node */
    (n) => {
      e[n.slot || "default"] = !0;
    }
  ), e;
}
let W;
function H(t) {
  W = t;
}
function ee() {
  if (!W)
    throw new Error("Function called outside component initialization");
  return W;
}
function We(t) {
  ee().$$.on_mount.push(t);
}
function Pe(t) {
  ee().$$.on_destroy.push(t);
}
function Te() {
  const t = ee();
  return (e, n, { cancelable: o = !1 } = {}) => {
    const l = t.$$.callbacks[e];
    if (l) {
      const r = Be(
        /** @type {string} */
        e,
        n,
        { cancelable: o }
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
const se = [], me = /* @__PURE__ */ Promise.resolve();
let Q = !1;
function ve() {
  Q || (Q = !0, me.then(C));
}
function Xe() {
  return ve(), me;
}
function q(t) {
  Y.push(t);
}
const z = /* @__PURE__ */ new Set();
let F = 0;
function C() {
  if (F !== 0)
    return;
  const t = W;
  do {
    try {
      for (; F < O.length; ) {
        const e = O[F];
        F++, H(e), De(e.$$);
      }
    } catch (e) {
      throw O.length = 0, F = 0, e;
    }
    for (H(null), O.length = 0, F = 0; J.length; )
      J.pop()();
    for (let e = 0; e < Y.length; e += 1) {
      const n = Y[e];
      z.has(n) || (z.add(n), n());
    }
    Y.length = 0;
  } while (O.length);
  for (; se.length; )
    se.pop()();
  Q = !1, z.clear(), H(t);
}
function De(t) {
  if (t.fragment !== null) {
    t.update(), P(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(q);
  }
}
function Ke(t) {
  const e = [], n = [];
  Y.forEach((o) => t.indexOf(o) === -1 ? e.push(o) : n.push(o)), n.forEach((o) => o()), Y = e;
}
const ze = /* @__PURE__ */ new Set();
function Je(t, e) {
  t && t.i && (ze.delete(t), t.i(e));
}
function Qe(t, e, n) {
  const { fragment: o, after_update: l } = t.$$;
  o && o.m(e, n), q(() => {
    const r = t.$$.on_mount.map(ge).filter(be);
    t.$$.on_destroy ? t.$$.on_destroy.push(...r) : P(r), t.$$.on_mount = [];
  }), l.forEach(q);
}
function qe(t, e) {
  const n = t.$$;
  n.fragment !== null && (Ke(n.after_update), P(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function et(t, e) {
  t.$$.dirty[0] === -1 && (O.push(t), ve(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function tt(t, e, n, o, l, r, s = null, u = [-1]) {
  const f = W;
  H(t);
  const a = t.$$ = {
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
    dirty: u,
    skip_bound: !1,
    root: e.target || f.$$.root
  };
  s && s(a.root);
  let R = !1;
  if (a.ctx = n ? n(t, e.props || {}, (p, j, ...x) => {
    const A = x.length ? x[0] : j;
    return a.ctx && l(a.ctx[p], a.ctx[p] = A) && (!a.skip_bound && a.bound[p] && a.bound[p](A), R && et(t, p)), j;
  }) : [], a.update(), R = !0, P(a.before_update), a.fragment = o ? o(a.ctx) : !1, e.target) {
    if (e.hydrate) {
      const p = Ze(e.target);
      a.fragment && a.fragment.l(p), p.forEach(I);
    } else
      a.fragment && a.fragment.c();
    e.intro && Je(t.$$.fragment), Qe(t, e.target, e.anchor), C();
  }
  H(f);
}
let _e;
typeof HTMLElement == "function" && (_e = class extends HTMLElement {
  constructor(e, n, o) {
    super();
    /** The Svelte component constructor */
    L(this, "$$ctor");
    /** Slots */
    L(this, "$$s");
    /** The Svelte component instance */
    L(this, "$$c");
    /** Whether or not the custom element is connected */
    L(this, "$$cn", !1);
    /** Component props data */
    L(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    L(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    L(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    L(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    L(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = e, this.$$s = n, o && this.attachShadow({ mode: "open" });
  }
  addEventListener(e, n, o) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(n), this.$$c) {
      const l = this.$$c.$on(e, n);
      this.$$l_u.set(n, l);
    }
    super.addEventListener(e, n, o);
  }
  removeEventListener(e, n, o) {
    if (super.removeEventListener(e, n, o), this.$$c) {
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
              s = $("slot"), r !== "default" && c(s, "name", r);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(a, R) {
              N(a, s, R);
            },
            d: function(a) {
              a && I(s);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, o = He(this);
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
          const u = this.$$c.$on(r, s);
          this.$$l_u.set(s, u);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(e, n, o) {
    var l;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = T(e, o, this.$$p_d, "toProp"), (l = this.$$c) == null || l.$set({ [e]: this.$$d[e] }));
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
  const l = (r = n[t]) == null ? void 0 : r.type;
  if (e = l === "Boolean" && typeof e != "boolean" ? e != null : e, !o || !n[t])
    return e;
  if (o === "toAttribute")
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
function nt(t, e, n, o, l, r) {
  let s = class extends _e {
    constructor() {
      super(t, n, l), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Object.keys(e).map(
        (u) => (e[u].attribute || u).toLowerCase()
      );
    }
  };
  return Object.keys(e).forEach((u) => {
    Object.defineProperty(s.prototype, u, {
      get() {
        return this.$$c && u in this.$$c ? this.$$c[u] : this.$$d[u];
      },
      set(f) {
        var a;
        f = T(u, f, e), this.$$d[u] = f, (a = this.$$c) == null || a.$set({ [u]: f });
      }
    });
  }), o.forEach((u) => {
    Object.defineProperty(s.prototype, u, {
      get() {
        var f;
        return (f = this.$$c) == null ? void 0 : f[u];
      }
    });
  }), r && (s = r(s)), t.element = /** @type {any} */
  s, s;
}
class rt {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    L(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    L(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    qe(this, 1), this.$destroy = Z;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!be(n))
      return Z;
    const o = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return o.push(n), () => {
      const l = o.indexOf(n);
      l !== -1 && o.splice(l, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !Ve(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const ot = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(ot);
const we = "KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2NvbnN0IHI9bmV3IFRleHRFbmNvZGVyO2Z1bmN0aW9uIGMoZSl7cmV0dXJuWy4uLm5ldyBVaW50OEFycmF5KGUpXS5tYXAobj0+bi50b1N0cmluZygxNikucGFkU3RhcnQoMiwiMCIpKS5qb2luKCIiKX1hc3luYyBmdW5jdGlvbiBsKGUsbixhKXtyZXR1cm4gYyhhd2FpdCBjcnlwdG8uc3VidGxlLmRpZ2VzdChhLnRvVXBwZXJDYXNlKCksci5lbmNvZGUoZStuKSkpfWFzeW5jIGZ1bmN0aW9uIGkoZSxuLGE9IlNIQS0yNTYiLG89MWU3KXtjb25zdCBzPURhdGUubm93KCk7Zm9yKGxldCB0PTA7dDw9bzt0KyspaWYoYXdhaXQgbChuLHQsYSk9PT1lKXJldHVybntudW1iZXI6dCx0b29rOkRhdGUubm93KCktc307cmV0dXJuIG51bGx9b25tZXNzYWdlPWFzeW5jIGU9Pntjb25zdHthbGc6bixjaGFsbGVuZ2U6YSxtYXg6byxzYWx0OnN9PWUuZGF0YXx8e307aWYoYSYmcyl7Y29uc3QgdD1hd2FpdCBpKGEscyxuLG8pO3NlbGYucG9zdE1lc3NhZ2UodCYmey4uLnQsd29ya2VyOiEwfSl9ZWxzZSBzZWxmLnBvc3RNZXNzYWdlKG51bGwpfX0pKCk7Cg==", it = (t) => Uint8Array.from(atob(t), (e) => e.charCodeAt(0)), ce = typeof window < "u" && window.Blob && new Blob([it(we)], { type: "text/javascript;charset=utf-8" });
function lt(t) {
  let e;
  try {
    if (e = ce && (window.URL || window.webkitURL).createObjectURL(ce), !e)
      throw "";
    const n = new Worker(e, {
      name: t == null ? void 0 : t.name
    });
    return n.addEventListener("error", () => {
      (window.URL || window.webkitURL).revokeObjectURL(e);
    }), n;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + we,
      {
        name: t == null ? void 0 : t.name
      }
    );
  } finally {
    e && (window.URL || window.webkitURL).revokeObjectURL(e);
  }
}
const st = 1e7, ct = new TextEncoder();
function ut(t) {
  return [...new Uint8Array(t)].map((e) => e.toString(16).padStart(2, "0")).join("");
}
async function at(t = 1e5, e = "SHA-256") {
  const n = Date.now().toString(16), o = Math.round(Math.random() * t), l = await $e(n, o, e);
  return {
    algorithm: e,
    challenge: l,
    salt: n,
    signature: ""
  };
}
async function $e(t, e, n) {
  return ut(await crypto.subtle.digest(n.toUpperCase(), ct.encode(t + e)));
}
async function ft(t, e, n = "SHA-256", o = st) {
  const l = Date.now();
  for (let r = 0; r <= o; r++)
    if (await $e(e, r, n) === t)
      return {
        number: r,
        took: Date.now() - l
      };
  return null;
}
var y = /* @__PURE__ */ ((t) => (t.ERROR = "error", t.VERIFIED = "verified", t.VERIFYING = "verifying", t.UNVERIFIED = "unverified", t))(y || {});
function ht(t) {
  Me(t, "svelte-vuofbg", ".altcha.svelte-vuofbg.svelte-vuofbg{background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);overflow:hidden;position:relative;text-align:left}.altcha.svelte-vuofbg.svelte-vuofbg:focus-within{border-color:var(--altcha-color-border-focus, currentColor)}.altcha-main.svelte-vuofbg.svelte-vuofbg{align-items:center;display:flex;gap:0.4rem;padding:0.7rem}.altcha-label.svelte-vuofbg.svelte-vuofbg{flex-grow:1}.altcha-label.svelte-vuofbg label.svelte-vuofbg{cursor:pointer}.altcha-logo.svelte-vuofbg.svelte-vuofbg{color:currentColor;opacity:0.3}.altcha-logo.svelte-vuofbg.svelte-vuofbg:hover{opacity:1}.altcha-error.svelte-vuofbg.svelte-vuofbg{color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem}.altcha-footer.svelte-vuofbg.svelte-vuofbg{align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.4;padding:0.2rem 0.7rem;text-align:right}.altcha-footer.svelte-vuofbg.svelte-vuofbg:hover{opacity:1}.altcha-footer.svelte-vuofbg>.svelte-vuofbg:first-child{flex-grow:1}.altcha-footer.svelte-vuofbg a{color:currentColor}.altcha-checkbox.svelte-vuofbg.svelte-vuofbg{display:flex;align-items:center;height:24px;width:24px}.altcha-checkbox.svelte-vuofbg input.svelte-vuofbg{width:18px;height:18px;margin:0}.altcha-hidden.svelte-vuofbg.svelte-vuofbg{display:none}.altcha-spinner.svelte-vuofbg.svelte-vuofbg{animation:svelte-vuofbg-altcha-spinner 0.75s infinite linear;transform-origin:center}@keyframes svelte-vuofbg-altcha-spinner{100%{transform:rotate(360deg)}}");
}
function ue(t) {
  let e, n, o;
  return {
    c() {
      e = S("svg"), n = S("path"), o = S("path"), c(n, "d", "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"), c(n, "fill", "currentColor"), c(n, "opacity", ".25"), c(o, "d", "M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"), c(o, "fill", "currentColor"), c(o, "class", "altcha-spinner svelte-vuofbg"), c(e, "width", "24"), c(e, "height", "24"), c(e, "viewBox", "0 0 24 24"), c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(l, r) {
      N(l, e, r), b(e, n), b(e, o);
    },
    d(l) {
      l && I(e);
    }
  };
}
function dt(t) {
  let e, n = (
    /*_strings*/
    t[9].label + ""
  ), o;
  return {
    c() {
      e = $("label"), c(e, "for", o = /*name*/
      t[3] + "_checkbox"), c(e, "class", "svelte-vuofbg");
    },
    m(l, r) {
      N(l, e, r), e.innerHTML = n;
    },
    p(l, r) {
      r[0] & /*_strings*/
      512 && n !== (n = /*_strings*/
      l[9].label + "") && (e.innerHTML = n), r[0] & /*name*/
      8 && o !== (o = /*name*/
      l[3] + "_checkbox") && c(e, "for", o);
    },
    d(l) {
      l && I(e);
    }
  };
}
function gt(t) {
  let e, n = (
    /*_strings*/
    t[9].verifying + ""
  );
  return {
    c() {
      e = $("span");
    },
    m(o, l) {
      N(o, e, l), e.innerHTML = n;
    },
    p(o, l) {
      l[0] & /*_strings*/
      512 && n !== (n = /*_strings*/
      o[9].verifying + "") && (e.innerHTML = n);
    },
    d(o) {
      o && I(e);
    }
  };
}
function bt(t) {
  let e, n = (
    /*_strings*/
    t[9].verified + ""
  ), o, l;
  return {
    c() {
      e = $("span"), o = M(), l = $("input"), c(l, "type", "hidden"), c(
        l,
        "name",
        /*name*/
        t[3]
      ), l.value = /*payload*/
      t[4];
    },
    m(r, s) {
      N(r, e, s), e.innerHTML = n, N(r, o, s), N(r, l, s);
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
      r && (I(e), I(o), I(l));
    }
  };
}
function ae(t) {
  let e, n, o, l, r, s;
  return {
    c() {
      e = $("div"), n = $("a"), o = S("svg"), l = S("path"), r = S("path"), s = S("path"), c(l, "d", "M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z"), c(l, "fill", "currentColor"), c(r, "d", "M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z"), c(r, "fill", "currentColor"), c(s, "d", "M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z"), c(s, "fill", "currentColor"), c(o, "width", "22"), c(o, "height", "22"), c(o, "viewBox", "0 0 20 20"), c(o, "fill", "none"), c(o, "xmlns", "http://www.w3.org/2000/svg"), c(n, "href", ye), c(n, "target", "_blank"), c(n, "class", "altcha-logo svelte-vuofbg");
    },
    m(u, f) {
      N(u, e, f), b(e, n), b(n, o), b(o, l), b(o, r), b(o, s);
    },
    p: Z,
    d(u) {
      u && I(e);
    }
  };
}
function fe(t) {
  let e, n, o, l, r, s = (
    /*_strings*/
    t[9].error + ""
  );
  return {
    c() {
      e = $("div"), n = S("svg"), o = S("path"), l = M(), r = $("div"), c(o, "stroke-linecap", "round"), c(o, "stroke-linejoin", "round"), c(o, "d", "M6 18L18 6M6 6l12 12"), c(n, "width", "14"), c(n, "height", "14"), c(n, "xmlns", "http://www.w3.org/2000/svg"), c(n, "fill", "none"), c(n, "viewBox", "0 0 24 24"), c(n, "stroke-width", "1.5"), c(n, "stroke", "currentColor"), c(
        r,
        "title",
        /*error*/
        t[8]
      ), c(e, "class", "altcha-error svelte-vuofbg");
    },
    m(u, f) {
      N(u, e, f), b(e, n), b(n, o), b(e, l), b(e, r), r.innerHTML = s;
    },
    p(u, f) {
      f[0] & /*_strings*/
      512 && s !== (s = /*_strings*/
      u[9].error + "") && (r.innerHTML = s), f[0] & /*error*/
      256 && c(
        r,
        "title",
        /*error*/
        u[8]
      );
    },
    d(u) {
      u && I(e);
    }
  };
}
function he(t) {
  let e, n, o = (
    /*_strings*/
    t[9].footer + ""
  );
  return {
    c() {
      e = $("div"), n = $("div"), c(n, "class", "svelte-vuofbg"), c(e, "class", "altcha-footer svelte-vuofbg");
    },
    m(l, r) {
      N(l, e, r), b(e, n), n.innerHTML = o;
    },
    p(l, r) {
      r[0] & /*_strings*/
      512 && o !== (o = /*_strings*/
      l[9].footer + "") && (n.innerHTML = o);
    },
    d(l) {
      l && I(e);
    }
  };
}
function mt(t) {
  let e, n, o, l, r, s, u, f, a, R, p, j, x, A, _ = (
    /*state*/
    t[5] === y.VERIFYING && ue()
  );
  function G(h, v) {
    return (
      /*state*/
      h[5] === y.VERIFIED ? bt : (
        /*state*/
        h[5] === y.VERIFYING ? gt : dt
      )
    );
  }
  let V = G(t), k = V(t), g = (
    /*hidelogo*/
    t[2] !== !0 && ae()
  ), m = (
    /*error*/
    t[8] && fe(t)
  ), d = (
    /*_strings*/
    t[9].footer && /*hidefooter*/
    t[1] !== !0 && he(t)
  );
  return {
    c() {
      e = $("div"), n = $("div"), _ && _.c(), o = M(), l = $("div"), r = $("input"), f = M(), a = $("div"), k.c(), R = M(), g && g.c(), p = M(), m && m.c(), j = M(), d && d.c(), c(r, "type", "checkbox"), c(r, "id", s = /*name*/
      t[3] + "_checkbox"), r.required = u = /*auto*/
      t[0] !== "onsubmit", c(r, "class", "svelte-vuofbg"), c(l, "class", "altcha-checkbox svelte-vuofbg"), le(
        l,
        "altcha-hidden",
        /*state*/
        t[5] === y.VERIFYING
      ), c(a, "class", "altcha-label svelte-vuofbg"), c(n, "class", "altcha-main svelte-vuofbg"), c(e, "class", "altcha svelte-vuofbg"), c(
        e,
        "data-state",
        /*state*/
        t[5]
      );
    },
    m(h, v) {
      N(h, e, v), b(e, n), _ && _.m(n, null), b(n, o), b(n, l), b(l, r), r.checked = /*checked*/
      t[6], b(n, f), b(n, a), k.m(a, null), b(n, R), g && g.m(n, null), b(e, p), m && m.m(e, null), b(e, j), d && d.m(e, null), t[24](e), x || (A = [
        K(
          r,
          "change",
          /*input_change_handler*/
          t[23]
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
      ], x = !0);
    },
    p(h, v) {
      /*state*/
      h[5] === y.VERIFYING ? _ || (_ = ue(), _.c(), _.m(n, o)) : _ && (_.d(1), _ = null), v[0] & /*name*/
      8 && s !== (s = /*name*/
      h[3] + "_checkbox") && c(r, "id", s), v[0] & /*auto*/
      1 && u !== (u = /*auto*/
      h[0] !== "onsubmit") && (r.required = u), v[0] & /*checked*/
      64 && (r.checked = /*checked*/
      h[6]), v[0] & /*state*/
      32 && le(
        l,
        "altcha-hidden",
        /*state*/
        h[5] === y.VERIFYING
      ), V === (V = G(h)) && k ? k.p(h, v) : (k.d(1), k = V(h), k && (k.c(), k.m(a, null))), /*hidelogo*/
      h[2] !== !0 ? g ? g.p(h, v) : (g = ae(), g.c(), g.m(n, null)) : g && (g.d(1), g = null), /*error*/
      h[8] ? m ? m.p(h, v) : (m = fe(h), m.c(), m.m(e, j)) : m && (m.d(1), m = null), /*_strings*/
      h[9].footer && /*hidefooter*/
      h[1] !== !0 ? d ? d.p(h, v) : (d = he(h), d.c(), d.m(e, null)) : d && (d.d(1), d = null), v[0] & /*state*/
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
      h && I(e), _ && _.d(), k.d(), g && g.d(), m && m.d(), d && d.d(), t[24](null), x = !1, P(A);
    }
  };
}
const ye = "https://altcha.org/";
function de(t) {
  return JSON.parse(t);
}
function vt(t, e, n) {
  let o, l, r, { auto: s = void 0 } = e, { challengeurl: u = void 0 } = e, { challengejson: f = void 0 } = e, { debug: a = !1 } = e, { hidefooter: R = !1 } = e, { hidelogo: p = !1 } = e, { name: j = "altcha" } = e, { maxnumber: x = void 0 } = e, { mockerror: A = !1 } = e, { strings: _ = void 0 } = e, { test: G = !1 } = e;
  const V = Te(), k = ["SHA-256", "SHA-384", "SHA-512"];
  let g = !1, m, d = null, h = null, v = null, U = y.UNVERIFIED;
  Pe(() => {
    d && (d.removeEventListener("submit", te), d.removeEventListener("reset", ne), d = null);
  }), We(() => {
    E("mounted", "0.1.9"), G && E("using test mode"), s !== void 0 && E("auto", s), d = m.closest("form"), d && (d.addEventListener("submit", te), d.addEventListener("reset", ne)), s === "onload" && B();
  });
  function E(...i) {
    (a || i.some((w) => w instanceof Error)) && console[i[0] instanceof Error ? "error" : "log"]("ALTCHA", ...i);
  }
  function te(i) {
    d && s === "onsubmit" && U === y.UNVERIFIED && (i.preventDefault(), i.stopPropagation(), B().then(() => {
      d == null || d.requestSubmit();
    }));
  }
  function ne() {
    X();
  }
  function pe(i, w) {
    return btoa(JSON.stringify({
      algorithm: i.algorithm,
      challenge: i.challenge,
      number: w.number,
      salt: i.salt,
      signature: i.signature,
      test: G ? !0 : void 0,
      took: w.took
    }));
  }
  function re(i) {
    if (!i.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (i.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!k.includes(i.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${k.join(", ")}`);
    if (!i.challenge || i.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!i.salt || i.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function ke() {
    if (A)
      throw E("mocking error"), new Error("Mocked error.");
    if (o)
      return E("using provided json data"), o;
    if (G)
      return E("generating test challenge"), at();
    {
      if (!u)
        throw new Error("Attribute challengeurl not set.");
      E("fetching challenge from", u);
      const i = await fetch(u);
      if (i.status !== 200)
        throw new Error(`Server responded with ${i.status}.`);
      return i.json();
    }
  }
  async function Ee(i) {
    let w = null;
    if ("Worker" in window) {
      try {
        w = await Ce(i.challenge, i.salt, i.algorithm);
      } catch (D) {
        E(D);
      }
      if ((w == null ? void 0 : w.number) !== void 0)
        return { data: i, solution: w };
    }
    return {
      data: i,
      solution: await ft(i.challenge, i.salt, i.algorithm, x)
    };
  }
  async function Ce(i, w, D) {
    const oe = new lt();
    return new Promise((je) => {
      oe.addEventListener("message", (Ae) => {
        je(Ae.data);
      }), oe.postMessage({ alg: D, challenge: i, max: x, salt: w });
    });
  }
  function xe() {
    [y.UNVERIFIED, y.ERROR].includes(U) ? B() : n(6, g = !0);
  }
  function Le() {
    U === y.VERIFYING && alert(r.waitAlert);
  }
  function Ie(i) {
    i.auto !== void 0 && (n(0, s = i.auto), s === "onload" && B()), i.challenge && (re(i.challenge), o = i.challenge), i.debug !== void 0 && n(12, a = !!i.debug), i.hidefooter !== void 0 && n(1, R = !!i.hidefooter), i.hidelogo !== void 0 && n(2, p = !!i.hidelogo), i.maxnumber !== void 0 && n(13, x = +i.maxnumber), i.mockerror !== void 0 && n(14, A = !!i.mockerror), i.name !== void 0 && n(3, j = i.name), i.test !== void 0 && n(15, G = !!i.test), i.strings && n(22, l = i.strings);
  }
  function X(i = y.UNVERIFIED) {
    n(6, g = !1), n(8, h = null), n(4, v = null), n(5, U = i);
  }
  async function B() {
    return X(y.VERIFYING), ke().then((i) => (re(i), E("challenge", i), Ee(i))).then(({ data: i, solution: w }) => {
      if (E("solution", w), (w == null ? void 0 : w.number) !== void 0)
        E("verified"), n(5, U = y.VERIFIED), n(6, g = !0), n(4, v = pe(i, w)), E("payload", v), Xe().then(() => {
          V("verified", { payload: v });
        });
      else
        throw new Error("Unexpected result returned.");
    }).catch((i) => {
      E(i), n(5, U = y.ERROR), n(6, g = !1), n(8, h = i);
    });
  }
  function Re() {
    g = this.checked, n(6, g);
  }
  function Ne(i) {
    J[i ? "unshift" : "push"](() => {
      m = i, n(7, m);
    });
  }
  return t.$$set = (i) => {
    "auto" in i && n(0, s = i.auto), "challengeurl" in i && n(16, u = i.challengeurl), "challengejson" in i && n(17, f = i.challengejson), "debug" in i && n(12, a = i.debug), "hidefooter" in i && n(1, R = i.hidefooter), "hidelogo" in i && n(2, p = i.hidelogo), "name" in i && n(3, j = i.name), "maxnumber" in i && n(13, x = i.maxnumber), "mockerror" in i && n(14, A = i.mockerror), "strings" in i && n(18, _ = i.strings), "test" in i && n(15, G = i.test);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*challengejson*/
    131072 && (o = f ? de(f) : void 0), t.$$.dirty[0] & /*strings*/
    262144 && n(22, l = _ ? de(_) : {}), t.$$.dirty[0] & /*parsedStrings*/
    4194304 && n(9, r = {
      error: "Verification failed. Try again later.",
      footer: `Protected by <a href="${ye}" target="_blank">ALTCHA</a>`,
      label: "I'm not a robot",
      verified: "Verified",
      verifying: "Verifying...",
      waitAlert: "Verifying... please wait.",
      ...l
    }), t.$$.dirty[0] & /*payload, state*/
    48 && V("statechange", { payload: v, state: U });
  }, [
    s,
    R,
    p,
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
    x,
    A,
    G,
    u,
    f,
    _,
    Ie,
    X,
    B,
    l,
    Re,
    Ne
  ];
}
class _t extends rt {
  constructor(e) {
    super(), tt(
      this,
      e,
      vt,
      mt,
      Ue,
      {
        auto: 0,
        challengeurl: 16,
        challengejson: 17,
        debug: 12,
        hidefooter: 1,
        hidelogo: 2,
        name: 3,
        maxnumber: 13,
        mockerror: 14,
        strings: 18,
        test: 15,
        configure: 19,
        reset: 20,
        verify: 21
      },
      ht,
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
    return this.$$.ctx[16];
  }
  set challengeurl(e) {
    this.$$set({ challengeurl: e }), C();
  }
  get challengejson() {
    return this.$$.ctx[17];
  }
  set challengejson(e) {
    this.$$set({ challengejson: e }), C();
  }
  get debug() {
    return this.$$.ctx[12];
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
    return this.$$.ctx[13];
  }
  set maxnumber(e) {
    this.$$set({ maxnumber: e }), C();
  }
  get mockerror() {
    return this.$$.ctx[14];
  }
  set mockerror(e) {
    this.$$set({ mockerror: e }), C();
  }
  get strings() {
    return this.$$.ctx[18];
  }
  set strings(e) {
    this.$$set({ strings: e }), C();
  }
  get test() {
    return this.$$.ctx[15];
  }
  set test(e) {
    this.$$set({ test: e }), C();
  }
  get configure() {
    return this.$$.ctx[19];
  }
  get reset() {
    return this.$$.ctx[20];
  }
  get verify() {
    return this.$$.ctx[21];
  }
}
customElements.define("altcha-widget", nt(_t, { auto: {}, challengeurl: {}, challengejson: {}, debug: { type: "Boolean" }, hidefooter: { type: "Boolean" }, hidelogo: { type: "Boolean" }, name: {}, maxnumber: {}, mockerror: { type: "Boolean" }, strings: {}, test: { type: "Boolean" } }, [], ["configure", "reset", "verify"], !1));
export {
  _t as Altcha
};
