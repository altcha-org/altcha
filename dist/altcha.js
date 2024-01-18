var xe = Object.defineProperty;
var Ie = (t, e, n) => e in t ? xe(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var I = (t, e, n) => (Ie(t, typeof e != "symbol" ? e + "" : e, n), n);
function B() {
}
function ue(t) {
  return t();
}
function re() {
  return /* @__PURE__ */ Object.create(null);
}
function T(t) {
  t.forEach(ue);
}
function he(t) {
  return typeof t == "function";
}
function Le(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function qe(t) {
  return Object.keys(t).length === 0;
}
function g(t, e) {
  t.appendChild(e);
}
function Ne(t, e, n) {
  const l = Re(t);
  if (!l.getElementById(e)) {
    const i = v("style");
    i.id = e, i.textContent = n, je(l, i);
  }
}
function Re(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : t.ownerDocument;
}
function je(t, e) {
  return g(
    /** @type {Document} */
    t.head || t,
    e
  ), e.sheet;
}
function A(t, e, n) {
  t.insertBefore(e, n || null);
}
function j(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function v(t) {
  return document.createElement(t);
}
function S(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function Ae(t) {
  return document.createTextNode(t);
}
function F() {
  return Ae(" ");
}
function z(t, e, n, l) {
  return t.addEventListener(e, n, l), () => t.removeEventListener(e, n, l);
}
function s(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function Ge(t) {
  return Array.from(t.childNodes);
}
function le(t, e, n) {
  t.classList.toggle(e, !!n);
}
function Se(t, e, { bubbles: n = !1, cancelable: l = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: n, cancelable: l });
}
function Me(t) {
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
function te() {
  if (!W)
    throw new Error("Function called outside component initialization");
  return W;
}
function Ve(t) {
  te().$$.on_mount.push(t);
}
function Fe(t) {
  te().$$.on_destroy.push(t);
}
function Ue() {
  const t = te();
  return (e, n, { cancelable: l = !1 } = {}) => {
    const i = t.$$.callbacks[e];
    if (i) {
      const r = Se(
        /** @type {string} */
        e,
        n,
        { cancelable: l }
      );
      return i.slice().forEach((c) => {
        c.call(t, r);
      }), !r.defaultPrevented;
    }
    return !0;
  };
}
const Y = [], J = [];
let Z = [];
const ie = [], Ye = /* @__PURE__ */ Promise.resolve();
let Q = !1;
function Ze() {
  Q || (Q = !0, Ye.then(R));
}
function ee(t) {
  Z.push(t);
}
const D = /* @__PURE__ */ new Set();
let U = 0;
function R() {
  if (U !== 0)
    return;
  const t = W;
  do {
    try {
      for (; U < Y.length; ) {
        const e = Y[U];
        U++, H(e), Oe(e.$$);
      }
    } catch (e) {
      throw Y.length = 0, U = 0, e;
    }
    for (H(null), Y.length = 0, U = 0; J.length; )
      J.pop()();
    for (let e = 0; e < Z.length; e += 1) {
      const n = Z[e];
      D.has(n) || (D.add(n), n());
    }
    Z.length = 0;
  } while (Y.length);
  for (; ie.length; )
    ie.pop()();
  Q = !1, D.clear(), H(t);
}
function Oe(t) {
  if (t.fragment !== null) {
    t.update(), T(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(ee);
  }
}
function He(t) {
  const e = [], n = [];
  Z.forEach((l) => t.indexOf(l) === -1 ? e.push(l) : n.push(l)), n.forEach((l) => l()), Z = e;
}
const Be = /* @__PURE__ */ new Set();
function We(t, e) {
  t && t.i && (Be.delete(t), t.i(e));
}
function Te(t, e, n) {
  const { fragment: l, after_update: i } = t.$$;
  l && l.m(e, n), ee(() => {
    const r = t.$$.on_mount.map(ue).filter(he);
    t.$$.on_destroy ? t.$$.on_destroy.push(...r) : T(r), t.$$.on_mount = [];
  }), i.forEach(ee);
}
function Xe(t, e) {
  const n = t.$$;
  n.fragment !== null && (He(n.after_update), T(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Pe(t, e) {
  t.$$.dirty[0] === -1 && (Y.push(t), Ze(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Ke(t, e, n, l, i, r, c = null, a = [-1]) {
  const f = W;
  H(t);
  const u = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: B,
    not_equal: i,
    bound: re(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: re(),
    dirty: a,
    skip_bound: !1,
    root: e.target || f.$$.root
  };
  c && c(u.root);
  let L = !1;
  if (u.ctx = n ? n(t, e.props || {}, (m, b, ...E) => {
    const k = E.length ? E[0] : b;
    return u.ctx && i(u.ctx[m], u.ctx[m] = k) && (!u.skip_bound && u.bound[m] && u.bound[m](k), L && Pe(t, m)), b;
  }) : [], u.update(), L = !0, T(u.before_update), u.fragment = l ? l(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const m = Ge(e.target);
      u.fragment && u.fragment.l(m), m.forEach(j);
    } else
      u.fragment && u.fragment.c();
    e.intro && We(t.$$.fragment), Te(t, e.target, e.anchor), R();
  }
  H(f);
}
let de;
typeof HTMLElement == "function" && (de = class extends HTMLElement {
  constructor(e, n, l) {
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
    this.$$ctor = e, this.$$s = n, l && this.attachShadow({ mode: "open" });
  }
  addEventListener(e, n, l) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(n), this.$$c) {
      const i = this.$$c.$on(e, n);
      this.$$l_u.set(n, i);
    }
    super.addEventListener(e, n, l);
  }
  removeEventListener(e, n, l) {
    if (super.removeEventListener(e, n, l), this.$$c) {
      const i = this.$$l_u.get(n);
      i && (i(), this.$$l_u.delete(n));
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
            m: function(u, L) {
              A(u, c, L);
            },
            d: function(u) {
              u && j(c);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn)
        return;
      const n = {}, l = Me(this);
      for (const r of this.$$s)
        r in l && (n[r] = [e(r)]);
      for (const r of this.attributes) {
        const c = this.$$g_p(r.name);
        c in this.$$d || (this.$$d[c] = P(c, r.value, this.$$p_d, "toProp"));
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
      const i = () => {
        this.$$r = !0;
        for (const r in this.$$p_d)
          if (this.$$d[r] = this.$$c.$$.ctx[this.$$c.$$.props[r]], this.$$p_d[r].reflect) {
            const c = P(
              r,
              this.$$d[r],
              this.$$p_d,
              "toAttribute"
            );
            c == null ? this.removeAttribute(this.$$p_d[r].attribute || r) : this.setAttribute(this.$$p_d[r].attribute || r, c);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(i), i();
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
  attributeChangedCallback(e, n, l) {
    var i;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = P(e, l, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [e]: this.$$d[e] }));
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
function P(t, e, n, l) {
  var r;
  const i = (r = n[t]) == null ? void 0 : r.type;
  if (e = i === "Boolean" && typeof e != "boolean" ? e != null : e, !l || !n[t])
    return e;
  if (l === "toAttribute")
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
function ze(t, e, n, l, i, r) {
  let c = class extends de {
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
    Object.defineProperty(c.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(f) {
        var u;
        f = P(a, f, e), this.$$d[a] = f, (u = this.$$c) == null || u.$set({ [a]: f });
      }
    });
  }), l.forEach((a) => {
    Object.defineProperty(c.prototype, a, {
      get() {
        var f;
        return (f = this.$$c) == null ? void 0 : f[a];
      }
    });
  }), r && (c = r(c)), t.element = /** @type {any} */
  c, c;
}
class De {
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
    Xe(this, 1), this.$destroy = B;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!he(n))
      return B;
    const l = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return l.push(n), () => {
      const i = l.indexOf(n);
      i !== -1 && l.splice(i, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !qe(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Je = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Je);
const ge = "KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2NvbnN0IHI9bmV3IFRleHRFbmNvZGVyO2Z1bmN0aW9uIGMoZSl7cmV0dXJuWy4uLm5ldyBVaW50OEFycmF5KGUpXS5tYXAobj0+bi50b1N0cmluZygxNikucGFkU3RhcnQoMiwiMCIpKS5qb2luKCIiKX1hc3luYyBmdW5jdGlvbiBsKGUsbixhKXtyZXR1cm4gYyhhd2FpdCBjcnlwdG8uc3VidGxlLmRpZ2VzdChhLnRvVXBwZXJDYXNlKCksci5lbmNvZGUoZStuKSkpfWFzeW5jIGZ1bmN0aW9uIGkoZSxuLGE9IlNIQS0yNTYiLG89MWU3KXtjb25zdCBzPURhdGUubm93KCk7Zm9yKGxldCB0PTA7dDw9bzt0KyspaWYoYXdhaXQgbChuLHQsYSk9PT1lKXJldHVybntudW1iZXI6dCx0b29rOkRhdGUubm93KCktc307cmV0dXJuIG51bGx9b25tZXNzYWdlPWFzeW5jIGU9Pntjb25zdHthbGc6bixjaGFsbGVuZ2U6YSxtYXg6byxzYWx0OnN9PWUuZGF0YXx8e307aWYoYSYmcyl7Y29uc3QgdD1hd2FpdCBpKGEscyxuLG8pO3NlbGYucG9zdE1lc3NhZ2UodCYmey4uLnQsd29ya2VyOiEwfSl9ZWxzZSBzZWxmLnBvc3RNZXNzYWdlKG51bGwpfX0pKCk7Cg==", oe = typeof window < "u" && window.Blob && new Blob([atob(ge)], { type: "text/javascript;charset=utf-8" });
function Qe() {
  let t;
  try {
    if (t = oe && (window.URL || window.webkitURL).createObjectURL(oe), !t)
      throw "";
    return new Worker(t);
  } catch {
    return new Worker("data:application/javascript;base64," + ge);
  } finally {
    t && (window.URL || window.webkitURL).revokeObjectURL(t);
  }
}
const et = 1e7, tt = new TextEncoder();
function nt(t) {
  return [...new Uint8Array(t)].map((e) => e.toString(16).padStart(2, "0")).join("");
}
async function rt(t = 1e5, e = "SHA-256") {
  const n = Date.now().toString(16), l = Math.round(Math.random() * t), i = await me(n, l, e);
  return {
    algorithm: e,
    challenge: i,
    salt: n,
    signature: ""
  };
}
async function me(t, e, n) {
  return nt(await crypto.subtle.digest(n.toUpperCase(), tt.encode(t + e)));
}
async function lt(t, e, n = "SHA-256", l = et) {
  const i = Date.now();
  for (let r = 0; r <= l; r++)
    if (await me(e, r, n) === t)
      return {
        number: r,
        took: Date.now() - i
      };
  return null;
}
var y = /* @__PURE__ */ ((t) => (t.ERROR = "error", t.VERIFIED = "verified", t.VERIFYING = "verifying", t.UNVERIFIED = "unverfied", t))(y || {});
function it(t) {
  Ne(t, "svelte-fqcw55", ".altcha.svelte-fqcw55.svelte-fqcw55{background:var(--altcha-color-base, transparent);border:1px solid var(--altcha-color-border, #a0a0a0);border-radius:3px;color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:260px;overflow:hidden;position:relative;text-align:left}.altcha.svelte-fqcw55.svelte-fqcw55:focus-within{border-color:var(--altcha-color-border-focus, currentColor)}.altcha-main.svelte-fqcw55.svelte-fqcw55{align-items:center;display:flex;gap:0.4rem;padding:0.7rem}.altcha-label.svelte-fqcw55.svelte-fqcw55{flex-grow:1}.altcha-label.svelte-fqcw55 label.svelte-fqcw55{cursor:pointer}.altcha-logo.svelte-fqcw55.svelte-fqcw55{color:currentColor;opacity:0.3}.altcha-logo.svelte-fqcw55.svelte-fqcw55:hover{opacity:1}.altcha-error.svelte-fqcw55.svelte-fqcw55{color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem}.altcha-footer.svelte-fqcw55.svelte-fqcw55{align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.4;padding:0.2rem 0.7rem;text-align:right}.altcha-footer.svelte-fqcw55.svelte-fqcw55:hover{opacity:1}.altcha-footer.svelte-fqcw55>.svelte-fqcw55:first-child{flex-grow:1}.altcha-footer.svelte-fqcw55 a{color:currentColor}.altcha-checkbox.svelte-fqcw55.svelte-fqcw55{display:flex;align-items:center;height:24px;width:24px}.altcha-checkbox.svelte-fqcw55 input.svelte-fqcw55{width:18px;height:18px;margin:0}.altcha-hidden.svelte-fqcw55.svelte-fqcw55{display:none}.altcha-spinner.svelte-fqcw55.svelte-fqcw55{animation:svelte-fqcw55-altcha-spinner 0.75s infinite linear;transform-origin:center}@keyframes svelte-fqcw55-altcha-spinner{100%{transform:rotate(360deg)}}");
}
function se(t) {
  let e, n, l;
  return {
    c() {
      e = S("svg"), n = S("path"), l = S("path"), s(n, "d", "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"), s(n, "fill", "currentColor"), s(n, "opacity", ".25"), s(l, "d", "M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"), s(l, "fill", "currentColor"), s(l, "class", "altcha-spinner svelte-fqcw55"), s(e, "width", "24"), s(e, "height", "24"), s(e, "viewBox", "0 0 24 24"), s(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(i, r) {
      A(i, e, r), g(e, n), g(e, l);
    },
    d(i) {
      i && j(e);
    }
  };
}
function ot(t) {
  let e, n = (
    /*_strings*/
    t[7].label + ""
  ), l;
  return {
    c() {
      e = v("label"), s(e, "for", l = /*name*/
      t[1] + "_checkbox"), s(e, "class", "svelte-fqcw55");
    },
    m(i, r) {
      A(i, e, r), e.innerHTML = n;
    },
    p(i, r) {
      r[0] & /*_strings*/
      128 && n !== (n = /*_strings*/
      i[7].label + "") && (e.innerHTML = n), r[0] & /*name*/
      2 && l !== (l = /*name*/
      i[1] + "_checkbox") && s(e, "for", l);
    },
    d(i) {
      i && j(e);
    }
  };
}
function st(t) {
  let e, n = (
    /*_strings*/
    t[7].verifying + ""
  );
  return {
    c() {
      e = v("span");
    },
    m(l, i) {
      A(l, e, i), e.innerHTML = n;
    },
    p(l, i) {
      i[0] & /*_strings*/
      128 && n !== (n = /*_strings*/
      l[7].verifying + "") && (e.innerHTML = n);
    },
    d(l) {
      l && j(e);
    }
  };
}
function ct(t) {
  let e, n = (
    /*_strings*/
    t[7].verified + ""
  ), l, i;
  return {
    c() {
      e = v("span"), l = F(), i = v("input"), s(i, "type", "hidden"), s(
        i,
        "name",
        /*name*/
        t[1]
      ), i.value = /*payload*/
      t[2];
    },
    m(r, c) {
      A(r, e, c), e.innerHTML = n, A(r, l, c), A(r, i, c);
    },
    p(r, c) {
      c[0] & /*_strings*/
      128 && n !== (n = /*_strings*/
      r[7].verified + "") && (e.innerHTML = n), c[0] & /*name*/
      2 && s(
        i,
        "name",
        /*name*/
        r[1]
      ), c[0] & /*payload*/
      4 && (i.value = /*payload*/
      r[2]);
    },
    d(r) {
      r && (j(e), j(l), j(i));
    }
  };
}
function ce(t) {
  let e, n, l, i, r, c = (
    /*_strings*/
    t[7].error + ""
  );
  return {
    c() {
      e = v("div"), n = S("svg"), l = S("path"), i = F(), r = v("div"), s(l, "stroke-linecap", "round"), s(l, "stroke-linejoin", "round"), s(l, "d", "M6 18L18 6M6 6l12 12"), s(n, "width", "14"), s(n, "height", "14"), s(n, "xmlns", "http://www.w3.org/2000/svg"), s(n, "fill", "none"), s(n, "viewBox", "0 0 24 24"), s(n, "stroke-width", "1.5"), s(n, "stroke", "currentColor"), s(
        r,
        "title",
        /*error*/
        t[6]
      ), s(e, "class", "altcha-error svelte-fqcw55");
    },
    m(a, f) {
      A(a, e, f), g(e, n), g(n, l), g(e, i), g(e, r), r.innerHTML = c;
    },
    p(a, f) {
      f[0] & /*_strings*/
      128 && c !== (c = /*_strings*/
      a[7].error + "") && (r.innerHTML = c), f[0] & /*error*/
      64 && s(
        r,
        "title",
        /*error*/
        a[6]
      );
    },
    d(a) {
      a && j(e);
    }
  };
}
function ae(t) {
  let e, n, l = (
    /*_strings*/
    t[7].footer + ""
  );
  return {
    c() {
      e = v("div"), n = v("div"), s(n, "class", "svelte-fqcw55"), s(e, "class", "altcha-footer svelte-fqcw55");
    },
    m(i, r) {
      A(i, e, r), g(e, n), n.innerHTML = l;
    },
    p(i, r) {
      r[0] & /*_strings*/
      128 && l !== (l = /*_strings*/
      i[7].footer + "") && (n.innerHTML = l);
    },
    d(i) {
      i && j(e);
    }
  };
}
function at(t) {
  let e, n, l, i, r, c, a, f, u, L, m, b, E, k, V, O, q, M, N, $ = (
    /*state*/
    t[3] === y.VERIFYING && se()
  );
  function G(h, x) {
    return (
      /*state*/
      h[3] === y.VERIFIED ? ct : (
        /*state*/
        h[3] === y.VERIFYING ? st : ot
      )
    );
  }
  let C = G(t), d = C(t), _ = (
    /*error*/
    t[6] && ce(t)
  ), p = (
    /*_strings*/
    t[7].footer && /*hidefooter*/
    t[0] !== !0 && ae(t)
  );
  return {
    c() {
      e = v("div"), n = v("div"), $ && $.c(), l = F(), i = v("div"), r = v("input"), a = F(), f = v("div"), d.c(), u = F(), L = v("div"), m = v("a"), b = S("svg"), E = S("path"), k = S("path"), V = S("path"), O = F(), _ && _.c(), q = F(), p && p.c(), s(r, "type", "checkbox"), s(r, "id", c = /*name*/
      t[1] + "_checkbox"), r.required = !0, s(r, "class", "svelte-fqcw55"), s(i, "class", "altcha-checkbox svelte-fqcw55"), le(
        i,
        "altcha-hidden",
        /*state*/
        t[3] === y.VERIFYING
      ), s(f, "class", "altcha-label svelte-fqcw55"), s(E, "d", "M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z"), s(E, "fill", "currentColor"), s(k, "d", "M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z"), s(k, "fill", "currentColor"), s(V, "d", "M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z"), s(V, "fill", "currentColor"), s(b, "width", "22"), s(b, "height", "22"), s(b, "viewBox", "0 0 20 20"), s(b, "fill", "none"), s(b, "xmlns", "http://www.w3.org/2000/svg"), s(m, "href", we), s(m, "target", "_blank"), s(m, "class", "altcha-logo svelte-fqcw55"), s(n, "class", "altcha-main svelte-fqcw55"), s(e, "class", "altcha svelte-fqcw55"), s(
        e,
        "data-state",
        /*state*/
        t[3]
      );
    },
    m(h, x) {
      A(h, e, x), g(e, n), $ && $.m(n, null), g(n, l), g(n, i), g(i, r), r.checked = /*checked*/
      t[4], g(n, a), g(n, f), d.m(f, null), g(n, u), g(n, L), g(L, m), g(m, b), g(b, E), g(b, k), g(b, V), g(e, O), _ && _.m(e, null), g(e, q), p && p.m(e, null), t[20](e), M || (N = [
        z(
          r,
          "change",
          /*input_change_handler*/
          t[19]
        ),
        z(
          r,
          "change",
          /*onCheckedChange*/
          t[8]
        ),
        z(
          r,
          "invalid",
          /*onInvalid*/
          t[9]
        )
      ], M = !0);
    },
    p(h, x) {
      /*state*/
      h[3] === y.VERIFYING ? $ || ($ = se(), $.c(), $.m(n, l)) : $ && ($.d(1), $ = null), x[0] & /*name*/
      2 && c !== (c = /*name*/
      h[1] + "_checkbox") && s(r, "id", c), x[0] & /*checked*/
      16 && (r.checked = /*checked*/
      h[4]), x[0] & /*state*/
      8 && le(
        i,
        "altcha-hidden",
        /*state*/
        h[3] === y.VERIFYING
      ), C === (C = G(h)) && d ? d.p(h, x) : (d.d(1), d = C(h), d && (d.c(), d.m(f, null))), /*error*/
      h[6] ? _ ? _.p(h, x) : (_ = ce(h), _.c(), _.m(e, q)) : _ && (_.d(1), _ = null), /*_strings*/
      h[7].footer && /*hidefooter*/
      h[0] !== !0 ? p ? p.p(h, x) : (p = ae(h), p.c(), p.m(e, null)) : p && (p.d(1), p = null), x[0] & /*state*/
      8 && s(
        e,
        "data-state",
        /*state*/
        h[3]
      );
    },
    i: B,
    o: B,
    d(h) {
      h && j(e), $ && $.d(), d.d(), _ && _.d(), p && p.d(), t[20](null), M = !1, T(N);
    }
  };
}
const we = "https://altcha.org/";
function fe(t) {
  return JSON.parse(t);
}
function ft(t, e, n) {
  let l, i, r, { challengeurl: c = void 0 } = e, { challengejson: a = void 0 } = e, { debug: f = !1 } = e, { hidefooter: u = !1 } = e, { name: L = "altcha" } = e, { maxnumber: m = void 0 } = e, { mockerror: b = !1 } = e, { strings: E = void 0 } = e, { test: k = !1 } = e;
  const V = Ue(), O = ["SHA-256", "SHA-384", "SHA-512"];
  let q = !1, M, N = null, $ = null, G = null, C = y.UNVERIFIED;
  Fe(() => {
    N && (N.removeEventListener("submit", _), N.removeEventListener("reset", p), N = null);
  }), Ve(() => {
    d("mounted"), k && d("using test mode"), N = M.closest("form"), N && (N.addEventListener("submit", _), N.addEventListener("reset", p));
  });
  function d(...o) {
    (f || o.some((w) => w instanceof Error)) && console[o[0] instanceof Error ? "error" : "log"]("ALTCHA", ...o);
  }
  function _() {
    requestAnimationFrame(() => {
      X();
    });
  }
  function p() {
    X();
  }
  function h(o, w) {
    return btoa(JSON.stringify({
      algorithm: o.algorithm,
      challenge: o.challenge,
      number: w.number,
      salt: o.salt,
      signature: o.signature,
      test: k ? !0 : void 0,
      took: w.took
    }));
  }
  function x(o) {
    if (!o.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (o.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!O.includes(o.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${O.join(", ")}`);
    if (!o.challenge || o.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!o.salt || o.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function be() {
    if (b)
      throw d("mocking error"), new Error("Mocked error.");
    if (l)
      return d("using provided json data"), l;
    if (k)
      return d("generating test challenge"), rt();
    {
      if (!c)
        throw new Error("Attribute challengeurl not set.");
      d("fetching challenge from", c);
      const o = await fetch(c);
      if (o.status !== 200)
        throw new Error(`Server responded with ${o.status}.`);
      return o.json();
    }
  }
  async function $e(o) {
    let w = null;
    if ("Worker" in window) {
      try {
        w = await _e(o.challenge, o.salt, o.algorithm);
      } catch (K) {
        d(K);
      }
      if ((w == null ? void 0 : w.number) !== void 0)
        return { data: o, solution: w };
    }
    return {
      data: o,
      solution: await lt(o.challenge, o.salt, o.algorithm, m)
    };
  }
  async function _e(o, w, K) {
    const ne = new Qe();
    return new Promise((Ee) => {
      ne.addEventListener("message", (Ce) => {
        Ee(Ce.data);
      }), ne.postMessage({ alg: K, challenge: o, max: m, salt: w });
    });
  }
  function pe() {
    [y.UNVERIFIED, y.ERROR].includes(C) ? (X(y.VERIFYING), be().then((o) => (x(o), d("challenge", o), $e(o))).then(({ data: o, solution: w }) => {
      if (d("solution", w), (w == null ? void 0 : w.number) !== void 0)
        d("verified"), n(3, C = y.VERIFIED), n(4, q = !0), n(2, G = h(o, w)), V("verified", { payload: G }), d("payload", G);
      else
        throw new Error("Unexpected result returned.");
    }).catch((o) => {
      d(o), n(3, C = y.ERROR), n(4, q = !1), n(6, $ = o);
    })) : n(4, q = !0);
  }
  function ve() {
    C === y.VERIFYING && alert(r.waitAlert);
  }
  function X(o = y.UNVERIFIED) {
    n(4, q = !1), n(6, $ = null), n(2, G = null), n(3, C = o);
  }
  function ye() {
    q = this.checked, n(4, q);
  }
  function ke(o) {
    J[o ? "unshift" : "push"](() => {
      M = o, n(5, M);
    });
  }
  return t.$$set = (o) => {
    "challengeurl" in o && n(10, c = o.challengeurl), "challengejson" in o && n(11, a = o.challengejson), "debug" in o && n(12, f = o.debug), "hidefooter" in o && n(0, u = o.hidefooter), "name" in o && n(1, L = o.name), "maxnumber" in o && n(13, m = o.maxnumber), "mockerror" in o && n(14, b = o.mockerror), "strings" in o && n(15, E = o.strings), "test" in o && n(16, k = o.test);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*challengejson*/
    2048 && (l = a ? fe(a) : void 0), t.$$.dirty[0] & /*strings*/
    32768 && n(18, i = E ? fe(E) : {}), t.$$.dirty[0] & /*parsedStrings*/
    262144 && n(7, r = {
      error: "Verification failed. Try again later.",
      footer: `Protected by <a href="${we}" target="_blank">ALTCHA</a>`,
      label: "I'm not a robot",
      verified: "Verified",
      verifying: "Verifying...",
      waitAlert: "Verifying... please wait.",
      ...i
    }), t.$$.dirty[0] & /*payload, state*/
    12 && V("statechange", { payload: G, state: C });
  }, [
    u,
    L,
    G,
    C,
    q,
    M,
    $,
    r,
    pe,
    ve,
    c,
    a,
    f,
    m,
    b,
    E,
    k,
    X,
    i,
    ye,
    ke
  ];
}
class ut extends De {
  constructor(e) {
    super(), Ke(
      this,
      e,
      ft,
      at,
      Le,
      {
        challengeurl: 10,
        challengejson: 11,
        debug: 12,
        hidefooter: 0,
        name: 1,
        maxnumber: 13,
        mockerror: 14,
        strings: 15,
        test: 16,
        reset: 17
      },
      it,
      [-1, -1]
    );
  }
  get challengeurl() {
    return this.$$.ctx[10];
  }
  set challengeurl(e) {
    this.$$set({ challengeurl: e }), R();
  }
  get challengejson() {
    return this.$$.ctx[11];
  }
  set challengejson(e) {
    this.$$set({ challengejson: e }), R();
  }
  get debug() {
    return this.$$.ctx[12];
  }
  set debug(e) {
    this.$$set({ debug: e }), R();
  }
  get hidefooter() {
    return this.$$.ctx[0];
  }
  set hidefooter(e) {
    this.$$set({ hidefooter: e }), R();
  }
  get name() {
    return this.$$.ctx[1];
  }
  set name(e) {
    this.$$set({ name: e }), R();
  }
  get maxnumber() {
    return this.$$.ctx[13];
  }
  set maxnumber(e) {
    this.$$set({ maxnumber: e }), R();
  }
  get mockerror() {
    return this.$$.ctx[14];
  }
  set mockerror(e) {
    this.$$set({ mockerror: e }), R();
  }
  get strings() {
    return this.$$.ctx[15];
  }
  set strings(e) {
    this.$$set({ strings: e }), R();
  }
  get test() {
    return this.$$.ctx[16];
  }
  set test(e) {
    this.$$set({ test: e }), R();
  }
  get reset() {
    return this.$$.ctx[17];
  }
}
customElements.define("altcha-widget", ze(ut, { challengeurl: {}, challengejson: {}, debug: { type: "Boolean" }, hidefooter: { type: "Boolean" }, name: {}, maxnumber: {}, mockerror: { type: "Boolean" }, strings: {}, test: { type: "Boolean" } }, [], ["reset"], !1));
export {
  ut as Altcha
};
