var nt = Object.defineProperty;
var it = (r, e, t) => e in r ? nt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var M = (r, e, t) => (it(r, typeof e != "symbol" ? e + "" : e, t), t);
function Q() {
}
function Ge(r) {
  return r();
}
function Ie() {
  return /* @__PURE__ */ Object.create(null);
}
function te(r) {
  r.forEach(Ge);
}
function Ue(r) {
  return typeof r == "function";
}
function lt(r, e) {
  return r != r ? e == e : r !== e || r && typeof r == "object" || typeof r == "function";
}
function ot(r) {
  return Object.keys(r).length === 0;
}
function y(r, e) {
  r.appendChild(e);
}
function st(r, e, t) {
  const i = ct(r);
  if (!i.getElementById(e)) {
    const l = R("style");
    l.id = e, l.textContent = t, at(i, l);
  }
}
function ct(r) {
  if (!r)
    return document;
  const e = r.getRootNode ? r.getRootNode() : r.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : r.ownerDocument;
}
function at(r, e) {
  return y(
    /** @type {Document} */
    r.head || r,
    e
  ), e.sheet;
}
function Z(r, e, t) {
  r.insertBefore(e, t || null);
}
function S(r) {
  r.parentNode && r.parentNode.removeChild(r);
}
function R(r) {
  return document.createElement(r);
}
function O(r) {
  return document.createElementNS("http://www.w3.org/2000/svg", r);
}
function ft(r) {
  return document.createTextNode(r);
}
function B() {
  return ft(" ");
}
function ae(r, e, t, i) {
  return r.addEventListener(e, t, i), () => r.removeEventListener(e, t, i);
}
function c(r, e, t) {
  t == null ? r.removeAttribute(e) : r.getAttribute(e) !== t && r.setAttribute(e, t);
}
function ut(r) {
  return Array.from(r.childNodes);
}
function Ne(r, e, t) {
  r.classList.toggle(e, !!t);
}
function ht(r, e, { bubbles: t = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(r, { detail: e, bubbles: t, cancelable: i });
}
function dt(r) {
  const e = {};
  return r.childNodes.forEach(
    /** @param {Element} node */
    (t) => {
      e[t.slot || "default"] = !0;
    }
  ), e;
}
let ee;
function q(r) {
  ee = r;
}
function ge() {
  if (!ee)
    throw new Error("Function called outside component initialization");
  return ee;
}
function gt(r) {
  ge().$$.on_mount.push(r);
}
function mt(r) {
  ge().$$.on_destroy.push(r);
}
function bt() {
  const r = ge();
  return (e, t, { cancelable: i = !1 } = {}) => {
    const l = r.$$.callbacks[e];
    if (l) {
      const o = ht(
        /** @type {string} */
        e,
        t,
        { cancelable: i }
      );
      return l.slice().forEach((s) => {
        s.call(r, o);
      }), !o.defaultPrevented;
    }
    return !0;
  };
}
const J = [], ue = [];
let z = [];
const Se = [], Xe = /* @__PURE__ */ Promise.resolve();
let he = !1;
function De() {
  he || (he = !0, Xe.then($));
}
function pt() {
  return De(), Xe;
}
function de(r) {
  z.push(r);
}
const fe = /* @__PURE__ */ new Set();
let K = 0;
function $() {
  if (K !== 0)
    return;
  const r = ee;
  do {
    try {
      for (; K < J.length; ) {
        const e = J[K];
        K++, q(e), yt(e.$$);
      }
    } catch (e) {
      throw J.length = 0, K = 0, e;
    }
    for (q(null), J.length = 0, K = 0; ue.length; )
      ue.pop()();
    for (let e = 0; e < z.length; e += 1) {
      const t = z[e];
      fe.has(t) || (fe.add(t), t());
    }
    z.length = 0;
  } while (J.length);
  for (; Se.length; )
    Se.pop()();
  he = !1, fe.clear(), q(r);
}
function yt(r) {
  if (r.fragment !== null) {
    r.update(), te(r.before_update);
    const e = r.dirty;
    r.dirty = [-1], r.fragment && r.fragment.p(r.ctx, e), r.after_update.forEach(de);
  }
}
function vt(r) {
  const e = [], t = [];
  z.forEach((i) => r.indexOf(i) === -1 ? e.push(i) : t.push(i)), t.forEach((i) => i()), z = e;
}
const wt = /* @__PURE__ */ new Set();
function _t(r, e) {
  r && r.i && (wt.delete(r), r.i(e));
}
function kt(r, e, t) {
  const { fragment: i, after_update: l } = r.$$;
  i && i.m(e, t), de(() => {
    const o = r.$$.on_mount.map(Ge).filter(Ue);
    r.$$.on_destroy ? r.$$.on_destroy.push(...o) : te(o), r.$$.on_mount = [];
  }), l.forEach(de);
}
function xt(r, e) {
  const t = r.$$;
  t.fragment !== null && (vt(t.after_update), te(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Et(r, e) {
  r.$$.dirty[0] === -1 && (J.push(r), De(), r.$$.dirty.fill(0)), r.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function $t(r, e, t, i, l, o, s = null, f = [-1]) {
  const a = ee;
  q(r);
  const h = r.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: Q,
    not_equal: l,
    bound: Ie(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: Ie(),
    dirty: f,
    skip_bound: !1,
    root: e.target || a.$$.root
  };
  s && s(h.root);
  let A = !1;
  if (h.ctx = t ? t(r, e.props || {}, (C, V, ...G) => {
    const U = G.length ? G[0] : V;
    return h.ctx && l(h.ctx[C], h.ctx[C] = U) && (!h.skip_bound && h.bound[C] && h.bound[C](U), A && Et(r, C)), V;
  }) : [], h.update(), A = !0, te(h.before_update), h.fragment = i ? i(h.ctx) : !1, e.target) {
    if (e.hydrate) {
      const C = ut(e.target);
      h.fragment && h.fragment.l(C), C.forEach(S);
    } else
      h.fragment && h.fragment.c();
    e.intro && _t(r.$$.fragment), kt(r, e.target, e.anchor), $();
  }
  q(a);
}
let Oe;
typeof HTMLElement == "function" && (Oe = class extends HTMLElement {
  constructor(e, t, i) {
    super();
    /** The Svelte component constructor */
    M(this, "$$ctor");
    /** Slots */
    M(this, "$$s");
    /** The Svelte component instance */
    M(this, "$$c");
    /** Whether or not the custom element is connected */
    M(this, "$$cn", !1);
    /** Component props data */
    M(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    M(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    M(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    M(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    M(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = e, this.$$s = t, i && this.attachShadow({ mode: "open" });
  }
  addEventListener(e, t, i) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
      const l = this.$$c.$on(e, t);
      this.$$l_u.set(t, l);
    }
    super.addEventListener(e, t, i);
  }
  removeEventListener(e, t, i) {
    if (super.removeEventListener(e, t, i), this.$$c) {
      const l = this.$$l_u.get(t);
      l && (l(), this.$$l_u.delete(t));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(o) {
        return () => {
          let s;
          return {
            c: function() {
              s = R("slot"), o !== "default" && c(s, "name", o);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(h, A) {
              Z(h, s, A);
            },
            d: function(h) {
              h && S(s);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, i = dt(this);
      for (const o of this.$$s)
        o in i && (t[o] = [e(o)]);
      for (const o of this.attributes) {
        const s = this.$$g_p(o.name);
        s in this.$$d || (this.$$d[s] = oe(s, o.value, this.$$p_d, "toProp"));
      }
      for (const o in this.$$p_d)
        !(o in this.$$d) && this[o] !== void 0 && (this.$$d[o] = this[o], delete this[o]);
      this.$$c = new this.$$ctor({
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$scope: {
            ctx: []
          }
        }
      });
      const l = () => {
        this.$$r = !0;
        for (const o in this.$$p_d)
          if (this.$$d[o] = this.$$c.$$.ctx[this.$$c.$$.props[o]], this.$$p_d[o].reflect) {
            const s = oe(
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
          const f = this.$$c.$on(o, s);
          this.$$l_u.set(s, f);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(e, t, i) {
    var l;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = oe(e, i, this.$$p_d, "toProp"), (l = this.$$c) == null || l.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      this.$$cn || (this.$$c.$destroy(), this.$$c = void 0);
    });
  }
  $$g_p(e) {
    return Object.keys(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function oe(r, e, t, i) {
  var o;
  const l = (o = t[r]) == null ? void 0 : o.type;
  if (e = l === "Boolean" && typeof e != "boolean" ? e != null : e, !i || !t[r])
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
function Ct(r, e, t, i, l, o) {
  let s = class extends Oe {
    constructor() {
      super(r, t, l), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Object.keys(e).map(
        (f) => (e[f].attribute || f).toLowerCase()
      );
    }
  };
  return Object.keys(e).forEach((f) => {
    Object.defineProperty(s.prototype, f, {
      get() {
        return this.$$c && f in this.$$c ? this.$$c[f] : this.$$d[f];
      },
      set(a) {
        var h;
        a = oe(f, a, e), this.$$d[f] = a, (h = this.$$c) == null || h.$set({ [f]: a });
      }
    });
  }), i.forEach((f) => {
    Object.defineProperty(s.prototype, f, {
      get() {
        var a;
        return (a = this.$$c) == null ? void 0 : a[f];
      }
    });
  }), o && (s = o(s)), r.element = /** @type {any} */
  s, s;
}
class Lt {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    M(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    M(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    xt(this, 1), this.$destroy = Q;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!Ue(t))
      return Q;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return i.push(t), () => {
      const l = i.indexOf(t);
      l !== -1 && i.splice(l, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !ot(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Rt = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Rt);
const Fe = "KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2NvbnN0IGY9bmV3IFRleHRFbmNvZGVyO2Z1bmN0aW9uIGQoZSl7cmV0dXJuWy4uLm5ldyBVaW50OEFycmF5KGUpXS5tYXAodD0+dC50b1N0cmluZygxNikucGFkU3RhcnQoMiwiMCIpKS5qb2luKCIiKX1hc3luYyBmdW5jdGlvbiBwKGUsdCxvKXtyZXR1cm4gZChhd2FpdCBjcnlwdG8uc3VidGxlLmRpZ2VzdChvLnRvVXBwZXJDYXNlKCksZi5lbmNvZGUoZSt0KSkpfWZ1bmN0aW9uIGcoZSx0LG89IlNIQS0yNTYiLGw9MWU2LGM9MCl7Y29uc3QgYT1uZXcgQWJvcnRDb250cm9sbGVyLGk9RGF0ZS5ub3coKTtyZXR1cm57cHJvbWlzZTooYXN5bmMoKT0+e2ZvcihsZXQgbj1jO248PWw7bis9MSl7aWYoYS5zaWduYWwuYWJvcnRlZClyZXR1cm4gbnVsbDtpZihhd2FpdCBwKHQsbixvKT09PWUpcmV0dXJue251bWJlcjpuLHRvb2s6RGF0ZS5ub3coKS1pfX1yZXR1cm4gbnVsbH0pKCksY29udHJvbGxlcjphfX1sZXQgcjtvbm1lc3NhZ2U9YXN5bmMgZT0+e2NvbnN0e3R5cGU6dCxwYXlsb2FkOm99PWUuZGF0YTtpZih0PT09ImFib3J0IilyPT1udWxsfHxyLmFib3J0KCkscj12b2lkIDA7ZWxzZSBpZih0PT09IndvcmsiKXtjb25zdHthbGc6bCxjaGFsbGVuZ2U6YyxtYXg6YSxzYWx0Omksc3RhcnQ6dX09b3x8e30sbj1nKGMsaSxsLGEsdSk7cj1uLmNvbnRyb2xsZXIsbi5wcm9taXNlLnRoZW4ocz0+e3NlbGYucG9zdE1lc3NhZ2UocyYmey4uLnMsd29ya2VyOiEwfSl9KX19fSkoKTsK", It = (r) => Uint8Array.from(atob(r), (e) => e.charCodeAt(0)), je = typeof window < "u" && window.Blob && new Blob([It(Fe)], { type: "text/javascript;charset=utf-8" });
function Nt(r) {
  let e;
  try {
    if (e = je && (window.URL || window.webkitURL).createObjectURL(je), !e)
      throw "";
    const t = new Worker(e, {
      name: r == null ? void 0 : r.name
    });
    return t.addEventListener("error", () => {
      (window.URL || window.webkitURL).revokeObjectURL(e);
    }), t;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + Fe,
      {
        name: r == null ? void 0 : r.name
      }
    );
  } finally {
    e && (window.URL || window.webkitURL).revokeObjectURL(e);
  }
}
const St = new TextEncoder();
function jt(r) {
  return [...new Uint8Array(r)].map((e) => e.toString(16).padStart(2, "0")).join("");
}
async function Zt(r, e = "SHA-256", t = 1e5) {
  const i = Date.now().toString(16);
  r || (r = Math.round(Math.random() * t));
  const l = await He(i, r, e);
  return {
    algorithm: e,
    challenge: l,
    salt: i,
    signature: ""
  };
}
async function He(r, e, t) {
  return jt(
    await crypto.subtle.digest(
      t.toUpperCase(),
      St.encode(r + e)
    )
  );
}
function At(r, e, t = "SHA-256", i = 1e6, l = 0) {
  const o = new AbortController(), s = Date.now();
  return {
    promise: (async () => {
      for (let a = l; a <= i; a += 1) {
        if (o.signal.aborted)
          return null;
        if (await He(e, a, t) === r)
          return {
            number: a,
            took: Date.now() - s
          };
      }
      return null;
    })(),
    controller: o
  };
}
var p = /* @__PURE__ */ ((r) => (r.ERROR = "error", r.VERIFIED = "verified", r.VERIFYING = "verifying", r.UNVERIFIED = "unverified", r.EXPIRED = "expired", r))(p || {});
function Tt(r) {
  st(r, "svelte-14ngypa", `.altcha.svelte-14ngypa.svelte-14ngypa{background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid
      var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);overflow:hidden;position:relative;text-align:left}.altcha.svelte-14ngypa.svelte-14ngypa:focus-within{border-color:var(--altcha-color-border-focus, currentColor)}.altcha-main.svelte-14ngypa.svelte-14ngypa{align-items:center;display:flex;gap:0.4rem;padding:0.7rem}.altcha-label.svelte-14ngypa.svelte-14ngypa{flex-grow:1}.altcha-label.svelte-14ngypa label.svelte-14ngypa{cursor:pointer}.altcha-logo.svelte-14ngypa.svelte-14ngypa{color:currentColor;opacity:0.3}.altcha-logo.svelte-14ngypa.svelte-14ngypa:hover{opacity:1}.altcha-error.svelte-14ngypa.svelte-14ngypa{color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem}.altcha-footer.svelte-14ngypa.svelte-14ngypa{align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.4;padding:0.2rem 0.7rem;text-align:right}.altcha-footer.svelte-14ngypa.svelte-14ngypa:hover{opacity:1}.altcha-footer.svelte-14ngypa>.svelte-14ngypa:first-child{flex-grow:1}.altcha-footer.svelte-14ngypa a{color:currentColor}.altcha-checkbox.svelte-14ngypa.svelte-14ngypa{display:flex;align-items:center;height:24px;width:24px}.altcha-checkbox.svelte-14ngypa input.svelte-14ngypa{width:18px;height:18px;margin:0}.altcha-hidden.svelte-14ngypa.svelte-14ngypa{display:none}.altcha-spinner.svelte-14ngypa.svelte-14ngypa{animation:svelte-14ngypa-altcha-spinner 0.75s infinite linear;transform-origin:center}@keyframes svelte-14ngypa-altcha-spinner{100%{transform:rotate(360deg)}}`);
}
function Ze(r) {
  let e, t, i;
  return {
    c() {
      e = O("svg"), t = O("path"), i = O("path"), c(t, "d", "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"), c(t, "fill", "currentColor"), c(t, "opacity", ".25"), c(i, "d", "M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"), c(i, "fill", "currentColor"), c(i, "class", "altcha-spinner svelte-14ngypa"), c(e, "width", "24"), c(e, "height", "24"), c(e, "viewBox", "0 0 24 24"), c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(l, o) {
      Z(l, e, o), y(e, t), y(e, i);
    },
    d(l) {
      l && S(e);
    }
  };
}
function Mt(r) {
  let e, t = (
    /*_strings*/
    r[9].label + ""
  ), i;
  return {
    c() {
      e = R("label"), c(e, "for", i = /*name*/
      r[3] + "_checkbox"), c(e, "class", "svelte-14ngypa");
    },
    m(l, o) {
      Z(l, e, o), e.innerHTML = t;
    },
    p(l, o) {
      o[0] & /*_strings*/
      512 && t !== (t = /*_strings*/
      l[9].label + "") && (e.innerHTML = t), o[0] & /*name*/
      8 && i !== (i = /*name*/
      l[3] + "_checkbox") && c(e, "for", i);
    },
    d(l) {
      l && S(e);
    }
  };
}
function Vt(r) {
  let e, t = (
    /*_strings*/
    r[9].verifying + ""
  );
  return {
    c() {
      e = R("span");
    },
    m(i, l) {
      Z(i, e, l), e.innerHTML = t;
    },
    p(i, l) {
      l[0] & /*_strings*/
      512 && t !== (t = /*_strings*/
      i[9].verifying + "") && (e.innerHTML = t);
    },
    d(i) {
      i && S(e);
    }
  };
}
function Gt(r) {
  let e, t = (
    /*_strings*/
    r[9].verified + ""
  ), i, l;
  return {
    c() {
      e = R("span"), i = B(), l = R("input"), c(l, "type", "hidden"), c(
        l,
        "name",
        /*name*/
        r[3]
      ), l.value = /*payload*/
      r[4];
    },
    m(o, s) {
      Z(o, e, s), e.innerHTML = t, Z(o, i, s), Z(o, l, s);
    },
    p(o, s) {
      s[0] & /*_strings*/
      512 && t !== (t = /*_strings*/
      o[9].verified + "") && (e.innerHTML = t), s[0] & /*name*/
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
      o && (S(e), S(i), S(l));
    }
  };
}
function Ae(r) {
  let e, t, i, l, o, s;
  return {
    c() {
      e = R("div"), t = R("a"), i = O("svg"), l = O("path"), o = O("path"), s = O("path"), c(l, "d", "M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z"), c(l, "fill", "currentColor"), c(o, "d", "M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z"), c(o, "fill", "currentColor"), c(s, "d", "M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z"), c(s, "fill", "currentColor"), c(i, "width", "22"), c(i, "height", "22"), c(i, "viewBox", "0 0 20 20"), c(i, "fill", "none"), c(i, "xmlns", "http://www.w3.org/2000/svg"), c(t, "href", Ye), c(t, "target", "_blank"), c(t, "class", "altcha-logo svelte-14ngypa");
    },
    m(f, a) {
      Z(f, e, a), y(e, t), y(t, i), y(i, l), y(i, o), y(i, s);
    },
    p: Q,
    d(f) {
      f && S(e);
    }
  };
}
function Te(r) {
  let e, t, i, l;
  function o(a, h) {
    return (
      /*state*/
      a[5] === p.EXPIRED ? Xt : Ut
    );
  }
  let s = o(r), f = s(r);
  return {
    c() {
      e = R("div"), t = O("svg"), i = O("path"), l = B(), f.c(), c(i, "stroke-linecap", "round"), c(i, "stroke-linejoin", "round"), c(i, "d", "M6 18L18 6M6 6l12 12"), c(t, "width", "14"), c(t, "height", "14"), c(t, "xmlns", "http://www.w3.org/2000/svg"), c(t, "fill", "none"), c(t, "viewBox", "0 0 24 24"), c(t, "stroke-width", "1.5"), c(t, "stroke", "currentColor"), c(e, "class", "altcha-error svelte-14ngypa");
    },
    m(a, h) {
      Z(a, e, h), y(e, t), y(t, i), y(e, l), f.m(e, null);
    },
    p(a, h) {
      s === (s = o(a)) && f ? f.p(a, h) : (f.d(1), f = s(a), f && (f.c(), f.m(e, null)));
    },
    d(a) {
      a && S(e), f.d();
    }
  };
}
function Ut(r) {
  let e, t = (
    /*_strings*/
    r[9].error + ""
  );
  return {
    c() {
      e = R("div"), c(
        e,
        "title",
        /*error*/
        r[8]
      );
    },
    m(i, l) {
      Z(i, e, l), e.innerHTML = t;
    },
    p(i, l) {
      l[0] & /*_strings*/
      512 && t !== (t = /*_strings*/
      i[9].error + "") && (e.innerHTML = t), l[0] & /*error*/
      256 && c(
        e,
        "title",
        /*error*/
        i[8]
      );
    },
    d(i) {
      i && S(e);
    }
  };
}
function Xt(r) {
  let e, t = (
    /*_strings*/
    r[9].expired + ""
  );
  return {
    c() {
      e = R("div"), c(
        e,
        "title",
        /*error*/
        r[8]
      );
    },
    m(i, l) {
      Z(i, e, l), e.innerHTML = t;
    },
    p(i, l) {
      l[0] & /*_strings*/
      512 && t !== (t = /*_strings*/
      i[9].expired + "") && (e.innerHTML = t), l[0] & /*error*/
      256 && c(
        e,
        "title",
        /*error*/
        i[8]
      );
    },
    d(i) {
      i && S(e);
    }
  };
}
function Me(r) {
  let e, t, i = (
    /*_strings*/
    r[9].footer + ""
  );
  return {
    c() {
      e = R("div"), t = R("div"), c(t, "class", "svelte-14ngypa"), c(e, "class", "altcha-footer svelte-14ngypa");
    },
    m(l, o) {
      Z(l, e, o), y(e, t), t.innerHTML = i;
    },
    p(l, o) {
      o[0] & /*_strings*/
      512 && i !== (i = /*_strings*/
      l[9].footer + "") && (t.innerHTML = i);
    },
    d(l) {
      l && S(e);
    }
  };
}
function Dt(r) {
  let e, t, i, l, o, s, f, a, h, A, C, V, G, U, w = (
    /*state*/
    r[5] === p.VERIFYING && Ze()
  );
  function H(d, I) {
    return (
      /*state*/
      d[5] === p.VERIFIED ? Gt : (
        /*state*/
        d[5] === p.VERIFYING ? Vt : Mt
      )
    );
  }
  let X = H(r), _ = X(r), k = (
    /*hidelogo*/
    r[2] !== !0 && Ae()
  ), g = (
    /*error*/
    (r[8] || /*state*/
    r[5] === p.EXPIRED) && Te(r)
  ), b = (
    /*_strings*/
    r[9].footer && /*hidefooter*/
    r[1] !== !0 && Me(r)
  );
  return {
    c() {
      e = R("div"), t = R("div"), w && w.c(), i = B(), l = R("div"), o = R("input"), a = B(), h = R("div"), _.c(), A = B(), k && k.c(), C = B(), g && g.c(), V = B(), b && b.c(), c(o, "type", "checkbox"), c(o, "id", s = /*name*/
      r[3] + "_checkbox"), o.required = f = /*auto*/
      r[0] !== "onsubmit", c(o, "class", "svelte-14ngypa"), c(l, "class", "altcha-checkbox svelte-14ngypa"), Ne(
        l,
        "altcha-hidden",
        /*state*/
        r[5] === p.VERIFYING
      ), c(h, "class", "altcha-label svelte-14ngypa"), c(t, "class", "altcha-main svelte-14ngypa"), c(e, "class", "altcha svelte-14ngypa"), c(
        e,
        "data-state",
        /*state*/
        r[5]
      );
    },
    m(d, I) {
      Z(d, e, I), y(e, t), w && w.m(t, null), y(t, i), y(t, l), y(l, o), o.checked = /*checked*/
      r[6], y(t, a), y(t, h), _.m(h, null), y(t, A), k && k.m(t, null), y(e, C), g && g.m(e, null), y(e, V), b && b.m(e, null), r[30](e), G || (U = [
        ae(
          o,
          "change",
          /*input_change_handler*/
          r[29]
        ),
        ae(
          o,
          "change",
          /*onCheckedChange*/
          r[10]
        ),
        ae(
          o,
          "invalid",
          /*onInvalid*/
          r[11]
        )
      ], G = !0);
    },
    p(d, I) {
      /*state*/
      d[5] === p.VERIFYING ? w || (w = Ze(), w.c(), w.m(t, i)) : w && (w.d(1), w = null), I[0] & /*name*/
      8 && s !== (s = /*name*/
      d[3] + "_checkbox") && c(o, "id", s), I[0] & /*auto*/
      1 && f !== (f = /*auto*/
      d[0] !== "onsubmit") && (o.required = f), I[0] & /*checked*/
      64 && (o.checked = /*checked*/
      d[6]), I[0] & /*state*/
      32 && Ne(
        l,
        "altcha-hidden",
        /*state*/
        d[5] === p.VERIFYING
      ), X === (X = H(d)) && _ ? _.p(d, I) : (_.d(1), _ = X(d), _ && (_.c(), _.m(h, null))), /*hidelogo*/
      d[2] !== !0 ? k ? k.p(d, I) : (k = Ae(), k.c(), k.m(t, null)) : k && (k.d(1), k = null), /*error*/
      d[8] || /*state*/
      d[5] === p.EXPIRED ? g ? g.p(d, I) : (g = Te(d), g.c(), g.m(e, V)) : g && (g.d(1), g = null), /*_strings*/
      d[9].footer && /*hidefooter*/
      d[1] !== !0 ? b ? b.p(d, I) : (b = Me(d), b.c(), b.m(e, null)) : b && (b.d(1), b = null), I[0] & /*state*/
      32 && c(
        e,
        "data-state",
        /*state*/
        d[5]
      );
    },
    i: Q,
    o: Q,
    d(d) {
      d && S(e), w && w.d(), _.d(), k && k.d(), g && g.d(), b && b.d(), r[30](null), G = !1, te(U);
    }
  };
}
const Ye = "https://altcha.org/";
function Ve(r) {
  return JSON.parse(r);
}
function Ot() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function Ft(r, e, t) {
  var Ee, $e;
  let i, l, o, { auto: s = void 0 } = e, { blockspam: f = void 0 } = e, { challengeurl: a = void 0 } = e, { challengejson: h = void 0 } = e, { debug: A = !1 } = e, { expire: C = void 0 } = e, { hidefooter: V = !1 } = e, { hidelogo: G = !1 } = e, { name: U = "altcha" } = e, { maxnumber: w = 1e6 } = e, { mockerror: H = !1 } = e, { refetchonexpire: X = !0 } = e, { spamfilter: _ = !1 } = e, { strings: k = void 0 } = e, { test: g = !1 } = e, { verifyurl: b = void 0 } = e, { workers: d = navigator.hardwareConcurrency || 8 } = e;
  const I = bt(), me = ["SHA-256", "SHA-384", "SHA-512"], be = ($e = (Ee = document.documentElement.lang) == null ? void 0 : Ee.split("-")) == null ? void 0 : $e[0];
  let F = !1, re, m = null, se = null, Y = null, D = p.UNVERIFIED, ce;
  mt(() => {
    m && (m.removeEventListener("submit", ye), m.removeEventListener("reset", ve), m.removeEventListener("focusin", pe), m = null);
  }), gt(() => {
    L("mounted", "0.4.0"), L("workers", d), g && L("using test mode"), C && ne(C), s !== void 0 && L("auto", s), m = re.closest("form"), m && (m.addEventListener("submit", ye), m.addEventListener("reset", ve), s === "onfocus" && m.addEventListener("focusin", pe)), s === "onload" && P();
  });
  function L(...n) {
    (A || n.some((u) => u instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", ...n);
  }
  function pe(n) {
    P();
  }
  function ye(n) {
    m && s === "onsubmit" && D === p.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), P().then(() => {
      m == null || m.requestSubmit();
    }));
  }
  function ve() {
    ie();
  }
  function we(n, u) {
    return btoa(JSON.stringify({
      algorithm: n.algorithm,
      challenge: n.challenge,
      number: u.number,
      salt: n.salt,
      signature: n.signature,
      test: g ? !0 : void 0,
      took: u.took
    }));
  }
  function _e(n) {
    if (!n.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (n.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!me.includes(n.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${me.join(", ")}`);
    if (!n.challenge || n.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!n.salt || n.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function Pe() {
    var n;
    if (H)
      throw L("mocking error"), new Error("Mocked error.");
    if (i)
      return L("using provided json data"), i;
    if (g)
      return L("generating test challenge", { test: g }), Zt(typeof g != "boolean" ? +g : void 0);
    {
      if (!a)
        throw new Error("Attribute challengeurl not set.");
      L("fetching challenge from", a);
      const u = await fetch(a, {
        headers: {
          "x-altcha-spam-filter": _ ? "1" : "0"
        }
      });
      if (u.status !== 200)
        throw new Error(`Server responded with ${u.status}.`);
      const v = u.headers.get("Expires"), N = u.headers.get("X-Altcha-Config"), j = await u.json(), T = new URLSearchParams((n = j.salt.split("?")) == null ? void 0 : n[1]), W = T.get("expires") || T.get("expire");
      if (W) {
        const x = new Date(+W * 1e3), E = isNaN(x.getTime()) ? 0 : x.getTime() - Date.now();
        E > 0 && ne(E);
      }
      if (N)
        try {
          const x = JSON.parse(N);
          x && typeof x == "object" && (x.verifyurl && (x.verifyurl = new URL(x.verifyurl, new URL(a)).toString()), xe(x));
        } catch (x) {
          L("unable to configure from X-Altcha-Config", x);
        }
      if (!C && (v != null && v.length)) {
        const x = Date.parse(v);
        if (x) {
          const E = x - Date.now();
          E > 0 && ne(E);
        }
      }
      return j;
    }
  }
  function ke() {
    a && X && D === p.VERIFIED ? P() : ie(p.EXPIRED, o.expired);
  }
  async function We(n) {
    let u = null;
    if ("Worker" in window) {
      try {
        u = await Be(n.challenge, n.salt, n.algorithm, n.maxnumber);
      } catch (v) {
        L(v);
      }
      if ((u == null ? void 0 : u.number) !== void 0)
        return { data: n, solution: u };
    }
    return {
      data: n,
      solution: await At(n.challenge, n.salt, n.algorithm, n.maxnumber || w).promise
    };
  }
  async function Be(n, u, v, N = typeof g == "number" ? g : w, j = Math.ceil(d)) {
    const T = [];
    if (j < 1)
      throw new Error("Wrong number of workers configured.");
    if (j > 16)
      throw new Error("Too many workers. Max. 16 allowed workers.");
    for (let E = 0; E < j; E++)
      T.push(new Nt());
    const W = Math.ceil(N / j), x = await Promise.all(T.map((E, le) => {
      const Ce = le * W;
      return new Promise((rt) => {
        E.addEventListener("message", (Le) => {
          if (Le.data)
            for (const Re of T)
              Re !== E && Re.postMessage({ type: "abort" });
          rt(Le.data);
        }), E.postMessage({
          payload: {
            alg: v,
            challenge: n,
            max: Ce + W,
            salt: u,
            start: Ce
          },
          type: "work"
        });
      });
    }));
    for (const E of T)
      E.terminate();
    return x.find((E) => !!E) || null;
  }
  function Ke() {
    [p.UNVERIFIED, p.ERROR, p.EXPIRED].includes(D) ? _ && (m == null ? void 0 : m.reportValidity()) === !1 ? t(6, F = !1) : P() : t(6, F = !0);
  }
  function Je() {
    D === p.VERIFYING && alert(o.waitAlert);
  }
  function ne(n) {
    L("expire", n), clearTimeout(ce), n < 1 ? ke() : ce = setTimeout(ke, n);
  }
  function ze(n) {
    var v;
    const u = m == null ? void 0 : m.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((v = u == null ? void 0 : u.value) == null ? void 0 : v.slice(u.value.indexOf("@"))) || void 0;
  }
  function Qe(n) {
    return [
      ...(m == null ? void 0 : m.querySelectorAll(n != null && n.length ? n.map((v) => `input[name="${v}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (v, N) => {
        const j = N.name, T = N.value.trim();
        return j && T && (v[j] = T), v;
      },
      {}
    );
  }
  async function qe(n) {
    if (!b)
      throw new Error("Attribute verifyurl not set.");
    L("requesting server verification from", b);
    const u = { payload: n };
    if (_) {
      const { email: j, expectedLanguages: T, expectedCountries: W, fields: x, ipAddress: E, timeZone: le } = typeof _ == "object" ? _ : {
        email: void 0,
        expectedCountries: void 0,
        expectedLanguages: void 0,
        fields: void 0,
        ipAddress: void 0,
        timeZone: void 0
      };
      u.ipAddress = E === !1 ? void 0 : E || "auto", u.email = j === !1 ? void 0 : ze(j), u.fields = x === !1 ? void 0 : Qe(x), u.timeZone = le === !1 ? void 0 : le || Ot(), u.expectedCountries = W, u.expectedLanguages = T || (be ? [be] : void 0);
    }
    const v = await fetch(b, {
      body: JSON.stringify(u),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (v.status !== 200)
      throw new Error(`Server responded with ${v.status}.`);
    const N = await v.json();
    if (N != null && N.payload && t(4, Y = N.payload), I("serververification", N), f && N.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  function xe(n) {
    n.auto !== void 0 && (t(0, s = n.auto), s === "onload" && P()), n.expire !== void 0 && (ne(n.expire), t(14, C = n.expire)), n.challenge && (_e(n.challenge), i = n.challenge), n.challengeurl !== void 0 && t(12, a = n.challengeurl), n.debug !== void 0 && t(13, A = !!n.debug), n.hidefooter !== void 0 && t(1, V = !!n.hidefooter), n.hidelogo !== void 0 && t(2, G = !!n.hidelogo), n.maxnumber !== void 0 && t(15, w = +n.maxnumber), n.mockerror !== void 0 && t(16, H = !!n.mockerror), n.name !== void 0 && t(3, U = n.name), n.refetchonexpire !== void 0 && t(17, X = !!n.refetchonexpire), n.spamfilter !== void 0 && t(18, _ = typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && t(28, l = n.strings), n.test !== void 0 && t(19, g = typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && t(20, b = n.verifyurl), n.workers !== void 0 && t(21, d = +n.workers);
  }
  function ie(n = p.UNVERIFIED, u = null) {
    clearTimeout(ce), t(6, F = !1), t(8, se = u), t(4, Y = null), t(5, D = n);
  }
  async function P() {
    return ie(p.VERIFYING), Pe().then((n) => (_e(n), L("challenge", n), We(n))).then(({ data: n, solution: u }) => {
      if (L("solution", u), (u == null ? void 0 : u.number) !== void 0) {
        if (b)
          return qe(we(n, u));
        t(4, Y = we(n, u)), L("payload", Y);
      } else
        throw L("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      pt().then(() => {
        t(5, D = p.VERIFIED), t(6, F = !0), L("verified"), I("verified", { payload: Y });
      });
    }).catch((n) => {
      L(n), t(5, D = p.ERROR), t(6, F = !1), t(8, se = n.message);
    });
  }
  function et() {
    F = this.checked, t(6, F);
  }
  function tt(n) {
    ue[n ? "unshift" : "push"](() => {
      re = n, t(7, re);
    });
  }
  return r.$$set = (n) => {
    "auto" in n && t(0, s = n.auto), "blockspam" in n && t(22, f = n.blockspam), "challengeurl" in n && t(12, a = n.challengeurl), "challengejson" in n && t(23, h = n.challengejson), "debug" in n && t(13, A = n.debug), "expire" in n && t(14, C = n.expire), "hidefooter" in n && t(1, V = n.hidefooter), "hidelogo" in n && t(2, G = n.hidelogo), "name" in n && t(3, U = n.name), "maxnumber" in n && t(15, w = n.maxnumber), "mockerror" in n && t(16, H = n.mockerror), "refetchonexpire" in n && t(17, X = n.refetchonexpire), "spamfilter" in n && t(18, _ = n.spamfilter), "strings" in n && t(24, k = n.strings), "test" in n && t(19, g = n.test), "verifyurl" in n && t(20, b = n.verifyurl), "workers" in n && t(21, d = n.workers);
  }, r.$$.update = () => {
    r.$$.dirty[0] & /*challengejson*/
    8388608 && (i = h ? Ve(h) : void 0), r.$$.dirty[0] & /*strings*/
    16777216 && t(28, l = k ? Ve(k) : {}), r.$$.dirty[0] & /*parsedStrings*/
    268435456 && t(9, o = {
      error: "Verification failed. Try again later.",
      expired: "Verification expired. Try again.",
      footer: `Protected by <a href="${Ye}" target="_blank">ALTCHA</a>`,
      label: "I'm not a robot",
      verified: "Verified",
      verifying: "Verifying...",
      waitAlert: "Verifying... please wait.",
      ...l
    }), r.$$.dirty[0] & /*payload, state*/
    48 && I("statechange", { payload: Y, state: D });
  }, [
    s,
    V,
    G,
    U,
    Y,
    D,
    F,
    re,
    se,
    o,
    Ke,
    Je,
    a,
    A,
    C,
    w,
    H,
    X,
    _,
    g,
    b,
    d,
    f,
    h,
    k,
    xe,
    ie,
    P,
    l,
    et,
    tt
  ];
}
class Ht extends Lt {
  constructor(e) {
    super(), $t(
      this,
      e,
      Ft,
      Dt,
      lt,
      {
        auto: 0,
        blockspam: 22,
        challengeurl: 12,
        challengejson: 23,
        debug: 13,
        expire: 14,
        hidefooter: 1,
        hidelogo: 2,
        name: 3,
        maxnumber: 15,
        mockerror: 16,
        refetchonexpire: 17,
        spamfilter: 18,
        strings: 24,
        test: 19,
        verifyurl: 20,
        workers: 21,
        configure: 25,
        reset: 26,
        verify: 27
      },
      Tt,
      [-1, -1]
    );
  }
  get auto() {
    return this.$$.ctx[0];
  }
  set auto(e) {
    this.$$set({ auto: e }), $();
  }
  get blockspam() {
    return this.$$.ctx[22];
  }
  set blockspam(e) {
    this.$$set({ blockspam: e }), $();
  }
  get challengeurl() {
    return this.$$.ctx[12];
  }
  set challengeurl(e) {
    this.$$set({ challengeurl: e }), $();
  }
  get challengejson() {
    return this.$$.ctx[23];
  }
  set challengejson(e) {
    this.$$set({ challengejson: e }), $();
  }
  get debug() {
    return this.$$.ctx[13];
  }
  set debug(e) {
    this.$$set({ debug: e }), $();
  }
  get expire() {
    return this.$$.ctx[14];
  }
  set expire(e) {
    this.$$set({ expire: e }), $();
  }
  get hidefooter() {
    return this.$$.ctx[1];
  }
  set hidefooter(e) {
    this.$$set({ hidefooter: e }), $();
  }
  get hidelogo() {
    return this.$$.ctx[2];
  }
  set hidelogo(e) {
    this.$$set({ hidelogo: e }), $();
  }
  get name() {
    return this.$$.ctx[3];
  }
  set name(e) {
    this.$$set({ name: e }), $();
  }
  get maxnumber() {
    return this.$$.ctx[15];
  }
  set maxnumber(e) {
    this.$$set({ maxnumber: e }), $();
  }
  get mockerror() {
    return this.$$.ctx[16];
  }
  set mockerror(e) {
    this.$$set({ mockerror: e }), $();
  }
  get refetchonexpire() {
    return this.$$.ctx[17];
  }
  set refetchonexpire(e) {
    this.$$set({ refetchonexpire: e }), $();
  }
  get spamfilter() {
    return this.$$.ctx[18];
  }
  set spamfilter(e) {
    this.$$set({ spamfilter: e }), $();
  }
  get strings() {
    return this.$$.ctx[24];
  }
  set strings(e) {
    this.$$set({ strings: e }), $();
  }
  get test() {
    return this.$$.ctx[19];
  }
  set test(e) {
    this.$$set({ test: e }), $();
  }
  get verifyurl() {
    return this.$$.ctx[20];
  }
  set verifyurl(e) {
    this.$$set({ verifyurl: e }), $();
  }
  get workers() {
    return this.$$.ctx[21];
  }
  set workers(e) {
    this.$$set({ workers: e }), $();
  }
  get configure() {
    return this.$$.ctx[25];
  }
  get reset() {
    return this.$$.ctx[26];
  }
  get verify() {
    return this.$$.ctx[27];
  }
}
customElements.define("altcha-widget", Ct(Ht, { auto: {}, blockspam: {}, challengeurl: {}, challengejson: {}, debug: { type: "Boolean" }, expire: {}, hidefooter: { type: "Boolean" }, hidelogo: { type: "Boolean" }, name: {}, maxnumber: {}, mockerror: { type: "Boolean" }, refetchonexpire: { type: "Boolean" }, spamfilter: { type: "Boolean" }, strings: {}, test: { type: "Boolean" }, verifyurl: {}, workers: {} }, [], ["configure", "reset", "verify"], !1));
export {
  Ht as Altcha
};
