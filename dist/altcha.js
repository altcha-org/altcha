var Ue = Object.defineProperty;
var Fe = (t, e, n) => e in t ? Ue(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var R = (t, e, n) => (Fe(t, typeof e != "symbol" ? e + "" : e, n), n);
function H() {
}
function _e(t) {
  return t();
}
function ue() {
  return /* @__PURE__ */ Object.create(null);
}
function X(t) {
  t.forEach(_e);
}
function we(t) {
  return typeof t == "function";
}
function Oe(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function Ye(t) {
  return Object.keys(t).length === 0;
}
function m(t, e) {
  t.appendChild(e);
}
function Ze(t, e, n) {
  const r = Be(t);
  if (!r.getElementById(e)) {
    const l = w("style");
    l.id = e, l.textContent = n, He(r, l);
  }
}
function Be(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : t.ownerDocument;
}
function He(t, e) {
  return m(
    /** @type {Document} */
    t.head || t,
    e
  ), e.sheet;
}
function L(t, e, n) {
  t.insertBefore(e, n || null);
}
function E(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function w(t) {
  return document.createElement(t);
}
function M(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function Te(t) {
  return document.createTextNode(t);
}
function U() {
  return Te(" ");
}
function Q(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function c(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function De(t) {
  return Array.from(t.childNodes);
}
function ae(t, e, n) {
  t.classList.toggle(e, !!n);
}
function Pe(t, e, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: n, cancelable: r });
}
function Xe(t) {
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
function re() {
  if (!P)
    throw new Error("Function called outside component initialization");
  return P;
}
function We(t) {
  re().$$.on_mount.push(t);
}
function Ke(t) {
  re().$$.on_destroy.push(t);
}
function ze() {
  const t = re();
  return (e, n, { cancelable: r = !1 } = {}) => {
    const l = t.$$.callbacks[e];
    if (l) {
      const o = Pe(
        /** @type {string} */
        e,
        n,
        { cancelable: r }
      );
      return l.slice().forEach((s) => {
        s.call(t, o);
      }), !o.defaultPrevented;
    }
    return !0;
  };
}
const Z = [], ee = [];
let B = [];
const fe = [], $e = /* @__PURE__ */ Promise.resolve();
let te = !1;
function pe() {
  te || (te = !0, $e.then(k));
}
function Je() {
  return pe(), $e;
}
function ne(t) {
  B.push(t);
}
const q = /* @__PURE__ */ new Set();
let Y = 0;
function k() {
  if (Y !== 0)
    return;
  const t = P;
  do {
    try {
      for (; Y < Z.length; ) {
        const e = Z[Y];
        Y++, D(e), Qe(e.$$);
      }
    } catch (e) {
      throw Z.length = 0, Y = 0, e;
    }
    for (D(null), Z.length = 0, Y = 0; ee.length; )
      ee.pop()();
    for (let e = 0; e < B.length; e += 1) {
      const n = B[e];
      q.has(n) || (q.add(n), n());
    }
    B.length = 0;
  } while (Z.length);
  for (; fe.length; )
    fe.pop()();
  te = !1, q.clear(), D(t);
}
function Qe(t) {
  if (t.fragment !== null) {
    t.update(), X(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(ne);
  }
}
function qe(t) {
  const e = [], n = [];
  B.forEach((r) => t.indexOf(r) === -1 ? e.push(r) : n.push(r)), n.forEach((r) => r()), B = e;
}
const et = /* @__PURE__ */ new Set();
function tt(t, e) {
  t && t.i && (et.delete(t), t.i(e));
}
function nt(t, e, n) {
  const { fragment: r, after_update: l } = t.$$;
  r && r.m(e, n), ne(() => {
    const o = t.$$.on_mount.map(_e).filter(we);
    t.$$.on_destroy ? t.$$.on_destroy.push(...o) : X(o), t.$$.on_mount = [];
  }), l.forEach(ne);
}
function rt(t, e) {
  const n = t.$$;
  n.fragment !== null && (qe(n.after_update), X(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function it(t, e) {
  t.$$.dirty[0] === -1 && (Z.push(t), pe(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function lt(t, e, n, r, l, o, s = null, u = [-1]) {
  const h = P;
  D(t);
  const a = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: H,
    not_equal: l,
    bound: ue(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (h ? h.$$.context : [])),
    // everything else
    callbacks: ue(),
    dirty: u,
    skip_bound: !1,
    root: e.target || h.$$.root
  };
  s && s(a.root);
  let x = !1;
  if (a.ctx = n ? n(t, e.props || {}, (y, A, ...G) => {
    const N = G.length ? G[0] : A;
    return a.ctx && l(a.ctx[y], a.ctx[y] = N) && (!a.skip_bound && a.bound[y] && a.bound[y](N), x && it(t, y)), A;
  }) : [], a.update(), x = !0, X(a.before_update), a.fragment = r ? r(a.ctx) : !1, e.target) {
    if (e.hydrate) {
      const y = De(e.target);
      a.fragment && a.fragment.l(y), y.forEach(E);
    } else
      a.fragment && a.fragment.c();
    e.intro && tt(t.$$.fragment), nt(t, e.target, e.anchor), k();
  }
  D(h);
}
let ye;
typeof HTMLElement == "function" && (ye = class extends HTMLElement {
  constructor(e, n, r) {
    super();
    /** The Svelte component constructor */
    R(this, "$$ctor");
    /** Slots */
    R(this, "$$s");
    /** The Svelte component instance */
    R(this, "$$c");
    /** Whether or not the custom element is connected */
    R(this, "$$cn", !1);
    /** Component props data */
    R(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    R(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    R(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    R(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    R(this, "$$l_u", /* @__PURE__ */ new Map());
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
      let e = function(o) {
        return () => {
          let s;
          return {
            c: function() {
              s = w("slot"), o !== "default" && c(s, "name", o);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(a, x) {
              L(a, s, x);
            },
            d: function(a) {
              a && E(s);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, r = Xe(this);
      for (const o of this.$$s)
        o in r && (n[o] = [e(o)]);
      for (const o of this.attributes) {
        const s = this.$$g_p(o.name);
        s in this.$$d || (this.$$d[s] = K(s, o.value, this.$$p_d, "toProp"));
      }
      for (const o in this.$$p_d)
        !(o in this.$$d) && this[o] !== void 0 && (this.$$d[o] = this[o], delete this[o]);
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
        for (const o in this.$$p_d)
          if (this.$$d[o] = this.$$c.$$.ctx[this.$$c.$$.props[o]], this.$$p_d[o].reflect) {
            const s = K(
              o,
              this.$$d[o],
              this.$$p_d,
              "toAttribute"
            );
            s == null ? this.removeAttribute(this.$$p_d[o].attribute || o) : this.setAttribute(this.$$p_d[o].attribute || o, s);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(l), l();
      for (const o in this.$$l)
        for (const s of this.$$l[o]) {
          const u = this.$$c.$on(o, s);
          this.$$l_u.set(s, u);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(e, n, r) {
    var l;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = K(e, r, this.$$p_d, "toProp"), (l = this.$$c) == null || l.$set({ [e]: this.$$d[e] }));
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
function K(t, e, n, r) {
  var o;
  const l = (o = n[t]) == null ? void 0 : o.type;
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
function ot(t, e, n, r, l, o) {
  let s = class extends ye {
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
      set(h) {
        var a;
        h = K(u, h, e), this.$$d[u] = h, (a = this.$$c) == null || a.$set({ [u]: h });
      }
    });
  }), r.forEach((u) => {
    Object.defineProperty(s.prototype, u, {
      get() {
        var h;
        return (h = this.$$c) == null ? void 0 : h[u];
      }
    });
  }), o && (s = o(s)), t.element = /** @type {any} */
  s, s;
}
class st {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    R(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    R(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    rt(this, 1), this.$destroy = H;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!we(n))
      return H;
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
    this.$$set && !Ye(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const ct = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(ct);
const ke = "KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2NvbnN0IHI9bmV3IFRleHRFbmNvZGVyO2Z1bmN0aW9uIGMoZSl7cmV0dXJuWy4uLm5ldyBVaW50OEFycmF5KGUpXS5tYXAobj0+bi50b1N0cmluZygxNikucGFkU3RhcnQoMiwiMCIpKS5qb2luKCIiKX1hc3luYyBmdW5jdGlvbiBsKGUsbixhKXtyZXR1cm4gYyhhd2FpdCBjcnlwdG8uc3VidGxlLmRpZ2VzdChhLnRvVXBwZXJDYXNlKCksci5lbmNvZGUoZStuKSkpfWFzeW5jIGZ1bmN0aW9uIGkoZSxuLGE9IlNIQS0yNTYiLG89MWU3KXtjb25zdCBzPURhdGUubm93KCk7Zm9yKGxldCB0PTA7dDw9bzt0KyspaWYoYXdhaXQgbChuLHQsYSk9PT1lKXJldHVybntudW1iZXI6dCx0b29rOkRhdGUubm93KCktc307cmV0dXJuIG51bGx9b25tZXNzYWdlPWFzeW5jIGU9Pntjb25zdHthbGc6bixjaGFsbGVuZ2U6YSxtYXg6byxzYWx0OnN9PWUuZGF0YXx8e307aWYoYSYmcyl7Y29uc3QgdD1hd2FpdCBpKGEscyxuLG8pO3NlbGYucG9zdE1lc3NhZ2UodCYmey4uLnQsd29ya2VyOiEwfSl9ZWxzZSBzZWxmLnBvc3RNZXNzYWdlKG51bGwpfX0pKCk7Cg==", ut = (t) => Uint8Array.from(atob(t), (e) => e.charCodeAt(0)), he = typeof window < "u" && window.Blob && new Blob([ut(ke)], { type: "text/javascript;charset=utf-8" });
function at(t) {
  let e;
  try {
    if (e = he && (window.URL || window.webkitURL).createObjectURL(he), !e)
      throw "";
    const n = new Worker(e, {
      name: t == null ? void 0 : t.name
    });
    return n.addEventListener("error", () => {
      (window.URL || window.webkitURL).revokeObjectURL(e);
    }), n;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + ke,
      {
        name: t == null ? void 0 : t.name
      }
    );
  } finally {
    e && (window.URL || window.webkitURL).revokeObjectURL(e);
  }
}
const ft = 1e7, ht = new TextEncoder();
function dt(t) {
  return [...new Uint8Array(t)].map((e) => e.toString(16).padStart(2, "0")).join("");
}
async function gt(t = 1e5, e = "SHA-256") {
  const n = Date.now().toString(16), r = Math.round(Math.random() * t), l = await Ee(n, r, e);
  return {
    algorithm: e,
    challenge: l,
    salt: n,
    signature: ""
  };
}
async function Ee(t, e, n) {
  return dt(await crypto.subtle.digest(n.toUpperCase(), ht.encode(t + e)));
}
async function bt(t, e, n = "SHA-256", r = ft) {
  const l = Date.now();
  for (let o = 0; o <= r; o++)
    if (await Ee(e, o, n) === t)
      return {
        number: o,
        took: Date.now() - l
      };
  return null;
}
var b = /* @__PURE__ */ ((t) => (t.ERROR = "error", t.VERIFIED = "verified", t.VERIFYING = "verifying", t.UNVERIFIED = "unverified", t.EXPIRED = "expired", t))(b || {});
function mt(t) {
  Ze(t, "svelte-vuofbg", ".altcha.svelte-vuofbg.svelte-vuofbg{background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);overflow:hidden;position:relative;text-align:left}.altcha.svelte-vuofbg.svelte-vuofbg:focus-within{border-color:var(--altcha-color-border-focus, currentColor)}.altcha-main.svelte-vuofbg.svelte-vuofbg{align-items:center;display:flex;gap:0.4rem;padding:0.7rem}.altcha-label.svelte-vuofbg.svelte-vuofbg{flex-grow:1}.altcha-label.svelte-vuofbg label.svelte-vuofbg{cursor:pointer}.altcha-logo.svelte-vuofbg.svelte-vuofbg{color:currentColor;opacity:0.3}.altcha-logo.svelte-vuofbg.svelte-vuofbg:hover{opacity:1}.altcha-error.svelte-vuofbg.svelte-vuofbg{color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem}.altcha-footer.svelte-vuofbg.svelte-vuofbg{align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.4;padding:0.2rem 0.7rem;text-align:right}.altcha-footer.svelte-vuofbg.svelte-vuofbg:hover{opacity:1}.altcha-footer.svelte-vuofbg>.svelte-vuofbg:first-child{flex-grow:1}.altcha-footer.svelte-vuofbg a{color:currentColor}.altcha-checkbox.svelte-vuofbg.svelte-vuofbg{display:flex;align-items:center;height:24px;width:24px}.altcha-checkbox.svelte-vuofbg input.svelte-vuofbg{width:18px;height:18px;margin:0}.altcha-hidden.svelte-vuofbg.svelte-vuofbg{display:none}.altcha-spinner.svelte-vuofbg.svelte-vuofbg{animation:svelte-vuofbg-altcha-spinner 0.75s infinite linear;transform-origin:center}@keyframes svelte-vuofbg-altcha-spinner{100%{transform:rotate(360deg)}}");
}
function de(t) {
  let e, n, r;
  return {
    c() {
      e = M("svg"), n = M("path"), r = M("path"), c(n, "d", "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"), c(n, "fill", "currentColor"), c(n, "opacity", ".25"), c(r, "d", "M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"), c(r, "fill", "currentColor"), c(r, "class", "altcha-spinner svelte-vuofbg"), c(e, "width", "24"), c(e, "height", "24"), c(e, "viewBox", "0 0 24 24"), c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(l, o) {
      L(l, e, o), m(e, n), m(e, r);
    },
    d(l) {
      l && E(e);
    }
  };
}
function vt(t) {
  let e, n = (
    /*_strings*/
    t[9].label + ""
  ), r;
  return {
    c() {
      e = w("label"), c(e, "for", r = /*name*/
      t[3] + "_checkbox"), c(e, "class", "svelte-vuofbg");
    },
    m(l, o) {
      L(l, e, o), e.innerHTML = n;
    },
    p(l, o) {
      o[0] & /*_strings*/
      512 && n !== (n = /*_strings*/
      l[9].label + "") && (e.innerHTML = n), o[0] & /*name*/
      8 && r !== (r = /*name*/
      l[3] + "_checkbox") && c(e, "for", r);
    },
    d(l) {
      l && E(e);
    }
  };
}
function _t(t) {
  let e, n = (
    /*_strings*/
    t[9].verifying + ""
  );
  return {
    c() {
      e = w("span");
    },
    m(r, l) {
      L(r, e, l), e.innerHTML = n;
    },
    p(r, l) {
      l[0] & /*_strings*/
      512 && n !== (n = /*_strings*/
      r[9].verifying + "") && (e.innerHTML = n);
    },
    d(r) {
      r && E(e);
    }
  };
}
function wt(t) {
  let e, n = (
    /*_strings*/
    t[9].verified + ""
  ), r, l;
  return {
    c() {
      e = w("span"), r = U(), l = w("input"), c(l, "type", "hidden"), c(
        l,
        "name",
        /*name*/
        t[3]
      ), l.value = /*payload*/
      t[4];
    },
    m(o, s) {
      L(o, e, s), e.innerHTML = n, L(o, r, s), L(o, l, s);
    },
    p(o, s) {
      s[0] & /*_strings*/
      512 && n !== (n = /*_strings*/
      o[9].verified + "") && (e.innerHTML = n), s[0] & /*name*/
      8 && c(
        l,
        "name",
        /*name*/
        o[3]
      ), s[0] & /*payload*/
      16 && (l.value = /*payload*/
      o[4]);
    },
    d(o) {
      o && (E(e), E(r), E(l));
    }
  };
}
function ge(t) {
  let e, n, r, l, o, s;
  return {
    c() {
      e = w("div"), n = w("a"), r = M("svg"), l = M("path"), o = M("path"), s = M("path"), c(l, "d", "M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z"), c(l, "fill", "currentColor"), c(o, "d", "M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z"), c(o, "fill", "currentColor"), c(s, "d", "M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z"), c(s, "fill", "currentColor"), c(r, "width", "22"), c(r, "height", "22"), c(r, "viewBox", "0 0 20 20"), c(r, "fill", "none"), c(r, "xmlns", "http://www.w3.org/2000/svg"), c(n, "href", xe), c(n, "target", "_blank"), c(n, "class", "altcha-logo svelte-vuofbg");
    },
    m(u, h) {
      L(u, e, h), m(e, n), m(n, r), m(r, l), m(r, o), m(r, s);
    },
    p: H,
    d(u) {
      u && E(e);
    }
  };
}
function be(t) {
  let e, n, r, l;
  function o(h, a) {
    return (
      /*state*/
      h[5] === b.EXPIRED ? pt : $t
    );
  }
  let s = o(t), u = s(t);
  return {
    c() {
      e = w("div"), n = M("svg"), r = M("path"), l = U(), u.c(), c(r, "stroke-linecap", "round"), c(r, "stroke-linejoin", "round"), c(r, "d", "M6 18L18 6M6 6l12 12"), c(n, "width", "14"), c(n, "height", "14"), c(n, "xmlns", "http://www.w3.org/2000/svg"), c(n, "fill", "none"), c(n, "viewBox", "0 0 24 24"), c(n, "stroke-width", "1.5"), c(n, "stroke", "currentColor"), c(e, "class", "altcha-error svelte-vuofbg");
    },
    m(h, a) {
      L(h, e, a), m(e, n), m(n, r), m(e, l), u.m(e, null);
    },
    p(h, a) {
      s === (s = o(h)) && u ? u.p(h, a) : (u.d(1), u = s(h), u && (u.c(), u.m(e, null)));
    },
    d(h) {
      h && E(e), u.d();
    }
  };
}
function $t(t) {
  let e, n = (
    /*_strings*/
    t[9].error + ""
  );
  return {
    c() {
      e = w("div"), c(
        e,
        "title",
        /*error*/
        t[8]
      );
    },
    m(r, l) {
      L(r, e, l), e.innerHTML = n;
    },
    p(r, l) {
      l[0] & /*_strings*/
      512 && n !== (n = /*_strings*/
      r[9].error + "") && (e.innerHTML = n), l[0] & /*error*/
      256 && c(
        e,
        "title",
        /*error*/
        r[8]
      );
    },
    d(r) {
      r && E(e);
    }
  };
}
function pt(t) {
  let e, n = (
    /*_strings*/
    t[9].expired + ""
  );
  return {
    c() {
      e = w("div"), c(
        e,
        "title",
        /*error*/
        t[8]
      );
    },
    m(r, l) {
      L(r, e, l), e.innerHTML = n;
    },
    p(r, l) {
      l[0] & /*_strings*/
      512 && n !== (n = /*_strings*/
      r[9].expired + "") && (e.innerHTML = n), l[0] & /*error*/
      256 && c(
        e,
        "title",
        /*error*/
        r[8]
      );
    },
    d(r) {
      r && E(e);
    }
  };
}
function me(t) {
  let e, n, r = (
    /*_strings*/
    t[9].footer + ""
  );
  return {
    c() {
      e = w("div"), n = w("div"), c(n, "class", "svelte-vuofbg"), c(e, "class", "altcha-footer svelte-vuofbg");
    },
    m(l, o) {
      L(l, e, o), m(e, n), n.innerHTML = r;
    },
    p(l, o) {
      o[0] & /*_strings*/
      512 && r !== (r = /*_strings*/
      l[9].footer + "") && (n.innerHTML = r);
    },
    d(l) {
      l && E(e);
    }
  };
}
function yt(t) {
  let e, n, r, l, o, s, u, h, a, x, y, A, G, N, _ = (
    /*state*/
    t[5] === b.VERIFYING && de()
  );
  function S(f, p) {
    return (
      /*state*/
      f[5] === b.VERIFIED ? wt : (
        /*state*/
        f[5] === b.VERIFYING ? _t : vt
      )
    );
  }
  let j = S(t), C = j(t), $ = (
    /*hidelogo*/
    t[2] !== !0 && ge()
  ), g = (
    /*error*/
    (t[8] || /*state*/
    t[5] === b.EXPIRED) && be(t)
  ), v = (
    /*_strings*/
    t[9].footer && /*hidefooter*/
    t[1] !== !0 && me(t)
  );
  return {
    c() {
      e = w("div"), n = w("div"), _ && _.c(), r = U(), l = w("div"), o = w("input"), h = U(), a = w("div"), C.c(), x = U(), $ && $.c(), y = U(), g && g.c(), A = U(), v && v.c(), c(o, "type", "checkbox"), c(o, "id", s = /*name*/
      t[3] + "_checkbox"), o.required = u = /*auto*/
      t[0] !== "onsubmit", c(o, "class", "svelte-vuofbg"), c(l, "class", "altcha-checkbox svelte-vuofbg"), ae(
        l,
        "altcha-hidden",
        /*state*/
        t[5] === b.VERIFYING
      ), c(a, "class", "altcha-label svelte-vuofbg"), c(n, "class", "altcha-main svelte-vuofbg"), c(e, "class", "altcha svelte-vuofbg"), c(
        e,
        "data-state",
        /*state*/
        t[5]
      );
    },
    m(f, p) {
      L(f, e, p), m(e, n), _ && _.m(n, null), m(n, r), m(n, l), m(l, o), o.checked = /*checked*/
      t[6], m(n, h), m(n, a), C.m(a, null), m(n, x), $ && $.m(n, null), m(e, y), g && g.m(e, null), m(e, A), v && v.m(e, null), t[25](e), G || (N = [
        Q(
          o,
          "change",
          /*input_change_handler*/
          t[24]
        ),
        Q(
          o,
          "change",
          /*onCheckedChange*/
          t[10]
        ),
        Q(
          o,
          "invalid",
          /*onInvalid*/
          t[11]
        )
      ], G = !0);
    },
    p(f, p) {
      /*state*/
      f[5] === b.VERIFYING ? _ || (_ = de(), _.c(), _.m(n, r)) : _ && (_.d(1), _ = null), p[0] & /*name*/
      8 && s !== (s = /*name*/
      f[3] + "_checkbox") && c(o, "id", s), p[0] & /*auto*/
      1 && u !== (u = /*auto*/
      f[0] !== "onsubmit") && (o.required = u), p[0] & /*checked*/
      64 && (o.checked = /*checked*/
      f[6]), p[0] & /*state*/
      32 && ae(
        l,
        "altcha-hidden",
        /*state*/
        f[5] === b.VERIFYING
      ), j === (j = S(f)) && C ? C.p(f, p) : (C.d(1), C = j(f), C && (C.c(), C.m(a, null))), /*hidelogo*/
      f[2] !== !0 ? $ ? $.p(f, p) : ($ = ge(), $.c(), $.m(n, null)) : $ && ($.d(1), $ = null), /*error*/
      f[8] || /*state*/
      f[5] === b.EXPIRED ? g ? g.p(f, p) : (g = be(f), g.c(), g.m(e, A)) : g && (g.d(1), g = null), /*_strings*/
      f[9].footer && /*hidefooter*/
      f[1] !== !0 ? v ? v.p(f, p) : (v = me(f), v.c(), v.m(e, null)) : v && (v.d(1), v = null), p[0] & /*state*/
      32 && c(
        e,
        "data-state",
        /*state*/
        f[5]
      );
    },
    i: H,
    o: H,
    d(f) {
      f && E(e), _ && _.d(), C.d(), $ && $.d(), g && g.d(), v && v.d(), t[25](null), G = !1, X(N);
    }
  };
}
const xe = "https://altcha.org/";
function ve(t) {
  return JSON.parse(t);
}
function kt(t, e, n) {
  let r, l, o, { auto: s = void 0 } = e, { challengeurl: u = void 0 } = e, { challengejson: h = void 0 } = e, { debug: a = !1 } = e, { expire: x = void 0 } = e, { hidefooter: y = !1 } = e, { hidelogo: A = !1 } = e, { name: G = "altcha" } = e, { maxnumber: N = void 0 } = e, { mockerror: _ = !1 } = e, { strings: S = void 0 } = e, { test: j = !1 } = e;
  const C = ze(), $ = ["SHA-256", "SHA-384", "SHA-512"];
  let g = !1, v, f = null, p = null, F = null, V = b.UNVERIFIED, z;
  Ke(() => {
    f && (f.removeEventListener("submit", ie), f.removeEventListener("reset", le), f = null);
  }), We(() => {
    I("mounted", "0.1.9"), j && I("using test mode"), x && J(x), s !== void 0 && I("auto", s), f = v.closest("form"), f && (f.addEventListener("submit", ie), f.addEventListener("reset", le)), s === "onload" && T();
  });
  function I(...i) {
    (a || i.some((d) => d instanceof Error)) && console[i[0] instanceof Error ? "error" : "log"]("ALTCHA", ...i);
  }
  function ie(i) {
    f && s === "onsubmit" && V === b.UNVERIFIED && (i.preventDefault(), i.stopPropagation(), T().then(() => {
      f == null || f.requestSubmit();
    }));
  }
  function le() {
    W();
  }
  function Ce(i, d) {
    return btoa(JSON.stringify({
      algorithm: i.algorithm,
      challenge: i.challenge,
      number: d.number,
      salt: i.salt,
      signature: i.signature,
      test: j ? !0 : void 0,
      took: d.took
    }));
  }
  function oe(i) {
    if (!i.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (i.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!$.includes(i.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${$.join(", ")}`);
    if (!i.challenge || i.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!i.salt || i.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function Ie() {
    if (_)
      throw I("mocking error"), new Error("Mocked error.");
    if (r)
      return I("using provided json data"), r;
    if (j)
      return I("generating test challenge"), gt();
    {
      if (!u)
        throw new Error("Attribute challengeurl not set.");
      I("fetching challenge from", u);
      const i = await fetch(u);
      if (i.status !== 200)
        throw new Error(`Server responded with ${i.status}.`);
      const d = i.headers.get("Expires");
      if (d != null && d.length) {
        const O = Date.parse(d);
        isNaN(O) || J(O - Date.now());
      }
      return i.json();
    }
  }
  function se() {
    W(b.EXPIRED, o.expired);
  }
  async function Le(i) {
    let d = null;
    if ("Worker" in window) {
      try {
        d = await Re(i.challenge, i.salt, i.algorithm);
      } catch (O) {
        I(O);
      }
      if ((d == null ? void 0 : d.number) !== void 0)
        return { data: i, solution: d };
    }
    return {
      data: i,
      solution: await bt(i.challenge, i.salt, i.algorithm, N)
    };
  }
  async function Re(i, d, O) {
    const ce = new at();
    return new Promise((Ve) => {
      ce.addEventListener("message", (Se) => {
        Ve(Se.data);
      }), ce.postMessage({ alg: O, challenge: i, max: N, salt: d });
    });
  }
  function Ne() {
    [b.UNVERIFIED, b.ERROR, b.EXPIRED].includes(V) ? T() : n(6, g = !0);
  }
  function je() {
    V === b.VERIFYING && alert(o.waitAlert);
  }
  function J(i) {
    clearTimeout(z), i < 1 ? se() : z = setTimeout(se, i);
  }
  function Ae(i) {
    i.auto !== void 0 && (n(0, s = i.auto), s === "onload" && T()), i.expire !== void 0 && (J(i.expire), n(13, x = i.expire)), i.challenge && (oe(i.challenge), r = i.challenge), i.debug !== void 0 && n(12, a = !!i.debug), i.hidefooter !== void 0 && n(1, y = !!i.hidefooter), i.hidelogo !== void 0 && n(2, A = !!i.hidelogo), i.maxnumber !== void 0 && n(14, N = +i.maxnumber), i.mockerror !== void 0 && n(15, _ = !!i.mockerror), i.name !== void 0 && n(3, G = i.name), i.test !== void 0 && n(16, j = !!i.test), i.strings && n(23, l = i.strings);
  }
  function W(i = b.UNVERIFIED, d = null) {
    clearTimeout(z), n(6, g = !1), n(8, p = d), n(4, F = null), n(5, V = i);
  }
  async function T() {
    return W(b.VERIFYING), Ie().then((i) => (oe(i), I("challenge", i), Le(i))).then(({ data: i, solution: d }) => {
      if (I("solution", d), (d == null ? void 0 : d.number) !== void 0)
        I("verified"), n(5, V = b.VERIFIED), n(6, g = !0), n(4, F = Ce(i, d)), I("payload", F), Je().then(() => {
          C("verified", { payload: F });
        });
      else
        throw new Error("Unexpected result returned.");
    }).catch((i) => {
      I(i), n(5, V = b.ERROR), n(6, g = !1), n(8, p = i.message);
    });
  }
  function Ge() {
    g = this.checked, n(6, g);
  }
  function Me(i) {
    ee[i ? "unshift" : "push"](() => {
      v = i, n(7, v);
    });
  }
  return t.$$set = (i) => {
    "auto" in i && n(0, s = i.auto), "challengeurl" in i && n(17, u = i.challengeurl), "challengejson" in i && n(18, h = i.challengejson), "debug" in i && n(12, a = i.debug), "expire" in i && n(13, x = i.expire), "hidefooter" in i && n(1, y = i.hidefooter), "hidelogo" in i && n(2, A = i.hidelogo), "name" in i && n(3, G = i.name), "maxnumber" in i && n(14, N = i.maxnumber), "mockerror" in i && n(15, _ = i.mockerror), "strings" in i && n(19, S = i.strings), "test" in i && n(16, j = i.test);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*challengejson*/
    262144 && (r = h ? ve(h) : void 0), t.$$.dirty[0] & /*strings*/
    524288 && n(23, l = S ? ve(S) : {}), t.$$.dirty[0] & /*parsedStrings*/
    8388608 && n(9, o = {
      error: "Verification failed. Try again later.",
      expired: "Verification expired. Try again.",
      footer: `Protected by <a href="${xe}" target="_blank">ALTCHA</a>`,
      label: "I'm not a robot",
      verified: "Verified",
      verifying: "Verifying...",
      waitAlert: "Verifying... please wait.",
      ...l
    }), t.$$.dirty[0] & /*payload, state*/
    48 && C("statechange", { payload: F, state: V });
  }, [
    s,
    y,
    A,
    G,
    F,
    V,
    g,
    v,
    p,
    o,
    Ne,
    je,
    a,
    x,
    N,
    _,
    j,
    u,
    h,
    S,
    Ae,
    W,
    T,
    l,
    Ge,
    Me
  ];
}
class Et extends st {
  constructor(e) {
    super(), lt(
      this,
      e,
      kt,
      yt,
      Oe,
      {
        auto: 0,
        challengeurl: 17,
        challengejson: 18,
        debug: 12,
        expire: 13,
        hidefooter: 1,
        hidelogo: 2,
        name: 3,
        maxnumber: 14,
        mockerror: 15,
        strings: 19,
        test: 16,
        configure: 20,
        reset: 21,
        verify: 22
      },
      mt,
      [-1, -1]
    );
  }
  get auto() {
    return this.$$.ctx[0];
  }
  set auto(e) {
    this.$$set({ auto: e }), k();
  }
  get challengeurl() {
    return this.$$.ctx[17];
  }
  set challengeurl(e) {
    this.$$set({ challengeurl: e }), k();
  }
  get challengejson() {
    return this.$$.ctx[18];
  }
  set challengejson(e) {
    this.$$set({ challengejson: e }), k();
  }
  get debug() {
    return this.$$.ctx[12];
  }
  set debug(e) {
    this.$$set({ debug: e }), k();
  }
  get expire() {
    return this.$$.ctx[13];
  }
  set expire(e) {
    this.$$set({ expire: e }), k();
  }
  get hidefooter() {
    return this.$$.ctx[1];
  }
  set hidefooter(e) {
    this.$$set({ hidefooter: e }), k();
  }
  get hidelogo() {
    return this.$$.ctx[2];
  }
  set hidelogo(e) {
    this.$$set({ hidelogo: e }), k();
  }
  get name() {
    return this.$$.ctx[3];
  }
  set name(e) {
    this.$$set({ name: e }), k();
  }
  get maxnumber() {
    return this.$$.ctx[14];
  }
  set maxnumber(e) {
    this.$$set({ maxnumber: e }), k();
  }
  get mockerror() {
    return this.$$.ctx[15];
  }
  set mockerror(e) {
    this.$$set({ mockerror: e }), k();
  }
  get strings() {
    return this.$$.ctx[19];
  }
  set strings(e) {
    this.$$set({ strings: e }), k();
  }
  get test() {
    return this.$$.ctx[16];
  }
  set test(e) {
    this.$$set({ test: e }), k();
  }
  get configure() {
    return this.$$.ctx[20];
  }
  get reset() {
    return this.$$.ctx[21];
  }
  get verify() {
    return this.$$.ctx[22];
  }
}
customElements.define("altcha-widget", ot(Et, { auto: {}, challengeurl: {}, challengejson: {}, debug: { type: "Boolean" }, expire: {}, hidefooter: { type: "Boolean" }, hidelogo: { type: "Boolean" }, name: {}, maxnumber: {}, mockerror: { type: "Boolean" }, strings: {}, test: { type: "Boolean" } }, [], ["configure", "reset", "verify"], !1));
export {
  Et as Altcha
};
