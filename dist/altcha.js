var $t = Object.defineProperty;
var ut = (n) => {
  throw TypeError(n);
};
var en = (n, e, t) => e in n ? $t(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var D = (n, e, t) => en(n, typeof e != "symbol" ? e + "" : e, t), dt = (n, e, t) => e.has(n) || ut("Cannot " + t);
var W = (n, e, t) => (dt(n, e, "read from private field"), t ? t.call(n) : e.get(n)), fe = (n, e, t) => e.has(n) ? ut("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), ht = (n, e, t, i) => (dt(n, e, "write to private field"), i ? i.call(n, t) : e.set(n, t), t);
const Rt = "KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2NvbnN0IGY9bmV3IFRleHRFbmNvZGVyO2Z1bmN0aW9uIHAoZSl7cmV0dXJuWy4uLm5ldyBVaW50OEFycmF5KGUpXS5tYXAodD0+dC50b1N0cmluZygxNikucGFkU3RhcnQoMiwiMCIpKS5qb2luKCIiKX1hc3luYyBmdW5jdGlvbiB3KGUsdCxyKXtyZXR1cm4gcChhd2FpdCBjcnlwdG8uc3VidGxlLmRpZ2VzdChyLnRvVXBwZXJDYXNlKCksZi5lbmNvZGUoZSt0KSkpfWZ1bmN0aW9uIGIoZSx0LHI9IlNIQS0yNTYiLG49MWU2LHM9MCl7Y29uc3Qgbz1uZXcgQWJvcnRDb250cm9sbGVyLGE9RGF0ZS5ub3coKTtyZXR1cm57cHJvbWlzZTooYXN5bmMoKT0+e2ZvcihsZXQgYz1zO2M8PW47Yys9MSl7aWYoby5zaWduYWwuYWJvcnRlZClyZXR1cm4gbnVsbDtpZihhd2FpdCB3KHQsYyxyKT09PWUpcmV0dXJue251bWJlcjpjLHRvb2s6RGF0ZS5ub3coKS1hfX1yZXR1cm4gbnVsbH0pKCksY29udHJvbGxlcjpvfX1mdW5jdGlvbiBoKGUpe2NvbnN0IHQ9YXRvYihlKSxyPW5ldyBVaW50OEFycmF5KHQubGVuZ3RoKTtmb3IobGV0IG49MDtuPHQubGVuZ3RoO24rKylyW25dPXQuY2hhckNvZGVBdChuKTtyZXR1cm4gcn1mdW5jdGlvbiBnKGUsdD0xMil7Y29uc3Qgcj1uZXcgVWludDhBcnJheSh0KTtmb3IobGV0IG49MDtuPHQ7bisrKXJbbl09ZSUyNTYsZT1NYXRoLmZsb29yKGUvMjU2KTtyZXR1cm4gcn1hc3luYyBmdW5jdGlvbiBtKGUsdD0iIixyPTFlNixuPTApe2NvbnN0IHM9IkFFUy1HQ00iLG89bmV3IEFib3J0Q29udHJvbGxlcixhPURhdGUubm93KCksbD1hc3luYygpPT57Zm9yKGxldCB1PW47dTw9cjt1Kz0xKXtpZihvLnNpZ25hbC5hYm9ydGVkfHwhY3x8IXkpcmV0dXJuIG51bGw7dHJ5e2NvbnN0IGQ9YXdhaXQgY3J5cHRvLnN1YnRsZS5kZWNyeXB0KHtuYW1lOnMsaXY6Zyh1KX0sYyx5KTtpZihkKXJldHVybntjbGVhclRleHQ6bmV3IFRleHREZWNvZGVyKCkuZGVjb2RlKGQpLHRvb2s6RGF0ZS5ub3coKS1hfX1jYXRjaHt9fXJldHVybiBudWxsfTtsZXQgYz1udWxsLHk9bnVsbDt0cnl7eT1oKGUpO2NvbnN0IHU9YXdhaXQgY3J5cHRvLnN1YnRsZS5kaWdlc3QoIlNIQS0yNTYiLGYuZW5jb2RlKHQpKTtjPWF3YWl0IGNyeXB0by5zdWJ0bGUuaW1wb3J0S2V5KCJyYXciLHUscywhMSxbImRlY3J5cHQiXSl9Y2F0Y2h7cmV0dXJue3Byb21pc2U6UHJvbWlzZS5yZWplY3QoKSxjb250cm9sbGVyOm99fXJldHVybntwcm9taXNlOmwoKSxjb250cm9sbGVyOm99fWxldCBpO29ubWVzc2FnZT1hc3luYyBlPT57Y29uc3R7dHlwZTp0LHBheWxvYWQ6cixzdGFydDpuLG1heDpzfT1lLmRhdGE7bGV0IG89bnVsbDtpZih0PT09ImFib3J0IilpPT1udWxsfHxpLmFib3J0KCksaT12b2lkIDA7ZWxzZSBpZih0PT09IndvcmsiKXtpZigib2JmdXNjYXRlZCJpbiByKXtjb25zdHtrZXk6YSxvYmZ1c2NhdGVkOmx9PXJ8fHt9O289YXdhaXQgbShsLGEscyxuKX1lbHNle2NvbnN0e2FsZ29yaXRobTphLGNoYWxsZW5nZTpsLHNhbHQ6Y309cnx8e307bz1iKGwsYyxhLHMsbil9aT1vLmNvbnRyb2xsZXIsby5wcm9taXNlLnRoZW4oYT0+e3NlbGYucG9zdE1lc3NhZ2UoYSYmey4uLmEsd29ya2VyOiEwfSl9KX19fSkoKTsK", tn = (n) => Uint8Array.from(atob(n), (e) => e.charCodeAt(0)), mt = typeof self < "u" && self.Blob && new Blob([tn(Rt)], { type: "text/javascript;charset=utf-8" });
function nn(n) {
  let e;
  try {
    if (e = mt && (self.URL || self.webkitURL).createObjectURL(mt), !e) throw "";
    const t = new Worker(e, {
      name: n == null ? void 0 : n.name
    });
    return t.addEventListener("error", () => {
      (self.URL || self.webkitURL).revokeObjectURL(e);
    }), t;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + Rt,
      {
        name: n == null ? void 0 : n.name
      }
    );
  } finally {
    e && (self.URL || self.webkitURL).revokeObjectURL(e);
  }
}
function Se() {
}
function rn(n, e) {
  for (const t in e) n[t] = e[t];
  return (
    /** @type {T & S} */
    n
  );
}
function Lt(n) {
  return n();
}
function gt() {
  return /* @__PURE__ */ Object.create(null);
}
function Ie(n) {
  n.forEach(Lt);
}
function It(n) {
  return typeof n == "function";
}
function on(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function ln(n) {
  return Object.keys(n).length === 0;
}
function sn(n, e, t, i) {
  if (n) {
    const o = Tt(n, e, t, i);
    return n[0](o);
  }
}
function Tt(n, e, t, i) {
  return n[1] && i ? rn(t.ctx.slice(), n[1](i(e))) : t.ctx;
}
function cn(n, e, t, i) {
  if (n[2] && i) {
    const o = n[2](i(t));
    if (e.dirty === void 0)
      return o;
    if (typeof o == "object") {
      const l = [], s = Math.max(e.dirty.length, o.length);
      for (let c = 0; c < s; c += 1)
        l[c] = e.dirty[c] | o[c];
      return l;
    }
    return e.dirty | o;
  }
  return e.dirty;
}
function an(n, e, t, i, o, l) {
  if (o) {
    const s = Tt(e, t, i, l);
    n.p(s, o);
  }
}
function fn(n) {
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
function un(n, e, t) {
  const i = dn(n);
  if (!i.getElementById(e)) {
    const o = N("style");
    o.id = e, o.textContent = t, hn(i, o);
  }
}
function dn(n) {
  if (!n) return document;
  const e = n.getRootNode ? n.getRootNode() : n.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : n.ownerDocument;
}
function hn(n, e) {
  return L(
    /** @type {Document} */
    n.head || n,
    e
  ), e.sheet;
}
function Y(n, e, t) {
  n.insertBefore(e, t || null);
}
function S(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function N(n) {
  return document.createElement(n);
}
function ie(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function Nt(n) {
  return document.createTextNode(n);
}
function q() {
  return Nt(" ");
}
function mn() {
  return Nt("");
}
function De(n, e, t, i) {
  return n.addEventListener(e, t, i), () => n.removeEventListener(e, t, i);
}
function f(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
function gn(n) {
  return Array.from(n.childNodes);
}
function bt(n, e, t) {
  n.classList.toggle(e, !!t);
}
function bn(n, e, { bubbles: t = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(n, { detail: e, bubbles: t, cancelable: i });
}
function yn(n) {
  const e = {};
  return n.childNodes.forEach(
    /** @param {Element} node */
    (t) => {
      e[t.slot || "default"] = !0;
    }
  ), e;
}
let Ee;
function ke(n) {
  Ee = n;
}
function Me() {
  if (!Ee) throw new Error("Function called outside component initialization");
  return Ee;
}
function vn(n) {
  Me().$$.on_mount.push(n);
}
function wn(n) {
  Me().$$.on_destroy.push(n);
}
function pn() {
  const n = Me();
  return (e, t, { cancelable: i = !1 } = {}) => {
    const o = n.$$.callbacks[e];
    if (o) {
      const l = bn(
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
const de = [], Ze = [];
let he = [];
const yt = [], At = /* @__PURE__ */ Promise.resolve();
let Ue = !1;
function zt() {
  Ue || (Ue = !0, At.then(p));
}
function _n() {
  return zt(), At;
}
function Xe(n) {
  he.push(n);
}
const Ye = /* @__PURE__ */ new Set();
let ue = 0;
function p() {
  if (ue !== 0)
    return;
  const n = Ee;
  do {
    try {
      for (; ue < de.length; ) {
        const e = de[ue];
        ue++, ke(e), kn(e.$$);
      }
    } catch (e) {
      throw de.length = 0, ue = 0, e;
    }
    for (ke(null), de.length = 0, ue = 0; Ze.length; ) Ze.pop()();
    for (let e = 0; e < he.length; e += 1) {
      const t = he[e];
      Ye.has(t) || (Ye.add(t), t());
    }
    he.length = 0;
  } while (de.length);
  for (; yt.length; )
    yt.pop()();
  Ue = !1, Ye.clear(), ke(n);
}
function kn(n) {
  if (n.fragment !== null) {
    n.update(), Ie(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(Xe);
  }
}
function En(n) {
  const e = [], t = [];
  he.forEach((i) => n.indexOf(i) === -1 ? e.push(i) : t.push(i)), t.forEach((i) => i()), he = e;
}
const ze = /* @__PURE__ */ new Set();
let xn;
function Ft(n, e) {
  n && n.i && (ze.delete(n), n.i(e));
}
function Cn(n, e, t, i) {
  if (n && n.o) {
    if (ze.has(n)) return;
    ze.add(n), xn.c.push(() => {
      ze.delete(n);
    }), n.o(e);
  }
}
function Rn(n, e, t) {
  const { fragment: i, after_update: o } = n.$$;
  i && i.m(e, t), Xe(() => {
    const l = n.$$.on_mount.map(Lt).filter(It);
    n.$$.on_destroy ? n.$$.on_destroy.push(...l) : Ie(l), n.$$.on_mount = [];
  }), o.forEach(Xe);
}
function Ln(n, e) {
  const t = n.$$;
  t.fragment !== null && (En(t.after_update), Ie(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function In(n, e) {
  n.$$.dirty[0] === -1 && (de.push(n), zt(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Tn(n, e, t, i, o, l, s = null, c = [-1]) {
  const a = Ee;
  ke(n);
  const d = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: Se,
    not_equal: o,
    bound: gt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: gt(),
    dirty: c,
    skip_bound: !1,
    root: e.target || a.$$.root
  };
  s && s(d.root);
  let v = !1;
  if (d.ctx = t ? t(n, e.props || {}, (R, $, ...k) => {
    const K = k.length ? k[0] : $;
    return d.ctx && o(d.ctx[R], d.ctx[R] = K) && (!d.skip_bound && d.bound[R] && d.bound[R](K), v && In(n, R)), $;
  }) : [], d.update(), v = !0, Ie(d.before_update), d.fragment = i ? i(d.ctx) : !1, e.target) {
    if (e.hydrate) {
      const R = gn(e.target);
      d.fragment && d.fragment.l(R), R.forEach(S);
    } else
      d.fragment && d.fragment.c();
    e.intro && Ft(n.$$.fragment), Rn(n, e.target, e.anchor), p();
  }
  ke(a);
}
let St;
typeof HTMLElement == "function" && (St = class extends HTMLElement {
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
              s = N("slot"), l !== "default" && f(s, "name", l);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(d, v) {
              Y(d, s, v);
            },
            d: function(d) {
              d && S(s);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, i = yn(this);
      for (const l of this.$$s)
        l in i && (t[l] = [e(l)]);
      for (const l of this.attributes) {
        const s = this.$$g_p(l.name);
        s in this.$$d || (this.$$d[s] = Fe(s, l.value, this.$$p_d, "toProp"));
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
            const s = Fe(
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
          const c = this.$$c.$on(l, s);
          this.$$l_u.set(s, c);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(e, t, i) {
    var o;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Fe(e, i, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [e]: this.$$d[e] }));
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
function Fe(n, e, t, i) {
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
function Nn(n, e, t, i, o, l) {
  let s = class extends St {
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
    Object.defineProperty(s.prototype, c, {
      get() {
        return this.$$c && c in this.$$c ? this.$$c[c] : this.$$d[c];
      },
      set(a) {
        var d;
        a = Fe(c, a, e), this.$$d[c] = a, (d = this.$$c) == null || d.$set({ [c]: a });
      }
    });
  }), i.forEach((c) => {
    Object.defineProperty(s.prototype, c, {
      get() {
        var a;
        return (a = this.$$c) == null ? void 0 : a[c];
      }
    });
  }), n.element = /** @type {any} */
  s, s;
}
class An {
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
    Ln(this, 1), this.$destroy = Se;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!It(t))
      return Se;
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
    this.$$set && !ln(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const zn = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(zn);
const Zt = new TextEncoder();
function Fn(n) {
  return [...new Uint8Array(n)].map((e) => e.toString(16).padStart(2, "0")).join("");
}
async function Sn(n, e = "SHA-256", t = 1e5) {
  const i = Date.now().toString(16);
  n || (n = Math.round(Math.random() * t));
  const o = await Vt(i, n, e);
  return {
    algorithm: e,
    challenge: o,
    salt: i,
    signature: ""
  };
}
async function Vt(n, e, t) {
  return Fn(
    await crypto.subtle.digest(
      t.toUpperCase(),
      Zt.encode(n + e)
    )
  );
}
function Zn(n, e, t = "SHA-256", i = 1e6, o = 0) {
  const l = new AbortController(), s = Date.now();
  return {
    promise: (async () => {
      for (let a = o; a <= i; a += 1) {
        if (l.signal.aborted)
          return null;
        if (await Vt(e, a, t) === n)
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
function Ht() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function Vn(n) {
  const e = atob(n), t = new Uint8Array(e.length);
  for (let i = 0; i < e.length; i++)
    t[i] = e.charCodeAt(i);
  return t;
}
function Hn(n, e = 12) {
  const t = new Uint8Array(e);
  for (let i = 0; i < e; i++)
    t[i] = n % 256, n = Math.floor(n / 256);
  return t;
}
async function Gn(n, e = "", t = 1e6, i = 0) {
  const o = "AES-GCM", l = new AbortController(), s = Date.now(), c = async () => {
    for (let v = i; v <= t; v += 1) {
      if (l.signal.aborted || !a || !d)
        return null;
      try {
        const R = await crypto.subtle.decrypt(
          {
            name: o,
            iv: Hn(v)
          },
          a,
          d
        );
        if (R)
          return {
            clearText: new TextDecoder().decode(R),
            took: Date.now() - s
          };
      } catch {
      }
    }
    return null;
  };
  let a = null, d = null;
  try {
    d = Vn(n);
    const v = await crypto.subtle.digest(
      "SHA-256",
      Zt.encode(e)
    );
    a = await crypto.subtle.importKey(
      "raw",
      v,
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
    promise: c(),
    controller: l
  };
}
var me, ge, xe, Ce, Re, Le;
class Dn {
  constructor(e) {
    D(this, "beaconUrl", null);
    D(this, "error", null);
    D(this, "loadTime", Date.now());
    D(this, "submitTime", null);
    D(this, "startTime", null);
    D(this, "viewTimeThresholdMs", 1500);
    fe(this, me, {});
    fe(this, ge, null);
    fe(this, xe, this.onFormChange.bind(this));
    fe(this, Ce, this.onFormFocus.bind(this));
    fe(this, Re, this.onFormSubmit.bind(this));
    fe(this, Le, this.onUnload.bind(this));
    this.elForm = e, window.addEventListener("unload", W(this, Le)), this.elForm.addEventListener("change", W(this, xe)), this.elForm.addEventListener("focusin", W(this, Ce)), this.elForm.addEventListener("submit", W(this, Re));
  }
  data() {
    const e = Object.entries(W(this, me));
    return {
      correction: e.length && e.filter(([t, i]) => i > 1).length / e.length || 0,
      dropoff: !this.submitTime && !this.error && W(this, ge) ? W(this, ge) : null,
      error: this.error,
      mobile: this.isMobile(),
      start: this.startTime,
      submit: this.submitTime,
      tz: Ht()
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
    window.removeEventListener("unload", W(this, Le)), this.elForm.removeEventListener("change", W(this, xe)), this.elForm.removeEventListener("focusin", W(this, Ce)), this.elForm.removeEventListener("submit", W(this, Re));
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
      i && ht(this, ge, i);
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
    W(this, me)[e] = (W(this, me)[e] || 0) + 1;
  }
}
me = new WeakMap(), ge = new WeakMap(), xe = new WeakMap(), Ce = new WeakMap(), Re = new WeakMap(), Le = new WeakMap();
var y = /* @__PURE__ */ ((n) => (n.ERROR = "error", n.VERIFIED = "verified", n.VERIFYING = "verifying", n.UNVERIFIED = "unverified", n.EXPIRED = "expired", n))(y || {});
function Yn(n) {
  un(n, "svelte-ddsc3z", '.altcha.svelte-ddsc3z.svelte-ddsc3z{background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);position:relative;text-align:left}.altcha.svelte-ddsc3z.svelte-ddsc3z:focus-within{border-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating].svelte-ddsc3z.svelte-ddsc3z{background:var(--altcha-color-base, white);display:none;filter:drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2));left:-100%;position:fixed;top:-100%;width:var(--altcha-max-width, 260px);z-index:999999}.altcha[data-floating=top].svelte-ddsc3z .altcha-anchor-arrow.svelte-ddsc3z{border-bottom-color:transparent;border-top-color:var(--altcha-color-border, #a0a0a0);bottom:-12px;top:auto}.altcha[data-floating=bottom].svelte-ddsc3z.svelte-ddsc3z:focus-within::after{border-bottom-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating=top].svelte-ddsc3z.svelte-ddsc3z:focus-within::after{border-top-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating].svelte-ddsc3z.svelte-ddsc3z:not([data-state=unverified]){display:block}.altcha-anchor-arrow.svelte-ddsc3z.svelte-ddsc3z{border:6px solid transparent;border-bottom-color:var(--altcha-color-border, #a0a0a0);content:"";height:0;left:12px;position:absolute;top:-12px;width:0}.altcha-main.svelte-ddsc3z.svelte-ddsc3z{align-items:center;display:flex;gap:0.4rem;padding:0.7rem}.altcha-label.svelte-ddsc3z.svelte-ddsc3z{flex-grow:1}.altcha-label.svelte-ddsc3z label.svelte-ddsc3z{cursor:pointer}.altcha-logo.svelte-ddsc3z.svelte-ddsc3z{color:currentColor;opacity:0.3}.altcha-logo.svelte-ddsc3z.svelte-ddsc3z:hover{opacity:1}.altcha-error.svelte-ddsc3z.svelte-ddsc3z{color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem}.altcha-footer.svelte-ddsc3z.svelte-ddsc3z{align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.4;padding:0.2rem 0.7rem;text-align:right}.altcha-footer.svelte-ddsc3z.svelte-ddsc3z:hover{opacity:1}.altcha-footer.svelte-ddsc3z>.svelte-ddsc3z:first-child{flex-grow:1}.altcha-footer.svelte-ddsc3z a{color:currentColor}.altcha-checkbox.svelte-ddsc3z.svelte-ddsc3z{display:flex;align-items:center;height:24px;width:24px}.altcha-checkbox.svelte-ddsc3z input.svelte-ddsc3z{width:18px;height:18px;margin:0}.altcha-hidden.svelte-ddsc3z.svelte-ddsc3z{display:none}.altcha-spinner.svelte-ddsc3z.svelte-ddsc3z{animation:svelte-ddsc3z-altcha-spinner 0.75s infinite linear;transform-origin:center}@keyframes svelte-ddsc3z-altcha-spinner{100%{transform:rotate(360deg)}}');
}
function vt(n) {
  let e, t, i;
  return {
    c() {
      e = ie("svg"), t = ie("path"), i = ie("path"), f(t, "d", "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"), f(t, "fill", "currentColor"), f(t, "opacity", ".25"), f(i, "d", "M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"), f(i, "fill", "currentColor"), f(i, "class", "altcha-spinner svelte-ddsc3z"), f(e, "width", "24"), f(e, "height", "24"), f(e, "viewBox", "0 0 24 24"), f(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(o, l) {
      Y(o, e, l), L(e, t), L(e, i);
    },
    d(o) {
      o && S(e);
    }
  };
}
function Un(n) {
  let e, t = (
    /*_strings*/
    n[13].label + ""
  ), i;
  return {
    c() {
      e = N("label"), f(e, "for", i = /*name*/
      n[4] + "_checkbox"), f(e, "class", "svelte-ddsc3z");
    },
    m(o, l) {
      Y(o, e, l), e.innerHTML = t;
    },
    p(o, l) {
      l[0] & /*_strings*/
      8192 && t !== (t = /*_strings*/
      o[13].label + "") && (e.innerHTML = t), l[0] & /*name*/
      16 && i !== (i = /*name*/
      o[4] + "_checkbox") && f(e, "for", i);
    },
    d(o) {
      o && S(e);
    }
  };
}
function Xn(n) {
  let e, t = (
    /*_strings*/
    n[13].verifying + ""
  );
  return {
    c() {
      e = N("span");
    },
    m(i, o) {
      Y(i, e, o), e.innerHTML = t;
    },
    p(i, o) {
      o[0] & /*_strings*/
      8192 && t !== (t = /*_strings*/
      i[13].verifying + "") && (e.innerHTML = t);
    },
    d(i) {
      i && S(e);
    }
  };
}
function Mn(n) {
  let e, t = (
    /*_strings*/
    n[13].verified + ""
  ), i, o, l, s, c = (
    /*session*/
    n[11] && wt(n)
  );
  return {
    c() {
      e = N("span"), i = q(), o = N("input"), l = q(), c && c.c(), s = mn(), f(o, "type", "hidden"), f(
        o,
        "name",
        /*name*/
        n[4]
      ), o.value = /*payload*/
      n[6];
    },
    m(a, d) {
      Y(a, e, d), e.innerHTML = t, Y(a, i, d), Y(a, o, d), Y(a, l, d), c && c.m(a, d), Y(a, s, d);
    },
    p(a, d) {
      d[0] & /*_strings*/
      8192 && t !== (t = /*_strings*/
      a[13].verified + "") && (e.innerHTML = t), d[0] & /*name*/
      16 && f(
        o,
        "name",
        /*name*/
        a[4]
      ), d[0] & /*payload*/
      64 && (o.value = /*payload*/
      a[6]), /*session*/
      a[11] ? c ? c.p(a, d) : (c = wt(a), c.c(), c.m(s.parentNode, s)) : c && (c.d(1), c = null);
    },
    d(a) {
      a && (S(e), S(i), S(o), S(l), S(s)), c && c.d(a);
    }
  };
}
function wt(n) {
  let e;
  return {
    c() {
      e = N("input"), f(e, "type", "hidden"), f(e, "name", "__session"), e.value = /*sessionPayload*/
      n[12];
    },
    m(t, i) {
      Y(t, e, i);
    },
    p(t, i) {
      i[0] & /*sessionPayload*/
      4096 && (e.value = /*sessionPayload*/
      t[12]);
    },
    d(t) {
      t && S(e);
    }
  };
}
function pt(n) {
  let e, t, i, o, l, s, c;
  return {
    c() {
      e = N("div"), t = N("a"), i = ie("svg"), o = ie("path"), l = ie("path"), s = ie("path"), f(o, "d", "M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z"), f(o, "fill", "currentColor"), f(l, "d", "M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z"), f(l, "fill", "currentColor"), f(s, "d", "M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z"), f(s, "fill", "currentColor"), f(i, "width", "22"), f(i, "height", "22"), f(i, "viewBox", "0 0 20 20"), f(i, "fill", "none"), f(i, "xmlns", "http://www.w3.org/2000/svg"), f(t, "href", Gt), f(t, "target", "_blank"), f(t, "class", "altcha-logo svelte-ddsc3z"), f(t, "aria-label", c = /*_strings*/
      n[13].ariaLinkLabel);
    },
    m(a, d) {
      Y(a, e, d), L(e, t), L(t, i), L(i, o), L(i, l), L(i, s);
    },
    p(a, d) {
      d[0] & /*_strings*/
      8192 && c !== (c = /*_strings*/
      a[13].ariaLinkLabel) && f(t, "aria-label", c);
    },
    d(a) {
      a && S(e);
    }
  };
}
function _t(n) {
  let e, t, i, o;
  function l(a, d) {
    return (
      /*state*/
      a[7] === y.EXPIRED ? Wn : jn
    );
  }
  let s = l(n), c = s(n);
  return {
    c() {
      e = N("div"), t = ie("svg"), i = ie("path"), o = q(), c.c(), f(i, "stroke-linecap", "round"), f(i, "stroke-linejoin", "round"), f(i, "d", "M6 18L18 6M6 6l12 12"), f(t, "width", "14"), f(t, "height", "14"), f(t, "xmlns", "http://www.w3.org/2000/svg"), f(t, "fill", "none"), f(t, "viewBox", "0 0 24 24"), f(t, "stroke-width", "1.5"), f(t, "stroke", "currentColor"), f(e, "class", "altcha-error svelte-ddsc3z");
    },
    m(a, d) {
      Y(a, e, d), L(e, t), L(t, i), L(e, o), c.m(e, null);
    },
    p(a, d) {
      s === (s = l(a)) && c ? c.p(a, d) : (c.d(1), c = s(a), c && (c.c(), c.m(e, null)));
    },
    d(a) {
      a && S(e), c.d();
    }
  };
}
function jn(n) {
  let e, t = (
    /*_strings*/
    n[13].error + ""
  );
  return {
    c() {
      e = N("div"), f(
        e,
        "title",
        /*error*/
        n[5]
      );
    },
    m(i, o) {
      Y(i, e, o), e.innerHTML = t;
    },
    p(i, o) {
      o[0] & /*_strings*/
      8192 && t !== (t = /*_strings*/
      i[13].error + "") && (e.innerHTML = t), o[0] & /*error*/
      32 && f(
        e,
        "title",
        /*error*/
        i[5]
      );
    },
    d(i) {
      i && S(e);
    }
  };
}
function Wn(n) {
  let e, t = (
    /*_strings*/
    n[13].expired + ""
  );
  return {
    c() {
      e = N("div"), f(
        e,
        "title",
        /*error*/
        n[5]
      );
    },
    m(i, o) {
      Y(i, e, o), e.innerHTML = t;
    },
    p(i, o) {
      o[0] & /*_strings*/
      8192 && t !== (t = /*_strings*/
      i[13].expired + "") && (e.innerHTML = t), o[0] & /*error*/
      32 && f(
        e,
        "title",
        /*error*/
        i[5]
      );
    },
    d(i) {
      i && S(e);
    }
  };
}
function kt(n) {
  let e, t, i = (
    /*_strings*/
    n[13].footer + ""
  );
  return {
    c() {
      e = N("div"), t = N("div"), f(t, "class", "svelte-ddsc3z"), f(e, "class", "altcha-footer svelte-ddsc3z");
    },
    m(o, l) {
      Y(o, e, l), L(e, t), t.innerHTML = i;
    },
    p(o, l) {
      l[0] & /*_strings*/
      8192 && i !== (i = /*_strings*/
      o[13].footer + "") && (t.innerHTML = i);
    },
    d(o) {
      o && S(e);
    }
  };
}
function Et(n) {
  let e;
  return {
    c() {
      e = N("div"), f(e, "class", "altcha-anchor-arrow svelte-ddsc3z");
    },
    m(t, i) {
      Y(t, e, i), n[46](e);
    },
    p: Se,
    d(t) {
      t && S(e), n[46](null);
    }
  };
}
function Bn(n) {
  let e, t, i, o, l, s, c, a, d, v, R, $, k, K, X, ee, te;
  const A = (
    /*#slots*/
    n[44].default
  ), U = sn(
    A,
    n,
    /*$$scope*/
    n[43],
    null
  );
  let Z = (
    /*state*/
    n[7] === y.VERIFYING && vt()
  );
  function oe(h, x) {
    return (
      /*state*/
      h[7] === y.VERIFIED ? Mn : (
        /*state*/
        h[7] === y.VERIFYING ? Xn : Un
      )
    );
  }
  let ne = oe(n), j = ne(n), I = (
    /*hidelogo*/
    (n[3] !== !0 || /*isFreeSaaS*/
    n[14]) && pt(n)
  ), z = (
    /*error*/
    (n[5] || /*state*/
    n[7] === y.EXPIRED) && _t(n)
  ), E = (
    /*_strings*/
    n[13].footer && /*hidefooter*/
    (n[2] !== !0 || /*isFreeSaaS*/
    n[14]) && kt(n)
  ), F = (
    /*floating*/
    n[1] && Et(n)
  );
  return {
    c() {
      U && U.c(), e = q(), t = N("div"), i = N("div"), Z && Z.c(), o = q(), l = N("div"), s = N("input"), d = q(), v = N("div"), j.c(), R = q(), I && I.c(), $ = q(), z && z.c(), k = q(), E && E.c(), K = q(), F && F.c(), f(s, "type", "checkbox"), f(s, "id", c = /*name*/
      n[4] + "_checkbox"), s.required = a = /*auto*/
      n[0] !== "onsubmit", f(s, "class", "svelte-ddsc3z"), f(l, "class", "altcha-checkbox svelte-ddsc3z"), bt(
        l,
        "altcha-hidden",
        /*state*/
        n[7] === y.VERIFYING
      ), f(v, "class", "altcha-label svelte-ddsc3z"), f(i, "class", "altcha-main svelte-ddsc3z"), f(t, "class", "altcha svelte-ddsc3z"), f(
        t,
        "data-state",
        /*state*/
        n[7]
      ), f(
        t,
        "data-floating",
        /*floating*/
        n[1]
      );
    },
    m(h, x) {
      U && U.m(h, x), Y(h, e, x), Y(h, t, x), L(t, i), Z && Z.m(i, null), L(i, o), L(i, l), L(l, s), s.checked = /*checked*/
      n[8], L(i, d), L(i, v), j.m(v, null), L(i, R), I && I.m(i, null), L(t, $), z && z.m(t, null), L(t, k), E && E.m(t, null), L(t, K), F && F.m(t, null), n[47](t), X = !0, ee || (te = [
        De(
          s,
          "change",
          /*input_change_handler*/
          n[45]
        ),
        De(
          s,
          "change",
          /*onCheckedChange*/
          n[15]
        ),
        De(
          s,
          "invalid",
          /*onInvalid*/
          n[16]
        )
      ], ee = !0);
    },
    p(h, x) {
      U && U.p && (!X || x[1] & /*$$scope*/
      4096) && an(
        U,
        A,
        h,
        /*$$scope*/
        h[43],
        X ? cn(
          A,
          /*$$scope*/
          h[43],
          x,
          null
        ) : fn(
          /*$$scope*/
          h[43]
        ),
        null
      ), /*state*/
      h[7] === y.VERIFYING ? Z || (Z = vt(), Z.c(), Z.m(i, o)) : Z && (Z.d(1), Z = null), (!X || x[0] & /*name*/
      16 && c !== (c = /*name*/
      h[4] + "_checkbox")) && f(s, "id", c), (!X || x[0] & /*auto*/
      1 && a !== (a = /*auto*/
      h[0] !== "onsubmit")) && (s.required = a), x[0] & /*checked*/
      256 && (s.checked = /*checked*/
      h[8]), (!X || x[0] & /*state*/
      128) && bt(
        l,
        "altcha-hidden",
        /*state*/
        h[7] === y.VERIFYING
      ), ne === (ne = oe(h)) && j ? j.p(h, x) : (j.d(1), j = ne(h), j && (j.c(), j.m(v, null))), /*hidelogo*/
      h[3] !== !0 || /*isFreeSaaS*/
      h[14] ? I ? I.p(h, x) : (I = pt(h), I.c(), I.m(i, null)) : I && (I.d(1), I = null), /*error*/
      h[5] || /*state*/
      h[7] === y.EXPIRED ? z ? z.p(h, x) : (z = _t(h), z.c(), z.m(t, k)) : z && (z.d(1), z = null), /*_strings*/
      h[13].footer && /*hidefooter*/
      (h[2] !== !0 || /*isFreeSaaS*/
      h[14]) ? E ? E.p(h, x) : (E = kt(h), E.c(), E.m(t, K)) : E && (E.d(1), E = null), /*floating*/
      h[1] ? F ? F.p(h, x) : (F = Et(h), F.c(), F.m(t, null)) : F && (F.d(1), F = null), (!X || x[0] & /*state*/
      128) && f(
        t,
        "data-state",
        /*state*/
        h[7]
      ), (!X || x[0] & /*floating*/
      2) && f(
        t,
        "data-floating",
        /*floating*/
        h[1]
      );
    },
    i(h) {
      X || (Ft(U, h), X = !0);
    },
    o(h) {
      Cn(U, h), X = !1;
    },
    d(h) {
      h && (S(e), S(t)), U && U.d(h), Z && Z.d(), j.d(), I && I.d(), z && z.d(), E && E.d(), F && F.d(), n[47](null), ee = !1, Ie(te);
    }
  };
}
const xt = "Visit Altcha.org", Gt = "https://altcha.org/";
function Ct(n) {
  return JSON.parse(n);
}
function Kn(n, e, t) {
  var ct, at;
  let i, o, l, s, { $$slots: c = {}, $$scope: a } = e, { analytics: d = !1 } = e, { auto: v = void 0 } = e, { beaconurl: R = void 0 } = e, { blockspam: $ = void 0 } = e, { challengeurl: k = void 0 } = e, { challengejson: K = void 0 } = e, { debug: X = !1 } = e, { delay: ee = 0 } = e, { expire: te = void 0 } = e, { floating: A = void 0 } = e, { floatinganchor: U = void 0 } = e, { floatingoffset: Z = void 0 } = e, { hidefooter: oe = !1 } = e, { hidelogo: ne = !1 } = e, { name: j = "altcha" } = e, { maxnumber: I = 1e6 } = e, { mockerror: z = !1 } = e, { obfuscated: E = void 0 } = e, { refetchonexpire: F = !0 } = e, { spamfilter: h = !1 } = e, { strings: x = void 0 } = e, { test: P = !1 } = e, { verifyurl: le = void 0 } = e, { workers: be = Math.min(16, navigator.hardwareConcurrency || 8) } = e, { workerurl: Te = void 0 } = e;
  const Ve = pn(), je = ["SHA-256", "SHA-384", "SHA-512"], We = (at = (ct = document.documentElement.lang) == null ? void 0 : ct.split("-")) == null ? void 0 : at[0];
  let O = !1, J = null, _, se = null, Ne = null, b = null, re = null, ye = null, Q = null, ce = null, M = null, Be = null, T = y.UNVERIFIED;
  wn(() => {
    b && (b.removeEventListener("submit", Oe), b.removeEventListener("reset", Je), b.removeEventListener("focusin", Pe), b = null), re && _.removeEventListener("click", Ke), M && M.destroy(), Q && (clearTimeout(Q), Q = null), document.removeEventListener("click", nt), document.removeEventListener("scroll", rt), window.removeEventListener("resize", ot);
  }), vn(() => {
    var r, u;
    C("mounted", "0.8.0"), C("workers", be), P && C("using test mode"), te && Ae(te), v !== void 0 && C("auto", v), A !== void 0 && lt(A), b = _.closest("form"), b && (b.addEventListener("submit", Oe, { capture: !0 }), b.addEventListener("reset", Je), v === "onfocus" && b.addEventListener("focusin", Pe)), re = ((r = _.parentElement) == null ? void 0 : r.querySelector("[data-clarify-button]")) || ((u = _.parentElement) == null ? void 0 : u.querySelector("button, a")), re && re.addEventListener("click", Ke), d && $e(), v === "onload" && (E ? we() : ae()), i && (oe || ne) && C("Attributes hidefooter and hidelogo ignored because usage with free API Keys require attribution.");
  });
  function C(...r) {
    (X || r.some((u) => u instanceof Error)) && console[r[0] instanceof Error ? "error" : "log"]("ALTCHA", ...r);
  }
  function Ke(r) {
    r.preventDefault(), T === y.UNVERIFIED && we();
  }
  function Pe(r) {
    T === y.UNVERIFIED && ae();
  }
  function Oe(r) {
    b && M && T === y.VERIFIED && (M.end(), t(12, Be = M.dataAsBase64())), b && v === "onsubmit" && (T === y.UNVERIFIED ? (r.preventDefault(), r.stopPropagation(), ae().then(() => {
      b == null || b.requestSubmit();
    })) : T !== y.VERIFIED && (r.preventDefault(), r.stopPropagation(), T === y.VERIFYING && it()));
  }
  function Je() {
    ve();
  }
  function Qe(r, u) {
    return btoa(JSON.stringify({
      algorithm: r.algorithm,
      challenge: r.challenge,
      number: u.number,
      salt: r.salt,
      signature: r.signature,
      test: P ? !0 : void 0,
      took: u.took
    }));
  }
  function qe(r) {
    if (!r.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (r.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!je.includes(r.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${je.join(", ")}`);
    if (!r.challenge || r.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!r.salt || r.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function Dt() {
    var r;
    if (z)
      throw C("mocking error"), new Error("Mocked error.");
    if (o)
      return C("using provided json data"), o;
    if (P)
      return C("generating test challenge", { test: P }), Sn(typeof P != "boolean" ? +P : void 0);
    {
      if (!k && b) {
        const w = b.getAttribute("action");
        w != null && w.includes("/form/") && t(17, k = w + "/altcha");
      }
      if (!k)
        throw new Error("Attribute challengeurl not set.");
      C("fetching challenge from", k);
      const u = await fetch(k, {
        headers: h ? { "x-altcha-spam-filter": "1" } : {}
      });
      if (u.status !== 200)
        throw new Error(`Server responded with ${u.status}.`);
      const m = u.headers.get("Expires"), g = u.headers.get("X-Altcha-Config"), V = await u.json(), H = new URLSearchParams((r = V.salt.split("?")) == null ? void 0 : r[1]), G = H.get("expires") || H.get("expire");
      if (G) {
        const w = new Date(+G * 1e3), B = isNaN(w.getTime()) ? 0 : w.getTime() - Date.now();
        B > 0 && Ae(B);
      }
      if (g)
        try {
          const w = JSON.parse(g);
          w && typeof w == "object" && (w.verifyurl && (w.verifyurl = new URL(w.verifyurl, new URL(k)).toString()), st(w));
        } catch (w) {
          C("unable to configure from X-Altcha-Config", w);
        }
      if (!te && (m != null && m.length)) {
        const w = Date.parse(m);
        if (w) {
          const B = w - Date.now();
          B > 0 && Ae(B);
        }
      }
      return V;
    }
  }
  function $e() {
    if (!M)
      if (b) {
        if (C("analytics enabled"), t(11, M = new Dn(b)), R === void 0) {
          const r = b.getAttribute("action");
          r && t(19, R = r + "/beacon");
        }
        t(11, M.beaconUrl = R || null, M);
      } else
        C("analytics cannot be enabled - form element not found");
  }
  function et() {
    k && F && T === y.VERIFIED ? ae() : ve(y.EXPIRED, s.expired);
  }
  async function tt(r) {
    let u = null;
    if ("Worker" in window) {
      try {
        u = await Yt(r, r.maxnumber);
      } catch (m) {
        C(m);
      }
      if ((u == null ? void 0 : u.number) !== void 0 || "obfuscated" in r)
        return { data: r, solution: u };
    }
    if ("obfuscated" in r) {
      const m = await Gn(r.obfuscated, r.key, r.maxnumber);
      return { data: r, solution: await m.promise };
    }
    return {
      data: r,
      solution: await Zn(r.challenge, r.salt, r.algorithm, r.maxnumber || I).promise
    };
  }
  async function Yt(r, u = typeof P == "number" ? P : I, m = Math.ceil(be)) {
    const g = [];
    m = Math.min(16, Math.max(1, m));
    for (let G = 0; G < m; G++)
      g.push(createAltchaWorker(Te));
    const V = Math.ceil(u / m), H = await Promise.all(g.map((G, w) => {
      const B = w * V;
      return new Promise((Ge) => {
        G.addEventListener("message", (pe) => {
          if (pe.data)
            for (const _e of g)
              _e !== G && _e.postMessage({ type: "abort" });
          Ge(pe.data);
        }), G.postMessage({
          payload: r,
          max: B + V,
          start: B,
          type: "work"
        });
      });
    }));
    for (const G of g)
      G.terminate();
    return H.find((G) => !!G) || null;
  }
  function Ut() {
    [y.UNVERIFIED, y.ERROR, y.EXPIRED].includes(T) ? h && (b == null ? void 0 : b.reportValidity()) === !1 ? t(8, O = !1) : E ? we() : ae() : t(8, O = !0);
  }
  function nt(r) {
    const u = r.target;
    A && u && !_.contains(u) && T === y.VERIFIED && t(9, _.style.display = "none", _);
  }
  function rt() {
    A && He();
  }
  function it() {
    T === y.VERIFYING && s.waitAlert && alert(s.waitAlert);
  }
  function Xt(r) {
    var u;
    if (J) {
      const m = J.match(/^(mailto|tel|sms|https?):/);
      let g;
      if (m) {
        const [V] = J.slice(J.indexOf(":") + 1).replace(/^\/\//, "").split("?");
        g = document.createElement("a"), g.href = J, g.innerHTML = V;
      } else
        g = document.createTextNode(J);
      re && g && (re.after(g), (u = re.parentElement) == null || u.removeChild(re));
    }
  }
  function Mt(r) {
    M && M.trackError(ye);
  }
  function jt(r) {
    A && T !== y.UNVERIFIED && requestAnimationFrame(() => {
      He();
    });
  }
  function ot() {
    A && He();
  }
  function Ae(r) {
    C("expire", r), Q && (clearTimeout(Q), Q = null), r < 1 ? et() : Q = setTimeout(et, r);
  }
  function lt(r) {
    C("floating", r), A !== r && (t(9, _.style.left = "", _), t(9, _.style.top = "", _)), t(1, A = r === !0 || r === "" ? "auto" : r === !1 || r === "false" ? void 0 : A), A ? (v || t(0, v = "onsubmit"), document.addEventListener("scroll", rt), document.addEventListener("click", nt), window.addEventListener("resize", ot)) : v === "onsubmit" && t(0, v = void 0);
  }
  function Wt(r) {
    var m;
    const u = b == null ? void 0 : b.querySelector(typeof r == "string" ? `input[name="${r}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((m = u == null ? void 0 : u.value) == null ? void 0 : m.slice(u.value.indexOf("@"))) || void 0;
  }
  function Bt(r) {
    return [
      ...(b == null ? void 0 : b.querySelectorAll(r != null && r.length ? r.map((m) => `input[name="${m}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (m, g) => {
        const V = g.name, H = g.value;
        return V && H && (m[V] = /\n/.test(H) ? H.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : H), m;
      },
      {}
    );
  }
  async function Kt(r) {
    if (!le)
      throw new Error("Attribute verifyurl not set.");
    C("requesting server verification from", le);
    const u = { payload: r };
    if (h) {
      const { blockedCountries: V, classifier: H, disableRules: G, email: w, expectedLanguages: B, expectedCountries: Ge, fields: pe, ipAddress: _e, text: qt, timeZone: ft } = Pt();
      u.blockedCountries = V, u.classifier = H, u.disableRules = G, u.email = w === !1 ? void 0 : Wt(w), u.expectedCountries = Ge, u.expectedLanguages = B || (We ? [We] : void 0), u.fields = pe === !1 ? void 0 : Bt(pe), u.ipAddress = _e === !1 ? void 0 : _e || "auto", u.text = qt, u.timeZone = ft === !1 ? void 0 : ft || Ht();
    }
    const m = await fetch(le, {
      body: JSON.stringify(u),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (m.status !== 200)
      throw new Error(`Server responded with ${m.status}.`);
    const g = await m.json();
    if (g != null && g.payload && t(6, ce = g.payload), Ve("serververification", g), $ && g.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  function Pt() {
    return h === "ipAddress" ? {
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
    } : typeof h == "object" ? h : {
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
  function He(r = 20) {
    if (_)
      if (Ne || (Ne = (U ? document.querySelector(U) : b == null ? void 0 : b.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || b || re), Ne) {
        const u = parseInt(Z, 10) || 12, m = Ne.getBoundingClientRect(), g = _.getBoundingClientRect(), V = document.documentElement.clientHeight, H = document.documentElement.clientWidth, G = A === "auto" ? m.bottom + g.height + u + r > V : A === "top", w = Math.max(r, Math.min(H - r - g.width, m.left + m.width / 2 - g.width / 2));
        if (G ? t(9, _.style.top = `${m.top - (g.height + u)}px`, _) : t(9, _.style.top = `${m.bottom + u}px`, _), t(9, _.style.left = `${w}px`, _), _.setAttribute("data-floating", G ? "top" : "bottom"), se) {
          const B = se.getBoundingClientRect();
          t(10, se.style.left = m.left - w + m.width / 2 - B.width / 2 + "px", se);
        }
      } else
        C("unable to find floating anchor element");
  }
  function st(r) {
    r.analytics && (t(18, d = r.analytics), $e()), r.obfuscated !== void 0 && t(27, E = r.obfuscated), r.auto !== void 0 && (t(0, v = r.auto), v === "onload" && (E ? we() : ae())), r.beaconurl && (t(19, R = r.beaconurl), M && t(11, M.beaconUrl = R, M)), r.floatinganchor !== void 0 && t(23, U = r.floatinganchor), r.delay !== void 0 && t(21, ee = r.delay), r.floatingoffset !== void 0 && t(24, Z = r.floatingoffset), r.floating !== void 0 && lt(r.floating), r.expire !== void 0 && (Ae(r.expire), t(22, te = r.expire)), r.challenge && (qe(r.challenge), o = r.challenge), r.challengeurl !== void 0 && t(17, k = r.challengeurl), r.debug !== void 0 && t(20, X = !!r.debug), r.hidefooter !== void 0 && t(2, oe = !!r.hidefooter), r.hidelogo !== void 0 && t(3, ne = !!r.hidelogo), r.maxnumber !== void 0 && t(25, I = +r.maxnumber), r.mockerror !== void 0 && t(26, z = !!r.mockerror), r.name !== void 0 && t(4, j = r.name), r.refetchonexpire !== void 0 && t(28, F = !!r.refetchonexpire), r.spamfilter !== void 0 && t(29, h = typeof r.spamfilter == "object" ? r.spamfilter : !!r.spamfilter), r.strings && t(42, l = r.strings), r.test !== void 0 && t(30, P = typeof r.test == "number" ? r.test : !!r.test), r.verifyurl !== void 0 && t(31, le = r.verifyurl), r.workers !== void 0 && t(32, be = +r.workers), r.workerurl !== void 0 && t(33, Te = r.workerurl);
  }
  function ve(r = y.UNVERIFIED, u = null) {
    Q && (clearTimeout(Q), Q = null), t(8, O = !1), t(5, ye = u), t(6, ce = null), t(7, T = r);
  }
  async function ae() {
    return ve(y.VERIFYING), await new Promise((r) => setTimeout(r, ee || 0)), Dt().then((r) => (qe(r), C("challenge", r), tt(r))).then(({ data: r, solution: u }) => {
      if (C("solution", u), "challenge" in r && u && !("clearText" in u))
        if ((u == null ? void 0 : u.number) !== void 0) {
          if (le)
            return Kt(Qe(r, u));
          t(6, ce = Qe(r, u)), C("payload", ce);
        } else
          throw C("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      _n().then(() => {
        t(7, T = y.VERIFIED), t(8, O = !0), C("verified"), Ve("verified", { payload: ce });
      });
    }).catch((r) => {
      C(r), t(7, T = y.ERROR), t(8, O = !1), t(5, ye = r.message);
    });
  }
  async function we() {
    if (!E) {
      t(7, T = y.ERROR);
      return;
    }
    ve(y.VERIFYING), await new Promise((H) => setTimeout(H, ee || 0));
    const [r, u] = E.split("?");
    let g = new URLSearchParams(u || "").get("key") || void 0;
    if (g) {
      const H = g.match(/^\(prompt:?(.*)\)$/);
      H && (g = prompt(H[1] || "Enter Key:") || void 0);
    }
    const { solution: V } = await tt({ obfuscated: r, key: g, maxnumber: I });
    V && "clearText" in V ? (t(41, J = V.clearText), t(7, T = y.VERIFIED), t(8, O = !0), A && _ && t(9, _.style.display = "none", _)) : (t(7, T = y.ERROR), t(8, O = !1), t(5, ye = "Unable to decrypt data."));
  }
  function Ot() {
    O = this.checked, t(8, O);
  }
  function Jt(r) {
    Ze[r ? "unshift" : "push"](() => {
      se = r, t(10, se);
    });
  }
  function Qt(r) {
    Ze[r ? "unshift" : "push"](() => {
      _ = r, t(9, _);
    });
  }
  return n.$$set = (r) => {
    "analytics" in r && t(18, d = r.analytics), "auto" in r && t(0, v = r.auto), "beaconurl" in r && t(19, R = r.beaconurl), "blockspam" in r && t(34, $ = r.blockspam), "challengeurl" in r && t(17, k = r.challengeurl), "challengejson" in r && t(35, K = r.challengejson), "debug" in r && t(20, X = r.debug), "delay" in r && t(21, ee = r.delay), "expire" in r && t(22, te = r.expire), "floating" in r && t(1, A = r.floating), "floatinganchor" in r && t(23, U = r.floatinganchor), "floatingoffset" in r && t(24, Z = r.floatingoffset), "hidefooter" in r && t(2, oe = r.hidefooter), "hidelogo" in r && t(3, ne = r.hidelogo), "name" in r && t(4, j = r.name), "maxnumber" in r && t(25, I = r.maxnumber), "mockerror" in r && t(26, z = r.mockerror), "obfuscated" in r && t(27, E = r.obfuscated), "refetchonexpire" in r && t(28, F = r.refetchonexpire), "spamfilter" in r && t(29, h = r.spamfilter), "strings" in r && t(36, x = r.strings), "test" in r && t(30, P = r.test), "verifyurl" in r && t(31, le = r.verifyurl), "workers" in r && t(32, be = r.workers), "workerurl" in r && t(33, Te = r.workerurl), "$$scope" in r && t(43, a = r.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*challengeurl*/
    131072 && t(14, i = !!(k != null && k.includes(".altcha.org")) && !!(k != null && k.includes("apiKey=ckey_"))), n.$$.dirty[1] & /*challengejson*/
    16 && (o = K ? Ct(K) : void 0), n.$$.dirty[1] & /*strings*/
    32 && t(42, l = x ? Ct(x) : {}), n.$$.dirty[1] & /*parsedStrings*/
    2048 && t(13, s = {
      ariaLinkLabel: xt,
      error: "Verification failed. Try again later.",
      expired: "Verification expired. Try again.",
      footer: `Protected by <a href="${Gt}" target="_blank" aria-label="${l.ariaLinkLabel || xt}">ALTCHA</a>`,
      label: "I'm not a robot",
      verified: "Verified",
      verifying: "Verifying...",
      waitAlert: "Verifying... please wait.",
      ...l
    }), n.$$.dirty[0] & /*state, payload*/
    192 | n.$$.dirty[1] & /*clarifiedData*/
    1024 && Ve("statechange", J ? { clarifiedData: J, state: T } : { payload: ce, state: T }), n.$$.dirty[0] & /*error*/
    32 && Mt(), n.$$.dirty[0] & /*state*/
    128 && jt(), n.$$.dirty[1] & /*clarifiedData*/
    1024 && Xt();
  }, [
    v,
    A,
    oe,
    ne,
    j,
    ye,
    ce,
    T,
    O,
    _,
    se,
    M,
    Be,
    s,
    i,
    Ut,
    it,
    k,
    d,
    R,
    X,
    ee,
    te,
    U,
    Z,
    I,
    z,
    E,
    F,
    h,
    P,
    le,
    be,
    Te,
    $,
    K,
    x,
    st,
    ve,
    ae,
    we,
    J,
    l,
    a,
    c,
    Ot,
    Jt,
    Qt
  ];
}
class Pn extends An {
  constructor(e) {
    super(), Tn(
      this,
      e,
      Kn,
      Bn,
      on,
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
      Yn,
      [-1, -1, -1]
    );
  }
  get analytics() {
    return this.$$.ctx[18];
  }
  set analytics(e) {
    this.$$set({ analytics: e }), p();
  }
  get auto() {
    return this.$$.ctx[0];
  }
  set auto(e) {
    this.$$set({ auto: e }), p();
  }
  get beaconurl() {
    return this.$$.ctx[19];
  }
  set beaconurl(e) {
    this.$$set({ beaconurl: e }), p();
  }
  get blockspam() {
    return this.$$.ctx[34];
  }
  set blockspam(e) {
    this.$$set({ blockspam: e }), p();
  }
  get challengeurl() {
    return this.$$.ctx[17];
  }
  set challengeurl(e) {
    this.$$set({ challengeurl: e }), p();
  }
  get challengejson() {
    return this.$$.ctx[35];
  }
  set challengejson(e) {
    this.$$set({ challengejson: e }), p();
  }
  get debug() {
    return this.$$.ctx[20];
  }
  set debug(e) {
    this.$$set({ debug: e }), p();
  }
  get delay() {
    return this.$$.ctx[21];
  }
  set delay(e) {
    this.$$set({ delay: e }), p();
  }
  get expire() {
    return this.$$.ctx[22];
  }
  set expire(e) {
    this.$$set({ expire: e }), p();
  }
  get floating() {
    return this.$$.ctx[1];
  }
  set floating(e) {
    this.$$set({ floating: e }), p();
  }
  get floatinganchor() {
    return this.$$.ctx[23];
  }
  set floatinganchor(e) {
    this.$$set({ floatinganchor: e }), p();
  }
  get floatingoffset() {
    return this.$$.ctx[24];
  }
  set floatingoffset(e) {
    this.$$set({ floatingoffset: e }), p();
  }
  get hidefooter() {
    return this.$$.ctx[2];
  }
  set hidefooter(e) {
    this.$$set({ hidefooter: e }), p();
  }
  get hidelogo() {
    return this.$$.ctx[3];
  }
  set hidelogo(e) {
    this.$$set({ hidelogo: e }), p();
  }
  get name() {
    return this.$$.ctx[4];
  }
  set name(e) {
    this.$$set({ name: e }), p();
  }
  get maxnumber() {
    return this.$$.ctx[25];
  }
  set maxnumber(e) {
    this.$$set({ maxnumber: e }), p();
  }
  get mockerror() {
    return this.$$.ctx[26];
  }
  set mockerror(e) {
    this.$$set({ mockerror: e }), p();
  }
  get obfuscated() {
    return this.$$.ctx[27];
  }
  set obfuscated(e) {
    this.$$set({ obfuscated: e }), p();
  }
  get refetchonexpire() {
    return this.$$.ctx[28];
  }
  set refetchonexpire(e) {
    this.$$set({ refetchonexpire: e }), p();
  }
  get spamfilter() {
    return this.$$.ctx[29];
  }
  set spamfilter(e) {
    this.$$set({ spamfilter: e }), p();
  }
  get strings() {
    return this.$$.ctx[36];
  }
  set strings(e) {
    this.$$set({ strings: e }), p();
  }
  get test() {
    return this.$$.ctx[30];
  }
  set test(e) {
    this.$$set({ test: e }), p();
  }
  get verifyurl() {
    return this.$$.ctx[31];
  }
  set verifyurl(e) {
    this.$$set({ verifyurl: e }), p();
  }
  get workers() {
    return this.$$.ctx[32];
  }
  set workers(e) {
    this.$$set({ workers: e }), p();
  }
  get workerurl() {
    return this.$$.ctx[33];
  }
  set workerurl(e) {
    this.$$set({ workerurl: e }), p();
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
customElements.define("altcha-widget", Nn(Pn, { analytics: { type: "Boolean" }, auto: {}, beaconurl: {}, blockspam: {}, challengeurl: {}, challengejson: {}, debug: { type: "Boolean" }, delay: {}, expire: {}, floating: {}, floatinganchor: {}, floatingoffset: {}, hidefooter: { type: "Boolean" }, hidelogo: { type: "Boolean" }, name: {}, maxnumber: {}, mockerror: { type: "Boolean" }, obfuscated: {}, refetchonexpire: { type: "Boolean" }, spamfilter: { type: "Boolean" }, strings: {}, test: { type: "Boolean" }, verifyurl: {}, workers: {}, workerurl: {} }, ["default"], ["configure", "reset", "verify", "clarify"], !1));
globalThis.createAltchaWorker = (n) => n ? new Worker(new URL(n)) : new nn();
export {
  Pn as Altcha
};
