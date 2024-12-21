var di = Object.defineProperty;
var Pr = (e) => {
  throw TypeError(e);
};
var vi = (e, t, r) => t in e ? di(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ne = (e, t, r) => vi(e, typeof t != "symbol" ? t + "" : t, r), zr = (e, t, r) => t.has(e) || Pr("Cannot " + r);
var Y = (e, t, r) => (zr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Mt = (e, t, r) => t.has(e) ? Pr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), qt = (e, t, r, l) => (zr(e, t, "write to private field"), l ? l.call(e, r) : t.set(e, r), r);
const hi = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(hi);
const _i = 1, gi = 4, mi = 8, pi = 16, yi = 1, wi = 2, Zr = "[", Gr = "[!", Jr = "]", Ye = {}, W = Symbol(), Kr = !1;
var Xr = Array.isArray, bi = Array.from, $t = Object.keys, kt = Object.defineProperty, Ne = Object.getOwnPropertyDescriptor, Ei = Object.getOwnPropertyDescriptors, xi = Object.prototype, $i = Array.prototype, Ut = Object.getPrototypeOf;
function Qr(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const oe = 2, en = 4, vt = 8, Jt = 16, ae = 32, ht = 64, jt = 128, Le = 256, Ct = 512, Z = 1024, ke = 2048, _t = 4096, Ge = 8192, Xe = 16384, ki = 32768, Kt = 65536, Ci = 1 << 19, tn = 1 << 20, ut = Symbol("$state"), rn = Symbol("legacy props"), Ai = Symbol("");
function nn(e) {
  return e === this.v;
}
function Ri(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function ln(e) {
  return !Ri(e, this.v);
}
function Ii(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Si() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ti(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ni() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Di() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Li(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Pi() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function zi() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Oi() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Fi() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let on = !1;
function ce(e) {
  return {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: nn,
    version: 0
  };
}
function qe(e) {
  return /* @__PURE__ */ Mi(ce(e));
}
// @__NO_SIDE_EFFECTS__
function an(e, t = !1) {
  const r = ce(e);
  return t || (r.equals = ln), r;
}
// @__NO_SIDE_EFFECTS__
function Mi(e) {
  return C !== null && C.f & oe && (de === null ? Qi([e]) : de.push(e)), e;
}
function L(e, t) {
  return C !== null && tl() && C.f & (oe | Jt) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (de === null || !de.includes(e)) && Fi(), qi(e, t);
}
function qi(e, t) {
  return e.equals(t) || (e.v = t, e.version = Cn(), sn(e, ke), y !== null && y.f & Z && !(y.f & ae) && (V !== null && V.includes(e) ? (he(y, ke), Lt(y)) : xe === null ? el([e]) : xe.push(e))), t;
}
function sn(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var l = r.length, i = 0; i < l; i++) {
      var o = r[i], a = o.f;
      a & ke || (he(o, t), a & (Z | Le) && (a & oe ? sn(
        /** @type {Derived} */
        o,
        _t
      ) : Lt(
        /** @type {Effect} */
        o
      )));
    }
}
function St(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let z = !1;
function Be(e) {
  z = e;
}
let P;
function Ce(e) {
  if (e === null)
    throw St(), Ye;
  return P = e;
}
function Je() {
  return Ce(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Re(P)
  );
}
function G(e) {
  if (z) {
    if (/* @__PURE__ */ Re(P) !== null)
      throw St(), Ye;
    P = e;
  }
}
function Vi() {
  for (var e = 0, t = P; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === Jr) {
        if (e === 0) return t;
        e -= 1;
      } else (r === Zr || r === Gr) && (e += 1);
    }
    var l = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Re(t)
    );
    t.remove(), t = l;
  }
}
function le(e, t = null, r) {
  if (typeof e != "object" || e === null || ut in e)
    return e;
  const l = Ut(e);
  if (l !== xi && l !== $i)
    return e;
  var i = /* @__PURE__ */ new Map(), o = Xr(e), a = ce(0);
  o && i.set("length", ce(
    /** @type {any[]} */
    e.length
  ));
  var d;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(u, f, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Pi();
        var h = i.get(f);
        return h === void 0 ? (h = ce(c.value), i.set(f, h)) : L(h, le(c.value, d)), !0;
      },
      deleteProperty(u, f) {
        var c = i.get(f);
        if (c === void 0)
          f in u && i.set(f, ce(W));
        else {
          if (o && typeof f == "string") {
            var h = (
              /** @type {Source<number>} */
              i.get("length")
            ), _ = Number(f);
            Number.isInteger(_) && _ < h.v && L(h, _);
          }
          L(c, W), Or(a);
        }
        return !0;
      },
      get(u, f, c) {
        var w;
        if (f === ut)
          return e;
        var h = i.get(f), _ = f in u;
        if (h === void 0 && (!_ || (w = Ne(u, f)) != null && w.writable) && (h = ce(le(_ ? u[f] : W, d)), i.set(f, h)), h !== void 0) {
          var m = v(h);
          return m === W ? void 0 : m;
        }
        return Reflect.get(u, f, c);
      },
      getOwnPropertyDescriptor(u, f) {
        var c = Reflect.getOwnPropertyDescriptor(u, f);
        if (c && "value" in c) {
          var h = i.get(f);
          h && (c.value = v(h));
        } else if (c === void 0) {
          var _ = i.get(f), m = _ == null ? void 0 : _.v;
          if (_ !== void 0 && m !== W)
            return {
              enumerable: !0,
              configurable: !0,
              value: m,
              writable: !0
            };
        }
        return c;
      },
      has(u, f) {
        var m;
        if (f === ut)
          return !0;
        var c = i.get(f), h = c !== void 0 && c.v !== W || Reflect.has(u, f);
        if (c !== void 0 || y !== null && (!h || (m = Ne(u, f)) != null && m.writable)) {
          c === void 0 && (c = ce(h ? le(u[f], d) : W), i.set(f, c));
          var _ = v(c);
          if (_ === W)
            return !1;
        }
        return h;
      },
      set(u, f, c, h) {
        var j;
        var _ = i.get(f), m = f in u;
        if (o && f === "length")
          for (var w = c; w < /** @type {Source<number>} */
          _.v; w += 1) {
            var T = i.get(w + "");
            T !== void 0 ? L(T, W) : w in u && (T = ce(W), i.set(w + "", T));
          }
        _ === void 0 ? (!m || (j = Ne(u, f)) != null && j.writable) && (_ = ce(void 0), L(_, le(c, d)), i.set(f, _)) : (m = _.v !== W, L(_, le(c, d)));
        var O = Reflect.getOwnPropertyDescriptor(u, f);
        if (O != null && O.set && O.set.call(h, c), !m) {
          if (o && typeof f == "string") {
            var Q = (
              /** @type {Source<number>} */
              i.get("length")
            ), F = Number(f);
            Number.isInteger(F) && F >= Q.v && L(Q, F + 1);
          }
          Or(a);
        }
        return !0;
      },
      ownKeys(u) {
        v(a);
        var f = Reflect.ownKeys(u).filter((_) => {
          var m = i.get(_);
          return m === void 0 || m.v !== W;
        });
        for (var [c, h] of i)
          h.v !== W && !(c in u) && f.push(c);
        return f;
      },
      setPrototypeOf() {
        zi();
      }
    }
  );
}
function Or(e, t = 1) {
  L(e, e.v + t);
}
var Fr, un, fn;
function Bt() {
  if (Fr === void 0) {
    Fr = window;
    var e = Element.prototype, t = Node.prototype;
    un = Ne(t, "firstChild").get, fn = Ne(t, "nextSibling").get, e.__click = void 0, e.__className = "", e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Tt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function De(e) {
  return un.call(e);
}
// @__NO_SIDE_EFFECTS__
function Re(e) {
  return fn.call(e);
}
function J(e, t) {
  if (!z)
    return /* @__PURE__ */ De(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ De(P)
  );
  return r === null && (r = P.appendChild(Tt())), Ce(r), r;
}
function Vt(e, t) {
  if (!z) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ De(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Re(r) : r;
  }
  return P;
}
function me(e, t = 1, r = !1) {
  let l = z ? P : e;
  for (var i; t--; )
    i = l, l = /** @type {TemplateNode} */
    /* @__PURE__ */ Re(l);
  if (!z)
    return l;
  var o = l == null ? void 0 : l.nodeType;
  if (r && o !== 3) {
    var a = Tt();
    return l === null ? i == null || i.after(a) : l.before(a), Ce(a), a;
  }
  return Ce(l), /** @type {TemplateNode} */
  l;
}
function Ui(e) {
  e.textContent = "";
}
// @__NO_SIDE_EFFECTS__
function at(e) {
  var t = oe | ke;
  y === null ? t |= Le : y.f |= tn;
  var r = C !== null && C.f & oe ? (
    /** @type {Derived} */
    C
  ) : null;
  const l = {
    children: null,
    ctx: U,
    deps: null,
    equals: nn,
    f: t,
    fn: e,
    reactions: null,
    v: (
      /** @type {V} */
      null
    ),
    version: 0,
    parent: r ?? y
  };
  return r !== null && (r.children ?? (r.children = [])).push(l), l;
}
function cn(e) {
  var t = e.children;
  if (t !== null) {
    e.children = null;
    for (var r = 0; r < t.length; r += 1) {
      var l = t[r];
      l.f & oe ? Xt(
        /** @type {Derived} */
        l
      ) : Pe(
        /** @type {Effect} */
        l
      );
    }
  }
}
function ji(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & oe))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function dn(e) {
  var t, r = y;
  ve(ji(e));
  try {
    cn(e), t = An(e);
  } finally {
    ve(r);
  }
  return t;
}
function vn(e) {
  var t = dn(e), r = (He || e.f & Le) && e.deps !== null ? _t : Z;
  he(e, r), e.equals(t) || (e.v = t, e.version = Cn());
}
function Xt(e) {
  cn(e), dt(e, 0), he(e, Xe), e.v = e.children = e.deps = e.ctx = e.reactions = null;
}
function Bi(e) {
  y === null && C === null && Ti(), C !== null && C.f & Le && Si(), nr && Ii();
}
function Hi(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Qe(e, t, r, l = !0) {
  var i = (e & ht) !== 0, o = y, a = {
    ctx: U,
    deps: null,
    deriveds: null,
    nodes_start: null,
    nodes_end: null,
    f: e | ke,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: i ? null : o,
    prev: null,
    teardown: null,
    transitions: null,
    version: 0
  };
  if (r) {
    var d = We;
    try {
      Vr(!0), Dt(a), a.f |= ki;
    } catch (c) {
      throw Pe(a), c;
    } finally {
      Vr(d);
    }
  } else t !== null && Lt(a);
  var u = r && a.deps === null && a.first === null && a.nodes_start === null && a.teardown === null && (a.f & tn) === 0;
  if (!u && !i && l && (o !== null && Hi(a, o), C !== null && C.f & oe)) {
    var f = (
      /** @type {Derived} */
      C
    );
    (f.children ?? (f.children = [])).push(a);
  }
  return a;
}
function Yi(e) {
  const t = Qe(vt, null, !1);
  return he(t, Z), t.teardown = e, t;
}
function Ht(e) {
  Bi();
  var t = y !== null && (y.f & ae) !== 0 && U !== null && !U.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      U
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: y,
      reaction: C
    });
  } else {
    var l = Qt(e);
    return l;
  }
}
function hn(e) {
  const t = Qe(ht, e, !0);
  return () => {
    Pe(t);
  };
}
function Qt(e) {
  return Qe(en, e, !1);
}
function er(e) {
  return Qe(vt, e, !0);
}
function Ve(e) {
  return tr(e);
}
function tr(e, t = 0) {
  return Qe(vt | Jt | t, e, !0);
}
function At(e, t = !0) {
  return Qe(vt | ae, e, !0, t);
}
function _n(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = nr, l = C;
    Ur(!0), Ae(null);
    try {
      t.call(null);
    } finally {
      Ur(r), Ae(l);
    }
  }
}
function gn(e) {
  var t = e.deriveds;
  if (t !== null) {
    e.deriveds = null;
    for (var r = 0; r < t.length; r += 1)
      Xt(t[r]);
  }
}
function mn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var l = r.next;
    Pe(r, t), r = l;
  }
}
function Wi(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    t.f & ae || Pe(t), t = r;
  }
}
function Pe(e, t = !0) {
  var r = !1;
  if ((t || e.f & Ci) && e.nodes_start !== null) {
    for (var l = e.nodes_start, i = e.nodes_end; l !== null; ) {
      var o = l === i ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Re(l)
      );
      l.remove(), l = o;
    }
    r = !0;
  }
  mn(e, t && !r), gn(e), dt(e, 0), he(e, Xe);
  var a = e.transitions;
  if (a !== null)
    for (const u of a)
      u.stop();
  _n(e);
  var d = e.parent;
  d !== null && d.first !== null && pn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function pn(e) {
  var t = e.parent, r = e.prev, l = e.next;
  r !== null && (r.next = l), l !== null && (l.prev = r), t !== null && (t.first === e && (t.first = l), t.last === e && (t.last = r));
}
function Mr(e, t) {
  var r = [];
  yn(e, r, !0), Zi(r, () => {
    Pe(e), t && t();
  });
}
function Zi(e, t) {
  var r = e.length;
  if (r > 0) {
    var l = () => --r || t();
    for (var i of e)
      i.out(l);
  } else
    t();
}
function yn(e, t, r) {
  if (!(e.f & Ge)) {
    if (e.f ^= Ge, e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || r) && t.push(a);
    for (var l = e.first; l !== null; ) {
      var i = l.next, o = (l.f & Kt) !== 0 || (l.f & ae) !== 0;
      yn(l, t, o ? r : !1), l = i;
    }
  }
}
function qr(e) {
  wn(e, !0);
}
function wn(e, t) {
  if (e.f & Ge) {
    gt(e) && Dt(e), e.f ^= Ge;
    for (var r = e.first; r !== null; ) {
      var l = r.next, i = (r.f & Kt) !== 0 || (r.f & ae) !== 0;
      wn(r, i ? t : !1), r = l;
    }
    if (e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || t) && o.in();
  }
}
const Gi = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Rt = !1, It = !1, Yt = [], Wt = [];
function bn() {
  Rt = !1;
  const e = Yt.slice();
  Yt = [], Qr(e);
}
function En() {
  It = !1;
  const e = Wt.slice();
  Wt = [], Qr(e);
}
function rr(e) {
  Rt || (Rt = !0, queueMicrotask(bn)), Yt.push(e);
}
function Ji(e) {
  It || (It = !0, Gi(En)), Wt.push(e);
}
function Ki() {
  Rt && bn(), It && En();
}
function xn(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
const $n = 0, Xi = 1;
let bt = !1, Et = $n, ft = !1, ct = null, We = !1, nr = !1;
function Vr(e) {
  We = e;
}
function Ur(e) {
  nr = e;
}
let Te = [], Ze = 0;
let C = null;
function Ae(e) {
  C = e;
}
let y = null;
function ve(e) {
  y = e;
}
let de = null;
function Qi(e) {
  de = e;
}
let V = null, X = 0, xe = null;
function el(e) {
  xe = e;
}
let kn = 0, He = !1, U = null;
function Cn() {
  return ++kn;
}
function tl() {
  return !on;
}
function gt(e) {
  var a, d;
  var t = e.f;
  if (t & ke)
    return !0;
  if (t & _t) {
    var r = e.deps, l = (t & Le) !== 0;
    if (r !== null) {
      var i;
      if (t & Ct) {
        for (i = 0; i < r.length; i++)
          ((a = r[i]).reactions ?? (a.reactions = [])).push(e);
        e.f ^= Ct;
      }
      for (i = 0; i < r.length; i++) {
        var o = r[i];
        if (gt(
          /** @type {Derived} */
          o
        ) && vn(
          /** @type {Derived} */
          o
        ), l && y !== null && !He && !((d = o == null ? void 0 : o.reactions) != null && d.includes(e)) && (o.reactions ?? (o.reactions = [])).push(e), o.version > e.version)
          return !0;
      }
    }
    l || he(e, Z);
  }
  return !1;
}
function rl(e, t) {
  for (var r = t; r !== null; ) {
    if (r.f & jt)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= jt;
      }
    r = r.parent;
  }
  throw bt = !1, e;
}
function nl(e) {
  return (e.f & Xe) === 0 && (e.parent === null || (e.parent.f & jt) === 0);
}
function Nt(e, t, r, l) {
  if (bt) {
    if (r === null && (bt = !1), nl(t))
      throw e;
    return;
  }
  r !== null && (bt = !0);
  {
    rl(e, t);
    return;
  }
}
function An(e) {
  var _;
  var t = V, r = X, l = xe, i = C, o = He, a = de, d = U, u = e.f;
  V = /** @type {null | Value[]} */
  null, X = 0, xe = null, C = u & (ae | ht) ? null : e, He = !We && (u & Le) !== 0, de = null, U = e.ctx;
  try {
    var f = (
      /** @type {Function} */
      (0, e.fn)()
    ), c = e.deps;
    if (V !== null) {
      var h;
      if (dt(e, X), c !== null && X > 0)
        for (c.length = X + V.length, h = 0; h < V.length; h++)
          c[X + h] = V[h];
      else
        e.deps = c = V;
      if (!He)
        for (h = X; h < c.length; h++)
          ((_ = c[h]).reactions ?? (_.reactions = [])).push(e);
    } else c !== null && X < c.length && (dt(e, X), c.length = X);
    return f;
  } finally {
    V = t, X = r, xe = l, C = i, He = o, de = a, U = d;
  }
}
function il(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var l = r.indexOf(e);
    if (l !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[l] = r[i], r.pop());
    }
  }
  r === null && t.f & oe && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (V === null || !V.includes(t)) && (he(t, _t), t.f & (Le | Ct) || (t.f ^= Ct), dt(
    /** @type {Derived} **/
    t,
    0
  ));
}
function dt(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var l = t; l < r.length; l++)
      il(e, r[l]);
}
function Dt(e) {
  var t = e.f;
  if (!(t & Xe)) {
    he(e, Z);
    var r = y, l = U;
    y = e;
    try {
      t & Jt ? Wi(e) : mn(e), gn(e), _n(e);
      var i = An(e);
      e.teardown = typeof i == "function" ? i : null, e.version = kn;
    } catch (o) {
      Nt(o, e, r, l || e.ctx);
    } finally {
      y = r;
    }
  }
}
function Rn() {
  if (Ze > 1e3) {
    Ze = 0;
    try {
      Ni();
    } catch (e) {
      if (ct !== null)
        Nt(e, ct, null);
      else
        throw e;
    }
  }
  Ze++;
}
function In(e) {
  var t = e.length;
  if (t !== 0) {
    Rn();
    var r = We;
    We = !0;
    try {
      for (var l = 0; l < t; l++) {
        var i = e[l];
        i.f & Z || (i.f ^= Z);
        var o = [];
        Sn(i, o), ll(o);
      }
    } finally {
      We = r;
    }
  }
}
function ll(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var l = e[r];
      if (!(l.f & (Xe | Ge)))
        try {
          gt(l) && (Dt(l), l.deps === null && l.first === null && l.nodes_start === null && (l.teardown === null ? pn(l) : l.fn = null));
        } catch (i) {
          Nt(i, l, null, l.ctx);
        }
    }
}
function ol() {
  if (ft = !1, Ze > 1001)
    return;
  const e = Te;
  Te = [], In(e), ft || (Ze = 0, ct = null);
}
function Lt(e) {
  Et === $n && (ft || (ft = !0, queueMicrotask(ol))), ct = e;
  for (var t = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if (r & (ht | ae)) {
      if (!(r & Z)) return;
      t.f ^= Z;
    }
  }
  Te.push(t);
}
function Sn(e, t) {
  var r = e.first, l = [];
  e: for (; r !== null; ) {
    var i = r.f, o = (i & ae) !== 0, a = o && (i & Z) !== 0, d = r.next;
    if (!a && !(i & Ge))
      if (i & vt) {
        if (o)
          r.f ^= Z;
        else
          try {
            gt(r) && Dt(r);
          } catch (h) {
            Nt(h, r, null, r.ctx);
          }
        var u = r.first;
        if (u !== null) {
          r = u;
          continue;
        }
      } else i & en && l.push(r);
    if (d === null) {
      let h = r.parent;
      for (; h !== null; ) {
        if (e === h)
          break e;
        var f = h.next;
        if (f !== null) {
          r = f;
          continue e;
        }
        h = h.parent;
      }
    }
    r = d;
  }
  for (var c = 0; c < l.length; c++)
    u = l[c], t.push(u), Sn(u, t);
}
function $(e) {
  var t = Et, r = Te;
  try {
    Rn();
    const i = [];
    Et = Xi, Te = i, ft = !1, In(r);
    var l = e == null ? void 0 : e();
    return Ki(), (Te.length > 0 || i.length > 0) && $(), Ze = 0, ct = null, l;
  } finally {
    Et = t, Te = r;
  }
}
async function al() {
  await Promise.resolve(), $();
}
function v(e) {
  var c;
  var t = e.f, r = (t & oe) !== 0;
  if (r && t & Xe) {
    var l = dn(
      /** @type {Derived} */
      e
    );
    return Xt(
      /** @type {Derived} */
      e
    ), l;
  }
  if (C !== null) {
    de !== null && de.includes(e) && Oi();
    var i = C.deps;
    V === null && i !== null && i[X] === e ? X++ : V === null ? V = [e] : V.push(e), xe !== null && y !== null && y.f & Z && !(y.f & ae) && xe.includes(e) && (he(y, ke), Lt(y));
  } else if (r && /** @type {Derived} */
  e.deps === null)
    for (var o = (
      /** @type {Derived} */
      e
    ), a = o.parent, d = o; a !== null; )
      if (a.f & oe) {
        var u = (
          /** @type {Derived} */
          a
        );
        d = u, a = u.parent;
      } else {
        var f = (
          /** @type {Effect} */
          a
        );
        (c = f.deriveds) != null && c.includes(d) || (f.deriveds ?? (f.deriveds = [])).push(d);
        break;
      }
  return r && (o = /** @type {Derived} */
  e, gt(o) && vn(o)), e.v;
}
function Ke(e) {
  const t = C;
  try {
    return C = null, e();
  } finally {
    C = t;
  }
}
const sl = ~(ke | _t | Z);
function he(e, t) {
  e.f = e.f & sl | t;
}
function Tn(e, t = !1, r) {
  U = {
    p: U,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
}
function Nn(e) {
  const t = U;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const a = t.e;
    if (a !== null) {
      var r = y, l = C;
      t.e = null;
      try {
        for (var i = 0; i < a.length; i++) {
          var o = a[i];
          ve(o.effect), Ae(o.reaction), Qt(o.fn);
        }
      } finally {
        ve(r), Ae(l);
      }
    }
    U = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
let jr = !1;
function Dn() {
  jr || (jr = !0, document.addEventListener(
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
function Ln(e) {
  var t = C, r = y;
  Ae(null), ve(null);
  try {
    return e();
  } finally {
    Ae(t), ve(r);
  }
}
function ul(e, t, r, l = r) {
  e.addEventListener(t, () => Ln(r));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), l(!0);
  } : e.__on_r = () => l(!0), Dn();
}
const Pn = /* @__PURE__ */ new Set(), Zt = /* @__PURE__ */ new Set();
function fl(e, t, r, l) {
  function i(o) {
    if (l.capture || st.call(t, o), !o.cancelBubble)
      return Ln(() => r.call(this, o));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? rr(() => {
    t.addEventListener(e, i, l);
  }) : t.addEventListener(e, i, l), i;
}
function cl(e, t, r, l, i) {
  var o = { capture: l, passive: i }, a = fl(e, t, r, o);
  (t === document.body || t === window || t === document) && Yi(() => {
    t.removeEventListener(e, a, o);
  });
}
function dl(e) {
  for (var t = 0; t < e.length; t++)
    Pn.add(e[t]);
  for (var r of Zt)
    r(e);
}
function st(e) {
  var F;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), l = e.type, i = ((F = e.composedPath) == null ? void 0 : F.call(e)) || [], o = (
    /** @type {null | Element} */
    i[0] || e.target
  ), a = 0, d = e.__root;
  if (d) {
    var u = i.indexOf(d);
    if (u !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var f = i.indexOf(t);
    if (f === -1)
      return;
    u <= f && (a = u);
  }
  if (o = /** @type {Element} */
  i[a] || e.target, o !== t) {
    kt(e, "currentTarget", {
      configurable: !0,
      get() {
        return o || r;
      }
    });
    var c = C, h = y;
    Ae(null), ve(null);
    try {
      for (var _, m = []; o !== null; ) {
        var w = o.assignedSlot || o.parentNode || /** @type {any} */
        o.host || null;
        try {
          var T = o["__" + l];
          if (T !== void 0 && !/** @type {any} */
          o.disabled)
            if (Xr(T)) {
              var [O, ...Q] = T;
              O.apply(o, [e, ...Q]);
            } else
              T.call(o, e);
        } catch (j) {
          _ ? m.push(j) : _ = j;
        }
        if (e.cancelBubble || w === t || w === null)
          break;
        o = w;
      }
      if (_) {
        for (let j of m)
          queueMicrotask(() => {
            throw j;
          });
        throw _;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Ae(c), ve(h);
    }
  }
}
function zn(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function $e(e, t) {
  var r = (
    /** @type {Effect} */
    y
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function se(e, t) {
  var r = (t & yi) !== 0, l = (t & wi) !== 0, i, o = !e.startsWith("<!>");
  return () => {
    if (z)
      return $e(P, null), P;
    i === void 0 && (i = zn(o ? e : "<!>" + e), r || (i = /** @type {Node} */
    /* @__PURE__ */ De(i)));
    var a = (
      /** @type {TemplateNode} */
      l ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ De(a)
      ), u = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      $e(d, u);
    } else
      $e(a, a);
    return a;
  };
}
function vl() {
  if (z)
    return $e(P, null), P;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = Tt();
  return e.append(t, r), $e(t, r), e;
}
function K(e, t) {
  if (z) {
    y.nodes_end = P, Je();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const hl = ["touchstart", "touchmove"];
function _l(e) {
  return hl.includes(e);
}
function On(e, t) {
  return Fn(e, t);
}
function gl(e, t) {
  Bt(), t.intro = t.intro ?? !1;
  const r = t.target, l = z, i = P;
  try {
    for (var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ De(r)
    ); o && (o.nodeType !== 8 || /** @type {Comment} */
    o.data !== Zr); )
      o = /** @type {TemplateNode} */
      /* @__PURE__ */ Re(o);
    if (!o)
      throw Ye;
    Be(!0), Ce(
      /** @type {Comment} */
      o
    ), Je();
    const a = Fn(e, { ...t, anchor: o });
    if (P === null || P.nodeType !== 8 || /** @type {Comment} */
    P.data !== Jr)
      throw St(), Ye;
    return Be(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === Ye)
      return t.recover === !1 && Di(), Bt(), Ui(r), Be(!1), On(e, t);
    throw a;
  } finally {
    Be(l), Ce(i);
  }
}
const Ue = /* @__PURE__ */ new Map();
function Fn(e, { target: t, anchor: r, props: l = {}, events: i, context: o, intro: a = !0 }) {
  Bt();
  var d = /* @__PURE__ */ new Set(), u = (h) => {
    for (var _ = 0; _ < h.length; _++) {
      var m = h[_];
      if (!d.has(m)) {
        d.add(m);
        var w = _l(m);
        t.addEventListener(m, st, { passive: w });
        var T = Ue.get(m);
        T === void 0 ? (document.addEventListener(m, st, { passive: w }), Ue.set(m, 1)) : Ue.set(m, T + 1);
      }
    }
  };
  u(bi(Pn)), Zt.add(u);
  var f = void 0, c = hn(() => {
    var h = r ?? t.appendChild(Tt());
    return At(() => {
      if (o) {
        Tn({});
        var _ = (
          /** @type {ComponentContext} */
          U
        );
        _.c = o;
      }
      i && (l.$$events = i), z && $e(
        /** @type {TemplateNode} */
        h,
        null
      ), f = e(h, l) || {}, z && (y.nodes_end = P), o && Nn();
    }), () => {
      var w;
      for (var _ of d) {
        t.removeEventListener(_, st);
        var m = (
          /** @type {number} */
          Ue.get(_)
        );
        --m === 0 ? (document.removeEventListener(_, st), Ue.delete(_)) : Ue.set(_, m);
      }
      Zt.delete(u), Gt.delete(f), h !== r && ((w = h.parentNode) == null || w.removeChild(h));
    };
  });
  return Gt.set(f, c), f;
}
let Gt = /* @__PURE__ */ new WeakMap();
function ml(e) {
  const t = Gt.get(e);
  t && t();
}
function Ee(e, t, r = !1) {
  z && Je();
  var l = e, i = null, o = null, a = W, d = r ? Kt : 0, u = !1;
  const f = (h, _ = !0) => {
    u = !0, c(_, h);
  }, c = (h, _) => {
    if (a === (a = h)) return;
    let m = !1;
    if (z) {
      const w = (
        /** @type {Comment} */
        l.data === Gr
      );
      !!a === w && (l = Vi(), Ce(l), Be(!1), m = !0);
    }
    a ? (i ? qr(i) : _ && (i = At(() => _(l))), o && Mr(o, () => {
      o = null;
    })) : (o ? qr(o) : _ && (o = At(() => _(l))), i && Mr(i, () => {
      i = null;
    })), m && Be(!0);
  };
  tr(() => {
    u = !1, t(f), u || c(null, null);
  }, d), z && (l = P);
}
function je(e, t, r, l, i) {
  var o = e, a = "", d;
  tr(() => {
    if (a === (a = t() ?? "")) {
      z && Je();
      return;
    }
    d !== void 0 && (Pe(d), d = void 0), a !== "" && (d = At(() => {
      if (z) {
        P.data;
        for (var u = Je(), f = u; u !== null && (u.nodeType !== 8 || /** @type {Comment} */
        u.data !== ""); )
          f = u, u = /** @type {TemplateNode} */
          /* @__PURE__ */ Re(u);
        if (u === null)
          throw St(), Ye;
        $e(P, f), o = Ce(u);
        return;
      }
      var c = a + "", h = zn(c);
      $e(
        /** @type {TemplateNode} */
        /* @__PURE__ */ De(h),
        /** @type {TemplateNode} */
        h.lastChild
      ), o.before(h);
    }));
  });
}
function pl(e, t, r, l, i) {
  var d;
  z && Je();
  var o = (d = t.$$slots) == null ? void 0 : d[r], a = !1;
  o === !0 && (o = t.children, a = !0), o === void 0 || o(e, a ? () => l : l);
}
function yl(e, t) {
  rr(() => {
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
function Br(e) {
  if (z) {
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
    e.__on_r = r, Ji(r), Dn();
  }
}
function wl(e, t) {
  var r = e.__attributes ?? (e.__attributes = {});
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when its `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t);
}
function ie(e, t, r, l) {
  var i = e.__attributes ?? (e.__attributes = {});
  z && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || i[t] !== (i[t] = r) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[Ai] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && bl(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
var Hr = /* @__PURE__ */ new Map();
function bl(e) {
  var t = Hr.get(e.nodeName);
  if (t) return t;
  Hr.set(e.nodeName, t = []);
  for (var r, l = Ut(e), i = Element.prototype; i !== l; ) {
    r = Ei(l);
    for (var o in r)
      r[o].set && t.push(o);
    l = Ut(l);
  }
  return t;
}
function El(e, t, r) {
  if (r) {
    if (e.classList.contains(t)) return;
    e.classList.add(t);
  } else {
    if (!e.classList.contains(t)) return;
    e.classList.remove(t);
  }
}
function xl(e, t, r = t) {
  ul(e, "change", (l) => {
    var i = l ? e.defaultChecked : e.checked;
    r(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (z && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  Ke(t) == null) && r(e.checked), er(() => {
    var l = t();
    e.checked = !!l;
  });
}
function Yr(e, t) {
  return e === t || (e == null ? void 0 : e[ut]) === t;
}
function Wr(e = {}, t, r, l) {
  return Qt(() => {
    var i, o;
    return er(() => {
      i = o, o = [], Ke(() => {
        e !== r(...o) && (t(e, ...o), i && Yr(r(...i), e) && t(null, ...i));
      });
    }), () => {
      rr(() => {
        o && Yr(r(...o), e) && t(null, ...o);
      });
    };
  }), e;
}
function Mn(e) {
  U === null && xn(), Ht(() => {
    const t = Ke(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function $l(e) {
  U === null && xn(), Mn(() => () => Ke(e));
}
let wt = !1;
function kl(e) {
  var t = wt;
  try {
    return wt = !1, [e(), wt];
  } finally {
    wt = t;
  }
}
function Cl(e) {
  for (var t = y, r = y; t !== null && !(t.f & (ae | ht)); )
    t = t.parent;
  try {
    return ve(t), e();
  } finally {
    ve(r);
  }
}
function S(e, t, r, l) {
  var ye;
  var i = (r & _i) !== 0, o = !on, a = (r & mi) !== 0, d = (r & pi) !== 0, u = !1, f;
  a ? [f, u] = kl(() => (
    /** @type {V} */
    e[t]
  )) : f = /** @type {V} */
  e[t];
  var c = ut in e || rn in e, h = ((ye = Ne(e, t)) == null ? void 0 : ye.set) ?? (c && a && t in e ? (A) => e[t] = A : void 0), _ = (
    /** @type {V} */
    l
  ), m = !0, w = !1, T = () => (w = !0, m && (m = !1, d ? _ = Ke(
    /** @type {() => V} */
    l
  ) : _ = /** @type {V} */
  l), _);
  f === void 0 && l !== void 0 && (h && o && Li(), f = T(), h && h(f));
  var O;
  if (O = () => {
    var A = (
      /** @type {V} */
      e[t]
    );
    return A === void 0 ? T() : (m = !0, w = !1, A);
  }, !(r & gi))
    return O;
  if (h) {
    var Q = e.$$legacy;
    return function(A, B) {
      return arguments.length > 0 ? ((!B || Q || u) && h(B ? O() : A), A) : O();
    };
  }
  var F = !1, j = !1, _e = /* @__PURE__ */ an(f), q = Cl(
    () => /* @__PURE__ */ at(() => {
      var A = O(), B = v(_e);
      return F ? (F = !1, j = !0, B) : (j = !1, _e.v = A);
    })
  );
  return i || (q.equals = ln), function(A, B) {
    if (arguments.length > 0) {
      const ue = B ? v(q) : a ? le(A) : A;
      return q.equals(ue) || (F = !0, L(_e, ue), w && _ !== void 0 && (_ = ue), Ke(() => v(q))), A;
    }
    return v(q);
  };
}
function Al(e) {
  return new Rl(e);
}
var pe, te;
class Rl {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    Mt(this, pe);
    /** @type {Record<string, any>} */
    Mt(this, te);
    var o;
    var r = /* @__PURE__ */ new Map(), l = (a, d) => {
      var u = /* @__PURE__ */ an(d);
      return r.set(a, u), u;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, d) {
          return v(r.get(d) ?? l(d, Reflect.get(a, d)));
        },
        has(a, d) {
          return d === rn ? !0 : (v(r.get(d) ?? l(d, Reflect.get(a, d))), Reflect.has(a, d));
        },
        set(a, d, u) {
          return L(r.get(d) ?? l(d, u), u), Reflect.set(a, d, u);
        }
      }
    );
    qt(this, te, (t.hydrate ? gl : On)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((o = t == null ? void 0 : t.props) != null && o.$$host) || t.sync === !1) && $(), qt(this, pe, i.$$events);
    for (const a of Object.keys(Y(this, te)))
      a === "$set" || a === "$destroy" || a === "$on" || kt(this, a, {
        get() {
          return Y(this, te)[a];
        },
        /** @param {any} value */
        set(d) {
          Y(this, te)[a] = d;
        },
        enumerable: !0
      });
    Y(this, te).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, Y(this, te).$destroy = () => {
      ml(Y(this, te));
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
    Y(this, pe)[t] = Y(this, pe)[t] || [];
    const l = (...i) => r.call(this, ...i);
    return Y(this, pe)[t].push(l), () => {
      Y(this, pe)[t] = Y(this, pe)[t].filter(
        /** @param {any} fn */
        (i) => i !== l
      );
    };
  }
  $destroy() {
    Y(this, te).$destroy();
  }
}
pe = new WeakMap(), te = new WeakMap();
let qn;
typeof HTMLElement == "function" && (qn = class extends HTMLElement {
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
          i !== "default" && (a.name = i), K(o, a);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, l = Il(this);
      for (const i of this.$$s)
        i in l && (i === "default" && !this.$$d.children ? (this.$$d.children = t(i), r.default = !0) : r[i] = t(i));
      for (const i of this.attributes) {
        const o = this.$$g_p(i.name);
        o in this.$$d || (this.$$d[o] = xt(o, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = Al({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = hn(() => {
        er(() => {
          var i;
          this.$$r = !0;
          for (const o of $t(this.$$c)) {
            if (!((i = this.$$p_d[o]) != null && i.reflect)) continue;
            this.$$d[o] = this.$$c[o];
            const a = xt(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = xt(t, l, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
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
function xt(e, t, r, l) {
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
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function Il(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function Sl(e, t, r, l, i, o) {
  let a = class extends qn {
    constructor() {
      super(e, r, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return $t(t).map(
        (d) => (t[d].attribute || d).toLowerCase()
      );
    }
  };
  return $t(t).forEach((d) => {
    kt(a.prototype, d, {
      get() {
        return this.$$c && d in this.$$c ? this.$$c[d] : this.$$d[d];
      },
      set(u) {
        var h;
        u = xt(d, u, t), this.$$d[d] = u;
        var f = this.$$c;
        if (f) {
          var c = (h = Ne(f, d)) == null ? void 0 : h.get;
          c ? f[d] = u : f.$set({ [d]: u });
        }
      }
    });
  }), l.forEach((d) => {
    kt(a.prototype, d, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[d];
      }
    });
  }), e.element = /** @type {any} */
  a, a;
}
const Vn = new TextEncoder();
function Tl(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function Nl(e, t = "SHA-256", r = 1e5) {
  const l = Date.now().toString(16);
  e || (e = Math.round(Math.random() * r));
  const i = await Un(l, e, t);
  return {
    algorithm: t,
    challenge: i,
    salt: l,
    signature: ""
  };
}
async function Un(e, t, r) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return Tl(
    await crypto.subtle.digest(
      r.toUpperCase(),
      Vn.encode(e + t)
    )
  );
}
function Dl(e, t, r = "SHA-256", l = 1e6, i = 0) {
  const o = new AbortController(), a = Date.now();
  return {
    promise: (async () => {
      for (let u = i; u <= l; u += 1) {
        if (o.signal.aborted)
          return null;
        if (await Un(t, u, r) === e)
          return {
            number: u,
            took: Date.now() - a
          };
      }
      return null;
    })(),
    controller: o
  };
}
function Ll() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function Pl(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let l = 0; l < t.length; l++)
    r[l] = t.charCodeAt(l);
  return r;
}
function zl(e, t = 12) {
  const r = new Uint8Array(t);
  for (let l = 0; l < t; l++)
    r[l] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function Ol(e, t = "", r = 1e6, l = 0) {
  const i = "AES-GCM", o = new AbortController(), a = Date.now(), d = async () => {
    for (let c = l; c <= r; c += 1) {
      if (o.signal.aborted || !u || !f)
        return null;
      try {
        const h = await crypto.subtle.decrypt(
          {
            name: i,
            iv: zl(c)
          },
          u,
          f
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
  let u = null, f = null;
  try {
    f = Pl(e);
    const c = await crypto.subtle.digest(
      "SHA-256",
      Vn.encode(t)
    );
    u = await crypto.subtle.importKey(
      "raw",
      c,
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
    promise: d(),
    controller: o
  };
}
var x = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(x || {}), Fl = /* @__PURE__ */ se('<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="svelte-ddsc3z"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25" class="svelte-ddsc3z"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor" class="altcha-spinner svelte-ddsc3z"></path></svg>'), Ml = /* @__PURE__ */ se('<span role="status" aria-live="polite" class="svelte-ddsc3z"><!></span> <input type="hidden" class="svelte-ddsc3z">', 1), ql = /* @__PURE__ */ se('<span role="status" aria-live="polite" class="svelte-ddsc3z"><!></span>'), Vl = /* @__PURE__ */ se('<label class="svelte-ddsc3z"><!></label>'), Ul = /* @__PURE__ */ se('<div class="svelte-ddsc3z"><a target="_blank" class="altcha-logo svelte-ddsc3z"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-ddsc3z"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor" class="svelte-ddsc3z"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor" class="svelte-ddsc3z"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor" class="svelte-ddsc3z"></path></svg></a></div>'), jl = /* @__PURE__ */ se('<div class="svelte-ddsc3z"><!></div>'), Bl = /* @__PURE__ */ se('<div class="svelte-ddsc3z"><!></div>'), Hl = /* @__PURE__ */ se('<div class="altcha-error svelte-ddsc3z"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="svelte-ddsc3z"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" class="svelte-ddsc3z"></path></svg> <!></div>'), Yl = /* @__PURE__ */ se('<div class="altcha-footer svelte-ddsc3z"><div class="svelte-ddsc3z"><!></div></div>'), Wl = /* @__PURE__ */ se('<div class="altcha-anchor-arrow svelte-ddsc3z"></div>'), Zl = /* @__PURE__ */ se('<!> <div class="altcha svelte-ddsc3z"><div class="altcha-main svelte-ddsc3z"><!> <div class="altcha-checkbox svelte-ddsc3z"><input type="checkbox" class="svelte-ddsc3z"></div> <div class="altcha-label svelte-ddsc3z"><!></div> <!></div> <!> <!> <!></div>', 1);
const Gl = {
  hash: "svelte-ddsc3z",
  code: `.altcha.svelte-ddsc3z {background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);position:relative;text-align:left;}.altcha.svelte-ddsc3z:focus-within {border-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating].svelte-ddsc3z {background:var(--altcha-color-base, white);display:none;filter:drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2));left:-100%;position:fixed;top:-100%;width:var(--altcha-max-width, 260px);z-index:999999;}.altcha[data-floating=top].svelte-ddsc3z .altcha-anchor-arrow:where(.svelte-ddsc3z) {border-bottom-color:transparent;border-top-color:var(--altcha-color-border, #a0a0a0);bottom:-12px;top:auto;}.altcha[data-floating=bottom].svelte-ddsc3z:focus-within::after {border-bottom-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating=top].svelte-ddsc3z:focus-within::after {border-top-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating].svelte-ddsc3z:not([data-state=unverified]) {display:block;}.altcha-anchor-arrow.svelte-ddsc3z {border:6px solid transparent;border-bottom-color:var(--altcha-color-border, #a0a0a0);content:"";height:0;left:12px;position:absolute;top:-12px;width:0;}.altcha-main.svelte-ddsc3z {align-items:center;display:flex;gap:0.4rem;padding:0.7rem;}.altcha-label.svelte-ddsc3z {flex-grow:1;}.altcha-label.svelte-ddsc3z label:where(.svelte-ddsc3z) {cursor:pointer;}.altcha-logo.svelte-ddsc3z {color:currentColor;opacity:0.3;}.altcha-logo.svelte-ddsc3z:hover {opacity:1;}.altcha-error.svelte-ddsc3z {color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem;}.altcha-footer.svelte-ddsc3z {align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.4;padding:0.2rem 0.7rem;text-align:right;}.altcha-footer.svelte-ddsc3z:hover {opacity:1;}.altcha-footer.svelte-ddsc3z > :where(.svelte-ddsc3z):first-child {flex-grow:1;}.altcha-footer.svelte-ddsc3z a {color:currentColor;}.altcha-checkbox.svelte-ddsc3z {display:flex;align-items:center;height:24px;width:24px;}.altcha-checkbox.svelte-ddsc3z input:where(.svelte-ddsc3z) {width:18px;height:18px;margin:0;}.altcha-hidden.svelte-ddsc3z {display:none;}.altcha-spinner.svelte-ddsc3z {
  animation: svelte-ddsc3z-altcha-spinner 0.75s infinite linear;transform-origin:center;}

@keyframes svelte-ddsc3z-altcha-spinner {
  100% {
    transform: rotate(360deg);
  }
}`
};
function Jl(e, t) {
  var Nr, Dr;
  Tn(t, !0), yl(e, Gl);
  let r = S(t, "auto", 7, void 0), l = S(t, "blockspam", 7, void 0), i = S(t, "challengeurl", 7, void 0), o = S(t, "challengejson", 7, void 0), a = S(t, "customfetch", 7, void 0), d = S(t, "debug", 7, !1), u = S(t, "delay", 7, 0), f = S(t, "expire", 7, void 0), c = S(t, "floating", 7, void 0), h = S(t, "floatinganchor", 7, void 0), _ = S(t, "floatingoffset", 7, void 0), m = S(t, "hidefooter", 7, !1), w = S(t, "hidelogo", 7, !1), T = S(t, "name", 7, "altcha"), O = S(t, "maxnumber", 7, 1e6), Q = S(t, "mockerror", 7, !1), F = S(t, "obfuscated", 7, void 0), j = S(t, "plugins", 7, void 0), _e = S(t, "refetchonexpire", 7, !0), q = S(t, "spamfilter", 7, !1), ye = S(t, "strings", 7, void 0), A = S(t, "test", 7, !1), B = S(t, "verifyurl", 7, void 0), ue = S(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), et = S(t, "workerurl", 7, void 0);
  const ir = ["SHA-256", "SHA-384", "SHA-512"], lr = "Visit Altcha.org", or = "https://altcha.org/", tt = (n, s) => {
    t.$$host.dispatchEvent(new CustomEvent(n, { detail: s }));
  }, ar = (Dr = (Nr = document.documentElement.lang) == null ? void 0 : Nr.split("-")) == null ? void 0 : Dr[0], Pt = /* @__PURE__ */ at(() => {
    var n;
    return i() && new URL(i(), location.origin).host.endsWith(".altcha.org") && !!((n = i()) != null && n.includes("apiKey=ckey_"));
  }), zt = /* @__PURE__ */ at(() => o() ? pr(o()) : void 0), sr = /* @__PURE__ */ at(() => ye() ? pr(ye()) : {}), ee = /* @__PURE__ */ at(() => {
    var n;
    return {
      ariaLinkLabel: lr,
      error: "Verification failed. Try again later.",
      expired: "Verification expired. Try again.",
      footer: `Protected by <a href="${or}" target="_blank" aria-label="${((n = v(sr)) == null ? void 0 : n.ariaLinkLabel) || lr}">ALTCHA</a>`,
      label: "I'm not a robot",
      verified: "Verified",
      verifying: "Verifying...",
      waitAlert: "Verifying... please wait.",
      ...v(sr)
    };
  });
  let ze = qe(!1), R = qe(le(x.UNVERIFIED)), H = qe(void 0), rt = qe(null), Oe = null, b = null, Fe = qe(null), fe = null, we = [], Ie = qe(null);
  Ht(() => {
    Jn(v(Fe));
  }), Ht(() => {
    Kn(v(R));
  }), $l(() => {
    jn(), b && (b.removeEventListener("submit", hr), b.removeEventListener("reset", _r), b.removeEventListener("focusin", vr), b = null), fe && (clearTimeout(fe), fe = null), document.removeEventListener("click", cr), document.removeEventListener("scroll", dr), window.removeEventListener("resize", mr);
  }), Mn(() => {
    var n;
    I("mounted", "1.1.0-beta.1"), I("workers", ue()), Zn(), I("plugins", we.length ? we.map((s) => s.constructor.pluginName).join(", ") : "none"), A() && I("using test mode"), f() && pt(f()), r() !== void 0 && I("auto", r()), c() !== void 0 && yr(c()), b = (n = v(H)) == null ? void 0 : n.closest("form"), b && (b.addEventListener("submit", hr, { capture: !0 }), b.addEventListener("reset", _r), r() === "onfocus" && b.addEventListener("focusin", vr)), r() === "onload" && (F() ? nt() : be()), v(Pt) && (m() || w()) && I("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      tt("load");
    });
  });
  function ur(n, s) {
    return btoa(JSON.stringify({
      algorithm: n.algorithm,
      challenge: n.challenge,
      number: s.number,
      salt: n.salt,
      signature: n.signature,
      test: A() ? !0 : void 0,
      took: s.took
    }));
  }
  function jn() {
    for (const n of we)
      n.destroy();
  }
  function fr() {
    i() && _e() && v(R) === x.VERIFIED ? be() : it(x.EXPIRED, v(ee).expired);
  }
  async function Bn() {
    var n;
    if (Q())
      throw I("mocking error"), new Error("Mocked error.");
    if (v(zt))
      return I("using provided json data"), v(zt);
    if (A())
      return I("generating test challenge", { test: A() }), Nl(typeof A() != "boolean" ? +A() : void 0);
    {
      if (!i() && b) {
        const N = b.getAttribute("action");
        N != null && N.includes("/form/") && i(N + "/altcha");
      }
      if (!i())
        throw new Error("Attribute challengeurl not set.");
      I("fetching challenge from", i());
      let s = null, g = null;
      if (a())
        if (I("using customfetch"), typeof a() == "string") {
          if (s = globalThis[a()] || null, !s)
            throw new Error(`Custom fetch function not found: ${a()}`);
        } else
          s = a();
      const E = {
        headers: q() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      };
      if (s) {
        if (g = await s(i(), E), !g || !(g instanceof Response))
          throw new Error("Custom fetch function did not return a response.");
      } else
        g = await fetch(i(), E);
      if (g.status !== 200)
        throw new Error(`Server responded with ${g.status}.`);
      const D = g.headers.get("Expires"), k = g.headers.get("X-Altcha-Config"), p = await g.json(), M = new URLSearchParams((n = p.salt.split("?")) == null ? void 0 : n[1]), ge = M.get("expires") || M.get("expire");
      if (ge) {
        const N = new Date(+ge * 1e3), re = isNaN(N.getTime()) ? 0 : N.getTime() - Date.now();
        re > 0 && pt(re);
      }
      if (k)
        try {
          const N = JSON.parse(k);
          N && typeof N == "object" && (N.verifyurl && (N.verifyurl = new URL(N.verifyurl, new URL(i())).toString()), Er(N));
        } catch (N) {
          I("unable to configure from X-Altcha-Config", N);
        }
      if (!f() && (D != null && D.length)) {
        const N = Date.parse(D);
        if (N) {
          const re = N - Date.now();
          re > 0 && pt(re);
        }
      }
      return p;
    }
  }
  function Hn(n) {
    var g;
    const s = b == null ? void 0 : b.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((g = s == null ? void 0 : s.value) == null ? void 0 : g.slice(s.value.indexOf("@"))) || void 0;
  }
  function Yn() {
    return q() === "ipAddress" ? {
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
    } : typeof q() == "object" ? q() : {
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
  function Wn(n) {
    return [
      ...(b == null ? void 0 : b.querySelectorAll(n != null && n.length ? n.map((g) => `input[name="${g}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (g, E) => {
        const D = E.name, k = E.value;
        return D && k && (g[D] = /\n/.test(k) ? k.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : k), g;
      },
      {}
    );
  }
  function Zn() {
    const n = j() !== void 0 ? j().split(",") : void 0;
    for (const s of globalThis.altchaPlugins)
      (!n || n.includes(s.pluginName)) && we.push(new s({
        el: v(H),
        clarify: nt,
        dispatch: tt,
        getConfiguration: xr,
        getFloatingAnchor: $r,
        getState: kr,
        log: I,
        reset: it,
        solve: br,
        setState: Se,
        setFloatingAnchor: Cr,
        verify: be
      }));
  }
  function I(...n) {
    (d() || n.some((s) => s instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${T()}]`, ...n);
  }
  function Gn() {
    [x.UNVERIFIED, x.ERROR, x.EXPIRED].includes(v(R)) ? q() !== !1 && (b == null ? void 0 : b.reportValidity()) === !1 ? L(ze, !1) : F() ? nt() : be() : L(ze, !0);
  }
  function cr(n) {
    const s = n.target;
    c() && s && !v(H).contains(s) && (v(R) === x.VERIFIED || r() === "off" && v(R) === x.UNVERIFIED) && (v(H).style.display = "none");
  }
  function dr() {
    c() && v(R) !== x.UNVERIFIED && mt();
  }
  function Jn(n) {
    for (const s of we)
      typeof s.onErrorChange == "function" && s.onErrorChange(v(Fe));
  }
  function vr(n) {
    v(R) === x.UNVERIFIED && be();
  }
  function hr(n) {
    b && r() === "onsubmit" ? v(R) === x.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), be().then(() => {
      b == null || b.requestSubmit();
    })) : v(R) !== x.VERIFIED && (n.preventDefault(), n.stopPropagation(), v(R) === x.VERIFYING && gr()) : b && c() && r() === "off" && v(R) === x.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), v(H).style.display = "block", mt());
  }
  function _r() {
    it();
  }
  function gr() {
    v(R) === x.VERIFYING && v(ee).waitAlert && alert(v(ee).waitAlert);
  }
  function Kn(n) {
    for (const s of we)
      typeof s.onStateChange == "function" && s.onStateChange(v(R));
    c() && v(R) !== x.UNVERIFIED && requestAnimationFrame(() => {
      mt();
    }), L(ze, v(R) === x.VERIFIED);
  }
  function mr() {
    c() && mt();
  }
  function pr(n) {
    return JSON.parse(n);
  }
  function mt(n = 20) {
    if (v(H))
      if (Oe || (Oe = (h() ? document.querySelector(h()) : b == null ? void 0 : b.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || b), Oe) {
        const s = parseInt(_(), 10) || 12, g = Oe.getBoundingClientRect(), E = v(H).getBoundingClientRect(), D = document.documentElement.clientHeight, k = document.documentElement.clientWidth, p = c() === "auto" ? g.bottom + E.height + s + n > D : c() === "top", M = Math.max(n, Math.min(k - n - E.width, g.left + g.width / 2 - E.width / 2));
        if (p ? v(H).style.top = `${g.top - (E.height + s)}px` : v(H).style.top = `${g.bottom + s}px`, v(H).style.left = `${M}px`, v(H).setAttribute("data-floating", p ? "top" : "bottom"), v(rt)) {
          const ge = v(rt).getBoundingClientRect();
          v(rt).style.left = g.left - M + g.width / 2 - ge.width / 2 + "px";
        }
      } else
        I("unable to find floating anchor element");
  }
  async function Xn(n) {
    if (!B())
      throw new Error("Attribute verifyurl not set.");
    I("requesting server verification from", B());
    const s = { payload: n };
    if (q() !== !1) {
      const {
        blockedCountries: D,
        classifier: k,
        disableRules: p,
        email: M,
        expectedLanguages: ge,
        expectedCountries: N,
        fields: re,
        ipAddress: ot,
        text: ci,
        timeZone: Lr
      } = Yn();
      s.blockedCountries = D, s.classifier = k, s.disableRules = p, s.email = M === !1 ? void 0 : Hn(M), s.expectedCountries = N, s.expectedLanguages = ge || (ar ? [ar] : void 0), s.fields = re === !1 ? void 0 : Wn(re), s.ipAddress = ot === !1 ? void 0 : ot || "auto", s.text = ci, s.timeZone = Lr === !1 ? void 0 : Lr || Ll();
    }
    const g = await fetch(B(), {
      body: JSON.stringify(s),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (g.status !== 200)
      throw new Error(`Server responded with ${g.status}.`);
    const E = await g.json();
    if (E != null && E.payload && L(Ie, le(E.payload)), tt("serververification", E), l() && E.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  function pt(n) {
    I("expire", n), fe && (clearTimeout(fe), fe = null), n < 1 ? fr() : fe = setTimeout(fr, n);
  }
  function yr(n) {
    I("floating", n), c() !== n && (v(H).style.left = "", v(H).style.top = ""), c(n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : c()), c() ? (r() || r("onsubmit"), document.addEventListener("scroll", dr), document.addEventListener("click", cr), window.addEventListener("resize", mr)) : r() === "onsubmit" && r(void 0);
  }
  function wr(n) {
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
  async function br(n) {
    let s = null;
    if ("Worker" in window) {
      try {
        s = await Qn(n, n.maxnumber);
      } catch (g) {
        I(g);
      }
      if ((s == null ? void 0 : s.number) !== void 0 || "obfuscated" in n)
        return { data: n, solution: s };
    }
    if ("obfuscated" in n) {
      const g = await Ol(n.obfuscated, n.key, n.maxnumber);
      return { data: n, solution: await g.promise };
    }
    return {
      data: n,
      solution: await Dl(n.challenge, n.salt, n.algorithm, n.maxnumber || O()).promise
    };
  }
  async function Qn(n, s = typeof A() == "number" ? A() : O(), g = Math.ceil(ue())) {
    const E = [];
    g = Math.min(16, Math.max(1, g));
    for (let p = 0; p < g; p++)
      E.push(altchaCreateWorker(et()));
    const D = Math.ceil(s / g), k = await Promise.all(E.map((p, M) => {
      const ge = M * D;
      return new Promise((N) => {
        p.addEventListener("message", (re) => {
          if (re.data)
            for (const ot of E)
              ot !== p && ot.postMessage({ type: "abort" });
          N(re.data);
        }), p.postMessage({
          payload: n,
          max: ge + D,
          start: ge,
          type: "work"
        });
      });
    }));
    for (const p of E)
      p.terminate();
    return k.find((p) => !!p) || null;
  }
  async function nt() {
    if (!F()) {
      Se(x.ERROR);
      return;
    }
    const n = we.find((s) => s.constructor.pluginName === "obfuscation");
    if (!n || !("clarify" in n)) {
      Se(x.ERROR), I("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in n && typeof n.clarify == "function")
      return n.clarify();
  }
  function Er(n) {
    n.obfuscated !== void 0 && F(n.obfuscated), n.auto !== void 0 && (r(n.auto), r() === "onload" && (F() ? nt() : be())), n.blockspam !== void 0 && l(!!n.blockspam), n.customfetch !== void 0 && a(n.customfetch), n.floatinganchor !== void 0 && h(n.floatinganchor), n.delay !== void 0 && u(n.delay), n.floatingoffset !== void 0 && _(n.floatingoffset), n.floating !== void 0 && yr(n.floating), n.expire !== void 0 && (pt(n.expire), f(n.expire)), n.challenge && (o(typeof n.challenge == "string" ? n.challenge : JSON.stringify(n.challenge)), wr(v(zt))), n.challengeurl !== void 0 && i(n.challengeurl), n.debug !== void 0 && d(!!n.debug), n.hidefooter !== void 0 && m(!!n.hidefooter), n.hidelogo !== void 0 && w(!!n.hidelogo), n.maxnumber !== void 0 && O(+n.maxnumber), n.mockerror !== void 0 && Q(!!n.mockerror), n.name !== void 0 && T(n.name), n.refetchonexpire !== void 0 && _e(!!n.refetchonexpire), n.spamfilter !== void 0 && q(typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && ye(typeof n.strings == "string" ? n.strings : JSON.stringify(n.strings)), n.test !== void 0 && A(typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && B(n.verifyurl), n.workers !== void 0 && ue(+n.workers), n.workerurl !== void 0 && et(n.workerurl);
  }
  function xr() {
    return {
      auto: r(),
      blockspam: l(),
      challengeurl: i(),
      debug: d(),
      delay: u(),
      expire: f(),
      floating: c(),
      floatinganchor: h(),
      floatingoffset: _(),
      hidefooter: m(),
      hidelogo: w(),
      name: T(),
      maxnumber: O(),
      mockerror: Q(),
      obfuscated: F(),
      refetchonexpire: _e(),
      spamfilter: q(),
      strings: v(ee),
      test: A(),
      verifyurl: B(),
      workers: ue(),
      workerurl: et()
    };
  }
  function $r() {
    return Oe;
  }
  function ei(n) {
    return we.find((s) => s.constructor.pluginName === n);
  }
  function kr() {
    return v(R);
  }
  function it(n = x.UNVERIFIED, s = null) {
    fe && (clearTimeout(fe), fe = null), L(ze, !1), L(Ie, null), Se(n, s);
  }
  function Cr(n) {
    Oe = n;
  }
  function Se(n, s = null) {
    L(R, le(n)), L(Fe, le(s)), tt("statechange", {
      payload: v(Ie),
      state: v(R)
    });
  }
  async function be() {
    return it(x.VERIFYING), await new Promise((n) => setTimeout(n, u() || 0)), Bn().then((n) => (wr(n), I("challenge", n), br(n))).then(({ data: n, solution: s }) => {
      if (I("solution", s), "challenge" in n && s && !("clearText" in s))
        if ((s == null ? void 0 : s.number) !== void 0) {
          if (B())
            return Xn(ur(n, s));
          L(Ie, le(ur(n, s))), I("payload", v(Ie));
        } else
          throw I("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      Se(x.VERIFIED), I("verified"), al().then(() => {
        tt("verified", { payload: v(Ie) });
      });
    }).catch((n) => {
      I(n), Se(x.ERROR, n.message);
    });
  }
  var Ar = Zl(), Rr = Vt(Ar);
  pl(Rr, t, "default", {});
  var lt = me(Rr, 2), Ot = J(lt), Ir = J(Ot);
  {
    var ti = (n) => {
      var s = Fl();
      K(n, s);
    };
    Ee(Ir, (n) => {
      v(R) === x.VERIFYING && n(ti);
    });
  }
  var yt = me(Ir, 2), Me = J(yt);
  Br(Me), Me.__change = Gn, G(yt);
  var Ft = me(yt, 2), ri = J(Ft);
  {
    var ni = (n) => {
      var s = Ml(), g = Vt(s), E = J(g);
      je(E, () => v(ee).verified), G(g);
      var D = me(g, 2);
      Br(D), Ve(() => {
        ie(D, "name", T()), wl(D, v(Ie));
      }), K(n, s);
    }, ii = (n) => {
      var s = vl(), g = Vt(s);
      {
        var E = (k) => {
          var p = ql(), M = J(p);
          je(M, () => v(ee).verifying), G(p), K(k, p);
        }, D = (k) => {
          var p = Vl(), M = J(p);
          je(M, () => v(ee).label), G(p), Ve(() => ie(p, "for", `${T() ?? ""}_checkbox`)), K(k, p);
        };
        Ee(
          g,
          (k) => {
            v(R) === x.VERIFYING ? k(E) : k(D, !1);
          },
          !0
        );
      }
      K(n, s);
    };
    Ee(ri, (n) => {
      v(R) === x.VERIFIED ? n(ni) : n(ii, !1);
    });
  }
  G(Ft);
  var li = me(Ft, 2);
  {
    var oi = (n) => {
      var s = Ul(), g = J(s);
      ie(g, "href", or), G(s), Ve(() => ie(g, "aria-label", v(ee).ariaLinkLabel)), K(n, s);
    };
    Ee(li, (n) => {
      (w() !== !0 || v(Pt)) && n(oi);
    });
  }
  G(Ot);
  var Sr = me(Ot, 2);
  {
    var ai = (n) => {
      var s = Hl(), g = me(J(s), 2);
      {
        var E = (k) => {
          var p = jl(), M = J(p);
          je(M, () => v(ee).expired), G(p), Ve(() => ie(p, "title", v(Fe))), K(k, p);
        }, D = (k) => {
          var p = Bl(), M = J(p);
          je(M, () => v(ee).error), G(p), Ve(() => ie(p, "title", v(Fe))), K(k, p);
        };
        Ee(g, (k) => {
          v(R) === x.EXPIRED ? k(E) : k(D, !1);
        });
      }
      G(s), K(n, s);
    };
    Ee(Sr, (n) => {
      (v(Fe) || v(R) === x.EXPIRED) && n(ai);
    });
  }
  var Tr = me(Sr, 2);
  {
    var si = (n) => {
      var s = Yl(), g = J(s), E = J(g);
      je(E, () => v(ee).footer), G(g), G(s), K(n, s);
    };
    Ee(Tr, (n) => {
      v(ee).footer && (m() !== !0 || v(Pt)) && n(si);
    });
  }
  var ui = me(Tr, 2);
  {
    var fi = (n) => {
      var s = Wl();
      Wr(s, (g) => L(rt, g), () => v(rt)), K(n, s);
    };
    Ee(ui, (n) => {
      c() && n(fi);
    });
  }
  return G(lt), Wr(lt, (n) => L(H, n), () => v(H)), Ve(() => {
    ie(lt, "data-state", v(R)), ie(lt, "data-floating", c()), El(yt, "altcha-hidden", v(R) === x.VERIFYING), ie(Me, "id", `${T() ?? ""}_checkbox`), Me.required = r() !== "onsubmit" && (!c() || r() !== "off");
  }), cl("invalid", Me, gr), xl(Me, () => v(ze), (n) => L(ze, n)), K(e, Ar), Nn({
    clarify: nt,
    configure: Er,
    getConfiguration: xr,
    getFloatingAnchor: $r,
    getPlugin: ei,
    getState: kr,
    reset: it,
    setFloatingAnchor: Cr,
    setState: Se,
    verify: be,
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
      return o();
    },
    set challengejson(n = void 0) {
      o(n), $();
    },
    get customfetch() {
      return a();
    },
    set customfetch(n = void 0) {
      a(n), $();
    },
    get debug() {
      return d();
    },
    set debug(n = !1) {
      d(n), $();
    },
    get delay() {
      return u();
    },
    set delay(n = 0) {
      u(n), $();
    },
    get expire() {
      return f();
    },
    set expire(n = void 0) {
      f(n), $();
    },
    get floating() {
      return c();
    },
    set floating(n = void 0) {
      c(n), $();
    },
    get floatinganchor() {
      return h();
    },
    set floatinganchor(n = void 0) {
      h(n), $();
    },
    get floatingoffset() {
      return _();
    },
    set floatingoffset(n = void 0) {
      _(n), $();
    },
    get hidefooter() {
      return m();
    },
    set hidefooter(n = !1) {
      m(n), $();
    },
    get hidelogo() {
      return w();
    },
    set hidelogo(n = !1) {
      w(n), $();
    },
    get name() {
      return T();
    },
    set name(n = "altcha") {
      T(n), $();
    },
    get maxnumber() {
      return O();
    },
    set maxnumber(n = 1e6) {
      O(n), $();
    },
    get mockerror() {
      return Q();
    },
    set mockerror(n = !1) {
      Q(n), $();
    },
    get obfuscated() {
      return F();
    },
    set obfuscated(n = void 0) {
      F(n), $();
    },
    get plugins() {
      return j();
    },
    set plugins(n = void 0) {
      j(n), $();
    },
    get refetchonexpire() {
      return _e();
    },
    set refetchonexpire(n = !0) {
      _e(n), $();
    },
    get spamfilter() {
      return q();
    },
    set spamfilter(n = !1) {
      q(n), $();
    },
    get strings() {
      return ye();
    },
    set strings(n = void 0) {
      ye(n), $();
    },
    get test() {
      return A();
    },
    set test(n = !1) {
      A(n), $();
    },
    get verifyurl() {
      return B();
    },
    set verifyurl(n = void 0) {
      B(n), $();
    },
    get workers() {
      return ue();
    },
    set workers(n = Math.min(16, navigator.hardwareConcurrency || 8)) {
      ue(n), $();
    },
    get workerurl() {
      return et();
    },
    set workerurl(n = void 0) {
      et(n), $();
    }
  });
}
dl(["change"]);
customElements.define("altcha-widget", Sl(
  Jl,
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
    "reset",
    "setFloatingAnchor",
    "setState",
    "verify"
  ],
  !1
));
globalThis.altchaCreateWorker = (e) => new Worker(new URL(e || "./worker.js", import.meta.url));
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
export {
  Jl as Altcha
};
