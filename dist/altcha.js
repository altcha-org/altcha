var Xe = Object.defineProperty;
var Ye = (t, e, n) => e in t ? Xe(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var N = (t, e, n) => (Ye(t, typeof e != "symbol" ? e + "" : e, n), n);
function X() {
}
function xe(t) {
  return t();
}
function me() {
  return /* @__PURE__ */ Object.create(null);
}
function B(t) {
  t.forEach(xe);
}
function Ce(t) {
  return typeof t == "function";
}
function Ke(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function Be(t) {
  return Object.keys(t).length === 0;
}
function v(t, e) {
  t.appendChild(e);
}
function We(t, e, n) {
  const r = Je(t);
  if (!r.getElementById(e)) {
    const l = p("style");
    l.id = e, l.textContent = n, Qe(r, l);
  }
}
function Je(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : t.ownerDocument;
}
function Qe(t, e) {
  return v(
    /** @type {Document} */
    t.head || t,
    e
  ), e.sheet;
}
function I(t, e, n) {
  t.insertBefore(e, n || null);
}
function C(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function p(t) {
  return document.createElement(t);
}
function S(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function ze(t) {
  return document.createTextNode(t);
}
function Z() {
  return ze(" ");
}
function ne(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function c(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function qe(t) {
  return Array.from(t.childNodes);
}
function ve(t, e, n) {
  t.classList.toggle(e, !!n);
}
function et(t, e, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: n, cancelable: r });
}
function tt(t) {
  const e = {};
  return t.childNodes.forEach(
    /** @param {Element} node */
    (n) => {
      e[n.slot || "default"] = !0;
    }
  ), e;
}
let K;
function Y(t) {
  K = t;
}
function se() {
  if (!K)
    throw new Error("Function called outside component initialization");
  return K;
}
function nt(t) {
  se().$$.on_mount.push(t);
}
function rt(t) {
  se().$$.on_destroy.push(t);
}
function it() {
  const t = se();
  return (e, n, { cancelable: r = !1 } = {}) => {
    const l = t.$$.callbacks[e];
    if (l) {
      const o = et(
        /** @type {string} */
        e,
        n,
        { cancelable: r }
      );
      return l.slice().forEach((s) => {
        s.call(t, o);
      }), !o.defaultPrevented;
    }
    return !0;
  };
}
const D = [], ie = [];
let P = [];
const we = [], Le = /* @__PURE__ */ Promise.resolve();
let le = !1;
function Ie() {
  le || (le = !0, Le.then(E));
}
function lt() {
  return Ie(), Le;
}
function oe(t) {
  P.push(t);
}
const re = /* @__PURE__ */ new Set();
let U = 0;
function E() {
  if (U !== 0)
    return;
  const t = K;
  do {
    try {
      for (; U < D.length; ) {
        const e = D[U];
        U++, Y(e), ot(e.$$);
      }
    } catch (e) {
      throw D.length = 0, U = 0, e;
    }
    for (Y(null), D.length = 0, U = 0; ie.length; )
      ie.pop()();
    for (let e = 0; e < P.length; e += 1) {
      const n = P[e];
      re.has(n) || (re.add(n), n());
    }
    P.length = 0;
  } while (D.length);
  for (; we.length; )
    we.pop()();
  le = !1, re.clear(), Y(t);
}
function ot(t) {
  if (t.fragment !== null) {
    t.update(), B(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(oe);
  }
}
function st(t) {
  const e = [], n = [];
  P.forEach((r) => t.indexOf(r) === -1 ? e.push(r) : n.push(r)), n.forEach((r) => r()), P = e;
}
const ct = /* @__PURE__ */ new Set();
function ut(t, e) {
  t && t.i && (ct.delete(t), t.i(e));
}
function at(t, e, n) {
  const { fragment: r, after_update: l } = t.$$;
  r && r.m(e, n), oe(() => {
    const o = t.$$.on_mount.map(xe).filter(Ce);
    t.$$.on_destroy ? t.$$.on_destroy.push(...o) : B(o), t.$$.on_mount = [];
  }), l.forEach(oe);
}
function ft(t, e) {
  const n = t.$$;
  n.fragment !== null && (st(n.after_update), B(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function ht(t, e) {
  t.$$.dirty[0] === -1 && (D.push(t), Ie(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function dt(t, e, n, r, l, o, s = null, u = [-1]) {
  const f = K;
  Y(t);
  const a = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: X,
    not_equal: l,
    bound: me(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: me(),
    dirty: u,
    skip_bound: !1,
    root: e.target || f.$$.root
  };
  s && s(a.root);
  let k = !1;
  if (a.ctx = n ? n(t, e.props || {}, (w, R, ...M) => {
    const j = M.length ? M[0] : R;
    return a.ctx && l(a.ctx[w], a.ctx[w] = j) && (!a.skip_bound && a.bound[w] && a.bound[w](j), k && ht(t, w)), R;
  }) : [], a.update(), k = !0, B(a.before_update), a.fragment = r ? r(a.ctx) : !1, e.target) {
    if (e.hydrate) {
      const w = qe(e.target);
      a.fragment && a.fragment.l(w), w.forEach(C);
    } else
      a.fragment && a.fragment.c();
    e.intro && ut(t.$$.fragment), at(t, e.target, e.anchor), E();
  }
  Y(f);
}
let Re;
typeof HTMLElement == "function" && (Re = class extends HTMLElement {
  constructor(e, n, r) {
    super();
    /** The Svelte component constructor */
    N(this, "$$ctor");
    /** Slots */
    N(this, "$$s");
    /** The Svelte component instance */
    N(this, "$$c");
    /** Whether or not the custom element is connected */
    N(this, "$$cn", !1);
    /** Component props data */
    N(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    N(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    N(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    N(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    N(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = e, this.$$s = n, r && this.attachShadow({ mode: "open" });
  }
  addEventListener(e, n, r) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(n), this.$$c) {
      const l = this.$$c.$on(e, n);
      this.$$l_u.set(n, l);
    }
    super.addEventListener(e, n, r);
  }
  removeEventListener(e, n, r) {
    if (super.removeEventListener(e, n, r), this.$$c) {
      const l = this.$$l_u.get(n);
      l && (l(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(o) {
        return () => {
          let s;
          return {
            c: function() {
              s = p("slot"), o !== "default" && c(s, "name", o);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(a, k) {
              I(a, s, k);
            },
            d: function(a) {
              a && C(s);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, r = tt(this);
      for (const o of this.$$s)
        o in r && (n[o] = [e(o)]);
      for (const o of this.attributes) {
        const s = this.$$g_p(o.name);
        s in this.$$d || (this.$$d[s] = Q(s, o.value, this.$$p_d, "toProp"));
      }
      for (const o in this.$$p_d)
        !(o in this.$$d) && this[o] !== void 0 && (this.$$d[o] = this[o], delete this[o]);
      this.$$c = new this.$$ctor({
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$scope: {
            ctx: []
          }
        }
      });
      const l = () => {
        this.$$r = !0;
        for (const o in this.$$p_d)
          if (this.$$d[o] = this.$$c.$$.ctx[this.$$c.$$.props[o]], this.$$p_d[o].reflect) {
            const s = Q(
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
  attributeChangedCallback(e, n, r) {
    var l;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Q(e, r, this.$$p_d, "toProp"), (l = this.$$c) == null || l.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      this.$$cn || (this.$$c.$destroy(), this.$$c = void 0);
    });
  }
  $$g_p(e) {
    return Object.keys(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === e || !this.$$p_d[n].attribute && n.toLowerCase() === e
    ) || e;
  }
});
function Q(t, e, n, r) {
  var o;
  const l = (o = n[t]) == null ? void 0 : o.type;
  if (e = l === "Boolean" && typeof e != "boolean" ? e != null : e, !r || !n[t])
    return e;
  if (r === "toAttribute")
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
function gt(t, e, n, r, l, o) {
  let s = class extends Re {
    constructor() {
      super(t, n, l), this.$$p_d = e;
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
        f = Q(u, f, e), this.$$d[u] = f, (a = this.$$c) == null || a.$set({ [u]: f });
      }
    });
  }), r.forEach((u) => {
    Object.defineProperty(s.prototype, u, {
      get() {
        var f;
        return (f = this.$$c) == null ? void 0 : f[u];
      }
    });
  }), o && (s = o(s)), t.element = /** @type {any} */
  s, s;
}
class bt {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    N(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    N(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    ft(this, 1), this.$destroy = X;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!Ce(n))
      return X;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const l = r.indexOf(n);
      l !== -1 && r.splice(l, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !Be(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const mt = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(mt);
const Ne = "KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2NvbnN0IGY9bmV3IFRleHRFbmNvZGVyO2Z1bmN0aW9uIGcodCl7cmV0dXJuWy4uLm5ldyBVaW50OEFycmF5KHQpXS5tYXAoZT0+ZS50b1N0cmluZygxNikucGFkU3RhcnQoMiwiMCIpKS5qb2luKCIiKX1hc3luYyBmdW5jdGlvbiBoKHQsZSxvKXtyZXR1cm4gZyhhd2FpdCBjcnlwdG8uc3VidGxlLmRpZ2VzdChvLnRvVXBwZXJDYXNlKCksZi5lbmNvZGUodCtlKSkpfWZ1bmN0aW9uIG0odCxlLG89IlNIQS0yNTYiLGk9MWU2LHA9MCl7Y29uc3QgYT1uZXcgQWJvcnRDb250cm9sbGVyO3JldHVybntwcm9taXNlOm5ldyBQcm9taXNlKChzLGMpPT57Y29uc3Qgcj1EYXRlLm5vdygpLGQ9bD0+e2Euc2lnbmFsLmFib3J0ZWR8fGw+PWk/cyhudWxsKTpoKGUsbCxvKS50aGVuKHc9Pnt3PT09dD9zKHtudW1iZXI6bCx0b29rOkRhdGUubm93KCktcn0pOmQobCsxKX0pLmNhdGNoKGMpfTtkKHApfSksY29udHJvbGxlcjphfX1sZXQgbjtvbm1lc3NhZ2U9YXN5bmMgdD0+e2NvbnN0e3R5cGU6ZSxwYXlsb2FkOm99PXQuZGF0YTtpZihlPT09ImFib3J0IiluPT1udWxsfHxuLmFib3J0KCksbj12b2lkIDA7ZWxzZSBpZihlPT09IndvcmsiKXtjb25zdHthbGc6aSxjaGFsbGVuZ2U6cCxtYXg6YSxzYWx0OnUsc3RhcnQ6c309b3x8e30sYz1tKHAsdSxpLGEscyk7bj1jLmNvbnRyb2xsZXIsYy5wcm9taXNlLnRoZW4ocj0+e3NlbGYucG9zdE1lc3NhZ2UociYmey4uLnIsd29ya2VyOiEwfSl9KX19fSkoKTsK", vt = (t) => Uint8Array.from(atob(t), (e) => e.charCodeAt(0)), _e = typeof window < "u" && window.Blob && new Blob([vt(Ne)], { type: "text/javascript;charset=utf-8" });
function wt(t) {
  let e;
  try {
    if (e = _e && (window.URL || window.webkitURL).createObjectURL(_e), !e)
      throw "";
    const n = new Worker(e, {
      name: t == null ? void 0 : t.name
    });
    return n.addEventListener("error", () => {
      (window.URL || window.webkitURL).revokeObjectURL(e);
    }), n;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + Ne,
      {
        name: t == null ? void 0 : t.name
      }
    );
  } finally {
    e && (window.URL || window.webkitURL).revokeObjectURL(e);
  }
}
const _t = new TextEncoder();
function pt(t) {
  return [...new Uint8Array(t)].map((e) => e.toString(16).padStart(2, "0")).join("");
}
async function $t(t = 1e5, e = "SHA-256") {
  const n = Date.now().toString(16), r = Math.round(Math.random() * t), l = await je(n, r, e);
  return {
    algorithm: e,
    challenge: l,
    salt: n,
    signature: ""
  };
}
async function je(t, e, n) {
  return pt(await crypto.subtle.digest(n.toUpperCase(), _t.encode(t + e)));
}
function yt(t, e, n = "SHA-256", r = 1e6, l = 0) {
  const o = new AbortController();
  return {
    promise: new Promise((u, f) => {
      const a = Date.now(), k = (w) => {
        o.signal.aborted || w >= r ? u(null) : je(e, w, n).then((R) => {
          R === t ? u({
            number: w,
            took: Date.now() - a
          }) : k(w + 1);
        }).catch(f);
      };
      k(l);
    }),
    controller: o
  };
}
var m = /* @__PURE__ */ ((t) => (t.ERROR = "error", t.VERIFIED = "verified", t.VERIFYING = "verifying", t.UNVERIFIED = "unverified", t.EXPIRED = "expired", t))(m || {});
function kt(t) {
  We(t, "svelte-vuofbg", ".altcha.svelte-vuofbg.svelte-vuofbg{background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);overflow:hidden;position:relative;text-align:left}.altcha.svelte-vuofbg.svelte-vuofbg:focus-within{border-color:var(--altcha-color-border-focus, currentColor)}.altcha-main.svelte-vuofbg.svelte-vuofbg{align-items:center;display:flex;gap:0.4rem;padding:0.7rem}.altcha-label.svelte-vuofbg.svelte-vuofbg{flex-grow:1}.altcha-label.svelte-vuofbg label.svelte-vuofbg{cursor:pointer}.altcha-logo.svelte-vuofbg.svelte-vuofbg{color:currentColor;opacity:0.3}.altcha-logo.svelte-vuofbg.svelte-vuofbg:hover{opacity:1}.altcha-error.svelte-vuofbg.svelte-vuofbg{color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem}.altcha-footer.svelte-vuofbg.svelte-vuofbg{align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.4;padding:0.2rem 0.7rem;text-align:right}.altcha-footer.svelte-vuofbg.svelte-vuofbg:hover{opacity:1}.altcha-footer.svelte-vuofbg>.svelte-vuofbg:first-child{flex-grow:1}.altcha-footer.svelte-vuofbg a{color:currentColor}.altcha-checkbox.svelte-vuofbg.svelte-vuofbg{display:flex;align-items:center;height:24px;width:24px}.altcha-checkbox.svelte-vuofbg input.svelte-vuofbg{width:18px;height:18px;margin:0}.altcha-hidden.svelte-vuofbg.svelte-vuofbg{display:none}.altcha-spinner.svelte-vuofbg.svelte-vuofbg{animation:svelte-vuofbg-altcha-spinner 0.75s infinite linear;transform-origin:center}@keyframes svelte-vuofbg-altcha-spinner{100%{transform:rotate(360deg)}}");
}
function pe(t) {
  let e, n, r;
  return {
    c() {
      e = S("svg"), n = S("path"), r = S("path"), c(n, "d", "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"), c(n, "fill", "currentColor"), c(n, "opacity", ".25"), c(r, "d", "M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"), c(r, "fill", "currentColor"), c(r, "class", "altcha-spinner svelte-vuofbg"), c(e, "width", "24"), c(e, "height", "24"), c(e, "viewBox", "0 0 24 24"), c(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(l, o) {
      I(l, e, o), v(e, n), v(e, r);
    },
    d(l) {
      l && C(e);
    }
  };
}
function Et(t) {
  let e, n = (
    /*_strings*/
    t[9].label + ""
  ), r;
  return {
    c() {
      e = p("label"), c(e, "for", r = /*name*/
      t[3] + "_checkbox"), c(e, "class", "svelte-vuofbg");
    },
    m(l, o) {
      I(l, e, o), e.innerHTML = n;
    },
    p(l, o) {
      o[0] & /*_strings*/
      512 && n !== (n = /*_strings*/
      l[9].label + "") && (e.innerHTML = n), o[0] & /*name*/
      8 && r !== (r = /*name*/
      l[3] + "_checkbox") && c(e, "for", r);
    },
    d(l) {
      l && C(e);
    }
  };
}
function xt(t) {
  let e, n = (
    /*_strings*/
    t[9].verifying + ""
  );
  return {
    c() {
      e = p("span");
    },
    m(r, l) {
      I(r, e, l), e.innerHTML = n;
    },
    p(r, l) {
      l[0] & /*_strings*/
      512 && n !== (n = /*_strings*/
      r[9].verifying + "") && (e.innerHTML = n);
    },
    d(r) {
      r && C(e);
    }
  };
}
function Ct(t) {
  let e, n = (
    /*_strings*/
    t[9].verified + ""
  ), r, l;
  return {
    c() {
      e = p("span"), r = Z(), l = p("input"), c(l, "type", "hidden"), c(
        l,
        "name",
        /*name*/
        t[3]
      ), l.value = /*payload*/
      t[4];
    },
    m(o, s) {
      I(o, e, s), e.innerHTML = n, I(o, r, s), I(o, l, s);
    },
    p(o, s) {
      s[0] & /*_strings*/
      512 && n !== (n = /*_strings*/
      o[9].verified + "") && (e.innerHTML = n), s[0] & /*name*/
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
      o && (C(e), C(r), C(l));
    }
  };
}
function $e(t) {
  let e, n, r, l, o, s;
  return {
    c() {
      e = p("div"), n = p("a"), r = S("svg"), l = S("path"), o = S("path"), s = S("path"), c(l, "d", "M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z"), c(l, "fill", "currentColor"), c(o, "d", "M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z"), c(o, "fill", "currentColor"), c(s, "d", "M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z"), c(s, "fill", "currentColor"), c(r, "width", "22"), c(r, "height", "22"), c(r, "viewBox", "0 0 20 20"), c(r, "fill", "none"), c(r, "xmlns", "http://www.w3.org/2000/svg"), c(n, "href", Ae), c(n, "target", "_blank"), c(n, "class", "altcha-logo svelte-vuofbg");
    },
    m(u, f) {
      I(u, e, f), v(e, n), v(n, r), v(r, l), v(r, o), v(r, s);
    },
    p: X,
    d(u) {
      u && C(e);
    }
  };
}
function ye(t) {
  let e, n, r, l;
  function o(f, a) {
    return (
      /*state*/
      f[5] === m.EXPIRED ? It : Lt
    );
  }
  let s = o(t), u = s(t);
  return {
    c() {
      e = p("div"), n = S("svg"), r = S("path"), l = Z(), u.c(), c(r, "stroke-linecap", "round"), c(r, "stroke-linejoin", "round"), c(r, "d", "M6 18L18 6M6 6l12 12"), c(n, "width", "14"), c(n, "height", "14"), c(n, "xmlns", "http://www.w3.org/2000/svg"), c(n, "fill", "none"), c(n, "viewBox", "0 0 24 24"), c(n, "stroke-width", "1.5"), c(n, "stroke", "currentColor"), c(e, "class", "altcha-error svelte-vuofbg");
    },
    m(f, a) {
      I(f, e, a), v(e, n), v(n, r), v(e, l), u.m(e, null);
    },
    p(f, a) {
      s === (s = o(f)) && u ? u.p(f, a) : (u.d(1), u = s(f), u && (u.c(), u.m(e, null)));
    },
    d(f) {
      f && C(e), u.d();
    }
  };
}
function Lt(t) {
  let e, n = (
    /*_strings*/
    t[9].error + ""
  );
  return {
    c() {
      e = p("div"), c(
        e,
        "title",
        /*error*/
        t[8]
      );
    },
    m(r, l) {
      I(r, e, l), e.innerHTML = n;
    },
    p(r, l) {
      l[0] & /*_strings*/
      512 && n !== (n = /*_strings*/
      r[9].error + "") && (e.innerHTML = n), l[0] & /*error*/
      256 && c(
        e,
        "title",
        /*error*/
        r[8]
      );
    },
    d(r) {
      r && C(e);
    }
  };
}
function It(t) {
  let e, n = (
    /*_strings*/
    t[9].expired + ""
  );
  return {
    c() {
      e = p("div"), c(
        e,
        "title",
        /*error*/
        t[8]
      );
    },
    m(r, l) {
      I(r, e, l), e.innerHTML = n;
    },
    p(r, l) {
      l[0] & /*_strings*/
      512 && n !== (n = /*_strings*/
      r[9].expired + "") && (e.innerHTML = n), l[0] & /*error*/
      256 && c(
        e,
        "title",
        /*error*/
        r[8]
      );
    },
    d(r) {
      r && C(e);
    }
  };
}
function ke(t) {
  let e, n, r = (
    /*_strings*/
    t[9].footer + ""
  );
  return {
    c() {
      e = p("div"), n = p("div"), c(n, "class", "svelte-vuofbg"), c(e, "class", "altcha-footer svelte-vuofbg");
    },
    m(l, o) {
      I(l, e, o), v(e, n), n.innerHTML = r;
    },
    p(l, o) {
      o[0] & /*_strings*/
      512 && r !== (r = /*_strings*/
      l[9].footer + "") && (n.innerHTML = r);
    },
    d(l) {
      l && C(e);
    }
  };
}
function Rt(t) {
  let e, n, r, l, o, s, u, f, a, k, w, R, M, j, _ = (
    /*state*/
    t[5] === m.VERIFYING && pe()
  );
  function V(h, d) {
    return (
      /*state*/
      h[5] === m.VERIFIED ? Ct : (
        /*state*/
        h[5] === m.VERIFYING ? xt : Et
      )
    );
  }
  let A = V(t), x = A(t), $ = (
    /*hidelogo*/
    t[2] !== !0 && $e()
  ), y = (
    /*error*/
    (t[8] || /*state*/
    t[5] === m.EXPIRED) && ye(t)
  ), b = (
    /*_strings*/
    t[9].footer && /*hidefooter*/
    t[1] !== !0 && ke(t)
  );
  return {
    c() {
      e = p("div"), n = p("div"), _ && _.c(), r = Z(), l = p("div"), o = p("input"), f = Z(), a = p("div"), x.c(), k = Z(), $ && $.c(), w = Z(), y && y.c(), R = Z(), b && b.c(), c(o, "type", "checkbox"), c(o, "id", s = /*name*/
      t[3] + "_checkbox"), o.required = u = /*auto*/
      t[0] !== "onsubmit", c(o, "class", "svelte-vuofbg"), c(l, "class", "altcha-checkbox svelte-vuofbg"), ve(
        l,
        "altcha-hidden",
        /*state*/
        t[5] === m.VERIFYING
      ), c(a, "class", "altcha-label svelte-vuofbg"), c(n, "class", "altcha-main svelte-vuofbg"), c(e, "class", "altcha svelte-vuofbg"), c(
        e,
        "data-state",
        /*state*/
        t[5]
      );
    },
    m(h, d) {
      I(h, e, d), v(e, n), _ && _.m(n, null), v(n, r), v(n, l), v(l, o), o.checked = /*checked*/
      t[6], v(n, f), v(n, a), x.m(a, null), v(n, k), $ && $.m(n, null), v(e, w), y && y.m(e, null), v(e, R), b && b.m(e, null), t[26](e), M || (j = [
        ne(
          o,
          "change",
          /*input_change_handler*/
          t[25]
        ),
        ne(
          o,
          "change",
          /*onCheckedChange*/
          t[10]
        ),
        ne(
          o,
          "invalid",
          /*onInvalid*/
          t[11]
        )
      ], M = !0);
    },
    p(h, d) {
      /*state*/
      h[5] === m.VERIFYING ? _ || (_ = pe(), _.c(), _.m(n, r)) : _ && (_.d(1), _ = null), d[0] & /*name*/
      8 && s !== (s = /*name*/
      h[3] + "_checkbox") && c(o, "id", s), d[0] & /*auto*/
      1 && u !== (u = /*auto*/
      h[0] !== "onsubmit") && (o.required = u), d[0] & /*checked*/
      64 && (o.checked = /*checked*/
      h[6]), d[0] & /*state*/
      32 && ve(
        l,
        "altcha-hidden",
        /*state*/
        h[5] === m.VERIFYING
      ), A === (A = V(h)) && x ? x.p(h, d) : (x.d(1), x = A(h), x && (x.c(), x.m(a, null))), /*hidelogo*/
      h[2] !== !0 ? $ ? $.p(h, d) : ($ = $e(), $.c(), $.m(n, null)) : $ && ($.d(1), $ = null), /*error*/
      h[8] || /*state*/
      h[5] === m.EXPIRED ? y ? y.p(h, d) : (y = ye(h), y.c(), y.m(e, R)) : y && (y.d(1), y = null), /*_strings*/
      h[9].footer && /*hidefooter*/
      h[1] !== !0 ? b ? b.p(h, d) : (b = ke(h), b.c(), b.m(e, null)) : b && (b.d(1), b = null), d[0] & /*state*/
      32 && c(
        e,
        "data-state",
        /*state*/
        h[5]
      );
    },
    i: X,
    o: X,
    d(h) {
      h && C(e), _ && _.d(), x.d(), $ && $.d(), y && y.d(), b && b.d(), t[26](null), M = !1, B(j);
    }
  };
}
const Ae = "https://altcha.org/";
function Ee(t) {
  return JSON.parse(t);
}
function Nt(t, e, n) {
  let r, l, o, { auto: s = void 0 } = e, { challengeurl: u = void 0 } = e, { challengejson: f = void 0 } = e, { debug: a = !1 } = e, { expire: k = void 0 } = e, { hidefooter: w = !1 } = e, { hidelogo: R = !1 } = e, { name: M = "altcha" } = e, { maxnumber: j = 1e6 } = e, { mockerror: _ = !1 } = e, { strings: V = void 0 } = e, { test: A = !1 } = e, { workers: x = 8 } = e;
  const $ = it(), y = ["SHA-256", "SHA-384", "SHA-512"];
  let b = !1, h, d = null, z = null, H = null, T = m.UNVERIFIED, q;
  rt(() => {
    d && (d.removeEventListener("submit", ce), d.removeEventListener("reset", ue), d = null);
  }), nt(() => {
    L("mounted", "0.1.9"), A && L("using test mode"), k && ee(k), s !== void 0 && L("auto", s), d = h.closest("form"), d && (d.addEventListener("submit", ce), d.addEventListener("reset", ue)), s === "onload" && F();
  });
  function L(...i) {
    (a || i.some((g) => g instanceof Error)) && console[i[0] instanceof Error ? "error" : "log"]("ALTCHA", ...i);
  }
  function ce(i) {
    d && s === "onsubmit" && T === m.UNVERIFIED && (i.preventDefault(), i.stopPropagation(), F().then(() => {
      d == null || d.requestSubmit();
    }));
  }
  function ue() {
    W();
  }
  function Me(i, g) {
    return btoa(JSON.stringify({
      algorithm: i.algorithm,
      challenge: i.challenge,
      number: g.number,
      salt: i.salt,
      signature: i.signature,
      test: A ? !0 : void 0,
      took: g.took
    }));
  }
  function ae(i) {
    if (!i.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (i.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!y.includes(i.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${y.join(", ")}`);
    if (!i.challenge || i.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!i.salt || i.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function Ge() {
    if (_)
      throw L("mocking error"), new Error("Mocked error.");
    if (r)
      return L("using provided json data"), r;
    if (A)
      return L("generating test challenge"), $t();
    {
      if (!u)
        throw new Error("Attribute challengeurl not set.");
      L("fetching challenge from", u);
      const i = await fetch(u);
      if (i.status !== 200)
        throw new Error(`Server responded with ${i.status}.`);
      const g = i.headers.get("Expires");
      if (g != null && g.length) {
        const O = Date.parse(g);
        isNaN(O) || ee(O - Date.now());
      }
      return i.json();
    }
  }
  function fe() {
    u && T === m.VERIFIED ? F() : W(m.EXPIRED, o.expired);
  }
  async function Te(i) {
    let g = null;
    if ("Worker" in window) {
      try {
        g = await Se(i.challenge, i.salt, i.algorithm);
      } catch (O) {
        L(O);
      }
      if ((g == null ? void 0 : g.number) !== void 0)
        return { data: i, solution: g };
    }
    return {
      data: i,
      solution: await yt(i.challenge, i.salt, i.algorithm, j).promise
    };
  }
  async function Se(i, g, O, te = Math.ceil(x)) {
    const J = [];
    if (te < 1)
      throw new Error("Wrong number of workers configured.");
    for (let G = 0; G < te; G++)
      J.push(new wt());
    const he = Math.ceil(j / te), Ue = await Promise.all(J.map((G, De) => {
      const de = De * he;
      return new Promise((Pe) => {
        G.addEventListener("message", (ge) => {
          if (ge.data)
            for (const be of J)
              be !== G && be.postMessage({ type: "abort" });
          Pe(ge.data);
        }), G.postMessage({
          payload: {
            alg: O,
            challenge: i,
            max: de + he,
            salt: g,
            start: de
          },
          type: "work"
        });
      });
    }));
    for (const G of J)
      G.terminate();
    return Ue.find((G) => !!G) || null;
  }
  function Ve() {
    [m.UNVERIFIED, m.ERROR, m.EXPIRED].includes(T) ? F() : n(6, b = !0);
  }
  function Ze() {
    T === m.VERIFYING && alert(o.waitAlert);
  }
  function ee(i) {
    clearTimeout(q), i < 1 ? fe() : q = setTimeout(fe, i);
  }
  function He(i) {
    i.auto !== void 0 && (n(0, s = i.auto), s === "onload" && F()), i.expire !== void 0 && (ee(i.expire), n(13, k = i.expire)), i.challenge && (ae(i.challenge), r = i.challenge), i.debug !== void 0 && n(12, a = !!i.debug), i.hidefooter !== void 0 && n(1, w = !!i.hidefooter), i.hidelogo !== void 0 && n(2, R = !!i.hidelogo), i.maxnumber !== void 0 && n(14, j = +i.maxnumber), i.mockerror !== void 0 && n(15, _ = !!i.mockerror), i.name !== void 0 && n(3, M = i.name), i.test !== void 0 && n(16, A = !!i.test), i.strings && n(24, l = i.strings);
  }
  function W(i = m.UNVERIFIED, g = null) {
    clearTimeout(q), n(6, b = !1), n(8, z = g), n(4, H = null), n(5, T = i);
  }
  async function F() {
    return W(m.VERIFYING), Ge().then((i) => (ae(i), L("challenge", i), Te(i))).then(({ data: i, solution: g }) => {
      if (L("solution", g), (g == null ? void 0 : g.number) !== void 0)
        L("verified"), n(5, T = m.VERIFIED), n(6, b = !0), n(4, H = Me(i, g)), L("payload", H), lt().then(() => {
          $("verified", { payload: H });
        });
      else
        throw new Error("Unexpected result returned.");
    }).catch((i) => {
      L(i), n(5, T = m.ERROR), n(6, b = !1), n(8, z = i.message);
    });
  }
  function Fe() {
    b = this.checked, n(6, b);
  }
  function Oe(i) {
    ie[i ? "unshift" : "push"](() => {
      h = i, n(7, h);
    });
  }
  return t.$$set = (i) => {
    "auto" in i && n(0, s = i.auto), "challengeurl" in i && n(17, u = i.challengeurl), "challengejson" in i && n(18, f = i.challengejson), "debug" in i && n(12, a = i.debug), "expire" in i && n(13, k = i.expire), "hidefooter" in i && n(1, w = i.hidefooter), "hidelogo" in i && n(2, R = i.hidelogo), "name" in i && n(3, M = i.name), "maxnumber" in i && n(14, j = i.maxnumber), "mockerror" in i && n(15, _ = i.mockerror), "strings" in i && n(19, V = i.strings), "test" in i && n(16, A = i.test), "workers" in i && n(20, x = i.workers);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*challengejson*/
    262144 && (r = f ? Ee(f) : void 0), t.$$.dirty[0] & /*strings*/
    524288 && n(24, l = V ? Ee(V) : {}), t.$$.dirty[0] & /*parsedStrings*/
    16777216 && n(9, o = {
      error: "Verification failed. Try again later.",
      expired: "Verification expired. Try again.",
      footer: `Protected by <a href="${Ae}" target="_blank">ALTCHA</a>`,
      label: "I'm not a robot",
      verified: "Verified",
      verifying: "Verifying...",
      waitAlert: "Verifying... please wait.",
      ...l
    }), t.$$.dirty[0] & /*payload, state*/
    48 && $("statechange", { payload: H, state: T });
  }, [
    s,
    w,
    R,
    M,
    H,
    T,
    b,
    h,
    z,
    o,
    Ve,
    Ze,
    a,
    k,
    j,
    _,
    A,
    u,
    f,
    V,
    x,
    He,
    W,
    F,
    l,
    Fe,
    Oe
  ];
}
class jt extends bt {
  constructor(e) {
    super(), dt(
      this,
      e,
      Nt,
      Rt,
      Ke,
      {
        auto: 0,
        challengeurl: 17,
        challengejson: 18,
        debug: 12,
        expire: 13,
        hidefooter: 1,
        hidelogo: 2,
        name: 3,
        maxnumber: 14,
        mockerror: 15,
        strings: 19,
        test: 16,
        workers: 20,
        configure: 21,
        reset: 22,
        verify: 23
      },
      kt,
      [-1, -1]
    );
  }
  get auto() {
    return this.$$.ctx[0];
  }
  set auto(e) {
    this.$$set({ auto: e }), E();
  }
  get challengeurl() {
    return this.$$.ctx[17];
  }
  set challengeurl(e) {
    this.$$set({ challengeurl: e }), E();
  }
  get challengejson() {
    return this.$$.ctx[18];
  }
  set challengejson(e) {
    this.$$set({ challengejson: e }), E();
  }
  get debug() {
    return this.$$.ctx[12];
  }
  set debug(e) {
    this.$$set({ debug: e }), E();
  }
  get expire() {
    return this.$$.ctx[13];
  }
  set expire(e) {
    this.$$set({ expire: e }), E();
  }
  get hidefooter() {
    return this.$$.ctx[1];
  }
  set hidefooter(e) {
    this.$$set({ hidefooter: e }), E();
  }
  get hidelogo() {
    return this.$$.ctx[2];
  }
  set hidelogo(e) {
    this.$$set({ hidelogo: e }), E();
  }
  get name() {
    return this.$$.ctx[3];
  }
  set name(e) {
    this.$$set({ name: e }), E();
  }
  get maxnumber() {
    return this.$$.ctx[14];
  }
  set maxnumber(e) {
    this.$$set({ maxnumber: e }), E();
  }
  get mockerror() {
    return this.$$.ctx[15];
  }
  set mockerror(e) {
    this.$$set({ mockerror: e }), E();
  }
  get strings() {
    return this.$$.ctx[19];
  }
  set strings(e) {
    this.$$set({ strings: e }), E();
  }
  get test() {
    return this.$$.ctx[16];
  }
  set test(e) {
    this.$$set({ test: e }), E();
  }
  get workers() {
    return this.$$.ctx[20];
  }
  set workers(e) {
    this.$$set({ workers: e }), E();
  }
  get configure() {
    return this.$$.ctx[21];
  }
  get reset() {
    return this.$$.ctx[22];
  }
  get verify() {
    return this.$$.ctx[23];
  }
}
customElements.define("altcha-widget", gt(jt, { auto: {}, challengeurl: {}, challengejson: {}, debug: { type: "Boolean" }, expire: {}, hidefooter: { type: "Boolean" }, hidelogo: { type: "Boolean" }, name: {}, maxnumber: {}, mockerror: { type: "Boolean" }, strings: {}, test: { type: "Boolean" }, workers: {} }, [], ["configure", "reset", "verify"], !1));
export {
  jt as Altcha
};
