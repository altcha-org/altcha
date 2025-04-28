var ca = Object.defineProperty;
var bn = (e) => {
  throw TypeError(e);
};
var fa = (e, t, r) => t in e ? ca(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var _e = (e, t, r) => fa(e, typeof t != "symbol" ? t + "" : t, r), wn = (e, t, r) => t.has(e) || bn("Cannot " + r);
var ae = (e, t, r) => (wn(e, t, "read from private field"), r ? r.call(e) : t.get(e)), _r = (e, t, r) => t.has(e) ? bn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), mr = (e, t, r, l) => (wn(e, t, "write to private field"), l ? l.call(e, r) : t.set(e, r), r);
const On = `(function(){"use strict";const d=new TextEncoder;function p(e){return[...new Uint8Array(e)].map(t=>t.toString(16).padStart(2,"0")).join("")}async function b(e,t,r){if(typeof crypto>"u"||!("subtle"in crypto)||!("digest"in crypto.subtle))throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");return p(await crypto.subtle.digest(r.toUpperCase(),d.encode(e+t)))}function w(e,t,r="SHA-256",n=1e6,s=0){const o=new AbortController,a=Date.now();return{promise:(async()=>{for(let c=s;c<=n;c+=1){if(o.signal.aborted)return null;if(await b(t,c,r)===e)return{number:c,took:Date.now()-a}}return null})(),controller:o}}function h(e){const t=atob(e),r=new Uint8Array(t.length);for(let n=0;n<t.length;n++)r[n]=t.charCodeAt(n);return r}function g(e,t=12){const r=new Uint8Array(t);for(let n=0;n<t;n++)r[n]=e%256,e=Math.floor(e/256);return r}async function m(e,t="",r=1e6,n=0){const s="AES-GCM",o=new AbortController,a=Date.now(),l=async()=>{for(let u=n;u<=r;u+=1){if(o.signal.aborted||!c||!y)return null;try{const f=await crypto.subtle.decrypt({name:s,iv:g(u)},c,y);if(f)return{clearText:new TextDecoder().decode(f),took:Date.now()-a}}catch{}}return null};let c=null,y=null;try{y=h(e);const u=await crypto.subtle.digest("SHA-256",d.encode(t));c=await crypto.subtle.importKey("raw",u,s,!1,["decrypt"])}catch{return{promise:Promise.reject(),controller:o}}return{promise:l(),controller:o}}let i;onmessage=async e=>{const{type:t,payload:r,start:n,max:s}=e.data;let o=null;if(t==="abort")i==null||i.abort(),i=void 0;else if(t==="work"){if("obfuscated"in r){const{key:a,obfuscated:l}=r||{};o=await m(l,a,s,n)}else{const{algorithm:a,challenge:l,salt:c}=r||{};o=w(l,c,a,s,n)}i=o.controller,o.promise.then(a=>{self.postMessage(a&&{...a,worker:!0})})}}})();
`, yn = typeof self < "u" && self.Blob && new Blob([On], { type: "text/javascript;charset=utf-8" });
function da(e) {
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
const ha = "5";
var Pn;
typeof window < "u" && ((Pn = window.__svelte ?? (window.__svelte = {})).v ?? (Pn.v = /* @__PURE__ */ new Set())).add(ha);
const va = 1, ga = 4, pa = 8, _a = 16, ma = 1, ba = 2, kr = "[", Fn = "[!", Vn = "]", vt = {}, oe = Symbol(), wa = "http://www.w3.org/1999/xhtml", xn = !1, be = 2, Mn = 4, Qt = 8, Rr = 16, Oe = 32, nt = 64, Ht = 128, ge = 256, Yt = 512, de = 1024, Fe = 2048, mt = 4096, gt = 8192, er = 16384, ya = 32768, Ir = 65536, xa = 1 << 19, Un = 1 << 20, St = Symbol("$state"), jn = Symbol("legacy props"), Ea = Symbol("");
var qn = Array.isArray, Ca = Array.prototype.indexOf, Aa = Array.from, Gt = Object.keys, Wt = Object.defineProperty, tt = Object.getOwnPropertyDescriptor, ka = Object.getOwnPropertyDescriptors, Ra = Object.prototype, Ia = Array.prototype, Bn = Object.getPrototypeOf;
function Hn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function $a(e, t, r = !1) {
  return e === void 0 ? r ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
const Sa = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
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
function Na(e) {
  Tt.length === 0 && Sa(Gn), Tt.push(e);
}
function En() {
  Dt.length > 0 && Yn(), Tt.length > 0 && Gn();
}
function Wn(e) {
  return e === this.v;
}
function Da(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function $r(e) {
  return !Da(e, this.v);
}
function Ta(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function La() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Pa(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Oa() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Fa() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Va(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Ma() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ua() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function ja() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function qa() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Ba = !1;
function Ae(e, t) {
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
function ie(e) {
  return /* @__PURE__ */ Ha(Ae(e));
}
// @__NO_SIDE_EFFECTS__
function Zn(e, t = !1) {
  const r = Ae(e);
  return t || (r.equals = $r), r;
}
// @__NO_SIDE_EFFECTS__
function Ha(e) {
  return N !== null && !me && (N.f & be) !== 0 && (ke === null ? Ka([e]) : ke.push(e)), e;
}
function w(e, t) {
  return N !== null && !me && vl() && (N.f & (be | Rr)) !== 0 && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (ke === null || !ke.includes(e)) && qa(), Ya(e, t);
}
function Ya(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = rl(), zn(e, Fe), D !== null && (D.f & de) !== 0 && (D.f & (Oe | nt)) === 0 && (De === null ? Xa([e]) : De.push(e))), t;
}
function zn(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var l = r.length, a = 0; a < l; a++) {
      var i = r[a], s = i.f;
      (s & Fe) === 0 && (Ie(i, t), (s & (de | ge)) !== 0 && ((s & be) !== 0 ? zn(
        /** @type {Derived} */
        i,
        mt
      ) : ar(
        /** @type {Effect} */
        i
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
    ctx: re,
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
function Ga(e) {
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
function Wa(e) {
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
function Za(e) {
  var t, r = D;
  ze(Wa(e));
  try {
    Jn(e), t = ll(e);
  } finally {
    ze(r);
  }
  return t;
}
function Kn(e) {
  var t = Za(e), r = (Ge || (e.f & ge) !== 0) && e.deps !== null ? mt : de;
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
function za() {
  for (var e = 0, t = P; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === Vn) {
        if (e === 0) return t;
        e -= 1;
      } else (r === kr || r === Fn) && (e += 1);
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
  if (l !== Ra && l !== Ia)
    return e;
  var a = /* @__PURE__ */ new Map(), i = qn(e), s = Ae(0);
  i && a.set("length", Ae(
    /** @type {any[]} */
    e.length
  ));
  var c;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(f, d, p) {
        (!("value" in p) || p.configurable === !1 || p.enumerable === !1 || p.writable === !1) && Ma();
        var v = a.get(d);
        return v === void 0 ? (v = Ae(p.value), a.set(d, v)) : w(v, V(p.value, c)), !0;
      },
      deleteProperty(f, d) {
        var p = a.get(d);
        if (p === void 0)
          d in f && a.set(d, Ae(oe));
        else {
          if (i && typeof d == "string") {
            var v = (
              /** @type {Source<number>} */
              a.get("length")
            ), h = Number(d);
            Number.isInteger(h) && h < v.v && w(v, h);
          }
          w(p, oe), Cn(s);
        }
        return !0;
      },
      get(f, d, p) {
        var A;
        if (d === St)
          return e;
        var v = a.get(d), h = d in f;
        if (v === void 0 && (!h || (A = tt(f, d)) != null && A.writable) && (v = Ae(V(h ? f[d] : oe, c)), a.set(d, v)), v !== void 0) {
          var m = o(v);
          return m === oe ? void 0 : m;
        }
        return Reflect.get(f, d, p);
      },
      getOwnPropertyDescriptor(f, d) {
        var p = Reflect.getOwnPropertyDescriptor(f, d);
        if (p && "value" in p) {
          var v = a.get(d);
          v && (p.value = o(v));
        } else if (p === void 0) {
          var h = a.get(d), m = h == null ? void 0 : h.v;
          if (h !== void 0 && m !== oe)
            return {
              enumerable: !0,
              configurable: !0,
              value: m,
              writable: !0
            };
        }
        return p;
      },
      has(f, d) {
        var m;
        if (d === St)
          return !0;
        var p = a.get(d), v = p !== void 0 && p.v !== oe || Reflect.has(f, d);
        if (p !== void 0 || D !== null && (!v || (m = tt(f, d)) != null && m.writable)) {
          p === void 0 && (p = Ae(v ? V(f[d], c) : oe), a.set(d, p));
          var h = o(p);
          if (h === oe)
            return !1;
        }
        return v;
      },
      set(f, d, p, v) {
        var X;
        var h = a.get(d), m = d in f;
        if (i && d === "length")
          for (var A = p; A < /** @type {Source<number>} */
          h.v; A += 1) {
            var T = a.get(A + "");
            T !== void 0 ? w(T, oe) : A in f && (T = Ae(oe), a.set(A + "", T));
          }
        h === void 0 ? (!m || (X = tt(f, d)) != null && X.writable) && (h = Ae(void 0), w(h, V(p, c)), a.set(d, h)) : (m = h.v !== oe, w(h, V(p, c)));
        var F = Reflect.getOwnPropertyDescriptor(f, d);
        if (F != null && F.set && F.set.call(v, p), !m) {
          if (i && typeof d == "string") {
            var se = (
              /** @type {Source<number>} */
              a.get("length")
            ), ne = Number(d);
            Number.isInteger(ne) && ne >= se.v && w(se, ne + 1);
          }
          Cn(s);
        }
        return !0;
      },
      ownKeys(f) {
        o(s);
        var d = Reflect.ownKeys(f).filter((h) => {
          var m = a.get(h);
          return m === void 0 || m.v !== oe;
        });
        for (var [p, v] of a)
          v.v !== oe && !(p in f) && d.push(p);
        return d;
      },
      setPrototypeOf() {
        Ua();
      }
    }
  );
}
function Cn(e, t = 1) {
  w(e, e.v + t);
}
var An, Xn, Qn, el;
function yr() {
  if (An === void 0) {
    An = window, Xn = /Firefox/.test(navigator.userAgent);
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
  for (var a; t--; )
    a = l, l = /** @type {TemplateNode} */
    /* @__PURE__ */ Je(l);
  if (!O)
    return l;
  var i = l == null ? void 0 : l.nodeType;
  if (r && i !== 3) {
    var s = nr();
    return l === null ? a == null || a.after(s) : l.before(s), We(s), s;
  }
  return We(l), /** @type {TemplateNode} */
  l;
}
function Ja(e) {
  e.textContent = "";
}
let qt = !1, Zt = !1, zt = null, rt = !1, Sr = !1;
function kn(e) {
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
let ke = null;
function Ka(e) {
  ke = e;
}
let te = null, fe = 0, De = null;
function Xa(e) {
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
      var a, i, s = (t & Yt) !== 0, c = l && D !== null && !Ge, f = r.length;
      if (s || c) {
        var d = (
          /** @type {Derived} */
          e
        ), p = d.parent;
        for (a = 0; a < f; a++)
          i = r[a], (s || !((v = i == null ? void 0 : i.reactions) != null && v.includes(d))) && (i.reactions ?? (i.reactions = [])).push(d);
        s && (d.f ^= Yt), c && p !== null && (p.f & ge) === 0 && (d.f ^= ge);
      }
      for (a = 0; a < f; a++)
        if (i = r[a], Lt(
          /** @type {Derived} */
          i
        ) && Kn(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!l || D !== null && !Ge) && Ie(e, de);
  }
  return !1;
}
function Qa(e, t) {
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
function ei(e) {
  return (e.f & er) === 0 && (e.parent === null || (e.parent.f & Ht) === 0);
}
function lr(e, t, r, l) {
  if (qt) {
    if (r === null && (qt = !1), ei(t))
      throw e;
    return;
  }
  r !== null && (qt = !0);
  {
    Qa(e, t);
    return;
  }
}
function nl(e, t, r = !0) {
  var l = e.reactions;
  if (l !== null)
    for (var a = 0; a < l.length; a++) {
      var i = l[a];
      (i.f & be) !== 0 ? nl(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (r ? Ie(i, Fe) : (i.f & de) !== 0 && Ie(i, mt), ar(
        /** @type {Effect} */
        i
      ));
    }
}
function ll(e) {
  var m;
  var t = te, r = fe, l = De, a = N, i = Ge, s = ke, c = re, f = me, d = e.f;
  te = /** @type {null | Value[]} */
  null, fe = 0, De = null, Ge = (d & ge) !== 0 && (me || !rt || N === null), N = (d & (Oe | nt)) === 0 ? e : null, ke = null, In(e.ctx), me = !1, Jt++;
  try {
    var p = (
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
      if (!Ge)
        for (h = fe; h < v.length; h++)
          ((m = v[h]).reactions ?? (m.reactions = [])).push(e);
    } else v !== null && fe < v.length && (Kt(e, fe), v.length = fe);
    if (vl() && De !== null && !me && v !== null && (e.f & (be | mt | Fe)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      De.length; h++)
        nl(
          De[h],
          /** @type {Effect} */
          e
        );
    return a !== null && Jt++, p;
  } finally {
    te = t, fe = r, De = l, N = a, Ge = i, ke = s, In(c), me = f;
  }
}
function ti(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var l = Ca.call(r, e);
    if (l !== -1) {
      var a = r.length - 1;
      a === 0 ? r = t.reactions = null : (r[l] = r[a], r.pop());
    }
  }
  r === null && (t.f & be) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (te === null || !te.includes(t)) && (Ie(t, mt), (t.f & (ge | Yt)) === 0 && (t.f ^= Yt), Jn(
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
      ti(e, r[l]);
}
function Nr(e) {
  var t = e.f;
  if ((t & er) === 0) {
    Ie(e, de);
    var r = D, l = re, a = rt;
    D = e, rt = !0;
    try {
      (t & Rr) !== 0 ? fi(e) : ol(e), il(e);
      var i = ll(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = tl;
      var s = e.deps, c;
      xn && Ba && e.f & Fe;
    } catch (f) {
      lr(f, e, r, l || e.ctx);
    } finally {
      rt = a, D = r;
    }
  }
}
function ri() {
  try {
    Oa();
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
    for (rt = !0; Nt.length > 0; ) {
      t++ > 1e3 && ri();
      var r = Nt, l = r.length;
      Nt = [];
      for (var a = 0; a < l; a++) {
        var i = li(r[a]);
        ni(i);
      }
    }
  } finally {
    Zt = !1, rt = e, zt = null;
  }
}
function ni(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var l = e[r];
      if ((l.f & (er | gt)) === 0)
        try {
          Lt(l) && (Nr(l), l.deps === null && l.first === null && l.nodes_start === null && (l.teardown === null ? sl(l) : l.fn = null));
        } catch (a) {
          lr(a, l, null, l.ctx);
        }
    }
}
function ar(e) {
  Zt || (Zt = !0, queueMicrotask(al));
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
function li(e) {
  for (var t = [], r = e; r !== null; ) {
    var l = r.f, a = (l & (Oe | nt)) !== 0, i = a && (l & de) !== 0;
    if (!i && (l & gt) === 0) {
      if ((l & Mn) !== 0)
        t.push(r);
      else if (a)
        r.f ^= de;
      else {
        var s = N;
        try {
          N = r, Lt(r) && Nr(r);
        } catch (d) {
          lr(d, r, null, r.ctx);
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
    Zt = !0, al(), En();
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
    ke !== null && ke.includes(e) && ja();
    var l = N.deps;
    e.rv < Jt && (e.rv = Jt, te === null && l !== null && l[fe] === e ? fe++ : te === null ? te = [e] : (!Ge || !te.includes(e)) && te.push(e));
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var a = (
      /** @type {Derived} */
      e
    ), i = a.parent;
    i !== null && (i.f & ge) === 0 && (a.f ^= ge);
  }
  return r && (a = /** @type {Derived} */
  e, Lt(a) && Kn(a)), e.v;
}
function _t(e) {
  var t = me;
  try {
    return me = !0, e();
  } finally {
    me = t;
  }
}
const ai = -7169;
function Ie(e, t) {
  e.f = e.f & ai | t;
}
function ii(e) {
  D === null && N === null && Pa(), N !== null && (N.f & ge) !== 0 && D === null && La(), Sr && Ta();
}
function oi(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function lt(e, t, r, l = !0) {
  var a = D, i = {
    ctx: re,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Fe,
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
      Nr(i), i.f |= ya;
    } catch (f) {
      throw Pe(i), f;
    }
  else t !== null && ar(i);
  var s = r && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (Un | Ht)) === 0;
  if (!s && l && (a !== null && oi(i, a), N !== null && (N.f & be) !== 0)) {
    var c = (
      /** @type {Derived} */
      N
    );
    (c.effects ?? (c.effects = [])).push(i);
  }
  return i;
}
function si(e) {
  const t = lt(Qt, null, !1);
  return Ie(t, de), t.teardown = e, t;
}
function xr(e) {
  ii();
  var t = D !== null && (D.f & Oe) !== 0 && re !== null && !re.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      re
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
function ui(e) {
  const t = lt(nt, e, !0);
  return () => {
    Pe(t);
  };
}
function ci(e) {
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
function il(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Sr, l = N;
    kn(!0), Ze(null);
    try {
      t.call(null);
    } finally {
      kn(r), Ze(l);
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
function fi(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Oe) === 0 && Pe(t), t = r;
  }
}
function Pe(e, t = !0) {
  var r = !1;
  if ((t || (e.f & xa) !== 0) && e.nodes_start !== null) {
    for (var l = e.nodes_start, a = e.nodes_end; l !== null; ) {
      var i = l === a ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Je(l)
      );
      l.remove(), l = i;
    }
    r = !0;
  }
  ol(e, t && !r), Kt(e, 0), Ie(e, er);
  var s = e.transitions;
  if (s !== null)
    for (const f of s)
      f.stop();
  il(e);
  var c = e.parent;
  c !== null && c.first !== null && sl(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function sl(e) {
  var t = e.parent, r = e.prev, l = e.next;
  r !== null && (r.next = l), l !== null && (l.prev = r), t !== null && (t.first === e && (t.first = l), t.last === e && (t.last = r));
}
function Er(e, t) {
  var r = [];
  ul(e, r, !0), di(r, () => {
    Pe(e), t && t();
  });
}
function di(e, t) {
  var r = e.length;
  if (r > 0) {
    var l = () => --r || t();
    for (var a of e)
      a.out(l);
  } else
    t();
}
function ul(e, t, r) {
  if ((e.f & gt) === 0) {
    if (e.f ^= gt, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || r) && t.push(s);
    for (var l = e.first; l !== null; ) {
      var a = l.next, i = (l.f & Ir) !== 0 || (l.f & Oe) !== 0;
      ul(l, t, i ? r : !1), l = a;
    }
  }
}
function Rn(e) {
  cl(e, !0);
}
function cl(e, t) {
  if ((e.f & gt) !== 0) {
    e.f ^= gt, (e.f & de) === 0 && (e.f ^= de), Lt(e) && (Ie(e, Fe), ar(e));
    for (var r = e.first; r !== null; ) {
      var l = r.next, a = (r.f & Ir) !== 0 || (r.f & Oe) !== 0;
      cl(r, a ? t : !1), r = l;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
function fl(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let re = null;
function In(e) {
  re = e;
}
function dl(e, t = !1, r) {
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
function hl(e) {
  const t = re;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var r = D, l = N;
      t.e = null;
      try {
        for (var a = 0; a < s.length; a++) {
          var i = s[a];
          ze(i.effect), Ze(i.reaction), Dr(i.fn);
        }
      } finally {
        ze(r), Ze(l);
      }
    }
    re = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function vl() {
  return !0;
}
const hi = ["touchstart", "touchmove"];
function vi(e) {
  return hi.includes(e);
}
function gi(e, t) {
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
function pi(e, t, r, l = r) {
  e.addEventListener(t, () => pl(r));
  const a = e.__on_r;
  a ? e.__on_r = () => {
    a(), l(!0);
  } : e.__on_r = () => l(!0), gl();
}
const _l = /* @__PURE__ */ new Set(), Cr = /* @__PURE__ */ new Set();
function _i(e, t, r, l = {}) {
  function a(i) {
    if (l.capture || $t.call(t, i), !i.cancelBubble)
      return pl(() => r == null ? void 0 : r.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? tr(() => {
    t.addEventListener(e, a, l);
  }) : t.addEventListener(e, a, l), a;
}
function He(e, t, r, l, a) {
  var i = { capture: l, passive: a }, s = _i(e, t, r, i);
  (t === document.body || t === window || t === document) && si(() => {
    t.removeEventListener(e, s, i);
  });
}
function mi(e) {
  for (var t = 0; t < e.length; t++)
    _l.add(e[t]);
  for (var r of Cr)
    r(e);
}
function $t(e) {
  var ne;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), l = e.type, a = ((ne = e.composedPath) == null ? void 0 : ne.call(e)) || [], i = (
    /** @type {null | Element} */
    a[0] || e.target
  ), s = 0, c = e.__root;
  if (c) {
    var f = a.indexOf(c);
    if (f !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var d = a.indexOf(t);
    if (d === -1)
      return;
    f <= d && (s = f);
  }
  if (i = /** @type {Element} */
  a[s] || e.target, i !== t) {
    Wt(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || r;
      }
    });
    var p = N, v = D;
    Ze(null), ze(null);
    try {
      for (var h, m = []; i !== null; ) {
        var A = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var T = i["__" + l];
          if (T != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (qn(T)) {
              var [F, ...se] = T;
              F.apply(i, [e, ...se]);
            } else
              T.call(i, e);
        } catch (X) {
          h ? m.push(X) : h = X;
        }
        if (e.cancelBubble || A === t || A === null)
          break;
        i = A;
      }
      if (h) {
        for (let X of m)
          queueMicrotask(() => {
            throw X;
          });
        throw h;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Ze(p), ze(v);
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
  var r = (t & ma) !== 0, l = (t & ba) !== 0, a, i = !e.startsWith("<!>");
  return () => {
    if (O)
      return Re(P, null), P;
    a === void 0 && (a = Pr(i ? e : "<!>" + e), r || (a = /** @type {Node} */
    /* @__PURE__ */ Le(a)));
    var s = (
      /** @type {TemplateNode} */
      l || Xn ? document.importNode(a, !0) : a.cloneNode(!0)
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
function ir(e, t, r = "svg") {
  var l = !e.startsWith("<!>"), a = `<${r}>${l ? e : "<!>" + e}</${r}>`, i;
  return () => {
    if (O)
      return Re(P, null), P;
    if (!i) {
      var s = (
        /** @type {DocumentFragment} */
        Pr(a)
      ), c = (
        /** @type {Element} */
        /* @__PURE__ */ Le(s)
      );
      i = /** @type {Element} */
      /* @__PURE__ */ Le(c);
    }
    var f = (
      /** @type {TemplateNode} */
      i.cloneNode(!0)
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
function bi(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function ml(e, t) {
  return bl(e, t);
}
function wi(e, t) {
  yr(), t.intro = t.intro ?? !1;
  const r = t.target, l = O, a = P;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Le(r)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== kr); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ Je(i);
    if (!i)
      throw vt;
    ht(!0), We(
      /** @type {Comment} */
      i
    ), pt();
    const s = bl(e, { ...t, anchor: i });
    if (P === null || P.nodeType !== 8 || /** @type {Comment} */
    P.data !== Vn)
      throw rr(), vt;
    return ht(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === vt)
      return t.recover === !1 && Fa(), yr(), Ja(r), ht(!1), ml(e, t);
    throw s;
  } finally {
    ht(l), We(a);
  }
}
const dt = /* @__PURE__ */ new Map();
function bl(e, { target: t, anchor: r, props: l = {}, events: a, context: i, intro: s = !0 }) {
  yr();
  var c = /* @__PURE__ */ new Set(), f = (v) => {
    for (var h = 0; h < v.length; h++) {
      var m = v[h];
      if (!c.has(m)) {
        c.add(m);
        var A = vi(m);
        t.addEventListener(m, $t, { passive: A });
        var T = dt.get(m);
        T === void 0 ? (document.addEventListener(m, $t, { passive: A }), dt.set(m, 1)) : dt.set(m, T + 1);
      }
    }
  };
  f(Aa(_l)), Cr.add(f);
  var d = void 0, p = ci(() => {
    var v = r ?? t.appendChild(nr());
    return Xt(() => {
      if (i) {
        dl({});
        var h = (
          /** @type {ComponentContext} */
          re
        );
        h.c = i;
      }
      a && (l.$$events = a), O && Re(
        /** @type {TemplateNode} */
        v,
        null
      ), d = e(v, l) || {}, O && (D.nodes_end = P), i && hl();
    }), () => {
      var A;
      for (var h of c) {
        t.removeEventListener(h, $t);
        var m = (
          /** @type {number} */
          dt.get(h)
        );
        --m === 0 ? (document.removeEventListener(h, $t), dt.delete(h)) : dt.set(h, m);
      }
      Cr.delete(f), v !== r && ((A = v.parentNode) == null || A.removeChild(v));
    };
  });
  return Ar.set(d, p), d;
}
let Ar = /* @__PURE__ */ new WeakMap();
function yi(e, t) {
  const r = Ar.get(e);
  return r ? (Ar.delete(e), r(t)) : Promise.resolve();
}
function J(e, t, [r, l] = [0, 0]) {
  O && r === 0 && pt();
  var a = e, i = null, s = null, c = oe, f = r > 0 ? Ir : 0, d = !1;
  const p = (h, m = !0) => {
    d = !0, v(m, h);
  }, v = (h, m) => {
    if (c === (c = h)) return;
    let A = !1;
    if (O && l !== -1) {
      if (r === 0) {
        const F = (
          /** @type {Comment} */
          a.data
        );
        F === kr ? l = 0 : F === Fn ? l = 1 / 0 : (l = parseInt(F.substring(1)), l !== l && (l = c ? 1 / 0 : -1));
      }
      const T = l > r;
      !!c === T && (a = za(), We(a), ht(!1), A = !0, l = -1);
    }
    c ? (i ? Rn(i) : m && (i = Xt(() => m(a))), s && Er(s, () => {
      s = null;
    })) : (s ? Rn(s) : m && (s = Xt(() => m(a, [r + 1, l]))), i && Er(i, () => {
      i = null;
    })), A && ht(!0);
  };
  Lr(() => {
    d = !1, t(p), d || v(null, null);
  }, f), O && (a = P);
}
function et(e, t, r, l, a) {
  var i = e, s = "", c;
  Lr(() => {
    if (s === (s = t() ?? "")) {
      O && pt();
      return;
    }
    c !== void 0 && (Pe(c), c = void 0), s !== "" && (c = Xt(() => {
      if (O) {
        P.data;
        for (var f = pt(), d = f; f !== null && (f.nodeType !== 8 || /** @type {Comment} */
        f.data !== ""); )
          d = f, f = /** @type {TemplateNode} */
          /* @__PURE__ */ Je(f);
        if (f === null)
          throw rr(), vt;
        Re(P, d), i = We(f);
        return;
      }
      var p = s + "", v = Pr(p);
      Re(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Le(v),
        /** @type {TemplateNode} */
        v.lastChild
      ), i.before(v);
    }));
  });
}
function xi(e, t, r, l, a) {
  var c;
  O && pt();
  var i = (c = t.$$slots) == null ? void 0 : c[r], s = !1;
  i === !0 && (i = t.children, s = !0), i === void 0 || i(e, s ? () => l : l);
}
function Ei(e, t) {
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
      const a = document.createElement("style");
      a.id = t.hash, a.textContent = t.code, l.appendChild(a);
    }
  });
}
const Sn = [...` 	
\r\f \v\uFEFF`];
function Ci(e, t, r) {
  var l = "" + e;
  if (r) {
    for (var a in r)
      if (r[a])
        l = l ? l + " " + a : a;
      else if (l.length)
        for (var i = a.length, s = 0; (s = l.indexOf(a, s)) >= 0; ) {
          var c = s + i;
          (s === 0 || Sn.includes(l[s - 1])) && (c === l.length || Sn.includes(l[c])) ? l = (s === 0 ? "" : l.substring(0, s)) + l.substring(c + 1) : s = c;
        }
  }
  return l === "" ? null : l;
}
function Ai(e, t, r, l, a, i) {
  var s = e.__className;
  if (O || s !== r) {
    var c = Ci(r, l, i);
    (!O || c !== e.getAttribute("class")) && (c == null ? e.removeAttribute("class") : e.className = c), e.__className = r;
  } else if (i && a !== i)
    for (var f in i) {
      var d = !!i[f];
      (a == null || d !== !!a[f]) && e.classList.toggle(f, d);
    }
  return i;
}
const ki = Symbol("is custom element"), Ri = Symbol("is html");
function Nn(e) {
  if (O) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var l = e.value;
          $(e, "value", null), e.value = l;
        }
        if (e.hasAttribute("checked")) {
          var a = e.checked;
          $(e, "checked", null), e.checked = a;
        }
      }
    };
    e.__on_r = r, Na(r), gl();
  }
}
function Ii(e, t) {
  var r = wl(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function $(e, t, r, l) {
  var a = wl(e);
  O && (a[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || a[t] !== (a[t] = r) && (t === "loading" && (e[Ea] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && $i(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function wl(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [ki]: e.nodeName.includes("-"),
      [Ri]: e.namespaceURI === wa
    })
  );
}
var Dn = /* @__PURE__ */ new Map();
function $i(e) {
  var t = Dn.get(e.nodeName);
  if (t) return t;
  Dn.set(e.nodeName, t = []);
  for (var r, l = e, a = Element.prototype; a !== l; ) {
    r = ka(l);
    for (var i in r)
      r[i].set && t.push(i);
    l = Bn(l);
  }
  return t;
}
function Si(e, t, r = t) {
  pi(e, "change", (l) => {
    var a = l ? e.defaultChecked : e.checked;
    r(a);
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
    var a, i;
    return Tr(() => {
      a = i, i = [], _t(() => {
        e !== r(...i) && (t(e, ...i), a && Tn(r(...a), e) && t(null, ...a));
      });
    }), () => {
      tr(() => {
        i && Tn(r(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function yl(e) {
  re === null && fl(), xr(() => {
    const t = _t(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Ni(e) {
  re === null && fl(), yl(() => () => _t(e));
}
let jt = !1;
function Di(e) {
  var t = jt;
  try {
    return jt = !1, [e(), jt];
  } finally {
    jt = t;
  }
}
function k(e, t, r, l) {
  var ye;
  var a = (r & va) !== 0, i = !0, s = (r & pa) !== 0, c = (r & _a) !== 0, f = !1, d;
  s ? [d, f] = Di(() => (
    /** @type {V} */
    e[t]
  )) : d = /** @type {V} */
  e[t];
  var p = St in e || jn in e, v = s && (((ye = tt(e, t)) == null ? void 0 : ye.set) ?? (p && t in e && ((j) => e[t] = j))) || void 0, h = (
    /** @type {V} */
    l
  ), m = !0, A = !1, T = () => (A = !0, m && (m = !1, c ? h = _t(
    /** @type {() => V} */
    l
  ) : h = /** @type {V} */
  l), h);
  d === void 0 && l !== void 0 && (v && i && Va(), d = T(), v && v(d));
  var F;
  if (F = () => {
    var j = (
      /** @type {V} */
      e[t]
    );
    return j === void 0 ? T() : (m = !0, A = !1, j);
  }, (r & ga) === 0)
    return F;
  if (v) {
    var se = e.$$legacy;
    return function(j, Q) {
      return arguments.length > 0 ? ((!Q || se || f) && v(Q ? F() : j), j) : F();
    };
  }
  var ne = !1, X = /* @__PURE__ */ Zn(d), ue = /* @__PURE__ */ Ye(() => {
    var j = F(), Q = o(X);
    return ne ? (ne = !1, Q) : X.v = j;
  });
  return a || (ue.equals = $r), function(j, Q) {
    if (arguments.length > 0) {
      const Ve = Q ? o(ue) : s ? V(j) : j;
      return ue.equals(Ve) || (ne = !0, w(X, Ve), A && h !== void 0 && (h = Ve), _t(() => o(ue))), j;
    }
    return o(ue);
  };
}
function Ti(e) {
  return new Li(e);
}
var Te, ve;
class Li {
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
    var i;
    var r = /* @__PURE__ */ new Map(), l = (s, c) => {
      var f = /* @__PURE__ */ Zn(c);
      return r.set(s, f), f;
    };
    const a = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, c) {
          return o(r.get(c) ?? l(c, Reflect.get(s, c)));
        },
        has(s, c) {
          return c === jn ? !0 : (o(r.get(c) ?? l(c, Reflect.get(s, c))), Reflect.has(s, c));
        },
        set(s, c, f) {
          return w(r.get(c) ?? l(c, f), f), Reflect.set(s, c, f);
        }
      }
    );
    mr(this, ve, (t.hydrate ? wi : ml)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: a,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((i = t == null ? void 0 : t.props) != null && i.$$host) || t.sync === !1) && C(), mr(this, Te, a.$$events);
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
      Object.assign(a, s);
    }, ae(this, ve).$destroy = () => {
      yi(ae(this, ve));
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
    const l = (...a) => r.call(this, ...a);
    return ae(this, Te)[t].push(l), () => {
      ae(this, Te)[t] = ae(this, Te)[t].filter(
        /** @param {any} fn */
        (a) => a !== l
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
      const a = this.$$c.$on(t, r);
      this.$$l_u.set(r, a);
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
      const a = this.$$l_u.get(r);
      a && (a(), this.$$l_u.delete(r));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(a) {
        return (i) => {
          const s = document.createElement("slot");
          a !== "default" && (s.name = a), U(i, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, l = Pi(this);
      for (const a of this.$$s)
        a in l && (a === "default" && !this.$$d.children ? (this.$$d.children = t(a), r.default = !0) : r[a] = t(a));
      for (const a of this.attributes) {
        const i = this.$$g_p(a.name);
        i in this.$$d || (this.$$d[i] = Bt(i, a.value, this.$$p_d, "toProp"));
      }
      for (const a in this.$$p_d)
        !(a in this.$$d) && this[a] !== void 0 && (this.$$d[a] = this[a], delete this[a]);
      this.$$c = Ti({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = ui(() => {
        Tr(() => {
          var a;
          this.$$r = !0;
          for (const i of Gt(this.$$c)) {
            if (!((a = this.$$p_d[i]) != null && a.reflect)) continue;
            this.$$d[i] = this.$$c[i];
            const s = Bt(
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
      for (const a in this.$$l)
        for (const i of this.$$l[a]) {
          const s = this.$$c.$on(a, i);
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
  attributeChangedCallback(t, r, l) {
    var a;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Bt(t, l, this.$$p_d, "toProp"), (a = this.$$c) == null || a.$set({ [t]: this.$$d[t] }));
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
  var i;
  const a = (i = r[e]) == null ? void 0 : i.type;
  if (t = a === "Boolean" && typeof t != "boolean" ? t != null : t, !l || !r[e])
    return t;
  if (l === "toAttribute")
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
function Pi(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function Oi(e, t, r, l, a, i) {
  let s = class extends xl {
    constructor() {
      super(e, r, a), this.$$p_d = t;
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
          var p = (v = tt(d, c)) == null ? void 0 : v.get;
          p ? d[c] = f : d.$set({ [c]: f });
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
const El = new TextEncoder();
function Fi(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function Vi(e, t = "SHA-256", r = 1e5) {
  const l = Date.now().toString(16);
  e || (e = Math.round(Math.random() * r));
  const a = await Cl(l, e, t);
  return {
    algorithm: t,
    challenge: a,
    salt: l,
    signature: ""
  };
}
async function Cl(e, t, r) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return Fi(
    await crypto.subtle.digest(
      r.toUpperCase(),
      El.encode(e + t)
    )
  );
}
function Mi(e, t, r = "SHA-256", l = 1e6, a = 0) {
  const i = new AbortController(), s = Date.now();
  return {
    promise: (async () => {
      for (let f = a; f <= l; f += 1) {
        if (i.signal.aborted)
          return null;
        if (await Cl(t, f, r) === e)
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
function Ln() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function Ui(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let l = 0; l < t.length; l++)
    r[l] = t.charCodeAt(l);
  return r;
}
function ji(e, t = 12) {
  const r = new Uint8Array(t);
  for (let l = 0; l < t; l++)
    r[l] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function qi(e, t = "", r = 1e6, l = 0) {
  const a = "AES-GCM", i = new AbortController(), s = Date.now(), c = async () => {
    for (let p = l; p <= r; p += 1) {
      if (i.signal.aborted || !f || !d)
        return null;
      try {
        const v = await crypto.subtle.decrypt(
          {
            name: a,
            iv: ji(p)
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
    d = Ui(e);
    const p = await crypto.subtle.digest(
      "SHA-256",
      El.encode(t)
    );
    f = await crypto.subtle.importKey(
      "raw",
      p,
      a,
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
var x = /* @__PURE__ */ ((e) => (e.CODE = "code", e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(x || {}), K = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.LOADING = "loading", e.PLAYING = "playing", e.PAUSED = "paused", e.READY = "ready", e))(K || {});
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  register: (e, t) => {
    globalThis.altchaI18n[e] = t;
  }
};
const Bi = {
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
globalThis.altchaI18n.register("en", Bi);
const wr = (e, t) => {
  let r = /* @__PURE__ */ Ga(() => $a(t == null ? void 0 : t(), 24));
  var l = Wi();
  Ne(() => {
    $(l, "width", o(r)), $(l, "height", o(r));
  }), U(e, l);
};
function Hi(e, t) {
  e.code === "Space" && (e.preventDefault(), e.stopImmediatePropagation(), t());
}
function Yi(e, t) {
  e.preventDefault(), t();
}
function Gi(e, t, r, l, a, i, s, c) {
  var f;
  [
    x.UNVERIFIED,
    x.ERROR,
    x.EXPIRED,
    x.CODE
  ].includes(o(t)) ? r() !== !1 && ((f = o(l)) == null ? void 0 : f.reportValidity()) === !1 ? w(a, !1) : i() ? s() : c() : w(a, !0);
}
var Wi = /* @__PURE__ */ ir('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="svelte-16ux7p0"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25" class="svelte-16ux7p0"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor" class="altcha-spinner svelte-16ux7p0"></path></svg>'), Zi = /* @__PURE__ */ we('<input type="hidden" class="svelte-16ux7p0">'), zi = /* @__PURE__ */ we('<div class="svelte-16ux7p0"><a target="_blank" class="altcha-logo svelte-16ux7p0" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-16ux7p0"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor" class="svelte-16ux7p0"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor" class="svelte-16ux7p0"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor" class="svelte-16ux7p0"></path></svg></a></div>'), Ji = /* @__PURE__ */ ir('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-16ux7p0"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z" class="svelte-16ux7p0"></path></svg>'), Ki = /* @__PURE__ */ ir('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-16ux7p0"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z" class="svelte-16ux7p0"></path></svg>'), Xi = /* @__PURE__ */ ir('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-16ux7p0"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z" class="svelte-16ux7p0"></path></svg>'), Qi = /* @__PURE__ */ we('<button type="button" class="altcha-code-challenge-audio svelte-16ux7p0"><!></button>'), eo = /* @__PURE__ */ we('<audio hidden autoplay class="svelte-16ux7p0"><source class="svelte-16ux7p0"></audio>'), to = /* @__PURE__ */ we('<div class="altcha-code-challenge svelte-16ux7p0" role="dialog"><div class="altcha-code-challenge-arrow svelte-16ux7p0"></div> <form data-code-challenge-form="1" class="svelte-16ux7p0"><img class="altcha-code-challenge-image svelte-16ux7p0" alt=""> <input type="text" autocomplete="off" name="code" class="altcha-code-challenge-input svelte-16ux7p0" required> <div class="altcha-code-challenge-buttons svelte-16ux7p0"><div class="altcha-code-challenge-buttons-left svelte-16ux7p0"><!> <button type="button" class="altcha-code-challenge-reload svelte-16ux7p0"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-16ux7p0"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z" class="svelte-16ux7p0"></path></svg></button></div> <button type="submit" class="altcha-code-challenge-verify svelte-16ux7p0"><!> </button></div> <!></form></div>'), ro = /* @__PURE__ */ we('<div class="svelte-16ux7p0"><!></div>'), no = /* @__PURE__ */ we('<div class="svelte-16ux7p0"><!></div>'), lo = /* @__PURE__ */ we('<div class="altcha-error svelte-16ux7p0"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="svelte-16ux7p0"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" class="svelte-16ux7p0"></path></svg> <!></div>'), ao = /* @__PURE__ */ we('<div class="altcha-footer svelte-16ux7p0"><div class="svelte-16ux7p0"><!></div></div>'), io = /* @__PURE__ */ we('<div class="altcha-anchor-arrow svelte-16ux7p0"></div>'), oo = /* @__PURE__ */ we('<!> <div class="altcha svelte-16ux7p0"><div class="altcha-main svelte-16ux7p0"><div><!> <input type="checkbox" class="svelte-16ux7p0"></div> <label class="altcha-label svelte-16ux7p0"><!></label> <!> <!> <!></div> <!> <!> <!></div>', 1);
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
  dl(t, !0), Ei(e, so);
  let r = k(t, "auto", 7, void 0), l = k(t, "blockspam", 7, void 0), a = k(t, "challengeurl", 7, void 0), i = k(t, "challengejson", 7, void 0), s = k(t, "credentials", 7, void 0), c = k(t, "customfetch", 7, void 0), f = k(t, "debug", 7, !1), d = k(t, "delay", 7, 0), p = k(t, "disableautofocus", 7, !1), v = k(t, "expire", 7, void 0), h = k(t, "floating", 7, void 0), m = k(t, "floatinganchor", 7, void 0), A = k(t, "floatingoffset", 7, void 0), T = k(t, "floatingpersist", 7, !1), F = k(t, "hidefooter", 7, !1), se = k(t, "hidelogo", 7, !1), ne = k(t, "id", 7, void 0), X = k(t, "language", 7, void 0), ue = k(t, "name", 7, "altcha"), ye = k(t, "maxnumber", 7, 1e6), j = k(t, "mockerror", 7, !1), Q = k(t, "obfuscated", 7, void 0), Ve = k(t, "plugins", 7, void 0), bt = k(t, "refetchonexpire", 7, !0), Ke = k(t, "sentinel", 7, void 0), xe = k(t, "spamfilter", 7, !1), at = k(t, "strings", 7, void 0), he = k(t, "test", 7, !1), ce = k(t, "verifyurl", 7, void 0), it = k(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), wt = k(t, "workerurl", 7, void 0);
  const Or = ["SHA-256", "SHA-384", "SHA-512"], Al = "https://altcha.org/", Me = (n, u) => {
    t.$$host.dispatchEvent(new CustomEvent(n, { detail: u }));
  }, Fr = (mn = (_n = document.documentElement.lang) == null ? void 0 : _n.split("-")) == null ? void 0 : mn[0], or = /* @__PURE__ */ Ye(() => {
    var n;
    return a() && new URL(a(), location.origin).host.endsWith(".altcha.org") && !!((n = a()) != null && n.includes("apiKey=ckey_"));
  }), sr = /* @__PURE__ */ Ye(() => i() ? Kr(i()) : void 0), kl = /* @__PURE__ */ Ye(() => at() ? Kr(at()) : {}), L = /* @__PURE__ */ Ye(() => ({
    ...Ur(),
    ...o(kl)
  })), Vr = /* @__PURE__ */ Ye(() => ne() || `${ue()}_checkbox_${Math.round(Math.random() * 1e8)}`);
  let yt = ie(!1), H = ie(null), R = ie(V(x.UNVERIFIED)), ee = ie(void 0), xt = ie(null), Ue = ie(null), ur = ie(null), ot = ie(null), M = ie(null), Xe = ie(null), Ee = null, Y = ie(null), Qe = ie(!1), je = [], cr = ie(!1), $e = ie(null);
  xr(() => {
    Ml(o(Xe));
  }), xr(() => {
    Ul(o(R));
  }), Ni(() => {
    Rl(), o(M) && (o(M).removeEventListener("submit", Gr), o(M).removeEventListener("reset", Wr), o(M).removeEventListener("focusin", Yr), w(M, null)), Ee && (clearTimeout(Ee), Ee = null), document.removeEventListener("click", Br), document.removeEventListener("scroll", Hr), window.removeEventListener("resize", Jr);
  }), yl(() => {
    var n;
    S("mounted", "2.0.0-beta.3"), S("workers", it()), Nl(), S("plugins", je.length ? je.map((u) => u.constructor.pluginName).join(", ") : "none"), he() && S("using test mode"), v() && fr(v()), r() !== void 0 && S("auto", r()), h() !== void 0 && Qr(h()), w(M, V((n = o(ee)) == null ? void 0 : n.closest("form"))), o(M) && (o(M).addEventListener("submit", Gr, { capture: !0 }), o(M).addEventListener("reset", Wr), (r() === "onfocus" || T() === "focus") && o(M).addEventListener("focusin", Yr)), r() === "onload" && (Q() ? Et() : Se()), o(or) && (F() || se()) && S("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      Me("load");
    });
  });
  function Pt(n, u) {
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
  function Rl() {
    for (const n of je)
      n.destroy();
  }
  function Mr() {
    a() && bt() && o(R) === x.VERIFIED ? Se() : st(x.EXPIRED, o(L).expired);
  }
  async function Il() {
    var n;
    if (j())
      throw S("mocking error"), new Error("Mocked error.");
    if (o(sr))
      return S("using provided json data"), o(sr);
    if (he())
      return S("generating test challenge", { test: he() }), Vi(typeof he() != "boolean" ? +he() : void 0);
    {
      if (!a() && o(M)) {
        const E = o(M).getAttribute("action");
        E != null && E.includes("/form/") && a(E + "/altcha");
      }
      if (!a())
        throw new Error("Attribute challengeurl not set.");
      S("fetching challenge from", a());
      let u = null, g = null;
      if (c())
        if (S("using customfetch"), typeof c() == "string") {
          if (u = globalThis[c()] || null, !u)
            throw new Error(`Custom fetch function not found: ${c()}`);
        } else
          u = c();
      const b = {
        credentials: typeof s() == "boolean" ? "include" : s(),
        headers: xe() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      };
      if (u) {
        if (g = await u(a(), b), !g || !(g instanceof Response))
          throw new Error("Custom fetch function did not return a response.");
      } else
        g = await fetch(a(), b);
      if (g.status !== 200)
        throw new Error(`Server responded with ${g.status}.`);
      const _ = g.headers.get("X-Altcha-Config"), I = await g.json(), y = new URLSearchParams((n = I.salt.split("?")) == null ? void 0 : n[1]), q = y.get("expires") || y.get("expire");
      if (q) {
        const E = new Date(+q * 1e3), B = isNaN(E.getTime()) ? 0 : E.getTime() - Date.now();
        B > 0 && fr(B);
      }
      if (_)
        try {
          const E = JSON.parse(_);
          E && typeof E == "object" && (E.verifyurl && (E.verifyurl = qr(E.verifyurl)), rn(E));
        } catch (E) {
          S("unable to configure from X-Altcha-Config", E);
        }
      return I;
    }
  }
  function $l(n) {
    var g, b;
    const u = (g = o(M)) == null ? void 0 : g.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((b = u == null ? void 0 : u.value) == null ? void 0 : b.slice(u.value.indexOf("@"))) || void 0;
  }
  function Ur(n = [
    X() || "",
    document.documentElement.lang || "",
    ...navigator.languages
  ]) {
    const u = Object.keys(globalThis.altchaI18n).map((b) => b.toLowerCase()), g = n.reduce(
      (b, _) => (_ = _.toLowerCase(), b || (globalThis.altchaI18n[_] ? _ : null) || u.find((I) => _.split("-")[0] === I.split("-")[0]) || null),
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
      ...((g = o(M)) == null ? void 0 : g.querySelectorAll(n != null && n.length ? n.map((b) => `input[name="${b}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (b, _) => {
        const I = _.name, y = _.value;
        return I && y && (b[I] = /\n/.test(y) ? y.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : y), b;
      },
      {}
    );
  }
  function qr(n) {
    const u = new URL(a() || location.origin), g = new URL(n, u);
    return g.search || (g.search = u.search), g.toString();
  }
  function Nl() {
    const n = Ve() !== void 0 ? Ve().split(",") : void 0;
    for (const u of globalThis.altchaPlugins)
      (!n || n.includes(u.pluginName)) && je.push(new u({
        el: o(ee),
        clarify: Et,
        dispatch: Me,
        getConfiguration: nn,
        getFloatingAnchor: ln,
        getState: an,
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
  function Dl() {
    w(Y, V(K.PAUSED));
  }
  function Tl(n) {
    w(Y, V(K.ERROR));
  }
  function Ll() {
    w(Y, V(K.READY));
  }
  function Pl() {
    w(Y, V(K.LOADING));
  }
  function Ol() {
    w(Y, V(K.PLAYING));
  }
  function Fl() {
    w(Y, V(K.PAUSED));
  }
  function Vl(n) {
    if (n.preventDefault(), n.stopPropagation(), o(H)) {
      const u = new FormData(n.target);
      w(Qe, !0), Xr(Pt(o(H).challenge, o(H).solution), String(u.get("code"))).then(({ reason: g, verified: b }) => {
        b ? (w(H, null), Ce(x.VERIFIED), S("verified"), br().then(() => {
          var _;
          (_ = o(ur)) == null || _.focus(), Me("verified", { payload: o($e) });
        })) : (st(), w(Xe, V(g || "Verification failed")));
      }).catch((g) => {
        w(H, null), Ce(x.ERROR, g), S("sentinel verification failed:", g);
      }).finally(() => {
        w(Qe, !1);
      });
    }
  }
  function Br(n) {
    var g;
    const u = n.target;
    h() && u && !o(ee).contains(u) && (o(R) === x.VERIFIED && T() === !1 || o(R) === x.VERIFIED && T() === "focus" && !((g = o(M)) != null && g.matches(":focus-within")) || r() === "off" && o(R) === x.UNVERIFIED) && on();
  }
  function Hr() {
    h() && o(R) !== x.UNVERIFIED && Ct();
  }
  function Ml(n) {
    for (const u of je)
      typeof u.onErrorChange == "function" && u.onErrorChange(o(Xe));
  }
  function Yr(n) {
    o(R) === x.UNVERIFIED ? Se() : h() && T() === "focus" && o(R) === x.VERIFIED && dr();
  }
  function Gr(n) {
    const u = n.target, g = n.submitter;
    u != null && u.hasAttribute("data-code-challenge-form") || (o(M) && r() === "onsubmit" ? o(R) === x.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), Se().then(() => {
      var _;
      g && ["INPUT", "BUTTON"].includes(g.tagName) && g.getAttribute("name") ? g.click() : (_ = o(M)) == null || _.requestSubmit();
    })) : o(R) !== x.VERIFIED && (n.preventDefault(), n.stopPropagation(), o(R) === x.VERIFYING && Zr()) : o(M) && h() && r() === "off" && o(R) === x.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), dr()));
  }
  function Wr() {
    st();
  }
  function Zr() {
    o(R) === x.VERIFYING && o(L).waitAlert && alert(o(L).waitAlert);
  }
  function zr() {
    o(Ue) ? o(Ue).paused ? (o(Ue).currentTime = 0, o(Ue).play()) : o(Ue).pause() : (w(cr, !0), requestAnimationFrame(() => {
      var n;
      (n = o(Ue)) == null || n.play();
    }));
  }
  function Ul(n) {
    for (const u of je)
      typeof u.onStateChange == "function" && u.onStateChange(o(R));
    h() && o(R) !== x.UNVERIFIED && requestAnimationFrame(() => {
      Ct();
    }), w(yt, o(R) === x.VERIFIED);
  }
  function Jr() {
    h() && Ct();
  }
  function Kr(n) {
    return JSON.parse(n);
  }
  async function jl(n) {
    if (!ce())
      throw new Error("Attribute verifyurl not set.");
    S("requesting server verification from", ce());
    const u = { payload: n };
    if (xe() !== !1) {
      const {
        blockedCountries: _,
        classifier: I,
        disableRules: y,
        email: q,
        expectedLanguages: E,
        expectedCountries: B,
        fields: le,
        ipAddress: Be,
        text: vr,
        timeZone: Ft
      } = Sl();
      u.blockedCountries = _, u.classifier = I, u.disableRules = y, u.email = q === !1 ? void 0 : $l(q), u.expectedCountries = B, u.expectedLanguages = E || (Fr ? [Fr] : void 0), u.fields = le === !1 ? void 0 : jr(le), u.ipAddress = Be === !1 ? void 0 : Be || "auto", u.text = vr, u.timeZone = Ft === !1 ? void 0 : Ft || Ln();
    }
    const g = await fetch(ce(), {
      body: JSON.stringify(u),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (g.status !== 200)
      throw new Error(`Server responded with ${g.status}.`);
    const b = await g.json();
    if (b != null && b.payload && w($e, V(b.payload)), Me("serververification", b), l() && b.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  async function Xr(n, u) {
    if (!ce())
      throw new Error("Attribute verifyurl not set.");
    S("requesting sentinel verification from", ce());
    const g = { code: u, payload: n };
    Ke() && (g.fields = Ke().fields ? jr() : void 0, g.timeZone = Ke().timeZone ? Ln() : void 0);
    const b = await fetch(ce(), {
      body: JSON.stringify(g),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (b.status !== 200)
      throw new Error(`Server responded with ${b.status}.`);
    const _ = await b.json();
    return _ != null && _.payload && w($e, V(_.payload)), Me("sentinelverification", _), _;
  }
  function fr(n) {
    S("expire", n), Ee && (clearTimeout(Ee), Ee = null), n < 1 ? Mr() : Ee = setTimeout(Mr, n);
  }
  function Qr(n) {
    S("floating", n), h() !== n && (o(ee).style.left = "", o(ee).style.top = ""), h(n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : h()), h() ? (r() || r("onsubmit"), document.addEventListener("scroll", Hr), document.addEventListener("click", Br), window.addEventListener("resize", Jr)) : r() === "onsubmit" && r(void 0);
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
    let u = null;
    if ("Worker" in window) {
      try {
        u = await ql(n, n.maxNumber || n.maxnumber || ye());
      } catch (g) {
        S(g);
      }
      if ((u == null ? void 0 : u.number) !== void 0 || "obfuscated" in n)
        return { data: n, solution: u };
    }
    if ("obfuscated" in n) {
      const g = await qi(n.obfuscated, n.key, n.maxNumber || n.maxnumber);
      return { data: n, solution: await g.promise };
    }
    return {
      data: n,
      solution: await Mi(n.challenge, n.salt, n.algorithm, n.maxNumber || n.maxnumber || ye()).promise
    };
  }
  async function ql(n, u = typeof he() == "number" ? he() : n.maxNumber || n.maxnumber || ye(), g = Math.ceil(it())) {
    const b = [];
    g = Math.min(16, u, Math.max(1, g));
    for (let y = 0; y < g; y++)
      b.push(altchaCreateWorker(wt()));
    const _ = Math.ceil(u / g), I = await Promise.all(b.map((y, q) => {
      const E = q * _;
      return new Promise((B) => {
        y.addEventListener("message", (le) => {
          if (le.data)
            for (const Be of b)
              Be !== y && Be.postMessage({ type: "abort" });
          B(le.data);
        }), y.postMessage({
          payload: n,
          max: E + _,
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
      Ce(x.ERROR);
      return;
    }
    const n = je.find((u) => u.constructor.pluginName === "obfuscation");
    if (!n || !("clarify" in n)) {
      Ce(x.ERROR), S("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in n && typeof n.clarify == "function")
      return n.clarify();
  }
  function rn(n) {
    n.obfuscated !== void 0 && Q(n.obfuscated), n.auto !== void 0 && (r(n.auto), r() === "onload" && (Q() ? Et() : Se())), n.blockspam !== void 0 && l(!!n.blockspam), n.customfetch !== void 0 && c(n.customfetch), n.floatinganchor !== void 0 && m(n.floatinganchor), n.delay !== void 0 && d(n.delay), n.floatingoffset !== void 0 && A(n.floatingoffset), n.floating !== void 0 && Qr(n.floating), n.expire !== void 0 && (fr(n.expire), v(n.expire)), n.challenge && (i(typeof n.challenge == "string" ? n.challenge : JSON.stringify(n.challenge)), en(o(sr))), n.challengeurl !== void 0 && a(n.challengeurl), n.debug !== void 0 && f(!!n.debug), n.hidefooter !== void 0 && F(!!n.hidefooter), n.hidelogo !== void 0 && se(!!n.hidelogo), n.language !== void 0 && at(Ur([n.language])), n.maxnumber !== void 0 && ye(+n.maxnumber), n.mockerror !== void 0 && j(!!n.mockerror), n.name !== void 0 && ue(n.name), n.refetchonexpire !== void 0 && bt(!!n.refetchonexpire), n.sentinel !== void 0 && typeof n.sentinel == "object" && Ke(n.sentinel), n.spamfilter !== void 0 && xe(typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && at(typeof n.strings == "string" ? n.strings : JSON.stringify(n.strings)), n.test !== void 0 && he(typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && ce(n.verifyurl), n.workers !== void 0 && it(+n.workers), n.workerurl !== void 0 && wt(n.workerurl);
  }
  function nn() {
    return {
      auto: r(),
      blockspam: l(),
      challengeurl: a(),
      debug: f(),
      delay: d(),
      expire: v(),
      floating: h(),
      floatinganchor: m(),
      floatingoffset: A(),
      hidefooter: F(),
      hidelogo: se(),
      name: ue(),
      maxnumber: ye(),
      mockerror: j(),
      obfuscated: Q(),
      refetchonexpire: bt(),
      spamfilter: xe(),
      strings: o(L),
      test: he(),
      verifyurl: ce(),
      workers: it(),
      workerurl: wt()
    };
  }
  function ln() {
    return o(ot);
  }
  function Bl(n) {
    return je.find((u) => u.constructor.pluginName === n);
  }
  function an() {
    return o(R);
  }
  function on() {
    o(ee).style.display = "none";
  }
  function Ct(n = 20) {
    var u;
    if (o(ee))
      if (o(ot) || w(ot, V((m() ? document.querySelector(m()) : (u = o(M)) == null ? void 0 : u.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || o(M))), o(ot)) {
        const g = parseInt(A(), 10) || 12, b = o(ot).getBoundingClientRect(), _ = o(ee).getBoundingClientRect(), I = document.documentElement.clientHeight, y = document.documentElement.clientWidth, q = h() === "auto" ? b.bottom + _.height + g + n > I : h() === "top", E = Math.max(n, Math.min(y - n - _.width, b.left + b.width / 2 - _.width / 2));
        if (q ? o(ee).style.top = `${b.top - (_.height + g)}px` : o(ee).style.top = `${b.bottom + g}px`, o(ee).style.left = `${E}px`, o(ee).setAttribute("data-floating", q ? "top" : "bottom"), o(xt)) {
          const B = o(xt).getBoundingClientRect();
          o(xt).style.left = b.left - E + b.width / 2 - B.width / 2 + "px";
        }
      } else
        S("unable to find floating anchor element");
  }
  function st(n = x.UNVERIFIED, u = null) {
    Ee && (clearTimeout(Ee), Ee = null), w(yt, !1), w($e, null), w(H, null), w(cr, !1), w(Y, null), Ce(n, u);
  }
  function sn(n) {
    w(ot, V(n));
  }
  function Ce(n, u = null) {
    w(R, V(n)), w(Xe, V(u)), Me("statechange", {
      payload: o($e),
      state: o(R)
    });
  }
  function dr() {
    o(ee).style.display = "block", h() && Ct();
  }
  async function Se() {
    return st(x.VERIFYING), await new Promise((n) => setTimeout(n, d() || 0)), Il().then((n) => (en(n), S("challenge", n), tn(n))).then(({ data: n, solution: u }) => {
      var g;
      if (S("solution", u), !u || n && "challenge" in n && !("clearText" in u))
        if ((u == null ? void 0 : u.number) !== void 0 && "challenge" in n)
          if (ce() && "codeChallenge" in n)
            ((g = document.activeElement) == null ? void 0 : g.tagName) === "INPUT" && p() === !1 && document.activeElement.blur(), w(H, V({ challenge: n, solution: u }));
          else {
            if (ce() && Ke() !== void 0)
              return Xr(Pt(n, u));
            if (ce())
              return jl(Pt(n, u));
            w($e, V(Pt(n, u))), S("payload", o($e));
          }
        else
          throw S("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      o(H) ? (Ce(x.CODE), br().then(() => {
        Me("code", { codeChallenge: o(H) });
      })) : (Ce(x.VERIFIED), S("verified"), br().then(() => {
        Me("verified", { payload: o($e) });
      }));
    }).catch((n) => {
      S(n), Ce(x.ERROR, n.message);
    });
  }
  var un = oo(), cn = It(un);
  xi(cn, t, "default", {});
  var At = z(cn, 2), hr = Z(At), Ot = Z(hr);
  let fn;
  var dn = Z(Ot);
  {
    var Hl = (n) => {
      wr(n);
    };
    J(dn, (n) => {
      o(R) === x.VERIFYING && n(Hl);
    });
  }
  var qe = z(dn, 2);
  Nn(qe), qe.__change = [
    Gi,
    R,
    xe,
    M,
    yt,
    Q,
    Et,
    Se
  ], Ut(qe, (n) => w(ur, n), () => o(ur)), W(Ot);
  var kt = z(Ot, 2), Yl = Z(kt);
  {
    var Gl = (n) => {
      var u = Mt(), g = It(u);
      et(g, () => o(L).verified), U(n, u);
    }, Wl = (n, u) => {
      {
        var g = (_) => {
          var I = Mt(), y = It(I);
          et(y, () => o(L).verifying), U(_, I);
        }, b = (_, I) => {
          {
            var y = (E) => {
              var B = Mt(), le = It(B);
              et(le, () => o(L).verificationRequired), U(E, B);
            }, q = (E) => {
              var B = Mt(), le = It(B);
              et(le, () => o(L).label), U(E, B);
            };
            J(
              _,
              (E) => {
                o(R) === x.CODE ? E(y) : E(q, !1);
              },
              I
            );
          }
        };
        J(
          n,
          (_) => {
            o(R) === x.VERIFYING ? _(g) : _(b, !1);
          },
          u
        );
      }
    };
    J(Yl, (n) => {
      o(R) === x.VERIFIED ? n(Gl) : n(Wl, !1);
    });
  }
  W(kt);
  var hn = z(kt, 2);
  {
    var Zl = (n) => {
      var u = Zi();
      Nn(u), Ne(() => {
        $(u, "name", ue()), Ii(u, o($e));
      }), U(n, u);
    };
    J(hn, (n) => {
      o(R) === x.VERIFIED && n(Zl);
    });
  }
  var vn = z(hn, 2);
  {
    var zl = (n) => {
      var u = zi(), g = Z(u);
      $(g, "href", Al), W(u), Ne(() => $(g, "aria-label", o(L).ariaLinkLabel)), U(n, u);
    };
    J(vn, (n) => {
      (se() !== !0 || o(or)) && n(zl);
    });
  }
  var Jl = z(vn, 2);
  {
    var Kl = (n) => {
      var u = to(), g = z(Z(u), 2), b = Z(g), _ = z(b, 2);
      gi(_, !p()), _.__keydown = [
        Hi,
        zr
      ];
      var I = z(_, 2), y = Z(I), q = Z(y);
      {
        var E = (pe) => {
          var G = Qi();
          G.__click = zr;
          var Vt = Z(G);
          {
            var Rt = (ut) => {
              wr(ut, () => 20);
            }, la = (ut, aa) => {
              {
                var ia = (ct) => {
                  var gr = Ji();
                  U(ct, gr);
                }, oa = (ct, gr) => {
                  {
                    var sa = (ft) => {
                      var pr = Ki();
                      U(ft, pr);
                    }, ua = (ft) => {
                      var pr = Xi();
                      U(ft, pr);
                    };
                    J(
                      ct,
                      (ft) => {
                        o(Y) === K.PLAYING ? ft(sa) : ft(ua, !1);
                      },
                      gr
                    );
                  }
                };
                J(
                  ut,
                  (ct) => {
                    o(Y) === K.ERROR ? ct(ia) : ct(oa, !1);
                  },
                  aa
                );
              }
            };
            J(Vt, (ut) => {
              o(Y) === K.LOADING ? ut(Rt) : ut(la, !1);
            });
          }
          W(G), Ne(() => {
            $(G, "title", o(L).getAudioChallenge), G.disabled = o(Y) === K.LOADING || o(Y) === K.ERROR || o(Qe), $(G, "aria-label", o(Y) === K.LOADING ? o(L).loading : o(L).getAudioChallenge);
          }), U(pe, G);
        };
        J(q, (pe) => {
          o(H).challenge.codeChallenge.audio && pe(E);
        });
      }
      var B = z(q, 2);
      B.__click = [Yi, Se], W(y);
      var le = z(y, 2), Be = Z(le);
      {
        var vr = (pe) => {
          wr(pe, () => 16);
        };
        J(Be, (pe) => {
          o(Qe) && pe(vr);
        });
      }
      var Ft = z(Be);
      W(le), W(I);
      var ra = z(I, 2);
      {
        var na = (pe) => {
          var G = eo(), Vt = Z(G);
          W(G), Ut(G, (Rt) => w(Ue, Rt), () => o(Ue)), Ne((Rt) => $(Vt, "src", Rt), [
            () => qr(o(H).challenge.codeChallenge.audio)
          ]), He("loadstart", G, Pl), He("canplay", G, Ll), He("pause", G, Fl), He("playing", G, Ol), He("ended", G, Dl), He("error", Vt, Tl), U(pe, G);
        };
        J(ra, (pe) => {
          o(H).challenge.codeChallenge.audio && o(cr) && pe(na);
        });
      }
      W(g), W(u), Ne(() => {
        $(u, "aria-label", o(L).verificationRequired), $(b, "src", o(H).challenge.codeChallenge.image), $(_, "minlength", o(H).challenge.codeChallenge.length || 1), $(_, "maxlength", o(H).challenge.codeChallenge.length), $(_, "placeholder", o(L).enterCode), $(_, "aria-label", o(Y) === K.LOADING ? o(L).loading : o(Y) === K.PLAYING ? "" : o(L).enterCodeAria), $(_, "aria-live", o(Y) ? "assertive" : "polite"), $(_, "aria-busy", o(Y) === K.LOADING), _.disabled = o(Qe), $(B, "aria-label", o(L).reload), $(B, "title", o(L).reload), B.disabled = o(Qe), le.disabled = o(Qe), $(le, "aria-label", o(L).verify), bi(Ft, ` ${o(L).verify ?? ""}`);
      }), He("submit", g, Vl, !0), U(n, u);
    };
    J(Jl, (n) => {
      var u;
      (u = o(H)) != null && u.challenge.codeChallenge && n(Kl);
    });
  }
  W(hr);
  var gn = z(hr, 2);
  {
    var Xl = (n) => {
      var u = lo(), g = z(Z(u), 2);
      {
        var b = (I) => {
          var y = ro(), q = Z(y);
          et(q, () => o(L).expired), W(y), Ne(() => $(y, "title", o(Xe))), U(I, y);
        }, _ = (I) => {
          var y = no(), q = Z(y);
          et(q, () => o(L).error), W(y), Ne(() => $(y, "title", o(Xe))), U(I, y);
        };
        J(g, (I) => {
          o(R) === x.EXPIRED ? I(b) : I(_, !1);
        });
      }
      W(u), U(n, u);
    };
    J(gn, (n) => {
      (o(Xe) || o(R) === x.EXPIRED) && n(Xl);
    });
  }
  var pn = z(gn, 2);
  {
    var Ql = (n) => {
      var u = ao(), g = Z(u), b = Z(g);
      et(b, () => o(L).footer), W(g), W(u), U(n, u);
    };
    J(pn, (n) => {
      o(L).footer && (F() !== !0 || o(or)) && n(Ql);
    });
  }
  var ea = z(pn, 2);
  {
    var ta = (n) => {
      var u = io();
      Ut(u, (g) => w(xt, g), () => o(xt)), U(n, u);
    };
    J(ea, (n) => {
      h() && n(ta);
    });
  }
  return W(At), Ut(At, (n) => w(ee, n), () => o(ee)), Ne(
    (n) => {
      var u;
      $(At, "data-state", o(R)), $(At, "data-floating", h()), fn = Ai(Ot, 1, "altcha-checkbox svelte-16ux7p0", null, fn, n), $(qe, "id", o(Vr)), qe.required = r() !== "onsubmit" && (!h() || r() !== "off"), $(qe, "aria-hidden", o(R) === x.VERIFYING), $(kt, "for", o(Vr)), $(kt, "aria-hidden", !!((u = o(H)) != null && u.challenge.codeChallenge));
    },
    [
      () => ({
        "altcha-checkbox-verifying": o(R) === x.VERIFYING
      })
    ]
  ), He("invalid", qe, Zr), Si(qe, () => o(yt), (n) => w(yt, n)), U(e, un), hl({
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
      return a();
    },
    set challengeurl(n = void 0) {
      a(n), C();
    },
    get challengejson() {
      return i();
    },
    set challengejson(n = void 0) {
      i(n), C();
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
      return p();
    },
    set disableautofocus(n = !1) {
      p(n), C();
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
      return m();
    },
    set floatinganchor(n = void 0) {
      m(n), C();
    },
    get floatingoffset() {
      return A();
    },
    set floatingoffset(n = void 0) {
      A(n), C();
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
      return at();
    },
    set strings(n = void 0) {
      at(n), C();
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
      return it();
    },
    set workers(n = Math.min(16, navigator.hardwareConcurrency || 8)) {
      it(n), C();
    },
    get workerurl() {
      return wt();
    },
    set workerurl(n = void 0) {
      wt(n), C();
    }
  });
}
mi(["change", "keydown", "click"]);
customElements.define("altcha-widget", Oi(
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
globalThis.altchaCreateWorker = (e) => e ? new Worker(new URL(e)) : new da();
export {
  uo as Altcha
};
