var Ai = Object.defineProperty;
var Vr = (e) => {
  throw TypeError(e);
};
var Ri = (e, t, r) => t in e ? Ai(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var le = (e, t, r) => Ri(e, typeof t != "symbol" ? t + "" : t, r), Br = (e, t, r) => t.has(e) || Vr("Cannot " + r);
var G = (e, t, r) => (Br(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Vt = (e, t, r) => t.has(e) ? Vr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), Bt = (e, t, r, i) => (Br(e, t, "write to private field"), i ? i.call(e, r) : t.set(e, r), r);
const ln = `(function(){"use strict";const d=new TextEncoder;function p(e){return[...new Uint8Array(e)].map(t=>t.toString(16).padStart(2,"0")).join("")}async function b(e,t,r){if(typeof crypto>"u"||!("subtle"in crypto)||!("digest"in crypto.subtle))throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");return p(await crypto.subtle.digest(r.toUpperCase(),d.encode(e+t)))}function w(e,t,r="SHA-256",n=1e6,s=0){const o=new AbortController,a=Date.now();return{promise:(async()=>{for(let c=s;c<=n;c+=1){if(o.signal.aborted)return null;if(await b(t,c,r)===e)return{number:c,took:Date.now()-a}}return null})(),controller:o}}function h(e){const t=atob(e),r=new Uint8Array(t.length);for(let n=0;n<t.length;n++)r[n]=t.charCodeAt(n);return r}function g(e,t=12){const r=new Uint8Array(t);for(let n=0;n<t;n++)r[n]=e%256,e=Math.floor(e/256);return r}async function m(e,t="",r=1e6,n=0){const s="AES-GCM",o=new AbortController,a=Date.now(),l=async()=>{for(let u=n;u<=r;u+=1){if(o.signal.aborted||!c||!y)return null;try{const f=await crypto.subtle.decrypt({name:s,iv:g(u)},c,y);if(f)return{clearText:new TextDecoder().decode(f),took:Date.now()-a}}catch{}}return null};let c=null,y=null;try{y=h(e);const u=await crypto.subtle.digest("SHA-256",d.encode(t));c=await crypto.subtle.importKey("raw",u,s,!1,["decrypt"])}catch{return{promise:Promise.reject(),controller:o}}return{promise:l(),controller:o}}let i;onmessage=async e=>{const{type:t,payload:r,start:n,max:s}=e.data;let o=null;if(t==="abort")i==null||i.abort(),i=void 0;else if(t==="work"){if("obfuscated"in r){const{key:a,obfuscated:l}=r||{};o=await m(l,a,s,n)}else{const{algorithm:a,challenge:l,salt:c}=r||{};o=w(l,c,a,s,n)}i=o.controller,o.promise.then(a=>{self.postMessage(a&&{...a,worker:!0})})}}})();
`, qr = typeof self < "u" && self.Blob && new Blob([ln], { type: "text/javascript;charset=utf-8" });
function Ii(e) {
  let t;
  try {
    if (t = qr && (self.URL || self.webkitURL).createObjectURL(qr), !t) throw "";
    const r = new Worker(t, {
      name: e == null ? void 0 : e.name
    });
    return r.addEventListener("error", () => {
      (self.URL || self.webkitURL).revokeObjectURL(t);
    }), r;
  } catch {
    return new Worker(
      "data:text/javascript;charset=utf-8," + encodeURIComponent(ln),
      {
        name: e == null ? void 0 : e.name
      }
    );
  } finally {
    t && (self.URL || self.webkitURL).revokeObjectURL(t);
  }
}
const Si = "5";
var an;
typeof window < "u" && ((an = window.__svelte ?? (window.__svelte = {})).v ?? (an.v = /* @__PURE__ */ new Set())).add(Si);
const Ti = 1, Ni = 4, Li = 8, Di = 16, Pi = 1, Oi = 2, zt = "[", sn = "[!", fn = "]", Je = {}, Z = Symbol(), Fi = "http://www.w3.org/1999/xhtml", Hr = !1;
function un(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var cn = Array.isArray, Mi = Array.prototype.indexOf, Ui = Array.from, yt = Object.keys, Et = Object.defineProperty, Oe = Object.getOwnPropertyDescriptor, ji = Object.getOwnPropertyDescriptors, Vi = Object.prototype, Bi = Array.prototype, dn = Object.getPrototypeOf, Wr = Object.isExtensible;
function hn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const fe = 2, vn = 4, It = 8, Xt = 16, be = 32, Me = 64, xt = 128, ee = 256, $t = 512, K = 1024, he = 2048, Ue = 4096, Ke = 8192, St = 16384, qi = 32768, Qt = 65536, Hi = 1 << 19, gn = 1 << 20, Ht = 1 << 21, ut = Symbol("$state"), _n = Symbol("legacy props"), Wi = Symbol("");
function Yi(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Gi() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Zi(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ji() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ki() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function zi(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Xi() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Qi() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function eo() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Tt(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let L = !1;
function Ze(e) {
  L = e;
}
let P;
function Re(e) {
  if (e === null)
    throw Tt(), Je;
  return P = e;
}
function ze() {
  return Re(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Te(P)
  );
}
function z(e) {
  if (L) {
    if (/* @__PURE__ */ Te(P) !== null)
      throw Tt(), Je;
    P = e;
  }
}
function to() {
  for (var e = 0, t = P; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === fn) {
        if (e === 0) return t;
        e -= 1;
      } else (r === zt || r === sn) && (e += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Te(t)
    );
    t.remove(), t = i;
  }
}
let ro = !1;
function ke(e) {
  if (typeof e != "object" || e === null || ut in e)
    return e;
  const t = dn(e);
  if (t !== Vi && t !== Bi)
    return e;
  var r = /* @__PURE__ */ new Map(), i = cn(e), o = /* @__PURE__ */ J(0), a = R, l = (s) => {
    var f = R;
    ve(a);
    var d = s();
    return ve(f), d;
  };
  return i && r.set("length", /* @__PURE__ */ J(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, f, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && Xi();
        var v = r.get(f);
        return v === void 0 ? (v = l(() => /* @__PURE__ */ J(d.value)), r.set(f, v)) : D(
          v,
          l(() => ke(d.value))
        ), !0;
      },
      deleteProperty(s, f) {
        var d = r.get(f);
        if (d === void 0)
          f in s && (r.set(
            f,
            l(() => /* @__PURE__ */ J(Z))
          ), qt(o));
        else {
          if (i && typeof f == "string") {
            var v = (
              /** @type {Source<number>} */
              r.get("length")
            ), h = Number(f);
            Number.isInteger(h) && h < v.v && D(v, h);
          }
          D(d, Z), qt(o);
        }
        return !0;
      },
      get(s, f, d) {
        var m;
        if (f === ut)
          return e;
        var v = r.get(f), h = f in s;
        if (v === void 0 && (!h || (m = Oe(s, f)) != null && m.writable) && (v = l(() => /* @__PURE__ */ J(ke(h ? s[f] : Z))), r.set(f, v)), v !== void 0) {
          var g = c(v);
          return g === Z ? void 0 : g;
        }
        return Reflect.get(s, f, d);
      },
      getOwnPropertyDescriptor(s, f) {
        var d = Reflect.getOwnPropertyDescriptor(s, f);
        if (d && "value" in d) {
          var v = r.get(f);
          v && (d.value = c(v));
        } else if (d === void 0) {
          var h = r.get(f), g = h == null ? void 0 : h.v;
          if (h !== void 0 && g !== Z)
            return {
              enumerable: !0,
              configurable: !0,
              value: g,
              writable: !0
            };
        }
        return d;
      },
      has(s, f) {
        var g;
        if (f === ut)
          return !0;
        var d = r.get(f), v = d !== void 0 && d.v !== Z || Reflect.has(s, f);
        if (d !== void 0 || I !== null && (!v || (g = Oe(s, f)) != null && g.writable)) {
          d === void 0 && (d = l(() => /* @__PURE__ */ J(v ? ke(s[f]) : Z)), r.set(f, d));
          var h = c(d);
          if (h === Z)
            return !1;
        }
        return v;
      },
      set(s, f, d, v) {
        var U;
        var h = r.get(f), g = f in s;
        if (i && f === "length")
          for (var m = d; m < /** @type {Source<number>} */
          h.v; m += 1) {
            var k = r.get(m + "");
            k !== void 0 ? D(k, Z) : m in s && (k = l(() => /* @__PURE__ */ J(Z)), r.set(m + "", k));
          }
        h === void 0 ? (!g || (U = Oe(s, f)) != null && U.writable) && (h = l(() => /* @__PURE__ */ J(void 0)), D(
          h,
          l(() => ke(d))
        ), r.set(f, h)) : (g = h.v !== Z, D(
          h,
          l(() => ke(d))
        ));
        var N = Reflect.getOwnPropertyDescriptor(s, f);
        if (N != null && N.set && N.set.call(v, d), !g) {
          if (i && typeof f == "string") {
            var F = (
              /** @type {Source<number>} */
              r.get("length")
            ), V = Number(f);
            Number.isInteger(V) && V >= F.v && D(F, V + 1);
          }
          qt(o);
        }
        return !0;
      },
      ownKeys(s) {
        c(o);
        var f = Reflect.ownKeys(s).filter((h) => {
          var g = r.get(h);
          return g === void 0 || g.v !== Z;
        });
        for (var [d, v] of r)
          v.v !== Z && !(d in s) && f.push(d);
        return f;
      },
      setPrototypeOf() {
        Qi();
      }
    }
  );
}
function qt(e, t = 1) {
  D(e, e.v + t);
}
var Yr, mn, wn, pn;
function Wt() {
  if (Yr === void 0) {
    Yr = window, mn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    wn = Oe(t, "firstChild").get, pn = Oe(t, "nextSibling").get, Wr(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Wr(r) && (r.__t = void 0);
  }
}
function er(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function ae(e) {
  return wn.call(e);
}
// @__NO_SIDE_EFFECTS__
function Te(e) {
  return pn.call(e);
}
function X(e, t) {
  if (!L)
    return /* @__PURE__ */ ae(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ ae(P)
  );
  return r === null && (r = P.appendChild(er())), Re(r), r;
}
function Gr(e, t) {
  if (!L) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ ae(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Te(r) : r;
  }
  return P;
}
function we(e, t = 1, r = !1) {
  let i = L ? P : e;
  for (var o; t--; )
    o = i, i = /** @type {TemplateNode} */
    /* @__PURE__ */ Te(i);
  if (!L)
    return i;
  var a = i == null ? void 0 : i.nodeType;
  if (r && a !== 3) {
    var l = er();
    return i === null ? o == null || o.after(l) : i.before(l), Re(l), l;
  }
  return Re(i), /** @type {TemplateNode} */
  i;
}
function no(e) {
  e.textContent = "";
}
function bn(e) {
  return e === this.v;
}
function io(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function yn(e) {
  return !io(e, this.v);
}
// @__NO_SIDE_EFFECTS__
function tr(e) {
  var t = fe | he, r = R !== null && (R.f & fe) !== 0 ? (
    /** @type {Derived} */
    R
  ) : null;
  return I === null || r !== null && (r.f & ee) !== 0 ? t |= ee : I.f |= gn, {
    ctx: W,
    deps: null,
    effects: null,
    equals: bn,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: r ?? I
  };
}
// @__NO_SIDE_EFFECTS__
function st(e) {
  const t = /* @__PURE__ */ tr(e);
  return On(t), t;
}
function En(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Ie(
        /** @type {Effect} */
        t[r]
      );
  }
}
function oo(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & fe) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function xn(e) {
  var t, r = I;
  Se(oo(e));
  try {
    En(e), t = jn(e);
  } finally {
    Se(r);
  }
  return t;
}
function $n(e) {
  var t = xn(e), r = (Ce || (e.f & ee) !== 0) && e.deps !== null ? Ue : K;
  ue(e, r), e.equals(t) || (e.v = t, e.wv = Mn());
}
function ao(e) {
  I === null && R === null && Zi(), R !== null && (R.f & ee) !== 0 && I === null && Gi(), gt && Yi();
}
function lo(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function je(e, t, r, i = !0) {
  var o = I, a = {
    ctx: W,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | he,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: o,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (r)
    try {
      ir(a), a.f |= qi;
    } catch (f) {
      throw Ie(a), f;
    }
  else t !== null && Lt(a);
  var l = r && a.deps === null && a.first === null && a.nodes_start === null && a.teardown === null && (a.f & (gn | xt)) === 0;
  if (!l && i && (o !== null && lo(a, o), R !== null && (R.f & fe) !== 0)) {
    var s = (
      /** @type {Derived} */
      R
    );
    (s.effects ?? (s.effects = [])).push(a);
  }
  return a;
}
function kn(e) {
  const t = je(It, null, !1);
  return ue(t, K), t.teardown = e, t;
}
function Yt(e) {
  ao();
  var t = I !== null && (I.f & be) !== 0 && W !== null && !W.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      W
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: I,
      reaction: R
    });
  } else {
    var i = rr(e);
    return i;
  }
}
function so(e) {
  const t = je(Me, e, !0);
  return () => {
    Ie(t);
  };
}
function fo(e) {
  const t = je(Me, e, !0);
  return (r = {}) => new Promise((i) => {
    r.outro ? Zt(t, () => {
      Ie(t), i(void 0);
    }) : (Ie(t), i(void 0));
  });
}
function rr(e) {
  return je(vn, e, !1);
}
function nr(e) {
  return je(It, e, !0);
}
function Pe(e, t = [], r = tr) {
  const i = t.map(r);
  return Cn(() => e(...i.map(c)));
}
function Cn(e, t = 0) {
  return je(It | Xt | t, e, !0);
}
function Gt(e, t = !0) {
  return je(It | be, e, !0, t);
}
function An(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = gt, i = R;
    Jr(!0), ve(null);
    try {
      t.call(null);
    } finally {
      Jr(r), ve(i);
    }
  }
}
function Rn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var i = r.next;
    (r.f & Me) !== 0 ? r.parent = null : Ie(r, t), r = i;
  }
}
function uo(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & be) === 0 && Ie(t), t = r;
  }
}
function Ie(e, t = !0) {
  var r = !1;
  (t || (e.f & Hi) !== 0) && e.nodes_start !== null && (In(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), r = !0), Rn(e, t && !r), Rt(e, 0), ue(e, St);
  var i = e.transitions;
  if (i !== null)
    for (const a of i)
      a.stop();
  An(e);
  var o = e.parent;
  o !== null && o.first !== null && Sn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function In(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Te(e)
    );
    e.remove(), e = r;
  }
}
function Sn(e) {
  var t = e.parent, r = e.prev, i = e.next;
  r !== null && (r.next = i), i !== null && (i.prev = r), t !== null && (t.first === e && (t.first = i), t.last === e && (t.last = r));
}
function Zt(e, t) {
  var r = [];
  Tn(e, r, !0), co(r, () => {
    Ie(e), t && t();
  });
}
function co(e, t) {
  var r = e.length;
  if (r > 0) {
    var i = () => --r || t();
    for (var o of e)
      o.out(i);
  } else
    t();
}
function Tn(e, t, r) {
  if ((e.f & Ke) === 0) {
    if (e.f ^= Ke, e.transitions !== null)
      for (const l of e.transitions)
        (l.is_global || r) && t.push(l);
    for (var i = e.first; i !== null; ) {
      var o = i.next, a = (i.f & Qt) !== 0 || (i.f & be) !== 0;
      Tn(i, t, a ? r : !1), i = o;
    }
  }
}
function Zr(e) {
  Nn(e, !0);
}
function Nn(e, t) {
  if ((e.f & Ke) !== 0) {
    e.f ^= Ke, (e.f & K) === 0 && (e.f ^= K), _t(e) && (ue(e, he), Lt(e));
    for (var r = e.first; r !== null; ) {
      var i = r.next, o = (r.f & Qt) !== 0 || (r.f & be) !== 0;
      Nn(r, o ? t : !1), r = i;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
const ho = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let dt = [], ht = [];
function Ln() {
  var e = dt;
  dt = [], hn(e);
}
function Dn() {
  var e = ht;
  ht = [], hn(e);
}
function Pn(e) {
  dt.length === 0 && queueMicrotask(Ln), dt.push(e);
}
function vo(e) {
  ht.length === 0 && ho(Dn), ht.push(e);
}
function go() {
  dt.length > 0 && Ln(), ht.length > 0 && Dn();
}
let pt = !1, kt = !1, Ct = null, Fe = !1, gt = !1;
function Jr(e) {
  gt = e;
}
let ct = [];
let R = null, de = !1;
function ve(e) {
  R = e;
}
let I = null;
function Se(e) {
  I = e;
}
let H = null;
function On(e) {
  R !== null && R.f & Ht && (H === null ? H = [e] : H.push(e));
}
let q = null, Q = 0, ie = null;
function _o(e) {
  ie = e;
}
let Fn = 1, At = 0, Ce = !1;
function Mn() {
  return ++Fn;
}
function _t(e) {
  var h;
  var t = e.f;
  if ((t & he) !== 0)
    return !0;
  if ((t & Ue) !== 0) {
    var r = e.deps, i = (t & ee) !== 0;
    if (r !== null) {
      var o, a, l = (t & $t) !== 0, s = i && I !== null && !Ce, f = r.length;
      if (l || s) {
        var d = (
          /** @type {Derived} */
          e
        ), v = d.parent;
        for (o = 0; o < f; o++)
          a = r[o], (l || !((h = a == null ? void 0 : a.reactions) != null && h.includes(d))) && (a.reactions ?? (a.reactions = [])).push(d);
        l && (d.f ^= $t), s && v !== null && (v.f & ee) === 0 && (d.f ^= ee);
      }
      for (o = 0; o < f; o++)
        if (a = r[o], _t(
          /** @type {Derived} */
          a
        ) && $n(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!i || I !== null && !Ce) && ue(e, K);
  }
  return !1;
}
function mo(e, t) {
  for (var r = t; r !== null; ) {
    if ((r.f & xt) !== 0)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= xt;
      }
    r = r.parent;
  }
  throw pt = !1, e;
}
function Kr(e) {
  return (e.f & St) === 0 && (e.parent === null || (e.parent.f & xt) === 0);
}
function Nt(e, t, r, i) {
  if (pt) {
    if (r === null && (pt = !1), Kr(t))
      throw e;
    return;
  }
  if (r !== null && (pt = !0), mo(e, t), Kr(t))
    throw e;
}
function Un(e, t, r = !0) {
  var i = e.reactions;
  if (i !== null)
    for (var o = 0; o < i.length; o++) {
      var a = i[o];
      H != null && H.includes(e) || ((a.f & fe) !== 0 ? Un(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (r ? ue(a, he) : (a.f & K) !== 0 && ue(a, Ue), Lt(
        /** @type {Effect} */
        a
      )));
    }
}
function jn(e) {
  var m;
  var t = q, r = Q, i = ie, o = R, a = Ce, l = H, s = W, f = de, d = e.f;
  q = /** @type {null | Value[]} */
  null, Q = 0, ie = null, Ce = (d & ee) !== 0 && (de || !Fe || R === null), R = (d & (be | Me)) === 0 ? e : null, H = null, zr(e.ctx), de = !1, At++, e.f |= Ht;
  try {
    var v = (
      /** @type {Function} */
      (0, e.fn)()
    ), h = e.deps;
    if (q !== null) {
      var g;
      if (Rt(e, Q), h !== null && Q > 0)
        for (h.length = Q + q.length, g = 0; g < q.length; g++)
          h[Q + g] = q[g];
      else
        e.deps = h = q;
      if (!Ce)
        for (g = Q; g < h.length; g++)
          ((m = h[g]).reactions ?? (m.reactions = [])).push(e);
    } else h !== null && Q < h.length && (Rt(e, Q), h.length = Q);
    if (Gn() && ie !== null && !de && h !== null && (e.f & (fe | Ue | he)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      ie.length; g++)
        Un(
          ie[g],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (At++, ie !== null && (i === null ? i = ie : i.push(.../** @type {Source[]} */
    ie))), v;
  } finally {
    q = t, Q = r, ie = i, R = o, Ce = a, H = l, zr(s), de = f, e.f ^= Ht;
  }
}
function wo(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var i = Mi.call(r, e);
    if (i !== -1) {
      var o = r.length - 1;
      o === 0 ? r = t.reactions = null : (r[i] = r[o], r.pop());
    }
  }
  r === null && (t.f & fe) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (q === null || !q.includes(t)) && (ue(t, Ue), (t.f & (ee | $t)) === 0 && (t.f ^= $t), En(
    /** @type {Derived} **/
    t
  ), Rt(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Rt(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var i = t; i < r.length; i++)
      wo(e, r[i]);
}
function ir(e) {
  var t = e.f;
  if ((t & St) === 0) {
    ue(e, K);
    var r = I, i = W, o = Fe;
    I = e, Fe = !0;
    try {
      (t & Xt) !== 0 ? uo(e) : Rn(e), An(e);
      var a = jn(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = Fn;
      var l = e.deps, s;
      Hr && ro && e.f & he;
    } catch (f) {
      Nt(f, e, r, i || e.ctx);
    } finally {
      Fe = o, I = r;
    }
  }
}
function po() {
  try {
    Ji();
  } catch (e) {
    if (Ct !== null)
      Nt(e, Ct, null);
    else
      throw e;
  }
}
function Vn() {
  var e = Fe;
  try {
    var t = 0;
    for (Fe = !0; ct.length > 0; ) {
      t++ > 1e3 && po();
      var r = ct, i = r.length;
      ct = [];
      for (var o = 0; o < i; o++) {
        var a = yo(r[o]);
        bo(a);
      }
      vt.clear();
    }
  } finally {
    kt = !1, Fe = e, Ct = null;
  }
}
function bo(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var i = e[r];
      if ((i.f & (St | Ke)) === 0)
        try {
          _t(i) && (ir(i), i.deps === null && i.first === null && i.nodes_start === null && (i.teardown === null ? Sn(i) : i.fn = null));
        } catch (o) {
          Nt(o, i, null, i.ctx);
        }
    }
}
function Lt(e) {
  kt || (kt = !0, queueMicrotask(Vn));
  for (var t = Ct = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (Me | be)) !== 0) {
      if ((r & K) === 0) return;
      t.f ^= K;
    }
  }
  ct.push(t);
}
function yo(e) {
  for (var t = [], r = e; r !== null; ) {
    var i = r.f, o = (i & (be | Me)) !== 0, a = o && (i & K) !== 0;
    if (!a && (i & Ke) === 0) {
      if ((i & vn) !== 0)
        t.push(r);
      else if (o)
        r.f ^= K;
      else
        try {
          _t(r) && ir(r);
        } catch (f) {
          Nt(f, r, null, r.ctx);
        }
      var l = r.first;
      if (l !== null) {
        r = l;
        continue;
      }
    }
    var s = r.parent;
    for (r = r.next; r === null && s !== null; )
      r = s.next, s = s.parent;
  }
  return t;
}
function $(e) {
  for (var t; ; ) {
    if (go(), ct.length === 0)
      return (
        /** @type {T} */
        t
      );
    kt = !0, Vn();
  }
}
async function Eo() {
  await Promise.resolve(), $();
}
function c(e) {
  var t = e.f, r = (t & fe) !== 0;
  if (R !== null && !de) {
    if (!(H != null && H.includes(e))) {
      var i = R.deps;
      e.rv < At && (e.rv = At, q === null && i !== null && i[Q] === e ? Q++ : q === null ? q = [e] : (!Ce || !q.includes(e)) && q.push(e));
    }
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), a = o.parent;
    a !== null && (a.f & ee) === 0 && (o.f ^= ee);
  }
  return r && (o = /** @type {Derived} */
  e, _t(o) && $n(o)), gt && vt.has(e) ? vt.get(e) : e.v;
}
function Xe(e) {
  var t = de;
  try {
    return de = !0, e();
  } finally {
    de = t;
  }
}
const xo = -7169;
function ue(e, t) {
  e.f = e.f & xo | t;
}
const vt = /* @__PURE__ */ new Map();
function Bn(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: bn,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function J(e, t) {
  const r = Bn(e);
  return On(r), r;
}
// @__NO_SIDE_EFFECTS__
function qn(e, t = !1) {
  const r = Bn(e);
  return t || (r.equals = yn), r;
}
function D(e, t, r = !1) {
  R !== null && !de && Gn() && (R.f & (fe | Xt)) !== 0 && !(H != null && H.includes(e)) && eo();
  let i = r ? ke(t) : t;
  return $o(e, i);
}
function $o(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    gt ? vt.set(e, t) : vt.set(e, r), e.v = t, (e.f & fe) !== 0 && ((e.f & he) !== 0 && xn(
      /** @type {Derived} */
      e
    ), ue(e, (e.f & ee) === 0 ? K : Ue)), e.wv = Mn(), Hn(e, he), I !== null && (I.f & K) !== 0 && (I.f & (be | Me)) === 0 && (ie === null ? _o([e]) : ie.push(e));
  }
  return t;
}
function Hn(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, o = 0; o < i; o++) {
      var a = r[o], l = a.f;
      (l & he) === 0 && (ue(a, t), (l & (K | ee)) !== 0 && ((l & fe) !== 0 ? Hn(
        /** @type {Derived} */
        a,
        Ue
      ) : Lt(
        /** @type {Effect} */
        a
      )));
    }
}
let W = null;
function zr(e) {
  W = e;
}
function Wn(e, t = !1, r) {
  var i = W = {
    p: W,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
  kn(() => {
    i.d = !0;
  });
}
function Yn(e) {
  const t = W;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const l = t.e;
    if (l !== null) {
      var r = I, i = R;
      t.e = null;
      try {
        for (var o = 0; o < l.length; o++) {
          var a = l[o];
          Se(a.effect), ve(a.reaction), rr(a.fn);
        }
      } finally {
        Se(r), ve(i);
      }
    }
    W = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Gn() {
  return !0;
}
const ko = ["touchstart", "touchmove"];
function Co(e) {
  return ko.includes(e);
}
let Xr = !1;
function Zn() {
  Xr || (Xr = !0, document.addEventListener(
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
function Jn(e) {
  var t = R, r = I;
  ve(null), Se(null);
  try {
    return e();
  } finally {
    ve(t), Se(r);
  }
}
function Ao(e, t, r, i = r) {
  e.addEventListener(t, () => Jn(r));
  const o = e.__on_r;
  o ? e.__on_r = () => {
    o(), i(!0);
  } : e.__on_r = () => i(!0), Zn();
}
const Kn = /* @__PURE__ */ new Set(), Jt = /* @__PURE__ */ new Set();
function Ro(e, t, r, i = {}) {
  function o(a) {
    if (i.capture || ft.call(t, a), !a.cancelBubble)
      return Jn(() => r == null ? void 0 : r.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Pn(() => {
    t.addEventListener(e, o, i);
  }) : t.addEventListener(e, o, i), o;
}
function Io(e, t, r, i, o) {
  var a = { capture: i, passive: o }, l = Ro(e, t, r, a);
  (t === document.body || t === window || t === document) && kn(() => {
    t.removeEventListener(e, l, a);
  });
}
function So(e) {
  for (var t = 0; t < e.length; t++)
    Kn.add(e[t]);
  for (var r of Jt)
    r(e);
}
function ft(e) {
  var U;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), i = e.type, o = ((U = e.composedPath) == null ? void 0 : U.call(e)) || [], a = (
    /** @type {null | Element} */
    o[0] || e.target
  ), l = 0, s = e.__root;
  if (s) {
    var f = o.indexOf(s);
    if (f !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var d = o.indexOf(t);
    if (d === -1)
      return;
    f <= d && (l = f);
  }
  if (a = /** @type {Element} */
  o[l] || e.target, a !== t) {
    Et(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var v = R, h = I;
    ve(null), Se(null);
    try {
      for (var g, m = []; a !== null; ) {
        var k = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var N = a["__" + i];
          if (N != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (cn(N)) {
              var [F, ...V] = N;
              F.apply(a, [e, ...V]);
            } else
              N.call(a, e);
        } catch (Y) {
          g ? m.push(Y) : g = Y;
        }
        if (e.cancelBubble || k === t || k === null)
          break;
        a = k;
      }
      if (g) {
        for (let Y of m)
          queueMicrotask(() => {
            throw Y;
          });
        throw g;
      }
    } finally {
      e.__root = t, delete e.currentTarget, ve(v), Se(h);
    }
  }
}
function or(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Ae(e, t) {
  var r = (
    /** @type {Effect} */
    I
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ge(e, t) {
  var r = (t & Pi) !== 0, i = (t & Oi) !== 0, o, a = !e.startsWith("<!>");
  return () => {
    if (L)
      return Ae(P, null), P;
    o === void 0 && (o = or(a ? e : "<!>" + e), r || (o = /** @type {Node} */
    /* @__PURE__ */ ae(o)));
    var l = (
      /** @type {TemplateNode} */
      i || mn ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (r) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ae(l)
      ), f = (
        /** @type {TemplateNode} */
        l.lastChild
      );
      Ae(s, f);
    } else
      Ae(l, l);
    return l;
  };
}
// @__NO_SIDE_EFFECTS__
function To(e, t, r = "svg") {
  var i = !e.startsWith("<!>"), o = `<${r}>${i ? e : "<!>" + e}</${r}>`, a;
  return () => {
    if (L)
      return Ae(P, null), P;
    if (!a) {
      var l = (
        /** @type {DocumentFragment} */
        or(o)
      ), s = (
        /** @type {Element} */
        /* @__PURE__ */ ae(l)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ ae(s);
    }
    var f = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return Ae(f, f), f;
  };
}
function ne(e, t) {
  if (L) {
    I.nodes_end = P, ze();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function zn(e, t) {
  return Xn(e, t);
}
function No(e, t) {
  Wt(), t.intro = t.intro ?? !1;
  const r = t.target, i = L, o = P;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ae(r)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== zt); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ Te(a);
    if (!a)
      throw Je;
    Ze(!0), Re(
      /** @type {Comment} */
      a
    ), ze();
    const l = Xn(e, { ...t, anchor: a });
    if (P === null || P.nodeType !== 8 || /** @type {Comment} */
    P.data !== fn)
      throw Tt(), Je;
    return Ze(!1), /**  @type {Exports} */
    l;
  } catch (l) {
    if (l === Je)
      return t.recover === !1 && Ki(), Wt(), no(r), Ze(!1), zn(e, t);
    throw l;
  } finally {
    Ze(i), Re(o);
  }
}
const Ye = /* @__PURE__ */ new Map();
function Xn(e, { target: t, anchor: r, props: i = {}, events: o, context: a, intro: l = !0 }) {
  Wt();
  var s = /* @__PURE__ */ new Set(), f = (h) => {
    for (var g = 0; g < h.length; g++) {
      var m = h[g];
      if (!s.has(m)) {
        s.add(m);
        var k = Co(m);
        t.addEventListener(m, ft, { passive: k });
        var N = Ye.get(m);
        N === void 0 ? (document.addEventListener(m, ft, { passive: k }), Ye.set(m, 1)) : Ye.set(m, N + 1);
      }
    }
  };
  f(Ui(Kn)), Jt.add(f);
  var d = void 0, v = fo(() => {
    var h = r ?? t.appendChild(er());
    return Gt(() => {
      if (a) {
        Wn({});
        var g = (
          /** @type {ComponentContext} */
          W
        );
        g.c = a;
      }
      o && (i.$$events = o), L && Ae(
        /** @type {TemplateNode} */
        h,
        null
      ), d = e(h, i) || {}, L && (I.nodes_end = P), a && Yn();
    }), () => {
      var k;
      for (var g of s) {
        t.removeEventListener(g, ft);
        var m = (
          /** @type {number} */
          Ye.get(g)
        );
        --m === 0 ? (document.removeEventListener(g, ft), Ye.delete(g)) : Ye.set(g, m);
      }
      Jt.delete(f), h !== r && ((k = h.parentNode) == null || k.removeChild(h));
    };
  });
  return Kt.set(d, v), d;
}
let Kt = /* @__PURE__ */ new WeakMap();
function Lo(e, t) {
  const r = Kt.get(e);
  return r ? (Kt.delete(e), r(t)) : Promise.resolve();
}
function $e(e, t, [r, i] = [0, 0]) {
  L && r === 0 && ze();
  var o = e, a = null, l = null, s = Z, f = r > 0 ? Qt : 0, d = !1;
  const v = (g, m = !0) => {
    d = !0, h(m, g);
  }, h = (g, m) => {
    if (s === (s = g)) return;
    let k = !1;
    if (L && i !== -1) {
      if (r === 0) {
        const F = (
          /** @type {Comment} */
          o.data
        );
        F === zt ? i = 0 : F === sn ? i = 1 / 0 : (i = parseInt(F.substring(1)), i !== i && (i = s ? 1 / 0 : -1));
      }
      const N = i > r;
      !!s === N && (o = to(), Re(o), Ze(!1), k = !0, i = -1);
    }
    s ? (a ? Zr(a) : m && (a = Gt(() => m(o))), l && Zt(l, () => {
      l = null;
    })) : (l ? Zr(l) : m && (l = Gt(() => m(o, [r + 1, i]))), a && Zt(a, () => {
      a = null;
    })), k && Ze(!0);
  };
  Cn(() => {
    d = !1, t(v), d || h(null, null);
  }, f), L && (o = P);
}
function Ge(e, t, r = !1, i = !1, o = !1) {
  var a = e, l = "";
  Pe(() => {
    var s = (
      /** @type {Effect} */
      I
    );
    if (l === (l = t() ?? "")) {
      L && ze();
      return;
    }
    if (s.nodes_start !== null && (In(
      s.nodes_start,
      /** @type {TemplateNode} */
      s.nodes_end
    ), s.nodes_start = s.nodes_end = null), l !== "") {
      if (L) {
        P.data;
        for (var f = ze(), d = f; f !== null && (f.nodeType !== 8 || /** @type {Comment} */
        f.data !== ""); )
          d = f, f = /** @type {TemplateNode} */
          /* @__PURE__ */ Te(f);
        if (f === null)
          throw Tt(), Je;
        Ae(P, d), a = Re(f);
        return;
      }
      var v = l + "";
      r ? v = `<svg>${v}</svg>` : i && (v = `<math>${v}</math>`);
      var h = or(v);
      if ((r || i) && (h = /** @type {Element} */
      /* @__PURE__ */ ae(h)), Ae(
        /** @type {TemplateNode} */
        /* @__PURE__ */ ae(h),
        /** @type {TemplateNode} */
        h.lastChild
      ), r || i)
        for (; /* @__PURE__ */ ae(h); )
          a.before(
            /** @type {Node} */
            /* @__PURE__ */ ae(h)
          );
      else
        a.before(h);
    }
  });
}
function Do(e, t, r, i, o) {
  var s;
  L && ze();
  var a = (s = t.$$slots) == null ? void 0 : s[r], l = !1;
  a === !0 && (a = t.children, l = !0), a === void 0 || a(e, l ? () => i : i);
}
const Qr = [...` 	
\r\f \v\uFEFF`];
function Po(e, t, r) {
  var i = "" + e;
  if (r) {
    for (var o in r)
      if (r[o])
        i = i ? i + " " + o : o;
      else if (i.length)
        for (var a = o.length, l = 0; (l = i.indexOf(o, l)) >= 0; ) {
          var s = l + a;
          (l === 0 || Qr.includes(i[l - 1])) && (s === i.length || Qr.includes(i[s])) ? i = (l === 0 ? "" : i.substring(0, l)) + i.substring(s + 1) : l = s;
        }
  }
  return i === "" ? null : i;
}
function Oo(e, t, r, i, o, a) {
  var l = e.__className;
  if (L || l !== r || l === void 0) {
    var s = Po(r, i, a);
    (!L || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : e.className = s), e.__className = r;
  } else if (a && o !== a)
    for (var f in a) {
      var d = !!a[f];
      (o == null || d !== !!o[f]) && e.classList.toggle(f, d);
    }
  return a;
}
const Fo = Symbol("is custom element"), Mo = Symbol("is html");
function en(e) {
  if (L) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var i = e.value;
          se(e, "value", null), e.value = i;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          se(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = r, vo(r), Zn();
  }
}
function Uo(e, t) {
  var r = Qn(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function se(e, t, r, i) {
  var o = Qn(e);
  L && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = r) && (t === "loading" && (e[Wi] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && jo(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Qn(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Fo]: e.nodeName.includes("-"),
      [Mo]: e.namespaceURI === Fi
    })
  );
}
var tn = /* @__PURE__ */ new Map();
function jo(e) {
  var t = tn.get(e.nodeName);
  if (t) return t;
  tn.set(e.nodeName, t = []);
  for (var r, i = e, o = Element.prototype; o !== i; ) {
    r = ji(i);
    for (var a in r)
      r[a].set && t.push(a);
    i = dn(i);
  }
  return t;
}
function Vo(e, t, r = t) {
  Ao(e, "change", (i) => {
    var o = i ? e.defaultChecked : e.checked;
    r(o);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (L && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  Xe(t) == null) && r(e.checked), nr(() => {
    var i = t();
    e.checked = !!i;
  });
}
function rn(e, t) {
  return e === t || (e == null ? void 0 : e[ut]) === t;
}
function nn(e = {}, t, r, i) {
  return rr(() => {
    var o, a;
    return nr(() => {
      o = a, a = [], Xe(() => {
        e !== r(...a) && (t(e, ...a), o && rn(r(...o), e) && t(null, ...o));
      });
    }), () => {
      Pn(() => {
        a && rn(r(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function ei(e) {
  W === null && un(), Yt(() => {
    const t = Xe(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Bo(e) {
  W === null && un(), ei(() => () => Xe(e));
}
let wt = !1;
function qo(e) {
  var t = wt;
  try {
    return wt = !1, [e(), wt];
  } finally {
    wt = t;
  }
}
function on(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function A(e, t, r, i) {
  var Ne;
  var o = (r & Ti) !== 0, a = !0, l = (r & Li) !== 0, s = (r & Di) !== 0, f = !1, d;
  l ? [d, f] = qo(() => (
    /** @type {V} */
    e[t]
  )) : d = /** @type {V} */
  e[t];
  var v = ut in e || _n in e, h = l && (((Ne = Oe(e, t)) == null ? void 0 : Ne.set) ?? (v && t in e && ((O) => e[t] = O))) || void 0, g = (
    /** @type {V} */
    i
  ), m = !0, k = !1, N = () => (k = !0, m && (m = !1, s ? g = Xe(
    /** @type {() => V} */
    i
  ) : g = /** @type {V} */
  i), g);
  d === void 0 && i !== void 0 && (h && a && zi(), d = N(), h && h(d));
  var F;
  if (F = () => {
    var O = (
      /** @type {V} */
      e[t]
    );
    return O === void 0 ? N() : (m = !0, k = !1, O);
  }, (r & Ni) === 0)
    return F;
  if (h) {
    var V = e.$$legacy;
    return function(O, j) {
      return arguments.length > 0 ? ((!j || V || f) && h(j ? F() : O), O) : F();
    };
  }
  var U = !1, Y = /* @__PURE__ */ qn(d), M = /* @__PURE__ */ tr(() => {
    var O = F(), j = c(Y);
    return U ? (U = !1, j) : Y.v = O;
  });
  return l && c(M), o || (M.equals = yn), function(O, j) {
    if (arguments.length > 0) {
      const _e = j ? c(M) : l ? ke(O) : O;
      if (!M.equals(_e)) {
        if (U = !0, D(Y, _e), k && g !== void 0 && (g = _e), on(M))
          return O;
        Xe(() => c(M));
      }
      return O;
    }
    return on(M) ? M.v : c(M);
  };
}
function Ho(e) {
  return new Wo(e);
}
var pe, oe;
class Wo {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    Vt(this, pe);
    /** @type {Record<string, any>} */
    Vt(this, oe);
    var a;
    var r = /* @__PURE__ */ new Map(), i = (l, s) => {
      var f = /* @__PURE__ */ qn(s);
      return r.set(l, f), f;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(l, s) {
          return c(r.get(s) ?? i(s, Reflect.get(l, s)));
        },
        has(l, s) {
          return s === _n ? !0 : (c(r.get(s) ?? i(s, Reflect.get(l, s))), Reflect.has(l, s));
        },
        set(l, s, f) {
          return D(r.get(s) ?? i(s, f), f), Reflect.set(l, s, f);
        }
      }
    );
    Bt(this, oe, (t.hydrate ? No : zn)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((a = t == null ? void 0 : t.props) != null && a.$$host) || t.sync === !1) && $(), Bt(this, pe, o.$$events);
    for (const l of Object.keys(G(this, oe)))
      l === "$set" || l === "$destroy" || l === "$on" || Et(this, l, {
        get() {
          return G(this, oe)[l];
        },
        /** @param {any} value */
        set(s) {
          G(this, oe)[l] = s;
        },
        enumerable: !0
      });
    G(this, oe).$set = /** @param {Record<string, any>} next */
    (l) => {
      Object.assign(o, l);
    }, G(this, oe).$destroy = () => {
      Lo(G(this, oe));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    G(this, oe).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    G(this, pe)[t] = G(this, pe)[t] || [];
    const i = (...o) => r.call(this, ...o);
    return G(this, pe)[t].push(i), () => {
      G(this, pe)[t] = G(this, pe)[t].filter(
        /** @param {any} fn */
        (o) => o !== i
      );
    };
  }
  $destroy() {
    G(this, oe).$destroy();
  }
}
pe = new WeakMap(), oe = new WeakMap();
let ti;
typeof HTMLElement == "function" && (ti = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, i) {
    super();
    /** The Svelte component constructor */
    le(this, "$$ctor");
    /** Slots */
    le(this, "$$s");
    /** @type {any} The Svelte component instance */
    le(this, "$$c");
    /** Whether or not the custom element is connected */
    le(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    le(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    le(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    le(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    le(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    le(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    le(this, "$$me");
    this.$$ctor = t, this.$$s = r, i && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, r, i) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(r), this.$$c) {
      const o = this.$$c.$on(t, r);
      this.$$l_u.set(r, o);
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
      const o = this.$$l_u.get(r);
      o && (o(), this.$$l_u.delete(r));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(o) {
        return (a) => {
          const l = document.createElement("slot");
          o !== "default" && (l.name = o), ne(a, l);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, i = Yo(this);
      for (const o of this.$$s)
        o in i && (o === "default" && !this.$$d.children ? (this.$$d.children = t(o), r.default = !0) : r[o] = t(o));
      for (const o of this.attributes) {
        const a = this.$$g_p(o.name);
        a in this.$$d || (this.$$d[a] = bt(a, o.value, this.$$p_d, "toProp"));
      }
      for (const o in this.$$p_d)
        !(o in this.$$d) && this[o] !== void 0 && (this.$$d[o] = this[o], delete this[o]);
      this.$$c = Ho({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = so(() => {
        nr(() => {
          var o;
          this.$$r = !0;
          for (const a of yt(this.$$c)) {
            if (!((o = this.$$p_d[a]) != null && o.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const l = bt(
              a,
              this.$$d[a],
              this.$$p_d,
              "toAttribute"
            );
            l == null ? this.removeAttribute(this.$$p_d[a].attribute || a) : this.setAttribute(this.$$p_d[a].attribute || a, l);
          }
          this.$$r = !1;
        });
      });
      for (const o in this.$$l)
        for (const a of this.$$l[o]) {
          const l = this.$$c.$on(o, a);
          this.$$l_u.set(a, l);
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
    var o;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = bt(t, i, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [t]: this.$$d[t] }));
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
    return yt(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function bt(e, t, r, i) {
  var a;
  const o = (a = r[e]) == null ? void 0 : a.type;
  if (t = o === "Boolean" && typeof t != "boolean" ? t != null : t, !i || !r[e])
    return t;
  if (i === "toAttribute")
    switch (o) {
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
    switch (o) {
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
function Yo(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function Go(e, t, r, i, o, a) {
  let l = class extends ti {
    constructor() {
      super(e, r, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return yt(t).map(
        (s) => (t[s].attribute || s).toLowerCase()
      );
    }
  };
  return yt(t).forEach((s) => {
    Et(l.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(f) {
        var h;
        f = bt(s, f, t), this.$$d[s] = f;
        var d = this.$$c;
        if (d) {
          var v = (h = Oe(d, s)) == null ? void 0 : h.get;
          v ? d[s] = f : d.$set({ [s]: f });
        }
      }
    });
  }), i.forEach((s) => {
    Et(l.prototype, s, {
      get() {
        var f;
        return (f = this.$$c) == null ? void 0 : f[s];
      }
    });
  }), e.element = /** @type {any} */
  l, l;
}
const ri = new TextEncoder();
function Zo(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function Jo(e, t = "SHA-256", r = 1e5) {
  const i = Date.now().toString(16);
  e || (e = Math.round(Math.random() * r));
  const o = await ni(i, e, t);
  return {
    algorithm: t,
    challenge: o,
    salt: i,
    signature: ""
  };
}
async function ni(e, t, r) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return Zo(
    await crypto.subtle.digest(
      r.toUpperCase(),
      ri.encode(e + t)
    )
  );
}
function Ko(e, t, r = "SHA-256", i = 1e6, o = 0) {
  const a = new AbortController(), l = Date.now();
  return {
    promise: (async () => {
      for (let f = o; f <= i; f += 1) {
        if (a.signal.aborted)
          return null;
        if (await ni(t, f, r) === e)
          return {
            number: f,
            took: Date.now() - l
          };
      }
      return null;
    })(),
    controller: a
  };
}
function zo() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function Xo(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let i = 0; i < t.length; i++)
    r[i] = t.charCodeAt(i);
  return r;
}
function Qo(e, t = 12) {
  const r = new Uint8Array(t);
  for (let i = 0; i < t; i++)
    r[i] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function ea(e, t = "", r = 1e6, i = 0) {
  const o = "AES-GCM", a = new AbortController(), l = Date.now(), s = async () => {
    for (let v = i; v <= r; v += 1) {
      if (a.signal.aborted || !f || !d)
        return null;
      try {
        const h = await crypto.subtle.decrypt(
          {
            name: o,
            iv: Qo(v)
          },
          f,
          d
        );
        if (h)
          return {
            clearText: new TextDecoder().decode(h),
            took: Date.now() - l
          };
      } catch {
      }
    }
    return null;
  };
  let f = null, d = null;
  try {
    d = Xo(e);
    const v = await crypto.subtle.digest(
      "SHA-256",
      ri.encode(t)
    );
    f = await crypto.subtle.importKey(
      "raw",
      v,
      o,
      !1,
      ["decrypt"]
    );
  } catch {
    return {
      promise: Promise.reject(),
      controller: a
    };
  }
  return {
    promise: s(),
    controller: a
  };
}
var b = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(b || {}), ta = /* @__PURE__ */ To('<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor" class="altcha-spinner"></path></svg>'), ra = /* @__PURE__ */ ge('<span role="status" aria-live="polite"><!></span> <input type="hidden">', 1), na = /* @__PURE__ */ ge('<span role="status" aria-live="polite"><!></span>'), ia = /* @__PURE__ */ ge("<label><!></label>"), oa = /* @__PURE__ */ ge('<div><a target="_blank" class="altcha-logo"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor"></path></svg></a></div>'), aa = /* @__PURE__ */ ge("<div><!></div>"), la = /* @__PURE__ */ ge("<div><!></div>"), sa = /* @__PURE__ */ ge('<div class="altcha-error"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg> <!></div>'), fa = /* @__PURE__ */ ge('<div class="altcha-footer"><div><!></div></div>'), ua = /* @__PURE__ */ ge('<div class="altcha-anchor-arrow"></div>'), ca = /* @__PURE__ */ ge('<!> <div class="altcha"><div class="altcha-main"><!> <div><input type="checkbox"></div> <div class="altcha-label"><!></div> <!></div> <!> <!> <!></div>', 1);
function da(e, t) {
  var Mr, Ur;
  Wn(t, !0);
  let r = A(t, "auto", 7, void 0), i = A(t, "blockspam", 7, void 0), o = A(t, "challengeurl", 7, void 0), a = A(t, "challengejson", 7, void 0), l = A(t, "customfetch", 7, void 0), s = A(t, "debug", 7, !1), f = A(t, "delay", 7, 0), d = A(t, "expire", 7, void 0), v = A(t, "floating", 7, void 0), h = A(t, "floatinganchor", 7, void 0), g = A(t, "floatingoffset", 7, void 0), m = A(t, "floatingpersist", 7, !1), k = A(t, "hidefooter", 7, !1), N = A(t, "hidelogo", 7, !1), F = A(t, "id", 7, void 0), V = A(t, "name", 7, "altcha"), U = A(t, "maxnumber", 7, 1e6), Y = A(t, "mockerror", 7, !1), M = A(t, "obfuscated", 7, void 0), Ne = A(t, "plugins", 7, void 0), O = A(t, "refetchonexpire", 7, !0), j = A(t, "spamfilter", 7, !1), _e = A(t, "strings", 7, void 0), te = A(t, "test", 7, !1), ye = A(t, "verifyurl", 7, void 0), Ve = A(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), Qe = A(t, "workerurl", 7, void 0);
  const ar = ["SHA-256", "SHA-384", "SHA-512"], lr = "Visit Altcha.org", sr = "https://altcha.org/", et = (n, u) => {
    t.$$host.dispatchEvent(new CustomEvent(n, { detail: u }));
  }, fr = (Ur = (Mr = document.documentElement.lang) == null ? void 0 : Mr.split("-")) == null ? void 0 : Ur[0], Dt = /* @__PURE__ */ st(() => {
    var n;
    return o() && new URL(o(), location.origin).host.endsWith(".altcha.org") && !!((n = o()) != null && n.includes("apiKey=ckey_"));
  }), Pt = /* @__PURE__ */ st(() => a() ? Er(a()) : void 0), ur = /* @__PURE__ */ st(() => _e() ? Er(_e()) : {}), re = /* @__PURE__ */ st(() => {
    var n;
    return {
      ariaLinkLabel: lr,
      error: "Verification failed. Try again later.",
      expired: "Verification expired. Try again.",
      footer: `Protected by <a href="${sr}" target="_blank" aria-label="${((n = c(ur)) == null ? void 0 : n.ariaLinkLabel) || lr}">ALTCHA</a>`,
      label: "I'm not a robot",
      verified: "Verified",
      verifying: "Verifying...",
      waitAlert: "Verifying... please wait.",
      ...c(ur)
    };
  }), cr = /* @__PURE__ */ st(() => `${F() || V()}_checkbox`);
  let Be = /* @__PURE__ */ J(!1), C = /* @__PURE__ */ J(ke(b.UNVERIFIED)), B = /* @__PURE__ */ J(void 0), tt = /* @__PURE__ */ J(null), qe = null, w = null, He = /* @__PURE__ */ J(null), ce = null, Ee = [], Le = /* @__PURE__ */ J(null);
  Yt(() => {
    ci(c(He));
  }), Yt(() => {
    di(c(C));
  }), Bo(() => {
    ii(), w && (w.removeEventListener("submit", wr), w.removeEventListener("reset", pr), w.removeEventListener("focusin", mr), w = null), ce && (clearTimeout(ce), ce = null), document.removeEventListener("click", gr), document.removeEventListener("scroll", _r), window.removeEventListener("resize", yr);
  }), ei(() => {
    var n;
    S("mounted", "1.4.4"), S("workers", Ve()), fi(), S("plugins", Ee.length ? Ee.map((u) => u.constructor.pluginName).join(", ") : "none"), te() && S("using test mode"), d() && Ot(d()), r() !== void 0 && S("auto", r()), v() !== void 0 && xr(v()), w = (n = c(B)) == null ? void 0 : n.closest("form"), w && (w.addEventListener("submit", wr, { capture: !0 }), w.addEventListener("reset", pr), (r() === "onfocus" || m() === "focus") && w.addEventListener("focusin", mr)), r() === "onload" && (M() ? rt() : xe()), c(Dt) && (k() || N()) && S("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      et("load");
    });
  });
  function dr(n, u) {
    return btoa(JSON.stringify({
      algorithm: n.algorithm,
      challenge: n.challenge,
      number: u.number,
      salt: n.salt,
      signature: n.signature,
      test: te() ? !0 : void 0,
      took: u.took
    }));
  }
  function ii() {
    for (const n of Ee)
      n.destroy();
  }
  function hr() {
    o() && O() && c(C) === b.VERIFIED ? xe() : it(b.EXPIRED, c(re).expired);
  }
  async function oi() {
    var n;
    if (Y())
      throw S("mocking error"), new Error("Mocked error.");
    if (c(Pt))
      return S("using provided json data"), c(Pt);
    if (te())
      return S("generating test challenge", { test: te() }), Jo(typeof te() != "boolean" ? +te() : void 0);
    {
      if (!o() && w) {
        const x = w.getAttribute("action");
        x != null && x.includes("/form/") && o(x + "/altcha");
      }
      if (!o())
        throw new Error("Attribute challengeurl not set.");
      S("fetching challenge from", o());
      const u = {
        headers: j() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      }, _ = await vr()(o(), u);
      if (!_ || !(_ instanceof Response))
        throw new Error("Fetch function did not return a response.");
      if (_.status !== 200)
        throw new Error(`Server responded with ${_.status}.`);
      const y = _.headers.get("X-Altcha-Config"), T = await _.json(), E = new URLSearchParams((n = T.salt.split("?")) == null ? void 0 : n[1]), p = E.get("expires") || E.get("expire");
      if (p) {
        const x = new Date(+p * 1e3), me = isNaN(x.getTime()) ? 0 : x.getTime() - Date.now();
        me > 0 && Ot(me);
      }
      if (y)
        try {
          const x = JSON.parse(y);
          x && typeof x == "object" && ("sentinel" in x ? alert("This version of the widget is not compatible with Sentinel. Upgrade to version 2.x.x.") : (x.verifyurl && (x.verifyurl = new URL(x.verifyurl, new URL(o())).toString()), Cr(x)));
        } catch (x) {
          S("unable to configure from X-Altcha-Config", x);
        }
      return T;
    }
  }
  function ai(n) {
    var _;
    const u = w == null ? void 0 : w.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((_ = u == null ? void 0 : u.value) == null ? void 0 : _.slice(u.value.indexOf("@"))) || void 0;
  }
  function vr() {
    let n = fetch;
    if (l())
      if (S("using customfetch"), typeof l() == "string") {
        if (n = globalThis[l()] || null, !n)
          throw new Error(`Custom fetch function not found: ${l()}`);
      } else
        n = l();
    return n;
  }
  function li() {
    return j() === "ipAddress" ? {
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
    } : typeof j() == "object" ? j() : {
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
  function si(n) {
    return [
      ...(w == null ? void 0 : w.querySelectorAll(n != null && n.length ? n.map((_) => `input[name="${_}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (_, y) => {
        const T = y.name, E = y.value;
        return T && E && (_[T] = /\n/.test(E) ? E.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : E), _;
      },
      {}
    );
  }
  function fi() {
    const n = Ne() !== void 0 ? Ne().split(",") : void 0;
    for (const u of globalThis.altchaPlugins)
      (!n || n.includes(u.pluginName)) && Ee.push(new u({
        el: c(B),
        clarify: rt,
        dispatch: et,
        getConfiguration: Ar,
        getFloatingAnchor: Rr,
        getState: Ir,
        log: S,
        reset: it,
        solve: kr,
        setState: De,
        setFloatingAnchor: Tr,
        verify: xe
      }));
  }
  function S(...n) {
    (s() || n.some((u) => u instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${V()}]`, ...n);
  }
  function ui() {
    [b.UNVERIFIED, b.ERROR, b.EXPIRED].includes(c(C)) ? j() !== !1 && (w == null ? void 0 : w.reportValidity()) === !1 ? D(Be, !1) : M() ? rt() : xe() : D(Be, !0);
  }
  function gr(n) {
    const u = n.target;
    v() && u && !c(B).contains(u) && (c(C) === b.VERIFIED && m() === !1 || c(C) === b.VERIFIED && m() === "focus" && !(w != null && w.matches(":focus-within")) || r() === "off" && c(C) === b.UNVERIFIED) && Sr();
  }
  function _r() {
    v() && c(C) !== b.UNVERIFIED && nt();
  }
  function ci(n) {
    for (const u of Ee)
      typeof u.onErrorChange == "function" && u.onErrorChange(c(He));
  }
  function mr(n) {
    c(C) === b.UNVERIFIED ? xe() : v() && m() === "focus" && c(C) === b.VERIFIED && Ft();
  }
  function wr(n) {
    w && r() === "onsubmit" ? c(C) === b.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), xe().then(() => {
      w == null || w.requestSubmit();
    })) : c(C) !== b.VERIFIED && (n.preventDefault(), n.stopPropagation(), c(C) === b.VERIFYING && br()) : w && v() && r() === "off" && c(C) === b.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), Ft());
  }
  function pr() {
    it();
  }
  function br() {
    c(C) === b.VERIFYING && c(re).waitAlert && alert(c(re).waitAlert);
  }
  function di(n) {
    for (const u of Ee)
      typeof u.onStateChange == "function" && u.onStateChange(c(C));
    v() && c(C) !== b.UNVERIFIED && requestAnimationFrame(() => {
      nt();
    }), D(Be, c(C) === b.VERIFIED);
  }
  function yr() {
    v() && nt();
  }
  function Er(n) {
    return JSON.parse(n);
  }
  async function hi(n) {
    if (!ye())
      throw new Error("Attribute verifyurl not set.");
    S("requesting server verification from", ye());
    const u = { payload: n };
    if (j() !== !1) {
      const {
        blockedCountries: T,
        classifier: E,
        disableRules: p,
        email: x,
        expectedLanguages: me,
        expectedCountries: jt,
        fields: at,
        ipAddress: lt,
        text: Ci,
        timeZone: jr
      } = li();
      u.blockedCountries = T, u.classifier = E, u.disableRules = p, u.email = x === !1 ? void 0 : ai(x), u.expectedCountries = jt, u.expectedLanguages = me || (fr ? [fr] : void 0), u.fields = at === !1 ? void 0 : si(at), u.ipAddress = lt === !1 ? void 0 : lt || "auto", u.text = Ci, u.timeZone = jr === !1 ? void 0 : jr || zo();
    }
    const _ = await vr()(ye(), {
      body: JSON.stringify(u),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (!_ || !(_ instanceof Response))
      throw new Error("Fetch function did not return a response.");
    if (_.status !== 200)
      throw new Error(`Server responded with ${_.status}.`);
    const y = await _.json();
    if (y != null && y.payload && D(Le, y.payload, !0), et("serververification", y), i() && y.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  function Ot(n) {
    S("expire", n), ce && (clearTimeout(ce), ce = null), n < 1 ? hr() : ce = setTimeout(hr, n);
  }
  function xr(n) {
    S("floating", n), v() !== n && (c(B).style.left = "", c(B).style.top = ""), v(n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : v()), v() ? (r() || r("onsubmit"), document.addEventListener("scroll", _r), document.addEventListener("click", gr), window.addEventListener("resize", yr)) : r() === "onsubmit" && r(void 0);
  }
  function $r(n) {
    if (!n.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (n.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!ar.includes(n.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${ar.join(", ")}`);
    if (!n.challenge || n.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!n.salt || n.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function kr(n) {
    let u = null;
    if ("Worker" in window) {
      try {
        u = await vi(n, n.maxNumber || n.maxnumber || U());
      } catch (_) {
        S(_);
      }
      if ((u == null ? void 0 : u.number) !== void 0 || "obfuscated" in n)
        return { data: n, solution: u };
    }
    if ("obfuscated" in n) {
      const _ = await ea(n.obfuscated, n.key, n.maxNumber || n.maxnumber);
      return { data: n, solution: await _.promise };
    }
    return {
      data: n,
      solution: await Ko(n.challenge, n.salt, n.algorithm, n.maxNumber || n.maxnumber || U()).promise
    };
  }
  async function vi(n, u = typeof te() == "number" ? te() : n.maxNumber || n.maxnumber || U(), _ = Math.ceil(Ve())) {
    const y = [];
    _ = Math.min(16, u, Math.max(1, _));
    for (let p = 0; p < _; p++)
      y.push(altchaCreateWorker(Qe()));
    const T = Math.ceil(u / _), E = await Promise.all(y.map((p, x) => {
      const me = x * T;
      return new Promise((jt) => {
        p.addEventListener("message", (at) => {
          if (at.data)
            for (const lt of y)
              lt !== p && lt.postMessage({ type: "abort" });
          jt(at.data);
        }), p.postMessage({
          payload: n,
          max: me + T,
          start: me,
          type: "work"
        });
      });
    }));
    for (const p of y)
      p.terminate();
    return E.find((p) => !!p) || null;
  }
  async function rt() {
    if (!M()) {
      De(b.ERROR);
      return;
    }
    const n = Ee.find((u) => u.constructor.pluginName === "obfuscation");
    if (!n || !("clarify" in n)) {
      De(b.ERROR), S("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in n && typeof n.clarify == "function")
      return n.clarify();
  }
  function Cr(n) {
    n.obfuscated !== void 0 && M(n.obfuscated), n.auto !== void 0 && (r(n.auto), r() === "onload" && (M() ? rt() : xe())), n.blockspam !== void 0 && i(!!n.blockspam), n.customfetch !== void 0 && l(n.customfetch), n.floatinganchor !== void 0 && h(n.floatinganchor), n.delay !== void 0 && f(n.delay), n.floatingoffset !== void 0 && g(n.floatingoffset), n.floating !== void 0 && xr(n.floating), n.expire !== void 0 && (Ot(n.expire), d(n.expire)), n.challenge && (a(typeof n.challenge == "string" ? n.challenge : JSON.stringify(n.challenge)), $r(c(Pt))), n.challengeurl !== void 0 && o(n.challengeurl), n.debug !== void 0 && s(!!n.debug), n.hidefooter !== void 0 && k(!!n.hidefooter), n.hidelogo !== void 0 && N(!!n.hidelogo), n.maxnumber !== void 0 && U(+n.maxnumber), n.mockerror !== void 0 && Y(!!n.mockerror), n.name !== void 0 && V(n.name), n.refetchonexpire !== void 0 && O(!!n.refetchonexpire), n.spamfilter !== void 0 && j(typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && _e(typeof n.strings == "string" ? n.strings : JSON.stringify(n.strings)), n.test !== void 0 && te(typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && ye(n.verifyurl), n.workers !== void 0 && Ve(+n.workers), n.workerurl !== void 0 && Qe(n.workerurl);
  }
  function Ar() {
    return {
      auto: r(),
      blockspam: i(),
      challengeurl: o(),
      debug: s(),
      delay: f(),
      expire: d(),
      floating: v(),
      floatinganchor: h(),
      floatingoffset: g(),
      hidefooter: k(),
      hidelogo: N(),
      name: V(),
      maxnumber: U(),
      mockerror: Y(),
      obfuscated: M(),
      refetchonexpire: O(),
      spamfilter: j(),
      strings: c(re),
      test: te(),
      verifyurl: ye(),
      workers: Ve(),
      workerurl: Qe()
    };
  }
  function Rr() {
    return qe;
  }
  function gi(n) {
    return Ee.find((u) => u.constructor.pluginName === n);
  }
  function Ir() {
    return c(C);
  }
  function Sr() {
    c(B).style.display = "none";
  }
  function nt(n = 20) {
    if (c(B))
      if (qe || (qe = (h() ? document.querySelector(h()) : w == null ? void 0 : w.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || w), qe) {
        const u = parseInt(g(), 10) || 12, _ = qe.getBoundingClientRect(), y = c(B).getBoundingClientRect(), T = document.documentElement.clientHeight, E = document.documentElement.clientWidth, p = v() === "auto" ? _.bottom + y.height + u + n > T : v() === "top", x = Math.max(n, Math.min(E - n - y.width, _.left + _.width / 2 - y.width / 2));
        if (p ? c(B).style.top = `${_.top - (y.height + u)}px` : c(B).style.top = `${_.bottom + u}px`, c(B).style.left = `${x}px`, c(B).setAttribute("data-floating", p ? "top" : "bottom"), c(tt)) {
          const me = c(tt).getBoundingClientRect();
          c(tt).style.left = _.left - x + _.width / 2 - me.width / 2 + "px";
        }
      } else
        S("unable to find floating anchor element");
  }
  function it(n = b.UNVERIFIED, u = null) {
    ce && (clearTimeout(ce), ce = null), D(Be, !1), D(Le, null), De(n, u);
  }
  function Tr(n) {
    qe = n;
  }
  function De(n, u = null) {
    D(C, n, !0), D(He, u, !0), et("statechange", {
      payload: c(Le),
      state: c(C)
    });
  }
  function Ft() {
    c(B).style.display = "block", v() && nt();
  }
  async function xe() {
    return it(b.VERIFYING), await new Promise((n) => setTimeout(n, f() || 0)), oi().then((n) => ($r(n), S("challenge", n), kr(n))).then(({ data: n, solution: u }) => {
      if (S("solution", u), !u || n && "challenge" in n && !("clearText" in u))
        if ((u == null ? void 0 : u.number) !== void 0 && "challenge" in n) {
          if (ye())
            return hi(dr(n, u));
          D(Le, dr(n, u), !0), S("payload", c(Le));
        } else
          throw S("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      De(b.VERIFIED), S("verified"), Eo().then(() => {
        et("verified", { payload: c(Le) });
      });
    }).catch((n) => {
      S(n), De(b.ERROR, n.message);
    });
  }
  var Nr = ca(), Lr = Gr(Nr);
  Do(Lr, t, "default", {});
  var ot = we(Lr, 2), Mt = X(ot), Dr = X(Mt);
  {
    var _i = (n) => {
      var u = ta();
      ne(n, u);
    };
    $e(Dr, (n) => {
      c(C) === b.VERIFYING && n(_i);
    });
  }
  var mt = we(Dr, 2);
  let Pr;
  var We = X(mt);
  en(We), We.__change = ui, z(mt);
  var Ut = we(mt, 2), mi = X(Ut);
  {
    var wi = (n) => {
      var u = ra(), _ = Gr(u), y = X(_);
      Ge(y, () => c(re).verified), z(_);
      var T = we(_, 2);
      en(T), Pe(() => {
        se(T, "name", V()), Uo(T, c(Le));
      }), ne(n, u);
    }, pi = (n, u) => {
      {
        var _ = (T) => {
          var E = na(), p = X(E);
          Ge(p, () => c(re).verifying), z(E), ne(T, E);
        }, y = (T) => {
          var E = ia(), p = X(E);
          Ge(p, () => c(re).label), z(E), Pe(() => se(E, "for", c(cr))), ne(T, E);
        };
        $e(
          n,
          (T) => {
            c(C) === b.VERIFYING ? T(_) : T(y, !1);
          },
          u
        );
      }
    };
    $e(mi, (n) => {
      c(C) === b.VERIFIED ? n(wi) : n(pi, !1);
    });
  }
  z(Ut);
  var bi = we(Ut, 2);
  {
    var yi = (n) => {
      var u = oa(), _ = X(u);
      se(_, "href", sr), z(u), Pe(() => se(_, "aria-label", c(re).ariaLinkLabel)), ne(n, u);
    };
    $e(bi, (n) => {
      (N() !== !0 || c(Dt)) && n(yi);
    });
  }
  z(Mt);
  var Or = we(Mt, 2);
  {
    var Ei = (n) => {
      var u = sa(), _ = we(X(u), 2);
      {
        var y = (E) => {
          var p = aa(), x = X(p);
          Ge(x, () => c(re).expired), z(p), Pe(() => se(p, "title", c(He))), ne(E, p);
        }, T = (E) => {
          var p = la(), x = X(p);
          Ge(x, () => c(re).error), z(p), Pe(() => se(p, "title", c(He))), ne(E, p);
        };
        $e(_, (E) => {
          c(C) === b.EXPIRED ? E(y) : E(T, !1);
        });
      }
      z(u), ne(n, u);
    };
    $e(Or, (n) => {
      (c(He) || c(C) === b.EXPIRED) && n(Ei);
    });
  }
  var Fr = we(Or, 2);
  {
    var xi = (n) => {
      var u = fa(), _ = X(u), y = X(_);
      Ge(y, () => c(re).footer), z(_), z(u), ne(n, u);
    };
    $e(Fr, (n) => {
      c(re).footer && (k() !== !0 || c(Dt)) && n(xi);
    });
  }
  var $i = we(Fr, 2);
  {
    var ki = (n) => {
      var u = ua();
      nn(u, (_) => D(tt, _), () => c(tt)), ne(n, u);
    };
    $e($i, (n) => {
      v() && n(ki);
    });
  }
  return z(ot), nn(ot, (n) => D(B, n), () => c(B)), Pe(
    (n) => {
      se(ot, "data-state", c(C)), se(ot, "data-floating", v()), Pr = Oo(mt, 1, "altcha-checkbox", null, Pr, n), se(We, "id", c(cr)), We.required = r() !== "onsubmit" && (!v() || r() !== "off");
    },
    [
      () => ({
        "altcha-hidden": c(C) === b.VERIFYING
      })
    ]
  ), Io("invalid", We, br), Vo(We, () => c(Be), (n) => D(Be, n)), ne(e, Nr), Yn({
    clarify: rt,
    configure: Cr,
    getConfiguration: Ar,
    getFloatingAnchor: Rr,
    getPlugin: gi,
    getState: Ir,
    hide: Sr,
    repositionFloating: nt,
    reset: it,
    setFloatingAnchor: Tr,
    setState: De,
    show: Ft,
    verify: xe,
    get auto() {
      return r();
    },
    set auto(n = void 0) {
      r(n), $();
    },
    get blockspam() {
      return i();
    },
    set blockspam(n = void 0) {
      i(n), $();
    },
    get challengeurl() {
      return o();
    },
    set challengeurl(n = void 0) {
      o(n), $();
    },
    get challengejson() {
      return a();
    },
    set challengejson(n = void 0) {
      a(n), $();
    },
    get customfetch() {
      return l();
    },
    set customfetch(n = void 0) {
      l(n), $();
    },
    get debug() {
      return s();
    },
    set debug(n = !1) {
      s(n), $();
    },
    get delay() {
      return f();
    },
    set delay(n = 0) {
      f(n), $();
    },
    get expire() {
      return d();
    },
    set expire(n = void 0) {
      d(n), $();
    },
    get floating() {
      return v();
    },
    set floating(n = void 0) {
      v(n), $();
    },
    get floatinganchor() {
      return h();
    },
    set floatinganchor(n = void 0) {
      h(n), $();
    },
    get floatingoffset() {
      return g();
    },
    set floatingoffset(n = void 0) {
      g(n), $();
    },
    get floatingpersist() {
      return m();
    },
    set floatingpersist(n = !1) {
      m(n), $();
    },
    get hidefooter() {
      return k();
    },
    set hidefooter(n = !1) {
      k(n), $();
    },
    get hidelogo() {
      return N();
    },
    set hidelogo(n = !1) {
      N(n), $();
    },
    get id() {
      return F();
    },
    set id(n = void 0) {
      F(n), $();
    },
    get name() {
      return V();
    },
    set name(n = "altcha") {
      V(n), $();
    },
    get maxnumber() {
      return U();
    },
    set maxnumber(n = 1e6) {
      U(n), $();
    },
    get mockerror() {
      return Y();
    },
    set mockerror(n = !1) {
      Y(n), $();
    },
    get obfuscated() {
      return M();
    },
    set obfuscated(n = void 0) {
      M(n), $();
    },
    get plugins() {
      return Ne();
    },
    set plugins(n = void 0) {
      Ne(n), $();
    },
    get refetchonexpire() {
      return O();
    },
    set refetchonexpire(n = !0) {
      O(n), $();
    },
    get spamfilter() {
      return j();
    },
    set spamfilter(n = !1) {
      j(n), $();
    },
    get strings() {
      return _e();
    },
    set strings(n = void 0) {
      _e(n), $();
    },
    get test() {
      return te();
    },
    set test(n = !1) {
      te(n), $();
    },
    get verifyurl() {
      return ye();
    },
    set verifyurl(n = void 0) {
      ye(n), $();
    },
    get workers() {
      return Ve();
    },
    set workers(n = Math.min(16, navigator.hardwareConcurrency || 8)) {
      Ve(n), $();
    },
    get workerurl() {
      return Qe();
    },
    set workerurl(n = void 0) {
      Qe(n), $();
    }
  });
}
So(["change"]);
customElements.define("altcha-widget", Go(
  da,
  {
    blockspam: { type: "Boolean" },
    debug: { type: "Boolean" },
    delay: { type: "Number" },
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
    customfetch: {},
    floating: {},
    floatinganchor: {},
    floatingpersist: {},
    id: {},
    name: {},
    obfuscated: {},
    plugins: {},
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
const ha = `.altcha {
  background: var(--altcha-color-base, transparent);
  border: var(--altcha-border-width, 1px) solid
    var(--altcha-color-border, #a0a0a0);
  border-radius: var(--altcha-border-radius, 3px);
  color: var(--altcha-color-text, currentColor);
  display: flex;
  flex-direction: column;
  max-width: var(--altcha-max-width, 260px);
  position: relative;
  text-align: left;
}

.altcha:focus-within {
  border-color: var(--altcha-color-border-focus, currentColor);
}

.altcha[data-floating] {
  background: var(--altcha-color-base, white);
  display: none;
  filter: drop-shadow(3px 3px 6px rgba(0,0,0,0.2));
  left: -100%;
  position: fixed;
  top: -100%;
  width: var(--altcha-max-width, 260px);
  z-index: 999999;
}

.altcha[data-floating="top"] .altcha-anchor-arrow {
  border-bottom-color: transparent;
  border-top-color: var(--altcha-color-border, #a0a0a0);
  bottom: -12px;
  top: auto;
}

.altcha[data-floating="bottom"]:focus-within::after {
  border-bottom-color: var(--altcha-color-border-focus, currentColor);
}

.altcha[data-floating="top"]:focus-within::after {
  border-top-color: var(--altcha-color-border-focus, currentColor);
}

.altcha[data-floating]:not([data-state="unverified"]) {
  display: block;
}

.altcha-anchor-arrow {
  border: 6px solid transparent;
  border-bottom-color: var(--altcha-color-border, #a0a0a0);
  content: '';
  height: 0;
  left: 12px;
  position: absolute;
  top: -12px;
  width: 0;
}

.altcha-main {
  align-items: center;
  display: flex;
  gap: 0.4rem;
  padding: 0.7rem;
}

.altcha-label {
  flex-grow: 1;
}

.altcha-label label {
  cursor: pointer;
}

.altcha-logo {
  color: currentColor;
  opacity: 0.3;
}

.altcha-logo:hover {
  opacity: 1;
}

.altcha-error {
  color: var(--altcha-color-error-text, #f23939);
  display: flex;
  font-size: 0.85rem;
  gap: 0.3rem;
  padding: 0 0.7rem 0.7rem;
}

.altcha-footer {
  align-items: center;
  background-color: var(--altcha-color-footer-bg, transparent);
  display: flex;
  font-size: 0.75rem;
  opacity: 0.4;
  padding: 0.2rem 0.7rem;
  text-align: right;
}

.altcha-footer:hover {
  opacity: 1;
}

.altcha-footer > *:first-child {
  flex-grow: 1;
}

.altcha-footer a {
  color: currentColor;
}

.altcha-checkbox {
  display: flex;
  align-items: center;
  height: 24px;
  width: 24px;
}

.altcha-checkbox input {
  width: 18px;
  height: 18px;
  margin: 0;
}

.altcha-hidden {
  display: none;
}

.altcha-spinner {
  animation: altcha-spinner 0.75s infinite linear;
  transform-origin: center;
}

@keyframes altcha-spinner {
  100% {
    transform: rotate(360deg);
  }
}`;
function va(e, t = "__altcha-css") {
  if (!document.getElementById(t)) {
    const r = document.createElement("style");
    r.id = t, r.textContent = e, document.head.appendChild(r);
  }
}
globalThis.altchaCreateWorker = (e) => e ? new Worker(new URL(e)) : new Ii();
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
va(ha);
export {
  da as Altcha
};
