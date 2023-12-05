var Ce = Object.defineProperty;
var Le = (t, e, n) => e in t ? Ce(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var L = (t, e, n) => (Le(t, typeof e != "symbol" ? e + "" : e, n), n);
function Z() {
}
function fe(t) {
  return t();
}
function re() {
  return /* @__PURE__ */ Object.create(null);
}
function K(t) {
  t.forEach(fe);
}
function he(t) {
  return typeof t == "function";
}
function xe(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function Re(t) {
  return Object.keys(t).length === 0;
}
function m(t, e) {
  t.appendChild(e);
}
function Ie(t, e, n) {
  const l = Ne(t);
  if (!l.getElementById(e)) {
    const i = p("style");
    i.id = e, i.textContent = n, Ae(l, i);
  }
}
function Ne(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : t.ownerDocument;
}
function Ae(t, e) {
  return m(
    /** @type {Document} */
    t.head || t,
    e
  ), e.sheet;
}
function M(t, e, n) {
  t.insertBefore(e, n || null);
}
function A(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function p(t) {
  return document.createElement(t);
}
function O(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function Me(t) {
  return document.createTextNode(t);
}
function S() {
  return Me(" ");
}
function z(t, e, n, l) {
  return t.addEventListener(e, n, l), () => t.removeEventListener(e, n, l);
}
function o(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function Ve(t) {
  return Array.from(t.childNodes);
}
function le(t, e, n) {
  t.classList.toggle(e, !!n);
}
function Oe(t, e, { bubbles: n = !1, cancelable: l = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: n, cancelable: l });
}
function Fe(t) {
  const e = {};
  return t.childNodes.forEach(
    /** @param {Element} node */
    (n) => {
      e[n.slot || "default"] = !0;
    }
  ), e;
}
let U;
function Y(t) {
  U = t;
}
function te() {
  if (!U)
    throw new Error("Function called outside component initialization");
  return U;
}
function He(t) {
  te().$$.on_mount.push(t);
}
function Se(t) {
  te().$$.on_destroy.push(t);
}
function Ge() {
  const t = te();
  return (e, n, { cancelable: l = !1 } = {}) => {
    const i = t.$$.callbacks[e];
    if (i) {
      const r = Oe(
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
const T = [], Q = [];
let W = [];
const ie = [], Te = /* @__PURE__ */ Promise.resolve();
let q = !1;
function We() {
  q || (q = !0, Te.then(N));
}
function ee(t) {
  W.push(t);
}
const J = /* @__PURE__ */ new Set();
let G = 0;
function N() {
  if (G !== 0)
    return;
  const t = U;
  do {
    try {
      for (; G < T.length; ) {
        const e = T[G];
        G++, Y(e), Be(e.$$);
      }
    } catch (e) {
      throw T.length = 0, G = 0, e;
    }
    for (Y(null), T.length = 0, G = 0; Q.length; )
      Q.pop()();
    for (let e = 0; e < W.length; e += 1) {
      const n = W[e];
      J.has(n) || (J.add(n), n());
    }
    W.length = 0;
  } while (T.length);
  for (; ie.length; )
    ie.pop()();
  q = !1, J.clear(), Y(t);
}
function Be(t) {
  if (t.fragment !== null) {
    t.update(), K(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(ee);
  }
}
function Ye(t) {
  const e = [], n = [];
  W.forEach((l) => t.indexOf(l) === -1 ? e.push(l) : n.push(l)), n.forEach((l) => l()), W = e;
}
const Ze = /* @__PURE__ */ new Set();
function Ue(t, e) {
  t && t.i && (Ze.delete(t), t.i(e));
}
function Ke(t, e, n) {
  const { fragment: l, after_update: i } = t.$$;
  l && l.m(e, n), ee(() => {
    const r = t.$$.on_mount.map(fe).filter(he);
    t.$$.on_destroy ? t.$$.on_destroy.push(...r) : K(r), t.$$.on_mount = [];
  }), i.forEach(ee);
}
function Pe(t, e) {
  const n = t.$$;
  n.fragment !== null && (Ye(n.after_update), K(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Xe(t, e) {
  t.$$.dirty[0] === -1 && (T.push(t), We(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function De(t, e, n, l, i, r, c = null, a = [-1]) {
  const u = U;
  Y(t);
  const f = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: Z,
    not_equal: i,
    bound: re(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: re(),
    dirty: a,
    skip_bound: !1,
    root: e.target || u.$$.root
  };
  c && c(f.root);
  let x = !1;
  if (f.ctx = n ? n(t, e.props || {}, (g, $, ...k) => {
    const y = k.length ? k[0] : $;
    return f.ctx && i(f.ctx[g], f.ctx[g] = y) && (!f.skip_bound && f.bound[g] && f.bound[g](y), x && Xe(t, g)), $;
  }) : [], f.update(), x = !0, K(f.before_update), f.fragment = l ? l(f.ctx) : !1, e.target) {
    if (e.hydrate) {
      const g = Ve(e.target);
      f.fragment && f.fragment.l(g), g.forEach(A);
    } else
      f.fragment && f.fragment.c();
    e.intro && Ue(t.$$.fragment), Ke(t, e.target, e.anchor), N();
  }
  Y(u);
}
let de;
typeof HTMLElement == "function" && (de = class extends HTMLElement {
  constructor(e, n, l) {
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
              c = p("slot"), r !== "default" && o(c, "name", r);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(f, x) {
              M(f, c, x);
            },
            d: function(f) {
              f && A(c);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn)
        return;
      const n = {}, l = Fe(this);
      for (const r of this.$$s)
        r in l && (n[r] = [e(r)]);
      for (const r of this.attributes) {
        const c = this.$$g_p(r.name);
        c in this.$$d || (this.$$d[c] = X(c, r.value, this.$$p_d, "toProp"));
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
            const c = X(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = X(e, l, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [e]: this.$$d[e] }));
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
function X(t, e, n, l) {
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
      set(u) {
        var f;
        u = X(a, u, e), this.$$d[a] = u, (f = this.$$c) == null || f.$set({ [a]: u });
      }
    });
  }), l.forEach((a) => {
    Object.defineProperty(c.prototype, a, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[a];
      }
    });
  }), r && (c = r(c)), t.element = /** @type {any} */
  c, c;
}
class Je {
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
    Pe(this, 1), this.$destroy = Z;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!he(n))
      return Z;
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
    this.$$set && !Re(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Qe = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Qe);
const me = "KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2NvbnN0IHI9bmV3IFRleHRFbmNvZGVyO2Z1bmN0aW9uIGMoZSl7cmV0dXJuWy4uLm5ldyBVaW50OEFycmF5KGUpXS5tYXAobj0+bi50b1N0cmluZygxNikucGFkU3RhcnQoMiwiMCIpKS5qb2luKCIiKX1hc3luYyBmdW5jdGlvbiBsKGUsbixhKXtyZXR1cm4gYyhhd2FpdCBjcnlwdG8uc3VidGxlLmRpZ2VzdChhLHIuZW5jb2RlKGUrbikpKX1hc3luYyBmdW5jdGlvbiBpKGUsbixhPSJTSEEtMjU2IixvPTFlNyl7Y29uc3Qgcz1EYXRlLm5vdygpO2ZvcihsZXQgdD0wO3Q8PW87dCsrKWlmKGF3YWl0IGwobix0LGEpPT09ZSlyZXR1cm57bnVtYmVyOnQsdG9vazpEYXRlLm5vdygpLXN9O3JldHVybiBudWxsfW9ubWVzc2FnZT1hc3luYyBlPT57Y29uc3R7YWxnOm4sY2hhbGxlbmdlOmEsbWF4Om8sc2FsdDpzfT1lLmRhdGF8fHt9O2lmKGEmJnMpe2NvbnN0IHQ9YXdhaXQgaShhLHMsbixvKTtzZWxmLnBvc3RNZXNzYWdlKHQmJnsuLi50LHdvcmtlcjohMH0pfWVsc2Ugc2VsZi5wb3N0TWVzc2FnZShudWxsKX19KSgpOwo=", se = typeof window < "u" && window.Blob && new Blob([atob(me)], { type: "text/javascript;charset=utf-8" });
function qe() {
  let t;
  try {
    if (t = se && (window.URL || window.webkitURL).createObjectURL(se), !t)
      throw "";
    return new Worker(t);
  } catch {
    return new Worker("data:application/javascript;base64," + me);
  } finally {
    t && (window.URL || window.webkitURL).revokeObjectURL(t);
  }
}
const et = 1e7, tt = new TextEncoder();
function nt(t) {
  return [...new Uint8Array(t)].map((e) => e.toString(16).padStart(2, "0")).join("");
}
async function rt(t = 1e5, e = "SHA-256") {
  const n = Date.now().toString(16), l = Math.round(Math.random() * t), i = await ge(n, l, e);
  return {
    algorithm: e,
    challenge: i,
    salt: n,
    signature: ""
  };
}
async function ge(t, e, n) {
  return nt(await crypto.subtle.digest(n, tt.encode(t + e)));
}
async function lt(t, e, n = "SHA-256", l = et) {
  const i = Date.now();
  for (let r = 0; r <= l; r++)
    if (await ge(e, r, n) === t)
      return {
        number: r,
        took: Date.now() - i
      };
  return null;
}
var j = /* @__PURE__ */ ((t) => (t.ERROR = "error", t.VERIFIED = "verified", t.VERIFYING = "verifying", t.UNVERIFIED = "unverfied", t))(j || {});
function it(t) {
  Ie(t, "svelte-mjm2j6", ".altcha.svelte-mjm2j6.svelte-mjm2j6{background:var(--altcha-color-base, #ffffff);border:1px solid var(--altcha-color-border, #a0a0a0);border-radius:3px;color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:260px;overflow:hidden;position:relative}.altcha.svelte-mjm2j6.svelte-mjm2j6:focus-within{border-color:var(--altcha-color-border-focus, currentColor)}.altcha-main.svelte-mjm2j6.svelte-mjm2j6{align-items:center;display:flex;gap:0.4rem;padding:0.7rem}.altcha-label.svelte-mjm2j6.svelte-mjm2j6{flex-grow:1}.altcha-label.svelte-mjm2j6 label.svelte-mjm2j6{cursor:pointer}.altcha-logo.svelte-mjm2j6.svelte-mjm2j6{color:currentColor;opacity:0.3}.altcha-logo.svelte-mjm2j6.svelte-mjm2j6:hover{opacity:1}.altcha-error.svelte-mjm2j6.svelte-mjm2j6{color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem}.altcha-footer.svelte-mjm2j6.svelte-mjm2j6{align-items:center;background-color:var(--altcha-color-footer-bg, #f4f4f4);display:flex;font-size:0.75rem;padding:0.2rem 0.7rem;text-align:right}.altcha-footer.svelte-mjm2j6>.svelte-mjm2j6:first-child{flex-grow:1}.altcha-footer.svelte-mjm2j6 a{color:currentColor}.altcha-checkbox.svelte-mjm2j6.svelte-mjm2j6{display:flex;align-items:center;height:24px;width:24px}.altcha-checkbox.svelte-mjm2j6 input.svelte-mjm2j6{width:18px;height:18px;margin:0}.altcha-hidden.svelte-mjm2j6.svelte-mjm2j6{display:none}.altcha-spinner.svelte-mjm2j6.svelte-mjm2j6{animation:svelte-mjm2j6-altcha-spinner 0.75s infinite linear;transform-origin:center}@keyframes svelte-mjm2j6-altcha-spinner{100%{transform:rotate(360deg)}}");
}
function oe(t) {
  let e, n, l;
  return {
    c() {
      e = O("svg"), n = O("path"), l = O("path"), o(n, "d", "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"), o(n, "fill", "currentColor"), o(n, "opacity", ".25"), o(l, "d", "M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"), o(l, "fill", "currentColor"), o(l, "class", "altcha-spinner svelte-mjm2j6"), o(e, "width", "24"), o(e, "height", "24"), o(e, "viewBox", "0 0 24 24"), o(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(i, r) {
      M(i, e, r), m(e, n), m(e, l);
    },
    d(i) {
      i && A(e);
    }
  };
}
function st(t) {
  let e, n = (
    /*_strings*/
    t[7].label + ""
  ), l;
  return {
    c() {
      e = p("label"), o(e, "for", l = /*name*/
      t[1] + "_checkbox"), o(e, "class", "svelte-mjm2j6");
    },
    m(i, r) {
      M(i, e, r), e.innerHTML = n;
    },
    p(i, r) {
      r[0] & /*_strings*/
      128 && n !== (n = /*_strings*/
      i[7].label + "") && (e.innerHTML = n), r[0] & /*name*/
      2 && l !== (l = /*name*/
      i[1] + "_checkbox") && o(e, "for", l);
    },
    d(i) {
      i && A(e);
    }
  };
}
function ot(t) {
  let e, n = (
    /*_strings*/
    t[7].verifying + ""
  );
  return {
    c() {
      e = p("span");
    },
    m(l, i) {
      M(l, e, i), e.innerHTML = n;
    },
    p(l, i) {
      i[0] & /*_strings*/
      128 && n !== (n = /*_strings*/
      l[7].verifying + "") && (e.innerHTML = n);
    },
    d(l) {
      l && A(e);
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
      e = p("span"), l = S(), i = p("input"), o(i, "type", "hidden"), o(
        i,
        "name",
        /*name*/
        t[1]
      ), i.value = /*payload*/
      t[2];
    },
    m(r, c) {
      M(r, e, c), e.innerHTML = n, M(r, l, c), M(r, i, c);
    },
    p(r, c) {
      c[0] & /*_strings*/
      128 && n !== (n = /*_strings*/
      r[7].verified + "") && (e.innerHTML = n), c[0] & /*name*/
      2 && o(
        i,
        "name",
        /*name*/
        r[1]
      ), c[0] & /*payload*/
      4 && (i.value = /*payload*/
      r[2]);
    },
    d(r) {
      r && (A(e), A(l), A(i));
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
      e = p("div"), n = O("svg"), l = O("path"), i = S(), r = p("div"), o(l, "stroke-linecap", "round"), o(l, "stroke-linejoin", "round"), o(l, "d", "M6 18L18 6M6 6l12 12"), o(n, "width", "14"), o(n, "height", "14"), o(n, "xmlns", "http://www.w3.org/2000/svg"), o(n, "fill", "none"), o(n, "viewBox", "0 0 24 24"), o(n, "stroke-width", "1.5"), o(n, "stroke", "currentColor"), o(
        r,
        "title",
        /*error*/
        t[6]
      ), o(e, "class", "altcha-error svelte-mjm2j6");
    },
    m(a, u) {
      M(a, e, u), m(e, n), m(n, l), m(e, i), m(e, r), r.innerHTML = c;
    },
    p(a, u) {
      u[0] & /*_strings*/
      128 && c !== (c = /*_strings*/
      a[7].error + "") && (r.innerHTML = c), u[0] & /*error*/
      64 && o(
        r,
        "title",
        /*error*/
        a[6]
      );
    },
    d(a) {
      a && A(e);
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
      e = p("div"), n = p("div"), o(n, "class", "svelte-mjm2j6"), o(e, "class", "altcha-footer svelte-mjm2j6");
    },
    m(i, r) {
      M(i, e, r), m(e, n), n.innerHTML = l;
    },
    p(i, r) {
      r[0] & /*_strings*/
      128 && l !== (l = /*_strings*/
      i[7].footer + "") && (n.innerHTML = l);
    },
    d(i) {
      i && A(e);
    }
  };
}
function at(t) {
  let e, n, l, i, r, c, a, u, f, x, g, $, k, y, H, B, R, F, I, _ = (
    /*state*/
    t[3] === j.VERIFYING && oe()
  );
  function V(h, C) {
    return (
      /*state*/
      h[3] === j.VERIFIED ? ct : (
        /*state*/
        h[3] === j.VERIFYING ? ot : st
      )
    );
  }
  let E = V(t), d = E(t), v = (
    /*error*/
    t[6] && ce(t)
  ), w = (
    /*_strings*/
    t[7].footer && /*hidefooter*/
    t[0] !== !0 && ae(t)
  );
  return {
    c() {
      e = p("div"), n = p("div"), _ && _.c(), l = S(), i = p("div"), r = p("input"), a = S(), u = p("div"), d.c(), f = S(), x = p("div"), g = p("a"), $ = O("svg"), k = O("path"), y = O("path"), H = O("path"), B = S(), v && v.c(), R = S(), w && w.c(), o(r, "type", "checkbox"), o(r, "id", c = /*name*/
      t[1] + "_checkbox"), r.required = !0, o(r, "class", "svelte-mjm2j6"), o(i, "class", "altcha-checkbox svelte-mjm2j6"), le(
        i,
        "altcha-hidden",
        /*state*/
        t[3] === j.VERIFYING
      ), o(u, "class", "altcha-label svelte-mjm2j6"), o(k, "d", "M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z"), o(k, "fill", "currentColor"), o(y, "d", "M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z"), o(y, "fill", "currentColor"), o(H, "d", "M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z"), o(H, "fill", "currentColor"), o($, "width", "22"), o($, "height", "22"), o($, "viewBox", "0 0 20 20"), o($, "fill", "none"), o($, "xmlns", "http://www.w3.org/2000/svg"), o(g, "href", be), o(g, "target", "_blank"), o(g, "class", "altcha-logo svelte-mjm2j6"), o(n, "class", "altcha-main svelte-mjm2j6"), o(e, "class", "altcha svelte-mjm2j6"), o(
        e,
        "data-state",
        /*state*/
        t[3]
      );
    },
    m(h, C) {
      M(h, e, C), m(e, n), _ && _.m(n, null), m(n, l), m(n, i), m(i, r), r.checked = /*checked*/
      t[4], m(n, a), m(n, u), d.m(u, null), m(n, f), m(n, x), m(x, g), m(g, $), m($, k), m($, y), m($, H), m(e, B), v && v.m(e, null), m(e, R), w && w.m(e, null), t[20](e), F || (I = [
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
      ], F = !0);
    },
    p(h, C) {
      /*state*/
      h[3] === j.VERIFYING ? _ || (_ = oe(), _.c(), _.m(n, l)) : _ && (_.d(1), _ = null), C[0] & /*name*/
      2 && c !== (c = /*name*/
      h[1] + "_checkbox") && o(r, "id", c), C[0] & /*checked*/
      16 && (r.checked = /*checked*/
      h[4]), C[0] & /*state*/
      8 && le(
        i,
        "altcha-hidden",
        /*state*/
        h[3] === j.VERIFYING
      ), E === (E = V(h)) && d ? d.p(h, C) : (d.d(1), d = E(h), d && (d.c(), d.m(u, null))), /*error*/
      h[6] ? v ? v.p(h, C) : (v = ce(h), v.c(), v.m(e, R)) : v && (v.d(1), v = null), /*_strings*/
      h[7].footer && /*hidefooter*/
      h[0] !== !0 ? w ? w.p(h, C) : (w = ae(h), w.c(), w.m(e, null)) : w && (w.d(1), w = null), C[0] & /*state*/
      8 && o(
        e,
        "data-state",
        /*state*/
        h[3]
      );
    },
    i: Z,
    o: Z,
    d(h) {
      h && A(e), _ && _.d(), d.d(), v && v.d(), w && w.d(), t[20](null), F = !1, K(I);
    }
  };
}
const be = "https://altcha.org/";
function ue(t) {
  return JSON.parse(t);
}
function ut(t, e, n) {
  let l, i, r, { challengeurl: c = void 0 } = e, { challengejson: a = void 0 } = e, { debug: u = !1 } = e, { hidefooter: f = !1 } = e, { name: x = "altcha" } = e, { maxnumber: g = void 0 } = e, { mockerror: $ = !1 } = e, { strings: k = void 0 } = e, { test: y = !1 } = e;
  const H = Ge(), B = ["SHA-256", "SHA-384", "SHA-512"];
  let R = !1, F, I = null, _ = null, V = null, E = j.UNVERIFIED;
  Se(() => {
    I && (I.removeEventListener("submit", v), I.removeEventListener("reset", w), I = null);
  }), He(() => {
    d("mounted"), y && d("using test mode"), I = F.closest("form"), I && (I.addEventListener("submit", v), I.addEventListener("reset", w));
  });
  function d(...s) {
    (u || s.some((b) => b instanceof Error)) && console[s[0] instanceof Error ? "error" : "log"]("ALTCHA", ...s);
  }
  function v() {
    P();
  }
  function w() {
    P();
  }
  function h(s, b) {
    return btoa(JSON.stringify({
      algorithm: s.algorithm,
      challenge: s.challenge,
      number: b.number,
      salt: s.salt,
      signature: s.signature,
      test: y ? !0 : void 0,
      took: b.took
    }));
  }
  function C(s) {
    if (!s.algorithm || !B.includes(s.algorithm))
      throw new Error(`Unknown algorithm value. Allowed values: ${B.join(", ")}`);
    if (!s.challenge || s.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!s.salt || s.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
    if (s.signature === void 0)
      throw new Error("Signature is missing.");
  }
  async function $e() {
    if ($)
      throw d("mocking error"), new Error("Mocked error.");
    if (l)
      return d("using provided json data"), l;
    if (y)
      return d("generating test challenge"), rt();
    {
      if (!c)
        throw new Error("Attribute challengeurl not set.");
      d("fetching challenge from", c);
      const s = await fetch(c);
      if (s.status !== 200)
        throw new Error(`Server responded with ${s.status}.`);
      return s.json();
    }
  }
  async function _e(s) {
    let b = null;
    if ("Worker" in window) {
      try {
        b = await ve(s.challenge, s.salt, s.algorithm);
      } catch (D) {
        d(D);
      }
      if ((b == null ? void 0 : b.number) !== void 0)
        return { data: s, solution: b };
    }
    return {
      data: s,
      solution: await lt(s.challenge, s.salt, s.algorithm, g)
    };
  }
  async function ve(s, b, D) {
    const ne = new qe();
    return new Promise((ke) => {
      ne.addEventListener("message", (Ee) => {
        ke(Ee.data);
      }), ne.postMessage({ alg: D, challenge: s, max: g, salt: b });
    });
  }
  function we() {
    [j.UNVERIFIED, j.ERROR].includes(E) ? (P(j.VERIFYING), $e().then((s) => (C(s), d("challenge", s), _e(s))).then(({ data: s, solution: b }) => {
      if (d("solution", b), (b == null ? void 0 : b.number) !== void 0)
        d("verified"), n(3, E = j.VERIFIED), n(4, R = !0), n(2, V = h(s, b)), H("verified", { payload: V }), d("payload", V);
      else
        throw new Error("Unexpected result returned.");
    }).catch((s) => {
      d(s), n(3, E = j.ERROR), n(4, R = !1), n(6, _ = s);
    })) : n(4, R = !0);
  }
  function pe() {
    E === j.VERIFYING && alert(r.waitAlert);
  }
  function P(s = j.UNVERIFIED) {
    n(4, R = !1), n(6, _ = null), n(2, V = null), n(3, E = s);
  }
  function je() {
    R = this.checked, n(4, R);
  }
  function ye(s) {
    Q[s ? "unshift" : "push"](() => {
      F = s, n(5, F);
    });
  }
  return t.$$set = (s) => {
    "challengeurl" in s && n(10, c = s.challengeurl), "challengejson" in s && n(11, a = s.challengejson), "debug" in s && n(12, u = s.debug), "hidefooter" in s && n(0, f = s.hidefooter), "name" in s && n(1, x = s.name), "maxnumber" in s && n(13, g = s.maxnumber), "mockerror" in s && n(14, $ = s.mockerror), "strings" in s && n(15, k = s.strings), "test" in s && n(16, y = s.test);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*challengejson*/
    2048 && (l = a ? ue(a) : void 0), t.$$.dirty[0] & /*strings*/
    32768 && n(18, i = k ? ue(k) : {}), t.$$.dirty[0] & /*parsedStrings*/
    262144 && n(7, r = {
      error: "Verification failed. Try again later.",
      footer: `Protected by <a href="${be}" target="_blank">ALTCHA</a>`,
      label: "I'm not a robot",
      verified: "Verified",
      verifying: "Verifying...",
      waitAlert: "Verifying... please wait.",
      ...i
    }), t.$$.dirty[0] & /*payload, state*/
    12 && H("statechange", { payload: V, state: E });
  }, [
    f,
    x,
    V,
    E,
    R,
    F,
    _,
    r,
    we,
    pe,
    c,
    a,
    u,
    g,
    $,
    k,
    y,
    P,
    i,
    je,
    ye
  ];
}
class ft extends Je {
  constructor(e) {
    super(), De(
      this,
      e,
      ut,
      at,
      xe,
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
    this.$$set({ challengeurl: e }), N();
  }
  get challengejson() {
    return this.$$.ctx[11];
  }
  set challengejson(e) {
    this.$$set({ challengejson: e }), N();
  }
  get debug() {
    return this.$$.ctx[12];
  }
  set debug(e) {
    this.$$set({ debug: e }), N();
  }
  get hidefooter() {
    return this.$$.ctx[0];
  }
  set hidefooter(e) {
    this.$$set({ hidefooter: e }), N();
  }
  get name() {
    return this.$$.ctx[1];
  }
  set name(e) {
    this.$$set({ name: e }), N();
  }
  get maxnumber() {
    return this.$$.ctx[13];
  }
  set maxnumber(e) {
    this.$$set({ maxnumber: e }), N();
  }
  get mockerror() {
    return this.$$.ctx[14];
  }
  set mockerror(e) {
    this.$$set({ mockerror: e }), N();
  }
  get strings() {
    return this.$$.ctx[15];
  }
  set strings(e) {
    this.$$set({ strings: e }), N();
  }
  get test() {
    return this.$$.ctx[16];
  }
  set test(e) {
    this.$$set({ test: e }), N();
  }
  get reset() {
    return this.$$.ctx[17];
  }
}
customElements.define("altcha-widget", ze(ft, { challengeurl: {}, challengejson: {}, debug: { type: "Boolean" }, hidefooter: { type: "Boolean" }, name: {}, maxnumber: {}, mockerror: { type: "Boolean" }, strings: {}, test: { type: "Boolean" } }, [], ["reset"], !1));
export {
  ft as Altcha
};
