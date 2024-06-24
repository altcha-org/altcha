var yt = Object.defineProperty;
var pt = (r, e, t) => e in r ? yt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var G = (r, e, t) => pt(r, typeof e != "symbol" ? e + "" : e, t);
const Qe = "KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2NvbnN0IGY9bmV3IFRleHRFbmNvZGVyO2Z1bmN0aW9uIGQoZSl7cmV0dXJuWy4uLm5ldyBVaW50OEFycmF5KGUpXS5tYXAodD0+dC50b1N0cmluZygxNikucGFkU3RhcnQoMiwiMCIpKS5qb2luKCIiKX1hc3luYyBmdW5jdGlvbiBwKGUsdCxvKXtyZXR1cm4gZChhd2FpdCBjcnlwdG8uc3VidGxlLmRpZ2VzdChvLnRvVXBwZXJDYXNlKCksZi5lbmNvZGUoZSt0KSkpfWZ1bmN0aW9uIGcoZSx0LG89IlNIQS0yNTYiLGw9MWU2LGM9MCl7Y29uc3QgYT1uZXcgQWJvcnRDb250cm9sbGVyLGk9RGF0ZS5ub3coKTtyZXR1cm57cHJvbWlzZTooYXN5bmMoKT0+e2ZvcihsZXQgbj1jO248PWw7bis9MSl7aWYoYS5zaWduYWwuYWJvcnRlZClyZXR1cm4gbnVsbDtpZihhd2FpdCBwKHQsbixvKT09PWUpcmV0dXJue251bWJlcjpuLHRvb2s6RGF0ZS5ub3coKS1pfX1yZXR1cm4gbnVsbH0pKCksY29udHJvbGxlcjphfX1sZXQgcjtvbm1lc3NhZ2U9YXN5bmMgZT0+e2NvbnN0e3R5cGU6dCxwYXlsb2FkOm99PWUuZGF0YTtpZih0PT09ImFib3J0IilyPT1udWxsfHxyLmFib3J0KCkscj12b2lkIDA7ZWxzZSBpZih0PT09IndvcmsiKXtjb25zdHthbGc6bCxjaGFsbGVuZ2U6YyxtYXg6YSxzYWx0Omksc3RhcnQ6dX09b3x8e30sbj1nKGMsaSxsLGEsdSk7cj1uLmNvbnRyb2xsZXIsbi5wcm9taXNlLnRoZW4ocz0+e3NlbGYucG9zdE1lc3NhZ2UocyYmey4uLnMsd29ya2VyOiEwfSl9KX19fSkoKTsK", _t = (r) => Uint8Array.from(atob(r), (e) => e.charCodeAt(0)), Ge = typeof window < "u" && window.Blob && new Blob([_t(Qe)], { type: "text/javascript;charset=utf-8" });
function kt(r) {
  let e;
  try {
    if (e = Ge && (window.URL || window.webkitURL).createObjectURL(Ge), !e) throw "";
    const t = new Worker(e, {
      name: r == null ? void 0 : r.name
    });
    return t.addEventListener("error", () => {
      (window.URL || window.webkitURL).revokeObjectURL(e);
    }), t;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + Qe,
      {
        name: r == null ? void 0 : r.name
      }
    );
  } finally {
    e && (window.URL || window.webkitURL).revokeObjectURL(e);
  }
}
function ne() {
}
function et(r) {
  return r();
}
function We() {
  return /* @__PURE__ */ Object.create(null);
}
function se(r) {
  r.forEach(et);
}
function tt(r) {
  return typeof r == "function";
}
function xt(r, e) {
  return r != r ? e == e : r !== e || r && typeof r == "object" || typeof r == "function";
}
function Et(r) {
  return Object.keys(r).length === 0;
}
function _(r, e) {
  r.appendChild(e);
}
function Ct(r, e, t) {
  const i = Lt(r);
  if (!i.getElementById(e)) {
    const o = A("style");
    o.id = e, o.textContent = t, Rt(i, o);
  }
}
function Lt(r) {
  if (!r) return document;
  const e = r.getRootNode ? r.getRootNode() : r.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : r.ownerDocument;
}
function Rt(r, e) {
  return _(
    /** @type {Document} */
    r.head || r,
    e
  ), e.sheet;
}
function $(r, e, t) {
  r.insertBefore(e, t || null);
}
function Z(r) {
  r.parentNode && r.parentNode.removeChild(r);
}
function A(r) {
  return document.createElement(r);
}
function B(r) {
  return document.createElementNS("http://www.w3.org/2000/svg", r);
}
function zt(r) {
  return document.createTextNode(r);
}
function Y() {
  return zt(" ");
}
function ve(r, e, t, i) {
  return r.addEventListener(e, t, i), () => r.removeEventListener(e, t, i);
}
function c(r, e, t) {
  t == null ? r.removeAttribute(e) : r.getAttribute(e) !== t && r.setAttribute(e, t);
}
function It(r) {
  return Array.from(r.childNodes);
}
function Xe(r, e, t) {
  r.classList.toggle(e, !!t);
}
function At(r, e, { bubbles: t = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(r, { detail: e, bubbles: t, cancelable: i });
}
function Nt(r) {
  const e = {};
  return r.childNodes.forEach(
    /** @param {Element} node */
    (t) => {
      e[t.slot || "default"] = !0;
    }
  ), e;
}
let le;
function oe(r) {
  le = r;
}
function ke() {
  if (!le) throw new Error("Function called outside component initialization");
  return le;
}
function St(r) {
  ke().$$.on_mount.push(r);
}
function jt(r) {
  ke().$$.on_destroy.push(r);
}
function Tt() {
  const r = ke();
  return (e, t, { cancelable: i = !1 } = {}) => {
    const o = r.$$.callbacks[e];
    if (o) {
      const l = At(
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
const te = [], he = [];
let re = [];
const Be = [], rt = /* @__PURE__ */ Promise.resolve();
let pe = !1;
function nt() {
  pe || (pe = !0, rt.then(w));
}
function Zt() {
  return nt(), rt;
}
function _e(r) {
  re.push(r);
}
const ye = /* @__PURE__ */ new Set();
let ee = 0;
function w() {
  if (ee !== 0)
    return;
  const r = le;
  do {
    try {
      for (; ee < te.length; ) {
        const e = te[ee];
        ee++, oe(e), Mt(e.$$);
      }
    } catch (e) {
      throw te.length = 0, ee = 0, e;
    }
    for (oe(null), te.length = 0, ee = 0; he.length; ) he.pop()();
    for (let e = 0; e < re.length; e += 1) {
      const t = re[e];
      ye.has(t) || (ye.add(t), t());
    }
    re.length = 0;
  } while (te.length);
  for (; Be.length; )
    Be.pop()();
  pe = !1, ye.clear(), oe(r);
}
function Mt(r) {
  if (r.fragment !== null) {
    r.update(), se(r.before_update);
    const e = r.dirty;
    r.dirty = [-1], r.fragment && r.fragment.p(r.ctx, e), r.after_update.forEach(_e);
  }
}
function Vt(r) {
  const e = [], t = [];
  re.forEach((i) => r.indexOf(i) === -1 ? e.push(i) : t.push(i)), t.forEach((i) => i()), re = e;
}
const $t = /* @__PURE__ */ new Set();
function Dt(r, e) {
  r && r.i && ($t.delete(r), r.i(e));
}
function Ut(r, e, t) {
  const { fragment: i, after_update: o } = r.$$;
  i && i.m(e, t), _e(() => {
    const l = r.$$.on_mount.map(et).filter(tt);
    r.$$.on_destroy ? r.$$.on_destroy.push(...l) : se(l), r.$$.on_mount = [];
  }), o.forEach(_e);
}
function Ft(r, e) {
  const t = r.$$;
  t.fragment !== null && (Vt(t.after_update), se(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Gt(r, e) {
  r.$$.dirty[0] === -1 && (te.push(r), nt(), r.$$.dirty.fill(0)), r.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Wt(r, e, t, i, o, l, s = null, u = [-1]) {
  const a = le;
  oe(r);
  const d = r.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: ne,
    not_equal: o,
    bound: We(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: We(),
    dirty: u,
    skip_bound: !1,
    root: e.target || a.$$.root
  };
  s && s(d.root);
  let U = !1;
  if (d.ctx = t ? t(r, e.props || {}, (S, D, ...k) => {
    const F = k.length ? k[0] : D;
    return d.ctx && o(d.ctx[S], d.ctx[S] = F) && (!d.skip_bound && d.bound[S] && d.bound[S](F), U && Gt(r, S)), D;
  }) : [], d.update(), U = !0, se(d.before_update), d.fragment = i ? i(d.ctx) : !1, e.target) {
    if (e.hydrate) {
      const S = It(e.target);
      d.fragment && d.fragment.l(S), S.forEach(Z);
    } else
      d.fragment && d.fragment.c();
    e.intro && Dt(r.$$.fragment), Ut(r, e.target, e.anchor), w();
  }
  oe(a);
}
let it;
typeof HTMLElement == "function" && (it = class extends HTMLElement {
  constructor(e, t, i) {
    super();
    /** The Svelte component constructor */
    G(this, "$$ctor");
    /** Slots */
    G(this, "$$s");
    /** The Svelte component instance */
    G(this, "$$c");
    /** Whether or not the custom element is connected */
    G(this, "$$cn", !1);
    /** Component props data */
    G(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    G(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    G(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    G(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    G(this, "$$l_u", /* @__PURE__ */ new Map());
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
              s = A("slot"), l !== "default" && c(s, "name", l);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(d, U) {
              $(d, s, U);
            },
            d: function(d) {
              d && Z(s);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, i = Nt(this);
      for (const l of this.$$s)
        l in i && (t[l] = [e(l)]);
      for (const l of this.attributes) {
        const s = this.$$g_p(l.name);
        s in this.$$d || (this.$$d[s] = de(s, l.value, this.$$p_d, "toProp"));
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
            const s = de(
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
  attributeChangedCallback(e, t, i) {
    var o;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = de(e, i, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [e]: this.$$d[e] }));
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
function de(r, e, t, i) {
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
function Xt(r, e, t, i, o, l) {
  let s = class extends it {
    constructor() {
      super(r, t, o), this.$$p_d = e;
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
        var d;
        a = de(u, a, e), this.$$d[u] = a, (d = this.$$c) == null || d.$set({ [u]: a });
      }
    });
  }), i.forEach((u) => {
    Object.defineProperty(s.prototype, u, {
      get() {
        var a;
        return (a = this.$$c) == null ? void 0 : a[u];
      }
    });
  }), l && (s = l(s)), r.element = /** @type {any} */
  s, s;
}
class Bt {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    G(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    G(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Ft(this, 1), this.$destroy = ne;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!tt(t))
      return ne;
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
    this.$$set && !Et(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Ht = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Ht);
const Ot = new TextEncoder();
function Yt(r) {
  return [...new Uint8Array(r)].map((e) => e.toString(16).padStart(2, "0")).join("");
}
async function Pt(r, e = "SHA-256", t = 1e5) {
  const i = Date.now().toString(16);
  r || (r = Math.round(Math.random() * t));
  const o = await ot(i, r, e);
  return {
    algorithm: e,
    challenge: o,
    salt: i,
    signature: ""
  };
}
async function ot(r, e, t) {
  return Yt(
    await crypto.subtle.digest(
      t.toUpperCase(),
      Ot.encode(r + e)
    )
  );
}
function Kt(r, e, t = "SHA-256", i = 1e6, o = 0) {
  const l = new AbortController(), s = Date.now();
  return {
    promise: (async () => {
      for (let a = o; a <= i; a += 1) {
        if (l.signal.aborted)
          return null;
        if (await ot(e, a, t) === r)
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
function Jt(r) {
  Ct(r, "svelte-ddsc3z", '.altcha.svelte-ddsc3z.svelte-ddsc3z{background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);position:relative;text-align:left}.altcha.svelte-ddsc3z.svelte-ddsc3z:focus-within{border-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating].svelte-ddsc3z.svelte-ddsc3z{background:var(--altcha-color-base, white);display:none;filter:drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2));left:-100%;position:fixed;top:-100%;width:var(--altcha-max-width, 260px);z-index:999999}.altcha[data-floating=top].svelte-ddsc3z .altcha-anchor-arrow.svelte-ddsc3z{border-bottom-color:transparent;border-top-color:var(--altcha-color-border, #a0a0a0);bottom:-12px;top:auto}.altcha[data-floating=bottom].svelte-ddsc3z.svelte-ddsc3z:focus-within::after{border-bottom-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating=top].svelte-ddsc3z.svelte-ddsc3z:focus-within::after{border-top-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating].svelte-ddsc3z.svelte-ddsc3z:not([data-state=unverified]){display:block}.altcha-anchor-arrow.svelte-ddsc3z.svelte-ddsc3z{border:6px solid transparent;border-bottom-color:var(--altcha-color-border, #a0a0a0);content:"";height:0;left:12px;position:absolute;top:-12px;width:0}.altcha-main.svelte-ddsc3z.svelte-ddsc3z{align-items:center;display:flex;gap:0.4rem;padding:0.7rem}.altcha-label.svelte-ddsc3z.svelte-ddsc3z{flex-grow:1}.altcha-label.svelte-ddsc3z label.svelte-ddsc3z{cursor:pointer}.altcha-logo.svelte-ddsc3z.svelte-ddsc3z{color:currentColor;opacity:0.3}.altcha-logo.svelte-ddsc3z.svelte-ddsc3z:hover{opacity:1}.altcha-error.svelte-ddsc3z.svelte-ddsc3z{color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem}.altcha-footer.svelte-ddsc3z.svelte-ddsc3z{align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.4;padding:0.2rem 0.7rem;text-align:right}.altcha-footer.svelte-ddsc3z.svelte-ddsc3z:hover{opacity:1}.altcha-footer.svelte-ddsc3z>.svelte-ddsc3z:first-child{flex-grow:1}.altcha-footer.svelte-ddsc3z a{color:currentColor}.altcha-checkbox.svelte-ddsc3z.svelte-ddsc3z{display:flex;align-items:center;height:24px;width:24px}.altcha-checkbox.svelte-ddsc3z input.svelte-ddsc3z{width:18px;height:18px;margin:0}.altcha-hidden.svelte-ddsc3z.svelte-ddsc3z{display:none}.altcha-spinner.svelte-ddsc3z.svelte-ddsc3z{animation:svelte-ddsc3z-altcha-spinner 0.75s infinite linear;transform-origin:center}@keyframes svelte-ddsc3z-altcha-spinner{100%{transform:rotate(360deg)}}');
}
function He(r) {
  let e, t, i;
  return {
    c() {
      e = B("svg"), t = B("path"), i = B("path"), c(t, "d", "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"), c(t, "fill", "currentColor"), c(t, "opacity", ".25"), c(i, "d", "M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"), c(i, "fill", "currentColor"), c(i, "class", "altcha-spinner svelte-ddsc3z"), c(e, "width", "24"), c(e, "height", "24"), c(e, "viewBox", "0 0 24 24"), c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(o, l) {
      $(o, e, l), _(e, t), _(e, i);
    },
    d(o) {
      o && Z(e);
    }
  };
}
function qt(r) {
  let e, t = (
    /*_strings*/
    r[11].label + ""
  ), i;
  return {
    c() {
      e = A("label"), c(e, "for", i = /*name*/
      r[4] + "_checkbox"), c(e, "class", "svelte-ddsc3z");
    },
    m(o, l) {
      $(o, e, l), e.innerHTML = t;
    },
    p(o, l) {
      l[0] & /*_strings*/
      2048 && t !== (t = /*_strings*/
      o[11].label + "") && (e.innerHTML = t), l[0] & /*name*/
      16 && i !== (i = /*name*/
      o[4] + "_checkbox") && c(e, "for", i);
    },
    d(o) {
      o && Z(e);
    }
  };
}
function Qt(r) {
  let e, t = (
    /*_strings*/
    r[11].verifying + ""
  );
  return {
    c() {
      e = A("span");
    },
    m(i, o) {
      $(i, e, o), e.innerHTML = t;
    },
    p(i, o) {
      o[0] & /*_strings*/
      2048 && t !== (t = /*_strings*/
      i[11].verifying + "") && (e.innerHTML = t);
    },
    d(i) {
      i && Z(e);
    }
  };
}
function er(r) {
  let e, t = (
    /*_strings*/
    r[11].verified + ""
  ), i, o;
  return {
    c() {
      e = A("span"), i = Y(), o = A("input"), c(o, "type", "hidden"), c(
        o,
        "name",
        /*name*/
        r[4]
      ), o.value = /*payload*/
      r[5];
    },
    m(l, s) {
      $(l, e, s), e.innerHTML = t, $(l, i, s), $(l, o, s);
    },
    p(l, s) {
      s[0] & /*_strings*/
      2048 && t !== (t = /*_strings*/
      l[11].verified + "") && (e.innerHTML = t), s[0] & /*name*/
      16 && c(
        o,
        "name",
        /*name*/
        l[4]
      ), s[0] & /*payload*/
      32 && (o.value = /*payload*/
      l[5]);
    },
    d(l) {
      l && (Z(e), Z(i), Z(o));
    }
  };
}
function Oe(r) {
  let e, t, i, o, l, s, u;
  return {
    c() {
      e = A("div"), t = A("a"), i = B("svg"), o = B("path"), l = B("path"), s = B("path"), c(o, "d", "M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z"), c(o, "fill", "currentColor"), c(l, "d", "M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z"), c(l, "fill", "currentColor"), c(s, "d", "M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z"), c(s, "fill", "currentColor"), c(i, "width", "22"), c(i, "height", "22"), c(i, "viewBox", "0 0 20 20"), c(i, "fill", "none"), c(i, "xmlns", "http://www.w3.org/2000/svg"), c(t, "href", lt), c(t, "target", "_blank"), c(t, "class", "altcha-logo svelte-ddsc3z"), c(t, "aria-label", u = /*_strings*/
      r[11].ariaLinkLabel);
    },
    m(a, d) {
      $(a, e, d), _(e, t), _(t, i), _(i, o), _(i, l), _(i, s);
    },
    p(a, d) {
      d[0] & /*_strings*/
      2048 && u !== (u = /*_strings*/
      a[11].ariaLinkLabel) && c(t, "aria-label", u);
    },
    d(a) {
      a && Z(e);
    }
  };
}
function Ye(r) {
  let e, t, i, o;
  function l(a, d) {
    return (
      /*state*/
      a[6] === b.EXPIRED ? rr : tr
    );
  }
  let s = l(r), u = s(r);
  return {
    c() {
      e = A("div"), t = B("svg"), i = B("path"), o = Y(), u.c(), c(i, "stroke-linecap", "round"), c(i, "stroke-linejoin", "round"), c(i, "d", "M6 18L18 6M6 6l12 12"), c(t, "width", "14"), c(t, "height", "14"), c(t, "xmlns", "http://www.w3.org/2000/svg"), c(t, "fill", "none"), c(t, "viewBox", "0 0 24 24"), c(t, "stroke-width", "1.5"), c(t, "stroke", "currentColor"), c(e, "class", "altcha-error svelte-ddsc3z");
    },
    m(a, d) {
      $(a, e, d), _(e, t), _(t, i), _(e, o), u.m(e, null);
    },
    p(a, d) {
      s === (s = l(a)) && u ? u.p(a, d) : (u.d(1), u = s(a), u && (u.c(), u.m(e, null)));
    },
    d(a) {
      a && Z(e), u.d();
    }
  };
}
function tr(r) {
  let e, t = (
    /*_strings*/
    r[11].error + ""
  );
  return {
    c() {
      e = A("div"), c(
        e,
        "title",
        /*error*/
        r[10]
      );
    },
    m(i, o) {
      $(i, e, o), e.innerHTML = t;
    },
    p(i, o) {
      o[0] & /*_strings*/
      2048 && t !== (t = /*_strings*/
      i[11].error + "") && (e.innerHTML = t), o[0] & /*error*/
      1024 && c(
        e,
        "title",
        /*error*/
        i[10]
      );
    },
    d(i) {
      i && Z(e);
    }
  };
}
function rr(r) {
  let e, t = (
    /*_strings*/
    r[11].expired + ""
  );
  return {
    c() {
      e = A("div"), c(
        e,
        "title",
        /*error*/
        r[10]
      );
    },
    m(i, o) {
      $(i, e, o), e.innerHTML = t;
    },
    p(i, o) {
      o[0] & /*_strings*/
      2048 && t !== (t = /*_strings*/
      i[11].expired + "") && (e.innerHTML = t), o[0] & /*error*/
      1024 && c(
        e,
        "title",
        /*error*/
        i[10]
      );
    },
    d(i) {
      i && Z(e);
    }
  };
}
function Pe(r) {
  let e, t, i = (
    /*_strings*/
    r[11].footer + ""
  );
  return {
    c() {
      e = A("div"), t = A("div"), c(t, "class", "svelte-ddsc3z"), c(e, "class", "altcha-footer svelte-ddsc3z");
    },
    m(o, l) {
      $(o, e, l), _(e, t), t.innerHTML = i;
    },
    p(o, l) {
      l[0] & /*_strings*/
      2048 && i !== (i = /*_strings*/
      o[11].footer + "") && (t.innerHTML = i);
    },
    d(o) {
      o && Z(e);
    }
  };
}
function Ke(r) {
  let e;
  return {
    c() {
      e = A("div"), c(e, "class", "altcha-anchor-arrow svelte-ddsc3z");
    },
    m(t, i) {
      $(t, e, i), r[36](e);
    },
    p: ne,
    d(t) {
      t && Z(e), r[36](null);
    }
  };
}
function nr(r) {
  let e, t, i, o, l, s, u, a, d, U, S, D, k, F, P, N = (
    /*state*/
    r[6] === b.VERIFYING && He()
  );
  function Q(h, y) {
    return (
      /*state*/
      h[6] === b.VERIFIED ? er : (
        /*state*/
        h[6] === b.VERIFYING ? Qt : qt
      )
    );
  }
  let H = Q(r), j = H(r), L = (
    /*hidelogo*/
    r[3] !== !0 && Oe(r)
  ), R = (
    /*error*/
    (r[10] || /*state*/
    r[6] === b.EXPIRED) && Ye(r)
  ), v = (
    /*_strings*/
    r[11].footer && /*hidefooter*/
    r[2] !== !0 && Pe(r)
  ), z = (
    /*floating*/
    r[1] && Ke(r)
  );
  return {
    c() {
      e = A("div"), t = A("div"), N && N.c(), i = Y(), o = A("div"), l = A("input"), a = Y(), d = A("div"), j.c(), U = Y(), L && L.c(), S = Y(), R && R.c(), D = Y(), v && v.c(), k = Y(), z && z.c(), c(l, "type", "checkbox"), c(l, "id", s = /*name*/
      r[4] + "_checkbox"), l.required = u = /*auto*/
      r[0] !== "onsubmit", c(l, "class", "svelte-ddsc3z"), c(o, "class", "altcha-checkbox svelte-ddsc3z"), Xe(
        o,
        "altcha-hidden",
        /*state*/
        r[6] === b.VERIFYING
      ), c(d, "class", "altcha-label svelte-ddsc3z"), c(t, "class", "altcha-main svelte-ddsc3z"), c(e, "class", "altcha svelte-ddsc3z"), c(
        e,
        "data-state",
        /*state*/
        r[6]
      ), c(
        e,
        "data-floating",
        /*floating*/
        r[1]
      );
    },
    m(h, y) {
      $(h, e, y), _(e, t), N && N.m(t, null), _(t, i), _(t, o), _(o, l), l.checked = /*checked*/
      r[7], _(t, a), _(t, d), j.m(d, null), _(t, U), L && L.m(t, null), _(e, S), R && R.m(e, null), _(e, D), v && v.m(e, null), _(e, k), z && z.m(e, null), r[37](e), F || (P = [
        ve(
          l,
          "change",
          /*input_change_handler*/
          r[35]
        ),
        ve(
          l,
          "change",
          /*onCheckedChange*/
          r[12]
        ),
        ve(
          l,
          "invalid",
          /*onInvalid*/
          r[13]
        )
      ], F = !0);
    },
    p(h, y) {
      /*state*/
      h[6] === b.VERIFYING ? N || (N = He(), N.c(), N.m(t, i)) : N && (N.d(1), N = null), y[0] & /*name*/
      16 && s !== (s = /*name*/
      h[4] + "_checkbox") && c(l, "id", s), y[0] & /*auto*/
      1 && u !== (u = /*auto*/
      h[0] !== "onsubmit") && (l.required = u), y[0] & /*checked*/
      128 && (l.checked = /*checked*/
      h[7]), y[0] & /*state*/
      64 && Xe(
        o,
        "altcha-hidden",
        /*state*/
        h[6] === b.VERIFYING
      ), H === (H = Q(h)) && j ? j.p(h, y) : (j.d(1), j = H(h), j && (j.c(), j.m(d, null))), /*hidelogo*/
      h[3] !== !0 ? L ? L.p(h, y) : (L = Oe(h), L.c(), L.m(t, null)) : L && (L.d(1), L = null), /*error*/
      h[10] || /*state*/
      h[6] === b.EXPIRED ? R ? R.p(h, y) : (R = Ye(h), R.c(), R.m(e, D)) : R && (R.d(1), R = null), /*_strings*/
      h[11].footer && /*hidefooter*/
      h[2] !== !0 ? v ? v.p(h, y) : (v = Pe(h), v.c(), v.m(e, k)) : v && (v.d(1), v = null), /*floating*/
      h[1] ? z ? z.p(h, y) : (z = Ke(h), z.c(), z.m(e, null)) : z && (z.d(1), z = null), y[0] & /*state*/
      64 && c(
        e,
        "data-state",
        /*state*/
        h[6]
      ), y[0] & /*floating*/
      2 && c(
        e,
        "data-floating",
        /*floating*/
        h[1]
      );
    },
    i: ne,
    o: ne,
    d(h) {
      h && Z(e), N && N.d(), j.d(), L && L.d(), R && R.d(), v && v.d(), z && z.d(), r[37](null), F = !1, se(P);
    }
  };
}
const Je = "Visit Altcha.org", lt = "https://altcha.org/";
function qe(r) {
  return JSON.parse(r);
}
function ir() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function or(r, e, t) {
  var Ve, $e;
  let i, o, l, { auto: s = void 0 } = e, { blockspam: u = void 0 } = e, { challengeurl: a = void 0 } = e, { challengejson: d = void 0 } = e, { debug: U = !1 } = e, { delay: S = 0 } = e, { expire: D = void 0 } = e, { floating: k = void 0 } = e, { floatinganchor: F = void 0 } = e, { floatingoffset: P = void 0 } = e, { hidefooter: N = !1 } = e, { hidelogo: Q = !1 } = e, { name: H = "altcha" } = e, { maxnumber: j = 1e6 } = e, { mockerror: L = !1 } = e, { refetchonexpire: R = !0 } = e, { spamfilter: v = !1 } = e, { strings: z = void 0 } = e, { test: h = !1 } = e, { verifyurl: y = void 0 } = e, { workers: ie = Math.min(16, navigator.hardwareConcurrency || 8) } = e, { workerurl: ge = void 0 } = e;
  const me = Tt(), xe = ["SHA-256", "SHA-384", "SHA-512"], Ee = ($e = (Ve = document.documentElement.lang) == null ? void 0 : Ve.split("-")) == null ? void 0 : $e[0];
  let O = !1, E, K = null, ce = null, m = null, be = null, J = null, M = b.UNVERIFIED, W = null;
  jt(() => {
    m && (m.removeEventListener("submit", Le), m.removeEventListener("reset", Re), m.removeEventListener("focusin", Ce), m = null), W && (clearTimeout(W), W = null), document.removeEventListener("click", Ne), document.removeEventListener("scroll", Se), window.removeEventListener("resize", Te);
  }), St(() => {
    C("mounted", "0.6.0"), C("workers", ie), h && C("using test mode"), D && ae(D), s !== void 0 && C("auto", s), k !== void 0 && Ze(k), m = E.closest("form"), m && (m.addEventListener("submit", Le, { capture: !0 }), m.addEventListener("reset", Re), s === "onfocus" && m.addEventListener("focusin", Ce)), s === "onload" && q();
  });
  function C(...n) {
    (U || n.some((f) => f instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", ...n);
  }
  function Ce(n) {
    M === b.UNVERIFIED && q();
  }
  function Le(n) {
    m && s === "onsubmit" && (M === b.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), q().then(() => {
      m == null || m.requestSubmit();
    })) : M !== b.VERIFIED && (n.preventDefault(), n.stopPropagation(), M === b.VERIFYING && je()));
  }
  function Re() {
    fe();
  }
  function ze(n, f) {
    return btoa(JSON.stringify({
      algorithm: n.algorithm,
      challenge: n.challenge,
      number: f.number,
      salt: n.salt,
      signature: n.signature,
      test: h ? !0 : void 0,
      took: f.took
    }));
  }
  function Ie(n) {
    if (!n.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (n.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!xe.includes(n.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${xe.join(", ")}`);
    if (!n.challenge || n.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!n.salt || n.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function st() {
    var n;
    if (L)
      throw C("mocking error"), new Error("Mocked error.");
    if (i)
      return C("using provided json data"), i;
    if (h)
      return C("generating test challenge", { test: h }), Pt(typeof h != "boolean" ? +h : void 0);
    {
      if (!a)
        throw new Error("Attribute challengeurl not set.");
      C("fetching challenge from", a);
      const f = await fetch(a, {
        headers: {
          "x-altcha-spam-filter": v ? "1" : "0"
        }
      });
      if (f.status !== 200)
        throw new Error(`Server responded with ${f.status}.`);
      const g = f.headers.get("Expires"), I = f.headers.get("X-Altcha-Config"), T = await f.json(), V = new URLSearchParams((n = T.salt.split("?")) == null ? void 0 : n[1]), X = V.get("expires") || V.get("expire");
      if (X) {
        const p = new Date(+X * 1e3), x = isNaN(p.getTime()) ? 0 : p.getTime() - Date.now();
        x > 0 && ae(x);
      }
      if (I)
        try {
          const p = JSON.parse(I);
          p && typeof p == "object" && (p.verifyurl && (p.verifyurl = new URL(p.verifyurl, new URL(a)).toString()), Me(p));
        } catch (p) {
          C("unable to configure from X-Altcha-Config", p);
        }
      if (!D && (g != null && g.length)) {
        const p = Date.parse(g);
        if (p) {
          const x = p - Date.now();
          x > 0 && ae(x);
        }
      }
      return T;
    }
  }
  function Ae() {
    a && R && M === b.VERIFIED ? q() : fe(b.EXPIRED, l.expired);
  }
  async function ct(n) {
    let f = null;
    if ("Worker" in window) {
      try {
        f = await at(n.challenge, n.salt, n.algorithm, n.maxnumber);
      } catch (g) {
        C(g);
      }
      if ((f == null ? void 0 : f.number) !== void 0)
        return { data: n, solution: f };
    }
    return {
      data: n,
      solution: await Kt(n.challenge, n.salt, n.algorithm, n.maxnumber || j).promise
    };
  }
  async function at(n, f, g, I = typeof h == "number" ? h : j, T = Math.ceil(ie)) {
    const V = [];
    if (T < 1)
      throw new Error("Wrong number of workers configured.");
    if (T > 16)
      throw new Error("Too many workers. Max. 16 allowed workers.");
    for (let x = 0; x < T; x++)
      V.push(createAltchaWorker(ge));
    const X = Math.ceil(I / T), p = await Promise.all(V.map((x, ue) => {
      const De = ue * X;
      return new Promise((vt) => {
        x.addEventListener("message", (Ue) => {
          if (Ue.data)
            for (const Fe of V)
              Fe !== x && Fe.postMessage({ type: "abort" });
          vt(Ue.data);
        }), x.postMessage({
          payload: {
            alg: g,
            challenge: n,
            max: De + X,
            salt: f,
            start: De
          },
          type: "work"
        });
      });
    }));
    for (const x of V)
      x.terminate();
    return p.find((x) => !!x) || null;
  }
  function ft() {
    [b.UNVERIFIED, b.ERROR, b.EXPIRED].includes(M) ? v && (m == null ? void 0 : m.reportValidity()) === !1 ? t(7, O = !1) : q() : t(7, O = !0);
  }
  function Ne(n) {
    const f = n.target;
    k && f && !E.contains(f) && M === b.VERIFIED && t(8, E.style.display = "none", E);
  }
  function Se() {
    k && we();
  }
  function je() {
    M === b.VERIFYING && alert(l.waitAlert);
  }
  function ut(n) {
    k && M !== b.UNVERIFIED && requestAnimationFrame(() => {
      we();
    });
  }
  function Te() {
    k && we();
  }
  function ae(n) {
    C("expire", n), W && (clearTimeout(W), W = null), n < 1 ? Ae() : W = setTimeout(Ae, n);
  }
  function Ze(n) {
    C("floating", n), k !== n && (t(8, E.style.left = "", E), t(8, E.style.top = "", E)), t(1, k = n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : k), k ? (s || t(0, s = "onsubmit"), document.addEventListener("scroll", Se), document.addEventListener("click", Ne), window.addEventListener("resize", Te)) : s === "onsubmit" && t(0, s = void 0);
  }
  function dt(n) {
    var g;
    const f = m == null ? void 0 : m.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((g = f == null ? void 0 : f.value) == null ? void 0 : g.slice(f.value.indexOf("@"))) || void 0;
  }
  function ht(n) {
    return [
      ...(m == null ? void 0 : m.querySelectorAll(n != null && n.length ? n.map((g) => `input[name="${g}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (g, I) => {
        const T = I.name, V = I.value.trim();
        return T && V && (g[T] = V), g;
      },
      {}
    );
  }
  async function gt(n) {
    if (!y)
      throw new Error("Attribute verifyurl not set.");
    C("requesting server verification from", y);
    const f = { payload: n };
    if (v) {
      const { email: T, expectedLanguages: V, expectedCountries: X, fields: p, ipAddress: x, timeZone: ue } = typeof v == "object" ? v : {
        email: void 0,
        expectedCountries: void 0,
        expectedLanguages: void 0,
        fields: void 0,
        ipAddress: void 0,
        timeZone: void 0
      };
      f.ipAddress = x === !1 ? void 0 : x || "auto", f.email = T === !1 ? void 0 : dt(T), f.fields = p === !1 ? void 0 : ht(p), f.timeZone = ue === !1 ? void 0 : ue || ir(), f.expectedCountries = X, f.expectedLanguages = V || (Ee ? [Ee] : void 0);
    }
    const g = await fetch(y, {
      body: JSON.stringify(f),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (g.status !== 200)
      throw new Error(`Server responded with ${g.status}.`);
    const I = await g.json();
    if (I != null && I.payload && t(5, J = I.payload), me("serververification", I), u && I.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  function we(n = 20) {
    if (E)
      if (ce || (ce = (F ? document.querySelector(F) : m == null ? void 0 : m.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || m), ce) {
        const f = parseInt(P, 10) || 12, g = ce.getBoundingClientRect(), I = E.getBoundingClientRect(), T = document.documentElement.clientHeight, V = document.documentElement.clientWidth, X = k === "auto" ? g.bottom + I.height + f + n > T : k === "top", p = Math.max(n, Math.min(V - n - I.width, g.left + g.width / 2 - I.width / 2));
        if (X ? t(8, E.style.top = `${g.top - (I.height + f)}px`, E) : t(8, E.style.top = `${g.bottom + f}px`, E), t(8, E.style.left = `${p}px`, E), E.setAttribute("data-floating", X ? "top" : "bottom"), K) {
          const x = K.getBoundingClientRect();
          t(9, K.style.left = g.left - p + g.width / 2 - x.width / 2 + "px", K);
        }
      } else
        C("unable to find floating anchor element");
  }
  function Me(n) {
    n.auto !== void 0 && (t(0, s = n.auto), s === "onload" && q()), n.floatinganchor !== void 0 && t(18, F = n.floatinganchor), n.delay !== void 0 && t(16, S = n.delay), n.floatingoffset !== void 0 && t(19, P = n.floatingoffset), n.floating !== void 0 && Ze(n.floating), n.expire !== void 0 && (ae(n.expire), t(17, D = n.expire)), n.challenge && (Ie(n.challenge), i = n.challenge), n.challengeurl !== void 0 && t(14, a = n.challengeurl), n.debug !== void 0 && t(15, U = !!n.debug), n.hidefooter !== void 0 && t(2, N = !!n.hidefooter), n.hidelogo !== void 0 && t(3, Q = !!n.hidelogo), n.maxnumber !== void 0 && t(20, j = +n.maxnumber), n.mockerror !== void 0 && t(21, L = !!n.mockerror), n.name !== void 0 && t(4, H = n.name), n.refetchonexpire !== void 0 && t(22, R = !!n.refetchonexpire), n.spamfilter !== void 0 && t(23, v = typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && t(34, o = n.strings), n.test !== void 0 && t(24, h = typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && t(25, y = n.verifyurl), n.workers !== void 0 && t(26, ie = +n.workers);
  }
  function fe(n = b.UNVERIFIED, f = null) {
    W && (clearTimeout(W), W = null), t(7, O = !1), t(10, be = f), t(5, J = null), t(6, M = n);
  }
  async function q() {
    return fe(b.VERIFYING), await new Promise((n) => setTimeout(n, S || 0)), st().then((n) => (Ie(n), C("challenge", n), ct(n))).then(({ data: n, solution: f }) => {
      if (C("solution", f), (f == null ? void 0 : f.number) !== void 0) {
        if (y)
          return gt(ze(n, f));
        t(5, J = ze(n, f)), C("payload", J);
      } else
        throw C("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      Zt().then(() => {
        t(6, M = b.VERIFIED), t(7, O = !0), C("verified"), me("verified", { payload: J });
      });
    }).catch((n) => {
      C(n), t(6, M = b.ERROR), t(7, O = !1), t(10, be = n.message);
    });
  }
  function mt() {
    O = this.checked, t(7, O);
  }
  function bt(n) {
    he[n ? "unshift" : "push"](() => {
      K = n, t(9, K);
    });
  }
  function wt(n) {
    he[n ? "unshift" : "push"](() => {
      E = n, t(8, E);
    });
  }
  return r.$$set = (n) => {
    "auto" in n && t(0, s = n.auto), "blockspam" in n && t(27, u = n.blockspam), "challengeurl" in n && t(14, a = n.challengeurl), "challengejson" in n && t(28, d = n.challengejson), "debug" in n && t(15, U = n.debug), "delay" in n && t(16, S = n.delay), "expire" in n && t(17, D = n.expire), "floating" in n && t(1, k = n.floating), "floatinganchor" in n && t(18, F = n.floatinganchor), "floatingoffset" in n && t(19, P = n.floatingoffset), "hidefooter" in n && t(2, N = n.hidefooter), "hidelogo" in n && t(3, Q = n.hidelogo), "name" in n && t(4, H = n.name), "maxnumber" in n && t(20, j = n.maxnumber), "mockerror" in n && t(21, L = n.mockerror), "refetchonexpire" in n && t(22, R = n.refetchonexpire), "spamfilter" in n && t(23, v = n.spamfilter), "strings" in n && t(29, z = n.strings), "test" in n && t(24, h = n.test), "verifyurl" in n && t(25, y = n.verifyurl), "workers" in n && t(26, ie = n.workers), "workerurl" in n && t(30, ge = n.workerurl);
  }, r.$$.update = () => {
    r.$$.dirty[0] & /*challengejson*/
    268435456 && (i = d ? qe(d) : void 0), r.$$.dirty[0] & /*strings*/
    536870912 && t(34, o = z ? qe(z) : {}), r.$$.dirty[1] & /*parsedStrings*/
    8 && t(11, l = {
      ariaLinkLabel: Je,
      error: "Verification failed. Try again later.",
      expired: "Verification expired. Try again.",
      footer: `Protected by <a href="${lt}" target="_blank" aria-label="${o.ariaLinkLabel || Je}">ALTCHA</a>`,
      label: "I'm not a robot",
      verified: "Verified",
      verifying: "Verifying...",
      waitAlert: "Verifying... please wait.",
      ...o
    }), r.$$.dirty[0] & /*payload, state*/
    96 && me("statechange", { payload: J, state: M }), r.$$.dirty[0] & /*state*/
    64 && ut();
  }, [
    s,
    k,
    N,
    Q,
    H,
    J,
    M,
    O,
    E,
    K,
    be,
    l,
    ft,
    je,
    a,
    U,
    S,
    D,
    F,
    P,
    j,
    L,
    R,
    v,
    h,
    y,
    ie,
    u,
    d,
    z,
    ge,
    Me,
    fe,
    q,
    o,
    mt,
    bt,
    wt
  ];
}
class lr extends Bt {
  constructor(e) {
    super(), Wt(
      this,
      e,
      or,
      nr,
      xt,
      {
        auto: 0,
        blockspam: 27,
        challengeurl: 14,
        challengejson: 28,
        debug: 15,
        delay: 16,
        expire: 17,
        floating: 1,
        floatinganchor: 18,
        floatingoffset: 19,
        hidefooter: 2,
        hidelogo: 3,
        name: 4,
        maxnumber: 20,
        mockerror: 21,
        refetchonexpire: 22,
        spamfilter: 23,
        strings: 29,
        test: 24,
        verifyurl: 25,
        workers: 26,
        workerurl: 30,
        configure: 31,
        reset: 32,
        verify: 33
      },
      Jt,
      [-1, -1, -1]
    );
  }
  get auto() {
    return this.$$.ctx[0];
  }
  set auto(e) {
    this.$$set({ auto: e }), w();
  }
  get blockspam() {
    return this.$$.ctx[27];
  }
  set blockspam(e) {
    this.$$set({ blockspam: e }), w();
  }
  get challengeurl() {
    return this.$$.ctx[14];
  }
  set challengeurl(e) {
    this.$$set({ challengeurl: e }), w();
  }
  get challengejson() {
    return this.$$.ctx[28];
  }
  set challengejson(e) {
    this.$$set({ challengejson: e }), w();
  }
  get debug() {
    return this.$$.ctx[15];
  }
  set debug(e) {
    this.$$set({ debug: e }), w();
  }
  get delay() {
    return this.$$.ctx[16];
  }
  set delay(e) {
    this.$$set({ delay: e }), w();
  }
  get expire() {
    return this.$$.ctx[17];
  }
  set expire(e) {
    this.$$set({ expire: e }), w();
  }
  get floating() {
    return this.$$.ctx[1];
  }
  set floating(e) {
    this.$$set({ floating: e }), w();
  }
  get floatinganchor() {
    return this.$$.ctx[18];
  }
  set floatinganchor(e) {
    this.$$set({ floatinganchor: e }), w();
  }
  get floatingoffset() {
    return this.$$.ctx[19];
  }
  set floatingoffset(e) {
    this.$$set({ floatingoffset: e }), w();
  }
  get hidefooter() {
    return this.$$.ctx[2];
  }
  set hidefooter(e) {
    this.$$set({ hidefooter: e }), w();
  }
  get hidelogo() {
    return this.$$.ctx[3];
  }
  set hidelogo(e) {
    this.$$set({ hidelogo: e }), w();
  }
  get name() {
    return this.$$.ctx[4];
  }
  set name(e) {
    this.$$set({ name: e }), w();
  }
  get maxnumber() {
    return this.$$.ctx[20];
  }
  set maxnumber(e) {
    this.$$set({ maxnumber: e }), w();
  }
  get mockerror() {
    return this.$$.ctx[21];
  }
  set mockerror(e) {
    this.$$set({ mockerror: e }), w();
  }
  get refetchonexpire() {
    return this.$$.ctx[22];
  }
  set refetchonexpire(e) {
    this.$$set({ refetchonexpire: e }), w();
  }
  get spamfilter() {
    return this.$$.ctx[23];
  }
  set spamfilter(e) {
    this.$$set({ spamfilter: e }), w();
  }
  get strings() {
    return this.$$.ctx[29];
  }
  set strings(e) {
    this.$$set({ strings: e }), w();
  }
  get test() {
    return this.$$.ctx[24];
  }
  set test(e) {
    this.$$set({ test: e }), w();
  }
  get verifyurl() {
    return this.$$.ctx[25];
  }
  set verifyurl(e) {
    this.$$set({ verifyurl: e }), w();
  }
  get workers() {
    return this.$$.ctx[26];
  }
  set workers(e) {
    this.$$set({ workers: e }), w();
  }
  get workerurl() {
    return this.$$.ctx[30];
  }
  set workerurl(e) {
    this.$$set({ workerurl: e }), w();
  }
  get configure() {
    return this.$$.ctx[31];
  }
  get reset() {
    return this.$$.ctx[32];
  }
  get verify() {
    return this.$$.ctx[33];
  }
}
customElements.define("altcha-widget", Xt(lr, { auto: {}, blockspam: {}, challengeurl: {}, challengejson: {}, debug: { type: "Boolean" }, delay: {}, expire: {}, floating: {}, floatinganchor: {}, floatingoffset: {}, hidefooter: { type: "Boolean" }, hidelogo: { type: "Boolean" }, name: {}, maxnumber: {}, mockerror: { type: "Boolean" }, refetchonexpire: { type: "Boolean" }, spamfilter: { type: "Boolean" }, strings: {}, test: { type: "Boolean" }, verifyurl: {}, workers: {}, workerurl: {} }, [], ["configure", "reset", "verify"], !1));
globalThis.createAltchaWorker = (r) => r ? new Worker(new URL(r)) : new kt();
export {
  lr as Altcha
};
