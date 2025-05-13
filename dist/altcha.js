var fi = Object.defineProperty;
var bn = (e) => {
  throw TypeError(e);
};
var di = (e, t, r) => t in e ? fi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var _e = (e, t, r) => di(e, typeof t != "symbol" ? t + "" : t, r), yn = (e, t, r) => t.has(e) || bn("Cannot " + r);
var ae = (e, t, r) => (yn(e, t, "read from private field"), r ? r.call(e) : t.get(e)), _r = (e, t, r) => t.has(e) ? bn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), mr = (e, t, r, l) => (yn(e, t, "write to private field"), l ? l.call(e, r) : t.set(e, r), r);
const Fn = `(function(){"use strict";const d=new TextEncoder;function p(e){return[...new Uint8Array(e)].map(t=>t.toString(16).padStart(2,"0")).join("")}async function b(e,t,r){if(typeof crypto>"u"||!("subtle"in crypto)||!("digest"in crypto.subtle))throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");return p(await crypto.subtle.digest(r.toUpperCase(),d.encode(e+t)))}function w(e,t,r="SHA-256",n=1e6,s=0){const o=new AbortController,a=Date.now();return{promise:(async()=>{for(let c=s;c<=n;c+=1){if(o.signal.aborted)return null;if(await b(t,c,r)===e)return{number:c,took:Date.now()-a}}return null})(),controller:o}}function h(e){const t=atob(e),r=new Uint8Array(t.length);for(let n=0;n<t.length;n++)r[n]=t.charCodeAt(n);return r}function g(e,t=12){const r=new Uint8Array(t);for(let n=0;n<t;n++)r[n]=e%256,e=Math.floor(e/256);return r}async function m(e,t="",r=1e6,n=0){const s="AES-GCM",o=new AbortController,a=Date.now(),l=async()=>{for(let u=n;u<=r;u+=1){if(o.signal.aborted||!c||!y)return null;try{const f=await crypto.subtle.decrypt({name:s,iv:g(u)},c,y);if(f)return{clearText:new TextDecoder().decode(f),took:Date.now()-a}}catch{}}return null};let c=null,y=null;try{y=h(e);const u=await crypto.subtle.digest("SHA-256",d.encode(t));c=await crypto.subtle.importKey("raw",u,s,!1,["decrypt"])}catch{return{promise:Promise.reject(),controller:o}}return{promise:l(),controller:o}}let i;onmessage=async e=>{const{type:t,payload:r,start:n,max:s}=e.data;let o=null;if(t==="abort")i==null||i.abort(),i=void 0;else if(t==="work"){if("obfuscated"in r){const{key:a,obfuscated:l}=r||{};o=await m(l,a,s,n)}else{const{algorithm:a,challenge:l,salt:c}=r||{};o=w(l,c,a,s,n)}i=o.controller,o.promise.then(a=>{self.postMessage(a&&{...a,worker:!0})})}}})();
`, xn = typeof self < "u" && self.Blob && new Blob([Fn], { type: "text/javascript;charset=utf-8" });
function hi(e) {
  let t;
  try {
    if (t = xn && (self.URL || self.webkitURL).createObjectURL(xn), !t) throw "";
    const r = new Worker(t, {
      name: e == null ? void 0 : e.name
    });
    return r.addEventListener("error", () => {
      (self.URL || self.webkitURL).revokeObjectURL(t);
    }), r;
  } catch {
    return new Worker(
      "data:text/javascript;charset=utf-8," + encodeURIComponent(Fn),
      {
        name: e == null ? void 0 : e.name
      }
    );
  } finally {
    t && (self.URL || self.webkitURL).revokeObjectURL(t);
  }
}
const vi = "5";
var On;
typeof window < "u" && ((On = window.__svelte ?? (window.__svelte = {})).v ?? (On.v = /* @__PURE__ */ new Set())).add(vi);
const gi = 1, wi = 4, _i = 8, mi = 16, pi = 1, bi = 2, Ar = "[", Vn = "[!", Mn = "]", vt = {}, se = Symbol(), yi = "http://www.w3.org/1999/xhtml", En = !1, pe = 2, Un = 4, Qt = 8, Rr = 16, Oe = 32, nt = 64, Ht = 128, ge = 256, Yt = 512, de = 1024, Fe = 2048, mt = 4096, gt = 8192, er = 16384, xi = 32768, Ir = 65536, Ei = 1 << 19, jn = 1 << 20, $t = Symbol("$state"), qn = Symbol("legacy props"), Ci = Symbol("");
var Bn = Array.isArray, ki = Array.prototype.indexOf, Ai = Array.from, Gt = Object.keys, Wt = Object.defineProperty, tt = Object.getOwnPropertyDescriptor, Ri = Object.getOwnPropertyDescriptors, Ii = Object.prototype, $i = Array.prototype, Hn = Object.getPrototypeOf;
function Yn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Si(e, t, r = !1) {
  return e === void 0 ? r ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
const Ni = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Nt = [], Dt = [];
function Gn() {
  var e = Nt;
  Nt = [], Yn(e);
}
function Wn() {
  var e = Dt;
  Dt = [], Yn(e);
}
function tr(e) {
  Nt.length === 0 && queueMicrotask(Gn), Nt.push(e);
}
function Di(e) {
  Dt.length === 0 && Ni(Wn), Dt.push(e);
}
function Cn() {
  Nt.length > 0 && Gn(), Dt.length > 0 && Wn();
}
function Zn(e) {
  return e === this.v;
}
function Ti(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function $r(e) {
  return !Ti(e, this.v);
}
function Li(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Pi() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Oi(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Fi() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Vi() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Mi(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Ui() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ji() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function qi() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Bi() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Hi = !1;
function ke(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Zn,
    rv: 0,
    wv: 0
  };
  return r;
}
function oe(e) {
  return /* @__PURE__ */ Yi(ke(e));
}
// @__NO_SIDE_EFFECTS__
function zn(e, t = !1) {
  const r = ke(e);
  return t || (r.equals = $r), r;
}
// @__NO_SIDE_EFFECTS__
function Yi(e) {
  return S !== null && !me && (S.f & pe) !== 0 && (Ae === null ? Xi([e]) : Ae.push(e)), e;
}
function b(e, t) {
  return S !== null && !me && gl() && (S.f & (pe | Rr)) !== 0 && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (Ae === null || !Ae.includes(e)) && Bi(), Gi(e, t);
}
function Gi(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = nl(), Jn(e, Fe), D !== null && (D.f & de) !== 0 && (D.f & (Oe | nt)) === 0 && (De === null ? Qi([e]) : De.push(e))), t;
}
function Jn(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var l = r.length, i = 0; i < l; i++) {
      var a = r[i], s = a.f;
      (s & Fe) === 0 && (Ie(a, t), (s & (de | ge)) !== 0 && ((s & pe) !== 0 ? Jn(
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
function He(e) {
  var t = pe | Fe, r = S !== null && (S.f & pe) !== 0 ? (
    /** @type {Derived} */
    S
  ) : null;
  return D === null || r !== null && (r.f & ge) !== 0 ? t |= ge : D.f |= jn, {
    ctx: ne,
    deps: null,
    effects: null,
    equals: Zn,
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
function Wi(e) {
  const t = /* @__PURE__ */ He(e);
  return t.equals = $r, t;
}
function Kn(e) {
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
function Zi(e) {
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
function zi(e) {
  var t, r = D;
  Ze(Zi(e));
  try {
    Kn(e), t = il(e);
  } finally {
    Ze(r);
  }
  return t;
}
function Xn(e) {
  var t = zi(e), r = (Ye || (e.f & ge) !== 0) && e.deps !== null ? mt : de;
  Ie(e, r), e.equals(t) || (e.v = t, e.wv = nl());
}
function rr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let O = !1;
function ht(e) {
  O = e;
}
let P;
function Ge(e) {
  if (e === null)
    throw rr(), vt;
  return P = e;
}
function wt() {
  return Ge(
    /** @type {TemplateNode} */
    /* @__PURE__ */ ze(P)
  );
}
function G(e) {
  if (O) {
    if (/* @__PURE__ */ ze(P) !== null)
      throw rr(), vt;
    P = e;
  }
}
function Ji() {
  for (var e = 0, t = P; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === Mn) {
        if (e === 0) return t;
        e -= 1;
      } else (r === Ar || r === Vn) && (e += 1);
    }
    var l = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ze(t)
    );
    t.remove(), t = l;
  }
}
function V(e, t = null, r) {
  if (typeof e != "object" || e === null || $t in e)
    return e;
  const l = Hn(e);
  if (l !== Ii && l !== $i)
    return e;
  var i = /* @__PURE__ */ new Map(), a = Bn(e), s = ke(0);
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
        (!("value" in _) || _.configurable === !1 || _.enumerable === !1 || _.writable === !1) && Ui();
        var v = i.get(d);
        return v === void 0 ? (v = ke(_.value), i.set(d, v)) : b(v, V(_.value, c)), !0;
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
            Number.isInteger(h) && h < v.v && b(v, h);
          }
          b(_, se), kn(s);
        }
        return !0;
      },
      get(f, d, _) {
        var k;
        if (d === $t)
          return e;
        var v = i.get(d), h = d in f;
        if (v === void 0 && (!h || (k = tt(f, d)) != null && k.writable) && (v = ke(V(h ? f[d] : se, c)), i.set(d, v)), v !== void 0) {
          var p = o(v);
          return p === se ? void 0 : p;
        }
        return Reflect.get(f, d, _);
      },
      getOwnPropertyDescriptor(f, d) {
        var _ = Reflect.getOwnPropertyDescriptor(f, d);
        if (_ && "value" in _) {
          var v = i.get(d);
          v && (_.value = o(v));
        } else if (_ === void 0) {
          var h = i.get(d), p = h == null ? void 0 : h.v;
          if (h !== void 0 && p !== se)
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
        var _ = i.get(d), v = _ !== void 0 && _.v !== se || Reflect.has(f, d);
        if (_ !== void 0 || D !== null && (!v || (p = tt(f, d)) != null && p.writable)) {
          _ === void 0 && (_ = ke(v ? V(f[d], c) : se), i.set(d, _));
          var h = o(_);
          if (h === se)
            return !1;
        }
        return v;
      },
      set(f, d, _, v) {
        var J;
        var h = i.get(d), p = d in f;
        if (a && d === "length")
          for (var k = _; k < /** @type {Source<number>} */
          h.v; k += 1) {
            var T = i.get(k + "");
            T !== void 0 ? b(T, se) : k in f && (T = ke(se), i.set(k + "", T));
          }
        h === void 0 ? (!p || (J = tt(f, d)) != null && J.writable) && (h = ke(void 0), b(h, V(_, c)), i.set(d, h)) : (p = h.v !== se, b(h, V(_, c)));
        var F = Reflect.getOwnPropertyDescriptor(f, d);
        if (F != null && F.set && F.set.call(v, _), !p) {
          if (a && typeof d == "string") {
            var ue = (
              /** @type {Source<number>} */
              i.get("length")
            ), le = Number(d);
            Number.isInteger(le) && le >= ue.v && b(ue, le + 1);
          }
          kn(s);
        }
        return !0;
      },
      ownKeys(f) {
        o(s);
        var d = Reflect.ownKeys(f).filter((h) => {
          var p = i.get(h);
          return p === void 0 || p.v !== se;
        });
        for (var [_, v] of i)
          v.v !== se && !(_ in f) && d.push(_);
        return d;
      },
      setPrototypeOf() {
        ji();
      }
    }
  );
}
function kn(e, t = 1) {
  b(e, e.v + t);
}
var An, Qn, el, tl;
function yr() {
  if (An === void 0) {
    An = window, Qn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    el = tt(t, "firstChild").get, tl = tt(t, "nextSibling").get, e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function nr(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Le(e) {
  return el.call(e);
}
// @__NO_SIDE_EFFECTS__
function ze(e) {
  return tl.call(e);
}
function W(e, t) {
  if (!O)
    return /* @__PURE__ */ Le(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Le(P)
  );
  return r === null && (r = P.appendChild(nr())), Ge(r), r;
}
function Rt(e, t) {
  if (!O) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Le(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ ze(r) : r;
  }
  return P;
}
function Z(e, t = 1, r = !1) {
  let l = O ? P : e;
  for (var i; t--; )
    i = l, l = /** @type {TemplateNode} */
    /* @__PURE__ */ ze(l);
  if (!O)
    return l;
  var a = l == null ? void 0 : l.nodeType;
  if (r && a !== 3) {
    var s = nr();
    return l === null ? i == null || i.after(s) : l.before(s), Ge(s), s;
  }
  return Ge(l), /** @type {TemplateNode} */
  l;
}
function Ki(e) {
  e.textContent = "";
}
let qt = !1, Zt = !1, zt = null, rt = !1, Sr = !1;
function Rn(e) {
  Sr = e;
}
let St = [];
let S = null, me = !1;
function We(e) {
  S = e;
}
let D = null;
function Ze(e) {
  D = e;
}
let Ae = null;
function Xi(e) {
  Ae = e;
}
let re = null, fe = 0, De = null;
function Qi(e) {
  De = e;
}
let rl = 1, Jt = 0, Ye = !1;
function nl() {
  return ++rl;
}
function Tt(e) {
  var v;
  var t = e.f;
  if ((t & Fe) !== 0)
    return !0;
  if ((t & mt) !== 0) {
    var r = e.deps, l = (t & ge) !== 0;
    if (r !== null) {
      var i, a, s = (t & Yt) !== 0, c = l && D !== null && !Ye, f = r.length;
      if (s || c) {
        var d = (
          /** @type {Derived} */
          e
        ), _ = d.parent;
        for (i = 0; i < f; i++)
          a = r[i], (s || !((v = a == null ? void 0 : a.reactions) != null && v.includes(d))) && (a.reactions ?? (a.reactions = [])).push(d);
        s && (d.f ^= Yt), c && _ !== null && (_.f & ge) === 0 && (d.f ^= ge);
      }
      for (i = 0; i < f; i++)
        if (a = r[i], Tt(
          /** @type {Derived} */
          a
        ) && Xn(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!l || D !== null && !Ye) && Ie(e, de);
  }
  return !1;
}
function ea(e, t) {
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
function ta(e) {
  return (e.f & er) === 0 && (e.parent === null || (e.parent.f & Ht) === 0);
}
function lr(e, t, r, l) {
  if (qt) {
    if (r === null && (qt = !1), ta(t))
      throw e;
    return;
  }
  r !== null && (qt = !0);
  {
    ea(e, t);
    return;
  }
}
function ll(e, t, r = !0) {
  var l = e.reactions;
  if (l !== null)
    for (var i = 0; i < l.length; i++) {
      var a = l[i];
      (a.f & pe) !== 0 ? ll(
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
function il(e) {
  var p;
  var t = re, r = fe, l = De, i = S, a = Ye, s = Ae, c = ne, f = me, d = e.f;
  re = /** @type {null | Value[]} */
  null, fe = 0, De = null, Ye = (d & ge) !== 0 && (me || !rt || S === null), S = (d & (Oe | nt)) === 0 ? e : null, Ae = null, $n(e.ctx), me = !1, Jt++;
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
      if (!Ye)
        for (h = fe; h < v.length; h++)
          ((p = v[h]).reactions ?? (p.reactions = [])).push(e);
    } else v !== null && fe < v.length && (Kt(e, fe), v.length = fe);
    if (gl() && De !== null && !me && v !== null && (e.f & (pe | mt | Fe)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      De.length; h++)
        ll(
          De[h],
          /** @type {Effect} */
          e
        );
    return i !== null && Jt++, _;
  } finally {
    re = t, fe = r, De = l, S = i, Ye = a, Ae = s, $n(c), me = f;
  }
}
function ra(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var l = ki.call(r, e);
    if (l !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[l] = r[i], r.pop());
    }
  }
  r === null && (t.f & pe) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (re === null || !re.includes(t)) && (Ie(t, mt), (t.f & (ge | Yt)) === 0 && (t.f ^= Yt), Kn(
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
      ra(e, r[l]);
}
function Nr(e) {
  var t = e.f;
  if ((t & er) === 0) {
    Ie(e, de);
    var r = D, l = ne, i = rt;
    D = e, rt = !0;
    try {
      (t & Rr) !== 0 ? da(e) : sl(e), ol(e);
      var a = il(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = rl;
      var s = e.deps, c;
      En && Hi && e.f & Fe;
    } catch (f) {
      lr(f, e, r, l || e.ctx);
    } finally {
      rt = i, D = r;
    }
  }
}
function na() {
  try {
    Fi();
  } catch (e) {
    if (zt !== null)
      lr(e, zt, null);
    else
      throw e;
  }
}
function al() {
  var e = rt;
  try {
    var t = 0;
    for (rt = !0; St.length > 0; ) {
      t++ > 1e3 && na();
      var r = St, l = r.length;
      St = [];
      for (var i = 0; i < l; i++) {
        var a = ia(r[i]);
        la(a);
      }
    }
  } finally {
    Zt = !1, rt = e, zt = null;
  }
}
function la(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var l = e[r];
      if ((l.f & (er | gt)) === 0)
        try {
          Tt(l) && (Nr(l), l.deps === null && l.first === null && l.nodes_start === null && (l.teardown === null ? ul(l) : l.fn = null));
        } catch (i) {
          lr(i, l, null, l.ctx);
        }
    }
}
function ir(e) {
  Zt || (Zt = !0, queueMicrotask(al));
  for (var t = zt = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (nt | Oe)) !== 0) {
      if ((r & de) === 0) return;
      t.f ^= de;
    }
  }
  St.push(t);
}
function ia(e) {
  for (var t = [], r = e; r !== null; ) {
    var l = r.f, i = (l & (Oe | nt)) !== 0, a = i && (l & de) !== 0;
    if (!a && (l & gt) === 0) {
      if ((l & Un) !== 0)
        t.push(r);
      else if (i)
        r.f ^= de;
      else {
        var s = S;
        try {
          S = r, Tt(r) && Nr(r);
        } catch (d) {
          lr(d, r, null, r.ctx);
        } finally {
          S = s;
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
  for (Cn(); St.length > 0; )
    Zt = !0, al(), Cn();
  return (
    /** @type {T} */
    t
  );
}
async function pr() {
  await Promise.resolve(), C();
}
function o(e) {
  var t = e.f, r = (t & pe) !== 0;
  if (S !== null && !me) {
    Ae !== null && Ae.includes(e) && qi();
    var l = S.deps;
    e.rv < Jt && (e.rv = Jt, re === null && l !== null && l[fe] === e ? fe++ : re === null ? re = [e] : (!Ye || !re.includes(e)) && re.push(e));
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
  e, Tt(i) && Xn(i)), e.v;
}
function _t(e) {
  var t = me;
  try {
    return me = !0, e();
  } finally {
    me = t;
  }
}
const aa = -7169;
function Ie(e, t) {
  e.f = e.f & aa | t;
}
function oa(e) {
  D === null && S === null && Oi(), S !== null && (S.f & ge) !== 0 && D === null && Pi(), Sr && Li();
}
function sa(e, t) {
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
      Nr(a), a.f |= xi;
    } catch (f) {
      throw Pe(a), f;
    }
  else t !== null && ir(a);
  var s = r && a.deps === null && a.first === null && a.nodes_start === null && a.teardown === null && (a.f & (jn | Ht)) === 0;
  if (!s && l && (i !== null && sa(a, i), S !== null && (S.f & pe) !== 0)) {
    var c = (
      /** @type {Derived} */
      S
    );
    (c.effects ?? (c.effects = [])).push(a);
  }
  return a;
}
function ua(e) {
  const t = lt(Qt, null, !1);
  return Ie(t, de), t.teardown = e, t;
}
function xr(e) {
  oa();
  var t = D !== null && (D.f & Oe) !== 0 && ne !== null && !ne.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      ne
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: D,
      reaction: S
    });
  } else {
    var l = Dr(e);
    return l;
  }
}
function ca(e) {
  const t = lt(nt, e, !0);
  return () => {
    Pe(t);
  };
}
function fa(e) {
  const t = lt(nt, e, !0);
  return (r = {}) => new Promise((l) => {
    r.outro ? Er(t, () => {
      Pe(t), l(void 0);
    }) : (Pe(t), l(void 0));
  });
}
function Dr(e) {
  return lt(Un, e, !1);
}
function Tr(e) {
  return lt(Qt, e, !0);
}
function Ne(e, t = [], r = He) {
  const l = t.map(r);
  return Lr(() => e(...l.map(o)));
}
function Lr(e, t = 0) {
  return lt(Qt | Rr | t, e, !0);
}
function Xt(e, t = !0) {
  return lt(Qt | Oe, e, !0, t);
}
function ol(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Sr, l = S;
    Rn(!0), We(null);
    try {
      t.call(null);
    } finally {
      Rn(r), We(l);
    }
  }
}
function sl(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var l = r.next;
    (r.f & nt) !== 0 ? r.parent = null : Pe(r, t), r = l;
  }
}
function da(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Oe) === 0 && Pe(t), t = r;
  }
}
function Pe(e, t = !0) {
  var r = !1;
  if ((t || (e.f & Ei) !== 0) && e.nodes_start !== null) {
    for (var l = e.nodes_start, i = e.nodes_end; l !== null; ) {
      var a = l === i ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ze(l)
      );
      l.remove(), l = a;
    }
    r = !0;
  }
  sl(e, t && !r), Kt(e, 0), Ie(e, er);
  var s = e.transitions;
  if (s !== null)
    for (const f of s)
      f.stop();
  ol(e);
  var c = e.parent;
  c !== null && c.first !== null && ul(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function ul(e) {
  var t = e.parent, r = e.prev, l = e.next;
  r !== null && (r.next = l), l !== null && (l.prev = r), t !== null && (t.first === e && (t.first = l), t.last === e && (t.last = r));
}
function Er(e, t) {
  var r = [];
  cl(e, r, !0), ha(r, () => {
    Pe(e), t && t();
  });
}
function ha(e, t) {
  var r = e.length;
  if (r > 0) {
    var l = () => --r || t();
    for (var i of e)
      i.out(l);
  } else
    t();
}
function cl(e, t, r) {
  if ((e.f & gt) === 0) {
    if (e.f ^= gt, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || r) && t.push(s);
    for (var l = e.first; l !== null; ) {
      var i = l.next, a = (l.f & Ir) !== 0 || (l.f & Oe) !== 0;
      cl(l, t, a ? r : !1), l = i;
    }
  }
}
function In(e) {
  fl(e, !0);
}
function fl(e, t) {
  if ((e.f & gt) !== 0) {
    e.f ^= gt, (e.f & de) === 0 && (e.f ^= de), Tt(e) && (Ie(e, Fe), ir(e));
    for (var r = e.first; r !== null; ) {
      var l = r.next, i = (r.f & Ir) !== 0 || (r.f & Oe) !== 0;
      fl(r, i ? t : !1), r = l;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
function dl(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let ne = null;
function $n(e) {
  ne = e;
}
function hl(e, t = !1, r) {
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
function vl(e) {
  const t = ne;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var r = D, l = S;
      t.e = null;
      try {
        for (var i = 0; i < s.length; i++) {
          var a = s[i];
          Ze(a.effect), We(a.reaction), Dr(a.fn);
        }
      } finally {
        Ze(r), We(l);
      }
    }
    ne = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function gl() {
  return !0;
}
const va = ["touchstart", "touchmove"];
function ga(e) {
  return va.includes(e);
}
function wa(e, t) {
  if (t) {
    const r = document.body;
    e.autofocus = !0, tr(() => {
      document.activeElement === r && e.focus();
    });
  }
}
let Sn = !1;
function wl() {
  Sn || (Sn = !0, document.addEventListener(
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
function _l(e) {
  var t = S, r = D;
  We(null), Ze(null);
  try {
    return e();
  } finally {
    We(t), Ze(r);
  }
}
function _a(e, t, r, l = r) {
  e.addEventListener(t, () => _l(r));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), l(!0);
  } : e.__on_r = () => l(!0), wl();
}
const ml = /* @__PURE__ */ new Set(), Cr = /* @__PURE__ */ new Set();
function ma(e, t, r, l = {}) {
  function i(a) {
    if (l.capture || It.call(t, a), !a.cancelBubble)
      return _l(() => r == null ? void 0 : r.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? tr(() => {
    t.addEventListener(e, i, l);
  }) : t.addEventListener(e, i, l), i;
}
function Be(e, t, r, l, i) {
  var a = { capture: l, passive: i }, s = ma(e, t, r, a);
  (t === document.body || t === window || t === document) && ua(() => {
    t.removeEventListener(e, s, a);
  });
}
function pa(e) {
  for (var t = 0; t < e.length; t++)
    ml.add(e[t]);
  for (var r of Cr)
    r(e);
}
function It(e) {
  var le;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), l = e.type, i = ((le = e.composedPath) == null ? void 0 : le.call(e)) || [], a = (
    /** @type {null | Element} */
    i[0] || e.target
  ), s = 0, c = e.__root;
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
    f <= d && (s = f);
  }
  if (a = /** @type {Element} */
  i[s] || e.target, a !== t) {
    Wt(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var _ = S, v = D;
    We(null), Ze(null);
    try {
      for (var h, p = []; a !== null; ) {
        var k = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var T = a["__" + l];
          if (T != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (Bn(T)) {
              var [F, ...ue] = T;
              F.apply(a, [e, ...ue]);
            } else
              T.call(a, e);
        } catch (J) {
          h ? p.push(J) : h = J;
        }
        if (e.cancelBubble || k === t || k === null)
          break;
        a = k;
      }
      if (h) {
        for (let J of p)
          queueMicrotask(() => {
            throw J;
          });
        throw h;
      }
    } finally {
      e.__root = t, delete e.currentTarget, We(_), Ze(v);
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
function be(e, t) {
  var r = (t & pi) !== 0, l = (t & bi) !== 0, i, a = !e.startsWith("<!>");
  return () => {
    if (O)
      return Re(P, null), P;
    i === void 0 && (i = Pr(a ? e : "<!>" + e), r || (i = /** @type {Node} */
    /* @__PURE__ */ Le(i)));
    var s = (
      /** @type {TemplateNode} */
      l || Qn ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Le(s)
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
  var l = !e.startsWith("<!>"), i = `<${r}>${l ? e : "<!>" + e}</${r}>`, a;
  return () => {
    if (O)
      return Re(P, null), P;
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        Pr(i)
      ), c = (
        /** @type {Element} */
        /* @__PURE__ */ Le(s)
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
    D.nodes_end = P, wt();
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
function pl(e, t) {
  return bl(e, t);
}
function ya(e, t) {
  yr(), t.intro = t.intro ?? !1;
  const r = t.target, l = O, i = P;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Le(r)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== Ar); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ ze(a);
    if (!a)
      throw vt;
    ht(!0), Ge(
      /** @type {Comment} */
      a
    ), wt();
    const s = bl(e, { ...t, anchor: a });
    if (P === null || P.nodeType !== 8 || /** @type {Comment} */
    P.data !== Mn)
      throw rr(), vt;
    return ht(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === vt)
      return t.recover === !1 && Vi(), yr(), Ki(r), ht(!1), pl(e, t);
    throw s;
  } finally {
    ht(l), Ge(i);
  }
}
const dt = /* @__PURE__ */ new Map();
function bl(e, { target: t, anchor: r, props: l = {}, events: i, context: a, intro: s = !0 }) {
  yr();
  var c = /* @__PURE__ */ new Set(), f = (v) => {
    for (var h = 0; h < v.length; h++) {
      var p = v[h];
      if (!c.has(p)) {
        c.add(p);
        var k = ga(p);
        t.addEventListener(p, It, { passive: k });
        var T = dt.get(p);
        T === void 0 ? (document.addEventListener(p, It, { passive: k }), dt.set(p, 1)) : dt.set(p, T + 1);
      }
    }
  };
  f(Ai(ml)), Cr.add(f);
  var d = void 0, _ = fa(() => {
    var v = r ?? t.appendChild(nr());
    return Xt(() => {
      if (a) {
        hl({});
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
      ), d = e(v, l) || {}, O && (D.nodes_end = P), a && vl();
    }), () => {
      var k;
      for (var h of c) {
        t.removeEventListener(h, It);
        var p = (
          /** @type {number} */
          dt.get(h)
        );
        --p === 0 ? (document.removeEventListener(h, It), dt.delete(h)) : dt.set(h, p);
      }
      Cr.delete(f), v !== r && ((k = v.parentNode) == null || k.removeChild(v));
    };
  });
  return kr.set(d, _), d;
}
let kr = /* @__PURE__ */ new WeakMap();
function xa(e, t) {
  const r = kr.get(e);
  return r ? (kr.delete(e), r(t)) : Promise.resolve();
}
function z(e, t, [r, l] = [0, 0]) {
  O && r === 0 && wt();
  var i = e, a = null, s = null, c = se, f = r > 0 ? Ir : 0, d = !1;
  const _ = (h, p = !0) => {
    d = !0, v(p, h);
  }, v = (h, p) => {
    if (c === (c = h)) return;
    let k = !1;
    if (O && l !== -1) {
      if (r === 0) {
        const F = (
          /** @type {Comment} */
          i.data
        );
        F === Ar ? l = 0 : F === Vn ? l = 1 / 0 : (l = parseInt(F.substring(1)), l !== l && (l = c ? 1 / 0 : -1));
      }
      const T = l > r;
      !!c === T && (i = Ji(), Ge(i), ht(!1), k = !0, l = -1);
    }
    c ? (a ? In(a) : p && (a = Xt(() => p(i))), s && Er(s, () => {
      s = null;
    })) : (s ? In(s) : p && (s = Xt(() => p(i, [r + 1, l]))), a && Er(a, () => {
      a = null;
    })), k && ht(!0);
  };
  Lr(() => {
    d = !1, t(_), d || v(null, null);
  }, f), O && (i = P);
}
function et(e, t, r, l, i) {
  var a = e, s = "", c;
  Lr(() => {
    if (s === (s = t() ?? "")) {
      O && wt();
      return;
    }
    c !== void 0 && (Pe(c), c = void 0), s !== "" && (c = Xt(() => {
      if (O) {
        P.data;
        for (var f = wt(), d = f; f !== null && (f.nodeType !== 8 || /** @type {Comment} */
        f.data !== ""); )
          d = f, f = /** @type {TemplateNode} */
          /* @__PURE__ */ ze(f);
        if (f === null)
          throw rr(), vt;
        Re(P, d), a = Ge(f);
        return;
      }
      var _ = s + "", v = Pr(_);
      Re(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Le(v),
        /** @type {TemplateNode} */
        v.lastChild
      ), a.before(v);
    }));
  });
}
function Ea(e, t, r, l, i) {
  var c;
  O && wt();
  var a = (c = t.$$slots) == null ? void 0 : c[r], s = !1;
  a === !0 && (a = t.children, s = !0), a === void 0 || a(e, s ? () => l : l);
}
function Ca(e, t) {
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
const Nn = [...` 	
\r\f \v\uFEFF`];
function ka(e, t, r) {
  var l = "" + e;
  if (r) {
    for (var i in r)
      if (r[i])
        l = l ? l + " " + i : i;
      else if (l.length)
        for (var a = i.length, s = 0; (s = l.indexOf(i, s)) >= 0; ) {
          var c = s + a;
          (s === 0 || Nn.includes(l[s - 1])) && (c === l.length || Nn.includes(l[c])) ? l = (s === 0 ? "" : l.substring(0, s)) + l.substring(c + 1) : s = c;
        }
  }
  return l === "" ? null : l;
}
function Aa(e, t, r, l, i, a) {
  var s = e.__className;
  if (O || s !== r) {
    var c = ka(r, l, a);
    (!O || c !== e.getAttribute("class")) && (c == null ? e.removeAttribute("class") : e.className = c), e.__className = r;
  } else if (a && i !== a)
    for (var f in a) {
      var d = !!a[f];
      (i == null || d !== !!i[f]) && e.classList.toggle(f, d);
    }
  return a;
}
const Ra = Symbol("is custom element"), Ia = Symbol("is html");
function Dn(e) {
  if (O) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var l = e.value;
          N(e, "value", null), e.value = l;
        }
        if (e.hasAttribute("checked")) {
          var i = e.checked;
          N(e, "checked", null), e.checked = i;
        }
      }
    };
    e.__on_r = r, Di(r), wl();
  }
}
function $a(e, t) {
  var r = yl(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function N(e, t, r, l) {
  var i = yl(e);
  O && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || i[t] !== (i[t] = r) && (t === "loading" && (e[Ci] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Sa(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function yl(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Ra]: e.nodeName.includes("-"),
      [Ia]: e.namespaceURI === yi
    })
  );
}
var Tn = /* @__PURE__ */ new Map();
function Sa(e) {
  var t = Tn.get(e.nodeName);
  if (t) return t;
  Tn.set(e.nodeName, t = []);
  for (var r, l = e, i = Element.prototype; i !== l; ) {
    r = Ri(l);
    for (var a in r)
      r[a].set && t.push(a);
    l = Hn(l);
  }
  return t;
}
function Na(e, t, r = t) {
  _a(e, "change", (l) => {
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
function Ln(e, t) {
  return e === t || (e == null ? void 0 : e[$t]) === t;
}
function Ut(e = {}, t, r, l) {
  return Dr(() => {
    var i, a;
    return Tr(() => {
      i = a, a = [], _t(() => {
        e !== r(...a) && (t(e, ...a), i && Ln(r(...i), e) && t(null, ...i));
      });
    }), () => {
      tr(() => {
        a && Ln(r(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function xl(e) {
  ne === null && dl(), xr(() => {
    const t = _t(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Da(e) {
  ne === null && dl(), xl(() => () => _t(e));
}
let jt = !1;
function Ta(e) {
  var t = jt;
  try {
    return jt = !1, [e(), jt];
  } finally {
    jt = t;
  }
}
function R(e, t, r, l) {
  var ye;
  var i = (r & gi) !== 0, a = !0, s = (r & _i) !== 0, c = (r & mi) !== 0, f = !1, d;
  s ? [d, f] = Ta(() => (
    /** @type {V} */
    e[t]
  )) : d = /** @type {V} */
  e[t];
  var _ = $t in e || qn in e, v = s && (((ye = tt(e, t)) == null ? void 0 : ye.set) ?? (_ && t in e && ((j) => e[t] = j))) || void 0, h = (
    /** @type {V} */
    l
  ), p = !0, k = !1, T = () => (k = !0, p && (p = !1, c ? h = _t(
    /** @type {() => V} */
    l
  ) : h = /** @type {V} */
  l), h);
  d === void 0 && l !== void 0 && (v && a && Mi(), d = T(), v && v(d));
  var F;
  if (F = () => {
    var j = (
      /** @type {V} */
      e[t]
    );
    return j === void 0 ? T() : (p = !0, k = !1, j);
  }, (r & wi) === 0)
    return F;
  if (v) {
    var ue = e.$$legacy;
    return function(j, Q) {
      return arguments.length > 0 ? ((!Q || ue || f) && v(Q ? F() : j), j) : F();
    };
  }
  var le = !1, J = /* @__PURE__ */ zn(d), ce = /* @__PURE__ */ He(() => {
    var j = F(), Q = o(J);
    return le ? (le = !1, Q) : J.v = j;
  });
  return i || (ce.equals = $r), function(j, Q) {
    if (arguments.length > 0) {
      const Ve = Q ? o(ce) : s ? V(j) : j;
      return ce.equals(Ve) || (le = !0, b(J, Ve), k && h !== void 0 && (h = Ve), _t(() => o(ce))), j;
    }
    return o(ce);
  };
}
function La(e) {
  return new Pa(e);
}
var Te, ve;
class Pa {
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
    var r = /* @__PURE__ */ new Map(), l = (s, c) => {
      var f = /* @__PURE__ */ zn(c);
      return r.set(s, f), f;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, c) {
          return o(r.get(c) ?? l(c, Reflect.get(s, c)));
        },
        has(s, c) {
          return c === qn ? !0 : (o(r.get(c) ?? l(c, Reflect.get(s, c))), Reflect.has(s, c));
        },
        set(s, c, f) {
          return b(r.get(c) ?? l(c, f), f), Reflect.set(s, c, f);
        }
      }
    );
    mr(this, ve, (t.hydrate ? ya : pl)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((a = t == null ? void 0 : t.props) != null && a.$$host) || t.sync === !1) && C(), mr(this, Te, i.$$events);
    for (const s of Object.keys(ae(this, ve)))
      s === "$set" || s === "$destroy" || s === "$on" || Wt(this, s, {
        get() {
          return ae(this, ve)[s];
        },
        /** @param {any} value */
        set(c) {
          ae(this, ve)[s] = c;
        },
        enumerable: !0
      });
    ae(this, ve).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(i, s);
    }, ae(this, ve).$destroy = () => {
      xa(ae(this, ve));
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
let El;
typeof HTMLElement == "function" && (El = class extends HTMLElement {
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
          const s = document.createElement("slot");
          i !== "default" && (s.name = i), U(a, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, l = Oa(this);
      for (const i of this.$$s)
        i in l && (i === "default" && !this.$$d.children ? (this.$$d.children = t(i), r.default = !0) : r[i] = t(i));
      for (const i of this.attributes) {
        const a = this.$$g_p(i.name);
        a in this.$$d || (this.$$d[a] = Bt(a, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = La({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = ca(() => {
        Tr(() => {
          var i;
          this.$$r = !0;
          for (const a of Gt(this.$$c)) {
            if (!((i = this.$$p_d[a]) != null && i.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const s = Bt(
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
      for (const i in this.$$l)
        for (const a of this.$$l[i]) {
          const s = this.$$c.$on(i, a);
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
function Oa(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function Fa(e, t, r, l, i, a) {
  let s = class extends El {
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
    Wt(s.prototype, c, {
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
    Wt(s.prototype, c, {
      get() {
        var f;
        return (f = this.$$c) == null ? void 0 : f[c];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
const Cl = new TextEncoder();
function Va(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function Ma(e, t = "SHA-256", r = 1e5) {
  const l = Date.now().toString(16);
  e || (e = Math.round(Math.random() * r));
  const i = await kl(l, e, t);
  return {
    algorithm: t,
    challenge: i,
    salt: l,
    signature: ""
  };
}
async function kl(e, t, r) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return Va(
    await crypto.subtle.digest(
      r.toUpperCase(),
      Cl.encode(e + t)
    )
  );
}
function Ua(e, t, r = "SHA-256", l = 1e6, i = 0) {
  const a = new AbortController(), s = Date.now();
  return {
    promise: (async () => {
      for (let f = i; f <= l; f += 1) {
        if (a.signal.aborted)
          return null;
        if (await kl(t, f, r) === e)
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
function Pn() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function ja(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let l = 0; l < t.length; l++)
    r[l] = t.charCodeAt(l);
  return r;
}
function qa(e, t = 12) {
  const r = new Uint8Array(t);
  for (let l = 0; l < t; l++)
    r[l] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function Ba(e, t = "", r = 1e6, l = 0) {
  const i = "AES-GCM", a = new AbortController(), s = Date.now(), c = async () => {
    for (let _ = l; _ <= r; _ += 1) {
      if (a.signal.aborted || !f || !d)
        return null;
      try {
        const v = await crypto.subtle.decrypt(
          {
            name: i,
            iv: qa(_)
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
    d = ja(e);
    const _ = await crypto.subtle.digest(
      "SHA-256",
      Cl.encode(t)
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
const Ha = {
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
globalThis.altchaI18n.register("en", Ha);
const br = (e, t) => {
  let r = /* @__PURE__ */ Wi(() => Si(t == null ? void 0 : t(), 24));
  var l = Za();
  Ne(() => {
    N(l, "width", o(r)), N(l, "height", o(r));
  }), U(e, l);
};
function Ya(e, t) {
  e.code === "Space" && (e.preventDefault(), e.stopImmediatePropagation(), t());
}
function Ga(e, t) {
  e.preventDefault(), t();
}
function Wa(e, t, r, l, i, a, s, c) {
  var f;
  [
    x.UNVERIFIED,
    x.ERROR,
    x.EXPIRED,
    x.CODE
  ].includes(o(t)) ? r() !== !1 && ((f = o(l)) == null ? void 0 : f.reportValidity()) === !1 ? b(i, !1) : a() ? s() : c() : b(i, !0);
}
var Za = /* @__PURE__ */ ar('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="svelte-74x4nw"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25" class="svelte-74x4nw"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor" class="altcha-spinner svelte-74x4nw"></path></svg>'), za = /* @__PURE__ */ be('<input type="hidden" class="svelte-74x4nw">'), Ja = /* @__PURE__ */ be('<div class="svelte-74x4nw"><a target="_blank" class="altcha-logo svelte-74x4nw" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-74x4nw"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor" class="svelte-74x4nw"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor" class="svelte-74x4nw"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor" class="svelte-74x4nw"></path></svg></a></div>'), Ka = /* @__PURE__ */ ar('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-74x4nw"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z" class="svelte-74x4nw"></path></svg>'), Xa = /* @__PURE__ */ ar('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-74x4nw"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z" class="svelte-74x4nw"></path></svg>'), Qa = /* @__PURE__ */ ar('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-74x4nw"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z" class="svelte-74x4nw"></path></svg>'), eo = /* @__PURE__ */ be('<button type="button" class="altcha-code-challenge-audio svelte-74x4nw"><!></button>'), to = /* @__PURE__ */ be('<audio hidden autoplay class="svelte-74x4nw"><source class="svelte-74x4nw"></audio>'), ro = /* @__PURE__ */ be('<div class="altcha-code-challenge svelte-74x4nw" role="dialog"><div class="altcha-code-challenge-arrow svelte-74x4nw"></div> <form data-code-challenge-form="1" class="svelte-74x4nw"><img class="altcha-code-challenge-image svelte-74x4nw" alt=""> <input type="text" autocomplete="off" name="code" class="altcha-code-challenge-input svelte-74x4nw" required> <div class="altcha-code-challenge-buttons svelte-74x4nw"><div class="altcha-code-challenge-buttons-left svelte-74x4nw"><!> <button type="button" class="altcha-code-challenge-reload svelte-74x4nw"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-74x4nw"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z" class="svelte-74x4nw"></path></svg></button></div> <button type="submit" class="altcha-code-challenge-verify svelte-74x4nw"><!> </button></div> <!></form></div>'), no = /* @__PURE__ */ be('<div class="svelte-74x4nw"><!></div>'), lo = /* @__PURE__ */ be('<div class="svelte-74x4nw"><!></div>'), io = /* @__PURE__ */ be('<div class="altcha-error svelte-74x4nw"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="svelte-74x4nw"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" class="svelte-74x4nw"></path></svg> <!></div>'), ao = /* @__PURE__ */ be('<div class="altcha-footer svelte-74x4nw"><div class="svelte-74x4nw"><!></div></div>'), oo = /* @__PURE__ */ be('<div class="altcha-anchor-arrow svelte-74x4nw"></div>'), so = /* @__PURE__ */ be('<!> <div class="altcha svelte-74x4nw"><div class="altcha-main svelte-74x4nw"><div><!> <input type="checkbox" class="svelte-74x4nw"></div> <label class="altcha-label svelte-74x4nw"><!></label> <!> <!> <!></div> <!> <!> <!></div>', 1);
const uo = {
  hash: "svelte-74x4nw",
  code: `.altcha.svelte-74x4nw {background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);position:relative;}.altcha.svelte-74x4nw:focus-within {border-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating].svelte-74x4nw {background:var(--altcha-color-base, white);display:none;filter:drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2));left:-100%;position:fixed;top:-100%;width:var(--altcha-max-width, 260px);z-index:999999;}.altcha[data-floating=top].svelte-74x4nw .altcha-anchor-arrow:where(.svelte-74x4nw) {border-bottom-color:transparent;border-top-color:var(--altcha-color-border, #a0a0a0);bottom:-12px;top:auto;}.altcha[data-floating=bottom].svelte-74x4nw:focus-within::after {border-bottom-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating=top].svelte-74x4nw:focus-within::after {border-top-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating].svelte-74x4nw:not([data-state=unverified]) {display:block;}.altcha-anchor-arrow.svelte-74x4nw {border:6px solid transparent;border-bottom-color:var(--altcha-color-border, #a0a0a0);content:"";height:0;left:12px;position:absolute;top:-12px;width:0;}.altcha-main.svelte-74x4nw {align-items:center;display:flex;gap:0.4rem;padding:0.7rem;position:relative;}.altcha-code-challenge.svelte-74x4nw {background:var(--altcha-color-base, white);border:1px solid var(--altcha-color-border-focus, currentColor);border-radius:var(--altcha-border-radius, 3px);filter:drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2));padding:0.5rem;position:absolute;top:2.5rem;z-index:9999999;}.altcha-code-challenge.svelte-74x4nw > form:where(.svelte-74x4nw) {display:flex;flex-direction:column;gap:0.5rem;}.altcha-code-challenge-input.svelte-74x4nw {border:1px solid currentColor;border-radius:3px;box-sizing:border-box;outline:none;font-size:16px;padding:0.35rem;width:220px;}.altcha-code-challenge-input.svelte-74x4nw:focus {outline:2px solid color-mix(in srgb, var(--altcha-color-active, #1D1DC9) 20%, transparent);}.altcha-code-challenge-input.svelte-74x4nw:disabled {opacity:0.7;}.altcha-code-challenge-image.svelte-74x4nw {background-color:white;border:1px solid currentColor;border-radius:3px;box-sizing:border-box;object-fit:contain;height:50px;width:220px;}.altcha-code-challenge-audio.svelte-74x4nw,
.altcha-code-challenge-reload.svelte-74x4nw {background:color-mix(in srgb, var(--altcha-color-text, currentColor) 10%, transparent);border:0;border-radius:3px;color:var(--altcha-color-text, currentColor);cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0.35rem;}.altcha-code-challenge-audio.svelte-74x4nw:disabled,
.altcha-code-challenge-reload.svelte-74x4nw:disabled {opacity:0.7;pointer-events:none;}.altcha-code-challenge-audio.svelte-74x4nw > :where(.svelte-74x4nw),
.altcha-code-challenge-reload.svelte-74x4nw > :where(.svelte-74x4nw) {height:20px;width:20px;}.altcha-code-challenge-buttons.svelte-74x4nw {display:flex;justify-content:space-between;}.altcha-code-challenge-buttons-left.svelte-74x4nw {display:flex;gap:0.25rem;}.altcha-code-challenge-verify.svelte-74x4nw {align-items:center;background:var(--altcha-color-active, #1D1DC9);border:0;border-radius:3px;color:white;cursor:pointer;display:flex;gap:0.5rem;font-size:100%;padding:0.35rem 1rem;}.altcha-code-challenge-verify.svelte-74x4nw:disabled {opacity:0.7;pointer-events:none;}.altcha-code-challenge-arrow.svelte-74x4nw {border:6px solid transparent;border-bottom-color:var(--altcha-color-border, currentColor);content:"";height:0;left:0.15rem;position:absolute;top:-12px;width:0;}.altcha[data-floating=top].svelte-74x4nw .altcha-code-challenge:where(.svelte-74x4nw) {top:-150px;}.altcha[data-floating=top].svelte-74x4nw .altcha-code-challenge-arrow:where(.svelte-74x4nw) {border-bottom-color:transparent;border-top-color:var(--altcha-color-border, currentColor);bottom:-12px;top:auto;}.altcha-label.svelte-74x4nw {cursor:pointer;flex-grow:1;}.altcha-logo.svelte-74x4nw {color:currentColor;opacity:0.7;}.altcha-logo.svelte-74x4nw:hover {opacity:1;}.altcha-error.svelte-74x4nw {color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem;}.altcha-footer.svelte-74x4nw {align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.7;justify-content:end;padding:0.2rem 0.7rem;}.altcha-footer.svelte-74x4nw:hover {opacity:1;}.altcha-footer.svelte-74x4nw a {color:currentColor;}.altcha-checkbox.svelte-74x4nw {display:flex;align-items:center;height:24px;width:24px;}.altcha-checkbox.svelte-74x4nw input:where(.svelte-74x4nw) {width:18px;height:18px;margin:0;}.altcha-checkbox-verifying.svelte-74x4nw input:where(.svelte-74x4nw) {appearance:none;pointer-events:none;height:0;width:0;}.altcha-spinner.svelte-74x4nw {
  animation: svelte-74x4nw-altcha-spinner 0.75s infinite linear;transform-origin:center;}

@keyframes svelte-74x4nw-altcha-spinner {
  100% {
    transform: rotate(360deg);
  }
}`
};
function co(e, t) {
  var mn, pn;
  hl(t, !0), Ca(e, uo);
  let r = R(t, "auto", 7, void 0), l = R(t, "blockspam", 7, void 0), i = R(t, "challengeurl", 7, void 0), a = R(t, "challengejson", 7, void 0), s = R(t, "credentials", 7, void 0), c = R(t, "customfetch", 7, void 0), f = R(t, "debug", 7, !1), d = R(t, "delay", 7, 0), _ = R(t, "disableautofocus", 7, !1), v = R(t, "expire", 7, void 0), h = R(t, "floating", 7, void 0), p = R(t, "floatinganchor", 7, void 0), k = R(t, "floatingoffset", 7, void 0), T = R(t, "floatingpersist", 7, !1), F = R(t, "hidefooter", 7, !1), ue = R(t, "hidelogo", 7, !1), le = R(t, "id", 7, void 0), J = R(t, "language", 7, void 0), ce = R(t, "name", 7, "altcha"), ye = R(t, "maxnumber", 7, 1e6), j = R(t, "mockerror", 7, !1), Q = R(t, "obfuscated", 7, void 0), Ve = R(t, "plugins", 7, void 0), pt = R(t, "refetchonexpire", 7, !0), Je = R(t, "sentinel", 7, void 0), xe = R(t, "spamfilter", 7, !1), it = R(t, "strings", 7, void 0), he = R(t, "test", 7, !1), ee = R(t, "verifyurl", 7, void 0), at = R(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), bt = R(t, "workerurl", 7, void 0);
  const Or = ["SHA-256", "SHA-384", "SHA-512"], Al = "https://altcha.org/", Me = (n, u) => {
    t.$$host.dispatchEvent(new CustomEvent(n, { detail: u }));
  }, Fr = (pn = (mn = document.documentElement.lang) == null ? void 0 : mn.split("-")) == null ? void 0 : pn[0], or = /* @__PURE__ */ He(() => {
    var n;
    return i() && new URL(i(), location.origin).host.endsWith(".altcha.org") && !!((n = i()) != null && n.includes("apiKey=ckey_"));
  }), sr = /* @__PURE__ */ He(() => a() ? Xr(a()) : void 0), Rl = /* @__PURE__ */ He(() => it() ? Xr(it()) : {}), L = /* @__PURE__ */ He(() => ({
    ...jr(),
    ...o(Rl)
  })), Vr = /* @__PURE__ */ He(() => `${le() || ce()}_checkbox_${Math.round(Math.random() * 1e8)}`);
  let yt = oe(!1), B = oe(null), I = oe(V(x.UNVERIFIED)), te = oe(void 0), xt = oe(null), Ue = oe(null), ur = oe(null), ot = oe(null), M = oe(null), Ke = oe(null), Ee = null, H = oe(null), Xe = oe(!1), je = [], cr = oe(!1), $e = oe(null);
  xr(() => {
    Ul(o(Ke));
  }), xr(() => {
    jl(o(I));
  }), Da(() => {
    Il(), o(M) && (o(M).removeEventListener("submit", Wr), o(M).removeEventListener("reset", Zr), o(M).removeEventListener("focusin", Gr), b(M, null)), Ee && (clearTimeout(Ee), Ee = null), document.removeEventListener("click", Hr), document.removeEventListener("scroll", Yr), window.removeEventListener("resize", Kr);
  }), xl(() => {
    var n;
    $("mounted", "2.0.0-beta.8"), $("workers", at()), Dl(), $("plugins", je.length ? je.map((u) => u.constructor.pluginName).join(", ") : "none"), he() && $("using test mode"), v() && fr(v()), r() !== void 0 && $("auto", r()), h() !== void 0 && en(h()), b(M, V((n = o(te)) == null ? void 0 : n.closest("form"))), o(M) && (o(M).addEventListener("submit", Wr, { capture: !0 }), o(M).addEventListener("reset", Zr), (r() === "onfocus" || T() === "focus") && o(M).addEventListener("focusin", Gr)), r() === "onload" && (Q() ? Et() : Se()), o(or) && (F() || ue()) && $("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      Me("load");
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
  function Il() {
    for (const n of je)
      n.destroy();
  }
  function Mr() {
    i() && pt() && o(I) === x.VERIFIED ? Se() : st(x.EXPIRED, o(L).expired);
  }
  async function $l() {
    var n;
    if (j())
      throw $("mocking error"), new Error("Mocked error.");
    if (o(sr))
      return $("using provided json data"), o(sr);
    if (he())
      return $("generating test challenge", { test: he() }), Ma(typeof he() != "boolean" ? +he() : void 0);
    {
      if (!i() && o(M)) {
        const E = o(M).getAttribute("action");
        E != null && E.includes("/form/") && i(E + "/altcha");
      }
      if (!i())
        throw new Error("Attribute challengeurl not set.");
      $("fetching challenge from", i());
      const u = {
        credentials: typeof s() == "boolean" ? "include" : s(),
        headers: xe() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      }, g = await Ur()(i(), u);
      if (!g || !(g instanceof Response))
        throw new Error("Custom fetch function did not return a response.");
      if (g.status !== 200)
        throw new Error(`Server responded with ${g.status}.`);
      const m = g.headers.get("X-Altcha-Config"), w = await g.json(), A = new URLSearchParams((n = w.salt.split("?")) == null ? void 0 : n[1]), y = A.get("expires") || A.get("expire");
      if (y) {
        const E = new Date(+y * 1e3), q = isNaN(E.getTime()) ? 0 : E.getTime() - Date.now();
        q > 0 && fr(q);
      }
      if (m)
        try {
          const E = JSON.parse(m);
          E && typeof E == "object" && (E.verifyurl && !E.verifyurl.startsWith("javascript:") && (E.verifyurl = Br(E.verifyurl)), nn(E));
        } catch (E) {
          $("unable to configure from X-Altcha-Config", E);
        }
      return w;
    }
  }
  function Sl(n) {
    var g, m;
    const u = (g = o(M)) == null ? void 0 : g.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((m = u == null ? void 0 : u.value) == null ? void 0 : m.slice(u.value.indexOf("@"))) || void 0;
  }
  function Ur() {
    let n = fetch;
    if (c())
      if ($("using customfetch"), typeof c() == "string") {
        if (n = globalThis[c()] || null, !n)
          throw new Error(`Custom fetch function not found: ${c()}`);
      } else
        n = c();
    return n;
  }
  function jr(n = [
    J() || "",
    document.documentElement.lang || "",
    ...navigator.languages
  ]) {
    const u = Object.keys(globalThis.altchaI18n).map((m) => m.toLowerCase()), g = n.reduce(
      (m, w) => (w = w.toLowerCase(), m || (globalThis.altchaI18n[w] ? w : null) || u.find((A) => w.split("-")[0] === A.split("-")[0]) || null),
      null
    );
    return globalThis.altchaI18n[g || "en"];
  }
  function Nl() {
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
  function qr(n) {
    var g;
    return [
      ...((g = o(M)) == null ? void 0 : g.querySelectorAll(n != null && n.length ? n.map((m) => `input[name="${m}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (m, w) => {
        const A = w.name, y = w.value;
        return A && y && (m[A] = /\n/.test(y) ? y.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : y), m;
      },
      {}
    );
  }
  function Br(n, u) {
    const g = new URL(i() || location.origin), m = new URL(n, g);
    if (m.search || (m.search = g.search), u)
      for (const w in u)
        u[w] !== void 0 && u[w] !== null && m.searchParams.set(w, u[w]);
    return m.toString();
  }
  function Dl() {
    const n = Ve() !== void 0 ? Ve().split(",") : void 0;
    for (const u of globalThis.altchaPlugins)
      (!n || n.includes(u.pluginName)) && je.push(new u({
        el: o(te),
        clarify: Et,
        dispatch: Me,
        getConfiguration: ln,
        getFloatingAnchor: an,
        getState: on,
        log: $,
        reset: st,
        solve: rn,
        setState: Ce,
        setFloatingAnchor: un,
        verify: Se
      }));
  }
  function $(...n) {
    (f() || n.some((u) => u instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${ce()}]`, ...n);
  }
  function Tl() {
    b(H, V(X.PAUSED));
  }
  function Ll(n) {
    b(H, V(X.ERROR));
  }
  function Pl() {
    b(H, V(X.READY));
  }
  function Ol() {
    b(H, V(X.LOADING));
  }
  function Fl() {
    b(H, V(X.PLAYING));
  }
  function Vl() {
    b(H, V(X.PAUSED));
  }
  function Ml(n) {
    var u;
    if (n.preventDefault(), n.stopPropagation(), o(B)) {
      const g = new FormData(n.target), m = String(g.get("code"));
      if ((u = ee()) != null && u.startsWith("javascript:")) {
        const w = ee().replace(/^javascript:/, "");
        if ($(`calling ${w} function instead of verifyurl`), !(w in globalThis))
          throw new Error(`Global function "${w}" is undefined.`);
        return globalThis[w]({
          challenge: o(B).challenge,
          code: m,
          solution: o(B).solution
        });
      }
      b(Xe, !0), Qr(Lt(o(B).challenge, o(B).solution), m).then(({ reason: w, verified: A }) => {
        A ? (b(B, null), Ce(x.VERIFIED), $("verified"), pr().then(() => {
          var y;
          (y = o(ur)) == null || y.focus(), Me("verified", { payload: o($e) });
        })) : (st(), b(Ke, V(w || "Verification failed")));
      }).catch((w) => {
        b(B, null), Ce(x.ERROR, w), $("sentinel verification failed:", w);
      }).finally(() => {
        b(Xe, !1);
      });
    }
  }
  function Hr(n) {
    var g;
    const u = n.target;
    h() && u && !o(te).contains(u) && (o(I) === x.VERIFIED && T() === !1 || o(I) === x.VERIFIED && T() === "focus" && !((g = o(M)) != null && g.matches(":focus-within")) || r() === "off" && o(I) === x.UNVERIFIED) && sn();
  }
  function Yr() {
    h() && o(I) !== x.UNVERIFIED && Ct();
  }
  function Ul(n) {
    for (const u of je)
      typeof u.onErrorChange == "function" && u.onErrorChange(o(Ke));
  }
  function Gr(n) {
    o(I) === x.UNVERIFIED ? Se() : h() && T() === "focus" && o(I) === x.VERIFIED && dr();
  }
  function Wr(n) {
    const u = n.target, g = n.submitter;
    u != null && u.hasAttribute("data-code-challenge-form") || (o(M) && r() === "onsubmit" ? o(I) === x.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), Se().then(() => {
      var w;
      g && ["INPUT", "BUTTON"].includes(g.tagName) && g.getAttribute("name") ? g.click() : (w = o(M)) == null || w.requestSubmit();
    })) : o(I) !== x.VERIFIED && (n.preventDefault(), n.stopPropagation(), o(I) === x.VERIFYING && zr()) : o(M) && h() && r() === "off" && o(I) === x.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), dr()));
  }
  function Zr() {
    st();
  }
  function zr() {
    o(I) === x.VERIFYING && o(L).waitAlert && alert(o(L).waitAlert);
  }
  function Jr() {
    o(Ue) ? o(Ue).paused ? (o(Ue).currentTime = 0, o(Ue).play()) : o(Ue).pause() : (b(cr, !0), requestAnimationFrame(() => {
      var n;
      (n = o(Ue)) == null || n.play();
    }));
  }
  function jl(n) {
    for (const u of je)
      typeof u.onStateChange == "function" && u.onStateChange(o(I));
    h() && o(I) !== x.UNVERIFIED && requestAnimationFrame(() => {
      Ct();
    }), b(yt, o(I) === x.VERIFIED);
  }
  function Kr() {
    h() && Ct();
  }
  function Xr(n) {
    return JSON.parse(n);
  }
  async function ql(n) {
    if (!ee())
      throw new Error("Attribute verifyurl not set.");
    $("requesting server verification from", ee());
    const u = { payload: n };
    if (xe() !== !1) {
      const {
        blockedCountries: w,
        classifier: A,
        disableRules: y,
        email: E,
        expectedLanguages: q,
        expectedCountries: K,
        fields: ie,
        ipAddress: qe,
        text: vr,
        timeZone: Ft
      } = Nl();
      u.blockedCountries = w, u.classifier = A, u.disableRules = y, u.email = E === !1 ? void 0 : Sl(E), u.expectedCountries = K, u.expectedLanguages = q || (Fr ? [Fr] : void 0), u.fields = ie === !1 ? void 0 : qr(ie), u.ipAddress = qe === !1 ? void 0 : qe || "auto", u.text = vr, u.timeZone = Ft === !1 ? void 0 : Ft || Pn();
    }
    const g = await Ur()(ee(), {
      body: JSON.stringify(u),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (!g || !(g instanceof Response))
      throw new Error("Custom fetch function did not return a response.");
    if (g.status !== 200)
      throw new Error(`Server responded with ${g.status}.`);
    const m = await g.json();
    if (m != null && m.payload && b($e, V(m.payload)), Me("serververification", m), l() && m.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  async function Qr(n, u) {
    if (!ee())
      throw new Error("Attribute verifyurl not set.");
    $("requesting sentinel verification from", ee());
    const g = { code: u, payload: n };
    Je() && (g.fields = Je().fields ? qr() : void 0, g.timeZone = Je().timeZone ? Pn() : void 0);
    const m = await fetch(ee(), {
      body: JSON.stringify(g),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (m.status !== 200)
      throw new Error(`Server responded with ${m.status}.`);
    const w = await m.json();
    return w != null && w.payload && b($e, V(w.payload)), Me("sentinelverification", w), w;
  }
  function fr(n) {
    $("expire", n), Ee && (clearTimeout(Ee), Ee = null), n < 1 ? Mr() : Ee = setTimeout(Mr, n);
  }
  function en(n) {
    $("floating", n), h() !== n && (o(te).style.left = "", o(te).style.top = ""), h(n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : h()), h() ? (r() || r("onsubmit"), document.addEventListener("scroll", Yr), document.addEventListener("click", Hr), window.addEventListener("resize", Kr)) : r() === "onsubmit" && r(void 0);
  }
  function tn(n) {
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
  async function rn(n) {
    let u = null;
    if ("Worker" in window) {
      try {
        u = await Bl(n, n.maxNumber || n.maxnumber || ye());
      } catch (g) {
        $(g);
      }
      if ((u == null ? void 0 : u.number) !== void 0 || "obfuscated" in n)
        return { data: n, solution: u };
    }
    if ("obfuscated" in n) {
      const g = await Ba(n.obfuscated, n.key, n.maxNumber || n.maxnumber);
      return { data: n, solution: await g.promise };
    }
    return {
      data: n,
      solution: await Ua(n.challenge, n.salt, n.algorithm, n.maxNumber || n.maxnumber || ye()).promise
    };
  }
  async function Bl(n, u = typeof he() == "number" ? he() : n.maxNumber || n.maxnumber || ye(), g = Math.ceil(at())) {
    const m = [];
    g = Math.min(16, u, Math.max(1, g));
    for (let y = 0; y < g; y++)
      m.push(altchaCreateWorker(bt()));
    const w = Math.ceil(u / g), A = await Promise.all(m.map((y, E) => {
      const q = E * w;
      return new Promise((K) => {
        y.addEventListener("message", (ie) => {
          if (ie.data)
            for (const qe of m)
              qe !== y && qe.postMessage({ type: "abort" });
          K(ie.data);
        }), y.postMessage({
          payload: n,
          max: q + w,
          start: q,
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
    const n = je.find((u) => u.constructor.pluginName === "obfuscation");
    if (!n || !("clarify" in n)) {
      Ce(x.ERROR), $("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in n && typeof n.clarify == "function")
      return n.clarify();
  }
  function nn(n) {
    n.obfuscated !== void 0 && Q(n.obfuscated), n.auto !== void 0 && (r(n.auto), r() === "onload" && (Q() ? Et() : Se())), n.blockspam !== void 0 && l(!!n.blockspam), n.customfetch !== void 0 && c(n.customfetch), n.floatinganchor !== void 0 && p(n.floatinganchor), n.delay !== void 0 && d(n.delay), n.floatingoffset !== void 0 && k(n.floatingoffset), n.floating !== void 0 && en(n.floating), n.expire !== void 0 && (fr(n.expire), v(n.expire)), n.challenge && (a(typeof n.challenge == "string" ? n.challenge : JSON.stringify(n.challenge)), tn(o(sr))), n.challengeurl !== void 0 && i(n.challengeurl), n.debug !== void 0 && f(!!n.debug), n.hidefooter !== void 0 && F(!!n.hidefooter), n.hidelogo !== void 0 && ue(!!n.hidelogo), n.language !== void 0 && it(jr([n.language])), n.maxnumber !== void 0 && ye(+n.maxnumber), n.mockerror !== void 0 && j(!!n.mockerror), n.name !== void 0 && ce(n.name), n.refetchonexpire !== void 0 && pt(!!n.refetchonexpire), n.sentinel !== void 0 && typeof n.sentinel == "object" && Je(n.sentinel), n.spamfilter !== void 0 && xe(typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && it(typeof n.strings == "string" ? n.strings : JSON.stringify(n.strings)), n.test !== void 0 && he(typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && ee(n.verifyurl), n.workers !== void 0 && at(+n.workers), n.workerurl !== void 0 && bt(n.workerurl);
  }
  function ln() {
    return {
      auto: r(),
      blockspam: l(),
      challengeurl: i(),
      debug: f(),
      delay: d(),
      expire: v(),
      floating: h(),
      floatinganchor: p(),
      floatingoffset: k(),
      hidefooter: F(),
      hidelogo: ue(),
      name: ce(),
      maxnumber: ye(),
      mockerror: j(),
      obfuscated: Q(),
      refetchonexpire: pt(),
      spamfilter: xe(),
      strings: o(L),
      test: he(),
      verifyurl: ee(),
      workers: at(),
      workerurl: bt()
    };
  }
  function an() {
    return o(ot);
  }
  function Hl(n) {
    return je.find((u) => u.constructor.pluginName === n);
  }
  function on() {
    return o(I);
  }
  function sn() {
    o(te).style.display = "none";
  }
  function Ct(n = 20) {
    var u;
    if (o(te))
      if (o(ot) || b(ot, V((p() ? document.querySelector(p()) : (u = o(M)) == null ? void 0 : u.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || o(M))), o(ot)) {
        const g = parseInt(k(), 10) || 12, m = o(ot).getBoundingClientRect(), w = o(te).getBoundingClientRect(), A = document.documentElement.clientHeight, y = document.documentElement.clientWidth, E = h() === "auto" ? m.bottom + w.height + g + n > A : h() === "top", q = Math.max(n, Math.min(y - n - w.width, m.left + m.width / 2 - w.width / 2));
        if (E ? o(te).style.top = `${m.top - (w.height + g)}px` : o(te).style.top = `${m.bottom + g}px`, o(te).style.left = `${q}px`, o(te).setAttribute("data-floating", E ? "top" : "bottom"), o(xt)) {
          const K = o(xt).getBoundingClientRect();
          o(xt).style.left = m.left - q + m.width / 2 - K.width / 2 + "px";
        }
      } else
        $("unable to find floating anchor element");
  }
  function st(n = x.UNVERIFIED, u = null) {
    Ee && (clearTimeout(Ee), Ee = null), b(yt, !1), b($e, null), b(B, null), b(cr, !1), b(H, null), Ce(n, u);
  }
  function un(n) {
    b(ot, V(n));
  }
  function Ce(n, u = null) {
    b(I, V(n)), b(Ke, V(u)), Me("statechange", {
      payload: o($e),
      state: o(I)
    });
  }
  function dr() {
    o(te).style.display = "block", h() && Ct();
  }
  async function Se() {
    return st(x.VERIFYING), await new Promise((n) => setTimeout(n, d() || 0)), $l().then((n) => (tn(n), $("challenge", n), rn(n))).then(({ data: n, solution: u }) => {
      var g;
      if ($("solution", u), !u || n && "challenge" in n && !("clearText" in u))
        if ((u == null ? void 0 : u.number) !== void 0 && "challenge" in n)
          if (ee() && "codeChallenge" in n)
            ((g = document.activeElement) == null ? void 0 : g.tagName) === "INPUT" && _() === !1 && document.activeElement.blur(), b(B, V({ challenge: n, solution: u }));
          else {
            if (ee() && Je() !== void 0)
              return Qr(Lt(n, u));
            if (ee())
              return ql(Lt(n, u));
            b($e, V(Lt(n, u))), $("payload", o($e));
          }
        else
          throw $("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      o(B) ? (Ce(x.CODE), pr().then(() => {
        Me("code", { codeChallenge: o(B) });
      })) : (Ce(x.VERIFIED), $("verified"), pr().then(() => {
        Me("verified", { payload: o($e) });
      }));
    }).catch((n) => {
      $(n), Ce(x.ERROR, n.message);
    });
  }
  var cn = so(), fn = Rt(cn);
  Ea(fn, t, "default", {});
  var kt = Z(fn, 2), hr = W(kt), Pt = W(hr);
  let dn;
  var hn = W(Pt);
  {
    var Yl = (n) => {
      br(n);
    };
    z(hn, (n) => {
      o(I) === x.VERIFYING && n(Yl);
    });
  }
  var Qe = Z(hn, 2);
  Dn(Qe), Qe.__change = [
    Wa,
    I,
    xe,
    M,
    yt,
    Q,
    Et,
    Se
  ], Ut(Qe, (n) => b(ur, n), () => o(ur)), G(Pt);
  var Ot = Z(Pt, 2), Gl = W(Ot);
  {
    var Wl = (n) => {
      var u = Mt(), g = Rt(u);
      et(g, () => o(L).verified), U(n, u);
    }, Zl = (n, u) => {
      {
        var g = (w) => {
          var A = Mt(), y = Rt(A);
          et(y, () => o(L).verifying), U(w, A);
        }, m = (w, A) => {
          {
            var y = (q) => {
              var K = Mt(), ie = Rt(K);
              et(ie, () => o(L).verificationRequired), U(q, K);
            }, E = (q) => {
              var K = Mt(), ie = Rt(K);
              et(ie, () => o(L).label), U(q, K);
            };
            z(
              w,
              (q) => {
                o(I) === x.CODE ? q(y) : q(E, !1);
              },
              A
            );
          }
        };
        z(
          n,
          (w) => {
            o(I) === x.VERIFYING ? w(g) : w(m, !1);
          },
          u
        );
      }
    };
    z(Gl, (n) => {
      o(I) === x.VERIFIED ? n(Wl) : n(Zl, !1);
    });
  }
  G(Ot);
  var vn = Z(Ot, 2);
  {
    var zl = (n) => {
      var u = za();
      Dn(u), Ne(() => {
        N(u, "name", ce()), $a(u, o($e));
      }), U(n, u);
    };
    z(vn, (n) => {
      o(I) === x.VERIFIED && n(zl);
    });
  }
  var gn = Z(vn, 2);
  {
    var Jl = (n) => {
      var u = Ja(), g = W(u);
      N(g, "href", Al), G(u), Ne(() => N(g, "aria-label", o(L).ariaLinkLabel)), U(n, u);
    };
    z(gn, (n) => {
      (ue() !== !0 || o(or)) && n(Jl);
    });
  }
  var Kl = Z(gn, 2);
  {
    var Xl = (n) => {
      var u = ro(), g = Z(W(u), 2), m = W(g), w = Z(m, 2);
      wa(w, !_()), w.__keydown = [
        Ya,
        Jr
      ];
      var A = Z(w, 2), y = W(A), E = W(y);
      {
        var q = (we) => {
          var Y = eo();
          Y.__click = Jr;
          var Vt = W(Y);
          {
            var At = (ut) => {
              br(ut, () => 20);
            }, ii = (ut, ai) => {
              {
                var oi = (ct) => {
                  var gr = Ka();
                  U(ct, gr);
                }, si = (ct, gr) => {
                  {
                    var ui = (ft) => {
                      var wr = Xa();
                      U(ft, wr);
                    }, ci = (ft) => {
                      var wr = Qa();
                      U(ft, wr);
                    };
                    z(
                      ct,
                      (ft) => {
                        o(H) === X.PLAYING ? ft(ui) : ft(ci, !1);
                      },
                      gr
                    );
                  }
                };
                z(
                  ut,
                  (ct) => {
                    o(H) === X.ERROR ? ct(oi) : ct(si, !1);
                  },
                  ai
                );
              }
            };
            z(Vt, (ut) => {
              o(H) === X.LOADING ? ut(At) : ut(ii, !1);
            });
          }
          G(Y), Ne(() => {
            N(Y, "title", o(L).getAudioChallenge), Y.disabled = o(H) === X.LOADING || o(H) === X.ERROR || o(Xe), N(Y, "aria-label", o(H) === X.LOADING ? o(L).loading : o(L).getAudioChallenge);
          }), U(we, Y);
        };
        z(E, (we) => {
          o(B).challenge.codeChallenge.audio && we(q);
        });
      }
      var K = Z(E, 2);
      K.__click = [Ga, Se], G(y);
      var ie = Z(y, 2), qe = W(ie);
      {
        var vr = (we) => {
          br(we, () => 16);
        };
        z(qe, (we) => {
          o(Xe) && we(vr);
        });
      }
      var Ft = Z(qe);
      G(ie), G(A);
      var ni = Z(A, 2);
      {
        var li = (we) => {
          var Y = to(), Vt = W(Y);
          G(Y), Ut(Y, (At) => b(Ue, At), () => o(Ue)), Ne((At) => N(Vt, "src", At), [
            () => Br(o(B).challenge.codeChallenge.audio, { language: J() })
          ]), Be("loadstart", Y, Ol), Be("canplay", Y, Pl), Be("pause", Y, Vl), Be("playing", Y, Fl), Be("ended", Y, Tl), Be("error", Vt, Ll), U(we, Y);
        };
        z(ni, (we) => {
          o(B).challenge.codeChallenge.audio && o(cr) && we(li);
        });
      }
      G(g), G(u), Ne(() => {
        N(u, "aria-label", o(L).verificationRequired), N(m, "src", o(B).challenge.codeChallenge.image), N(w, "minlength", o(B).challenge.codeChallenge.length || 1), N(w, "maxlength", o(B).challenge.codeChallenge.length), N(w, "placeholder", o(L).enterCode), N(w, "aria-label", o(H) === X.LOADING ? o(L).loading : o(H) === X.PLAYING ? "" : o(L).enterCodeAria), N(w, "aria-live", o(H) ? "assertive" : "polite"), N(w, "aria-busy", o(H) === X.LOADING), w.disabled = o(Xe), N(K, "aria-label", o(L).reload), N(K, "title", o(L).reload), K.disabled = o(Xe), ie.disabled = o(Xe), N(ie, "aria-label", o(L).verify), ba(Ft, ` ${o(L).verify ?? ""}`);
      }), Be("submit", g, Ml, !0), U(n, u);
    };
    z(Kl, (n) => {
      var u;
      (u = o(B)) != null && u.challenge.codeChallenge && n(Xl);
    });
  }
  G(hr);
  var wn = Z(hr, 2);
  {
    var Ql = (n) => {
      var u = io(), g = Z(W(u), 2);
      {
        var m = (A) => {
          var y = no(), E = W(y);
          et(E, () => o(L).expired), G(y), Ne(() => N(y, "title", o(Ke))), U(A, y);
        }, w = (A) => {
          var y = lo(), E = W(y);
          et(E, () => o(L).error), G(y), Ne(() => N(y, "title", o(Ke))), U(A, y);
        };
        z(g, (A) => {
          o(I) === x.EXPIRED ? A(m) : A(w, !1);
        });
      }
      G(u), U(n, u);
    };
    z(wn, (n) => {
      (o(Ke) || o(I) === x.EXPIRED) && n(Ql);
    });
  }
  var _n = Z(wn, 2);
  {
    var ei = (n) => {
      var u = ao(), g = W(u), m = W(g);
      et(m, () => o(L).footer), G(g), G(u), U(n, u);
    };
    z(_n, (n) => {
      o(L).footer && (F() !== !0 || o(or)) && n(ei);
    });
  }
  var ti = Z(_n, 2);
  {
    var ri = (n) => {
      var u = oo();
      Ut(u, (g) => b(xt, g), () => o(xt)), U(n, u);
    };
    z(ti, (n) => {
      h() && n(ri);
    });
  }
  return G(kt), Ut(kt, (n) => b(te, n), () => o(te)), Ne(
    (n) => {
      N(kt, "data-state", o(I)), N(kt, "data-floating", h()), dn = Aa(Pt, 1, "altcha-checkbox svelte-74x4nw", null, dn, n), N(Qe, "id", o(Vr)), Qe.required = r() !== "onsubmit" && (!h() || r() !== "off"), N(Ot, "for", o(Vr));
    },
    [
      () => ({
        "altcha-checkbox-verifying": o(I) === x.VERIFYING
      })
    ]
  ), Be("invalid", Qe, zr), Na(Qe, () => o(yt), (n) => b(yt, n)), U(e, cn), vl({
    clarify: Et,
    configure: nn,
    getConfiguration: ln,
    getFloatingAnchor: an,
    getPlugin: Hl,
    getState: on,
    hide: sn,
    repositionFloating: Ct,
    reset: st,
    setFloatingAnchor: un,
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
      return J();
    },
    set language(n = void 0) {
      J(n), C();
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
      return pt();
    },
    set refetchonexpire(n = !0) {
      pt(n), C();
    },
    get sentinel() {
      return Je();
    },
    set sentinel(n = void 0) {
      Je(n), C();
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
      return bt();
    },
    set workerurl(n = void 0) {
      bt(n), C();
    }
  });
}
pa(["change", "keydown", "click"]);
customElements.define("altcha-widget", Fa(
  co,
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
globalThis.altchaCreateWorker = (e) => e ? new Worker(new URL(e)) : new hi();
export {
  co as Altcha
};
