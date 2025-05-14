var ca = Object.defineProperty;
var wn = (e) => {
  throw TypeError(e);
};
var da = (e, t, r) => t in e ? ca(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var me = (e, t, r) => da(e, typeof t != "symbol" ? t + "" : t, r), yn = (e, t, r) => t.has(e) || wn("Cannot " + r);
var oe = (e, t, r) => (yn(e, t, "read from private field"), r ? r.call(e) : t.get(e)), _r = (e, t, r) => t.has(e) ? wn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), mr = (e, t, r, i) => (yn(e, t, "write to private field"), i ? i.call(e, r) : t.set(e, r), r);
const Fn = `(function(){"use strict";const d=new TextEncoder;function p(e){return[...new Uint8Array(e)].map(t=>t.toString(16).padStart(2,"0")).join("")}async function b(e,t,r){if(typeof crypto>"u"||!("subtle"in crypto)||!("digest"in crypto.subtle))throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");return p(await crypto.subtle.digest(r.toUpperCase(),d.encode(e+t)))}function w(e,t,r="SHA-256",n=1e6,s=0){const o=new AbortController,a=Date.now();return{promise:(async()=>{for(let c=s;c<=n;c+=1){if(o.signal.aborted)return null;if(await b(t,c,r)===e)return{number:c,took:Date.now()-a}}return null})(),controller:o}}function h(e){const t=atob(e),r=new Uint8Array(t.length);for(let n=0;n<t.length;n++)r[n]=t.charCodeAt(n);return r}function g(e,t=12){const r=new Uint8Array(t);for(let n=0;n<t;n++)r[n]=e%256,e=Math.floor(e/256);return r}async function m(e,t="",r=1e6,n=0){const s="AES-GCM",o=new AbortController,a=Date.now(),l=async()=>{for(let u=n;u<=r;u+=1){if(o.signal.aborted||!c||!y)return null;try{const f=await crypto.subtle.decrypt({name:s,iv:g(u)},c,y);if(f)return{clearText:new TextDecoder().decode(f),took:Date.now()-a}}catch{}}return null};let c=null,y=null;try{y=h(e);const u=await crypto.subtle.digest("SHA-256",d.encode(t));c=await crypto.subtle.importKey("raw",u,s,!1,["decrypt"])}catch{return{promise:Promise.reject(),controller:o}}return{promise:l(),controller:o}}let i;onmessage=async e=>{const{type:t,payload:r,start:n,max:s}=e.data;let o=null;if(t==="abort")i==null||i.abort(),i=void 0;else if(t==="work"){if("obfuscated"in r){const{key:a,obfuscated:l}=r||{};o=await m(l,a,s,n)}else{const{algorithm:a,challenge:l,salt:c}=r||{};o=w(l,c,a,s,n)}i=o.controller,o.promise.then(a=>{self.postMessage(a&&{...a,worker:!0})})}}})();
`, En = typeof self < "u" && self.Blob && new Blob([Fn], { type: "text/javascript;charset=utf-8" });
function ha(e) {
  let t;
  try {
    if (t = En && (self.URL || self.webkitURL).createObjectURL(En), !t) throw "";
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
const va = "5";
var On;
typeof window < "u" && ((On = window.__svelte ?? (window.__svelte = {})).v ?? (On.v = /* @__PURE__ */ new Set())).add(va);
const ga = 1, _a = 4, ma = 8, pa = 16, ba = 1, wa = 2, kr = "[", Vn = "[!", Mn = "]", vt = {}, se = Symbol(), ya = "http://www.w3.org/1999/xhtml", Cn = !1, be = 2, Un = 4, Qt = 8, Ar = 16, Oe = 32, nt = 64, Ht = 128, ge = 256, Gt = 512, de = 1024, Fe = 2048, pt = 4096, gt = 8192, er = 16384, Ea = 32768, Rr = 65536, Ca = 1 << 19, jn = 1 << 20, $t = Symbol("$state"), qn = Symbol("legacy props"), xa = Symbol("");
var Bn = Array.isArray, ka = Array.prototype.indexOf, Aa = Array.from, Yt = Object.keys, Wt = Object.defineProperty, tt = Object.getOwnPropertyDescriptor, Ra = Object.getOwnPropertyDescriptors, Ia = Object.prototype, $a = Array.prototype, Hn = Object.getPrototypeOf;
function Gn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Sa(e, t, r = !1) {
  return e === void 0 ? r ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
const Na = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Nt = [], Tt = [];
function Yn() {
  var e = Nt;
  Nt = [], Gn(e);
}
function Wn() {
  var e = Tt;
  Tt = [], Gn(e);
}
function Ir(e) {
  Nt.length === 0 && queueMicrotask(Yn), Nt.push(e);
}
function Ta(e) {
  Tt.length === 0 && Na(Wn), Tt.push(e);
}
function xn() {
  Nt.length > 0 && Yn(), Tt.length > 0 && Wn();
}
function Zn(e) {
  return e === this.v;
}
function Da(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function $r(e) {
  return !Da(e, this.v);
}
function La(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Pa() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Oa(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Fa() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Va() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Ma(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Ua() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ja() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function qa() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Ba() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Ha = !1;
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
function le(e) {
  return /* @__PURE__ */ Ga(ke(e));
}
// @__NO_SIDE_EFFECTS__
function zn(e, t = !1) {
  const r = ke(e);
  return t || (r.equals = $r), r;
}
// @__NO_SIDE_EFFECTS__
function Ga(e) {
  return S !== null && !pe && (S.f & be) !== 0 && (Ae === null ? Xa([e]) : Ae.push(e)), e;
}
function w(e, t) {
  return S !== null && !pe && gi() && (S.f & (be | Ar)) !== 0 && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (Ae === null || !Ae.includes(e)) && Ba(), Ya(e, t);
}
function Ya(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = ni(), Jn(e, Fe), T !== null && (T.f & de) !== 0 && (T.f & (Oe | nt)) === 0 && (Te === null ? Qa([e]) : Te.push(e))), t;
}
function Jn(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, a = 0; a < i; a++) {
      var o = r[a], s = o.f;
      (s & Fe) === 0 && (Ie(o, t), (s & (de | ge)) !== 0 && ((s & be) !== 0 ? Jn(
        /** @type {Derived} */
        o,
        pt
      ) : ir(
        /** @type {Effect} */
        o
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function He(e) {
  var t = be | Fe, r = S !== null && (S.f & be) !== 0 ? (
    /** @type {Derived} */
    S
  ) : null;
  return T === null || r !== null && (r.f & ge) !== 0 ? t |= ge : T.f |= jn, {
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
    parent: r ?? T
  };
}
// @__NO_SIDE_EFFECTS__
function Wa(e) {
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
function Za(e) {
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
function za(e) {
  var t, r = T;
  Ze(Za(e));
  try {
    Kn(e), t = ai(e);
  } finally {
    Ze(r);
  }
  return t;
}
function Xn(e) {
  var t = za(e), r = (Ge || (e.f & ge) !== 0) && e.deps !== null ? pt : de;
  Ie(e, r), e.equals(t) || (e.v = t, e.wv = ni());
}
function tr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let O = !1;
function ht(e) {
  O = e;
}
let P;
function Ye(e) {
  if (e === null)
    throw tr(), vt;
  return P = e;
}
function _t() {
  return Ye(
    /** @type {TemplateNode} */
    /* @__PURE__ */ ze(P)
  );
}
function Y(e) {
  if (O) {
    if (/* @__PURE__ */ ze(P) !== null)
      throw tr(), vt;
    P = e;
  }
}
function Ja() {
  for (var e = 0, t = P; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === Mn) {
        if (e === 0) return t;
        e -= 1;
      } else (r === kr || r === Vn) && (e += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ze(t)
    );
    t.remove(), t = i;
  }
}
function V(e, t = null, r) {
  if (typeof e != "object" || e === null || $t in e)
    return e;
  const i = Hn(e);
  if (i !== Ia && i !== $a)
    return e;
  var a = /* @__PURE__ */ new Map(), o = Bn(e), s = ke(0);
  o && a.set("length", ke(
    /** @type {any[]} */
    e.length
  ));
  var f;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(c, d, m) {
        (!("value" in m) || m.configurable === !1 || m.enumerable === !1 || m.writable === !1) && Ua();
        var v = a.get(d);
        return v === void 0 ? (v = ke(m.value), a.set(d, v)) : w(v, V(m.value, f)), !0;
      },
      deleteProperty(c, d) {
        var m = a.get(d);
        if (m === void 0)
          d in c && a.set(d, ke(se));
        else {
          if (o && typeof d == "string") {
            var v = (
              /** @type {Source<number>} */
              a.get("length")
            ), h = Number(d);
            Number.isInteger(h) && h < v.v && w(v, h);
          }
          w(m, se), kn(s);
        }
        return !0;
      },
      get(c, d, m) {
        var k;
        if (d === $t)
          return e;
        var v = a.get(d), h = d in c;
        if (v === void 0 && (!h || (k = tt(c, d)) != null && k.writable) && (v = ke(V(h ? c[d] : se, f)), a.set(d, v)), v !== void 0) {
          var b = l(v);
          return b === se ? void 0 : b;
        }
        return Reflect.get(c, d, m);
      },
      getOwnPropertyDescriptor(c, d) {
        var m = Reflect.getOwnPropertyDescriptor(c, d);
        if (m && "value" in m) {
          var v = a.get(d);
          v && (m.value = l(v));
        } else if (m === void 0) {
          var h = a.get(d), b = h == null ? void 0 : h.v;
          if (h !== void 0 && b !== se)
            return {
              enumerable: !0,
              configurable: !0,
              value: b,
              writable: !0
            };
        }
        return m;
      },
      has(c, d) {
        var b;
        if (d === $t)
          return !0;
        var m = a.get(d), v = m !== void 0 && m.v !== se || Reflect.has(c, d);
        if (m !== void 0 || T !== null && (!v || (b = tt(c, d)) != null && b.writable)) {
          m === void 0 && (m = ke(v ? V(c[d], f) : se), a.set(d, m));
          var h = l(m);
          if (h === se)
            return !1;
        }
        return v;
      },
      set(c, d, m, v) {
        var J;
        var h = a.get(d), b = d in c;
        if (o && d === "length")
          for (var k = m; k < /** @type {Source<number>} */
          h.v; k += 1) {
            var D = a.get(k + "");
            D !== void 0 ? w(D, se) : k in c && (D = ke(se), a.set(k + "", D));
          }
        h === void 0 ? (!b || (J = tt(c, d)) != null && J.writable) && (h = ke(void 0), w(h, V(m, f)), a.set(d, h)) : (b = h.v !== se, w(h, V(m, f)));
        var F = Reflect.getOwnPropertyDescriptor(c, d);
        if (F != null && F.set && F.set.call(v, m), !b) {
          if (o && typeof d == "string") {
            var ue = (
              /** @type {Source<number>} */
              a.get("length")
            ), ie = Number(d);
            Number.isInteger(ie) && ie >= ue.v && w(ue, ie + 1);
          }
          kn(s);
        }
        return !0;
      },
      ownKeys(c) {
        l(s);
        var d = Reflect.ownKeys(c).filter((h) => {
          var b = a.get(h);
          return b === void 0 || b.v !== se;
        });
        for (var [m, v] of a)
          v.v !== se && !(m in c) && d.push(m);
        return d;
      },
      setPrototypeOf() {
        ja();
      }
    }
  );
}
function kn(e, t = 1) {
  w(e, e.v + t);
}
var An, Qn, ei, ti;
function wr() {
  if (An === void 0) {
    An = window, Qn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    ei = tt(t, "firstChild").get, ti = tt(t, "nextSibling").get, e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function rr(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Le(e) {
  return ei.call(e);
}
// @__NO_SIDE_EFFECTS__
function ze(e) {
  return ti.call(e);
}
function W(e, t) {
  if (!O)
    return /* @__PURE__ */ Le(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Le(P)
  );
  return r === null && (r = P.appendChild(rr())), Ye(r), r;
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
  let i = O ? P : e;
  for (var a; t--; )
    a = i, i = /** @type {TemplateNode} */
    /* @__PURE__ */ ze(i);
  if (!O)
    return i;
  var o = i == null ? void 0 : i.nodeType;
  if (r && o !== 3) {
    var s = rr();
    return i === null ? a == null || a.after(s) : i.before(s), Ye(s), s;
  }
  return Ye(i), /** @type {TemplateNode} */
  i;
}
function Ka(e) {
  e.textContent = "";
}
let qt = !1, Zt = !1, zt = null, rt = !1, Sr = !1;
function Rn(e) {
  Sr = e;
}
let St = [];
let S = null, pe = !1;
function We(e) {
  S = e;
}
let T = null;
function Ze(e) {
  T = e;
}
let Ae = null;
function Xa(e) {
  Ae = e;
}
let re = null, ce = 0, Te = null;
function Qa(e) {
  Te = e;
}
let ri = 1, Jt = 0, Ge = !1;
function ni() {
  return ++ri;
}
function Dt(e) {
  var v;
  var t = e.f;
  if ((t & Fe) !== 0)
    return !0;
  if ((t & pt) !== 0) {
    var r = e.deps, i = (t & ge) !== 0;
    if (r !== null) {
      var a, o, s = (t & Gt) !== 0, f = i && T !== null && !Ge, c = r.length;
      if (s || f) {
        var d = (
          /** @type {Derived} */
          e
        ), m = d.parent;
        for (a = 0; a < c; a++)
          o = r[a], (s || !((v = o == null ? void 0 : o.reactions) != null && v.includes(d))) && (o.reactions ?? (o.reactions = [])).push(d);
        s && (d.f ^= Gt), f && m !== null && (m.f & ge) === 0 && (d.f ^= ge);
      }
      for (a = 0; a < c; a++)
        if (o = r[a], Dt(
          /** @type {Derived} */
          o
        ) && Xn(
          /** @type {Derived} */
          o
        ), o.wv > e.wv)
          return !0;
    }
    (!i || T !== null && !Ge) && Ie(e, de);
  }
  return !1;
}
function eo(e, t) {
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
function to(e) {
  return (e.f & er) === 0 && (e.parent === null || (e.parent.f & Ht) === 0);
}
function nr(e, t, r, i) {
  if (qt) {
    if (r === null && (qt = !1), to(t))
      throw e;
    return;
  }
  r !== null && (qt = !0);
  {
    eo(e, t);
    return;
  }
}
function ii(e, t, r = !0) {
  var i = e.reactions;
  if (i !== null)
    for (var a = 0; a < i.length; a++) {
      var o = i[a];
      (o.f & be) !== 0 ? ii(
        /** @type {Derived} */
        o,
        t,
        !1
      ) : t === o && (r ? Ie(o, Fe) : (o.f & de) !== 0 && Ie(o, pt), ir(
        /** @type {Effect} */
        o
      ));
    }
}
function ai(e) {
  var b;
  var t = re, r = ce, i = Te, a = S, o = Ge, s = Ae, f = ne, c = pe, d = e.f;
  re = /** @type {null | Value[]} */
  null, ce = 0, Te = null, Ge = (d & ge) !== 0 && (pe || !rt || S === null), S = (d & (Oe | nt)) === 0 ? e : null, Ae = null, $n(e.ctx), pe = !1, Jt++;
  try {
    var m = (
      /** @type {Function} */
      (0, e.fn)()
    ), v = e.deps;
    if (re !== null) {
      var h;
      if (Kt(e, ce), v !== null && ce > 0)
        for (v.length = ce + re.length, h = 0; h < re.length; h++)
          v[ce + h] = re[h];
      else
        e.deps = v = re;
      if (!Ge)
        for (h = ce; h < v.length; h++)
          ((b = v[h]).reactions ?? (b.reactions = [])).push(e);
    } else v !== null && ce < v.length && (Kt(e, ce), v.length = ce);
    if (gi() && Te !== null && !pe && v !== null && (e.f & (be | pt | Fe)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      Te.length; h++)
        ii(
          Te[h],
          /** @type {Effect} */
          e
        );
    return a !== null && Jt++, m;
  } finally {
    re = t, ce = r, Te = i, S = a, Ge = o, Ae = s, $n(f), pe = c;
  }
}
function ro(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var i = ka.call(r, e);
    if (i !== -1) {
      var a = r.length - 1;
      a === 0 ? r = t.reactions = null : (r[i] = r[a], r.pop());
    }
  }
  r === null && (t.f & be) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (re === null || !re.includes(t)) && (Ie(t, pt), (t.f & (ge | Gt)) === 0 && (t.f ^= Gt), Kn(
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
    for (var i = t; i < r.length; i++)
      ro(e, r[i]);
}
function Nr(e) {
  var t = e.f;
  if ((t & er) === 0) {
    Ie(e, de);
    var r = T, i = ne, a = rt;
    T = e, rt = !0;
    try {
      (t & Ar) !== 0 ? ho(e) : si(e), li(e);
      var o = ai(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = ri;
      var s = e.deps, f;
      Cn && Ha && e.f & Fe;
    } catch (c) {
      nr(c, e, r, i || e.ctx);
    } finally {
      rt = a, T = r;
    }
  }
}
function no() {
  try {
    Fa();
  } catch (e) {
    if (zt !== null)
      nr(e, zt, null);
    else
      throw e;
  }
}
function oi() {
  var e = rt;
  try {
    var t = 0;
    for (rt = !0; St.length > 0; ) {
      t++ > 1e3 && no();
      var r = St, i = r.length;
      St = [];
      for (var a = 0; a < i; a++) {
        var o = ao(r[a]);
        io(o);
      }
    }
  } finally {
    Zt = !1, rt = e, zt = null;
  }
}
function io(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var i = e[r];
      if ((i.f & (er | gt)) === 0)
        try {
          Dt(i) && (Nr(i), i.deps === null && i.first === null && i.nodes_start === null && (i.teardown === null ? ui(i) : i.fn = null));
        } catch (a) {
          nr(a, i, null, i.ctx);
        }
    }
}
function ir(e) {
  Zt || (Zt = !0, queueMicrotask(oi));
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
function ao(e) {
  for (var t = [], r = e; r !== null; ) {
    var i = r.f, a = (i & (Oe | nt)) !== 0, o = a && (i & de) !== 0;
    if (!o && (i & gt) === 0) {
      if ((i & Un) !== 0)
        t.push(r);
      else if (a)
        r.f ^= de;
      else {
        var s = S;
        try {
          S = r, Dt(r) && Nr(r);
        } catch (d) {
          nr(d, r, null, r.ctx);
        } finally {
          S = s;
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
  for (xn(); St.length > 0; )
    Zt = !0, oi(), xn();
  return (
    /** @type {T} */
    t
  );
}
async function pr() {
  await Promise.resolve(), x();
}
function l(e) {
  var t = e.f, r = (t & be) !== 0;
  if (S !== null && !pe) {
    Ae !== null && Ae.includes(e) && qa();
    var i = S.deps;
    e.rv < Jt && (e.rv = Jt, re === null && i !== null && i[ce] === e ? ce++ : re === null ? re = [e] : (!Ge || !re.includes(e)) && re.push(e));
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var a = (
      /** @type {Derived} */
      e
    ), o = a.parent;
    o !== null && (o.f & ge) === 0 && (a.f ^= ge);
  }
  return r && (a = /** @type {Derived} */
  e, Dt(a) && Xn(a)), e.v;
}
function mt(e) {
  var t = pe;
  try {
    return pe = !0, e();
  } finally {
    pe = t;
  }
}
const oo = -7169;
function Ie(e, t) {
  e.f = e.f & oo | t;
}
function lo(e) {
  T === null && S === null && Oa(), S !== null && (S.f & ge) !== 0 && T === null && Pa(), Sr && La();
}
function so(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function it(e, t, r, i = !0) {
  var a = T, o = {
    ctx: ne,
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
      Nr(o), o.f |= Ea;
    } catch (c) {
      throw Pe(o), c;
    }
  else t !== null && ir(o);
  var s = r && o.deps === null && o.first === null && o.nodes_start === null && o.teardown === null && (o.f & (jn | Ht)) === 0;
  if (!s && i && (a !== null && so(o, a), S !== null && (S.f & be) !== 0)) {
    var f = (
      /** @type {Derived} */
      S
    );
    (f.effects ?? (f.effects = [])).push(o);
  }
  return o;
}
function uo(e) {
  const t = it(Qt, null, !1);
  return Ie(t, de), t.teardown = e, t;
}
function yr(e) {
  lo();
  var t = T !== null && (T.f & Oe) !== 0 && ne !== null && !ne.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      ne
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: T,
      reaction: S
    });
  } else {
    var i = Tr(e);
    return i;
  }
}
function fo(e) {
  const t = it(nt, e, !0);
  return () => {
    Pe(t);
  };
}
function co(e) {
  const t = it(nt, e, !0);
  return (r = {}) => new Promise((i) => {
    r.outro ? Er(t, () => {
      Pe(t), i(void 0);
    }) : (Pe(t), i(void 0));
  });
}
function Tr(e) {
  return it(Un, e, !1);
}
function Dr(e) {
  return it(Qt, e, !0);
}
function Ne(e, t = [], r = He) {
  const i = t.map(r);
  return Lr(() => e(...i.map(l)));
}
function Lr(e, t = 0) {
  return it(Qt | Ar | t, e, !0);
}
function Xt(e, t = !0) {
  return it(Qt | Oe, e, !0, t);
}
function li(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Sr, i = S;
    Rn(!0), We(null);
    try {
      t.call(null);
    } finally {
      Rn(r), We(i);
    }
  }
}
function si(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var i = r.next;
    (r.f & nt) !== 0 ? r.parent = null : Pe(r, t), r = i;
  }
}
function ho(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Oe) === 0 && Pe(t), t = r;
  }
}
function Pe(e, t = !0) {
  var r = !1;
  if ((t || (e.f & Ca) !== 0) && e.nodes_start !== null) {
    for (var i = e.nodes_start, a = e.nodes_end; i !== null; ) {
      var o = i === a ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ze(i)
      );
      i.remove(), i = o;
    }
    r = !0;
  }
  si(e, t && !r), Kt(e, 0), Ie(e, er);
  var s = e.transitions;
  if (s !== null)
    for (const c of s)
      c.stop();
  li(e);
  var f = e.parent;
  f !== null && f.first !== null && ui(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function ui(e) {
  var t = e.parent, r = e.prev, i = e.next;
  r !== null && (r.next = i), i !== null && (i.prev = r), t !== null && (t.first === e && (t.first = i), t.last === e && (t.last = r));
}
function Er(e, t) {
  var r = [];
  fi(e, r, !0), vo(r, () => {
    Pe(e), t && t();
  });
}
function vo(e, t) {
  var r = e.length;
  if (r > 0) {
    var i = () => --r || t();
    for (var a of e)
      a.out(i);
  } else
    t();
}
function fi(e, t, r) {
  if ((e.f & gt) === 0) {
    if (e.f ^= gt, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || r) && t.push(s);
    for (var i = e.first; i !== null; ) {
      var a = i.next, o = (i.f & Rr) !== 0 || (i.f & Oe) !== 0;
      fi(i, t, o ? r : !1), i = a;
    }
  }
}
function In(e) {
  ci(e, !0);
}
function ci(e, t) {
  if ((e.f & gt) !== 0) {
    e.f ^= gt, (e.f & de) === 0 && (e.f ^= de), Dt(e) && (Ie(e, Fe), ir(e));
    for (var r = e.first; r !== null; ) {
      var i = r.next, a = (r.f & Rr) !== 0 || (r.f & Oe) !== 0;
      ci(r, a ? t : !1), r = i;
    }
    if (e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || t) && o.in();
  }
}
function di(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let ne = null;
function $n(e) {
  ne = e;
}
function hi(e, t = !1, r) {
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
function vi(e) {
  const t = ne;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var r = T, i = S;
      t.e = null;
      try {
        for (var a = 0; a < s.length; a++) {
          var o = s[a];
          Ze(o.effect), We(o.reaction), Tr(o.fn);
        }
      } finally {
        Ze(r), We(i);
      }
    }
    ne = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function gi() {
  return !0;
}
const go = ["touchstart", "touchmove"];
function _o(e) {
  return go.includes(e);
}
function mo(e, t) {
  if (t) {
    const r = document.body;
    e.autofocus = !0, Ir(() => {
      document.activeElement === r && e.focus();
    });
  }
}
let Sn = !1;
function _i() {
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
function mi(e) {
  var t = S, r = T;
  We(null), Ze(null);
  try {
    return e();
  } finally {
    We(t), Ze(r);
  }
}
function po(e, t, r, i = r) {
  e.addEventListener(t, () => mi(r));
  const a = e.__on_r;
  a ? e.__on_r = () => {
    a(), i(!0);
  } : e.__on_r = () => i(!0), _i();
}
const pi = /* @__PURE__ */ new Set(), Cr = /* @__PURE__ */ new Set();
function bo(e, t, r, i = {}) {
  function a(o) {
    if (i.capture || It.call(t, o), !o.cancelBubble)
      return mi(() => r == null ? void 0 : r.call(this, o));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Ir(() => {
    t.addEventListener(e, a, i);
  }) : t.addEventListener(e, a, i), a;
}
function Be(e, t, r, i, a) {
  var o = { capture: i, passive: a }, s = bo(e, t, r, o);
  (t === document.body || t === window || t === document) && uo(() => {
    t.removeEventListener(e, s, o);
  });
}
function wo(e) {
  for (var t = 0; t < e.length; t++)
    pi.add(e[t]);
  for (var r of Cr)
    r(e);
}
function It(e) {
  var ie;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), i = e.type, a = ((ie = e.composedPath) == null ? void 0 : ie.call(e)) || [], o = (
    /** @type {null | Element} */
    a[0] || e.target
  ), s = 0, f = e.__root;
  if (f) {
    var c = a.indexOf(f);
    if (c !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var d = a.indexOf(t);
    if (d === -1)
      return;
    c <= d && (s = c);
  }
  if (o = /** @type {Element} */
  a[s] || e.target, o !== t) {
    Wt(e, "currentTarget", {
      configurable: !0,
      get() {
        return o || r;
      }
    });
    var m = S, v = T;
    We(null), Ze(null);
    try {
      for (var h, b = []; o !== null; ) {
        var k = o.assignedSlot || o.parentNode || /** @type {any} */
        o.host || null;
        try {
          var D = o["__" + i];
          if (D != null && (!/** @type {any} */
          o.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === o))
            if (Bn(D)) {
              var [F, ...ue] = D;
              F.apply(o, [e, ...ue]);
            } else
              D.call(o, e);
        } catch (J) {
          h ? b.push(J) : h = J;
        }
        if (e.cancelBubble || k === t || k === null)
          break;
        o = k;
      }
      if (h) {
        for (let J of b)
          queueMicrotask(() => {
            throw J;
          });
        throw h;
      }
    } finally {
      e.__root = t, delete e.currentTarget, We(m), Ze(v);
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
    T
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function we(e, t) {
  var r = (t & ba) !== 0, i = (t & wa) !== 0, a, o = !e.startsWith("<!>");
  return () => {
    if (O)
      return Re(P, null), P;
    a === void 0 && (a = Pr(o ? e : "<!>" + e), r || (a = /** @type {Node} */
    /* @__PURE__ */ Le(a)));
    var s = (
      /** @type {TemplateNode} */
      i || Qn ? document.importNode(a, !0) : a.cloneNode(!0)
    );
    if (r) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Le(s)
      ), c = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Re(f, c);
    } else
      Re(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function ar(e, t, r = "svg") {
  var i = !e.startsWith("<!>"), a = `<${r}>${i ? e : "<!>" + e}</${r}>`, o;
  return () => {
    if (O)
      return Re(P, null), P;
    if (!o) {
      var s = (
        /** @type {DocumentFragment} */
        Pr(a)
      ), f = (
        /** @type {Element} */
        /* @__PURE__ */ Le(s)
      );
      o = /** @type {Element} */
      /* @__PURE__ */ Le(f);
    }
    var c = (
      /** @type {TemplateNode} */
      o.cloneNode(!0)
    );
    return Re(c, c), c;
  };
}
function Mt() {
  if (O)
    return Re(P, null), P;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = rr();
  return e.append(t, r), Re(t, r), e;
}
function U(e, t) {
  if (O) {
    T.nodes_end = P, _t();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function yo(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function bi(e, t) {
  return wi(e, t);
}
function Eo(e, t) {
  wr(), t.intro = t.intro ?? !1;
  const r = t.target, i = O, a = P;
  try {
    for (var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Le(r)
    ); o && (o.nodeType !== 8 || /** @type {Comment} */
    o.data !== kr); )
      o = /** @type {TemplateNode} */
      /* @__PURE__ */ ze(o);
    if (!o)
      throw vt;
    ht(!0), Ye(
      /** @type {Comment} */
      o
    ), _t();
    const s = wi(e, { ...t, anchor: o });
    if (P === null || P.nodeType !== 8 || /** @type {Comment} */
    P.data !== Mn)
      throw tr(), vt;
    return ht(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === vt)
      return t.recover === !1 && Va(), wr(), Ka(r), ht(!1), bi(e, t);
    throw s;
  } finally {
    ht(i), Ye(a);
  }
}
const dt = /* @__PURE__ */ new Map();
function wi(e, { target: t, anchor: r, props: i = {}, events: a, context: o, intro: s = !0 }) {
  wr();
  var f = /* @__PURE__ */ new Set(), c = (v) => {
    for (var h = 0; h < v.length; h++) {
      var b = v[h];
      if (!f.has(b)) {
        f.add(b);
        var k = _o(b);
        t.addEventListener(b, It, { passive: k });
        var D = dt.get(b);
        D === void 0 ? (document.addEventListener(b, It, { passive: k }), dt.set(b, 1)) : dt.set(b, D + 1);
      }
    }
  };
  c(Aa(pi)), Cr.add(c);
  var d = void 0, m = co(() => {
    var v = r ?? t.appendChild(rr());
    return Xt(() => {
      if (o) {
        hi({});
        var h = (
          /** @type {ComponentContext} */
          ne
        );
        h.c = o;
      }
      a && (i.$$events = a), O && Re(
        /** @type {TemplateNode} */
        v,
        null
      ), d = e(v, i) || {}, O && (T.nodes_end = P), o && vi();
    }), () => {
      var k;
      for (var h of f) {
        t.removeEventListener(h, It);
        var b = (
          /** @type {number} */
          dt.get(h)
        );
        --b === 0 ? (document.removeEventListener(h, It), dt.delete(h)) : dt.set(h, b);
      }
      Cr.delete(c), v !== r && ((k = v.parentNode) == null || k.removeChild(v));
    };
  });
  return xr.set(d, m), d;
}
let xr = /* @__PURE__ */ new WeakMap();
function Co(e, t) {
  const r = xr.get(e);
  return r ? (xr.delete(e), r(t)) : Promise.resolve();
}
function z(e, t, [r, i] = [0, 0]) {
  O && r === 0 && _t();
  var a = e, o = null, s = null, f = se, c = r > 0 ? Rr : 0, d = !1;
  const m = (h, b = !0) => {
    d = !0, v(b, h);
  }, v = (h, b) => {
    if (f === (f = h)) return;
    let k = !1;
    if (O && i !== -1) {
      if (r === 0) {
        const F = (
          /** @type {Comment} */
          a.data
        );
        F === kr ? i = 0 : F === Vn ? i = 1 / 0 : (i = parseInt(F.substring(1)), i !== i && (i = f ? 1 / 0 : -1));
      }
      const D = i > r;
      !!f === D && (a = Ja(), Ye(a), ht(!1), k = !0, i = -1);
    }
    f ? (o ? In(o) : b && (o = Xt(() => b(a))), s && Er(s, () => {
      s = null;
    })) : (s ? In(s) : b && (s = Xt(() => b(a, [r + 1, i]))), o && Er(o, () => {
      o = null;
    })), k && ht(!0);
  };
  Lr(() => {
    d = !1, t(m), d || v(null, null);
  }, c), O && (a = P);
}
function et(e, t, r, i, a) {
  var o = e, s = "", f;
  Lr(() => {
    if (s === (s = t() ?? "")) {
      O && _t();
      return;
    }
    f !== void 0 && (Pe(f), f = void 0), s !== "" && (f = Xt(() => {
      if (O) {
        P.data;
        for (var c = _t(), d = c; c !== null && (c.nodeType !== 8 || /** @type {Comment} */
        c.data !== ""); )
          d = c, c = /** @type {TemplateNode} */
          /* @__PURE__ */ ze(c);
        if (c === null)
          throw tr(), vt;
        Re(P, d), o = Ye(c);
        return;
      }
      var m = s + "", v = Pr(m);
      Re(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Le(v),
        /** @type {TemplateNode} */
        v.lastChild
      ), o.before(v);
    }));
  });
}
function xo(e, t, r, i, a) {
  var f;
  O && _t();
  var o = (f = t.$$slots) == null ? void 0 : f[r], s = !1;
  o === !0 && (o = t.children, s = !0), o === void 0 || o(e, s ? () => i : i);
}
const Nn = [...` 	
\r\f \v\uFEFF`];
function ko(e, t, r) {
  var i = "" + e;
  if (r) {
    for (var a in r)
      if (r[a])
        i = i ? i + " " + a : a;
      else if (i.length)
        for (var o = a.length, s = 0; (s = i.indexOf(a, s)) >= 0; ) {
          var f = s + o;
          (s === 0 || Nn.includes(i[s - 1])) && (f === i.length || Nn.includes(i[f])) ? i = (s === 0 ? "" : i.substring(0, s)) + i.substring(f + 1) : s = f;
        }
  }
  return i === "" ? null : i;
}
function Ao(e, t, r, i, a, o) {
  var s = e.__className;
  if (O || s !== r) {
    var f = ko(r, i, o);
    (!O || f !== e.getAttribute("class")) && (f == null ? e.removeAttribute("class") : e.className = f), e.__className = r;
  } else if (o && a !== o)
    for (var c in o) {
      var d = !!o[c];
      (a == null || d !== !!a[c]) && e.classList.toggle(c, d);
    }
  return o;
}
const Ro = Symbol("is custom element"), Io = Symbol("is html");
function Tn(e) {
  if (O) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var i = e.value;
          N(e, "value", null), e.value = i;
        }
        if (e.hasAttribute("checked")) {
          var a = e.checked;
          N(e, "checked", null), e.checked = a;
        }
      }
    };
    e.__on_r = r, Ta(r), _i();
  }
}
function $o(e, t) {
  var r = yi(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function N(e, t, r, i) {
  var a = yi(e);
  O && (a[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || a[t] !== (a[t] = r) && (t === "loading" && (e[xa] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && So(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function yi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Ro]: e.nodeName.includes("-"),
      [Io]: e.namespaceURI === ya
    })
  );
}
var Dn = /* @__PURE__ */ new Map();
function So(e) {
  var t = Dn.get(e.nodeName);
  if (t) return t;
  Dn.set(e.nodeName, t = []);
  for (var r, i = e, a = Element.prototype; a !== i; ) {
    r = Ra(i);
    for (var o in r)
      r[o].set && t.push(o);
    i = Hn(i);
  }
  return t;
}
function No(e, t, r = t) {
  po(e, "change", (i) => {
    var a = i ? e.defaultChecked : e.checked;
    r(a);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (O && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  mt(t) == null) && r(e.checked), Dr(() => {
    var i = t();
    e.checked = !!i;
  });
}
function Ln(e, t) {
  return e === t || (e == null ? void 0 : e[$t]) === t;
}
function Ut(e = {}, t, r, i) {
  return Tr(() => {
    var a, o;
    return Dr(() => {
      a = o, o = [], mt(() => {
        e !== r(...o) && (t(e, ...o), a && Ln(r(...a), e) && t(null, ...a));
      });
    }), () => {
      Ir(() => {
        o && Ln(r(...o), e) && t(null, ...o);
      });
    };
  }), e;
}
function Ei(e) {
  ne === null && di(), yr(() => {
    const t = mt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function To(e) {
  ne === null && di(), Ei(() => () => mt(e));
}
let jt = !1;
function Do(e) {
  var t = jt;
  try {
    return jt = !1, [e(), jt];
  } finally {
    jt = t;
  }
}
function R(e, t, r, i) {
  var ye;
  var a = (r & ga) !== 0, o = !0, s = (r & ma) !== 0, f = (r & pa) !== 0, c = !1, d;
  s ? [d, c] = Do(() => (
    /** @type {V} */
    e[t]
  )) : d = /** @type {V} */
  e[t];
  var m = $t in e || qn in e, v = s && (((ye = tt(e, t)) == null ? void 0 : ye.set) ?? (m && t in e && ((j) => e[t] = j))) || void 0, h = (
    /** @type {V} */
    i
  ), b = !0, k = !1, D = () => (k = !0, b && (b = !1, f ? h = mt(
    /** @type {() => V} */
    i
  ) : h = /** @type {V} */
  i), h);
  d === void 0 && i !== void 0 && (v && o && Ma(), d = D(), v && v(d));
  var F;
  if (F = () => {
    var j = (
      /** @type {V} */
      e[t]
    );
    return j === void 0 ? D() : (b = !0, k = !1, j);
  }, (r & _a) === 0)
    return F;
  if (v) {
    var ue = e.$$legacy;
    return function(j, Q) {
      return arguments.length > 0 ? ((!Q || ue || c) && v(Q ? F() : j), j) : F();
    };
  }
  var ie = !1, J = /* @__PURE__ */ zn(d), fe = /* @__PURE__ */ He(() => {
    var j = F(), Q = l(J);
    return ie ? (ie = !1, Q) : J.v = j;
  });
  return a || (fe.equals = $r), function(j, Q) {
    if (arguments.length > 0) {
      const Ve = Q ? l(fe) : s ? V(j) : j;
      return fe.equals(Ve) || (ie = !0, w(J, Ve), k && h !== void 0 && (h = Ve), mt(() => l(fe))), j;
    }
    return l(fe);
  };
}
function Lo(e) {
  return new Po(e);
}
var De, ve;
class Po {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    _r(this, De);
    /** @type {Record<string, any>} */
    _r(this, ve);
    var o;
    var r = /* @__PURE__ */ new Map(), i = (s, f) => {
      var c = /* @__PURE__ */ zn(f);
      return r.set(s, c), c;
    };
    const a = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, f) {
          return l(r.get(f) ?? i(f, Reflect.get(s, f)));
        },
        has(s, f) {
          return f === qn ? !0 : (l(r.get(f) ?? i(f, Reflect.get(s, f))), Reflect.has(s, f));
        },
        set(s, f, c) {
          return w(r.get(f) ?? i(f, c), c), Reflect.set(s, f, c);
        }
      }
    );
    mr(this, ve, (t.hydrate ? Eo : bi)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: a,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((o = t == null ? void 0 : t.props) != null && o.$$host) || t.sync === !1) && x(), mr(this, De, a.$$events);
    for (const s of Object.keys(oe(this, ve)))
      s === "$set" || s === "$destroy" || s === "$on" || Wt(this, s, {
        get() {
          return oe(this, ve)[s];
        },
        /** @param {any} value */
        set(f) {
          oe(this, ve)[s] = f;
        },
        enumerable: !0
      });
    oe(this, ve).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(a, s);
    }, oe(this, ve).$destroy = () => {
      Co(oe(this, ve));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    oe(this, ve).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    oe(this, De)[t] = oe(this, De)[t] || [];
    const i = (...a) => r.call(this, ...a);
    return oe(this, De)[t].push(i), () => {
      oe(this, De)[t] = oe(this, De)[t].filter(
        /** @param {any} fn */
        (a) => a !== i
      );
    };
  }
  $destroy() {
    oe(this, ve).$destroy();
  }
}
De = new WeakMap(), ve = new WeakMap();
let Ci;
typeof HTMLElement == "function" && (Ci = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, i) {
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
          const s = document.createElement("slot");
          a !== "default" && (s.name = a), U(o, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, i = Oo(this);
      for (const a of this.$$s)
        a in i && (a === "default" && !this.$$d.children ? (this.$$d.children = t(a), r.default = !0) : r[a] = t(a));
      for (const a of this.attributes) {
        const o = this.$$g_p(a.name);
        o in this.$$d || (this.$$d[o] = Bt(o, a.value, this.$$p_d, "toProp"));
      }
      for (const a in this.$$p_d)
        !(a in this.$$d) && this[a] !== void 0 && (this.$$d[a] = this[a], delete this[a]);
      this.$$c = Lo({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = fo(() => {
        Dr(() => {
          var a;
          this.$$r = !0;
          for (const o of Yt(this.$$c)) {
            if (!((a = this.$$p_d[o]) != null && a.reflect)) continue;
            this.$$d[o] = this.$$c[o];
            const s = Bt(
              o,
              this.$$d[o],
              this.$$p_d,
              "toAttribute"
            );
            s == null ? this.removeAttribute(this.$$p_d[o].attribute || o) : this.setAttribute(this.$$p_d[o].attribute || o, s);
          }
          this.$$r = !1;
        });
      });
      for (const a in this.$$l)
        for (const o of this.$$l[a]) {
          const s = this.$$c.$on(a, o);
          this.$$l_u.set(o, s);
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Bt(t, i, this.$$p_d, "toProp"), (a = this.$$c) == null || a.$set({ [t]: this.$$d[t] }));
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
function Bt(e, t, r, i) {
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
function Oo(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function Fo(e, t, r, i, a, o) {
  let s = class extends Ci {
    constructor() {
      super(e, r, a), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Yt(t).map(
        (f) => (t[f].attribute || f).toLowerCase()
      );
    }
  };
  return Yt(t).forEach((f) => {
    Wt(s.prototype, f, {
      get() {
        return this.$$c && f in this.$$c ? this.$$c[f] : this.$$d[f];
      },
      set(c) {
        var v;
        c = Bt(f, c, t), this.$$d[f] = c;
        var d = this.$$c;
        if (d) {
          var m = (v = tt(d, f)) == null ? void 0 : v.get;
          m ? d[f] = c : d.$set({ [f]: c });
        }
      }
    });
  }), i.forEach((f) => {
    Wt(s.prototype, f, {
      get() {
        var c;
        return (c = this.$$c) == null ? void 0 : c[f];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
const xi = new TextEncoder();
function Vo(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function Mo(e, t = "SHA-256", r = 1e5) {
  const i = Date.now().toString(16);
  e || (e = Math.round(Math.random() * r));
  const a = await ki(i, e, t);
  return {
    algorithm: t,
    challenge: a,
    salt: i,
    signature: ""
  };
}
async function ki(e, t, r) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return Vo(
    await crypto.subtle.digest(
      r.toUpperCase(),
      xi.encode(e + t)
    )
  );
}
function Uo(e, t, r = "SHA-256", i = 1e6, a = 0) {
  const o = new AbortController(), s = Date.now();
  return {
    promise: (async () => {
      for (let c = a; c <= i; c += 1) {
        if (o.signal.aborted)
          return null;
        if (await ki(t, c, r) === e)
          return {
            number: c,
            took: Date.now() - s
          };
      }
      return null;
    })(),
    controller: o
  };
}
function Pn() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function jo(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let i = 0; i < t.length; i++)
    r[i] = t.charCodeAt(i);
  return r;
}
function qo(e, t = 12) {
  const r = new Uint8Array(t);
  for (let i = 0; i < t; i++)
    r[i] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function Bo(e, t = "", r = 1e6, i = 0) {
  const a = "AES-GCM", o = new AbortController(), s = Date.now(), f = async () => {
    for (let m = i; m <= r; m += 1) {
      if (o.signal.aborted || !c || !d)
        return null;
      try {
        const v = await crypto.subtle.decrypt(
          {
            name: a,
            iv: qo(m)
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
    d = jo(e);
    const m = await crypto.subtle.digest(
      "SHA-256",
      xi.encode(t)
    );
    c = await crypto.subtle.importKey(
      "raw",
      m,
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
    promise: f(),
    controller: o
  };
}
var E = /* @__PURE__ */ ((e) => (e.CODE = "code", e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(E || {}), X = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.LOADING = "loading", e.PLAYING = "playing", e.PAUSED = "paused", e.READY = "ready", e))(X || {});
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  register: (e, t) => {
    globalThis.altchaI18n[e] = t;
  }
};
const Ho = {
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
globalThis.altchaI18n.register("en", Ho);
const br = (e, t) => {
  let r = /* @__PURE__ */ Wa(() => Sa(t == null ? void 0 : t(), 24));
  var i = Zo();
  Ne(() => {
    N(i, "width", l(r)), N(i, "height", l(r));
  }), U(e, i);
};
function Go(e, t) {
  e.code === "Space" && (e.preventDefault(), e.stopImmediatePropagation(), t());
}
function Yo(e, t) {
  e.preventDefault(), t();
}
function Wo(e, t, r, i, a, o, s, f) {
  var c;
  [
    E.UNVERIFIED,
    E.ERROR,
    E.EXPIRED,
    E.CODE
  ].includes(l(t)) ? r() !== !1 && ((c = l(i)) == null ? void 0 : c.reportValidity()) === !1 ? w(a, !1) : o() ? s() : f() : w(a, !0);
}
var Zo = /* @__PURE__ */ ar('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="altcha-spinner"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor"></path></svg>'), zo = /* @__PURE__ */ we('<input type="hidden">'), Jo = /* @__PURE__ */ we('<div><a target="_blank" class="altcha-logo" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor"></path></svg></a></div>'), Ko = /* @__PURE__ */ ar('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg>'), Xo = /* @__PURE__ */ ar('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z"></path></svg>'), Qo = /* @__PURE__ */ ar('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"></path></svg>'), el = /* @__PURE__ */ we('<button type="button" class="altcha-code-challenge-audio"><!></button>'), tl = /* @__PURE__ */ we("<audio hidden autoplay><source></audio>"), rl = /* @__PURE__ */ we('<div class="altcha-code-challenge" role="dialog"><div class="altcha-code-challenge-arrow"></div> <form data-code-challenge-form="1"><img class="altcha-code-challenge-image" alt=""> <input type="text" autocomplete="off" name="code" class="altcha-code-challenge-input" required> <div class="altcha-code-challenge-buttons"><div class="altcha-code-challenge-buttons-left"><!> <button type="button" class="altcha-code-challenge-reload"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z"></path></svg></button></div> <button type="submit" class="altcha-code-challenge-verify"><!> </button></div> <!></form></div>'), nl = /* @__PURE__ */ we("<div><!></div>"), il = /* @__PURE__ */ we("<div><!></div>"), al = /* @__PURE__ */ we('<div class="altcha-error"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg> <!></div>'), ol = /* @__PURE__ */ we('<div class="altcha-footer"><div><!></div></div>'), ll = /* @__PURE__ */ we('<div class="altcha-anchor-arrow"></div>'), sl = /* @__PURE__ */ we('<!> <div class="altcha"><div class="altcha-main"><div><!> <input type="checkbox"></div> <label class="altcha-label"><!></label> <!> <!> <!></div> <!> <!> <!></div>', 1);
function ul(e, t) {
  var pn, bn;
  hi(t, !0);
  let r = R(t, "auto", 7, void 0), i = R(t, "blockspam", 7, void 0), a = R(t, "challengeurl", 7, void 0), o = R(t, "challengejson", 7, void 0), s = R(t, "credentials", 7, void 0), f = R(t, "customfetch", 7, void 0), c = R(t, "debug", 7, !1), d = R(t, "delay", 7, 0), m = R(t, "disableautofocus", 7, !1), v = R(t, "expire", 7, void 0), h = R(t, "floating", 7, void 0), b = R(t, "floatinganchor", 7, void 0), k = R(t, "floatingoffset", 7, void 0), D = R(t, "floatingpersist", 7, !1), F = R(t, "hidefooter", 7, !1), ue = R(t, "hidelogo", 7, !1), ie = R(t, "id", 7, void 0), J = R(t, "language", 7, void 0), fe = R(t, "name", 7, "altcha"), ye = R(t, "maxnumber", 7, 1e6), j = R(t, "mockerror", 7, !1), Q = R(t, "obfuscated", 7, void 0), Ve = R(t, "plugins", 7, void 0), bt = R(t, "refetchonexpire", 7, !0), Je = R(t, "sentinel", 7, void 0), Ee = R(t, "spamfilter", 7, !1), at = R(t, "strings", 7, void 0), he = R(t, "test", 7, !1), ee = R(t, "verifyurl", 7, void 0), ot = R(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), wt = R(t, "workerurl", 7, void 0);
  const Or = ["SHA-256", "SHA-384", "SHA-512"], Ai = "https://altcha.org/", Me = (n, u) => {
    t.$$host.dispatchEvent(new CustomEvent(n, { detail: u }));
  }, Fr = (bn = (pn = document.documentElement.lang) == null ? void 0 : pn.split("-")) == null ? void 0 : bn[0], or = /* @__PURE__ */ He(() => {
    var n;
    return a() && new URL(a(), location.origin).host.endsWith(".altcha.org") && !!((n = a()) != null && n.includes("apiKey=ckey_"));
  }), lr = /* @__PURE__ */ He(() => o() ? Xr(o()) : void 0), Ri = /* @__PURE__ */ He(() => at() ? Xr(at()) : {}), L = /* @__PURE__ */ He(() => ({
    ...jr(),
    ...l(Ri)
  })), Vr = /* @__PURE__ */ He(() => `${ie() || fe()}_checkbox_${Math.round(Math.random() * 1e8)}`);
  let yt = le(!1), B = le(null), I = le(V(E.UNVERIFIED)), te = le(void 0), Et = le(null), Ue = le(null), sr = le(null), lt = le(null), M = le(null), Ke = le(null), Ce = null, H = le(null), Xe = le(!1), je = [], ur = le(!1), $e = le(null);
  yr(() => {
    Ui(l(Ke));
  }), yr(() => {
    ji(l(I));
  }), To(() => {
    Ii(), l(M) && (l(M).removeEventListener("submit", Wr), l(M).removeEventListener("reset", Zr), l(M).removeEventListener("focusin", Yr), w(M, null)), Ce && (clearTimeout(Ce), Ce = null), document.removeEventListener("click", Hr), document.removeEventListener("scroll", Gr), window.removeEventListener("resize", Kr);
  }), Ei(() => {
    var n;
    $("mounted", "2.0.0-beta.10"), $("workers", ot()), Ti(), $("plugins", je.length ? je.map((u) => u.constructor.pluginName).join(", ") : "none"), he() && $("using test mode"), v() && fr(v()), r() !== void 0 && $("auto", r()), h() !== void 0 && en(h()), w(M, V((n = l(te)) == null ? void 0 : n.closest("form"))), l(M) && (l(M).addEventListener("submit", Wr, { capture: !0 }), l(M).addEventListener("reset", Zr), (r() === "onfocus" || D() === "focus") && l(M).addEventListener("focusin", Yr)), r() === "onload" && (Q() ? Ct() : Se()), l(or) && (F() || ue()) && $("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
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
  function Ii() {
    for (const n of je)
      n.destroy();
  }
  function Mr() {
    a() && bt() && l(I) === E.VERIFIED ? Se() : st(E.EXPIRED, l(L).expired);
  }
  async function $i() {
    var n;
    if (j())
      throw $("mocking error"), new Error("Mocked error.");
    if (l(lr))
      return $("using provided json data"), l(lr);
    if (he())
      return $("generating test challenge", { test: he() }), Mo(typeof he() != "boolean" ? +he() : void 0);
    {
      if (!a() && l(M)) {
        const C = l(M).getAttribute("action");
        C != null && C.includes("/form/") && a(C + "/altcha");
      }
      if (!a())
        throw new Error("Attribute challengeurl not set.");
      $("fetching challenge from", a());
      const u = {
        credentials: typeof s() == "boolean" ? "include" : s(),
        headers: Ee() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      }, g = await Ur()(a(), u);
      if (!g || !(g instanceof Response))
        throw new Error("Custom fetch function did not return a response.");
      if (g.status !== 200)
        throw new Error(`Server responded with ${g.status}.`);
      const p = g.headers.get("X-Altcha-Config"), _ = await g.json(), A = new URLSearchParams((n = _.salt.split("?")) == null ? void 0 : n[1]), y = A.get("expires") || A.get("expire");
      if (y) {
        const C = new Date(+y * 1e3), q = isNaN(C.getTime()) ? 0 : C.getTime() - Date.now();
        q > 0 && fr(q);
      }
      if (p)
        try {
          const C = JSON.parse(p);
          C && typeof C == "object" && (C.verifyurl && !C.verifyurl.startsWith("javascript:") && (C.verifyurl = Br(C.verifyurl)), nn(C));
        } catch (C) {
          $("unable to configure from X-Altcha-Config", C);
        }
      return _;
    }
  }
  function Si(n) {
    var g, p;
    const u = (g = l(M)) == null ? void 0 : g.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((p = u == null ? void 0 : u.value) == null ? void 0 : p.slice(u.value.indexOf("@"))) || void 0;
  }
  function Ur() {
    let n = fetch;
    if (f())
      if ($("using customfetch"), typeof f() == "string") {
        if (n = globalThis[f()] || null, !n)
          throw new Error(`Custom fetch function not found: ${f()}`);
      } else
        n = f();
    return n;
  }
  function jr(n = [
    J() || "",
    document.documentElement.lang || "",
    ...navigator.languages
  ]) {
    const u = Object.keys(globalThis.altchaI18n).map((p) => p.toLowerCase()), g = n.reduce(
      (p, _) => (_ = _.toLowerCase(), p || (globalThis.altchaI18n[_] ? _ : null) || u.find((A) => _.split("-")[0] === A.split("-")[0]) || null),
      null
    );
    return globalThis.altchaI18n[g || "en"];
  }
  function Ni() {
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
  function qr(n) {
    var g;
    return [
      ...((g = l(M)) == null ? void 0 : g.querySelectorAll(n != null && n.length ? n.map((p) => `input[name="${p}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (p, _) => {
        const A = _.name, y = _.value;
        return A && y && (p[A] = /\n/.test(y) ? y.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : y), p;
      },
      {}
    );
  }
  function Br(n, u) {
    const g = new URL(a() || location.origin), p = new URL(n, g);
    if (p.search || (p.search = g.search), u)
      for (const _ in u)
        u[_] !== void 0 && u[_] !== null && p.searchParams.set(_, u[_]);
    return p.toString();
  }
  function Ti() {
    const n = Ve() !== void 0 ? Ve().split(",") : void 0;
    for (const u of globalThis.altchaPlugins)
      (!n || n.includes(u.pluginName)) && je.push(new u({
        el: l(te),
        clarify: Ct,
        dispatch: Me,
        getConfiguration: an,
        getFloatingAnchor: on,
        getState: ln,
        log: $,
        reset: st,
        solve: rn,
        setState: xe,
        setFloatingAnchor: un,
        verify: Se
      }));
  }
  function $(...n) {
    (c() || n.some((u) => u instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${fe()}]`, ...n);
  }
  function Di() {
    w(H, V(X.PAUSED));
  }
  function Li(n) {
    w(H, V(X.ERROR));
  }
  function Pi() {
    w(H, V(X.READY));
  }
  function Oi() {
    w(H, V(X.LOADING));
  }
  function Fi() {
    w(H, V(X.PLAYING));
  }
  function Vi() {
    w(H, V(X.PAUSED));
  }
  function Mi(n) {
    var u;
    if (n.preventDefault(), n.stopPropagation(), l(B)) {
      const g = new FormData(n.target), p = String(g.get("code"));
      if ((u = ee()) != null && u.startsWith("javascript:")) {
        const _ = ee().replace(/^javascript:/, "");
        if ($(`calling ${_} function instead of verifyurl`), !(_ in globalThis))
          throw new Error(`Global function "${_}" is undefined.`);
        return globalThis[_]({
          challenge: l(B).challenge,
          code: p,
          solution: l(B).solution
        });
      }
      w(Xe, !0), Qr(Lt(l(B).challenge, l(B).solution), p).then(({ reason: _, verified: A }) => {
        A ? (w(B, null), xe(E.VERIFIED), $("verified"), pr().then(() => {
          var y;
          (y = l(sr)) == null || y.focus(), Me("verified", { payload: l($e) });
        })) : (st(), w(Ke, V(_ || "Verification failed")));
      }).catch((_) => {
        w(B, null), xe(E.ERROR, _), $("sentinel verification failed:", _);
      }).finally(() => {
        w(Xe, !1);
      });
    }
  }
  function Hr(n) {
    var g;
    const u = n.target;
    h() && u && !l(te).contains(u) && (l(I) === E.VERIFIED && D() === !1 || l(I) === E.VERIFIED && D() === "focus" && !((g = l(M)) != null && g.matches(":focus-within")) || r() === "off" && l(I) === E.UNVERIFIED) && sn();
  }
  function Gr() {
    h() && l(I) !== E.UNVERIFIED && xt();
  }
  function Ui(n) {
    for (const u of je)
      typeof u.onErrorChange == "function" && u.onErrorChange(l(Ke));
  }
  function Yr(n) {
    l(I) === E.UNVERIFIED ? Se() : h() && D() === "focus" && l(I) === E.VERIFIED && cr();
  }
  function Wr(n) {
    const u = n.target, g = n.submitter;
    u != null && u.hasAttribute("data-code-challenge-form") || (l(M) && r() === "onsubmit" ? l(I) === E.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), Se().then(() => {
      var _;
      g && ["INPUT", "BUTTON"].includes(g.tagName) && g.getAttribute("name") ? g.click() : (_ = l(M)) == null || _.requestSubmit();
    })) : l(I) !== E.VERIFIED && (n.preventDefault(), n.stopPropagation(), l(I) === E.VERIFYING && zr()) : l(M) && h() && r() === "off" && l(I) === E.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), cr()));
  }
  function Zr() {
    st();
  }
  function zr() {
    l(I) === E.VERIFYING && l(L).waitAlert && alert(l(L).waitAlert);
  }
  function Jr() {
    l(Ue) ? l(Ue).paused ? (l(Ue).currentTime = 0, l(Ue).play()) : l(Ue).pause() : (w(ur, !0), requestAnimationFrame(() => {
      var n;
      (n = l(Ue)) == null || n.play();
    }));
  }
  function ji(n) {
    for (const u of je)
      typeof u.onStateChange == "function" && u.onStateChange(l(I));
    h() && l(I) !== E.UNVERIFIED && requestAnimationFrame(() => {
      xt();
    }), w(yt, l(I) === E.VERIFIED);
  }
  function Kr() {
    h() && xt();
  }
  function Xr(n) {
    return JSON.parse(n);
  }
  async function qi(n) {
    if (!ee())
      throw new Error("Attribute verifyurl not set.");
    $("requesting server verification from", ee());
    const u = { payload: n };
    if (Ee() !== !1) {
      const {
        blockedCountries: _,
        classifier: A,
        disableRules: y,
        email: C,
        expectedLanguages: q,
        expectedCountries: K,
        fields: ae,
        ipAddress: qe,
        text: hr,
        timeZone: Ft
      } = Ni();
      u.blockedCountries = _, u.classifier = A, u.disableRules = y, u.email = C === !1 ? void 0 : Si(C), u.expectedCountries = K, u.expectedLanguages = q || (Fr ? [Fr] : void 0), u.fields = ae === !1 ? void 0 : qr(ae), u.ipAddress = qe === !1 ? void 0 : qe || "auto", u.text = hr, u.timeZone = Ft === !1 ? void 0 : Ft || Pn();
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
    const p = await g.json();
    if (p != null && p.payload && w($e, V(p.payload)), Me("serververification", p), i() && p.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  async function Qr(n, u) {
    if (!ee())
      throw new Error("Attribute verifyurl not set.");
    $("requesting sentinel verification from", ee());
    const g = { code: u, payload: n };
    Je() && (g.fields = Je().fields ? qr() : void 0, g.timeZone = Je().timeZone ? Pn() : void 0);
    const p = await fetch(ee(), {
      body: JSON.stringify(g),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (p.status !== 200)
      throw new Error(`Server responded with ${p.status}.`);
    const _ = await p.json();
    return _ != null && _.payload && w($e, V(_.payload)), Me("sentinelverification", _), _;
  }
  function fr(n) {
    $("expire", n), Ce && (clearTimeout(Ce), Ce = null), n < 1 ? Mr() : Ce = setTimeout(Mr, n);
  }
  function en(n) {
    $("floating", n), h() !== n && (l(te).style.left = "", l(te).style.top = ""), h(n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : h()), h() ? (r() || r("onsubmit"), document.addEventListener("scroll", Gr), document.addEventListener("click", Hr), window.addEventListener("resize", Kr)) : r() === "onsubmit" && r(void 0);
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
        u = await Bi(n, n.maxNumber || n.maxnumber || ye());
      } catch (g) {
        $(g);
      }
      if ((u == null ? void 0 : u.number) !== void 0 || "obfuscated" in n)
        return { data: n, solution: u };
    }
    if ("obfuscated" in n) {
      const g = await Bo(n.obfuscated, n.key, n.maxNumber || n.maxnumber);
      return { data: n, solution: await g.promise };
    }
    return {
      data: n,
      solution: await Uo(n.challenge, n.salt, n.algorithm, n.maxNumber || n.maxnumber || ye()).promise
    };
  }
  async function Bi(n, u = typeof he() == "number" ? he() : n.maxNumber || n.maxnumber || ye(), g = Math.ceil(ot())) {
    const p = [];
    g = Math.min(16, u, Math.max(1, g));
    for (let y = 0; y < g; y++)
      p.push(altchaCreateWorker(wt()));
    const _ = Math.ceil(u / g), A = await Promise.all(p.map((y, C) => {
      const q = C * _;
      return new Promise((K) => {
        y.addEventListener("message", (ae) => {
          if (ae.data)
            for (const qe of p)
              qe !== y && qe.postMessage({ type: "abort" });
          K(ae.data);
        }), y.postMessage({
          payload: n,
          max: q + _,
          start: q,
          type: "work"
        });
      });
    }));
    for (const y of p)
      y.terminate();
    return A.find((y) => !!y) || null;
  }
  async function Ct() {
    if (!Q()) {
      xe(E.ERROR);
      return;
    }
    const n = je.find((u) => u.constructor.pluginName === "obfuscation");
    if (!n || !("clarify" in n)) {
      xe(E.ERROR), $("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in n && typeof n.clarify == "function")
      return n.clarify();
  }
  function nn(n) {
    n.obfuscated !== void 0 && Q(n.obfuscated), n.auto !== void 0 && (r(n.auto), r() === "onload" && (Q() ? Ct() : Se())), n.blockspam !== void 0 && i(!!n.blockspam), n.customfetch !== void 0 && f(n.customfetch), n.floatinganchor !== void 0 && b(n.floatinganchor), n.delay !== void 0 && d(n.delay), n.floatingoffset !== void 0 && k(n.floatingoffset), n.floating !== void 0 && en(n.floating), n.expire !== void 0 && (fr(n.expire), v(n.expire)), n.challenge && (o(typeof n.challenge == "string" ? n.challenge : JSON.stringify(n.challenge)), tn(l(lr))), n.challengeurl !== void 0 && a(n.challengeurl), n.debug !== void 0 && c(!!n.debug), n.hidefooter !== void 0 && F(!!n.hidefooter), n.hidelogo !== void 0 && ue(!!n.hidelogo), n.language !== void 0 && at(jr([n.language])), n.maxnumber !== void 0 && ye(+n.maxnumber), n.mockerror !== void 0 && j(!!n.mockerror), n.name !== void 0 && fe(n.name), n.refetchonexpire !== void 0 && bt(!!n.refetchonexpire), n.sentinel !== void 0 && typeof n.sentinel == "object" && Je(n.sentinel), n.spamfilter !== void 0 && Ee(typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && at(typeof n.strings == "string" ? n.strings : JSON.stringify(n.strings)), n.test !== void 0 && he(typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && ee(n.verifyurl), n.workers !== void 0 && ot(+n.workers), n.workerurl !== void 0 && wt(n.workerurl);
  }
  function an() {
    return {
      auto: r(),
      blockspam: i(),
      challengeurl: a(),
      debug: c(),
      delay: d(),
      expire: v(),
      floating: h(),
      floatinganchor: b(),
      floatingoffset: k(),
      hidefooter: F(),
      hidelogo: ue(),
      name: fe(),
      maxnumber: ye(),
      mockerror: j(),
      obfuscated: Q(),
      refetchonexpire: bt(),
      spamfilter: Ee(),
      strings: l(L),
      test: he(),
      verifyurl: ee(),
      workers: ot(),
      workerurl: wt()
    };
  }
  function on() {
    return l(lt);
  }
  function Hi(n) {
    return je.find((u) => u.constructor.pluginName === n);
  }
  function ln() {
    return l(I);
  }
  function sn() {
    l(te).style.display = "none";
  }
  function xt(n = 20) {
    var u;
    if (l(te))
      if (l(lt) || w(lt, V((b() ? document.querySelector(b()) : (u = l(M)) == null ? void 0 : u.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || l(M))), l(lt)) {
        const g = parseInt(k(), 10) || 12, p = l(lt).getBoundingClientRect(), _ = l(te).getBoundingClientRect(), A = document.documentElement.clientHeight, y = document.documentElement.clientWidth, C = h() === "auto" ? p.bottom + _.height + g + n > A : h() === "top", q = Math.max(n, Math.min(y - n - _.width, p.left + p.width / 2 - _.width / 2));
        if (C ? l(te).style.top = `${p.top - (_.height + g)}px` : l(te).style.top = `${p.bottom + g}px`, l(te).style.left = `${q}px`, l(te).setAttribute("data-floating", C ? "top" : "bottom"), l(Et)) {
          const K = l(Et).getBoundingClientRect();
          l(Et).style.left = p.left - q + p.width / 2 - K.width / 2 + "px";
        }
      } else
        $("unable to find floating anchor element");
  }
  function st(n = E.UNVERIFIED, u = null) {
    Ce && (clearTimeout(Ce), Ce = null), w(yt, !1), w($e, null), w(B, null), w(ur, !1), w(H, null), xe(n, u);
  }
  function un(n) {
    w(lt, V(n));
  }
  function xe(n, u = null) {
    w(I, V(n)), w(Ke, V(u)), Me("statechange", {
      payload: l($e),
      state: l(I)
    });
  }
  function cr() {
    l(te).style.display = "block", h() && xt();
  }
  async function Se() {
    return st(E.VERIFYING), await new Promise((n) => setTimeout(n, d() || 0)), $i().then((n) => (tn(n), $("challenge", n), rn(n))).then(({ data: n, solution: u }) => {
      var g;
      if ($("solution", u), !u || n && "challenge" in n && !("clearText" in u))
        if ((u == null ? void 0 : u.number) !== void 0 && "challenge" in n)
          if (ee() && "codeChallenge" in n)
            ((g = document.activeElement) == null ? void 0 : g.tagName) === "INPUT" && m() === !1 && document.activeElement.blur(), w(B, V({ challenge: n, solution: u }));
          else {
            if (ee() && Je() !== void 0)
              return Qr(Lt(n, u));
            if (ee())
              return qi(Lt(n, u));
            w($e, V(Lt(n, u))), $("payload", l($e));
          }
        else
          throw $("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      l(B) ? (xe(E.CODE), pr().then(() => {
        Me("code", { codeChallenge: l(B) });
      })) : (xe(E.VERIFIED), $("verified"), pr().then(() => {
        Me("verified", { payload: l($e) });
      }));
    }).catch((n) => {
      $(n), xe(E.ERROR, n.message);
    });
  }
  var fn = sl(), cn = Rt(fn);
  xo(cn, t, "default", {});
  var kt = Z(cn, 2), dr = W(kt), Pt = W(dr);
  let dn;
  var hn = W(Pt);
  {
    var Gi = (n) => {
      br(n);
    };
    z(hn, (n) => {
      l(I) === E.VERIFYING && n(Gi);
    });
  }
  var Qe = Z(hn, 2);
  Tn(Qe), Qe.__change = [
    Wo,
    I,
    Ee,
    M,
    yt,
    Q,
    Ct,
    Se
  ], Ut(Qe, (n) => w(sr, n), () => l(sr)), Y(Pt);
  var Ot = Z(Pt, 2), Yi = W(Ot);
  {
    var Wi = (n) => {
      var u = Mt(), g = Rt(u);
      et(g, () => l(L).verified), U(n, u);
    }, Zi = (n, u) => {
      {
        var g = (_) => {
          var A = Mt(), y = Rt(A);
          et(y, () => l(L).verifying), U(_, A);
        }, p = (_, A) => {
          {
            var y = (q) => {
              var K = Mt(), ae = Rt(K);
              et(ae, () => l(L).verificationRequired), U(q, K);
            }, C = (q) => {
              var K = Mt(), ae = Rt(K);
              et(ae, () => l(L).label), U(q, K);
            };
            z(
              _,
              (q) => {
                l(I) === E.CODE ? q(y) : q(C, !1);
              },
              A
            );
          }
        };
        z(
          n,
          (_) => {
            l(I) === E.VERIFYING ? _(g) : _(p, !1);
          },
          u
        );
      }
    };
    z(Yi, (n) => {
      l(I) === E.VERIFIED ? n(Wi) : n(Zi, !1);
    });
  }
  Y(Ot);
  var vn = Z(Ot, 2);
  {
    var zi = (n) => {
      var u = zo();
      Tn(u), Ne(() => {
        N(u, "name", fe()), $o(u, l($e));
      }), U(n, u);
    };
    z(vn, (n) => {
      l(I) === E.VERIFIED && n(zi);
    });
  }
  var gn = Z(vn, 2);
  {
    var Ji = (n) => {
      var u = Jo(), g = W(u);
      N(g, "href", Ai), Y(u), Ne(() => N(g, "aria-label", l(L).ariaLinkLabel)), U(n, u);
    };
    z(gn, (n) => {
      (ue() !== !0 || l(or)) && n(Ji);
    });
  }
  var Ki = Z(gn, 2);
  {
    var Xi = (n) => {
      var u = rl(), g = Z(W(u), 2), p = W(g), _ = Z(p, 2);
      mo(_, !m()), _.__keydown = [
        Go,
        Jr
      ];
      var A = Z(_, 2), y = W(A), C = W(y);
      {
        var q = (_e) => {
          var G = el();
          G.__click = Jr;
          var Vt = W(G);
          {
            var At = (ut) => {
              br(ut, () => 20);
            }, aa = (ut, oa) => {
              {
                var la = (ft) => {
                  var vr = Ko();
                  U(ft, vr);
                }, sa = (ft, vr) => {
                  {
                    var ua = (ct) => {
                      var gr = Xo();
                      U(ct, gr);
                    }, fa = (ct) => {
                      var gr = Qo();
                      U(ct, gr);
                    };
                    z(
                      ft,
                      (ct) => {
                        l(H) === X.PLAYING ? ct(ua) : ct(fa, !1);
                      },
                      vr
                    );
                  }
                };
                z(
                  ut,
                  (ft) => {
                    l(H) === X.ERROR ? ft(la) : ft(sa, !1);
                  },
                  oa
                );
              }
            };
            z(Vt, (ut) => {
              l(H) === X.LOADING ? ut(At) : ut(aa, !1);
            });
          }
          Y(G), Ne(() => {
            N(G, "title", l(L).getAudioChallenge), G.disabled = l(H) === X.LOADING || l(H) === X.ERROR || l(Xe), N(G, "aria-label", l(H) === X.LOADING ? l(L).loading : l(L).getAudioChallenge);
          }), U(_e, G);
        };
        z(C, (_e) => {
          l(B).challenge.codeChallenge.audio && _e(q);
        });
      }
      var K = Z(C, 2);
      K.__click = [Yo, Se], Y(y);
      var ae = Z(y, 2), qe = W(ae);
      {
        var hr = (_e) => {
          br(_e, () => 16);
        };
        z(qe, (_e) => {
          l(Xe) && _e(hr);
        });
      }
      var Ft = Z(qe);
      Y(ae), Y(A);
      var na = Z(A, 2);
      {
        var ia = (_e) => {
          var G = tl(), Vt = W(G);
          Y(G), Ut(G, (At) => w(Ue, At), () => l(Ue)), Ne((At) => N(Vt, "src", At), [
            () => Br(l(B).challenge.codeChallenge.audio, { language: J() })
          ]), Be("loadstart", G, Oi), Be("canplay", G, Pi), Be("pause", G, Vi), Be("playing", G, Fi), Be("ended", G, Di), Be("error", Vt, Li), U(_e, G);
        };
        z(na, (_e) => {
          l(B).challenge.codeChallenge.audio && l(ur) && _e(ia);
        });
      }
      Y(g), Y(u), Ne(() => {
        N(u, "aria-label", l(L).verificationRequired), N(p, "src", l(B).challenge.codeChallenge.image), N(_, "minlength", l(B).challenge.codeChallenge.length || 1), N(_, "maxlength", l(B).challenge.codeChallenge.length), N(_, "placeholder", l(L).enterCode), N(_, "aria-label", l(H) === X.LOADING ? l(L).loading : l(H) === X.PLAYING ? "" : l(L).enterCodeAria), N(_, "aria-live", l(H) ? "assertive" : "polite"), N(_, "aria-busy", l(H) === X.LOADING), _.disabled = l(Xe), N(K, "aria-label", l(L).reload), N(K, "title", l(L).reload), K.disabled = l(Xe), ae.disabled = l(Xe), N(ae, "aria-label", l(L).verify), yo(Ft, ` ${l(L).verify ?? ""}`);
      }), Be("submit", g, Mi, !0), U(n, u);
    };
    z(Ki, (n) => {
      var u;
      (u = l(B)) != null && u.challenge.codeChallenge && n(Xi);
    });
  }
  Y(dr);
  var _n = Z(dr, 2);
  {
    var Qi = (n) => {
      var u = al(), g = Z(W(u), 2);
      {
        var p = (A) => {
          var y = nl(), C = W(y);
          et(C, () => l(L).expired), Y(y), Ne(() => N(y, "title", l(Ke))), U(A, y);
        }, _ = (A) => {
          var y = il(), C = W(y);
          et(C, () => l(L).error), Y(y), Ne(() => N(y, "title", l(Ke))), U(A, y);
        };
        z(g, (A) => {
          l(I) === E.EXPIRED ? A(p) : A(_, !1);
        });
      }
      Y(u), U(n, u);
    };
    z(_n, (n) => {
      (l(Ke) || l(I) === E.EXPIRED) && n(Qi);
    });
  }
  var mn = Z(_n, 2);
  {
    var ea = (n) => {
      var u = ol(), g = W(u), p = W(g);
      et(p, () => l(L).footer), Y(g), Y(u), U(n, u);
    };
    z(mn, (n) => {
      l(L).footer && (F() !== !0 || l(or)) && n(ea);
    });
  }
  var ta = Z(mn, 2);
  {
    var ra = (n) => {
      var u = ll();
      Ut(u, (g) => w(Et, g), () => l(Et)), U(n, u);
    };
    z(ta, (n) => {
      h() && n(ra);
    });
  }
  return Y(kt), Ut(kt, (n) => w(te, n), () => l(te)), Ne(
    (n) => {
      N(kt, "data-state", l(I)), N(kt, "data-floating", h()), dn = Ao(Pt, 1, "altcha-checkbox", null, dn, n), N(Qe, "id", l(Vr)), Qe.required = r() !== "onsubmit" && (!h() || r() !== "off"), N(Ot, "for", l(Vr));
    },
    [
      () => ({
        "altcha-checkbox-verifying": l(I) === E.VERIFYING
      })
    ]
  ), Be("invalid", Qe, zr), No(Qe, () => l(yt), (n) => w(yt, n)), U(e, fn), vi({
    clarify: Ct,
    configure: nn,
    getConfiguration: an,
    getFloatingAnchor: on,
    getPlugin: Hi,
    getState: ln,
    hide: sn,
    repositionFloating: xt,
    reset: st,
    setFloatingAnchor: un,
    setState: xe,
    show: cr,
    verify: Se,
    get auto() {
      return r();
    },
    set auto(n = void 0) {
      r(n), x();
    },
    get blockspam() {
      return i();
    },
    set blockspam(n = void 0) {
      i(n), x();
    },
    get challengeurl() {
      return a();
    },
    set challengeurl(n = void 0) {
      a(n), x();
    },
    get challengejson() {
      return o();
    },
    set challengejson(n = void 0) {
      o(n), x();
    },
    get credentials() {
      return s();
    },
    set credentials(n = void 0) {
      s(n), x();
    },
    get customfetch() {
      return f();
    },
    set customfetch(n = void 0) {
      f(n), x();
    },
    get debug() {
      return c();
    },
    set debug(n = !1) {
      c(n), x();
    },
    get delay() {
      return d();
    },
    set delay(n = 0) {
      d(n), x();
    },
    get disableautofocus() {
      return m();
    },
    set disableautofocus(n = !1) {
      m(n), x();
    },
    get expire() {
      return v();
    },
    set expire(n = void 0) {
      v(n), x();
    },
    get floating() {
      return h();
    },
    set floating(n = void 0) {
      h(n), x();
    },
    get floatinganchor() {
      return b();
    },
    set floatinganchor(n = void 0) {
      b(n), x();
    },
    get floatingoffset() {
      return k();
    },
    set floatingoffset(n = void 0) {
      k(n), x();
    },
    get floatingpersist() {
      return D();
    },
    set floatingpersist(n = !1) {
      D(n), x();
    },
    get hidefooter() {
      return F();
    },
    set hidefooter(n = !1) {
      F(n), x();
    },
    get hidelogo() {
      return ue();
    },
    set hidelogo(n = !1) {
      ue(n), x();
    },
    get id() {
      return ie();
    },
    set id(n = void 0) {
      ie(n), x();
    },
    get language() {
      return J();
    },
    set language(n = void 0) {
      J(n), x();
    },
    get name() {
      return fe();
    },
    set name(n = "altcha") {
      fe(n), x();
    },
    get maxnumber() {
      return ye();
    },
    set maxnumber(n = 1e6) {
      ye(n), x();
    },
    get mockerror() {
      return j();
    },
    set mockerror(n = !1) {
      j(n), x();
    },
    get obfuscated() {
      return Q();
    },
    set obfuscated(n = void 0) {
      Q(n), x();
    },
    get plugins() {
      return Ve();
    },
    set plugins(n = void 0) {
      Ve(n), x();
    },
    get refetchonexpire() {
      return bt();
    },
    set refetchonexpire(n = !0) {
      bt(n), x();
    },
    get sentinel() {
      return Je();
    },
    set sentinel(n = void 0) {
      Je(n), x();
    },
    get spamfilter() {
      return Ee();
    },
    set spamfilter(n = !1) {
      Ee(n), x();
    },
    get strings() {
      return at();
    },
    set strings(n = void 0) {
      at(n), x();
    },
    get test() {
      return he();
    },
    set test(n = !1) {
      he(n), x();
    },
    get verifyurl() {
      return ee();
    },
    set verifyurl(n = void 0) {
      ee(n), x();
    },
    get workers() {
      return ot();
    },
    set workers(n = Math.min(16, navigator.hardwareConcurrency || 8)) {
      ot(n), x();
    },
    get workerurl() {
      return wt();
    },
    set workerurl(n = void 0) {
      wt(n), x();
    }
  });
}
wo(["change", "keydown", "click"]);
customElements.define("altcha-widget", Fo(
  ul,
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
const fl = '@keyframes altcha-spinner{to{transform:rotate(360deg)}}.altcha{background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);position:relative}.altcha:focus-within{border-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating]{background:var(--altcha-color-base, white);display:none;filter:drop-shadow(3px 3px 6px rgba(0,0,0,.2));left:-100%;position:fixed;top:-100%;width:var(--altcha-max-width, 260px);z-index:999999}.altcha[data-floating=top] .altcha-anchor-arrow{border-bottom-color:transparent;border-top-color:var(--altcha-color-border, #a0a0a0);bottom:-12px;top:auto}.altcha[data-floating=bottom]:focus-within::after{border-bottom-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating=top]:focus-within::after{border-top-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating]:not([data-state=unverified]){display:block}.altcha-anchor-arrow{border:6px solid transparent;border-bottom-color:var(--altcha-color-border, #a0a0a0);content:"";height:0;left:12px;position:absolute;top:-12px;width:0}.altcha-main{align-items:center;display:flex;gap:.4rem;padding:.7rem;position:relative}.altcha-code-challenge{background:var(--altcha-color-base, white);border:1px solid var(--altcha-color-border-focus, currentColor);border-radius:var(--altcha-border-radius, 3px);filter:drop-shadow(3px 3px 6px rgba(0,0,0,.2));padding:.5rem;position:absolute;top:2.5rem;z-index:9999999}.altcha-code-challenge>form{display:flex;flex-direction:column;gap:.5rem}.altcha-code-challenge-input{border:1px solid currentColor;border-radius:3px;box-sizing:border-box;outline:0;font-size:16px;padding:.35rem;width:220px}.altcha-code-challenge-input:focus{outline:2px solid color-mix(in srgb,var(--altcha-color-active, #1D1DC9) 20%,transparent)}.altcha-code-challenge-input:disabled{opacity:.7}.altcha-code-challenge-image{background-color:#fff;border:1px solid currentColor;border-radius:3px;box-sizing:border-box;object-fit:contain;height:50px;width:220px}.altcha-code-challenge-audio,.altcha-code-challenge-reload{background:color-mix(in srgb,var(--altcha-color-text, currentColor) 10%,transparent);border:0;border-radius:3px;color:var(--altcha-color-text, currentColor);cursor:pointer;display:flex;align-items:center;justify-content:center;padding:.35rem}.altcha-code-challenge-audio:disabled,.altcha-code-challenge-reload:disabled,.altcha-code-challenge-verify:disabled{opacity:.7;pointer-events:none}.altcha-code-challenge-audio>*,.altcha-code-challenge-reload>*{height:20px;width:20px}.altcha-code-challenge-buttons{display:flex;justify-content:space-between}.altcha-code-challenge-buttons-left{display:flex;gap:.25rem}.altcha-code-challenge-verify{align-items:center;background:var(--altcha-color-active, #1D1DC9);border:0;border-radius:3px;color:#fff;cursor:pointer;display:flex;gap:.5rem;font-size:100%;padding:.35rem 1rem}.altcha-code-challenge-arrow{border:6px solid transparent;border-bottom-color:var(--altcha-color-border, currentColor);content:"";height:0;left:.15rem;position:absolute;top:-12px;width:0}.altcha[data-floating=top] .altcha-code-challenge{top:-150px}.altcha[data-floating=top] .altcha-code-challenge-arrow{border-bottom-color:transparent;border-top-color:var(--altcha-color-border, currentColor);bottom:-12px;top:auto}.altcha-label{cursor:pointer;flex-grow:1}.altcha-logo{color:currentColor;opacity:.7}.altcha-footer:hover,.altcha-logo:hover{opacity:1}.altcha-error{color:var(--altcha-color-error-text, #f23939);display:flex;font-size:.85rem;gap:.3rem;padding:0 .7rem .7rem}.altcha-footer{align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:.75rem;opacity:.7;justify-content:end;padding:.2rem .7rem}.altcha-footer a{color:currentColor}.altcha-checkbox{display:flex;align-items:center;justify-content:center;height:24px;position:relative;width:24px}.altcha-checkbox .altcha-spinner{bottom:0;left:0;position:absolute;right:0;top:0}.altcha-checkbox input{width:18px;height:18px;margin:0}.altcha-checkbox-verifying input{appearance:none;opacity:0;pointer-events:none}.altcha-spinner{animation:altcha-spinner .75s infinite linear;transform-origin:center}';
function cl(e, t = "__altcha-css") {
  if (!document.getElementById(t)) {
    const r = document.createElement("style");
    r.id = t, r.textContent = e, document.head.appendChild(r);
  }
}
globalThis.altchaCreateWorker = (e) => e ? new Worker(new URL(e)) : new ha();
cl(fl);
export {
  ul as Altcha
};
