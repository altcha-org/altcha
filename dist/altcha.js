var rt = Object.defineProperty;
var it = (n, e, t) => e in n ? rt(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var M = (n, e, t) => (it(n, typeof e != "symbol" ? e + "" : e, t), t);
function J() {
}
function Ve(n) {
  return n();
}
function Re() {
  return /* @__PURE__ */ Object.create(null);
}
function q(n) {
  n.forEach(Ve);
}
function Oe(n) {
  return typeof n == "function";
}
function lt(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function ot(n) {
  return Object.keys(n).length === 0;
}
function w(n, e) {
  n.appendChild(e);
}
function st(n, e, t) {
  const i = ct(n);
  if (!i.getElementById(e)) {
    const l = L("style");
    l.id = e, l.textContent = t, at(i, l);
  }
}
function ct(n) {
  if (!n)
    return document;
  const e = n.getRootNode ? n.getRootNode() : n.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : n.ownerDocument;
}
function at(n, e) {
  return w(
    /** @type {Document} */
    n.head || n,
    e
  ), e.sheet;
}
function A(n, e, t) {
  n.insertBefore(e, t || null);
}
function N(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function L(n) {
  return document.createElement(n);
}
function P(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function ft(n) {
  return document.createTextNode(n);
}
function U() {
  return ft(" ");
}
function ae(n, e, t, i) {
  return n.addEventListener(e, t, i), () => n.removeEventListener(e, t, i);
}
function c(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
function ut(n) {
  return Array.from(n.childNodes);
}
function Ne(n, e, t) {
  n.classList.toggle(e, !!t);
}
function ht(n, e, { bubbles: t = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(n, { detail: e, bubbles: t, cancelable: i });
}
function dt(n) {
  const e = {};
  return n.childNodes.forEach(
    /** @param {Element} node */
    (t) => {
      e[t.slot || "default"] = !0;
    }
  ), e;
}
let Q;
function z(n) {
  Q = n;
}
function ge() {
  if (!Q)
    throw new Error("Function called outside component initialization");
  return Q;
}
function gt(n) {
  ge().$$.on_mount.push(n);
}
function mt(n) {
  ge().$$.on_destroy.push(n);
}
function bt() {
  const n = ge();
  return (e, t, { cancelable: i = !1 } = {}) => {
    const l = n.$$.callbacks[e];
    if (l) {
      const o = ht(
        /** @type {string} */
        e,
        t,
        { cancelable: i }
      );
      return l.slice().forEach((s) => {
        s.call(n, o);
      }), !o.defaultPrevented;
    }
    return !0;
  };
}
const X = [], ue = [];
let K = [];
const Se = [], He = /* @__PURE__ */ Promise.resolve();
let he = !1;
function Pe() {
  he || (he = !0, He.then(E));
}
function pt() {
  return Pe(), He;
}
function de(n) {
  K.push(n);
}
const fe = /* @__PURE__ */ new Set();
let Y = 0;
function E() {
  if (Y !== 0)
    return;
  const n = Q;
  do {
    try {
      for (; Y < X.length; ) {
        const e = X[Y];
        Y++, z(e), yt(e.$$);
      }
    } catch (e) {
      throw X.length = 0, Y = 0, e;
    }
    for (z(null), X.length = 0, Y = 0; ue.length; )
      ue.pop()();
    for (let e = 0; e < K.length; e += 1) {
      const t = K[e];
      fe.has(t) || (fe.add(t), t());
    }
    K.length = 0;
  } while (X.length);
  for (; Se.length; )
    Se.pop()();
  he = !1, fe.clear(), z(n);
}
function yt(n) {
  if (n.fragment !== null) {
    n.update(), q(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(de);
  }
}
function vt(n) {
  const e = [], t = [];
  K.forEach((i) => n.indexOf(i) === -1 ? e.push(i) : t.push(i)), t.forEach((i) => i()), K = e;
}
const wt = /* @__PURE__ */ new Set();
function _t(n, e) {
  n && n.i && (wt.delete(n), n.i(e));
}
function kt(n, e, t) {
  const { fragment: i, after_update: l } = n.$$;
  i && i.m(e, t), de(() => {
    const o = n.$$.on_mount.map(Ve).filter(Oe);
    n.$$.on_destroy ? n.$$.on_destroy.push(...o) : q(o), n.$$.on_mount = [];
  }), l.forEach(de);
}
function xt(n, e) {
  const t = n.$$;
  t.fragment !== null && (vt(t.after_update), q(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Et(n, e) {
  n.$$.dirty[0] === -1 && (X.push(n), Pe(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function $t(n, e, t, i, l, o, s = null, a = [-1]) {
  const u = Q;
  z(n);
  const f = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: J,
    not_equal: l,
    bound: Re(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: Re(),
    dirty: a,
    skip_bound: !1,
    root: e.target || u.$$.root
  };
  s && s(f.root);
  let R = !1;
  if (f.ctx = t ? t(n, e.props || {}, (g, j, ...Z) => {
    const G = Z.length ? Z[0] : j;
    return f.ctx && l(f.ctx[g], f.ctx[g] = G) && (!f.skip_bound && f.bound[g] && f.bound[g](G), R && Et(n, g)), j;
  }) : [], f.update(), R = !0, q(f.before_update), f.fragment = i ? i(f.ctx) : !1, e.target) {
    if (e.hydrate) {
      const g = ut(e.target);
      f.fragment && f.fragment.l(g), g.forEach(N);
    } else
      f.fragment && f.fragment.c();
    e.intro && _t(n.$$.fragment), kt(n, e.target, e.anchor), E();
  }
  z(u);
}
let De;
typeof HTMLElement == "function" && (De = class extends HTMLElement {
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
              s = L("slot"), o !== "default" && c(s, "name", o);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(f, R) {
              A(f, s, R);
            },
            d: function(f) {
              f && N(s);
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
        s in this.$$d || (this.$$d[s] = le(s, o.value, this.$$p_d, "toProp"));
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
            const s = le(
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
          const a = this.$$c.$on(o, s);
          this.$$l_u.set(s, a);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(e, t, i) {
    var l;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = le(e, i, this.$$p_d, "toProp"), (l = this.$$c) == null || l.$set({ [e]: this.$$d[e] }));
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
function le(n, e, t, i) {
  var o;
  const l = (o = t[n]) == null ? void 0 : o.type;
  if (e = l === "Boolean" && typeof e != "boolean" ? e != null : e, !i || !t[n])
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
function Ct(n, e, t, i, l, o) {
  let s = class extends De {
    constructor() {
      super(n, t, l), this.$$p_d = e;
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
        u = le(a, u, e), this.$$d[a] = u, (f = this.$$c) == null || f.$set({ [a]: u });
      }
    });
  }), i.forEach((a) => {
    Object.defineProperty(s.prototype, a, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[a];
      }
    });
  }), o && (s = o(s)), n.element = /** @type {any} */
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
    xt(this, 1), this.$destroy = J;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!Oe(t))
      return J;
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
const It = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(It);
const Fe = "KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2NvbnN0IGY9bmV3IFRleHRFbmNvZGVyO2Z1bmN0aW9uIGcodCl7cmV0dXJuWy4uLm5ldyBVaW50OEFycmF5KHQpXS5tYXAoZT0+ZS50b1N0cmluZygxNikucGFkU3RhcnQoMiwiMCIpKS5qb2luKCIiKX1hc3luYyBmdW5jdGlvbiBoKHQsZSxvKXtyZXR1cm4gZyhhd2FpdCBjcnlwdG8uc3VidGxlLmRpZ2VzdChvLnRvVXBwZXJDYXNlKCksZi5lbmNvZGUodCtlKSkpfWZ1bmN0aW9uIG0odCxlLG89IlNIQS0yNTYiLGk9MWU2LHA9MCl7Y29uc3QgYT1uZXcgQWJvcnRDb250cm9sbGVyO3JldHVybntwcm9taXNlOm5ldyBQcm9taXNlKChzLGMpPT57Y29uc3Qgcj1EYXRlLm5vdygpLGQ9bD0+e2Euc2lnbmFsLmFib3J0ZWR8fGw+aT9zKG51bGwpOmgoZSxsLG8pLnRoZW4odz0+e3c9PT10P3Moe251bWJlcjpsLHRvb2s6RGF0ZS5ub3coKS1yfSk6ZChsKzEpfSkuY2F0Y2goYyl9O2QocCl9KSxjb250cm9sbGVyOmF9fWxldCBuO29ubWVzc2FnZT1hc3luYyB0PT57Y29uc3R7dHlwZTplLHBheWxvYWQ6b309dC5kYXRhO2lmKGU9PT0iYWJvcnQiKW49PW51bGx8fG4uYWJvcnQoKSxuPXZvaWQgMDtlbHNlIGlmKGU9PT0id29yayIpe2NvbnN0e2FsZzppLGNoYWxsZW5nZTpwLG1heDphLHNhbHQ6dSxzdGFydDpzfT1vfHx7fSxjPW0ocCx1LGksYSxzKTtuPWMuY29udHJvbGxlcixjLnByb21pc2UudGhlbihyPT57c2VsZi5wb3N0TWVzc2FnZShyJiZ7Li4ucix3b3JrZXI6ITB9KX0pfX19KSgpOwo=", Rt = (n) => Uint8Array.from(atob(n), (e) => e.charCodeAt(0)), Te = typeof window < "u" && window.Blob && new Blob([Rt(Fe)], { type: "text/javascript;charset=utf-8" });
function Nt(n) {
  let e;
  try {
    if (e = Te && (window.URL || window.webkitURL).createObjectURL(Te), !e)
      throw "";
    const t = new Worker(e, {
      name: n == null ? void 0 : n.name
    });
    return t.addEventListener("error", () => {
      (window.URL || window.webkitURL).revokeObjectURL(e);
    }), t;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + Fe,
      {
        name: n == null ? void 0 : n.name
      }
    );
  } finally {
    e && (window.URL || window.webkitURL).revokeObjectURL(e);
  }
}
const St = new TextEncoder();
function Tt(n) {
  return [...new Uint8Array(n)].map((e) => e.toString(16).padStart(2, "0")).join("");
}
async function At(n, e = "SHA-256", t = 1e5) {
  const i = Date.now().toString(16);
  n || (n = Math.round(Math.random() * t));
  const l = await We(i, n, e);
  return {
    algorithm: e,
    challenge: l,
    salt: i,
    signature: ""
  };
}
async function We(n, e, t) {
  return Tt(
    await crypto.subtle.digest(
      t.toUpperCase(),
      St.encode(n + e)
    )
  );
}
function jt(n, e, t = "SHA-256", i = 1e6, l = 0) {
  const o = new AbortController();
  return {
    promise: new Promise((a, u) => {
      const f = Date.now(), R = (g) => {
        o.signal.aborted || g > i ? a(null) : We(e, g, t).then((j) => {
          j === n ? a({
            number: g,
            took: Date.now() - f
          }) : R(g + 1);
        }).catch(u);
      };
      R(l);
    }),
    controller: o
  };
}
var v = /* @__PURE__ */ ((n) => (n.ERROR = "error", n.VERIFIED = "verified", n.VERIFYING = "verifying", n.UNVERIFIED = "unverified", n.EXPIRED = "expired", n))(v || {});
function Mt(n) {
  st(n, "svelte-14ngypa", `.altcha.svelte-14ngypa.svelte-14ngypa{background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid
      var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);overflow:hidden;position:relative;text-align:left}.altcha.svelte-14ngypa.svelte-14ngypa:focus-within{border-color:var(--altcha-color-border-focus, currentColor)}.altcha-main.svelte-14ngypa.svelte-14ngypa{align-items:center;display:flex;gap:0.4rem;padding:0.7rem}.altcha-label.svelte-14ngypa.svelte-14ngypa{flex-grow:1}.altcha-label.svelte-14ngypa label.svelte-14ngypa{cursor:pointer}.altcha-logo.svelte-14ngypa.svelte-14ngypa{color:currentColor;opacity:0.3}.altcha-logo.svelte-14ngypa.svelte-14ngypa:hover{opacity:1}.altcha-error.svelte-14ngypa.svelte-14ngypa{color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem}.altcha-footer.svelte-14ngypa.svelte-14ngypa{align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.4;padding:0.2rem 0.7rem;text-align:right}.altcha-footer.svelte-14ngypa.svelte-14ngypa:hover{opacity:1}.altcha-footer.svelte-14ngypa>.svelte-14ngypa:first-child{flex-grow:1}.altcha-footer.svelte-14ngypa a{color:currentColor}.altcha-checkbox.svelte-14ngypa.svelte-14ngypa{display:flex;align-items:center;height:24px;width:24px}.altcha-checkbox.svelte-14ngypa input.svelte-14ngypa{width:18px;height:18px;margin:0}.altcha-hidden.svelte-14ngypa.svelte-14ngypa{display:none}.altcha-spinner.svelte-14ngypa.svelte-14ngypa{animation:svelte-14ngypa-altcha-spinner 0.75s infinite linear;transform-origin:center}@keyframes svelte-14ngypa-altcha-spinner{100%{transform:rotate(360deg)}}`);
}
function Ae(n) {
  let e, t, i;
  return {
    c() {
      e = P("svg"), t = P("path"), i = P("path"), c(t, "d", "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"), c(t, "fill", "currentColor"), c(t, "opacity", ".25"), c(i, "d", "M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"), c(i, "fill", "currentColor"), c(i, "class", "altcha-spinner svelte-14ngypa"), c(e, "width", "24"), c(e, "height", "24"), c(e, "viewBox", "0 0 24 24"), c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(l, o) {
      A(l, e, o), w(e, t), w(e, i);
    },
    d(l) {
      l && N(e);
    }
  };
}
function Zt(n) {
  let e, t = (
    /*_strings*/
    n[9].label + ""
  ), i;
  return {
    c() {
      e = L("label"), c(e, "for", i = /*name*/
      n[3] + "_checkbox"), c(e, "class", "svelte-14ngypa");
    },
    m(l, o) {
      A(l, e, o), e.innerHTML = t;
    },
    p(l, o) {
      o[0] & /*_strings*/
      512 && t !== (t = /*_strings*/
      l[9].label + "") && (e.innerHTML = t), o[0] & /*name*/
      8 && i !== (i = /*name*/
      l[3] + "_checkbox") && c(e, "for", i);
    },
    d(l) {
      l && N(e);
    }
  };
}
function Gt(n) {
  let e, t = (
    /*_strings*/
    n[9].verifying + ""
  );
  return {
    c() {
      e = L("span");
    },
    m(i, l) {
      A(i, e, l), e.innerHTML = t;
    },
    p(i, l) {
      l[0] & /*_strings*/
      512 && t !== (t = /*_strings*/
      i[9].verifying + "") && (e.innerHTML = t);
    },
    d(i) {
      i && N(e);
    }
  };
}
function Vt(n) {
  let e, t = (
    /*_strings*/
    n[9].verified + ""
  ), i, l;
  return {
    c() {
      e = L("span"), i = U(), l = L("input"), c(l, "type", "hidden"), c(
        l,
        "name",
        /*name*/
        n[3]
      ), l.value = /*payload*/
      n[4];
    },
    m(o, s) {
      A(o, e, s), e.innerHTML = t, A(o, i, s), A(o, l, s);
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
      o && (N(e), N(i), N(l));
    }
  };
}
function je(n) {
  let e, t, i, l, o, s;
  return {
    c() {
      e = L("div"), t = L("a"), i = P("svg"), l = P("path"), o = P("path"), s = P("path"), c(l, "d", "M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z"), c(l, "fill", "currentColor"), c(o, "d", "M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z"), c(o, "fill", "currentColor"), c(s, "d", "M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z"), c(s, "fill", "currentColor"), c(i, "width", "22"), c(i, "height", "22"), c(i, "viewBox", "0 0 20 20"), c(i, "fill", "none"), c(i, "xmlns", "http://www.w3.org/2000/svg"), c(t, "href", Be), c(t, "target", "_blank"), c(t, "class", "altcha-logo svelte-14ngypa");
    },
    m(a, u) {
      A(a, e, u), w(e, t), w(t, i), w(i, l), w(i, o), w(i, s);
    },
    p: J,
    d(a) {
      a && N(e);
    }
  };
}
function Me(n) {
  let e, t, i, l;
  function o(u, f) {
    return (
      /*state*/
      u[5] === v.EXPIRED ? Ht : Ot
    );
  }
  let s = o(n), a = s(n);
  return {
    c() {
      e = L("div"), t = P("svg"), i = P("path"), l = U(), a.c(), c(i, "stroke-linecap", "round"), c(i, "stroke-linejoin", "round"), c(i, "d", "M6 18L18 6M6 6l12 12"), c(t, "width", "14"), c(t, "height", "14"), c(t, "xmlns", "http://www.w3.org/2000/svg"), c(t, "fill", "none"), c(t, "viewBox", "0 0 24 24"), c(t, "stroke-width", "1.5"), c(t, "stroke", "currentColor"), c(e, "class", "altcha-error svelte-14ngypa");
    },
    m(u, f) {
      A(u, e, f), w(e, t), w(t, i), w(e, l), a.m(e, null);
    },
    p(u, f) {
      s === (s = o(u)) && a ? a.p(u, f) : (a.d(1), a = s(u), a && (a.c(), a.m(e, null)));
    },
    d(u) {
      u && N(e), a.d();
    }
  };
}
function Ot(n) {
  let e, t = (
    /*_strings*/
    n[9].error + ""
  );
  return {
    c() {
      e = L("div"), c(
        e,
        "title",
        /*error*/
        n[8]
      );
    },
    m(i, l) {
      A(i, e, l), e.innerHTML = t;
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
      i && N(e);
    }
  };
}
function Ht(n) {
  let e, t = (
    /*_strings*/
    n[9].expired + ""
  );
  return {
    c() {
      e = L("div"), c(
        e,
        "title",
        /*error*/
        n[8]
      );
    },
    m(i, l) {
      A(i, e, l), e.innerHTML = t;
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
      i && N(e);
    }
  };
}
function Ze(n) {
  let e, t, i = (
    /*_strings*/
    n[9].footer + ""
  );
  return {
    c() {
      e = L("div"), t = L("div"), c(t, "class", "svelte-14ngypa"), c(e, "class", "altcha-footer svelte-14ngypa");
    },
    m(l, o) {
      A(l, e, o), w(e, t), t.innerHTML = i;
    },
    p(l, o) {
      o[0] & /*_strings*/
      512 && i !== (i = /*_strings*/
      l[9].footer + "") && (t.innerHTML = i);
    },
    d(l) {
      l && N(e);
    }
  };
}
function Pt(n) {
  let e, t, i, l, o, s, a, u, f, R, g, j, Z, G, _ = (
    /*state*/
    n[5] === v.VERIFYING && Ae()
  );
  function F(d, I) {
    return (
      /*state*/
      d[5] === v.VERIFIED ? Vt : (
        /*state*/
        d[5] === v.VERIFYING ? Gt : Zt
      )
    );
  }
  let V = F(n), k = V(n), x = (
    /*hidelogo*/
    n[2] !== !0 && je()
  ), m = (
    /*error*/
    (n[8] || /*state*/
    n[5] === v.EXPIRED) && Me(n)
  ), y = (
    /*_strings*/
    n[9].footer && /*hidefooter*/
    n[1] !== !0 && Ze(n)
  );
  return {
    c() {
      e = L("div"), t = L("div"), _ && _.c(), i = U(), l = L("div"), o = L("input"), u = U(), f = L("div"), k.c(), R = U(), x && x.c(), g = U(), m && m.c(), j = U(), y && y.c(), c(o, "type", "checkbox"), c(o, "id", s = /*name*/
      n[3] + "_checkbox"), o.required = a = /*auto*/
      n[0] !== "onsubmit", c(o, "class", "svelte-14ngypa"), c(l, "class", "altcha-checkbox svelte-14ngypa"), Ne(
        l,
        "altcha-hidden",
        /*state*/
        n[5] === v.VERIFYING
      ), c(f, "class", "altcha-label svelte-14ngypa"), c(t, "class", "altcha-main svelte-14ngypa"), c(e, "class", "altcha svelte-14ngypa"), c(
        e,
        "data-state",
        /*state*/
        n[5]
      );
    },
    m(d, I) {
      A(d, e, I), w(e, t), _ && _.m(t, null), w(t, i), w(t, l), w(l, o), o.checked = /*checked*/
      n[6], w(t, u), w(t, f), k.m(f, null), w(t, R), x && x.m(t, null), w(e, g), m && m.m(e, null), w(e, j), y && y.m(e, null), n[30](e), Z || (G = [
        ae(
          o,
          "change",
          /*input_change_handler*/
          n[29]
        ),
        ae(
          o,
          "change",
          /*onCheckedChange*/
          n[10]
        ),
        ae(
          o,
          "invalid",
          /*onInvalid*/
          n[11]
        )
      ], Z = !0);
    },
    p(d, I) {
      /*state*/
      d[5] === v.VERIFYING ? _ || (_ = Ae(), _.c(), _.m(t, i)) : _ && (_.d(1), _ = null), I[0] & /*name*/
      8 && s !== (s = /*name*/
      d[3] + "_checkbox") && c(o, "id", s), I[0] & /*auto*/
      1 && a !== (a = /*auto*/
      d[0] !== "onsubmit") && (o.required = a), I[0] & /*checked*/
      64 && (o.checked = /*checked*/
      d[6]), I[0] & /*state*/
      32 && Ne(
        l,
        "altcha-hidden",
        /*state*/
        d[5] === v.VERIFYING
      ), V === (V = F(d)) && k ? k.p(d, I) : (k.d(1), k = V(d), k && (k.c(), k.m(f, null))), /*hidelogo*/
      d[2] !== !0 ? x ? x.p(d, I) : (x = je(), x.c(), x.m(t, null)) : x && (x.d(1), x = null), /*error*/
      d[8] || /*state*/
      d[5] === v.EXPIRED ? m ? m.p(d, I) : (m = Me(d), m.c(), m.m(e, j)) : m && (m.d(1), m = null), /*_strings*/
      d[9].footer && /*hidefooter*/
      d[1] !== !0 ? y ? y.p(d, I) : (y = Ze(d), y.c(), y.m(e, null)) : y && (y.d(1), y = null), I[0] & /*state*/
      32 && c(
        e,
        "data-state",
        /*state*/
        d[5]
      );
    },
    i: J,
    o: J,
    d(d) {
      d && N(e), _ && _.d(), k.d(), x && x.d(), m && m.d(), y && y.d(), n[30](null), Z = !1, q(G);
    }
  };
}
const Be = "https://altcha.org/";
function Ge(n) {
  return JSON.parse(n);
}
function Dt() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function Ft(n, e, t) {
  var Ee, $e;
  let i, l, o, { auto: s = void 0 } = e, { blockspam: a = void 0 } = e, { challengeurl: u = void 0 } = e, { challengejson: f = void 0 } = e, { debug: R = !1 } = e, { expire: g = void 0 } = e, { hidefooter: j = !1 } = e, { hidelogo: Z = !1 } = e, { name: G = "altcha" } = e, { maxnumber: _ = 1e6 } = e, { mockerror: F = !1 } = e, { refetchonexpire: V = !0 } = e, { spamfilter: k = !1 } = e, { strings: x = void 0 } = e, { test: m = !1 } = e, { verifyurl: y = void 0 } = e, { workers: d = navigator.hardwareConcurrency || 8 } = e;
  const I = bt(), me = ["SHA-256", "SHA-384", "SHA-512"], be = ($e = (Ee = document.documentElement.lang) == null ? void 0 : Ee.split("-")) == null ? void 0 : $e[0];
  let D = !1, ee, b = null, oe = null, W = null, O = v.UNVERIFIED, se;
  mt(() => {
    b && (b.removeEventListener("submit", ye), b.removeEventListener("reset", ve), b.removeEventListener("focusin", pe), b = null);
  }), gt(() => {
    $("mounted", "0.3.0"), $("workers", d), m && $("using test mode"), g && ce(g), s !== void 0 && $("auto", s), b = ee.closest("form"), b && (b.addEventListener("submit", ye), b.addEventListener("reset", ve), s === "onfocus" && b.addEventListener("focusin", pe)), s === "onload" && B();
  });
  function $(...r) {
    (R || r.some((h) => h instanceof Error)) && console[r[0] instanceof Error ? "error" : "log"]("ALTCHA", ...r);
  }
  function pe(r) {
    B();
  }
  function ye(r) {
    b && s === "onsubmit" && O === v.UNVERIFIED && (r.preventDefault(), r.stopPropagation(), B().then(() => {
      b == null || b.requestSubmit();
    }));
  }
  function ve() {
    te();
  }
  function we(r, h) {
    return btoa(JSON.stringify({
      algorithm: r.algorithm,
      challenge: r.challenge,
      number: h.number,
      salt: r.salt,
      signature: r.signature,
      test: m ? !0 : void 0,
      took: h.took
    }));
  }
  function _e(r) {
    if (!r.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (r.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!me.includes(r.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${me.join(", ")}`);
    if (!r.challenge || r.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!r.salt || r.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function Ue() {
    if (F)
      throw $("mocking error"), new Error("Mocked error.");
    if (i)
      return $("using provided json data"), i;
    if (m)
      return $("generating test challenge"), At(typeof m != "boolean" ? +m : void 0);
    {
      if (!u)
        throw new Error("Attribute challengeurl not set.");
      $("fetching challenge from", u);
      const r = await fetch(u, {
        headers: {
          "x-altcha-spam-filter": k ? "1" : "0"
        }
      });
      if (r.status !== 200)
        throw new Error(`Server responded with ${r.status}.`);
      const h = r.headers.get("Expires"), C = r.headers.get("X-Altcha-Config");
      if (C)
        try {
          const p = JSON.parse(C);
          p && typeof p == "object" && (p.verifyurl && (p.verifyurl = new URL(p.verifyurl, new URL(u)).toString()), xe(p));
        } catch (p) {
          $("unable to configure from X-Altcha-Config", p);
        }
      if (!g && (h != null && h.length)) {
        const p = Date.parse(h);
        if (p) {
          const S = p - Date.now();
          S > 0 && ce(S);
        }
      }
      return r.json();
    }
  }
  function ke() {
    u && V && O === v.VERIFIED ? B() : te(v.EXPIRED, o.expired);
  }
  async function Ye(r) {
    let h = null;
    if ("Worker" in window) {
      try {
        h = await Xe(r.challenge, r.salt, r.algorithm, r.maxnumber);
      } catch (C) {
        $(C);
      }
      if ((h == null ? void 0 : h.number) !== void 0)
        return { data: r, solution: h };
    }
    return {
      data: r,
      solution: await jt(r.challenge, r.salt, r.algorithm, r.maxnumber || _).promise
    };
  }
  async function Xe(r, h, C, p = _, S = Math.ceil(d)) {
    const H = [];
    if (S < 1)
      throw new Error("Wrong number of workers configured.");
    if (S > 16)
      throw new Error("Too many workers. Max. 16 allowed workers.");
    for (let T = 0; T < S; T++)
      H.push(new Nt());
    const ne = Math.ceil(p / S), re = await Promise.all(H.map((T, ie) => {
      const Ce = ie * ne;
      return new Promise((nt) => {
        T.addEventListener("message", (Le) => {
          if (Le.data)
            for (const Ie of H)
              Ie !== T && Ie.postMessage({ type: "abort" });
          nt(Le.data);
        }), T.postMessage({
          payload: {
            alg: C,
            challenge: r,
            max: Ce + ne,
            salt: h,
            start: Ce
          },
          type: "work"
        });
      });
    }));
    for (const T of H)
      T.terminate();
    return re.find((T) => !!T) || null;
  }
  function Ke() {
    [v.UNVERIFIED, v.ERROR, v.EXPIRED].includes(O) ? k && (b == null ? void 0 : b.reportValidity()) === !1 ? t(6, D = !1) : B() : t(6, D = !0);
  }
  function Je() {
    O === v.VERIFYING && alert(o.waitAlert);
  }
  function ce(r) {
    $("expire", r), clearTimeout(se), r < 1 ? ke() : se = setTimeout(ke, r);
  }
  function ze(r) {
    var C;
    const h = b == null ? void 0 : b.querySelector(typeof r == "string" ? `input[name="${r}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((C = h == null ? void 0 : h.value) == null ? void 0 : C.slice(h.value.indexOf("@"))) || void 0;
  }
  function Qe(r) {
    return [
      ...(b == null ? void 0 : b.querySelectorAll(r != null && r.length ? r.map((C) => `input[name="${C}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (C, p) => {
        const S = p.name, H = p.value.trim();
        return S && H && (C[S] = H), C;
      },
      {}
    );
  }
  async function qe(r) {
    if (!y)
      throw new Error("Attribute verifyurl not set.");
    $("requesting server verification from", y);
    const h = { payload: r };
    if (k) {
      const { email: S, expectedLanguages: H, expectedCountries: ne, fields: re, ipAddress: T, timeZone: ie } = typeof k == "object" ? k : {
        email: void 0,
        expectedCountries: void 0,
        expectedLanguages: void 0,
        fields: void 0,
        ipAddress: void 0,
        timeZone: void 0
      };
      h.ipAddress = T === !1 ? void 0 : T || "auto", h.email = S === !1 ? void 0 : ze(S), h.fields = re === !1 ? void 0 : Qe(re), h.timeZone = ie === !1 ? void 0 : ie || Dt(), h.expectedCountries = ne, h.expectedLanguages = H || (be ? [be] : void 0);
    }
    const C = await fetch(y, {
      body: JSON.stringify(h),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (C.status !== 200)
      throw new Error(`Server responded with ${C.status}.`);
    const p = await C.json();
    if (p != null && p.payload && t(4, W = p.payload), I("serververification", p), a && p.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  function xe(r) {
    r.auto !== void 0 && (t(0, s = r.auto), s === "onload" && B()), r.expire !== void 0 && (ce(r.expire), t(13, g = r.expire)), r.challenge && (_e(r.challenge), i = r.challenge), r.debug !== void 0 && t(12, R = !!r.debug), r.hidefooter !== void 0 && t(1, j = !!r.hidefooter), r.hidelogo !== void 0 && t(2, Z = !!r.hidelogo), r.maxnumber !== void 0 && t(14, _ = +r.maxnumber), r.mockerror !== void 0 && t(15, F = !!r.mockerror), r.name !== void 0 && t(3, G = r.name), r.refetchonexpire !== void 0 && t(16, V = !!r.refetchonexpire), r.spamfilter !== void 0 && t(17, k = r.spamfilter), r.strings && t(28, l = r.strings), r.test !== void 0 && t(18, m = !!r.test), r.verifyurl !== void 0 && t(19, y = r.verifyurl), r.workers !== void 0 && t(20, d = +r.workers);
  }
  function te(r = v.UNVERIFIED, h = null) {
    clearTimeout(se), t(6, D = !1), t(8, oe = h), t(4, W = null), t(5, O = r);
  }
  async function B() {
    return te(v.VERIFYING), Ue().then((r) => (_e(r), $("challenge", r), Ye(r))).then(({ data: r, solution: h }) => {
      if ($("solution", h), (h == null ? void 0 : h.number) !== void 0) {
        if (y)
          return qe(we(r, h));
        t(4, W = we(r, h)), $("payload", W);
      } else
        throw $("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      pt().then(() => {
        t(5, O = v.VERIFIED), t(6, D = !0), $("verified"), I("verified", { payload: W });
      });
    }).catch((r) => {
      $(r), t(5, O = v.ERROR), t(6, D = !1), t(8, oe = r.message);
    });
  }
  function et() {
    D = this.checked, t(6, D);
  }
  function tt(r) {
    ue[r ? "unshift" : "push"](() => {
      ee = r, t(7, ee);
    });
  }
  return n.$$set = (r) => {
    "auto" in r && t(0, s = r.auto), "blockspam" in r && t(21, a = r.blockspam), "challengeurl" in r && t(22, u = r.challengeurl), "challengejson" in r && t(23, f = r.challengejson), "debug" in r && t(12, R = r.debug), "expire" in r && t(13, g = r.expire), "hidefooter" in r && t(1, j = r.hidefooter), "hidelogo" in r && t(2, Z = r.hidelogo), "name" in r && t(3, G = r.name), "maxnumber" in r && t(14, _ = r.maxnumber), "mockerror" in r && t(15, F = r.mockerror), "refetchonexpire" in r && t(16, V = r.refetchonexpire), "spamfilter" in r && t(17, k = r.spamfilter), "strings" in r && t(24, x = r.strings), "test" in r && t(18, m = r.test), "verifyurl" in r && t(19, y = r.verifyurl), "workers" in r && t(20, d = r.workers);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*challengejson*/
    8388608 && (i = f ? Ge(f) : void 0), n.$$.dirty[0] & /*strings*/
    16777216 && t(28, l = x ? Ge(x) : {}), n.$$.dirty[0] & /*parsedStrings*/
    268435456 && t(9, o = {
      error: "Verification failed. Try again later.",
      expired: "Verification expired. Try again.",
      footer: `Protected by <a href="${Be}" target="_blank">ALTCHA</a>`,
      label: "I'm not a robot",
      verified: "Verified",
      verifying: "Verifying...",
      waitAlert: "Verifying... please wait.",
      ...l
    }), n.$$.dirty[0] & /*payload, state*/
    48 && I("statechange", { payload: W, state: O });
  }, [
    s,
    j,
    Z,
    G,
    W,
    O,
    D,
    ee,
    oe,
    o,
    Ke,
    Je,
    R,
    g,
    _,
    F,
    V,
    k,
    m,
    y,
    d,
    a,
    u,
    f,
    x,
    xe,
    te,
    B,
    l,
    et,
    tt
  ];
}
class Wt extends Lt {
  constructor(e) {
    super(), $t(
      this,
      e,
      Ft,
      Pt,
      lt,
      {
        auto: 0,
        blockspam: 21,
        challengeurl: 22,
        challengejson: 23,
        debug: 12,
        expire: 13,
        hidefooter: 1,
        hidelogo: 2,
        name: 3,
        maxnumber: 14,
        mockerror: 15,
        refetchonexpire: 16,
        spamfilter: 17,
        strings: 24,
        test: 18,
        verifyurl: 19,
        workers: 20,
        configure: 25,
        reset: 26,
        verify: 27
      },
      Mt,
      [-1, -1]
    );
  }
  get auto() {
    return this.$$.ctx[0];
  }
  set auto(e) {
    this.$$set({ auto: e }), E();
  }
  get blockspam() {
    return this.$$.ctx[21];
  }
  set blockspam(e) {
    this.$$set({ blockspam: e }), E();
  }
  get challengeurl() {
    return this.$$.ctx[22];
  }
  set challengeurl(e) {
    this.$$set({ challengeurl: e }), E();
  }
  get challengejson() {
    return this.$$.ctx[23];
  }
  set challengejson(e) {
    this.$$set({ challengejson: e }), E();
  }
  get debug() {
    return this.$$.ctx[12];
  }
  set debug(e) {
    this.$$set({ debug: e }), E();
  }
  get expire() {
    return this.$$.ctx[13];
  }
  set expire(e) {
    this.$$set({ expire: e }), E();
  }
  get hidefooter() {
    return this.$$.ctx[1];
  }
  set hidefooter(e) {
    this.$$set({ hidefooter: e }), E();
  }
  get hidelogo() {
    return this.$$.ctx[2];
  }
  set hidelogo(e) {
    this.$$set({ hidelogo: e }), E();
  }
  get name() {
    return this.$$.ctx[3];
  }
  set name(e) {
    this.$$set({ name: e }), E();
  }
  get maxnumber() {
    return this.$$.ctx[14];
  }
  set maxnumber(e) {
    this.$$set({ maxnumber: e }), E();
  }
  get mockerror() {
    return this.$$.ctx[15];
  }
  set mockerror(e) {
    this.$$set({ mockerror: e }), E();
  }
  get refetchonexpire() {
    return this.$$.ctx[16];
  }
  set refetchonexpire(e) {
    this.$$set({ refetchonexpire: e }), E();
  }
  get spamfilter() {
    return this.$$.ctx[17];
  }
  set spamfilter(e) {
    this.$$set({ spamfilter: e }), E();
  }
  get strings() {
    return this.$$.ctx[24];
  }
  set strings(e) {
    this.$$set({ strings: e }), E();
  }
  get test() {
    return this.$$.ctx[18];
  }
  set test(e) {
    this.$$set({ test: e }), E();
  }
  get verifyurl() {
    return this.$$.ctx[19];
  }
  set verifyurl(e) {
    this.$$set({ verifyurl: e }), E();
  }
  get workers() {
    return this.$$.ctx[20];
  }
  set workers(e) {
    this.$$set({ workers: e }), E();
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
customElements.define("altcha-widget", Ct(Wt, { auto: {}, blockspam: {}, challengeurl: {}, challengejson: {}, debug: { type: "Boolean" }, expire: {}, hidefooter: { type: "Boolean" }, hidelogo: { type: "Boolean" }, name: {}, maxnumber: {}, mockerror: { type: "Boolean" }, refetchonexpire: { type: "Boolean" }, spamfilter: { type: "Boolean" }, strings: {}, test: { type: "Boolean" }, verifyurl: {}, workers: {} }, [], ["configure", "reset", "verify"], !1));
export {
  Wt as Altcha
};
