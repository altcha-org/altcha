var Bt = Object.defineProperty;
var rt = (n) => {
  throw TypeError(n);
};
var Gt = (n, e, t) => e in n ? Bt(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var T = (n, e, t) => Gt(n, typeof e != "symbol" ? e + "" : e, t), it = (n, e, t) => e.has(n) || rt("Cannot " + t);
var V = (n, e, t) => (it(n, e, "read from private field"), t ? t.call(n) : e.get(n)), ie = (n, e, t) => e.has(n) ? rt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), ot = (n, e, t, i) => (it(n, e, "write to private field"), i ? i.call(n, t) : e.set(n, t), t);
const wt = "KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2NvbnN0IGY9bmV3IFRleHRFbmNvZGVyO2Z1bmN0aW9uIGQoZSl7cmV0dXJuWy4uLm5ldyBVaW50OEFycmF5KGUpXS5tYXAodD0+dC50b1N0cmluZygxNikucGFkU3RhcnQoMiwiMCIpKS5qb2luKCIiKX1hc3luYyBmdW5jdGlvbiBwKGUsdCxvKXtyZXR1cm4gZChhd2FpdCBjcnlwdG8uc3VidGxlLmRpZ2VzdChvLnRvVXBwZXJDYXNlKCksZi5lbmNvZGUoZSt0KSkpfWZ1bmN0aW9uIGcoZSx0LG89IlNIQS0yNTYiLGw9MWU2LGM9MCl7Y29uc3QgYT1uZXcgQWJvcnRDb250cm9sbGVyLGk9RGF0ZS5ub3coKTtyZXR1cm57cHJvbWlzZTooYXN5bmMoKT0+e2ZvcihsZXQgbj1jO248PWw7bis9MSl7aWYoYS5zaWduYWwuYWJvcnRlZClyZXR1cm4gbnVsbDtpZihhd2FpdCBwKHQsbixvKT09PWUpcmV0dXJue251bWJlcjpuLHRvb2s6RGF0ZS5ub3coKS1pfX1yZXR1cm4gbnVsbH0pKCksY29udHJvbGxlcjphfX1sZXQgcjtvbm1lc3NhZ2U9YXN5bmMgZT0+e2NvbnN0e3R5cGU6dCxwYXlsb2FkOm99PWUuZGF0YTtpZih0PT09ImFib3J0IilyPT1udWxsfHxyLmFib3J0KCkscj12b2lkIDA7ZWxzZSBpZih0PT09IndvcmsiKXtjb25zdHthbGc6bCxjaGFsbGVuZ2U6YyxtYXg6YSxzYWx0Omksc3RhcnQ6dX09b3x8e30sbj1nKGMsaSxsLGEsdSk7cj1uLmNvbnRyb2xsZXIsbi5wcm9taXNlLnRoZW4ocz0+e3NlbGYucG9zdE1lc3NhZ2UocyYmey4uLnMsd29ya2VyOiEwfSl9KX19fSkoKTsK", Ot = (n) => Uint8Array.from(atob(n), (e) => e.charCodeAt(0)), st = typeof self < "u" && self.Blob && new Blob([Ot(wt)], { type: "text/javascript;charset=utf-8" });
function Xt(n) {
  let e;
  try {
    if (e = st && (self.URL || self.webkitURL).createObjectURL(st), !e) throw "";
    const t = new Worker(e, {
      name: n == null ? void 0 : n.name
    });
    return t.addEventListener("error", () => {
      (self.URL || self.webkitURL).revokeObjectURL(e);
    }), t;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + wt,
      {
        name: n == null ? void 0 : n.name
      }
    );
  } finally {
    e && (self.URL || self.webkitURL).revokeObjectURL(e);
  }
}
function fe() {
}
function yt(n) {
  return n();
}
function lt() {
  return /* @__PURE__ */ Object.create(null);
}
function _e(n) {
  n.forEach(yt);
}
function _t(n) {
  return typeof n == "function";
}
function Ht(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function Pt(n) {
  return Object.keys(n).length === 0;
}
function E(n, e) {
  n.appendChild(e);
}
function Wt(n, e, t) {
  const i = Yt(n);
  if (!i.getElementById(e)) {
    const o = R("style");
    o.id = e, o.textContent = t, Kt(i, o);
  }
}
function Yt(n) {
  if (!n) return document;
  const e = n.getRootNode ? n.getRootNode() : n.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : n.ownerDocument;
}
function Kt(n, e) {
  return E(
    /** @type {Document} */
    n.head || n,
    e
  ), e.sheet;
}
function S(n, e, t) {
  n.insertBefore(e, t || null);
}
function N(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function R(n) {
  return document.createElement(n);
}
function $(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function pt(n) {
  return document.createTextNode(n);
}
function J() {
  return pt(" ");
}
function Jt() {
  return pt("");
}
function Se(n, e, t, i) {
  return n.addEventListener(e, t, i), () => n.removeEventListener(e, t, i);
}
function a(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
function $t(n) {
  return Array.from(n.childNodes);
}
function at(n, e, t) {
  n.classList.toggle(e, !!t);
}
function qt(n, e, { bubbles: t = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(n, { detail: e, bubbles: t, cancelable: i });
}
function Qt(n) {
  const e = {};
  return n.childNodes.forEach(
    /** @param {Element} node */
    (t) => {
      e[t.slot || "default"] = !0;
    }
  ), e;
}
let ge;
function me(n) {
  ge = n;
}
function Ue() {
  if (!ge) throw new Error("Function called outside component initialization");
  return ge;
}
function en(n) {
  Ue().$$.on_mount.push(n);
}
function tn(n) {
  Ue().$$.on_destroy.push(n);
}
function nn() {
  const n = Ue();
  return (e, t, { cancelable: i = !1 } = {}) => {
    const o = n.$$.callbacks[e];
    if (o) {
      const s = qt(
        /** @type {string} */
        e,
        t,
        { cancelable: i }
      );
      return o.slice().forEach((u) => {
        u.call(n, s);
      }), !s.defaultPrevented;
    }
    return !0;
  };
}
const se = [], ze = [];
let le = [];
const ct = [], kt = /* @__PURE__ */ Promise.resolve();
let je = !1;
function Et() {
  je || (je = !0, kt.then(_));
}
function rn() {
  return Et(), kt;
}
function De(n) {
  le.push(n);
}
const Me = /* @__PURE__ */ new Set();
let oe = 0;
function _() {
  if (oe !== 0)
    return;
  const n = ge;
  do {
    try {
      for (; oe < se.length; ) {
        const e = se[oe];
        oe++, me(e), on(e.$$);
      }
    } catch (e) {
      throw se.length = 0, oe = 0, e;
    }
    for (me(null), se.length = 0, oe = 0; ze.length; ) ze.pop()();
    for (let e = 0; e < le.length; e += 1) {
      const t = le[e];
      Me.has(t) || (Me.add(t), t());
    }
    le.length = 0;
  } while (se.length);
  for (; ct.length; )
    ct.pop()();
  je = !1, Me.clear(), me(n);
}
function on(n) {
  if (n.fragment !== null) {
    n.update(), _e(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(De);
  }
}
function sn(n) {
  const e = [], t = [];
  le.forEach((i) => n.indexOf(i) === -1 ? e.push(i) : t.push(i)), t.forEach((i) => i()), le = e;
}
const ln = /* @__PURE__ */ new Set();
function an(n, e) {
  n && n.i && (ln.delete(n), n.i(e));
}
function cn(n, e, t) {
  const { fragment: i, after_update: o } = n.$$;
  i && i.m(e, t), De(() => {
    const s = n.$$.on_mount.map(yt).filter(_t);
    n.$$.on_destroy ? n.$$.on_destroy.push(...s) : _e(s), n.$$.on_mount = [];
  }), o.forEach(De);
}
function fn(n, e) {
  const t = n.$$;
  t.fragment !== null && (sn(t.after_update), _e(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function un(n, e) {
  n.$$.dirty[0] === -1 && (se.push(n), Et(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function dn(n, e, t, i, o, s, u = null, c = [-1]) {
  const l = ge;
  me(n);
  const f = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: fe,
    not_equal: o,
    bound: lt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (l ? l.$$.context : [])),
    // everything else
    callbacks: lt(),
    dirty: c,
    skip_bound: !1,
    root: e.target || l.$$.root
  };
  u && u(f.root);
  let B = !1;
  if (f.ctx = t ? t(n, e.props || {}, (g, G, ...O) => {
    const X = O.length ? O[0] : G;
    return f.ctx && o(f.ctx[g], f.ctx[g] = X) && (!f.skip_bound && f.bound[g] && f.bound[g](X), B && un(n, g)), G;
  }) : [], f.update(), B = !0, _e(f.before_update), f.fragment = i ? i(f.ctx) : !1, e.target) {
    if (e.hydrate) {
      const g = $t(e.target);
      f.fragment && f.fragment.l(g), g.forEach(N);
    } else
      f.fragment && f.fragment.c();
    e.intro && an(n.$$.fragment), cn(n, e.target, e.anchor), _();
  }
  me(l);
}
let xt;
typeof HTMLElement == "function" && (xt = class extends HTMLElement {
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
      let e = function(s) {
        return () => {
          let u;
          return {
            c: function() {
              u = R("slot"), s !== "default" && a(u, "name", s);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(f, B) {
              S(f, u, B);
            },
            d: function(f) {
              f && N(u);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, i = Qt(this);
      for (const s of this.$$s)
        s in i && (t[s] = [e(s)]);
      for (const s of this.attributes) {
        const u = this.$$g_p(s.name);
        u in this.$$d || (this.$$d[u] = Ae(u, s.value, this.$$p_d, "toProp"));
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
            const u = Ae(
              s,
              this.$$d[s],
              this.$$p_d,
              "toAttribute"
            );
            u == null ? this.removeAttribute(this.$$p_d[s].attribute || s) : this.setAttribute(this.$$p_d[s].attribute || s, u);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(o), o();
      for (const s in this.$$l)
        for (const u of this.$$l[s]) {
          const c = this.$$c.$on(s, u);
          this.$$l_u.set(u, c);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(e, t, i) {
    var o;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Ae(e, i, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [e]: this.$$d[e] }));
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
function Ae(n, e, t, i) {
  var s;
  const o = (s = t[n]) == null ? void 0 : s.type;
  if (e = o === "Boolean" && typeof e != "boolean" ? e != null : e, !i || !t[n])
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
function hn(n, e, t, i, o, s) {
  let u = class extends xt {
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
    Object.defineProperty(u.prototype, c, {
      get() {
        return this.$$c && c in this.$$c ? this.$$c[c] : this.$$d[c];
      },
      set(l) {
        var f;
        l = Ae(c, l, e), this.$$d[c] = l, (f = this.$$c) == null || f.$set({ [c]: l });
      }
    });
  }), i.forEach((c) => {
    Object.defineProperty(u.prototype, c, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[c];
      }
    });
  }), n.element = /** @type {any} */
  u, u;
}
class mn {
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
    fn(this, 1), this.$destroy = fe;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!_t(t))
      return fe;
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
    this.$$set && !Pt(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const gn = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(gn);
const bn = new TextEncoder();
function vn(n) {
  return [...new Uint8Array(n)].map((e) => e.toString(16).padStart(2, "0")).join("");
}
async function wn(n, e = "SHA-256", t = 1e5) {
  const i = Date.now().toString(16);
  n || (n = Math.round(Math.random() * t));
  const o = await Ct(i, n, e);
  return {
    algorithm: e,
    challenge: o,
    salt: i,
    signature: ""
  };
}
async function Ct(n, e, t) {
  return vn(
    await crypto.subtle.digest(
      t.toUpperCase(),
      bn.encode(n + e)
    )
  );
}
function yn(n, e, t = "SHA-256", i = 1e6, o = 0) {
  const s = new AbortController(), u = Date.now();
  return {
    promise: (async () => {
      for (let l = o; l <= i; l += 1) {
        if (s.signal.aborted)
          return null;
        if (await Ct(e, l, t) === n)
          return {
            number: l,
            took: Date.now() - u
          };
      }
      return null;
    })(),
    controller: s
  };
}
function Lt() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
var ae, ce, be, ve, we, ye;
class _n {
  constructor(e) {
    T(this, "beaconUrl", null);
    T(this, "error", null);
    T(this, "loadTime", Date.now());
    T(this, "submitTime", null);
    T(this, "startTime", null);
    T(this, "viewTimeThresholdMs", 1500);
    ie(this, ae, {});
    ie(this, ce, null);
    ie(this, be, this.onFormChange.bind(this));
    ie(this, ve, this.onFormFocus.bind(this));
    ie(this, we, this.onFormSubmit.bind(this));
    ie(this, ye, this.onUnload.bind(this));
    this.elForm = e, window.addEventListener("unload", V(this, ye)), this.elForm.addEventListener("change", V(this, be)), this.elForm.addEventListener("focusin", V(this, ve)), this.elForm.addEventListener("submit", V(this, we));
  }
  data() {
    const e = Object.entries(V(this, ae));
    return {
      correction: e.length && e.filter(([t, i]) => i > 1).length / e.length || 0,
      dropoff: !this.submitTime && !this.error && V(this, ce) ? V(this, ce) : null,
      error: this.error,
      mobile: this.isMobile(),
      start: this.startTime,
      submit: this.submitTime,
      tz: Lt()
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
    window.removeEventListener("unload", V(this, ye)), this.elForm.removeEventListener("change", V(this, be)), this.elForm.removeEventListener("focusin", V(this, ve)), this.elForm.removeEventListener("submit", V(this, we));
  }
  end() {
    this.submitTime || (this.submitTime = Date.now());
  }
  getFieldName(e, t = 40) {
    const i = e.getAttribute("data-group-label"), o = e.getAttribute("name") || e.getAttribute("aria-label");
    return ((i ? i + ": " : "") + o).slice(0, t);
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
      const i = this.getFieldName(t);
      i && ot(this, ce, i);
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
    V(this, ae)[e] = (V(this, ae)[e] || 0) + 1;
  }
}
ae = new WeakMap(), ce = new WeakMap(), be = new WeakMap(), ve = new WeakMap(), we = new WeakMap(), ye = new WeakMap();
var w = /* @__PURE__ */ ((n) => (n.ERROR = "error", n.VERIFIED = "verified", n.VERIFYING = "verifying", n.UNVERIFIED = "unverified", n.EXPIRED = "expired", n))(w || {});
function pn(n) {
  Wt(n, "svelte-ddsc3z", '.altcha.svelte-ddsc3z.svelte-ddsc3z{background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);position:relative;text-align:left}.altcha.svelte-ddsc3z.svelte-ddsc3z:focus-within{border-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating].svelte-ddsc3z.svelte-ddsc3z{background:var(--altcha-color-base, white);display:none;filter:drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2));left:-100%;position:fixed;top:-100%;width:var(--altcha-max-width, 260px);z-index:999999}.altcha[data-floating=top].svelte-ddsc3z .altcha-anchor-arrow.svelte-ddsc3z{border-bottom-color:transparent;border-top-color:var(--altcha-color-border, #a0a0a0);bottom:-12px;top:auto}.altcha[data-floating=bottom].svelte-ddsc3z.svelte-ddsc3z:focus-within::after{border-bottom-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating=top].svelte-ddsc3z.svelte-ddsc3z:focus-within::after{border-top-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating].svelte-ddsc3z.svelte-ddsc3z:not([data-state=unverified]){display:block}.altcha-anchor-arrow.svelte-ddsc3z.svelte-ddsc3z{border:6px solid transparent;border-bottom-color:var(--altcha-color-border, #a0a0a0);content:"";height:0;left:12px;position:absolute;top:-12px;width:0}.altcha-main.svelte-ddsc3z.svelte-ddsc3z{align-items:center;display:flex;gap:0.4rem;padding:0.7rem}.altcha-label.svelte-ddsc3z.svelte-ddsc3z{flex-grow:1}.altcha-label.svelte-ddsc3z label.svelte-ddsc3z{cursor:pointer}.altcha-logo.svelte-ddsc3z.svelte-ddsc3z{color:currentColor;opacity:0.3}.altcha-logo.svelte-ddsc3z.svelte-ddsc3z:hover{opacity:1}.altcha-error.svelte-ddsc3z.svelte-ddsc3z{color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem}.altcha-footer.svelte-ddsc3z.svelte-ddsc3z{align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.4;padding:0.2rem 0.7rem;text-align:right}.altcha-footer.svelte-ddsc3z.svelte-ddsc3z:hover{opacity:1}.altcha-footer.svelte-ddsc3z>.svelte-ddsc3z:first-child{flex-grow:1}.altcha-footer.svelte-ddsc3z a{color:currentColor}.altcha-checkbox.svelte-ddsc3z.svelte-ddsc3z{display:flex;align-items:center;height:24px;width:24px}.altcha-checkbox.svelte-ddsc3z input.svelte-ddsc3z{width:18px;height:18px;margin:0}.altcha-hidden.svelte-ddsc3z.svelte-ddsc3z{display:none}.altcha-spinner.svelte-ddsc3z.svelte-ddsc3z{animation:svelte-ddsc3z-altcha-spinner 0.75s infinite linear;transform-origin:center}@keyframes svelte-ddsc3z-altcha-spinner{100%{transform:rotate(360deg)}}');
}
function ft(n) {
  let e, t, i;
  return {
    c() {
      e = $("svg"), t = $("path"), i = $("path"), a(t, "d", "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"), a(t, "fill", "currentColor"), a(t, "opacity", ".25"), a(i, "d", "M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"), a(i, "fill", "currentColor"), a(i, "class", "altcha-spinner svelte-ddsc3z"), a(e, "width", "24"), a(e, "height", "24"), a(e, "viewBox", "0 0 24 24"), a(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(o, s) {
      S(o, e, s), E(e, t), E(e, i);
    },
    d(o) {
      o && N(e);
    }
  };
}
function kn(n) {
  let e, t = (
    /*_strings*/
    n[13].label + ""
  ), i;
  return {
    c() {
      e = R("label"), a(e, "for", i = /*name*/
      n[4] + "_checkbox"), a(e, "class", "svelte-ddsc3z");
    },
    m(o, s) {
      S(o, e, s), e.innerHTML = t;
    },
    p(o, s) {
      s[0] & /*_strings*/
      8192 && t !== (t = /*_strings*/
      o[13].label + "") && (e.innerHTML = t), s[0] & /*name*/
      16 && i !== (i = /*name*/
      o[4] + "_checkbox") && a(e, "for", i);
    },
    d(o) {
      o && N(e);
    }
  };
}
function En(n) {
  let e, t = (
    /*_strings*/
    n[13].verifying + ""
  );
  return {
    c() {
      e = R("span");
    },
    m(i, o) {
      S(i, e, o), e.innerHTML = t;
    },
    p(i, o) {
      o[0] & /*_strings*/
      8192 && t !== (t = /*_strings*/
      i[13].verifying + "") && (e.innerHTML = t);
    },
    d(i) {
      i && N(e);
    }
  };
}
function xn(n) {
  let e, t = (
    /*_strings*/
    n[13].verified + ""
  ), i, o, s, u, c = (
    /*session*/
    n[11] && ut(n)
  );
  return {
    c() {
      e = R("span"), i = J(), o = R("input"), s = J(), c && c.c(), u = Jt(), a(o, "type", "hidden"), a(
        o,
        "name",
        /*name*/
        n[4]
      ), o.value = /*payload*/
      n[6];
    },
    m(l, f) {
      S(l, e, f), e.innerHTML = t, S(l, i, f), S(l, o, f), S(l, s, f), c && c.m(l, f), S(l, u, f);
    },
    p(l, f) {
      f[0] & /*_strings*/
      8192 && t !== (t = /*_strings*/
      l[13].verified + "") && (e.innerHTML = t), f[0] & /*name*/
      16 && a(
        o,
        "name",
        /*name*/
        l[4]
      ), f[0] & /*payload*/
      64 && (o.value = /*payload*/
      l[6]), /*session*/
      l[11] ? c ? c.p(l, f) : (c = ut(l), c.c(), c.m(u.parentNode, u)) : c && (c.d(1), c = null);
    },
    d(l) {
      l && (N(e), N(i), N(o), N(s), N(u)), c && c.d(l);
    }
  };
}
function ut(n) {
  let e;
  return {
    c() {
      e = R("input"), a(e, "type", "hidden"), a(e, "name", "__session"), e.value = /*sessionPayload*/
      n[12];
    },
    m(t, i) {
      S(t, e, i);
    },
    p(t, i) {
      i[0] & /*sessionPayload*/
      4096 && (e.value = /*sessionPayload*/
      t[12]);
    },
    d(t) {
      t && N(e);
    }
  };
}
function dt(n) {
  let e, t, i, o, s, u, c;
  return {
    c() {
      e = R("div"), t = R("a"), i = $("svg"), o = $("path"), s = $("path"), u = $("path"), a(o, "d", "M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z"), a(o, "fill", "currentColor"), a(s, "d", "M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z"), a(s, "fill", "currentColor"), a(u, "d", "M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z"), a(u, "fill", "currentColor"), a(i, "width", "22"), a(i, "height", "22"), a(i, "viewBox", "0 0 20 20"), a(i, "fill", "none"), a(i, "xmlns", "http://www.w3.org/2000/svg"), a(t, "href", Rt), a(t, "target", "_blank"), a(t, "class", "altcha-logo svelte-ddsc3z"), a(t, "aria-label", c = /*_strings*/
      n[13].ariaLinkLabel);
    },
    m(l, f) {
      S(l, e, f), E(e, t), E(t, i), E(i, o), E(i, s), E(i, u);
    },
    p(l, f) {
      f[0] & /*_strings*/
      8192 && c !== (c = /*_strings*/
      l[13].ariaLinkLabel) && a(t, "aria-label", c);
    },
    d(l) {
      l && N(e);
    }
  };
}
function ht(n) {
  let e, t, i, o;
  function s(l, f) {
    return (
      /*state*/
      l[7] === w.EXPIRED ? Ln : Cn
    );
  }
  let u = s(n), c = u(n);
  return {
    c() {
      e = R("div"), t = $("svg"), i = $("path"), o = J(), c.c(), a(i, "stroke-linecap", "round"), a(i, "stroke-linejoin", "round"), a(i, "d", "M6 18L18 6M6 6l12 12"), a(t, "width", "14"), a(t, "height", "14"), a(t, "xmlns", "http://www.w3.org/2000/svg"), a(t, "fill", "none"), a(t, "viewBox", "0 0 24 24"), a(t, "stroke-width", "1.5"), a(t, "stroke", "currentColor"), a(e, "class", "altcha-error svelte-ddsc3z");
    },
    m(l, f) {
      S(l, e, f), E(e, t), E(t, i), E(e, o), c.m(e, null);
    },
    p(l, f) {
      u === (u = s(l)) && c ? c.p(l, f) : (c.d(1), c = u(l), c && (c.c(), c.m(e, null)));
    },
    d(l) {
      l && N(e), c.d();
    }
  };
}
function Cn(n) {
  let e, t = (
    /*_strings*/
    n[13].error + ""
  );
  return {
    c() {
      e = R("div"), a(
        e,
        "title",
        /*error*/
        n[5]
      );
    },
    m(i, o) {
      S(i, e, o), e.innerHTML = t;
    },
    p(i, o) {
      o[0] & /*_strings*/
      8192 && t !== (t = /*_strings*/
      i[13].error + "") && (e.innerHTML = t), o[0] & /*error*/
      32 && a(
        e,
        "title",
        /*error*/
        i[5]
      );
    },
    d(i) {
      i && N(e);
    }
  };
}
function Ln(n) {
  let e, t = (
    /*_strings*/
    n[13].expired + ""
  );
  return {
    c() {
      e = R("div"), a(
        e,
        "title",
        /*error*/
        n[5]
      );
    },
    m(i, o) {
      S(i, e, o), e.innerHTML = t;
    },
    p(i, o) {
      o[0] & /*_strings*/
      8192 && t !== (t = /*_strings*/
      i[13].expired + "") && (e.innerHTML = t), o[0] & /*error*/
      32 && a(
        e,
        "title",
        /*error*/
        i[5]
      );
    },
    d(i) {
      i && N(e);
    }
  };
}
function mt(n) {
  let e, t, i = (
    /*_strings*/
    n[13].footer + ""
  );
  return {
    c() {
      e = R("div"), t = R("div"), a(t, "class", "svelte-ddsc3z"), a(e, "class", "altcha-footer svelte-ddsc3z");
    },
    m(o, s) {
      S(o, e, s), E(e, t), t.innerHTML = i;
    },
    p(o, s) {
      s[0] & /*_strings*/
      8192 && i !== (i = /*_strings*/
      o[13].footer + "") && (t.innerHTML = i);
    },
    d(o) {
      o && N(e);
    }
  };
}
function gt(n) {
  let e;
  return {
    c() {
      e = R("div"), a(e, "class", "altcha-anchor-arrow svelte-ddsc3z");
    },
    m(t, i) {
      S(t, e, i), n[41](e);
    },
    p: fe,
    d(t) {
      t && N(e), n[41](null);
    }
  };
}
function Rn(n) {
  let e, t, i, o, s, u, c, l, f, B, g, G, O, X, Y, b = (
    /*state*/
    n[7] === w.VERIFYING && ft()
  );
  function q(h, p) {
    return (
      /*state*/
      h[7] === w.VERIFIED ? xn : (
        /*state*/
        h[7] === w.VERIFYING ? En : kn
      )
    );
  }
  let K = q(n), j = K(n), I = (
    /*hidelogo*/
    (n[3] !== !0 || /*isFreeSaaS*/
    n[14]) && dt(n)
  ), F = (
    /*error*/
    (n[5] || /*state*/
    n[7] === w.EXPIRED) && ht(n)
  ), x = (
    /*_strings*/
    n[13].footer && /*hidefooter*/
    (n[2] !== !0 || /*isFreeSaaS*/
    n[14]) && mt(n)
  ), A = (
    /*floating*/
    n[1] && gt(n)
  );
  return {
    c() {
      e = R("div"), t = R("div"), b && b.c(), i = J(), o = R("div"), s = R("input"), l = J(), f = R("div"), j.c(), B = J(), I && I.c(), g = J(), F && F.c(), G = J(), x && x.c(), O = J(), A && A.c(), a(s, "type", "checkbox"), a(s, "id", u = /*name*/
      n[4] + "_checkbox"), s.required = c = /*auto*/
      n[0] !== "onsubmit", a(s, "class", "svelte-ddsc3z"), a(o, "class", "altcha-checkbox svelte-ddsc3z"), at(
        o,
        "altcha-hidden",
        /*state*/
        n[7] === w.VERIFYING
      ), a(f, "class", "altcha-label svelte-ddsc3z"), a(t, "class", "altcha-main svelte-ddsc3z"), a(e, "class", "altcha svelte-ddsc3z"), a(
        e,
        "data-state",
        /*state*/
        n[7]
      ), a(
        e,
        "data-floating",
        /*floating*/
        n[1]
      );
    },
    m(h, p) {
      S(h, e, p), E(e, t), b && b.m(t, null), E(t, i), E(t, o), E(o, s), s.checked = /*checked*/
      n[8], E(t, l), E(t, f), j.m(f, null), E(t, B), I && I.m(t, null), E(e, g), F && F.m(e, null), E(e, G), x && x.m(e, null), E(e, O), A && A.m(e, null), n[42](e), X || (Y = [
        Se(
          s,
          "change",
          /*input_change_handler*/
          n[40]
        ),
        Se(
          s,
          "change",
          /*onCheckedChange*/
          n[15]
        ),
        Se(
          s,
          "invalid",
          /*onInvalid*/
          n[16]
        )
      ], X = !0);
    },
    p(h, p) {
      /*state*/
      h[7] === w.VERIFYING ? b || (b = ft(), b.c(), b.m(t, i)) : b && (b.d(1), b = null), p[0] & /*name*/
      16 && u !== (u = /*name*/
      h[4] + "_checkbox") && a(s, "id", u), p[0] & /*auto*/
      1 && c !== (c = /*auto*/
      h[0] !== "onsubmit") && (s.required = c), p[0] & /*checked*/
      256 && (s.checked = /*checked*/
      h[8]), p[0] & /*state*/
      128 && at(
        o,
        "altcha-hidden",
        /*state*/
        h[7] === w.VERIFYING
      ), K === (K = q(h)) && j ? j.p(h, p) : (j.d(1), j = K(h), j && (j.c(), j.m(f, null))), /*hidelogo*/
      h[3] !== !0 || /*isFreeSaaS*/
      h[14] ? I ? I.p(h, p) : (I = dt(h), I.c(), I.m(t, null)) : I && (I.d(1), I = null), /*error*/
      h[5] || /*state*/
      h[7] === w.EXPIRED ? F ? F.p(h, p) : (F = ht(h), F.c(), F.m(e, G)) : F && (F.d(1), F = null), /*_strings*/
      h[13].footer && /*hidefooter*/
      (h[2] !== !0 || /*isFreeSaaS*/
      h[14]) ? x ? x.p(h, p) : (x = mt(h), x.c(), x.m(e, O)) : x && (x.d(1), x = null), /*floating*/
      h[1] ? A ? A.p(h, p) : (A = gt(h), A.c(), A.m(e, null)) : A && (A.d(1), A = null), p[0] & /*state*/
      128 && a(
        e,
        "data-state",
        /*state*/
        h[7]
      ), p[0] & /*floating*/
      2 && a(
        e,
        "data-floating",
        /*floating*/
        h[1]
      );
    },
    i: fe,
    o: fe,
    d(h) {
      h && N(e), b && b.d(), j.d(), I && I.d(), F && F.d(), x && x.d(), A && A.d(), n[42](null), X = !1, _e(Y);
    }
  };
}
const bt = "Visit Altcha.org", Rt = "https://altcha.org/";
function vt(n) {
  return JSON.parse(n);
}
function In(n, e, t) {
  var tt, nt;
  let i, o, s, u, { analytics: c = !1 } = e, { auto: l = void 0 } = e, { beaconurl: f = void 0 } = e, { blockspam: B = void 0 } = e, { challengeurl: g = void 0 } = e, { challengejson: G = void 0 } = e, { debug: O = !1 } = e, { delay: X = 0 } = e, { expire: Y = void 0 } = e, { floating: b = void 0 } = e, { floatinganchor: q = void 0 } = e, { floatingoffset: K = void 0 } = e, { hidefooter: j = !1 } = e, { hidelogo: I = !1 } = e, { name: F = "altcha" } = e, { maxnumber: x = 1e6 } = e, { mockerror: A = !1 } = e, { refetchonexpire: h = !0 } = e, { spamfilter: p = !1 } = e, { strings: pe = void 0 } = e, { test: H = !1 } = e, { verifyurl: ee = void 0 } = e, { workers: ue = Math.min(16, navigator.hardwareConcurrency || 8) } = e, { workerurl: ke = void 0 } = e;
  const Fe = nn(), Ze = ["SHA-256", "SHA-384", "SHA-512"], Ve = (nt = (tt = document.documentElement.lang) == null ? void 0 : tt.split("-")) == null ? void 0 : nt[0];
  let Q = !1, C, te = null, Ee = null, m = null, xe = null, P = null, ne = null, D = null, Be = null, U = w.UNVERIFIED;
  tn(() => {
    m && (m.removeEventListener("submit", Oe), m.removeEventListener("reset", Xe), m.removeEventListener("focusin", Ge), m = null), D && D.destroy(), P && (clearTimeout(P), P = null), document.removeEventListener("click", Ke), document.removeEventListener("scroll", Je), window.removeEventListener("resize", qe);
  }), en(() => {
    k("mounted", "0.7.0"), k("workers", ue), H && k("using test mode"), Y && Ce(Y), l !== void 0 && k("auto", l), b !== void 0 && Qe(b), m = C.closest("form"), m && (m.addEventListener("submit", Oe, { capture: !0 }), m.addEventListener("reset", Xe), l === "onfocus" && m.addEventListener("focusin", Ge)), c && We(), l === "onload" && re(), i && (j || I) && k("Attributes hidefooter and hidelogo ignored because usage with free API Keys require attribution.");
  });
  function k(...r) {
    (O || r.some((d) => d instanceof Error)) && console[r[0] instanceof Error ? "error" : "log"]("ALTCHA", ...r);
  }
  function Ge(r) {
    U === w.UNVERIFIED && re();
  }
  function Oe(r) {
    m && D && U === w.VERIFIED && (D.end(), t(12, Be = D.dataAsBase64())), m && l === "onsubmit" && (U === w.UNVERIFIED ? (r.preventDefault(), r.stopPropagation(), re().then(() => {
      m == null || m.requestSubmit();
    })) : U !== w.VERIFIED && (r.preventDefault(), r.stopPropagation(), U === w.VERIFYING && $e()));
  }
  function Xe() {
    Le();
  }
  function He(r, d) {
    return btoa(JSON.stringify({
      algorithm: r.algorithm,
      challenge: r.challenge,
      number: d.number,
      salt: r.salt,
      signature: r.signature,
      test: H ? !0 : void 0,
      took: d.took
    }));
  }
  function Pe(r) {
    if (!r.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (r.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!Ze.includes(r.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${Ze.join(", ")}`);
    if (!r.challenge || r.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!r.salt || r.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function It() {
    var r;
    if (A)
      throw k("mocking error"), new Error("Mocked error.");
    if (o)
      return k("using provided json data"), o;
    if (H)
      return k("generating test challenge", { test: H }), wn(typeof H != "boolean" ? +H : void 0);
    {
      if (!g && m) {
        const y = m.getAttribute("action");
        y != null && y.includes("/form/") && t(17, g = y + "/altcha");
      }
      if (!g)
        throw new Error("Attribute challengeurl not set.");
      k("fetching challenge from", g);
      const d = await fetch(g, {
        headers: p ? { "x-altcha-spam-filter": "1" } : {}
      });
      if (d.status !== 200)
        throw new Error(`Server responded with ${d.status}.`);
      const v = d.headers.get("Expires"), z = d.headers.get("X-Altcha-Config"), Z = await d.json(), M = new URLSearchParams((r = Z.salt.split("?")) == null ? void 0 : r[1]), W = M.get("expires") || M.get("expire");
      if (W) {
        const y = new Date(+W * 1e3), L = isNaN(y.getTime()) ? 0 : y.getTime() - Date.now();
        L > 0 && Ce(L);
      }
      if (z)
        try {
          const y = JSON.parse(z);
          y && typeof y == "object" && (y.verifyurl && (y.verifyurl = new URL(y.verifyurl, new URL(g)).toString()), et(y));
        } catch (y) {
          k("unable to configure from X-Altcha-Config", y);
        }
      if (!Y && (v != null && v.length)) {
        const y = Date.parse(v);
        if (y) {
          const L = y - Date.now();
          L > 0 && Ce(L);
        }
      }
      return Z;
    }
  }
  function We() {
    if (!D)
      if (m) {
        if (k("analytics enabled"), t(11, D = new _n(m)), f === void 0) {
          const r = m.getAttribute("action");
          r && t(19, f = r + "/beacon");
        }
        t(11, D.beaconUrl = f || null, D);
      } else
        k("analytics cannot be enabled - form element not found");
  }
  function Ye() {
    g && h && U === w.VERIFIED ? re() : Le(w.EXPIRED, u.expired);
  }
  async function At(r) {
    let d = null;
    if ("Worker" in window) {
      try {
        d = await zt(r.challenge, r.salt, r.algorithm, r.maxnumber);
      } catch (v) {
        k(v);
      }
      if ((d == null ? void 0 : d.number) !== void 0)
        return { data: r, solution: d };
    }
    return {
      data: r,
      solution: await yn(r.challenge, r.salt, r.algorithm, r.maxnumber || x).promise
    };
  }
  async function zt(r, d, v, z = typeof H == "number" ? H : x, Z = Math.ceil(ue)) {
    const M = [];
    Z = Math.min(16, Math.max(1, Z));
    for (let L = 0; L < Z; L++)
      M.push(createAltchaWorker(ke));
    const W = Math.ceil(z / Z), y = await Promise.all(M.map((L, Ne) => {
      const de = Ne * W;
      return new Promise((Re) => {
        L.addEventListener("message", (Ie) => {
          if (Ie.data)
            for (const he of M)
              he !== L && he.postMessage({ type: "abort" });
          Re(Ie.data);
        }), L.postMessage({
          payload: {
            alg: v,
            challenge: r,
            max: de + W,
            salt: d,
            start: de
          },
          type: "work"
        });
      });
    }));
    for (const L of M)
      L.terminate();
    return y.find((L) => !!L) || null;
  }
  function Ft() {
    [w.UNVERIFIED, w.ERROR, w.EXPIRED].includes(U) ? p && (m == null ? void 0 : m.reportValidity()) === !1 ? t(8, Q = !1) : re() : t(8, Q = !0);
  }
  function Ke(r) {
    const d = r.target;
    b && d && !C.contains(d) && U === w.VERIFIED && t(9, C.style.display = "none", C);
  }
  function Je() {
    b && Te();
  }
  function $e() {
    U === w.VERIFYING && u.waitAlert && alert(u.waitAlert);
  }
  function Tt(r) {
    D && D.trackError(xe);
  }
  function Nt(r) {
    b && U !== w.UNVERIFIED && requestAnimationFrame(() => {
      Te();
    });
  }
  function qe() {
    b && Te();
  }
  function Ce(r) {
    k("expire", r), P && (clearTimeout(P), P = null), r < 1 ? Ye() : P = setTimeout(Ye, r);
  }
  function Qe(r) {
    k("floating", r), b !== r && (t(9, C.style.left = "", C), t(9, C.style.top = "", C)), t(1, b = r === !0 || r === "" ? "auto" : r === !1 || r === "false" ? void 0 : b), b ? (l || t(0, l = "onsubmit"), document.addEventListener("scroll", Je), document.addEventListener("click", Ke), window.addEventListener("resize", qe)) : l === "onsubmit" && t(0, l = void 0);
  }
  function St(r) {
    var v;
    const d = m == null ? void 0 : m.querySelector(typeof r == "string" ? `input[name="${r}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((v = d == null ? void 0 : d.value) == null ? void 0 : v.slice(d.value.indexOf("@"))) || void 0;
  }
  function Mt(r) {
    return [
      ...(m == null ? void 0 : m.querySelectorAll(r != null && r.length ? r.map((v) => `input[name="${v}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (v, z) => {
        const Z = z.name, M = z.value;
        return Z && M && (v[Z] = /\n/.test(M) ? M.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : M), v;
      },
      {}
    );
  }
  async function jt(r) {
    if (!ee)
      throw new Error("Attribute verifyurl not set.");
    k("requesting server verification from", ee);
    const d = { payload: r };
    if (p) {
      const { blockedCountries: Z, classifier: M, disableRules: W, email: y, expectedLanguages: L, expectedCountries: Ne, fields: de, ipAddress: Re, text: Ie, timeZone: he } = Dt();
      d.blockedCountries = Z, d.classifier = M, d.disableRules = W, d.email = y === !1 ? void 0 : St(y), d.expectedCountries = Ne, d.expectedLanguages = L || (Ve ? [Ve] : void 0), d.fields = de === !1 ? void 0 : Mt(de), d.ipAddress = Re === !1 ? void 0 : Re || "auto", d.text = Ie, d.timeZone = he === !1 ? void 0 : he || Lt();
    }
    const v = await fetch(ee, {
      body: JSON.stringify(d),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (v.status !== 200)
      throw new Error(`Server responded with ${v.status}.`);
    const z = await v.json();
    if (z != null && z.payload && t(6, ne = z.payload), Fe("serververification", z), B && z.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  function Dt() {
    return p === "ipAddress" ? {
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
    } : typeof p == "object" ? p : {
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
  function Te(r = 20) {
    if (C)
      if (Ee || (Ee = (q ? document.querySelector(q) : m == null ? void 0 : m.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || m), Ee) {
        const d = parseInt(K, 10) || 12, v = Ee.getBoundingClientRect(), z = C.getBoundingClientRect(), Z = document.documentElement.clientHeight, M = document.documentElement.clientWidth, W = b === "auto" ? v.bottom + z.height + d + r > Z : b === "top", y = Math.max(r, Math.min(M - r - z.width, v.left + v.width / 2 - z.width / 2));
        if (W ? t(9, C.style.top = `${v.top - (z.height + d)}px`, C) : t(9, C.style.top = `${v.bottom + d}px`, C), t(9, C.style.left = `${y}px`, C), C.setAttribute("data-floating", W ? "top" : "bottom"), te) {
          const L = te.getBoundingClientRect();
          t(10, te.style.left = v.left - y + v.width / 2 - L.width / 2 + "px", te);
        }
      } else
        k("unable to find floating anchor element");
  }
  function et(r) {
    r.analytics && (t(18, c = r.analytics), We()), r.auto !== void 0 && (t(0, l = r.auto), l === "onload" && re()), r.beaconurl && (t(19, f = r.beaconurl), D && t(11, D.beaconUrl = f, D)), r.floatinganchor !== void 0 && t(23, q = r.floatinganchor), r.delay !== void 0 && t(21, X = r.delay), r.floatingoffset !== void 0 && t(24, K = r.floatingoffset), r.floating !== void 0 && Qe(r.floating), r.expire !== void 0 && (Ce(r.expire), t(22, Y = r.expire)), r.challenge && (Pe(r.challenge), o = r.challenge), r.challengeurl !== void 0 && t(17, g = r.challengeurl), r.debug !== void 0 && t(20, O = !!r.debug), r.hidefooter !== void 0 && t(2, j = !!r.hidefooter), r.hidelogo !== void 0 && t(3, I = !!r.hidelogo), r.maxnumber !== void 0 && t(25, x = +r.maxnumber), r.mockerror !== void 0 && t(26, A = !!r.mockerror), r.name !== void 0 && t(4, F = r.name), r.refetchonexpire !== void 0 && t(27, h = !!r.refetchonexpire), r.spamfilter !== void 0 && t(28, p = typeof r.spamfilter == "object" ? r.spamfilter : !!r.spamfilter), r.strings && t(39, s = r.strings), r.test !== void 0 && t(29, H = typeof r.test == "number" ? r.test : !!r.test), r.verifyurl !== void 0 && t(30, ee = r.verifyurl), r.workers !== void 0 && t(31, ue = +r.workers), r.workerurl !== void 0 && t(32, ke = r.workerurl);
  }
  function Le(r = w.UNVERIFIED, d = null) {
    P && (clearTimeout(P), P = null), t(8, Q = !1), t(5, xe = d), t(6, ne = null), t(7, U = r);
  }
  async function re() {
    return Le(w.VERIFYING), await new Promise((r) => setTimeout(r, X || 0)), It().then((r) => (Pe(r), k("challenge", r), At(r))).then(({ data: r, solution: d }) => {
      if (k("solution", d), (d == null ? void 0 : d.number) !== void 0) {
        if (ee)
          return jt(He(r, d));
        t(6, ne = He(r, d)), k("payload", ne);
      } else
        throw k("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      rn().then(() => {
        t(7, U = w.VERIFIED), t(8, Q = !0), k("verified"), Fe("verified", { payload: ne });
      });
    }).catch((r) => {
      k(r), t(7, U = w.ERROR), t(8, Q = !1), t(5, xe = r.message);
    });
  }
  function Ut() {
    Q = this.checked, t(8, Q);
  }
  function Zt(r) {
    ze[r ? "unshift" : "push"](() => {
      te = r, t(10, te);
    });
  }
  function Vt(r) {
    ze[r ? "unshift" : "push"](() => {
      C = r, t(9, C);
    });
  }
  return n.$$set = (r) => {
    "analytics" in r && t(18, c = r.analytics), "auto" in r && t(0, l = r.auto), "beaconurl" in r && t(19, f = r.beaconurl), "blockspam" in r && t(33, B = r.blockspam), "challengeurl" in r && t(17, g = r.challengeurl), "challengejson" in r && t(34, G = r.challengejson), "debug" in r && t(20, O = r.debug), "delay" in r && t(21, X = r.delay), "expire" in r && t(22, Y = r.expire), "floating" in r && t(1, b = r.floating), "floatinganchor" in r && t(23, q = r.floatinganchor), "floatingoffset" in r && t(24, K = r.floatingoffset), "hidefooter" in r && t(2, j = r.hidefooter), "hidelogo" in r && t(3, I = r.hidelogo), "name" in r && t(4, F = r.name), "maxnumber" in r && t(25, x = r.maxnumber), "mockerror" in r && t(26, A = r.mockerror), "refetchonexpire" in r && t(27, h = r.refetchonexpire), "spamfilter" in r && t(28, p = r.spamfilter), "strings" in r && t(35, pe = r.strings), "test" in r && t(29, H = r.test), "verifyurl" in r && t(30, ee = r.verifyurl), "workers" in r && t(31, ue = r.workers), "workerurl" in r && t(32, ke = r.workerurl);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*challengeurl*/
    131072 && t(14, i = !!(g != null && g.includes(".altcha.org")) && !!(g != null && g.includes("apiKey=ckey_"))), n.$$.dirty[1] & /*challengejson*/
    8 && (o = G ? vt(G) : void 0), n.$$.dirty[1] & /*strings*/
    16 && t(39, s = pe ? vt(pe) : {}), n.$$.dirty[1] & /*parsedStrings*/
    256 && t(13, u = {
      ariaLinkLabel: bt,
      error: "Verification failed. Try again later.",
      expired: "Verification expired. Try again.",
      footer: `Protected by <a href="${Rt}" target="_blank" aria-label="${s.ariaLinkLabel || bt}">ALTCHA</a>`,
      label: "I'm not a robot",
      verified: "Verified",
      verifying: "Verifying...",
      waitAlert: "Verifying... please wait.",
      ...s
    }), n.$$.dirty[0] & /*payload, state*/
    192 && Fe("statechange", { payload: ne, state: U }), n.$$.dirty[0] & /*error*/
    32 && Tt(), n.$$.dirty[0] & /*state*/
    128 && Nt();
  }, [
    l,
    b,
    j,
    I,
    F,
    xe,
    ne,
    U,
    Q,
    C,
    te,
    D,
    Be,
    u,
    i,
    Ft,
    $e,
    g,
    c,
    f,
    O,
    X,
    Y,
    q,
    K,
    x,
    A,
    h,
    p,
    H,
    ee,
    ue,
    ke,
    B,
    G,
    pe,
    et,
    Le,
    re,
    s,
    Ut,
    Zt,
    Vt
  ];
}
class An extends mn {
  constructor(e) {
    super(), dn(
      this,
      e,
      In,
      Rn,
      Ht,
      {
        analytics: 18,
        auto: 0,
        beaconurl: 19,
        blockspam: 33,
        challengeurl: 17,
        challengejson: 34,
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
        refetchonexpire: 27,
        spamfilter: 28,
        strings: 35,
        test: 29,
        verifyurl: 30,
        workers: 31,
        workerurl: 32,
        configure: 36,
        reset: 37,
        verify: 38
      },
      pn,
      [-1, -1, -1]
    );
  }
  get analytics() {
    return this.$$.ctx[18];
  }
  set analytics(e) {
    this.$$set({ analytics: e }), _();
  }
  get auto() {
    return this.$$.ctx[0];
  }
  set auto(e) {
    this.$$set({ auto: e }), _();
  }
  get beaconurl() {
    return this.$$.ctx[19];
  }
  set beaconurl(e) {
    this.$$set({ beaconurl: e }), _();
  }
  get blockspam() {
    return this.$$.ctx[33];
  }
  set blockspam(e) {
    this.$$set({ blockspam: e }), _();
  }
  get challengeurl() {
    return this.$$.ctx[17];
  }
  set challengeurl(e) {
    this.$$set({ challengeurl: e }), _();
  }
  get challengejson() {
    return this.$$.ctx[34];
  }
  set challengejson(e) {
    this.$$set({ challengejson: e }), _();
  }
  get debug() {
    return this.$$.ctx[20];
  }
  set debug(e) {
    this.$$set({ debug: e }), _();
  }
  get delay() {
    return this.$$.ctx[21];
  }
  set delay(e) {
    this.$$set({ delay: e }), _();
  }
  get expire() {
    return this.$$.ctx[22];
  }
  set expire(e) {
    this.$$set({ expire: e }), _();
  }
  get floating() {
    return this.$$.ctx[1];
  }
  set floating(e) {
    this.$$set({ floating: e }), _();
  }
  get floatinganchor() {
    return this.$$.ctx[23];
  }
  set floatinganchor(e) {
    this.$$set({ floatinganchor: e }), _();
  }
  get floatingoffset() {
    return this.$$.ctx[24];
  }
  set floatingoffset(e) {
    this.$$set({ floatingoffset: e }), _();
  }
  get hidefooter() {
    return this.$$.ctx[2];
  }
  set hidefooter(e) {
    this.$$set({ hidefooter: e }), _();
  }
  get hidelogo() {
    return this.$$.ctx[3];
  }
  set hidelogo(e) {
    this.$$set({ hidelogo: e }), _();
  }
  get name() {
    return this.$$.ctx[4];
  }
  set name(e) {
    this.$$set({ name: e }), _();
  }
  get maxnumber() {
    return this.$$.ctx[25];
  }
  set maxnumber(e) {
    this.$$set({ maxnumber: e }), _();
  }
  get mockerror() {
    return this.$$.ctx[26];
  }
  set mockerror(e) {
    this.$$set({ mockerror: e }), _();
  }
  get refetchonexpire() {
    return this.$$.ctx[27];
  }
  set refetchonexpire(e) {
    this.$$set({ refetchonexpire: e }), _();
  }
  get spamfilter() {
    return this.$$.ctx[28];
  }
  set spamfilter(e) {
    this.$$set({ spamfilter: e }), _();
  }
  get strings() {
    return this.$$.ctx[35];
  }
  set strings(e) {
    this.$$set({ strings: e }), _();
  }
  get test() {
    return this.$$.ctx[29];
  }
  set test(e) {
    this.$$set({ test: e }), _();
  }
  get verifyurl() {
    return this.$$.ctx[30];
  }
  set verifyurl(e) {
    this.$$set({ verifyurl: e }), _();
  }
  get workers() {
    return this.$$.ctx[31];
  }
  set workers(e) {
    this.$$set({ workers: e }), _();
  }
  get workerurl() {
    return this.$$.ctx[32];
  }
  set workerurl(e) {
    this.$$set({ workerurl: e }), _();
  }
  get configure() {
    return this.$$.ctx[36];
  }
  get reset() {
    return this.$$.ctx[37];
  }
  get verify() {
    return this.$$.ctx[38];
  }
}
customElements.define("altcha-widget", hn(An, { analytics: { type: "Boolean" }, auto: {}, beaconurl: {}, blockspam: {}, challengeurl: {}, challengejson: {}, debug: { type: "Boolean" }, delay: {}, expire: {}, floating: {}, floatinganchor: {}, floatingoffset: {}, hidefooter: { type: "Boolean" }, hidelogo: { type: "Boolean" }, name: {}, maxnumber: {}, mockerror: { type: "Boolean" }, refetchonexpire: { type: "Boolean" }, spamfilter: { type: "Boolean" }, strings: {}, test: { type: "Boolean" }, verifyurl: {}, workers: {}, workerurl: {} }, [], ["configure", "reset", "verify"], !1));
globalThis.createAltchaWorker = (n) => n ? new Worker(new URL(n)) : new Xt();
export {
  An as Altcha
};
