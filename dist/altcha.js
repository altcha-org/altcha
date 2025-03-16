var mi = Object.defineProperty;
var Mr = (e) => {
  throw TypeError(e);
};
var wi = (e, t, r) => t in e ? mi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ie = (e, t, r) => wi(e, typeof t != "symbol" ? t + "" : t, r), Ur = (e, t, r) => t.has(e) || Mr("Cannot " + r);
var Y = (e, t, r) => (Ur(e, t, "read from private field"), r ? r.call(e) : t.get(e)), jt = (e, t, r) => t.has(e) ? Mr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), Vt = (e, t, r, l) => (Ur(e, t, "write to private field"), l ? l.call(e, r) : t.set(e, r), r);
const nn = `(function(){"use strict";const d=new TextEncoder;function p(e){return[...new Uint8Array(e)].map(t=>t.toString(16).padStart(2,"0")).join("")}async function b(e,t,r){if(typeof crypto>"u"||!("subtle"in crypto)||!("digest"in crypto.subtle))throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");return p(await crypto.subtle.digest(r.toUpperCase(),d.encode(e+t)))}function w(e,t,r="SHA-256",n=1e6,s=0){const o=new AbortController,a=Date.now();return{promise:(async()=>{for(let c=s;c<=n;c+=1){if(o.signal.aborted)return null;if(await b(t,c,r)===e)return{number:c,took:Date.now()-a}}return null})(),controller:o}}function h(e){const t=atob(e),r=new Uint8Array(t.length);for(let n=0;n<t.length;n++)r[n]=t.charCodeAt(n);return r}function g(e,t=12){const r=new Uint8Array(t);for(let n=0;n<t;n++)r[n]=e%256,e=Math.floor(e/256);return r}async function m(e,t="",r=1e6,n=0){const s="AES-GCM",o=new AbortController,a=Date.now(),l=async()=>{for(let u=n;u<=r;u+=1){if(o.signal.aborted||!c||!y)return null;try{const f=await crypto.subtle.decrypt({name:s,iv:g(u)},c,y);if(f)return{clearText:new TextDecoder().decode(f),took:Date.now()-a}}catch{}}return null};let c=null,y=null;try{y=h(e);const u=await crypto.subtle.digest("SHA-256",d.encode(t));c=await crypto.subtle.importKey("raw",u,s,!1,["decrypt"])}catch{return{promise:Promise.reject(),controller:o}}return{promise:l(),controller:o}}let i;onmessage=async e=>{const{type:t,payload:r,start:n,max:s}=e.data;let o=null;if(t==="abort")i==null||i.abort(),i=void 0;else if(t==="work"){if("obfuscated"in r){const{key:a,obfuscated:l}=r||{};o=await m(l,a,s,n)}else{const{algorithm:a,challenge:l,salt:c}=r||{};o=w(l,c,a,s,n)}i=o.controller,o.promise.then(a=>{self.postMessage(a&&{...a,worker:!0})})}}})();
`, jr = typeof self < "u" && self.Blob && new Blob([nn], { type: "text/javascript;charset=utf-8" });
function pi(e) {
  let t;
  try {
    if (t = jr && (self.URL || self.webkitURL).createObjectURL(jr), !t) throw "";
    const r = new Worker(t, {
      name: e == null ? void 0 : e.name
    });
    return r.addEventListener("error", () => {
      (self.URL || self.webkitURL).revokeObjectURL(t);
    }), r;
  } catch {
    return new Worker(
      "data:text/javascript;charset=utf-8," + encodeURIComponent(nn),
      {
        name: e == null ? void 0 : e.name
      }
    );
  } finally {
    t && (self.URL || self.webkitURL).revokeObjectURL(t);
  }
}
const yi = "5";
var rn;
typeof window < "u" && ((rn = window.__svelte ?? (window.__svelte = {})).v ?? (rn.v = /* @__PURE__ */ new Set())).add(yi);
const bi = 1, Ei = 4, xi = 8, $i = 16, ki = 1, Ci = 2, Zt = "[", ln = "[!", an = "]", Ke = {}, Z = Symbol(), Ai = "http://www.w3.org/1999/xhtml", Vr = !1, se = 2, on = 4, St = 8, Gt = 16, ye = 32, Fe = 64, bt = 128, ne = 256, Et = 512, X = 1024, be = 2048, tt = 4096, Xe = 8192, Tt = 16384, Ri = 32768, Jt = 65536, Ii = 1 << 19, sn = 1 << 20, dt = Symbol("$state"), fn = Symbol("legacy props"), Si = Symbol("");
var un = Array.isArray, Ti = Array.prototype.indexOf, Ni = Array.from, xt = Object.keys, $t = Object.defineProperty, Oe = Object.getOwnPropertyDescriptor, Li = Object.getOwnPropertyDescriptors, Di = Object.prototype, Pi = Array.prototype, cn = Object.getPrototypeOf;
function dn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const Oi = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let ht = [], gt = [];
function vn() {
  var e = ht;
  ht = [], dn(e);
}
function hn() {
  var e = gt;
  gt = [], dn(e);
}
function Kt(e) {
  ht.length === 0 && queueMicrotask(vn), ht.push(e);
}
function zi(e) {
  gt.length === 0 && Oi(hn), gt.push(e);
}
function Br() {
  ht.length > 0 && vn(), gt.length > 0 && hn();
}
function gn(e) {
  return e === this.v;
}
function Fi(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function _n(e) {
  return !Fi(e, this.v);
}
function Mi(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ui() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function ji(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Vi() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Bi() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function qi(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Hi() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Wi() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Yi() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Zi() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Gi = !1;
function ue(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: gn,
    rv: 0,
    wv: 0
  };
  return r;
}
function We(e) {
  return /* @__PURE__ */ Ji(ue(e));
}
// @__NO_SIDE_EFFECTS__
function mn(e, t = !1) {
  const r = ue(e);
  return t || (r.equals = _n), r;
}
// @__NO_SIDE_EFFECTS__
function Ji(e) {
  return k !== null && !oe && (k.f & se) !== 0 && (ce === null ? rl([e]) : ce.push(e)), e;
}
function D(e, t) {
  return k !== null && !oe && zn() && (k.f & (se | Gt)) !== 0 && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (ce === null || !ce.includes(e)) && Zi(), Ki(e, t);
}
function Ki(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = kn(), wn(e, be), R !== null && (R.f & X) !== 0 && (R.f & (ye | Fe)) === 0 && (_e === null ? nl([e]) : _e.push(e))), t;
}
function wn(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var l = r.length, i = 0; i < l; i++) {
      var a = r[i], o = a.f;
      (o & be) === 0 && (de(a, t), (o & (X | ne)) !== 0 && ((o & se) !== 0 ? wn(
        /** @type {Derived} */
        a,
        tt
      ) : Dt(
        /** @type {Effect} */
        a
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Pe(e) {
  var t = se | be, r = k !== null && (k.f & se) !== 0 ? (
    /** @type {Derived} */
    k
  ) : null;
  return R === null || r !== null && (r.f & ne) !== 0 ? t |= ne : R.f |= sn, {
    ctx: B,
    deps: null,
    effects: null,
    equals: gn,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: r ?? R
  };
}
function pn(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      pe(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Xi(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & se) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Qi(e) {
  var t, r = R;
  Se(Xi(e));
  try {
    pn(e), t = An(e);
  } finally {
    Se(r);
  }
  return t;
}
function yn(e) {
  var t = Qi(e), r = (Ce || (e.f & ne) !== 0) && e.deps !== null ? tt : X;
  de(e, r), e.equals(t) || (e.v = t, e.wv = kn());
}
function Nt(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let L = !1;
function Je(e) {
  L = e;
}
let P;
function Re(e) {
  if (e === null)
    throw Nt(), Ke;
  return P = e;
}
function Qe() {
  return Re(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Te(P)
  );
}
function G(e) {
  if (L) {
    if (/* @__PURE__ */ Te(P) !== null)
      throw Nt(), Ke;
    P = e;
  }
}
function el() {
  for (var e = 0, t = P; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === an) {
        if (e === 0) return t;
        e -= 1;
      } else (r === Zt || r === ln) && (e += 1);
    }
    var l = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Te(t)
    );
    t.remove(), t = l;
  }
}
function ae(e, t = null, r) {
  if (typeof e != "object" || e === null || dt in e)
    return e;
  const l = cn(e);
  if (l !== Di && l !== Pi)
    return e;
  var i = /* @__PURE__ */ new Map(), a = un(e), o = ue(0);
  a && i.set("length", ue(
    /** @type {any[]} */
    e.length
  ));
  var f;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, c, v) {
        (!("value" in v) || v.configurable === !1 || v.enumerable === !1 || v.writable === !1) && Hi();
        var h = i.get(c);
        return h === void 0 ? (h = ue(v.value), i.set(c, h)) : D(h, ae(v.value, f)), !0;
      },
      deleteProperty(s, c) {
        var v = i.get(c);
        if (v === void 0)
          c in s && i.set(c, ue(Z));
        else {
          if (a && typeof c == "string") {
            var h = (
              /** @type {Source<number>} */
              i.get("length")
            ), g = Number(c);
            Number.isInteger(g) && g < h.v && D(h, g);
          }
          D(v, Z), qr(o);
        }
        return !0;
      },
      get(s, c, v) {
        var p;
        if (c === dt)
          return e;
        var h = i.get(c), g = c in s;
        if (h === void 0 && (!g || (p = Oe(s, c)) != null && p.writable) && (h = ue(ae(g ? s[c] : Z, f)), i.set(c, h)), h !== void 0) {
          var m = d(h);
          return m === Z ? void 0 : m;
        }
        return Reflect.get(s, c, v);
      },
      getOwnPropertyDescriptor(s, c) {
        var v = Reflect.getOwnPropertyDescriptor(s, c);
        if (v && "value" in v) {
          var h = i.get(c);
          h && (v.value = d(h));
        } else if (v === void 0) {
          var g = i.get(c), m = g == null ? void 0 : g.v;
          if (g !== void 0 && m !== Z)
            return {
              enumerable: !0,
              configurable: !0,
              value: m,
              writable: !0
            };
        }
        return v;
      },
      has(s, c) {
        var m;
        if (c === dt)
          return !0;
        var v = i.get(c), h = v !== void 0 && v.v !== Z || Reflect.has(s, c);
        if (v !== void 0 || R !== null && (!h || (m = Oe(s, c)) != null && m.writable)) {
          v === void 0 && (v = ue(h ? ae(s[c], f) : Z), i.set(c, v));
          var g = d(v);
          if (g === Z)
            return !1;
        }
        return h;
      },
      set(s, c, v, h) {
        var M;
        var g = i.get(c), m = c in s;
        if (a && c === "length")
          for (var p = v; p < /** @type {Source<number>} */
          g.v; p += 1) {
            var T = i.get(p + "");
            T !== void 0 ? D(T, Z) : p in s && (T = ue(Z), i.set(p + "", T));
          }
        g === void 0 ? (!m || (M = Oe(s, c)) != null && M.writable) && (g = ue(void 0), D(g, ae(v, f)), i.set(c, g)) : (m = g.v !== Z, D(g, ae(v, f)));
        var O = Reflect.getOwnPropertyDescriptor(s, c);
        if (O != null && O.set && O.set.call(h, v), !m) {
          if (a && typeof c == "string") {
            var q = (
              /** @type {Source<number>} */
              i.get("length")
            ), F = Number(c);
            Number.isInteger(F) && F >= q.v && D(q, F + 1);
          }
          qr(o);
        }
        return !0;
      },
      ownKeys(s) {
        d(o);
        var c = Reflect.ownKeys(s).filter((g) => {
          var m = i.get(g);
          return m === void 0 || m.v !== Z;
        });
        for (var [v, h] of i)
          h.v !== Z && !(v in s) && c.push(v);
        return c;
      },
      setPrototypeOf() {
        Wi();
      }
    }
  );
}
function qr(e, t = 1) {
  D(e, e.v + t);
}
var Hr, bn, En, xn;
function Bt() {
  if (Hr === void 0) {
    Hr = window, bn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    En = Oe(t, "firstChild").get, xn = Oe(t, "nextSibling").get, e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Xt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function we(e) {
  return En.call(e);
}
// @__NO_SIDE_EFFECTS__
function Te(e) {
  return xn.call(e);
}
function J(e, t) {
  if (!L)
    return /* @__PURE__ */ we(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ we(P)
  );
  return r === null && (r = P.appendChild(Xt())), Re(r), r;
}
function Wr(e, t) {
  if (!L) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ we(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Te(r) : r;
  }
  return P;
}
function ge(e, t = 1, r = !1) {
  let l = L ? P : e;
  for (var i; t--; )
    i = l, l = /** @type {TemplateNode} */
    /* @__PURE__ */ Te(l);
  if (!L)
    return l;
  var a = l == null ? void 0 : l.nodeType;
  if (r && a !== 3) {
    var o = Xt();
    return l === null ? i == null || i.after(o) : l.before(o), Re(o), o;
  }
  return Re(l), /** @type {TemplateNode} */
  l;
}
function tl(e) {
  e.textContent = "";
}
let pt = !1, kt = !1, Ct = null, ze = !1, Qt = !1;
function Yr(e) {
  Qt = e;
}
let vt = [];
let k = null, oe = !1;
function Ie(e) {
  k = e;
}
let R = null;
function Se(e) {
  R = e;
}
let ce = null;
function rl(e) {
  ce = e;
}
let V = null, K = 0, _e = null;
function nl(e) {
  _e = e;
}
let $n = 1, At = 0, Ce = !1;
function kn() {
  return ++$n;
}
function _t(e) {
  var h;
  var t = e.f;
  if ((t & be) !== 0)
    return !0;
  if ((t & tt) !== 0) {
    var r = e.deps, l = (t & ne) !== 0;
    if (r !== null) {
      var i, a, o = (t & Et) !== 0, f = l && R !== null && !Ce, s = r.length;
      if (o || f) {
        var c = (
          /** @type {Derived} */
          e
        ), v = c.parent;
        for (i = 0; i < s; i++)
          a = r[i], (o || !((h = a == null ? void 0 : a.reactions) != null && h.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        o && (c.f ^= Et), f && v !== null && (v.f & ne) === 0 && (c.f ^= ne);
      }
      for (i = 0; i < s; i++)
        if (a = r[i], _t(
          /** @type {Derived} */
          a
        ) && yn(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!l || R !== null && !Ce) && de(e, X);
  }
  return !1;
}
function il(e, t) {
  for (var r = t; r !== null; ) {
    if ((r.f & bt) !== 0)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= bt;
      }
    r = r.parent;
  }
  throw pt = !1, e;
}
function ll(e) {
  return (e.f & Tt) === 0 && (e.parent === null || (e.parent.f & bt) === 0);
}
function Lt(e, t, r, l) {
  if (pt) {
    if (r === null && (pt = !1), ll(t))
      throw e;
    return;
  }
  r !== null && (pt = !0);
  {
    il(e, t);
    return;
  }
}
function Cn(e, t, r = !0) {
  var l = e.reactions;
  if (l !== null)
    for (var i = 0; i < l.length; i++) {
      var a = l[i];
      (a.f & se) !== 0 ? Cn(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (r ? de(a, be) : (a.f & X) !== 0 && de(a, tt), Dt(
        /** @type {Effect} */
        a
      ));
    }
}
function An(e) {
  var m;
  var t = V, r = K, l = _e, i = k, a = Ce, o = ce, f = B, s = oe, c = e.f;
  V = /** @type {null | Value[]} */
  null, K = 0, _e = null, Ce = (c & ne) !== 0 && (oe || !ze || k === null), k = (c & (ye | Fe)) === 0 ? e : null, ce = null, Gr(e.ctx), oe = !1, At++;
  try {
    var v = (
      /** @type {Function} */
      (0, e.fn)()
    ), h = e.deps;
    if (V !== null) {
      var g;
      if (Rt(e, K), h !== null && K > 0)
        for (h.length = K + V.length, g = 0; g < V.length; g++)
          h[K + g] = V[g];
      else
        e.deps = h = V;
      if (!Ce)
        for (g = K; g < h.length; g++)
          ((m = h[g]).reactions ?? (m.reactions = [])).push(e);
    } else h !== null && K < h.length && (Rt(e, K), h.length = K);
    if (zn() && _e !== null && !oe && h !== null && (e.f & (se | tt | be)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      _e.length; g++)
        Cn(
          _e[g],
          /** @type {Effect} */
          e
        );
    return i !== null && At++, v;
  } finally {
    V = t, K = r, _e = l, k = i, Ce = a, ce = o, Gr(f), oe = s;
  }
}
function al(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var l = Ti.call(r, e);
    if (l !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[l] = r[i], r.pop());
    }
  }
  r === null && (t.f & se) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (V === null || !V.includes(t)) && (de(t, tt), (t.f & (ne | Et)) === 0 && (t.f ^= Et), pn(
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
    for (var l = t; l < r.length; l++)
      al(e, r[l]);
}
function er(e) {
  var t = e.f;
  if ((t & Tt) === 0) {
    de(e, X);
    var r = R, l = B, i = ze;
    R = e, ze = !0;
    try {
      (t & Gt) !== 0 ? ml(e) : Sn(e), In(e);
      var a = An(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = $n;
      var o = e.deps, f;
      Vr && Gi && e.f & be;
    } catch (s) {
      Lt(s, e, r, l || e.ctx);
    } finally {
      ze = i, R = r;
    }
  }
}
function ol() {
  try {
    Vi();
  } catch (e) {
    if (Ct !== null)
      Lt(e, Ct, null);
    else
      throw e;
  }
}
function Rn() {
  var e = ze;
  try {
    var t = 0;
    for (ze = !0; vt.length > 0; ) {
      t++ > 1e3 && ol();
      var r = vt, l = r.length;
      vt = [];
      for (var i = 0; i < l; i++) {
        var a = fl(r[i]);
        sl(a);
      }
    }
  } finally {
    kt = !1, ze = e, Ct = null;
  }
}
function sl(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var l = e[r];
      if ((l.f & (Tt | Xe)) === 0)
        try {
          _t(l) && (er(l), l.deps === null && l.first === null && l.nodes_start === null && (l.teardown === null ? Tn(l) : l.fn = null));
        } catch (i) {
          Lt(i, l, null, l.ctx);
        }
    }
}
function Dt(e) {
  kt || (kt = !0, queueMicrotask(Rn));
  for (var t = Ct = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (Fe | ye)) !== 0) {
      if ((r & X) === 0) return;
      t.f ^= X;
    }
  }
  vt.push(t);
}
function fl(e) {
  for (var t = [], r = e; r !== null; ) {
    var l = r.f, i = (l & (ye | Fe)) !== 0, a = i && (l & X) !== 0;
    if (!a && (l & Xe) === 0) {
      if ((l & on) !== 0)
        t.push(r);
      else if (i)
        r.f ^= X;
      else {
        var o = k;
        try {
          k = r, _t(r) && er(r);
        } catch (c) {
          Lt(c, r, null, r.ctx);
        } finally {
          k = o;
        }
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
function $(e) {
  var t;
  for (Br(); vt.length > 0; )
    kt = !0, Rn(), Br();
  return (
    /** @type {T} */
    t
  );
}
async function ul() {
  await Promise.resolve(), $();
}
function d(e) {
  var t = e.f, r = (t & se) !== 0;
  if (k !== null && !oe) {
    ce !== null && ce.includes(e) && Yi();
    var l = k.deps;
    e.rv < At && (e.rv = At, V === null && l !== null && l[K] === e ? K++ : V === null ? V = [e] : (!Ce || !V.includes(e)) && V.push(e));
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var i = (
      /** @type {Derived} */
      e
    ), a = i.parent;
    a !== null && (a.f & ne) === 0 && (i.f ^= ne);
  }
  return r && (i = /** @type {Derived} */
  e, _t(i) && yn(i)), e.v;
}
function et(e) {
  var t = oe;
  try {
    return oe = !0, e();
  } finally {
    oe = t;
  }
}
const cl = -7169;
function de(e, t) {
  e.f = e.f & cl | t;
}
function dl(e) {
  R === null && k === null && ji(), k !== null && (k.f & ne) !== 0 && R === null && Ui(), Qt && Mi();
}
function vl(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Me(e, t, r, l = !0) {
  var i = R, a = {
    ctx: B,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | be,
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
      er(a), a.f |= Ri;
    } catch (s) {
      throw pe(a), s;
    }
  else t !== null && Dt(a);
  var o = r && a.deps === null && a.first === null && a.nodes_start === null && a.teardown === null && (a.f & (sn | bt)) === 0;
  if (!o && l && (i !== null && vl(a, i), k !== null && (k.f & se) !== 0)) {
    var f = (
      /** @type {Derived} */
      k
    );
    (f.effects ?? (f.effects = [])).push(a);
  }
  return a;
}
function hl(e) {
  const t = Me(St, null, !1);
  return de(t, X), t.teardown = e, t;
}
function qt(e) {
  dl();
  var t = R !== null && (R.f & ye) !== 0 && B !== null && !B.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      B
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: R,
      reaction: k
    });
  } else {
    var l = tr(e);
    return l;
  }
}
function gl(e) {
  const t = Me(Fe, e, !0);
  return () => {
    pe(t);
  };
}
function _l(e) {
  const t = Me(Fe, e, !0);
  return (r = {}) => new Promise((l) => {
    r.outro ? Ht(t, () => {
      pe(t), l(void 0);
    }) : (pe(t), l(void 0));
  });
}
function tr(e) {
  return Me(on, e, !1);
}
function rr(e) {
  return Me(St, e, !0);
}
function Ye(e, t = [], r = Pe) {
  const l = t.map(r);
  return nr(() => e(...l.map(d)));
}
function nr(e, t = 0) {
  return Me(St | Gt | t, e, !0);
}
function It(e, t = !0) {
  return Me(St | ye, e, !0, t);
}
function In(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Qt, l = k;
    Yr(!0), Ie(null);
    try {
      t.call(null);
    } finally {
      Yr(r), Ie(l);
    }
  }
}
function Sn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var l = r.next;
    (r.f & Fe) !== 0 ? r.parent = null : pe(r, t), r = l;
  }
}
function ml(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & ye) === 0 && pe(t), t = r;
  }
}
function pe(e, t = !0) {
  var r = !1;
  if ((t || (e.f & Ii) !== 0) && e.nodes_start !== null) {
    for (var l = e.nodes_start, i = e.nodes_end; l !== null; ) {
      var a = l === i ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Te(l)
      );
      l.remove(), l = a;
    }
    r = !0;
  }
  Sn(e, t && !r), Rt(e, 0), de(e, Tt);
  var o = e.transitions;
  if (o !== null)
    for (const s of o)
      s.stop();
  In(e);
  var f = e.parent;
  f !== null && f.first !== null && Tn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function Tn(e) {
  var t = e.parent, r = e.prev, l = e.next;
  r !== null && (r.next = l), l !== null && (l.prev = r), t !== null && (t.first === e && (t.first = l), t.last === e && (t.last = r));
}
function Ht(e, t) {
  var r = [];
  Nn(e, r, !0), wl(r, () => {
    pe(e), t && t();
  });
}
function wl(e, t) {
  var r = e.length;
  if (r > 0) {
    var l = () => --r || t();
    for (var i of e)
      i.out(l);
  } else
    t();
}
function Nn(e, t, r) {
  if ((e.f & Xe) === 0) {
    if (e.f ^= Xe, e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || r) && t.push(o);
    for (var l = e.first; l !== null; ) {
      var i = l.next, a = (l.f & Jt) !== 0 || (l.f & ye) !== 0;
      Nn(l, t, a ? r : !1), l = i;
    }
  }
}
function Zr(e) {
  Ln(e, !0);
}
function Ln(e, t) {
  if ((e.f & Xe) !== 0) {
    e.f ^= Xe, (e.f & X) === 0 && (e.f ^= X), _t(e) && (de(e, be), Dt(e));
    for (var r = e.first; r !== null; ) {
      var l = r.next, i = (r.f & Jt) !== 0 || (r.f & ye) !== 0;
      Ln(r, i ? t : !1), r = l;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
function Dn(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let B = null;
function Gr(e) {
  B = e;
}
function Pn(e, t = !1, r) {
  B = {
    p: B,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
}
function On(e) {
  const t = B;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const o = t.e;
    if (o !== null) {
      var r = R, l = k;
      t.e = null;
      try {
        for (var i = 0; i < o.length; i++) {
          var a = o[i];
          Se(a.effect), Ie(a.reaction), tr(a.fn);
        }
      } finally {
        Se(r), Ie(l);
      }
    }
    B = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function zn() {
  return !0;
}
const pl = ["touchstart", "touchmove"];
function yl(e) {
  return pl.includes(e);
}
let Jr = !1;
function Fn() {
  Jr || (Jr = !0, document.addEventListener(
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
function Mn(e) {
  var t = k, r = R;
  Ie(null), Se(null);
  try {
    return e();
  } finally {
    Ie(t), Se(r);
  }
}
function bl(e, t, r, l = r) {
  e.addEventListener(t, () => Mn(r));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), l(!0);
  } : e.__on_r = () => l(!0), Fn();
}
const Un = /* @__PURE__ */ new Set(), Wt = /* @__PURE__ */ new Set();
function El(e, t, r, l = {}) {
  function i(a) {
    if (l.capture || ct.call(t, a), !a.cancelBubble)
      return Mn(() => r == null ? void 0 : r.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Kt(() => {
    t.addEventListener(e, i, l);
  }) : t.addEventListener(e, i, l), i;
}
function xl(e, t, r, l, i) {
  var a = { capture: l, passive: i }, o = El(e, t, r, a);
  (t === document.body || t === window || t === document) && hl(() => {
    t.removeEventListener(e, o, a);
  });
}
function $l(e) {
  for (var t = 0; t < e.length; t++)
    Un.add(e[t]);
  for (var r of Wt)
    r(e);
}
function ct(e) {
  var F;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), l = e.type, i = ((F = e.composedPath) == null ? void 0 : F.call(e)) || [], a = (
    /** @type {null | Element} */
    i[0] || e.target
  ), o = 0, f = e.__root;
  if (f) {
    var s = i.indexOf(f);
    if (s !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var c = i.indexOf(t);
    if (c === -1)
      return;
    s <= c && (o = s);
  }
  if (a = /** @type {Element} */
  i[o] || e.target, a !== t) {
    $t(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var v = k, h = R;
    Ie(null), Se(null);
    try {
      for (var g, m = []; a !== null; ) {
        var p = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var T = a["__" + l];
          if (T != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (un(T)) {
              var [O, ...q] = T;
              O.apply(a, [e, ...q]);
            } else
              T.call(a, e);
        } catch (M) {
          g ? m.push(M) : g = M;
        }
        if (e.cancelBubble || p === t || p === null)
          break;
        a = p;
      }
      if (g) {
        for (let M of m)
          queueMicrotask(() => {
            throw M;
          });
        throw g;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Ie(v), Se(h);
    }
  }
}
function ir(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Ae(e, t) {
  var r = (
    /** @type {Effect} */
    R
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ve(e, t) {
  var r = (t & ki) !== 0, l = (t & Ci) !== 0, i, a = !e.startsWith("<!>");
  return () => {
    if (L)
      return Ae(P, null), P;
    i === void 0 && (i = ir(a ? e : "<!>" + e), r || (i = /** @type {Node} */
    /* @__PURE__ */ we(i)));
    var o = (
      /** @type {TemplateNode} */
      l || bn ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ we(o)
      ), s = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Ae(f, s);
    } else
      Ae(o, o);
    return o;
  };
}
// @__NO_SIDE_EFFECTS__
function kl(e, t, r = "svg") {
  var l = !e.startsWith("<!>"), i = `<${r}>${l ? e : "<!>" + e}</${r}>`, a;
  return () => {
    if (L)
      return Ae(P, null), P;
    if (!a) {
      var o = (
        /** @type {DocumentFragment} */
        ir(i)
      ), f = (
        /** @type {Element} */
        /* @__PURE__ */ we(o)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ we(f);
    }
    var s = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return Ae(s, s), s;
  };
}
function te(e, t) {
  if (L) {
    R.nodes_end = P, Qe();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function jn(e, t) {
  return Vn(e, t);
}
function Cl(e, t) {
  Bt(), t.intro = t.intro ?? !1;
  const r = t.target, l = L, i = P;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ we(r)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== Zt); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ Te(a);
    if (!a)
      throw Ke;
    Je(!0), Re(
      /** @type {Comment} */
      a
    ), Qe();
    const o = Vn(e, { ...t, anchor: a });
    if (P === null || P.nodeType !== 8 || /** @type {Comment} */
    P.data !== an)
      throw Nt(), Ke;
    return Je(!1), /**  @type {Exports} */
    o;
  } catch (o) {
    if (o === Ke)
      return t.recover === !1 && Bi(), Bt(), tl(r), Je(!1), jn(e, t);
    throw o;
  } finally {
    Je(l), Re(i);
  }
}
const Ze = /* @__PURE__ */ new Map();
function Vn(e, { target: t, anchor: r, props: l = {}, events: i, context: a, intro: o = !0 }) {
  Bt();
  var f = /* @__PURE__ */ new Set(), s = (h) => {
    for (var g = 0; g < h.length; g++) {
      var m = h[g];
      if (!f.has(m)) {
        f.add(m);
        var p = yl(m);
        t.addEventListener(m, ct, { passive: p });
        var T = Ze.get(m);
        T === void 0 ? (document.addEventListener(m, ct, { passive: p }), Ze.set(m, 1)) : Ze.set(m, T + 1);
      }
    }
  };
  s(Ni(Un)), Wt.add(s);
  var c = void 0, v = _l(() => {
    var h = r ?? t.appendChild(Xt());
    return It(() => {
      if (a) {
        Pn({});
        var g = (
          /** @type {ComponentContext} */
          B
        );
        g.c = a;
      }
      i && (l.$$events = i), L && Ae(
        /** @type {TemplateNode} */
        h,
        null
      ), c = e(h, l) || {}, L && (R.nodes_end = P), a && On();
    }), () => {
      var p;
      for (var g of f) {
        t.removeEventListener(g, ct);
        var m = (
          /** @type {number} */
          Ze.get(g)
        );
        --m === 0 ? (document.removeEventListener(g, ct), Ze.delete(g)) : Ze.set(g, m);
      }
      Wt.delete(s), h !== r && ((p = h.parentNode) == null || p.removeChild(h));
    };
  });
  return Yt.set(c, v), c;
}
let Yt = /* @__PURE__ */ new WeakMap();
function Al(e, t) {
  const r = Yt.get(e);
  return r ? (Yt.delete(e), r(t)) : Promise.resolve();
}
function ke(e, t, [r, l] = [0, 0]) {
  L && r === 0 && Qe();
  var i = e, a = null, o = null, f = Z, s = r > 0 ? Jt : 0, c = !1;
  const v = (g, m = !0) => {
    c = !0, h(m, g);
  }, h = (g, m) => {
    if (f === (f = g)) return;
    let p = !1;
    if (L && l !== -1) {
      if (r === 0) {
        const O = (
          /** @type {Comment} */
          i.data
        );
        O === Zt ? l = 0 : O === ln ? l = 1 / 0 : (l = parseInt(O.substring(1)), l !== l && (l = f ? 1 / 0 : -1));
      }
      const T = l > r;
      !!f === T && (i = el(), Re(i), Je(!1), p = !0, l = -1);
    }
    f ? (a ? Zr(a) : m && (a = It(() => m(i))), o && Ht(o, () => {
      o = null;
    })) : (o ? Zr(o) : m && (o = It(() => m(i, [r + 1, l]))), a && Ht(a, () => {
      a = null;
    })), p && Je(!0);
  };
  nr(() => {
    c = !1, t(v), c || h(null, null);
  }, s), L && (i = P);
}
function Ge(e, t, r, l, i) {
  var a = e, o = "", f;
  nr(() => {
    if (o === (o = t() ?? "")) {
      L && Qe();
      return;
    }
    f !== void 0 && (pe(f), f = void 0), o !== "" && (f = It(() => {
      if (L) {
        P.data;
        for (var s = Qe(), c = s; s !== null && (s.nodeType !== 8 || /** @type {Comment} */
        s.data !== ""); )
          c = s, s = /** @type {TemplateNode} */
          /* @__PURE__ */ Te(s);
        if (s === null)
          throw Nt(), Ke;
        Ae(P, c), a = Re(s);
        return;
      }
      var v = o + "", h = ir(v);
      Ae(
        /** @type {TemplateNode} */
        /* @__PURE__ */ we(h),
        /** @type {TemplateNode} */
        h.lastChild
      ), a.before(h);
    }));
  });
}
function Rl(e, t, r, l, i) {
  var f;
  L && Qe();
  var a = (f = t.$$slots) == null ? void 0 : f[r], o = !1;
  a === !0 && (a = t.children, o = !0), a === void 0 || a(e, o ? () => l : l);
}
function Il(e, t) {
  Kt(() => {
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
const Kr = [...` 	
\r\f \v\uFEFF`];
function Sl(e, t, r) {
  var l = "" + e;
  if (r) {
    for (var i in r)
      if (r[i])
        l = l ? l + " " + i : i;
      else if (l.length)
        for (var a = i.length, o = 0; (o = l.indexOf(i, o)) >= 0; ) {
          var f = o + a;
          (o === 0 || Kr.includes(l[o - 1])) && (f === l.length || Kr.includes(l[f])) ? l = (o === 0 ? "" : l.substring(0, o)) + l.substring(f + 1) : o = f;
        }
  }
  return l === "" ? null : l;
}
function Tl(e, t, r, l, i, a) {
  var o = e.__className;
  if (L || o !== r) {
    var f = Sl(r, l, a);
    (!L || f !== e.getAttribute("class")) && (f == null ? e.removeAttribute("class") : e.className = f), e.__className = r;
  } else if (a && i !== a)
    for (var s in a) {
      var c = !!a[s];
      (i == null || c !== !!i[s]) && e.classList.toggle(s, c);
    }
  return a;
}
const Nl = Symbol("is custom element"), Ll = Symbol("is html");
function Xr(e) {
  if (L) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var l = e.value;
          le(e, "value", null), e.value = l;
        }
        if (e.hasAttribute("checked")) {
          var i = e.checked;
          le(e, "checked", null), e.checked = i;
        }
      }
    };
    e.__on_r = r, zi(r), Fn();
  }
}
function Dl(e, t) {
  var r = Bn(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function le(e, t, r, l) {
  var i = Bn(e);
  L && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || i[t] !== (i[t] = r) && (t === "loading" && (e[Si] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Pl(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Bn(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Nl]: e.nodeName.includes("-"),
      [Ll]: e.namespaceURI === Ai
    })
  );
}
var Qr = /* @__PURE__ */ new Map();
function Pl(e) {
  var t = Qr.get(e.nodeName);
  if (t) return t;
  Qr.set(e.nodeName, t = []);
  for (var r, l = e, i = Element.prototype; i !== l; ) {
    r = Li(l);
    for (var a in r)
      r[a].set && t.push(a);
    l = cn(l);
  }
  return t;
}
function Ol(e, t, r = t) {
  bl(e, "change", (l) => {
    var i = l ? e.defaultChecked : e.checked;
    r(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (L && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  et(t) == null) && r(e.checked), rr(() => {
    var l = t();
    e.checked = !!l;
  });
}
function en(e, t) {
  return e === t || (e == null ? void 0 : e[dt]) === t;
}
function tn(e = {}, t, r, l) {
  return tr(() => {
    var i, a;
    return rr(() => {
      i = a, a = [], et(() => {
        e !== r(...a) && (t(e, ...a), i && en(r(...i), e) && t(null, ...i));
      });
    }), () => {
      Kt(() => {
        a && en(r(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function qn(e) {
  B === null && Dn(), qt(() => {
    const t = et(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function zl(e) {
  B === null && Dn(), qn(() => () => et(e));
}
let wt = !1;
function Fl(e) {
  var t = wt;
  try {
    return wt = !1, [e(), wt];
  } finally {
    wt = t;
  }
}
function A(e, t, r, l) {
  var Ne;
  var i = (r & bi) !== 0, a = !0, o = (r & xi) !== 0, f = (r & $i) !== 0, s = !1, c;
  o ? [c, s] = Fl(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var v = dt in e || fn in e, h = o && (((Ne = Oe(e, t)) == null ? void 0 : Ne.set) ?? (v && t in e && ((z) => e[t] = z))) || void 0, g = (
    /** @type {V} */
    l
  ), m = !0, p = !1, T = () => (p = !0, m && (m = !1, f ? g = et(
    /** @type {() => V} */
    l
  ) : g = /** @type {V} */
  l), g);
  c === void 0 && l !== void 0 && (h && a && qi(), c = T(), h && h(c));
  var O;
  if (O = () => {
    var z = (
      /** @type {V} */
      e[t]
    );
    return z === void 0 ? T() : (m = !0, p = !1, z);
  }, (r & Ei) === 0)
    return O;
  if (h) {
    var q = e.$$legacy;
    return function(z, U) {
      return arguments.length > 0 ? ((!U || q || s) && h(U ? O() : z), z) : O();
    };
  }
  var F = !1, M = /* @__PURE__ */ mn(c), H = /* @__PURE__ */ Pe(() => {
    var z = O(), U = d(M);
    return F ? (F = !1, U) : M.v = z;
  });
  return i || (H.equals = _n), function(z, U) {
    if (arguments.length > 0) {
      const he = U ? d(H) : o ? ae(z) : z;
      return H.equals(he) || (F = !0, D(M, he), p && g !== void 0 && (g = he), et(() => d(H))), z;
    }
    return d(H);
  };
}
function Ml(e) {
  return new Ul(e);
}
var me, re;
class Ul {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    jt(this, me);
    /** @type {Record<string, any>} */
    jt(this, re);
    var a;
    var r = /* @__PURE__ */ new Map(), l = (o, f) => {
      var s = /* @__PURE__ */ mn(f);
      return r.set(o, s), s;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(o, f) {
          return d(r.get(f) ?? l(f, Reflect.get(o, f)));
        },
        has(o, f) {
          return f === fn ? !0 : (d(r.get(f) ?? l(f, Reflect.get(o, f))), Reflect.has(o, f));
        },
        set(o, f, s) {
          return D(r.get(f) ?? l(f, s), s), Reflect.set(o, f, s);
        }
      }
    );
    Vt(this, re, (t.hydrate ? Cl : jn)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((a = t == null ? void 0 : t.props) != null && a.$$host) || t.sync === !1) && $(), Vt(this, me, i.$$events);
    for (const o of Object.keys(Y(this, re)))
      o === "$set" || o === "$destroy" || o === "$on" || $t(this, o, {
        get() {
          return Y(this, re)[o];
        },
        /** @param {any} value */
        set(f) {
          Y(this, re)[o] = f;
        },
        enumerable: !0
      });
    Y(this, re).$set = /** @param {Record<string, any>} next */
    (o) => {
      Object.assign(i, o);
    }, Y(this, re).$destroy = () => {
      Al(Y(this, re));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    Y(this, re).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    Y(this, me)[t] = Y(this, me)[t] || [];
    const l = (...i) => r.call(this, ...i);
    return Y(this, me)[t].push(l), () => {
      Y(this, me)[t] = Y(this, me)[t].filter(
        /** @param {any} fn */
        (i) => i !== l
      );
    };
  }
  $destroy() {
    Y(this, re).$destroy();
  }
}
me = new WeakMap(), re = new WeakMap();
let Hn;
typeof HTMLElement == "function" && (Hn = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, l) {
    super();
    /** The Svelte component constructor */
    ie(this, "$$ctor");
    /** Slots */
    ie(this, "$$s");
    /** @type {any} The Svelte component instance */
    ie(this, "$$c");
    /** Whether or not the custom element is connected */
    ie(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    ie(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    ie(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    ie(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    ie(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    ie(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    ie(this, "$$me");
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
          const o = document.createElement("slot");
          i !== "default" && (o.name = i), te(a, o);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, l = jl(this);
      for (const i of this.$$s)
        i in l && (i === "default" && !this.$$d.children ? (this.$$d.children = t(i), r.default = !0) : r[i] = t(i));
      for (const i of this.attributes) {
        const a = this.$$g_p(i.name);
        a in this.$$d || (this.$$d[a] = yt(a, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = Ml({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = gl(() => {
        rr(() => {
          var i;
          this.$$r = !0;
          for (const a of xt(this.$$c)) {
            if (!((i = this.$$p_d[a]) != null && i.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const o = yt(
              a,
              this.$$d[a],
              this.$$p_d,
              "toAttribute"
            );
            o == null ? this.removeAttribute(this.$$p_d[a].attribute || a) : this.setAttribute(this.$$p_d[a].attribute || a, o);
          }
          this.$$r = !1;
        });
      });
      for (const i in this.$$l)
        for (const a of this.$$l[i]) {
          const o = this.$$c.$on(i, a);
          this.$$l_u.set(a, o);
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = yt(t, l, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
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
    return xt(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function yt(e, t, r, l) {
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
function jl(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function Vl(e, t, r, l, i, a) {
  let o = class extends Hn {
    constructor() {
      super(e, r, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return xt(t).map(
        (f) => (t[f].attribute || f).toLowerCase()
      );
    }
  };
  return xt(t).forEach((f) => {
    $t(o.prototype, f, {
      get() {
        return this.$$c && f in this.$$c ? this.$$c[f] : this.$$d[f];
      },
      set(s) {
        var h;
        s = yt(f, s, t), this.$$d[f] = s;
        var c = this.$$c;
        if (c) {
          var v = (h = Oe(c, f)) == null ? void 0 : h.get;
          v ? c[f] = s : c.$set({ [f]: s });
        }
      }
    });
  }), l.forEach((f) => {
    $t(o.prototype, f, {
      get() {
        var s;
        return (s = this.$$c) == null ? void 0 : s[f];
      }
    });
  }), e.element = /** @type {any} */
  o, o;
}
const Wn = new TextEncoder();
function Bl(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function ql(e, t = "SHA-256", r = 1e5) {
  const l = Date.now().toString(16);
  e || (e = Math.round(Math.random() * r));
  const i = await Yn(l, e, t);
  return {
    algorithm: t,
    challenge: i,
    salt: l,
    signature: ""
  };
}
async function Yn(e, t, r) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return Bl(
    await crypto.subtle.digest(
      r.toUpperCase(),
      Wn.encode(e + t)
    )
  );
}
function Hl(e, t, r = "SHA-256", l = 1e6, i = 0) {
  const a = new AbortController(), o = Date.now();
  return {
    promise: (async () => {
      for (let s = i; s <= l; s += 1) {
        if (a.signal.aborted)
          return null;
        if (await Yn(t, s, r) === e)
          return {
            number: s,
            took: Date.now() - o
          };
      }
      return null;
    })(),
    controller: a
  };
}
function Wl() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function Yl(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let l = 0; l < t.length; l++)
    r[l] = t.charCodeAt(l);
  return r;
}
function Zl(e, t = 12) {
  const r = new Uint8Array(t);
  for (let l = 0; l < t; l++)
    r[l] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function Gl(e, t = "", r = 1e6, l = 0) {
  const i = "AES-GCM", a = new AbortController(), o = Date.now(), f = async () => {
    for (let v = l; v <= r; v += 1) {
      if (a.signal.aborted || !s || !c)
        return null;
      try {
        const h = await crypto.subtle.decrypt(
          {
            name: i,
            iv: Zl(v)
          },
          s,
          c
        );
        if (h)
          return {
            clearText: new TextDecoder().decode(h),
            took: Date.now() - o
          };
      } catch {
      }
    }
    return null;
  };
  let s = null, c = null;
  try {
    c = Yl(e);
    const v = await crypto.subtle.digest(
      "SHA-256",
      Wn.encode(t)
    );
    s = await crypto.subtle.importKey(
      "raw",
      v,
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
    promise: f(),
    controller: a
  };
}
var b = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(b || {}), Jl = /* @__PURE__ */ kl('<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="svelte-ddsc3z"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25" class="svelte-ddsc3z"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor" class="altcha-spinner svelte-ddsc3z"></path></svg>'), Kl = /* @__PURE__ */ ve('<span role="status" aria-live="polite" class="svelte-ddsc3z"><!></span> <input type="hidden" class="svelte-ddsc3z">', 1), Xl = /* @__PURE__ */ ve('<span role="status" aria-live="polite" class="svelte-ddsc3z"><!></span>'), Ql = /* @__PURE__ */ ve('<label class="svelte-ddsc3z"><!></label>'), ea = /* @__PURE__ */ ve('<div class="svelte-ddsc3z"><a target="_blank" class="altcha-logo svelte-ddsc3z"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-ddsc3z"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor" class="svelte-ddsc3z"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor" class="svelte-ddsc3z"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor" class="svelte-ddsc3z"></path></svg></a></div>'), ta = /* @__PURE__ */ ve('<div class="svelte-ddsc3z"><!></div>'), ra = /* @__PURE__ */ ve('<div class="svelte-ddsc3z"><!></div>'), na = /* @__PURE__ */ ve('<div class="altcha-error svelte-ddsc3z"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="svelte-ddsc3z"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" class="svelte-ddsc3z"></path></svg> <!></div>'), ia = /* @__PURE__ */ ve('<div class="altcha-footer svelte-ddsc3z"><div class="svelte-ddsc3z"><!></div></div>'), la = /* @__PURE__ */ ve('<div class="altcha-anchor-arrow svelte-ddsc3z"></div>'), aa = /* @__PURE__ */ ve('<!> <div class="altcha svelte-ddsc3z"><div class="altcha-main svelte-ddsc3z"><!> <div><input type="checkbox" class="svelte-ddsc3z"></div> <div class="altcha-label svelte-ddsc3z"><!></div> <!></div> <!> <!> <!></div>', 1);
const oa = {
  hash: "svelte-ddsc3z",
  code: `.altcha.svelte-ddsc3z {background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);position:relative;text-align:left;}.altcha.svelte-ddsc3z:focus-within {border-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating].svelte-ddsc3z {background:var(--altcha-color-base, white);display:none;filter:drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2));left:-100%;position:fixed;top:-100%;width:var(--altcha-max-width, 260px);z-index:999999;}.altcha[data-floating=top].svelte-ddsc3z .altcha-anchor-arrow:where(.svelte-ddsc3z) {border-bottom-color:transparent;border-top-color:var(--altcha-color-border, #a0a0a0);bottom:-12px;top:auto;}.altcha[data-floating=bottom].svelte-ddsc3z:focus-within::after {border-bottom-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating=top].svelte-ddsc3z:focus-within::after {border-top-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating].svelte-ddsc3z:not([data-state=unverified]) {display:block;}.altcha-anchor-arrow.svelte-ddsc3z {border:6px solid transparent;border-bottom-color:var(--altcha-color-border, #a0a0a0);content:"";height:0;left:12px;position:absolute;top:-12px;width:0;}.altcha-main.svelte-ddsc3z {align-items:center;display:flex;gap:0.4rem;padding:0.7rem;}.altcha-label.svelte-ddsc3z {flex-grow:1;}.altcha-label.svelte-ddsc3z label:where(.svelte-ddsc3z) {cursor:pointer;}.altcha-logo.svelte-ddsc3z {color:currentColor;opacity:0.3;}.altcha-logo.svelte-ddsc3z:hover {opacity:1;}.altcha-error.svelte-ddsc3z {color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem;}.altcha-footer.svelte-ddsc3z {align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.4;padding:0.2rem 0.7rem;text-align:right;}.altcha-footer.svelte-ddsc3z:hover {opacity:1;}.altcha-footer.svelte-ddsc3z > :where(.svelte-ddsc3z):first-child {flex-grow:1;}.altcha-footer.svelte-ddsc3z a {color:currentColor;}.altcha-checkbox.svelte-ddsc3z {display:flex;align-items:center;height:24px;width:24px;}.altcha-checkbox.svelte-ddsc3z input:where(.svelte-ddsc3z) {width:18px;height:18px;margin:0;}.altcha-hidden.svelte-ddsc3z {display:none;}.altcha-spinner.svelte-ddsc3z {
  animation: svelte-ddsc3z-altcha-spinner 0.75s infinite linear;transform-origin:center;}

@keyframes svelte-ddsc3z-altcha-spinner {
  100% {
    transform: rotate(360deg);
  }
}`
};
function sa(e, t) {
  var Or, zr;
  Pn(t, !0), Il(e, oa);
  let r = A(t, "auto", 7, void 0), l = A(t, "blockspam", 7, void 0), i = A(t, "challengeurl", 7, void 0), a = A(t, "challengejson", 7, void 0), o = A(t, "customfetch", 7, void 0), f = A(t, "debug", 7, !1), s = A(t, "delay", 7, 0), c = A(t, "expire", 7, void 0), v = A(t, "floating", 7, void 0), h = A(t, "floatinganchor", 7, void 0), g = A(t, "floatingoffset", 7, void 0), m = A(t, "floatingpersist", 7, !1), p = A(t, "hidefooter", 7, !1), T = A(t, "hidelogo", 7, !1), O = A(t, "id", 7, void 0), q = A(t, "name", 7, "altcha"), F = A(t, "maxnumber", 7, 1e6), M = A(t, "mockerror", 7, !1), H = A(t, "obfuscated", 7, void 0), Ne = A(t, "plugins", 7, void 0), z = A(t, "refetchonexpire", 7, !0), U = A(t, "spamfilter", 7, !1), he = A(t, "strings", 7, void 0), Q = A(t, "test", 7, !1), Ee = A(t, "verifyurl", 7, void 0), Ue = A(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), rt = A(t, "workerurl", 7, void 0);
  const lr = ["SHA-256", "SHA-384", "SHA-512"], ar = "Visit Altcha.org", or = "https://altcha.org/", nt = (n, u) => {
    t.$$host.dispatchEvent(new CustomEvent(n, { detail: u }));
  }, sr = (zr = (Or = document.documentElement.lang) == null ? void 0 : Or.split("-")) == null ? void 0 : zr[0], Pt = /* @__PURE__ */ Pe(() => {
    var n;
    return i() && new URL(i(), location.origin).host.endsWith(".altcha.org") && !!((n = i()) != null && n.includes("apiKey=ckey_"));
  }), Ot = /* @__PURE__ */ Pe(() => a() ? yr(a()) : void 0), fr = /* @__PURE__ */ Pe(() => he() ? yr(he()) : {}), ee = /* @__PURE__ */ Pe(() => {
    var n;
    return {
      ariaLinkLabel: ar,
      error: "Verification failed. Try again later.",
      expired: "Verification expired. Try again.",
      footer: `Protected by <a href="${or}" target="_blank" aria-label="${((n = d(fr)) == null ? void 0 : n.ariaLinkLabel) || ar}">ALTCHA</a>`,
      label: "I'm not a robot",
      verified: "Verified",
      verifying: "Verifying...",
      waitAlert: "Verifying... please wait.",
      ...d(fr)
    };
  }), ur = /* @__PURE__ */ Pe(() => O() || `${q()}_checkbox`);
  let je = We(!1), C = We(ae(b.UNVERIFIED)), j = We(void 0), it = We(null), Ve = null, w = null, Be = We(null), fe = null, xe = [], Le = We(null);
  qt(() => {
    ti(d(Be));
  }), qt(() => {
    ri(d(C));
  }), zl(() => {
    Zn(), w && (w.removeEventListener("submit", _r), w.removeEventListener("reset", mr), w.removeEventListener("focusin", gr), w = null), fe && (clearTimeout(fe), fe = null), document.removeEventListener("click", vr), document.removeEventListener("scroll", hr), window.removeEventListener("resize", pr);
  }), qn(() => {
    var n;
    I("mounted", "1.3.0"), I("workers", Ue()), Qn(), I("plugins", xe.length ? xe.map((u) => u.constructor.pluginName).join(", ") : "none"), Q() && I("using test mode"), c() && zt(c()), r() !== void 0 && I("auto", r()), v() !== void 0 && br(v()), w = (n = d(j)) == null ? void 0 : n.closest("form"), w && (w.addEventListener("submit", _r, { capture: !0 }), w.addEventListener("reset", mr), (r() === "onfocus" || m() === "focus") && w.addEventListener("focusin", gr)), r() === "onload" && (H() ? lt() : $e()), d(Pt) && (p() || T()) && I("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      nt("load");
    });
  });
  function cr(n, u) {
    return btoa(JSON.stringify({
      algorithm: n.algorithm,
      challenge: n.challenge,
      number: u.number,
      salt: n.salt,
      signature: n.signature,
      test: Q() ? !0 : void 0,
      took: u.took
    }));
  }
  function Zn() {
    for (const n of xe)
      n.destroy();
  }
  function dr() {
    i() && z() && d(C) === b.VERIFIED ? $e() : ot(b.EXPIRED, d(ee).expired);
  }
  async function Gn() {
    var n;
    if (M())
      throw I("mocking error"), new Error("Mocked error.");
    if (d(Ot))
      return I("using provided json data"), d(Ot);
    if (Q())
      return I("generating test challenge", { test: Q() }), ql(typeof Q() != "boolean" ? +Q() : void 0);
    {
      if (!i() && w) {
        const N = w.getAttribute("action");
        N != null && N.includes("/form/") && i(N + "/altcha");
      }
      if (!i())
        throw new Error("Attribute challengeurl not set.");
      I("fetching challenge from", i());
      let u = null, _ = null;
      if (o())
        if (I("using customfetch"), typeof o() == "string") {
          if (u = globalThis[o()] || null, !u)
            throw new Error(`Custom fetch function not found: ${o()}`);
        } else
          u = o();
      const E = {
        headers: U() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      };
      if (u) {
        if (_ = await u(i(), E), !_ || !(_ instanceof Response))
          throw new Error("Custom fetch function did not return a response.");
      } else
        _ = await fetch(i(), E);
      if (_.status !== 200)
        throw new Error(`Server responded with ${_.status}.`);
      const S = _.headers.get("X-Altcha-Config"), x = await _.json(), y = new URLSearchParams((n = x.salt.split("?")) == null ? void 0 : n[1]), W = y.get("expires") || y.get("expire");
      if (W) {
        const N = new Date(+W * 1e3), He = isNaN(N.getTime()) ? 0 : N.getTime() - Date.now();
        He > 0 && zt(He);
      }
      if (S)
        try {
          const N = JSON.parse(S);
          N && typeof N == "object" && (N.verifyurl && (N.verifyurl = new URL(N.verifyurl, new URL(i())).toString()), $r(N));
        } catch (N) {
          I("unable to configure from X-Altcha-Config", N);
        }
      return x;
    }
  }
  function Jn(n) {
    var _;
    const u = w == null ? void 0 : w.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((_ = u == null ? void 0 : u.value) == null ? void 0 : _.slice(u.value.indexOf("@"))) || void 0;
  }
  function Kn() {
    return U() === "ipAddress" ? {
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
    } : typeof U() == "object" ? U() : {
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
  function Xn(n) {
    return [
      ...(w == null ? void 0 : w.querySelectorAll(n != null && n.length ? n.map((_) => `input[name="${_}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (_, E) => {
        const S = E.name, x = E.value;
        return S && x && (_[S] = /\n/.test(x) ? x.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : x), _;
      },
      {}
    );
  }
  function Qn() {
    const n = Ne() !== void 0 ? Ne().split(",") : void 0;
    for (const u of globalThis.altchaPlugins)
      (!n || n.includes(u.pluginName)) && xe.push(new u({
        el: d(j),
        clarify: lt,
        dispatch: nt,
        getConfiguration: kr,
        getFloatingAnchor: Cr,
        getState: Ar,
        log: I,
        reset: ot,
        solve: xr,
        setState: De,
        setFloatingAnchor: Ir,
        verify: $e
      }));
  }
  function I(...n) {
    (f() || n.some((u) => u instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${q()}]`, ...n);
  }
  function ei() {
    [b.UNVERIFIED, b.ERROR, b.EXPIRED].includes(d(C)) ? U() !== !1 && (w == null ? void 0 : w.reportValidity()) === !1 ? D(je, !1) : H() ? lt() : $e() : D(je, !0);
  }
  function vr(n) {
    const u = n.target;
    v() && u && !d(j).contains(u) && (d(C) === b.VERIFIED && m() === !1 || d(C) === b.VERIFIED && m() === "focus" && !(w != null && w.matches(":focus-within")) || r() === "off" && d(C) === b.UNVERIFIED) && Rr();
  }
  function hr() {
    v() && d(C) !== b.UNVERIFIED && at();
  }
  function ti(n) {
    for (const u of xe)
      typeof u.onErrorChange == "function" && u.onErrorChange(d(Be));
  }
  function gr(n) {
    d(C) === b.UNVERIFIED ? $e() : v() && m() === "focus" && d(C) === b.VERIFIED && Ft();
  }
  function _r(n) {
    w && r() === "onsubmit" ? d(C) === b.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), $e().then(() => {
      w == null || w.requestSubmit();
    })) : d(C) !== b.VERIFIED && (n.preventDefault(), n.stopPropagation(), d(C) === b.VERIFYING && wr()) : w && v() && r() === "off" && d(C) === b.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), Ft());
  }
  function mr() {
    ot();
  }
  function wr() {
    d(C) === b.VERIFYING && d(ee).waitAlert && alert(d(ee).waitAlert);
  }
  function ri(n) {
    for (const u of xe)
      typeof u.onStateChange == "function" && u.onStateChange(d(C));
    v() && d(C) !== b.UNVERIFIED && requestAnimationFrame(() => {
      at();
    }), D(je, d(C) === b.VERIFIED);
  }
  function pr() {
    v() && at();
  }
  function yr(n) {
    return JSON.parse(n);
  }
  async function ni(n) {
    if (!Ee())
      throw new Error("Attribute verifyurl not set.");
    I("requesting server verification from", Ee());
    const u = { payload: n };
    if (U() !== !1) {
      const {
        blockedCountries: S,
        classifier: x,
        disableRules: y,
        email: W,
        expectedLanguages: N,
        expectedCountries: He,
        fields: ft,
        ipAddress: ut,
        text: _i,
        timeZone: Fr
      } = Kn();
      u.blockedCountries = S, u.classifier = x, u.disableRules = y, u.email = W === !1 ? void 0 : Jn(W), u.expectedCountries = He, u.expectedLanguages = N || (sr ? [sr] : void 0), u.fields = ft === !1 ? void 0 : Xn(ft), u.ipAddress = ut === !1 ? void 0 : ut || "auto", u.text = _i, u.timeZone = Fr === !1 ? void 0 : Fr || Wl();
    }
    const _ = await fetch(Ee(), {
      body: JSON.stringify(u),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (_.status !== 200)
      throw new Error(`Server responded with ${_.status}.`);
    const E = await _.json();
    if (E != null && E.payload && D(Le, ae(E.payload)), nt("serververification", E), l() && E.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  function zt(n) {
    I("expire", n), fe && (clearTimeout(fe), fe = null), n < 1 ? dr() : fe = setTimeout(dr, n);
  }
  function br(n) {
    I("floating", n), v() !== n && (d(j).style.left = "", d(j).style.top = ""), v(n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : v()), v() ? (r() || r("onsubmit"), document.addEventListener("scroll", hr), document.addEventListener("click", vr), window.addEventListener("resize", pr)) : r() === "onsubmit" && r(void 0);
  }
  function Er(n) {
    if (!n.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (n.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!lr.includes(n.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${lr.join(", ")}`);
    if (!n.challenge || n.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!n.salt || n.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function xr(n) {
    let u = null;
    if ("Worker" in window) {
      try {
        u = await ii(n, n.maxnumber);
      } catch (_) {
        I(_);
      }
      if ((u == null ? void 0 : u.number) !== void 0 || "obfuscated" in n)
        return { data: n, solution: u };
    }
    if ("obfuscated" in n) {
      const _ = await Gl(n.obfuscated, n.key, n.maxnumber);
      return { data: n, solution: await _.promise };
    }
    return {
      data: n,
      solution: await Hl(n.challenge, n.salt, n.algorithm, n.maxnumber || F()).promise
    };
  }
  async function ii(n, u = typeof Q() == "number" ? Q() : F(), _ = Math.ceil(Ue())) {
    const E = [];
    _ = Math.min(16, Math.max(1, _));
    for (let y = 0; y < _; y++)
      E.push(altchaCreateWorker(rt()));
    const S = Math.ceil(u / _), x = await Promise.all(E.map((y, W) => {
      const N = W * S;
      return new Promise((He) => {
        y.addEventListener("message", (ft) => {
          if (ft.data)
            for (const ut of E)
              ut !== y && ut.postMessage({ type: "abort" });
          He(ft.data);
        }), y.postMessage({
          payload: n,
          max: N + S,
          start: N,
          type: "work"
        });
      });
    }));
    for (const y of E)
      y.terminate();
    return x.find((y) => !!y) || null;
  }
  async function lt() {
    if (!H()) {
      De(b.ERROR);
      return;
    }
    const n = xe.find((u) => u.constructor.pluginName === "obfuscation");
    if (!n || !("clarify" in n)) {
      De(b.ERROR), I("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in n && typeof n.clarify == "function")
      return n.clarify();
  }
  function $r(n) {
    n.obfuscated !== void 0 && H(n.obfuscated), n.auto !== void 0 && (r(n.auto), r() === "onload" && (H() ? lt() : $e())), n.blockspam !== void 0 && l(!!n.blockspam), n.customfetch !== void 0 && o(n.customfetch), n.floatinganchor !== void 0 && h(n.floatinganchor), n.delay !== void 0 && s(n.delay), n.floatingoffset !== void 0 && g(n.floatingoffset), n.floating !== void 0 && br(n.floating), n.expire !== void 0 && (zt(n.expire), c(n.expire)), n.challenge && (a(typeof n.challenge == "string" ? n.challenge : JSON.stringify(n.challenge)), Er(d(Ot))), n.challengeurl !== void 0 && i(n.challengeurl), n.debug !== void 0 && f(!!n.debug), n.hidefooter !== void 0 && p(!!n.hidefooter), n.hidelogo !== void 0 && T(!!n.hidelogo), n.maxnumber !== void 0 && F(+n.maxnumber), n.mockerror !== void 0 && M(!!n.mockerror), n.name !== void 0 && q(n.name), n.refetchonexpire !== void 0 && z(!!n.refetchonexpire), n.spamfilter !== void 0 && U(typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && he(typeof n.strings == "string" ? n.strings : JSON.stringify(n.strings)), n.test !== void 0 && Q(typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && Ee(n.verifyurl), n.workers !== void 0 && Ue(+n.workers), n.workerurl !== void 0 && rt(n.workerurl);
  }
  function kr() {
    return {
      auto: r(),
      blockspam: l(),
      challengeurl: i(),
      debug: f(),
      delay: s(),
      expire: c(),
      floating: v(),
      floatinganchor: h(),
      floatingoffset: g(),
      hidefooter: p(),
      hidelogo: T(),
      name: q(),
      maxnumber: F(),
      mockerror: M(),
      obfuscated: H(),
      refetchonexpire: z(),
      spamfilter: U(),
      strings: d(ee),
      test: Q(),
      verifyurl: Ee(),
      workers: Ue(),
      workerurl: rt()
    };
  }
  function Cr() {
    return Ve;
  }
  function li(n) {
    return xe.find((u) => u.constructor.pluginName === n);
  }
  function Ar() {
    return d(C);
  }
  function Rr() {
    d(j).style.display = "none";
  }
  function at(n = 20) {
    if (d(j))
      if (Ve || (Ve = (h() ? document.querySelector(h()) : w == null ? void 0 : w.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || w), Ve) {
        const u = parseInt(g(), 10) || 12, _ = Ve.getBoundingClientRect(), E = d(j).getBoundingClientRect(), S = document.documentElement.clientHeight, x = document.documentElement.clientWidth, y = v() === "auto" ? _.bottom + E.height + u + n > S : v() === "top", W = Math.max(n, Math.min(x - n - E.width, _.left + _.width / 2 - E.width / 2));
        if (y ? d(j).style.top = `${_.top - (E.height + u)}px` : d(j).style.top = `${_.bottom + u}px`, d(j).style.left = `${W}px`, d(j).setAttribute("data-floating", y ? "top" : "bottom"), d(it)) {
          const N = d(it).getBoundingClientRect();
          d(it).style.left = _.left - W + _.width / 2 - N.width / 2 + "px";
        }
      } else
        I("unable to find floating anchor element");
  }
  function ot(n = b.UNVERIFIED, u = null) {
    fe && (clearTimeout(fe), fe = null), D(je, !1), D(Le, null), De(n, u);
  }
  function Ir(n) {
    Ve = n;
  }
  function De(n, u = null) {
    D(C, ae(n)), D(Be, ae(u)), nt("statechange", {
      payload: d(Le),
      state: d(C)
    });
  }
  function Ft() {
    d(j).style.display = "block", v() && at();
  }
  async function $e() {
    return ot(b.VERIFYING), await new Promise((n) => setTimeout(n, s() || 0)), Gn().then((n) => (Er(n), I("challenge", n), xr(n))).then(({ data: n, solution: u }) => {
      if (I("solution", u), "challenge" in n && u && !("clearText" in u))
        if ((u == null ? void 0 : u.number) !== void 0) {
          if (Ee())
            return ni(cr(n, u));
          D(Le, ae(cr(n, u))), I("payload", d(Le));
        } else
          throw I("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      De(b.VERIFIED), I("verified"), ul().then(() => {
        nt("verified", { payload: d(Le) });
      });
    }).catch((n) => {
      I(n), De(b.ERROR, n.message);
    });
  }
  var Sr = aa(), Tr = Wr(Sr);
  Rl(Tr, t, "default", {});
  var st = ge(Tr, 2), Mt = J(st), Nr = J(Mt);
  {
    var ai = (n) => {
      var u = Jl();
      te(n, u);
    };
    ke(Nr, (n) => {
      d(C) === b.VERIFYING && n(ai);
    });
  }
  var mt = ge(Nr, 2);
  let Lr;
  var qe = J(mt);
  Xr(qe), qe.__change = ei, G(mt);
  var Ut = ge(mt, 2), oi = J(Ut);
  {
    var si = (n) => {
      var u = Kl(), _ = Wr(u), E = J(_);
      Ge(E, () => d(ee).verified), G(_);
      var S = ge(_, 2);
      Xr(S), Ye(() => {
        le(S, "name", q()), Dl(S, d(Le));
      }), te(n, u);
    }, fi = (n, u) => {
      {
        var _ = (S) => {
          var x = Xl(), y = J(x);
          Ge(y, () => d(ee).verifying), G(x), te(S, x);
        }, E = (S) => {
          var x = Ql(), y = J(x);
          Ge(y, () => d(ee).label), G(x), Ye(() => le(x, "for", d(ur))), te(S, x);
        };
        ke(
          n,
          (S) => {
            d(C) === b.VERIFYING ? S(_) : S(E, !1);
          },
          u
        );
      }
    };
    ke(oi, (n) => {
      d(C) === b.VERIFIED ? n(si) : n(fi, !1);
    });
  }
  G(Ut);
  var ui = ge(Ut, 2);
  {
    var ci = (n) => {
      var u = ea(), _ = J(u);
      le(_, "href", or), G(u), Ye(() => le(_, "aria-label", d(ee).ariaLinkLabel)), te(n, u);
    };
    ke(ui, (n) => {
      (T() !== !0 || d(Pt)) && n(ci);
    });
  }
  G(Mt);
  var Dr = ge(Mt, 2);
  {
    var di = (n) => {
      var u = na(), _ = ge(J(u), 2);
      {
        var E = (x) => {
          var y = ta(), W = J(y);
          Ge(W, () => d(ee).expired), G(y), Ye(() => le(y, "title", d(Be))), te(x, y);
        }, S = (x) => {
          var y = ra(), W = J(y);
          Ge(W, () => d(ee).error), G(y), Ye(() => le(y, "title", d(Be))), te(x, y);
        };
        ke(_, (x) => {
          d(C) === b.EXPIRED ? x(E) : x(S, !1);
        });
      }
      G(u), te(n, u);
    };
    ke(Dr, (n) => {
      (d(Be) || d(C) === b.EXPIRED) && n(di);
    });
  }
  var Pr = ge(Dr, 2);
  {
    var vi = (n) => {
      var u = ia(), _ = J(u), E = J(_);
      Ge(E, () => d(ee).footer), G(_), G(u), te(n, u);
    };
    ke(Pr, (n) => {
      d(ee).footer && (p() !== !0 || d(Pt)) && n(vi);
    });
  }
  var hi = ge(Pr, 2);
  {
    var gi = (n) => {
      var u = la();
      tn(u, (_) => D(it, _), () => d(it)), te(n, u);
    };
    ke(hi, (n) => {
      v() && n(gi);
    });
  }
  return G(st), tn(st, (n) => D(j, n), () => d(j)), Ye(
    (n) => {
      le(st, "data-state", d(C)), le(st, "data-floating", v()), Lr = Tl(mt, 1, "altcha-checkbox svelte-ddsc3z", null, Lr, n), le(qe, "id", d(ur)), qe.required = r() !== "onsubmit" && (!v() || r() !== "off");
    },
    [
      () => ({
        "altcha-hidden": d(C) === b.VERIFYING
      })
    ]
  ), xl("invalid", qe, wr), Ol(qe, () => d(je), (n) => D(je, n)), te(e, Sr), On({
    clarify: lt,
    configure: $r,
    getConfiguration: kr,
    getFloatingAnchor: Cr,
    getPlugin: li,
    getState: Ar,
    hide: Rr,
    repositionFloating: at,
    reset: ot,
    setFloatingAnchor: Ir,
    setState: De,
    show: Ft,
    verify: $e,
    get auto() {
      return r();
    },
    set auto(n = void 0) {
      r(n), $();
    },
    get blockspam() {
      return l();
    },
    set blockspam(n = void 0) {
      l(n), $();
    },
    get challengeurl() {
      return i();
    },
    set challengeurl(n = void 0) {
      i(n), $();
    },
    get challengejson() {
      return a();
    },
    set challengejson(n = void 0) {
      a(n), $();
    },
    get customfetch() {
      return o();
    },
    set customfetch(n = void 0) {
      o(n), $();
    },
    get debug() {
      return f();
    },
    set debug(n = !1) {
      f(n), $();
    },
    get delay() {
      return s();
    },
    set delay(n = 0) {
      s(n), $();
    },
    get expire() {
      return c();
    },
    set expire(n = void 0) {
      c(n), $();
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
      return p();
    },
    set hidefooter(n = !1) {
      p(n), $();
    },
    get hidelogo() {
      return T();
    },
    set hidelogo(n = !1) {
      T(n), $();
    },
    get id() {
      return O();
    },
    set id(n = void 0) {
      O(n), $();
    },
    get name() {
      return q();
    },
    set name(n = "altcha") {
      q(n), $();
    },
    get maxnumber() {
      return F();
    },
    set maxnumber(n = 1e6) {
      F(n), $();
    },
    get mockerror() {
      return M();
    },
    set mockerror(n = !1) {
      M(n), $();
    },
    get obfuscated() {
      return H();
    },
    set obfuscated(n = void 0) {
      H(n), $();
    },
    get plugins() {
      return Ne();
    },
    set plugins(n = void 0) {
      Ne(n), $();
    },
    get refetchonexpire() {
      return z();
    },
    set refetchonexpire(n = !0) {
      z(n), $();
    },
    get spamfilter() {
      return U();
    },
    set spamfilter(n = !1) {
      U(n), $();
    },
    get strings() {
      return he();
    },
    set strings(n = void 0) {
      he(n), $();
    },
    get test() {
      return Q();
    },
    set test(n = !1) {
      Q(n), $();
    },
    get verifyurl() {
      return Ee();
    },
    set verifyurl(n = void 0) {
      Ee(n), $();
    },
    get workers() {
      return Ue();
    },
    set workers(n = Math.min(16, navigator.hardwareConcurrency || 8)) {
      Ue(n), $();
    },
    get workerurl() {
      return rt();
    },
    set workerurl(n = void 0) {
      rt(n), $();
    }
  });
}
$l(["change"]);
customElements.define("altcha-widget", Vl(
  sa,
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
globalThis.altchaCreateWorker = (e) => e ? new Worker(new URL(e)) : new pi();
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
export {
  sa as Altcha
};
