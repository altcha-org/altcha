var cl = Object.defineProperty;
var pn = (e) => {
  throw TypeError(e);
};
var fl = (e, t, r) => t in e ? cl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var _e = (e, t, r) => fl(e, typeof t != "symbol" ? t + "" : t, r), bn = (e, t, r) => t.has(e) || pn("Cannot " + r);
var oe = (e, t, r) => (bn(e, t, "read from private field"), r ? r.call(e) : t.get(e)), _r = (e, t, r) => t.has(e) ? pn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), mr = (e, t, r, o) => (bn(e, t, "write to private field"), o ? o.call(e, r) : t.set(e, r), r);
const Ln = `(function(){"use strict";const d=new TextEncoder;function p(e){return[...new Uint8Array(e)].map(t=>t.toString(16).padStart(2,"0")).join("")}async function b(e,t,r){if(typeof crypto>"u"||!("subtle"in crypto)||!("digest"in crypto.subtle))throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");return p(await crypto.subtle.digest(r.toUpperCase(),d.encode(e+t)))}function w(e,t,r="SHA-256",n=1e6,s=0){const o=new AbortController,a=Date.now();return{promise:(async()=>{for(let c=s;c<=n;c+=1){if(o.signal.aborted)return null;if(await b(t,c,r)===e)return{number:c,took:Date.now()-a}}return null})(),controller:o}}function h(e){const t=atob(e),r=new Uint8Array(t.length);for(let n=0;n<t.length;n++)r[n]=t.charCodeAt(n);return r}function g(e,t=12){const r=new Uint8Array(t);for(let n=0;n<t;n++)r[n]=e%256,e=Math.floor(e/256);return r}async function m(e,t="",r=1e6,n=0){const s="AES-GCM",o=new AbortController,a=Date.now(),l=async()=>{for(let u=n;u<=r;u+=1){if(o.signal.aborted||!c||!y)return null;try{const f=await crypto.subtle.decrypt({name:s,iv:g(u)},c,y);if(f)return{clearText:new TextDecoder().decode(f),took:Date.now()-a}}catch{}}return null};let c=null,y=null;try{y=h(e);const u=await crypto.subtle.digest("SHA-256",d.encode(t));c=await crypto.subtle.importKey("raw",u,s,!1,["decrypt"])}catch{return{promise:Promise.reject(),controller:o}}return{promise:l(),controller:o}}let i;onmessage=async e=>{const{type:t,payload:r,start:n,max:s}=e.data;let o=null;if(t==="abort")i==null||i.abort(),i=void 0;else if(t==="work"){if("obfuscated"in r){const{key:a,obfuscated:l}=r||{};o=await m(l,a,s,n)}else{const{algorithm:a,challenge:l,salt:c}=r||{};o=w(l,c,a,s,n)}i=o.controller,o.promise.then(a=>{self.postMessage(a&&{...a,worker:!0})})}}})();
`, wn = typeof self < "u" && self.Blob && new Blob([Ln], { type: "text/javascript;charset=utf-8" });
function dl(e) {
  let t;
  try {
    if (t = wn && (self.URL || self.webkitURL).createObjectURL(wn), !t) throw "";
    const r = new Worker(t, {
      name: e == null ? void 0 : e.name
    });
    return r.addEventListener("error", () => {
      (self.URL || self.webkitURL).revokeObjectURL(t);
    }), r;
  } catch {
    return new Worker(
      "data:text/javascript;charset=utf-8," + encodeURIComponent(Ln),
      {
        name: e == null ? void 0 : e.name
      }
    );
  } finally {
    t && (self.URL || self.webkitURL).revokeObjectURL(t);
  }
}
const hl = "5";
var Dn;
typeof window < "u" && ((Dn = window.__svelte ?? (window.__svelte = {})).v ?? (Dn.v = /* @__PURE__ */ new Set())).add(hl);
const vl = 1, gl = 4, _l = 8, ml = 16, pl = 1, bl = 2, xr = "[", Pn = "[!", On = "]", vt = {}, ie = Symbol(), wl = "http://www.w3.org/1999/xhtml", yn = !1, pe = 2, Fn = 4, Xt = 8, Ar = 16, Pe = 32, nt = 64, qt = 128, he = 256, Bt = 512, ce = 1024, Oe = 2048, pt = 4096, gt = 8192, Qt = 16384, yl = 32768, Rr = 65536, kl = 1 << 19, Vn = 1 << 20, $t = Symbol("$state"), Mn = Symbol("legacy props"), El = Symbol("");
var Un = Array.isArray, Cl = Array.prototype.indexOf, xl = Array.from, Ht = Object.keys, Yt = Object.defineProperty, tt = Object.getOwnPropertyDescriptor, Al = Object.getOwnPropertyDescriptors, Rl = Object.prototype, Il = Array.prototype, jn = Object.getPrototypeOf;
function qn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function $l(e, t, r = !1) {
  return e === void 0 ? r ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
const Sl = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Nt = [], zt = [];
function Bn() {
  var e = Nt;
  Nt = [], qn(e);
}
function Hn() {
  var e = zt;
  zt = [], qn(e);
}
function er(e) {
  Nt.length === 0 && queueMicrotask(Bn), Nt.push(e);
}
function Nl(e) {
  zt.length === 0 && Sl(Hn), zt.push(e);
}
function kn() {
  Nt.length > 0 && Bn(), zt.length > 0 && Hn();
}
function Yn(e) {
  return e === this.v;
}
function zl(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ir(e) {
  return !zl(e, this.v);
}
function Tl(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Dl() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ll(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Pl() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ol() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Fl(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Vl() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ml() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ul() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function jl() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let ql = !1;
function Ce(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Yn,
    rv: 0,
    wv: 0
  };
  return r;
}
function le(e) {
  return /* @__PURE__ */ Bl(Ce(e));
}
// @__NO_SIDE_EFFECTS__
function Gn(e, t = !1) {
  const r = Ce(e);
  return t || (r.equals = Ir), r;
}
// @__NO_SIDE_EFFECTS__
function Bl(e) {
  return N !== null && !me && (N.f & pe) !== 0 && (xe === null ? Kl([e]) : xe.push(e)), e;
}
function w(e, t) {
  return N !== null && !me && vo() && (N.f & (pe | Ar)) !== 0 && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (xe === null || !xe.includes(e)) && jl(), Hl(e, t);
}
function Hl(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = to(), Wn(e, Oe), z !== null && (z.f & ce) !== 0 && (z.f & (Pe | nt)) === 0 && (ze === null ? Xl([e]) : ze.push(e))), t;
}
function Wn(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var o = r.length, l = 0; l < o; l++) {
      var i = r[l], s = i.f;
      (s & Oe) === 0 && (Re(i, t), (s & (ce | he)) !== 0 && ((s & pe) !== 0 ? Wn(
        /** @type {Derived} */
        i,
        pt
      ) : or(
        /** @type {Effect} */
        i
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function He(e) {
  var t = pe | Oe, r = N !== null && (N.f & pe) !== 0 ? (
    /** @type {Derived} */
    N
  ) : null;
  return z === null || r !== null && (r.f & he) !== 0 ? t |= he : z.f |= Vn, {
    ctx: te,
    deps: null,
    effects: null,
    equals: Yn,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: r ?? z
  };
}
// @__NO_SIDE_EFFECTS__
function Yl(e) {
  const t = /* @__PURE__ */ He(e);
  return t.equals = Ir, t;
}
function Zn(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Le(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Gl(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & pe) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Wl(e) {
  var t, r = z;
  Ze(Gl(e));
  try {
    Zn(e), t = no(e);
  } finally {
    Ze(r);
  }
  return t;
}
function Jn(e) {
  var t = Wl(e), r = (Ye || (e.f & he) !== 0) && e.deps !== null ? pt : ce;
  Re(e, r), e.equals(t) || (e.v = t, e.wv = to());
}
function tr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let P = !1;
function ht(e) {
  P = e;
}
let L;
function Ge(e) {
  if (e === null)
    throw tr(), vt;
  return L = e;
}
function _t() {
  return Ge(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Je(L)
  );
}
function W(e) {
  if (P) {
    if (/* @__PURE__ */ Je(L) !== null)
      throw tr(), vt;
    L = e;
  }
}
function Zl() {
  for (var e = 0, t = L; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === On) {
        if (e === 0) return t;
        e -= 1;
      } else (r === xr || r === Pn) && (e += 1);
    }
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Je(t)
    );
    t.remove(), t = o;
  }
}
function F(e, t = null, r) {
  if (typeof e != "object" || e === null || $t in e)
    return e;
  const o = jn(e);
  if (o !== Rl && o !== Il)
    return e;
  var l = /* @__PURE__ */ new Map(), i = Un(e), s = Ce(0);
  i && l.set("length", Ce(
    /** @type {any[]} */
    e.length
  ));
  var c;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(f, d, _) {
        (!("value" in _) || _.configurable === !1 || _.enumerable === !1 || _.writable === !1) && Vl();
        var h = l.get(d);
        return h === void 0 ? (h = Ce(_.value), l.set(d, h)) : w(h, F(_.value, c)), !0;
      },
      deleteProperty(f, d) {
        var _ = l.get(d);
        if (_ === void 0)
          d in f && l.set(d, Ce(ie));
        else {
          if (i && typeof d == "string") {
            var h = (
              /** @type {Source<number>} */
              l.get("length")
            ), g = Number(d);
            Number.isInteger(g) && g < h.v && w(h, g);
          }
          w(_, ie), En(s);
        }
        return !0;
      },
      get(f, d, _) {
        var C;
        if (d === $t)
          return e;
        var h = l.get(d), g = d in f;
        if (h === void 0 && (!g || (C = tt(f, d)) != null && C.writable) && (h = Ce(F(g ? f[d] : ie, c)), l.set(d, h)), h !== void 0) {
          var p = a(h);
          return p === ie ? void 0 : p;
        }
        return Reflect.get(f, d, _);
      },
      getOwnPropertyDescriptor(f, d) {
        var _ = Reflect.getOwnPropertyDescriptor(f, d);
        if (_ && "value" in _) {
          var h = l.get(d);
          h && (_.value = a(h));
        } else if (_ === void 0) {
          var g = l.get(d), p = g == null ? void 0 : g.v;
          if (g !== void 0 && p !== ie)
            return {
              enumerable: !0,
              configurable: !0,
              value: p,
              writable: !0
            };
        }
        return _;
      },
      has(f, d) {
        var p;
        if (d === $t)
          return !0;
        var _ = l.get(d), h = _ !== void 0 && _.v !== ie || Reflect.has(f, d);
        if (_ !== void 0 || z !== null && (!h || (p = tt(f, d)) != null && p.writable)) {
          _ === void 0 && (_ = Ce(h ? F(f[d], c) : ie), l.set(d, _));
          var g = a(_);
          if (g === ie)
            return !1;
        }
        return h;
      },
      set(f, d, _, h) {
        var j;
        var g = l.get(d), p = d in f;
        if (i && d === "length")
          for (var C = _; C < /** @type {Source<number>} */
          g.v; C += 1) {
            var T = l.get(C + "");
            T !== void 0 ? w(T, ie) : C in f && (T = Ce(ie), l.set(C + "", T));
          }
        g === void 0 ? (!p || (j = tt(f, d)) != null && j.writable) && (g = Ce(void 0), w(g, F(_, c)), l.set(d, g)) : (p = g.v !== ie, w(g, F(_, c)));
        var O = Reflect.getOwnPropertyDescriptor(f, d);
        if (O != null && O.set && O.set.call(h, _), !p) {
          if (i && typeof d == "string") {
            var we = (
              /** @type {Source<number>} */
              l.get("length")
            ), re = Number(d);
            Number.isInteger(re) && re >= we.v && w(we, re + 1);
          }
          En(s);
        }
        return !0;
      },
      ownKeys(f) {
        a(s);
        var d = Reflect.ownKeys(f).filter((g) => {
          var p = l.get(g);
          return p === void 0 || p.v !== ie;
        });
        for (var [_, h] of l)
          h.v !== ie && !(_ in f) && d.push(_);
        return d;
      },
      setPrototypeOf() {
        Ml();
      }
    }
  );
}
function En(e, t = 1) {
  w(e, e.v + t);
}
var Cn, Kn, Xn, Qn;
function wr() {
  if (Cn === void 0) {
    Cn = window, Kn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    Xn = tt(t, "firstChild").get, Qn = tt(t, "nextSibling").get, e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function rr(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function De(e) {
  return Xn.call(e);
}
// @__NO_SIDE_EFFECTS__
function Je(e) {
  return Qn.call(e);
}
function Z(e, t) {
  if (!P)
    return /* @__PURE__ */ De(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ De(L)
  );
  return r === null && (r = L.appendChild(rr())), Ge(r), r;
}
function Rt(e, t) {
  if (!P) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ De(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Je(r) : r;
  }
  return L;
}
function J(e, t = 1, r = !1) {
  let o = P ? L : e;
  for (var l; t--; )
    l = o, o = /** @type {TemplateNode} */
    /* @__PURE__ */ Je(o);
  if (!P)
    return o;
  var i = o == null ? void 0 : o.nodeType;
  if (r && i !== 3) {
    var s = rr();
    return o === null ? l == null || l.after(s) : o.before(s), Ge(s), s;
  }
  return Ge(o), /** @type {TemplateNode} */
  o;
}
function Jl(e) {
  e.textContent = "";
}
let Ut = !1, Gt = !1, Wt = null, rt = !1, $r = !1;
function xn(e) {
  $r = e;
}
let St = [];
let N = null, me = !1;
function We(e) {
  N = e;
}
let z = null;
function Ze(e) {
  z = e;
}
let xe = null;
function Kl(e) {
  xe = e;
}
let ee = null, ue = 0, ze = null;
function Xl(e) {
  ze = e;
}
let eo = 1, Zt = 0, Ye = !1;
function to() {
  return ++eo;
}
function Tt(e) {
  var h;
  var t = e.f;
  if ((t & Oe) !== 0)
    return !0;
  if ((t & pt) !== 0) {
    var r = e.deps, o = (t & he) !== 0;
    if (r !== null) {
      var l, i, s = (t & Bt) !== 0, c = o && z !== null && !Ye, f = r.length;
      if (s || c) {
        var d = (
          /** @type {Derived} */
          e
        ), _ = d.parent;
        for (l = 0; l < f; l++)
          i = r[l], (s || !((h = i == null ? void 0 : i.reactions) != null && h.includes(d))) && (i.reactions ?? (i.reactions = [])).push(d);
        s && (d.f ^= Bt), c && _ !== null && (_.f & he) === 0 && (d.f ^= he);
      }
      for (l = 0; l < f; l++)
        if (i = r[l], Tt(
          /** @type {Derived} */
          i
        ) && Jn(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!o || z !== null && !Ye) && Re(e, ce);
  }
  return !1;
}
function Ql(e, t) {
  for (var r = t; r !== null; ) {
    if ((r.f & qt) !== 0)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= qt;
      }
    r = r.parent;
  }
  throw Ut = !1, e;
}
function ei(e) {
  return (e.f & Qt) === 0 && (e.parent === null || (e.parent.f & qt) === 0);
}
function nr(e, t, r, o) {
  if (Ut) {
    if (r === null && (Ut = !1), ei(t))
      throw e;
    return;
  }
  r !== null && (Ut = !0);
  {
    Ql(e, t);
    return;
  }
}
function ro(e, t, r = !0) {
  var o = e.reactions;
  if (o !== null)
    for (var l = 0; l < o.length; l++) {
      var i = o[l];
      (i.f & pe) !== 0 ? ro(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (r ? Re(i, Oe) : (i.f & ce) !== 0 && Re(i, pt), or(
        /** @type {Effect} */
        i
      ));
    }
}
function no(e) {
  var p;
  var t = ee, r = ue, o = ze, l = N, i = Ye, s = xe, c = te, f = me, d = e.f;
  ee = /** @type {null | Value[]} */
  null, ue = 0, ze = null, Ye = (d & he) !== 0 && (me || !rt || N === null), N = (d & (Pe | nt)) === 0 ? e : null, xe = null, Rn(e.ctx), me = !1, Zt++;
  try {
    var _ = (
      /** @type {Function} */
      (0, e.fn)()
    ), h = e.deps;
    if (ee !== null) {
      var g;
      if (Jt(e, ue), h !== null && ue > 0)
        for (h.length = ue + ee.length, g = 0; g < ee.length; g++)
          h[ue + g] = ee[g];
      else
        e.deps = h = ee;
      if (!Ye)
        for (g = ue; g < h.length; g++)
          ((p = h[g]).reactions ?? (p.reactions = [])).push(e);
    } else h !== null && ue < h.length && (Jt(e, ue), h.length = ue);
    if (vo() && ze !== null && !me && h !== null && (e.f & (pe | pt | Oe)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      ze.length; g++)
        ro(
          ze[g],
          /** @type {Effect} */
          e
        );
    return l !== null && Zt++, _;
  } finally {
    ee = t, ue = r, ze = o, N = l, Ye = i, xe = s, Rn(c), me = f;
  }
}
function ti(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var o = Cl.call(r, e);
    if (o !== -1) {
      var l = r.length - 1;
      l === 0 ? r = t.reactions = null : (r[o] = r[l], r.pop());
    }
  }
  r === null && (t.f & pe) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ee === null || !ee.includes(t)) && (Re(t, pt), (t.f & (he | Bt)) === 0 && (t.f ^= Bt), Zn(
    /** @type {Derived} **/
    t
  ), Jt(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Jt(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var o = t; o < r.length; o++)
      ti(e, r[o]);
}
function Sr(e) {
  var t = e.f;
  if ((t & Qt) === 0) {
    Re(e, ce);
    var r = z, o = te, l = rt;
    z = e, rt = !0;
    try {
      (t & Ar) !== 0 ? fi(e) : io(e), lo(e);
      var i = no(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = eo;
      var s = e.deps, c;
      yn && ql && e.f & Oe;
    } catch (f) {
      nr(f, e, r, o || e.ctx);
    } finally {
      rt = l, z = r;
    }
  }
}
function ri() {
  try {
    Pl();
  } catch (e) {
    if (Wt !== null)
      nr(e, Wt, null);
    else
      throw e;
  }
}
function oo() {
  var e = rt;
  try {
    var t = 0;
    for (rt = !0; St.length > 0; ) {
      t++ > 1e3 && ri();
      var r = St, o = r.length;
      St = [];
      for (var l = 0; l < o; l++) {
        var i = oi(r[l]);
        ni(i);
      }
    }
  } finally {
    Gt = !1, rt = e, Wt = null;
  }
}
function ni(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var o = e[r];
      if ((o.f & (Qt | gt)) === 0)
        try {
          Tt(o) && (Sr(o), o.deps === null && o.first === null && o.nodes_start === null && (o.teardown === null ? ao(o) : o.fn = null));
        } catch (l) {
          nr(l, o, null, o.ctx);
        }
    }
}
function or(e) {
  Gt || (Gt = !0, queueMicrotask(oo));
  for (var t = Wt = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (nt | Pe)) !== 0) {
      if ((r & ce) === 0) return;
      t.f ^= ce;
    }
  }
  St.push(t);
}
function oi(e) {
  for (var t = [], r = e; r !== null; ) {
    var o = r.f, l = (o & (Pe | nt)) !== 0, i = l && (o & ce) !== 0;
    if (!i && (o & gt) === 0) {
      if ((o & Fn) !== 0)
        t.push(r);
      else if (l)
        r.f ^= ce;
      else {
        var s = N;
        try {
          N = r, Tt(r) && Sr(r);
        } catch (d) {
          nr(d, r, null, r.ctx);
        } finally {
          N = s;
        }
      }
      var c = r.first;
      if (c !== null) {
        r = c;
        continue;
      }
    }
    var f = r.parent;
    for (r = r.next; r === null && f !== null; )
      r = f.next, f = f.parent;
  }
  return t;
}
function x(e) {
  var t;
  for (kn(); St.length > 0; )
    Gt = !0, oo(), kn();
  return (
    /** @type {T} */
    t
  );
}
async function pr() {
  await Promise.resolve(), x();
}
function a(e) {
  var t = e.f, r = (t & pe) !== 0;
  if (N !== null && !me) {
    xe !== null && xe.includes(e) && Ul();
    var o = N.deps;
    e.rv < Zt && (e.rv = Zt, ee === null && o !== null && o[ue] === e ? ue++ : ee === null ? ee = [e] : (!Ye || !ee.includes(e)) && ee.push(e));
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var l = (
      /** @type {Derived} */
      e
    ), i = l.parent;
    i !== null && (i.f & he) === 0 && (l.f ^= he);
  }
  return r && (l = /** @type {Derived} */
  e, Tt(l) && Jn(l)), e.v;
}
function mt(e) {
  var t = me;
  try {
    return me = !0, e();
  } finally {
    me = t;
  }
}
const li = -7169;
function Re(e, t) {
  e.f = e.f & li | t;
}
function ii(e) {
  z === null && N === null && Ll(), N !== null && (N.f & he) !== 0 && z === null && Dl(), $r && Tl();
}
function ai(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function ot(e, t, r, o = !0) {
  var l = z, i = {
    ctx: te,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Oe,
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
      Sr(i), i.f |= yl;
    } catch (f) {
      throw Le(i), f;
    }
  else t !== null && or(i);
  var s = r && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (Vn | qt)) === 0;
  if (!s && o && (l !== null && ai(i, l), N !== null && (N.f & pe) !== 0)) {
    var c = (
      /** @type {Derived} */
      N
    );
    (c.effects ?? (c.effects = [])).push(i);
  }
  return i;
}
function si(e) {
  const t = ot(Xt, null, !1);
  return Re(t, ce), t.teardown = e, t;
}
function yr(e) {
  ii();
  var t = z !== null && (z.f & Pe) !== 0 && te !== null && !te.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      te
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: z,
      reaction: N
    });
  } else {
    var o = Nr(e);
    return o;
  }
}
function ui(e) {
  const t = ot(nt, e, !0);
  return () => {
    Le(t);
  };
}
function ci(e) {
  const t = ot(nt, e, !0);
  return (r = {}) => new Promise((o) => {
    r.outro ? kr(t, () => {
      Le(t), o(void 0);
    }) : (Le(t), o(void 0));
  });
}
function Nr(e) {
  return ot(Fn, e, !1);
}
function zr(e) {
  return ot(Xt, e, !0);
}
function Ne(e, t = [], r = He) {
  const o = t.map(r);
  return Tr(() => e(...o.map(a)));
}
function Tr(e, t = 0) {
  return ot(Xt | Ar | t, e, !0);
}
function Kt(e, t = !0) {
  return ot(Xt | Pe, e, !0, t);
}
function lo(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = $r, o = N;
    xn(!0), We(null);
    try {
      t.call(null);
    } finally {
      xn(r), We(o);
    }
  }
}
function io(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var o = r.next;
    (r.f & nt) !== 0 ? r.parent = null : Le(r, t), r = o;
  }
}
function fi(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Pe) === 0 && Le(t), t = r;
  }
}
function Le(e, t = !0) {
  var r = !1;
  if ((t || (e.f & kl) !== 0) && e.nodes_start !== null) {
    for (var o = e.nodes_start, l = e.nodes_end; o !== null; ) {
      var i = o === l ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Je(o)
      );
      o.remove(), o = i;
    }
    r = !0;
  }
  io(e, t && !r), Jt(e, 0), Re(e, Qt);
  var s = e.transitions;
  if (s !== null)
    for (const f of s)
      f.stop();
  lo(e);
  var c = e.parent;
  c !== null && c.first !== null && ao(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function ao(e) {
  var t = e.parent, r = e.prev, o = e.next;
  r !== null && (r.next = o), o !== null && (o.prev = r), t !== null && (t.first === e && (t.first = o), t.last === e && (t.last = r));
}
function kr(e, t) {
  var r = [];
  so(e, r, !0), di(r, () => {
    Le(e), t && t();
  });
}
function di(e, t) {
  var r = e.length;
  if (r > 0) {
    var o = () => --r || t();
    for (var l of e)
      l.out(o);
  } else
    t();
}
function so(e, t, r) {
  if ((e.f & gt) === 0) {
    if (e.f ^= gt, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || r) && t.push(s);
    for (var o = e.first; o !== null; ) {
      var l = o.next, i = (o.f & Rr) !== 0 || (o.f & Pe) !== 0;
      so(o, t, i ? r : !1), o = l;
    }
  }
}
function An(e) {
  uo(e, !0);
}
function uo(e, t) {
  if ((e.f & gt) !== 0) {
    e.f ^= gt, (e.f & ce) === 0 && (e.f ^= ce), Tt(e) && (Re(e, Oe), or(e));
    for (var r = e.first; r !== null; ) {
      var o = r.next, l = (r.f & Rr) !== 0 || (r.f & Pe) !== 0;
      uo(r, l ? t : !1), r = o;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
function co(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let te = null;
function Rn(e) {
  te = e;
}
function fo(e, t = !1, r) {
  te = {
    p: te,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
}
function ho(e) {
  const t = te;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var r = z, o = N;
      t.e = null;
      try {
        for (var l = 0; l < s.length; l++) {
          var i = s[l];
          Ze(i.effect), We(i.reaction), Nr(i.fn);
        }
      } finally {
        Ze(r), We(o);
      }
    }
    te = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function vo() {
  return !0;
}
const hi = ["touchstart", "touchmove"];
function vi(e) {
  return hi.includes(e);
}
function gi(e, t) {
  {
    const r = document.body;
    e.autofocus = !0, er(() => {
      document.activeElement === r && e.focus();
    });
  }
}
let In = !1;
function go() {
  In || (In = !0, document.addEventListener(
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
function _o(e) {
  var t = N, r = z;
  We(null), Ze(null);
  try {
    return e();
  } finally {
    We(t), Ze(r);
  }
}
function _i(e, t, r, o = r) {
  e.addEventListener(t, () => _o(r));
  const l = e.__on_r;
  l ? e.__on_r = () => {
    l(), o(!0);
  } : e.__on_r = () => o(!0), go();
}
const mo = /* @__PURE__ */ new Set(), Er = /* @__PURE__ */ new Set();
function mi(e, t, r, o = {}) {
  function l(i) {
    if (o.capture || It.call(t, i), !i.cancelBubble)
      return _o(() => r == null ? void 0 : r.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? er(() => {
    t.addEventListener(e, l, o);
  }) : t.addEventListener(e, l, o), l;
}
function Be(e, t, r, o, l) {
  var i = { capture: o, passive: l }, s = mi(e, t, r, i);
  (t === document.body || t === window || t === document) && si(() => {
    t.removeEventListener(e, s, i);
  });
}
function pi(e) {
  for (var t = 0; t < e.length; t++)
    mo.add(e[t]);
  for (var r of Er)
    r(e);
}
function It(e) {
  var re;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), o = e.type, l = ((re = e.composedPath) == null ? void 0 : re.call(e)) || [], i = (
    /** @type {null | Element} */
    l[0] || e.target
  ), s = 0, c = e.__root;
  if (c) {
    var f = l.indexOf(c);
    if (f !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var d = l.indexOf(t);
    if (d === -1)
      return;
    f <= d && (s = f);
  }
  if (i = /** @type {Element} */
  l[s] || e.target, i !== t) {
    Yt(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || r;
      }
    });
    var _ = N, h = z;
    We(null), Ze(null);
    try {
      for (var g, p = []; i !== null; ) {
        var C = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var T = i["__" + o];
          if (T != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (Un(T)) {
              var [O, ...we] = T;
              O.apply(i, [e, ...we]);
            } else
              T.call(i, e);
        } catch (j) {
          g ? p.push(j) : g = j;
        }
        if (e.cancelBubble || C === t || C === null)
          break;
        i = C;
      }
      if (g) {
        for (let j of p)
          queueMicrotask(() => {
            throw j;
          });
        throw g;
      }
    } finally {
      e.__root = t, delete e.currentTarget, We(_), Ze(h);
    }
  }
}
function Dr(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Ae(e, t) {
  var r = (
    /** @type {Effect} */
    z
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function be(e, t) {
  var r = (t & pl) !== 0, o = (t & bl) !== 0, l, i = !e.startsWith("<!>");
  return () => {
    if (P)
      return Ae(L, null), L;
    l === void 0 && (l = Dr(i ? e : "<!>" + e), r || (l = /** @type {Node} */
    /* @__PURE__ */ De(l)));
    var s = (
      /** @type {TemplateNode} */
      o || Kn ? document.importNode(l, !0) : l.cloneNode(!0)
    );
    if (r) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ De(s)
      ), f = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Ae(c, f);
    } else
      Ae(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function lr(e, t, r = "svg") {
  var o = !e.startsWith("<!>"), l = `<${r}>${o ? e : "<!>" + e}</${r}>`, i;
  return () => {
    if (P)
      return Ae(L, null), L;
    if (!i) {
      var s = (
        /** @type {DocumentFragment} */
        Dr(l)
      ), c = (
        /** @type {Element} */
        /* @__PURE__ */ De(s)
      );
      i = /** @type {Element} */
      /* @__PURE__ */ De(c);
    }
    var f = (
      /** @type {TemplateNode} */
      i.cloneNode(!0)
    );
    return Ae(f, f), f;
  };
}
function Ft() {
  if (P)
    return Ae(L, null), L;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = rr();
  return e.append(t, r), Ae(t, r), e;
}
function U(e, t) {
  if (P) {
    z.nodes_end = L, _t();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function bi(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function po(e, t) {
  return bo(e, t);
}
function wi(e, t) {
  wr(), t.intro = t.intro ?? !1;
  const r = t.target, o = P, l = L;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ De(r)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== xr); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ Je(i);
    if (!i)
      throw vt;
    ht(!0), Ge(
      /** @type {Comment} */
      i
    ), _t();
    const s = bo(e, { ...t, anchor: i });
    if (L === null || L.nodeType !== 8 || /** @type {Comment} */
    L.data !== On)
      throw tr(), vt;
    return ht(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === vt)
      return t.recover === !1 && Ol(), wr(), Jl(r), ht(!1), po(e, t);
    throw s;
  } finally {
    ht(o), Ge(l);
  }
}
const dt = /* @__PURE__ */ new Map();
function bo(e, { target: t, anchor: r, props: o = {}, events: l, context: i, intro: s = !0 }) {
  wr();
  var c = /* @__PURE__ */ new Set(), f = (h) => {
    for (var g = 0; g < h.length; g++) {
      var p = h[g];
      if (!c.has(p)) {
        c.add(p);
        var C = vi(p);
        t.addEventListener(p, It, { passive: C });
        var T = dt.get(p);
        T === void 0 ? (document.addEventListener(p, It, { passive: C }), dt.set(p, 1)) : dt.set(p, T + 1);
      }
    }
  };
  f(xl(mo)), Er.add(f);
  var d = void 0, _ = ci(() => {
    var h = r ?? t.appendChild(rr());
    return Kt(() => {
      if (i) {
        fo({});
        var g = (
          /** @type {ComponentContext} */
          te
        );
        g.c = i;
      }
      l && (o.$$events = l), P && Ae(
        /** @type {TemplateNode} */
        h,
        null
      ), d = e(h, o) || {}, P && (z.nodes_end = L), i && ho();
    }), () => {
      var C;
      for (var g of c) {
        t.removeEventListener(g, It);
        var p = (
          /** @type {number} */
          dt.get(g)
        );
        --p === 0 ? (document.removeEventListener(g, It), dt.delete(g)) : dt.set(g, p);
      }
      Er.delete(f), h !== r && ((C = h.parentNode) == null || C.removeChild(h));
    };
  });
  return Cr.set(d, _), d;
}
let Cr = /* @__PURE__ */ new WeakMap();
function yi(e, t) {
  const r = Cr.get(e);
  return r ? (Cr.delete(e), r(t)) : Promise.resolve();
}
function K(e, t, [r, o] = [0, 0]) {
  P && r === 0 && _t();
  var l = e, i = null, s = null, c = ie, f = r > 0 ? Rr : 0, d = !1;
  const _ = (g, p = !0) => {
    d = !0, h(p, g);
  }, h = (g, p) => {
    if (c === (c = g)) return;
    let C = !1;
    if (P && o !== -1) {
      if (r === 0) {
        const O = (
          /** @type {Comment} */
          l.data
        );
        O === xr ? o = 0 : O === Pn ? o = 1 / 0 : (o = parseInt(O.substring(1)), o !== o && (o = c ? 1 / 0 : -1));
      }
      const T = o > r;
      !!c === T && (l = Zl(), Ge(l), ht(!1), C = !0, o = -1);
    }
    c ? (i ? An(i) : p && (i = Kt(() => p(l))), s && kr(s, () => {
      s = null;
    })) : (s ? An(s) : p && (s = Kt(() => p(l, [r + 1, o]))), i && kr(i, () => {
      i = null;
    })), C && ht(!0);
  };
  Tr(() => {
    d = !1, t(_), d || h(null, null);
  }, f), P && (l = L);
}
function et(e, t, r, o, l) {
  var i = e, s = "", c;
  Tr(() => {
    if (s === (s = t() ?? "")) {
      P && _t();
      return;
    }
    c !== void 0 && (Le(c), c = void 0), s !== "" && (c = Kt(() => {
      if (P) {
        L.data;
        for (var f = _t(), d = f; f !== null && (f.nodeType !== 8 || /** @type {Comment} */
        f.data !== ""); )
          d = f, f = /** @type {TemplateNode} */
          /* @__PURE__ */ Je(f);
        if (f === null)
          throw tr(), vt;
        Ae(L, d), i = Ge(f);
        return;
      }
      var _ = s + "", h = Dr(_);
      Ae(
        /** @type {TemplateNode} */
        /* @__PURE__ */ De(h),
        /** @type {TemplateNode} */
        h.lastChild
      ), i.before(h);
    }));
  });
}
function ki(e, t, r, o, l) {
  var c;
  P && _t();
  var i = (c = t.$$slots) == null ? void 0 : c[r], s = !1;
  i === !0 && (i = t.children, s = !0), i === void 0 || i(e, s ? () => o : o);
}
function Ei(e, t) {
  er(() => {
    var r = e.getRootNode(), o = (
      /** @type {ShadowRoot} */
      r.host ? (
        /** @type {ShadowRoot} */
        r
      ) : (
        /** @type {Document} */
        r.head ?? /** @type {Document} */
        r.ownerDocument.head
      )
    );
    if (!o.querySelector("#" + t.hash)) {
      const l = document.createElement("style");
      l.id = t.hash, l.textContent = t.code, o.appendChild(l);
    }
  });
}
const $n = [...` 	
\r\f \v\uFEFF`];
function Ci(e, t, r) {
  var o = "" + e;
  if (r) {
    for (var l in r)
      if (r[l])
        o = o ? o + " " + l : l;
      else if (o.length)
        for (var i = l.length, s = 0; (s = o.indexOf(l, s)) >= 0; ) {
          var c = s + i;
          (s === 0 || $n.includes(o[s - 1])) && (c === o.length || $n.includes(o[c])) ? o = (s === 0 ? "" : o.substring(0, s)) + o.substring(c + 1) : s = c;
        }
  }
  return o === "" ? null : o;
}
function xi(e, t, r, o, l, i) {
  var s = e.__className;
  if (P || s !== r) {
    var c = Ci(r, o, i);
    (!P || c !== e.getAttribute("class")) && (c == null ? e.removeAttribute("class") : e.className = c), e.__className = r;
  } else if (i && l !== i)
    for (var f in i) {
      var d = !!i[f];
      (l == null || d !== !!l[f]) && e.classList.toggle(f, d);
    }
  return i;
}
const Ai = Symbol("is custom element"), Ri = Symbol("is html");
function Sn(e) {
  if (P) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var o = e.value;
          $(e, "value", null), e.value = o;
        }
        if (e.hasAttribute("checked")) {
          var l = e.checked;
          $(e, "checked", null), e.checked = l;
        }
      }
    };
    e.__on_r = r, Nl(r), go();
  }
}
function Ii(e, t) {
  var r = wo(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function $(e, t, r, o) {
  var l = wo(e);
  P && (l[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || l[t] !== (l[t] = r) && (t === "loading" && (e[El] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && $i(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function wo(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Ai]: e.nodeName.includes("-"),
      [Ri]: e.namespaceURI === wl
    })
  );
}
var Nn = /* @__PURE__ */ new Map();
function $i(e) {
  var t = Nn.get(e.nodeName);
  if (t) return t;
  Nn.set(e.nodeName, t = []);
  for (var r, o = e, l = Element.prototype; l !== o; ) {
    r = Al(o);
    for (var i in r)
      r[i].set && t.push(i);
    o = jn(o);
  }
  return t;
}
function Si(e, t, r = t) {
  _i(e, "change", (o) => {
    var l = o ? e.defaultChecked : e.checked;
    r(l);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (P && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  mt(t) == null) && r(e.checked), zr(() => {
    var o = t();
    e.checked = !!o;
  });
}
function zn(e, t) {
  return e === t || (e == null ? void 0 : e[$t]) === t;
}
function Vt(e = {}, t, r, o) {
  return Nr(() => {
    var l, i;
    return zr(() => {
      l = i, i = [], mt(() => {
        e !== r(...i) && (t(e, ...i), l && zn(r(...l), e) && t(null, ...l));
      });
    }), () => {
      er(() => {
        i && zn(r(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function yo(e) {
  te === null && co(), yr(() => {
    const t = mt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Ni(e) {
  te === null && co(), yo(() => () => mt(e));
}
let Mt = !1;
function zi(e) {
  var t = Mt;
  try {
    return Mt = !1, [e(), Mt];
  } finally {
    Mt = t;
  }
}
function R(e, t, r, o) {
  var Fe;
  var l = (r & vl) !== 0, i = !0, s = (r & _l) !== 0, c = (r & ml) !== 0, f = !1, d;
  s ? [d, f] = zi(() => (
    /** @type {V} */
    e[t]
  )) : d = /** @type {V} */
  e[t];
  var _ = $t in e || Mn in e, h = s && (((Fe = tt(e, t)) == null ? void 0 : Fe.set) ?? (_ && t in e && ((V) => e[t] = V))) || void 0, g = (
    /** @type {V} */
    o
  ), p = !0, C = !1, T = () => (C = !0, p && (p = !1, c ? g = mt(
    /** @type {() => V} */
    o
  ) : g = /** @type {V} */
  o), g);
  d === void 0 && o !== void 0 && (h && i && Fl(), d = T(), h && h(d));
  var O;
  if (O = () => {
    var V = (
      /** @type {V} */
      e[t]
    );
    return V === void 0 ? T() : (p = !0, C = !1, V);
  }, (r & gl) === 0)
    return O;
  if (h) {
    var we = e.$$legacy;
    return function(V, ve) {
      return arguments.length > 0 ? ((!ve || we || f) && h(ve ? O() : V), V) : O();
    };
  }
  var re = !1, j = /* @__PURE__ */ Gn(d), ae = /* @__PURE__ */ He(() => {
    var V = O(), ve = a(j);
    return re ? (re = !1, ve) : j.v = V;
  });
  return l || (ae.equals = Ir), function(V, ve) {
    if (arguments.length > 0) {
      const Ie = ve ? a(ae) : s ? F(V) : V;
      return ae.equals(Ie) || (re = !0, w(j, Ie), C && g !== void 0 && (g = Ie), mt(() => a(ae))), V;
    }
    return a(ae);
  };
}
function Ti(e) {
  return new Di(e);
}
var Te, de;
class Di {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    _r(this, Te);
    /** @type {Record<string, any>} */
    _r(this, de);
    var i;
    var r = /* @__PURE__ */ new Map(), o = (s, c) => {
      var f = /* @__PURE__ */ Gn(c);
      return r.set(s, f), f;
    };
    const l = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, c) {
          return a(r.get(c) ?? o(c, Reflect.get(s, c)));
        },
        has(s, c) {
          return c === Mn ? !0 : (a(r.get(c) ?? o(c, Reflect.get(s, c))), Reflect.has(s, c));
        },
        set(s, c, f) {
          return w(r.get(c) ?? o(c, f), f), Reflect.set(s, c, f);
        }
      }
    );
    mr(this, de, (t.hydrate ? wi : po)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: l,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((i = t == null ? void 0 : t.props) != null && i.$$host) || t.sync === !1) && x(), mr(this, Te, l.$$events);
    for (const s of Object.keys(oe(this, de)))
      s === "$set" || s === "$destroy" || s === "$on" || Yt(this, s, {
        get() {
          return oe(this, de)[s];
        },
        /** @param {any} value */
        set(c) {
          oe(this, de)[s] = c;
        },
        enumerable: !0
      });
    oe(this, de).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(l, s);
    }, oe(this, de).$destroy = () => {
      yi(oe(this, de));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    oe(this, de).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    oe(this, Te)[t] = oe(this, Te)[t] || [];
    const o = (...l) => r.call(this, ...l);
    return oe(this, Te)[t].push(o), () => {
      oe(this, Te)[t] = oe(this, Te)[t].filter(
        /** @param {any} fn */
        (l) => l !== o
      );
    };
  }
  $destroy() {
    oe(this, de).$destroy();
  }
}
Te = new WeakMap(), de = new WeakMap();
let ko;
typeof HTMLElement == "function" && (ko = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, o) {
    super();
    /** The Svelte component constructor */
    _e(this, "$$ctor");
    /** Slots */
    _e(this, "$$s");
    /** @type {any} The Svelte component instance */
    _e(this, "$$c");
    /** Whether or not the custom element is connected */
    _e(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    _e(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    _e(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    _e(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    _e(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    _e(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    _e(this, "$$me");
    this.$$ctor = t, this.$$s = r, o && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, r, o) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(r), this.$$c) {
      const l = this.$$c.$on(t, r);
      this.$$l_u.set(r, l);
    }
    super.addEventListener(t, r, o);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, r, o) {
    if (super.removeEventListener(t, r, o), this.$$c) {
      const l = this.$$l_u.get(r);
      l && (l(), this.$$l_u.delete(r));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(l) {
        return (i) => {
          const s = document.createElement("slot");
          l !== "default" && (s.name = l), U(i, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, o = Li(this);
      for (const l of this.$$s)
        l in o && (l === "default" && !this.$$d.children ? (this.$$d.children = t(l), r.default = !0) : r[l] = t(l));
      for (const l of this.attributes) {
        const i = this.$$g_p(l.name);
        i in this.$$d || (this.$$d[i] = jt(i, l.value, this.$$p_d, "toProp"));
      }
      for (const l in this.$$p_d)
        !(l in this.$$d) && this[l] !== void 0 && (this.$$d[l] = this[l], delete this[l]);
      this.$$c = Ti({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = ui(() => {
        zr(() => {
          var l;
          this.$$r = !0;
          for (const i of Ht(this.$$c)) {
            if (!((l = this.$$p_d[i]) != null && l.reflect)) continue;
            this.$$d[i] = this.$$c[i];
            const s = jt(
              i,
              this.$$d[i],
              this.$$p_d,
              "toAttribute"
            );
            s == null ? this.removeAttribute(this.$$p_d[i].attribute || i) : this.setAttribute(this.$$p_d[i].attribute || i, s);
          }
          this.$$r = !1;
        });
      });
      for (const l in this.$$l)
        for (const i of this.$$l[l]) {
          const s = this.$$c.$on(l, i);
          this.$$l_u.set(i, s);
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
  attributeChangedCallback(t, r, o) {
    var l;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = jt(t, o, this.$$p_d, "toProp"), (l = this.$$c) == null || l.$set({ [t]: this.$$d[t] }));
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
    return Ht(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function jt(e, t, r, o) {
  var i;
  const l = (i = r[e]) == null ? void 0 : i.type;
  if (t = l === "Boolean" && typeof t != "boolean" ? t != null : t, !o || !r[e])
    return t;
  if (o === "toAttribute")
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
function Li(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function Pi(e, t, r, o, l, i) {
  let s = class extends ko {
    constructor() {
      super(e, r, l), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Ht(t).map(
        (c) => (t[c].attribute || c).toLowerCase()
      );
    }
  };
  return Ht(t).forEach((c) => {
    Yt(s.prototype, c, {
      get() {
        return this.$$c && c in this.$$c ? this.$$c[c] : this.$$d[c];
      },
      set(f) {
        var h;
        f = jt(c, f, t), this.$$d[c] = f;
        var d = this.$$c;
        if (d) {
          var _ = (h = tt(d, c)) == null ? void 0 : h.get;
          _ ? d[c] = f : d.$set({ [c]: f });
        }
      }
    });
  }), o.forEach((c) => {
    Yt(s.prototype, c, {
      get() {
        var f;
        return (f = this.$$c) == null ? void 0 : f[c];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
const Eo = new TextEncoder();
function Oi(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function Fi(e, t = "SHA-256", r = 1e5) {
  const o = Date.now().toString(16);
  e || (e = Math.round(Math.random() * r));
  const l = await Co(o, e, t);
  return {
    algorithm: t,
    challenge: l,
    salt: o,
    signature: ""
  };
}
async function Co(e, t, r) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return Oi(
    await crypto.subtle.digest(
      r.toUpperCase(),
      Eo.encode(e + t)
    )
  );
}
function Vi(e, t, r = "SHA-256", o = 1e6, l = 0) {
  const i = new AbortController(), s = Date.now();
  return {
    promise: (async () => {
      for (let f = l; f <= o; f += 1) {
        if (i.signal.aborted)
          return null;
        if (await Co(t, f, r) === e)
          return {
            number: f,
            took: Date.now() - s
          };
      }
      return null;
    })(),
    controller: i
  };
}
function Tn() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function Mi(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let o = 0; o < t.length; o++)
    r[o] = t.charCodeAt(o);
  return r;
}
function Ui(e, t = 12) {
  const r = new Uint8Array(t);
  for (let o = 0; o < t; o++)
    r[o] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function ji(e, t = "", r = 1e6, o = 0) {
  const l = "AES-GCM", i = new AbortController(), s = Date.now(), c = async () => {
    for (let _ = o; _ <= r; _ += 1) {
      if (i.signal.aborted || !f || !d)
        return null;
      try {
        const h = await crypto.subtle.decrypt(
          {
            name: l,
            iv: Ui(_)
          },
          f,
          d
        );
        if (h)
          return {
            clearText: new TextDecoder().decode(h),
            took: Date.now() - s
          };
      } catch {
      }
    }
    return null;
  };
  let f = null, d = null;
  try {
    d = Mi(e);
    const _ = await crypto.subtle.digest(
      "SHA-256",
      Eo.encode(t)
    );
    f = await crypto.subtle.importKey(
      "raw",
      _,
      l,
      !1,
      ["decrypt"]
    );
  } catch {
    return {
      promise: Promise.reject(),
      controller: i
    };
  }
  return {
    promise: c(),
    controller: i
  };
}
var k = /* @__PURE__ */ ((e) => (e.CODE = "code", e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(k || {}), X = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.LOADING = "loading", e.PLAYING = "playing", e.PAUSED = "paused", e.READY = "ready", e))(X || {});
const qi = {
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
typeof globalThis.altchaI18n != "object" && (globalThis.altchaI18n = {});
globalThis.altchaI18n.en = qi;
const br = (e, t) => {
  let r = /* @__PURE__ */ Yl(() => $l(t == null ? void 0 : t(), 24));
  var o = Gi();
  Ne(() => {
    $(o, "width", a(r)), $(o, "height", a(r));
  }), U(e, o);
};
function Bi(e, t) {
  e.code === "Space" && (e.preventDefault(), e.stopImmediatePropagation(), t());
}
function Hi(e, t) {
  e.preventDefault(), t();
}
function Yi(e, t, r, o, l, i, s, c) {
  var f;
  [
    k.UNVERIFIED,
    k.ERROR,
    k.EXPIRED,
    k.CODE
  ].includes(a(t)) ? r() !== !1 && ((f = a(o)) == null ? void 0 : f.reportValidity()) === !1 ? w(l, !1) : i() ? s() : c() : w(l, !0);
}
var Gi = /* @__PURE__ */ lr('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="svelte-uo3tkz"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25" class="svelte-uo3tkz"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor" class="altcha-spinner svelte-uo3tkz"></path></svg>'), Wi = /* @__PURE__ */ be('<input type="hidden" class="svelte-uo3tkz">'), Zi = /* @__PURE__ */ be('<div class="svelte-uo3tkz"><a target="_blank" class="altcha-logo svelte-uo3tkz" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-uo3tkz"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor" class="svelte-uo3tkz"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor" class="svelte-uo3tkz"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor" class="svelte-uo3tkz"></path></svg></a></div>'), Ji = /* @__PURE__ */ lr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-uo3tkz"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z" class="svelte-uo3tkz"></path></svg>'), Ki = /* @__PURE__ */ lr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-uo3tkz"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z" class="svelte-uo3tkz"></path></svg>'), Xi = /* @__PURE__ */ lr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-uo3tkz"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z" class="svelte-uo3tkz"></path></svg>'), Qi = /* @__PURE__ */ be('<button type="button" class="altcha-code-challenge-audio svelte-uo3tkz"><!></button>'), ea = /* @__PURE__ */ be('<audio hidden autoplay class="svelte-uo3tkz"><source class="svelte-uo3tkz"></audio>'), ta = /* @__PURE__ */ be('<div class="altcha-code-challenge svelte-uo3tkz" role="dialog"><div class="altcha-code-challenge-arrow svelte-uo3tkz"></div> <form data-code-challenge-form="1" class="svelte-uo3tkz"><img class="altcha-code-challenge-image svelte-uo3tkz" alt=""> <input type="text" autocomplete="off" name="code" class="altcha-code-challenge-input svelte-uo3tkz" required> <div class="altcha-code-challenge-buttons svelte-uo3tkz"><div class="altcha-code-challenge-buttons-left svelte-uo3tkz"><!> <button type="button" class="altcha-code-challenge-reload svelte-uo3tkz"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-uo3tkz"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z" class="svelte-uo3tkz"></path></svg></button></div> <button type="submit" class="altcha-code-challenge-verify svelte-uo3tkz"><!> </button></div> <!></form></div>'), ra = /* @__PURE__ */ be('<div class="svelte-uo3tkz"><!></div>'), na = /* @__PURE__ */ be('<div class="svelte-uo3tkz"><!></div>'), oa = /* @__PURE__ */ be('<div class="altcha-error svelte-uo3tkz"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="svelte-uo3tkz"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" class="svelte-uo3tkz"></path></svg> <!></div>'), la = /* @__PURE__ */ be('<div class="altcha-footer svelte-uo3tkz"><div class="svelte-uo3tkz"><!></div></div>'), ia = /* @__PURE__ */ be('<div class="altcha-anchor-arrow svelte-uo3tkz"></div>'), aa = /* @__PURE__ */ be('<!> <div class="altcha svelte-uo3tkz"><div class="altcha-main svelte-uo3tkz"><div><!> <input type="checkbox" class="svelte-uo3tkz"></div> <label class="altcha-label svelte-uo3tkz"><!></label> <!> <!> <!></div> <!> <!> <!></div>', 1);
const sa = {
  hash: "svelte-uo3tkz",
  code: `.altcha.svelte-uo3tkz {background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);position:relative;}.altcha.svelte-uo3tkz:focus-within {border-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating].svelte-uo3tkz {background:var(--altcha-color-base, white);display:none;filter:drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2));left:-100%;position:fixed;top:-100%;width:var(--altcha-max-width, 260px);z-index:999999;}.altcha[data-floating=top].svelte-uo3tkz .altcha-anchor-arrow:where(.svelte-uo3tkz) {border-bottom-color:transparent;border-top-color:var(--altcha-color-border, #a0a0a0);bottom:-12px;top:auto;}.altcha[data-floating=bottom].svelte-uo3tkz:focus-within::after {border-bottom-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating=top].svelte-uo3tkz:focus-within::after {border-top-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating].svelte-uo3tkz:not([data-state=unverified]) {display:block;}.altcha-anchor-arrow.svelte-uo3tkz {border:6px solid transparent;border-bottom-color:var(--altcha-color-border, #a0a0a0);content:"";height:0;left:12px;position:absolute;top:-12px;width:0;}.altcha-main.svelte-uo3tkz {align-items:center;display:flex;gap:0.4rem;padding:0.7rem;position:relative;}.altcha-code-challenge.svelte-uo3tkz {background:var(--altcha-color-base, white);border:1px solid var(--altcha-color-border-focus, currentColor);border-radius:var(--altcha-border-radius, 3px);filter:drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2));padding:0.5rem;position:absolute;top:2.5rem;z-index:9999999;}.altcha-code-challenge.svelte-uo3tkz > form:where(.svelte-uo3tkz) {display:flex;flex-direction:column;gap:0.5rem;}.altcha-code-challenge-input.svelte-uo3tkz {border:1px solid currentColor;border-radius:3px;box-sizing:border-box;outline:none;font-size:16px;padding:0.35rem;width:220px;}.altcha-code-challenge-input.svelte-uo3tkz:focus {outline:2px solid rgba(0, 0, 250, 0.2);}.altcha-code-challenge-input.svelte-uo3tkz:disabled {opacity:0.7;}.altcha-code-challenge-image.svelte-uo3tkz {border:1px solid currentColor;border-radius:3px;box-sizing:border-box;object-fit:contain;height:50px;width:220px;}.altcha-code-challenge-audio.svelte-uo3tkz,
.altcha-code-challenge-reload.svelte-uo3tkz {background:#efefef;border:0;border-radius:3px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0.35rem;}.altcha-code-challenge-audio.svelte-uo3tkz:disabled,
.altcha-code-challenge-reload.svelte-uo3tkz:disabled {opacity:0.7;pointer-events:none;}.altcha-code-challenge-audio.svelte-uo3tkz > :where(.svelte-uo3tkz),
.altcha-code-challenge-reload.svelte-uo3tkz > :where(.svelte-uo3tkz) {height:20px;width:20px;}.altcha-code-challenge-buttons.svelte-uo3tkz {display:flex;justify-content:space-between;}.altcha-code-challenge-buttons-left.svelte-uo3tkz {display:flex;gap:0.25rem;}.altcha-code-challenge-verify.svelte-uo3tkz {align-items:center;background:blue;border:0;border-radius:3px;color:white;cursor:pointer;display:flex;gap:0.5rem;font-size:100%;padding:0.35rem 1rem;}.altcha-code-challenge-verify.svelte-uo3tkz:disabled {opacity:0.7;pointer-events:none;}.altcha-code-challenge-arrow.svelte-uo3tkz {border:6px solid transparent;border-bottom-color:var(--altcha-color-border, currentColor);content:"";height:0;left:0.15rem;position:absolute;top:-12px;width:0;}.altcha[data-floating=top].svelte-uo3tkz .altcha-code-challenge:where(.svelte-uo3tkz) {top:-150px;}.altcha[data-floating=top].svelte-uo3tkz .altcha-code-challenge-arrow:where(.svelte-uo3tkz) {border-bottom-color:transparent;border-top-color:var(--altcha-color-border, currentColor);bottom:-12px;top:auto;}.altcha-label.svelte-uo3tkz {cursor:pointer;flex-grow:1;}.altcha-logo.svelte-uo3tkz {color:currentColor;opacity:0.7;}.altcha-logo.svelte-uo3tkz:hover {opacity:1;}.altcha-error.svelte-uo3tkz {color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem;}.altcha-footer.svelte-uo3tkz {align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.7;justify-content:end;padding:0.2rem 0.7rem;}.altcha-footer.svelte-uo3tkz:hover {opacity:1;}.altcha-footer.svelte-uo3tkz a {color:currentColor;}.altcha-checkbox.svelte-uo3tkz {display:flex;align-items:center;height:24px;width:24px;}.altcha-checkbox.svelte-uo3tkz input:where(.svelte-uo3tkz) {width:18px;height:18px;margin:0;}.altcha-checkbox-verifying.svelte-uo3tkz input:where(.svelte-uo3tkz) {appearance:none;pointer-events:none;height:0;width:0;}.altcha-spinner.svelte-uo3tkz {
  animation: svelte-uo3tkz-altcha-spinner 0.75s infinite linear;transform-origin:center;}

@keyframes svelte-uo3tkz-altcha-spinner {
  100% {
    transform: rotate(360deg);
  }
}`
};
function ua(e, t) {
  var _n, mn;
  fo(t, !0), Ei(e, sa);
  let r = R(t, "auto", 7, void 0), o = R(t, "blockspam", 7, void 0), l = R(t, "challengeurl", 7, void 0), i = R(t, "challengejson", 7, void 0), s = R(t, "credentials", 7, void 0), c = R(t, "customfetch", 7, void 0), f = R(t, "debug", 7, !1), d = R(t, "delay", 7, 0), _ = R(t, "expire", 7, void 0), h = R(t, "floating", 7, void 0), g = R(t, "floatinganchor", 7, void 0), p = R(t, "floatingoffset", 7, void 0), C = R(t, "floatingpersist", 7, !1), T = R(t, "hidefooter", 7, !1), O = R(t, "hidelogo", 7, !1), we = R(t, "id", 7, void 0), re = R(t, "language", 7, void 0), j = R(t, "name", 7, "altcha"), ae = R(t, "maxnumber", 7, 1e6), Fe = R(t, "mockerror", 7, !1), V = R(t, "obfuscated", 7, void 0), ve = R(t, "plugins", 7, void 0), Ie = R(t, "refetchonexpire", 7, !0), Ke = R(t, "sentinel", 7, void 0), ye = R(t, "spamfilter", 7, !1), lt = R(t, "strings", 7, void 0), fe = R(t, "test", 7, !1), se = R(t, "verifyurl", 7, void 0), it = R(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), bt = R(t, "workerurl", 7, void 0);
  const Lr = ["SHA-256", "SHA-384", "SHA-512"], xo = "https://altcha.org/", Ve = (n, u) => {
    t.$$host.dispatchEvent(new CustomEvent(n, { detail: u }));
  }, Pr = (mn = (_n = document.documentElement.lang) == null ? void 0 : _n.split("-")) == null ? void 0 : mn[0], ir = /* @__PURE__ */ He(() => {
    var n;
    return l() && new URL(l(), location.origin).host.endsWith(".altcha.org") && !!((n = l()) != null && n.includes("apiKey=ckey_"));
  }), ar = /* @__PURE__ */ He(() => i() ? Jr(i()) : void 0), Ao = /* @__PURE__ */ He(() => lt() ? Jr(lt()) : {}), D = /* @__PURE__ */ He(() => ({
    ...Vr(),
    ...a(Ao)
  })), Or = /* @__PURE__ */ He(() => we() || `${j()}_checkbox_${Math.round(Math.random() * 1e8)}`);
  let wt = le(!1), H = le(null), A = le(F(k.UNVERIFIED)), Q = le(void 0), yt = le(null), Me = le(null), sr = le(null), at = le(null), M = le(null), Xe = le(null), ke = null, Y = le(null), Qe = le(!1), Ue = [], ur = le(!1), $e = le(null);
  yr(() => {
    Vo(a(Xe));
  }), yr(() => {
    Mo(a(A));
  }), Ni(() => {
    Ro(), a(M) && (a(M).removeEventListener("submit", Hr), a(M).removeEventListener("reset", Yr), a(M).removeEventListener("focusin", Br), w(M, null)), ke && (clearTimeout(ke), ke = null), document.removeEventListener("click", jr), document.removeEventListener("scroll", qr), window.removeEventListener("resize", Zr);
  }), yo(() => {
    var n;
    S("mounted", "1.4.2"), S("workers", it()), No(), S("plugins", Ue.length ? Ue.map((u) => u.constructor.pluginName).join(", ") : "none"), fe() && S("using test mode"), _() && cr(_()), r() !== void 0 && S("auto", r()), h() !== void 0 && Xr(h()), w(M, F((n = a(Q)) == null ? void 0 : n.closest("form"))), a(M) && (a(M).addEventListener("submit", Hr, { capture: !0 }), a(M).addEventListener("reset", Yr), (r() === "onfocus" || C() === "focus") && a(M).addEventListener("focusin", Br)), r() === "onload" && (V() ? kt() : Se()), a(ir) && (T() || O()) && S("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      Ve("load");
    });
  });
  function Dt(n, u) {
    return btoa(JSON.stringify({
      algorithm: n.algorithm,
      challenge: n.challenge,
      number: u.number,
      salt: n.salt,
      signature: n.signature,
      test: fe() ? !0 : void 0,
      took: u.took
    }));
  }
  function Ro() {
    for (const n of Ue)
      n.destroy();
  }
  function Fr() {
    l() && Ie() && a(A) === k.VERIFIED ? Se() : st(k.EXPIRED, a(D).expired);
  }
  async function Io() {
    var n;
    if (Fe())
      throw S("mocking error"), new Error("Mocked error.");
    if (a(ar))
      return S("using provided json data"), a(ar);
    if (fe())
      return S("generating test challenge", { test: fe() }), Fi(typeof fe() != "boolean" ? +fe() : void 0);
    {
      if (!l() && a(M)) {
        const E = a(M).getAttribute("action");
        E != null && E.includes("/form/") && l(E + "/altcha");
      }
      if (!l())
        throw new Error("Attribute challengeurl not set.");
      S("fetching challenge from", l());
      let u = null, v = null;
      if (c())
        if (S("using customfetch"), typeof c() == "string") {
          if (u = globalThis[c()] || null, !u)
            throw new Error(`Custom fetch function not found: ${c()}`);
        } else
          u = c();
      const b = {
        credentials: typeof s() == "boolean" ? "include" : s(),
        headers: ye() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      };
      if (u) {
        if (v = await u(l(), b), !v || !(v instanceof Response))
          throw new Error("Custom fetch function did not return a response.");
      } else
        v = await fetch(l(), b);
      if (v.status !== 200)
        throw new Error(`Server responded with ${v.status}.`);
      const m = v.headers.get("X-Altcha-Config"), I = await v.json(), y = new URLSearchParams((n = I.salt.split("?")) == null ? void 0 : n[1]), q = y.get("expires") || y.get("expire");
      if (q) {
        const E = new Date(+q * 1e3), B = isNaN(E.getTime()) ? 0 : E.getTime() - Date.now();
        B > 0 && cr(B);
      }
      if (m)
        try {
          const E = JSON.parse(m);
          E && typeof E == "object" && (E.verifyurl && (E.verifyurl = Ur(E.verifyurl)), tn(E));
        } catch (E) {
          S("unable to configure from X-Altcha-Config", E);
        }
      return I;
    }
  }
  function $o(n) {
    var v, b;
    const u = (v = a(M)) == null ? void 0 : v.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((b = u == null ? void 0 : u.value) == null ? void 0 : b.slice(u.value.indexOf("@"))) || void 0;
  }
  function Vr(n = [
    re() || "",
    document.documentElement.lang || "",
    ...navigator.languages
  ]) {
    const u = Object.keys(globalThis.altchaI18n).map((b) => b.toLowerCase()), v = n.reduce(
      (b, m) => (m = m.toLowerCase(), b || (globalThis.altchaI18n[m] ? m : null) || u.find((I) => m.split("-")[0] === I.split("-")[0]) || null),
      null
    );
    return globalThis.altchaI18n[v || "en"];
  }
  function So() {
    return ye() === "ipAddress" ? {
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
    } : typeof ye() == "object" ? ye() : {
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
  function Mr(n) {
    var v;
    return [
      ...((v = a(M)) == null ? void 0 : v.querySelectorAll(n != null && n.length ? n.map((b) => `input[name="${b}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (b, m) => {
        const I = m.name, y = m.value;
        return I && y && (b[I] = /\n/.test(y) ? y.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : y), b;
      },
      {}
    );
  }
  function Ur(n) {
    const u = new URL(l() || location.origin), v = new URL(n, u);
    return v.search || (v.search = u.search), v.toString();
  }
  function No() {
    const n = ve() !== void 0 ? ve().split(",") : void 0;
    for (const u of globalThis.altchaPlugins)
      (!n || n.includes(u.pluginName)) && Ue.push(new u({
        el: a(Q),
        clarify: kt,
        dispatch: Ve,
        getConfiguration: rn,
        getFloatingAnchor: nn,
        getState: on,
        log: S,
        reset: st,
        solve: en,
        setState: Ee,
        setFloatingAnchor: an,
        verify: Se
      }));
  }
  function S(...n) {
    (f() || n.some((u) => u instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${j()}]`, ...n);
  }
  function zo() {
    w(Y, F(X.PAUSED));
  }
  function To(n) {
    w(Y, F(X.ERROR));
  }
  function Do() {
    w(Y, F(X.READY));
  }
  function Lo() {
    w(Y, F(X.LOADING));
  }
  function Po() {
    w(Y, F(X.PLAYING));
  }
  function Oo() {
    w(Y, F(X.PAUSED));
  }
  function Fo(n) {
    if (n.preventDefault(), n.stopPropagation(), a(H)) {
      const u = new FormData(n.target);
      w(Qe, !0), Kr(Dt(a(H).challenge, a(H).solution), String(u.get("code"))).then(({ reason: v, verified: b }) => {
        b ? (w(H, null), Ee(k.VERIFIED), S("verified"), pr().then(() => {
          var m;
          (m = a(sr)) == null || m.focus(), Ve("verified", { payload: a($e) });
        })) : (st(), w(Xe, F(v || "Verification failed")));
      }).catch((v) => {
        w(H, null), Ee(k.ERROR, v), S("sentinel verification failed:", v);
      }).finally(() => {
        w(Qe, !1);
      });
    }
  }
  function jr(n) {
    var v;
    const u = n.target;
    h() && u && !a(Q).contains(u) && (a(A) === k.VERIFIED && C() === !1 || a(A) === k.VERIFIED && C() === "focus" && !((v = a(M)) != null && v.matches(":focus-within")) || r() === "off" && a(A) === k.UNVERIFIED) && ln();
  }
  function qr() {
    h() && a(A) !== k.UNVERIFIED && Et();
  }
  function Vo(n) {
    for (const u of Ue)
      typeof u.onErrorChange == "function" && u.onErrorChange(a(Xe));
  }
  function Br(n) {
    a(A) === k.UNVERIFIED ? Se() : h() && C() === "focus" && a(A) === k.VERIFIED && fr();
  }
  function Hr(n) {
    const u = n.target, v = n.submitter;
    u != null && u.hasAttribute("data-code-challenge-form") || (a(M) && r() === "onsubmit" ? a(A) === k.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), Se().then(() => {
      var m;
      v && ["INPUT", "BUTTON"].includes(v.tagName) && v.getAttribute("name") ? v.click() : (m = a(M)) == null || m.requestSubmit();
    })) : a(A) !== k.VERIFIED && (n.preventDefault(), n.stopPropagation(), a(A) === k.VERIFYING && Gr()) : a(M) && h() && r() === "off" && a(A) === k.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), fr()));
  }
  function Yr() {
    st();
  }
  function Gr() {
    a(A) === k.VERIFYING && a(D).waitAlert && alert(a(D).waitAlert);
  }
  function Wr() {
    a(Me) ? a(Me).paused ? (a(Me).currentTime = 0, a(Me).play()) : a(Me).pause() : (w(ur, !0), requestAnimationFrame(() => {
      var n;
      (n = a(Me)) == null || n.play();
    }));
  }
  function Mo(n) {
    for (const u of Ue)
      typeof u.onStateChange == "function" && u.onStateChange(a(A));
    h() && a(A) !== k.UNVERIFIED && requestAnimationFrame(() => {
      Et();
    }), w(wt, a(A) === k.VERIFIED);
  }
  function Zr() {
    h() && Et();
  }
  function Jr(n) {
    return JSON.parse(n);
  }
  async function Uo(n) {
    if (!se())
      throw new Error("Attribute verifyurl not set.");
    S("requesting server verification from", se());
    const u = { payload: n };
    if (ye() !== !1) {
      const {
        blockedCountries: m,
        classifier: I,
        disableRules: y,
        email: q,
        expectedLanguages: E,
        expectedCountries: B,
        fields: ne,
        ipAddress: qe,
        text: hr,
        timeZone: Pt
      } = So();
      u.blockedCountries = m, u.classifier = I, u.disableRules = y, u.email = q === !1 ? void 0 : $o(q), u.expectedCountries = B, u.expectedLanguages = E || (Pr ? [Pr] : void 0), u.fields = ne === !1 ? void 0 : Mr(ne), u.ipAddress = qe === !1 ? void 0 : qe || "auto", u.text = hr, u.timeZone = Pt === !1 ? void 0 : Pt || Tn();
    }
    const v = await fetch(se(), {
      body: JSON.stringify(u),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (v.status !== 200)
      throw new Error(`Server responded with ${v.status}.`);
    const b = await v.json();
    if (b != null && b.payload && w($e, F(b.payload)), Ve("serververification", b), o() && b.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  async function Kr(n, u) {
    if (!se())
      throw new Error("Attribute verifyurl not set.");
    S("requesting sentinel verification from", se());
    const v = { code: u, payload: n };
    Ke() && (v.fields = Ke().fields ? Mr() : void 0, v.timeZone = Ke().timeZone ? Tn() : void 0);
    const b = await fetch(se(), {
      body: JSON.stringify(v),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (b.status !== 200)
      throw new Error(`Server responded with ${b.status}.`);
    const m = await b.json();
    return m != null && m.payload && w($e, F(m.payload)), Ve("sentinelverification", m), m;
  }
  function cr(n) {
    S("expire", n), ke && (clearTimeout(ke), ke = null), n < 1 ? Fr() : ke = setTimeout(Fr, n);
  }
  function Xr(n) {
    S("floating", n), h() !== n && (a(Q).style.left = "", a(Q).style.top = ""), h(n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : h()), h() ? (r() || r("onsubmit"), document.addEventListener("scroll", qr), document.addEventListener("click", jr), window.addEventListener("resize", Zr)) : r() === "onsubmit" && r(void 0);
  }
  function Qr(n) {
    if (!n.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (n.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!Lr.includes(n.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${Lr.join(", ")}`);
    if (!n.challenge || n.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!n.salt || n.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function en(n) {
    let u = null;
    if ("Worker" in window) {
      try {
        u = await jo(n, n.maxNumber || n.maxnumber || ae());
      } catch (v) {
        S(v);
      }
      if ((u == null ? void 0 : u.number) !== void 0 || "obfuscated" in n)
        return { data: n, solution: u };
    }
    if ("obfuscated" in n) {
      const v = await ji(n.obfuscated, n.key, n.maxNumber || n.maxnumber);
      return { data: n, solution: await v.promise };
    }
    return {
      data: n,
      solution: await Vi(n.challenge, n.salt, n.algorithm, n.maxNumber || n.maxnumber || ae()).promise
    };
  }
  async function jo(n, u = typeof fe() == "number" ? fe() : n.maxNumber || n.maxnumber || ae(), v = Math.ceil(it())) {
    const b = [];
    v = Math.min(16, u, Math.max(1, v));
    for (let y = 0; y < v; y++)
      b.push(altchaCreateWorker(bt()));
    const m = Math.ceil(u / v), I = await Promise.all(b.map((y, q) => {
      const E = q * m;
      return new Promise((B) => {
        y.addEventListener("message", (ne) => {
          if (ne.data)
            for (const qe of b)
              qe !== y && qe.postMessage({ type: "abort" });
          B(ne.data);
        }), y.postMessage({
          payload: n,
          max: E + m,
          start: E,
          type: "work"
        });
      });
    }));
    for (const y of b)
      y.terminate();
    return I.find((y) => !!y) || null;
  }
  async function kt() {
    if (!V()) {
      Ee(k.ERROR);
      return;
    }
    const n = Ue.find((u) => u.constructor.pluginName === "obfuscation");
    if (!n || !("clarify" in n)) {
      Ee(k.ERROR), S("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in n && typeof n.clarify == "function")
      return n.clarify();
  }
  function tn(n) {
    n.obfuscated !== void 0 && V(n.obfuscated), n.auto !== void 0 && (r(n.auto), r() === "onload" && (V() ? kt() : Se())), n.blockspam !== void 0 && o(!!n.blockspam), n.customfetch !== void 0 && c(n.customfetch), n.floatinganchor !== void 0 && g(n.floatinganchor), n.delay !== void 0 && d(n.delay), n.floatingoffset !== void 0 && p(n.floatingoffset), n.floating !== void 0 && Xr(n.floating), n.expire !== void 0 && (cr(n.expire), _(n.expire)), n.challenge && (i(typeof n.challenge == "string" ? n.challenge : JSON.stringify(n.challenge)), Qr(a(ar))), n.challengeurl !== void 0 && l(n.challengeurl), n.debug !== void 0 && f(!!n.debug), n.hidefooter !== void 0 && T(!!n.hidefooter), n.hidelogo !== void 0 && O(!!n.hidelogo), n.language !== void 0 && lt(Vr([n.language])), n.maxnumber !== void 0 && ae(+n.maxnumber), n.mockerror !== void 0 && Fe(!!n.mockerror), n.name !== void 0 && j(n.name), n.refetchonexpire !== void 0 && Ie(!!n.refetchonexpire), n.sentinel !== void 0 && typeof n.sentinel == "object" && Ke(n.sentinel), n.spamfilter !== void 0 && ye(typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && lt(typeof n.strings == "string" ? n.strings : JSON.stringify(n.strings)), n.test !== void 0 && fe(typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && se(n.verifyurl), n.workers !== void 0 && it(+n.workers), n.workerurl !== void 0 && bt(n.workerurl);
  }
  function rn() {
    return {
      auto: r(),
      blockspam: o(),
      challengeurl: l(),
      debug: f(),
      delay: d(),
      expire: _(),
      floating: h(),
      floatinganchor: g(),
      floatingoffset: p(),
      hidefooter: T(),
      hidelogo: O(),
      name: j(),
      maxnumber: ae(),
      mockerror: Fe(),
      obfuscated: V(),
      refetchonexpire: Ie(),
      spamfilter: ye(),
      strings: a(D),
      test: fe(),
      verifyurl: se(),
      workers: it(),
      workerurl: bt()
    };
  }
  function nn() {
    return a(at);
  }
  function qo(n) {
    return Ue.find((u) => u.constructor.pluginName === n);
  }
  function on() {
    return a(A);
  }
  function ln() {
    a(Q).style.display = "none";
  }
  function Et(n = 20) {
    var u;
    if (a(Q))
      if (a(at) || w(at, F((g() ? document.querySelector(g()) : (u = a(M)) == null ? void 0 : u.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || a(M))), a(at)) {
        const v = parseInt(p(), 10) || 12, b = a(at).getBoundingClientRect(), m = a(Q).getBoundingClientRect(), I = document.documentElement.clientHeight, y = document.documentElement.clientWidth, q = h() === "auto" ? b.bottom + m.height + v + n > I : h() === "top", E = Math.max(n, Math.min(y - n - m.width, b.left + b.width / 2 - m.width / 2));
        if (q ? a(Q).style.top = `${b.top - (m.height + v)}px` : a(Q).style.top = `${b.bottom + v}px`, a(Q).style.left = `${E}px`, a(Q).setAttribute("data-floating", q ? "top" : "bottom"), a(yt)) {
          const B = a(yt).getBoundingClientRect();
          a(yt).style.left = b.left - E + b.width / 2 - B.width / 2 + "px";
        }
      } else
        S("unable to find floating anchor element");
  }
  function st(n = k.UNVERIFIED, u = null) {
    ke && (clearTimeout(ke), ke = null), w(wt, !1), w($e, null), w(H, null), w(ur, !1), w(Y, null), Ee(n, u);
  }
  function an(n) {
    w(at, F(n));
  }
  function Ee(n, u = null) {
    w(A, F(n)), w(Xe, F(u)), Ve("statechange", {
      payload: a($e),
      state: a(A)
    });
  }
  function fr() {
    a(Q).style.display = "block", h() && Et();
  }
  async function Se() {
    return st(k.VERIFYING), await new Promise((n) => setTimeout(n, d() || 0)), Io().then((n) => (Qr(n), S("challenge", n), en(n))).then(({ data: n, solution: u }) => {
      var v;
      if (S("solution", u), !u || n && "challenge" in n && !("clearText" in u))
        if ((u == null ? void 0 : u.number) !== void 0 && "challenge" in n)
          if (se() && "codeChallenge" in n)
            ((v = document.activeElement) == null ? void 0 : v.tagName) === "INPUT" && document.activeElement.blur(), w(H, F({ challenge: n, solution: u }));
          else {
            if (se() && Ke() !== void 0)
              return Kr(Dt(n, u));
            if (se())
              return Uo(Dt(n, u));
            w($e, F(Dt(n, u))), S("payload", a($e));
          }
        else
          throw S("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      a(H) ? (Ee(k.CODE), pr().then(() => {
        Ve("code", { codeChallenge: a(H) });
      })) : (Ee(k.VERIFIED), S("verified"), pr().then(() => {
        Ve("verified", { payload: a($e) });
      }));
    }).catch((n) => {
      S(n), Ee(k.ERROR, n.message);
    });
  }
  var sn = aa(), un = Rt(sn);
  ki(un, t, "default", {});
  var Ct = J(un, 2), dr = Z(Ct), Lt = Z(dr);
  let cn;
  var fn = Z(Lt);
  {
    var Bo = (n) => {
      br(n);
    };
    K(fn, (n) => {
      a(A) === k.VERIFYING && n(Bo);
    });
  }
  var je = J(fn, 2);
  Sn(je), je.__change = [
    Yi,
    A,
    ye,
    M,
    wt,
    V,
    kt,
    Se
  ], Vt(je, (n) => w(sr, n), () => a(sr)), W(Lt);
  var xt = J(Lt, 2), Ho = Z(xt);
  {
    var Yo = (n) => {
      var u = Ft(), v = Rt(u);
      et(v, () => a(D).verified), U(n, u);
    }, Go = (n, u) => {
      {
        var v = (m) => {
          var I = Ft(), y = Rt(I);
          et(y, () => a(D).verifying), U(m, I);
        }, b = (m, I) => {
          {
            var y = (E) => {
              var B = Ft(), ne = Rt(B);
              et(ne, () => a(D).verificationRequired), U(E, B);
            }, q = (E) => {
              var B = Ft(), ne = Rt(B);
              et(ne, () => a(D).label), U(E, B);
            };
            K(
              m,
              (E) => {
                a(A) === k.CODE ? E(y) : E(q, !1);
              },
              I
            );
          }
        };
        K(
          n,
          (m) => {
            a(A) === k.VERIFYING ? m(v) : m(b, !1);
          },
          u
        );
      }
    };
    K(Ho, (n) => {
      a(A) === k.VERIFIED ? n(Yo) : n(Go, !1);
    });
  }
  W(xt);
  var dn = J(xt, 2);
  {
    var Wo = (n) => {
      var u = Wi();
      Sn(u), Ne(() => {
        $(u, "name", j()), Ii(u, a($e));
      }), U(n, u);
    };
    K(dn, (n) => {
      a(A) === k.VERIFIED && n(Wo);
    });
  }
  var hn = J(dn, 2);
  {
    var Zo = (n) => {
      var u = Zi(), v = Z(u);
      $(v, "href", xo), W(u), Ne(() => $(v, "aria-label", a(D).ariaLinkLabel)), U(n, u);
    };
    K(hn, (n) => {
      (O() !== !0 || a(ir)) && n(Zo);
    });
  }
  var Jo = J(hn, 2);
  {
    var Ko = (n) => {
      var u = ta(), v = J(Z(u), 2), b = Z(v), m = J(b, 2);
      gi(m), m.__keydown = [
        Bi,
        Wr
      ];
      var I = J(m, 2), y = Z(I), q = Z(y);
      {
        var E = (ge) => {
          var G = Qi();
          G.__click = Wr;
          var Ot = Z(G);
          {
            var At = (ut) => {
              br(ut, () => 20);
            }, ol = (ut, ll) => {
              {
                var il = (ct) => {
                  var vr = Ji();
                  U(ct, vr);
                }, al = (ct, vr) => {
                  {
                    var sl = (ft) => {
                      var gr = Ki();
                      U(ft, gr);
                    }, ul = (ft) => {
                      var gr = Xi();
                      U(ft, gr);
                    };
                    K(
                      ct,
                      (ft) => {
                        a(Y) === X.PLAYING ? ft(sl) : ft(ul, !1);
                      },
                      vr
                    );
                  }
                };
                K(
                  ut,
                  (ct) => {
                    a(Y) === X.ERROR ? ct(il) : ct(al, !1);
                  },
                  ll
                );
              }
            };
            K(Ot, (ut) => {
              a(Y) === X.LOADING ? ut(At) : ut(ol, !1);
            });
          }
          W(G), Ne(() => {
            $(G, "title", a(D).getAudioChallenge), G.disabled = a(Y) === X.LOADING || a(Y) === X.ERROR || a(Qe), $(G, "aria-label", a(Y) === X.LOADING ? a(D).loading : a(D).getAudioChallenge);
          }), U(ge, G);
        };
        K(q, (ge) => {
          a(H).challenge.codeChallenge.audio && ge(E);
        });
      }
      var B = J(q, 2);
      B.__click = [Hi, Se], W(y);
      var ne = J(y, 2), qe = Z(ne);
      {
        var hr = (ge) => {
          br(ge, () => 16);
        };
        K(qe, (ge) => {
          a(Qe) && ge(hr);
        });
      }
      var Pt = J(qe);
      W(ne), W(I);
      var rl = J(I, 2);
      {
        var nl = (ge) => {
          var G = ea(), Ot = Z(G);
          W(G), Vt(G, (At) => w(Me, At), () => a(Me)), Ne((At) => $(Ot, "src", At), [
            () => Ur(a(H).challenge.codeChallenge.audio)
          ]), Be("loadstart", G, Lo), Be("canplay", G, Do), Be("pause", G, Oo), Be("playing", G, Po), Be("ended", G, zo), Be("error", Ot, To), U(ge, G);
        };
        K(rl, (ge) => {
          a(H).challenge.codeChallenge.audio && a(ur) && ge(nl);
        });
      }
      W(v), W(u), Ne(() => {
        $(u, "aria-label", a(D).verificationRequired), $(b, "src", a(H).challenge.codeChallenge.image), $(m, "minlength", a(H).challenge.codeChallenge.length || 1), $(m, "maxlength", a(H).challenge.codeChallenge.length), $(m, "placeholder", a(D).enterCode), $(m, "aria-label", a(Y) === X.LOADING ? a(D).loading : a(Y) === X.PLAYING ? "" : a(D).enterCodeAria), $(m, "aria-live", a(Y) ? "assertive" : "polite"), $(m, "aria-busy", a(Y) === X.LOADING), m.disabled = a(Qe), $(B, "aria-label", a(D).reload), $(B, "title", a(D).reload), B.disabled = a(Qe), ne.disabled = a(Qe), $(ne, "aria-label", a(D).verify), bi(Pt, ` ${a(D).verify ?? ""}`);
      }), Be("submit", v, Fo, !0), U(n, u);
    };
    K(Jo, (n) => {
      var u;
      (u = a(H)) != null && u.challenge.codeChallenge && n(Ko);
    });
  }
  W(dr);
  var vn = J(dr, 2);
  {
    var Xo = (n) => {
      var u = oa(), v = J(Z(u), 2);
      {
        var b = (I) => {
          var y = ra(), q = Z(y);
          et(q, () => a(D).expired), W(y), Ne(() => $(y, "title", a(Xe))), U(I, y);
        }, m = (I) => {
          var y = na(), q = Z(y);
          et(q, () => a(D).error), W(y), Ne(() => $(y, "title", a(Xe))), U(I, y);
        };
        K(v, (I) => {
          a(A) === k.EXPIRED ? I(b) : I(m, !1);
        });
      }
      W(u), U(n, u);
    };
    K(vn, (n) => {
      (a(Xe) || a(A) === k.EXPIRED) && n(Xo);
    });
  }
  var gn = J(vn, 2);
  {
    var Qo = (n) => {
      var u = la(), v = Z(u), b = Z(v);
      et(b, () => a(D).footer), W(v), W(u), U(n, u);
    };
    K(gn, (n) => {
      a(D).footer && (T() !== !0 || a(ir)) && n(Qo);
    });
  }
  var el = J(gn, 2);
  {
    var tl = (n) => {
      var u = ia();
      Vt(u, (v) => w(yt, v), () => a(yt)), U(n, u);
    };
    K(el, (n) => {
      h() && n(tl);
    });
  }
  return W(Ct), Vt(Ct, (n) => w(Q, n), () => a(Q)), Ne(
    (n) => {
      var u;
      $(Ct, "data-state", a(A)), $(Ct, "data-floating", h()), cn = xi(Lt, 1, "altcha-checkbox svelte-uo3tkz", null, cn, n), $(je, "id", a(Or)), je.required = r() !== "onsubmit" && (!h() || r() !== "off"), $(je, "aria-hidden", a(A) === k.VERIFYING), $(xt, "for", a(Or)), $(xt, "aria-hidden", !!((u = a(H)) != null && u.challenge.codeChallenge));
    },
    [
      () => ({
        "altcha-checkbox-verifying": a(A) === k.VERIFYING
      })
    ]
  ), Be("invalid", je, Gr), Si(je, () => a(wt), (n) => w(wt, n)), U(e, sn), ho({
    clarify: kt,
    configure: tn,
    getConfiguration: rn,
    getFloatingAnchor: nn,
    getPlugin: qo,
    getState: on,
    hide: ln,
    repositionFloating: Et,
    reset: st,
    setFloatingAnchor: an,
    setState: Ee,
    show: fr,
    verify: Se,
    get auto() {
      return r();
    },
    set auto(n = void 0) {
      r(n), x();
    },
    get blockspam() {
      return o();
    },
    set blockspam(n = void 0) {
      o(n), x();
    },
    get challengeurl() {
      return l();
    },
    set challengeurl(n = void 0) {
      l(n), x();
    },
    get challengejson() {
      return i();
    },
    set challengejson(n = void 0) {
      i(n), x();
    },
    get credentials() {
      return s();
    },
    set credentials(n = void 0) {
      s(n), x();
    },
    get customfetch() {
      return c();
    },
    set customfetch(n = void 0) {
      c(n), x();
    },
    get debug() {
      return f();
    },
    set debug(n = !1) {
      f(n), x();
    },
    get delay() {
      return d();
    },
    set delay(n = 0) {
      d(n), x();
    },
    get expire() {
      return _();
    },
    set expire(n = void 0) {
      _(n), x();
    },
    get floating() {
      return h();
    },
    set floating(n = void 0) {
      h(n), x();
    },
    get floatinganchor() {
      return g();
    },
    set floatinganchor(n = void 0) {
      g(n), x();
    },
    get floatingoffset() {
      return p();
    },
    set floatingoffset(n = void 0) {
      p(n), x();
    },
    get floatingpersist() {
      return C();
    },
    set floatingpersist(n = !1) {
      C(n), x();
    },
    get hidefooter() {
      return T();
    },
    set hidefooter(n = !1) {
      T(n), x();
    },
    get hidelogo() {
      return O();
    },
    set hidelogo(n = !1) {
      O(n), x();
    },
    get id() {
      return we();
    },
    set id(n = void 0) {
      we(n), x();
    },
    get language() {
      return re();
    },
    set language(n = void 0) {
      re(n), x();
    },
    get name() {
      return j();
    },
    set name(n = "altcha") {
      j(n), x();
    },
    get maxnumber() {
      return ae();
    },
    set maxnumber(n = 1e6) {
      ae(n), x();
    },
    get mockerror() {
      return Fe();
    },
    set mockerror(n = !1) {
      Fe(n), x();
    },
    get obfuscated() {
      return V();
    },
    set obfuscated(n = void 0) {
      V(n), x();
    },
    get plugins() {
      return ve();
    },
    set plugins(n = void 0) {
      ve(n), x();
    },
    get refetchonexpire() {
      return Ie();
    },
    set refetchonexpire(n = !0) {
      Ie(n), x();
    },
    get sentinel() {
      return Ke();
    },
    set sentinel(n = void 0) {
      Ke(n), x();
    },
    get spamfilter() {
      return ye();
    },
    set spamfilter(n = !1) {
      ye(n), x();
    },
    get strings() {
      return lt();
    },
    set strings(n = void 0) {
      lt(n), x();
    },
    get test() {
      return fe();
    },
    set test(n = !1) {
      fe(n), x();
    },
    get verifyurl() {
      return se();
    },
    set verifyurl(n = void 0) {
      se(n), x();
    },
    get workers() {
      return it();
    },
    set workers(n = Math.min(16, navigator.hardwareConcurrency || 8)) {
      it(n), x();
    },
    get workerurl() {
      return bt();
    },
    set workerurl(n = void 0) {
      bt(n), x();
    }
  });
}
pi(["change", "keydown", "click"]);
customElements.define("altcha-widget", Pi(
  ua,
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
globalThis.altchaCreateWorker = (e) => e ? new Worker(new URL(e)) : new dl();
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {};
export {
  ua as Altcha
};
