var ta = Object.defineProperty;
var gn = (e) => {
  throw TypeError(e);
};
var ra = (e, t, r) => t in e ? ta(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var pe = (e, t, r) => ra(e, typeof t != "symbol" ? t + "" : t, r), _n = (e, t, r) => t.has(e) || gn("Cannot " + r);
var ie = (e, t, r) => (_n(e, t, "read from private field"), r ? r.call(e) : t.get(e)), ur = (e, t, r) => t.has(e) ? gn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), cr = (e, t, r, l) => (_n(e, t, "write to private field"), l ? l.call(e, r) : t.set(e, r), r);
const Ln = `(function(){"use strict";const d=new TextEncoder;function p(e){return[...new Uint8Array(e)].map(t=>t.toString(16).padStart(2,"0")).join("")}async function b(e,t,r){if(typeof crypto>"u"||!("subtle"in crypto)||!("digest"in crypto.subtle))throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");return p(await crypto.subtle.digest(r.toUpperCase(),d.encode(e+t)))}function w(e,t,r="SHA-256",n=1e6,s=0){const o=new AbortController,a=Date.now();return{promise:(async()=>{for(let c=s;c<=n;c+=1){if(o.signal.aborted)return null;if(await b(t,c,r)===e)return{number:c,took:Date.now()-a}}return null})(),controller:o}}function h(e){const t=atob(e),r=new Uint8Array(t.length);for(let n=0;n<t.length;n++)r[n]=t.charCodeAt(n);return r}function g(e,t=12){const r=new Uint8Array(t);for(let n=0;n<t;n++)r[n]=e%256,e=Math.floor(e/256);return r}async function m(e,t="",r=1e6,n=0){const s="AES-GCM",o=new AbortController,a=Date.now(),l=async()=>{for(let u=n;u<=r;u+=1){if(o.signal.aborted||!c||!y)return null;try{const f=await crypto.subtle.decrypt({name:s,iv:g(u)},c,y);if(f)return{clearText:new TextDecoder().decode(f),took:Date.now()-a}}catch{}}return null};let c=null,y=null;try{y=h(e);const u=await crypto.subtle.digest("SHA-256",d.encode(t));c=await crypto.subtle.importKey("raw",u,s,!1,["decrypt"])}catch{return{promise:Promise.reject(),controller:o}}return{promise:l(),controller:o}}let i;onmessage=async e=>{const{type:t,payload:r,start:n,max:s}=e.data;let o=null;if(t==="abort")i==null||i.abort(),i=void 0;else if(t==="work"){if("obfuscated"in r){const{key:a,obfuscated:l}=r||{};o=await m(l,a,s,n)}else{const{algorithm:a,challenge:l,salt:c}=r||{};o=w(l,c,a,s,n)}i=o.controller,o.promise.then(a=>{self.postMessage(a&&{...a,worker:!0})})}}})();
`, yn = typeof self < "u" && self.Blob && new Blob([Ln], { type: "text/javascript;charset=utf-8" });
function na(e) {
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
      "data:text/javascript;charset=utf-8," + encodeURIComponent(Ln),
      {
        name: e == null ? void 0 : e.name
      }
    );
  } finally {
    t && (self.URL || self.webkitURL).revokeObjectURL(t);
  }
}
const la = "5";
var Dn;
typeof window < "u" && ((Dn = window.__svelte ?? (window.__svelte = {})).v ?? (Dn.v = /* @__PURE__ */ new Set())).add(la);
const aa = 1, ia = 4, oa = 8, sa = 16, fa = 1, ua = 2, mr = "[", Tn = "[!", Pn = "]", dt = {}, oe = Symbol(), ca = "http://www.w3.org/1999/xhtml", pn = !1, be = 2, On = 4, Yt = 8, wr = 16, Le = 32, et = 64, Pt = 128, _e = 256, Ot = 512, ue = 1024, Te = 2048, _t = 4096, vt = 8192, Wt = 16384, da = 32768, br = 65536, va = 1 << 19, Fn = 1 << 20, kt = Symbol("$state"), Mn = Symbol("legacy props"), ha = Symbol("");
var Vn = Array.isArray, ga = Array.prototype.indexOf, _a = Array.from, Ft = Object.keys, Mt = Object.defineProperty, Xe = Object.getOwnPropertyDescriptor, ya = Object.getOwnPropertyDescriptors, pa = Object.prototype, ma = Array.prototype, Un = Object.getPrototypeOf;
function qn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function wa(e, t, r = !1) {
  return e === void 0 ? r ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
const ba = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let jt = [], Rt = [];
function Hn() {
  var e = jt;
  jt = [], qn(e);
}
function Bn() {
  var e = Rt;
  Rt = [], qn(e);
}
function Zt(e) {
  jt.length === 0 && queueMicrotask(Hn), jt.push(e);
}
function Ea(e) {
  Rt.length === 0 && ba(Bn), Rt.push(e);
}
function mn() {
  jt.length > 0 && Hn(), Rt.length > 0 && Bn();
}
function Yn(e) {
  return e === this.v;
}
function Ca(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Er(e) {
  return !Ca(e, this.v);
}
function xa(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ka() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Aa(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function ja() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ra() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function $a(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Ia() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Sa() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Na() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Da() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let La = !1;
function Ce(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Yn,
    rv: 0,
    wv: 0
  };
  return r;
}
function se(e) {
  return /* @__PURE__ */ Ta(Ce(e));
}
// @__NO_SIDE_EFFECTS__
function Wn(e, t = !1) {
  const r = Ce(e);
  return t || (r.equals = Er), r;
}
// @__NO_SIDE_EFFECTS__
function Ta(e) {
  return R !== null && !we && (R.f & be) !== 0 && (xe === null ? qa([e]) : xe.push(e)), e;
}
function b(e, t) {
  return R !== null && !we && dl() && (R.f & (be | wr)) !== 0 && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (xe === null || !xe.includes(e)) && Da(), Pa(e, t);
}
function Pa(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = el(), Zn(e, Te), N !== null && (N.f & ue) !== 0 && (N.f & (Le | et)) === 0 && (Ie === null ? Ha([e]) : Ie.push(e))), t;
}
function Zn(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var l = r.length, a = 0; a < l; a++) {
      var i = r[a], s = i.f;
      (s & Te) === 0 && (ke(i, t), (s & (ue | _e)) !== 0 && ((s & be) !== 0 ? Zn(
        /** @type {Derived} */
        i,
        _t
      ) : Kt(
        /** @type {Effect} */
        i
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Fe(e) {
  var t = be | Te, r = R !== null && (R.f & be) !== 0 ? (
    /** @type {Derived} */
    R
  ) : null;
  return N === null || r !== null && (r.f & _e) !== 0 ? t |= _e : N.f |= Fn, {
    ctx: ee,
    deps: null,
    effects: null,
    equals: Yn,
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
function Oa(e) {
  const t = /* @__PURE__ */ Fe(e);
  return t.equals = Er, t;
}
function Gn(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      De(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Fa(e) {
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
function Ma(e) {
  var t, r = N;
  He(Fa(e));
  try {
    Gn(e), t = rl(e);
  } finally {
    He(r);
  }
  return t;
}
function zn(e) {
  var t = Ma(e), r = (Me || (e.f & _e) !== 0) && e.deps !== null ? _t : ue;
  ke(e, r), e.equals(t) || (e.v = t, e.wv = el());
}
function Gt(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let O = !1;
function ct(e) {
  O = e;
}
let U;
function Ue(e) {
  if (e === null)
    throw Gt(), dt;
  return U = e;
}
function ht() {
  return Ue(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Be(U)
  );
}
function M(e) {
  if (O) {
    if (/* @__PURE__ */ Be(U) !== null)
      throw Gt(), dt;
    U = e;
  }
}
function Va() {
  for (var e = 0, t = U; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === Pn) {
        if (e === 0) return t;
        e -= 1;
      } else (r === mr || r === Tn) && (e += 1);
    }
    var l = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Be(t)
    );
    t.remove(), t = l;
  }
}
function P(e, t = null, r) {
  if (typeof e != "object" || e === null || kt in e)
    return e;
  const l = Un(e);
  if (l !== pa && l !== ma)
    return e;
  var a = /* @__PURE__ */ new Map(), i = Vn(e), s = Ce(0);
  i && a.set("length", Ce(
    /** @type {any[]} */
    e.length
  ));
  var c;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(u, d, v) {
        (!("value" in v) || v.configurable === !1 || v.enumerable === !1 || v.writable === !1) && Ia();
        var h = a.get(d);
        return h === void 0 ? (h = Ce(v.value), a.set(d, h)) : b(h, P(v.value, c)), !0;
      },
      deleteProperty(u, d) {
        var v = a.get(d);
        if (v === void 0)
          d in u && a.set(d, Ce(oe));
        else {
          if (i && typeof d == "string") {
            var h = (
              /** @type {Source<number>} */
              a.get("length")
            ), g = Number(d);
            Number.isInteger(g) && g < h.v && b(h, g);
          }
          b(v, oe), wn(s);
        }
        return !0;
      },
      get(u, d, v) {
        var x;
        if (d === kt)
          return e;
        var h = a.get(d), g = d in u;
        if (h === void 0 && (!g || (x = Xe(u, d)) != null && x.writable) && (h = Ce(P(g ? u[d] : oe, c)), a.set(d, h)), h !== void 0) {
          var y = o(h);
          return y === oe ? void 0 : y;
        }
        return Reflect.get(u, d, v);
      },
      getOwnPropertyDescriptor(u, d) {
        var v = Reflect.getOwnPropertyDescriptor(u, d);
        if (v && "value" in v) {
          var h = a.get(d);
          h && (v.value = o(h));
        } else if (v === void 0) {
          var g = a.get(d), y = g == null ? void 0 : g.v;
          if (g !== void 0 && y !== oe)
            return {
              enumerable: !0,
              configurable: !0,
              value: y,
              writable: !0
            };
        }
        return v;
      },
      has(u, d) {
        var y;
        if (d === kt)
          return !0;
        var v = a.get(d), h = v !== void 0 && v.v !== oe || Reflect.has(u, d);
        if (v !== void 0 || N !== null && (!h || (y = Xe(u, d)) != null && y.writable)) {
          v === void 0 && (v = Ce(h ? P(u[d], c) : oe), a.set(d, v));
          var g = o(v);
          if (g === oe)
            return !1;
        }
        return h;
      },
      set(u, d, v, h) {
        var G;
        var g = a.get(d), y = d in u;
        if (i && d === "length")
          for (var x = v; x < /** @type {Source<number>} */
          g.v; x += 1) {
            var L = a.get(x + "");
            L !== void 0 ? b(L, oe) : x in u && (L = Ce(oe), a.set(x + "", L));
          }
        g === void 0 ? (!y || (G = Xe(u, d)) != null && G.writable) && (g = Ce(void 0), b(g, P(v, c)), a.set(d, g)) : (y = g.v !== oe, b(g, P(v, c)));
        var H = Reflect.getOwnPropertyDescriptor(u, d);
        if (H != null && H.set && H.set.call(h, v), !y) {
          if (i && typeof d == "string") {
            var re = (
              /** @type {Source<number>} */
              a.get("length")
            ), W = Number(d);
            Number.isInteger(W) && W >= re.v && b(re, W + 1);
          }
          wn(s);
        }
        return !0;
      },
      ownKeys(u) {
        o(s);
        var d = Reflect.ownKeys(u).filter((g) => {
          var y = a.get(g);
          return y === void 0 || y.v !== oe;
        });
        for (var [v, h] of a)
          h.v !== oe && !(v in u) && d.push(v);
        return d;
      },
      setPrototypeOf() {
        Sa();
      }
    }
  );
}
function wn(e, t = 1) {
  b(e, e.v + t);
}
var bn, Kn, Jn, Xn;
function hr() {
  if (bn === void 0) {
    bn = window, Kn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    Jn = Xe(t, "firstChild").get, Xn = Xe(t, "nextSibling").get, e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Cr(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Ne(e) {
  return Jn.call(e);
}
// @__NO_SIDE_EFFECTS__
function Be(e) {
  return Xn.call(e);
}
function V(e, t) {
  if (!O)
    return /* @__PURE__ */ Ne(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ne(U)
  );
  return r === null && (r = U.appendChild(Cr())), Ue(r), r;
}
function En(e, t) {
  if (!O) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Ne(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Be(r) : r;
  }
  return U;
}
function z(e, t = 1, r = !1) {
  let l = O ? U : e;
  for (var a; t--; )
    a = l, l = /** @type {TemplateNode} */
    /* @__PURE__ */ Be(l);
  if (!O)
    return l;
  var i = l == null ? void 0 : l.nodeType;
  if (r && i !== 3) {
    var s = Cr();
    return l === null ? a == null || a.after(s) : l.before(s), Ue(s), s;
  }
  return Ue(l), /** @type {TemplateNode} */
  l;
}
function Ua(e) {
  e.textContent = "";
}
let Lt = !1, Vt = !1, Ut = null, Qe = !1, xr = !1;
function Cn(e) {
  xr = e;
}
let At = [];
let R = null, we = !1;
function qe(e) {
  R = e;
}
let N = null;
function He(e) {
  N = e;
}
let xe = null;
function qa(e) {
  xe = e;
}
let Q = null, fe = 0, Ie = null;
function Ha(e) {
  Ie = e;
}
let Qn = 1, qt = 0, Me = !1;
function el() {
  return ++Qn;
}
function $t(e) {
  var h;
  var t = e.f;
  if ((t & Te) !== 0)
    return !0;
  if ((t & _t) !== 0) {
    var r = e.deps, l = (t & _e) !== 0;
    if (r !== null) {
      var a, i, s = (t & Ot) !== 0, c = l && N !== null && !Me, u = r.length;
      if (s || c) {
        var d = (
          /** @type {Derived} */
          e
        ), v = d.parent;
        for (a = 0; a < u; a++)
          i = r[a], (s || !((h = i == null ? void 0 : i.reactions) != null && h.includes(d))) && (i.reactions ?? (i.reactions = [])).push(d);
        s && (d.f ^= Ot), c && v !== null && (v.f & _e) === 0 && (d.f ^= _e);
      }
      for (a = 0; a < u; a++)
        if (i = r[a], $t(
          /** @type {Derived} */
          i
        ) && zn(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!l || N !== null && !Me) && ke(e, ue);
  }
  return !1;
}
function Ba(e, t) {
  for (var r = t; r !== null; ) {
    if ((r.f & Pt) !== 0)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= Pt;
      }
    r = r.parent;
  }
  throw Lt = !1, e;
}
function Ya(e) {
  return (e.f & Wt) === 0 && (e.parent === null || (e.parent.f & Pt) === 0);
}
function zt(e, t, r, l) {
  if (Lt) {
    if (r === null && (Lt = !1), Ya(t))
      throw e;
    return;
  }
  r !== null && (Lt = !0);
  {
    Ba(e, t);
    return;
  }
}
function tl(e, t, r = !0) {
  var l = e.reactions;
  if (l !== null)
    for (var a = 0; a < l.length; a++) {
      var i = l[a];
      (i.f & be) !== 0 ? tl(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (r ? ke(i, Te) : (i.f & ue) !== 0 && ke(i, _t), Kt(
        /** @type {Effect} */
        i
      ));
    }
}
function rl(e) {
  var y;
  var t = Q, r = fe, l = Ie, a = R, i = Me, s = xe, c = ee, u = we, d = e.f;
  Q = /** @type {null | Value[]} */
  null, fe = 0, Ie = null, Me = (d & _e) !== 0 && (we || !Qe || R === null), R = (d & (Le | et)) === 0 ? e : null, xe = null, An(e.ctx), we = !1, qt++;
  try {
    var v = (
      /** @type {Function} */
      (0, e.fn)()
    ), h = e.deps;
    if (Q !== null) {
      var g;
      if (Ht(e, fe), h !== null && fe > 0)
        for (h.length = fe + Q.length, g = 0; g < Q.length; g++)
          h[fe + g] = Q[g];
      else
        e.deps = h = Q;
      if (!Me)
        for (g = fe; g < h.length; g++)
          ((y = h[g]).reactions ?? (y.reactions = [])).push(e);
    } else h !== null && fe < h.length && (Ht(e, fe), h.length = fe);
    if (dl() && Ie !== null && !we && h !== null && (e.f & (be | _t | Te)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      Ie.length; g++)
        tl(
          Ie[g],
          /** @type {Effect} */
          e
        );
    return a !== null && qt++, v;
  } finally {
    Q = t, fe = r, Ie = l, R = a, Me = i, xe = s, An(c), we = u;
  }
}
function Wa(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var l = ga.call(r, e);
    if (l !== -1) {
      var a = r.length - 1;
      a === 0 ? r = t.reactions = null : (r[l] = r[a], r.pop());
    }
  }
  r === null && (t.f & be) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Q === null || !Q.includes(t)) && (ke(t, _t), (t.f & (_e | Ot)) === 0 && (t.f ^= Ot), Gn(
    /** @type {Derived} **/
    t
  ), Ht(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Ht(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var l = t; l < r.length; l++)
      Wa(e, r[l]);
}
function kr(e) {
  var t = e.f;
  if ((t & Wt) === 0) {
    ke(e, ue);
    var r = N, l = ee, a = Qe;
    N = e, Qe = !0;
    try {
      (t & wr) !== 0 ? ri(e) : al(e), ll(e);
      var i = rl(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Qn;
      var s = e.deps, c;
      pn && La && e.f & Te;
    } catch (u) {
      zt(u, e, r, l || e.ctx);
    } finally {
      Qe = a, N = r;
    }
  }
}
function Za() {
  try {
    ja();
  } catch (e) {
    if (Ut !== null)
      zt(e, Ut, null);
    else
      throw e;
  }
}
function nl() {
  var e = Qe;
  try {
    var t = 0;
    for (Qe = !0; At.length > 0; ) {
      t++ > 1e3 && Za();
      var r = At, l = r.length;
      At = [];
      for (var a = 0; a < l; a++) {
        var i = za(r[a]);
        Ga(i);
      }
    }
  } finally {
    Vt = !1, Qe = e, Ut = null;
  }
}
function Ga(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var l = e[r];
      if ((l.f & (Wt | vt)) === 0)
        try {
          $t(l) && (kr(l), l.deps === null && l.first === null && l.nodes_start === null && (l.teardown === null ? il(l) : l.fn = null));
        } catch (a) {
          zt(a, l, null, l.ctx);
        }
    }
}
function Kt(e) {
  Vt || (Vt = !0, queueMicrotask(nl));
  for (var t = Ut = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (et | Le)) !== 0) {
      if ((r & ue) === 0) return;
      t.f ^= ue;
    }
  }
  At.push(t);
}
function za(e) {
  for (var t = [], r = e; r !== null; ) {
    var l = r.f, a = (l & (Le | et)) !== 0, i = a && (l & ue) !== 0;
    if (!i && (l & vt) === 0) {
      if ((l & On) !== 0)
        t.push(r);
      else if (a)
        r.f ^= ue;
      else {
        var s = R;
        try {
          R = r, $t(r) && kr(r);
        } catch (d) {
          zt(d, r, null, r.ctx);
        } finally {
          R = s;
        }
      }
      var c = r.first;
      if (c !== null) {
        r = c;
        continue;
      }
    }
    var u = r.parent;
    for (r = r.next; r === null && u !== null; )
      r = u.next, u = u.parent;
  }
  return t;
}
function A(e) {
  var t;
  for (mn(); At.length > 0; )
    Vt = !0, nl(), mn();
  return (
    /** @type {T} */
    t
  );
}
async function xn() {
  await Promise.resolve(), A();
}
function o(e) {
  var t = e.f, r = (t & be) !== 0;
  if (R !== null && !we) {
    xe !== null && xe.includes(e) && Na();
    var l = R.deps;
    e.rv < qt && (e.rv = qt, Q === null && l !== null && l[fe] === e ? fe++ : Q === null ? Q = [e] : (!Me || !Q.includes(e)) && Q.push(e));
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var a = (
      /** @type {Derived} */
      e
    ), i = a.parent;
    i !== null && (i.f & _e) === 0 && (a.f ^= _e);
  }
  return r && (a = /** @type {Derived} */
  e, $t(a) && zn(a)), e.v;
}
function gt(e) {
  var t = we;
  try {
    return we = !0, e();
  } finally {
    we = t;
  }
}
const Ka = -7169;
function ke(e, t) {
  e.f = e.f & Ka | t;
}
function Ja(e) {
  N === null && R === null && Aa(), R !== null && (R.f & _e) !== 0 && N === null && ka(), xr && xa();
}
function Xa(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function tt(e, t, r, l = !0) {
  var a = N, i = {
    ctx: ee,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Te,
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
      kr(i), i.f |= da;
    } catch (u) {
      throw De(i), u;
    }
  else t !== null && Kt(i);
  var s = r && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (Fn | Pt)) === 0;
  if (!s && l && (a !== null && Xa(i, a), R !== null && (R.f & be) !== 0)) {
    var c = (
      /** @type {Derived} */
      R
    );
    (c.effects ?? (c.effects = [])).push(i);
  }
  return i;
}
function Qa(e) {
  const t = tt(Yt, null, !1);
  return ke(t, ue), t.teardown = e, t;
}
function gr(e) {
  Ja();
  var t = N !== null && (N.f & Le) !== 0 && ee !== null && !ee.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      ee
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: N,
      reaction: R
    });
  } else {
    var l = Ar(e);
    return l;
  }
}
function ei(e) {
  const t = tt(et, e, !0);
  return () => {
    De(t);
  };
}
function ti(e) {
  const t = tt(et, e, !0);
  return (r = {}) => new Promise((l) => {
    r.outro ? _r(t, () => {
      De(t), l(void 0);
    }) : (De(t), l(void 0));
  });
}
function Ar(e) {
  return tt(On, e, !1);
}
function jr(e) {
  return tt(Yt, e, !0);
}
function me(e, t = [], r = Fe) {
  const l = t.map(r);
  return Rr(() => e(...l.map(o)));
}
function Rr(e, t = 0) {
  return tt(Yt | wr | t, e, !0);
}
function Bt(e, t = !0) {
  return tt(Yt | Le, e, !0, t);
}
function ll(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = xr, l = R;
    Cn(!0), qe(null);
    try {
      t.call(null);
    } finally {
      Cn(r), qe(l);
    }
  }
}
function al(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var l = r.next;
    (r.f & et) !== 0 ? r.parent = null : De(r, t), r = l;
  }
}
function ri(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Le) === 0 && De(t), t = r;
  }
}
function De(e, t = !0) {
  var r = !1;
  if ((t || (e.f & va) !== 0) && e.nodes_start !== null) {
    for (var l = e.nodes_start, a = e.nodes_end; l !== null; ) {
      var i = l === a ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Be(l)
      );
      l.remove(), l = i;
    }
    r = !0;
  }
  al(e, t && !r), Ht(e, 0), ke(e, Wt);
  var s = e.transitions;
  if (s !== null)
    for (const u of s)
      u.stop();
  ll(e);
  var c = e.parent;
  c !== null && c.first !== null && il(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function il(e) {
  var t = e.parent, r = e.prev, l = e.next;
  r !== null && (r.next = l), l !== null && (l.prev = r), t !== null && (t.first === e && (t.first = l), t.last === e && (t.last = r));
}
function _r(e, t) {
  var r = [];
  ol(e, r, !0), ni(r, () => {
    De(e), t && t();
  });
}
function ni(e, t) {
  var r = e.length;
  if (r > 0) {
    var l = () => --r || t();
    for (var a of e)
      a.out(l);
  } else
    t();
}
function ol(e, t, r) {
  if ((e.f & vt) === 0) {
    if (e.f ^= vt, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || r) && t.push(s);
    for (var l = e.first; l !== null; ) {
      var a = l.next, i = (l.f & br) !== 0 || (l.f & Le) !== 0;
      ol(l, t, i ? r : !1), l = a;
    }
  }
}
function kn(e) {
  sl(e, !0);
}
function sl(e, t) {
  if ((e.f & vt) !== 0) {
    e.f ^= vt, (e.f & ue) === 0 && (e.f ^= ue), $t(e) && (ke(e, Te), Kt(e));
    for (var r = e.first; r !== null; ) {
      var l = r.next, a = (r.f & br) !== 0 || (r.f & Le) !== 0;
      sl(r, a ? t : !1), r = l;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
function fl(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let ee = null;
function An(e) {
  ee = e;
}
function ul(e, t = !1, r) {
  ee = {
    p: ee,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
}
function cl(e) {
  const t = ee;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var r = N, l = R;
      t.e = null;
      try {
        for (var a = 0; a < s.length; a++) {
          var i = s[a];
          He(i.effect), qe(i.reaction), Ar(i.fn);
        }
      } finally {
        He(r), qe(l);
      }
    }
    ee = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function dl() {
  return !0;
}
const li = ["touchstart", "touchmove"];
function ai(e) {
  return li.includes(e);
}
function ii(e, t) {
  {
    const r = document.body;
    e.autofocus = !0, Zt(() => {
      document.activeElement === r && e.focus();
    });
  }
}
let jn = !1;
function vl() {
  jn || (jn = !0, document.addEventListener(
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
function hl(e) {
  var t = R, r = N;
  qe(null), He(null);
  try {
    return e();
  } finally {
    qe(t), He(r);
  }
}
function oi(e, t, r, l = r) {
  e.addEventListener(t, () => hl(r));
  const a = e.__on_r;
  a ? e.__on_r = () => {
    a(), l(!0);
  } : e.__on_r = () => l(!0), vl();
}
const gl = /* @__PURE__ */ new Set(), yr = /* @__PURE__ */ new Set();
function si(e, t, r, l = {}) {
  function a(i) {
    if (l.capture || xt.call(t, i), !i.cancelBubble)
      return hl(() => r == null ? void 0 : r.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Zt(() => {
    t.addEventListener(e, a, l);
  }) : t.addEventListener(e, a, l), a;
}
function Ke(e, t, r, l, a) {
  var i = { capture: l, passive: a }, s = si(e, t, r, i);
  (t === document.body || t === window || t === document) && Qa(() => {
    t.removeEventListener(e, s, i);
  });
}
function fi(e) {
  for (var t = 0; t < e.length; t++)
    gl.add(e[t]);
  for (var r of yr)
    r(e);
}
function xt(e) {
  var W;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), l = e.type, a = ((W = e.composedPath) == null ? void 0 : W.call(e)) || [], i = (
    /** @type {null | Element} */
    a[0] || e.target
  ), s = 0, c = e.__root;
  if (c) {
    var u = a.indexOf(c);
    if (u !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var d = a.indexOf(t);
    if (d === -1)
      return;
    u <= d && (s = u);
  }
  if (i = /** @type {Element} */
  a[s] || e.target, i !== t) {
    Mt(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || r;
      }
    });
    var v = R, h = N;
    qe(null), He(null);
    try {
      for (var g, y = []; i !== null; ) {
        var x = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var L = i["__" + l];
          if (L != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (Vn(L)) {
              var [H, ...re] = L;
              H.apply(i, [e, ...re]);
            } else
              L.call(i, e);
        } catch (G) {
          g ? y.push(G) : g = G;
        }
        if (e.cancelBubble || x === t || x === null)
          break;
        i = x;
      }
      if (g) {
        for (let G of y)
          queueMicrotask(() => {
            throw G;
          });
        throw g;
      }
    } finally {
      e.__root = t, delete e.currentTarget, qe(v), He(h);
    }
  }
}
function $r(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Ve(e, t) {
  var r = (
    /** @type {Effect} */
    N
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function te(e, t) {
  var r = (t & fa) !== 0, l = (t & ua) !== 0, a, i = !e.startsWith("<!>");
  return () => {
    if (O)
      return Ve(U, null), U;
    a === void 0 && (a = $r(i ? e : "<!>" + e), r || (a = /** @type {Node} */
    /* @__PURE__ */ Ne(a)));
    var s = (
      /** @type {TemplateNode} */
      l || Kn ? document.importNode(a, !0) : a.cloneNode(!0)
    );
    if (r) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ne(s)
      ), u = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Ve(c, u);
    } else
      Ve(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Jt(e, t, r = "svg") {
  var l = !e.startsWith("<!>"), a = `<${r}>${l ? e : "<!>" + e}</${r}>`, i;
  return () => {
    if (O)
      return Ve(U, null), U;
    if (!i) {
      var s = (
        /** @type {DocumentFragment} */
        $r(a)
      ), c = (
        /** @type {Element} */
        /* @__PURE__ */ Ne(s)
      );
      i = /** @type {Element} */
      /* @__PURE__ */ Ne(c);
    }
    var u = (
      /** @type {TemplateNode} */
      i.cloneNode(!0)
    );
    return Ve(u, u), u;
  };
}
function B(e, t) {
  if (O) {
    N.nodes_end = U, ht();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function ui(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function _l(e, t) {
  return yl(e, t);
}
function ci(e, t) {
  hr(), t.intro = t.intro ?? !1;
  const r = t.target, l = O, a = U;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ne(r)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== mr); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ Be(i);
    if (!i)
      throw dt;
    ct(!0), Ue(
      /** @type {Comment} */
      i
    ), ht();
    const s = yl(e, { ...t, anchor: i });
    if (U === null || U.nodeType !== 8 || /** @type {Comment} */
    U.data !== Pn)
      throw Gt(), dt;
    return ct(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === dt)
      return t.recover === !1 && Ra(), hr(), Ua(r), ct(!1), _l(e, t);
    throw s;
  } finally {
    ct(l), Ue(a);
  }
}
const ut = /* @__PURE__ */ new Map();
function yl(e, { target: t, anchor: r, props: l = {}, events: a, context: i, intro: s = !0 }) {
  hr();
  var c = /* @__PURE__ */ new Set(), u = (h) => {
    for (var g = 0; g < h.length; g++) {
      var y = h[g];
      if (!c.has(y)) {
        c.add(y);
        var x = ai(y);
        t.addEventListener(y, xt, { passive: x });
        var L = ut.get(y);
        L === void 0 ? (document.addEventListener(y, xt, { passive: x }), ut.set(y, 1)) : ut.set(y, L + 1);
      }
    }
  };
  u(_a(gl)), yr.add(u);
  var d = void 0, v = ti(() => {
    var h = r ?? t.appendChild(Cr());
    return Bt(() => {
      if (i) {
        ul({});
        var g = (
          /** @type {ComponentContext} */
          ee
        );
        g.c = i;
      }
      a && (l.$$events = a), O && Ve(
        /** @type {TemplateNode} */
        h,
        null
      ), d = e(h, l) || {}, O && (N.nodes_end = U), i && cl();
    }), () => {
      var x;
      for (var g of c) {
        t.removeEventListener(g, xt);
        var y = (
          /** @type {number} */
          ut.get(g)
        );
        --y === 0 ? (document.removeEventListener(g, xt), ut.delete(g)) : ut.set(g, y);
      }
      yr.delete(u), h !== r && ((x = h.parentNode) == null || x.removeChild(h));
    };
  });
  return pr.set(d, v), d;
}
let pr = /* @__PURE__ */ new WeakMap();
function di(e, t) {
  const r = pr.get(e);
  return r ? (pr.delete(e), r(t)) : Promise.resolve();
}
function J(e, t, [r, l] = [0, 0]) {
  O && r === 0 && ht();
  var a = e, i = null, s = null, c = oe, u = r > 0 ? br : 0, d = !1;
  const v = (g, y = !0) => {
    d = !0, h(y, g);
  }, h = (g, y) => {
    if (c === (c = g)) return;
    let x = !1;
    if (O && l !== -1) {
      if (r === 0) {
        const H = (
          /** @type {Comment} */
          a.data
        );
        H === mr ? l = 0 : H === Tn ? l = 1 / 0 : (l = parseInt(H.substring(1)), l !== l && (l = c ? 1 / 0 : -1));
      }
      const L = l > r;
      !!c === L && (a = Va(), Ue(a), ct(!1), x = !0, l = -1);
    }
    c ? (i ? kn(i) : y && (i = Bt(() => y(a))), s && _r(s, () => {
      s = null;
    })) : (s ? kn(s) : y && (s = Bt(() => y(a, [r + 1, l]))), i && _r(i, () => {
      i = null;
    })), x && ct(!0);
  };
  Rr(() => {
    d = !1, t(v), d || h(null, null);
  }, u), O && (a = U);
}
function Je(e, t, r, l, a) {
  var i = e, s = "", c;
  Rr(() => {
    if (s === (s = t() ?? "")) {
      O && ht();
      return;
    }
    c !== void 0 && (De(c), c = void 0), s !== "" && (c = Bt(() => {
      if (O) {
        U.data;
        for (var u = ht(), d = u; u !== null && (u.nodeType !== 8 || /** @type {Comment} */
        u.data !== ""); )
          d = u, u = /** @type {TemplateNode} */
          /* @__PURE__ */ Be(u);
        if (u === null)
          throw Gt(), dt;
        Ve(U, d), i = Ue(u);
        return;
      }
      var v = s + "", h = $r(v);
      Ve(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ne(h),
        /** @type {TemplateNode} */
        h.lastChild
      ), i.before(h);
    }));
  });
}
function vi(e, t, r, l, a) {
  var c;
  O && ht();
  var i = (c = t.$$slots) == null ? void 0 : c[r], s = !1;
  i === !0 && (i = t.children, s = !0), i === void 0 || i(e, s ? () => l : l);
}
function hi(e, t) {
  Zt(() => {
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
const Rn = [...` 	
\r\f \v\uFEFF`];
function gi(e, t, r) {
  var l = "" + e;
  if (r) {
    for (var a in r)
      if (r[a])
        l = l ? l + " " + a : a;
      else if (l.length)
        for (var i = a.length, s = 0; (s = l.indexOf(a, s)) >= 0; ) {
          var c = s + i;
          (s === 0 || Rn.includes(l[s - 1])) && (c === l.length || Rn.includes(l[c])) ? l = (s === 0 ? "" : l.substring(0, s)) + l.substring(c + 1) : s = c;
        }
  }
  return l === "" ? null : l;
}
function _i(e, t, r, l, a, i) {
  var s = e.__className;
  if (O || s !== r) {
    var c = gi(r, l, i);
    (!O || c !== e.getAttribute("class")) && (c == null ? e.removeAttribute("class") : e.className = c), e.__className = r;
  } else if (i && a !== i)
    for (var u in i) {
      var d = !!i[u];
      (a == null || d !== !!a[u]) && e.classList.toggle(u, d);
    }
  return i;
}
const yi = Symbol("is custom element"), pi = Symbol("is html");
function $n(e) {
  if (O) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var l = e.value;
          S(e, "value", null), e.value = l;
        }
        if (e.hasAttribute("checked")) {
          var a = e.checked;
          S(e, "checked", null), e.checked = a;
        }
      }
    };
    e.__on_r = r, Ea(r), vl();
  }
}
function mi(e, t) {
  var r = pl(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function S(e, t, r, l) {
  var a = pl(e);
  O && (a[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || a[t] !== (a[t] = r) && (t === "loading" && (e[ha] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && wi(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function pl(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [yi]: e.nodeName.includes("-"),
      [pi]: e.namespaceURI === ca
    })
  );
}
var In = /* @__PURE__ */ new Map();
function wi(e) {
  var t = In.get(e.nodeName);
  if (t) return t;
  In.set(e.nodeName, t = []);
  for (var r, l = e, a = Element.prototype; a !== l; ) {
    r = ya(l);
    for (var i in r)
      r[i].set && t.push(i);
    l = Un(l);
  }
  return t;
}
function bi(e, t, r = t) {
  oi(e, "change", (l) => {
    var a = l ? e.defaultChecked : e.checked;
    r(a);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (O && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  gt(t) == null) && r(e.checked), jr(() => {
    var l = t();
    e.checked = !!l;
  });
}
function Sn(e, t) {
  return e === t || (e == null ? void 0 : e[kt]) === t;
}
function dr(e = {}, t, r, l) {
  return Ar(() => {
    var a, i;
    return jr(() => {
      a = i, i = [], gt(() => {
        e !== r(...i) && (t(e, ...i), a && Sn(r(...a), e) && t(null, ...a));
      });
    }), () => {
      Zt(() => {
        i && Sn(r(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function ml(e) {
  ee === null && fl(), gr(() => {
    const t = gt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Ei(e) {
  ee === null && fl(), ml(() => () => gt(e));
}
let Dt = !1;
function Ci(e) {
  var t = Dt;
  try {
    return Dt = !1, [e(), Dt];
  } finally {
    Dt = t;
  }
}
function I(e, t, r, l) {
  var Ye;
  var a = (r & aa) !== 0, i = !0, s = (r & oa) !== 0, c = (r & sa) !== 0, u = !1, d;
  s ? [d, u] = Ci(() => (
    /** @type {V} */
    e[t]
  )) : d = /** @type {V} */
  e[t];
  var v = kt in e || Mn in e, h = s && (((Ye = Xe(e, t)) == null ? void 0 : Ye.set) ?? (v && t in e && ((Y) => e[t] = Y))) || void 0, g = (
    /** @type {V} */
    l
  ), y = !0, x = !1, L = () => (x = !0, y && (y = !1, c ? g = gt(
    /** @type {() => V} */
    l
  ) : g = /** @type {V} */
  l), g);
  d === void 0 && l !== void 0 && (h && i && $a(), d = L(), h && h(d));
  var H;
  if (H = () => {
    var Y = (
      /** @type {V} */
      e[t]
    );
    return Y === void 0 ? L() : (y = !0, x = !1, Y);
  }, (r & ia) === 0)
    return H;
  if (h) {
    var re = e.$$legacy;
    return function(Y, Z) {
      return arguments.length > 0 ? ((!Z || re || u) && h(Z ? H() : Y), Y) : H();
    };
  }
  var W = !1, G = /* @__PURE__ */ Wn(d), ne = /* @__PURE__ */ Fe(() => {
    var Y = H(), Z = o(G);
    return W ? (W = !1, Z) : G.v = Y;
  });
  return a || (ne.equals = Er), function(Y, Z) {
    if (arguments.length > 0) {
      const Ae = Z ? o(ne) : s ? P(Y) : Y;
      return ne.equals(Ae) || (W = !0, b(G, Ae), x && g !== void 0 && (g = Ae), gt(() => o(ne))), Y;
    }
    return o(ne);
  };
}
function xi(e) {
  return new ki(e);
}
var Se, ge;
class ki {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    ur(this, Se);
    /** @type {Record<string, any>} */
    ur(this, ge);
    var i;
    var r = /* @__PURE__ */ new Map(), l = (s, c) => {
      var u = /* @__PURE__ */ Wn(c);
      return r.set(s, u), u;
    };
    const a = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, c) {
          return o(r.get(c) ?? l(c, Reflect.get(s, c)));
        },
        has(s, c) {
          return c === Mn ? !0 : (o(r.get(c) ?? l(c, Reflect.get(s, c))), Reflect.has(s, c));
        },
        set(s, c, u) {
          return b(r.get(c) ?? l(c, u), u), Reflect.set(s, c, u);
        }
      }
    );
    cr(this, ge, (t.hydrate ? ci : _l)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: a,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((i = t == null ? void 0 : t.props) != null && i.$$host) || t.sync === !1) && A(), cr(this, Se, a.$$events);
    for (const s of Object.keys(ie(this, ge)))
      s === "$set" || s === "$destroy" || s === "$on" || Mt(this, s, {
        get() {
          return ie(this, ge)[s];
        },
        /** @param {any} value */
        set(c) {
          ie(this, ge)[s] = c;
        },
        enumerable: !0
      });
    ie(this, ge).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(a, s);
    }, ie(this, ge).$destroy = () => {
      di(ie(this, ge));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    ie(this, ge).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    ie(this, Se)[t] = ie(this, Se)[t] || [];
    const l = (...a) => r.call(this, ...a);
    return ie(this, Se)[t].push(l), () => {
      ie(this, Se)[t] = ie(this, Se)[t].filter(
        /** @param {any} fn */
        (a) => a !== l
      );
    };
  }
  $destroy() {
    ie(this, ge).$destroy();
  }
}
Se = new WeakMap(), ge = new WeakMap();
let wl;
typeof HTMLElement == "function" && (wl = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, l) {
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
          a !== "default" && (s.name = a), B(i, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, l = Ai(this);
      for (const a of this.$$s)
        a in l && (a === "default" && !this.$$d.children ? (this.$$d.children = t(a), r.default = !0) : r[a] = t(a));
      for (const a of this.attributes) {
        const i = this.$$g_p(a.name);
        i in this.$$d || (this.$$d[i] = Tt(i, a.value, this.$$p_d, "toProp"));
      }
      for (const a in this.$$p_d)
        !(a in this.$$d) && this[a] !== void 0 && (this.$$d[a] = this[a], delete this[a]);
      this.$$c = xi({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = ei(() => {
        jr(() => {
          var a;
          this.$$r = !0;
          for (const i of Ft(this.$$c)) {
            if (!((a = this.$$p_d[i]) != null && a.reflect)) continue;
            this.$$d[i] = this.$$c[i];
            const s = Tt(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Tt(t, l, this.$$p_d, "toProp"), (a = this.$$c) == null || a.$set({ [t]: this.$$d[t] }));
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
    return Ft(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function Tt(e, t, r, l) {
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
function Ai(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function ji(e, t, r, l, a, i) {
  let s = class extends wl {
    constructor() {
      super(e, r, a), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Ft(t).map(
        (c) => (t[c].attribute || c).toLowerCase()
      );
    }
  };
  return Ft(t).forEach((c) => {
    Mt(s.prototype, c, {
      get() {
        return this.$$c && c in this.$$c ? this.$$c[c] : this.$$d[c];
      },
      set(u) {
        var h;
        u = Tt(c, u, t), this.$$d[c] = u;
        var d = this.$$c;
        if (d) {
          var v = (h = Xe(d, c)) == null ? void 0 : h.get;
          v ? d[c] = u : d.$set({ [c]: u });
        }
      }
    });
  }), l.forEach((c) => {
    Mt(s.prototype, c, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[c];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
const bl = new TextEncoder();
function Ri(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function $i(e, t = "SHA-256", r = 1e5) {
  const l = Date.now().toString(16);
  e || (e = Math.round(Math.random() * r));
  const a = await El(l, e, t);
  return {
    algorithm: t,
    challenge: a,
    salt: l,
    signature: ""
  };
}
async function El(e, t, r) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return Ri(
    await crypto.subtle.digest(
      r.toUpperCase(),
      bl.encode(e + t)
    )
  );
}
function Ii(e, t, r = "SHA-256", l = 1e6, a = 0) {
  const i = new AbortController(), s = Date.now();
  return {
    promise: (async () => {
      for (let u = a; u <= l; u += 1) {
        if (i.signal.aborted)
          return null;
        if (await El(t, u, r) === e)
          return {
            number: u,
            took: Date.now() - s
          };
      }
      return null;
    })(),
    controller: i
  };
}
function Nn() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function Si(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let l = 0; l < t.length; l++)
    r[l] = t.charCodeAt(l);
  return r;
}
function Ni(e, t = 12) {
  const r = new Uint8Array(t);
  for (let l = 0; l < t; l++)
    r[l] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function Di(e, t = "", r = 1e6, l = 0) {
  const a = "AES-GCM", i = new AbortController(), s = Date.now(), c = async () => {
    for (let v = l; v <= r; v += 1) {
      if (i.signal.aborted || !u || !d)
        return null;
      try {
        const h = await crypto.subtle.decrypt(
          {
            name: a,
            iv: Ni(v)
          },
          u,
          d
        );
        if (h)
          return {
            clearText: new TextDecoder().decode(h),
            took: Date.now() - s
          };
      } catch {
      }
    }
    return null;
  };
  let u = null, d = null;
  try {
    d = Si(e);
    const v = await crypto.subtle.digest(
      "SHA-256",
      bl.encode(t)
    );
    u = await crypto.subtle.importKey(
      "raw",
      v,
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
var E = /* @__PURE__ */ ((e) => (e.CODE = "code", e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(E || {}), he = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.LOADING = "loading", e.PLAYING = "playing", e.PAUSED = "paused", e.READY = "ready", e))(he || {});
const vr = (e, t) => {
  let r = /* @__PURE__ */ Oa(() => wa(t == null ? void 0 : t(), 24));
  var l = Oi();
  me(() => {
    S(l, "width", o(r)), S(l, "height", o(r));
  }), B(e, l);
};
function Li(e, t) {
  e.ctrlKey && e.altKey && e.code === "KeyA" && (e.preventDefault(), e.stopImmediatePropagation(), t());
}
function Ti(e, t) {
  e.preventDefault(), t();
}
function Pi(e, t, r, l, a, i, s, c) {
  var u;
  [
    E.UNVERIFIED,
    E.ERROR,
    E.EXPIRED,
    E.CODE
  ].includes(o(t)) ? r() !== !1 && ((u = o(l)) == null ? void 0 : u.reportValidity()) === !1 ? b(a, !1) : i() ? s() : c() : b(a, !0);
}
var Oi = /* @__PURE__ */ Jt('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="svelte-10f5jdy"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25" class="svelte-10f5jdy"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor" class="altcha-spinner svelte-10f5jdy"></path></svg>'), Fi = /* @__PURE__ */ te('<span role="status" aria-live="polite" class="svelte-10f5jdy"><!></span> <input type="hidden" class="svelte-10f5jdy">', 1), Mi = /* @__PURE__ */ te('<span role="status" aria-live="polite" class="svelte-10f5jdy"><!></span>'), Vi = /* @__PURE__ */ te('<span role="status" aria-live="polite" class="svelte-10f5jdy"><!></span>'), Ui = /* @__PURE__ */ te('<label class="svelte-10f5jdy"><!></label>'), qi = /* @__PURE__ */ te('<div class="svelte-10f5jdy"><a target="_blank" class="altcha-logo svelte-10f5jdy"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-10f5jdy"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor" class="svelte-10f5jdy"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor" class="svelte-10f5jdy"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor" class="svelte-10f5jdy"></path></svg></a></div>'), Hi = /* @__PURE__ */ te('<span role="status" aria-live="polite" class="svelte-10f5jdy"><!></span>'), Bi = /* @__PURE__ */ Jt('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-10f5jdy"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z" class="svelte-10f5jdy"></path></svg>'), Yi = /* @__PURE__ */ Jt('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-10f5jdy"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z" class="svelte-10f5jdy"></path></svg>'), Wi = /* @__PURE__ */ Jt('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-10f5jdy"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z" class="svelte-10f5jdy"></path></svg>'), Zi = /* @__PURE__ */ te('<button type="button" class="altcha-code-challenge-audio svelte-10f5jdy"><!></button>'), Gi = /* @__PURE__ */ te('<audio hidden autoplay class="svelte-10f5jdy"><source class="svelte-10f5jdy"></audio>'), zi = /* @__PURE__ */ te('<div class="altcha-code-challenge svelte-10f5jdy" role="dialog"><div class="altcha-code-challenge-arrow svelte-10f5jdy"></div> <form class="svelte-10f5jdy"><img class="altcha-code-challenge-image svelte-10f5jdy" alt=""> <input type="text" autocomplete="off" name="code" class="altcha-code-challenge-input svelte-10f5jdy" required> <div class="altcha-code-challenge-buttons svelte-10f5jdy"><div class="altcha-code-challenge-buttons-left svelte-10f5jdy"><!> <button type="button" class="altcha-code-challenge-reload svelte-10f5jdy"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-10f5jdy"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z" class="svelte-10f5jdy"></path></svg></button></div> <button type="submit" class="altcha-code-challenge-verify svelte-10f5jdy"><!> </button></div> <!></form></div>'), Ki = /* @__PURE__ */ te('<div class="svelte-10f5jdy"><!></div>'), Ji = /* @__PURE__ */ te('<div class="svelte-10f5jdy"><!></div>'), Xi = /* @__PURE__ */ te('<div class="altcha-error svelte-10f5jdy"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="svelte-10f5jdy"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" class="svelte-10f5jdy"></path></svg> <!></div>'), Qi = /* @__PURE__ */ te('<div class="altcha-footer svelte-10f5jdy"><div class="svelte-10f5jdy"><!></div></div>'), eo = /* @__PURE__ */ te('<div class="altcha-anchor-arrow svelte-10f5jdy"></div>'), to = /* @__PURE__ */ te('<!> <div class="altcha svelte-10f5jdy"><div class="altcha-main svelte-10f5jdy"><!> <div><input type="checkbox" class="svelte-10f5jdy"></div> <div class="altcha-label svelte-10f5jdy"><!></div> <!> <!></div> <!> <!> <!></div>', 1);
const ro = {
  hash: "svelte-10f5jdy",
  code: `.altcha.svelte-10f5jdy {background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);position:relative;text-align:left;}.altcha.svelte-10f5jdy:focus-within {border-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating].svelte-10f5jdy {background:var(--altcha-color-base, white);display:none;filter:drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2));left:-100%;position:fixed;top:-100%;width:var(--altcha-max-width, 260px);z-index:999999;}.altcha[data-floating=top].svelte-10f5jdy .altcha-anchor-arrow:where(.svelte-10f5jdy) {border-bottom-color:transparent;border-top-color:var(--altcha-color-border, #a0a0a0);bottom:-12px;top:auto;}.altcha[data-floating=bottom].svelte-10f5jdy:focus-within::after {border-bottom-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating=top].svelte-10f5jdy:focus-within::after {border-top-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating].svelte-10f5jdy:not([data-state=unverified]) {display:block;}.altcha-anchor-arrow.svelte-10f5jdy {border:6px solid transparent;border-bottom-color:var(--altcha-color-border, #a0a0a0);content:"";height:0;left:12px;position:absolute;top:-12px;width:0;}.altcha-main.svelte-10f5jdy {align-items:center;display:flex;gap:0.4rem;padding:0.7rem;position:relative;}.altcha-code-challenge.svelte-10f5jdy {background:var(--altcha-color-base, white);border:1px solid var(--altcha-color-border-focus, currentColor);border-radius:var(--altcha-border-radius, 3px);filter:drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2));padding:0.5rem;position:absolute;top:2.5rem;z-index:9999999;}.altcha-code-challenge.svelte-10f5jdy > form:where(.svelte-10f5jdy) {display:flex;flex-direction:column;gap:0.5rem;}.altcha-code-challenge-input.svelte-10f5jdy {border:1px solid currentColor;border-radius:3px;box-sizing:border-box;outline:none;font-size:16px;padding:0.35rem;width:220px;}.altcha-code-challenge-input.svelte-10f5jdy:focus {outline:2px solid rgba(0, 0, 250, 0.2);}.altcha-code-challenge-input.svelte-10f5jdy:disabled {opacity:0.7;}.altcha-code-challenge-image.svelte-10f5jdy {border:1px solid currentColor;border-radius:3px;box-sizing:border-box;object-fit:contain;height:50px;width:220px;}.altcha-code-challenge-audio.svelte-10f5jdy,
.altcha-code-challenge-reload.svelte-10f5jdy {background:#efefef;border:0;border-radius:3px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0.35rem;}.altcha-code-challenge-audio.svelte-10f5jdy:disabled,
.altcha-code-challenge-reload.svelte-10f5jdy:disabled {opacity:0.7;pointer-events:none;}.altcha-code-challenge-audio.svelte-10f5jdy > :where(.svelte-10f5jdy),
.altcha-code-challenge-reload.svelte-10f5jdy > :where(.svelte-10f5jdy) {height:20px;width:20px;}.altcha-code-challenge-buttons.svelte-10f5jdy {display:flex;justify-content:space-between;}.altcha-code-challenge-buttons-left.svelte-10f5jdy {display:flex;gap:0.25rem;}.altcha-code-challenge-verify.svelte-10f5jdy {align-items:center;background:blue;border:0;border-radius:3px;color:white;cursor:pointer;display:flex;gap:0.5rem;font-size:100%;padding:0.35rem 1rem;}.altcha-code-challenge-verify.svelte-10f5jdy:disabled {opacity:0.7;pointer-events:none;}.altcha-code-challenge-arrow.svelte-10f5jdy {border:6px solid transparent;border-bottom-color:var(--altcha-color-border, currentColor);content:"";height:0;left:0.15rem;position:absolute;top:-12px;width:0;}.altcha[data-floating=top].svelte-10f5jdy .altcha-code-challenge:where(.svelte-10f5jdy) {top:-150px;}.altcha[data-floating=top].svelte-10f5jdy .altcha-code-challenge-arrow:where(.svelte-10f5jdy) {border-bottom-color:transparent;border-top-color:var(--altcha-color-border, currentColor);bottom:-12px;top:auto;}.altcha-label.svelte-10f5jdy {flex-grow:1;}.altcha-label.svelte-10f5jdy label:where(.svelte-10f5jdy) {cursor:pointer;}.altcha-logo.svelte-10f5jdy {color:currentColor;opacity:0.3;}.altcha-logo.svelte-10f5jdy:hover {opacity:1;}.altcha-error.svelte-10f5jdy {color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem;}.altcha-footer.svelte-10f5jdy {align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.4;padding:0.2rem 0.7rem;text-align:right;}.altcha-footer.svelte-10f5jdy:hover {opacity:1;}.altcha-footer.svelte-10f5jdy > :where(.svelte-10f5jdy):first-child {flex-grow:1;}.altcha-footer.svelte-10f5jdy a {color:currentColor;}.altcha-checkbox.svelte-10f5jdy {display:flex;align-items:center;height:24px;width:24px;}.altcha-checkbox.svelte-10f5jdy input:where(.svelte-10f5jdy) {width:18px;height:18px;margin:0;}.altcha-hidden.svelte-10f5jdy {display:none;}.altcha-spinner.svelte-10f5jdy {
  animation: svelte-10f5jdy-altcha-spinner 0.75s infinite linear;transform-origin:center;}

@keyframes svelte-10f5jdy-altcha-spinner {
  100% {
    transform: rotate(360deg);
  }
}`
};
function no(e, t) {
  var vn, hn;
  ul(t, !0), hi(e, ro);
  let r = I(t, "auto", 7, void 0), l = I(t, "blockspam", 7, void 0), a = I(t, "challengeurl", 7, void 0), i = I(t, "challengejson", 7, void 0), s = I(t, "customfetch", 7, void 0), c = I(t, "debug", 7, !1), u = I(t, "delay", 7, 0), d = I(t, "expire", 7, void 0), v = I(t, "floating", 7, void 0), h = I(t, "floatinganchor", 7, void 0), g = I(t, "floatingoffset", 7, void 0), y = I(t, "floatingpersist", 7, !1), x = I(t, "hidefooter", 7, !1), L = I(t, "hidelogo", 7, !1), H = I(t, "id", 7, void 0), re = I(t, "name", 7, "altcha"), W = I(t, "maxnumber", 7, 1e6), G = I(t, "mockerror", 7, !1), ne = I(t, "obfuscated", 7, void 0), Ye = I(t, "plugins", 7, void 0), Y = I(t, "refetchonexpire", 7, !0), Z = I(t, "spamfilter", 7, !1), Ae = I(t, "strings", 7, void 0), ce = I(t, "test", 7, !1), de = I(t, "verifyurl", 7, void 0), rt = I(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), yt = I(t, "workerurl", 7, void 0);
  const Ir = ["SHA-256", "SHA-384", "SHA-512"], Sr = "Visit Altcha.org", Nr = "https://altcha.org/", We = (n, f) => {
    t.$$host.dispatchEvent(new CustomEvent(n, { detail: f }));
  }, Dr = (hn = (vn = document.documentElement.lang) == null ? void 0 : vn.split("-")) == null ? void 0 : hn[0], Xt = /* @__PURE__ */ Fe(() => {
    var n;
    return a() && new URL(a(), location.origin).host.endsWith(".altcha.org") && !!((n = a()) != null && n.includes("apiKey=ckey_"));
  }), Qt = /* @__PURE__ */ Fe(() => i() ? zr(i()) : void 0), Lr = /* @__PURE__ */ Fe(() => Ae() ? zr(Ae()) : {}), T = /* @__PURE__ */ Fe(() => {
    var n;
    return {
      ariaLinkLabel: Sr,
      enterCode: "Enter code shown above",
      enterCodeAria: "Enter code you hear. Press Ctrl + Alt + A to play audio.",
      error: "Verification failed. Try again later.",
      expired: "Verification expired. Try again.",
      extraCheck: "Extra check required!",
      footer: `Protected by <a href="${Nr}" target="_blank" aria-label="${((n = o(Lr)) == null ? void 0 : n.ariaLinkLabel) || Sr}">ALTCHA</a>`,
      getAudioChallege: "Get an audio challenge",
      label: "I'm not a robot",
      loading: "Loading...",
      reload: "Reload",
      verify: "Verify",
      verified: "Verified",
      verifying: "Verifying...",
      waitAlert: "Verifying... please wait.",
      ...o(Lr)
    };
  }), Tr = /* @__PURE__ */ Fe(() => H() || `${re()}_checkbox`);
  let pt = se(!1), le = se(null), j = se(P(E.UNVERIFIED)), X = se(void 0), mt = se(null), Ze = se(null), nt = se(null), q = se(null), Ge = se(null), Ee = null, ve = se(null), ze = se(!1), Pe = [], er = se(!1), je = se(null);
  gr(() => {
    Nl(o(Ge));
  }), gr(() => {
    Dl(o(j));
  }), Ei(() => {
    Cl(), o(q) && (o(q).removeEventListener("submit", Br), o(q).removeEventListener("reset", Yr), o(q).removeEventListener("focusin", Hr), b(q, null)), Ee && (clearTimeout(Ee), Ee = null), document.removeEventListener("click", Ur), document.removeEventListener("scroll", qr), window.removeEventListener("resize", Gr);
  }), ml(() => {
    var n;
    $("mounted", "1.4.2"), $("workers", rt()), kl(), $("plugins", Pe.length ? Pe.map((f) => f.constructor.pluginName).join(", ") : "none"), ce() && $("using test mode"), d() && rr(d()), r() !== void 0 && $("auto", r()), v() !== void 0 && Kr(v()), b(q, P((n = o(X)) == null ? void 0 : n.closest("form"))), o(q) && (o(q).addEventListener("submit", Br, { capture: !0 }), o(q).addEventListener("reset", Yr), (r() === "onfocus" || y() === "focus") && o(q).addEventListener("focusin", Hr)), r() === "onload" && (ne() ? wt() : $e()), o(Xt) && (x() || L()) && $("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      We("load");
    });
  });
  function tr(n, f) {
    return btoa(JSON.stringify({
      algorithm: n.algorithm,
      challenge: n.challenge,
      number: f.number,
      salt: n.salt,
      signature: n.signature,
      test: ce() ? !0 : void 0,
      took: f.took
    }));
  }
  function Cl() {
    for (const n of Pe)
      n.destroy();
  }
  function Pr() {
    a() && Y() && o(j) === E.VERIFIED ? $e() : lt(E.EXPIRED, o(T).expired);
  }
  async function xl() {
    var n;
    if (G())
      throw $("mocking error"), new Error("Mocked error.");
    if (o(Qt))
      return $("using provided json data"), o(Qt);
    if (ce())
      return $("generating test challenge", { test: ce() }), $i(typeof ce() != "boolean" ? +ce() : void 0);
    {
      if (!a() && o(q)) {
        const C = o(q).getAttribute("action");
        C != null && C.includes("/form/") && a(C + "/altcha");
      }
      if (!a())
        throw new Error("Attribute challengeurl not set.");
      $("fetching challenge from", a());
      let f = null, _ = null;
      if (s())
        if ($("using customfetch"), typeof s() == "string") {
          if (f = globalThis[s()] || null, !f)
            throw new Error(`Custom fetch function not found: ${s()}`);
        } else
          f = s();
      const p = {
        headers: Z() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      };
      if (f) {
        if (_ = await f(a(), p), !_ || !(_ instanceof Response))
          throw new Error("Custom fetch function did not return a response.");
      } else
        _ = await fetch(a(), p);
      if (_.status !== 200)
        throw new Error(`Server responded with ${_.status}.`);
      const m = _.headers.get("X-Altcha-Config"), k = await _.json(), w = new URLSearchParams((n = k.salt.split("?")) == null ? void 0 : n[1]), F = w.get("expires") || w.get("expire");
      if (F) {
        const C = new Date(+F * 1e3), D = isNaN(C.getTime()) ? 0 : C.getTime() - Date.now();
        D > 0 && rr(D);
      }
      if (m)
        try {
          const C = JSON.parse(m);
          C && typeof C == "object" && (C.verifyurl && (C.verifyurl = Vr(C.verifyurl)), Qr(C));
        } catch (C) {
          $("unable to configure from X-Altcha-Config", C);
        }
      return k;
    }
  }
  function Or(n) {
    var _, p;
    const f = (_ = o(q)) == null ? void 0 : _.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((p = f == null ? void 0 : f.value) == null ? void 0 : p.slice(f.value.indexOf("@"))) || void 0;
  }
  function Fr() {
    return Z() === "ipAddress" ? {
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
    } : typeof Z() == "object" ? Z() : {
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
  function Mr(n) {
    var _;
    return [
      ...((_ = o(q)) == null ? void 0 : _.querySelectorAll(n != null && n.length ? n.map((p) => `input[name="${p}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (p, m) => {
        const k = m.name, w = m.value;
        return k && w && (p[k] = /\n/.test(w) ? w.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : w), p;
      },
      {}
    );
  }
  function Vr(n) {
    const f = new URL(a() || location.origin), _ = new URL(n, f);
    return _.search || (_.search = f.search), _.toString();
  }
  function kl() {
    const n = Ye() !== void 0 ? Ye().split(",") : void 0;
    for (const f of globalThis.altchaPlugins)
      (!n || n.includes(f.pluginName)) && Pe.push(new f({
        el: o(X),
        clarify: wt,
        dispatch: We,
        getConfiguration: en,
        getFloatingAnchor: tn,
        getState: rn,
        log: $,
        reset: lt,
        solve: Xr,
        setState: Re,
        setFloatingAnchor: ln,
        verify: $e
      }));
  }
  function $(...n) {
    (c() || n.some((f) => f instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${re()}]`, ...n);
  }
  function Al() {
    b(ve, P(he.PAUSED));
  }
  function jl(n) {
    b(ve, P(he.ERROR));
  }
  function Rl() {
    b(ve, P(he.READY));
  }
  function $l() {
    b(ve, P(he.PLAYING));
  }
  function Il() {
    b(ve, P(he.PAUSED));
  }
  function Sl(n) {
    if (n.preventDefault(), n.stopPropagation(), o(le)) {
      const f = new FormData(n.target);
      b(ze, !0), Tl(tr(o(le).challenge, o(le).solution), String(f.get("code"))).then(({ reason: _, verified: p }) => {
        p ? (b(le, null), Re(E.VERIFIED), $("verified"), xn().then(() => {
          We("verified", { payload: o(je) });
        })) : (lt(), b(Ge, P(_ || "Verification failed")));
      }).finally(() => {
        b(ze, !1);
      });
    }
  }
  function Ur(n) {
    var _;
    const f = n.target;
    v() && f && !o(X).contains(f) && (o(j) === E.VERIFIED && y() === !1 || o(j) === E.VERIFIED && y() === "focus" && !((_ = o(q)) != null && _.matches(":focus-within")) || r() === "off" && o(j) === E.UNVERIFIED) && nn();
  }
  function qr() {
    v() && o(j) !== E.UNVERIFIED && bt();
  }
  function Nl(n) {
    for (const f of Pe)
      typeof f.onErrorChange == "function" && f.onErrorChange(o(Ge));
  }
  function Hr(n) {
    o(j) === E.UNVERIFIED ? $e() : v() && y() === "focus" && o(j) === E.VERIFIED && nr();
  }
  function Br(n) {
    o(q) && r() === "onsubmit" ? o(j) === E.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), $e().then(() => {
      var f;
      (f = o(q)) == null || f.requestSubmit();
    })) : o(j) !== E.VERIFIED && (n.preventDefault(), n.stopPropagation(), o(j) === E.VERIFYING && Wr()) : o(q) && v() && r() === "off" && o(j) === E.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), nr());
  }
  function Yr() {
    lt();
  }
  function Wr() {
    o(j) === E.VERIFYING && o(T).waitAlert && alert(o(T).waitAlert);
  }
  function Zr() {
    o(Ze) ? o(Ze).paused ? (o(Ze).currentTime = 0, o(Ze).play()) : o(Ze).pause() : (b(er, !0), b(ve, P(he.LOADING)));
  }
  function Dl(n) {
    for (const f of Pe)
      typeof f.onStateChange == "function" && f.onStateChange(o(j));
    v() && o(j) !== E.UNVERIFIED && requestAnimationFrame(() => {
      bt();
    }), b(pt, o(j) === E.VERIFIED);
  }
  function Gr() {
    v() && bt();
  }
  function zr(n) {
    return JSON.parse(n);
  }
  async function Ll(n) {
    if (!de())
      throw new Error("Attribute verifyurl not set.");
    $("requesting server verification from", de());
    const f = { payload: n };
    if (Z() !== !1) {
      const {
        blockedCountries: m,
        classifier: k,
        disableRules: w,
        email: F,
        expectedLanguages: C,
        expectedCountries: D,
        fields: ae,
        ipAddress: Oe,
        text: ir,
        timeZone: St
      } = Fr();
      f.blockedCountries = m, f.classifier = k, f.disableRules = w, f.email = F === !1 ? void 0 : Or(F), f.expectedCountries = D, f.expectedLanguages = C || (Dr ? [Dr] : void 0), f.fields = ae === !1 ? void 0 : Mr(ae), f.ipAddress = Oe === !1 ? void 0 : Oe || "auto", f.text = ir, f.timeZone = St === !1 ? void 0 : St || Nn();
    }
    const _ = await fetch(de(), {
      body: JSON.stringify(f),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (_.status !== 200)
      throw new Error(`Server responded with ${_.status}.`);
    const p = await _.json();
    if (p != null && p.payload && b(je, P(p.payload)), We("serververification", p), l() && p.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  async function Tl(n, f) {
    if (!de())
      throw new Error("Attribute verifyurl not set.");
    $("requesting sentinel verification from", de());
    const _ = { code: f, payload: n };
    if (Z() !== !1) {
      const { email: k, fields: w, ipAddress: F, text: C, timeZone: D } = Fr();
      _.email = k === !1 ? void 0 : Or(k), _.fields = w === !1 ? void 0 : Mr(w), _.ipAddress = F === !1 ? void 0 : F || "auto", _.text = C, _.timeZone = D === !1 ? void 0 : D || Nn();
    }
    const p = await fetch(de(), {
      body: JSON.stringify(_),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (p.status !== 200)
      throw new Error(`Server responded with ${p.status}.`);
    const m = await p.json();
    return m != null && m.payload && b(je, P(m.payload)), We("sentinelverification", m), m;
  }
  function rr(n) {
    $("expire", n), Ee && (clearTimeout(Ee), Ee = null), n < 1 ? Pr() : Ee = setTimeout(Pr, n);
  }
  function Kr(n) {
    $("floating", n), v() !== n && (o(X).style.left = "", o(X).style.top = ""), v(n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : v()), v() ? (r() || r("onsubmit"), document.addEventListener("scroll", qr), document.addEventListener("click", Ur), window.addEventListener("resize", Gr)) : r() === "onsubmit" && r(void 0);
  }
  function Jr(n) {
    if (!n.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (n.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!Ir.includes(n.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${Ir.join(", ")}`);
    if (!n.challenge || n.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!n.salt || n.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function Xr(n) {
    let f = null;
    if ("Worker" in window) {
      try {
        f = await Pl(n, n.maxNumber || n.maxnumber || W());
      } catch (_) {
        $(_);
      }
      if ((f == null ? void 0 : f.number) !== void 0 || "obfuscated" in n)
        return { data: n, solution: f };
    }
    if ("obfuscated" in n) {
      const _ = await Di(n.obfuscated, n.key, n.maxNumber || n.maxnumber);
      return { data: n, solution: await _.promise };
    }
    return {
      data: n,
      solution: await Ii(n.challenge, n.salt, n.algorithm, n.maxNumber || n.maxnumber || W()).promise
    };
  }
  async function Pl(n, f = typeof ce() == "number" ? ce() : n.maxNumber || n.maxnumber || W(), _ = Math.ceil(rt())) {
    const p = [];
    _ = Math.min(16, f, Math.max(1, _));
    for (let w = 0; w < _; w++)
      p.push(altchaCreateWorker(yt()));
    const m = Math.ceil(f / _), k = await Promise.all(p.map((w, F) => {
      const C = F * m;
      return new Promise((D) => {
        w.addEventListener("message", (ae) => {
          if (ae.data)
            for (const Oe of p)
              Oe !== w && Oe.postMessage({ type: "abort" });
          D(ae.data);
        }), w.postMessage({
          payload: n,
          max: C + m,
          start: C,
          type: "work"
        });
      });
    }));
    for (const w of p)
      w.terminate();
    return k.find((w) => !!w) || null;
  }
  async function wt() {
    if (!ne()) {
      Re(E.ERROR);
      return;
    }
    const n = Pe.find((f) => f.constructor.pluginName === "obfuscation");
    if (!n || !("clarify" in n)) {
      Re(E.ERROR), $("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in n && typeof n.clarify == "function")
      return n.clarify();
  }
  function Qr(n) {
    n.obfuscated !== void 0 && ne(n.obfuscated), n.auto !== void 0 && (r(n.auto), r() === "onload" && (ne() ? wt() : $e())), n.blockspam !== void 0 && l(!!n.blockspam), n.customfetch !== void 0 && s(n.customfetch), n.floatinganchor !== void 0 && h(n.floatinganchor), n.delay !== void 0 && u(n.delay), n.floatingoffset !== void 0 && g(n.floatingoffset), n.floating !== void 0 && Kr(n.floating), n.expire !== void 0 && (rr(n.expire), d(n.expire)), n.challenge && (i(typeof n.challenge == "string" ? n.challenge : JSON.stringify(n.challenge)), Jr(o(Qt))), n.challengeurl !== void 0 && a(n.challengeurl), n.debug !== void 0 && c(!!n.debug), n.hidefooter !== void 0 && x(!!n.hidefooter), n.hidelogo !== void 0 && L(!!n.hidelogo), n.maxnumber !== void 0 && W(+n.maxnumber), n.mockerror !== void 0 && G(!!n.mockerror), n.name !== void 0 && re(n.name), n.refetchonexpire !== void 0 && Y(!!n.refetchonexpire), n.spamfilter !== void 0 && Z(typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && Ae(typeof n.strings == "string" ? n.strings : JSON.stringify(n.strings)), n.test !== void 0 && ce(typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && de(n.verifyurl), n.workers !== void 0 && rt(+n.workers), n.workerurl !== void 0 && yt(n.workerurl);
  }
  function en() {
    return {
      auto: r(),
      blockspam: l(),
      challengeurl: a(),
      debug: c(),
      delay: u(),
      expire: d(),
      floating: v(),
      floatinganchor: h(),
      floatingoffset: g(),
      hidefooter: x(),
      hidelogo: L(),
      name: re(),
      maxnumber: W(),
      mockerror: G(),
      obfuscated: ne(),
      refetchonexpire: Y(),
      spamfilter: Z(),
      strings: o(T),
      test: ce(),
      verifyurl: de(),
      workers: rt(),
      workerurl: yt()
    };
  }
  function tn() {
    return o(nt);
  }
  function Ol(n) {
    return Pe.find((f) => f.constructor.pluginName === n);
  }
  function rn() {
    return o(j);
  }
  function nn() {
    o(X).style.display = "none";
  }
  function bt(n = 20) {
    var f;
    if (o(X))
      if (o(nt) || b(nt, P((h() ? document.querySelector(h()) : (f = o(q)) == null ? void 0 : f.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || o(q))), o(nt)) {
        const _ = parseInt(g(), 10) || 12, p = o(nt).getBoundingClientRect(), m = o(X).getBoundingClientRect(), k = document.documentElement.clientHeight, w = document.documentElement.clientWidth, F = v() === "auto" ? p.bottom + m.height + _ + n > k : v() === "top", C = Math.max(n, Math.min(w - n - m.width, p.left + p.width / 2 - m.width / 2));
        if (F ? o(X).style.top = `${p.top - (m.height + _)}px` : o(X).style.top = `${p.bottom + _}px`, o(X).style.left = `${C}px`, o(X).setAttribute("data-floating", F ? "top" : "bottom"), o(mt)) {
          const D = o(mt).getBoundingClientRect();
          o(mt).style.left = p.left - C + p.width / 2 - D.width / 2 + "px";
        }
      } else
        $("unable to find floating anchor element");
  }
  function lt(n = E.UNVERIFIED, f = null) {
    Ee && (clearTimeout(Ee), Ee = null), b(pt, !1), b(je, null), b(le, null), b(er, !1), b(ve, null), Re(n, f);
  }
  function ln(n) {
    b(nt, P(n));
  }
  function Re(n, f = null) {
    b(j, P(n)), b(Ge, P(f)), We("statechange", {
      payload: o(je),
      state: o(j)
    });
  }
  function nr() {
    o(X).style.display = "block", v() && bt();
  }
  async function $e() {
    return lt(E.VERIFYING), await new Promise((n) => setTimeout(n, u() || 0)), xl().then((n) => (Jr(n), $("challenge", n), Xr(n))).then(({ data: n, solution: f }) => {
      if ($("solution", f), !f || n && "challenge" in n && !("clearText" in f))
        if ((f == null ? void 0 : f.number) !== void 0 && "challenge" in n)
          if (de() && "codeChallenge" in n)
            b(le, P({ challenge: n, solution: f }));
          else {
            if (de())
              return Ll(tr(n, f));
            b(je, P(tr(n, f))), $("payload", o(je));
          }
        else
          throw $("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      o(le) ? Re(E.CODE) : (Re(E.VERIFIED), $("verified"), xn().then(() => {
        We("verified", { payload: o(je) });
      }));
    }).catch((n) => {
      $(n), Re(E.ERROR, n.message);
    });
  }
  var an = to(), on = En(an);
  vi(on, t, "default", {});
  var Et = z(on, 2), lr = V(Et), sn = V(lr);
  {
    var Fl = (n) => {
      vr(n);
    };
    J(sn, (n) => {
      o(j) === E.VERIFYING && n(Fl);
    });
  }
  var It = z(sn, 2);
  let fn;
  var at = V(It);
  $n(at), at.__change = [
    Pi,
    j,
    Z,
    q,
    pt,
    ne,
    wt,
    $e
  ], M(It);
  var ar = z(It, 2), Ml = V(ar);
  {
    var Vl = (n) => {
      var f = Fi(), _ = En(f), p = V(_);
      Je(p, () => o(T).verified), M(_);
      var m = z(_, 2);
      $n(m), me(() => {
        S(m, "name", re()), mi(m, o(je));
      }), B(n, f);
    }, Ul = (n, f) => {
      {
        var _ = (m) => {
          var k = Mi(), w = V(k);
          Je(w, () => o(T).verifying), M(k), B(m, k);
        }, p = (m, k) => {
          {
            var w = (C) => {
              var D = Vi(), ae = V(D);
              Je(ae, () => o(T).extraCheck), M(D), B(C, D);
            }, F = (C) => {
              var D = Ui(), ae = V(D);
              Je(ae, () => o(T).label), M(D), me(() => S(D, "for", o(Tr))), B(C, D);
            };
            J(
              m,
              (C) => {
                o(j) === E.CODE ? C(w) : C(F, !1);
              },
              k
            );
          }
        };
        J(
          n,
          (m) => {
            o(j) === E.VERIFYING ? m(_) : m(p, !1);
          },
          f
        );
      }
    };
    J(Ml, (n) => {
      o(j) === E.VERIFIED ? n(Vl) : n(Ul, !1);
    });
  }
  M(ar);
  var un = z(ar, 2);
  {
    var ql = (n) => {
      var f = qi(), _ = V(f);
      S(_, "href", Nr), M(f), me(() => S(_, "aria-label", o(T).ariaLinkLabel)), B(n, f);
    };
    J(un, (n) => {
      (L() !== !0 || o(Xt)) && n(ql);
    });
  }
  var Hl = z(un, 2);
  {
    var Bl = (n) => {
      var f = zi(), _ = z(V(f), 2), p = V(_), m = z(p, 2);
      ii(m), m.__keydown = [
        Li,
        Zr
      ];
      var k = z(m, 2), w = V(k), F = V(w);
      {
        var C = (ye) => {
          var K = Zi();
          K.__click = Zr;
          var Nt = V(K);
          {
            var Ct = (it) => {
              var ot = Hi(), or = V(ot);
              vr(or, () => 20), M(ot), me(() => S(ot, "aria-label", o(T).loading)), B(it, ot);
            }, Jl = (it, ot) => {
              {
                var or = (st) => {
                  var sr = Bi();
                  B(st, sr);
                }, Xl = (st, sr) => {
                  {
                    var Ql = (ft) => {
                      var fr = Yi();
                      B(ft, fr);
                    }, ea = (ft) => {
                      var fr = Wi();
                      B(ft, fr);
                    };
                    J(
                      st,
                      (ft) => {
                        o(ve) === he.PLAYING ? ft(Ql) : ft(ea, !1);
                      },
                      sr
                    );
                  }
                };
                J(
                  it,
                  (st) => {
                    o(ve) === he.ERROR ? st(or) : st(Xl, !1);
                  },
                  ot
                );
              }
            };
            J(Nt, (it) => {
              o(ve) === he.LOADING ? it(Ct) : it(Jl, !1);
            });
          }
          M(K), me(() => {
            S(K, "aria-label", o(T).getAudioChallege), S(K, "title", o(T).getAudioChallege), K.disabled = o(ve) === he.LOADING || o(ve) === he.ERROR || o(ze);
          }), B(ye, K);
        };
        J(F, (ye) => {
          o(le).challenge.codeChallenge.audio && ye(C);
        });
      }
      var D = z(F, 2);
      D.__click = [Ti, $e], M(w);
      var ae = z(w, 2), Oe = V(ae);
      {
        var ir = (ye) => {
          vr(ye, () => 16);
        };
        J(Oe, (ye) => {
          o(ze) && ye(ir);
        });
      }
      var St = z(Oe);
      M(ae), M(k);
      var zl = z(k, 2);
      {
        var Kl = (ye) => {
          var K = Gi(), Nt = V(K);
          M(K), dr(K, (Ct) => b(Ze, Ct), () => o(Ze)), me((Ct) => S(Nt, "src", Ct), [
            () => Vr(o(le).challenge.codeChallenge.audio)
          ]), Ke("loadeddata", K, Rl), Ke("pause", K, Il), Ke("play", K, $l), Ke("ended", K, Al), Ke("error", Nt, jl), B(ye, K);
        };
        J(zl, (ye) => {
          o(le).challenge.codeChallenge.audio && o(er) && ye(Kl);
        });
      }
      M(_), M(f), me(() => {
        S(f, "aria-label", o(T).extraCheck), S(p, "src", o(le).challenge.codeChallenge.image), S(m, "minlength", o(le).challenge.codeChallenge.length || 1), S(m, "maxlength", o(le).challenge.codeChallenge.length), S(m, "placeholder", o(T).enterCode), S(m, "aria-label", o(T).enterCodeAria), m.disabled = o(ze), S(D, "aria-label", o(T).reload), S(D, "title", o(T).reload), D.disabled = o(ze), ae.disabled = o(ze), S(ae, "aria-label", o(T).verify), ui(St, ` ${o(T).verify ?? ""}`);
      }), Ke("submit", _, Sl), B(n, f);
    };
    J(Hl, (n) => {
      var f;
      (f = o(le)) != null && f.challenge.codeChallenge && n(Bl);
    });
  }
  M(lr);
  var cn = z(lr, 2);
  {
    var Yl = (n) => {
      var f = Xi(), _ = z(V(f), 2);
      {
        var p = (k) => {
          var w = Ki(), F = V(w);
          Je(F, () => o(T).expired), M(w), me(() => S(w, "title", o(Ge))), B(k, w);
        }, m = (k) => {
          var w = Ji(), F = V(w);
          Je(F, () => o(T).error), M(w), me(() => S(w, "title", o(Ge))), B(k, w);
        };
        J(_, (k) => {
          o(j) === E.EXPIRED ? k(p) : k(m, !1);
        });
      }
      M(f), B(n, f);
    };
    J(cn, (n) => {
      (o(Ge) || o(j) === E.EXPIRED) && n(Yl);
    });
  }
  var dn = z(cn, 2);
  {
    var Wl = (n) => {
      var f = Qi(), _ = V(f), p = V(_);
      Je(p, () => o(T).footer), M(_), M(f), B(n, f);
    };
    J(dn, (n) => {
      o(T).footer && (x() !== !0 || o(Xt)) && n(Wl);
    });
  }
  var Zl = z(dn, 2);
  {
    var Gl = (n) => {
      var f = eo();
      dr(f, (_) => b(mt, _), () => o(mt)), B(n, f);
    };
    J(Zl, (n) => {
      v() && n(Gl);
    });
  }
  return M(Et), dr(Et, (n) => b(X, n), () => o(X)), me(
    (n) => {
      S(Et, "data-state", o(j)), S(Et, "data-floating", v()), fn = _i(It, 1, "altcha-checkbox svelte-10f5jdy", null, fn, n), S(at, "id", o(Tr)), at.required = r() !== "onsubmit" && (!v() || r() !== "off");
    },
    [
      () => ({
        "altcha-hidden": o(j) === E.VERIFYING
      })
    ]
  ), Ke("invalid", at, Wr), bi(at, () => o(pt), (n) => b(pt, n)), B(e, an), cl({
    clarify: wt,
    configure: Qr,
    getConfiguration: en,
    getFloatingAnchor: tn,
    getPlugin: Ol,
    getState: rn,
    hide: nn,
    repositionFloating: bt,
    reset: lt,
    setFloatingAnchor: ln,
    setState: Re,
    show: nr,
    verify: $e,
    get auto() {
      return r();
    },
    set auto(n = void 0) {
      r(n), A();
    },
    get blockspam() {
      return l();
    },
    set blockspam(n = void 0) {
      l(n), A();
    },
    get challengeurl() {
      return a();
    },
    set challengeurl(n = void 0) {
      a(n), A();
    },
    get challengejson() {
      return i();
    },
    set challengejson(n = void 0) {
      i(n), A();
    },
    get customfetch() {
      return s();
    },
    set customfetch(n = void 0) {
      s(n), A();
    },
    get debug() {
      return c();
    },
    set debug(n = !1) {
      c(n), A();
    },
    get delay() {
      return u();
    },
    set delay(n = 0) {
      u(n), A();
    },
    get expire() {
      return d();
    },
    set expire(n = void 0) {
      d(n), A();
    },
    get floating() {
      return v();
    },
    set floating(n = void 0) {
      v(n), A();
    },
    get floatinganchor() {
      return h();
    },
    set floatinganchor(n = void 0) {
      h(n), A();
    },
    get floatingoffset() {
      return g();
    },
    set floatingoffset(n = void 0) {
      g(n), A();
    },
    get floatingpersist() {
      return y();
    },
    set floatingpersist(n = !1) {
      y(n), A();
    },
    get hidefooter() {
      return x();
    },
    set hidefooter(n = !1) {
      x(n), A();
    },
    get hidelogo() {
      return L();
    },
    set hidelogo(n = !1) {
      L(n), A();
    },
    get id() {
      return H();
    },
    set id(n = void 0) {
      H(n), A();
    },
    get name() {
      return re();
    },
    set name(n = "altcha") {
      re(n), A();
    },
    get maxnumber() {
      return W();
    },
    set maxnumber(n = 1e6) {
      W(n), A();
    },
    get mockerror() {
      return G();
    },
    set mockerror(n = !1) {
      G(n), A();
    },
    get obfuscated() {
      return ne();
    },
    set obfuscated(n = void 0) {
      ne(n), A();
    },
    get plugins() {
      return Ye();
    },
    set plugins(n = void 0) {
      Ye(n), A();
    },
    get refetchonexpire() {
      return Y();
    },
    set refetchonexpire(n = !0) {
      Y(n), A();
    },
    get spamfilter() {
      return Z();
    },
    set spamfilter(n = !1) {
      Z(n), A();
    },
    get strings() {
      return Ae();
    },
    set strings(n = void 0) {
      Ae(n), A();
    },
    get test() {
      return ce();
    },
    set test(n = !1) {
      ce(n), A();
    },
    get verifyurl() {
      return de();
    },
    set verifyurl(n = void 0) {
      de(n), A();
    },
    get workers() {
      return rt();
    },
    set workers(n = Math.min(16, navigator.hardwareConcurrency || 8)) {
      rt(n), A();
    },
    get workerurl() {
      return yt();
    },
    set workerurl(n = void 0) {
      yt(n), A();
    }
  });
}
fi(["change", "keydown", "click"]);
customElements.define("altcha-widget", ji(
  no,
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
globalThis.altchaCreateWorker = (e) => e ? new Worker(new URL(e)) : new na();
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
export {
  no as Altcha
};
