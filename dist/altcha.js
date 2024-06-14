var ot = Object.defineProperty;
var lt = (t, e, r) => e in t ? ot(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var T = (t, e, r) => lt(t, typeof e != "symbol" ? e + "" : e, r);
const Ge = "KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2NvbnN0IGY9bmV3IFRleHRFbmNvZGVyO2Z1bmN0aW9uIGQoZSl7cmV0dXJuWy4uLm5ldyBVaW50OEFycmF5KGUpXS5tYXAodD0+dC50b1N0cmluZygxNikucGFkU3RhcnQoMiwiMCIpKS5qb2luKCIiKX1hc3luYyBmdW5jdGlvbiBwKGUsdCxvKXtyZXR1cm4gZChhd2FpdCBjcnlwdG8uc3VidGxlLmRpZ2VzdChvLnRvVXBwZXJDYXNlKCksZi5lbmNvZGUoZSt0KSkpfWZ1bmN0aW9uIGcoZSx0LG89IlNIQS0yNTYiLGw9MWU2LGM9MCl7Y29uc3QgYT1uZXcgQWJvcnRDb250cm9sbGVyLGk9RGF0ZS5ub3coKTtyZXR1cm57cHJvbWlzZTooYXN5bmMoKT0+e2ZvcihsZXQgbj1jO248PWw7bis9MSl7aWYoYS5zaWduYWwuYWJvcnRlZClyZXR1cm4gbnVsbDtpZihhd2FpdCBwKHQsbixvKT09PWUpcmV0dXJue251bWJlcjpuLHRvb2s6RGF0ZS5ub3coKS1pfX1yZXR1cm4gbnVsbH0pKCksY29udHJvbGxlcjphfX1sZXQgcjtvbm1lc3NhZ2U9YXN5bmMgZT0+e2NvbnN0e3R5cGU6dCxwYXlsb2FkOm99PWUuZGF0YTtpZih0PT09ImFib3J0IilyPT1udWxsfHxyLmFib3J0KCkscj12b2lkIDA7ZWxzZSBpZih0PT09IndvcmsiKXtjb25zdHthbGc6bCxjaGFsbGVuZ2U6YyxtYXg6YSxzYWx0Omksc3RhcnQ6dX09b3x8e30sbj1nKGMsaSxsLGEsdSk7cj1uLmNvbnRyb2xsZXIsbi5wcm9taXNlLnRoZW4ocz0+e3NlbGYucG9zdE1lc3NhZ2UocyYmey4uLnMsd29ya2VyOiEwfSl9KX19fSkoKTsK", st = (t) => Uint8Array.from(atob(t), (e) => e.charCodeAt(0)), ze = typeof window < "u" && window.Blob && new Blob([st(Ge)], { type: "text/javascript;charset=utf-8" });
function ct(t) {
  let e;
  try {
    if (e = ze && (window.URL || window.webkitURL).createObjectURL(ze), !e) throw "";
    const r = new Worker(e, {
      name: t == null ? void 0 : t.name
    });
    return r.addEventListener("error", () => {
      (window.URL || window.webkitURL).revokeObjectURL(e);
    }), r;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + Ge,
      {
        name: t == null ? void 0 : t.name
      }
    );
  } finally {
    e && (window.URL || window.webkitURL).revokeObjectURL(e);
  }
}
function ee() {
}
function De(t) {
  return t();
}
function Ne() {
  return /* @__PURE__ */ Object.create(null);
}
function re(t) {
  t.forEach(De);
}
function Xe(t) {
  return typeof t == "function";
}
function at(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function ft(t) {
  return Object.keys(t).length === 0;
}
function v(t, e) {
  t.appendChild(e);
}
function ut(t, e, r) {
  const i = ht(t);
  if (!i.getElementById(e)) {
    const o = R("style");
    o.id = e, o.textContent = r, dt(i, o);
  }
}
function ht(t) {
  if (!t) return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : t.ownerDocument;
}
function dt(t, e) {
  return v(
    /** @type {Document} */
    t.head || t,
    e
  ), e.sheet;
}
function S(t, e, r) {
  t.insertBefore(e, r || null);
}
function N(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function R(t) {
  return document.createElement(t);
}
function O(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function mt(t) {
  return document.createTextNode(t);
}
function B() {
  return mt(" ");
}
function fe(t, e, r, i) {
  return t.addEventListener(e, r, i), () => t.removeEventListener(e, r, i);
}
function c(t, e, r) {
  r == null ? t.removeAttribute(e) : t.getAttribute(e) !== r && t.setAttribute(e, r);
}
function gt(t) {
  return Array.from(t.childNodes);
}
function Ae(t, e, r) {
  t.classList.toggle(e, !!r);
}
function bt(t, e, { bubbles: r = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: r, cancelable: i });
}
function yt(t) {
  const e = {};
  return t.childNodes.forEach(
    /** @param {Element} node */
    (r) => {
      e[r.slot || "default"] = !0;
    }
  ), e;
}
let te;
function q(t) {
  te = t;
}
function ge() {
  if (!te) throw new Error("Function called outside component initialization");
  return te;
}
function vt(t) {
  ge().$$.on_mount.push(t);
}
function wt(t) {
  ge().$$.on_destroy.push(t);
}
function _t() {
  const t = ge();
  return (e, r, { cancelable: i = !1 } = {}) => {
    const o = t.$$.callbacks[e];
    if (o) {
      const l = bt(
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
const J = [], he = [];
let Q = [];
const Se = [], Oe = /* @__PURE__ */ Promise.resolve();
let de = !1;
function Fe() {
  de || (de = !0, Oe.then(_));
}
function pt() {
  return Fe(), Oe;
}
function me(t) {
  Q.push(t);
}
const ue = /* @__PURE__ */ new Set();
let K = 0;
function _() {
  if (K !== 0)
    return;
  const t = te;
  do {
    try {
      for (; K < J.length; ) {
        const e = J[K];
        K++, q(e), kt(e.$$);
      }
    } catch (e) {
      throw J.length = 0, K = 0, e;
    }
    for (q(null), J.length = 0, K = 0; he.length; ) he.pop()();
    for (let e = 0; e < Q.length; e += 1) {
      const r = Q[e];
      ue.has(r) || (ue.add(r), r());
    }
    Q.length = 0;
  } while (J.length);
  for (; Se.length; )
    Se.pop()();
  de = !1, ue.clear(), q(t);
}
function kt(t) {
  if (t.fragment !== null) {
    t.update(), re(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(me);
  }
}
function xt(t) {
  const e = [], r = [];
  Q.forEach((i) => t.indexOf(i) === -1 ? e.push(i) : r.push(i)), r.forEach((i) => i()), Q = e;
}
const Et = /* @__PURE__ */ new Set();
function $t(t, e) {
  t && t.i && (Et.delete(t), t.i(e));
}
function Ct(t, e, r) {
  const { fragment: i, after_update: o } = t.$$;
  i && i.m(e, r), me(() => {
    const l = t.$$.on_mount.map(De).filter(Xe);
    t.$$.on_destroy ? t.$$.on_destroy.push(...l) : re(l), t.$$.on_mount = [];
  }), o.forEach(me);
}
function Lt(t, e) {
  const r = t.$$;
  r.fragment !== null && (xt(r.after_update), re(r.on_destroy), r.fragment && r.fragment.d(e), r.on_destroy = r.fragment = null, r.ctx = []);
}
function Rt(t, e) {
  t.$$.dirty[0] === -1 && (J.push(t), Fe(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function It(t, e, r, i, o, l, s = null, f = [-1]) {
  const a = te;
  q(t);
  const u = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: ee,
    not_equal: o,
    bound: Ne(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: Ne(),
    dirty: f,
    skip_bound: !1,
    root: e.target || a.$$.root
  };
  s && s(u.root);
  let j = !1;
  if (u.ctx = r ? r(t, e.props || {}, (C, M, ...V) => {
    const D = V.length ? V[0] : M;
    return u.ctx && o(u.ctx[C], u.ctx[C] = D) && (!u.skip_bound && u.bound[C] && u.bound[C](D), j && Rt(t, C)), M;
  }) : [], u.update(), j = !0, re(u.before_update), u.fragment = i ? i(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const C = gt(e.target);
      u.fragment && u.fragment.l(C), C.forEach(N);
    } else
      u.fragment && u.fragment.c();
    e.intro && $t(t.$$.fragment), Ct(t, e.target, e.anchor), _();
  }
  q(a);
}
let He;
typeof HTMLElement == "function" && (He = class extends HTMLElement {
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
              s = R("slot"), l !== "default" && c(s, "name", l);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(u, j) {
              S(u, s, j);
            },
            d: function(u) {
              u && N(s);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, i = yt(this);
      for (const l of this.$$s)
        l in i && (r[l] = [e(l)]);
      for (const l of this.attributes) {
        const s = this.$$g_p(l.name);
        s in this.$$d || (this.$$d[s] = se(s, l.value, this.$$p_d, "toProp"));
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
            const s = se(
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
          const f = this.$$c.$on(l, s);
          this.$$l_u.set(s, f);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(e, r, i) {
    var o;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = se(e, i, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [e]: this.$$d[e] }));
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
function se(t, e, r, i) {
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
function zt(t, e, r, i, o, l) {
  let s = class extends He {
    constructor() {
      super(t, r, o), this.$$p_d = e;
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
        var u;
        a = se(f, a, e), this.$$d[f] = a, (u = this.$$c) == null || u.$set({ [f]: a });
      }
    });
  }), i.forEach((f) => {
    Object.defineProperty(s.prototype, f, {
      get() {
        var a;
        return (a = this.$$c) == null ? void 0 : a[f];
      }
    });
  }), l && (s = l(s)), t.element = /** @type {any} */
  s, s;
}
class Nt {
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
    Lt(this, 1), this.$destroy = ee;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, r) {
    if (!Xe(r))
      return ee;
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
    this.$$set && !ft(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const At = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(At);
const St = new TextEncoder();
function jt(t) {
  return [...new Uint8Array(t)].map((e) => e.toString(16).padStart(2, "0")).join("");
}
async function Zt(t, e = "SHA-256", r = 1e5) {
  const i = Date.now().toString(16);
  t || (t = Math.round(Math.random() * r));
  const o = await We(i, t, e);
  return {
    algorithm: e,
    challenge: o,
    salt: i,
    signature: ""
  };
}
async function We(t, e, r) {
  return jt(
    await crypto.subtle.digest(
      r.toUpperCase(),
      St.encode(t + e)
    )
  );
}
function Tt(t, e, r = "SHA-256", i = 1e6, o = 0) {
  const l = new AbortController(), s = Date.now();
  return {
    promise: (async () => {
      for (let a = o; a <= i; a += 1) {
        if (l.signal.aborted)
          return null;
        if (await We(e, a, r) === t)
          return {
            number: a,
            took: Date.now() - s
          };
      }
      return null;
    })(),
    controller: l
  };
}
var b = /* @__PURE__ */ ((t) => (t.ERROR = "error", t.VERIFIED = "verified", t.VERIFYING = "verifying", t.UNVERIFIED = "unverified", t.EXPIRED = "expired", t))(b || {});
function Mt(t) {
  ut(t, "svelte-15co9zy", ".altcha.svelte-15co9zy.svelte-15co9zy{background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);overflow:hidden;position:relative;text-align:left}.altcha.svelte-15co9zy.svelte-15co9zy:focus-within{border-color:var(--altcha-color-border-focus, currentColor)}.altcha-main.svelte-15co9zy.svelte-15co9zy{align-items:center;display:flex;gap:0.4rem;padding:0.7rem}.altcha-label.svelte-15co9zy.svelte-15co9zy{flex-grow:1}.altcha-label.svelte-15co9zy label.svelte-15co9zy{cursor:pointer}.altcha-logo.svelte-15co9zy.svelte-15co9zy{color:currentColor;opacity:0.3}.altcha-logo.svelte-15co9zy.svelte-15co9zy:hover{opacity:1}.altcha-error.svelte-15co9zy.svelte-15co9zy{color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem}.altcha-footer.svelte-15co9zy.svelte-15co9zy{align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.4;padding:0.2rem 0.7rem;text-align:right}.altcha-footer.svelte-15co9zy.svelte-15co9zy:hover{opacity:1}.altcha-footer.svelte-15co9zy>.svelte-15co9zy:first-child{flex-grow:1}.altcha-footer.svelte-15co9zy a{color:currentColor}.altcha-checkbox.svelte-15co9zy.svelte-15co9zy{display:flex;align-items:center;height:24px;width:24px}.altcha-checkbox.svelte-15co9zy input.svelte-15co9zy{width:18px;height:18px;margin:0}.altcha-hidden.svelte-15co9zy.svelte-15co9zy{display:none}.altcha-spinner.svelte-15co9zy.svelte-15co9zy{animation:svelte-15co9zy-altcha-spinner 0.75s infinite linear;transform-origin:center}@keyframes svelte-15co9zy-altcha-spinner{100%{transform:rotate(360deg)}}");
}
function je(t) {
  let e, r, i;
  return {
    c() {
      e = O("svg"), r = O("path"), i = O("path"), c(r, "d", "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"), c(r, "fill", "currentColor"), c(r, "opacity", ".25"), c(i, "d", "M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"), c(i, "fill", "currentColor"), c(i, "class", "altcha-spinner svelte-15co9zy"), c(e, "width", "24"), c(e, "height", "24"), c(e, "viewBox", "0 0 24 24"), c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(o, l) {
      S(o, e, l), v(e, r), v(e, i);
    },
    d(o) {
      o && N(e);
    }
  };
}
function Vt(t) {
  let e, r = (
    /*_strings*/
    t[9].label + ""
  ), i;
  return {
    c() {
      e = R("label"), c(e, "for", i = /*name*/
      t[3] + "_checkbox"), c(e, "class", "svelte-15co9zy");
    },
    m(o, l) {
      S(o, e, l), e.innerHTML = r;
    },
    p(o, l) {
      l[0] & /*_strings*/
      512 && r !== (r = /*_strings*/
      o[9].label + "") && (e.innerHTML = r), l[0] & /*name*/
      8 && i !== (i = /*name*/
      o[3] + "_checkbox") && c(e, "for", i);
    },
    d(o) {
      o && N(e);
    }
  };
}
function Ut(t) {
  let e, r = (
    /*_strings*/
    t[9].verifying + ""
  );
  return {
    c() {
      e = R("span");
    },
    m(i, o) {
      S(i, e, o), e.innerHTML = r;
    },
    p(i, o) {
      o[0] & /*_strings*/
      512 && r !== (r = /*_strings*/
      i[9].verifying + "") && (e.innerHTML = r);
    },
    d(i) {
      i && N(e);
    }
  };
}
function Gt(t) {
  let e, r = (
    /*_strings*/
    t[9].verified + ""
  ), i, o;
  return {
    c() {
      e = R("span"), i = B(), o = R("input"), c(o, "type", "hidden"), c(
        o,
        "name",
        /*name*/
        t[3]
      ), o.value = /*payload*/
      t[4];
    },
    m(l, s) {
      S(l, e, s), e.innerHTML = r, S(l, i, s), S(l, o, s);
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
      l && (N(e), N(i), N(o));
    }
  };
}
function Ze(t) {
  let e, r, i, o, l, s, f;
  return {
    c() {
      e = R("div"), r = R("a"), i = O("svg"), o = O("path"), l = O("path"), s = O("path"), c(o, "d", "M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z"), c(o, "fill", "currentColor"), c(l, "d", "M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z"), c(l, "fill", "currentColor"), c(s, "d", "M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z"), c(s, "fill", "currentColor"), c(i, "width", "22"), c(i, "height", "22"), c(i, "viewBox", "0 0 20 20"), c(i, "fill", "none"), c(i, "xmlns", "http://www.w3.org/2000/svg"), c(r, "href", Ye), c(r, "target", "_blank"), c(r, "class", "altcha-logo svelte-15co9zy"), c(r, "aria-label", f = /*_strings*/
      t[9].ariaLinkLabel);
    },
    m(a, u) {
      S(a, e, u), v(e, r), v(r, i), v(i, o), v(i, l), v(i, s);
    },
    p(a, u) {
      u[0] & /*_strings*/
      512 && f !== (f = /*_strings*/
      a[9].ariaLinkLabel) && c(r, "aria-label", f);
    },
    d(a) {
      a && N(e);
    }
  };
}
function Te(t) {
  let e, r, i, o;
  function l(a, u) {
    return (
      /*state*/
      a[5] === b.EXPIRED ? Xt : Dt
    );
  }
  let s = l(t), f = s(t);
  return {
    c() {
      e = R("div"), r = O("svg"), i = O("path"), o = B(), f.c(), c(i, "stroke-linecap", "round"), c(i, "stroke-linejoin", "round"), c(i, "d", "M6 18L18 6M6 6l12 12"), c(r, "width", "14"), c(r, "height", "14"), c(r, "xmlns", "http://www.w3.org/2000/svg"), c(r, "fill", "none"), c(r, "viewBox", "0 0 24 24"), c(r, "stroke-width", "1.5"), c(r, "stroke", "currentColor"), c(e, "class", "altcha-error svelte-15co9zy");
    },
    m(a, u) {
      S(a, e, u), v(e, r), v(r, i), v(e, o), f.m(e, null);
    },
    p(a, u) {
      s === (s = l(a)) && f ? f.p(a, u) : (f.d(1), f = s(a), f && (f.c(), f.m(e, null)));
    },
    d(a) {
      a && N(e), f.d();
    }
  };
}
function Dt(t) {
  let e, r = (
    /*_strings*/
    t[9].error + ""
  );
  return {
    c() {
      e = R("div"), c(
        e,
        "title",
        /*error*/
        t[8]
      );
    },
    m(i, o) {
      S(i, e, o), e.innerHTML = r;
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
      i && N(e);
    }
  };
}
function Xt(t) {
  let e, r = (
    /*_strings*/
    t[9].expired + ""
  );
  return {
    c() {
      e = R("div"), c(
        e,
        "title",
        /*error*/
        t[8]
      );
    },
    m(i, o) {
      S(i, e, o), e.innerHTML = r;
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
      i && N(e);
    }
  };
}
function Me(t) {
  let e, r, i = (
    /*_strings*/
    t[9].footer + ""
  );
  return {
    c() {
      e = R("div"), r = R("div"), c(r, "class", "svelte-15co9zy"), c(e, "class", "altcha-footer svelte-15co9zy");
    },
    m(o, l) {
      S(o, e, l), v(e, r), r.innerHTML = i;
    },
    p(o, l) {
      l[0] & /*_strings*/
      512 && i !== (i = /*_strings*/
      o[9].footer + "") && (r.innerHTML = i);
    },
    d(o) {
      o && N(e);
    }
  };
}
function Ot(t) {
  let e, r, i, o, l, s, f, a, u, j, C, M, V, D, p = (
    /*state*/
    t[5] === b.VERIFYING && je()
  );
  function H(d, I) {
    return (
      /*state*/
      d[5] === b.VERIFIED ? Gt : (
        /*state*/
        d[5] === b.VERIFYING ? Ut : Vt
      )
    );
  }
  let X = H(t), k = X(t), x = (
    /*hidelogo*/
    t[2] !== !0 && Ze(t)
  ), m = (
    /*error*/
    (t[8] || /*state*/
    t[5] === b.EXPIRED) && Te(t)
  ), y = (
    /*_strings*/
    t[9].footer && /*hidefooter*/
    t[1] !== !0 && Me(t)
  );
  return {
    c() {
      e = R("div"), r = R("div"), p && p.c(), i = B(), o = R("div"), l = R("input"), a = B(), u = R("div"), k.c(), j = B(), x && x.c(), C = B(), m && m.c(), M = B(), y && y.c(), c(l, "type", "checkbox"), c(l, "id", s = /*name*/
      t[3] + "_checkbox"), l.required = f = /*auto*/
      t[0] !== "onsubmit", c(l, "class", "svelte-15co9zy"), c(o, "class", "altcha-checkbox svelte-15co9zy"), Ae(
        o,
        "altcha-hidden",
        /*state*/
        t[5] === b.VERIFYING
      ), c(u, "class", "altcha-label svelte-15co9zy"), c(r, "class", "altcha-main svelte-15co9zy"), c(e, "class", "altcha svelte-15co9zy"), c(
        e,
        "data-state",
        /*state*/
        t[5]
      );
    },
    m(d, I) {
      S(d, e, I), v(e, r), p && p.m(r, null), v(r, i), v(r, o), v(o, l), l.checked = /*checked*/
      t[6], v(r, a), v(r, u), k.m(u, null), v(r, j), x && x.m(r, null), v(e, C), m && m.m(e, null), v(e, M), y && y.m(e, null), t[31](e), V || (D = [
        fe(
          l,
          "change",
          /*input_change_handler*/
          t[30]
        ),
        fe(
          l,
          "change",
          /*onCheckedChange*/
          t[10]
        ),
        fe(
          l,
          "invalid",
          /*onInvalid*/
          t[11]
        )
      ], V = !0);
    },
    p(d, I) {
      /*state*/
      d[5] === b.VERIFYING ? p || (p = je(), p.c(), p.m(r, i)) : p && (p.d(1), p = null), I[0] & /*name*/
      8 && s !== (s = /*name*/
      d[3] + "_checkbox") && c(l, "id", s), I[0] & /*auto*/
      1 && f !== (f = /*auto*/
      d[0] !== "onsubmit") && (l.required = f), I[0] & /*checked*/
      64 && (l.checked = /*checked*/
      d[6]), I[0] & /*state*/
      32 && Ae(
        o,
        "altcha-hidden",
        /*state*/
        d[5] === b.VERIFYING
      ), X === (X = H(d)) && k ? k.p(d, I) : (k.d(1), k = X(d), k && (k.c(), k.m(u, null))), /*hidelogo*/
      d[2] !== !0 ? x ? x.p(d, I) : (x = Ze(d), x.c(), x.m(r, null)) : x && (x.d(1), x = null), /*error*/
      d[8] || /*state*/
      d[5] === b.EXPIRED ? m ? m.p(d, I) : (m = Te(d), m.c(), m.m(e, M)) : m && (m.d(1), m = null), /*_strings*/
      d[9].footer && /*hidefooter*/
      d[1] !== !0 ? y ? y.p(d, I) : (y = Me(d), y.c(), y.m(e, null)) : y && (y.d(1), y = null), I[0] & /*state*/
      32 && c(
        e,
        "data-state",
        /*state*/
        d[5]
      );
    },
    i: ee,
    o: ee,
    d(d) {
      d && N(e), p && p.d(), k.d(), x && x.d(), m && m.d(), y && y.d(), t[31](null), V = !1, re(D);
    }
  };
}
const Ve = "Visit Altcha.org", Ye = "https://altcha.org/";
function Ue(t) {
  return JSON.parse(t);
}
function Ft() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function Ht(t, e, r) {
  var $e, Ce;
  let i, o, l, { auto: s = void 0 } = e, { blockspam: f = void 0 } = e, { challengeurl: a = void 0 } = e, { challengejson: u = void 0 } = e, { debug: j = !1 } = e, { expire: C = void 0 } = e, { hidefooter: M = !1 } = e, { hidelogo: V = !1 } = e, { name: D = "altcha" } = e, { maxnumber: p = 1e6 } = e, { mockerror: H = !1 } = e, { refetchonexpire: X = !0 } = e, { spamfilter: k = !1 } = e, { strings: x = void 0 } = e, { test: m = !1 } = e, { verifyurl: y = void 0 } = e, { workers: d = Math.min(16, navigator.hardwareConcurrency || 8) } = e, { workerurl: I = void 0 } = e;
  const ce = _t(), be = ["SHA-256", "SHA-384", "SHA-512"], ye = (Ce = ($e = document.documentElement.lang) == null ? void 0 : $e.split("-")) == null ? void 0 : Ce[0];
  let F = !1, ne, g = null, ae = null, W = null, U = b.UNVERIFIED, G = null;
  wt(() => {
    g && (g.removeEventListener("submit", we), g.removeEventListener("reset", _e), g.removeEventListener("focusin", ve), g = null), G && (clearTimeout(G), G = null);
  }), vt(() => {
    L("mounted", "0.5.0"), L("workers", d), m && L("using test mode"), C && ie(C), s !== void 0 && L("auto", s), g = ne.closest("form"), g && (g.addEventListener("submit", we), g.addEventListener("reset", _e), s === "onfocus" && g.addEventListener("focusin", ve)), s === "onload" && Y();
  });
  function L(...n) {
    (j || n.some((h) => h instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", ...n);
  }
  function ve(n) {
    U === b.UNVERIFIED && Y();
  }
  function we(n) {
    g && s === "onsubmit" && U === b.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), Y().then(() => {
      g == null || g.requestSubmit();
    }));
  }
  function _e() {
    oe();
  }
  function pe(n, h) {
    return btoa(JSON.stringify({
      algorithm: n.algorithm,
      challenge: n.challenge,
      number: h.number,
      salt: n.salt,
      signature: n.signature,
      test: m ? !0 : void 0,
      took: h.took
    }));
  }
  function ke(n) {
    if (!n.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (n.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!be.includes(n.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${be.join(", ")}`);
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
    if (m)
      return L("generating test challenge", { test: m }), Zt(typeof m != "boolean" ? +m : void 0);
    {
      if (!a)
        throw new Error("Attribute challengeurl not set.");
      L("fetching challenge from", a);
      const h = await fetch(a, {
        headers: {
          "x-altcha-spam-filter": k ? "1" : "0"
        }
      });
      if (h.status !== 200)
        throw new Error(`Server responded with ${h.status}.`);
      const w = h.headers.get("Expires"), z = h.headers.get("X-Altcha-Config"), A = await h.json(), Z = new URLSearchParams((n = A.salt.split("?")) == null ? void 0 : n[1]), P = Z.get("expires") || Z.get("expire");
      if (P) {
        const E = new Date(+P * 1e3), $ = isNaN(E.getTime()) ? 0 : E.getTime() - Date.now();
        $ > 0 && ie($);
      }
      if (z)
        try {
          const E = JSON.parse(z);
          E && typeof E == "object" && (E.verifyurl && (E.verifyurl = new URL(E.verifyurl, new URL(a)).toString()), Ee(E));
        } catch (E) {
          L("unable to configure from X-Altcha-Config", E);
        }
      if (!C && (w != null && w.length)) {
        const E = Date.parse(w);
        if (E) {
          const $ = E - Date.now();
          $ > 0 && ie($);
        }
      }
      return A;
    }
  }
  function xe() {
    a && X && U === b.VERIFIED ? Y() : oe(b.EXPIRED, l.expired);
  }
  async function Be(n) {
    let h = null;
    if ("Worker" in window) {
      try {
        h = await Ke(n.challenge, n.salt, n.algorithm, n.maxnumber);
      } catch (w) {
        L(w);
      }
      if ((h == null ? void 0 : h.number) !== void 0)
        return { data: n, solution: h };
    }
    return {
      data: n,
      solution: await Tt(n.challenge, n.salt, n.algorithm, n.maxnumber || p).promise
    };
  }
  async function Ke(n, h, w, z = typeof m == "number" ? m : p, A = Math.ceil(d)) {
    const Z = [];
    if (A < 1)
      throw new Error("Wrong number of workers configured.");
    if (A > 16)
      throw new Error("Too many workers. Max. 16 allowed workers.");
    for (let $ = 0; $ < A; $++)
      Z.push(createAltchaWorker(I));
    const P = Math.ceil(z / A), E = await Promise.all(Z.map(($, le) => {
      const Le = le * P;
      return new Promise((it) => {
        $.addEventListener("message", (Re) => {
          if (Re.data)
            for (const Ie of Z)
              Ie !== $ && Ie.postMessage({ type: "abort" });
          it(Re.data);
        }), $.postMessage({
          payload: {
            alg: w,
            challenge: n,
            max: Le + P,
            salt: h,
            start: Le
          },
          type: "work"
        });
      });
    }));
    for (const $ of Z)
      $.terminate();
    return E.find(($) => !!$) || null;
  }
  function Je() {
    [b.UNVERIFIED, b.ERROR, b.EXPIRED].includes(U) ? k && (g == null ? void 0 : g.reportValidity()) === !1 ? r(6, F = !1) : Y() : r(6, F = !0);
  }
  function Qe() {
    U === b.VERIFYING && alert(l.waitAlert);
  }
  function ie(n) {
    L("expire", n), G && (clearTimeout(G), G = null), n < 1 ? xe() : G = setTimeout(xe, n);
  }
  function qe(n) {
    var w;
    const h = g == null ? void 0 : g.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((w = h == null ? void 0 : h.value) == null ? void 0 : w.slice(h.value.indexOf("@"))) || void 0;
  }
  function et(n) {
    return [
      ...(g == null ? void 0 : g.querySelectorAll(n != null && n.length ? n.map((w) => `input[name="${w}"]`).join(", ") : 'input[type="email"]:not([data-no-spamfilter]), input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (w, z) => {
        const A = z.name, Z = z.value.trim();
        return A && Z && (w[A] = Z), w;
      },
      {}
    );
  }
  async function tt(n) {
    if (!y)
      throw new Error("Attribute verifyurl not set.");
    L("requesting server verification from", y);
    const h = { payload: n };
    if (k) {
      const { email: A, expectedLanguages: Z, expectedCountries: P, fields: E, ipAddress: $, timeZone: le } = typeof k == "object" ? k : {
        email: void 0,
        expectedCountries: void 0,
        expectedLanguages: void 0,
        fields: void 0,
        ipAddress: void 0,
        timeZone: void 0
      };
      h.ipAddress = $ === !1 ? void 0 : $ || "auto", h.email = A === !1 ? void 0 : qe(A), h.fields = E === !1 ? void 0 : et(E), h.timeZone = le === !1 ? void 0 : le || Ft(), h.expectedCountries = P, h.expectedLanguages = Z || (ye ? [ye] : void 0);
    }
    const w = await fetch(y, {
      body: JSON.stringify(h),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (w.status !== 200)
      throw new Error(`Server responded with ${w.status}.`);
    const z = await w.json();
    if (z != null && z.payload && r(4, W = z.payload), ce("serververification", z), f && z.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  function Ee(n) {
    n.auto !== void 0 && (r(0, s = n.auto), s === "onload" && Y()), n.expire !== void 0 && (ie(n.expire), r(14, C = n.expire)), n.challenge && (ke(n.challenge), i = n.challenge), n.challengeurl !== void 0 && r(12, a = n.challengeurl), n.debug !== void 0 && r(13, j = !!n.debug), n.hidefooter !== void 0 && r(1, M = !!n.hidefooter), n.hidelogo !== void 0 && r(2, V = !!n.hidelogo), n.maxnumber !== void 0 && r(15, p = +n.maxnumber), n.mockerror !== void 0 && r(16, H = !!n.mockerror), n.name !== void 0 && r(3, D = n.name), n.refetchonexpire !== void 0 && r(17, X = !!n.refetchonexpire), n.spamfilter !== void 0 && r(18, k = typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && r(29, o = n.strings), n.test !== void 0 && r(19, m = typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && r(20, y = n.verifyurl), n.workers !== void 0 && r(21, d = +n.workers);
  }
  function oe(n = b.UNVERIFIED, h = null) {
    G && (clearTimeout(G), G = null), r(6, F = !1), r(8, ae = h), r(4, W = null), r(5, U = n);
  }
  async function Y() {
    return oe(b.VERIFYING), Pe().then((n) => (ke(n), L("challenge", n), Be(n))).then(({ data: n, solution: h }) => {
      if (L("solution", h), (h == null ? void 0 : h.number) !== void 0) {
        if (y)
          return tt(pe(n, h));
        r(4, W = pe(n, h)), L("payload", W);
      } else
        throw L("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      pt().then(() => {
        r(5, U = b.VERIFIED), r(6, F = !0), L("verified"), ce("verified", { payload: W });
      });
    }).catch((n) => {
      L(n), r(5, U = b.ERROR), r(6, F = !1), r(8, ae = n.message);
    });
  }
  function rt() {
    F = this.checked, r(6, F);
  }
  function nt(n) {
    he[n ? "unshift" : "push"](() => {
      ne = n, r(7, ne);
    });
  }
  return t.$$set = (n) => {
    "auto" in n && r(0, s = n.auto), "blockspam" in n && r(22, f = n.blockspam), "challengeurl" in n && r(12, a = n.challengeurl), "challengejson" in n && r(23, u = n.challengejson), "debug" in n && r(13, j = n.debug), "expire" in n && r(14, C = n.expire), "hidefooter" in n && r(1, M = n.hidefooter), "hidelogo" in n && r(2, V = n.hidelogo), "name" in n && r(3, D = n.name), "maxnumber" in n && r(15, p = n.maxnumber), "mockerror" in n && r(16, H = n.mockerror), "refetchonexpire" in n && r(17, X = n.refetchonexpire), "spamfilter" in n && r(18, k = n.spamfilter), "strings" in n && r(24, x = n.strings), "test" in n && r(19, m = n.test), "verifyurl" in n && r(20, y = n.verifyurl), "workers" in n && r(21, d = n.workers), "workerurl" in n && r(25, I = n.workerurl);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*challengejson*/
    8388608 && (i = u ? Ue(u) : void 0), t.$$.dirty[0] & /*strings*/
    16777216 && r(29, o = x ? Ue(x) : {}), t.$$.dirty[0] & /*parsedStrings*/
    536870912 && r(9, l = {
      ariaLinkLabel: Ve,
      error: "Verification failed. Try again later.",
      expired: "Verification expired. Try again.",
      footer: `Protected by <a href="${Ye}" target="_blank" aria-label="${o.ariaLinkLabel || Ve}">ALTCHA</a>`,
      label: "I'm not a robot",
      verified: "Verified",
      verifying: "Verifying...",
      waitAlert: "Verifying... please wait.",
      ...o
    }), t.$$.dirty[0] & /*payload, state*/
    48 && ce("statechange", { payload: W, state: U });
  }, [
    s,
    M,
    V,
    D,
    W,
    U,
    F,
    ne,
    ae,
    l,
    Je,
    Qe,
    a,
    j,
    C,
    p,
    H,
    X,
    k,
    m,
    y,
    d,
    f,
    u,
    x,
    I,
    Ee,
    oe,
    Y,
    o,
    rt,
    nt
  ];
}
class Wt extends Nt {
  constructor(e) {
    super(), It(
      this,
      e,
      Ht,
      Ot,
      at,
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
        workerurl: 25,
        configure: 26,
        reset: 27,
        verify: 28
      },
      Mt,
      [-1, -1]
    );
  }
  get auto() {
    return this.$$.ctx[0];
  }
  set auto(e) {
    this.$$set({ auto: e }), _();
  }
  get blockspam() {
    return this.$$.ctx[22];
  }
  set blockspam(e) {
    this.$$set({ blockspam: e }), _();
  }
  get challengeurl() {
    return this.$$.ctx[12];
  }
  set challengeurl(e) {
    this.$$set({ challengeurl: e }), _();
  }
  get challengejson() {
    return this.$$.ctx[23];
  }
  set challengejson(e) {
    this.$$set({ challengejson: e }), _();
  }
  get debug() {
    return this.$$.ctx[13];
  }
  set debug(e) {
    this.$$set({ debug: e }), _();
  }
  get expire() {
    return this.$$.ctx[14];
  }
  set expire(e) {
    this.$$set({ expire: e }), _();
  }
  get hidefooter() {
    return this.$$.ctx[1];
  }
  set hidefooter(e) {
    this.$$set({ hidefooter: e }), _();
  }
  get hidelogo() {
    return this.$$.ctx[2];
  }
  set hidelogo(e) {
    this.$$set({ hidelogo: e }), _();
  }
  get name() {
    return this.$$.ctx[3];
  }
  set name(e) {
    this.$$set({ name: e }), _();
  }
  get maxnumber() {
    return this.$$.ctx[15];
  }
  set maxnumber(e) {
    this.$$set({ maxnumber: e }), _();
  }
  get mockerror() {
    return this.$$.ctx[16];
  }
  set mockerror(e) {
    this.$$set({ mockerror: e }), _();
  }
  get refetchonexpire() {
    return this.$$.ctx[17];
  }
  set refetchonexpire(e) {
    this.$$set({ refetchonexpire: e }), _();
  }
  get spamfilter() {
    return this.$$.ctx[18];
  }
  set spamfilter(e) {
    this.$$set({ spamfilter: e }), _();
  }
  get strings() {
    return this.$$.ctx[24];
  }
  set strings(e) {
    this.$$set({ strings: e }), _();
  }
  get test() {
    return this.$$.ctx[19];
  }
  set test(e) {
    this.$$set({ test: e }), _();
  }
  get verifyurl() {
    return this.$$.ctx[20];
  }
  set verifyurl(e) {
    this.$$set({ verifyurl: e }), _();
  }
  get workers() {
    return this.$$.ctx[21];
  }
  set workers(e) {
    this.$$set({ workers: e }), _();
  }
  get workerurl() {
    return this.$$.ctx[25];
  }
  set workerurl(e) {
    this.$$set({ workerurl: e }), _();
  }
  get configure() {
    return this.$$.ctx[26];
  }
  get reset() {
    return this.$$.ctx[27];
  }
  get verify() {
    return this.$$.ctx[28];
  }
}
customElements.define("altcha-widget", zt(Wt, { auto: {}, blockspam: {}, challengeurl: {}, challengejson: {}, debug: { type: "Boolean" }, expire: {}, hidefooter: { type: "Boolean" }, hidelogo: { type: "Boolean" }, name: {}, maxnumber: {}, mockerror: { type: "Boolean" }, refetchonexpire: { type: "Boolean" }, spamfilter: { type: "Boolean" }, strings: {}, test: { type: "Boolean" }, verifyurl: {}, workers: {}, workerurl: {} }, [], ["configure", "reset", "verify"], !1));
globalThis.createAltchaWorker = (t) => t ? new Worker(new URL(t)) : new ct();
export {
  Wt as Altcha
};
