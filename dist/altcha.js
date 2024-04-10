var Ue = Object.defineProperty;
var Xe = (t, e, r) => e in t ? Ue(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var T = (t, e, r) => (Xe(t, typeof e != "symbol" ? e + "" : e, r), r);
function Y() {
}
function Le(t) {
  return t();
}
function we() {
  return /* @__PURE__ */ Object.create(null);
}
function K(t) {
  t.forEach(Le);
}
function Re(t) {
  return typeof t == "function";
}
function Ke(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function Je(t) {
  return Object.keys(t).length === 0;
}
function b(t, e) {
  t.appendChild(e);
}
function ze(t, e, r) {
  const i = Qe(t);
  if (!i.getElementById(e)) {
    const o = _("style");
    o.id = e, o.textContent = r, qe(i, o);
  }
}
function Qe(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : t.ownerDocument;
}
function qe(t, e) {
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
function et(t) {
  return document.createTextNode(t);
}
function H() {
  return et(" ");
}
function ie(t, e, r, i) {
  return t.addEventListener(e, r, i), () => t.removeEventListener(e, r, i);
}
function c(t, e, r) {
  r == null ? t.removeAttribute(e) : t.getAttribute(e) !== r && t.setAttribute(e, r);
}
function tt(t) {
  return Array.from(t.childNodes);
}
function _e(t, e, r) {
  t.classList.toggle(e, !!r);
}
function rt(t, e, { bubbles: r = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: r, cancelable: i });
}
function nt(t) {
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
function ue() {
  if (!X)
    throw new Error("Function called outside component initialization");
  return X;
}
function it(t) {
  ue().$$.on_mount.push(t);
}
function ot(t) {
  ue().$$.on_destroy.push(t);
}
function lt() {
  const t = ue();
  return (e, r, { cancelable: i = !1 } = {}) => {
    const o = t.$$.callbacks[e];
    if (o) {
      const l = rt(
        /** @type {string} */
        e,
        r,
        { cancelable: i }
      );
      return o.slice().forEach((s) => {
        s.call(t, l);
      }), !l.defaultPrevented;
    }
    return !0;
  };
}
const D = [], le = [];
let B = [];
const pe = [], Ie = /* @__PURE__ */ Promise.resolve();
let se = !1;
function Ne() {
  se || (se = !0, Ie.then(C));
}
function st() {
  return Ne(), Ie;
}
function ce(t) {
  B.push(t);
}
const oe = /* @__PURE__ */ new Set();
let W = 0;
function C() {
  if (W !== 0)
    return;
  const t = X;
  do {
    try {
      for (; W < D.length; ) {
        const e = D[W];
        W++, U(e), ct(e.$$);
      }
    } catch (e) {
      throw D.length = 0, W = 0, e;
    }
    for (U(null), D.length = 0, W = 0; le.length; )
      le.pop()();
    for (let e = 0; e < B.length; e += 1) {
      const r = B[e];
      oe.has(r) || (oe.add(r), r());
    }
    B.length = 0;
  } while (D.length);
  for (; pe.length; )
    pe.pop()();
  se = !1, oe.clear(), U(t);
}
function ct(t) {
  if (t.fragment !== null) {
    t.update(), K(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(ce);
  }
}
function ut(t) {
  const e = [], r = [];
  B.forEach((i) => t.indexOf(i) === -1 ? e.push(i) : r.push(i)), r.forEach((i) => i()), B = e;
}
const ft = /* @__PURE__ */ new Set();
function at(t, e) {
  t && t.i && (ft.delete(t), t.i(e));
}
function ht(t, e, r) {
  const { fragment: i, after_update: o } = t.$$;
  i && i.m(e, r), ce(() => {
    const l = t.$$.on_mount.map(Le).filter(Re);
    t.$$.on_destroy ? t.$$.on_destroy.push(...l) : K(l), t.$$.on_mount = [];
  }), o.forEach(ce);
}
function dt(t, e) {
  const r = t.$$;
  r.fragment !== null && (ut(r.after_update), K(r.on_destroy), r.fragment && r.fragment.d(e), r.on_destroy = r.fragment = null, r.ctx = []);
}
function gt(t, e) {
  t.$$.dirty[0] === -1 && (D.push(t), Ne(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function bt(t, e, r, i, o, l, s = null, u = [-1]) {
  const a = X;
  U(t);
  const f = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: Y,
    not_equal: o,
    bound: we(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: we(),
    dirty: u,
    skip_bound: !1,
    root: e.target || a.$$.root
  };
  s && s(f.root);
  let p = !1;
  if (f.ctx = r ? r(t, e.props || {}, (m, I, ...G) => {
    const M = G.length ? G[0] : I;
    return f.ctx && o(f.ctx[m], f.ctx[m] = M) && (!f.skip_bound && f.bound[m] && f.bound[m](M), p && gt(t, m)), I;
  }) : [], f.update(), p = !0, K(f.before_update), f.fragment = i ? i(f.ctx) : !1, e.target) {
    if (e.hydrate) {
      const m = tt(e.target);
      f.fragment && f.fragment.l(m), m.forEach(L);
    } else
      f.fragment && f.fragment.c();
    e.intro && at(t.$$.fragment), ht(t, e.target, e.anchor), C();
  }
  U(a);
}
let Te;
typeof HTMLElement == "function" && (Te = class extends HTMLElement {
  constructor(e, r, i) {
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
    this.$$ctor = e, this.$$s = r, i && this.attachShadow({ mode: "open" });
  }
  addEventListener(e, r, i) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(r), this.$$c) {
      const o = this.$$c.$on(e, r);
      this.$$l_u.set(r, o);
    }
    super.addEventListener(e, r, i);
  }
  removeEventListener(e, r, i) {
    if (super.removeEventListener(e, r, i), this.$$c) {
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
            m: function(f, p) {
              R(f, s, p);
            },
            d: function(f) {
              f && L(s);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, i = nt(this);
      for (const l of this.$$s)
        l in i && (r[l] = [e(l)]);
      for (const l of this.attributes) {
        const s = this.$$g_p(l.name);
        s in this.$$d || (this.$$d[s] = ee(s, l.value, this.$$p_d, "toProp"));
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
            const s = ee(
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
  attributeChangedCallback(e, r, i) {
    var o;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = ee(e, i, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [e]: this.$$d[e] }));
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
function ee(t, e, r, i) {
  var l;
  const o = (l = r[t]) == null ? void 0 : l.type;
  if (e = o === "Boolean" && typeof e != "boolean" ? e != null : e, !i || !r[t])
    return e;
  if (i === "toAttribute")
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
function mt(t, e, r, i, o, l) {
  let s = class extends Te {
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
        a = ee(u, a, e), this.$$d[u] = a, (f = this.$$c) == null || f.$set({ [u]: a });
      }
    });
  }), i.forEach((u) => {
    Object.defineProperty(s.prototype, u, {
      get() {
        var a;
        return (a = this.$$c) == null ? void 0 : a[u];
      }
    });
  }), l && (s = l(s)), t.element = /** @type {any} */
  s, s;
}
class vt {
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
    dt(this, 1), this.$destroy = Y;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, r) {
    if (!Re(r))
      return Y;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return i.push(r), () => {
      const o = i.indexOf(r);
      o !== -1 && i.splice(o, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !Je(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const wt = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(wt);
const Me = "KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2NvbnN0IGY9bmV3IFRleHRFbmNvZGVyO2Z1bmN0aW9uIGcodCl7cmV0dXJuWy4uLm5ldyBVaW50OEFycmF5KHQpXS5tYXAoZT0+ZS50b1N0cmluZygxNikucGFkU3RhcnQoMiwiMCIpKS5qb2luKCIiKX1hc3luYyBmdW5jdGlvbiBoKHQsZSxvKXtyZXR1cm4gZyhhd2FpdCBjcnlwdG8uc3VidGxlLmRpZ2VzdChvLnRvVXBwZXJDYXNlKCksZi5lbmNvZGUodCtlKSkpfWZ1bmN0aW9uIG0odCxlLG89IlNIQS0yNTYiLGk9MWU2LHA9MCl7Y29uc3QgYT1uZXcgQWJvcnRDb250cm9sbGVyO3JldHVybntwcm9taXNlOm5ldyBQcm9taXNlKChzLGMpPT57Y29uc3Qgcj1EYXRlLm5vdygpLGQ9bD0+e2Euc2lnbmFsLmFib3J0ZWR8fGw+aT9zKG51bGwpOmgoZSxsLG8pLnRoZW4odz0+e3c9PT10P3Moe251bWJlcjpsLHRvb2s6RGF0ZS5ub3coKS1yfSk6ZChsKzEpfSkuY2F0Y2goYyl9O2QocCl9KSxjb250cm9sbGVyOmF9fWxldCBuO29ubWVzc2FnZT1hc3luYyB0PT57Y29uc3R7dHlwZTplLHBheWxvYWQ6b309dC5kYXRhO2lmKGU9PT0iYWJvcnQiKW49PW51bGx8fG4uYWJvcnQoKSxuPXZvaWQgMDtlbHNlIGlmKGU9PT0id29yayIpe2NvbnN0e2FsZzppLGNoYWxsZW5nZTpwLG1heDphLHNhbHQ6dSxzdGFydDpzfT1vfHx7fSxjPW0ocCx1LGksYSxzKTtuPWMuY29udHJvbGxlcixjLnByb21pc2UudGhlbihyPT57c2VsZi5wb3N0TWVzc2FnZShyJiZ7Li4ucix3b3JrZXI6ITB9KX0pfX19KSgpOwo=", _t = (t) => Uint8Array.from(atob(t), (e) => e.charCodeAt(0)), ye = typeof window < "u" && window.Blob && new Blob([_t(Me)], { type: "text/javascript;charset=utf-8" });
function pt(t) {
  let e;
  try {
    if (e = ye && (window.URL || window.webkitURL).createObjectURL(ye), !e)
      throw "";
    const r = new Worker(e, {
      name: t == null ? void 0 : t.name
    });
    return r.addEventListener("error", () => {
      (window.URL || window.webkitURL).revokeObjectURL(e);
    }), r;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + Me,
      {
        name: t == null ? void 0 : t.name
      }
    );
  } finally {
    e && (window.URL || window.webkitURL).revokeObjectURL(e);
  }
}
const yt = new TextEncoder();
function kt(t) {
  return [...new Uint8Array(t)].map((e) => e.toString(16).padStart(2, "0")).join("");
}
async function $t(t, e = "SHA-256", r = 1e5) {
  const i = Date.now().toString(16);
  t || (t = Math.round(Math.random() * r));
  const o = await Ge(i, t, e);
  return {
    algorithm: e,
    challenge: o,
    salt: i,
    signature: ""
  };
}
async function Ge(t, e, r) {
  return kt(await crypto.subtle.digest(r.toUpperCase(), yt.encode(t + e)));
}
function xt(t, e, r = "SHA-256", i = 1e6, o = 0) {
  const l = new AbortController();
  return {
    promise: new Promise((u, a) => {
      const f = Date.now(), p = (m) => {
        l.signal.aborted || m > i ? u(null) : Ge(e, m, r).then((I) => {
          I === t ? u({
            number: m,
            took: Date.now() - f
          }) : p(m + 1);
        }).catch(a);
      };
      p(o);
    }),
    controller: l
  };
}
var g = /* @__PURE__ */ ((t) => (t.ERROR = "error", t.VERIFIED = "verified", t.VERIFYING = "verifying", t.UNVERIFIED = "unverified", t.EXPIRED = "expired", t))(g || {});
function Et(t) {
  ze(t, "svelte-vuofbg", ".altcha.svelte-vuofbg.svelte-vuofbg{background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);overflow:hidden;position:relative;text-align:left}.altcha.svelte-vuofbg.svelte-vuofbg:focus-within{border-color:var(--altcha-color-border-focus, currentColor)}.altcha-main.svelte-vuofbg.svelte-vuofbg{align-items:center;display:flex;gap:0.4rem;padding:0.7rem}.altcha-label.svelte-vuofbg.svelte-vuofbg{flex-grow:1}.altcha-label.svelte-vuofbg label.svelte-vuofbg{cursor:pointer}.altcha-logo.svelte-vuofbg.svelte-vuofbg{color:currentColor;opacity:0.3}.altcha-logo.svelte-vuofbg.svelte-vuofbg:hover{opacity:1}.altcha-error.svelte-vuofbg.svelte-vuofbg{color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem}.altcha-footer.svelte-vuofbg.svelte-vuofbg{align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.4;padding:0.2rem 0.7rem;text-align:right}.altcha-footer.svelte-vuofbg.svelte-vuofbg:hover{opacity:1}.altcha-footer.svelte-vuofbg>.svelte-vuofbg:first-child{flex-grow:1}.altcha-footer.svelte-vuofbg a{color:currentColor}.altcha-checkbox.svelte-vuofbg.svelte-vuofbg{display:flex;align-items:center;height:24px;width:24px}.altcha-checkbox.svelte-vuofbg input.svelte-vuofbg{width:18px;height:18px;margin:0}.altcha-hidden.svelte-vuofbg.svelte-vuofbg{display:none}.altcha-spinner.svelte-vuofbg.svelte-vuofbg{animation:svelte-vuofbg-altcha-spinner 0.75s infinite linear;transform-origin:center}@keyframes svelte-vuofbg-altcha-spinner{100%{transform:rotate(360deg)}}");
}
function ke(t) {
  let e, r, i;
  return {
    c() {
      e = V("svg"), r = V("path"), i = V("path"), c(r, "d", "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"), c(r, "fill", "currentColor"), c(r, "opacity", ".25"), c(i, "d", "M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"), c(i, "fill", "currentColor"), c(i, "class", "altcha-spinner svelte-vuofbg"), c(e, "width", "24"), c(e, "height", "24"), c(e, "viewBox", "0 0 24 24"), c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(o, l) {
      R(o, e, l), b(e, r), b(e, i);
    },
    d(o) {
      o && L(e);
    }
  };
}
function Ct(t) {
  let e, r = (
    /*_strings*/
    t[9].label + ""
  ), i;
  return {
    c() {
      e = _("label"), c(e, "for", i = /*name*/
      t[3] + "_checkbox"), c(e, "class", "svelte-vuofbg");
    },
    m(o, l) {
      R(o, e, l), e.innerHTML = r;
    },
    p(o, l) {
      l[0] & /*_strings*/
      512 && r !== (r = /*_strings*/
      o[9].label + "") && (e.innerHTML = r), l[0] & /*name*/
      8 && i !== (i = /*name*/
      o[3] + "_checkbox") && c(e, "for", i);
    },
    d(o) {
      o && L(e);
    }
  };
}
function Lt(t) {
  let e, r = (
    /*_strings*/
    t[9].verifying + ""
  );
  return {
    c() {
      e = _("span");
    },
    m(i, o) {
      R(i, e, o), e.innerHTML = r;
    },
    p(i, o) {
      o[0] & /*_strings*/
      512 && r !== (r = /*_strings*/
      i[9].verifying + "") && (e.innerHTML = r);
    },
    d(i) {
      i && L(e);
    }
  };
}
function Rt(t) {
  let e, r = (
    /*_strings*/
    t[9].verified + ""
  ), i, o;
  return {
    c() {
      e = _("span"), i = H(), o = _("input"), c(o, "type", "hidden"), c(
        o,
        "name",
        /*name*/
        t[3]
      ), o.value = /*payload*/
      t[4];
    },
    m(l, s) {
      R(l, e, s), e.innerHTML = r, R(l, i, s), R(l, o, s);
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
      l && (L(e), L(i), L(o));
    }
  };
}
function $e(t) {
  let e, r, i, o, l, s;
  return {
    c() {
      e = _("div"), r = _("a"), i = V("svg"), o = V("path"), l = V("path"), s = V("path"), c(o, "d", "M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z"), c(o, "fill", "currentColor"), c(l, "d", "M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z"), c(l, "fill", "currentColor"), c(s, "d", "M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z"), c(s, "fill", "currentColor"), c(i, "width", "22"), c(i, "height", "22"), c(i, "viewBox", "0 0 20 20"), c(i, "fill", "none"), c(i, "xmlns", "http://www.w3.org/2000/svg"), c(r, "href", Se), c(r, "target", "_blank"), c(r, "class", "altcha-logo svelte-vuofbg");
    },
    m(u, a) {
      R(u, e, a), b(e, r), b(r, i), b(i, o), b(i, l), b(i, s);
    },
    p: Y,
    d(u) {
      u && L(e);
    }
  };
}
function xe(t) {
  let e, r, i, o;
  function l(a, f) {
    return (
      /*state*/
      a[5] === g.EXPIRED ? Nt : It
    );
  }
  let s = l(t), u = s(t);
  return {
    c() {
      e = _("div"), r = V("svg"), i = V("path"), o = H(), u.c(), c(i, "stroke-linecap", "round"), c(i, "stroke-linejoin", "round"), c(i, "d", "M6 18L18 6M6 6l12 12"), c(r, "width", "14"), c(r, "height", "14"), c(r, "xmlns", "http://www.w3.org/2000/svg"), c(r, "fill", "none"), c(r, "viewBox", "0 0 24 24"), c(r, "stroke-width", "1.5"), c(r, "stroke", "currentColor"), c(e, "class", "altcha-error svelte-vuofbg");
    },
    m(a, f) {
      R(a, e, f), b(e, r), b(r, i), b(e, o), u.m(e, null);
    },
    p(a, f) {
      s === (s = l(a)) && u ? u.p(a, f) : (u.d(1), u = s(a), u && (u.c(), u.m(e, null)));
    },
    d(a) {
      a && L(e), u.d();
    }
  };
}
function It(t) {
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
    m(i, o) {
      R(i, e, o), e.innerHTML = r;
    },
    p(i, o) {
      o[0] & /*_strings*/
      512 && r !== (r = /*_strings*/
      i[9].error + "") && (e.innerHTML = r), o[0] & /*error*/
      256 && c(
        e,
        "title",
        /*error*/
        i[8]
      );
    },
    d(i) {
      i && L(e);
    }
  };
}
function Nt(t) {
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
    m(i, o) {
      R(i, e, o), e.innerHTML = r;
    },
    p(i, o) {
      o[0] & /*_strings*/
      512 && r !== (r = /*_strings*/
      i[9].expired + "") && (e.innerHTML = r), o[0] & /*error*/
      256 && c(
        e,
        "title",
        /*error*/
        i[8]
      );
    },
    d(i) {
      i && L(e);
    }
  };
}
function Ee(t) {
  let e, r, i = (
    /*_strings*/
    t[9].footer + ""
  );
  return {
    c() {
      e = _("div"), r = _("div"), c(r, "class", "svelte-vuofbg"), c(e, "class", "altcha-footer svelte-vuofbg");
    },
    m(o, l) {
      R(o, e, l), b(e, r), r.innerHTML = i;
    },
    p(o, l) {
      l[0] & /*_strings*/
      512 && i !== (i = /*_strings*/
      o[9].footer + "") && (r.innerHTML = i);
    },
    d(o) {
      o && L(e);
    }
  };
}
function Tt(t) {
  let e, r, i, o, l, s, u, a, f, p, m, I, G, M, w = (
    /*state*/
    t[5] === g.VERIFYING && ke()
  );
  function Z(h, x) {
    return (
      /*state*/
      h[5] === g.VERIFIED ? Rt : (
        /*state*/
        h[5] === g.VERIFYING ? Lt : Ct
      )
    );
  }
  let A = Z(t), y = A(t), v = (
    /*hidelogo*/
    t[2] !== !0 && $e()
  ), k = (
    /*error*/
    (t[8] || /*state*/
    t[5] === g.EXPIRED) && xe(t)
  ), $ = (
    /*_strings*/
    t[9].footer && /*hidefooter*/
    t[1] !== !0 && Ee(t)
  );
  return {
    c() {
      e = _("div"), r = _("div"), w && w.c(), i = H(), o = _("div"), l = _("input"), a = H(), f = _("div"), y.c(), p = H(), v && v.c(), m = H(), k && k.c(), I = H(), $ && $.c(), c(l, "type", "checkbox"), c(l, "id", s = /*name*/
      t[3] + "_checkbox"), l.required = u = /*auto*/
      t[0] !== "onsubmit", c(l, "class", "svelte-vuofbg"), c(o, "class", "altcha-checkbox svelte-vuofbg"), _e(
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
    m(h, x) {
      R(h, e, x), b(e, r), w && w.m(r, null), b(r, i), b(r, o), b(o, l), l.checked = /*checked*/
      t[6], b(r, a), b(r, f), y.m(f, null), b(r, p), v && v.m(r, null), b(e, m), k && k.m(e, null), b(e, I), $ && $.m(e, null), t[27](e), G || (M = [
        ie(
          l,
          "change",
          /*input_change_handler*/
          t[26]
        ),
        ie(
          l,
          "change",
          /*onCheckedChange*/
          t[10]
        ),
        ie(
          l,
          "invalid",
          /*onInvalid*/
          t[11]
        )
      ], G = !0);
    },
    p(h, x) {
      /*state*/
      h[5] === g.VERIFYING ? w || (w = ke(), w.c(), w.m(r, i)) : w && (w.d(1), w = null), x[0] & /*name*/
      8 && s !== (s = /*name*/
      h[3] + "_checkbox") && c(l, "id", s), x[0] & /*auto*/
      1 && u !== (u = /*auto*/
      h[0] !== "onsubmit") && (l.required = u), x[0] & /*checked*/
      64 && (l.checked = /*checked*/
      h[6]), x[0] & /*state*/
      32 && _e(
        o,
        "altcha-hidden",
        /*state*/
        h[5] === g.VERIFYING
      ), A === (A = Z(h)) && y ? y.p(h, x) : (y.d(1), y = A(h), y && (y.c(), y.m(f, null))), /*hidelogo*/
      h[2] !== !0 ? v ? v.p(h, x) : (v = $e(), v.c(), v.m(r, null)) : v && (v.d(1), v = null), /*error*/
      h[8] || /*state*/
      h[5] === g.EXPIRED ? k ? k.p(h, x) : (k = xe(h), k.c(), k.m(e, I)) : k && (k.d(1), k = null), /*_strings*/
      h[9].footer && /*hidefooter*/
      h[1] !== !0 ? $ ? $.p(h, x) : ($ = Ee(h), $.c(), $.m(e, null)) : $ && ($.d(1), $ = null), x[0] & /*state*/
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
      h && L(e), w && w.d(), y.d(), v && v.d(), k && k.d(), $ && $.d(), t[27](null), G = !1, K(M);
    }
  };
}
const Se = "https://altcha.org/";
function Ce(t) {
  return JSON.parse(t);
}
function Mt(t, e, r) {
  let i, o, l, { auto: s = void 0 } = e, { challengeurl: u = void 0 } = e, { challengejson: a = void 0 } = e, { debug: f = !1 } = e, { expire: p = void 0 } = e, { hidefooter: m = !1 } = e, { hidelogo: I = !1 } = e, { name: G = "altcha" } = e, { maxnumber: M = 1e6 } = e, { mockerror: w = !1 } = e, { refetchonexpire: Z = !0 } = e, { strings: A = void 0 } = e, { test: y = !1 } = e, { workers: v = navigator.hardwareConcurrency || 8 } = e;
  const k = lt(), $ = ["SHA-256", "SHA-384", "SHA-512"];
  let h = !1, x, N = null, te = null, F = null, j = g.UNVERIFIED, re;
  ot(() => {
    N && (N.removeEventListener("submit", fe), N.removeEventListener("reset", ae), N = null);
  }), it(() => {
    E("mounted", "0.2.3"), E("workers", v), y && E("using test mode"), p && ne(p), s !== void 0 && E("auto", s), N = x.closest("form"), N && (N.addEventListener("submit", fe), N.addEventListener("reset", ae)), s === "onload" && P();
  });
  function E(...n) {
    (f || n.some((d) => d instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", ...n);
  }
  function fe(n) {
    N && s === "onsubmit" && j === g.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), P().then(() => {
      N == null || N.requestSubmit();
    }));
  }
  function ae() {
    J();
  }
  function Ae(n, d) {
    return btoa(JSON.stringify({
      algorithm: n.algorithm,
      challenge: n.challenge,
      number: d.number,
      salt: n.salt,
      signature: n.signature,
      test: y ? !0 : void 0,
      took: d.took
    }));
  }
  function he(n) {
    if (!n.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (n.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!$.includes(n.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${$.join(", ")}`);
    if (!n.challenge || n.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!n.salt || n.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function je() {
    if (w)
      throw E("mocking error"), new Error("Mocked error.");
    if (i)
      return E("using provided json data"), i;
    if (y)
      return E("generating test challenge"), $t();
    {
      if (!u)
        throw new Error("Attribute challengeurl not set.");
      E("fetching challenge from", u);
      const n = await fetch(u);
      if (n.status !== 200)
        throw new Error(`Server responded with ${n.status}.`);
      const d = n.headers.get("Expires");
      if (!p && (d != null && d.length)) {
        const O = Date.parse(d);
        if (O) {
          const z = O - Date.now();
          z > 0 && ne(z);
        }
      }
      return n.json();
    }
  }
  function de() {
    u && Z && j === g.VERIFIED ? P() : J(g.EXPIRED, l.expired);
  }
  async function Ve(n) {
    let d = null;
    if ("Worker" in window) {
      try {
        d = await Ze(n.challenge, n.salt, n.algorithm, n.maxnumber);
      } catch (O) {
        E(O);
      }
      if ((d == null ? void 0 : d.number) !== void 0)
        return { data: n, solution: d };
    }
    return {
      data: n,
      solution: await xt(n.challenge, n.salt, n.algorithm, n.maxnumber || M).promise
    };
  }
  async function Ze(n, d, O, z = M, Q = Math.ceil(v)) {
    const q = [];
    if (Q < 1)
      throw new Error("Wrong number of workers configured.");
    if (Q > 16)
      throw new Error("Too many workers. Max. 16 allowed workers.");
    for (let S = 0; S < Q; S++)
      q.push(new pt());
    const ge = Math.ceil(z / Q), De = await Promise.all(q.map((S, Be) => {
      const be = Be * ge;
      return new Promise((Ye) => {
        S.addEventListener("message", (me) => {
          if (me.data)
            for (const ve of q)
              ve !== S && ve.postMessage({ type: "abort" });
          Ye(me.data);
        }), S.postMessage({
          payload: {
            alg: O,
            challenge: n,
            max: be + ge,
            salt: d,
            start: be
          },
          type: "work"
        });
      });
    }));
    for (const S of q)
      S.terminate();
    return De.find((S) => !!S) || null;
  }
  function He() {
    [g.UNVERIFIED, g.ERROR, g.EXPIRED].includes(j) ? P() : r(6, h = !0);
  }
  function Fe() {
    j === g.VERIFYING && alert(l.waitAlert);
  }
  function ne(n) {
    E("expire", n), clearTimeout(re), n < 1 ? de() : re = setTimeout(de, n);
  }
  function Pe(n) {
    n.auto !== void 0 && (r(0, s = n.auto), s === "onload" && P()), n.expire !== void 0 && (ne(n.expire), r(13, p = n.expire)), n.challenge && (he(n.challenge), i = n.challenge), n.debug !== void 0 && r(12, f = !!n.debug), n.hidefooter !== void 0 && r(1, m = !!n.hidefooter), n.hidelogo !== void 0 && r(2, I = !!n.hidelogo), n.maxnumber !== void 0 && r(14, M = +n.maxnumber), n.mockerror !== void 0 && r(15, w = !!n.mockerror), n.name !== void 0 && r(3, G = n.name), n.refetchonexpire !== void 0 && r(16, Z = !!n.refetchonexpire), n.strings && r(25, o = n.strings), n.test !== void 0 && r(17, y = !!n.test), n.workers !== void 0 && r(18, v = +n.workers);
  }
  function J(n = g.UNVERIFIED, d = null) {
    clearTimeout(re), r(6, h = !1), r(8, te = d), r(4, F = null), r(5, j = n);
  }
  async function P() {
    return J(g.VERIFYING), je().then((n) => (he(n), E("challenge", n), Ve(n))).then(({ data: n, solution: d }) => {
      if (E("solution", d), (d == null ? void 0 : d.number) !== void 0)
        E("verified"), r(5, j = g.VERIFIED), r(6, h = !0), r(4, F = Ae(n, d)), E("payload", F), st().then(() => {
          k("verified", { payload: F });
        });
      else
        throw E("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).catch((n) => {
      E(n), r(5, j = g.ERROR), r(6, h = !1), r(8, te = n.message);
    });
  }
  function Oe() {
    h = this.checked, r(6, h);
  }
  function We(n) {
    le[n ? "unshift" : "push"](() => {
      x = n, r(7, x);
    });
  }
  return t.$$set = (n) => {
    "auto" in n && r(0, s = n.auto), "challengeurl" in n && r(19, u = n.challengeurl), "challengejson" in n && r(20, a = n.challengejson), "debug" in n && r(12, f = n.debug), "expire" in n && r(13, p = n.expire), "hidefooter" in n && r(1, m = n.hidefooter), "hidelogo" in n && r(2, I = n.hidelogo), "name" in n && r(3, G = n.name), "maxnumber" in n && r(14, M = n.maxnumber), "mockerror" in n && r(15, w = n.mockerror), "refetchonexpire" in n && r(16, Z = n.refetchonexpire), "strings" in n && r(21, A = n.strings), "test" in n && r(17, y = n.test), "workers" in n && r(18, v = n.workers);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*challengejson*/
    1048576 && (i = a ? Ce(a) : void 0), t.$$.dirty[0] & /*strings*/
    2097152 && r(25, o = A ? Ce(A) : {}), t.$$.dirty[0] & /*parsedStrings*/
    33554432 && r(9, l = {
      error: "Verification failed. Try again later.",
      expired: "Verification expired. Try again.",
      footer: `Protected by <a href="${Se}" target="_blank">ALTCHA</a>`,
      label: "I'm not a robot",
      verified: "Verified",
      verifying: "Verifying...",
      waitAlert: "Verifying... please wait.",
      ...o
    }), t.$$.dirty[0] & /*payload, state*/
    48 && k("statechange", { payload: F, state: j });
  }, [
    s,
    m,
    I,
    G,
    F,
    j,
    h,
    x,
    te,
    l,
    He,
    Fe,
    f,
    p,
    M,
    w,
    Z,
    y,
    v,
    u,
    a,
    A,
    Pe,
    J,
    P,
    o,
    Oe,
    We
  ];
}
class Gt extends vt {
  constructor(e) {
    super(), bt(
      this,
      e,
      Mt,
      Tt,
      Ke,
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
    this.$$set({ auto: e }), C();
  }
  get challengeurl() {
    return this.$$.ctx[19];
  }
  set challengeurl(e) {
    this.$$set({ challengeurl: e }), C();
  }
  get challengejson() {
    return this.$$.ctx[20];
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
  get expire() {
    return this.$$.ctx[13];
  }
  set expire(e) {
    this.$$set({ expire: e }), C();
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
    return this.$$.ctx[14];
  }
  set maxnumber(e) {
    this.$$set({ maxnumber: e }), C();
  }
  get mockerror() {
    return this.$$.ctx[15];
  }
  set mockerror(e) {
    this.$$set({ mockerror: e }), C();
  }
  get refetchonexpire() {
    return this.$$.ctx[16];
  }
  set refetchonexpire(e) {
    this.$$set({ refetchonexpire: e }), C();
  }
  get strings() {
    return this.$$.ctx[21];
  }
  set strings(e) {
    this.$$set({ strings: e }), C();
  }
  get test() {
    return this.$$.ctx[17];
  }
  set test(e) {
    this.$$set({ test: e }), C();
  }
  get workers() {
    return this.$$.ctx[18];
  }
  set workers(e) {
    this.$$set({ workers: e }), C();
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
customElements.define("altcha-widget", mt(Gt, { auto: {}, challengeurl: {}, challengejson: {}, debug: { type: "Boolean" }, expire: {}, hidefooter: { type: "Boolean" }, hidelogo: { type: "Boolean" }, name: {}, maxnumber: {}, mockerror: { type: "Boolean" }, refetchonexpire: { type: "Boolean" }, strings: {}, test: { type: "Boolean" }, workers: {} }, [], ["configure", "reset", "verify"], !1));
export {
  Gt as Altcha
};
