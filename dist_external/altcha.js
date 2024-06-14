var nt = Object.defineProperty;
var it = (r, e, t) => e in r ? nt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var D = (r, e, t) => it(r, typeof e != "symbol" ? e + "" : e, t);
function ee() {
}
function Pe(r) {
  return r();
}
function Re() {
  return /* @__PURE__ */ Object.create(null);
}
function re(r) {
  r.forEach(Pe);
}
function He(r) {
  return typeof r == "function";
}
function lt(r, e) {
  return r != r ? e == e : r !== e || r && typeof r == "object" || typeof r == "function";
}
function ot(r) {
  return Object.keys(r).length === 0;
}
function v(r, e) {
  r.appendChild(e);
}
function j(r, e, t) {
  r.insertBefore(e, t || null);
}
function M(r) {
  r.parentNode && r.parentNode.removeChild(r);
}
function I(r) {
  return document.createElement(r);
}
function B(r) {
  return document.createElementNS("http://www.w3.org/2000/svg", r);
}
function st(r) {
  return document.createTextNode(r);
}
function J() {
  return st(" ");
}
function ue(r, e, t, i) {
  return r.addEventListener(e, t, i), () => r.removeEventListener(e, t, i);
}
function c(r, e, t) {
  t == null ? r.removeAttribute(e) : r.getAttribute(e) !== t && r.setAttribute(e, t);
}
function ct(r) {
  return Array.from(r.childNodes);
}
function Me(r, e, t) {
  r.classList.toggle(e, !!t);
}
function ft(r, e, { bubbles: t = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(r, { detail: e, bubbles: t, cancelable: i });
}
function ut(r) {
  const e = {};
  return r.childNodes.forEach(
    /** @param {Element} node */
    (t) => {
      e[t.slot || "default"] = !0;
    }
  ), e;
}
let te;
function Q(r) {
  te = r;
}
function me() {
  if (!te) throw new Error("Function called outside component initialization");
  return te;
}
function at(r) {
  me().$$.on_mount.push(r);
}
function ht(r) {
  me().$$.on_destroy.push(r);
}
function dt() {
  const r = me();
  return (e, t, { cancelable: i = !1 } = {}) => {
    const l = r.$$.callbacks[e];
    if (l) {
      const o = ft(
        /** @type {string} */
        e,
        t,
        { cancelable: i }
      );
      return l.slice().forEach((s) => {
        s.call(r, o);
      }), !o.defaultPrevented;
    }
    return !0;
  };
}
const z = [], he = [];
let K = [];
const Te = [], Fe = /* @__PURE__ */ Promise.resolve();
let de = !1;
function Ue() {
  de || (de = !0, Fe.then(y));
}
function gt() {
  return Ue(), Fe;
}
function ge(r) {
  K.push(r);
}
const ae = /* @__PURE__ */ new Set();
let W = 0;
function y() {
  if (W !== 0)
    return;
  const r = te;
  do {
    try {
      for (; W < z.length; ) {
        const e = z[W];
        W++, Q(e), mt(e.$$);
      }
    } catch (e) {
      throw z.length = 0, W = 0, e;
    }
    for (Q(null), z.length = 0, W = 0; he.length; ) he.pop()();
    for (let e = 0; e < K.length; e += 1) {
      const t = K[e];
      ae.has(t) || (ae.add(t), t());
    }
    K.length = 0;
  } while (z.length);
  for (; Te.length; )
    Te.pop()();
  de = !1, ae.clear(), Q(r);
}
function mt(r) {
  if (r.fragment !== null) {
    r.update(), re(r.before_update);
    const e = r.dirty;
    r.dirty = [-1], r.fragment && r.fragment.p(r.ctx, e), r.after_update.forEach(ge);
  }
}
function bt(r) {
  const e = [], t = [];
  K.forEach((i) => r.indexOf(i) === -1 ? e.push(i) : t.push(i)), t.forEach((i) => i()), K = e;
}
const _t = /* @__PURE__ */ new Set();
function wt(r, e) {
  r && r.i && (_t.delete(r), r.i(e));
}
function yt(r, e, t) {
  const { fragment: i, after_update: l } = r.$$;
  i && i.m(e, t), ge(() => {
    const o = r.$$.on_mount.map(Pe).filter(He);
    r.$$.on_destroy ? r.$$.on_destroy.push(...o) : re(o), r.$$.on_mount = [];
  }), l.forEach(ge);
}
function vt(r, e) {
  const t = r.$$;
  t.fragment !== null && (bt(t.after_update), re(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function kt(r, e) {
  r.$$.dirty[0] === -1 && (z.push(r), Ue(), r.$$.dirty.fill(0)), r.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function pt(r, e, t, i, l, o, s = null, u = [-1]) {
  const f = te;
  Q(r);
  const a = r.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: ee,
    not_equal: l,
    bound: Re(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: Re(),
    dirty: u,
    skip_bound: !1,
    root: e.target || f.$$.root
  };
  s && s(a.root);
  let N = !1;
  if (a.ctx = t ? t(r, e.props || {}, (C, V, ...O) => {
    const F = O.length ? O[0] : V;
    return a.ctx && l(a.ctx[C], a.ctx[C] = F) && (!a.skip_bound && a.bound[C] && a.bound[C](F), N && kt(r, C)), V;
  }) : [], a.update(), N = !0, re(a.before_update), a.fragment = i ? i(a.ctx) : !1, e.target) {
    if (e.hydrate) {
      const C = ct(e.target);
      a.fragment && a.fragment.l(C), C.forEach(M);
    } else
      a.fragment && a.fragment.c();
    e.intro && wt(r.$$.fragment), yt(r, e.target, e.anchor), y();
  }
  Q(f);
}
let Be;
typeof HTMLElement == "function" && (Be = class extends HTMLElement {
  constructor(e, t, i) {
    super();
    /** The Svelte component constructor */
    D(this, "$$ctor");
    /** Slots */
    D(this, "$$s");
    /** The Svelte component instance */
    D(this, "$$c");
    /** Whether or not the custom element is connected */
    D(this, "$$cn", !1);
    /** Component props data */
    D(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    D(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    D(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    D(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    D(this, "$$l_u", /* @__PURE__ */ new Map());
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
              s = I("slot"), o !== "default" && c(s, "name", o);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(a, N) {
              j(a, s, N);
            },
            d: function(a) {
              a && M(s);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, i = ut(this);
      for (const o of this.$$s)
        o in i && (t[o] = [e(o)]);
      for (const o of this.attributes) {
        const s = this.$$g_p(o.name);
        s in this.$$d || (this.$$d[s] = se(s, o.value, this.$$p_d, "toProp"));
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
            const s = se(
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
          const u = this.$$c.$on(o, s);
          this.$$l_u.set(s, u);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(e, t, i) {
    var l;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = se(e, i, this.$$p_d, "toProp"), (l = this.$$c) == null || l.$set({ [e]: this.$$d[e] }));
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
  var o;
  const l = (o = t[r]) == null ? void 0 : o.type;
  if (e = l === "Boolean" && typeof e != "boolean" ? e != null : e, !i || !t[r])
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
function Et(r, e, t, i, l, o) {
  let s = class extends Be {
    constructor() {
      super(r, t, l), this.$$p_d = e;
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
      set(f) {
        var a;
        f = se(u, f, e), this.$$d[u] = f, (a = this.$$c) == null || a.$set({ [u]: f });
      }
    });
  }), i.forEach((u) => {
    Object.defineProperty(s.prototype, u, {
      get() {
        var f;
        return (f = this.$$c) == null ? void 0 : f[u];
      }
    });
  }), o && (s = o(s)), r.element = /** @type {any} */
  s, s;
}
class $t {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    D(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    D(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    vt(this, 1), this.$destroy = ee;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!He(t))
      return ee;
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
    this.$$set && !ot(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const xt = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(xt);
const Ct = new TextEncoder();
function Lt(r) {
  return [...new Uint8Array(r)].map((e) => e.toString(16).padStart(2, "0")).join("");
}
async function It(r, e = "SHA-256", t = 1e5) {
  const i = Date.now().toString(16);
  r || (r = Math.round(Math.random() * t));
  const l = await Ze(i, r, e);
  return {
    algorithm: e,
    challenge: l,
    salt: i,
    signature: ""
  };
}
async function Ze(r, e, t) {
  return Lt(
    await crypto.subtle.digest(
      t.toUpperCase(),
      Ct.encode(r + e)
    )
  );
}
function At(r, e, t = "SHA-256", i = 1e6, l = 0) {
  const o = new AbortController(), s = Date.now();
  return {
    promise: (async () => {
      for (let f = l; f <= i; f += 1) {
        if (o.signal.aborted)
          return null;
        if (await Ze(e, f, t) === r)
          return {
            number: f,
            took: Date.now() - s
          };
      }
      return null;
    })(),
    controller: o
  };
}
var b = /* @__PURE__ */ ((r) => (r.ERROR = "error", r.VERIFIED = "verified", r.VERIFYING = "verifying", r.UNVERIFIED = "unverified", r.EXPIRED = "expired", r))(b || {});
function je(r) {
  let e, t, i;
  return {
    c() {
      e = B("svg"), t = B("path"), i = B("path"), c(t, "d", "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"), c(t, "fill", "currentColor"), c(t, "opacity", ".25"), c(i, "d", "M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"), c(i, "fill", "currentColor"), c(i, "class", "altcha-spinner"), c(e, "width", "24"), c(e, "height", "24"), c(e, "viewBox", "0 0 24 24"), c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(l, o) {
      j(l, e, o), v(e, t), v(e, i);
    },
    d(l) {
      l && M(e);
    }
  };
}
function Rt(r) {
  let e, t = (
    /*_strings*/
    r[9].label + ""
  ), i;
  return {
    c() {
      e = I("label"), c(e, "for", i = /*name*/
      r[3] + "_checkbox");
    },
    m(l, o) {
      j(l, e, o), e.innerHTML = t;
    },
    p(l, o) {
      o[0] & /*_strings*/
      512 && t !== (t = /*_strings*/
      l[9].label + "") && (e.innerHTML = t), o[0] & /*name*/
      8 && i !== (i = /*name*/
      l[3] + "_checkbox") && c(e, "for", i);
    },
    d(l) {
      l && M(e);
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
      e = I("span");
    },
    m(i, l) {
      j(i, e, l), e.innerHTML = t;
    },
    p(i, l) {
      l[0] & /*_strings*/
      512 && t !== (t = /*_strings*/
      i[9].verifying + "") && (e.innerHTML = t);
    },
    d(i) {
      i && M(e);
    }
  };
}
function Tt(r) {
  let e, t = (
    /*_strings*/
    r[9].verified + ""
  ), i, l;
  return {
    c() {
      e = I("span"), i = J(), l = I("input"), c(l, "type", "hidden"), c(
        l,
        "name",
        /*name*/
        r[3]
      ), l.value = /*payload*/
      r[4];
    },
    m(o, s) {
      j(o, e, s), e.innerHTML = t, j(o, i, s), j(o, l, s);
    },
    p(o, s) {
      s[0] & /*_strings*/
      512 && t !== (t = /*_strings*/
      o[9].verified + "") && (e.innerHTML = t), s[0] & /*name*/
      8 && c(
        l,
        "name",
        /*name*/
        o[3]
      ), s[0] & /*payload*/
      16 && (l.value = /*payload*/
      o[4]);
    },
    d(o) {
      o && (M(e), M(i), M(l));
    }
  };
}
function Ne(r) {
  let e, t, i, l, o, s, u;
  return {
    c() {
      e = I("div"), t = I("a"), i = B("svg"), l = B("path"), o = B("path"), s = B("path"), c(l, "d", "M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z"), c(l, "fill", "currentColor"), c(o, "d", "M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z"), c(o, "fill", "currentColor"), c(s, "d", "M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z"), c(s, "fill", "currentColor"), c(i, "width", "22"), c(i, "height", "22"), c(i, "viewBox", "0 0 20 20"), c(i, "fill", "none"), c(i, "xmlns", "http://www.w3.org/2000/svg"), c(t, "href", qe), c(t, "target", "_blank"), c(t, "class", "altcha-logo"), c(t, "aria-label", u = /*_strings*/
      r[9].ariaLinkLabel);
    },
    m(f, a) {
      j(f, e, a), v(e, t), v(t, i), v(i, l), v(i, o), v(i, s);
    },
    p(f, a) {
      a[0] & /*_strings*/
      512 && u !== (u = /*_strings*/
      f[9].ariaLinkLabel) && c(t, "aria-label", u);
    },
    d(f) {
      f && M(e);
    }
  };
}
function Se(r) {
  let e, t, i, l;
  function o(f, a) {
    return (
      /*state*/
      f[5] === b.EXPIRED ? Nt : jt
    );
  }
  let s = o(r), u = s(r);
  return {
    c() {
      e = I("div"), t = B("svg"), i = B("path"), l = J(), u.c(), c(i, "stroke-linecap", "round"), c(i, "stroke-linejoin", "round"), c(i, "d", "M6 18L18 6M6 6l12 12"), c(t, "width", "14"), c(t, "height", "14"), c(t, "xmlns", "http://www.w3.org/2000/svg"), c(t, "fill", "none"), c(t, "viewBox", "0 0 24 24"), c(t, "stroke-width", "1.5"), c(t, "stroke", "currentColor"), c(e, "class", "altcha-error");
    },
    m(f, a) {
      j(f, e, a), v(e, t), v(t, i), v(e, l), u.m(e, null);
    },
    p(f, a) {
      s === (s = o(f)) && u ? u.p(f, a) : (u.d(1), u = s(f), u && (u.c(), u.m(e, null)));
    },
    d(f) {
      f && M(e), u.d();
    }
  };
}
function jt(r) {
  let e, t = (
    /*_strings*/
    r[9].error + ""
  );
  return {
    c() {
      e = I("div"), c(
        e,
        "title",
        /*error*/
        r[8]
      );
    },
    m(i, l) {
      j(i, e, l), e.innerHTML = t;
    },
    p(i, l) {
      l[0] & /*_strings*/
      512 && t !== (t = /*_strings*/
      i[9].error + "") && (e.innerHTML = t), l[0] & /*error*/
      256 && c(
        e,
        "title",
        /*error*/
        i[8]
      );
    },
    d(i) {
      i && M(e);
    }
  };
}
function Nt(r) {
  let e, t = (
    /*_strings*/
    r[9].expired + ""
  );
  return {
    c() {
      e = I("div"), c(
        e,
        "title",
        /*error*/
        r[8]
      );
    },
    m(i, l) {
      j(i, e, l), e.innerHTML = t;
    },
    p(i, l) {
      l[0] & /*_strings*/
      512 && t !== (t = /*_strings*/
      i[9].expired + "") && (e.innerHTML = t), l[0] & /*error*/
      256 && c(
        e,
        "title",
        /*error*/
        i[8]
      );
    },
    d(i) {
      i && M(e);
    }
  };
}
function De(r) {
  let e, t, i = (
    /*_strings*/
    r[9].footer + ""
  );
  return {
    c() {
      e = I("div"), t = I("div"), c(e, "class", "altcha-footer");
    },
    m(l, o) {
      j(l, e, o), v(e, t), t.innerHTML = i;
    },
    p(l, o) {
      o[0] & /*_strings*/
      512 && i !== (i = /*_strings*/
      l[9].footer + "") && (t.innerHTML = i);
    },
    d(l) {
      l && M(e);
    }
  };
}
function St(r) {
  let e, t, i, l, o, s, u, f, a, N, C, V, O, F, k = (
    /*state*/
    r[5] === b.VERIFYING && je()
  );
  function q(d, A) {
    return (
      /*state*/
      d[5] === b.VERIFIED ? Tt : (
        /*state*/
        d[5] === b.VERIFYING ? Mt : Rt
      )
    );
  }
  let U = q(r), p = U(r), E = (
    /*hidelogo*/
    r[2] !== !0 && Ne(r)
  ), g = (
    /*error*/
    (r[8] || /*state*/
    r[5] === b.EXPIRED) && Se(r)
  ), _ = (
    /*_strings*/
    r[9].footer && /*hidefooter*/
    r[1] !== !0 && De(r)
  );
  return {
    c() {
      e = I("div"), t = I("div"), k && k.c(), i = J(), l = I("div"), o = I("input"), f = J(), a = I("div"), p.c(), N = J(), E && E.c(), C = J(), g && g.c(), V = J(), _ && _.c(), c(o, "type", "checkbox"), c(o, "id", s = /*name*/
      r[3] + "_checkbox"), o.required = u = /*auto*/
      r[0] !== "onsubmit", c(l, "class", "altcha-checkbox"), Me(
        l,
        "altcha-hidden",
        /*state*/
        r[5] === b.VERIFYING
      ), c(a, "class", "altcha-label"), c(t, "class", "altcha-main"), c(e, "class", "altcha"), c(
        e,
        "data-state",
        /*state*/
        r[5]
      );
    },
    m(d, A) {
      j(d, e, A), v(e, t), k && k.m(t, null), v(t, i), v(t, l), v(l, o), o.checked = /*checked*/
      r[6], v(t, f), v(t, a), p.m(a, null), v(t, N), E && E.m(t, null), v(e, C), g && g.m(e, null), v(e, V), _ && _.m(e, null), r[31](e), O || (F = [
        ue(
          o,
          "change",
          /*input_change_handler*/
          r[30]
        ),
        ue(
          o,
          "change",
          /*onCheckedChange*/
          r[10]
        ),
        ue(
          o,
          "invalid",
          /*onInvalid*/
          r[11]
        )
      ], O = !0);
    },
    p(d, A) {
      /*state*/
      d[5] === b.VERIFYING ? k || (k = je(), k.c(), k.m(t, i)) : k && (k.d(1), k = null), A[0] & /*name*/
      8 && s !== (s = /*name*/
      d[3] + "_checkbox") && c(o, "id", s), A[0] & /*auto*/
      1 && u !== (u = /*auto*/
      d[0] !== "onsubmit") && (o.required = u), A[0] & /*checked*/
      64 && (o.checked = /*checked*/
      d[6]), A[0] & /*state*/
      32 && Me(
        l,
        "altcha-hidden",
        /*state*/
        d[5] === b.VERIFYING
      ), U === (U = q(d)) && p ? p.p(d, A) : (p.d(1), p = U(d), p && (p.c(), p.m(a, null))), /*hidelogo*/
      d[2] !== !0 ? E ? E.p(d, A) : (E = Ne(d), E.c(), E.m(t, null)) : E && (E.d(1), E = null), /*error*/
      d[8] || /*state*/
      d[5] === b.EXPIRED ? g ? g.p(d, A) : (g = Se(d), g.c(), g.m(e, V)) : g && (g.d(1), g = null), /*_strings*/
      d[9].footer && /*hidefooter*/
      d[1] !== !0 ? _ ? _.p(d, A) : (_ = De(d), _.c(), _.m(e, null)) : _ && (_.d(1), _ = null), A[0] & /*state*/
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
      d && M(e), k && k.d(), p.d(), E && E.d(), g && g.d(), _ && _.d(), r[31](null), O = !1, re(F);
    }
  };
}
const Ve = "Visit Altcha.org", qe = "https://altcha.org/";
function Oe(r) {
  return JSON.parse(r);
}
function Dt() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function Vt(r, e, t) {
  var xe, Ce;
  let i, l, o, { auto: s = void 0 } = e, { blockspam: u = void 0 } = e, { challengeurl: f = void 0 } = e, { challengejson: a = void 0 } = e, { debug: N = !1 } = e, { expire: C = void 0 } = e, { hidefooter: V = !1 } = e, { hidelogo: O = !1 } = e, { name: F = "altcha" } = e, { maxnumber: k = 1e6 } = e, { mockerror: q = !1 } = e, { refetchonexpire: U = !0 } = e, { spamfilter: p = !1 } = e, { strings: E = void 0 } = e, { test: g = !1 } = e, { verifyurl: _ = void 0 } = e, { workers: d = Math.min(16, navigator.hardwareConcurrency || 8) } = e, { workerurl: A = void 0 } = e;
  const ce = dt(), be = ["SHA-256", "SHA-384", "SHA-512"], _e = (Ce = (xe = document.documentElement.lang) == null ? void 0 : xe.split("-")) == null ? void 0 : Ce[0];
  let Z = !1, ne, m = null, fe = null, G = null, P = b.UNVERIFIED, H = null;
  ht(() => {
    m && (m.removeEventListener("submit", ye), m.removeEventListener("reset", ve), m.removeEventListener("focusin", we), m = null), H && (clearTimeout(H), H = null);
  }), at(() => {
    L("mounted", "0.5.0"), L("workers", d), g && L("using test mode"), C && ie(C), s !== void 0 && L("auto", s), m = ne.closest("form"), m && (m.addEventListener("submit", ye), m.addEventListener("reset", ve), s === "onfocus" && m.addEventListener("focusin", we)), s === "onload" && X();
  });
  function L(...n) {
    (N || n.some((h) => h instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", ...n);
  }
  function we(n) {
    P === b.UNVERIFIED && X();
  }
  function ye(n) {
    m && s === "onsubmit" && P === b.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), X().then(() => {
      m == null || m.requestSubmit();
    }));
  }
  function ve() {
    le();
  }
  function ke(n, h) {
    return btoa(JSON.stringify({
      algorithm: n.algorithm,
      challenge: n.challenge,
      number: h.number,
      salt: n.salt,
      signature: n.signature,
      test: g ? !0 : void 0,
      took: h.took
    }));
  }
  function pe(n) {
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
  async function Ge() {
    var n;
    if (q)
      throw L("mocking error"), new Error("Mocked error.");
    if (i)
      return L("using provided json data"), i;
    if (g)
      return L("generating test challenge", { test: g }), It(typeof g != "boolean" ? +g : void 0);
    {
      if (!f)
        throw new Error("Attribute challengeurl not set.");
      L("fetching challenge from", f);
      const h = await fetch(f, {
        headers: {
          "x-altcha-spam-filter": p ? "1" : "0"
        }
      });
      if (h.status !== 200)
        throw new Error(`Server responded with ${h.status}.`);
      const w = h.headers.get("Expires"), R = h.headers.get("X-Altcha-Config"), T = await h.json(), S = new URLSearchParams((n = T.salt.split("?")) == null ? void 0 : n[1]), Y = S.get("expires") || S.get("expire");
      if (Y) {
        const $ = new Date(+Y * 1e3), x = isNaN($.getTime()) ? 0 : $.getTime() - Date.now();
        x > 0 && ie(x);
      }
      if (R)
        try {
          const $ = JSON.parse(R);
          $ && typeof $ == "object" && ($.verifyurl && ($.verifyurl = new URL($.verifyurl, new URL(f)).toString()), $e($));
        } catch ($) {
          L("unable to configure from X-Altcha-Config", $);
        }
      if (!C && (w != null && w.length)) {
        const $ = Date.parse(w);
        if ($) {
          const x = $ - Date.now();
          x > 0 && ie(x);
        }
      }
      return T;
    }
  }
  function Ee() {
    f && U && P === b.VERIFIED ? X() : le(b.EXPIRED, o.expired);
  }
  async function Xe(n) {
    let h = null;
    if ("Worker" in window) {
      try {
        h = await Ye(n.challenge, n.salt, n.algorithm, n.maxnumber);
      } catch (w) {
        L(w);
      }
      if ((h == null ? void 0 : h.number) !== void 0)
        return { data: n, solution: h };
    }
    return {
      data: n,
      solution: await At(n.challenge, n.salt, n.algorithm, n.maxnumber || k).promise
    };
  }
  async function Ye(n, h, w, R = typeof g == "number" ? g : k, T = Math.ceil(d)) {
    const S = [];
    if (T < 1)
      throw new Error("Wrong number of workers configured.");
    if (T > 16)
      throw new Error("Too many workers. Max. 16 allowed workers.");
    for (let x = 0; x < T; x++)
      S.push(createAltchaWorker(A));
    const Y = Math.ceil(R / T), $ = await Promise.all(S.map((x, oe) => {
      const Le = oe * Y;
      return new Promise((rt) => {
        x.addEventListener("message", (Ie) => {
          if (Ie.data)
            for (const Ae of S)
              Ae !== x && Ae.postMessage({ type: "abort" });
          rt(Ie.data);
        }), x.postMessage({
          payload: {
            alg: w,
            challenge: n,
            max: Le + Y,
            salt: h,
            start: Le
          },
          type: "work"
        });
      });
    }));
    for (const x of S)
      x.terminate();
    return $.find((x) => !!x) || null;
  }
  function Je() {
    [b.UNVERIFIED, b.ERROR, b.EXPIRED].includes(P) ? p && (m == null ? void 0 : m.reportValidity()) === !1 ? t(6, Z = !1) : X() : t(6, Z = !0);
  }
  function We() {
    P === b.VERIFYING && alert(o.waitAlert);
  }
  function ie(n) {
    L("expire", n), H && (clearTimeout(H), H = null), n < 1 ? Ee() : H = setTimeout(Ee, n);
  }
  function ze(n) {
    var w;
    const h = m == null ? void 0 : m.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((w = h == null ? void 0 : h.value) == null ? void 0 : w.slice(h.value.indexOf("@"))) || void 0;
  }
  function Ke(n) {
    return [
      ...(m == null ? void 0 : m.querySelectorAll(n != null && n.length ? n.map((w) => `input[name="${w}"]`).join(", ") : 'input[type="email"]:not([data-no-spamfilter]), input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (w, R) => {
        const T = R.name, S = R.value.trim();
        return T && S && (w[T] = S), w;
      },
      {}
    );
  }
  async function Qe(n) {
    if (!_)
      throw new Error("Attribute verifyurl not set.");
    L("requesting server verification from", _);
    const h = { payload: n };
    if (p) {
      const { email: T, expectedLanguages: S, expectedCountries: Y, fields: $, ipAddress: x, timeZone: oe } = typeof p == "object" ? p : {
        email: void 0,
        expectedCountries: void 0,
        expectedLanguages: void 0,
        fields: void 0,
        ipAddress: void 0,
        timeZone: void 0
      };
      h.ipAddress = x === !1 ? void 0 : x || "auto", h.email = T === !1 ? void 0 : ze(T), h.fields = $ === !1 ? void 0 : Ke($), h.timeZone = oe === !1 ? void 0 : oe || Dt(), h.expectedCountries = Y, h.expectedLanguages = S || (_e ? [_e] : void 0);
    }
    const w = await fetch(_, {
      body: JSON.stringify(h),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (w.status !== 200)
      throw new Error(`Server responded with ${w.status}.`);
    const R = await w.json();
    if (R != null && R.payload && t(4, G = R.payload), ce("serververification", R), u && R.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  function $e(n) {
    n.auto !== void 0 && (t(0, s = n.auto), s === "onload" && X()), n.expire !== void 0 && (ie(n.expire), t(14, C = n.expire)), n.challenge && (pe(n.challenge), i = n.challenge), n.challengeurl !== void 0 && t(12, f = n.challengeurl), n.debug !== void 0 && t(13, N = !!n.debug), n.hidefooter !== void 0 && t(1, V = !!n.hidefooter), n.hidelogo !== void 0 && t(2, O = !!n.hidelogo), n.maxnumber !== void 0 && t(15, k = +n.maxnumber), n.mockerror !== void 0 && t(16, q = !!n.mockerror), n.name !== void 0 && t(3, F = n.name), n.refetchonexpire !== void 0 && t(17, U = !!n.refetchonexpire), n.spamfilter !== void 0 && t(18, p = typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && t(29, l = n.strings), n.test !== void 0 && t(19, g = typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && t(20, _ = n.verifyurl), n.workers !== void 0 && t(21, d = +n.workers);
  }
  function le(n = b.UNVERIFIED, h = null) {
    H && (clearTimeout(H), H = null), t(6, Z = !1), t(8, fe = h), t(4, G = null), t(5, P = n);
  }
  async function X() {
    return le(b.VERIFYING), Ge().then((n) => (pe(n), L("challenge", n), Xe(n))).then(({ data: n, solution: h }) => {
      if (L("solution", h), (h == null ? void 0 : h.number) !== void 0) {
        if (_)
          return Qe(ke(n, h));
        t(4, G = ke(n, h)), L("payload", G);
      } else
        throw L("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      gt().then(() => {
        t(5, P = b.VERIFIED), t(6, Z = !0), L("verified"), ce("verified", { payload: G });
      });
    }).catch((n) => {
      L(n), t(5, P = b.ERROR), t(6, Z = !1), t(8, fe = n.message);
    });
  }
  function et() {
    Z = this.checked, t(6, Z);
  }
  function tt(n) {
    he[n ? "unshift" : "push"](() => {
      ne = n, t(7, ne);
    });
  }
  return r.$$set = (n) => {
    "auto" in n && t(0, s = n.auto), "blockspam" in n && t(22, u = n.blockspam), "challengeurl" in n && t(12, f = n.challengeurl), "challengejson" in n && t(23, a = n.challengejson), "debug" in n && t(13, N = n.debug), "expire" in n && t(14, C = n.expire), "hidefooter" in n && t(1, V = n.hidefooter), "hidelogo" in n && t(2, O = n.hidelogo), "name" in n && t(3, F = n.name), "maxnumber" in n && t(15, k = n.maxnumber), "mockerror" in n && t(16, q = n.mockerror), "refetchonexpire" in n && t(17, U = n.refetchonexpire), "spamfilter" in n && t(18, p = n.spamfilter), "strings" in n && t(24, E = n.strings), "test" in n && t(19, g = n.test), "verifyurl" in n && t(20, _ = n.verifyurl), "workers" in n && t(21, d = n.workers), "workerurl" in n && t(25, A = n.workerurl);
  }, r.$$.update = () => {
    r.$$.dirty[0] & /*challengejson*/
    8388608 && (i = a ? Oe(a) : void 0), r.$$.dirty[0] & /*strings*/
    16777216 && t(29, l = E ? Oe(E) : {}), r.$$.dirty[0] & /*parsedStrings*/
    536870912 && t(9, o = {
      ariaLinkLabel: Ve,
      error: "Verification failed. Try again later.",
      expired: "Verification expired. Try again.",
      footer: `Protected by <a href="${qe}" target="_blank" aria-label="${l.ariaLinkLabel || Ve}">ALTCHA</a>`,
      label: "I'm not a robot",
      verified: "Verified",
      verifying: "Verifying...",
      waitAlert: "Verifying... please wait.",
      ...l
    }), r.$$.dirty[0] & /*payload, state*/
    48 && ce("statechange", { payload: G, state: P });
  }, [
    s,
    V,
    O,
    F,
    G,
    P,
    Z,
    ne,
    fe,
    o,
    Je,
    We,
    f,
    N,
    C,
    k,
    q,
    U,
    p,
    g,
    _,
    d,
    u,
    a,
    E,
    A,
    $e,
    le,
    X,
    l,
    et,
    tt
  ];
}
class Ot extends $t {
  constructor(e) {
    super(), pt(
      this,
      e,
      Vt,
      St,
      lt,
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
      null,
      [-1, -1]
    );
  }
  get auto() {
    return this.$$.ctx[0];
  }
  set auto(e) {
    this.$$set({ auto: e }), y();
  }
  get blockspam() {
    return this.$$.ctx[22];
  }
  set blockspam(e) {
    this.$$set({ blockspam: e }), y();
  }
  get challengeurl() {
    return this.$$.ctx[12];
  }
  set challengeurl(e) {
    this.$$set({ challengeurl: e }), y();
  }
  get challengejson() {
    return this.$$.ctx[23];
  }
  set challengejson(e) {
    this.$$set({ challengejson: e }), y();
  }
  get debug() {
    return this.$$.ctx[13];
  }
  set debug(e) {
    this.$$set({ debug: e }), y();
  }
  get expire() {
    return this.$$.ctx[14];
  }
  set expire(e) {
    this.$$set({ expire: e }), y();
  }
  get hidefooter() {
    return this.$$.ctx[1];
  }
  set hidefooter(e) {
    this.$$set({ hidefooter: e }), y();
  }
  get hidelogo() {
    return this.$$.ctx[2];
  }
  set hidelogo(e) {
    this.$$set({ hidelogo: e }), y();
  }
  get name() {
    return this.$$.ctx[3];
  }
  set name(e) {
    this.$$set({ name: e }), y();
  }
  get maxnumber() {
    return this.$$.ctx[15];
  }
  set maxnumber(e) {
    this.$$set({ maxnumber: e }), y();
  }
  get mockerror() {
    return this.$$.ctx[16];
  }
  set mockerror(e) {
    this.$$set({ mockerror: e }), y();
  }
  get refetchonexpire() {
    return this.$$.ctx[17];
  }
  set refetchonexpire(e) {
    this.$$set({ refetchonexpire: e }), y();
  }
  get spamfilter() {
    return this.$$.ctx[18];
  }
  set spamfilter(e) {
    this.$$set({ spamfilter: e }), y();
  }
  get strings() {
    return this.$$.ctx[24];
  }
  set strings(e) {
    this.$$set({ strings: e }), y();
  }
  get test() {
    return this.$$.ctx[19];
  }
  set test(e) {
    this.$$set({ test: e }), y();
  }
  get verifyurl() {
    return this.$$.ctx[20];
  }
  set verifyurl(e) {
    this.$$set({ verifyurl: e }), y();
  }
  get workers() {
    return this.$$.ctx[21];
  }
  set workers(e) {
    this.$$set({ workers: e }), y();
  }
  get workerurl() {
    return this.$$.ctx[25];
  }
  set workerurl(e) {
    this.$$set({ workerurl: e }), y();
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
customElements.define("altcha-widget", Et(Ot, { auto: {}, blockspam: {}, challengeurl: {}, challengejson: {}, debug: { type: "Boolean" }, expire: {}, hidefooter: { type: "Boolean" }, hidelogo: { type: "Boolean" }, name: {}, maxnumber: {}, mockerror: { type: "Boolean" }, refetchonexpire: { type: "Boolean" }, spamfilter: { type: "Boolean" }, strings: {}, test: { type: "Boolean" }, verifyurl: {}, workers: {}, workerurl: {} }, [], ["configure", "reset", "verify"], !1));
globalThis.createAltchaWorker = (r) => new Worker(new URL(r || "./worker.js", import.meta.url));
export {
  Ot as Altcha
};
