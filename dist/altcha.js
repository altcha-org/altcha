var jt = Object.defineProperty;
var Pt = (n, e, t) => e in n ? jt(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var B = (n, e, t) => Pt(n, typeof e != "symbol" ? e + "" : e, t);
const ht = "KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2NvbnN0IGQ9bmV3IFRleHRFbmNvZGVyO2Z1bmN0aW9uIHAoZSl7cmV0dXJuWy4uLm5ldyBVaW50OEFycmF5KGUpXS5tYXAodD0+dC50b1N0cmluZygxNikucGFkU3RhcnQoMiwiMCIpKS5qb2luKCIiKX1hc3luYyBmdW5jdGlvbiBiKGUsdCxyKXtpZih0eXBlb2YgY3J5cHRvPiJ1Inx8ISgic3VidGxlImluIGNyeXB0byl8fCEoImRpZ2VzdCJpbiBjcnlwdG8uc3VidGxlKSl0aHJvdyBuZXcgRXJyb3IoIldlYiBDcnlwdG8gaXMgbm90IGF2YWlsYWJsZS4gU2VjdXJlIGNvbnRleHQgaXMgcmVxdWlyZWQgKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL1NlY3VyaXR5L1NlY3VyZV9Db250ZXh0cykuIik7cmV0dXJuIHAoYXdhaXQgY3J5cHRvLnN1YnRsZS5kaWdlc3Qoci50b1VwcGVyQ2FzZSgpLGQuZW5jb2RlKGUrdCkpKX1mdW5jdGlvbiB3KGUsdCxyPSJTSEEtMjU2IixuPTFlNixzPTApe2NvbnN0IG89bmV3IEFib3J0Q29udHJvbGxlcixhPURhdGUubm93KCk7cmV0dXJue3Byb21pc2U6KGFzeW5jKCk9Pntmb3IobGV0IGM9cztjPD1uO2MrPTEpe2lmKG8uc2lnbmFsLmFib3J0ZWQpcmV0dXJuIG51bGw7aWYoYXdhaXQgYih0LGMscik9PT1lKXJldHVybntudW1iZXI6Yyx0b29rOkRhdGUubm93KCktYX19cmV0dXJuIG51bGx9KSgpLGNvbnRyb2xsZXI6b319ZnVuY3Rpb24gaChlKXtjb25zdCB0PWF0b2IoZSkscj1uZXcgVWludDhBcnJheSh0Lmxlbmd0aCk7Zm9yKGxldCBuPTA7bjx0Lmxlbmd0aDtuKyspcltuXT10LmNoYXJDb2RlQXQobik7cmV0dXJuIHJ9ZnVuY3Rpb24gZyhlLHQ9MTIpe2NvbnN0IHI9bmV3IFVpbnQ4QXJyYXkodCk7Zm9yKGxldCBuPTA7bjx0O24rKylyW25dPWUlMjU2LGU9TWF0aC5mbG9vcihlLzI1Nik7cmV0dXJuIHJ9YXN5bmMgZnVuY3Rpb24gbShlLHQ9IiIscj0xZTYsbj0wKXtjb25zdCBzPSJBRVMtR0NNIixvPW5ldyBBYm9ydENvbnRyb2xsZXIsYT1EYXRlLm5vdygpLGw9YXN5bmMoKT0+e2ZvcihsZXQgdT1uO3U8PXI7dSs9MSl7aWYoby5zaWduYWwuYWJvcnRlZHx8IWN8fCF5KXJldHVybiBudWxsO3RyeXtjb25zdCBmPWF3YWl0IGNyeXB0by5zdWJ0bGUuZGVjcnlwdCh7bmFtZTpzLGl2OmcodSl9LGMseSk7aWYoZilyZXR1cm57Y2xlYXJUZXh0Om5ldyBUZXh0RGVjb2RlcigpLmRlY29kZShmKSx0b29rOkRhdGUubm93KCktYX19Y2F0Y2h7fX1yZXR1cm4gbnVsbH07bGV0IGM9bnVsbCx5PW51bGw7dHJ5e3k9aChlKTtjb25zdCB1PWF3YWl0IGNyeXB0by5zdWJ0bGUuZGlnZXN0KCJTSEEtMjU2IixkLmVuY29kZSh0KSk7Yz1hd2FpdCBjcnlwdG8uc3VidGxlLmltcG9ydEtleSgicmF3Iix1LHMsITEsWyJkZWNyeXB0Il0pfWNhdGNoe3JldHVybntwcm9taXNlOlByb21pc2UucmVqZWN0KCksY29udHJvbGxlcjpvfX1yZXR1cm57cHJvbWlzZTpsKCksY29udHJvbGxlcjpvfX1sZXQgaTtvbm1lc3NhZ2U9YXN5bmMgZT0+e2NvbnN0e3R5cGU6dCxwYXlsb2FkOnIsc3RhcnQ6bixtYXg6c309ZS5kYXRhO2xldCBvPW51bGw7aWYodD09PSJhYm9ydCIpaT09bnVsbHx8aS5hYm9ydCgpLGk9dm9pZCAwO2Vsc2UgaWYodD09PSJ3b3JrIil7aWYoIm9iZnVzY2F0ZWQiaW4gcil7Y29uc3R7a2V5OmEsb2JmdXNjYXRlZDpsfT1yfHx7fTtvPWF3YWl0IG0obCxhLHMsbil9ZWxzZXtjb25zdHthbGdvcml0aG06YSxjaGFsbGVuZ2U6bCxzYWx0OmN9PXJ8fHt9O289dyhsLGMsYSxzLG4pfWk9by5jb250cm9sbGVyLG8ucHJvbWlzZS50aGVuKGE9PntzZWxmLnBvc3RNZXNzYWdlKGEmJnsuLi5hLHdvcmtlcjohMH0pfSl9fX0pKCk7Cg==", Ft = (n) => Uint8Array.from(atob(n), (e) => e.charCodeAt(0)), nt = typeof self < "u" && self.Blob && new Blob([Ft(ht)], { type: "text/javascript;charset=utf-8" });
function Mt(n) {
  let e;
  try {
    if (e = nt && (self.URL || self.webkitURL).createObjectURL(nt), !e) throw "";
    const t = new Worker(e, {
      name: n == null ? void 0 : n.name
    });
    return t.addEventListener("error", () => {
      (self.URL || self.webkitURL).revokeObjectURL(e);
    }), t;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + ht,
      {
        name: n == null ? void 0 : n.name
      }
    );
  } finally {
    e && (self.URL || self.webkitURL).revokeObjectURL(e);
  }
}
function Ce() {
}
function Ut(n, e) {
  for (const t in e) n[t] = e[t];
  return (
    /** @type {T & S} */
    n
  );
}
function gt(n) {
  return n();
}
function rt() {
  return /* @__PURE__ */ Object.create(null);
}
function we(n) {
  n.forEach(gt);
}
function mt(n) {
  return typeof n == "function";
}
function Ht(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function Bt(n) {
  return Object.keys(n).length === 0;
}
function Dt(n, e, t, i) {
  if (n) {
    const o = bt(n, e, t, i);
    return n[0](o);
  }
}
function bt(n, e, t, i) {
  return n[1] && i ? Ut(t.ctx.slice(), n[1](i(e))) : t.ctx;
}
function Jt(n, e, t, i) {
  if (n[2] && i) {
    const o = n[2](i(t));
    if (e.dirty === void 0)
      return o;
    if (typeof o == "object") {
      const l = [], s = Math.max(e.dirty.length, o.length);
      for (let d = 0; d < s; d += 1)
        l[d] = e.dirty[d] | o[d];
      return l;
    }
    return e.dirty | o;
  }
  return e.dirty;
}
function Ot(n, e, t, i, o, l) {
  if (o) {
    const s = bt(e, t, i, l);
    n.p(s, o);
  }
}
function Kt(n) {
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
function $t(n, e, t) {
  const i = Qt(n);
  if (!i.getElementById(e)) {
    const o = A("style");
    o.id = e, o.textContent = t, qt(i, o);
  }
}
function Qt(n) {
  if (!n) return document;
  const e = n.getRootNode ? n.getRootNode() : n.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : n.ownerDocument;
}
function qt(n, e) {
  return L(
    /** @type {Document} */
    n.head || n,
    e
  ), e.sheet;
}
function T(n, e, t) {
  n.insertBefore(e, t || null);
}
function W(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function A(n) {
  return document.createElement(n);
}
function Q(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function en(n) {
  return document.createTextNode(n);
}
function $() {
  return en(" ");
}
function Le(n, e, t, i) {
  return n.addEventListener(e, t, i), () => n.removeEventListener(e, t, i);
}
function a(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
function tn(n) {
  return Array.from(n.childNodes);
}
function it(n, e, t) {
  n.classList.toggle(e, !!t);
}
function nn(n, e, { bubbles: t = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(n, { detail: e, bubbles: t, cancelable: i });
}
function rn(n) {
  const e = {};
  return n.childNodes.forEach(
    /** @param {Element} node */
    (t) => {
      e[t.slot || "default"] = !0;
    }
  ), e;
}
let pe;
function ve(n) {
  pe = n;
}
function Ge() {
  if (!pe) throw new Error("Function called outside component initialization");
  return pe;
}
function on(n) {
  Ge().$$.on_mount.push(n);
}
function ln(n) {
  Ge().$$.on_destroy.push(n);
}
function sn() {
  const n = Ge();
  return (e, t, { cancelable: i = !1 } = {}) => {
    const o = n.$$.callbacks[e];
    if (o) {
      const l = nn(
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
const ae = [], Ie = [];
let fe = [];
const ot = [], yt = /* @__PURE__ */ Promise.resolve();
let Ve = !1;
function vt() {
  Ve || (Ve = !0, yt.then(w));
}
function cn() {
  return vt(), yt;
}
function Se(n) {
  fe.push(n);
}
const ze = /* @__PURE__ */ new Set();
let ce = 0;
function w() {
  if (ce !== 0)
    return;
  const n = pe;
  do {
    try {
      for (; ce < ae.length; ) {
        const e = ae[ce];
        ce++, ve(e), an(e.$$);
      }
    } catch (e) {
      throw ae.length = 0, ce = 0, e;
    }
    for (ve(null), ae.length = 0, ce = 0; Ie.length; ) Ie.pop()();
    for (let e = 0; e < fe.length; e += 1) {
      const t = fe[e];
      ze.has(t) || (ze.add(t), t());
    }
    fe.length = 0;
  } while (ae.length);
  for (; ot.length; )
    ot.pop()();
  Ve = !1, ze.clear(), ve(n);
}
function an(n) {
  if (n.fragment !== null) {
    n.update(), we(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(Se);
  }
}
function fn(n) {
  const e = [], t = [];
  fe.forEach((i) => n.indexOf(i) === -1 ? e.push(i) : t.push(i)), t.forEach((i) => i()), fe = e;
}
const xe = /* @__PURE__ */ new Set();
let un;
function pt(n, e) {
  n && n.i && (xe.delete(n), n.i(e));
}
function dn(n, e, t, i) {
  if (n && n.o) {
    if (xe.has(n)) return;
    xe.add(n), un.c.push(() => {
      xe.delete(n);
    }), n.o(e);
  }
}
function hn(n, e, t) {
  const { fragment: i, after_update: o } = n.$$;
  i && i.m(e, t), Se(() => {
    const l = n.$$.on_mount.map(gt).filter(mt);
    n.$$.on_destroy ? n.$$.on_destroy.push(...l) : we(l), n.$$.on_mount = [];
  }), o.forEach(Se);
}
function gn(n, e) {
  const t = n.$$;
  t.fragment !== null && (fn(t.after_update), we(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function mn(n, e) {
  n.$$.dirty[0] === -1 && (ae.push(n), vt(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function bn(n, e, t, i, o, l, s = null, d = [-1]) {
  const h = pe;
  ve(n);
  const f = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: Ce,
    not_equal: o,
    bound: rt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (h ? h.$$.context : [])),
    // everything else
    callbacks: rt(),
    dirty: d,
    skip_bound: !1,
    root: e.target || h.$$.root
  };
  s && s(f.root);
  let I = !1;
  if (f.ctx = t ? t(n, e.props || {}, (v, P, ...F) => {
    const M = F.length ? F[0] : P;
    return f.ctx && o(f.ctx[v], f.ctx[v] = M) && (!f.skip_bound && f.bound[v] && f.bound[v](M), I && mn(n, v)), P;
  }) : [], f.update(), I = !0, we(f.before_update), f.fragment = i ? i(f.ctx) : !1, e.target) {
    if (e.hydrate) {
      const v = tn(e.target);
      f.fragment && f.fragment.l(v), v.forEach(W);
    } else
      f.fragment && f.fragment.c();
    e.intro && pt(n.$$.fragment), hn(n, e.target, e.anchor), w();
  }
  ve(h);
}
let wt;
typeof HTMLElement == "function" && (wt = class extends HTMLElement {
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
              s = A("slot"), l !== "default" && a(s, "name", l);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(f, I) {
              T(f, s, I);
            },
            d: function(f) {
              f && W(s);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, i = rn(this);
      for (const l of this.$$s)
        l in i && (t[l] = [e(l)]);
      for (const l of this.attributes) {
        const s = this.$$g_p(l.name);
        s in this.$$d || (this.$$d[s] = Ee(s, l.value, this.$$p_d, "toProp"));
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
            const s = Ee(
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
          const d = this.$$c.$on(l, s);
          this.$$l_u.set(s, d);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(e, t, i) {
    var o;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Ee(e, i, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [e]: this.$$d[e] }));
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
function Ee(n, e, t, i) {
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
function yn(n, e, t, i, o, l) {
  let s = class extends wt {
    constructor() {
      super(n, t, o), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Object.keys(e).map(
        (d) => (e[d].attribute || d).toLowerCase()
      );
    }
  };
  return Object.keys(e).forEach((d) => {
    Object.defineProperty(s.prototype, d, {
      get() {
        return this.$$c && d in this.$$c ? this.$$c[d] : this.$$d[d];
      },
      set(h) {
        var f;
        h = Ee(d, h, e), this.$$d[d] = h, (f = this.$$c) == null || f.$set({ [d]: h });
      }
    });
  }), i.forEach((d) => {
    Object.defineProperty(s.prototype, d, {
      get() {
        var h;
        return (h = this.$$c) == null ? void 0 : h[d];
      }
    });
  }), n.element = /** @type {any} */
  s, s;
}
class vn {
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
    gn(this, 1), this.$destroy = Ce;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!mt(t))
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
    this.$$set && !Bt(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const pn = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(pn);
const _t = new TextEncoder();
function wn(n) {
  return [...new Uint8Array(n)].map((e) => e.toString(16).padStart(2, "0")).join("");
}
async function _n(n, e = "SHA-256", t = 1e5) {
  const i = Date.now().toString(16);
  n || (n = Math.round(Math.random() * t));
  const o = await kt(i, n, e);
  return {
    algorithm: e,
    challenge: o,
    salt: i,
    signature: ""
  };
}
async function kt(n, e, t) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return wn(
    await crypto.subtle.digest(
      t.toUpperCase(),
      _t.encode(n + e)
    )
  );
}
function kn(n, e, t = "SHA-256", i = 1e6, o = 0) {
  const l = new AbortController(), s = Date.now();
  return {
    promise: (async () => {
      for (let h = o; h <= i; h += 1) {
        if (l.signal.aborted)
          return null;
        if (await kt(e, h, t) === n)
          return {
            number: h,
            took: Date.now() - s
          };
      }
      return null;
    })(),
    controller: l
  };
}
function xn() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function En(n) {
  const e = atob(n), t = new Uint8Array(e.length);
  for (let i = 0; i < e.length; i++)
    t[i] = e.charCodeAt(i);
  return t;
}
function Cn(n, e = 12) {
  const t = new Uint8Array(e);
  for (let i = 0; i < e; i++)
    t[i] = n % 256, n = Math.floor(n / 256);
  return t;
}
async function In(n, e = "", t = 1e6, i = 0) {
  const o = "AES-GCM", l = new AbortController(), s = Date.now(), d = async () => {
    for (let I = i; I <= t; I += 1) {
      if (l.signal.aborted || !h || !f)
        return null;
      try {
        const v = await crypto.subtle.decrypt(
          {
            name: o,
            iv: Cn(I)
          },
          h,
          f
        );
        if (v)
          return {
            clearText: new TextDecoder().decode(v),
            took: Date.now() - s
          };
      } catch {
      }
    }
    return null;
  };
  let h = null, f = null;
  try {
    f = En(n);
    const I = await crypto.subtle.digest(
      "SHA-256",
      _t.encode(e)
    );
    h = await crypto.subtle.importKey(
      "raw",
      I,
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
    promise: d(),
    controller: l
  };
}
var m = /* @__PURE__ */ ((n) => (n.ERROR = "error", n.VERIFIED = "verified", n.VERIFYING = "verifying", n.UNVERIFIED = "unverified", n.EXPIRED = "expired", n))(m || {});
function Rn(n) {
  $t(n, "svelte-ddsc3z", '.altcha.svelte-ddsc3z.svelte-ddsc3z{background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);position:relative;text-align:left}.altcha.svelte-ddsc3z.svelte-ddsc3z:focus-within{border-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating].svelte-ddsc3z.svelte-ddsc3z{background:var(--altcha-color-base, white);display:none;filter:drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2));left:-100%;position:fixed;top:-100%;width:var(--altcha-max-width, 260px);z-index:999999}.altcha[data-floating=top].svelte-ddsc3z .altcha-anchor-arrow.svelte-ddsc3z{border-bottom-color:transparent;border-top-color:var(--altcha-color-border, #a0a0a0);bottom:-12px;top:auto}.altcha[data-floating=bottom].svelte-ddsc3z.svelte-ddsc3z:focus-within::after{border-bottom-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating=top].svelte-ddsc3z.svelte-ddsc3z:focus-within::after{border-top-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating].svelte-ddsc3z.svelte-ddsc3z:not([data-state=unverified]){display:block}.altcha-anchor-arrow.svelte-ddsc3z.svelte-ddsc3z{border:6px solid transparent;border-bottom-color:var(--altcha-color-border, #a0a0a0);content:"";height:0;left:12px;position:absolute;top:-12px;width:0}.altcha-main.svelte-ddsc3z.svelte-ddsc3z{align-items:center;display:flex;gap:0.4rem;padding:0.7rem}.altcha-label.svelte-ddsc3z.svelte-ddsc3z{flex-grow:1}.altcha-label.svelte-ddsc3z label.svelte-ddsc3z{cursor:pointer}.altcha-logo.svelte-ddsc3z.svelte-ddsc3z{color:currentColor;opacity:0.3}.altcha-logo.svelte-ddsc3z.svelte-ddsc3z:hover{opacity:1}.altcha-error.svelte-ddsc3z.svelte-ddsc3z{color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem}.altcha-footer.svelte-ddsc3z.svelte-ddsc3z{align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.4;padding:0.2rem 0.7rem;text-align:right}.altcha-footer.svelte-ddsc3z.svelte-ddsc3z:hover{opacity:1}.altcha-footer.svelte-ddsc3z>.svelte-ddsc3z:first-child{flex-grow:1}.altcha-footer.svelte-ddsc3z a{color:currentColor}.altcha-checkbox.svelte-ddsc3z.svelte-ddsc3z{display:flex;align-items:center;height:24px;width:24px}.altcha-checkbox.svelte-ddsc3z input.svelte-ddsc3z{width:18px;height:18px;margin:0}.altcha-hidden.svelte-ddsc3z.svelte-ddsc3z{display:none}.altcha-spinner.svelte-ddsc3z.svelte-ddsc3z{animation:svelte-ddsc3z-altcha-spinner 0.75s infinite linear;transform-origin:center}@keyframes svelte-ddsc3z-altcha-spinner{100%{transform:rotate(360deg)}}');
}
function lt(n) {
  let e, t, i;
  return {
    c() {
      e = Q("svg"), t = Q("path"), i = Q("path"), a(t, "d", "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"), a(t, "fill", "currentColor"), a(t, "opacity", ".25"), a(i, "d", "M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"), a(i, "fill", "currentColor"), a(i, "class", "altcha-spinner svelte-ddsc3z"), a(e, "width", "24"), a(e, "height", "24"), a(e, "viewBox", "0 0 24 24"), a(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(o, l) {
      T(o, e, l), L(e, t), L(e, i);
    },
    d(o) {
      o && W(e);
    }
  };
}
function Ln(n) {
  let e, t = (
    /*_strings*/
    n[11].label + ""
  ), i;
  return {
    c() {
      e = A("label"), a(e, "for", i = /*name*/
      n[4] + "_checkbox"), a(e, "class", "svelte-ddsc3z");
    },
    m(o, l) {
      T(o, e, l), e.innerHTML = t;
    },
    p(o, l) {
      l[0] & /*_strings*/
      2048 && t !== (t = /*_strings*/
      o[11].label + "") && (e.innerHTML = t), l[0] & /*name*/
      16 && i !== (i = /*name*/
      o[4] + "_checkbox") && a(e, "for", i);
    },
    d(o) {
      o && W(e);
    }
  };
}
function zn(n) {
  let e, t = (
    /*_strings*/
    n[11].verifying + ""
  );
  return {
    c() {
      e = A("span");
    },
    m(i, o) {
      T(i, e, o), e.innerHTML = t;
    },
    p(i, o) {
      o[0] & /*_strings*/
      2048 && t !== (t = /*_strings*/
      i[11].verifying + "") && (e.innerHTML = t);
    },
    d(i) {
      i && W(e);
    }
  };
}
function Vn(n) {
  let e, t = (
    /*_strings*/
    n[11].verified + ""
  ), i, o;
  return {
    c() {
      e = A("span"), i = $(), o = A("input"), a(o, "type", "hidden"), a(
        o,
        "name",
        /*name*/
        n[4]
      ), o.value = /*payload*/
      n[6];
    },
    m(l, s) {
      T(l, e, s), e.innerHTML = t, T(l, i, s), T(l, o, s);
    },
    p(l, s) {
      s[0] & /*_strings*/
      2048 && t !== (t = /*_strings*/
      l[11].verified + "") && (e.innerHTML = t), s[0] & /*name*/
      16 && a(
        o,
        "name",
        /*name*/
        l[4]
      ), s[0] & /*payload*/
      64 && (o.value = /*payload*/
      l[6]);
    },
    d(l) {
      l && (W(e), W(i), W(o));
    }
  };
}
function st(n) {
  let e, t, i, o, l, s, d;
  return {
    c() {
      e = A("div"), t = A("a"), i = Q("svg"), o = Q("path"), l = Q("path"), s = Q("path"), a(o, "d", "M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z"), a(o, "fill", "currentColor"), a(l, "d", "M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z"), a(l, "fill", "currentColor"), a(s, "d", "M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z"), a(s, "fill", "currentColor"), a(i, "width", "22"), a(i, "height", "22"), a(i, "viewBox", "0 0 20 20"), a(i, "fill", "none"), a(i, "xmlns", "http://www.w3.org/2000/svg"), a(t, "href", xt), a(t, "target", "_blank"), a(t, "class", "altcha-logo svelte-ddsc3z"), a(t, "aria-label", d = /*_strings*/
      n[11].ariaLinkLabel);
    },
    m(h, f) {
      T(h, e, f), L(e, t), L(t, i), L(i, o), L(i, l), L(i, s);
    },
    p(h, f) {
      f[0] & /*_strings*/
      2048 && d !== (d = /*_strings*/
      h[11].ariaLinkLabel) && a(t, "aria-label", d);
    },
    d(h) {
      h && W(e);
    }
  };
}
function ct(n) {
  let e, t, i, o;
  function l(h, f) {
    return (
      /*state*/
      h[7] === m.EXPIRED ? Gn : Sn
    );
  }
  let s = l(n), d = s(n);
  return {
    c() {
      e = A("div"), t = Q("svg"), i = Q("path"), o = $(), d.c(), a(i, "stroke-linecap", "round"), a(i, "stroke-linejoin", "round"), a(i, "d", "M6 18L18 6M6 6l12 12"), a(t, "width", "14"), a(t, "height", "14"), a(t, "xmlns", "http://www.w3.org/2000/svg"), a(t, "fill", "none"), a(t, "viewBox", "0 0 24 24"), a(t, "stroke-width", "1.5"), a(t, "stroke", "currentColor"), a(e, "class", "altcha-error svelte-ddsc3z");
    },
    m(h, f) {
      T(h, e, f), L(e, t), L(t, i), L(e, o), d.m(e, null);
    },
    p(h, f) {
      s === (s = l(h)) && d ? d.p(h, f) : (d.d(1), d = s(h), d && (d.c(), d.m(e, null)));
    },
    d(h) {
      h && W(e), d.d();
    }
  };
}
function Sn(n) {
  let e, t = (
    /*_strings*/
    n[11].error + ""
  );
  return {
    c() {
      e = A("div"), a(
        e,
        "title",
        /*error*/
        n[5]
      );
    },
    m(i, o) {
      T(i, e, o), e.innerHTML = t;
    },
    p(i, o) {
      o[0] & /*_strings*/
      2048 && t !== (t = /*_strings*/
      i[11].error + "") && (e.innerHTML = t), o[0] & /*error*/
      32 && a(
        e,
        "title",
        /*error*/
        i[5]
      );
    },
    d(i) {
      i && W(e);
    }
  };
}
function Gn(n) {
  let e, t = (
    /*_strings*/
    n[11].expired + ""
  );
  return {
    c() {
      e = A("div"), a(
        e,
        "title",
        /*error*/
        n[5]
      );
    },
    m(i, o) {
      T(i, e, o), e.innerHTML = t;
    },
    p(i, o) {
      o[0] & /*_strings*/
      2048 && t !== (t = /*_strings*/
      i[11].expired + "") && (e.innerHTML = t), o[0] & /*error*/
      32 && a(
        e,
        "title",
        /*error*/
        i[5]
      );
    },
    d(i) {
      i && W(e);
    }
  };
}
function at(n) {
  let e, t, i = (
    /*_strings*/
    n[11].footer + ""
  );
  return {
    c() {
      e = A("div"), t = A("div"), a(t, "class", "svelte-ddsc3z"), a(e, "class", "altcha-footer svelte-ddsc3z");
    },
    m(o, l) {
      T(o, e, l), L(e, t), t.innerHTML = i;
    },
    p(o, l) {
      l[0] & /*_strings*/
      2048 && i !== (i = /*_strings*/
      o[11].footer + "") && (t.innerHTML = i);
    },
    d(o) {
      o && W(e);
    }
  };
}
function ft(n) {
  let e;
  return {
    c() {
      e = A("div"), a(e, "class", "altcha-anchor-arrow svelte-ddsc3z");
    },
    m(t, i) {
      T(t, e, i), n[48](e);
    },
    p: Ce,
    d(t) {
      t && W(e), n[48](null);
    }
  };
}
function Nn(n) {
  let e, t, i, o, l, s, d, h, f, I, v, P, F, M, S, z, O;
  const K = (
    /*#slots*/
    n[46].default
  ), Z = Dt(
    K,
    n,
    /*$$scope*/
    n[45],
    null
  );
  let G = (
    /*state*/
    n[7] === m.VERIFYING && lt()
  );
  function q(u, b) {
    return (
      /*state*/
      u[7] === m.VERIFIED ? Vn : (
        /*state*/
        u[7] === m.VERIFYING ? zn : Ln
      )
    );
  }
  let D = q(n), Y = D(n), x = (
    /*hidelogo*/
    (n[3] !== !0 || /*isFreeSaaS*/
    n[12]) && st(n)
  ), N = (
    /*error*/
    (n[5] || /*state*/
    n[7] === m.EXPIRED) && ct(n)
  ), V = (
    /*_strings*/
    n[11].footer && /*hidefooter*/
    (n[2] !== !0 || /*isFreeSaaS*/
    n[12]) && at(n)
  ), _ = (
    /*floating*/
    n[1] && ft(n)
  );
  return {
    c() {
      Z && Z.c(), e = $(), t = A("div"), i = A("div"), G && G.c(), o = $(), l = A("div"), s = A("input"), f = $(), I = A("div"), Y.c(), v = $(), x && x.c(), P = $(), N && N.c(), F = $(), V && V.c(), M = $(), _ && _.c(), a(s, "type", "checkbox"), a(s, "id", d = /*name*/
      n[4] + "_checkbox"), s.required = h = /*auto*/
      n[0] !== "onsubmit" && (!/*floating*/
      n[1] || /*auto*/
      n[0] !== "off"), a(s, "class", "svelte-ddsc3z"), a(l, "class", "altcha-checkbox svelte-ddsc3z"), it(
        l,
        "altcha-hidden",
        /*state*/
        n[7] === m.VERIFYING
      ), a(I, "class", "altcha-label svelte-ddsc3z"), a(i, "class", "altcha-main svelte-ddsc3z"), a(t, "class", "altcha svelte-ddsc3z"), a(
        t,
        "data-state",
        /*state*/
        n[7]
      ), a(
        t,
        "data-floating",
        /*floating*/
        n[1]
      );
    },
    m(u, b) {
      Z && Z.m(u, b), T(u, e, b), T(u, t, b), L(t, i), G && G.m(i, null), L(i, o), L(i, l), L(l, s), s.checked = /*checked*/
      n[8], L(i, f), L(i, I), Y.m(I, null), L(i, v), x && x.m(i, null), L(t, P), N && N.m(t, null), L(t, F), V && V.m(t, null), L(t, M), _ && _.m(t, null), n[49](t), S = !0, z || (O = [
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
      ], z = !0);
    },
    p(u, b) {
      Z && Z.p && (!S || b[1] & /*$$scope*/
      16384) && Ot(
        Z,
        K,
        u,
        /*$$scope*/
        u[45],
        S ? Jt(
          K,
          /*$$scope*/
          u[45],
          b,
          null
        ) : Kt(
          /*$$scope*/
          u[45]
        ),
        null
      ), /*state*/
      u[7] === m.VERIFYING ? G || (G = lt(), G.c(), G.m(i, o)) : G && (G.d(1), G = null), (!S || b[0] & /*name*/
      16 && d !== (d = /*name*/
      u[4] + "_checkbox")) && a(s, "id", d), (!S || b[0] & /*auto, floating*/
      3 && h !== (h = /*auto*/
      u[0] !== "onsubmit" && (!/*floating*/
      u[1] || /*auto*/
      u[0] !== "off"))) && (s.required = h), b[0] & /*checked*/
      256 && (s.checked = /*checked*/
      u[8]), (!S || b[0] & /*state*/
      128) && it(
        l,
        "altcha-hidden",
        /*state*/
        u[7] === m.VERIFYING
      ), D === (D = q(u)) && Y ? Y.p(u, b) : (Y.d(1), Y = D(u), Y && (Y.c(), Y.m(I, null))), /*hidelogo*/
      u[3] !== !0 || /*isFreeSaaS*/
      u[12] ? x ? x.p(u, b) : (x = st(u), x.c(), x.m(i, null)) : x && (x.d(1), x = null), /*error*/
      u[5] || /*state*/
      u[7] === m.EXPIRED ? N ? N.p(u, b) : (N = ct(u), N.c(), N.m(t, F)) : N && (N.d(1), N = null), /*_strings*/
      u[11].footer && /*hidefooter*/
      (u[2] !== !0 || /*isFreeSaaS*/
      u[12]) ? V ? V.p(u, b) : (V = at(u), V.c(), V.m(t, M)) : V && (V.d(1), V = null), /*floating*/
      u[1] ? _ ? _.p(u, b) : (_ = ft(u), _.c(), _.m(t, null)) : _ && (_.d(1), _ = null), (!S || b[0] & /*state*/
      128) && a(
        t,
        "data-state",
        /*state*/
        u[7]
      ), (!S || b[0] & /*floating*/
      2) && a(
        t,
        "data-floating",
        /*floating*/
        u[1]
      );
    },
    i(u) {
      S || (pt(Z, u), S = !0);
    },
    o(u) {
      dn(Z, u), S = !1;
    },
    d(u) {
      u && (W(e), W(t)), Z && Z.d(u), G && G.d(), Y.d(), x && x.d(), N && N.d(), V && V.d(), _ && _.d(), n[49](null), z = !1, we(O);
    }
  };
}
const ut = "Visit Altcha.org", xt = "https://altcha.org/";
function dt(n) {
  return JSON.parse(n);
}
function An(n, e, t) {
  var qe, et;
  let i, o, l, s, { $$slots: d = {}, $$scope: h } = e, { auto: f = void 0 } = e, { blockspam: I = void 0 } = e, { challengeurl: v = void 0 } = e, { challengejson: P = void 0 } = e, { debug: F = !1 } = e, { delay: M = 0 } = e, { expire: S = void 0 } = e, { floating: z = void 0 } = e, { floatinganchor: O = void 0 } = e, { floatingoffset: K = void 0 } = e, { hidefooter: Z = !1 } = e, { hidelogo: G = !1 } = e, { name: q = "altcha" } = e, { maxnumber: D = 1e6 } = e, { mockerror: Y = !1 } = e, { obfuscated: x = void 0 } = e, { plugins: N = void 0 } = e, { refetchonexpire: V = !0 } = e, { spamfilter: _ = !1 } = e, { strings: u = void 0 } = e, { test: b = !1 } = e, { verifyurl: ee = void 0 } = e, { workers: le = Math.min(16, navigator.hardwareConcurrency || 8) } = e, { workerurl: ue = void 0 } = e;
  const de = sn(), Ne = ["SHA-256", "SHA-384", "SHA-512"], Ae = (et = (qe = document.documentElement.lang) == null ? void 0 : qe.split("-")) == null ? void 0 : et[0];
  let re = !1, E, ie = null, se = null, y = null, he = null, J = null, oe = null, te = [], C = m.UNVERIFIED;
  ln(() => {
    Et(), y && (y.removeEventListener("submit", je), y.removeEventListener("reset", Pe), y.removeEventListener("focusin", Te), y = null), J && (clearTimeout(J), J = null), document.removeEventListener("click", Ye), document.removeEventListener("scroll", We), window.removeEventListener("resize", Me);
  }), on(() => {
    k("mounted", "1.0.6"), k("workers", le), zt(), k("plugins", te.length ? te.map((r) => r.constructor.pluginName).join(", ") : "none"), b && k("using test mode"), S && ke(S), f !== void 0 && k("auto", f), z !== void 0 && Ue(z), y = E.closest("form"), y && (y.addEventListener("submit", je, { capture: !0 }), y.addEventListener("reset", Pe), f === "onfocus" && y.addEventListener("focusin", Te)), f === "onload" && (x ? ge() : ne()), i && (Z || G) && k("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      de("load");
    });
  });
  function Xe(r, c) {
    return btoa(JSON.stringify({
      algorithm: r.algorithm,
      challenge: r.challenge,
      number: c.number,
      salt: r.salt,
      signature: r.signature,
      test: b ? !0 : void 0,
      took: c.took
    }));
  }
  function Et() {
    for (const r of te)
      r.destroy();
  }
  function Ze() {
    v && V && C === m.VERIFIED ? ne() : me(m.EXPIRED, s.expired);
  }
  async function Ct() {
    var r;
    if (Y)
      throw k("mocking error"), new Error("Mocked error.");
    if (o)
      return k("using provided json data"), o;
    if (b)
      return k("generating test challenge", { test: b }), _n(typeof b != "boolean" ? +b : void 0);
    {
      if (!v && y) {
        const p = y.getAttribute("action");
        p != null && p.includes("/form/") && t(15, v = p + "/altcha");
      }
      if (!v)
        throw new Error("Attribute challengeurl not set.");
      k("fetching challenge from", v);
      const c = await fetch(v, {
        headers: _ ? { "x-altcha-spam-filter": "1" } : {}
      });
      if (c.status !== 200)
        throw new Error(`Server responded with ${c.status}.`);
      const g = c.headers.get("Expires"), R = c.headers.get("X-Altcha-Config"), U = await c.json(), j = new URLSearchParams((r = U.salt.split("?")) == null ? void 0 : r[1]), X = j.get("expires") || j.get("expire");
      if (X) {
        const p = new Date(+X * 1e3), H = isNaN(p.getTime()) ? 0 : p.getTime() - Date.now();
        H > 0 && ke(H);
      }
      if (R)
        try {
          const p = JSON.parse(R);
          p && typeof p == "object" && (p.verifyurl && (p.verifyurl = new URL(p.verifyurl, new URL(v)).toString()), De(p));
        } catch (p) {
          k("unable to configure from X-Altcha-Config", p);
        }
      if (!S && (g != null && g.length)) {
        const p = Date.parse(g);
        if (p) {
          const H = p - Date.now();
          H > 0 && ke(H);
        }
      }
      return U;
    }
  }
  function It(r) {
    var g;
    const c = y == null ? void 0 : y.querySelector(typeof r == "string" ? `input[name="${r}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((g = c == null ? void 0 : c.value) == null ? void 0 : g.slice(c.value.indexOf("@"))) || void 0;
  }
  function Rt() {
    return _ === "ipAddress" ? {
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
    } : typeof _ == "object" ? _ : {
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
  function Lt(r) {
    return [
      ...(y == null ? void 0 : y.querySelectorAll(r != null && r.length ? r.map((g) => `input[name="${g}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (g, R) => {
        const U = R.name, j = R.value;
        return U && j && (g[U] = /\n/.test(j) ? j.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : j), g;
      },
      {}
    );
  }
  function zt() {
    const r = N !== void 0 ? N.split(",") : void 0;
    for (const c of globalThis.altchaPlugins)
      (!r || r.includes(c.pluginName)) && te.push(new c({
        el: E,
        clarify: ge,
        dispatch: de,
        getConfiguration: Je,
        getFloatingAnchor: Oe,
        getState: Ke,
        log: k,
        reset: me,
        solve: Be,
        setState: Qe,
        setFloatingAnchor: $e,
        verify: ne
      }));
  }
  function k(...r) {
    (F || r.some((c) => c instanceof Error)) && console[r[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${q}]`, ...r);
  }
  function Vt() {
    [m.UNVERIFIED, m.ERROR, m.EXPIRED].includes(C) ? _ && (y == null ? void 0 : y.reportValidity()) === !1 ? t(8, re = !1) : x ? ge() : ne() : t(8, re = !0);
  }
  function Ye(r) {
    const c = r.target;
    z && c && !E.contains(c) && (C === m.VERIFIED || f === "off" && C === m.UNVERIFIED) && t(9, E.style.display = "none", E);
  }
  function We() {
    z && C !== m.UNVERIFIED && _e();
  }
  function St(r) {
    for (const c of te)
      typeof c.onErrorChange == "function" && c.onErrorChange(he);
  }
  function Te(r) {
    C === m.UNVERIFIED && ne();
  }
  function je(r) {
    y && f === "onsubmit" ? C === m.UNVERIFIED ? (r.preventDefault(), r.stopPropagation(), ne().then(() => {
      y == null || y.requestSubmit();
    })) : C !== m.VERIFIED && (r.preventDefault(), r.stopPropagation(), C === m.VERIFYING && Fe()) : y && z && f === "off" && C === m.UNVERIFIED && (r.preventDefault(), r.stopPropagation(), t(9, E.style.display = "block", E), _e());
  }
  function Pe() {
    me();
  }
  function Fe() {
    C === m.VERIFYING && s.waitAlert && alert(s.waitAlert);
  }
  function Gt(r) {
    for (const c of te)
      typeof c.onStateChange == "function" && c.onStateChange(C);
    z && C !== m.UNVERIFIED && requestAnimationFrame(() => {
      _e();
    }), t(8, re = C === m.VERIFIED);
  }
  function Me() {
    z && _e();
  }
  function _e(r = 20) {
    if (E)
      if (se || (se = (O ? document.querySelector(O) : y == null ? void 0 : y.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || y), se) {
        const c = parseInt(K, 10) || 12, g = se.getBoundingClientRect(), R = E.getBoundingClientRect(), U = document.documentElement.clientHeight, j = document.documentElement.clientWidth, X = z === "auto" ? g.bottom + R.height + c + r > U : z === "top", p = Math.max(r, Math.min(j - r - R.width, g.left + g.width / 2 - R.width / 2));
        if (X ? t(9, E.style.top = `${g.top - (R.height + c)}px`, E) : t(9, E.style.top = `${g.bottom + c}px`, E), t(9, E.style.left = `${p}px`, E), E.setAttribute("data-floating", X ? "top" : "bottom"), ie) {
          const H = ie.getBoundingClientRect();
          t(10, ie.style.left = g.left - p + g.width / 2 - H.width / 2 + "px", ie);
        }
      } else
        k("unable to find floating anchor element");
  }
  async function Nt(r) {
    if (!ee)
      throw new Error("Attribute verifyurl not set.");
    k("requesting server verification from", ee);
    const c = { payload: r };
    if (_) {
      const { blockedCountries: U, classifier: j, disableRules: X, email: p, expectedLanguages: H, expectedCountries: Re, fields: be, ipAddress: ye, text: Tt, timeZone: tt } = Rt();
      c.blockedCountries = U, c.classifier = j, c.disableRules = X, c.email = p === !1 ? void 0 : It(p), c.expectedCountries = Re, c.expectedLanguages = H || (Ae ? [Ae] : void 0), c.fields = be === !1 ? void 0 : Lt(be), c.ipAddress = ye === !1 ? void 0 : ye || "auto", c.text = Tt, c.timeZone = tt === !1 ? void 0 : tt || xn();
    }
    const g = await fetch(ee, {
      body: JSON.stringify(c),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (g.status !== 200)
      throw new Error(`Server responded with ${g.status}.`);
    const R = await g.json();
    if (R != null && R.payload && t(6, oe = R.payload), de("serververification", R), I && R.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  function ke(r) {
    k("expire", r), J && (clearTimeout(J), J = null), r < 1 ? Ze() : J = setTimeout(Ze, r);
  }
  function Ue(r) {
    k("floating", r), z !== r && (t(9, E.style.left = "", E), t(9, E.style.top = "", E)), t(1, z = r === !0 || r === "" ? "auto" : r === !1 || r === "false" ? void 0 : z), z ? (f || t(0, f = "onsubmit"), document.addEventListener("scroll", We), document.addEventListener("click", Ye), window.addEventListener("resize", Me)) : f === "onsubmit" && t(0, f = void 0);
  }
  function He(r) {
    if (!r.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (r.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!Ne.includes(r.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${Ne.join(", ")}`);
    if (!r.challenge || r.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!r.salt || r.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function Be(r) {
    let c = null;
    if ("Worker" in window) {
      try {
        c = await At(r, r.maxnumber);
      } catch (g) {
        k(g);
      }
      if ((c == null ? void 0 : c.number) !== void 0 || "obfuscated" in r)
        return { data: r, solution: c };
    }
    if ("obfuscated" in r) {
      const g = await In(r.obfuscated, r.key, r.maxnumber);
      return { data: r, solution: await g.promise };
    }
    return {
      data: r,
      solution: await kn(r.challenge, r.salt, r.algorithm, r.maxnumber || D).promise
    };
  }
  async function At(r, c = typeof b == "number" ? b : D, g = Math.ceil(le)) {
    const R = [];
    g = Math.min(16, Math.max(1, g));
    for (let X = 0; X < g; X++)
      R.push(altchaCreateWorker(ue));
    const U = Math.ceil(c / g), j = await Promise.all(R.map((X, p) => {
      const H = p * U;
      return new Promise((Re) => {
        X.addEventListener("message", (be) => {
          if (be.data)
            for (const ye of R)
              ye !== X && ye.postMessage({ type: "abort" });
          Re(be.data);
        }), X.postMessage({
          payload: r,
          max: H + U,
          start: H,
          type: "work"
        });
      });
    }));
    for (const X of R)
      X.terminate();
    return j.find((X) => !!X) || null;
  }
  async function ge() {
    if (!x) {
      t(7, C = m.ERROR);
      return;
    }
    const r = te.find((c) => c.constructor.pluginName === "obfuscation");
    if (!r || !("clarify" in r)) {
      t(7, C = m.ERROR), k("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in r && typeof r.clarify == "function")
      return r.clarify();
  }
  function De(r) {
    r.obfuscated !== void 0 && t(24, x = r.obfuscated), r.auto !== void 0 && (t(0, f = r.auto), f === "onload" && (x ? ge() : ne())), r.blockspam !== void 0 && t(16, I = !!r.blockspam), r.floatinganchor !== void 0 && t(20, O = r.floatinganchor), r.delay !== void 0 && t(18, M = r.delay), r.floatingoffset !== void 0 && t(21, K = r.floatingoffset), r.floating !== void 0 && Ue(r.floating), r.expire !== void 0 && (ke(r.expire), t(19, S = r.expire)), r.challenge && (He(r.challenge), o = r.challenge), r.challengeurl !== void 0 && t(15, v = r.challengeurl), r.debug !== void 0 && t(17, F = !!r.debug), r.hidefooter !== void 0 && t(2, Z = !!r.hidefooter), r.hidelogo !== void 0 && t(3, G = !!r.hidelogo), r.maxnumber !== void 0 && t(22, D = +r.maxnumber), r.mockerror !== void 0 && t(23, Y = !!r.mockerror), r.name !== void 0 && t(4, q = r.name), r.refetchonexpire !== void 0 && t(25, V = !!r.refetchonexpire), r.spamfilter !== void 0 && t(26, _ = typeof r.spamfilter == "object" ? r.spamfilter : !!r.spamfilter), r.strings && t(44, l = r.strings), r.test !== void 0 && t(27, b = typeof r.test == "number" ? r.test : !!r.test), r.verifyurl !== void 0 && t(28, ee = r.verifyurl), r.workers !== void 0 && t(29, le = +r.workers), r.workerurl !== void 0 && t(30, ue = r.workerurl);
  }
  function Je() {
    return {
      auto: f,
      blockspam: I,
      challengeurl: v,
      debug: F,
      delay: M,
      expire: S,
      floating: z,
      floatinganchor: O,
      floatingoffset: K,
      hidefooter: Z,
      hidelogo: G,
      name: q,
      maxnumber: D,
      mockerror: Y,
      obfuscated: x,
      refetchonexpire: V,
      spamfilter: _,
      strings: s,
      test: b,
      verifyurl: ee,
      workers: le,
      workerurl: ue
    };
  }
  function Oe() {
    return se;
  }
  function Xt(r) {
    return te.find((c) => c.constructor.pluginName === r);
  }
  function Ke() {
    return C;
  }
  function me(r = m.UNVERIFIED, c = null) {
    J && (clearTimeout(J), J = null), t(8, re = !1), t(5, he = c), t(6, oe = null), t(7, C = r);
  }
  function $e(r) {
    se = r;
  }
  function Qe(r, c = null) {
    t(7, C = r), t(5, he = c);
  }
  async function ne() {
    return me(m.VERIFYING), await new Promise((r) => setTimeout(r, M || 0)), Ct().then((r) => (He(r), k("challenge", r), Be(r))).then(({ data: r, solution: c }) => {
      if (k("solution", c), "challenge" in r && c && !("clearText" in c))
        if ((c == null ? void 0 : c.number) !== void 0) {
          if (ee)
            return Nt(Xe(r, c));
          t(6, oe = Xe(r, c)), k("payload", oe);
        } else
          throw k("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      t(7, C = m.VERIFIED), k("verified"), cn().then(() => {
        de("verified", { payload: oe });
      });
    }).catch((r) => {
      k(r), t(7, C = m.ERROR), t(5, he = r.message);
    });
  }
  function Zt() {
    re = this.checked, t(8, re);
  }
  function Yt(r) {
    Ie[r ? "unshift" : "push"](() => {
      ie = r, t(10, ie);
    });
  }
  function Wt(r) {
    Ie[r ? "unshift" : "push"](() => {
      E = r, t(9, E);
    });
  }
  return n.$$set = (r) => {
    "auto" in r && t(0, f = r.auto), "blockspam" in r && t(16, I = r.blockspam), "challengeurl" in r && t(15, v = r.challengeurl), "challengejson" in r && t(31, P = r.challengejson), "debug" in r && t(17, F = r.debug), "delay" in r && t(18, M = r.delay), "expire" in r && t(19, S = r.expire), "floating" in r && t(1, z = r.floating), "floatinganchor" in r && t(20, O = r.floatinganchor), "floatingoffset" in r && t(21, K = r.floatingoffset), "hidefooter" in r && t(2, Z = r.hidefooter), "hidelogo" in r && t(3, G = r.hidelogo), "name" in r && t(4, q = r.name), "maxnumber" in r && t(22, D = r.maxnumber), "mockerror" in r && t(23, Y = r.mockerror), "obfuscated" in r && t(24, x = r.obfuscated), "plugins" in r && t(32, N = r.plugins), "refetchonexpire" in r && t(25, V = r.refetchonexpire), "spamfilter" in r && t(26, _ = r.spamfilter), "strings" in r && t(33, u = r.strings), "test" in r && t(27, b = r.test), "verifyurl" in r && t(28, ee = r.verifyurl), "workers" in r && t(29, le = r.workers), "workerurl" in r && t(30, ue = r.workerurl), "$$scope" in r && t(45, h = r.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*challengeurl*/
    32768 | n.$$.dirty[1] & /*challengejson*/
    1 && t(12, i = P && new URL(P, location.origin).host.endsWith(".altcha.org") && !!(v != null && v.includes("apiKey=ckey_"))), n.$$.dirty[1] & /*challengejson*/
    1 && (o = P ? dt(P) : void 0), n.$$.dirty[1] & /*strings*/
    4 && t(44, l = u ? dt(u) : {}), n.$$.dirty[1] & /*parsedStrings*/
    8192 && t(11, s = {
      ariaLinkLabel: ut,
      error: "Verification failed. Try again later.",
      expired: "Verification expired. Try again.",
      footer: `Protected by <a href="${xt}" target="_blank" aria-label="${l.ariaLinkLabel || ut}">ALTCHA</a>`,
      label: "I'm not a robot",
      verified: "Verified",
      verifying: "Verifying...",
      waitAlert: "Verifying... please wait.",
      ...l
    }), n.$$.dirty[0] & /*payload, state*/
    192 && de("statechange", { payload: oe, state: C }), n.$$.dirty[0] & /*error*/
    32 && St(), n.$$.dirty[0] & /*state*/
    128 && Gt();
  }, [
    f,
    z,
    Z,
    G,
    q,
    he,
    oe,
    C,
    re,
    E,
    ie,
    s,
    i,
    Vt,
    Fe,
    v,
    I,
    F,
    M,
    S,
    O,
    K,
    D,
    Y,
    x,
    V,
    _,
    b,
    ee,
    le,
    ue,
    P,
    N,
    u,
    ge,
    De,
    Je,
    Oe,
    Xt,
    Ke,
    me,
    $e,
    Qe,
    ne,
    l,
    h,
    d,
    Zt,
    Yt,
    Wt
  ];
}
class Xn extends vn {
  constructor(e) {
    super(), bn(
      this,
      e,
      An,
      Nn,
      Ht,
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
      Rn,
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
    return this.$$.ctx[16];
  }
  set blockspam(e) {
    this.$$set({ blockspam: e }), w();
  }
  get challengeurl() {
    return this.$$.ctx[15];
  }
  set challengeurl(e) {
    this.$$set({ challengeurl: e }), w();
  }
  get challengejson() {
    return this.$$.ctx[31];
  }
  set challengejson(e) {
    this.$$set({ challengejson: e }), w();
  }
  get debug() {
    return this.$$.ctx[17];
  }
  set debug(e) {
    this.$$set({ debug: e }), w();
  }
  get delay() {
    return this.$$.ctx[18];
  }
  set delay(e) {
    this.$$set({ delay: e }), w();
  }
  get expire() {
    return this.$$.ctx[19];
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
    return this.$$.ctx[20];
  }
  set floatinganchor(e) {
    this.$$set({ floatinganchor: e }), w();
  }
  get floatingoffset() {
    return this.$$.ctx[21];
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
    return this.$$.ctx[22];
  }
  set maxnumber(e) {
    this.$$set({ maxnumber: e }), w();
  }
  get mockerror() {
    return this.$$.ctx[23];
  }
  set mockerror(e) {
    this.$$set({ mockerror: e }), w();
  }
  get obfuscated() {
    return this.$$.ctx[24];
  }
  set obfuscated(e) {
    this.$$set({ obfuscated: e }), w();
  }
  get plugins() {
    return this.$$.ctx[32];
  }
  set plugins(e) {
    this.$$set({ plugins: e }), w();
  }
  get refetchonexpire() {
    return this.$$.ctx[25];
  }
  set refetchonexpire(e) {
    this.$$set({ refetchonexpire: e }), w();
  }
  get spamfilter() {
    return this.$$.ctx[26];
  }
  set spamfilter(e) {
    this.$$set({ spamfilter: e }), w();
  }
  get strings() {
    return this.$$.ctx[33];
  }
  set strings(e) {
    this.$$set({ strings: e }), w();
  }
  get test() {
    return this.$$.ctx[27];
  }
  set test(e) {
    this.$$set({ test: e }), w();
  }
  get verifyurl() {
    return this.$$.ctx[28];
  }
  set verifyurl(e) {
    this.$$set({ verifyurl: e }), w();
  }
  get workers() {
    return this.$$.ctx[29];
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
customElements.define("altcha-widget", yn(
  Xn,
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
globalThis.altchaCreateWorker = (n) => n ? new Worker(new URL(n)) : new Mt();
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
export {
  Xn as Altcha
};
