var fl = Object.defineProperty;
var bn = (e) => {
  throw TypeError(e);
};
var dl = (e, t, r) => t in e ? fl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var me = (e, t, r) => dl(e, typeof t != "symbol" ? t + "" : t, r), wn = (e, t, r) => t.has(e) || bn("Cannot " + r);
var le = (e, t, r) => (wn(e, t, "read from private field"), r ? r.call(e) : t.get(e)), mr = (e, t, r) => t.has(e) ? bn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), pr = (e, t, r, o) => (wn(e, t, "write to private field"), o ? o.call(e, r) : t.set(e, r), r);
const Pn = `(function(){"use strict";const d=new TextEncoder;function p(e){return[...new Uint8Array(e)].map(t=>t.toString(16).padStart(2,"0")).join("")}async function b(e,t,r){if(typeof crypto>"u"||!("subtle"in crypto)||!("digest"in crypto.subtle))throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");return p(await crypto.subtle.digest(r.toUpperCase(),d.encode(e+t)))}function w(e,t,r="SHA-256",n=1e6,s=0){const o=new AbortController,a=Date.now();return{promise:(async()=>{for(let c=s;c<=n;c+=1){if(o.signal.aborted)return null;if(await b(t,c,r)===e)return{number:c,took:Date.now()-a}}return null})(),controller:o}}function h(e){const t=atob(e),r=new Uint8Array(t.length);for(let n=0;n<t.length;n++)r[n]=t.charCodeAt(n);return r}function g(e,t=12){const r=new Uint8Array(t);for(let n=0;n<t;n++)r[n]=e%256,e=Math.floor(e/256);return r}async function m(e,t="",r=1e6,n=0){const s="AES-GCM",o=new AbortController,a=Date.now(),l=async()=>{for(let u=n;u<=r;u+=1){if(o.signal.aborted||!c||!y)return null;try{const f=await crypto.subtle.decrypt({name:s,iv:g(u)},c,y);if(f)return{clearText:new TextDecoder().decode(f),took:Date.now()-a}}catch{}}return null};let c=null,y=null;try{y=h(e);const u=await crypto.subtle.digest("SHA-256",d.encode(t));c=await crypto.subtle.importKey("raw",u,s,!1,["decrypt"])}catch{return{promise:Promise.reject(),controller:o}}return{promise:l(),controller:o}}let i;onmessage=async e=>{const{type:t,payload:r,start:n,max:s}=e.data;let o=null;if(t==="abort")i==null||i.abort(),i=void 0;else if(t==="work"){if("obfuscated"in r){const{key:a,obfuscated:l}=r||{};o=await m(l,a,s,n)}else{const{algorithm:a,challenge:l,salt:c}=r||{};o=w(l,c,a,s,n)}i=o.controller,o.promise.then(a=>{self.postMessage(a&&{...a,worker:!0})})}}})();
`, yn = typeof self < "u" && self.Blob && new Blob([Pn], { type: "text/javascript;charset=utf-8" });
function hl(e) {
  let t;
  try {
    if (t = yn && (self.URL || self.webkitURL).createObjectURL(yn), !t) throw "";
    const r = new Worker(t, {
      name: e == null ? void 0 : e.name
    });
    return r.addEventListener("error", () => {
      (self.URL || self.webkitURL).revokeObjectURL(t);
    }), r;
  } catch {
    return new Worker(
      "data:text/javascript;charset=utf-8," + encodeURIComponent(Pn),
      {
        name: e == null ? void 0 : e.name
      }
    );
  } finally {
    t && (self.URL || self.webkitURL).revokeObjectURL(t);
  }
}
const vl = "5";
var Ln;
typeof window < "u" && ((Ln = window.__svelte ?? (window.__svelte = {})).v ?? (Ln.v = /* @__PURE__ */ new Set())).add(vl);
const gl = 1, _l = 4, ml = 8, pl = 16, bl = 1, wl = 2, Ar = "[", On = "[!", Fn = "]", vt = {}, ie = Symbol(), yl = "http://www.w3.org/1999/xhtml", kn = !1, be = 2, Vn = 4, Qt = 8, Rr = 16, Pe = 32, nt = 64, Bt = 128, ge = 256, Ht = 512, de = 1024, Oe = 2048, pt = 4096, gt = 8192, er = 16384, kl = 32768, Ir = 65536, El = 1 << 19, Mn = 1 << 20, St = Symbol("$state"), Un = Symbol("legacy props"), Cl = Symbol("");
var jn = Array.isArray, xl = Array.prototype.indexOf, Al = Array.from, Yt = Object.keys, Gt = Object.defineProperty, tt = Object.getOwnPropertyDescriptor, Rl = Object.getOwnPropertyDescriptors, Il = Object.prototype, $l = Array.prototype, qn = Object.getPrototypeOf;
function Bn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Sl(e, t, r = !1) {
  return e === void 0 ? r ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
const Nl = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let zt = [], Tt = [];
function Hn() {
  var e = zt;
  zt = [], Bn(e);
}
function Yn() {
  var e = Tt;
  Tt = [], Bn(e);
}
function tr(e) {
  zt.length === 0 && queueMicrotask(Hn), zt.push(e);
}
function zl(e) {
  Tt.length === 0 && Nl(Yn), Tt.push(e);
}
function En() {
  zt.length > 0 && Hn(), Tt.length > 0 && Yn();
}
function Gn(e) {
  return e === this.v;
}
function Tl(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function $r(e) {
  return !Tl(e, this.v);
}
function Dl(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ll() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Pl(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ol() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Fl() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Vl(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Ml() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ul() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function jl() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function ql() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Bl = !1;
function xe(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Gn,
    rv: 0,
    wv: 0
  };
  return r;
}
function ae(e) {
  return /* @__PURE__ */ Hl(xe(e));
}
// @__NO_SIDE_EFFECTS__
function Wn(e, t = !1) {
  const r = xe(e);
  return t || (r.equals = $r), r;
}
// @__NO_SIDE_EFFECTS__
function Hl(e) {
  return N !== null && !pe && (N.f & be) !== 0 && (Ae === null ? Xl([e]) : Ae.push(e)), e;
}
function w(e, t) {
  return N !== null && !pe && go() && (N.f & (be | Rr)) !== 0 && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (Ae === null || !Ae.includes(e)) && ql(), Yl(e, t);
}
function Yl(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = ro(), Zn(e, Oe), z !== null && (z.f & de) !== 0 && (z.f & (Pe | nt)) === 0 && (ze === null ? Ql([e]) : ze.push(e))), t;
}
function Zn(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var o = r.length, l = 0; l < o; l++) {
      var a = r[l], s = a.f;
      (s & Oe) === 0 && (Ie(a, t), (s & (de | ge)) !== 0 && ((s & be) !== 0 ? Zn(
        /** @type {Derived} */
        a,
        pt
      ) : lr(
        /** @type {Effect} */
        a
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function He(e) {
  var t = be | Oe, r = N !== null && (N.f & be) !== 0 ? (
    /** @type {Derived} */
    N
  ) : null;
  return z === null || r !== null && (r.f & ge) !== 0 ? t |= ge : z.f |= Mn, {
    ctx: re,
    deps: null,
    effects: null,
    equals: Gn,
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
function Gl(e) {
  const t = /* @__PURE__ */ He(e);
  return t.equals = $r, t;
}
function Jn(e) {
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
function Wl(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & be) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Zl(e) {
  var t, r = z;
  Ze(Wl(e));
  try {
    Jn(e), t = oo(e);
  } finally {
    Ze(r);
  }
  return t;
}
function Kn(e) {
  var t = Zl(e), r = (Ye || (e.f & ge) !== 0) && e.deps !== null ? pt : de;
  Ie(e, r), e.equals(t) || (e.v = t, e.wv = ro());
}
function rr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let P = !1;
function ht(e) {
  P = e;
}
let L;
function Ge(e) {
  if (e === null)
    throw rr(), vt;
  return L = e;
}
function _t() {
  return Ge(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Je(L)
  );
}
function G(e) {
  if (P) {
    if (/* @__PURE__ */ Je(L) !== null)
      throw rr(), vt;
    L = e;
  }
}
function Jl() {
  for (var e = 0, t = L; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === Fn) {
        if (e === 0) return t;
        e -= 1;
      } else (r === Ar || r === On) && (e += 1);
    }
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Je(t)
    );
    t.remove(), t = o;
  }
}
function F(e, t = null, r) {
  if (typeof e != "object" || e === null || St in e)
    return e;
  const o = qn(e);
  if (o !== Il && o !== $l)
    return e;
  var l = /* @__PURE__ */ new Map(), a = jn(e), s = xe(0);
  a && l.set("length", xe(
    /** @type {any[]} */
    e.length
  ));
  var c;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(f, d, _) {
        (!("value" in _) || _.configurable === !1 || _.enumerable === !1 || _.writable === !1) && Ml();
        var v = l.get(d);
        return v === void 0 ? (v = xe(_.value), l.set(d, v)) : w(v, F(_.value, c)), !0;
      },
      deleteProperty(f, d) {
        var _ = l.get(d);
        if (_ === void 0)
          d in f && l.set(d, xe(ie));
        else {
          if (a && typeof d == "string") {
            var v = (
              /** @type {Source<number>} */
              l.get("length")
            ), h = Number(d);
            Number.isInteger(h) && h < v.v && w(v, h);
          }
          w(_, ie), Cn(s);
        }
        return !0;
      },
      get(f, d, _) {
        var x;
        if (d === St)
          return e;
        var v = l.get(d), h = d in f;
        if (v === void 0 && (!h || (x = tt(f, d)) != null && x.writable) && (v = xe(F(h ? f[d] : ie, c)), l.set(d, v)), v !== void 0) {
          var p = i(v);
          return p === ie ? void 0 : p;
        }
        return Reflect.get(f, d, _);
      },
      getOwnPropertyDescriptor(f, d) {
        var _ = Reflect.getOwnPropertyDescriptor(f, d);
        if (_ && "value" in _) {
          var v = l.get(d);
          v && (_.value = i(v));
        } else if (_ === void 0) {
          var h = l.get(d), p = h == null ? void 0 : h.v;
          if (h !== void 0 && p !== ie)
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
        if (d === St)
          return !0;
        var _ = l.get(d), v = _ !== void 0 && _.v !== ie || Reflect.has(f, d);
        if (_ !== void 0 || z !== null && (!v || (p = tt(f, d)) != null && p.writable)) {
          _ === void 0 && (_ = xe(v ? F(f[d], c) : ie), l.set(d, _));
          var h = i(_);
          if (h === ie)
            return !1;
        }
        return v;
      },
      set(f, d, _, v) {
        var X;
        var h = l.get(d), p = d in f;
        if (a && d === "length")
          for (var x = _; x < /** @type {Source<number>} */
          h.v; x += 1) {
            var T = l.get(x + "");
            T !== void 0 ? w(T, ie) : x in f && (T = xe(ie), l.set(x + "", T));
          }
        h === void 0 ? (!p || (X = tt(f, d)) != null && X.writable) && (h = xe(void 0), w(h, F(_, c)), l.set(d, h)) : (p = h.v !== ie, w(h, F(_, c)));
        var O = Reflect.getOwnPropertyDescriptor(f, d);
        if (O != null && O.set && O.set.call(v, _), !p) {
          if (a && typeof d == "string") {
            var se = (
              /** @type {Source<number>} */
              l.get("length")
            ), ne = Number(d);
            Number.isInteger(ne) && ne >= se.v && w(se, ne + 1);
          }
          Cn(s);
        }
        return !0;
      },
      ownKeys(f) {
        i(s);
        var d = Reflect.ownKeys(f).filter((h) => {
          var p = l.get(h);
          return p === void 0 || p.v !== ie;
        });
        for (var [_, v] of l)
          v.v !== ie && !(_ in f) && d.push(_);
        return d;
      },
      setPrototypeOf() {
        Ul();
      }
    }
  );
}
function Cn(e, t = 1) {
  w(e, e.v + t);
}
var xn, Xn, Qn, eo;
function yr() {
  if (xn === void 0) {
    xn = window, Xn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    Qn = tt(t, "firstChild").get, eo = tt(t, "nextSibling").get, e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function nr(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function De(e) {
  return Qn.call(e);
}
// @__NO_SIDE_EFFECTS__
function Je(e) {
  return eo.call(e);
}
function W(e, t) {
  if (!P)
    return /* @__PURE__ */ De(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ De(L)
  );
  return r === null && (r = L.appendChild(nr())), Ge(r), r;
}
function It(e, t) {
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
function Z(e, t = 1, r = !1) {
  let o = P ? L : e;
  for (var l; t--; )
    l = o, o = /** @type {TemplateNode} */
    /* @__PURE__ */ Je(o);
  if (!P)
    return o;
  var a = o == null ? void 0 : o.nodeType;
  if (r && a !== 3) {
    var s = nr();
    return o === null ? l == null || l.after(s) : o.before(s), Ge(s), s;
  }
  return Ge(o), /** @type {TemplateNode} */
  o;
}
function Kl(e) {
  e.textContent = "";
}
let jt = !1, Wt = !1, Zt = null, rt = !1, Sr = !1;
function An(e) {
  Sr = e;
}
let Nt = [];
let N = null, pe = !1;
function We(e) {
  N = e;
}
let z = null;
function Ze(e) {
  z = e;
}
let Ae = null;
function Xl(e) {
  Ae = e;
}
let te = null, fe = 0, ze = null;
function Ql(e) {
  ze = e;
}
let to = 1, Jt = 0, Ye = !1;
function ro() {
  return ++to;
}
function Dt(e) {
  var v;
  var t = e.f;
  if ((t & Oe) !== 0)
    return !0;
  if ((t & pt) !== 0) {
    var r = e.deps, o = (t & ge) !== 0;
    if (r !== null) {
      var l, a, s = (t & Ht) !== 0, c = o && z !== null && !Ye, f = r.length;
      if (s || c) {
        var d = (
          /** @type {Derived} */
          e
        ), _ = d.parent;
        for (l = 0; l < f; l++)
          a = r[l], (s || !((v = a == null ? void 0 : a.reactions) != null && v.includes(d))) && (a.reactions ?? (a.reactions = [])).push(d);
        s && (d.f ^= Ht), c && _ !== null && (_.f & ge) === 0 && (d.f ^= ge);
      }
      for (l = 0; l < f; l++)
        if (a = r[l], Dt(
          /** @type {Derived} */
          a
        ) && Kn(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!o || z !== null && !Ye) && Ie(e, de);
  }
  return !1;
}
function ea(e, t) {
  for (var r = t; r !== null; ) {
    if ((r.f & Bt) !== 0)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= Bt;
      }
    r = r.parent;
  }
  throw jt = !1, e;
}
function ta(e) {
  return (e.f & er) === 0 && (e.parent === null || (e.parent.f & Bt) === 0);
}
function or(e, t, r, o) {
  if (jt) {
    if (r === null && (jt = !1), ta(t))
      throw e;
    return;
  }
  r !== null && (jt = !0);
  {
    ea(e, t);
    return;
  }
}
function no(e, t, r = !0) {
  var o = e.reactions;
  if (o !== null)
    for (var l = 0; l < o.length; l++) {
      var a = o[l];
      (a.f & be) !== 0 ? no(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (r ? Ie(a, Oe) : (a.f & de) !== 0 && Ie(a, pt), lr(
        /** @type {Effect} */
        a
      ));
    }
}
function oo(e) {
  var p;
  var t = te, r = fe, o = ze, l = N, a = Ye, s = Ae, c = re, f = pe, d = e.f;
  te = /** @type {null | Value[]} */
  null, fe = 0, ze = null, Ye = (d & ge) !== 0 && (pe || !rt || N === null), N = (d & (Pe | nt)) === 0 ? e : null, Ae = null, In(e.ctx), pe = !1, Jt++;
  try {
    var _ = (
      /** @type {Function} */
      (0, e.fn)()
    ), v = e.deps;
    if (te !== null) {
      var h;
      if (Kt(e, fe), v !== null && fe > 0)
        for (v.length = fe + te.length, h = 0; h < te.length; h++)
          v[fe + h] = te[h];
      else
        e.deps = v = te;
      if (!Ye)
        for (h = fe; h < v.length; h++)
          ((p = v[h]).reactions ?? (p.reactions = [])).push(e);
    } else v !== null && fe < v.length && (Kt(e, fe), v.length = fe);
    if (go() && ze !== null && !pe && v !== null && (e.f & (be | pt | Oe)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      ze.length; h++)
        no(
          ze[h],
          /** @type {Effect} */
          e
        );
    return l !== null && Jt++, _;
  } finally {
    te = t, fe = r, ze = o, N = l, Ye = a, Ae = s, In(c), pe = f;
  }
}
function ra(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var o = xl.call(r, e);
    if (o !== -1) {
      var l = r.length - 1;
      l === 0 ? r = t.reactions = null : (r[o] = r[l], r.pop());
    }
  }
  r === null && (t.f & be) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (te === null || !te.includes(t)) && (Ie(t, pt), (t.f & (ge | Ht)) === 0 && (t.f ^= Ht), Jn(
    /** @type {Derived} **/
    t
  ), Kt(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Kt(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var o = t; o < r.length; o++)
      ra(e, r[o]);
}
function Nr(e) {
  var t = e.f;
  if ((t & er) === 0) {
    Ie(e, de);
    var r = z, o = re, l = rt;
    z = e, rt = !0;
    try {
      (t & Rr) !== 0 ? da(e) : io(e), ao(e);
      var a = oo(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = to;
      var s = e.deps, c;
      kn && Bl && e.f & Oe;
    } catch (f) {
      or(f, e, r, o || e.ctx);
    } finally {
      rt = l, z = r;
    }
  }
}
function na() {
  try {
    Ol();
  } catch (e) {
    if (Zt !== null)
      or(e, Zt, null);
    else
      throw e;
  }
}
function lo() {
  var e = rt;
  try {
    var t = 0;
    for (rt = !0; Nt.length > 0; ) {
      t++ > 1e3 && na();
      var r = Nt, o = r.length;
      Nt = [];
      for (var l = 0; l < o; l++) {
        var a = la(r[l]);
        oa(a);
      }
    }
  } finally {
    Wt = !1, rt = e, Zt = null;
  }
}
function oa(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var o = e[r];
      if ((o.f & (er | gt)) === 0)
        try {
          Dt(o) && (Nr(o), o.deps === null && o.first === null && o.nodes_start === null && (o.teardown === null ? so(o) : o.fn = null));
        } catch (l) {
          or(l, o, null, o.ctx);
        }
    }
}
function lr(e) {
  Wt || (Wt = !0, queueMicrotask(lo));
  for (var t = Zt = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (nt | Pe)) !== 0) {
      if ((r & de) === 0) return;
      t.f ^= de;
    }
  }
  Nt.push(t);
}
function la(e) {
  for (var t = [], r = e; r !== null; ) {
    var o = r.f, l = (o & (Pe | nt)) !== 0, a = l && (o & de) !== 0;
    if (!a && (o & gt) === 0) {
      if ((o & Vn) !== 0)
        t.push(r);
      else if (l)
        r.f ^= de;
      else {
        var s = N;
        try {
          N = r, Dt(r) && Nr(r);
        } catch (d) {
          or(d, r, null, r.ctx);
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
function C(e) {
  var t;
  for (En(); Nt.length > 0; )
    Wt = !0, lo(), En();
  return (
    /** @type {T} */
    t
  );
}
async function br() {
  await Promise.resolve(), C();
}
function i(e) {
  var t = e.f, r = (t & be) !== 0;
  if (N !== null && !pe) {
    Ae !== null && Ae.includes(e) && jl();
    var o = N.deps;
    e.rv < Jt && (e.rv = Jt, te === null && o !== null && o[fe] === e ? fe++ : te === null ? te = [e] : (!Ye || !te.includes(e)) && te.push(e));
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var l = (
      /** @type {Derived} */
      e
    ), a = l.parent;
    a !== null && (a.f & ge) === 0 && (l.f ^= ge);
  }
  return r && (l = /** @type {Derived} */
  e, Dt(l) && Kn(l)), e.v;
}
function mt(e) {
  var t = pe;
  try {
    return pe = !0, e();
  } finally {
    pe = t;
  }
}
const aa = -7169;
function Ie(e, t) {
  e.f = e.f & aa | t;
}
function ia(e) {
  z === null && N === null && Pl(), N !== null && (N.f & ge) !== 0 && z === null && Ll(), Sr && Dl();
}
function sa(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function ot(e, t, r, o = !0) {
  var l = z, a = {
    ctx: re,
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
      Nr(a), a.f |= kl;
    } catch (f) {
      throw Le(a), f;
    }
  else t !== null && lr(a);
  var s = r && a.deps === null && a.first === null && a.nodes_start === null && a.teardown === null && (a.f & (Mn | Bt)) === 0;
  if (!s && o && (l !== null && sa(a, l), N !== null && (N.f & be) !== 0)) {
    var c = (
      /** @type {Derived} */
      N
    );
    (c.effects ?? (c.effects = [])).push(a);
  }
  return a;
}
function ua(e) {
  const t = ot(Qt, null, !1);
  return Ie(t, de), t.teardown = e, t;
}
function kr(e) {
  ia();
  var t = z !== null && (z.f & Pe) !== 0 && re !== null && !re.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      re
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: z,
      reaction: N
    });
  } else {
    var o = zr(e);
    return o;
  }
}
function ca(e) {
  const t = ot(nt, e, !0);
  return () => {
    Le(t);
  };
}
function fa(e) {
  const t = ot(nt, e, !0);
  return (r = {}) => new Promise((o) => {
    r.outro ? Er(t, () => {
      Le(t), o(void 0);
    }) : (Le(t), o(void 0));
  });
}
function zr(e) {
  return ot(Vn, e, !1);
}
function Tr(e) {
  return ot(Qt, e, !0);
}
function Ne(e, t = [], r = He) {
  const o = t.map(r);
  return Dr(() => e(...o.map(i)));
}
function Dr(e, t = 0) {
  return ot(Qt | Rr | t, e, !0);
}
function Xt(e, t = !0) {
  return ot(Qt | Pe, e, !0, t);
}
function ao(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Sr, o = N;
    An(!0), We(null);
    try {
      t.call(null);
    } finally {
      An(r), We(o);
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
function da(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Pe) === 0 && Le(t), t = r;
  }
}
function Le(e, t = !0) {
  var r = !1;
  if ((t || (e.f & El) !== 0) && e.nodes_start !== null) {
    for (var o = e.nodes_start, l = e.nodes_end; o !== null; ) {
      var a = o === l ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Je(o)
      );
      o.remove(), o = a;
    }
    r = !0;
  }
  io(e, t && !r), Kt(e, 0), Ie(e, er);
  var s = e.transitions;
  if (s !== null)
    for (const f of s)
      f.stop();
  ao(e);
  var c = e.parent;
  c !== null && c.first !== null && so(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function so(e) {
  var t = e.parent, r = e.prev, o = e.next;
  r !== null && (r.next = o), o !== null && (o.prev = r), t !== null && (t.first === e && (t.first = o), t.last === e && (t.last = r));
}
function Er(e, t) {
  var r = [];
  uo(e, r, !0), ha(r, () => {
    Le(e), t && t();
  });
}
function ha(e, t) {
  var r = e.length;
  if (r > 0) {
    var o = () => --r || t();
    for (var l of e)
      l.out(o);
  } else
    t();
}
function uo(e, t, r) {
  if ((e.f & gt) === 0) {
    if (e.f ^= gt, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || r) && t.push(s);
    for (var o = e.first; o !== null; ) {
      var l = o.next, a = (o.f & Ir) !== 0 || (o.f & Pe) !== 0;
      uo(o, t, a ? r : !1), o = l;
    }
  }
}
function Rn(e) {
  co(e, !0);
}
function co(e, t) {
  if ((e.f & gt) !== 0) {
    e.f ^= gt, (e.f & de) === 0 && (e.f ^= de), Dt(e) && (Ie(e, Oe), lr(e));
    for (var r = e.first; r !== null; ) {
      var o = r.next, l = (r.f & Ir) !== 0 || (r.f & Pe) !== 0;
      co(r, l ? t : !1), r = o;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
function fo(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let re = null;
function In(e) {
  re = e;
}
function ho(e, t = !1, r) {
  re = {
    p: re,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
}
function vo(e) {
  const t = re;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var r = z, o = N;
      t.e = null;
      try {
        for (var l = 0; l < s.length; l++) {
          var a = s[l];
          Ze(a.effect), We(a.reaction), zr(a.fn);
        }
      } finally {
        Ze(r), We(o);
      }
    }
    re = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function go() {
  return !0;
}
const va = ["touchstart", "touchmove"];
function ga(e) {
  return va.includes(e);
}
function _a(e, t) {
  if (t) {
    const r = document.body;
    e.autofocus = !0, tr(() => {
      document.activeElement === r && e.focus();
    });
  }
}
let $n = !1;
function _o() {
  $n || ($n = !0, document.addEventListener(
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
function mo(e) {
  var t = N, r = z;
  We(null), Ze(null);
  try {
    return e();
  } finally {
    We(t), Ze(r);
  }
}
function ma(e, t, r, o = r) {
  e.addEventListener(t, () => mo(r));
  const l = e.__on_r;
  l ? e.__on_r = () => {
    l(), o(!0);
  } : e.__on_r = () => o(!0), _o();
}
const po = /* @__PURE__ */ new Set(), Cr = /* @__PURE__ */ new Set();
function pa(e, t, r, o = {}) {
  function l(a) {
    if (o.capture || $t.call(t, a), !a.cancelBubble)
      return mo(() => r == null ? void 0 : r.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? tr(() => {
    t.addEventListener(e, l, o);
  }) : t.addEventListener(e, l, o), l;
}
function Be(e, t, r, o, l) {
  var a = { capture: o, passive: l }, s = pa(e, t, r, a);
  (t === document.body || t === window || t === document) && ua(() => {
    t.removeEventListener(e, s, a);
  });
}
function ba(e) {
  for (var t = 0; t < e.length; t++)
    po.add(e[t]);
  for (var r of Cr)
    r(e);
}
function $t(e) {
  var ne;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), o = e.type, l = ((ne = e.composedPath) == null ? void 0 : ne.call(e)) || [], a = (
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
  if (a = /** @type {Element} */
  l[s] || e.target, a !== t) {
    Gt(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var _ = N, v = z;
    We(null), Ze(null);
    try {
      for (var h, p = []; a !== null; ) {
        var x = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var T = a["__" + o];
          if (T != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (jn(T)) {
              var [O, ...se] = T;
              O.apply(a, [e, ...se]);
            } else
              T.call(a, e);
        } catch (X) {
          h ? p.push(X) : h = X;
        }
        if (e.cancelBubble || x === t || x === null)
          break;
        a = x;
      }
      if (h) {
        for (let X of p)
          queueMicrotask(() => {
            throw X;
          });
        throw h;
      }
    } finally {
      e.__root = t, delete e.currentTarget, We(_), Ze(v);
    }
  }
}
function Lr(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Re(e, t) {
  var r = (
    /** @type {Effect} */
    z
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function we(e, t) {
  var r = (t & bl) !== 0, o = (t & wl) !== 0, l, a = !e.startsWith("<!>");
  return () => {
    if (P)
      return Re(L, null), L;
    l === void 0 && (l = Lr(a ? e : "<!>" + e), r || (l = /** @type {Node} */
    /* @__PURE__ */ De(l)));
    var s = (
      /** @type {TemplateNode} */
      o || Xn ? document.importNode(l, !0) : l.cloneNode(!0)
    );
    if (r) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ De(s)
      ), f = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Re(c, f);
    } else
      Re(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function ar(e, t, r = "svg") {
  var o = !e.startsWith("<!>"), l = `<${r}>${o ? e : "<!>" + e}</${r}>`, a;
  return () => {
    if (P)
      return Re(L, null), L;
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        Lr(l)
      ), c = (
        /** @type {Element} */
        /* @__PURE__ */ De(s)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ De(c);
    }
    var f = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return Re(f, f), f;
  };
}
function Vt() {
  if (P)
    return Re(L, null), L;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = nr();
  return e.append(t, r), Re(t, r), e;
}
function M(e, t) {
  if (P) {
    z.nodes_end = L, _t();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function wa(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function bo(e, t) {
  return wo(e, t);
}
function ya(e, t) {
  yr(), t.intro = t.intro ?? !1;
  const r = t.target, o = P, l = L;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ De(r)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== Ar); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ Je(a);
    if (!a)
      throw vt;
    ht(!0), Ge(
      /** @type {Comment} */
      a
    ), _t();
    const s = wo(e, { ...t, anchor: a });
    if (L === null || L.nodeType !== 8 || /** @type {Comment} */
    L.data !== Fn)
      throw rr(), vt;
    return ht(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === vt)
      return t.recover === !1 && Fl(), yr(), Kl(r), ht(!1), bo(e, t);
    throw s;
  } finally {
    ht(o), Ge(l);
  }
}
const dt = /* @__PURE__ */ new Map();
function wo(e, { target: t, anchor: r, props: o = {}, events: l, context: a, intro: s = !0 }) {
  yr();
  var c = /* @__PURE__ */ new Set(), f = (v) => {
    for (var h = 0; h < v.length; h++) {
      var p = v[h];
      if (!c.has(p)) {
        c.add(p);
        var x = ga(p);
        t.addEventListener(p, $t, { passive: x });
        var T = dt.get(p);
        T === void 0 ? (document.addEventListener(p, $t, { passive: x }), dt.set(p, 1)) : dt.set(p, T + 1);
      }
    }
  };
  f(Al(po)), Cr.add(f);
  var d = void 0, _ = fa(() => {
    var v = r ?? t.appendChild(nr());
    return Xt(() => {
      if (a) {
        ho({});
        var h = (
          /** @type {ComponentContext} */
          re
        );
        h.c = a;
      }
      l && (o.$$events = l), P && Re(
        /** @type {TemplateNode} */
        v,
        null
      ), d = e(v, o) || {}, P && (z.nodes_end = L), a && vo();
    }), () => {
      var x;
      for (var h of c) {
        t.removeEventListener(h, $t);
        var p = (
          /** @type {number} */
          dt.get(h)
        );
        --p === 0 ? (document.removeEventListener(h, $t), dt.delete(h)) : dt.set(h, p);
      }
      Cr.delete(f), v !== r && ((x = v.parentNode) == null || x.removeChild(v));
    };
  });
  return xr.set(d, _), d;
}
let xr = /* @__PURE__ */ new WeakMap();
function ka(e, t) {
  const r = xr.get(e);
  return r ? (xr.delete(e), r(t)) : Promise.resolve();
}
function J(e, t, [r, o] = [0, 0]) {
  P && r === 0 && _t();
  var l = e, a = null, s = null, c = ie, f = r > 0 ? Ir : 0, d = !1;
  const _ = (h, p = !0) => {
    d = !0, v(p, h);
  }, v = (h, p) => {
    if (c === (c = h)) return;
    let x = !1;
    if (P && o !== -1) {
      if (r === 0) {
        const O = (
          /** @type {Comment} */
          l.data
        );
        O === Ar ? o = 0 : O === On ? o = 1 / 0 : (o = parseInt(O.substring(1)), o !== o && (o = c ? 1 / 0 : -1));
      }
      const T = o > r;
      !!c === T && (l = Jl(), Ge(l), ht(!1), x = !0, o = -1);
    }
    c ? (a ? Rn(a) : p && (a = Xt(() => p(l))), s && Er(s, () => {
      s = null;
    })) : (s ? Rn(s) : p && (s = Xt(() => p(l, [r + 1, o]))), a && Er(a, () => {
      a = null;
    })), x && ht(!0);
  };
  Dr(() => {
    d = !1, t(_), d || v(null, null);
  }, f), P && (l = L);
}
function et(e, t, r, o, l) {
  var a = e, s = "", c;
  Dr(() => {
    if (s === (s = t() ?? "")) {
      P && _t();
      return;
    }
    c !== void 0 && (Le(c), c = void 0), s !== "" && (c = Xt(() => {
      if (P) {
        L.data;
        for (var f = _t(), d = f; f !== null && (f.nodeType !== 8 || /** @type {Comment} */
        f.data !== ""); )
          d = f, f = /** @type {TemplateNode} */
          /* @__PURE__ */ Je(f);
        if (f === null)
          throw rr(), vt;
        Re(L, d), a = Ge(f);
        return;
      }
      var _ = s + "", v = Lr(_);
      Re(
        /** @type {TemplateNode} */
        /* @__PURE__ */ De(v),
        /** @type {TemplateNode} */
        v.lastChild
      ), a.before(v);
    }));
  });
}
function Ea(e, t, r, o, l) {
  var c;
  P && _t();
  var a = (c = t.$$slots) == null ? void 0 : c[r], s = !1;
  a === !0 && (a = t.children, s = !0), a === void 0 || a(e, s ? () => o : o);
}
function Ca(e, t) {
  tr(() => {
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
const Sn = [...` 	
\r\f \v\uFEFF`];
function xa(e, t, r) {
  var o = "" + e;
  if (r) {
    for (var l in r)
      if (r[l])
        o = o ? o + " " + l : l;
      else if (o.length)
        for (var a = l.length, s = 0; (s = o.indexOf(l, s)) >= 0; ) {
          var c = s + a;
          (s === 0 || Sn.includes(o[s - 1])) && (c === o.length || Sn.includes(o[c])) ? o = (s === 0 ? "" : o.substring(0, s)) + o.substring(c + 1) : s = c;
        }
  }
  return o === "" ? null : o;
}
function Aa(e, t, r, o, l, a) {
  var s = e.__className;
  if (P || s !== r) {
    var c = xa(r, o, a);
    (!P || c !== e.getAttribute("class")) && (c == null ? e.removeAttribute("class") : e.className = c), e.__className = r;
  } else if (a && l !== a)
    for (var f in a) {
      var d = !!a[f];
      (l == null || d !== !!l[f]) && e.classList.toggle(f, d);
    }
  return a;
}
const Ra = Symbol("is custom element"), Ia = Symbol("is html");
function Nn(e) {
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
    e.__on_r = r, zl(r), _o();
  }
}
function $a(e, t) {
  var r = yo(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function $(e, t, r, o) {
  var l = yo(e);
  P && (l[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || l[t] !== (l[t] = r) && (t === "loading" && (e[Cl] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Sa(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function yo(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Ra]: e.nodeName.includes("-"),
      [Ia]: e.namespaceURI === yl
    })
  );
}
var zn = /* @__PURE__ */ new Map();
function Sa(e) {
  var t = zn.get(e.nodeName);
  if (t) return t;
  zn.set(e.nodeName, t = []);
  for (var r, o = e, l = Element.prototype; l !== o; ) {
    r = Rl(o);
    for (var a in r)
      r[a].set && t.push(a);
    o = qn(o);
  }
  return t;
}
function Na(e, t, r = t) {
  ma(e, "change", (o) => {
    var l = o ? e.defaultChecked : e.checked;
    r(l);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (P && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  mt(t) == null) && r(e.checked), Tr(() => {
    var o = t();
    e.checked = !!o;
  });
}
function Tn(e, t) {
  return e === t || (e == null ? void 0 : e[St]) === t;
}
function Mt(e = {}, t, r, o) {
  return zr(() => {
    var l, a;
    return Tr(() => {
      l = a, a = [], mt(() => {
        e !== r(...a) && (t(e, ...a), l && Tn(r(...l), e) && t(null, ...l));
      });
    }), () => {
      tr(() => {
        a && Tn(r(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function ko(e) {
  re === null && fo(), kr(() => {
    const t = mt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function za(e) {
  re === null && fo(), ko(() => () => mt(e));
}
let Ut = !1;
function Ta(e) {
  var t = Ut;
  try {
    return Ut = !1, [e(), Ut];
  } finally {
    Ut = t;
  }
}
function A(e, t, r, o) {
  var ye;
  var l = (r & gl) !== 0, a = !0, s = (r & ml) !== 0, c = (r & pl) !== 0, f = !1, d;
  s ? [d, f] = Ta(() => (
    /** @type {V} */
    e[t]
  )) : d = /** @type {V} */
  e[t];
  var _ = St in e || Un in e, v = s && (((ye = tt(e, t)) == null ? void 0 : ye.set) ?? (_ && t in e && ((U) => e[t] = U))) || void 0, h = (
    /** @type {V} */
    o
  ), p = !0, x = !1, T = () => (x = !0, p && (p = !1, c ? h = mt(
    /** @type {() => V} */
    o
  ) : h = /** @type {V} */
  o), h);
  d === void 0 && o !== void 0 && (v && a && Vl(), d = T(), v && v(d));
  var O;
  if (O = () => {
    var U = (
      /** @type {V} */
      e[t]
    );
    return U === void 0 ? T() : (p = !0, x = !1, U);
  }, (r & _l) === 0)
    return O;
  if (v) {
    var se = e.$$legacy;
    return function(U, Q) {
      return arguments.length > 0 ? ((!Q || se || f) && v(Q ? O() : U), U) : O();
    };
  }
  var ne = !1, X = /* @__PURE__ */ Wn(d), ue = /* @__PURE__ */ He(() => {
    var U = O(), Q = i(X);
    return ne ? (ne = !1, Q) : X.v = U;
  });
  return l || (ue.equals = $r), function(U, Q) {
    if (arguments.length > 0) {
      const Fe = Q ? i(ue) : s ? F(U) : U;
      return ue.equals(Fe) || (ne = !0, w(X, Fe), x && h !== void 0 && (h = Fe), mt(() => i(ue))), U;
    }
    return i(ue);
  };
}
function Da(e) {
  return new La(e);
}
var Te, ve;
class La {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    mr(this, Te);
    /** @type {Record<string, any>} */
    mr(this, ve);
    var a;
    var r = /* @__PURE__ */ new Map(), o = (s, c) => {
      var f = /* @__PURE__ */ Wn(c);
      return r.set(s, f), f;
    };
    const l = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, c) {
          return i(r.get(c) ?? o(c, Reflect.get(s, c)));
        },
        has(s, c) {
          return c === Un ? !0 : (i(r.get(c) ?? o(c, Reflect.get(s, c))), Reflect.has(s, c));
        },
        set(s, c, f) {
          return w(r.get(c) ?? o(c, f), f), Reflect.set(s, c, f);
        }
      }
    );
    pr(this, ve, (t.hydrate ? ya : bo)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: l,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((a = t == null ? void 0 : t.props) != null && a.$$host) || t.sync === !1) && C(), pr(this, Te, l.$$events);
    for (const s of Object.keys(le(this, ve)))
      s === "$set" || s === "$destroy" || s === "$on" || Gt(this, s, {
        get() {
          return le(this, ve)[s];
        },
        /** @param {any} value */
        set(c) {
          le(this, ve)[s] = c;
        },
        enumerable: !0
      });
    le(this, ve).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(l, s);
    }, le(this, ve).$destroy = () => {
      ka(le(this, ve));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    le(this, ve).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    le(this, Te)[t] = le(this, Te)[t] || [];
    const o = (...l) => r.call(this, ...l);
    return le(this, Te)[t].push(o), () => {
      le(this, Te)[t] = le(this, Te)[t].filter(
        /** @param {any} fn */
        (l) => l !== o
      );
    };
  }
  $destroy() {
    le(this, ve).$destroy();
  }
}
Te = new WeakMap(), ve = new WeakMap();
let Eo;
typeof HTMLElement == "function" && (Eo = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, o) {
    super();
    /** The Svelte component constructor */
    me(this, "$$ctor");
    /** Slots */
    me(this, "$$s");
    /** @type {any} The Svelte component instance */
    me(this, "$$c");
    /** Whether or not the custom element is connected */
    me(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    me(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    me(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    me(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    me(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    me(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    me(this, "$$me");
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
        return (a) => {
          const s = document.createElement("slot");
          l !== "default" && (s.name = l), M(a, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, o = Pa(this);
      for (const l of this.$$s)
        l in o && (l === "default" && !this.$$d.children ? (this.$$d.children = t(l), r.default = !0) : r[l] = t(l));
      for (const l of this.attributes) {
        const a = this.$$g_p(l.name);
        a in this.$$d || (this.$$d[a] = qt(a, l.value, this.$$p_d, "toProp"));
      }
      for (const l in this.$$p_d)
        !(l in this.$$d) && this[l] !== void 0 && (this.$$d[l] = this[l], delete this[l]);
      this.$$c = Da({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = ca(() => {
        Tr(() => {
          var l;
          this.$$r = !0;
          for (const a of Yt(this.$$c)) {
            if (!((l = this.$$p_d[a]) != null && l.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const s = qt(
              a,
              this.$$d[a],
              this.$$p_d,
              "toAttribute"
            );
            s == null ? this.removeAttribute(this.$$p_d[a].attribute || a) : this.setAttribute(this.$$p_d[a].attribute || a, s);
          }
          this.$$r = !1;
        });
      });
      for (const l in this.$$l)
        for (const a of this.$$l[l]) {
          const s = this.$$c.$on(l, a);
          this.$$l_u.set(a, s);
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = qt(t, o, this.$$p_d, "toProp"), (l = this.$$c) == null || l.$set({ [t]: this.$$d[t] }));
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
    return Yt(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function qt(e, t, r, o) {
  var a;
  const l = (a = r[e]) == null ? void 0 : a.type;
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
function Pa(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function Oa(e, t, r, o, l, a) {
  let s = class extends Eo {
    constructor() {
      super(e, r, l), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Yt(t).map(
        (c) => (t[c].attribute || c).toLowerCase()
      );
    }
  };
  return Yt(t).forEach((c) => {
    Gt(s.prototype, c, {
      get() {
        return this.$$c && c in this.$$c ? this.$$c[c] : this.$$d[c];
      },
      set(f) {
        var v;
        f = qt(c, f, t), this.$$d[c] = f;
        var d = this.$$c;
        if (d) {
          var _ = (v = tt(d, c)) == null ? void 0 : v.get;
          _ ? d[c] = f : d.$set({ [c]: f });
        }
      }
    });
  }), o.forEach((c) => {
    Gt(s.prototype, c, {
      get() {
        var f;
        return (f = this.$$c) == null ? void 0 : f[c];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
const Co = new TextEncoder();
function Fa(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function Va(e, t = "SHA-256", r = 1e5) {
  const o = Date.now().toString(16);
  e || (e = Math.round(Math.random() * r));
  const l = await xo(o, e, t);
  return {
    algorithm: t,
    challenge: l,
    salt: o,
    signature: ""
  };
}
async function xo(e, t, r) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return Fa(
    await crypto.subtle.digest(
      r.toUpperCase(),
      Co.encode(e + t)
    )
  );
}
function Ma(e, t, r = "SHA-256", o = 1e6, l = 0) {
  const a = new AbortController(), s = Date.now();
  return {
    promise: (async () => {
      for (let f = l; f <= o; f += 1) {
        if (a.signal.aborted)
          return null;
        if (await xo(t, f, r) === e)
          return {
            number: f,
            took: Date.now() - s
          };
      }
      return null;
    })(),
    controller: a
  };
}
function Dn() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function Ua(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let o = 0; o < t.length; o++)
    r[o] = t.charCodeAt(o);
  return r;
}
function ja(e, t = 12) {
  const r = new Uint8Array(t);
  for (let o = 0; o < t; o++)
    r[o] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function qa(e, t = "", r = 1e6, o = 0) {
  const l = "AES-GCM", a = new AbortController(), s = Date.now(), c = async () => {
    for (let _ = o; _ <= r; _ += 1) {
      if (a.signal.aborted || !f || !d)
        return null;
      try {
        const v = await crypto.subtle.decrypt(
          {
            name: l,
            iv: ja(_)
          },
          f,
          d
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
  let f = null, d = null;
  try {
    d = Ua(e);
    const _ = await crypto.subtle.digest(
      "SHA-256",
      Co.encode(t)
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
      controller: a
    };
  }
  return {
    promise: c(),
    controller: a
  };
}
var k = /* @__PURE__ */ ((e) => (e.CODE = "code", e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(k || {}), K = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.LOADING = "loading", e.PLAYING = "playing", e.PAUSED = "paused", e.READY = "ready", e))(K || {});
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  register: (e, t) => {
    globalThis.altchaI18n[e] = t;
  }
};
const Ba = {
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
globalThis.altchaI18n.register("en", Ba);
const wr = (e, t) => {
  let r = /* @__PURE__ */ Gl(() => Sl(t == null ? void 0 : t(), 24));
  var o = Wa();
  Ne(() => {
    $(o, "width", i(r)), $(o, "height", i(r));
  }), M(e, o);
};
function Ha(e, t) {
  e.code === "Space" && (e.preventDefault(), e.stopImmediatePropagation(), t());
}
function Ya(e, t) {
  e.preventDefault(), t();
}
function Ga(e, t, r, o, l, a, s, c) {
  var f;
  [
    k.UNVERIFIED,
    k.ERROR,
    k.EXPIRED,
    k.CODE
  ].includes(i(t)) ? r() !== !1 && ((f = i(o)) == null ? void 0 : f.reportValidity()) === !1 ? w(l, !1) : a() ? s() : c() : w(l, !0);
}
var Wa = /* @__PURE__ */ ar('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="svelte-uo3tkz"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25" class="svelte-uo3tkz"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor" class="altcha-spinner svelte-uo3tkz"></path></svg>'), Za = /* @__PURE__ */ we('<input type="hidden" class="svelte-uo3tkz">'), Ja = /* @__PURE__ */ we('<div class="svelte-uo3tkz"><a target="_blank" class="altcha-logo svelte-uo3tkz" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-uo3tkz"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor" class="svelte-uo3tkz"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor" class="svelte-uo3tkz"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor" class="svelte-uo3tkz"></path></svg></a></div>'), Ka = /* @__PURE__ */ ar('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-uo3tkz"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z" class="svelte-uo3tkz"></path></svg>'), Xa = /* @__PURE__ */ ar('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-uo3tkz"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z" class="svelte-uo3tkz"></path></svg>'), Qa = /* @__PURE__ */ ar('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-uo3tkz"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z" class="svelte-uo3tkz"></path></svg>'), ei = /* @__PURE__ */ we('<button type="button" class="altcha-code-challenge-audio svelte-uo3tkz"><!></button>'), ti = /* @__PURE__ */ we('<audio hidden autoplay class="svelte-uo3tkz"><source class="svelte-uo3tkz"></audio>'), ri = /* @__PURE__ */ we('<div class="altcha-code-challenge svelte-uo3tkz" role="dialog"><div class="altcha-code-challenge-arrow svelte-uo3tkz"></div> <form data-code-challenge-form="1" class="svelte-uo3tkz"><img class="altcha-code-challenge-image svelte-uo3tkz" alt=""> <input type="text" autocomplete="off" name="code" class="altcha-code-challenge-input svelte-uo3tkz" required> <div class="altcha-code-challenge-buttons svelte-uo3tkz"><div class="altcha-code-challenge-buttons-left svelte-uo3tkz"><!> <button type="button" class="altcha-code-challenge-reload svelte-uo3tkz"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-uo3tkz"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z" class="svelte-uo3tkz"></path></svg></button></div> <button type="submit" class="altcha-code-challenge-verify svelte-uo3tkz"><!> </button></div> <!></form></div>'), ni = /* @__PURE__ */ we('<div class="svelte-uo3tkz"><!></div>'), oi = /* @__PURE__ */ we('<div class="svelte-uo3tkz"><!></div>'), li = /* @__PURE__ */ we('<div class="altcha-error svelte-uo3tkz"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="svelte-uo3tkz"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" class="svelte-uo3tkz"></path></svg> <!></div>'), ai = /* @__PURE__ */ we('<div class="altcha-footer svelte-uo3tkz"><div class="svelte-uo3tkz"><!></div></div>'), ii = /* @__PURE__ */ we('<div class="altcha-anchor-arrow svelte-uo3tkz"></div>'), si = /* @__PURE__ */ we('<!> <div class="altcha svelte-uo3tkz"><div class="altcha-main svelte-uo3tkz"><div><!> <input type="checkbox" class="svelte-uo3tkz"></div> <label class="altcha-label svelte-uo3tkz"><!></label> <!> <!> <!></div> <!> <!> <!></div>', 1);
const ui = {
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
function ci(e, t) {
  var mn, pn;
  ho(t, !0), Ca(e, ui);
  let r = A(t, "auto", 7, void 0), o = A(t, "blockspam", 7, void 0), l = A(t, "challengeurl", 7, void 0), a = A(t, "challengejson", 7, void 0), s = A(t, "credentials", 7, void 0), c = A(t, "customfetch", 7, void 0), f = A(t, "debug", 7, !1), d = A(t, "delay", 7, 0), _ = A(t, "disableautofocus", 7, !1), v = A(t, "expire", 7, void 0), h = A(t, "floating", 7, void 0), p = A(t, "floatinganchor", 7, void 0), x = A(t, "floatingoffset", 7, void 0), T = A(t, "floatingpersist", 7, !1), O = A(t, "hidefooter", 7, !1), se = A(t, "hidelogo", 7, !1), ne = A(t, "id", 7, void 0), X = A(t, "language", 7, void 0), ue = A(t, "name", 7, "altcha"), ye = A(t, "maxnumber", 7, 1e6), U = A(t, "mockerror", 7, !1), Q = A(t, "obfuscated", 7, void 0), Fe = A(t, "plugins", 7, void 0), bt = A(t, "refetchonexpire", 7, !0), Ke = A(t, "sentinel", 7, void 0), ke = A(t, "spamfilter", 7, !1), lt = A(t, "strings", 7, void 0), he = A(t, "test", 7, !1), ce = A(t, "verifyurl", 7, void 0), at = A(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), wt = A(t, "workerurl", 7, void 0);
  const Pr = ["SHA-256", "SHA-384", "SHA-512"], Ao = "https://altcha.org/", Ve = (n, u) => {
    t.$$host.dispatchEvent(new CustomEvent(n, { detail: u }));
  }, Or = (pn = (mn = document.documentElement.lang) == null ? void 0 : mn.split("-")) == null ? void 0 : pn[0], ir = /* @__PURE__ */ He(() => {
    var n;
    return l() && new URL(l(), location.origin).host.endsWith(".altcha.org") && !!((n = l()) != null && n.includes("apiKey=ckey_"));
  }), sr = /* @__PURE__ */ He(() => a() ? Kr(a()) : void 0), Ro = /* @__PURE__ */ He(() => lt() ? Kr(lt()) : {}), D = /* @__PURE__ */ He(() => ({
    ...Mr(),
    ...i(Ro)
  })), Fr = /* @__PURE__ */ He(() => ne() || `${ue()}_checkbox_${Math.round(Math.random() * 1e8)}`);
  let yt = ae(!1), B = ae(null), R = ae(F(k.UNVERIFIED)), ee = ae(void 0), kt = ae(null), Me = ae(null), ur = ae(null), it = ae(null), V = ae(null), Xe = ae(null), Ee = null, H = ae(null), Qe = ae(!1), Ue = [], cr = ae(!1), $e = ae(null);
  kr(() => {
    Mo(i(Xe));
  }), kr(() => {
    Uo(i(R));
  }), za(() => {
    Io(), i(V) && (i(V).removeEventListener("submit", Yr), i(V).removeEventListener("reset", Gr), i(V).removeEventListener("focusin", Hr), w(V, null)), Ee && (clearTimeout(Ee), Ee = null), document.removeEventListener("click", qr), document.removeEventListener("scroll", Br), window.removeEventListener("resize", Jr);
  }), ko(() => {
    var n;
    S("mounted", "2.0.0-beta.3"), S("workers", at()), zo(), S("plugins", Ue.length ? Ue.map((u) => u.constructor.pluginName).join(", ") : "none"), he() && S("using test mode"), v() && fr(v()), r() !== void 0 && S("auto", r()), h() !== void 0 && Qr(h()), w(V, F((n = i(ee)) == null ? void 0 : n.closest("form"))), i(V) && (i(V).addEventListener("submit", Yr, { capture: !0 }), i(V).addEventListener("reset", Gr), (r() === "onfocus" || T() === "focus") && i(V).addEventListener("focusin", Hr)), r() === "onload" && (Q() ? Et() : Se()), i(ir) && (O() || se()) && S("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      Ve("load");
    });
  });
  function Lt(n, u) {
    return btoa(JSON.stringify({
      algorithm: n.algorithm,
      challenge: n.challenge,
      number: u.number,
      salt: n.salt,
      signature: n.signature,
      test: he() ? !0 : void 0,
      took: u.took
    }));
  }
  function Io() {
    for (const n of Ue)
      n.destroy();
  }
  function Vr() {
    l() && bt() && i(R) === k.VERIFIED ? Se() : st(k.EXPIRED, i(D).expired);
  }
  async function $o() {
    var n;
    if (U())
      throw S("mocking error"), new Error("Mocked error.");
    if (i(sr))
      return S("using provided json data"), i(sr);
    if (he())
      return S("generating test challenge", { test: he() }), Va(typeof he() != "boolean" ? +he() : void 0);
    {
      if (!l() && i(V)) {
        const E = i(V).getAttribute("action");
        E != null && E.includes("/form/") && l(E + "/altcha");
      }
      if (!l())
        throw new Error("Attribute challengeurl not set.");
      S("fetching challenge from", l());
      let u = null, g = null;
      if (c())
        if (S("using customfetch"), typeof c() == "string") {
          if (u = globalThis[c()] || null, !u)
            throw new Error(`Custom fetch function not found: ${c()}`);
        } else
          u = c();
      const b = {
        credentials: typeof s() == "boolean" ? "include" : s(),
        headers: ke() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      };
      if (u) {
        if (g = await u(l(), b), !g || !(g instanceof Response))
          throw new Error("Custom fetch function did not return a response.");
      } else
        g = await fetch(l(), b);
      if (g.status !== 200)
        throw new Error(`Server responded with ${g.status}.`);
      const m = g.headers.get("X-Altcha-Config"), I = await g.json(), y = new URLSearchParams((n = I.salt.split("?")) == null ? void 0 : n[1]), j = y.get("expires") || y.get("expire");
      if (j) {
        const E = new Date(+j * 1e3), q = isNaN(E.getTime()) ? 0 : E.getTime() - Date.now();
        q > 0 && fr(q);
      }
      if (m)
        try {
          const E = JSON.parse(m);
          E && typeof E == "object" && (E.verifyurl && (E.verifyurl = jr(E.verifyurl)), rn(E));
        } catch (E) {
          S("unable to configure from X-Altcha-Config", E);
        }
      return I;
    }
  }
  function So(n) {
    var g, b;
    const u = (g = i(V)) == null ? void 0 : g.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((b = u == null ? void 0 : u.value) == null ? void 0 : b.slice(u.value.indexOf("@"))) || void 0;
  }
  function Mr(n = [
    X() || "",
    document.documentElement.lang || "",
    ...navigator.languages
  ]) {
    const u = Object.keys(globalThis.altchaI18n).map((b) => b.toLowerCase()), g = n.reduce(
      (b, m) => (m = m.toLowerCase(), b || (globalThis.altchaI18n[m] ? m : null) || u.find((I) => m.split("-")[0] === I.split("-")[0]) || null),
      null
    );
    return globalThis.altchaI18n[g || "en"];
  }
  function No() {
    return ke() === "ipAddress" ? {
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
    } : typeof ke() == "object" ? ke() : {
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
  function Ur(n) {
    var g;
    return [
      ...((g = i(V)) == null ? void 0 : g.querySelectorAll(n != null && n.length ? n.map((b) => `input[name="${b}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (b, m) => {
        const I = m.name, y = m.value;
        return I && y && (b[I] = /\n/.test(y) ? y.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : y), b;
      },
      {}
    );
  }
  function jr(n) {
    const u = new URL(l() || location.origin), g = new URL(n, u);
    return g.search || (g.search = u.search), g.toString();
  }
  function zo() {
    const n = Fe() !== void 0 ? Fe().split(",") : void 0;
    for (const u of globalThis.altchaPlugins)
      (!n || n.includes(u.pluginName)) && Ue.push(new u({
        el: i(ee),
        clarify: Et,
        dispatch: Ve,
        getConfiguration: nn,
        getFloatingAnchor: on,
        getState: ln,
        log: S,
        reset: st,
        solve: tn,
        setState: Ce,
        setFloatingAnchor: sn,
        verify: Se
      }));
  }
  function S(...n) {
    (f() || n.some((u) => u instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${ue()}]`, ...n);
  }
  function To() {
    w(H, F(K.PAUSED));
  }
  function Do(n) {
    w(H, F(K.ERROR));
  }
  function Lo() {
    w(H, F(K.READY));
  }
  function Po() {
    w(H, F(K.LOADING));
  }
  function Oo() {
    w(H, F(K.PLAYING));
  }
  function Fo() {
    w(H, F(K.PAUSED));
  }
  function Vo(n) {
    if (n.preventDefault(), n.stopPropagation(), i(B)) {
      const u = new FormData(n.target);
      w(Qe, !0), Xr(Lt(i(B).challenge, i(B).solution), String(u.get("code"))).then(({ reason: g, verified: b }) => {
        b ? (w(B, null), Ce(k.VERIFIED), S("verified"), br().then(() => {
          var m;
          (m = i(ur)) == null || m.focus(), Ve("verified", { payload: i($e) });
        })) : (st(), w(Xe, F(g || "Verification failed")));
      }).catch((g) => {
        w(B, null), Ce(k.ERROR, g), S("sentinel verification failed:", g);
      }).finally(() => {
        w(Qe, !1);
      });
    }
  }
  function qr(n) {
    var g;
    const u = n.target;
    h() && u && !i(ee).contains(u) && (i(R) === k.VERIFIED && T() === !1 || i(R) === k.VERIFIED && T() === "focus" && !((g = i(V)) != null && g.matches(":focus-within")) || r() === "off" && i(R) === k.UNVERIFIED) && an();
  }
  function Br() {
    h() && i(R) !== k.UNVERIFIED && Ct();
  }
  function Mo(n) {
    for (const u of Ue)
      typeof u.onErrorChange == "function" && u.onErrorChange(i(Xe));
  }
  function Hr(n) {
    i(R) === k.UNVERIFIED ? Se() : h() && T() === "focus" && i(R) === k.VERIFIED && dr();
  }
  function Yr(n) {
    const u = n.target, g = n.submitter;
    u != null && u.hasAttribute("data-code-challenge-form") || (i(V) && r() === "onsubmit" ? i(R) === k.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), Se().then(() => {
      var m;
      g && ["INPUT", "BUTTON"].includes(g.tagName) && g.getAttribute("name") ? g.click() : (m = i(V)) == null || m.requestSubmit();
    })) : i(R) !== k.VERIFIED && (n.preventDefault(), n.stopPropagation(), i(R) === k.VERIFYING && Wr()) : i(V) && h() && r() === "off" && i(R) === k.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), dr()));
  }
  function Gr() {
    st();
  }
  function Wr() {
    i(R) === k.VERIFYING && i(D).waitAlert && alert(i(D).waitAlert);
  }
  function Zr() {
    i(Me) ? i(Me).paused ? (i(Me).currentTime = 0, i(Me).play()) : i(Me).pause() : (w(cr, !0), requestAnimationFrame(() => {
      var n;
      (n = i(Me)) == null || n.play();
    }));
  }
  function Uo(n) {
    for (const u of Ue)
      typeof u.onStateChange == "function" && u.onStateChange(i(R));
    h() && i(R) !== k.UNVERIFIED && requestAnimationFrame(() => {
      Ct();
    }), w(yt, i(R) === k.VERIFIED);
  }
  function Jr() {
    h() && Ct();
  }
  function Kr(n) {
    return JSON.parse(n);
  }
  async function jo(n) {
    if (!ce())
      throw new Error("Attribute verifyurl not set.");
    S("requesting server verification from", ce());
    const u = { payload: n };
    if (ke() !== !1) {
      const {
        blockedCountries: m,
        classifier: I,
        disableRules: y,
        email: j,
        expectedLanguages: E,
        expectedCountries: q,
        fields: oe,
        ipAddress: qe,
        text: vr,
        timeZone: Ot
      } = No();
      u.blockedCountries = m, u.classifier = I, u.disableRules = y, u.email = j === !1 ? void 0 : So(j), u.expectedCountries = q, u.expectedLanguages = E || (Or ? [Or] : void 0), u.fields = oe === !1 ? void 0 : Ur(oe), u.ipAddress = qe === !1 ? void 0 : qe || "auto", u.text = vr, u.timeZone = Ot === !1 ? void 0 : Ot || Dn();
    }
    const g = await fetch(ce(), {
      body: JSON.stringify(u),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (g.status !== 200)
      throw new Error(`Server responded with ${g.status}.`);
    const b = await g.json();
    if (b != null && b.payload && w($e, F(b.payload)), Ve("serververification", b), o() && b.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  async function Xr(n, u) {
    if (!ce())
      throw new Error("Attribute verifyurl not set.");
    S("requesting sentinel verification from", ce());
    const g = { code: u, payload: n };
    Ke() && (g.fields = Ke().fields ? Ur() : void 0, g.timeZone = Ke().timeZone ? Dn() : void 0);
    const b = await fetch(ce(), {
      body: JSON.stringify(g),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (b.status !== 200)
      throw new Error(`Server responded with ${b.status}.`);
    const m = await b.json();
    return m != null && m.payload && w($e, F(m.payload)), Ve("sentinelverification", m), m;
  }
  function fr(n) {
    S("expire", n), Ee && (clearTimeout(Ee), Ee = null), n < 1 ? Vr() : Ee = setTimeout(Vr, n);
  }
  function Qr(n) {
    S("floating", n), h() !== n && (i(ee).style.left = "", i(ee).style.top = ""), h(n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : h()), h() ? (r() || r("onsubmit"), document.addEventListener("scroll", Br), document.addEventListener("click", qr), window.addEventListener("resize", Jr)) : r() === "onsubmit" && r(void 0);
  }
  function en(n) {
    if (!n.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (n.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!Pr.includes(n.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${Pr.join(", ")}`);
    if (!n.challenge || n.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!n.salt || n.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function tn(n) {
    let u = null;
    if ("Worker" in window) {
      try {
        u = await qo(n, n.maxNumber || n.maxnumber || ye());
      } catch (g) {
        S(g);
      }
      if ((u == null ? void 0 : u.number) !== void 0 || "obfuscated" in n)
        return { data: n, solution: u };
    }
    if ("obfuscated" in n) {
      const g = await qa(n.obfuscated, n.key, n.maxNumber || n.maxnumber);
      return { data: n, solution: await g.promise };
    }
    return {
      data: n,
      solution: await Ma(n.challenge, n.salt, n.algorithm, n.maxNumber || n.maxnumber || ye()).promise
    };
  }
  async function qo(n, u = typeof he() == "number" ? he() : n.maxNumber || n.maxnumber || ye(), g = Math.ceil(at())) {
    const b = [];
    g = Math.min(16, u, Math.max(1, g));
    for (let y = 0; y < g; y++)
      b.push(altchaCreateWorker(wt()));
    const m = Math.ceil(u / g), I = await Promise.all(b.map((y, j) => {
      const E = j * m;
      return new Promise((q) => {
        y.addEventListener("message", (oe) => {
          if (oe.data)
            for (const qe of b)
              qe !== y && qe.postMessage({ type: "abort" });
          q(oe.data);
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
  async function Et() {
    if (!Q()) {
      Ce(k.ERROR);
      return;
    }
    const n = Ue.find((u) => u.constructor.pluginName === "obfuscation");
    if (!n || !("clarify" in n)) {
      Ce(k.ERROR), S("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in n && typeof n.clarify == "function")
      return n.clarify();
  }
  function rn(n) {
    n.obfuscated !== void 0 && Q(n.obfuscated), n.auto !== void 0 && (r(n.auto), r() === "onload" && (Q() ? Et() : Se())), n.blockspam !== void 0 && o(!!n.blockspam), n.customfetch !== void 0 && c(n.customfetch), n.floatinganchor !== void 0 && p(n.floatinganchor), n.delay !== void 0 && d(n.delay), n.floatingoffset !== void 0 && x(n.floatingoffset), n.floating !== void 0 && Qr(n.floating), n.expire !== void 0 && (fr(n.expire), v(n.expire)), n.challenge && (a(typeof n.challenge == "string" ? n.challenge : JSON.stringify(n.challenge)), en(i(sr))), n.challengeurl !== void 0 && l(n.challengeurl), n.debug !== void 0 && f(!!n.debug), n.hidefooter !== void 0 && O(!!n.hidefooter), n.hidelogo !== void 0 && se(!!n.hidelogo), n.language !== void 0 && lt(Mr([n.language])), n.maxnumber !== void 0 && ye(+n.maxnumber), n.mockerror !== void 0 && U(!!n.mockerror), n.name !== void 0 && ue(n.name), n.refetchonexpire !== void 0 && bt(!!n.refetchonexpire), n.sentinel !== void 0 && typeof n.sentinel == "object" && Ke(n.sentinel), n.spamfilter !== void 0 && ke(typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && lt(typeof n.strings == "string" ? n.strings : JSON.stringify(n.strings)), n.test !== void 0 && he(typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && ce(n.verifyurl), n.workers !== void 0 && at(+n.workers), n.workerurl !== void 0 && wt(n.workerurl);
  }
  function nn() {
    return {
      auto: r(),
      blockspam: o(),
      challengeurl: l(),
      debug: f(),
      delay: d(),
      expire: v(),
      floating: h(),
      floatinganchor: p(),
      floatingoffset: x(),
      hidefooter: O(),
      hidelogo: se(),
      name: ue(),
      maxnumber: ye(),
      mockerror: U(),
      obfuscated: Q(),
      refetchonexpire: bt(),
      spamfilter: ke(),
      strings: i(D),
      test: he(),
      verifyurl: ce(),
      workers: at(),
      workerurl: wt()
    };
  }
  function on() {
    return i(it);
  }
  function Bo(n) {
    return Ue.find((u) => u.constructor.pluginName === n);
  }
  function ln() {
    return i(R);
  }
  function an() {
    i(ee).style.display = "none";
  }
  function Ct(n = 20) {
    var u;
    if (i(ee))
      if (i(it) || w(it, F((p() ? document.querySelector(p()) : (u = i(V)) == null ? void 0 : u.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || i(V))), i(it)) {
        const g = parseInt(x(), 10) || 12, b = i(it).getBoundingClientRect(), m = i(ee).getBoundingClientRect(), I = document.documentElement.clientHeight, y = document.documentElement.clientWidth, j = h() === "auto" ? b.bottom + m.height + g + n > I : h() === "top", E = Math.max(n, Math.min(y - n - m.width, b.left + b.width / 2 - m.width / 2));
        if (j ? i(ee).style.top = `${b.top - (m.height + g)}px` : i(ee).style.top = `${b.bottom + g}px`, i(ee).style.left = `${E}px`, i(ee).setAttribute("data-floating", j ? "top" : "bottom"), i(kt)) {
          const q = i(kt).getBoundingClientRect();
          i(kt).style.left = b.left - E + b.width / 2 - q.width / 2 + "px";
        }
      } else
        S("unable to find floating anchor element");
  }
  function st(n = k.UNVERIFIED, u = null) {
    Ee && (clearTimeout(Ee), Ee = null), w(yt, !1), w($e, null), w(B, null), w(cr, !1), w(H, null), Ce(n, u);
  }
  function sn(n) {
    w(it, F(n));
  }
  function Ce(n, u = null) {
    w(R, F(n)), w(Xe, F(u)), Ve("statechange", {
      payload: i($e),
      state: i(R)
    });
  }
  function dr() {
    i(ee).style.display = "block", h() && Ct();
  }
  async function Se() {
    return st(k.VERIFYING), await new Promise((n) => setTimeout(n, d() || 0)), $o().then((n) => (en(n), S("challenge", n), tn(n))).then(({ data: n, solution: u }) => {
      var g;
      if (S("solution", u), !u || n && "challenge" in n && !("clearText" in u))
        if ((u == null ? void 0 : u.number) !== void 0 && "challenge" in n)
          if (ce() && "codeChallenge" in n)
            ((g = document.activeElement) == null ? void 0 : g.tagName) === "INPUT" && _() === !1 && document.activeElement.blur(), w(B, F({ challenge: n, solution: u }));
          else {
            if (ce() && Ke() !== void 0)
              return Xr(Lt(n, u));
            if (ce())
              return jo(Lt(n, u));
            w($e, F(Lt(n, u))), S("payload", i($e));
          }
        else
          throw S("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      i(B) ? (Ce(k.CODE), br().then(() => {
        Ve("code", { codeChallenge: i(B) });
      })) : (Ce(k.VERIFIED), S("verified"), br().then(() => {
        Ve("verified", { payload: i($e) });
      }));
    }).catch((n) => {
      S(n), Ce(k.ERROR, n.message);
    });
  }
  var un = si(), cn = It(un);
  Ea(cn, t, "default", {});
  var xt = Z(cn, 2), hr = W(xt), Pt = W(hr);
  let fn;
  var dn = W(Pt);
  {
    var Ho = (n) => {
      wr(n);
    };
    J(dn, (n) => {
      i(R) === k.VERIFYING && n(Ho);
    });
  }
  var je = Z(dn, 2);
  Nn(je), je.__change = [
    Ga,
    R,
    ke,
    V,
    yt,
    Q,
    Et,
    Se
  ], Mt(je, (n) => w(ur, n), () => i(ur)), G(Pt);
  var At = Z(Pt, 2), Yo = W(At);
  {
    var Go = (n) => {
      var u = Vt(), g = It(u);
      et(g, () => i(D).verified), M(n, u);
    }, Wo = (n, u) => {
      {
        var g = (m) => {
          var I = Vt(), y = It(I);
          et(y, () => i(D).verifying), M(m, I);
        }, b = (m, I) => {
          {
            var y = (E) => {
              var q = Vt(), oe = It(q);
              et(oe, () => i(D).verificationRequired), M(E, q);
            }, j = (E) => {
              var q = Vt(), oe = It(q);
              et(oe, () => i(D).label), M(E, q);
            };
            J(
              m,
              (E) => {
                i(R) === k.CODE ? E(y) : E(j, !1);
              },
              I
            );
          }
        };
        J(
          n,
          (m) => {
            i(R) === k.VERIFYING ? m(g) : m(b, !1);
          },
          u
        );
      }
    };
    J(Yo, (n) => {
      i(R) === k.VERIFIED ? n(Go) : n(Wo, !1);
    });
  }
  G(At);
  var hn = Z(At, 2);
  {
    var Zo = (n) => {
      var u = Za();
      Nn(u), Ne(() => {
        $(u, "name", ue()), $a(u, i($e));
      }), M(n, u);
    };
    J(hn, (n) => {
      i(R) === k.VERIFIED && n(Zo);
    });
  }
  var vn = Z(hn, 2);
  {
    var Jo = (n) => {
      var u = Ja(), g = W(u);
      $(g, "href", Ao), G(u), Ne(() => $(g, "aria-label", i(D).ariaLinkLabel)), M(n, u);
    };
    J(vn, (n) => {
      (se() !== !0 || i(ir)) && n(Jo);
    });
  }
  var Ko = Z(vn, 2);
  {
    var Xo = (n) => {
      var u = ri(), g = Z(W(u), 2), b = W(g), m = Z(b, 2);
      _a(m, !_()), m.__keydown = [
        Ha,
        Zr
      ];
      var I = Z(m, 2), y = W(I), j = W(y);
      {
        var E = (_e) => {
          var Y = ei();
          Y.__click = Zr;
          var Ft = W(Y);
          {
            var Rt = (ut) => {
              wr(ut, () => 20);
            }, ll = (ut, al) => {
              {
                var il = (ct) => {
                  var gr = Ka();
                  M(ct, gr);
                }, sl = (ct, gr) => {
                  {
                    var ul = (ft) => {
                      var _r = Xa();
                      M(ft, _r);
                    }, cl = (ft) => {
                      var _r = Qa();
                      M(ft, _r);
                    };
                    J(
                      ct,
                      (ft) => {
                        i(H) === K.PLAYING ? ft(ul) : ft(cl, !1);
                      },
                      gr
                    );
                  }
                };
                J(
                  ut,
                  (ct) => {
                    i(H) === K.ERROR ? ct(il) : ct(sl, !1);
                  },
                  al
                );
              }
            };
            J(Ft, (ut) => {
              i(H) === K.LOADING ? ut(Rt) : ut(ll, !1);
            });
          }
          G(Y), Ne(() => {
            $(Y, "title", i(D).getAudioChallenge), Y.disabled = i(H) === K.LOADING || i(H) === K.ERROR || i(Qe), $(Y, "aria-label", i(H) === K.LOADING ? i(D).loading : i(D).getAudioChallenge);
          }), M(_e, Y);
        };
        J(j, (_e) => {
          i(B).challenge.codeChallenge.audio && _e(E);
        });
      }
      var q = Z(j, 2);
      q.__click = [Ya, Se], G(y);
      var oe = Z(y, 2), qe = W(oe);
      {
        var vr = (_e) => {
          wr(_e, () => 16);
        };
        J(qe, (_e) => {
          i(Qe) && _e(vr);
        });
      }
      var Ot = Z(qe);
      G(oe), G(I);
      var nl = Z(I, 2);
      {
        var ol = (_e) => {
          var Y = ti(), Ft = W(Y);
          G(Y), Mt(Y, (Rt) => w(Me, Rt), () => i(Me)), Ne((Rt) => $(Ft, "src", Rt), [
            () => jr(i(B).challenge.codeChallenge.audio)
          ]), Be("loadstart", Y, Po), Be("canplay", Y, Lo), Be("pause", Y, Fo), Be("playing", Y, Oo), Be("ended", Y, To), Be("error", Ft, Do), M(_e, Y);
        };
        J(nl, (_e) => {
          i(B).challenge.codeChallenge.audio && i(cr) && _e(ol);
        });
      }
      G(g), G(u), Ne(() => {
        $(u, "aria-label", i(D).verificationRequired), $(b, "src", i(B).challenge.codeChallenge.image), $(m, "minlength", i(B).challenge.codeChallenge.length || 1), $(m, "maxlength", i(B).challenge.codeChallenge.length), $(m, "placeholder", i(D).enterCode), $(m, "aria-label", i(H) === K.LOADING ? i(D).loading : i(H) === K.PLAYING ? "" : i(D).enterCodeAria), $(m, "aria-live", i(H) ? "assertive" : "polite"), $(m, "aria-busy", i(H) === K.LOADING), m.disabled = i(Qe), $(q, "aria-label", i(D).reload), $(q, "title", i(D).reload), q.disabled = i(Qe), oe.disabled = i(Qe), $(oe, "aria-label", i(D).verify), wa(Ot, ` ${i(D).verify ?? ""}`);
      }), Be("submit", g, Vo, !0), M(n, u);
    };
    J(Ko, (n) => {
      var u;
      (u = i(B)) != null && u.challenge.codeChallenge && n(Xo);
    });
  }
  G(hr);
  var gn = Z(hr, 2);
  {
    var Qo = (n) => {
      var u = li(), g = Z(W(u), 2);
      {
        var b = (I) => {
          var y = ni(), j = W(y);
          et(j, () => i(D).expired), G(y), Ne(() => $(y, "title", i(Xe))), M(I, y);
        }, m = (I) => {
          var y = oi(), j = W(y);
          et(j, () => i(D).error), G(y), Ne(() => $(y, "title", i(Xe))), M(I, y);
        };
        J(g, (I) => {
          i(R) === k.EXPIRED ? I(b) : I(m, !1);
        });
      }
      G(u), M(n, u);
    };
    J(gn, (n) => {
      (i(Xe) || i(R) === k.EXPIRED) && n(Qo);
    });
  }
  var _n = Z(gn, 2);
  {
    var el = (n) => {
      var u = ai(), g = W(u), b = W(g);
      et(b, () => i(D).footer), G(g), G(u), M(n, u);
    };
    J(_n, (n) => {
      i(D).footer && (O() !== !0 || i(ir)) && n(el);
    });
  }
  var tl = Z(_n, 2);
  {
    var rl = (n) => {
      var u = ii();
      Mt(u, (g) => w(kt, g), () => i(kt)), M(n, u);
    };
    J(tl, (n) => {
      h() && n(rl);
    });
  }
  return G(xt), Mt(xt, (n) => w(ee, n), () => i(ee)), Ne(
    (n) => {
      var u;
      $(xt, "data-state", i(R)), $(xt, "data-floating", h()), fn = Aa(Pt, 1, "altcha-checkbox svelte-uo3tkz", null, fn, n), $(je, "id", i(Fr)), je.required = r() !== "onsubmit" && (!h() || r() !== "off"), $(je, "aria-hidden", i(R) === k.VERIFYING), $(At, "for", i(Fr)), $(At, "aria-hidden", !!((u = i(B)) != null && u.challenge.codeChallenge));
    },
    [
      () => ({
        "altcha-checkbox-verifying": i(R) === k.VERIFYING
      })
    ]
  ), Be("invalid", je, Wr), Na(je, () => i(yt), (n) => w(yt, n)), M(e, un), vo({
    clarify: Et,
    configure: rn,
    getConfiguration: nn,
    getFloatingAnchor: on,
    getPlugin: Bo,
    getState: ln,
    hide: an,
    repositionFloating: Ct,
    reset: st,
    setFloatingAnchor: sn,
    setState: Ce,
    show: dr,
    verify: Se,
    get auto() {
      return r();
    },
    set auto(n = void 0) {
      r(n), C();
    },
    get blockspam() {
      return o();
    },
    set blockspam(n = void 0) {
      o(n), C();
    },
    get challengeurl() {
      return l();
    },
    set challengeurl(n = void 0) {
      l(n), C();
    },
    get challengejson() {
      return a();
    },
    set challengejson(n = void 0) {
      a(n), C();
    },
    get credentials() {
      return s();
    },
    set credentials(n = void 0) {
      s(n), C();
    },
    get customfetch() {
      return c();
    },
    set customfetch(n = void 0) {
      c(n), C();
    },
    get debug() {
      return f();
    },
    set debug(n = !1) {
      f(n), C();
    },
    get delay() {
      return d();
    },
    set delay(n = 0) {
      d(n), C();
    },
    get disableautofocus() {
      return _();
    },
    set disableautofocus(n = !1) {
      _(n), C();
    },
    get expire() {
      return v();
    },
    set expire(n = void 0) {
      v(n), C();
    },
    get floating() {
      return h();
    },
    set floating(n = void 0) {
      h(n), C();
    },
    get floatinganchor() {
      return p();
    },
    set floatinganchor(n = void 0) {
      p(n), C();
    },
    get floatingoffset() {
      return x();
    },
    set floatingoffset(n = void 0) {
      x(n), C();
    },
    get floatingpersist() {
      return T();
    },
    set floatingpersist(n = !1) {
      T(n), C();
    },
    get hidefooter() {
      return O();
    },
    set hidefooter(n = !1) {
      O(n), C();
    },
    get hidelogo() {
      return se();
    },
    set hidelogo(n = !1) {
      se(n), C();
    },
    get id() {
      return ne();
    },
    set id(n = void 0) {
      ne(n), C();
    },
    get language() {
      return X();
    },
    set language(n = void 0) {
      X(n), C();
    },
    get name() {
      return ue();
    },
    set name(n = "altcha") {
      ue(n), C();
    },
    get maxnumber() {
      return ye();
    },
    set maxnumber(n = 1e6) {
      ye(n), C();
    },
    get mockerror() {
      return U();
    },
    set mockerror(n = !1) {
      U(n), C();
    },
    get obfuscated() {
      return Q();
    },
    set obfuscated(n = void 0) {
      Q(n), C();
    },
    get plugins() {
      return Fe();
    },
    set plugins(n = void 0) {
      Fe(n), C();
    },
    get refetchonexpire() {
      return bt();
    },
    set refetchonexpire(n = !0) {
      bt(n), C();
    },
    get sentinel() {
      return Ke();
    },
    set sentinel(n = void 0) {
      Ke(n), C();
    },
    get spamfilter() {
      return ke();
    },
    set spamfilter(n = !1) {
      ke(n), C();
    },
    get strings() {
      return lt();
    },
    set strings(n = void 0) {
      lt(n), C();
    },
    get test() {
      return he();
    },
    set test(n = !1) {
      he(n), C();
    },
    get verifyurl() {
      return ce();
    },
    set verifyurl(n = void 0) {
      ce(n), C();
    },
    get workers() {
      return at();
    },
    set workers(n = Math.min(16, navigator.hardwareConcurrency || 8)) {
      at(n), C();
    },
    get workerurl() {
      return wt();
    },
    set workerurl(n = void 0) {
      wt(n), C();
    }
  });
}
ba(["change", "keydown", "click"]);
customElements.define("altcha-widget", Oa(
  ci,
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
globalThis.altchaCreateWorker = (e) => e ? new Worker(new URL(e)) : new hl();
export {
  ci as Altcha
};
