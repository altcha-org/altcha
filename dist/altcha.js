var Bo = Object.defineProperty;
var Vn = (e) => {
  throw TypeError(e);
};
var Ho = (e, t, r) => t in e ? Bo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Ee = (e, t, r) => Ho(e, typeof t != "symbol" ? t + "" : t, r), Un = (e, t, r) => t.has(e) || Vn("Cannot " + r);
var se = (e, t, r) => (Un(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Sr = (e, t, r) => t.has(e) ? Vn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), Tr = (e, t, r, i) => (Un(e, t, "write to private field"), i ? i.call(e, r) : t.set(e, r), r);
const ni = `(function(){"use strict";const d=new TextEncoder;function p(e){return[...new Uint8Array(e)].map(t=>t.toString(16).padStart(2,"0")).join("")}async function b(e,t,r){if(typeof crypto>"u"||!("subtle"in crypto)||!("digest"in crypto.subtle))throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");return p(await crypto.subtle.digest(r.toUpperCase(),d.encode(e+t)))}function w(e,t,r="SHA-256",n=1e6,s=0){const o=new AbortController,a=Date.now();return{promise:(async()=>{for(let c=s;c<=n;c+=1){if(o.signal.aborted)return null;if(await b(t,c,r)===e)return{number:c,took:Date.now()-a}}return null})(),controller:o}}function h(e){const t=atob(e),r=new Uint8Array(t.length);for(let n=0;n<t.length;n++)r[n]=t.charCodeAt(n);return r}function g(e,t=12){const r=new Uint8Array(t);for(let n=0;n<t;n++)r[n]=e%256,e=Math.floor(e/256);return r}async function m(e,t="",r=1e6,n=0){const s="AES-GCM",o=new AbortController,a=Date.now(),l=async()=>{for(let u=n;u<=r;u+=1){if(o.signal.aborted||!c||!y)return null;try{const f=await crypto.subtle.decrypt({name:s,iv:g(u)},c,y);if(f)return{clearText:new TextDecoder().decode(f),took:Date.now()-a}}catch{}}return null};let c=null,y=null;try{y=h(e);const u=await crypto.subtle.digest("SHA-256",d.encode(t));c=await crypto.subtle.importKey("raw",u,s,!1,["decrypt"])}catch{return{promise:Promise.reject(),controller:o}}return{promise:l(),controller:o}}let i;onmessage=async e=>{const{type:t,payload:r,start:n,max:s}=e.data;let o=null;if(t==="abort")i==null||i.abort(),i=void 0;else if(t==="work"){if("obfuscated"in r){const{key:a,obfuscated:l}=r||{};o=await m(l,a,s,n)}else{const{algorithm:a,challenge:l,salt:c}=r||{};o=w(l,c,a,s,n)}i=o.controller,o.promise.then(a=>{self.postMessage(a&&{...a,worker:!0})})}}})();
`, jn = typeof self < "u" && self.Blob && new Blob([ni], { type: "text/javascript;charset=utf-8" });
function Go(e) {
  let t;
  try {
    if (t = jn && (self.URL || self.webkitURL).createObjectURL(jn), !t) throw "";
    const r = new Worker(t, {
      name: e == null ? void 0 : e.name
    });
    return r.addEventListener("error", () => {
      (self.URL || self.webkitURL).revokeObjectURL(t);
    }), r;
  } catch {
    return new Worker(
      "data:text/javascript;charset=utf-8," + encodeURIComponent(ni),
      {
        name: e == null ? void 0 : e.name
      }
    );
  } finally {
    t && (self.URL || self.webkitURL).revokeObjectURL(t);
  }
}
const Wo = "5";
var ri;
typeof window < "u" && ((ri = window.__svelte ?? (window.__svelte = {})).v ?? (ri.v = /* @__PURE__ */ new Set())).add(Wo);
const Yo = 1, Zo = 4, zo = 8, Jo = 16, Ko = 1, Xo = 2, Br = "[", ii = "[!", oi = "]", Ct = {}, ue = Symbol(), Qo = "http://www.w3.org/1999/xhtml", qn = !1;
function ai(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var li = Array.isArray, ea = Array.prototype.indexOf, ta = Array.from, lr = Object.keys, qt = Object.defineProperty, it = Object.getOwnPropertyDescriptor, ra = Object.getOwnPropertyDescriptors, na = Object.prototype, ia = Array.prototype, si = Object.getPrototypeOf, Bn = Object.isExtensible;
const xt = () => {
};
function ui(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function oa(e, t, r = !1) {
  return e === void 0 ? r ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
const Ce = 2, fi = 4, vr = 8, Hr = 16, Fe = 32, lt = 64, sr = 128, ve = 256, ur = 512, fe = 1024, Ne = 2048, st = 4096, kt = 8192, gr = 16384, aa = 32768, Gr = 65536, la = 1 << 19, ci = 1 << 20, Pr = 1 << 21, Ut = Symbol("$state"), di = Symbol("legacy props"), sa = Symbol("");
function ua(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function fa() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function ca(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function da() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ha() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function va(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function ga() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function pa() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function ma() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function pr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let F = !1;
function Et(e) {
  F = e;
}
let O;
function Ge(e) {
  if (e === null)
    throw pr(), Ct;
  return O = e;
}
function At() {
  return Ge(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ze(O)
  );
}
function Y(e) {
  if (F) {
    if (/* @__PURE__ */ Ze(O) !== null)
      throw pr(), Ct;
    O = e;
  }
}
function _a() {
  for (var e = 0, t = O; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === oi) {
        if (e === 0) return t;
        e -= 1;
      } else (r === Br || r === ii) && (e += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ze(t)
    );
    t.remove(), t = i;
  }
}
let ba = !1;
function Be(e) {
  if (typeof e != "object" || e === null || Ut in e)
    return e;
  const t = si(e);
  if (t !== na && t !== ia)
    return e;
  var r = /* @__PURE__ */ new Map(), i = li(e), l = /* @__PURE__ */ L(0), o = T, f = (s) => {
    var c = T;
    Le(o);
    var d = s();
    return Le(c), d;
  };
  return i && r.set("length", /* @__PURE__ */ L(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, c, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && ga();
        var _ = r.get(c);
        return _ === void 0 ? (_ = f(() => /* @__PURE__ */ L(d.value)), r.set(c, _)) : b(
          _,
          f(() => Be(d.value))
        ), !0;
      },
      deleteProperty(s, c) {
        var d = r.get(c);
        if (d === void 0)
          c in s && (r.set(
            c,
            f(() => /* @__PURE__ */ L(ue))
          ), Dr(l));
        else {
          if (i && typeof c == "string") {
            var _ = (
              /** @type {Source<number>} */
              r.get("length")
            ), v = Number(c);
            Number.isInteger(v) && v < _.v && b(_, v);
          }
          b(d, ue), Dr(l);
        }
        return !0;
      },
      get(s, c, d) {
        var y;
        if (c === Ut)
          return e;
        var _ = r.get(c), v = c in s;
        if (_ === void 0 && (!v || (y = it(s, c)) != null && y.writable) && (_ = f(() => /* @__PURE__ */ L(Be(v ? s[c] : ue))), r.set(c, _)), _ !== void 0) {
          var m = a(_);
          return m === ue ? void 0 : m;
        }
        return Reflect.get(s, c, d);
      },
      getOwnPropertyDescriptor(s, c) {
        var d = Reflect.getOwnPropertyDescriptor(s, c);
        if (d && "value" in d) {
          var _ = r.get(c);
          _ && (d.value = a(_));
        } else if (d === void 0) {
          var v = r.get(c), m = v == null ? void 0 : v.v;
          if (v !== void 0 && m !== ue)
            return {
              enumerable: !0,
              configurable: !0,
              value: m,
              writable: !0
            };
        }
        return d;
      },
      has(s, c) {
        var m;
        if (c === Ut)
          return !0;
        var d = r.get(c), _ = d !== void 0 && d.v !== ue || Reflect.has(s, c);
        if (d !== void 0 || D !== null && (!_ || (m = it(s, c)) != null && m.writable)) {
          d === void 0 && (d = f(() => /* @__PURE__ */ L(_ ? Be(s[c]) : ue)), r.set(c, d));
          var v = a(d);
          if (v === ue)
            return !1;
        }
        return _;
      },
      set(s, c, d, _) {
        var K;
        var v = r.get(c), m = c in s;
        if (i && c === "length")
          for (var y = d; y < /** @type {Source<number>} */
          v.v; y += 1) {
            var $ = r.get(y + "");
            $ !== void 0 ? b($, ue) : y in s && ($ = f(() => /* @__PURE__ */ L(ue)), r.set(y + "", $));
          }
        v === void 0 ? (!m || (K = it(s, c)) != null && K.writable) && (v = f(() => /* @__PURE__ */ L(void 0)), b(
          v,
          f(() => Be(d))
        ), r.set(c, v)) : (m = v.v !== ue, b(
          v,
          f(() => Be(d))
        ));
        var E = Reflect.getOwnPropertyDescriptor(s, c);
        if (E != null && E.set && E.set.call(_, d), !m) {
          if (i && typeof c == "string") {
            var U = (
              /** @type {Source<number>} */
              r.get("length")
            ), ce = Number(c);
            Number.isInteger(ce) && ce >= U.v && b(U, ce + 1);
          }
          Dr(l);
        }
        return !0;
      },
      ownKeys(s) {
        a(l);
        var c = Reflect.ownKeys(s).filter((v) => {
          var m = r.get(v);
          return m === void 0 || m.v !== ue;
        });
        for (var [d, _] of r)
          _.v !== ue && !(d in s) && c.push(d);
        return c;
      },
      setPrototypeOf() {
        pa();
      }
    }
  );
}
function Dr(e, t = 1) {
  b(e, e.v + t);
}
var Hn, hi, vi, gi;
function Or() {
  if (Hn === void 0) {
    Hn = window, hi = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    vi = it(t, "firstChild").get, gi = it(t, "nextSibling").get, Bn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Bn(r) && (r.__t = void 0);
  }
}
function mr(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function _e(e) {
  return vi.call(e);
}
// @__NO_SIDE_EFFECTS__
function Ze(e) {
  return gi.call(e);
}
function Z(e, t) {
  if (!F)
    return /* @__PURE__ */ _e(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ _e(O)
  );
  return r === null && (r = O.appendChild(mr())), Ge(r), r;
}
function Ft(e, t) {
  if (!F) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ _e(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Ze(r) : r;
  }
  return O;
}
function z(e, t = 1, r = !1) {
  let i = F ? O : e;
  for (var l; t--; )
    l = i, i = /** @type {TemplateNode} */
    /* @__PURE__ */ Ze(i);
  if (!F)
    return i;
  var o = i == null ? void 0 : i.nodeType;
  if (r && o !== 3) {
    var f = mr();
    return i === null ? l == null || l.after(f) : i.before(f), Ge(f), f;
  }
  return Ge(i), /** @type {TemplateNode} */
  i;
}
function ya(e) {
  e.textContent = "";
}
function pi(e) {
  return e === this.v;
}
function mi(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Wr(e) {
  return !mi(e, this.v);
}
// @__NO_SIDE_EFFECTS__
function _r(e) {
  var t = Ce | Ne, r = T !== null && (T.f & Ce) !== 0 ? (
    /** @type {Derived} */
    T
  ) : null;
  return D === null || r !== null && (r.f & ve) !== 0 ? t |= ve : D.f |= ci, {
    ctx: oe,
    deps: null,
    effects: null,
    equals: pi,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: r ?? D
  };
}
// @__NO_SIDE_EFFECTS__
function Mt(e) {
  const t = /* @__PURE__ */ _r(e);
  return Si(t), t;
}
// @__NO_SIDE_EFFECTS__
function wa(e) {
  const t = /* @__PURE__ */ _r(e);
  return t.equals = Wr, t;
}
function _i(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      We(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Ea(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & Ce) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function bi(e) {
  var t, r = D;
  Ye(Ea(e));
  try {
    _i(e), t = Li(e);
  } finally {
    Ye(r);
  }
  return t;
}
function yi(e) {
  var t = bi(e), r = (He || (e.f & ve) !== 0) && e.deps !== null ? st : fe;
  xe(e, r), e.equals(t) || (e.v = t, e.wv = Di());
}
function Ca(e) {
  D === null && T === null && ca(), T !== null && (T.f & ve) !== 0 && D === null && fa(), Wt && ua();
}
function xa(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function ut(e, t, r, i = !0) {
  var l = D, o = {
    ctx: oe,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Ne,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: l,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (r)
    try {
      Kr(o), o.f |= aa;
    } catch (c) {
      throw We(o), c;
    }
  else t !== null && yr(o);
  var f = r && o.deps === null && o.first === null && o.nodes_start === null && o.teardown === null && (o.f & (ci | sr)) === 0;
  if (!f && i && (l !== null && xa(o, l), T !== null && (T.f & Ce) !== 0)) {
    var s = (
      /** @type {Derived} */
      T
    );
    (s.effects ?? (s.effects = [])).push(o);
  }
  return o;
}
function Yr(e) {
  const t = ut(vr, null, !1);
  return xe(t, fe), t.teardown = e, t;
}
function Fr(e) {
  Ca();
  var t = D !== null && (D.f & Fe) !== 0 && oe !== null && !oe.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      oe
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: D,
      reaction: T
    });
  } else {
    var i = Zr(e);
    return i;
  }
}
function ka(e) {
  const t = ut(lt, e, !0);
  return () => {
    We(t);
  };
}
function Aa(e) {
  const t = ut(lt, e, !0);
  return (r = {}) => new Promise((i) => {
    r.outro ? Vr(t, () => {
      We(t), i(void 0);
    }) : (We(t), i(void 0));
  });
}
function Zr(e) {
  return ut(fi, e, !1);
}
function zr(e) {
  return ut(vr, e, !0);
}
function Se(e, t = [], r = _r) {
  const i = t.map(r);
  return wi(() => e(...i.map(a)));
}
function wi(e, t = 0) {
  return ut(vr | Hr | t, e, !0);
}
function Mr(e, t = !0) {
  return ut(vr | Fe, e, !0, t);
}
function Ei(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Wt, i = T;
    Wn(!0), Le(null);
    try {
      t.call(null);
    } finally {
      Wn(r), Le(i);
    }
  }
}
function Ci(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var i = r.next;
    (r.f & lt) !== 0 ? r.parent = null : We(r, t), r = i;
  }
}
function Ia(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Fe) === 0 && We(t), t = r;
  }
}
function We(e, t = !0) {
  var r = !1;
  (t || (e.f & la) !== 0) && e.nodes_start !== null && (xi(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), r = !0), Ci(e, t && !r), hr(e, 0), xe(e, gr);
  var i = e.transitions;
  if (i !== null)
    for (const o of i)
      o.stop();
  Ei(e);
  var l = e.parent;
  l !== null && l.first !== null && ki(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function xi(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ze(e)
    );
    e.remove(), e = r;
  }
}
function ki(e) {
  var t = e.parent, r = e.prev, i = e.next;
  r !== null && (r.next = i), i !== null && (i.prev = r), t !== null && (t.first === e && (t.first = i), t.last === e && (t.last = r));
}
function Vr(e, t) {
  var r = [];
  Ai(e, r, !0), Ra(r, () => {
    We(e), t && t();
  });
}
function Ra(e, t) {
  var r = e.length;
  if (r > 0) {
    var i = () => --r || t();
    for (var l of e)
      l.out(i);
  } else
    t();
}
function Ai(e, t, r) {
  if ((e.f & kt) === 0) {
    if (e.f ^= kt, e.transitions !== null)
      for (const f of e.transitions)
        (f.is_global || r) && t.push(f);
    for (var i = e.first; i !== null; ) {
      var l = i.next, o = (i.f & Gr) !== 0 || (i.f & Fe) !== 0;
      Ai(i, t, o ? r : !1), i = l;
    }
  }
}
function Gn(e) {
  Ii(e, !0);
}
function Ii(e, t) {
  if ((e.f & kt) !== 0) {
    e.f ^= kt, (e.f & fe) === 0 && (e.f ^= fe), Yt(e) && (xe(e, Ne), yr(e));
    for (var r = e.first; r !== null; ) {
      var i = r.next, l = (r.f & Gr) !== 0 || (r.f & Fe) !== 0;
      Ii(r, l ? t : !1), r = i;
    }
    if (e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || t) && o.in();
  }
}
const $a = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Bt = [], Ht = [];
function Ri() {
  var e = Bt;
  Bt = [], ui(e);
}
function $i() {
  var e = Ht;
  Ht = [], ui(e);
}
function Jr(e) {
  Bt.length === 0 && queueMicrotask(Ri), Bt.push(e);
}
function Sa(e) {
  Ht.length === 0 && $a($i), Ht.push(e);
}
function Ta() {
  Bt.length > 0 && Ri(), Ht.length > 0 && $i();
}
let ir = !1, fr = !1, cr = null, ot = !1, Wt = !1;
function Wn(e) {
  Wt = e;
}
let jt = [];
let T = null, Te = !1;
function Le(e) {
  T = e;
}
let D = null;
function Ye(e) {
  D = e;
}
let ie = null;
function Si(e) {
  T !== null && T.f & Pr && (ie === null ? ie = [e] : ie.push(e));
}
let ne = null, he = 0, pe = null;
function Da(e) {
  pe = e;
}
let Ti = 1, dr = 0, He = !1;
function Di() {
  return ++Ti;
}
function Yt(e) {
  var v;
  var t = e.f;
  if ((t & Ne) !== 0)
    return !0;
  if ((t & st) !== 0) {
    var r = e.deps, i = (t & ve) !== 0;
    if (r !== null) {
      var l, o, f = (t & ur) !== 0, s = i && D !== null && !He, c = r.length;
      if (f || s) {
        var d = (
          /** @type {Derived} */
          e
        ), _ = d.parent;
        for (l = 0; l < c; l++)
          o = r[l], (f || !((v = o == null ? void 0 : o.reactions) != null && v.includes(d))) && (o.reactions ?? (o.reactions = [])).push(d);
        f && (d.f ^= ur), s && _ !== null && (_.f & ve) === 0 && (d.f ^= ve);
      }
      for (l = 0; l < c; l++)
        if (o = r[l], Yt(
          /** @type {Derived} */
          o
        ) && yi(
          /** @type {Derived} */
          o
        ), o.wv > e.wv)
          return !0;
    }
    (!i || D !== null && !He) && xe(e, fe);
  }
  return !1;
}
function Na(e, t) {
  for (var r = t; r !== null; ) {
    if ((r.f & sr) !== 0)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= sr;
      }
    r = r.parent;
  }
  throw ir = !1, e;
}
function Yn(e) {
  return (e.f & gr) === 0 && (e.parent === null || (e.parent.f & sr) === 0);
}
function br(e, t, r, i) {
  if (ir) {
    if (r === null && (ir = !1), Yn(t))
      throw e;
    return;
  }
  if (r !== null && (ir = !0), Na(e, t), Yn(t))
    throw e;
}
function Ni(e, t, r = !0) {
  var i = e.reactions;
  if (i !== null)
    for (var l = 0; l < i.length; l++) {
      var o = i[l];
      ie != null && ie.includes(e) || ((o.f & Ce) !== 0 ? Ni(
        /** @type {Derived} */
        o,
        t,
        !1
      ) : t === o && (r ? xe(o, Ne) : (o.f & fe) !== 0 && xe(o, st), yr(
        /** @type {Effect} */
        o
      )));
    }
}
function Li(e) {
  var y;
  var t = ne, r = he, i = pe, l = T, o = He, f = ie, s = oe, c = Te, d = e.f;
  ne = /** @type {null | Value[]} */
  null, he = 0, pe = null, He = (d & ve) !== 0 && (Te || !ot || T === null), T = (d & (Fe | lt)) === 0 ? e : null, ie = null, Zn(e.ctx), Te = !1, dr++, e.f |= Pr;
  try {
    var _ = (
      /** @type {Function} */
      (0, e.fn)()
    ), v = e.deps;
    if (ne !== null) {
      var m;
      if (hr(e, he), v !== null && he > 0)
        for (v.length = he + ne.length, m = 0; m < ne.length; m++)
          v[he + m] = ne[m];
      else
        e.deps = v = ne;
      if (!He)
        for (m = he; m < v.length; m++)
          ((y = v[m]).reactions ?? (y.reactions = [])).push(e);
    } else v !== null && he < v.length && (hr(e, he), v.length = he);
    if (Ui() && pe !== null && !Te && v !== null && (e.f & (Ce | st | Ne)) === 0)
      for (m = 0; m < /** @type {Source[]} */
      pe.length; m++)
        Ni(
          pe[m],
          /** @type {Effect} */
          e
        );
    return l !== null && l !== e && (dr++, pe !== null && (i === null ? i = pe : i.push(.../** @type {Source[]} */
    pe))), _;
  } finally {
    ne = t, he = r, pe = i, T = l, He = o, ie = f, Zn(s), Te = c, e.f ^= Pr;
  }
}
function La(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var i = ea.call(r, e);
    if (i !== -1) {
      var l = r.length - 1;
      l === 0 ? r = t.reactions = null : (r[i] = r[l], r.pop());
    }
  }
  r === null && (t.f & Ce) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ne === null || !ne.includes(t)) && (xe(t, st), (t.f & (ve | ur)) === 0 && (t.f ^= ur), _i(
    /** @type {Derived} **/
    t
  ), hr(
    /** @type {Derived} **/
    t,
    0
  ));
}
function hr(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var i = t; i < r.length; i++)
      La(e, r[i]);
}
function Kr(e) {
  var t = e.f;
  if ((t & gr) === 0) {
    xe(e, fe);
    var r = D, i = oe, l = ot;
    D = e, ot = !0;
    try {
      (t & Hr) !== 0 ? Ia(e) : Ci(e), Ei(e);
      var o = Li(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = Ti;
      var f = e.deps, s;
      qn && ba && e.f & Ne;
    } catch (c) {
      br(c, e, r, i || e.ctx);
    } finally {
      ot = l, D = r;
    }
  }
}
function Pa() {
  try {
    da();
  } catch (e) {
    if (cr !== null)
      br(e, cr, null);
    else
      throw e;
  }
}
function Pi() {
  var e = ot;
  try {
    var t = 0;
    for (ot = !0; jt.length > 0; ) {
      t++ > 1e3 && Pa();
      var r = jt, i = r.length;
      jt = [];
      for (var l = 0; l < i; l++) {
        var o = Fa(r[l]);
        Oa(o);
      }
      Gt.clear();
    }
  } finally {
    fr = !1, ot = e, cr = null;
  }
}
function Oa(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var i = e[r];
      if ((i.f & (gr | kt)) === 0)
        try {
          Yt(i) && (Kr(i), i.deps === null && i.first === null && i.nodes_start === null && (i.teardown === null ? ki(i) : i.fn = null));
        } catch (l) {
          br(l, i, null, i.ctx);
        }
    }
}
function yr(e) {
  fr || (fr = !0, queueMicrotask(Pi));
  for (var t = cr = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (lt | Fe)) !== 0) {
      if ((r & fe) === 0) return;
      t.f ^= fe;
    }
  }
  jt.push(t);
}
function Fa(e) {
  for (var t = [], r = e; r !== null; ) {
    var i = r.f, l = (i & (Fe | lt)) !== 0, o = l && (i & fe) !== 0;
    if (!o && (i & kt) === 0) {
      if ((i & fi) !== 0)
        t.push(r);
      else if (l)
        r.f ^= fe;
      else
        try {
          Yt(r) && Kr(r);
        } catch (c) {
          br(c, r, null, r.ctx);
        }
      var f = r.first;
      if (f !== null) {
        r = f;
        continue;
      }
    }
    var s = r.parent;
    for (r = r.next; r === null && s !== null; )
      r = s.next, s = s.parent;
  }
  return t;
}
function x(e) {
  for (var t; ; ) {
    if (Ta(), jt.length === 0)
      return (
        /** @type {T} */
        t
      );
    fr = !0, Pi();
  }
}
async function Nr() {
  await Promise.resolve(), x();
}
function a(e) {
  var t = e.f, r = (t & Ce) !== 0;
  if (T !== null && !Te) {
    if (!(ie != null && ie.includes(e))) {
      var i = T.deps;
      e.rv < dr && (e.rv = dr, ne === null && i !== null && i[he] === e ? he++ : ne === null ? ne = [e] : (!He || !ne.includes(e)) && ne.push(e));
    }
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var l = (
      /** @type {Derived} */
      e
    ), o = l.parent;
    o !== null && (o.f & ve) === 0 && (l.f ^= ve);
  }
  return r && (l = /** @type {Derived} */
  e, Yt(l) && yi(l)), Wt && Gt.has(e) ? Gt.get(e) : e.v;
}
function at(e) {
  var t = Te;
  try {
    return Te = !0, e();
  } finally {
    Te = t;
  }
}
const Ma = -7169;
function xe(e, t) {
  e.f = e.f & Ma | t;
}
const Gt = /* @__PURE__ */ new Map();
function Oi(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: pi,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function L(e, t) {
  const r = Oi(e);
  return Si(r), r;
}
// @__NO_SIDE_EFFECTS__
function Xr(e, t = !1) {
  const r = Oi(e);
  return t || (r.equals = Wr), r;
}
function b(e, t, r = !1) {
  T !== null && !Te && Ui() && (T.f & (Ce | Hr)) !== 0 && !(ie != null && ie.includes(e)) && ma();
  let i = r ? Be(t) : t;
  return Va(e, i);
}
function Va(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    Wt ? Gt.set(e, t) : Gt.set(e, r), e.v = t, (e.f & Ce) !== 0 && ((e.f & Ne) !== 0 && bi(
      /** @type {Derived} */
      e
    ), xe(e, (e.f & ve) === 0 ? fe : st)), e.wv = Di(), Fi(e, Ne), D !== null && (D.f & fe) !== 0 && (D.f & (Fe | lt)) === 0 && (pe === null ? Da([e]) : pe.push(e));
  }
  return t;
}
function Fi(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, l = 0; l < i; l++) {
      var o = r[l], f = o.f;
      (f & Ne) === 0 && (xe(o, t), (f & (fe | ve)) !== 0 && ((f & Ce) !== 0 ? Fi(
        /** @type {Derived} */
        o,
        st
      ) : yr(
        /** @type {Effect} */
        o
      )));
    }
}
let oe = null;
function Zn(e) {
  oe = e;
}
function Mi(e, t = !1, r) {
  var i = oe = {
    p: oe,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
  Yr(() => {
    i.d = !0;
  });
}
function Vi(e) {
  const t = oe;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const f = t.e;
    if (f !== null) {
      var r = D, i = T;
      t.e = null;
      try {
        for (var l = 0; l < f.length; l++) {
          var o = f[l];
          Ye(o.effect), Le(o.reaction), Zr(o.fn);
        }
      } finally {
        Ye(r), Le(i);
      }
    }
    oe = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Ui() {
  return !0;
}
const Ua = ["touchstart", "touchmove"];
function ja(e) {
  return Ua.includes(e);
}
function qa(e, t) {
  if (t) {
    const r = document.body;
    e.autofocus = !0, Jr(() => {
      document.activeElement === r && e.focus();
    });
  }
}
let zn = !1;
function ji() {
  zn || (zn = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        var t;
        if (!e.defaultPrevented)
          for (
            const r of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            (t = r.__on_r) == null || t.call(r);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function qi(e) {
  var t = T, r = D;
  Le(null), Ye(null);
  try {
    return e();
  } finally {
    Le(t), Ye(r);
  }
}
function Ba(e, t, r, i = r) {
  e.addEventListener(t, () => qi(r));
  const l = e.__on_r;
  l ? e.__on_r = () => {
    l(), i(!0);
  } : e.__on_r = () => i(!0), ji();
}
const Bi = /* @__PURE__ */ new Set(), Ur = /* @__PURE__ */ new Set();
function Ha(e, t, r, i = {}) {
  function l(o) {
    if (i.capture || Vt.call(t, o), !o.cancelBubble)
      return qi(() => r == null ? void 0 : r.call(this, o));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Jr(() => {
    t.addEventListener(e, l, i);
  }) : t.addEventListener(e, l, i), l;
}
function qe(e, t, r, i, l) {
  var o = { capture: i, passive: l }, f = Ha(e, t, r, o);
  (t === document.body || t === window || t === document) && Yr(() => {
    t.removeEventListener(e, f, o);
  });
}
function Ga(e) {
  for (var t = 0; t < e.length; t++)
    Bi.add(e[t]);
  for (var r of Ur)
    r(e);
}
function Vt(e) {
  var K;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), i = e.type, l = ((K = e.composedPath) == null ? void 0 : K.call(e)) || [], o = (
    /** @type {null | Element} */
    l[0] || e.target
  ), f = 0, s = e.__root;
  if (s) {
    var c = l.indexOf(s);
    if (c !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var d = l.indexOf(t);
    if (d === -1)
      return;
    c <= d && (f = c);
  }
  if (o = /** @type {Element} */
  l[f] || e.target, o !== t) {
    qt(e, "currentTarget", {
      configurable: !0,
      get() {
        return o || r;
      }
    });
    var _ = T, v = D;
    Le(null), Ye(null);
    try {
      for (var m, y = []; o !== null; ) {
        var $ = o.assignedSlot || o.parentNode || /** @type {any} */
        o.host || null;
        try {
          var E = o["__" + i];
          if (E != null && (!/** @type {any} */
          o.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === o))
            if (li(E)) {
              var [U, ...ce] = E;
              U.apply(o, [e, ...ce]);
            } else
              E.call(o, e);
        } catch (te) {
          m ? y.push(te) : m = te;
        }
        if (e.cancelBubble || $ === t || $ === null)
          break;
        o = $;
      }
      if (m) {
        for (let te of y)
          queueMicrotask(() => {
            throw te;
          });
        throw m;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Le(_), Ye(v);
    }
  }
}
function Qr(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function De(e, t) {
  var r = (
    /** @type {Effect} */
    D
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ke(e, t) {
  var r = (t & Ko) !== 0, i = (t & Xo) !== 0, l, o = !e.startsWith("<!>");
  return () => {
    if (F)
      return De(O, null), O;
    l === void 0 && (l = Qr(o ? e : "<!>" + e), r || (l = /** @type {Node} */
    /* @__PURE__ */ _e(l)));
    var f = (
      /** @type {TemplateNode} */
      i || hi ? document.importNode(l, !0) : l.cloneNode(!0)
    );
    if (r) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ _e(f)
      ), c = (
        /** @type {TemplateNode} */
        f.lastChild
      );
      De(s, c);
    } else
      De(f, f);
    return f;
  };
}
// @__NO_SIDE_EFFECTS__
function wr(e, t, r = "svg") {
  var i = !e.startsWith("<!>"), l = `<${r}>${i ? e : "<!>" + e}</${r}>`, o;
  return () => {
    if (F)
      return De(O, null), O;
    if (!o) {
      var f = (
        /** @type {DocumentFragment} */
        Qr(l)
      ), s = (
        /** @type {Element} */
        /* @__PURE__ */ _e(f)
      );
      o = /** @type {Element} */
      /* @__PURE__ */ _e(s);
    }
    var c = (
      /** @type {TemplateNode} */
      o.cloneNode(!0)
    );
    return De(c, c), c;
  };
}
function tr() {
  if (F)
    return De(O, null), O;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = mr();
  return e.append(t, r), De(t, r), e;
}
function j(e, t) {
  if (F) {
    D.nodes_end = O, At();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Wa(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function Hi(e, t) {
  return Gi(e, t);
}
function Ya(e, t) {
  Or(), t.intro = t.intro ?? !1;
  const r = t.target, i = F, l = O;
  try {
    for (var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ _e(r)
    ); o && (o.nodeType !== 8 || /** @type {Comment} */
    o.data !== Br); )
      o = /** @type {TemplateNode} */
      /* @__PURE__ */ Ze(o);
    if (!o)
      throw Ct;
    Et(!0), Ge(
      /** @type {Comment} */
      o
    ), At();
    const f = Gi(e, { ...t, anchor: o });
    if (O === null || O.nodeType !== 8 || /** @type {Comment} */
    O.data !== oi)
      throw pr(), Ct;
    return Et(!1), /**  @type {Exports} */
    f;
  } catch (f) {
    if (f === Ct)
      return t.recover === !1 && ha(), Or(), ya(r), Et(!1), Hi(e, t);
    throw f;
  } finally {
    Et(i), Ge(l);
  }
}
const yt = /* @__PURE__ */ new Map();
function Gi(e, { target: t, anchor: r, props: i = {}, events: l, context: o, intro: f = !0 }) {
  Or();
  var s = /* @__PURE__ */ new Set(), c = (v) => {
    for (var m = 0; m < v.length; m++) {
      var y = v[m];
      if (!s.has(y)) {
        s.add(y);
        var $ = ja(y);
        t.addEventListener(y, Vt, { passive: $ });
        var E = yt.get(y);
        E === void 0 ? (document.addEventListener(y, Vt, { passive: $ }), yt.set(y, 1)) : yt.set(y, E + 1);
      }
    }
  };
  c(ta(Bi)), Ur.add(c);
  var d = void 0, _ = Aa(() => {
    var v = r ?? t.appendChild(mr());
    return Mr(() => {
      if (o) {
        Mi({});
        var m = (
          /** @type {ComponentContext} */
          oe
        );
        m.c = o;
      }
      l && (i.$$events = l), F && De(
        /** @type {TemplateNode} */
        v,
        null
      ), d = e(v, i) || {}, F && (D.nodes_end = O), o && Vi();
    }), () => {
      var $;
      for (var m of s) {
        t.removeEventListener(m, Vt);
        var y = (
          /** @type {number} */
          yt.get(m)
        );
        --y === 0 ? (document.removeEventListener(m, Vt), yt.delete(m)) : yt.set(m, y);
      }
      Ur.delete(c), v !== r && (($ = v.parentNode) == null || $.removeChild(v));
    };
  });
  return jr.set(d, _), d;
}
let jr = /* @__PURE__ */ new WeakMap();
function Za(e, t) {
  const r = jr.get(e);
  return r ? (jr.delete(e), r(t)) : Promise.resolve();
}
function J(e, t, [r, i] = [0, 0]) {
  F && r === 0 && At();
  var l = e, o = null, f = null, s = ue, c = r > 0 ? Gr : 0, d = !1;
  const _ = (m, y = !0) => {
    d = !0, v(y, m);
  }, v = (m, y) => {
    if (s === (s = m)) return;
    let $ = !1;
    if (F && i !== -1) {
      if (r === 0) {
        const U = (
          /** @type {Comment} */
          l.data
        );
        U === Br ? i = 0 : U === ii ? i = 1 / 0 : (i = parseInt(U.substring(1)), i !== i && (i = s ? 1 / 0 : -1));
      }
      const E = i > r;
      !!s === E && (l = _a(), Ge(l), Et(!1), $ = !0, i = -1);
    }
    s ? (o ? Gn(o) : y && (o = Mr(() => y(l))), f && Vr(f, () => {
      f = null;
    })) : (f ? Gn(f) : y && (f = Mr(() => y(l, [r + 1, i]))), o && Vr(o, () => {
      o = null;
    })), $ && Et(!0);
  };
  wi(() => {
    d = !1, t(_), d || v(null, null);
  }, c), F && (l = O);
}
function nt(e, t, r = !1, i = !1, l = !1) {
  var o = e, f = "";
  Se(() => {
    var s = (
      /** @type {Effect} */
      D
    );
    if (f === (f = t() ?? "")) {
      F && At();
      return;
    }
    if (s.nodes_start !== null && (xi(
      s.nodes_start,
      /** @type {TemplateNode} */
      s.nodes_end
    ), s.nodes_start = s.nodes_end = null), f !== "") {
      if (F) {
        O.data;
        for (var c = At(), d = c; c !== null && (c.nodeType !== 8 || /** @type {Comment} */
        c.data !== ""); )
          d = c, c = /** @type {TemplateNode} */
          /* @__PURE__ */ Ze(c);
        if (c === null)
          throw pr(), Ct;
        De(O, d), o = Ge(c);
        return;
      }
      var _ = f + "";
      r ? _ = `<svg>${_}</svg>` : i && (_ = `<math>${_}</math>`);
      var v = Qr(_);
      if ((r || i) && (v = /** @type {Element} */
      /* @__PURE__ */ _e(v)), De(
        /** @type {TemplateNode} */
        /* @__PURE__ */ _e(v),
        /** @type {TemplateNode} */
        v.lastChild
      ), r || i)
        for (; /* @__PURE__ */ _e(v); )
          o.before(
            /** @type {Node} */
            /* @__PURE__ */ _e(v)
          );
      else
        o.before(v);
    }
  });
}
function za(e, t, r, i, l) {
  var s;
  F && At();
  var o = (s = t.$$slots) == null ? void 0 : s[r], f = !1;
  o === !0 && (o = t.children, f = !0), o === void 0 || o(e, f ? () => i : i);
}
const Jn = [...` 	
\r\f \v\uFEFF`];
function Ja(e, t, r) {
  var i = "" + e;
  if (r) {
    for (var l in r)
      if (r[l])
        i = i ? i + " " + l : l;
      else if (i.length)
        for (var o = l.length, f = 0; (f = i.indexOf(l, f)) >= 0; ) {
          var s = f + o;
          (f === 0 || Jn.includes(i[f - 1])) && (s === i.length || Jn.includes(i[s])) ? i = (f === 0 ? "" : i.substring(0, f)) + i.substring(s + 1) : f = s;
        }
  }
  return i === "" ? null : i;
}
function Ka(e, t, r, i, l, o) {
  var f = e.__className;
  if (F || f !== r || f === void 0) {
    var s = Ja(r, i, o);
    (!F || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : e.className = s), e.__className = r;
  } else if (o && l !== o)
    for (var c in o) {
      var d = !!o[c];
      (l == null || d !== !!l[c]) && e.classList.toggle(c, d);
    }
  return o;
}
const Xa = Symbol("is custom element"), Qa = Symbol("is html");
function Kn(e) {
  if (F) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var i = e.value;
          S(e, "value", null), e.value = i;
        }
        if (e.hasAttribute("checked")) {
          var l = e.checked;
          S(e, "checked", null), e.checked = l;
        }
      }
    };
    e.__on_r = r, Sa(r), ji();
  }
}
function el(e, t) {
  var r = Wi(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function S(e, t, r, i) {
  var l = Wi(e);
  F && (l[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || l[t] !== (l[t] = r) && (t === "loading" && (e[sa] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && tl(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Wi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Xa]: e.nodeName.includes("-"),
      [Qa]: e.namespaceURI === Qo
    })
  );
}
var Xn = /* @__PURE__ */ new Map();
function tl(e) {
  var t = Xn.get(e.nodeName);
  if (t) return t;
  Xn.set(e.nodeName, t = []);
  for (var r, i = e, l = Element.prototype; l !== i; ) {
    r = ra(i);
    for (var o in r)
      r[o].set && t.push(o);
    i = si(i);
  }
  return t;
}
function rl(e, t, r = t) {
  Ba(e, "change", (i) => {
    var l = i ? e.defaultChecked : e.checked;
    r(l);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (F && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  at(t) == null) && r(e.checked), zr(() => {
    var i = t();
    e.checked = !!i;
  });
}
function Qn(e, t) {
  return e === t || (e == null ? void 0 : e[Ut]) === t;
}
function rr(e = {}, t, r, i) {
  return Zr(() => {
    var l, o;
    return zr(() => {
      l = o, o = [], at(() => {
        e !== r(...o) && (t(e, ...o), l && Qn(r(...l), e) && t(null, ...l));
      });
    }), () => {
      Jr(() => {
        o && Qn(r(...o), e) && t(null, ...o);
      });
    };
  }), e;
}
function Yi(e) {
  oe === null && ai(), Fr(() => {
    const t = at(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function nl(e) {
  oe === null && ai(), Yi(() => () => at(e));
}
function Zi(e, t, r) {
  if (e == null)
    return t(void 0), xt;
  const i = at(
    () => e.subscribe(
      t,
      // @ts-expect-error
      r
    )
  );
  return i.unsubscribe ? () => i.unsubscribe() : i;
}
const wt = [];
function il(e, t = xt) {
  let r = null;
  const i = /* @__PURE__ */ new Set();
  function l(s) {
    if (mi(e, s) && (e = s, r)) {
      const c = !wt.length;
      for (const d of i)
        d[1](), wt.push(d, e);
      if (c) {
        for (let d = 0; d < wt.length; d += 2)
          wt[d][0](wt[d + 1]);
        wt.length = 0;
      }
    }
  }
  function o(s) {
    l(s(
      /** @type {T} */
      e
    ));
  }
  function f(s, c = xt) {
    const d = [s, c];
    return i.add(d), i.size === 1 && (r = t(l, o) || xt), s(
      /** @type {T} */
      e
    ), () => {
      i.delete(d), i.size === 0 && r && (r(), r = null);
    };
  }
  return { set: l, update: o, subscribe: f };
}
function or(e) {
  let t;
  return Zi(e, (r) => t = r)(), t;
}
let nr = !1, qr = Symbol();
function ol(e, t, r) {
  const i = r[t] ?? (r[t] = {
    store: null,
    source: /* @__PURE__ */ Xr(void 0),
    unsubscribe: xt
  });
  if (i.store !== e && !(qr in r))
    if (i.unsubscribe(), i.store = e ?? null, e == null)
      i.source.v = void 0, i.unsubscribe = xt;
    else {
      var l = !0;
      i.unsubscribe = Zi(e, (o) => {
        l ? i.source.v = o : b(i.source, o);
      }), l = !1;
    }
  return e && qr in r ? or(e) : a(i.source);
}
function al() {
  const e = {};
  function t() {
    Yr(() => {
      for (var r in e)
        e[r].unsubscribe();
      qt(e, qr, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function ll(e) {
  var t = nr;
  try {
    return nr = !1, [e(), nr];
  } finally {
    nr = t;
  }
}
function ei(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function k(e, t, r, i) {
  var ft;
  var l = (r & Yo) !== 0, o = !0, f = (r & zo) !== 0, s = (r & Jo) !== 0, c = !1, d;
  f ? [d, c] = ll(() => (
    /** @type {V} */
    e[t]
  )) : d = /** @type {V} */
  e[t];
  var _ = Ut in e || di in e, v = f && (((ft = it(e, t)) == null ? void 0 : ft.set) ?? (_ && t in e && ((q) => e[t] = q))) || void 0, m = (
    /** @type {V} */
    i
  ), y = !0, $ = !1, E = () => ($ = !0, y && (y = !1, s ? m = at(
    /** @type {() => V} */
    i
  ) : m = /** @type {V} */
  i), m);
  d === void 0 && i !== void 0 && (v && o && va(), d = E(), v && v(d));
  var U;
  if (U = () => {
    var q = (
      /** @type {V} */
      e[t]
    );
    return q === void 0 ? E() : (y = !0, $ = !1, q);
  }, (r & Zo) === 0)
    return U;
  if (v) {
    var ce = e.$$legacy;
    return function(q, ae) {
      return arguments.length > 0 ? ((!ae || ce || c) && v(ae ? U() : q), q) : U();
    };
  }
  var K = !1, te = /* @__PURE__ */ Xr(d), X = /* @__PURE__ */ _r(() => {
    var q = U(), ae = a(te);
    return K ? (K = !1, ae) : te.v = q;
  });
  return f && a(X), l || (X.equals = Wr), function(q, ae) {
    if (arguments.length > 0) {
      const be = ae ? a(X) : f ? Be(q) : q;
      if (!X.equals(be)) {
        if (K = !0, b(te, be), $ && m !== void 0 && (m = be), ei(X))
          return q;
        at(() => a(X));
      }
      return q;
    }
    return ei(X) ? X.v : a(X);
  };
}
function sl(e) {
  return new ul(e);
}
var Oe, me;
class ul {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    Sr(this, Oe);
    /** @type {Record<string, any>} */
    Sr(this, me);
    var o;
    var r = /* @__PURE__ */ new Map(), i = (f, s) => {
      var c = /* @__PURE__ */ Xr(s);
      return r.set(f, c), c;
    };
    const l = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(f, s) {
          return a(r.get(s) ?? i(s, Reflect.get(f, s)));
        },
        has(f, s) {
          return s === di ? !0 : (a(r.get(s) ?? i(s, Reflect.get(f, s))), Reflect.has(f, s));
        },
        set(f, s, c) {
          return b(r.get(s) ?? i(s, c), c), Reflect.set(f, s, c);
        }
      }
    );
    Tr(this, me, (t.hydrate ? Ya : Hi)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: l,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((o = t == null ? void 0 : t.props) != null && o.$$host) || t.sync === !1) && x(), Tr(this, Oe, l.$$events);
    for (const f of Object.keys(se(this, me)))
      f === "$set" || f === "$destroy" || f === "$on" || qt(this, f, {
        get() {
          return se(this, me)[f];
        },
        /** @param {any} value */
        set(s) {
          se(this, me)[f] = s;
        },
        enumerable: !0
      });
    se(this, me).$set = /** @param {Record<string, any>} next */
    (f) => {
      Object.assign(l, f);
    }, se(this, me).$destroy = () => {
      Za(se(this, me));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    se(this, me).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    se(this, Oe)[t] = se(this, Oe)[t] || [];
    const i = (...l) => r.call(this, ...l);
    return se(this, Oe)[t].push(i), () => {
      se(this, Oe)[t] = se(this, Oe)[t].filter(
        /** @param {any} fn */
        (l) => l !== i
      );
    };
  }
  $destroy() {
    se(this, me).$destroy();
  }
}
Oe = new WeakMap(), me = new WeakMap();
let zi;
typeof HTMLElement == "function" && (zi = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, i) {
    super();
    /** The Svelte component constructor */
    Ee(this, "$$ctor");
    /** Slots */
    Ee(this, "$$s");
    /** @type {any} The Svelte component instance */
    Ee(this, "$$c");
    /** Whether or not the custom element is connected */
    Ee(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    Ee(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    Ee(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    Ee(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    Ee(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    Ee(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    Ee(this, "$$me");
    this.$$ctor = t, this.$$s = r, i && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, r, i) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(r), this.$$c) {
      const l = this.$$c.$on(t, r);
      this.$$l_u.set(r, l);
    }
    super.addEventListener(t, r, i);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, r, i) {
    if (super.removeEventListener(t, r, i), this.$$c) {
      const l = this.$$l_u.get(r);
      l && (l(), this.$$l_u.delete(r));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(l) {
        return (o) => {
          const f = document.createElement("slot");
          l !== "default" && (f.name = l), j(o, f);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, i = fl(this);
      for (const l of this.$$s)
        l in i && (l === "default" && !this.$$d.children ? (this.$$d.children = t(l), r.default = !0) : r[l] = t(l));
      for (const l of this.attributes) {
        const o = this.$$g_p(l.name);
        o in this.$$d || (this.$$d[o] = ar(o, l.value, this.$$p_d, "toProp"));
      }
      for (const l in this.$$p_d)
        !(l in this.$$d) && this[l] !== void 0 && (this.$$d[l] = this[l], delete this[l]);
      this.$$c = sl({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = ka(() => {
        zr(() => {
          var l;
          this.$$r = !0;
          for (const o of lr(this.$$c)) {
            if (!((l = this.$$p_d[o]) != null && l.reflect)) continue;
            this.$$d[o] = this.$$c[o];
            const f = ar(
              o,
              this.$$d[o],
              this.$$p_d,
              "toAttribute"
            );
            f == null ? this.removeAttribute(this.$$p_d[o].attribute || o) : this.setAttribute(this.$$p_d[o].attribute || o, f);
          }
          this.$$r = !1;
        });
      });
      for (const l in this.$$l)
        for (const o of this.$$l[l]) {
          const f = this.$$c.$on(l, o);
          this.$$l_u.set(o, f);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(t, r, i) {
    var l;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = ar(t, i, this.$$p_d, "toProp"), (l = this.$$c) == null || l.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(t) {
    return lr(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function ar(e, t, r, i) {
  var o;
  const l = (o = r[e]) == null ? void 0 : o.type;
  if (t = l === "Boolean" && typeof t != "boolean" ? t != null : t, !i || !r[e])
    return t;
  if (i === "toAttribute")
    switch (l) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (l) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      // conversion already handled above
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function fl(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function cl(e, t, r, i, l, o) {
  let f = class extends zi {
    constructor() {
      super(e, r, l), this.$$p_d = t;
    }
    static get observedAttributes() {
      return lr(t).map(
        (s) => (t[s].attribute || s).toLowerCase()
      );
    }
  };
  return lr(t).forEach((s) => {
    qt(f.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(c) {
        var v;
        c = ar(s, c, t), this.$$d[s] = c;
        var d = this.$$c;
        if (d) {
          var _ = (v = it(d, s)) == null ? void 0 : v.get;
          _ ? d[s] = c : d.$set({ [s]: c });
        }
      }
    });
  }), i.forEach((s) => {
    qt(f.prototype, s, {
      get() {
        var c;
        return (c = this.$$c) == null ? void 0 : c[s];
      }
    });
  }), e.element = /** @type {any} */
  f, f;
}
const Ji = new TextEncoder();
function dl(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function hl(e, t = "SHA-256", r = 1e5) {
  const i = Date.now().toString(16);
  e || (e = Math.round(Math.random() * r));
  const l = await Ki(i, e, t);
  return {
    algorithm: t,
    challenge: l,
    salt: i,
    signature: ""
  };
}
async function Ki(e, t, r) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return dl(
    await crypto.subtle.digest(
      r.toUpperCase(),
      Ji.encode(e + t)
    )
  );
}
function vl(e, t, r = "SHA-256", i = 1e6, l = 0) {
  const o = new AbortController(), f = Date.now();
  return {
    promise: (async () => {
      for (let c = l; c <= i; c += 1) {
        if (o.signal.aborted)
          return null;
        if (await Ki(t, c, r) === e)
          return {
            number: c,
            took: Date.now() - f
          };
      }
      return null;
    })(),
    controller: o
  };
}
function ti() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function gl(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let i = 0; i < t.length; i++)
    r[i] = t.charCodeAt(i);
  return r;
}
function pl(e, t = 12) {
  const r = new Uint8Array(t);
  for (let i = 0; i < t; i++)
    r[i] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function ml(e, t = "", r = 1e6, i = 0) {
  const l = "AES-GCM", o = new AbortController(), f = Date.now(), s = async () => {
    for (let _ = i; _ <= r; _ += 1) {
      if (o.signal.aborted || !c || !d)
        return null;
      try {
        const v = await crypto.subtle.decrypt(
          {
            name: l,
            iv: pl(_)
          },
          c,
          d
        );
        if (v)
          return {
            clearText: new TextDecoder().decode(v),
            took: Date.now() - f
          };
      } catch {
      }
    }
    return null;
  };
  let c = null, d = null;
  try {
    d = gl(e);
    const _ = await crypto.subtle.digest(
      "SHA-256",
      Ji.encode(t)
    );
    c = await crypto.subtle.importKey(
      "raw",
      _,
      l,
      !1,
      ["decrypt"]
    );
  } catch {
    return {
      promise: Promise.reject(),
      controller: o
    };
  }
  return {
    promise: s(),
    controller: o
  };
}
var w = /* @__PURE__ */ ((e) => (e.CODE = "code", e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(w || {}), ee = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.LOADING = "loading", e.PLAYING = "playing", e.PAUSED = "paused", e.READY = "ready", e))(ee || {});
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (e) => or(globalThis.altchaI18n.store)[e],
  set: (e, t) => {
    Object.assign(or(globalThis.altchaI18n.store), {
      [e]: t
    }), globalThis.altchaI18n.store.set(or(globalThis.altchaI18n.store));
  },
  store: il({})
};
const _l = {
  ariaLinkLabel: "Visit Altcha.org",
  enterCode: "Enter code",
  enterCodeAria: "Enter code you hear. Press Space to play audio.",
  error: "Verification failed. Try again later.",
  expired: "Verification expired. Try again.",
  footer: 'Protected by <a href="https://altcha.org/" target="_blank" aria-label="Visit Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Get an audio challenge",
  label: "I'm not a robot",
  loading: "Loading...",
  reload: "Reload",
  verify: "Verify",
  verificationRequired: "Verification required!",
  verified: "Verified",
  verifying: "Verifying...",
  waitAlert: "Verifying... please wait."
};
globalThis.altchaI18n.set("en", _l);
const Lr = (e, t) => {
  let r = /* @__PURE__ */ wa(() => oa(t == null ? void 0 : t(), 24));
  var i = El();
  Se(() => {
    S(i, "width", a(r)), S(i, "height", a(r));
  }), j(e, i);
};
function bl(e, t) {
  e.code === "Space" && (e.preventDefault(), e.stopImmediatePropagation(), t());
}
function yl(e, t) {
  e.preventDefault(), t();
}
function wl(e, t, r, i, l, o, f, s) {
  var c;
  [
    w.UNVERIFIED,
    w.ERROR,
    w.EXPIRED,
    w.CODE
  ].includes(a(t)) ? r() !== !1 && ((c = a(i)) == null ? void 0 : c.reportValidity()) === !1 ? b(l, !1) : o() ? f() : s() : b(l, !0);
}
var El = /* @__PURE__ */ wr('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="altcha-spinner"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor"></path></svg>'), Cl = /* @__PURE__ */ ke('<input type="hidden">'), xl = /* @__PURE__ */ ke('<div><a target="_blank" class="altcha-logo" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor"></path></svg></a></div>'), kl = /* @__PURE__ */ wr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg>'), Al = /* @__PURE__ */ wr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z"></path></svg>'), Il = /* @__PURE__ */ wr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"></path></svg>'), Rl = /* @__PURE__ */ ke('<button type="button" class="altcha-code-challenge-audio"><!></button>'), $l = /* @__PURE__ */ ke("<audio hidden autoplay><source></audio>"), Sl = /* @__PURE__ */ ke('<div class="altcha-code-challenge" role="dialog"><div class="altcha-code-challenge-arrow"></div> <form data-code-challenge-form="1"><img class="altcha-code-challenge-image" alt=""> <input type="text" autocomplete="off" name="code" class="altcha-code-challenge-input" required> <div class="altcha-code-challenge-buttons"><div class="altcha-code-challenge-buttons-left"><!> <button type="button" class="altcha-code-challenge-reload"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z"></path></svg></button></div> <button type="submit" class="altcha-code-challenge-verify"><!> </button></div> <!></form></div>'), Tl = /* @__PURE__ */ ke("<div><!></div>"), Dl = /* @__PURE__ */ ke("<div><!></div>"), Nl = /* @__PURE__ */ ke('<div class="altcha-error"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg> <!></div>'), Ll = /* @__PURE__ */ ke('<div class="altcha-footer"><div><!></div></div>'), Pl = /* @__PURE__ */ ke('<div class="altcha-anchor-arrow"></div>'), Ol = /* @__PURE__ */ ke('<!> <div class="altcha"><div class="altcha-main"><div><!> <input type="checkbox"></div> <label class="altcha-label"><!></label> <!> <!> <!></div> <!> <!> <!></div>', 1);
function Fl(e, t) {
  var Fn, Mn;
  Mi(t, !0);
  const [r, i] = al(), l = () => ol(to, "$altchaI18nStore", r);
  let o = k(t, "auto", 7, void 0), f = k(t, "blockspam", 7, void 0), s = k(t, "challengeurl", 7, void 0), c = k(t, "challengejson", 7, void 0), d = k(t, "credentials", 7, void 0), _ = k(t, "customfetch", 7, void 0), v = k(t, "debug", 7, !1), m = k(t, "delay", 7, 0), y = k(t, "disableautofocus", 7, !1), $ = k(t, "expire", 7, void 0), E = k(t, "floating", 7, void 0), U = k(t, "floatinganchor", 7, void 0), ce = k(t, "floatingoffset", 7, void 0), K = k(t, "floatingpersist", 7, !1), te = k(t, "hidefooter", 7, !1), X = k(t, "hidelogo", 7, !1), ft = k(t, "id", 7, void 0), q = k(t, "language", 7, void 0), ae = k(t, "name", 7, "altcha"), be = k(t, "maxnumber", 7, 1e6), It = k(t, "mockerror", 7, !1), Me = k(t, "obfuscated", 7, void 0), ye = k(t, "overlay", 7, void 0), Rt = k(t, "overlaycontent", 7, void 0), Zt = k(t, "plugins", 7, void 0), $t = k(t, "refetchonexpire", 7, !0), ze = k(t, "sentinel", 7, void 0), Ae = k(t, "spamfilter", 7, !1), ct = k(t, "strings", 7, void 0), ge = k(t, "test", 7, !1), re = k(t, "verifyurl", 7, void 0), dt = k(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), St = k(t, "workerurl", 7, void 0);
  const { altchaI18n: eo } = globalThis, to = eo.store, en = ["SHA-256", "SHA-384", "SHA-512"], ro = "https://altcha.org/", Ve = (n, u) => {
    t.$$host.dispatchEvent(new CustomEvent(n, { detail: u }));
  }, tn = (Mn = (Fn = document.documentElement.lang) == null ? void 0 : Fn.split("-")) == null ? void 0 : Mn[0], Er = /* @__PURE__ */ Mt(() => {
    var n;
    return s() && new URL(s(), location.origin).host.endsWith(".altcha.org") && !!((n = s()) != null && n.includes("apiKey=ckey_"));
  }), zt = /* @__PURE__ */ Mt(() => c() ? mn(c()) : void 0), no = /* @__PURE__ */ Mt(() => ct() ? mn(ct()) : {}), P = /* @__PURE__ */ Mt(() => ({
    ...an(l()),
    ...a(no)
  })), rn = /* @__PURE__ */ Mt(() => `${ft() || ae()}_checkbox_${Math.round(Math.random() * 1e8)}`);
  let Je = /* @__PURE__ */ L(null), Tt = /* @__PURE__ */ L(!1), H = /* @__PURE__ */ L(null), I = /* @__PURE__ */ L(Be(w.UNVERIFIED)), M = /* @__PURE__ */ L(void 0), Dt = /* @__PURE__ */ L(null), Ue = /* @__PURE__ */ L(null), de = /* @__PURE__ */ L(null), Cr = /* @__PURE__ */ L(null), ht = /* @__PURE__ */ L(null), N = /* @__PURE__ */ L(null), vt = /* @__PURE__ */ L(null), Ke = /* @__PURE__ */ L(null), Ie = null, G = /* @__PURE__ */ L(null), Xe = /* @__PURE__ */ L(!1), je = [], xr = /* @__PURE__ */ L(!1), Re = /* @__PURE__ */ L(null);
  Fr(() => {
    mo(a(Ke));
  }), Fr(() => {
    _o(a(I));
  }), nl(() => {
    io(), b(vt, null), a(N) && (a(N).removeEventListener("submit", dn), a(N).removeEventListener("reset", hn), a(N).removeEventListener("focusin", cn), b(N, null)), Ie && (clearTimeout(Ie), Ie = null), document.removeEventListener("click", un), document.removeEventListener("scroll", fn), window.removeEventListener("resize", pn);
  }), Yi(() => {
    var n;
    R("mounted", "2.2.0-beta.2"), R("workers", dt()), so(), R("plugins", je.length ? je.map((u) => u.constructor.pluginName).join(", ") : "none"), ge() && R("using test mode"), $() && Ar($()), o() !== void 0 && R("auto", o()), E() !== void 0 && yn(E()), b(N, (n = a(M)) == null ? void 0 : n.closest("form"), !0), a(N) && (a(N).addEventListener("submit", dn, { capture: !0 }), a(N).addEventListener("reset", hn), (o() === "onfocus" || K() === "focus") && a(N).addEventListener("focusin", cn)), ye() && wn(!0), o() === "onload" && (Me() ? Nt() : Pe()), a(Er) && (te() || X()) && R("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      Ve("load");
    });
  });
  function Jt(n, u) {
    return btoa(JSON.stringify({
      algorithm: n.algorithm,
      challenge: n.challenge,
      number: u.number,
      salt: n.salt,
      signature: n.signature,
      test: ge() ? !0 : void 0,
      took: u.took
    }));
  }
  function io() {
    for (const n of je)
      n.destroy();
  }
  function nn() {
    s() && $t() && a(I) === w.VERIFIED ? Pe() : Qe(w.EXPIRED, a(P).expired);
  }
  async function oo() {
    if (It())
      throw R("mocking error"), new Error("Mocked error.");
    if (a(zt))
      return R("using provided json data"), _n(a(zt).salt), a(zt);
    if (ge())
      return R("generating test challenge", { test: ge() }), hl(typeof ge() != "boolean" ? +ge() : void 0);
    {
      if (!s() && a(N)) {
        const h = a(N).getAttribute("action");
        h != null && h.includes("/form/") && s(h + "/altcha");
      }
      if (!s())
        throw new Error("Attribute challengeurl not set.");
      R("fetching challenge from", s());
      const n = {
        credentials: typeof d() == "boolean" ? "include" : d(),
        headers: Ae() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      }, u = await on()(s(), n);
      if (!u || !(u instanceof Response))
        throw new Error("Custom fetch function did not return a response.");
      if (u.status !== 200)
        throw new Error(`Server responded with ${u.status}.`);
      const g = u.headers.get("X-Altcha-Config"), p = await u.json();
      if (_n(p.salt), g)
        try {
          const h = JSON.parse(g);
          h && typeof h == "object" && (h.verifyurl && !h.verifyurl.startsWith("fn:") && (h.verifyurl = sn(h.verifyurl)), xn(h));
        } catch (h) {
          R("unable to configure from X-Altcha-Config", h);
        }
      return p;
    }
  }
  function ao(n) {
    var g, p;
    const u = (g = a(N)) == null ? void 0 : g.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((p = u == null ? void 0 : u.value) == null ? void 0 : p.slice(u.value.indexOf("@"))) || void 0;
  }
  function on() {
    let n = fetch;
    if (_())
      if (R("using customfetch"), typeof _() == "string") {
        if (n = globalThis[_()] || null, !n)
          throw new Error(`Custom fetch function not found: ${_()}`);
      } else
        n = _();
    return n;
  }
  function an(n, u = [
    q() || "",
    document.documentElement.lang || "",
    ...navigator.languages
  ]) {
    const g = Object.keys(n).map((h) => h.toLowerCase()), p = u.reduce(
      (h, C) => (C = C.toLowerCase(), h || (n[C] ? C : null) || g.find((A) => C.split("-")[0] === A.split("-")[0]) || null),
      null
    );
    return n[p || "en"];
  }
  function lo() {
    return Ae() === "ipAddress" ? {
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
    } : typeof Ae() == "object" ? Ae() : {
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
  function ln(n) {
    var g;
    return [
      ...((g = a(N)) == null ? void 0 : g.querySelectorAll(n != null && n.length ? n.map((p) => `input[name="${p}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (p, h) => {
        const C = h.name, A = h.value;
        return C && A && (p[C] = /\n/.test(A) ? A.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : A), p;
      },
      {}
    );
  }
  function sn(n, u) {
    const g = new URL(s() || location.origin), p = new URL(n, g);
    if (p.search || (p.search = g.search), u)
      for (const h in u)
        u[h] !== void 0 && u[h] !== null && p.searchParams.set(h, u[h]);
    return p.toString();
  }
  function so() {
    const n = Zt() !== void 0 ? Zt().split(",") : void 0;
    for (const u of globalThis.altchaPlugins)
      (!n || n.includes(u.pluginName)) && je.push(new u({
        el: a(M),
        clarify: Nt,
        dispatch: Ve,
        getConfiguration: kn,
        getFloatingAnchor: An,
        getState: In,
        log: R,
        reset: Qe,
        solve: Cn,
        setState: $e,
        setFloatingAnchor: Rn,
        verify: Pe
      }));
  }
  function R(...n) {
    (v() || n.some((u) => u instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${ae()}]`, ...n);
  }
  function uo() {
    b(G, ee.PAUSED, !0);
  }
  function fo(n) {
    b(G, ee.ERROR, !0);
  }
  function co() {
    b(G, ee.READY, !0);
  }
  function ho() {
    b(G, ee.LOADING, !0);
  }
  function vo() {
    b(G, ee.PLAYING, !0);
  }
  function go() {
    b(G, ee.PAUSED, !0);
  }
  function po(n) {
    var u;
    if (n.preventDefault(), n.stopPropagation(), a(H)) {
      const g = new FormData(n.target), p = String(g.get("code"));
      if ((u = re()) != null && u.startsWith("fn:")) {
        const h = re().replace(/^fn:/, "");
        if (R(`calling ${h} function instead of verifyurl`), !(h in globalThis))
          throw new Error(`Global function "${h}" is undefined.`);
        return globalThis[h]({
          challenge: a(H).challenge,
          code: p,
          solution: a(H).solution
        });
      }
      b(Xe, !0), bn(Jt(a(H).challenge, a(H).solution), p).then(({ reason: h, verified: C }) => {
        C ? (b(H, null), $e(w.VERIFIED), R("verified"), Nr().then(() => {
          var A;
          (A = a(Cr)) == null || A.focus(), Ve("verified", { payload: a(Re) }), o() === "onsubmit" ? kr(a(vt)) : ye() && Lt();
        })) : (Qe(), b(Ke, h || "Verification failed", !0));
      }).catch((h) => {
        b(H, null), $e(w.ERROR, h), R("sentinel verification failed:", h);
      }).finally(() => {
        b(Xe, !1);
      });
    }
  }
  function un(n) {
    var g;
    const u = n.target;
    E() && u && !a(M).contains(u) && (a(I) === w.VERIFIED && K() === !1 || a(I) === w.VERIFIED && K() === "focus" && !((g = a(N)) != null && g.matches(":focus-within")) || o() === "off" && a(I) === w.UNVERIFIED) && Lt();
  }
  function fn() {
    E() && a(I) !== w.UNVERIFIED && Pt();
  }
  function mo(n) {
    for (const u of je)
      typeof u.onErrorChange == "function" && u.onErrorChange(a(Ke));
  }
  function cn(n) {
    a(I) === w.UNVERIFIED ? Pe() : E() && K() === "focus" && a(I) === w.VERIFIED && Kt();
  }
  function dn(n) {
    var p;
    const u = n.target;
    u != null && u.hasAttribute("data-code-challenge-form") || (b(vt, n.submitter, !0), a(N) && o() === "onsubmit" ? ((p = a(vt)) == null || p.blur(), a(I) === w.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), Pe().then(() => {
      kr(a(vt));
    })) : a(I) !== w.VERIFIED && (n.preventDefault(), n.stopPropagation(), a(I) === w.VERIFYING && vn())) : a(N) && E() && o() === "off" && a(I) === w.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), Kt()));
  }
  function hn() {
    Qe();
  }
  function vn() {
    a(I) === w.VERIFYING && a(P).waitAlert && alert(a(P).waitAlert);
  }
  function gn() {
    a(Ue) ? a(Ue).paused ? (a(Ue).currentTime = 0, a(Ue).play()) : a(Ue).pause() : (b(xr, !0), requestAnimationFrame(() => {
      var n;
      (n = a(Ue)) == null || n.play();
    }));
  }
  function _o(n) {
    for (const u of je)
      typeof u.onStateChange == "function" && u.onStateChange(a(I));
    E() && a(I) !== w.UNVERIFIED && requestAnimationFrame(() => {
      Pt();
    }), b(Tt, a(I) === w.VERIFIED), ye() && a(de) && (a(I) !== w.UNVERIFIED ? Kt() : Lt());
  }
  function pn() {
    E() && Pt();
  }
  function mn(n) {
    return JSON.parse(n);
  }
  function _n(n) {
    var p;
    const u = new URLSearchParams((p = n.split("?")) == null ? void 0 : p[1]), g = u.get("expires") || u.get("expire");
    if (g) {
      const h = new Date(+g * 1e3), C = isNaN(h.getTime()) ? 0 : h.getTime() - Date.now();
      C > 0 && Ar(C);
    } else Ie && (clearTimeout(Ie), Ie = null);
  }
  async function bo(n) {
    if (!re())
      throw new Error("Attribute verifyurl not set.");
    R("requesting server verification from", re());
    const u = { payload: n };
    if (Ae() !== !1) {
      const {
        blockedCountries: h,
        classifier: C,
        disableRules: A,
        email: B,
        expectedLanguages: V,
        expectedCountries: Q,
        fields: le,
        ipAddress: tt,
        text: pt,
        timeZone: rt
      } = lo();
      u.blockedCountries = h, u.classifier = C, u.disableRules = A, u.email = B === !1 ? void 0 : ao(B), u.expectedCountries = Q, u.expectedLanguages = V || (tn ? [tn] : void 0), u.fields = le === !1 ? void 0 : ln(le), u.ipAddress = tt === !1 ? void 0 : tt || "auto", u.text = pt, u.timeZone = rt === !1 ? void 0 : rt || ti();
    }
    const g = await on()(re(), {
      body: JSON.stringify(u),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (!g || !(g instanceof Response))
      throw new Error("Custom fetch function did not return a response.");
    if (g.status !== 200)
      throw new Error(`Server responded with ${g.status}.`);
    const p = await g.json();
    if (p != null && p.payload && b(Re, p.payload, !0), Ve("serververification", p), f() && p.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  async function bn(n, u) {
    if (!re())
      throw new Error("Attribute verifyurl not set.");
    R("requesting sentinel verification from", re());
    const g = { code: u, payload: n };
    ze() && (g.fields = ze().fields ? ln() : void 0, g.timeZone = ze().timeZone ? ti() : void 0);
    const p = await fetch(re(), {
      body: JSON.stringify(g),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (!p || !(p instanceof Response))
      throw new Error("Fetch function did not return a response.");
    if (p.status !== 200)
      throw new Error(`Server responded with ${p.status}.`);
    const h = await p.json();
    return h != null && h.payload && b(Re, h.payload, !0), Ve("sentinelverification", h), h;
  }
  function kr(n) {
    var u;
    a(N) && "requestSubmit" in a(N) ? a(N).requestSubmit(n) : (u = a(N)) != null && u.reportValidity() && (n ? n.click() : a(N).submit());
  }
  function Ar(n) {
    R("expire", n), Ie && (clearTimeout(Ie), Ie = null), n < 1 ? nn() : Ie = setTimeout(nn, n);
  }
  function yn(n) {
    R("floating", n), E() !== n && (a(M).style.left = "", a(M).style.top = ""), E(n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : E()), E() ? (o() || o("onsubmit"), document.addEventListener("scroll", fn), document.addEventListener("click", un), window.addEventListener("resize", pn)) : o() === "onsubmit" && o(void 0);
  }
  function wn(n) {
    var u, g;
    if (R("overlay", n), ye(n), n) {
      if (o() || o("onsubmit"), a(de) && a(M).parentElement && a(de).replaceWith(a(M).parentElement), (g = (u = a(M)) == null ? void 0 : u.parentElement) != null && g.parentElement) {
        b(de, document.createElement("div"), !0), a(M).parentElement.parentElement.appendChild(a(de));
        const p = document.createElement("div"), h = document.createElement("button");
        h.type = "button", h.innerHTML = "&times;", h.addEventListener("click", (C) => {
          C.preventDefault(), Qe();
        }), a(de).classList.add("altcha-overlay-backdrop"), h.classList.add("altcha-overlay-close-button"), p.classList.add("altcha-overlay"), a(de).append(p), p.append(h), Rt() && p.append(...document.querySelectorAll(Rt())), p.append(a(M).parentElement);
      }
    } else a(de) && a(M).parentElement && (a(de).replaceWith(a(M).parentElement), a(M).style.display = "block");
  }
  function En(n) {
    if (!n.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (n.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!en.includes(n.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${en.join(", ")}`);
    if (!n.challenge || n.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!n.salt || n.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function Cn(n) {
    let u = null, g = null;
    if ("Worker" in window) {
      try {
        u = yo(n, n.maxNumber || n.maxnumber || be()), b(Je, u.controller, !0), g = await u.promise;
      } catch (p) {
        R(p);
      } finally {
        b(Je, null);
      }
      if (g === null || (g == null ? void 0 : g.number) !== void 0 || "obfuscated" in n)
        return { data: n, solution: g };
    }
    if ("obfuscated" in n) {
      const p = await ml(n.obfuscated, n.key, n.maxNumber || n.maxnumber);
      return { data: n, solution: await p.promise };
    }
    u = vl(n.challenge, n.salt, n.algorithm, n.maxNumber || n.maxnumber || be()), b(Je, u.controller, !0);
    try {
      g = await u.promise;
    } catch (p) {
      R(p);
    } finally {
      b(Je, null);
    }
    return { data: n, solution: g };
  }
  function yo(n, u = typeof ge() == "number" ? ge() : n.maxNumber || n.maxnumber || be(), g = Math.ceil(dt())) {
    const p = new AbortController(), h = [];
    g = Math.min(16, u, Math.max(1, g));
    for (let B = 0; B < g; B++)
      h.push(altchaCreateWorker(St()));
    const C = Math.ceil(u / g);
    return { promise: (async () => {
      const B = await Promise.all(h.map((V, Q) => {
        const le = Q * C;
        return p.signal.addEventListener("abort", () => {
          V.postMessage({ type: "abort" });
        }), new Promise((tt) => {
          V.addEventListener("message", (pt) => {
            if (pt.data)
              for (const rt of h)
                rt !== V && rt.postMessage({ type: "abort" });
            tt(pt.data);
          }), V.postMessage({
            payload: n,
            max: le + C,
            start: le,
            type: "work"
          });
        });
      }));
      for (const V of h)
        V.terminate();
      return B.find((V) => !!V) || null;
    })(), controller: p };
  }
  async function Nt() {
    if (!Me()) {
      $e(w.ERROR);
      return;
    }
    const n = je.find((u) => u.constructor.pluginName === "obfuscation");
    if (!n || !("clarify" in n)) {
      $e(w.ERROR), R("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in n && typeof n.clarify == "function")
      return n.clarify();
  }
  function xn(n) {
    n.obfuscated !== void 0 && Me(n.obfuscated), n.auto !== void 0 && (o(n.auto), o() === "onload" && (Me() ? Nt() : Pe())), n.blockspam !== void 0 && f(!!n.blockspam), n.customfetch !== void 0 && _(n.customfetch), n.floatinganchor !== void 0 && U(n.floatinganchor), n.delay !== void 0 && m(n.delay), n.floatingoffset !== void 0 && ce(n.floatingoffset), n.floating !== void 0 && yn(n.floating), n.expire !== void 0 && (Ar(n.expire), $(n.expire)), n.challenge && (c(typeof n.challenge == "string" ? n.challenge : JSON.stringify(n.challenge)), En(a(zt))), n.challengeurl !== void 0 && s(n.challengeurl), n.debug !== void 0 && v(!!n.debug), n.hidefooter !== void 0 && te(!!n.hidefooter), n.hidelogo !== void 0 && X(!!n.hidelogo), n.language !== void 0 && ct(an(l(), [n.language])), n.maxnumber !== void 0 && be(+n.maxnumber), n.mockerror !== void 0 && It(!!n.mockerror), n.name !== void 0 && ae(n.name), n.overlaycontent !== void 0 && Rt(n.overlaycontent), n.overlay !== void 0 && wn(n.overlay), n.refetchonexpire !== void 0 && $t(!!n.refetchonexpire), n.sentinel !== void 0 && typeof n.sentinel == "object" && ze(n.sentinel), n.spamfilter !== void 0 && Ae(typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && ct(typeof n.strings == "string" ? n.strings : JSON.stringify(n.strings)), n.test !== void 0 && ge(typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && re(n.verifyurl), n.workers !== void 0 && dt(+n.workers), n.workerurl !== void 0 && St(n.workerurl);
  }
  function kn() {
    return {
      auto: o(),
      blockspam: f(),
      challengeurl: s(),
      debug: v(),
      delay: m(),
      expire: $(),
      floating: E(),
      floatinganchor: U(),
      floatingoffset: ce(),
      hidefooter: te(),
      hidelogo: X(),
      name: ae(),
      maxnumber: be(),
      mockerror: It(),
      obfuscated: Me(),
      overlay: ye(),
      refetchonexpire: $t(),
      spamfilter: Ae(),
      strings: a(P),
      test: ge(),
      verifyurl: re(),
      workers: dt(),
      workerurl: St()
    };
  }
  function An() {
    return a(ht);
  }
  function wo(n) {
    return je.find((u) => u.constructor.pluginName === n);
  }
  function In() {
    return a(I);
  }
  function Lt() {
    a(M).style.display = "none", ye() && a(de) && (a(de).style.display = "none");
  }
  function Pt(n = 20) {
    var u;
    if (a(M))
      if (a(ht) || b(ht, (U() ? document.querySelector(U()) : (u = a(N)) == null ? void 0 : u.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || a(N), !0), a(ht)) {
        const g = parseInt(ce(), 10) || 12, p = a(ht).getBoundingClientRect(), h = a(M).getBoundingClientRect(), C = document.documentElement.clientHeight, A = document.documentElement.clientWidth, B = E() === "auto" ? p.bottom + h.height + g + n > C : E() === "top", V = Math.max(n, Math.min(A - n - h.width, p.left + p.width / 2 - h.width / 2));
        if (B ? a(M).style.top = `${p.top - (h.height + g)}px` : a(M).style.top = `${p.bottom + g}px`, a(M).style.left = `${V}px`, a(M).setAttribute("data-floating", B ? "top" : "bottom"), a(Dt)) {
          const Q = a(Dt).getBoundingClientRect();
          a(Dt).style.left = p.left - V + p.width / 2 - Q.width / 2 + "px";
        }
      } else
        R("unable to find floating anchor element");
  }
  function Qe(n = w.UNVERIFIED, u = null) {
    a(Je) && (a(Je).abort(), b(Je, null)), b(Tt, !1), b(Re, null), b(H, null), b(xr, !1), b(G, null), $e(n, u);
  }
  function Rn(n) {
    b(ht, n, !0);
  }
  function $e(n, u = null) {
    b(I, n, !0), b(Ke, u, !0), Ve("statechange", {
      payload: a(Re),
      state: a(I)
    });
  }
  function Kt() {
    a(M).style.display = "block", E() && Pt(), ye() && a(de) && (a(de).style.display = "flex");
  }
  async function Pe() {
    return Qe(w.VERIFYING), await new Promise((n) => setTimeout(n, m() || 0)), oo().then((n) => (En(n), R("challenge", n), Cn(n))).then(({ data: n, solution: u }) => {
      var g;
      if (R("solution", u), !u || n && "challenge" in n && !("clearText" in u)) {
        if ((u == null ? void 0 : u.number) !== void 0 && "challenge" in n)
          if (re() && "codeChallenge" in n)
            ["INPUT", "BUTTON", "SELECT", "TEXTAREA"].includes(((g = document.activeElement) == null ? void 0 : g.tagName) || "") && y() === !1 && document.activeElement.blur(), b(H, { challenge: n, solution: u }, !0);
          else {
            if (re() && ze() !== void 0)
              return bn(Jt(n, u));
            if (re())
              return bo(Jt(n, u));
            b(Re, Jt(n, u), !0), R("payload", a(Re));
          }
        else if (a(I) !== w.EXPIRED)
          throw R("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
      }
    }).then(() => {
      a(H) ? ($e(w.CODE), Nr().then(() => {
        Ve("code", { codeChallenge: a(H) });
      })) : a(Re) && ($e(w.VERIFIED), R("verified"), Nr().then(() => {
        Ve("verified", { payload: a(Re) }), o() === "onsubmit" ? kr(a(vt)) : ye() && Lt();
      }));
    }).catch((n) => {
      R(n), $e(w.ERROR, n.message);
    });
  }
  var $n = Ol(), Sn = Ft($n);
  za(Sn, t, "default", {});
  var gt = z(Sn, 2), Ir = Z(gt), Xt = Z(Ir);
  let Tn;
  var Dn = Z(Xt);
  {
    var Eo = (n) => {
      Lr(n);
    };
    J(Dn, (n) => {
      a(I) === w.VERIFYING && n(Eo);
    });
  }
  var et = z(Dn, 2);
  Kn(et), et.__change = [
    wl,
    I,
    Ae,
    N,
    Tt,
    Me,
    Nt,
    Pe
  ], rr(et, (n) => b(Cr, n), () => a(Cr)), Y(Xt);
  var Qt = z(Xt, 2), Co = Z(Qt);
  {
    var xo = (n) => {
      var u = tr(), g = Ft(u);
      nt(g, () => a(P).verified), j(n, u);
    }, ko = (n, u) => {
      {
        var g = (h) => {
          var C = tr(), A = Ft(C);
          nt(A, () => a(P).verifying), j(h, C);
        }, p = (h, C) => {
          {
            var A = (V) => {
              var Q = tr(), le = Ft(Q);
              nt(le, () => a(P).verificationRequired), j(V, Q);
            }, B = (V) => {
              var Q = tr(), le = Ft(Q);
              nt(le, () => a(P).label), j(V, Q);
            };
            J(
              h,
              (V) => {
                a(I) === w.CODE ? V(A) : V(B, !1);
              },
              C
            );
          }
        };
        J(
          n,
          (h) => {
            a(I) === w.VERIFYING ? h(g) : h(p, !1);
          },
          u
        );
      }
    };
    J(Co, (n) => {
      a(I) === w.VERIFIED ? n(xo) : n(ko, !1);
    });
  }
  Y(Qt);
  var Nn = z(Qt, 2);
  {
    var Ao = (n) => {
      var u = Cl();
      Kn(u), Se(() => {
        S(u, "name", ae()), el(u, a(Re));
      }), j(n, u);
    };
    J(Nn, (n) => {
      a(I) === w.VERIFIED && n(Ao);
    });
  }
  var Ln = z(Nn, 2);
  {
    var Io = (n) => {
      var u = xl(), g = Z(u);
      S(g, "href", ro), Y(u), Se(() => S(g, "aria-label", a(P).ariaLinkLabel)), j(n, u);
    };
    J(Ln, (n) => {
      (X() !== !0 || a(Er)) && n(Io);
    });
  }
  var Ro = z(Ln, 2);
  {
    var $o = (n) => {
      var u = Sl(), g = z(Z(u), 2), p = Z(g), h = z(p, 2);
      qa(h, !y()), h.__keydown = [
        bl,
        gn
      ];
      var C = z(h, 2), A = Z(C), B = Z(A);
      {
        var V = (we) => {
          var W = Rl();
          W.__click = gn;
          var er = Z(W);
          {
            var Ot = (mt) => {
              Lr(mt, () => 20);
            }, Fo = (mt, Mo) => {
              {
                var Vo = (_t) => {
                  var Rr = kl();
                  j(_t, Rr);
                }, Uo = (_t, Rr) => {
                  {
                    var jo = (bt) => {
                      var $r = Al();
                      j(bt, $r);
                    }, qo = (bt) => {
                      var $r = Il();
                      j(bt, $r);
                    };
                    J(
                      _t,
                      (bt) => {
                        a(G) === ee.PLAYING ? bt(jo) : bt(qo, !1);
                      },
                      Rr
                    );
                  }
                };
                J(
                  mt,
                  (_t) => {
                    a(G) === ee.ERROR ? _t(Vo) : _t(Uo, !1);
                  },
                  Mo
                );
              }
            };
            J(er, (mt) => {
              a(G) === ee.LOADING ? mt(Ot) : mt(Fo, !1);
            });
          }
          Y(W), Se(() => {
            S(W, "title", a(P).getAudioChallenge), W.disabled = a(G) === ee.LOADING || a(G) === ee.ERROR || a(Xe), S(W, "aria-label", a(G) === ee.LOADING ? a(P).loading : a(P).getAudioChallenge);
          }), j(we, W);
        };
        J(B, (we) => {
          a(H).challenge.codeChallenge.audio && we(V);
        });
      }
      var Q = z(B, 2);
      Q.__click = [yl, Pe], Y(A);
      var le = z(A, 2), tt = Z(le);
      {
        var pt = (we) => {
          Lr(we, () => 16);
        };
        J(tt, (we) => {
          a(Xe) && we(pt);
        });
      }
      var rt = z(tt);
      Y(le), Y(C);
      var Po = z(C, 2);
      {
        var Oo = (we) => {
          var W = $l(), er = Z(W);
          Y(W), rr(W, (Ot) => b(Ue, Ot), () => a(Ue)), Se((Ot) => S(er, "src", Ot), [
            () => sn(a(H).challenge.codeChallenge.audio, { language: q() })
          ]), qe("loadstart", W, ho), qe("canplay", W, co), qe("pause", W, go), qe("playing", W, vo), qe("ended", W, uo), qe("error", er, fo), j(we, W);
        };
        J(Po, (we) => {
          a(H).challenge.codeChallenge.audio && a(xr) && we(Oo);
        });
      }
      Y(g), Y(u), Se(() => {
        S(u, "aria-label", a(P).verificationRequired), S(p, "src", a(H).challenge.codeChallenge.image), S(h, "minlength", a(H).challenge.codeChallenge.length || 1), S(h, "maxlength", a(H).challenge.codeChallenge.length), S(h, "placeholder", a(P).enterCode), S(h, "aria-label", a(G) === ee.LOADING ? a(P).loading : a(G) === ee.PLAYING ? "" : a(P).enterCodeAria), S(h, "aria-live", a(G) ? "assertive" : "polite"), S(h, "aria-busy", a(G) === ee.LOADING), h.disabled = a(Xe), S(Q, "aria-label", a(P).reload), S(Q, "title", a(P).reload), Q.disabled = a(Xe), le.disabled = a(Xe), S(le, "aria-label", a(P).verify), Wa(rt, ` ${a(P).verify ?? ""}`);
      }), qe("submit", g, po, !0), j(n, u);
    };
    J(Ro, (n) => {
      var u;
      (u = a(H)) != null && u.challenge.codeChallenge && n($o);
    });
  }
  Y(Ir);
  var Pn = z(Ir, 2);
  {
    var So = (n) => {
      var u = Nl(), g = z(Z(u), 2);
      {
        var p = (C) => {
          var A = Tl(), B = Z(A);
          nt(B, () => a(P).expired), Y(A), Se(() => S(A, "title", a(Ke))), j(C, A);
        }, h = (C) => {
          var A = Dl(), B = Z(A);
          nt(B, () => a(P).error), Y(A), Se(() => S(A, "title", a(Ke))), j(C, A);
        };
        J(g, (C) => {
          a(I) === w.EXPIRED ? C(p) : C(h, !1);
        });
      }
      Y(u), j(n, u);
    };
    J(Pn, (n) => {
      (a(Ke) || a(I) === w.EXPIRED) && n(So);
    });
  }
  var On = z(Pn, 2);
  {
    var To = (n) => {
      var u = Ll(), g = Z(u), p = Z(g);
      nt(p, () => a(P).footer), Y(g), Y(u), j(n, u);
    };
    J(On, (n) => {
      a(P).footer && (te() !== !0 || a(Er)) && n(To);
    });
  }
  var Do = z(On, 2);
  {
    var No = (n) => {
      var u = Pl();
      rr(u, (g) => b(Dt, g), () => a(Dt)), j(n, u);
    };
    J(Do, (n) => {
      E() && n(No);
    });
  }
  Y(gt), rr(gt, (n) => b(M, n), () => a(M)), Se(
    (n) => {
      S(gt, "data-state", a(I)), S(gt, "data-floating", E()), S(gt, "data-overlay", ye()), Tn = Ka(Xt, 1, "altcha-checkbox", null, Tn, n), S(et, "id", a(rn)), et.required = o() !== "onsubmit" && (!E() || o() !== "off"), S(Qt, "for", a(rn));
    },
    [
      () => ({
        "altcha-checkbox-verifying": a(I) === w.VERIFYING
      })
    ]
  ), qe("invalid", et, vn), rl(et, () => a(Tt), (n) => b(Tt, n)), j(e, $n);
  var Lo = Vi({
    clarify: Nt,
    configure: xn,
    getConfiguration: kn,
    getFloatingAnchor: An,
    getPlugin: wo,
    getState: In,
    hide: Lt,
    repositionFloating: Pt,
    reset: Qe,
    setFloatingAnchor: Rn,
    setState: $e,
    show: Kt,
    verify: Pe,
    get auto() {
      return o();
    },
    set auto(n = void 0) {
      o(n), x();
    },
    get blockspam() {
      return f();
    },
    set blockspam(n = void 0) {
      f(n), x();
    },
    get challengeurl() {
      return s();
    },
    set challengeurl(n = void 0) {
      s(n), x();
    },
    get challengejson() {
      return c();
    },
    set challengejson(n = void 0) {
      c(n), x();
    },
    get credentials() {
      return d();
    },
    set credentials(n = void 0) {
      d(n), x();
    },
    get customfetch() {
      return _();
    },
    set customfetch(n = void 0) {
      _(n), x();
    },
    get debug() {
      return v();
    },
    set debug(n = !1) {
      v(n), x();
    },
    get delay() {
      return m();
    },
    set delay(n = 0) {
      m(n), x();
    },
    get disableautofocus() {
      return y();
    },
    set disableautofocus(n = !1) {
      y(n), x();
    },
    get expire() {
      return $();
    },
    set expire(n = void 0) {
      $(n), x();
    },
    get floating() {
      return E();
    },
    set floating(n = void 0) {
      E(n), x();
    },
    get floatinganchor() {
      return U();
    },
    set floatinganchor(n = void 0) {
      U(n), x();
    },
    get floatingoffset() {
      return ce();
    },
    set floatingoffset(n = void 0) {
      ce(n), x();
    },
    get floatingpersist() {
      return K();
    },
    set floatingpersist(n = !1) {
      K(n), x();
    },
    get hidefooter() {
      return te();
    },
    set hidefooter(n = !1) {
      te(n), x();
    },
    get hidelogo() {
      return X();
    },
    set hidelogo(n = !1) {
      X(n), x();
    },
    get id() {
      return ft();
    },
    set id(n = void 0) {
      ft(n), x();
    },
    get language() {
      return q();
    },
    set language(n = void 0) {
      q(n), x();
    },
    get name() {
      return ae();
    },
    set name(n = "altcha") {
      ae(n), x();
    },
    get maxnumber() {
      return be();
    },
    set maxnumber(n = 1e6) {
      be(n), x();
    },
    get mockerror() {
      return It();
    },
    set mockerror(n = !1) {
      It(n), x();
    },
    get obfuscated() {
      return Me();
    },
    set obfuscated(n = void 0) {
      Me(n), x();
    },
    get overlay() {
      return ye();
    },
    set overlay(n = void 0) {
      ye(n), x();
    },
    get overlaycontent() {
      return Rt();
    },
    set overlaycontent(n = void 0) {
      Rt(n), x();
    },
    get plugins() {
      return Zt();
    },
    set plugins(n = void 0) {
      Zt(n), x();
    },
    get refetchonexpire() {
      return $t();
    },
    set refetchonexpire(n = !0) {
      $t(n), x();
    },
    get sentinel() {
      return ze();
    },
    set sentinel(n = void 0) {
      ze(n), x();
    },
    get spamfilter() {
      return Ae();
    },
    set spamfilter(n = !1) {
      Ae(n), x();
    },
    get strings() {
      return ct();
    },
    set strings(n = void 0) {
      ct(n), x();
    },
    get test() {
      return ge();
    },
    set test(n = !1) {
      ge(n), x();
    },
    get verifyurl() {
      return re();
    },
    set verifyurl(n = void 0) {
      re(n), x();
    },
    get workers() {
      return dt();
    },
    set workers(n = Math.min(16, navigator.hardwareConcurrency || 8)) {
      dt(n), x();
    },
    get workerurl() {
      return St();
    },
    set workerurl(n = void 0) {
      St(n), x();
    }
  });
  return i(), Lo;
}
Ga(["change", "keydown", "click"]);
customElements.define("altcha-widget", cl(
  Fl,
  {
    blockspam: { type: "Boolean" },
    debug: { type: "Boolean" },
    delay: { type: "Number" },
    disableautofocus: { type: "Boolean" },
    expire: { type: "Number" },
    floatingoffset: { type: "Number" },
    hidefooter: { type: "Boolean" },
    hidelogo: { type: "Boolean" },
    maxnumber: { type: "Number" },
    mockerror: { type: "Boolean" },
    refetchonexpire: { type: "Boolean" },
    test: { type: "Boolean" },
    workers: { type: "Number" },
    auto: {},
    challengeurl: {},
    challengejson: {},
    credentials: {},
    customfetch: {},
    floating: {},
    floatinganchor: {},
    floatingpersist: {},
    id: {},
    language: {},
    name: {},
    obfuscated: {},
    overlay: {},
    overlaycontent: {},
    plugins: {},
    sentinel: {},
    spamfilter: {},
    strings: {},
    verifyurl: {},
    workerurl: {}
  },
  ["default"],
  [
    "clarify",
    "configure",
    "getConfiguration",
    "getFloatingAnchor",
    "getPlugin",
    "getState",
    "hide",
    "repositionFloating",
    "reset",
    "setFloatingAnchor",
    "setState",
    "show",
    "verify"
  ],
  !1
));
const Xi = '@keyframes overlay-slidein{to{opacity:1;top:50%}}@keyframes altcha-spinner{to{transform:rotate(360deg)}}.altcha{background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);position:relative}.altcha:focus-within{border-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating]{background:var(--altcha-color-base, white);display:none;filter:drop-shadow(3px 3px 6px rgba(0,0,0,.2));left:-100%;position:fixed;top:-100%;width:var(--altcha-max-width, 260px);z-index:999999}.altcha[data-floating=top] .altcha-anchor-arrow{border-bottom-color:transparent;border-top-color:var(--altcha-color-border, #a0a0a0);bottom:-12px;top:auto}.altcha[data-floating=bottom]:focus-within::after{border-bottom-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating=top]:focus-within::after{border-top-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating]:not([data-state=unverified]){display:block}.altcha-anchor-arrow{border:6px solid transparent;border-bottom-color:var(--altcha-color-border, #a0a0a0);content:"";height:0;left:12px;position:absolute;top:-12px;width:0}.altcha-main{align-items:center;display:flex;gap:.4rem;padding:.7rem;position:relative}.altcha-code-challenge{background:var(--altcha-color-base, white);border:1px solid var(--altcha-color-border-focus, currentColor);border-radius:var(--altcha-border-radius, 3px);filter:drop-shadow(3px 3px 6px rgba(0,0,0,.2));padding:.5rem;position:absolute;top:2.5rem;z-index:9999999}.altcha-code-challenge>form{display:flex;flex-direction:column;gap:.5rem}.altcha-code-challenge-input{border:1px solid currentColor;border-radius:3px;box-sizing:border-box;outline:0;font-size:16px;padding:.35rem;width:220px}.altcha-code-challenge-input:focus{outline:2px solid color-mix(in srgb,var(--altcha-color-active, #1D1DC9) 20%,transparent)}.altcha-code-challenge-input:disabled{opacity:.7}.altcha-code-challenge-image{background-color:#fff;border:1px solid currentColor;border-radius:3px;box-sizing:border-box;object-fit:contain;height:50px;width:220px}.altcha-code-challenge-audio,.altcha-code-challenge-reload{background:color-mix(in srgb,var(--altcha-color-text, currentColor) 10%,transparent);border:0;border-radius:3px;color:var(--altcha-color-text, currentColor);cursor:pointer;display:flex;align-items:center;justify-content:center;padding:.35rem}.altcha-code-challenge-audio:disabled,.altcha-code-challenge-reload:disabled,.altcha-code-challenge-verify:disabled{opacity:.7;pointer-events:none}.altcha-code-challenge-audio>*,.altcha-code-challenge-reload>*{height:20px;width:20px}.altcha-code-challenge-buttons{display:flex;justify-content:space-between}.altcha-code-challenge-buttons-left{display:flex;gap:.25rem}.altcha-code-challenge-verify{align-items:center;background:var(--altcha-color-active, #1D1DC9);border:0;border-radius:3px;color:#fff;cursor:pointer;display:flex;gap:.5rem;font-size:100%;padding:.35rem 1rem}.altcha-code-challenge-arrow{border:6px solid transparent;border-bottom-color:var(--altcha-color-border, currentColor);content:"";height:0;left:.15rem;position:absolute;top:-12px;width:0}.altcha[data-floating=top] .altcha-code-challenge{top:-150px}.altcha[data-floating=top] .altcha-code-challenge-arrow{border-bottom-color:transparent;border-top-color:var(--altcha-color-border, currentColor);bottom:-12px;top:auto}.altcha-label{cursor:pointer;flex-grow:1}.altcha-logo{color:currentColor!important;opacity:.7}.altcha-footer:hover,.altcha-logo:hover{opacity:1}.altcha-error{color:var(--altcha-color-error-text, #f23939);display:flex;font-size:.85rem;gap:.3rem;padding:0 .7rem .7rem}.altcha-footer{align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:.75rem;opacity:.7;justify-content:end;padding:.2rem .7rem}.altcha-footer a{color:currentColor}.altcha-checkbox{display:flex;align-items:center;justify-content:center;height:24px;position:relative;width:24px}.altcha-checkbox .altcha-spinner{bottom:0;left:0;position:absolute;right:0;top:0}.altcha-checkbox input{width:18px;height:18px;margin:0}.altcha-checkbox-verifying input{appearance:none;opacity:0;pointer-events:none}.altcha-spinner{animation:altcha-spinner .75s infinite linear;transform-origin:center}.altcha-overlay{--altcha-color-base:#fff;--altcha-color-text:#000;animation:overlay-slidein .5s forwards;display:flex;flex-direction:column;gap:.5rem;left:50%;width:260px;opacity:0;position:fixed;top:45%;transform:translate(-50%,-50%)}.altcha-overlay-backdrop{background:rgba(0,0,0,.5);bottom:0;display:none;left:0;position:fixed;right:0;top:0;z-index:99999999}.altcha-overlay-close-button{align-self:flex-end;background:0 0;border:0;padding:.25rem;cursor:pointer;color:currentColor;font-size:130%;line-height:1;opacity:.7}@media (max-height:450px){.altcha-overlay{top:10%!important;transform:translate(-50%,0)}}';
function Qi(e, t = "__altcha-css") {
  if (!document.getElementById(t)) {
    const r = document.createElement("style");
    r.id = t, r.textContent = e, document.head.appendChild(r);
  }
}
globalThis.altchaCreateWorker = (e) => e ? new Worker(new URL(e)) : new Go();
Qi(Xi);
Qi(Xi);
export {
  Fl as Altcha
};
