var _t = Object.defineProperty;
var kt = (r, e, t) => e in r ? _t(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var U = (r, e, t) => kt(r, typeof e != "symbol" ? e + "" : e, t);
const tt = "KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2NvbnN0IGY9bmV3IFRleHRFbmNvZGVyO2Z1bmN0aW9uIGQoZSl7cmV0dXJuWy4uLm5ldyBVaW50OEFycmF5KGUpXS5tYXAodD0+dC50b1N0cmluZygxNikucGFkU3RhcnQoMiwiMCIpKS5qb2luKCIiKX1hc3luYyBmdW5jdGlvbiBwKGUsdCxvKXtyZXR1cm4gZChhd2FpdCBjcnlwdG8uc3VidGxlLmRpZ2VzdChvLnRvVXBwZXJDYXNlKCksZi5lbmNvZGUoZSt0KSkpfWZ1bmN0aW9uIGcoZSx0LG89IlNIQS0yNTYiLGw9MWU2LGM9MCl7Y29uc3QgYT1uZXcgQWJvcnRDb250cm9sbGVyLGk9RGF0ZS5ub3coKTtyZXR1cm57cHJvbWlzZTooYXN5bmMoKT0+e2ZvcihsZXQgbj1jO248PWw7bis9MSl7aWYoYS5zaWduYWwuYWJvcnRlZClyZXR1cm4gbnVsbDtpZihhd2FpdCBwKHQsbixvKT09PWUpcmV0dXJue251bWJlcjpuLHRvb2s6RGF0ZS5ub3coKS1pfX1yZXR1cm4gbnVsbH0pKCksY29udHJvbGxlcjphfX1sZXQgcjtvbm1lc3NhZ2U9YXN5bmMgZT0+e2NvbnN0e3R5cGU6dCxwYXlsb2FkOm99PWUuZGF0YTtpZih0PT09ImFib3J0IilyPT1udWxsfHxyLmFib3J0KCkscj12b2lkIDA7ZWxzZSBpZih0PT09IndvcmsiKXtjb25zdHthbGc6bCxjaGFsbGVuZ2U6YyxtYXg6YSxzYWx0Omksc3RhcnQ6dX09b3x8e30sbj1nKGMsaSxsLGEsdSk7cj1uLmNvbnRyb2xsZXIsbi5wcm9taXNlLnRoZW4ocz0+e3NlbGYucG9zdE1lc3NhZ2UocyYmey4uLnMsd29ya2VyOiEwfSl9KX19fSkoKTsK", xt = (r) => Uint8Array.from(atob(r), (e) => e.charCodeAt(0)), Be = typeof window < "u" && window.Blob && new Blob([xt(tt)], { type: "text/javascript;charset=utf-8" });
function Et(r) {
  let e;
  try {
    if (e = Be && (window.URL || window.webkitURL).createObjectURL(Be), !e) throw "";
    const t = new Worker(e, {
      name: r == null ? void 0 : r.name
    });
    return t.addEventListener("error", () => {
      (window.URL || window.webkitURL).revokeObjectURL(e);
    }), t;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + tt,
      {
        name: r == null ? void 0 : r.name
      }
    );
  } finally {
    e && (window.URL || window.webkitURL).revokeObjectURL(e);
  }
}
function ie() {
}
function rt(r) {
  return r();
}
function He() {
  return /* @__PURE__ */ Object.create(null);
}
function fe(r) {
  r.forEach(rt);
}
function nt(r) {
  return typeof r == "function";
}
function Ct(r, e) {
  return r != r ? e == e : r !== e || r && typeof r == "object" || typeof r == "function";
}
function Lt(r) {
  return Object.keys(r).length === 0;
}
function _(r, e) {
  r.appendChild(e);
}
function Rt(r, e, t) {
  const i = It(r);
  if (!i.getElementById(e)) {
    const o = A("style");
    o.id = e, o.textContent = t, zt(i, o);
  }
}
function It(r) {
  if (!r) return document;
  const e = r.getRootNode ? r.getRootNode() : r.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : r.ownerDocument;
}
function zt(r, e) {
  return _(
    /** @type {Document} */
    r.head || r,
    e
  ), e.sheet;
}
function D(r, e, t) {
  r.insertBefore(e, t || null);
}
function j(r) {
  r.parentNode && r.parentNode.removeChild(r);
}
function A(r) {
  return document.createElement(r);
}
function O(r) {
  return document.createElementNS("http://www.w3.org/2000/svg", r);
}
function At(r) {
  return document.createTextNode(r);
}
function Y() {
  return At(" ");
}
function xe(r, e, t, i) {
  return r.addEventListener(e, t, i), () => r.removeEventListener(e, t, i);
}
function s(r, e, t) {
  t == null ? r.removeAttribute(e) : r.getAttribute(e) !== t && r.setAttribute(e, t);
}
function St(r) {
  return Array.from(r.childNodes);
}
function Oe(r, e, t) {
  r.classList.toggle(e, !!t);
}
function Nt(r, e, { bubbles: t = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(r, { detail: e, bubbles: t, cancelable: i });
}
function Zt(r) {
  const e = {};
  return r.childNodes.forEach(
    /** @param {Element} node */
    (t) => {
      e[t.slot || "default"] = !0;
    }
  ), e;
}
let ae;
function ce(r) {
  ae = r;
}
function Re() {
  if (!ae) throw new Error("Function called outside component initialization");
  return ae;
}
function jt(r) {
  Re().$$.on_mount.push(r);
}
function Mt(r) {
  Re().$$.on_destroy.push(r);
}
function Tt() {
  const r = Re();
  return (e, t, { cancelable: i = !1 } = {}) => {
    const o = r.$$.callbacks[e];
    if (o) {
      const l = Nt(
        /** @type {string} */
        e,
        t,
        { cancelable: i }
      );
      return o.slice().forEach((c) => {
        c.call(r, l);
      }), !l.defaultPrevented;
    }
    return !0;
  };
}
const re = [], we = [];
let ne = [];
const We = [], it = /* @__PURE__ */ Promise.resolve();
let Ce = !1;
function ot() {
  Ce || (Ce = !0, it.then(y));
}
function Vt() {
  return ot(), it;
}
function Le(r) {
  ne.push(r);
}
const Ee = /* @__PURE__ */ new Set();
let te = 0;
function y() {
  if (te !== 0)
    return;
  const r = ae;
  do {
    try {
      for (; te < re.length; ) {
        const e = re[te];
        te++, ce(e), Dt(e.$$);
      }
    } catch (e) {
      throw re.length = 0, te = 0, e;
    }
    for (ce(null), re.length = 0, te = 0; we.length; ) we.pop()();
    for (let e = 0; e < ne.length; e += 1) {
      const t = ne[e];
      Ee.has(t) || (Ee.add(t), t());
    }
    ne.length = 0;
  } while (re.length);
  for (; We.length; )
    We.pop()();
  Ce = !1, Ee.clear(), ce(r);
}
function Dt(r) {
  if (r.fragment !== null) {
    r.update(), fe(r.before_update);
    const e = r.dirty;
    r.dirty = [-1], r.fragment && r.fragment.p(r.ctx, e), r.after_update.forEach(Le);
  }
}
function Ft(r) {
  const e = [], t = [];
  ne.forEach((i) => r.indexOf(i) === -1 ? e.push(i) : t.push(i)), t.forEach((i) => i()), ne = e;
}
const $t = /* @__PURE__ */ new Set();
function Ut(r, e) {
  r && r.i && ($t.delete(r), r.i(e));
}
function Gt(r, e, t) {
  const { fragment: i, after_update: o } = r.$$;
  i && i.m(e, t), Le(() => {
    const l = r.$$.on_mount.map(rt).filter(nt);
    r.$$.on_destroy ? r.$$.on_destroy.push(...l) : fe(l), r.$$.on_mount = [];
  }), o.forEach(Le);
}
function Xt(r, e) {
  const t = r.$$;
  t.fragment !== null && (Ft(t.after_update), fe(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Bt(r, e) {
  r.$$.dirty[0] === -1 && (re.push(r), ot(), r.$$.dirty.fill(0)), r.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Ht(r, e, t, i, o, l, c = null, a = [-1]) {
  const d = ae;
  ce(r);
  const f = r.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: ie,
    not_equal: o,
    bound: He(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (d ? d.$$.context : [])),
    // everything else
    callbacks: He(),
    dirty: a,
    skip_bound: !1,
    root: e.target || d.$$.root
  };
  c && c(f.root);
  let $ = !1;
  if (f.ctx = t ? t(r, e.props || {}, (N, G, ...F) => {
    const k = F.length ? F[0] : G;
    return f.ctx && o(f.ctx[N], f.ctx[N] = k) && (!f.skip_bound && f.bound[N] && f.bound[N](k), $ && Bt(r, N)), G;
  }) : [], f.update(), $ = !0, fe(f.before_update), f.fragment = i ? i(f.ctx) : !1, e.target) {
    if (e.hydrate) {
      const N = St(e.target);
      f.fragment && f.fragment.l(N), N.forEach(j);
    } else
      f.fragment && f.fragment.c();
    e.intro && Ut(r.$$.fragment), Gt(r, e.target, e.anchor), y();
  }
  ce(d);
}
let lt;
typeof HTMLElement == "function" && (lt = class extends HTMLElement {
  constructor(e, t, i) {
    super();
    /** The Svelte component constructor */
    U(this, "$$ctor");
    /** Slots */
    U(this, "$$s");
    /** The Svelte component instance */
    U(this, "$$c");
    /** Whether or not the custom element is connected */
    U(this, "$$cn", !1);
    /** Component props data */
    U(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    U(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    U(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    U(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    U(this, "$$l_u", /* @__PURE__ */ new Map());
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
          let c;
          return {
            c: function() {
              c = A("slot"), l !== "default" && s(c, "name", l);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(f, $) {
              D(f, c, $);
            },
            d: function(f) {
              f && j(c);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, i = Zt(this);
      for (const l of this.$$s)
        l in i && (t[l] = [e(l)]);
      for (const l of this.attributes) {
        const c = this.$$g_p(l.name);
        c in this.$$d || (this.$$d[c] = ve(c, l.value, this.$$p_d, "toProp"));
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
            const c = ve(
              l,
              this.$$d[l],
              this.$$p_d,
              "toAttribute"
            );
            c == null ? this.removeAttribute(this.$$p_d[l].attribute || l) : this.setAttribute(this.$$p_d[l].attribute || l, c);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(o), o();
      for (const l in this.$$l)
        for (const c of this.$$l[l]) {
          const a = this.$$c.$on(l, c);
          this.$$l_u.set(c, a);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(e, t, i) {
    var o;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = ve(e, i, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [e]: this.$$d[e] }));
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
function ve(r, e, t, i) {
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
function Ot(r, e, t, i, o, l) {
  let c = class extends lt {
    constructor() {
      super(r, t, o), this.$$p_d = e;
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
      set(d) {
        var f;
        d = ve(a, d, e), this.$$d[a] = d, (f = this.$$c) == null || f.$set({ [a]: d });
      }
    });
  }), i.forEach((a) => {
    Object.defineProperty(c.prototype, a, {
      get() {
        var d;
        return (d = this.$$c) == null ? void 0 : d[a];
      }
    });
  }), l && (c = l(c)), r.element = /** @type {any} */
  c, c;
}
class Wt {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    U(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    U(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Xt(this, 1), this.$destroy = ie;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!nt(t))
      return ie;
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
    this.$$set && !Lt(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Pt = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Pt);
const Yt = new TextEncoder();
function Kt(r) {
  return [...new Uint8Array(r)].map((e) => e.toString(16).padStart(2, "0")).join("");
}
async function Jt(r, e = "SHA-256", t = 1e5) {
  const i = Date.now().toString(16);
  r || (r = Math.round(Math.random() * t));
  const o = await st(i, r, e);
  return {
    algorithm: e,
    challenge: o,
    salt: i,
    signature: ""
  };
}
async function st(r, e, t) {
  return Kt(
    await crypto.subtle.digest(
      t.toUpperCase(),
      Yt.encode(r + e)
    )
  );
}
function qt(r, e, t = "SHA-256", i = 1e6, o = 0) {
  const l = new AbortController(), c = Date.now();
  return {
    promise: (async () => {
      for (let d = o; d <= i; d += 1) {
        if (l.signal.aborted)
          return null;
        if (await st(e, d, t) === r)
          return {
            number: d,
            took: Date.now() - c
          };
      }
      return null;
    })(),
    controller: l
  };
}
var b = /* @__PURE__ */ ((r) => (r.ERROR = "error", r.VERIFIED = "verified", r.VERIFYING = "verifying", r.UNVERIFIED = "unverified", r.EXPIRED = "expired", r))(b || {});
function Qt(r) {
  Rt(r, "svelte-ddsc3z", '.altcha.svelte-ddsc3z.svelte-ddsc3z{background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);position:relative;text-align:left}.altcha.svelte-ddsc3z.svelte-ddsc3z:focus-within{border-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating].svelte-ddsc3z.svelte-ddsc3z{background:var(--altcha-color-base, white);display:none;filter:drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2));left:-100%;position:fixed;top:-100%;width:var(--altcha-max-width, 260px);z-index:999999}.altcha[data-floating=top].svelte-ddsc3z .altcha-anchor-arrow.svelte-ddsc3z{border-bottom-color:transparent;border-top-color:var(--altcha-color-border, #a0a0a0);bottom:-12px;top:auto}.altcha[data-floating=bottom].svelte-ddsc3z.svelte-ddsc3z:focus-within::after{border-bottom-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating=top].svelte-ddsc3z.svelte-ddsc3z:focus-within::after{border-top-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating].svelte-ddsc3z.svelte-ddsc3z:not([data-state=unverified]){display:block}.altcha-anchor-arrow.svelte-ddsc3z.svelte-ddsc3z{border:6px solid transparent;border-bottom-color:var(--altcha-color-border, #a0a0a0);content:"";height:0;left:12px;position:absolute;top:-12px;width:0}.altcha-main.svelte-ddsc3z.svelte-ddsc3z{align-items:center;display:flex;gap:0.4rem;padding:0.7rem}.altcha-label.svelte-ddsc3z.svelte-ddsc3z{flex-grow:1}.altcha-label.svelte-ddsc3z label.svelte-ddsc3z{cursor:pointer}.altcha-logo.svelte-ddsc3z.svelte-ddsc3z{color:currentColor;opacity:0.3}.altcha-logo.svelte-ddsc3z.svelte-ddsc3z:hover{opacity:1}.altcha-error.svelte-ddsc3z.svelte-ddsc3z{color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem}.altcha-footer.svelte-ddsc3z.svelte-ddsc3z{align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.4;padding:0.2rem 0.7rem;text-align:right}.altcha-footer.svelte-ddsc3z.svelte-ddsc3z:hover{opacity:1}.altcha-footer.svelte-ddsc3z>.svelte-ddsc3z:first-child{flex-grow:1}.altcha-footer.svelte-ddsc3z a{color:currentColor}.altcha-checkbox.svelte-ddsc3z.svelte-ddsc3z{display:flex;align-items:center;height:24px;width:24px}.altcha-checkbox.svelte-ddsc3z input.svelte-ddsc3z{width:18px;height:18px;margin:0}.altcha-hidden.svelte-ddsc3z.svelte-ddsc3z{display:none}.altcha-spinner.svelte-ddsc3z.svelte-ddsc3z{animation:svelte-ddsc3z-altcha-spinner 0.75s infinite linear;transform-origin:center}@keyframes svelte-ddsc3z-altcha-spinner{100%{transform:rotate(360deg)}}');
}
function Pe(r) {
  let e, t, i;
  return {
    c() {
      e = O("svg"), t = O("path"), i = O("path"), s(t, "d", "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"), s(t, "fill", "currentColor"), s(t, "opacity", ".25"), s(i, "d", "M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"), s(i, "fill", "currentColor"), s(i, "class", "altcha-spinner svelte-ddsc3z"), s(e, "width", "24"), s(e, "height", "24"), s(e, "viewBox", "0 0 24 24"), s(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(o, l) {
      D(o, e, l), _(e, t), _(e, i);
    },
    d(o) {
      o && j(e);
    }
  };
}
function er(r) {
  let e, t = (
    /*_strings*/
    r[11].label + ""
  ), i;
  return {
    c() {
      e = A("label"), s(e, "for", i = /*name*/
      r[4] + "_checkbox"), s(e, "class", "svelte-ddsc3z");
    },
    m(o, l) {
      D(o, e, l), e.innerHTML = t;
    },
    p(o, l) {
      l[0] & /*_strings*/
      2048 && t !== (t = /*_strings*/
      o[11].label + "") && (e.innerHTML = t), l[0] & /*name*/
      16 && i !== (i = /*name*/
      o[4] + "_checkbox") && s(e, "for", i);
    },
    d(o) {
      o && j(e);
    }
  };
}
function tr(r) {
  let e, t = (
    /*_strings*/
    r[11].verifying + ""
  );
  return {
    c() {
      e = A("span");
    },
    m(i, o) {
      D(i, e, o), e.innerHTML = t;
    },
    p(i, o) {
      o[0] & /*_strings*/
      2048 && t !== (t = /*_strings*/
      i[11].verifying + "") && (e.innerHTML = t);
    },
    d(i) {
      i && j(e);
    }
  };
}
function rr(r) {
  let e, t = (
    /*_strings*/
    r[11].verified + ""
  ), i, o;
  return {
    c() {
      e = A("span"), i = Y(), o = A("input"), s(o, "type", "hidden"), s(
        o,
        "name",
        /*name*/
        r[4]
      ), o.value = /*payload*/
      r[5];
    },
    m(l, c) {
      D(l, e, c), e.innerHTML = t, D(l, i, c), D(l, o, c);
    },
    p(l, c) {
      c[0] & /*_strings*/
      2048 && t !== (t = /*_strings*/
      l[11].verified + "") && (e.innerHTML = t), c[0] & /*name*/
      16 && s(
        o,
        "name",
        /*name*/
        l[4]
      ), c[0] & /*payload*/
      32 && (o.value = /*payload*/
      l[5]);
    },
    d(l) {
      l && (j(e), j(i), j(o));
    }
  };
}
function Ye(r) {
  let e, t, i, o, l, c, a;
  return {
    c() {
      e = A("div"), t = A("a"), i = O("svg"), o = O("path"), l = O("path"), c = O("path"), s(o, "d", "M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z"), s(o, "fill", "currentColor"), s(l, "d", "M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z"), s(l, "fill", "currentColor"), s(c, "d", "M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z"), s(c, "fill", "currentColor"), s(i, "width", "22"), s(i, "height", "22"), s(i, "viewBox", "0 0 20 20"), s(i, "fill", "none"), s(i, "xmlns", "http://www.w3.org/2000/svg"), s(t, "href", ct), s(t, "target", "_blank"), s(t, "class", "altcha-logo svelte-ddsc3z"), s(t, "aria-label", a = /*_strings*/
      r[11].ariaLinkLabel);
    },
    m(d, f) {
      D(d, e, f), _(e, t), _(t, i), _(i, o), _(i, l), _(i, c);
    },
    p(d, f) {
      f[0] & /*_strings*/
      2048 && a !== (a = /*_strings*/
      d[11].ariaLinkLabel) && s(t, "aria-label", a);
    },
    d(d) {
      d && j(e);
    }
  };
}
function Ke(r) {
  let e, t, i, o;
  function l(d, f) {
    return (
      /*state*/
      d[6] === b.EXPIRED ? ir : nr
    );
  }
  let c = l(r), a = c(r);
  return {
    c() {
      e = A("div"), t = O("svg"), i = O("path"), o = Y(), a.c(), s(i, "stroke-linecap", "round"), s(i, "stroke-linejoin", "round"), s(i, "d", "M6 18L18 6M6 6l12 12"), s(t, "width", "14"), s(t, "height", "14"), s(t, "xmlns", "http://www.w3.org/2000/svg"), s(t, "fill", "none"), s(t, "viewBox", "0 0 24 24"), s(t, "stroke-width", "1.5"), s(t, "stroke", "currentColor"), s(e, "class", "altcha-error svelte-ddsc3z");
    },
    m(d, f) {
      D(d, e, f), _(e, t), _(t, i), _(e, o), a.m(e, null);
    },
    p(d, f) {
      c === (c = l(d)) && a ? a.p(d, f) : (a.d(1), a = c(d), a && (a.c(), a.m(e, null)));
    },
    d(d) {
      d && j(e), a.d();
    }
  };
}
function nr(r) {
  let e, t = (
    /*_strings*/
    r[11].error + ""
  );
  return {
    c() {
      e = A("div"), s(
        e,
        "title",
        /*error*/
        r[10]
      );
    },
    m(i, o) {
      D(i, e, o), e.innerHTML = t;
    },
    p(i, o) {
      o[0] & /*_strings*/
      2048 && t !== (t = /*_strings*/
      i[11].error + "") && (e.innerHTML = t), o[0] & /*error*/
      1024 && s(
        e,
        "title",
        /*error*/
        i[10]
      );
    },
    d(i) {
      i && j(e);
    }
  };
}
function ir(r) {
  let e, t = (
    /*_strings*/
    r[11].expired + ""
  );
  return {
    c() {
      e = A("div"), s(
        e,
        "title",
        /*error*/
        r[10]
      );
    },
    m(i, o) {
      D(i, e, o), e.innerHTML = t;
    },
    p(i, o) {
      o[0] & /*_strings*/
      2048 && t !== (t = /*_strings*/
      i[11].expired + "") && (e.innerHTML = t), o[0] & /*error*/
      1024 && s(
        e,
        "title",
        /*error*/
        i[10]
      );
    },
    d(i) {
      i && j(e);
    }
  };
}
function Je(r) {
  let e, t, i = (
    /*_strings*/
    r[11].footer + ""
  );
  return {
    c() {
      e = A("div"), t = A("div"), s(t, "class", "svelte-ddsc3z"), s(e, "class", "altcha-footer svelte-ddsc3z");
    },
    m(o, l) {
      D(o, e, l), _(e, t), t.innerHTML = i;
    },
    p(o, l) {
      l[0] & /*_strings*/
      2048 && i !== (i = /*_strings*/
      o[11].footer + "") && (t.innerHTML = i);
    },
    d(o) {
      o && j(e);
    }
  };
}
function qe(r) {
  let e;
  return {
    c() {
      e = A("div"), s(e, "class", "altcha-anchor-arrow svelte-ddsc3z");
    },
    m(t, i) {
      D(t, e, i), r[37](e);
    },
    p: ie,
    d(t) {
      t && j(e), r[37](null);
    }
  };
}
function or(r) {
  let e, t, i, o, l, c, a, d, f, $, N, G, F, k, W, S = (
    /*state*/
    r[6] === b.VERIFYING && Pe()
  );
  function K(h, v) {
    return (
      /*state*/
      h[6] === b.VERIFIED ? rr : (
        /*state*/
        h[6] === b.VERIFYING ? tr : er
      )
    );
  }
  let H = K(r), M = H(r), E = (
    /*hidelogo*/
    (r[3] !== !0 || /*isFreeSaaS*/
    r[12]) && Ye(r)
  ), R = (
    /*error*/
    (r[10] || /*state*/
    r[6] === b.EXPIRED) && Ke(r)
  ), I = (
    /*_strings*/
    r[11].footer && /*hidefooter*/
    (r[2] !== !0 || /*isFreeSaaS*/
    r[12]) && Je(r)
  ), w = (
    /*floating*/
    r[1] && qe(r)
  );
  return {
    c() {
      e = A("div"), t = A("div"), S && S.c(), i = Y(), o = A("div"), l = A("input"), d = Y(), f = A("div"), M.c(), $ = Y(), E && E.c(), N = Y(), R && R.c(), G = Y(), I && I.c(), F = Y(), w && w.c(), s(l, "type", "checkbox"), s(l, "id", c = /*name*/
      r[4] + "_checkbox"), l.required = a = /*auto*/
      r[0] !== "onsubmit", s(l, "class", "svelte-ddsc3z"), s(o, "class", "altcha-checkbox svelte-ddsc3z"), Oe(
        o,
        "altcha-hidden",
        /*state*/
        r[6] === b.VERIFYING
      ), s(f, "class", "altcha-label svelte-ddsc3z"), s(t, "class", "altcha-main svelte-ddsc3z"), s(e, "class", "altcha svelte-ddsc3z"), s(
        e,
        "data-state",
        /*state*/
        r[6]
      ), s(
        e,
        "data-floating",
        /*floating*/
        r[1]
      );
    },
    m(h, v) {
      D(h, e, v), _(e, t), S && S.m(t, null), _(t, i), _(t, o), _(o, l), l.checked = /*checked*/
      r[7], _(t, d), _(t, f), M.m(f, null), _(t, $), E && E.m(t, null), _(e, N), R && R.m(e, null), _(e, G), I && I.m(e, null), _(e, F), w && w.m(e, null), r[38](e), k || (W = [
        xe(
          l,
          "change",
          /*input_change_handler*/
          r[36]
        ),
        xe(
          l,
          "change",
          /*onCheckedChange*/
          r[13]
        ),
        xe(
          l,
          "invalid",
          /*onInvalid*/
          r[14]
        )
      ], k = !0);
    },
    p(h, v) {
      /*state*/
      h[6] === b.VERIFYING ? S || (S = Pe(), S.c(), S.m(t, i)) : S && (S.d(1), S = null), v[0] & /*name*/
      16 && c !== (c = /*name*/
      h[4] + "_checkbox") && s(l, "id", c), v[0] & /*auto*/
      1 && a !== (a = /*auto*/
      h[0] !== "onsubmit") && (l.required = a), v[0] & /*checked*/
      128 && (l.checked = /*checked*/
      h[7]), v[0] & /*state*/
      64 && Oe(
        o,
        "altcha-hidden",
        /*state*/
        h[6] === b.VERIFYING
      ), H === (H = K(h)) && M ? M.p(h, v) : (M.d(1), M = H(h), M && (M.c(), M.m(f, null))), /*hidelogo*/
      h[3] !== !0 || /*isFreeSaaS*/
      h[12] ? E ? E.p(h, v) : (E = Ye(h), E.c(), E.m(t, null)) : E && (E.d(1), E = null), /*error*/
      h[10] || /*state*/
      h[6] === b.EXPIRED ? R ? R.p(h, v) : (R = Ke(h), R.c(), R.m(e, G)) : R && (R.d(1), R = null), /*_strings*/
      h[11].footer && /*hidefooter*/
      (h[2] !== !0 || /*isFreeSaaS*/
      h[12]) ? I ? I.p(h, v) : (I = Je(h), I.c(), I.m(e, F)) : I && (I.d(1), I = null), /*floating*/
      h[1] ? w ? w.p(h, v) : (w = qe(h), w.c(), w.m(e, null)) : w && (w.d(1), w = null), v[0] & /*state*/
      64 && s(
        e,
        "data-state",
        /*state*/
        h[6]
      ), v[0] & /*floating*/
      2 && s(
        e,
        "data-floating",
        /*floating*/
        h[1]
      );
    },
    i: ie,
    o: ie,
    d(h) {
      h && j(e), S && S.d(), M.d(), E && E.d(), R && R.d(), I && I.d(), w && w.d(), r[38](null), k = !1, fe(W);
    }
  };
}
const Qe = "Visit Altcha.org", ct = "https://altcha.org/";
function et(r) {
  return JSON.parse(r);
}
function lr() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function sr(r, e, t) {
  var Ge, Xe;
  let i, o, l, c, { auto: a = void 0 } = e, { blockspam: d = void 0 } = e, { challengeurl: f = void 0 } = e, { challengejson: $ = void 0 } = e, { debug: N = !1 } = e, { delay: G = 0 } = e, { expire: F = void 0 } = e, { floating: k = void 0 } = e, { floatinganchor: W = void 0 } = e, { floatingoffset: S = void 0 } = e, { hidefooter: K = !1 } = e, { hidelogo: H = !1 } = e, { name: M = "altcha" } = e, { maxnumber: E = 1e6 } = e, { mockerror: R = !1 } = e, { refetchonexpire: I = !0 } = e, { spamfilter: w = !1 } = e, { strings: h = void 0 } = e, { test: v = !1 } = e, { verifyurl: J = void 0 } = e, { workers: oe = Math.min(16, navigator.hardwareConcurrency || 8) } = e, { workerurl: ue = void 0 } = e;
  const ye = Tt(), Ie = ["SHA-256", "SHA-384", "SHA-512"], ze = (Xe = (Ge = document.documentElement.lang) == null ? void 0 : Ge.split("-")) == null ? void 0 : Xe[0];
  let P = !1, C, q = null, de = null, m = null, pe = null, Q = null, T = b.UNVERIFIED, X = null;
  Mt(() => {
    m && (m.removeEventListener("submit", Se), m.removeEventListener("reset", Ne), m.removeEventListener("focusin", Ae), m = null), X && (clearTimeout(X), X = null), document.removeEventListener("click", Te), document.removeEventListener("scroll", Ve), window.removeEventListener("resize", Fe);
  }), jt(() => {
    x("mounted", "0.6.4"), x("workers", oe), v && x("using test mode"), F && he(F), a !== void 0 && x("auto", a), k !== void 0 && $e(k), m = C.closest("form"), m && (m.addEventListener("submit", Se, { capture: !0 }), m.addEventListener("reset", Ne), a === "onfocus" && m.addEventListener("focusin", Ae)), a === "onload" && ee(), i && (K || H) && x("Attributes hidefooter and hidelogo ignored because usage with free API Keys require attribution.");
  });
  function x(...n) {
    (N || n.some((u) => u instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", ...n);
  }
  function Ae(n) {
    T === b.UNVERIFIED && ee();
  }
  function Se(n) {
    m && a === "onsubmit" && (T === b.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), ee().then(() => {
      m == null || m.requestSubmit();
    })) : T !== b.VERIFIED && (n.preventDefault(), n.stopPropagation(), T === b.VERIFYING && De()));
  }
  function Ne() {
    ge();
  }
  function Ze(n, u) {
    return btoa(JSON.stringify({
      algorithm: n.algorithm,
      challenge: n.challenge,
      number: u.number,
      salt: n.salt,
      signature: n.signature,
      test: v ? !0 : void 0,
      took: u.took
    }));
  }
  function je(n) {
    if (!n.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (n.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!Ie.includes(n.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${Ie.join(", ")}`);
    if (!n.challenge || n.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!n.salt || n.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function at() {
    var n;
    if (R)
      throw x("mocking error"), new Error("Mocked error.");
    if (o)
      return x("using provided json data"), o;
    if (v)
      return x("generating test challenge", { test: v }), Jt(typeof v != "boolean" ? +v : void 0);
    {
      if (!f)
        throw new Error("Attribute challengeurl not set.");
      x("fetching challenge from", f);
      const u = await fetch(f, {
        headers: {
          "x-altcha-spam-filter": w ? "1" : "0"
        }
      });
      if (u.status !== 200)
        throw new Error(`Server responded with ${u.status}.`);
      const g = u.headers.get("Expires"), z = u.headers.get("X-Altcha-Config"), V = await u.json(), Z = new URLSearchParams((n = V.salt.split("?")) == null ? void 0 : n[1]), B = Z.get("expires") || Z.get("expire");
      if (B) {
        const p = new Date(+B * 1e3), L = isNaN(p.getTime()) ? 0 : p.getTime() - Date.now();
        L > 0 && he(L);
      }
      if (z)
        try {
          const p = JSON.parse(z);
          p && typeof p == "object" && (p.verifyurl && (p.verifyurl = new URL(p.verifyurl, new URL(f)).toString()), Ue(p));
        } catch (p) {
          x("unable to configure from X-Altcha-Config", p);
        }
      if (!F && (g != null && g.length)) {
        const p = Date.parse(g);
        if (p) {
          const L = p - Date.now();
          L > 0 && he(L);
        }
      }
      return V;
    }
  }
  function Me() {
    f && I && T === b.VERIFIED ? ee() : ge(b.EXPIRED, c.expired);
  }
  async function ft(n) {
    let u = null;
    if ("Worker" in window) {
      try {
        u = await ut(n.challenge, n.salt, n.algorithm, n.maxnumber);
      } catch (g) {
        x(g);
      }
      if ((u == null ? void 0 : u.number) !== void 0)
        return { data: n, solution: u };
    }
    return {
      data: n,
      solution: await qt(n.challenge, n.salt, n.algorithm, n.maxnumber || E).promise
    };
  }
  async function ut(n, u, g, z = typeof v == "number" ? v : E, V = Math.ceil(oe)) {
    const Z = [];
    V = Math.min(16, Math.max(1, V));
    for (let L = 0; L < V; L++)
      Z.push(createAltchaWorker(ue));
    const B = Math.ceil(z / V), p = await Promise.all(Z.map((L, ke) => {
      const le = ke * B;
      return new Promise((me) => {
        L.addEventListener("message", (be) => {
          if (be.data)
            for (const se of Z)
              se !== L && se.postMessage({ type: "abort" });
          me(be.data);
        }), L.postMessage({
          payload: {
            alg: g,
            challenge: n,
            max: le + B,
            salt: u,
            start: le
          },
          type: "work"
        });
      });
    }));
    for (const L of Z)
      L.terminate();
    return p.find((L) => !!L) || null;
  }
  function dt() {
    [b.UNVERIFIED, b.ERROR, b.EXPIRED].includes(T) ? w && (m == null ? void 0 : m.reportValidity()) === !1 ? t(7, P = !1) : ee() : t(7, P = !0);
  }
  function Te(n) {
    const u = n.target;
    k && u && !C.contains(u) && T === b.VERIFIED && t(8, C.style.display = "none", C);
  }
  function Ve() {
    k && _e();
  }
  function De() {
    T === b.VERIFYING && c.waitAlert && alert(c.waitAlert);
  }
  function ht(n) {
    k && T !== b.UNVERIFIED && requestAnimationFrame(() => {
      _e();
    });
  }
  function Fe() {
    k && _e();
  }
  function he(n) {
    x("expire", n), X && (clearTimeout(X), X = null), n < 1 ? Me() : X = setTimeout(Me, n);
  }
  function $e(n) {
    x("floating", n), k !== n && (t(8, C.style.left = "", C), t(8, C.style.top = "", C)), t(1, k = n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : k), k ? (a || t(0, a = "onsubmit"), document.addEventListener("scroll", Ve), document.addEventListener("click", Te), window.addEventListener("resize", Fe)) : a === "onsubmit" && t(0, a = void 0);
  }
  function gt(n) {
    var g;
    const u = m == null ? void 0 : m.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((g = u == null ? void 0 : u.value) == null ? void 0 : g.slice(u.value.indexOf("@"))) || void 0;
  }
  function mt(n) {
    return [
      ...(m == null ? void 0 : m.querySelectorAll(n != null && n.length ? n.map((g) => `input[name="${g}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (g, z) => {
        const V = z.name, Z = z.value;
        return V && Z && (g[V] = /\n/.test(Z) ? Z.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : Z), g;
      },
      {}
    );
  }
  async function bt(n) {
    if (!J)
      throw new Error("Attribute verifyurl not set.");
    x("requesting server verification from", J);
    const u = { payload: n };
    if (w) {
      const { blockedCountries: V, classifier: Z, disableRules: B, email: p, expectedLanguages: L, expectedCountries: ke, fields: le, ipAddress: me, text: be, timeZone: se } = vt();
      u.blockedCountries = V, u.classifier = Z, u.disableRules = B, u.email = p === !1 ? void 0 : gt(p), u.expectedCountries = ke, u.expectedLanguages = L || (ze ? [ze] : void 0), u.fields = le === !1 ? void 0 : mt(le), u.ipAddress = me === !1 ? void 0 : me || "auto", u.text = be, u.timeZone = se === !1 ? void 0 : se || lr();
    }
    const g = await fetch(J, {
      body: JSON.stringify(u),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (g.status !== 200)
      throw new Error(`Server responded with ${g.status}.`);
    const z = await g.json();
    if (z != null && z.payload && t(5, Q = z.payload), ye("serververification", z), d && z.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  function vt() {
    return w === "ipAddress" ? {
      blockedCountries: void 0,
      classifier: void 0,
      disableRules: void 0,
      email: !1,
      expectedCountries: void 0,
      expectedLanguages: void 0,
      fields: !1,
      ipAddress: void 0,
      text: void 0,
      timeZone: void 0
    } : typeof w == "object" ? w : {
      blockedCountries: void 0,
      classifier: void 0,
      disableRules: void 0,
      email: void 0,
      expectedCountries: void 0,
      expectedLanguages: void 0,
      fields: void 0,
      ipAddress: void 0,
      text: void 0,
      timeZone: void 0
    };
  }
  function _e(n = 20) {
    if (C)
      if (de || (de = (W ? document.querySelector(W) : m == null ? void 0 : m.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || m), de) {
        const u = parseInt(S, 10) || 12, g = de.getBoundingClientRect(), z = C.getBoundingClientRect(), V = document.documentElement.clientHeight, Z = document.documentElement.clientWidth, B = k === "auto" ? g.bottom + z.height + u + n > V : k === "top", p = Math.max(n, Math.min(Z - n - z.width, g.left + g.width / 2 - z.width / 2));
        if (B ? t(8, C.style.top = `${g.top - (z.height + u)}px`, C) : t(8, C.style.top = `${g.bottom + u}px`, C), t(8, C.style.left = `${p}px`, C), C.setAttribute("data-floating", B ? "top" : "bottom"), q) {
          const L = q.getBoundingClientRect();
          t(9, q.style.left = g.left - p + g.width / 2 - L.width / 2 + "px", q);
        }
      } else
        x("unable to find floating anchor element");
  }
  function Ue(n) {
    n.auto !== void 0 && (t(0, a = n.auto), a === "onload" && ee()), n.floatinganchor !== void 0 && t(19, W = n.floatinganchor), n.delay !== void 0 && t(17, G = n.delay), n.floatingoffset !== void 0 && t(20, S = n.floatingoffset), n.floating !== void 0 && $e(n.floating), n.expire !== void 0 && (he(n.expire), t(18, F = n.expire)), n.challenge && (je(n.challenge), o = n.challenge), n.challengeurl !== void 0 && t(15, f = n.challengeurl), n.debug !== void 0 && t(16, N = !!n.debug), n.hidefooter !== void 0 && t(2, K = !!n.hidefooter), n.hidelogo !== void 0 && t(3, H = !!n.hidelogo), n.maxnumber !== void 0 && t(21, E = +n.maxnumber), n.mockerror !== void 0 && t(22, R = !!n.mockerror), n.name !== void 0 && t(4, M = n.name), n.refetchonexpire !== void 0 && t(23, I = !!n.refetchonexpire), n.spamfilter !== void 0 && t(24, w = typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && t(35, l = n.strings), n.test !== void 0 && t(25, v = typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && t(26, J = n.verifyurl), n.workers !== void 0 && t(27, oe = +n.workers), n.workerurl !== void 0 && t(28, ue = n.workerurl);
  }
  function ge(n = b.UNVERIFIED, u = null) {
    X && (clearTimeout(X), X = null), t(7, P = !1), t(10, pe = u), t(5, Q = null), t(6, T = n);
  }
  async function ee() {
    return ge(b.VERIFYING), await new Promise((n) => setTimeout(n, G || 0)), at().then((n) => (je(n), x("challenge", n), ft(n))).then(({ data: n, solution: u }) => {
      if (x("solution", u), (u == null ? void 0 : u.number) !== void 0) {
        if (J)
          return bt(Ze(n, u));
        t(5, Q = Ze(n, u)), x("payload", Q);
      } else
        throw x("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      Vt().then(() => {
        t(6, T = b.VERIFIED), t(7, P = !0), x("verified"), ye("verified", { payload: Q });
      });
    }).catch((n) => {
      x(n), t(6, T = b.ERROR), t(7, P = !1), t(10, pe = n.message);
    });
  }
  function wt() {
    P = this.checked, t(7, P);
  }
  function yt(n) {
    we[n ? "unshift" : "push"](() => {
      q = n, t(9, q);
    });
  }
  function pt(n) {
    we[n ? "unshift" : "push"](() => {
      C = n, t(8, C);
    });
  }
  return r.$$set = (n) => {
    "auto" in n && t(0, a = n.auto), "blockspam" in n && t(29, d = n.blockspam), "challengeurl" in n && t(15, f = n.challengeurl), "challengejson" in n && t(30, $ = n.challengejson), "debug" in n && t(16, N = n.debug), "delay" in n && t(17, G = n.delay), "expire" in n && t(18, F = n.expire), "floating" in n && t(1, k = n.floating), "floatinganchor" in n && t(19, W = n.floatinganchor), "floatingoffset" in n && t(20, S = n.floatingoffset), "hidefooter" in n && t(2, K = n.hidefooter), "hidelogo" in n && t(3, H = n.hidelogo), "name" in n && t(4, M = n.name), "maxnumber" in n && t(21, E = n.maxnumber), "mockerror" in n && t(22, R = n.mockerror), "refetchonexpire" in n && t(23, I = n.refetchonexpire), "spamfilter" in n && t(24, w = n.spamfilter), "strings" in n && t(31, h = n.strings), "test" in n && t(25, v = n.test), "verifyurl" in n && t(26, J = n.verifyurl), "workers" in n && t(27, oe = n.workers), "workerurl" in n && t(28, ue = n.workerurl);
  }, r.$$.update = () => {
    r.$$.dirty[0] & /*challengeurl*/
    32768 && t(12, i = !!(f != null && f.includes(".altcha.org")) && !!(f != null && f.includes("apiKey=ckey_"))), r.$$.dirty[0] & /*challengejson*/
    1073741824 && (o = $ ? et($) : void 0), r.$$.dirty[1] & /*strings*/
    1 && t(35, l = h ? et(h) : {}), r.$$.dirty[1] & /*parsedStrings*/
    16 && t(11, c = {
      ariaLinkLabel: Qe,
      error: "Verification failed. Try again later.",
      expired: "Verification expired. Try again.",
      footer: `Protected by <a href="${ct}" target="_blank" aria-label="${l.ariaLinkLabel || Qe}">ALTCHA</a>`,
      label: "I'm not a robot",
      verified: "Verified",
      verifying: "Verifying...",
      waitAlert: "Verifying... please wait.",
      ...l
    }), r.$$.dirty[0] & /*payload, state*/
    96 && ye("statechange", { payload: Q, state: T }), r.$$.dirty[0] & /*state*/
    64 && ht();
  }, [
    a,
    k,
    K,
    H,
    M,
    Q,
    T,
    P,
    C,
    q,
    pe,
    c,
    i,
    dt,
    De,
    f,
    N,
    G,
    F,
    W,
    S,
    E,
    R,
    I,
    w,
    v,
    J,
    oe,
    ue,
    d,
    $,
    h,
    Ue,
    ge,
    ee,
    l,
    wt,
    yt,
    pt
  ];
}
class cr extends Wt {
  constructor(e) {
    super(), Ht(
      this,
      e,
      sr,
      or,
      Ct,
      {
        auto: 0,
        blockspam: 29,
        challengeurl: 15,
        challengejson: 30,
        debug: 16,
        delay: 17,
        expire: 18,
        floating: 1,
        floatinganchor: 19,
        floatingoffset: 20,
        hidefooter: 2,
        hidelogo: 3,
        name: 4,
        maxnumber: 21,
        mockerror: 22,
        refetchonexpire: 23,
        spamfilter: 24,
        strings: 31,
        test: 25,
        verifyurl: 26,
        workers: 27,
        workerurl: 28,
        configure: 32,
        reset: 33,
        verify: 34
      },
      Qt,
      [-1, -1, -1]
    );
  }
  get auto() {
    return this.$$.ctx[0];
  }
  set auto(e) {
    this.$$set({ auto: e }), y();
  }
  get blockspam() {
    return this.$$.ctx[29];
  }
  set blockspam(e) {
    this.$$set({ blockspam: e }), y();
  }
  get challengeurl() {
    return this.$$.ctx[15];
  }
  set challengeurl(e) {
    this.$$set({ challengeurl: e }), y();
  }
  get challengejson() {
    return this.$$.ctx[30];
  }
  set challengejson(e) {
    this.$$set({ challengejson: e }), y();
  }
  get debug() {
    return this.$$.ctx[16];
  }
  set debug(e) {
    this.$$set({ debug: e }), y();
  }
  get delay() {
    return this.$$.ctx[17];
  }
  set delay(e) {
    this.$$set({ delay: e }), y();
  }
  get expire() {
    return this.$$.ctx[18];
  }
  set expire(e) {
    this.$$set({ expire: e }), y();
  }
  get floating() {
    return this.$$.ctx[1];
  }
  set floating(e) {
    this.$$set({ floating: e }), y();
  }
  get floatinganchor() {
    return this.$$.ctx[19];
  }
  set floatinganchor(e) {
    this.$$set({ floatinganchor: e }), y();
  }
  get floatingoffset() {
    return this.$$.ctx[20];
  }
  set floatingoffset(e) {
    this.$$set({ floatingoffset: e }), y();
  }
  get hidefooter() {
    return this.$$.ctx[2];
  }
  set hidefooter(e) {
    this.$$set({ hidefooter: e }), y();
  }
  get hidelogo() {
    return this.$$.ctx[3];
  }
  set hidelogo(e) {
    this.$$set({ hidelogo: e }), y();
  }
  get name() {
    return this.$$.ctx[4];
  }
  set name(e) {
    this.$$set({ name: e }), y();
  }
  get maxnumber() {
    return this.$$.ctx[21];
  }
  set maxnumber(e) {
    this.$$set({ maxnumber: e }), y();
  }
  get mockerror() {
    return this.$$.ctx[22];
  }
  set mockerror(e) {
    this.$$set({ mockerror: e }), y();
  }
  get refetchonexpire() {
    return this.$$.ctx[23];
  }
  set refetchonexpire(e) {
    this.$$set({ refetchonexpire: e }), y();
  }
  get spamfilter() {
    return this.$$.ctx[24];
  }
  set spamfilter(e) {
    this.$$set({ spamfilter: e }), y();
  }
  get strings() {
    return this.$$.ctx[31];
  }
  set strings(e) {
    this.$$set({ strings: e }), y();
  }
  get test() {
    return this.$$.ctx[25];
  }
  set test(e) {
    this.$$set({ test: e }), y();
  }
  get verifyurl() {
    return this.$$.ctx[26];
  }
  set verifyurl(e) {
    this.$$set({ verifyurl: e }), y();
  }
  get workers() {
    return this.$$.ctx[27];
  }
  set workers(e) {
    this.$$set({ workers: e }), y();
  }
  get workerurl() {
    return this.$$.ctx[28];
  }
  set workerurl(e) {
    this.$$set({ workerurl: e }), y();
  }
  get configure() {
    return this.$$.ctx[32];
  }
  get reset() {
    return this.$$.ctx[33];
  }
  get verify() {
    return this.$$.ctx[34];
  }
}
customElements.define("altcha-widget", Ot(cr, { auto: {}, blockspam: {}, challengeurl: {}, challengejson: {}, debug: { type: "Boolean" }, delay: {}, expire: {}, floating: {}, floatinganchor: {}, floatingoffset: {}, hidefooter: { type: "Boolean" }, hidelogo: { type: "Boolean" }, name: {}, maxnumber: {}, mockerror: { type: "Boolean" }, refetchonexpire: { type: "Boolean" }, spamfilter: { type: "Boolean" }, strings: {}, test: { type: "Boolean" }, verifyurl: {}, workers: {}, workerurl: {} }, [], ["configure", "reset", "verify"], !1));
globalThis.createAltchaWorker = (r) => r ? new Worker(new URL(r)) : new Et();
export {
  cr as Altcha
};
