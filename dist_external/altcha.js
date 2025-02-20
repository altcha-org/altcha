var di = Object.defineProperty;
var Pr = (e) => {
  throw TypeError(e);
};
var vi = (e, t, r) => t in e ? di(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var re = (e, t, r) => vi(e, typeof t != "symbol" ? t + "" : t, r), zr = (e, t, r) => t.has(e) || Pr("Cannot " + r);
var Y = (e, t, r) => (zr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Mt = (e, t, r) => t.has(e) ? Pr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), qt = (e, t, r, l) => (zr(e, t, "write to private field"), l ? l.call(e, r) : t.set(e, r), r);
const hi = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(hi);
const _i = 1, gi = 4, mi = 8, pi = 16, yi = 1, wi = 2, Zr = "[", Gr = "[!", Jr = "]", He = {}, W = Symbol(), Kr = !1;
var Xr = Array.isArray, bi = Array.from, xt = Object.keys, $t = Object.defineProperty, Se = Object.getOwnPropertyDescriptor, Ei = Object.getOwnPropertyDescriptors, xi = Object.prototype, $i = Array.prototype, Ut = Object.getPrototypeOf;
function Qr(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const le = 2, en = 4, vt = 8, Jt = 16, oe = 32, ht = 64, jt = 128, Ne = 256, kt = 512, Z = 1024, xe = 2048, _t = 4096, Ze = 8192, Ke = 16384, ki = 32768, Kt = 65536, Ci = 1 << 19, tn = 1 << 20, ut = Symbol("$state"), rn = Symbol("legacy props"), Ai = Symbol("");
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
function Li() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Di(e) {
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
function fe(e) {
  return {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: nn,
    version: 0
  };
}
function Me(e) {
  return /* @__PURE__ */ Mi(fe(e));
}
// @__NO_SIDE_EFFECTS__
function an(e, t = !1) {
  const r = fe(e);
  return t || (r.equals = ln), r;
}
// @__NO_SIDE_EFFECTS__
function Mi(e) {
  return C !== null && C.f & le && (ce === null ? Qi([e]) : ce.push(e)), e;
}
function L(e, t) {
  return C !== null && tl() && C.f & (le | Jt) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (ce === null || !ce.includes(e)) && Fi(), qi(e, t);
}
function qi(e, t) {
  return e.equals(t) || (e.v = t, e.version = Cn(), sn(e, xe), y !== null && y.f & Z && !(y.f & oe) && (V !== null && V.includes(e) ? (ve(y, xe), Lt(y)) : be === null ? el([e]) : be.push(e))), t;
}
function sn(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var l = r.length, i = 0; i < l; i++) {
      var o = r[i], a = o.f;
      a & xe || (ve(o, t), a & (Z | Ne) && (a & le ? sn(
        /** @type {Derived} */
        o,
        _t
      ) : Lt(
        /** @type {Effect} */
        o
      )));
    }
}
function It(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let P = !1;
function je(e) {
  P = e;
}
let D;
function $e(e) {
  if (e === null)
    throw It(), He;
  return D = e;
}
function Ge() {
  return $e(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ce(D)
  );
}
function G(e) {
  if (P) {
    if (/* @__PURE__ */ Ce(D) !== null)
      throw It(), He;
    D = e;
  }
}
function Vi() {
  for (var e = 0, t = D; ; ) {
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
      /* @__PURE__ */ Ce(t)
    );
    t.remove(), t = l;
  }
}
function ie(e, t = null, r) {
  if (typeof e != "object" || e === null || ut in e)
    return e;
  const l = Ut(e);
  if (l !== xi && l !== $i)
    return e;
  var i = /* @__PURE__ */ new Map(), o = Xr(e), a = fe(0);
  o && i.set("length", fe(
    /** @type {any[]} */
    e.length
  ));
  var d;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(u, c, f) {
        (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && Pi();
        var h = i.get(c);
        return h === void 0 ? (h = fe(f.value), i.set(c, h)) : L(h, ie(f.value, d)), !0;
      },
      deleteProperty(u, c) {
        var f = i.get(c);
        if (f === void 0)
          c in u && i.set(c, fe(W));
        else {
          if (o && typeof c == "string") {
            var h = (
              /** @type {Source<number>} */
              i.get("length")
            ), _ = Number(c);
            Number.isInteger(_) && _ < h.v && L(h, _);
          }
          L(f, W), Or(a);
        }
        return !0;
      },
      get(u, c, f) {
        var w;
        if (c === ut)
          return e;
        var h = i.get(c), _ = c in u;
        if (h === void 0 && (!_ || (w = Se(u, c)) != null && w.writable) && (h = fe(ie(_ ? u[c] : W, d)), i.set(c, h)), h !== void 0) {
          var m = v(h);
          return m === W ? void 0 : m;
        }
        return Reflect.get(u, c, f);
      },
      getOwnPropertyDescriptor(u, c) {
        var f = Reflect.getOwnPropertyDescriptor(u, c);
        if (f && "value" in f) {
          var h = i.get(c);
          h && (f.value = v(h));
        } else if (f === void 0) {
          var _ = i.get(c), m = _ == null ? void 0 : _.v;
          if (_ !== void 0 && m !== W)
            return {
              enumerable: !0,
              configurable: !0,
              value: m,
              writable: !0
            };
        }
        return f;
      },
      has(u, c) {
        var m;
        if (c === ut)
          return !0;
        var f = i.get(c), h = f !== void 0 && f.v !== W || Reflect.has(u, c);
        if (f !== void 0 || y !== null && (!h || (m = Se(u, c)) != null && m.writable)) {
          f === void 0 && (f = fe(h ? ie(u[c], d) : W), i.set(c, f));
          var _ = v(f);
          if (_ === W)
            return !1;
        }
        return h;
      },
      set(u, c, f, h) {
        var j;
        var _ = i.get(c), m = c in u;
        if (o && c === "length")
          for (var w = f; w < /** @type {Source<number>} */
          _.v; w += 1) {
            var T = i.get(w + "");
            T !== void 0 ? L(T, W) : w in u && (T = fe(W), i.set(w + "", T));
          }
        _ === void 0 ? (!m || (j = Se(u, c)) != null && j.writable) && (_ = fe(void 0), L(_, ie(f, d)), i.set(c, _)) : (m = _.v !== W, L(_, ie(f, d)));
        var O = Reflect.getOwnPropertyDescriptor(u, c);
        if (O != null && O.set && O.set.call(h, f), !m) {
          if (o && typeof c == "string") {
            var Q = (
              /** @type {Source<number>} */
              i.get("length")
            ), F = Number(c);
            Number.isInteger(F) && F >= Q.v && L(Q, F + 1);
          }
          Or(a);
        }
        return !0;
      },
      ownKeys(u) {
        v(a);
        var c = Reflect.ownKeys(u).filter((_) => {
          var m = i.get(_);
          return m === void 0 || m.v !== W;
        });
        for (var [f, h] of i)
          h.v !== W && !(f in u) && c.push(f);
        return c;
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
    un = Se(t, "firstChild").get, fn = Se(t, "nextSibling").get, e.__click = void 0, e.__className = "", e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function St(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Te(e) {
  return un.call(e);
}
// @__NO_SIDE_EFFECTS__
function Ce(e) {
  return fn.call(e);
}
function J(e, t) {
  if (!P)
    return /* @__PURE__ */ Te(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Te(D)
  );
  return r === null && (r = D.appendChild(St())), $e(r), r;
}
function Vt(e, t) {
  if (!P) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Te(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Ce(r) : r;
  }
  return D;
}
function _e(e, t = 1, r = !1) {
  let l = P ? D : e;
  for (var i; t--; )
    i = l, l = /** @type {TemplateNode} */
    /* @__PURE__ */ Ce(l);
  if (!P)
    return l;
  var o = l == null ? void 0 : l.nodeType;
  if (r && o !== 3) {
    var a = St();
    return l === null ? i == null || i.after(a) : l.before(a), $e(a), a;
  }
  return $e(l), /** @type {TemplateNode} */
  l;
}
function Ui(e) {
  e.textContent = "";
}
// @__NO_SIDE_EFFECTS__
function at(e) {
  var t = le | xe;
  y === null ? t |= Ne : y.f |= tn;
  var r = C !== null && C.f & le ? (
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
      l.f & le ? Xt(
        /** @type {Derived} */
        l
      ) : Le(
        /** @type {Effect} */
        l
      );
    }
  }
}
function ji(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & le))
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
  de(ji(e));
  try {
    cn(e), t = An(e);
  } finally {
    de(r);
  }
  return t;
}
function vn(e) {
  var t = dn(e), r = (Be || e.f & Ne) && e.deps !== null ? _t : Z;
  ve(e, r), e.equals(t) || (e.v = t, e.version = Cn());
}
function Xt(e) {
  cn(e), dt(e, 0), ve(e, Ke), e.v = e.children = e.deps = e.ctx = e.reactions = null;
}
function Bi(e) {
  y === null && C === null && Ti(), C !== null && C.f & Ne && Si(), nr && Ii();
}
function Hi(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Xe(e, t, r, l = !0) {
  var i = (e & ht) !== 0, o = y, a = {
    ctx: U,
    deps: null,
    deriveds: null,
    nodes_start: null,
    nodes_end: null,
    f: e | xe,
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
    var d = Ye;
    try {
      Vr(!0), Nt(a), a.f |= ki;
    } catch (f) {
      throw Le(a), f;
    } finally {
      Vr(d);
    }
  } else t !== null && Lt(a);
  var u = r && a.deps === null && a.first === null && a.nodes_start === null && a.teardown === null && (a.f & tn) === 0;
  if (!u && !i && l && (o !== null && Hi(a, o), C !== null && C.f & le)) {
    var c = (
      /** @type {Derived} */
      C
    );
    (c.children ?? (c.children = [])).push(a);
  }
  return a;
}
function Yi(e) {
  const t = Xe(vt, null, !1);
  return ve(t, Z), t.teardown = e, t;
}
function Ht(e) {
  Bi();
  var t = y !== null && (y.f & oe) !== 0 && U !== null && !U.m;
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
  const t = Xe(ht, e, !0);
  return () => {
    Le(t);
  };
}
function Qt(e) {
  return Xe(en, e, !1);
}
function er(e) {
  return Xe(vt, e, !0);
}
function qe(e) {
  return tr(e);
}
function tr(e, t = 0) {
  return Xe(vt | Jt | t, e, !0);
}
function Ct(e, t = !0) {
  return Xe(vt | oe, e, !0, t);
}
function _n(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = nr, l = C;
    Ur(!0), ke(null);
    try {
      t.call(null);
    } finally {
      Ur(r), ke(l);
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
    Le(r, t), r = l;
  }
}
function Wi(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    t.f & oe || Le(t), t = r;
  }
}
function Le(e, t = !0) {
  var r = !1;
  if ((t || e.f & Ci) && e.nodes_start !== null) {
    for (var l = e.nodes_start, i = e.nodes_end; l !== null; ) {
      var o = l === i ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ce(l)
      );
      l.remove(), l = o;
    }
    r = !0;
  }
  mn(e, t && !r), gn(e), dt(e, 0), ve(e, Ke);
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
    Le(e), t && t();
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
  if (!(e.f & Ze)) {
    if (e.f ^= Ze, e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || r) && t.push(a);
    for (var l = e.first; l !== null; ) {
      var i = l.next, o = (l.f & Kt) !== 0 || (l.f & oe) !== 0;
      yn(l, t, o ? r : !1), l = i;
    }
  }
}
function qr(e) {
  wn(e, !0);
}
function wn(e, t) {
  if (e.f & Ze) {
    gt(e) && Nt(e), e.f ^= Ze;
    for (var r = e.first; r !== null; ) {
      var l = r.next, i = (r.f & Kt) !== 0 || (r.f & oe) !== 0;
      wn(r, i ? t : !1), r = l;
    }
    if (e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || t) && o.in();
  }
}
const Gi = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let At = !1, Rt = !1, Yt = [], Wt = [];
function bn() {
  At = !1;
  const e = Yt.slice();
  Yt = [], Qr(e);
}
function En() {
  Rt = !1;
  const e = Wt.slice();
  Wt = [], Qr(e);
}
function rr(e) {
  At || (At = !0, queueMicrotask(bn)), Yt.push(e);
}
function Ji(e) {
  Rt || (Rt = !0, Gi(En)), Wt.push(e);
}
function Ki() {
  At && bn(), Rt && En();
}
function xn(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
const $n = 0, Xi = 1;
let wt = !1, bt = $n, ft = !1, ct = null, Ye = !1, nr = !1;
function Vr(e) {
  Ye = e;
}
function Ur(e) {
  nr = e;
}
let Ie = [], We = 0;
let C = null;
function ke(e) {
  C = e;
}
let y = null;
function de(e) {
  y = e;
}
let ce = null;
function Qi(e) {
  ce = e;
}
let V = null, X = 0, be = null;
function el(e) {
  be = e;
}
let kn = 0, Be = !1, U = null;
function Cn() {
  return ++kn;
}
function tl() {
  return !on;
}
function gt(e) {
  var a, d;
  var t = e.f;
  if (t & xe)
    return !0;
  if (t & _t) {
    var r = e.deps, l = (t & Ne) !== 0;
    if (r !== null) {
      var i;
      if (t & kt) {
        for (i = 0; i < r.length; i++)
          ((a = r[i]).reactions ?? (a.reactions = [])).push(e);
        e.f ^= kt;
      }
      for (i = 0; i < r.length; i++) {
        var o = r[i];
        if (gt(
          /** @type {Derived} */
          o
        ) && vn(
          /** @type {Derived} */
          o
        ), l && y !== null && !Be && !((d = o == null ? void 0 : o.reactions) != null && d.includes(e)) && (o.reactions ?? (o.reactions = [])).push(e), o.version > e.version)
          return !0;
      }
    }
    l || ve(e, Z);
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
  throw wt = !1, e;
}
function nl(e) {
  return (e.f & Ke) === 0 && (e.parent === null || (e.parent.f & jt) === 0);
}
function Tt(e, t, r, l) {
  if (wt) {
    if (r === null && (wt = !1), nl(t))
      throw e;
    return;
  }
  r !== null && (wt = !0);
  {
    rl(e, t);
    return;
  }
}
function An(e) {
  var _;
  var t = V, r = X, l = be, i = C, o = Be, a = ce, d = U, u = e.f;
  V = /** @type {null | Value[]} */
  null, X = 0, be = null, C = u & (oe | ht) ? null : e, Be = !Ye && (u & Ne) !== 0, ce = null, U = e.ctx;
  try {
    var c = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (V !== null) {
      var h;
      if (dt(e, X), f !== null && X > 0)
        for (f.length = X + V.length, h = 0; h < V.length; h++)
          f[X + h] = V[h];
      else
        e.deps = f = V;
      if (!Be)
        for (h = X; h < f.length; h++)
          ((_ = f[h]).reactions ?? (_.reactions = [])).push(e);
    } else f !== null && X < f.length && (dt(e, X), f.length = X);
    return c;
  } finally {
    V = t, X = r, be = l, C = i, Be = o, ce = a, U = d;
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
  r === null && t.f & le && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (V === null || !V.includes(t)) && (ve(t, _t), t.f & (Ne | kt) || (t.f ^= kt), dt(
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
function Nt(e) {
  var t = e.f;
  if (!(t & Ke)) {
    ve(e, Z);
    var r = y, l = U;
    y = e;
    try {
      t & Jt ? Wi(e) : mn(e), gn(e), _n(e);
      var i = An(e);
      e.teardown = typeof i == "function" ? i : null, e.version = kn;
    } catch (o) {
      Tt(o, e, r, l || e.ctx);
    } finally {
      y = r;
    }
  }
}
function Rn() {
  if (We > 1e3) {
    We = 0;
    try {
      Ni();
    } catch (e) {
      if (ct !== null)
        Tt(e, ct, null);
      else
        throw e;
    }
  }
  We++;
}
function In(e) {
  var t = e.length;
  if (t !== 0) {
    Rn();
    var r = Ye;
    Ye = !0;
    try {
      for (var l = 0; l < t; l++) {
        var i = e[l];
        i.f & Z || (i.f ^= Z);
        var o = [];
        Sn(i, o), ll(o);
      }
    } finally {
      Ye = r;
    }
  }
}
function ll(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var l = e[r];
      if (!(l.f & (Ke | Ze)))
        try {
          gt(l) && (Nt(l), l.deps === null && l.first === null && l.nodes_start === null && (l.teardown === null ? pn(l) : l.fn = null));
        } catch (i) {
          Tt(i, l, null, l.ctx);
        }
    }
}
function ol() {
  if (ft = !1, We > 1001)
    return;
  const e = Ie;
  Ie = [], In(e), ft || (We = 0, ct = null);
}
function Lt(e) {
  bt === $n && (ft || (ft = !0, queueMicrotask(ol))), ct = e;
  for (var t = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if (r & (ht | oe)) {
      if (!(r & Z)) return;
      t.f ^= Z;
    }
  }
  Ie.push(t);
}
function Sn(e, t) {
  var r = e.first, l = [];
  e: for (; r !== null; ) {
    var i = r.f, o = (i & oe) !== 0, a = o && (i & Z) !== 0, d = r.next;
    if (!a && !(i & Ze))
      if (i & vt) {
        if (o)
          r.f ^= Z;
        else
          try {
            gt(r) && Nt(r);
          } catch (h) {
            Tt(h, r, null, r.ctx);
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
        var c = h.next;
        if (c !== null) {
          r = c;
          continue e;
        }
        h = h.parent;
      }
    }
    r = d;
  }
  for (var f = 0; f < l.length; f++)
    u = l[f], t.push(u), Sn(u, t);
}
function $(e) {
  var t = bt, r = Ie;
  try {
    Rn();
    const i = [];
    bt = Xi, Ie = i, ft = !1, In(r);
    var l = e == null ? void 0 : e();
    return Ki(), (Ie.length > 0 || i.length > 0) && $(), We = 0, ct = null, l;
  } finally {
    bt = t, Ie = r;
  }
}
async function al() {
  await Promise.resolve(), $();
}
function v(e) {
  var f;
  var t = e.f, r = (t & le) !== 0;
  if (r && t & Ke) {
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
    ce !== null && ce.includes(e) && Oi();
    var i = C.deps;
    V === null && i !== null && i[X] === e ? X++ : V === null ? V = [e] : V.push(e), be !== null && y !== null && y.f & Z && !(y.f & oe) && be.includes(e) && (ve(y, xe), Lt(y));
  } else if (r && /** @type {Derived} */
  e.deps === null)
    for (var o = (
      /** @type {Derived} */
      e
    ), a = o.parent, d = o; a !== null; )
      if (a.f & le) {
        var u = (
          /** @type {Derived} */
          a
        );
        d = u, a = u.parent;
      } else {
        var c = (
          /** @type {Effect} */
          a
        );
        (f = c.deriveds) != null && f.includes(d) || (c.deriveds ?? (c.deriveds = [])).push(d);
        break;
      }
  return r && (o = /** @type {Derived} */
  e, gt(o) && vn(o)), e.v;
}
function Je(e) {
  const t = C;
  try {
    return C = null, e();
  } finally {
    C = t;
  }
}
const sl = ~(xe | _t | Z);
function ve(e, t) {
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
          de(o.effect), ke(o.reaction), Qt(o.fn);
        }
      } finally {
        de(r), ke(l);
      }
    }
    U = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
let jr = !1;
function Ln() {
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
function Dn(e) {
  var t = C, r = y;
  ke(null), de(null);
  try {
    return e();
  } finally {
    ke(t), de(r);
  }
}
function ul(e, t, r, l = r) {
  e.addEventListener(t, () => Dn(r));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), l(!0);
  } : e.__on_r = () => l(!0), Ln();
}
const Pn = /* @__PURE__ */ new Set(), Zt = /* @__PURE__ */ new Set();
function fl(e, t, r, l) {
  function i(o) {
    if (l.capture || st.call(t, o), !o.cancelBubble)
      return Dn(() => r.call(this, o));
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
    var c = i.indexOf(t);
    if (c === -1)
      return;
    u <= c && (a = u);
  }
  if (o = /** @type {Element} */
  i[a] || e.target, o !== t) {
    $t(e, "currentTarget", {
      configurable: !0,
      get() {
        return o || r;
      }
    });
    var f = C, h = y;
    ke(null), de(null);
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
      e.__root = t, delete e.currentTarget, ke(f), de(h);
    }
  }
}
function zn(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Ee(e, t) {
  var r = (
    /** @type {Effect} */
    y
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ae(e, t) {
  var r = (t & yi) !== 0, l = (t & wi) !== 0, i, o = !e.startsWith("<!>");
  return () => {
    if (P)
      return Ee(D, null), D;
    i === void 0 && (i = zn(o ? e : "<!>" + e), r || (i = /** @type {Node} */
    /* @__PURE__ */ Te(i)));
    var a = (
      /** @type {TemplateNode} */
      l ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Te(a)
      ), u = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      Ee(d, u);
    } else
      Ee(a, a);
    return a;
  };
}
function vl() {
  if (P)
    return Ee(D, null), D;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = St();
  return e.append(t, r), Ee(t, r), e;
}
function K(e, t) {
  if (P) {
    y.nodes_end = D, Ge();
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
  const r = t.target, l = P, i = D;
  try {
    for (var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Te(r)
    ); o && (o.nodeType !== 8 || /** @type {Comment} */
    o.data !== Zr); )
      o = /** @type {TemplateNode} */
      /* @__PURE__ */ Ce(o);
    if (!o)
      throw He;
    je(!0), $e(
      /** @type {Comment} */
      o
    ), Ge();
    const a = Fn(e, { ...t, anchor: o });
    if (D === null || D.nodeType !== 8 || /** @type {Comment} */
    D.data !== Jr)
      throw It(), He;
    return je(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === He)
      return t.recover === !1 && Li(), Bt(), Ui(r), je(!1), On(e, t);
    throw a;
  } finally {
    je(l), $e(i);
  }
}
const Ve = /* @__PURE__ */ new Map();
function Fn(e, { target: t, anchor: r, props: l = {}, events: i, context: o, intro: a = !0 }) {
  Bt();
  var d = /* @__PURE__ */ new Set(), u = (h) => {
    for (var _ = 0; _ < h.length; _++) {
      var m = h[_];
      if (!d.has(m)) {
        d.add(m);
        var w = _l(m);
        t.addEventListener(m, st, { passive: w });
        var T = Ve.get(m);
        T === void 0 ? (document.addEventListener(m, st, { passive: w }), Ve.set(m, 1)) : Ve.set(m, T + 1);
      }
    }
  };
  u(bi(Pn)), Zt.add(u);
  var c = void 0, f = hn(() => {
    var h = r ?? t.appendChild(St());
    return Ct(() => {
      if (o) {
        Tn({});
        var _ = (
          /** @type {ComponentContext} */
          U
        );
        _.c = o;
      }
      i && (l.$$events = i), P && Ee(
        /** @type {TemplateNode} */
        h,
        null
      ), c = e(h, l) || {}, P && (y.nodes_end = D), o && Nn();
    }), () => {
      var w;
      for (var _ of d) {
        t.removeEventListener(_, st);
        var m = (
          /** @type {number} */
          Ve.get(_)
        );
        --m === 0 ? (document.removeEventListener(_, st), Ve.delete(_)) : Ve.set(_, m);
      }
      Zt.delete(u), Gt.delete(c), h !== r && ((w = h.parentNode) == null || w.removeChild(h));
    };
  });
  return Gt.set(c, f), c;
}
let Gt = /* @__PURE__ */ new WeakMap();
function ml(e) {
  const t = Gt.get(e);
  t && t();
}
function we(e, t, r = !1) {
  P && Ge();
  var l = e, i = null, o = null, a = W, d = r ? Kt : 0, u = !1;
  const c = (h, _ = !0) => {
    u = !0, f(_, h);
  }, f = (h, _) => {
    if (a === (a = h)) return;
    let m = !1;
    if (P) {
      const w = (
        /** @type {Comment} */
        l.data === Gr
      );
      !!a === w && (l = Vi(), $e(l), je(!1), m = !0);
    }
    a ? (i ? qr(i) : _ && (i = Ct(() => _(l))), o && Mr(o, () => {
      o = null;
    })) : (o ? qr(o) : _ && (o = Ct(() => _(l))), i && Mr(i, () => {
      i = null;
    })), m && je(!0);
  };
  tr(() => {
    u = !1, t(c), u || f(null, null);
  }, d), P && (l = D);
}
function Ue(e, t, r, l, i) {
  var o = e, a = "", d;
  tr(() => {
    if (a === (a = t() ?? "")) {
      P && Ge();
      return;
    }
    d !== void 0 && (Le(d), d = void 0), a !== "" && (d = Ct(() => {
      if (P) {
        D.data;
        for (var u = Ge(), c = u; u !== null && (u.nodeType !== 8 || /** @type {Comment} */
        u.data !== ""); )
          c = u, u = /** @type {TemplateNode} */
          /* @__PURE__ */ Ce(u);
        if (u === null)
          throw It(), He;
        Ee(D, c), o = $e(u);
        return;
      }
      var f = a + "", h = zn(f);
      Ee(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Te(h),
        /** @type {TemplateNode} */
        h.lastChild
      ), o.before(h);
    }));
  });
}
function pl(e, t, r, l, i) {
  var d;
  P && Ge();
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
  if (P) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var l = e.value;
          ne(e, "value", null), e.value = l;
        }
        if (e.hasAttribute("checked")) {
          var i = e.checked;
          ne(e, "checked", null), e.checked = i;
        }
      }
    };
    e.__on_r = r, Ji(r), Ln();
  }
}
function wl(e, t) {
  var r = e.__attributes ?? (e.__attributes = {});
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when its `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t);
}
function ne(e, t, r, l) {
  var i = e.__attributes ?? (e.__attributes = {});
  P && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || i[t] !== (i[t] = r) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[Ai] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && bl(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
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
  (P && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  Je(t) == null) && r(e.checked), er(() => {
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
      i = o, o = [], Je(() => {
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
    const t = Je(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function $l(e) {
  U === null && xn(), Mn(() => () => Je(e));
}
let yt = !1;
function kl(e) {
  var t = yt;
  try {
    return yt = !1, [e(), yt];
  } finally {
    yt = t;
  }
}
function Cl(e) {
  for (var t = y, r = y; t !== null && !(t.f & (oe | ht)); )
    t = t.parent;
  try {
    return de(t), e();
  } finally {
    de(r);
  }
}
function S(e, t, r, l) {
  var me;
  var i = (r & _i) !== 0, o = !on, a = (r & mi) !== 0, d = (r & pi) !== 0, u = !1, c;
  a ? [c, u] = kl(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var f = ut in e || rn in e, h = ((me = Se(e, t)) == null ? void 0 : me.set) ?? (f && a && t in e ? (A) => e[t] = A : void 0), _ = (
    /** @type {V} */
    l
  ), m = !0, w = !1, T = () => (w = !0, m && (m = !1, d ? _ = Je(
    /** @type {() => V} */
    l
  ) : _ = /** @type {V} */
  l), _);
  c === void 0 && l !== void 0 && (h && o && Di(), c = T(), h && h(c));
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
  var F = !1, j = !1, he = /* @__PURE__ */ an(c), q = Cl(
    () => /* @__PURE__ */ at(() => {
      var A = O(), B = v(he);
      return F ? (F = !1, j = !0, B) : (j = !1, he.v = A);
    })
  );
  return i || (q.equals = ln), function(A, B) {
    if (arguments.length > 0) {
      const se = B ? v(q) : a ? ie(A) : A;
      return q.equals(se) || (F = !0, L(he, se), w && _ !== void 0 && (_ = se), Je(() => v(q))), A;
    }
    return v(q);
  };
}
function Al(e) {
  return new Rl(e);
}
var ge, te;
class Rl {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    Mt(this, ge);
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
    })), (!((o = t == null ? void 0 : t.props) != null && o.$$host) || t.sync === !1) && $(), qt(this, ge, i.$$events);
    for (const a of Object.keys(Y(this, te)))
      a === "$set" || a === "$destroy" || a === "$on" || $t(this, a, {
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
    Y(this, ge)[t] = Y(this, ge)[t] || [];
    const l = (...i) => r.call(this, ...i);
    return Y(this, ge)[t].push(l), () => {
      Y(this, ge)[t] = Y(this, ge)[t].filter(
        /** @param {any} fn */
        (i) => i !== l
      );
    };
  }
  $destroy() {
    Y(this, te).$destroy();
  }
}
ge = new WeakMap(), te = new WeakMap();
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
        o in this.$$d || (this.$$d[o] = Et(o, i.value, this.$$p_d, "toProp"));
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
          for (const o of xt(this.$$c)) {
            if (!((i = this.$$p_d[o]) != null && i.reflect)) continue;
            this.$$d[o] = this.$$c[o];
            const a = Et(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Et(t, l, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
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
function Et(e, t, r, l) {
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
      return xt(t).map(
        (d) => (t[d].attribute || d).toLowerCase()
      );
    }
  };
  return xt(t).forEach((d) => {
    $t(a.prototype, d, {
      get() {
        return this.$$c && d in this.$$c ? this.$$c[d] : this.$$d[d];
      },
      set(u) {
        var h;
        u = Et(d, u, t), this.$$d[d] = u;
        var c = this.$$c;
        if (c) {
          var f = (h = Se(c, d)) == null ? void 0 : h.get;
          f ? c[d] = u : c.$set({ [d]: u });
        }
      }
    });
  }), l.forEach((d) => {
    $t(a.prototype, d, {
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
function Ll(e, t, r = "SHA-256", l = 1e6, i = 0) {
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
function Dl() {
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
    for (let f = l; f <= r; f += 1) {
      if (o.signal.aborted || !u || !c)
        return null;
      try {
        const h = await crypto.subtle.decrypt(
          {
            name: i,
            iv: zl(f)
          },
          u,
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
  let u = null, c = null;
  try {
    c = Pl(e);
    const f = await crypto.subtle.digest(
      "SHA-256",
      Vn.encode(t)
    );
    u = await crypto.subtle.importKey(
      "raw",
      f,
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
var x = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(x || {}), Fl = /* @__PURE__ */ ae('<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="svelte-ddsc3z"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25" class="svelte-ddsc3z"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor" class="altcha-spinner svelte-ddsc3z"></path></svg>'), Ml = /* @__PURE__ */ ae('<span role="status" aria-live="polite" class="svelte-ddsc3z"><!></span> <input type="hidden" class="svelte-ddsc3z">', 1), ql = /* @__PURE__ */ ae('<span role="status" aria-live="polite" class="svelte-ddsc3z"><!></span>'), Vl = /* @__PURE__ */ ae('<label class="svelte-ddsc3z"><!></label>'), Ul = /* @__PURE__ */ ae('<div class="svelte-ddsc3z"><a target="_blank" class="altcha-logo svelte-ddsc3z"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-ddsc3z"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor" class="svelte-ddsc3z"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor" class="svelte-ddsc3z"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor" class="svelte-ddsc3z"></path></svg></a></div>'), jl = /* @__PURE__ */ ae('<div class="svelte-ddsc3z"><!></div>'), Bl = /* @__PURE__ */ ae('<div class="svelte-ddsc3z"><!></div>'), Hl = /* @__PURE__ */ ae('<div class="altcha-error svelte-ddsc3z"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="svelte-ddsc3z"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" class="svelte-ddsc3z"></path></svg> <!></div>'), Yl = /* @__PURE__ */ ae('<div class="altcha-footer svelte-ddsc3z"><div class="svelte-ddsc3z"><!></div></div>'), Wl = /* @__PURE__ */ ae('<div class="altcha-anchor-arrow svelte-ddsc3z"></div>'), Zl = /* @__PURE__ */ ae('<!> <div class="altcha svelte-ddsc3z"><div class="altcha-main svelte-ddsc3z"><!> <div class="altcha-checkbox svelte-ddsc3z"><input type="checkbox" class="svelte-ddsc3z"></div> <div class="altcha-label svelte-ddsc3z"><!></div> <!></div> <!> <!> <!></div>', 1);
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
  var Nr, Lr;
  Tn(t, !0), yl(e, Gl);
  let r = S(t, "auto", 7, void 0), l = S(t, "blockspam", 7, void 0), i = S(t, "challengeurl", 7, void 0), o = S(t, "challengejson", 7, void 0), a = S(t, "customfetch", 7, void 0), d = S(t, "debug", 7, !1), u = S(t, "delay", 7, 0), c = S(t, "expire", 7, void 0), f = S(t, "floating", 7, void 0), h = S(t, "floatinganchor", 7, void 0), _ = S(t, "floatingoffset", 7, void 0), m = S(t, "hidefooter", 7, !1), w = S(t, "hidelogo", 7, !1), T = S(t, "name", 7, "altcha"), O = S(t, "maxnumber", 7, 1e6), Q = S(t, "mockerror", 7, !1), F = S(t, "obfuscated", 7, void 0), j = S(t, "plugins", 7, void 0), he = S(t, "refetchonexpire", 7, !0), q = S(t, "spamfilter", 7, !1), me = S(t, "strings", 7, void 0), A = S(t, "test", 7, !1), B = S(t, "verifyurl", 7, void 0), se = S(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), Qe = S(t, "workerurl", 7, void 0);
  const ir = ["SHA-256", "SHA-384", "SHA-512"], lr = "Visit Altcha.org", or = "https://altcha.org/", et = (n, s) => {
    t.$$host.dispatchEvent(new CustomEvent(n, { detail: s }));
  }, ar = (Lr = (Nr = document.documentElement.lang) == null ? void 0 : Nr.split("-")) == null ? void 0 : Lr[0], Dt = /* @__PURE__ */ at(() => {
    var n;
    return i() && new URL(i(), location.origin).host.endsWith(".altcha.org") && !!((n = i()) != null && n.includes("apiKey=ckey_"));
  }), Pt = /* @__PURE__ */ at(() => o() ? pr(o()) : void 0), sr = /* @__PURE__ */ at(() => me() ? pr(me()) : {}), ee = /* @__PURE__ */ at(() => {
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
  let De = Me(!1), R = Me(ie(x.UNVERIFIED)), H = Me(void 0), tt = Me(null), Pe = null, b = null, ze = Me(null), ue = null, pe = [], Ae = Me(null);
  Ht(() => {
    Jn(v(ze));
  }), Ht(() => {
    Kn(v(R));
  }), $l(() => {
    jn(), b && (b.removeEventListener("submit", hr), b.removeEventListener("reset", _r), b.removeEventListener("focusin", vr), b = null), ue && (clearTimeout(ue), ue = null), document.removeEventListener("click", cr), document.removeEventListener("scroll", dr), window.removeEventListener("resize", mr);
  }), Mn(() => {
    var n;
    I("mounted", "1.2.0"), I("workers", se()), Zn(), I("plugins", pe.length ? pe.map((s) => s.constructor.pluginName).join(", ") : "none"), A() && I("using test mode"), c() && zt(c()), r() !== void 0 && I("auto", r()), f() !== void 0 && yr(f()), b = (n = v(H)) == null ? void 0 : n.closest("form"), b && (b.addEventListener("submit", hr, { capture: !0 }), b.addEventListener("reset", _r), r() === "onfocus" && b.addEventListener("focusin", vr)), r() === "onload" && (F() ? rt() : ye()), v(Dt) && (m() || w()) && I("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      et("load");
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
    for (const n of pe)
      n.destroy();
  }
  function fr() {
    i() && he() && v(R) === x.VERIFIED ? ye() : nt(x.EXPIRED, v(ee).expired);
  }
  async function Bn() {
    var n;
    if (Q())
      throw I("mocking error"), new Error("Mocked error.");
    if (v(Pt))
      return I("using provided json data"), v(Pt);
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
      const z = g.headers.get("X-Altcha-Config"), k = await g.json(), p = new URLSearchParams((n = k.salt.split("?")) == null ? void 0 : n[1]), M = p.get("expires") || p.get("expire");
      if (M) {
        const N = new Date(+M * 1e3), Fe = isNaN(N.getTime()) ? 0 : N.getTime() - Date.now();
        Fe > 0 && zt(Fe);
      }
      if (z)
        try {
          const N = JSON.parse(z);
          N && typeof N == "object" && (N.verifyurl && (N.verifyurl = new URL(N.verifyurl, new URL(i())).toString()), Er(N));
        } catch (N) {
          I("unable to configure from X-Altcha-Config", N);
        }
      return k;
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
        const z = E.name, k = E.value;
        return z && k && (g[z] = /\n/.test(k) ? k.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : k), g;
      },
      {}
    );
  }
  function Zn() {
    const n = j() !== void 0 ? j().split(",") : void 0;
    for (const s of globalThis.altchaPlugins)
      (!n || n.includes(s.pluginName)) && pe.push(new s({
        el: v(H),
        clarify: rt,
        dispatch: et,
        getConfiguration: xr,
        getFloatingAnchor: $r,
        getState: kr,
        log: I,
        reset: nt,
        solve: br,
        setState: Re,
        setFloatingAnchor: Cr,
        verify: ye
      }));
  }
  function I(...n) {
    (d() || n.some((s) => s instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${T()}]`, ...n);
  }
  function Gn() {
    [x.UNVERIFIED, x.ERROR, x.EXPIRED].includes(v(R)) ? q() !== !1 && (b == null ? void 0 : b.reportValidity()) === !1 ? L(De, !1) : F() ? rt() : ye() : L(De, !0);
  }
  function cr(n) {
    const s = n.target;
    f() && s && !v(H).contains(s) && (v(R) === x.VERIFIED || r() === "off" && v(R) === x.UNVERIFIED) && (v(H).style.display = "none");
  }
  function dr() {
    f() && v(R) !== x.UNVERIFIED && mt();
  }
  function Jn(n) {
    for (const s of pe)
      typeof s.onErrorChange == "function" && s.onErrorChange(v(ze));
  }
  function vr(n) {
    v(R) === x.UNVERIFIED && ye();
  }
  function hr(n) {
    b && r() === "onsubmit" ? v(R) === x.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), ye().then(() => {
      b == null || b.requestSubmit();
    })) : v(R) !== x.VERIFIED && (n.preventDefault(), n.stopPropagation(), v(R) === x.VERIFYING && gr()) : b && f() && r() === "off" && v(R) === x.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), v(H).style.display = "block", mt());
  }
  function _r() {
    nt();
  }
  function gr() {
    v(R) === x.VERIFYING && v(ee).waitAlert && alert(v(ee).waitAlert);
  }
  function Kn(n) {
    for (const s of pe)
      typeof s.onStateChange == "function" && s.onStateChange(v(R));
    f() && v(R) !== x.UNVERIFIED && requestAnimationFrame(() => {
      mt();
    }), L(De, v(R) === x.VERIFIED);
  }
  function mr() {
    f() && mt();
  }
  function pr(n) {
    return JSON.parse(n);
  }
  function mt(n = 20) {
    if (v(H))
      if (Pe || (Pe = (h() ? document.querySelector(h()) : b == null ? void 0 : b.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || b), Pe) {
        const s = parseInt(_(), 10) || 12, g = Pe.getBoundingClientRect(), E = v(H).getBoundingClientRect(), z = document.documentElement.clientHeight, k = document.documentElement.clientWidth, p = f() === "auto" ? g.bottom + E.height + s + n > z : f() === "top", M = Math.max(n, Math.min(k - n - E.width, g.left + g.width / 2 - E.width / 2));
        if (p ? v(H).style.top = `${g.top - (E.height + s)}px` : v(H).style.top = `${g.bottom + s}px`, v(H).style.left = `${M}px`, v(H).setAttribute("data-floating", p ? "top" : "bottom"), v(tt)) {
          const N = v(tt).getBoundingClientRect();
          v(tt).style.left = g.left - M + g.width / 2 - N.width / 2 + "px";
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
        blockedCountries: z,
        classifier: k,
        disableRules: p,
        email: M,
        expectedLanguages: N,
        expectedCountries: Fe,
        fields: lt,
        ipAddress: ot,
        text: ci,
        timeZone: Dr
      } = Yn();
      s.blockedCountries = z, s.classifier = k, s.disableRules = p, s.email = M === !1 ? void 0 : Hn(M), s.expectedCountries = Fe, s.expectedLanguages = N || (ar ? [ar] : void 0), s.fields = lt === !1 ? void 0 : Wn(lt), s.ipAddress = ot === !1 ? void 0 : ot || "auto", s.text = ci, s.timeZone = Dr === !1 ? void 0 : Dr || Dl();
    }
    const g = await fetch(B(), {
      body: JSON.stringify(s),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (g.status !== 200)
      throw new Error(`Server responded with ${g.status}.`);
    const E = await g.json();
    if (E != null && E.payload && L(Ae, ie(E.payload)), et("serververification", E), l() && E.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  function zt(n) {
    I("expire", n), ue && (clearTimeout(ue), ue = null), n < 1 ? fr() : ue = setTimeout(fr, n);
  }
  function yr(n) {
    I("floating", n), f() !== n && (v(H).style.left = "", v(H).style.top = ""), f(n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : f()), f() ? (r() || r("onsubmit"), document.addEventListener("scroll", dr), document.addEventListener("click", cr), window.addEventListener("resize", mr)) : r() === "onsubmit" && r(void 0);
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
      solution: await Ll(n.challenge, n.salt, n.algorithm, n.maxnumber || O()).promise
    };
  }
  async function Qn(n, s = typeof A() == "number" ? A() : O(), g = Math.ceil(se())) {
    const E = [];
    g = Math.min(16, Math.max(1, g));
    for (let p = 0; p < g; p++)
      E.push(altchaCreateWorker(Qe()));
    const z = Math.ceil(s / g), k = await Promise.all(E.map((p, M) => {
      const N = M * z;
      return new Promise((Fe) => {
        p.addEventListener("message", (lt) => {
          if (lt.data)
            for (const ot of E)
              ot !== p && ot.postMessage({ type: "abort" });
          Fe(lt.data);
        }), p.postMessage({
          payload: n,
          max: N + z,
          start: N,
          type: "work"
        });
      });
    }));
    for (const p of E)
      p.terminate();
    return k.find((p) => !!p) || null;
  }
  async function rt() {
    if (!F()) {
      Re(x.ERROR);
      return;
    }
    const n = pe.find((s) => s.constructor.pluginName === "obfuscation");
    if (!n || !("clarify" in n)) {
      Re(x.ERROR), I("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in n && typeof n.clarify == "function")
      return n.clarify();
  }
  function Er(n) {
    n.obfuscated !== void 0 && F(n.obfuscated), n.auto !== void 0 && (r(n.auto), r() === "onload" && (F() ? rt() : ye())), n.blockspam !== void 0 && l(!!n.blockspam), n.customfetch !== void 0 && a(n.customfetch), n.floatinganchor !== void 0 && h(n.floatinganchor), n.delay !== void 0 && u(n.delay), n.floatingoffset !== void 0 && _(n.floatingoffset), n.floating !== void 0 && yr(n.floating), n.expire !== void 0 && (zt(n.expire), c(n.expire)), n.challenge && (o(typeof n.challenge == "string" ? n.challenge : JSON.stringify(n.challenge)), wr(v(Pt))), n.challengeurl !== void 0 && i(n.challengeurl), n.debug !== void 0 && d(!!n.debug), n.hidefooter !== void 0 && m(!!n.hidefooter), n.hidelogo !== void 0 && w(!!n.hidelogo), n.maxnumber !== void 0 && O(+n.maxnumber), n.mockerror !== void 0 && Q(!!n.mockerror), n.name !== void 0 && T(n.name), n.refetchonexpire !== void 0 && he(!!n.refetchonexpire), n.spamfilter !== void 0 && q(typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && me(typeof n.strings == "string" ? n.strings : JSON.stringify(n.strings)), n.test !== void 0 && A(typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && B(n.verifyurl), n.workers !== void 0 && se(+n.workers), n.workerurl !== void 0 && Qe(n.workerurl);
  }
  function xr() {
    return {
      auto: r(),
      blockspam: l(),
      challengeurl: i(),
      debug: d(),
      delay: u(),
      expire: c(),
      floating: f(),
      floatinganchor: h(),
      floatingoffset: _(),
      hidefooter: m(),
      hidelogo: w(),
      name: T(),
      maxnumber: O(),
      mockerror: Q(),
      obfuscated: F(),
      refetchonexpire: he(),
      spamfilter: q(),
      strings: v(ee),
      test: A(),
      verifyurl: B(),
      workers: se(),
      workerurl: Qe()
    };
  }
  function $r() {
    return Pe;
  }
  function ei(n) {
    return pe.find((s) => s.constructor.pluginName === n);
  }
  function kr() {
    return v(R);
  }
  function nt(n = x.UNVERIFIED, s = null) {
    ue && (clearTimeout(ue), ue = null), L(De, !1), L(Ae, null), Re(n, s);
  }
  function Cr(n) {
    Pe = n;
  }
  function Re(n, s = null) {
    L(R, ie(n)), L(ze, ie(s)), et("statechange", {
      payload: v(Ae),
      state: v(R)
    });
  }
  async function ye() {
    return nt(x.VERIFYING), await new Promise((n) => setTimeout(n, u() || 0)), Bn().then((n) => (wr(n), I("challenge", n), br(n))).then(({ data: n, solution: s }) => {
      if (I("solution", s), "challenge" in n && s && !("clearText" in s))
        if ((s == null ? void 0 : s.number) !== void 0) {
          if (B())
            return Xn(ur(n, s));
          L(Ae, ie(ur(n, s))), I("payload", v(Ae));
        } else
          throw I("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      Re(x.VERIFIED), I("verified"), al().then(() => {
        et("verified", { payload: v(Ae) });
      });
    }).catch((n) => {
      I(n), Re(x.ERROR, n.message);
    });
  }
  var Ar = Zl(), Rr = Vt(Ar);
  pl(Rr, t, "default", {});
  var it = _e(Rr, 2), Ot = J(it), Ir = J(Ot);
  {
    var ti = (n) => {
      var s = Fl();
      K(n, s);
    };
    we(Ir, (n) => {
      v(R) === x.VERIFYING && n(ti);
    });
  }
  var pt = _e(Ir, 2), Oe = J(pt);
  Br(Oe), Oe.__change = Gn, G(pt);
  var Ft = _e(pt, 2), ri = J(Ft);
  {
    var ni = (n) => {
      var s = Ml(), g = Vt(s), E = J(g);
      Ue(E, () => v(ee).verified), G(g);
      var z = _e(g, 2);
      Br(z), qe(() => {
        ne(z, "name", T()), wl(z, v(Ae));
      }), K(n, s);
    }, ii = (n) => {
      var s = vl(), g = Vt(s);
      {
        var E = (k) => {
          var p = ql(), M = J(p);
          Ue(M, () => v(ee).verifying), G(p), K(k, p);
        }, z = (k) => {
          var p = Vl(), M = J(p);
          Ue(M, () => v(ee).label), G(p), qe(() => ne(p, "for", `${T() ?? ""}_checkbox`)), K(k, p);
        };
        we(
          g,
          (k) => {
            v(R) === x.VERIFYING ? k(E) : k(z, !1);
          },
          !0
        );
      }
      K(n, s);
    };
    we(ri, (n) => {
      v(R) === x.VERIFIED ? n(ni) : n(ii, !1);
    });
  }
  G(Ft);
  var li = _e(Ft, 2);
  {
    var oi = (n) => {
      var s = Ul(), g = J(s);
      ne(g, "href", or), G(s), qe(() => ne(g, "aria-label", v(ee).ariaLinkLabel)), K(n, s);
    };
    we(li, (n) => {
      (w() !== !0 || v(Dt)) && n(oi);
    });
  }
  G(Ot);
  var Sr = _e(Ot, 2);
  {
    var ai = (n) => {
      var s = Hl(), g = _e(J(s), 2);
      {
        var E = (k) => {
          var p = jl(), M = J(p);
          Ue(M, () => v(ee).expired), G(p), qe(() => ne(p, "title", v(ze))), K(k, p);
        }, z = (k) => {
          var p = Bl(), M = J(p);
          Ue(M, () => v(ee).error), G(p), qe(() => ne(p, "title", v(ze))), K(k, p);
        };
        we(g, (k) => {
          v(R) === x.EXPIRED ? k(E) : k(z, !1);
        });
      }
      G(s), K(n, s);
    };
    we(Sr, (n) => {
      (v(ze) || v(R) === x.EXPIRED) && n(ai);
    });
  }
  var Tr = _e(Sr, 2);
  {
    var si = (n) => {
      var s = Yl(), g = J(s), E = J(g);
      Ue(E, () => v(ee).footer), G(g), G(s), K(n, s);
    };
    we(Tr, (n) => {
      v(ee).footer && (m() !== !0 || v(Dt)) && n(si);
    });
  }
  var ui = _e(Tr, 2);
  {
    var fi = (n) => {
      var s = Wl();
      Wr(s, (g) => L(tt, g), () => v(tt)), K(n, s);
    };
    we(ui, (n) => {
      f() && n(fi);
    });
  }
  return G(it), Wr(it, (n) => L(H, n), () => v(H)), qe(() => {
    ne(it, "data-state", v(R)), ne(it, "data-floating", f()), El(pt, "altcha-hidden", v(R) === x.VERIFYING), ne(Oe, "id", `${T() ?? ""}_checkbox`), Oe.required = r() !== "onsubmit" && (!f() || r() !== "off");
  }), cl("invalid", Oe, gr), xl(Oe, () => v(De), (n) => L(De, n)), K(e, Ar), Nn({
    clarify: rt,
    configure: Er,
    getConfiguration: xr,
    getFloatingAnchor: $r,
    getPlugin: ei,
    getState: kr,
    reset: nt,
    setFloatingAnchor: Cr,
    setState: Re,
    verify: ye,
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
      return c();
    },
    set expire(n = void 0) {
      c(n), $();
    },
    get floating() {
      return f();
    },
    set floating(n = void 0) {
      f(n), $();
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
      return he();
    },
    set refetchonexpire(n = !0) {
      he(n), $();
    },
    get spamfilter() {
      return q();
    },
    set spamfilter(n = !1) {
      q(n), $();
    },
    get strings() {
      return me();
    },
    set strings(n = void 0) {
      me(n), $();
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
      return se();
    },
    set workers(n = Math.min(16, navigator.hardwareConcurrency || 8)) {
      se(n), $();
    },
    get workerurl() {
      return Qe();
    },
    set workerurl(n = void 0) {
      Qe(n), $();
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
