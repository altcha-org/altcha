var Ft = Object.defineProperty;
var Dt = (n, e, t) => e in n ? Ft(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var U = (n, e, t) => Dt(n, typeof e != "symbol" ? e + "" : e, t);
const ht = "KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2NvbnN0IGY9bmV3IFRleHRFbmNvZGVyO2Z1bmN0aW9uIHAoZSl7cmV0dXJuWy4uLm5ldyBVaW50OEFycmF5KGUpXS5tYXAodD0+dC50b1N0cmluZygxNikucGFkU3RhcnQoMiwiMCIpKS5qb2luKCIiKX1hc3luYyBmdW5jdGlvbiB3KGUsdCxyKXtyZXR1cm4gcChhd2FpdCBjcnlwdG8uc3VidGxlLmRpZ2VzdChyLnRvVXBwZXJDYXNlKCksZi5lbmNvZGUoZSt0KSkpfWZ1bmN0aW9uIGIoZSx0LHI9IlNIQS0yNTYiLG49MWU2LHM9MCl7Y29uc3Qgbz1uZXcgQWJvcnRDb250cm9sbGVyLGE9RGF0ZS5ub3coKTtyZXR1cm57cHJvbWlzZTooYXN5bmMoKT0+e2ZvcihsZXQgYz1zO2M8PW47Yys9MSl7aWYoby5zaWduYWwuYWJvcnRlZClyZXR1cm4gbnVsbDtpZihhd2FpdCB3KHQsYyxyKT09PWUpcmV0dXJue251bWJlcjpjLHRvb2s6RGF0ZS5ub3coKS1hfX1yZXR1cm4gbnVsbH0pKCksY29udHJvbGxlcjpvfX1mdW5jdGlvbiBoKGUpe2NvbnN0IHQ9YXRvYihlKSxyPW5ldyBVaW50OEFycmF5KHQubGVuZ3RoKTtmb3IobGV0IG49MDtuPHQubGVuZ3RoO24rKylyW25dPXQuY2hhckNvZGVBdChuKTtyZXR1cm4gcn1mdW5jdGlvbiBnKGUsdD0xMil7Y29uc3Qgcj1uZXcgVWludDhBcnJheSh0KTtmb3IobGV0IG49MDtuPHQ7bisrKXJbbl09ZSUyNTYsZT1NYXRoLmZsb29yKGUvMjU2KTtyZXR1cm4gcn1hc3luYyBmdW5jdGlvbiBtKGUsdD0iIixyPTFlNixuPTApe2NvbnN0IHM9IkFFUy1HQ00iLG89bmV3IEFib3J0Q29udHJvbGxlcixhPURhdGUubm93KCksbD1hc3luYygpPT57Zm9yKGxldCB1PW47dTw9cjt1Kz0xKXtpZihvLnNpZ25hbC5hYm9ydGVkfHwhY3x8IXkpcmV0dXJuIG51bGw7dHJ5e2NvbnN0IGQ9YXdhaXQgY3J5cHRvLnN1YnRsZS5kZWNyeXB0KHtuYW1lOnMsaXY6Zyh1KX0sYyx5KTtpZihkKXJldHVybntjbGVhclRleHQ6bmV3IFRleHREZWNvZGVyKCkuZGVjb2RlKGQpLHRvb2s6RGF0ZS5ub3coKS1hfX1jYXRjaHt9fXJldHVybiBudWxsfTtsZXQgYz1udWxsLHk9bnVsbDt0cnl7eT1oKGUpO2NvbnN0IHU9YXdhaXQgY3J5cHRvLnN1YnRsZS5kaWdlc3QoIlNIQS0yNTYiLGYuZW5jb2RlKHQpKTtjPWF3YWl0IGNyeXB0by5zdWJ0bGUuaW1wb3J0S2V5KCJyYXciLHUscywhMSxbImRlY3J5cHQiXSl9Y2F0Y2h7cmV0dXJue3Byb21pc2U6UHJvbWlzZS5yZWplY3QoKSxjb250cm9sbGVyOm99fXJldHVybntwcm9taXNlOmwoKSxjb250cm9sbGVyOm99fWxldCBpO29ubWVzc2FnZT1hc3luYyBlPT57Y29uc3R7dHlwZTp0LHBheWxvYWQ6cixzdGFydDpuLG1heDpzfT1lLmRhdGE7bGV0IG89bnVsbDtpZih0PT09ImFib3J0IilpPT1udWxsfHxpLmFib3J0KCksaT12b2lkIDA7ZWxzZSBpZih0PT09IndvcmsiKXtpZigib2JmdXNjYXRlZCJpbiByKXtjb25zdHtrZXk6YSxvYmZ1c2NhdGVkOmx9PXJ8fHt9O289YXdhaXQgbShsLGEscyxuKX1lbHNle2NvbnN0e2FsZ29yaXRobTphLGNoYWxsZW5nZTpsLHNhbHQ6Y309cnx8e307bz1iKGwsYyxhLHMsbil9aT1vLmNvbnRyb2xsZXIsby5wcm9taXNlLnRoZW4oYT0+e3NlbGYucG9zdE1lc3NhZ2UoYSYmey4uLmEsd29ya2VyOiEwfSl9KX19fSkoKTsK", jt = (n) => Uint8Array.from(atob(n), (e) => e.charCodeAt(0)), nt = typeof self < "u" && self.Blob && new Blob([jt(ht)], { type: "text/javascript;charset=utf-8" });
function Pt(n) {
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
function Re() {
}
function Wt(n, e) {
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
function Ut(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function Kt(n) {
  return Object.keys(n).length === 0;
}
function Mt(n, e, t, i) {
  if (n) {
    const o = bt(n, e, t, i);
    return n[0](o);
  }
}
function bt(n, e, t, i) {
  return n[1] && i ? Wt(t.ctx.slice(), n[1](i(e))) : t.ctx;
}
function Bt(n, e, t, i) {
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
function Jt(n) {
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
function Qt(n, e, t) {
  const i = $t(n);
  if (!i.getElementById(e)) {
    const o = Z("style");
    o.id = e, o.textContent = t, qt(i, o);
  }
}
function $t(n) {
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
function X(n, e, t) {
  n.insertBefore(e, t || null);
}
function Y(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function Z(n) {
  return document.createElement(n);
}
function $(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function en(n) {
  return document.createTextNode(n);
}
function Q() {
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
function Ae() {
  if (!pe) throw new Error("Function called outside component initialization");
  return pe;
}
function on(n) {
  Ae().$$.on_mount.push(n);
}
function ln(n) {
  Ae().$$.on_destroy.push(n);
}
function sn() {
  const n = Ae();
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
const ae = [], Ce = [];
let fe = [];
const ot = [], yt = /* @__PURE__ */ Promise.resolve();
let ze = !1;
function vt() {
  ze || (ze = !0, yt.then(w));
}
function cn() {
  return vt(), yt;
}
function Se(n) {
  fe.push(n);
}
const Ne = /* @__PURE__ */ new Set();
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
    for (ve(null), ae.length = 0, ce = 0; Ce.length; ) Ce.pop()();
    for (let e = 0; e < fe.length; e += 1) {
      const t = fe[e];
      Ne.has(t) || (Ne.add(t), t());
    }
    fe.length = 0;
  } while (ae.length);
  for (; ot.length; )
    ot.pop()();
  ze = !1, Ne.clear(), ve(n);
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
    update: Re,
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
  let C = !1;
  if (f.ctx = t ? t(n, e.props || {}, (b, M, ...D) => {
    const j = D.length ? D[0] : M;
    return f.ctx && o(f.ctx[b], f.ctx[b] = j) && (!f.skip_bound && f.bound[b] && f.bound[b](j), C && mn(n, b)), M;
  }) : [], f.update(), C = !0, we(f.before_update), f.fragment = i ? i(f.ctx) : !1, e.target) {
    if (e.hydrate) {
      const b = tn(e.target);
      f.fragment && f.fragment.l(b), b.forEach(Y);
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
    U(this, "$$ctor");
    /** Slots */
    U(this, "$$s");
    /** The Svelte component instance */
    U(this, "$$c");
    /** Whether or not the custom element is connected */
    U(this, "$$cn", !1);
    /** Component props data */
    U(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    U(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    U(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    U(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    U(this, "$$l_u", /* @__PURE__ */ new Map());
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
              s = Z("slot"), l !== "default" && a(s, "name", l);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(f, C) {
              X(f, s, C);
            },
            d: function(f) {
              f && Y(s);
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
    U(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    U(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    gn(this, 1), this.$destroy = Re;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!mt(t))
      return Re;
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
    this.$$set && !Kt(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
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
function Rn(n, e = 12) {
  const t = new Uint8Array(e);
  for (let i = 0; i < e; i++)
    t[i] = n % 256, n = Math.floor(n / 256);
  return t;
}
async function Cn(n, e = "", t = 1e6, i = 0) {
  const o = "AES-GCM", l = new AbortController(), s = Date.now(), d = async () => {
    for (let C = i; C <= t; C += 1) {
      if (l.signal.aborted || !h || !f)
        return null;
      try {
        const b = await crypto.subtle.decrypt(
          {
            name: o,
            iv: Rn(C)
          },
          h,
          f
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
  let h = null, f = null;
  try {
    f = En(n);
    const C = await crypto.subtle.digest(
      "SHA-256",
      _t.encode(e)
    );
    h = await crypto.subtle.importKey(
      "raw",
      C,
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
function In(n) {
  Qt(n, "svelte-ddsc3z", '.altcha.svelte-ddsc3z.svelte-ddsc3z{background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);position:relative;text-align:left}.altcha.svelte-ddsc3z.svelte-ddsc3z:focus-within{border-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating].svelte-ddsc3z.svelte-ddsc3z{background:var(--altcha-color-base, white);display:none;filter:drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2));left:-100%;position:fixed;top:-100%;width:var(--altcha-max-width, 260px);z-index:999999}.altcha[data-floating=top].svelte-ddsc3z .altcha-anchor-arrow.svelte-ddsc3z{border-bottom-color:transparent;border-top-color:var(--altcha-color-border, #a0a0a0);bottom:-12px;top:auto}.altcha[data-floating=bottom].svelte-ddsc3z.svelte-ddsc3z:focus-within::after{border-bottom-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating=top].svelte-ddsc3z.svelte-ddsc3z:focus-within::after{border-top-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating].svelte-ddsc3z.svelte-ddsc3z:not([data-state=unverified]){display:block}.altcha-anchor-arrow.svelte-ddsc3z.svelte-ddsc3z{border:6px solid transparent;border-bottom-color:var(--altcha-color-border, #a0a0a0);content:"";height:0;left:12px;position:absolute;top:-12px;width:0}.altcha-main.svelte-ddsc3z.svelte-ddsc3z{align-items:center;display:flex;gap:0.4rem;padding:0.7rem}.altcha-label.svelte-ddsc3z.svelte-ddsc3z{flex-grow:1}.altcha-label.svelte-ddsc3z label.svelte-ddsc3z{cursor:pointer}.altcha-logo.svelte-ddsc3z.svelte-ddsc3z{color:currentColor;opacity:0.3}.altcha-logo.svelte-ddsc3z.svelte-ddsc3z:hover{opacity:1}.altcha-error.svelte-ddsc3z.svelte-ddsc3z{color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem}.altcha-footer.svelte-ddsc3z.svelte-ddsc3z{align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.4;padding:0.2rem 0.7rem;text-align:right}.altcha-footer.svelte-ddsc3z.svelte-ddsc3z:hover{opacity:1}.altcha-footer.svelte-ddsc3z>.svelte-ddsc3z:first-child{flex-grow:1}.altcha-footer.svelte-ddsc3z a{color:currentColor}.altcha-checkbox.svelte-ddsc3z.svelte-ddsc3z{display:flex;align-items:center;height:24px;width:24px}.altcha-checkbox.svelte-ddsc3z input.svelte-ddsc3z{width:18px;height:18px;margin:0}.altcha-hidden.svelte-ddsc3z.svelte-ddsc3z{display:none}.altcha-spinner.svelte-ddsc3z.svelte-ddsc3z{animation:svelte-ddsc3z-altcha-spinner 0.75s infinite linear;transform-origin:center}@keyframes svelte-ddsc3z-altcha-spinner{100%{transform:rotate(360deg)}}');
}
function lt(n) {
  let e, t, i;
  return {
    c() {
      e = $("svg"), t = $("path"), i = $("path"), a(t, "d", "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"), a(t, "fill", "currentColor"), a(t, "opacity", ".25"), a(i, "d", "M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"), a(i, "fill", "currentColor"), a(i, "class", "altcha-spinner svelte-ddsc3z"), a(e, "width", "24"), a(e, "height", "24"), a(e, "viewBox", "0 0 24 24"), a(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(o, l) {
      X(o, e, l), L(e, t), L(e, i);
    },
    d(o) {
      o && Y(e);
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
      e = Z("label"), a(e, "for", i = /*name*/
      n[4] + "_checkbox"), a(e, "class", "svelte-ddsc3z");
    },
    m(o, l) {
      X(o, e, l), e.innerHTML = t;
    },
    p(o, l) {
      l[0] & /*_strings*/
      2048 && t !== (t = /*_strings*/
      o[11].label + "") && (e.innerHTML = t), l[0] & /*name*/
      16 && i !== (i = /*name*/
      o[4] + "_checkbox") && a(e, "for", i);
    },
    d(o) {
      o && Y(e);
    }
  };
}
function Nn(n) {
  let e, t = (
    /*_strings*/
    n[11].verifying + ""
  );
  return {
    c() {
      e = Z("span");
    },
    m(i, o) {
      X(i, e, o), e.innerHTML = t;
    },
    p(i, o) {
      o[0] & /*_strings*/
      2048 && t !== (t = /*_strings*/
      i[11].verifying + "") && (e.innerHTML = t);
    },
    d(i) {
      i && Y(e);
    }
  };
}
function zn(n) {
  let e, t = (
    /*_strings*/
    n[11].verified + ""
  ), i, o;
  return {
    c() {
      e = Z("span"), i = Q(), o = Z("input"), a(o, "type", "hidden"), a(
        o,
        "name",
        /*name*/
        n[4]
      ), o.value = /*payload*/
      n[6];
    },
    m(l, s) {
      X(l, e, s), e.innerHTML = t, X(l, i, s), X(l, o, s);
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
      l && (Y(e), Y(i), Y(o));
    }
  };
}
function st(n) {
  let e, t, i, o, l, s, d;
  return {
    c() {
      e = Z("div"), t = Z("a"), i = $("svg"), o = $("path"), l = $("path"), s = $("path"), a(o, "d", "M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z"), a(o, "fill", "currentColor"), a(l, "d", "M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z"), a(l, "fill", "currentColor"), a(s, "d", "M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z"), a(s, "fill", "currentColor"), a(i, "width", "22"), a(i, "height", "22"), a(i, "viewBox", "0 0 20 20"), a(i, "fill", "none"), a(i, "xmlns", "http://www.w3.org/2000/svg"), a(t, "href", xt), a(t, "target", "_blank"), a(t, "class", "altcha-logo svelte-ddsc3z"), a(t, "aria-label", d = /*_strings*/
      n[11].ariaLinkLabel);
    },
    m(h, f) {
      X(h, e, f), L(e, t), L(t, i), L(i, o), L(i, l), L(i, s);
    },
    p(h, f) {
      f[0] & /*_strings*/
      2048 && d !== (d = /*_strings*/
      h[11].ariaLinkLabel) && a(t, "aria-label", d);
    },
    d(h) {
      h && Y(e);
    }
  };
}
function ct(n) {
  let e, t, i, o;
  function l(h, f) {
    return (
      /*state*/
      h[7] === m.EXPIRED ? An : Sn
    );
  }
  let s = l(n), d = s(n);
  return {
    c() {
      e = Z("div"), t = $("svg"), i = $("path"), o = Q(), d.c(), a(i, "stroke-linecap", "round"), a(i, "stroke-linejoin", "round"), a(i, "d", "M6 18L18 6M6 6l12 12"), a(t, "width", "14"), a(t, "height", "14"), a(t, "xmlns", "http://www.w3.org/2000/svg"), a(t, "fill", "none"), a(t, "viewBox", "0 0 24 24"), a(t, "stroke-width", "1.5"), a(t, "stroke", "currentColor"), a(e, "class", "altcha-error svelte-ddsc3z");
    },
    m(h, f) {
      X(h, e, f), L(e, t), L(t, i), L(e, o), d.m(e, null);
    },
    p(h, f) {
      s === (s = l(h)) && d ? d.p(h, f) : (d.d(1), d = s(h), d && (d.c(), d.m(e, null)));
    },
    d(h) {
      h && Y(e), d.d();
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
      e = Z("div"), a(
        e,
        "title",
        /*error*/
        n[5]
      );
    },
    m(i, o) {
      X(i, e, o), e.innerHTML = t;
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
      i && Y(e);
    }
  };
}
function An(n) {
  let e, t = (
    /*_strings*/
    n[11].expired + ""
  );
  return {
    c() {
      e = Z("div"), a(
        e,
        "title",
        /*error*/
        n[5]
      );
    },
    m(i, o) {
      X(i, e, o), e.innerHTML = t;
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
      i && Y(e);
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
      e = Z("div"), t = Z("div"), a(t, "class", "svelte-ddsc3z"), a(e, "class", "altcha-footer svelte-ddsc3z");
    },
    m(o, l) {
      X(o, e, l), L(e, t), t.innerHTML = i;
    },
    p(o, l) {
      l[0] & /*_strings*/
      2048 && i !== (i = /*_strings*/
      o[11].footer + "") && (t.innerHTML = i);
    },
    d(o) {
      o && Y(e);
    }
  };
}
function ft(n) {
  let e;
  return {
    c() {
      e = Z("div"), a(e, "class", "altcha-anchor-arrow svelte-ddsc3z");
    },
    m(t, i) {
      X(t, e, i), n[48](e);
    },
    p: Re,
    d(t) {
      t && Y(e), n[48](null);
    }
  };
}
function Tn(n) {
  let e, t, i, o, l, s, d, h, f, C, b, M, D, j, S, N, O;
  const J = (
    /*#slots*/
    n[46].default
  ), G = Mt(
    J,
    n,
    /*$$scope*/
    n[45],
    null
  );
  let A = (
    /*state*/
    n[7] === m.VERIFYING && lt()
  );
  function q(u, y) {
    return (
      /*state*/
      u[7] === m.VERIFIED ? zn : (
        /*state*/
        u[7] === m.VERIFYING ? Nn : Ln
      )
    );
  }
  let K = q(n), H = K(n), x = (
    /*hidelogo*/
    (n[3] !== !0 || /*isFreeSaaS*/
    n[12]) && st(n)
  ), T = (
    /*error*/
    (n[5] || /*state*/
    n[7] === m.EXPIRED) && ct(n)
  ), z = (
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
      G && G.c(), e = Q(), t = Z("div"), i = Z("div"), A && A.c(), o = Q(), l = Z("div"), s = Z("input"), f = Q(), C = Z("div"), H.c(), b = Q(), x && x.c(), M = Q(), T && T.c(), D = Q(), z && z.c(), j = Q(), _ && _.c(), a(s, "type", "checkbox"), a(s, "id", d = /*name*/
      n[4] + "_checkbox"), s.required = h = /*auto*/
      n[0] !== "onsubmit" && (!/*floating*/
      n[1] || /*auto*/
      n[0] !== "off"), a(s, "class", "svelte-ddsc3z"), a(l, "class", "altcha-checkbox svelte-ddsc3z"), it(
        l,
        "altcha-hidden",
        /*state*/
        n[7] === m.VERIFYING
      ), a(C, "class", "altcha-label svelte-ddsc3z"), a(i, "class", "altcha-main svelte-ddsc3z"), a(t, "class", "altcha svelte-ddsc3z"), a(
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
    m(u, y) {
      G && G.m(u, y), X(u, e, y), X(u, t, y), L(t, i), A && A.m(i, null), L(i, o), L(i, l), L(l, s), s.checked = /*checked*/
      n[8], L(i, f), L(i, C), H.m(C, null), L(i, b), x && x.m(i, null), L(t, M), T && T.m(t, null), L(t, D), z && z.m(t, null), L(t, j), _ && _.m(t, null), n[49](t), S = !0, N || (O = [
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
      ], N = !0);
    },
    p(u, y) {
      G && G.p && (!S || y[1] & /*$$scope*/
      16384) && Ot(
        G,
        J,
        u,
        /*$$scope*/
        u[45],
        S ? Bt(
          J,
          /*$$scope*/
          u[45],
          y,
          null
        ) : Jt(
          /*$$scope*/
          u[45]
        ),
        null
      ), /*state*/
      u[7] === m.VERIFYING ? A || (A = lt(), A.c(), A.m(i, o)) : A && (A.d(1), A = null), (!S || y[0] & /*name*/
      16 && d !== (d = /*name*/
      u[4] + "_checkbox")) && a(s, "id", d), (!S || y[0] & /*auto, floating*/
      3 && h !== (h = /*auto*/
      u[0] !== "onsubmit" && (!/*floating*/
      u[1] || /*auto*/
      u[0] !== "off"))) && (s.required = h), y[0] & /*checked*/
      256 && (s.checked = /*checked*/
      u[8]), (!S || y[0] & /*state*/
      128) && it(
        l,
        "altcha-hidden",
        /*state*/
        u[7] === m.VERIFYING
      ), K === (K = q(u)) && H ? H.p(u, y) : (H.d(1), H = K(u), H && (H.c(), H.m(C, null))), /*hidelogo*/
      u[3] !== !0 || /*isFreeSaaS*/
      u[12] ? x ? x.p(u, y) : (x = st(u), x.c(), x.m(i, null)) : x && (x.d(1), x = null), /*error*/
      u[5] || /*state*/
      u[7] === m.EXPIRED ? T ? T.p(u, y) : (T = ct(u), T.c(), T.m(t, D)) : T && (T.d(1), T = null), /*_strings*/
      u[11].footer && /*hidefooter*/
      (u[2] !== !0 || /*isFreeSaaS*/
      u[12]) ? z ? z.p(u, y) : (z = at(u), z.c(), z.m(t, j)) : z && (z.d(1), z = null), /*floating*/
      u[1] ? _ ? _.p(u, y) : (_ = ft(u), _.c(), _.m(t, null)) : _ && (_.d(1), _ = null), (!S || y[0] & /*state*/
      128) && a(
        t,
        "data-state",
        /*state*/
        u[7]
      ), (!S || y[0] & /*floating*/
      2) && a(
        t,
        "data-floating",
        /*floating*/
        u[1]
      );
    },
    i(u) {
      S || (pt(G, u), S = !0);
    },
    o(u) {
      dn(G, u), S = !1;
    },
    d(u) {
      u && (Y(e), Y(t)), G && G.d(u), A && A.d(), H.d(), x && x.d(), T && T.d(), z && z.d(), _ && _.d(), n[49](null), N = !1, we(O);
    }
  };
}
const ut = "Visit Altcha.org", xt = "https://altcha.org/";
function dt(n) {
  return JSON.parse(n);
}
function Zn(n, e, t) {
  var qe, et;
  let i, o, l, s, { $$slots: d = {}, $$scope: h } = e, { auto: f = void 0 } = e, { blockspam: C = void 0 } = e, { challengeurl: b = void 0 } = e, { challengejson: M = void 0 } = e, { debug: D = !1 } = e, { delay: j = 0 } = e, { expire: S = void 0 } = e, { floating: N = void 0 } = e, { floatinganchor: O = void 0 } = e, { floatingoffset: J = void 0 } = e, { hidefooter: G = !1 } = e, { hidelogo: A = !1 } = e, { name: q = "altcha" } = e, { maxnumber: K = 1e6 } = e, { mockerror: H = !1 } = e, { obfuscated: x = void 0 } = e, { plugins: T = void 0 } = e, { refetchonexpire: z = !0 } = e, { spamfilter: _ = !1 } = e, { strings: u = void 0 } = e, { test: y = !1 } = e, { verifyurl: ee = void 0 } = e, { workers: le = Math.min(16, navigator.hardwareConcurrency || 8) } = e, { workerurl: ue = void 0 } = e;
  const de = sn(), Te = ["SHA-256", "SHA-384", "SHA-512"], Ze = (et = (qe = document.documentElement.lang) == null ? void 0 : qe.split("-")) == null ? void 0 : et[0];
  let re = !1, E, ie = null, se = null, v = null, he = null, B = null, oe = null, te = [], R = m.UNVERIFIED;
  ln(() => {
    Et(), v && (v.removeEventListener("submit", Fe), v.removeEventListener("reset", De), v.removeEventListener("focusin", Xe), v = null), B && (clearTimeout(B), B = null), document.removeEventListener("click", He), document.removeEventListener("scroll", Ye), window.removeEventListener("resize", Pe);
  }), on(() => {
    k("mounted", "1.0.0"), k("workers", le), Nt(), k("plugins", te.length ? te.map((r) => r.constructor.pluginName).join(", ") : "none"), y && k("using test mode"), S && ke(S), f !== void 0 && k("auto", f), N !== void 0 && We(N), v = E.closest("form"), v && (v.addEventListener("submit", Fe, { capture: !0 }), v.addEventListener("reset", De), f === "onfocus" && v.addEventListener("focusin", Xe)), f === "onload" && (x ? ge() : ne()), i && (G || A) && k("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      de("load");
    });
  });
  function Ve(r, c) {
    return btoa(JSON.stringify({
      algorithm: r.algorithm,
      challenge: r.challenge,
      number: c.number,
      salt: r.salt,
      signature: r.signature,
      test: y ? !0 : void 0,
      took: c.took
    }));
  }
  function Et() {
    for (const r of te)
      r.destroy();
  }
  function Ge() {
    b && z && R === m.VERIFIED ? ne() : me(m.EXPIRED, s.expired);
  }
  async function Rt() {
    var r;
    if (H)
      throw k("mocking error"), new Error("Mocked error.");
    if (o)
      return k("using provided json data"), o;
    if (y)
      return k("generating test challenge", { test: y }), _n(typeof y != "boolean" ? +y : void 0);
    {
      if (!b && v) {
        const p = v.getAttribute("action");
        p != null && p.includes("/form/") && t(15, b = p + "/altcha");
      }
      if (!b)
        throw new Error("Attribute challengeurl not set.");
      k("fetching challenge from", b);
      const c = await fetch(b, {
        headers: _ ? { "x-altcha-spam-filter": "1" } : {}
      });
      if (c.status !== 200)
        throw new Error(`Server responded with ${c.status}.`);
      const g = c.headers.get("Expires"), I = c.headers.get("X-Altcha-Config"), P = await c.json(), F = new URLSearchParams((r = P.salt.split("?")) == null ? void 0 : r[1]), V = F.get("expires") || F.get("expire");
      if (V) {
        const p = new Date(+V * 1e3), W = isNaN(p.getTime()) ? 0 : p.getTime() - Date.now();
        W > 0 && ke(W);
      }
      if (I)
        try {
          const p = JSON.parse(I);
          p && typeof p == "object" && (p.verifyurl && (p.verifyurl = new URL(p.verifyurl, new URL(b)).toString()), Me(p));
        } catch (p) {
          k("unable to configure from X-Altcha-Config", p);
        }
      if (!S && (g != null && g.length)) {
        const p = Date.parse(g);
        if (p) {
          const W = p - Date.now();
          W > 0 && ke(W);
        }
      }
      return P;
    }
  }
  function Ct(r) {
    var g;
    const c = v == null ? void 0 : v.querySelector(typeof r == "string" ? `input[name="${r}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((g = c == null ? void 0 : c.value) == null ? void 0 : g.slice(c.value.indexOf("@"))) || void 0;
  }
  function It() {
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
      ...(v == null ? void 0 : v.querySelectorAll(r != null && r.length ? r.map((g) => `input[name="${g}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (g, I) => {
        const P = I.name, F = I.value;
        return P && F && (g[P] = /\n/.test(F) ? F.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : F), g;
      },
      {}
    );
  }
  function Nt() {
    const r = T !== void 0 ? T.split(",") : void 0;
    for (const c of globalThis.altchaPlugins)
      (!r || r.includes(c.pluginName)) && te.push(new c({
        el: E,
        clarify: ge,
        dispatch: de,
        getConfiguration: Be,
        getFloatingAnchor: Oe,
        getState: Je,
        log: k,
        reset: me,
        solve: Ke,
        setState: $e,
        setFloatingAnchor: Qe,
        verify: ne
      }));
  }
  function k(...r) {
    (D || r.some((c) => c instanceof Error)) && console[r[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${q}]`, ...r);
  }
  function zt() {
    [m.UNVERIFIED, m.ERROR, m.EXPIRED].includes(R) ? _ && (v == null ? void 0 : v.reportValidity()) === !1 ? t(8, re = !1) : x ? ge() : ne() : t(8, re = !0);
  }
  function He(r) {
    const c = r.target;
    N && c && !E.contains(c) && (R === m.VERIFIED || f === "off" && R === m.UNVERIFIED) && t(9, E.style.display = "none", E);
  }
  function Ye() {
    N && R !== m.UNVERIFIED && _e();
  }
  function St(r) {
    for (const c of te)
      typeof c.onErrorChange == "function" && c.onErrorChange(he);
  }
  function Xe(r) {
    R === m.UNVERIFIED && ne();
  }
  function Fe(r) {
    v && f === "onsubmit" ? R === m.UNVERIFIED ? (r.preventDefault(), r.stopPropagation(), ne().then(() => {
      v == null || v.requestSubmit();
    })) : R !== m.VERIFIED && (r.preventDefault(), r.stopPropagation(), R === m.VERIFYING && je()) : v && N && f === "off" && R === m.UNVERIFIED && (r.preventDefault(), r.stopPropagation(), t(9, E.style.display = "block", E), _e());
  }
  function De() {
    me();
  }
  function je() {
    R === m.VERIFYING && s.waitAlert && alert(s.waitAlert);
  }
  function At(r) {
    for (const c of te)
      typeof c.onStateChange == "function" && c.onStateChange(R);
    N && R !== m.UNVERIFIED && requestAnimationFrame(() => {
      _e();
    }), t(8, re = R === m.VERIFIED);
  }
  function Pe() {
    N && _e();
  }
  function _e(r = 20) {
    if (E)
      if (se || (se = (O ? document.querySelector(O) : v == null ? void 0 : v.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || v), se) {
        const c = parseInt(J, 10) || 12, g = se.getBoundingClientRect(), I = E.getBoundingClientRect(), P = document.documentElement.clientHeight, F = document.documentElement.clientWidth, V = N === "auto" ? g.bottom + I.height + c + r > P : N === "top", p = Math.max(r, Math.min(F - r - I.width, g.left + g.width / 2 - I.width / 2));
        if (V ? t(9, E.style.top = `${g.top - (I.height + c)}px`, E) : t(9, E.style.top = `${g.bottom + c}px`, E), t(9, E.style.left = `${p}px`, E), E.setAttribute("data-floating", V ? "top" : "bottom"), ie) {
          const W = ie.getBoundingClientRect();
          t(10, ie.style.left = g.left - p + g.width / 2 - W.width / 2 + "px", ie);
        }
      } else
        k("unable to find floating anchor element");
  }
  async function Tt(r) {
    if (!ee)
      throw new Error("Attribute verifyurl not set.");
    k("requesting server verification from", ee);
    const c = { payload: r };
    if (_) {
      const { blockedCountries: P, classifier: F, disableRules: V, email: p, expectedLanguages: W, expectedCountries: Ie, fields: be, ipAddress: ye, text: Xt, timeZone: tt } = It();
      c.blockedCountries = P, c.classifier = F, c.disableRules = V, c.email = p === !1 ? void 0 : Ct(p), c.expectedCountries = Ie, c.expectedLanguages = W || (Ze ? [Ze] : void 0), c.fields = be === !1 ? void 0 : Lt(be), c.ipAddress = ye === !1 ? void 0 : ye || "auto", c.text = Xt, c.timeZone = tt === !1 ? void 0 : tt || xn();
    }
    const g = await fetch(ee, {
      body: JSON.stringify(c),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (g.status !== 200)
      throw new Error(`Server responded with ${g.status}.`);
    const I = await g.json();
    if (I != null && I.payload && t(6, oe = I.payload), de("serververification", I), C && I.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  function ke(r) {
    k("expire", r), B && (clearTimeout(B), B = null), r < 1 ? Ge() : B = setTimeout(Ge, r);
  }
  function We(r) {
    k("floating", r), N !== r && (t(9, E.style.left = "", E), t(9, E.style.top = "", E)), t(1, N = r === !0 || r === "" ? "auto" : r === !1 || r === "false" ? void 0 : N), N ? (f || t(0, f = "onsubmit"), document.addEventListener("scroll", Ye), document.addEventListener("click", He), window.addEventListener("resize", Pe)) : f === "onsubmit" && t(0, f = void 0);
  }
  function Ue(r) {
    if (!r.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (r.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!Te.includes(r.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${Te.join(", ")}`);
    if (!r.challenge || r.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!r.salt || r.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function Ke(r) {
    let c = null;
    if ("Worker" in window) {
      try {
        c = await Zt(r, r.maxnumber);
      } catch (g) {
        k(g);
      }
      if ((c == null ? void 0 : c.number) !== void 0 || "obfuscated" in r)
        return { data: r, solution: c };
    }
    if ("obfuscated" in r) {
      const g = await Cn(r.obfuscated, r.key, r.maxnumber);
      return { data: r, solution: await g.promise };
    }
    return {
      data: r,
      solution: await kn(r.challenge, r.salt, r.algorithm, r.maxnumber || K).promise
    };
  }
  async function Zt(r, c = typeof y == "number" ? y : K, g = Math.ceil(le)) {
    const I = [];
    g = Math.min(16, Math.max(1, g));
    for (let V = 0; V < g; V++)
      I.push(altchaCreateWorker(ue));
    const P = Math.ceil(c / g), F = await Promise.all(I.map((V, p) => {
      const W = p * P;
      return new Promise((Ie) => {
        V.addEventListener("message", (be) => {
          if (be.data)
            for (const ye of I)
              ye !== V && ye.postMessage({ type: "abort" });
          Ie(be.data);
        }), V.postMessage({
          payload: r,
          max: W + P,
          start: W,
          type: "work"
        });
      });
    }));
    for (const V of I)
      V.terminate();
    return F.find((V) => !!V) || null;
  }
  async function ge() {
    if (!x) {
      t(7, R = m.ERROR);
      return;
    }
    const r = te.find((c) => c.constructor.pluginName === "obfuscation");
    if (!r || !("clarify" in r)) {
      t(7, R = m.ERROR), k("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in r && typeof r.clarify == "function")
      return r.clarify();
  }
  function Me(r) {
    r.obfuscated !== void 0 && t(24, x = r.obfuscated), r.auto !== void 0 && (t(0, f = r.auto), f === "onload" && (x ? ge() : ne())), r.blockspam !== void 0 && t(16, C = !!r.blockspam), r.floatinganchor !== void 0 && t(20, O = r.floatinganchor), r.delay !== void 0 && t(18, j = r.delay), r.floatingoffset !== void 0 && t(21, J = r.floatingoffset), r.floating !== void 0 && We(r.floating), r.expire !== void 0 && (ke(r.expire), t(19, S = r.expire)), r.challenge && (Ue(r.challenge), o = r.challenge), r.challengeurl !== void 0 && t(15, b = r.challengeurl), r.debug !== void 0 && t(17, D = !!r.debug), r.hidefooter !== void 0 && t(2, G = !!r.hidefooter), r.hidelogo !== void 0 && t(3, A = !!r.hidelogo), r.maxnumber !== void 0 && t(22, K = +r.maxnumber), r.mockerror !== void 0 && t(23, H = !!r.mockerror), r.name !== void 0 && t(4, q = r.name), r.refetchonexpire !== void 0 && t(25, z = !!r.refetchonexpire), r.spamfilter !== void 0 && t(26, _ = typeof r.spamfilter == "object" ? r.spamfilter : !!r.spamfilter), r.strings && t(44, l = r.strings), r.test !== void 0 && t(27, y = typeof r.test == "number" ? r.test : !!r.test), r.verifyurl !== void 0 && t(28, ee = r.verifyurl), r.workers !== void 0 && t(29, le = +r.workers), r.workerurl !== void 0 && t(30, ue = r.workerurl);
  }
  function Be() {
    return {
      auto: f,
      blockspam: C,
      challengeurl: b,
      debug: D,
      delay: j,
      expire: S,
      floating: N,
      floatinganchor: O,
      floatingoffset: J,
      hidefooter: G,
      hidelogo: A,
      name: q,
      maxnumber: K,
      mockerror: H,
      obfuscated: x,
      refetchonexpire: z,
      spamfilter: _,
      strings: s,
      test: y,
      verifyurl: ee,
      workers: le,
      workerurl: ue
    };
  }
  function Oe() {
    return se;
  }
  function Vt(r) {
    return te.find((c) => c.constructor.pluginName === r);
  }
  function Je() {
    return R;
  }
  function me(r = m.UNVERIFIED, c = null) {
    B && (clearTimeout(B), B = null), t(8, re = !1), t(5, he = c), t(6, oe = null), t(7, R = r);
  }
  function Qe(r) {
    se = r;
  }
  function $e(r, c = null) {
    t(7, R = r), t(5, he = c);
  }
  async function ne() {
    return me(m.VERIFYING), await new Promise((r) => setTimeout(r, j || 0)), Rt().then((r) => (Ue(r), k("challenge", r), Ke(r))).then(({ data: r, solution: c }) => {
      if (k("solution", c), "challenge" in r && c && !("clearText" in c))
        if ((c == null ? void 0 : c.number) !== void 0) {
          if (ee)
            return Tt(Ve(r, c));
          t(6, oe = Ve(r, c)), k("payload", oe);
        } else
          throw k("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      cn().then(() => {
        t(7, R = m.VERIFIED), k("verified"), de("verified", { payload: oe });
      });
    }).catch((r) => {
      k(r), t(7, R = m.ERROR), t(5, he = r.message);
    });
  }
  function Gt() {
    re = this.checked, t(8, re);
  }
  function Ht(r) {
    Ce[r ? "unshift" : "push"](() => {
      ie = r, t(10, ie);
    });
  }
  function Yt(r) {
    Ce[r ? "unshift" : "push"](() => {
      E = r, t(9, E);
    });
  }
  return n.$$set = (r) => {
    "auto" in r && t(0, f = r.auto), "blockspam" in r && t(16, C = r.blockspam), "challengeurl" in r && t(15, b = r.challengeurl), "challengejson" in r && t(31, M = r.challengejson), "debug" in r && t(17, D = r.debug), "delay" in r && t(18, j = r.delay), "expire" in r && t(19, S = r.expire), "floating" in r && t(1, N = r.floating), "floatinganchor" in r && t(20, O = r.floatinganchor), "floatingoffset" in r && t(21, J = r.floatingoffset), "hidefooter" in r && t(2, G = r.hidefooter), "hidelogo" in r && t(3, A = r.hidelogo), "name" in r && t(4, q = r.name), "maxnumber" in r && t(22, K = r.maxnumber), "mockerror" in r && t(23, H = r.mockerror), "obfuscated" in r && t(24, x = r.obfuscated), "plugins" in r && t(32, T = r.plugins), "refetchonexpire" in r && t(25, z = r.refetchonexpire), "spamfilter" in r && t(26, _ = r.spamfilter), "strings" in r && t(33, u = r.strings), "test" in r && t(27, y = r.test), "verifyurl" in r && t(28, ee = r.verifyurl), "workers" in r && t(29, le = r.workers), "workerurl" in r && t(30, ue = r.workerurl), "$$scope" in r && t(45, h = r.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*challengeurl*/
    32768 && t(12, i = !!(b != null && b.includes(".altcha.org")) && !!(b != null && b.includes("apiKey=ckey_"))), n.$$.dirty[1] & /*challengejson*/
    1 && (o = M ? dt(M) : void 0), n.$$.dirty[1] & /*strings*/
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
    192 && de("statechange", { payload: oe, state: R }), n.$$.dirty[0] & /*error*/
    32 && St(), n.$$.dirty[0] & /*state*/
    128 && At();
  }, [
    f,
    N,
    G,
    A,
    q,
    he,
    oe,
    R,
    re,
    E,
    ie,
    s,
    i,
    zt,
    je,
    b,
    C,
    D,
    j,
    S,
    O,
    J,
    K,
    H,
    x,
    z,
    _,
    y,
    ee,
    le,
    ue,
    M,
    T,
    u,
    ge,
    Me,
    Be,
    Oe,
    Vt,
    Je,
    me,
    Qe,
    $e,
    ne,
    l,
    h,
    d,
    Gt,
    Ht,
    Yt
  ];
}
class Vn extends vn {
  constructor(e) {
    super(), bn(
      this,
      e,
      Zn,
      Tn,
      Ut,
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
      In,
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
  Vn,
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
globalThis.altchaCreateWorker = (n) => n ? new Worker(new URL(n)) : new Pt();
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
export {
  Vn as Altcha
};
