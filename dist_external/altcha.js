var mi = Object.defineProperty;
var Vr = (e) => {
  throw TypeError(e);
};
var wi = (e, t, r) => t in e ? mi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ne = (e, t, r) => wi(e, typeof t != "symbol" ? t + "" : t, r), Ur = (e, t, r) => t.has(e) || Vr("Cannot " + r);
var W = (e, t, r) => (Ur(e, t, "read from private field"), r ? r.call(e) : t.get(e)), qt = (e, t, r) => t.has(e) ? Vr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), jt = (e, t, r, i) => (Ur(e, t, "write to private field"), i ? i.call(e, r) : t.set(e, r), r);
const pi = "5";
var tn;
typeof window < "u" && ((tn = window.__svelte ?? (window.__svelte = {})).v ?? (tn.v = /* @__PURE__ */ new Set())).add(pi);
const yi = 1, bi = 4, Ei = 8, $i = 16, ki = 1, xi = 2, Gt = "[", rn = "[!", nn = "]", Ke = {}, Z = Symbol(), Ci = "http://www.w3.org/1999/xhtml", qr = !1, ae = 2, ln = 4, Rt = 8, Jt = 16, ye = 32, Me = 64, yt = 128, re = 256, bt = 512, X = 1024, be = 2048, et = 4096, Xe = 8192, St = 16384, Ai = 32768, Kt = 65536, Ii = 1 << 19, on = 1 << 20, ct = Symbol("$state"), an = Symbol("legacy props"), Ri = Symbol("");
var sn = Array.isArray, Si = Array.prototype.indexOf, Ni = Array.from, Et = Object.keys, $t = Object.defineProperty, Oe = Object.getOwnPropertyDescriptor, Ti = Object.getOwnPropertyDescriptors, Di = Object.prototype, Li = Array.prototype, fn = Object.getPrototypeOf;
function un(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const Pi = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let vt = [], ht = [];
function cn() {
  var e = vt;
  vt = [], un(e);
}
function dn() {
  var e = ht;
  ht = [], un(e);
}
function vn(e) {
  vt.length === 0 && queueMicrotask(cn), vt.push(e);
}
function Oi(e) {
  ht.length === 0 && Pi(dn), ht.push(e);
}
function jr() {
  vt.length > 0 && cn(), ht.length > 0 && dn();
}
function hn(e) {
  return e === this.v;
}
function Fi(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function gn(e) {
  return !Fi(e, this.v);
}
function Mi(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Vi() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ui(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function qi() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ji() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Bi(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Hi() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Yi() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Wi() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Zi() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Gi = !1;
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
  return /* @__PURE__ */ Ji(fe(e));
}
// @__NO_SIDE_EFFECTS__
function _n(e, t = !1) {
  const r = fe(e);
  return t || (r.equals = gn), r;
}
// @__NO_SIDE_EFFECTS__
function Ji(e) {
  return C !== null && !oe && (C.f & ae) !== 0 && (ue === null ? tl([e]) : ue.push(e)), e;
}
function L(e, t) {
  return C !== null && !oe && On() && (C.f & (ae | Jt)) !== 0 && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (ue === null || !ue.includes(e)) && Zi(), Ki(e, t);
}
function Ki(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = kn(), mn(e, be), R !== null && (R.f & X) !== 0 && (R.f & (ye | Me)) === 0 && (_e === null ? rl([e]) : _e.push(e))), t;
}
function mn(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, l = 0; l < i; l++) {
      var o = r[l], a = o.f;
      (a & be) === 0 && (ce(o, t), (a & (X | re)) !== 0 && ((a & ae) !== 0 ? mn(
        /** @type {Derived} */
        o,
        et
      ) : Dt(
        /** @type {Effect} */
        o
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Pe(e) {
  var t = ae | be, r = C !== null && (C.f & ae) !== 0 ? (
    /** @type {Derived} */
    C
  ) : null;
  return R === null || r !== null && (r.f & re) !== 0 ? t |= re : R.f |= on, {
    ctx: B,
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
      pe(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Xi(e) {
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
function zi(e) {
  var t, r = R;
  Se(Xi(e));
  try {
    wn(e), t = Cn(e);
  } finally {
    Se(r);
  }
  return t;
}
function pn(e) {
  var t = zi(e), r = (Ce || (e.f & re) !== 0) && e.deps !== null ? et : X;
  ce(e, r), e.equals(t) || (e.v = t, e.wv = kn());
}
function Nt(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let D = !1;
function Je(e) {
  D = e;
}
let P;
function Ie(e) {
  if (e === null)
    throw Nt(), Ke;
  return P = e;
}
function ze() {
  return Ie(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ne(P)
  );
}
function G(e) {
  if (D) {
    if (/* @__PURE__ */ Ne(P) !== null)
      throw Nt(), Ke;
    P = e;
  }
}
function Qi() {
  for (var e = 0, t = P; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === nn) {
        if (e === 0) return t;
        e -= 1;
      } else (r === Gt || r === rn) && (e += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ne(t)
    );
    t.remove(), t = i;
  }
}
function le(e, t = null, r) {
  if (typeof e != "object" || e === null || ct in e)
    return e;
  const i = fn(e);
  if (i !== Di && i !== Li)
    return e;
  var l = /* @__PURE__ */ new Map(), o = sn(e), a = fe(0);
  o && l.set("length", fe(
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
        var h = l.get(c);
        return h === void 0 ? (h = fe(v.value), l.set(c, h)) : L(h, le(v.value, f)), !0;
      },
      deleteProperty(s, c) {
        var v = l.get(c);
        if (v === void 0)
          c in s && l.set(c, fe(Z));
        else {
          if (o && typeof c == "string") {
            var h = (
              /** @type {Source<number>} */
              l.get("length")
            ), g = Number(c);
            Number.isInteger(g) && g < h.v && L(h, g);
          }
          L(v, Z), Br(a);
        }
        return !0;
      },
      get(s, c, v) {
        var p;
        if (c === ct)
          return e;
        var h = l.get(c), g = c in s;
        if (h === void 0 && (!g || (p = Oe(s, c)) != null && p.writable) && (h = fe(le(g ? s[c] : Z, f)), l.set(c, h)), h !== void 0) {
          var m = d(h);
          return m === Z ? void 0 : m;
        }
        return Reflect.get(s, c, v);
      },
      getOwnPropertyDescriptor(s, c) {
        var v = Reflect.getOwnPropertyDescriptor(s, c);
        if (v && "value" in v) {
          var h = l.get(c);
          h && (v.value = d(h));
        } else if (v === void 0) {
          var g = l.get(c), m = g == null ? void 0 : g.v;
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
        if (c === ct)
          return !0;
        var v = l.get(c), h = v !== void 0 && v.v !== Z || Reflect.has(s, c);
        if (v !== void 0 || R !== null && (!h || (m = Oe(s, c)) != null && m.writable)) {
          v === void 0 && (v = fe(h ? le(s[c], f) : Z), l.set(c, v));
          var g = d(v);
          if (g === Z)
            return !1;
        }
        return h;
      },
      set(s, c, v, h) {
        var V;
        var g = l.get(c), m = c in s;
        if (o && c === "length")
          for (var p = v; p < /** @type {Source<number>} */
          g.v; p += 1) {
            var T = l.get(p + "");
            T !== void 0 ? L(T, Z) : p in s && (T = fe(Z), l.set(p + "", T));
          }
        g === void 0 ? (!m || (V = Oe(s, c)) != null && V.writable) && (g = fe(void 0), L(g, le(v, f)), l.set(c, g)) : (m = g.v !== Z, L(g, le(v, f)));
        var O = Reflect.getOwnPropertyDescriptor(s, c);
        if (O != null && O.set && O.set.call(h, v), !m) {
          if (o && typeof c == "string") {
            var H = (
              /** @type {Source<number>} */
              l.get("length")
            ), M = Number(c);
            Number.isInteger(M) && M >= H.v && L(H, M + 1);
          }
          Br(a);
        }
        return !0;
      },
      ownKeys(s) {
        d(a);
        var c = Reflect.ownKeys(s).filter((g) => {
          var m = l.get(g);
          return m === void 0 || m.v !== Z;
        });
        for (var [v, h] of l)
          h.v !== Z && !(v in s) && c.push(v);
        return c;
      },
      setPrototypeOf() {
        Yi();
      }
    }
  );
}
function Br(e, t = 1) {
  L(e, e.v + t);
}
var Hr, yn, bn, En;
function Bt() {
  if (Hr === void 0) {
    Hr = window, yn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    bn = Oe(t, "firstChild").get, En = Oe(t, "nextSibling").get, e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Xt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function we(e) {
  return bn.call(e);
}
// @__NO_SIDE_EFFECTS__
function Ne(e) {
  return En.call(e);
}
function J(e, t) {
  if (!D)
    return /* @__PURE__ */ we(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ we(P)
  );
  return r === null && (r = P.appendChild(Xt())), Ie(r), r;
}
function Yr(e, t) {
  if (!D) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ we(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Ne(r) : r;
  }
  return P;
}
function ge(e, t = 1, r = !1) {
  let i = D ? P : e;
  for (var l; t--; )
    l = i, i = /** @type {TemplateNode} */
    /* @__PURE__ */ Ne(i);
  if (!D)
    return i;
  var o = i == null ? void 0 : i.nodeType;
  if (r && o !== 3) {
    var a = Xt();
    return i === null ? l == null || l.after(a) : i.before(a), Ie(a), a;
  }
  return Ie(i), /** @type {TemplateNode} */
  i;
}
function el(e) {
  e.textContent = "";
}
let wt = !1, kt = !1, xt = null, Fe = !1, zt = !1;
function Wr(e) {
  zt = e;
}
let dt = [];
let C = null, oe = !1;
function Re(e) {
  C = e;
}
let R = null;
function Se(e) {
  R = e;
}
let ue = null;
function tl(e) {
  ue = e;
}
let j = null, K = 0, _e = null;
function rl(e) {
  _e = e;
}
let $n = 1, Ct = 0, Ce = !1;
function kn() {
  return ++$n;
}
function gt(e) {
  var h;
  var t = e.f;
  if ((t & be) !== 0)
    return !0;
  if ((t & et) !== 0) {
    var r = e.deps, i = (t & re) !== 0;
    if (r !== null) {
      var l, o, a = (t & bt) !== 0, f = i && R !== null && !Ce, s = r.length;
      if (a || f) {
        var c = (
          /** @type {Derived} */
          e
        ), v = c.parent;
        for (l = 0; l < s; l++)
          o = r[l], (a || !((h = o == null ? void 0 : o.reactions) != null && h.includes(c))) && (o.reactions ?? (o.reactions = [])).push(c);
        a && (c.f ^= bt), f && v !== null && (v.f & re) === 0 && (c.f ^= re);
      }
      for (l = 0; l < s; l++)
        if (o = r[l], gt(
          /** @type {Derived} */
          o
        ) && pn(
          /** @type {Derived} */
          o
        ), o.wv > e.wv)
          return !0;
    }
    (!i || R !== null && !Ce) && ce(e, X);
  }
  return !1;
}
function nl(e, t) {
  for (var r = t; r !== null; ) {
    if ((r.f & yt) !== 0)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= yt;
      }
    r = r.parent;
  }
  throw wt = !1, e;
}
function il(e) {
  return (e.f & St) === 0 && (e.parent === null || (e.parent.f & yt) === 0);
}
function Tt(e, t, r, i) {
  if (wt) {
    if (r === null && (wt = !1), il(t))
      throw e;
    return;
  }
  r !== null && (wt = !0);
  {
    nl(e, t);
    return;
  }
}
function xn(e, t, r = !0) {
  var i = e.reactions;
  if (i !== null)
    for (var l = 0; l < i.length; l++) {
      var o = i[l];
      (o.f & ae) !== 0 ? xn(
        /** @type {Derived} */
        o,
        t,
        !1
      ) : t === o && (r ? ce(o, be) : (o.f & X) !== 0 && ce(o, et), Dt(
        /** @type {Effect} */
        o
      ));
    }
}
function Cn(e) {
  var m;
  var t = j, r = K, i = _e, l = C, o = Ce, a = ue, f = B, s = oe, c = e.f;
  j = /** @type {null | Value[]} */
  null, K = 0, _e = null, Ce = (c & re) !== 0 && (oe || !Fe || C === null), C = (c & (ye | Me)) === 0 ? e : null, ue = null, Gr(e.ctx), oe = !1, Ct++;
  try {
    var v = (
      /** @type {Function} */
      (0, e.fn)()
    ), h = e.deps;
    if (j !== null) {
      var g;
      if (At(e, K), h !== null && K > 0)
        for (h.length = K + j.length, g = 0; g < j.length; g++)
          h[K + g] = j[g];
      else
        e.deps = h = j;
      if (!Ce)
        for (g = K; g < h.length; g++)
          ((m = h[g]).reactions ?? (m.reactions = [])).push(e);
    } else h !== null && K < h.length && (At(e, K), h.length = K);
    if (On() && _e !== null && !oe && h !== null && (e.f & (ae | et | be)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      _e.length; g++)
        xn(
          _e[g],
          /** @type {Effect} */
          e
        );
    return l !== null && Ct++, v;
  } finally {
    j = t, K = r, _e = i, C = l, Ce = o, ue = a, Gr(f), oe = s;
  }
}
function ll(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var i = Si.call(r, e);
    if (i !== -1) {
      var l = r.length - 1;
      l === 0 ? r = t.reactions = null : (r[i] = r[l], r.pop());
    }
  }
  r === null && (t.f & ae) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (j === null || !j.includes(t)) && (ce(t, et), (t.f & (re | bt)) === 0 && (t.f ^= bt), wn(
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
      ll(e, r[i]);
}
function Qt(e) {
  var t = e.f;
  if ((t & St) === 0) {
    ce(e, X);
    var r = R, i = B, l = Fe;
    R = e, Fe = !0;
    try {
      (t & Jt) !== 0 ? _l(e) : Rn(e), In(e);
      var o = Cn(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = $n;
      var a = e.deps, f;
      qr && Gi && e.f & be;
    } catch (s) {
      Tt(s, e, r, i || e.ctx);
    } finally {
      Fe = l, R = r;
    }
  }
}
function ol() {
  try {
    qi();
  } catch (e) {
    if (xt !== null)
      Tt(e, xt, null);
    else
      throw e;
  }
}
function An() {
  var e = Fe;
  try {
    var t = 0;
    for (Fe = !0; dt.length > 0; ) {
      t++ > 1e3 && ol();
      var r = dt, i = r.length;
      dt = [];
      for (var l = 0; l < i; l++) {
        var o = sl(r[l]);
        al(o);
      }
    }
  } finally {
    kt = !1, Fe = e, xt = null;
  }
}
function al(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var i = e[r];
      if ((i.f & (St | Xe)) === 0)
        try {
          gt(i) && (Qt(i), i.deps === null && i.first === null && i.nodes_start === null && (i.teardown === null ? Sn(i) : i.fn = null));
        } catch (l) {
          Tt(l, i, null, i.ctx);
        }
    }
}
function Dt(e) {
  kt || (kt = !0, queueMicrotask(An));
  for (var t = xt = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (Me | ye)) !== 0) {
      if ((r & X) === 0) return;
      t.f ^= X;
    }
  }
  dt.push(t);
}
function sl(e) {
  for (var t = [], r = e; r !== null; ) {
    var i = r.f, l = (i & (ye | Me)) !== 0, o = l && (i & X) !== 0;
    if (!o && (i & Xe) === 0) {
      if ((i & ln) !== 0)
        t.push(r);
      else if (l)
        r.f ^= X;
      else {
        var a = C;
        try {
          C = r, gt(r) && Qt(r);
        } catch (c) {
          Tt(c, r, null, r.ctx);
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
function x(e) {
  var t;
  for (jr(); dt.length > 0; )
    kt = !0, An(), jr();
  return (
    /** @type {T} */
    t
  );
}
async function fl() {
  await Promise.resolve(), x();
}
function d(e) {
  var t = e.f, r = (t & ae) !== 0;
  if (C !== null && !oe) {
    ue !== null && ue.includes(e) && Wi();
    var i = C.deps;
    e.rv < Ct && (e.rv = Ct, j === null && i !== null && i[K] === e ? K++ : j === null ? j = [e] : (!Ce || !j.includes(e)) && j.push(e));
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var l = (
      /** @type {Derived} */
      e
    ), o = l.parent;
    o !== null && (o.f & re) === 0 && (l.f ^= re);
  }
  return r && (l = /** @type {Derived} */
  e, gt(l) && pn(l)), e.v;
}
function Qe(e) {
  var t = oe;
  try {
    return oe = !0, e();
  } finally {
    oe = t;
  }
}
const ul = -7169;
function ce(e, t) {
  e.f = e.f & ul | t;
}
function cl(e) {
  R === null && C === null && Ui(), C !== null && (C.f & re) !== 0 && R === null && Vi(), zt && Mi();
}
function dl(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Ve(e, t, r, i = !0) {
  var l = R, o = {
    ctx: B,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | be,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: l,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (r)
    try {
      Qt(o), o.f |= Ai;
    } catch (s) {
      throw pe(o), s;
    }
  else t !== null && Dt(o);
  var a = r && o.deps === null && o.first === null && o.nodes_start === null && o.teardown === null && (o.f & (on | yt)) === 0;
  if (!a && i && (l !== null && dl(o, l), C !== null && (C.f & ae) !== 0)) {
    var f = (
      /** @type {Derived} */
      C
    );
    (f.effects ?? (f.effects = [])).push(o);
  }
  return o;
}
function vl(e) {
  const t = Ve(Rt, null, !1);
  return ce(t, X), t.teardown = e, t;
}
function Ht(e) {
  cl();
  var t = R !== null && (R.f & ye) !== 0 && B !== null && !B.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      B
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: R,
      reaction: C
    });
  } else {
    var i = er(e);
    return i;
  }
}
function hl(e) {
  const t = Ve(Me, e, !0);
  return () => {
    pe(t);
  };
}
function gl(e) {
  const t = Ve(Me, e, !0);
  return (r = {}) => new Promise((i) => {
    r.outro ? Yt(t, () => {
      pe(t), i(void 0);
    }) : (pe(t), i(void 0));
  });
}
function er(e) {
  return Ve(ln, e, !1);
}
function tr(e) {
  return Ve(Rt, e, !0);
}
function We(e, t = [], r = Pe) {
  const i = t.map(r);
  return rr(() => e(...i.map(d)));
}
function rr(e, t = 0) {
  return Ve(Rt | Jt | t, e, !0);
}
function It(e, t = !0) {
  return Ve(Rt | ye, e, !0, t);
}
function In(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = zt, i = C;
    Wr(!0), Re(null);
    try {
      t.call(null);
    } finally {
      Wr(r), Re(i);
    }
  }
}
function Rn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var i = r.next;
    (r.f & Me) !== 0 ? r.parent = null : pe(r, t), r = i;
  }
}
function _l(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & ye) === 0 && pe(t), t = r;
  }
}
function pe(e, t = !0) {
  var r = !1;
  if ((t || (e.f & Ii) !== 0) && e.nodes_start !== null) {
    for (var i = e.nodes_start, l = e.nodes_end; i !== null; ) {
      var o = i === l ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ne(i)
      );
      i.remove(), i = o;
    }
    r = !0;
  }
  Rn(e, t && !r), At(e, 0), ce(e, St);
  var a = e.transitions;
  if (a !== null)
    for (const s of a)
      s.stop();
  In(e);
  var f = e.parent;
  f !== null && f.first !== null && Sn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function Sn(e) {
  var t = e.parent, r = e.prev, i = e.next;
  r !== null && (r.next = i), i !== null && (i.prev = r), t !== null && (t.first === e && (t.first = i), t.last === e && (t.last = r));
}
function Yt(e, t) {
  var r = [];
  Nn(e, r, !0), ml(r, () => {
    pe(e), t && t();
  });
}
function ml(e, t) {
  var r = e.length;
  if (r > 0) {
    var i = () => --r || t();
    for (var l of e)
      l.out(i);
  } else
    t();
}
function Nn(e, t, r) {
  if ((e.f & Xe) === 0) {
    if (e.f ^= Xe, e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || r) && t.push(a);
    for (var i = e.first; i !== null; ) {
      var l = i.next, o = (i.f & Kt) !== 0 || (i.f & ye) !== 0;
      Nn(i, t, o ? r : !1), i = l;
    }
  }
}
function Zr(e) {
  Tn(e, !0);
}
function Tn(e, t) {
  if ((e.f & Xe) !== 0) {
    e.f ^= Xe, (e.f & X) === 0 && (e.f ^= X), gt(e) && (ce(e, be), Dt(e));
    for (var r = e.first; r !== null; ) {
      var i = r.next, l = (r.f & Kt) !== 0 || (r.f & ye) !== 0;
      Tn(r, l ? t : !1), r = i;
    }
    if (e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || t) && o.in();
  }
}
function Dn(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let B = null;
function Gr(e) {
  B = e;
}
function Ln(e, t = !1, r) {
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
function Pn(e) {
  const t = B;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const a = t.e;
    if (a !== null) {
      var r = R, i = C;
      t.e = null;
      try {
        for (var l = 0; l < a.length; l++) {
          var o = a[l];
          Se(o.effect), Re(o.reaction), er(o.fn);
        }
      } finally {
        Se(r), Re(i);
      }
    }
    B = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function On() {
  return !0;
}
const wl = ["touchstart", "touchmove"];
function pl(e) {
  return wl.includes(e);
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
  var t = C, r = R;
  Re(null), Se(null);
  try {
    return e();
  } finally {
    Re(t), Se(r);
  }
}
function yl(e, t, r, i = r) {
  e.addEventListener(t, () => Mn(r));
  const l = e.__on_r;
  l ? e.__on_r = () => {
    l(), i(!0);
  } : e.__on_r = () => i(!0), Fn();
}
const Vn = /* @__PURE__ */ new Set(), Wt = /* @__PURE__ */ new Set();
function bl(e, t, r, i = {}) {
  function l(o) {
    if (i.capture || ut.call(t, o), !o.cancelBubble)
      return Mn(() => r == null ? void 0 : r.call(this, o));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? vn(() => {
    t.addEventListener(e, l, i);
  }) : t.addEventListener(e, l, i), l;
}
function El(e, t, r, i, l) {
  var o = { capture: i, passive: l }, a = bl(e, t, r, o);
  (t === document.body || t === window || t === document) && vl(() => {
    t.removeEventListener(e, a, o);
  });
}
function $l(e) {
  for (var t = 0; t < e.length; t++)
    Vn.add(e[t]);
  for (var r of Wt)
    r(e);
}
function ut(e) {
  var M;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), i = e.type, l = ((M = e.composedPath) == null ? void 0 : M.call(e)) || [], o = (
    /** @type {null | Element} */
    l[0] || e.target
  ), a = 0, f = e.__root;
  if (f) {
    var s = l.indexOf(f);
    if (s !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var c = l.indexOf(t);
    if (c === -1)
      return;
    s <= c && (a = s);
  }
  if (o = /** @type {Element} */
  l[a] || e.target, o !== t) {
    $t(e, "currentTarget", {
      configurable: !0,
      get() {
        return o || r;
      }
    });
    var v = C, h = R;
    Re(null), Se(null);
    try {
      for (var g, m = []; o !== null; ) {
        var p = o.assignedSlot || o.parentNode || /** @type {any} */
        o.host || null;
        try {
          var T = o["__" + i];
          if (T != null && (!/** @type {any} */
          o.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === o))
            if (sn(T)) {
              var [O, ...H] = T;
              O.apply(o, [e, ...H]);
            } else
              T.call(o, e);
        } catch (V) {
          g ? m.push(V) : g = V;
        }
        if (e.cancelBubble || p === t || p === null)
          break;
        o = p;
      }
      if (g) {
        for (let V of m)
          queueMicrotask(() => {
            throw V;
          });
        throw g;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Re(v), Se(h);
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
    R
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function de(e, t) {
  var r = (t & ki) !== 0, i = (t & xi) !== 0, l, o = !e.startsWith("<!>");
  return () => {
    if (D)
      return Ae(P, null), P;
    l === void 0 && (l = nr(o ? e : "<!>" + e), r || (l = /** @type {Node} */
    /* @__PURE__ */ we(l)));
    var a = (
      /** @type {TemplateNode} */
      i || yn ? document.importNode(l, !0) : l.cloneNode(!0)
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
function kl(e, t, r = "svg") {
  var i = !e.startsWith("<!>"), l = `<${r}>${i ? e : "<!>" + e}</${r}>`, o;
  return () => {
    if (D)
      return Ae(P, null), P;
    if (!o) {
      var a = (
        /** @type {DocumentFragment} */
        nr(l)
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
  if (D) {
    R.nodes_end = P, ze();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Un(e, t) {
  return qn(e, t);
}
function xl(e, t) {
  Bt(), t.intro = t.intro ?? !1;
  const r = t.target, i = D, l = P;
  try {
    for (var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ we(r)
    ); o && (o.nodeType !== 8 || /** @type {Comment} */
    o.data !== Gt); )
      o = /** @type {TemplateNode} */
      /* @__PURE__ */ Ne(o);
    if (!o)
      throw Ke;
    Je(!0), Ie(
      /** @type {Comment} */
      o
    ), ze();
    const a = qn(e, { ...t, anchor: o });
    if (P === null || P.nodeType !== 8 || /** @type {Comment} */
    P.data !== nn)
      throw Nt(), Ke;
    return Je(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === Ke)
      return t.recover === !1 && ji(), Bt(), el(r), Je(!1), Un(e, t);
    throw a;
  } finally {
    Je(i), Ie(l);
  }
}
const Ze = /* @__PURE__ */ new Map();
function qn(e, { target: t, anchor: r, props: i = {}, events: l, context: o, intro: a = !0 }) {
  Bt();
  var f = /* @__PURE__ */ new Set(), s = (h) => {
    for (var g = 0; g < h.length; g++) {
      var m = h[g];
      if (!f.has(m)) {
        f.add(m);
        var p = pl(m);
        t.addEventListener(m, ut, { passive: p });
        var T = Ze.get(m);
        T === void 0 ? (document.addEventListener(m, ut, { passive: p }), Ze.set(m, 1)) : Ze.set(m, T + 1);
      }
    }
  };
  s(Ni(Vn)), Wt.add(s);
  var c = void 0, v = gl(() => {
    var h = r ?? t.appendChild(Xt());
    return It(() => {
      if (o) {
        Ln({});
        var g = (
          /** @type {ComponentContext} */
          B
        );
        g.c = o;
      }
      l && (i.$$events = l), D && Ae(
        /** @type {TemplateNode} */
        h,
        null
      ), c = e(h, i) || {}, D && (R.nodes_end = P), o && Pn();
    }), () => {
      var p;
      for (var g of f) {
        t.removeEventListener(g, ut);
        var m = (
          /** @type {number} */
          Ze.get(g)
        );
        --m === 0 ? (document.removeEventListener(g, ut), Ze.delete(g)) : Ze.set(g, m);
      }
      Wt.delete(s), h !== r && ((p = h.parentNode) == null || p.removeChild(h));
    };
  });
  return Zt.set(c, v), c;
}
let Zt = /* @__PURE__ */ new WeakMap();
function Cl(e, t) {
  const r = Zt.get(e);
  return r ? (Zt.delete(e), r(t)) : Promise.resolve();
}
function xe(e, t, [r, i] = [0, 0]) {
  D && r === 0 && ze();
  var l = e, o = null, a = null, f = Z, s = r > 0 ? Kt : 0, c = !1;
  const v = (g, m = !0) => {
    c = !0, h(m, g);
  }, h = (g, m) => {
    if (f === (f = g)) return;
    let p = !1;
    if (D && i !== -1) {
      if (r === 0) {
        const O = (
          /** @type {Comment} */
          l.data
        );
        O === Gt ? i = 0 : O === rn ? i = 1 / 0 : (i = parseInt(O.substring(1)), i !== i && (i = f ? 1 / 0 : -1));
      }
      const T = i > r;
      !!f === T && (l = Qi(), Ie(l), Je(!1), p = !0, i = -1);
    }
    f ? (o ? Zr(o) : m && (o = It(() => m(l))), a && Yt(a, () => {
      a = null;
    })) : (a ? Zr(a) : m && (a = It(() => m(l, [r + 1, i]))), o && Yt(o, () => {
      o = null;
    })), p && Je(!0);
  };
  rr(() => {
    c = !1, t(v), c || h(null, null);
  }, s), D && (l = P);
}
function Ge(e, t, r, i, l) {
  var o = e, a = "", f;
  rr(() => {
    if (a === (a = t() ?? "")) {
      D && ze();
      return;
    }
    f !== void 0 && (pe(f), f = void 0), a !== "" && (f = It(() => {
      if (D) {
        P.data;
        for (var s = ze(), c = s; s !== null && (s.nodeType !== 8 || /** @type {Comment} */
        s.data !== ""); )
          c = s, s = /** @type {TemplateNode} */
          /* @__PURE__ */ Ne(s);
        if (s === null)
          throw Nt(), Ke;
        Ae(P, c), o = Ie(s);
        return;
      }
      var v = a + "", h = nr(v);
      Ae(
        /** @type {TemplateNode} */
        /* @__PURE__ */ we(h),
        /** @type {TemplateNode} */
        h.lastChild
      ), o.before(h);
    }));
  });
}
function Al(e, t, r, i, l) {
  var f;
  D && ze();
  var o = (f = t.$$slots) == null ? void 0 : f[r], a = !1;
  o === !0 && (o = t.children, a = !0), o === void 0 || o(e, a ? () => i : i);
}
const Kr = [...` 	
\r\f \v\uFEFF`];
function Il(e, t, r) {
  var i = "" + e;
  if (r) {
    for (var l in r)
      if (r[l])
        i = i ? i + " " + l : l;
      else if (i.length)
        for (var o = l.length, a = 0; (a = i.indexOf(l, a)) >= 0; ) {
          var f = a + o;
          (a === 0 || Kr.includes(i[a - 1])) && (f === i.length || Kr.includes(i[f])) ? i = (a === 0 ? "" : i.substring(0, a)) + i.substring(f + 1) : a = f;
        }
  }
  return i === "" ? null : i;
}
function Rl(e, t, r, i, l, o) {
  var a = e.__className;
  if (D || a !== r) {
    var f = Il(r, i, o);
    (!D || f !== e.getAttribute("class")) && (f == null ? e.removeAttribute("class") : e.className = f), e.__className = r;
  } else if (o && l !== o)
    for (var s in o) {
      var c = !!o[s];
      (l == null || c !== !!l[s]) && e.classList.toggle(s, c);
    }
  return o;
}
const Sl = Symbol("is custom element"), Nl = Symbol("is html");
function Xr(e) {
  if (D) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var i = e.value;
          ie(e, "value", null), e.value = i;
        }
        if (e.hasAttribute("checked")) {
          var l = e.checked;
          ie(e, "checked", null), e.checked = l;
        }
      }
    };
    e.__on_r = r, Oi(r), Fn();
  }
}
function Tl(e, t) {
  var r = jn(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function ie(e, t, r, i) {
  var l = jn(e);
  D && (l[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || l[t] !== (l[t] = r) && (t === "loading" && (e[Ri] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Dl(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function jn(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Sl]: e.nodeName.includes("-"),
      [Nl]: e.namespaceURI === Ci
    })
  );
}
var zr = /* @__PURE__ */ new Map();
function Dl(e) {
  var t = zr.get(e.nodeName);
  if (t) return t;
  zr.set(e.nodeName, t = []);
  for (var r, i = e, l = Element.prototype; l !== i; ) {
    r = Ti(i);
    for (var o in r)
      r[o].set && t.push(o);
    i = fn(i);
  }
  return t;
}
function Ll(e, t, r = t) {
  yl(e, "change", (i) => {
    var l = i ? e.defaultChecked : e.checked;
    r(l);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (D && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  Qe(t) == null) && r(e.checked), tr(() => {
    var i = t();
    e.checked = !!i;
  });
}
function Qr(e, t) {
  return e === t || (e == null ? void 0 : e[ct]) === t;
}
function en(e = {}, t, r, i) {
  return er(() => {
    var l, o;
    return tr(() => {
      l = o, o = [], Qe(() => {
        e !== r(...o) && (t(e, ...o), l && Qr(r(...l), e) && t(null, ...l));
      });
    }), () => {
      vn(() => {
        o && Qr(r(...o), e) && t(null, ...o);
      });
    };
  }), e;
}
function Bn(e) {
  B === null && Dn(), Ht(() => {
    const t = Qe(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Pl(e) {
  B === null && Dn(), Bn(() => () => Qe(e));
}
let mt = !1;
function Ol(e) {
  var t = mt;
  try {
    return mt = !1, [e(), mt];
  } finally {
    mt = t;
  }
}
function I(e, t, r, i) {
  var Te;
  var l = (r & yi) !== 0, o = !0, a = (r & Ei) !== 0, f = (r & $i) !== 0, s = !1, c;
  a ? [c, s] = Ol(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var v = ct in e || an in e, h = a && (((Te = Oe(e, t)) == null ? void 0 : Te.set) ?? (v && t in e && ((F) => e[t] = F))) || void 0, g = (
    /** @type {V} */
    i
  ), m = !0, p = !1, T = () => (p = !0, m && (m = !1, f ? g = Qe(
    /** @type {() => V} */
    i
  ) : g = /** @type {V} */
  i), g);
  c === void 0 && i !== void 0 && (h && o && Bi(), c = T(), h && h(c));
  var O;
  if (O = () => {
    var F = (
      /** @type {V} */
      e[t]
    );
    return F === void 0 ? T() : (m = !0, p = !1, F);
  }, (r & bi) === 0)
    return O;
  if (h) {
    var H = e.$$legacy;
    return function(F, U) {
      return arguments.length > 0 ? ((!U || H || s) && h(U ? O() : F), F) : O();
    };
  }
  var M = !1, V = /* @__PURE__ */ _n(c), Y = /* @__PURE__ */ Pe(() => {
    var F = O(), U = d(V);
    return M ? (M = !1, U) : V.v = F;
  });
  return l || (Y.equals = gn), function(F, U) {
    if (arguments.length > 0) {
      const ve = U ? d(Y) : a ? le(F) : F;
      return Y.equals(ve) || (M = !0, L(V, ve), p && g !== void 0 && (g = ve), Qe(() => d(Y))), F;
    }
    return d(Y);
  };
}
function Fl(e) {
  return new Ml(e);
}
var me, te;
class Ml {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    qt(this, me);
    /** @type {Record<string, any>} */
    qt(this, te);
    var o;
    var r = /* @__PURE__ */ new Map(), i = (a, f) => {
      var s = /* @__PURE__ */ _n(f);
      return r.set(a, s), s;
    };
    const l = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, f) {
          return d(r.get(f) ?? i(f, Reflect.get(a, f)));
        },
        has(a, f) {
          return f === an ? !0 : (d(r.get(f) ?? i(f, Reflect.get(a, f))), Reflect.has(a, f));
        },
        set(a, f, s) {
          return L(r.get(f) ?? i(f, s), s), Reflect.set(a, f, s);
        }
      }
    );
    jt(this, te, (t.hydrate ? xl : Un)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: l,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((o = t == null ? void 0 : t.props) != null && o.$$host) || t.sync === !1) && x(), jt(this, me, l.$$events);
    for (const a of Object.keys(W(this, te)))
      a === "$set" || a === "$destroy" || a === "$on" || $t(this, a, {
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
      Object.assign(l, a);
    }, W(this, te).$destroy = () => {
      Cl(W(this, te));
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
    const i = (...l) => r.call(this, ...l);
    return W(this, me)[t].push(i), () => {
      W(this, me)[t] = W(this, me)[t].filter(
        /** @param {any} fn */
        (l) => l !== i
      );
    };
  }
  $destroy() {
    W(this, te).$destroy();
  }
}
me = new WeakMap(), te = new WeakMap();
let Hn;
typeof HTMLElement == "function" && (Hn = class extends HTMLElement {
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
      const l = this.$$c.$on(t, r);
      this.$$l_u.set(r, l);
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
      const l = this.$$l_u.get(r);
      l && (l(), this.$$l_u.delete(r));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(l) {
        return (o) => {
          const a = document.createElement("slot");
          l !== "default" && (a.name = l), ee(o, a);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, i = Vl(this);
      for (const l of this.$$s)
        l in i && (l === "default" && !this.$$d.children ? (this.$$d.children = t(l), r.default = !0) : r[l] = t(l));
      for (const l of this.attributes) {
        const o = this.$$g_p(l.name);
        o in this.$$d || (this.$$d[o] = pt(o, l.value, this.$$p_d, "toProp"));
      }
      for (const l in this.$$p_d)
        !(l in this.$$d) && this[l] !== void 0 && (this.$$d[l] = this[l], delete this[l]);
      this.$$c = Fl({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = hl(() => {
        tr(() => {
          var l;
          this.$$r = !0;
          for (const o of Et(this.$$c)) {
            if (!((l = this.$$p_d[o]) != null && l.reflect)) continue;
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
      for (const l in this.$$l)
        for (const o of this.$$l[l]) {
          const a = this.$$c.$on(l, o);
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
  attributeChangedCallback(t, r, i) {
    var l;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = pt(t, i, this.$$p_d, "toProp"), (l = this.$$c) == null || l.$set({ [t]: this.$$d[t] }));
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
  var o;
  const l = (o = r[e]) == null ? void 0 : o.type;
  if (t = l === "Boolean" && typeof t != "boolean" ? t != null : t, !i || !r[e])
    return t;
  if (i === "toAttribute")
    switch (l) {
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
    switch (l) {
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
function Ul(e, t, r, i, l, o) {
  let a = class extends Hn {
    constructor() {
      super(e, r, l), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Et(t).map(
        (f) => (t[f].attribute || f).toLowerCase()
      );
    }
  };
  return Et(t).forEach((f) => {
    $t(a.prototype, f, {
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
  }), i.forEach((f) => {
    $t(a.prototype, f, {
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
async function jl(e, t = "SHA-256", r = 1e5) {
  const i = Date.now().toString(16);
  e || (e = Math.round(Math.random() * r));
  const l = await Wn(i, e, t);
  return {
    algorithm: t,
    challenge: l,
    salt: i,
    signature: ""
  };
}
async function Wn(e, t, r) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return ql(
    await crypto.subtle.digest(
      r.toUpperCase(),
      Yn.encode(e + t)
    )
  );
}
function Bl(e, t, r = "SHA-256", i = 1e6, l = 0) {
  const o = new AbortController(), a = Date.now();
  return {
    promise: (async () => {
      for (let s = l; s <= i; s += 1) {
        if (o.signal.aborted)
          return null;
        if (await Wn(t, s, r) === e)
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
function Hl() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function Yl(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let i = 0; i < t.length; i++)
    r[i] = t.charCodeAt(i);
  return r;
}
function Wl(e, t = 12) {
  const r = new Uint8Array(t);
  for (let i = 0; i < t; i++)
    r[i] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function Zl(e, t = "", r = 1e6, i = 0) {
  const l = "AES-GCM", o = new AbortController(), a = Date.now(), f = async () => {
    for (let v = i; v <= r; v += 1) {
      if (o.signal.aborted || !s || !c)
        return null;
      try {
        const h = await crypto.subtle.decrypt(
          {
            name: l,
            iv: Wl(v)
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
    c = Yl(e);
    const v = await crypto.subtle.digest(
      "SHA-256",
      Yn.encode(t)
    );
    s = await crypto.subtle.importKey(
      "raw",
      v,
      l,
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
var b = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(b || {}), Gl = /* @__PURE__ */ kl('<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor" class="altcha-spinner"></path></svg>'), Jl = /* @__PURE__ */ de('<span role="status" aria-live="polite"><!></span> <input type="hidden">', 1), Kl = /* @__PURE__ */ de('<span role="status" aria-live="polite"><!></span>'), Xl = /* @__PURE__ */ de("<label><!></label>"), zl = /* @__PURE__ */ de('<div><a target="_blank" class="altcha-logo"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor"></path></svg></a></div>'), Ql = /* @__PURE__ */ de("<div><!></div>"), eo = /* @__PURE__ */ de("<div><!></div>"), to = /* @__PURE__ */ de('<div class="altcha-error"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg> <!></div>'), ro = /* @__PURE__ */ de('<div class="altcha-footer"><div><!></div></div>'), no = /* @__PURE__ */ de('<div class="altcha-anchor-arrow"></div>'), io = /* @__PURE__ */ de('<!> <div class="altcha"><div class="altcha-main"><!> <div><input type="checkbox"></div> <div class="altcha-label"><!></div> <!></div> <!> <!> <!></div>', 1);
function lo(e, t) {
  var Or, Fr;
  Ln(t, !0);
  let r = I(t, "auto", 7, void 0), i = I(t, "blockspam", 7, void 0), l = I(t, "challengeurl", 7, void 0), o = I(t, "challengejson", 7, void 0), a = I(t, "customfetch", 7, void 0), f = I(t, "debug", 7, !1), s = I(t, "delay", 7, 0), c = I(t, "expire", 7, void 0), v = I(t, "floating", 7, void 0), h = I(t, "floatinganchor", 7, void 0), g = I(t, "floatingoffset", 7, void 0), m = I(t, "floatingpersist", 7, !1), p = I(t, "hidefooter", 7, !1), T = I(t, "hidelogo", 7, !1), O = I(t, "id", 7, void 0), H = I(t, "name", 7, "altcha"), M = I(t, "maxnumber", 7, 1e6), V = I(t, "mockerror", 7, !1), Y = I(t, "obfuscated", 7, void 0), Te = I(t, "plugins", 7, void 0), F = I(t, "refetchonexpire", 7, !0), U = I(t, "spamfilter", 7, !1), ve = I(t, "strings", 7, void 0), z = I(t, "test", 7, !1), Ee = I(t, "verifyurl", 7, void 0), Ue = I(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), tt = I(t, "workerurl", 7, void 0);
  const ir = ["SHA-256", "SHA-384", "SHA-512"], lr = "Visit Altcha.org", or = "https://altcha.org/", rt = (n, u) => {
    t.$$host.dispatchEvent(new CustomEvent(n, { detail: u }));
  }, ar = (Fr = (Or = document.documentElement.lang) == null ? void 0 : Or.split("-")) == null ? void 0 : Fr[0], Lt = /* @__PURE__ */ Pe(() => {
    var n;
    return l() && new URL(l(), location.origin).host.endsWith(".altcha.org") && !!((n = l()) != null && n.includes("apiKey=ckey_"));
  }), Pt = /* @__PURE__ */ Pe(() => o() ? yr(o()) : void 0), sr = /* @__PURE__ */ Pe(() => ve() ? yr(ve()) : {}), Q = /* @__PURE__ */ Pe(() => {
    var n;
    return {
      ariaLinkLabel: lr,
      error: "Verification failed. Try again later.",
      expired: "Verification expired. Try again.",
      footer: `Protected by <a href="${or}" target="_blank" aria-label="${((n = d(sr)) == null ? void 0 : n.ariaLinkLabel) || lr}">ALTCHA</a>`,
      label: "I'm not a robot",
      verified: "Verified",
      verifying: "Verifying...",
      waitAlert: "Verifying... please wait.",
      ...d(sr)
    };
  }), fr = /* @__PURE__ */ Pe(() => `${O() || H()}_checkbox`);
  let qe = Ye(!1), A = Ye(le(b.UNVERIFIED)), q = Ye(void 0), nt = Ye(null), je = null, w = null, Be = Ye(null), se = null, $e = [], De = Ye(null);
  Ht(() => {
    ei(d(Be));
  }), Ht(() => {
    ti(d(A));
  }), Pl(() => {
    Zn(), w && (w.removeEventListener("submit", _r), w.removeEventListener("reset", mr), w.removeEventListener("focusin", gr), w = null), se && (clearTimeout(se), se = null), document.removeEventListener("click", vr), document.removeEventListener("scroll", hr), window.removeEventListener("resize", pr);
  }), Bn(() => {
    var n;
    S("mounted", "1.5.0"), S("workers", Ue()), zn(), S("plugins", $e.length ? $e.map((u) => u.constructor.pluginName).join(", ") : "none"), z() && S("using test mode"), c() && Ot(c()), r() !== void 0 && S("auto", r()), v() !== void 0 && br(v()), w = (n = d(q)) == null ? void 0 : n.closest("form"), w && (w.addEventListener("submit", _r, { capture: !0 }), w.addEventListener("reset", mr), (r() === "onfocus" || m() === "focus") && w.addEventListener("focusin", gr)), r() === "onload" && (Y() ? it() : ke()), d(Lt) && (p() || T()) && S("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
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
      test: z() ? !0 : void 0,
      took: u.took
    }));
  }
  function Zn() {
    for (const n of $e)
      n.destroy();
  }
  function cr() {
    l() && F() && d(A) === b.VERIFIED ? ke() : ot(b.EXPIRED, d(Q).expired);
  }
  async function Gn() {
    var n;
    if (V())
      throw S("mocking error"), new Error("Mocked error.");
    if (d(Pt))
      return S("using provided json data"), d(Pt);
    if (z())
      return S("generating test challenge", { test: z() }), jl(typeof z() != "boolean" ? +z() : void 0);
    {
      if (!l() && w) {
        const k = w.getAttribute("action");
        k != null && k.includes("/form/") && l(k + "/altcha");
      }
      if (!l())
        throw new Error("Attribute challengeurl not set.");
      S("fetching challenge from", l());
      const u = {
        headers: U() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      }, _ = await dr()(l(), u);
      if (!_ || !(_ instanceof Response))
        throw new Error("Fetch function did not return a response.");
      if (_.status !== 200)
        throw new Error(`Server responded with ${_.status}.`);
      const E = _.headers.get("X-Altcha-Config"), N = await _.json(), $ = new URLSearchParams((n = N.salt.split("?")) == null ? void 0 : n[1]), y = $.get("expires") || $.get("expire");
      if (y) {
        const k = new Date(+y * 1e3), he = isNaN(k.getTime()) ? 0 : k.getTime() - Date.now();
        he > 0 && Ot(he);
      }
      if (E)
        try {
          const k = JSON.parse(E);
          k && typeof k == "object" && ("sentinel" in k ? alert("This version of the widget is not compatible with Sentinel. Upgrade to version 2.x.x.") : (k.verifyurl && (k.verifyurl = new URL(k.verifyurl, new URL(l())).toString()), kr(k)));
        } catch (k) {
          S("unable to configure from X-Altcha-Config", k);
        }
      return N;
    }
  }
  function Jn(n) {
    var _;
    const u = w == null ? void 0 : w.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((_ = u == null ? void 0 : u.value) == null ? void 0 : _.slice(u.value.indexOf("@"))) || void 0;
  }
  function dr() {
    let n = fetch;
    if (a())
      if (S("using customfetch"), typeof a() == "string") {
        if (n = globalThis[a()] || null, !n)
          throw new Error(`Custom fetch function not found: ${a()}`);
      } else
        n = a();
    return n;
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
        const N = E.name, $ = E.value;
        return N && $ && (_[N] = /\n/.test($) ? $.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : $), _;
      },
      {}
    );
  }
  function zn() {
    const n = Te() !== void 0 ? Te().split(",") : void 0;
    for (const u of globalThis.altchaPlugins)
      (!n || n.includes(u.pluginName)) && $e.push(new u({
        el: d(q),
        clarify: it,
        dispatch: rt,
        getConfiguration: xr,
        getFloatingAnchor: Cr,
        getState: Ar,
        log: S,
        reset: ot,
        solve: $r,
        setState: Le,
        setFloatingAnchor: Rr,
        verify: ke
      }));
  }
  function S(...n) {
    (f() || n.some((u) => u instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${H()}]`, ...n);
  }
  function Qn() {
    [b.UNVERIFIED, b.ERROR, b.EXPIRED].includes(d(A)) ? U() !== !1 && (w == null ? void 0 : w.reportValidity()) === !1 ? L(qe, !1) : Y() ? it() : ke() : L(qe, !0);
  }
  function vr(n) {
    const u = n.target;
    v() && u && !d(q).contains(u) && (d(A) === b.VERIFIED && m() === !1 || d(A) === b.VERIFIED && m() === "focus" && !(w != null && w.matches(":focus-within")) || r() === "off" && d(A) === b.UNVERIFIED) && Ir();
  }
  function hr() {
    v() && d(A) !== b.UNVERIFIED && lt();
  }
  function ei(n) {
    for (const u of $e)
      typeof u.onErrorChange == "function" && u.onErrorChange(d(Be));
  }
  function gr(n) {
    d(A) === b.UNVERIFIED ? ke() : v() && m() === "focus" && d(A) === b.VERIFIED && Ft();
  }
  function _r(n) {
    w && r() === "onsubmit" ? d(A) === b.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), ke().then(() => {
      ni();
    })) : d(A) !== b.VERIFIED && (n.preventDefault(), n.stopPropagation(), d(A) === b.VERIFYING && wr()) : w && v() && r() === "off" && d(A) === b.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), Ft());
  }
  function mr() {
    ot();
  }
  function wr() {
    d(A) === b.VERIFYING && d(Q).waitAlert && alert(d(Q).waitAlert);
  }
  function ti(n) {
    for (const u of $e)
      typeof u.onStateChange == "function" && u.onStateChange(d(A));
    v() && d(A) !== b.UNVERIFIED && requestAnimationFrame(() => {
      lt();
    }), L(qe, d(A) === b.VERIFIED);
  }
  function pr() {
    v() && lt();
  }
  function yr(n) {
    return JSON.parse(n);
  }
  async function ri(n) {
    if (!Ee())
      throw new Error("Attribute verifyurl not set.");
    S("requesting server verification from", Ee());
    const u = { payload: n };
    if (U() !== !1) {
      const {
        blockedCountries: N,
        classifier: $,
        disableRules: y,
        email: k,
        expectedLanguages: he,
        expectedCountries: Ut,
        fields: st,
        ipAddress: ft,
        text: _i,
        timeZone: Mr
      } = Kn();
      u.blockedCountries = N, u.classifier = $, u.disableRules = y, u.email = k === !1 ? void 0 : Jn(k), u.expectedCountries = Ut, u.expectedLanguages = he || (ar ? [ar] : void 0), u.fields = st === !1 ? void 0 : Xn(st), u.ipAddress = ft === !1 ? void 0 : ft || "auto", u.text = _i, u.timeZone = Mr === !1 ? void 0 : Mr || Hl();
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
    if (E != null && E.payload && L(De, le(E.payload)), rt("serververification", E), i() && E.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  function ni() {
    w && "requestSubmit" in w ? w.requestSubmit() : w != null && w.reportValidity() && w.submit();
  }
  function Ot(n) {
    S("expire", n), se && (clearTimeout(se), se = null), n < 1 ? cr() : se = setTimeout(cr, n);
  }
  function br(n) {
    S("floating", n), v() !== n && (d(q).style.left = "", d(q).style.top = ""), v(n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : v()), v() ? (r() || r("onsubmit"), document.addEventListener("scroll", hr), document.addEventListener("click", vr), window.addEventListener("resize", pr)) : r() === "onsubmit" && r(void 0);
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
  async function $r(n) {
    let u = null;
    if ("Worker" in window) {
      try {
        u = await ii(n, n.maxNumber || n.maxnumber || M());
      } catch (_) {
        S(_);
      }
      if ((u == null ? void 0 : u.number) !== void 0 || "obfuscated" in n)
        return { data: n, solution: u };
    }
    if ("obfuscated" in n) {
      const _ = await Zl(n.obfuscated, n.key, n.maxNumber || n.maxnumber);
      return { data: n, solution: await _.promise };
    }
    return {
      data: n,
      solution: await Bl(n.challenge, n.salt, n.algorithm, n.maxNumber || n.maxnumber || M()).promise
    };
  }
  async function ii(n, u = typeof z() == "number" ? z() : n.maxNumber || n.maxnumber || M(), _ = Math.ceil(Ue())) {
    const E = [];
    _ = Math.min(16, u, Math.max(1, _));
    for (let y = 0; y < _; y++)
      E.push(altchaCreateWorker(tt()));
    const N = Math.ceil(u / _), $ = await Promise.all(E.map((y, k) => {
      const he = k * N;
      return new Promise((Ut) => {
        y.addEventListener("message", (st) => {
          if (st.data)
            for (const ft of E)
              ft !== y && ft.postMessage({ type: "abort" });
          Ut(st.data);
        }), y.postMessage({
          payload: n,
          max: he + N,
          start: he,
          type: "work"
        });
      });
    }));
    for (const y of E)
      y.terminate();
    return $.find((y) => !!y) || null;
  }
  async function it() {
    if (!Y()) {
      Le(b.ERROR);
      return;
    }
    const n = $e.find((u) => u.constructor.pluginName === "obfuscation");
    if (!n || !("clarify" in n)) {
      Le(b.ERROR), S("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in n && typeof n.clarify == "function")
      return n.clarify();
  }
  function kr(n) {
    n.obfuscated !== void 0 && Y(n.obfuscated), n.auto !== void 0 && (r(n.auto), r() === "onload" && (Y() ? it() : ke())), n.blockspam !== void 0 && i(!!n.blockspam), n.customfetch !== void 0 && a(n.customfetch), n.floatinganchor !== void 0 && h(n.floatinganchor), n.delay !== void 0 && s(n.delay), n.floatingoffset !== void 0 && g(n.floatingoffset), n.floating !== void 0 && br(n.floating), n.expire !== void 0 && (Ot(n.expire), c(n.expire)), n.challenge && (o(typeof n.challenge == "string" ? n.challenge : JSON.stringify(n.challenge)), Er(d(Pt))), n.challengeurl !== void 0 && l(n.challengeurl), n.debug !== void 0 && f(!!n.debug), n.hidefooter !== void 0 && p(!!n.hidefooter), n.hidelogo !== void 0 && T(!!n.hidelogo), n.maxnumber !== void 0 && M(+n.maxnumber), n.mockerror !== void 0 && V(!!n.mockerror), n.name !== void 0 && H(n.name), n.refetchonexpire !== void 0 && F(!!n.refetchonexpire), n.spamfilter !== void 0 && U(typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && ve(typeof n.strings == "string" ? n.strings : JSON.stringify(n.strings)), n.test !== void 0 && z(typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && Ee(n.verifyurl), n.workers !== void 0 && Ue(+n.workers), n.workerurl !== void 0 && tt(n.workerurl);
  }
  function xr() {
    return {
      auto: r(),
      blockspam: i(),
      challengeurl: l(),
      debug: f(),
      delay: s(),
      expire: c(),
      floating: v(),
      floatinganchor: h(),
      floatingoffset: g(),
      hidefooter: p(),
      hidelogo: T(),
      name: H(),
      maxnumber: M(),
      mockerror: V(),
      obfuscated: Y(),
      refetchonexpire: F(),
      spamfilter: U(),
      strings: d(Q),
      test: z(),
      verifyurl: Ee(),
      workers: Ue(),
      workerurl: tt()
    };
  }
  function Cr() {
    return je;
  }
  function li(n) {
    return $e.find((u) => u.constructor.pluginName === n);
  }
  function Ar() {
    return d(A);
  }
  function Ir() {
    d(q).style.display = "none";
  }
  function lt(n = 20) {
    if (d(q))
      if (je || (je = (h() ? document.querySelector(h()) : w == null ? void 0 : w.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || w), je) {
        const u = parseInt(g(), 10) || 12, _ = je.getBoundingClientRect(), E = d(q).getBoundingClientRect(), N = document.documentElement.clientHeight, $ = document.documentElement.clientWidth, y = v() === "auto" ? _.bottom + E.height + u + n > N : v() === "top", k = Math.max(n, Math.min($ - n - E.width, _.left + _.width / 2 - E.width / 2));
        if (y ? d(q).style.top = `${_.top - (E.height + u)}px` : d(q).style.top = `${_.bottom + u}px`, d(q).style.left = `${k}px`, d(q).setAttribute("data-floating", y ? "top" : "bottom"), d(nt)) {
          const he = d(nt).getBoundingClientRect();
          d(nt).style.left = _.left - k + _.width / 2 - he.width / 2 + "px";
        }
      } else
        S("unable to find floating anchor element");
  }
  function ot(n = b.UNVERIFIED, u = null) {
    se && (clearTimeout(se), se = null), L(qe, !1), L(De, null), Le(n, u);
  }
  function Rr(n) {
    je = n;
  }
  function Le(n, u = null) {
    L(A, le(n)), L(Be, le(u)), rt("statechange", {
      payload: d(De),
      state: d(A)
    });
  }
  function Ft() {
    d(q).style.display = "block", v() && lt();
  }
  async function ke() {
    return ot(b.VERIFYING), await new Promise((n) => setTimeout(n, s() || 0)), Gn().then((n) => (Er(n), S("challenge", n), $r(n))).then(({ data: n, solution: u }) => {
      if (S("solution", u), !u || n && "challenge" in n && !("clearText" in u))
        if ((u == null ? void 0 : u.number) !== void 0 && "challenge" in n) {
          if (Ee())
            return ri(ur(n, u));
          L(De, le(ur(n, u))), S("payload", d(De));
        } else
          throw S("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      Le(b.VERIFIED), S("verified"), fl().then(() => {
        rt("verified", { payload: d(De) });
      });
    }).catch((n) => {
      S(n), Le(b.ERROR, n.message);
    });
  }
  var Sr = io(), Nr = Yr(Sr);
  Al(Nr, t, "default", {});
  var at = ge(Nr, 2), Mt = J(at), Tr = J(Mt);
  {
    var oi = (n) => {
      var u = Gl();
      ee(n, u);
    };
    xe(Tr, (n) => {
      d(A) === b.VERIFYING && n(oi);
    });
  }
  var _t = ge(Tr, 2);
  let Dr;
  var He = J(_t);
  Xr(He), He.__change = Qn, G(_t);
  var Vt = ge(_t, 2), ai = J(Vt);
  {
    var si = (n) => {
      var u = Jl(), _ = Yr(u), E = J(_);
      Ge(E, () => d(Q).verified), G(_);
      var N = ge(_, 2);
      Xr(N), We(() => {
        ie(N, "name", H()), Tl(N, d(De));
      }), ee(n, u);
    }, fi = (n, u) => {
      {
        var _ = (N) => {
          var $ = Kl(), y = J($);
          Ge(y, () => d(Q).verifying), G($), ee(N, $);
        }, E = (N) => {
          var $ = Xl(), y = J($);
          Ge(y, () => d(Q).label), G($), We(() => ie($, "for", d(fr))), ee(N, $);
        };
        xe(
          n,
          (N) => {
            d(A) === b.VERIFYING ? N(_) : N(E, !1);
          },
          u
        );
      }
    };
    xe(ai, (n) => {
      d(A) === b.VERIFIED ? n(si) : n(fi, !1);
    });
  }
  G(Vt);
  var ui = ge(Vt, 2);
  {
    var ci = (n) => {
      var u = zl(), _ = J(u);
      ie(_, "href", or), G(u), We(() => ie(_, "aria-label", d(Q).ariaLinkLabel)), ee(n, u);
    };
    xe(ui, (n) => {
      (T() !== !0 || d(Lt)) && n(ci);
    });
  }
  G(Mt);
  var Lr = ge(Mt, 2);
  {
    var di = (n) => {
      var u = to(), _ = ge(J(u), 2);
      {
        var E = ($) => {
          var y = Ql(), k = J(y);
          Ge(k, () => d(Q).expired), G(y), We(() => ie(y, "title", d(Be))), ee($, y);
        }, N = ($) => {
          var y = eo(), k = J(y);
          Ge(k, () => d(Q).error), G(y), We(() => ie(y, "title", d(Be))), ee($, y);
        };
        xe(_, ($) => {
          d(A) === b.EXPIRED ? $(E) : $(N, !1);
        });
      }
      G(u), ee(n, u);
    };
    xe(Lr, (n) => {
      (d(Be) || d(A) === b.EXPIRED) && n(di);
    });
  }
  var Pr = ge(Lr, 2);
  {
    var vi = (n) => {
      var u = ro(), _ = J(u), E = J(_);
      Ge(E, () => d(Q).footer), G(_), G(u), ee(n, u);
    };
    xe(Pr, (n) => {
      d(Q).footer && (p() !== !0 || d(Lt)) && n(vi);
    });
  }
  var hi = ge(Pr, 2);
  {
    var gi = (n) => {
      var u = no();
      en(u, (_) => L(nt, _), () => d(nt)), ee(n, u);
    };
    xe(hi, (n) => {
      v() && n(gi);
    });
  }
  return G(at), en(at, (n) => L(q, n), () => d(q)), We(
    (n) => {
      ie(at, "data-state", d(A)), ie(at, "data-floating", v()), Dr = Rl(_t, 1, "altcha-checkbox", null, Dr, n), ie(He, "id", d(fr)), He.required = r() !== "onsubmit" && (!v() || r() !== "off");
    },
    [
      () => ({
        "altcha-hidden": d(A) === b.VERIFYING
      })
    ]
  ), El("invalid", He, wr), Ll(He, () => d(qe), (n) => L(qe, n)), ee(e, Sr), Pn({
    clarify: it,
    configure: kr,
    getConfiguration: xr,
    getFloatingAnchor: Cr,
    getPlugin: li,
    getState: Ar,
    hide: Ir,
    repositionFloating: lt,
    reset: ot,
    setFloatingAnchor: Rr,
    setState: Le,
    show: Ft,
    verify: ke,
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
      return l();
    },
    set challengeurl(n = void 0) {
      l(n), x();
    },
    get challengejson() {
      return o();
    },
    set challengejson(n = void 0) {
      o(n), x();
    },
    get customfetch() {
      return a();
    },
    set customfetch(n = void 0) {
      a(n), x();
    },
    get debug() {
      return f();
    },
    set debug(n = !1) {
      f(n), x();
    },
    get delay() {
      return s();
    },
    set delay(n = 0) {
      s(n), x();
    },
    get expire() {
      return c();
    },
    set expire(n = void 0) {
      c(n), x();
    },
    get floating() {
      return v();
    },
    set floating(n = void 0) {
      v(n), x();
    },
    get floatinganchor() {
      return h();
    },
    set floatinganchor(n = void 0) {
      h(n), x();
    },
    get floatingoffset() {
      return g();
    },
    set floatingoffset(n = void 0) {
      g(n), x();
    },
    get floatingpersist() {
      return m();
    },
    set floatingpersist(n = !1) {
      m(n), x();
    },
    get hidefooter() {
      return p();
    },
    set hidefooter(n = !1) {
      p(n), x();
    },
    get hidelogo() {
      return T();
    },
    set hidelogo(n = !1) {
      T(n), x();
    },
    get id() {
      return O();
    },
    set id(n = void 0) {
      O(n), x();
    },
    get name() {
      return H();
    },
    set name(n = "altcha") {
      H(n), x();
    },
    get maxnumber() {
      return M();
    },
    set maxnumber(n = 1e6) {
      M(n), x();
    },
    get mockerror() {
      return V();
    },
    set mockerror(n = !1) {
      V(n), x();
    },
    get obfuscated() {
      return Y();
    },
    set obfuscated(n = void 0) {
      Y(n), x();
    },
    get plugins() {
      return Te();
    },
    set plugins(n = void 0) {
      Te(n), x();
    },
    get refetchonexpire() {
      return F();
    },
    set refetchonexpire(n = !0) {
      F(n), x();
    },
    get spamfilter() {
      return U();
    },
    set spamfilter(n = !1) {
      U(n), x();
    },
    get strings() {
      return ve();
    },
    set strings(n = void 0) {
      ve(n), x();
    },
    get test() {
      return z();
    },
    set test(n = !1) {
      z(n), x();
    },
    get verifyurl() {
      return Ee();
    },
    set verifyurl(n = void 0) {
      Ee(n), x();
    },
    get workers() {
      return Ue();
    },
    set workers(n = Math.min(16, navigator.hardwareConcurrency || 8)) {
      Ue(n), x();
    },
    get workerurl() {
      return tt();
    },
    set workerurl(n = void 0) {
      tt(n), x();
    }
  });
}
$l(["change"]);
customElements.define("altcha-widget", Ul(
  lo,
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
globalThis.altchaCreateWorker = (e) => new Worker(new URL(e || "./worker.js", import.meta.url));
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
export {
  lo as Altcha
};
