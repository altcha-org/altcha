var Ye = Object.defineProperty;
var Ue = (t, e, r) => e in t ? Ye(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var T = (t, e, r) => (Ue(t, typeof e != "symbol" ? e + "" : e, r), r);
function Y() {
}
function Ce(t) {
  return t();
}
function ve() {
  return /* @__PURE__ */ Object.create(null);
}
function K(t) {
  t.forEach(Ce);
}
function Le(t) {
  return typeof t == "function";
}
function Xe(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function Ke(t) {
  return Object.keys(t).length === 0;
}
function b(t, e) {
  t.appendChild(e);
}
function Je(t, e, r) {
  const n = ze(t);
  if (!n.getElementById(e)) {
    const o = _("style");
    o.id = e, o.textContent = r, Qe(n, o);
  }
}
function ze(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : t.ownerDocument;
}
function Qe(t, e) {
  return b(
    /** @type {Document} */
    t.head || t,
    e
  ), e.sheet;
}
function R(t, e, r) {
  t.insertBefore(e, r || null);
}
function L(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function _(t) {
  return document.createElement(t);
}
function V(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function qe(t) {
  return document.createTextNode(t);
}
function H() {
  return qe(" ");
}
function ne(t, e, r, n) {
  return t.addEventListener(e, r, n), () => t.removeEventListener(e, r, n);
}
function c(t, e, r) {
  r == null ? t.removeAttribute(e) : t.getAttribute(e) !== r && t.setAttribute(e, r);
}
function et(t) {
  return Array.from(t.childNodes);
}
function we(t, e, r) {
  t.classList.toggle(e, !!r);
}
function tt(t, e, { bubbles: r = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: r, cancelable: n });
}
function rt(t) {
  const e = {};
  return t.childNodes.forEach(
    /** @param {Element} node */
    (r) => {
      e[r.slot || "default"] = !0;
    }
  ), e;
}
let X;
function U(t) {
  X = t;
}
function ce() {
  if (!X)
    throw new Error("Function called outside component initialization");
  return X;
}
function nt(t) {
  ce().$$.on_mount.push(t);
}
function it(t) {
  ce().$$.on_destroy.push(t);
}
function ot() {
  const t = ce();
  return (e, r, { cancelable: n = !1 } = {}) => {
    const o = t.$$.callbacks[e];
    if (o) {
      const l = tt(
        /** @type {string} */
        e,
        r,
        { cancelable: n }
      );
      return o.slice().forEach((s) => {
        s.call(t, l);
      }), !l.defaultPrevented;
    }
    return !0;
  };
}
const D = [], oe = [];
let B = [];
const _e = [], Re = /* @__PURE__ */ Promise.resolve();
let le = !1;
function Ie() {
  le || (le = !0, Re.then(x));
}
function lt() {
  return Ie(), Re;
}
function se(t) {
  B.push(t);
}
const ie = /* @__PURE__ */ new Set();
let W = 0;
function x() {
  if (W !== 0)
    return;
  const t = X;
  do {
    try {
      for (; W < D.length; ) {
        const e = D[W];
        W++, U(e), st(e.$$);
      }
    } catch (e) {
      throw D.length = 0, W = 0, e;
    }
    for (U(null), D.length = 0, W = 0; oe.length; )
      oe.pop()();
    for (let e = 0; e < B.length; e += 1) {
      const r = B[e];
      ie.has(r) || (ie.add(r), r());
    }
    B.length = 0;
  } while (D.length);
  for (; _e.length; )
    _e.pop()();
  le = !1, ie.clear(), U(t);
}
function st(t) {
  if (t.fragment !== null) {
    t.update(), K(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(se);
  }
}
function ct(t) {
  const e = [], r = [];
  B.forEach((n) => t.indexOf(n) === -1 ? e.push(n) : r.push(n)), r.forEach((n) => n()), B = e;
}
const ut = /* @__PURE__ */ new Set();
function ft(t, e) {
  t && t.i && (ut.delete(t), t.i(e));
}
function at(t, e, r) {
  const { fragment: n, after_update: o } = t.$$;
  n && n.m(e, r), se(() => {
    const l = t.$$.on_mount.map(Ce).filter(Le);
    t.$$.on_destroy ? t.$$.on_destroy.push(...l) : K(l), t.$$.on_mount = [];
  }), o.forEach(se);
}
function ht(t, e) {
  const r = t.$$;
  r.fragment !== null && (ct(r.after_update), K(r.on_destroy), r.fragment && r.fragment.d(e), r.on_destroy = r.fragment = null, r.ctx = []);
}
function dt(t, e) {
  t.$$.dirty[0] === -1 && (D.push(t), Ie(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function gt(t, e, r, n, o, l, s = null, u = [-1]) {
  const a = X;
  U(t);
  const f = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: Y,
    not_equal: o,
    bound: ve(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: ve(),
    dirty: u,
    skip_bound: !1,
    root: e.target || a.$$.root
  };
  s && s(f.root);
  let E = !1;
  if (f.ctx = r ? r(t, e.props || {}, (m, I, ...G) => {
    const M = G.length ? G[0] : I;
    return f.ctx && o(f.ctx[m], f.ctx[m] = M) && (!f.skip_bound && f.bound[m] && f.bound[m](M), E && dt(t, m)), I;
  }) : [], f.update(), E = !0, K(f.before_update), f.fragment = n ? n(f.ctx) : !1, e.target) {
    if (e.hydrate) {
      const m = et(e.target);
      f.fragment && f.fragment.l(m), m.forEach(L);
    } else
      f.fragment && f.fragment.c();
    e.intro && ft(t.$$.fragment), at(t, e.target, e.anchor), x();
  }
  U(a);
}
let Ne;
typeof HTMLElement == "function" && (Ne = class extends HTMLElement {
  constructor(e, r, n) {
    super();
    /** The Svelte component constructor */
    T(this, "$$ctor");
    /** Slots */
    T(this, "$$s");
    /** The Svelte component instance */
    T(this, "$$c");
    /** Whether or not the custom element is connected */
    T(this, "$$cn", !1);
    /** Component props data */
    T(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    T(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    T(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    T(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    T(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = e, this.$$s = r, n && this.attachShadow({ mode: "open" });
  }
  addEventListener(e, r, n) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(r), this.$$c) {
      const o = this.$$c.$on(e, r);
      this.$$l_u.set(r, o);
    }
    super.addEventListener(e, r, n);
  }
  removeEventListener(e, r, n) {
    if (super.removeEventListener(e, r, n), this.$$c) {
      const o = this.$$l_u.get(r);
      o && (o(), this.$$l_u.delete(r));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(l) {
        return () => {
          let s;
          return {
            c: function() {
              s = _("slot"), l !== "default" && c(s, "name", l);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(f, E) {
              R(f, s, E);
            },
            d: function(f) {
              f && L(s);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, n = rt(this);
      for (const l of this.$$s)
        l in n && (r[l] = [e(l)]);
      for (const l of this.attributes) {
        const s = this.$$g_p(l.name);
        s in this.$$d || (this.$$d[s] = q(s, l.value, this.$$p_d, "toProp"));
      }
      for (const l in this.$$p_d)
        !(l in this.$$d) && this[l] !== void 0 && (this.$$d[l] = this[l], delete this[l]);
      this.$$c = new this.$$ctor({
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$scope: {
            ctx: []
          }
        }
      });
      const o = () => {
        this.$$r = !0;
        for (const l in this.$$p_d)
          if (this.$$d[l] = this.$$c.$$.ctx[this.$$c.$$.props[l]], this.$$p_d[l].reflect) {
            const s = q(
              l,
              this.$$d[l],
              this.$$p_d,
              "toAttribute"
            );
            s == null ? this.removeAttribute(this.$$p_d[l].attribute || l) : this.setAttribute(this.$$p_d[l].attribute || l, s);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(o), o();
      for (const l in this.$$l)
        for (const s of this.$$l[l]) {
          const u = this.$$c.$on(l, s);
          this.$$l_u.set(s, u);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(e, r, n) {
    var o;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = q(e, n, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      this.$$cn || (this.$$c.$destroy(), this.$$c = void 0);
    });
  }
  $$g_p(e) {
    return Object.keys(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === e || !this.$$p_d[r].attribute && r.toLowerCase() === e
    ) || e;
  }
});
function q(t, e, r, n) {
  var l;
  const o = (l = r[t]) == null ? void 0 : l.type;
  if (e = o === "Boolean" && typeof e != "boolean" ? e != null : e, !n || !r[t])
    return e;
  if (n === "toAttribute")
    switch (o) {
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
    switch (o) {
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
function bt(t, e, r, n, o, l) {
  let s = class extends Ne {
    constructor() {
      super(t, r, o), this.$$p_d = e;
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
      set(a) {
        var f;
        a = q(u, a, e), this.$$d[u] = a, (f = this.$$c) == null || f.$set({ [u]: a });
      }
    });
  }), n.forEach((u) => {
    Object.defineProperty(s.prototype, u, {
      get() {
        var a;
        return (a = this.$$c) == null ? void 0 : a[u];
      }
    });
  }), l && (s = l(s)), t.element = /** @type {any} */
  s, s;
}
class mt {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    T(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    T(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    ht(this, 1), this.$destroy = Y;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, r) {
    if (!Le(r))
      return Y;
    const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return n.push(r), () => {
      const o = n.indexOf(r);
      o !== -1 && n.splice(o, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !Ke(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const vt = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(vt);
const Te = "KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2NvbnN0IGY9bmV3IFRleHRFbmNvZGVyO2Z1bmN0aW9uIGcodCl7cmV0dXJuWy4uLm5ldyBVaW50OEFycmF5KHQpXS5tYXAoZT0+ZS50b1N0cmluZygxNikucGFkU3RhcnQoMiwiMCIpKS5qb2luKCIiKX1hc3luYyBmdW5jdGlvbiBoKHQsZSxvKXtyZXR1cm4gZyhhd2FpdCBjcnlwdG8uc3VidGxlLmRpZ2VzdChvLnRvVXBwZXJDYXNlKCksZi5lbmNvZGUodCtlKSkpfWZ1bmN0aW9uIG0odCxlLG89IlNIQS0yNTYiLGk9MWU2LHA9MCl7Y29uc3QgYT1uZXcgQWJvcnRDb250cm9sbGVyO3JldHVybntwcm9taXNlOm5ldyBQcm9taXNlKChzLGMpPT57Y29uc3Qgcj1EYXRlLm5vdygpLGQ9bD0+e2Euc2lnbmFsLmFib3J0ZWR8fGw+aT9zKG51bGwpOmgoZSxsLG8pLnRoZW4odz0+e3c9PT10P3Moe251bWJlcjpsLHRvb2s6RGF0ZS5ub3coKS1yfSk6ZChsKzEpfSkuY2F0Y2goYyl9O2QocCl9KSxjb250cm9sbGVyOmF9fWxldCBuO29ubWVzc2FnZT1hc3luYyB0PT57Y29uc3R7dHlwZTplLHBheWxvYWQ6b309dC5kYXRhO2lmKGU9PT0iYWJvcnQiKW49PW51bGx8fG4uYWJvcnQoKSxuPXZvaWQgMDtlbHNlIGlmKGU9PT0id29yayIpe2NvbnN0e2FsZzppLGNoYWxsZW5nZTpwLG1heDphLHNhbHQ6dSxzdGFydDpzfT1vfHx7fSxjPW0ocCx1LGksYSxzKTtuPWMuY29udHJvbGxlcixjLnByb21pc2UudGhlbihyPT57c2VsZi5wb3N0TWVzc2FnZShyJiZ7Li4ucix3b3JrZXI6ITB9KX0pfX19KSgpOwo=", wt = (t) => Uint8Array.from(atob(t), (e) => e.charCodeAt(0)), pe = typeof window < "u" && window.Blob && new Blob([wt(Te)], { type: "text/javascript;charset=utf-8" });
function _t(t) {
  let e;
  try {
    if (e = pe && (window.URL || window.webkitURL).createObjectURL(pe), !e)
      throw "";
    const r = new Worker(e, {
      name: t == null ? void 0 : t.name
    });
    return r.addEventListener("error", () => {
      (window.URL || window.webkitURL).revokeObjectURL(e);
    }), r;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + Te,
      {
        name: t == null ? void 0 : t.name
      }
    );
  } finally {
    e && (window.URL || window.webkitURL).revokeObjectURL(e);
  }
}
const pt = new TextEncoder();
function yt(t) {
  return [...new Uint8Array(t)].map((e) => e.toString(16).padStart(2, "0")).join("");
}
async function kt(t, e = "SHA-256", r = 1e5) {
  const n = Date.now().toString(16);
  t || (t = Math.round(Math.random() * r));
  const o = await Me(n, t, e);
  return {
    algorithm: e,
    challenge: o,
    salt: n,
    signature: ""
  };
}
async function Me(t, e, r) {
  return yt(await crypto.subtle.digest(r.toUpperCase(), pt.encode(t + e)));
}
function $t(t, e, r = "SHA-256", n = 1e6, o = 0) {
  const l = new AbortController();
  return {
    promise: new Promise((u, a) => {
      const f = Date.now(), E = (m) => {
        l.signal.aborted || m > n ? u(null) : Me(e, m, r).then((I) => {
          I === t ? u({
            number: m,
            took: Date.now() - f
          }) : E(m + 1);
        }).catch(a);
      };
      E(o);
    }),
    controller: l
  };
}
var g = /* @__PURE__ */ ((t) => (t.ERROR = "error", t.VERIFIED = "verified", t.VERIFYING = "verifying", t.UNVERIFIED = "unverified", t.EXPIRED = "expired", t))(g || {});
function Et(t) {
  Je(t, "svelte-vuofbg", ".altcha.svelte-vuofbg.svelte-vuofbg{background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);overflow:hidden;position:relative;text-align:left}.altcha.svelte-vuofbg.svelte-vuofbg:focus-within{border-color:var(--altcha-color-border-focus, currentColor)}.altcha-main.svelte-vuofbg.svelte-vuofbg{align-items:center;display:flex;gap:0.4rem;padding:0.7rem}.altcha-label.svelte-vuofbg.svelte-vuofbg{flex-grow:1}.altcha-label.svelte-vuofbg label.svelte-vuofbg{cursor:pointer}.altcha-logo.svelte-vuofbg.svelte-vuofbg{color:currentColor;opacity:0.3}.altcha-logo.svelte-vuofbg.svelte-vuofbg:hover{opacity:1}.altcha-error.svelte-vuofbg.svelte-vuofbg{color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem}.altcha-footer.svelte-vuofbg.svelte-vuofbg{align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.4;padding:0.2rem 0.7rem;text-align:right}.altcha-footer.svelte-vuofbg.svelte-vuofbg:hover{opacity:1}.altcha-footer.svelte-vuofbg>.svelte-vuofbg:first-child{flex-grow:1}.altcha-footer.svelte-vuofbg a{color:currentColor}.altcha-checkbox.svelte-vuofbg.svelte-vuofbg{display:flex;align-items:center;height:24px;width:24px}.altcha-checkbox.svelte-vuofbg input.svelte-vuofbg{width:18px;height:18px;margin:0}.altcha-hidden.svelte-vuofbg.svelte-vuofbg{display:none}.altcha-spinner.svelte-vuofbg.svelte-vuofbg{animation:svelte-vuofbg-altcha-spinner 0.75s infinite linear;transform-origin:center}@keyframes svelte-vuofbg-altcha-spinner{100%{transform:rotate(360deg)}}");
}
function ye(t) {
  let e, r, n;
  return {
    c() {
      e = V("svg"), r = V("path"), n = V("path"), c(r, "d", "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"), c(r, "fill", "currentColor"), c(r, "opacity", ".25"), c(n, "d", "M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"), c(n, "fill", "currentColor"), c(n, "class", "altcha-spinner svelte-vuofbg"), c(e, "width", "24"), c(e, "height", "24"), c(e, "viewBox", "0 0 24 24"), c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(o, l) {
      R(o, e, l), b(e, r), b(e, n);
    },
    d(o) {
      o && L(e);
    }
  };
}
function xt(t) {
  let e, r = (
    /*_strings*/
    t[9].label + ""
  ), n;
  return {
    c() {
      e = _("label"), c(e, "for", n = /*name*/
      t[3] + "_checkbox"), c(e, "class", "svelte-vuofbg");
    },
    m(o, l) {
      R(o, e, l), e.innerHTML = r;
    },
    p(o, l) {
      l[0] & /*_strings*/
      512 && r !== (r = /*_strings*/
      o[9].label + "") && (e.innerHTML = r), l[0] & /*name*/
      8 && n !== (n = /*name*/
      o[3] + "_checkbox") && c(e, "for", n);
    },
    d(o) {
      o && L(e);
    }
  };
}
function Ct(t) {
  let e, r = (
    /*_strings*/
    t[9].verifying + ""
  );
  return {
    c() {
      e = _("span");
    },
    m(n, o) {
      R(n, e, o), e.innerHTML = r;
    },
    p(n, o) {
      o[0] & /*_strings*/
      512 && r !== (r = /*_strings*/
      n[9].verifying + "") && (e.innerHTML = r);
    },
    d(n) {
      n && L(e);
    }
  };
}
function Lt(t) {
  let e, r = (
    /*_strings*/
    t[9].verified + ""
  ), n, o;
  return {
    c() {
      e = _("span"), n = H(), o = _("input"), c(o, "type", "hidden"), c(
        o,
        "name",
        /*name*/
        t[3]
      ), o.value = /*payload*/
      t[4];
    },
    m(l, s) {
      R(l, e, s), e.innerHTML = r, R(l, n, s), R(l, o, s);
    },
    p(l, s) {
      s[0] & /*_strings*/
      512 && r !== (r = /*_strings*/
      l[9].verified + "") && (e.innerHTML = r), s[0] & /*name*/
      8 && c(
        o,
        "name",
        /*name*/
        l[3]
      ), s[0] & /*payload*/
      16 && (o.value = /*payload*/
      l[4]);
    },
    d(l) {
      l && (L(e), L(n), L(o));
    }
  };
}
function ke(t) {
  let e, r, n, o, l, s;
  return {
    c() {
      e = _("div"), r = _("a"), n = V("svg"), o = V("path"), l = V("path"), s = V("path"), c(o, "d", "M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z"), c(o, "fill", "currentColor"), c(l, "d", "M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z"), c(l, "fill", "currentColor"), c(s, "d", "M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z"), c(s, "fill", "currentColor"), c(n, "width", "22"), c(n, "height", "22"), c(n, "viewBox", "0 0 20 20"), c(n, "fill", "none"), c(n, "xmlns", "http://www.w3.org/2000/svg"), c(r, "href", Ge), c(r, "target", "_blank"), c(r, "class", "altcha-logo svelte-vuofbg");
    },
    m(u, a) {
      R(u, e, a), b(e, r), b(r, n), b(n, o), b(n, l), b(n, s);
    },
    p: Y,
    d(u) {
      u && L(e);
    }
  };
}
function $e(t) {
  let e, r, n, o;
  function l(a, f) {
    return (
      /*state*/
      a[5] === g.EXPIRED ? It : Rt
    );
  }
  let s = l(t), u = s(t);
  return {
    c() {
      e = _("div"), r = V("svg"), n = V("path"), o = H(), u.c(), c(n, "stroke-linecap", "round"), c(n, "stroke-linejoin", "round"), c(n, "d", "M6 18L18 6M6 6l12 12"), c(r, "width", "14"), c(r, "height", "14"), c(r, "xmlns", "http://www.w3.org/2000/svg"), c(r, "fill", "none"), c(r, "viewBox", "0 0 24 24"), c(r, "stroke-width", "1.5"), c(r, "stroke", "currentColor"), c(e, "class", "altcha-error svelte-vuofbg");
    },
    m(a, f) {
      R(a, e, f), b(e, r), b(r, n), b(e, o), u.m(e, null);
    },
    p(a, f) {
      s === (s = l(a)) && u ? u.p(a, f) : (u.d(1), u = s(a), u && (u.c(), u.m(e, null)));
    },
    d(a) {
      a && L(e), u.d();
    }
  };
}
function Rt(t) {
  let e, r = (
    /*_strings*/
    t[9].error + ""
  );
  return {
    c() {
      e = _("div"), c(
        e,
        "title",
        /*error*/
        t[8]
      );
    },
    m(n, o) {
      R(n, e, o), e.innerHTML = r;
    },
    p(n, o) {
      o[0] & /*_strings*/
      512 && r !== (r = /*_strings*/
      n[9].error + "") && (e.innerHTML = r), o[0] & /*error*/
      256 && c(
        e,
        "title",
        /*error*/
        n[8]
      );
    },
    d(n) {
      n && L(e);
    }
  };
}
function It(t) {
  let e, r = (
    /*_strings*/
    t[9].expired + ""
  );
  return {
    c() {
      e = _("div"), c(
        e,
        "title",
        /*error*/
        t[8]
      );
    },
    m(n, o) {
      R(n, e, o), e.innerHTML = r;
    },
    p(n, o) {
      o[0] & /*_strings*/
      512 && r !== (r = /*_strings*/
      n[9].expired + "") && (e.innerHTML = r), o[0] & /*error*/
      256 && c(
        e,
        "title",
        /*error*/
        n[8]
      );
    },
    d(n) {
      n && L(e);
    }
  };
}
function Ee(t) {
  let e, r, n = (
    /*_strings*/
    t[9].footer + ""
  );
  return {
    c() {
      e = _("div"), r = _("div"), c(r, "class", "svelte-vuofbg"), c(e, "class", "altcha-footer svelte-vuofbg");
    },
    m(o, l) {
      R(o, e, l), b(e, r), r.innerHTML = n;
    },
    p(o, l) {
      l[0] & /*_strings*/
      512 && n !== (n = /*_strings*/
      o[9].footer + "") && (r.innerHTML = n);
    },
    d(o) {
      o && L(e);
    }
  };
}
function Nt(t) {
  let e, r, n, o, l, s, u, a, f, E, m, I, G, M, w = (
    /*state*/
    t[5] === g.VERIFYING && ye()
  );
  function Z(h, $) {
    return (
      /*state*/
      h[5] === g.VERIFIED ? Lt : (
        /*state*/
        h[5] === g.VERIFYING ? Ct : xt
      )
    );
  }
  let A = Z(t), p = A(t), v = (
    /*hidelogo*/
    t[2] !== !0 && ke()
  ), y = (
    /*error*/
    (t[8] || /*state*/
    t[5] === g.EXPIRED) && $e(t)
  ), k = (
    /*_strings*/
    t[9].footer && /*hidefooter*/
    t[1] !== !0 && Ee(t)
  );
  return {
    c() {
      e = _("div"), r = _("div"), w && w.c(), n = H(), o = _("div"), l = _("input"), a = H(), f = _("div"), p.c(), E = H(), v && v.c(), m = H(), y && y.c(), I = H(), k && k.c(), c(l, "type", "checkbox"), c(l, "id", s = /*name*/
      t[3] + "_checkbox"), l.required = u = /*auto*/
      t[0] !== "onsubmit", c(l, "class", "svelte-vuofbg"), c(o, "class", "altcha-checkbox svelte-vuofbg"), we(
        o,
        "altcha-hidden",
        /*state*/
        t[5] === g.VERIFYING
      ), c(f, "class", "altcha-label svelte-vuofbg"), c(r, "class", "altcha-main svelte-vuofbg"), c(e, "class", "altcha svelte-vuofbg"), c(
        e,
        "data-state",
        /*state*/
        t[5]
      );
    },
    m(h, $) {
      R(h, e, $), b(e, r), w && w.m(r, null), b(r, n), b(r, o), b(o, l), l.checked = /*checked*/
      t[6], b(r, a), b(r, f), p.m(f, null), b(r, E), v && v.m(r, null), b(e, m), y && y.m(e, null), b(e, I), k && k.m(e, null), t[27](e), G || (M = [
        ne(
          l,
          "change",
          /*input_change_handler*/
          t[26]
        ),
        ne(
          l,
          "change",
          /*onCheckedChange*/
          t[10]
        ),
        ne(
          l,
          "invalid",
          /*onInvalid*/
          t[11]
        )
      ], G = !0);
    },
    p(h, $) {
      /*state*/
      h[5] === g.VERIFYING ? w || (w = ye(), w.c(), w.m(r, n)) : w && (w.d(1), w = null), $[0] & /*name*/
      8 && s !== (s = /*name*/
      h[3] + "_checkbox") && c(l, "id", s), $[0] & /*auto*/
      1 && u !== (u = /*auto*/
      h[0] !== "onsubmit") && (l.required = u), $[0] & /*checked*/
      64 && (l.checked = /*checked*/
      h[6]), $[0] & /*state*/
      32 && we(
        o,
        "altcha-hidden",
        /*state*/
        h[5] === g.VERIFYING
      ), A === (A = Z(h)) && p ? p.p(h, $) : (p.d(1), p = A(h), p && (p.c(), p.m(f, null))), /*hidelogo*/
      h[2] !== !0 ? v ? v.p(h, $) : (v = ke(), v.c(), v.m(r, null)) : v && (v.d(1), v = null), /*error*/
      h[8] || /*state*/
      h[5] === g.EXPIRED ? y ? y.p(h, $) : (y = $e(h), y.c(), y.m(e, I)) : y && (y.d(1), y = null), /*_strings*/
      h[9].footer && /*hidefooter*/
      h[1] !== !0 ? k ? k.p(h, $) : (k = Ee(h), k.c(), k.m(e, null)) : k && (k.d(1), k = null), $[0] & /*state*/
      32 && c(
        e,
        "data-state",
        /*state*/
        h[5]
      );
    },
    i: Y,
    o: Y,
    d(h) {
      h && L(e), w && w.d(), p.d(), v && v.d(), y && y.d(), k && k.d(), t[27](null), G = !1, K(M);
    }
  };
}
const Ge = "https://altcha.org/";
function xe(t) {
  return JSON.parse(t);
}
function Tt(t, e, r) {
  let n, o, l, { auto: s = void 0 } = e, { challengeurl: u = void 0 } = e, { challengejson: a = void 0 } = e, { debug: f = !1 } = e, { expire: E = void 0 } = e, { hidefooter: m = !1 } = e, { hidelogo: I = !1 } = e, { name: G = "altcha" } = e, { maxnumber: M = 1e6 } = e, { mockerror: w = !1 } = e, { refetchonexpire: Z = !0 } = e, { strings: A = void 0 } = e, { test: p = !1 } = e, { workers: v = navigator.hardwareConcurrency || 8 } = e;
  const y = ot(), k = ["SHA-256", "SHA-384", "SHA-512"];
  let h = !1, $, N = null, ee = null, F = null, j = g.UNVERIFIED, te;
  it(() => {
    N && (N.removeEventListener("submit", ue), N.removeEventListener("reset", fe), N = null);
  }), nt(() => {
    C("mounted", "0.2.2"), C("workers", v), p && C("using test mode"), E && re(E), s !== void 0 && C("auto", s), N = $.closest("form"), N && (N.addEventListener("submit", ue), N.addEventListener("reset", fe)), s === "onload" && P();
  });
  function C(...i) {
    (f || i.some((d) => d instanceof Error)) && console[i[0] instanceof Error ? "error" : "log"]("ALTCHA", ...i);
  }
  function ue(i) {
    N && s === "onsubmit" && j === g.UNVERIFIED && (i.preventDefault(), i.stopPropagation(), P().then(() => {
      N == null || N.requestSubmit();
    }));
  }
  function fe() {
    J();
  }
  function Se(i, d) {
    return btoa(JSON.stringify({
      algorithm: i.algorithm,
      challenge: i.challenge,
      number: d.number,
      salt: i.salt,
      signature: i.signature,
      test: p ? !0 : void 0,
      took: d.took
    }));
  }
  function ae(i) {
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
  async function Ae() {
    if (w)
      throw C("mocking error"), new Error("Mocked error.");
    if (n)
      return C("using provided json data"), n;
    if (p)
      return C("generating test challenge"), kt();
    {
      if (!u)
        throw new Error("Attribute challengeurl not set.");
      C("fetching challenge from", u);
      const i = await fetch(u);
      if (i.status !== 200)
        throw new Error(`Server responded with ${i.status}.`);
      const d = i.headers.get("Expires");
      if (d != null && d.length) {
        const O = Date.parse(d);
        isNaN(O) || re(O - Date.now());
      }
      return i.json();
    }
  }
  function he() {
    u && Z && j === g.VERIFIED ? P() : J(g.EXPIRED, l.expired);
  }
  async function je(i) {
    let d = null;
    if ("Worker" in window) {
      try {
        d = await Ve(i.challenge, i.salt, i.algorithm);
      } catch (O) {
        C(O);
      }
      if ((d == null ? void 0 : d.number) !== void 0)
        return { data: i, solution: d };
    }
    return {
      data: i,
      solution: await $t(i.challenge, i.salt, i.algorithm, M).promise
    };
  }
  async function Ve(i, d, O, z = Math.ceil(v)) {
    const Q = [];
    if (z < 1)
      throw new Error("Wrong number of workers configured.");
    if (z > 16)
      throw new Error("Too many workers. Max. 16 allowed workers.");
    for (let S = 0; S < z; S++)
      Q.push(new _t());
    const de = Math.ceil(M / z), We = await Promise.all(Q.map((S, De) => {
      const ge = De * de;
      return new Promise((Be) => {
        S.addEventListener("message", (be) => {
          if (be.data)
            for (const me of Q)
              me !== S && me.postMessage({ type: "abort" });
          Be(be.data);
        }), S.postMessage({
          payload: {
            alg: O,
            challenge: i,
            max: ge + de,
            salt: d,
            start: ge
          },
          type: "work"
        });
      });
    }));
    for (const S of Q)
      S.terminate();
    return We.find((S) => !!S) || null;
  }
  function Ze() {
    [g.UNVERIFIED, g.ERROR, g.EXPIRED].includes(j) ? P() : r(6, h = !0);
  }
  function He() {
    j === g.VERIFYING && alert(l.waitAlert);
  }
  function re(i) {
    C("expire", i), clearTimeout(te), i < 1 ? he() : te = setTimeout(he, i);
  }
  function Fe(i) {
    i.auto !== void 0 && (r(0, s = i.auto), s === "onload" && P()), i.expire !== void 0 && (re(i.expire), r(13, E = i.expire)), i.challenge && (ae(i.challenge), n = i.challenge), i.debug !== void 0 && r(12, f = !!i.debug), i.hidefooter !== void 0 && r(1, m = !!i.hidefooter), i.hidelogo !== void 0 && r(2, I = !!i.hidelogo), i.maxnumber !== void 0 && r(14, M = +i.maxnumber), i.mockerror !== void 0 && r(15, w = !!i.mockerror), i.name !== void 0 && r(3, G = i.name), i.refetchonexpire !== void 0 && r(16, Z = !!i.refetchonexpire), i.strings && r(25, o = i.strings), i.test !== void 0 && r(17, p = !!i.test), i.workers !== void 0 && r(18, v = +i.workers);
  }
  function J(i = g.UNVERIFIED, d = null) {
    clearTimeout(te), r(6, h = !1), r(8, ee = d), r(4, F = null), r(5, j = i);
  }
  async function P() {
    return J(g.VERIFYING), Ae().then((i) => (ae(i), C("challenge", i), je(i))).then(({ data: i, solution: d }) => {
      if (C("solution", d), (d == null ? void 0 : d.number) !== void 0)
        C("verified"), r(5, j = g.VERIFIED), r(6, h = !0), r(4, F = Se(i, d)), C("payload", F), lt().then(() => {
          y("verified", { payload: F });
        });
      else
        throw new Error("Unexpected result returned.");
    }).catch((i) => {
      C(i), r(5, j = g.ERROR), r(6, h = !1), r(8, ee = i.message);
    });
  }
  function Pe() {
    h = this.checked, r(6, h);
  }
  function Oe(i) {
    oe[i ? "unshift" : "push"](() => {
      $ = i, r(7, $);
    });
  }
  return t.$$set = (i) => {
    "auto" in i && r(0, s = i.auto), "challengeurl" in i && r(19, u = i.challengeurl), "challengejson" in i && r(20, a = i.challengejson), "debug" in i && r(12, f = i.debug), "expire" in i && r(13, E = i.expire), "hidefooter" in i && r(1, m = i.hidefooter), "hidelogo" in i && r(2, I = i.hidelogo), "name" in i && r(3, G = i.name), "maxnumber" in i && r(14, M = i.maxnumber), "mockerror" in i && r(15, w = i.mockerror), "refetchonexpire" in i && r(16, Z = i.refetchonexpire), "strings" in i && r(21, A = i.strings), "test" in i && r(17, p = i.test), "workers" in i && r(18, v = i.workers);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*challengejson*/
    1048576 && (n = a ? xe(a) : void 0), t.$$.dirty[0] & /*strings*/
    2097152 && r(25, o = A ? xe(A) : {}), t.$$.dirty[0] & /*parsedStrings*/
    33554432 && r(9, l = {
      error: "Verification failed. Try again later.",
      expired: "Verification expired. Try again.",
      footer: `Protected by <a href="${Ge}" target="_blank">ALTCHA</a>`,
      label: "I'm not a robot",
      verified: "Verified",
      verifying: "Verifying...",
      waitAlert: "Verifying... please wait.",
      ...o
    }), t.$$.dirty[0] & /*payload, state*/
    48 && y("statechange", { payload: F, state: j });
  }, [
    s,
    m,
    I,
    G,
    F,
    j,
    h,
    $,
    ee,
    l,
    Ze,
    He,
    f,
    E,
    M,
    w,
    Z,
    p,
    v,
    u,
    a,
    A,
    Fe,
    J,
    P,
    o,
    Pe,
    Oe
  ];
}
class Mt extends mt {
  constructor(e) {
    super(), gt(
      this,
      e,
      Tt,
      Nt,
      Xe,
      {
        auto: 0,
        challengeurl: 19,
        challengejson: 20,
        debug: 12,
        expire: 13,
        hidefooter: 1,
        hidelogo: 2,
        name: 3,
        maxnumber: 14,
        mockerror: 15,
        refetchonexpire: 16,
        strings: 21,
        test: 17,
        workers: 18,
        configure: 22,
        reset: 23,
        verify: 24
      },
      Et,
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
    return this.$$.ctx[19];
  }
  set challengeurl(e) {
    this.$$set({ challengeurl: e }), x();
  }
  get challengejson() {
    return this.$$.ctx[20];
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
  get expire() {
    return this.$$.ctx[13];
  }
  set expire(e) {
    this.$$set({ expire: e }), x();
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
    return this.$$.ctx[14];
  }
  set maxnumber(e) {
    this.$$set({ maxnumber: e }), x();
  }
  get mockerror() {
    return this.$$.ctx[15];
  }
  set mockerror(e) {
    this.$$set({ mockerror: e }), x();
  }
  get refetchonexpire() {
    return this.$$.ctx[16];
  }
  set refetchonexpire(e) {
    this.$$set({ refetchonexpire: e }), x();
  }
  get strings() {
    return this.$$.ctx[21];
  }
  set strings(e) {
    this.$$set({ strings: e }), x();
  }
  get test() {
    return this.$$.ctx[17];
  }
  set test(e) {
    this.$$set({ test: e }), x();
  }
  get workers() {
    return this.$$.ctx[18];
  }
  set workers(e) {
    this.$$set({ workers: e }), x();
  }
  get configure() {
    return this.$$.ctx[22];
  }
  get reset() {
    return this.$$.ctx[23];
  }
  get verify() {
    return this.$$.ctx[24];
  }
}
customElements.define("altcha-widget", bt(Mt, { auto: {}, challengeurl: {}, challengejson: {}, debug: { type: "Boolean" }, expire: {}, hidefooter: { type: "Boolean" }, hidelogo: { type: "Boolean" }, name: {}, maxnumber: {}, mockerror: { type: "Boolean" }, refetchonexpire: { type: "Boolean" }, strings: {}, test: { type: "Boolean" }, workers: {} }, [], ["configure", "reset", "verify"], !1));
export {
  Mt as Altcha
};
