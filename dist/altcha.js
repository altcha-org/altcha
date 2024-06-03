var nt = Object.defineProperty;
var it = (r, e, t) => e in r ? nt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var T = (r, e, t) => (it(r, typeof e != "symbol" ? e + "" : e, t), t);
function q() {
}
function Ve(r) {
  return r();
}
function Ie() {
  return /* @__PURE__ */ Object.create(null);
}
function re(r) {
  r.forEach(Ve);
}
function Ue(r) {
  return typeof r == "function";
}
function ot(r, e) {
  return r != r ? e == e : r !== e || r && typeof r == "object" || typeof r == "function";
}
function lt(r) {
  return Object.keys(r).length === 0;
}
function v(r, e) {
  r.appendChild(e);
}
function st(r, e, t) {
  const i = ct(r);
  if (!i.getElementById(e)) {
    const o = R("style");
    o.id = e, o.textContent = t, at(i, o);
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
  return v(
    /** @type {Document} */
    r.head || r,
    e
  ), e.sheet;
}
function j(r, e, t) {
  r.insertBefore(e, t || null);
}
function N(r) {
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
function ze(r, e, t) {
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
let te;
function ee(r) {
  te = r;
}
function me() {
  if (!te)
    throw new Error("Function called outside component initialization");
  return te;
}
function mt(r) {
  me().$$.on_mount.push(r);
}
function gt(r) {
  me().$$.on_destroy.push(r);
}
function bt() {
  const r = me();
  return (e, t, { cancelable: i = !1 } = {}) => {
    const o = r.$$.callbacks[e];
    if (o) {
      const l = ht(
        /** @type {string} */
        e,
        t,
        { cancelable: i }
      );
      return o.slice().forEach((s) => {
        s.call(r, l);
      }), !l.defaultPrevented;
    }
    return !0;
  };
}
const J = [], ue = [];
let Q = [];
const Ne = [], Ge = /* @__PURE__ */ Promise.resolve();
let he = !1;
function De() {
  he || (he = !0, Ge.then($));
}
function yt() {
  return De(), Ge;
}
function de(r) {
  Q.push(r);
}
const fe = /* @__PURE__ */ new Set();
let K = 0;
function $() {
  if (K !== 0)
    return;
  const r = te;
  do {
    try {
      for (; K < J.length; ) {
        const e = J[K];
        K++, ee(e), vt(e.$$);
      }
    } catch (e) {
      throw J.length = 0, K = 0, e;
    }
    for (ee(null), J.length = 0, K = 0; ue.length; )
      ue.pop()();
    for (let e = 0; e < Q.length; e += 1) {
      const t = Q[e];
      fe.has(t) || (fe.add(t), t());
    }
    Q.length = 0;
  } while (J.length);
  for (; Ne.length; )
    Ne.pop()();
  he = !1, fe.clear(), ee(r);
}
function vt(r) {
  if (r.fragment !== null) {
    r.update(), re(r.before_update);
    const e = r.dirty;
    r.dirty = [-1], r.fragment && r.fragment.p(r.ctx, e), r.after_update.forEach(de);
  }
}
function wt(r) {
  const e = [], t = [];
  Q.forEach((i) => r.indexOf(i) === -1 ? e.push(i) : t.push(i)), t.forEach((i) => i()), Q = e;
}
const pt = /* @__PURE__ */ new Set();
function _t(r, e) {
  r && r.i && (pt.delete(r), r.i(e));
}
function kt(r, e, t) {
  const { fragment: i, after_update: o } = r.$$;
  i && i.m(e, t), de(() => {
    const l = r.$$.on_mount.map(Ve).filter(Ue);
    r.$$.on_destroy ? r.$$.on_destroy.push(...l) : re(l), r.$$.on_mount = [];
  }), o.forEach(de);
}
function xt(r, e) {
  const t = r.$$;
  t.fragment !== null && (wt(t.after_update), re(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Et(r, e) {
  r.$$.dirty[0] === -1 && (J.push(r), De(), r.$$.dirty.fill(0)), r.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function $t(r, e, t, i, o, l, s = null, f = [-1]) {
  const a = te;
  ee(r);
  const h = r.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: q,
    not_equal: o,
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
  let Z = !1;
  if (h.ctx = t ? t(r, e.props || {}, (C, M, ...V) => {
    const D = V.length ? V[0] : M;
    return h.ctx && o(h.ctx[C], h.ctx[C] = D) && (!h.skip_bound && h.bound[C] && h.bound[C](D), Z && Et(r, C)), M;
  }) : [], h.update(), Z = !0, re(h.before_update), h.fragment = i ? i(h.ctx) : !1, e.target) {
    if (e.hydrate) {
      const C = ut(e.target);
      h.fragment && h.fragment.l(C), C.forEach(N);
    } else
      h.fragment && h.fragment.c();
    e.intro && _t(r.$$.fragment), kt(r, e.target, e.anchor), $();
  }
  ee(a);
}
let Xe;
typeof HTMLElement == "function" && (Xe = class extends HTMLElement {
  constructor(e, t, i) {
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
    this.$$ctor = e, this.$$s = t, i && this.attachShadow({ mode: "open" });
  }
  addEventListener(e, t, i) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
      const o = this.$$c.$on(e, t);
      this.$$l_u.set(t, o);
    }
    super.addEventListener(e, t, i);
  }
  removeEventListener(e, t, i) {
    if (super.removeEventListener(e, t, i), this.$$c) {
      const o = this.$$l_u.get(t);
      o && (o(), this.$$l_u.delete(t));
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
            m: function(h, Z) {
              j(h, s, Z);
            },
            d: function(h) {
              h && N(s);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, i = dt(this);
      for (const l of this.$$s)
        l in i && (t[l] = [e(l)]);
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
          $$slots: t,
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
  attributeChangedCallback(e, t, i) {
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
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function se(r, e, t, i) {
  var l;
  const o = (l = t[r]) == null ? void 0 : l.type;
  if (e = o === "Boolean" && typeof e != "boolean" ? e != null : e, !i || !t[r])
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
function Ct(r, e, t, i, o, l) {
  let s = class extends Xe {
    constructor() {
      super(r, t, o), this.$$p_d = e;
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
        a = se(f, a, e), this.$$d[f] = a, (h = this.$$c) == null || h.$set({ [f]: a });
      }
    });
  }), i.forEach((f) => {
    Object.defineProperty(s.prototype, f, {
      get() {
        var a;
        return (a = this.$$c) == null ? void 0 : a[f];
      }
    });
  }), l && (s = l(s)), r.element = /** @type {any} */
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
    xt(this, 1), this.$destroy = q;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!Ue(t))
      return q;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return i.push(t), () => {
      const o = i.indexOf(t);
      o !== -1 && i.splice(o, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !lt(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Rt = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Rt);
const Oe = "KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2NvbnN0IGY9bmV3IFRleHRFbmNvZGVyO2Z1bmN0aW9uIGQoZSl7cmV0dXJuWy4uLm5ldyBVaW50OEFycmF5KGUpXS5tYXAodD0+dC50b1N0cmluZygxNikucGFkU3RhcnQoMiwiMCIpKS5qb2luKCIiKX1hc3luYyBmdW5jdGlvbiBwKGUsdCxvKXtyZXR1cm4gZChhd2FpdCBjcnlwdG8uc3VidGxlLmRpZ2VzdChvLnRvVXBwZXJDYXNlKCksZi5lbmNvZGUoZSt0KSkpfWZ1bmN0aW9uIGcoZSx0LG89IlNIQS0yNTYiLGw9MWU2LGM9MCl7Y29uc3QgYT1uZXcgQWJvcnRDb250cm9sbGVyLGk9RGF0ZS5ub3coKTtyZXR1cm57cHJvbWlzZTooYXN5bmMoKT0+e2ZvcihsZXQgbj1jO248PWw7bis9MSl7aWYoYS5zaWduYWwuYWJvcnRlZClyZXR1cm4gbnVsbDtpZihhd2FpdCBwKHQsbixvKT09PWUpcmV0dXJue251bWJlcjpuLHRvb2s6RGF0ZS5ub3coKS1pfX1yZXR1cm4gbnVsbH0pKCksY29udHJvbGxlcjphfX1sZXQgcjtvbm1lc3NhZ2U9YXN5bmMgZT0+e2NvbnN0e3R5cGU6dCxwYXlsb2FkOm99PWUuZGF0YTtpZih0PT09ImFib3J0IilyPT1udWxsfHxyLmFib3J0KCkscj12b2lkIDA7ZWxzZSBpZih0PT09IndvcmsiKXtjb25zdHthbGc6bCxjaGFsbGVuZ2U6YyxtYXg6YSxzYWx0Omksc3RhcnQ6dX09b3x8e30sbj1nKGMsaSxsLGEsdSk7cj1uLmNvbnRyb2xsZXIsbi5wcm9taXNlLnRoZW4ocz0+e3NlbGYucG9zdE1lc3NhZ2UocyYmey4uLnMsd29ya2VyOiEwfSl9KX19fSkoKTsK", It = (r) => Uint8Array.from(atob(r), (e) => e.charCodeAt(0)), Se = typeof window < "u" && window.Blob && new Blob([It(Oe)], { type: "text/javascript;charset=utf-8" });
function zt(r) {
  let e;
  try {
    if (e = Se && (window.URL || window.webkitURL).createObjectURL(Se), !e)
      throw "";
    const t = new Worker(e, {
      name: r == null ? void 0 : r.name
    });
    return t.addEventListener("error", () => {
      (window.URL || window.webkitURL).revokeObjectURL(e);
    }), t;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + Oe,
      {
        name: r == null ? void 0 : r.name
      }
    );
  } finally {
    e && (window.URL || window.webkitURL).revokeObjectURL(e);
  }
}
const Nt = new TextEncoder();
function St(r) {
  return [...new Uint8Array(r)].map((e) => e.toString(16).padStart(2, "0")).join("");
}
async function jt(r, e = "SHA-256", t = 1e5) {
  const i = Date.now().toString(16);
  r || (r = Math.round(Math.random() * t));
  const o = await Fe(i, r, e);
  return {
    algorithm: e,
    challenge: o,
    salt: i,
    signature: ""
  };
}
async function Fe(r, e, t) {
  return St(
    await crypto.subtle.digest(
      t.toUpperCase(),
      Nt.encode(r + e)
    )
  );
}
function Zt(r, e, t = "SHA-256", i = 1e6, o = 0) {
  const l = new AbortController(), s = Date.now();
  return {
    promise: (async () => {
      for (let a = o; a <= i; a += 1) {
        if (l.signal.aborted)
          return null;
        if (await Fe(e, a, t) === r)
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
var b = /* @__PURE__ */ ((r) => (r.ERROR = "error", r.VERIFIED = "verified", r.VERIFYING = "verifying", r.UNVERIFIED = "unverified", r.EXPIRED = "expired", r))(b || {});
function At(r) {
  st(r, "svelte-15co9zy", ".altcha.svelte-15co9zy.svelte-15co9zy{background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);overflow:hidden;position:relative;text-align:left}.altcha.svelte-15co9zy.svelte-15co9zy:focus-within{border-color:var(--altcha-color-border-focus, currentColor)}.altcha-main.svelte-15co9zy.svelte-15co9zy{align-items:center;display:flex;gap:0.4rem;padding:0.7rem}.altcha-label.svelte-15co9zy.svelte-15co9zy{flex-grow:1}.altcha-label.svelte-15co9zy label.svelte-15co9zy{cursor:pointer}.altcha-logo.svelte-15co9zy.svelte-15co9zy{color:currentColor;opacity:0.3}.altcha-logo.svelte-15co9zy.svelte-15co9zy:hover{opacity:1}.altcha-error.svelte-15co9zy.svelte-15co9zy{color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem}.altcha-footer.svelte-15co9zy.svelte-15co9zy{align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.4;padding:0.2rem 0.7rem;text-align:right}.altcha-footer.svelte-15co9zy.svelte-15co9zy:hover{opacity:1}.altcha-footer.svelte-15co9zy>.svelte-15co9zy:first-child{flex-grow:1}.altcha-footer.svelte-15co9zy a{color:currentColor}.altcha-checkbox.svelte-15co9zy.svelte-15co9zy{display:flex;align-items:center;height:24px;width:24px}.altcha-checkbox.svelte-15co9zy input.svelte-15co9zy{width:18px;height:18px;margin:0}.altcha-hidden.svelte-15co9zy.svelte-15co9zy{display:none}.altcha-spinner.svelte-15co9zy.svelte-15co9zy{animation:svelte-15co9zy-altcha-spinner 0.75s infinite linear;transform-origin:center}@keyframes svelte-15co9zy-altcha-spinner{100%{transform:rotate(360deg)}}");
}
function je(r) {
  let e, t, i;
  return {
    c() {
      e = O("svg"), t = O("path"), i = O("path"), c(t, "d", "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"), c(t, "fill", "currentColor"), c(t, "opacity", ".25"), c(i, "d", "M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"), c(i, "fill", "currentColor"), c(i, "class", "altcha-spinner svelte-15co9zy"), c(e, "width", "24"), c(e, "height", "24"), c(e, "viewBox", "0 0 24 24"), c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(o, l) {
      j(o, e, l), v(e, t), v(e, i);
    },
    d(o) {
      o && N(e);
    }
  };
}
function Tt(r) {
  let e, t = (
    /*_strings*/
    r[9].label + ""
  ), i;
  return {
    c() {
      e = R("label"), c(e, "for", i = /*name*/
      r[3] + "_checkbox"), c(e, "class", "svelte-15co9zy");
    },
    m(o, l) {
      j(o, e, l), e.innerHTML = t;
    },
    p(o, l) {
      l[0] & /*_strings*/
      512 && t !== (t = /*_strings*/
      o[9].label + "") && (e.innerHTML = t), l[0] & /*name*/
      8 && i !== (i = /*name*/
      o[3] + "_checkbox") && c(e, "for", i);
    },
    d(o) {
      o && N(e);
    }
  };
}
function Mt(r) {
  let e, t = (
    /*_strings*/
    r[9].verifying + ""
  );
  return {
    c() {
      e = R("span");
    },
    m(i, o) {
      j(i, e, o), e.innerHTML = t;
    },
    p(i, o) {
      o[0] & /*_strings*/
      512 && t !== (t = /*_strings*/
      i[9].verifying + "") && (e.innerHTML = t);
    },
    d(i) {
      i && N(e);
    }
  };
}
function Vt(r) {
  let e, t = (
    /*_strings*/
    r[9].verified + ""
  ), i, o;
  return {
    c() {
      e = R("span"), i = B(), o = R("input"), c(o, "type", "hidden"), c(
        o,
        "name",
        /*name*/
        r[3]
      ), o.value = /*payload*/
      r[4];
    },
    m(l, s) {
      j(l, e, s), e.innerHTML = t, j(l, i, s), j(l, o, s);
    },
    p(l, s) {
      s[0] & /*_strings*/
      512 && t !== (t = /*_strings*/
      l[9].verified + "") && (e.innerHTML = t), s[0] & /*name*/
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
function Ze(r) {
  let e, t, i, o, l, s;
  return {
    c() {
      e = R("div"), t = R("a"), i = O("svg"), o = O("path"), l = O("path"), s = O("path"), c(o, "d", "M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z"), c(o, "fill", "currentColor"), c(l, "d", "M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z"), c(l, "fill", "currentColor"), c(s, "d", "M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z"), c(s, "fill", "currentColor"), c(i, "width", "22"), c(i, "height", "22"), c(i, "viewBox", "0 0 20 20"), c(i, "fill", "none"), c(i, "xmlns", "http://www.w3.org/2000/svg"), c(t, "href", He), c(t, "target", "_blank"), c(t, "class", "altcha-logo svelte-15co9zy");
    },
    m(f, a) {
      j(f, e, a), v(e, t), v(t, i), v(i, o), v(i, l), v(i, s);
    },
    p: q,
    d(f) {
      f && N(e);
    }
  };
}
function Ae(r) {
  let e, t, i, o;
  function l(a, h) {
    return (
      /*state*/
      a[5] === b.EXPIRED ? Gt : Ut
    );
  }
  let s = l(r), f = s(r);
  return {
    c() {
      e = R("div"), t = O("svg"), i = O("path"), o = B(), f.c(), c(i, "stroke-linecap", "round"), c(i, "stroke-linejoin", "round"), c(i, "d", "M6 18L18 6M6 6l12 12"), c(t, "width", "14"), c(t, "height", "14"), c(t, "xmlns", "http://www.w3.org/2000/svg"), c(t, "fill", "none"), c(t, "viewBox", "0 0 24 24"), c(t, "stroke-width", "1.5"), c(t, "stroke", "currentColor"), c(e, "class", "altcha-error svelte-15co9zy");
    },
    m(a, h) {
      j(a, e, h), v(e, t), v(t, i), v(e, o), f.m(e, null);
    },
    p(a, h) {
      s === (s = l(a)) && f ? f.p(a, h) : (f.d(1), f = s(a), f && (f.c(), f.m(e, null)));
    },
    d(a) {
      a && N(e), f.d();
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
    m(i, o) {
      j(i, e, o), e.innerHTML = t;
    },
    p(i, o) {
      o[0] & /*_strings*/
      512 && t !== (t = /*_strings*/
      i[9].error + "") && (e.innerHTML = t), o[0] & /*error*/
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
function Gt(r) {
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
    m(i, o) {
      j(i, e, o), e.innerHTML = t;
    },
    p(i, o) {
      o[0] & /*_strings*/
      512 && t !== (t = /*_strings*/
      i[9].expired + "") && (e.innerHTML = t), o[0] & /*error*/
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
function Te(r) {
  let e, t, i = (
    /*_strings*/
    r[9].footer + ""
  );
  return {
    c() {
      e = R("div"), t = R("div"), c(t, "class", "svelte-15co9zy"), c(e, "class", "altcha-footer svelte-15co9zy");
    },
    m(o, l) {
      j(o, e, l), v(e, t), t.innerHTML = i;
    },
    p(o, l) {
      l[0] & /*_strings*/
      512 && i !== (i = /*_strings*/
      o[9].footer + "") && (t.innerHTML = i);
    },
    d(o) {
      o && N(e);
    }
  };
}
function Dt(r) {
  let e, t, i, o, l, s, f, a, h, Z, C, M, V, D, p = (
    /*state*/
    r[5] === b.VERIFYING && je()
  );
  function H(d, I) {
    return (
      /*state*/
      d[5] === b.VERIFIED ? Vt : (
        /*state*/
        d[5] === b.VERIFYING ? Mt : Tt
      )
    );
  }
  let X = H(r), _ = X(r), k = (
    /*hidelogo*/
    r[2] !== !0 && Ze()
  ), m = (
    /*error*/
    (r[8] || /*state*/
    r[5] === b.EXPIRED) && Ae(r)
  ), y = (
    /*_strings*/
    r[9].footer && /*hidefooter*/
    r[1] !== !0 && Te(r)
  );
  return {
    c() {
      e = R("div"), t = R("div"), p && p.c(), i = B(), o = R("div"), l = R("input"), a = B(), h = R("div"), _.c(), Z = B(), k && k.c(), C = B(), m && m.c(), M = B(), y && y.c(), c(l, "type", "checkbox"), c(l, "id", s = /*name*/
      r[3] + "_checkbox"), l.required = f = /*auto*/
      r[0] !== "onsubmit", c(l, "class", "svelte-15co9zy"), c(o, "class", "altcha-checkbox svelte-15co9zy"), ze(
        o,
        "altcha-hidden",
        /*state*/
        r[5] === b.VERIFYING
      ), c(h, "class", "altcha-label svelte-15co9zy"), c(t, "class", "altcha-main svelte-15co9zy"), c(e, "class", "altcha svelte-15co9zy"), c(
        e,
        "data-state",
        /*state*/
        r[5]
      );
    },
    m(d, I) {
      j(d, e, I), v(e, t), p && p.m(t, null), v(t, i), v(t, o), v(o, l), l.checked = /*checked*/
      r[6], v(t, a), v(t, h), _.m(h, null), v(t, Z), k && k.m(t, null), v(e, C), m && m.m(e, null), v(e, M), y && y.m(e, null), r[30](e), V || (D = [
        ae(
          l,
          "change",
          /*input_change_handler*/
          r[29]
        ),
        ae(
          l,
          "change",
          /*onCheckedChange*/
          r[10]
        ),
        ae(
          l,
          "invalid",
          /*onInvalid*/
          r[11]
        )
      ], V = !0);
    },
    p(d, I) {
      /*state*/
      d[5] === b.VERIFYING ? p || (p = je(), p.c(), p.m(t, i)) : p && (p.d(1), p = null), I[0] & /*name*/
      8 && s !== (s = /*name*/
      d[3] + "_checkbox") && c(l, "id", s), I[0] & /*auto*/
      1 && f !== (f = /*auto*/
      d[0] !== "onsubmit") && (l.required = f), I[0] & /*checked*/
      64 && (l.checked = /*checked*/
      d[6]), I[0] & /*state*/
      32 && ze(
        o,
        "altcha-hidden",
        /*state*/
        d[5] === b.VERIFYING
      ), X === (X = H(d)) && _ ? _.p(d, I) : (_.d(1), _ = X(d), _ && (_.c(), _.m(h, null))), /*hidelogo*/
      d[2] !== !0 ? k ? k.p(d, I) : (k = Ze(), k.c(), k.m(t, null)) : k && (k.d(1), k = null), /*error*/
      d[8] || /*state*/
      d[5] === b.EXPIRED ? m ? m.p(d, I) : (m = Ae(d), m.c(), m.m(e, M)) : m && (m.d(1), m = null), /*_strings*/
      d[9].footer && /*hidefooter*/
      d[1] !== !0 ? y ? y.p(d, I) : (y = Te(d), y.c(), y.m(e, null)) : y && (y.d(1), y = null), I[0] & /*state*/
      32 && c(
        e,
        "data-state",
        /*state*/
        d[5]
      );
    },
    i: q,
    o: q,
    d(d) {
      d && N(e), p && p.d(), _.d(), k && k.d(), m && m.d(), y && y.d(), r[30](null), V = !1, re(D);
    }
  };
}
const He = "https://altcha.org/";
function Me(r) {
  return JSON.parse(r);
}
function Xt() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function Ot(r, e, t) {
  var Ee, $e;
  let i, o, l, { auto: s = void 0 } = e, { blockspam: f = void 0 } = e, { challengeurl: a = void 0 } = e, { challengejson: h = void 0 } = e, { debug: Z = !1 } = e, { expire: C = void 0 } = e, { hidefooter: M = !1 } = e, { hidelogo: V = !1 } = e, { name: D = "altcha" } = e, { maxnumber: p = 1e6 } = e, { mockerror: H = !1 } = e, { refetchonexpire: X = !0 } = e, { spamfilter: _ = !1 } = e, { strings: k = void 0 } = e, { test: m = !1 } = e, { verifyurl: y = void 0 } = e, { workers: d = Math.min(16, navigator.hardwareConcurrency || 8) } = e;
  const I = bt(), ge = ["SHA-256", "SHA-384", "SHA-512"], be = ($e = (Ee = document.documentElement.lang) == null ? void 0 : Ee.split("-")) == null ? void 0 : $e[0];
  let F = !1, ne, g = null, ce = null, Y = null, U = b.UNVERIFIED, G = null;
  gt(() => {
    g && (g.removeEventListener("submit", ve), g.removeEventListener("reset", we), g.removeEventListener("focusin", ye), g = null), G && (clearTimeout(G), G = null);
  }), mt(() => {
    L("mounted", "0.4.2"), L("workers", d), m && L("using test mode"), C && ie(C), s !== void 0 && L("auto", s), g = ne.closest("form"), g && (g.addEventListener("submit", ve), g.addEventListener("reset", we), s === "onfocus" && g.addEventListener("focusin", ye)), s === "onload" && P();
  });
  function L(...n) {
    (Z || n.some((u) => u instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", ...n);
  }
  function ye(n) {
    U === b.UNVERIFIED && P();
  }
  function ve(n) {
    g && s === "onsubmit" && U === b.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), P().then(() => {
      g == null || g.requestSubmit();
    }));
  }
  function we() {
    oe();
  }
  function pe(n, u) {
    return btoa(JSON.stringify({
      algorithm: n.algorithm,
      challenge: n.challenge,
      number: u.number,
      salt: n.salt,
      signature: n.signature,
      test: m ? !0 : void 0,
      took: u.took
    }));
  }
  function _e(n) {
    if (!n.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (n.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!ge.includes(n.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${ge.join(", ")}`);
    if (!n.challenge || n.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!n.salt || n.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function Ye() {
    var n;
    if (H)
      throw L("mocking error"), new Error("Mocked error.");
    if (i)
      return L("using provided json data"), i;
    if (m)
      return L("generating test challenge", { test: m }), jt(typeof m != "boolean" ? +m : void 0);
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
      const w = u.headers.get("Expires"), z = u.headers.get("X-Altcha-Config"), S = await u.json(), A = new URLSearchParams((n = S.salt.split("?")) == null ? void 0 : n[1]), W = A.get("expires") || A.get("expire");
      if (W) {
        const x = new Date(+W * 1e3), E = isNaN(x.getTime()) ? 0 : x.getTime() - Date.now();
        E > 0 && ie(E);
      }
      if (z)
        try {
          const x = JSON.parse(z);
          x && typeof x == "object" && (x.verifyurl && (x.verifyurl = new URL(x.verifyurl, new URL(a)).toString()), xe(x));
        } catch (x) {
          L("unable to configure from X-Altcha-Config", x);
        }
      if (!C && (w != null && w.length)) {
        const x = Date.parse(w);
        if (x) {
          const E = x - Date.now();
          E > 0 && ie(E);
        }
      }
      return S;
    }
  }
  function ke() {
    a && X && U === b.VERIFIED ? P() : oe(b.EXPIRED, l.expired);
  }
  async function Pe(n) {
    let u = null;
    if ("Worker" in window) {
      try {
        u = await We(n.challenge, n.salt, n.algorithm, n.maxnumber);
      } catch (w) {
        L(w);
      }
      if ((u == null ? void 0 : u.number) !== void 0)
        return { data: n, solution: u };
    }
    return {
      data: n,
      solution: await Zt(n.challenge, n.salt, n.algorithm, n.maxnumber || p).promise
    };
  }
  async function We(n, u, w, z = typeof m == "number" ? m : p, S = Math.ceil(d)) {
    const A = [];
    if (S < 1)
      throw new Error("Wrong number of workers configured.");
    if (S > 16)
      throw new Error("Too many workers. Max. 16 allowed workers.");
    for (let E = 0; E < S; E++)
      A.push(new zt());
    const W = Math.ceil(z / S), x = await Promise.all(A.map((E, le) => {
      const Ce = le * W;
      return new Promise((rt) => {
        E.addEventListener("message", (Le) => {
          if (Le.data)
            for (const Re of A)
              Re !== E && Re.postMessage({ type: "abort" });
          rt(Le.data);
        }), E.postMessage({
          payload: {
            alg: w,
            challenge: n,
            max: Ce + W,
            salt: u,
            start: Ce
          },
          type: "work"
        });
      });
    }));
    for (const E of A)
      E.terminate();
    return x.find((E) => !!E) || null;
  }
  function Be() {
    [b.UNVERIFIED, b.ERROR, b.EXPIRED].includes(U) ? _ && (g == null ? void 0 : g.reportValidity()) === !1 ? t(6, F = !1) : P() : t(6, F = !0);
  }
  function Ke() {
    U === b.VERIFYING && alert(l.waitAlert);
  }
  function ie(n) {
    L("expire", n), G && (clearTimeout(G), G = null), n < 1 ? ke() : G = setTimeout(ke, n);
  }
  function Je(n) {
    var w;
    const u = g == null ? void 0 : g.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((w = u == null ? void 0 : u.value) == null ? void 0 : w.slice(u.value.indexOf("@"))) || void 0;
  }
  function Qe(n) {
    return [
      ...(g == null ? void 0 : g.querySelectorAll(n != null && n.length ? n.map((w) => `input[name="${w}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (w, z) => {
        const S = z.name, A = z.value.trim();
        return S && A && (w[S] = A), w;
      },
      {}
    );
  }
  async function qe(n) {
    if (!y)
      throw new Error("Attribute verifyurl not set.");
    L("requesting server verification from", y);
    const u = { payload: n };
    if (_) {
      const { email: S, expectedLanguages: A, expectedCountries: W, fields: x, ipAddress: E, timeZone: le } = typeof _ == "object" ? _ : {
        email: void 0,
        expectedCountries: void 0,
        expectedLanguages: void 0,
        fields: void 0,
        ipAddress: void 0,
        timeZone: void 0
      };
      u.ipAddress = E === !1 ? void 0 : E || "auto", u.email = S === !1 ? void 0 : Je(S), u.fields = x === !1 ? void 0 : Qe(x), u.timeZone = le === !1 ? void 0 : le || Xt(), u.expectedCountries = W, u.expectedLanguages = A || (be ? [be] : void 0);
    }
    const w = await fetch(y, {
      body: JSON.stringify(u),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (w.status !== 200)
      throw new Error(`Server responded with ${w.status}.`);
    const z = await w.json();
    if (z != null && z.payload && t(4, Y = z.payload), I("serververification", z), f && z.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  function xe(n) {
    n.auto !== void 0 && (t(0, s = n.auto), s === "onload" && P()), n.expire !== void 0 && (ie(n.expire), t(14, C = n.expire)), n.challenge && (_e(n.challenge), i = n.challenge), n.challengeurl !== void 0 && t(12, a = n.challengeurl), n.debug !== void 0 && t(13, Z = !!n.debug), n.hidefooter !== void 0 && t(1, M = !!n.hidefooter), n.hidelogo !== void 0 && t(2, V = !!n.hidelogo), n.maxnumber !== void 0 && t(15, p = +n.maxnumber), n.mockerror !== void 0 && t(16, H = !!n.mockerror), n.name !== void 0 && t(3, D = n.name), n.refetchonexpire !== void 0 && t(17, X = !!n.refetchonexpire), n.spamfilter !== void 0 && t(18, _ = typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && t(28, o = n.strings), n.test !== void 0 && t(19, m = typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && t(20, y = n.verifyurl), n.workers !== void 0 && t(21, d = +n.workers);
  }
  function oe(n = b.UNVERIFIED, u = null) {
    G && (clearTimeout(G), G = null), t(6, F = !1), t(8, ce = u), t(4, Y = null), t(5, U = n);
  }
  async function P() {
    return oe(b.VERIFYING), Ye().then((n) => (_e(n), L("challenge", n), Pe(n))).then(({ data: n, solution: u }) => {
      if (L("solution", u), (u == null ? void 0 : u.number) !== void 0) {
        if (y)
          return qe(pe(n, u));
        t(4, Y = pe(n, u)), L("payload", Y);
      } else
        throw L("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      yt().then(() => {
        t(5, U = b.VERIFIED), t(6, F = !0), L("verified"), I("verified", { payload: Y });
      });
    }).catch((n) => {
      L(n), t(5, U = b.ERROR), t(6, F = !1), t(8, ce = n.message);
    });
  }
  function et() {
    F = this.checked, t(6, F);
  }
  function tt(n) {
    ue[n ? "unshift" : "push"](() => {
      ne = n, t(7, ne);
    });
  }
  return r.$$set = (n) => {
    "auto" in n && t(0, s = n.auto), "blockspam" in n && t(22, f = n.blockspam), "challengeurl" in n && t(12, a = n.challengeurl), "challengejson" in n && t(23, h = n.challengejson), "debug" in n && t(13, Z = n.debug), "expire" in n && t(14, C = n.expire), "hidefooter" in n && t(1, M = n.hidefooter), "hidelogo" in n && t(2, V = n.hidelogo), "name" in n && t(3, D = n.name), "maxnumber" in n && t(15, p = n.maxnumber), "mockerror" in n && t(16, H = n.mockerror), "refetchonexpire" in n && t(17, X = n.refetchonexpire), "spamfilter" in n && t(18, _ = n.spamfilter), "strings" in n && t(24, k = n.strings), "test" in n && t(19, m = n.test), "verifyurl" in n && t(20, y = n.verifyurl), "workers" in n && t(21, d = n.workers);
  }, r.$$.update = () => {
    r.$$.dirty[0] & /*challengejson*/
    8388608 && (i = h ? Me(h) : void 0), r.$$.dirty[0] & /*strings*/
    16777216 && t(28, o = k ? Me(k) : {}), r.$$.dirty[0] & /*parsedStrings*/
    268435456 && t(9, l = {
      error: "Verification failed. Try again later.",
      expired: "Verification expired. Try again.",
      footer: `Protected by <a href="${He}" target="_blank">ALTCHA</a>`,
      label: "I'm not a robot",
      verified: "Verified",
      verifying: "Verifying...",
      waitAlert: "Verifying... please wait.",
      ...o
    }), r.$$.dirty[0] & /*payload, state*/
    48 && I("statechange", { payload: Y, state: U });
  }, [
    s,
    M,
    V,
    D,
    Y,
    U,
    F,
    ne,
    ce,
    l,
    Be,
    Ke,
    a,
    Z,
    C,
    p,
    H,
    X,
    _,
    m,
    y,
    d,
    f,
    h,
    k,
    xe,
    oe,
    P,
    o,
    et,
    tt
  ];
}
class Ft extends Lt {
  constructor(e) {
    super(), $t(
      this,
      e,
      Ot,
      Dt,
      ot,
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
      At,
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
customElements.define("altcha-widget", Ct(Ft, { auto: {}, blockspam: {}, challengeurl: {}, challengejson: {}, debug: { type: "Boolean" }, expire: {}, hidefooter: { type: "Boolean" }, hidelogo: { type: "Boolean" }, name: {}, maxnumber: {}, mockerror: { type: "Boolean" }, refetchonexpire: { type: "Boolean" }, spamfilter: { type: "Boolean" }, strings: {}, test: { type: "Boolean" }, verifyurl: {}, workers: {} }, [], ["configure", "reset", "verify"], !1));
export {
  Ft as Altcha
};
