var Oo = Object.defineProperty;
var Dn = (e) => {
  throw TypeError(e);
};
var Fo = (e, t, r) => t in e ? Oo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var we = (e, t, r) => Fo(e, typeof t != "symbol" ? t + "" : t, r), Nn = (e, t, r) => t.has(e) || Dn("Cannot " + r);
var se = (e, t, r) => (Nn(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Cr = (e, t, r) => t.has(e) ? Dn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), xr = (e, t, r, i) => (Nn(e, t, "write to private field"), i ? i.call(e, r) : t.set(e, r), r);
const zn = `(function(){"use strict";const d=new TextEncoder;function p(e){return[...new Uint8Array(e)].map(t=>t.toString(16).padStart(2,"0")).join("")}async function b(e,t,r){if(typeof crypto>"u"||!("subtle"in crypto)||!("digest"in crypto.subtle))throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");return p(await crypto.subtle.digest(r.toUpperCase(),d.encode(e+t)))}function w(e,t,r="SHA-256",n=1e6,s=0){const o=new AbortController,a=Date.now();return{promise:(async()=>{for(let c=s;c<=n;c+=1){if(o.signal.aborted)return null;if(await b(t,c,r)===e)return{number:c,took:Date.now()-a}}return null})(),controller:o}}function h(e){const t=atob(e),r=new Uint8Array(t.length);for(let n=0;n<t.length;n++)r[n]=t.charCodeAt(n);return r}function g(e,t=12){const r=new Uint8Array(t);for(let n=0;n<t;n++)r[n]=e%256,e=Math.floor(e/256);return r}async function m(e,t="",r=1e6,n=0){const s="AES-GCM",o=new AbortController,a=Date.now(),l=async()=>{for(let u=n;u<=r;u+=1){if(o.signal.aborted||!c||!y)return null;try{const f=await crypto.subtle.decrypt({name:s,iv:g(u)},c,y);if(f)return{clearText:new TextDecoder().decode(f),took:Date.now()-a}}catch{}}return null};let c=null,y=null;try{y=h(e);const u=await crypto.subtle.digest("SHA-256",d.encode(t));c=await crypto.subtle.importKey("raw",u,s,!1,["decrypt"])}catch{return{promise:Promise.reject(),controller:o}}return{promise:l(),controller:o}}let i;onmessage=async e=>{const{type:t,payload:r,start:n,max:s}=e.data;let o=null;if(t==="abort")i==null||i.abort(),i=void 0;else if(t==="work"){if("obfuscated"in r){const{key:a,obfuscated:l}=r||{};o=await m(l,a,s,n)}else{const{algorithm:a,challenge:l,salt:c}=r||{};o=w(l,c,a,s,n)}i=o.controller,o.promise.then(a=>{self.postMessage(a&&{...a,worker:!0})})}}})();
`, Tn = typeof self < "u" && self.Blob && new Blob([zn], { type: "text/javascript;charset=utf-8" });
function Mo(e) {
  let t;
  try {
    if (t = Tn && (self.URL || self.webkitURL).createObjectURL(Tn), !t) throw "";
    const r = new Worker(t, {
      name: e == null ? void 0 : e.name
    });
    return r.addEventListener("error", () => {
      (self.URL || self.webkitURL).revokeObjectURL(t);
    }), r;
  } catch {
    return new Worker(
      "data:text/javascript;charset=utf-8," + encodeURIComponent(zn),
      {
        name: e == null ? void 0 : e.name
      }
    );
  } finally {
    t && (self.URL || self.webkitURL).revokeObjectURL(t);
  }
}
const Vo = "5";
var Zn;
typeof window < "u" && ((Zn = window.__svelte ?? (window.__svelte = {})).v ?? (Zn.v = /* @__PURE__ */ new Set())).add(Vo);
const Uo = 1, jo = 4, qo = 8, Bo = 16, Ho = 1, Go = 2, Or = "[", Jn = "[!", Kn = "]", _t = {}, ue = Symbol(), Yo = "http://www.w3.org/1999/xhtml", Ln = !1;
function Xn(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var Qn = Array.isArray, Wo = Array.prototype.indexOf, Zo = Array.from, Xt = Object.keys, Lt = Object.defineProperty, Qe = Object.getOwnPropertyDescriptor, zo = Object.getOwnPropertyDescriptors, Jo = Object.prototype, Ko = Array.prototype, ei = Object.getPrototypeOf, Pn = Object.isExtensible;
const pt = () => {
};
function ti(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Xo(e, t, r = !1) {
  return e === void 0 ? r ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
const ye = 2, ri = 4, or = 8, Fr = 16, Pe = 32, rt = 64, Qt = 128, he = 256, er = 512, fe = 1024, Se = 2048, nt = 4096, mt = 8192, ar = 16384, Qo = 32768, Mr = 65536, ea = 1 << 19, ni = 1 << 20, Rr = 1 << 21, Nt = Symbol("$state"), ii = Symbol("legacy props"), ta = Symbol("");
function ra(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function na() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function ia(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function oa() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function aa() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function la(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function sa() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ua() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function fa() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function lr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let F = !1;
function gt(e) {
  F = e;
}
let O;
function He(e) {
  if (e === null)
    throw lr(), _t;
  return O = e;
}
function bt() {
  return He(
    /** @type {TemplateNode} */
    /* @__PURE__ */ We(O)
  );
}
function Y(e) {
  if (F) {
    if (/* @__PURE__ */ We(O) !== null)
      throw lr(), _t;
    O = e;
  }
}
function ca() {
  for (var e = 0, t = O; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === Kn) {
        if (e === 0) return t;
        e -= 1;
      } else (r === Or || r === Jn) && (e += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ We(t)
    );
    t.remove(), t = i;
  }
}
let da = !1;
function qe(e) {
  if (typeof e != "object" || e === null || Nt in e)
    return e;
  const t = ei(e);
  if (t !== Jo && t !== Ko)
    return e;
  var r = /* @__PURE__ */ new Map(), i = Qn(e), a = /* @__PURE__ */ M(0), o = N, u = (s) => {
    var c = N;
    De(o);
    var d = s();
    return De(c), d;
  };
  return i && r.set("length", /* @__PURE__ */ M(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, c, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && sa();
        var p = r.get(c);
        return p === void 0 ? (p = u(() => /* @__PURE__ */ M(d.value)), r.set(c, p)) : b(
          p,
          u(() => qe(d.value))
        ), !0;
      },
      deleteProperty(s, c) {
        var d = r.get(c);
        if (d === void 0)
          c in s && (r.set(
            c,
            u(() => /* @__PURE__ */ M(ue))
          ), kr(a));
        else {
          if (i && typeof c == "string") {
            var p = (
              /** @type {Source<number>} */
              r.get("length")
            ), h = Number(c);
            Number.isInteger(h) && h < p.v && b(p, h);
          }
          b(d, ue), kr(a);
        }
        return !0;
      },
      get(s, c, d) {
        var y;
        if (c === Nt)
          return e;
        var p = r.get(c), h = c in s;
        if (p === void 0 && (!h || (y = Qe(s, c)) != null && y.writable) && (p = u(() => /* @__PURE__ */ M(qe(h ? s[c] : ue))), r.set(c, p)), p !== void 0) {
          var g = l(p);
          return g === ue ? void 0 : g;
        }
        return Reflect.get(s, c, d);
      },
      getOwnPropertyDescriptor(s, c) {
        var d = Reflect.getOwnPropertyDescriptor(s, c);
        if (d && "value" in d) {
          var p = r.get(c);
          p && (d.value = l(p));
        } else if (d === void 0) {
          var h = r.get(c), g = h == null ? void 0 : h.v;
          if (h !== void 0 && g !== ue)
            return {
              enumerable: !0,
              configurable: !0,
              value: g,
              writable: !0
            };
        }
        return d;
      },
      has(s, c) {
        var g;
        if (c === Nt)
          return !0;
        var d = r.get(c), p = d !== void 0 && d.v !== ue || Reflect.has(s, c);
        if (d !== void 0 || T !== null && (!p || (g = Qe(s, c)) != null && g.writable)) {
          d === void 0 && (d = u(() => /* @__PURE__ */ M(p ? qe(s[c]) : ue)), r.set(c, d));
          var h = l(d);
          if (h === ue)
            return !1;
        }
        return p;
      },
      set(s, c, d, p) {
        var J;
        var h = r.get(c), g = c in s;
        if (i && c === "length")
          for (var y = d; y < /** @type {Source<number>} */
          h.v; y += 1) {
            var S = r.get(y + "");
            S !== void 0 ? b(S, ue) : y in s && (S = u(() => /* @__PURE__ */ M(ue)), r.set(y + "", S));
          }
        h === void 0 ? (!g || (J = Qe(s, c)) != null && J.writable) && (h = u(() => /* @__PURE__ */ M(void 0)), b(
          h,
          u(() => qe(d))
        ), r.set(c, h)) : (g = h.v !== ue, b(
          h,
          u(() => qe(d))
        ));
        var E = Reflect.getOwnPropertyDescriptor(s, c);
        if (E != null && E.set && E.set.call(p, d), !g) {
          if (i && typeof c == "string") {
            var V = (
              /** @type {Source<number>} */
              r.get("length")
            ), ce = Number(c);
            Number.isInteger(ce) && ce >= V.v && b(V, ce + 1);
          }
          kr(a);
        }
        return !0;
      },
      ownKeys(s) {
        l(a);
        var c = Reflect.ownKeys(s).filter((h) => {
          var g = r.get(h);
          return g === void 0 || g.v !== ue;
        });
        for (var [d, p] of r)
          p.v !== ue && !(d in s) && c.push(d);
        return c;
      },
      setPrototypeOf() {
        ua();
      }
    }
  );
}
function kr(e, t = 1) {
  b(e, e.v + t);
}
var On, oi, ai, li;
function $r() {
  if (On === void 0) {
    On = window, oi = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    ai = Qe(t, "firstChild").get, li = Qe(t, "nextSibling").get, Pn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Pn(r) && (r.__t = void 0);
  }
}
function sr(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function pe(e) {
  return ai.call(e);
}
// @__NO_SIDE_EFFECTS__
function We(e) {
  return li.call(e);
}
function W(e, t) {
  if (!F)
    return /* @__PURE__ */ pe(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ pe(O)
  );
  return r === null && (r = O.appendChild(sr())), He(r), r;
}
function $t(e, t) {
  if (!F) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ pe(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ We(r) : r;
  }
  return O;
}
function Z(e, t = 1, r = !1) {
  let i = F ? O : e;
  for (var a; t--; )
    a = i, i = /** @type {TemplateNode} */
    /* @__PURE__ */ We(i);
  if (!F)
    return i;
  var o = i == null ? void 0 : i.nodeType;
  if (r && o !== 3) {
    var u = sr();
    return i === null ? a == null || a.after(u) : i.before(u), He(u), u;
  }
  return He(i), /** @type {TemplateNode} */
  i;
}
function ha(e) {
  e.textContent = "";
}
function si(e) {
  return e === this.v;
}
function ui(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Vr(e) {
  return !ui(e, this.v);
}
// @__NO_SIDE_EFFECTS__
function ur(e) {
  var t = ye | Se, r = N !== null && (N.f & ye) !== 0 ? (
    /** @type {Derived} */
    N
  ) : null;
  return T === null || r !== null && (r.f & he) !== 0 ? t |= he : T.f |= ni, {
    ctx: oe,
    deps: null,
    effects: null,
    equals: si,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: r ?? T
  };
}
// @__NO_SIDE_EFFECTS__
function St(e) {
  const t = /* @__PURE__ */ ur(e);
  return Ei(t), t;
}
// @__NO_SIDE_EFFECTS__
function va(e) {
  const t = /* @__PURE__ */ ur(e);
  return t.equals = Vr, t;
}
function fi(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Ge(
        /** @type {Effect} */
        t[r]
      );
  }
}
function ga(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & ye) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function ci(e) {
  var t, r = T;
  Ye(ga(e));
  try {
    fi(e), t = Ai(e);
  } finally {
    Ye(r);
  }
  return t;
}
function di(e) {
  var t = ci(e), r = (Be || (e.f & he) !== 0) && e.deps !== null ? nt : fe;
  Ee(e, r), e.equals(t) || (e.v = t, e.wv = xi());
}
function _a(e) {
  T === null && N === null && ia(), N !== null && (N.f & he) !== 0 && T === null && na(), Mt && ra();
}
function pa(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function it(e, t, r, i = !0) {
  var a = T, o = {
    ctx: oe,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Se,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: a,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (r)
    try {
      Hr(o), o.f |= Qo;
    } catch (c) {
      throw Ge(o), c;
    }
  else t !== null && cr(o);
  var u = r && o.deps === null && o.first === null && o.nodes_start === null && o.teardown === null && (o.f & (ni | Qt)) === 0;
  if (!u && i && (a !== null && pa(o, a), N !== null && (N.f & ye) !== 0)) {
    var s = (
      /** @type {Derived} */
      N
    );
    (s.effects ?? (s.effects = [])).push(o);
  }
  return o;
}
function Ur(e) {
  const t = it(or, null, !1);
  return Ee(t, fe), t.teardown = e, t;
}
function Sr(e) {
  _a();
  var t = T !== null && (T.f & Pe) !== 0 && oe !== null && !oe.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      oe
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: T,
      reaction: N
    });
  } else {
    var i = jr(e);
    return i;
  }
}
function ma(e) {
  const t = it(rt, e, !0);
  return () => {
    Ge(t);
  };
}
function ba(e) {
  const t = it(rt, e, !0);
  return (r = {}) => new Promise((i) => {
    r.outro ? Nr(t, () => {
      Ge(t), i(void 0);
    }) : (Ge(t), i(void 0));
  });
}
function jr(e) {
  return it(ri, e, !1);
}
function qr(e) {
  return it(or, e, !0);
}
function Ie(e, t = [], r = ur) {
  const i = t.map(r);
  return hi(() => e(...i.map(l)));
}
function hi(e, t = 0) {
  return it(or | Fr | t, e, !0);
}
function Dr(e, t = !0) {
  return it(or | Pe, e, !0, t);
}
function vi(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Mt, i = N;
    Mn(!0), De(null);
    try {
      t.call(null);
    } finally {
      Mn(r), De(i);
    }
  }
}
function gi(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var i = r.next;
    (r.f & rt) !== 0 ? r.parent = null : Ge(r, t), r = i;
  }
}
function wa(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Pe) === 0 && Ge(t), t = r;
  }
}
function Ge(e, t = !0) {
  var r = !1;
  (t || (e.f & ea) !== 0) && e.nodes_start !== null && (_i(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), r = !0), gi(e, t && !r), ir(e, 0), Ee(e, ar);
  var i = e.transitions;
  if (i !== null)
    for (const o of i)
      o.stop();
  vi(e);
  var a = e.parent;
  a !== null && a.first !== null && pi(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function _i(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ We(e)
    );
    e.remove(), e = r;
  }
}
function pi(e) {
  var t = e.parent, r = e.prev, i = e.next;
  r !== null && (r.next = i), i !== null && (i.prev = r), t !== null && (t.first === e && (t.first = i), t.last === e && (t.last = r));
}
function Nr(e, t) {
  var r = [];
  mi(e, r, !0), ya(r, () => {
    Ge(e), t && t();
  });
}
function ya(e, t) {
  var r = e.length;
  if (r > 0) {
    var i = () => --r || t();
    for (var a of e)
      a.out(i);
  } else
    t();
}
function mi(e, t, r) {
  if ((e.f & mt) === 0) {
    if (e.f ^= mt, e.transitions !== null)
      for (const u of e.transitions)
        (u.is_global || r) && t.push(u);
    for (var i = e.first; i !== null; ) {
      var a = i.next, o = (i.f & Mr) !== 0 || (i.f & Pe) !== 0;
      mi(i, t, o ? r : !1), i = a;
    }
  }
}
function Fn(e) {
  bi(e, !0);
}
function bi(e, t) {
  if ((e.f & mt) !== 0) {
    e.f ^= mt, (e.f & fe) === 0 && (e.f ^= fe), Vt(e) && (Ee(e, Se), cr(e));
    for (var r = e.first; r !== null; ) {
      var i = r.next, a = (r.f & Mr) !== 0 || (r.f & Pe) !== 0;
      bi(r, a ? t : !1), r = i;
    }
    if (e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || t) && o.in();
  }
}
const Ea = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Pt = [], Ot = [];
function wi() {
  var e = Pt;
  Pt = [], ti(e);
}
function yi() {
  var e = Ot;
  Ot = [], ti(e);
}
function Br(e) {
  Pt.length === 0 && queueMicrotask(wi), Pt.push(e);
}
function Ca(e) {
  Ot.length === 0 && Ea(yi), Ot.push(e);
}
function xa() {
  Pt.length > 0 && wi(), Ot.length > 0 && yi();
}
let zt = !1, tr = !1, rr = null, et = !1, Mt = !1;
function Mn(e) {
  Mt = e;
}
let Tt = [];
let N = null, Re = !1;
function De(e) {
  N = e;
}
let T = null;
function Ye(e) {
  T = e;
}
let ie = null;
function Ei(e) {
  N !== null && N.f & Rr && (ie === null ? ie = [e] : ie.push(e));
}
let ne = null, de = 0, ge = null;
function ka(e) {
  ge = e;
}
let Ci = 1, nr = 0, Be = !1;
function xi() {
  return ++Ci;
}
function Vt(e) {
  var h;
  var t = e.f;
  if ((t & Se) !== 0)
    return !0;
  if ((t & nt) !== 0) {
    var r = e.deps, i = (t & he) !== 0;
    if (r !== null) {
      var a, o, u = (t & er) !== 0, s = i && T !== null && !Be, c = r.length;
      if (u || s) {
        var d = (
          /** @type {Derived} */
          e
        ), p = d.parent;
        for (a = 0; a < c; a++)
          o = r[a], (u || !((h = o == null ? void 0 : o.reactions) != null && h.includes(d))) && (o.reactions ?? (o.reactions = [])).push(d);
        u && (d.f ^= er), s && p !== null && (p.f & he) === 0 && (d.f ^= he);
      }
      for (a = 0; a < c; a++)
        if (o = r[a], Vt(
          /** @type {Derived} */
          o
        ) && di(
          /** @type {Derived} */
          o
        ), o.wv > e.wv)
          return !0;
    }
    (!i || T !== null && !Be) && Ee(e, fe);
  }
  return !1;
}
function Aa(e, t) {
  for (var r = t; r !== null; ) {
    if ((r.f & Qt) !== 0)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= Qt;
      }
    r = r.parent;
  }
  throw zt = !1, e;
}
function Vn(e) {
  return (e.f & ar) === 0 && (e.parent === null || (e.parent.f & Qt) === 0);
}
function fr(e, t, r, i) {
  if (zt) {
    if (r === null && (zt = !1), Vn(t))
      throw e;
    return;
  }
  if (r !== null && (zt = !0), Aa(e, t), Vn(t))
    throw e;
}
function ki(e, t, r = !0) {
  var i = e.reactions;
  if (i !== null)
    for (var a = 0; a < i.length; a++) {
      var o = i[a];
      ie != null && ie.includes(e) || ((o.f & ye) !== 0 ? ki(
        /** @type {Derived} */
        o,
        t,
        !1
      ) : t === o && (r ? Ee(o, Se) : (o.f & fe) !== 0 && Ee(o, nt), cr(
        /** @type {Effect} */
        o
      )));
    }
}
function Ai(e) {
  var y;
  var t = ne, r = de, i = ge, a = N, o = Be, u = ie, s = oe, c = Re, d = e.f;
  ne = /** @type {null | Value[]} */
  null, de = 0, ge = null, Be = (d & he) !== 0 && (Re || !et || N === null), N = (d & (Pe | rt)) === 0 ? e : null, ie = null, Un(e.ctx), Re = !1, nr++, e.f |= Rr;
  try {
    var p = (
      /** @type {Function} */
      (0, e.fn)()
    ), h = e.deps;
    if (ne !== null) {
      var g;
      if (ir(e, de), h !== null && de > 0)
        for (h.length = de + ne.length, g = 0; g < ne.length; g++)
          h[de + g] = ne[g];
      else
        e.deps = h = ne;
      if (!Be)
        for (g = de; g < h.length; g++)
          ((y = h[g]).reactions ?? (y.reactions = [])).push(e);
    } else h !== null && de < h.length && (ir(e, de), h.length = de);
    if (Ni() && ge !== null && !Re && h !== null && (e.f & (ye | nt | Se)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      ge.length; g++)
        ki(
          ge[g],
          /** @type {Effect} */
          e
        );
    return a !== null && a !== e && (nr++, ge !== null && (i === null ? i = ge : i.push(.../** @type {Source[]} */
    ge))), p;
  } finally {
    ne = t, de = r, ge = i, N = a, Be = o, ie = u, Un(s), Re = c, e.f ^= Rr;
  }
}
function Ia(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var i = Wo.call(r, e);
    if (i !== -1) {
      var a = r.length - 1;
      a === 0 ? r = t.reactions = null : (r[i] = r[a], r.pop());
    }
  }
  r === null && (t.f & ye) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ne === null || !ne.includes(t)) && (Ee(t, nt), (t.f & (he | er)) === 0 && (t.f ^= er), fi(
    /** @type {Derived} **/
    t
  ), ir(
    /** @type {Derived} **/
    t,
    0
  ));
}
function ir(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var i = t; i < r.length; i++)
      Ia(e, r[i]);
}
function Hr(e) {
  var t = e.f;
  if ((t & ar) === 0) {
    Ee(e, fe);
    var r = T, i = oe, a = et;
    T = e, et = !0;
    try {
      (t & Fr) !== 0 ? wa(e) : gi(e), vi(e);
      var o = Ai(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = Ci;
      var u = e.deps, s;
      Ln && da && e.f & Se;
    } catch (c) {
      fr(c, e, r, i || e.ctx);
    } finally {
      et = a, T = r;
    }
  }
}
function Ra() {
  try {
    oa();
  } catch (e) {
    if (rr !== null)
      fr(e, rr, null);
    else
      throw e;
  }
}
function Ii() {
  var e = et;
  try {
    var t = 0;
    for (et = !0; Tt.length > 0; ) {
      t++ > 1e3 && Ra();
      var r = Tt, i = r.length;
      Tt = [];
      for (var a = 0; a < i; a++) {
        var o = Sa(r[a]);
        $a(o);
      }
      Ft.clear();
    }
  } finally {
    tr = !1, et = e, rr = null;
  }
}
function $a(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var i = e[r];
      if ((i.f & (ar | mt)) === 0)
        try {
          Vt(i) && (Hr(i), i.deps === null && i.first === null && i.nodes_start === null && (i.teardown === null ? pi(i) : i.fn = null));
        } catch (a) {
          fr(a, i, null, i.ctx);
        }
    }
}
function cr(e) {
  tr || (tr = !0, queueMicrotask(Ii));
  for (var t = rr = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (rt | Pe)) !== 0) {
      if ((r & fe) === 0) return;
      t.f ^= fe;
    }
  }
  Tt.push(t);
}
function Sa(e) {
  for (var t = [], r = e; r !== null; ) {
    var i = r.f, a = (i & (Pe | rt)) !== 0, o = a && (i & fe) !== 0;
    if (!o && (i & mt) === 0) {
      if ((i & ri) !== 0)
        t.push(r);
      else if (a)
        r.f ^= fe;
      else
        try {
          Vt(r) && Hr(r);
        } catch (c) {
          fr(c, r, null, r.ctx);
        }
      var u = r.first;
      if (u !== null) {
        r = u;
        continue;
      }
    }
    var s = r.parent;
    for (r = r.next; r === null && s !== null; )
      r = s.next, s = s.parent;
  }
  return t;
}
function A(e) {
  for (var t; ; ) {
    if (xa(), Tt.length === 0)
      return (
        /** @type {T} */
        t
      );
    tr = !0, Ii();
  }
}
async function Ar() {
  await Promise.resolve(), A();
}
function l(e) {
  var t = e.f, r = (t & ye) !== 0;
  if (N !== null && !Re) {
    if (!(ie != null && ie.includes(e))) {
      var i = N.deps;
      e.rv < nr && (e.rv = nr, ne === null && i !== null && i[de] === e ? de++ : ne === null ? ne = [e] : (!Be || !ne.includes(e)) && ne.push(e));
    }
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var a = (
      /** @type {Derived} */
      e
    ), o = a.parent;
    o !== null && (o.f & he) === 0 && (a.f ^= he);
  }
  return r && (a = /** @type {Derived} */
  e, Vt(a) && di(a)), Mt && Ft.has(e) ? Ft.get(e) : e.v;
}
function tt(e) {
  var t = Re;
  try {
    return Re = !0, e();
  } finally {
    Re = t;
  }
}
const Da = -7169;
function Ee(e, t) {
  e.f = e.f & Da | t;
}
const Ft = /* @__PURE__ */ new Map();
function Ri(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: si,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function M(e, t) {
  const r = Ri(e);
  return Ei(r), r;
}
// @__NO_SIDE_EFFECTS__
function Gr(e, t = !1) {
  const r = Ri(e);
  return t || (r.equals = Vr), r;
}
function b(e, t, r = !1) {
  N !== null && !Re && Ni() && (N.f & (ye | Fr)) !== 0 && !(ie != null && ie.includes(e)) && fa();
  let i = r ? qe(t) : t;
  return Na(e, i);
}
function Na(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    Mt ? Ft.set(e, t) : Ft.set(e, r), e.v = t, (e.f & ye) !== 0 && ((e.f & Se) !== 0 && ci(
      /** @type {Derived} */
      e
    ), Ee(e, (e.f & he) === 0 ? fe : nt)), e.wv = xi(), $i(e, Se), T !== null && (T.f & fe) !== 0 && (T.f & (Pe | rt)) === 0 && (ge === null ? ka([e]) : ge.push(e));
  }
  return t;
}
function $i(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, a = 0; a < i; a++) {
      var o = r[a], u = o.f;
      (u & Se) === 0 && (Ee(o, t), (u & (fe | he)) !== 0 && ((u & ye) !== 0 ? $i(
        /** @type {Derived} */
        o,
        nt
      ) : cr(
        /** @type {Effect} */
        o
      )));
    }
}
let oe = null;
function Un(e) {
  oe = e;
}
function Si(e, t = !1, r) {
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
  Ur(() => {
    i.d = !0;
  });
}
function Di(e) {
  const t = oe;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const u = t.e;
    if (u !== null) {
      var r = T, i = N;
      t.e = null;
      try {
        for (var a = 0; a < u.length; a++) {
          var o = u[a];
          Ye(o.effect), De(o.reaction), jr(o.fn);
        }
      } finally {
        Ye(r), De(i);
      }
    }
    oe = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Ni() {
  return !0;
}
const Ta = ["touchstart", "touchmove"];
function La(e) {
  return Ta.includes(e);
}
function Pa(e, t) {
  if (t) {
    const r = document.body;
    e.autofocus = !0, Br(() => {
      document.activeElement === r && e.focus();
    });
  }
}
let jn = !1;
function Ti() {
  jn || (jn = !0, document.addEventListener(
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
function Li(e) {
  var t = N, r = T;
  De(null), Ye(null);
  try {
    return e();
  } finally {
    De(t), Ye(r);
  }
}
function Oa(e, t, r, i = r) {
  e.addEventListener(t, () => Li(r));
  const a = e.__on_r;
  a ? e.__on_r = () => {
    a(), i(!0);
  } : e.__on_r = () => i(!0), Ti();
}
const Pi = /* @__PURE__ */ new Set(), Tr = /* @__PURE__ */ new Set();
function Fa(e, t, r, i = {}) {
  function a(o) {
    if (i.capture || Dt.call(t, o), !o.cancelBubble)
      return Li(() => r == null ? void 0 : r.call(this, o));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Br(() => {
    t.addEventListener(e, a, i);
  }) : t.addEventListener(e, a, i), a;
}
function je(e, t, r, i, a) {
  var o = { capture: i, passive: a }, u = Fa(e, t, r, o);
  (t === document.body || t === window || t === document) && Ur(() => {
    t.removeEventListener(e, u, o);
  });
}
function Ma(e) {
  for (var t = 0; t < e.length; t++)
    Pi.add(e[t]);
  for (var r of Tr)
    r(e);
}
function Dt(e) {
  var J;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), i = e.type, a = ((J = e.composedPath) == null ? void 0 : J.call(e)) || [], o = (
    /** @type {null | Element} */
    a[0] || e.target
  ), u = 0, s = e.__root;
  if (s) {
    var c = a.indexOf(s);
    if (c !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var d = a.indexOf(t);
    if (d === -1)
      return;
    c <= d && (u = c);
  }
  if (o = /** @type {Element} */
  a[u] || e.target, o !== t) {
    Lt(e, "currentTarget", {
      configurable: !0,
      get() {
        return o || r;
      }
    });
    var p = N, h = T;
    De(null), Ye(null);
    try {
      for (var g, y = []; o !== null; ) {
        var S = o.assignedSlot || o.parentNode || /** @type {any} */
        o.host || null;
        try {
          var E = o["__" + i];
          if (E != null && (!/** @type {any} */
          o.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === o))
            if (Qn(E)) {
              var [V, ...ce] = E;
              V.apply(o, [e, ...ce]);
            } else
              E.call(o, e);
        } catch (ee) {
          g ? y.push(ee) : g = ee;
        }
        if (e.cancelBubble || S === t || S === null)
          break;
        o = S;
      }
      if (g) {
        for (let ee of y)
          queueMicrotask(() => {
            throw ee;
          });
        throw g;
      }
    } finally {
      e.__root = t, delete e.currentTarget, De(p), Ye(h);
    }
  }
}
function Yr(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function $e(e, t) {
  var r = (
    /** @type {Effect} */
    T
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function Ce(e, t) {
  var r = (t & Ho) !== 0, i = (t & Go) !== 0, a, o = !e.startsWith("<!>");
  return () => {
    if (F)
      return $e(O, null), O;
    a === void 0 && (a = Yr(o ? e : "<!>" + e), r || (a = /** @type {Node} */
    /* @__PURE__ */ pe(a)));
    var u = (
      /** @type {TemplateNode} */
      i || oi ? document.importNode(a, !0) : a.cloneNode(!0)
    );
    if (r) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ pe(u)
      ), c = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      $e(s, c);
    } else
      $e(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function dr(e, t, r = "svg") {
  var i = !e.startsWith("<!>"), a = `<${r}>${i ? e : "<!>" + e}</${r}>`, o;
  return () => {
    if (F)
      return $e(O, null), O;
    if (!o) {
      var u = (
        /** @type {DocumentFragment} */
        Yr(a)
      ), s = (
        /** @type {Element} */
        /* @__PURE__ */ pe(u)
      );
      o = /** @type {Element} */
      /* @__PURE__ */ pe(s);
    }
    var c = (
      /** @type {TemplateNode} */
      o.cloneNode(!0)
    );
    return $e(c, c), c;
  };
}
function Yt() {
  if (F)
    return $e(O, null), O;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = sr();
  return e.append(t, r), $e(t, r), e;
}
function U(e, t) {
  if (F) {
    T.nodes_end = O, bt();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Va(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function Oi(e, t) {
  return Fi(e, t);
}
function Ua(e, t) {
  $r(), t.intro = t.intro ?? !1;
  const r = t.target, i = F, a = O;
  try {
    for (var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ pe(r)
    ); o && (o.nodeType !== 8 || /** @type {Comment} */
    o.data !== Or); )
      o = /** @type {TemplateNode} */
      /* @__PURE__ */ We(o);
    if (!o)
      throw _t;
    gt(!0), He(
      /** @type {Comment} */
      o
    ), bt();
    const u = Fi(e, { ...t, anchor: o });
    if (O === null || O.nodeType !== 8 || /** @type {Comment} */
    O.data !== Kn)
      throw lr(), _t;
    return gt(!1), /**  @type {Exports} */
    u;
  } catch (u) {
    if (u === _t)
      return t.recover === !1 && aa(), $r(), ha(r), gt(!1), Oi(e, t);
    throw u;
  } finally {
    gt(i), He(a);
  }
}
const ht = /* @__PURE__ */ new Map();
function Fi(e, { target: t, anchor: r, props: i = {}, events: a, context: o, intro: u = !0 }) {
  $r();
  var s = /* @__PURE__ */ new Set(), c = (h) => {
    for (var g = 0; g < h.length; g++) {
      var y = h[g];
      if (!s.has(y)) {
        s.add(y);
        var S = La(y);
        t.addEventListener(y, Dt, { passive: S });
        var E = ht.get(y);
        E === void 0 ? (document.addEventListener(y, Dt, { passive: S }), ht.set(y, 1)) : ht.set(y, E + 1);
      }
    }
  };
  c(Zo(Pi)), Tr.add(c);
  var d = void 0, p = ba(() => {
    var h = r ?? t.appendChild(sr());
    return Dr(() => {
      if (o) {
        Si({});
        var g = (
          /** @type {ComponentContext} */
          oe
        );
        g.c = o;
      }
      a && (i.$$events = a), F && $e(
        /** @type {TemplateNode} */
        h,
        null
      ), d = e(h, i) || {}, F && (T.nodes_end = O), o && Di();
    }), () => {
      var S;
      for (var g of s) {
        t.removeEventListener(g, Dt);
        var y = (
          /** @type {number} */
          ht.get(g)
        );
        --y === 0 ? (document.removeEventListener(g, Dt), ht.delete(g)) : ht.set(g, y);
      }
      Tr.delete(c), h !== r && ((S = h.parentNode) == null || S.removeChild(h));
    };
  });
  return Lr.set(d, p), d;
}
let Lr = /* @__PURE__ */ new WeakMap();
function ja(e, t) {
  const r = Lr.get(e);
  return r ? (Lr.delete(e), r(t)) : Promise.resolve();
}
function z(e, t, [r, i] = [0, 0]) {
  F && r === 0 && bt();
  var a = e, o = null, u = null, s = ue, c = r > 0 ? Mr : 0, d = !1;
  const p = (g, y = !0) => {
    d = !0, h(y, g);
  }, h = (g, y) => {
    if (s === (s = g)) return;
    let S = !1;
    if (F && i !== -1) {
      if (r === 0) {
        const V = (
          /** @type {Comment} */
          a.data
        );
        V === Or ? i = 0 : V === Jn ? i = 1 / 0 : (i = parseInt(V.substring(1)), i !== i && (i = s ? 1 / 0 : -1));
      }
      const E = i > r;
      !!s === E && (a = ca(), He(a), gt(!1), S = !0, i = -1);
    }
    s ? (o ? Fn(o) : y && (o = Dr(() => y(a))), u && Nr(u, () => {
      u = null;
    })) : (u ? Fn(u) : y && (u = Dr(() => y(a, [r + 1, i]))), o && Nr(o, () => {
      o = null;
    })), S && gt(!0);
  };
  hi(() => {
    d = !1, t(p), d || h(null, null);
  }, c), F && (a = O);
}
function Xe(e, t, r = !1, i = !1, a = !1) {
  var o = e, u = "";
  Ie(() => {
    var s = (
      /** @type {Effect} */
      T
    );
    if (u === (u = t() ?? "")) {
      F && bt();
      return;
    }
    if (s.nodes_start !== null && (_i(
      s.nodes_start,
      /** @type {TemplateNode} */
      s.nodes_end
    ), s.nodes_start = s.nodes_end = null), u !== "") {
      if (F) {
        O.data;
        for (var c = bt(), d = c; c !== null && (c.nodeType !== 8 || /** @type {Comment} */
        c.data !== ""); )
          d = c, c = /** @type {TemplateNode} */
          /* @__PURE__ */ We(c);
        if (c === null)
          throw lr(), _t;
        $e(O, d), o = He(c);
        return;
      }
      var p = u + "";
      r ? p = `<svg>${p}</svg>` : i && (p = `<math>${p}</math>`);
      var h = Yr(p);
      if ((r || i) && (h = /** @type {Element} */
      /* @__PURE__ */ pe(h)), $e(
        /** @type {TemplateNode} */
        /* @__PURE__ */ pe(h),
        /** @type {TemplateNode} */
        h.lastChild
      ), r || i)
        for (; /* @__PURE__ */ pe(h); )
          o.before(
            /** @type {Node} */
            /* @__PURE__ */ pe(h)
          );
      else
        o.before(h);
    }
  });
}
function qa(e, t, r, i, a) {
  var s;
  F && bt();
  var o = (s = t.$$slots) == null ? void 0 : s[r], u = !1;
  o === !0 && (o = t.children, u = !0), o === void 0 || o(e, u ? () => i : i);
}
const qn = [...` 	
\r\f \v\uFEFF`];
function Ba(e, t, r) {
  var i = "" + e;
  if (r) {
    for (var a in r)
      if (r[a])
        i = i ? i + " " + a : a;
      else if (i.length)
        for (var o = a.length, u = 0; (u = i.indexOf(a, u)) >= 0; ) {
          var s = u + o;
          (u === 0 || qn.includes(i[u - 1])) && (s === i.length || qn.includes(i[s])) ? i = (u === 0 ? "" : i.substring(0, u)) + i.substring(s + 1) : u = s;
        }
  }
  return i === "" ? null : i;
}
function Ha(e, t, r, i, a, o) {
  var u = e.__className;
  if (F || u !== r || u === void 0) {
    var s = Ba(r, i, o);
    (!F || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : e.className = s), e.__className = r;
  } else if (o && a !== o)
    for (var c in o) {
      var d = !!o[c];
      (a == null || d !== !!a[c]) && e.classList.toggle(c, d);
    }
  return o;
}
const Ga = Symbol("is custom element"), Ya = Symbol("is html");
function Bn(e) {
  if (F) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var i = e.value;
          D(e, "value", null), e.value = i;
        }
        if (e.hasAttribute("checked")) {
          var a = e.checked;
          D(e, "checked", null), e.checked = a;
        }
      }
    };
    e.__on_r = r, Ca(r), Ti();
  }
}
function Wa(e, t) {
  var r = Mi(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function D(e, t, r, i) {
  var a = Mi(e);
  F && (a[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || a[t] !== (a[t] = r) && (t === "loading" && (e[ta] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Za(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Mi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Ga]: e.nodeName.includes("-"),
      [Ya]: e.namespaceURI === Yo
    })
  );
}
var Hn = /* @__PURE__ */ new Map();
function Za(e) {
  var t = Hn.get(e.nodeName);
  if (t) return t;
  Hn.set(e.nodeName, t = []);
  for (var r, i = e, a = Element.prototype; a !== i; ) {
    r = zo(i);
    for (var o in r)
      r[o].set && t.push(o);
    i = ei(i);
  }
  return t;
}
function za(e, t, r = t) {
  Oa(e, "change", (i) => {
    var a = i ? e.defaultChecked : e.checked;
    r(a);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (F && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  tt(t) == null) && r(e.checked), qr(() => {
    var i = t();
    e.checked = !!i;
  });
}
function Gn(e, t) {
  return e === t || (e == null ? void 0 : e[Nt]) === t;
}
function Wt(e = {}, t, r, i) {
  return jr(() => {
    var a, o;
    return qr(() => {
      a = o, o = [], tt(() => {
        e !== r(...o) && (t(e, ...o), a && Gn(r(...a), e) && t(null, ...a));
      });
    }), () => {
      Br(() => {
        o && Gn(r(...o), e) && t(null, ...o);
      });
    };
  }), e;
}
function Vi(e) {
  oe === null && Xn(), Sr(() => {
    const t = tt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Ja(e) {
  oe === null && Xn(), Vi(() => () => tt(e));
}
function Ui(e, t, r) {
  if (e == null)
    return t(void 0), pt;
  const i = tt(
    () => e.subscribe(
      t,
      // @ts-expect-error
      r
    )
  );
  return i.unsubscribe ? () => i.unsubscribe() : i;
}
const vt = [];
function Ka(e, t = pt) {
  let r = null;
  const i = /* @__PURE__ */ new Set();
  function a(s) {
    if (ui(e, s) && (e = s, r)) {
      const c = !vt.length;
      for (const d of i)
        d[1](), vt.push(d, e);
      if (c) {
        for (let d = 0; d < vt.length; d += 2)
          vt[d][0](vt[d + 1]);
        vt.length = 0;
      }
    }
  }
  function o(s) {
    a(s(
      /** @type {T} */
      e
    ));
  }
  function u(s, c = pt) {
    const d = [s, c];
    return i.add(d), i.size === 1 && (r = t(a, o) || pt), s(
      /** @type {T} */
      e
    ), () => {
      i.delete(d), i.size === 0 && r && (r(), r = null);
    };
  }
  return { set: a, update: o, subscribe: u };
}
function Jt(e) {
  let t;
  return Ui(e, (r) => t = r)(), t;
}
let Zt = !1, Pr = Symbol();
function Xa(e, t, r) {
  const i = r[t] ?? (r[t] = {
    store: null,
    source: /* @__PURE__ */ Gr(void 0),
    unsubscribe: pt
  });
  if (i.store !== e && !(Pr in r))
    if (i.unsubscribe(), i.store = e ?? null, e == null)
      i.source.v = void 0, i.unsubscribe = pt;
    else {
      var a = !0;
      i.unsubscribe = Ui(e, (o) => {
        a ? i.source.v = o : b(i.source, o);
      }), a = !1;
    }
  return e && Pr in r ? Jt(e) : l(i.source);
}
function Qa() {
  const e = {};
  function t() {
    Ur(() => {
      for (var r in e)
        e[r].unsubscribe();
      Lt(e, Pr, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function el(e) {
  var t = Zt;
  try {
    return Zt = !1, [e(), Zt];
  } finally {
    Zt = t;
  }
}
function Yn(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function I(e, t, r, i) {
  var ot;
  var a = (r & Uo) !== 0, o = !0, u = (r & qo) !== 0, s = (r & Bo) !== 0, c = !1, d;
  u ? [d, c] = el(() => (
    /** @type {V} */
    e[t]
  )) : d = /** @type {V} */
  e[t];
  var p = Nt in e || ii in e, h = u && (((ot = Qe(e, t)) == null ? void 0 : ot.set) ?? (p && t in e && ((j) => e[t] = j))) || void 0, g = (
    /** @type {V} */
    i
  ), y = !0, S = !1, E = () => (S = !0, y && (y = !1, s ? g = tt(
    /** @type {() => V} */
    i
  ) : g = /** @type {V} */
  i), g);
  d === void 0 && i !== void 0 && (h && o && la(), d = E(), h && h(d));
  var V;
  if (V = () => {
    var j = (
      /** @type {V} */
      e[t]
    );
    return j === void 0 ? E() : (y = !0, S = !1, j);
  }, (r & jo) === 0)
    return V;
  if (h) {
    var ce = e.$$legacy;
    return function(j, ae) {
      return arguments.length > 0 ? ((!ae || ce || c) && h(ae ? V() : j), j) : V();
    };
  }
  var J = !1, ee = /* @__PURE__ */ Gr(d), K = /* @__PURE__ */ ur(() => {
    var j = V(), ae = l(ee);
    return J ? (J = !1, ae) : ee.v = j;
  });
  return u && l(K), a || (K.equals = Vr), function(j, ae) {
    if (arguments.length > 0) {
      const me = ae ? l(K) : u ? qe(j) : j;
      if (!K.equals(me)) {
        if (J = !0, b(ee, me), S && g !== void 0 && (g = me), Yn(K))
          return j;
        tt(() => l(K));
      }
      return j;
    }
    return Yn(K) ? K.v : l(K);
  };
}
function tl(e) {
  return new rl(e);
}
var Le, _e;
class rl {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    Cr(this, Le);
    /** @type {Record<string, any>} */
    Cr(this, _e);
    var o;
    var r = /* @__PURE__ */ new Map(), i = (u, s) => {
      var c = /* @__PURE__ */ Gr(s);
      return r.set(u, c), c;
    };
    const a = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(u, s) {
          return l(r.get(s) ?? i(s, Reflect.get(u, s)));
        },
        has(u, s) {
          return s === ii ? !0 : (l(r.get(s) ?? i(s, Reflect.get(u, s))), Reflect.has(u, s));
        },
        set(u, s, c) {
          return b(r.get(s) ?? i(s, c), c), Reflect.set(u, s, c);
        }
      }
    );
    xr(this, _e, (t.hydrate ? Ua : Oi)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: a,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((o = t == null ? void 0 : t.props) != null && o.$$host) || t.sync === !1) && A(), xr(this, Le, a.$$events);
    for (const u of Object.keys(se(this, _e)))
      u === "$set" || u === "$destroy" || u === "$on" || Lt(this, u, {
        get() {
          return se(this, _e)[u];
        },
        /** @param {any} value */
        set(s) {
          se(this, _e)[u] = s;
        },
        enumerable: !0
      });
    se(this, _e).$set = /** @param {Record<string, any>} next */
    (u) => {
      Object.assign(a, u);
    }, se(this, _e).$destroy = () => {
      ja(se(this, _e));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    se(this, _e).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    se(this, Le)[t] = se(this, Le)[t] || [];
    const i = (...a) => r.call(this, ...a);
    return se(this, Le)[t].push(i), () => {
      se(this, Le)[t] = se(this, Le)[t].filter(
        /** @param {any} fn */
        (a) => a !== i
      );
    };
  }
  $destroy() {
    se(this, _e).$destroy();
  }
}
Le = new WeakMap(), _e = new WeakMap();
let ji;
typeof HTMLElement == "function" && (ji = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, i) {
    super();
    /** The Svelte component constructor */
    we(this, "$$ctor");
    /** Slots */
    we(this, "$$s");
    /** @type {any} The Svelte component instance */
    we(this, "$$c");
    /** Whether or not the custom element is connected */
    we(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    we(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    we(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    we(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    we(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    we(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    we(this, "$$me");
    this.$$ctor = t, this.$$s = r, i && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, r, i) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(r), this.$$c) {
      const a = this.$$c.$on(t, r);
      this.$$l_u.set(r, a);
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
      const a = this.$$l_u.get(r);
      a && (a(), this.$$l_u.delete(r));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(a) {
        return (o) => {
          const u = document.createElement("slot");
          a !== "default" && (u.name = a), U(o, u);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, i = nl(this);
      for (const a of this.$$s)
        a in i && (a === "default" && !this.$$d.children ? (this.$$d.children = t(a), r.default = !0) : r[a] = t(a));
      for (const a of this.attributes) {
        const o = this.$$g_p(a.name);
        o in this.$$d || (this.$$d[o] = Kt(o, a.value, this.$$p_d, "toProp"));
      }
      for (const a in this.$$p_d)
        !(a in this.$$d) && this[a] !== void 0 && (this.$$d[a] = this[a], delete this[a]);
      this.$$c = tl({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = ma(() => {
        qr(() => {
          var a;
          this.$$r = !0;
          for (const o of Xt(this.$$c)) {
            if (!((a = this.$$p_d[o]) != null && a.reflect)) continue;
            this.$$d[o] = this.$$c[o];
            const u = Kt(
              o,
              this.$$d[o],
              this.$$p_d,
              "toAttribute"
            );
            u == null ? this.removeAttribute(this.$$p_d[o].attribute || o) : this.setAttribute(this.$$p_d[o].attribute || o, u);
          }
          this.$$r = !1;
        });
      });
      for (const a in this.$$l)
        for (const o of this.$$l[a]) {
          const u = this.$$c.$on(a, o);
          this.$$l_u.set(o, u);
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
    var a;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Kt(t, i, this.$$p_d, "toProp"), (a = this.$$c) == null || a.$set({ [t]: this.$$d[t] }));
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
    return Xt(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function Kt(e, t, r, i) {
  var o;
  const a = (o = r[e]) == null ? void 0 : o.type;
  if (t = a === "Boolean" && typeof t != "boolean" ? t != null : t, !i || !r[e])
    return t;
  if (i === "toAttribute")
    switch (a) {
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
    switch (a) {
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
function nl(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function il(e, t, r, i, a, o) {
  let u = class extends ji {
    constructor() {
      super(e, r, a), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Xt(t).map(
        (s) => (t[s].attribute || s).toLowerCase()
      );
    }
  };
  return Xt(t).forEach((s) => {
    Lt(u.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(c) {
        var h;
        c = Kt(s, c, t), this.$$d[s] = c;
        var d = this.$$c;
        if (d) {
          var p = (h = Qe(d, s)) == null ? void 0 : h.get;
          p ? d[s] = c : d.$set({ [s]: c });
        }
      }
    });
  }), i.forEach((s) => {
    Lt(u.prototype, s, {
      get() {
        var c;
        return (c = this.$$c) == null ? void 0 : c[s];
      }
    });
  }), e.element = /** @type {any} */
  u, u;
}
const qi = new TextEncoder();
function ol(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function al(e, t = "SHA-256", r = 1e5) {
  const i = Date.now().toString(16);
  e || (e = Math.round(Math.random() * r));
  const a = await Bi(i, e, t);
  return {
    algorithm: t,
    challenge: a,
    salt: i,
    signature: ""
  };
}
async function Bi(e, t, r) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return ol(
    await crypto.subtle.digest(
      r.toUpperCase(),
      qi.encode(e + t)
    )
  );
}
function ll(e, t, r = "SHA-256", i = 1e6, a = 0) {
  const o = new AbortController(), u = Date.now();
  return {
    promise: (async () => {
      for (let c = a; c <= i; c += 1) {
        if (o.signal.aborted)
          return null;
        if (await Bi(t, c, r) === e)
          return {
            number: c,
            took: Date.now() - u
          };
      }
      return null;
    })(),
    controller: o
  };
}
function Wn() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function sl(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let i = 0; i < t.length; i++)
    r[i] = t.charCodeAt(i);
  return r;
}
function ul(e, t = 12) {
  const r = new Uint8Array(t);
  for (let i = 0; i < t; i++)
    r[i] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function fl(e, t = "", r = 1e6, i = 0) {
  const a = "AES-GCM", o = new AbortController(), u = Date.now(), s = async () => {
    for (let p = i; p <= r; p += 1) {
      if (o.signal.aborted || !c || !d)
        return null;
      try {
        const h = await crypto.subtle.decrypt(
          {
            name: a,
            iv: ul(p)
          },
          c,
          d
        );
        if (h)
          return {
            clearText: new TextDecoder().decode(h),
            took: Date.now() - u
          };
      } catch {
      }
    }
    return null;
  };
  let c = null, d = null;
  try {
    d = sl(e);
    const p = await crypto.subtle.digest(
      "SHA-256",
      qi.encode(t)
    );
    c = await crypto.subtle.importKey(
      "raw",
      p,
      a,
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
var C = /* @__PURE__ */ ((e) => (e.CODE = "code", e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(C || {}), Q = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.LOADING = "loading", e.PLAYING = "playing", e.PAUSED = "paused", e.READY = "ready", e))(Q || {});
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (e) => Jt(globalThis.altchaI18n.store)[e],
  set: (e, t) => {
    Object.assign(Jt(globalThis.altchaI18n.store), {
      [e]: t
    }), globalThis.altchaI18n.store.set(Jt(globalThis.altchaI18n.store));
  },
  store: Ka({})
};
const cl = {
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
globalThis.altchaI18n.set("en", cl);
const Ir = (e, t) => {
  let r = /* @__PURE__ */ va(() => Xo(t == null ? void 0 : t(), 24));
  var i = gl();
  Ie(() => {
    D(i, "width", l(r)), D(i, "height", l(r));
  }), U(e, i);
};
function dl(e, t) {
  e.code === "Space" && (e.preventDefault(), e.stopImmediatePropagation(), t());
}
function hl(e, t) {
  e.preventDefault(), t();
}
function vl(e, t, r, i, a, o, u, s) {
  var c;
  [
    C.UNVERIFIED,
    C.ERROR,
    C.EXPIRED,
    C.CODE
  ].includes(l(t)) ? r() !== !1 && ((c = l(i)) == null ? void 0 : c.reportValidity()) === !1 ? b(a, !1) : o() ? u() : s() : b(a, !0);
}
var gl = /* @__PURE__ */ dr('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="altcha-spinner"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor"></path></svg>'), _l = /* @__PURE__ */ Ce('<input type="hidden">'), pl = /* @__PURE__ */ Ce('<div><a target="_blank" class="altcha-logo" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor"></path></svg></a></div>'), ml = /* @__PURE__ */ dr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg>'), bl = /* @__PURE__ */ dr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z"></path></svg>'), wl = /* @__PURE__ */ dr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"></path></svg>'), yl = /* @__PURE__ */ Ce('<button type="button" class="altcha-code-challenge-audio"><!></button>'), El = /* @__PURE__ */ Ce("<audio hidden autoplay><source></audio>"), Cl = /* @__PURE__ */ Ce('<div class="altcha-code-challenge" role="dialog"><div class="altcha-code-challenge-arrow"></div> <form data-code-challenge-form="1"><img class="altcha-code-challenge-image" alt=""> <input type="text" autocomplete="off" name="code" class="altcha-code-challenge-input" required> <div class="altcha-code-challenge-buttons"><div class="altcha-code-challenge-buttons-left"><!> <button type="button" class="altcha-code-challenge-reload"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z"></path></svg></button></div> <button type="submit" class="altcha-code-challenge-verify"><!> </button></div> <!></form></div>'), xl = /* @__PURE__ */ Ce("<div><!></div>"), kl = /* @__PURE__ */ Ce("<div><!></div>"), Al = /* @__PURE__ */ Ce('<div class="altcha-error"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg> <!></div>'), Il = /* @__PURE__ */ Ce('<div class="altcha-footer"><div><!></div></div>'), Rl = /* @__PURE__ */ Ce('<div class="altcha-anchor-arrow"></div>'), $l = /* @__PURE__ */ Ce('<!> <div class="altcha"><div class="altcha-main"><div><!> <input type="checkbox"></div> <label class="altcha-label"><!></label> <!> <!> <!></div> <!> <!> <!></div>', 1);
function Sl(e, t) {
  var $n, Sn;
  Si(t, !0);
  const [r, i] = Qa(), a = () => Xa(Wi, "$altchaI18nStore", r);
  let o = I(t, "auto", 7, void 0), u = I(t, "blockspam", 7, void 0), s = I(t, "challengeurl", 7, void 0), c = I(t, "challengejson", 7, void 0), d = I(t, "credentials", 7, void 0), p = I(t, "customfetch", 7, void 0), h = I(t, "debug", 7, !1), g = I(t, "delay", 7, 0), y = I(t, "disableautofocus", 7, !1), S = I(t, "expire", 7, void 0), E = I(t, "floating", 7, void 0), V = I(t, "floatinganchor", 7, void 0), ce = I(t, "floatingoffset", 7, void 0), J = I(t, "floatingpersist", 7, !1), ee = I(t, "hidefooter", 7, !1), K = I(t, "hidelogo", 7, !1), ot = I(t, "id", 7, void 0), j = I(t, "language", 7, void 0), ae = I(t, "name", 7, "altcha"), me = I(t, "maxnumber", 7, 1e6), wt = I(t, "mockerror", 7, !1), Oe = I(t, "obfuscated", 7, void 0), Ut = I(t, "plugins", 7, void 0), yt = I(t, "refetchonexpire", 7, !0), Ze = I(t, "sentinel", 7, void 0), xe = I(t, "spamfilter", 7, !1), at = I(t, "strings", 7, void 0), ve = I(t, "test", 7, !1), te = I(t, "verifyurl", 7, void 0), lt = I(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), Et = I(t, "workerurl", 7, void 0);
  const { altchaI18n: Yi } = globalThis, Wi = Yi.store, Wr = ["SHA-256", "SHA-384", "SHA-512"], Zi = "https://altcha.org/", Fe = (n, f) => {
    t.$$host.dispatchEvent(new CustomEvent(n, { detail: f }));
  }, Zr = (Sn = ($n = document.documentElement.lang) == null ? void 0 : $n.split("-")) == null ? void 0 : Sn[0], hr = /* @__PURE__ */ St(() => {
    var n;
    return s() && new URL(s(), location.origin).host.endsWith(".altcha.org") && !!((n = s()) != null && n.includes("apiKey=ckey_"));
  }), vr = /* @__PURE__ */ St(() => c() ? fn(c()) : void 0), zi = /* @__PURE__ */ St(() => at() ? fn(at()) : {}), P = /* @__PURE__ */ St(() => ({
    ...Xr(a()),
    ...l(zi)
  })), zr = /* @__PURE__ */ St(() => `${ot() || ae()}_checkbox_${Math.round(Math.random() * 1e8)}`);
  let Ct = /* @__PURE__ */ M(!1), B = /* @__PURE__ */ M(null), R = /* @__PURE__ */ M(qe(C.UNVERIFIED)), re = /* @__PURE__ */ M(void 0), xt = /* @__PURE__ */ M(null), Me = /* @__PURE__ */ M(null), gr = /* @__PURE__ */ M(null), st = /* @__PURE__ */ M(null), L = /* @__PURE__ */ M(null), ze = /* @__PURE__ */ M(null), ke = null, H = /* @__PURE__ */ M(null), Je = /* @__PURE__ */ M(!1), Ve = [], _r = /* @__PURE__ */ M(!1), Ne = /* @__PURE__ */ M(null);
  Sr(() => {
    so(l(ze));
  }), Sr(() => {
    uo(l(R));
  }), Ja(() => {
    Ji(), l(L) && (l(L).removeEventListener("submit", on), l(L).removeEventListener("reset", an), l(L).removeEventListener("focusin", nn), b(L, null)), ke && (clearTimeout(ke), ke = null), document.removeEventListener("click", tn), document.removeEventListener("scroll", rn), window.removeEventListener("resize", un);
  }), Vi(() => {
    var n;
    $("mounted", "2.0.3"), $("workers", lt()), eo(), $("plugins", Ve.length ? Ve.map((f) => f.constructor.pluginName).join(", ") : "none"), ve() && $("using test mode"), S() && pr(S()), o() !== void 0 && $("auto", o()), E() !== void 0 && dn(E()), b(L, (n = l(re)) == null ? void 0 : n.closest("form"), !0), l(L) && (l(L).addEventListener("submit", on, { capture: !0 }), l(L).addEventListener("reset", an), (o() === "onfocus" || J() === "focus") && l(L).addEventListener("focusin", nn)), o() === "onload" && (Oe() ? kt() : Te()), l(hr) && (ee() || K()) && $("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      Fe("load");
    });
  });
  function jt(n, f) {
    return btoa(JSON.stringify({
      algorithm: n.algorithm,
      challenge: n.challenge,
      number: f.number,
      salt: n.salt,
      signature: n.signature,
      test: ve() ? !0 : void 0,
      took: f.took
    }));
  }
  function Ji() {
    for (const n of Ve)
      n.destroy();
  }
  function Jr() {
    s() && yt() && l(R) === C.VERIFIED ? Te() : ut(C.EXPIRED, l(P).expired);
  }
  async function Ki() {
    var n;
    if (wt())
      throw $("mocking error"), new Error("Mocked error.");
    if (l(vr))
      return $("using provided json data"), l(vr);
    if (ve())
      return $("generating test challenge", { test: ve() }), al(typeof ve() != "boolean" ? +ve() : void 0);
    {
      if (!s() && l(L)) {
        const k = l(L).getAttribute("action");
        k != null && k.includes("/form/") && s(k + "/altcha");
      }
      if (!s())
        throw new Error("Attribute challengeurl not set.");
      $("fetching challenge from", s());
      const f = {
        credentials: typeof d() == "boolean" ? "include" : d(),
        headers: xe() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      }, v = await Kr()(s(), f);
      if (!v || !(v instanceof Response))
        throw new Error("Custom fetch function did not return a response.");
      if (v.status !== 200)
        throw new Error(`Server responded with ${v.status}.`);
      const m = v.headers.get("X-Altcha-Config"), _ = await v.json(), x = new URLSearchParams((n = _.salt.split("?")) == null ? void 0 : n[1]), w = x.get("expires") || x.get("expire");
      if (w) {
        const k = new Date(+w * 1e3), q = isNaN(k.getTime()) ? 0 : k.getTime() - Date.now();
        q > 0 && pr(q);
      }
      if (m)
        try {
          const k = JSON.parse(m);
          k && typeof k == "object" && (k.verifyurl && !k.verifyurl.startsWith("fn:") && (k.verifyurl = en(k.verifyurl)), gn(k));
        } catch (k) {
          $("unable to configure from X-Altcha-Config", k);
        }
      return _;
    }
  }
  function Xi(n) {
    var v, m;
    const f = (v = l(L)) == null ? void 0 : v.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((m = f == null ? void 0 : f.value) == null ? void 0 : m.slice(f.value.indexOf("@"))) || void 0;
  }
  function Kr() {
    let n = fetch;
    if (p())
      if ($("using customfetch"), typeof p() == "string") {
        if (n = globalThis[p()] || null, !n)
          throw new Error(`Custom fetch function not found: ${p()}`);
      } else
        n = p();
    return n;
  }
  function Xr(n, f = [
    j() || "",
    document.documentElement.lang || "",
    ...navigator.languages
  ]) {
    const v = Object.keys(n).map((_) => _.toLowerCase()), m = f.reduce(
      (_, x) => (x = x.toLowerCase(), _ || (n[x] ? x : null) || v.find((w) => x.split("-")[0] === w.split("-")[0]) || null),
      null
    );
    return n[m || "en"];
  }
  function Qi() {
    return xe() === "ipAddress" ? {
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
    } : typeof xe() == "object" ? xe() : {
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
  function Qr(n) {
    var v;
    return [
      ...((v = l(L)) == null ? void 0 : v.querySelectorAll(n != null && n.length ? n.map((m) => `input[name="${m}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (m, _) => {
        const x = _.name, w = _.value;
        return x && w && (m[x] = /\n/.test(w) ? w.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : w), m;
      },
      {}
    );
  }
  function en(n, f) {
    const v = new URL(s() || location.origin), m = new URL(n, v);
    if (m.search || (m.search = v.search), f)
      for (const _ in f)
        f[_] !== void 0 && f[_] !== null && m.searchParams.set(_, f[_]);
    return m.toString();
  }
  function eo() {
    const n = Ut() !== void 0 ? Ut().split(",") : void 0;
    for (const f of globalThis.altchaPlugins)
      (!n || n.includes(f.pluginName)) && Ve.push(new f({
        el: l(re),
        clarify: kt,
        dispatch: Fe,
        getConfiguration: _n,
        getFloatingAnchor: pn,
        getState: mn,
        log: $,
        reset: ut,
        solve: vn,
        setState: Ae,
        setFloatingAnchor: wn,
        verify: Te
      }));
  }
  function $(...n) {
    (h() || n.some((f) => f instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${ae()}]`, ...n);
  }
  function to() {
    b(H, Q.PAUSED, !0);
  }
  function ro(n) {
    b(H, Q.ERROR, !0);
  }
  function no() {
    b(H, Q.READY, !0);
  }
  function io() {
    b(H, Q.LOADING, !0);
  }
  function oo() {
    b(H, Q.PLAYING, !0);
  }
  function ao() {
    b(H, Q.PAUSED, !0);
  }
  function lo(n) {
    var f;
    if (n.preventDefault(), n.stopPropagation(), l(B)) {
      const v = new FormData(n.target), m = String(v.get("code"));
      if ((f = te()) != null && f.startsWith("fn:")) {
        const _ = te().replace(/^fn:/, "");
        if ($(`calling ${_} function instead of verifyurl`), !(_ in globalThis))
          throw new Error(`Global function "${_}" is undefined.`);
        return globalThis[_]({
          challenge: l(B).challenge,
          code: m,
          solution: l(B).solution
        });
      }
      b(Je, !0), cn(jt(l(B).challenge, l(B).solution), m).then(({ reason: _, verified: x }) => {
        x ? (b(B, null), Ae(C.VERIFIED), $("verified"), Ar().then(() => {
          var w;
          (w = l(gr)) == null || w.focus(), Fe("verified", { payload: l(Ne) });
        })) : (ut(), b(ze, _ || "Verification failed", !0));
      }).catch((_) => {
        b(B, null), Ae(C.ERROR, _), $("sentinel verification failed:", _);
      }).finally(() => {
        b(Je, !1);
      });
    }
  }
  function tn(n) {
    var v;
    const f = n.target;
    E() && f && !l(re).contains(f) && (l(R) === C.VERIFIED && J() === !1 || l(R) === C.VERIFIED && J() === "focus" && !((v = l(L)) != null && v.matches(":focus-within")) || o() === "off" && l(R) === C.UNVERIFIED) && bn();
  }
  function rn() {
    E() && l(R) !== C.UNVERIFIED && At();
  }
  function so(n) {
    for (const f of Ve)
      typeof f.onErrorChange == "function" && f.onErrorChange(l(ze));
  }
  function nn(n) {
    l(R) === C.UNVERIFIED ? Te() : E() && J() === "focus" && l(R) === C.VERIFIED && mr();
  }
  function on(n) {
    const f = n.target, v = n.submitter;
    f != null && f.hasAttribute("data-code-challenge-form") || (l(L) && o() === "onsubmit" ? l(R) === C.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), Te().then(() => {
      co(v);
    })) : l(R) !== C.VERIFIED && (n.preventDefault(), n.stopPropagation(), l(R) === C.VERIFYING && ln()) : l(L) && E() && o() === "off" && l(R) === C.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), mr()));
  }
  function an() {
    ut();
  }
  function ln() {
    l(R) === C.VERIFYING && l(P).waitAlert && alert(l(P).waitAlert);
  }
  function sn() {
    l(Me) ? l(Me).paused ? (l(Me).currentTime = 0, l(Me).play()) : l(Me).pause() : (b(_r, !0), requestAnimationFrame(() => {
      var n;
      (n = l(Me)) == null || n.play();
    }));
  }
  function uo(n) {
    for (const f of Ve)
      typeof f.onStateChange == "function" && f.onStateChange(l(R));
    E() && l(R) !== C.UNVERIFIED && requestAnimationFrame(() => {
      At();
    }), b(Ct, l(R) === C.VERIFIED);
  }
  function un() {
    E() && At();
  }
  function fn(n) {
    return JSON.parse(n);
  }
  async function fo(n) {
    if (!te())
      throw new Error("Attribute verifyurl not set.");
    $("requesting server verification from", te());
    const f = { payload: n };
    if (xe() !== !1) {
      const {
        blockedCountries: _,
        classifier: x,
        disableRules: w,
        email: k,
        expectedLanguages: q,
        expectedCountries: X,
        fields: le,
        ipAddress: Ue,
        text: wr,
        timeZone: Ht
      } = Qi();
      f.blockedCountries = _, f.classifier = x, f.disableRules = w, f.email = k === !1 ? void 0 : Xi(k), f.expectedCountries = X, f.expectedLanguages = q || (Zr ? [Zr] : void 0), f.fields = le === !1 ? void 0 : Qr(le), f.ipAddress = Ue === !1 ? void 0 : Ue || "auto", f.text = wr, f.timeZone = Ht === !1 ? void 0 : Ht || Wn();
    }
    const v = await Kr()(te(), {
      body: JSON.stringify(f),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (!v || !(v instanceof Response))
      throw new Error("Custom fetch function did not return a response.");
    if (v.status !== 200)
      throw new Error(`Server responded with ${v.status}.`);
    const m = await v.json();
    if (m != null && m.payload && b(Ne, m.payload, !0), Fe("serververification", m), u() && m.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  async function cn(n, f) {
    if (!te())
      throw new Error("Attribute verifyurl not set.");
    $("requesting sentinel verification from", te());
    const v = { code: f, payload: n };
    Ze() && (v.fields = Ze().fields ? Qr() : void 0, v.timeZone = Ze().timeZone ? Wn() : void 0);
    const m = await fetch(te(), {
      body: JSON.stringify(v),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (!m || !(m instanceof Response))
      throw new Error("Fetch function did not return a response.");
    if (m.status !== 200)
      throw new Error(`Server responded with ${m.status}.`);
    const _ = await m.json();
    return _ != null && _.payload && b(Ne, _.payload, !0), Fe("sentinelverification", _), _;
  }
  function co(n) {
    var f;
    l(L) && "requestSubmit" in l(L) ? l(L).requestSubmit(n) : (f = l(L)) != null && f.reportValidity() && (n ? n.click() : l(L).submit());
  }
  function pr(n) {
    $("expire", n), ke && (clearTimeout(ke), ke = null), n < 1 ? Jr() : ke = setTimeout(Jr, n);
  }
  function dn(n) {
    $("floating", n), E() !== n && (l(re).style.left = "", l(re).style.top = ""), E(n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : E()), E() ? (o() || o("onsubmit"), document.addEventListener("scroll", rn), document.addEventListener("click", tn), window.addEventListener("resize", un)) : o() === "onsubmit" && o(void 0);
  }
  function hn(n) {
    if (!n.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (n.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!Wr.includes(n.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${Wr.join(", ")}`);
    if (!n.challenge || n.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!n.salt || n.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function vn(n) {
    let f = null;
    if ("Worker" in window) {
      try {
        f = await ho(n, n.maxNumber || n.maxnumber || me());
      } catch (v) {
        $(v);
      }
      if ((f == null ? void 0 : f.number) !== void 0 || "obfuscated" in n)
        return { data: n, solution: f };
    }
    if ("obfuscated" in n) {
      const v = await fl(n.obfuscated, n.key, n.maxNumber || n.maxnumber);
      return { data: n, solution: await v.promise };
    }
    return {
      data: n,
      solution: await ll(n.challenge, n.salt, n.algorithm, n.maxNumber || n.maxnumber || me()).promise
    };
  }
  async function ho(n, f = typeof ve() == "number" ? ve() : n.maxNumber || n.maxnumber || me(), v = Math.ceil(lt())) {
    const m = [];
    v = Math.min(16, f, Math.max(1, v));
    for (let w = 0; w < v; w++)
      m.push(altchaCreateWorker(Et()));
    const _ = Math.ceil(f / v), x = await Promise.all(m.map((w, k) => {
      const q = k * _;
      return new Promise((X) => {
        w.addEventListener("message", (le) => {
          if (le.data)
            for (const Ue of m)
              Ue !== w && Ue.postMessage({ type: "abort" });
          X(le.data);
        }), w.postMessage({
          payload: n,
          max: q + _,
          start: q,
          type: "work"
        });
      });
    }));
    for (const w of m)
      w.terminate();
    return x.find((w) => !!w) || null;
  }
  async function kt() {
    if (!Oe()) {
      Ae(C.ERROR);
      return;
    }
    const n = Ve.find((f) => f.constructor.pluginName === "obfuscation");
    if (!n || !("clarify" in n)) {
      Ae(C.ERROR), $("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in n && typeof n.clarify == "function")
      return n.clarify();
  }
  function gn(n) {
    n.obfuscated !== void 0 && Oe(n.obfuscated), n.auto !== void 0 && (o(n.auto), o() === "onload" && (Oe() ? kt() : Te())), n.blockspam !== void 0 && u(!!n.blockspam), n.customfetch !== void 0 && p(n.customfetch), n.floatinganchor !== void 0 && V(n.floatinganchor), n.delay !== void 0 && g(n.delay), n.floatingoffset !== void 0 && ce(n.floatingoffset), n.floating !== void 0 && dn(n.floating), n.expire !== void 0 && (pr(n.expire), S(n.expire)), n.challenge && (c(typeof n.challenge == "string" ? n.challenge : JSON.stringify(n.challenge)), hn(l(vr))), n.challengeurl !== void 0 && s(n.challengeurl), n.debug !== void 0 && h(!!n.debug), n.hidefooter !== void 0 && ee(!!n.hidefooter), n.hidelogo !== void 0 && K(!!n.hidelogo), n.language !== void 0 && at(Xr(a(), [n.language])), n.maxnumber !== void 0 && me(+n.maxnumber), n.mockerror !== void 0 && wt(!!n.mockerror), n.name !== void 0 && ae(n.name), n.refetchonexpire !== void 0 && yt(!!n.refetchonexpire), n.sentinel !== void 0 && typeof n.sentinel == "object" && Ze(n.sentinel), n.spamfilter !== void 0 && xe(typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && at(typeof n.strings == "string" ? n.strings : JSON.stringify(n.strings)), n.test !== void 0 && ve(typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && te(n.verifyurl), n.workers !== void 0 && lt(+n.workers), n.workerurl !== void 0 && Et(n.workerurl);
  }
  function _n() {
    return {
      auto: o(),
      blockspam: u(),
      challengeurl: s(),
      debug: h(),
      delay: g(),
      expire: S(),
      floating: E(),
      floatinganchor: V(),
      floatingoffset: ce(),
      hidefooter: ee(),
      hidelogo: K(),
      name: ae(),
      maxnumber: me(),
      mockerror: wt(),
      obfuscated: Oe(),
      refetchonexpire: yt(),
      spamfilter: xe(),
      strings: l(P),
      test: ve(),
      verifyurl: te(),
      workers: lt(),
      workerurl: Et()
    };
  }
  function pn() {
    return l(st);
  }
  function vo(n) {
    return Ve.find((f) => f.constructor.pluginName === n);
  }
  function mn() {
    return l(R);
  }
  function bn() {
    l(re).style.display = "none";
  }
  function At(n = 20) {
    var f;
    if (l(re))
      if (l(st) || b(st, (V() ? document.querySelector(V()) : (f = l(L)) == null ? void 0 : f.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || l(L), !0), l(st)) {
        const v = parseInt(ce(), 10) || 12, m = l(st).getBoundingClientRect(), _ = l(re).getBoundingClientRect(), x = document.documentElement.clientHeight, w = document.documentElement.clientWidth, k = E() === "auto" ? m.bottom + _.height + v + n > x : E() === "top", q = Math.max(n, Math.min(w - n - _.width, m.left + m.width / 2 - _.width / 2));
        if (k ? l(re).style.top = `${m.top - (_.height + v)}px` : l(re).style.top = `${m.bottom + v}px`, l(re).style.left = `${q}px`, l(re).setAttribute("data-floating", k ? "top" : "bottom"), l(xt)) {
          const X = l(xt).getBoundingClientRect();
          l(xt).style.left = m.left - q + m.width / 2 - X.width / 2 + "px";
        }
      } else
        $("unable to find floating anchor element");
  }
  function ut(n = C.UNVERIFIED, f = null) {
    ke && (clearTimeout(ke), ke = null), b(Ct, !1), b(Ne, null), b(B, null), b(_r, !1), b(H, null), Ae(n, f);
  }
  function wn(n) {
    b(st, n, !0);
  }
  function Ae(n, f = null) {
    b(R, n, !0), b(ze, f, !0), Fe("statechange", {
      payload: l(Ne),
      state: l(R)
    });
  }
  function mr() {
    l(re).style.display = "block", E() && At();
  }
  async function Te() {
    return ut(C.VERIFYING), await new Promise((n) => setTimeout(n, g() || 0)), Ki().then((n) => (hn(n), $("challenge", n), vn(n))).then(({ data: n, solution: f }) => {
      var v;
      if ($("solution", f), !f || n && "challenge" in n && !("clearText" in f))
        if ((f == null ? void 0 : f.number) !== void 0 && "challenge" in n)
          if (te() && "codeChallenge" in n)
            ((v = document.activeElement) == null ? void 0 : v.tagName) === "INPUT" && y() === !1 && document.activeElement.blur(), b(B, { challenge: n, solution: f }, !0);
          else {
            if (te() && Ze() !== void 0)
              return cn(jt(n, f));
            if (te())
              return fo(jt(n, f));
            b(Ne, jt(n, f), !0), $("payload", l(Ne));
          }
        else
          throw $("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      l(B) ? (Ae(C.CODE), Ar().then(() => {
        Fe("code", { codeChallenge: l(B) });
      })) : (Ae(C.VERIFIED), $("verified"), Ar().then(() => {
        Fe("verified", { payload: l(Ne) });
      }));
    }).catch((n) => {
      $(n), Ae(C.ERROR, n.message);
    });
  }
  var yn = $l(), En = $t(yn);
  qa(En, t, "default", {});
  var It = Z(En, 2), br = W(It), qt = W(br);
  let Cn;
  var xn = W(qt);
  {
    var go = (n) => {
      Ir(n);
    };
    z(xn, (n) => {
      l(R) === C.VERIFYING && n(go);
    });
  }
  var Ke = Z(xn, 2);
  Bn(Ke), Ke.__change = [
    vl,
    R,
    xe,
    L,
    Ct,
    Oe,
    kt,
    Te
  ], Wt(Ke, (n) => b(gr, n), () => l(gr)), Y(qt);
  var Bt = Z(qt, 2), _o = W(Bt);
  {
    var po = (n) => {
      var f = Yt(), v = $t(f);
      Xe(v, () => l(P).verified), U(n, f);
    }, mo = (n, f) => {
      {
        var v = (_) => {
          var x = Yt(), w = $t(x);
          Xe(w, () => l(P).verifying), U(_, x);
        }, m = (_, x) => {
          {
            var w = (q) => {
              var X = Yt(), le = $t(X);
              Xe(le, () => l(P).verificationRequired), U(q, X);
            }, k = (q) => {
              var X = Yt(), le = $t(X);
              Xe(le, () => l(P).label), U(q, X);
            };
            z(
              _,
              (q) => {
                l(R) === C.CODE ? q(w) : q(k, !1);
              },
              x
            );
          }
        };
        z(
          n,
          (_) => {
            l(R) === C.VERIFYING ? _(v) : _(m, !1);
          },
          f
        );
      }
    };
    z(_o, (n) => {
      l(R) === C.VERIFIED ? n(po) : n(mo, !1);
    });
  }
  Y(Bt);
  var kn = Z(Bt, 2);
  {
    var bo = (n) => {
      var f = _l();
      Bn(f), Ie(() => {
        D(f, "name", ae()), Wa(f, l(Ne));
      }), U(n, f);
    };
    z(kn, (n) => {
      l(R) === C.VERIFIED && n(bo);
    });
  }
  var An = Z(kn, 2);
  {
    var wo = (n) => {
      var f = pl(), v = W(f);
      D(v, "href", Zi), Y(f), Ie(() => D(v, "aria-label", l(P).ariaLinkLabel)), U(n, f);
    };
    z(An, (n) => {
      (K() !== !0 || l(hr)) && n(wo);
    });
  }
  var yo = Z(An, 2);
  {
    var Eo = (n) => {
      var f = Cl(), v = Z(W(f), 2), m = W(v), _ = Z(m, 2);
      Pa(_, !y()), _.__keydown = [
        dl,
        sn
      ];
      var x = Z(_, 2), w = W(x), k = W(w);
      {
        var q = (be) => {
          var G = yl();
          G.__click = sn;
          var Gt = W(G);
          {
            var Rt = (ft) => {
              Ir(ft, () => 20);
            }, So = (ft, Do) => {
              {
                var No = (ct) => {
                  var yr = ml();
                  U(ct, yr);
                }, To = (ct, yr) => {
                  {
                    var Lo = (dt) => {
                      var Er = bl();
                      U(dt, Er);
                    }, Po = (dt) => {
                      var Er = wl();
                      U(dt, Er);
                    };
                    z(
                      ct,
                      (dt) => {
                        l(H) === Q.PLAYING ? dt(Lo) : dt(Po, !1);
                      },
                      yr
                    );
                  }
                };
                z(
                  ft,
                  (ct) => {
                    l(H) === Q.ERROR ? ct(No) : ct(To, !1);
                  },
                  Do
                );
              }
            };
            z(Gt, (ft) => {
              l(H) === Q.LOADING ? ft(Rt) : ft(So, !1);
            });
          }
          Y(G), Ie(() => {
            D(G, "title", l(P).getAudioChallenge), G.disabled = l(H) === Q.LOADING || l(H) === Q.ERROR || l(Je), D(G, "aria-label", l(H) === Q.LOADING ? l(P).loading : l(P).getAudioChallenge);
          }), U(be, G);
        };
        z(k, (be) => {
          l(B).challenge.codeChallenge.audio && be(q);
        });
      }
      var X = Z(k, 2);
      X.__click = [hl, Te], Y(w);
      var le = Z(w, 2), Ue = W(le);
      {
        var wr = (be) => {
          Ir(be, () => 16);
        };
        z(Ue, (be) => {
          l(Je) && be(wr);
        });
      }
      var Ht = Z(Ue);
      Y(le), Y(x);
      var Ro = Z(x, 2);
      {
        var $o = (be) => {
          var G = El(), Gt = W(G);
          Y(G), Wt(G, (Rt) => b(Me, Rt), () => l(Me)), Ie((Rt) => D(Gt, "src", Rt), [
            () => en(l(B).challenge.codeChallenge.audio, { language: j() })
          ]), je("loadstart", G, io), je("canplay", G, no), je("pause", G, ao), je("playing", G, oo), je("ended", G, to), je("error", Gt, ro), U(be, G);
        };
        z(Ro, (be) => {
          l(B).challenge.codeChallenge.audio && l(_r) && be($o);
        });
      }
      Y(v), Y(f), Ie(() => {
        D(f, "aria-label", l(P).verificationRequired), D(m, "src", l(B).challenge.codeChallenge.image), D(_, "minlength", l(B).challenge.codeChallenge.length || 1), D(_, "maxlength", l(B).challenge.codeChallenge.length), D(_, "placeholder", l(P).enterCode), D(_, "aria-label", l(H) === Q.LOADING ? l(P).loading : l(H) === Q.PLAYING ? "" : l(P).enterCodeAria), D(_, "aria-live", l(H) ? "assertive" : "polite"), D(_, "aria-busy", l(H) === Q.LOADING), _.disabled = l(Je), D(X, "aria-label", l(P).reload), D(X, "title", l(P).reload), X.disabled = l(Je), le.disabled = l(Je), D(le, "aria-label", l(P).verify), Va(Ht, ` ${l(P).verify ?? ""}`);
      }), je("submit", v, lo, !0), U(n, f);
    };
    z(yo, (n) => {
      var f;
      (f = l(B)) != null && f.challenge.codeChallenge && n(Eo);
    });
  }
  Y(br);
  var In = Z(br, 2);
  {
    var Co = (n) => {
      var f = Al(), v = Z(W(f), 2);
      {
        var m = (x) => {
          var w = xl(), k = W(w);
          Xe(k, () => l(P).expired), Y(w), Ie(() => D(w, "title", l(ze))), U(x, w);
        }, _ = (x) => {
          var w = kl(), k = W(w);
          Xe(k, () => l(P).error), Y(w), Ie(() => D(w, "title", l(ze))), U(x, w);
        };
        z(v, (x) => {
          l(R) === C.EXPIRED ? x(m) : x(_, !1);
        });
      }
      Y(f), U(n, f);
    };
    z(In, (n) => {
      (l(ze) || l(R) === C.EXPIRED) && n(Co);
    });
  }
  var Rn = Z(In, 2);
  {
    var xo = (n) => {
      var f = Il(), v = W(f), m = W(v);
      Xe(m, () => l(P).footer), Y(v), Y(f), U(n, f);
    };
    z(Rn, (n) => {
      l(P).footer && (ee() !== !0 || l(hr)) && n(xo);
    });
  }
  var ko = Z(Rn, 2);
  {
    var Ao = (n) => {
      var f = Rl();
      Wt(f, (v) => b(xt, v), () => l(xt)), U(n, f);
    };
    z(ko, (n) => {
      E() && n(Ao);
    });
  }
  Y(It), Wt(It, (n) => b(re, n), () => l(re)), Ie(
    (n) => {
      D(It, "data-state", l(R)), D(It, "data-floating", E()), Cn = Ha(qt, 1, "altcha-checkbox", null, Cn, n), D(Ke, "id", l(zr)), Ke.required = o() !== "onsubmit" && (!E() || o() !== "off"), D(Bt, "for", l(zr));
    },
    [
      () => ({
        "altcha-checkbox-verifying": l(R) === C.VERIFYING
      })
    ]
  ), je("invalid", Ke, ln), za(Ke, () => l(Ct), (n) => b(Ct, n)), U(e, yn);
  var Io = Di({
    clarify: kt,
    configure: gn,
    getConfiguration: _n,
    getFloatingAnchor: pn,
    getPlugin: vo,
    getState: mn,
    hide: bn,
    repositionFloating: At,
    reset: ut,
    setFloatingAnchor: wn,
    setState: Ae,
    show: mr,
    verify: Te,
    get auto() {
      return o();
    },
    set auto(n = void 0) {
      o(n), A();
    },
    get blockspam() {
      return u();
    },
    set blockspam(n = void 0) {
      u(n), A();
    },
    get challengeurl() {
      return s();
    },
    set challengeurl(n = void 0) {
      s(n), A();
    },
    get challengejson() {
      return c();
    },
    set challengejson(n = void 0) {
      c(n), A();
    },
    get credentials() {
      return d();
    },
    set credentials(n = void 0) {
      d(n), A();
    },
    get customfetch() {
      return p();
    },
    set customfetch(n = void 0) {
      p(n), A();
    },
    get debug() {
      return h();
    },
    set debug(n = !1) {
      h(n), A();
    },
    get delay() {
      return g();
    },
    set delay(n = 0) {
      g(n), A();
    },
    get disableautofocus() {
      return y();
    },
    set disableautofocus(n = !1) {
      y(n), A();
    },
    get expire() {
      return S();
    },
    set expire(n = void 0) {
      S(n), A();
    },
    get floating() {
      return E();
    },
    set floating(n = void 0) {
      E(n), A();
    },
    get floatinganchor() {
      return V();
    },
    set floatinganchor(n = void 0) {
      V(n), A();
    },
    get floatingoffset() {
      return ce();
    },
    set floatingoffset(n = void 0) {
      ce(n), A();
    },
    get floatingpersist() {
      return J();
    },
    set floatingpersist(n = !1) {
      J(n), A();
    },
    get hidefooter() {
      return ee();
    },
    set hidefooter(n = !1) {
      ee(n), A();
    },
    get hidelogo() {
      return K();
    },
    set hidelogo(n = !1) {
      K(n), A();
    },
    get id() {
      return ot();
    },
    set id(n = void 0) {
      ot(n), A();
    },
    get language() {
      return j();
    },
    set language(n = void 0) {
      j(n), A();
    },
    get name() {
      return ae();
    },
    set name(n = "altcha") {
      ae(n), A();
    },
    get maxnumber() {
      return me();
    },
    set maxnumber(n = 1e6) {
      me(n), A();
    },
    get mockerror() {
      return wt();
    },
    set mockerror(n = !1) {
      wt(n), A();
    },
    get obfuscated() {
      return Oe();
    },
    set obfuscated(n = void 0) {
      Oe(n), A();
    },
    get plugins() {
      return Ut();
    },
    set plugins(n = void 0) {
      Ut(n), A();
    },
    get refetchonexpire() {
      return yt();
    },
    set refetchonexpire(n = !0) {
      yt(n), A();
    },
    get sentinel() {
      return Ze();
    },
    set sentinel(n = void 0) {
      Ze(n), A();
    },
    get spamfilter() {
      return xe();
    },
    set spamfilter(n = !1) {
      xe(n), A();
    },
    get strings() {
      return at();
    },
    set strings(n = void 0) {
      at(n), A();
    },
    get test() {
      return ve();
    },
    set test(n = !1) {
      ve(n), A();
    },
    get verifyurl() {
      return te();
    },
    set verifyurl(n = void 0) {
      te(n), A();
    },
    get workers() {
      return lt();
    },
    set workers(n = Math.min(16, navigator.hardwareConcurrency || 8)) {
      lt(n), A();
    },
    get workerurl() {
      return Et();
    },
    set workerurl(n = void 0) {
      Et(n), A();
    }
  });
  return i(), Io;
}
Ma(["change", "keydown", "click"]);
customElements.define("altcha-widget", il(
  Sl,
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
const Hi = '@keyframes altcha-spinner{to{transform:rotate(360deg)}}.altcha{background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);position:relative}.altcha:focus-within{border-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating]{background:var(--altcha-color-base, white);display:none;filter:drop-shadow(3px 3px 6px rgba(0,0,0,.2));left:-100%;position:fixed;top:-100%;width:var(--altcha-max-width, 260px);z-index:999999}.altcha[data-floating=top] .altcha-anchor-arrow{border-bottom-color:transparent;border-top-color:var(--altcha-color-border, #a0a0a0);bottom:-12px;top:auto}.altcha[data-floating=bottom]:focus-within::after{border-bottom-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating=top]:focus-within::after{border-top-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating]:not([data-state=unverified]){display:block}.altcha-anchor-arrow{border:6px solid transparent;border-bottom-color:var(--altcha-color-border, #a0a0a0);content:"";height:0;left:12px;position:absolute;top:-12px;width:0}.altcha-main{align-items:center;display:flex;gap:.4rem;padding:.7rem;position:relative}.altcha-code-challenge{background:var(--altcha-color-base, white);border:1px solid var(--altcha-color-border-focus, currentColor);border-radius:var(--altcha-border-radius, 3px);filter:drop-shadow(3px 3px 6px rgba(0,0,0,.2));padding:.5rem;position:absolute;top:2.5rem;z-index:9999999}.altcha-code-challenge>form{display:flex;flex-direction:column;gap:.5rem}.altcha-code-challenge-input{border:1px solid currentColor;border-radius:3px;box-sizing:border-box;outline:0;font-size:16px;padding:.35rem;width:220px}.altcha-code-challenge-input:focus{outline:2px solid color-mix(in srgb,var(--altcha-color-active, #1D1DC9) 20%,transparent)}.altcha-code-challenge-input:disabled{opacity:.7}.altcha-code-challenge-image{background-color:#fff;border:1px solid currentColor;border-radius:3px;box-sizing:border-box;object-fit:contain;height:50px;width:220px}.altcha-code-challenge-audio,.altcha-code-challenge-reload{background:color-mix(in srgb,var(--altcha-color-text, currentColor) 10%,transparent);border:0;border-radius:3px;color:var(--altcha-color-text, currentColor);cursor:pointer;display:flex;align-items:center;justify-content:center;padding:.35rem}.altcha-code-challenge-audio:disabled,.altcha-code-challenge-reload:disabled,.altcha-code-challenge-verify:disabled{opacity:.7;pointer-events:none}.altcha-code-challenge-audio>*,.altcha-code-challenge-reload>*{height:20px;width:20px}.altcha-code-challenge-buttons{display:flex;justify-content:space-between}.altcha-code-challenge-buttons-left{display:flex;gap:.25rem}.altcha-code-challenge-verify{align-items:center;background:var(--altcha-color-active, #1D1DC9);border:0;border-radius:3px;color:#fff;cursor:pointer;display:flex;gap:.5rem;font-size:100%;padding:.35rem 1rem}.altcha-code-challenge-arrow{border:6px solid transparent;border-bottom-color:var(--altcha-color-border, currentColor);content:"";height:0;left:.15rem;position:absolute;top:-12px;width:0}.altcha[data-floating=top] .altcha-code-challenge{top:-150px}.altcha[data-floating=top] .altcha-code-challenge-arrow{border-bottom-color:transparent;border-top-color:var(--altcha-color-border, currentColor);bottom:-12px;top:auto}.altcha-label{cursor:pointer;flex-grow:1}.altcha-logo{color:currentColor!important;opacity:.7}.altcha-footer:hover,.altcha-logo:hover{opacity:1}.altcha-error{color:var(--altcha-color-error-text, #f23939);display:flex;font-size:.85rem;gap:.3rem;padding:0 .7rem .7rem}.altcha-footer{align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:.75rem;opacity:.7;justify-content:end;padding:.2rem .7rem}.altcha-footer a{color:currentColor}.altcha-checkbox{display:flex;align-items:center;justify-content:center;height:24px;position:relative;width:24px}.altcha-checkbox .altcha-spinner{bottom:0;left:0;position:absolute;right:0;top:0}.altcha-checkbox input{width:18px;height:18px;margin:0}.altcha-checkbox-verifying input{appearance:none;opacity:0;pointer-events:none}.altcha-spinner{animation:altcha-spinner .75s infinite linear;transform-origin:center}';
function Gi(e, t = "__altcha-css") {
  if (!document.getElementById(t)) {
    const r = document.createElement("style");
    r.id = t, r.textContent = e, document.head.appendChild(r);
  }
}
globalThis.altchaCreateWorker = (e) => e ? new Worker(new URL(e)) : new Mo();
Gi(Hi);
Gi(Hi);
export {
  Sl as Altcha
};
