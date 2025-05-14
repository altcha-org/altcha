var pi = Object.defineProperty;
var Ur = (e) => {
  throw TypeError(e);
};
var bi = (e, t, r) => t in e ? pi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ne = (e, t, r) => bi(e, typeof t != "symbol" ? t + "" : t, r), jr = (e, t, r) => t.has(e) || Ur("Cannot " + r);
var Y = (e, t, r) => (jr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Vt = (e, t, r) => t.has(e) ? Ur("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), Bt = (e, t, r, i) => (jr(e, t, "write to private field"), i ? i.call(e, r) : t.set(e, r), r);
const nn = `(function(){"use strict";const d=new TextEncoder;function p(e){return[...new Uint8Array(e)].map(t=>t.toString(16).padStart(2,"0")).join("")}async function b(e,t,r){if(typeof crypto>"u"||!("subtle"in crypto)||!("digest"in crypto.subtle))throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");return p(await crypto.subtle.digest(r.toUpperCase(),d.encode(e+t)))}function w(e,t,r="SHA-256",n=1e6,s=0){const o=new AbortController,a=Date.now();return{promise:(async()=>{for(let c=s;c<=n;c+=1){if(o.signal.aborted)return null;if(await b(t,c,r)===e)return{number:c,took:Date.now()-a}}return null})(),controller:o}}function h(e){const t=atob(e),r=new Uint8Array(t.length);for(let n=0;n<t.length;n++)r[n]=t.charCodeAt(n);return r}function g(e,t=12){const r=new Uint8Array(t);for(let n=0;n<t;n++)r[n]=e%256,e=Math.floor(e/256);return r}async function m(e,t="",r=1e6,n=0){const s="AES-GCM",o=new AbortController,a=Date.now(),l=async()=>{for(let u=n;u<=r;u+=1){if(o.signal.aborted||!c||!y)return null;try{const f=await crypto.subtle.decrypt({name:s,iv:g(u)},c,y);if(f)return{clearText:new TextDecoder().decode(f),took:Date.now()-a}}catch{}}return null};let c=null,y=null;try{y=h(e);const u=await crypto.subtle.digest("SHA-256",d.encode(t));c=await crypto.subtle.importKey("raw",u,s,!1,["decrypt"])}catch{return{promise:Promise.reject(),controller:o}}return{promise:l(),controller:o}}let i;onmessage=async e=>{const{type:t,payload:r,start:n,max:s}=e.data;let o=null;if(t==="abort")i==null||i.abort(),i=void 0;else if(t==="work"){if("obfuscated"in r){const{key:a,obfuscated:l}=r||{};o=await m(l,a,s,n)}else{const{algorithm:a,challenge:l,salt:c}=r||{};o=w(l,c,a,s,n)}i=o.controller,o.promise.then(a=>{self.postMessage(a&&{...a,worker:!0})})}}})();
`, Vr = typeof self < "u" && self.Blob && new Blob([nn], { type: "text/javascript;charset=utf-8" });
function yi(e) {
  let t;
  try {
    if (t = Vr && (self.URL || self.webkitURL).createObjectURL(Vr), !t) throw "";
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
const Ei = "5";
var rn;
typeof window < "u" && ((rn = window.__svelte ?? (window.__svelte = {})).v ?? (rn.v = /* @__PURE__ */ new Set())).add(Ei);
const xi = 1, $i = 4, ki = 8, Ci = 16, Ai = 1, Ri = 2, Zt = "[", on = "[!", an = "]", Ke = {}, G = Symbol(), Ii = "http://www.w3.org/1999/xhtml", Br = !1, le = 2, ln = 4, It = 8, Jt = 16, be = 32, Me = 64, bt = 128, re = 256, yt = 512, z = 1024, ye = 2048, et = 4096, ze = 8192, St = 16384, Si = 32768, Kt = 65536, Ti = 1 << 19, sn = 1 << 20, ct = Symbol("$state"), fn = Symbol("legacy props"), Ni = Symbol("");
var un = Array.isArray, Li = Array.prototype.indexOf, Di = Array.from, Et = Object.keys, xt = Object.defineProperty, Oe = Object.getOwnPropertyDescriptor, Pi = Object.getOwnPropertyDescriptors, Oi = Object.prototype, Fi = Array.prototype, cn = Object.getPrototypeOf;
function dn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const Mi = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let ht = [], vt = [];
function hn() {
  var e = ht;
  ht = [], dn(e);
}
function vn() {
  var e = vt;
  vt = [], dn(e);
}
function gn(e) {
  ht.length === 0 && queueMicrotask(hn), ht.push(e);
}
function Ui(e) {
  vt.length === 0 && Mi(vn), vt.push(e);
}
function qr() {
  ht.length > 0 && hn(), vt.length > 0 && vn();
}
function _n(e) {
  return e === this.v;
}
function ji(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function mn(e) {
  return !ji(e, this.v);
}
function Vi(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Bi() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function qi(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Hi() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Wi() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Yi(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Gi() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Zi() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ji() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Ki() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let zi = !1;
function fe(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: _n,
    rv: 0,
    wv: 0
  };
  return r;
}
function We(e) {
  return /* @__PURE__ */ Xi(fe(e));
}
// @__NO_SIDE_EFFECTS__
function wn(e, t = !1) {
  const r = fe(e);
  return t || (r.equals = mn), r;
}
// @__NO_SIDE_EFFECTS__
function Xi(e) {
  return C !== null && !ae && (C.f & le) !== 0 && (ue === null ? io([e]) : ue.push(e)), e;
}
function D(e, t) {
  return C !== null && !ae && Mn() && (C.f & (le | Jt)) !== 0 && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (ue === null || !ue.includes(e)) && Ki(), Qi(e, t);
}
function Qi(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = Cn(), pn(e, ye), I !== null && (I.f & z) !== 0 && (I.f & (be | Me)) === 0 && (_e === null ? oo([e]) : _e.push(e))), t;
}
function pn(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, o = 0; o < i; o++) {
      var a = r[o], l = a.f;
      (l & ye) === 0 && (ce(a, t), (l & (z | re)) !== 0 && ((l & le) !== 0 ? pn(
        /** @type {Derived} */
        a,
        et
      ) : Lt(
        /** @type {Effect} */
        a
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Pe(e) {
  var t = le | ye, r = C !== null && (C.f & le) !== 0 ? (
    /** @type {Derived} */
    C
  ) : null;
  return I === null || r !== null && (r.f & re) !== 0 ? t |= re : I.f |= sn, {
    ctx: q,
    deps: null,
    effects: null,
    equals: _n,
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
function bn(e) {
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
function eo(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & le) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function to(e) {
  var t, r = I;
  Se(eo(e));
  try {
    bn(e), t = Rn(e);
  } finally {
    Se(r);
  }
  return t;
}
function yn(e) {
  var t = to(e), r = (Ce || (e.f & re) !== 0) && e.deps !== null ? et : z;
  ce(e, r), e.equals(t) || (e.v = t, e.wv = Cn());
}
function Tt(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let L = !1;
function Je(e) {
  L = e;
}
let P;
function Re(e) {
  if (e === null)
    throw Tt(), Ke;
  return P = e;
}
function Xe() {
  return Re(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Te(P)
  );
}
function Z(e) {
  if (L) {
    if (/* @__PURE__ */ Te(P) !== null)
      throw Tt(), Ke;
    P = e;
  }
}
function ro() {
  for (var e = 0, t = P; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === an) {
        if (e === 0) return t;
        e -= 1;
      } else (r === Zt || r === on) && (e += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Te(t)
    );
    t.remove(), t = i;
  }
}
function oe(e, t = null, r) {
  if (typeof e != "object" || e === null || ct in e)
    return e;
  const i = cn(e);
  if (i !== Oi && i !== Fi)
    return e;
  var o = /* @__PURE__ */ new Map(), a = un(e), l = fe(0);
  a && o.set("length", fe(
    /** @type {any[]} */
    e.length
  ));
  var f;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, c, h) {
        (!("value" in h) || h.configurable === !1 || h.enumerable === !1 || h.writable === !1) && Gi();
        var v = o.get(c);
        return v === void 0 ? (v = fe(h.value), o.set(c, v)) : D(v, oe(h.value, f)), !0;
      },
      deleteProperty(s, c) {
        var h = o.get(c);
        if (h === void 0)
          c in s && o.set(c, fe(G));
        else {
          if (a && typeof c == "string") {
            var v = (
              /** @type {Source<number>} */
              o.get("length")
            ), g = Number(c);
            Number.isInteger(g) && g < v.v && D(v, g);
          }
          D(h, G), Hr(l);
        }
        return !0;
      },
      get(s, c, h) {
        var p;
        if (c === ct)
          return e;
        var v = o.get(c), g = c in s;
        if (v === void 0 && (!g || (p = Oe(s, c)) != null && p.writable) && (v = fe(oe(g ? s[c] : G, f)), o.set(c, v)), v !== void 0) {
          var m = d(v);
          return m === G ? void 0 : m;
        }
        return Reflect.get(s, c, h);
      },
      getOwnPropertyDescriptor(s, c) {
        var h = Reflect.getOwnPropertyDescriptor(s, c);
        if (h && "value" in h) {
          var v = o.get(c);
          v && (h.value = d(v));
        } else if (h === void 0) {
          var g = o.get(c), m = g == null ? void 0 : g.v;
          if (g !== void 0 && m !== G)
            return {
              enumerable: !0,
              configurable: !0,
              value: m,
              writable: !0
            };
        }
        return h;
      },
      has(s, c) {
        var m;
        if (c === ct)
          return !0;
        var h = o.get(c), v = h !== void 0 && h.v !== G || Reflect.has(s, c);
        if (h !== void 0 || I !== null && (!v || (m = Oe(s, c)) != null && m.writable)) {
          h === void 0 && (h = fe(v ? oe(s[c], f) : G), o.set(c, h));
          var g = d(h);
          if (g === G)
            return !1;
        }
        return v;
      },
      set(s, c, h, v) {
        var U;
        var g = o.get(c), m = c in s;
        if (a && c === "length")
          for (var p = h; p < /** @type {Source<number>} */
          g.v; p += 1) {
            var N = o.get(p + "");
            N !== void 0 ? D(N, G) : p in s && (N = fe(G), o.set(p + "", N));
          }
        g === void 0 ? (!m || (U = Oe(s, c)) != null && U.writable) && (g = fe(void 0), D(g, oe(h, f)), o.set(c, g)) : (m = g.v !== G, D(g, oe(h, f)));
        var O = Reflect.getOwnPropertyDescriptor(s, c);
        if (O != null && O.set && O.set.call(v, h), !m) {
          if (a && typeof c == "string") {
            var H = (
              /** @type {Source<number>} */
              o.get("length")
            ), M = Number(c);
            Number.isInteger(M) && M >= H.v && D(H, M + 1);
          }
          Hr(l);
        }
        return !0;
      },
      ownKeys(s) {
        d(l);
        var c = Reflect.ownKeys(s).filter((g) => {
          var m = o.get(g);
          return m === void 0 || m.v !== G;
        });
        for (var [h, v] of o)
          v.v !== G && !(h in s) && c.push(h);
        return c;
      },
      setPrototypeOf() {
        Zi();
      }
    }
  );
}
function Hr(e, t = 1) {
  D(e, e.v + t);
}
var Wr, En, xn, $n;
function qt() {
  if (Wr === void 0) {
    Wr = window, En = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    xn = Oe(t, "firstChild").get, $n = Oe(t, "nextSibling").get, e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function zt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function we(e) {
  return xn.call(e);
}
// @__NO_SIDE_EFFECTS__
function Te(e) {
  return $n.call(e);
}
function J(e, t) {
  if (!L)
    return /* @__PURE__ */ we(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ we(P)
  );
  return r === null && (r = P.appendChild(zt())), Re(r), r;
}
function Yr(e, t) {
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
  let i = L ? P : e;
  for (var o; t--; )
    o = i, i = /** @type {TemplateNode} */
    /* @__PURE__ */ Te(i);
  if (!L)
    return i;
  var a = i == null ? void 0 : i.nodeType;
  if (r && a !== 3) {
    var l = zt();
    return i === null ? o == null || o.after(l) : i.before(l), Re(l), l;
  }
  return Re(i), /** @type {TemplateNode} */
  i;
}
function no(e) {
  e.textContent = "";
}
let wt = !1, $t = !1, kt = null, Fe = !1, Xt = !1;
function Gr(e) {
  Xt = e;
}
let dt = [];
let C = null, ae = !1;
function Ie(e) {
  C = e;
}
let I = null;
function Se(e) {
  I = e;
}
let ue = null;
function io(e) {
  ue = e;
}
let B = null, K = 0, _e = null;
function oo(e) {
  _e = e;
}
let kn = 1, Ct = 0, Ce = !1;
function Cn() {
  return ++kn;
}
function gt(e) {
  var v;
  var t = e.f;
  if ((t & ye) !== 0)
    return !0;
  if ((t & et) !== 0) {
    var r = e.deps, i = (t & re) !== 0;
    if (r !== null) {
      var o, a, l = (t & yt) !== 0, f = i && I !== null && !Ce, s = r.length;
      if (l || f) {
        var c = (
          /** @type {Derived} */
          e
        ), h = c.parent;
        for (o = 0; o < s; o++)
          a = r[o], (l || !((v = a == null ? void 0 : a.reactions) != null && v.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        l && (c.f ^= yt), f && h !== null && (h.f & re) === 0 && (c.f ^= re);
      }
      for (o = 0; o < s; o++)
        if (a = r[o], gt(
          /** @type {Derived} */
          a
        ) && yn(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!i || I !== null && !Ce) && ce(e, z);
  }
  return !1;
}
function ao(e, t) {
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
  throw wt = !1, e;
}
function lo(e) {
  return (e.f & St) === 0 && (e.parent === null || (e.parent.f & bt) === 0);
}
function Nt(e, t, r, i) {
  if (wt) {
    if (r === null && (wt = !1), lo(t))
      throw e;
    return;
  }
  r !== null && (wt = !0);
  {
    ao(e, t);
    return;
  }
}
function An(e, t, r = !0) {
  var i = e.reactions;
  if (i !== null)
    for (var o = 0; o < i.length; o++) {
      var a = i[o];
      (a.f & le) !== 0 ? An(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (r ? ce(a, ye) : (a.f & z) !== 0 && ce(a, et), Lt(
        /** @type {Effect} */
        a
      ));
    }
}
function Rn(e) {
  var m;
  var t = B, r = K, i = _e, o = C, a = Ce, l = ue, f = q, s = ae, c = e.f;
  B = /** @type {null | Value[]} */
  null, K = 0, _e = null, Ce = (c & re) !== 0 && (ae || !Fe || C === null), C = (c & (be | Me)) === 0 ? e : null, ue = null, Jr(e.ctx), ae = !1, Ct++;
  try {
    var h = (
      /** @type {Function} */
      (0, e.fn)()
    ), v = e.deps;
    if (B !== null) {
      var g;
      if (At(e, K), v !== null && K > 0)
        for (v.length = K + B.length, g = 0; g < B.length; g++)
          v[K + g] = B[g];
      else
        e.deps = v = B;
      if (!Ce)
        for (g = K; g < v.length; g++)
          ((m = v[g]).reactions ?? (m.reactions = [])).push(e);
    } else v !== null && K < v.length && (At(e, K), v.length = K);
    if (Mn() && _e !== null && !ae && v !== null && (e.f & (le | et | ye)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      _e.length; g++)
        An(
          _e[g],
          /** @type {Effect} */
          e
        );
    return o !== null && Ct++, h;
  } finally {
    B = t, K = r, _e = i, C = o, Ce = a, ue = l, Jr(f), ae = s;
  }
}
function so(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var i = Li.call(r, e);
    if (i !== -1) {
      var o = r.length - 1;
      o === 0 ? r = t.reactions = null : (r[i] = r[o], r.pop());
    }
  }
  r === null && (t.f & le) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (B === null || !B.includes(t)) && (ce(t, et), (t.f & (re | yt)) === 0 && (t.f ^= yt), bn(
    /** @type {Derived} **/
    t
  ), At(
    /** @type {Derived} **/
    t,
    0
  ));
}
function At(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var i = t; i < r.length; i++)
      so(e, r[i]);
}
function Qt(e) {
  var t = e.f;
  if ((t & St) === 0) {
    ce(e, z);
    var r = I, i = q, o = Fe;
    I = e, Fe = !0;
    try {
      (t & Jt) !== 0 ? bo(e) : Tn(e), Sn(e);
      var a = Rn(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = kn;
      var l = e.deps, f;
      Br && zi && e.f & ye;
    } catch (s) {
      Nt(s, e, r, i || e.ctx);
    } finally {
      Fe = o, I = r;
    }
  }
}
function fo() {
  try {
    Hi();
  } catch (e) {
    if (kt !== null)
      Nt(e, kt, null);
    else
      throw e;
  }
}
function In() {
  var e = Fe;
  try {
    var t = 0;
    for (Fe = !0; dt.length > 0; ) {
      t++ > 1e3 && fo();
      var r = dt, i = r.length;
      dt = [];
      for (var o = 0; o < i; o++) {
        var a = co(r[o]);
        uo(a);
      }
    }
  } finally {
    $t = !1, Fe = e, kt = null;
  }
}
function uo(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var i = e[r];
      if ((i.f & (St | ze)) === 0)
        try {
          gt(i) && (Qt(i), i.deps === null && i.first === null && i.nodes_start === null && (i.teardown === null ? Nn(i) : i.fn = null));
        } catch (o) {
          Nt(o, i, null, i.ctx);
        }
    }
}
function Lt(e) {
  $t || ($t = !0, queueMicrotask(In));
  for (var t = kt = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (Me | be)) !== 0) {
      if ((r & z) === 0) return;
      t.f ^= z;
    }
  }
  dt.push(t);
}
function co(e) {
  for (var t = [], r = e; r !== null; ) {
    var i = r.f, o = (i & (be | Me)) !== 0, a = o && (i & z) !== 0;
    if (!a && (i & ze) === 0) {
      if ((i & ln) !== 0)
        t.push(r);
      else if (o)
        r.f ^= z;
      else {
        var l = C;
        try {
          C = r, gt(r) && Qt(r);
        } catch (c) {
          Nt(c, r, null, r.ctx);
        } finally {
          C = l;
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
function k(e) {
  var t;
  for (qr(); dt.length > 0; )
    $t = !0, In(), qr();
  return (
    /** @type {T} */
    t
  );
}
async function ho() {
  await Promise.resolve(), k();
}
function d(e) {
  var t = e.f, r = (t & le) !== 0;
  if (C !== null && !ae) {
    ue !== null && ue.includes(e) && Ji();
    var i = C.deps;
    e.rv < Ct && (e.rv = Ct, B === null && i !== null && i[K] === e ? K++ : B === null ? B = [e] : (!Ce || !B.includes(e)) && B.push(e));
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), a = o.parent;
    a !== null && (a.f & re) === 0 && (o.f ^= re);
  }
  return r && (o = /** @type {Derived} */
  e, gt(o) && yn(o)), e.v;
}
function Qe(e) {
  var t = ae;
  try {
    return ae = !0, e();
  } finally {
    ae = t;
  }
}
const vo = -7169;
function ce(e, t) {
  e.f = e.f & vo | t;
}
function go(e) {
  I === null && C === null && qi(), C !== null && (C.f & re) !== 0 && I === null && Bi(), Xt && Vi();
}
function _o(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Ue(e, t, r, i = !0) {
  var o = I, a = {
    ctx: q,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | ye,
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
      Qt(a), a.f |= Si;
    } catch (s) {
      throw pe(a), s;
    }
  else t !== null && Lt(a);
  var l = r && a.deps === null && a.first === null && a.nodes_start === null && a.teardown === null && (a.f & (sn | bt)) === 0;
  if (!l && i && (o !== null && _o(a, o), C !== null && (C.f & le) !== 0)) {
    var f = (
      /** @type {Derived} */
      C
    );
    (f.effects ?? (f.effects = [])).push(a);
  }
  return a;
}
function mo(e) {
  const t = Ue(It, null, !1);
  return ce(t, z), t.teardown = e, t;
}
function Ht(e) {
  go();
  var t = I !== null && (I.f & be) !== 0 && q !== null && !q.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      q
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: I,
      reaction: C
    });
  } else {
    var i = er(e);
    return i;
  }
}
function wo(e) {
  const t = Ue(Me, e, !0);
  return () => {
    pe(t);
  };
}
function po(e) {
  const t = Ue(Me, e, !0);
  return (r = {}) => new Promise((i) => {
    r.outro ? Wt(t, () => {
      pe(t), i(void 0);
    }) : (pe(t), i(void 0));
  });
}
function er(e) {
  return Ue(ln, e, !1);
}
function tr(e) {
  return Ue(It, e, !0);
}
function Ye(e, t = [], r = Pe) {
  const i = t.map(r);
  return rr(() => e(...i.map(d)));
}
function rr(e, t = 0) {
  return Ue(It | Jt | t, e, !0);
}
function Rt(e, t = !0) {
  return Ue(It | be, e, !0, t);
}
function Sn(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Xt, i = C;
    Gr(!0), Ie(null);
    try {
      t.call(null);
    } finally {
      Gr(r), Ie(i);
    }
  }
}
function Tn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var i = r.next;
    (r.f & Me) !== 0 ? r.parent = null : pe(r, t), r = i;
  }
}
function bo(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & be) === 0 && pe(t), t = r;
  }
}
function pe(e, t = !0) {
  var r = !1;
  if ((t || (e.f & Ti) !== 0) && e.nodes_start !== null) {
    for (var i = e.nodes_start, o = e.nodes_end; i !== null; ) {
      var a = i === o ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Te(i)
      );
      i.remove(), i = a;
    }
    r = !0;
  }
  Tn(e, t && !r), At(e, 0), ce(e, St);
  var l = e.transitions;
  if (l !== null)
    for (const s of l)
      s.stop();
  Sn(e);
  var f = e.parent;
  f !== null && f.first !== null && Nn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function Nn(e) {
  var t = e.parent, r = e.prev, i = e.next;
  r !== null && (r.next = i), i !== null && (i.prev = r), t !== null && (t.first === e && (t.first = i), t.last === e && (t.last = r));
}
function Wt(e, t) {
  var r = [];
  Ln(e, r, !0), yo(r, () => {
    pe(e), t && t();
  });
}
function yo(e, t) {
  var r = e.length;
  if (r > 0) {
    var i = () => --r || t();
    for (var o of e)
      o.out(i);
  } else
    t();
}
function Ln(e, t, r) {
  if ((e.f & ze) === 0) {
    if (e.f ^= ze, e.transitions !== null)
      for (const l of e.transitions)
        (l.is_global || r) && t.push(l);
    for (var i = e.first; i !== null; ) {
      var o = i.next, a = (i.f & Kt) !== 0 || (i.f & be) !== 0;
      Ln(i, t, a ? r : !1), i = o;
    }
  }
}
function Zr(e) {
  Dn(e, !0);
}
function Dn(e, t) {
  if ((e.f & ze) !== 0) {
    e.f ^= ze, (e.f & z) === 0 && (e.f ^= z), gt(e) && (ce(e, ye), Lt(e));
    for (var r = e.first; r !== null; ) {
      var i = r.next, o = (r.f & Kt) !== 0 || (r.f & be) !== 0;
      Dn(r, o ? t : !1), r = i;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
function Pn(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let q = null;
function Jr(e) {
  q = e;
}
function On(e, t = !1, r) {
  q = {
    p: q,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
}
function Fn(e) {
  const t = q;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const l = t.e;
    if (l !== null) {
      var r = I, i = C;
      t.e = null;
      try {
        for (var o = 0; o < l.length; o++) {
          var a = l[o];
          Se(a.effect), Ie(a.reaction), er(a.fn);
        }
      } finally {
        Se(r), Ie(i);
      }
    }
    q = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Mn() {
  return !0;
}
const Eo = ["touchstart", "touchmove"];
function xo(e) {
  return Eo.includes(e);
}
let Kr = !1;
function Un() {
  Kr || (Kr = !0, document.addEventListener(
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
function jn(e) {
  var t = C, r = I;
  Ie(null), Se(null);
  try {
    return e();
  } finally {
    Ie(t), Se(r);
  }
}
function $o(e, t, r, i = r) {
  e.addEventListener(t, () => jn(r));
  const o = e.__on_r;
  o ? e.__on_r = () => {
    o(), i(!0);
  } : e.__on_r = () => i(!0), Un();
}
const Vn = /* @__PURE__ */ new Set(), Yt = /* @__PURE__ */ new Set();
function ko(e, t, r, i = {}) {
  function o(a) {
    if (i.capture || ut.call(t, a), !a.cancelBubble)
      return jn(() => r == null ? void 0 : r.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? gn(() => {
    t.addEventListener(e, o, i);
  }) : t.addEventListener(e, o, i), o;
}
function Co(e, t, r, i, o) {
  var a = { capture: i, passive: o }, l = ko(e, t, r, a);
  (t === document.body || t === window || t === document) && mo(() => {
    t.removeEventListener(e, l, a);
  });
}
function Ao(e) {
  for (var t = 0; t < e.length; t++)
    Vn.add(e[t]);
  for (var r of Yt)
    r(e);
}
function ut(e) {
  var M;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), i = e.type, o = ((M = e.composedPath) == null ? void 0 : M.call(e)) || [], a = (
    /** @type {null | Element} */
    o[0] || e.target
  ), l = 0, f = e.__root;
  if (f) {
    var s = o.indexOf(f);
    if (s !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var c = o.indexOf(t);
    if (c === -1)
      return;
    s <= c && (l = s);
  }
  if (a = /** @type {Element} */
  o[l] || e.target, a !== t) {
    xt(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var h = C, v = I;
    Ie(null), Se(null);
    try {
      for (var g, m = []; a !== null; ) {
        var p = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var N = a["__" + i];
          if (N != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (un(N)) {
              var [O, ...H] = N;
              O.apply(a, [e, ...H]);
            } else
              N.call(a, e);
        } catch (U) {
          g ? m.push(U) : g = U;
        }
        if (e.cancelBubble || p === t || p === null)
          break;
        a = p;
      }
      if (g) {
        for (let U of m)
          queueMicrotask(() => {
            throw U;
          });
        throw g;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Ie(h), Se(v);
    }
  }
}
function nr(e) {
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
function de(e, t) {
  var r = (t & Ai) !== 0, i = (t & Ri) !== 0, o, a = !e.startsWith("<!>");
  return () => {
    if (L)
      return Ae(P, null), P;
    o === void 0 && (o = nr(a ? e : "<!>" + e), r || (o = /** @type {Node} */
    /* @__PURE__ */ we(o)));
    var l = (
      /** @type {TemplateNode} */
      i || En ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (r) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ we(l)
      ), s = (
        /** @type {TemplateNode} */
        l.lastChild
      );
      Ae(f, s);
    } else
      Ae(l, l);
    return l;
  };
}
// @__NO_SIDE_EFFECTS__
function Ro(e, t, r = "svg") {
  var i = !e.startsWith("<!>"), o = `<${r}>${i ? e : "<!>" + e}</${r}>`, a;
  return () => {
    if (L)
      return Ae(P, null), P;
    if (!a) {
      var l = (
        /** @type {DocumentFragment} */
        nr(o)
      ), f = (
        /** @type {Element} */
        /* @__PURE__ */ we(l)
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
function ee(e, t) {
  if (L) {
    I.nodes_end = P, Xe();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Bn(e, t) {
  return qn(e, t);
}
function Io(e, t) {
  qt(), t.intro = t.intro ?? !1;
  const r = t.target, i = L, o = P;
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
    ), Xe();
    const l = qn(e, { ...t, anchor: a });
    if (P === null || P.nodeType !== 8 || /** @type {Comment} */
    P.data !== an)
      throw Tt(), Ke;
    return Je(!1), /**  @type {Exports} */
    l;
  } catch (l) {
    if (l === Ke)
      return t.recover === !1 && Wi(), qt(), no(r), Je(!1), Bn(e, t);
    throw l;
  } finally {
    Je(i), Re(o);
  }
}
const Ge = /* @__PURE__ */ new Map();
function qn(e, { target: t, anchor: r, props: i = {}, events: o, context: a, intro: l = !0 }) {
  qt();
  var f = /* @__PURE__ */ new Set(), s = (v) => {
    for (var g = 0; g < v.length; g++) {
      var m = v[g];
      if (!f.has(m)) {
        f.add(m);
        var p = xo(m);
        t.addEventListener(m, ut, { passive: p });
        var N = Ge.get(m);
        N === void 0 ? (document.addEventListener(m, ut, { passive: p }), Ge.set(m, 1)) : Ge.set(m, N + 1);
      }
    }
  };
  s(Di(Vn)), Yt.add(s);
  var c = void 0, h = po(() => {
    var v = r ?? t.appendChild(zt());
    return Rt(() => {
      if (a) {
        On({});
        var g = (
          /** @type {ComponentContext} */
          q
        );
        g.c = a;
      }
      o && (i.$$events = o), L && Ae(
        /** @type {TemplateNode} */
        v,
        null
      ), c = e(v, i) || {}, L && (I.nodes_end = P), a && Fn();
    }), () => {
      var p;
      for (var g of f) {
        t.removeEventListener(g, ut);
        var m = (
          /** @type {number} */
          Ge.get(g)
        );
        --m === 0 ? (document.removeEventListener(g, ut), Ge.delete(g)) : Ge.set(g, m);
      }
      Yt.delete(s), v !== r && ((p = v.parentNode) == null || p.removeChild(v));
    };
  });
  return Gt.set(c, h), c;
}
let Gt = /* @__PURE__ */ new WeakMap();
function So(e, t) {
  const r = Gt.get(e);
  return r ? (Gt.delete(e), r(t)) : Promise.resolve();
}
function ke(e, t, [r, i] = [0, 0]) {
  L && r === 0 && Xe();
  var o = e, a = null, l = null, f = G, s = r > 0 ? Kt : 0, c = !1;
  const h = (g, m = !0) => {
    c = !0, v(m, g);
  }, v = (g, m) => {
    if (f === (f = g)) return;
    let p = !1;
    if (L && i !== -1) {
      if (r === 0) {
        const O = (
          /** @type {Comment} */
          o.data
        );
        O === Zt ? i = 0 : O === on ? i = 1 / 0 : (i = parseInt(O.substring(1)), i !== i && (i = f ? 1 / 0 : -1));
      }
      const N = i > r;
      !!f === N && (o = ro(), Re(o), Je(!1), p = !0, i = -1);
    }
    f ? (a ? Zr(a) : m && (a = Rt(() => m(o))), l && Wt(l, () => {
      l = null;
    })) : (l ? Zr(l) : m && (l = Rt(() => m(o, [r + 1, i]))), a && Wt(a, () => {
      a = null;
    })), p && Je(!0);
  };
  rr(() => {
    c = !1, t(h), c || v(null, null);
  }, s), L && (o = P);
}
function Ze(e, t, r, i, o) {
  var a = e, l = "", f;
  rr(() => {
    if (l === (l = t() ?? "")) {
      L && Xe();
      return;
    }
    f !== void 0 && (pe(f), f = void 0), l !== "" && (f = Rt(() => {
      if (L) {
        P.data;
        for (var s = Xe(), c = s; s !== null && (s.nodeType !== 8 || /** @type {Comment} */
        s.data !== ""); )
          c = s, s = /** @type {TemplateNode} */
          /* @__PURE__ */ Te(s);
        if (s === null)
          throw Tt(), Ke;
        Ae(P, c), a = Re(s);
        return;
      }
      var h = l + "", v = nr(h);
      Ae(
        /** @type {TemplateNode} */
        /* @__PURE__ */ we(v),
        /** @type {TemplateNode} */
        v.lastChild
      ), a.before(v);
    }));
  });
}
function To(e, t, r, i, o) {
  var f;
  L && Xe();
  var a = (f = t.$$slots) == null ? void 0 : f[r], l = !1;
  a === !0 && (a = t.children, l = !0), a === void 0 || a(e, l ? () => i : i);
}
const zr = [...` 	
\r\f \v\uFEFF`];
function No(e, t, r) {
  var i = "" + e;
  if (r) {
    for (var o in r)
      if (r[o])
        i = i ? i + " " + o : o;
      else if (i.length)
        for (var a = o.length, l = 0; (l = i.indexOf(o, l)) >= 0; ) {
          var f = l + a;
          (l === 0 || zr.includes(i[l - 1])) && (f === i.length || zr.includes(i[f])) ? i = (l === 0 ? "" : i.substring(0, l)) + i.substring(f + 1) : l = f;
        }
  }
  return i === "" ? null : i;
}
function Lo(e, t, r, i, o, a) {
  var l = e.__className;
  if (L || l !== r) {
    var f = No(r, i, a);
    (!L || f !== e.getAttribute("class")) && (f == null ? e.removeAttribute("class") : e.className = f), e.__className = r;
  } else if (a && o !== a)
    for (var s in a) {
      var c = !!a[s];
      (o == null || c !== !!o[s]) && e.classList.toggle(s, c);
    }
  return a;
}
const Do = Symbol("is custom element"), Po = Symbol("is html");
function Xr(e) {
  if (L) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var i = e.value;
          ie(e, "value", null), e.value = i;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          ie(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = r, Ui(r), Un();
  }
}
function Oo(e, t) {
  var r = Hn(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function ie(e, t, r, i) {
  var o = Hn(e);
  L && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = r) && (t === "loading" && (e[Ni] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Fo(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Hn(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Do]: e.nodeName.includes("-"),
      [Po]: e.namespaceURI === Ii
    })
  );
}
var Qr = /* @__PURE__ */ new Map();
function Fo(e) {
  var t = Qr.get(e.nodeName);
  if (t) return t;
  Qr.set(e.nodeName, t = []);
  for (var r, i = e, o = Element.prototype; o !== i; ) {
    r = Pi(i);
    for (var a in r)
      r[a].set && t.push(a);
    i = cn(i);
  }
  return t;
}
function Mo(e, t, r = t) {
  $o(e, "change", (i) => {
    var o = i ? e.defaultChecked : e.checked;
    r(o);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (L && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  Qe(t) == null) && r(e.checked), tr(() => {
    var i = t();
    e.checked = !!i;
  });
}
function en(e, t) {
  return e === t || (e == null ? void 0 : e[ct]) === t;
}
function tn(e = {}, t, r, i) {
  return er(() => {
    var o, a;
    return tr(() => {
      o = a, a = [], Qe(() => {
        e !== r(...a) && (t(e, ...a), o && en(r(...o), e) && t(null, ...o));
      });
    }), () => {
      gn(() => {
        a && en(r(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function Wn(e) {
  q === null && Pn(), Ht(() => {
    const t = Qe(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Uo(e) {
  q === null && Pn(), Wn(() => () => Qe(e));
}
let mt = !1;
function jo(e) {
  var t = mt;
  try {
    return mt = !1, [e(), mt];
  } finally {
    mt = t;
  }
}
function R(e, t, r, i) {
  var Ne;
  var o = (r & xi) !== 0, a = !0, l = (r & ki) !== 0, f = (r & Ci) !== 0, s = !1, c;
  l ? [c, s] = jo(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var h = ct in e || fn in e, v = l && (((Ne = Oe(e, t)) == null ? void 0 : Ne.set) ?? (h && t in e && ((F) => e[t] = F))) || void 0, g = (
    /** @type {V} */
    i
  ), m = !0, p = !1, N = () => (p = !0, m && (m = !1, f ? g = Qe(
    /** @type {() => V} */
    i
  ) : g = /** @type {V} */
  i), g);
  c === void 0 && i !== void 0 && (v && a && Yi(), c = N(), v && v(c));
  var O;
  if (O = () => {
    var F = (
      /** @type {V} */
      e[t]
    );
    return F === void 0 ? N() : (m = !0, p = !1, F);
  }, (r & $i) === 0)
    return O;
  if (v) {
    var H = e.$$legacy;
    return function(F, j) {
      return arguments.length > 0 ? ((!j || H || s) && v(j ? O() : F), F) : O();
    };
  }
  var M = !1, U = /* @__PURE__ */ wn(c), W = /* @__PURE__ */ Pe(() => {
    var F = O(), j = d(U);
    return M ? (M = !1, j) : U.v = F;
  });
  return o || (W.equals = mn), function(F, j) {
    if (arguments.length > 0) {
      const he = j ? d(W) : l ? oe(F) : F;
      return W.equals(he) || (M = !0, D(U, he), p && g !== void 0 && (g = he), Qe(() => d(W))), F;
    }
    return d(W);
  };
}
function Vo(e) {
  return new Bo(e);
}
var me, te;
class Bo {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    Vt(this, me);
    /** @type {Record<string, any>} */
    Vt(this, te);
    var a;
    var r = /* @__PURE__ */ new Map(), i = (l, f) => {
      var s = /* @__PURE__ */ wn(f);
      return r.set(l, s), s;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(l, f) {
          return d(r.get(f) ?? i(f, Reflect.get(l, f)));
        },
        has(l, f) {
          return f === fn ? !0 : (d(r.get(f) ?? i(f, Reflect.get(l, f))), Reflect.has(l, f));
        },
        set(l, f, s) {
          return D(r.get(f) ?? i(f, s), s), Reflect.set(l, f, s);
        }
      }
    );
    Bt(this, te, (t.hydrate ? Io : Bn)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((a = t == null ? void 0 : t.props) != null && a.$$host) || t.sync === !1) && k(), Bt(this, me, o.$$events);
    for (const l of Object.keys(Y(this, te)))
      l === "$set" || l === "$destroy" || l === "$on" || xt(this, l, {
        get() {
          return Y(this, te)[l];
        },
        /** @param {any} value */
        set(f) {
          Y(this, te)[l] = f;
        },
        enumerable: !0
      });
    Y(this, te).$set = /** @param {Record<string, any>} next */
    (l) => {
      Object.assign(o, l);
    }, Y(this, te).$destroy = () => {
      So(Y(this, te));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    Y(this, te).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    Y(this, me)[t] = Y(this, me)[t] || [];
    const i = (...o) => r.call(this, ...o);
    return Y(this, me)[t].push(i), () => {
      Y(this, me)[t] = Y(this, me)[t].filter(
        /** @param {any} fn */
        (o) => o !== i
      );
    };
  }
  $destroy() {
    Y(this, te).$destroy();
  }
}
me = new WeakMap(), te = new WeakMap();
let Yn;
typeof HTMLElement == "function" && (Yn = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, i) {
    super();
    /** The Svelte component constructor */
    ne(this, "$$ctor");
    /** Slots */
    ne(this, "$$s");
    /** @type {any} The Svelte component instance */
    ne(this, "$$c");
    /** Whether or not the custom element is connected */
    ne(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    ne(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    ne(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    ne(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    ne(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    ne(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    ne(this, "$$me");
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
          o !== "default" && (l.name = o), ee(a, l);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, i = qo(this);
      for (const o of this.$$s)
        o in i && (o === "default" && !this.$$d.children ? (this.$$d.children = t(o), r.default = !0) : r[o] = t(o));
      for (const o of this.attributes) {
        const a = this.$$g_p(o.name);
        a in this.$$d || (this.$$d[a] = pt(a, o.value, this.$$p_d, "toProp"));
      }
      for (const o in this.$$p_d)
        !(o in this.$$d) && this[o] !== void 0 && (this.$$d[o] = this[o], delete this[o]);
      this.$$c = Vo({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = wo(() => {
        tr(() => {
          var o;
          this.$$r = !0;
          for (const a of Et(this.$$c)) {
            if (!((o = this.$$p_d[a]) != null && o.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const l = pt(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = pt(t, i, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [t]: this.$$d[t] }));
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
    return Et(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function pt(e, t, r, i) {
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
function qo(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function Ho(e, t, r, i, o, a) {
  let l = class extends Yn {
    constructor() {
      super(e, r, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Et(t).map(
        (f) => (t[f].attribute || f).toLowerCase()
      );
    }
  };
  return Et(t).forEach((f) => {
    xt(l.prototype, f, {
      get() {
        return this.$$c && f in this.$$c ? this.$$c[f] : this.$$d[f];
      },
      set(s) {
        var v;
        s = pt(f, s, t), this.$$d[f] = s;
        var c = this.$$c;
        if (c) {
          var h = (v = Oe(c, f)) == null ? void 0 : v.get;
          h ? c[f] = s : c.$set({ [f]: s });
        }
      }
    });
  }), i.forEach((f) => {
    xt(l.prototype, f, {
      get() {
        var s;
        return (s = this.$$c) == null ? void 0 : s[f];
      }
    });
  }), e.element = /** @type {any} */
  l, l;
}
const Gn = new TextEncoder();
function Wo(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function Yo(e, t = "SHA-256", r = 1e5) {
  const i = Date.now().toString(16);
  e || (e = Math.round(Math.random() * r));
  const o = await Zn(i, e, t);
  return {
    algorithm: t,
    challenge: o,
    salt: i,
    signature: ""
  };
}
async function Zn(e, t, r) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return Wo(
    await crypto.subtle.digest(
      r.toUpperCase(),
      Gn.encode(e + t)
    )
  );
}
function Go(e, t, r = "SHA-256", i = 1e6, o = 0) {
  const a = new AbortController(), l = Date.now();
  return {
    promise: (async () => {
      for (let s = o; s <= i; s += 1) {
        if (a.signal.aborted)
          return null;
        if (await Zn(t, s, r) === e)
          return {
            number: s,
            took: Date.now() - l
          };
      }
      return null;
    })(),
    controller: a
  };
}
function Zo() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function Jo(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let i = 0; i < t.length; i++)
    r[i] = t.charCodeAt(i);
  return r;
}
function Ko(e, t = 12) {
  const r = new Uint8Array(t);
  for (let i = 0; i < t; i++)
    r[i] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function zo(e, t = "", r = 1e6, i = 0) {
  const o = "AES-GCM", a = new AbortController(), l = Date.now(), f = async () => {
    for (let h = i; h <= r; h += 1) {
      if (a.signal.aborted || !s || !c)
        return null;
      try {
        const v = await crypto.subtle.decrypt(
          {
            name: o,
            iv: Ko(h)
          },
          s,
          c
        );
        if (v)
          return {
            clearText: new TextDecoder().decode(v),
            took: Date.now() - l
          };
      } catch {
      }
    }
    return null;
  };
  let s = null, c = null;
  try {
    c = Jo(e);
    const h = await crypto.subtle.digest(
      "SHA-256",
      Gn.encode(t)
    );
    s = await crypto.subtle.importKey(
      "raw",
      h,
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
    promise: f(),
    controller: a
  };
}
var y = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(y || {}), Xo = /* @__PURE__ */ Ro('<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor" class="altcha-spinner"></path></svg>'), Qo = /* @__PURE__ */ de('<span role="status" aria-live="polite"><!></span> <input type="hidden">', 1), ea = /* @__PURE__ */ de('<span role="status" aria-live="polite"><!></span>'), ta = /* @__PURE__ */ de("<label><!></label>"), ra = /* @__PURE__ */ de('<div><a target="_blank" class="altcha-logo"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor"></path></svg></a></div>'), na = /* @__PURE__ */ de("<div><!></div>"), ia = /* @__PURE__ */ de("<div><!></div>"), oa = /* @__PURE__ */ de('<div class="altcha-error"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg> <!></div>'), aa = /* @__PURE__ */ de('<div class="altcha-footer"><div><!></div></div>'), la = /* @__PURE__ */ de('<div class="altcha-anchor-arrow"></div>'), sa = /* @__PURE__ */ de('<!> <div class="altcha"><div class="altcha-main"><!> <div><input type="checkbox"></div> <div class="altcha-label"><!></div> <!></div> <!> <!> <!></div>', 1);
function fa(e, t) {
  var Or, Fr;
  On(t, !0);
  let r = R(t, "auto", 7, void 0), i = R(t, "blockspam", 7, void 0), o = R(t, "challengeurl", 7, void 0), a = R(t, "challengejson", 7, void 0), l = R(t, "customfetch", 7, void 0), f = R(t, "debug", 7, !1), s = R(t, "delay", 7, 0), c = R(t, "expire", 7, void 0), h = R(t, "floating", 7, void 0), v = R(t, "floatinganchor", 7, void 0), g = R(t, "floatingoffset", 7, void 0), m = R(t, "floatingpersist", 7, !1), p = R(t, "hidefooter", 7, !1), N = R(t, "hidelogo", 7, !1), O = R(t, "id", 7, void 0), H = R(t, "name", 7, "altcha"), M = R(t, "maxnumber", 7, 1e6), U = R(t, "mockerror", 7, !1), W = R(t, "obfuscated", 7, void 0), Ne = R(t, "plugins", 7, void 0), F = R(t, "refetchonexpire", 7, !0), j = R(t, "spamfilter", 7, !1), he = R(t, "strings", 7, void 0), X = R(t, "test", 7, !1), Ee = R(t, "verifyurl", 7, void 0), je = R(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), tt = R(t, "workerurl", 7, void 0);
  const ir = ["SHA-256", "SHA-384", "SHA-512"], or = "Visit Altcha.org", ar = "https://altcha.org/", rt = (n, u) => {
    t.$$host.dispatchEvent(new CustomEvent(n, { detail: u }));
  }, lr = (Fr = (Or = document.documentElement.lang) == null ? void 0 : Or.split("-")) == null ? void 0 : Fr[0], Dt = /* @__PURE__ */ Pe(() => {
    var n;
    return o() && new URL(o(), location.origin).host.endsWith(".altcha.org") && !!((n = o()) != null && n.includes("apiKey=ckey_"));
  }), Pt = /* @__PURE__ */ Pe(() => a() ? br(a()) : void 0), sr = /* @__PURE__ */ Pe(() => he() ? br(he()) : {}), Q = /* @__PURE__ */ Pe(() => {
    var n;
    return {
      ariaLinkLabel: or,
      error: "Verification failed. Try again later.",
      expired: "Verification expired. Try again.",
      footer: `Protected by <a href="${ar}" target="_blank" aria-label="${((n = d(sr)) == null ? void 0 : n.ariaLinkLabel) || or}">ALTCHA</a>`,
      label: "I'm not a robot",
      verified: "Verified",
      verifying: "Verifying...",
      waitAlert: "Verifying... please wait.",
      ...d(sr)
    };
  }), fr = /* @__PURE__ */ Pe(() => `${O() || H()}_checkbox`);
  let Ve = We(!1), A = We(oe(y.UNVERIFIED)), V = We(void 0), nt = We(null), Be = null, w = null, qe = We(null), se = null, xe = [], Le = We(null);
  Ht(() => {
    ri(d(qe));
  }), Ht(() => {
    ni(d(A));
  }), Uo(() => {
    Jn(), w && (w.removeEventListener("submit", _r), w.removeEventListener("reset", mr), w.removeEventListener("focusin", gr), w = null), se && (clearTimeout(se), se = null), document.removeEventListener("click", hr), document.removeEventListener("scroll", vr), window.removeEventListener("resize", pr);
  }), Wn(() => {
    var n;
    S("mounted", "1.5.0"), S("workers", je()), ei(), S("plugins", xe.length ? xe.map((u) => u.constructor.pluginName).join(", ") : "none"), X() && S("using test mode"), c() && Ot(c()), r() !== void 0 && S("auto", r()), h() !== void 0 && yr(h()), w = (n = d(V)) == null ? void 0 : n.closest("form"), w && (w.addEventListener("submit", _r, { capture: !0 }), w.addEventListener("reset", mr), (r() === "onfocus" || m() === "focus") && w.addEventListener("focusin", gr)), r() === "onload" && (W() ? it() : $e()), d(Dt) && (p() || N()) && S("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      rt("load");
    });
  });
  function ur(n, u) {
    return btoa(JSON.stringify({
      algorithm: n.algorithm,
      challenge: n.challenge,
      number: u.number,
      salt: n.salt,
      signature: n.signature,
      test: X() ? !0 : void 0,
      took: u.took
    }));
  }
  function Jn() {
    for (const n of xe)
      n.destroy();
  }
  function cr() {
    o() && F() && d(A) === y.VERIFIED ? $e() : at(y.EXPIRED, d(Q).expired);
  }
  async function Kn() {
    var n;
    if (U())
      throw S("mocking error"), new Error("Mocked error.");
    if (d(Pt))
      return S("using provided json data"), d(Pt);
    if (X())
      return S("generating test challenge", { test: X() }), Yo(typeof X() != "boolean" ? +X() : void 0);
    {
      if (!o() && w) {
        const $ = w.getAttribute("action");
        $ != null && $.includes("/form/") && o($ + "/altcha");
      }
      if (!o())
        throw new Error("Attribute challengeurl not set.");
      S("fetching challenge from", o());
      const u = {
        headers: j() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      }, _ = await dr()(o(), u);
      if (!_ || !(_ instanceof Response))
        throw new Error("Fetch function did not return a response.");
      if (_.status !== 200)
        throw new Error(`Server responded with ${_.status}.`);
      const E = _.headers.get("X-Altcha-Config"), T = await _.json(), x = new URLSearchParams((n = T.salt.split("?")) == null ? void 0 : n[1]), b = x.get("expires") || x.get("expire");
      if (b) {
        const $ = new Date(+b * 1e3), ve = isNaN($.getTime()) ? 0 : $.getTime() - Date.now();
        ve > 0 && Ot(ve);
      }
      if (E)
        try {
          const $ = JSON.parse(E);
          $ && typeof $ == "object" && ("sentinel" in $ ? alert("This version of the widget is not compatible with Sentinel. Upgrade to version 2.x.x.") : ($.verifyurl && ($.verifyurl = new URL($.verifyurl, new URL(o())).toString()), $r($)));
        } catch ($) {
          S("unable to configure from X-Altcha-Config", $);
        }
      return T;
    }
  }
  function zn(n) {
    var _;
    const u = w == null ? void 0 : w.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((_ = u == null ? void 0 : u.value) == null ? void 0 : _.slice(u.value.indexOf("@"))) || void 0;
  }
  function dr() {
    let n = fetch;
    if (l())
      if (S("using customfetch"), typeof l() == "string") {
        if (n = globalThis[l()] || null, !n)
          throw new Error(`Custom fetch function not found: ${l()}`);
      } else
        n = l();
    return n;
  }
  function Xn() {
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
  function Qn(n) {
    return [
      ...(w == null ? void 0 : w.querySelectorAll(n != null && n.length ? n.map((_) => `input[name="${_}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (_, E) => {
        const T = E.name, x = E.value;
        return T && x && (_[T] = /\n/.test(x) ? x.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : x), _;
      },
      {}
    );
  }
  function ei() {
    const n = Ne() !== void 0 ? Ne().split(",") : void 0;
    for (const u of globalThis.altchaPlugins)
      (!n || n.includes(u.pluginName)) && xe.push(new u({
        el: d(V),
        clarify: it,
        dispatch: rt,
        getConfiguration: kr,
        getFloatingAnchor: Cr,
        getState: Ar,
        log: S,
        reset: at,
        solve: xr,
        setState: De,
        setFloatingAnchor: Ir,
        verify: $e
      }));
  }
  function S(...n) {
    (f() || n.some((u) => u instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${H()}]`, ...n);
  }
  function ti() {
    [y.UNVERIFIED, y.ERROR, y.EXPIRED].includes(d(A)) ? j() !== !1 && (w == null ? void 0 : w.reportValidity()) === !1 ? D(Ve, !1) : W() ? it() : $e() : D(Ve, !0);
  }
  function hr(n) {
    const u = n.target;
    h() && u && !d(V).contains(u) && (d(A) === y.VERIFIED && m() === !1 || d(A) === y.VERIFIED && m() === "focus" && !(w != null && w.matches(":focus-within")) || r() === "off" && d(A) === y.UNVERIFIED) && Rr();
  }
  function vr() {
    h() && d(A) !== y.UNVERIFIED && ot();
  }
  function ri(n) {
    for (const u of xe)
      typeof u.onErrorChange == "function" && u.onErrorChange(d(qe));
  }
  function gr(n) {
    d(A) === y.UNVERIFIED ? $e() : h() && m() === "focus" && d(A) === y.VERIFIED && Ft();
  }
  function _r(n) {
    w && r() === "onsubmit" ? d(A) === y.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), $e().then(() => {
      oi();
    })) : d(A) !== y.VERIFIED && (n.preventDefault(), n.stopPropagation(), d(A) === y.VERIFYING && wr()) : w && h() && r() === "off" && d(A) === y.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), Ft());
  }
  function mr() {
    at();
  }
  function wr() {
    d(A) === y.VERIFYING && d(Q).waitAlert && alert(d(Q).waitAlert);
  }
  function ni(n) {
    for (const u of xe)
      typeof u.onStateChange == "function" && u.onStateChange(d(A));
    h() && d(A) !== y.UNVERIFIED && requestAnimationFrame(() => {
      ot();
    }), D(Ve, d(A) === y.VERIFIED);
  }
  function pr() {
    h() && ot();
  }
  function br(n) {
    return JSON.parse(n);
  }
  async function ii(n) {
    if (!Ee())
      throw new Error("Attribute verifyurl not set.");
    S("requesting server verification from", Ee());
    const u = { payload: n };
    if (j() !== !1) {
      const {
        blockedCountries: T,
        classifier: x,
        disableRules: b,
        email: $,
        expectedLanguages: ve,
        expectedCountries: jt,
        fields: st,
        ipAddress: ft,
        text: wi,
        timeZone: Mr
      } = Xn();
      u.blockedCountries = T, u.classifier = x, u.disableRules = b, u.email = $ === !1 ? void 0 : zn($), u.expectedCountries = jt, u.expectedLanguages = ve || (lr ? [lr] : void 0), u.fields = st === !1 ? void 0 : Qn(st), u.ipAddress = ft === !1 ? void 0 : ft || "auto", u.text = wi, u.timeZone = Mr === !1 ? void 0 : Mr || Zo();
    }
    const _ = await dr()(Ee(), {
      body: JSON.stringify(u),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (!_ || !(_ instanceof Response))
      throw new Error("Fetch function did not return a response.");
    if (_.status !== 200)
      throw new Error(`Server responded with ${_.status}.`);
    const E = await _.json();
    if (E != null && E.payload && D(Le, oe(E.payload)), rt("serververification", E), i() && E.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  function oi() {
    w && "requestSubmit" in w ? w.requestSubmit() : w != null && w.reportValidity() && w.submit();
  }
  function Ot(n) {
    S("expire", n), se && (clearTimeout(se), se = null), n < 1 ? cr() : se = setTimeout(cr, n);
  }
  function yr(n) {
    S("floating", n), h() !== n && (d(V).style.left = "", d(V).style.top = ""), h(n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : h()), h() ? (r() || r("onsubmit"), document.addEventListener("scroll", vr), document.addEventListener("click", hr), window.addEventListener("resize", pr)) : r() === "onsubmit" && r(void 0);
  }
  function Er(n) {
    if (!n.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (n.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!ir.includes(n.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${ir.join(", ")}`);
    if (!n.challenge || n.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!n.salt || n.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function xr(n) {
    let u = null;
    if ("Worker" in window) {
      try {
        u = await ai(n, n.maxNumber || n.maxnumber || M());
      } catch (_) {
        S(_);
      }
      if ((u == null ? void 0 : u.number) !== void 0 || "obfuscated" in n)
        return { data: n, solution: u };
    }
    if ("obfuscated" in n) {
      const _ = await zo(n.obfuscated, n.key, n.maxNumber || n.maxnumber);
      return { data: n, solution: await _.promise };
    }
    return {
      data: n,
      solution: await Go(n.challenge, n.salt, n.algorithm, n.maxNumber || n.maxnumber || M()).promise
    };
  }
  async function ai(n, u = typeof X() == "number" ? X() : n.maxNumber || n.maxnumber || M(), _ = Math.ceil(je())) {
    const E = [];
    _ = Math.min(16, u, Math.max(1, _));
    for (let b = 0; b < _; b++)
      E.push(altchaCreateWorker(tt()));
    const T = Math.ceil(u / _), x = await Promise.all(E.map((b, $) => {
      const ve = $ * T;
      return new Promise((jt) => {
        b.addEventListener("message", (st) => {
          if (st.data)
            for (const ft of E)
              ft !== b && ft.postMessage({ type: "abort" });
          jt(st.data);
        }), b.postMessage({
          payload: n,
          max: ve + T,
          start: ve,
          type: "work"
        });
      });
    }));
    for (const b of E)
      b.terminate();
    return x.find((b) => !!b) || null;
  }
  async function it() {
    if (!W()) {
      De(y.ERROR);
      return;
    }
    const n = xe.find((u) => u.constructor.pluginName === "obfuscation");
    if (!n || !("clarify" in n)) {
      De(y.ERROR), S("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in n && typeof n.clarify == "function")
      return n.clarify();
  }
  function $r(n) {
    n.obfuscated !== void 0 && W(n.obfuscated), n.auto !== void 0 && (r(n.auto), r() === "onload" && (W() ? it() : $e())), n.blockspam !== void 0 && i(!!n.blockspam), n.customfetch !== void 0 && l(n.customfetch), n.floatinganchor !== void 0 && v(n.floatinganchor), n.delay !== void 0 && s(n.delay), n.floatingoffset !== void 0 && g(n.floatingoffset), n.floating !== void 0 && yr(n.floating), n.expire !== void 0 && (Ot(n.expire), c(n.expire)), n.challenge && (a(typeof n.challenge == "string" ? n.challenge : JSON.stringify(n.challenge)), Er(d(Pt))), n.challengeurl !== void 0 && o(n.challengeurl), n.debug !== void 0 && f(!!n.debug), n.hidefooter !== void 0 && p(!!n.hidefooter), n.hidelogo !== void 0 && N(!!n.hidelogo), n.maxnumber !== void 0 && M(+n.maxnumber), n.mockerror !== void 0 && U(!!n.mockerror), n.name !== void 0 && H(n.name), n.refetchonexpire !== void 0 && F(!!n.refetchonexpire), n.spamfilter !== void 0 && j(typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && he(typeof n.strings == "string" ? n.strings : JSON.stringify(n.strings)), n.test !== void 0 && X(typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && Ee(n.verifyurl), n.workers !== void 0 && je(+n.workers), n.workerurl !== void 0 && tt(n.workerurl);
  }
  function kr() {
    return {
      auto: r(),
      blockspam: i(),
      challengeurl: o(),
      debug: f(),
      delay: s(),
      expire: c(),
      floating: h(),
      floatinganchor: v(),
      floatingoffset: g(),
      hidefooter: p(),
      hidelogo: N(),
      name: H(),
      maxnumber: M(),
      mockerror: U(),
      obfuscated: W(),
      refetchonexpire: F(),
      spamfilter: j(),
      strings: d(Q),
      test: X(),
      verifyurl: Ee(),
      workers: je(),
      workerurl: tt()
    };
  }
  function Cr() {
    return Be;
  }
  function li(n) {
    return xe.find((u) => u.constructor.pluginName === n);
  }
  function Ar() {
    return d(A);
  }
  function Rr() {
    d(V).style.display = "none";
  }
  function ot(n = 20) {
    if (d(V))
      if (Be || (Be = (v() ? document.querySelector(v()) : w == null ? void 0 : w.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || w), Be) {
        const u = parseInt(g(), 10) || 12, _ = Be.getBoundingClientRect(), E = d(V).getBoundingClientRect(), T = document.documentElement.clientHeight, x = document.documentElement.clientWidth, b = h() === "auto" ? _.bottom + E.height + u + n > T : h() === "top", $ = Math.max(n, Math.min(x - n - E.width, _.left + _.width / 2 - E.width / 2));
        if (b ? d(V).style.top = `${_.top - (E.height + u)}px` : d(V).style.top = `${_.bottom + u}px`, d(V).style.left = `${$}px`, d(V).setAttribute("data-floating", b ? "top" : "bottom"), d(nt)) {
          const ve = d(nt).getBoundingClientRect();
          d(nt).style.left = _.left - $ + _.width / 2 - ve.width / 2 + "px";
        }
      } else
        S("unable to find floating anchor element");
  }
  function at(n = y.UNVERIFIED, u = null) {
    se && (clearTimeout(se), se = null), D(Ve, !1), D(Le, null), De(n, u);
  }
  function Ir(n) {
    Be = n;
  }
  function De(n, u = null) {
    D(A, oe(n)), D(qe, oe(u)), rt("statechange", {
      payload: d(Le),
      state: d(A)
    });
  }
  function Ft() {
    d(V).style.display = "block", h() && ot();
  }
  async function $e() {
    return at(y.VERIFYING), await new Promise((n) => setTimeout(n, s() || 0)), Kn().then((n) => (Er(n), S("challenge", n), xr(n))).then(({ data: n, solution: u }) => {
      if (S("solution", u), !u || n && "challenge" in n && !("clearText" in u))
        if ((u == null ? void 0 : u.number) !== void 0 && "challenge" in n) {
          if (Ee())
            return ii(ur(n, u));
          D(Le, oe(ur(n, u))), S("payload", d(Le));
        } else
          throw S("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      De(y.VERIFIED), S("verified"), ho().then(() => {
        rt("verified", { payload: d(Le) });
      });
    }).catch((n) => {
      S(n), De(y.ERROR, n.message);
    });
  }
  var Sr = sa(), Tr = Yr(Sr);
  To(Tr, t, "default", {});
  var lt = ge(Tr, 2), Mt = J(lt), Nr = J(Mt);
  {
    var si = (n) => {
      var u = Xo();
      ee(n, u);
    };
    ke(Nr, (n) => {
      d(A) === y.VERIFYING && n(si);
    });
  }
  var _t = ge(Nr, 2);
  let Lr;
  var He = J(_t);
  Xr(He), He.__change = ti, Z(_t);
  var Ut = ge(_t, 2), fi = J(Ut);
  {
    var ui = (n) => {
      var u = Qo(), _ = Yr(u), E = J(_);
      Ze(E, () => d(Q).verified), Z(_);
      var T = ge(_, 2);
      Xr(T), Ye(() => {
        ie(T, "name", H()), Oo(T, d(Le));
      }), ee(n, u);
    }, ci = (n, u) => {
      {
        var _ = (T) => {
          var x = ea(), b = J(x);
          Ze(b, () => d(Q).verifying), Z(x), ee(T, x);
        }, E = (T) => {
          var x = ta(), b = J(x);
          Ze(b, () => d(Q).label), Z(x), Ye(() => ie(x, "for", d(fr))), ee(T, x);
        };
        ke(
          n,
          (T) => {
            d(A) === y.VERIFYING ? T(_) : T(E, !1);
          },
          u
        );
      }
    };
    ke(fi, (n) => {
      d(A) === y.VERIFIED ? n(ui) : n(ci, !1);
    });
  }
  Z(Ut);
  var di = ge(Ut, 2);
  {
    var hi = (n) => {
      var u = ra(), _ = J(u);
      ie(_, "href", ar), Z(u), Ye(() => ie(_, "aria-label", d(Q).ariaLinkLabel)), ee(n, u);
    };
    ke(di, (n) => {
      (N() !== !0 || d(Dt)) && n(hi);
    });
  }
  Z(Mt);
  var Dr = ge(Mt, 2);
  {
    var vi = (n) => {
      var u = oa(), _ = ge(J(u), 2);
      {
        var E = (x) => {
          var b = na(), $ = J(b);
          Ze($, () => d(Q).expired), Z(b), Ye(() => ie(b, "title", d(qe))), ee(x, b);
        }, T = (x) => {
          var b = ia(), $ = J(b);
          Ze($, () => d(Q).error), Z(b), Ye(() => ie(b, "title", d(qe))), ee(x, b);
        };
        ke(_, (x) => {
          d(A) === y.EXPIRED ? x(E) : x(T, !1);
        });
      }
      Z(u), ee(n, u);
    };
    ke(Dr, (n) => {
      (d(qe) || d(A) === y.EXPIRED) && n(vi);
    });
  }
  var Pr = ge(Dr, 2);
  {
    var gi = (n) => {
      var u = aa(), _ = J(u), E = J(_);
      Ze(E, () => d(Q).footer), Z(_), Z(u), ee(n, u);
    };
    ke(Pr, (n) => {
      d(Q).footer && (p() !== !0 || d(Dt)) && n(gi);
    });
  }
  var _i = ge(Pr, 2);
  {
    var mi = (n) => {
      var u = la();
      tn(u, (_) => D(nt, _), () => d(nt)), ee(n, u);
    };
    ke(_i, (n) => {
      h() && n(mi);
    });
  }
  return Z(lt), tn(lt, (n) => D(V, n), () => d(V)), Ye(
    (n) => {
      ie(lt, "data-state", d(A)), ie(lt, "data-floating", h()), Lr = Lo(_t, 1, "altcha-checkbox", null, Lr, n), ie(He, "id", d(fr)), He.required = r() !== "onsubmit" && (!h() || r() !== "off");
    },
    [
      () => ({
        "altcha-hidden": d(A) === y.VERIFYING
      })
    ]
  ), Co("invalid", He, wr), Mo(He, () => d(Ve), (n) => D(Ve, n)), ee(e, Sr), Fn({
    clarify: it,
    configure: $r,
    getConfiguration: kr,
    getFloatingAnchor: Cr,
    getPlugin: li,
    getState: Ar,
    hide: Rr,
    repositionFloating: ot,
    reset: at,
    setFloatingAnchor: Ir,
    setState: De,
    show: Ft,
    verify: $e,
    get auto() {
      return r();
    },
    set auto(n = void 0) {
      r(n), k();
    },
    get blockspam() {
      return i();
    },
    set blockspam(n = void 0) {
      i(n), k();
    },
    get challengeurl() {
      return o();
    },
    set challengeurl(n = void 0) {
      o(n), k();
    },
    get challengejson() {
      return a();
    },
    set challengejson(n = void 0) {
      a(n), k();
    },
    get customfetch() {
      return l();
    },
    set customfetch(n = void 0) {
      l(n), k();
    },
    get debug() {
      return f();
    },
    set debug(n = !1) {
      f(n), k();
    },
    get delay() {
      return s();
    },
    set delay(n = 0) {
      s(n), k();
    },
    get expire() {
      return c();
    },
    set expire(n = void 0) {
      c(n), k();
    },
    get floating() {
      return h();
    },
    set floating(n = void 0) {
      h(n), k();
    },
    get floatinganchor() {
      return v();
    },
    set floatinganchor(n = void 0) {
      v(n), k();
    },
    get floatingoffset() {
      return g();
    },
    set floatingoffset(n = void 0) {
      g(n), k();
    },
    get floatingpersist() {
      return m();
    },
    set floatingpersist(n = !1) {
      m(n), k();
    },
    get hidefooter() {
      return p();
    },
    set hidefooter(n = !1) {
      p(n), k();
    },
    get hidelogo() {
      return N();
    },
    set hidelogo(n = !1) {
      N(n), k();
    },
    get id() {
      return O();
    },
    set id(n = void 0) {
      O(n), k();
    },
    get name() {
      return H();
    },
    set name(n = "altcha") {
      H(n), k();
    },
    get maxnumber() {
      return M();
    },
    set maxnumber(n = 1e6) {
      M(n), k();
    },
    get mockerror() {
      return U();
    },
    set mockerror(n = !1) {
      U(n), k();
    },
    get obfuscated() {
      return W();
    },
    set obfuscated(n = void 0) {
      W(n), k();
    },
    get plugins() {
      return Ne();
    },
    set plugins(n = void 0) {
      Ne(n), k();
    },
    get refetchonexpire() {
      return F();
    },
    set refetchonexpire(n = !0) {
      F(n), k();
    },
    get spamfilter() {
      return j();
    },
    set spamfilter(n = !1) {
      j(n), k();
    },
    get strings() {
      return he();
    },
    set strings(n = void 0) {
      he(n), k();
    },
    get test() {
      return X();
    },
    set test(n = !1) {
      X(n), k();
    },
    get verifyurl() {
      return Ee();
    },
    set verifyurl(n = void 0) {
      Ee(n), k();
    },
    get workers() {
      return je();
    },
    set workers(n = Math.min(16, navigator.hardwareConcurrency || 8)) {
      je(n), k();
    },
    get workerurl() {
      return tt();
    },
    set workerurl(n = void 0) {
      tt(n), k();
    }
  });
}
Ao(["change"]);
customElements.define("altcha-widget", Ho(
  fa,
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
const ua = `.altcha {
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
function ca(e, t = "__altcha-css") {
  if (!document.getElementById(t)) {
    const r = document.createElement("style");
    r.id = t, r.textContent = e, document.head.appendChild(r);
  }
}
globalThis.altchaCreateWorker = (e) => e ? new Worker(new URL(e)) : new yi();
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
ca(ua);
export {
  fa as Altcha
};
