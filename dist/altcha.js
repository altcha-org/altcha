var wi = Object.defineProperty;
var Ur = (e) => {
  throw TypeError(e);
};
var pi = (e, t, r) => t in e ? wi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ne = (e, t, r) => pi(e, typeof t != "symbol" ? t + "" : t, r), jr = (e, t, r) => t.has(e) || Ur("Cannot " + r);
var W = (e, t, r) => (jr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), jt = (e, t, r) => t.has(e) ? Ur("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), Vt = (e, t, r, l) => (jr(e, t, "write to private field"), l ? l.call(e, r) : t.set(e, r), r);
const ln = `(function(){"use strict";const d=new TextEncoder;function p(e){return[...new Uint8Array(e)].map(t=>t.toString(16).padStart(2,"0")).join("")}async function b(e,t,r){if(typeof crypto>"u"||!("subtle"in crypto)||!("digest"in crypto.subtle))throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");return p(await crypto.subtle.digest(r.toUpperCase(),d.encode(e+t)))}function w(e,t,r="SHA-256",n=1e6,s=0){const o=new AbortController,a=Date.now();return{promise:(async()=>{for(let c=s;c<=n;c+=1){if(o.signal.aborted)return null;if(await b(t,c,r)===e)return{number:c,took:Date.now()-a}}return null})(),controller:o}}function h(e){const t=atob(e),r=new Uint8Array(t.length);for(let n=0;n<t.length;n++)r[n]=t.charCodeAt(n);return r}function g(e,t=12){const r=new Uint8Array(t);for(let n=0;n<t;n++)r[n]=e%256,e=Math.floor(e/256);return r}async function m(e,t="",r=1e6,n=0){const s="AES-GCM",o=new AbortController,a=Date.now(),l=async()=>{for(let u=n;u<=r;u+=1){if(o.signal.aborted||!c||!y)return null;try{const f=await crypto.subtle.decrypt({name:s,iv:g(u)},c,y);if(f)return{clearText:new TextDecoder().decode(f),took:Date.now()-a}}catch{}}return null};let c=null,y=null;try{y=h(e);const u=await crypto.subtle.digest("SHA-256",d.encode(t));c=await crypto.subtle.importKey("raw",u,s,!1,["decrypt"])}catch{return{promise:Promise.reject(),controller:o}}return{promise:l(),controller:o}}let i;onmessage=async e=>{const{type:t,payload:r,start:n,max:s}=e.data;let o=null;if(t==="abort")i==null||i.abort(),i=void 0;else if(t==="work"){if("obfuscated"in r){const{key:a,obfuscated:l}=r||{};o=await m(l,a,s,n)}else{const{algorithm:a,challenge:l,salt:c}=r||{};o=w(l,c,a,s,n)}i=o.controller,o.promise.then(a=>{self.postMessage(a&&{...a,worker:!0})})}}})();
`, Vr = typeof self < "u" && self.Blob && new Blob([ln], { type: "text/javascript;charset=utf-8" });
function bi(e) {
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
      "data:text/javascript;charset=utf-8," + encodeURIComponent(ln),
      {
        name: e == null ? void 0 : e.name
      }
    );
  } finally {
    t && (self.URL || self.webkitURL).revokeObjectURL(t);
  }
}
const yi = "5";
var nn;
typeof window < "u" && ((nn = window.__svelte ?? (window.__svelte = {})).v ?? (nn.v = /* @__PURE__ */ new Set())).add(yi);
const Ei = 1, xi = 4, $i = 8, ki = 16, Ci = 1, Ai = 2, Zt = "[", on = "[!", an = "]", Je = {}, Y = Symbol(), Ri = "http://www.w3.org/1999/xhtml", Br = !1, ae = 2, sn = 4, It = 8, Gt = 16, be = 32, Fe = 64, bt = 128, re = 256, yt = 512, K = 1024, ye = 2048, et = 4096, Ke = 8192, St = 16384, Ii = 32768, Jt = 65536, Si = 1 << 19, fn = 1 << 20, ct = Symbol("$state"), un = Symbol("legacy props"), Ti = Symbol("");
var cn = Array.isArray, Ni = Array.prototype.indexOf, Li = Array.from, Et = Object.keys, xt = Object.defineProperty, Oe = Object.getOwnPropertyDescriptor, Di = Object.getOwnPropertyDescriptors, Pi = Object.prototype, Oi = Array.prototype, dn = Object.getPrototypeOf;
function vn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const zi = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let vt = [], ht = [];
function hn() {
  var e = vt;
  vt = [], vn(e);
}
function gn() {
  var e = ht;
  ht = [], vn(e);
}
function Kt(e) {
  vt.length === 0 && queueMicrotask(hn), vt.push(e);
}
function Fi(e) {
  ht.length === 0 && zi(gn), ht.push(e);
}
function qr() {
  vt.length > 0 && hn(), ht.length > 0 && gn();
}
function _n(e) {
  return e === this.v;
}
function Mi(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function mn(e) {
  return !Mi(e, this.v);
}
function Ui(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ji() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Vi(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Bi() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function qi() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Hi(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Wi() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Yi() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Zi() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Gi() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Ji = !1;
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
function He(e) {
  return /* @__PURE__ */ Ki(fe(e));
}
// @__NO_SIDE_EFFECTS__
function wn(e, t = !1) {
  const r = fe(e);
  return t || (r.equals = mn), r;
}
// @__NO_SIDE_EFFECTS__
function Ki(e) {
  return C !== null && !oe && (C.f & ae) !== 0 && (ue === null ? nl([e]) : ue.push(e)), e;
}
function D(e, t) {
  return C !== null && !oe && Fn() && (C.f & (ae | Gt)) !== 0 && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (ue === null || !ue.includes(e)) && Gi(), Xi(e, t);
}
function Xi(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = Cn(), pn(e, ye), I !== null && (I.f & K) !== 0 && (I.f & (be | Fe)) === 0 && (_e === null ? il([e]) : _e.push(e))), t;
}
function pn(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var l = r.length, i = 0; i < l; i++) {
      var o = r[i], a = o.f;
      (a & ye) === 0 && (ce(o, t), (a & (K | re)) !== 0 && ((a & ae) !== 0 ? pn(
        /** @type {Derived} */
        o,
        et
      ) : Lt(
        /** @type {Effect} */
        o
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Pe(e) {
  var t = ae | ye, r = C !== null && (C.f & ae) !== 0 ? (
    /** @type {Derived} */
    C
  ) : null;
  return I === null || r !== null && (r.f & re) !== 0 ? t |= re : I.f |= fn, {
    ctx: B,
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
function Qi(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & ae) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function el(e) {
  var t, r = I;
  Se(Qi(e));
  try {
    bn(e), t = Rn(e);
  } finally {
    Se(r);
  }
  return t;
}
function yn(e) {
  var t = el(e), r = (Ce || (e.f & re) !== 0) && e.deps !== null ? et : K;
  ce(e, r), e.equals(t) || (e.v = t, e.wv = Cn());
}
function Tt(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let L = !1;
function Ge(e) {
  L = e;
}
let P;
function Re(e) {
  if (e === null)
    throw Tt(), Je;
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
      throw Tt(), Je;
    P = e;
  }
}
function tl() {
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
    var l = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Te(t)
    );
    t.remove(), t = l;
  }
}
function le(e, t = null, r) {
  if (typeof e != "object" || e === null || ct in e)
    return e;
  const l = dn(e);
  if (l !== Pi && l !== Oi)
    return e;
  var i = /* @__PURE__ */ new Map(), o = cn(e), a = fe(0);
  o && i.set("length", fe(
    /** @type {any[]} */
    e.length
  ));
  var f;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, c, v) {
        (!("value" in v) || v.configurable === !1 || v.enumerable === !1 || v.writable === !1) && Wi();
        var h = i.get(c);
        return h === void 0 ? (h = fe(v.value), i.set(c, h)) : D(h, le(v.value, f)), !0;
      },
      deleteProperty(s, c) {
        var v = i.get(c);
        if (v === void 0)
          c in s && i.set(c, fe(Y));
        else {
          if (o && typeof c == "string") {
            var h = (
              /** @type {Source<number>} */
              i.get("length")
            ), g = Number(c);
            Number.isInteger(g) && g < h.v && D(h, g);
          }
          D(v, Y), Hr(a);
        }
        return !0;
      },
      get(s, c, v) {
        var p;
        if (c === ct)
          return e;
        var h = i.get(c), g = c in s;
        if (h === void 0 && (!g || (p = Oe(s, c)) != null && p.writable) && (h = fe(le(g ? s[c] : Y, f)), i.set(c, h)), h !== void 0) {
          var m = d(h);
          return m === Y ? void 0 : m;
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
          if (g !== void 0 && m !== Y)
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
        if (c === ct)
          return !0;
        var v = i.get(c), h = v !== void 0 && v.v !== Y || Reflect.has(s, c);
        if (v !== void 0 || I !== null && (!h || (m = Oe(s, c)) != null && m.writable)) {
          v === void 0 && (v = fe(h ? le(s[c], f) : Y), i.set(c, v));
          var g = d(v);
          if (g === Y)
            return !1;
        }
        return h;
      },
      set(s, c, v, h) {
        var M;
        var g = i.get(c), m = c in s;
        if (o && c === "length")
          for (var p = v; p < /** @type {Source<number>} */
          g.v; p += 1) {
            var N = i.get(p + "");
            N !== void 0 ? D(N, Y) : p in s && (N = fe(Y), i.set(p + "", N));
          }
        g === void 0 ? (!m || (M = Oe(s, c)) != null && M.writable) && (g = fe(void 0), D(g, le(v, f)), i.set(c, g)) : (m = g.v !== Y, D(g, le(v, f)));
        var O = Reflect.getOwnPropertyDescriptor(s, c);
        if (O != null && O.set && O.set.call(h, v), !m) {
          if (o && typeof c == "string") {
            var q = (
              /** @type {Source<number>} */
              i.get("length")
            ), F = Number(c);
            Number.isInteger(F) && F >= q.v && D(q, F + 1);
          }
          Hr(a);
        }
        return !0;
      },
      ownKeys(s) {
        d(a);
        var c = Reflect.ownKeys(s).filter((g) => {
          var m = i.get(g);
          return m === void 0 || m.v !== Y;
        });
        for (var [v, h] of i)
          h.v !== Y && !(v in s) && c.push(v);
        return c;
      },
      setPrototypeOf() {
        Yi();
      }
    }
  );
}
function Hr(e, t = 1) {
  D(e, e.v + t);
}
var Wr, En, xn, $n;
function Bt() {
  if (Wr === void 0) {
    Wr = window, En = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    xn = Oe(t, "firstChild").get, $n = Oe(t, "nextSibling").get, e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Xt(e = "") {
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
function G(e, t) {
  if (!L)
    return /* @__PURE__ */ we(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ we(P)
  );
  return r === null && (r = P.appendChild(Xt())), Re(r), r;
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
  let l = L ? P : e;
  for (var i; t--; )
    i = l, l = /** @type {TemplateNode} */
    /* @__PURE__ */ Te(l);
  if (!L)
    return l;
  var o = l == null ? void 0 : l.nodeType;
  if (r && o !== 3) {
    var a = Xt();
    return l === null ? i == null || i.after(a) : l.before(a), Re(a), a;
  }
  return Re(l), /** @type {TemplateNode} */
  l;
}
function rl(e) {
  e.textContent = "";
}
let wt = !1, $t = !1, kt = null, ze = !1, Qt = !1;
function Zr(e) {
  Qt = e;
}
let dt = [];
let C = null, oe = !1;
function Ie(e) {
  C = e;
}
let I = null;
function Se(e) {
  I = e;
}
let ue = null;
function nl(e) {
  ue = e;
}
let V = null, J = 0, _e = null;
function il(e) {
  _e = e;
}
let kn = 1, Ct = 0, Ce = !1;
function Cn() {
  return ++kn;
}
function gt(e) {
  var h;
  var t = e.f;
  if ((t & ye) !== 0)
    return !0;
  if ((t & et) !== 0) {
    var r = e.deps, l = (t & re) !== 0;
    if (r !== null) {
      var i, o, a = (t & yt) !== 0, f = l && I !== null && !Ce, s = r.length;
      if (a || f) {
        var c = (
          /** @type {Derived} */
          e
        ), v = c.parent;
        for (i = 0; i < s; i++)
          o = r[i], (a || !((h = o == null ? void 0 : o.reactions) != null && h.includes(c))) && (o.reactions ?? (o.reactions = [])).push(c);
        a && (c.f ^= yt), f && v !== null && (v.f & re) === 0 && (c.f ^= re);
      }
      for (i = 0; i < s; i++)
        if (o = r[i], gt(
          /** @type {Derived} */
          o
        ) && yn(
          /** @type {Derived} */
          o
        ), o.wv > e.wv)
          return !0;
    }
    (!l || I !== null && !Ce) && ce(e, K);
  }
  return !1;
}
function ll(e, t) {
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
function ol(e) {
  return (e.f & St) === 0 && (e.parent === null || (e.parent.f & bt) === 0);
}
function Nt(e, t, r, l) {
  if (wt) {
    if (r === null && (wt = !1), ol(t))
      throw e;
    return;
  }
  r !== null && (wt = !0);
  {
    ll(e, t);
    return;
  }
}
function An(e, t, r = !0) {
  var l = e.reactions;
  if (l !== null)
    for (var i = 0; i < l.length; i++) {
      var o = l[i];
      (o.f & ae) !== 0 ? An(
        /** @type {Derived} */
        o,
        t,
        !1
      ) : t === o && (r ? ce(o, ye) : (o.f & K) !== 0 && ce(o, et), Lt(
        /** @type {Effect} */
        o
      ));
    }
}
function Rn(e) {
  var m;
  var t = V, r = J, l = _e, i = C, o = Ce, a = ue, f = B, s = oe, c = e.f;
  V = /** @type {null | Value[]} */
  null, J = 0, _e = null, Ce = (c & re) !== 0 && (oe || !ze || C === null), C = (c & (be | Fe)) === 0 ? e : null, ue = null, Jr(e.ctx), oe = !1, Ct++;
  try {
    var v = (
      /** @type {Function} */
      (0, e.fn)()
    ), h = e.deps;
    if (V !== null) {
      var g;
      if (At(e, J), h !== null && J > 0)
        for (h.length = J + V.length, g = 0; g < V.length; g++)
          h[J + g] = V[g];
      else
        e.deps = h = V;
      if (!Ce)
        for (g = J; g < h.length; g++)
          ((m = h[g]).reactions ?? (m.reactions = [])).push(e);
    } else h !== null && J < h.length && (At(e, J), h.length = J);
    if (Fn() && _e !== null && !oe && h !== null && (e.f & (ae | et | ye)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      _e.length; g++)
        An(
          _e[g],
          /** @type {Effect} */
          e
        );
    return i !== null && Ct++, v;
  } finally {
    V = t, J = r, _e = l, C = i, Ce = o, ue = a, Jr(f), oe = s;
  }
}
function al(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var l = Ni.call(r, e);
    if (l !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[l] = r[i], r.pop());
    }
  }
  r === null && (t.f & ae) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (V === null || !V.includes(t)) && (ce(t, et), (t.f & (re | yt)) === 0 && (t.f ^= yt), bn(
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
    for (var l = t; l < r.length; l++)
      al(e, r[l]);
}
function er(e) {
  var t = e.f;
  if ((t & St) === 0) {
    ce(e, K);
    var r = I, l = B, i = ze;
    I = e, ze = !0;
    try {
      (t & Gt) !== 0 ? wl(e) : Tn(e), Sn(e);
      var o = Rn(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = kn;
      var a = e.deps, f;
      Br && Ji && e.f & ye;
    } catch (s) {
      Nt(s, e, r, l || e.ctx);
    } finally {
      ze = i, I = r;
    }
  }
}
function sl() {
  try {
    Bi();
  } catch (e) {
    if (kt !== null)
      Nt(e, kt, null);
    else
      throw e;
  }
}
function In() {
  var e = ze;
  try {
    var t = 0;
    for (ze = !0; dt.length > 0; ) {
      t++ > 1e3 && sl();
      var r = dt, l = r.length;
      dt = [];
      for (var i = 0; i < l; i++) {
        var o = ul(r[i]);
        fl(o);
      }
    }
  } finally {
    $t = !1, ze = e, kt = null;
  }
}
function fl(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var l = e[r];
      if ((l.f & (St | Ke)) === 0)
        try {
          gt(l) && (er(l), l.deps === null && l.first === null && l.nodes_start === null && (l.teardown === null ? Nn(l) : l.fn = null));
        } catch (i) {
          Nt(i, l, null, l.ctx);
        }
    }
}
function Lt(e) {
  $t || ($t = !0, queueMicrotask(In));
  for (var t = kt = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (Fe | be)) !== 0) {
      if ((r & K) === 0) return;
      t.f ^= K;
    }
  }
  dt.push(t);
}
function ul(e) {
  for (var t = [], r = e; r !== null; ) {
    var l = r.f, i = (l & (be | Fe)) !== 0, o = i && (l & K) !== 0;
    if (!o && (l & Ke) === 0) {
      if ((l & sn) !== 0)
        t.push(r);
      else if (i)
        r.f ^= K;
      else {
        var a = C;
        try {
          C = r, gt(r) && er(r);
        } catch (c) {
          Nt(c, r, null, r.ctx);
        } finally {
          C = a;
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
async function cl() {
  await Promise.resolve(), k();
}
function d(e) {
  var t = e.f, r = (t & ae) !== 0;
  if (C !== null && !oe) {
    ue !== null && ue.includes(e) && Zi();
    var l = C.deps;
    e.rv < Ct && (e.rv = Ct, V === null && l !== null && l[J] === e ? J++ : V === null ? V = [e] : (!Ce || !V.includes(e)) && V.push(e));
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var i = (
      /** @type {Derived} */
      e
    ), o = i.parent;
    o !== null && (o.f & re) === 0 && (i.f ^= re);
  }
  return r && (i = /** @type {Derived} */
  e, gt(i) && yn(i)), e.v;
}
function Qe(e) {
  var t = oe;
  try {
    return oe = !0, e();
  } finally {
    oe = t;
  }
}
const dl = -7169;
function ce(e, t) {
  e.f = e.f & dl | t;
}
function vl(e) {
  I === null && C === null && Vi(), C !== null && (C.f & re) !== 0 && I === null && ji(), Qt && Ui();
}
function hl(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Me(e, t, r, l = !0) {
  var i = I, o = {
    ctx: B,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | ye,
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
      er(o), o.f |= Ii;
    } catch (s) {
      throw pe(o), s;
    }
  else t !== null && Lt(o);
  var a = r && o.deps === null && o.first === null && o.nodes_start === null && o.teardown === null && (o.f & (fn | bt)) === 0;
  if (!a && l && (i !== null && hl(o, i), C !== null && (C.f & ae) !== 0)) {
    var f = (
      /** @type {Derived} */
      C
    );
    (f.effects ?? (f.effects = [])).push(o);
  }
  return o;
}
function gl(e) {
  const t = Me(It, null, !1);
  return ce(t, K), t.teardown = e, t;
}
function qt(e) {
  vl();
  var t = I !== null && (I.f & be) !== 0 && B !== null && !B.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      B
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: I,
      reaction: C
    });
  } else {
    var l = tr(e);
    return l;
  }
}
function _l(e) {
  const t = Me(Fe, e, !0);
  return () => {
    pe(t);
  };
}
function ml(e) {
  const t = Me(Fe, e, !0);
  return (r = {}) => new Promise((l) => {
    r.outro ? Ht(t, () => {
      pe(t), l(void 0);
    }) : (pe(t), l(void 0));
  });
}
function tr(e) {
  return Me(sn, e, !1);
}
function rr(e) {
  return Me(It, e, !0);
}
function We(e, t = [], r = Pe) {
  const l = t.map(r);
  return nr(() => e(...l.map(d)));
}
function nr(e, t = 0) {
  return Me(It | Gt | t, e, !0);
}
function Rt(e, t = !0) {
  return Me(It | be, e, !0, t);
}
function Sn(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Qt, l = C;
    Zr(!0), Ie(null);
    try {
      t.call(null);
    } finally {
      Zr(r), Ie(l);
    }
  }
}
function Tn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var l = r.next;
    (r.f & Fe) !== 0 ? r.parent = null : pe(r, t), r = l;
  }
}
function wl(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & be) === 0 && pe(t), t = r;
  }
}
function pe(e, t = !0) {
  var r = !1;
  if ((t || (e.f & Si) !== 0) && e.nodes_start !== null) {
    for (var l = e.nodes_start, i = e.nodes_end; l !== null; ) {
      var o = l === i ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Te(l)
      );
      l.remove(), l = o;
    }
    r = !0;
  }
  Tn(e, t && !r), At(e, 0), ce(e, St);
  var a = e.transitions;
  if (a !== null)
    for (const s of a)
      s.stop();
  Sn(e);
  var f = e.parent;
  f !== null && f.first !== null && Nn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function Nn(e) {
  var t = e.parent, r = e.prev, l = e.next;
  r !== null && (r.next = l), l !== null && (l.prev = r), t !== null && (t.first === e && (t.first = l), t.last === e && (t.last = r));
}
function Ht(e, t) {
  var r = [];
  Ln(e, r, !0), pl(r, () => {
    pe(e), t && t();
  });
}
function pl(e, t) {
  var r = e.length;
  if (r > 0) {
    var l = () => --r || t();
    for (var i of e)
      i.out(l);
  } else
    t();
}
function Ln(e, t, r) {
  if ((e.f & Ke) === 0) {
    if (e.f ^= Ke, e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || r) && t.push(a);
    for (var l = e.first; l !== null; ) {
      var i = l.next, o = (l.f & Jt) !== 0 || (l.f & be) !== 0;
      Ln(l, t, o ? r : !1), l = i;
    }
  }
}
function Gr(e) {
  Dn(e, !0);
}
function Dn(e, t) {
  if ((e.f & Ke) !== 0) {
    e.f ^= Ke, (e.f & K) === 0 && (e.f ^= K), gt(e) && (ce(e, ye), Lt(e));
    for (var r = e.first; r !== null; ) {
      var l = r.next, i = (r.f & Jt) !== 0 || (r.f & be) !== 0;
      Dn(r, i ? t : !1), r = l;
    }
    if (e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || t) && o.in();
  }
}
function Pn(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let B = null;
function Jr(e) {
  B = e;
}
function On(e, t = !1, r) {
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
function zn(e) {
  const t = B;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const a = t.e;
    if (a !== null) {
      var r = I, l = C;
      t.e = null;
      try {
        for (var i = 0; i < a.length; i++) {
          var o = a[i];
          Se(o.effect), Ie(o.reaction), tr(o.fn);
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
function Fn() {
  return !0;
}
const bl = ["touchstart", "touchmove"];
function yl(e) {
  return bl.includes(e);
}
let Kr = !1;
function Mn() {
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
function Un(e) {
  var t = C, r = I;
  Ie(null), Se(null);
  try {
    return e();
  } finally {
    Ie(t), Se(r);
  }
}
function El(e, t, r, l = r) {
  e.addEventListener(t, () => Un(r));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), l(!0);
  } : e.__on_r = () => l(!0), Mn();
}
const jn = /* @__PURE__ */ new Set(), Wt = /* @__PURE__ */ new Set();
function xl(e, t, r, l = {}) {
  function i(o) {
    if (l.capture || ut.call(t, o), !o.cancelBubble)
      return Un(() => r == null ? void 0 : r.call(this, o));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Kt(() => {
    t.addEventListener(e, i, l);
  }) : t.addEventListener(e, i, l), i;
}
function $l(e, t, r, l, i) {
  var o = { capture: l, passive: i }, a = xl(e, t, r, o);
  (t === document.body || t === window || t === document) && gl(() => {
    t.removeEventListener(e, a, o);
  });
}
function kl(e) {
  for (var t = 0; t < e.length; t++)
    jn.add(e[t]);
  for (var r of Wt)
    r(e);
}
function ut(e) {
  var F;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), l = e.type, i = ((F = e.composedPath) == null ? void 0 : F.call(e)) || [], o = (
    /** @type {null | Element} */
    i[0] || e.target
  ), a = 0, f = e.__root;
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
    s <= c && (a = s);
  }
  if (o = /** @type {Element} */
  i[a] || e.target, o !== t) {
    xt(e, "currentTarget", {
      configurable: !0,
      get() {
        return o || r;
      }
    });
    var v = C, h = I;
    Ie(null), Se(null);
    try {
      for (var g, m = []; o !== null; ) {
        var p = o.assignedSlot || o.parentNode || /** @type {any} */
        o.host || null;
        try {
          var N = o["__" + l];
          if (N != null && (!/** @type {any} */
          o.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === o))
            if (cn(N)) {
              var [O, ...q] = N;
              O.apply(o, [e, ...q]);
            } else
              N.call(o, e);
        } catch (M) {
          g ? m.push(M) : g = M;
        }
        if (e.cancelBubble || p === t || p === null)
          break;
        o = p;
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
    I
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function de(e, t) {
  var r = (t & Ci) !== 0, l = (t & Ai) !== 0, i, o = !e.startsWith("<!>");
  return () => {
    if (L)
      return Ae(P, null), P;
    i === void 0 && (i = ir(o ? e : "<!>" + e), r || (i = /** @type {Node} */
    /* @__PURE__ */ we(i)));
    var a = (
      /** @type {TemplateNode} */
      l || En ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ we(a)
      ), s = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      Ae(f, s);
    } else
      Ae(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function Cl(e, t, r = "svg") {
  var l = !e.startsWith("<!>"), i = `<${r}>${l ? e : "<!>" + e}</${r}>`, o;
  return () => {
    if (L)
      return Ae(P, null), P;
    if (!o) {
      var a = (
        /** @type {DocumentFragment} */
        ir(i)
      ), f = (
        /** @type {Element} */
        /* @__PURE__ */ we(a)
      );
      o = /** @type {Element} */
      /* @__PURE__ */ we(f);
    }
    var s = (
      /** @type {TemplateNode} */
      o.cloneNode(!0)
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
function Vn(e, t) {
  return Bn(e, t);
}
function Al(e, t) {
  Bt(), t.intro = t.intro ?? !1;
  const r = t.target, l = L, i = P;
  try {
    for (var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ we(r)
    ); o && (o.nodeType !== 8 || /** @type {Comment} */
    o.data !== Zt); )
      o = /** @type {TemplateNode} */
      /* @__PURE__ */ Te(o);
    if (!o)
      throw Je;
    Ge(!0), Re(
      /** @type {Comment} */
      o
    ), Xe();
    const a = Bn(e, { ...t, anchor: o });
    if (P === null || P.nodeType !== 8 || /** @type {Comment} */
    P.data !== an)
      throw Tt(), Je;
    return Ge(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === Je)
      return t.recover === !1 && qi(), Bt(), rl(r), Ge(!1), Vn(e, t);
    throw a;
  } finally {
    Ge(l), Re(i);
  }
}
const Ye = /* @__PURE__ */ new Map();
function Bn(e, { target: t, anchor: r, props: l = {}, events: i, context: o, intro: a = !0 }) {
  Bt();
  var f = /* @__PURE__ */ new Set(), s = (h) => {
    for (var g = 0; g < h.length; g++) {
      var m = h[g];
      if (!f.has(m)) {
        f.add(m);
        var p = yl(m);
        t.addEventListener(m, ut, { passive: p });
        var N = Ye.get(m);
        N === void 0 ? (document.addEventListener(m, ut, { passive: p }), Ye.set(m, 1)) : Ye.set(m, N + 1);
      }
    }
  };
  s(Li(jn)), Wt.add(s);
  var c = void 0, v = ml(() => {
    var h = r ?? t.appendChild(Xt());
    return Rt(() => {
      if (o) {
        On({});
        var g = (
          /** @type {ComponentContext} */
          B
        );
        g.c = o;
      }
      i && (l.$$events = i), L && Ae(
        /** @type {TemplateNode} */
        h,
        null
      ), c = e(h, l) || {}, L && (I.nodes_end = P), o && zn();
    }), () => {
      var p;
      for (var g of f) {
        t.removeEventListener(g, ut);
        var m = (
          /** @type {number} */
          Ye.get(g)
        );
        --m === 0 ? (document.removeEventListener(g, ut), Ye.delete(g)) : Ye.set(g, m);
      }
      Wt.delete(s), h !== r && ((p = h.parentNode) == null || p.removeChild(h));
    };
  });
  return Yt.set(c, v), c;
}
let Yt = /* @__PURE__ */ new WeakMap();
function Rl(e, t) {
  const r = Yt.get(e);
  return r ? (Yt.delete(e), r(t)) : Promise.resolve();
}
function ke(e, t, [r, l] = [0, 0]) {
  L && r === 0 && Xe();
  var i = e, o = null, a = null, f = Y, s = r > 0 ? Jt : 0, c = !1;
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
        O === Zt ? l = 0 : O === on ? l = 1 / 0 : (l = parseInt(O.substring(1)), l !== l && (l = f ? 1 / 0 : -1));
      }
      const N = l > r;
      !!f === N && (i = tl(), Re(i), Ge(!1), p = !0, l = -1);
    }
    f ? (o ? Gr(o) : m && (o = Rt(() => m(i))), a && Ht(a, () => {
      a = null;
    })) : (a ? Gr(a) : m && (a = Rt(() => m(i, [r + 1, l]))), o && Ht(o, () => {
      o = null;
    })), p && Ge(!0);
  };
  nr(() => {
    c = !1, t(v), c || h(null, null);
  }, s), L && (i = P);
}
function Ze(e, t, r, l, i) {
  var o = e, a = "", f;
  nr(() => {
    if (a === (a = t() ?? "")) {
      L && Xe();
      return;
    }
    f !== void 0 && (pe(f), f = void 0), a !== "" && (f = Rt(() => {
      if (L) {
        P.data;
        for (var s = Xe(), c = s; s !== null && (s.nodeType !== 8 || /** @type {Comment} */
        s.data !== ""); )
          c = s, s = /** @type {TemplateNode} */
          /* @__PURE__ */ Te(s);
        if (s === null)
          throw Tt(), Je;
        Ae(P, c), o = Re(s);
        return;
      }
      var v = a + "", h = ir(v);
      Ae(
        /** @type {TemplateNode} */
        /* @__PURE__ */ we(h),
        /** @type {TemplateNode} */
        h.lastChild
      ), o.before(h);
    }));
  });
}
function Il(e, t, r, l, i) {
  var f;
  L && Xe();
  var o = (f = t.$$slots) == null ? void 0 : f[r], a = !1;
  o === !0 && (o = t.children, a = !0), o === void 0 || o(e, a ? () => l : l);
}
function Sl(e, t) {
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
const Xr = [...` 	
\r\f \v\uFEFF`];
function Tl(e, t, r) {
  var l = "" + e;
  if (r) {
    for (var i in r)
      if (r[i])
        l = l ? l + " " + i : i;
      else if (l.length)
        for (var o = i.length, a = 0; (a = l.indexOf(i, a)) >= 0; ) {
          var f = a + o;
          (a === 0 || Xr.includes(l[a - 1])) && (f === l.length || Xr.includes(l[f])) ? l = (a === 0 ? "" : l.substring(0, a)) + l.substring(f + 1) : a = f;
        }
  }
  return l === "" ? null : l;
}
function Nl(e, t, r, l, i, o) {
  var a = e.__className;
  if (L || a !== r) {
    var f = Tl(r, l, o);
    (!L || f !== e.getAttribute("class")) && (f == null ? e.removeAttribute("class") : e.className = f), e.__className = r;
  } else if (o && i !== o)
    for (var s in o) {
      var c = !!o[s];
      (i == null || c !== !!i[s]) && e.classList.toggle(s, c);
    }
  return o;
}
const Ll = Symbol("is custom element"), Dl = Symbol("is html");
function Qr(e) {
  if (L) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var l = e.value;
          ie(e, "value", null), e.value = l;
        }
        if (e.hasAttribute("checked")) {
          var i = e.checked;
          ie(e, "checked", null), e.checked = i;
        }
      }
    };
    e.__on_r = r, Fi(r), Mn();
  }
}
function Pl(e, t) {
  var r = qn(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function ie(e, t, r, l) {
  var i = qn(e);
  L && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || i[t] !== (i[t] = r) && (t === "loading" && (e[Ti] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Ol(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function qn(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Ll]: e.nodeName.includes("-"),
      [Dl]: e.namespaceURI === Ri
    })
  );
}
var en = /* @__PURE__ */ new Map();
function Ol(e) {
  var t = en.get(e.nodeName);
  if (t) return t;
  en.set(e.nodeName, t = []);
  for (var r, l = e, i = Element.prototype; i !== l; ) {
    r = Di(l);
    for (var o in r)
      r[o].set && t.push(o);
    l = dn(l);
  }
  return t;
}
function zl(e, t, r = t) {
  El(e, "change", (l) => {
    var i = l ? e.defaultChecked : e.checked;
    r(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (L && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  Qe(t) == null) && r(e.checked), rr(() => {
    var l = t();
    e.checked = !!l;
  });
}
function tn(e, t) {
  return e === t || (e == null ? void 0 : e[ct]) === t;
}
function rn(e = {}, t, r, l) {
  return tr(() => {
    var i, o;
    return rr(() => {
      i = o, o = [], Qe(() => {
        e !== r(...o) && (t(e, ...o), i && tn(r(...i), e) && t(null, ...i));
      });
    }), () => {
      Kt(() => {
        o && tn(r(...o), e) && t(null, ...o);
      });
    };
  }), e;
}
function Hn(e) {
  B === null && Pn(), qt(() => {
    const t = Qe(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Fl(e) {
  B === null && Pn(), Hn(() => () => Qe(e));
}
let mt = !1;
function Ml(e) {
  var t = mt;
  try {
    return mt = !1, [e(), mt];
  } finally {
    mt = t;
  }
}
function R(e, t, r, l) {
  var Ne;
  var i = (r & Ei) !== 0, o = !0, a = (r & $i) !== 0, f = (r & ki) !== 0, s = !1, c;
  a ? [c, s] = Ml(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var v = ct in e || un in e, h = a && (((Ne = Oe(e, t)) == null ? void 0 : Ne.set) ?? (v && t in e && ((z) => e[t] = z))) || void 0, g = (
    /** @type {V} */
    l
  ), m = !0, p = !1, N = () => (p = !0, m && (m = !1, f ? g = Qe(
    /** @type {() => V} */
    l
  ) : g = /** @type {V} */
  l), g);
  c === void 0 && l !== void 0 && (h && o && Hi(), c = N(), h && h(c));
  var O;
  if (O = () => {
    var z = (
      /** @type {V} */
      e[t]
    );
    return z === void 0 ? N() : (m = !0, p = !1, z);
  }, (r & xi) === 0)
    return O;
  if (h) {
    var q = e.$$legacy;
    return function(z, U) {
      return arguments.length > 0 ? ((!U || q || s) && h(U ? O() : z), z) : O();
    };
  }
  var F = !1, M = /* @__PURE__ */ wn(c), H = /* @__PURE__ */ Pe(() => {
    var z = O(), U = d(M);
    return F ? (F = !1, U) : M.v = z;
  });
  return i || (H.equals = mn), function(z, U) {
    if (arguments.length > 0) {
      const ve = U ? d(H) : a ? le(z) : z;
      return H.equals(ve) || (F = !0, D(M, ve), p && g !== void 0 && (g = ve), Qe(() => d(H))), z;
    }
    return d(H);
  };
}
function Ul(e) {
  return new jl(e);
}
var me, te;
class jl {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    jt(this, me);
    /** @type {Record<string, any>} */
    jt(this, te);
    var o;
    var r = /* @__PURE__ */ new Map(), l = (a, f) => {
      var s = /* @__PURE__ */ wn(f);
      return r.set(a, s), s;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, f) {
          return d(r.get(f) ?? l(f, Reflect.get(a, f)));
        },
        has(a, f) {
          return f === un ? !0 : (d(r.get(f) ?? l(f, Reflect.get(a, f))), Reflect.has(a, f));
        },
        set(a, f, s) {
          return D(r.get(f) ?? l(f, s), s), Reflect.set(a, f, s);
        }
      }
    );
    Vt(this, te, (t.hydrate ? Al : Vn)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((o = t == null ? void 0 : t.props) != null && o.$$host) || t.sync === !1) && k(), Vt(this, me, i.$$events);
    for (const a of Object.keys(W(this, te)))
      a === "$set" || a === "$destroy" || a === "$on" || xt(this, a, {
        get() {
          return W(this, te)[a];
        },
        /** @param {any} value */
        set(f) {
          W(this, te)[a] = f;
        },
        enumerable: !0
      });
    W(this, te).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, W(this, te).$destroy = () => {
      Rl(W(this, te));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    W(this, te).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    W(this, me)[t] = W(this, me)[t] || [];
    const l = (...i) => r.call(this, ...i);
    return W(this, me)[t].push(l), () => {
      W(this, me)[t] = W(this, me)[t].filter(
        /** @param {any} fn */
        (i) => i !== l
      );
    };
  }
  $destroy() {
    W(this, te).$destroy();
  }
}
me = new WeakMap(), te = new WeakMap();
let Wn;
typeof HTMLElement == "function" && (Wn = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, l) {
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
        return (o) => {
          const a = document.createElement("slot");
          i !== "default" && (a.name = i), ee(o, a);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, l = Vl(this);
      for (const i of this.$$s)
        i in l && (i === "default" && !this.$$d.children ? (this.$$d.children = t(i), r.default = !0) : r[i] = t(i));
      for (const i of this.attributes) {
        const o = this.$$g_p(i.name);
        o in this.$$d || (this.$$d[o] = pt(o, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = Ul({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = _l(() => {
        rr(() => {
          var i;
          this.$$r = !0;
          for (const o of Et(this.$$c)) {
            if (!((i = this.$$p_d[o]) != null && i.reflect)) continue;
            this.$$d[o] = this.$$c[o];
            const a = pt(
              o,
              this.$$d[o],
              this.$$p_d,
              "toAttribute"
            );
            a == null ? this.removeAttribute(this.$$p_d[o].attribute || o) : this.setAttribute(this.$$p_d[o].attribute || o, a);
          }
          this.$$r = !1;
        });
      });
      for (const i in this.$$l)
        for (const o of this.$$l[i]) {
          const a = this.$$c.$on(i, o);
          this.$$l_u.set(o, a);
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = pt(t, l, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
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
function pt(e, t, r, l) {
  var o;
  const i = (o = r[e]) == null ? void 0 : o.type;
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
function Vl(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function Bl(e, t, r, l, i, o) {
  let a = class extends Wn {
    constructor() {
      super(e, r, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Et(t).map(
        (f) => (t[f].attribute || f).toLowerCase()
      );
    }
  };
  return Et(t).forEach((f) => {
    xt(a.prototype, f, {
      get() {
        return this.$$c && f in this.$$c ? this.$$c[f] : this.$$d[f];
      },
      set(s) {
        var h;
        s = pt(f, s, t), this.$$d[f] = s;
        var c = this.$$c;
        if (c) {
          var v = (h = Oe(c, f)) == null ? void 0 : h.get;
          v ? c[f] = s : c.$set({ [f]: s });
        }
      }
    });
  }), l.forEach((f) => {
    xt(a.prototype, f, {
      get() {
        var s;
        return (s = this.$$c) == null ? void 0 : s[f];
      }
    });
  }), e.element = /** @type {any} */
  a, a;
}
const Yn = new TextEncoder();
function ql(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function Hl(e, t = "SHA-256", r = 1e5) {
  const l = Date.now().toString(16);
  e || (e = Math.round(Math.random() * r));
  const i = await Zn(l, e, t);
  return {
    algorithm: t,
    challenge: i,
    salt: l,
    signature: ""
  };
}
async function Zn(e, t, r) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return ql(
    await crypto.subtle.digest(
      r.toUpperCase(),
      Yn.encode(e + t)
    )
  );
}
function Wl(e, t, r = "SHA-256", l = 1e6, i = 0) {
  const o = new AbortController(), a = Date.now();
  return {
    promise: (async () => {
      for (let s = i; s <= l; s += 1) {
        if (o.signal.aborted)
          return null;
        if (await Zn(t, s, r) === e)
          return {
            number: s,
            took: Date.now() - a
          };
      }
      return null;
    })(),
    controller: o
  };
}
function Yl() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function Zl(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let l = 0; l < t.length; l++)
    r[l] = t.charCodeAt(l);
  return r;
}
function Gl(e, t = 12) {
  const r = new Uint8Array(t);
  for (let l = 0; l < t; l++)
    r[l] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function Jl(e, t = "", r = 1e6, l = 0) {
  const i = "AES-GCM", o = new AbortController(), a = Date.now(), f = async () => {
    for (let v = l; v <= r; v += 1) {
      if (o.signal.aborted || !s || !c)
        return null;
      try {
        const h = await crypto.subtle.decrypt(
          {
            name: i,
            iv: Gl(v)
          },
          s,
          c
        );
        if (h)
          return {
            clearText: new TextDecoder().decode(h),
            took: Date.now() - a
          };
      } catch {
      }
    }
    return null;
  };
  let s = null, c = null;
  try {
    c = Zl(e);
    const v = await crypto.subtle.digest(
      "SHA-256",
      Yn.encode(t)
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
      controller: o
    };
  }
  return {
    promise: f(),
    controller: o
  };
}
var y = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(y || {}), Kl = /* @__PURE__ */ Cl('<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="svelte-ddsc3z"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25" class="svelte-ddsc3z"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor" class="altcha-spinner svelte-ddsc3z"></path></svg>'), Xl = /* @__PURE__ */ de('<span role="status" aria-live="polite" class="svelte-ddsc3z"><!></span> <input type="hidden" class="svelte-ddsc3z">', 1), Ql = /* @__PURE__ */ de('<span role="status" aria-live="polite" class="svelte-ddsc3z"><!></span>'), eo = /* @__PURE__ */ de('<label class="svelte-ddsc3z"><!></label>'), to = /* @__PURE__ */ de('<div class="svelte-ddsc3z"><a target="_blank" class="altcha-logo svelte-ddsc3z"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-ddsc3z"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor" class="svelte-ddsc3z"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor" class="svelte-ddsc3z"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor" class="svelte-ddsc3z"></path></svg></a></div>'), ro = /* @__PURE__ */ de('<div class="svelte-ddsc3z"><!></div>'), no = /* @__PURE__ */ de('<div class="svelte-ddsc3z"><!></div>'), io = /* @__PURE__ */ de('<div class="altcha-error svelte-ddsc3z"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="svelte-ddsc3z"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" class="svelte-ddsc3z"></path></svg> <!></div>'), lo = /* @__PURE__ */ de('<div class="altcha-footer svelte-ddsc3z"><div class="svelte-ddsc3z"><!></div></div>'), oo = /* @__PURE__ */ de('<div class="altcha-anchor-arrow svelte-ddsc3z"></div>'), ao = /* @__PURE__ */ de('<!> <div class="altcha svelte-ddsc3z"><div class="altcha-main svelte-ddsc3z"><!> <div><input type="checkbox" class="svelte-ddsc3z"></div> <div class="altcha-label svelte-ddsc3z"><!></div> <!></div> <!> <!> <!></div>', 1);
const so = {
  hash: "svelte-ddsc3z",
  code: `.altcha.svelte-ddsc3z {background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);position:relative;text-align:left;}.altcha.svelte-ddsc3z:focus-within {border-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating].svelte-ddsc3z {background:var(--altcha-color-base, white);display:none;filter:drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2));left:-100%;position:fixed;top:-100%;width:var(--altcha-max-width, 260px);z-index:999999;}.altcha[data-floating=top].svelte-ddsc3z .altcha-anchor-arrow:where(.svelte-ddsc3z) {border-bottom-color:transparent;border-top-color:var(--altcha-color-border, #a0a0a0);bottom:-12px;top:auto;}.altcha[data-floating=bottom].svelte-ddsc3z:focus-within::after {border-bottom-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating=top].svelte-ddsc3z:focus-within::after {border-top-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating].svelte-ddsc3z:not([data-state=unverified]) {display:block;}.altcha-anchor-arrow.svelte-ddsc3z {border:6px solid transparent;border-bottom-color:var(--altcha-color-border, #a0a0a0);content:"";height:0;left:12px;position:absolute;top:-12px;width:0;}.altcha-main.svelte-ddsc3z {align-items:center;display:flex;gap:0.4rem;padding:0.7rem;}.altcha-label.svelte-ddsc3z {flex-grow:1;}.altcha-label.svelte-ddsc3z label:where(.svelte-ddsc3z) {cursor:pointer;}.altcha-logo.svelte-ddsc3z {color:currentColor;opacity:0.3;}.altcha-logo.svelte-ddsc3z:hover {opacity:1;}.altcha-error.svelte-ddsc3z {color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem;}.altcha-footer.svelte-ddsc3z {align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.4;padding:0.2rem 0.7rem;text-align:right;}.altcha-footer.svelte-ddsc3z:hover {opacity:1;}.altcha-footer.svelte-ddsc3z > :where(.svelte-ddsc3z):first-child {flex-grow:1;}.altcha-footer.svelte-ddsc3z a {color:currentColor;}.altcha-checkbox.svelte-ddsc3z {display:flex;align-items:center;height:24px;width:24px;}.altcha-checkbox.svelte-ddsc3z input:where(.svelte-ddsc3z) {width:18px;height:18px;margin:0;}.altcha-hidden.svelte-ddsc3z {display:none;}.altcha-spinner.svelte-ddsc3z {
  animation: svelte-ddsc3z-altcha-spinner 0.75s infinite linear;transform-origin:center;}

@keyframes svelte-ddsc3z-altcha-spinner {
  100% {
    transform: rotate(360deg);
  }
}`
};
function fo(e, t) {
  var zr, Fr;
  On(t, !0), Sl(e, so);
  let r = R(t, "auto", 7, void 0), l = R(t, "blockspam", 7, void 0), i = R(t, "challengeurl", 7, void 0), o = R(t, "challengejson", 7, void 0), a = R(t, "customfetch", 7, void 0), f = R(t, "debug", 7, !1), s = R(t, "delay", 7, 0), c = R(t, "expire", 7, void 0), v = R(t, "floating", 7, void 0), h = R(t, "floatinganchor", 7, void 0), g = R(t, "floatingoffset", 7, void 0), m = R(t, "floatingpersist", 7, !1), p = R(t, "hidefooter", 7, !1), N = R(t, "hidelogo", 7, !1), O = R(t, "id", 7, void 0), q = R(t, "name", 7, "altcha"), F = R(t, "maxnumber", 7, 1e6), M = R(t, "mockerror", 7, !1), H = R(t, "obfuscated", 7, void 0), Ne = R(t, "plugins", 7, void 0), z = R(t, "refetchonexpire", 7, !0), U = R(t, "spamfilter", 7, !1), ve = R(t, "strings", 7, void 0), X = R(t, "test", 7, !1), Ee = R(t, "verifyurl", 7, void 0), Ue = R(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), tt = R(t, "workerurl", 7, void 0);
  const lr = ["SHA-256", "SHA-384", "SHA-512"], or = "Visit Altcha.org", ar = "https://altcha.org/", rt = (n, u) => {
    t.$$host.dispatchEvent(new CustomEvent(n, { detail: u }));
  }, sr = (Fr = (zr = document.documentElement.lang) == null ? void 0 : zr.split("-")) == null ? void 0 : Fr[0], Dt = /* @__PURE__ */ Pe(() => {
    var n;
    return i() && new URL(i(), location.origin).host.endsWith(".altcha.org") && !!((n = i()) != null && n.includes("apiKey=ckey_"));
  }), Pt = /* @__PURE__ */ Pe(() => o() ? yr(o()) : void 0), fr = /* @__PURE__ */ Pe(() => ve() ? yr(ve()) : {}), Q = /* @__PURE__ */ Pe(() => {
    var n;
    return {
      ariaLinkLabel: or,
      error: "Verification failed. Try again later.",
      expired: "Verification expired. Try again.",
      footer: `Protected by <a href="${ar}" target="_blank" aria-label="${((n = d(fr)) == null ? void 0 : n.ariaLinkLabel) || or}">ALTCHA</a>`,
      label: "I'm not a robot",
      verified: "Verified",
      verifying: "Verifying...",
      waitAlert: "Verifying... please wait.",
      ...d(fr)
    };
  }), ur = /* @__PURE__ */ Pe(() => `${O() || q()}_checkbox`);
  let je = He(!1), A = He(le(y.UNVERIFIED)), j = He(void 0), nt = He(null), Ve = null, w = null, Be = He(null), se = null, xe = [], Le = He(null);
  qt(() => {
    ri(d(Be));
  }), qt(() => {
    ni(d(A));
  }), Fl(() => {
    Gn(), w && (w.removeEventListener("submit", mr), w.removeEventListener("reset", wr), w.removeEventListener("focusin", _r), w = null), se && (clearTimeout(se), se = null), document.removeEventListener("click", hr), document.removeEventListener("scroll", gr), window.removeEventListener("resize", br);
  }), Hn(() => {
    var n;
    S("mounted", "1.4.4"), S("workers", Ue()), ei(), S("plugins", xe.length ? xe.map((u) => u.constructor.pluginName).join(", ") : "none"), X() && S("using test mode"), c() && Ot(c()), r() !== void 0 && S("auto", r()), v() !== void 0 && Er(v()), w = (n = d(j)) == null ? void 0 : n.closest("form"), w && (w.addEventListener("submit", mr, { capture: !0 }), w.addEventListener("reset", wr), (r() === "onfocus" || m() === "focus") && w.addEventListener("focusin", _r)), r() === "onload" && (H() ? it() : $e()), d(Dt) && (p() || N()) && S("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      rt("load");
    });
  });
  function cr(n, u) {
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
  function Gn() {
    for (const n of xe)
      n.destroy();
  }
  function dr() {
    i() && z() && d(A) === y.VERIFIED ? $e() : ot(y.EXPIRED, d(Q).expired);
  }
  async function Jn() {
    var n;
    if (M())
      throw S("mocking error"), new Error("Mocked error.");
    if (d(Pt))
      return S("using provided json data"), d(Pt);
    if (X())
      return S("generating test challenge", { test: X() }), Hl(typeof X() != "boolean" ? +X() : void 0);
    {
      if (!i() && w) {
        const $ = w.getAttribute("action");
        $ != null && $.includes("/form/") && i($ + "/altcha");
      }
      if (!i())
        throw new Error("Attribute challengeurl not set.");
      S("fetching challenge from", i());
      const u = {
        headers: U() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      }, _ = await vr()(i(), u);
      if (!_ || !(_ instanceof Response))
        throw new Error("Fetch function did not return a response.");
      if (_.status !== 200)
        throw new Error(`Server responded with ${_.status}.`);
      const E = _.headers.get("X-Altcha-Config"), T = await _.json(), x = new URLSearchParams((n = T.salt.split("?")) == null ? void 0 : n[1]), b = x.get("expires") || x.get("expire");
      if (b) {
        const $ = new Date(+b * 1e3), he = isNaN($.getTime()) ? 0 : $.getTime() - Date.now();
        he > 0 && Ot(he);
      }
      if (E)
        try {
          const $ = JSON.parse(E);
          $ && typeof $ == "object" && ("sentinel" in $ ? alert("This version of the widget is not compatible with Sentinel. Upgrade to version 2.x.x.") : ($.verifyurl && ($.verifyurl = new URL($.verifyurl, new URL(i())).toString()), kr($)));
        } catch ($) {
          S("unable to configure from X-Altcha-Config", $);
        }
      return T;
    }
  }
  function Kn(n) {
    var _;
    const u = w == null ? void 0 : w.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((_ = u == null ? void 0 : u.value) == null ? void 0 : _.slice(u.value.indexOf("@"))) || void 0;
  }
  function vr() {
    let n = fetch;
    if (a())
      if (S("using customfetch"), typeof a() == "string") {
        if (n = globalThis[a()] || null, !n)
          throw new Error(`Custom fetch function not found: ${a()}`);
      } else
        n = a();
    return n;
  }
  function Xn() {
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
        el: d(j),
        clarify: it,
        dispatch: rt,
        getConfiguration: Cr,
        getFloatingAnchor: Ar,
        getState: Rr,
        log: S,
        reset: ot,
        solve: $r,
        setState: De,
        setFloatingAnchor: Sr,
        verify: $e
      }));
  }
  function S(...n) {
    (f() || n.some((u) => u instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${q()}]`, ...n);
  }
  function ti() {
    [y.UNVERIFIED, y.ERROR, y.EXPIRED].includes(d(A)) ? U() !== !1 && (w == null ? void 0 : w.reportValidity()) === !1 ? D(je, !1) : H() ? it() : $e() : D(je, !0);
  }
  function hr(n) {
    const u = n.target;
    v() && u && !d(j).contains(u) && (d(A) === y.VERIFIED && m() === !1 || d(A) === y.VERIFIED && m() === "focus" && !(w != null && w.matches(":focus-within")) || r() === "off" && d(A) === y.UNVERIFIED) && Ir();
  }
  function gr() {
    v() && d(A) !== y.UNVERIFIED && lt();
  }
  function ri(n) {
    for (const u of xe)
      typeof u.onErrorChange == "function" && u.onErrorChange(d(Be));
  }
  function _r(n) {
    d(A) === y.UNVERIFIED ? $e() : v() && m() === "focus" && d(A) === y.VERIFIED && zt();
  }
  function mr(n) {
    w && r() === "onsubmit" ? d(A) === y.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), $e().then(() => {
      w == null || w.requestSubmit();
    })) : d(A) !== y.VERIFIED && (n.preventDefault(), n.stopPropagation(), d(A) === y.VERIFYING && pr()) : w && v() && r() === "off" && d(A) === y.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), zt());
  }
  function wr() {
    ot();
  }
  function pr() {
    d(A) === y.VERIFYING && d(Q).waitAlert && alert(d(Q).waitAlert);
  }
  function ni(n) {
    for (const u of xe)
      typeof u.onStateChange == "function" && u.onStateChange(d(A));
    v() && d(A) !== y.UNVERIFIED && requestAnimationFrame(() => {
      lt();
    }), D(je, d(A) === y.VERIFIED);
  }
  function br() {
    v() && lt();
  }
  function yr(n) {
    return JSON.parse(n);
  }
  async function ii(n) {
    if (!Ee())
      throw new Error("Attribute verifyurl not set.");
    S("requesting server verification from", Ee());
    const u = { payload: n };
    if (U() !== !1) {
      const {
        blockedCountries: T,
        classifier: x,
        disableRules: b,
        email: $,
        expectedLanguages: he,
        expectedCountries: Ut,
        fields: st,
        ipAddress: ft,
        text: mi,
        timeZone: Mr
      } = Xn();
      u.blockedCountries = T, u.classifier = x, u.disableRules = b, u.email = $ === !1 ? void 0 : Kn($), u.expectedCountries = Ut, u.expectedLanguages = he || (sr ? [sr] : void 0), u.fields = st === !1 ? void 0 : Qn(st), u.ipAddress = ft === !1 ? void 0 : ft || "auto", u.text = mi, u.timeZone = Mr === !1 ? void 0 : Mr || Yl();
    }
    const _ = await vr()(Ee(), {
      body: JSON.stringify(u),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (!_ || !(_ instanceof Response))
      throw new Error("Fetch function did not return a response.");
    if (_.status !== 200)
      throw new Error(`Server responded with ${_.status}.`);
    const E = await _.json();
    if (E != null && E.payload && D(Le, le(E.payload)), rt("serververification", E), l() && E.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  function Ot(n) {
    S("expire", n), se && (clearTimeout(se), se = null), n < 1 ? dr() : se = setTimeout(dr, n);
  }
  function Er(n) {
    S("floating", n), v() !== n && (d(j).style.left = "", d(j).style.top = ""), v(n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : v()), v() ? (r() || r("onsubmit"), document.addEventListener("scroll", gr), document.addEventListener("click", hr), window.addEventListener("resize", br)) : r() === "onsubmit" && r(void 0);
  }
  function xr(n) {
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
  async function $r(n) {
    let u = null;
    if ("Worker" in window) {
      try {
        u = await li(n, n.maxNumber || n.maxnumber || F());
      } catch (_) {
        S(_);
      }
      if ((u == null ? void 0 : u.number) !== void 0 || "obfuscated" in n)
        return { data: n, solution: u };
    }
    if ("obfuscated" in n) {
      const _ = await Jl(n.obfuscated, n.key, n.maxNumber || n.maxnumber);
      return { data: n, solution: await _.promise };
    }
    return {
      data: n,
      solution: await Wl(n.challenge, n.salt, n.algorithm, n.maxNumber || n.maxnumber || F()).promise
    };
  }
  async function li(n, u = typeof X() == "number" ? X() : n.maxNumber || n.maxnumber || F(), _ = Math.ceil(Ue())) {
    const E = [];
    _ = Math.min(16, u, Math.max(1, _));
    for (let b = 0; b < _; b++)
      E.push(altchaCreateWorker(tt()));
    const T = Math.ceil(u / _), x = await Promise.all(E.map((b, $) => {
      const he = $ * T;
      return new Promise((Ut) => {
        b.addEventListener("message", (st) => {
          if (st.data)
            for (const ft of E)
              ft !== b && ft.postMessage({ type: "abort" });
          Ut(st.data);
        }), b.postMessage({
          payload: n,
          max: he + T,
          start: he,
          type: "work"
        });
      });
    }));
    for (const b of E)
      b.terminate();
    return x.find((b) => !!b) || null;
  }
  async function it() {
    if (!H()) {
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
  function kr(n) {
    n.obfuscated !== void 0 && H(n.obfuscated), n.auto !== void 0 && (r(n.auto), r() === "onload" && (H() ? it() : $e())), n.blockspam !== void 0 && l(!!n.blockspam), n.customfetch !== void 0 && a(n.customfetch), n.floatinganchor !== void 0 && h(n.floatinganchor), n.delay !== void 0 && s(n.delay), n.floatingoffset !== void 0 && g(n.floatingoffset), n.floating !== void 0 && Er(n.floating), n.expire !== void 0 && (Ot(n.expire), c(n.expire)), n.challenge && (o(typeof n.challenge == "string" ? n.challenge : JSON.stringify(n.challenge)), xr(d(Pt))), n.challengeurl !== void 0 && i(n.challengeurl), n.debug !== void 0 && f(!!n.debug), n.hidefooter !== void 0 && p(!!n.hidefooter), n.hidelogo !== void 0 && N(!!n.hidelogo), n.maxnumber !== void 0 && F(+n.maxnumber), n.mockerror !== void 0 && M(!!n.mockerror), n.name !== void 0 && q(n.name), n.refetchonexpire !== void 0 && z(!!n.refetchonexpire), n.spamfilter !== void 0 && U(typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && ve(typeof n.strings == "string" ? n.strings : JSON.stringify(n.strings)), n.test !== void 0 && X(typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && Ee(n.verifyurl), n.workers !== void 0 && Ue(+n.workers), n.workerurl !== void 0 && tt(n.workerurl);
  }
  function Cr() {
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
      hidelogo: N(),
      name: q(),
      maxnumber: F(),
      mockerror: M(),
      obfuscated: H(),
      refetchonexpire: z(),
      spamfilter: U(),
      strings: d(Q),
      test: X(),
      verifyurl: Ee(),
      workers: Ue(),
      workerurl: tt()
    };
  }
  function Ar() {
    return Ve;
  }
  function oi(n) {
    return xe.find((u) => u.constructor.pluginName === n);
  }
  function Rr() {
    return d(A);
  }
  function Ir() {
    d(j).style.display = "none";
  }
  function lt(n = 20) {
    if (d(j))
      if (Ve || (Ve = (h() ? document.querySelector(h()) : w == null ? void 0 : w.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || w), Ve) {
        const u = parseInt(g(), 10) || 12, _ = Ve.getBoundingClientRect(), E = d(j).getBoundingClientRect(), T = document.documentElement.clientHeight, x = document.documentElement.clientWidth, b = v() === "auto" ? _.bottom + E.height + u + n > T : v() === "top", $ = Math.max(n, Math.min(x - n - E.width, _.left + _.width / 2 - E.width / 2));
        if (b ? d(j).style.top = `${_.top - (E.height + u)}px` : d(j).style.top = `${_.bottom + u}px`, d(j).style.left = `${$}px`, d(j).setAttribute("data-floating", b ? "top" : "bottom"), d(nt)) {
          const he = d(nt).getBoundingClientRect();
          d(nt).style.left = _.left - $ + _.width / 2 - he.width / 2 + "px";
        }
      } else
        S("unable to find floating anchor element");
  }
  function ot(n = y.UNVERIFIED, u = null) {
    se && (clearTimeout(se), se = null), D(je, !1), D(Le, null), De(n, u);
  }
  function Sr(n) {
    Ve = n;
  }
  function De(n, u = null) {
    D(A, le(n)), D(Be, le(u)), rt("statechange", {
      payload: d(Le),
      state: d(A)
    });
  }
  function zt() {
    d(j).style.display = "block", v() && lt();
  }
  async function $e() {
    return ot(y.VERIFYING), await new Promise((n) => setTimeout(n, s() || 0)), Jn().then((n) => (xr(n), S("challenge", n), $r(n))).then(({ data: n, solution: u }) => {
      if (S("solution", u), !u || n && "challenge" in n && !("clearText" in u))
        if ((u == null ? void 0 : u.number) !== void 0 && "challenge" in n) {
          if (Ee())
            return ii(cr(n, u));
          D(Le, le(cr(n, u))), S("payload", d(Le));
        } else
          throw S("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      De(y.VERIFIED), S("verified"), cl().then(() => {
        rt("verified", { payload: d(Le) });
      });
    }).catch((n) => {
      S(n), De(y.ERROR, n.message);
    });
  }
  var Tr = ao(), Nr = Yr(Tr);
  Il(Nr, t, "default", {});
  var at = ge(Nr, 2), Ft = G(at), Lr = G(Ft);
  {
    var ai = (n) => {
      var u = Kl();
      ee(n, u);
    };
    ke(Lr, (n) => {
      d(A) === y.VERIFYING && n(ai);
    });
  }
  var _t = ge(Lr, 2);
  let Dr;
  var qe = G(_t);
  Qr(qe), qe.__change = ti, Z(_t);
  var Mt = ge(_t, 2), si = G(Mt);
  {
    var fi = (n) => {
      var u = Xl(), _ = Yr(u), E = G(_);
      Ze(E, () => d(Q).verified), Z(_);
      var T = ge(_, 2);
      Qr(T), We(() => {
        ie(T, "name", q()), Pl(T, d(Le));
      }), ee(n, u);
    }, ui = (n, u) => {
      {
        var _ = (T) => {
          var x = Ql(), b = G(x);
          Ze(b, () => d(Q).verifying), Z(x), ee(T, x);
        }, E = (T) => {
          var x = eo(), b = G(x);
          Ze(b, () => d(Q).label), Z(x), We(() => ie(x, "for", d(ur))), ee(T, x);
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
    ke(si, (n) => {
      d(A) === y.VERIFIED ? n(fi) : n(ui, !1);
    });
  }
  Z(Mt);
  var ci = ge(Mt, 2);
  {
    var di = (n) => {
      var u = to(), _ = G(u);
      ie(_, "href", ar), Z(u), We(() => ie(_, "aria-label", d(Q).ariaLinkLabel)), ee(n, u);
    };
    ke(ci, (n) => {
      (N() !== !0 || d(Dt)) && n(di);
    });
  }
  Z(Ft);
  var Pr = ge(Ft, 2);
  {
    var vi = (n) => {
      var u = io(), _ = ge(G(u), 2);
      {
        var E = (x) => {
          var b = ro(), $ = G(b);
          Ze($, () => d(Q).expired), Z(b), We(() => ie(b, "title", d(Be))), ee(x, b);
        }, T = (x) => {
          var b = no(), $ = G(b);
          Ze($, () => d(Q).error), Z(b), We(() => ie(b, "title", d(Be))), ee(x, b);
        };
        ke(_, (x) => {
          d(A) === y.EXPIRED ? x(E) : x(T, !1);
        });
      }
      Z(u), ee(n, u);
    };
    ke(Pr, (n) => {
      (d(Be) || d(A) === y.EXPIRED) && n(vi);
    });
  }
  var Or = ge(Pr, 2);
  {
    var hi = (n) => {
      var u = lo(), _ = G(u), E = G(_);
      Ze(E, () => d(Q).footer), Z(_), Z(u), ee(n, u);
    };
    ke(Or, (n) => {
      d(Q).footer && (p() !== !0 || d(Dt)) && n(hi);
    });
  }
  var gi = ge(Or, 2);
  {
    var _i = (n) => {
      var u = oo();
      rn(u, (_) => D(nt, _), () => d(nt)), ee(n, u);
    };
    ke(gi, (n) => {
      v() && n(_i);
    });
  }
  return Z(at), rn(at, (n) => D(j, n), () => d(j)), We(
    (n) => {
      ie(at, "data-state", d(A)), ie(at, "data-floating", v()), Dr = Nl(_t, 1, "altcha-checkbox svelte-ddsc3z", null, Dr, n), ie(qe, "id", d(ur)), qe.required = r() !== "onsubmit" && (!v() || r() !== "off");
    },
    [
      () => ({
        "altcha-hidden": d(A) === y.VERIFYING
      })
    ]
  ), $l("invalid", qe, pr), zl(qe, () => d(je), (n) => D(je, n)), ee(e, Tr), zn({
    clarify: it,
    configure: kr,
    getConfiguration: Cr,
    getFloatingAnchor: Ar,
    getPlugin: oi,
    getState: Rr,
    hide: Ir,
    repositionFloating: lt,
    reset: ot,
    setFloatingAnchor: Sr,
    setState: De,
    show: zt,
    verify: $e,
    get auto() {
      return r();
    },
    set auto(n = void 0) {
      r(n), k();
    },
    get blockspam() {
      return l();
    },
    set blockspam(n = void 0) {
      l(n), k();
    },
    get challengeurl() {
      return i();
    },
    set challengeurl(n = void 0) {
      i(n), k();
    },
    get challengejson() {
      return o();
    },
    set challengejson(n = void 0) {
      o(n), k();
    },
    get customfetch() {
      return a();
    },
    set customfetch(n = void 0) {
      a(n), k();
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
      return v();
    },
    set floating(n = void 0) {
      v(n), k();
    },
    get floatinganchor() {
      return h();
    },
    set floatinganchor(n = void 0) {
      h(n), k();
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
      return q();
    },
    set name(n = "altcha") {
      q(n), k();
    },
    get maxnumber() {
      return F();
    },
    set maxnumber(n = 1e6) {
      F(n), k();
    },
    get mockerror() {
      return M();
    },
    set mockerror(n = !1) {
      M(n), k();
    },
    get obfuscated() {
      return H();
    },
    set obfuscated(n = void 0) {
      H(n), k();
    },
    get plugins() {
      return Ne();
    },
    set plugins(n = void 0) {
      Ne(n), k();
    },
    get refetchonexpire() {
      return z();
    },
    set refetchonexpire(n = !0) {
      z(n), k();
    },
    get spamfilter() {
      return U();
    },
    set spamfilter(n = !1) {
      U(n), k();
    },
    get strings() {
      return ve();
    },
    set strings(n = void 0) {
      ve(n), k();
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
      return Ue();
    },
    set workers(n = Math.min(16, navigator.hardwareConcurrency || 8)) {
      Ue(n), k();
    },
    get workerurl() {
      return tt();
    },
    set workerurl(n = void 0) {
      tt(n), k();
    }
  });
}
kl(["change"]);
customElements.define("altcha-widget", Bl(
  fo,
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
globalThis.altchaCreateWorker = (e) => e ? new Worker(new URL(e)) : new bi();
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
export {
  fo as Altcha
};
