var jt = Object.defineProperty;
var $t = (n, e, t) => e in n ? jt(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Z = (n, e, t) => $t(n, typeof e != "symbol" ? e + "" : e, t);
function Ce() {
}
function Ht(n, e) {
  for (const t in e) n[t] = e[t];
  return (
    /** @type {T & S} */
    n
  );
}
function ht(n) {
  return n();
}
function nt() {
  return /* @__PURE__ */ Object.create(null);
}
function Ee(n) {
  n.forEach(ht);
}
function dt(n) {
  return typeof n == "function";
}
function Ot(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function Ut(n) {
  return Object.keys(n).length === 0;
}
function Bt(n, e, t, i) {
  if (n) {
    const o = gt(n, e, t, i);
    return n[0](o);
  }
}
function gt(n, e, t, i) {
  return n[1] && i ? Ht(t.ctx.slice(), n[1](i(e))) : t.ctx;
}
function qt(n, e, t, i) {
  if (n[2] && i) {
    const o = n[2](i(t));
    if (e.dirty === void 0)
      return o;
    if (typeof o == "object") {
      const l = [], s = Math.max(e.dirty.length, o.length);
      for (let h = 0; h < s; h += 1)
        l[h] = e.dirty[h] | o[h];
      return l;
    }
    return e.dirty | o;
  }
  return e.dirty;
}
function Zt(n, e, t, i, o, l) {
  if (o) {
    const s = gt(e, t, i, l);
    n.p(s, o);
  }
}
function Gt(n) {
  if (n.ctx.length > 32) {
    const e = [], t = n.ctx.length / 32;
    for (let i = 0; i < t; i++)
      e[i] = -1;
    return e;
  }
  return -1;
}
function L(n, e) {
  n.appendChild(e);
}
function $(n, e, t) {
  n.insertBefore(e, t || null);
}
function j(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function F(n) {
  return document.createElement(n);
}
function K(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function Yt(n) {
  return document.createTextNode(n);
}
function z() {
  return Yt(" ");
}
function Le(n, e, t, i) {
  return n.addEventListener(e, t, i), () => n.removeEventListener(e, t, i);
}
function c(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
function Wt(n) {
  return Array.from(n.childNodes);
}
function rt(n, e, t) {
  n.classList.toggle(e, !!t);
}
function Xt(n, e, { bubbles: t = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(n, { detail: e, bubbles: t, cancelable: i });
}
function Jt(n) {
  const e = {};
  return n.childNodes.forEach(
    /** @param {Element} node */
    (t) => {
      e[t.slot || "default"] = !0;
    }
  ), e;
}
let we;
function _e(n) {
  we = n;
}
function Te() {
  if (!we) throw new Error("Function called outside component initialization");
  return we;
}
function zt(n) {
  Te().$$.on_mount.push(n);
}
function Kt(n) {
  Te().$$.on_destroy.push(n);
}
function Qt() {
  const n = Te();
  return (e, t, { cancelable: i = !1 } = {}) => {
    const o = n.$$.callbacks[e];
    if (o) {
      const l = Xt(
        /** @type {string} */
        e,
        t,
        { cancelable: i }
      );
      return o.slice().forEach((s) => {
        s.call(n, l);
      }), !l.defaultPrevented;
    }
    return !0;
  };
}
const ce = [], Ae = [];
let ue = [];
const it = [], mt = /* @__PURE__ */ Promise.resolve();
let Se = !1;
function bt() {
  Se || (Se = !0, mt.then(E));
}
function en() {
  return bt(), mt;
}
function De(n) {
  ue.push(n);
}
const Re = /* @__PURE__ */ new Set();
let fe = 0;
function E() {
  if (fe !== 0)
    return;
  const n = we;
  do {
    try {
      for (; fe < ce.length; ) {
        const e = ce[fe];
        fe++, _e(e), tn(e.$$);
      }
    } catch (e) {
      throw ce.length = 0, fe = 0, e;
    }
    for (_e(null), ce.length = 0, fe = 0; Ae.length; ) Ae.pop()();
    for (let e = 0; e < ue.length; e += 1) {
      const t = ue[e];
      Re.has(t) || (Re.add(t), t());
    }
    ue.length = 0;
  } while (ce.length);
  for (; it.length; )
    it.pop()();
  Se = !1, Re.clear(), _e(n);
}
function tn(n) {
  if (n.fragment !== null) {
    n.update(), Ee(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(De);
  }
}
function nn(n) {
  const e = [], t = [];
  ue.forEach((i) => n.indexOf(i) === -1 ? e.push(i) : t.push(i)), t.forEach((i) => i()), ue = e;
}
const ve = /* @__PURE__ */ new Set();
let rn;
function yt(n, e) {
  n && n.i && (ve.delete(n), n.i(e));
}
function on(n, e, t, i) {
  if (n && n.o) {
    if (ve.has(n)) return;
    ve.add(n), rn.c.push(() => {
      ve.delete(n);
    }), n.o(e);
  }
}
function ln(n, e, t) {
  const { fragment: i, after_update: o } = n.$$;
  i && i.m(e, t), De(() => {
    const l = n.$$.on_mount.map(ht).filter(dt);
    n.$$.on_destroy ? n.$$.on_destroy.push(...l) : Ee(l), n.$$.on_mount = [];
  }), o.forEach(De);
}
function sn(n, e) {
  const t = n.$$;
  t.fragment !== null && (nn(t.after_update), Ee(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function fn(n, e) {
  n.$$.dirty[0] === -1 && (ce.push(n), bt(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function cn(n, e, t, i, o, l, s = null, h = [-1]) {
  const d = we;
  _e(n);
  const u = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: Ce,
    not_equal: o,
    bound: nt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (d ? d.$$.context : [])),
    // everything else
    callbacks: nt(),
    dirty: h,
    skip_bound: !1,
    root: e.target || d.$$.root
  };
  s && s(u.root);
  let A = !1;
  if (u.ctx = t ? t(n, e.props || {}, (b, Y, ...O) => {
    const U = O.length ? O[0] : Y;
    return u.ctx && o(u.ctx[b], u.ctx[b] = U) && (!u.skip_bound && u.bound[b] && u.bound[b](U), A && fn(n, b)), Y;
  }) : [], u.update(), A = !0, Ee(u.before_update), u.fragment = i ? i(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const b = Wt(e.target);
      u.fragment && u.fragment.l(b), b.forEach(j);
    } else
      u.fragment && u.fragment.c();
    e.intro && yt(n.$$.fragment), ln(n, e.target, e.anchor), E();
  }
  _e(d);
}
let _t;
typeof HTMLElement == "function" && (_t = class extends HTMLElement {
  constructor(e, t, i) {
    super();
    /** The Svelte component constructor */
    Z(this, "$$ctor");
    /** Slots */
    Z(this, "$$s");
    /** The Svelte component instance */
    Z(this, "$$c");
    /** Whether or not the custom element is connected */
    Z(this, "$$cn", !1);
    /** Component props data */
    Z(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    Z(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    Z(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    Z(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    Z(this, "$$l_u", /* @__PURE__ */ new Map());
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
    if (this.$$l[e]) {
      const o = this.$$l[e].indexOf(t);
      o >= 0 && this.$$l[e].splice(o, 1);
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(l) {
        return () => {
          let s;
          return {
            c: function() {
              s = F("slot"), l !== "default" && c(s, "name", l);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(u, A) {
              $(u, s, A);
            },
            d: function(u) {
              u && j(s);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, i = Jt(this);
      for (const l of this.$$s)
        l in i && (t[l] = [e(l)]);
      for (const l of this.attributes) {
        const s = this.$$g_p(l.name);
        s in this.$$d || (this.$$d[s] = xe(s, l.value, this.$$p_d, "toProp"));
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
            const s = xe(
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
          const h = this.$$c.$on(l, s);
          this.$$l_u.set(s, h);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(e, t, i) {
    var o;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = xe(e, i, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [e]: this.$$d[e] }));
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
function xe(n, e, t, i) {
  var l;
  const o = (l = t[n]) == null ? void 0 : l.type;
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
function un(n, e, t, i, o, l) {
  let s = class extends _t {
    constructor() {
      super(n, t, o), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Object.keys(e).map(
        (h) => (e[h].attribute || h).toLowerCase()
      );
    }
  };
  return Object.keys(e).forEach((h) => {
    Object.defineProperty(s.prototype, h, {
      get() {
        return this.$$c && h in this.$$c ? this.$$c[h] : this.$$d[h];
      },
      set(d) {
        var u;
        d = xe(h, d, e), this.$$d[h] = d, (u = this.$$c) == null || u.$set({ [h]: d });
      }
    });
  }), i.forEach((h) => {
    Object.defineProperty(s.prototype, h, {
      get() {
        var d;
        return (d = this.$$c) == null ? void 0 : d[h];
      }
    });
  }), n.element = /** @type {any} */
  s, s;
}
class an {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Z(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Z(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    sn(this, 1), this.$destroy = Ce;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!dt(t))
      return Ce;
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
    this.$$set && !Ut(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const hn = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(hn);
const wt = new TextEncoder();
function dn(n) {
  return [...new Uint8Array(n)].map((e) => e.toString(16).padStart(2, "0")).join("");
}
async function gn(n, e = "SHA-256", t = 1e5) {
  const i = Date.now().toString(16);
  n || (n = Math.round(Math.random() * t));
  const o = await Et(i, n, e);
  return {
    algorithm: e,
    challenge: o,
    salt: i,
    signature: ""
  };
}
async function Et(n, e, t) {
  return dn(
    await crypto.subtle.digest(
      t.toUpperCase(),
      wt.encode(n + e)
    )
  );
}
function mn(n, e, t = "SHA-256", i = 1e6, o = 0) {
  const l = new AbortController(), s = Date.now();
  return {
    promise: (async () => {
      for (let d = o; d <= i; d += 1) {
        if (l.signal.aborted)
          return null;
        if (await Et(e, d, t) === n)
          return {
            number: d,
            took: Date.now() - s
          };
      }
      return null;
    })(),
    controller: l
  };
}
function bn() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function yn(n) {
  const e = atob(n), t = new Uint8Array(e.length);
  for (let i = 0; i < e.length; i++)
    t[i] = e.charCodeAt(i);
  return t;
}
function _n(n, e = 12) {
  const t = new Uint8Array(e);
  for (let i = 0; i < e; i++)
    t[i] = n % 256, n = Math.floor(n / 256);
  return t;
}
async function wn(n, e = "", t = 1e6, i = 0) {
  const o = "AES-GCM", l = new AbortController(), s = Date.now(), h = async () => {
    for (let A = i; A <= t; A += 1) {
      if (l.signal.aborted || !d || !u)
        return null;
      try {
        const b = await crypto.subtle.decrypt(
          {
            name: o,
            iv: _n(A)
          },
          d,
          u
        );
        if (b)
          return {
            clearText: new TextDecoder().decode(b),
            took: Date.now() - s
          };
      } catch {
      }
    }
    return null;
  };
  let d = null, u = null;
  try {
    u = yn(n);
    const A = await crypto.subtle.digest(
      "SHA-256",
      wt.encode(e)
    );
    d = await crypto.subtle.importKey(
      "raw",
      A,
      o,
      !1,
      ["decrypt"]
    );
  } catch {
    return {
      promise: Promise.reject(),
      controller: l
    };
  }
  return {
    promise: h(),
    controller: l
  };
}
var m = /* @__PURE__ */ ((n) => (n.ERROR = "error", n.VERIFIED = "verified", n.VERIFYING = "verifying", n.UNVERIFIED = "unverified", n.EXPIRED = "expired", n))(m || {});
function ot(n) {
  let e, t, i;
  return {
    c() {
      e = K("svg"), t = K("path"), i = K("path"), c(t, "d", "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"), c(t, "fill", "currentColor"), c(t, "opacity", ".25"), c(i, "d", "M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"), c(i, "fill", "currentColor"), c(i, "class", "altcha-spinner"), c(e, "width", "24"), c(e, "height", "24"), c(e, "viewBox", "0 0 24 24"), c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(o, l) {
      $(o, e, l), L(e, t), L(e, i);
    },
    d(o) {
      o && j(e);
    }
  };
}
function En(n) {
  let e, t = (
    /*_strings*/
    n[11].label + ""
  ), i;
  return {
    c() {
      e = F("label"), c(e, "for", i = /*name*/
      n[4] + "_checkbox");
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
      o && j(e);
    }
  };
}
function pn(n) {
  let e, t = (
    /*_strings*/
    n[11].verifying + ""
  );
  return {
    c() {
      e = F("span");
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
      i && j(e);
    }
  };
}
function kn(n) {
  let e, t = (
    /*_strings*/
    n[11].verified + ""
  ), i, o;
  return {
    c() {
      e = F("span"), i = z(), o = F("input"), c(o, "type", "hidden"), c(
        o,
        "name",
        /*name*/
        n[4]
      ), o.value = /*payload*/
      n[6];
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
      64 && (o.value = /*payload*/
      l[6]);
    },
    d(l) {
      l && (j(e), j(i), j(o));
    }
  };
}
function lt(n) {
  let e, t, i, o, l, s, h;
  return {
    c() {
      e = F("div"), t = F("a"), i = K("svg"), o = K("path"), l = K("path"), s = K("path"), c(o, "d", "M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z"), c(o, "fill", "currentColor"), c(l, "d", "M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z"), c(l, "fill", "currentColor"), c(s, "d", "M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z"), c(s, "fill", "currentColor"), c(i, "width", "22"), c(i, "height", "22"), c(i, "viewBox", "0 0 20 20"), c(i, "fill", "none"), c(i, "xmlns", "http://www.w3.org/2000/svg"), c(t, "href", pt), c(t, "target", "_blank"), c(t, "class", "altcha-logo"), c(t, "aria-label", h = /*_strings*/
      n[11].ariaLinkLabel);
    },
    m(d, u) {
      $(d, e, u), L(e, t), L(t, i), L(i, o), L(i, l), L(i, s);
    },
    p(d, u) {
      u[0] & /*_strings*/
      2048 && h !== (h = /*_strings*/
      d[11].ariaLinkLabel) && c(t, "aria-label", h);
    },
    d(d) {
      d && j(e);
    }
  };
}
function st(n) {
  let e, t, i, o;
  function l(d, u) {
    return (
      /*state*/
      d[7] === m.EXPIRED ? xn : vn
    );
  }
  let s = l(n), h = s(n);
  return {
    c() {
      e = F("div"), t = K("svg"), i = K("path"), o = z(), h.c(), c(i, "stroke-linecap", "round"), c(i, "stroke-linejoin", "round"), c(i, "d", "M6 18L18 6M6 6l12 12"), c(t, "width", "14"), c(t, "height", "14"), c(t, "xmlns", "http://www.w3.org/2000/svg"), c(t, "fill", "none"), c(t, "viewBox", "0 0 24 24"), c(t, "stroke-width", "1.5"), c(t, "stroke", "currentColor"), c(e, "class", "altcha-error");
    },
    m(d, u) {
      $(d, e, u), L(e, t), L(t, i), L(e, o), h.m(e, null);
    },
    p(d, u) {
      s === (s = l(d)) && h ? h.p(d, u) : (h.d(1), h = s(d), h && (h.c(), h.m(e, null)));
    },
    d(d) {
      d && j(e), h.d();
    }
  };
}
function vn(n) {
  let e, t = (
    /*_strings*/
    n[11].error + ""
  );
  return {
    c() {
      e = F("div"), c(
        e,
        "title",
        /*error*/
        n[5]
      );
    },
    m(i, o) {
      $(i, e, o), e.innerHTML = t;
    },
    p(i, o) {
      o[0] & /*_strings*/
      2048 && t !== (t = /*_strings*/
      i[11].error + "") && (e.innerHTML = t), o[0] & /*error*/
      32 && c(
        e,
        "title",
        /*error*/
        i[5]
      );
    },
    d(i) {
      i && j(e);
    }
  };
}
function xn(n) {
  let e, t = (
    /*_strings*/
    n[11].expired + ""
  );
  return {
    c() {
      e = F("div"), c(
        e,
        "title",
        /*error*/
        n[5]
      );
    },
    m(i, o) {
      $(i, e, o), e.innerHTML = t;
    },
    p(i, o) {
      o[0] & /*_strings*/
      2048 && t !== (t = /*_strings*/
      i[11].expired + "") && (e.innerHTML = t), o[0] & /*error*/
      32 && c(
        e,
        "title",
        /*error*/
        i[5]
      );
    },
    d(i) {
      i && j(e);
    }
  };
}
function ft(n) {
  let e, t, i = (
    /*_strings*/
    n[11].footer + ""
  );
  return {
    c() {
      e = F("div"), t = F("div"), c(e, "class", "altcha-footer");
    },
    m(o, l) {
      $(o, e, l), L(e, t), t.innerHTML = i;
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
function ct(n) {
  let e;
  return {
    c() {
      e = F("div"), c(e, "class", "altcha-anchor-arrow");
    },
    m(t, i) {
      $(t, e, i), n[48](e);
    },
    p: Ce,
    d(t) {
      t && j(e), n[48](null);
    }
  };
}
function Cn(n) {
  let e, t, i, o, l, s, h, d, u, A, b, Y, O, U, D, R, X;
  const J = (
    /*#slots*/
    n[46].default
  ), N = Bt(
    J,
    n,
    /*$$scope*/
    n[45],
    null
  );
  let T = (
    /*state*/
    n[7] === m.VERIFYING && ot()
  );
  function Q(a, y) {
    return (
      /*state*/
      a[7] === m.VERIFIED ? kn : (
        /*state*/
        a[7] === m.VERIFYING ? pn : En
      )
    );
  }
  let G = Q(n), V = G(n), v = (
    /*hidelogo*/
    (n[3] !== !0 || /*isFreeSaaS*/
    n[12]) && lt(n)
  ), P = (
    /*error*/
    (n[5] || /*state*/
    n[7] === m.EXPIRED) && st(n)
  ), S = (
    /*_strings*/
    n[11].footer && /*hidefooter*/
    (n[2] !== !0 || /*isFreeSaaS*/
    n[12]) && ft(n)
  ), p = (
    /*floating*/
    n[1] && ct(n)
  );
  return {
    c() {
      N && N.c(), e = z(), t = F("div"), i = F("div"), T && T.c(), o = z(), l = F("div"), s = F("input"), u = z(), A = F("div"), V.c(), b = z(), v && v.c(), Y = z(), P && P.c(), O = z(), S && S.c(), U = z(), p && p.c(), c(s, "type", "checkbox"), c(s, "id", h = /*name*/
      n[4] + "_checkbox"), s.required = d = /*auto*/
      n[0] !== "onsubmit" && (!/*floating*/
      n[1] || /*auto*/
      n[0] !== "off"), c(l, "class", "altcha-checkbox"), rt(
        l,
        "altcha-hidden",
        /*state*/
        n[7] === m.VERIFYING
      ), c(A, "class", "altcha-label"), c(i, "class", "altcha-main"), c(t, "class", "altcha"), c(
        t,
        "data-state",
        /*state*/
        n[7]
      ), c(
        t,
        "data-floating",
        /*floating*/
        n[1]
      );
    },
    m(a, y) {
      N && N.m(a, y), $(a, e, y), $(a, t, y), L(t, i), T && T.m(i, null), L(i, o), L(i, l), L(l, s), s.checked = /*checked*/
      n[8], L(i, u), L(i, A), V.m(A, null), L(i, b), v && v.m(i, null), L(t, Y), P && P.m(t, null), L(t, O), S && S.m(t, null), L(t, U), p && p.m(t, null), n[49](t), D = !0, R || (X = [
        Le(
          s,
          "change",
          /*input_change_handler*/
          n[47]
        ),
        Le(
          s,
          "change",
          /*onCheckedChange*/
          n[13]
        ),
        Le(
          s,
          "invalid",
          /*onInvalid*/
          n[14]
        )
      ], R = !0);
    },
    p(a, y) {
      N && N.p && (!D || y[1] & /*$$scope*/
      16384) && Zt(
        N,
        J,
        a,
        /*$$scope*/
        a[45],
        D ? qt(
          J,
          /*$$scope*/
          a[45],
          y,
          null
        ) : Gt(
          /*$$scope*/
          a[45]
        ),
        null
      ), /*state*/
      a[7] === m.VERIFYING ? T || (T = ot(), T.c(), T.m(i, o)) : T && (T.d(1), T = null), (!D || y[0] & /*name*/
      16 && h !== (h = /*name*/
      a[4] + "_checkbox")) && c(s, "id", h), (!D || y[0] & /*auto, floating*/
      3 && d !== (d = /*auto*/
      a[0] !== "onsubmit" && (!/*floating*/
      a[1] || /*auto*/
      a[0] !== "off"))) && (s.required = d), y[0] & /*checked*/
      256 && (s.checked = /*checked*/
      a[8]), (!D || y[0] & /*state*/
      128) && rt(
        l,
        "altcha-hidden",
        /*state*/
        a[7] === m.VERIFYING
      ), G === (G = Q(a)) && V ? V.p(a, y) : (V.d(1), V = G(a), V && (V.c(), V.m(A, null))), /*hidelogo*/
      a[3] !== !0 || /*isFreeSaaS*/
      a[12] ? v ? v.p(a, y) : (v = lt(a), v.c(), v.m(i, null)) : v && (v.d(1), v = null), /*error*/
      a[5] || /*state*/
      a[7] === m.EXPIRED ? P ? P.p(a, y) : (P = st(a), P.c(), P.m(t, O)) : P && (P.d(1), P = null), /*_strings*/
      a[11].footer && /*hidefooter*/
      (a[2] !== !0 || /*isFreeSaaS*/
      a[12]) ? S ? S.p(a, y) : (S = ft(a), S.c(), S.m(t, U)) : S && (S.d(1), S = null), /*floating*/
      a[1] ? p ? p.p(a, y) : (p = ct(a), p.c(), p.m(t, null)) : p && (p.d(1), p = null), (!D || y[0] & /*state*/
      128) && c(
        t,
        "data-state",
        /*state*/
        a[7]
      ), (!D || y[0] & /*floating*/
      2) && c(
        t,
        "data-floating",
        /*floating*/
        a[1]
      );
    },
    i(a) {
      D || (yt(N, a), D = !0);
    },
    o(a) {
      on(N, a), D = !1;
    },
    d(a) {
      a && (j(e), j(t)), N && N.d(a), T && T.d(), V.d(), v && v.d(), P && P.d(), S && S.d(), p && p.d(), n[49](null), R = !1, Ee(X);
    }
  };
}
const ut = "Visit Altcha.org", pt = "https://altcha.org/";
function at(n) {
  return JSON.parse(n);
}
function An(n, e, t) {
  var Qe, et;
  let i, o, l, s, { $$slots: h = {}, $$scope: d } = e, { auto: u = void 0 } = e, { blockspam: A = void 0 } = e, { challengeurl: b = void 0 } = e, { challengejson: Y = void 0 } = e, { debug: O = !1 } = e, { delay: U = 0 } = e, { expire: D = void 0 } = e, { floating: R = void 0 } = e, { floatinganchor: X = void 0 } = e, { floatingoffset: J = void 0 } = e, { hidefooter: N = !1 } = e, { hidelogo: T = !1 } = e, { name: Q = "altcha" } = e, { maxnumber: G = 1e6 } = e, { mockerror: V = !1 } = e, { obfuscated: v = void 0 } = e, { plugins: P = void 0 } = e, { refetchonexpire: S = !0 } = e, { spamfilter: p = !1 } = e, { strings: a = void 0 } = e, { test: y = !1 } = e, { verifyurl: ee = void 0 } = e, { workers: le = Math.min(16, navigator.hardwareConcurrency || 8) } = e, { workerurl: ae = void 0 } = e;
  const he = Qt(), Pe = ["SHA-256", "SHA-384", "SHA-512"], Me = (et = (Qe = document.documentElement.lang) == null ? void 0 : Qe.split("-")) == null ? void 0 : et[0];
  let re = !1, x, ie = null, se = null, _ = null, de = null, W = null, oe = null, te = [], C = m.UNVERIFIED;
  Kt(() => {
    kt(), _ && (_.removeEventListener("submit", He), _.removeEventListener("reset", Oe), _.removeEventListener("focusin", $e), _ = null), W && (clearTimeout(W), W = null), document.removeEventListener("click", Ve), document.removeEventListener("scroll", je), window.removeEventListener("resize", Be);
  }), zt(() => {
    k("mounted", "1.0.1"), k("workers", le), It(), k("plugins", te.length ? te.map((r) => r.constructor.pluginName).join(", ") : "none"), y && k("using test mode"), D && ke(D), u !== void 0 && k("auto", u), R !== void 0 && qe(R), _ = x.closest("form"), _ && (_.addEventListener("submit", He, { capture: !0 }), _.addEventListener("reset", Oe), u === "onfocus" && _.addEventListener("focusin", $e)), u === "onload" && (v ? ge() : ne()), i && (N || T) && k("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      he("load");
    });
  });
  function Fe(r, f) {
    return btoa(JSON.stringify({
      algorithm: r.algorithm,
      challenge: r.challenge,
      number: f.number,
      salt: r.salt,
      signature: r.signature,
      test: y ? !0 : void 0,
      took: f.took
    }));
  }
  function kt() {
    for (const r of te)
      r.destroy();
  }
  function Ne() {
    b && S && C === m.VERIFIED ? ne() : me(m.EXPIRED, s.expired);
  }
  async function vt() {
    var r;
    if (V)
      throw k("mocking error"), new Error("Mocked error.");
    if (o)
      return k("using provided json data"), o;
    if (y)
      return k("generating test challenge", { test: y }), gn(typeof y != "boolean" ? +y : void 0);
    {
      if (!b && _) {
        const w = _.getAttribute("action");
        w != null && w.includes("/form/") && t(15, b = w + "/altcha");
      }
      if (!b)
        throw new Error("Attribute challengeurl not set.");
      k("fetching challenge from", b);
      const f = await fetch(b, {
        headers: p ? { "x-altcha-spam-filter": "1" } : {}
      });
      if (f.status !== 200)
        throw new Error(`Server responded with ${f.status}.`);
      const g = f.headers.get("Expires"), I = f.headers.get("X-Altcha-Config"), B = await f.json(), H = new URLSearchParams((r = B.salt.split("?")) == null ? void 0 : r[1]), M = H.get("expires") || H.get("expire");
      if (M) {
        const w = new Date(+M * 1e3), q = isNaN(w.getTime()) ? 0 : w.getTime() - Date.now();
        q > 0 && ke(q);
      }
      if (I)
        try {
          const w = JSON.parse(I);
          w && typeof w == "object" && (w.verifyurl && (w.verifyurl = new URL(w.verifyurl, new URL(b)).toString()), Ye(w));
        } catch (w) {
          k("unable to configure from X-Altcha-Config", w);
        }
      if (!D && (g != null && g.length)) {
        const w = Date.parse(g);
        if (w) {
          const q = w - Date.now();
          q > 0 && ke(q);
        }
      }
      return B;
    }
  }
  function xt(r) {
    var g;
    const f = _ == null ? void 0 : _.querySelector(typeof r == "string" ? `input[name="${r}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((g = f == null ? void 0 : f.value) == null ? void 0 : g.slice(f.value.indexOf("@"))) || void 0;
  }
  function Ct() {
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
  function At(r) {
    return [
      ...(_ == null ? void 0 : _.querySelectorAll(r != null && r.length ? r.map((g) => `input[name="${g}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (g, I) => {
        const B = I.name, H = I.value;
        return B && H && (g[B] = /\n/.test(H) ? H.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : H), g;
      },
      {}
    );
  }
  function It() {
    const r = P !== void 0 ? P.split(",") : void 0;
    for (const f of globalThis.altchaPlugins)
      (!r || r.includes(f.pluginName)) && te.push(new f({
        el: x,
        clarify: ge,
        dispatch: he,
        getConfiguration: We,
        getFloatingAnchor: Xe,
        getState: Je,
        log: k,
        reset: me,
        solve: Ge,
        setState: Ke,
        setFloatingAnchor: ze,
        verify: ne
      }));
  }
  function k(...r) {
    (O || r.some((f) => f instanceof Error)) && console[r[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${Q}]`, ...r);
  }
  function Lt() {
    [m.UNVERIFIED, m.ERROR, m.EXPIRED].includes(C) ? p && (_ == null ? void 0 : _.reportValidity()) === !1 ? t(8, re = !1) : v ? ge() : ne() : t(8, re = !0);
  }
  function Ve(r) {
    const f = r.target;
    R && f && !x.contains(f) && (C === m.VERIFIED || u === "off" && C === m.UNVERIFIED) && t(9, x.style.display = "none", x);
  }
  function je() {
    R && C !== m.UNVERIFIED && pe();
  }
  function Rt(r) {
    for (const f of te)
      typeof f.onErrorChange == "function" && f.onErrorChange(de);
  }
  function $e(r) {
    C === m.UNVERIFIED && ne();
  }
  function He(r) {
    _ && u === "onsubmit" ? C === m.UNVERIFIED ? (r.preventDefault(), r.stopPropagation(), ne().then(() => {
      _ == null || _.requestSubmit();
    })) : C !== m.VERIFIED && (r.preventDefault(), r.stopPropagation(), C === m.VERIFYING && Ue()) : _ && R && u === "off" && C === m.UNVERIFIED && (r.preventDefault(), r.stopPropagation(), t(9, x.style.display = "block", x), pe());
  }
  function Oe() {
    me();
  }
  function Ue() {
    C === m.VERIFYING && s.waitAlert && alert(s.waitAlert);
  }
  function St(r) {
    for (const f of te)
      typeof f.onStateChange == "function" && f.onStateChange(C);
    R && C !== m.UNVERIFIED && requestAnimationFrame(() => {
      pe();
    }), t(8, re = C === m.VERIFIED);
  }
  function Be() {
    R && pe();
  }
  function pe(r = 20) {
    if (x)
      if (se || (se = (X ? document.querySelector(X) : _ == null ? void 0 : _.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || _), se) {
        const f = parseInt(J, 10) || 12, g = se.getBoundingClientRect(), I = x.getBoundingClientRect(), B = document.documentElement.clientHeight, H = document.documentElement.clientWidth, M = R === "auto" ? g.bottom + I.height + f + r > B : R === "top", w = Math.max(r, Math.min(H - r - I.width, g.left + g.width / 2 - I.width / 2));
        if (M ? t(9, x.style.top = `${g.top - (I.height + f)}px`, x) : t(9, x.style.top = `${g.bottom + f}px`, x), t(9, x.style.left = `${w}px`, x), x.setAttribute("data-floating", M ? "top" : "bottom"), ie) {
          const q = ie.getBoundingClientRect();
          t(10, ie.style.left = g.left - w + g.width / 2 - q.width / 2 + "px", ie);
        }
      } else
        k("unable to find floating anchor element");
  }
  async function Dt(r) {
    if (!ee)
      throw new Error("Attribute verifyurl not set.");
    k("requesting server verification from", ee);
    const f = { payload: r };
    if (p) {
      const { blockedCountries: B, classifier: H, disableRules: M, email: w, expectedLanguages: q, expectedCountries: Ie, fields: be, ipAddress: ye, text: Vt, timeZone: tt } = Ct();
      f.blockedCountries = B, f.classifier = H, f.disableRules = M, f.email = w === !1 ? void 0 : xt(w), f.expectedCountries = Ie, f.expectedLanguages = q || (Me ? [Me] : void 0), f.fields = be === !1 ? void 0 : At(be), f.ipAddress = ye === !1 ? void 0 : ye || "auto", f.text = Vt, f.timeZone = tt === !1 ? void 0 : tt || bn();
    }
    const g = await fetch(ee, {
      body: JSON.stringify(f),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (g.status !== 200)
      throw new Error(`Server responded with ${g.status}.`);
    const I = await g.json();
    if (I != null && I.payload && t(6, oe = I.payload), he("serververification", I), A && I.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  function ke(r) {
    k("expire", r), W && (clearTimeout(W), W = null), r < 1 ? Ne() : W = setTimeout(Ne, r);
  }
  function qe(r) {
    k("floating", r), R !== r && (t(9, x.style.left = "", x), t(9, x.style.top = "", x)), t(1, R = r === !0 || r === "" ? "auto" : r === !1 || r === "false" ? void 0 : R), R ? (u || t(0, u = "onsubmit"), document.addEventListener("scroll", je), document.addEventListener("click", Ve), window.addEventListener("resize", Be)) : u === "onsubmit" && t(0, u = void 0);
  }
  function Ze(r) {
    if (!r.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (r.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!Pe.includes(r.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${Pe.join(", ")}`);
    if (!r.challenge || r.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!r.salt || r.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function Ge(r) {
    let f = null;
    if ("Worker" in window) {
      try {
        f = await Tt(r, r.maxnumber);
      } catch (g) {
        k(g);
      }
      if ((f == null ? void 0 : f.number) !== void 0 || "obfuscated" in r)
        return { data: r, solution: f };
    }
    if ("obfuscated" in r) {
      const g = await wn(r.obfuscated, r.key, r.maxnumber);
      return { data: r, solution: await g.promise };
    }
    return {
      data: r,
      solution: await mn(r.challenge, r.salt, r.algorithm, r.maxnumber || G).promise
    };
  }
  async function Tt(r, f = typeof y == "number" ? y : G, g = Math.ceil(le)) {
    const I = [];
    g = Math.min(16, Math.max(1, g));
    for (let M = 0; M < g; M++)
      I.push(altchaCreateWorker(ae));
    const B = Math.ceil(f / g), H = await Promise.all(I.map((M, w) => {
      const q = w * B;
      return new Promise((Ie) => {
        M.addEventListener("message", (be) => {
          if (be.data)
            for (const ye of I)
              ye !== M && ye.postMessage({ type: "abort" });
          Ie(be.data);
        }), M.postMessage({
          payload: r,
          max: q + B,
          start: q,
          type: "work"
        });
      });
    }));
    for (const M of I)
      M.terminate();
    return H.find((M) => !!M) || null;
  }
  async function ge() {
    if (!v) {
      t(7, C = m.ERROR);
      return;
    }
    const r = te.find((f) => f.constructor.pluginName === "obfuscation");
    if (!r || !("clarify" in r)) {
      t(7, C = m.ERROR), k("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in r && typeof r.clarify == "function")
      return r.clarify();
  }
  function Ye(r) {
    r.obfuscated !== void 0 && t(24, v = r.obfuscated), r.auto !== void 0 && (t(0, u = r.auto), u === "onload" && (v ? ge() : ne())), r.blockspam !== void 0 && t(16, A = !!r.blockspam), r.floatinganchor !== void 0 && t(20, X = r.floatinganchor), r.delay !== void 0 && t(18, U = r.delay), r.floatingoffset !== void 0 && t(21, J = r.floatingoffset), r.floating !== void 0 && qe(r.floating), r.expire !== void 0 && (ke(r.expire), t(19, D = r.expire)), r.challenge && (Ze(r.challenge), o = r.challenge), r.challengeurl !== void 0 && t(15, b = r.challengeurl), r.debug !== void 0 && t(17, O = !!r.debug), r.hidefooter !== void 0 && t(2, N = !!r.hidefooter), r.hidelogo !== void 0 && t(3, T = !!r.hidelogo), r.maxnumber !== void 0 && t(22, G = +r.maxnumber), r.mockerror !== void 0 && t(23, V = !!r.mockerror), r.name !== void 0 && t(4, Q = r.name), r.refetchonexpire !== void 0 && t(25, S = !!r.refetchonexpire), r.spamfilter !== void 0 && t(26, p = typeof r.spamfilter == "object" ? r.spamfilter : !!r.spamfilter), r.strings && t(44, l = r.strings), r.test !== void 0 && t(27, y = typeof r.test == "number" ? r.test : !!r.test), r.verifyurl !== void 0 && t(28, ee = r.verifyurl), r.workers !== void 0 && t(29, le = +r.workers), r.workerurl !== void 0 && t(30, ae = r.workerurl);
  }
  function We() {
    return {
      auto: u,
      blockspam: A,
      challengeurl: b,
      debug: O,
      delay: U,
      expire: D,
      floating: R,
      floatinganchor: X,
      floatingoffset: J,
      hidefooter: N,
      hidelogo: T,
      name: Q,
      maxnumber: G,
      mockerror: V,
      obfuscated: v,
      refetchonexpire: S,
      spamfilter: p,
      strings: s,
      test: y,
      verifyurl: ee,
      workers: le,
      workerurl: ae
    };
  }
  function Xe() {
    return se;
  }
  function Pt(r) {
    return te.find((f) => f.constructor.pluginName === r);
  }
  function Je() {
    return C;
  }
  function me(r = m.UNVERIFIED, f = null) {
    W && (clearTimeout(W), W = null), t(8, re = !1), t(5, de = f), t(6, oe = null), t(7, C = r);
  }
  function ze(r) {
    se = r;
  }
  function Ke(r, f = null) {
    t(7, C = r), t(5, de = f);
  }
  async function ne() {
    return me(m.VERIFYING), await new Promise((r) => setTimeout(r, U || 0)), vt().then((r) => (Ze(r), k("challenge", r), Ge(r))).then(({ data: r, solution: f }) => {
      if (k("solution", f), "challenge" in r && f && !("clearText" in f))
        if ((f == null ? void 0 : f.number) !== void 0) {
          if (ee)
            return Dt(Fe(r, f));
          t(6, oe = Fe(r, f)), k("payload", oe);
        } else
          throw k("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      en().then(() => {
        t(7, C = m.VERIFIED), k("verified"), he("verified", { payload: oe });
      });
    }).catch((r) => {
      k(r), t(7, C = m.ERROR), t(5, de = r.message);
    });
  }
  function Mt() {
    re = this.checked, t(8, re);
  }
  function Ft(r) {
    Ae[r ? "unshift" : "push"](() => {
      ie = r, t(10, ie);
    });
  }
  function Nt(r) {
    Ae[r ? "unshift" : "push"](() => {
      x = r, t(9, x);
    });
  }
  return n.$$set = (r) => {
    "auto" in r && t(0, u = r.auto), "blockspam" in r && t(16, A = r.blockspam), "challengeurl" in r && t(15, b = r.challengeurl), "challengejson" in r && t(31, Y = r.challengejson), "debug" in r && t(17, O = r.debug), "delay" in r && t(18, U = r.delay), "expire" in r && t(19, D = r.expire), "floating" in r && t(1, R = r.floating), "floatinganchor" in r && t(20, X = r.floatinganchor), "floatingoffset" in r && t(21, J = r.floatingoffset), "hidefooter" in r && t(2, N = r.hidefooter), "hidelogo" in r && t(3, T = r.hidelogo), "name" in r && t(4, Q = r.name), "maxnumber" in r && t(22, G = r.maxnumber), "mockerror" in r && t(23, V = r.mockerror), "obfuscated" in r && t(24, v = r.obfuscated), "plugins" in r && t(32, P = r.plugins), "refetchonexpire" in r && t(25, S = r.refetchonexpire), "spamfilter" in r && t(26, p = r.spamfilter), "strings" in r && t(33, a = r.strings), "test" in r && t(27, y = r.test), "verifyurl" in r && t(28, ee = r.verifyurl), "workers" in r && t(29, le = r.workers), "workerurl" in r && t(30, ae = r.workerurl), "$$scope" in r && t(45, d = r.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*challengeurl*/
    32768 && t(12, i = !!(b != null && b.includes(".altcha.org")) && !!(b != null && b.includes("apiKey=ckey_"))), n.$$.dirty[1] & /*challengejson*/
    1 && (o = Y ? at(Y) : void 0), n.$$.dirty[1] & /*strings*/
    4 && t(44, l = a ? at(a) : {}), n.$$.dirty[1] & /*parsedStrings*/
    8192 && t(11, s = {
      ariaLinkLabel: ut,
      error: "Verification failed. Try again later.",
      expired: "Verification expired. Try again.",
      footer: `Protected by <a href="${pt}" target="_blank" aria-label="${l.ariaLinkLabel || ut}">ALTCHA</a>`,
      label: "I'm not a robot",
      verified: "Verified",
      verifying: "Verifying...",
      waitAlert: "Verifying... please wait.",
      ...l
    }), n.$$.dirty[0] & /*payload, state*/
    192 && he("statechange", { payload: oe, state: C }), n.$$.dirty[0] & /*error*/
    32 && Rt(), n.$$.dirty[0] & /*state*/
    128 && St();
  }, [
    u,
    R,
    N,
    T,
    Q,
    de,
    oe,
    C,
    re,
    x,
    ie,
    s,
    i,
    Lt,
    Ue,
    b,
    A,
    O,
    U,
    D,
    X,
    J,
    G,
    V,
    v,
    S,
    p,
    y,
    ee,
    le,
    ae,
    Y,
    P,
    a,
    ge,
    Ye,
    We,
    Xe,
    Pt,
    Je,
    me,
    ze,
    Ke,
    ne,
    l,
    d,
    h,
    Mt,
    Ft,
    Nt
  ];
}
class In extends an {
  constructor(e) {
    super(), cn(
      this,
      e,
      An,
      Cn,
      Ot,
      {
        auto: 0,
        blockspam: 16,
        challengeurl: 15,
        challengejson: 31,
        debug: 17,
        delay: 18,
        expire: 19,
        floating: 1,
        floatinganchor: 20,
        floatingoffset: 21,
        hidefooter: 2,
        hidelogo: 3,
        name: 4,
        maxnumber: 22,
        mockerror: 23,
        obfuscated: 24,
        plugins: 32,
        refetchonexpire: 25,
        spamfilter: 26,
        strings: 33,
        test: 27,
        verifyurl: 28,
        workers: 29,
        workerurl: 30,
        clarify: 34,
        configure: 35,
        getConfiguration: 36,
        getFloatingAnchor: 37,
        getPlugin: 38,
        getState: 39,
        reset: 40,
        setFloatingAnchor: 41,
        setState: 42,
        verify: 43
      },
      null,
      [-1, -1, -1]
    );
  }
  get auto() {
    return this.$$.ctx[0];
  }
  set auto(e) {
    this.$$set({ auto: e }), E();
  }
  get blockspam() {
    return this.$$.ctx[16];
  }
  set blockspam(e) {
    this.$$set({ blockspam: e }), E();
  }
  get challengeurl() {
    return this.$$.ctx[15];
  }
  set challengeurl(e) {
    this.$$set({ challengeurl: e }), E();
  }
  get challengejson() {
    return this.$$.ctx[31];
  }
  set challengejson(e) {
    this.$$set({ challengejson: e }), E();
  }
  get debug() {
    return this.$$.ctx[17];
  }
  set debug(e) {
    this.$$set({ debug: e }), E();
  }
  get delay() {
    return this.$$.ctx[18];
  }
  set delay(e) {
    this.$$set({ delay: e }), E();
  }
  get expire() {
    return this.$$.ctx[19];
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
    return this.$$.ctx[20];
  }
  set floatinganchor(e) {
    this.$$set({ floatinganchor: e }), E();
  }
  get floatingoffset() {
    return this.$$.ctx[21];
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
    return this.$$.ctx[22];
  }
  set maxnumber(e) {
    this.$$set({ maxnumber: e }), E();
  }
  get mockerror() {
    return this.$$.ctx[23];
  }
  set mockerror(e) {
    this.$$set({ mockerror: e }), E();
  }
  get obfuscated() {
    return this.$$.ctx[24];
  }
  set obfuscated(e) {
    this.$$set({ obfuscated: e }), E();
  }
  get plugins() {
    return this.$$.ctx[32];
  }
  set plugins(e) {
    this.$$set({ plugins: e }), E();
  }
  get refetchonexpire() {
    return this.$$.ctx[25];
  }
  set refetchonexpire(e) {
    this.$$set({ refetchonexpire: e }), E();
  }
  get spamfilter() {
    return this.$$.ctx[26];
  }
  set spamfilter(e) {
    this.$$set({ spamfilter: e }), E();
  }
  get strings() {
    return this.$$.ctx[33];
  }
  set strings(e) {
    this.$$set({ strings: e }), E();
  }
  get test() {
    return this.$$.ctx[27];
  }
  set test(e) {
    this.$$set({ test: e }), E();
  }
  get verifyurl() {
    return this.$$.ctx[28];
  }
  set verifyurl(e) {
    this.$$set({ verifyurl: e }), E();
  }
  get workers() {
    return this.$$.ctx[29];
  }
  set workers(e) {
    this.$$set({ workers: e }), E();
  }
  get workerurl() {
    return this.$$.ctx[30];
  }
  set workerurl(e) {
    this.$$set({ workerurl: e }), E();
  }
  get clarify() {
    return this.$$.ctx[34];
  }
  get configure() {
    return this.$$.ctx[35];
  }
  get getConfiguration() {
    return this.$$.ctx[36];
  }
  get getFloatingAnchor() {
    return this.$$.ctx[37];
  }
  get getPlugin() {
    return this.$$.ctx[38];
  }
  get getState() {
    return this.$$.ctx[39];
  }
  get reset() {
    return this.$$.ctx[40];
  }
  get setFloatingAnchor() {
    return this.$$.ctx[41];
  }
  get setState() {
    return this.$$.ctx[42];
  }
  get verify() {
    return this.$$.ctx[43];
  }
}
customElements.define("altcha-widget", un(
  In,
  { auto: {}, blockspam: {}, challengeurl: {}, challengejson: {}, debug: { type: "Boolean" }, delay: {}, expire: {}, floating: {}, floatinganchor: {}, floatingoffset: {}, hidefooter: { type: "Boolean" }, hidelogo: { type: "Boolean" }, name: {}, maxnumber: {}, mockerror: { type: "Boolean" }, obfuscated: {}, plugins: {}, refetchonexpire: { type: "Boolean" }, spamfilter: { type: "Boolean" }, strings: {}, test: { type: "Boolean" }, verifyurl: {}, workers: {}, workerurl: {} },
  ["default"],
  [
    "clarify",
    "configure",
    "getConfiguration",
    "getFloatingAnchor",
    "getPlugin",
    "getState",
    "reset",
    "setFloatingAnchor",
    "setState",
    "verify"
  ],
  !1
));
globalThis.altchaCreateWorker = (n) => new Worker(new URL(n || "./worker.js", import.meta.url));
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
export {
  In as Altcha
};
