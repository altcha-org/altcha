var Pt = Object.defineProperty;
var it = (n) => {
  throw TypeError(n);
};
var Ut = (n, e, t) => e in n ? Pt(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var S = (n, e, t) => Ut(n, typeof e != "symbol" ? e + "" : e, t), rt = (n, e, t) => e.has(n) || it("Cannot " + t);
var U = (n, e, t) => (rt(n, e, "read from private field"), t ? t.call(n) : e.get(n)), re = (n, e, t) => e.has(n) ? it("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), ot = (n, e, t, r) => (rt(n, e, "write to private field"), r ? r.call(n, t) : e.set(n, t), t);
function ce() {
}
function wt(n) {
  return n();
}
function st() {
  return /* @__PURE__ */ Object.create(null);
}
function ve(n) {
  n.forEach(wt);
}
function _t(n) {
  return typeof n == "function";
}
function Ot(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function Ht(n) {
  return Object.keys(n).length === 0;
}
function p(n, e) {
  n.appendChild(e);
}
function M(n, e, t) {
  n.insertBefore(e, t || null);
}
function D(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function F(n) {
  return document.createElement(n);
}
function z(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function yt(n) {
  return document.createTextNode(n);
}
function W() {
  return yt(" ");
}
function $t() {
  return yt("");
}
function Me(n, e, t, r) {
  return n.addEventListener(e, t, r), () => n.removeEventListener(e, t, r);
}
function a(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
function qt(n) {
  return Array.from(n.childNodes);
}
function lt(n, e, t) {
  n.classList.toggle(e, !!t);
}
function Zt(n, e, { bubbles: t = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(n, { detail: e, bubbles: t, cancelable: r });
}
function Yt(n) {
  const e = {};
  return n.childNodes.forEach(
    /** @param {Element} node */
    (t) => {
      e[t.slot || "default"] = !0;
    }
  ), e;
}
let me;
function ge(n) {
  me = n;
}
function Be() {
  if (!me) throw new Error("Function called outside component initialization");
  return me;
}
function Gt(n) {
  Be().$$.on_mount.push(n);
}
function Jt(n) {
  Be().$$.on_destroy.push(n);
}
function Xt() {
  const n = Be();
  return (e, t, { cancelable: r = !1 } = {}) => {
    const o = n.$$.callbacks[e];
    if (o) {
      const s = Zt(
        /** @type {string} */
        e,
        t,
        { cancelable: r }
      );
      return o.slice().forEach((u) => {
        u.call(n, s);
      }), !s.defaultPrevented;
    }
    return !0;
  };
}
const se = [], Fe = [];
let le = [];
const at = [], vt = /* @__PURE__ */ Promise.resolve();
let je = !1;
function Et() {
  je || (je = !0, vt.then(v));
}
function Wt() {
  return Et(), vt;
}
function Ve(n) {
  le.push(n);
}
const Ne = /* @__PURE__ */ new Set();
let oe = 0;
function v() {
  if (oe !== 0)
    return;
  const n = me;
  do {
    try {
      for (; oe < se.length; ) {
        const e = se[oe];
        oe++, ge(e), zt(e.$$);
      }
    } catch (e) {
      throw se.length = 0, oe = 0, e;
    }
    for (ge(null), se.length = 0, oe = 0; Fe.length; ) Fe.pop()();
    for (let e = 0; e < le.length; e += 1) {
      const t = le[e];
      Ne.has(t) || (Ne.add(t), t());
    }
    le.length = 0;
  } while (se.length);
  for (; at.length; )
    at.pop()();
  je = !1, Ne.clear(), ge(n);
}
function zt(n) {
  if (n.fragment !== null) {
    n.update(), ve(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(Ve);
  }
}
function Kt(n) {
  const e = [], t = [];
  le.forEach((r) => n.indexOf(r) === -1 ? e.push(r) : t.push(r)), t.forEach((r) => r()), le = e;
}
const Qt = /* @__PURE__ */ new Set();
function en(n, e) {
  n && n.i && (Qt.delete(n), n.i(e));
}
function tn(n, e, t) {
  const { fragment: r, after_update: o } = n.$$;
  r && r.m(e, t), Ve(() => {
    const s = n.$$.on_mount.map(wt).filter(_t);
    n.$$.on_destroy ? n.$$.on_destroy.push(...s) : ve(s), n.$$.on_mount = [];
  }), o.forEach(Ve);
}
function nn(n, e) {
  const t = n.$$;
  t.fragment !== null && (Kt(t.after_update), ve(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function rn(n, e) {
  n.$$.dirty[0] === -1 && (se.push(n), Et(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function on(n, e, t, r, o, s, u = null, f = [-1]) {
  const l = me;
  ge(n);
  const c = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: ce,
    not_equal: o,
    bound: st(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (l ? l.$$.context : [])),
    // everything else
    callbacks: st(),
    dirty: f,
    skip_bound: !1,
    root: e.target || l.$$.root
  };
  u && u(c.root);
  let O = !1;
  if (c.ctx = t ? t(n, e.props || {}, (m, H, ...$) => {
    const q = $.length ? $[0] : H;
    return c.ctx && o(c.ctx[m], c.ctx[m] = q) && (!c.skip_bound && c.bound[m] && c.bound[m](q), O && rn(n, m)), H;
  }) : [], c.update(), O = !0, ve(c.before_update), c.fragment = r ? r(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const m = qt(e.target);
      c.fragment && c.fragment.l(m), m.forEach(D);
    } else
      c.fragment && c.fragment.c();
    e.intro && en(n.$$.fragment), tn(n, e.target, e.anchor), v();
  }
  ge(l);
}
let kt;
typeof HTMLElement == "function" && (kt = class extends HTMLElement {
  constructor(e, t, r) {
    super();
    /** The Svelte component constructor */
    S(this, "$$ctor");
    /** Slots */
    S(this, "$$s");
    /** The Svelte component instance */
    S(this, "$$c");
    /** Whether or not the custom element is connected */
    S(this, "$$cn", !1);
    /** Component props data */
    S(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    S(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    S(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    S(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    S(this, "$$l_u", /* @__PURE__ */ new Map());
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
          let u;
          return {
            c: function() {
              u = F("slot"), s !== "default" && a(u, "name", s);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(c, O) {
              M(c, u, O);
            },
            d: function(c) {
              c && D(u);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, r = Yt(this);
      for (const s of this.$$s)
        s in r && (t[s] = [e(s)]);
      for (const s of this.attributes) {
        const u = this.$$g_p(s.name);
        u in this.$$d || (this.$$d[u] = Te(u, s.value, this.$$p_d, "toProp"));
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
            const u = Te(
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
          const f = this.$$c.$on(s, u);
          this.$$l_u.set(u, f);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(e, t, r) {
    var o;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Te(e, r, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [e]: this.$$d[e] }));
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
function Te(n, e, t, r) {
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
function sn(n, e, t, r, o, s) {
  let u = class extends kt {
    constructor() {
      super(n, t, o), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Object.keys(e).map(
        (f) => (e[f].attribute || f).toLowerCase()
      );
    }
  };
  return Object.keys(e).forEach((f) => {
    Object.defineProperty(u.prototype, f, {
      get() {
        return this.$$c && f in this.$$c ? this.$$c[f] : this.$$d[f];
      },
      set(l) {
        var c;
        l = Te(f, l, e), this.$$d[f] = l, (c = this.$$c) == null || c.$set({ [f]: l });
      }
    });
  }), r.forEach((f) => {
    Object.defineProperty(u.prototype, f, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[f];
      }
    });
  }), n.element = /** @type {any} */
  u, u;
}
class ln {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    S(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    S(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    nn(this, 1), this.$destroy = ce;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!_t(t))
      return ce;
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
    this.$$set && !Ht(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const an = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(an);
const fn = new TextEncoder();
function cn(n) {
  return [...new Uint8Array(n)].map((e) => e.toString(16).padStart(2, "0")).join("");
}
async function un(n, e = "SHA-256", t = 1e5) {
  const r = Date.now().toString(16);
  n || (n = Math.round(Math.random() * t));
  const o = await pt(r, n, e);
  return {
    algorithm: e,
    challenge: o,
    salt: r,
    signature: ""
  };
}
async function pt(n, e, t) {
  return cn(
    await crypto.subtle.digest(
      t.toUpperCase(),
      fn.encode(n + e)
    )
  );
}
function hn(n, e, t = "SHA-256", r = 1e6, o = 0) {
  const s = new AbortController(), u = Date.now();
  return {
    promise: (async () => {
      for (let l = o; l <= r; l += 1) {
        if (s.signal.aborted)
          return null;
        if (await pt(e, l, t) === n)
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
function Ct() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
var ae, fe, be, we, _e, ye;
class dn {
  constructor(e) {
    S(this, "beaconUrl", null);
    S(this, "error", null);
    S(this, "loadTime", Date.now());
    S(this, "submitTime", null);
    S(this, "startTime", null);
    S(this, "viewTimeThresholdMs", 1500);
    re(this, ae, {});
    re(this, fe, null);
    re(this, be, this.onFormChange.bind(this));
    re(this, we, this.onFormFocus.bind(this));
    re(this, _e, this.onFormSubmit.bind(this));
    re(this, ye, this.onUnload.bind(this));
    this.elForm = e, window.addEventListener("unload", U(this, ye)), this.elForm.addEventListener("change", U(this, be)), this.elForm.addEventListener("focusin", U(this, we)), this.elForm.addEventListener("submit", U(this, _e));
  }
  data() {
    const e = Object.entries(U(this, ae));
    return {
      correction: e.length && e.filter(([t, r]) => r > 1).length / e.length || 0,
      dropoff: !this.submitTime && !this.error && U(this, fe) ? U(this, fe) : null,
      error: this.error,
      mobile: this.isMobile(),
      start: this.startTime,
      submit: this.submitTime,
      tz: Ct()
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
    window.removeEventListener("unload", U(this, ye)), this.elForm.removeEventListener("change", U(this, be)), this.elForm.removeEventListener("focusin", U(this, we)), this.elForm.removeEventListener("submit", U(this, _e));
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
      r && ot(this, fe, r);
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
    U(this, ae)[e] = (U(this, ae)[e] || 0) + 1;
  }
}
ae = new WeakMap(), fe = new WeakMap(), be = new WeakMap(), we = new WeakMap(), _e = new WeakMap(), ye = new WeakMap();
var _ = /* @__PURE__ */ ((n) => (n.ERROR = "error", n.VERIFIED = "verified", n.VERIFYING = "verifying", n.UNVERIFIED = "unverified", n.EXPIRED = "expired", n))(_ || {});
function ft(n) {
  let e, t, r;
  return {
    c() {
      e = z("svg"), t = z("path"), r = z("path"), a(t, "d", "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"), a(t, "fill", "currentColor"), a(t, "opacity", ".25"), a(r, "d", "M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"), a(r, "fill", "currentColor"), a(r, "class", "altcha-spinner"), a(e, "width", "24"), a(e, "height", "24"), a(e, "viewBox", "0 0 24 24"), a(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(o, s) {
      M(o, e, s), p(e, t), p(e, r);
    },
    d(o) {
      o && D(e);
    }
  };
}
function gn(n) {
  let e, t = (
    /*_strings*/
    n[13].label + ""
  ), r;
  return {
    c() {
      e = F("label"), a(e, "for", r = /*name*/
      n[4] + "_checkbox");
    },
    m(o, s) {
      M(o, e, s), e.innerHTML = t;
    },
    p(o, s) {
      s[0] & /*_strings*/
      8192 && t !== (t = /*_strings*/
      o[13].label + "") && (e.innerHTML = t), s[0] & /*name*/
      16 && r !== (r = /*name*/
      o[4] + "_checkbox") && a(e, "for", r);
    },
    d(o) {
      o && D(e);
    }
  };
}
function mn(n) {
  let e, t = (
    /*_strings*/
    n[13].verifying + ""
  );
  return {
    c() {
      e = F("span");
    },
    m(r, o) {
      M(r, e, o), e.innerHTML = t;
    },
    p(r, o) {
      o[0] & /*_strings*/
      8192 && t !== (t = /*_strings*/
      r[13].verifying + "") && (e.innerHTML = t);
    },
    d(r) {
      r && D(e);
    }
  };
}
function bn(n) {
  let e, t = (
    /*_strings*/
    n[13].verified + ""
  ), r, o, s, u, f = (
    /*session*/
    n[11] && ct(n)
  );
  return {
    c() {
      e = F("span"), r = W(), o = F("input"), s = W(), f && f.c(), u = $t(), a(o, "type", "hidden"), a(
        o,
        "name",
        /*name*/
        n[4]
      ), o.value = /*payload*/
      n[6];
    },
    m(l, c) {
      M(l, e, c), e.innerHTML = t, M(l, r, c), M(l, o, c), M(l, s, c), f && f.m(l, c), M(l, u, c);
    },
    p(l, c) {
      c[0] & /*_strings*/
      8192 && t !== (t = /*_strings*/
      l[13].verified + "") && (e.innerHTML = t), c[0] & /*name*/
      16 && a(
        o,
        "name",
        /*name*/
        l[4]
      ), c[0] & /*payload*/
      64 && (o.value = /*payload*/
      l[6]), /*session*/
      l[11] ? f ? f.p(l, c) : (f = ct(l), f.c(), f.m(u.parentNode, u)) : f && (f.d(1), f = null);
    },
    d(l) {
      l && (D(e), D(r), D(o), D(s), D(u)), f && f.d(l);
    }
  };
}
function ct(n) {
  let e;
  return {
    c() {
      e = F("input"), a(e, "type", "hidden"), a(e, "name", "__session"), e.value = /*sessionPayload*/
      n[12];
    },
    m(t, r) {
      M(t, e, r);
    },
    p(t, r) {
      r[0] & /*sessionPayload*/
      4096 && (e.value = /*sessionPayload*/
      t[12]);
    },
    d(t) {
      t && D(e);
    }
  };
}
function ut(n) {
  let e, t, r, o, s, u, f;
  return {
    c() {
      e = F("div"), t = F("a"), r = z("svg"), o = z("path"), s = z("path"), u = z("path"), a(o, "d", "M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z"), a(o, "fill", "currentColor"), a(s, "d", "M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z"), a(s, "fill", "currentColor"), a(u, "d", "M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z"), a(u, "fill", "currentColor"), a(r, "width", "22"), a(r, "height", "22"), a(r, "viewBox", "0 0 20 20"), a(r, "fill", "none"), a(r, "xmlns", "http://www.w3.org/2000/svg"), a(t, "href", At), a(t, "target", "_blank"), a(t, "class", "altcha-logo"), a(t, "aria-label", f = /*_strings*/
      n[13].ariaLinkLabel);
    },
    m(l, c) {
      M(l, e, c), p(e, t), p(t, r), p(r, o), p(r, s), p(r, u);
    },
    p(l, c) {
      c[0] & /*_strings*/
      8192 && f !== (f = /*_strings*/
      l[13].ariaLinkLabel) && a(t, "aria-label", f);
    },
    d(l) {
      l && D(e);
    }
  };
}
function ht(n) {
  let e, t, r, o;
  function s(l, c) {
    return (
      /*state*/
      l[7] === _.EXPIRED ? _n : wn
    );
  }
  let u = s(n), f = u(n);
  return {
    c() {
      e = F("div"), t = z("svg"), r = z("path"), o = W(), f.c(), a(r, "stroke-linecap", "round"), a(r, "stroke-linejoin", "round"), a(r, "d", "M6 18L18 6M6 6l12 12"), a(t, "width", "14"), a(t, "height", "14"), a(t, "xmlns", "http://www.w3.org/2000/svg"), a(t, "fill", "none"), a(t, "viewBox", "0 0 24 24"), a(t, "stroke-width", "1.5"), a(t, "stroke", "currentColor"), a(e, "class", "altcha-error");
    },
    m(l, c) {
      M(l, e, c), p(e, t), p(t, r), p(e, o), f.m(e, null);
    },
    p(l, c) {
      u === (u = s(l)) && f ? f.p(l, c) : (f.d(1), f = u(l), f && (f.c(), f.m(e, null)));
    },
    d(l) {
      l && D(e), f.d();
    }
  };
}
function wn(n) {
  let e, t = (
    /*_strings*/
    n[13].error + ""
  );
  return {
    c() {
      e = F("div"), a(
        e,
        "title",
        /*error*/
        n[5]
      );
    },
    m(r, o) {
      M(r, e, o), e.innerHTML = t;
    },
    p(r, o) {
      o[0] & /*_strings*/
      8192 && t !== (t = /*_strings*/
      r[13].error + "") && (e.innerHTML = t), o[0] & /*error*/
      32 && a(
        e,
        "title",
        /*error*/
        r[5]
      );
    },
    d(r) {
      r && D(e);
    }
  };
}
function _n(n) {
  let e, t = (
    /*_strings*/
    n[13].expired + ""
  );
  return {
    c() {
      e = F("div"), a(
        e,
        "title",
        /*error*/
        n[5]
      );
    },
    m(r, o) {
      M(r, e, o), e.innerHTML = t;
    },
    p(r, o) {
      o[0] & /*_strings*/
      8192 && t !== (t = /*_strings*/
      r[13].expired + "") && (e.innerHTML = t), o[0] & /*error*/
      32 && a(
        e,
        "title",
        /*error*/
        r[5]
      );
    },
    d(r) {
      r && D(e);
    }
  };
}
function dt(n) {
  let e, t, r = (
    /*_strings*/
    n[13].footer + ""
  );
  return {
    c() {
      e = F("div"), t = F("div"), a(e, "class", "altcha-footer");
    },
    m(o, s) {
      M(o, e, s), p(e, t), t.innerHTML = r;
    },
    p(o, s) {
      s[0] & /*_strings*/
      8192 && r !== (r = /*_strings*/
      o[13].footer + "") && (t.innerHTML = r);
    },
    d(o) {
      o && D(e);
    }
  };
}
function gt(n) {
  let e;
  return {
    c() {
      e = F("div"), a(e, "class", "altcha-anchor-arrow");
    },
    m(t, r) {
      M(t, e, r), n[41](e);
    },
    p: ce,
    d(t) {
      t && D(e), n[41](null);
    }
  };
}
function yn(n) {
  let e, t, r, o, s, u, f, l, c, O, m, H, $, q, J, b = (
    /*state*/
    n[7] === _.VERIFYING && ft()
  );
  function K(d, E) {
    return (
      /*state*/
      d[7] === _.VERIFIED ? bn : (
        /*state*/
        d[7] === _.VERIFYING ? mn : gn
      )
    );
  }
  let X = K(n), j = X(n), I = (
    /*hidelogo*/
    (n[3] !== !0 || /*isFreeSaaS*/
    n[14]) && ut(n)
  ), R = (
    /*error*/
    (n[5] || /*state*/
    n[7] === _.EXPIRED) && ht(n)
  ), C = (
    /*_strings*/
    n[13].footer && /*hidefooter*/
    (n[2] !== !0 || /*isFreeSaaS*/
    n[14]) && dt(n)
  ), x = (
    /*floating*/
    n[1] && gt(n)
  );
  return {
    c() {
      e = F("div"), t = F("div"), b && b.c(), r = W(), o = F("div"), s = F("input"), l = W(), c = F("div"), j.c(), O = W(), I && I.c(), m = W(), R && R.c(), H = W(), C && C.c(), $ = W(), x && x.c(), a(s, "type", "checkbox"), a(s, "id", u = /*name*/
      n[4] + "_checkbox"), s.required = f = /*auto*/
      n[0] !== "onsubmit", a(o, "class", "altcha-checkbox"), lt(
        o,
        "altcha-hidden",
        /*state*/
        n[7] === _.VERIFYING
      ), a(c, "class", "altcha-label"), a(t, "class", "altcha-main"), a(e, "class", "altcha"), a(
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
    m(d, E) {
      M(d, e, E), p(e, t), b && b.m(t, null), p(t, r), p(t, o), p(o, s), s.checked = /*checked*/
      n[8], p(t, l), p(t, c), j.m(c, null), p(t, O), I && I.m(t, null), p(e, m), R && R.m(e, null), p(e, H), C && C.m(e, null), p(e, $), x && x.m(e, null), n[42](e), q || (J = [
        Me(
          s,
          "change",
          /*input_change_handler*/
          n[40]
        ),
        Me(
          s,
          "change",
          /*onCheckedChange*/
          n[15]
        ),
        Me(
          s,
          "invalid",
          /*onInvalid*/
          n[16]
        )
      ], q = !0);
    },
    p(d, E) {
      /*state*/
      d[7] === _.VERIFYING ? b || (b = ft(), b.c(), b.m(t, r)) : b && (b.d(1), b = null), E[0] & /*name*/
      16 && u !== (u = /*name*/
      d[4] + "_checkbox") && a(s, "id", u), E[0] & /*auto*/
      1 && f !== (f = /*auto*/
      d[0] !== "onsubmit") && (s.required = f), E[0] & /*checked*/
      256 && (s.checked = /*checked*/
      d[8]), E[0] & /*state*/
      128 && lt(
        o,
        "altcha-hidden",
        /*state*/
        d[7] === _.VERIFYING
      ), X === (X = K(d)) && j ? j.p(d, E) : (j.d(1), j = X(d), j && (j.c(), j.m(c, null))), /*hidelogo*/
      d[3] !== !0 || /*isFreeSaaS*/
      d[14] ? I ? I.p(d, E) : (I = ut(d), I.c(), I.m(t, null)) : I && (I.d(1), I = null), /*error*/
      d[5] || /*state*/
      d[7] === _.EXPIRED ? R ? R.p(d, E) : (R = ht(d), R.c(), R.m(e, H)) : R && (R.d(1), R = null), /*_strings*/
      d[13].footer && /*hidefooter*/
      (d[2] !== !0 || /*isFreeSaaS*/
      d[14]) ? C ? C.p(d, E) : (C = dt(d), C.c(), C.m(e, $)) : C && (C.d(1), C = null), /*floating*/
      d[1] ? x ? x.p(d, E) : (x = gt(d), x.c(), x.m(e, null)) : x && (x.d(1), x = null), E[0] & /*state*/
      128 && a(
        e,
        "data-state",
        /*state*/
        d[7]
      ), E[0] & /*floating*/
      2 && a(
        e,
        "data-floating",
        /*floating*/
        d[1]
      );
    },
    i: ce,
    o: ce,
    d(d) {
      d && D(e), b && b.d(), j.d(), I && I.d(), R && R.d(), C && C.d(), x && x.d(), n[42](null), q = !1, ve(J);
    }
  };
}
const mt = "Visit Altcha.org", At = "https://altcha.org/";
function bt(n) {
  return JSON.parse(n);
}
function vn(n, e, t) {
  var tt, nt;
  let r, o, s, u, { analytics: f = !1 } = e, { auto: l = void 0 } = e, { beaconurl: c = void 0 } = e, { blockspam: O = void 0 } = e, { challengeurl: m = void 0 } = e, { challengejson: H = void 0 } = e, { debug: $ = !1 } = e, { delay: q = 0 } = e, { expire: J = void 0 } = e, { floating: b = void 0 } = e, { floatinganchor: K = void 0 } = e, { floatingoffset: X = void 0 } = e, { hidefooter: j = !1 } = e, { hidelogo: I = !1 } = e, { name: R = "altcha" } = e, { maxnumber: C = 1e6 } = e, { mockerror: x = !1 } = e, { refetchonexpire: d = !0 } = e, { spamfilter: E = !1 } = e, { strings: Ee = void 0 } = e, { test: Z = !1 } = e, { verifyurl: ee = void 0 } = e, { workers: ue = Math.min(16, navigator.hardwareConcurrency || 8) } = e, { workerurl: ke = void 0 } = e;
  const Re = Xt(), Pe = ["SHA-256", "SHA-384", "SHA-512"], Ue = (nt = (tt = document.documentElement.lang) == null ? void 0 : tt.split("-")) == null ? void 0 : nt[0];
  let Q = !1, A, te = null, pe = null, g = null, Ce = null, Y = null, ne = null, V = null, Oe = null, B = _.UNVERIFIED;
  Jt(() => {
    g && (g.removeEventListener("submit", $e), g.removeEventListener("reset", qe), g.removeEventListener("focusin", He), g = null), V && V.destroy(), Y && (clearTimeout(Y), Y = null), document.removeEventListener("click", Xe), document.removeEventListener("scroll", We), window.removeEventListener("resize", Ke);
  }), Gt(() => {
    k("mounted", "0.7.0"), k("workers", ue), Z && k("using test mode"), J && Ae(J), l !== void 0 && k("auto", l), b !== void 0 && Qe(b), g = A.closest("form"), g && (g.addEventListener("submit", $e, { capture: !0 }), g.addEventListener("reset", qe), l === "onfocus" && g.addEventListener("focusin", He)), f && Ge(), l === "onload" && ie(), r && (j || I) && k("Attributes hidefooter and hidelogo ignored because usage with free API Keys require attribution.");
  });
  function k(...i) {
    ($ || i.some((h) => h instanceof Error)) && console[i[0] instanceof Error ? "error" : "log"]("ALTCHA", ...i);
  }
  function He(i) {
    B === _.UNVERIFIED && ie();
  }
  function $e(i) {
    g && V && B === _.VERIFIED && (V.end(), t(12, Oe = V.dataAsBase64())), g && l === "onsubmit" && (B === _.UNVERIFIED ? (i.preventDefault(), i.stopPropagation(), ie().then(() => {
      g == null || g.requestSubmit();
    })) : B !== _.VERIFIED && (i.preventDefault(), i.stopPropagation(), B === _.VERIFYING && ze()));
  }
  function qe() {
    Le();
  }
  function Ze(i, h) {
    return btoa(JSON.stringify({
      algorithm: i.algorithm,
      challenge: i.challenge,
      number: h.number,
      salt: i.salt,
      signature: i.signature,
      test: Z ? !0 : void 0,
      took: h.took
    }));
  }
  function Ye(i) {
    if (!i.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (i.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!Pe.includes(i.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${Pe.join(", ")}`);
    if (!i.challenge || i.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!i.salt || i.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function Lt() {
    var i;
    if (x)
      throw k("mocking error"), new Error("Mocked error.");
    if (o)
      return k("using provided json data"), o;
    if (Z)
      return k("generating test challenge", { test: Z }), un(typeof Z != "boolean" ? +Z : void 0);
    {
      if (!m && g) {
        const y = g.getAttribute("action");
        y != null && y.includes("/form/") && t(17, m = y + "/altcha");
      }
      if (!m)
        throw new Error("Attribute challengeurl not set.");
      k("fetching challenge from", m);
      const h = await fetch(m, {
        headers: E ? { "x-altcha-spam-filter": "1" } : {}
      });
      if (h.status !== 200)
        throw new Error(`Server responded with ${h.status}.`);
      const w = h.headers.get("Expires"), T = h.headers.get("X-Altcha-Config"), P = await h.json(), N = new URLSearchParams((i = P.salt.split("?")) == null ? void 0 : i[1]), G = N.get("expires") || N.get("expire");
      if (G) {
        const y = new Date(+G * 1e3), L = isNaN(y.getTime()) ? 0 : y.getTime() - Date.now();
        L > 0 && Ae(L);
      }
      if (T)
        try {
          const y = JSON.parse(T);
          y && typeof y == "object" && (y.verifyurl && (y.verifyurl = new URL(y.verifyurl, new URL(m)).toString()), et(y));
        } catch (y) {
          k("unable to configure from X-Altcha-Config", y);
        }
      if (!J && (w != null && w.length)) {
        const y = Date.parse(w);
        if (y) {
          const L = y - Date.now();
          L > 0 && Ae(L);
        }
      }
      return P;
    }
  }
  function Ge() {
    if (!V)
      if (g) {
        if (k("analytics enabled"), t(11, V = new dn(g)), c === void 0) {
          const i = g.getAttribute("action");
          i && t(19, c = i + "/beacon");
        }
        t(11, V.beaconUrl = c || null, V);
      } else
        k("analytics cannot be enabled - form element not found");
  }
  function Je() {
    m && d && B === _.VERIFIED ? ie() : Le(_.EXPIRED, u.expired);
  }
  async function It(i) {
    let h = null;
    if ("Worker" in window) {
      try {
        h = await xt(i.challenge, i.salt, i.algorithm, i.maxnumber);
      } catch (w) {
        k(w);
      }
      if ((h == null ? void 0 : h.number) !== void 0)
        return { data: i, solution: h };
    }
    return {
      data: i,
      solution: await hn(i.challenge, i.salt, i.algorithm, i.maxnumber || C).promise
    };
  }
  async function xt(i, h, w, T = typeof Z == "number" ? Z : C, P = Math.ceil(ue)) {
    const N = [];
    P = Math.min(16, Math.max(1, P));
    for (let L = 0; L < P; L++)
      N.push(createAltchaWorker(ke));
    const G = Math.ceil(T / P), y = await Promise.all(N.map((L, De) => {
      const he = De * G;
      return new Promise((Ie) => {
        L.addEventListener("message", (xe) => {
          if (xe.data)
            for (const de of N)
              de !== L && de.postMessage({ type: "abort" });
          Ie(xe.data);
        }), L.postMessage({
          payload: {
            alg: w,
            challenge: i,
            max: he + G,
            salt: h,
            start: he
          },
          type: "work"
        });
      });
    }));
    for (const L of N)
      L.terminate();
    return y.find((L) => !!L) || null;
  }
  function Tt() {
    [_.UNVERIFIED, _.ERROR, _.EXPIRED].includes(B) ? E && (g == null ? void 0 : g.reportValidity()) === !1 ? t(8, Q = !1) : ie() : t(8, Q = !0);
  }
  function Xe(i) {
    const h = i.target;
    b && h && !A.contains(h) && B === _.VERIFIED && t(9, A.style.display = "none", A);
  }
  function We() {
    b && Se();
  }
  function ze() {
    B === _.VERIFYING && u.waitAlert && alert(u.waitAlert);
  }
  function Ft(i) {
    V && V.trackError(Ce);
  }
  function Rt(i) {
    b && B !== _.UNVERIFIED && requestAnimationFrame(() => {
      Se();
    });
  }
  function Ke() {
    b && Se();
  }
  function Ae(i) {
    k("expire", i), Y && (clearTimeout(Y), Y = null), i < 1 ? Je() : Y = setTimeout(Je, i);
  }
  function Qe(i) {
    k("floating", i), b !== i && (t(9, A.style.left = "", A), t(9, A.style.top = "", A)), t(1, b = i === !0 || i === "" ? "auto" : i === !1 || i === "false" ? void 0 : b), b ? (l || t(0, l = "onsubmit"), document.addEventListener("scroll", We), document.addEventListener("click", Xe), window.addEventListener("resize", Ke)) : l === "onsubmit" && t(0, l = void 0);
  }
  function St(i) {
    var w;
    const h = g == null ? void 0 : g.querySelector(typeof i == "string" ? `input[name="${i}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((w = h == null ? void 0 : h.value) == null ? void 0 : w.slice(h.value.indexOf("@"))) || void 0;
  }
  function Dt(i) {
    return [
      ...(g == null ? void 0 : g.querySelectorAll(i != null && i.length ? i.map((w) => `input[name="${w}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (w, T) => {
        const P = T.name, N = T.value;
        return P && N && (w[P] = /\n/.test(N) ? N.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : N), w;
      },
      {}
    );
  }
  async function Mt(i) {
    if (!ee)
      throw new Error("Attribute verifyurl not set.");
    k("requesting server verification from", ee);
    const h = { payload: i };
    if (E) {
      const { blockedCountries: P, classifier: N, disableRules: G, email: y, expectedLanguages: L, expectedCountries: De, fields: he, ipAddress: Ie, text: xe, timeZone: de } = Nt();
      h.blockedCountries = P, h.classifier = N, h.disableRules = G, h.email = y === !1 ? void 0 : St(y), h.expectedCountries = De, h.expectedLanguages = L || (Ue ? [Ue] : void 0), h.fields = he === !1 ? void 0 : Dt(he), h.ipAddress = Ie === !1 ? void 0 : Ie || "auto", h.text = xe, h.timeZone = de === !1 ? void 0 : de || Ct();
    }
    const w = await fetch(ee, {
      body: JSON.stringify(h),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (w.status !== 200)
      throw new Error(`Server responded with ${w.status}.`);
    const T = await w.json();
    if (T != null && T.payload && t(6, ne = T.payload), Re("serververification", T), O && T.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  function Nt() {
    return E === "ipAddress" ? {
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
    } : typeof E == "object" ? E : {
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
  function Se(i = 20) {
    if (A)
      if (pe || (pe = (K ? document.querySelector(K) : g == null ? void 0 : g.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || g), pe) {
        const h = parseInt(X, 10) || 12, w = pe.getBoundingClientRect(), T = A.getBoundingClientRect(), P = document.documentElement.clientHeight, N = document.documentElement.clientWidth, G = b === "auto" ? w.bottom + T.height + h + i > P : b === "top", y = Math.max(i, Math.min(N - i - T.width, w.left + w.width / 2 - T.width / 2));
        if (G ? t(9, A.style.top = `${w.top - (T.height + h)}px`, A) : t(9, A.style.top = `${w.bottom + h}px`, A), t(9, A.style.left = `${y}px`, A), A.setAttribute("data-floating", G ? "top" : "bottom"), te) {
          const L = te.getBoundingClientRect();
          t(10, te.style.left = w.left - y + w.width / 2 - L.width / 2 + "px", te);
        }
      } else
        k("unable to find floating anchor element");
  }
  function et(i) {
    i.analytics && (t(18, f = i.analytics), Ge()), i.auto !== void 0 && (t(0, l = i.auto), l === "onload" && ie()), i.beaconurl && (t(19, c = i.beaconurl), V && t(11, V.beaconUrl = c, V)), i.floatinganchor !== void 0 && t(23, K = i.floatinganchor), i.delay !== void 0 && t(21, q = i.delay), i.floatingoffset !== void 0 && t(24, X = i.floatingoffset), i.floating !== void 0 && Qe(i.floating), i.expire !== void 0 && (Ae(i.expire), t(22, J = i.expire)), i.challenge && (Ye(i.challenge), o = i.challenge), i.challengeurl !== void 0 && t(17, m = i.challengeurl), i.debug !== void 0 && t(20, $ = !!i.debug), i.hidefooter !== void 0 && t(2, j = !!i.hidefooter), i.hidelogo !== void 0 && t(3, I = !!i.hidelogo), i.maxnumber !== void 0 && t(25, C = +i.maxnumber), i.mockerror !== void 0 && t(26, x = !!i.mockerror), i.name !== void 0 && t(4, R = i.name), i.refetchonexpire !== void 0 && t(27, d = !!i.refetchonexpire), i.spamfilter !== void 0 && t(28, E = typeof i.spamfilter == "object" ? i.spamfilter : !!i.spamfilter), i.strings && t(39, s = i.strings), i.test !== void 0 && t(29, Z = typeof i.test == "number" ? i.test : !!i.test), i.verifyurl !== void 0 && t(30, ee = i.verifyurl), i.workers !== void 0 && t(31, ue = +i.workers), i.workerurl !== void 0 && t(32, ke = i.workerurl);
  }
  function Le(i = _.UNVERIFIED, h = null) {
    Y && (clearTimeout(Y), Y = null), t(8, Q = !1), t(5, Ce = h), t(6, ne = null), t(7, B = i);
  }
  async function ie() {
    return Le(_.VERIFYING), await new Promise((i) => setTimeout(i, q || 0)), Lt().then((i) => (Ye(i), k("challenge", i), It(i))).then(({ data: i, solution: h }) => {
      if (k("solution", h), (h == null ? void 0 : h.number) !== void 0) {
        if (ee)
          return Mt(Ze(i, h));
        t(6, ne = Ze(i, h)), k("payload", ne);
      } else
        throw k("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      Wt().then(() => {
        t(7, B = _.VERIFIED), t(8, Q = !0), k("verified"), Re("verified", { payload: ne });
      });
    }).catch((i) => {
      k(i), t(7, B = _.ERROR), t(8, Q = !1), t(5, Ce = i.message);
    });
  }
  function jt() {
    Q = this.checked, t(8, Q);
  }
  function Vt(i) {
    Fe[i ? "unshift" : "push"](() => {
      te = i, t(10, te);
    });
  }
  function Bt(i) {
    Fe[i ? "unshift" : "push"](() => {
      A = i, t(9, A);
    });
  }
  return n.$$set = (i) => {
    "analytics" in i && t(18, f = i.analytics), "auto" in i && t(0, l = i.auto), "beaconurl" in i && t(19, c = i.beaconurl), "blockspam" in i && t(33, O = i.blockspam), "challengeurl" in i && t(17, m = i.challengeurl), "challengejson" in i && t(34, H = i.challengejson), "debug" in i && t(20, $ = i.debug), "delay" in i && t(21, q = i.delay), "expire" in i && t(22, J = i.expire), "floating" in i && t(1, b = i.floating), "floatinganchor" in i && t(23, K = i.floatinganchor), "floatingoffset" in i && t(24, X = i.floatingoffset), "hidefooter" in i && t(2, j = i.hidefooter), "hidelogo" in i && t(3, I = i.hidelogo), "name" in i && t(4, R = i.name), "maxnumber" in i && t(25, C = i.maxnumber), "mockerror" in i && t(26, x = i.mockerror), "refetchonexpire" in i && t(27, d = i.refetchonexpire), "spamfilter" in i && t(28, E = i.spamfilter), "strings" in i && t(35, Ee = i.strings), "test" in i && t(29, Z = i.test), "verifyurl" in i && t(30, ee = i.verifyurl), "workers" in i && t(31, ue = i.workers), "workerurl" in i && t(32, ke = i.workerurl);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*challengeurl*/
    131072 && t(14, r = !!(m != null && m.includes(".altcha.org")) && !!(m != null && m.includes("apiKey=ckey_"))), n.$$.dirty[1] & /*challengejson*/
    8 && (o = H ? bt(H) : void 0), n.$$.dirty[1] & /*strings*/
    16 && t(39, s = Ee ? bt(Ee) : {}), n.$$.dirty[1] & /*parsedStrings*/
    256 && t(13, u = {
      ariaLinkLabel: mt,
      error: "Verification failed. Try again later.",
      expired: "Verification expired. Try again.",
      footer: `Protected by <a href="${At}" target="_blank" aria-label="${s.ariaLinkLabel || mt}">ALTCHA</a>`,
      label: "I'm not a robot",
      verified: "Verified",
      verifying: "Verifying...",
      waitAlert: "Verifying... please wait.",
      ...s
    }), n.$$.dirty[0] & /*payload, state*/
    192 && Re("statechange", { payload: ne, state: B }), n.$$.dirty[0] & /*error*/
    32 && Ft(), n.$$.dirty[0] & /*state*/
    128 && Rt();
  }, [
    l,
    b,
    j,
    I,
    R,
    Ce,
    ne,
    B,
    Q,
    A,
    te,
    V,
    Oe,
    u,
    r,
    Tt,
    ze,
    m,
    f,
    c,
    $,
    q,
    J,
    K,
    X,
    C,
    x,
    d,
    E,
    Z,
    ee,
    ue,
    ke,
    O,
    H,
    Ee,
    et,
    Le,
    ie,
    s,
    jt,
    Vt,
    Bt
  ];
}
class En extends ln {
  constructor(e) {
    super(), on(
      this,
      e,
      vn,
      yn,
      Ot,
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
      null,
      [-1, -1, -1]
    );
  }
  get analytics() {
    return this.$$.ctx[18];
  }
  set analytics(e) {
    this.$$set({ analytics: e }), v();
  }
  get auto() {
    return this.$$.ctx[0];
  }
  set auto(e) {
    this.$$set({ auto: e }), v();
  }
  get beaconurl() {
    return this.$$.ctx[19];
  }
  set beaconurl(e) {
    this.$$set({ beaconurl: e }), v();
  }
  get blockspam() {
    return this.$$.ctx[33];
  }
  set blockspam(e) {
    this.$$set({ blockspam: e }), v();
  }
  get challengeurl() {
    return this.$$.ctx[17];
  }
  set challengeurl(e) {
    this.$$set({ challengeurl: e }), v();
  }
  get challengejson() {
    return this.$$.ctx[34];
  }
  set challengejson(e) {
    this.$$set({ challengejson: e }), v();
  }
  get debug() {
    return this.$$.ctx[20];
  }
  set debug(e) {
    this.$$set({ debug: e }), v();
  }
  get delay() {
    return this.$$.ctx[21];
  }
  set delay(e) {
    this.$$set({ delay: e }), v();
  }
  get expire() {
    return this.$$.ctx[22];
  }
  set expire(e) {
    this.$$set({ expire: e }), v();
  }
  get floating() {
    return this.$$.ctx[1];
  }
  set floating(e) {
    this.$$set({ floating: e }), v();
  }
  get floatinganchor() {
    return this.$$.ctx[23];
  }
  set floatinganchor(e) {
    this.$$set({ floatinganchor: e }), v();
  }
  get floatingoffset() {
    return this.$$.ctx[24];
  }
  set floatingoffset(e) {
    this.$$set({ floatingoffset: e }), v();
  }
  get hidefooter() {
    return this.$$.ctx[2];
  }
  set hidefooter(e) {
    this.$$set({ hidefooter: e }), v();
  }
  get hidelogo() {
    return this.$$.ctx[3];
  }
  set hidelogo(e) {
    this.$$set({ hidelogo: e }), v();
  }
  get name() {
    return this.$$.ctx[4];
  }
  set name(e) {
    this.$$set({ name: e }), v();
  }
  get maxnumber() {
    return this.$$.ctx[25];
  }
  set maxnumber(e) {
    this.$$set({ maxnumber: e }), v();
  }
  get mockerror() {
    return this.$$.ctx[26];
  }
  set mockerror(e) {
    this.$$set({ mockerror: e }), v();
  }
  get refetchonexpire() {
    return this.$$.ctx[27];
  }
  set refetchonexpire(e) {
    this.$$set({ refetchonexpire: e }), v();
  }
  get spamfilter() {
    return this.$$.ctx[28];
  }
  set spamfilter(e) {
    this.$$set({ spamfilter: e }), v();
  }
  get strings() {
    return this.$$.ctx[35];
  }
  set strings(e) {
    this.$$set({ strings: e }), v();
  }
  get test() {
    return this.$$.ctx[29];
  }
  set test(e) {
    this.$$set({ test: e }), v();
  }
  get verifyurl() {
    return this.$$.ctx[30];
  }
  set verifyurl(e) {
    this.$$set({ verifyurl: e }), v();
  }
  get workers() {
    return this.$$.ctx[31];
  }
  set workers(e) {
    this.$$set({ workers: e }), v();
  }
  get workerurl() {
    return this.$$.ctx[32];
  }
  set workerurl(e) {
    this.$$set({ workerurl: e }), v();
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
customElements.define("altcha-widget", sn(En, { analytics: { type: "Boolean" }, auto: {}, beaconurl: {}, blockspam: {}, challengeurl: {}, challengejson: {}, debug: { type: "Boolean" }, delay: {}, expire: {}, floating: {}, floatinganchor: {}, floatingoffset: {}, hidefooter: { type: "Boolean" }, hidelogo: { type: "Boolean" }, name: {}, maxnumber: {}, mockerror: { type: "Boolean" }, refetchonexpire: { type: "Boolean" }, spamfilter: { type: "Boolean" }, strings: {}, test: { type: "Boolean" }, verifyurl: {}, workers: {}, workerurl: {} }, [], ["configure", "reset", "verify"], !1));
globalThis.createAltchaWorker = (n) => new Worker(new URL(n || "./worker.js", import.meta.url));
export {
  En as Altcha
};
