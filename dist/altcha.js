var mi = Object.defineProperty;
var jr = (e) => {
  throw TypeError(e);
};
var wi = (e, t, r) => t in e ? mi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var re = (e, t, r) => wi(e, typeof t != "symbol" ? t + "" : t, r), Vr = (e, t, r) => t.has(e) || jr("Cannot " + r);
var Z = (e, t, r) => (Vr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Ht = (e, t, r) => t.has(e) ? jr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), Wt = (e, t, r, l) => (Vr(e, t, "write to private field"), l ? l.call(e, r) : t.set(e, r), r);
const rn = `(function(){"use strict";const d=new TextEncoder;function p(e){return[...new Uint8Array(e)].map(t=>t.toString(16).padStart(2,"0")).join("")}async function b(e,t,r){if(typeof crypto>"u"||!("subtle"in crypto)||!("digest"in crypto.subtle))throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");return p(await crypto.subtle.digest(r.toUpperCase(),d.encode(e+t)))}function w(e,t,r="SHA-256",n=1e6,s=0){const o=new AbortController,a=Date.now();return{promise:(async()=>{for(let c=s;c<=n;c+=1){if(o.signal.aborted)return null;if(await b(t,c,r)===e)return{number:c,took:Date.now()-a}}return null})(),controller:o}}function h(e){const t=atob(e),r=new Uint8Array(t.length);for(let n=0;n<t.length;n++)r[n]=t.charCodeAt(n);return r}function g(e,t=12){const r=new Uint8Array(t);for(let n=0;n<t;n++)r[n]=e%256,e=Math.floor(e/256);return r}async function m(e,t="",r=1e6,n=0){const s="AES-GCM",o=new AbortController,a=Date.now(),l=async()=>{for(let u=n;u<=r;u+=1){if(o.signal.aborted||!c||!y)return null;try{const f=await crypto.subtle.decrypt({name:s,iv:g(u)},c,y);if(f)return{clearText:new TextDecoder().decode(f),took:Date.now()-a}}catch{}}return null};let c=null,y=null;try{y=h(e);const u=await crypto.subtle.digest("SHA-256",d.encode(t));c=await crypto.subtle.importKey("raw",u,s,!1,["decrypt"])}catch{return{promise:Promise.reject(),controller:o}}return{promise:l(),controller:o}}let i;onmessage=async e=>{const{type:t,payload:r,start:n,max:s}=e.data;let o=null;if(t==="abort")i==null||i.abort(),i=void 0;else if(t==="work"){if("obfuscated"in r){const{key:a,obfuscated:l}=r||{};o=await m(l,a,s,n)}else{const{algorithm:a,challenge:l,salt:c}=r||{};o=w(l,c,a,s,n)}i=o.controller,o.promise.then(a=>{self.postMessage(a&&{...a,worker:!0})})}}})();
`, Br = typeof self < "u" && self.Blob && new Blob([rn], { type: "text/javascript;charset=utf-8" });
function pi(e) {
  let t;
  try {
    if (t = Br && (self.URL || self.webkitURL).createObjectURL(Br), !t) throw "";
    const r = new Worker(t, {
      name: e == null ? void 0 : e.name
    });
    return r.addEventListener("error", () => {
      (self.URL || self.webkitURL).revokeObjectURL(t);
    }), r;
  } catch {
    return new Worker(
      "data:text/javascript;charset=utf-8," + encodeURIComponent(rn),
      {
        name: e == null ? void 0 : e.name
      }
    );
  } finally {
    t && (self.URL || self.webkitURL).revokeObjectURL(t);
  }
}
const yi = "5";
var tn;
typeof window < "u" && ((tn = window.__svelte ?? (window.__svelte = {})).v ?? (tn.v = /* @__PURE__ */ new Set())).add(yi);
const bi = 1, Ei = 4, xi = 8, ki = 16, $i = 1, Ci = 2, Xt = "[", nn = "[!", ln = "]", Ke = {}, G = Symbol(), Ai = "http://www.w3.org/1999/xhtml", qr = !1, se = 2, an = 4, St = 8, Qt = 16, me = 32, Me = 64, bt = 128, te = 256, Et = 512, K = 1024, we = 2048, et = 4096, ze = 8192, Tt = 16384, Ri = 32768, er = 65536, Ii = 1 << 19, on = 1 << 20, dt = Symbol("$state"), sn = Symbol("legacy props"), Si = Symbol("");
var un = Array.isArray, Ti = Array.prototype.indexOf, Ni = Array.from, xt = Object.keys, kt = Object.defineProperty, Pe = Object.getOwnPropertyDescriptor, Li = Object.getOwnPropertyDescriptors, Di = Object.prototype, Pi = Array.prototype, fn = Object.getPrototypeOf;
function cn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const Oi = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let ht = [], gt = [];
function dn() {
  var e = ht;
  ht = [], cn(e);
}
function vn() {
  var e = gt;
  gt = [], cn(e);
}
function tr(e) {
  ht.length === 0 && queueMicrotask(dn), ht.push(e);
}
function Fi(e) {
  gt.length === 0 && Oi(vn), gt.push(e);
}
function Hr() {
  ht.length > 0 && dn(), gt.length > 0 && vn();
}
function hn(e) {
  return e === this.v;
}
function Mi(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function gn(e) {
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
    equals: hn,
    rv: 0,
    wv: 0
  };
  return r;
}
function Ye(e) {
  return /* @__PURE__ */ Ki(fe(e));
}
// @__NO_SIDE_EFFECTS__
function _n(e, t = !1) {
  const r = fe(e);
  return t || (r.equals = gn), r;
}
// @__NO_SIDE_EFFECTS__
function Ki(e) {
  return k !== null && !oe && (k.f & se) !== 0 && (ce === null ? nl([e]) : ce.push(e)), e;
}
function L(e, t) {
  return k !== null && !oe && On() && (k.f & (se | Qt)) !== 0 && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (ce === null || !ce.includes(e)) && Gi(), zi(e, t);
}
function zi(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = kn(), mn(e, we), R !== null && (R.f & K) !== 0 && (R.f & (me | Me)) === 0 && (he === null ? il([e]) : he.push(e))), t;
}
function mn(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var l = r.length, i = 0; i < l; i++) {
      var a = r[i], o = a.f;
      (o & we) === 0 && (de(a, t), (o & (K | te)) !== 0 && ((o & se) !== 0 ? mn(
        /** @type {Derived} */
        a,
        et
      ) : Pt(
        /** @type {Effect} */
        a
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function De(e) {
  var t = se | we, r = k !== null && (k.f & se) !== 0 ? (
    /** @type {Derived} */
    k
  ) : null;
  return R === null || r !== null && (r.f & te) !== 0 ? t |= te : R.f |= on, {
    ctx: q,
    deps: null,
    effects: null,
    equals: hn,
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
function wn(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      _e(
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
  Ie(Xi(e));
  try {
    wn(e), t = Cn(e);
  } finally {
    Ie(r);
  }
  return t;
}
function pn(e) {
  var t = Qi(e), r = ($e || (e.f & te) !== 0) && e.deps !== null ? et : K;
  de(e, r), e.equals(t) || (e.v = t, e.wv = kn());
}
function Nt(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let D = !1;
function Je(e) {
  D = e;
}
let T;
function Ae(e) {
  if (e === null)
    throw Nt(), Ke;
  return T = e;
}
function Xe() {
  return Ae(
    /** @type {TemplateNode} */
    /* @__PURE__ */ pe(T)
  );
}
function ne(e) {
  if (D) {
    if (/* @__PURE__ */ pe(T) !== null)
      throw Nt(), Ke;
    T = e;
  }
}
function el(e = 1) {
  if (D) {
    for (var t = e, r = T; t--; )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ pe(r);
    T = r;
  }
}
function tl() {
  for (var e = 0, t = T; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === ln) {
        if (e === 0) return t;
        e -= 1;
      } else (r === Xt || r === nn) && (e += 1);
    }
    var l = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ pe(t)
    );
    t.remove(), t = l;
  }
}
function ae(e, t = null, r) {
  if (typeof e != "object" || e === null || dt in e)
    return e;
  const l = fn(e);
  if (l !== Di && l !== Pi)
    return e;
  var i = /* @__PURE__ */ new Map(), a = un(e), o = fe(0);
  a && i.set("length", fe(
    /** @type {any[]} */
    e.length
  ));
  var f;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(u, c, v) {
        (!("value" in v) || v.configurable === !1 || v.enumerable === !1 || v.writable === !1) && Wi();
        var h = i.get(c);
        return h === void 0 ? (h = fe(v.value), i.set(c, h)) : L(h, ae(v.value, f)), !0;
      },
      deleteProperty(u, c) {
        var v = i.get(c);
        if (v === void 0)
          c in u && i.set(c, fe(G));
        else {
          if (a && typeof c == "string") {
            var h = (
              /** @type {Source<number>} */
              i.get("length")
            ), g = Number(c);
            Number.isInteger(g) && g < h.v && L(h, g);
          }
          L(v, G), Wr(o);
        }
        return !0;
      },
      get(u, c, v) {
        var p;
        if (c === dt)
          return e;
        var h = i.get(c), g = c in u;
        if (h === void 0 && (!g || (p = Pe(u, c)) != null && p.writable) && (h = fe(ae(g ? u[c] : G, f)), i.set(c, h)), h !== void 0) {
          var _ = d(h);
          return _ === G ? void 0 : _;
        }
        return Reflect.get(u, c, v);
      },
      getOwnPropertyDescriptor(u, c) {
        var v = Reflect.getOwnPropertyDescriptor(u, c);
        if (v && "value" in v) {
          var h = i.get(c);
          h && (v.value = d(h));
        } else if (v === void 0) {
          var g = i.get(c), _ = g == null ? void 0 : g.v;
          if (g !== void 0 && _ !== G)
            return {
              enumerable: !0,
              configurable: !0,
              value: _,
              writable: !0
            };
        }
        return v;
      },
      has(u, c) {
        var _;
        if (c === dt)
          return !0;
        var v = i.get(c), h = v !== void 0 && v.v !== G || Reflect.has(u, c);
        if (v !== void 0 || R !== null && (!h || (_ = Pe(u, c)) != null && _.writable)) {
          v === void 0 && (v = fe(h ? ae(u[c], f) : G), i.set(c, v));
          var g = d(v);
          if (g === G)
            return !1;
        }
        return h;
      },
      set(u, c, v, h) {
        var U;
        var g = i.get(c), _ = c in u;
        if (a && c === "length")
          for (var p = v; p < /** @type {Source<number>} */
          g.v; p += 1) {
            var S = i.get(p + "");
            S !== void 0 ? L(S, G) : p in u && (S = fe(G), i.set(p + "", S));
          }
        g === void 0 ? (!_ || (U = Pe(u, c)) != null && U.writable) && (g = fe(void 0), L(g, ae(v, f)), i.set(c, g)) : (_ = g.v !== G, L(g, ae(v, f)));
        var O = Reflect.getOwnPropertyDescriptor(u, c);
        if (O != null && O.set && O.set.call(h, v), !_) {
          if (a && typeof c == "string") {
            var H = (
              /** @type {Source<number>} */
              i.get("length")
            ), M = Number(c);
            Number.isInteger(M) && M >= H.v && L(H, M + 1);
          }
          Wr(o);
        }
        return !0;
      },
      ownKeys(u) {
        d(o);
        var c = Reflect.ownKeys(u).filter((g) => {
          var _ = i.get(g);
          return _ === void 0 || _.v !== G;
        });
        for (var [v, h] of i)
          h.v !== G && !(v in u) && c.push(v);
        return c;
      },
      setPrototypeOf() {
        Yi();
      }
    }
  );
}
function Wr(e, t = 1) {
  L(e, e.v + t);
}
var Yr, yn, bn, En;
function Zt() {
  if (Yr === void 0) {
    Yr = window, yn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    bn = Pe(t, "firstChild").get, En = Pe(t, "nextSibling").get, e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Lt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Fe(e) {
  return bn.call(e);
}
// @__NO_SIDE_EFFECTS__
function pe(e) {
  return En.call(e);
}
function ie(e, t) {
  if (!D)
    return /* @__PURE__ */ Fe(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Fe(T)
  );
  return r === null && (r = T.appendChild(Lt())), Ae(r), r;
}
function mt(e, t) {
  if (!D) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Fe(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ pe(r) : r;
  }
  return T;
}
function xe(e, t = 1, r = !1) {
  let l = D ? T : e;
  for (var i; t--; )
    i = l, l = /** @type {TemplateNode} */
    /* @__PURE__ */ pe(l);
  if (!D)
    return l;
  var a = l == null ? void 0 : l.nodeType;
  if (r && a !== 3) {
    var o = Lt();
    return l === null ? i == null || i.after(o) : l.before(o), Ae(o), o;
  }
  return Ae(l), /** @type {TemplateNode} */
  l;
}
function rl(e) {
  e.textContent = "";
}
let pt = !1, $t = !1, Ct = null, Oe = !1, rr = !1;
function Zr(e) {
  rr = e;
}
let vt = [];
let k = null, oe = !1;
function Re(e) {
  k = e;
}
let R = null;
function Ie(e) {
  R = e;
}
let ce = null;
function nl(e) {
  ce = e;
}
let B = null, J = 0, he = null;
function il(e) {
  he = e;
}
let xn = 1, At = 0, $e = !1;
function kn() {
  return ++xn;
}
function _t(e) {
  var h;
  var t = e.f;
  if ((t & we) !== 0)
    return !0;
  if ((t & et) !== 0) {
    var r = e.deps, l = (t & te) !== 0;
    if (r !== null) {
      var i, a, o = (t & Et) !== 0, f = l && R !== null && !$e, u = r.length;
      if (o || f) {
        var c = (
          /** @type {Derived} */
          e
        ), v = c.parent;
        for (i = 0; i < u; i++)
          a = r[i], (o || !((h = a == null ? void 0 : a.reactions) != null && h.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        o && (c.f ^= Et), f && v !== null && (v.f & te) === 0 && (c.f ^= te);
      }
      for (i = 0; i < u; i++)
        if (a = r[i], _t(
          /** @type {Derived} */
          a
        ) && pn(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!l || R !== null && !$e) && de(e, K);
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
  throw pt = !1, e;
}
function al(e) {
  return (e.f & Tt) === 0 && (e.parent === null || (e.parent.f & bt) === 0);
}
function Dt(e, t, r, l) {
  if (pt) {
    if (r === null && (pt = !1), al(t))
      throw e;
    return;
  }
  r !== null && (pt = !0);
  {
    ll(e, t);
    return;
  }
}
function $n(e, t, r = !0) {
  var l = e.reactions;
  if (l !== null)
    for (var i = 0; i < l.length; i++) {
      var a = l[i];
      (a.f & se) !== 0 ? $n(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (r ? de(a, we) : (a.f & K) !== 0 && de(a, et), Pt(
        /** @type {Effect} */
        a
      ));
    }
}
function Cn(e) {
  var _;
  var t = B, r = J, l = he, i = k, a = $e, o = ce, f = q, u = oe, c = e.f;
  B = /** @type {null | Value[]} */
  null, J = 0, he = null, $e = (c & te) !== 0 && (oe || !Oe || k === null), k = (c & (me | Me)) === 0 ? e : null, ce = null, Jr(e.ctx), oe = !1, At++;
  try {
    var v = (
      /** @type {Function} */
      (0, e.fn)()
    ), h = e.deps;
    if (B !== null) {
      var g;
      if (Rt(e, J), h !== null && J > 0)
        for (h.length = J + B.length, g = 0; g < B.length; g++)
          h[J + g] = B[g];
      else
        e.deps = h = B;
      if (!$e)
        for (g = J; g < h.length; g++)
          ((_ = h[g]).reactions ?? (_.reactions = [])).push(e);
    } else h !== null && J < h.length && (Rt(e, J), h.length = J);
    if (On() && he !== null && !oe && h !== null && (e.f & (se | et | we)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      he.length; g++)
        $n(
          he[g],
          /** @type {Effect} */
          e
        );
    return i !== null && At++, v;
  } finally {
    B = t, J = r, he = l, k = i, $e = a, ce = o, Jr(f), oe = u;
  }
}
function ol(e, t) {
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
  (B === null || !B.includes(t)) && (de(t, et), (t.f & (te | Et)) === 0 && (t.f ^= Et), wn(
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
      ol(e, r[l]);
}
function nr(e) {
  var t = e.f;
  if ((t & Tt) === 0) {
    de(e, K);
    var r = R, l = q, i = Oe;
    R = e, Oe = !0;
    try {
      (t & Qt) !== 0 ? wl(e) : In(e), Rn(e);
      var a = Cn(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = xn;
      var o = e.deps, f;
      qr && Ji && e.f & we;
    } catch (u) {
      Dt(u, e, r, l || e.ctx);
    } finally {
      Oe = i, R = r;
    }
  }
}
function sl() {
  try {
    Bi();
  } catch (e) {
    if (Ct !== null)
      Dt(e, Ct, null);
    else
      throw e;
  }
}
function An() {
  var e = Oe;
  try {
    var t = 0;
    for (Oe = !0; vt.length > 0; ) {
      t++ > 1e3 && sl();
      var r = vt, l = r.length;
      vt = [];
      for (var i = 0; i < l; i++) {
        var a = fl(r[i]);
        ul(a);
      }
    }
  } finally {
    $t = !1, Oe = e, Ct = null;
  }
}
function ul(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var l = e[r];
      if ((l.f & (Tt | ze)) === 0)
        try {
          _t(l) && (nr(l), l.deps === null && l.first === null && l.nodes_start === null && (l.teardown === null ? Sn(l) : l.fn = null));
        } catch (i) {
          Dt(i, l, null, l.ctx);
        }
    }
}
function Pt(e) {
  $t || ($t = !0, queueMicrotask(An));
  for (var t = Ct = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (Me | me)) !== 0) {
      if ((r & K) === 0) return;
      t.f ^= K;
    }
  }
  vt.push(t);
}
function fl(e) {
  for (var t = [], r = e; r !== null; ) {
    var l = r.f, i = (l & (me | Me)) !== 0, a = i && (l & K) !== 0;
    if (!a && (l & ze) === 0) {
      if ((l & an) !== 0)
        t.push(r);
      else if (i)
        r.f ^= K;
      else {
        var o = k;
        try {
          k = r, _t(r) && nr(r);
        } catch (c) {
          Dt(c, r, null, r.ctx);
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
    var u = r.parent;
    for (r = r.next; r === null && u !== null; )
      r = u.next, u = u.parent;
  }
  return t;
}
function E(e) {
  var t;
  for (Hr(); vt.length > 0; )
    $t = !0, An(), Hr();
  return (
    /** @type {T} */
    t
  );
}
async function cl() {
  await Promise.resolve(), E();
}
function d(e) {
  var t = e.f, r = (t & se) !== 0;
  if (k !== null && !oe) {
    ce !== null && ce.includes(e) && Zi();
    var l = k.deps;
    e.rv < At && (e.rv = At, B === null && l !== null && l[J] === e ? J++ : B === null ? B = [e] : (!$e || !B.includes(e)) && B.push(e));
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var i = (
      /** @type {Derived} */
      e
    ), a = i.parent;
    a !== null && (a.f & te) === 0 && (i.f ^= te);
  }
  return r && (i = /** @type {Derived} */
  e, _t(i) && pn(i)), e.v;
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
function de(e, t) {
  e.f = e.f & dl | t;
}
function vl(e) {
  R === null && k === null && Vi(), k !== null && (k.f & te) !== 0 && R === null && ji(), rr && Ui();
}
function hl(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Ue(e, t, r, l = !0) {
  var i = R, a = {
    ctx: q,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | we,
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
      nr(a), a.f |= Ri;
    } catch (u) {
      throw _e(a), u;
    }
  else t !== null && Pt(a);
  var o = r && a.deps === null && a.first === null && a.nodes_start === null && a.teardown === null && (a.f & (on | bt)) === 0;
  if (!o && l && (i !== null && hl(a, i), k !== null && (k.f & se) !== 0)) {
    var f = (
      /** @type {Derived} */
      k
    );
    (f.effects ?? (f.effects = [])).push(a);
  }
  return a;
}
function gl(e) {
  const t = Ue(St, null, !1);
  return de(t, K), t.teardown = e, t;
}
function Gt(e) {
  vl();
  var t = R !== null && (R.f & me) !== 0 && q !== null && !q.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      q
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: R,
      reaction: k
    });
  } else {
    var l = ir(e);
    return l;
  }
}
function _l(e) {
  const t = Ue(Me, e, !0);
  return () => {
    _e(t);
  };
}
function ml(e) {
  const t = Ue(Me, e, !0);
  return (r = {}) => new Promise((l) => {
    r.outro ? Jt(t, () => {
      _e(t), l(void 0);
    }) : (_e(t), l(void 0));
  });
}
function ir(e) {
  return Ue(an, e, !1);
}
function lr(e) {
  return Ue(St, e, !0);
}
function ft(e, t = [], r = De) {
  const l = t.map(r);
  return ar(() => e(...l.map(d)));
}
function ar(e, t = 0) {
  return Ue(St | Qt | t, e, !0);
}
function It(e, t = !0) {
  return Ue(St | me, e, !0, t);
}
function Rn(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = rr, l = k;
    Zr(!0), Re(null);
    try {
      t.call(null);
    } finally {
      Zr(r), Re(l);
    }
  }
}
function In(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var l = r.next;
    (r.f & Me) !== 0 ? r.parent = null : _e(r, t), r = l;
  }
}
function wl(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & me) === 0 && _e(t), t = r;
  }
}
function _e(e, t = !0) {
  var r = !1;
  if ((t || (e.f & Ii) !== 0) && e.nodes_start !== null) {
    for (var l = e.nodes_start, i = e.nodes_end; l !== null; ) {
      var a = l === i ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ pe(l)
      );
      l.remove(), l = a;
    }
    r = !0;
  }
  In(e, t && !r), Rt(e, 0), de(e, Tt);
  var o = e.transitions;
  if (o !== null)
    for (const u of o)
      u.stop();
  Rn(e);
  var f = e.parent;
  f !== null && f.first !== null && Sn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function Sn(e) {
  var t = e.parent, r = e.prev, l = e.next;
  r !== null && (r.next = l), l !== null && (l.prev = r), t !== null && (t.first === e && (t.first = l), t.last === e && (t.last = r));
}
function Jt(e, t) {
  var r = [];
  Tn(e, r, !0), pl(r, () => {
    _e(e), t && t();
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
function Tn(e, t, r) {
  if ((e.f & ze) === 0) {
    if (e.f ^= ze, e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || r) && t.push(o);
    for (var l = e.first; l !== null; ) {
      var i = l.next, a = (l.f & er) !== 0 || (l.f & me) !== 0;
      Tn(l, t, a ? r : !1), l = i;
    }
  }
}
function Gr(e) {
  Nn(e, !0);
}
function Nn(e, t) {
  if ((e.f & ze) !== 0) {
    e.f ^= ze, (e.f & K) === 0 && (e.f ^= K), _t(e) && (de(e, we), Pt(e));
    for (var r = e.first; r !== null; ) {
      var l = r.next, i = (r.f & er) !== 0 || (r.f & me) !== 0;
      Nn(r, i ? t : !1), r = l;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
function Ln(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let q = null;
function Jr(e) {
  q = e;
}
function Dn(e, t = !1, r) {
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
function Pn(e) {
  const t = q;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const o = t.e;
    if (o !== null) {
      var r = R, l = k;
      t.e = null;
      try {
        for (var i = 0; i < o.length; i++) {
          var a = o[i];
          Ie(a.effect), Re(a.reaction), ir(a.fn);
        }
      } finally {
        Ie(r), Re(l);
      }
    }
    q = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function On() {
  return !0;
}
const yl = ["touchstart", "touchmove"];
function bl(e) {
  return yl.includes(e);
}
let Kr = !1;
function Fn() {
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
function Mn(e) {
  var t = k, r = R;
  Re(null), Ie(null);
  try {
    return e();
  } finally {
    Re(t), Ie(r);
  }
}
function El(e, t, r, l = r) {
  e.addEventListener(t, () => Mn(r));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), l(!0);
  } : e.__on_r = () => l(!0), Fn();
}
const Un = /* @__PURE__ */ new Set(), Kt = /* @__PURE__ */ new Set();
function xl(e, t, r, l = {}) {
  function i(a) {
    if (l.capture || ct.call(t, a), !a.cancelBubble)
      return Mn(() => r == null ? void 0 : r.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? tr(() => {
    t.addEventListener(e, i, l);
  }) : t.addEventListener(e, i, l), i;
}
function kl(e, t, r, l, i) {
  var a = { capture: l, passive: i }, o = xl(e, t, r, a);
  (t === document.body || t === window || t === document) && gl(() => {
    t.removeEventListener(e, o, a);
  });
}
function $l(e) {
  for (var t = 0; t < e.length; t++)
    Un.add(e[t]);
  for (var r of Kt)
    r(e);
}
function ct(e) {
  var M;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), l = e.type, i = ((M = e.composedPath) == null ? void 0 : M.call(e)) || [], a = (
    /** @type {null | Element} */
    i[0] || e.target
  ), o = 0, f = e.__root;
  if (f) {
    var u = i.indexOf(f);
    if (u !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var c = i.indexOf(t);
    if (c === -1)
      return;
    u <= c && (o = u);
  }
  if (a = /** @type {Element} */
  i[o] || e.target, a !== t) {
    kt(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var v = k, h = R;
    Re(null), Ie(null);
    try {
      for (var g, _ = []; a !== null; ) {
        var p = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var S = a["__" + l];
          if (S != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (un(S)) {
              var [O, ...H] = S;
              O.apply(a, [e, ...H]);
            } else
              S.call(a, e);
        } catch (U) {
          g ? _.push(U) : g = U;
        }
        if (e.cancelBubble || p === t || p === null)
          break;
        a = p;
      }
      if (g) {
        for (let U of _)
          queueMicrotask(() => {
            throw U;
          });
        throw g;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Re(v), Ie(h);
    }
  }
}
function jn(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Ce(e, t) {
  var r = (
    /** @type {Effect} */
    R
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function Se(e, t) {
  var r = (t & $i) !== 0, l = (t & Ci) !== 0, i, a = !e.startsWith("<!>");
  return () => {
    if (D)
      return Ce(T, null), T;
    i === void 0 && (i = jn(a ? e : "<!>" + e), r || (i = /** @type {Node} */
    /* @__PURE__ */ Fe(i)));
    var o = (
      /** @type {TemplateNode} */
      l || yn ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Fe(o)
      ), u = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Ce(f, u);
    } else
      Ce(o, o);
    return o;
  };
}
function Yt() {
  if (D)
    return Ce(T, null), T;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = Lt();
  return e.append(t, r), Ce(t, r), e;
}
function Q(e, t) {
  if (D) {
    R.nodes_end = T, Xe();
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
function Cl(e, t) {
  Zt(), t.intro = t.intro ?? !1;
  const r = t.target, l = D, i = T;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Fe(r)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== Xt); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ pe(a);
    if (!a)
      throw Ke;
    Je(!0), Ae(
      /** @type {Comment} */
      a
    ), Xe();
    const o = Bn(e, { ...t, anchor: a });
    if (T === null || T.nodeType !== 8 || /** @type {Comment} */
    T.data !== ln)
      throw Nt(), Ke;
    return Je(!1), /**  @type {Exports} */
    o;
  } catch (o) {
    if (o === Ke)
      return t.recover === !1 && qi(), Zt(), rl(r), Je(!1), Vn(e, t);
    throw o;
  } finally {
    Je(l), Ae(i);
  }
}
const Ze = /* @__PURE__ */ new Map();
function Bn(e, { target: t, anchor: r, props: l = {}, events: i, context: a, intro: o = !0 }) {
  Zt();
  var f = /* @__PURE__ */ new Set(), u = (h) => {
    for (var g = 0; g < h.length; g++) {
      var _ = h[g];
      if (!f.has(_)) {
        f.add(_);
        var p = bl(_);
        t.addEventListener(_, ct, { passive: p });
        var S = Ze.get(_);
        S === void 0 ? (document.addEventListener(_, ct, { passive: p }), Ze.set(_, 1)) : Ze.set(_, S + 1);
      }
    }
  };
  u(Ni(Un)), Kt.add(u);
  var c = void 0, v = ml(() => {
    var h = r ?? t.appendChild(Lt());
    return It(() => {
      if (a) {
        Dn({});
        var g = (
          /** @type {ComponentContext} */
          q
        );
        g.c = a;
      }
      i && (l.$$events = i), D && Ce(
        /** @type {TemplateNode} */
        h,
        null
      ), c = e(h, l) || {}, D && (R.nodes_end = T), a && Pn();
    }), () => {
      var p;
      for (var g of f) {
        t.removeEventListener(g, ct);
        var _ = (
          /** @type {number} */
          Ze.get(g)
        );
        --_ === 0 ? (document.removeEventListener(g, ct), Ze.delete(g)) : Ze.set(g, _);
      }
      Kt.delete(u), h !== r && ((p = h.parentNode) == null || p.removeChild(h));
    };
  });
  return zt.set(c, v), c;
}
let zt = /* @__PURE__ */ new WeakMap();
function Al(e, t) {
  const r = zt.get(e);
  return r ? (zt.delete(e), r(t)) : Promise.resolve();
}
function ke(e, t, [r, l] = [0, 0]) {
  D && r === 0 && Xe();
  var i = e, a = null, o = null, f = G, u = r > 0 ? er : 0, c = !1;
  const v = (g, _ = !0) => {
    c = !0, h(_, g);
  }, h = (g, _) => {
    if (f === (f = g)) return;
    let p = !1;
    if (D && l !== -1) {
      if (r === 0) {
        const O = (
          /** @type {Comment} */
          i.data
        );
        O === Xt ? l = 0 : O === nn ? l = 1 / 0 : (l = parseInt(O.substring(1)), l !== l && (l = f ? 1 / 0 : -1));
      }
      const S = l > r;
      !!f === S && (i = tl(), Ae(i), Je(!1), p = !0, l = -1);
    }
    f ? (a ? Gr(a) : _ && (a = It(() => _(i))), o && Jt(o, () => {
      o = null;
    })) : (o ? Gr(o) : _ && (o = It(() => _(i, [r + 1, l]))), a && Jt(a, () => {
      a = null;
    })), p && Je(!0);
  };
  ar(() => {
    c = !1, t(v), c || h(null, null);
  }, u), D && (i = T);
}
function Ge(e, t, r, l, i) {
  var a = e, o = "", f;
  ar(() => {
    if (o === (o = t() ?? "")) {
      D && Xe();
      return;
    }
    f !== void 0 && (_e(f), f = void 0), o !== "" && (f = It(() => {
      if (D) {
        T.data;
        for (var u = Xe(), c = u; u !== null && (u.nodeType !== 8 || /** @type {Comment} */
        u.data !== ""); )
          c = u, u = /** @type {TemplateNode} */
          /* @__PURE__ */ pe(u);
        if (u === null)
          throw Nt(), Ke;
        Ce(T, c), a = Ae(u);
        return;
      }
      var v = o + "", h = jn(v);
      Ce(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Fe(h),
        /** @type {TemplateNode} */
        h.lastChild
      ), a.before(h);
    }));
  });
}
function Rl(e, t, r, l, i) {
  var f;
  D && Xe();
  var a = (f = t.$$slots) == null ? void 0 : f[r], o = !1;
  a === !0 && (a = t.children, o = !0), a === void 0 || a(e, o ? () => l : l);
}
function Il(e, t) {
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
const Sl = Symbol("is custom element"), Tl = Symbol("is html");
function zr(e) {
  if (D) {
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
    e.__on_r = r, Fi(r), Fn();
  }
}
function Nl(e, t) {
  var r = qn(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function le(e, t, r, l) {
  var i = qn(e);
  D && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || i[t] !== (i[t] = r) && (t === "loading" && (e[Si] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Ll(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function qn(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Sl]: e.nodeName.includes("-"),
      [Tl]: e.namespaceURI === Ai
    })
  );
}
var Xr = /* @__PURE__ */ new Map();
function Ll(e) {
  var t = Xr.get(e.nodeName);
  if (t) return t;
  Xr.set(e.nodeName, t = []);
  for (var r, l = e, i = Element.prototype; i !== l; ) {
    r = Li(l);
    for (var a in r)
      r[a].set && t.push(a);
    l = fn(l);
  }
  return t;
}
function Dl(e, t, r = t) {
  El(e, "change", (l) => {
    var i = l ? e.defaultChecked : e.checked;
    r(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (D && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  Qe(t) == null) && r(e.checked), lr(() => {
    var l = t();
    e.checked = !!l;
  });
}
function Qr(e, t) {
  return e === t || (e == null ? void 0 : e[dt]) === t;
}
function en(e = {}, t, r, l) {
  return ir(() => {
    var i, a;
    return lr(() => {
      i = a, a = [], Qe(() => {
        e !== r(...a) && (t(e, ...a), i && Qr(r(...i), e) && t(null, ...i));
      });
    }), () => {
      tr(() => {
        a && Qr(r(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function Hn(e) {
  q === null && Ln(), Gt(() => {
    const t = Qe(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Pl(e) {
  q === null && Ln(), Hn(() => () => Qe(e));
}
let wt = !1;
function Ol(e) {
  var t = wt;
  try {
    return wt = !1, [e(), wt];
  } finally {
    wt = t;
  }
}
function $(e, t, r, l) {
  var Te;
  var i = (r & bi) !== 0, a = !0, o = (r & xi) !== 0, f = (r & ki) !== 0, u = !1, c;
  o ? [c, u] = Ol(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var v = dt in e || sn in e, h = o && (((Te = Pe(e, t)) == null ? void 0 : Te.set) ?? (v && t in e && ((F) => e[t] = F))) || void 0, g = (
    /** @type {V} */
    l
  ), _ = !0, p = !1, S = () => (p = !0, _ && (_ = !1, f ? g = Qe(
    /** @type {() => V} */
    l
  ) : g = /** @type {V} */
  l), g);
  c === void 0 && l !== void 0 && (h && a && Hi(), c = S(), h && h(c));
  var O;
  if (O = () => {
    var F = (
      /** @type {V} */
      e[t]
    );
    return F === void 0 ? S() : (_ = !0, p = !1, F);
  }, (r & Ei) === 0)
    return O;
  if (h) {
    var H = e.$$legacy;
    return function(F, j) {
      return arguments.length > 0 ? ((!j || H || u) && h(j ? O() : F), F) : O();
    };
  }
  var M = !1, U = /* @__PURE__ */ _n(c), W = /* @__PURE__ */ De(() => {
    var F = O(), j = d(U);
    return M ? (M = !1, j) : U.v = F;
  });
  return i || (W.equals = gn), function(F, j) {
    if (arguments.length > 0) {
      const ve = j ? d(W) : o ? ae(F) : F;
      return W.equals(ve) || (M = !0, L(U, ve), p && g !== void 0 && (g = ve), Qe(() => d(W))), F;
    }
    return d(W);
  };
}
function Fl(e) {
  return new Ml(e);
}
var ge, ee;
class Ml {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    Ht(this, ge);
    /** @type {Record<string, any>} */
    Ht(this, ee);
    var a;
    var r = /* @__PURE__ */ new Map(), l = (o, f) => {
      var u = /* @__PURE__ */ _n(f);
      return r.set(o, u), u;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(o, f) {
          return d(r.get(f) ?? l(f, Reflect.get(o, f)));
        },
        has(o, f) {
          return f === sn ? !0 : (d(r.get(f) ?? l(f, Reflect.get(o, f))), Reflect.has(o, f));
        },
        set(o, f, u) {
          return L(r.get(f) ?? l(f, u), u), Reflect.set(o, f, u);
        }
      }
    );
    Wt(this, ee, (t.hydrate ? Cl : Vn)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((a = t == null ? void 0 : t.props) != null && a.$$host) || t.sync === !1) && E(), Wt(this, ge, i.$$events);
    for (const o of Object.keys(Z(this, ee)))
      o === "$set" || o === "$destroy" || o === "$on" || kt(this, o, {
        get() {
          return Z(this, ee)[o];
        },
        /** @param {any} value */
        set(f) {
          Z(this, ee)[o] = f;
        },
        enumerable: !0
      });
    Z(this, ee).$set = /** @param {Record<string, any>} next */
    (o) => {
      Object.assign(i, o);
    }, Z(this, ee).$destroy = () => {
      Al(Z(this, ee));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    Z(this, ee).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    Z(this, ge)[t] = Z(this, ge)[t] || [];
    const l = (...i) => r.call(this, ...i);
    return Z(this, ge)[t].push(l), () => {
      Z(this, ge)[t] = Z(this, ge)[t].filter(
        /** @param {any} fn */
        (i) => i !== l
      );
    };
  }
  $destroy() {
    Z(this, ee).$destroy();
  }
}
ge = new WeakMap(), ee = new WeakMap();
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
    re(this, "$$ctor");
    /** Slots */
    re(this, "$$s");
    /** @type {any} The Svelte component instance */
    re(this, "$$c");
    /** Whether or not the custom element is connected */
    re(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    re(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    re(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    re(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    re(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    re(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    re(this, "$$me");
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
          i !== "default" && (o.name = i), Q(a, o);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, l = Ul(this);
      for (const i of this.$$s)
        i in l && (i === "default" && !this.$$d.children ? (this.$$d.children = t(i), r.default = !0) : r[i] = t(i));
      for (const i of this.attributes) {
        const a = this.$$g_p(i.name);
        a in this.$$d || (this.$$d[a] = yt(a, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = Fl({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = _l(() => {
        lr(() => {
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
function Ul(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function jl(e, t, r, l, i, a) {
  let o = class extends Wn {
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
    kt(o.prototype, f, {
      get() {
        return this.$$c && f in this.$$c ? this.$$c[f] : this.$$d[f];
      },
      set(u) {
        var h;
        u = yt(f, u, t), this.$$d[f] = u;
        var c = this.$$c;
        if (c) {
          var v = (h = Pe(c, f)) == null ? void 0 : h.get;
          v ? c[f] = u : c.$set({ [f]: u });
        }
      }
    });
  }), l.forEach((f) => {
    kt(o.prototype, f, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[f];
      }
    });
  }), e.element = /** @type {any} */
  o, o;
}
const Yn = new TextEncoder();
function Vl(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function Bl(e, t = "SHA-256", r = 1e5) {
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
  return Vl(
    await crypto.subtle.digest(
      r.toUpperCase(),
      Yn.encode(e + t)
    )
  );
}
function ql(e, t, r = "SHA-256", l = 1e6, i = 0) {
  const a = new AbortController(), o = Date.now();
  return {
    promise: (async () => {
      for (let u = i; u <= l; u += 1) {
        if (a.signal.aborted)
          return null;
        if (await Zn(t, u, r) === e)
          return {
            number: u,
            took: Date.now() - o
          };
      }
      return null;
    })(),
    controller: a
  };
}
function Hl() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function Wl(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let l = 0; l < t.length; l++)
    r[l] = t.charCodeAt(l);
  return r;
}
function Yl(e, t = 12) {
  const r = new Uint8Array(t);
  for (let l = 0; l < t; l++)
    r[l] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function Zl(e, t = "", r = 1e6, l = 0) {
  const i = "AES-GCM", a = new AbortController(), o = Date.now(), f = async () => {
    for (let v = l; v <= r; v += 1) {
      if (a.signal.aborted || !u || !c)
        return null;
      try {
        const h = await crypto.subtle.decrypt(
          {
            name: i,
            iv: Yl(v)
          },
          u,
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
  let u = null, c = null;
  try {
    c = Wl(e);
    const v = await crypto.subtle.digest(
      "SHA-256",
      Yn.encode(t)
    );
    u = await crypto.subtle.importKey(
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
var b = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(b || {}), Gl = /* @__PURE__ */ Se('<input type="hidden" class="svelte-mrsw1u">'), Jl = /* @__PURE__ */ Se('<div class="svelte-mrsw1u"><a target="_blank" class="altcha-logo svelte-mrsw1u"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-mrsw1u"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor" class="svelte-mrsw1u"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor" class="svelte-mrsw1u"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor" class="svelte-mrsw1u"></path></svg></a></div>'), Kl = /* @__PURE__ */ Se('<div class="svelte-mrsw1u"><!></div>'), zl = /* @__PURE__ */ Se('<div class="svelte-mrsw1u"><!></div>'), Xl = /* @__PURE__ */ Se('<div class="altcha-error svelte-mrsw1u"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="svelte-mrsw1u"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" class="svelte-mrsw1u"></path></svg> <!></div>'), Ql = /* @__PURE__ */ Se('<div class="altcha-footer svelte-mrsw1u"><div class="svelte-mrsw1u"><!></div></div>'), ea = /* @__PURE__ */ Se('<div class="altcha-anchor-arrow svelte-mrsw1u"></div>'), ta = /* @__PURE__ */ Se('<!> <div class="altcha svelte-mrsw1u"><div class="altcha-main svelte-mrsw1u"><div class="altcha-checkbox svelte-mrsw1u"><input type="checkbox" class="svelte-mrsw1u"> <svg class="altcha-loader svelte-mrsw1u" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25" class="svelte-mrsw1u"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor" class="altcha-spinner svelte-mrsw1u"></path></svg></div> <!> <div class="altcha-label svelte-mrsw1u"><label class="svelte-mrsw1u"><!></label></div> <!></div> <!> <!> <!></div>', 1);
const ra = {
  hash: "svelte-mrsw1u",
  code: `.altcha.svelte-mrsw1u {background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);position:relative;text-align:left;}.altcha.svelte-mrsw1u:focus-within {border-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating].svelte-mrsw1u {background:var(--altcha-color-base, white);display:none;filter:drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2));left:-100%;position:fixed;top:-100%;width:var(--altcha-max-width, 260px);z-index:999999;}.altcha[data-floating=top].svelte-mrsw1u .altcha-anchor-arrow:where(.svelte-mrsw1u) {border-bottom-color:transparent;border-top-color:var(--altcha-color-border, #a0a0a0);bottom:-12px;top:auto;}.altcha[data-floating=bottom].svelte-mrsw1u:focus-within::after {border-bottom-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating=top].svelte-mrsw1u:focus-within::after {border-top-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating].svelte-mrsw1u:not([data-state=unverified]) {display:block;}.altcha-anchor-arrow.svelte-mrsw1u {border:6px solid transparent;border-bottom-color:var(--altcha-color-border, #a0a0a0);content:"";height:0;left:12px;position:absolute;top:-12px;width:0;}.altcha-main.svelte-mrsw1u {align-items:center;display:flex;gap:0.4rem;padding:0.7rem;}.altcha-label.svelte-mrsw1u {flex-grow:1;}.altcha-label.svelte-mrsw1u label:where(.svelte-mrsw1u) {cursor:pointer;}.altcha-logo.svelte-mrsw1u {color:currentColor;opacity:0.3;}.altcha-logo.svelte-mrsw1u:hover {opacity:1;}.altcha-error.svelte-mrsw1u {color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem;}.altcha-footer.svelte-mrsw1u {align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.4;padding:0.2rem 0.7rem;text-align:right;}.altcha-footer.svelte-mrsw1u:hover {opacity:1;}.altcha-footer.svelte-mrsw1u > :where(.svelte-mrsw1u):first-child {flex-grow:1;}.altcha-footer.svelte-mrsw1u a {color:currentColor;}.altcha-checkbox.svelte-mrsw1u {position:relative;display:flex;align-items:center;height:24px;width:24px;}.altcha-checkbox.svelte-mrsw1u input:where(.svelte-mrsw1u) {width:18px;height:18px;margin:0;}.altcha[data-state=verifying].svelte-mrsw1u .altcha-checkbox:where(.svelte-mrsw1u) input:where(.svelte-mrsw1u) {visibility:hidden;}.altcha-loader.svelte-mrsw1u {display:none;position:absolute;top:0;left:-3px;height:100%;}.altcha[data-state=verifying].svelte-mrsw1u .altcha-loader:where(.svelte-mrsw1u) {display:block;}.altcha-spinner.svelte-mrsw1u {
  animation: svelte-mrsw1u-altcha-spinner 0.75s infinite linear;transform-origin:center;}

@keyframes svelte-mrsw1u-altcha-spinner {
  100% {
    transform: rotate(360deg);
  }
}`
};
function na(e, t) {
  var Fr, Mr;
  Dn(t, !0), Il(e, ra);
  let r = $(t, "auto", 7, void 0), l = $(t, "blockspam", 7, void 0), i = $(t, "challengeurl", 7, void 0), a = $(t, "challengejson", 7, void 0), o = $(t, "customfetch", 7, void 0), f = $(t, "debug", 7, !1), u = $(t, "delay", 7, 0), c = $(t, "expire", 7, void 0), v = $(t, "floating", 7, void 0), h = $(t, "floatinganchor", 7, void 0), g = $(t, "floatingoffset", 7, void 0), _ = $(t, "floatingpersist", 7, !1), p = $(t, "hidefooter", 7, !1), S = $(t, "hidelogo", 7, !1), O = $(t, "id", 7, void 0), H = $(t, "name", 7, "altcha"), M = $(t, "maxnumber", 7, 1e6), U = $(t, "mockerror", 7, !1), W = $(t, "obfuscated", 7, void 0), Te = $(t, "plugins", 7, void 0), F = $(t, "refetchonexpire", 7, !0), j = $(t, "spamfilter", 7, !1), ve = $(t, "strings", 7, void 0), z = $(t, "test", 7, !1), ye = $(t, "verifyurl", 7, void 0), je = $(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), tt = $(t, "workerurl", 7, void 0);
  const or = ["SHA-256", "SHA-384", "SHA-512"], sr = "Visit Altcha.org", ur = "https://altcha.org/", rt = (n, s) => {
    t.$$host.dispatchEvent(new CustomEvent(n, { detail: s }));
  }, fr = (Mr = (Fr = document.documentElement.lang) == null ? void 0 : Fr.split("-")) == null ? void 0 : Mr[0], Ot = /* @__PURE__ */ De(() => {
    var n;
    return i() && new URL(i(), location.origin).host.endsWith(".altcha.org") && !!((n = i()) != null && n.includes("apiKey=ckey_"));
  }), Ft = /* @__PURE__ */ De(() => a() ? Er(a()) : void 0), cr = /* @__PURE__ */ De(() => ve() ? Er(ve()) : {}), X = /* @__PURE__ */ De(() => {
    var n;
    return {
      ariaLinkLabel: sr,
      error: "Verification failed. Try again later.",
      expired: "Verification expired. Try again.",
      footer: `Protected by <a href="${ur}" target="_blank" aria-label="${((n = d(cr)) == null ? void 0 : n.ariaLinkLabel) || sr}">ALTCHA</a>`,
      label: "I'm not a robot",
      verified: "Verified",
      verifying: "Verifying...",
      waitAlert: "Verifying... please wait.",
      ...d(cr)
    };
  }), dr = /* @__PURE__ */ De(() => O() || `${H()}_checkbox`);
  let Ve = Ye(!1), C = Ye(ae(b.UNVERIFIED)), V = Ye(void 0), nt = Ye(null), Be = null, w = null, qe = Ye(null), ue = null, be = [], Ne = Ye(null);
  Gt(() => {
    ti(d(qe));
  }), Gt(() => {
    ri(d(C));
  }), Pl(() => {
    Gn(), w && (w.removeEventListener("submit", wr), w.removeEventListener("reset", pr), w.removeEventListener("focusin", mr), w = null), ue && (clearTimeout(ue), ue = null), document.removeEventListener("click", gr), document.removeEventListener("scroll", _r), window.removeEventListener("resize", br);
  }), Hn(() => {
    var n;
    I("mounted", "1.4.2"), I("workers", je()), Qn(), I("plugins", be.length ? be.map((s) => s.constructor.pluginName).join(", ") : "none"), z() && I("using test mode"), c() && Mt(c()), r() !== void 0 && I("auto", r()), v() !== void 0 && xr(v()), w = (n = d(V)) == null ? void 0 : n.closest("form"), w && (w.addEventListener("submit", wr, { capture: !0 }), w.addEventListener("reset", pr), (r() === "onfocus" || _() === "focus") && w.addEventListener("focusin", mr)), r() === "onload" && (W() ? it() : Ee()), d(Ot) && (p() || S()) && I("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      rt("load");
    });
  });
  function vr(n, s) {
    return btoa(JSON.stringify({
      algorithm: n.algorithm,
      challenge: n.challenge,
      number: s.number,
      salt: n.salt,
      signature: n.signature,
      test: z() ? !0 : void 0,
      took: s.took
    }));
  }
  function Gn() {
    for (const n of be)
      n.destroy();
  }
  function hr() {
    i() && F() && d(C) === b.VERIFIED ? Ee() : at(b.EXPIRED, d(X).expired);
  }
  async function Jn() {
    var n;
    if (U())
      throw I("mocking error"), new Error("Mocked error.");
    if (d(Ft))
      return I("using provided json data"), d(Ft);
    if (z())
      return I("generating test challenge", { test: z() }), Bl(typeof z() != "boolean" ? +z() : void 0);
    {
      if (!i() && w) {
        const N = w.getAttribute("action");
        N != null && N.includes("/form/") && i(N + "/altcha");
      }
      if (!i())
        throw new Error("Attribute challengeurl not set.");
      I("fetching challenge from", i());
      let s = null, m = null;
      if (o())
        if (I("using customfetch"), typeof o() == "string") {
          if (s = globalThis[o()] || null, !s)
            throw new Error(`Custom fetch function not found: ${o()}`);
        } else
          s = o();
      const x = {
        headers: j() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      };
      if (s) {
        if (m = await s(i(), x), !m || !(m instanceof Response))
          throw new Error("Custom fetch function did not return a response.");
      } else
        m = await fetch(i(), x);
      if (m.status !== 200)
        throw new Error(`Server responded with ${m.status}.`);
      const P = m.headers.get("X-Altcha-Config"), A = await m.json(), y = new URLSearchParams((n = A.salt.split("?")) == null ? void 0 : n[1]), Y = y.get("expires") || y.get("expire");
      if (Y) {
        const N = new Date(+Y * 1e3), We = isNaN(N.getTime()) ? 0 : N.getTime() - Date.now();
        We > 0 && Mt(We);
      }
      if (P)
        try {
          const N = JSON.parse(P);
          N && typeof N == "object" && (N.verifyurl && (N.verifyurl = new URL(N.verifyurl, new URL(i())).toString()), Cr(N));
        } catch (N) {
          I("unable to configure from X-Altcha-Config", N);
        }
      return A;
    }
  }
  function Kn(n) {
    var m;
    const s = w == null ? void 0 : w.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((m = s == null ? void 0 : s.value) == null ? void 0 : m.slice(s.value.indexOf("@"))) || void 0;
  }
  function zn() {
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
  function Xn(n) {
    return [
      ...(w == null ? void 0 : w.querySelectorAll(n != null && n.length ? n.map((m) => `input[name="${m}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (m, x) => {
        const P = x.name, A = x.value;
        return P && A && (m[P] = /\n/.test(A) ? A.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : A), m;
      },
      {}
    );
  }
  function Qn() {
    const n = Te() !== void 0 ? Te().split(",") : void 0;
    for (const s of globalThis.altchaPlugins)
      (!n || n.includes(s.pluginName)) && be.push(new s({
        el: d(V),
        clarify: it,
        dispatch: rt,
        getConfiguration: Ar,
        getFloatingAnchor: Rr,
        getState: Ir,
        log: I,
        reset: at,
        solve: $r,
        setState: Le,
        setFloatingAnchor: Tr,
        verify: Ee
      }));
  }
  function I(...n) {
    (f() || n.some((s) => s instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${H()}]`, ...n);
  }
  function ei() {
    [b.UNVERIFIED, b.ERROR, b.EXPIRED].includes(d(C)) ? j() !== !1 && (w == null ? void 0 : w.reportValidity()) === !1 ? L(Ve, !1) : W() ? it() : Ee() : L(Ve, !0);
  }
  function gr(n) {
    const s = n.target;
    v() && s && !d(V).contains(s) && (d(C) === b.VERIFIED && _() === !1 || d(C) === b.VERIFIED && _() === "focus" && !(w != null && w.matches(":focus-within")) || r() === "off" && d(C) === b.UNVERIFIED) && Sr();
  }
  function _r() {
    v() && d(C) !== b.UNVERIFIED && lt();
  }
  function ti(n) {
    for (const s of be)
      typeof s.onErrorChange == "function" && s.onErrorChange(d(qe));
  }
  function mr(n) {
    d(C) === b.UNVERIFIED ? Ee() : v() && _() === "focus" && d(C) === b.VERIFIED && Ut();
  }
  function wr(n) {
    w && r() === "onsubmit" ? d(C) === b.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), Ee().then(() => {
      w == null || w.requestSubmit();
    })) : d(C) !== b.VERIFIED && (n.preventDefault(), n.stopPropagation(), d(C) === b.VERIFYING && yr()) : w && v() && r() === "off" && d(C) === b.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), Ut());
  }
  function pr() {
    at();
  }
  function yr() {
    d(C) === b.VERIFYING && d(X).waitAlert && alert(d(X).waitAlert);
  }
  function ri(n) {
    for (const s of be)
      typeof s.onStateChange == "function" && s.onStateChange(d(C));
    v() && d(C) !== b.UNVERIFIED && requestAnimationFrame(() => {
      lt();
    }), L(Ve, d(C) === b.VERIFIED);
  }
  function br() {
    v() && lt();
  }
  function Er(n) {
    return JSON.parse(n);
  }
  async function ni(n) {
    if (!ye())
      throw new Error("Attribute verifyurl not set.");
    I("requesting server verification from", ye());
    const s = { payload: n };
    if (j() !== !1) {
      const {
        blockedCountries: P,
        classifier: A,
        disableRules: y,
        email: Y,
        expectedLanguages: N,
        expectedCountries: We,
        fields: st,
        ipAddress: ut,
        text: _i,
        timeZone: Ur
      } = zn();
      s.blockedCountries = P, s.classifier = A, s.disableRules = y, s.email = Y === !1 ? void 0 : Kn(Y), s.expectedCountries = We, s.expectedLanguages = N || (fr ? [fr] : void 0), s.fields = st === !1 ? void 0 : Xn(st), s.ipAddress = ut === !1 ? void 0 : ut || "auto", s.text = _i, s.timeZone = Ur === !1 ? void 0 : Ur || Hl();
    }
    const m = await fetch(ye(), {
      body: JSON.stringify(s),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (m.status !== 200)
      throw new Error(`Server responded with ${m.status}.`);
    const x = await m.json();
    if (x != null && x.payload && L(Ne, ae(x.payload)), rt("serververification", x), l() && x.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  function Mt(n) {
    I("expire", n), ue && (clearTimeout(ue), ue = null), n < 1 ? hr() : ue = setTimeout(hr, n);
  }
  function xr(n) {
    I("floating", n), v() !== n && (d(V).style.left = "", d(V).style.top = ""), v(n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : v()), v() ? (r() || r("onsubmit"), document.addEventListener("scroll", _r), document.addEventListener("click", gr), window.addEventListener("resize", br)) : r() === "onsubmit" && r(void 0);
  }
  function kr(n) {
    if (!n.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (n.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!or.includes(n.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${or.join(", ")}`);
    if (!n.challenge || n.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!n.salt || n.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function $r(n) {
    let s = null;
    if ("Worker" in window) {
      try {
        s = await ii(n, n.maxNumber || n.maxnumber || M());
      } catch (m) {
        I(m);
      }
      if ((s == null ? void 0 : s.number) !== void 0 || "obfuscated" in n)
        return { data: n, solution: s };
    }
    if ("obfuscated" in n) {
      const m = await Zl(n.obfuscated, n.key, n.maxNumber || n.maxnumber);
      return { data: n, solution: await m.promise };
    }
    return {
      data: n,
      solution: await ql(n.challenge, n.salt, n.algorithm, n.maxNumber || n.maxnumber || M()).promise
    };
  }
  async function ii(n, s = typeof z() == "number" ? z() : n.maxNumber || n.maxnumber || M(), m = Math.ceil(je())) {
    const x = [];
    m = Math.min(16, s, Math.max(1, m));
    for (let y = 0; y < m; y++)
      x.push(altchaCreateWorker(tt()));
    const P = Math.ceil(s / m), A = await Promise.all(x.map((y, Y) => {
      const N = Y * P;
      return new Promise((We) => {
        y.addEventListener("message", (st) => {
          if (st.data)
            for (const ut of x)
              ut !== y && ut.postMessage({ type: "abort" });
          We(st.data);
        }), y.postMessage({
          payload: n,
          max: N + P,
          start: N,
          type: "work"
        });
      });
    }));
    for (const y of x)
      y.terminate();
    return A.find((y) => !!y) || null;
  }
  async function it() {
    if (!W()) {
      Le(b.ERROR);
      return;
    }
    const n = be.find((s) => s.constructor.pluginName === "obfuscation");
    if (!n || !("clarify" in n)) {
      Le(b.ERROR), I("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in n && typeof n.clarify == "function")
      return n.clarify();
  }
  function Cr(n) {
    n.obfuscated !== void 0 && W(n.obfuscated), n.auto !== void 0 && (r(n.auto), r() === "onload" && (W() ? it() : Ee())), n.blockspam !== void 0 && l(!!n.blockspam), n.customfetch !== void 0 && o(n.customfetch), n.floatinganchor !== void 0 && h(n.floatinganchor), n.delay !== void 0 && u(n.delay), n.floatingoffset !== void 0 && g(n.floatingoffset), n.floating !== void 0 && xr(n.floating), n.expire !== void 0 && (Mt(n.expire), c(n.expire)), n.challenge && (a(typeof n.challenge == "string" ? n.challenge : JSON.stringify(n.challenge)), kr(d(Ft))), n.challengeurl !== void 0 && i(n.challengeurl), n.debug !== void 0 && f(!!n.debug), n.hidefooter !== void 0 && p(!!n.hidefooter), n.hidelogo !== void 0 && S(!!n.hidelogo), n.maxnumber !== void 0 && M(+n.maxnumber), n.mockerror !== void 0 && U(!!n.mockerror), n.name !== void 0 && H(n.name), n.refetchonexpire !== void 0 && F(!!n.refetchonexpire), n.spamfilter !== void 0 && j(typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && ve(typeof n.strings == "string" ? n.strings : JSON.stringify(n.strings)), n.test !== void 0 && z(typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && ye(n.verifyurl), n.workers !== void 0 && je(+n.workers), n.workerurl !== void 0 && tt(n.workerurl);
  }
  function Ar() {
    return {
      auto: r(),
      blockspam: l(),
      challengeurl: i(),
      debug: f(),
      delay: u(),
      expire: c(),
      floating: v(),
      floatinganchor: h(),
      floatingoffset: g(),
      hidefooter: p(),
      hidelogo: S(),
      name: H(),
      maxnumber: M(),
      mockerror: U(),
      obfuscated: W(),
      refetchonexpire: F(),
      spamfilter: j(),
      strings: d(X),
      test: z(),
      verifyurl: ye(),
      workers: je(),
      workerurl: tt()
    };
  }
  function Rr() {
    return Be;
  }
  function li(n) {
    return be.find((s) => s.constructor.pluginName === n);
  }
  function Ir() {
    return d(C);
  }
  function Sr() {
    d(V).style.display = "none";
  }
  function lt(n = 20) {
    if (d(V))
      if (Be || (Be = (h() ? document.querySelector(h()) : w == null ? void 0 : w.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || w), Be) {
        const s = parseInt(g(), 10) || 12, m = Be.getBoundingClientRect(), x = d(V).getBoundingClientRect(), P = document.documentElement.clientHeight, A = document.documentElement.clientWidth, y = v() === "auto" ? m.bottom + x.height + s + n > P : v() === "top", Y = Math.max(n, Math.min(A - n - x.width, m.left + m.width / 2 - x.width / 2));
        if (y ? d(V).style.top = `${m.top - (x.height + s)}px` : d(V).style.top = `${m.bottom + s}px`, d(V).style.left = `${Y}px`, d(V).setAttribute("data-floating", y ? "top" : "bottom"), d(nt)) {
          const N = d(nt).getBoundingClientRect();
          d(nt).style.left = m.left - Y + m.width / 2 - N.width / 2 + "px";
        }
      } else
        I("unable to find floating anchor element");
  }
  function at(n = b.UNVERIFIED, s = null) {
    ue && (clearTimeout(ue), ue = null), L(Ve, !1), L(Ne, null), Le(n, s);
  }
  function Tr(n) {
    Be = n;
  }
  function Le(n, s = null) {
    L(C, ae(n)), L(qe, ae(s)), rt("statechange", {
      payload: d(Ne),
      state: d(C)
    });
  }
  function Ut() {
    d(V).style.display = "block", v() && lt();
  }
  async function Ee() {
    return at(b.VERIFYING), await new Promise((n) => setTimeout(n, u() || 0)), Jn().then((n) => (kr(n), I("challenge", n), $r(n))).then(({ data: n, solution: s }) => {
      if (I("solution", s), !s || n && "challenge" in n && !("clearText" in s))
        if ((s == null ? void 0 : s.number) !== void 0 && "challenge" in n) {
          if (ye())
            return ni(vr(n, s));
          L(Ne, ae(vr(n, s))), I("payload", d(Ne));
        } else
          throw I("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      Le(b.VERIFIED), I("verified"), cl().then(() => {
        rt("verified", { payload: d(Ne) });
      });
    }).catch((n) => {
      I(n), Le(b.ERROR, n.message);
    });
  }
  var Nr = ta(), Lr = mt(Nr);
  Rl(Lr, t, "default", {});
  var ot = xe(Lr, 2), jt = ie(ot), Vt = ie(jt), He = ie(Vt);
  zr(He), He.__change = ei, el(2), ne(Vt);
  var Dr = xe(Vt, 2);
  {
    var ai = (n) => {
      var s = Gl();
      zr(s), ft(() => {
        le(s, "name", H()), Nl(s, d(Ne));
      }), Q(n, s);
    };
    ke(Dr, (n) => {
      d(C) === b.VERIFIED && n(ai);
    });
  }
  var Bt = xe(Dr, 2), qt = ie(Bt), oi = ie(qt);
  {
    var si = (n) => {
      var s = Yt(), m = mt(s);
      Ge(m, () => d(X).verified), Q(n, s);
    }, ui = (n, s) => {
      {
        var m = (P) => {
          var A = Yt(), y = mt(A);
          Ge(y, () => d(X).verifying), Q(P, A);
        }, x = (P) => {
          var A = Yt(), y = mt(A);
          Ge(y, () => d(X).label), Q(P, A);
        };
        ke(
          n,
          (P) => {
            d(C) === b.VERIFYING ? P(m) : P(x, !1);
          },
          s
        );
      }
    };
    ke(oi, (n) => {
      d(C) === b.VERIFIED ? n(si) : n(ui, !1);
    });
  }
  ne(qt), ne(Bt);
  var fi = xe(Bt, 2);
  {
    var ci = (n) => {
      var s = Jl(), m = ie(s);
      le(m, "href", ur), ne(s), ft(() => le(m, "aria-label", d(X).ariaLinkLabel)), Q(n, s);
    };
    ke(fi, (n) => {
      (S() !== !0 || d(Ot)) && n(ci);
    });
  }
  ne(jt);
  var Pr = xe(jt, 2);
  {
    var di = (n) => {
      var s = Xl(), m = xe(ie(s), 2);
      {
        var x = (A) => {
          var y = Kl(), Y = ie(y);
          Ge(Y, () => d(X).expired), ne(y), ft(() => le(y, "title", d(qe))), Q(A, y);
        }, P = (A) => {
          var y = zl(), Y = ie(y);
          Ge(Y, () => d(X).error), ne(y), ft(() => le(y, "title", d(qe))), Q(A, y);
        };
        ke(m, (A) => {
          d(C) === b.EXPIRED ? A(x) : A(P, !1);
        });
      }
      ne(s), Q(n, s);
    };
    ke(Pr, (n) => {
      (d(qe) || d(C) === b.EXPIRED) && n(di);
    });
  }
  var Or = xe(Pr, 2);
  {
    var vi = (n) => {
      var s = Ql(), m = ie(s), x = ie(m);
      Ge(x, () => d(X).footer), ne(m), ne(s), Q(n, s);
    };
    ke(Or, (n) => {
      d(X).footer && (p() !== !0 || d(Ot)) && n(vi);
    });
  }
  var hi = xe(Or, 2);
  {
    var gi = (n) => {
      var s = ea();
      en(s, (m) => L(nt, m), () => d(nt)), Q(n, s);
    };
    ke(hi, (n) => {
      v() && n(gi);
    });
  }
  return ne(ot), en(ot, (n) => L(V, n), () => d(V)), ft(() => {
    le(ot, "data-state", d(C)), le(ot, "data-floating", v()), le(He, "id", d(dr)), He.required = r() !== "onsubmit" && (!v() || r() !== "off"), le(qt, "for", d(dr));
  }), kl("invalid", He, yr), Dl(He, () => d(Ve), (n) => L(Ve, n)), Q(e, Nr), Pn({
    clarify: it,
    configure: Cr,
    getConfiguration: Ar,
    getFloatingAnchor: Rr,
    getPlugin: li,
    getState: Ir,
    hide: Sr,
    repositionFloating: lt,
    reset: at,
    setFloatingAnchor: Tr,
    setState: Le,
    show: Ut,
    verify: Ee,
    get auto() {
      return r();
    },
    set auto(n = void 0) {
      r(n), E();
    },
    get blockspam() {
      return l();
    },
    set blockspam(n = void 0) {
      l(n), E();
    },
    get challengeurl() {
      return i();
    },
    set challengeurl(n = void 0) {
      i(n), E();
    },
    get challengejson() {
      return a();
    },
    set challengejson(n = void 0) {
      a(n), E();
    },
    get customfetch() {
      return o();
    },
    set customfetch(n = void 0) {
      o(n), E();
    },
    get debug() {
      return f();
    },
    set debug(n = !1) {
      f(n), E();
    },
    get delay() {
      return u();
    },
    set delay(n = 0) {
      u(n), E();
    },
    get expire() {
      return c();
    },
    set expire(n = void 0) {
      c(n), E();
    },
    get floating() {
      return v();
    },
    set floating(n = void 0) {
      v(n), E();
    },
    get floatinganchor() {
      return h();
    },
    set floatinganchor(n = void 0) {
      h(n), E();
    },
    get floatingoffset() {
      return g();
    },
    set floatingoffset(n = void 0) {
      g(n), E();
    },
    get floatingpersist() {
      return _();
    },
    set floatingpersist(n = !1) {
      _(n), E();
    },
    get hidefooter() {
      return p();
    },
    set hidefooter(n = !1) {
      p(n), E();
    },
    get hidelogo() {
      return S();
    },
    set hidelogo(n = !1) {
      S(n), E();
    },
    get id() {
      return O();
    },
    set id(n = void 0) {
      O(n), E();
    },
    get name() {
      return H();
    },
    set name(n = "altcha") {
      H(n), E();
    },
    get maxnumber() {
      return M();
    },
    set maxnumber(n = 1e6) {
      M(n), E();
    },
    get mockerror() {
      return U();
    },
    set mockerror(n = !1) {
      U(n), E();
    },
    get obfuscated() {
      return W();
    },
    set obfuscated(n = void 0) {
      W(n), E();
    },
    get plugins() {
      return Te();
    },
    set plugins(n = void 0) {
      Te(n), E();
    },
    get refetchonexpire() {
      return F();
    },
    set refetchonexpire(n = !0) {
      F(n), E();
    },
    get spamfilter() {
      return j();
    },
    set spamfilter(n = !1) {
      j(n), E();
    },
    get strings() {
      return ve();
    },
    set strings(n = void 0) {
      ve(n), E();
    },
    get test() {
      return z();
    },
    set test(n = !1) {
      z(n), E();
    },
    get verifyurl() {
      return ye();
    },
    set verifyurl(n = void 0) {
      ye(n), E();
    },
    get workers() {
      return je();
    },
    set workers(n = Math.min(16, navigator.hardwareConcurrency || 8)) {
      je(n), E();
    },
    get workerurl() {
      return tt();
    },
    set workerurl(n = void 0) {
      tt(n), E();
    }
  });
}
$l(["change"]);
customElements.define("altcha-widget", jl(
  na,
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
  na as Altcha
};
