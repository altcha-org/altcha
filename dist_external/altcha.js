var Kt = Object.defineProperty;
var ut = (n) => {
  throw TypeError(n);
};
var Qt = (n, e, t) => e in n ? Kt(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var P = (n, e, t) => Qt(n, typeof e != "symbol" ? e + "" : e, t), ht = (n, e, t) => e.has(n) || ut("Cannot " + t);
var G = (n, e, t) => (ht(n, e, "read from private field"), t ? t.call(n) : e.get(n)), fe = (n, e, t) => e.has(n) ? ut("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), dt = (n, e, t, r) => (ht(n, e, "write to private field"), r ? r.call(n, t) : e.set(n, t), t);
function Me() {
}
function $t(n, e) {
  for (const t in e) n[t] = e[t];
  return (
    /** @type {T & S} */
    n
  );
}
function At(n) {
  return n();
}
function mt() {
  return /* @__PURE__ */ Object.create(null);
}
function Ie(n) {
  n.forEach(At);
}
function xt(n) {
  return typeof n == "function";
}
function en(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function tn(n) {
  return Object.keys(n).length === 0;
}
function nn(n, e, t, r) {
  if (n) {
    const o = Lt(n, e, t, r);
    return n[0](o);
  }
}
function Lt(n, e, t, r) {
  return n[1] && r ? $t(t.ctx.slice(), n[1](r(e))) : t.ctx;
}
function rn(n, e, t, r) {
  if (n[2] && r) {
    const o = n[2](r(t));
    if (e.dirty === void 0)
      return o;
    if (typeof o == "object") {
      const s = [], l = Math.max(e.dirty.length, o.length);
      for (let c = 0; c < l; c += 1)
        s[c] = e.dirty[c] | o[c];
      return s;
    }
    return e.dirty | o;
  }
  return e.dirty;
}
function on(n, e, t, r, o, s) {
  if (o) {
    const l = Lt(e, t, r, s);
    n.p(l, o);
  }
}
function sn(n) {
  if (n.ctx.length > 32) {
    const e = [], t = n.ctx.length / 32;
    for (let r = 0; r < t; r++)
      e[r] = -1;
    return e;
  }
  return -1;
}
function I(n, e) {
  n.appendChild(e);
}
function B(n, e, t) {
  n.insertBefore(e, t || null);
}
function S(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function M(n) {
  return document.createElement(n);
}
function re(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function It(n) {
  return document.createTextNode(n);
}
function Q() {
  return It(" ");
}
function ln() {
  return It("");
}
function Pe(n, e, t, r) {
  return n.addEventListener(e, t, r), () => n.removeEventListener(e, t, r);
}
function u(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
function cn(n) {
  return Array.from(n.childNodes);
}
function gt(n, e, t) {
  n.classList.toggle(e, !!t);
}
function an(n, e, { bubbles: t = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(n, { detail: e, bubbles: t, cancelable: r });
}
function fn(n) {
  const e = {};
  return n.childNodes.forEach(
    /** @param {Element} node */
    (t) => {
      e[t.slot || "default"] = !0;
    }
  ), e;
}
let pe;
function ke(n) {
  pe = n;
}
function qe() {
  if (!pe) throw new Error("Function called outside component initialization");
  return pe;
}
function un(n) {
  qe().$$.on_mount.push(n);
}
function hn(n) {
  qe().$$.on_destroy.push(n);
}
function dn() {
  const n = qe();
  return (e, t, { cancelable: r = !1 } = {}) => {
    const o = n.$$.callbacks[e];
    if (o) {
      const s = an(
        /** @type {string} */
        e,
        t,
        { cancelable: r }
      );
      return o.slice().forEach((l) => {
        l.call(n, s);
      }), !s.defaultPrevented;
    }
    return !0;
  };
}
const he = [], Ne = [];
let de = [];
const bt = [], Tt = /* @__PURE__ */ Promise.resolve();
let Oe = !1;
function Rt() {
  Oe || (Oe = !0, Tt.then(E));
}
function mn() {
  return Rt(), Tt;
}
function He(n) {
  de.push(n);
}
const Be = /* @__PURE__ */ new Set();
let ue = 0;
function E() {
  if (ue !== 0)
    return;
  const n = pe;
  do {
    try {
      for (; ue < he.length; ) {
        const e = he[ue];
        ue++, ke(e), gn(e.$$);
      }
    } catch (e) {
      throw he.length = 0, ue = 0, e;
    }
    for (ke(null), he.length = 0, ue = 0; Ne.length; ) Ne.pop()();
    for (let e = 0; e < de.length; e += 1) {
      const t = de[e];
      Be.has(t) || (Be.add(t), t());
    }
    de.length = 0;
  } while (he.length);
  for (; bt.length; )
    bt.pop()();
  Oe = !1, Be.clear(), ke(n);
}
function gn(n) {
  if (n.fragment !== null) {
    n.update(), Ie(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(He);
  }
}
function bn(n) {
  const e = [], t = [];
  de.forEach((r) => n.indexOf(r) === -1 ? e.push(r) : t.push(r)), t.forEach((r) => r()), de = e;
}
const De = /* @__PURE__ */ new Set();
let yn;
function Ft(n, e) {
  n && n.i && (De.delete(n), n.i(e));
}
function wn(n, e, t, r) {
  if (n && n.o) {
    if (De.has(n)) return;
    De.add(n), yn.c.push(() => {
      De.delete(n);
    }), n.o(e);
  }
}
function _n(n, e, t) {
  const { fragment: r, after_update: o } = n.$$;
  r && r.m(e, t), He(() => {
    const s = n.$$.on_mount.map(At).filter(xt);
    n.$$.on_destroy ? n.$$.on_destroy.push(...s) : Ie(s), n.$$.on_mount = [];
  }), o.forEach(He);
}
function En(n, e) {
  const t = n.$$;
  t.fragment !== null && (bn(t.after_update), Ie(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function vn(n, e) {
  n.$$.dirty[0] === -1 && (he.push(n), Rt(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function kn(n, e, t, r, o, s, l = null, c = [-1]) {
  const a = pe;
  ke(n);
  const h = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: Me,
    not_equal: o,
    bound: mt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: mt(),
    dirty: c,
    skip_bound: !1,
    root: e.target || a.$$.root
  };
  l && l(h.root);
  let w = !1;
  if (h.ctx = t ? t(n, e.props || {}, (x, $, ...k) => {
    const J = k.length ? k[0] : $;
    return h.ctx && o(h.ctx[x], h.ctx[x] = J) && (!h.skip_bound && h.bound[x] && h.bound[x](J), w && vn(n, x)), $;
  }) : [], h.update(), w = !0, Ie(h.before_update), h.fragment = r ? r(h.ctx) : !1, e.target) {
    if (e.hydrate) {
      const x = cn(e.target);
      h.fragment && h.fragment.l(x), x.forEach(S);
    } else
      h.fragment && h.fragment.c();
    e.intro && Ft(n.$$.fragment), _n(n, e.target, e.anchor), E();
  }
  ke(a);
}
let Dt;
typeof HTMLElement == "function" && (Dt = class extends HTMLElement {
  constructor(e, t, r) {
    super();
    /** The Svelte component constructor */
    P(this, "$$ctor");
    /** Slots */
    P(this, "$$s");
    /** The Svelte component instance */
    P(this, "$$c");
    /** Whether or not the custom element is connected */
    P(this, "$$cn", !1);
    /** Component props data */
    P(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    P(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    P(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    P(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    P(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = e, this.$$s = t, r && this.attachShadow({ mode: "open" });
  }
  addEventListener(e, t, r) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
      const o = this.$$c.$on(e, t);
      this.$$l_u.set(t, o);
    }
    super.addEventListener(e, t, r);
  }
  removeEventListener(e, t, r) {
    if (super.removeEventListener(e, t, r), this.$$c) {
      const o = this.$$l_u.get(t);
      o && (o(), this.$$l_u.delete(t));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(s) {
        return () => {
          let l;
          return {
            c: function() {
              l = M("slot"), s !== "default" && u(l, "name", s);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(h, w) {
              B(h, l, w);
            },
            d: function(h) {
              h && S(l);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, r = fn(this);
      for (const s of this.$$s)
        s in r && (t[s] = [e(s)]);
      for (const s of this.attributes) {
        const l = this.$$g_p(s.name);
        l in this.$$d || (this.$$d[l] = Se(l, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
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
        for (const s in this.$$p_d)
          if (this.$$d[s] = this.$$c.$$.ctx[this.$$c.$$.props[s]], this.$$p_d[s].reflect) {
            const l = Se(
              s,
              this.$$d[s],
              this.$$p_d,
              "toAttribute"
            );
            l == null ? this.removeAttribute(this.$$p_d[s].attribute || s) : this.setAttribute(this.$$p_d[s].attribute || s, l);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(o), o();
      for (const s in this.$$l)
        for (const l of this.$$l[s]) {
          const c = this.$$c.$on(s, l);
          this.$$l_u.set(l, c);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(e, t, r) {
    var o;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Se(e, r, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$c = void 0);
    });
  }
  $$g_p(e) {
    return Object.keys(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function Se(n, e, t, r) {
  var s;
  const o = (s = t[n]) == null ? void 0 : s.type;
  if (e = o === "Boolean" && typeof e != "boolean" ? e != null : e, !r || !t[n])
    return e;
  if (r === "toAttribute")
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
function pn(n, e, t, r, o, s) {
  let l = class extends Dt {
    constructor() {
      super(n, t, o), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Object.keys(e).map(
        (c) => (e[c].attribute || c).toLowerCase()
      );
    }
  };
  return Object.keys(e).forEach((c) => {
    Object.defineProperty(l.prototype, c, {
      get() {
        return this.$$c && c in this.$$c ? this.$$c[c] : this.$$d[c];
      },
      set(a) {
        var h;
        a = Se(c, a, e), this.$$d[c] = a, (h = this.$$c) == null || h.$set({ [c]: a });
      }
    });
  }), r.forEach((c) => {
    Object.defineProperty(l.prototype, c, {
      get() {
        var a;
        return (a = this.$$c) == null ? void 0 : a[c];
      }
    });
  }), n.element = /** @type {any} */
  l, l;
}
class Cn {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    P(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    P(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    En(this, 1), this.$destroy = Me;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!xt(t))
      return Me;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(t), () => {
      const o = r.indexOf(t);
      o !== -1 && r.splice(o, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !tn(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const An = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(An);
const St = new TextEncoder();
function xn(n) {
  return [...new Uint8Array(n)].map((e) => e.toString(16).padStart(2, "0")).join("");
}
async function Ln(n, e = "SHA-256", t = 1e5) {
  const r = Date.now().toString(16);
  n || (n = Math.round(Math.random() * t));
  const o = await Mt(r, n, e);
  return {
    algorithm: e,
    challenge: o,
    salt: r,
    signature: ""
  };
}
async function Mt(n, e, t) {
  return xn(
    await crypto.subtle.digest(
      t.toUpperCase(),
      St.encode(n + e)
    )
  );
}
function In(n, e, t = "SHA-256", r = 1e6, o = 0) {
  const s = new AbortController(), l = Date.now();
  return {
    promise: (async () => {
      for (let a = o; a <= r; a += 1) {
        if (s.signal.aborted)
          return null;
        if (await Mt(e, a, t) === n)
          return {
            number: a,
            took: Date.now() - l
          };
      }
      return null;
    })(),
    controller: s
  };
}
function Nt() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function Tn(n) {
  const e = atob(n), t = new Uint8Array(e.length);
  for (let r = 0; r < e.length; r++)
    t[r] = e.charCodeAt(r);
  return t;
}
function Rn(n, e = 12) {
  const t = new Uint8Array(e);
  for (let r = 0; r < e; r++)
    t[r] = n % 256, n = Math.floor(n / 256);
  return t;
}
async function Fn(n, e = "", t = 1e6, r = 0) {
  const o = "AES-GCM", s = new AbortController(), l = Date.now(), c = async () => {
    for (let w = r; w <= t; w += 1) {
      if (s.signal.aborted || !a || !h)
        return null;
      try {
        const x = await crypto.subtle.decrypt(
          {
            name: o,
            iv: Rn(w)
          },
          a,
          h
        );
        if (x)
          return {
            clearText: new TextDecoder().decode(x),
            took: Date.now() - l
          };
      } catch {
      }
    }
    return null;
  };
  let a = null, h = null;
  try {
    h = Tn(n);
    const w = await crypto.subtle.digest(
      "SHA-256",
      St.encode(e)
    );
    a = await crypto.subtle.importKey(
      "raw",
      w,
      o,
      !1,
      ["decrypt"]
    );
  } catch {
    return {
      promise: Promise.reject(),
      controller: s
    };
  }
  return {
    promise: c(),
    controller: s
  };
}
var me, ge, Ce, Ae, xe, Le;
class Dn {
  constructor(e) {
    P(this, "beaconUrl", null);
    P(this, "error", null);
    P(this, "loadTime", Date.now());
    P(this, "submitTime", null);
    P(this, "startTime", null);
    P(this, "viewTimeThresholdMs", 1500);
    fe(this, me, {});
    fe(this, ge, null);
    fe(this, Ce, this.onFormChange.bind(this));
    fe(this, Ae, this.onFormFocus.bind(this));
    fe(this, xe, this.onFormSubmit.bind(this));
    fe(this, Le, this.onUnload.bind(this));
    this.elForm = e, window.addEventListener("unload", G(this, Le)), this.elForm.addEventListener("change", G(this, Ce)), this.elForm.addEventListener("focusin", G(this, Ae)), this.elForm.addEventListener("submit", G(this, xe));
  }
  data() {
    const e = Object.entries(G(this, me));
    return {
      correction: e.length && e.filter(([t, r]) => r > 1).length / e.length || 0,
      dropoff: !this.submitTime && !this.error && G(this, ge) ? G(this, ge) : null,
      error: this.error,
      mobile: this.isMobile(),
      start: this.startTime,
      submit: this.submitTime,
      tz: Nt()
    };
  }
  dataAsBase64() {
    try {
      return btoa(
        JSON.stringify(this.data())
      );
    } catch (e) {
      console.error("failed to encode ALTCHA session data to base64", e);
    }
    return "";
  }
  destroy() {
    window.removeEventListener("unload", G(this, Le)), this.elForm.removeEventListener("change", G(this, Ce)), this.elForm.removeEventListener("focusin", G(this, Ae)), this.elForm.removeEventListener("submit", G(this, xe));
  }
  end() {
    this.submitTime || (this.submitTime = Date.now());
  }
  getFieldName(e, t = 40) {
    const r = e.getAttribute("data-group-label"), o = e.getAttribute("name") || e.getAttribute("aria-label");
    return ((r ? r + ": " : "") + o).slice(0, t);
  }
  isMobile() {
    const e = "userAgentData" in navigator && navigator.userAgentData ? navigator.userAgentData : {};
    return "mobile" in e ? e.mobile === !0 : /Mobi/i.test(window.navigator.userAgent);
  }
  isInput(e) {
    return ["INPUT", "SELECT", "TEXTAREA"].includes(e.tagName);
  }
  onFormFieldChange(e) {
    const t = this.getFieldName(e);
    t && this.trackFieldChange(t);
  }
  onFormChange(e) {
    const t = e.target;
    t && this.isInput(t) && this.onFormFieldChange(t);
  }
  onFormFocus(e) {
    const t = e.target;
    if (this.startTime || this.start(), t && this.isInput(t)) {
      const r = this.getFieldName(t);
      r && dt(this, ge, r);
    }
  }
  onFormSubmit() {
    this.end();
  }
  onUnload() {
    this.loadTime <= Date.now() - this.viewTimeThresholdMs && !this.submitTime && this.sendBeacon();
  }
  async sendBeacon() {
    if (this.beaconUrl && "sendBeacon" in navigator)
      try {
        navigator.sendBeacon(
          new URL(this.beaconUrl, location.origin),
          JSON.stringify(this.data())
        );
      } catch {
      }
  }
  start() {
    this.startTime = Date.now();
  }
  trackError(e) {
    this.error = e === null ? null : String(e);
  }
  trackFieldChange(e) {
    G(this, me)[e] = (G(this, me)[e] || 0) + 1;
  }
}
me = new WeakMap(), ge = new WeakMap(), Ce = new WeakMap(), Ae = new WeakMap(), xe = new WeakMap(), Le = new WeakMap();
var y = /* @__PURE__ */ ((n) => (n.ERROR = "error", n.VERIFIED = "verified", n.VERIFYING = "verifying", n.UNVERIFIED = "unverified", n.EXPIRED = "expired", n))(y || {});
function yt(n) {
  let e, t, r;
  return {
    c() {
      e = re("svg"), t = re("path"), r = re("path"), u(t, "d", "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"), u(t, "fill", "currentColor"), u(t, "opacity", ".25"), u(r, "d", "M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"), u(r, "fill", "currentColor"), u(r, "class", "altcha-spinner"), u(e, "width", "24"), u(e, "height", "24"), u(e, "viewBox", "0 0 24 24"), u(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(o, s) {
      B(o, e, s), I(e, t), I(e, r);
    },
    d(o) {
      o && S(e);
    }
  };
}
function Sn(n) {
  let e, t = (
    /*_strings*/
    n[13].label + ""
  ), r;
  return {
    c() {
      e = M("label"), u(e, "for", r = /*name*/
      n[4] + "_checkbox");
    },
    m(o, s) {
      B(o, e, s), e.innerHTML = t;
    },
    p(o, s) {
      s[0] & /*_strings*/
      8192 && t !== (t = /*_strings*/
      o[13].label + "") && (e.innerHTML = t), s[0] & /*name*/
      16 && r !== (r = /*name*/
      o[4] + "_checkbox") && u(e, "for", r);
    },
    d(o) {
      o && S(e);
    }
  };
}
function Mn(n) {
  let e, t = (
    /*_strings*/
    n[13].verifying + ""
  );
  return {
    c() {
      e = M("span");
    },
    m(r, o) {
      B(r, e, o), e.innerHTML = t;
    },
    p(r, o) {
      o[0] & /*_strings*/
      8192 && t !== (t = /*_strings*/
      r[13].verifying + "") && (e.innerHTML = t);
    },
    d(r) {
      r && S(e);
    }
  };
}
function Nn(n) {
  let e, t = (
    /*_strings*/
    n[13].verified + ""
  ), r, o, s, l, c = (
    /*session*/
    n[11] && wt(n)
  );
  return {
    c() {
      e = M("span"), r = Q(), o = M("input"), s = Q(), c && c.c(), l = ln(), u(o, "type", "hidden"), u(
        o,
        "name",
        /*name*/
        n[4]
      ), o.value = /*payload*/
      n[6];
    },
    m(a, h) {
      B(a, e, h), e.innerHTML = t, B(a, r, h), B(a, o, h), B(a, s, h), c && c.m(a, h), B(a, l, h);
    },
    p(a, h) {
      h[0] & /*_strings*/
      8192 && t !== (t = /*_strings*/
      a[13].verified + "") && (e.innerHTML = t), h[0] & /*name*/
      16 && u(
        o,
        "name",
        /*name*/
        a[4]
      ), h[0] & /*payload*/
      64 && (o.value = /*payload*/
      a[6]), /*session*/
      a[11] ? c ? c.p(a, h) : (c = wt(a), c.c(), c.m(l.parentNode, l)) : c && (c.d(1), c = null);
    },
    d(a) {
      a && (S(e), S(r), S(o), S(s), S(l)), c && c.d(a);
    }
  };
}
function wt(n) {
  let e;
  return {
    c() {
      e = M("input"), u(e, "type", "hidden"), u(e, "name", "__session"), e.value = /*sessionPayload*/
      n[12];
    },
    m(t, r) {
      B(t, e, r);
    },
    p(t, r) {
      r[0] & /*sessionPayload*/
      4096 && (e.value = /*sessionPayload*/
      t[12]);
    },
    d(t) {
      t && S(e);
    }
  };
}
function _t(n) {
  let e, t, r, o, s, l, c;
  return {
    c() {
      e = M("div"), t = M("a"), r = re("svg"), o = re("path"), s = re("path"), l = re("path"), u(o, "d", "M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z"), u(o, "fill", "currentColor"), u(s, "d", "M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z"), u(s, "fill", "currentColor"), u(l, "d", "M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z"), u(l, "fill", "currentColor"), u(r, "width", "22"), u(r, "height", "22"), u(r, "viewBox", "0 0 20 20"), u(r, "fill", "none"), u(r, "xmlns", "http://www.w3.org/2000/svg"), u(t, "href", Vt), u(t, "target", "_blank"), u(t, "class", "altcha-logo"), u(t, "aria-label", c = /*_strings*/
      n[13].ariaLinkLabel);
    },
    m(a, h) {
      B(a, e, h), I(e, t), I(t, r), I(r, o), I(r, s), I(r, l);
    },
    p(a, h) {
      h[0] & /*_strings*/
      8192 && c !== (c = /*_strings*/
      a[13].ariaLinkLabel) && u(t, "aria-label", c);
    },
    d(a) {
      a && S(e);
    }
  };
}
function Et(n) {
  let e, t, r, o;
  function s(a, h) {
    return (
      /*state*/
      a[7] === y.EXPIRED ? jn : Vn
    );
  }
  let l = s(n), c = l(n);
  return {
    c() {
      e = M("div"), t = re("svg"), r = re("path"), o = Q(), c.c(), u(r, "stroke-linecap", "round"), u(r, "stroke-linejoin", "round"), u(r, "d", "M6 18L18 6M6 6l12 12"), u(t, "width", "14"), u(t, "height", "14"), u(t, "xmlns", "http://www.w3.org/2000/svg"), u(t, "fill", "none"), u(t, "viewBox", "0 0 24 24"), u(t, "stroke-width", "1.5"), u(t, "stroke", "currentColor"), u(e, "class", "altcha-error");
    },
    m(a, h) {
      B(a, e, h), I(e, t), I(t, r), I(e, o), c.m(e, null);
    },
    p(a, h) {
      l === (l = s(a)) && c ? c.p(a, h) : (c.d(1), c = l(a), c && (c.c(), c.m(e, null)));
    },
    d(a) {
      a && S(e), c.d();
    }
  };
}
function Vn(n) {
  let e, t = (
    /*_strings*/
    n[13].error + ""
  );
  return {
    c() {
      e = M("div"), u(
        e,
        "title",
        /*error*/
        n[5]
      );
    },
    m(r, o) {
      B(r, e, o), e.innerHTML = t;
    },
    p(r, o) {
      o[0] & /*_strings*/
      8192 && t !== (t = /*_strings*/
      r[13].error + "") && (e.innerHTML = t), o[0] & /*error*/
      32 && u(
        e,
        "title",
        /*error*/
        r[5]
      );
    },
    d(r) {
      r && S(e);
    }
  };
}
function jn(n) {
  let e, t = (
    /*_strings*/
    n[13].expired + ""
  );
  return {
    c() {
      e = M("div"), u(
        e,
        "title",
        /*error*/
        n[5]
      );
    },
    m(r, o) {
      B(r, e, o), e.innerHTML = t;
    },
    p(r, o) {
      o[0] & /*_strings*/
      8192 && t !== (t = /*_strings*/
      r[13].expired + "") && (e.innerHTML = t), o[0] & /*error*/
      32 && u(
        e,
        "title",
        /*error*/
        r[5]
      );
    },
    d(r) {
      r && S(e);
    }
  };
}
function vt(n) {
  let e, t, r = (
    /*_strings*/
    n[13].footer + ""
  );
  return {
    c() {
      e = M("div"), t = M("div"), u(e, "class", "altcha-footer");
    },
    m(o, s) {
      B(o, e, s), I(e, t), t.innerHTML = r;
    },
    p(o, s) {
      s[0] & /*_strings*/
      8192 && r !== (r = /*_strings*/
      o[13].footer + "") && (t.innerHTML = r);
    },
    d(o) {
      o && S(e);
    }
  };
}
function kt(n) {
  let e;
  return {
    c() {
      e = M("div"), u(e, "class", "altcha-anchor-arrow");
    },
    m(t, r) {
      B(t, e, r), n[46](e);
    },
    p: Me,
    d(t) {
      t && S(e), n[46](null);
    }
  };
}
function Un(n) {
  let e, t, r, o, s, l, c, a, h, w, x, $, k, J, H, ee, te;
  const R = (
    /*#slots*/
    n[44].default
  ), O = nn(
    R,
    n,
    /*$$scope*/
    n[43],
    null
  );
  let N = (
    /*state*/
    n[7] === y.VERIFYING && yt()
  );
  function oe(d, C) {
    return (
      /*state*/
      d[7] === y.VERIFIED ? Nn : (
        /*state*/
        d[7] === y.VERIFYING ? Mn : Sn
      )
    );
  }
  let ne = oe(n), Z = ne(n), L = (
    /*hidelogo*/
    (n[3] !== !0 || /*isFreeSaaS*/
    n[14]) && _t(n)
  ), F = (
    /*error*/
    (n[5] || /*state*/
    n[7] === y.EXPIRED) && Et(n)
  ), p = (
    /*_strings*/
    n[13].footer && /*hidefooter*/
    (n[2] !== !0 || /*isFreeSaaS*/
    n[14]) && vt(n)
  ), D = (
    /*floating*/
    n[1] && kt(n)
  );
  return {
    c() {
      O && O.c(), e = Q(), t = M("div"), r = M("div"), N && N.c(), o = Q(), s = M("div"), l = M("input"), h = Q(), w = M("div"), Z.c(), x = Q(), L && L.c(), $ = Q(), F && F.c(), k = Q(), p && p.c(), J = Q(), D && D.c(), u(l, "type", "checkbox"), u(l, "id", c = /*name*/
      n[4] + "_checkbox"), l.required = a = /*auto*/
      n[0] !== "onsubmit", u(s, "class", "altcha-checkbox"), gt(
        s,
        "altcha-hidden",
        /*state*/
        n[7] === y.VERIFYING
      ), u(w, "class", "altcha-label"), u(r, "class", "altcha-main"), u(t, "class", "altcha"), u(
        t,
        "data-state",
        /*state*/
        n[7]
      ), u(
        t,
        "data-floating",
        /*floating*/
        n[1]
      );
    },
    m(d, C) {
      O && O.m(d, C), B(d, e, C), B(d, t, C), I(t, r), N && N.m(r, null), I(r, o), I(r, s), I(s, l), l.checked = /*checked*/
      n[8], I(r, h), I(r, w), Z.m(w, null), I(r, x), L && L.m(r, null), I(t, $), F && F.m(t, null), I(t, k), p && p.m(t, null), I(t, J), D && D.m(t, null), n[47](t), H = !0, ee || (te = [
        Pe(
          l,
          "change",
          /*input_change_handler*/
          n[45]
        ),
        Pe(
          l,
          "change",
          /*onCheckedChange*/
          n[15]
        ),
        Pe(
          l,
          "invalid",
          /*onInvalid*/
          n[16]
        )
      ], ee = !0);
    },
    p(d, C) {
      O && O.p && (!H || C[1] & /*$$scope*/
      4096) && on(
        O,
        R,
        d,
        /*$$scope*/
        d[43],
        H ? rn(
          R,
          /*$$scope*/
          d[43],
          C,
          null
        ) : sn(
          /*$$scope*/
          d[43]
        ),
        null
      ), /*state*/
      d[7] === y.VERIFYING ? N || (N = yt(), N.c(), N.m(r, o)) : N && (N.d(1), N = null), (!H || C[0] & /*name*/
      16 && c !== (c = /*name*/
      d[4] + "_checkbox")) && u(l, "id", c), (!H || C[0] & /*auto*/
      1 && a !== (a = /*auto*/
      d[0] !== "onsubmit")) && (l.required = a), C[0] & /*checked*/
      256 && (l.checked = /*checked*/
      d[8]), (!H || C[0] & /*state*/
      128) && gt(
        s,
        "altcha-hidden",
        /*state*/
        d[7] === y.VERIFYING
      ), ne === (ne = oe(d)) && Z ? Z.p(d, C) : (Z.d(1), Z = ne(d), Z && (Z.c(), Z.m(w, null))), /*hidelogo*/
      d[3] !== !0 || /*isFreeSaaS*/
      d[14] ? L ? L.p(d, C) : (L = _t(d), L.c(), L.m(r, null)) : L && (L.d(1), L = null), /*error*/
      d[5] || /*state*/
      d[7] === y.EXPIRED ? F ? F.p(d, C) : (F = Et(d), F.c(), F.m(t, k)) : F && (F.d(1), F = null), /*_strings*/
      d[13].footer && /*hidefooter*/
      (d[2] !== !0 || /*isFreeSaaS*/
      d[14]) ? p ? p.p(d, C) : (p = vt(d), p.c(), p.m(t, J)) : p && (p.d(1), p = null), /*floating*/
      d[1] ? D ? D.p(d, C) : (D = kt(d), D.c(), D.m(t, null)) : D && (D.d(1), D = null), (!H || C[0] & /*state*/
      128) && u(
        t,
        "data-state",
        /*state*/
        d[7]
      ), (!H || C[0] & /*floating*/
      2) && u(
        t,
        "data-floating",
        /*floating*/
        d[1]
      );
    },
    i(d) {
      H || (Ft(O, d), H = !0);
    },
    o(d) {
      wn(O, d), H = !1;
    },
    d(d) {
      d && (S(e), S(t)), O && O.d(d), N && N.d(), Z.d(), L && L.d(), F && F.d(), p && p.d(), D && D.d(), n[47](null), ee = !1, Ie(te);
    }
  };
}
const pt = "Visit Altcha.org", Vt = "https://altcha.org/";
function Ct(n) {
  return JSON.parse(n);
}
function Pn(n, e, t) {
  var ct, at;
  let r, o, s, l, { $$slots: c = {}, $$scope: a } = e, { analytics: h = !1 } = e, { auto: w = void 0 } = e, { beaconurl: x = void 0 } = e, { blockspam: $ = void 0 } = e, { challengeurl: k = void 0 } = e, { challengejson: J = void 0 } = e, { debug: H = !1 } = e, { delay: ee = 0 } = e, { expire: te = void 0 } = e, { floating: R = void 0 } = e, { floatinganchor: O = void 0 } = e, { floatingoffset: N = void 0 } = e, { hidefooter: oe = !1 } = e, { hidelogo: ne = !1 } = e, { name: Z = "altcha" } = e, { maxnumber: L = 1e6 } = e, { mockerror: F = !1 } = e, { obfuscated: p = void 0 } = e, { refetchonexpire: D = !0 } = e, { spamfilter: d = !1 } = e, { strings: C = void 0 } = e, { test: X = !1 } = e, { verifyurl: se = void 0 } = e, { workers: be = Math.min(16, navigator.hardwareConcurrency || 8) } = e, { workerurl: Te = void 0 } = e;
  const Ve = dn(), Ze = ["SHA-256", "SHA-384", "SHA-512"], Ge = (at = (ct = document.documentElement.lang) == null ? void 0 : ct.split("-")) == null ? void 0 : at[0];
  let W = !1, z = null, v, le = null, Re = null, b = null, ie = null, ye = null, K = null, ce = null, q = null, Ye = null, T = y.UNVERIFIED;
  hn(() => {
    b && (b.removeEventListener("submit", We), b.removeEventListener("reset", ze), b.removeEventListener("focusin", Xe), b = null), ie && v.removeEventListener("click", Je), q && q.destroy(), K && (clearTimeout(K), K = null), document.removeEventListener("click", nt), document.removeEventListener("scroll", it), window.removeEventListener("resize", ot);
  }), un(() => {
    var i, f;
    A("mounted", "0.8.0"), A("workers", be), X && A("using test mode"), te && Fe(te), w !== void 0 && A("auto", w), R !== void 0 && st(R), b = v.closest("form"), b && (b.addEventListener("submit", We, { capture: !0 }), b.addEventListener("reset", ze), w === "onfocus" && b.addEventListener("focusin", Xe)), ie = ((i = v.parentElement) == null ? void 0 : i.querySelector("[data-clarify-button]")) || ((f = v.parentElement) == null ? void 0 : f.querySelector("button, a")), ie && ie.addEventListener("click", Je), h && $e(), w === "onload" && (p ? _e() : ae()), r && (oe || ne) && A("Attributes hidefooter and hidelogo ignored because usage with free API Keys require attribution.");
  });
  function A(...i) {
    (H || i.some((f) => f instanceof Error)) && console[i[0] instanceof Error ? "error" : "log"]("ALTCHA", ...i);
  }
  function Je(i) {
    i.preventDefault(), T === y.UNVERIFIED && _e();
  }
  function Xe(i) {
    T === y.UNVERIFIED && ae();
  }
  function We(i) {
    b && q && T === y.VERIFIED && (q.end(), t(12, Ye = q.dataAsBase64())), b && w === "onsubmit" && (T === y.UNVERIFIED ? (i.preventDefault(), i.stopPropagation(), ae().then(() => {
      b == null || b.requestSubmit();
    })) : T !== y.VERIFIED && (i.preventDefault(), i.stopPropagation(), T === y.VERIFYING && rt()));
  }
  function ze() {
    we();
  }
  function Ke(i, f) {
    return btoa(JSON.stringify({
      algorithm: i.algorithm,
      challenge: i.challenge,
      number: f.number,
      salt: i.salt,
      signature: i.signature,
      test: X ? !0 : void 0,
      took: f.took
    }));
  }
  function Qe(i) {
    if (!i.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (i.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!Ze.includes(i.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${Ze.join(", ")}`);
    if (!i.challenge || i.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!i.salt || i.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function jt() {
    var i;
    if (F)
      throw A("mocking error"), new Error("Mocked error.");
    if (o)
      return A("using provided json data"), o;
    if (X)
      return A("generating test challenge", { test: X }), Ln(typeof X != "boolean" ? +X : void 0);
    {
      if (!k && b) {
        const _ = b.getAttribute("action");
        _ != null && _.includes("/form/") && t(17, k = _ + "/altcha");
      }
      if (!k)
        throw new Error("Attribute challengeurl not set.");
      A("fetching challenge from", k);
      const f = await fetch(k, {
        headers: d ? { "x-altcha-spam-filter": "1" } : {}
      });
      if (f.status !== 200)
        throw new Error(`Server responded with ${f.status}.`);
      const m = f.headers.get("Expires"), g = f.headers.get("X-Altcha-Config"), V = await f.json(), j = new URLSearchParams((i = V.salt.split("?")) == null ? void 0 : i[1]), U = j.get("expires") || j.get("expire");
      if (U) {
        const _ = new Date(+U * 1e3), Y = isNaN(_.getTime()) ? 0 : _.getTime() - Date.now();
        Y > 0 && Fe(Y);
      }
      if (g)
        try {
          const _ = JSON.parse(g);
          _ && typeof _ == "object" && (_.verifyurl && (_.verifyurl = new URL(_.verifyurl, new URL(k)).toString()), lt(_));
        } catch (_) {
          A("unable to configure from X-Altcha-Config", _);
        }
      if (!te && (m != null && m.length)) {
        const _ = Date.parse(m);
        if (_) {
          const Y = _ - Date.now();
          Y > 0 && Fe(Y);
        }
      }
      return V;
    }
  }
  function $e() {
    if (!q)
      if (b) {
        if (A("analytics enabled"), t(11, q = new Dn(b)), x === void 0) {
          const i = b.getAttribute("action");
          i && t(19, x = i + "/beacon");
        }
        t(11, q.beaconUrl = x || null, q);
      } else
        A("analytics cannot be enabled - form element not found");
  }
  function et() {
    k && D && T === y.VERIFIED ? ae() : we(y.EXPIRED, l.expired);
  }
  async function tt(i) {
    let f = null;
    if ("Worker" in window) {
      try {
        f = await Ut(i, i.maxnumber);
      } catch (m) {
        A(m);
      }
      if ((f == null ? void 0 : f.number) !== void 0 || "obfuscated" in i)
        return { data: i, solution: f };
    }
    if ("obfuscated" in i) {
      const m = await Fn(i.obfuscated, i.key, i.maxnumber);
      return { data: i, solution: await m.promise };
    }
    return {
      data: i,
      solution: await In(i.challenge, i.salt, i.algorithm, i.maxnumber || L).promise
    };
  }
  async function Ut(i, f = typeof X == "number" ? X : L, m = Math.ceil(be)) {
    const g = [];
    m = Math.min(16, Math.max(1, m));
    for (let U = 0; U < m; U++)
      g.push(createAltchaWorker(Te));
    const V = Math.ceil(f / m), j = await Promise.all(g.map((U, _) => {
      const Y = _ * V;
      return new Promise((Ue) => {
        U.addEventListener("message", (Ee) => {
          if (Ee.data)
            for (const ve of g)
              ve !== U && ve.postMessage({ type: "abort" });
          Ue(Ee.data);
        }), U.postMessage({
          payload: i,
          max: Y + V,
          start: Y,
          type: "work"
        });
      });
    }));
    for (const U of g)
      U.terminate();
    return j.find((U) => !!U) || null;
  }
  function Pt() {
    [y.UNVERIFIED, y.ERROR, y.EXPIRED].includes(T) ? d && (b == null ? void 0 : b.reportValidity()) === !1 ? t(8, W = !1) : p ? _e() : ae() : t(8, W = !0);
  }
  function nt(i) {
    const f = i.target;
    R && f && !v.contains(f) && T === y.VERIFIED && t(9, v.style.display = "none", v);
  }
  function it() {
    R && je();
  }
  function rt() {
    T === y.VERIFYING && l.waitAlert && alert(l.waitAlert);
  }
  function Bt(i) {
    var f;
    if (z) {
      const m = z.match(/^(mailto|tel|sms|https?):/);
      let g;
      if (m) {
        const [V] = z.slice(z.indexOf(":") + 1).replace(/^\/\//, "").split("?");
        g = document.createElement("a"), g.href = z, g.innerHTML = V;
      } else
        g = document.createTextNode(z);
      ie && g && (ie.after(g), (f = ie.parentElement) == null || f.removeChild(ie));
    }
  }
  function Ot(i) {
    q && q.trackError(ye);
  }
  function Ht(i) {
    R && T !== y.UNVERIFIED && requestAnimationFrame(() => {
      je();
    });
  }
  function ot() {
    R && je();
  }
  function Fe(i) {
    A("expire", i), K && (clearTimeout(K), K = null), i < 1 ? et() : K = setTimeout(et, i);
  }
  function st(i) {
    A("floating", i), R !== i && (t(9, v.style.left = "", v), t(9, v.style.top = "", v)), t(1, R = i === !0 || i === "" ? "auto" : i === !1 || i === "false" ? void 0 : R), R ? (w || t(0, w = "onsubmit"), document.addEventListener("scroll", it), document.addEventListener("click", nt), window.addEventListener("resize", ot)) : w === "onsubmit" && t(0, w = void 0);
  }
  function qt(i) {
    var m;
    const f = b == null ? void 0 : b.querySelector(typeof i == "string" ? `input[name="${i}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((m = f == null ? void 0 : f.value) == null ? void 0 : m.slice(f.value.indexOf("@"))) || void 0;
  }
  function Zt(i) {
    return [
      ...(b == null ? void 0 : b.querySelectorAll(i != null && i.length ? i.map((m) => `input[name="${m}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (m, g) => {
        const V = g.name, j = g.value;
        return V && j && (m[V] = /\n/.test(j) ? j.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : j), m;
      },
      {}
    );
  }
  async function Gt(i) {
    if (!se)
      throw new Error("Attribute verifyurl not set.");
    A("requesting server verification from", se);
    const f = { payload: i };
    if (d) {
      const { blockedCountries: V, classifier: j, disableRules: U, email: _, expectedLanguages: Y, expectedCountries: Ue, fields: Ee, ipAddress: ve, text: zt, timeZone: ft } = Yt();
      f.blockedCountries = V, f.classifier = j, f.disableRules = U, f.email = _ === !1 ? void 0 : qt(_), f.expectedCountries = Ue, f.expectedLanguages = Y || (Ge ? [Ge] : void 0), f.fields = Ee === !1 ? void 0 : Zt(Ee), f.ipAddress = ve === !1 ? void 0 : ve || "auto", f.text = zt, f.timeZone = ft === !1 ? void 0 : ft || Nt();
    }
    const m = await fetch(se, {
      body: JSON.stringify(f),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (m.status !== 200)
      throw new Error(`Server responded with ${m.status}.`);
    const g = await m.json();
    if (g != null && g.payload && t(6, ce = g.payload), Ve("serververification", g), $ && g.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  function Yt() {
    return d === "ipAddress" ? {
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
    } : typeof d == "object" ? d : {
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
  function je(i = 20) {
    if (v)
      if (Re || (Re = (O ? document.querySelector(O) : b == null ? void 0 : b.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || b || ie), Re) {
        const f = parseInt(N, 10) || 12, m = Re.getBoundingClientRect(), g = v.getBoundingClientRect(), V = document.documentElement.clientHeight, j = document.documentElement.clientWidth, U = R === "auto" ? m.bottom + g.height + f + i > V : R === "top", _ = Math.max(i, Math.min(j - i - g.width, m.left + m.width / 2 - g.width / 2));
        if (U ? t(9, v.style.top = `${m.top - (g.height + f)}px`, v) : t(9, v.style.top = `${m.bottom + f}px`, v), t(9, v.style.left = `${_}px`, v), v.setAttribute("data-floating", U ? "top" : "bottom"), le) {
          const Y = le.getBoundingClientRect();
          t(10, le.style.left = m.left - _ + m.width / 2 - Y.width / 2 + "px", le);
        }
      } else
        A("unable to find floating anchor element");
  }
  function lt(i) {
    i.analytics && (t(18, h = i.analytics), $e()), i.obfuscated !== void 0 && t(27, p = i.obfuscated), i.auto !== void 0 && (t(0, w = i.auto), w === "onload" && (p ? _e() : ae())), i.beaconurl && (t(19, x = i.beaconurl), q && t(11, q.beaconUrl = x, q)), i.floatinganchor !== void 0 && t(23, O = i.floatinganchor), i.delay !== void 0 && t(21, ee = i.delay), i.floatingoffset !== void 0 && t(24, N = i.floatingoffset), i.floating !== void 0 && st(i.floating), i.expire !== void 0 && (Fe(i.expire), t(22, te = i.expire)), i.challenge && (Qe(i.challenge), o = i.challenge), i.challengeurl !== void 0 && t(17, k = i.challengeurl), i.debug !== void 0 && t(20, H = !!i.debug), i.hidefooter !== void 0 && t(2, oe = !!i.hidefooter), i.hidelogo !== void 0 && t(3, ne = !!i.hidelogo), i.maxnumber !== void 0 && t(25, L = +i.maxnumber), i.mockerror !== void 0 && t(26, F = !!i.mockerror), i.name !== void 0 && t(4, Z = i.name), i.refetchonexpire !== void 0 && t(28, D = !!i.refetchonexpire), i.spamfilter !== void 0 && t(29, d = typeof i.spamfilter == "object" ? i.spamfilter : !!i.spamfilter), i.strings && t(42, s = i.strings), i.test !== void 0 && t(30, X = typeof i.test == "number" ? i.test : !!i.test), i.verifyurl !== void 0 && t(31, se = i.verifyurl), i.workers !== void 0 && t(32, be = +i.workers), i.workerurl !== void 0 && t(33, Te = i.workerurl);
  }
  function we(i = y.UNVERIFIED, f = null) {
    K && (clearTimeout(K), K = null), t(8, W = !1), t(5, ye = f), t(6, ce = null), t(7, T = i);
  }
  async function ae() {
    return we(y.VERIFYING), await new Promise((i) => setTimeout(i, ee || 0)), jt().then((i) => (Qe(i), A("challenge", i), tt(i))).then(({ data: i, solution: f }) => {
      if (A("solution", f), "challenge" in i && f && !("clearText" in f))
        if ((f == null ? void 0 : f.number) !== void 0) {
          if (se)
            return Gt(Ke(i, f));
          t(6, ce = Ke(i, f)), A("payload", ce);
        } else
          throw A("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      mn().then(() => {
        t(7, T = y.VERIFIED), t(8, W = !0), A("verified"), Ve("verified", { payload: ce });
      });
    }).catch((i) => {
      A(i), t(7, T = y.ERROR), t(8, W = !1), t(5, ye = i.message);
    });
  }
  async function _e() {
    if (!p) {
      t(7, T = y.ERROR);
      return;
    }
    we(y.VERIFYING), await new Promise((j) => setTimeout(j, ee || 0));
    const [i, f] = p.split("?");
    let g = new URLSearchParams(f || "").get("key") || void 0;
    if (g) {
      const j = g.match(/^\(prompt:?(.*)\)$/);
      j && (g = prompt(j[1] || "Enter Key:") || void 0);
    }
    const { solution: V } = await tt({ obfuscated: i, key: g, maxnumber: L });
    V && "clearText" in V ? (t(41, z = V.clearText), t(7, T = y.VERIFIED), t(8, W = !0), R && v && t(9, v.style.display = "none", v)) : (t(7, T = y.ERROR), t(8, W = !1), t(5, ye = "Unable to decrypt data."));
  }
  function Jt() {
    W = this.checked, t(8, W);
  }
  function Xt(i) {
    Ne[i ? "unshift" : "push"](() => {
      le = i, t(10, le);
    });
  }
  function Wt(i) {
    Ne[i ? "unshift" : "push"](() => {
      v = i, t(9, v);
    });
  }
  return n.$$set = (i) => {
    "analytics" in i && t(18, h = i.analytics), "auto" in i && t(0, w = i.auto), "beaconurl" in i && t(19, x = i.beaconurl), "blockspam" in i && t(34, $ = i.blockspam), "challengeurl" in i && t(17, k = i.challengeurl), "challengejson" in i && t(35, J = i.challengejson), "debug" in i && t(20, H = i.debug), "delay" in i && t(21, ee = i.delay), "expire" in i && t(22, te = i.expire), "floating" in i && t(1, R = i.floating), "floatinganchor" in i && t(23, O = i.floatinganchor), "floatingoffset" in i && t(24, N = i.floatingoffset), "hidefooter" in i && t(2, oe = i.hidefooter), "hidelogo" in i && t(3, ne = i.hidelogo), "name" in i && t(4, Z = i.name), "maxnumber" in i && t(25, L = i.maxnumber), "mockerror" in i && t(26, F = i.mockerror), "obfuscated" in i && t(27, p = i.obfuscated), "refetchonexpire" in i && t(28, D = i.refetchonexpire), "spamfilter" in i && t(29, d = i.spamfilter), "strings" in i && t(36, C = i.strings), "test" in i && t(30, X = i.test), "verifyurl" in i && t(31, se = i.verifyurl), "workers" in i && t(32, be = i.workers), "workerurl" in i && t(33, Te = i.workerurl), "$$scope" in i && t(43, a = i.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*challengeurl*/
    131072 && t(14, r = !!(k != null && k.includes(".altcha.org")) && !!(k != null && k.includes("apiKey=ckey_"))), n.$$.dirty[1] & /*challengejson*/
    16 && (o = J ? Ct(J) : void 0), n.$$.dirty[1] & /*strings*/
    32 && t(42, s = C ? Ct(C) : {}), n.$$.dirty[1] & /*parsedStrings*/
    2048 && t(13, l = {
      ariaLinkLabel: pt,
      error: "Verification failed. Try again later.",
      expired: "Verification expired. Try again.",
      footer: `Protected by <a href="${Vt}" target="_blank" aria-label="${s.ariaLinkLabel || pt}">ALTCHA</a>`,
      label: "I'm not a robot",
      verified: "Verified",
      verifying: "Verifying...",
      waitAlert: "Verifying... please wait.",
      ...s
    }), n.$$.dirty[0] & /*state, payload*/
    192 | n.$$.dirty[1] & /*clarifiedData*/
    1024 && Ve("statechange", z ? { clarifiedData: z, state: T } : { payload: ce, state: T }), n.$$.dirty[0] & /*error*/
    32 && Ot(), n.$$.dirty[0] & /*state*/
    128 && Ht(), n.$$.dirty[1] & /*clarifiedData*/
    1024 && Bt();
  }, [
    w,
    R,
    oe,
    ne,
    Z,
    ye,
    ce,
    T,
    W,
    v,
    le,
    q,
    Ye,
    l,
    r,
    Pt,
    rt,
    k,
    h,
    x,
    H,
    ee,
    te,
    O,
    N,
    L,
    F,
    p,
    D,
    d,
    X,
    se,
    be,
    Te,
    $,
    J,
    C,
    lt,
    we,
    ae,
    _e,
    z,
    s,
    a,
    c,
    Jt,
    Xt,
    Wt
  ];
}
class Bn extends Cn {
  constructor(e) {
    super(), kn(
      this,
      e,
      Pn,
      Un,
      en,
      {
        analytics: 18,
        auto: 0,
        beaconurl: 19,
        blockspam: 34,
        challengeurl: 17,
        challengejson: 35,
        debug: 20,
        delay: 21,
        expire: 22,
        floating: 1,
        floatinganchor: 23,
        floatingoffset: 24,
        hidefooter: 2,
        hidelogo: 3,
        name: 4,
        maxnumber: 25,
        mockerror: 26,
        obfuscated: 27,
        refetchonexpire: 28,
        spamfilter: 29,
        strings: 36,
        test: 30,
        verifyurl: 31,
        workers: 32,
        workerurl: 33,
        configure: 37,
        reset: 38,
        verify: 39,
        clarify: 40
      },
      null,
      [-1, -1, -1]
    );
  }
  get analytics() {
    return this.$$.ctx[18];
  }
  set analytics(e) {
    this.$$set({ analytics: e }), E();
  }
  get auto() {
    return this.$$.ctx[0];
  }
  set auto(e) {
    this.$$set({ auto: e }), E();
  }
  get beaconurl() {
    return this.$$.ctx[19];
  }
  set beaconurl(e) {
    this.$$set({ beaconurl: e }), E();
  }
  get blockspam() {
    return this.$$.ctx[34];
  }
  set blockspam(e) {
    this.$$set({ blockspam: e }), E();
  }
  get challengeurl() {
    return this.$$.ctx[17];
  }
  set challengeurl(e) {
    this.$$set({ challengeurl: e }), E();
  }
  get challengejson() {
    return this.$$.ctx[35];
  }
  set challengejson(e) {
    this.$$set({ challengejson: e }), E();
  }
  get debug() {
    return this.$$.ctx[20];
  }
  set debug(e) {
    this.$$set({ debug: e }), E();
  }
  get delay() {
    return this.$$.ctx[21];
  }
  set delay(e) {
    this.$$set({ delay: e }), E();
  }
  get expire() {
    return this.$$.ctx[22];
  }
  set expire(e) {
    this.$$set({ expire: e }), E();
  }
  get floating() {
    return this.$$.ctx[1];
  }
  set floating(e) {
    this.$$set({ floating: e }), E();
  }
  get floatinganchor() {
    return this.$$.ctx[23];
  }
  set floatinganchor(e) {
    this.$$set({ floatinganchor: e }), E();
  }
  get floatingoffset() {
    return this.$$.ctx[24];
  }
  set floatingoffset(e) {
    this.$$set({ floatingoffset: e }), E();
  }
  get hidefooter() {
    return this.$$.ctx[2];
  }
  set hidefooter(e) {
    this.$$set({ hidefooter: e }), E();
  }
  get hidelogo() {
    return this.$$.ctx[3];
  }
  set hidelogo(e) {
    this.$$set({ hidelogo: e }), E();
  }
  get name() {
    return this.$$.ctx[4];
  }
  set name(e) {
    this.$$set({ name: e }), E();
  }
  get maxnumber() {
    return this.$$.ctx[25];
  }
  set maxnumber(e) {
    this.$$set({ maxnumber: e }), E();
  }
  get mockerror() {
    return this.$$.ctx[26];
  }
  set mockerror(e) {
    this.$$set({ mockerror: e }), E();
  }
  get obfuscated() {
    return this.$$.ctx[27];
  }
  set obfuscated(e) {
    this.$$set({ obfuscated: e }), E();
  }
  get refetchonexpire() {
    return this.$$.ctx[28];
  }
  set refetchonexpire(e) {
    this.$$set({ refetchonexpire: e }), E();
  }
  get spamfilter() {
    return this.$$.ctx[29];
  }
  set spamfilter(e) {
    this.$$set({ spamfilter: e }), E();
  }
  get strings() {
    return this.$$.ctx[36];
  }
  set strings(e) {
    this.$$set({ strings: e }), E();
  }
  get test() {
    return this.$$.ctx[30];
  }
  set test(e) {
    this.$$set({ test: e }), E();
  }
  get verifyurl() {
    return this.$$.ctx[31];
  }
  set verifyurl(e) {
    this.$$set({ verifyurl: e }), E();
  }
  get workers() {
    return this.$$.ctx[32];
  }
  set workers(e) {
    this.$$set({ workers: e }), E();
  }
  get workerurl() {
    return this.$$.ctx[33];
  }
  set workerurl(e) {
    this.$$set({ workerurl: e }), E();
  }
  get configure() {
    return this.$$.ctx[37];
  }
  get reset() {
    return this.$$.ctx[38];
  }
  get verify() {
    return this.$$.ctx[39];
  }
  get clarify() {
    return this.$$.ctx[40];
  }
}
customElements.define("altcha-widget", pn(Bn, { analytics: { type: "Boolean" }, auto: {}, beaconurl: {}, blockspam: {}, challengeurl: {}, challengejson: {}, debug: { type: "Boolean" }, delay: {}, expire: {}, floating: {}, floatinganchor: {}, floatingoffset: {}, hidefooter: { type: "Boolean" }, hidelogo: { type: "Boolean" }, name: {}, maxnumber: {}, mockerror: { type: "Boolean" }, obfuscated: {}, refetchonexpire: { type: "Boolean" }, spamfilter: { type: "Boolean" }, strings: {}, test: { type: "Boolean" }, verifyurl: {}, workers: {}, workerurl: {} }, ["default"], ["configure", "reset", "verify", "clarify"], !1));
globalThis.createAltchaWorker = (n) => new Worker(new URL(n || "./worker.js", import.meta.url));
export {
  Bn as Altcha
};
