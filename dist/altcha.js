var ci = Object.defineProperty;
var bn = (e) => {
  throw TypeError(e);
};
var fi = (e, t, r) => t in e ? ci(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var _e = (e, t, r) => fi(e, typeof t != "symbol" ? t + "" : t, r), wn = (e, t, r) => t.has(e) || bn("Cannot " + r);
var ae = (e, t, r) => (wn(e, t, "read from private field"), r ? r.call(e) : t.get(e)), _r = (e, t, r) => t.has(e) ? bn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), mr = (e, t, r, l) => (wn(e, t, "write to private field"), l ? l.call(e, r) : t.set(e, r), r);
const On = `(function(){"use strict";const d=new TextEncoder;function p(e){return[...new Uint8Array(e)].map(t=>t.toString(16).padStart(2,"0")).join("")}async function b(e,t,r){if(typeof crypto>"u"||!("subtle"in crypto)||!("digest"in crypto.subtle))throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");return p(await crypto.subtle.digest(r.toUpperCase(),d.encode(e+t)))}function w(e,t,r="SHA-256",n=1e6,s=0){const o=new AbortController,a=Date.now();return{promise:(async()=>{for(let c=s;c<=n;c+=1){if(o.signal.aborted)return null;if(await b(t,c,r)===e)return{number:c,took:Date.now()-a}}return null})(),controller:o}}function h(e){const t=atob(e),r=new Uint8Array(t.length);for(let n=0;n<t.length;n++)r[n]=t.charCodeAt(n);return r}function g(e,t=12){const r=new Uint8Array(t);for(let n=0;n<t;n++)r[n]=e%256,e=Math.floor(e/256);return r}async function m(e,t="",r=1e6,n=0){const s="AES-GCM",o=new AbortController,a=Date.now(),l=async()=>{for(let u=n;u<=r;u+=1){if(o.signal.aborted||!c||!y)return null;try{const f=await crypto.subtle.decrypt({name:s,iv:g(u)},c,y);if(f)return{clearText:new TextDecoder().decode(f),took:Date.now()-a}}catch{}}return null};let c=null,y=null;try{y=h(e);const u=await crypto.subtle.digest("SHA-256",d.encode(t));c=await crypto.subtle.importKey("raw",u,s,!1,["decrypt"])}catch{return{promise:Promise.reject(),controller:o}}return{promise:l(),controller:o}}let i;onmessage=async e=>{const{type:t,payload:r,start:n,max:s}=e.data;let o=null;if(t==="abort")i==null||i.abort(),i=void 0;else if(t==="work"){if("obfuscated"in r){const{key:a,obfuscated:l}=r||{};o=await m(l,a,s,n)}else{const{algorithm:a,challenge:l,salt:c}=r||{};o=w(l,c,a,s,n)}i=o.controller,o.promise.then(a=>{self.postMessage(a&&{...a,worker:!0})})}}})();
`, yn = typeof self < "u" && self.Blob && new Blob([On], { type: "text/javascript;charset=utf-8" });
function di(e) {
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
      "data:text/javascript;charset=utf-8," + encodeURIComponent(On),
      {
        name: e == null ? void 0 : e.name
      }
    );
  } finally {
    t && (self.URL || self.webkitURL).revokeObjectURL(t);
  }
}
const hi = "5";
var Pn;
typeof window < "u" && ((Pn = window.__svelte ?? (window.__svelte = {})).v ?? (Pn.v = /* @__PURE__ */ new Set())).add(hi);
const vi = 1, gi = 4, pi = 8, _i = 16, mi = 1, bi = 2, Ar = "[", Fn = "[!", Vn = "]", vt = {}, se = Symbol(), wi = "http://www.w3.org/1999/xhtml", xn = !1, be = 2, Mn = 4, Qt = 8, Rr = 16, Oe = 32, nt = 64, Ht = 128, ge = 256, Yt = 512, de = 1024, Fe = 2048, mt = 4096, gt = 8192, er = 16384, yi = 32768, Ir = 65536, xi = 1 << 19, Un = 1 << 20, St = Symbol("$state"), jn = Symbol("legacy props"), Ei = Symbol("");
var qn = Array.isArray, Ci = Array.prototype.indexOf, ki = Array.from, Gt = Object.keys, Wt = Object.defineProperty, tt = Object.getOwnPropertyDescriptor, Ai = Object.getOwnPropertyDescriptors, Ri = Object.prototype, Ii = Array.prototype, Bn = Object.getPrototypeOf;
function Hn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function $i(e, t, r = !1) {
  return e === void 0 ? r ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
const Si = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Dt = [], Tt = [];
function Yn() {
  var e = Dt;
  Dt = [], Hn(e);
}
function Gn() {
  var e = Tt;
  Tt = [], Hn(e);
}
function tr(e) {
  Dt.length === 0 && queueMicrotask(Yn), Dt.push(e);
}
function Ni(e) {
  Tt.length === 0 && Si(Gn), Tt.push(e);
}
function En() {
  Dt.length > 0 && Yn(), Tt.length > 0 && Gn();
}
function Wn(e) {
  return e === this.v;
}
function Di(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function $r(e) {
  return !Di(e, this.v);
}
function Ti(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Li() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Pi(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Oi() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Fi() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Vi(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Mi() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ui() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function ji() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function qi() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Bi = !1;
function ke(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Wn,
    rv: 0,
    wv: 0
  };
  return r;
}
function oe(e) {
  return /* @__PURE__ */ Hi(ke(e));
}
// @__NO_SIDE_EFFECTS__
function Zn(e, t = !1) {
  const r = ke(e);
  return t || (r.equals = $r), r;
}
// @__NO_SIDE_EFFECTS__
function Hi(e) {
  return N !== null && !me && (N.f & be) !== 0 && (Ae === null ? Ki([e]) : Ae.push(e)), e;
}
function w(e, t) {
  return N !== null && !me && vl() && (N.f & (be | Rr)) !== 0 && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (Ae === null || !Ae.includes(e)) && qi(), Yi(e, t);
}
function Yi(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = rl(), zn(e, Fe), D !== null && (D.f & de) !== 0 && (D.f & (Oe | nt)) === 0 && (De === null ? Xi([e]) : De.push(e))), t;
}
function zn(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var l = r.length, i = 0; i < l; i++) {
      var a = r[i], u = a.f;
      (u & Fe) === 0 && (Ie(a, t), (u & (de | ge)) !== 0 && ((u & be) !== 0 ? zn(
        /** @type {Derived} */
        a,
        mt
      ) : ir(
        /** @type {Effect} */
        a
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Ye(e) {
  var t = be | Fe, r = N !== null && (N.f & be) !== 0 ? (
    /** @type {Derived} */
    N
  ) : null;
  return D === null || r !== null && (r.f & ge) !== 0 ? t |= ge : D.f |= Un, {
    ctx: ne,
    deps: null,
    effects: null,
    equals: Wn,
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
function Gi(e) {
  const t = /* @__PURE__ */ Ye(e);
  return t.equals = $r, t;
}
function Jn(e) {
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
function Wi(e) {
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
function Zi(e) {
  var t, r = D;
  ze(Wi(e));
  try {
    Jn(e), t = ll(e);
  } finally {
    ze(r);
  }
  return t;
}
function Kn(e) {
  var t = Zi(e), r = (Ge || (e.f & ge) !== 0) && e.deps !== null ? mt : de;
  Ie(e, r), e.equals(t) || (e.v = t, e.wv = rl());
}
function rr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let O = !1;
function ht(e) {
  O = e;
}
let P;
function We(e) {
  if (e === null)
    throw rr(), vt;
  return P = e;
}
function pt() {
  return We(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Je(P)
  );
}
function W(e) {
  if (O) {
    if (/* @__PURE__ */ Je(P) !== null)
      throw rr(), vt;
    P = e;
  }
}
function zi() {
  for (var e = 0, t = P; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === Vn) {
        if (e === 0) return t;
        e -= 1;
      } else (r === Ar || r === Fn) && (e += 1);
    }
    var l = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Je(t)
    );
    t.remove(), t = l;
  }
}
function V(e, t = null, r) {
  if (typeof e != "object" || e === null || St in e)
    return e;
  const l = Bn(e);
  if (l !== Ri && l !== Ii)
    return e;
  var i = /* @__PURE__ */ new Map(), a = qn(e), u = ke(0);
  a && i.set("length", ke(
    /** @type {any[]} */
    e.length
  ));
  var c;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(f, d, _) {
        (!("value" in _) || _.configurable === !1 || _.enumerable === !1 || _.writable === !1) && Mi();
        var v = i.get(d);
        return v === void 0 ? (v = ke(_.value), i.set(d, v)) : w(v, V(_.value, c)), !0;
      },
      deleteProperty(f, d) {
        var _ = i.get(d);
        if (_ === void 0)
          d in f && i.set(d, ke(se));
        else {
          if (a && typeof d == "string") {
            var v = (
              /** @type {Source<number>} */
              i.get("length")
            ), h = Number(d);
            Number.isInteger(h) && h < v.v && w(v, h);
          }
          w(_, se), Cn(u);
        }
        return !0;
      },
      get(f, d, _) {
        var k;
        if (d === St)
          return e;
        var v = i.get(d), h = d in f;
        if (v === void 0 && (!h || (k = tt(f, d)) != null && k.writable) && (v = ke(V(h ? f[d] : se, c)), i.set(d, v)), v !== void 0) {
          var b = o(v);
          return b === se ? void 0 : b;
        }
        return Reflect.get(f, d, _);
      },
      getOwnPropertyDescriptor(f, d) {
        var _ = Reflect.getOwnPropertyDescriptor(f, d);
        if (_ && "value" in _) {
          var v = i.get(d);
          v && (_.value = o(v));
        } else if (_ === void 0) {
          var h = i.get(d), b = h == null ? void 0 : h.v;
          if (h !== void 0 && b !== se)
            return {
              enumerable: !0,
              configurable: !0,
              value: b,
              writable: !0
            };
        }
        return _;
      },
      has(f, d) {
        var b;
        if (d === St)
          return !0;
        var _ = i.get(d), v = _ !== void 0 && _.v !== se || Reflect.has(f, d);
        if (_ !== void 0 || D !== null && (!v || (b = tt(f, d)) != null && b.writable)) {
          _ === void 0 && (_ = ke(v ? V(f[d], c) : se), i.set(d, _));
          var h = o(_);
          if (h === se)
            return !1;
        }
        return v;
      },
      set(f, d, _, v) {
        var K;
        var h = i.get(d), b = d in f;
        if (a && d === "length")
          for (var k = _; k < /** @type {Source<number>} */
          h.v; k += 1) {
            var T = i.get(k + "");
            T !== void 0 ? w(T, se) : k in f && (T = ke(se), i.set(k + "", T));
          }
        h === void 0 ? (!b || (K = tt(f, d)) != null && K.writable) && (h = ke(void 0), w(h, V(_, c)), i.set(d, h)) : (b = h.v !== se, w(h, V(_, c)));
        var F = Reflect.getOwnPropertyDescriptor(f, d);
        if (F != null && F.set && F.set.call(v, _), !b) {
          if (a && typeof d == "string") {
            var ue = (
              /** @type {Source<number>} */
              i.get("length")
            ), le = Number(d);
            Number.isInteger(le) && le >= ue.v && w(ue, le + 1);
          }
          Cn(u);
        }
        return !0;
      },
      ownKeys(f) {
        o(u);
        var d = Reflect.ownKeys(f).filter((h) => {
          var b = i.get(h);
          return b === void 0 || b.v !== se;
        });
        for (var [_, v] of i)
          v.v !== se && !(_ in f) && d.push(_);
        return d;
      },
      setPrototypeOf() {
        Ui();
      }
    }
  );
}
function Cn(e, t = 1) {
  w(e, e.v + t);
}
var kn, Xn, Qn, el;
function yr() {
  if (kn === void 0) {
    kn = window, Xn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    Qn = tt(t, "firstChild").get, el = tt(t, "nextSibling").get, e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function nr(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Le(e) {
  return Qn.call(e);
}
// @__NO_SIDE_EFFECTS__
function Je(e) {
  return el.call(e);
}
function Z(e, t) {
  if (!O)
    return /* @__PURE__ */ Le(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Le(P)
  );
  return r === null && (r = P.appendChild(nr())), We(r), r;
}
function It(e, t) {
  if (!O) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Le(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Je(r) : r;
  }
  return P;
}
function z(e, t = 1, r = !1) {
  let l = O ? P : e;
  for (var i; t--; )
    i = l, l = /** @type {TemplateNode} */
    /* @__PURE__ */ Je(l);
  if (!O)
    return l;
  var a = l == null ? void 0 : l.nodeType;
  if (r && a !== 3) {
    var u = nr();
    return l === null ? i == null || i.after(u) : l.before(u), We(u), u;
  }
  return We(l), /** @type {TemplateNode} */
  l;
}
function Ji(e) {
  e.textContent = "";
}
let qt = !1, Zt = !1, zt = null, rt = !1, Sr = !1;
function An(e) {
  Sr = e;
}
let Nt = [];
let N = null, me = !1;
function Ze(e) {
  N = e;
}
let D = null;
function ze(e) {
  D = e;
}
let Ae = null;
function Ki(e) {
  Ae = e;
}
let re = null, fe = 0, De = null;
function Xi(e) {
  De = e;
}
let tl = 1, Jt = 0, Ge = !1;
function rl() {
  return ++tl;
}
function Lt(e) {
  var v;
  var t = e.f;
  if ((t & Fe) !== 0)
    return !0;
  if ((t & mt) !== 0) {
    var r = e.deps, l = (t & ge) !== 0;
    if (r !== null) {
      var i, a, u = (t & Yt) !== 0, c = l && D !== null && !Ge, f = r.length;
      if (u || c) {
        var d = (
          /** @type {Derived} */
          e
        ), _ = d.parent;
        for (i = 0; i < f; i++)
          a = r[i], (u || !((v = a == null ? void 0 : a.reactions) != null && v.includes(d))) && (a.reactions ?? (a.reactions = [])).push(d);
        u && (d.f ^= Yt), c && _ !== null && (_.f & ge) === 0 && (d.f ^= ge);
      }
      for (i = 0; i < f; i++)
        if (a = r[i], Lt(
          /** @type {Derived} */
          a
        ) && Kn(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!l || D !== null && !Ge) && Ie(e, de);
  }
  return !1;
}
function Qi(e, t) {
  for (var r = t; r !== null; ) {
    if ((r.f & Ht) !== 0)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= Ht;
      }
    r = r.parent;
  }
  throw qt = !1, e;
}
function ea(e) {
  return (e.f & er) === 0 && (e.parent === null || (e.parent.f & Ht) === 0);
}
function lr(e, t, r, l) {
  if (qt) {
    if (r === null && (qt = !1), ea(t))
      throw e;
    return;
  }
  r !== null && (qt = !0);
  {
    Qi(e, t);
    return;
  }
}
function nl(e, t, r = !0) {
  var l = e.reactions;
  if (l !== null)
    for (var i = 0; i < l.length; i++) {
      var a = l[i];
      (a.f & be) !== 0 ? nl(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (r ? Ie(a, Fe) : (a.f & de) !== 0 && Ie(a, mt), ir(
        /** @type {Effect} */
        a
      ));
    }
}
function ll(e) {
  var b;
  var t = re, r = fe, l = De, i = N, a = Ge, u = Ae, c = ne, f = me, d = e.f;
  re = /** @type {null | Value[]} */
  null, fe = 0, De = null, Ge = (d & ge) !== 0 && (me || !rt || N === null), N = (d & (Oe | nt)) === 0 ? e : null, Ae = null, In(e.ctx), me = !1, Jt++;
  try {
    var _ = (
      /** @type {Function} */
      (0, e.fn)()
    ), v = e.deps;
    if (re !== null) {
      var h;
      if (Kt(e, fe), v !== null && fe > 0)
        for (v.length = fe + re.length, h = 0; h < re.length; h++)
          v[fe + h] = re[h];
      else
        e.deps = v = re;
      if (!Ge)
        for (h = fe; h < v.length; h++)
          ((b = v[h]).reactions ?? (b.reactions = [])).push(e);
    } else v !== null && fe < v.length && (Kt(e, fe), v.length = fe);
    if (vl() && De !== null && !me && v !== null && (e.f & (be | mt | Fe)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      De.length; h++)
        nl(
          De[h],
          /** @type {Effect} */
          e
        );
    return i !== null && Jt++, _;
  } finally {
    re = t, fe = r, De = l, N = i, Ge = a, Ae = u, In(c), me = f;
  }
}
function ta(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var l = Ci.call(r, e);
    if (l !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[l] = r[i], r.pop());
    }
  }
  r === null && (t.f & be) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (re === null || !re.includes(t)) && (Ie(t, mt), (t.f & (ge | Yt)) === 0 && (t.f ^= Yt), Jn(
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
    for (var l = t; l < r.length; l++)
      ta(e, r[l]);
}
function Nr(e) {
  var t = e.f;
  if ((t & er) === 0) {
    Ie(e, de);
    var r = D, l = ne, i = rt;
    D = e, rt = !0;
    try {
      (t & Rr) !== 0 ? fa(e) : ol(e), al(e);
      var a = ll(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = tl;
      var u = e.deps, c;
      xn && Bi && e.f & Fe;
    } catch (f) {
      lr(f, e, r, l || e.ctx);
    } finally {
      rt = i, D = r;
    }
  }
}
function ra() {
  try {
    Oi();
  } catch (e) {
    if (zt !== null)
      lr(e, zt, null);
    else
      throw e;
  }
}
function il() {
  var e = rt;
  try {
    var t = 0;
    for (rt = !0; Nt.length > 0; ) {
      t++ > 1e3 && ra();
      var r = Nt, l = r.length;
      Nt = [];
      for (var i = 0; i < l; i++) {
        var a = la(r[i]);
        na(a);
      }
    }
  } finally {
    Zt = !1, rt = e, zt = null;
  }
}
function na(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var l = e[r];
      if ((l.f & (er | gt)) === 0)
        try {
          Lt(l) && (Nr(l), l.deps === null && l.first === null && l.nodes_start === null && (l.teardown === null ? sl(l) : l.fn = null));
        } catch (i) {
          lr(i, l, null, l.ctx);
        }
    }
}
function ir(e) {
  Zt || (Zt = !0, queueMicrotask(il));
  for (var t = zt = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (nt | Oe)) !== 0) {
      if ((r & de) === 0) return;
      t.f ^= de;
    }
  }
  Nt.push(t);
}
function la(e) {
  for (var t = [], r = e; r !== null; ) {
    var l = r.f, i = (l & (Oe | nt)) !== 0, a = i && (l & de) !== 0;
    if (!a && (l & gt) === 0) {
      if ((l & Mn) !== 0)
        t.push(r);
      else if (i)
        r.f ^= de;
      else {
        var u = N;
        try {
          N = r, Lt(r) && Nr(r);
        } catch (d) {
          lr(d, r, null, r.ctx);
        } finally {
          N = u;
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
    Zt = !0, il(), En();
  return (
    /** @type {T} */
    t
  );
}
async function br() {
  await Promise.resolve(), C();
}
function o(e) {
  var t = e.f, r = (t & be) !== 0;
  if (N !== null && !me) {
    Ae !== null && Ae.includes(e) && ji();
    var l = N.deps;
    e.rv < Jt && (e.rv = Jt, re === null && l !== null && l[fe] === e ? fe++ : re === null ? re = [e] : (!Ge || !re.includes(e)) && re.push(e));
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var i = (
      /** @type {Derived} */
      e
    ), a = i.parent;
    a !== null && (a.f & ge) === 0 && (i.f ^= ge);
  }
  return r && (i = /** @type {Derived} */
  e, Lt(i) && Kn(i)), e.v;
}
function _t(e) {
  var t = me;
  try {
    return me = !0, e();
  } finally {
    me = t;
  }
}
const ia = -7169;
function Ie(e, t) {
  e.f = e.f & ia | t;
}
function aa(e) {
  D === null && N === null && Pi(), N !== null && (N.f & ge) !== 0 && D === null && Li(), Sr && Ti();
}
function oa(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function lt(e, t, r, l = !0) {
  var i = D, a = {
    ctx: ne,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Fe,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: i,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (r)
    try {
      Nr(a), a.f |= yi;
    } catch (f) {
      throw Pe(a), f;
    }
  else t !== null && ir(a);
  var u = r && a.deps === null && a.first === null && a.nodes_start === null && a.teardown === null && (a.f & (Un | Ht)) === 0;
  if (!u && l && (i !== null && oa(a, i), N !== null && (N.f & be) !== 0)) {
    var c = (
      /** @type {Derived} */
      N
    );
    (c.effects ?? (c.effects = [])).push(a);
  }
  return a;
}
function sa(e) {
  const t = lt(Qt, null, !1);
  return Ie(t, de), t.teardown = e, t;
}
function xr(e) {
  aa();
  var t = D !== null && (D.f & Oe) !== 0 && ne !== null && !ne.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      ne
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: D,
      reaction: N
    });
  } else {
    var l = Dr(e);
    return l;
  }
}
function ua(e) {
  const t = lt(nt, e, !0);
  return () => {
    Pe(t);
  };
}
function ca(e) {
  const t = lt(nt, e, !0);
  return (r = {}) => new Promise((l) => {
    r.outro ? Er(t, () => {
      Pe(t), l(void 0);
    }) : (Pe(t), l(void 0));
  });
}
function Dr(e) {
  return lt(Mn, e, !1);
}
function Tr(e) {
  return lt(Qt, e, !0);
}
function Ne(e, t = [], r = Ye) {
  const l = t.map(r);
  return Lr(() => e(...l.map(o)));
}
function Lr(e, t = 0) {
  return lt(Qt | Rr | t, e, !0);
}
function Xt(e, t = !0) {
  return lt(Qt | Oe, e, !0, t);
}
function al(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Sr, l = N;
    An(!0), Ze(null);
    try {
      t.call(null);
    } finally {
      An(r), Ze(l);
    }
  }
}
function ol(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var l = r.next;
    (r.f & nt) !== 0 ? r.parent = null : Pe(r, t), r = l;
  }
}
function fa(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Oe) === 0 && Pe(t), t = r;
  }
}
function Pe(e, t = !0) {
  var r = !1;
  if ((t || (e.f & xi) !== 0) && e.nodes_start !== null) {
    for (var l = e.nodes_start, i = e.nodes_end; l !== null; ) {
      var a = l === i ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Je(l)
      );
      l.remove(), l = a;
    }
    r = !0;
  }
  ol(e, t && !r), Kt(e, 0), Ie(e, er);
  var u = e.transitions;
  if (u !== null)
    for (const f of u)
      f.stop();
  al(e);
  var c = e.parent;
  c !== null && c.first !== null && sl(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function sl(e) {
  var t = e.parent, r = e.prev, l = e.next;
  r !== null && (r.next = l), l !== null && (l.prev = r), t !== null && (t.first === e && (t.first = l), t.last === e && (t.last = r));
}
function Er(e, t) {
  var r = [];
  ul(e, r, !0), da(r, () => {
    Pe(e), t && t();
  });
}
function da(e, t) {
  var r = e.length;
  if (r > 0) {
    var l = () => --r || t();
    for (var i of e)
      i.out(l);
  } else
    t();
}
function ul(e, t, r) {
  if ((e.f & gt) === 0) {
    if (e.f ^= gt, e.transitions !== null)
      for (const u of e.transitions)
        (u.is_global || r) && t.push(u);
    for (var l = e.first; l !== null; ) {
      var i = l.next, a = (l.f & Ir) !== 0 || (l.f & Oe) !== 0;
      ul(l, t, a ? r : !1), l = i;
    }
  }
}
function Rn(e) {
  cl(e, !0);
}
function cl(e, t) {
  if ((e.f & gt) !== 0) {
    e.f ^= gt, (e.f & de) === 0 && (e.f ^= de), Lt(e) && (Ie(e, Fe), ir(e));
    for (var r = e.first; r !== null; ) {
      var l = r.next, i = (r.f & Ir) !== 0 || (r.f & Oe) !== 0;
      cl(r, i ? t : !1), r = l;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
function fl(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let ne = null;
function In(e) {
  ne = e;
}
function dl(e, t = !1, r) {
  ne = {
    p: ne,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
}
function hl(e) {
  const t = ne;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const u = t.e;
    if (u !== null) {
      var r = D, l = N;
      t.e = null;
      try {
        for (var i = 0; i < u.length; i++) {
          var a = u[i];
          ze(a.effect), Ze(a.reaction), Dr(a.fn);
        }
      } finally {
        ze(r), Ze(l);
      }
    }
    ne = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function vl() {
  return !0;
}
const ha = ["touchstart", "touchmove"];
function va(e) {
  return ha.includes(e);
}
function ga(e, t) {
  if (t) {
    const r = document.body;
    e.autofocus = !0, tr(() => {
      document.activeElement === r && e.focus();
    });
  }
}
let $n = !1;
function gl() {
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
function pl(e) {
  var t = N, r = D;
  Ze(null), ze(null);
  try {
    return e();
  } finally {
    Ze(t), ze(r);
  }
}
function pa(e, t, r, l = r) {
  e.addEventListener(t, () => pl(r));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), l(!0);
  } : e.__on_r = () => l(!0), gl();
}
const _l = /* @__PURE__ */ new Set(), Cr = /* @__PURE__ */ new Set();
function _a(e, t, r, l = {}) {
  function i(a) {
    if (l.capture || $t.call(t, a), !a.cancelBubble)
      return pl(() => r == null ? void 0 : r.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? tr(() => {
    t.addEventListener(e, i, l);
  }) : t.addEventListener(e, i, l), i;
}
function He(e, t, r, l, i) {
  var a = { capture: l, passive: i }, u = _a(e, t, r, a);
  (t === document.body || t === window || t === document) && sa(() => {
    t.removeEventListener(e, u, a);
  });
}
function ma(e) {
  for (var t = 0; t < e.length; t++)
    _l.add(e[t]);
  for (var r of Cr)
    r(e);
}
function $t(e) {
  var le;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), l = e.type, i = ((le = e.composedPath) == null ? void 0 : le.call(e)) || [], a = (
    /** @type {null | Element} */
    i[0] || e.target
  ), u = 0, c = e.__root;
  if (c) {
    var f = i.indexOf(c);
    if (f !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var d = i.indexOf(t);
    if (d === -1)
      return;
    f <= d && (u = f);
  }
  if (a = /** @type {Element} */
  i[u] || e.target, a !== t) {
    Wt(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var _ = N, v = D;
    Ze(null), ze(null);
    try {
      for (var h, b = []; a !== null; ) {
        var k = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var T = a["__" + l];
          if (T != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (qn(T)) {
              var [F, ...ue] = T;
              F.apply(a, [e, ...ue]);
            } else
              T.call(a, e);
        } catch (K) {
          h ? b.push(K) : h = K;
        }
        if (e.cancelBubble || k === t || k === null)
          break;
        a = k;
      }
      if (h) {
        for (let K of b)
          queueMicrotask(() => {
            throw K;
          });
        throw h;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Ze(_), ze(v);
    }
  }
}
function Pr(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Re(e, t) {
  var r = (
    /** @type {Effect} */
    D
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function we(e, t) {
  var r = (t & mi) !== 0, l = (t & bi) !== 0, i, a = !e.startsWith("<!>");
  return () => {
    if (O)
      return Re(P, null), P;
    i === void 0 && (i = Pr(a ? e : "<!>" + e), r || (i = /** @type {Node} */
    /* @__PURE__ */ Le(i)));
    var u = (
      /** @type {TemplateNode} */
      l || Xn ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Le(u)
      ), f = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Re(c, f);
    } else
      Re(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function ar(e, t, r = "svg") {
  var l = !e.startsWith("<!>"), i = `<${r}>${l ? e : "<!>" + e}</${r}>`, a;
  return () => {
    if (O)
      return Re(P, null), P;
    if (!a) {
      var u = (
        /** @type {DocumentFragment} */
        Pr(i)
      ), c = (
        /** @type {Element} */
        /* @__PURE__ */ Le(u)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ Le(c);
    }
    var f = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return Re(f, f), f;
  };
}
function Mt() {
  if (O)
    return Re(P, null), P;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = nr();
  return e.append(t, r), Re(t, r), e;
}
function U(e, t) {
  if (O) {
    D.nodes_end = P, pt();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function ba(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function ml(e, t) {
  return bl(e, t);
}
function wa(e, t) {
  yr(), t.intro = t.intro ?? !1;
  const r = t.target, l = O, i = P;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Le(r)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== Ar); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ Je(a);
    if (!a)
      throw vt;
    ht(!0), We(
      /** @type {Comment} */
      a
    ), pt();
    const u = bl(e, { ...t, anchor: a });
    if (P === null || P.nodeType !== 8 || /** @type {Comment} */
    P.data !== Vn)
      throw rr(), vt;
    return ht(!1), /**  @type {Exports} */
    u;
  } catch (u) {
    if (u === vt)
      return t.recover === !1 && Fi(), yr(), Ji(r), ht(!1), ml(e, t);
    throw u;
  } finally {
    ht(l), We(i);
  }
}
const dt = /* @__PURE__ */ new Map();
function bl(e, { target: t, anchor: r, props: l = {}, events: i, context: a, intro: u = !0 }) {
  yr();
  var c = /* @__PURE__ */ new Set(), f = (v) => {
    for (var h = 0; h < v.length; h++) {
      var b = v[h];
      if (!c.has(b)) {
        c.add(b);
        var k = va(b);
        t.addEventListener(b, $t, { passive: k });
        var T = dt.get(b);
        T === void 0 ? (document.addEventListener(b, $t, { passive: k }), dt.set(b, 1)) : dt.set(b, T + 1);
      }
    }
  };
  f(ki(_l)), Cr.add(f);
  var d = void 0, _ = ca(() => {
    var v = r ?? t.appendChild(nr());
    return Xt(() => {
      if (a) {
        dl({});
        var h = (
          /** @type {ComponentContext} */
          ne
        );
        h.c = a;
      }
      i && (l.$$events = i), O && Re(
        /** @type {TemplateNode} */
        v,
        null
      ), d = e(v, l) || {}, O && (D.nodes_end = P), a && hl();
    }), () => {
      var k;
      for (var h of c) {
        t.removeEventListener(h, $t);
        var b = (
          /** @type {number} */
          dt.get(h)
        );
        --b === 0 ? (document.removeEventListener(h, $t), dt.delete(h)) : dt.set(h, b);
      }
      Cr.delete(f), v !== r && ((k = v.parentNode) == null || k.removeChild(v));
    };
  });
  return kr.set(d, _), d;
}
let kr = /* @__PURE__ */ new WeakMap();
function ya(e, t) {
  const r = kr.get(e);
  return r ? (kr.delete(e), r(t)) : Promise.resolve();
}
function J(e, t, [r, l] = [0, 0]) {
  O && r === 0 && pt();
  var i = e, a = null, u = null, c = se, f = r > 0 ? Ir : 0, d = !1;
  const _ = (h, b = !0) => {
    d = !0, v(b, h);
  }, v = (h, b) => {
    if (c === (c = h)) return;
    let k = !1;
    if (O && l !== -1) {
      if (r === 0) {
        const F = (
          /** @type {Comment} */
          i.data
        );
        F === Ar ? l = 0 : F === Fn ? l = 1 / 0 : (l = parseInt(F.substring(1)), l !== l && (l = c ? 1 / 0 : -1));
      }
      const T = l > r;
      !!c === T && (i = zi(), We(i), ht(!1), k = !0, l = -1);
    }
    c ? (a ? Rn(a) : b && (a = Xt(() => b(i))), u && Er(u, () => {
      u = null;
    })) : (u ? Rn(u) : b && (u = Xt(() => b(i, [r + 1, l]))), a && Er(a, () => {
      a = null;
    })), k && ht(!0);
  };
  Lr(() => {
    d = !1, t(_), d || v(null, null);
  }, f), O && (i = P);
}
function et(e, t, r, l, i) {
  var a = e, u = "", c;
  Lr(() => {
    if (u === (u = t() ?? "")) {
      O && pt();
      return;
    }
    c !== void 0 && (Pe(c), c = void 0), u !== "" && (c = Xt(() => {
      if (O) {
        P.data;
        for (var f = pt(), d = f; f !== null && (f.nodeType !== 8 || /** @type {Comment} */
        f.data !== ""); )
          d = f, f = /** @type {TemplateNode} */
          /* @__PURE__ */ Je(f);
        if (f === null)
          throw rr(), vt;
        Re(P, d), a = We(f);
        return;
      }
      var _ = u + "", v = Pr(_);
      Re(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Le(v),
        /** @type {TemplateNode} */
        v.lastChild
      ), a.before(v);
    }));
  });
}
function xa(e, t, r, l, i) {
  var c;
  O && pt();
  var a = (c = t.$$slots) == null ? void 0 : c[r], u = !1;
  a === !0 && (a = t.children, u = !0), a === void 0 || a(e, u ? () => l : l);
}
function Ea(e, t) {
  tr(() => {
    var r = e.getRootNode(), l = (
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
    if (!l.querySelector("#" + t.hash)) {
      const i = document.createElement("style");
      i.id = t.hash, i.textContent = t.code, l.appendChild(i);
    }
  });
}
const Sn = [...` 	
\r\f \v\uFEFF`];
function Ca(e, t, r) {
  var l = "" + e;
  if (r) {
    for (var i in r)
      if (r[i])
        l = l ? l + " " + i : i;
      else if (l.length)
        for (var a = i.length, u = 0; (u = l.indexOf(i, u)) >= 0; ) {
          var c = u + a;
          (u === 0 || Sn.includes(l[u - 1])) && (c === l.length || Sn.includes(l[c])) ? l = (u === 0 ? "" : l.substring(0, u)) + l.substring(c + 1) : u = c;
        }
  }
  return l === "" ? null : l;
}
function ka(e, t, r, l, i, a) {
  var u = e.__className;
  if (O || u !== r) {
    var c = Ca(r, l, a);
    (!O || c !== e.getAttribute("class")) && (c == null ? e.removeAttribute("class") : e.className = c), e.__className = r;
  } else if (a && i !== a)
    for (var f in a) {
      var d = !!a[f];
      (i == null || d !== !!i[f]) && e.classList.toggle(f, d);
    }
  return a;
}
const Aa = Symbol("is custom element"), Ra = Symbol("is html");
function Nn(e) {
  if (O) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var l = e.value;
          S(e, "value", null), e.value = l;
        }
        if (e.hasAttribute("checked")) {
          var i = e.checked;
          S(e, "checked", null), e.checked = i;
        }
      }
    };
    e.__on_r = r, Ni(r), gl();
  }
}
function Ia(e, t) {
  var r = wl(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function S(e, t, r, l) {
  var i = wl(e);
  O && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || i[t] !== (i[t] = r) && (t === "loading" && (e[Ei] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && $a(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function wl(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Aa]: e.nodeName.includes("-"),
      [Ra]: e.namespaceURI === wi
    })
  );
}
var Dn = /* @__PURE__ */ new Map();
function $a(e) {
  var t = Dn.get(e.nodeName);
  if (t) return t;
  Dn.set(e.nodeName, t = []);
  for (var r, l = e, i = Element.prototype; i !== l; ) {
    r = Ai(l);
    for (var a in r)
      r[a].set && t.push(a);
    l = Bn(l);
  }
  return t;
}
function Sa(e, t, r = t) {
  pa(e, "change", (l) => {
    var i = l ? e.defaultChecked : e.checked;
    r(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (O && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  _t(t) == null) && r(e.checked), Tr(() => {
    var l = t();
    e.checked = !!l;
  });
}
function Tn(e, t) {
  return e === t || (e == null ? void 0 : e[St]) === t;
}
function Ut(e = {}, t, r, l) {
  return Dr(() => {
    var i, a;
    return Tr(() => {
      i = a, a = [], _t(() => {
        e !== r(...a) && (t(e, ...a), i && Tn(r(...i), e) && t(null, ...i));
      });
    }), () => {
      tr(() => {
        a && Tn(r(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function yl(e) {
  ne === null && fl(), xr(() => {
    const t = _t(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Na(e) {
  ne === null && fl(), yl(() => () => _t(e));
}
let jt = !1;
function Da(e) {
  var t = jt;
  try {
    return jt = !1, [e(), jt];
  } finally {
    jt = t;
  }
}
function R(e, t, r, l) {
  var ye;
  var i = (r & vi) !== 0, a = !0, u = (r & pi) !== 0, c = (r & _i) !== 0, f = !1, d;
  u ? [d, f] = Da(() => (
    /** @type {V} */
    e[t]
  )) : d = /** @type {V} */
  e[t];
  var _ = St in e || jn in e, v = u && (((ye = tt(e, t)) == null ? void 0 : ye.set) ?? (_ && t in e && ((j) => e[t] = j))) || void 0, h = (
    /** @type {V} */
    l
  ), b = !0, k = !1, T = () => (k = !0, b && (b = !1, c ? h = _t(
    /** @type {() => V} */
    l
  ) : h = /** @type {V} */
  l), h);
  d === void 0 && l !== void 0 && (v && a && Vi(), d = T(), v && v(d));
  var F;
  if (F = () => {
    var j = (
      /** @type {V} */
      e[t]
    );
    return j === void 0 ? T() : (b = !0, k = !1, j);
  }, (r & gi) === 0)
    return F;
  if (v) {
    var ue = e.$$legacy;
    return function(j, Q) {
      return arguments.length > 0 ? ((!Q || ue || f) && v(Q ? F() : j), j) : F();
    };
  }
  var le = !1, K = /* @__PURE__ */ Zn(d), ce = /* @__PURE__ */ Ye(() => {
    var j = F(), Q = o(K);
    return le ? (le = !1, Q) : K.v = j;
  });
  return i || (ce.equals = $r), function(j, Q) {
    if (arguments.length > 0) {
      const Ve = Q ? o(ce) : u ? V(j) : j;
      return ce.equals(Ve) || (le = !0, w(K, Ve), k && h !== void 0 && (h = Ve), _t(() => o(ce))), j;
    }
    return o(ce);
  };
}
function Ta(e) {
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
    _r(this, Te);
    /** @type {Record<string, any>} */
    _r(this, ve);
    var a;
    var r = /* @__PURE__ */ new Map(), l = (u, c) => {
      var f = /* @__PURE__ */ Zn(c);
      return r.set(u, f), f;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(u, c) {
          return o(r.get(c) ?? l(c, Reflect.get(u, c)));
        },
        has(u, c) {
          return c === jn ? !0 : (o(r.get(c) ?? l(c, Reflect.get(u, c))), Reflect.has(u, c));
        },
        set(u, c, f) {
          return w(r.get(c) ?? l(c, f), f), Reflect.set(u, c, f);
        }
      }
    );
    mr(this, ve, (t.hydrate ? wa : ml)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((a = t == null ? void 0 : t.props) != null && a.$$host) || t.sync === !1) && C(), mr(this, Te, i.$$events);
    for (const u of Object.keys(ae(this, ve)))
      u === "$set" || u === "$destroy" || u === "$on" || Wt(this, u, {
        get() {
          return ae(this, ve)[u];
        },
        /** @param {any} value */
        set(c) {
          ae(this, ve)[u] = c;
        },
        enumerable: !0
      });
    ae(this, ve).$set = /** @param {Record<string, any>} next */
    (u) => {
      Object.assign(i, u);
    }, ae(this, ve).$destroy = () => {
      ya(ae(this, ve));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    ae(this, ve).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    ae(this, Te)[t] = ae(this, Te)[t] || [];
    const l = (...i) => r.call(this, ...i);
    return ae(this, Te)[t].push(l), () => {
      ae(this, Te)[t] = ae(this, Te)[t].filter(
        /** @param {any} fn */
        (i) => i !== l
      );
    };
  }
  $destroy() {
    ae(this, ve).$destroy();
  }
}
Te = new WeakMap(), ve = new WeakMap();
let xl;
typeof HTMLElement == "function" && (xl = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, l) {
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
    this.$$ctor = t, this.$$s = r, l && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, r, l) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(r), this.$$c) {
      const i = this.$$c.$on(t, r);
      this.$$l_u.set(r, i);
    }
    super.addEventListener(t, r, l);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, r, l) {
    if (super.removeEventListener(t, r, l), this.$$c) {
      const i = this.$$l_u.get(r);
      i && (i(), this.$$l_u.delete(r));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(i) {
        return (a) => {
          const u = document.createElement("slot");
          i !== "default" && (u.name = i), U(a, u);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, l = Pa(this);
      for (const i of this.$$s)
        i in l && (i === "default" && !this.$$d.children ? (this.$$d.children = t(i), r.default = !0) : r[i] = t(i));
      for (const i of this.attributes) {
        const a = this.$$g_p(i.name);
        a in this.$$d || (this.$$d[a] = Bt(a, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = Ta({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = ua(() => {
        Tr(() => {
          var i;
          this.$$r = !0;
          for (const a of Gt(this.$$c)) {
            if (!((i = this.$$p_d[a]) != null && i.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const u = Bt(
              a,
              this.$$d[a],
              this.$$p_d,
              "toAttribute"
            );
            u == null ? this.removeAttribute(this.$$p_d[a].attribute || a) : this.setAttribute(this.$$p_d[a].attribute || a, u);
          }
          this.$$r = !1;
        });
      });
      for (const i in this.$$l)
        for (const a of this.$$l[i]) {
          const u = this.$$c.$on(i, a);
          this.$$l_u.set(a, u);
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
  attributeChangedCallback(t, r, l) {
    var i;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Bt(t, l, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
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
    return Gt(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function Bt(e, t, r, l) {
  var a;
  const i = (a = r[e]) == null ? void 0 : a.type;
  if (t = i === "Boolean" && typeof t != "boolean" ? t != null : t, !l || !r[e])
    return t;
  if (l === "toAttribute")
    switch (i) {
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
    switch (i) {
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
function Oa(e, t, r, l, i, a) {
  let u = class extends xl {
    constructor() {
      super(e, r, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Gt(t).map(
        (c) => (t[c].attribute || c).toLowerCase()
      );
    }
  };
  return Gt(t).forEach((c) => {
    Wt(u.prototype, c, {
      get() {
        return this.$$c && c in this.$$c ? this.$$c[c] : this.$$d[c];
      },
      set(f) {
        var v;
        f = Bt(c, f, t), this.$$d[c] = f;
        var d = this.$$c;
        if (d) {
          var _ = (v = tt(d, c)) == null ? void 0 : v.get;
          _ ? d[c] = f : d.$set({ [c]: f });
        }
      }
    });
  }), l.forEach((c) => {
    Wt(u.prototype, c, {
      get() {
        var f;
        return (f = this.$$c) == null ? void 0 : f[c];
      }
    });
  }), e.element = /** @type {any} */
  u, u;
}
const El = new TextEncoder();
function Fa(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function Va(e, t = "SHA-256", r = 1e5) {
  const l = Date.now().toString(16);
  e || (e = Math.round(Math.random() * r));
  const i = await Cl(l, e, t);
  return {
    algorithm: t,
    challenge: i,
    salt: l,
    signature: ""
  };
}
async function Cl(e, t, r) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return Fa(
    await crypto.subtle.digest(
      r.toUpperCase(),
      El.encode(e + t)
    )
  );
}
function Ma(e, t, r = "SHA-256", l = 1e6, i = 0) {
  const a = new AbortController(), u = Date.now();
  return {
    promise: (async () => {
      for (let f = i; f <= l; f += 1) {
        if (a.signal.aborted)
          return null;
        if (await Cl(t, f, r) === e)
          return {
            number: f,
            took: Date.now() - u
          };
      }
      return null;
    })(),
    controller: a
  };
}
function Ln() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function Ua(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let l = 0; l < t.length; l++)
    r[l] = t.charCodeAt(l);
  return r;
}
function ja(e, t = 12) {
  const r = new Uint8Array(t);
  for (let l = 0; l < t; l++)
    r[l] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function qa(e, t = "", r = 1e6, l = 0) {
  const i = "AES-GCM", a = new AbortController(), u = Date.now(), c = async () => {
    for (let _ = l; _ <= r; _ += 1) {
      if (a.signal.aborted || !f || !d)
        return null;
      try {
        const v = await crypto.subtle.decrypt(
          {
            name: i,
            iv: ja(_)
          },
          f,
          d
        );
        if (v)
          return {
            clearText: new TextDecoder().decode(v),
            took: Date.now() - u
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
      El.encode(t)
    );
    f = await crypto.subtle.importKey(
      "raw",
      _,
      i,
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
var x = /* @__PURE__ */ ((e) => (e.CODE = "code", e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(x || {}), X = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.LOADING = "loading", e.PLAYING = "playing", e.PAUSED = "paused", e.READY = "ready", e))(X || {});
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
  let r = /* @__PURE__ */ Gi(() => $i(t == null ? void 0 : t(), 24));
  var l = Wa();
  Ne(() => {
    S(l, "width", o(r)), S(l, "height", o(r));
  }), U(e, l);
};
function Ha(e, t) {
  e.code === "Space" && (e.preventDefault(), e.stopImmediatePropagation(), t());
}
function Ya(e, t) {
  e.preventDefault(), t();
}
function Ga(e, t, r, l, i, a, u, c) {
  var f;
  [
    x.UNVERIFIED,
    x.ERROR,
    x.EXPIRED,
    x.CODE
  ].includes(o(t)) ? r() !== !1 && ((f = o(l)) == null ? void 0 : f.reportValidity()) === !1 ? w(i, !1) : a() ? u() : c() : w(i, !0);
}
var Wa = /* @__PURE__ */ ar('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="svelte-16ux7p0"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25" class="svelte-16ux7p0"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor" class="altcha-spinner svelte-16ux7p0"></path></svg>'), Za = /* @__PURE__ */ we('<input type="hidden" class="svelte-16ux7p0">'), za = /* @__PURE__ */ we('<div class="svelte-16ux7p0"><a target="_blank" class="altcha-logo svelte-16ux7p0" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-16ux7p0"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor" class="svelte-16ux7p0"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor" class="svelte-16ux7p0"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor" class="svelte-16ux7p0"></path></svg></a></div>'), Ja = /* @__PURE__ */ ar('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-16ux7p0"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z" class="svelte-16ux7p0"></path></svg>'), Ka = /* @__PURE__ */ ar('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-16ux7p0"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z" class="svelte-16ux7p0"></path></svg>'), Xa = /* @__PURE__ */ ar('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-16ux7p0"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z" class="svelte-16ux7p0"></path></svg>'), Qa = /* @__PURE__ */ we('<button type="button" class="altcha-code-challenge-audio svelte-16ux7p0"><!></button>'), eo = /* @__PURE__ */ we('<audio hidden autoplay class="svelte-16ux7p0"><source class="svelte-16ux7p0"></audio>'), to = /* @__PURE__ */ we('<div class="altcha-code-challenge svelte-16ux7p0" role="dialog"><div class="altcha-code-challenge-arrow svelte-16ux7p0"></div> <form data-code-challenge-form="1" class="svelte-16ux7p0"><img class="altcha-code-challenge-image svelte-16ux7p0" alt=""> <input type="text" autocomplete="off" name="code" class="altcha-code-challenge-input svelte-16ux7p0" required> <div class="altcha-code-challenge-buttons svelte-16ux7p0"><div class="altcha-code-challenge-buttons-left svelte-16ux7p0"><!> <button type="button" class="altcha-code-challenge-reload svelte-16ux7p0"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-16ux7p0"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z" class="svelte-16ux7p0"></path></svg></button></div> <button type="submit" class="altcha-code-challenge-verify svelte-16ux7p0"><!> </button></div> <!></form></div>'), ro = /* @__PURE__ */ we('<div class="svelte-16ux7p0"><!></div>'), no = /* @__PURE__ */ we('<div class="svelte-16ux7p0"><!></div>'), lo = /* @__PURE__ */ we('<div class="altcha-error svelte-16ux7p0"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="svelte-16ux7p0"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" class="svelte-16ux7p0"></path></svg> <!></div>'), io = /* @__PURE__ */ we('<div class="altcha-footer svelte-16ux7p0"><div class="svelte-16ux7p0"><!></div></div>'), ao = /* @__PURE__ */ we('<div class="altcha-anchor-arrow svelte-16ux7p0"></div>'), oo = /* @__PURE__ */ we('<!> <div class="altcha svelte-16ux7p0"><div class="altcha-main svelte-16ux7p0"><div><!> <input type="checkbox" class="svelte-16ux7p0"></div> <label class="altcha-label svelte-16ux7p0"><!></label> <!> <!> <!></div> <!> <!> <!></div>', 1);
const so = {
  hash: "svelte-16ux7p0",
  code: `.altcha.svelte-16ux7p0 {background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);position:relative;}.altcha.svelte-16ux7p0:focus-within {border-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating].svelte-16ux7p0 {background:var(--altcha-color-base, white);display:none;filter:drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2));left:-100%;position:fixed;top:-100%;width:var(--altcha-max-width, 260px);z-index:999999;}.altcha[data-floating=top].svelte-16ux7p0 .altcha-anchor-arrow:where(.svelte-16ux7p0) {border-bottom-color:transparent;border-top-color:var(--altcha-color-border, #a0a0a0);bottom:-12px;top:auto;}.altcha[data-floating=bottom].svelte-16ux7p0:focus-within::after {border-bottom-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating=top].svelte-16ux7p0:focus-within::after {border-top-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating].svelte-16ux7p0:not([data-state=unverified]) {display:block;}.altcha-anchor-arrow.svelte-16ux7p0 {border:6px solid transparent;border-bottom-color:var(--altcha-color-border, #a0a0a0);content:"";height:0;left:12px;position:absolute;top:-12px;width:0;}.altcha-main.svelte-16ux7p0 {align-items:center;display:flex;gap:0.4rem;padding:0.7rem;position:relative;}.altcha-code-challenge.svelte-16ux7p0 {background:var(--altcha-color-base, white);border:1px solid var(--altcha-color-border-focus, currentColor);border-radius:var(--altcha-border-radius, 3px);filter:drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2));padding:0.5rem;position:absolute;top:2.5rem;z-index:9999999;}.altcha-code-challenge.svelte-16ux7p0 > form:where(.svelte-16ux7p0) {display:flex;flex-direction:column;gap:0.5rem;}.altcha-code-challenge-input.svelte-16ux7p0 {border:1px solid currentColor;border-radius:3px;box-sizing:border-box;outline:none;font-size:16px;padding:0.35rem;width:220px;}.altcha-code-challenge-input.svelte-16ux7p0:focus {outline:2px solid color-mix(in srgb, var(--altcha-color-active, #1D1DC9) 20%, transparent);}.altcha-code-challenge-input.svelte-16ux7p0:disabled {opacity:0.7;}.altcha-code-challenge-image.svelte-16ux7p0 {border:1px solid currentColor;border-radius:3px;box-sizing:border-box;object-fit:contain;height:50px;width:220px;}.altcha-code-challenge-audio.svelte-16ux7p0,
.altcha-code-challenge-reload.svelte-16ux7p0 {background:#efefef;border:0;border-radius:3px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0.35rem;}.altcha-code-challenge-audio.svelte-16ux7p0:disabled,
.altcha-code-challenge-reload.svelte-16ux7p0:disabled {opacity:0.7;pointer-events:none;}.altcha-code-challenge-audio.svelte-16ux7p0 > :where(.svelte-16ux7p0),
.altcha-code-challenge-reload.svelte-16ux7p0 > :where(.svelte-16ux7p0) {height:20px;width:20px;}.altcha-code-challenge-buttons.svelte-16ux7p0 {display:flex;justify-content:space-between;}.altcha-code-challenge-buttons-left.svelte-16ux7p0 {display:flex;gap:0.25rem;}.altcha-code-challenge-verify.svelte-16ux7p0 {align-items:center;background:var(--altcha-color-active, #1D1DC9);border:0;border-radius:3px;color:white;cursor:pointer;display:flex;gap:0.5rem;font-size:100%;padding:0.35rem 1rem;}.altcha-code-challenge-verify.svelte-16ux7p0:disabled {opacity:0.7;pointer-events:none;}.altcha-code-challenge-arrow.svelte-16ux7p0 {border:6px solid transparent;border-bottom-color:var(--altcha-color-border, currentColor);content:"";height:0;left:0.15rem;position:absolute;top:-12px;width:0;}.altcha[data-floating=top].svelte-16ux7p0 .altcha-code-challenge:where(.svelte-16ux7p0) {top:-150px;}.altcha[data-floating=top].svelte-16ux7p0 .altcha-code-challenge-arrow:where(.svelte-16ux7p0) {border-bottom-color:transparent;border-top-color:var(--altcha-color-border, currentColor);bottom:-12px;top:auto;}.altcha-label.svelte-16ux7p0 {cursor:pointer;flex-grow:1;}.altcha-logo.svelte-16ux7p0 {color:currentColor;opacity:0.7;}.altcha-logo.svelte-16ux7p0:hover {opacity:1;}.altcha-error.svelte-16ux7p0 {color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem;}.altcha-footer.svelte-16ux7p0 {align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.7;justify-content:end;padding:0.2rem 0.7rem;}.altcha-footer.svelte-16ux7p0:hover {opacity:1;}.altcha-footer.svelte-16ux7p0 a {color:currentColor;}.altcha-checkbox.svelte-16ux7p0 {display:flex;align-items:center;height:24px;width:24px;}.altcha-checkbox.svelte-16ux7p0 input:where(.svelte-16ux7p0) {width:18px;height:18px;margin:0;}.altcha-checkbox-verifying.svelte-16ux7p0 input:where(.svelte-16ux7p0) {appearance:none;pointer-events:none;height:0;width:0;}.altcha-spinner.svelte-16ux7p0 {
  animation: svelte-16ux7p0-altcha-spinner 0.75s infinite linear;transform-origin:center;}

@keyframes svelte-16ux7p0-altcha-spinner {
  100% {
    transform: rotate(360deg);
  }
}`
};
function uo(e, t) {
  var _n, mn;
  dl(t, !0), Ea(e, so);
  let r = R(t, "auto", 7, void 0), l = R(t, "blockspam", 7, void 0), i = R(t, "challengeurl", 7, void 0), a = R(t, "challengejson", 7, void 0), u = R(t, "credentials", 7, void 0), c = R(t, "customfetch", 7, void 0), f = R(t, "debug", 7, !1), d = R(t, "delay", 7, 0), _ = R(t, "disableautofocus", 7, !1), v = R(t, "expire", 7, void 0), h = R(t, "floating", 7, void 0), b = R(t, "floatinganchor", 7, void 0), k = R(t, "floatingoffset", 7, void 0), T = R(t, "floatingpersist", 7, !1), F = R(t, "hidefooter", 7, !1), ue = R(t, "hidelogo", 7, !1), le = R(t, "id", 7, void 0), K = R(t, "language", 7, void 0), ce = R(t, "name", 7, "altcha"), ye = R(t, "maxnumber", 7, 1e6), j = R(t, "mockerror", 7, !1), Q = R(t, "obfuscated", 7, void 0), Ve = R(t, "plugins", 7, void 0), bt = R(t, "refetchonexpire", 7, !0), Ke = R(t, "sentinel", 7, void 0), xe = R(t, "spamfilter", 7, !1), it = R(t, "strings", 7, void 0), he = R(t, "test", 7, !1), ee = R(t, "verifyurl", 7, void 0), at = R(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), wt = R(t, "workerurl", 7, void 0);
  const Or = ["SHA-256", "SHA-384", "SHA-512"], kl = "https://altcha.org/", Me = (n, s) => {
    t.$$host.dispatchEvent(new CustomEvent(n, { detail: s }));
  }, Fr = (mn = (_n = document.documentElement.lang) == null ? void 0 : _n.split("-")) == null ? void 0 : mn[0], or = /* @__PURE__ */ Ye(() => {
    var n;
    return i() && new URL(i(), location.origin).host.endsWith(".altcha.org") && !!((n = i()) != null && n.includes("apiKey=ckey_"));
  }), sr = /* @__PURE__ */ Ye(() => a() ? Kr(a()) : void 0), Al = /* @__PURE__ */ Ye(() => it() ? Kr(it()) : {}), L = /* @__PURE__ */ Ye(() => ({
    ...Ur(),
    ...o(Al)
  })), Vr = /* @__PURE__ */ Ye(() => `${le() || ce()}_checkbox_${Math.round(Math.random() * 1e8)}`);
  let yt = oe(!1), q = oe(null), I = oe(V(x.UNVERIFIED)), te = oe(void 0), xt = oe(null), Ue = oe(null), ur = oe(null), ot = oe(null), M = oe(null), Xe = oe(null), Ee = null, Y = oe(null), Qe = oe(!1), je = [], cr = oe(!1), $e = oe(null);
  xr(() => {
    Ml(o(Xe));
  }), xr(() => {
    Ul(o(I));
  }), Na(() => {
    Rl(), o(M) && (o(M).removeEventListener("submit", Gr), o(M).removeEventListener("reset", Wr), o(M).removeEventListener("focusin", Yr), w(M, null)), Ee && (clearTimeout(Ee), Ee = null), document.removeEventListener("click", Br), document.removeEventListener("scroll", Hr), window.removeEventListener("resize", Jr);
  }), yl(() => {
    var n;
    $("mounted", "2.0.0-beta.5"), $("workers", at()), Nl(), $("plugins", je.length ? je.map((s) => s.constructor.pluginName).join(", ") : "none"), he() && $("using test mode"), v() && fr(v()), r() !== void 0 && $("auto", r()), h() !== void 0 && Qr(h()), w(M, V((n = o(te)) == null ? void 0 : n.closest("form"))), o(M) && (o(M).addEventListener("submit", Gr, { capture: !0 }), o(M).addEventListener("reset", Wr), (r() === "onfocus" || T() === "focus") && o(M).addEventListener("focusin", Yr)), r() === "onload" && (Q() ? Et() : Se()), o(or) && (F() || ue()) && $("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      Me("load");
    });
  });
  function Pt(n, s) {
    return btoa(JSON.stringify({
      algorithm: n.algorithm,
      challenge: n.challenge,
      number: s.number,
      salt: n.salt,
      signature: n.signature,
      test: he() ? !0 : void 0,
      took: s.took
    }));
  }
  function Rl() {
    for (const n of je)
      n.destroy();
  }
  function Mr() {
    i() && bt() && o(I) === x.VERIFIED ? Se() : st(x.EXPIRED, o(L).expired);
  }
  async function Il() {
    var n;
    if (j())
      throw $("mocking error"), new Error("Mocked error.");
    if (o(sr))
      return $("using provided json data"), o(sr);
    if (he())
      return $("generating test challenge", { test: he() }), Va(typeof he() != "boolean" ? +he() : void 0);
    {
      if (!i() && o(M)) {
        const E = o(M).getAttribute("action");
        E != null && E.includes("/form/") && i(E + "/altcha");
      }
      if (!i())
        throw new Error("Attribute challengeurl not set.");
      $("fetching challenge from", i());
      let s = null, g = null;
      if (c())
        if ($("using customfetch"), typeof c() == "string") {
          if (s = globalThis[c()] || null, !s)
            throw new Error(`Custom fetch function not found: ${c()}`);
        } else
          s = c();
      const m = {
        credentials: typeof u() == "boolean" ? "include" : u(),
        headers: xe() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      };
      if (s) {
        if (g = await s(i(), m), !g || !(g instanceof Response))
          throw new Error("Custom fetch function did not return a response.");
      } else
        g = await fetch(i(), m);
      if (g.status !== 200)
        throw new Error(`Server responded with ${g.status}.`);
      const p = g.headers.get("X-Altcha-Config"), A = await g.json(), y = new URLSearchParams((n = A.salt.split("?")) == null ? void 0 : n[1]), B = y.get("expires") || y.get("expire");
      if (B) {
        const E = new Date(+B * 1e3), H = isNaN(E.getTime()) ? 0 : E.getTime() - Date.now();
        H > 0 && fr(H);
      }
      if (p)
        try {
          const E = JSON.parse(p);
          E && typeof E == "object" && (E.verifyurl && !E.verifyurl.startsWith("javascript:") && (E.verifyurl = qr(E.verifyurl)), rn(E));
        } catch (E) {
          $("unable to configure from X-Altcha-Config", E);
        }
      return A;
    }
  }
  function $l(n) {
    var g, m;
    const s = (g = o(M)) == null ? void 0 : g.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((m = s == null ? void 0 : s.value) == null ? void 0 : m.slice(s.value.indexOf("@"))) || void 0;
  }
  function Ur(n = [
    K() || "",
    document.documentElement.lang || "",
    ...navigator.languages
  ]) {
    const s = Object.keys(globalThis.altchaI18n).map((m) => m.toLowerCase()), g = n.reduce(
      (m, p) => (p = p.toLowerCase(), m || (globalThis.altchaI18n[p] ? p : null) || s.find((A) => p.split("-")[0] === A.split("-")[0]) || null),
      null
    );
    return globalThis.altchaI18n[g || "en"];
  }
  function Sl() {
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
  function jr(n) {
    var g;
    return [
      ...((g = o(M)) == null ? void 0 : g.querySelectorAll(n != null && n.length ? n.map((m) => `input[name="${m}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (m, p) => {
        const A = p.name, y = p.value;
        return A && y && (m[A] = /\n/.test(y) ? y.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : y), m;
      },
      {}
    );
  }
  function qr(n, s) {
    const g = new URL(i() || location.origin), m = new URL(n, g);
    if (m.search || (m.search = g.search), s)
      for (const p in s)
        s[p] !== void 0 && s[p] !== null && m.searchParams.set(p, s[p]);
    return m.toString();
  }
  function Nl() {
    const n = Ve() !== void 0 ? Ve().split(",") : void 0;
    for (const s of globalThis.altchaPlugins)
      (!n || n.includes(s.pluginName)) && je.push(new s({
        el: o(te),
        clarify: Et,
        dispatch: Me,
        getConfiguration: nn,
        getFloatingAnchor: ln,
        getState: an,
        log: $,
        reset: st,
        solve: tn,
        setState: Ce,
        setFloatingAnchor: sn,
        verify: Se
      }));
  }
  function $(...n) {
    (f() || n.some((s) => s instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${ce()}]`, ...n);
  }
  function Dl() {
    w(Y, V(X.PAUSED));
  }
  function Tl(n) {
    w(Y, V(X.ERROR));
  }
  function Ll() {
    w(Y, V(X.READY));
  }
  function Pl() {
    w(Y, V(X.LOADING));
  }
  function Ol() {
    w(Y, V(X.PLAYING));
  }
  function Fl() {
    w(Y, V(X.PAUSED));
  }
  function Vl(n) {
    var s;
    if (n.preventDefault(), n.stopPropagation(), o(q)) {
      const g = new FormData(n.target), m = String(g.get("code"));
      if ((s = ee()) != null && s.startsWith("javascript:")) {
        const p = ee().replace(/^javascript:/, "");
        if ($(`calling ${p} function instead of verifyurl`), !(p in globalThis))
          throw new Error(`Global function "${p}" is undefined.`);
        return globalThis[p]({
          challenge: o(q).challenge,
          code: m,
          solution: o(q).solution
        });
      }
      w(Qe, !0), Xr(Pt(o(q).challenge, o(q).solution), m).then(({ reason: p, verified: A }) => {
        A ? (w(q, null), Ce(x.VERIFIED), $("verified"), br().then(() => {
          var y;
          (y = o(ur)) == null || y.focus(), Me("verified", { payload: o($e) });
        })) : (st(), w(Xe, V(p || "Verification failed")));
      }).catch((p) => {
        w(q, null), Ce(x.ERROR, p), $("sentinel verification failed:", p);
      }).finally(() => {
        w(Qe, !1);
      });
    }
  }
  function Br(n) {
    var g;
    const s = n.target;
    h() && s && !o(te).contains(s) && (o(I) === x.VERIFIED && T() === !1 || o(I) === x.VERIFIED && T() === "focus" && !((g = o(M)) != null && g.matches(":focus-within")) || r() === "off" && o(I) === x.UNVERIFIED) && on();
  }
  function Hr() {
    h() && o(I) !== x.UNVERIFIED && Ct();
  }
  function Ml(n) {
    for (const s of je)
      typeof s.onErrorChange == "function" && s.onErrorChange(o(Xe));
  }
  function Yr(n) {
    o(I) === x.UNVERIFIED ? Se() : h() && T() === "focus" && o(I) === x.VERIFIED && dr();
  }
  function Gr(n) {
    const s = n.target, g = n.submitter;
    s != null && s.hasAttribute("data-code-challenge-form") || (o(M) && r() === "onsubmit" ? o(I) === x.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), Se().then(() => {
      var p;
      g && ["INPUT", "BUTTON"].includes(g.tagName) && g.getAttribute("name") ? g.click() : (p = o(M)) == null || p.requestSubmit();
    })) : o(I) !== x.VERIFIED && (n.preventDefault(), n.stopPropagation(), o(I) === x.VERIFYING && Zr()) : o(M) && h() && r() === "off" && o(I) === x.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), dr()));
  }
  function Wr() {
    st();
  }
  function Zr() {
    o(I) === x.VERIFYING && o(L).waitAlert && alert(o(L).waitAlert);
  }
  function zr() {
    o(Ue) ? o(Ue).paused ? (o(Ue).currentTime = 0, o(Ue).play()) : o(Ue).pause() : (w(cr, !0), requestAnimationFrame(() => {
      var n;
      (n = o(Ue)) == null || n.play();
    }));
  }
  function Ul(n) {
    for (const s of je)
      typeof s.onStateChange == "function" && s.onStateChange(o(I));
    h() && o(I) !== x.UNVERIFIED && requestAnimationFrame(() => {
      Ct();
    }), w(yt, o(I) === x.VERIFIED);
  }
  function Jr() {
    h() && Ct();
  }
  function Kr(n) {
    return JSON.parse(n);
  }
  async function jl(n) {
    if (!ee())
      throw new Error("Attribute verifyurl not set.");
    $("requesting server verification from", ee());
    const s = { payload: n };
    if (xe() !== !1) {
      const {
        blockedCountries: p,
        classifier: A,
        disableRules: y,
        email: B,
        expectedLanguages: E,
        expectedCountries: H,
        fields: ie,
        ipAddress: Be,
        text: vr,
        timeZone: Ft
      } = Sl();
      s.blockedCountries = p, s.classifier = A, s.disableRules = y, s.email = B === !1 ? void 0 : $l(B), s.expectedCountries = H, s.expectedLanguages = E || (Fr ? [Fr] : void 0), s.fields = ie === !1 ? void 0 : jr(ie), s.ipAddress = Be === !1 ? void 0 : Be || "auto", s.text = vr, s.timeZone = Ft === !1 ? void 0 : Ft || Ln();
    }
    const g = await fetch(ee(), {
      body: JSON.stringify(s),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (g.status !== 200)
      throw new Error(`Server responded with ${g.status}.`);
    const m = await g.json();
    if (m != null && m.payload && w($e, V(m.payload)), Me("serververification", m), l() && m.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  async function Xr(n, s) {
    if (!ee())
      throw new Error("Attribute verifyurl not set.");
    $("requesting sentinel verification from", ee());
    const g = { code: s, payload: n };
    Ke() && (g.fields = Ke().fields ? jr() : void 0, g.timeZone = Ke().timeZone ? Ln() : void 0);
    const m = await fetch(ee(), {
      body: JSON.stringify(g),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (m.status !== 200)
      throw new Error(`Server responded with ${m.status}.`);
    const p = await m.json();
    return p != null && p.payload && w($e, V(p.payload)), Me("sentinelverification", p), p;
  }
  function fr(n) {
    $("expire", n), Ee && (clearTimeout(Ee), Ee = null), n < 1 ? Mr() : Ee = setTimeout(Mr, n);
  }
  function Qr(n) {
    $("floating", n), h() !== n && (o(te).style.left = "", o(te).style.top = ""), h(n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : h()), h() ? (r() || r("onsubmit"), document.addEventListener("scroll", Hr), document.addEventListener("click", Br), window.addEventListener("resize", Jr)) : r() === "onsubmit" && r(void 0);
  }
  function en(n) {
    if (!n.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (n.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!Or.includes(n.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${Or.join(", ")}`);
    if (!n.challenge || n.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!n.salt || n.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function tn(n) {
    let s = null;
    if ("Worker" in window) {
      try {
        s = await ql(n, n.maxNumber || n.maxnumber || ye());
      } catch (g) {
        $(g);
      }
      if ((s == null ? void 0 : s.number) !== void 0 || "obfuscated" in n)
        return { data: n, solution: s };
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
  async function ql(n, s = typeof he() == "number" ? he() : n.maxNumber || n.maxnumber || ye(), g = Math.ceil(at())) {
    const m = [];
    g = Math.min(16, s, Math.max(1, g));
    for (let y = 0; y < g; y++)
      m.push(altchaCreateWorker(wt()));
    const p = Math.ceil(s / g), A = await Promise.all(m.map((y, B) => {
      const E = B * p;
      return new Promise((H) => {
        y.addEventListener("message", (ie) => {
          if (ie.data)
            for (const Be of m)
              Be !== y && Be.postMessage({ type: "abort" });
          H(ie.data);
        }), y.postMessage({
          payload: n,
          max: E + p,
          start: E,
          type: "work"
        });
      });
    }));
    for (const y of m)
      y.terminate();
    return A.find((y) => !!y) || null;
  }
  async function Et() {
    if (!Q()) {
      Ce(x.ERROR);
      return;
    }
    const n = je.find((s) => s.constructor.pluginName === "obfuscation");
    if (!n || !("clarify" in n)) {
      Ce(x.ERROR), $("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in n && typeof n.clarify == "function")
      return n.clarify();
  }
  function rn(n) {
    n.obfuscated !== void 0 && Q(n.obfuscated), n.auto !== void 0 && (r(n.auto), r() === "onload" && (Q() ? Et() : Se())), n.blockspam !== void 0 && l(!!n.blockspam), n.customfetch !== void 0 && c(n.customfetch), n.floatinganchor !== void 0 && b(n.floatinganchor), n.delay !== void 0 && d(n.delay), n.floatingoffset !== void 0 && k(n.floatingoffset), n.floating !== void 0 && Qr(n.floating), n.expire !== void 0 && (fr(n.expire), v(n.expire)), n.challenge && (a(typeof n.challenge == "string" ? n.challenge : JSON.stringify(n.challenge)), en(o(sr))), n.challengeurl !== void 0 && i(n.challengeurl), n.debug !== void 0 && f(!!n.debug), n.hidefooter !== void 0 && F(!!n.hidefooter), n.hidelogo !== void 0 && ue(!!n.hidelogo), n.language !== void 0 && it(Ur([n.language])), n.maxnumber !== void 0 && ye(+n.maxnumber), n.mockerror !== void 0 && j(!!n.mockerror), n.name !== void 0 && ce(n.name), n.refetchonexpire !== void 0 && bt(!!n.refetchonexpire), n.sentinel !== void 0 && typeof n.sentinel == "object" && Ke(n.sentinel), n.spamfilter !== void 0 && xe(typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && it(typeof n.strings == "string" ? n.strings : JSON.stringify(n.strings)), n.test !== void 0 && he(typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && ee(n.verifyurl), n.workers !== void 0 && at(+n.workers), n.workerurl !== void 0 && wt(n.workerurl);
  }
  function nn() {
    return {
      auto: r(),
      blockspam: l(),
      challengeurl: i(),
      debug: f(),
      delay: d(),
      expire: v(),
      floating: h(),
      floatinganchor: b(),
      floatingoffset: k(),
      hidefooter: F(),
      hidelogo: ue(),
      name: ce(),
      maxnumber: ye(),
      mockerror: j(),
      obfuscated: Q(),
      refetchonexpire: bt(),
      spamfilter: xe(),
      strings: o(L),
      test: he(),
      verifyurl: ee(),
      workers: at(),
      workerurl: wt()
    };
  }
  function ln() {
    return o(ot);
  }
  function Bl(n) {
    return je.find((s) => s.constructor.pluginName === n);
  }
  function an() {
    return o(I);
  }
  function on() {
    o(te).style.display = "none";
  }
  function Ct(n = 20) {
    var s;
    if (o(te))
      if (o(ot) || w(ot, V((b() ? document.querySelector(b()) : (s = o(M)) == null ? void 0 : s.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || o(M))), o(ot)) {
        const g = parseInt(k(), 10) || 12, m = o(ot).getBoundingClientRect(), p = o(te).getBoundingClientRect(), A = document.documentElement.clientHeight, y = document.documentElement.clientWidth, B = h() === "auto" ? m.bottom + p.height + g + n > A : h() === "top", E = Math.max(n, Math.min(y - n - p.width, m.left + m.width / 2 - p.width / 2));
        if (B ? o(te).style.top = `${m.top - (p.height + g)}px` : o(te).style.top = `${m.bottom + g}px`, o(te).style.left = `${E}px`, o(te).setAttribute("data-floating", B ? "top" : "bottom"), o(xt)) {
          const H = o(xt).getBoundingClientRect();
          o(xt).style.left = m.left - E + m.width / 2 - H.width / 2 + "px";
        }
      } else
        $("unable to find floating anchor element");
  }
  function st(n = x.UNVERIFIED, s = null) {
    Ee && (clearTimeout(Ee), Ee = null), w(yt, !1), w($e, null), w(q, null), w(cr, !1), w(Y, null), Ce(n, s);
  }
  function sn(n) {
    w(ot, V(n));
  }
  function Ce(n, s = null) {
    w(I, V(n)), w(Xe, V(s)), Me("statechange", {
      payload: o($e),
      state: o(I)
    });
  }
  function dr() {
    o(te).style.display = "block", h() && Ct();
  }
  async function Se() {
    return st(x.VERIFYING), await new Promise((n) => setTimeout(n, d() || 0)), Il().then((n) => (en(n), $("challenge", n), tn(n))).then(({ data: n, solution: s }) => {
      var g;
      if ($("solution", s), !s || n && "challenge" in n && !("clearText" in s))
        if ((s == null ? void 0 : s.number) !== void 0 && "challenge" in n)
          if (ee() && "codeChallenge" in n)
            ((g = document.activeElement) == null ? void 0 : g.tagName) === "INPUT" && _() === !1 && document.activeElement.blur(), w(q, V({ challenge: n, solution: s }));
          else {
            if (ee() && Ke() !== void 0)
              return Xr(Pt(n, s));
            if (ee())
              return jl(Pt(n, s));
            w($e, V(Pt(n, s))), $("payload", o($e));
          }
        else
          throw $("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      o(q) ? (Ce(x.CODE), br().then(() => {
        Me("code", { codeChallenge: o(q) });
      })) : (Ce(x.VERIFIED), $("verified"), br().then(() => {
        Me("verified", { payload: o($e) });
      }));
    }).catch((n) => {
      $(n), Ce(x.ERROR, n.message);
    });
  }
  var un = oo(), cn = It(un);
  xa(cn, t, "default", {});
  var kt = z(cn, 2), hr = Z(kt), Ot = Z(hr);
  let fn;
  var dn = Z(Ot);
  {
    var Hl = (n) => {
      wr(n);
    };
    J(dn, (n) => {
      o(I) === x.VERIFYING && n(Hl);
    });
  }
  var qe = z(dn, 2);
  Nn(qe), qe.__change = [
    Ga,
    I,
    xe,
    M,
    yt,
    Q,
    Et,
    Se
  ], Ut(qe, (n) => w(ur, n), () => o(ur)), W(Ot);
  var At = z(Ot, 2), Yl = Z(At);
  {
    var Gl = (n) => {
      var s = Mt(), g = It(s);
      et(g, () => o(L).verified), U(n, s);
    }, Wl = (n, s) => {
      {
        var g = (p) => {
          var A = Mt(), y = It(A);
          et(y, () => o(L).verifying), U(p, A);
        }, m = (p, A) => {
          {
            var y = (E) => {
              var H = Mt(), ie = It(H);
              et(ie, () => o(L).verificationRequired), U(E, H);
            }, B = (E) => {
              var H = Mt(), ie = It(H);
              et(ie, () => o(L).label), U(E, H);
            };
            J(
              p,
              (E) => {
                o(I) === x.CODE ? E(y) : E(B, !1);
              },
              A
            );
          }
        };
        J(
          n,
          (p) => {
            o(I) === x.VERIFYING ? p(g) : p(m, !1);
          },
          s
        );
      }
    };
    J(Yl, (n) => {
      o(I) === x.VERIFIED ? n(Gl) : n(Wl, !1);
    });
  }
  W(At);
  var hn = z(At, 2);
  {
    var Zl = (n) => {
      var s = Za();
      Nn(s), Ne(() => {
        S(s, "name", ce()), Ia(s, o($e));
      }), U(n, s);
    };
    J(hn, (n) => {
      o(I) === x.VERIFIED && n(Zl);
    });
  }
  var vn = z(hn, 2);
  {
    var zl = (n) => {
      var s = za(), g = Z(s);
      S(g, "href", kl), W(s), Ne(() => S(g, "aria-label", o(L).ariaLinkLabel)), U(n, s);
    };
    J(vn, (n) => {
      (ue() !== !0 || o(or)) && n(zl);
    });
  }
  var Jl = z(vn, 2);
  {
    var Kl = (n) => {
      var s = to(), g = z(Z(s), 2), m = Z(g), p = z(m, 2);
      ga(p, !_()), p.__keydown = [
        Ha,
        zr
      ];
      var A = z(p, 2), y = Z(A), B = Z(y);
      {
        var E = (pe) => {
          var G = Qa();
          G.__click = zr;
          var Vt = Z(G);
          {
            var Rt = (ut) => {
              wr(ut, () => 20);
            }, li = (ut, ii) => {
              {
                var ai = (ct) => {
                  var gr = Ja();
                  U(ct, gr);
                }, oi = (ct, gr) => {
                  {
                    var si = (ft) => {
                      var pr = Ka();
                      U(ft, pr);
                    }, ui = (ft) => {
                      var pr = Xa();
                      U(ft, pr);
                    };
                    J(
                      ct,
                      (ft) => {
                        o(Y) === X.PLAYING ? ft(si) : ft(ui, !1);
                      },
                      gr
                    );
                  }
                };
                J(
                  ut,
                  (ct) => {
                    o(Y) === X.ERROR ? ct(ai) : ct(oi, !1);
                  },
                  ii
                );
              }
            };
            J(Vt, (ut) => {
              o(Y) === X.LOADING ? ut(Rt) : ut(li, !1);
            });
          }
          W(G), Ne(() => {
            S(G, "title", o(L).getAudioChallenge), G.disabled = o(Y) === X.LOADING || o(Y) === X.ERROR || o(Qe), S(G, "aria-label", o(Y) === X.LOADING ? o(L).loading : o(L).getAudioChallenge);
          }), U(pe, G);
        };
        J(B, (pe) => {
          o(q).challenge.codeChallenge.audio && pe(E);
        });
      }
      var H = z(B, 2);
      H.__click = [Ya, Se], W(y);
      var ie = z(y, 2), Be = Z(ie);
      {
        var vr = (pe) => {
          wr(pe, () => 16);
        };
        J(Be, (pe) => {
          o(Qe) && pe(vr);
        });
      }
      var Ft = z(Be);
      W(ie), W(A);
      var ri = z(A, 2);
      {
        var ni = (pe) => {
          var G = eo(), Vt = Z(G);
          W(G), Ut(G, (Rt) => w(Ue, Rt), () => o(Ue)), Ne((Rt) => S(Vt, "src", Rt), [
            () => qr(o(q).challenge.codeChallenge.audio, { language: K() })
          ]), He("loadstart", G, Pl), He("canplay", G, Ll), He("pause", G, Fl), He("playing", G, Ol), He("ended", G, Dl), He("error", Vt, Tl), U(pe, G);
        };
        J(ri, (pe) => {
          o(q).challenge.codeChallenge.audio && o(cr) && pe(ni);
        });
      }
      W(g), W(s), Ne(() => {
        S(s, "aria-label", o(L).verificationRequired), S(m, "src", o(q).challenge.codeChallenge.image), S(p, "minlength", o(q).challenge.codeChallenge.length || 1), S(p, "maxlength", o(q).challenge.codeChallenge.length), S(p, "placeholder", o(L).enterCode), S(p, "aria-label", o(Y) === X.LOADING ? o(L).loading : o(Y) === X.PLAYING ? "" : o(L).enterCodeAria), S(p, "aria-live", o(Y) ? "assertive" : "polite"), S(p, "aria-busy", o(Y) === X.LOADING), p.disabled = o(Qe), S(H, "aria-label", o(L).reload), S(H, "title", o(L).reload), H.disabled = o(Qe), ie.disabled = o(Qe), S(ie, "aria-label", o(L).verify), ba(Ft, ` ${o(L).verify ?? ""}`);
      }), He("submit", g, Vl, !0), U(n, s);
    };
    J(Jl, (n) => {
      var s;
      (s = o(q)) != null && s.challenge.codeChallenge && n(Kl);
    });
  }
  W(hr);
  var gn = z(hr, 2);
  {
    var Xl = (n) => {
      var s = lo(), g = z(Z(s), 2);
      {
        var m = (A) => {
          var y = ro(), B = Z(y);
          et(B, () => o(L).expired), W(y), Ne(() => S(y, "title", o(Xe))), U(A, y);
        }, p = (A) => {
          var y = no(), B = Z(y);
          et(B, () => o(L).error), W(y), Ne(() => S(y, "title", o(Xe))), U(A, y);
        };
        J(g, (A) => {
          o(I) === x.EXPIRED ? A(m) : A(p, !1);
        });
      }
      W(s), U(n, s);
    };
    J(gn, (n) => {
      (o(Xe) || o(I) === x.EXPIRED) && n(Xl);
    });
  }
  var pn = z(gn, 2);
  {
    var Ql = (n) => {
      var s = io(), g = Z(s), m = Z(g);
      et(m, () => o(L).footer), W(g), W(s), U(n, s);
    };
    J(pn, (n) => {
      o(L).footer && (F() !== !0 || o(or)) && n(Ql);
    });
  }
  var ei = z(pn, 2);
  {
    var ti = (n) => {
      var s = ao();
      Ut(s, (g) => w(xt, g), () => o(xt)), U(n, s);
    };
    J(ei, (n) => {
      h() && n(ti);
    });
  }
  return W(kt), Ut(kt, (n) => w(te, n), () => o(te)), Ne(
    (n) => {
      var s;
      S(kt, "data-state", o(I)), S(kt, "data-floating", h()), fn = ka(Ot, 1, "altcha-checkbox svelte-16ux7p0", null, fn, n), S(qe, "id", o(Vr)), qe.required = r() !== "onsubmit" && (!h() || r() !== "off"), S(qe, "aria-hidden", o(I) === x.VERIFYING), S(At, "for", o(Vr)), S(At, "aria-hidden", !!((s = o(q)) != null && s.challenge.codeChallenge));
    },
    [
      () => ({
        "altcha-checkbox-verifying": o(I) === x.VERIFYING
      })
    ]
  ), He("invalid", qe, Zr), Sa(qe, () => o(yt), (n) => w(yt, n)), U(e, un), hl({
    clarify: Et,
    configure: rn,
    getConfiguration: nn,
    getFloatingAnchor: ln,
    getPlugin: Bl,
    getState: an,
    hide: on,
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
      return l();
    },
    set blockspam(n = void 0) {
      l(n), C();
    },
    get challengeurl() {
      return i();
    },
    set challengeurl(n = void 0) {
      i(n), C();
    },
    get challengejson() {
      return a();
    },
    set challengejson(n = void 0) {
      a(n), C();
    },
    get credentials() {
      return u();
    },
    set credentials(n = void 0) {
      u(n), C();
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
      return b();
    },
    set floatinganchor(n = void 0) {
      b(n), C();
    },
    get floatingoffset() {
      return k();
    },
    set floatingoffset(n = void 0) {
      k(n), C();
    },
    get floatingpersist() {
      return T();
    },
    set floatingpersist(n = !1) {
      T(n), C();
    },
    get hidefooter() {
      return F();
    },
    set hidefooter(n = !1) {
      F(n), C();
    },
    get hidelogo() {
      return ue();
    },
    set hidelogo(n = !1) {
      ue(n), C();
    },
    get id() {
      return le();
    },
    set id(n = void 0) {
      le(n), C();
    },
    get language() {
      return K();
    },
    set language(n = void 0) {
      K(n), C();
    },
    get name() {
      return ce();
    },
    set name(n = "altcha") {
      ce(n), C();
    },
    get maxnumber() {
      return ye();
    },
    set maxnumber(n = 1e6) {
      ye(n), C();
    },
    get mockerror() {
      return j();
    },
    set mockerror(n = !1) {
      j(n), C();
    },
    get obfuscated() {
      return Q();
    },
    set obfuscated(n = void 0) {
      Q(n), C();
    },
    get plugins() {
      return Ve();
    },
    set plugins(n = void 0) {
      Ve(n), C();
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
      return xe();
    },
    set spamfilter(n = !1) {
      xe(n), C();
    },
    get strings() {
      return it();
    },
    set strings(n = void 0) {
      it(n), C();
    },
    get test() {
      return he();
    },
    set test(n = !1) {
      he(n), C();
    },
    get verifyurl() {
      return ee();
    },
    set verifyurl(n = void 0) {
      ee(n), C();
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
ma(["change", "keydown", "click"]);
customElements.define("altcha-widget", Oa(
  uo,
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
globalThis.altchaCreateWorker = (e) => e ? new Worker(new URL(e)) : new di();
export {
  uo as Altcha
};
