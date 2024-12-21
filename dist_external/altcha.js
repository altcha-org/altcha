var ci = Object.defineProperty;
var Lr = (e) => {
  throw TypeError(e);
};
var di = (e, t, r) => t in e ? ci(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var le = (e, t, r) => di(e, typeof t != "symbol" ? t + "" : t, r), Pr = (e, t, r) => t.has(e) || Lr("Cannot " + r);
var W = (e, t, r) => (Pr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Ft = (e, t, r) => t.has(e) ? Lr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), Mt = (e, t, r, l) => (Pr(e, t, "write to private field"), l ? l.call(e, r) : t.set(e, r), r);
const vi = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(vi);
const hi = 1, _i = 4, gi = 8, mi = 16, pi = 1, yi = 2, Wr = "[", Zr = "[!", Gr = "]", je = {}, Z = Symbol(), Jr = !1;
var Kr = Array.isArray, wi = Array.from, Et = Object.keys, xt = Object.defineProperty, Se = Object.getOwnPropertyDescriptor, bi = Object.getOwnPropertyDescriptors, Ei = Object.prototype, xi = Array.prototype, Vt = Object.getPrototypeOf;
function Xr(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const ae = 2, Qr = 4, ft = 8, Zt = 16, se = 32, ct = 64, Ut = 128, Ne = 256, $t = 512, G = 1024, $e = 2048, dt = 4096, Ye = 8192, Ge = 16384, $i = 32768, Gt = 65536, ki = 1 << 19, en = 1 << 20, ot = Symbol("$state"), tn = Symbol("legacy props"), Ci = Symbol("");
function rn(e) {
  return e === this.v;
}
function Ai(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function nn(e) {
  return !Ai(e, this.v);
}
function Ri(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ii() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Si(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ti() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ni() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Di(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Li() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Pi() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function zi() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Oi() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let ln = !1;
function ce(e) {
  return {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: rn,
    version: 0
  };
}
function Oe(e) {
  return /* @__PURE__ */ Fi(ce(e));
}
// @__NO_SIDE_EFFECTS__
function on(e, t = !1) {
  const r = ce(e);
  return t || (r.equals = nn), r;
}
// @__NO_SIDE_EFFECTS__
function Fi(e) {
  return I !== null && I.f & ae && (de === null ? Xi([e]) : de.push(e)), e;
}
function C(e, t) {
  return I !== null && el() && I.f & (ae | Zt) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (de === null || !de.includes(e)) && Oi(), Mi(e, t);
}
function Mi(e, t) {
  return e.equals(t) || (e.v = t, e.version = kn(), an(e, $e), b !== null && b.f & G && !(b.f & se) && (q !== null && q.includes(e) ? (he(b, $e), Nt(b)) : Ee === null ? Qi([e]) : Ee.push(e))), t;
}
function an(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var l = r.length, i = 0; i < l; i++) {
      var o = r[i], a = o.f;
      a & $e || (he(o, t), a & (G | Ne) && (a & ae ? an(
        /** @type {Derived} */
        o,
        dt
      ) : Nt(
        /** @type {Effect} */
        o
      )));
    }
}
function Rt(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let P = !1;
function Ve(e) {
  P = e;
}
let L;
function ke(e) {
  if (e === null)
    throw Rt(), je;
  return L = e;
}
function We() {
  return ke(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ae(L)
  );
}
function K(e) {
  if (P) {
    if (/* @__PURE__ */ Ae(L) !== null)
      throw Rt(), je;
    L = e;
  }
}
function qi() {
  for (var e = 0, t = L; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === Gr) {
        if (e === 0) return t;
        e -= 1;
      } else (r === Wr || r === Zr) && (e += 1);
    }
    var l = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ae(t)
    );
    t.remove(), t = l;
  }
}
function F(e, t = null, r) {
  if (typeof e != "object" || e === null || ot in e)
    return e;
  const l = Vt(e);
  if (l !== Ei && l !== xi)
    return e;
  var i = /* @__PURE__ */ new Map(), o = Kr(e), a = ce(0);
  o && i.set("length", ce(
    /** @type {any[]} */
    e.length
  ));
  var c;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(u, s, h) {
        (!("value" in h) || h.configurable === !1 || h.enumerable === !1 || h.writable === !1) && Li();
        var v = i.get(s);
        return v === void 0 ? (v = ce(h.value), i.set(s, v)) : C(v, F(h.value, c)), !0;
      },
      deleteProperty(u, s) {
        var h = i.get(s);
        if (h === void 0)
          s in u && i.set(s, ce(Z));
        else {
          if (o && typeof s == "string") {
            var v = (
              /** @type {Source<number>} */
              i.get("length")
            ), _ = Number(s);
            Number.isInteger(_) && _ < v.v && C(v, _);
          }
          C(h, Z), zr(a);
        }
        return !0;
      },
      get(u, s, h) {
        var w;
        if (s === ot)
          return e;
        var v = i.get(s), _ = s in u;
        if (v === void 0 && (!_ || (w = Se(u, s)) != null && w.writable) && (v = ce(F(_ ? u[s] : Z, c)), i.set(s, v)), v !== void 0) {
          var m = d(v);
          return m === Z ? void 0 : m;
        }
        return Reflect.get(u, s, h);
      },
      getOwnPropertyDescriptor(u, s) {
        var h = Reflect.getOwnPropertyDescriptor(u, s);
        if (h && "value" in h) {
          var v = i.get(s);
          v && (h.value = d(v));
        } else if (h === void 0) {
          var _ = i.get(s), m = _ == null ? void 0 : _.v;
          if (_ !== void 0 && m !== Z)
            return {
              enumerable: !0,
              configurable: !0,
              value: m,
              writable: !0
            };
        }
        return h;
      },
      has(u, s) {
        var m;
        if (s === ot)
          return !0;
        var h = i.get(s), v = h !== void 0 && h.v !== Z || Reflect.has(u, s);
        if (h !== void 0 || b !== null && (!v || (m = Se(u, s)) != null && m.writable)) {
          h === void 0 && (h = ce(v ? F(u[s], c) : Z), i.set(s, h));
          var _ = d(h);
          if (_ === Z)
            return !1;
        }
        return v;
      },
      set(u, s, h, v) {
        var M;
        var _ = i.get(s), m = s in u;
        if (o && s === "length")
          for (var w = h; w < /** @type {Source<number>} */
          _.v; w += 1) {
            var N = i.get(w + "");
            N !== void 0 ? C(N, Z) : w in u && (N = ce(Z), i.set(w + "", N));
          }
        _ === void 0 ? (!m || (M = Se(u, s)) != null && M.writable) && (_ = ce(void 0), C(_, F(h, c)), i.set(s, _)) : (m = _.v !== Z, C(_, F(h, c)));
        var O = Reflect.getOwnPropertyDescriptor(u, s);
        if (O != null && O.set && O.set.call(v, h), !m) {
          if (o && typeof s == "string") {
            var U = (
              /** @type {Source<number>} */
              i.get("length")
            ), j = Number(s);
            Number.isInteger(j) && j >= U.v && C(U, j + 1);
          }
          zr(a);
        }
        return !0;
      },
      ownKeys(u) {
        d(a);
        var s = Reflect.ownKeys(u).filter((_) => {
          var m = i.get(_);
          return m === void 0 || m.v !== Z;
        });
        for (var [h, v] of i)
          v.v !== Z && !(h in u) && s.push(h);
        return s;
      },
      setPrototypeOf() {
        Pi();
      }
    }
  );
}
function zr(e, t = 1) {
  C(e, e.v + t);
}
var Or, sn, un;
function jt() {
  if (Or === void 0) {
    Or = window;
    var e = Element.prototype, t = Node.prototype;
    sn = Se(t, "firstChild").get, un = Se(t, "nextSibling").get, e.__click = void 0, e.__className = "", e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function It(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Te(e) {
  return sn.call(e);
}
// @__NO_SIDE_EFFECTS__
function Ae(e) {
  return un.call(e);
}
function X(e, t) {
  if (!P)
    return /* @__PURE__ */ Te(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Te(L)
  );
  return r === null && (r = L.appendChild(It())), ke(r), r;
}
function qt(e, t) {
  if (!P) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Te(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Ae(r) : r;
  }
  return L;
}
function ge(e, t = 1, r = !1) {
  let l = P ? L : e;
  for (var i; t--; )
    i = l, l = /** @type {TemplateNode} */
    /* @__PURE__ */ Ae(l);
  if (!P)
    return l;
  var o = l == null ? void 0 : l.nodeType;
  if (r && o !== 3) {
    var a = It();
    return l === null ? i == null || i.after(a) : l.before(a), ke(a), a;
  }
  return ke(l), /** @type {TemplateNode} */
  l;
}
function Vi(e) {
  e.textContent = "";
}
// @__NO_SIDE_EFFECTS__
function it(e) {
  var t = ae | $e;
  b === null ? t |= Ne : b.f |= en;
  var r = I !== null && I.f & ae ? (
    /** @type {Derived} */
    I
  ) : null;
  const l = {
    children: null,
    ctx: V,
    deps: null,
    equals: rn,
    f: t,
    fn: e,
    reactions: null,
    v: (
      /** @type {V} */
      null
    ),
    version: 0,
    parent: r ?? b
  };
  return r !== null && (r.children ?? (r.children = [])).push(l), l;
}
function fn(e) {
  var t = e.children;
  if (t !== null) {
    e.children = null;
    for (var r = 0; r < t.length; r += 1) {
      var l = t[r];
      l.f & ae ? Jt(
        /** @type {Derived} */
        l
      ) : De(
        /** @type {Effect} */
        l
      );
    }
  }
}
function Ui(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & ae))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function cn(e) {
  var t, r = b;
  ve(Ui(e));
  try {
    fn(e), t = Cn(e);
  } finally {
    ve(r);
  }
  return t;
}
function dn(e) {
  var t = cn(e), r = (Ue || e.f & Ne) && e.deps !== null ? dt : G;
  he(e, r), e.equals(t) || (e.v = t, e.version = kn());
}
function Jt(e) {
  fn(e), ut(e, 0), he(e, Ge), e.v = e.children = e.deps = e.ctx = e.reactions = null;
}
function ji(e) {
  b === null && I === null && Si(), I !== null && I.f & Ne && Ii(), tr && Ri();
}
function Bi(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Je(e, t, r, l = !0) {
  var i = (e & ct) !== 0, o = b, a = {
    ctx: V,
    deps: null,
    deriveds: null,
    nodes_start: null,
    nodes_end: null,
    f: e | $e,
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
    var c = Be;
    try {
      qr(!0), Tt(a), a.f |= $i;
    } catch (h) {
      throw De(a), h;
    } finally {
      qr(c);
    }
  } else t !== null && Nt(a);
  var u = r && a.deps === null && a.first === null && a.nodes_start === null && a.teardown === null && (a.f & en) === 0;
  if (!u && !i && l && (o !== null && Bi(a, o), I !== null && I.f & ae)) {
    var s = (
      /** @type {Derived} */
      I
    );
    (s.children ?? (s.children = [])).push(a);
  }
  return a;
}
function Hi(e) {
  const t = Je(ft, null, !1);
  return he(t, G), t.teardown = e, t;
}
function pt(e) {
  ji();
  var t = b !== null && (b.f & se) !== 0 && V !== null && !V.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      V
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: b,
      reaction: I
    });
  } else {
    var l = Kt(e);
    return l;
  }
}
function vn(e) {
  const t = Je(ct, e, !0);
  return () => {
    De(t);
  };
}
function Kt(e) {
  return Je(Qr, e, !1);
}
function Xt(e) {
  return Je(ft, e, !0);
}
function Fe(e) {
  return Qt(e);
}
function Qt(e, t = 0) {
  return Je(ft | Zt | t, e, !0);
}
function kt(e, t = !0) {
  return Je(ft | se, e, !0, t);
}
function hn(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = tr, l = I;
    Vr(!0), Ce(null);
    try {
      t.call(null);
    } finally {
      Vr(r), Ce(l);
    }
  }
}
function _n(e) {
  var t = e.deriveds;
  if (t !== null) {
    e.deriveds = null;
    for (var r = 0; r < t.length; r += 1)
      Jt(t[r]);
  }
}
function gn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var l = r.next;
    De(r, t), r = l;
  }
}
function Yi(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    t.f & se || De(t), t = r;
  }
}
function De(e, t = !0) {
  var r = !1;
  if ((t || e.f & ki) && e.nodes_start !== null) {
    for (var l = e.nodes_start, i = e.nodes_end; l !== null; ) {
      var o = l === i ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ae(l)
      );
      l.remove(), l = o;
    }
    r = !0;
  }
  gn(e, t && !r), _n(e), ut(e, 0), he(e, Ge);
  var a = e.transitions;
  if (a !== null)
    for (const u of a)
      u.stop();
  hn(e);
  var c = e.parent;
  c !== null && c.first !== null && mn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function mn(e) {
  var t = e.parent, r = e.prev, l = e.next;
  r !== null && (r.next = l), l !== null && (l.prev = r), t !== null && (t.first === e && (t.first = l), t.last === e && (t.last = r));
}
function Fr(e, t) {
  var r = [];
  pn(e, r, !0), Wi(r, () => {
    De(e), t && t();
  });
}
function Wi(e, t) {
  var r = e.length;
  if (r > 0) {
    var l = () => --r || t();
    for (var i of e)
      i.out(l);
  } else
    t();
}
function pn(e, t, r) {
  if (!(e.f & Ye)) {
    if (e.f ^= Ye, e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || r) && t.push(a);
    for (var l = e.first; l !== null; ) {
      var i = l.next, o = (l.f & Gt) !== 0 || (l.f & se) !== 0;
      pn(l, t, o ? r : !1), l = i;
    }
  }
}
function Mr(e) {
  yn(e, !0);
}
function yn(e, t) {
  if (e.f & Ye) {
    vt(e) && Tt(e), e.f ^= Ye;
    for (var r = e.first; r !== null; ) {
      var l = r.next, i = (r.f & Gt) !== 0 || (r.f & se) !== 0;
      yn(r, i ? t : !1), r = l;
    }
    if (e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || t) && o.in();
  }
}
const Zi = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Ct = !1, At = !1, Bt = [], Ht = [];
function wn() {
  Ct = !1;
  const e = Bt.slice();
  Bt = [], Xr(e);
}
function bn() {
  At = !1;
  const e = Ht.slice();
  Ht = [], Xr(e);
}
function er(e) {
  Ct || (Ct = !0, queueMicrotask(wn)), Bt.push(e);
}
function Gi(e) {
  At || (At = !0, Zi(bn)), Ht.push(e);
}
function Ji() {
  Ct && wn(), At && bn();
}
function En(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
const xn = 0, Ki = 1;
let yt = !1, wt = xn, at = !1, st = null, Be = !1, tr = !1;
function qr(e) {
  Be = e;
}
function Vr(e) {
  tr = e;
}
let Ie = [], He = 0;
let I = null;
function Ce(e) {
  I = e;
}
let b = null;
function ve(e) {
  b = e;
}
let de = null;
function Xi(e) {
  de = e;
}
let q = null, ee = 0, Ee = null;
function Qi(e) {
  Ee = e;
}
let $n = 0, Ue = !1, V = null;
function kn() {
  return ++$n;
}
function el() {
  return !ln;
}
function vt(e) {
  var a, c;
  var t = e.f;
  if (t & $e)
    return !0;
  if (t & dt) {
    var r = e.deps, l = (t & Ne) !== 0;
    if (r !== null) {
      var i;
      if (t & $t) {
        for (i = 0; i < r.length; i++)
          ((a = r[i]).reactions ?? (a.reactions = [])).push(e);
        e.f ^= $t;
      }
      for (i = 0; i < r.length; i++) {
        var o = r[i];
        if (vt(
          /** @type {Derived} */
          o
        ) && dn(
          /** @type {Derived} */
          o
        ), l && b !== null && !Ue && !((c = o == null ? void 0 : o.reactions) != null && c.includes(e)) && (o.reactions ?? (o.reactions = [])).push(e), o.version > e.version)
          return !0;
      }
    }
    l || he(e, G);
  }
  return !1;
}
function tl(e, t) {
  for (var r = t; r !== null; ) {
    if (r.f & Ut)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= Ut;
      }
    r = r.parent;
  }
  throw yt = !1, e;
}
function rl(e) {
  return (e.f & Ge) === 0 && (e.parent === null || (e.parent.f & Ut) === 0);
}
function St(e, t, r, l) {
  if (yt) {
    if (r === null && (yt = !1), rl(t))
      throw e;
    return;
  }
  r !== null && (yt = !0);
  {
    tl(e, t);
    return;
  }
}
function Cn(e) {
  var _;
  var t = q, r = ee, l = Ee, i = I, o = Ue, a = de, c = V, u = e.f;
  q = /** @type {null | Value[]} */
  null, ee = 0, Ee = null, I = u & (se | ct) ? null : e, Ue = !Be && (u & Ne) !== 0, de = null, V = e.ctx;
  try {
    var s = (
      /** @type {Function} */
      (0, e.fn)()
    ), h = e.deps;
    if (q !== null) {
      var v;
      if (ut(e, ee), h !== null && ee > 0)
        for (h.length = ee + q.length, v = 0; v < q.length; v++)
          h[ee + v] = q[v];
      else
        e.deps = h = q;
      if (!Ue)
        for (v = ee; v < h.length; v++)
          ((_ = h[v]).reactions ?? (_.reactions = [])).push(e);
    } else h !== null && ee < h.length && (ut(e, ee), h.length = ee);
    return s;
  } finally {
    q = t, ee = r, Ee = l, I = i, Ue = o, de = a, V = c;
  }
}
function nl(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var l = r.indexOf(e);
    if (l !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[l] = r[i], r.pop());
    }
  }
  r === null && t.f & ae && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (q === null || !q.includes(t)) && (he(t, dt), t.f & (Ne | $t) || (t.f ^= $t), ut(
    /** @type {Derived} **/
    t,
    0
  ));
}
function ut(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var l = t; l < r.length; l++)
      nl(e, r[l]);
}
function Tt(e) {
  var t = e.f;
  if (!(t & Ge)) {
    he(e, G);
    var r = b, l = V;
    b = e;
    try {
      t & Zt ? Yi(e) : gn(e), _n(e), hn(e);
      var i = Cn(e);
      e.teardown = typeof i == "function" ? i : null, e.version = $n;
    } catch (o) {
      St(o, e, r, l || e.ctx);
    } finally {
      b = r;
    }
  }
}
function An() {
  if (He > 1e3) {
    He = 0;
    try {
      Ti();
    } catch (e) {
      if (st !== null)
        St(e, st, null);
      else
        throw e;
    }
  }
  He++;
}
function Rn(e) {
  var t = e.length;
  if (t !== 0) {
    An();
    var r = Be;
    Be = !0;
    try {
      for (var l = 0; l < t; l++) {
        var i = e[l];
        i.f & G || (i.f ^= G);
        var o = [];
        In(i, o), il(o);
      }
    } finally {
      Be = r;
    }
  }
}
function il(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var l = e[r];
      if (!(l.f & (Ge | Ye)))
        try {
          vt(l) && (Tt(l), l.deps === null && l.first === null && l.nodes_start === null && (l.teardown === null ? mn(l) : l.fn = null));
        } catch (i) {
          St(i, l, null, l.ctx);
        }
    }
}
function ll() {
  if (at = !1, He > 1001)
    return;
  const e = Ie;
  Ie = [], Rn(e), at || (He = 0, st = null);
}
function Nt(e) {
  wt === xn && (at || (at = !0, queueMicrotask(ll))), st = e;
  for (var t = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if (r & (ct | se)) {
      if (!(r & G)) return;
      t.f ^= G;
    }
  }
  Ie.push(t);
}
function In(e, t) {
  var r = e.first, l = [];
  e: for (; r !== null; ) {
    var i = r.f, o = (i & se) !== 0, a = o && (i & G) !== 0, c = r.next;
    if (!a && !(i & Ye))
      if (i & ft) {
        if (o)
          r.f ^= G;
        else
          try {
            vt(r) && Tt(r);
          } catch (v) {
            St(v, r, null, r.ctx);
          }
        var u = r.first;
        if (u !== null) {
          r = u;
          continue;
        }
      } else i & Qr && l.push(r);
    if (c === null) {
      let v = r.parent;
      for (; v !== null; ) {
        if (e === v)
          break e;
        var s = v.next;
        if (s !== null) {
          r = s;
          continue e;
        }
        v = v.parent;
      }
    }
    r = c;
  }
  for (var h = 0; h < l.length; h++)
    u = l[h], t.push(u), In(u, t);
}
function R(e) {
  var t = wt, r = Ie;
  try {
    An();
    const i = [];
    wt = Ki, Ie = i, at = !1, Rn(r);
    var l = e == null ? void 0 : e();
    return Ji(), (Ie.length > 0 || i.length > 0) && R(), He = 0, st = null, l;
  } finally {
    wt = t, Ie = r;
  }
}
async function ol() {
  await Promise.resolve(), R();
}
function d(e) {
  var h;
  var t = e.f, r = (t & ae) !== 0;
  if (r && t & Ge) {
    var l = cn(
      /** @type {Derived} */
      e
    );
    return Jt(
      /** @type {Derived} */
      e
    ), l;
  }
  if (I !== null) {
    de !== null && de.includes(e) && zi();
    var i = I.deps;
    q === null && i !== null && i[ee] === e ? ee++ : q === null ? q = [e] : q.push(e), Ee !== null && b !== null && b.f & G && !(b.f & se) && Ee.includes(e) && (he(b, $e), Nt(b));
  } else if (r && /** @type {Derived} */
  e.deps === null)
    for (var o = (
      /** @type {Derived} */
      e
    ), a = o.parent, c = o; a !== null; )
      if (a.f & ae) {
        var u = (
          /** @type {Derived} */
          a
        );
        c = u, a = u.parent;
      } else {
        var s = (
          /** @type {Effect} */
          a
        );
        (h = s.deriveds) != null && h.includes(c) || (s.deriveds ?? (s.deriveds = [])).push(c);
        break;
      }
  return r && (o = /** @type {Derived} */
  e, vt(o) && dn(o)), e.v;
}
function Ze(e) {
  const t = I;
  try {
    return I = null, e();
  } finally {
    I = t;
  }
}
const al = ~($e | dt | G);
function he(e, t) {
  e.f = e.f & al | t;
}
function Sn(e, t = !1, r) {
  V = {
    p: V,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
}
function Tn(e) {
  const t = V;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const a = t.e;
    if (a !== null) {
      var r = b, l = I;
      t.e = null;
      try {
        for (var i = 0; i < a.length; i++) {
          var o = a[i];
          ve(o.effect), Ce(o.reaction), Kt(o.fn);
        }
      } finally {
        ve(r), Ce(l);
      }
    }
    V = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
let Ur = !1;
function Nn() {
  Ur || (Ur = !0, document.addEventListener(
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
function Dn(e) {
  var t = I, r = b;
  Ce(null), ve(null);
  try {
    return e();
  } finally {
    Ce(t), ve(r);
  }
}
function sl(e, t, r, l = r) {
  e.addEventListener(t, () => Dn(r));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), l(!0);
  } : e.__on_r = () => l(!0), Nn();
}
const Ln = /* @__PURE__ */ new Set(), Yt = /* @__PURE__ */ new Set();
function ul(e, t, r, l) {
  function i(o) {
    if (l.capture || lt.call(t, o), !o.cancelBubble)
      return Dn(() => r.call(this, o));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? er(() => {
    t.addEventListener(e, i, l);
  }) : t.addEventListener(e, i, l), i;
}
function fl(e, t, r, l, i) {
  var o = { capture: l, passive: i }, a = ul(e, t, r, o);
  (t === document.body || t === window || t === document) && Hi(() => {
    t.removeEventListener(e, a, o);
  });
}
function cl(e) {
  for (var t = 0; t < e.length; t++)
    Ln.add(e[t]);
  for (var r of Yt)
    r(e);
}
function lt(e) {
  var j;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), l = e.type, i = ((j = e.composedPath) == null ? void 0 : j.call(e)) || [], o = (
    /** @type {null | Element} */
    i[0] || e.target
  ), a = 0, c = e.__root;
  if (c) {
    var u = i.indexOf(c);
    if (u !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var s = i.indexOf(t);
    if (s === -1)
      return;
    u <= s && (a = u);
  }
  if (o = /** @type {Element} */
  i[a] || e.target, o !== t) {
    xt(e, "currentTarget", {
      configurable: !0,
      get() {
        return o || r;
      }
    });
    var h = I, v = b;
    Ce(null), ve(null);
    try {
      for (var _, m = []; o !== null; ) {
        var w = o.assignedSlot || o.parentNode || /** @type {any} */
        o.host || null;
        try {
          var N = o["__" + l];
          if (N !== void 0 && !/** @type {any} */
          o.disabled)
            if (Kr(N)) {
              var [O, ...U] = N;
              O.apply(o, [e, ...U]);
            } else
              N.call(o, e);
        } catch (M) {
          _ ? m.push(M) : _ = M;
        }
        if (e.cancelBubble || w === t || w === null)
          break;
        o = w;
      }
      if (_) {
        for (let M of m)
          queueMicrotask(() => {
            throw M;
          });
        throw _;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Ce(h), ve(v);
    }
  }
}
function Pn(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function xe(e, t) {
  var r = (
    /** @type {Effect} */
    b
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ue(e, t) {
  var r = (t & pi) !== 0, l = (t & yi) !== 0, i, o = !e.startsWith("<!>");
  return () => {
    if (P)
      return xe(L, null), L;
    i === void 0 && (i = Pn(o ? e : "<!>" + e), r || (i = /** @type {Node} */
    /* @__PURE__ */ Te(i)));
    var a = (
      /** @type {TemplateNode} */
      l ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Te(a)
      ), u = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      xe(c, u);
    } else
      xe(a, a);
    return a;
  };
}
function dl() {
  if (P)
    return xe(L, null), L;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = It();
  return e.append(t, r), xe(t, r), e;
}
function Q(e, t) {
  if (P) {
    b.nodes_end = L, We();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const vl = ["touchstart", "touchmove"];
function hl(e) {
  return vl.includes(e);
}
function zn(e, t) {
  return On(e, t);
}
function _l(e, t) {
  jt(), t.intro = t.intro ?? !1;
  const r = t.target, l = P, i = L;
  try {
    for (var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Te(r)
    ); o && (o.nodeType !== 8 || /** @type {Comment} */
    o.data !== Wr); )
      o = /** @type {TemplateNode} */
      /* @__PURE__ */ Ae(o);
    if (!o)
      throw je;
    Ve(!0), ke(
      /** @type {Comment} */
      o
    ), We();
    const a = On(e, { ...t, anchor: o });
    if (L === null || L.nodeType !== 8 || /** @type {Comment} */
    L.data !== Gr)
      throw Rt(), je;
    return Ve(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === je)
      return t.recover === !1 && Ni(), jt(), Vi(r), Ve(!1), zn(e, t);
    throw a;
  } finally {
    Ve(l), ke(i);
  }
}
const Me = /* @__PURE__ */ new Map();
function On(e, { target: t, anchor: r, props: l = {}, events: i, context: o, intro: a = !0 }) {
  jt();
  var c = /* @__PURE__ */ new Set(), u = (v) => {
    for (var _ = 0; _ < v.length; _++) {
      var m = v[_];
      if (!c.has(m)) {
        c.add(m);
        var w = hl(m);
        t.addEventListener(m, lt, { passive: w });
        var N = Me.get(m);
        N === void 0 ? (document.addEventListener(m, lt, { passive: w }), Me.set(m, 1)) : Me.set(m, N + 1);
      }
    }
  };
  u(wi(Ln)), Yt.add(u);
  var s = void 0, h = vn(() => {
    var v = r ?? t.appendChild(It());
    return kt(() => {
      if (o) {
        Sn({});
        var _ = (
          /** @type {ComponentContext} */
          V
        );
        _.c = o;
      }
      i && (l.$$events = i), P && xe(
        /** @type {TemplateNode} */
        v,
        null
      ), s = e(v, l) || {}, P && (b.nodes_end = L), o && Tn();
    }), () => {
      var w;
      for (var _ of c) {
        t.removeEventListener(_, lt);
        var m = (
          /** @type {number} */
          Me.get(_)
        );
        --m === 0 ? (document.removeEventListener(_, lt), Me.delete(_)) : Me.set(_, m);
      }
      Yt.delete(u), Wt.delete(s), v !== r && ((w = v.parentNode) == null || w.removeChild(v));
    };
  });
  return Wt.set(s, h), s;
}
let Wt = /* @__PURE__ */ new WeakMap();
function gl(e) {
  const t = Wt.get(e);
  t && t();
}
function be(e, t, r = !1) {
  P && We();
  var l = e, i = null, o = null, a = Z, c = r ? Gt : 0, u = !1;
  const s = (v, _ = !0) => {
    u = !0, h(_, v);
  }, h = (v, _) => {
    if (a === (a = v)) return;
    let m = !1;
    if (P) {
      const w = (
        /** @type {Comment} */
        l.data === Zr
      );
      !!a === w && (l = qi(), ke(l), Ve(!1), m = !0);
    }
    a ? (i ? Mr(i) : _ && (i = kt(() => _(l))), o && Fr(o, () => {
      o = null;
    })) : (o ? Mr(o) : _ && (o = kt(() => _(l))), i && Fr(i, () => {
      i = null;
    })), m && Ve(!0);
  };
  Qt(() => {
    u = !1, t(s), u || h(null, null);
  }, c), P && (l = L);
}
function qe(e, t, r, l, i) {
  var o = e, a = "", c;
  Qt(() => {
    if (a === (a = t() ?? "")) {
      P && We();
      return;
    }
    c !== void 0 && (De(c), c = void 0), a !== "" && (c = kt(() => {
      if (P) {
        L.data;
        for (var u = We(), s = u; u !== null && (u.nodeType !== 8 || /** @type {Comment} */
        u.data !== ""); )
          s = u, u = /** @type {TemplateNode} */
          /* @__PURE__ */ Ae(u);
        if (u === null)
          throw Rt(), je;
        xe(L, s), o = ke(u);
        return;
      }
      var h = a + "", v = Pn(h);
      xe(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Te(v),
        /** @type {TemplateNode} */
        v.lastChild
      ), o.before(v);
    }));
  });
}
function ml(e, t, r, l, i) {
  var c;
  P && We();
  var o = (c = t.$$slots) == null ? void 0 : c[r], a = !1;
  o === !0 && (o = t.children, a = !0), o === void 0 || o(e, a ? () => l : l);
}
function pl(e, t) {
  er(() => {
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
function jr(e) {
  if (P) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var l = e.value;
          oe(e, "value", null), e.value = l;
        }
        if (e.hasAttribute("checked")) {
          var i = e.checked;
          oe(e, "checked", null), e.checked = i;
        }
      }
    };
    e.__on_r = r, Gi(r), Nn();
  }
}
function yl(e, t) {
  var r = e.__attributes ?? (e.__attributes = {});
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when its `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t);
}
function oe(e, t, r, l) {
  var i = e.__attributes ?? (e.__attributes = {});
  P && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || i[t] !== (i[t] = r) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[Ci] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && wl(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
var Br = /* @__PURE__ */ new Map();
function wl(e) {
  var t = Br.get(e.nodeName);
  if (t) return t;
  Br.set(e.nodeName, t = []);
  for (var r, l = Vt(e), i = Element.prototype; i !== l; ) {
    r = bi(l);
    for (var o in r)
      r[o].set && t.push(o);
    l = Vt(l);
  }
  return t;
}
function bl(e, t, r) {
  if (r) {
    if (e.classList.contains(t)) return;
    e.classList.add(t);
  } else {
    if (!e.classList.contains(t)) return;
    e.classList.remove(t);
  }
}
function El(e, t, r = t) {
  sl(e, "change", (l) => {
    var i = l ? e.defaultChecked : e.checked;
    r(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (P && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  Ze(t) == null) && r(e.checked), Xt(() => {
    var l = t();
    e.checked = !!l;
  });
}
function Hr(e, t) {
  return e === t || (e == null ? void 0 : e[ot]) === t;
}
function Yr(e = {}, t, r, l) {
  return Kt(() => {
    var i, o;
    return Xt(() => {
      i = o, o = [], Ze(() => {
        e !== r(...o) && (t(e, ...o), i && Hr(r(...i), e) && t(null, ...i));
      });
    }), () => {
      er(() => {
        o && Hr(r(...o), e) && t(null, ...o);
      });
    };
  }), e;
}
function Fn(e) {
  V === null && En(), pt(() => {
    const t = Ze(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function xl(e) {
  V === null && En(), Fn(() => () => Ze(e));
}
let mt = !1;
function $l(e) {
  var t = mt;
  try {
    return mt = !1, [e(), mt];
  } finally {
    mt = t;
  }
}
function kl(e) {
  for (var t = b, r = b; t !== null && !(t.f & (se | ct)); )
    t = t.parent;
  try {
    return ve(t), e();
  } finally {
    ve(r);
  }
}
function T(e, t, r, l) {
  var B;
  var i = (r & hi) !== 0, o = !ln, a = (r & gi) !== 0, c = (r & mi) !== 0, u = !1, s;
  a ? [s, u] = $l(() => (
    /** @type {V} */
    e[t]
  )) : s = /** @type {V} */
  e[t];
  var h = ot in e || tn in e, v = ((B = Se(e, t)) == null ? void 0 : B.set) ?? (h && a && t in e ? (D) => e[t] = D : void 0), _ = (
    /** @type {V} */
    l
  ), m = !0, w = !1, N = () => (w = !0, m && (m = !1, c ? _ = Ze(
    /** @type {() => V} */
    l
  ) : _ = /** @type {V} */
  l), _);
  s === void 0 && l !== void 0 && (v && o && Di(), s = N(), v && v(s));
  var O;
  if (O = () => {
    var D = (
      /** @type {V} */
      e[t]
    );
    return D === void 0 ? N() : (m = !0, w = !1, D);
  }, !(r & _i))
    return O;
  if (v) {
    var U = e.$$legacy;
    return function(D, J) {
      return arguments.length > 0 ? ((!J || U || u) && v(J ? O() : D), D) : O();
    };
  }
  var j = !1, M = !1, Y = /* @__PURE__ */ on(s), ie = kl(
    () => /* @__PURE__ */ it(() => {
      var D = O(), J = d(Y);
      return j ? (j = !1, M = !0, J) : (M = !1, Y.v = D);
    })
  );
  return i || (ie.equals = nn), function(D, J) {
    if (arguments.length > 0) {
      const _e = J ? d(ie) : a ? F(D) : D;
      return ie.equals(_e) || (j = !0, C(Y, _e), w && _ !== void 0 && (_ = _e), Ze(() => d(ie))), D;
    }
    return d(ie);
  };
}
function Cl(e) {
  return new Al(e);
}
var me, ne;
class Al {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    Ft(this, me);
    /** @type {Record<string, any>} */
    Ft(this, ne);
    var o;
    var r = /* @__PURE__ */ new Map(), l = (a, c) => {
      var u = /* @__PURE__ */ on(c);
      return r.set(a, u), u;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, c) {
          return d(r.get(c) ?? l(c, Reflect.get(a, c)));
        },
        has(a, c) {
          return c === tn ? !0 : (d(r.get(c) ?? l(c, Reflect.get(a, c))), Reflect.has(a, c));
        },
        set(a, c, u) {
          return C(r.get(c) ?? l(c, u), u), Reflect.set(a, c, u);
        }
      }
    );
    Mt(this, ne, (t.hydrate ? _l : zn)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((o = t == null ? void 0 : t.props) != null && o.$$host) || t.sync === !1) && R(), Mt(this, me, i.$$events);
    for (const a of Object.keys(W(this, ne)))
      a === "$set" || a === "$destroy" || a === "$on" || xt(this, a, {
        get() {
          return W(this, ne)[a];
        },
        /** @param {any} value */
        set(c) {
          W(this, ne)[a] = c;
        },
        enumerable: !0
      });
    W(this, ne).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, W(this, ne).$destroy = () => {
      gl(W(this, ne));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    W(this, ne).$set(t);
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
    W(this, ne).$destroy();
  }
}
me = new WeakMap(), ne = new WeakMap();
let Mn;
typeof HTMLElement == "function" && (Mn = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, l) {
    super();
    /** The Svelte component constructor */
    le(this, "$$ctor");
    /** Slots */
    le(this, "$$s");
    /** @type {any} The Svelte component instance */
    le(this, "$$c");
    /** Whether or not the custom element is connected */
    le(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    le(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    le(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    le(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    le(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    le(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    le(this, "$$me");
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
          i !== "default" && (a.name = i), Q(o, a);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, l = Rl(this);
      for (const i of this.$$s)
        i in l && (i === "default" && !this.$$d.children ? (this.$$d.children = t(i), r.default = !0) : r[i] = t(i));
      for (const i of this.attributes) {
        const o = this.$$g_p(i.name);
        o in this.$$d || (this.$$d[o] = bt(o, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = Cl({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = vn(() => {
        Xt(() => {
          var i;
          this.$$r = !0;
          for (const o of Et(this.$$c)) {
            if (!((i = this.$$p_d[o]) != null && i.reflect)) continue;
            this.$$d[o] = this.$$c[o];
            const a = bt(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = bt(t, l, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
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
function bt(e, t, r, l) {
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
function Rl(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function Il(e, t, r, l, i, o) {
  let a = class extends Mn {
    constructor() {
      super(e, r, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Et(t).map(
        (c) => (t[c].attribute || c).toLowerCase()
      );
    }
  };
  return Et(t).forEach((c) => {
    xt(a.prototype, c, {
      get() {
        return this.$$c && c in this.$$c ? this.$$c[c] : this.$$d[c];
      },
      set(u) {
        var v;
        u = bt(c, u, t), this.$$d[c] = u;
        var s = this.$$c;
        if (s) {
          var h = (v = Se(s, c)) == null ? void 0 : v.get;
          h ? s[c] = u : s.$set({ [c]: u });
        }
      }
    });
  }), l.forEach((c) => {
    xt(a.prototype, c, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[c];
      }
    });
  }), e.element = /** @type {any} */
  a, a;
}
const qn = new TextEncoder();
function Sl(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function Tl(e, t = "SHA-256", r = 1e5) {
  const l = Date.now().toString(16);
  e || (e = Math.round(Math.random() * r));
  const i = await Vn(l, e, t);
  return {
    algorithm: t,
    challenge: i,
    salt: l,
    signature: ""
  };
}
async function Vn(e, t, r) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return Sl(
    await crypto.subtle.digest(
      r.toUpperCase(),
      qn.encode(e + t)
    )
  );
}
function Nl(e, t, r = "SHA-256", l = 1e6, i = 0) {
  const o = new AbortController(), a = Date.now();
  return {
    promise: (async () => {
      for (let u = i; u <= l; u += 1) {
        if (o.signal.aborted)
          return null;
        if (await Vn(t, u, r) === e)
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
function Dl() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function Ll(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let l = 0; l < t.length; l++)
    r[l] = t.charCodeAt(l);
  return r;
}
function Pl(e, t = 12) {
  const r = new Uint8Array(t);
  for (let l = 0; l < t; l++)
    r[l] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function zl(e, t = "", r = 1e6, l = 0) {
  const i = "AES-GCM", o = new AbortController(), a = Date.now(), c = async () => {
    for (let h = l; h <= r; h += 1) {
      if (o.signal.aborted || !u || !s)
        return null;
      try {
        const v = await crypto.subtle.decrypt(
          {
            name: i,
            iv: Pl(h)
          },
          u,
          s
        );
        if (v)
          return {
            clearText: new TextDecoder().decode(v),
            took: Date.now() - a
          };
      } catch {
      }
    }
    return null;
  };
  let u = null, s = null;
  try {
    s = Ll(e);
    const h = await crypto.subtle.digest(
      "SHA-256",
      qn.encode(t)
    );
    u = await crypto.subtle.importKey(
      "raw",
      h,
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
    promise: c(),
    controller: o
  };
}
var k = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(k || {}), Ol = /* @__PURE__ */ ue('<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="svelte-ddsc3z"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25" class="svelte-ddsc3z"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor" class="altcha-spinner svelte-ddsc3z"></path></svg>'), Fl = /* @__PURE__ */ ue('<span role="status" aria-live="polite" class="svelte-ddsc3z"><!></span> <input type="hidden" class="svelte-ddsc3z">', 1), Ml = /* @__PURE__ */ ue('<span role="status" aria-live="polite" class="svelte-ddsc3z"><!></span>'), ql = /* @__PURE__ */ ue('<label class="svelte-ddsc3z"><!></label>'), Vl = /* @__PURE__ */ ue('<div class="svelte-ddsc3z"><a target="_blank" class="altcha-logo svelte-ddsc3z"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-ddsc3z"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor" class="svelte-ddsc3z"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor" class="svelte-ddsc3z"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor" class="svelte-ddsc3z"></path></svg></a></div>'), Ul = /* @__PURE__ */ ue('<div class="svelte-ddsc3z"><!></div>'), jl = /* @__PURE__ */ ue('<div class="svelte-ddsc3z"><!></div>'), Bl = /* @__PURE__ */ ue('<div class="altcha-error svelte-ddsc3z"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="svelte-ddsc3z"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" class="svelte-ddsc3z"></path></svg> <!></div>'), Hl = /* @__PURE__ */ ue('<div class="altcha-footer svelte-ddsc3z"><div class="svelte-ddsc3z"><!></div></div>'), Yl = /* @__PURE__ */ ue('<div class="altcha-anchor-arrow svelte-ddsc3z"></div>'), Wl = /* @__PURE__ */ ue('<!> <div class="altcha svelte-ddsc3z"><div class="altcha-main svelte-ddsc3z"><!> <div class="altcha-checkbox svelte-ddsc3z"><input type="checkbox" class="svelte-ddsc3z"></div> <div class="altcha-label svelte-ddsc3z"><!></div> <!></div> <!> <!> <!></div>', 1);
const Zl = {
  hash: "svelte-ddsc3z",
  code: `.altcha.svelte-ddsc3z {background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);position:relative;text-align:left;}.altcha.svelte-ddsc3z:focus-within {border-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating].svelte-ddsc3z {background:var(--altcha-color-base, white);display:none;filter:drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2));left:-100%;position:fixed;top:-100%;width:var(--altcha-max-width, 260px);z-index:999999;}.altcha[data-floating=top].svelte-ddsc3z .altcha-anchor-arrow:where(.svelte-ddsc3z) {border-bottom-color:transparent;border-top-color:var(--altcha-color-border, #a0a0a0);bottom:-12px;top:auto;}.altcha[data-floating=bottom].svelte-ddsc3z:focus-within::after {border-bottom-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating=top].svelte-ddsc3z:focus-within::after {border-top-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating].svelte-ddsc3z:not([data-state=unverified]) {display:block;}.altcha-anchor-arrow.svelte-ddsc3z {border:6px solid transparent;border-bottom-color:var(--altcha-color-border, #a0a0a0);content:"";height:0;left:12px;position:absolute;top:-12px;width:0;}.altcha-main.svelte-ddsc3z {align-items:center;display:flex;gap:0.4rem;padding:0.7rem;}.altcha-label.svelte-ddsc3z {flex-grow:1;}.altcha-label.svelte-ddsc3z label:where(.svelte-ddsc3z) {cursor:pointer;}.altcha-logo.svelte-ddsc3z {color:currentColor;opacity:0.3;}.altcha-logo.svelte-ddsc3z:hover {opacity:1;}.altcha-error.svelte-ddsc3z {color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem;}.altcha-footer.svelte-ddsc3z {align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.4;padding:0.2rem 0.7rem;text-align:right;}.altcha-footer.svelte-ddsc3z:hover {opacity:1;}.altcha-footer.svelte-ddsc3z > :where(.svelte-ddsc3z):first-child {flex-grow:1;}.altcha-footer.svelte-ddsc3z a {color:currentColor;}.altcha-checkbox.svelte-ddsc3z {display:flex;align-items:center;height:24px;width:24px;}.altcha-checkbox.svelte-ddsc3z input:where(.svelte-ddsc3z) {width:18px;height:18px;margin:0;}.altcha-hidden.svelte-ddsc3z {display:none;}.altcha-spinner.svelte-ddsc3z {
  animation: svelte-ddsc3z-altcha-spinner 0.75s infinite linear;transform-origin:center;}

@keyframes svelte-ddsc3z-altcha-spinner {
  100% {
    transform: rotate(360deg);
  }
}`
};
function Gl(e, t) {
  var Tr, Nr;
  Sn(t, !0), pl(e, Zl);
  let r = T(t, "auto", 7, void 0), l = T(t, "blockspam", 7, void 0), i = T(t, "challengeurl", 7, void 0), o = T(t, "challengejson", 7, void 0), a = T(t, "debug", 7, !1), c = T(t, "delay", 7, 0), u = T(t, "expire", 7, void 0), s = T(t, "floating", 7, void 0), h = T(t, "floatinganchor", 7, void 0), v = T(t, "floatingoffset", 7, void 0), _ = T(t, "hidefooter", 7, !1), m = T(t, "hidelogo", 7, !1), w = T(t, "name", 7, "altcha"), N = T(t, "maxnumber", 7, 1e6), O = T(t, "mockerror", 7, !1), U = T(t, "obfuscated", 7, void 0), j = T(t, "plugins", 7, void 0), M = T(t, "refetchonexpire", 7, !0), Y = T(t, "spamfilter", 7, !1), ie = T(t, "strings", 7, void 0), B = T(t, "test", 7, !1), D = T(t, "verifyurl", 7, void 0), J = T(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), _e = T(t, "workerurl", 7, void 0);
  console.log(">>>", {
    hidelogo: m(),
    hidefooter: _()
  });
  const rr = ["SHA-256", "SHA-384", "SHA-512"], nr = "Visit Altcha.org", ir = "https://altcha.org/", Ke = (n, f) => t.$$host.dispatchEvent(new CustomEvent(n, { detail: f })), lr = (Nr = (Tr = document.documentElement.lang) == null ? void 0 : Tr.split("-")) == null ? void 0 : Nr[0], Dt = /* @__PURE__ */ it(() => {
    var n;
    return i() && new URL(i(), location.origin).host.endsWith(".altcha.org") && !!((n = i()) != null && n.includes("apiKey=ckey_"));
  }), Lt = /* @__PURE__ */ it(() => o() ? gr(o()) : void 0), or = /* @__PURE__ */ it(() => ie() ? gr(ie()) : {}), te = /* @__PURE__ */ it(() => {
    var n;
    return {
      ariaLinkLabel: nr,
      error: "Verification failed. Try again later.",
      expired: "Verification expired. Try again.",
      footer: `Protected by <a href="${ir}" target="_blank" aria-label="${((n = d(or)) == null ? void 0 : n.ariaLinkLabel) || nr}">ALTCHA</a>`,
      label: "I'm not a robot",
      verified: "Verified",
      verifying: "Verifying...",
      waitAlert: "Verifying... please wait.",
      ...d(or)
    };
  });
  let Le = Oe(!1), H = Oe(void 0), Xe = Oe(null), Pe = null, E = null, pe = Oe(null), fe = null, Re = Oe(null), ye = [], x = Oe(F(k.UNVERIFIED));
  pt(() => {
    Ke("statechange", {
      payload: d(Re),
      state: d(x)
    });
  }), pt(() => {
    Gn(d(pe));
  }), pt(() => {
    Jn(d(x));
  }), xl(() => {
    Un(), E && (E.removeEventListener("submit", dr), E.removeEventListener("reset", vr), E.removeEventListener("focusin", cr), E = null), fe && (clearTimeout(fe), fe = null), document.removeEventListener("click", ur), document.removeEventListener("scroll", fr), window.removeEventListener("resize", _r);
  }), Fn(() => {
    var n;
    S("mounted", "1.0.7"), S("workers", J()), Wn(), S("plugins", ye.length ? ye.map((f) => f.constructor.pluginName).join(", ") : "none"), B() && S("using test mode"), u() && _t(u()), r() !== void 0 && S("auto", r()), s() !== void 0 && mr(s()), E = (n = d(H)) == null ? void 0 : n.closest("form"), E && (E.addEventListener("submit", dr, { capture: !0 }), E.addEventListener("reset", vr), r() === "onfocus" && E.addEventListener("focusin", cr)), r() === "onload" && (U() ? Qe() : we()), d(Dt) && (_() || m()) && S("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      Ke("load");
    });
  });
  function ar(n, f) {
    return btoa(JSON.stringify({
      algorithm: n.algorithm,
      challenge: n.challenge,
      number: f.number,
      salt: n.salt,
      signature: n.signature,
      test: B() ? !0 : void 0,
      took: f.took
    }));
  }
  function Un() {
    for (const n of ye)
      n.destroy();
  }
  function sr() {
    i() && M() && d(x) === k.VERIFIED ? we() : et(k.EXPIRED, d(te).expired);
  }
  async function jn() {
    var n;
    if (O())
      throw S("mocking error"), new Error("Mocked error.");
    if (d(Lt))
      return S("using provided json data"), d(Lt);
    if (B())
      return S("generating test challenge", { test: B() }), Tl(typeof B() != "boolean" ? +B() : void 0);
    {
      if (!i() && E) {
        const y = E.getAttribute("action");
        y != null && y.includes("/form/") && i(y + "/altcha");
      }
      if (!i())
        throw new Error("Attribute challengeurl not set.");
      S("fetching challenge from", i());
      const f = await fetch(i(), {
        headers: Y() ? { "x-altcha-spam-filter": "1" } : {}
      });
      if (f.status !== 200)
        throw new Error(`Server responded with ${f.status}.`);
      const g = f.headers.get("Expires"), $ = f.headers.get("X-Altcha-Config"), z = await f.json(), A = new URLSearchParams((n = z.salt.split("?")) == null ? void 0 : n[1]), p = A.get("expires") || A.get("expire");
      if (p) {
        const y = new Date(+p * 1e3), re = isNaN(y.getTime()) ? 0 : y.getTime() - Date.now();
        re > 0 && _t(re);
      }
      if ($)
        try {
          const y = JSON.parse($);
          y && typeof y == "object" && (y.verifyurl && (y.verifyurl = new URL(y.verifyurl, new URL(i())).toString()), wr(y));
        } catch (y) {
          S("unable to configure from X-Altcha-Config", y);
        }
      if (!u() && (g != null && g.length)) {
        const y = Date.parse(g);
        if (y) {
          const re = y - Date.now();
          re > 0 && _t(re);
        }
      }
      return z;
    }
  }
  function Bn(n) {
    var g;
    const f = E == null ? void 0 : E.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((g = f == null ? void 0 : f.value) == null ? void 0 : g.slice(f.value.indexOf("@"))) || void 0;
  }
  function Hn() {
    return Y() === "ipAddress" ? {
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
    } : typeof Y() == "object" ? Y() : {
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
  function Yn(n) {
    return [
      ...(E == null ? void 0 : E.querySelectorAll(n != null && n.length ? n.map((g) => `input[name="${g}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (g, $) => {
        const z = $.name, A = $.value;
        return z && A && (g[z] = /\n/.test(A) ? A.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : A), g;
      },
      {}
    );
  }
  function Wn() {
    const n = j() !== void 0 ? j().split(",") : void 0;
    for (const f of globalThis.altchaPlugins)
      (!n || n.includes(f.pluginName)) && ye.push(new f({
        el: d(H),
        clarify: Qe,
        dispatch: Ke,
        getConfiguration: br,
        getFloatingAnchor: Er,
        getState: xr,
        log: S,
        reset: et,
        solve: yr,
        setState: kr,
        setFloatingAnchor: $r,
        verify: we
      }));
  }
  function S(...n) {
    (a() || n.some((f) => f instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${w()}]`, ...n);
  }
  function Zn() {
    [k.UNVERIFIED, k.ERROR, k.EXPIRED].includes(d(x)) ? Y() && (E == null ? void 0 : E.reportValidity()) === !1 ? C(Le, !1) : U() ? Qe() : we() : C(Le, !0);
  }
  function ur(n) {
    const f = n.target;
    s() && f && !d(H).contains(f) && (d(x) === k.VERIFIED || r() === "off" && d(x) === k.UNVERIFIED) && (d(H).style.display = "none");
  }
  function fr() {
    s() && d(x) !== k.UNVERIFIED && ht();
  }
  function Gn(n) {
    for (const f of ye)
      typeof f.onErrorChange == "function" && f.onErrorChange(d(pe));
  }
  function cr(n) {
    d(x) === k.UNVERIFIED && we();
  }
  function dr(n) {
    E && r() === "onsubmit" ? d(x) === k.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), we().then(() => {
      E == null || E.requestSubmit();
    })) : d(x) !== k.VERIFIED && (n.preventDefault(), n.stopPropagation(), d(x) === k.VERIFYING && hr()) : E && s() && r() === "off" && d(x) === k.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), d(H).style.display = "block", ht());
  }
  function vr() {
    et();
  }
  function hr() {
    d(x) === k.VERIFYING && d(te).waitAlert && alert(d(te).waitAlert);
  }
  function Jn(n) {
    for (const f of ye)
      typeof f.onStateChange == "function" && f.onStateChange(d(x));
    s() && d(x) !== k.UNVERIFIED && requestAnimationFrame(() => {
      ht();
    }), C(Le, d(x) === k.VERIFIED);
  }
  function _r() {
    s() && ht();
  }
  function gr(n) {
    return JSON.parse(n);
  }
  function ht(n = 20) {
    if (d(H))
      if (Pe || (Pe = (h() ? document.querySelector(h()) : E == null ? void 0 : E.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || E), Pe) {
        const f = parseInt(v(), 10) || 12, g = Pe.getBoundingClientRect(), $ = d(H).getBoundingClientRect(), z = document.documentElement.clientHeight, A = document.documentElement.clientWidth, p = s() === "auto" ? g.bottom + $.height + f + n > z : s() === "top", y = Math.max(n, Math.min(A - n - $.width, g.left + g.width / 2 - $.width / 2));
        if (p ? d(H).style.top = `${g.top - ($.height + f)}px` : d(H).style.top = `${g.bottom + f}px`, d(H).style.left = `${y}px`, d(H).setAttribute("data-floating", p ? "top" : "bottom"), d(Xe)) {
          const re = d(Xe).getBoundingClientRect();
          d(Xe).style.left = g.left - y + g.width / 2 - re.width / 2 + "px";
        }
      } else
        S("unable to find floating anchor element");
  }
  async function Kn(n) {
    if (!D())
      throw new Error("Attribute verifyurl not set.");
    S("requesting server verification from", D());
    const f = { payload: n };
    if (Y()) {
      const {
        blockedCountries: z,
        classifier: A,
        disableRules: p,
        email: y,
        expectedLanguages: re,
        expectedCountries: Ot,
        fields: rt,
        ipAddress: nt,
        text: fi,
        timeZone: Dr
      } = Hn();
      f.blockedCountries = z, f.classifier = A, f.disableRules = p, f.email = y === !1 ? void 0 : Bn(y), f.expectedCountries = Ot, f.expectedLanguages = re || (lr ? [lr] : void 0), f.fields = rt === !1 ? void 0 : Yn(rt), f.ipAddress = nt === !1 ? void 0 : nt || "auto", f.text = fi, f.timeZone = Dr === !1 ? void 0 : Dr || Dl();
    }
    const g = await fetch(D(), {
      body: JSON.stringify(f),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (g.status !== 200)
      throw new Error(`Server responded with ${g.status}.`);
    const $ = await g.json();
    if ($ != null && $.payload && C(Re, F($.payload)), Ke("serververification", $), l() && $.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  function _t(n) {
    S("expire", n), fe && (clearTimeout(fe), fe = null), n < 1 ? sr() : fe = setTimeout(sr, n);
  }
  function mr(n) {
    S("floating", n), s() !== n && (d(H).style.left = "", d(H).style.top = ""), s(n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : s()), s() ? (r() || r("onsubmit"), document.addEventListener("scroll", fr), document.addEventListener("click", ur), window.addEventListener("resize", _r)) : r() === "onsubmit" && r(void 0);
  }
  function pr(n) {
    if (!n.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (n.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!rr.includes(n.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${rr.join(", ")}`);
    if (!n.challenge || n.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!n.salt || n.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function yr(n) {
    let f = null;
    if ("Worker" in window) {
      try {
        f = await Xn(n, n.maxnumber);
      } catch (g) {
        S(g);
      }
      if ((f == null ? void 0 : f.number) !== void 0 || "obfuscated" in n)
        return { data: n, solution: f };
    }
    if ("obfuscated" in n) {
      const g = await zl(n.obfuscated, n.key, n.maxnumber);
      return { data: n, solution: await g.promise };
    }
    return {
      data: n,
      solution: await Nl(n.challenge, n.salt, n.algorithm, n.maxnumber || N()).promise
    };
  }
  async function Xn(n, f = typeof B() == "number" ? B() : N(), g = Math.ceil(J())) {
    const $ = [];
    g = Math.min(16, Math.max(1, g));
    for (let p = 0; p < g; p++)
      $.push(altchaCreateWorker(_e()));
    const z = Math.ceil(f / g), A = await Promise.all($.map((p, y) => {
      const re = y * z;
      return new Promise((Ot) => {
        p.addEventListener("message", (rt) => {
          if (rt.data)
            for (const nt of $)
              nt !== p && nt.postMessage({ type: "abort" });
          Ot(rt.data);
        }), p.postMessage({
          payload: n,
          max: re + z,
          start: re,
          type: "work"
        });
      });
    }));
    for (const p of $)
      p.terminate();
    return A.find((p) => !!p) || null;
  }
  async function Qe() {
    if (!U()) {
      C(x, F(k.ERROR));
      return;
    }
    const n = ye.find((f) => f.constructor.pluginName === "obfuscation");
    if (!n || !("clarify" in n)) {
      C(x, F(k.ERROR)), S("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in n && typeof n.clarify == "function")
      return n.clarify();
  }
  function wr(n) {
    n.obfuscated !== void 0 && U(n.obfuscated), n.auto !== void 0 && (r(n.auto), r() === "onload" && (U() ? Qe() : we())), n.blockspam !== void 0 && l(!!n.blockspam), n.floatinganchor !== void 0 && h(n.floatinganchor), n.delay !== void 0 && c(n.delay), n.floatingoffset !== void 0 && v(n.floatingoffset), n.floating !== void 0 && mr(n.floating), n.expire !== void 0 && (_t(n.expire), u(n.expire)), n.challenge && (o(typeof n.challenge == "string" ? n.challenge : JSON.stringify(n.challenge)), pr(d(Lt))), n.challengeurl !== void 0 && i(n.challengeurl), n.debug !== void 0 && a(!!n.debug), n.hidefooter !== void 0 && _(!!n.hidefooter), n.hidelogo !== void 0 && m(!!n.hidelogo), n.maxnumber !== void 0 && N(+n.maxnumber), n.mockerror !== void 0 && O(!!n.mockerror), n.name !== void 0 && w(n.name), n.refetchonexpire !== void 0 && M(!!n.refetchonexpire), n.spamfilter !== void 0 && Y(typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && ie(typeof n.strings == "string" ? n.strings : JSON.stringify(n.strings)), n.test !== void 0 && B(typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && D(n.verifyurl), n.workers !== void 0 && J(+n.workers), n.workerurl !== void 0 && _e(n.workerurl);
  }
  function br() {
    return {
      auto: r(),
      blockspam: l(),
      challengeurl: i(),
      debug: a(),
      delay: c(),
      expire: u(),
      floating: s(),
      floatinganchor: h(),
      floatingoffset: v(),
      hidefooter: _(),
      hidelogo: m(),
      name: w(),
      maxnumber: N(),
      mockerror: O(),
      obfuscated: U(),
      refetchonexpire: M(),
      spamfilter: Y(),
      strings: d(te),
      test: B(),
      verifyurl: D(),
      workers: J(),
      workerurl: _e()
    };
  }
  function Er() {
    return Pe;
  }
  function Qn(n) {
    return ye.find((f) => f.constructor.pluginName === n);
  }
  function xr() {
    return d(x);
  }
  function et(n = k.UNVERIFIED, f = null) {
    fe && (clearTimeout(fe), fe = null), C(Le, !1), C(pe, F(f)), C(Re, null), C(x, F(n));
  }
  function $r(n) {
    Pe = n;
  }
  function kr(n, f = null) {
    C(x, F(n)), C(pe, F(f));
  }
  async function we() {
    return et(k.VERIFYING), await new Promise((n) => setTimeout(n, c() || 0)), jn().then((n) => (pr(n), S("challenge", n), yr(n))).then(({ data: n, solution: f }) => {
      if (S("solution", f), "challenge" in n && f && !("clearText" in f))
        if ((f == null ? void 0 : f.number) !== void 0) {
          if (D())
            return Kn(ar(n, f));
          C(Re, F(ar(n, f))), S("payload", d(Re));
        } else
          throw S("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      C(x, F(k.VERIFIED)), S("verified"), ol().then(() => {
        Ke("verified", { payload: d(Re) });
      });
    }).catch((n) => {
      S(n), C(x, F(k.ERROR)), C(pe, F(n.message));
    });
  }
  var Cr = Wl(), Ar = qt(Cr);
  ml(Ar, t, "default", {});
  var tt = ge(Ar, 2), Pt = X(tt), Rr = X(Pt);
  {
    var ei = (n) => {
      var f = Ol();
      Q(n, f);
    };
    be(Rr, (n) => {
      d(x) === k.VERIFYING && n(ei);
    });
  }
  var gt = ge(Rr, 2), ze = X(gt);
  jr(ze), ze.__change = Zn, K(gt);
  var zt = ge(gt, 2), ti = X(zt);
  {
    var ri = (n) => {
      var f = Fl(), g = qt(f), $ = X(g);
      qe($, () => d(te).verified), K(g);
      var z = ge(g, 2);
      jr(z), Fe(() => {
        oe(z, "name", w()), yl(z, d(Re));
      }), Q(n, f);
    }, ni = (n) => {
      var f = dl(), g = qt(f);
      {
        var $ = (A) => {
          var p = Ml(), y = X(p);
          qe(y, () => d(te).verifying), K(p), Q(A, p);
        }, z = (A) => {
          var p = ql(), y = X(p);
          qe(y, () => d(te).label), K(p), Fe(() => oe(p, "for", `${w() ?? ""}_checkbox`)), Q(A, p);
        };
        be(
          g,
          (A) => {
            d(x) === k.VERIFYING ? A($) : A(z, !1);
          },
          !0
        );
      }
      Q(n, f);
    };
    be(ti, (n) => {
      d(x) === k.VERIFIED ? n(ri) : n(ni, !1);
    });
  }
  K(zt);
  var ii = ge(zt, 2);
  {
    var li = (n) => {
      var f = Vl(), g = X(f);
      oe(g, "href", ir), K(f), Fe(() => oe(g, "aria-label", d(te).ariaLinkLabel)), Q(n, f);
    };
    be(ii, (n) => {
      (m() !== !0 || d(Dt)) && n(li);
    });
  }
  K(Pt);
  var Ir = ge(Pt, 2);
  {
    var oi = (n) => {
      var f = Bl(), g = ge(X(f), 2);
      {
        var $ = (A) => {
          var p = Ul(), y = X(p);
          qe(y, () => d(te).expired), K(p), Fe(() => oe(p, "title", d(pe))), Q(A, p);
        }, z = (A) => {
          var p = jl(), y = X(p);
          qe(y, () => d(te).error), K(p), Fe(() => oe(p, "title", d(pe))), Q(A, p);
        };
        be(g, (A) => {
          d(x) === k.EXPIRED ? A($) : A(z, !1);
        });
      }
      K(f), Q(n, f);
    };
    be(Ir, (n) => {
      (d(pe) || d(x) === k.EXPIRED) && n(oi);
    });
  }
  var Sr = ge(Ir, 2);
  {
    var ai = (n) => {
      var f = Hl(), g = X(f), $ = X(g);
      qe($, () => d(te).footer), K(g), K(f), Q(n, f);
    };
    be(Sr, (n) => {
      d(te).footer && (_() !== !0 || d(Dt)) && n(ai);
    });
  }
  var si = ge(Sr, 2);
  {
    var ui = (n) => {
      var f = Yl();
      Yr(f, (g) => C(Xe, g), () => d(Xe)), Q(n, f);
    };
    be(si, (n) => {
      s() && n(ui);
    });
  }
  return K(tt), Yr(tt, (n) => C(H, n), () => d(H)), Fe(() => {
    oe(tt, "data-state", d(x)), oe(tt, "data-floating", s()), bl(gt, "altcha-hidden", d(x) === k.VERIFYING), oe(ze, "id", `${w() ?? ""}_checkbox`), ze.required = r() !== "onsubmit" && (!s() || r() !== "off");
  }), fl("invalid", ze, hr), El(ze, () => d(Le), (n) => C(Le, n)), Q(e, Cr), Tn({
    clarify: Qe,
    configure: wr,
    getConfiguration: br,
    getFloatingAnchor: Er,
    getPlugin: Qn,
    getState: xr,
    reset: et,
    setFloatingAnchor: $r,
    setState: kr,
    verify: we,
    get auto() {
      return r();
    },
    set auto(n = void 0) {
      r(n), R();
    },
    get blockspam() {
      return l();
    },
    set blockspam(n = void 0) {
      l(n), R();
    },
    get challengeurl() {
      return i();
    },
    set challengeurl(n = void 0) {
      i(n), R();
    },
    get challengejson() {
      return o();
    },
    set challengejson(n = void 0) {
      o(n), R();
    },
    get debug() {
      return a();
    },
    set debug(n = !1) {
      a(n), R();
    },
    get delay() {
      return c();
    },
    set delay(n = 0) {
      c(n), R();
    },
    get expire() {
      return u();
    },
    set expire(n = void 0) {
      u(n), R();
    },
    get floating() {
      return s();
    },
    set floating(n = void 0) {
      s(n), R();
    },
    get floatinganchor() {
      return h();
    },
    set floatinganchor(n = void 0) {
      h(n), R();
    },
    get floatingoffset() {
      return v();
    },
    set floatingoffset(n = void 0) {
      v(n), R();
    },
    get hidefooter() {
      return _();
    },
    set hidefooter(n = !1) {
      _(n), R();
    },
    get hidelogo() {
      return m();
    },
    set hidelogo(n = !1) {
      m(n), R();
    },
    get name() {
      return w();
    },
    set name(n = "altcha") {
      w(n), R();
    },
    get maxnumber() {
      return N();
    },
    set maxnumber(n = 1e6) {
      N(n), R();
    },
    get mockerror() {
      return O();
    },
    set mockerror(n = !1) {
      O(n), R();
    },
    get obfuscated() {
      return U();
    },
    set obfuscated(n = void 0) {
      U(n), R();
    },
    get plugins() {
      return j();
    },
    set plugins(n = void 0) {
      j(n), R();
    },
    get refetchonexpire() {
      return M();
    },
    set refetchonexpire(n = !0) {
      M(n), R();
    },
    get spamfilter() {
      return Y();
    },
    set spamfilter(n = !1) {
      Y(n), R();
    },
    get strings() {
      return ie();
    },
    set strings(n = void 0) {
      ie(n), R();
    },
    get test() {
      return B();
    },
    set test(n = !1) {
      B(n), R();
    },
    get verifyurl() {
      return D();
    },
    set verifyurl(n = void 0) {
      D(n), R();
    },
    get workers() {
      return J();
    },
    set workers(n = Math.min(16, navigator.hardwareConcurrency || 8)) {
      J(n), R();
    },
    get workerurl() {
      return _e();
    },
    set workerurl(n = void 0) {
      _e(n), R();
    }
  });
}
cl(["change"]);
customElements.define("altcha-widget", Il(
  Gl,
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
  Gl as Altcha
};
