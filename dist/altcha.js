var je = Object.defineProperty;
var Ge = (t, e, n) => e in t ? je(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var x = (t, e, n) => (Ge(t, typeof e != "symbol" ? e + "" : e, n), n);
function Z() {
}
function de(t) {
  return t();
}
function ie() {
  return /* @__PURE__ */ Object.create(null);
}
function H(t) {
  t.forEach(de);
}
function ge(t) {
  return typeof t == "function";
}
function Ae(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function Se(t) {
  return Object.keys(t).length === 0;
}
function m(t, e) {
  t.appendChild(e);
}
function Ve(t, e, n) {
  const r = Me(t);
  if (!r.getElementById(e)) {
    const l = v("style");
    l.id = e, l.textContent = n, Ue(r, l);
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
function Ue(t, e) {
  return m(
    /** @type {Document} */
    t.head || t,
    e
  ), e.sheet;
}
function q(t, e, n) {
  t.insertBefore(e, n || null);
}
function I(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function v(t) {
  return document.createElement(t);
}
function G(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function Fe(t) {
  return document.createTextNode(t);
}
function M() {
  return Fe(" ");
}
function D(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
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
function Ze(t, e, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: n, cancelable: r });
}
function Oe(t) {
  const e = {};
  return t.childNodes.forEach(
    /** @param {Element} node */
    (n) => {
      e[n.slot || "default"] = !0;
    }
  ), e;
}
let B;
function O(t) {
  B = t;
}
function ee() {
  if (!B)
    throw new Error("Function called outside component initialization");
  return B;
}
function Be(t) {
  ee().$$.on_mount.push(t);
}
function He(t) {
  ee().$$.on_destroy.push(t);
}
function We() {
  const t = ee();
  return (e, n, { cancelable: r = !1 } = {}) => {
    const l = t.$$.callbacks[e];
    if (l) {
      const i = Ze(
        /** @type {string} */
        e,
        n,
        { cancelable: r }
      );
      return l.slice().forEach((s) => {
        s.call(t, i);
      }), !i.defaultPrevented;
    }
    return !0;
  };
}
const F = [], z = [];
let Y = [];
const oe = [], me = /* @__PURE__ */ Promise.resolve();
let J = !1;
function we() {
  J || (J = !0, me.then(C));
}
function Pe() {
  return we(), me;
}
function Q(t) {
  Y.push(t);
}
const K = /* @__PURE__ */ new Set();
let U = 0;
function C() {
  if (U !== 0)
    return;
  const t = B;
  do {
    try {
      for (; U < F.length; ) {
        const e = F[U];
        U++, O(e), Te(e.$$);
      }
    } catch (e) {
      throw F.length = 0, U = 0, e;
    }
    for (O(null), F.length = 0, U = 0; z.length; )
      z.pop()();
    for (let e = 0; e < Y.length; e += 1) {
      const n = Y[e];
      K.has(n) || (K.add(n), n());
    }
    Y.length = 0;
  } while (F.length);
  for (; oe.length; )
    oe.pop()();
  J = !1, K.clear(), O(t);
}
function Te(t) {
  if (t.fragment !== null) {
    t.update(), H(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Q);
  }
}
function Xe(t) {
  const e = [], n = [];
  Y.forEach((r) => t.indexOf(r) === -1 ? e.push(r) : n.push(r)), n.forEach((r) => r()), Y = e;
}
const De = /* @__PURE__ */ new Set();
function Ke(t, e) {
  t && t.i && (De.delete(t), t.i(e));
}
function ze(t, e, n) {
  const { fragment: r, after_update: l } = t.$$;
  r && r.m(e, n), Q(() => {
    const i = t.$$.on_mount.map(de).filter(ge);
    t.$$.on_destroy ? t.$$.on_destroy.push(...i) : H(i), t.$$.on_mount = [];
  }), l.forEach(Q);
}
function Je(t, e) {
  const n = t.$$;
  n.fragment !== null && (Xe(n.after_update), H(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Qe(t, e) {
  t.$$.dirty[0] === -1 && (F.push(t), we(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function et(t, e, n, r, l, i, s = null, a = [-1]) {
  const u = B;
  O(t);
  const f = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: i,
    update: Z,
    not_equal: l,
    bound: ie(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: ie(),
    dirty: a,
    skip_bound: !1,
    root: e.target || u.$$.root
  };
  s && s(f.root);
  let N = !1;
  if (f.ctx = n ? n(t, e.props || {}, (y, R, ...L) => {
    const j = L.length ? L[0] : R;
    return f.ctx && l(f.ctx[y], f.ctx[y] = j) && (!f.skip_bound && f.bound[y] && f.bound[y](j), N && Qe(t, y)), R;
  }) : [], f.update(), N = !0, H(f.before_update), f.fragment = r ? r(f.ctx) : !1, e.target) {
    if (e.hydrate) {
      const y = Ye(e.target);
      f.fragment && f.fragment.l(y), y.forEach(I);
    } else
      f.fragment && f.fragment.c();
    e.intro && Ke(t.$$.fragment), ze(t, e.target, e.anchor), C();
  }
  O(u);
}
let be;
typeof HTMLElement == "function" && (be = class extends HTMLElement {
  constructor(e, n, r) {
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
    this.$$ctor = e, this.$$s = n, r && this.attachShadow({ mode: "open" });
  }
  addEventListener(e, n, r) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(n), this.$$c) {
      const l = this.$$c.$on(e, n);
      this.$$l_u.set(n, l);
    }
    super.addEventListener(e, n, r);
  }
  removeEventListener(e, n, r) {
    if (super.removeEventListener(e, n, r), this.$$c) {
      const l = this.$$l_u.get(n);
      l && (l(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(i) {
        return () => {
          let s;
          return {
            c: function() {
              s = v("slot"), i !== "default" && c(s, "name", i);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(f, N) {
              q(f, s, N);
            },
            d: function(f) {
              f && I(s);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn)
        return;
      const n = {}, r = Oe(this);
      for (const i of this.$$s)
        i in r && (n[i] = [e(i)]);
      for (const i of this.attributes) {
        const s = this.$$g_p(i.name);
        s in this.$$d || (this.$$d[s] = P(s, i.value, this.$$p_d, "toProp"));
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
        for (const i in this.$$p_d)
          if (this.$$d[i] = this.$$c.$$.ctx[this.$$c.$$.props[i]], this.$$p_d[i].reflect) {
            const s = P(
              i,
              this.$$d[i],
              this.$$p_d,
              "toAttribute"
            );
            s == null ? this.removeAttribute(this.$$p_d[i].attribute || i) : this.setAttribute(this.$$p_d[i].attribute || i, s);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(l), l();
      for (const i in this.$$l)
        for (const s of this.$$l[i]) {
          const a = this.$$c.$on(i, s);
          this.$$l_u.set(s, a);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(e, n, r) {
    var l;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = P(e, r, this.$$p_d, "toProp"), (l = this.$$c) == null || l.$set({ [e]: this.$$d[e] }));
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
function P(t, e, n, r) {
  var i;
  const l = (i = n[t]) == null ? void 0 : i.type;
  if (e = l === "Boolean" && typeof e != "boolean" ? e != null : e, !r || !n[t])
    return e;
  if (r === "toAttribute")
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
function tt(t, e, n, r, l, i) {
  let s = class extends be {
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
      set(u) {
        var f;
        u = P(a, u, e), this.$$d[a] = u, (f = this.$$c) == null || f.$set({ [a]: u });
      }
    });
  }), r.forEach((a) => {
    Object.defineProperty(s.prototype, a, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[a];
      }
    });
  }), i && (s = i(s)), t.element = /** @type {any} */
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
    Je(this, 1), this.$destroy = Z;
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
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const l = r.indexOf(n);
      l !== -1 && r.splice(l, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !Se(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const rt = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(rt);
const _e = "KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2NvbnN0IHI9bmV3IFRleHRFbmNvZGVyO2Z1bmN0aW9uIGMoZSl7cmV0dXJuWy4uLm5ldyBVaW50OEFycmF5KGUpXS5tYXAobj0+bi50b1N0cmluZygxNikucGFkU3RhcnQoMiwiMCIpKS5qb2luKCIiKX1hc3luYyBmdW5jdGlvbiBsKGUsbixhKXtyZXR1cm4gYyhhd2FpdCBjcnlwdG8uc3VidGxlLmRpZ2VzdChhLnRvVXBwZXJDYXNlKCksci5lbmNvZGUoZStuKSkpfWFzeW5jIGZ1bmN0aW9uIGkoZSxuLGE9IlNIQS0yNTYiLG89MWU3KXtjb25zdCBzPURhdGUubm93KCk7Zm9yKGxldCB0PTA7dDw9bzt0KyspaWYoYXdhaXQgbChuLHQsYSk9PT1lKXJldHVybntudW1iZXI6dCx0b29rOkRhdGUubm93KCktc307cmV0dXJuIG51bGx9b25tZXNzYWdlPWFzeW5jIGU9Pntjb25zdHthbGc6bixjaGFsbGVuZ2U6YSxtYXg6byxzYWx0OnN9PWUuZGF0YXx8e307aWYoYSYmcyl7Y29uc3QgdD1hd2FpdCBpKGEscyxuLG8pO3NlbGYucG9zdE1lc3NhZ2UodCYmey4uLnQsd29ya2VyOiEwfSl9ZWxzZSBzZWxmLnBvc3RNZXNzYWdlKG51bGwpfX0pKCk7Cg==", se = typeof window < "u" && window.Blob && new Blob([atob(_e)], { type: "text/javascript;charset=utf-8" });
function it() {
  let t;
  try {
    if (t = se && (window.URL || window.webkitURL).createObjectURL(se), !t)
      throw "";
    return new Worker(t);
  } catch {
    return new Worker("data:application/javascript;base64," + _e);
  } finally {
    t && (window.URL || window.webkitURL).revokeObjectURL(t);
  }
}
const lt = 1e7, ot = new TextEncoder();
function st(t) {
  return [...new Uint8Array(t)].map((e) => e.toString(16).padStart(2, "0")).join("");
}
async function ct(t = 1e5, e = "SHA-256") {
  const n = Date.now().toString(16), r = Math.round(Math.random() * t), l = await $e(n, r, e);
  return {
    algorithm: e,
    challenge: l,
    salt: n,
    signature: ""
  };
}
async function $e(t, e, n) {
  return st(await crypto.subtle.digest(n.toUpperCase(), ot.encode(t + e)));
}
async function at(t, e, n = "SHA-256", r = lt) {
  const l = Date.now();
  for (let i = 0; i <= r; i++)
    if (await $e(e, i, n) === t)
      return {
        number: i,
        took: Date.now() - l
      };
  return null;
}
var p = /* @__PURE__ */ ((t) => (t.ERROR = "error", t.VERIFIED = "verified", t.VERIFYING = "verifying", t.UNVERIFIED = "unverified", t))(p || {});
function ft(t) {
  Ve(t, "svelte-fqcw55", ".altcha.svelte-fqcw55.svelte-fqcw55{background:var(--altcha-color-base, transparent);border:1px solid var(--altcha-color-border, #a0a0a0);border-radius:3px;color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:260px;overflow:hidden;position:relative;text-align:left}.altcha.svelte-fqcw55.svelte-fqcw55:focus-within{border-color:var(--altcha-color-border-focus, currentColor)}.altcha-main.svelte-fqcw55.svelte-fqcw55{align-items:center;display:flex;gap:0.4rem;padding:0.7rem}.altcha-label.svelte-fqcw55.svelte-fqcw55{flex-grow:1}.altcha-label.svelte-fqcw55 label.svelte-fqcw55{cursor:pointer}.altcha-logo.svelte-fqcw55.svelte-fqcw55{color:currentColor;opacity:0.3}.altcha-logo.svelte-fqcw55.svelte-fqcw55:hover{opacity:1}.altcha-error.svelte-fqcw55.svelte-fqcw55{color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem}.altcha-footer.svelte-fqcw55.svelte-fqcw55{align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.4;padding:0.2rem 0.7rem;text-align:right}.altcha-footer.svelte-fqcw55.svelte-fqcw55:hover{opacity:1}.altcha-footer.svelte-fqcw55>.svelte-fqcw55:first-child{flex-grow:1}.altcha-footer.svelte-fqcw55 a{color:currentColor}.altcha-checkbox.svelte-fqcw55.svelte-fqcw55{display:flex;align-items:center;height:24px;width:24px}.altcha-checkbox.svelte-fqcw55 input.svelte-fqcw55{width:18px;height:18px;margin:0}.altcha-hidden.svelte-fqcw55.svelte-fqcw55{display:none}.altcha-spinner.svelte-fqcw55.svelte-fqcw55{animation:svelte-fqcw55-altcha-spinner 0.75s infinite linear;transform-origin:center}@keyframes svelte-fqcw55-altcha-spinner{100%{transform:rotate(360deg)}}");
}
function ce(t) {
  let e, n, r;
  return {
    c() {
      e = G("svg"), n = G("path"), r = G("path"), c(n, "d", "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"), c(n, "fill", "currentColor"), c(n, "opacity", ".25"), c(r, "d", "M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"), c(r, "fill", "currentColor"), c(r, "class", "altcha-spinner svelte-fqcw55"), c(e, "width", "24"), c(e, "height", "24"), c(e, "viewBox", "0 0 24 24"), c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(l, i) {
      q(l, e, i), m(e, n), m(e, r);
    },
    d(l) {
      l && I(e);
    }
  };
}
function ut(t) {
  let e, n = (
    /*_strings*/
    t[9].label + ""
  ), r;
  return {
    c() {
      e = v("label"), c(e, "for", r = /*name*/
      t[3] + "_checkbox"), c(e, "class", "svelte-fqcw55");
    },
    m(l, i) {
      q(l, e, i), e.innerHTML = n;
    },
    p(l, i) {
      i[0] & /*_strings*/
      512 && n !== (n = /*_strings*/
      l[9].label + "") && (e.innerHTML = n), i[0] & /*name*/
      8 && r !== (r = /*name*/
      l[3] + "_checkbox") && c(e, "for", r);
    },
    d(l) {
      l && I(e);
    }
  };
}
function ht(t) {
  let e, n = (
    /*_strings*/
    t[9].verifying + ""
  );
  return {
    c() {
      e = v("span");
    },
    m(r, l) {
      q(r, e, l), e.innerHTML = n;
    },
    p(r, l) {
      l[0] & /*_strings*/
      512 && n !== (n = /*_strings*/
      r[9].verifying + "") && (e.innerHTML = n);
    },
    d(r) {
      r && I(e);
    }
  };
}
function dt(t) {
  let e, n = (
    /*_strings*/
    t[9].verified + ""
  ), r, l;
  return {
    c() {
      e = v("span"), r = M(), l = v("input"), c(l, "type", "hidden"), c(
        l,
        "name",
        /*name*/
        t[3]
      ), l.value = /*payload*/
      t[4];
    },
    m(i, s) {
      q(i, e, s), e.innerHTML = n, q(i, r, s), q(i, l, s);
    },
    p(i, s) {
      s[0] & /*_strings*/
      512 && n !== (n = /*_strings*/
      i[9].verified + "") && (e.innerHTML = n), s[0] & /*name*/
      8 && c(
        l,
        "name",
        /*name*/
        i[3]
      ), s[0] & /*payload*/
      16 && (l.value = /*payload*/
      i[4]);
    },
    d(i) {
      i && (I(e), I(r), I(l));
    }
  };
}
function ae(t) {
  let e, n, r, l, i, s;
  return {
    c() {
      e = v("div"), n = v("a"), r = G("svg"), l = G("path"), i = G("path"), s = G("path"), c(l, "d", "M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z"), c(l, "fill", "currentColor"), c(i, "d", "M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z"), c(i, "fill", "currentColor"), c(s, "d", "M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z"), c(s, "fill", "currentColor"), c(r, "width", "22"), c(r, "height", "22"), c(r, "viewBox", "0 0 20 20"), c(r, "fill", "none"), c(r, "xmlns", "http://www.w3.org/2000/svg"), c(n, "href", ve), c(n, "target", "_blank"), c(n, "class", "altcha-logo svelte-fqcw55");
    },
    m(a, u) {
      q(a, e, u), m(e, n), m(n, r), m(r, l), m(r, i), m(r, s);
    },
    p: Z,
    d(a) {
      a && I(e);
    }
  };
}
function fe(t) {
  let e, n, r, l, i, s = (
    /*_strings*/
    t[9].error + ""
  );
  return {
    c() {
      e = v("div"), n = G("svg"), r = G("path"), l = M(), i = v("div"), c(r, "stroke-linecap", "round"), c(r, "stroke-linejoin", "round"), c(r, "d", "M6 18L18 6M6 6l12 12"), c(n, "width", "14"), c(n, "height", "14"), c(n, "xmlns", "http://www.w3.org/2000/svg"), c(n, "fill", "none"), c(n, "viewBox", "0 0 24 24"), c(n, "stroke-width", "1.5"), c(n, "stroke", "currentColor"), c(
        i,
        "title",
        /*error*/
        t[8]
      ), c(e, "class", "altcha-error svelte-fqcw55");
    },
    m(a, u) {
      q(a, e, u), m(e, n), m(n, r), m(e, l), m(e, i), i.innerHTML = s;
    },
    p(a, u) {
      u[0] & /*_strings*/
      512 && s !== (s = /*_strings*/
      a[9].error + "") && (i.innerHTML = s), u[0] & /*error*/
      256 && c(
        i,
        "title",
        /*error*/
        a[8]
      );
    },
    d(a) {
      a && I(e);
    }
  };
}
function ue(t) {
  let e, n, r = (
    /*_strings*/
    t[9].footer + ""
  );
  return {
    c() {
      e = v("div"), n = v("div"), c(n, "class", "svelte-fqcw55"), c(e, "class", "altcha-footer svelte-fqcw55");
    },
    m(l, i) {
      q(l, e, i), m(e, n), n.innerHTML = r;
    },
    p(l, i) {
      i[0] & /*_strings*/
      512 && r !== (r = /*_strings*/
      l[9].footer + "") && (n.innerHTML = r);
    },
    d(l) {
      l && I(e);
    }
  };
}
function gt(t) {
  let e, n, r, l, i, s, a, u, f, N, y, R, L, j, _ = (
    /*state*/
    t[5] === p.VERIFYING && ce()
  );
  function A(h, b) {
    return (
      /*state*/
      h[5] === p.VERIFIED ? dt : (
        /*state*/
        h[5] === p.VERIFYING ? ht : ut
      )
    );
  }
  let V = A(t), k = V(t), g = (
    /*hidelogo*/
    t[2] !== !0 && ae()
  ), w = (
    /*error*/
    t[8] && fe(t)
  ), d = (
    /*_strings*/
    t[9].footer && /*hidefooter*/
    t[1] !== !0 && ue(t)
  );
  return {
    c() {
      e = v("div"), n = v("div"), _ && _.c(), r = M(), l = v("div"), i = v("input"), u = M(), f = v("div"), k.c(), N = M(), g && g.c(), y = M(), w && w.c(), R = M(), d && d.c(), c(i, "type", "checkbox"), c(i, "id", s = /*name*/
      t[3] + "_checkbox"), i.required = a = /*auto*/
      t[0] !== "onsubmit", c(i, "class", "svelte-fqcw55"), c(l, "class", "altcha-checkbox svelte-fqcw55"), le(
        l,
        "altcha-hidden",
        /*state*/
        t[5] === p.VERIFYING
      ), c(f, "class", "altcha-label svelte-fqcw55"), c(n, "class", "altcha-main svelte-fqcw55"), c(e, "class", "altcha svelte-fqcw55"), c(
        e,
        "data-state",
        /*state*/
        t[5]
      );
    },
    m(h, b) {
      q(h, e, b), m(e, n), _ && _.m(n, null), m(n, r), m(n, l), m(l, i), i.checked = /*checked*/
      t[6], m(n, u), m(n, f), k.m(f, null), m(n, N), g && g.m(n, null), m(e, y), w && w.m(e, null), m(e, R), d && d.m(e, null), t[23](e), L || (j = [
        D(
          i,
          "change",
          /*input_change_handler*/
          t[22]
        ),
        D(
          i,
          "change",
          /*onCheckedChange*/
          t[10]
        ),
        D(
          i,
          "invalid",
          /*onInvalid*/
          t[11]
        )
      ], L = !0);
    },
    p(h, b) {
      /*state*/
      h[5] === p.VERIFYING ? _ || (_ = ce(), _.c(), _.m(n, r)) : _ && (_.d(1), _ = null), b[0] & /*name*/
      8 && s !== (s = /*name*/
      h[3] + "_checkbox") && c(i, "id", s), b[0] & /*auto*/
      1 && a !== (a = /*auto*/
      h[0] !== "onsubmit") && (i.required = a), b[0] & /*checked*/
      64 && (i.checked = /*checked*/
      h[6]), b[0] & /*state*/
      32 && le(
        l,
        "altcha-hidden",
        /*state*/
        h[5] === p.VERIFYING
      ), V === (V = A(h)) && k ? k.p(h, b) : (k.d(1), k = V(h), k && (k.c(), k.m(f, null))), /*hidelogo*/
      h[2] !== !0 ? g ? g.p(h, b) : (g = ae(), g.c(), g.m(n, null)) : g && (g.d(1), g = null), /*error*/
      h[8] ? w ? w.p(h, b) : (w = fe(h), w.c(), w.m(e, R)) : w && (w.d(1), w = null), /*_strings*/
      h[9].footer && /*hidefooter*/
      h[1] !== !0 ? d ? d.p(h, b) : (d = ue(h), d.c(), d.m(e, null)) : d && (d.d(1), d = null), b[0] & /*state*/
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
      h && I(e), _ && _.d(), k.d(), g && g.d(), w && w.d(), d && d.d(), t[23](null), L = !1, H(j);
    }
  };
}
const ve = "https://altcha.org/";
function he(t) {
  return JSON.parse(t);
}
function mt(t, e, n) {
  let r, l, i, { auto: s = void 0 } = e, { challengeurl: a = void 0 } = e, { challengejson: u = void 0 } = e, { debug: f = !1 } = e, { hidefooter: N = !1 } = e, { hidelogo: y = !1 } = e, { name: R = "altcha" } = e, { maxnumber: L = void 0 } = e, { mockerror: j = !1 } = e, { strings: _ = void 0 } = e, { test: A = !1 } = e;
  const V = We(), k = ["SHA-256", "SHA-384", "SHA-512"];
  let g = !1, w, d = null, h = null, b = null, S = p.UNVERIFIED;
  He(() => {
    d && (d.removeEventListener("submit", te), d.removeEventListener("reset", ne), d = null);
  }), Be(() => {
    E("mounted", "0.1.6"), A && E("using test mode"), s !== void 0 && E("auto", s), d = w.closest("form"), d && (d.addEventListener("submit", te), d.addEventListener("reset", ne)), s === "onload" && W();
  });
  function E(...o) {
    (f || o.some(($) => $ instanceof Error)) && console[o[0] instanceof Error ? "error" : "log"]("ALTCHA", ...o);
  }
  function te(o) {
    d && s === "onsubmit" && S === p.UNVERIFIED && (o.preventDefault(), o.stopPropagation(), W().then(() => {
      d == null || d.requestSubmit();
    }));
  }
  function ne() {
    T();
  }
  function pe(o, $) {
    return btoa(JSON.stringify({
      algorithm: o.algorithm,
      challenge: o.challenge,
      number: $.number,
      salt: o.salt,
      signature: o.signature,
      test: A ? !0 : void 0,
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
    if (j)
      throw E("mocking error"), new Error("Mocked error.");
    if (r)
      return E("using provided json data"), r;
    if (A)
      return E("generating test challenge"), ct();
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
      } catch (X) {
        E(X);
      }
      if (($ == null ? void 0 : $.number) !== void 0)
        return { data: o, solution: $ };
    }
    return {
      data: o,
      solution: await at(o.challenge, o.salt, o.algorithm, L)
    };
  }
  async function Ce(o, $, X) {
    const re = new it();
    return new Promise((Ne) => {
      re.addEventListener("message", (Re) => {
        Ne(Re.data);
      }), re.postMessage({ alg: X, challenge: o, max: L, salt: $ });
    });
  }
  function xe() {
    [p.UNVERIFIED, p.ERROR].includes(S) ? W() : n(6, g = !0);
  }
  function Ie() {
    S === p.VERIFYING && alert(i.waitAlert);
  }
  function T(o = p.UNVERIFIED) {
    n(6, g = !1), n(8, h = null), n(4, b = null), n(5, S = o);
  }
  async function W() {
    return T(p.VERIFYING), ke().then((o) => (ye(o), E("challenge", o), Ee(o))).then(({ data: o, solution: $ }) => {
      if (E("solution", $), ($ == null ? void 0 : $.number) !== void 0)
        E("verified"), n(5, S = p.VERIFIED), n(6, g = !0), n(4, b = pe(o, $)), E("payload", b), Pe().then(() => {
          V("verified", { payload: b });
        });
      else
        throw new Error("Unexpected result returned.");
    }).catch((o) => {
      E(o), n(5, S = p.ERROR), n(6, g = !1), n(8, h = o);
    });
  }
  function Le() {
    g = this.checked, n(6, g);
  }
  function qe(o) {
    z[o ? "unshift" : "push"](() => {
      w = o, n(7, w);
    });
  }
  return t.$$set = (o) => {
    "auto" in o && n(0, s = o.auto), "challengeurl" in o && n(12, a = o.challengeurl), "challengejson" in o && n(13, u = o.challengejson), "debug" in o && n(14, f = o.debug), "hidefooter" in o && n(1, N = o.hidefooter), "hidelogo" in o && n(2, y = o.hidelogo), "name" in o && n(3, R = o.name), "maxnumber" in o && n(15, L = o.maxnumber), "mockerror" in o && n(16, j = o.mockerror), "strings" in o && n(17, _ = o.strings), "test" in o && n(18, A = o.test);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*challengejson*/
    8192 && (r = u ? he(u) : void 0), t.$$.dirty[0] & /*strings*/
    131072 && n(21, l = _ ? he(_) : {}), t.$$.dirty[0] & /*parsedStrings*/
    2097152 && n(9, i = {
      error: "Verification failed. Try again later.",
      footer: `Protected by <a href="${ve}" target="_blank">ALTCHA</a>`,
      label: "I'm not a robot",
      verified: "Verified",
      verifying: "Verifying...",
      waitAlert: "Verifying... please wait.",
      ...l
    }), t.$$.dirty[0] & /*payload, state*/
    48 && V("statechange", { payload: b, state: S });
  }, [
    s,
    N,
    y,
    R,
    b,
    S,
    g,
    w,
    h,
    i,
    xe,
    Ie,
    a,
    u,
    f,
    L,
    j,
    _,
    A,
    T,
    W,
    l,
    Le,
    qe
  ];
}
class wt extends nt {
  constructor(e) {
    super(), et(
      this,
      e,
      mt,
      gt,
      Ae,
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
