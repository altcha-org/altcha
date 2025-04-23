var ul = Object.defineProperty;
var mn = (e) => {
  throw TypeError(e);
};
var cl = (e, t, r) => t in e ? ul(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var pe = (e, t, r) => cl(e, typeof t != "symbol" ? t + "" : t, r), pn = (e, t, r) => t.has(e) || mn("Cannot " + r);
var oe = (e, t, r) => (pn(e, t, "read from private field"), r ? r.call(e) : t.get(e)), gr = (e, t, r) => t.has(e) ? mn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), _r = (e, t, r, o) => (pn(e, t, "write to private field"), o ? o.call(e, r) : t.set(e, r), r);
const Tn = `(function(){"use strict";const d=new TextEncoder;function p(e){return[...new Uint8Array(e)].map(t=>t.toString(16).padStart(2,"0")).join("")}async function b(e,t,r){if(typeof crypto>"u"||!("subtle"in crypto)||!("digest"in crypto.subtle))throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");return p(await crypto.subtle.digest(r.toUpperCase(),d.encode(e+t)))}function w(e,t,r="SHA-256",n=1e6,s=0){const o=new AbortController,a=Date.now();return{promise:(async()=>{for(let c=s;c<=n;c+=1){if(o.signal.aborted)return null;if(await b(t,c,r)===e)return{number:c,took:Date.now()-a}}return null})(),controller:o}}function h(e){const t=atob(e),r=new Uint8Array(t.length);for(let n=0;n<t.length;n++)r[n]=t.charCodeAt(n);return r}function g(e,t=12){const r=new Uint8Array(t);for(let n=0;n<t;n++)r[n]=e%256,e=Math.floor(e/256);return r}async function m(e,t="",r=1e6,n=0){const s="AES-GCM",o=new AbortController,a=Date.now(),l=async()=>{for(let u=n;u<=r;u+=1){if(o.signal.aborted||!c||!y)return null;try{const f=await crypto.subtle.decrypt({name:s,iv:g(u)},c,y);if(f)return{clearText:new TextDecoder().decode(f),took:Date.now()-a}}catch{}}return null};let c=null,y=null;try{y=h(e);const u=await crypto.subtle.digest("SHA-256",d.encode(t));c=await crypto.subtle.importKey("raw",u,s,!1,["decrypt"])}catch{return{promise:Promise.reject(),controller:o}}return{promise:l(),controller:o}}let i;onmessage=async e=>{const{type:t,payload:r,start:n,max:s}=e.data;let o=null;if(t==="abort")i==null||i.abort(),i=void 0;else if(t==="work"){if("obfuscated"in r){const{key:a,obfuscated:l}=r||{};o=await m(l,a,s,n)}else{const{algorithm:a,challenge:l,salt:c}=r||{};o=w(l,c,a,s,n)}i=o.controller,o.promise.then(a=>{self.postMessage(a&&{...a,worker:!0})})}}})();
`, bn = typeof self < "u" && self.Blob && new Blob([Tn], { type: "text/javascript;charset=utf-8" });
function fl(e) {
  let t;
  try {
    if (t = bn && (self.URL || self.webkitURL).createObjectURL(bn), !t) throw "";
    const r = new Worker(t, {
      name: e == null ? void 0 : e.name
    });
    return r.addEventListener("error", () => {
      (self.URL || self.webkitURL).revokeObjectURL(t);
    }), r;
  } catch {
    return new Worker(
      "data:text/javascript;charset=utf-8," + encodeURIComponent(Tn),
      {
        name: e == null ? void 0 : e.name
      }
    );
  } finally {
    t && (self.URL || self.webkitURL).revokeObjectURL(t);
  }
}
const dl = "5";
var Dn;
typeof window < "u" && ((Dn = window.__svelte ?? (window.__svelte = {})).v ?? (Dn.v = /* @__PURE__ */ new Set())).add(dl);
const hl = 1, vl = 4, gl = 8, _l = 16, ml = 1, pl = 2, Cr = "[", Ln = "[!", Pn = "]", ht = {}, ae = Symbol(), bl = "http://www.w3.org/1999/xhtml", wn = !1, we = 2, On = 4, Kt = 8, xr = 16, Oe = 32, rt = 64, jt = 128, he = 256, qt = 512, ue = 1024, Fe = 2048, mt = 4096, vt = 8192, Xt = 16384, wl = 32768, Ar = 65536, yl = 1 << 19, Fn = 1 << 20, It = Symbol("$state"), Vn = Symbol("legacy props"), kl = Symbol("");
var Mn = Array.isArray, El = Array.prototype.indexOf, Cl = Array.from, Ht = Object.keys, Bt = Object.defineProperty, et = Object.getOwnPropertyDescriptor, xl = Object.getOwnPropertyDescriptors, Al = Object.prototype, Rl = Array.prototype, Un = Object.getPrototypeOf;
function jn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Il(e, t, r = !1) {
  return e === void 0 ? r ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
const $l = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let St = [], zt = [];
function qn() {
  var e = St;
  St = [], jn(e);
}
function Hn() {
  var e = zt;
  zt = [], jn(e);
}
function Qt(e) {
  St.length === 0 && queueMicrotask(qn), St.push(e);
}
function Sl(e) {
  zt.length === 0 && $l(Hn), zt.push(e);
}
function yn() {
  St.length > 0 && qn(), zt.length > 0 && Hn();
}
function Bn(e) {
  return e === this.v;
}
function zl(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Rr(e) {
  return !zl(e, this.v);
}
function Nl(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Dl() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Tl(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ll() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Pl() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Ol(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Fl() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Vl() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ml() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Ul() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let jl = !1;
function Ae(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Bn,
    rv: 0,
    wv: 0
  };
  return r;
}
function le(e) {
  return /* @__PURE__ */ ql(Ae(e));
}
// @__NO_SIDE_EFFECTS__
function Yn(e, t = !1) {
  const r = Ae(e);
  return t || (r.equals = Rr), r;
}
// @__NO_SIDE_EFFECTS__
function ql(e) {
  return z !== null && !be && (z.f & we) !== 0 && (Re === null ? Jl([e]) : Re.push(e)), e;
}
function w(e, t) {
  return z !== null && !be && ho() && (z.f & (we | xr)) !== 0 && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (Re === null || !Re.includes(e)) && Ul(), Hl(e, t);
}
function Hl(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = eo(), Gn(e, Fe), N !== null && (N.f & ue) !== 0 && (N.f & (Oe | rt)) === 0 && (De === null ? Kl([e]) : De.push(e))), t;
}
function Gn(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var o = r.length, l = 0; l < o; l++) {
      var a = r[l], s = a.f;
      (s & Fe) === 0 && ($e(a, t), (s & (ue | he)) !== 0 && ((s & we) !== 0 ? Gn(
        /** @type {Derived} */
        a,
        mt
      ) : nr(
        /** @type {Effect} */
        a
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Be(e) {
  var t = we | Fe, r = z !== null && (z.f & we) !== 0 ? (
    /** @type {Derived} */
    z
  ) : null;
  return N === null || r !== null && (r.f & he) !== 0 ? t |= he : N.f |= Fn, {
    ctx: re,
    deps: null,
    effects: null,
    equals: Bn,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: r ?? N
  };
}
// @__NO_SIDE_EFFECTS__
function Bl(e) {
  const t = /* @__PURE__ */ Be(e);
  return t.equals = Rr, t;
}
function Wn(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Pe(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Yl(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & we) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Gl(e) {
  var t, r = N;
  Ze(Yl(e));
  try {
    Wn(e), t = ro(e);
  } finally {
    Ze(r);
  }
  return t;
}
function Zn(e) {
  var t = Gl(e), r = (Ye || (e.f & he) !== 0) && e.deps !== null ? mt : ue;
  $e(e, r), e.equals(t) || (e.v = t, e.wv = eo());
}
function er(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let P = !1;
function dt(e) {
  P = e;
}
let L;
function Ge(e) {
  if (e === null)
    throw er(), ht;
  return L = e;
}
function gt() {
  return Ge(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Je(L)
  );
}
function Z(e) {
  if (P) {
    if (/* @__PURE__ */ Je(L) !== null)
      throw er(), ht;
    L = e;
  }
}
function Wl() {
  for (var e = 0, t = L; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === Pn) {
        if (e === 0) return t;
        e -= 1;
      } else (r === Cr || r === Ln) && (e += 1);
    }
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Je(t)
    );
    t.remove(), t = o;
  }
}
function O(e, t = null, r) {
  if (typeof e != "object" || e === null || It in e)
    return e;
  const o = Un(e);
  if (o !== Al && o !== Rl)
    return e;
  var l = /* @__PURE__ */ new Map(), a = Mn(e), s = Ae(0);
  a && l.set("length", Ae(
    /** @type {any[]} */
    e.length
  ));
  var f;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(c, d, h) {
        (!("value" in h) || h.configurable === !1 || h.enumerable === !1 || h.writable === !1) && Fl();
        var v = l.get(d);
        return v === void 0 ? (v = Ae(h.value), l.set(d, v)) : w(v, O(h.value, f)), !0;
      },
      deleteProperty(c, d) {
        var h = l.get(d);
        if (h === void 0)
          d in c && l.set(d, Ae(ae));
        else {
          if (a && typeof d == "string") {
            var v = (
              /** @type {Source<number>} */
              l.get("length")
            ), g = Number(d);
            Number.isInteger(g) && g < v.v && w(v, g);
          }
          w(h, ae), kn(s);
        }
        return !0;
      },
      get(c, d, h) {
        var C;
        if (d === It)
          return e;
        var v = l.get(d), g = d in c;
        if (v === void 0 && (!g || (C = et(c, d)) != null && C.writable) && (v = Ae(O(g ? c[d] : ae, f)), l.set(d, v)), v !== void 0) {
          var m = i(v);
          return m === ae ? void 0 : m;
        }
        return Reflect.get(c, d, h);
      },
      getOwnPropertyDescriptor(c, d) {
        var h = Reflect.getOwnPropertyDescriptor(c, d);
        if (h && "value" in h) {
          var v = l.get(d);
          v && (h.value = i(v));
        } else if (h === void 0) {
          var g = l.get(d), m = g == null ? void 0 : g.v;
          if (g !== void 0 && m !== ae)
            return {
              enumerable: !0,
              configurable: !0,
              value: m,
              writable: !0
            };
        }
        return h;
      },
      has(c, d) {
        var m;
        if (d === It)
          return !0;
        var h = l.get(d), v = h !== void 0 && h.v !== ae || Reflect.has(c, d);
        if (h !== void 0 || N !== null && (!v || (m = et(c, d)) != null && m.writable)) {
          h === void 0 && (h = Ae(v ? O(c[d], f) : ae), l.set(d, h));
          var g = i(h);
          if (g === ae)
            return !1;
        }
        return v;
      },
      set(c, d, h, v) {
        var U;
        var g = l.get(d), m = d in c;
        if (a && d === "length")
          for (var C = h; C < /** @type {Source<number>} */
          g.v; C += 1) {
            var D = l.get(C + "");
            D !== void 0 ? w(D, ae) : C in c && (D = Ae(ae), l.set(C + "", D));
          }
        g === void 0 ? (!m || (U = et(c, d)) != null && U.writable) && (g = Ae(void 0), w(g, O(h, f)), l.set(d, g)) : (m = g.v !== ae, w(g, O(h, f)));
        var V = Reflect.getOwnPropertyDescriptor(c, d);
        if (V != null && V.set && V.set.call(v, h), !m) {
          if (a && typeof d == "string") {
            var ke = (
              /** @type {Source<number>} */
              l.get("length")
            ), H = Number(d);
            Number.isInteger(H) && H >= ke.v && w(ke, H + 1);
          }
          kn(s);
        }
        return !0;
      },
      ownKeys(c) {
        i(s);
        var d = Reflect.ownKeys(c).filter((g) => {
          var m = l.get(g);
          return m === void 0 || m.v !== ae;
        });
        for (var [h, v] of l)
          v.v !== ae && !(h in c) && d.push(h);
        return d;
      },
      setPrototypeOf() {
        Vl();
      }
    }
  );
}
function kn(e, t = 1) {
  w(e, e.v + t);
}
var En, Jn, Kn, Xn;
function br() {
  if (En === void 0) {
    En = window, Jn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    Kn = et(t, "firstChild").get, Xn = et(t, "nextSibling").get, e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function tr(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Le(e) {
  return Kn.call(e);
}
// @__NO_SIDE_EFFECTS__
function Je(e) {
  return Xn.call(e);
}
function J(e, t) {
  if (!P)
    return /* @__PURE__ */ Le(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Le(L)
  );
  return r === null && (r = L.appendChild(tr())), Ge(r), r;
}
function At(e, t) {
  if (!P) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Le(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Je(r) : r;
  }
  return L;
}
function K(e, t = 1, r = !1) {
  let o = P ? L : e;
  for (var l; t--; )
    l = o, o = /** @type {TemplateNode} */
    /* @__PURE__ */ Je(o);
  if (!P)
    return o;
  var a = o == null ? void 0 : o.nodeType;
  if (r && a !== 3) {
    var s = tr();
    return o === null ? l == null || l.after(s) : o.before(s), Ge(s), s;
  }
  return Ge(o), /** @type {TemplateNode} */
  o;
}
function Zl(e) {
  e.textContent = "";
}
let Mt = !1, Yt = !1, Gt = null, tt = !1, Ir = !1;
function Cn(e) {
  Ir = e;
}
let $t = [];
let z = null, be = !1;
function We(e) {
  z = e;
}
let N = null;
function Ze(e) {
  N = e;
}
let Re = null;
function Jl(e) {
  Re = e;
}
let te = null, se = 0, De = null;
function Kl(e) {
  De = e;
}
let Qn = 1, Wt = 0, Ye = !1;
function eo() {
  return ++Qn;
}
function Nt(e) {
  var v;
  var t = e.f;
  if ((t & Fe) !== 0)
    return !0;
  if ((t & mt) !== 0) {
    var r = e.deps, o = (t & he) !== 0;
    if (r !== null) {
      var l, a, s = (t & qt) !== 0, f = o && N !== null && !Ye, c = r.length;
      if (s || f) {
        var d = (
          /** @type {Derived} */
          e
        ), h = d.parent;
        for (l = 0; l < c; l++)
          a = r[l], (s || !((v = a == null ? void 0 : a.reactions) != null && v.includes(d))) && (a.reactions ?? (a.reactions = [])).push(d);
        s && (d.f ^= qt), f && h !== null && (h.f & he) === 0 && (d.f ^= he);
      }
      for (l = 0; l < c; l++)
        if (a = r[l], Nt(
          /** @type {Derived} */
          a
        ) && Zn(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!o || N !== null && !Ye) && $e(e, ue);
  }
  return !1;
}
function Xl(e, t) {
  for (var r = t; r !== null; ) {
    if ((r.f & jt) !== 0)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= jt;
      }
    r = r.parent;
  }
  throw Mt = !1, e;
}
function Ql(e) {
  return (e.f & Xt) === 0 && (e.parent === null || (e.parent.f & jt) === 0);
}
function rr(e, t, r, o) {
  if (Mt) {
    if (r === null && (Mt = !1), Ql(t))
      throw e;
    return;
  }
  r !== null && (Mt = !0);
  {
    Xl(e, t);
    return;
  }
}
function to(e, t, r = !0) {
  var o = e.reactions;
  if (o !== null)
    for (var l = 0; l < o.length; l++) {
      var a = o[l];
      (a.f & we) !== 0 ? to(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (r ? $e(a, Fe) : (a.f & ue) !== 0 && $e(a, mt), nr(
        /** @type {Effect} */
        a
      ));
    }
}
function ro(e) {
  var m;
  var t = te, r = se, o = De, l = z, a = Ye, s = Re, f = re, c = be, d = e.f;
  te = /** @type {null | Value[]} */
  null, se = 0, De = null, Ye = (d & he) !== 0 && (be || !tt || z === null), z = (d & (Oe | rt)) === 0 ? e : null, Re = null, An(e.ctx), be = !1, Wt++;
  try {
    var h = (
      /** @type {Function} */
      (0, e.fn)()
    ), v = e.deps;
    if (te !== null) {
      var g;
      if (Zt(e, se), v !== null && se > 0)
        for (v.length = se + te.length, g = 0; g < te.length; g++)
          v[se + g] = te[g];
      else
        e.deps = v = te;
      if (!Ye)
        for (g = se; g < v.length; g++)
          ((m = v[g]).reactions ?? (m.reactions = [])).push(e);
    } else v !== null && se < v.length && (Zt(e, se), v.length = se);
    if (ho() && De !== null && !be && v !== null && (e.f & (we | mt | Fe)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      De.length; g++)
        to(
          De[g],
          /** @type {Effect} */
          e
        );
    return l !== null && Wt++, h;
  } finally {
    te = t, se = r, De = o, z = l, Ye = a, Re = s, An(f), be = c;
  }
}
function ea(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var o = El.call(r, e);
    if (o !== -1) {
      var l = r.length - 1;
      l === 0 ? r = t.reactions = null : (r[o] = r[l], r.pop());
    }
  }
  r === null && (t.f & we) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (te === null || !te.includes(t)) && ($e(t, mt), (t.f & (he | qt)) === 0 && (t.f ^= qt), Wn(
    /** @type {Derived} **/
    t
  ), Zt(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Zt(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var o = t; o < r.length; o++)
      ea(e, r[o]);
}
function $r(e) {
  var t = e.f;
  if ((t & Xt) === 0) {
    $e(e, ue);
    var r = N, o = re, l = tt;
    N = e, tt = !0;
    try {
      (t & xr) !== 0 ? ca(e) : lo(e), oo(e);
      var a = ro(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = Qn;
      var s = e.deps, f;
      wn && jl && e.f & Fe;
    } catch (c) {
      rr(c, e, r, o || e.ctx);
    } finally {
      tt = l, N = r;
    }
  }
}
function ta() {
  try {
    Ll();
  } catch (e) {
    if (Gt !== null)
      rr(e, Gt, null);
    else
      throw e;
  }
}
function no() {
  var e = tt;
  try {
    var t = 0;
    for (tt = !0; $t.length > 0; ) {
      t++ > 1e3 && ta();
      var r = $t, o = r.length;
      $t = [];
      for (var l = 0; l < o; l++) {
        var a = na(r[l]);
        ra(a);
      }
    }
  } finally {
    Yt = !1, tt = e, Gt = null;
  }
}
function ra(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var o = e[r];
      if ((o.f & (Xt | vt)) === 0)
        try {
          Nt(o) && ($r(o), o.deps === null && o.first === null && o.nodes_start === null && (o.teardown === null ? ao(o) : o.fn = null));
        } catch (l) {
          rr(l, o, null, o.ctx);
        }
    }
}
function nr(e) {
  Yt || (Yt = !0, queueMicrotask(no));
  for (var t = Gt = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (rt | Oe)) !== 0) {
      if ((r & ue) === 0) return;
      t.f ^= ue;
    }
  }
  $t.push(t);
}
function na(e) {
  for (var t = [], r = e; r !== null; ) {
    var o = r.f, l = (o & (Oe | rt)) !== 0, a = l && (o & ue) !== 0;
    if (!a && (o & vt) === 0) {
      if ((o & On) !== 0)
        t.push(r);
      else if (l)
        r.f ^= ue;
      else {
        var s = z;
        try {
          z = r, Nt(r) && $r(r);
        } catch (d) {
          rr(d, r, null, r.ctx);
        } finally {
          z = s;
        }
      }
      var f = r.first;
      if (f !== null) {
        r = f;
        continue;
      }
    }
    var c = r.parent;
    for (r = r.next; r === null && c !== null; )
      r = c.next, c = c.parent;
  }
  return t;
}
function x(e) {
  var t;
  for (yn(); $t.length > 0; )
    Yt = !0, no(), yn();
  return (
    /** @type {T} */
    t
  );
}
async function mr() {
  await Promise.resolve(), x();
}
function i(e) {
  var t = e.f, r = (t & we) !== 0;
  if (z !== null && !be) {
    Re !== null && Re.includes(e) && Ml();
    var o = z.deps;
    e.rv < Wt && (e.rv = Wt, te === null && o !== null && o[se] === e ? se++ : te === null ? te = [e] : (!Ye || !te.includes(e)) && te.push(e));
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var l = (
      /** @type {Derived} */
      e
    ), a = l.parent;
    a !== null && (a.f & he) === 0 && (l.f ^= he);
  }
  return r && (l = /** @type {Derived} */
  e, Nt(l) && Zn(l)), e.v;
}
function _t(e) {
  var t = be;
  try {
    return be = !0, e();
  } finally {
    be = t;
  }
}
const oa = -7169;
function $e(e, t) {
  e.f = e.f & oa | t;
}
function la(e) {
  N === null && z === null && Tl(), z !== null && (z.f & he) !== 0 && N === null && Dl(), Ir && Nl();
}
function aa(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function nt(e, t, r, o = !0) {
  var l = N, a = {
    ctx: re,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Fe,
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
      $r(a), a.f |= wl;
    } catch (c) {
      throw Pe(a), c;
    }
  else t !== null && nr(a);
  var s = r && a.deps === null && a.first === null && a.nodes_start === null && a.teardown === null && (a.f & (Fn | jt)) === 0;
  if (!s && o && (l !== null && aa(a, l), z !== null && (z.f & we) !== 0)) {
    var f = (
      /** @type {Derived} */
      z
    );
    (f.effects ?? (f.effects = [])).push(a);
  }
  return a;
}
function ia(e) {
  const t = nt(Kt, null, !1);
  return $e(t, ue), t.teardown = e, t;
}
function wr(e) {
  la();
  var t = N !== null && (N.f & Oe) !== 0 && re !== null && !re.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      re
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: N,
      reaction: z
    });
  } else {
    var o = Sr(e);
    return o;
  }
}
function sa(e) {
  const t = nt(rt, e, !0);
  return () => {
    Pe(t);
  };
}
function ua(e) {
  const t = nt(rt, e, !0);
  return (r = {}) => new Promise((o) => {
    r.outro ? yr(t, () => {
      Pe(t), o(void 0);
    }) : (Pe(t), o(void 0));
  });
}
function Sr(e) {
  return nt(On, e, !1);
}
function zr(e) {
  return nt(Kt, e, !0);
}
function Ne(e, t = [], r = Be) {
  const o = t.map(r);
  return Nr(() => e(...o.map(i)));
}
function Nr(e, t = 0) {
  return nt(Kt | xr | t, e, !0);
}
function Jt(e, t = !0) {
  return nt(Kt | Oe, e, !0, t);
}
function oo(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Ir, o = z;
    Cn(!0), We(null);
    try {
      t.call(null);
    } finally {
      Cn(r), We(o);
    }
  }
}
function lo(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var o = r.next;
    (r.f & rt) !== 0 ? r.parent = null : Pe(r, t), r = o;
  }
}
function ca(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Oe) === 0 && Pe(t), t = r;
  }
}
function Pe(e, t = !0) {
  var r = !1;
  if ((t || (e.f & yl) !== 0) && e.nodes_start !== null) {
    for (var o = e.nodes_start, l = e.nodes_end; o !== null; ) {
      var a = o === l ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Je(o)
      );
      o.remove(), o = a;
    }
    r = !0;
  }
  lo(e, t && !r), Zt(e, 0), $e(e, Xt);
  var s = e.transitions;
  if (s !== null)
    for (const c of s)
      c.stop();
  oo(e);
  var f = e.parent;
  f !== null && f.first !== null && ao(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function ao(e) {
  var t = e.parent, r = e.prev, o = e.next;
  r !== null && (r.next = o), o !== null && (o.prev = r), t !== null && (t.first === e && (t.first = o), t.last === e && (t.last = r));
}
function yr(e, t) {
  var r = [];
  io(e, r, !0), fa(r, () => {
    Pe(e), t && t();
  });
}
function fa(e, t) {
  var r = e.length;
  if (r > 0) {
    var o = () => --r || t();
    for (var l of e)
      l.out(o);
  } else
    t();
}
function io(e, t, r) {
  if ((e.f & vt) === 0) {
    if (e.f ^= vt, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || r) && t.push(s);
    for (var o = e.first; o !== null; ) {
      var l = o.next, a = (o.f & Ar) !== 0 || (o.f & Oe) !== 0;
      io(o, t, a ? r : !1), o = l;
    }
  }
}
function xn(e) {
  so(e, !0);
}
function so(e, t) {
  if ((e.f & vt) !== 0) {
    e.f ^= vt, (e.f & ue) === 0 && (e.f ^= ue), Nt(e) && ($e(e, Fe), nr(e));
    for (var r = e.first; r !== null; ) {
      var o = r.next, l = (r.f & Ar) !== 0 || (r.f & Oe) !== 0;
      so(r, l ? t : !1), r = o;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
function uo(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let re = null;
function An(e) {
  re = e;
}
function co(e, t = !1, r) {
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
function fo(e) {
  const t = re;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var r = N, o = z;
      t.e = null;
      try {
        for (var l = 0; l < s.length; l++) {
          var a = s[l];
          Ze(a.effect), We(a.reaction), Sr(a.fn);
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
function ho() {
  return !0;
}
const da = ["touchstart", "touchmove"];
function ha(e) {
  return da.includes(e);
}
function va(e, t) {
  {
    const r = document.body;
    e.autofocus = !0, Qt(() => {
      document.activeElement === r && e.focus();
    });
  }
}
let Rn = !1;
function vo() {
  Rn || (Rn = !0, document.addEventListener(
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
function go(e) {
  var t = z, r = N;
  We(null), Ze(null);
  try {
    return e();
  } finally {
    We(t), Ze(r);
  }
}
function ga(e, t, r, o = r) {
  e.addEventListener(t, () => go(r));
  const l = e.__on_r;
  l ? e.__on_r = () => {
    l(), o(!0);
  } : e.__on_r = () => o(!0), vo();
}
const _o = /* @__PURE__ */ new Set(), kr = /* @__PURE__ */ new Set();
function _a(e, t, r, o = {}) {
  function l(a) {
    if (o.capture || Rt.call(t, a), !a.cancelBubble)
      return go(() => r == null ? void 0 : r.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Qt(() => {
    t.addEventListener(e, l, o);
  }) : t.addEventListener(e, l, o), l;
}
function He(e, t, r, o, l) {
  var a = { capture: o, passive: l }, s = _a(e, t, r, a);
  (t === document.body || t === window || t === document) && ia(() => {
    t.removeEventListener(e, s, a);
  });
}
function ma(e) {
  for (var t = 0; t < e.length; t++)
    _o.add(e[t]);
  for (var r of kr)
    r(e);
}
function Rt(e) {
  var H;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), o = e.type, l = ((H = e.composedPath) == null ? void 0 : H.call(e)) || [], a = (
    /** @type {null | Element} */
    l[0] || e.target
  ), s = 0, f = e.__root;
  if (f) {
    var c = l.indexOf(f);
    if (c !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var d = l.indexOf(t);
    if (d === -1)
      return;
    c <= d && (s = c);
  }
  if (a = /** @type {Element} */
  l[s] || e.target, a !== t) {
    Bt(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var h = z, v = N;
    We(null), Ze(null);
    try {
      for (var g, m = []; a !== null; ) {
        var C = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var D = a["__" + o];
          if (D != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (Mn(D)) {
              var [V, ...ke] = D;
              V.apply(a, [e, ...ke]);
            } else
              D.call(a, e);
        } catch (U) {
          g ? m.push(U) : g = U;
        }
        if (e.cancelBubble || C === t || C === null)
          break;
        a = C;
      }
      if (g) {
        for (let U of m)
          queueMicrotask(() => {
            throw U;
          });
        throw g;
      }
    } finally {
      e.__root = t, delete e.currentTarget, We(h), Ze(v);
    }
  }
}
function Dr(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Ie(e, t) {
  var r = (
    /** @type {Effect} */
    N
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ye(e, t) {
  var r = (t & ml) !== 0, o = (t & pl) !== 0, l, a = !e.startsWith("<!>");
  return () => {
    if (P)
      return Ie(L, null), L;
    l === void 0 && (l = Dr(a ? e : "<!>" + e), r || (l = /** @type {Node} */
    /* @__PURE__ */ Le(l)));
    var s = (
      /** @type {TemplateNode} */
      o || Jn ? document.importNode(l, !0) : l.cloneNode(!0)
    );
    if (r) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Le(s)
      ), c = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Ie(f, c);
    } else
      Ie(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function or(e, t, r = "svg") {
  var o = !e.startsWith("<!>"), l = `<${r}>${o ? e : "<!>" + e}</${r}>`, a;
  return () => {
    if (P)
      return Ie(L, null), L;
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        Dr(l)
      ), f = (
        /** @type {Element} */
        /* @__PURE__ */ Le(s)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ Le(f);
    }
    var c = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return Ie(c, c), c;
  };
}
function Ot() {
  if (P)
    return Ie(L, null), L;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = tr();
  return e.append(t, r), Ie(t, r), e;
}
function M(e, t) {
  if (P) {
    N.nodes_end = L, gt();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function pa(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function mo(e, t) {
  return po(e, t);
}
function ba(e, t) {
  br(), t.intro = t.intro ?? !1;
  const r = t.target, o = P, l = L;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Le(r)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== Cr); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ Je(a);
    if (!a)
      throw ht;
    dt(!0), Ge(
      /** @type {Comment} */
      a
    ), gt();
    const s = po(e, { ...t, anchor: a });
    if (L === null || L.nodeType !== 8 || /** @type {Comment} */
    L.data !== Pn)
      throw er(), ht;
    return dt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === ht)
      return t.recover === !1 && Pl(), br(), Zl(r), dt(!1), mo(e, t);
    throw s;
  } finally {
    dt(o), Ge(l);
  }
}
const ft = /* @__PURE__ */ new Map();
function po(e, { target: t, anchor: r, props: o = {}, events: l, context: a, intro: s = !0 }) {
  br();
  var f = /* @__PURE__ */ new Set(), c = (v) => {
    for (var g = 0; g < v.length; g++) {
      var m = v[g];
      if (!f.has(m)) {
        f.add(m);
        var C = ha(m);
        t.addEventListener(m, Rt, { passive: C });
        var D = ft.get(m);
        D === void 0 ? (document.addEventListener(m, Rt, { passive: C }), ft.set(m, 1)) : ft.set(m, D + 1);
      }
    }
  };
  c(Cl(_o)), kr.add(c);
  var d = void 0, h = ua(() => {
    var v = r ?? t.appendChild(tr());
    return Jt(() => {
      if (a) {
        co({});
        var g = (
          /** @type {ComponentContext} */
          re
        );
        g.c = a;
      }
      l && (o.$$events = l), P && Ie(
        /** @type {TemplateNode} */
        v,
        null
      ), d = e(v, o) || {}, P && (N.nodes_end = L), a && fo();
    }), () => {
      var C;
      for (var g of f) {
        t.removeEventListener(g, Rt);
        var m = (
          /** @type {number} */
          ft.get(g)
        );
        --m === 0 ? (document.removeEventListener(g, Rt), ft.delete(g)) : ft.set(g, m);
      }
      kr.delete(c), v !== r && ((C = v.parentNode) == null || C.removeChild(v));
    };
  });
  return Er.set(d, h), d;
}
let Er = /* @__PURE__ */ new WeakMap();
function wa(e, t) {
  const r = Er.get(e);
  return r ? (Er.delete(e), r(t)) : Promise.resolve();
}
function X(e, t, [r, o] = [0, 0]) {
  P && r === 0 && gt();
  var l = e, a = null, s = null, f = ae, c = r > 0 ? Ar : 0, d = !1;
  const h = (g, m = !0) => {
    d = !0, v(m, g);
  }, v = (g, m) => {
    if (f === (f = g)) return;
    let C = !1;
    if (P && o !== -1) {
      if (r === 0) {
        const V = (
          /** @type {Comment} */
          l.data
        );
        V === Cr ? o = 0 : V === Ln ? o = 1 / 0 : (o = parseInt(V.substring(1)), o !== o && (o = f ? 1 / 0 : -1));
      }
      const D = o > r;
      !!f === D && (l = Wl(), Ge(l), dt(!1), C = !0, o = -1);
    }
    f ? (a ? xn(a) : m && (a = Jt(() => m(l))), s && yr(s, () => {
      s = null;
    })) : (s ? xn(s) : m && (s = Jt(() => m(l, [r + 1, o]))), a && yr(a, () => {
      a = null;
    })), C && dt(!0);
  };
  Nr(() => {
    d = !1, t(h), d || v(null, null);
  }, c), P && (l = L);
}
function Qe(e, t, r, o, l) {
  var a = e, s = "", f;
  Nr(() => {
    if (s === (s = t() ?? "")) {
      P && gt();
      return;
    }
    f !== void 0 && (Pe(f), f = void 0), s !== "" && (f = Jt(() => {
      if (P) {
        L.data;
        for (var c = gt(), d = c; c !== null && (c.nodeType !== 8 || /** @type {Comment} */
        c.data !== ""); )
          d = c, c = /** @type {TemplateNode} */
          /* @__PURE__ */ Je(c);
        if (c === null)
          throw er(), ht;
        Ie(L, d), a = Ge(c);
        return;
      }
      var h = s + "", v = Dr(h);
      Ie(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Le(v),
        /** @type {TemplateNode} */
        v.lastChild
      ), a.before(v);
    }));
  });
}
function ya(e, t, r, o, l) {
  var f;
  P && gt();
  var a = (f = t.$$slots) == null ? void 0 : f[r], s = !1;
  a === !0 && (a = t.children, s = !0), a === void 0 || a(e, s ? () => o : o);
}
function ka(e, t) {
  Qt(() => {
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
const In = [...` 	
\r\f \v\uFEFF`];
function Ea(e, t, r) {
  var o = "" + e;
  if (r) {
    for (var l in r)
      if (r[l])
        o = o ? o + " " + l : l;
      else if (o.length)
        for (var a = l.length, s = 0; (s = o.indexOf(l, s)) >= 0; ) {
          var f = s + a;
          (s === 0 || In.includes(o[s - 1])) && (f === o.length || In.includes(o[f])) ? o = (s === 0 ? "" : o.substring(0, s)) + o.substring(f + 1) : s = f;
        }
  }
  return o === "" ? null : o;
}
function Ca(e, t, r, o, l, a) {
  var s = e.__className;
  if (P || s !== r) {
    var f = Ea(r, o, a);
    (!P || f !== e.getAttribute("class")) && (f == null ? e.removeAttribute("class") : e.className = f), e.__className = r;
  } else if (a && l !== a)
    for (var c in a) {
      var d = !!a[c];
      (l == null || d !== !!l[c]) && e.classList.toggle(c, d);
    }
  return a;
}
const xa = Symbol("is custom element"), Aa = Symbol("is html");
function $n(e) {
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
    e.__on_r = r, Sl(r), vo();
  }
}
function Ra(e, t) {
  var r = bo(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function $(e, t, r, o) {
  var l = bo(e);
  P && (l[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || l[t] !== (l[t] = r) && (t === "loading" && (e[kl] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Ia(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function bo(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [xa]: e.nodeName.includes("-"),
      [Aa]: e.namespaceURI === bl
    })
  );
}
var Sn = /* @__PURE__ */ new Map();
function Ia(e) {
  var t = Sn.get(e.nodeName);
  if (t) return t;
  Sn.set(e.nodeName, t = []);
  for (var r, o = e, l = Element.prototype; l !== o; ) {
    r = xl(o);
    for (var a in r)
      r[a].set && t.push(a);
    o = Un(o);
  }
  return t;
}
function $a(e, t, r = t) {
  ga(e, "change", (o) => {
    var l = o ? e.defaultChecked : e.checked;
    r(l);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (P && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  _t(t) == null) && r(e.checked), zr(() => {
    var o = t();
    e.checked = !!o;
  });
}
function zn(e, t) {
  return e === t || (e == null ? void 0 : e[It]) === t;
}
function Ft(e = {}, t, r, o) {
  return Sr(() => {
    var l, a;
    return zr(() => {
      l = a, a = [], _t(() => {
        e !== r(...a) && (t(e, ...a), l && zn(r(...l), e) && t(null, ...l));
      });
    }), () => {
      Qt(() => {
        a && zn(r(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function wo(e) {
  re === null && uo(), wr(() => {
    const t = _t(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Sa(e) {
  re === null && uo(), wo(() => () => _t(e));
}
let Vt = !1;
function za(e) {
  var t = Vt;
  try {
    return Vt = !1, [e(), Vt];
  } finally {
    Vt = t;
  }
}
function I(e, t, r, o) {
  var ge;
  var l = (r & hl) !== 0, a = !0, s = (r & gl) !== 0, f = (r & _l) !== 0, c = !1, d;
  s ? [d, c] = za(() => (
    /** @type {V} */
    e[t]
  )) : d = /** @type {V} */
  e[t];
  var h = It in e || Vn in e, v = s && (((ge = et(e, t)) == null ? void 0 : ge.set) ?? (h && t in e && ((B) => e[t] = B))) || void 0, g = (
    /** @type {V} */
    o
  ), m = !0, C = !1, D = () => (C = !0, m && (m = !1, f ? g = _t(
    /** @type {() => V} */
    o
  ) : g = /** @type {V} */
  o), g);
  d === void 0 && o !== void 0 && (v && a && Ol(), d = D(), v && v(d));
  var V;
  if (V = () => {
    var B = (
      /** @type {V} */
      e[t]
    );
    return B === void 0 ? D() : (m = !0, C = !1, B);
  }, (r & vl) === 0)
    return V;
  if (v) {
    var ke = e.$$legacy;
    return function(B, ce) {
      return arguments.length > 0 ? ((!ce || ke || c) && v(ce ? V() : B), B) : V();
    };
  }
  var H = !1, U = /* @__PURE__ */ Yn(d), ve = /* @__PURE__ */ Be(() => {
    var B = V(), ce = i(U);
    return H ? (H = !1, ce) : U.v = B;
  });
  return l || (ve.equals = Rr), function(B, ce) {
    if (arguments.length > 0) {
      const _e = ce ? i(ve) : s ? O(B) : B;
      return ve.equals(_e) || (H = !0, w(U, _e), C && g !== void 0 && (g = _e), _t(() => i(ve))), B;
    }
    return i(ve);
  };
}
function Na(e) {
  return new Da(e);
}
var Te, de;
class Da {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    gr(this, Te);
    /** @type {Record<string, any>} */
    gr(this, de);
    var a;
    var r = /* @__PURE__ */ new Map(), o = (s, f) => {
      var c = /* @__PURE__ */ Yn(f);
      return r.set(s, c), c;
    };
    const l = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, f) {
          return i(r.get(f) ?? o(f, Reflect.get(s, f)));
        },
        has(s, f) {
          return f === Vn ? !0 : (i(r.get(f) ?? o(f, Reflect.get(s, f))), Reflect.has(s, f));
        },
        set(s, f, c) {
          return w(r.get(f) ?? o(f, c), c), Reflect.set(s, f, c);
        }
      }
    );
    _r(this, de, (t.hydrate ? ba : mo)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: l,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((a = t == null ? void 0 : t.props) != null && a.$$host) || t.sync === !1) && x(), _r(this, Te, l.$$events);
    for (const s of Object.keys(oe(this, de)))
      s === "$set" || s === "$destroy" || s === "$on" || Bt(this, s, {
        get() {
          return oe(this, de)[s];
        },
        /** @param {any} value */
        set(f) {
          oe(this, de)[s] = f;
        },
        enumerable: !0
      });
    oe(this, de).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(l, s);
    }, oe(this, de).$destroy = () => {
      wa(oe(this, de));
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
let yo;
typeof HTMLElement == "function" && (yo = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, o) {
    super();
    /** The Svelte component constructor */
    pe(this, "$$ctor");
    /** Slots */
    pe(this, "$$s");
    /** @type {any} The Svelte component instance */
    pe(this, "$$c");
    /** Whether or not the custom element is connected */
    pe(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    pe(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    pe(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    pe(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    pe(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    pe(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    pe(this, "$$me");
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
      const r = {}, o = Ta(this);
      for (const l of this.$$s)
        l in o && (l === "default" && !this.$$d.children ? (this.$$d.children = t(l), r.default = !0) : r[l] = t(l));
      for (const l of this.attributes) {
        const a = this.$$g_p(l.name);
        a in this.$$d || (this.$$d[a] = Ut(a, l.value, this.$$p_d, "toProp"));
      }
      for (const l in this.$$p_d)
        !(l in this.$$d) && this[l] !== void 0 && (this.$$d[l] = this[l], delete this[l]);
      this.$$c = Na({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = sa(() => {
        zr(() => {
          var l;
          this.$$r = !0;
          for (const a of Ht(this.$$c)) {
            if (!((l = this.$$p_d[a]) != null && l.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const s = Ut(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Ut(t, o, this.$$p_d, "toProp"), (l = this.$$c) == null || l.$set({ [t]: this.$$d[t] }));
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
function Ut(e, t, r, o) {
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
function Ta(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function La(e, t, r, o, l, a) {
  let s = class extends yo {
    constructor() {
      super(e, r, l), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Ht(t).map(
        (f) => (t[f].attribute || f).toLowerCase()
      );
    }
  };
  return Ht(t).forEach((f) => {
    Bt(s.prototype, f, {
      get() {
        return this.$$c && f in this.$$c ? this.$$c[f] : this.$$d[f];
      },
      set(c) {
        var v;
        c = Ut(f, c, t), this.$$d[f] = c;
        var d = this.$$c;
        if (d) {
          var h = (v = et(d, f)) == null ? void 0 : v.get;
          h ? d[f] = c : d.$set({ [f]: c });
        }
      }
    });
  }), o.forEach((f) => {
    Bt(s.prototype, f, {
      get() {
        var c;
        return (c = this.$$c) == null ? void 0 : c[f];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
const ko = new TextEncoder();
function Pa(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function Oa(e, t = "SHA-256", r = 1e5) {
  const o = Date.now().toString(16);
  e || (e = Math.round(Math.random() * r));
  const l = await Eo(o, e, t);
  return {
    algorithm: t,
    challenge: l,
    salt: o,
    signature: ""
  };
}
async function Eo(e, t, r) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return Pa(
    await crypto.subtle.digest(
      r.toUpperCase(),
      ko.encode(e + t)
    )
  );
}
function Fa(e, t, r = "SHA-256", o = 1e6, l = 0) {
  const a = new AbortController(), s = Date.now();
  return {
    promise: (async () => {
      for (let c = l; c <= o; c += 1) {
        if (a.signal.aborted)
          return null;
        if (await Eo(t, c, r) === e)
          return {
            number: c,
            took: Date.now() - s
          };
      }
      return null;
    })(),
    controller: a
  };
}
function Nn() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function Va(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let o = 0; o < t.length; o++)
    r[o] = t.charCodeAt(o);
  return r;
}
function Ma(e, t = 12) {
  const r = new Uint8Array(t);
  for (let o = 0; o < t; o++)
    r[o] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function Ua(e, t = "", r = 1e6, o = 0) {
  const l = "AES-GCM", a = new AbortController(), s = Date.now(), f = async () => {
    for (let h = o; h <= r; h += 1) {
      if (a.signal.aborted || !c || !d)
        return null;
      try {
        const v = await crypto.subtle.decrypt(
          {
            name: l,
            iv: Ma(h)
          },
          c,
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
  let c = null, d = null;
  try {
    d = Va(e);
    const h = await crypto.subtle.digest(
      "SHA-256",
      ko.encode(t)
    );
    c = await crypto.subtle.importKey(
      "raw",
      h,
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
    promise: f(),
    controller: a
  };
}
var k = /* @__PURE__ */ ((e) => (e.CODE = "code", e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(k || {}), Q = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.LOADING = "loading", e.PLAYING = "playing", e.PAUSED = "paused", e.READY = "ready", e))(Q || {});
const ja = {
  ariaLinkLabel: "Visit Altcha.org",
  enterCode: "Enter code",
  enterCodeAria: "Enter code you hear. Press Space to play audio.",
  error: "Verification failed. Try again later.",
  expired: "Verification expired. Try again.",
  extraCheck: "Verification required!",
  footer: 'Protected by <a href="https://altcha.org/" target="_blank" aria-label="Visit Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Get an audio challenge",
  label: "I'm not a robot",
  loading: "Loading...",
  reload: "Reload",
  verify: "Verify",
  verified: "Verified",
  verifying: "Verifying...",
  waitAlert: "Verifying... please wait."
};
typeof globalThis.altchaI18n != "object" && (globalThis.altchaI18n = {});
globalThis.altchaI18n.en = ja;
const pr = (e, t) => {
  let r = /* @__PURE__ */ Bl(() => Il(t == null ? void 0 : t(), 24));
  var o = Ya();
  Ne(() => {
    $(o, "width", i(r)), $(o, "height", i(r));
  }), M(e, o);
};
function qa(e, t) {
  e.code === "Space" && (e.preventDefault(), e.stopImmediatePropagation(), t());
}
function Ha(e, t) {
  e.preventDefault(), t();
}
function Ba(e, t, r, o, l, a, s, f) {
  var c;
  [
    k.UNVERIFIED,
    k.ERROR,
    k.EXPIRED,
    k.CODE
  ].includes(i(t)) ? r() !== !1 && ((c = i(o)) == null ? void 0 : c.reportValidity()) === !1 ? w(l, !1) : a() ? s() : f() : w(l, !0);
}
var Ya = /* @__PURE__ */ or('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="svelte-uo3tkz"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25" class="svelte-uo3tkz"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor" class="altcha-spinner svelte-uo3tkz"></path></svg>'), Ga = /* @__PURE__ */ ye('<input type="hidden" class="svelte-uo3tkz">'), Wa = /* @__PURE__ */ ye('<div class="svelte-uo3tkz"><a target="_blank" class="altcha-logo svelte-uo3tkz" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-uo3tkz"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor" class="svelte-uo3tkz"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor" class="svelte-uo3tkz"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor" class="svelte-uo3tkz"></path></svg></a></div>'), Za = /* @__PURE__ */ or('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-uo3tkz"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z" class="svelte-uo3tkz"></path></svg>'), Ja = /* @__PURE__ */ or('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-uo3tkz"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z" class="svelte-uo3tkz"></path></svg>'), Ka = /* @__PURE__ */ or('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-uo3tkz"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z" class="svelte-uo3tkz"></path></svg>'), Xa = /* @__PURE__ */ ye('<button type="button" class="altcha-code-challenge-audio svelte-uo3tkz"><!></button>'), Qa = /* @__PURE__ */ ye('<audio hidden autoplay class="svelte-uo3tkz"><source class="svelte-uo3tkz"></audio>'), ei = /* @__PURE__ */ ye('<div class="altcha-code-challenge svelte-uo3tkz" role="dialog"><div class="altcha-code-challenge-arrow svelte-uo3tkz"></div> <form class="svelte-uo3tkz"><img class="altcha-code-challenge-image svelte-uo3tkz" alt=""> <input type="text" autocomplete="off" name="code" class="altcha-code-challenge-input svelte-uo3tkz" required> <div class="altcha-code-challenge-buttons svelte-uo3tkz"><div class="altcha-code-challenge-buttons-left svelte-uo3tkz"><!> <button type="button" class="altcha-code-challenge-reload svelte-uo3tkz"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-uo3tkz"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z" class="svelte-uo3tkz"></path></svg></button></div> <button type="submit" class="altcha-code-challenge-verify svelte-uo3tkz"><!> </button></div> <!></form></div>'), ti = /* @__PURE__ */ ye('<div class="svelte-uo3tkz"><!></div>'), ri = /* @__PURE__ */ ye('<div class="svelte-uo3tkz"><!></div>'), ni = /* @__PURE__ */ ye('<div class="altcha-error svelte-uo3tkz"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="svelte-uo3tkz"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" class="svelte-uo3tkz"></path></svg> <!></div>'), oi = /* @__PURE__ */ ye('<div class="altcha-footer svelte-uo3tkz"><div class="svelte-uo3tkz"><!></div></div>'), li = /* @__PURE__ */ ye('<div class="altcha-anchor-arrow svelte-uo3tkz"></div>'), ai = /* @__PURE__ */ ye('<!> <div class="altcha svelte-uo3tkz"><div class="altcha-main svelte-uo3tkz"><div><!> <input type="checkbox" class="svelte-uo3tkz"></div> <label class="altcha-label svelte-uo3tkz"><!></label> <!> <!> <!></div> <!> <!> <!></div>', 1);
const ii = {
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
function si(e, t) {
  var gn, _n;
  co(t, !0), ka(e, ii);
  let r = I(t, "auto", 7, void 0), o = I(t, "blockspam", 7, void 0), l = I(t, "challengeurl", 7, void 0), a = I(t, "challengejson", 7, void 0), s = I(t, "customfetch", 7, void 0), f = I(t, "debug", 7, !1), c = I(t, "delay", 7, 0), d = I(t, "expire", 7, void 0), h = I(t, "floating", 7, void 0), v = I(t, "floatinganchor", 7, void 0), g = I(t, "floatingoffset", 7, void 0), m = I(t, "floatingpersist", 7, !1), C = I(t, "hidefooter", 7, !1), D = I(t, "hidelogo", 7, !1), V = I(t, "id", 7, void 0), ke = I(t, "locale", 7, void 0), H = I(t, "name", 7, "altcha"), U = I(t, "maxnumber", 7, 1e6), ve = I(t, "mockerror", 7, !1), ge = I(t, "obfuscated", 7, void 0), B = I(t, "plugins", 7, void 0), ce = I(t, "refetchonexpire", 7, !0), _e = I(t, "sentinel", 7, void 0), Ee = I(t, "spamfilter", 7, !1), ot = I(t, "strings", 7, void 0), fe = I(t, "test", 7, !1), ie = I(t, "verifyurl", 7, void 0), lt = I(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), pt = I(t, "workerurl", 7, void 0);
  const Tr = ["SHA-256", "SHA-384", "SHA-512"], Co = "https://altcha.org/", Ve = (n, u) => {
    t.$$host.dispatchEvent(new CustomEvent(n, { detail: u }));
  }, Lr = (_n = (gn = document.documentElement.lang) == null ? void 0 : gn.split("-")) == null ? void 0 : _n[0], lr = /* @__PURE__ */ Be(() => {
    var n;
    return l() && new URL(l(), location.origin).host.endsWith(".altcha.org") && !!((n = l()) != null && n.includes("apiKey=ckey_"));
  }), ar = /* @__PURE__ */ Be(() => a() ? Zr(a()) : void 0), xo = /* @__PURE__ */ Be(() => ot() ? Zr(ot()) : {}), T = /* @__PURE__ */ Be(() => ({
    ...Fr(),
    ...i(xo)
  })), Pr = /* @__PURE__ */ Be(() => V() || `${H()}_checkbox`);
  let bt = le(!1), Y = le(null), A = le(O(k.UNVERIFIED)), ee = le(void 0), wt = le(null), Me = le(null), ir = le(null), at = le(null), F = le(null), Ke = le(null), Ce = null, G = le(null), Xe = le(!1), Ue = [], sr = le(!1), Se = le(null);
  wr(() => {
    Fo(i(Ke));
  }), wr(() => {
    Vo(i(A));
  }), Sa(() => {
    Ao(), i(F) && (i(F).removeEventListener("submit", Hr), i(F).removeEventListener("reset", Br), i(F).removeEventListener("focusin", qr), w(F, null)), Ce && (clearTimeout(Ce), Ce = null), document.removeEventListener("click", Ur), document.removeEventListener("scroll", jr), window.removeEventListener("resize", Wr);
  }), wo(() => {
    var n;
    S("mounted", "1.4.2"), S("workers", lt()), So(), S("plugins", Ue.length ? Ue.map((u) => u.constructor.pluginName).join(", ") : "none"), fe() && S("using test mode"), d() && ur(d()), r() !== void 0 && S("auto", r()), h() !== void 0 && Kr(h()), w(F, O((n = i(ee)) == null ? void 0 : n.closest("form"))), i(F) && (i(F).addEventListener("submit", Hr, { capture: !0 }), i(F).addEventListener("reset", Br), (r() === "onfocus" || m() === "focus") && i(F).addEventListener("focusin", qr)), r() === "onload" && (ge() ? yt() : ze()), i(lr) && (C() || D()) && S("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
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
  function Ao() {
    for (const n of Ue)
      n.destroy();
  }
  function Or() {
    l() && ce() && i(A) === k.VERIFIED ? ze() : it(k.EXPIRED, i(T).expired);
  }
  async function Ro() {
    var n;
    if (ve())
      throw S("mocking error"), new Error("Mocked error.");
    if (i(ar))
      return S("using provided json data"), i(ar);
    if (fe())
      return S("generating test challenge", { test: fe() }), Oa(typeof fe() != "boolean" ? +fe() : void 0);
    {
      if (!l() && i(F)) {
        const E = i(F).getAttribute("action");
        E != null && E.includes("/form/") && l(E + "/altcha");
      }
      if (!l())
        throw new Error("Attribute challengeurl not set.");
      S("fetching challenge from", l());
      let u = null, _ = null;
      if (s())
        if (S("using customfetch"), typeof s() == "string") {
          if (u = globalThis[s()] || null, !u)
            throw new Error(`Custom fetch function not found: ${s()}`);
        } else
          u = s();
      const b = {
        headers: Ee() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      };
      if (u) {
        if (_ = await u(l(), b), !_ || !(_ instanceof Response))
          throw new Error("Custom fetch function did not return a response.");
      } else
        _ = await fetch(l(), b);
      if (_.status !== 200)
        throw new Error(`Server responded with ${_.status}.`);
      const p = _.headers.get("X-Altcha-Config"), R = await _.json(), y = new URLSearchParams((n = R.salt.split("?")) == null ? void 0 : n[1]), j = y.get("expires") || y.get("expire");
      if (j) {
        const E = new Date(+j * 1e3), q = isNaN(E.getTime()) ? 0 : E.getTime() - Date.now();
        q > 0 && ur(q);
      }
      if (p)
        try {
          const E = JSON.parse(p);
          E && typeof E == "object" && (E.verifyurl && (E.verifyurl = Mr(E.verifyurl)), en(E));
        } catch (E) {
          S("unable to configure from X-Altcha-Config", E);
        }
      return R;
    }
  }
  function Io(n) {
    var _, b;
    const u = (_ = i(F)) == null ? void 0 : _.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((b = u == null ? void 0 : u.value) == null ? void 0 : b.slice(u.value.indexOf("@"))) || void 0;
  }
  function Fr(n = [
    ke() || "",
    document.documentElement.lang || "",
    ...navigator.languages
  ]) {
    const u = Object.keys(globalThis.altchaI18n).map((b) => b.toLowerCase()), _ = n.reduce(
      (b, p) => (p = p.toLowerCase(), b || (globalThis.altchaI18n[p] ? p : null) || u.find((R) => p.split("-")[0] === R.split("-")[0]) || null),
      null
    );
    return globalThis.altchaI18n[_ || "en"];
  }
  function $o() {
    return Ee() === "ipAddress" ? {
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
    } : typeof Ee() == "object" ? Ee() : {
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
  function Vr(n) {
    var _;
    return [
      ...((_ = i(F)) == null ? void 0 : _.querySelectorAll(n != null && n.length ? n.map((b) => `input[name="${b}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (b, p) => {
        const R = p.name, y = p.value;
        return R && y && (b[R] = /\n/.test(y) ? y.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : y), b;
      },
      {}
    );
  }
  function Mr(n) {
    const u = new URL(l() || location.origin), _ = new URL(n, u);
    return _.search || (_.search = u.search), _.toString();
  }
  function So() {
    const n = B() !== void 0 ? B().split(",") : void 0;
    for (const u of globalThis.altchaPlugins)
      (!n || n.includes(u.pluginName)) && Ue.push(new u({
        el: i(ee),
        clarify: yt,
        dispatch: Ve,
        getConfiguration: tn,
        getFloatingAnchor: rn,
        getState: nn,
        log: S,
        reset: it,
        solve: Qr,
        setState: xe,
        setFloatingAnchor: ln,
        verify: ze
      }));
  }
  function S(...n) {
    (f() || n.some((u) => u instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${H()}]`, ...n);
  }
  function zo() {
    w(G, O(Q.PAUSED));
  }
  function No(n) {
    w(G, O(Q.ERROR));
  }
  function Do() {
    w(G, O(Q.READY));
  }
  function To() {
    w(G, O(Q.LOADING));
  }
  function Lo() {
    w(G, O(Q.PLAYING));
  }
  function Po() {
    w(G, O(Q.PAUSED));
  }
  function Oo(n) {
    if (n.preventDefault(), n.stopPropagation(), i(Y)) {
      const u = new FormData(n.target);
      w(Xe, !0), Jr(Dt(i(Y).challenge, i(Y).solution), String(u.get("code"))).then(({ reason: _, verified: b }) => {
        b ? (w(Y, null), xe(k.VERIFIED), S("verified"), mr().then(() => {
          var p;
          (p = i(ir)) == null || p.focus(), Ve("verified", { payload: i(Se) });
        })) : (it(), w(Ke, O(_ || "Verification failed")));
      }).catch((_) => {
        w(Y, null), xe(k.ERROR, _), S("sentinel verification failed:", _);
      }).finally(() => {
        w(Xe, !1);
      });
    }
  }
  function Ur(n) {
    var _;
    const u = n.target;
    h() && u && !i(ee).contains(u) && (i(A) === k.VERIFIED && m() === !1 || i(A) === k.VERIFIED && m() === "focus" && !((_ = i(F)) != null && _.matches(":focus-within")) || r() === "off" && i(A) === k.UNVERIFIED) && on();
  }
  function jr() {
    h() && i(A) !== k.UNVERIFIED && kt();
  }
  function Fo(n) {
    for (const u of Ue)
      typeof u.onErrorChange == "function" && u.onErrorChange(i(Ke));
  }
  function qr(n) {
    i(A) === k.UNVERIFIED ? ze() : h() && m() === "focus" && i(A) === k.VERIFIED && cr();
  }
  function Hr(n) {
    i(F) && r() === "onsubmit" ? i(A) === k.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), ze().then(() => {
      var u;
      (u = i(F)) == null || u.requestSubmit();
    })) : i(A) !== k.VERIFIED && (n.preventDefault(), n.stopPropagation(), i(A) === k.VERIFYING && Yr()) : i(F) && h() && r() === "off" && i(A) === k.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), cr());
  }
  function Br() {
    it();
  }
  function Yr() {
    i(A) === k.VERIFYING && i(T).waitAlert && alert(i(T).waitAlert);
  }
  function Gr() {
    i(Me) ? i(Me).paused ? (i(Me).currentTime = 0, i(Me).play()) : i(Me).pause() : (w(sr, !0), requestAnimationFrame(() => {
      var n;
      (n = i(Me)) == null || n.play();
    }));
  }
  function Vo(n) {
    for (const u of Ue)
      typeof u.onStateChange == "function" && u.onStateChange(i(A));
    h() && i(A) !== k.UNVERIFIED && requestAnimationFrame(() => {
      kt();
    }), w(bt, i(A) === k.VERIFIED);
  }
  function Wr() {
    h() && kt();
  }
  function Zr(n) {
    return JSON.parse(n);
  }
  async function Mo(n) {
    if (!ie())
      throw new Error("Attribute verifyurl not set.");
    S("requesting server verification from", ie());
    const u = { payload: n };
    if (Ee() !== !1) {
      const {
        blockedCountries: p,
        classifier: R,
        disableRules: y,
        email: j,
        expectedLanguages: E,
        expectedCountries: q,
        fields: ne,
        ipAddress: qe,
        text: dr,
        timeZone: Lt
      } = $o();
      u.blockedCountries = p, u.classifier = R, u.disableRules = y, u.email = j === !1 ? void 0 : Io(j), u.expectedCountries = q, u.expectedLanguages = E || (Lr ? [Lr] : void 0), u.fields = ne === !1 ? void 0 : Vr(ne), u.ipAddress = qe === !1 ? void 0 : qe || "auto", u.text = dr, u.timeZone = Lt === !1 ? void 0 : Lt || Nn();
    }
    const _ = await fetch(ie(), {
      body: JSON.stringify(u),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (_.status !== 200)
      throw new Error(`Server responded with ${_.status}.`);
    const b = await _.json();
    if (b != null && b.payload && w(Se, O(b.payload)), Ve("serververification", b), o() && b.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  async function Jr(n, u) {
    if (!ie())
      throw new Error("Attribute verifyurl not set.");
    S("requesting sentinel verification from", ie());
    const _ = { code: u, payload: n };
    _e() && (_.fields = _e().fields ? Vr() : void 0, _.timeZone = _e().timeZone ? Nn() : void 0);
    const b = await fetch(ie(), {
      body: JSON.stringify(_),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (b.status !== 200)
      throw new Error(`Server responded with ${b.status}.`);
    const p = await b.json();
    return p != null && p.payload && w(Se, O(p.payload)), Ve("sentinelverification", p), p;
  }
  function ur(n) {
    S("expire", n), Ce && (clearTimeout(Ce), Ce = null), n < 1 ? Or() : Ce = setTimeout(Or, n);
  }
  function Kr(n) {
    S("floating", n), h() !== n && (i(ee).style.left = "", i(ee).style.top = ""), h(n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : h()), h() ? (r() || r("onsubmit"), document.addEventListener("scroll", jr), document.addEventListener("click", Ur), window.addEventListener("resize", Wr)) : r() === "onsubmit" && r(void 0);
  }
  function Xr(n) {
    if (!n.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (n.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!Tr.includes(n.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${Tr.join(", ")}`);
    if (!n.challenge || n.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!n.salt || n.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function Qr(n) {
    let u = null;
    if ("Worker" in window) {
      try {
        u = await Uo(n, n.maxNumber || n.maxnumber || U());
      } catch (_) {
        S(_);
      }
      if ((u == null ? void 0 : u.number) !== void 0 || "obfuscated" in n)
        return { data: n, solution: u };
    }
    if ("obfuscated" in n) {
      const _ = await Ua(n.obfuscated, n.key, n.maxNumber || n.maxnumber);
      return { data: n, solution: await _.promise };
    }
    return {
      data: n,
      solution: await Fa(n.challenge, n.salt, n.algorithm, n.maxNumber || n.maxnumber || U()).promise
    };
  }
  async function Uo(n, u = typeof fe() == "number" ? fe() : n.maxNumber || n.maxnumber || U(), _ = Math.ceil(lt())) {
    const b = [];
    _ = Math.min(16, u, Math.max(1, _));
    for (let y = 0; y < _; y++)
      b.push(altchaCreateWorker(pt()));
    const p = Math.ceil(u / _), R = await Promise.all(b.map((y, j) => {
      const E = j * p;
      return new Promise((q) => {
        y.addEventListener("message", (ne) => {
          if (ne.data)
            for (const qe of b)
              qe !== y && qe.postMessage({ type: "abort" });
          q(ne.data);
        }), y.postMessage({
          payload: n,
          max: E + p,
          start: E,
          type: "work"
        });
      });
    }));
    for (const y of b)
      y.terminate();
    return R.find((y) => !!y) || null;
  }
  async function yt() {
    if (!ge()) {
      xe(k.ERROR);
      return;
    }
    const n = Ue.find((u) => u.constructor.pluginName === "obfuscation");
    if (!n || !("clarify" in n)) {
      xe(k.ERROR), S("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in n && typeof n.clarify == "function")
      return n.clarify();
  }
  function en(n) {
    n.obfuscated !== void 0 && ge(n.obfuscated), n.auto !== void 0 && (r(n.auto), r() === "onload" && (ge() ? yt() : ze())), n.blockspam !== void 0 && o(!!n.blockspam), n.customfetch !== void 0 && s(n.customfetch), n.floatinganchor !== void 0 && v(n.floatinganchor), n.delay !== void 0 && c(n.delay), n.floatingoffset !== void 0 && g(n.floatingoffset), n.floating !== void 0 && Kr(n.floating), n.expire !== void 0 && (ur(n.expire), d(n.expire)), n.challenge && (a(typeof n.challenge == "string" ? n.challenge : JSON.stringify(n.challenge)), Xr(i(ar))), n.challengeurl !== void 0 && l(n.challengeurl), n.debug !== void 0 && f(!!n.debug), n.hidefooter !== void 0 && C(!!n.hidefooter), n.hidelogo !== void 0 && D(!!n.hidelogo), n.locale !== void 0 && ot(Fr([n.locale])), n.maxnumber !== void 0 && U(+n.maxnumber), n.mockerror !== void 0 && ve(!!n.mockerror), n.name !== void 0 && H(n.name), n.refetchonexpire !== void 0 && ce(!!n.refetchonexpire), n.sentinel !== void 0 && typeof n.sentinel == "object" && _e(n.sentinel), n.spamfilter !== void 0 && Ee(typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && ot(typeof n.strings == "string" ? n.strings : JSON.stringify(n.strings)), n.test !== void 0 && fe(typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && ie(n.verifyurl), n.workers !== void 0 && lt(+n.workers), n.workerurl !== void 0 && pt(n.workerurl);
  }
  function tn() {
    return {
      auto: r(),
      blockspam: o(),
      challengeurl: l(),
      debug: f(),
      delay: c(),
      expire: d(),
      floating: h(),
      floatinganchor: v(),
      floatingoffset: g(),
      hidefooter: C(),
      hidelogo: D(),
      name: H(),
      maxnumber: U(),
      mockerror: ve(),
      obfuscated: ge(),
      refetchonexpire: ce(),
      spamfilter: Ee(),
      strings: i(T),
      test: fe(),
      verifyurl: ie(),
      workers: lt(),
      workerurl: pt()
    };
  }
  function rn() {
    return i(at);
  }
  function jo(n) {
    return Ue.find((u) => u.constructor.pluginName === n);
  }
  function nn() {
    return i(A);
  }
  function on() {
    i(ee).style.display = "none";
  }
  function kt(n = 20) {
    var u;
    if (i(ee))
      if (i(at) || w(at, O((v() ? document.querySelector(v()) : (u = i(F)) == null ? void 0 : u.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || i(F))), i(at)) {
        const _ = parseInt(g(), 10) || 12, b = i(at).getBoundingClientRect(), p = i(ee).getBoundingClientRect(), R = document.documentElement.clientHeight, y = document.documentElement.clientWidth, j = h() === "auto" ? b.bottom + p.height + _ + n > R : h() === "top", E = Math.max(n, Math.min(y - n - p.width, b.left + b.width / 2 - p.width / 2));
        if (j ? i(ee).style.top = `${b.top - (p.height + _)}px` : i(ee).style.top = `${b.bottom + _}px`, i(ee).style.left = `${E}px`, i(ee).setAttribute("data-floating", j ? "top" : "bottom"), i(wt)) {
          const q = i(wt).getBoundingClientRect();
          i(wt).style.left = b.left - E + b.width / 2 - q.width / 2 + "px";
        }
      } else
        S("unable to find floating anchor element");
  }
  function it(n = k.UNVERIFIED, u = null) {
    Ce && (clearTimeout(Ce), Ce = null), w(bt, !1), w(Se, null), w(Y, null), w(sr, !1), w(G, null), xe(n, u);
  }
  function ln(n) {
    w(at, O(n));
  }
  function xe(n, u = null) {
    w(A, O(n)), w(Ke, O(u)), Ve("statechange", {
      payload: i(Se),
      state: i(A)
    });
  }
  function cr() {
    i(ee).style.display = "block", h() && kt();
  }
  async function ze() {
    return it(k.VERIFYING), await new Promise((n) => setTimeout(n, c() || 0)), Ro().then((n) => (Xr(n), S("challenge", n), Qr(n))).then(({ data: n, solution: u }) => {
      var _;
      if (S("solution", u), !u || n && "challenge" in n && !("clearText" in u))
        if ((u == null ? void 0 : u.number) !== void 0 && "challenge" in n)
          if (ie() && "codeChallenge" in n)
            ((_ = document.activeElement) == null ? void 0 : _.tagName) === "INPUT" && document.activeElement.blur(), w(Y, O({ challenge: n, solution: u }));
          else {
            if (ie() && _e() !== void 0)
              return Jr(Dt(n, u));
            if (ie())
              return Mo(Dt(n, u));
            w(Se, O(Dt(n, u))), S("payload", i(Se));
          }
        else
          throw S("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      i(Y) ? (xe(k.CODE), mr().then(() => {
        Ve("code", { codeChallenge: i(Y) });
      })) : (xe(k.VERIFIED), S("verified"), mr().then(() => {
        Ve("verified", { payload: i(Se) });
      }));
    }).catch((n) => {
      S(n), xe(k.ERROR, n.message);
    });
  }
  var an = ai(), sn = At(an);
  ya(sn, t, "default", {});
  var Et = K(sn, 2), fr = J(Et), Tt = J(fr);
  let un;
  var cn = J(Tt);
  {
    var qo = (n) => {
      pr(n);
    };
    X(cn, (n) => {
      i(A) === k.VERIFYING && n(qo);
    });
  }
  var je = K(cn, 2);
  $n(je), je.__change = [
    Ba,
    A,
    Ee,
    F,
    bt,
    ge,
    yt,
    ze
  ], Ft(je, (n) => w(ir, n), () => i(ir)), Z(Tt);
  var Ct = K(Tt, 2), Ho = J(Ct);
  {
    var Bo = (n) => {
      var u = Ot(), _ = At(u);
      Qe(_, () => i(T).verified), M(n, u);
    }, Yo = (n, u) => {
      {
        var _ = (p) => {
          var R = Ot(), y = At(R);
          Qe(y, () => i(T).verifying), M(p, R);
        }, b = (p, R) => {
          {
            var y = (E) => {
              var q = Ot(), ne = At(q);
              Qe(ne, () => i(T).extraCheck), M(E, q);
            }, j = (E) => {
              var q = Ot(), ne = At(q);
              Qe(ne, () => i(T).label), M(E, q);
            };
            X(
              p,
              (E) => {
                i(A) === k.CODE ? E(y) : E(j, !1);
              },
              R
            );
          }
        };
        X(
          n,
          (p) => {
            i(A) === k.VERIFYING ? p(_) : p(b, !1);
          },
          u
        );
      }
    };
    X(Ho, (n) => {
      i(A) === k.VERIFIED ? n(Bo) : n(Yo, !1);
    });
  }
  Z(Ct);
  var fn = K(Ct, 2);
  {
    var Go = (n) => {
      var u = Ga();
      $n(u), Ne(() => {
        $(u, "name", H()), Ra(u, i(Se));
      }), M(n, u);
    };
    X(fn, (n) => {
      i(A) === k.VERIFIED && n(Go);
    });
  }
  var dn = K(fn, 2);
  {
    var Wo = (n) => {
      var u = Wa(), _ = J(u);
      $(_, "href", Co), Z(u), Ne(() => $(_, "aria-label", i(T).ariaLinkLabel)), M(n, u);
    };
    X(dn, (n) => {
      (D() !== !0 || i(lr)) && n(Wo);
    });
  }
  var Zo = K(dn, 2);
  {
    var Jo = (n) => {
      var u = ei(), _ = K(J(u), 2), b = J(_), p = K(b, 2);
      va(p), p.__keydown = [
        qa,
        Gr
      ];
      var R = K(p, 2), y = J(R), j = J(y);
      {
        var E = (me) => {
          var W = Xa();
          W.__click = Gr;
          var Pt = J(W);
          {
            var xt = (st) => {
              pr(st, () => 20);
            }, nl = (st, ol) => {
              {
                var ll = (ut) => {
                  var hr = Za();
                  M(ut, hr);
                }, al = (ut, hr) => {
                  {
                    var il = (ct) => {
                      var vr = Ja();
                      M(ct, vr);
                    }, sl = (ct) => {
                      var vr = Ka();
                      M(ct, vr);
                    };
                    X(
                      ut,
                      (ct) => {
                        i(G) === Q.PLAYING ? ct(il) : ct(sl, !1);
                      },
                      hr
                    );
                  }
                };
                X(
                  st,
                  (ut) => {
                    i(G) === Q.ERROR ? ut(ll) : ut(al, !1);
                  },
                  ol
                );
              }
            };
            X(Pt, (st) => {
              i(G) === Q.LOADING ? st(xt) : st(nl, !1);
            });
          }
          Z(W), Ne(() => {
            $(W, "title", i(T).getAudioChallenge), W.disabled = i(G) === Q.LOADING || i(G) === Q.ERROR || i(Xe), $(W, "aria-label", i(G) === Q.LOADING ? i(T).loading : i(T).getAudioChallenge);
          }), M(me, W);
        };
        X(j, (me) => {
          i(Y).challenge.codeChallenge.audio && me(E);
        });
      }
      var q = K(j, 2);
      q.__click = [Ha, ze], Z(y);
      var ne = K(y, 2), qe = J(ne);
      {
        var dr = (me) => {
          pr(me, () => 16);
        };
        X(qe, (me) => {
          i(Xe) && me(dr);
        });
      }
      var Lt = K(qe);
      Z(ne), Z(R);
      var tl = K(R, 2);
      {
        var rl = (me) => {
          var W = Qa(), Pt = J(W);
          Z(W), Ft(W, (xt) => w(Me, xt), () => i(Me)), Ne((xt) => $(Pt, "src", xt), [
            () => Mr(i(Y).challenge.codeChallenge.audio)
          ]), He("loadstart", W, To), He("canplay", W, Do), He("pause", W, Po), He("playing", W, Lo), He("ended", W, zo), He("error", Pt, No), M(me, W);
        };
        X(tl, (me) => {
          i(Y).challenge.codeChallenge.audio && i(sr) && me(rl);
        });
      }
      Z(_), Z(u), Ne(() => {
        $(u, "aria-label", i(T).extraCheck), $(b, "src", i(Y).challenge.codeChallenge.image), $(p, "minlength", i(Y).challenge.codeChallenge.length || 1), $(p, "maxlength", i(Y).challenge.codeChallenge.length), $(p, "placeholder", i(T).enterCode), $(p, "aria-label", i(G) === Q.LOADING ? i(T).loading : i(G) === Q.PLAYING ? "" : i(T).enterCodeAria), $(p, "aria-live", i(G) ? "assertive" : "polite"), $(p, "aria-busy", i(G) === Q.LOADING), p.disabled = i(Xe), $(q, "aria-label", i(T).reload), $(q, "title", i(T).reload), q.disabled = i(Xe), ne.disabled = i(Xe), $(ne, "aria-label", i(T).verify), pa(Lt, ` ${i(T).verify ?? ""}`);
      }), He("submit", _, Oo), M(n, u);
    };
    X(Zo, (n) => {
      var u;
      (u = i(Y)) != null && u.challenge.codeChallenge && n(Jo);
    });
  }
  Z(fr);
  var hn = K(fr, 2);
  {
    var Ko = (n) => {
      var u = ni(), _ = K(J(u), 2);
      {
        var b = (R) => {
          var y = ti(), j = J(y);
          Qe(j, () => i(T).expired), Z(y), Ne(() => $(y, "title", i(Ke))), M(R, y);
        }, p = (R) => {
          var y = ri(), j = J(y);
          Qe(j, () => i(T).error), Z(y), Ne(() => $(y, "title", i(Ke))), M(R, y);
        };
        X(_, (R) => {
          i(A) === k.EXPIRED ? R(b) : R(p, !1);
        });
      }
      Z(u), M(n, u);
    };
    X(hn, (n) => {
      (i(Ke) || i(A) === k.EXPIRED) && n(Ko);
    });
  }
  var vn = K(hn, 2);
  {
    var Xo = (n) => {
      var u = oi(), _ = J(u), b = J(_);
      Qe(b, () => i(T).footer), Z(_), Z(u), M(n, u);
    };
    X(vn, (n) => {
      i(T).footer && (C() !== !0 || i(lr)) && n(Xo);
    });
  }
  var Qo = K(vn, 2);
  {
    var el = (n) => {
      var u = li();
      Ft(u, (_) => w(wt, _), () => i(wt)), M(n, u);
    };
    X(Qo, (n) => {
      h() && n(el);
    });
  }
  return Z(Et), Ft(Et, (n) => w(ee, n), () => i(ee)), Ne(
    (n) => {
      var u;
      $(Et, "data-state", i(A)), $(Et, "data-floating", h()), un = Ca(Tt, 1, "altcha-checkbox svelte-uo3tkz", null, un, n), $(je, "id", i(Pr)), je.required = r() !== "onsubmit" && (!h() || r() !== "off"), $(je, "aria-hidden", i(A) === k.VERIFYING), $(Ct, "for", i(Pr)), $(Ct, "aria-hidden", !!((u = i(Y)) != null && u.challenge.codeChallenge));
    },
    [
      () => ({
        "altcha-checkbox-verifying": i(A) === k.VERIFYING
      })
    ]
  ), He("invalid", je, Yr), $a(je, () => i(bt), (n) => w(bt, n)), M(e, an), fo({
    clarify: yt,
    configure: en,
    getConfiguration: tn,
    getFloatingAnchor: rn,
    getPlugin: jo,
    getState: nn,
    hide: on,
    repositionFloating: kt,
    reset: it,
    setFloatingAnchor: ln,
    setState: xe,
    show: cr,
    verify: ze,
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
      return a();
    },
    set challengejson(n = void 0) {
      a(n), x();
    },
    get customfetch() {
      return s();
    },
    set customfetch(n = void 0) {
      s(n), x();
    },
    get debug() {
      return f();
    },
    set debug(n = !1) {
      f(n), x();
    },
    get delay() {
      return c();
    },
    set delay(n = 0) {
      c(n), x();
    },
    get expire() {
      return d();
    },
    set expire(n = void 0) {
      d(n), x();
    },
    get floating() {
      return h();
    },
    set floating(n = void 0) {
      h(n), x();
    },
    get floatinganchor() {
      return v();
    },
    set floatinganchor(n = void 0) {
      v(n), x();
    },
    get floatingoffset() {
      return g();
    },
    set floatingoffset(n = void 0) {
      g(n), x();
    },
    get floatingpersist() {
      return m();
    },
    set floatingpersist(n = !1) {
      m(n), x();
    },
    get hidefooter() {
      return C();
    },
    set hidefooter(n = !1) {
      C(n), x();
    },
    get hidelogo() {
      return D();
    },
    set hidelogo(n = !1) {
      D(n), x();
    },
    get id() {
      return V();
    },
    set id(n = void 0) {
      V(n), x();
    },
    get locale() {
      return ke();
    },
    set locale(n = void 0) {
      ke(n), x();
    },
    get name() {
      return H();
    },
    set name(n = "altcha") {
      H(n), x();
    },
    get maxnumber() {
      return U();
    },
    set maxnumber(n = 1e6) {
      U(n), x();
    },
    get mockerror() {
      return ve();
    },
    set mockerror(n = !1) {
      ve(n), x();
    },
    get obfuscated() {
      return ge();
    },
    set obfuscated(n = void 0) {
      ge(n), x();
    },
    get plugins() {
      return B();
    },
    set plugins(n = void 0) {
      B(n), x();
    },
    get refetchonexpire() {
      return ce();
    },
    set refetchonexpire(n = !0) {
      ce(n), x();
    },
    get sentinel() {
      return _e();
    },
    set sentinel(n = void 0) {
      _e(n), x();
    },
    get spamfilter() {
      return Ee();
    },
    set spamfilter(n = !1) {
      Ee(n), x();
    },
    get strings() {
      return ot();
    },
    set strings(n = void 0) {
      ot(n), x();
    },
    get test() {
      return fe();
    },
    set test(n = !1) {
      fe(n), x();
    },
    get verifyurl() {
      return ie();
    },
    set verifyurl(n = void 0) {
      ie(n), x();
    },
    get workers() {
      return lt();
    },
    set workers(n = Math.min(16, navigator.hardwareConcurrency || 8)) {
      lt(n), x();
    },
    get workerurl() {
      return pt();
    },
    set workerurl(n = void 0) {
      pt(n), x();
    }
  });
}
ma(["change", "keydown", "click"]);
customElements.define("altcha-widget", La(
  si,
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
    locale: {},
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
globalThis.altchaCreateWorker = (e) => e ? new Worker(new URL(e)) : new fl();
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {};
export {
  si as Altcha
};
