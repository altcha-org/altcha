var yt = Object.defineProperty;
var vt = (n, e, t) => e in n ? yt(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var O = (n, e, t) => vt(n, typeof e != "symbol" ? e + "" : e, t);
function ie() {
}
function et(n) {
  return n();
}
function qe() {
  return /* @__PURE__ */ Object.create(null);
}
function ue(n) {
  n.forEach(et);
}
function tt(n) {
  return typeof n == "function";
}
function kt(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function Et(n) {
  return Object.keys(n).length === 0;
}
function p(n, e) {
  n.appendChild(e);
}
function F(n, e, t) {
  n.insertBefore(e, t || null);
}
function D(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function M(n) {
  return document.createElement(n);
}
function Y(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function pt(n) {
  return document.createTextNode(n);
}
function X() {
  return pt(" ");
}
function pe(n, e, t, i) {
  return n.addEventListener(e, t, i), () => n.removeEventListener(e, t, i);
}
function s(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
function xt(n) {
  return Array.from(n.childNodes);
}
function Ze(n, e, t) {
  n.classList.toggle(e, !!t);
}
function Ct(n, e, { bubbles: t = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(n, { detail: e, bubbles: t, cancelable: i });
}
function Lt(n) {
  const e = {};
  return n.childNodes.forEach(
    /** @param {Element} node */
    (t) => {
      e[t.slot || "default"] = !0;
    }
  ), e;
}
let ce;
function fe(n) {
  ce = n;
}
function Ie() {
  if (!ce) throw new Error("Function called outside component initialization");
  return ce;
}
function It(n) {
  Ie().$$.on_mount.push(n);
}
function At(n) {
  Ie().$$.on_destroy.push(n);
}
function Rt() {
  const n = Ie();
  return (e, t, { cancelable: i = !1 } = {}) => {
    const l = n.$$.callbacks[e];
    if (l) {
      const o = Ct(
        /** @type {string} */
        e,
        t,
        { cancelable: i }
      );
      return l.slice().forEach((f) => {
        f.call(n, o);
      }), !o.defaultPrevented;
    }
    return !0;
  };
}
const ne = [], we = [];
let re = [];
const Ye = [], nt = /* @__PURE__ */ Promise.resolve();
let Ce = !1;
function rt() {
  Ce || (Ce = !0, nt.then(y));
}
function $t() {
  return rt(), nt;
}
function Le(n) {
  re.push(n);
}
const xe = /* @__PURE__ */ new Set();
let te = 0;
function y() {
  if (te !== 0)
    return;
  const n = ce;
  do {
    try {
      for (; te < ne.length; ) {
        const e = ne[te];
        te++, fe(e), Mt(e.$$);
      }
    } catch (e) {
      throw ne.length = 0, te = 0, e;
    }
    for (fe(null), ne.length = 0, te = 0; we.length; ) we.pop()();
    for (let e = 0; e < re.length; e += 1) {
      const t = re[e];
      xe.has(t) || (xe.add(t), t());
    }
    re.length = 0;
  } while (ne.length);
  for (; Ye.length; )
    Ye.pop()();
  Ce = !1, xe.clear(), fe(n);
}
function Mt(n) {
  if (n.fragment !== null) {
    n.update(), ue(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(Le);
  }
}
function St(n) {
  const e = [], t = [];
  re.forEach((i) => n.indexOf(i) === -1 ? e.push(i) : t.push(i)), t.forEach((i) => i()), re = e;
}
const Tt = /* @__PURE__ */ new Set();
function Dt(n, e) {
  n && n.i && (Tt.delete(n), n.i(e));
}
function Nt(n, e, t) {
  const { fragment: i, after_update: l } = n.$$;
  i && i.m(e, t), Le(() => {
    const o = n.$$.on_mount.map(et).filter(tt);
    n.$$.on_destroy ? n.$$.on_destroy.push(...o) : ue(o), n.$$.on_mount = [];
  }), l.forEach(Le);
}
function jt(n, e) {
  const t = n.$$;
  t.fragment !== null && (St(t.after_update), ue(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Vt(n, e) {
  n.$$.dirty[0] === -1 && (ne.push(n), rt(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Ft(n, e, t, i, l, o, f = null, c = [-1]) {
  const h = ce;
  fe(n);
  const u = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: ie,
    not_equal: l,
    bound: qe(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (h ? h.$$.context : [])),
    // everything else
    callbacks: qe(),
    dirty: c,
    skip_bound: !1,
    root: e.target || h.$$.root
  };
  f && f(u.root);
  let H = !1;
  if (u.ctx = t ? t(n, e.props || {}, (S, B, ...P) => {
    const k = P.length ? P[0] : B;
    return u.ctx && l(u.ctx[S], u.ctx[S] = k) && (!u.skip_bound && u.bound[S] && u.bound[S](k), H && Vt(n, S)), B;
  }) : [], u.update(), H = !0, ue(u.before_update), u.fragment = i ? i(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const S = xt(e.target);
      u.fragment && u.fragment.l(S), S.forEach(D);
    } else
      u.fragment && u.fragment.c();
    e.intro && Dt(n.$$.fragment), Nt(n, e.target, e.anchor), y();
  }
  fe(h);
}
let it;
typeof HTMLElement == "function" && (it = class extends HTMLElement {
  constructor(e, t, i) {
    super();
    /** The Svelte component constructor */
    O(this, "$$ctor");
    /** Slots */
    O(this, "$$s");
    /** The Svelte component instance */
    O(this, "$$c");
    /** Whether or not the custom element is connected */
    O(this, "$$cn", !1);
    /** Component props data */
    O(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    O(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    O(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    O(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    O(this, "$$l_u", /* @__PURE__ */ new Map());
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
          let f;
          return {
            c: function() {
              f = M("slot"), o !== "default" && s(f, "name", o);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(u, H) {
              F(u, f, H);
            },
            d: function(u) {
              u && D(f);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, i = Lt(this);
      for (const o of this.$$s)
        o in i && (t[o] = [e(o)]);
      for (const o of this.attributes) {
        const f = this.$$g_p(o.name);
        f in this.$$d || (this.$$d[f] = _e(f, o.value, this.$$p_d, "toProp"));
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
            const f = _e(
              o,
              this.$$d[o],
              this.$$p_d,
              "toAttribute"
            );
            f == null ? this.removeAttribute(this.$$p_d[o].attribute || o) : this.setAttribute(this.$$p_d[o].attribute || o, f);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(l), l();
      for (const o in this.$$l)
        for (const f of this.$$l[o]) {
          const c = this.$$c.$on(o, f);
          this.$$l_u.set(f, c);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(e, t, i) {
    var l;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = _e(e, i, this.$$p_d, "toProp"), (l = this.$$c) == null || l.$set({ [e]: this.$$d[e] }));
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
function _e(n, e, t, i) {
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
function Pt(n, e, t, i, l, o) {
  let f = class extends it {
    constructor() {
      super(n, t, l), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Object.keys(e).map(
        (c) => (e[c].attribute || c).toLowerCase()
      );
    }
  };
  return Object.keys(e).forEach((c) => {
    Object.defineProperty(f.prototype, c, {
      get() {
        return this.$$c && c in this.$$c ? this.$$c[c] : this.$$d[c];
      },
      set(h) {
        var u;
        h = _e(c, h, e), this.$$d[c] = h, (u = this.$$c) == null || u.$set({ [c]: h });
      }
    });
  }), i.forEach((c) => {
    Object.defineProperty(f.prototype, c, {
      get() {
        var h;
        return (h = this.$$c) == null ? void 0 : h[c];
      }
    });
  }), o && (f = o(f)), n.element = /** @type {any} */
  f, f;
}
class Ht {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    O(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    O(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    jt(this, 1), this.$destroy = ie;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!tt(t))
      return ie;
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
    this.$$set && !Et(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Ot = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Ot);
const Bt = new TextEncoder();
function Ut(n) {
  return [...new Uint8Array(n)].map((e) => e.toString(16).padStart(2, "0")).join("");
}
async function qt(n, e = "SHA-256", t = 1e5) {
  const i = Date.now().toString(16);
  n || (n = Math.round(Math.random() * t));
  const l = await ot(i, n, e);
  return {
    algorithm: e,
    challenge: l,
    salt: i,
    signature: ""
  };
}
async function ot(n, e, t) {
  return Ut(
    await crypto.subtle.digest(
      t.toUpperCase(),
      Bt.encode(n + e)
    )
  );
}
function Zt(n, e, t = "SHA-256", i = 1e6, l = 0) {
  const o = new AbortController(), f = Date.now();
  return {
    promise: (async () => {
      for (let h = l; h <= i; h += 1) {
        if (o.signal.aborted)
          return null;
        if (await ot(e, h, t) === n)
          return {
            number: h,
            took: Date.now() - f
          };
      }
      return null;
    })(),
    controller: o
  };
}
var b = /* @__PURE__ */ ((n) => (n.ERROR = "error", n.VERIFIED = "verified", n.VERIFYING = "verifying", n.UNVERIFIED = "unverified", n.EXPIRED = "expired", n))(b || {});
function Ge(n) {
  let e, t, i;
  return {
    c() {
      e = Y("svg"), t = Y("path"), i = Y("path"), s(t, "d", "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"), s(t, "fill", "currentColor"), s(t, "opacity", ".25"), s(i, "d", "M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"), s(i, "fill", "currentColor"), s(i, "class", "altcha-spinner"), s(e, "width", "24"), s(e, "height", "24"), s(e, "viewBox", "0 0 24 24"), s(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(l, o) {
      F(l, e, o), p(e, t), p(e, i);
    },
    d(l) {
      l && D(e);
    }
  };
}
function Yt(n) {
  let e, t = (
    /*_strings*/
    n[11].label + ""
  ), i;
  return {
    c() {
      e = M("label"), s(e, "for", i = /*name*/
      n[4] + "_checkbox");
    },
    m(l, o) {
      F(l, e, o), e.innerHTML = t;
    },
    p(l, o) {
      o[0] & /*_strings*/
      2048 && t !== (t = /*_strings*/
      l[11].label + "") && (e.innerHTML = t), o[0] & /*name*/
      16 && i !== (i = /*name*/
      l[4] + "_checkbox") && s(e, "for", i);
    },
    d(l) {
      l && D(e);
    }
  };
}
function Gt(n) {
  let e, t = (
    /*_strings*/
    n[11].verifying + ""
  );
  return {
    c() {
      e = M("span");
    },
    m(i, l) {
      F(i, e, l), e.innerHTML = t;
    },
    p(i, l) {
      l[0] & /*_strings*/
      2048 && t !== (t = /*_strings*/
      i[11].verifying + "") && (e.innerHTML = t);
    },
    d(i) {
      i && D(e);
    }
  };
}
function Wt(n) {
  let e, t = (
    /*_strings*/
    n[11].verified + ""
  ), i, l;
  return {
    c() {
      e = M("span"), i = X(), l = M("input"), s(l, "type", "hidden"), s(
        l,
        "name",
        /*name*/
        n[4]
      ), l.value = /*payload*/
      n[5];
    },
    m(o, f) {
      F(o, e, f), e.innerHTML = t, F(o, i, f), F(o, l, f);
    },
    p(o, f) {
      f[0] & /*_strings*/
      2048 && t !== (t = /*_strings*/
      o[11].verified + "") && (e.innerHTML = t), f[0] & /*name*/
      16 && s(
        l,
        "name",
        /*name*/
        o[4]
      ), f[0] & /*payload*/
      32 && (l.value = /*payload*/
      o[5]);
    },
    d(o) {
      o && (D(e), D(i), D(l));
    }
  };
}
function We(n) {
  let e, t, i, l, o, f, c;
  return {
    c() {
      e = M("div"), t = M("a"), i = Y("svg"), l = Y("path"), o = Y("path"), f = Y("path"), s(l, "d", "M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z"), s(l, "fill", "currentColor"), s(o, "d", "M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z"), s(o, "fill", "currentColor"), s(f, "d", "M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z"), s(f, "fill", "currentColor"), s(i, "width", "22"), s(i, "height", "22"), s(i, "viewBox", "0 0 20 20"), s(i, "fill", "none"), s(i, "xmlns", "http://www.w3.org/2000/svg"), s(t, "href", lt), s(t, "target", "_blank"), s(t, "class", "altcha-logo"), s(t, "aria-label", c = /*_strings*/
      n[11].ariaLinkLabel);
    },
    m(h, u) {
      F(h, e, u), p(e, t), p(t, i), p(i, l), p(i, o), p(i, f);
    },
    p(h, u) {
      u[0] & /*_strings*/
      2048 && c !== (c = /*_strings*/
      h[11].ariaLinkLabel) && s(t, "aria-label", c);
    },
    d(h) {
      h && D(e);
    }
  };
}
function Xe(n) {
  let e, t, i, l;
  function o(h, u) {
    return (
      /*state*/
      h[6] === b.EXPIRED ? Jt : Xt
    );
  }
  let f = o(n), c = f(n);
  return {
    c() {
      e = M("div"), t = Y("svg"), i = Y("path"), l = X(), c.c(), s(i, "stroke-linecap", "round"), s(i, "stroke-linejoin", "round"), s(i, "d", "M6 18L18 6M6 6l12 12"), s(t, "width", "14"), s(t, "height", "14"), s(t, "xmlns", "http://www.w3.org/2000/svg"), s(t, "fill", "none"), s(t, "viewBox", "0 0 24 24"), s(t, "stroke-width", "1.5"), s(t, "stroke", "currentColor"), s(e, "class", "altcha-error");
    },
    m(h, u) {
      F(h, e, u), p(e, t), p(t, i), p(e, l), c.m(e, null);
    },
    p(h, u) {
      f === (f = o(h)) && c ? c.p(h, u) : (c.d(1), c = f(h), c && (c.c(), c.m(e, null)));
    },
    d(h) {
      h && D(e), c.d();
    }
  };
}
function Xt(n) {
  let e, t = (
    /*_strings*/
    n[11].error + ""
  );
  return {
    c() {
      e = M("div"), s(
        e,
        "title",
        /*error*/
        n[10]
      );
    },
    m(i, l) {
      F(i, e, l), e.innerHTML = t;
    },
    p(i, l) {
      l[0] & /*_strings*/
      2048 && t !== (t = /*_strings*/
      i[11].error + "") && (e.innerHTML = t), l[0] & /*error*/
      1024 && s(
        e,
        "title",
        /*error*/
        i[10]
      );
    },
    d(i) {
      i && D(e);
    }
  };
}
function Jt(n) {
  let e, t = (
    /*_strings*/
    n[11].expired + ""
  );
  return {
    c() {
      e = M("div"), s(
        e,
        "title",
        /*error*/
        n[10]
      );
    },
    m(i, l) {
      F(i, e, l), e.innerHTML = t;
    },
    p(i, l) {
      l[0] & /*_strings*/
      2048 && t !== (t = /*_strings*/
      i[11].expired + "") && (e.innerHTML = t), l[0] & /*error*/
      1024 && s(
        e,
        "title",
        /*error*/
        i[10]
      );
    },
    d(i) {
      i && D(e);
    }
  };
}
function Je(n) {
  let e, t, i = (
    /*_strings*/
    n[11].footer + ""
  );
  return {
    c() {
      e = M("div"), t = M("div"), s(e, "class", "altcha-footer");
    },
    m(l, o) {
      F(l, e, o), p(e, t), t.innerHTML = i;
    },
    p(l, o) {
      o[0] & /*_strings*/
      2048 && i !== (i = /*_strings*/
      l[11].footer + "") && (t.innerHTML = i);
    },
    d(l) {
      l && D(e);
    }
  };
}
function ze(n) {
  let e;
  return {
    c() {
      e = M("div"), s(e, "class", "altcha-anchor-arrow");
    },
    m(t, i) {
      F(t, e, i), n[37](e);
    },
    p: ie,
    d(t) {
      t && D(e), n[37](null);
    }
  };
}
function zt(n) {
  let e, t, i, l, o, f, c, h, u, H, S, B, P, k, G, $ = (
    /*state*/
    n[6] === b.VERIFYING && Ge()
  );
  function J(d, _) {
    return (
      /*state*/
      d[6] === b.VERIFIED ? Wt : (
        /*state*/
        d[6] === b.VERIFYING ? Gt : Yt
      )
    );
  }
  let Z = J(n), N = Z(n), x = (
    /*hidelogo*/
    (n[3] !== !0 || /*isFreeSaaS*/
    n[12]) && We(n)
  ), I = (
    /*error*/
    (n[10] || /*state*/
    n[6] === b.EXPIRED) && Xe(n)
  ), A = (
    /*_strings*/
    n[11].footer && /*hidefooter*/
    (n[2] !== !0 || /*isFreeSaaS*/
    n[12]) && Je(n)
  ), w = (
    /*floating*/
    n[1] && ze(n)
  );
  return {
    c() {
      e = M("div"), t = M("div"), $ && $.c(), i = X(), l = M("div"), o = M("input"), h = X(), u = M("div"), N.c(), H = X(), x && x.c(), S = X(), I && I.c(), B = X(), A && A.c(), P = X(), w && w.c(), s(o, "type", "checkbox"), s(o, "id", f = /*name*/
      n[4] + "_checkbox"), o.required = c = /*auto*/
      n[0] !== "onsubmit", s(l, "class", "altcha-checkbox"), Ze(
        l,
        "altcha-hidden",
        /*state*/
        n[6] === b.VERIFYING
      ), s(u, "class", "altcha-label"), s(t, "class", "altcha-main"), s(e, "class", "altcha"), s(
        e,
        "data-state",
        /*state*/
        n[6]
      ), s(
        e,
        "data-floating",
        /*floating*/
        n[1]
      );
    },
    m(d, _) {
      F(d, e, _), p(e, t), $ && $.m(t, null), p(t, i), p(t, l), p(l, o), o.checked = /*checked*/
      n[7], p(t, h), p(t, u), N.m(u, null), p(t, H), x && x.m(t, null), p(e, S), I && I.m(e, null), p(e, B), A && A.m(e, null), p(e, P), w && w.m(e, null), n[38](e), k || (G = [
        pe(
          o,
          "change",
          /*input_change_handler*/
          n[36]
        ),
        pe(
          o,
          "change",
          /*onCheckedChange*/
          n[13]
        ),
        pe(
          o,
          "invalid",
          /*onInvalid*/
          n[14]
        )
      ], k = !0);
    },
    p(d, _) {
      /*state*/
      d[6] === b.VERIFYING ? $ || ($ = Ge(), $.c(), $.m(t, i)) : $ && ($.d(1), $ = null), _[0] & /*name*/
      16 && f !== (f = /*name*/
      d[4] + "_checkbox") && s(o, "id", f), _[0] & /*auto*/
      1 && c !== (c = /*auto*/
      d[0] !== "onsubmit") && (o.required = c), _[0] & /*checked*/
      128 && (o.checked = /*checked*/
      d[7]), _[0] & /*state*/
      64 && Ze(
        l,
        "altcha-hidden",
        /*state*/
        d[6] === b.VERIFYING
      ), Z === (Z = J(d)) && N ? N.p(d, _) : (N.d(1), N = Z(d), N && (N.c(), N.m(u, null))), /*hidelogo*/
      d[3] !== !0 || /*isFreeSaaS*/
      d[12] ? x ? x.p(d, _) : (x = We(d), x.c(), x.m(t, null)) : x && (x.d(1), x = null), /*error*/
      d[10] || /*state*/
      d[6] === b.EXPIRED ? I ? I.p(d, _) : (I = Xe(d), I.c(), I.m(e, B)) : I && (I.d(1), I = null), /*_strings*/
      d[11].footer && /*hidefooter*/
      (d[2] !== !0 || /*isFreeSaaS*/
      d[12]) ? A ? A.p(d, _) : (A = Je(d), A.c(), A.m(e, P)) : A && (A.d(1), A = null), /*floating*/
      d[1] ? w ? w.p(d, _) : (w = ze(d), w.c(), w.m(e, null)) : w && (w.d(1), w = null), _[0] & /*state*/
      64 && s(
        e,
        "data-state",
        /*state*/
        d[6]
      ), _[0] & /*floating*/
      2 && s(
        e,
        "data-floating",
        /*floating*/
        d[1]
      );
    },
    i: ie,
    o: ie,
    d(d) {
      d && D(e), $ && $.d(), N.d(), x && x.d(), I && I.d(), A && A.d(), w && w.d(), n[38](null), k = !1, ue(G);
    }
  };
}
const Ke = "Visit Altcha.org", lt = "https://altcha.org/";
function Qe(n) {
  return JSON.parse(n);
}
function Kt() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function Qt(n, e, t) {
  var Be, Ue;
  let i, l, o, f, { auto: c = void 0 } = e, { blockspam: h = void 0 } = e, { challengeurl: u = void 0 } = e, { challengejson: H = void 0 } = e, { debug: S = !1 } = e, { delay: B = 0 } = e, { expire: P = void 0 } = e, { floating: k = void 0 } = e, { floatinganchor: G = void 0 } = e, { floatingoffset: $ = void 0 } = e, { hidefooter: J = !1 } = e, { hidelogo: Z = !1 } = e, { name: N = "altcha" } = e, { maxnumber: x = 1e6 } = e, { mockerror: I = !1 } = e, { refetchonexpire: A = !0 } = e, { spamfilter: w = !1 } = e, { strings: d = void 0 } = e, { test: _ = !1 } = e, { verifyurl: z = void 0 } = e, { workers: oe = Math.min(16, navigator.hardwareConcurrency || 8) } = e, { workerurl: ae = void 0 } = e;
  const ye = Rt(), Ae = ["SHA-256", "SHA-384", "SHA-512"], Re = (Ue = (Be = document.documentElement.lang) == null ? void 0 : Be.split("-")) == null ? void 0 : Ue[0];
  let W = !1, C, K = null, he = null, m = null, ve = null, Q = null, j = b.UNVERIFIED, U = null;
  At(() => {
    m && (m.removeEventListener("submit", Me), m.removeEventListener("reset", Se), m.removeEventListener("focusin", $e), m = null), U && (clearTimeout(U), U = null), document.removeEventListener("click", je), document.removeEventListener("scroll", Ve), window.removeEventListener("resize", Pe);
  }), It(() => {
    E("mounted", "0.6.4"), E("workers", oe), _ && E("using test mode"), P && de(P), c !== void 0 && E("auto", c), k !== void 0 && He(k), m = C.closest("form"), m && (m.addEventListener("submit", Me, { capture: !0 }), m.addEventListener("reset", Se), c === "onfocus" && m.addEventListener("focusin", $e)), c === "onload" && ee(), i && (J || Z) && E("Attributes hidefooter and hidelogo ignored because usage with free API Keys require attribution.");
  });
  function E(...r) {
    (S || r.some((a) => a instanceof Error)) && console[r[0] instanceof Error ? "error" : "log"]("ALTCHA", ...r);
  }
  function $e(r) {
    j === b.UNVERIFIED && ee();
  }
  function Me(r) {
    m && c === "onsubmit" && (j === b.UNVERIFIED ? (r.preventDefault(), r.stopPropagation(), ee().then(() => {
      m == null || m.requestSubmit();
    })) : j !== b.VERIFIED && (r.preventDefault(), r.stopPropagation(), j === b.VERIFYING && Fe()));
  }
  function Se() {
    ge();
  }
  function Te(r, a) {
    return btoa(JSON.stringify({
      algorithm: r.algorithm,
      challenge: r.challenge,
      number: a.number,
      salt: r.salt,
      signature: r.signature,
      test: _ ? !0 : void 0,
      took: a.took
    }));
  }
  function De(r) {
    if (!r.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (r.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!Ae.includes(r.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${Ae.join(", ")}`);
    if (!r.challenge || r.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!r.salt || r.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function st() {
    var r;
    if (I)
      throw E("mocking error"), new Error("Mocked error.");
    if (l)
      return E("using provided json data"), l;
    if (_)
      return E("generating test challenge", { test: _ }), qt(typeof _ != "boolean" ? +_ : void 0);
    {
      if (!u)
        throw new Error("Attribute challengeurl not set.");
      E("fetching challenge from", u);
      const a = await fetch(u, {
        headers: {
          "x-altcha-spam-filter": w ? "1" : "0"
        }
      });
      if (a.status !== 200)
        throw new Error(`Server responded with ${a.status}.`);
      const g = a.headers.get("Expires"), R = a.headers.get("X-Altcha-Config"), V = await a.json(), T = new URLSearchParams((r = V.salt.split("?")) == null ? void 0 : r[1]), q = T.get("expires") || T.get("expire");
      if (q) {
        const v = new Date(+q * 1e3), L = isNaN(v.getTime()) ? 0 : v.getTime() - Date.now();
        L > 0 && de(L);
      }
      if (R)
        try {
          const v = JSON.parse(R);
          v && typeof v == "object" && (v.verifyurl && (v.verifyurl = new URL(v.verifyurl, new URL(u)).toString()), Oe(v));
        } catch (v) {
          E("unable to configure from X-Altcha-Config", v);
        }
      if (!P && (g != null && g.length)) {
        const v = Date.parse(g);
        if (v) {
          const L = v - Date.now();
          L > 0 && de(L);
        }
      }
      return V;
    }
  }
  function Ne() {
    u && A && j === b.VERIFIED ? ee() : ge(b.EXPIRED, f.expired);
  }
  async function ft(r) {
    let a = null;
    if ("Worker" in window) {
      try {
        a = await ct(r.challenge, r.salt, r.algorithm, r.maxnumber);
      } catch (g) {
        E(g);
      }
      if ((a == null ? void 0 : a.number) !== void 0)
        return { data: r, solution: a };
    }
    return {
      data: r,
      solution: await Zt(r.challenge, r.salt, r.algorithm, r.maxnumber || x).promise
    };
  }
  async function ct(r, a, g, R = typeof _ == "number" ? _ : x, V = Math.ceil(oe)) {
    const T = [];
    V = Math.min(16, Math.max(1, V));
    for (let L = 0; L < V; L++)
      T.push(createAltchaWorker(ae));
    const q = Math.ceil(R / V), v = await Promise.all(T.map((L, Ee) => {
      const le = Ee * q;
      return new Promise((me) => {
        L.addEventListener("message", (be) => {
          if (be.data)
            for (const se of T)
              se !== L && se.postMessage({ type: "abort" });
          me(be.data);
        }), L.postMessage({
          payload: {
            alg: g,
            challenge: r,
            max: le + q,
            salt: a,
            start: le
          },
          type: "work"
        });
      });
    }));
    for (const L of T)
      L.terminate();
    return v.find((L) => !!L) || null;
  }
  function ut() {
    [b.UNVERIFIED, b.ERROR, b.EXPIRED].includes(j) ? w && (m == null ? void 0 : m.reportValidity()) === !1 ? t(7, W = !1) : ee() : t(7, W = !0);
  }
  function je(r) {
    const a = r.target;
    k && a && !C.contains(a) && j === b.VERIFIED && t(8, C.style.display = "none", C);
  }
  function Ve() {
    k && ke();
  }
  function Fe() {
    j === b.VERIFYING && f.waitAlert && alert(f.waitAlert);
  }
  function at(r) {
    k && j !== b.UNVERIFIED && requestAnimationFrame(() => {
      ke();
    });
  }
  function Pe() {
    k && ke();
  }
  function de(r) {
    E("expire", r), U && (clearTimeout(U), U = null), r < 1 ? Ne() : U = setTimeout(Ne, r);
  }
  function He(r) {
    E("floating", r), k !== r && (t(8, C.style.left = "", C), t(8, C.style.top = "", C)), t(1, k = r === !0 || r === "" ? "auto" : r === !1 || r === "false" ? void 0 : k), k ? (c || t(0, c = "onsubmit"), document.addEventListener("scroll", Ve), document.addEventListener("click", je), window.addEventListener("resize", Pe)) : c === "onsubmit" && t(0, c = void 0);
  }
  function ht(r) {
    var g;
    const a = m == null ? void 0 : m.querySelector(typeof r == "string" ? `input[name="${r}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((g = a == null ? void 0 : a.value) == null ? void 0 : g.slice(a.value.indexOf("@"))) || void 0;
  }
  function dt(r) {
    return [
      ...(m == null ? void 0 : m.querySelectorAll(r != null && r.length ? r.map((g) => `input[name="${g}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (g, R) => {
        const V = R.name, T = R.value;
        return V && T && (g[V] = /\n/.test(T) ? T.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : T), g;
      },
      {}
    );
  }
  async function gt(r) {
    if (!z)
      throw new Error("Attribute verifyurl not set.");
    E("requesting server verification from", z);
    const a = { payload: r };
    if (w) {
      const { blockedCountries: V, classifier: T, disableRules: q, email: v, expectedLanguages: L, expectedCountries: Ee, fields: le, ipAddress: me, text: be, timeZone: se } = mt();
      a.blockedCountries = V, a.classifier = T, a.disableRules = q, a.email = v === !1 ? void 0 : ht(v), a.expectedCountries = Ee, a.expectedLanguages = L || (Re ? [Re] : void 0), a.fields = le === !1 ? void 0 : dt(le), a.ipAddress = me === !1 ? void 0 : me || "auto", a.text = be, a.timeZone = se === !1 ? void 0 : se || Kt();
    }
    const g = await fetch(z, {
      body: JSON.stringify(a),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (g.status !== 200)
      throw new Error(`Server responded with ${g.status}.`);
    const R = await g.json();
    if (R != null && R.payload && t(5, Q = R.payload), ye("serververification", R), h && R.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  function mt() {
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
  function ke(r = 20) {
    if (C)
      if (he || (he = (G ? document.querySelector(G) : m == null ? void 0 : m.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || m), he) {
        const a = parseInt($, 10) || 12, g = he.getBoundingClientRect(), R = C.getBoundingClientRect(), V = document.documentElement.clientHeight, T = document.documentElement.clientWidth, q = k === "auto" ? g.bottom + R.height + a + r > V : k === "top", v = Math.max(r, Math.min(T - r - R.width, g.left + g.width / 2 - R.width / 2));
        if (q ? t(8, C.style.top = `${g.top - (R.height + a)}px`, C) : t(8, C.style.top = `${g.bottom + a}px`, C), t(8, C.style.left = `${v}px`, C), C.setAttribute("data-floating", q ? "top" : "bottom"), K) {
          const L = K.getBoundingClientRect();
          t(9, K.style.left = g.left - v + g.width / 2 - L.width / 2 + "px", K);
        }
      } else
        E("unable to find floating anchor element");
  }
  function Oe(r) {
    r.auto !== void 0 && (t(0, c = r.auto), c === "onload" && ee()), r.floatinganchor !== void 0 && t(19, G = r.floatinganchor), r.delay !== void 0 && t(17, B = r.delay), r.floatingoffset !== void 0 && t(20, $ = r.floatingoffset), r.floating !== void 0 && He(r.floating), r.expire !== void 0 && (de(r.expire), t(18, P = r.expire)), r.challenge && (De(r.challenge), l = r.challenge), r.challengeurl !== void 0 && t(15, u = r.challengeurl), r.debug !== void 0 && t(16, S = !!r.debug), r.hidefooter !== void 0 && t(2, J = !!r.hidefooter), r.hidelogo !== void 0 && t(3, Z = !!r.hidelogo), r.maxnumber !== void 0 && t(21, x = +r.maxnumber), r.mockerror !== void 0 && t(22, I = !!r.mockerror), r.name !== void 0 && t(4, N = r.name), r.refetchonexpire !== void 0 && t(23, A = !!r.refetchonexpire), r.spamfilter !== void 0 && t(24, w = typeof r.spamfilter == "object" ? r.spamfilter : !!r.spamfilter), r.strings && t(35, o = r.strings), r.test !== void 0 && t(25, _ = typeof r.test == "number" ? r.test : !!r.test), r.verifyurl !== void 0 && t(26, z = r.verifyurl), r.workers !== void 0 && t(27, oe = +r.workers), r.workerurl !== void 0 && t(28, ae = r.workerurl);
  }
  function ge(r = b.UNVERIFIED, a = null) {
    U && (clearTimeout(U), U = null), t(7, W = !1), t(10, ve = a), t(5, Q = null), t(6, j = r);
  }
  async function ee() {
    return ge(b.VERIFYING), await new Promise((r) => setTimeout(r, B || 0)), st().then((r) => (De(r), E("challenge", r), ft(r))).then(({ data: r, solution: a }) => {
      if (E("solution", a), (a == null ? void 0 : a.number) !== void 0) {
        if (z)
          return gt(Te(r, a));
        t(5, Q = Te(r, a)), E("payload", Q);
      } else
        throw E("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      $t().then(() => {
        t(6, j = b.VERIFIED), t(7, W = !0), E("verified"), ye("verified", { payload: Q });
      });
    }).catch((r) => {
      E(r), t(6, j = b.ERROR), t(7, W = !1), t(10, ve = r.message);
    });
  }
  function bt() {
    W = this.checked, t(7, W);
  }
  function _t(r) {
    we[r ? "unshift" : "push"](() => {
      K = r, t(9, K);
    });
  }
  function wt(r) {
    we[r ? "unshift" : "push"](() => {
      C = r, t(8, C);
    });
  }
  return n.$$set = (r) => {
    "auto" in r && t(0, c = r.auto), "blockspam" in r && t(29, h = r.blockspam), "challengeurl" in r && t(15, u = r.challengeurl), "challengejson" in r && t(30, H = r.challengejson), "debug" in r && t(16, S = r.debug), "delay" in r && t(17, B = r.delay), "expire" in r && t(18, P = r.expire), "floating" in r && t(1, k = r.floating), "floatinganchor" in r && t(19, G = r.floatinganchor), "floatingoffset" in r && t(20, $ = r.floatingoffset), "hidefooter" in r && t(2, J = r.hidefooter), "hidelogo" in r && t(3, Z = r.hidelogo), "name" in r && t(4, N = r.name), "maxnumber" in r && t(21, x = r.maxnumber), "mockerror" in r && t(22, I = r.mockerror), "refetchonexpire" in r && t(23, A = r.refetchonexpire), "spamfilter" in r && t(24, w = r.spamfilter), "strings" in r && t(31, d = r.strings), "test" in r && t(25, _ = r.test), "verifyurl" in r && t(26, z = r.verifyurl), "workers" in r && t(27, oe = r.workers), "workerurl" in r && t(28, ae = r.workerurl);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*challengeurl*/
    32768 && t(12, i = !!(u != null && u.includes(".altcha.org")) && !!(u != null && u.includes("apiKey=ckey_"))), n.$$.dirty[0] & /*challengejson*/
    1073741824 && (l = H ? Qe(H) : void 0), n.$$.dirty[1] & /*strings*/
    1 && t(35, o = d ? Qe(d) : {}), n.$$.dirty[1] & /*parsedStrings*/
    16 && t(11, f = {
      ariaLinkLabel: Ke,
      error: "Verification failed. Try again later.",
      expired: "Verification expired. Try again.",
      footer: `Protected by <a href="${lt}" target="_blank" aria-label="${o.ariaLinkLabel || Ke}">ALTCHA</a>`,
      label: "I'm not a robot",
      verified: "Verified",
      verifying: "Verifying...",
      waitAlert: "Verifying... please wait.",
      ...o
    }), n.$$.dirty[0] & /*payload, state*/
    96 && ye("statechange", { payload: Q, state: j }), n.$$.dirty[0] & /*state*/
    64 && at();
  }, [
    c,
    k,
    J,
    Z,
    N,
    Q,
    j,
    W,
    C,
    K,
    ve,
    f,
    i,
    ut,
    Fe,
    u,
    S,
    B,
    P,
    G,
    $,
    x,
    I,
    A,
    w,
    _,
    z,
    oe,
    ae,
    h,
    H,
    d,
    Oe,
    ge,
    ee,
    o,
    bt,
    _t,
    wt
  ];
}
class en extends Ht {
  constructor(e) {
    super(), Ft(
      this,
      e,
      Qt,
      zt,
      kt,
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
      null,
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
customElements.define("altcha-widget", Pt(en, { auto: {}, blockspam: {}, challengeurl: {}, challengejson: {}, debug: { type: "Boolean" }, delay: {}, expire: {}, floating: {}, floatinganchor: {}, floatingoffset: {}, hidefooter: { type: "Boolean" }, hidelogo: { type: "Boolean" }, name: {}, maxnumber: {}, mockerror: { type: "Boolean" }, refetchonexpire: { type: "Boolean" }, spamfilter: { type: "Boolean" }, strings: {}, test: { type: "Boolean" }, verifyurl: {}, workers: {}, workerurl: {} }, [], ["configure", "reset", "verify"], !1));
globalThis.createAltchaWorker = (n) => new Worker(new URL(n || "./worker.js", import.meta.url));
export {
  en as Altcha
};
