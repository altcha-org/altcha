var On = Object.defineProperty;
var Da = (e) => {
  throw TypeError(e);
};
var Hn = (e, t, r) => t in e ? On(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var _e = (e, t, r) => Hn(e, typeof t != "symbol" ? t + "" : t, r), qa = (e, t, r) => t.has(e) || Da("Cannot " + r);
var se = (e, t, r) => (qa(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Vr = (e, t, r) => t.has(e) ? Da("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), Rr = (e, t, r, i) => (qa(e, t, "write to private field"), i ? i.call(e, r) : t.set(e, r), r);
var ti = Array.isArray, Fn = Array.prototype.indexOf, Mn = Array.from, lr = Object.keys, Ft = Object.defineProperty, it = Object.getOwnPropertyDescriptor, Bn = Object.getOwnPropertyDescriptors, Un = Object.prototype, Zn = Array.prototype, ri = Object.getPrototypeOf, Oa = Object.isExtensible;
const wt = () => {
};
function ai(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Gn(e, t, r = !1) {
  return e === void 0 ? r ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
const we = 2, ii = 4, gr = 8, Mr = 16, Ne = 32, lt = 64, sr = 128, ge = 256, cr = 512, fe = 1024, ze = 2048, st = 4096, Et = 8192, vr = 16384, Wn = 32768, Br = 65536, Yn = 1 << 19, ni = 1 << 20, Pr = 1 << 21, Ot = Symbol("$state"), oi = Symbol("legacy props"), Kn = Symbol(""), Jn = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Mt = [], Bt = [];
function li() {
  var e = Mt;
  Mt = [], ai(e);
}
function si() {
  var e = Bt;
  Bt = [], ai(e);
}
function Ur(e) {
  Mt.length === 0 && queueMicrotask(li), Mt.push(e);
}
function Xn(e) {
  Bt.length === 0 && Jn(si), Bt.push(e);
}
function Qn() {
  Mt.length > 0 && li(), Bt.length > 0 && si();
}
function ci(e) {
  return e === this.v;
}
function fi(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Zr(e) {
  return !fi(e, this.v);
}
function eo(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function to() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function ro(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function ao() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function io() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function no(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function oo() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function lo() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function so() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
const co = 1, fo = 4, uo = 8, ho = 16, go = 1, vo = 2, Gr = "[", ui = "[!", di = "]", Ct = {}, ce = Symbol(), bo = "http://www.w3.org/1999/xhtml";
function hi(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let ie = null;
function Ha(e) {
  ie = e;
}
function gi(e, t = !1, r) {
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
function vi(e) {
  const t = ie;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const f = t.e;
    if (f !== null) {
      var r = j, i = R;
      t.e = null;
      try {
        for (var l = 0; l < f.length; l++) {
          var n = f[l];
          Ze(n.effect), Se(n.reaction), Jr(n.fn);
        }
      } finally {
        Ze(r), Se(i);
      }
    }
    ie = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function bi() {
  return !0;
}
function Me(e) {
  if (typeof e != "object" || e === null || Ot in e)
    return e;
  const t = ri(e);
  if (t !== Un && t !== Zn)
    return e;
  var r = /* @__PURE__ */ new Map(), i = ti(e), l = /* @__PURE__ */ $(0), n = R, f = (s) => {
    var u = R;
    Se(n);
    var d = s();
    return Se(u), d;
  };
  return i && r.set("length", /* @__PURE__ */ $(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, u, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && oo();
        var m = r.get(u);
        return m === void 0 ? (m = f(() => /* @__PURE__ */ $(d.value)), r.set(u, m)) : y(
          m,
          f(() => Me(d.value))
        ), !0;
      },
      deleteProperty(s, u) {
        var d = r.get(u);
        if (d === void 0)
          u in s && (r.set(
            u,
            f(() => /* @__PURE__ */ $(ce))
          ), jr(l));
        else {
          if (i && typeof u == "string") {
            var m = (
              /** @type {Source<number>} */
              r.get("length")
            ), g = Number(u);
            Number.isInteger(g) && g < m.v && y(m, g);
          }
          y(d, ce), jr(l);
        }
        return !0;
      },
      get(s, u, d) {
        var A;
        if (u === Ot)
          return e;
        var m = r.get(u), g = u in s;
        if (m === void 0 && (!g || (A = it(s, u)) != null && A.writable) && (m = f(() => /* @__PURE__ */ $(Me(g ? s[u] : ce))), r.set(u, m)), m !== void 0) {
          var p = o(m);
          return p === ce ? void 0 : p;
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
          if (g !== void 0 && p !== ce)
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
        var d = r.get(u), m = d !== void 0 && d.v !== ce || Reflect.has(s, u);
        if (d !== void 0 || j !== null && (!m || (p = it(s, u)) != null && p.writable)) {
          d === void 0 && (d = f(() => /* @__PURE__ */ $(m ? Me(s[u]) : ce)), r.set(u, d));
          var g = o(d);
          if (g === ce)
            return !1;
        }
        return m;
      },
      set(s, u, d, m) {
        var J;
        var g = r.get(u), p = u in s;
        if (i && u === "length")
          for (var A = d; A < /** @type {Source<number>} */
          g.v; A += 1) {
            var I = r.get(A + "");
            I !== void 0 ? y(I, ce) : A in s && (I = f(() => /* @__PURE__ */ $(ce)), r.set(A + "", I));
          }
        g === void 0 ? (!p || (J = it(s, u)) != null && J.writable) && (g = f(() => /* @__PURE__ */ $(void 0)), y(
          g,
          f(() => Me(d))
        ), r.set(u, g)) : (p = g.v !== ce, y(
          g,
          f(() => Me(d))
        ));
        var _ = Reflect.getOwnPropertyDescriptor(s, u);
        if (_ != null && _.set && _.set.call(m, d), !p) {
          if (i && typeof u == "string") {
            var O = (
              /** @type {Source<number>} */
              r.get("length")
            ), ue = Number(u);
            Number.isInteger(ue) && ue >= O.v && y(O, ue + 1);
          }
          jr(l);
        }
        return !0;
      },
      ownKeys(s) {
        o(l);
        var u = Reflect.ownKeys(s).filter((g) => {
          var p = r.get(g);
          return p === void 0 || p.v !== ce;
        });
        for (var [d, m] of r)
          m.v !== ce && !(d in s) && u.push(d);
        return u;
      },
      setPrototypeOf() {
        lo();
      }
    }
  );
}
function jr(e, t = 1) {
  y(e, e.v + t);
}
// @__NO_SIDE_EFFECTS__
function br(e) {
  var t = we | ze, r = R !== null && (R.f & we) !== 0 ? (
    /** @type {Derived} */
    R
  ) : null;
  return j === null || r !== null && (r.f & ge) !== 0 ? t |= ge : j.f |= ni, {
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
function Nt(e) {
  const t = /* @__PURE__ */ br(e);
  return Ei(t), t;
}
// @__NO_SIDE_EFFECTS__
function po(e) {
  const t = /* @__PURE__ */ br(e);
  return t.equals = Zr, t;
}
function pi(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Ge(
        /** @type {Effect} */
        t[r]
      );
  }
}
function mo(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & we) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function mi(e) {
  var t, r = j;
  Ze(mo(e));
  try {
    pi(e), t = Ii(e);
  } finally {
    Ze(r);
  }
  return t;
}
function yi(e) {
  var t = mi(e), r = (Be || (e.f & ge) !== 0) && e.deps !== null ? st : fe;
  Ce(e, r), e.equals(t) || (e.v = t, e.wv = xi());
}
const Ut = /* @__PURE__ */ new Map();
function Ai(e, t) {
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
function $(e, t) {
  const r = Ai(e);
  return Ei(r), r;
}
// @__NO_SIDE_EFFECTS__
function Wr(e, t = !1) {
  const r = Ai(e);
  return t || (r.equals = Zr), r;
}
function y(e, t, r = !1) {
  R !== null && !Re && bi() && (R.f & (we | Mr)) !== 0 && !(ne != null && ne.includes(e)) && so();
  let i = r ? Me(t) : t;
  return yo(e, i);
}
function yo(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    Zt ? Ut.set(e, t) : Ut.set(e, r), e.v = t, (e.f & we) !== 0 && ((e.f & ze) !== 0 && mi(
      /** @type {Derived} */
      e
    ), Ce(e, (e.f & ge) === 0 ? fe : st)), e.wv = xi(), ki(e, ze), j !== null && (j.f & fe) !== 0 && (j.f & (Ne | lt)) === 0 && (be === null ? _o([e]) : be.push(e));
  }
  return t;
}
function ki(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, l = 0; l < i; l++) {
      var n = r[l], f = n.f;
      (f & ze) === 0 && (Ce(n, t), (f & (fe | ge)) !== 0 && ((f & we) !== 0 ? ki(
        /** @type {Derived} */
        n,
        st
      ) : Ar(
        /** @type {Effect} */
        n
      )));
    }
}
function pr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let N = !1;
function _t(e) {
  N = e;
}
let z;
function Ue(e) {
  if (e === null)
    throw pr(), Ct;
  return z = e;
}
function Lt() {
  return Ue(
    /** @type {TemplateNode} */
    /* @__PURE__ */ We(z)
  );
}
function G(e) {
  if (N) {
    if (/* @__PURE__ */ We(z) !== null)
      throw pr(), Ct;
    z = e;
  }
}
function Ao() {
  for (var e = 0, t = z; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === di) {
        if (e === 0) return t;
        e -= 1;
      } else (r === Gr || r === ui) && (e += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ We(t)
    );
    t.remove(), t = i;
  }
}
var Fa, _i, wi, Ci;
function zr() {
  if (Fa === void 0) {
    Fa = window, _i = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    wi = it(t, "firstChild").get, Ci = it(t, "nextSibling").get, Oa(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Oa(r) && (r.__t = void 0);
  }
}
function mr(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function me(e) {
  return wi.call(e);
}
// @__NO_SIDE_EFFECTS__
function We(e) {
  return Ci.call(e);
}
function W(e, t) {
  if (!N)
    return /* @__PURE__ */ me(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ me(z)
  );
  return r === null && (r = z.appendChild(mr())), Ue(r), r;
}
function Dt(e, t) {
  if (!N) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ me(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ We(r) : r;
  }
  return z;
}
function Y(e, t = 1, r = !1) {
  let i = N ? z : e;
  for (var l; t--; )
    l = i, i = /** @type {TemplateNode} */
    /* @__PURE__ */ We(i);
  if (!N)
    return i;
  var n = i == null ? void 0 : i.nodeType;
  if (r && n !== 3) {
    var f = mr();
    return i === null ? l == null || l.after(f) : i.before(f), Ue(f), f;
  }
  return Ue(i), /** @type {TemplateNode} */
  i;
}
function ko(e) {
  e.textContent = "";
}
let ir = !1, fr = !1, ur = null, nt = !1, Zt = !1;
function Ma(e) {
  Zt = e;
}
let Ht = [];
let R = null, Re = !1;
function Se(e) {
  R = e;
}
let j = null;
function Ze(e) {
  j = e;
}
let ne = null;
function Ei(e) {
  R !== null && R.f & Pr && (ne === null ? ne = [e] : ne.push(e));
}
let ae = null, he = 0, be = null;
function _o(e) {
  be = e;
}
let Li = 1, dr = 0, Be = !1;
function xi() {
  return ++Li;
}
function Gt(e) {
  var g;
  var t = e.f;
  if ((t & ze) !== 0)
    return !0;
  if ((t & st) !== 0) {
    var r = e.deps, i = (t & ge) !== 0;
    if (r !== null) {
      var l, n, f = (t & cr) !== 0, s = i && j !== null && !Be, u = r.length;
      if (f || s) {
        var d = (
          /** @type {Derived} */
          e
        ), m = d.parent;
        for (l = 0; l < u; l++)
          n = r[l], (f || !((g = n == null ? void 0 : n.reactions) != null && g.includes(d))) && (n.reactions ?? (n.reactions = [])).push(d);
        f && (d.f ^= cr), s && m !== null && (m.f & ge) === 0 && (d.f ^= ge);
      }
      for (l = 0; l < u; l++)
        if (n = r[l], Gt(
          /** @type {Derived} */
          n
        ) && yi(
          /** @type {Derived} */
          n
        ), n.wv > e.wv)
          return !0;
    }
    (!i || j !== null && !Be) && Ce(e, fe);
  }
  return !1;
}
function wo(e, t) {
  for (var r = t; r !== null; ) {
    if ((r.f & sr) !== 0)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= sr;
      }
    r = r.parent;
  }
  throw ir = !1, e;
}
function Ba(e) {
  return (e.f & vr) === 0 && (e.parent === null || (e.parent.f & sr) === 0);
}
function yr(e, t, r, i) {
  if (ir) {
    if (r === null && (ir = !1), Ba(t))
      throw e;
    return;
  }
  if (r !== null && (ir = !0), wo(e, t), Ba(t))
    throw e;
}
function Ti(e, t, r = !0) {
  var i = e.reactions;
  if (i !== null)
    for (var l = 0; l < i.length; l++) {
      var n = i[l];
      ne != null && ne.includes(e) || ((n.f & we) !== 0 ? Ti(
        /** @type {Derived} */
        n,
        t,
        !1
      ) : t === n && (r ? Ce(n, ze) : (n.f & fe) !== 0 && Ce(n, st), Ar(
        /** @type {Effect} */
        n
      )));
    }
}
function Ii(e) {
  var A;
  var t = ae, r = he, i = be, l = R, n = Be, f = ne, s = ie, u = Re, d = e.f;
  ae = /** @type {null | Value[]} */
  null, he = 0, be = null, Be = (d & ge) !== 0 && (Re || !nt || R === null), R = (d & (Ne | lt)) === 0 ? e : null, ne = null, Ha(e.ctx), Re = !1, dr++, e.f |= Pr;
  try {
    var m = (
      /** @type {Function} */
      (0, e.fn)()
    ), g = e.deps;
    if (ae !== null) {
      var p;
      if (hr(e, he), g !== null && he > 0)
        for (g.length = he + ae.length, p = 0; p < ae.length; p++)
          g[he + p] = ae[p];
      else
        e.deps = g = ae;
      if (!Be)
        for (p = he; p < g.length; p++)
          ((A = g[p]).reactions ?? (A.reactions = [])).push(e);
    } else g !== null && he < g.length && (hr(e, he), g.length = he);
    if (bi() && be !== null && !Re && g !== null && (e.f & (we | st | ze)) === 0)
      for (p = 0; p < /** @type {Source[]} */
      be.length; p++)
        Ti(
          be[p],
          /** @type {Effect} */
          e
        );
    return l !== null && l !== e && (dr++, be !== null && (i === null ? i = be : i.push(.../** @type {Source[]} */
    be))), m;
  } finally {
    ae = t, he = r, be = i, R = l, Be = n, ne = f, Ha(s), Re = u, e.f ^= Pr;
  }
}
function Co(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var i = Fn.call(r, e);
    if (i !== -1) {
      var l = r.length - 1;
      l === 0 ? r = t.reactions = null : (r[i] = r[l], r.pop());
    }
  }
  r === null && (t.f & we) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ae === null || !ae.includes(t)) && (Ce(t, st), (t.f & (ge | cr)) === 0 && (t.f ^= cr), pi(
    /** @type {Derived} **/
    t
  ), hr(
    /** @type {Derived} **/
    t,
    0
  ));
}
function hr(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var i = t; i < r.length; i++)
      Co(e, r[i]);
}
function Yr(e) {
  var t = e.f;
  if ((t & vr) === 0) {
    Ce(e, fe);
    var r = j, i = ie, l = nt;
    j = e, nt = !0;
    try {
      (t & Mr) !== 0 ? So(e) : Si(e), ji(e);
      var n = Ii(e);
      e.teardown = typeof n == "function" ? n : null, e.wv = Li;
      var f = e.deps, s;
    } catch (u) {
      yr(u, e, r, i || e.ctx);
    } finally {
      nt = l, j = r;
    }
  }
}
function Eo() {
  try {
    ao();
  } catch (e) {
    if (ur !== null)
      yr(e, ur, null);
    else
      throw e;
  }
}
function Vi() {
  var e = nt;
  try {
    var t = 0;
    for (nt = !0; Ht.length > 0; ) {
      t++ > 1e3 && Eo();
      var r = Ht, i = r.length;
      Ht = [];
      for (var l = 0; l < i; l++) {
        var n = xo(r[l]);
        Lo(n);
      }
      Ut.clear();
    }
  } finally {
    fr = !1, nt = e, ur = null;
  }
}
function Lo(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var i = e[r];
      if ((i.f & (vr | Et)) === 0)
        try {
          Gt(i) && (Yr(i), i.deps === null && i.first === null && i.nodes_start === null && (i.teardown === null ? Pi(i) : i.fn = null));
        } catch (l) {
          yr(l, i, null, i.ctx);
        }
    }
}
function Ar(e) {
  fr || (fr = !0, queueMicrotask(Vi));
  for (var t = ur = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (lt | Ne)) !== 0) {
      if ((r & fe) === 0) return;
      t.f ^= fe;
    }
  }
  Ht.push(t);
}
function xo(e) {
  for (var t = [], r = e; r !== null; ) {
    var i = r.f, l = (i & (Ne | lt)) !== 0, n = l && (i & fe) !== 0;
    if (!n && (i & Et) === 0) {
      if ((i & ii) !== 0)
        t.push(r);
      else if (l)
        r.f ^= fe;
      else
        try {
          Gt(r) && Yr(r);
        } catch (u) {
          yr(u, r, null, r.ctx);
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
function C(e) {
  for (var t; ; ) {
    if (Qn(), Ht.length === 0)
      return (
        /** @type {T} */
        t
      );
    fr = !0, Vi();
  }
}
async function Sr() {
  await Promise.resolve(), C();
}
function o(e) {
  var t = e.f, r = (t & we) !== 0;
  if (R !== null && !Re) {
    if (!(ne != null && ne.includes(e))) {
      var i = R.deps;
      e.rv < dr && (e.rv = dr, ae === null && i !== null && i[he] === e ? he++ : ae === null ? ae = [e] : (!Be || !ae.includes(e)) && ae.push(e));
    }
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var l = (
      /** @type {Derived} */
      e
    ), n = l.parent;
    n !== null && (n.f & ge) === 0 && (l.f ^= ge);
  }
  return r && (l = /** @type {Derived} */
  e, Gt(l) && yi(l)), Zt && Ut.has(e) ? Ut.get(e) : e.v;
}
function ot(e) {
  var t = Re;
  try {
    return Re = !0, e();
  } finally {
    Re = t;
  }
}
const To = -7169;
function Ce(e, t) {
  e.f = e.f & To | t;
}
function Io(e) {
  j === null && R === null && ro(), R !== null && (R.f & ge) !== 0 && j === null && to(), Zt && eo();
}
function Vo(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function ct(e, t, r, i = !0) {
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
      Yr(n), n.f |= Wn;
    } catch (u) {
      throw Ge(n), u;
    }
  else t !== null && Ar(n);
  var f = r && n.deps === null && n.first === null && n.nodes_start === null && n.teardown === null && (n.f & (ni | sr)) === 0;
  if (!f && i && (l !== null && Vo(n, l), R !== null && (R.f & we) !== 0)) {
    var s = (
      /** @type {Derived} */
      R
    );
    (s.effects ?? (s.effects = [])).push(n);
  }
  return n;
}
function Kr(e) {
  const t = ct(gr, null, !1);
  return Ce(t, fe), t.teardown = e, t;
}
function Nr(e) {
  Io();
  var t = j !== null && (j.f & Ne) !== 0 && ie !== null && !ie.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      ie
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: j,
      reaction: R
    });
  } else {
    var i = Jr(e);
    return i;
  }
}
function Ro(e) {
  const t = ct(lt, e, !0);
  return () => {
    Ge(t);
  };
}
function jo(e) {
  const t = ct(lt, e, !0);
  return (r = {}) => new Promise((i) => {
    r.outro ? qr(t, () => {
      Ge(t), i(void 0);
    }) : (Ge(t), i(void 0));
  });
}
function Jr(e) {
  return ct(ii, e, !1);
}
function Xr(e) {
  return ct(gr, e, !0);
}
function Ve(e, t = [], r = br) {
  const i = t.map(r);
  return Ri(() => e(...i.map(o)));
}
function Ri(e, t = 0) {
  return ct(gr | Mr | t, e, !0);
}
function Dr(e, t = !0) {
  return ct(gr | Ne, e, !0, t);
}
function ji(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Zt, i = R;
    Ma(!0), Se(null);
    try {
      t.call(null);
    } finally {
      Ma(r), Se(i);
    }
  }
}
function Si(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var i = r.next;
    (r.f & lt) !== 0 ? r.parent = null : Ge(r, t), r = i;
  }
}
function So(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Ne) === 0 && Ge(t), t = r;
  }
}
function Ge(e, t = !0) {
  var r = !1;
  (t || (e.f & Yn) !== 0) && e.nodes_start !== null && ($i(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), r = !0), Si(e, t && !r), hr(e, 0), Ce(e, vr);
  var i = e.transitions;
  if (i !== null)
    for (const n of i)
      n.stop();
  ji(e);
  var l = e.parent;
  l !== null && l.first !== null && Pi(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function $i(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ We(e)
    );
    e.remove(), e = r;
  }
}
function Pi(e) {
  var t = e.parent, r = e.prev, i = e.next;
  r !== null && (r.next = i), i !== null && (i.prev = r), t !== null && (t.first === e && (t.first = i), t.last === e && (t.last = r));
}
function qr(e, t) {
  var r = [];
  zi(e, r, !0), $o(r, () => {
    Ge(e), t && t();
  });
}
function $o(e, t) {
  var r = e.length;
  if (r > 0) {
    var i = () => --r || t();
    for (var l of e)
      l.out(i);
  } else
    t();
}
function zi(e, t, r) {
  if ((e.f & Et) === 0) {
    if (e.f ^= Et, e.transitions !== null)
      for (const f of e.transitions)
        (f.is_global || r) && t.push(f);
    for (var i = e.first; i !== null; ) {
      var l = i.next, n = (i.f & Br) !== 0 || (i.f & Ne) !== 0;
      zi(i, t, n ? r : !1), i = l;
    }
  }
}
function Ua(e) {
  Ni(e, !0);
}
function Ni(e, t) {
  if ((e.f & Et) !== 0) {
    e.f ^= Et, (e.f & fe) === 0 && (e.f ^= fe), Gt(e) && (Ce(e, ze), Ar(e));
    for (var r = e.first; r !== null; ) {
      var i = r.next, l = (r.f & Br) !== 0 || (r.f & Ne) !== 0;
      Ni(r, l ? t : !1), r = i;
    }
    if (e.transitions !== null)
      for (const n of e.transitions)
        (n.is_global || t) && n.in();
  }
}
const Po = ["touchstart", "touchmove"];
function zo(e) {
  return Po.includes(e);
}
function No(e, t) {
  if (t) {
    const r = document.body;
    e.autofocus = !0, Ur(() => {
      document.activeElement === r && e.focus();
    });
  }
}
let Za = !1;
function Di() {
  Za || (Za = !0, document.addEventListener(
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
function qi(e) {
  var t = R, r = j;
  Se(null), Ze(null);
  try {
    return e();
  } finally {
    Se(t), Ze(r);
  }
}
function Do(e, t, r, i = r) {
  e.addEventListener(t, () => qi(r));
  const l = e.__on_r;
  l ? e.__on_r = () => {
    l(), i(!0);
  } : e.__on_r = () => i(!0), Di();
}
const Oi = /* @__PURE__ */ new Set(), Or = /* @__PURE__ */ new Set();
function qo(e, t, r, i = {}) {
  function l(n) {
    if (i.capture || qt.call(t, n), !n.cancelBubble)
      return qi(() => r == null ? void 0 : r.call(this, n));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Ur(() => {
    t.addEventListener(e, l, i);
  }) : t.addEventListener(e, l, i), l;
}
function Fe(e, t, r, i, l) {
  var n = { capture: i, passive: l }, f = qo(e, t, r, n);
  (t === document.body || t === window || t === document) && Kr(() => {
    t.removeEventListener(e, f, n);
  });
}
function Oo(e) {
  for (var t = 0; t < e.length; t++)
    Oi.add(e[t]);
  for (var r of Or)
    r(e);
}
function qt(e) {
  var J;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), i = e.type, l = ((J = e.composedPath) == null ? void 0 : J.call(e)) || [], n = (
    /** @type {null | Element} */
    l[0] || e.target
  ), f = 0, s = e.__root;
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
    u <= d && (f = u);
  }
  if (n = /** @type {Element} */
  l[f] || e.target, n !== t) {
    Ft(e, "currentTarget", {
      configurable: !0,
      get() {
        return n || r;
      }
    });
    var m = R, g = j;
    Se(null), Ze(null);
    try {
      for (var p, A = []; n !== null; ) {
        var I = n.assignedSlot || n.parentNode || /** @type {any} */
        n.host || null;
        try {
          var _ = n["__" + i];
          if (_ != null && (!/** @type {any} */
          n.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === n))
            if (ti(_)) {
              var [O, ...ue] = _;
              O.apply(n, [e, ...ue]);
            } else
              _.call(n, e);
        } catch (te) {
          p ? A.push(te) : p = te;
        }
        if (e.cancelBubble || I === t || I === null)
          break;
        n = I;
      }
      if (p) {
        for (let te of A)
          queueMicrotask(() => {
            throw te;
          });
        throw p;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Se(m), Ze(g);
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
function Ee(e, t) {
  var r = (t & go) !== 0, i = (t & vo) !== 0, l, n = !e.startsWith("<!>");
  return () => {
    if (N)
      return je(z, null), z;
    l === void 0 && (l = Qr(n ? e : "<!>" + e), r || (l = /** @type {Node} */
    /* @__PURE__ */ me(l)));
    var f = (
      /** @type {TemplateNode} */
      i || _i ? document.importNode(l, !0) : l.cloneNode(!0)
    );
    if (r) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ me(f)
      ), u = (
        /** @type {TemplateNode} */
        f.lastChild
      );
      je(s, u);
    } else
      je(f, f);
    return f;
  };
}
// @__NO_SIDE_EFFECTS__
function kr(e, t, r = "svg") {
  var i = !e.startsWith("<!>"), l = `<${r}>${i ? e : "<!>" + e}</${r}>`, n;
  return () => {
    if (N)
      return je(z, null), z;
    if (!n) {
      var f = (
        /** @type {DocumentFragment} */
        Qr(l)
      ), s = (
        /** @type {Element} */
        /* @__PURE__ */ me(f)
      );
      n = /** @type {Element} */
      /* @__PURE__ */ me(s);
    }
    var u = (
      /** @type {TemplateNode} */
      n.cloneNode(!0)
    );
    return je(u, u), u;
  };
}
function tr() {
  if (N)
    return je(z, null), z;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = mr();
  return e.append(t, r), je(t, r), e;
}
function H(e, t) {
  if (N) {
    j.nodes_end = z, Lt();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Ho(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function Hi(e, t) {
  return Fi(e, t);
}
function Fo(e, t) {
  zr(), t.intro = t.intro ?? !1;
  const r = t.target, i = N, l = z;
  try {
    for (var n = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ me(r)
    ); n && (n.nodeType !== 8 || /** @type {Comment} */
    n.data !== Gr); )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ We(n);
    if (!n)
      throw Ct;
    _t(!0), Ue(
      /** @type {Comment} */
      n
    ), Lt();
    const f = Fi(e, { ...t, anchor: n });
    if (z === null || z.nodeType !== 8 || /** @type {Comment} */
    z.data !== di)
      throw pr(), Ct;
    return _t(!1), /**  @type {Exports} */
    f;
  } catch (f) {
    if (f === Ct)
      return t.recover === !1 && io(), zr(), ko(r), _t(!1), Hi(e, t);
    throw f;
  } finally {
    _t(i), Ue(l);
  }
}
const At = /* @__PURE__ */ new Map();
function Fi(e, { target: t, anchor: r, props: i = {}, events: l, context: n, intro: f = !0 }) {
  zr();
  var s = /* @__PURE__ */ new Set(), u = (g) => {
    for (var p = 0; p < g.length; p++) {
      var A = g[p];
      if (!s.has(A)) {
        s.add(A);
        var I = zo(A);
        t.addEventListener(A, qt, { passive: I });
        var _ = At.get(A);
        _ === void 0 ? (document.addEventListener(A, qt, { passive: I }), At.set(A, 1)) : At.set(A, _ + 1);
      }
    }
  };
  u(Mn(Oi)), Or.add(u);
  var d = void 0, m = jo(() => {
    var g = r ?? t.appendChild(mr());
    return Dr(() => {
      if (n) {
        gi({});
        var p = (
          /** @type {ComponentContext} */
          ie
        );
        p.c = n;
      }
      l && (i.$$events = l), N && je(
        /** @type {TemplateNode} */
        g,
        null
      ), d = e(g, i) || {}, N && (j.nodes_end = z), n && vi();
    }), () => {
      var I;
      for (var p of s) {
        t.removeEventListener(p, qt);
        var A = (
          /** @type {number} */
          At.get(p)
        );
        --A === 0 ? (document.removeEventListener(p, qt), At.delete(p)) : At.set(p, A);
      }
      Or.delete(u), g !== r && ((I = g.parentNode) == null || I.removeChild(g));
    };
  });
  return Hr.set(d, m), d;
}
let Hr = /* @__PURE__ */ new WeakMap();
function Mo(e, t) {
  const r = Hr.get(e);
  return r ? (Hr.delete(e), r(t)) : Promise.resolve();
}
function K(e, t, [r, i] = [0, 0]) {
  N && r === 0 && Lt();
  var l = e, n = null, f = null, s = ce, u = r > 0 ? Br : 0, d = !1;
  const m = (p, A = !0) => {
    d = !0, g(A, p);
  }, g = (p, A) => {
    if (s === (s = p)) return;
    let I = !1;
    if (N && i !== -1) {
      if (r === 0) {
        const O = (
          /** @type {Comment} */
          l.data
        );
        O === Gr ? i = 0 : O === ui ? i = 1 / 0 : (i = parseInt(O.substring(1)), i !== i && (i = s ? 1 / 0 : -1));
      }
      const _ = i > r;
      !!s === _ && (l = Ao(), Ue(l), _t(!1), I = !0, i = -1);
    }
    s ? (n ? Ua(n) : A && (n = Dr(() => A(l))), f && qr(f, () => {
      f = null;
    })) : (f ? Ua(f) : A && (f = Dr(() => A(l, [r + 1, i]))), n && qr(n, () => {
      n = null;
    })), I && _t(!0);
  };
  Ri(() => {
    d = !1, t(m), d || g(null, null);
  }, u), N && (l = z);
}
function at(e, t, r = !1, i = !1, l = !1) {
  var n = e, f = "";
  Ve(() => {
    var s = (
      /** @type {Effect} */
      j
    );
    if (f === (f = t() ?? "")) {
      N && Lt();
      return;
    }
    if (s.nodes_start !== null && ($i(
      s.nodes_start,
      /** @type {TemplateNode} */
      s.nodes_end
    ), s.nodes_start = s.nodes_end = null), f !== "") {
      if (N) {
        z.data;
        for (var u = Lt(), d = u; u !== null && (u.nodeType !== 8 || /** @type {Comment} */
        u.data !== ""); )
          d = u, u = /** @type {TemplateNode} */
          /* @__PURE__ */ We(u);
        if (u === null)
          throw pr(), Ct;
        je(z, d), n = Ue(u);
        return;
      }
      var m = f + "";
      r ? m = `<svg>${m}</svg>` : i && (m = `<math>${m}</math>`);
      var g = Qr(m);
      if ((r || i) && (g = /** @type {Element} */
      /* @__PURE__ */ me(g)), je(
        /** @type {TemplateNode} */
        /* @__PURE__ */ me(g),
        /** @type {TemplateNode} */
        g.lastChild
      ), r || i)
        for (; /* @__PURE__ */ me(g); )
          n.before(
            /** @type {Node} */
            /* @__PURE__ */ me(g)
          );
      else
        n.before(g);
    }
  });
}
function Bo(e, t, r, i, l) {
  var s;
  N && Lt();
  var n = (s = t.$$slots) == null ? void 0 : s[r], f = !1;
  n === !0 && (n = t.children, f = !0), n === void 0 || n(e, f ? () => i : i);
}
const Ga = [...` 	
\r\f \v\uFEFF`];
function Uo(e, t, r) {
  var i = "" + e;
  if (r) {
    for (var l in r)
      if (r[l])
        i = i ? i + " " + l : l;
      else if (i.length)
        for (var n = l.length, f = 0; (f = i.indexOf(l, f)) >= 0; ) {
          var s = f + n;
          (f === 0 || Ga.includes(i[f - 1])) && (s === i.length || Ga.includes(i[s])) ? i = (f === 0 ? "" : i.substring(0, f)) + i.substring(s + 1) : f = s;
        }
  }
  return i === "" ? null : i;
}
function Zo(e, t, r, i, l, n) {
  var f = e.__className;
  if (N || f !== r || f === void 0) {
    var s = Uo(r, i, n);
    (!N || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : e.className = s), e.__className = r;
  } else if (n && l !== n)
    for (var u in n) {
      var d = !!n[u];
      (l == null || d !== !!l[u]) && e.classList.toggle(u, d);
    }
  return n;
}
const Go = Symbol("is custom element"), Wo = Symbol("is html");
function Wa(e) {
  if (N) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var i = e.value;
          V(e, "value", null), e.value = i;
        }
        if (e.hasAttribute("checked")) {
          var l = e.checked;
          V(e, "checked", null), e.checked = l;
        }
      }
    };
    e.__on_r = r, Xn(r), Di();
  }
}
function Yo(e, t) {
  var r = Mi(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function V(e, t, r, i) {
  var l = Mi(e);
  N && (l[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || l[t] !== (l[t] = r) && (t === "loading" && (e[Kn] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Ko(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Mi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Go]: e.nodeName.includes("-"),
      [Wo]: e.namespaceURI === bo
    })
  );
}
var Ya = /* @__PURE__ */ new Map();
function Ko(e) {
  var t = Ya.get(e.nodeName);
  if (t) return t;
  Ya.set(e.nodeName, t = []);
  for (var r, i = e, l = Element.prototype; l !== i; ) {
    r = Bn(i);
    for (var n in r)
      r[n].set && t.push(n);
    i = ri(i);
  }
  return t;
}
function Jo(e, t, r = t) {
  Do(e, "change", (i) => {
    var l = i ? e.defaultChecked : e.checked;
    r(l);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (N && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  ot(t) == null) && r(e.checked), Xr(() => {
    var i = t();
    e.checked = !!i;
  });
}
function Ka(e, t) {
  return e === t || (e == null ? void 0 : e[Ot]) === t;
}
function rr(e = {}, t, r, i) {
  return Jr(() => {
    var l, n;
    return Xr(() => {
      l = n, n = [], ot(() => {
        e !== r(...n) && (t(e, ...n), l && Ka(r(...l), e) && t(null, ...l));
      });
    }), () => {
      Ur(() => {
        n && Ka(r(...n), e) && t(null, ...n);
      });
    };
  }), e;
}
let ar = !1, Fr = Symbol();
function Xo(e, t, r) {
  const i = r[t] ?? (r[t] = {
    store: null,
    source: /* @__PURE__ */ Wr(void 0),
    unsubscribe: wt
  });
  if (i.store !== e && !(Fr in r))
    if (i.unsubscribe(), i.store = e ?? null, e == null)
      i.source.v = void 0, i.unsubscribe = wt;
    else {
      var l = !0;
      i.unsubscribe = Zi(e, (n) => {
        l ? i.source.v = n : y(i.source, n);
      }), l = !1;
    }
  return e && Fr in r ? or(e) : o(i.source);
}
function Qo() {
  const e = {};
  function t() {
    Kr(() => {
      for (var r in e)
        e[r].unsubscribe();
      Ft(e, Fr, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function el(e) {
  var t = ar;
  try {
    return ar = !1, [e(), ar];
  } finally {
    ar = t;
  }
}
function Ja(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function E(e, t, r, i) {
  var ft;
  var l = (r & co) !== 0, n = !0, f = (r & uo) !== 0, s = (r & ho) !== 0, u = !1, d;
  f ? [d, u] = el(() => (
    /** @type {V} */
    e[t]
  )) : d = /** @type {V} */
  e[t];
  var m = Ot in e || oi in e, g = f && (((ft = it(e, t)) == null ? void 0 : ft.set) ?? (m && t in e && ((F) => e[t] = F))) || void 0, p = (
    /** @type {V} */
    i
  ), A = !0, I = !1, _ = () => (I = !0, A && (A = !1, s ? p = ot(
    /** @type {() => V} */
    i
  ) : p = /** @type {V} */
  i), p);
  d === void 0 && i !== void 0 && (g && n && no(), d = _(), g && g(d));
  var O;
  if (O = () => {
    var F = (
      /** @type {V} */
      e[t]
    );
    return F === void 0 ? _() : (A = !0, I = !1, F);
  }, (r & fo) === 0)
    return O;
  if (g) {
    var ue = e.$$legacy;
    return function(F, oe) {
      return arguments.length > 0 ? ((!oe || ue || u) && g(oe ? O() : F), F) : O();
    };
  }
  var J = !1, te = /* @__PURE__ */ Wr(d), X = /* @__PURE__ */ br(() => {
    var F = O(), oe = o(te);
    return J ? (J = !1, oe) : te.v = F;
  });
  return f && o(X), l || (X.equals = Zr), function(F, oe) {
    if (arguments.length > 0) {
      const ye = oe ? o(X) : f ? Me(F) : F;
      if (!X.equals(ye)) {
        if (J = !0, y(te, ye), I && p !== void 0 && (p = ye), Ja(X))
          return F;
        ot(() => o(X));
      }
      return F;
    }
    return Ja(X) ? X.v : o(X);
  };
}
function tl(e) {
  return new rl(e);
}
var Pe, pe;
class rl {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    Vr(this, Pe);
    /** @type {Record<string, any>} */
    Vr(this, pe);
    var n;
    var r = /* @__PURE__ */ new Map(), i = (f, s) => {
      var u = /* @__PURE__ */ Wr(s);
      return r.set(f, u), u;
    };
    const l = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(f, s) {
          return o(r.get(s) ?? i(s, Reflect.get(f, s)));
        },
        has(f, s) {
          return s === oi ? !0 : (o(r.get(s) ?? i(s, Reflect.get(f, s))), Reflect.has(f, s));
        },
        set(f, s, u) {
          return y(r.get(s) ?? i(s, u), u), Reflect.set(f, s, u);
        }
      }
    );
    Rr(this, pe, (t.hydrate ? Fo : Hi)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: l,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((n = t == null ? void 0 : t.props) != null && n.$$host) || t.sync === !1) && C(), Rr(this, Pe, l.$$events);
    for (const f of Object.keys(se(this, pe)))
      f === "$set" || f === "$destroy" || f === "$on" || Ft(this, f, {
        get() {
          return se(this, pe)[f];
        },
        /** @param {any} value */
        set(s) {
          se(this, pe)[f] = s;
        },
        enumerable: !0
      });
    se(this, pe).$set = /** @param {Record<string, any>} next */
    (f) => {
      Object.assign(l, f);
    }, se(this, pe).$destroy = () => {
      Mo(se(this, pe));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    se(this, pe).$set(t);
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
    se(this, pe).$destroy();
  }
}
Pe = new WeakMap(), pe = new WeakMap();
let Bi;
typeof HTMLElement == "function" && (Bi = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, i) {
    super();
    /** The Svelte component constructor */
    _e(this, "$$ctor");
    /** Slots */
    _e(this, "$$s");
    /** @type {any} The Svelte component instance */
    _e(this, "$$c");
    /** Whether or not the custom element is connected */
    _e(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    _e(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    _e(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    _e(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    _e(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    _e(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    _e(this, "$$me");
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
          const f = document.createElement("slot");
          l !== "default" && (f.name = l), H(n, f);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, i = al(this);
      for (const l of this.$$s)
        l in i && (l === "default" && !this.$$d.children ? (this.$$d.children = t(l), r.default = !0) : r[l] = t(l));
      for (const l of this.attributes) {
        const n = this.$$g_p(l.name);
        n in this.$$d || (this.$$d[n] = nr(n, l.value, this.$$p_d, "toProp"));
      }
      for (const l in this.$$p_d)
        !(l in this.$$d) && this[l] !== void 0 && (this.$$d[l] = this[l], delete this[l]);
      this.$$c = tl({
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
          for (const n of lr(this.$$c)) {
            if (!((l = this.$$p_d[n]) != null && l.reflect)) continue;
            this.$$d[n] = this.$$c[n];
            const f = nr(
              n,
              this.$$d[n],
              this.$$p_d,
              "toAttribute"
            );
            f == null ? this.removeAttribute(this.$$p_d[n].attribute || n) : this.setAttribute(this.$$p_d[n].attribute || n, f);
          }
          this.$$r = !1;
        });
      });
      for (const l in this.$$l)
        for (const n of this.$$l[l]) {
          const f = this.$$c.$on(l, n);
          this.$$l_u.set(n, f);
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = nr(t, i, this.$$p_d, "toProp"), (l = this.$$c) == null || l.$set({ [t]: this.$$d[t] }));
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
    return lr(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function nr(e, t, r, i) {
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
function al(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function il(e, t, r, i, l, n) {
  let f = class extends Bi {
    constructor() {
      super(e, r, l), this.$$p_d = t;
    }
    static get observedAttributes() {
      return lr(t).map(
        (s) => (t[s].attribute || s).toLowerCase()
      );
    }
  };
  return lr(t).forEach((s) => {
    Ft(f.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(u) {
        var g;
        u = nr(s, u, t), this.$$d[s] = u;
        var d = this.$$c;
        if (d) {
          var m = (g = it(d, s)) == null ? void 0 : g.get;
          m ? d[s] = u : d.$set({ [s]: u });
        }
      }
    });
  }), i.forEach((s) => {
    Ft(f.prototype, s, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[s];
      }
    });
  }), e.element = /** @type {any} */
  f, f;
}
function Ui(e) {
  ie === null && hi(), Nr(() => {
    const t = ot(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function nl(e) {
  ie === null && hi(), Ui(() => () => ot(e));
}
function Zi(e, t, r) {
  if (e == null)
    return t(void 0), wt;
  const i = ot(
    () => e.subscribe(
      t,
      // @ts-expect-error
      r
    )
  );
  return i.unsubscribe ? () => i.unsubscribe() : i;
}
const kt = [];
function ol(e, t = wt) {
  let r = null;
  const i = /* @__PURE__ */ new Set();
  function l(s) {
    if (fi(e, s) && (e = s, r)) {
      const u = !kt.length;
      for (const d of i)
        d[1](), kt.push(d, e);
      if (u) {
        for (let d = 0; d < kt.length; d += 2)
          kt[d][0](kt[d + 1]);
        kt.length = 0;
      }
    }
  }
  function n(s) {
    l(s(
      /** @type {T} */
      e
    ));
  }
  function f(s, u = wt) {
    const d = [s, u];
    return i.add(d), i.size === 1 && (r = t(l, n) || wt), s(
      /** @type {T} */
      e
    ), () => {
      i.delete(d), i.size === 0 && r && (r(), r = null);
    };
  }
  return { set: l, update: n, subscribe: f };
}
function or(e) {
  let t;
  return Zi(e, (r) => t = r)(), t;
}
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (e) => or(globalThis.altchaI18n.store)[e],
  set: (e, t) => {
    Object.assign(or(globalThis.altchaI18n.store), {
      [e]: t
    }), globalThis.altchaI18n.store.set(or(globalThis.altchaI18n.store));
  },
  store: ol({})
};
const ll = {
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
globalThis.altchaI18n.set("af", ll);
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
const cl = {
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
globalThis.altchaI18n.set("bg", cl);
const fl = {
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
globalThis.altchaI18n.set("be", fl);
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
globalThis.altchaI18n.set("fi", kl);
const _l = {
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
globalThis.altchaI18n.set("fr-ca", _l);
const wl = {
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
globalThis.altchaI18n.set("fr-fr", wl);
const Cl = {
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
globalThis.altchaI18n.set("ga", Cl);
const El = {
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
globalThis.altchaI18n.set("hr", El);
const Ll = {
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
globalThis.altchaI18n.set("hu", Ll);
const xl = {
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
globalThis.altchaI18n.set("is", xl);
const Tl = {
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
globalThis.altchaI18n.set("it", Tl);
const Il = {
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
globalThis.altchaI18n.set("lt", Il);
const Vl = {
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
globalThis.altchaI18n.set("lv", Vl);
const Rl = {
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
globalThis.altchaI18n.set("mt", Rl);
const Gi = {
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
globalThis.altchaI18n.set("nb", Gi);
globalThis.altchaI18n.set("no", Gi);
const jl = {
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
globalThis.altchaI18n.set("nl", jl);
const Sl = {
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
globalThis.altchaI18n.set("pl", Sl);
const $l = {
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
globalThis.altchaI18n.set("pt-pt", $l);
const Pl = {
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
globalThis.altchaI18n.set("pt-br", Pl);
const zl = {
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
globalThis.altchaI18n.set("ro", zl);
const Nl = {
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
globalThis.altchaI18n.set("ru", Nl);
const Dl = {
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
globalThis.altchaI18n.set("sk", Dl);
const ql = {
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
globalThis.altchaI18n.set("sl", ql);
const Ol = {
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
globalThis.altchaI18n.set("sr", Ol);
const Hl = {
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
globalThis.altchaI18n.set("sv", Hl);
const Fl = {
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
globalThis.altchaI18n.set("tr", Fl);
const Ml = {
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
globalThis.altchaI18n.set("uk", Ml);
const Bl = {
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
globalThis.altchaI18n.set("bn", Bl);
const Ul = {
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
globalThis.altchaI18n.set("he", Ul);
const Zl = {
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
globalThis.altchaI18n.set("hi", Zl);
const Gl = {
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
globalThis.altchaI18n.set("id", Gl);
const Wl = {
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
globalThis.altchaI18n.set("ja", Wl);
const Yl = {
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
globalThis.altchaI18n.set("ko", Yl);
const Kl = {
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
globalThis.altchaI18n.set("mr", Kl);
const Jl = {
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
globalThis.altchaI18n.set("ta", Jl);
const Xl = {
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
globalThis.altchaI18n.set("te", Xl);
const Ql = {
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
globalThis.altchaI18n.set("th", Ql);
const es = {
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
globalThis.altchaI18n.set("ur", es);
const ts = {
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
globalThis.altchaI18n.set("vi", ts);
const rs = {
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
globalThis.altchaI18n.set("zh-cn", rs);
const as = {
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
globalThis.altchaI18n.set("zh-tw", as);
const Wi = `(function(){"use strict";const d=new TextEncoder;function p(e){return[...new Uint8Array(e)].map(t=>t.toString(16).padStart(2,"0")).join("")}async function b(e,t,r){if(typeof crypto>"u"||!("subtle"in crypto)||!("digest"in crypto.subtle))throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");return p(await crypto.subtle.digest(r.toUpperCase(),d.encode(e+t)))}function w(e,t,r="SHA-256",n=1e6,s=0){const o=new AbortController,a=Date.now();return{promise:(async()=>{for(let c=s;c<=n;c+=1){if(o.signal.aborted)return null;if(await b(t,c,r)===e)return{number:c,took:Date.now()-a}}return null})(),controller:o}}function h(e){const t=atob(e),r=new Uint8Array(t.length);for(let n=0;n<t.length;n++)r[n]=t.charCodeAt(n);return r}function g(e,t=12){const r=new Uint8Array(t);for(let n=0;n<t;n++)r[n]=e%256,e=Math.floor(e/256);return r}async function m(e,t="",r=1e6,n=0){const s="AES-GCM",o=new AbortController,a=Date.now(),l=async()=>{for(let u=n;u<=r;u+=1){if(o.signal.aborted||!c||!y)return null;try{const f=await crypto.subtle.decrypt({name:s,iv:g(u)},c,y);if(f)return{clearText:new TextDecoder().decode(f),took:Date.now()-a}}catch{}}return null};let c=null,y=null;try{y=h(e);const u=await crypto.subtle.digest("SHA-256",d.encode(t));c=await crypto.subtle.importKey("raw",u,s,!1,["decrypt"])}catch{return{promise:Promise.reject(),controller:o}}return{promise:l(),controller:o}}let i;onmessage=async e=>{const{type:t,payload:r,start:n,max:s}=e.data;let o=null;if(t==="abort")i==null||i.abort(),i=void 0;else if(t==="work"){if("obfuscated"in r){const{key:a,obfuscated:l}=r||{};o=await m(l,a,s,n)}else{const{algorithm:a,challenge:l,salt:c}=r||{};o=w(l,c,a,s,n)}i=o.controller,o.promise.then(a=>{self.postMessage(a&&{...a,worker:!0})})}}})();
`, Xa = typeof self < "u" && self.Blob && new Blob([Wi], { type: "text/javascript;charset=utf-8" });
function is(e) {
  let t;
  try {
    if (t = Xa && (self.URL || self.webkitURL).createObjectURL(Xa), !t) throw "";
    const r = new Worker(t, {
      name: e == null ? void 0 : e.name
    });
    return r.addEventListener("error", () => {
      (self.URL || self.webkitURL).revokeObjectURL(t);
    }), r;
  } catch {
    return new Worker(
      "data:text/javascript;charset=utf-8," + encodeURIComponent(Wi),
      {
        name: e == null ? void 0 : e.name
      }
    );
  } finally {
    t && (self.URL || self.webkitURL).revokeObjectURL(t);
  }
}
const ns = "5";
var ei;
typeof window < "u" && ((ei = window.__svelte ?? (window.__svelte = {})).v ?? (ei.v = /* @__PURE__ */ new Set())).add(ns);
const Yi = new TextEncoder();
function os(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function ls(e, t = "SHA-256", r = 1e5) {
  const i = Date.now().toString(16);
  e || (e = Math.round(Math.random() * r));
  const l = await Ki(i, e, t);
  return {
    algorithm: t,
    challenge: l,
    salt: i,
    signature: ""
  };
}
async function Ki(e, t, r) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return os(
    await crypto.subtle.digest(
      r.toUpperCase(),
      Yi.encode(e + t)
    )
  );
}
function ss(e, t, r = "SHA-256", i = 1e6, l = 0) {
  const n = new AbortController(), f = Date.now();
  return {
    promise: (async () => {
      for (let u = l; u <= i; u += 1) {
        if (n.signal.aborted)
          return null;
        if (await Ki(t, u, r) === e)
          return {
            number: u,
            took: Date.now() - f
          };
      }
      return null;
    })(),
    controller: n
  };
}
function Qa() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function cs(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let i = 0; i < t.length; i++)
    r[i] = t.charCodeAt(i);
  return r;
}
function fs(e, t = 12) {
  const r = new Uint8Array(t);
  for (let i = 0; i < t; i++)
    r[i] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function us(e, t = "", r = 1e6, i = 0) {
  const l = "AES-GCM", n = new AbortController(), f = Date.now(), s = async () => {
    for (let m = i; m <= r; m += 1) {
      if (n.signal.aborted || !u || !d)
        return null;
      try {
        const g = await crypto.subtle.decrypt(
          {
            name: l,
            iv: fs(m)
          },
          u,
          d
        );
        if (g)
          return {
            clearText: new TextDecoder().decode(g),
            took: Date.now() - f
          };
      } catch {
      }
    }
    return null;
  };
  let u = null, d = null;
  try {
    d = cs(e);
    const m = await crypto.subtle.digest(
      "SHA-256",
      Yi.encode(t)
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
var k = /* @__PURE__ */ ((e) => (e.CODE = "code", e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(k || {}), ee = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.LOADING = "loading", e.PLAYING = "playing", e.PAUSED = "paused", e.READY = "ready", e))(ee || {});
const ds = {
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
globalThis.altchaI18n.set("en", ds);
const $r = (e, t) => {
  let r = /* @__PURE__ */ po(() => Gn(t == null ? void 0 : t(), 24));
  var i = bs();
  Ve(() => {
    V(i, "width", o(r)), V(i, "height", o(r));
  }), H(e, i);
};
function hs(e, t) {
  e.code === "Space" && (e.preventDefault(), e.stopImmediatePropagation(), t());
}
function gs(e, t) {
  e.preventDefault(), t();
}
function vs(e, t, r, i, l, n, f, s) {
  var u;
  [
    k.UNVERIFIED,
    k.ERROR,
    k.EXPIRED,
    k.CODE
  ].includes(o(t)) ? r() !== !1 && ((u = o(i)) == null ? void 0 : u.reportValidity()) === !1 ? y(l, !1) : n() ? f() : s() : y(l, !0);
}
var bs = /* @__PURE__ */ kr('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="altcha-spinner"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor"></path></svg>'), ps = /* @__PURE__ */ Ee('<input type="hidden">'), ms = /* @__PURE__ */ Ee('<div><a target="_blank" class="altcha-logo" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor"></path></svg></a></div>'), ys = /* @__PURE__ */ kr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg>'), As = /* @__PURE__ */ kr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z"></path></svg>'), ks = /* @__PURE__ */ kr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"></path></svg>'), _s = /* @__PURE__ */ Ee('<button type="button" class="altcha-code-challenge-audio"><!></button>'), ws = /* @__PURE__ */ Ee("<audio hidden autoplay><source></audio>"), Cs = /* @__PURE__ */ Ee('<div class="altcha-code-challenge" role="dialog"><div class="altcha-code-challenge-arrow"></div> <form data-code-challenge-form="1"><img class="altcha-code-challenge-image" alt=""> <input type="text" autocomplete="off" name="code" class="altcha-code-challenge-input" required> <div class="altcha-code-challenge-buttons"><div class="altcha-code-challenge-buttons-left"><!> <button type="button" class="altcha-code-challenge-reload"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z"></path></svg></button></div> <button type="submit" class="altcha-code-challenge-verify"><!> </button></div> <!></form></div>'), Es = /* @__PURE__ */ Ee("<div><!></div>"), Ls = /* @__PURE__ */ Ee("<div><!></div>"), xs = /* @__PURE__ */ Ee('<div class="altcha-error"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg> <!></div>'), Ts = /* @__PURE__ */ Ee('<div class="altcha-footer"><div><!></div></div>'), Is = /* @__PURE__ */ Ee('<div class="altcha-anchor-arrow"></div>'), Vs = /* @__PURE__ */ Ee('<!> <div class="altcha"><div class="altcha-main"><div><!> <input type="checkbox"></div> <label class="altcha-label"><!></label> <!> <!> <!></div> <!> <!> <!></div>', 1);
function Rs(e, t) {
  var za, Na;
  gi(t, !0);
  const [r, i] = Qo(), l = () => Xo(Xi, "$altchaI18nStore", r);
  let n = E(t, "auto", 7, void 0), f = E(t, "blockspam", 7, void 0), s = E(t, "challengeurl", 7, void 0), u = E(t, "challengejson", 7, void 0), d = E(t, "credentials", 7, void 0), m = E(t, "customfetch", 7, void 0), g = E(t, "debug", 7, !1), p = E(t, "delay", 7, 0), A = E(t, "disableautofocus", 7, !1), I = E(t, "expire", 7, void 0), _ = E(t, "floating", 7, void 0), O = E(t, "floatinganchor", 7, void 0), ue = E(t, "floatingoffset", 7, void 0), J = E(t, "floatingpersist", 7, !1), te = E(t, "hidefooter", 7, !1), X = E(t, "hidelogo", 7, !1), ft = E(t, "id", 7, void 0), F = E(t, "language", 7, void 0), oe = E(t, "name", 7, "altcha"), ye = E(t, "maxnumber", 7, 1e6), xt = E(t, "mockerror", 7, !1), De = E(t, "obfuscated", 7, void 0), Ae = E(t, "overlay", 7, void 0), Tt = E(t, "overlaycontent", 7, void 0), Wt = E(t, "plugins", 7, void 0), It = E(t, "refetchonexpire", 7, !0), Ye = E(t, "sentinel", 7, void 0), Le = E(t, "spamfilter", 7, !1), ut = E(t, "strings", 7, void 0), ve = E(t, "test", 7, !1), re = E(t, "verifyurl", 7, void 0), dt = E(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), Vt = E(t, "workerurl", 7, void 0);
  const { altchaI18n: Ji } = globalThis, Xi = Ji.store, ea = ["SHA-256", "SHA-384", "SHA-512"], Qi = "https://altcha.org/", qe = (a, c) => {
    t.$$host.dispatchEvent(new CustomEvent(a, { detail: c }));
  }, ta = (Na = (za = document.documentElement.lang) == null ? void 0 : za.split("-")) == null ? void 0 : Na[0], _r = /* @__PURE__ */ Nt(() => {
    var a;
    return s() && new URL(s(), location.origin).host.endsWith(".altcha.org") && !!((a = s()) != null && a.includes("apiKey=ckey_"));
  }), Yt = /* @__PURE__ */ Nt(() => u() ? ba(u()) : void 0), en = /* @__PURE__ */ Nt(() => ut() ? ba(ut()) : {}), P = /* @__PURE__ */ Nt(() => ({
    ...na(l()),
    ...o(en)
  })), ra = /* @__PURE__ */ Nt(() => `${ft() || oe()}_checkbox_${Math.round(Math.random() * 1e8)}`);
  let Ke = /* @__PURE__ */ $(null), Rt = /* @__PURE__ */ $(!1), B = /* @__PURE__ */ $(null), x = /* @__PURE__ */ $(Me(k.UNVERIFIED)), D = /* @__PURE__ */ $(void 0), jt = /* @__PURE__ */ $(null), Oe = /* @__PURE__ */ $(null), de = /* @__PURE__ */ $(null), wr = /* @__PURE__ */ $(null), ht = /* @__PURE__ */ $(null), S = /* @__PURE__ */ $(null), gt = /* @__PURE__ */ $(null), Je = /* @__PURE__ */ $(null), xe = null, U = /* @__PURE__ */ $(null), Xe = /* @__PURE__ */ $(!1), He = [], Cr = /* @__PURE__ */ $(!1), Te = /* @__PURE__ */ $(null);
  Nr(() => {
    gn(o(Je));
  }), Nr(() => {
    vn(o(x));
  }), nl(() => {
    tn(), y(gt, null), o(S) && (o(S).removeEventListener("submit", ua), o(S).removeEventListener("reset", da), o(S).removeEventListener("focusin", fa), y(S, null)), xe && (clearTimeout(xe), xe = null), document.removeEventListener("click", sa), document.removeEventListener("scroll", ca), window.removeEventListener("resize", va);
  }), Ui(() => {
    var a;
    T("mounted", "2.1.0"), T("workers", dt()), on(), T("plugins", He.length ? He.map((c) => c.constructor.pluginName).join(", ") : "none"), ve() && T("using test mode"), I() && Lr(I()), n() !== void 0 && T("auto", n()), _() !== void 0 && ya(_()), y(S, (a = o(D)) == null ? void 0 : a.closest("form"), !0), o(S) && (o(S).addEventListener("submit", ua, { capture: !0 }), o(S).addEventListener("reset", da), (n() === "onfocus" || J() === "focus") && o(S).addEventListener("focusin", fa)), Ae() && Aa(!0), n() === "onload" && (De() ? St() : $e()), o(_r) && (te() || X()) && T("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      qe("load");
    });
  });
  function Kt(a, c) {
    return btoa(JSON.stringify({
      algorithm: a.algorithm,
      challenge: a.challenge,
      number: c.number,
      salt: a.salt,
      signature: a.signature,
      test: ve() ? !0 : void 0,
      took: c.took
    }));
  }
  function tn() {
    for (const a of He)
      a.destroy();
  }
  function aa() {
    s() && It() && o(x) === k.VERIFIED ? $e() : Qe(k.EXPIRED, o(P).expired);
  }
  async function rn() {
    if (xt())
      throw T("mocking error"), new Error("Mocked error.");
    if (o(Yt))
      return T("using provided json data"), pa(o(Yt).salt), o(Yt);
    if (ve())
      return T("generating test challenge", { test: ve() }), ls(typeof ve() != "boolean" ? +ve() : void 0);
    {
      if (!s() && o(S)) {
        const h = o(S).getAttribute("action");
        h != null && h.includes("/form/") && s(h + "/altcha");
      }
      if (!s())
        throw new Error("Attribute challengeurl not set.");
      T("fetching challenge from", s());
      const a = {
        credentials: typeof d() == "boolean" ? "include" : d(),
        headers: Le() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      }, c = await ia()(s(), a);
      if (!c || !(c instanceof Response))
        throw new Error("Custom fetch function did not return a response.");
      if (c.status !== 200)
        throw new Error(`Server responded with ${c.status}.`);
      const v = c.headers.get("X-Altcha-Config"), b = await c.json();
      if (pa(b.salt), v)
        try {
          const h = JSON.parse(v);
          h && typeof h == "object" && (h.verifyurl && !h.verifyurl.startsWith("fn:") && (h.verifyurl = la(h.verifyurl)), wa(h));
        } catch (h) {
          T("unable to configure from X-Altcha-Config", h);
        }
      return b;
    }
  }
  function an(a) {
    var v, b;
    const c = (v = o(S)) == null ? void 0 : v.querySelector(typeof a == "string" ? `input[name="${a}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((b = c == null ? void 0 : c.value) == null ? void 0 : b.slice(c.value.indexOf("@"))) || void 0;
  }
  function ia() {
    let a = fetch;
    if (m())
      if (T("using customfetch"), typeof m() == "string") {
        if (a = globalThis[m()] || null, !a)
          throw new Error(`Custom fetch function not found: ${m()}`);
      } else
        a = m();
    return a;
  }
  function na(a, c = [
    F() || "",
    document.documentElement.lang || "",
    ...navigator.languages
  ]) {
    const v = Object.keys(a).map((h) => h.toLowerCase()), b = c.reduce(
      (h, w) => (w = w.toLowerCase(), h || (a[w] ? w : null) || v.find((L) => w.split("-")[0] === L.split("-")[0]) || null),
      null
    );
    return a[b || "en"];
  }
  function nn() {
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
      ...((v = o(S)) == null ? void 0 : v.querySelectorAll(a != null && a.length ? a.map((b) => `input[name="${b}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (b, h) => {
        const w = h.name, L = h.value;
        return w && L && (b[w] = /\n/.test(L) ? L.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : L), b;
      },
      {}
    );
  }
  function la(a, c) {
    const v = new URL(s() || location.origin), b = new URL(a, v);
    if (b.search || (b.search = v.search), c)
      for (const h in c)
        c[h] !== void 0 && c[h] !== null && b.searchParams.set(h, c[h]);
    return b.toString();
  }
  function on() {
    const a = Wt() !== void 0 ? Wt().split(",") : void 0;
    for (const c of globalThis.altchaPlugins)
      (!a || a.includes(c.pluginName)) && He.push(new c({
        el: o(D),
        clarify: St,
        dispatch: qe,
        getConfiguration: Ca,
        getFloatingAnchor: Ea,
        getState: La,
        log: T,
        reset: Qe,
        solve: _a,
        setState: Ie,
        setFloatingAnchor: xa,
        verify: $e
      }));
  }
  function T(...a) {
    (g() || a.some((c) => c instanceof Error)) && console[a[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${oe()}]`, ...a);
  }
  function ln() {
    y(U, ee.PAUSED, !0);
  }
  function sn(a) {
    y(U, ee.ERROR, !0);
  }
  function cn() {
    y(U, ee.READY, !0);
  }
  function fn() {
    y(U, ee.LOADING, !0);
  }
  function un() {
    y(U, ee.PLAYING, !0);
  }
  function dn() {
    y(U, ee.PAUSED, !0);
  }
  function hn(a) {
    var c;
    if (a.preventDefault(), a.stopPropagation(), o(B)) {
      const v = new FormData(a.target), b = String(v.get("code"));
      if ((c = re()) != null && c.startsWith("fn:")) {
        const h = re().replace(/^fn:/, "");
        if (T(`calling ${h} function instead of verifyurl`), !(h in globalThis))
          throw new Error(`Global function "${h}" is undefined.`);
        return globalThis[h]({
          challenge: o(B).challenge,
          code: b,
          solution: o(B).solution
        });
      }
      y(Xe, !0), ma(Kt(o(B).challenge, o(B).solution), b).then(({ reason: h, verified: w }) => {
        w ? (y(B, null), Ie(k.VERIFIED), T("verified"), Sr().then(() => {
          var L;
          (L = o(wr)) == null || L.focus(), qe("verified", { payload: o(Te) }), n() === "onsubmit" ? Er(o(gt)) : Ae() && $t();
        })) : (Qe(), y(Je, h || "Verification failed", !0));
      }).catch((h) => {
        y(B, null), Ie(k.ERROR, h), T("sentinel verification failed:", h);
      }).finally(() => {
        y(Xe, !1);
      });
    }
  }
  function sa(a) {
    var v;
    const c = a.target;
    _() && c && !o(D).contains(c) && (o(x) === k.VERIFIED && J() === !1 || o(x) === k.VERIFIED && J() === "focus" && !((v = o(S)) != null && v.matches(":focus-within")) || n() === "off" && o(x) === k.UNVERIFIED) && $t();
  }
  function ca() {
    _() && o(x) !== k.UNVERIFIED && Pt();
  }
  function gn(a) {
    for (const c of He)
      typeof c.onErrorChange == "function" && c.onErrorChange(o(Je));
  }
  function fa(a) {
    o(x) === k.UNVERIFIED ? $e() : _() && J() === "focus" && o(x) === k.VERIFIED && Jt();
  }
  function ua(a) {
    var b;
    const c = a.target;
    c != null && c.hasAttribute("data-code-challenge-form") || (y(gt, a.submitter, !0), o(S) && n() === "onsubmit" ? ((b = o(gt)) == null || b.blur(), o(x) === k.UNVERIFIED ? (a.preventDefault(), a.stopPropagation(), $e().then(() => {
      Er(o(gt));
    })) : o(x) !== k.VERIFIED && (a.preventDefault(), a.stopPropagation(), o(x) === k.VERIFYING && ha())) : o(S) && _() && n() === "off" && o(x) === k.UNVERIFIED && (a.preventDefault(), a.stopPropagation(), Jt()));
  }
  function da() {
    Qe();
  }
  function ha() {
    o(x) === k.VERIFYING && o(P).waitAlert && alert(o(P).waitAlert);
  }
  function ga() {
    o(Oe) ? o(Oe).paused ? (o(Oe).currentTime = 0, o(Oe).play()) : o(Oe).pause() : (y(Cr, !0), requestAnimationFrame(() => {
      var a;
      (a = o(Oe)) == null || a.play();
    }));
  }
  function vn(a) {
    for (const c of He)
      typeof c.onStateChange == "function" && c.onStateChange(o(x));
    _() && o(x) !== k.UNVERIFIED && requestAnimationFrame(() => {
      Pt();
    }), y(Rt, o(x) === k.VERIFIED), Ae() && o(de) && (o(x) !== k.UNVERIFIED ? Jt() : $t());
  }
  function va() {
    _() && Pt();
  }
  function ba(a) {
    return JSON.parse(a);
  }
  function pa(a) {
    var b;
    const c = new URLSearchParams((b = a.split("?")) == null ? void 0 : b[1]), v = c.get("expires") || c.get("expire");
    if (v) {
      const h = new Date(+v * 1e3), w = isNaN(h.getTime()) ? 0 : h.getTime() - Date.now();
      w > 0 && Lr(w);
    } else xe && (clearTimeout(xe), xe = null);
  }
  async function bn(a) {
    if (!re())
      throw new Error("Attribute verifyurl not set.");
    T("requesting server verification from", re());
    const c = { payload: a };
    if (Le() !== !1) {
      const {
        blockedCountries: h,
        classifier: w,
        disableRules: L,
        email: M,
        expectedLanguages: q,
        expectedCountries: Q,
        fields: le,
        ipAddress: tt,
        text: bt,
        timeZone: rt
      } = nn();
      c.blockedCountries = h, c.classifier = w, c.disableRules = L, c.email = M === !1 ? void 0 : an(M), c.expectedCountries = Q, c.expectedLanguages = q || (ta ? [ta] : void 0), c.fields = le === !1 ? void 0 : oa(le), c.ipAddress = tt === !1 ? void 0 : tt || "auto", c.text = bt, c.timeZone = rt === !1 ? void 0 : rt || Qa();
    }
    const v = await ia()(re(), {
      body: JSON.stringify(c),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (!v || !(v instanceof Response))
      throw new Error("Custom fetch function did not return a response.");
    if (v.status !== 200)
      throw new Error(`Server responded with ${v.status}.`);
    const b = await v.json();
    if (b != null && b.payload && y(Te, b.payload, !0), qe("serververification", b), f() && b.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  async function ma(a, c) {
    if (!re())
      throw new Error("Attribute verifyurl not set.");
    T("requesting sentinel verification from", re());
    const v = { code: c, payload: a };
    Ye() && (v.fields = Ye().fields ? oa() : void 0, v.timeZone = Ye().timeZone ? Qa() : void 0);
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
    return h != null && h.payload && y(Te, h.payload, !0), qe("sentinelverification", h), h;
  }
  function Er(a) {
    var c;
    o(S) && "requestSubmit" in o(S) ? o(S).requestSubmit(a) : (c = o(S)) != null && c.reportValidity() && (a ? a.click() : o(S).submit());
  }
  function Lr(a) {
    T("expire", a), xe && (clearTimeout(xe), xe = null), a < 1 ? aa() : xe = setTimeout(aa, a);
  }
  function ya(a) {
    T("floating", a), _() !== a && (o(D).style.left = "", o(D).style.top = ""), _(a === !0 || a === "" ? "auto" : a === !1 || a === "false" ? void 0 : _()), _() ? (n() || n("onsubmit"), document.addEventListener("scroll", ca), document.addEventListener("click", sa), window.addEventListener("resize", va)) : n() === "onsubmit" && n(void 0);
  }
  function Aa(a) {
    var c, v;
    if (T("overlay", a), Ae(a), a) {
      if (n() || n("onsubmit"), o(de) && o(D).parentElement && o(de).replaceWith(o(D).parentElement), (v = (c = o(D)) == null ? void 0 : c.parentElement) != null && v.parentElement) {
        y(de, document.createElement("div"), !0), o(D).parentElement.parentElement.appendChild(o(de));
        const b = document.createElement("div"), h = document.createElement("button");
        h.type = "button", h.innerHTML = "&times;", h.addEventListener("click", (w) => {
          w.preventDefault(), Qe();
        }), o(de).classList.add("altcha-overlay-backdrop"), h.classList.add("altcha-overlay-close-button"), b.classList.add("altcha-overlay"), o(de).append(b), b.append(h), Tt() && b.append(...document.querySelectorAll(Tt())), b.append(o(D).parentElement);
      }
    } else o(de) && o(D).parentElement && (o(de).replaceWith(o(D).parentElement), o(D).style.display = "block");
  }
  function ka(a) {
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
  async function _a(a) {
    let c = null, v = null;
    if ("Worker" in window) {
      try {
        c = pn(a, a.maxNumber || a.maxnumber || ye()), y(Ke, c.controller, !0);
        try {
          v = await c.promise;
        } finally {
          y(Ke, null);
        }
      } catch (b) {
        T(b);
      }
      if (v === null || (v == null ? void 0 : v.number) !== void 0 || "obfuscated" in a)
        return { data: a, solution: v };
    }
    if ("obfuscated" in a) {
      const b = await us(a.obfuscated, a.key, a.maxNumber || a.maxnumber);
      return { data: a, solution: await b.promise };
    }
    c = ss(a.challenge, a.salt, a.algorithm, a.maxNumber || a.maxnumber || ye()), y(Ke, c.controller, !0);
    try {
      v = await c.promise;
    } finally {
      y(Ke, null);
    }
    return { data: a, solution: v };
  }
  function pn(a, c = typeof ve() == "number" ? ve() : a.maxNumber || a.maxnumber || ye(), v = Math.ceil(dt())) {
    const b = new AbortController(), h = [];
    v = Math.min(16, c, Math.max(1, v));
    for (let M = 0; M < v; M++)
      h.push(altchaCreateWorker(Vt()));
    const w = Math.ceil(c / v);
    return { promise: (async () => {
      const M = await Promise.all(h.map((q, Q) => {
        const le = Q * w;
        return b.signal.addEventListener("abort", () => {
          q.postMessage({ type: "abort" });
        }), new Promise((tt) => {
          q.addEventListener("message", (bt) => {
            if (bt.data)
              for (const rt of h)
                rt !== q && rt.postMessage({ type: "abort" });
            tt(bt.data);
          }), q.postMessage({
            payload: a,
            max: le + w,
            start: le,
            type: "work"
          });
        });
      }));
      for (const q of h)
        q.terminate();
      return M.find((q) => !!q) || null;
    })(), controller: b };
  }
  async function St() {
    if (!De()) {
      Ie(k.ERROR);
      return;
    }
    const a = He.find((c) => c.constructor.pluginName === "obfuscation");
    if (!a || !("clarify" in a)) {
      Ie(k.ERROR), T("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in a && typeof a.clarify == "function")
      return a.clarify();
  }
  function wa(a) {
    a.obfuscated !== void 0 && De(a.obfuscated), a.auto !== void 0 && (n(a.auto), n() === "onload" && (De() ? St() : $e())), a.blockspam !== void 0 && f(!!a.blockspam), a.customfetch !== void 0 && m(a.customfetch), a.floatinganchor !== void 0 && O(a.floatinganchor), a.delay !== void 0 && p(a.delay), a.floatingoffset !== void 0 && ue(a.floatingoffset), a.floating !== void 0 && ya(a.floating), a.expire !== void 0 && (Lr(a.expire), I(a.expire)), a.challenge && (u(typeof a.challenge == "string" ? a.challenge : JSON.stringify(a.challenge)), ka(o(Yt))), a.challengeurl !== void 0 && s(a.challengeurl), a.debug !== void 0 && g(!!a.debug), a.hidefooter !== void 0 && te(!!a.hidefooter), a.hidelogo !== void 0 && X(!!a.hidelogo), a.language !== void 0 && ut(na(l(), [a.language])), a.maxnumber !== void 0 && ye(+a.maxnumber), a.mockerror !== void 0 && xt(!!a.mockerror), a.name !== void 0 && oe(a.name), a.overlaycontent !== void 0 && Tt(a.overlaycontent), a.overlay !== void 0 && Aa(a.overlay), a.refetchonexpire !== void 0 && It(!!a.refetchonexpire), a.sentinel !== void 0 && typeof a.sentinel == "object" && Ye(a.sentinel), a.spamfilter !== void 0 && Le(typeof a.spamfilter == "object" ? a.spamfilter : !!a.spamfilter), a.strings && ut(typeof a.strings == "string" ? a.strings : JSON.stringify(a.strings)), a.test !== void 0 && ve(typeof a.test == "number" ? a.test : !!a.test), a.verifyurl !== void 0 && re(a.verifyurl), a.workers !== void 0 && dt(+a.workers), a.workerurl !== void 0 && Vt(a.workerurl);
  }
  function Ca() {
    return {
      auto: n(),
      blockspam: f(),
      challengeurl: s(),
      debug: g(),
      delay: p(),
      expire: I(),
      floating: _(),
      floatinganchor: O(),
      floatingoffset: ue(),
      hidefooter: te(),
      hidelogo: X(),
      name: oe(),
      maxnumber: ye(),
      mockerror: xt(),
      obfuscated: De(),
      overlay: Ae(),
      refetchonexpire: It(),
      spamfilter: Le(),
      strings: o(P),
      test: ve(),
      verifyurl: re(),
      workers: dt(),
      workerurl: Vt()
    };
  }
  function Ea() {
    return o(ht);
  }
  function mn(a) {
    return He.find((c) => c.constructor.pluginName === a);
  }
  function La() {
    return o(x);
  }
  function $t() {
    o(D).style.display = "none", Ae() && o(de) && (o(de).style.display = "none");
  }
  function Pt(a = 20) {
    var c;
    if (o(D))
      if (o(ht) || y(ht, (O() ? document.querySelector(O()) : (c = o(S)) == null ? void 0 : c.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || o(S), !0), o(ht)) {
        const v = parseInt(ue(), 10) || 12, b = o(ht).getBoundingClientRect(), h = o(D).getBoundingClientRect(), w = document.documentElement.clientHeight, L = document.documentElement.clientWidth, M = _() === "auto" ? b.bottom + h.height + v + a > w : _() === "top", q = Math.max(a, Math.min(L - a - h.width, b.left + b.width / 2 - h.width / 2));
        if (M ? o(D).style.top = `${b.top - (h.height + v)}px` : o(D).style.top = `${b.bottom + v}px`, o(D).style.left = `${q}px`, o(D).setAttribute("data-floating", M ? "top" : "bottom"), o(jt)) {
          const Q = o(jt).getBoundingClientRect();
          o(jt).style.left = b.left - q + b.width / 2 - Q.width / 2 + "px";
        }
      } else
        T("unable to find floating anchor element");
  }
  function Qe(a = k.UNVERIFIED, c = null) {
    o(Ke) && (o(Ke).abort(), y(Ke, null)), y(Rt, !1), y(Te, null), y(B, null), y(Cr, !1), y(U, null), Ie(a, c);
  }
  function xa(a) {
    y(ht, a, !0);
  }
  function Ie(a, c = null) {
    y(x, a, !0), y(Je, c, !0), qe("statechange", {
      payload: o(Te),
      state: o(x)
    });
  }
  function Jt() {
    o(D).style.display = "block", _() && Pt(), Ae() && o(de) && (o(de).style.display = "flex");
  }
  async function $e() {
    return Qe(k.VERIFYING), await new Promise((a) => setTimeout(a, p() || 0)), rn().then((a) => (ka(a), T("challenge", a), _a(a))).then(({ data: a, solution: c }) => {
      var v;
      if (T("solution", c), !c || a && "challenge" in a && !("clearText" in c)) {
        if ((c == null ? void 0 : c.number) !== void 0 && "challenge" in a)
          if (re() && "codeChallenge" in a)
            ["INPUT", "BUTTON", "SELECT", "TEXTAREA"].includes(((v = document.activeElement) == null ? void 0 : v.tagName) || "") && A() === !1 && document.activeElement.blur(), y(B, { challenge: a, solution: c }, !0);
          else {
            if (re() && Ye() !== void 0)
              return ma(Kt(a, c));
            if (re())
              return bn(Kt(a, c));
            y(Te, Kt(a, c), !0), T("payload", o(Te));
          }
        else if (o(x) !== k.EXPIRED)
          throw T("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
      }
    }).then(() => {
      o(B) ? (Ie(k.CODE), Sr().then(() => {
        qe("code", { codeChallenge: o(B) });
      })) : o(Te) && (Ie(k.VERIFIED), T("verified"), Sr().then(() => {
        qe("verified", { payload: o(Te) }), n() === "onsubmit" ? Er(o(gt)) : Ae() && $t();
      }));
    }).catch((a) => {
      T(a), Ie(k.ERROR, a.message);
    });
  }
  var Ta = Vs(), Ia = Dt(Ta);
  Bo(Ia, t, "default", {});
  var vt = Y(Ia, 2), xr = W(vt), Xt = W(xr);
  let Va;
  var Ra = W(Xt);
  {
    var yn = (a) => {
      $r(a);
    };
    K(Ra, (a) => {
      o(x) === k.VERIFYING && a(yn);
    });
  }
  var et = Y(Ra, 2);
  Wa(et), et.__change = [
    vs,
    x,
    Le,
    S,
    Rt,
    De,
    St,
    $e
  ], rr(et, (a) => y(wr, a), () => o(wr)), G(Xt);
  var Qt = Y(Xt, 2), An = W(Qt);
  {
    var kn = (a) => {
      var c = tr(), v = Dt(c);
      at(v, () => o(P).verified), H(a, c);
    }, _n = (a, c) => {
      {
        var v = (h) => {
          var w = tr(), L = Dt(w);
          at(L, () => o(P).verifying), H(h, w);
        }, b = (h, w) => {
          {
            var L = (q) => {
              var Q = tr(), le = Dt(Q);
              at(le, () => o(P).verificationRequired), H(q, Q);
            }, M = (q) => {
              var Q = tr(), le = Dt(Q);
              at(le, () => o(P).label), H(q, Q);
            };
            K(
              h,
              (q) => {
                o(x) === k.CODE ? q(L) : q(M, !1);
              },
              w
            );
          }
        };
        K(
          a,
          (h) => {
            o(x) === k.VERIFYING ? h(v) : h(b, !1);
          },
          c
        );
      }
    };
    K(An, (a) => {
      o(x) === k.VERIFIED ? a(kn) : a(_n, !1);
    });
  }
  G(Qt);
  var ja = Y(Qt, 2);
  {
    var wn = (a) => {
      var c = ps();
      Wa(c), Ve(() => {
        V(c, "name", oe()), Yo(c, o(Te));
      }), H(a, c);
    };
    K(ja, (a) => {
      o(x) === k.VERIFIED && a(wn);
    });
  }
  var Sa = Y(ja, 2);
  {
    var Cn = (a) => {
      var c = ms(), v = W(c);
      V(v, "href", Qi), G(c), Ve(() => V(v, "aria-label", o(P).ariaLinkLabel)), H(a, c);
    };
    K(Sa, (a) => {
      (X() !== !0 || o(_r)) && a(Cn);
    });
  }
  var En = Y(Sa, 2);
  {
    var Ln = (a) => {
      var c = Cs(), v = Y(W(c), 2), b = W(v), h = Y(b, 2);
      No(h, !A()), h.__keydown = [
        hs,
        ga
      ];
      var w = Y(h, 2), L = W(w), M = W(L);
      {
        var q = (ke) => {
          var Z = _s();
          Z.__click = ga;
          var er = W(Z);
          {
            var zt = (pt) => {
              $r(pt, () => 20);
            }, $n = (pt, Pn) => {
              {
                var zn = (mt) => {
                  var Tr = ys();
                  H(mt, Tr);
                }, Nn = (mt, Tr) => {
                  {
                    var Dn = (yt) => {
                      var Ir = As();
                      H(yt, Ir);
                    }, qn = (yt) => {
                      var Ir = ks();
                      H(yt, Ir);
                    };
                    K(
                      mt,
                      (yt) => {
                        o(U) === ee.PLAYING ? yt(Dn) : yt(qn, !1);
                      },
                      Tr
                    );
                  }
                };
                K(
                  pt,
                  (mt) => {
                    o(U) === ee.ERROR ? mt(zn) : mt(Nn, !1);
                  },
                  Pn
                );
              }
            };
            K(er, (pt) => {
              o(U) === ee.LOADING ? pt(zt) : pt($n, !1);
            });
          }
          G(Z), Ve(() => {
            V(Z, "title", o(P).getAudioChallenge), Z.disabled = o(U) === ee.LOADING || o(U) === ee.ERROR || o(Xe), V(Z, "aria-label", o(U) === ee.LOADING ? o(P).loading : o(P).getAudioChallenge);
          }), H(ke, Z);
        };
        K(M, (ke) => {
          o(B).challenge.codeChallenge.audio && ke(q);
        });
      }
      var Q = Y(M, 2);
      Q.__click = [gs, $e], G(L);
      var le = Y(L, 2), tt = W(le);
      {
        var bt = (ke) => {
          $r(ke, () => 16);
        };
        K(tt, (ke) => {
          o(Xe) && ke(bt);
        });
      }
      var rt = Y(tt);
      G(le), G(w);
      var jn = Y(w, 2);
      {
        var Sn = (ke) => {
          var Z = ws(), er = W(Z);
          G(Z), rr(Z, (zt) => y(Oe, zt), () => o(Oe)), Ve((zt) => V(er, "src", zt), [
            () => la(o(B).challenge.codeChallenge.audio, { language: F() })
          ]), Fe("loadstart", Z, fn), Fe("canplay", Z, cn), Fe("pause", Z, dn), Fe("playing", Z, un), Fe("ended", Z, ln), Fe("error", er, sn), H(ke, Z);
        };
        K(jn, (ke) => {
          o(B).challenge.codeChallenge.audio && o(Cr) && ke(Sn);
        });
      }
      G(v), G(c), Ve(() => {
        V(c, "aria-label", o(P).verificationRequired), V(b, "src", o(B).challenge.codeChallenge.image), V(h, "minlength", o(B).challenge.codeChallenge.length || 1), V(h, "maxlength", o(B).challenge.codeChallenge.length), V(h, "placeholder", o(P).enterCode), V(h, "aria-label", o(U) === ee.LOADING ? o(P).loading : o(U) === ee.PLAYING ? "" : o(P).enterCodeAria), V(h, "aria-live", o(U) ? "assertive" : "polite"), V(h, "aria-busy", o(U) === ee.LOADING), h.disabled = o(Xe), V(Q, "aria-label", o(P).reload), V(Q, "title", o(P).reload), Q.disabled = o(Xe), le.disabled = o(Xe), V(le, "aria-label", o(P).verify), Ho(rt, ` ${o(P).verify ?? ""}`);
      }), Fe("submit", v, hn, !0), H(a, c);
    };
    K(En, (a) => {
      var c;
      (c = o(B)) != null && c.challenge.codeChallenge && a(Ln);
    });
  }
  G(xr);
  var $a = Y(xr, 2);
  {
    var xn = (a) => {
      var c = xs(), v = Y(W(c), 2);
      {
        var b = (w) => {
          var L = Es(), M = W(L);
          at(M, () => o(P).expired), G(L), Ve(() => V(L, "title", o(Je))), H(w, L);
        }, h = (w) => {
          var L = Ls(), M = W(L);
          at(M, () => o(P).error), G(L), Ve(() => V(L, "title", o(Je))), H(w, L);
        };
        K(v, (w) => {
          o(x) === k.EXPIRED ? w(b) : w(h, !1);
        });
      }
      G(c), H(a, c);
    };
    K($a, (a) => {
      (o(Je) || o(x) === k.EXPIRED) && a(xn);
    });
  }
  var Pa = Y($a, 2);
  {
    var Tn = (a) => {
      var c = Ts(), v = W(c), b = W(v);
      at(b, () => o(P).footer), G(v), G(c), H(a, c);
    };
    K(Pa, (a) => {
      o(P).footer && (te() !== !0 || o(_r)) && a(Tn);
    });
  }
  var In = Y(Pa, 2);
  {
    var Vn = (a) => {
      var c = Is();
      rr(c, (v) => y(jt, v), () => o(jt)), H(a, c);
    };
    K(In, (a) => {
      _() && a(Vn);
    });
  }
  G(vt), rr(vt, (a) => y(D, a), () => o(D)), Ve(
    (a) => {
      V(vt, "data-state", o(x)), V(vt, "data-floating", _()), V(vt, "data-overlay", Ae()), Va = Zo(Xt, 1, "altcha-checkbox", null, Va, a), V(et, "id", o(ra)), et.required = n() !== "onsubmit" && (!_() || n() !== "off"), V(Qt, "for", o(ra));
    },
    [
      () => ({
        "altcha-checkbox-verifying": o(x) === k.VERIFYING
      })
    ]
  ), Fe("invalid", et, ha), Jo(et, () => o(Rt), (a) => y(Rt, a)), H(e, Ta);
  var Rn = vi({
    clarify: St,
    configure: wa,
    getConfiguration: Ca,
    getFloatingAnchor: Ea,
    getPlugin: mn,
    getState: La,
    hide: $t,
    repositionFloating: Pt,
    reset: Qe,
    setFloatingAnchor: xa,
    setState: Ie,
    show: Jt,
    verify: $e,
    get auto() {
      return n();
    },
    set auto(a = void 0) {
      n(a), C();
    },
    get blockspam() {
      return f();
    },
    set blockspam(a = void 0) {
      f(a), C();
    },
    get challengeurl() {
      return s();
    },
    set challengeurl(a = void 0) {
      s(a), C();
    },
    get challengejson() {
      return u();
    },
    set challengejson(a = void 0) {
      u(a), C();
    },
    get credentials() {
      return d();
    },
    set credentials(a = void 0) {
      d(a), C();
    },
    get customfetch() {
      return m();
    },
    set customfetch(a = void 0) {
      m(a), C();
    },
    get debug() {
      return g();
    },
    set debug(a = !1) {
      g(a), C();
    },
    get delay() {
      return p();
    },
    set delay(a = 0) {
      p(a), C();
    },
    get disableautofocus() {
      return A();
    },
    set disableautofocus(a = !1) {
      A(a), C();
    },
    get expire() {
      return I();
    },
    set expire(a = void 0) {
      I(a), C();
    },
    get floating() {
      return _();
    },
    set floating(a = void 0) {
      _(a), C();
    },
    get floatinganchor() {
      return O();
    },
    set floatinganchor(a = void 0) {
      O(a), C();
    },
    get floatingoffset() {
      return ue();
    },
    set floatingoffset(a = void 0) {
      ue(a), C();
    },
    get floatingpersist() {
      return J();
    },
    set floatingpersist(a = !1) {
      J(a), C();
    },
    get hidefooter() {
      return te();
    },
    set hidefooter(a = !1) {
      te(a), C();
    },
    get hidelogo() {
      return X();
    },
    set hidelogo(a = !1) {
      X(a), C();
    },
    get id() {
      return ft();
    },
    set id(a = void 0) {
      ft(a), C();
    },
    get language() {
      return F();
    },
    set language(a = void 0) {
      F(a), C();
    },
    get name() {
      return oe();
    },
    set name(a = "altcha") {
      oe(a), C();
    },
    get maxnumber() {
      return ye();
    },
    set maxnumber(a = 1e6) {
      ye(a), C();
    },
    get mockerror() {
      return xt();
    },
    set mockerror(a = !1) {
      xt(a), C();
    },
    get obfuscated() {
      return De();
    },
    set obfuscated(a = void 0) {
      De(a), C();
    },
    get overlay() {
      return Ae();
    },
    set overlay(a = void 0) {
      Ae(a), C();
    },
    get overlaycontent() {
      return Tt();
    },
    set overlaycontent(a = void 0) {
      Tt(a), C();
    },
    get plugins() {
      return Wt();
    },
    set plugins(a = void 0) {
      Wt(a), C();
    },
    get refetchonexpire() {
      return It();
    },
    set refetchonexpire(a = !0) {
      It(a), C();
    },
    get sentinel() {
      return Ye();
    },
    set sentinel(a = void 0) {
      Ye(a), C();
    },
    get spamfilter() {
      return Le();
    },
    set spamfilter(a = !1) {
      Le(a), C();
    },
    get strings() {
      return ut();
    },
    set strings(a = void 0) {
      ut(a), C();
    },
    get test() {
      return ve();
    },
    set test(a = !1) {
      ve(a), C();
    },
    get verifyurl() {
      return re();
    },
    set verifyurl(a = void 0) {
      re(a), C();
    },
    get workers() {
      return dt();
    },
    set workers(a = Math.min(16, navigator.hardwareConcurrency || 8)) {
      dt(a), C();
    },
    get workerurl() {
      return Vt();
    },
    set workerurl(a = void 0) {
      Vt(a), C();
    }
  });
  return i(), Rn;
}
Oo(["change", "keydown", "click"]);
customElements.define("altcha-widget", il(
  Rs,
  {
    blockspam: { type: "Boolean" },
    debug: { type: "Boolean" },
    delay: { type: "Number" },
    disableautofocus: { type: "Boolean" },
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
const js = '@keyframes overlay-slidein{to{opacity:1;top:50%}}@keyframes altcha-spinner{to{transform:rotate(360deg)}}.altcha{background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);position:relative}.altcha:focus-within{border-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating]{background:var(--altcha-color-base, white);display:none;filter:drop-shadow(3px 3px 6px rgba(0,0,0,.2));left:-100%;position:fixed;top:-100%;width:var(--altcha-max-width, 260px);z-index:999999}.altcha[data-floating=top] .altcha-anchor-arrow{border-bottom-color:transparent;border-top-color:var(--altcha-color-border, #a0a0a0);bottom:-12px;top:auto}.altcha[data-floating=bottom]:focus-within::after{border-bottom-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating=top]:focus-within::after{border-top-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating]:not([data-state=unverified]){display:block}.altcha-anchor-arrow{border:6px solid transparent;border-bottom-color:var(--altcha-color-border, #a0a0a0);content:"";height:0;left:12px;position:absolute;top:-12px;width:0}.altcha-main{align-items:center;display:flex;gap:.4rem;padding:.7rem;position:relative}.altcha-code-challenge{background:var(--altcha-color-base, white);border:1px solid var(--altcha-color-border-focus, currentColor);border-radius:var(--altcha-border-radius, 3px);filter:drop-shadow(3px 3px 6px rgba(0,0,0,.2));padding:.5rem;position:absolute;top:2.5rem;z-index:9999999}.altcha-code-challenge>form{display:flex;flex-direction:column;gap:.5rem}.altcha-code-challenge-input{border:1px solid currentColor;border-radius:3px;box-sizing:border-box;outline:0;font-size:16px;padding:.35rem;width:220px}.altcha-code-challenge-input:focus{outline:2px solid color-mix(in srgb,var(--altcha-color-active, #1D1DC9) 20%,transparent)}.altcha-code-challenge-input:disabled{opacity:.7}.altcha-code-challenge-image{background-color:#fff;border:1px solid currentColor;border-radius:3px;box-sizing:border-box;object-fit:contain;height:50px;width:220px}.altcha-code-challenge-audio,.altcha-code-challenge-reload{background:color-mix(in srgb,var(--altcha-color-text, currentColor) 10%,transparent);border:0;border-radius:3px;color:var(--altcha-color-text, currentColor);cursor:pointer;display:flex;align-items:center;justify-content:center;padding:.35rem}.altcha-code-challenge-audio:disabled,.altcha-code-challenge-reload:disabled,.altcha-code-challenge-verify:disabled{opacity:.7;pointer-events:none}.altcha-code-challenge-audio>*,.altcha-code-challenge-reload>*{height:20px;width:20px}.altcha-code-challenge-buttons{display:flex;justify-content:space-between}.altcha-code-challenge-buttons-left{display:flex;gap:.25rem}.altcha-code-challenge-verify{align-items:center;background:var(--altcha-color-active, #1D1DC9);border:0;border-radius:3px;color:#fff;cursor:pointer;display:flex;gap:.5rem;font-size:100%;padding:.35rem 1rem}.altcha-code-challenge-arrow{border:6px solid transparent;border-bottom-color:var(--altcha-color-border, currentColor);content:"";height:0;left:.15rem;position:absolute;top:-12px;width:0}.altcha[data-floating=top] .altcha-code-challenge{top:-150px}.altcha[data-floating=top] .altcha-code-challenge-arrow{border-bottom-color:transparent;border-top-color:var(--altcha-color-border, currentColor);bottom:-12px;top:auto}.altcha-label{cursor:pointer;flex-grow:1}.altcha-logo{color:currentColor!important;opacity:.7}.altcha-footer:hover,.altcha-logo:hover{opacity:1}.altcha-error{color:var(--altcha-color-error-text, #f23939);display:flex;font-size:.85rem;gap:.3rem;padding:0 .7rem .7rem}.altcha-footer{align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:.75rem;opacity:.7;justify-content:end;padding:.2rem .7rem}.altcha-footer a{color:currentColor}.altcha-checkbox{display:flex;align-items:center;justify-content:center;height:24px;position:relative;width:24px}.altcha-checkbox .altcha-spinner{bottom:0;left:0;position:absolute;right:0;top:0}.altcha-checkbox input{width:18px;height:18px;margin:0}.altcha-checkbox-verifying input{appearance:none;opacity:0;pointer-events:none}.altcha-spinner{animation:altcha-spinner .75s infinite linear;transform-origin:center}.altcha-overlay{--altcha-color-base:#fff;--altcha-color-text:#000;animation:overlay-slidein .5s forwards;display:flex;flex-direction:column;gap:.5rem;left:50%;width:260px;opacity:0;position:fixed;top:45%;transform:translate(-50%,-50%)}.altcha-overlay-backdrop{background:rgba(0,0,0,.5);bottom:0;display:none;left:0;position:fixed;right:0;top:0;z-index:99999999}.altcha-overlay-close-button{align-self:flex-end;background:0 0;border:0;padding:.25rem;cursor:pointer;color:currentColor;font-size:130%;line-height:1;opacity:.7}@media (max-height:450px){.altcha-overlay{top:10%!important;transform:translate(-50%,0)}}';
function Ss(e, t = "__altcha-css") {
  if (!document.getElementById(t)) {
    const r = document.createElement("style");
    r.id = t, r.textContent = e, document.head.appendChild(r);
  }
}
globalThis.altchaCreateWorker = (e) => e ? new Worker(new URL(e)) : new is();
Ss(js);
export {
  Rs as Altcha
};
