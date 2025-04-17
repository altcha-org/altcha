var yi = Object.defineProperty;
var jr = (e) => {
  throw TypeError(e);
};
var Ei = (e, t, r) => t in e ? yi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var re = (e, t, r) => Ei(e, typeof t != "symbol" ? t + "" : t, r), Br = (e, t, r) => t.has(e) || jr("Cannot " + r);
var Y = (e, t, r) => (Br(e, t, "read from private field"), r ? r.call(e) : t.get(e)), qt = (e, t, r) => t.has(e) ? jr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), Ht = (e, t, r, l) => (Br(e, t, "write to private field"), l ? l.call(e, r) : t.set(e, r), r);
const on = `(function(){"use strict";const d=new TextEncoder;function p(e){return[...new Uint8Array(e)].map(t=>t.toString(16).padStart(2,"0")).join("")}async function b(e,t,r){if(typeof crypto>"u"||!("subtle"in crypto)||!("digest"in crypto.subtle))throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");return p(await crypto.subtle.digest(r.toUpperCase(),d.encode(e+t)))}function w(e,t,r="SHA-256",n=1e6,s=0){const o=new AbortController,a=Date.now();return{promise:(async()=>{for(let c=s;c<=n;c+=1){if(o.signal.aborted)return null;if(await b(t,c,r)===e)return{number:c,took:Date.now()-a}}return null})(),controller:o}}function h(e){const t=atob(e),r=new Uint8Array(t.length);for(let n=0;n<t.length;n++)r[n]=t.charCodeAt(n);return r}function g(e,t=12){const r=new Uint8Array(t);for(let n=0;n<t;n++)r[n]=e%256,e=Math.floor(e/256);return r}async function m(e,t="",r=1e6,n=0){const s="AES-GCM",o=new AbortController,a=Date.now(),l=async()=>{for(let u=n;u<=r;u+=1){if(o.signal.aborted||!c||!y)return null;try{const f=await crypto.subtle.decrypt({name:s,iv:g(u)},c,y);if(f)return{clearText:new TextDecoder().decode(f),took:Date.now()-a}}catch{}}return null};let c=null,y=null;try{y=h(e);const u=await crypto.subtle.digest("SHA-256",d.encode(t));c=await crypto.subtle.importKey("raw",u,s,!1,["decrypt"])}catch{return{promise:Promise.reject(),controller:o}}return{promise:l(),controller:o}}let i;onmessage=async e=>{const{type:t,payload:r,start:n,max:s}=e.data;let o=null;if(t==="abort")i==null||i.abort(),i=void 0;else if(t==="work"){if("obfuscated"in r){const{key:a,obfuscated:l}=r||{};o=await m(l,a,s,n)}else{const{algorithm:a,challenge:l,salt:c}=r||{};o=w(l,c,a,s,n)}i=o.controller,o.promise.then(a=>{self.postMessage(a&&{...a,worker:!0})})}}})();
`, qr = typeof self < "u" && self.Blob && new Blob([on], { type: "text/javascript;charset=utf-8" });
function xi(e) {
  let t;
  try {
    if (t = qr && (self.URL || self.webkitURL).createObjectURL(qr), !t) throw "";
    const r = new Worker(t, {
      name: e == null ? void 0 : e.name
    });
    return r.addEventListener("error", () => {
      (self.URL || self.webkitURL).revokeObjectURL(t);
    }), r;
  } catch {
    return new Worker(
      "data:text/javascript;charset=utf-8," + encodeURIComponent(on),
      {
        name: e == null ? void 0 : e.name
      }
    );
  } finally {
    t && (self.URL || self.webkitURL).revokeObjectURL(t);
  }
}
const $i = "5";
var ln;
typeof window < "u" && ((ln = window.__svelte ?? (window.__svelte = {})).v ?? (ln.v = /* @__PURE__ */ new Set())).add($i);
const ki = 1, Ci = 4, Ai = 8, Ri = 16, Ii = 1, Si = 2, Xt = "[", an = "[!", sn = "]", Je = {}, Z = Symbol(), Ti = "http://www.w3.org/1999/xhtml", Hr = !1, se = 2, fn = 4, Tt = 8, Qt = 16, ye = 32, Me = 64, Et = 128, te = 256, xt = 512, K = 1024, Ee = 2048, et = 4096, Ke = 8192, Nt = 16384, Ni = 32768, er = 65536, Li = 1 << 19, un = 1 << 20, dt = Symbol("$state"), cn = Symbol("legacy props"), Di = Symbol("");
var dn = Array.isArray, Pi = Array.prototype.indexOf, Oi = Array.from, $t = Object.keys, kt = Object.defineProperty, ze = Object.getOwnPropertyDescriptor, zi = Object.getOwnPropertyDescriptors, Fi = Object.prototype, Mi = Array.prototype, vn = Object.getPrototypeOf;
function hn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const Ui = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let ht = [], gt = [];
function gn() {
  var e = ht;
  ht = [], hn(e);
}
function _n() {
  var e = gt;
  gt = [], hn(e);
}
function tr(e) {
  ht.length === 0 && queueMicrotask(gn), ht.push(e);
}
function Vi(e) {
  gt.length === 0 && Ui(_n), gt.push(e);
}
function Wr() {
  ht.length > 0 && gn(), gt.length > 0 && _n();
}
function mn(e) {
  return e === this.v;
}
function ji(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function wn(e) {
  return !ji(e, this.v);
}
function Bi(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function qi() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Hi(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Wi() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Yi() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Zi(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Gi() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ji() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ki() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Xi() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Qi = !1;
function ue(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: mn,
    rv: 0,
    wv: 0
  };
  return r;
}
function We(e) {
  return /* @__PURE__ */ el(ue(e));
}
// @__NO_SIDE_EFFECTS__
function pn(e, t = !1) {
  const r = ue(e);
  return t || (r.equals = wn), r;
}
// @__NO_SIDE_EFFECTS__
function el(e) {
  return k !== null && !ae && (k.f & se) !== 0 && (ce === null ? ol([e]) : ce.push(e)), e;
}
function D(e, t) {
  return k !== null && !ae && Mn() && (k.f & (se | Qt)) !== 0 && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (ce === null || !ce.includes(e)) && Xi(), tl(e, t);
}
function tl(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = An(), bn(e, Ee), R !== null && (R.f & K) !== 0 && (R.f & (ye | Me)) === 0 && (me === null ? al([e]) : me.push(e))), t;
}
function bn(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var l = r.length, i = 0; i < l; i++) {
      var o = r[i], a = o.f;
      (a & Ee) === 0 && (ve(o, t), (a & (K | te)) !== 0 && ((a & se) !== 0 ? bn(
        /** @type {Derived} */
        o,
        et
      ) : Ot(
        /** @type {Effect} */
        o
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Oe(e) {
  var t = se | Ee, r = k !== null && (k.f & se) !== 0 ? (
    /** @type {Derived} */
    k
  ) : null;
  return R === null || r !== null && (r.f & te) !== 0 ? t |= te : R.f |= un, {
    ctx: B,
    deps: null,
    effects: null,
    equals: mn,
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
function yn(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      be(
        /** @type {Effect} */
        t[r]
      );
  }
}
function rl(e) {
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
function nl(e) {
  var t, r = R;
  Ie(rl(e));
  try {
    yn(e), t = In(e);
  } finally {
    Ie(r);
  }
  return t;
}
function En(e) {
  var t = nl(e), r = (Ce || (e.f & te) !== 0) && e.deps !== null ? et : K;
  ve(e, r), e.equals(t) || (e.v = t, e.wv = An());
}
function Lt(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let N = !1;
function Ge(e) {
  N = e;
}
let T;
function Ae(e) {
  if (e === null)
    throw Lt(), Je;
  return T = e;
}
function Xe() {
  return Ae(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Se(T)
  );
}
function ne(e) {
  if (N) {
    if (/* @__PURE__ */ Se(T) !== null)
      throw Lt(), Je;
    T = e;
  }
}
function il() {
  for (var e = 0, t = T; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === sn) {
        if (e === 0) return t;
        e -= 1;
      } else (r === Xt || r === an) && (e += 1);
    }
    var l = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Se(t)
    );
    t.remove(), t = l;
  }
}
function oe(e, t = null, r) {
  if (typeof e != "object" || e === null || dt in e)
    return e;
  const l = vn(e);
  if (l !== Fi && l !== Mi)
    return e;
  var i = /* @__PURE__ */ new Map(), o = dn(e), a = ue(0);
  o && i.set("length", ue(
    /** @type {any[]} */
    e.length
  ));
  var u;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, c, v) {
        (!("value" in v) || v.configurable === !1 || v.enumerable === !1 || v.writable === !1) && Gi();
        var h = i.get(c);
        return h === void 0 ? (h = ue(v.value), i.set(c, h)) : D(h, oe(v.value, u)), !0;
      },
      deleteProperty(s, c) {
        var v = i.get(c);
        if (v === void 0)
          c in s && i.set(c, ue(Z));
        else {
          if (o && typeof c == "string") {
            var h = (
              /** @type {Source<number>} */
              i.get("length")
            ), g = Number(c);
            Number.isInteger(g) && g < h.v && D(h, g);
          }
          D(v, Z), Yr(a);
        }
        return !0;
      },
      get(s, c, v) {
        var b;
        if (c === dt)
          return e;
        var h = i.get(c), g = c in s;
        if (h === void 0 && (!g || (b = ze(s, c)) != null && b.writable) && (h = ue(oe(g ? s[c] : Z, u)), i.set(c, h)), h !== void 0) {
          var _ = d(h);
          return _ === Z ? void 0 : _;
        }
        return Reflect.get(s, c, v);
      },
      getOwnPropertyDescriptor(s, c) {
        var v = Reflect.getOwnPropertyDescriptor(s, c);
        if (v && "value" in v) {
          var h = i.get(c);
          h && (v.value = d(h));
        } else if (v === void 0) {
          var g = i.get(c), _ = g == null ? void 0 : g.v;
          if (g !== void 0 && _ !== Z)
            return {
              enumerable: !0,
              configurable: !0,
              value: _,
              writable: !0
            };
        }
        return v;
      },
      has(s, c) {
        var _;
        if (c === dt)
          return !0;
        var v = i.get(c), h = v !== void 0 && v.v !== Z || Reflect.has(s, c);
        if (v !== void 0 || R !== null && (!h || (_ = ze(s, c)) != null && _.writable)) {
          v === void 0 && (v = ue(h ? oe(s[c], u) : Z), i.set(c, v));
          var g = d(v);
          if (g === Z)
            return !1;
        }
        return h;
      },
      set(s, c, v, h) {
        var M;
        var g = i.get(c), _ = c in s;
        if (o && c === "length")
          for (var b = v; b < /** @type {Source<number>} */
          g.v; b += 1) {
            var S = i.get(b + "");
            S !== void 0 ? D(S, Z) : b in s && (S = ue(Z), i.set(b + "", S));
          }
        g === void 0 ? (!_ || (M = ze(s, c)) != null && M.writable) && (g = ue(void 0), D(g, oe(v, u)), i.set(c, g)) : (_ = g.v !== Z, D(g, oe(v, u)));
        var O = Reflect.getOwnPropertyDescriptor(s, c);
        if (O != null && O.set && O.set.call(h, v), !_) {
          if (o && typeof c == "string") {
            var q = (
              /** @type {Source<number>} */
              i.get("length")
            ), F = Number(c);
            Number.isInteger(F) && F >= q.v && D(q, F + 1);
          }
          Yr(a);
        }
        return !0;
      },
      ownKeys(s) {
        d(a);
        var c = Reflect.ownKeys(s).filter((g) => {
          var _ = i.get(g);
          return _ === void 0 || _.v !== Z;
        });
        for (var [v, h] of i)
          h.v !== Z && !(v in s) && c.push(v);
        return c;
      },
      setPrototypeOf() {
        Ji();
      }
    }
  );
}
function Yr(e, t = 1) {
  D(e, e.v + t);
}
var Zr, xn, $n, kn;
function Yt() {
  if (Zr === void 0) {
    Zr = window, xn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    $n = ze(t, "firstChild").get, kn = ze(t, "nextSibling").get, e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Dt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function pe(e) {
  return $n.call(e);
}
// @__NO_SIDE_EFFECTS__
function Se(e) {
  return kn.call(e);
}
function ie(e, t) {
  if (!N)
    return /* @__PURE__ */ pe(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ pe(T)
  );
  return r === null && (r = T.appendChild(Dt())), Ae(r), r;
}
function wt(e, t) {
  if (!N) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ pe(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Se(r) : r;
  }
  return T;
}
function ge(e, t = 1, r = !1) {
  let l = N ? T : e;
  for (var i; t--; )
    i = l, l = /** @type {TemplateNode} */
    /* @__PURE__ */ Se(l);
  if (!N)
    return l;
  var o = l == null ? void 0 : l.nodeType;
  if (r && o !== 3) {
    var a = Dt();
    return l === null ? i == null || i.after(a) : l.before(a), Ae(a), a;
  }
  return Ae(l), /** @type {TemplateNode} */
  l;
}
function ll(e) {
  e.textContent = "";
}
let bt = !1, Ct = !1, At = null, Fe = !1, rr = !1;
function Gr(e) {
  rr = e;
}
let vt = [];
let k = null, ae = !1;
function Re(e) {
  k = e;
}
let R = null;
function Ie(e) {
  R = e;
}
let ce = null;
function ol(e) {
  ce = e;
}
let j = null, J = 0, me = null;
function al(e) {
  me = e;
}
let Cn = 1, Rt = 0, Ce = !1;
function An() {
  return ++Cn;
}
function _t(e) {
  var h;
  var t = e.f;
  if ((t & Ee) !== 0)
    return !0;
  if ((t & et) !== 0) {
    var r = e.deps, l = (t & te) !== 0;
    if (r !== null) {
      var i, o, a = (t & xt) !== 0, u = l && R !== null && !Ce, s = r.length;
      if (a || u) {
        var c = (
          /** @type {Derived} */
          e
        ), v = c.parent;
        for (i = 0; i < s; i++)
          o = r[i], (a || !((h = o == null ? void 0 : o.reactions) != null && h.includes(c))) && (o.reactions ?? (o.reactions = [])).push(c);
        a && (c.f ^= xt), u && v !== null && (v.f & te) === 0 && (c.f ^= te);
      }
      for (i = 0; i < s; i++)
        if (o = r[i], _t(
          /** @type {Derived} */
          o
        ) && En(
          /** @type {Derived} */
          o
        ), o.wv > e.wv)
          return !0;
    }
    (!l || R !== null && !Ce) && ve(e, K);
  }
  return !1;
}
function sl(e, t) {
  for (var r = t; r !== null; ) {
    if ((r.f & Et) !== 0)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= Et;
      }
    r = r.parent;
  }
  throw bt = !1, e;
}
function fl(e) {
  return (e.f & Nt) === 0 && (e.parent === null || (e.parent.f & Et) === 0);
}
function Pt(e, t, r, l) {
  if (bt) {
    if (r === null && (bt = !1), fl(t))
      throw e;
    return;
  }
  r !== null && (bt = !0);
  {
    sl(e, t);
    return;
  }
}
function Rn(e, t, r = !0) {
  var l = e.reactions;
  if (l !== null)
    for (var i = 0; i < l.length; i++) {
      var o = l[i];
      (o.f & se) !== 0 ? Rn(
        /** @type {Derived} */
        o,
        t,
        !1
      ) : t === o && (r ? ve(o, Ee) : (o.f & K) !== 0 && ve(o, et), Ot(
        /** @type {Effect} */
        o
      ));
    }
}
function In(e) {
  var _;
  var t = j, r = J, l = me, i = k, o = Ce, a = ce, u = B, s = ae, c = e.f;
  j = /** @type {null | Value[]} */
  null, J = 0, me = null, Ce = (c & te) !== 0 && (ae || !Fe || k === null), k = (c & (ye | Me)) === 0 ? e : null, ce = null, Kr(e.ctx), ae = !1, Rt++;
  try {
    var v = (
      /** @type {Function} */
      (0, e.fn)()
    ), h = e.deps;
    if (j !== null) {
      var g;
      if (It(e, J), h !== null && J > 0)
        for (h.length = J + j.length, g = 0; g < j.length; g++)
          h[J + g] = j[g];
      else
        e.deps = h = j;
      if (!Ce)
        for (g = J; g < h.length; g++)
          ((_ = h[g]).reactions ?? (_.reactions = [])).push(e);
    } else h !== null && J < h.length && (It(e, J), h.length = J);
    if (Mn() && me !== null && !ae && h !== null && (e.f & (se | et | Ee)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      me.length; g++)
        Rn(
          me[g],
          /** @type {Effect} */
          e
        );
    return i !== null && Rt++, v;
  } finally {
    j = t, J = r, me = l, k = i, Ce = o, ce = a, Kr(u), ae = s;
  }
}
function ul(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var l = Pi.call(r, e);
    if (l !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[l] = r[i], r.pop());
    }
  }
  r === null && (t.f & se) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (j === null || !j.includes(t)) && (ve(t, et), (t.f & (te | xt)) === 0 && (t.f ^= xt), yn(
    /** @type {Derived} **/
    t
  ), It(
    /** @type {Derived} **/
    t,
    0
  ));
}
function It(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var l = t; l < r.length; l++)
      ul(e, r[l]);
}
function nr(e) {
  var t = e.f;
  if ((t & Nt) === 0) {
    ve(e, K);
    var r = R, l = B, i = Fe;
    R = e, Fe = !0;
    try {
      (t & Qt) !== 0 ? yl(e) : Nn(e), Tn(e);
      var o = In(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = Cn;
      var a = e.deps, u;
      Hr && Qi && e.f & Ee;
    } catch (s) {
      Pt(s, e, r, l || e.ctx);
    } finally {
      Fe = i, R = r;
    }
  }
}
function cl() {
  try {
    Wi();
  } catch (e) {
    if (At !== null)
      Pt(e, At, null);
    else
      throw e;
  }
}
function Sn() {
  var e = Fe;
  try {
    var t = 0;
    for (Fe = !0; vt.length > 0; ) {
      t++ > 1e3 && cl();
      var r = vt, l = r.length;
      vt = [];
      for (var i = 0; i < l; i++) {
        var o = vl(r[i]);
        dl(o);
      }
    }
  } finally {
    Ct = !1, Fe = e, At = null;
  }
}
function dl(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var l = e[r];
      if ((l.f & (Nt | Ke)) === 0)
        try {
          _t(l) && (nr(l), l.deps === null && l.first === null && l.nodes_start === null && (l.teardown === null ? Ln(l) : l.fn = null));
        } catch (i) {
          Pt(i, l, null, l.ctx);
        }
    }
}
function Ot(e) {
  Ct || (Ct = !0, queueMicrotask(Sn));
  for (var t = At = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (Me | ye)) !== 0) {
      if ((r & K) === 0) return;
      t.f ^= K;
    }
  }
  vt.push(t);
}
function vl(e) {
  for (var t = [], r = e; r !== null; ) {
    var l = r.f, i = (l & (ye | Me)) !== 0, o = i && (l & K) !== 0;
    if (!o && (l & Ke) === 0) {
      if ((l & fn) !== 0)
        t.push(r);
      else if (i)
        r.f ^= K;
      else {
        var a = k;
        try {
          k = r, _t(r) && nr(r);
        } catch (c) {
          Pt(c, r, null, r.ctx);
        } finally {
          k = a;
        }
      }
      var u = r.first;
      if (u !== null) {
        r = u;
        continue;
      }
    }
    var s = r.parent;
    for (r = r.next; r === null && s !== null; )
      r = s.next, s = s.parent;
  }
  return t;
}
function E(e) {
  var t;
  for (Wr(); vt.length > 0; )
    Ct = !0, Sn(), Wr();
  return (
    /** @type {T} */
    t
  );
}
async function hl() {
  await Promise.resolve(), E();
}
function d(e) {
  var t = e.f, r = (t & se) !== 0;
  if (k !== null && !ae) {
    ce !== null && ce.includes(e) && Ki();
    var l = k.deps;
    e.rv < Rt && (e.rv = Rt, j === null && l !== null && l[J] === e ? J++ : j === null ? j = [e] : (!Ce || !j.includes(e)) && j.push(e));
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var i = (
      /** @type {Derived} */
      e
    ), o = i.parent;
    o !== null && (o.f & te) === 0 && (i.f ^= te);
  }
  return r && (i = /** @type {Derived} */
  e, _t(i) && En(i)), e.v;
}
function Qe(e) {
  var t = ae;
  try {
    return ae = !0, e();
  } finally {
    ae = t;
  }
}
const gl = -7169;
function ve(e, t) {
  e.f = e.f & gl | t;
}
function _l(e) {
  R === null && k === null && Hi(), k !== null && (k.f & te) !== 0 && R === null && qi(), rr && Bi();
}
function ml(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Ue(e, t, r, l = !0) {
  var i = R, o = {
    ctx: B,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Ee,
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
      nr(o), o.f |= Ni;
    } catch (s) {
      throw be(o), s;
    }
  else t !== null && Ot(o);
  var a = r && o.deps === null && o.first === null && o.nodes_start === null && o.teardown === null && (o.f & (un | Et)) === 0;
  if (!a && l && (i !== null && ml(o, i), k !== null && (k.f & se) !== 0)) {
    var u = (
      /** @type {Derived} */
      k
    );
    (u.effects ?? (u.effects = [])).push(o);
  }
  return o;
}
function wl(e) {
  const t = Ue(Tt, null, !1);
  return ve(t, K), t.teardown = e, t;
}
function Zt(e) {
  _l();
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
    var l = ir(e);
    return l;
  }
}
function pl(e) {
  const t = Ue(Me, e, !0);
  return () => {
    be(t);
  };
}
function bl(e) {
  const t = Ue(Me, e, !0);
  return (r = {}) => new Promise((l) => {
    r.outro ? Gt(t, () => {
      be(t), l(void 0);
    }) : (be(t), l(void 0));
  });
}
function ir(e) {
  return Ue(fn, e, !1);
}
function lr(e) {
  return Ue(Tt, e, !0);
}
function ut(e, t = [], r = Oe) {
  const l = t.map(r);
  return or(() => e(...l.map(d)));
}
function or(e, t = 0) {
  return Ue(Tt | Qt | t, e, !0);
}
function St(e, t = !0) {
  return Ue(Tt | ye, e, !0, t);
}
function Tn(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = rr, l = k;
    Gr(!0), Re(null);
    try {
      t.call(null);
    } finally {
      Gr(r), Re(l);
    }
  }
}
function Nn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var l = r.next;
    (r.f & Me) !== 0 ? r.parent = null : be(r, t), r = l;
  }
}
function yl(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & ye) === 0 && be(t), t = r;
  }
}
function be(e, t = !0) {
  var r = !1;
  if ((t || (e.f & Li) !== 0) && e.nodes_start !== null) {
    for (var l = e.nodes_start, i = e.nodes_end; l !== null; ) {
      var o = l === i ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Se(l)
      );
      l.remove(), l = o;
    }
    r = !0;
  }
  Nn(e, t && !r), It(e, 0), ve(e, Nt);
  var a = e.transitions;
  if (a !== null)
    for (const s of a)
      s.stop();
  Tn(e);
  var u = e.parent;
  u !== null && u.first !== null && Ln(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function Ln(e) {
  var t = e.parent, r = e.prev, l = e.next;
  r !== null && (r.next = l), l !== null && (l.prev = r), t !== null && (t.first === e && (t.first = l), t.last === e && (t.last = r));
}
function Gt(e, t) {
  var r = [];
  Dn(e, r, !0), El(r, () => {
    be(e), t && t();
  });
}
function El(e, t) {
  var r = e.length;
  if (r > 0) {
    var l = () => --r || t();
    for (var i of e)
      i.out(l);
  } else
    t();
}
function Dn(e, t, r) {
  if ((e.f & Ke) === 0) {
    if (e.f ^= Ke, e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || r) && t.push(a);
    for (var l = e.first; l !== null; ) {
      var i = l.next, o = (l.f & er) !== 0 || (l.f & ye) !== 0;
      Dn(l, t, o ? r : !1), l = i;
    }
  }
}
function Jr(e) {
  Pn(e, !0);
}
function Pn(e, t) {
  if ((e.f & Ke) !== 0) {
    e.f ^= Ke, (e.f & K) === 0 && (e.f ^= K), _t(e) && (ve(e, Ee), Ot(e));
    for (var r = e.first; r !== null; ) {
      var l = r.next, i = (r.f & er) !== 0 || (r.f & ye) !== 0;
      Pn(r, i ? t : !1), r = l;
    }
    if (e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || t) && o.in();
  }
}
function On(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let B = null;
function Kr(e) {
  B = e;
}
function zn(e, t = !1, r) {
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
function Fn(e) {
  const t = B;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const a = t.e;
    if (a !== null) {
      var r = R, l = k;
      t.e = null;
      try {
        for (var i = 0; i < a.length; i++) {
          var o = a[i];
          Ie(o.effect), Re(o.reaction), ir(o.fn);
        }
      } finally {
        Ie(r), Re(l);
      }
    }
    B = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Mn() {
  return !0;
}
const xl = ["touchstart", "touchmove"];
function $l(e) {
  return xl.includes(e);
}
let Xr = !1;
function Un() {
  Xr || (Xr = !0, document.addEventListener(
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
function Vn(e) {
  var t = k, r = R;
  Re(null), Ie(null);
  try {
    return e();
  } finally {
    Re(t), Ie(r);
  }
}
function kl(e, t, r, l = r) {
  e.addEventListener(t, () => Vn(r));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), l(!0);
  } : e.__on_r = () => l(!0), Un();
}
const jn = /* @__PURE__ */ new Set(), Jt = /* @__PURE__ */ new Set();
function Cl(e, t, r, l = {}) {
  function i(o) {
    if (l.capture || ct.call(t, o), !o.cancelBubble)
      return Vn(() => r == null ? void 0 : r.call(this, o));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? tr(() => {
    t.addEventListener(e, i, l);
  }) : t.addEventListener(e, i, l), i;
}
function Al(e, t, r, l, i) {
  var o = { capture: l, passive: i }, a = Cl(e, t, r, o);
  (t === document.body || t === window || t === document) && wl(() => {
    t.removeEventListener(e, a, o);
  });
}
function Rl(e) {
  for (var t = 0; t < e.length; t++)
    jn.add(e[t]);
  for (var r of Jt)
    r(e);
}
function ct(e) {
  var F;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), l = e.type, i = ((F = e.composedPath) == null ? void 0 : F.call(e)) || [], o = (
    /** @type {null | Element} */
    i[0] || e.target
  ), a = 0, u = e.__root;
  if (u) {
    var s = i.indexOf(u);
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
    kt(e, "currentTarget", {
      configurable: !0,
      get() {
        return o || r;
      }
    });
    var v = k, h = R;
    Re(null), Ie(null);
    try {
      for (var g, _ = []; o !== null; ) {
        var b = o.assignedSlot || o.parentNode || /** @type {any} */
        o.host || null;
        try {
          var S = o["__" + l];
          if (S != null && (!/** @type {any} */
          o.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === o))
            if (dn(S)) {
              var [O, ...q] = S;
              O.apply(o, [e, ...q]);
            } else
              S.call(o, e);
        } catch (M) {
          g ? _.push(M) : g = M;
        }
        if (e.cancelBubble || b === t || b === null)
          break;
        o = b;
      }
      if (g) {
        for (let M of _)
          queueMicrotask(() => {
            throw M;
          });
        throw g;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Re(v), Ie(h);
    }
  }
}
function ar(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function de(e, t) {
  var r = (
    /** @type {Effect} */
    R
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function Te(e, t) {
  var r = (t & Ii) !== 0, l = (t & Si) !== 0, i, o = !e.startsWith("<!>");
  return () => {
    if (N)
      return de(T, null), T;
    i === void 0 && (i = ar(o ? e : "<!>" + e), r || (i = /** @type {Node} */
    /* @__PURE__ */ pe(i)));
    var a = (
      /** @type {TemplateNode} */
      l || xn ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ pe(a)
      ), s = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      de(u, s);
    } else
      de(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function Il(e, t, r = "svg") {
  var l = !e.startsWith("<!>"), i = `<${r}>${l ? e : "<!>" + e}</${r}>`, o;
  return () => {
    if (N)
      return de(T, null), T;
    if (!o) {
      var a = (
        /** @type {DocumentFragment} */
        ar(i)
      ), u = (
        /** @type {Element} */
        /* @__PURE__ */ pe(a)
      );
      o = /** @type {Element} */
      /* @__PURE__ */ pe(u);
    }
    var s = (
      /** @type {TemplateNode} */
      o.cloneNode(!0)
    );
    return de(s, s), s;
  };
}
function Wt() {
  if (N)
    return de(T, null), T;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = Dt();
  return e.append(t, r), de(t, r), e;
}
function G(e, t) {
  if (N) {
    R.nodes_end = T, Xe();
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
function Sl(e, t) {
  Yt(), t.intro = t.intro ?? !1;
  const r = t.target, l = N, i = T;
  try {
    for (var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ pe(r)
    ); o && (o.nodeType !== 8 || /** @type {Comment} */
    o.data !== Xt); )
      o = /** @type {TemplateNode} */
      /* @__PURE__ */ Se(o);
    if (!o)
      throw Je;
    Ge(!0), Ae(
      /** @type {Comment} */
      o
    ), Xe();
    const a = qn(e, { ...t, anchor: o });
    if (T === null || T.nodeType !== 8 || /** @type {Comment} */
    T.data !== sn)
      throw Lt(), Je;
    return Ge(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === Je)
      return t.recover === !1 && Yi(), Yt(), ll(r), Ge(!1), Bn(e, t);
    throw a;
  } finally {
    Ge(l), Ae(i);
  }
}
const Ye = /* @__PURE__ */ new Map();
function qn(e, { target: t, anchor: r, props: l = {}, events: i, context: o, intro: a = !0 }) {
  Yt();
  var u = /* @__PURE__ */ new Set(), s = (h) => {
    for (var g = 0; g < h.length; g++) {
      var _ = h[g];
      if (!u.has(_)) {
        u.add(_);
        var b = $l(_);
        t.addEventListener(_, ct, { passive: b });
        var S = Ye.get(_);
        S === void 0 ? (document.addEventListener(_, ct, { passive: b }), Ye.set(_, 1)) : Ye.set(_, S + 1);
      }
    }
  };
  s(Oi(jn)), Jt.add(s);
  var c = void 0, v = bl(() => {
    var h = r ?? t.appendChild(Dt());
    return St(() => {
      if (o) {
        zn({});
        var g = (
          /** @type {ComponentContext} */
          B
        );
        g.c = o;
      }
      i && (l.$$events = i), N && de(
        /** @type {TemplateNode} */
        h,
        null
      ), c = e(h, l) || {}, N && (R.nodes_end = T), o && Fn();
    }), () => {
      var b;
      for (var g of u) {
        t.removeEventListener(g, ct);
        var _ = (
          /** @type {number} */
          Ye.get(g)
        );
        --_ === 0 ? (document.removeEventListener(g, ct), Ye.delete(g)) : Ye.set(g, _);
      }
      Jt.delete(s), h !== r && ((b = h.parentNode) == null || b.removeChild(h));
    };
  });
  return Kt.set(c, v), c;
}
let Kt = /* @__PURE__ */ new WeakMap();
function Tl(e, t) {
  const r = Kt.get(e);
  return r ? (Kt.delete(e), r(t)) : Promise.resolve();
}
function _e(e, t, [r, l] = [0, 0]) {
  N && r === 0 && Xe();
  var i = e, o = null, a = null, u = Z, s = r > 0 ? er : 0, c = !1;
  const v = (g, _ = !0) => {
    c = !0, h(_, g);
  }, h = (g, _) => {
    if (u === (u = g)) return;
    let b = !1;
    if (N && l !== -1) {
      if (r === 0) {
        const O = (
          /** @type {Comment} */
          i.data
        );
        O === Xt ? l = 0 : O === an ? l = 1 / 0 : (l = parseInt(O.substring(1)), l !== l && (l = u ? 1 / 0 : -1));
      }
      const S = l > r;
      !!u === S && (i = il(), Ae(i), Ge(!1), b = !0, l = -1);
    }
    u ? (o ? Jr(o) : _ && (o = St(() => _(i))), a && Gt(a, () => {
      a = null;
    })) : (a ? Jr(a) : _ && (a = St(() => _(i, [r + 1, l]))), o && Gt(o, () => {
      o = null;
    })), b && Ge(!0);
  };
  or(() => {
    c = !1, t(v), c || h(null, null);
  }, s), N && (i = T);
}
function Ze(e, t, r, l, i) {
  var o = e, a = "", u;
  or(() => {
    if (a === (a = t() ?? "")) {
      N && Xe();
      return;
    }
    u !== void 0 && (be(u), u = void 0), a !== "" && (u = St(() => {
      if (N) {
        T.data;
        for (var s = Xe(), c = s; s !== null && (s.nodeType !== 8 || /** @type {Comment} */
        s.data !== ""); )
          c = s, s = /** @type {TemplateNode} */
          /* @__PURE__ */ Se(s);
        if (s === null)
          throw Lt(), Je;
        de(T, c), o = Ae(s);
        return;
      }
      var v = a + "", h = ar(v);
      de(
        /** @type {TemplateNode} */
        /* @__PURE__ */ pe(h),
        /** @type {TemplateNode} */
        h.lastChild
      ), o.before(h);
    }));
  });
}
function Nl(e, t, r, l, i) {
  var u;
  N && Xe();
  var o = (u = t.$$slots) == null ? void 0 : u[r], a = !1;
  o === !0 && (o = t.children, a = !0), o === void 0 || o(e, a ? () => l : l);
}
function Ll(e, t) {
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
const Qr = [...` 	
\r\f \v\uFEFF`];
function Dl(e, t, r) {
  var l = "" + e;
  if (r) {
    for (var i in r)
      if (r[i])
        l = l ? l + " " + i : i;
      else if (l.length)
        for (var o = i.length, a = 0; (a = l.indexOf(i, a)) >= 0; ) {
          var u = a + o;
          (a === 0 || Qr.includes(l[a - 1])) && (u === l.length || Qr.includes(l[u])) ? l = (a === 0 ? "" : l.substring(0, a)) + l.substring(u + 1) : a = u;
        }
  }
  return l === "" ? null : l;
}
function Pl(e, t, r, l, i, o) {
  var a = e.__className;
  if (N || a !== r) {
    var u = Dl(r, l, o);
    (!N || u !== e.getAttribute("class")) && (u == null ? e.removeAttribute("class") : e.className = u), e.__className = r;
  } else if (o && i !== o)
    for (var s in o) {
      var c = !!o[s];
      (i == null || c !== !!i[s]) && e.classList.toggle(s, c);
    }
  return o;
}
const Ol = Symbol("is custom element"), zl = Symbol("is html");
function en(e) {
  if (N) {
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
    e.__on_r = r, Vi(r), Un();
  }
}
function Fl(e, t) {
  var r = Hn(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function le(e, t, r, l) {
  var i = Hn(e);
  N && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || i[t] !== (i[t] = r) && (t === "loading" && (e[Di] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Ml(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Hn(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Ol]: e.nodeName.includes("-"),
      [zl]: e.namespaceURI === Ti
    })
  );
}
var tn = /* @__PURE__ */ new Map();
function Ml(e) {
  var t = tn.get(e.nodeName);
  if (t) return t;
  tn.set(e.nodeName, t = []);
  for (var r, l = e, i = Element.prototype; i !== l; ) {
    r = zi(l);
    for (var o in r)
      r[o].set && t.push(o);
    l = vn(l);
  }
  return t;
}
function Ul(e, t, r = t) {
  kl(e, "change", (l) => {
    var i = l ? e.defaultChecked : e.checked;
    r(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (N && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  Qe(t) == null) && r(e.checked), lr(() => {
    var l = t();
    e.checked = !!l;
  });
}
function rn(e, t) {
  return e === t || (e == null ? void 0 : e[dt]) === t;
}
function nn(e = {}, t, r, l) {
  return ir(() => {
    var i, o;
    return lr(() => {
      i = o, o = [], Qe(() => {
        e !== r(...o) && (t(e, ...o), i && rn(r(...i), e) && t(null, ...i));
      });
    }), () => {
      tr(() => {
        o && rn(r(...o), e) && t(null, ...o);
      });
    };
  }), e;
}
function Wn(e) {
  B === null && On(), Zt(() => {
    const t = Qe(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Vl(e) {
  B === null && On(), Wn(() => () => Qe(e));
}
let pt = !1;
function jl(e) {
  var t = pt;
  try {
    return pt = !1, [e(), pt];
  } finally {
    pt = t;
  }
}
function C(e, t, r, l) {
  var Ne;
  var i = (r & ki) !== 0, o = !0, a = (r & Ai) !== 0, u = (r & Ri) !== 0, s = !1, c;
  a ? [c, s] = jl(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var v = dt in e || cn in e, h = a && (((Ne = ze(e, t)) == null ? void 0 : Ne.set) ?? (v && t in e && ((z) => e[t] = z))) || void 0, g = (
    /** @type {V} */
    l
  ), _ = !0, b = !1, S = () => (b = !0, _ && (_ = !1, u ? g = Qe(
    /** @type {() => V} */
    l
  ) : g = /** @type {V} */
  l), g);
  c === void 0 && l !== void 0 && (h && o && Zi(), c = S(), h && h(c));
  var O;
  if (O = () => {
    var z = (
      /** @type {V} */
      e[t]
    );
    return z === void 0 ? S() : (_ = !0, b = !1, z);
  }, (r & Ci) === 0)
    return O;
  if (h) {
    var q = e.$$legacy;
    return function(z, U) {
      return arguments.length > 0 ? ((!U || q || s) && h(U ? O() : z), z) : O();
    };
  }
  var F = !1, M = /* @__PURE__ */ pn(c), H = /* @__PURE__ */ Oe(() => {
    var z = O(), U = d(M);
    return F ? (F = !1, U) : M.v = z;
  });
  return i || (H.equals = wn), function(z, U) {
    if (arguments.length > 0) {
      const he = U ? d(H) : a ? oe(z) : z;
      return H.equals(he) || (F = !0, D(M, he), b && g !== void 0 && (g = he), Qe(() => d(H))), z;
    }
    return d(H);
  };
}
function Bl(e) {
  return new ql(e);
}
var we, ee;
class ql {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    qt(this, we);
    /** @type {Record<string, any>} */
    qt(this, ee);
    var o;
    var r = /* @__PURE__ */ new Map(), l = (a, u) => {
      var s = /* @__PURE__ */ pn(u);
      return r.set(a, s), s;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, u) {
          return d(r.get(u) ?? l(u, Reflect.get(a, u)));
        },
        has(a, u) {
          return u === cn ? !0 : (d(r.get(u) ?? l(u, Reflect.get(a, u))), Reflect.has(a, u));
        },
        set(a, u, s) {
          return D(r.get(u) ?? l(u, s), s), Reflect.set(a, u, s);
        }
      }
    );
    Ht(this, ee, (t.hydrate ? Sl : Bn)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((o = t == null ? void 0 : t.props) != null && o.$$host) || t.sync === !1) && E(), Ht(this, we, i.$$events);
    for (const a of Object.keys(Y(this, ee)))
      a === "$set" || a === "$destroy" || a === "$on" || kt(this, a, {
        get() {
          return Y(this, ee)[a];
        },
        /** @param {any} value */
        set(u) {
          Y(this, ee)[a] = u;
        },
        enumerable: !0
      });
    Y(this, ee).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, Y(this, ee).$destroy = () => {
      Tl(Y(this, ee));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    Y(this, ee).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    Y(this, we)[t] = Y(this, we)[t] || [];
    const l = (...i) => r.call(this, ...i);
    return Y(this, we)[t].push(l), () => {
      Y(this, we)[t] = Y(this, we)[t].filter(
        /** @param {any} fn */
        (i) => i !== l
      );
    };
  }
  $destroy() {
    Y(this, ee).$destroy();
  }
}
we = new WeakMap(), ee = new WeakMap();
let Yn;
typeof HTMLElement == "function" && (Yn = class extends HTMLElement {
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
        return (o) => {
          const a = document.createElement("slot");
          i !== "default" && (a.name = i), G(o, a);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, l = Hl(this);
      for (const i of this.$$s)
        i in l && (i === "default" && !this.$$d.children ? (this.$$d.children = t(i), r.default = !0) : r[i] = t(i));
      for (const i of this.attributes) {
        const o = this.$$g_p(i.name);
        o in this.$$d || (this.$$d[o] = yt(o, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = Bl({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = pl(() => {
        lr(() => {
          var i;
          this.$$r = !0;
          for (const o of $t(this.$$c)) {
            if (!((i = this.$$p_d[o]) != null && i.reflect)) continue;
            this.$$d[o] = this.$$c[o];
            const a = yt(
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
    return $t(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function yt(e, t, r, l) {
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
function Hl(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function Wl(e, t, r, l, i, o) {
  let a = class extends Yn {
    constructor() {
      super(e, r, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return $t(t).map(
        (u) => (t[u].attribute || u).toLowerCase()
      );
    }
  };
  return $t(t).forEach((u) => {
    kt(a.prototype, u, {
      get() {
        return this.$$c && u in this.$$c ? this.$$c[u] : this.$$d[u];
      },
      set(s) {
        var h;
        s = yt(u, s, t), this.$$d[u] = s;
        var c = this.$$c;
        if (c) {
          var v = (h = ze(c, u)) == null ? void 0 : h.get;
          v ? c[u] = s : c.$set({ [u]: s });
        }
      }
    });
  }), l.forEach((u) => {
    kt(a.prototype, u, {
      get() {
        var s;
        return (s = this.$$c) == null ? void 0 : s[u];
      }
    });
  }), e.element = /** @type {any} */
  a, a;
}
const Zn = new TextEncoder();
function Yl(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function Zl(e, t = "SHA-256", r = 1e5) {
  const l = Date.now().toString(16);
  e || (e = Math.round(Math.random() * r));
  const i = await Gn(l, e, t);
  return {
    algorithm: t,
    challenge: i,
    salt: l,
    signature: ""
  };
}
async function Gn(e, t, r) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return Yl(
    await crypto.subtle.digest(
      r.toUpperCase(),
      Zn.encode(e + t)
    )
  );
}
function Gl(e, t, r = "SHA-256", l = 1e6, i = 0) {
  const o = new AbortController(), a = Date.now();
  return {
    promise: (async () => {
      for (let s = i; s <= l; s += 1) {
        if (o.signal.aborted)
          return null;
        if (await Gn(t, s, r) === e)
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
function Jl() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function Kl(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let l = 0; l < t.length; l++)
    r[l] = t.charCodeAt(l);
  return r;
}
function Xl(e, t = 12) {
  const r = new Uint8Array(t);
  for (let l = 0; l < t; l++)
    r[l] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function Ql(e, t = "", r = 1e6, l = 0) {
  const i = "AES-GCM", o = new AbortController(), a = Date.now(), u = async () => {
    for (let v = l; v <= r; v += 1) {
      if (o.signal.aborted || !s || !c)
        return null;
      try {
        const h = await crypto.subtle.decrypt(
          {
            name: i,
            iv: Xl(v)
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
    c = Kl(e);
    const v = await crypto.subtle.digest(
      "SHA-256",
      Zn.encode(t)
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
    promise: u(),
    controller: o
  };
}
var p = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(p || {}), eo = /* @__PURE__ */ Il('<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="svelte-ddsc3z"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25" class="svelte-ddsc3z"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor" class="altcha-spinner svelte-ddsc3z"></path></svg>'), to = /* @__PURE__ */ Te('<input type="hidden" class="svelte-ddsc3z">'), ro = /* @__PURE__ */ Te('<div class="svelte-ddsc3z"><a target="_blank" class="altcha-logo svelte-ddsc3z"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-ddsc3z"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor" class="svelte-ddsc3z"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor" class="svelte-ddsc3z"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor" class="svelte-ddsc3z"></path></svg></a></div>'), no = /* @__PURE__ */ Te('<div class="svelte-ddsc3z"><!></div>'), io = /* @__PURE__ */ Te('<div class="svelte-ddsc3z"><!></div>'), lo = /* @__PURE__ */ Te('<div class="altcha-error svelte-ddsc3z"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="svelte-ddsc3z"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" class="svelte-ddsc3z"></path></svg> <!></div>'), oo = /* @__PURE__ */ Te('<div class="altcha-footer svelte-ddsc3z"><div class="svelte-ddsc3z"><!></div></div>'), ao = /* @__PURE__ */ Te('<div class="altcha-anchor-arrow svelte-ddsc3z"></div>'), so = /* @__PURE__ */ Te('<!> <div class="altcha svelte-ddsc3z"><div class="altcha-main svelte-ddsc3z"><!> <div><input type="checkbox" class="svelte-ddsc3z"> <!></div> <div class="altcha-label svelte-ddsc3z"><label class="svelte-ddsc3z"><!></label></div> <!></div> <!> <!> <!></div>', 1);
const fo = {
  hash: "svelte-ddsc3z",
  code: `.altcha.svelte-ddsc3z {background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);position:relative;text-align:left;}.altcha.svelte-ddsc3z:focus-within {border-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating].svelte-ddsc3z {background:var(--altcha-color-base, white);display:none;filter:drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2));left:-100%;position:fixed;top:-100%;width:var(--altcha-max-width, 260px);z-index:999999;}.altcha[data-floating=top].svelte-ddsc3z .altcha-anchor-arrow:where(.svelte-ddsc3z) {border-bottom-color:transparent;border-top-color:var(--altcha-color-border, #a0a0a0);bottom:-12px;top:auto;}.altcha[data-floating=bottom].svelte-ddsc3z:focus-within::after {border-bottom-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating=top].svelte-ddsc3z:focus-within::after {border-top-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating].svelte-ddsc3z:not([data-state=unverified]) {display:block;}.altcha-anchor-arrow.svelte-ddsc3z {border:6px solid transparent;border-bottom-color:var(--altcha-color-border, #a0a0a0);content:"";height:0;left:12px;position:absolute;top:-12px;width:0;}.altcha-main.svelte-ddsc3z {align-items:center;display:flex;gap:0.4rem;padding:0.7rem;}.altcha-label.svelte-ddsc3z {flex-grow:1;}.altcha-label.svelte-ddsc3z label:where(.svelte-ddsc3z) {cursor:pointer;}.altcha-logo.svelte-ddsc3z {color:currentColor;opacity:0.3;}.altcha-logo.svelte-ddsc3z:hover {opacity:1;}.altcha-error.svelte-ddsc3z {color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem;}.altcha-footer.svelte-ddsc3z {align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.4;padding:0.2rem 0.7rem;text-align:right;}.altcha-footer.svelte-ddsc3z:hover {opacity:1;}.altcha-footer.svelte-ddsc3z > :where(.svelte-ddsc3z):first-child {flex-grow:1;}.altcha-footer.svelte-ddsc3z a {color:currentColor;}.altcha-checkbox.svelte-ddsc3z {display:flex;align-items:center;height:24px;width:24px;}.altcha-checkbox.svelte-ddsc3z input:where(.svelte-ddsc3z) {width:18px;height:18px;margin:0;}.altcha-hidden.svelte-ddsc3z {display:none;}.altcha-spinner.svelte-ddsc3z {
  animation: svelte-ddsc3z-altcha-spinner 0.75s infinite linear;transform-origin:center;}

@keyframes svelte-ddsc3z-altcha-spinner {
  100% {
    transform: rotate(360deg);
  }
}`
};
function uo(e, t) {
  var Mr, Ur;
  zn(t, !0), Ll(e, fo);
  let r = C(t, "auto", 7, void 0), l = C(t, "blockspam", 7, void 0), i = C(t, "challengeurl", 7, void 0), o = C(t, "challengejson", 7, void 0), a = C(t, "customfetch", 7, void 0), u = C(t, "debug", 7, !1), s = C(t, "delay", 7, 0), c = C(t, "expire", 7, void 0), v = C(t, "floating", 7, void 0), h = C(t, "floatinganchor", 7, void 0), g = C(t, "floatingoffset", 7, void 0), _ = C(t, "floatingpersist", 7, !1), b = C(t, "hidefooter", 7, !1), S = C(t, "hidelogo", 7, !1), O = C(t, "id", 7, void 0), q = C(t, "name", 7, "altcha"), F = C(t, "maxnumber", 7, 1e6), M = C(t, "mockerror", 7, !1), H = C(t, "obfuscated", 7, void 0), Ne = C(t, "plugins", 7, void 0), z = C(t, "refetchonexpire", 7, !0), U = C(t, "spamfilter", 7, !1), he = C(t, "strings", 7, void 0), X = C(t, "test", 7, !1), xe = C(t, "verifyurl", 7, void 0), Ve = C(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), tt = C(t, "workerurl", 7, void 0);
  const sr = ["SHA-256", "SHA-384", "SHA-512"], fr = "Visit Altcha.org", ur = "https://altcha.org/", rt = (n, f) => {
    t.$$host.dispatchEvent(new CustomEvent(n, { detail: f }));
  }, cr = (Ur = (Mr = document.documentElement.lang) == null ? void 0 : Mr.split("-")) == null ? void 0 : Ur[0], zt = /* @__PURE__ */ Oe(() => {
    var n;
    return i() && new URL(i(), location.origin).host.endsWith(".altcha.org") && !!((n = i()) != null && n.includes("apiKey=ckey_"));
  }), Ft = /* @__PURE__ */ Oe(() => o() ? xr(o()) : void 0), dr = /* @__PURE__ */ Oe(() => he() ? xr(he()) : {}), Q = /* @__PURE__ */ Oe(() => {
    var n;
    return {
      ariaLinkLabel: fr,
      error: "Verification failed. Try again later.",
      expired: "Verification expired. Try again.",
      footer: `Protected by <a href="${ur}" target="_blank" aria-label="${((n = d(dr)) == null ? void 0 : n.ariaLinkLabel) || fr}">ALTCHA</a>`,
      label: "I'm not a robot",
      verified: "Verified",
      verifying: "Verifying...",
      waitAlert: "Verifying... please wait.",
      ...d(dr)
    };
  }), vr = /* @__PURE__ */ Oe(() => O() || `${q()}_checkbox`);
  let je = We(!1), x = We(oe(p.UNVERIFIED)), V = We(void 0), nt = We(null), Be = null, w = null, qe = We(null), fe = null, $e = [], Le = We(null);
  Zt(() => {
    ni(d(qe));
  }), Zt(() => {
    ii(d(x));
  }), Vl(() => {
    Jn(), w && (w.removeEventListener("submit", pr), w.removeEventListener("reset", br), w.removeEventListener("focusin", wr), w = null), fe && (clearTimeout(fe), fe = null), document.removeEventListener("click", _r), document.removeEventListener("scroll", mr), window.removeEventListener("resize", Er);
  }), Wn(() => {
    var n;
    I("mounted", "1.4.2"), I("workers", Ve()), ti(), I("plugins", $e.length ? $e.map((f) => f.constructor.pluginName).join(", ") : "none"), X() && I("using test mode"), c() && Mt(c()), r() !== void 0 && I("auto", r()), v() !== void 0 && $r(v()), w = (n = d(V)) == null ? void 0 : n.closest("form"), w && (w.addEventListener("submit", pr, { capture: !0 }), w.addEventListener("reset", br), (r() === "onfocus" || _() === "focus") && w.addEventListener("focusin", wr)), r() === "onload" && (H() ? it() : ke()), d(zt) && (b() || S()) && I("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      rt("load");
    });
  });
  function hr(n, f) {
    return btoa(JSON.stringify({
      algorithm: n.algorithm,
      challenge: n.challenge,
      number: f.number,
      salt: n.salt,
      signature: n.signature,
      test: X() ? !0 : void 0,
      took: f.took
    }));
  }
  function Jn() {
    for (const n of $e)
      n.destroy();
  }
  function gr() {
    i() && z() && d(x) === p.VERIFIED ? ke() : ot(p.EXPIRED, d(Q).expired);
  }
  async function Kn() {
    var n;
    if (M())
      throw I("mocking error"), new Error("Mocked error.");
    if (d(Ft))
      return I("using provided json data"), d(Ft);
    if (X())
      return I("generating test challenge", { test: X() }), Zl(typeof X() != "boolean" ? +X() : void 0);
    {
      if (!i() && w) {
        const L = w.getAttribute("action");
        L != null && L.includes("/form/") && i(L + "/altcha");
      }
      if (!i())
        throw new Error("Attribute challengeurl not set.");
      I("fetching challenge from", i());
      let f = null, m = null;
      if (a())
        if (I("using customfetch"), typeof a() == "string") {
          if (f = globalThis[a()] || null, !f)
            throw new Error(`Custom fetch function not found: ${a()}`);
        } else
          f = a();
      const $ = {
        headers: U() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      };
      if (f) {
        if (m = await f(i(), $), !m || !(m instanceof Response))
          throw new Error("Custom fetch function did not return a response.");
      } else
        m = await fetch(i(), $);
      if (m.status !== 200)
        throw new Error(`Server responded with ${m.status}.`);
      const P = m.headers.get("X-Altcha-Config"), A = await m.json(), y = new URLSearchParams((n = A.salt.split("?")) == null ? void 0 : n[1]), W = y.get("expires") || y.get("expire");
      if (W) {
        const L = new Date(+W * 1e3), He = isNaN(L.getTime()) ? 0 : L.getTime() - Date.now();
        He > 0 && Mt(He);
      }
      if (P)
        try {
          const L = JSON.parse(P);
          L && typeof L == "object" && (L.verifyurl && (L.verifyurl = new URL(L.verifyurl, new URL(i())).toString()), Ar(L));
        } catch (L) {
          I("unable to configure from X-Altcha-Config", L);
        }
      return A;
    }
  }
  function Xn(n) {
    var m;
    const f = w == null ? void 0 : w.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((m = f == null ? void 0 : f.value) == null ? void 0 : m.slice(f.value.indexOf("@"))) || void 0;
  }
  function Qn() {
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
  function ei(n) {
    return [
      ...(w == null ? void 0 : w.querySelectorAll(n != null && n.length ? n.map((m) => `input[name="${m}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (m, $) => {
        const P = $.name, A = $.value;
        return P && A && (m[P] = /\n/.test(A) ? A.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : A), m;
      },
      {}
    );
  }
  function ti() {
    const n = Ne() !== void 0 ? Ne().split(",") : void 0;
    for (const f of globalThis.altchaPlugins)
      (!n || n.includes(f.pluginName)) && $e.push(new f({
        el: d(V),
        clarify: it,
        dispatch: rt,
        getConfiguration: Rr,
        getFloatingAnchor: Ir,
        getState: Sr,
        log: I,
        reset: ot,
        solve: Cr,
        setState: De,
        setFloatingAnchor: Nr,
        verify: ke
      }));
  }
  function I(...n) {
    (u() || n.some((f) => f instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${q()}]`, ...n);
  }
  function ri() {
    [p.UNVERIFIED, p.ERROR, p.EXPIRED].includes(d(x)) ? U() !== !1 && (w == null ? void 0 : w.reportValidity()) === !1 ? D(je, !1) : H() ? it() : ke() : D(je, !0);
  }
  function _r(n) {
    const f = n.target;
    v() && f && !d(V).contains(f) && (d(x) === p.VERIFIED && _() === !1 || d(x) === p.VERIFIED && _() === "focus" && !(w != null && w.matches(":focus-within")) || r() === "off" && d(x) === p.UNVERIFIED) && Tr();
  }
  function mr() {
    v() && d(x) !== p.UNVERIFIED && lt();
  }
  function ni(n) {
    for (const f of $e)
      typeof f.onErrorChange == "function" && f.onErrorChange(d(qe));
  }
  function wr(n) {
    d(x) === p.UNVERIFIED ? ke() : v() && _() === "focus" && d(x) === p.VERIFIED && Ut();
  }
  function pr(n) {
    w && r() === "onsubmit" ? d(x) === p.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), ke().then(() => {
      w == null || w.requestSubmit();
    })) : d(x) !== p.VERIFIED && (n.preventDefault(), n.stopPropagation(), d(x) === p.VERIFYING && yr()) : w && v() && r() === "off" && d(x) === p.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), Ut());
  }
  function br() {
    ot();
  }
  function yr() {
    d(x) === p.VERIFYING && d(Q).waitAlert && alert(d(Q).waitAlert);
  }
  function ii(n) {
    for (const f of $e)
      typeof f.onStateChange == "function" && f.onStateChange(d(x));
    v() && d(x) !== p.UNVERIFIED && requestAnimationFrame(() => {
      lt();
    }), D(je, d(x) === p.VERIFIED);
  }
  function Er() {
    v() && lt();
  }
  function xr(n) {
    return JSON.parse(n);
  }
  async function li(n) {
    if (!xe())
      throw new Error("Attribute verifyurl not set.");
    I("requesting server verification from", xe());
    const f = { payload: n };
    if (U() !== !1) {
      const {
        blockedCountries: P,
        classifier: A,
        disableRules: y,
        email: W,
        expectedLanguages: L,
        expectedCountries: He,
        fields: st,
        ipAddress: ft,
        text: bi,
        timeZone: Vr
      } = Qn();
      f.blockedCountries = P, f.classifier = A, f.disableRules = y, f.email = W === !1 ? void 0 : Xn(W), f.expectedCountries = He, f.expectedLanguages = L || (cr ? [cr] : void 0), f.fields = st === !1 ? void 0 : ei(st), f.ipAddress = ft === !1 ? void 0 : ft || "auto", f.text = bi, f.timeZone = Vr === !1 ? void 0 : Vr || Jl();
    }
    const m = await fetch(xe(), {
      body: JSON.stringify(f),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (m.status !== 200)
      throw new Error(`Server responded with ${m.status}.`);
    const $ = await m.json();
    if ($ != null && $.payload && D(Le, oe($.payload)), rt("serververification", $), l() && $.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  function Mt(n) {
    I("expire", n), fe && (clearTimeout(fe), fe = null), n < 1 ? gr() : fe = setTimeout(gr, n);
  }
  function $r(n) {
    I("floating", n), v() !== n && (d(V).style.left = "", d(V).style.top = ""), v(n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : v()), v() ? (r() || r("onsubmit"), document.addEventListener("scroll", mr), document.addEventListener("click", _r), window.addEventListener("resize", Er)) : r() === "onsubmit" && r(void 0);
  }
  function kr(n) {
    if (!n.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (n.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!sr.includes(n.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${sr.join(", ")}`);
    if (!n.challenge || n.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!n.salt || n.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function Cr(n) {
    let f = null;
    if ("Worker" in window) {
      try {
        f = await oi(n, n.maxNumber || n.maxnumber || F());
      } catch (m) {
        I(m);
      }
      if ((f == null ? void 0 : f.number) !== void 0 || "obfuscated" in n)
        return { data: n, solution: f };
    }
    if ("obfuscated" in n) {
      const m = await Ql(n.obfuscated, n.key, n.maxNumber || n.maxnumber);
      return { data: n, solution: await m.promise };
    }
    return {
      data: n,
      solution: await Gl(n.challenge, n.salt, n.algorithm, n.maxNumber || n.maxnumber || F()).promise
    };
  }
  async function oi(n, f = typeof X() == "number" ? X() : n.maxNumber || n.maxnumber || F(), m = Math.ceil(Ve())) {
    const $ = [];
    m = Math.min(16, f, Math.max(1, m));
    for (let y = 0; y < m; y++)
      $.push(altchaCreateWorker(tt()));
    const P = Math.ceil(f / m), A = await Promise.all($.map((y, W) => {
      const L = W * P;
      return new Promise((He) => {
        y.addEventListener("message", (st) => {
          if (st.data)
            for (const ft of $)
              ft !== y && ft.postMessage({ type: "abort" });
          He(st.data);
        }), y.postMessage({
          payload: n,
          max: L + P,
          start: L,
          type: "work"
        });
      });
    }));
    for (const y of $)
      y.terminate();
    return A.find((y) => !!y) || null;
  }
  async function it() {
    if (!H()) {
      De(p.ERROR);
      return;
    }
    const n = $e.find((f) => f.constructor.pluginName === "obfuscation");
    if (!n || !("clarify" in n)) {
      De(p.ERROR), I("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in n && typeof n.clarify == "function")
      return n.clarify();
  }
  function Ar(n) {
    n.obfuscated !== void 0 && H(n.obfuscated), n.auto !== void 0 && (r(n.auto), r() === "onload" && (H() ? it() : ke())), n.blockspam !== void 0 && l(!!n.blockspam), n.customfetch !== void 0 && a(n.customfetch), n.floatinganchor !== void 0 && h(n.floatinganchor), n.delay !== void 0 && s(n.delay), n.floatingoffset !== void 0 && g(n.floatingoffset), n.floating !== void 0 && $r(n.floating), n.expire !== void 0 && (Mt(n.expire), c(n.expire)), n.challenge && (o(typeof n.challenge == "string" ? n.challenge : JSON.stringify(n.challenge)), kr(d(Ft))), n.challengeurl !== void 0 && i(n.challengeurl), n.debug !== void 0 && u(!!n.debug), n.hidefooter !== void 0 && b(!!n.hidefooter), n.hidelogo !== void 0 && S(!!n.hidelogo), n.maxnumber !== void 0 && F(+n.maxnumber), n.mockerror !== void 0 && M(!!n.mockerror), n.name !== void 0 && q(n.name), n.refetchonexpire !== void 0 && z(!!n.refetchonexpire), n.spamfilter !== void 0 && U(typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && he(typeof n.strings == "string" ? n.strings : JSON.stringify(n.strings)), n.test !== void 0 && X(typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && xe(n.verifyurl), n.workers !== void 0 && Ve(+n.workers), n.workerurl !== void 0 && tt(n.workerurl);
  }
  function Rr() {
    return {
      auto: r(),
      blockspam: l(),
      challengeurl: i(),
      debug: u(),
      delay: s(),
      expire: c(),
      floating: v(),
      floatinganchor: h(),
      floatingoffset: g(),
      hidefooter: b(),
      hidelogo: S(),
      name: q(),
      maxnumber: F(),
      mockerror: M(),
      obfuscated: H(),
      refetchonexpire: z(),
      spamfilter: U(),
      strings: d(Q),
      test: X(),
      verifyurl: xe(),
      workers: Ve(),
      workerurl: tt()
    };
  }
  function Ir() {
    return Be;
  }
  function ai(n) {
    return $e.find((f) => f.constructor.pluginName === n);
  }
  function Sr() {
    return d(x);
  }
  function Tr() {
    d(V).style.display = "none";
  }
  function lt(n = 20) {
    if (d(V))
      if (Be || (Be = (h() ? document.querySelector(h()) : w == null ? void 0 : w.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || w), Be) {
        const f = parseInt(g(), 10) || 12, m = Be.getBoundingClientRect(), $ = d(V).getBoundingClientRect(), P = document.documentElement.clientHeight, A = document.documentElement.clientWidth, y = v() === "auto" ? m.bottom + $.height + f + n > P : v() === "top", W = Math.max(n, Math.min(A - n - $.width, m.left + m.width / 2 - $.width / 2));
        if (y ? d(V).style.top = `${m.top - ($.height + f)}px` : d(V).style.top = `${m.bottom + f}px`, d(V).style.left = `${W}px`, d(V).setAttribute("data-floating", y ? "top" : "bottom"), d(nt)) {
          const L = d(nt).getBoundingClientRect();
          d(nt).style.left = m.left - W + m.width / 2 - L.width / 2 + "px";
        }
      } else
        I("unable to find floating anchor element");
  }
  function ot(n = p.UNVERIFIED, f = null) {
    fe && (clearTimeout(fe), fe = null), D(je, !1), D(Le, null), De(n, f);
  }
  function Nr(n) {
    Be = n;
  }
  function De(n, f = null) {
    D(x, oe(n)), D(qe, oe(f)), rt("statechange", {
      payload: d(Le),
      state: d(x)
    });
  }
  function Ut() {
    d(V).style.display = "block", v() && lt();
  }
  async function ke() {
    return ot(p.VERIFYING), await new Promise((n) => setTimeout(n, s() || 0)), Kn().then((n) => (kr(n), I("challenge", n), Cr(n))).then(({ data: n, solution: f }) => {
      if (I("solution", f), !f || n && "challenge" in n && !("clearText" in f))
        if ((f == null ? void 0 : f.number) !== void 0 && "challenge" in n) {
          if (xe())
            return li(hr(n, f));
          D(Le, oe(hr(n, f))), I("payload", d(Le));
        } else
          throw I("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      De(p.VERIFIED), I("verified"), hl().then(() => {
        rt("verified", { payload: d(Le) });
      });
    }).catch((n) => {
      I(n), De(p.ERROR, n.message);
    });
  }
  var Lr = so(), Dr = wt(Lr);
  Nl(Dr, t, "default", {});
  var at = ge(Dr, 2), Vt = ie(at), Pr = ie(Vt);
  {
    var si = (n) => {
      var f = eo();
      G(n, f);
    };
    _e(Pr, (n) => {
      d(x) === p.VERIFYING && n(si);
    });
  }
  var mt = ge(Pr, 2);
  let Or;
  var Pe = ie(mt);
  en(Pe), Pe.__change = ri;
  var fi = ge(Pe, 2);
  {
    var ui = (n) => {
      var f = to();
      en(f), ut(() => {
        le(f, "name", q()), Fl(f, d(Le));
      }), G(n, f);
    };
    _e(fi, (n) => {
      d(x) === p.VERIFIED && n(ui);
    });
  }
  ne(mt);
  var jt = ge(mt, 2), Bt = ie(jt), ci = ie(Bt);
  {
    var di = (n) => {
      var f = Wt(), m = wt(f);
      Ze(m, () => d(Q).verified), G(n, f);
    }, vi = (n, f) => {
      {
        var m = (P) => {
          var A = Wt(), y = wt(A);
          Ze(y, () => d(Q).verifying), G(P, A);
        }, $ = (P) => {
          var A = Wt(), y = wt(A);
          Ze(y, () => d(Q).label), G(P, A);
        };
        _e(
          n,
          (P) => {
            d(x) === p.VERIFYING ? P(m) : P($, !1);
          },
          f
        );
      }
    };
    _e(ci, (n) => {
      d(x) === p.VERIFIED ? n(di) : n(vi, !1);
    });
  }
  ne(Bt), ne(jt);
  var hi = ge(jt, 2);
  {
    var gi = (n) => {
      var f = ro(), m = ie(f);
      le(m, "href", ur), ne(f), ut(() => le(m, "aria-label", d(Q).ariaLinkLabel)), G(n, f);
    };
    _e(hi, (n) => {
      (S() !== !0 || d(zt)) && n(gi);
    });
  }
  ne(Vt);
  var zr = ge(Vt, 2);
  {
    var _i = (n) => {
      var f = lo(), m = ge(ie(f), 2);
      {
        var $ = (A) => {
          var y = no(), W = ie(y);
          Ze(W, () => d(Q).expired), ne(y), ut(() => le(y, "title", d(qe))), G(A, y);
        }, P = (A) => {
          var y = io(), W = ie(y);
          Ze(W, () => d(Q).error), ne(y), ut(() => le(y, "title", d(qe))), G(A, y);
        };
        _e(m, (A) => {
          d(x) === p.EXPIRED ? A($) : A(P, !1);
        });
      }
      ne(f), G(n, f);
    };
    _e(zr, (n) => {
      (d(qe) || d(x) === p.EXPIRED) && n(_i);
    });
  }
  var Fr = ge(zr, 2);
  {
    var mi = (n) => {
      var f = oo(), m = ie(f), $ = ie(m);
      Ze($, () => d(Q).footer), ne(m), ne(f), G(n, f);
    };
    _e(Fr, (n) => {
      d(Q).footer && (b() !== !0 || d(zt)) && n(mi);
    });
  }
  var wi = ge(Fr, 2);
  {
    var pi = (n) => {
      var f = ao();
      nn(f, (m) => D(nt, m), () => d(nt)), G(n, f);
    };
    _e(wi, (n) => {
      v() && n(pi);
    });
  }
  return ne(at), nn(at, (n) => D(V, n), () => d(V)), ut(
    (n) => {
      le(at, "data-state", d(x)), le(at, "data-floating", v()), Or = Pl(mt, 1, "altcha-checkbox svelte-ddsc3z", null, Or, n), le(Pe, "id", d(vr)), Pe.required = r() !== "onsubmit" && (!v() || r() !== "off"), le(Bt, "for", d(vr));
    },
    [
      () => ({
        "altcha-hidden": d(x) === p.VERIFYING
      })
    ]
  ), Al("invalid", Pe, yr), Ul(Pe, () => d(je), (n) => D(je, n)), G(e, Lr), Fn({
    clarify: it,
    configure: Ar,
    getConfiguration: Rr,
    getFloatingAnchor: Ir,
    getPlugin: ai,
    getState: Sr,
    hide: Tr,
    repositionFloating: lt,
    reset: ot,
    setFloatingAnchor: Nr,
    setState: De,
    show: Ut,
    verify: ke,
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
      return o();
    },
    set challengejson(n = void 0) {
      o(n), E();
    },
    get customfetch() {
      return a();
    },
    set customfetch(n = void 0) {
      a(n), E();
    },
    get debug() {
      return u();
    },
    set debug(n = !1) {
      u(n), E();
    },
    get delay() {
      return s();
    },
    set delay(n = 0) {
      s(n), E();
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
      return b();
    },
    set hidefooter(n = !1) {
      b(n), E();
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
      return q();
    },
    set name(n = "altcha") {
      q(n), E();
    },
    get maxnumber() {
      return F();
    },
    set maxnumber(n = 1e6) {
      F(n), E();
    },
    get mockerror() {
      return M();
    },
    set mockerror(n = !1) {
      M(n), E();
    },
    get obfuscated() {
      return H();
    },
    set obfuscated(n = void 0) {
      H(n), E();
    },
    get plugins() {
      return Ne();
    },
    set plugins(n = void 0) {
      Ne(n), E();
    },
    get refetchonexpire() {
      return z();
    },
    set refetchonexpire(n = !0) {
      z(n), E();
    },
    get spamfilter() {
      return U();
    },
    set spamfilter(n = !1) {
      U(n), E();
    },
    get strings() {
      return he();
    },
    set strings(n = void 0) {
      he(n), E();
    },
    get test() {
      return X();
    },
    set test(n = !1) {
      X(n), E();
    },
    get verifyurl() {
      return xe();
    },
    set verifyurl(n = void 0) {
      xe(n), E();
    },
    get workers() {
      return Ve();
    },
    set workers(n = Math.min(16, navigator.hardwareConcurrency || 8)) {
      Ve(n), E();
    },
    get workerurl() {
      return tt();
    },
    set workerurl(n = void 0) {
      tt(n), E();
    }
  });
}
Rl(["change"]);
customElements.define("altcha-widget", Wl(
  uo,
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
globalThis.altchaCreateWorker = (e) => e ? new Worker(new URL(e)) : new xi();
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
export {
  uo as Altcha
};
