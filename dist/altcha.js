var Ne = Object.defineProperty;
var Re = (t, e, n) => e in t ? Ne(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var L = (t, e, n) => (Re(t, typeof e != "symbol" ? e + "" : e, n), n);
function W() {
}
function de(t) {
  return t();
}
function le() {
  return /* @__PURE__ */ Object.create(null);
}
function T(t) {
  t.forEach(de);
}
function ge(t) {
  return typeof t == "function";
}
function je(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function Ge(t) {
  return Object.keys(t).length === 0;
}
function g(t, e) {
  t.appendChild(e);
}
function Ae(t, e, n) {
  const i = Se(t);
  if (!i.getElementById(e)) {
    const l = v("style");
    l.id = e, l.textContent = n, Ve(i, l);
  }
}
function Se(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : t.ownerDocument;
}
function Ve(t, e) {
  return g(
    /** @type {Document} */
    t.head || t,
    e
  ), e.sheet;
}
function A(t, e, n) {
  t.insertBefore(e, n || null);
}
function R(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function v(t) {
  return document.createElement(t);
}
function V(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function Me(t) {
  return document.createTextNode(t);
}
function F() {
  return Me(" ");
}
function J(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function s(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function Ue(t) {
  return Array.from(t.childNodes);
}
function oe(t, e, n) {
  t.classList.toggle(e, !!n);
}
function Fe(t, e, { bubbles: n = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: n, cancelable: i });
}
function Ye(t) {
  const e = {};
  return t.childNodes.forEach(
    /** @param {Element} node */
    (n) => {
      e[n.slot || "default"] = !0;
    }
  ), e;
}
let P;
function B(t) {
  P = t;
}
function re() {
  if (!P)
    throw new Error("Function called outside component initialization");
  return P;
}
function Ze(t) {
  re().$$.on_mount.push(t);
}
function Oe(t) {
  re().$$.on_destroy.push(t);
}
function He() {
  const t = re();
  return (e, n, { cancelable: i = !1 } = {}) => {
    const l = t.$$.callbacks[e];
    if (l) {
      const r = Fe(
        /** @type {string} */
        e,
        n,
        { cancelable: i }
      );
      return l.slice().forEach((c) => {
        c.call(t, r);
      }), !r.defaultPrevented;
    }
    return !0;
  };
}
const Z = [], ee = [];
let O = [];
const se = [], me = /* @__PURE__ */ Promise.resolve();
let te = !1;
function we() {
  te || (te = !0, me.then(q));
}
function Be() {
  return we(), me;
}
function ne(t) {
  O.push(t);
}
const Q = /* @__PURE__ */ new Set();
let Y = 0;
function q() {
  if (Y !== 0)
    return;
  const t = P;
  do {
    try {
      for (; Y < Z.length; ) {
        const e = Z[Y];
        Y++, B(e), We(e.$$);
      }
    } catch (e) {
      throw Z.length = 0, Y = 0, e;
    }
    for (B(null), Z.length = 0, Y = 0; ee.length; )
      ee.pop()();
    for (let e = 0; e < O.length; e += 1) {
      const n = O[e];
      Q.has(n) || (Q.add(n), n());
    }
    O.length = 0;
  } while (Z.length);
  for (; se.length; )
    se.pop()();
  te = !1, Q.clear(), B(t);
}
function We(t) {
  if (t.fragment !== null) {
    t.update(), T(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(ne);
  }
}
function Pe(t) {
  const e = [], n = [];
  O.forEach((i) => t.indexOf(i) === -1 ? e.push(i) : n.push(i)), n.forEach((i) => i()), O = e;
}
const Te = /* @__PURE__ */ new Set();
function Xe(t, e) {
  t && t.i && (Te.delete(t), t.i(e));
}
function De(t, e, n) {
  const { fragment: i, after_update: l } = t.$$;
  i && i.m(e, n), ne(() => {
    const r = t.$$.on_mount.map(de).filter(ge);
    t.$$.on_destroy ? t.$$.on_destroy.push(...r) : T(r), t.$$.on_mount = [];
  }), l.forEach(ne);
}
function Ke(t, e) {
  const n = t.$$;
  n.fragment !== null && (Pe(n.after_update), T(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function ze(t, e) {
  t.$$.dirty[0] === -1 && (Z.push(t), we(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Je(t, e, n, i, l, r, c = null, a = [-1]) {
  const u = P;
  B(t);
  const f = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: W,
    not_equal: l,
    bound: le(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: le(),
    dirty: a,
    skip_bound: !1,
    root: e.target || u.$$.root
  };
  c && c(f.root);
  let j = !1;
  if (f.ctx = n ? n(t, e.props || {}, (y, E, ...w) => {
    const I = w.length ? w[0] : E;
    return f.ctx && l(f.ctx[y], f.ctx[y] = I) && (!f.skip_bound && f.bound[y] && f.bound[y](I), j && ze(t, y)), E;
  }) : [], f.update(), j = !0, T(f.before_update), f.fragment = i ? i(f.ctx) : !1, e.target) {
    if (e.hydrate) {
      const y = Ue(e.target);
      f.fragment && f.fragment.l(y), y.forEach(R);
    } else
      f.fragment && f.fragment.c();
    e.intro && Xe(t.$$.fragment), De(t, e.target, e.anchor), q();
  }
  B(u);
}
let be;
typeof HTMLElement == "function" && (be = class extends HTMLElement {
  constructor(e, n, i) {
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
          let c;
          return {
            c: function() {
              c = v("slot"), r !== "default" && s(c, "name", r);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(f, j) {
              A(f, c, j);
            },
            d: function(f) {
              f && R(c);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn)
        return;
      const n = {}, i = Ye(this);
      for (const r of this.$$s)
        r in i && (n[r] = [e(r)]);
      for (const r of this.attributes) {
        const c = this.$$g_p(r.name);
        c in this.$$d || (this.$$d[c] = D(c, r.value, this.$$p_d, "toProp"));
      }
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
            const c = D(
              r,
              this.$$d[r],
              this.$$p_d,
              "toAttribute"
            );
            c == null ? this.removeAttribute(this.$$p_d[r].attribute || r) : this.setAttribute(this.$$p_d[r].attribute || r, c);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(l), l();
      for (const r in this.$$l)
        for (const c of this.$$l[r]) {
          const a = this.$$c.$on(r, c);
          this.$$l_u.set(c, a);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(e, n, i) {
    var l;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = D(e, i, this.$$p_d, "toProp"), (l = this.$$c) == null || l.$set({ [e]: this.$$d[e] }));
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
function D(t, e, n, i) {
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
function Qe(t, e, n, i, l, r) {
  let c = class extends be {
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
    Object.defineProperty(c.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(u) {
        var f;
        u = D(a, u, e), this.$$d[a] = u, (f = this.$$c) == null || f.$set({ [a]: u });
      }
    });
  }), i.forEach((a) => {
    Object.defineProperty(c.prototype, a, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[a];
      }
    });
  }), r && (c = r(c)), t.element = /** @type {any} */
  c, c;
}
class et {
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
    Ke(this, 1), this.$destroy = W;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!ge(n))
      return W;
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
    this.$$set && !Ge(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const tt = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(tt);
const $e = "KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2NvbnN0IHI9bmV3IFRleHRFbmNvZGVyO2Z1bmN0aW9uIGMoZSl7cmV0dXJuWy4uLm5ldyBVaW50OEFycmF5KGUpXS5tYXAobj0+bi50b1N0cmluZygxNikucGFkU3RhcnQoMiwiMCIpKS5qb2luKCIiKX1hc3luYyBmdW5jdGlvbiBsKGUsbixhKXtyZXR1cm4gYyhhd2FpdCBjcnlwdG8uc3VidGxlLmRpZ2VzdChhLnRvVXBwZXJDYXNlKCksci5lbmNvZGUoZStuKSkpfWFzeW5jIGZ1bmN0aW9uIGkoZSxuLGE9IlNIQS0yNTYiLG89MWU3KXtjb25zdCBzPURhdGUubm93KCk7Zm9yKGxldCB0PTA7dDw9bzt0KyspaWYoYXdhaXQgbChuLHQsYSk9PT1lKXJldHVybntudW1iZXI6dCx0b29rOkRhdGUubm93KCktc307cmV0dXJuIG51bGx9b25tZXNzYWdlPWFzeW5jIGU9Pntjb25zdHthbGc6bixjaGFsbGVuZ2U6YSxtYXg6byxzYWx0OnN9PWUuZGF0YXx8e307aWYoYSYmcyl7Y29uc3QgdD1hd2FpdCBpKGEscyxuLG8pO3NlbGYucG9zdE1lc3NhZ2UodCYmey4uLnQsd29ya2VyOiEwfSl9ZWxzZSBzZWxmLnBvc3RNZXNzYWdlKG51bGwpfX0pKCk7Cg==", ce = typeof window < "u" && window.Blob && new Blob([atob($e)], { type: "text/javascript;charset=utf-8" });
function nt() {
  let t;
  try {
    if (t = ce && (window.URL || window.webkitURL).createObjectURL(ce), !t)
      throw "";
    return new Worker(t);
  } catch {
    return new Worker("data:application/javascript;base64," + $e);
  } finally {
    t && (window.URL || window.webkitURL).revokeObjectURL(t);
  }
}
const rt = 1e7, it = new TextEncoder();
function lt(t) {
  return [...new Uint8Array(t)].map((e) => e.toString(16).padStart(2, "0")).join("");
}
async function ot(t = 1e5, e = "SHA-256") {
  const n = Date.now().toString(16), i = Math.round(Math.random() * t), l = await _e(n, i, e);
  return {
    algorithm: e,
    challenge: l,
    salt: n,
    signature: ""
  };
}
async function _e(t, e, n) {
  return lt(await crypto.subtle.digest(n.toUpperCase(), it.encode(t + e)));
}
async function st(t, e, n = "SHA-256", i = rt) {
  const l = Date.now();
  for (let r = 0; r <= i; r++)
    if (await _e(e, r, n) === t)
      return {
        number: r,
        took: Date.now() - l
      };
  return null;
}
var p = /* @__PURE__ */ ((t) => (t.ERROR = "error", t.VERIFIED = "verified", t.VERIFYING = "verifying", t.UNVERIFIED = "unverified", t))(p || {});
function ct(t) {
  Ae(t, "svelte-fqcw55", ".altcha.svelte-fqcw55.svelte-fqcw55{background:var(--altcha-color-base, transparent);border:1px solid var(--altcha-color-border, #a0a0a0);border-radius:3px;color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:260px;overflow:hidden;position:relative;text-align:left}.altcha.svelte-fqcw55.svelte-fqcw55:focus-within{border-color:var(--altcha-color-border-focus, currentColor)}.altcha-main.svelte-fqcw55.svelte-fqcw55{align-items:center;display:flex;gap:0.4rem;padding:0.7rem}.altcha-label.svelte-fqcw55.svelte-fqcw55{flex-grow:1}.altcha-label.svelte-fqcw55 label.svelte-fqcw55{cursor:pointer}.altcha-logo.svelte-fqcw55.svelte-fqcw55{color:currentColor;opacity:0.3}.altcha-logo.svelte-fqcw55.svelte-fqcw55:hover{opacity:1}.altcha-error.svelte-fqcw55.svelte-fqcw55{color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem}.altcha-footer.svelte-fqcw55.svelte-fqcw55{align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.4;padding:0.2rem 0.7rem;text-align:right}.altcha-footer.svelte-fqcw55.svelte-fqcw55:hover{opacity:1}.altcha-footer.svelte-fqcw55>.svelte-fqcw55:first-child{flex-grow:1}.altcha-footer.svelte-fqcw55 a{color:currentColor}.altcha-checkbox.svelte-fqcw55.svelte-fqcw55{display:flex;align-items:center;height:24px;width:24px}.altcha-checkbox.svelte-fqcw55 input.svelte-fqcw55{width:18px;height:18px;margin:0}.altcha-hidden.svelte-fqcw55.svelte-fqcw55{display:none}.altcha-spinner.svelte-fqcw55.svelte-fqcw55{animation:svelte-fqcw55-altcha-spinner 0.75s infinite linear;transform-origin:center}@keyframes svelte-fqcw55-altcha-spinner{100%{transform:rotate(360deg)}}");
}
function ae(t) {
  let e, n, i;
  return {
    c() {
      e = V("svg"), n = V("path"), i = V("path"), s(n, "d", "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"), s(n, "fill", "currentColor"), s(n, "opacity", ".25"), s(i, "d", "M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"), s(i, "fill", "currentColor"), s(i, "class", "altcha-spinner svelte-fqcw55"), s(e, "width", "24"), s(e, "height", "24"), s(e, "viewBox", "0 0 24 24"), s(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(l, r) {
      A(l, e, r), g(e, n), g(e, i);
    },
    d(l) {
      l && R(e);
    }
  };
}
function at(t) {
  let e, n = (
    /*_strings*/
    t[8].label + ""
  ), i;
  return {
    c() {
      e = v("label"), s(e, "for", i = /*name*/
      t[2] + "_checkbox"), s(e, "class", "svelte-fqcw55");
    },
    m(l, r) {
      A(l, e, r), e.innerHTML = n;
    },
    p(l, r) {
      r[0] & /*_strings*/
      256 && n !== (n = /*_strings*/
      l[8].label + "") && (e.innerHTML = n), r[0] & /*name*/
      4 && i !== (i = /*name*/
      l[2] + "_checkbox") && s(e, "for", i);
    },
    d(l) {
      l && R(e);
    }
  };
}
function ft(t) {
  let e, n = (
    /*_strings*/
    t[8].verifying + ""
  );
  return {
    c() {
      e = v("span");
    },
    m(i, l) {
      A(i, e, l), e.innerHTML = n;
    },
    p(i, l) {
      l[0] & /*_strings*/
      256 && n !== (n = /*_strings*/
      i[8].verifying + "") && (e.innerHTML = n);
    },
    d(i) {
      i && R(e);
    }
  };
}
function ut(t) {
  let e, n = (
    /*_strings*/
    t[8].verified + ""
  ), i, l;
  return {
    c() {
      e = v("span"), i = F(), l = v("input"), s(l, "type", "hidden"), s(
        l,
        "name",
        /*name*/
        t[2]
      ), l.value = /*payload*/
      t[3];
    },
    m(r, c) {
      A(r, e, c), e.innerHTML = n, A(r, i, c), A(r, l, c);
    },
    p(r, c) {
      c[0] & /*_strings*/
      256 && n !== (n = /*_strings*/
      r[8].verified + "") && (e.innerHTML = n), c[0] & /*name*/
      4 && s(
        l,
        "name",
        /*name*/
        r[2]
      ), c[0] & /*payload*/
      8 && (l.value = /*payload*/
      r[3]);
    },
    d(r) {
      r && (R(e), R(i), R(l));
    }
  };
}
function fe(t) {
  let e, n, i, l, r, c = (
    /*_strings*/
    t[8].error + ""
  );
  return {
    c() {
      e = v("div"), n = V("svg"), i = V("path"), l = F(), r = v("div"), s(i, "stroke-linecap", "round"), s(i, "stroke-linejoin", "round"), s(i, "d", "M6 18L18 6M6 6l12 12"), s(n, "width", "14"), s(n, "height", "14"), s(n, "xmlns", "http://www.w3.org/2000/svg"), s(n, "fill", "none"), s(n, "viewBox", "0 0 24 24"), s(n, "stroke-width", "1.5"), s(n, "stroke", "currentColor"), s(
        r,
        "title",
        /*error*/
        t[7]
      ), s(e, "class", "altcha-error svelte-fqcw55");
    },
    m(a, u) {
      A(a, e, u), g(e, n), g(n, i), g(e, l), g(e, r), r.innerHTML = c;
    },
    p(a, u) {
      u[0] & /*_strings*/
      256 && c !== (c = /*_strings*/
      a[8].error + "") && (r.innerHTML = c), u[0] & /*error*/
      128 && s(
        r,
        "title",
        /*error*/
        a[7]
      );
    },
    d(a) {
      a && R(e);
    }
  };
}
function ue(t) {
  let e, n, i = (
    /*_strings*/
    t[8].footer + ""
  );
  return {
    c() {
      e = v("div"), n = v("div"), s(n, "class", "svelte-fqcw55"), s(e, "class", "altcha-footer svelte-fqcw55");
    },
    m(l, r) {
      A(l, e, r), g(e, n), n.innerHTML = i;
    },
    p(l, r) {
      r[0] & /*_strings*/
      256 && i !== (i = /*_strings*/
      l[8].footer + "") && (n.innerHTML = i);
    },
    d(l) {
      l && R(e);
    }
  };
}
function ht(t) {
  let e, n, i, l, r, c, a, u, f, j, y, E, w, I, G, U, H, N, M, k, b = (
    /*state*/
    t[4] === p.VERIFYING && ae()
  );
  function S(h, x) {
    return (
      /*state*/
      h[4] === p.VERIFIED ? ut : (
        /*state*/
        h[4] === p.VERIFYING ? ft : at
      )
    );
  }
  let C = S(t), d = C(t), $ = (
    /*error*/
    t[7] && fe(t)
  ), _ = (
    /*_strings*/
    t[8].footer && /*hidefooter*/
    t[1] !== !0 && ue(t)
  );
  return {
    c() {
      e = v("div"), n = v("div"), b && b.c(), i = F(), l = v("div"), r = v("input"), u = F(), f = v("div"), d.c(), j = F(), y = v("div"), E = v("a"), w = V("svg"), I = V("path"), G = V("path"), U = V("path"), H = F(), $ && $.c(), N = F(), _ && _.c(), s(r, "type", "checkbox"), s(r, "id", c = /*name*/
      t[2] + "_checkbox"), r.required = a = /*auto*/
      t[0] !== "onsubmit", s(r, "class", "svelte-fqcw55"), s(l, "class", "altcha-checkbox svelte-fqcw55"), oe(
        l,
        "altcha-hidden",
        /*state*/
        t[4] === p.VERIFYING
      ), s(f, "class", "altcha-label svelte-fqcw55"), s(I, "d", "M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z"), s(I, "fill", "currentColor"), s(G, "d", "M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z"), s(G, "fill", "currentColor"), s(U, "d", "M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z"), s(U, "fill", "currentColor"), s(w, "width", "22"), s(w, "height", "22"), s(w, "viewBox", "0 0 20 20"), s(w, "fill", "none"), s(w, "xmlns", "http://www.w3.org/2000/svg"), s(E, "href", ve), s(E, "target", "_blank"), s(E, "class", "altcha-logo svelte-fqcw55"), s(n, "class", "altcha-main svelte-fqcw55"), s(e, "class", "altcha svelte-fqcw55"), s(
        e,
        "data-state",
        /*state*/
        t[4]
      );
    },
    m(h, x) {
      A(h, e, x), g(e, n), b && b.m(n, null), g(n, i), g(n, l), g(l, r), r.checked = /*checked*/
      t[5], g(n, u), g(n, f), d.m(f, null), g(n, j), g(n, y), g(y, E), g(E, w), g(w, I), g(w, G), g(w, U), g(e, H), $ && $.m(e, null), g(e, N), _ && _.m(e, null), t[22](e), M || (k = [
        J(
          r,
          "change",
          /*input_change_handler*/
          t[21]
        ),
        J(
          r,
          "change",
          /*onCheckedChange*/
          t[9]
        ),
        J(
          r,
          "invalid",
          /*onInvalid*/
          t[10]
        )
      ], M = !0);
    },
    p(h, x) {
      /*state*/
      h[4] === p.VERIFYING ? b || (b = ae(), b.c(), b.m(n, i)) : b && (b.d(1), b = null), x[0] & /*name*/
      4 && c !== (c = /*name*/
      h[2] + "_checkbox") && s(r, "id", c), x[0] & /*auto*/
      1 && a !== (a = /*auto*/
      h[0] !== "onsubmit") && (r.required = a), x[0] & /*checked*/
      32 && (r.checked = /*checked*/
      h[5]), x[0] & /*state*/
      16 && oe(
        l,
        "altcha-hidden",
        /*state*/
        h[4] === p.VERIFYING
      ), C === (C = S(h)) && d ? d.p(h, x) : (d.d(1), d = C(h), d && (d.c(), d.m(f, null))), /*error*/
      h[7] ? $ ? $.p(h, x) : ($ = fe(h), $.c(), $.m(e, N)) : $ && ($.d(1), $ = null), /*_strings*/
      h[8].footer && /*hidefooter*/
      h[1] !== !0 ? _ ? _.p(h, x) : (_ = ue(h), _.c(), _.m(e, null)) : _ && (_.d(1), _ = null), x[0] & /*state*/
      16 && s(
        e,
        "data-state",
        /*state*/
        h[4]
      );
    },
    i: W,
    o: W,
    d(h) {
      h && R(e), b && b.d(), d.d(), $ && $.d(), _ && _.d(), t[22](null), M = !1, T(k);
    }
  };
}
const ve = "https://altcha.org/";
function he(t) {
  return JSON.parse(t);
}
function dt(t, e, n) {
  let i, l, r, { auto: c = void 0 } = e, { challengeurl: a = void 0 } = e, { challengejson: u = void 0 } = e, { debug: f = !1 } = e, { hidefooter: j = !1 } = e, { name: y = "altcha" } = e, { maxnumber: E = void 0 } = e, { mockerror: w = !1 } = e, { strings: I = void 0 } = e, { test: G = !1 } = e;
  const U = He(), H = ["SHA-256", "SHA-384", "SHA-512"];
  let N = !1, M, k = null, b = null, S = null, C = p.UNVERIFIED;
  Oe(() => {
    k && (k.removeEventListener("submit", $), k.removeEventListener("reset", _), k = null);
  }), Ze(() => {
    d("mounted", "0.1.5"), G && d("using test mode"), c !== void 0 && d("auto", c), k = M.closest("form"), k && (k.addEventListener("submit", $), k.addEventListener("reset", _)), c === "onload" && X();
  });
  function d(...o) {
    (f || o.some((m) => m instanceof Error)) && console[o[0] instanceof Error ? "error" : "log"]("ALTCHA", ...o);
  }
  function $(o) {
    k && c === "onsubmit" && C === p.UNVERIFIED && (o.preventDefault(), o.stopPropagation(), X().then(() => {
      k == null || k.requestSubmit();
    }));
  }
  function _() {
    K();
  }
  function h(o, m) {
    return btoa(JSON.stringify({
      algorithm: o.algorithm,
      challenge: o.challenge,
      number: m.number,
      salt: o.salt,
      signature: o.signature,
      test: G ? !0 : void 0,
      took: m.took
    }));
  }
  function x(o) {
    if (!o.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (o.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!H.includes(o.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${H.join(", ")}`);
    if (!o.challenge || o.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!o.salt || o.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function pe() {
    if (w)
      throw d("mocking error"), new Error("Mocked error.");
    if (i)
      return d("using provided json data"), i;
    if (G)
      return d("generating test challenge"), ot();
    {
      if (!a)
        throw new Error("Attribute challengeurl not set.");
      d("fetching challenge from", a);
      const o = await fetch(a);
      if (o.status !== 200)
        throw new Error(`Server responded with ${o.status}.`);
      return o.json();
    }
  }
  async function ye(o) {
    let m = null;
    if ("Worker" in window) {
      try {
        m = await ke(o.challenge, o.salt, o.algorithm);
      } catch (z) {
        d(z);
      }
      if ((m == null ? void 0 : m.number) !== void 0)
        return { data: o, solution: m };
    }
    return {
      data: o,
      solution: await st(o.challenge, o.salt, o.algorithm, E)
    };
  }
  async function ke(o, m, z) {
    const ie = new nt();
    return new Promise((Le) => {
      ie.addEventListener("message", (qe) => {
        Le(qe.data);
      }), ie.postMessage({ alg: z, challenge: o, max: E, salt: m });
    });
  }
  function Ee() {
    [p.UNVERIFIED, p.ERROR].includes(C) ? X() : n(5, N = !0);
  }
  function Ce() {
    C === p.VERIFYING && alert(r.waitAlert);
  }
  function K(o = p.UNVERIFIED) {
    n(5, N = !1), n(7, b = null), n(3, S = null), n(4, C = o);
  }
  async function X() {
    return K(p.VERIFYING), pe().then((o) => (x(o), d("challenge", o), ye(o))).then(({ data: o, solution: m }) => {
      if (d("solution", m), (m == null ? void 0 : m.number) !== void 0)
        d("verified"), n(4, C = p.VERIFIED), n(5, N = !0), n(3, S = h(o, m)), d("payload", S), Be().then(() => {
          U("verified", { payload: S });
        });
      else
        throw new Error("Unexpected result returned.");
    }).catch((o) => {
      d(o), n(4, C = p.ERROR), n(5, N = !1), n(7, b = o);
    });
  }
  function xe() {
    N = this.checked, n(5, N);
  }
  function Ie(o) {
    ee[o ? "unshift" : "push"](() => {
      M = o, n(6, M);
    });
  }
  return t.$$set = (o) => {
    "auto" in o && n(0, c = o.auto), "challengeurl" in o && n(11, a = o.challengeurl), "challengejson" in o && n(12, u = o.challengejson), "debug" in o && n(13, f = o.debug), "hidefooter" in o && n(1, j = o.hidefooter), "name" in o && n(2, y = o.name), "maxnumber" in o && n(14, E = o.maxnumber), "mockerror" in o && n(15, w = o.mockerror), "strings" in o && n(16, I = o.strings), "test" in o && n(17, G = o.test);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*challengejson*/
    4096 && (i = u ? he(u) : void 0), t.$$.dirty[0] & /*strings*/
    65536 && n(20, l = I ? he(I) : {}), t.$$.dirty[0] & /*parsedStrings*/
    1048576 && n(8, r = {
      error: "Verification failed. Try again later.",
      footer: `Protected by <a href="${ve}" target="_blank">ALTCHA</a>`,
      label: "I'm not a robot",
      verified: "Verified",
      verifying: "Verifying...",
      waitAlert: "Verifying... please wait.",
      ...l
    }), t.$$.dirty[0] & /*payload, state*/
    24 && U("statechange", { payload: S, state: C });
  }, [
    c,
    j,
    y,
    S,
    C,
    N,
    M,
    b,
    r,
    Ee,
    Ce,
    a,
    u,
    f,
    E,
    w,
    I,
    G,
    K,
    X,
    l,
    xe,
    Ie
  ];
}
class gt extends et {
  constructor(e) {
    super(), Je(
      this,
      e,
      dt,
      ht,
      je,
      {
        auto: 0,
        challengeurl: 11,
        challengejson: 12,
        debug: 13,
        hidefooter: 1,
        name: 2,
        maxnumber: 14,
        mockerror: 15,
        strings: 16,
        test: 17,
        reset: 18,
        verify: 19
      },
      ct,
      [-1, -1]
    );
  }
  get auto() {
    return this.$$.ctx[0];
  }
  set auto(e) {
    this.$$set({ auto: e }), q();
  }
  get challengeurl() {
    return this.$$.ctx[11];
  }
  set challengeurl(e) {
    this.$$set({ challengeurl: e }), q();
  }
  get challengejson() {
    return this.$$.ctx[12];
  }
  set challengejson(e) {
    this.$$set({ challengejson: e }), q();
  }
  get debug() {
    return this.$$.ctx[13];
  }
  set debug(e) {
    this.$$set({ debug: e }), q();
  }
  get hidefooter() {
    return this.$$.ctx[1];
  }
  set hidefooter(e) {
    this.$$set({ hidefooter: e }), q();
  }
  get name() {
    return this.$$.ctx[2];
  }
  set name(e) {
    this.$$set({ name: e }), q();
  }
  get maxnumber() {
    return this.$$.ctx[14];
  }
  set maxnumber(e) {
    this.$$set({ maxnumber: e }), q();
  }
  get mockerror() {
    return this.$$.ctx[15];
  }
  set mockerror(e) {
    this.$$set({ mockerror: e }), q();
  }
  get strings() {
    return this.$$.ctx[16];
  }
  set strings(e) {
    this.$$set({ strings: e }), q();
  }
  get test() {
    return this.$$.ctx[17];
  }
  set test(e) {
    this.$$set({ test: e }), q();
  }
  get reset() {
    return this.$$.ctx[18];
  }
  get verify() {
    return this.$$.ctx[19];
  }
}
customElements.define("altcha-widget", Qe(gt, { auto: {}, challengeurl: {}, challengejson: {}, debug: { type: "Boolean" }, hidefooter: { type: "Boolean" }, name: {}, maxnumber: {}, mockerror: { type: "Boolean" }, strings: {}, test: { type: "Boolean" } }, [], ["reset", "verify"], !1));
export {
  gt as Altcha
};
