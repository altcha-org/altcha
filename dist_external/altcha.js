var wt = Object.defineProperty;
var _t = (n, e, t) => e in n ? wt(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var B = (n, e, t) => _t(n, typeof e != "symbol" ? e + "" : e, t);
function re() {
}
function Ke(n) {
  return n();
}
function Be() {
  return /* @__PURE__ */ Object.create(null);
}
function se(n) {
  n.forEach(Ke);
}
function Qe(n) {
  return typeof n == "function";
}
function yt(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function kt(n) {
  return Object.keys(n).length === 0;
}
function p(n, e) {
  n.appendChild(e);
}
function P(n, e, t) {
  n.insertBefore(e, t || null);
}
function N(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function $(n) {
  return document.createElement(n);
}
function Z(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function Et(n) {
  return document.createTextNode(n);
}
function W() {
  return Et(" ");
}
function _e(n, e, t, i) {
  return n.addEventListener(e, t, i), () => n.removeEventListener(e, t, i);
}
function f(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
function vt(n) {
  return Array.from(n.childNodes);
}
function Ue(n, e, t) {
  n.classList.toggle(e, !!t);
}
function pt(n, e, { bubbles: t = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(n, { detail: e, bubbles: t, cancelable: i });
}
function xt(n) {
  const e = {};
  return n.childNodes.forEach(
    /** @param {Element} node */
    (t) => {
      e[t.slot || "default"] = !0;
    }
  ), e;
}
let le;
function oe(n) {
  le = n;
}
function ve() {
  if (!le) throw new Error("Function called outside component initialization");
  return le;
}
function Ct(n) {
  ve().$$.on_mount.push(n);
}
function Lt(n) {
  ve().$$.on_destroy.push(n);
}
function It() {
  const n = ve();
  return (e, t, { cancelable: i = !1 } = {}) => {
    const l = n.$$.callbacks[e];
    if (l) {
      const o = pt(
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
const te = [], de = [];
let ne = [];
const qe = [], et = /* @__PURE__ */ Promise.resolve();
let ke = !1;
function tt() {
  ke || (ke = !0, et.then(w));
}
function At() {
  return tt(), et;
}
function Ee(n) {
  ne.push(n);
}
const ye = /* @__PURE__ */ new Set();
let ee = 0;
function w() {
  if (ee !== 0)
    return;
  const n = le;
  do {
    try {
      for (; ee < te.length; ) {
        const e = te[ee];
        ee++, oe(e), Rt(e.$$);
      }
    } catch (e) {
      throw te.length = 0, ee = 0, e;
    }
    for (oe(null), te.length = 0, ee = 0; de.length; ) de.pop()();
    for (let e = 0; e < ne.length; e += 1) {
      const t = ne[e];
      ye.has(t) || (ye.add(t), t());
    }
    ne.length = 0;
  } while (te.length);
  for (; qe.length; )
    qe.pop()();
  ke = !1, ye.clear(), oe(n);
}
function Rt(n) {
  if (n.fragment !== null) {
    n.update(), se(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(Ee);
  }
}
function $t(n) {
  const e = [], t = [];
  ne.forEach((i) => n.indexOf(i) === -1 ? e.push(i) : t.push(i)), t.forEach((i) => i()), ne = e;
}
const Mt = /* @__PURE__ */ new Set();
function Tt(n, e) {
  n && n.i && (Mt.delete(n), n.i(e));
}
function St(n, e, t) {
  const { fragment: i, after_update: l } = n.$$;
  i && i.m(e, t), Ee(() => {
    const o = n.$$.on_mount.map(Ke).filter(Qe);
    n.$$.on_destroy ? n.$$.on_destroy.push(...o) : se(o), n.$$.on_mount = [];
  }), l.forEach(Ee);
}
function Dt(n, e) {
  const t = n.$$;
  t.fragment !== null && ($t(t.after_update), se(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Nt(n, e) {
  n.$$.dirty[0] === -1 && (te.push(n), tt(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function jt(n, e, t, i, l, o, s = null, a = [-1]) {
  const c = le;
  oe(n);
  const h = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: re,
    not_equal: l,
    bound: Be(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (c ? c.$$.context : [])),
    // everything else
    callbacks: Be(),
    dirty: a,
    skip_bound: !1,
    root: e.target || c.$$.root
  };
  s && s(h.root);
  let H = !1;
  if (h.ctx = t ? t(n, e.props || {}, (T, F, ...E) => {
    const O = E.length ? E[0] : F;
    return h.ctx && l(h.ctx[T], h.ctx[T] = O) && (!h.skip_bound && h.bound[T] && h.bound[T](O), H && Nt(n, T)), F;
  }) : [], h.update(), H = !0, se(h.before_update), h.fragment = i ? i(h.ctx) : !1, e.target) {
    if (e.hydrate) {
      const T = vt(e.target);
      h.fragment && h.fragment.l(T), T.forEach(N);
    } else
      h.fragment && h.fragment.c();
    e.intro && Tt(n.$$.fragment), St(n, e.target, e.anchor), w();
  }
  oe(c);
}
let nt;
typeof HTMLElement == "function" && (nt = class extends HTMLElement {
  constructor(e, t, i) {
    super();
    /** The Svelte component constructor */
    B(this, "$$ctor");
    /** Slots */
    B(this, "$$s");
    /** The Svelte component instance */
    B(this, "$$c");
    /** Whether or not the custom element is connected */
    B(this, "$$cn", !1);
    /** Component props data */
    B(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    B(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    B(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    B(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    B(this, "$$l_u", /* @__PURE__ */ new Map());
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
              s = $("slot"), o !== "default" && f(s, "name", o);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(h, H) {
              P(h, s, H);
            },
            d: function(h) {
              h && N(s);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, i = xt(this);
      for (const o of this.$$s)
        o in i && (t[o] = [e(o)]);
      for (const o of this.attributes) {
        const s = this.$$g_p(o.name);
        s in this.$$d || (this.$$d[s] = he(s, o.value, this.$$p_d, "toProp"));
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
            const s = he(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = he(e, i, this.$$p_d, "toProp"), (l = this.$$c) == null || l.$set({ [e]: this.$$d[e] }));
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
function he(n, e, t, i) {
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
function Vt(n, e, t, i, l, o) {
  let s = class extends nt {
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
      set(c) {
        var h;
        c = he(a, c, e), this.$$d[a] = c, (h = this.$$c) == null || h.$set({ [a]: c });
      }
    });
  }), i.forEach((a) => {
    Object.defineProperty(s.prototype, a, {
      get() {
        var c;
        return (c = this.$$c) == null ? void 0 : c[a];
      }
    });
  }), o && (s = o(s)), n.element = /** @type {any} */
  s, s;
}
class Pt {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    B(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    B(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Dt(this, 1), this.$destroy = re;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!Qe(t))
      return re;
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
    this.$$set && !kt(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Ft = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Ft);
const Ht = new TextEncoder();
function Ot(n) {
  return [...new Uint8Array(n)].map((e) => e.toString(16).padStart(2, "0")).join("");
}
async function Bt(n, e = "SHA-256", t = 1e5) {
  const i = Date.now().toString(16);
  n || (n = Math.round(Math.random() * t));
  const l = await rt(i, n, e);
  return {
    algorithm: e,
    challenge: l,
    salt: i,
    signature: ""
  };
}
async function rt(n, e, t) {
  return Ot(
    await crypto.subtle.digest(
      t.toUpperCase(),
      Ht.encode(n + e)
    )
  );
}
function Ut(n, e, t = "SHA-256", i = 1e6, l = 0) {
  const o = new AbortController(), s = Date.now();
  return {
    promise: (async () => {
      for (let c = l; c <= i; c += 1) {
        if (o.signal.aborted)
          return null;
        if (await rt(e, c, t) === n)
          return {
            number: c,
            took: Date.now() - s
          };
      }
      return null;
    })(),
    controller: o
  };
}
var b = /* @__PURE__ */ ((n) => (n.ERROR = "error", n.VERIFIED = "verified", n.VERIFYING = "verifying", n.UNVERIFIED = "unverified", n.EXPIRED = "expired", n))(b || {});
function Ze(n) {
  let e, t, i;
  return {
    c() {
      e = Z("svg"), t = Z("path"), i = Z("path"), f(t, "d", "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"), f(t, "fill", "currentColor"), f(t, "opacity", ".25"), f(i, "d", "M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"), f(i, "fill", "currentColor"), f(i, "class", "altcha-spinner"), f(e, "width", "24"), f(e, "height", "24"), f(e, "viewBox", "0 0 24 24"), f(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(l, o) {
      P(l, e, o), p(e, t), p(e, i);
    },
    d(l) {
      l && N(e);
    }
  };
}
function qt(n) {
  let e, t = (
    /*_strings*/
    n[11].label + ""
  ), i;
  return {
    c() {
      e = $("label"), f(e, "for", i = /*name*/
      n[4] + "_checkbox");
    },
    m(l, o) {
      P(l, e, o), e.innerHTML = t;
    },
    p(l, o) {
      o[0] & /*_strings*/
      2048 && t !== (t = /*_strings*/
      l[11].label + "") && (e.innerHTML = t), o[0] & /*name*/
      16 && i !== (i = /*name*/
      l[4] + "_checkbox") && f(e, "for", i);
    },
    d(l) {
      l && N(e);
    }
  };
}
function Zt(n) {
  let e, t = (
    /*_strings*/
    n[11].verifying + ""
  );
  return {
    c() {
      e = $("span");
    },
    m(i, l) {
      P(i, e, l), e.innerHTML = t;
    },
    p(i, l) {
      l[0] & /*_strings*/
      2048 && t !== (t = /*_strings*/
      i[11].verifying + "") && (e.innerHTML = t);
    },
    d(i) {
      i && N(e);
    }
  };
}
function Yt(n) {
  let e, t = (
    /*_strings*/
    n[11].verified + ""
  ), i, l;
  return {
    c() {
      e = $("span"), i = W(), l = $("input"), f(l, "type", "hidden"), f(
        l,
        "name",
        /*name*/
        n[4]
      ), l.value = /*payload*/
      n[5];
    },
    m(o, s) {
      P(o, e, s), e.innerHTML = t, P(o, i, s), P(o, l, s);
    },
    p(o, s) {
      s[0] & /*_strings*/
      2048 && t !== (t = /*_strings*/
      o[11].verified + "") && (e.innerHTML = t), s[0] & /*name*/
      16 && f(
        l,
        "name",
        /*name*/
        o[4]
      ), s[0] & /*payload*/
      32 && (l.value = /*payload*/
      o[5]);
    },
    d(o) {
      o && (N(e), N(i), N(l));
    }
  };
}
function Ye(n) {
  let e, t, i, l, o, s, a;
  return {
    c() {
      e = $("div"), t = $("a"), i = Z("svg"), l = Z("path"), o = Z("path"), s = Z("path"), f(l, "d", "M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z"), f(l, "fill", "currentColor"), f(o, "d", "M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z"), f(o, "fill", "currentColor"), f(s, "d", "M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z"), f(s, "fill", "currentColor"), f(i, "width", "22"), f(i, "height", "22"), f(i, "viewBox", "0 0 20 20"), f(i, "fill", "none"), f(i, "xmlns", "http://www.w3.org/2000/svg"), f(t, "href", it), f(t, "target", "_blank"), f(t, "class", "altcha-logo"), f(t, "aria-label", a = /*_strings*/
      n[11].ariaLinkLabel);
    },
    m(c, h) {
      P(c, e, h), p(e, t), p(t, i), p(i, l), p(i, o), p(i, s);
    },
    p(c, h) {
      h[0] & /*_strings*/
      2048 && a !== (a = /*_strings*/
      c[11].ariaLinkLabel) && f(t, "aria-label", a);
    },
    d(c) {
      c && N(e);
    }
  };
}
function Ge(n) {
  let e, t, i, l;
  function o(c, h) {
    return (
      /*state*/
      c[6] === b.EXPIRED ? Wt : Gt
    );
  }
  let s = o(n), a = s(n);
  return {
    c() {
      e = $("div"), t = Z("svg"), i = Z("path"), l = W(), a.c(), f(i, "stroke-linecap", "round"), f(i, "stroke-linejoin", "round"), f(i, "d", "M6 18L18 6M6 6l12 12"), f(t, "width", "14"), f(t, "height", "14"), f(t, "xmlns", "http://www.w3.org/2000/svg"), f(t, "fill", "none"), f(t, "viewBox", "0 0 24 24"), f(t, "stroke-width", "1.5"), f(t, "stroke", "currentColor"), f(e, "class", "altcha-error");
    },
    m(c, h) {
      P(c, e, h), p(e, t), p(t, i), p(e, l), a.m(e, null);
    },
    p(c, h) {
      s === (s = o(c)) && a ? a.p(c, h) : (a.d(1), a = s(c), a && (a.c(), a.m(e, null)));
    },
    d(c) {
      c && N(e), a.d();
    }
  };
}
function Gt(n) {
  let e, t = (
    /*_strings*/
    n[11].error + ""
  );
  return {
    c() {
      e = $("div"), f(
        e,
        "title",
        /*error*/
        n[10]
      );
    },
    m(i, l) {
      P(i, e, l), e.innerHTML = t;
    },
    p(i, l) {
      l[0] & /*_strings*/
      2048 && t !== (t = /*_strings*/
      i[11].error + "") && (e.innerHTML = t), l[0] & /*error*/
      1024 && f(
        e,
        "title",
        /*error*/
        i[10]
      );
    },
    d(i) {
      i && N(e);
    }
  };
}
function Wt(n) {
  let e, t = (
    /*_strings*/
    n[11].expired + ""
  );
  return {
    c() {
      e = $("div"), f(
        e,
        "title",
        /*error*/
        n[10]
      );
    },
    m(i, l) {
      P(i, e, l), e.innerHTML = t;
    },
    p(i, l) {
      l[0] & /*_strings*/
      2048 && t !== (t = /*_strings*/
      i[11].expired + "") && (e.innerHTML = t), l[0] & /*error*/
      1024 && f(
        e,
        "title",
        /*error*/
        i[10]
      );
    },
    d(i) {
      i && N(e);
    }
  };
}
function We(n) {
  let e, t, i = (
    /*_strings*/
    n[11].footer + ""
  );
  return {
    c() {
      e = $("div"), t = $("div"), f(e, "class", "altcha-footer");
    },
    m(l, o) {
      P(l, e, o), p(e, t), t.innerHTML = i;
    },
    p(l, o) {
      o[0] & /*_strings*/
      2048 && i !== (i = /*_strings*/
      l[11].footer + "") && (t.innerHTML = i);
    },
    d(l) {
      l && N(e);
    }
  };
}
function Xe(n) {
  let e;
  return {
    c() {
      e = $("div"), f(e, "class", "altcha-anchor-arrow");
    },
    m(t, i) {
      P(t, e, i), n[36](e);
    },
    p: re,
    d(t) {
      t && N(e), n[36](null);
    }
  };
}
function Xt(n) {
  let e, t, i, l, o, s, a, c, h, H, T, F, E, O, X, M = (
    /*state*/
    n[6] === b.VERIFYING && Ze()
  );
  function Q(d, y) {
    return (
      /*state*/
      d[6] === b.VERIFIED ? Yt : (
        /*state*/
        d[6] === b.VERIFYING ? Zt : qt
      )
    );
  }
  let Y = Q(n), S = Y(n), L = (
    /*hidelogo*/
    n[3] !== !0 && Ye(n)
  ), I = (
    /*error*/
    (n[10] || /*state*/
    n[6] === b.EXPIRED) && Ge(n)
  ), _ = (
    /*_strings*/
    n[11].footer && /*hidefooter*/
    n[2] !== !0 && We(n)
  ), A = (
    /*floating*/
    n[1] && Xe(n)
  );
  return {
    c() {
      e = $("div"), t = $("div"), M && M.c(), i = W(), l = $("div"), o = $("input"), c = W(), h = $("div"), S.c(), H = W(), L && L.c(), T = W(), I && I.c(), F = W(), _ && _.c(), E = W(), A && A.c(), f(o, "type", "checkbox"), f(o, "id", s = /*name*/
      n[4] + "_checkbox"), o.required = a = /*auto*/
      n[0] !== "onsubmit", f(l, "class", "altcha-checkbox"), Ue(
        l,
        "altcha-hidden",
        /*state*/
        n[6] === b.VERIFYING
      ), f(h, "class", "altcha-label"), f(t, "class", "altcha-main"), f(e, "class", "altcha"), f(
        e,
        "data-state",
        /*state*/
        n[6]
      ), f(
        e,
        "data-floating",
        /*floating*/
        n[1]
      );
    },
    m(d, y) {
      P(d, e, y), p(e, t), M && M.m(t, null), p(t, i), p(t, l), p(l, o), o.checked = /*checked*/
      n[7], p(t, c), p(t, h), S.m(h, null), p(t, H), L && L.m(t, null), p(e, T), I && I.m(e, null), p(e, F), _ && _.m(e, null), p(e, E), A && A.m(e, null), n[37](e), O || (X = [
        _e(
          o,
          "change",
          /*input_change_handler*/
          n[35]
        ),
        _e(
          o,
          "change",
          /*onCheckedChange*/
          n[12]
        ),
        _e(
          o,
          "invalid",
          /*onInvalid*/
          n[13]
        )
      ], O = !0);
    },
    p(d, y) {
      /*state*/
      d[6] === b.VERIFYING ? M || (M = Ze(), M.c(), M.m(t, i)) : M && (M.d(1), M = null), y[0] & /*name*/
      16 && s !== (s = /*name*/
      d[4] + "_checkbox") && f(o, "id", s), y[0] & /*auto*/
      1 && a !== (a = /*auto*/
      d[0] !== "onsubmit") && (o.required = a), y[0] & /*checked*/
      128 && (o.checked = /*checked*/
      d[7]), y[0] & /*state*/
      64 && Ue(
        l,
        "altcha-hidden",
        /*state*/
        d[6] === b.VERIFYING
      ), Y === (Y = Q(d)) && S ? S.p(d, y) : (S.d(1), S = Y(d), S && (S.c(), S.m(h, null))), /*hidelogo*/
      d[3] !== !0 ? L ? L.p(d, y) : (L = Ye(d), L.c(), L.m(t, null)) : L && (L.d(1), L = null), /*error*/
      d[10] || /*state*/
      d[6] === b.EXPIRED ? I ? I.p(d, y) : (I = Ge(d), I.c(), I.m(e, F)) : I && (I.d(1), I = null), /*_strings*/
      d[11].footer && /*hidefooter*/
      d[2] !== !0 ? _ ? _.p(d, y) : (_ = We(d), _.c(), _.m(e, E)) : _ && (_.d(1), _ = null), /*floating*/
      d[1] ? A ? A.p(d, y) : (A = Xe(d), A.c(), A.m(e, null)) : A && (A.d(1), A = null), y[0] & /*state*/
      64 && f(
        e,
        "data-state",
        /*state*/
        d[6]
      ), y[0] & /*floating*/
      2 && f(
        e,
        "data-floating",
        /*floating*/
        d[1]
      );
    },
    i: re,
    o: re,
    d(d) {
      d && N(e), M && M.d(), S.d(), L && L.d(), I && I.d(), _ && _.d(), A && A.d(), n[37](null), O = !1, se(X);
    }
  };
}
const Je = "Visit Altcha.org", it = "https://altcha.org/";
function ze(n) {
  return JSON.parse(n);
}
function Jt() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function zt(n, e, t) {
  var Ve, Pe;
  let i, l, o, { auto: s = void 0 } = e, { blockspam: a = void 0 } = e, { challengeurl: c = void 0 } = e, { challengejson: h = void 0 } = e, { debug: H = !1 } = e, { delay: T = 0 } = e, { expire: F = void 0 } = e, { floating: E = void 0 } = e, { floatinganchor: O = void 0 } = e, { floatingoffset: X = void 0 } = e, { hidefooter: M = !1 } = e, { hidelogo: Q = !1 } = e, { name: Y = "altcha" } = e, { maxnumber: S = 1e6 } = e, { mockerror: L = !1 } = e, { refetchonexpire: I = !0 } = e, { spamfilter: _ = !1 } = e, { strings: A = void 0 } = e, { test: d = !1 } = e, { verifyurl: y = void 0 } = e, { workers: ie = Math.min(16, navigator.hardwareConcurrency || 8) } = e, { workerurl: ge = void 0 } = e;
  const me = It(), pe = ["SHA-256", "SHA-384", "SHA-512"], xe = (Pe = (Ve = document.documentElement.lang) == null ? void 0 : Ve.split("-")) == null ? void 0 : Pe[0];
  let G = !1, x, J = null, fe = null, m = null, be = null, z = null, j = b.UNVERIFIED, U = null;
  Lt(() => {
    m && (m.removeEventListener("submit", Le), m.removeEventListener("reset", Ie), m.removeEventListener("focusin", Ce), m = null), U && (clearTimeout(U), U = null), document.removeEventListener("click", Me), document.removeEventListener("scroll", Te), window.removeEventListener("resize", De);
  }), Ct(() => {
    C("mounted", "0.6.1"), C("workers", ie), d && C("using test mode"), F && ce(F), s !== void 0 && C("auto", s), E !== void 0 && Ne(E), m = x.closest("form"), m && (m.addEventListener("submit", Le, { capture: !0 }), m.addEventListener("reset", Ie), s === "onfocus" && m.addEventListener("focusin", Ce)), s === "onload" && K();
  });
  function C(...r) {
    (H || r.some((u) => u instanceof Error)) && console[r[0] instanceof Error ? "error" : "log"]("ALTCHA", ...r);
  }
  function Ce(r) {
    j === b.UNVERIFIED && K();
  }
  function Le(r) {
    m && s === "onsubmit" && (j === b.UNVERIFIED ? (r.preventDefault(), r.stopPropagation(), K().then(() => {
      m == null || m.requestSubmit();
    })) : j !== b.VERIFIED && (r.preventDefault(), r.stopPropagation(), j === b.VERIFYING && Se()));
  }
  function Ie() {
    ue();
  }
  function Ae(r, u) {
    return btoa(JSON.stringify({
      algorithm: r.algorithm,
      challenge: r.challenge,
      number: u.number,
      salt: r.salt,
      signature: r.signature,
      test: d ? !0 : void 0,
      took: u.took
    }));
  }
  function Re(r) {
    if (!r.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (r.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!pe.includes(r.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${pe.join(", ")}`);
    if (!r.challenge || r.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!r.salt || r.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function ot() {
    var r;
    if (L)
      throw C("mocking error"), new Error("Mocked error.");
    if (i)
      return C("using provided json data"), i;
    if (d)
      return C("generating test challenge", { test: d }), Bt(typeof d != "boolean" ? +d : void 0);
    {
      if (!c)
        throw new Error("Attribute challengeurl not set.");
      C("fetching challenge from", c);
      const u = await fetch(c, {
        headers: {
          "x-altcha-spam-filter": _ ? "1" : "0"
        }
      });
      if (u.status !== 200)
        throw new Error(`Server responded with ${u.status}.`);
      const g = u.headers.get("Expires"), R = u.headers.get("X-Altcha-Config"), D = await u.json(), V = new URLSearchParams((r = D.salt.split("?")) == null ? void 0 : r[1]), q = V.get("expires") || V.get("expire");
      if (q) {
        const k = new Date(+q * 1e3), v = isNaN(k.getTime()) ? 0 : k.getTime() - Date.now();
        v > 0 && ce(v);
      }
      if (R)
        try {
          const k = JSON.parse(R);
          k && typeof k == "object" && (k.verifyurl && (k.verifyurl = new URL(k.verifyurl, new URL(c)).toString()), je(k));
        } catch (k) {
          C("unable to configure from X-Altcha-Config", k);
        }
      if (!F && (g != null && g.length)) {
        const k = Date.parse(g);
        if (k) {
          const v = k - Date.now();
          v > 0 && ce(v);
        }
      }
      return D;
    }
  }
  function $e() {
    c && I && j === b.VERIFIED ? K() : ue(b.EXPIRED, o.expired);
  }
  async function lt(r) {
    let u = null;
    if ("Worker" in window) {
      try {
        u = await st(r.challenge, r.salt, r.algorithm, r.maxnumber);
      } catch (g) {
        C(g);
      }
      if ((u == null ? void 0 : u.number) !== void 0)
        return { data: r, solution: u };
    }
    return {
      data: r,
      solution: await Ut(r.challenge, r.salt, r.algorithm, r.maxnumber || S).promise
    };
  }
  async function st(r, u, g, R = typeof d == "number" ? d : S, D = Math.ceil(ie)) {
    const V = [];
    if (D < 1)
      throw new Error("Wrong number of workers configured.");
    if (D > 16)
      throw new Error("Too many workers. Max. 16 allowed workers.");
    for (let v = 0; v < D; v++)
      V.push(createAltchaWorker(ge));
    const q = Math.ceil(R / D), k = await Promise.all(V.map((v, ae) => {
      const Fe = ae * q;
      return new Promise((bt) => {
        v.addEventListener("message", (He) => {
          if (He.data)
            for (const Oe of V)
              Oe !== v && Oe.postMessage({ type: "abort" });
          bt(He.data);
        }), v.postMessage({
          payload: {
            alg: g,
            challenge: r,
            max: Fe + q,
            salt: u,
            start: Fe
          },
          type: "work"
        });
      });
    }));
    for (const v of V)
      v.terminate();
    return k.find((v) => !!v) || null;
  }
  function ft() {
    [b.UNVERIFIED, b.ERROR, b.EXPIRED].includes(j) ? _ && (m == null ? void 0 : m.reportValidity()) === !1 ? t(7, G = !1) : K() : t(7, G = !0);
  }
  function Me(r) {
    const u = r.target;
    E && u && !x.contains(u) && j === b.VERIFIED && t(8, x.style.display = "none", x);
  }
  function Te() {
    E && we();
  }
  function Se() {
    j === b.VERIFYING && o.waitAlert && alert(o.waitAlert);
  }
  function ct(r) {
    E && j !== b.UNVERIFIED && requestAnimationFrame(() => {
      we();
    });
  }
  function De() {
    E && we();
  }
  function ce(r) {
    C("expire", r), U && (clearTimeout(U), U = null), r < 1 ? $e() : U = setTimeout($e, r);
  }
  function Ne(r) {
    C("floating", r), E !== r && (t(8, x.style.left = "", x), t(8, x.style.top = "", x)), t(1, E = r === !0 || r === "" ? "auto" : r === !1 || r === "false" ? void 0 : E), E ? (s || t(0, s = "onsubmit"), document.addEventListener("scroll", Te), document.addEventListener("click", Me), window.addEventListener("resize", De)) : s === "onsubmit" && t(0, s = void 0);
  }
  function ut(r) {
    var g;
    const u = m == null ? void 0 : m.querySelector(typeof r == "string" ? `input[name="${r}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((g = u == null ? void 0 : u.value) == null ? void 0 : g.slice(u.value.indexOf("@"))) || void 0;
  }
  function at(r) {
    return [
      ...(m == null ? void 0 : m.querySelectorAll(r != null && r.length ? r.map((g) => `input[name="${g}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (g, R) => {
        const D = R.name, V = R.value.trim();
        return D && V && (g[D] = V), g;
      },
      {}
    );
  }
  async function ht(r) {
    if (!y)
      throw new Error("Attribute verifyurl not set.");
    C("requesting server verification from", y);
    const u = { payload: r };
    if (_) {
      const { email: D, expectedLanguages: V, expectedCountries: q, fields: k, ipAddress: v, timeZone: ae } = typeof _ == "object" ? _ : {
        email: void 0,
        expectedCountries: void 0,
        expectedLanguages: void 0,
        fields: void 0,
        ipAddress: void 0,
        timeZone: void 0
      };
      u.ipAddress = v === !1 ? void 0 : v || "auto", u.email = D === !1 ? void 0 : ut(D), u.fields = k === !1 ? void 0 : at(k), u.timeZone = ae === !1 ? void 0 : ae || Jt(), u.expectedCountries = q, u.expectedLanguages = V || (xe ? [xe] : void 0);
    }
    const g = await fetch(y, {
      body: JSON.stringify(u),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (g.status !== 200)
      throw new Error(`Server responded with ${g.status}.`);
    const R = await g.json();
    if (R != null && R.payload && t(5, z = R.payload), me("serververification", R), a && R.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  function we(r = 20) {
    if (x)
      if (fe || (fe = (O ? document.querySelector(O) : m == null ? void 0 : m.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || m), fe) {
        const u = parseInt(X, 10) || 12, g = fe.getBoundingClientRect(), R = x.getBoundingClientRect(), D = document.documentElement.clientHeight, V = document.documentElement.clientWidth, q = E === "auto" ? g.bottom + R.height + u + r > D : E === "top", k = Math.max(r, Math.min(V - r - R.width, g.left + g.width / 2 - R.width / 2));
        if (q ? t(8, x.style.top = `${g.top - (R.height + u)}px`, x) : t(8, x.style.top = `${g.bottom + u}px`, x), t(8, x.style.left = `${k}px`, x), x.setAttribute("data-floating", q ? "top" : "bottom"), J) {
          const v = J.getBoundingClientRect();
          t(9, J.style.left = g.left - k + g.width / 2 - v.width / 2 + "px", J);
        }
      } else
        C("unable to find floating anchor element");
  }
  function je(r) {
    r.auto !== void 0 && (t(0, s = r.auto), s === "onload" && K()), r.floatinganchor !== void 0 && t(18, O = r.floatinganchor), r.delay !== void 0 && t(16, T = r.delay), r.floatingoffset !== void 0 && t(19, X = r.floatingoffset), r.floating !== void 0 && Ne(r.floating), r.expire !== void 0 && (ce(r.expire), t(17, F = r.expire)), r.challenge && (Re(r.challenge), i = r.challenge), r.challengeurl !== void 0 && t(14, c = r.challengeurl), r.debug !== void 0 && t(15, H = !!r.debug), r.hidefooter !== void 0 && t(2, M = !!r.hidefooter), r.hidelogo !== void 0 && t(3, Q = !!r.hidelogo), r.maxnumber !== void 0 && t(20, S = +r.maxnumber), r.mockerror !== void 0 && t(21, L = !!r.mockerror), r.name !== void 0 && t(4, Y = r.name), r.refetchonexpire !== void 0 && t(22, I = !!r.refetchonexpire), r.spamfilter !== void 0 && t(23, _ = typeof r.spamfilter == "object" ? r.spamfilter : !!r.spamfilter), r.strings && t(34, l = r.strings), r.test !== void 0 && t(24, d = typeof r.test == "number" ? r.test : !!r.test), r.verifyurl !== void 0 && t(25, y = r.verifyurl), r.workers !== void 0 && t(26, ie = +r.workers);
  }
  function ue(r = b.UNVERIFIED, u = null) {
    U && (clearTimeout(U), U = null), t(7, G = !1), t(10, be = u), t(5, z = null), t(6, j = r);
  }
  async function K() {
    return ue(b.VERIFYING), await new Promise((r) => setTimeout(r, T || 0)), ot().then((r) => (Re(r), C("challenge", r), lt(r))).then(({ data: r, solution: u }) => {
      if (C("solution", u), (u == null ? void 0 : u.number) !== void 0) {
        if (y)
          return ht(Ae(r, u));
        t(5, z = Ae(r, u)), C("payload", z);
      } else
        throw C("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      At().then(() => {
        t(6, j = b.VERIFIED), t(7, G = !0), C("verified"), me("verified", { payload: z });
      });
    }).catch((r) => {
      C(r), t(6, j = b.ERROR), t(7, G = !1), t(10, be = r.message);
    });
  }
  function dt() {
    G = this.checked, t(7, G);
  }
  function gt(r) {
    de[r ? "unshift" : "push"](() => {
      J = r, t(9, J);
    });
  }
  function mt(r) {
    de[r ? "unshift" : "push"](() => {
      x = r, t(8, x);
    });
  }
  return n.$$set = (r) => {
    "auto" in r && t(0, s = r.auto), "blockspam" in r && t(27, a = r.blockspam), "challengeurl" in r && t(14, c = r.challengeurl), "challengejson" in r && t(28, h = r.challengejson), "debug" in r && t(15, H = r.debug), "delay" in r && t(16, T = r.delay), "expire" in r && t(17, F = r.expire), "floating" in r && t(1, E = r.floating), "floatinganchor" in r && t(18, O = r.floatinganchor), "floatingoffset" in r && t(19, X = r.floatingoffset), "hidefooter" in r && t(2, M = r.hidefooter), "hidelogo" in r && t(3, Q = r.hidelogo), "name" in r && t(4, Y = r.name), "maxnumber" in r && t(20, S = r.maxnumber), "mockerror" in r && t(21, L = r.mockerror), "refetchonexpire" in r && t(22, I = r.refetchonexpire), "spamfilter" in r && t(23, _ = r.spamfilter), "strings" in r && t(29, A = r.strings), "test" in r && t(24, d = r.test), "verifyurl" in r && t(25, y = r.verifyurl), "workers" in r && t(26, ie = r.workers), "workerurl" in r && t(30, ge = r.workerurl);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*challengejson*/
    268435456 && (i = h ? ze(h) : void 0), n.$$.dirty[0] & /*strings*/
    536870912 && t(34, l = A ? ze(A) : {}), n.$$.dirty[1] & /*parsedStrings*/
    8 && t(11, o = {
      ariaLinkLabel: Je,
      error: "Verification failed. Try again later.",
      expired: "Verification expired. Try again.",
      footer: `Protected by <a href="${it}" target="_blank" aria-label="${l.ariaLinkLabel || Je}">ALTCHA</a>`,
      label: "I'm not a robot",
      verified: "Verified",
      verifying: "Verifying...",
      waitAlert: "Verifying... please wait.",
      ...l
    }), n.$$.dirty[0] & /*payload, state*/
    96 && me("statechange", { payload: z, state: j }), n.$$.dirty[0] & /*state*/
    64 && ct();
  }, [
    s,
    E,
    M,
    Q,
    Y,
    z,
    j,
    G,
    x,
    J,
    be,
    o,
    ft,
    Se,
    c,
    H,
    T,
    F,
    O,
    X,
    S,
    L,
    I,
    _,
    d,
    y,
    ie,
    a,
    h,
    A,
    ge,
    je,
    ue,
    K,
    l,
    dt,
    gt,
    mt
  ];
}
class Kt extends Pt {
  constructor(e) {
    super(), jt(
      this,
      e,
      zt,
      Xt,
      yt,
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
      null,
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
customElements.define("altcha-widget", Vt(Kt, { auto: {}, blockspam: {}, challengeurl: {}, challengejson: {}, debug: { type: "Boolean" }, delay: {}, expire: {}, floating: {}, floatinganchor: {}, floatingoffset: {}, hidefooter: { type: "Boolean" }, hidelogo: { type: "Boolean" }, name: {}, maxnumber: {}, mockerror: { type: "Boolean" }, refetchonexpire: { type: "Boolean" }, spamfilter: { type: "Boolean" }, strings: {}, test: { type: "Boolean" }, verifyurl: {}, workers: {}, workerurl: {} }, [], ["configure", "reset", "verify"], !1));
globalThis.createAltchaWorker = (n) => new Worker(new URL(n || "./worker.js", import.meta.url));
export {
  Kt as Altcha
};
