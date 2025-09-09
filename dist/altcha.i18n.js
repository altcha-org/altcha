var On = Object.defineProperty;
var qa = (e) => {
  throw TypeError(e);
};
var Fn = (e, t, r) => t in e ? On(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Ae = (e, t, r) => Fn(e, typeof t != "symbol" ? t + "" : t, r), Ha = (e, t, r) => t.has(e) || qa("Cannot " + r);
var se = (e, t, r) => (Ha(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Vr = (e, t, r) => t.has(e) ? qa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), jr = (e, t, r, i) => (Ha(e, t, "write to private field"), i ? i.call(e, r) : t.set(e, r), r);
var ri = Array.isArray, Mn = Array.prototype.indexOf, Bn = Array.from, sr = Object.keys, Mt = Object.defineProperty, lt = Object.getOwnPropertyDescriptor, Un = Object.getOwnPropertyDescriptors, Gn = Object.prototype, Wn = Array.prototype, ai = Object.getPrototypeOf, Oa = Object.isExtensible;
const Ct = () => {
};
function ii(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Zn(e, t, r = !1) {
  return e === void 0 ? r ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
const ke = 2, ni = 4, vr = 8, Mr = 16, Ne = 32, ct = 64, fr = 128, he = 256, cr = 512, ce = 1024, ze = 2048, ut = 4096, Et = 8192, br = 16384, Yn = 32768, Br = 65536, Kn = 1 << 19, oi = 1 << 20, Pr = 1 << 21, Ot = Symbol("$state"), li = Symbol("legacy props"), Jn = Symbol(""), Xn = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Bt = [], Ut = [];
function si() {
  var e = Bt;
  Bt = [], ii(e);
}
function fi() {
  var e = Ut;
  Ut = [], ii(e);
}
function Ur(e) {
  Bt.length === 0 && queueMicrotask(si), Bt.push(e);
}
function Qn(e) {
  Ut.length === 0 && Xn(fi), Ut.push(e);
}
function eo() {
  Bt.length > 0 && si(), Ut.length > 0 && fi();
}
function ci(e) {
  return e === this.v;
}
function ui(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Gr(e) {
  return !ui(e, this.v);
}
function to(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ro() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function ao(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function io() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function no() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function oo(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function lo() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function so() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function fo() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
const co = 1, uo = 4, ho = 8, go = 16, vo = 1, bo = 2, Wr = "[", di = "[!", hi = "]", Lt = {}, fe = Symbol(), po = "http://www.w3.org/1999/xhtml";
function gi(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let ie = null;
function Fa(e) {
  ie = e;
}
function vi(e, t = !1, r) {
  var i = ie = {
    p: ie,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
  Kr(() => {
    i.d = !0;
  });
}
function bi(e) {
  const t = ie;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const c = t.e;
    if (c !== null) {
      var r = j, i = V;
      t.e = null;
      try {
        for (var l = 0; l < c.length; l++) {
          var n = c[l];
          We(n.effect), Re(n.reaction), Jr(n.fn);
        }
      } finally {
        We(r), Re(i);
      }
    }
    ie = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function pi() {
  return !0;
}
function Be(e) {
  if (typeof e != "object" || e === null || Ot in e)
    return e;
  const t = ai(e);
  if (t !== Gn && t !== Wn)
    return e;
  var r = /* @__PURE__ */ new Map(), i = ri(e), l = /* @__PURE__ */ P(0), n = V, c = (s) => {
    var u = V;
    Re(n);
    var d = s();
    return Re(u), d;
  };
  return i && r.set("length", /* @__PURE__ */ P(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, u, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && lo();
        var m = r.get(u);
        return m === void 0 ? (m = c(() => /* @__PURE__ */ P(d.value)), r.set(u, m)) : y(
          m,
          c(() => Be(d.value))
        ), !0;
      },
      deleteProperty(s, u) {
        var d = r.get(u);
        if (d === void 0)
          u in s && (r.set(
            u,
            c(() => /* @__PURE__ */ P(fe))
          ), Rr(l));
        else {
          if (i && typeof u == "string") {
            var m = (
              /** @type {Source<number>} */
              r.get("length")
            ), g = Number(u);
            Number.isInteger(g) && g < m.v && y(m, g);
          }
          y(d, fe), Rr(l);
        }
        return !0;
      },
      get(s, u, d) {
        var A;
        if (u === Ot)
          return e;
        var m = r.get(u), g = u in s;
        if (m === void 0 && (!g || (A = lt(s, u)) != null && A.writable) && (m = c(() => /* @__PURE__ */ P(Be(g ? s[u] : fe))), r.set(u, m)), m !== void 0) {
          var p = o(m);
          return p === fe ? void 0 : p;
        }
        return Reflect.get(s, u, d);
      },
      getOwnPropertyDescriptor(s, u) {
        var d = Reflect.getOwnPropertyDescriptor(s, u);
        if (d && "value" in d) {
          var m = r.get(u);
          m && (d.value = o(m));
        } else if (d === void 0) {
          var g = r.get(u), p = g == null ? void 0 : g.v;
          if (g !== void 0 && p !== fe)
            return {
              enumerable: !0,
              configurable: !0,
              value: p,
              writable: !0
            };
        }
        return d;
      },
      has(s, u) {
        var p;
        if (u === Ot)
          return !0;
        var d = r.get(u), m = d !== void 0 && d.v !== fe || Reflect.has(s, u);
        if (d !== void 0 || j !== null && (!m || (p = lt(s, u)) != null && p.writable)) {
          d === void 0 && (d = c(() => /* @__PURE__ */ P(m ? Be(s[u]) : fe)), r.set(u, d));
          var g = o(d);
          if (g === fe)
            return !1;
        }
        return m;
      },
      set(s, u, d, m) {
        var X;
        var g = r.get(u), p = u in s;
        if (i && u === "length")
          for (var A = d; A < /** @type {Source<number>} */
          g.v; A += 1) {
            var R = r.get(A + "");
            R !== void 0 ? y(R, fe) : A in s && (R = c(() => /* @__PURE__ */ P(fe)), r.set(A + "", R));
          }
        g === void 0 ? (!p || (X = lt(s, u)) != null && X.writable) && (g = c(() => /* @__PURE__ */ P(void 0)), y(
          g,
          c(() => Be(d))
        ), r.set(u, g)) : (p = g.v !== fe, y(
          g,
          c(() => Be(d))
        ));
        var S = Reflect.getOwnPropertyDescriptor(s, u);
        if (S != null && S.set && S.set.call(m, d), !p) {
          if (i && typeof u == "string") {
            var O = (
              /** @type {Source<number>} */
              r.get("length")
            ), T = Number(u);
            Number.isInteger(T) && T >= O.v && y(O, T + 1);
          }
          Rr(l);
        }
        return !0;
      },
      ownKeys(s) {
        o(l);
        var u = Reflect.ownKeys(s).filter((g) => {
          var p = r.get(g);
          return p === void 0 || p.v !== fe;
        });
        for (var [d, m] of r)
          m.v !== fe && !(d in s) && u.push(d);
        return u;
      },
      setPrototypeOf() {
        so();
      }
    }
  );
}
function Rr(e, t = 1) {
  y(e, e.v + t);
}
// @__NO_SIDE_EFFECTS__
function pr(e) {
  var t = ke | ze, r = V !== null && (V.f & ke) !== 0 ? (
    /** @type {Derived} */
    V
  ) : null;
  return j === null || r !== null && (r.f & he) !== 0 ? t |= he : j.f |= oi, {
    ctx: ie,
    deps: null,
    effects: null,
    equals: ci,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: r ?? j
  };
}
// @__NO_SIDE_EFFECTS__
function Dt(e) {
  const t = /* @__PURE__ */ pr(e);
  return Ei(t), t;
}
// @__NO_SIDE_EFFECTS__
function mo(e) {
  const t = /* @__PURE__ */ pr(e);
  return t.equals = Gr, t;
}
function mi(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Ze(
        /** @type {Effect} */
        t[r]
      );
  }
}
function yo(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & ke) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function yi(e) {
  var t, r = j;
  We(yo(e));
  try {
    mi(e), t = Vi(e);
  } finally {
    We(r);
  }
  return t;
}
function Ai(e) {
  var t = yi(e), r = (Ue || (e.f & he) !== 0) && e.deps !== null ? ut : ce;
  _e(e, r), e.equals(t) || (e.v = t, e.wv = Ti());
}
const Gt = /* @__PURE__ */ new Map();
function ki(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: ci,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function P(e, t) {
  const r = ki(e);
  return Ei(r), r;
}
// @__NO_SIDE_EFFECTS__
function Zr(e, t = !1) {
  const r = ki(e);
  return t || (r.equals = Gr), r;
}
function y(e, t, r = !1) {
  V !== null && !Ve && pi() && (V.f & (ke | Mr)) !== 0 && !(ne != null && ne.includes(e)) && fo();
  let i = r ? Be(t) : t;
  return Ao(e, i);
}
function Ao(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    Wt ? Gt.set(e, t) : Gt.set(e, r), e.v = t, (e.f & ke) !== 0 && ((e.f & ze) !== 0 && yi(
      /** @type {Derived} */
      e
    ), _e(e, (e.f & he) === 0 ? ce : ut)), e.wv = Ti(), _i(e, ze), j !== null && (j.f & ce) !== 0 && (j.f & (Ne | ct)) === 0 && (ve === null ? wo([e]) : ve.push(e));
  }
  return t;
}
function _i(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, l = 0; l < i; l++) {
      var n = r[l], c = n.f;
      (c & ze) === 0 && (_e(n, t), (c & (ce | he)) !== 0 && ((c & ke) !== 0 ? _i(
        /** @type {Derived} */
        n,
        ut
      ) : kr(
        /** @type {Effect} */
        n
      )));
    }
}
function mr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let D = !1;
function wt(e) {
  D = e;
}
let N;
function Ge(e) {
  if (e === null)
    throw mr(), Lt;
  return N = e;
}
function xt() {
  return Ge(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ye(N)
  );
}
function Z(e) {
  if (D) {
    if (/* @__PURE__ */ Ye(N) !== null)
      throw mr(), Lt;
    N = e;
  }
}
function ko() {
  for (var e = 0, t = N; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === hi) {
        if (e === 0) return t;
        e -= 1;
      } else (r === Wr || r === di) && (e += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ye(t)
    );
    t.remove(), t = i;
  }
}
var Ma, wi, Ci, Li;
function zr() {
  if (Ma === void 0) {
    Ma = window, wi = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Ci = lt(t, "firstChild").get, Li = lt(t, "nextSibling").get, Oa(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Oa(r) && (r.__t = void 0);
  }
}
function yr(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function pe(e) {
  return Ci.call(e);
}
// @__NO_SIDE_EFFECTS__
function Ye(e) {
  return Li.call(e);
}
function Y(e, t) {
  if (!D)
    return /* @__PURE__ */ pe(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ pe(N)
  );
  return r === null && (r = N.appendChild(yr())), Ge(r), r;
}
function qt(e, t) {
  if (!D) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ pe(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Ye(r) : r;
  }
  return N;
}
function K(e, t = 1, r = !1) {
  let i = D ? N : e;
  for (var l; t--; )
    l = i, i = /** @type {TemplateNode} */
    /* @__PURE__ */ Ye(i);
  if (!D)
    return i;
  var n = i == null ? void 0 : i.nodeType;
  if (r && n !== 3) {
    var c = yr();
    return i === null ? l == null || l.after(c) : i.before(c), Ge(c), c;
  }
  return Ge(i), /** @type {TemplateNode} */
  i;
}
function _o(e) {
  e.textContent = "";
}
let nr = !1, ur = !1, dr = null, st = !1, Wt = !1;
function Ba(e) {
  Wt = e;
}
let Ft = [];
let V = null, Ve = !1;
function Re(e) {
  V = e;
}
let j = null;
function We(e) {
  j = e;
}
let ne = null;
function Ei(e) {
  V !== null && V.f & Pr && (ne === null ? ne = [e] : ne.push(e));
}
let ae = null, de = 0, ve = null;
function wo(e) {
  ve = e;
}
let xi = 1, hr = 0, Ue = !1;
function Ti() {
  return ++xi;
}
function Zt(e) {
  var g;
  var t = e.f;
  if ((t & ze) !== 0)
    return !0;
  if ((t & ut) !== 0) {
    var r = e.deps, i = (t & he) !== 0;
    if (r !== null) {
      var l, n, c = (t & cr) !== 0, s = i && j !== null && !Ue, u = r.length;
      if (c || s) {
        var d = (
          /** @type {Derived} */
          e
        ), m = d.parent;
        for (l = 0; l < u; l++)
          n = r[l], (c || !((g = n == null ? void 0 : n.reactions) != null && g.includes(d))) && (n.reactions ?? (n.reactions = [])).push(d);
        c && (d.f ^= cr), s && m !== null && (m.f & he) === 0 && (d.f ^= he);
      }
      for (l = 0; l < u; l++)
        if (n = r[l], Zt(
          /** @type {Derived} */
          n
        ) && Ai(
          /** @type {Derived} */
          n
        ), n.wv > e.wv)
          return !0;
    }
    (!i || j !== null && !Ue) && _e(e, ce);
  }
  return !1;
}
function Co(e, t) {
  for (var r = t; r !== null; ) {
    if ((r.f & fr) !== 0)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= fr;
      }
    r = r.parent;
  }
  throw nr = !1, e;
}
function Ua(e) {
  return (e.f & br) === 0 && (e.parent === null || (e.parent.f & fr) === 0);
}
function Ar(e, t, r, i) {
  if (nr) {
    if (r === null && (nr = !1), Ua(t))
      throw e;
    return;
  }
  if (r !== null && (nr = !0), Co(e, t), Ua(t))
    throw e;
}
function Ii(e, t, r = !0) {
  var i = e.reactions;
  if (i !== null)
    for (var l = 0; l < i.length; l++) {
      var n = i[l];
      ne != null && ne.includes(e) || ((n.f & ke) !== 0 ? Ii(
        /** @type {Derived} */
        n,
        t,
        !1
      ) : t === n && (r ? _e(n, ze) : (n.f & ce) !== 0 && _e(n, ut), kr(
        /** @type {Effect} */
        n
      )));
    }
}
function Vi(e) {
  var A;
  var t = ae, r = de, i = ve, l = V, n = Ue, c = ne, s = ie, u = Ve, d = e.f;
  ae = /** @type {null | Value[]} */
  null, de = 0, ve = null, Ue = (d & he) !== 0 && (Ve || !st || V === null), V = (d & (Ne | ct)) === 0 ? e : null, ne = null, Fa(e.ctx), Ve = !1, hr++, e.f |= Pr;
  try {
    var m = (
      /** @type {Function} */
      (0, e.fn)()
    ), g = e.deps;
    if (ae !== null) {
      var p;
      if (gr(e, de), g !== null && de > 0)
        for (g.length = de + ae.length, p = 0; p < ae.length; p++)
          g[de + p] = ae[p];
      else
        e.deps = g = ae;
      if (!Ue)
        for (p = de; p < g.length; p++)
          ((A = g[p]).reactions ?? (A.reactions = [])).push(e);
    } else g !== null && de < g.length && (gr(e, de), g.length = de);
    if (pi() && ve !== null && !Ve && g !== null && (e.f & (ke | ut | ze)) === 0)
      for (p = 0; p < /** @type {Source[]} */
      ve.length; p++)
        Ii(
          ve[p],
          /** @type {Effect} */
          e
        );
    return l !== null && l !== e && (hr++, ve !== null && (i === null ? i = ve : i.push(.../** @type {Source[]} */
    ve))), m;
  } finally {
    ae = t, de = r, ve = i, V = l, Ue = n, ne = c, Fa(s), Ve = u, e.f ^= Pr;
  }
}
function Lo(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var i = Mn.call(r, e);
    if (i !== -1) {
      var l = r.length - 1;
      l === 0 ? r = t.reactions = null : (r[i] = r[l], r.pop());
    }
  }
  r === null && (t.f & ke) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ae === null || !ae.includes(t)) && (_e(t, ut), (t.f & (he | cr)) === 0 && (t.f ^= cr), mi(
    /** @type {Derived} **/
    t
  ), gr(
    /** @type {Derived} **/
    t,
    0
  ));
}
function gr(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var i = t; i < r.length; i++)
      Lo(e, r[i]);
}
function Yr(e) {
  var t = e.f;
  if ((t & br) === 0) {
    _e(e, ce);
    var r = j, i = ie, l = st;
    j = e, st = !0;
    try {
      (t & Mr) !== 0 ? $o(e) : $i(e), Si(e);
      var n = Vi(e);
      e.teardown = typeof n == "function" ? n : null, e.wv = xi;
      var c = e.deps, s;
    } catch (u) {
      Ar(u, e, r, i || e.ctx);
    } finally {
      st = l, j = r;
    }
  }
}
function Eo() {
  try {
    io();
  } catch (e) {
    if (dr !== null)
      Ar(e, dr, null);
    else
      throw e;
  }
}
function ji() {
  var e = st;
  try {
    var t = 0;
    for (st = !0; Ft.length > 0; ) {
      t++ > 1e3 && Eo();
      var r = Ft, i = r.length;
      Ft = [];
      for (var l = 0; l < i; l++) {
        var n = To(r[l]);
        xo(n);
      }
      Gt.clear();
    }
  } finally {
    ur = !1, st = e, dr = null;
  }
}
function xo(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var i = e[r];
      if ((i.f & (br | Et)) === 0)
        try {
          Zt(i) && (Yr(i), i.deps === null && i.first === null && i.nodes_start === null && (i.teardown === null ? zi(i) : i.fn = null));
        } catch (l) {
          Ar(l, i, null, i.ctx);
        }
    }
}
function kr(e) {
  ur || (ur = !0, queueMicrotask(ji));
  for (var t = dr = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (ct | Ne)) !== 0) {
      if ((r & ce) === 0) return;
      t.f ^= ce;
    }
  }
  Ft.push(t);
}
function To(e) {
  for (var t = [], r = e; r !== null; ) {
    var i = r.f, l = (i & (Ne | ct)) !== 0, n = l && (i & ce) !== 0;
    if (!n && (i & Et) === 0) {
      if ((i & ni) !== 0)
        t.push(r);
      else if (l)
        r.f ^= ce;
      else
        try {
          Zt(r) && Yr(r);
        } catch (u) {
          Ar(u, r, null, r.ctx);
        }
      var c = r.first;
      if (c !== null) {
        r = c;
        continue;
      }
    }
    var s = r.parent;
    for (r = r.next; r === null && s !== null; )
      r = s.next, s = s.parent;
  }
  return t;
}
function w(e) {
  for (var t; ; ) {
    if (eo(), Ft.length === 0)
      return (
        /** @type {T} */
        t
      );
    ur = !0, ji();
  }
}
async function Sr() {
  await Promise.resolve(), w();
}
function o(e) {
  var t = e.f, r = (t & ke) !== 0;
  if (V !== null && !Ve) {
    if (!(ne != null && ne.includes(e))) {
      var i = V.deps;
      e.rv < hr && (e.rv = hr, ae === null && i !== null && i[de] === e ? de++ : ae === null ? ae = [e] : (!Ue || !ae.includes(e)) && ae.push(e));
    }
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var l = (
      /** @type {Derived} */
      e
    ), n = l.parent;
    n !== null && (n.f & he) === 0 && (l.f ^= he);
  }
  return r && (l = /** @type {Derived} */
  e, Zt(l) && Ai(l)), Wt && Gt.has(e) ? Gt.get(e) : e.v;
}
function ft(e) {
  var t = Ve;
  try {
    return Ve = !0, e();
  } finally {
    Ve = t;
  }
}
const Io = -7169;
function _e(e, t) {
  e.f = e.f & Io | t;
}
function Vo(e) {
  j === null && V === null && ao(), V !== null && (V.f & he) !== 0 && j === null && ro(), Wt && to();
}
function jo(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function dt(e, t, r, i = !0) {
  var l = j, n = {
    ctx: ie,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | ze,
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
      Yr(n), n.f |= Yn;
    } catch (u) {
      throw Ze(n), u;
    }
  else t !== null && kr(n);
  var c = r && n.deps === null && n.first === null && n.nodes_start === null && n.teardown === null && (n.f & (oi | fr)) === 0;
  if (!c && i && (l !== null && jo(n, l), V !== null && (V.f & ke) !== 0)) {
    var s = (
      /** @type {Derived} */
      V
    );
    (s.effects ?? (s.effects = [])).push(n);
  }
  return n;
}
function Kr(e) {
  const t = dt(vr, null, !1);
  return _e(t, ce), t.teardown = e, t;
}
function Nr(e) {
  Vo();
  var t = j !== null && (j.f & Ne) !== 0 && ie !== null && !ie.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      ie
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: j,
      reaction: V
    });
  } else {
    var i = Jr(e);
    return i;
  }
}
function Ro(e) {
  const t = dt(ct, e, !0);
  return () => {
    Ze(t);
  };
}
function So(e) {
  const t = dt(ct, e, !0);
  return (r = {}) => new Promise((i) => {
    r.outro ? qr(t, () => {
      Ze(t), i(void 0);
    }) : (Ze(t), i(void 0));
  });
}
function Jr(e) {
  return dt(ni, e, !1);
}
function Xr(e) {
  return dt(vr, e, !0);
}
function Ie(e, t = [], r = pr) {
  const i = t.map(r);
  return Ri(() => e(...i.map(o)));
}
function Ri(e, t = 0) {
  return dt(vr | Mr | t, e, !0);
}
function Dr(e, t = !0) {
  return dt(vr | Ne, e, !0, t);
}
function Si(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Wt, i = V;
    Ba(!0), Re(null);
    try {
      t.call(null);
    } finally {
      Ba(r), Re(i);
    }
  }
}
function $i(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var i = r.next;
    (r.f & ct) !== 0 ? r.parent = null : Ze(r, t), r = i;
  }
}
function $o(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Ne) === 0 && Ze(t), t = r;
  }
}
function Ze(e, t = !0) {
  var r = !1;
  (t || (e.f & Kn) !== 0) && e.nodes_start !== null && (Pi(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), r = !0), $i(e, t && !r), gr(e, 0), _e(e, br);
  var i = e.transitions;
  if (i !== null)
    for (const n of i)
      n.stop();
  Si(e);
  var l = e.parent;
  l !== null && l.first !== null && zi(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function Pi(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ye(e)
    );
    e.remove(), e = r;
  }
}
function zi(e) {
  var t = e.parent, r = e.prev, i = e.next;
  r !== null && (r.next = i), i !== null && (i.prev = r), t !== null && (t.first === e && (t.first = i), t.last === e && (t.last = r));
}
function qr(e, t) {
  var r = [];
  Ni(e, r, !0), Po(r, () => {
    Ze(e), t && t();
  });
}
function Po(e, t) {
  var r = e.length;
  if (r > 0) {
    var i = () => --r || t();
    for (var l of e)
      l.out(i);
  } else
    t();
}
function Ni(e, t, r) {
  if ((e.f & Et) === 0) {
    if (e.f ^= Et, e.transitions !== null)
      for (const c of e.transitions)
        (c.is_global || r) && t.push(c);
    for (var i = e.first; i !== null; ) {
      var l = i.next, n = (i.f & Br) !== 0 || (i.f & Ne) !== 0;
      Ni(i, t, n ? r : !1), i = l;
    }
  }
}
function Ga(e) {
  Di(e, !0);
}
function Di(e, t) {
  if ((e.f & Et) !== 0) {
    e.f ^= Et, (e.f & ce) === 0 && (e.f ^= ce), Zt(e) && (_e(e, ze), kr(e));
    for (var r = e.first; r !== null; ) {
      var i = r.next, l = (r.f & Br) !== 0 || (r.f & Ne) !== 0;
      Di(r, l ? t : !1), r = i;
    }
    if (e.transitions !== null)
      for (const n of e.transitions)
        (n.is_global || t) && n.in();
  }
}
const zo = ["touchstart", "touchmove"];
function No(e) {
  return zo.includes(e);
}
function Do(e, t) {
  if (t) {
    const r = document.body;
    e.autofocus = !0, Ur(() => {
      document.activeElement === r && e.focus();
    });
  }
}
let Wa = !1;
function qi() {
  Wa || (Wa = !0, document.addEventListener(
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
function Hi(e) {
  var t = V, r = j;
  Re(null), We(null);
  try {
    return e();
  } finally {
    Re(t), We(r);
  }
}
function qo(e, t, r, i = r) {
  e.addEventListener(t, () => Hi(r));
  const l = e.__on_r;
  l ? e.__on_r = () => {
    l(), i(!0);
  } : e.__on_r = () => i(!0), qi();
}
const Oi = /* @__PURE__ */ new Set(), Hr = /* @__PURE__ */ new Set();
function Ho(e, t, r, i = {}) {
  function l(n) {
    if (i.capture || Ht.call(t, n), !n.cancelBubble)
      return Hi(() => r == null ? void 0 : r.call(this, n));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Ur(() => {
    t.addEventListener(e, l, i);
  }) : t.addEventListener(e, l, i), l;
}
function Me(e, t, r, i, l) {
  var n = { capture: i, passive: l }, c = Ho(e, t, r, n);
  (t === document.body || t === window || t === document) && Kr(() => {
    t.removeEventListener(e, c, n);
  });
}
function Oo(e) {
  for (var t = 0; t < e.length; t++)
    Oi.add(e[t]);
  for (var r of Hr)
    r(e);
}
function Ht(e) {
  var X;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), i = e.type, l = ((X = e.composedPath) == null ? void 0 : X.call(e)) || [], n = (
    /** @type {null | Element} */
    l[0] || e.target
  ), c = 0, s = e.__root;
  if (s) {
    var u = l.indexOf(s);
    if (u !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var d = l.indexOf(t);
    if (d === -1)
      return;
    u <= d && (c = u);
  }
  if (n = /** @type {Element} */
  l[c] || e.target, n !== t) {
    Mt(e, "currentTarget", {
      configurable: !0,
      get() {
        return n || r;
      }
    });
    var m = V, g = j;
    Re(null), We(null);
    try {
      for (var p, A = []; n !== null; ) {
        var R = n.assignedSlot || n.parentNode || /** @type {any} */
        n.host || null;
        try {
          var S = n["__" + i];
          if (S != null && (!/** @type {any} */
          n.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === n))
            if (ri(S)) {
              var [O, ...T] = S;
              O.apply(n, [e, ...T]);
            } else
              S.call(n, e);
        } catch (oe) {
          p ? A.push(oe) : p = oe;
        }
        if (e.cancelBubble || R === t || R === null)
          break;
        n = R;
      }
      if (p) {
        for (let oe of A)
          queueMicrotask(() => {
            throw oe;
          });
        throw p;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Re(m), We(g);
    }
  }
}
function Qr(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function je(e, t) {
  var r = (
    /** @type {Effect} */
    j
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function we(e, t) {
  var r = (t & vo) !== 0, i = (t & bo) !== 0, l, n = !e.startsWith("<!>");
  return () => {
    if (D)
      return je(N, null), N;
    l === void 0 && (l = Qr(n ? e : "<!>" + e), r || (l = /** @type {Node} */
    /* @__PURE__ */ pe(l)));
    var c = (
      /** @type {TemplateNode} */
      i || wi ? document.importNode(l, !0) : l.cloneNode(!0)
    );
    if (r) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ pe(c)
      ), u = (
        /** @type {TemplateNode} */
        c.lastChild
      );
      je(s, u);
    } else
      je(c, c);
    return c;
  };
}
// @__NO_SIDE_EFFECTS__
function _r(e, t, r = "svg") {
  var i = !e.startsWith("<!>"), l = `<${r}>${i ? e : "<!>" + e}</${r}>`, n;
  return () => {
    if (D)
      return je(N, null), N;
    if (!n) {
      var c = (
        /** @type {DocumentFragment} */
        Qr(l)
      ), s = (
        /** @type {Element} */
        /* @__PURE__ */ pe(c)
      );
      n = /** @type {Element} */
      /* @__PURE__ */ pe(s);
    }
    var u = (
      /** @type {TemplateNode} */
      n.cloneNode(!0)
    );
    return je(u, u), u;
  };
}
function rr() {
  if (D)
    return je(N, null), N;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = yr();
  return e.append(t, r), je(t, r), e;
}
function M(e, t) {
  if (D) {
    j.nodes_end = N, xt();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Fo(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function Fi(e, t) {
  return Mi(e, t);
}
function Mo(e, t) {
  zr(), t.intro = t.intro ?? !1;
  const r = t.target, i = D, l = N;
  try {
    for (var n = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ pe(r)
    ); n && (n.nodeType !== 8 || /** @type {Comment} */
    n.data !== Wr); )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Ye(n);
    if (!n)
      throw Lt;
    wt(!0), Ge(
      /** @type {Comment} */
      n
    ), xt();
    const c = Mi(e, { ...t, anchor: n });
    if (N === null || N.nodeType !== 8 || /** @type {Comment} */
    N.data !== hi)
      throw mr(), Lt;
    return wt(!1), /**  @type {Exports} */
    c;
  } catch (c) {
    if (c === Lt)
      return t.recover === !1 && no(), zr(), _o(r), wt(!1), Fi(e, t);
    throw c;
  } finally {
    wt(i), Ge(l);
  }
}
const kt = /* @__PURE__ */ new Map();
function Mi(e, { target: t, anchor: r, props: i = {}, events: l, context: n, intro: c = !0 }) {
  zr();
  var s = /* @__PURE__ */ new Set(), u = (g) => {
    for (var p = 0; p < g.length; p++) {
      var A = g[p];
      if (!s.has(A)) {
        s.add(A);
        var R = No(A);
        t.addEventListener(A, Ht, { passive: R });
        var S = kt.get(A);
        S === void 0 ? (document.addEventListener(A, Ht, { passive: R }), kt.set(A, 1)) : kt.set(A, S + 1);
      }
    }
  };
  u(Bn(Oi)), Hr.add(u);
  var d = void 0, m = So(() => {
    var g = r ?? t.appendChild(yr());
    return Dr(() => {
      if (n) {
        vi({});
        var p = (
          /** @type {ComponentContext} */
          ie
        );
        p.c = n;
      }
      l && (i.$$events = l), D && je(
        /** @type {TemplateNode} */
        g,
        null
      ), d = e(g, i) || {}, D && (j.nodes_end = N), n && bi();
    }), () => {
      var R;
      for (var p of s) {
        t.removeEventListener(p, Ht);
        var A = (
          /** @type {number} */
          kt.get(p)
        );
        --A === 0 ? (document.removeEventListener(p, Ht), kt.delete(p)) : kt.set(p, A);
      }
      Hr.delete(u), g !== r && ((R = g.parentNode) == null || R.removeChild(g));
    };
  });
  return Or.set(d, m), d;
}
let Or = /* @__PURE__ */ new WeakMap();
function Bo(e, t) {
  const r = Or.get(e);
  return r ? (Or.delete(e), r(t)) : Promise.resolve();
}
function J(e, t, [r, i] = [0, 0]) {
  D && r === 0 && xt();
  var l = e, n = null, c = null, s = fe, u = r > 0 ? Br : 0, d = !1;
  const m = (p, A = !0) => {
    d = !0, g(A, p);
  }, g = (p, A) => {
    if (s === (s = p)) return;
    let R = !1;
    if (D && i !== -1) {
      if (r === 0) {
        const O = (
          /** @type {Comment} */
          l.data
        );
        O === Wr ? i = 0 : O === di ? i = 1 / 0 : (i = parseInt(O.substring(1)), i !== i && (i = s ? 1 / 0 : -1));
      }
      const S = i > r;
      !!s === S && (l = ko(), Ge(l), wt(!1), R = !0, i = -1);
    }
    s ? (n ? Ga(n) : A && (n = Dr(() => A(l))), c && qr(c, () => {
      c = null;
    })) : (c ? Ga(c) : A && (c = Dr(() => A(l, [r + 1, i]))), n && qr(n, () => {
      n = null;
    })), R && wt(!0);
  };
  Ri(() => {
    d = !1, t(m), d || g(null, null);
  }, u), D && (l = N);
}
function ot(e, t, r = !1, i = !1, l = !1) {
  var n = e, c = "";
  Ie(() => {
    var s = (
      /** @type {Effect} */
      j
    );
    if (c === (c = t() ?? "")) {
      D && xt();
      return;
    }
    if (s.nodes_start !== null && (Pi(
      s.nodes_start,
      /** @type {TemplateNode} */
      s.nodes_end
    ), s.nodes_start = s.nodes_end = null), c !== "") {
      if (D) {
        N.data;
        for (var u = xt(), d = u; u !== null && (u.nodeType !== 8 || /** @type {Comment} */
        u.data !== ""); )
          d = u, u = /** @type {TemplateNode} */
          /* @__PURE__ */ Ye(u);
        if (u === null)
          throw mr(), Lt;
        je(N, d), n = Ge(u);
        return;
      }
      var m = c + "";
      r ? m = `<svg>${m}</svg>` : i && (m = `<math>${m}</math>`);
      var g = Qr(m);
      if ((r || i) && (g = /** @type {Element} */
      /* @__PURE__ */ pe(g)), je(
        /** @type {TemplateNode} */
        /* @__PURE__ */ pe(g),
        /** @type {TemplateNode} */
        g.lastChild
      ), r || i)
        for (; /* @__PURE__ */ pe(g); )
          n.before(
            /** @type {Node} */
            /* @__PURE__ */ pe(g)
          );
      else
        n.before(g);
    }
  });
}
function Uo(e, t, r, i, l) {
  var s;
  D && xt();
  var n = (s = t.$$slots) == null ? void 0 : s[r], c = !1;
  n === !0 && (n = t.children, c = !0), n === void 0 || n(e, c ? () => i : i);
}
const Za = [...` 	
\r\f \v\uFEFF`];
function Go(e, t, r) {
  var i = "" + e;
  if (r) {
    for (var l in r)
      if (r[l])
        i = i ? i + " " + l : l;
      else if (i.length)
        for (var n = l.length, c = 0; (c = i.indexOf(l, c)) >= 0; ) {
          var s = c + n;
          (c === 0 || Za.includes(i[c - 1])) && (s === i.length || Za.includes(i[s])) ? i = (c === 0 ? "" : i.substring(0, c)) + i.substring(s + 1) : c = s;
        }
  }
  return i === "" ? null : i;
}
function Wo(e, t, r, i, l, n) {
  var c = e.__className;
  if (D || c !== r || c === void 0) {
    var s = Go(r, i, n);
    (!D || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : e.className = s), e.__className = r;
  } else if (n && l !== n)
    for (var u in n) {
      var d = !!n[u];
      (l == null || d !== !!l[u]) && e.classList.toggle(u, d);
    }
  return n;
}
const Zo = Symbol("is custom element"), Yo = Symbol("is html");
function Ya(e) {
  if (D) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var i = e.value;
          I(e, "value", null), e.value = i;
        }
        if (e.hasAttribute("checked")) {
          var l = e.checked;
          I(e, "checked", null), e.checked = l;
        }
      }
    };
    e.__on_r = r, Qn(r), qi();
  }
}
function Ko(e, t) {
  var r = Bi(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function I(e, t, r, i) {
  var l = Bi(e);
  D && (l[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || l[t] !== (l[t] = r) && (t === "loading" && (e[Jn] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Jo(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Bi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Zo]: e.nodeName.includes("-"),
      [Yo]: e.namespaceURI === po
    })
  );
}
var Ka = /* @__PURE__ */ new Map();
function Jo(e) {
  var t = Ka.get(e.nodeName);
  if (t) return t;
  Ka.set(e.nodeName, t = []);
  for (var r, i = e, l = Element.prototype; l !== i; ) {
    r = Un(i);
    for (var n in r)
      r[n].set && t.push(n);
    i = ai(i);
  }
  return t;
}
function Xo(e, t, r = t) {
  qo(e, "change", (i) => {
    var l = i ? e.defaultChecked : e.checked;
    r(l);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (D && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  ft(t) == null) && r(e.checked), Xr(() => {
    var i = t();
    e.checked = !!i;
  });
}
function Ja(e, t) {
  return e === t || (e == null ? void 0 : e[Ot]) === t;
}
function ar(e = {}, t, r, i) {
  return Jr(() => {
    var l, n;
    return Xr(() => {
      l = n, n = [], ft(() => {
        e !== r(...n) && (t(e, ...n), l && Ja(r(...l), e) && t(null, ...l));
      });
    }), () => {
      Ur(() => {
        n && Ja(r(...n), e) && t(null, ...n);
      });
    };
  }), e;
}
let ir = !1, Fr = Symbol();
function Qo(e, t, r) {
  const i = r[t] ?? (r[t] = {
    store: null,
    source: /* @__PURE__ */ Zr(void 0),
    unsubscribe: Ct
  });
  if (i.store !== e && !(Fr in r))
    if (i.unsubscribe(), i.store = e ?? null, e == null)
      i.source.v = void 0, i.unsubscribe = Ct;
    else {
      var l = !0;
      i.unsubscribe = Wi(e, (n) => {
        l ? i.source.v = n : y(i.source, n);
      }), l = !1;
    }
  return e && Fr in r ? lr(e) : o(i.source);
}
function el() {
  const e = {};
  function t() {
    Kr(() => {
      for (var r in e)
        e[r].unsubscribe();
      Mt(e, Fr, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function tl(e) {
  var t = ir;
  try {
    return ir = !1, [e(), ir];
  } finally {
    ir = t;
  }
}
function Xa(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function C(e, t, r, i) {
  var Se;
  var l = (r & co) !== 0, n = !0, c = (r & ho) !== 0, s = (r & go) !== 0, u = !1, d;
  c ? [d, u] = tl(() => (
    /** @type {V} */
    e[t]
  )) : d = /** @type {V} */
  e[t];
  var m = Ot in e || li in e, g = c && (((Se = lt(e, t)) == null ? void 0 : Se.set) ?? (m && t in e && ((F) => e[t] = F))) || void 0, p = (
    /** @type {V} */
    i
  ), A = !0, R = !1, S = () => (R = !0, A && (A = !1, s ? p = ft(
    /** @type {() => V} */
    i
  ) : p = /** @type {V} */
  i), p);
  d === void 0 && i !== void 0 && (g && n && oo(), d = S(), g && g(d));
  var O;
  if (O = () => {
    var F = (
      /** @type {V} */
      e[t]
    );
    return F === void 0 ? S() : (A = !0, R = !1, F);
  }, (r & uo) === 0)
    return O;
  if (g) {
    var T = e.$$legacy;
    return function(F, Ce) {
      return arguments.length > 0 ? ((!Ce || T || u) && g(Ce ? O() : F), F) : O();
    };
  }
  var X = !1, oe = /* @__PURE__ */ Zr(d), Q = /* @__PURE__ */ pr(() => {
    var F = O(), Ce = o(oe);
    return X ? (X = !1, Ce) : oe.v = F;
  });
  return c && o(Q), l || (Q.equals = Gr), function(F, Ce) {
    if (arguments.length > 0) {
      const De = Ce ? o(Q) : c ? Be(F) : F;
      if (!Q.equals(De)) {
        if (X = !0, y(oe, De), R && p !== void 0 && (p = De), Xa(Q))
          return F;
        ft(() => o(Q));
      }
      return F;
    }
    return Xa(Q) ? Q.v : o(Q);
  };
}
function rl(e) {
  return new al(e);
}
var Pe, be;
class al {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    Vr(this, Pe);
    /** @type {Record<string, any>} */
    Vr(this, be);
    var n;
    var r = /* @__PURE__ */ new Map(), i = (c, s) => {
      var u = /* @__PURE__ */ Zr(s);
      return r.set(c, u), u;
    };
    const l = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(c, s) {
          return o(r.get(s) ?? i(s, Reflect.get(c, s)));
        },
        has(c, s) {
          return s === li ? !0 : (o(r.get(s) ?? i(s, Reflect.get(c, s))), Reflect.has(c, s));
        },
        set(c, s, u) {
          return y(r.get(s) ?? i(s, u), u), Reflect.set(c, s, u);
        }
      }
    );
    jr(this, be, (t.hydrate ? Mo : Fi)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: l,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((n = t == null ? void 0 : t.props) != null && n.$$host) || t.sync === !1) && w(), jr(this, Pe, l.$$events);
    for (const c of Object.keys(se(this, be)))
      c === "$set" || c === "$destroy" || c === "$on" || Mt(this, c, {
        get() {
          return se(this, be)[c];
        },
        /** @param {any} value */
        set(s) {
          se(this, be)[c] = s;
        },
        enumerable: !0
      });
    se(this, be).$set = /** @param {Record<string, any>} next */
    (c) => {
      Object.assign(l, c);
    }, se(this, be).$destroy = () => {
      Bo(se(this, be));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    se(this, be).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    se(this, Pe)[t] = se(this, Pe)[t] || [];
    const i = (...l) => r.call(this, ...l);
    return se(this, Pe)[t].push(i), () => {
      se(this, Pe)[t] = se(this, Pe)[t].filter(
        /** @param {any} fn */
        (l) => l !== i
      );
    };
  }
  $destroy() {
    se(this, be).$destroy();
  }
}
Pe = new WeakMap(), be = new WeakMap();
let Ui;
typeof HTMLElement == "function" && (Ui = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, i) {
    super();
    /** The Svelte component constructor */
    Ae(this, "$$ctor");
    /** Slots */
    Ae(this, "$$s");
    /** @type {any} The Svelte component instance */
    Ae(this, "$$c");
    /** Whether or not the custom element is connected */
    Ae(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    Ae(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    Ae(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    Ae(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    Ae(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    Ae(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    Ae(this, "$$me");
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
        return (n) => {
          const c = document.createElement("slot");
          l !== "default" && (c.name = l), M(n, c);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, i = il(this);
      for (const l of this.$$s)
        l in i && (l === "default" && !this.$$d.children ? (this.$$d.children = t(l), r.default = !0) : r[l] = t(l));
      for (const l of this.attributes) {
        const n = this.$$g_p(l.name);
        n in this.$$d || (this.$$d[n] = or(n, l.value, this.$$p_d, "toProp"));
      }
      for (const l in this.$$p_d)
        !(l in this.$$d) && this[l] !== void 0 && (this.$$d[l] = this[l], delete this[l]);
      this.$$c = rl({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = Ro(() => {
        Xr(() => {
          var l;
          this.$$r = !0;
          for (const n of sr(this.$$c)) {
            if (!((l = this.$$p_d[n]) != null && l.reflect)) continue;
            this.$$d[n] = this.$$c[n];
            const c = or(
              n,
              this.$$d[n],
              this.$$p_d,
              "toAttribute"
            );
            c == null ? this.removeAttribute(this.$$p_d[n].attribute || n) : this.setAttribute(this.$$p_d[n].attribute || n, c);
          }
          this.$$r = !1;
        });
      });
      for (const l in this.$$l)
        for (const n of this.$$l[l]) {
          const c = this.$$c.$on(l, n);
          this.$$l_u.set(n, c);
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = or(t, i, this.$$p_d, "toProp"), (l = this.$$c) == null || l.$set({ [t]: this.$$d[t] }));
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
    return sr(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function or(e, t, r, i) {
  var n;
  const l = (n = r[e]) == null ? void 0 : n.type;
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
function il(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function nl(e, t, r, i, l, n) {
  let c = class extends Ui {
    constructor() {
      super(e, r, l), this.$$p_d = t;
    }
    static get observedAttributes() {
      return sr(t).map(
        (s) => (t[s].attribute || s).toLowerCase()
      );
    }
  };
  return sr(t).forEach((s) => {
    Mt(c.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(u) {
        var g;
        u = or(s, u, t), this.$$d[s] = u;
        var d = this.$$c;
        if (d) {
          var m = (g = lt(d, s)) == null ? void 0 : g.get;
          m ? d[s] = u : d.$set({ [s]: u });
        }
      }
    });
  }), i.forEach((s) => {
    Mt(c.prototype, s, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[s];
      }
    });
  }), e.element = /** @type {any} */
  c, c;
}
function Gi(e) {
  ie === null && gi(), Nr(() => {
    const t = ft(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function ol(e) {
  ie === null && gi(), Gi(() => () => ft(e));
}
function Wi(e, t, r) {
  if (e == null)
    return t(void 0), Ct;
  const i = ft(
    () => e.subscribe(
      t,
      // @ts-expect-error
      r
    )
  );
  return i.unsubscribe ? () => i.unsubscribe() : i;
}
const _t = [];
function ll(e, t = Ct) {
  let r = null;
  const i = /* @__PURE__ */ new Set();
  function l(s) {
    if (ui(e, s) && (e = s, r)) {
      const u = !_t.length;
      for (const d of i)
        d[1](), _t.push(d, e);
      if (u) {
        for (let d = 0; d < _t.length; d += 2)
          _t[d][0](_t[d + 1]);
        _t.length = 0;
      }
    }
  }
  function n(s) {
    l(s(
      /** @type {T} */
      e
    ));
  }
  function c(s, u = Ct) {
    const d = [s, u];
    return i.add(d), i.size === 1 && (r = t(l, n) || Ct), s(
      /** @type {T} */
      e
    ), () => {
      i.delete(d), i.size === 0 && r && (r(), r = null);
    };
  }
  return { set: l, update: n, subscribe: c };
}
function lr(e) {
  let t;
  return Wi(e, (r) => t = r)(), t;
}
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (e) => lr(globalThis.altchaI18n.store)[e],
  set: (e, t) => {
    Object.assign(lr(globalThis.altchaI18n.store), {
      [e]: t
    }), globalThis.altchaI18n.store.set(lr(globalThis.altchaI18n.store));
  },
  store: ll({})
};
const sl = {
  ariaLinkLabel: "زور Altcha.org",
  enterCode: "أدخل الرمز",
  enterCodeAria: "أدخل الرمز الذي تسمعه. اضغط على المسافة لتشغيل الصوت.",
  error: "فشل التحقق. حاول مرة أخرى لاحقاً.",
  expired: "انتهت صلاحية التحقق. حاول مرة أخرى.",
  verificationRequired: "مطلوب التحقق!",
  footer: 'محمي بواسطة <a href="https://altcha.org/" target="_blank" aria-label="زور Altcha.org">ALTCHA</a>',
  getAudioChallenge: "احصل على تحدي صوتي",
  label: "أنا لست روبوتاً",
  loading: "جارٍ التحميل...",
  reload: "إعادة تحميل",
  verify: "تحقق",
  verified: "تم التحقق",
  verifying: "جارٍ التحقق...",
  waitAlert: "جارٍ التحقق... يرجى الانتظار."
};
globalThis.altchaI18n.set("ar", sl);
const fl = {
  ariaLinkLabel: "Посетете Altcha.org",
  enterCode: "Въведете код",
  enterCodeAria: "Въведете кода, който чувате. Натиснете Space за възпроизвеждане на аудио.",
  error: "Проверката неуспешна. Моля, опитайте по-късно.",
  expired: "Времето за проверка изтече. Моля, опитайте отново.",
  verificationRequired: "Изисква се проверка!",
  footer: 'Защитено от <a href="https://altcha.org/" target="_blank" aria-label="Посетете Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Аудио проверка",
  label: "Аз не съм робот",
  loading: "Зареждане...",
  reload: "Презареди",
  verify: "Провери",
  verified: "Проверено",
  verifying: "Проверява се...",
  waitAlert: "Проверката е в процес... моля изчакайте."
};
globalThis.altchaI18n.set("bg", fl);
const cl = {
  ariaLinkLabel: "Наведаць Altcha.org",
  enterCode: "Увядзіце код",
  enterCodeAria: "Увядзіце код, які вы чуеце. Націсніце прабел, каб прайграць аўдыё.",
  error: "Праверка не прайшла. Паспрабуйце пазней.",
  expired: "Тэрмін праверкі скончыўся. Паспрабуйце зноў.",
  footer: 'Абаронена <a href="https://altcha.org/" target="_blank" aria-label="Наведаць Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Атрымаць аўдыё выклік",
  label: "Я не робат",
  loading: "Загрузка...",
  reload: "Перазагрузіць",
  verify: "Праверыць",
  verificationRequired: "Патрабуецца праверка!",
  verified: "Праверана",
  verifying: "Правяраем...",
  waitAlert: "Праверка... калі ласка, пачакайце."
};
globalThis.altchaI18n.set("be", cl);
const ul = {
  ariaLinkLabel: "Posjetite Altcha.org",
  enterCode: "Unesite kod",
  enterCodeAria: "Unesite kod koji čujete. Pritisnite Space da biste pustili zvuk.",
  error: "Verifikacija nije uspjela. Pokušajte ponovo kasnije.",
  expired: "Verifikacija je istekla. Pokušajte ponovo.",
  footer: 'Zaštićeno od strane <a href="https://altcha.org/" target="_blank" aria-label="Posjetite Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Dohvatite audio izazov",
  label: "Nisam robot",
  loading: "Učitavanje...",
  reload: "Ponovno učitaj",
  verify: "Verifikuj",
  verificationRequired: "Verifikacija je obavezna!",
  verified: "Verifikovano",
  verifying: "Verifikacija u toku...",
  waitAlert: "Verifikacija u toku... molimo vas da sačekate."
};
globalThis.altchaI18n.set("bs", ul);
const dl = {
  ariaLinkLabel: "Visita Altcha.org",
  enterCode: "Introdueix el codi",
  enterCodeAria: "Introdueix el codi que escoltes. Prem Espai per reproduir l’àudio.",
  error: "Verificació fallida. Torna-ho a provar més tard.",
  expired: "Verificació expirada. Torna-ho a provar.",
  footer: 'Protegit per <a href="https://altcha.org/" target="_blank" aria-label="Visita Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Obtenir un desafiament d’àudio",
  label: "No sóc un robot",
  loading: "Carregant...",
  reload: "Torna a carregar",
  verify: "Verificar",
  verificationRequired: "Es requereix verificació!",
  verified: "Verificat",
  verifying: "Verificant...",
  waitAlert: "Verificant... si us plau, espera."
};
globalThis.altchaI18n.set("ca", dl);
const hl = {
  ariaLinkLabel: "Navštivte Altcha.org",
  enterCode: "Zadejte kód",
  enterCodeAria: "Zadejte kód, který slyšíte. Stisknutím mezerníku přehrajete zvuk.",
  error: "Ověření selhalo. Zkuste to prosím později.",
  expired: "Ověření vypršelo. Zkuste to prosím znovu.",
  verificationRequired: "Vyžaduje se ověření!",
  footer: 'Chráněno pomocí <a href="https://altcha.org/" target="_blank" aria-label="Navštivte Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Získat audio výzvu",
  label: "Nejsem robot",
  loading: "Načítání...",
  reload: "Znovu načíst",
  verify: "Ověřit",
  verified: "Ověřeno",
  verifying: "Ověřování...",
  waitAlert: "Probíhá ověření... prosím počkejte."
};
globalThis.altchaI18n.set("cs", hl);
const gl = {
  ariaLinkLabel: "Besøg Altcha.org",
  enterCode: "Indtast kode",
  enterCodeAria: "Indtast den kode, du hører. Tryk på mellemrumstasten for at afspille lyd.",
  error: "Verificering mislykkedes. Prøv venligst igen senere.",
  expired: "Verificering udløbet. Prøv venligst igen.",
  verificationRequired: "Verificering kræves!",
  footer: 'Beskyttet af <a href="https://altcha.org/" target="_blank" aria-label="Besøg Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Hent lydudfordring",
  label: "Jeg er ikke en robot",
  loading: "Indlæser...",
  reload: "Genindlæs",
  verify: "Verificer",
  verified: "Verificeret",
  verifying: "Verificerer...",
  waitAlert: "Verificerer... vent venligst."
};
globalThis.altchaI18n.set("da", gl);
const vl = {
  ariaLinkLabel: "Besuche Altcha.org",
  enterCode: "Code eingeben",
  enterCodeAria: "Geben Sie den Code ein, den Sie hören. Drücken Sie die Leertaste, um die Audio abzuspielen.",
  error: "Überprüfung fehlgeschlagen. Bitte versuchen Sie es später erneut.",
  expired: "Überprüfung abgelaufen. Bitte versuchen Sie es erneut.",
  verificationRequired: "Überprüfung erforderlich!",
  footer: 'Geschützt durch <a href="https://altcha.org/" target="_blank" aria-label="Besuche Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Audio-Herausforderung anfordern",
  label: "Ich bin kein Roboter",
  loading: "Lade...",
  reload: "Neu laden",
  verify: "Überprüfen",
  verified: "Überprüft",
  verifying: "Wird überprüft...",
  waitAlert: "Überprüfung läuft... bitte warten."
};
globalThis.altchaI18n.set("de", vl);
const bl = {
  ariaLinkLabel: "Επισκεφθείτε το Altcha.org",
  enterCode: "Εισαγάγετε κωδικό",
  enterCodeAria: "Εισαγάγετε τον κωδικό που ακούτε. Πατήστε Space για να παίξετε τον ήχο.",
  error: "Η επαλήθευση απέτυχε. Δοκιμάστε ξανά αργότερα.",
  expired: "Η επαλήθευση έληξε. Δοκιμάστε ξανά.",
  verificationRequired: "Απαιτείται έλεγχος!",
  footer: 'Προστατεύεται από το <a href="https://altcha.org/" target="_blank" aria-label="Επισκεφθείτε το Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Λήψη ηχητικής δοκιμασίας",
  label: "Δεν είμαι ρομπότ",
  loading: "Φόρτωση...",
  reload: "Επαναφόρτωση",
  verify: "Επαλήθευση",
  verified: "Επαληθεύτηκε",
  verifying: "Γίνεται επαλήθευση...",
  waitAlert: "Γίνεται επαλήθευση... παρακαλώ περιμένετε."
};
globalThis.altchaI18n.set("el", bl);
const pl = {
  ariaLinkLabel: "Visitar Altcha.org",
  enterCode: "Introduce el código",
  enterCodeAria: "Introduce el código que escuchas. Pulsa Espacio para reproducir el audio.",
  error: "Falló la verificación. Por favor intente nuevamente más tarde.",
  expired: "Verificación expirada. Por favor intente nuevamente.",
  verificationRequired: "¡Verificación requerida!",
  footer: 'Protegido por <a href="https://altcha.org/" target="_blank" aria-label="Visitar Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Obtener un desafío de audio",
  label: "No soy un robot",
  loading: "Cargando...",
  reload: "Recargar",
  verify: "Verificar",
  verified: "Verificado",
  verifying: "Verificando...",
  waitAlert: "Verificando... por favor espere."
};
globalThis.altchaI18n.set("es-es", pl);
const ml = {
  ariaLinkLabel: "Visitar Altcha.org",
  enterCode: "Ingresa el código",
  enterCodeAria: "Ingresa el código que escuchas. Presiona Espacio para reproducir el audio.",
  error: "Falló la verificación. Por favor vuelve a intentarlo más tarde.",
  expired: "La verificación expiró. Por favor inténtalo de nuevo.",
  verificationRequired: "¡Verificación requerida!",
  footer: 'Protegido por <a href="https://altcha.org/" target="_blank" aria-label="Visitar Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Obtener un reto de audio",
  label: "No soy un robot",
  loading: "Cargando...",
  reload: "Volver a cargar",
  verify: "Verificar",
  verified: "Verificado",
  verifying: "Verificando...",
  waitAlert: "Verificando... por favor espera."
};
globalThis.altchaI18n.set("es-419", ml);
const yl = {
  ariaLinkLabel: "Külasta Altcha.org",
  enterCode: "Sisesta kood",
  enterCodeAria: "Sisestage kuuldu kood. Vajutage tühikut, et esitada heli.",
  error: "Kinnitamine ebaõnnestus. Proovi hiljem uuesti.",
  expired: "Kinnitamine aegus. Proovi uuesti.",
  verificationRequired: "Kontroll on vajalik!",
  footer: 'Kaitstud <a href="https://altcha.org/" target="_blank" aria-label="Külasta Altcha.org">ALTCHA</a> poolt',
  getAudioChallenge: "Hangi heliülesanne",
  label: "Ma ei ole robot",
  loading: "Laadimine...",
  reload: "Laadi uuesti",
  verify: "Kinnita",
  verified: "Kinnitatud",
  verifying: "Kinnitamine...",
  waitAlert: "Kinnitamine... palun oota."
};
globalThis.altchaI18n.set("et", yl);
const Al = {
  ariaLinkLabel: "Bisitatu Altcha.org",
  enterCode: "Sartu kodea",
  enterCodeAria: "Sartu entzun duzun kodea. Sakatu Espazioa audioa erreproduzitzeko.",
  error: "Egiaztatzeak huts egin du. Saiatu berriro geroago.",
  expired: "Egiaztatzea iraungi da. Saiatu berriro.",
  verificationRequired: "Egiaztatzea beharrezkoa da!",
  footer: '<a href="https://altcha.org/" target="_blank" aria-label="Bisitatu Altcha.org">ALTCHA</a>k babestuta',
  getAudioChallenge: "Jaso audio-erronka bat",
  label: "Ez naiz robot bat",
  loading: "Kargatzen...",
  reload: "Birkargatu",
  verify: "Egiaztatu",
  verified: "Egiaztatuta",
  verifying: "Egiaztatzen...",
  waitAlert: "Egiaztatzen... itxaron mesedez."
};
globalThis.altchaI18n.set("eu", Al);
const kl = {
  ariaLinkLabel: "بازدید از Altcha.org",
  enterCode: "کد را وارد کنید",
  enterCodeAria: "کدی که می‌شنوید را وارد کنید. برای پخش صدا Space را فشار دهید.",
  error: "احراز هویت ناموفق بود. بعداً دوباره تلاش کنید.",
  expired: "احراز هویت منقضی شد. دوباره تلاش کنید.",
  footer: 'محافظت شده توسط <a href="https://altcha.org/" target="_blank" aria-label="بازدید از Altcha.org">ALTCHA</a>',
  getAudioChallenge: "دریافت چالش صوتی",
  label: "من ربات نیستم",
  loading: "در حال بارگذاری...",
  reload: "بارگذاری مجدد",
  verify: "تایید",
  verificationRequired: "احراز هویت لازم است!",
  verified: "تایید شد",
  verifying: "در حال تایید...",
  waitAlert: "در حال تایید... لطفا منتظر بمانید."
};
globalThis.altchaI18n.set("fa", kl);
const _l = {
  ariaLinkLabel: "Besicht Altcha.org",
  enterCode: "Code aginn",
  enterCodeAria: "Gitt de Code an deen dir héiert. Dréckt op d'Weltraumtast fir Audio ofzespillen.",
  error: "Verifikatioun ass feelgeschloen. Probéiert méi spéit nach emol.",
  expired: "Verifikatioun ofgelaf. Probéiert nach emol.",
  footer: 'Geschützt vun <a href="https://altcha.org/" target="_blank" aria-label="Besicht Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Kritt eng Audio-Herausfuerderung",
  label: "Ech sinn keen Robot",
  loading: "Lueden...",
  reload: "Nei lueden",
  verify: "Verifizéieren",
  verificationRequired: "Verifikatioun néideg!",
  verified: "Verifizéiert",
  verifying: "Verifizéieren...",
  waitAlert: "Verifizéieren... waart wgl."
};
globalThis.altchaI18n.set("lb", _l);
const wl = {
  ariaLinkLabel: "Vieraile sivulla Altcha.org",
  enterCode: "Syötä koodi",
  enterCodeAria: "Kirjoita kuulemasi koodi. Paina välilyöntiä toistaaksesi äänen.",
  error: "Varmennus epäonnistui. Yritä myöhemmin uudelleen.",
  expired: "Varmennus vanhentui. Yritä uudelleen.",
  verificationRequired: "Vahvistus vaaditaan!",
  footer: 'Suojattu <a href="https://altcha.org/" target="_blank" aria-label="Vieraile sivulla Altcha.org">ALTCHA</a>:lla',
  getAudioChallenge: "Hae äänitehtävä",
  label: "En ole robotti",
  loading: "Ladataan...",
  reload: "Lataa uudelleen",
  verify: "Vahvista",
  verified: "Vahvistettu",
  verifying: "Vahvistetaan...",
  waitAlert: "Vahvistetaan... odota hetki."
};
globalThis.altchaI18n.set("fi", wl);
const Cl = {
  ariaLinkLabel: "Visitez Altcha.org",
  enterCode: "Entrez le code",
  enterCodeAria: "Entrez le code que vous entendez. Appuyez sur la barre d'espace pour écouter l'audio.",
  error: "Échec de la vérification. Réessayez plus tard.",
  expired: "La vérification a expiré. Réessayez.",
  verificationRequired: "Vérification requise !",
  footer: 'Protégé par <a href="https://altcha.org/" target="_blank" aria-label="Visitez Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Obtenir un défi audio",
  label: "Pas un robot",
  loading: "Chargement...",
  reload: "Recharger",
  verify: "Vérifier",
  verified: "Vérifié",
  verifying: "Vérification en cours...",
  waitAlert: "Vérification en cours... veuillez patienter."
};
globalThis.altchaI18n.set("fr-ca", Cl);
const Ll = {
  ariaLinkLabel: "Visitez Altcha.org",
  enterCode: "Entrez le code",
  enterCodeAria: "Entrez le code que vous entendez. Appuyez sur Espace pour écouter l'audio.",
  error: "Échec de la vérification. Essayez à nouveau plus tard.",
  expired: "La vérification a expiré. Essayez à nouveau.",
  verificationRequired: "Vérification requise !",
  footer: 'Protégé par <a href="https://altcha.org/" target="_blank" aria-label="Visitez Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Obtenir un défi audio",
  label: "Pas un robot",
  loading: "Chargement...",
  reload: "Recharger",
  verify: "Vérifier",
  verified: "Vérifié",
  verifying: "Vérification en cours...",
  waitAlert: "Vérification en cours... veuillez patienter."
};
globalThis.altchaI18n.set("fr-fr", Ll);
const El = {
  ariaLinkLabel: "Tabhair cuairt ar Altcha.org",
  enterCode: "Iontráil cód",
  enterCodeAria: "Cuir isteach an cód a chloiseann tú. Brúigh Spás chun an fuaime a sheinm.",
  error: "Theip ar an bhfíorú. Bain triail eile as níos déanaí.",
  expired: "Tá an fíorú as feidhm. Bain triail eile as.",
  verificationRequired: "Fíorú riachtanach!",
  footer: 'Cosanta ag <a href="https://altcha.org/" target="_blank" aria-label="Tabhair cuairt ar Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Faigh dúshlán fuaime",
  label: "Níl mé i mo róbat",
  loading: "Á luchtú...",
  reload: "Athluchtaigh",
  verify: "Fíoraigh",
  verified: "Fíoraithe",
  verifying: "Fíorú ar siúl...",
  waitAlert: "Fíorú ar siúl... fan go fóill."
};
globalThis.altchaI18n.set("ga", El);
const xl = {
  ariaLinkLabel: "Posjetite Altcha.org",
  enterCode: "Unesite kod",
  enterCodeAria: "Unesite kod koji čujete. Pritisnite razmaknicu za reprodukciju zvuka.",
  error: "Provjera nije uspjela. Molimo pokušajte kasnije.",
  expired: "Provjera je istekla. Molimo pokušajte ponovo.",
  verificationRequired: "Potrebna je provjera!",
  footer: 'Zaštićeno od strane <a href="https://altcha.org/" target="_blank" aria-label="Posjetite Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Audio provjera",
  label: "Ja nisam robot",
  loading: "Učitavanje...",
  reload: "Ponovno učitaj",
  verify: "Provjeri",
  verified: "Provjereno",
  verifying: "Provjeravanje...",
  waitAlert: "Provjera je u tijeku... molimo pričekajte."
};
globalThis.altchaI18n.set("hr", xl);
const Tl = {
  ariaLinkLabel: "Látogass el az Altcha.org oldalra",
  enterCode: "Írja be a kódot",
  enterCodeAria: "Írja be a hallott kódot. Nyomja meg a Szóköz billentyűt a hang lejátszásához.",
  error: "A hitelesítés nem sikerült. Próbáld meg később újra.",
  expired: "A hitelesítés lejárt. Próbáld újra.",
  verificationRequired: "Ellenőrzés szükséges!",
  footer: 'Védve a következő által: <a href="https://altcha.org/" target="_blank" aria-label="Látogass el az Altcha.org oldalra">ALTCHA</a>',
  getAudioChallenge: "Hangalapú kihívás kérése",
  label: "Nem vagyok robot",
  loading: "Betöltés...",
  reload: "Újratöltés",
  verify: "Ellenőrzés",
  verified: "Ellenőrizve",
  verifying: "Ellenőrzés folyamatban...",
  waitAlert: "Ellenőrzés folyamatban... kérlek várj."
};
globalThis.altchaI18n.set("hu", Tl);
const Il = {
  ariaLinkLabel: "Heimsækja Altcha.org",
  enterCode: "Sláðu inn kóða",
  enterCodeAria: "Sláðu inn kóðann sem þú heyrir. Ýttu á Space til að spila hljóðið.",
  error: "Staðfesting mistókst. Reyndu aftur síðar.",
  expired: "Staðfesting er útrunnin. Reyndu aftur.",
  footer: 'Verndað af <a href="https://altcha.org/" target="_blank" aria-label="Heimsækja Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Fá hljóðáskorun",
  label: "Ég er ekki robot",
  loading: "Hleður...",
  reload: "Hleð aftur",
  verify: "Staðfesta",
  verificationRequired: "Staðfesting er nauðsynleg!",
  verified: "Staðfest",
  verifying: "Að staðfesta...",
  waitAlert: "Að staðfesta... vinsamlegast bíða."
};
globalThis.altchaI18n.set("is", Il);
const Vl = {
  ariaLinkLabel: "Visita Altcha.org",
  enterCode: "Inserisci il codice",
  enterCodeAria: "Inserisci il codice che senti. Premi Spazio per riprodurre l'audio.",
  error: "Verifica fallita. Riprova più tardi.",
  expired: "Verifica scaduta. Riprova.",
  verificationRequired: "Verifica richiesta!",
  footer: 'Protetto da <a href="https://altcha.org/" target="_blank" aria-label="Visita Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Ottieni una sfida audio",
  label: "Non sono un robot",
  loading: "Caricamento...",
  reload: "Ricarica",
  verify: "Verifica",
  verified: "Verificato",
  verifying: "Verifica in corso...",
  waitAlert: "Verifica in corso... attendere."
};
globalThis.altchaI18n.set("it", Vl);
const jl = {
  ariaLinkLabel: "Apsilankykite Altcha.org",
  enterCode: "Įveskite kodą",
  enterCodeAria: "Įveskite girdimą kodą. Paspauskite tarpo klavišą, kad grotumėte garso įrašą.",
  error: "Patvirtinimas nepavyko. Bandykite vėliau.",
  expired: "Patvirtinimo laikas baigėsi. Bandykite dar kartą.",
  verificationRequired: "Reikalingas patvirtinimas!",
  footer: 'Apsaugota <a href="https://altcha.org/" target="_blank" aria-label="Apsilankykite Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Gauti garso užduotį",
  label: "Aš nesu robotas",
  loading: "Įkeliama...",
  reload: "Įkelti iš naujo",
  verify: "Patvirtinti",
  verified: "Patvirtinta",
  verifying: "Tikrinama...",
  waitAlert: "Tikrinama... prašome palaukti."
};
globalThis.altchaI18n.set("lt", jl);
const Rl = {
  ariaLinkLabel: "Apmeklējiet Altcha.org",
  enterCode: "Ievadiet kodu",
  enterCodeAria: "Ievadiet dzirdamo kodu. Nospiediet atstarpes taustiņu, lai atskaņotu audio.",
  error: "Verifikācija neizdevās. Mēģiniet vēlāk vēlreiz.",
  expired: "Verifikācijas laiks ir beidzies. Mēģiniet vēlreiz.",
  verificationRequired: "Nepieciešama verifikācija!",
  footer: 'Aizsargāts ar <a href="https://altcha.org/" target="_blank" aria-label="Apmeklējiet Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Saņemt audio izaicinājumu",
  label: "Es neesmu robots",
  loading: "Notiek ielāde...",
  reload: "Pārlādēt",
  verify: "Verificēt",
  verified: "Verificēts",
  verifying: "Notiek verifikācija...",
  waitAlert: "Notiek verifikācija... lūdzu, uzgaidiet."
};
globalThis.altchaI18n.set("lv", Rl);
const Sl = {
  ariaLinkLabel: "Żur Altcha.org",
  enterCode: "Idħol il-kodiċi",
  enterCodeAria: "Idħol il-kodiċi li tisma'. Agħfas Spazju biex tindaqq l-awdjo.",
  error: "Il-verifika falliet. Erġa’ pprova aktar tard.",
  expired: "Il-verifika skadiet. Erġa’ pprova.",
  verificationRequired: "Verifika meħtieġa!",
  footer: 'Protett minn <a href="https://altcha.org/" target="_blank" aria-label="Żur Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Ikseb sfida bl-awdjo",
  label: "M’inix robot",
  loading: "Qed jitgħabba...",
  reload: "Ittella’ mill-ġdid",
  verify: "Ivverifika",
  verified: "Ivverifikat",
  verifying: "Verifika għaddejja...",
  waitAlert: "Verifika għaddejja... stenna ftit."
};
globalThis.altchaI18n.set("mt", Sl);
const Zi = {
  ariaLinkLabel: "Besøk Altcha.org",
  enterCode: "Skriv inn kode",
  enterCodeAria: "Skriv inn koden du hører. Trykk på Space for å spille av lyden.",
  error: "Verifisering mislyktes. Prøv igjen senere.",
  expired: "Verifiseringen utløp. Prøv igjen.",
  footer: 'Beskyttet av <a href="https://altcha.org/" target="_blank" aria-label="Besøk Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Få en lydutfordring",
  label: "Jeg er ikke en robot",
  loading: "Laster...",
  reload: "Last på nytt",
  verify: "Verifiser",
  verificationRequired: "Verifisering kreves!",
  verified: "Verifisert",
  verifying: "Verifiserer...",
  waitAlert: "Verifiserer... vennligst vent."
};
globalThis.altchaI18n.set("nb", Zi);
globalThis.altchaI18n.set("no", Zi);
const $l = {
  ariaLinkLabel: "Bezoek Altcha.org",
  enterCode: "Voer code in",
  enterCodeAria: "Voer de code in die je hoort. Druk op Spatie om de audio af te spelen.",
  error: "Verificatie mislukt. Probeer het later opnieuw.",
  expired: "Verificatie verlopen. Probeer het opnieuw.",
  verificationRequired: "Verificatie vereist!",
  footer: 'Beschermd door <a href="https://altcha.org/" target="_blank" aria-label="Bezoek Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Audio-uitdaging ontvangen",
  label: "Ik ben geen robot",
  loading: "Laden...",
  reload: "Herladen",
  verify: "Verifiëren",
  verified: "Geverifieerd",
  verifying: "Bezig met verifiëren...",
  waitAlert: "Bezig met verifiëren... even geduld a.u.b."
};
globalThis.altchaI18n.set("nl", $l);
const Pl = {
  ariaLinkLabel: "Odwiedź Altcha.org",
  enterCode: "Wprowadź kod",
  enterCodeAria: "Wpisz kod, który słyszysz. Naciśnij Spację, aby odtworzyć dźwięk.",
  error: "Weryfikacja nie powiodła się. Spróbuj ponownie później.",
  expired: "Weryfikacja wygasła. Spróbuj ponownie.",
  verificationRequired: "Wymagana weryfikacja!",
  footer: 'Chronione przez <a href="https://altcha.org/" target="_blank" aria-label="Odwiedź Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Pobierz zadanie dźwiękowe",
  label: "Nie jestem robotem",
  loading: "Ładowanie...",
  reload: "Odśwież",
  verify: "Zweryfikuj",
  verified: "Zweryfikowano",
  verifying: "Weryfikacja...",
  waitAlert: "Trwa weryfikacja... proszę czekać."
};
globalThis.altchaI18n.set("pl", Pl);
const zl = {
  ariaLinkLabel: "Visitar Altcha.org",
  enterCode: "Introduza o código",
  enterCodeAria: "Introduza o código que ouve. Prima Espaço para reproduzir o áudio.",
  error: "A verificação falhou. Por favor, tente novamente mais tarde.",
  expired: "Verificação expirada. Por favor, tente novamente.",
  verificationRequired: "Verificação necessária!",
  footer: 'Protegido por <a href="https://altcha.org/" target="_blank" aria-label="Visitar Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Obter desafio de áudio",
  label: "Não sou um robô",
  loading: "A carregar...",
  reload: "Recarregar",
  verify: "Verificar",
  verified: "Verificado",
  verifying: "A verificar...",
  waitAlert: "A verificar... por favor aguarde."
};
globalThis.altchaI18n.set("pt-pt", zl);
const Nl = {
  ariaLinkLabel: "Visitar Altcha.org",
  enterCode: "Digite o código",
  enterCodeAria: "Digite o código que você ouve. Pressione Espaço para reproduzir o áudio.",
  error: "Falha na verificação. Por favor, tente novamente mais tarde.",
  expired: "Verificação expirada. Por favor, tente novamente.",
  verificationRequired: "Verificação necessária!",
  footer: 'Protegido por <a href="https://altcha.org/" target="_blank" aria-label="Visitar Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Obter desafio de áudio",
  label: "Eu não sou um robô",
  loading: "Carregando...",
  reload: "Recarregar",
  verify: "Verificar",
  verified: "Verificado",
  verifying: "Verificando...",
  waitAlert: "Verificando... por favor aguarde."
};
globalThis.altchaI18n.set("pt-br", Nl);
const Dl = {
  ariaLinkLabel: "Vizitează Altcha.org",
  enterCode: "Introduceți codul",
  enterCodeAria: "Introduceți codul pe care îl auziți. Apăsați Spațiu pentru a reda audio.",
  error: "Verificarea a eșuat. Încearcă din nou mai târziu.",
  expired: "Verificarea a expirat. Încearcă din nou.",
  verificationRequired: "Verificare necesară!",
  footer: 'Protejat de <a href="https://altcha.org/" target="_blank" aria-label="Vizitează Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Obține o provocare audio",
  label: "Nu sunt un robot",
  loading: "Se încarcă...",
  reload: "Reîncarcă",
  verify: "Verifică",
  verified: "Verificat",
  verifying: "Se verifică...",
  waitAlert: "Se verifică... te rugăm să aștepți."
};
globalThis.altchaI18n.set("ro", Dl);
const ql = {
  ariaLinkLabel: "Перейти на Altcha.org",
  enterCode: "Введите код",
  enterCodeAria: "Введите код, который слышите. Нажмите пробел для воспроизведения аудио.",
  error: "Ошибка верификации. Попробуйте позже.",
  expired: "Срок действия верификации истек. Попробуйте снова.",
  verificationRequired: "Требуется проверка!",
  footer: 'Защищено <a href="https://altcha.org/" target="_blank" aria-label="Перейти на Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Получить аудио задачу",
  label: "Я не робот",
  loading: "Загрузка...",
  reload: "Перезагрузить",
  verify: "Проверить",
  verified: "Проверено",
  verifying: "Идет проверка...",
  waitAlert: "Идет проверка... Пожалуйста, подождите."
};
globalThis.altchaI18n.set("ru", ql);
const Hl = {
  ariaLinkLabel: "Navštívte Altcha.org",
  enterCode: "Zadajte kód",
  enterCodeAria: "Zadajte kód, ktorý počujete. Stlačením medzerníka prehráte zvuk.",
  error: "Verifikácia zlyhala. Skúste to znova neskôr.",
  expired: "Verifikácia vypršala. Skúste to znova.",
  verificationRequired: "Vyžaduje sa overenie!",
  footer: 'Chránené <a href="https://altcha.org/" target="_blank" aria-label="Navštívte Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Získať audio výzvu",
  label: "Nie som robot",
  loading: "Načítava sa...",
  reload: "Obnoviť",
  verify: "Verifikovať",
  verified: "Verifikované",
  verifying: "Prebieha verifikácia...",
  waitAlert: "Prebieha verifikácia... prosím čakajte."
};
globalThis.altchaI18n.set("sk", Hl);
const Ol = {
  ariaLinkLabel: "Obiščite Altcha.org",
  enterCode: "Vnesite kodo",
  enterCodeAria: "Vnesite kodo, ki jo slišite. Pritisnite preslednico za predvajanje zvoka.",
  error: "Preverjanje ni uspelo. Poskusite znova kasneje.",
  expired: "Preverjanje je poteklo. Poskusite znova.",
  verificationRequired: "Potrebna je preveritev!",
  footer: 'Zaščiteno z <a href="https://altcha.org/" target="_blank" aria-label="Obiščite Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Pridobite zvočni izziv",
  label: "Nisem robot",
  loading: "Nalagam...",
  reload: "Ponovno naloži",
  verify: "Preveri",
  verified: "Preverjeno",
  verifying: "Preverjanje...",
  waitAlert: "Preverjanje... prosim počakajte."
};
globalThis.altchaI18n.set("sl", Ol);
const Fl = {
  ariaLinkLabel: "Vizitoni Altcha.org",
  enterCode: "Fut kodin",
  enterCodeAria: "Fut kodin që dëgjon. Shtypni Hapësirë për të luajtur audio.",
  error: "Verifikimi dështoi. Provoni përsëri më vonë.",
  expired: "Verifikimi ka skaduar. Provoni përsëri.",
  footer: 'I mbrojtur nga <a href="https://altcha.org/" target="_blank" aria-label="Vizitoni Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Merr një sfidë audio",
  label: "Unë nuk jam një robot",
  loading: "Duke u ngarkuar...",
  reload: "Ringarko",
  verify: "Verifiko",
  verificationRequired: "Kërkohet verifikimi!",
  verified: "I verifikuar",
  verifying: "Duke verifikuar...",
  waitAlert: "Duke verifikuar... ju lutem prisni."
};
globalThis.altchaI18n.set("sq", Fl);
const Ml = {
  ariaLinkLabel: "Posetite Altcha.org",
  enterCode: "Unesite kod",
  enterCodeAria: "Unesite kod koji čujete. Pritisnite Space da biste pustili zvuk.",
  error: "Verifikacija nije uspela. Pokušajte ponovo kasnije.",
  expired: "Verifikacija je istekla. Pokušajte ponovo.",
  footer: 'Zaštićeno od strane <a href="https://altcha.org/" target="_blank" aria-label="Posetite Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Dohvatite audio izazov",
  label: "Nisam robot",
  loading: "Učitavanje...",
  reload: "Ponovo učitaj",
  verify: "Verifikuj",
  verificationRequired: "Verifikacija je obavezna!",
  verified: "Verifikovano",
  verifying: "Verifikacija u toku...",
  waitAlert: "Verifikacija u toku... molimo vas da sačekate."
};
globalThis.altchaI18n.set("sr", Ml);
const Bl = {
  ariaLinkLabel: "Besök Altcha.org",
  enterCode: "Ange kod",
  enterCodeAria: "Ange koden du hör. Tryck på mellanslag för att spela upp ljudet.",
  error: "Verifiering misslyckades. Försök igen senare.",
  expired: "Verifieringen har gått ut. Försök igen.",
  verificationRequired: "Verifiering krävs!",
  footer: 'Skyddad av <a href="https://altcha.org/" target="_blank" aria-label="Besök Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Få ljudutmaning",
  label: "Jag är inte en robot",
  loading: "Laddar...",
  reload: "Ladda om",
  verify: "Verifiera",
  verified: "Verifierad",
  verifying: "Verifierar...",
  waitAlert: "Verifierar... vänligen vänta."
};
globalThis.altchaI18n.set("sv", Bl);
const Ul = {
  ariaLinkLabel: "Altcha.org'yu ziyaret edin",
  enterCode: "Kodu girin",
  enterCodeAria: "Duyduğunuz kodu girin. Ses dosyasını oynatmak için Boşluk tuşuna basın.",
  error: "Doğrulama başarısız oldu. Lütfen daha sonra tekrar deneyin.",
  expired: "Doğrulama süresi doldu. Lütfen tekrar deneyin.",
  verificationRequired: "Doğrulama gerekli!",
  footer: `ALTCHA tarafından korunuyor <a href="https://altcha.org/" target="_blank" aria-label="Altcha.org'yu ziyaret edin">ALTCHA</a>`,
  getAudioChallenge: "Sesli doğrulama al",
  label: "Ben robot değilim",
  loading: "Yükleniyor...",
  reload: "Yeniden yükle",
  verify: "Doğrula",
  verified: "Doğrulandı",
  verifying: "Doğrulama yapılıyor...",
  waitAlert: "Doğrulama yapılıyor... lütfen bekleyin."
};
globalThis.altchaI18n.set("tr", Ul);
const Gl = {
  ariaLinkLabel: "Відвідати Altcha.org",
  enterCode: "Введіть код",
  enterCodeAria: "Введіть код, який ви чуєте. Натисніть пробіл, щоб відтворити аудіо.",
  error: "Перевірка не вдалася. Спробуйте пізніше.",
  expired: "Перевірка прострочена. Спробуйте знову.",
  verificationRequired: "Потрібна перевірка!",
  footer: 'Захищено <a href="https://altcha.org/" target="_blank" aria-label="Відвідати Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Отримати аудіо-челлендж",
  label: "Я не робот",
  loading: "Завантаження...",
  reload: "Перезавантажити",
  verify: "Перевірити",
  verified: "Перевірено",
  verifying: "Перевіряється...",
  waitAlert: "Перевірка... будь ласка, зачекайте."
};
globalThis.altchaI18n.set("uk", Gl);
const Wl = {
  ariaLinkLabel: "Besoek Altcha.org",
  enterCode: "Voer kode in",
  enterCodeAria: "Voer die kode in wat jy hoor. Druk Spasie om die klank af te speel.",
  error: "Verifikasie het misluk. Probeer later weer.",
  expired: "Verifikasie het verval. Probeer weer.",
  footer: 'Beskerm deur <a href="https://altcha.org/" target="_blank" aria-label="Besoek Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Kry 'n klankuitdaging",
  label: "Ek is nie 'n robot nie",
  loading: "Laai...",
  reload: "Laai weer",
  verify: "Verifieer",
  verificationRequired: "Verifikasie is vereis!",
  verified: "Geverifieer",
  verifying: "Verifieer...",
  waitAlert: "Verifieer... wag asseblief."
};
globalThis.altchaI18n.set("af", Wl);
const Zl = {
  ariaLinkLabel: "Altcha.org ይጎብኙ",
  enterCode: "ኮድ አስገባ",
  enterCodeAria: "የሚሰማዎትን ኮድ ያስገቡ። ድምጽ ለመጫወት Space ን ይጫኑ።",
  error: "ማረጋገጫ አልተሳካም። በኋላ ላይ እንደገና ይሞክሩ።",
  expired: "ማረጋገጫው ጊዜው አልፏል። እንደገና ይሞክሩ።",
  footer: 'በ <a href="https://altcha.org/" target="_blank" aria-label="Altcha.org ይጎብኙ">ALTCHA</a> የተጠበቀ',
  getAudioChallenge: "የድምጽ ፈተና ያግኙ",
  label: "እኔ ሮቦት አይደለሁም",
  loading: "በመጫን ላይ...",
  reload: "እንደገና ጫን",
  verify: "አረጋግጥ",
  verificationRequired: "ማረጋገጫ ያስፈልጋል!",
  verified: "ተረጋግጧል",
  verifying: "በማረጋገጥ ላይ...",
  waitAlert: "በማረጋገጥ ላይ... እባክዎ ይጠብቁ።"
};
globalThis.altchaI18n.set("am", Zl);
const Yl = {
  ariaLinkLabel: "Tembelea Altcha.org",
  enterCode: "Weka nambari",
  enterCodeAria: "Weka nambari unayosikia. Bonyeza Space kucheza sauti.",
  error: "Uthibitishaji umeshindwa. Jaribu tena baadaye.",
  expired: "Uthibitishaji umeisha. Jaribu tena.",
  footer: 'Imealindwa na <a href="https://altcha.org/" target="_blank" aria-label="Tembelea Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Pata changamoto ya sauti",
  label: "Mimi sio roboti",
  loading: "Inapakia...",
  reload: "Pakia tena",
  verify: "Thibitisha",
  verificationRequired: "Uthibitishaji unahitajika!",
  verified: "Imethibitishwa",
  verifying: "Inathibitisha...",
  waitAlert: "Inathibitisha... tafadhali subiri."
};
globalThis.altchaI18n.set("sw", Yl);
const Kl = {
  ariaLinkLabel: "Ṣe abẹwo si Altcha.org",
  enterCode: "Tẹ koodu sii",
  enterCodeAria: "Tẹ koodu ti o ngbọ sii. Tẹ Space lati ṣe ohun orin.",
  error: "Ìdájọ́kòwò kò ṣẹ́ṣe. Gbiyanju lẹẹkansi ni ọjọ́ iwájú.",
  expired: "Ìdájọ́kòwò ti pari. Gbiyanju lẹẹkansi.",
  footer: 'Ti wa ni ààbò nipasẹ <a href="https://altcha.org/" target="_blank" aria-label="Ṣe abẹwo si Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Gba ìjàdú ohùn",
  label: "Emi kii ṣe ẹrọ",
  loading: "Ó ń gbé sílẹ̀...",
  reload: "Tún gbé wọlé",
  verify: "Ṣàdájọ́",
  verificationRequired: "Ìdájọ́kòwò ni a nílò!",
  verified: "A ti dájọ́",
  verifying: "Ó ń ṣàdájọ́...",
  waitAlert: "Ó ń ṣàdájọ́... ẹ jọ̀ọ́ ẹ duro."
};
globalThis.altchaI18n.set("yo", Kl);
const Jl = {
  ariaLinkLabel: "Altcha.org পরিদর্শন করুন",
  enterCode: "কোড লিখুন",
  enterCodeAria: "আপনি যে কোড শুনতে পান তা লিখুন। অডিও প্লে করতে স্পেস বাটন টিপুন।",
  error: "যাচাইকরণ ব্যর্থ হয়েছে। পরে আবার চেষ্টা করুন।",
  expired: "যাচাইকরণ সময়সীমা শেষ হয়েছে। আবার চেষ্টা করুন।",
  verificationRequired: "যাচাই প্রয়োজন!",
  footer: 'দ্বারা সুরক্ষিত <a href="https://altcha.org/" target="_blank" aria-label="Altcha.org পরিদর্শন করুন">ALTCHA</a>',
  getAudioChallenge: "অডিও চ্যালেঞ্জ নিন",
  label: "আমি রোবট নই",
  loading: "লোড হচ্ছে...",
  reload: "পুনরায় লোড করুন",
  verify: "যাচাই করুন",
  verified: "যাচাই করা হয়েছে",
  verifying: "যাচাই করা হচ্ছে...",
  waitAlert: "যাচাই করা হচ্ছে... দয়া করে অপেক্ষা করুন।"
};
globalThis.altchaI18n.set("bn", Jl);
const Xl = {
  ariaLinkLabel: "בקר באתר Altcha.org",
  enterCode: "הזן קוד",
  enterCodeAria: "הזן את הקוד שאתה שומע. לחץ על רווח להפעלת השמע.",
  error: "האימות נכשל. נסה שוב מאוחר יותר.",
  expired: "תוקף האימות פג. נסה שוב.",
  verificationRequired: "נדרש אימות!",
  footer: 'מוגן על ידי <a href="https://altcha.org/" target="_blank" aria-label="בקר באתר Altcha.org">ALTCHA</a>',
  getAudioChallenge: "קבל אתגר שמע",
  label: "אני לא רובוט",
  loading: "טוען...",
  reload: "טען מחדש",
  verify: "אמת",
  verified: "אומת",
  verifying: "מאמת...",
  waitAlert: "מבצע אימות... אנא המתן."
};
globalThis.altchaI18n.set("he", Xl);
const Ql = {
  ariaLinkLabel: "Altcha.org पर जाएं",
  enterCode: "कोड दर्ज करेंं",
  enterCodeAria: "आप जो कोड सुनते हैं उसे दर्ज करें। ऑडियो चलाने के लिए स्पेस दबाएं।",
  error: "सत्यापन विफल। कृपया बाद में फिर से प्रयास करें।",
  expired: "सत्यापन समाप्त हो गया है। कृपया पुनः प्रयास करें।",
  verificationRequired: "सत्यापन आवश्यक है!",
  footer: 'द्वारा संरक्षित <a href="https://altcha.org/" target="_blank" aria-label="Altcha.org पर जाएं">ALTCHA</a>',
  getAudioChallenge: "ऑडियो चुनौती प्राप्त करें",
  label: "मैं रोबोट नहीं हूँ",
  loading: "लोड हो रहा है...",
  reload: "पुनः लोड करें",
  verify: "सत्यापित करें",
  verified: "सत्यापित",
  verifying: "सत्यापित कर रहे हैं...",
  waitAlert: "सत्यापित किया जा रहा है... कृपया प्रतीक्षा करें।"
};
globalThis.altchaI18n.set("hi", Ql);
const es = {
  ariaLinkLabel: "Kunjungi Altcha.org",
  enterCode: "Masukkan kode",
  enterCodeAria: "Masukkan kode yang Anda dengar. Tekan Spasi untuk memutar audio.",
  error: "Verifikasi gagal. Coba lagi nanti.",
  expired: "Verifikasi telah kedaluwarsa. Coba lagi.",
  verificationRequired: "Verifikasi diperlukan!",
  footer: 'Dilindungi oleh <a href="https://altcha.org/" target="_blank" aria-label="Kunjungi Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Dapatkan tantangan audio",
  label: "Saya bukan robot",
  loading: "Memuat...",
  reload: "Muat ulang",
  verify: "Verifikasi",
  verified: "Terverifikasi",
  verifying: "Memverifikasi...",
  waitAlert: "Memverifikasi... harap tunggu."
};
globalThis.altchaI18n.set("id", es);
const ts = {
  ariaLinkLabel: "Altcha.orgを訪問",
  enterCode: "コードを入力",
  enterCodeAria: "聞こえるコードを入力してください。スペースキーを押して音声を再生します。",
  error: "認証に失敗しました。後でもう一度試してください。",
  expired: "認証が期限切れです。再試行してください。",
  verificationRequired: "認証が必要です！",
  footer: '保護されています <a href="https://altcha.org/" target="_blank" aria-label="Altcha.orgを訪問">ALTCHA</a>',
  getAudioChallenge: "音声チャレンジを取得",
  label: "私はロボットではありません",
  loading: "読み込み中...",
  reload: "再読み込み",
  verify: "確認",
  verified: "確認済み",
  verifying: "確認中...",
  waitAlert: "確認中...少々お待ちください。"
};
globalThis.altchaI18n.set("ja", ts);
const rs = {
  ariaLinkLabel: "Altcha.org 방문하기",
  enterCode: "코드 입력",
  enterCodeAria: "들리는 코드를 입력하세요. 스페이스 바를 눌러 오디오를 재생합니다.",
  error: "인증 실패. 나중에 다시 시도해주세요.",
  expired: "인증이 만료되었습니다. 다시 시도해주세요.",
  verificationRequired: "인증이 필요합니다!",
  footer: 'ALTCHA에서 보호됨 <a href="https://altcha.org/" target="_blank" aria-label="Altcha.org 방문하기">ALTCHA</a>',
  getAudioChallenge: "오디오 챌린지 받기",
  label: "저는 로봇이 아닙니다",
  loading: "로딩 중...",
  reload: "새로 고침",
  verify: "확인",
  verified: "확인됨",
  verifying: "확인 중...",
  waitAlert: "확인 중... 잠시만 기다려주세요."
};
globalThis.altchaI18n.set("ko", rs);
const as = {
  ariaLinkLabel: "Altcha.org сайтына кіру",
  enterCode: "Кодты енгізіңіз",
  enterCodeAria: "Естіген кодыңызды енгізіңіз. Аудионы ойнату үшін Бос орынды басыңыз.",
  error: "Тексеру сәтсіз аяқталды. Кейінірек қайталаңыз.",
  expired: "Тексеру мерзімі аяқталды. Қайталаңыз.",
  footer: '<a href="https://altcha.org/" target="_blank" aria-label="Altcha.org сайтына кіру">ALTCHA</a> қорғайды',
  getAudioChallenge: "Аудио сынақ алу",
  label: "Мен робот емеспін",
  loading: "Жүктелуде...",
  reload: "Қайта жүктеу",
  verify: "Тексеру",
  verificationRequired: "Тексеру талап етіледі!",
  verified: "Тексерілді",
  verifying: "Тексеруде...",
  waitAlert: "Тексерілуде... күте тұрыңыз."
};
globalThis.altchaI18n.set("kk", as);
const is = {
  ariaLinkLabel: "Altcha.org भेट द्या",
  enterCode: "कोड टाकाा",
  enterCodeAria: "तुम्ही ऐकत असलेला कोड टाका. ऑडिओ प्ले करण्यासाठी स्पेस दाबा.",
  error: "पुष्टीकरण अयशस्वी झाले. कृपया नंतर पुन्हा प्रयत्न करा.",
  expired: "पुष्टीकरण कालबाह्य झाले आहे. कृपया पुन्हा प्रयत्न करा.",
  verificationRequired: "पडताळणी आवश्यक आहे!",
  footer: 'द्वारे संरक्षित <a href="https://altcha.org/" target="_blank" aria-label="Altcha.org भेट द्या">ALTCHA</a>',
  getAudioChallenge: "ऑडिओ चॅलेंज मिळवा",
  label: "मी रोबोट नाही",
  loading: "लोड होत आहे...",
  reload: "पुन्हा लोड करा",
  verify: "पुष्टीकरण करा",
  verified: "पुष्टीकरण झाले",
  verifying: "पुष्टीकरण करत आहे...",
  waitAlert: "पुष्टीकरण करत आहे... कृपया थोडा वेळ थांबा."
};
globalThis.altchaI18n.set("mr", is);
const ns = {
  ariaLinkLabel: "Altcha.org ஐ பார்வையிடவும்",
  enterCode: "குறியீட்டை உள்ளிடவும்",
  enterCodeAria: "நீங்கள் கேட்கும் குறியீட்டை உள்ளிடவும். ஆடியோவை இயக்க Space ஐ அழுத்தவும்.",
  error: "சரிபார்ப்பு தோல்வி. பிறகு மீண்டும் முயற்சிக்கவும்.",
  expired: "சரிபார்ப்பு காலாவதியானது. மீண்டும் முயற்சிக்கவும்.",
  verificationRequired: "சரிபார்ப்பு தேவை!",
  footer: 'மூலமாக பாதுகாக்கப்பட்டவை <a href="https://altcha.org/" target="_blank" aria-label="Altcha.org ஐ பார்வையிடவும்">ALTCHA</a>',
  getAudioChallenge: "ஒலி சவாலை பெறவும்",
  label: "நான் ரோபோடான அல்ல",
  loading: "செயலாக்கம்...",
  reload: "மீண்டும் புதுப்பிக்கவும்",
  verify: "சரிபார்க்கவும்",
  verified: "சரிபார்க்கப்பட்டது",
  verifying: "சரிபார்க்கப்படுகிறது...",
  waitAlert: "சரிபார்க்கப்படுகிறது... தயவுசெய்து காத்திருக்கவும்."
};
globalThis.altchaI18n.set("ta", ns);
const os = {
  ariaLinkLabel: "Altcha.org సందర్శించండి",
  enterCode: "కోడ్‌ని నమోదు చేయండి",
  enterCodeAria: "మీరు విన్న కోడ్‌ని నమోదు చేయండి. ఆడియో ప్లే చేయడానికి స్పేస్‌ను నొక్కండి.",
  error: "చెకింగ్ విఫలమైంది. దయచేసి మరల ప్రయత్నించండి.",
  expired: "చెకింగ్ కాలం ముగిసింది. దయచేసి మరల ప్రయత్నించండి.",
  verificationRequired: "ధృవీకరణ అవసరం!",
  footer: 'ఈ సైట్ రక్షించబడింది <a href="https://altcha.org/" target="_blank" aria-label="Altcha.org సందర్శించండి">ALTCHA</a>',
  getAudioChallenge: "ఆడియో ఛాలెంజ్ పొందండి",
  label: "నేను రోబోట్ కాదు",
  loading: "లోడ్ అవుతోంది...",
  reload: "మళ్ళీ లోడ్ చేయండి",
  verify: "ధ్రువీకరించు",
  verified: "ధ్రువీకరించబడింది",
  verifying: "ధ్రువీకరణ జరుగుతుంది...",
  waitAlert: "ధ్రువీకరణ జరుగుతుంది... దయచేసి వేచి ఉండండి."
};
globalThis.altchaI18n.set("te", os);
const ls = {
  ariaLinkLabel: "เยี่ยมชม Altcha.org",
  enterCode: "ป้อนรหัส",
  enterCodeAria: "ป้อนรหัสที่คุณได้ยิน กด Space เพื่อเล่นเสียง",
  error: "การตรวจสอบล้มเหลว กรุณาลองอีกครั้งภายหลัง",
  expired: "การตรวจสอบหมดอายุ กรุณาลองใหม่",
  verificationRequired: "จำเป็นต้องตรวจสอบ!",
  footer: 'ป้องกันโดย <a href="https://altcha.org/" target="_blank" aria-label="เยี่ยมชม Altcha.org">ALTCHA</a>',
  getAudioChallenge: "รับการท้าทายเสียง",
  label: "ฉันไม่ใช่บอท",
  loading: "กำลังโหลด...",
  reload: "โหลดใหม่",
  verify: "ตรวจสอบ",
  verified: "ตรวจสอบแล้ว",
  verifying: "กำลังตรวจสอบ...",
  waitAlert: "กำลังตรวจสอบ... กรุณารอ"
};
globalThis.altchaI18n.set("th", ls);
const ss = {
  ariaLinkLabel: "Altcha.org پر جائیں",
  enterCode: "کوڈ درج کریں",
  enterCodeAria: "جو کوڈ آپ سنتے ہیں وہ درج کریں۔ آڈیو چلانے کے لیے اسپیس دبائیں۔",
  error: "توثیق ناکام ہو گئی۔ براہ کرم بعد میں دوبارہ کوشش کریں۔",
  expired: "توثیق کی مدت ختم ہو گئی ہے۔ براہ کرم دوبارہ کوشش کریں۔",
  verificationRequired: "تصدیق ضروری ہے!",
  footer: 'کے ذریعے محفوظ <a href="https://altcha.org/" target="_blank" aria-label="Altcha.org پر جائیں">ALTCHA</a>',
  getAudioChallenge: "آڈیو چیلنج حاصل کریں",
  label: "میں روبوٹ نہیں ہوں",
  loading: "لوڈ ہو رہا ہے...",
  reload: "دوبارہ لوڈ کریں",
  verify: "توثیق کریں",
  verified: "توثیق شدہ",
  verifying: "توثیق ہو رہی ہے...",
  waitAlert: "توثیق ہو رہی ہے... براہ کرم انتظار کریں۔"
};
globalThis.altchaI18n.set("ur", ss);
const fs = {
  ariaLinkLabel: "Altcha.org saytiga tashrif buyuring",
  enterCode: "Kodni kiriting",
  enterCodeAria: "Eshitgan kodingizni kiriting. Audioni ijro etish uchun Bo'sh joy tugmasini bosing.",
  error: "Tekshiruv muvaffaqiyatsiz tugadi. Keyinroq qayta urinib ko'ring.",
  expired: "Tekshiruv muddati tugadi. Qayta urinib ko'ring.",
  footer: '<a href="https://altcha.org/" target="_blank" aria-label="Altcha.org saytiga tashrif buyuring">ALTCHA</a> tomonidan himoyalangan',
  getAudioChallenge: "Audio sinovni olish",
  label: "Men robot emasman",
  loading: "Yuklanmoqda...",
  reload: "Qayta yuklash",
  verify: "Tekshirish",
  verificationRequired: "Tekshiruv talab qilinadi!",
  verified: "Tekshirildi",
  verifying: "Tekshirilmoqda...",
  waitAlert: "Tekshirilmoqda... iltimos kuting."
};
globalThis.altchaI18n.set("uz", fs);
const cs = {
  ariaLinkLabel: "Truy cập Altcha.org",
  enterCode: "Nhập mã",
  enterCodeAria: "Nhập mã bạn nghe được. Nhấn Phím cách để phát âm thanh.",
  error: "Xác minh thất bại. Vui lòng thử lại sau.",
  expired: "Xác minh đã hết hạn. Vui lòng thử lại.",
  verificationRequired: "Yêu cầu xác minh!",
  footer: 'Được bảo vệ bởi <a href="https://altcha.org/" target="_blank" aria-label="Truy cập Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Nhận thử thách âm thanh",
  label: "Tôi không phải là robot",
  loading: "Đang tải...",
  reload: "Tải lại",
  verify: "Xác minh",
  verified: "Đã xác minh",
  verifying: "Đang xác minh...",
  waitAlert: "Đang xác minh... vui lòng chờ."
};
globalThis.altchaI18n.set("vi", cs);
const us = {
  ariaLinkLabel: "访问 Altcha.org",
  enterCode: "输入代码",
  enterCodeAria: "输入您听到的代码。按空格键播放音频。",
  error: "验证失败。稍后再试。",
  expired: "验证已过期。请重试。",
  verificationRequired: "需要验证！",
  footer: '由 <a href="https://altcha.org/" target="_blank" aria-label="访问 Altcha.org">ALTCHA</a> 保护',
  getAudioChallenge: "获取音频挑战",
  label: "我不是机器人",
  loading: "加载中...",
  reload: "重新加载",
  verify: "验证",
  verified: "已验证",
  verifying: "正在验证...",
  waitAlert: "正在验证... 请稍等。"
};
globalThis.altchaI18n.set("zh-cn", us);
const ds = {
  ariaLinkLabel: "訪問 Altcha.org",
  enterCode: "輸入代碼",
  enterCodeAria: "輸入您聽到的代碼。按空格鍵播放音頻。",
  error: "驗證失敗。稍後再試。",
  expired: "驗證已過期。請重試。",
  verificationRequired: "需要驗證！",
  footer: '由 <a href="https://altcha.org/" target="_blank" aria-label="訪問 Altcha.org">ALTCHA</a> 保護',
  getAudioChallenge: "獲取音頻挑戰",
  label: "我不是機器人",
  loading: "載入中...",
  reload: "重新載入",
  verify: "驗證",
  verified: "已驗證",
  verifying: "正在驗證...",
  waitAlert: "正在驗證... 請稍等。"
};
globalThis.altchaI18n.set("zh-tw", ds);
const Yi = `(function(){"use strict";const d=new TextEncoder;function p(e){return[...new Uint8Array(e)].map(t=>t.toString(16).padStart(2,"0")).join("")}async function b(e,t,r){if(typeof crypto>"u"||!("subtle"in crypto)||!("digest"in crypto.subtle))throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");return p(await crypto.subtle.digest(r.toUpperCase(),d.encode(e+t)))}function w(e,t,r="SHA-256",n=1e6,s=0){const o=new AbortController,a=Date.now();return{promise:(async()=>{for(let c=s;c<=n;c+=1){if(o.signal.aborted)return null;if(await b(t,c,r)===e)return{number:c,took:Date.now()-a}}return null})(),controller:o}}function h(e){const t=atob(e),r=new Uint8Array(t.length);for(let n=0;n<t.length;n++)r[n]=t.charCodeAt(n);return r}function g(e,t=12){const r=new Uint8Array(t);for(let n=0;n<t;n++)r[n]=e%256,e=Math.floor(e/256);return r}async function m(e,t="",r=1e6,n=0){const s="AES-GCM",o=new AbortController,a=Date.now(),l=async()=>{for(let u=n;u<=r;u+=1){if(o.signal.aborted||!c||!y)return null;try{const f=await crypto.subtle.decrypt({name:s,iv:g(u)},c,y);if(f)return{clearText:new TextDecoder().decode(f),took:Date.now()-a}}catch{}}return null};let c=null,y=null;try{y=h(e);const u=await crypto.subtle.digest("SHA-256",d.encode(t));c=await crypto.subtle.importKey("raw",u,s,!1,["decrypt"])}catch{return{promise:Promise.reject(),controller:o}}return{promise:l(),controller:o}}let i;onmessage=async e=>{const{type:t,payload:r,start:n,max:s}=e.data;let o=null;if(t==="abort")i==null||i.abort(),i=void 0;else if(t==="work"){if("obfuscated"in r){const{key:a,obfuscated:l}=r||{};o=await m(l,a,s,n)}else{const{algorithm:a,challenge:l,salt:c}=r||{};o=w(l,c,a,s,n)}i=o.controller,o.promise.then(a=>{self.postMessage(a&&{...a,worker:!0})})}}})();
`, Qa = typeof self < "u" && self.Blob && new Blob([Yi], { type: "text/javascript;charset=utf-8" });
function hs(e) {
  let t;
  try {
    if (t = Qa && (self.URL || self.webkitURL).createObjectURL(Qa), !t) throw "";
    const r = new Worker(t, {
      name: e == null ? void 0 : e.name
    });
    return r.addEventListener("error", () => {
      (self.URL || self.webkitURL).revokeObjectURL(t);
    }), r;
  } catch {
    return new Worker(
      "data:text/javascript;charset=utf-8," + encodeURIComponent(Yi),
      {
        name: e == null ? void 0 : e.name
      }
    );
  } finally {
    t && (self.URL || self.webkitURL).revokeObjectURL(t);
  }
}
const gs = "5";
var ti;
typeof window < "u" && ((ti = window.__svelte ?? (window.__svelte = {})).v ?? (ti.v = /* @__PURE__ */ new Set())).add(gs);
const Ki = new TextEncoder();
function vs(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function bs(e, t = "SHA-256", r = 1e5) {
  const i = Date.now().toString(16);
  e || (e = Math.round(Math.random() * r));
  const l = await Ji(i, e, t);
  return {
    algorithm: t,
    challenge: l,
    salt: i,
    signature: ""
  };
}
async function Ji(e, t, r) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return vs(
    await crypto.subtle.digest(
      r.toUpperCase(),
      Ki.encode(e + t)
    )
  );
}
function ps(e, t, r = "SHA-256", i = 1e6, l = 0) {
  const n = new AbortController(), c = Date.now();
  return {
    promise: (async () => {
      for (let u = l; u <= i; u += 1) {
        if (n.signal.aborted)
          return null;
        if (await Ji(t, u, r) === e)
          return {
            number: u,
            took: Date.now() - c
          };
      }
      return null;
    })(),
    controller: n
  };
}
function ei() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function ms(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let i = 0; i < t.length; i++)
    r[i] = t.charCodeAt(i);
  return r;
}
function ys(e, t = 12) {
  const r = new Uint8Array(t);
  for (let i = 0; i < t; i++)
    r[i] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function As(e, t = "", r = 1e6, i = 0) {
  const l = "AES-GCM", n = new AbortController(), c = Date.now(), s = async () => {
    for (let m = i; m <= r; m += 1) {
      if (n.signal.aborted || !u || !d)
        return null;
      try {
        const g = await crypto.subtle.decrypt(
          {
            name: l,
            iv: ys(m)
          },
          u,
          d
        );
        if (g)
          return {
            clearText: new TextDecoder().decode(g),
            took: Date.now() - c
          };
      } catch {
      }
    }
    return null;
  };
  let u = null, d = null;
  try {
    d = ms(e);
    const m = await crypto.subtle.digest(
      "SHA-256",
      Ki.encode(t)
    );
    u = await crypto.subtle.importKey(
      "raw",
      m,
      l,
      !1,
      ["decrypt"]
    );
  } catch {
    return {
      promise: Promise.reject(),
      controller: n
    };
  }
  return {
    promise: s(),
    controller: n
  };
}
var k = /* @__PURE__ */ ((e) => (e.CODE = "code", e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(k || {}), te = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.LOADING = "loading", e.PLAYING = "playing", e.PAUSED = "paused", e.READY = "ready", e))(te || {});
const ks = {
  ariaLinkLabel: "Visit Altcha.org",
  enterCode: "Enter code",
  enterCodeAria: "Enter code you hear. Press Space to play audio.",
  error: "Verification failed. Try again later.",
  expired: "Verification expired. Try again.",
  footer: 'Protected by <a href="https://altcha.org/" target="_blank" aria-label="Visit Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Get an audio challenge",
  label: "I'm not a robot",
  loading: "Loading...",
  reload: "Reload",
  verify: "Verify",
  verificationRequired: "Verification required!",
  verified: "Verified",
  verifying: "Verifying...",
  waitAlert: "Verifying... please wait."
};
globalThis.altchaI18n.set("en", ks);
const $r = (e, t) => {
  let r = /* @__PURE__ */ mo(() => Zn(t == null ? void 0 : t(), 24));
  var i = Ls();
  Ie(() => {
    I(i, "width", o(r)), I(i, "height", o(r));
  }), M(e, i);
};
function _s(e, t) {
  e.code === "Space" && (e.preventDefault(), e.stopImmediatePropagation(), t());
}
function ws(e, t) {
  e.preventDefault(), t();
}
function Cs(e, t, r, i, l, n, c, s) {
  var u;
  [
    k.UNVERIFIED,
    k.ERROR,
    k.EXPIRED,
    k.CODE
  ].includes(o(t)) ? r() !== !1 && ((u = o(i)) == null ? void 0 : u.reportValidity()) === !1 ? y(l, !1) : n() ? c() : s() : y(l, !0);
}
var Ls = /* @__PURE__ */ _r('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="altcha-spinner"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor"></path></svg>'), Es = /* @__PURE__ */ we('<input type="hidden">'), xs = /* @__PURE__ */ we('<div><a target="_blank" class="altcha-logo" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor"></path></svg></a></div>'), Ts = /* @__PURE__ */ _r('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg>'), Is = /* @__PURE__ */ _r('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z"></path></svg>'), Vs = /* @__PURE__ */ _r('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"></path></svg>'), js = /* @__PURE__ */ we('<button type="button" class="altcha-code-challenge-audio"><!></button>'), Rs = /* @__PURE__ */ we("<audio hidden autoplay><source></audio>"), Ss = /* @__PURE__ */ we('<div class="altcha-code-challenge" role="dialog"><div class="altcha-code-challenge-arrow"></div> <form data-code-challenge-form="1"><img class="altcha-code-challenge-image" alt=""> <input type="text" autocomplete="off" name="code" class="altcha-code-challenge-input" required> <div class="altcha-code-challenge-buttons"><div class="altcha-code-challenge-buttons-left"><!> <button type="button" class="altcha-code-challenge-reload"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z"></path></svg></button></div> <button type="submit" class="altcha-code-challenge-verify"><!> </button></div> <!></form></div>'), $s = /* @__PURE__ */ we("<div><!></div>"), Ps = /* @__PURE__ */ we("<div><!></div>"), zs = /* @__PURE__ */ we('<div class="altcha-error"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg> <!></div>'), Ns = /* @__PURE__ */ we('<div class="altcha-footer"><div><!></div></div>'), Ds = /* @__PURE__ */ we('<div class="altcha-anchor-arrow"></div>'), qs = /* @__PURE__ */ we('<!> <div class="altcha"><div class="altcha-main"><div><!> <input type="checkbox"></div> <label class="altcha-label"><!></label> <!> <!> <!></div> <!> <!> <!></div>', 1);
function Hs(e, t) {
  var Na, Da;
  vi(t, !0);
  const [r, i] = el(), l = () => Qo(Qi, "$altchaI18nStore", r);
  let n = C(t, "auto", 7, void 0), c = C(t, "blockspam", 7, void 0), s = C(t, "challengeurl", 7, void 0), u = C(t, "challengejson", 7, void 0), d = C(t, "credentials", 7, void 0), m = C(t, "customfetch", 7, void 0), g = C(t, "debug", 7, !1), p = C(t, "delay", 7, 0), A = C(t, "disableautofocus", 7, !1), R = C(t, "refetchonexpire", 7, !0), S = C(t, "disablerefetchonexpire", 23, () => !R()), O = C(t, "expire", 7, void 0), T = C(t, "floating", 7, void 0), X = C(t, "floatinganchor", 7, void 0), oe = C(t, "floatingoffset", 7, void 0), Q = C(t, "floatingpersist", 7, !1), Se = C(t, "hidefooter", 7, !1), F = C(t, "hidelogo", 7, !1), Ce = C(t, "id", 7, void 0), De = C(t, "language", 7, void 0), Ke = C(t, "name", 7, "altcha"), Je = C(t, "maxnumber", 7, 1e6), Tt = C(t, "mockerror", 7, !1), qe = C(t, "obfuscated", 7, void 0), me = C(t, "overlay", 7, void 0), It = C(t, "overlaycontent", 7, void 0), Yt = C(t, "plugins", 7, void 0), Xe = C(t, "sentinel", 7, void 0), Le = C(t, "spamfilter", 7, !1), ht = C(t, "strings", 7, void 0), ge = C(t, "test", 7, !1), re = C(t, "verifyurl", 7, void 0), gt = C(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), Vt = C(t, "workerurl", 7, void 0);
  const { altchaI18n: Xi } = globalThis, Qi = Xi.store, ea = ["SHA-256", "SHA-384", "SHA-512"], en = "https://altcha.org/", He = (a, f) => {
    t.$$host.dispatchEvent(new CustomEvent(a, { detail: f }));
  }, ta = (Da = (Na = document.documentElement.lang) == null ? void 0 : Na.split("-")) == null ? void 0 : Da[0], wr = /* @__PURE__ */ Dt(() => {
    var a;
    return s() && new URL(s(), location.origin).host.endsWith(".altcha.org") && !!((a = s()) != null && a.includes("apiKey=ckey_"));
  }), Kt = /* @__PURE__ */ Dt(() => u() ? ba(u()) : void 0), tn = /* @__PURE__ */ Dt(() => ht() ? ba(ht()) : {}), z = /* @__PURE__ */ Dt(() => ({
    ...na(l()),
    ...o(tn)
  })), ra = /* @__PURE__ */ Dt(() => `${Ce() || Ke()}_checkbox_${Math.round(Math.random() * 1e8)}`);
  let Qe = /* @__PURE__ */ P(null), jt = /* @__PURE__ */ P(!1), U = /* @__PURE__ */ P(null), E = /* @__PURE__ */ P(Be(k.UNVERIFIED)), q = /* @__PURE__ */ P(void 0), Rt = /* @__PURE__ */ P(null), Oe = /* @__PURE__ */ P(null), ue = /* @__PURE__ */ P(null), Cr = /* @__PURE__ */ P(null), vt = /* @__PURE__ */ P(null), $ = /* @__PURE__ */ P(null), St = /* @__PURE__ */ P(null), et = /* @__PURE__ */ P(null), Ee = null, G = /* @__PURE__ */ P(null), tt = /* @__PURE__ */ P(!1), Fe = [], Lr = /* @__PURE__ */ P(!1), xe = /* @__PURE__ */ P(null);
  Nr(() => {
    vn(o(et));
  }), Nr(() => {
    bn(o(E));
  }), ol(() => {
    rn(), y(St, null), o($) && (o($).removeEventListener("submit", ua), o($).removeEventListener("reset", da), o($).removeEventListener("focusin", ca), y($, null)), Ee && (clearTimeout(Ee), Ee = null), document.removeEventListener("click", sa), document.removeEventListener("scroll", fa), window.removeEventListener("resize", va);
  }), Gi(() => {
    var a;
    x("mounted", "2.2.2"), x("workers", gt()), ln(), x("plugins", Fe.length ? Fe.map((f) => f.constructor.pluginName).join(", ") : "none"), ge() && x("using test mode"), O() && Er(O()), n() !== void 0 && x("auto", n()), T() !== void 0 && Aa(T()), y($, (a = o(q)) == null ? void 0 : a.closest("form"), !0), o($) && (o($).addEventListener("submit", ua, { capture: !0 }), o($).addEventListener("reset", da), (n() === "onfocus" || Q() === "focus") && o($).addEventListener("focusin", ca)), me() && ka(!0), n() === "onload" && (qe() ? $t() : $e()), o(wr) && (Se() || F()) && x("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      He("load");
    });
  });
  function Jt(a, f) {
    return btoa(JSON.stringify({
      algorithm: a.algorithm,
      challenge: a.challenge,
      number: f.number,
      salt: a.salt,
      signature: a.signature,
      test: ge() ? !0 : void 0,
      took: f.took
    }));
  }
  function rn() {
    for (const a of Fe)
      a.destroy();
  }
  function aa() {
    s() && !S() && o(E) === k.VERIFIED ? $e() : rt(k.EXPIRED, o(z).expired);
  }
  async function an() {
    if (Tt())
      throw x("mocking error"), new Error("Mocked error.");
    if (o(Kt))
      return x("using provided json data"), pa(o(Kt).salt), o(Kt);
    if (ge())
      return x("generating test challenge", { test: ge() }), bs(typeof ge() != "boolean" ? +ge() : void 0);
    {
      if (!s() && o($)) {
        const h = o($).getAttribute("action");
        h != null && h.includes("/form/") && s(h + "/altcha");
      }
      if (!s())
        throw new Error("Attribute challengeurl not set.");
      x("fetching challenge from", s());
      const a = {
        credentials: typeof d() == "boolean" ? "include" : d(),
        headers: Le() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      }, f = await ia()(s(), a);
      if (!f || !(f instanceof Response))
        throw new Error("Custom fetch function did not return a response.");
      if (f.status !== 200)
        throw new Error(`Server responded with ${f.status}.`);
      const v = f.headers.get("X-Altcha-Config"), b = await f.json();
      if (pa(b.salt), v)
        try {
          const h = JSON.parse(v);
          h && typeof h == "object" && (h.verifyurl && !h.verifyurl.startsWith("fn:") && (h.verifyurl = la(h.verifyurl)), Ca(h));
        } catch (h) {
          x("unable to configure from X-Altcha-Config", h);
        }
      return b;
    }
  }
  function nn(a) {
    var v, b;
    const f = (v = o($)) == null ? void 0 : v.querySelector(typeof a == "string" ? `input[name="${a}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((b = f == null ? void 0 : f.value) == null ? void 0 : b.slice(f.value.indexOf("@"))) || void 0;
  }
  function ia() {
    let a = fetch;
    if (m())
      if (x("using customfetch"), typeof m() == "string") {
        if (a = globalThis[m()] || null, !a)
          throw new Error(`Custom fetch function not found: ${m()}`);
      } else
        a = m();
    return a;
  }
  function na(a, f = [
    De() || "",
    document.documentElement.lang || "",
    ...navigator.languages
  ]) {
    const v = Object.keys(a).map((h) => h.toLowerCase()), b = f.reduce(
      (h, _) => (_ = _.toLowerCase(), h || (a[_] ? _ : null) || v.find((L) => _.split("-")[0] === L.split("-")[0]) || null),
      null
    );
    return a[b || "en"];
  }
  function on() {
    return Le() === "ipAddress" ? {
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
    } : typeof Le() == "object" ? Le() : {
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
  function oa(a) {
    var v;
    return [
      ...((v = o($)) == null ? void 0 : v.querySelectorAll(a != null && a.length ? a.map((b) => `input[name="${b}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (b, h) => {
        const _ = h.name, L = h.value;
        return _ && L && (b[_] = /\n/.test(L) ? L.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : L), b;
      },
      {}
    );
  }
  function la(a, f) {
    const v = new URL(s() || location.origin), b = new URL(a, v);
    if (b.search || (b.search = v.search), f)
      for (const h in f)
        f[h] !== void 0 && f[h] !== null && b.searchParams.set(h, f[h]);
    return b.toString();
  }
  function ln() {
    const a = Yt() !== void 0 ? Yt().split(",") : void 0;
    for (const f of globalThis.altchaPlugins)
      (!a || a.includes(f.pluginName)) && Fe.push(new f({
        el: o(q),
        clarify: $t,
        dispatch: He,
        getConfiguration: La,
        getFloatingAnchor: Ea,
        getState: xa,
        log: x,
        reset: rt,
        solve: wa,
        setState: Te,
        setFloatingAnchor: Ta,
        verify: $e
      }));
  }
  function x(...a) {
    (g() || a.some((f) => f instanceof Error)) && console[a[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${Ke()}]`, ...a);
  }
  function sn() {
    y(G, te.PAUSED, !0);
  }
  function fn(a) {
    y(G, te.ERROR, !0);
  }
  function cn() {
    y(G, te.READY, !0);
  }
  function un() {
    y(G, te.LOADING, !0);
  }
  function dn() {
    y(G, te.PLAYING, !0);
  }
  function hn() {
    y(G, te.PAUSED, !0);
  }
  function gn(a) {
    var f;
    if (a.preventDefault(), a.stopPropagation(), o(U)) {
      const v = new FormData(a.target), b = String(v.get("code"));
      if ((f = re()) != null && f.startsWith("fn:")) {
        const h = re().replace(/^fn:/, "");
        if (x(`calling ${h} function instead of verifyurl`), !(h in globalThis))
          throw new Error(`Global function "${h}" is undefined.`);
        return globalThis[h]({
          challenge: o(U).challenge,
          code: b,
          solution: o(U).solution
        });
      }
      y(tt, !0), ma(Jt(o(U).challenge, o(U).solution), b).then(({ reason: h, verified: _ }) => {
        _ ? (y(U, null), Te(k.VERIFIED), x("verified"), Sr().then(() => {
          var L;
          (L = o(Cr)) == null || L.focus(), He("verified", { payload: o(xe) }), n() === "onsubmit" ? ya(o(St)) : me() && Pt();
        })) : (rt(), y(et, h || "Verification failed", !0));
      }).catch((h) => {
        y(U, null), Te(k.ERROR, h), x("sentinel verification failed:", h);
      }).finally(() => {
        y(tt, !1);
      });
    }
  }
  function sa(a) {
    var v;
    const f = a.target;
    T() && f && !o(q).contains(f) && (o(E) === k.VERIFIED && Q() === !1 || o(E) === k.VERIFIED && Q() === "focus" && !((v = o($)) != null && v.matches(":focus-within")) || n() === "off" && o(E) === k.UNVERIFIED) && Pt();
  }
  function fa() {
    T() && o(E) !== k.UNVERIFIED && zt();
  }
  function vn(a) {
    for (const f of Fe)
      typeof f.onErrorChange == "function" && f.onErrorChange(o(et));
  }
  function ca(a) {
    o(E) === k.UNVERIFIED ? $e() : T() && Q() === "focus" && o(E) === k.VERIFIED && Xt();
  }
  function ua(a) {
    var b;
    const f = a.target;
    f != null && f.hasAttribute("data-code-challenge-form") || (y(St, a.submitter, !0), o($) && n() === "onsubmit" ? ((b = o(St)) == null || b.blur(), o(E) === k.UNVERIFIED ? (a.preventDefault(), a.stopPropagation(), $e().then(() => {
      ya(o(St));
    })) : o(E) !== k.VERIFIED && (a.preventDefault(), a.stopPropagation(), o(E) === k.VERIFYING && ha())) : o($) && T() && n() === "off" && o(E) === k.UNVERIFIED && (a.preventDefault(), a.stopPropagation(), Xt()));
  }
  function da() {
    rt();
  }
  function ha() {
    o(E) === k.VERIFYING && o(z).waitAlert && alert(o(z).waitAlert);
  }
  function ga() {
    o(Oe) ? o(Oe).paused ? (o(Oe).currentTime = 0, o(Oe).play()) : o(Oe).pause() : (y(Lr, !0), requestAnimationFrame(() => {
      var a;
      (a = o(Oe)) == null || a.play();
    }));
  }
  function bn(a) {
    for (const f of Fe)
      typeof f.onStateChange == "function" && f.onStateChange(o(E));
    T() && o(E) !== k.UNVERIFIED && requestAnimationFrame(() => {
      zt();
    }), y(jt, o(E) === k.VERIFIED), me() && o(ue) && (o(E) !== k.UNVERIFIED ? Xt() : Pt());
  }
  function va() {
    T() && zt();
  }
  function ba(a) {
    return JSON.parse(a);
  }
  function pa(a) {
    var b;
    const f = new URLSearchParams((b = a.split("?")) == null ? void 0 : b[1]), v = f.get("expires") || f.get("expire");
    if (v) {
      const h = new Date(+v * 1e3), _ = isNaN(h.getTime()) ? 0 : h.getTime() - Date.now();
      _ > 0 && Er(_);
    } else Ee && (clearTimeout(Ee), Ee = null);
  }
  async function pn(a) {
    if (!re())
      throw new Error("Attribute verifyurl not set.");
    x("requesting server verification from", re());
    const f = { payload: a };
    if (Le() !== !1) {
      const {
        blockedCountries: h,
        classifier: _,
        disableRules: L,
        email: B,
        expectedLanguages: H,
        expectedCountries: ee,
        fields: le,
        ipAddress: it,
        text: pt,
        timeZone: nt
      } = on();
      f.blockedCountries = h, f.classifier = _, f.disableRules = L, f.email = B === !1 ? void 0 : nn(B), f.expectedCountries = ee, f.expectedLanguages = H || (ta ? [ta] : void 0), f.fields = le === !1 ? void 0 : oa(le), f.ipAddress = it === !1 ? void 0 : it || "auto", f.text = pt, f.timeZone = nt === !1 ? void 0 : nt || ei();
    }
    const v = await ia()(re(), {
      body: JSON.stringify(f),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (!v || !(v instanceof Response))
      throw new Error("Custom fetch function did not return a response.");
    if (v.status !== 200)
      throw new Error(`Server responded with ${v.status}.`);
    const b = await v.json();
    if (b != null && b.payload && y(xe, b.payload, !0), He("serververification", b), c() && b.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  async function ma(a, f) {
    if (!re())
      throw new Error("Attribute verifyurl not set.");
    x("requesting sentinel verification from", re());
    const v = { code: f, payload: a };
    Xe() && (v.fields = Xe().fields ? oa() : void 0, v.timeZone = Xe().timeZone ? ei() : void 0);
    const b = await fetch(re(), {
      body: JSON.stringify(v),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (!b || !(b instanceof Response))
      throw new Error("Fetch function did not return a response.");
    if (b.status !== 200)
      throw new Error(`Server responded with ${b.status}.`);
    const h = await b.json();
    return h != null && h.payload && y(xe, h.payload, !0), He("sentinelverification", h), h;
  }
  function ya(a) {
    var f;
    o($) && "requestSubmit" in o($) ? o($).requestSubmit(a) : (f = o($)) != null && f.reportValidity() && (a ? a.click() : o($).submit());
  }
  function Er(a) {
    x("expire", a), Ee && (clearTimeout(Ee), Ee = null), a < 1 ? aa() : Ee = setTimeout(aa, a);
  }
  function Aa(a) {
    x("floating", a), T() !== a && (o(q).style.left = "", o(q).style.top = ""), T(a === !0 || a === "" ? "auto" : a === !1 || a === "false" ? void 0 : T()), T() ? (n() || n("onsubmit"), document.addEventListener("scroll", fa), document.addEventListener("click", sa), window.addEventListener("resize", va)) : n() === "onsubmit" && n(void 0);
  }
  function ka(a) {
    var f, v;
    if (x("overlay", a), me(a), a) {
      if (n() || n("onsubmit"), o(ue) && o(q).parentElement && o(ue).replaceWith(o(q).parentElement), (v = (f = o(q)) == null ? void 0 : f.parentElement) != null && v.parentElement) {
        y(ue, document.createElement("div"), !0), o(q).parentElement.parentElement.appendChild(o(ue));
        const b = document.createElement("div"), h = document.createElement("button");
        h.type = "button", h.innerHTML = "&times;", h.addEventListener("click", (_) => {
          _.preventDefault(), rt();
        }), o(ue).classList.add("altcha-overlay-backdrop"), h.classList.add("altcha-overlay-close-button"), b.classList.add("altcha-overlay"), o(ue).append(b), b.append(h), It() && b.append(...document.querySelectorAll(It())), b.append(o(q).parentElement);
      }
    } else o(ue) && o(q).parentElement && (o(ue).replaceWith(o(q).parentElement), o(q).style.display = "block");
  }
  function _a(a) {
    if (!a.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (a.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!ea.includes(a.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${ea.join(", ")}`);
    if (!a.challenge || a.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!a.salt || a.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function wa(a) {
    let f = null, v = null;
    if ("Worker" in window) {
      try {
        f = mn(a, a.maxNumber || a.maxnumber || Je()), y(Qe, f.controller, !0), v = await f.promise;
      } catch (b) {
        x(b);
      } finally {
        y(Qe, null);
      }
      if (v === null || (v == null ? void 0 : v.number) !== void 0 || "obfuscated" in a)
        return { data: a, solution: v };
    }
    if ("obfuscated" in a) {
      const b = await As(a.obfuscated, a.key, a.maxNumber || a.maxnumber);
      return { data: a, solution: await b.promise };
    }
    f = ps(a.challenge, a.salt, a.algorithm, a.maxNumber || a.maxnumber || Je()), y(Qe, f.controller, !0);
    try {
      v = await f.promise;
    } catch (b) {
      x(b);
    } finally {
      y(Qe, null);
    }
    return { data: a, solution: v };
  }
  function mn(a, f = typeof ge() == "number" ? ge() : a.maxNumber || a.maxnumber || Je(), v = Math.ceil(gt())) {
    const b = new AbortController(), h = [];
    v = Math.min(16, f, Math.max(1, v));
    for (let B = 0; B < v; B++)
      h.push(altchaCreateWorker(Vt()));
    const _ = Math.ceil(f / v);
    return { promise: (async () => {
      const B = await Promise.all(h.map((H, ee) => {
        const le = ee * _;
        return b.signal.addEventListener("abort", () => {
          H.postMessage({ type: "abort" });
        }), new Promise((it) => {
          H.addEventListener("message", (pt) => {
            if (pt.data)
              for (const nt of h)
                nt !== H && nt.postMessage({ type: "abort" });
            it(pt.data);
          }), H.postMessage({
            payload: a,
            max: le + _,
            start: le,
            type: "work"
          });
        });
      }));
      for (const H of h)
        H.terminate();
      return B.find((H) => !!H) || null;
    })(), controller: b };
  }
  async function $t() {
    if (!qe()) {
      Te(k.ERROR);
      return;
    }
    const a = Fe.find((f) => f.constructor.pluginName === "obfuscation");
    if (!a || !("clarify" in a)) {
      Te(k.ERROR), x("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in a && typeof a.clarify == "function")
      return a.clarify();
  }
  function Ca(a) {
    a.obfuscated !== void 0 && qe(a.obfuscated), a.auto !== void 0 && (n(a.auto), n() === "onload" && (qe() ? $t() : $e())), a.blockspam !== void 0 && c(!!a.blockspam), a.customfetch !== void 0 && m(a.customfetch), a.floatinganchor !== void 0 && X(a.floatinganchor), a.delay !== void 0 && p(a.delay), a.floatingoffset !== void 0 && oe(a.floatingoffset), a.floating !== void 0 && Aa(a.floating), a.expire !== void 0 && (Er(a.expire), O(a.expire)), a.challenge && (u(typeof a.challenge == "string" ? a.challenge : JSON.stringify(a.challenge)), _a(o(Kt))), a.challengeurl !== void 0 && s(a.challengeurl), a.debug !== void 0 && g(!!a.debug), a.hidefooter !== void 0 && Se(!!a.hidefooter), a.hidelogo !== void 0 && F(!!a.hidelogo), a.language !== void 0 && ht(na(l(), [a.language])), a.maxnumber !== void 0 && Je(+a.maxnumber), a.mockerror !== void 0 && Tt(!!a.mockerror), a.name !== void 0 && Ke(a.name), a.overlaycontent !== void 0 && It(a.overlaycontent), a.overlay !== void 0 && ka(a.overlay), a.refetchonexpire !== void 0 && S(!a.refetchonexpire), a.disablerefetchonexpire !== void 0 && S(!a.disablerefetchonexpire), a.sentinel !== void 0 && typeof a.sentinel == "object" && Xe(a.sentinel), a.spamfilter !== void 0 && Le(typeof a.spamfilter == "object" ? a.spamfilter : !!a.spamfilter), a.strings && ht(typeof a.strings == "string" ? a.strings : JSON.stringify(a.strings)), a.test !== void 0 && ge(typeof a.test == "number" ? a.test : !!a.test), a.verifyurl !== void 0 && re(a.verifyurl), a.workers !== void 0 && gt(+a.workers), a.workerurl !== void 0 && Vt(a.workerurl);
  }
  function La() {
    return {
      auto: n(),
      blockspam: c(),
      challengeurl: s(),
      debug: g(),
      delay: p(),
      disableautofocus: A(),
      disablerefetchonexpire: S(),
      expire: O(),
      floating: T(),
      floatinganchor: X(),
      floatingoffset: oe(),
      hidefooter: Se(),
      hidelogo: F(),
      name: Ke(),
      maxnumber: Je(),
      mockerror: Tt(),
      obfuscated: qe(),
      overlay: me(),
      refetchonexpire: !S(),
      spamfilter: Le(),
      strings: o(z),
      test: ge(),
      verifyurl: re(),
      workers: gt(),
      workerurl: Vt()
    };
  }
  function Ea() {
    return o(vt);
  }
  function yn(a) {
    return Fe.find((f) => f.constructor.pluginName === a);
  }
  function xa() {
    return o(E);
  }
  function Pt() {
    o(q).style.display = "none", me() && o(ue) && (o(ue).style.display = "none");
  }
  function zt(a = 20) {
    var f;
    if (o(q))
      if (o(vt) || y(vt, (X() ? document.querySelector(X()) : (f = o($)) == null ? void 0 : f.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || o($), !0), o(vt)) {
        const v = parseInt(oe(), 10) || 12, b = o(vt).getBoundingClientRect(), h = o(q).getBoundingClientRect(), _ = document.documentElement.clientHeight, L = document.documentElement.clientWidth, B = T() === "auto" ? b.bottom + h.height + v + a > _ : T() === "top", H = Math.max(a, Math.min(L - a - h.width, b.left + b.width / 2 - h.width / 2));
        if (B ? o(q).style.top = `${b.top - (h.height + v)}px` : o(q).style.top = `${b.bottom + v}px`, o(q).style.left = `${H}px`, o(q).setAttribute("data-floating", B ? "top" : "bottom"), o(Rt)) {
          const ee = o(Rt).getBoundingClientRect();
          o(Rt).style.left = b.left - H + b.width / 2 - ee.width / 2 + "px";
        }
      } else
        x("unable to find floating anchor element");
  }
  function rt(a = k.UNVERIFIED, f = null) {
    o(Qe) && (o(Qe).abort(), y(Qe, null)), y(jt, !1), y(xe, null), y(U, null), y(Lr, !1), y(G, null), Te(a, f);
  }
  function Ta(a) {
    y(vt, a, !0);
  }
  function Te(a, f = null) {
    y(E, a, !0), y(et, f, !0), He("statechange", {
      payload: o(xe),
      state: o(E)
    });
  }
  function Xt() {
    o(q).style.display = "block", T() && zt(), me() && o(ue) && (o(ue).style.display = "flex");
  }
  async function $e() {
    return rt(k.VERIFYING), await new Promise((a) => setTimeout(a, p() || 0)), an().then((a) => (_a(a), x("challenge", a), wa(a))).then(({ data: a, solution: f }) => {
      var v;
      if (x("solution", f), !f || a && "challenge" in a && !("clearText" in f)) {
        if ((f == null ? void 0 : f.number) !== void 0 && "challenge" in a)
          if (re() && "codeChallenge" in a)
            ["INPUT", "BUTTON", "SELECT", "TEXTAREA"].includes(((v = document.activeElement) == null ? void 0 : v.tagName) || "") && A() === !1 && document.activeElement.blur(), y(U, { challenge: a, solution: f }, !0);
          else {
            if (re() && Xe() !== void 0)
              return ma(Jt(a, f));
            if (re())
              return pn(Jt(a, f));
            y(xe, Jt(a, f), !0), x("payload", o(xe));
          }
        else if (o(E) !== k.EXPIRED)
          throw x("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
      }
    }).then(() => {
      o(U) ? (Te(k.CODE), Sr().then(() => {
        He("code", { codeChallenge: o(U) });
      })) : o(xe) && (Te(k.VERIFIED), x("verified"), Sr().then(() => {
        He("verified", { payload: o(xe) }), me() && Pt();
      }));
    }).catch((a) => {
      x(a), Te(k.ERROR, a.message);
    });
  }
  var Ia = qs(), Va = qt(Ia);
  Uo(Va, t, "default", {});
  var bt = K(Va, 2), xr = Y(bt), Qt = Y(xr);
  let ja;
  var Ra = Y(Qt);
  {
    var An = (a) => {
      $r(a);
    };
    J(Ra, (a) => {
      o(E) === k.VERIFYING && a(An);
    });
  }
  var at = K(Ra, 2);
  Ya(at), at.__change = [
    Cs,
    E,
    Le,
    $,
    jt,
    qe,
    $t,
    $e
  ], ar(at, (a) => y(Cr, a), () => o(Cr)), Z(Qt);
  var er = K(Qt, 2), kn = Y(er);
  {
    var _n = (a) => {
      var f = rr(), v = qt(f);
      ot(v, () => o(z).verified), M(a, f);
    }, wn = (a, f) => {
      {
        var v = (h) => {
          var _ = rr(), L = qt(_);
          ot(L, () => o(z).verifying), M(h, _);
        }, b = (h, _) => {
          {
            var L = (H) => {
              var ee = rr(), le = qt(ee);
              ot(le, () => o(z).verificationRequired), M(H, ee);
            }, B = (H) => {
              var ee = rr(), le = qt(ee);
              ot(le, () => o(z).label), M(H, ee);
            };
            J(
              h,
              (H) => {
                o(E) === k.CODE ? H(L) : H(B, !1);
              },
              _
            );
          }
        };
        J(
          a,
          (h) => {
            o(E) === k.VERIFYING ? h(v) : h(b, !1);
          },
          f
        );
      }
    };
    J(kn, (a) => {
      o(E) === k.VERIFIED ? a(_n) : a(wn, !1);
    });
  }
  Z(er);
  var Sa = K(er, 2);
  {
    var Cn = (a) => {
      var f = Es();
      Ya(f), Ie(() => {
        I(f, "name", Ke()), Ko(f, o(xe));
      }), M(a, f);
    };
    J(Sa, (a) => {
      o(E) === k.VERIFIED && a(Cn);
    });
  }
  var $a = K(Sa, 2);
  {
    var Ln = (a) => {
      var f = xs(), v = Y(f);
      I(v, "href", en), Z(f), Ie(() => I(v, "aria-label", o(z).ariaLinkLabel)), M(a, f);
    };
    J($a, (a) => {
      (F() !== !0 || o(wr)) && a(Ln);
    });
  }
  var En = K($a, 2);
  {
    var xn = (a) => {
      var f = Ss(), v = K(Y(f), 2), b = Y(v), h = K(b, 2);
      Do(h, !A()), h.__keydown = [
        _s,
        ga
      ];
      var _ = K(h, 2), L = Y(_), B = Y(L);
      {
        var H = (ye) => {
          var W = js();
          W.__click = ga;
          var tr = Y(W);
          {
            var Nt = (mt) => {
              $r(mt, () => 20);
            }, Pn = (mt, zn) => {
              {
                var Nn = (yt) => {
                  var Tr = Ts();
                  M(yt, Tr);
                }, Dn = (yt, Tr) => {
                  {
                    var qn = (At) => {
                      var Ir = Is();
                      M(At, Ir);
                    }, Hn = (At) => {
                      var Ir = Vs();
                      M(At, Ir);
                    };
                    J(
                      yt,
                      (At) => {
                        o(G) === te.PLAYING ? At(qn) : At(Hn, !1);
                      },
                      Tr
                    );
                  }
                };
                J(
                  mt,
                  (yt) => {
                    o(G) === te.ERROR ? yt(Nn) : yt(Dn, !1);
                  },
                  zn
                );
              }
            };
            J(tr, (mt) => {
              o(G) === te.LOADING ? mt(Nt) : mt(Pn, !1);
            });
          }
          Z(W), Ie(() => {
            I(W, "title", o(z).getAudioChallenge), W.disabled = o(G) === te.LOADING || o(G) === te.ERROR || o(tt), I(W, "aria-label", o(G) === te.LOADING ? o(z).loading : o(z).getAudioChallenge);
          }), M(ye, W);
        };
        J(B, (ye) => {
          o(U).challenge.codeChallenge.audio && ye(H);
        });
      }
      var ee = K(B, 2);
      ee.__click = [ws, $e], Z(L);
      var le = K(L, 2), it = Y(le);
      {
        var pt = (ye) => {
          $r(ye, () => 16);
        };
        J(it, (ye) => {
          o(tt) && ye(pt);
        });
      }
      var nt = K(it);
      Z(le), Z(_);
      var Sn = K(_, 2);
      {
        var $n = (ye) => {
          var W = Rs(), tr = Y(W);
          Z(W), ar(W, (Nt) => y(Oe, Nt), () => o(Oe)), Ie((Nt) => I(tr, "src", Nt), [
            () => la(o(U).challenge.codeChallenge.audio, { language: De() })
          ]), Me("loadstart", W, un), Me("canplay", W, cn), Me("pause", W, hn), Me("playing", W, dn), Me("ended", W, sn), Me("error", tr, fn), M(ye, W);
        };
        J(Sn, (ye) => {
          o(U).challenge.codeChallenge.audio && o(Lr) && ye($n);
        });
      }
      Z(v), Z(f), Ie(() => {
        I(f, "aria-label", o(z).verificationRequired), I(b, "src", o(U).challenge.codeChallenge.image), I(h, "minlength", o(U).challenge.codeChallenge.length || 1), I(h, "maxlength", o(U).challenge.codeChallenge.length), I(h, "placeholder", o(z).enterCode), I(h, "aria-label", o(G) === te.LOADING ? o(z).loading : o(G) === te.PLAYING ? "" : o(z).enterCodeAria), I(h, "aria-live", o(G) ? "assertive" : "polite"), I(h, "aria-busy", o(G) === te.LOADING), h.disabled = o(tt), I(ee, "aria-label", o(z).reload), I(ee, "title", o(z).reload), ee.disabled = o(tt), le.disabled = o(tt), I(le, "aria-label", o(z).verify), Fo(nt, ` ${o(z).verify ?? ""}`);
      }), Me("submit", v, gn, !0), M(a, f);
    };
    J(En, (a) => {
      var f;
      (f = o(U)) != null && f.challenge.codeChallenge && a(xn);
    });
  }
  Z(xr);
  var Pa = K(xr, 2);
  {
    var Tn = (a) => {
      var f = zs(), v = K(Y(f), 2);
      {
        var b = (_) => {
          var L = $s(), B = Y(L);
          ot(B, () => o(z).expired), Z(L), Ie(() => I(L, "title", o(et))), M(_, L);
        }, h = (_) => {
          var L = Ps(), B = Y(L);
          ot(B, () => o(z).error), Z(L), Ie(() => I(L, "title", o(et))), M(_, L);
        };
        J(v, (_) => {
          o(E) === k.EXPIRED ? _(b) : _(h, !1);
        });
      }
      Z(f), M(a, f);
    };
    J(Pa, (a) => {
      (o(et) || o(E) === k.EXPIRED) && a(Tn);
    });
  }
  var za = K(Pa, 2);
  {
    var In = (a) => {
      var f = Ns(), v = Y(f), b = Y(v);
      ot(b, () => o(z).footer), Z(v), Z(f), M(a, f);
    };
    J(za, (a) => {
      o(z).footer && (Se() !== !0 || o(wr)) && a(In);
    });
  }
  var Vn = K(za, 2);
  {
    var jn = (a) => {
      var f = Ds();
      ar(f, (v) => y(Rt, v), () => o(Rt)), M(a, f);
    };
    J(Vn, (a) => {
      T() && a(jn);
    });
  }
  Z(bt), ar(bt, (a) => y(q, a), () => o(q)), Ie(
    (a) => {
      I(bt, "data-state", o(E)), I(bt, "data-floating", T()), I(bt, "data-overlay", me()), ja = Wo(Qt, 1, "altcha-checkbox", null, ja, a), I(at, "id", o(ra)), at.required = n() !== "onsubmit" && (!T() || n() !== "off"), I(er, "for", o(ra));
    },
    [
      () => ({
        "altcha-checkbox-verifying": o(E) === k.VERIFYING
      })
    ]
  ), Me("invalid", at, ha), Xo(at, () => o(jt), (a) => y(jt, a)), M(e, Ia);
  var Rn = bi({
    clarify: $t,
    configure: Ca,
    getConfiguration: La,
    getFloatingAnchor: Ea,
    getPlugin: yn,
    getState: xa,
    hide: Pt,
    repositionFloating: zt,
    reset: rt,
    setFloatingAnchor: Ta,
    setState: Te,
    show: Xt,
    verify: $e,
    get auto() {
      return n();
    },
    set auto(a = void 0) {
      n(a), w();
    },
    get blockspam() {
      return c();
    },
    set blockspam(a = void 0) {
      c(a), w();
    },
    get challengeurl() {
      return s();
    },
    set challengeurl(a = void 0) {
      s(a), w();
    },
    get challengejson() {
      return u();
    },
    set challengejson(a = void 0) {
      u(a), w();
    },
    get credentials() {
      return d();
    },
    set credentials(a = void 0) {
      d(a), w();
    },
    get customfetch() {
      return m();
    },
    set customfetch(a = void 0) {
      m(a), w();
    },
    get debug() {
      return g();
    },
    set debug(a = !1) {
      g(a), w();
    },
    get delay() {
      return p();
    },
    set delay(a = 0) {
      p(a), w();
    },
    get disableautofocus() {
      return A();
    },
    set disableautofocus(a = !1) {
      A(a), w();
    },
    get refetchonexpire() {
      return R();
    },
    set refetchonexpire(a = !0) {
      R(a), w();
    },
    get disablerefetchonexpire() {
      return S();
    },
    set disablerefetchonexpire(a = !R) {
      S(a), w();
    },
    get expire() {
      return O();
    },
    set expire(a = void 0) {
      O(a), w();
    },
    get floating() {
      return T();
    },
    set floating(a = void 0) {
      T(a), w();
    },
    get floatinganchor() {
      return X();
    },
    set floatinganchor(a = void 0) {
      X(a), w();
    },
    get floatingoffset() {
      return oe();
    },
    set floatingoffset(a = void 0) {
      oe(a), w();
    },
    get floatingpersist() {
      return Q();
    },
    set floatingpersist(a = !1) {
      Q(a), w();
    },
    get hidefooter() {
      return Se();
    },
    set hidefooter(a = !1) {
      Se(a), w();
    },
    get hidelogo() {
      return F();
    },
    set hidelogo(a = !1) {
      F(a), w();
    },
    get id() {
      return Ce();
    },
    set id(a = void 0) {
      Ce(a), w();
    },
    get language() {
      return De();
    },
    set language(a = void 0) {
      De(a), w();
    },
    get name() {
      return Ke();
    },
    set name(a = "altcha") {
      Ke(a), w();
    },
    get maxnumber() {
      return Je();
    },
    set maxnumber(a = 1e6) {
      Je(a), w();
    },
    get mockerror() {
      return Tt();
    },
    set mockerror(a = !1) {
      Tt(a), w();
    },
    get obfuscated() {
      return qe();
    },
    set obfuscated(a = void 0) {
      qe(a), w();
    },
    get overlay() {
      return me();
    },
    set overlay(a = void 0) {
      me(a), w();
    },
    get overlaycontent() {
      return It();
    },
    set overlaycontent(a = void 0) {
      It(a), w();
    },
    get plugins() {
      return Yt();
    },
    set plugins(a = void 0) {
      Yt(a), w();
    },
    get sentinel() {
      return Xe();
    },
    set sentinel(a = void 0) {
      Xe(a), w();
    },
    get spamfilter() {
      return Le();
    },
    set spamfilter(a = !1) {
      Le(a), w();
    },
    get strings() {
      return ht();
    },
    set strings(a = void 0) {
      ht(a), w();
    },
    get test() {
      return ge();
    },
    set test(a = !1) {
      ge(a), w();
    },
    get verifyurl() {
      return re();
    },
    set verifyurl(a = void 0) {
      re(a), w();
    },
    get workers() {
      return gt();
    },
    set workers(a = Math.min(16, navigator.hardwareConcurrency || 8)) {
      gt(a), w();
    },
    get workerurl() {
      return Vt();
    },
    set workerurl(a = void 0) {
      Vt(a), w();
    }
  });
  return i(), Rn;
}
Oo(["change", "keydown", "click"]);
customElements.define("altcha-widget", nl(
  Hs,
  {
    blockspam: { type: "Boolean" },
    debug: { type: "Boolean" },
    delay: { type: "Number" },
    disableautofocus: { type: "Boolean" },
    disablerefetchonexpire: { type: "Boolean" },
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
    credentials: {},
    customfetch: {},
    floating: {},
    floatinganchor: {},
    floatingpersist: {},
    id: {},
    language: {},
    name: {},
    obfuscated: {},
    overlay: {},
    overlaycontent: {},
    plugins: {},
    sentinel: {},
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
const Os = '@keyframes overlay-slidein{to{opacity:1;top:50%}}@keyframes altcha-spinner{to{transform:rotate(360deg)}}.altcha{background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);position:relative}.altcha:focus-within{border-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating]{background:var(--altcha-color-base, white);display:none;filter:drop-shadow(3px 3px 6px rgba(0,0,0,.2));left:-100%;position:fixed;top:-100%;width:var(--altcha-max-width, 260px);z-index:999999}.altcha[data-floating=top] .altcha-anchor-arrow{border-bottom-color:transparent;border-top-color:var(--altcha-color-border, #a0a0a0);bottom:-12px;top:auto}.altcha[data-floating=bottom]:focus-within::after{border-bottom-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating=top]:focus-within::after{border-top-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating]:not([data-state=unverified]){display:block}.altcha-anchor-arrow{border:6px solid transparent;border-bottom-color:var(--altcha-color-border, #a0a0a0);content:"";height:0;left:12px;position:absolute;top:-12px;width:0}.altcha-main{align-items:center;display:flex;gap:.4rem;padding:.7rem;position:relative}.altcha-code-challenge{background:var(--altcha-color-base, white);border:1px solid var(--altcha-color-border-focus, currentColor);border-radius:var(--altcha-border-radius, 3px);filter:drop-shadow(3px 3px 6px rgba(0,0,0,.2));padding:.5rem;position:absolute;top:2.5rem;z-index:9999999}.altcha-code-challenge>form{display:flex;flex-direction:column;gap:.5rem}.altcha-code-challenge-input{border:1px solid currentColor;border-radius:3px;box-sizing:border-box;outline:0;font-size:16px;padding:.35rem;width:220px}.altcha-code-challenge-input:focus{outline:2px solid color-mix(in srgb,var(--altcha-color-active, #1D1DC9) 20%,transparent)}.altcha-code-challenge-input:disabled{opacity:.7}.altcha-code-challenge-image{background-color:#fff;border:1px solid currentColor;border-radius:3px;box-sizing:border-box;object-fit:contain;height:50px;width:220px}.altcha-code-challenge-audio,.altcha-code-challenge-reload{background:color-mix(in srgb,var(--altcha-color-text, currentColor) 10%,transparent);border:0;border-radius:3px;color:var(--altcha-color-text, currentColor);cursor:pointer;display:flex;align-items:center;justify-content:center;padding:.35rem}.altcha-code-challenge-audio:disabled,.altcha-code-challenge-reload:disabled,.altcha-code-challenge-verify:disabled{opacity:.7;pointer-events:none}.altcha-code-challenge-audio>*,.altcha-code-challenge-reload>*{height:20px;width:20px}.altcha-code-challenge-buttons{display:flex;justify-content:space-between}.altcha-code-challenge-buttons-left{display:flex;gap:.25rem}.altcha-code-challenge-verify{align-items:center;background:var(--altcha-color-active, #1D1DC9);border:0;border-radius:3px;color:#fff;cursor:pointer;display:flex;gap:.5rem;font-size:100%;padding:.35rem 1rem}.altcha-code-challenge-arrow{border:6px solid transparent;border-bottom-color:var(--altcha-color-border, currentColor);content:"";height:0;left:.15rem;position:absolute;top:-12px;width:0}.altcha[data-floating=top] .altcha-code-challenge{top:-150px}.altcha[data-floating=top] .altcha-code-challenge-arrow{border-bottom-color:transparent;border-top-color:var(--altcha-color-border, currentColor);bottom:-12px;top:auto}.altcha-label{cursor:pointer;flex-grow:1}.altcha-logo{color:currentColor!important;opacity:.7}.altcha-footer:hover,.altcha-logo:hover{opacity:1}.altcha-error{color:var(--altcha-color-error-text, #f23939);display:flex;font-size:.85rem;gap:.3rem;padding:0 .7rem .7rem}.altcha-footer{align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:.75rem;opacity:.7;justify-content:end;padding:.2rem .7rem}.altcha-footer a{color:currentColor}.altcha-checkbox{display:flex;align-items:center;justify-content:center;height:24px;position:relative;width:24px}.altcha-checkbox .altcha-spinner{bottom:0;left:0;position:absolute;right:0;top:0}.altcha-checkbox input{width:18px;height:18px;margin:0}.altcha-checkbox-verifying input{appearance:none;opacity:0;pointer-events:none}.altcha-spinner{animation:altcha-spinner .75s infinite linear;transform-origin:center}.altcha-overlay{--altcha-color-base:#fff;--altcha-color-text:#000;animation:overlay-slidein .5s forwards;display:flex;flex-direction:column;gap:.5rem;left:50%;width:260px;opacity:0;position:fixed;top:45%;transform:translate(-50%,-50%)}.altcha-overlay-backdrop{background:rgba(0,0,0,.5);bottom:0;display:none;left:0;position:fixed;right:0;top:0;z-index:99999999}.altcha-overlay-close-button{align-self:flex-end;background:0 0;border:0;padding:.25rem;cursor:pointer;color:currentColor;font-size:130%;line-height:1;opacity:.7}@media (max-height:450px){.altcha-overlay{top:10%!important;transform:translate(-50%,0)}}';
function Fs(e, t = "__altcha-css") {
  if (!document.getElementById(t)) {
    const r = document.createElement("style");
    r.id = t, r.textContent = e, document.head.appendChild(r);
  }
}
globalThis.altchaCreateWorker = (e) => e ? new Worker(new URL(e)) : new hs();
Fs(Os);
export {
  Hs as Altcha
};
