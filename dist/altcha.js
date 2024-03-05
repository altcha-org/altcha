var Ue = Object.defineProperty;
var Me = (t, e, n) => e in t ? Ue(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var I = (t, e, n) => (Me(t, typeof e != "symbol" ? e + "" : e, n), n);
function H() {
}
function ve(t) {
  return t();
}
function ce() {
  return /* @__PURE__ */ Object.create(null);
}
function T(t) {
  t.forEach(ve);
}
function _e(t) {
  return typeof t == "function";
}
function Fe(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function Oe(t) {
  return Object.keys(t).length === 0;
}
function b(t, e) {
  t.appendChild(e);
}
function Ye(t, e, n) {
  const i = Ze(t);
  if (!i.getElementById(e)) {
    const l = $("style");
    l.id = e, l.textContent = n, Be(i, l);
  }
}
function Ze(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : t.ownerDocument;
}
function Be(t, e) {
  return b(
    /** @type {Document} */
    t.head || t,
    e
  ), e.sheet;
}
function N(t, e, n) {
  t.insertBefore(e, n || null);
}
function L(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function $(t) {
  return document.createElement(t);
}
function V(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function He(t) {
  return document.createTextNode(t);
}
function M() {
  return He(" ");
}
function z(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function c(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function We(t) {
  return Array.from(t.childNodes);
}
function ue(t, e, n) {
  t.classList.toggle(e, !!n);
}
function De(t, e, { bubbles: n = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: n, cancelable: i });
}
function Pe(t) {
  const e = {};
  return t.childNodes.forEach(
    /** @param {Element} node */
    (n) => {
      e[n.slot || "default"] = !0;
    }
  ), e;
}
let P;
function D(t) {
  P = t;
}
function te() {
  if (!P)
    throw new Error("Function called outside component initialization");
  return P;
}
function Te(t) {
  te().$$.on_mount.push(t);
}
function Xe(t) {
  te().$$.on_destroy.push(t);
}
function Ke() {
  const t = te();
  return (e, n, { cancelable: i = !1 } = {}) => {
    const l = t.$$.callbacks[e];
    if (l) {
      const r = De(
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
const Z = [], Q = [];
let B = [];
const ae = [], we = /* @__PURE__ */ Promise.resolve();
let q = !1;
function $e() {
  q || (q = !0, we.then(x));
}
function ze() {
  return $e(), we;
}
function ee(t) {
  B.push(t);
}
const J = /* @__PURE__ */ new Set();
let Y = 0;
function x() {
  if (Y !== 0)
    return;
  const t = P;
  do {
    try {
      for (; Y < Z.length; ) {
        const e = Z[Y];
        Y++, D(e), Je(e.$$);
      }
    } catch (e) {
      throw Z.length = 0, Y = 0, e;
    }
    for (D(null), Z.length = 0, Y = 0; Q.length; )
      Q.pop()();
    for (let e = 0; e < B.length; e += 1) {
      const n = B[e];
      J.has(n) || (J.add(n), n());
    }
    B.length = 0;
  } while (Z.length);
  for (; ae.length; )
    ae.pop()();
  q = !1, J.clear(), D(t);
}
function Je(t) {
  if (t.fragment !== null) {
    t.update(), T(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(ee);
  }
}
function Qe(t) {
  const e = [], n = [];
  B.forEach((i) => t.indexOf(i) === -1 ? e.push(i) : n.push(i)), n.forEach((i) => i()), B = e;
}
const qe = /* @__PURE__ */ new Set();
function et(t, e) {
  t && t.i && (qe.delete(t), t.i(e));
}
function tt(t, e, n) {
  const { fragment: i, after_update: l } = t.$$;
  i && i.m(e, n), ee(() => {
    const r = t.$$.on_mount.map(ve).filter(_e);
    t.$$.on_destroy ? t.$$.on_destroy.push(...r) : T(r), t.$$.on_mount = [];
  }), l.forEach(ee);
}
function nt(t, e) {
  const n = t.$$;
  n.fragment !== null && (Qe(n.after_update), T(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function rt(t, e) {
  t.$$.dirty[0] === -1 && (Z.push(t), $e(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function it(t, e, n, i, l, r, s = null, a = [-1]) {
  const h = P;
  D(t);
  const f = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: H,
    not_equal: l,
    bound: ce(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (h ? h.$$.context : [])),
    // everything else
    callbacks: ce(),
    dirty: a,
    skip_bound: !1,
    root: e.target || h.$$.root
  };
  s && s(f.root);
  let R = !1;
  if (f.ctx = n ? n(t, e.props || {}, (p, j, ...C) => {
    const A = C.length ? C[0] : j;
    return f.ctx && l(f.ctx[p], f.ctx[p] = A) && (!f.skip_bound && f.bound[p] && f.bound[p](A), R && rt(t, p)), j;
  }) : [], f.update(), R = !0, T(f.before_update), f.fragment = i ? i(f.ctx) : !1, e.target) {
    if (e.hydrate) {
      const p = We(e.target);
      f.fragment && f.fragment.l(p), p.forEach(L);
    } else
      f.fragment && f.fragment.c();
    e.intro && et(t.$$.fragment), tt(t, e.target, e.anchor), x();
  }
  D(h);
}
let ye;
typeof HTMLElement == "function" && (ye = class extends HTMLElement {
  constructor(e, n, i) {
    super();
    /** The Svelte component constructor */
    I(this, "$$ctor");
    /** Slots */
    I(this, "$$s");
    /** The Svelte component instance */
    I(this, "$$c");
    /** Whether or not the custom element is connected */
    I(this, "$$cn", !1);
    /** Component props data */
    I(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    I(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    I(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    I(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    I(this, "$$l_u", /* @__PURE__ */ new Map());
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
              s = $("slot"), r !== "default" && c(s, "name", r);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(f, R) {
              N(f, s, R);
            },
            d: function(f) {
              f && L(s);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, i = Pe(this);
      for (const r of this.$$s)
        r in i && (n[r] = [e(r)]);
      for (const r of this.attributes) {
        const s = this.$$g_p(r.name);
        s in this.$$d || (this.$$d[s] = K(s, r.value, this.$$p_d, "toProp"));
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
            const s = K(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = K(e, i, this.$$p_d, "toProp"), (l = this.$$c) == null || l.$set({ [e]: this.$$d[e] }));
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
function K(t, e, n, i) {
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
function ot(t, e, n, i, l, r) {
  let s = class extends ye {
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
      set(h) {
        var f;
        h = K(a, h, e), this.$$d[a] = h, (f = this.$$c) == null || f.$set({ [a]: h });
      }
    });
  }), i.forEach((a) => {
    Object.defineProperty(s.prototype, a, {
      get() {
        var h;
        return (h = this.$$c) == null ? void 0 : h[a];
      }
    });
  }), r && (s = r(s)), t.element = /** @type {any} */
  s, s;
}
class lt {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    I(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    I(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    nt(this, 1), this.$destroy = H;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!_e(n))
      return H;
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
    this.$$set && !Oe(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const st = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(st);
const pe = "KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2NvbnN0IHI9bmV3IFRleHRFbmNvZGVyO2Z1bmN0aW9uIGMoZSl7cmV0dXJuWy4uLm5ldyBVaW50OEFycmF5KGUpXS5tYXAobj0+bi50b1N0cmluZygxNikucGFkU3RhcnQoMiwiMCIpKS5qb2luKCIiKX1hc3luYyBmdW5jdGlvbiBsKGUsbixhKXtyZXR1cm4gYyhhd2FpdCBjcnlwdG8uc3VidGxlLmRpZ2VzdChhLnRvVXBwZXJDYXNlKCksci5lbmNvZGUoZStuKSkpfWFzeW5jIGZ1bmN0aW9uIGkoZSxuLGE9IlNIQS0yNTYiLG89MWU3KXtjb25zdCBzPURhdGUubm93KCk7Zm9yKGxldCB0PTA7dDw9bzt0KyspaWYoYXdhaXQgbChuLHQsYSk9PT1lKXJldHVybntudW1iZXI6dCx0b29rOkRhdGUubm93KCktc307cmV0dXJuIG51bGx9b25tZXNzYWdlPWFzeW5jIGU9Pntjb25zdHthbGc6bixjaGFsbGVuZ2U6YSxtYXg6byxzYWx0OnN9PWUuZGF0YXx8e307aWYoYSYmcyl7Y29uc3QgdD1hd2FpdCBpKGEscyxuLG8pO3NlbGYucG9zdE1lc3NhZ2UodCYmey4uLnQsd29ya2VyOiEwfSl9ZWxzZSBzZWxmLnBvc3RNZXNzYWdlKG51bGwpfX0pKCk7Cg==", ct = (t) => Uint8Array.from(atob(t), (e) => e.charCodeAt(0)), fe = typeof window < "u" && window.Blob && new Blob([ct(pe)], { type: "text/javascript;charset=utf-8" });
function ut(t) {
  let e;
  try {
    if (e = fe && (window.URL || window.webkitURL).createObjectURL(fe), !e)
      throw "";
    const n = new Worker(e, {
      name: t == null ? void 0 : t.name
    });
    return n.addEventListener("error", () => {
      (window.URL || window.webkitURL).revokeObjectURL(e);
    }), n;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + pe,
      {
        name: t == null ? void 0 : t.name
      }
    );
  } finally {
    e && (window.URL || window.webkitURL).revokeObjectURL(e);
  }
}
const at = 1e7, ft = new TextEncoder();
function ht(t) {
  return [...new Uint8Array(t)].map((e) => e.toString(16).padStart(2, "0")).join("");
}
async function dt(t = 1e5, e = "SHA-256") {
  const n = Date.now().toString(16), i = Math.round(Math.random() * t), l = await ke(n, i, e);
  return {
    algorithm: e,
    challenge: l,
    salt: n,
    signature: ""
  };
}
async function ke(t, e, n) {
  return ht(await crypto.subtle.digest(n.toUpperCase(), ft.encode(t + e)));
}
async function gt(t, e, n = "SHA-256", i = at) {
  const l = Date.now();
  for (let r = 0; r <= i; r++)
    if (await ke(e, r, n) === t)
      return {
        number: r,
        took: Date.now() - l
      };
  return null;
}
var w = /* @__PURE__ */ ((t) => (t.ERROR = "error", t.VERIFIED = "verified", t.VERIFYING = "verifying", t.UNVERIFIED = "unverified", t.EXPIRED = "expired", t))(w || {});
function bt(t) {
  Ye(t, "svelte-vuofbg", ".altcha.svelte-vuofbg.svelte-vuofbg{background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);overflow:hidden;position:relative;text-align:left}.altcha.svelte-vuofbg.svelte-vuofbg:focus-within{border-color:var(--altcha-color-border-focus, currentColor)}.altcha-main.svelte-vuofbg.svelte-vuofbg{align-items:center;display:flex;gap:0.4rem;padding:0.7rem}.altcha-label.svelte-vuofbg.svelte-vuofbg{flex-grow:1}.altcha-label.svelte-vuofbg label.svelte-vuofbg{cursor:pointer}.altcha-logo.svelte-vuofbg.svelte-vuofbg{color:currentColor;opacity:0.3}.altcha-logo.svelte-vuofbg.svelte-vuofbg:hover{opacity:1}.altcha-error.svelte-vuofbg.svelte-vuofbg{color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem}.altcha-footer.svelte-vuofbg.svelte-vuofbg{align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.4;padding:0.2rem 0.7rem;text-align:right}.altcha-footer.svelte-vuofbg.svelte-vuofbg:hover{opacity:1}.altcha-footer.svelte-vuofbg>.svelte-vuofbg:first-child{flex-grow:1}.altcha-footer.svelte-vuofbg a{color:currentColor}.altcha-checkbox.svelte-vuofbg.svelte-vuofbg{display:flex;align-items:center;height:24px;width:24px}.altcha-checkbox.svelte-vuofbg input.svelte-vuofbg{width:18px;height:18px;margin:0}.altcha-hidden.svelte-vuofbg.svelte-vuofbg{display:none}.altcha-spinner.svelte-vuofbg.svelte-vuofbg{animation:svelte-vuofbg-altcha-spinner 0.75s infinite linear;transform-origin:center}@keyframes svelte-vuofbg-altcha-spinner{100%{transform:rotate(360deg)}}");
}
function he(t) {
  let e, n, i;
  return {
    c() {
      e = V("svg"), n = V("path"), i = V("path"), c(n, "d", "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"), c(n, "fill", "currentColor"), c(n, "opacity", ".25"), c(i, "d", "M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"), c(i, "fill", "currentColor"), c(i, "class", "altcha-spinner svelte-vuofbg"), c(e, "width", "24"), c(e, "height", "24"), c(e, "viewBox", "0 0 24 24"), c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(l, r) {
      N(l, e, r), b(e, n), b(e, i);
    },
    d(l) {
      l && L(e);
    }
  };
}
function mt(t) {
  let e, n = (
    /*_strings*/
    t[9].label + ""
  ), i;
  return {
    c() {
      e = $("label"), c(e, "for", i = /*name*/
      t[3] + "_checkbox"), c(e, "class", "svelte-vuofbg");
    },
    m(l, r) {
      N(l, e, r), e.innerHTML = n;
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
function vt(t) {
  let e, n = (
    /*_strings*/
    t[9].verifying + ""
  );
  return {
    c() {
      e = $("span");
    },
    m(i, l) {
      N(i, e, l), e.innerHTML = n;
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
function _t(t) {
  let e, n = (
    /*_strings*/
    t[9].verified + ""
  ), i, l;
  return {
    c() {
      e = $("span"), i = M(), l = $("input"), c(l, "type", "hidden"), c(
        l,
        "name",
        /*name*/
        t[3]
      ), l.value = /*payload*/
      t[4];
    },
    m(r, s) {
      N(r, e, s), e.innerHTML = n, N(r, i, s), N(r, l, s);
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
function de(t) {
  let e, n, i, l, r, s;
  return {
    c() {
      e = $("div"), n = $("a"), i = V("svg"), l = V("path"), r = V("path"), s = V("path"), c(l, "d", "M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z"), c(l, "fill", "currentColor"), c(r, "d", "M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z"), c(r, "fill", "currentColor"), c(s, "d", "M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z"), c(s, "fill", "currentColor"), c(i, "width", "22"), c(i, "height", "22"), c(i, "viewBox", "0 0 20 20"), c(i, "fill", "none"), c(i, "xmlns", "http://www.w3.org/2000/svg"), c(n, "href", Ee), c(n, "target", "_blank"), c(n, "class", "altcha-logo svelte-vuofbg");
    },
    m(a, h) {
      N(a, e, h), b(e, n), b(n, i), b(i, l), b(i, r), b(i, s);
    },
    p: H,
    d(a) {
      a && L(e);
    }
  };
}
function ge(t) {
  let e, n, i, l, r;
  return {
    c() {
      e = $("div"), n = V("svg"), i = V("path"), l = M(), r = $("div"), c(i, "stroke-linecap", "round"), c(i, "stroke-linejoin", "round"), c(i, "d", "M6 18L18 6M6 6l12 12"), c(n, "width", "14"), c(n, "height", "14"), c(n, "xmlns", "http://www.w3.org/2000/svg"), c(n, "fill", "none"), c(n, "viewBox", "0 0 24 24"), c(n, "stroke-width", "1.5"), c(n, "stroke", "currentColor"), c(e, "class", "altcha-error svelte-vuofbg");
    },
    m(s, a) {
      N(s, e, a), b(e, n), b(n, i), b(e, l), b(e, r), r.innerHTML = /*error*/
      t[8];
    },
    p(s, a) {
      a[0] & /*error*/
      256 && (r.innerHTML = /*error*/
      s[8]);
    },
    d(s) {
      s && L(e);
    }
  };
}
function be(t) {
  let e, n, i = (
    /*_strings*/
    t[9].footer + ""
  );
  return {
    c() {
      e = $("div"), n = $("div"), c(n, "class", "svelte-vuofbg"), c(e, "class", "altcha-footer svelte-vuofbg");
    },
    m(l, r) {
      N(l, e, r), b(e, n), n.innerHTML = i;
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
function wt(t) {
  let e, n, i, l, r, s, a, h, f, R, p, j, C, A, v = (
    /*state*/
    t[5] === w.VERIFYING && he()
  );
  function G(u, y) {
    return (
      /*state*/
      u[5] === w.VERIFIED ? _t : (
        /*state*/
        u[5] === w.VERIFYING ? vt : mt
      )
    );
  }
  let U = G(t), k = U(t), _ = (
    /*hidelogo*/
    t[2] !== !0 && de()
  ), g = (
    /*error*/
    t[8] && ge(t)
  ), m = (
    /*_strings*/
    t[9].footer && /*hidefooter*/
    t[1] !== !0 && be(t)
  );
  return {
    c() {
      e = $("div"), n = $("div"), v && v.c(), i = M(), l = $("div"), r = $("input"), h = M(), f = $("div"), k.c(), R = M(), _ && _.c(), p = M(), g && g.c(), j = M(), m && m.c(), c(r, "type", "checkbox"), c(r, "id", s = /*name*/
      t[3] + "_checkbox"), r.required = a = /*auto*/
      t[0] !== "onsubmit", c(r, "class", "svelte-vuofbg"), c(l, "class", "altcha-checkbox svelte-vuofbg"), ue(
        l,
        "altcha-hidden",
        /*state*/
        t[5] === w.VERIFYING
      ), c(f, "class", "altcha-label svelte-vuofbg"), c(n, "class", "altcha-main svelte-vuofbg"), c(e, "class", "altcha svelte-vuofbg"), c(
        e,
        "data-state",
        /*state*/
        t[5]
      );
    },
    m(u, y) {
      N(u, e, y), b(e, n), v && v.m(n, null), b(n, i), b(n, l), b(l, r), r.checked = /*checked*/
      t[6], b(n, h), b(n, f), k.m(f, null), b(n, R), _ && _.m(n, null), b(e, p), g && g.m(e, null), b(e, j), m && m.m(e, null), t[24](e), C || (A = [
        z(
          r,
          "change",
          /*input_change_handler*/
          t[23]
        ),
        z(
          r,
          "change",
          /*onCheckedChange*/
          t[10]
        ),
        z(
          r,
          "invalid",
          /*onInvalid*/
          t[11]
        )
      ], C = !0);
    },
    p(u, y) {
      /*state*/
      u[5] === w.VERIFYING ? v || (v = he(), v.c(), v.m(n, i)) : v && (v.d(1), v = null), y[0] & /*name*/
      8 && s !== (s = /*name*/
      u[3] + "_checkbox") && c(r, "id", s), y[0] & /*auto*/
      1 && a !== (a = /*auto*/
      u[0] !== "onsubmit") && (r.required = a), y[0] & /*checked*/
      64 && (r.checked = /*checked*/
      u[6]), y[0] & /*state*/
      32 && ue(
        l,
        "altcha-hidden",
        /*state*/
        u[5] === w.VERIFYING
      ), U === (U = G(u)) && k ? k.p(u, y) : (k.d(1), k = U(u), k && (k.c(), k.m(f, null))), /*hidelogo*/
      u[2] !== !0 ? _ ? _.p(u, y) : (_ = de(), _.c(), _.m(n, null)) : _ && (_.d(1), _ = null), /*error*/
      u[8] ? g ? g.p(u, y) : (g = ge(u), g.c(), g.m(e, j)) : g && (g.d(1), g = null), /*_strings*/
      u[9].footer && /*hidefooter*/
      u[1] !== !0 ? m ? m.p(u, y) : (m = be(u), m.c(), m.m(e, null)) : m && (m.d(1), m = null), y[0] & /*state*/
      32 && c(
        e,
        "data-state",
        /*state*/
        u[5]
      );
    },
    i: H,
    o: H,
    d(u) {
      u && L(e), v && v.d(), k.d(), _ && _.d(), g && g.d(), m && m.d(), t[24](null), C = !1, T(A);
    }
  };
}
const Ee = "https://altcha.org/";
function me(t) {
  return JSON.parse(t);
}
function $t(t, e, n) {
  let i, l, r, { auto: s = void 0 } = e, { challengeurl: a = void 0 } = e, { challengejson: h = void 0 } = e, { debug: f = !1 } = e, { hidefooter: R = !1 } = e, { hidelogo: p = !1 } = e, { name: j = "altcha" } = e, { maxnumber: C = void 0 } = e, { mockerror: A = !1 } = e, { strings: v = void 0 } = e, { test: G = !1 } = e;
  const U = Ke(), k = ["SHA-256", "SHA-384", "SHA-512"], _ = [];
  let g = !1, m, u = null, y = null, F = null, S = w.UNVERIFIED, ne;
  Xe(() => {
    u && (u.removeEventListener("submit", re), u.removeEventListener("reset", ie), u = null);
  }), Te(() => {
    E("mounted", "0.1.9"), G && E("using test mode"), s !== void 0 && E("auto", s), u = m.closest("form"), u && (u.addEventListener("submit", re), u.addEventListener("reset", ie)), s === "onload" && W();
  });
  function E(...o) {
    (f || o.some((d) => d instanceof Error)) && console[o[0] instanceof Error ? "error" : "log"]("ALTCHA", ...o);
  }
  function re(o) {
    u && s === "onsubmit" && S === w.UNVERIFIED && (o.preventDefault(), o.stopPropagation(), W().then(() => {
      u == null || u.requestSubmit();
    }));
  }
  function ie() {
    X();
  }
  function xe(o, d) {
    return btoa(JSON.stringify({
      algorithm: o.algorithm,
      challenge: o.challenge,
      number: d.number,
      salt: o.salt,
      signature: o.signature,
      test: G ? !0 : void 0,
      took: d.took
    }));
  }
  function oe(o) {
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
  async function Ce() {
    if (A)
      throw E("mocking error"), new Error("Mocked error.");
    if (i)
      return E("using provided json data"), i;
    if (G)
      return E("generating test challenge"), dt();
    {
      if (!a)
        throw new Error("Attribute challengeurl not set.");
      E("fetching challenge from", a);
      const o = await fetch(a);
      if (o.status !== 200)
        throw new Error(`Server responded with ${o.status}.`);
      const d = o.headers.get("Expires");
      if (d.length) {
        const O = Date.parse(d) - Date.now();
        O < 1 ? le() : ne = setTimeout(le, O);
      }
      return o.json();
    }
  }
  function le() {
    X(w.EXPIRED, r.expired);
  }
  async function Ie(o) {
    let d = null;
    if ("Worker" in window) {
      try {
        d = await Le(o.challenge, o.salt, o.algorithm);
      } catch (O) {
        E(O);
      }
      if ((d == null ? void 0 : d.number) !== void 0)
        return { data: o, solution: d };
    }
    return {
      data: o,
      solution: await gt(o.challenge, o.salt, o.algorithm, C)
    };
  }
  async function Le(o, d, O) {
    const se = _.push(new ut());
    return new Promise((Ve) => {
      _[se - 1].addEventListener("message", (Se) => {
        Ve(Se.data);
      }), _[se - 1].postMessage({ alg: O, challenge: o, max: C, salt: d });
    });
  }
  function Re() {
    [w.UNVERIFIED, w.ERROR, w.EXPIRED].includes(S) ? W() : n(6, g = !0);
  }
  function Ne() {
    S === w.VERIFYING && alert(r.waitAlert);
  }
  function je(o) {
    o.auto !== void 0 && (n(0, s = o.auto), s === "onload" && W()), o.challenge && (oe(o.challenge), i = o.challenge), o.debug !== void 0 && n(12, f = !!o.debug), o.hidefooter !== void 0 && n(1, R = !!o.hidefooter), o.hidelogo !== void 0 && n(2, p = !!o.hidelogo), o.maxnumber !== void 0 && n(13, C = +o.maxnumber), o.mockerror !== void 0 && n(14, A = !!o.mockerror), o.name !== void 0 && n(3, j = o.name), o.test !== void 0 && n(15, G = !!o.test), o.strings && n(22, l = o.strings);
  }
  function X(o = w.UNVERIFIED, d = null) {
    clearTimeout(ne), n(6, g = !1), n(8, y = d), n(4, F = null), n(5, S = o);
  }
  async function W() {
    return X(w.VERIFYING), Ce().then((o) => (oe(o), E("challenge", o), Ie(o))).then(({ data: o, solution: d }) => {
      if (E("solution", d), (d == null ? void 0 : d.number) !== void 0)
        E("verified"), n(5, S = w.VERIFIED), n(6, g = !0), n(4, F = xe(o, d)), E("payload", F), ze().then(() => {
          U("verified", { payload: F });
        });
      else
        throw new Error("Unexpected result returned.");
    }).catch((o) => {
      E(o), n(5, S = w.ERROR), n(6, g = !1), n(8, y = o.message);
    });
  }
  function Ae() {
    g = this.checked, n(6, g);
  }
  function Ge(o) {
    Q[o ? "unshift" : "push"](() => {
      m = o, n(7, m);
    });
  }
  return t.$$set = (o) => {
    "auto" in o && n(0, s = o.auto), "challengeurl" in o && n(16, a = o.challengeurl), "challengejson" in o && n(17, h = o.challengejson), "debug" in o && n(12, f = o.debug), "hidefooter" in o && n(1, R = o.hidefooter), "hidelogo" in o && n(2, p = o.hidelogo), "name" in o && n(3, j = o.name), "maxnumber" in o && n(13, C = o.maxnumber), "mockerror" in o && n(14, A = o.mockerror), "strings" in o && n(18, v = o.strings), "test" in o && n(15, G = o.test);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*challengejson*/
    131072 && (i = h ? me(h) : void 0), t.$$.dirty[0] & /*strings*/
    262144 && n(22, l = v ? me(v) : {}), t.$$.dirty[0] & /*parsedStrings*/
    4194304 && n(9, r = {
      error: "Verification failed. Try again later.",
      expired: "Verification expired. Try again.",
      footer: `Protected by <a href="${Ee}" target="_blank">ALTCHA</a>`,
      label: "I'm not a robot",
      verified: "Verified",
      verifying: "Verifying...",
      waitAlert: "Verifying... please wait.",
      ...l
    }), t.$$.dirty[0] & /*payload, state*/
    48 && U("statechange", { payload: F, state: S });
  }, [
    s,
    R,
    p,
    j,
    F,
    S,
    g,
    m,
    y,
    r,
    Re,
    Ne,
    f,
    C,
    A,
    G,
    a,
    h,
    v,
    je,
    X,
    W,
    l,
    Ae,
    Ge
  ];
}
class yt extends lt {
  constructor(e) {
    super(), it(
      this,
      e,
      $t,
      wt,
      Fe,
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
      bt,
      [-1, -1]
    );
  }
  get auto() {
    return this.$$.ctx[0];
  }
  set auto(e) {
    this.$$set({ auto: e }), x();
  }
  get challengeurl() {
    return this.$$.ctx[16];
  }
  set challengeurl(e) {
    this.$$set({ challengeurl: e }), x();
  }
  get challengejson() {
    return this.$$.ctx[17];
  }
  set challengejson(e) {
    this.$$set({ challengejson: e }), x();
  }
  get debug() {
    return this.$$.ctx[12];
  }
  set debug(e) {
    this.$$set({ debug: e }), x();
  }
  get hidefooter() {
    return this.$$.ctx[1];
  }
  set hidefooter(e) {
    this.$$set({ hidefooter: e }), x();
  }
  get hidelogo() {
    return this.$$.ctx[2];
  }
  set hidelogo(e) {
    this.$$set({ hidelogo: e }), x();
  }
  get name() {
    return this.$$.ctx[3];
  }
  set name(e) {
    this.$$set({ name: e }), x();
  }
  get maxnumber() {
    return this.$$.ctx[13];
  }
  set maxnumber(e) {
    this.$$set({ maxnumber: e }), x();
  }
  get mockerror() {
    return this.$$.ctx[14];
  }
  set mockerror(e) {
    this.$$set({ mockerror: e }), x();
  }
  get strings() {
    return this.$$.ctx[18];
  }
  set strings(e) {
    this.$$set({ strings: e }), x();
  }
  get test() {
    return this.$$.ctx[15];
  }
  set test(e) {
    this.$$set({ test: e }), x();
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
customElements.define("altcha-widget", ot(yt, { auto: {}, challengeurl: {}, challengejson: {}, debug: { type: "Boolean" }, hidefooter: { type: "Boolean" }, hidelogo: { type: "Boolean" }, name: {}, maxnumber: {}, mockerror: { type: "Boolean" }, strings: {}, test: { type: "Boolean" } }, [], ["configure", "reset", "verify"], !1));
export {
  yt as Altcha
};
