var Dn = Object.defineProperty;
var za = (e) => {
  throw TypeError(e);
};
var qn = (e, t, r) => t in e ? Dn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var _e = (e, t, r) => qn(e, typeof t != "symbol" ? t + "" : t, r), Na = (e, t, r) => t.has(e) || za("Cannot " + r);
var se = (e, t, r) => (Na(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Ir = (e, t, r) => t.has(e) ? za("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), Vr = (e, t, r, i) => (Na(e, t, "write to private field"), i ? i.call(e, r) : t.set(e, r), r);
var Qa = Array.isArray, On = Array.prototype.indexOf, Hn = Array.from, ir = Object.keys, qt = Object.defineProperty, rt = Object.getOwnPropertyDescriptor, Fn = Object.getOwnPropertyDescriptors, Mn = Object.prototype, Bn = Array.prototype, ei = Object.getPrototypeOf, Da = Object.isExtensible;
const At = () => {
};
function ti(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Un(e, t, r = !1) {
  return e === void 0 ? r ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
const we = 2, ri = 4, ur = 8, Fr = 16, Ne = 32, nt = 64, nr = 128, ge = 256, or = 512, fe = 1024, ze = 2048, ot = 4096, _t = 8192, dr = 16384, Zn = 32768, Mr = 65536, Gn = 1 << 19, ai = 1 << 20, $r = 1 << 21, Nt = Symbol("$state"), ii = Symbol("legacy props"), Wn = Symbol(""), Yn = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Ot = [], Ht = [];
function ni() {
  var e = Ot;
  Ot = [], ti(e);
}
function oi() {
  var e = Ht;
  Ht = [], ti(e);
}
function Br(e) {
  Ot.length === 0 && queueMicrotask(ni), Ot.push(e);
}
function Kn(e) {
  Ht.length === 0 && Yn(oi), Ht.push(e);
}
function Jn() {
  Ot.length > 0 && ni(), Ht.length > 0 && oi();
}
function li(e) {
  return e === this.v;
}
function si(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ur(e) {
  return !si(e, this.v);
}
function Xn(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Qn() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function eo(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function to() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ro() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function ao(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function io() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function no() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function oo() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
const lo = 1, so = 4, co = 8, fo = 16, uo = 1, ho = 2, Zr = "[", ci = "[!", fi = "]", kt = {}, ce = Symbol(), go = "http://www.w3.org/1999/xhtml";
function ui(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let ie = null;
function qa(e) {
  ie = e;
}
function di(e, t = !1, r) {
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
  Yr(() => {
    i.d = !0;
  });
}
function hi(e) {
  const t = ie;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const c = t.e;
    if (c !== null) {
      var r = S, i = j;
      t.e = null;
      try {
        for (var o = 0; o < c.length; o++) {
          var n = c[o];
          Ge(n.effect), je(n.reaction), Kr(n.fn);
        }
      } finally {
        Ge(r), je(i);
      }
    }
    ie = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function gi() {
  return !0;
}
function Be(e) {
  if (typeof e != "object" || e === null || Nt in e)
    return e;
  const t = ei(e);
  if (t !== Mn && t !== Bn)
    return e;
  var r = /* @__PURE__ */ new Map(), i = Qa(e), o = /* @__PURE__ */ z(0), n = j, c = (s) => {
    var u = j;
    je(n);
    var d = s();
    return je(u), d;
  };
  return i && r.set("length", /* @__PURE__ */ z(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, u, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && io();
        var m = r.get(u);
        return m === void 0 ? (m = c(() => /* @__PURE__ */ z(d.value)), r.set(u, m)) : y(
          m,
          c(() => Be(d.value))
        ), !0;
      },
      deleteProperty(s, u) {
        var d = r.get(u);
        if (d === void 0)
          u in s && (r.set(
            u,
            c(() => /* @__PURE__ */ z(ce))
          ), Rr(o));
        else {
          if (i && typeof u == "string") {
            var m = (
              /** @type {Source<number>} */
              r.get("length")
            ), h = Number(u);
            Number.isInteger(h) && h < m.v && y(m, h);
          }
          y(d, ce), Rr(o);
        }
        return !0;
      },
      get(s, u, d) {
        var k;
        if (u === Nt)
          return e;
        var m = r.get(u), h = u in s;
        if (m === void 0 && (!h || (k = rt(s, u)) != null && k.writable) && (m = c(() => /* @__PURE__ */ z(Be(h ? s[u] : ce))), r.set(u, m)), m !== void 0) {
          var p = l(m);
          return p === ce ? void 0 : p;
        }
        return Reflect.get(s, u, d);
      },
      getOwnPropertyDescriptor(s, u) {
        var d = Reflect.getOwnPropertyDescriptor(s, u);
        if (d && "value" in d) {
          var m = r.get(u);
          m && (d.value = l(m));
        } else if (d === void 0) {
          var h = r.get(u), p = h == null ? void 0 : h.v;
          if (h !== void 0 && p !== ce)
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
        if (u === Nt)
          return !0;
        var d = r.get(u), m = d !== void 0 && d.v !== ce || Reflect.has(s, u);
        if (d !== void 0 || S !== null && (!m || (p = rt(s, u)) != null && p.writable)) {
          d === void 0 && (d = c(() => /* @__PURE__ */ z(m ? Be(s[u]) : ce)), r.set(u, d));
          var h = l(d);
          if (h === ce)
            return !1;
        }
        return m;
      },
      set(s, u, d, m) {
        var J;
        var h = r.get(u), p = u in s;
        if (i && u === "length")
          for (var k = d; k < /** @type {Source<number>} */
          h.v; k += 1) {
            var V = r.get(k + "");
            V !== void 0 ? y(V, ce) : k in s && (V = c(() => /* @__PURE__ */ z(ce)), r.set(k + "", V));
          }
        h === void 0 ? (!p || (J = rt(s, u)) != null && J.writable) && (h = c(() => /* @__PURE__ */ z(void 0)), y(
          h,
          c(() => Be(d))
        ), r.set(u, h)) : (p = h.v !== ce, y(
          h,
          c(() => Be(d))
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
          Rr(o);
        }
        return !0;
      },
      ownKeys(s) {
        l(o);
        var u = Reflect.ownKeys(s).filter((h) => {
          var p = r.get(h);
          return p === void 0 || p.v !== ce;
        });
        for (var [d, m] of r)
          m.v !== ce && !(d in s) && u.push(d);
        return u;
      },
      setPrototypeOf() {
        no();
      }
    }
  );
}
function Rr(e, t = 1) {
  y(e, e.v + t);
}
// @__NO_SIDE_EFFECTS__
function hr(e) {
  var t = we | ze, r = j !== null && (j.f & we) !== 0 ? (
    /** @type {Derived} */
    j
  ) : null;
  return S === null || r !== null && (r.f & ge) !== 0 ? t |= ge : S.f |= ai, {
    ctx: ie,
    deps: null,
    effects: null,
    equals: li,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: r ?? S
  };
}
// @__NO_SIDE_EFFECTS__
function $t(e) {
  const t = /* @__PURE__ */ hr(e);
  return wi(t), t;
}
// @__NO_SIDE_EFFECTS__
function vo(e) {
  const t = /* @__PURE__ */ hr(e);
  return t.equals = Ur, t;
}
function vi(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      We(
        /** @type {Effect} */
        t[r]
      );
  }
}
function bo(e) {
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
function bi(e) {
  var t, r = S;
  Ge(bo(e));
  try {
    vi(e), t = xi(e);
  } finally {
    Ge(r);
  }
  return t;
}
function pi(e) {
  var t = bi(e), r = (Ue || (e.f & ge) !== 0) && e.deps !== null ? ot : fe;
  Ce(e, r), e.equals(t) || (e.v = t, e.wv = Ei());
}
const Ft = /* @__PURE__ */ new Map();
function mi(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: li,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function z(e, t) {
  const r = mi(e);
  return wi(r), r;
}
// @__NO_SIDE_EFFECTS__
function Gr(e, t = !1) {
  const r = mi(e);
  return t || (r.equals = Ur), r;
}
function y(e, t, r = !1) {
  j !== null && !Ve && gi() && (j.f & (we | Fr)) !== 0 && !(ne != null && ne.includes(e)) && oo();
  let i = r ? Be(t) : t;
  return po(e, i);
}
function po(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    Mt ? Ft.set(e, t) : Ft.set(e, r), e.v = t, (e.f & we) !== 0 && ((e.f & ze) !== 0 && bi(
      /** @type {Derived} */
      e
    ), Ce(e, (e.f & ge) === 0 ? fe : ot)), e.wv = Ei(), yi(e, ze), S !== null && (S.f & fe) !== 0 && (S.f & (Ne | nt)) === 0 && (be === null ? Ao([e]) : be.push(e));
  }
  return t;
}
function yi(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, o = 0; o < i; o++) {
      var n = r[o], c = n.f;
      (c & ze) === 0 && (Ce(n, t), (c & (fe | ge)) !== 0 && ((c & we) !== 0 ? yi(
        /** @type {Derived} */
        n,
        ot
      ) : pr(
        /** @type {Effect} */
        n
      )));
    }
}
function gr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let D = !1;
function yt(e) {
  D = e;
}
let N;
function Ze(e) {
  if (e === null)
    throw gr(), kt;
  return N = e;
}
function wt() {
  return Ze(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ye(N)
  );
}
function G(e) {
  if (D) {
    if (/* @__PURE__ */ Ye(N) !== null)
      throw gr(), kt;
    N = e;
  }
}
function mo() {
  for (var e = 0, t = N; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === fi) {
        if (e === 0) return t;
        e -= 1;
      } else (r === Zr || r === ci) && (e += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ye(t)
    );
    t.remove(), t = i;
  }
}
var Oa, Ai, ki, _i;
function Pr() {
  if (Oa === void 0) {
    Oa = window, Ai = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    ki = rt(t, "firstChild").get, _i = rt(t, "nextSibling").get, Da(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Da(r) && (r.__t = void 0);
  }
}
function vr(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function me(e) {
  return ki.call(e);
}
// @__NO_SIDE_EFFECTS__
function Ye(e) {
  return _i.call(e);
}
function W(e, t) {
  if (!D)
    return /* @__PURE__ */ me(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ me(N)
  );
  return r === null && (r = N.appendChild(vr())), Ze(r), r;
}
function Pt(e, t) {
  if (!D) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ me(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Ye(r) : r;
  }
  return N;
}
function Y(e, t = 1, r = !1) {
  let i = D ? N : e;
  for (var o; t--; )
    o = i, i = /** @type {TemplateNode} */
    /* @__PURE__ */ Ye(i);
  if (!D)
    return i;
  var n = i == null ? void 0 : i.nodeType;
  if (r && n !== 3) {
    var c = vr();
    return i === null ? o == null || o.after(c) : i.before(c), Ze(c), c;
  }
  return Ze(i), /** @type {TemplateNode} */
  i;
}
function yo(e) {
  e.textContent = "";
}
let tr = !1, lr = !1, sr = null, at = !1, Mt = !1;
function Ha(e) {
  Mt = e;
}
let Dt = [];
let j = null, Ve = !1;
function je(e) {
  j = e;
}
let S = null;
function Ge(e) {
  S = e;
}
let ne = null;
function wi(e) {
  j !== null && j.f & $r && (ne === null ? ne = [e] : ne.push(e));
}
let ae = null, he = 0, be = null;
function Ao(e) {
  be = e;
}
let Ci = 1, cr = 0, Ue = !1;
function Ei() {
  return ++Ci;
}
function Bt(e) {
  var h;
  var t = e.f;
  if ((t & ze) !== 0)
    return !0;
  if ((t & ot) !== 0) {
    var r = e.deps, i = (t & ge) !== 0;
    if (r !== null) {
      var o, n, c = (t & or) !== 0, s = i && S !== null && !Ue, u = r.length;
      if (c || s) {
        var d = (
          /** @type {Derived} */
          e
        ), m = d.parent;
        for (o = 0; o < u; o++)
          n = r[o], (c || !((h = n == null ? void 0 : n.reactions) != null && h.includes(d))) && (n.reactions ?? (n.reactions = [])).push(d);
        c && (d.f ^= or), s && m !== null && (m.f & ge) === 0 && (d.f ^= ge);
      }
      for (o = 0; o < u; o++)
        if (n = r[o], Bt(
          /** @type {Derived} */
          n
        ) && pi(
          /** @type {Derived} */
          n
        ), n.wv > e.wv)
          return !0;
    }
    (!i || S !== null && !Ue) && Ce(e, fe);
  }
  return !1;
}
function ko(e, t) {
  for (var r = t; r !== null; ) {
    if ((r.f & nr) !== 0)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= nr;
      }
    r = r.parent;
  }
  throw tr = !1, e;
}
function Fa(e) {
  return (e.f & dr) === 0 && (e.parent === null || (e.parent.f & nr) === 0);
}
function br(e, t, r, i) {
  if (tr) {
    if (r === null && (tr = !1), Fa(t))
      throw e;
    return;
  }
  if (r !== null && (tr = !0), ko(e, t), Fa(t))
    throw e;
}
function Li(e, t, r = !0) {
  var i = e.reactions;
  if (i !== null)
    for (var o = 0; o < i.length; o++) {
      var n = i[o];
      ne != null && ne.includes(e) || ((n.f & we) !== 0 ? Li(
        /** @type {Derived} */
        n,
        t,
        !1
      ) : t === n && (r ? Ce(n, ze) : (n.f & fe) !== 0 && Ce(n, ot), pr(
        /** @type {Effect} */
        n
      )));
    }
}
function xi(e) {
  var k;
  var t = ae, r = he, i = be, o = j, n = Ue, c = ne, s = ie, u = Ve, d = e.f;
  ae = /** @type {null | Value[]} */
  null, he = 0, be = null, Ue = (d & ge) !== 0 && (Ve || !at || j === null), j = (d & (Ne | nt)) === 0 ? e : null, ne = null, qa(e.ctx), Ve = !1, cr++, e.f |= $r;
  try {
    var m = (
      /** @type {Function} */
      (0, e.fn)()
    ), h = e.deps;
    if (ae !== null) {
      var p;
      if (fr(e, he), h !== null && he > 0)
        for (h.length = he + ae.length, p = 0; p < ae.length; p++)
          h[he + p] = ae[p];
      else
        e.deps = h = ae;
      if (!Ue)
        for (p = he; p < h.length; p++)
          ((k = h[p]).reactions ?? (k.reactions = [])).push(e);
    } else h !== null && he < h.length && (fr(e, he), h.length = he);
    if (gi() && be !== null && !Ve && h !== null && (e.f & (we | ot | ze)) === 0)
      for (p = 0; p < /** @type {Source[]} */
      be.length; p++)
        Li(
          be[p],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (cr++, be !== null && (i === null ? i = be : i.push(.../** @type {Source[]} */
    be))), m;
  } finally {
    ae = t, he = r, be = i, j = o, Ue = n, ne = c, qa(s), Ve = u, e.f ^= $r;
  }
}
function _o(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var i = On.call(r, e);
    if (i !== -1) {
      var o = r.length - 1;
      o === 0 ? r = t.reactions = null : (r[i] = r[o], r.pop());
    }
  }
  r === null && (t.f & we) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ae === null || !ae.includes(t)) && (Ce(t, ot), (t.f & (ge | or)) === 0 && (t.f ^= or), vi(
    /** @type {Derived} **/
    t
  ), fr(
    /** @type {Derived} **/
    t,
    0
  ));
}
function fr(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var i = t; i < r.length; i++)
      _o(e, r[i]);
}
function Wr(e) {
  var t = e.f;
  if ((t & dr) === 0) {
    Ce(e, fe);
    var r = S, i = ie, o = at;
    S = e, at = !0;
    try {
      (t & Fr) !== 0 ? Ro(e) : Ri(e), Vi(e);
      var n = xi(e);
      e.teardown = typeof n == "function" ? n : null, e.wv = Ci;
      var c = e.deps, s;
    } catch (u) {
      br(u, e, r, i || e.ctx);
    } finally {
      at = o, S = r;
    }
  }
}
function wo() {
  try {
    to();
  } catch (e) {
    if (sr !== null)
      br(e, sr, null);
    else
      throw e;
  }
}
function Ti() {
  var e = at;
  try {
    var t = 0;
    for (at = !0; Dt.length > 0; ) {
      t++ > 1e3 && wo();
      var r = Dt, i = r.length;
      Dt = [];
      for (var o = 0; o < i; o++) {
        var n = Eo(r[o]);
        Co(n);
      }
      Ft.clear();
    }
  } finally {
    lr = !1, at = e, sr = null;
  }
}
function Co(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var i = e[r];
      if ((i.f & (dr | _t)) === 0)
        try {
          Bt(i) && (Wr(i), i.deps === null && i.first === null && i.nodes_start === null && (i.teardown === null ? Si(i) : i.fn = null));
        } catch (o) {
          br(o, i, null, i.ctx);
        }
    }
}
function pr(e) {
  lr || (lr = !0, queueMicrotask(Ti));
  for (var t = sr = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (nt | Ne)) !== 0) {
      if ((r & fe) === 0) return;
      t.f ^= fe;
    }
  }
  Dt.push(t);
}
function Eo(e) {
  for (var t = [], r = e; r !== null; ) {
    var i = r.f, o = (i & (Ne | nt)) !== 0, n = o && (i & fe) !== 0;
    if (!n && (i & _t) === 0) {
      if ((i & ri) !== 0)
        t.push(r);
      else if (o)
        r.f ^= fe;
      else
        try {
          Bt(r) && Wr(r);
        } catch (u) {
          br(u, r, null, r.ctx);
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
function E(e) {
  for (var t; ; ) {
    if (Jn(), Dt.length === 0)
      return (
        /** @type {T} */
        t
      );
    lr = !0, Ti();
  }
}
async function jr() {
  await Promise.resolve(), E();
}
function l(e) {
  var t = e.f, r = (t & we) !== 0;
  if (j !== null && !Ve) {
    if (!(ne != null && ne.includes(e))) {
      var i = j.deps;
      e.rv < cr && (e.rv = cr, ae === null && i !== null && i[he] === e ? he++ : ae === null ? ae = [e] : (!Ue || !ae.includes(e)) && ae.push(e));
    }
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), n = o.parent;
    n !== null && (n.f & ge) === 0 && (o.f ^= ge);
  }
  return r && (o = /** @type {Derived} */
  e, Bt(o) && pi(o)), Mt && Ft.has(e) ? Ft.get(e) : e.v;
}
function it(e) {
  var t = Ve;
  try {
    return Ve = !0, e();
  } finally {
    Ve = t;
  }
}
const Lo = -7169;
function Ce(e, t) {
  e.f = e.f & Lo | t;
}
function xo(e) {
  S === null && j === null && eo(), j !== null && (j.f & ge) !== 0 && S === null && Qn(), Mt && Xn();
}
function To(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function lt(e, t, r, i = !0) {
  var o = S, n = {
    ctx: ie,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | ze,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: o,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (r)
    try {
      Wr(n), n.f |= Zn;
    } catch (u) {
      throw We(n), u;
    }
  else t !== null && pr(n);
  var c = r && n.deps === null && n.first === null && n.nodes_start === null && n.teardown === null && (n.f & (ai | nr)) === 0;
  if (!c && i && (o !== null && To(n, o), j !== null && (j.f & we) !== 0)) {
    var s = (
      /** @type {Derived} */
      j
    );
    (s.effects ?? (s.effects = [])).push(n);
  }
  return n;
}
function Yr(e) {
  const t = lt(ur, null, !1);
  return Ce(t, fe), t.teardown = e, t;
}
function zr(e) {
  xo();
  var t = S !== null && (S.f & Ne) !== 0 && ie !== null && !ie.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      ie
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: S,
      reaction: j
    });
  } else {
    var i = Kr(e);
    return i;
  }
}
function Io(e) {
  const t = lt(nt, e, !0);
  return () => {
    We(t);
  };
}
function Vo(e) {
  const t = lt(nt, e, !0);
  return (r = {}) => new Promise((i) => {
    r.outro ? Dr(t, () => {
      We(t), i(void 0);
    }) : (We(t), i(void 0));
  });
}
function Kr(e) {
  return lt(ri, e, !1);
}
function Jr(e) {
  return lt(ur, e, !0);
}
function Ie(e, t = [], r = hr) {
  const i = t.map(r);
  return Ii(() => e(...i.map(l)));
}
function Ii(e, t = 0) {
  return lt(ur | Fr | t, e, !0);
}
function Nr(e, t = !0) {
  return lt(ur | Ne, e, !0, t);
}
function Vi(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Mt, i = j;
    Ha(!0), je(null);
    try {
      t.call(null);
    } finally {
      Ha(r), je(i);
    }
  }
}
function Ri(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var i = r.next;
    (r.f & nt) !== 0 ? r.parent = null : We(r, t), r = i;
  }
}
function Ro(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Ne) === 0 && We(t), t = r;
  }
}
function We(e, t = !0) {
  var r = !1;
  (t || (e.f & Gn) !== 0) && e.nodes_start !== null && (ji(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), r = !0), Ri(e, t && !r), fr(e, 0), Ce(e, dr);
  var i = e.transitions;
  if (i !== null)
    for (const n of i)
      n.stop();
  Vi(e);
  var o = e.parent;
  o !== null && o.first !== null && Si(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function ji(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ye(e)
    );
    e.remove(), e = r;
  }
}
function Si(e) {
  var t = e.parent, r = e.prev, i = e.next;
  r !== null && (r.next = i), i !== null && (i.prev = r), t !== null && (t.first === e && (t.first = i), t.last === e && (t.last = r));
}
function Dr(e, t) {
  var r = [];
  $i(e, r, !0), jo(r, () => {
    We(e), t && t();
  });
}
function jo(e, t) {
  var r = e.length;
  if (r > 0) {
    var i = () => --r || t();
    for (var o of e)
      o.out(i);
  } else
    t();
}
function $i(e, t, r) {
  if ((e.f & _t) === 0) {
    if (e.f ^= _t, e.transitions !== null)
      for (const c of e.transitions)
        (c.is_global || r) && t.push(c);
    for (var i = e.first; i !== null; ) {
      var o = i.next, n = (i.f & Mr) !== 0 || (i.f & Ne) !== 0;
      $i(i, t, n ? r : !1), i = o;
    }
  }
}
function Ma(e) {
  Pi(e, !0);
}
function Pi(e, t) {
  if ((e.f & _t) !== 0) {
    e.f ^= _t, (e.f & fe) === 0 && (e.f ^= fe), Bt(e) && (Ce(e, ze), pr(e));
    for (var r = e.first; r !== null; ) {
      var i = r.next, o = (r.f & Mr) !== 0 || (r.f & Ne) !== 0;
      Pi(r, o ? t : !1), r = i;
    }
    if (e.transitions !== null)
      for (const n of e.transitions)
        (n.is_global || t) && n.in();
  }
}
const So = ["touchstart", "touchmove"];
function $o(e) {
  return So.includes(e);
}
function Po(e, t) {
  if (t) {
    const r = document.body;
    e.autofocus = !0, Br(() => {
      document.activeElement === r && e.focus();
    });
  }
}
let Ba = !1;
function zi() {
  Ba || (Ba = !0, document.addEventListener(
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
function Ni(e) {
  var t = j, r = S;
  je(null), Ge(null);
  try {
    return e();
  } finally {
    je(t), Ge(r);
  }
}
function zo(e, t, r, i = r) {
  e.addEventListener(t, () => Ni(r));
  const o = e.__on_r;
  o ? e.__on_r = () => {
    o(), i(!0);
  } : e.__on_r = () => i(!0), zi();
}
const Di = /* @__PURE__ */ new Set(), qr = /* @__PURE__ */ new Set();
function No(e, t, r, i = {}) {
  function o(n) {
    if (i.capture || zt.call(t, n), !n.cancelBubble)
      return Ni(() => r == null ? void 0 : r.call(this, n));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Br(() => {
    t.addEventListener(e, o, i);
  }) : t.addEventListener(e, o, i), o;
}
function Me(e, t, r, i, o) {
  var n = { capture: i, passive: o }, c = No(e, t, r, n);
  (t === document.body || t === window || t === document) && Yr(() => {
    t.removeEventListener(e, c, n);
  });
}
function Do(e) {
  for (var t = 0; t < e.length; t++)
    Di.add(e[t]);
  for (var r of qr)
    r(e);
}
function zt(e) {
  var J;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), i = e.type, o = ((J = e.composedPath) == null ? void 0 : J.call(e)) || [], n = (
    /** @type {null | Element} */
    o[0] || e.target
  ), c = 0, s = e.__root;
  if (s) {
    var u = o.indexOf(s);
    if (u !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var d = o.indexOf(t);
    if (d === -1)
      return;
    u <= d && (c = u);
  }
  if (n = /** @type {Element} */
  o[c] || e.target, n !== t) {
    qt(e, "currentTarget", {
      configurable: !0,
      get() {
        return n || r;
      }
    });
    var m = j, h = S;
    je(null), Ge(null);
    try {
      for (var p, k = []; n !== null; ) {
        var V = n.assignedSlot || n.parentNode || /** @type {any} */
        n.host || null;
        try {
          var _ = n["__" + i];
          if (_ != null && (!/** @type {any} */
          n.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === n))
            if (Qa(_)) {
              var [O, ...ue] = _;
              O.apply(n, [e, ...ue]);
            } else
              _.call(n, e);
        } catch (te) {
          p ? k.push(te) : p = te;
        }
        if (e.cancelBubble || V === t || V === null)
          break;
        n = V;
      }
      if (p) {
        for (let te of k)
          queueMicrotask(() => {
            throw te;
          });
        throw p;
      }
    } finally {
      e.__root = t, delete e.currentTarget, je(m), Ge(h);
    }
  }
}
function Xr(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Re(e, t) {
  var r = (
    /** @type {Effect} */
    S
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function Ee(e, t) {
  var r = (t & uo) !== 0, i = (t & ho) !== 0, o, n = !e.startsWith("<!>");
  return () => {
    if (D)
      return Re(N, null), N;
    o === void 0 && (o = Xr(n ? e : "<!>" + e), r || (o = /** @type {Node} */
    /* @__PURE__ */ me(o)));
    var c = (
      /** @type {TemplateNode} */
      i || Ai ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (r) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ me(c)
      ), u = (
        /** @type {TemplateNode} */
        c.lastChild
      );
      Re(s, u);
    } else
      Re(c, c);
    return c;
  };
}
// @__NO_SIDE_EFFECTS__
function mr(e, t, r = "svg") {
  var i = !e.startsWith("<!>"), o = `<${r}>${i ? e : "<!>" + e}</${r}>`, n;
  return () => {
    if (D)
      return Re(N, null), N;
    if (!n) {
      var c = (
        /** @type {DocumentFragment} */
        Xr(o)
      ), s = (
        /** @type {Element} */
        /* @__PURE__ */ me(c)
      );
      n = /** @type {Element} */
      /* @__PURE__ */ me(s);
    }
    var u = (
      /** @type {TemplateNode} */
      n.cloneNode(!0)
    );
    return Re(u, u), u;
  };
}
function Xt() {
  if (D)
    return Re(N, null), N;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = vr();
  return e.append(t, r), Re(t, r), e;
}
function H(e, t) {
  if (D) {
    S.nodes_end = N, wt();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function qo(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function qi(e, t) {
  return Oi(e, t);
}
function Oo(e, t) {
  Pr(), t.intro = t.intro ?? !1;
  const r = t.target, i = D, o = N;
  try {
    for (var n = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ me(r)
    ); n && (n.nodeType !== 8 || /** @type {Comment} */
    n.data !== Zr); )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Ye(n);
    if (!n)
      throw kt;
    yt(!0), Ze(
      /** @type {Comment} */
      n
    ), wt();
    const c = Oi(e, { ...t, anchor: n });
    if (N === null || N.nodeType !== 8 || /** @type {Comment} */
    N.data !== fi)
      throw gr(), kt;
    return yt(!1), /**  @type {Exports} */
    c;
  } catch (c) {
    if (c === kt)
      return t.recover === !1 && ro(), Pr(), yo(r), yt(!1), qi(e, t);
    throw c;
  } finally {
    yt(i), Ze(o);
  }
}
const pt = /* @__PURE__ */ new Map();
function Oi(e, { target: t, anchor: r, props: i = {}, events: o, context: n, intro: c = !0 }) {
  Pr();
  var s = /* @__PURE__ */ new Set(), u = (h) => {
    for (var p = 0; p < h.length; p++) {
      var k = h[p];
      if (!s.has(k)) {
        s.add(k);
        var V = $o(k);
        t.addEventListener(k, zt, { passive: V });
        var _ = pt.get(k);
        _ === void 0 ? (document.addEventListener(k, zt, { passive: V }), pt.set(k, 1)) : pt.set(k, _ + 1);
      }
    }
  };
  u(Hn(Di)), qr.add(u);
  var d = void 0, m = Vo(() => {
    var h = r ?? t.appendChild(vr());
    return Nr(() => {
      if (n) {
        di({});
        var p = (
          /** @type {ComponentContext} */
          ie
        );
        p.c = n;
      }
      o && (i.$$events = o), D && Re(
        /** @type {TemplateNode} */
        h,
        null
      ), d = e(h, i) || {}, D && (S.nodes_end = N), n && hi();
    }), () => {
      var V;
      for (var p of s) {
        t.removeEventListener(p, zt);
        var k = (
          /** @type {number} */
          pt.get(p)
        );
        --k === 0 ? (document.removeEventListener(p, zt), pt.delete(p)) : pt.set(p, k);
      }
      qr.delete(u), h !== r && ((V = h.parentNode) == null || V.removeChild(h));
    };
  });
  return Or.set(d, m), d;
}
let Or = /* @__PURE__ */ new WeakMap();
function Ho(e, t) {
  const r = Or.get(e);
  return r ? (Or.delete(e), r(t)) : Promise.resolve();
}
function K(e, t, [r, i] = [0, 0]) {
  D && r === 0 && wt();
  var o = e, n = null, c = null, s = ce, u = r > 0 ? Mr : 0, d = !1;
  const m = (p, k = !0) => {
    d = !0, h(k, p);
  }, h = (p, k) => {
    if (s === (s = p)) return;
    let V = !1;
    if (D && i !== -1) {
      if (r === 0) {
        const O = (
          /** @type {Comment} */
          o.data
        );
        O === Zr ? i = 0 : O === ci ? i = 1 / 0 : (i = parseInt(O.substring(1)), i !== i && (i = s ? 1 / 0 : -1));
      }
      const _ = i > r;
      !!s === _ && (o = mo(), Ze(o), yt(!1), V = !0, i = -1);
    }
    s ? (n ? Ma(n) : k && (n = Nr(() => k(o))), c && Dr(c, () => {
      c = null;
    })) : (c ? Ma(c) : k && (c = Nr(() => k(o, [r + 1, i]))), n && Dr(n, () => {
      n = null;
    })), V && yt(!0);
  };
  Ii(() => {
    d = !1, t(m), d || h(null, null);
  }, u), D && (o = N);
}
function tt(e, t, r = !1, i = !1, o = !1) {
  var n = e, c = "";
  Ie(() => {
    var s = (
      /** @type {Effect} */
      S
    );
    if (c === (c = t() ?? "")) {
      D && wt();
      return;
    }
    if (s.nodes_start !== null && (ji(
      s.nodes_start,
      /** @type {TemplateNode} */
      s.nodes_end
    ), s.nodes_start = s.nodes_end = null), c !== "") {
      if (D) {
        N.data;
        for (var u = wt(), d = u; u !== null && (u.nodeType !== 8 || /** @type {Comment} */
        u.data !== ""); )
          d = u, u = /** @type {TemplateNode} */
          /* @__PURE__ */ Ye(u);
        if (u === null)
          throw gr(), kt;
        Re(N, d), n = Ze(u);
        return;
      }
      var m = c + "";
      r ? m = `<svg>${m}</svg>` : i && (m = `<math>${m}</math>`);
      var h = Xr(m);
      if ((r || i) && (h = /** @type {Element} */
      /* @__PURE__ */ me(h)), Re(
        /** @type {TemplateNode} */
        /* @__PURE__ */ me(h),
        /** @type {TemplateNode} */
        h.lastChild
      ), r || i)
        for (; /* @__PURE__ */ me(h); )
          n.before(
            /** @type {Node} */
            /* @__PURE__ */ me(h)
          );
      else
        n.before(h);
    }
  });
}
function Fo(e, t, r, i, o) {
  var s;
  D && wt();
  var n = (s = t.$$slots) == null ? void 0 : s[r], c = !1;
  n === !0 && (n = t.children, c = !0), n === void 0 || n(e, c ? () => i : i);
}
const Ua = [...` 	
\r\f \v\uFEFF`];
function Mo(e, t, r) {
  var i = "" + e;
  if (r) {
    for (var o in r)
      if (r[o])
        i = i ? i + " " + o : o;
      else if (i.length)
        for (var n = o.length, c = 0; (c = i.indexOf(o, c)) >= 0; ) {
          var s = c + n;
          (c === 0 || Ua.includes(i[c - 1])) && (s === i.length || Ua.includes(i[s])) ? i = (c === 0 ? "" : i.substring(0, c)) + i.substring(s + 1) : c = s;
        }
  }
  return i === "" ? null : i;
}
function Bo(e, t, r, i, o, n) {
  var c = e.__className;
  if (D || c !== r || c === void 0) {
    var s = Mo(r, i, n);
    (!D || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : e.className = s), e.__className = r;
  } else if (n && o !== n)
    for (var u in n) {
      var d = !!n[u];
      (o == null || d !== !!o[u]) && e.classList.toggle(u, d);
    }
  return n;
}
const Uo = Symbol("is custom element"), Zo = Symbol("is html");
function Za(e) {
  if (D) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var i = e.value;
          R(e, "value", null), e.value = i;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          R(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = r, Kn(r), zi();
  }
}
function Go(e, t) {
  var r = Hi(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function R(e, t, r, i) {
  var o = Hi(e);
  D && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = r) && (t === "loading" && (e[Wn] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Wo(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Hi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Uo]: e.nodeName.includes("-"),
      [Zo]: e.namespaceURI === go
    })
  );
}
var Ga = /* @__PURE__ */ new Map();
function Wo(e) {
  var t = Ga.get(e.nodeName);
  if (t) return t;
  Ga.set(e.nodeName, t = []);
  for (var r, i = e, o = Element.prototype; o !== i; ) {
    r = Fn(i);
    for (var n in r)
      r[n].set && t.push(n);
    i = ei(i);
  }
  return t;
}
function Yo(e, t, r = t) {
  zo(e, "change", (i) => {
    var o = i ? e.defaultChecked : e.checked;
    r(o);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (D && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  it(t) == null) && r(e.checked), Jr(() => {
    var i = t();
    e.checked = !!i;
  });
}
function Wa(e, t) {
  return e === t || (e == null ? void 0 : e[Nt]) === t;
}
function Qt(e = {}, t, r, i) {
  return Kr(() => {
    var o, n;
    return Jr(() => {
      o = n, n = [], it(() => {
        e !== r(...n) && (t(e, ...n), o && Wa(r(...o), e) && t(null, ...o));
      });
    }), () => {
      Br(() => {
        n && Wa(r(...n), e) && t(null, ...n);
      });
    };
  }), e;
}
let er = !1, Hr = Symbol();
function Ko(e, t, r) {
  const i = r[t] ?? (r[t] = {
    store: null,
    source: /* @__PURE__ */ Gr(void 0),
    unsubscribe: At
  });
  if (i.store !== e && !(Hr in r))
    if (i.unsubscribe(), i.store = e ?? null, e == null)
      i.source.v = void 0, i.unsubscribe = At;
    else {
      var o = !0;
      i.unsubscribe = Bi(e, (n) => {
        o ? i.source.v = n : y(i.source, n);
      }), o = !1;
    }
  return e && Hr in r ? ar(e) : l(i.source);
}
function Jo() {
  const e = {};
  function t() {
    Yr(() => {
      for (var r in e)
        e[r].unsubscribe();
      qt(e, Hr, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function Xo(e) {
  var t = er;
  try {
    return er = !1, [e(), er];
  } finally {
    er = t;
  }
}
function Ya(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function x(e, t, r, i) {
  var st;
  var o = (r & lo) !== 0, n = !0, c = (r & co) !== 0, s = (r & fo) !== 0, u = !1, d;
  c ? [d, u] = Xo(() => (
    /** @type {V} */
    e[t]
  )) : d = /** @type {V} */
  e[t];
  var m = Nt in e || ii in e, h = c && (((st = rt(e, t)) == null ? void 0 : st.set) ?? (m && t in e && ((F) => e[t] = F))) || void 0, p = (
    /** @type {V} */
    i
  ), k = !0, V = !1, _ = () => (V = !0, k && (k = !1, s ? p = it(
    /** @type {() => V} */
    i
  ) : p = /** @type {V} */
  i), p);
  d === void 0 && i !== void 0 && (h && n && ao(), d = _(), h && h(d));
  var O;
  if (O = () => {
    var F = (
      /** @type {V} */
      e[t]
    );
    return F === void 0 ? _() : (k = !0, V = !1, F);
  }, (r & so) === 0)
    return O;
  if (h) {
    var ue = e.$$legacy;
    return function(F, oe) {
      return arguments.length > 0 ? ((!oe || ue || u) && h(oe ? O() : F), F) : O();
    };
  }
  var J = !1, te = /* @__PURE__ */ Gr(d), X = /* @__PURE__ */ hr(() => {
    var F = O(), oe = l(te);
    return J ? (J = !1, oe) : te.v = F;
  });
  return c && l(X), o || (X.equals = Ur), function(F, oe) {
    if (arguments.length > 0) {
      const ye = oe ? l(X) : c ? Be(F) : F;
      if (!X.equals(ye)) {
        if (J = !0, y(te, ye), V && p !== void 0 && (p = ye), Ya(X))
          return F;
        it(() => l(X));
      }
      return F;
    }
    return Ya(X) ? X.v : l(X);
  };
}
function Qo(e) {
  return new el(e);
}
var Pe, pe;
class el {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    Ir(this, Pe);
    /** @type {Record<string, any>} */
    Ir(this, pe);
    var n;
    var r = /* @__PURE__ */ new Map(), i = (c, s) => {
      var u = /* @__PURE__ */ Gr(s);
      return r.set(c, u), u;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(c, s) {
          return l(r.get(s) ?? i(s, Reflect.get(c, s)));
        },
        has(c, s) {
          return s === ii ? !0 : (l(r.get(s) ?? i(s, Reflect.get(c, s))), Reflect.has(c, s));
        },
        set(c, s, u) {
          return y(r.get(s) ?? i(s, u), u), Reflect.set(c, s, u);
        }
      }
    );
    Vr(this, pe, (t.hydrate ? Oo : qi)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((n = t == null ? void 0 : t.props) != null && n.$$host) || t.sync === !1) && E(), Vr(this, Pe, o.$$events);
    for (const c of Object.keys(se(this, pe)))
      c === "$set" || c === "$destroy" || c === "$on" || qt(this, c, {
        get() {
          return se(this, pe)[c];
        },
        /** @param {any} value */
        set(s) {
          se(this, pe)[c] = s;
        },
        enumerable: !0
      });
    se(this, pe).$set = /** @param {Record<string, any>} next */
    (c) => {
      Object.assign(o, c);
    }, se(this, pe).$destroy = () => {
      Ho(se(this, pe));
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
    const i = (...o) => r.call(this, ...o);
    return se(this, Pe)[t].push(i), () => {
      se(this, Pe)[t] = se(this, Pe)[t].filter(
        /** @param {any} fn */
        (o) => o !== i
      );
    };
  }
  $destroy() {
    se(this, pe).$destroy();
  }
}
Pe = new WeakMap(), pe = new WeakMap();
let Fi;
typeof HTMLElement == "function" && (Fi = class extends HTMLElement {
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
      const o = this.$$c.$on(t, r);
      this.$$l_u.set(r, o);
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
      const o = this.$$l_u.get(r);
      o && (o(), this.$$l_u.delete(r));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(o) {
        return (n) => {
          const c = document.createElement("slot");
          o !== "default" && (c.name = o), H(n, c);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, i = tl(this);
      for (const o of this.$$s)
        o in i && (o === "default" && !this.$$d.children ? (this.$$d.children = t(o), r.default = !0) : r[o] = t(o));
      for (const o of this.attributes) {
        const n = this.$$g_p(o.name);
        n in this.$$d || (this.$$d[n] = rr(n, o.value, this.$$p_d, "toProp"));
      }
      for (const o in this.$$p_d)
        !(o in this.$$d) && this[o] !== void 0 && (this.$$d[o] = this[o], delete this[o]);
      this.$$c = Qo({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = Io(() => {
        Jr(() => {
          var o;
          this.$$r = !0;
          for (const n of ir(this.$$c)) {
            if (!((o = this.$$p_d[n]) != null && o.reflect)) continue;
            this.$$d[n] = this.$$c[n];
            const c = rr(
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
      for (const o in this.$$l)
        for (const n of this.$$l[o]) {
          const c = this.$$c.$on(o, n);
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
    var o;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = rr(t, i, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [t]: this.$$d[t] }));
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
    return ir(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function rr(e, t, r, i) {
  var n;
  const o = (n = r[e]) == null ? void 0 : n.type;
  if (t = o === "Boolean" && typeof t != "boolean" ? t != null : t, !i || !r[e])
    return t;
  if (i === "toAttribute")
    switch (o) {
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
    switch (o) {
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
function tl(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function rl(e, t, r, i, o, n) {
  let c = class extends Fi {
    constructor() {
      super(e, r, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return ir(t).map(
        (s) => (t[s].attribute || s).toLowerCase()
      );
    }
  };
  return ir(t).forEach((s) => {
    qt(c.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(u) {
        var h;
        u = rr(s, u, t), this.$$d[s] = u;
        var d = this.$$c;
        if (d) {
          var m = (h = rt(d, s)) == null ? void 0 : h.get;
          m ? d[s] = u : d.$set({ [s]: u });
        }
      }
    });
  }), i.forEach((s) => {
    qt(c.prototype, s, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[s];
      }
    });
  }), e.element = /** @type {any} */
  c, c;
}
function Mi(e) {
  ie === null && ui(), zr(() => {
    const t = it(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function al(e) {
  ie === null && ui(), Mi(() => () => it(e));
}
function Bi(e, t, r) {
  if (e == null)
    return t(void 0), At;
  const i = it(
    () => e.subscribe(
      t,
      // @ts-expect-error
      r
    )
  );
  return i.unsubscribe ? () => i.unsubscribe() : i;
}
const mt = [];
function il(e, t = At) {
  let r = null;
  const i = /* @__PURE__ */ new Set();
  function o(s) {
    if (si(e, s) && (e = s, r)) {
      const u = !mt.length;
      for (const d of i)
        d[1](), mt.push(d, e);
      if (u) {
        for (let d = 0; d < mt.length; d += 2)
          mt[d][0](mt[d + 1]);
        mt.length = 0;
      }
    }
  }
  function n(s) {
    o(s(
      /** @type {T} */
      e
    ));
  }
  function c(s, u = At) {
    const d = [s, u];
    return i.add(d), i.size === 1 && (r = t(o, n) || At), s(
      /** @type {T} */
      e
    ), () => {
      i.delete(d), i.size === 0 && r && (r(), r = null);
    };
  }
  return { set: o, update: n, subscribe: c };
}
function ar(e) {
  let t;
  return Bi(e, (r) => t = r)(), t;
}
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (e) => ar(globalThis.altchaI18n.store)[e],
  set: (e, t) => {
    Object.assign(ar(globalThis.altchaI18n.store), {
      [e]: t
    }), globalThis.altchaI18n.store.set(ar(globalThis.altchaI18n.store));
  },
  store: il({})
};
const nl = {
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
globalThis.altchaI18n.set("af", nl);
const ol = {
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
globalThis.altchaI18n.set("ar", ol);
const ll = {
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
globalThis.altchaI18n.set("bg", ll);
const sl = {
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
globalThis.altchaI18n.set("be", sl);
const cl = {
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
globalThis.altchaI18n.set("bs", cl);
const fl = {
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
globalThis.altchaI18n.set("ca", fl);
const ul = {
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
globalThis.altchaI18n.set("cs", ul);
const dl = {
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
globalThis.altchaI18n.set("da", dl);
const hl = {
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
globalThis.altchaI18n.set("de", hl);
const gl = {
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
globalThis.altchaI18n.set("el", gl);
const vl = {
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
globalThis.altchaI18n.set("es-es", vl);
const bl = {
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
globalThis.altchaI18n.set("es-419", bl);
const pl = {
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
globalThis.altchaI18n.set("et", pl);
const ml = {
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
globalThis.altchaI18n.set("eu", ml);
const yl = {
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
globalThis.altchaI18n.set("fi", yl);
const Al = {
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
globalThis.altchaI18n.set("fr-ca", Al);
const kl = {
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
globalThis.altchaI18n.set("fr-fr", kl);
const _l = {
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
globalThis.altchaI18n.set("ga", _l);
const wl = {
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
globalThis.altchaI18n.set("hr", wl);
const Cl = {
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
globalThis.altchaI18n.set("hu", Cl);
const El = {
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
globalThis.altchaI18n.set("is", El);
const Ll = {
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
globalThis.altchaI18n.set("it", Ll);
const xl = {
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
globalThis.altchaI18n.set("lt", xl);
const Tl = {
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
globalThis.altchaI18n.set("lv", Tl);
const Il = {
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
globalThis.altchaI18n.set("mt", Il);
const Ui = {
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
globalThis.altchaI18n.set("nb", Ui);
globalThis.altchaI18n.set("no", Ui);
const Vl = {
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
globalThis.altchaI18n.set("nl", Vl);
const Rl = {
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
globalThis.altchaI18n.set("pl", Rl);
const jl = {
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
globalThis.altchaI18n.set("pt-pt", jl);
const Sl = {
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
globalThis.altchaI18n.set("pt-br", Sl);
const $l = {
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
globalThis.altchaI18n.set("ro", $l);
const Pl = {
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
globalThis.altchaI18n.set("ru", Pl);
const zl = {
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
globalThis.altchaI18n.set("sk", zl);
const Nl = {
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
globalThis.altchaI18n.set("sl", Nl);
const Dl = {
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
globalThis.altchaI18n.set("sr", Dl);
const ql = {
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
globalThis.altchaI18n.set("sv", ql);
const Ol = {
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
globalThis.altchaI18n.set("tr", Ol);
const Hl = {
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
globalThis.altchaI18n.set("uk", Hl);
const Fl = {
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
globalThis.altchaI18n.set("bn", Fl);
const Ml = {
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
globalThis.altchaI18n.set("he", Ml);
const Bl = {
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
globalThis.altchaI18n.set("hi", Bl);
const Ul = {
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
globalThis.altchaI18n.set("id", Ul);
const Zl = {
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
globalThis.altchaI18n.set("ja", Zl);
const Gl = {
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
globalThis.altchaI18n.set("ko", Gl);
const Wl = {
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
globalThis.altchaI18n.set("mr", Wl);
const Yl = {
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
globalThis.altchaI18n.set("ta", Yl);
const Kl = {
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
globalThis.altchaI18n.set("te", Kl);
const Jl = {
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
globalThis.altchaI18n.set("th", Jl);
const Xl = {
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
globalThis.altchaI18n.set("ur", Xl);
const Ql = {
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
globalThis.altchaI18n.set("vi", Ql);
const es = {
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
globalThis.altchaI18n.set("zh-cn", es);
const ts = {
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
globalThis.altchaI18n.set("zh-tw", ts);
const Zi = `(function(){"use strict";const d=new TextEncoder;function p(e){return[...new Uint8Array(e)].map(t=>t.toString(16).padStart(2,"0")).join("")}async function b(e,t,r){if(typeof crypto>"u"||!("subtle"in crypto)||!("digest"in crypto.subtle))throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");return p(await crypto.subtle.digest(r.toUpperCase(),d.encode(e+t)))}function w(e,t,r="SHA-256",n=1e6,s=0){const o=new AbortController,a=Date.now();return{promise:(async()=>{for(let c=s;c<=n;c+=1){if(o.signal.aborted)return null;if(await b(t,c,r)===e)return{number:c,took:Date.now()-a}}return null})(),controller:o}}function h(e){const t=atob(e),r=new Uint8Array(t.length);for(let n=0;n<t.length;n++)r[n]=t.charCodeAt(n);return r}function g(e,t=12){const r=new Uint8Array(t);for(let n=0;n<t;n++)r[n]=e%256,e=Math.floor(e/256);return r}async function m(e,t="",r=1e6,n=0){const s="AES-GCM",o=new AbortController,a=Date.now(),l=async()=>{for(let u=n;u<=r;u+=1){if(o.signal.aborted||!c||!y)return null;try{const f=await crypto.subtle.decrypt({name:s,iv:g(u)},c,y);if(f)return{clearText:new TextDecoder().decode(f),took:Date.now()-a}}catch{}}return null};let c=null,y=null;try{y=h(e);const u=await crypto.subtle.digest("SHA-256",d.encode(t));c=await crypto.subtle.importKey("raw",u,s,!1,["decrypt"])}catch{return{promise:Promise.reject(),controller:o}}return{promise:l(),controller:o}}let i;onmessage=async e=>{const{type:t,payload:r,start:n,max:s}=e.data;let o=null;if(t==="abort")i==null||i.abort(),i=void 0;else if(t==="work"){if("obfuscated"in r){const{key:a,obfuscated:l}=r||{};o=await m(l,a,s,n)}else{const{algorithm:a,challenge:l,salt:c}=r||{};o=w(l,c,a,s,n)}i=o.controller,o.promise.then(a=>{self.postMessage(a&&{...a,worker:!0})})}}})();
`, Ka = typeof self < "u" && self.Blob && new Blob([Zi], { type: "text/javascript;charset=utf-8" });
function rs(e) {
  let t;
  try {
    if (t = Ka && (self.URL || self.webkitURL).createObjectURL(Ka), !t) throw "";
    const r = new Worker(t, {
      name: e == null ? void 0 : e.name
    });
    return r.addEventListener("error", () => {
      (self.URL || self.webkitURL).revokeObjectURL(t);
    }), r;
  } catch {
    return new Worker(
      "data:text/javascript;charset=utf-8," + encodeURIComponent(Zi),
      {
        name: e == null ? void 0 : e.name
      }
    );
  } finally {
    t && (self.URL || self.webkitURL).revokeObjectURL(t);
  }
}
const as = "5";
var Xa;
typeof window < "u" && ((Xa = window.__svelte ?? (window.__svelte = {})).v ?? (Xa.v = /* @__PURE__ */ new Set())).add(as);
const Gi = new TextEncoder();
function is(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function ns(e, t = "SHA-256", r = 1e5) {
  const i = Date.now().toString(16);
  e || (e = Math.round(Math.random() * r));
  const o = await Wi(i, e, t);
  return {
    algorithm: t,
    challenge: o,
    salt: i,
    signature: ""
  };
}
async function Wi(e, t, r) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return is(
    await crypto.subtle.digest(
      r.toUpperCase(),
      Gi.encode(e + t)
    )
  );
}
function os(e, t, r = "SHA-256", i = 1e6, o = 0) {
  const n = new AbortController(), c = Date.now();
  return {
    promise: (async () => {
      for (let u = o; u <= i; u += 1) {
        if (n.signal.aborted)
          return null;
        if (await Wi(t, u, r) === e)
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
function Ja() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function ls(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let i = 0; i < t.length; i++)
    r[i] = t.charCodeAt(i);
  return r;
}
function ss(e, t = 12) {
  const r = new Uint8Array(t);
  for (let i = 0; i < t; i++)
    r[i] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function cs(e, t = "", r = 1e6, i = 0) {
  const o = "AES-GCM", n = new AbortController(), c = Date.now(), s = async () => {
    for (let m = i; m <= r; m += 1) {
      if (n.signal.aborted || !u || !d)
        return null;
      try {
        const h = await crypto.subtle.decrypt(
          {
            name: o,
            iv: ss(m)
          },
          u,
          d
        );
        if (h)
          return {
            clearText: new TextDecoder().decode(h),
            took: Date.now() - c
          };
      } catch {
      }
    }
    return null;
  };
  let u = null, d = null;
  try {
    d = ls(e);
    const m = await crypto.subtle.digest(
      "SHA-256",
      Gi.encode(t)
    );
    u = await crypto.subtle.importKey(
      "raw",
      m,
      o,
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
var w = /* @__PURE__ */ ((e) => (e.CODE = "code", e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(w || {}), ee = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.LOADING = "loading", e.PLAYING = "playing", e.PAUSED = "paused", e.READY = "ready", e))(ee || {});
const fs = {
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
globalThis.altchaI18n.set("en", fs);
const Sr = (e, t) => {
  let r = /* @__PURE__ */ vo(() => Un(t == null ? void 0 : t(), 24));
  var i = gs();
  Ie(() => {
    R(i, "width", l(r)), R(i, "height", l(r));
  }), H(e, i);
};
function us(e, t) {
  e.code === "Space" && (e.preventDefault(), e.stopImmediatePropagation(), t());
}
function ds(e, t) {
  e.preventDefault(), t();
}
function hs(e, t, r, i, o, n, c, s) {
  var u;
  [
    w.UNVERIFIED,
    w.ERROR,
    w.EXPIRED,
    w.CODE
  ].includes(l(t)) ? r() !== !1 && ((u = l(i)) == null ? void 0 : u.reportValidity()) === !1 ? y(o, !1) : n() ? c() : s() : y(o, !0);
}
var gs = /* @__PURE__ */ mr('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="altcha-spinner"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor"></path></svg>'), vs = /* @__PURE__ */ Ee('<input type="hidden">'), bs = /* @__PURE__ */ Ee('<div><a target="_blank" class="altcha-logo" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor"></path></svg></a></div>'), ps = /* @__PURE__ */ mr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg>'), ms = /* @__PURE__ */ mr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z"></path></svg>'), ys = /* @__PURE__ */ mr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"></path></svg>'), As = /* @__PURE__ */ Ee('<button type="button" class="altcha-code-challenge-audio"><!></button>'), ks = /* @__PURE__ */ Ee("<audio hidden autoplay><source></audio>"), _s = /* @__PURE__ */ Ee('<div class="altcha-code-challenge" role="dialog"><div class="altcha-code-challenge-arrow"></div> <form data-code-challenge-form="1"><img class="altcha-code-challenge-image" alt=""> <input type="text" autocomplete="off" name="code" class="altcha-code-challenge-input" required> <div class="altcha-code-challenge-buttons"><div class="altcha-code-challenge-buttons-left"><!> <button type="button" class="altcha-code-challenge-reload"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z"></path></svg></button></div> <button type="submit" class="altcha-code-challenge-verify"><!> </button></div> <!></form></div>'), ws = /* @__PURE__ */ Ee("<div><!></div>"), Cs = /* @__PURE__ */ Ee("<div><!></div>"), Es = /* @__PURE__ */ Ee('<div class="altcha-error"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg> <!></div>'), Ls = /* @__PURE__ */ Ee('<div class="altcha-footer"><div><!></div></div>'), xs = /* @__PURE__ */ Ee('<div class="altcha-anchor-arrow"></div>'), Ts = /* @__PURE__ */ Ee('<!> <div class="altcha"><div class="altcha-main"><div><!> <input type="checkbox"></div> <label class="altcha-label"><!></label> <!> <!> <!></div> <!> <!> <!></div>', 1);
function Is(e, t) {
  var $a, Pa;
  di(t, !0);
  const [r, i] = Jo(), o = () => Ko(Ki, "$altchaI18nStore", r);
  let n = x(t, "auto", 7, void 0), c = x(t, "blockspam", 7, void 0), s = x(t, "challengeurl", 7, void 0), u = x(t, "challengejson", 7, void 0), d = x(t, "credentials", 7, void 0), m = x(t, "customfetch", 7, void 0), h = x(t, "debug", 7, !1), p = x(t, "delay", 7, 0), k = x(t, "disableautofocus", 7, !1), V = x(t, "expire", 7, void 0), _ = x(t, "floating", 7, void 0), O = x(t, "floatinganchor", 7, void 0), ue = x(t, "floatingoffset", 7, void 0), J = x(t, "floatingpersist", 7, !1), te = x(t, "hidefooter", 7, !1), X = x(t, "hidelogo", 7, !1), st = x(t, "id", 7, void 0), F = x(t, "language", 7, void 0), oe = x(t, "name", 7, "altcha"), ye = x(t, "maxnumber", 7, 1e6), Ct = x(t, "mockerror", 7, !1), De = x(t, "obfuscated", 7, void 0), Ae = x(t, "overlay", 7, void 0), Et = x(t, "overlaycontent", 7, void 0), Ut = x(t, "plugins", 7, void 0), Lt = x(t, "refetchonexpire", 7, !0), Ke = x(t, "sentinel", 7, void 0), Le = x(t, "spamfilter", 7, !1), ct = x(t, "strings", 7, void 0), ve = x(t, "test", 7, !1), re = x(t, "verifyurl", 7, void 0), ft = x(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), xt = x(t, "workerurl", 7, void 0);
  const { altchaI18n: Yi } = globalThis, Ki = Yi.store, Qr = ["SHA-256", "SHA-384", "SHA-512"], Ji = "https://altcha.org/", qe = (a, f) => {
    t.$$host.dispatchEvent(new CustomEvent(a, { detail: f }));
  }, ea = (Pa = ($a = document.documentElement.lang) == null ? void 0 : $a.split("-")) == null ? void 0 : Pa[0], yr = /* @__PURE__ */ $t(() => {
    var a;
    return s() && new URL(s(), location.origin).host.endsWith(".altcha.org") && !!((a = s()) != null && a.includes("apiKey=ckey_"));
  }), Ar = /* @__PURE__ */ $t(() => u() ? va(u()) : void 0), Xi = /* @__PURE__ */ $t(() => ct() ? va(ct()) : {}), P = /* @__PURE__ */ $t(() => ({
    ...ia(o()),
    ...l(Xi)
  })), ta = /* @__PURE__ */ $t(() => `${st() || oe()}_checkbox_${Math.round(Math.random() * 1e8)}`);
  let Tt = /* @__PURE__ */ z(!1), B = /* @__PURE__ */ z(null), T = /* @__PURE__ */ z(Be(w.UNVERIFIED)), q = /* @__PURE__ */ z(void 0), It = /* @__PURE__ */ z(null), Oe = /* @__PURE__ */ z(null), de = /* @__PURE__ */ z(null), kr = /* @__PURE__ */ z(null), ut = /* @__PURE__ */ z(null), $ = /* @__PURE__ */ z(null), dt = /* @__PURE__ */ z(null), Je = /* @__PURE__ */ z(null), xe = null, U = /* @__PURE__ */ z(null), Xe = /* @__PURE__ */ z(!1), He = [], _r = /* @__PURE__ */ z(!1), Se = /* @__PURE__ */ z(null);
  zr(() => {
    dn(l(Je));
  }), zr(() => {
    hn(l(T));
  }), al(() => {
    Qi(), y(dt, null), l($) && (l($).removeEventListener("submit", fa), l($).removeEventListener("reset", ua), l($).removeEventListener("focusin", ca), y($, null)), xe && (clearTimeout(xe), xe = null), document.removeEventListener("click", la), document.removeEventListener("scroll", sa), window.removeEventListener("resize", ga);
  }), Mi(() => {
    var a;
    I("mounted", "2.1.0"), I("workers", ft()), an(), I("plugins", He.length ? He.map((f) => f.constructor.pluginName).join(", ") : "none"), ve() && I("using test mode"), V() && Cr(V()), n() !== void 0 && I("auto", n()), _() !== void 0 && pa(_()), y($, (a = l(q)) == null ? void 0 : a.closest("form"), !0), l($) && (l($).addEventListener("submit", fa, { capture: !0 }), l($).addEventListener("reset", ua), (n() === "onfocus" || J() === "focus") && l($).addEventListener("focusin", ca)), Ae() && ma(!0), n() === "onload" && (De() ? Vt() : $e()), l(yr) && (te() || X()) && I("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      qe("load");
    });
  });
  function Zt(a, f) {
    return btoa(JSON.stringify({
      algorithm: a.algorithm,
      challenge: a.challenge,
      number: f.number,
      salt: a.salt,
      signature: a.signature,
      test: ve() ? !0 : void 0,
      took: f.took
    }));
  }
  function Qi() {
    for (const a of He)
      a.destroy();
  }
  function ra() {
    s() && Lt() && l(T) === w.VERIFIED ? $e() : Qe(w.EXPIRED, l(P).expired);
  }
  async function en() {
    var a;
    if (Ct())
      throw I("mocking error"), new Error("Mocked error.");
    if (l(Ar))
      return I("using provided json data"), l(Ar);
    if (ve())
      return I("generating test challenge", { test: ve() }), ns(typeof ve() != "boolean" ? +ve() : void 0);
    {
      if (!s() && l($)) {
        const L = l($).getAttribute("action");
        L != null && L.includes("/form/") && s(L + "/altcha");
      }
      if (!s())
        throw new Error("Attribute challengeurl not set.");
      I("fetching challenge from", s());
      const f = {
        credentials: typeof d() == "boolean" ? "include" : d(),
        headers: Le() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      }, g = await aa()(s(), f);
      if (!g || !(g instanceof Response))
        throw new Error("Custom fetch function did not return a response.");
      if (g.status !== 200)
        throw new Error(`Server responded with ${g.status}.`);
      const b = g.headers.get("X-Altcha-Config"), v = await g.json(), C = new URLSearchParams((a = v.salt.split("?")) == null ? void 0 : a[1]), A = C.get("expires") || C.get("expire");
      if (A) {
        const L = new Date(+A * 1e3), M = isNaN(L.getTime()) ? 0 : L.getTime() - Date.now();
        M > 0 && Cr(M);
      }
      if (b)
        try {
          const L = JSON.parse(b);
          L && typeof L == "object" && (L.verifyurl && !L.verifyurl.startsWith("fn:") && (L.verifyurl = oa(L.verifyurl)), ka(L));
        } catch (L) {
          I("unable to configure from X-Altcha-Config", L);
        }
      return v;
    }
  }
  function tn(a) {
    var g, b;
    const f = (g = l($)) == null ? void 0 : g.querySelector(typeof a == "string" ? `input[name="${a}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((b = f == null ? void 0 : f.value) == null ? void 0 : b.slice(f.value.indexOf("@"))) || void 0;
  }
  function aa() {
    let a = fetch;
    if (m())
      if (I("using customfetch"), typeof m() == "string") {
        if (a = globalThis[m()] || null, !a)
          throw new Error(`Custom fetch function not found: ${m()}`);
      } else
        a = m();
    return a;
  }
  function ia(a, f = [
    F() || "",
    document.documentElement.lang || "",
    ...navigator.languages
  ]) {
    const g = Object.keys(a).map((v) => v.toLowerCase()), b = f.reduce(
      (v, C) => (C = C.toLowerCase(), v || (a[C] ? C : null) || g.find((A) => C.split("-")[0] === A.split("-")[0]) || null),
      null
    );
    return a[b || "en"];
  }
  function rn() {
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
  function na(a) {
    var g;
    return [
      ...((g = l($)) == null ? void 0 : g.querySelectorAll(a != null && a.length ? a.map((b) => `input[name="${b}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (b, v) => {
        const C = v.name, A = v.value;
        return C && A && (b[C] = /\n/.test(A) ? A.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : A), b;
      },
      {}
    );
  }
  function oa(a, f) {
    const g = new URL(s() || location.origin), b = new URL(a, g);
    if (b.search || (b.search = g.search), f)
      for (const v in f)
        f[v] !== void 0 && f[v] !== null && b.searchParams.set(v, f[v]);
    return b.toString();
  }
  function an() {
    const a = Ut() !== void 0 ? Ut().split(",") : void 0;
    for (const f of globalThis.altchaPlugins)
      (!a || a.includes(f.pluginName)) && He.push(new f({
        el: l(q),
        clarify: Vt,
        dispatch: qe,
        getConfiguration: _a,
        getFloatingAnchor: wa,
        getState: Ca,
        log: I,
        reset: Qe,
        solve: Aa,
        setState: Te,
        setFloatingAnchor: Ea,
        verify: $e
      }));
  }
  function I(...a) {
    (h() || a.some((f) => f instanceof Error)) && console[a[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${oe()}]`, ...a);
  }
  function nn() {
    y(U, ee.PAUSED, !0);
  }
  function on(a) {
    y(U, ee.ERROR, !0);
  }
  function ln() {
    y(U, ee.READY, !0);
  }
  function sn() {
    y(U, ee.LOADING, !0);
  }
  function cn() {
    y(U, ee.PLAYING, !0);
  }
  function fn() {
    y(U, ee.PAUSED, !0);
  }
  function un(a) {
    var f;
    if (a.preventDefault(), a.stopPropagation(), l(B)) {
      const g = new FormData(a.target), b = String(g.get("code"));
      if ((f = re()) != null && f.startsWith("fn:")) {
        const v = re().replace(/^fn:/, "");
        if (I(`calling ${v} function instead of verifyurl`), !(v in globalThis))
          throw new Error(`Global function "${v}" is undefined.`);
        return globalThis[v]({
          challenge: l(B).challenge,
          code: b,
          solution: l(B).solution
        });
      }
      y(Xe, !0), ba(Zt(l(B).challenge, l(B).solution), b).then(({ reason: v, verified: C }) => {
        C ? (y(B, null), Te(w.VERIFIED), I("verified"), jr().then(() => {
          var A;
          (A = l(kr)) == null || A.focus(), qe("verified", { payload: l(Se) }), n() === "onsubmit" ? wr(l(dt)) : Ae() && Rt();
        })) : (Qe(), y(Je, v || "Verification failed", !0));
      }).catch((v) => {
        y(B, null), Te(w.ERROR, v), I("sentinel verification failed:", v);
      }).finally(() => {
        y(Xe, !1);
      });
    }
  }
  function la(a) {
    var g;
    const f = a.target;
    _() && f && !l(q).contains(f) && (l(T) === w.VERIFIED && J() === !1 || l(T) === w.VERIFIED && J() === "focus" && !((g = l($)) != null && g.matches(":focus-within")) || n() === "off" && l(T) === w.UNVERIFIED) && Rt();
  }
  function sa() {
    _() && l(T) !== w.UNVERIFIED && jt();
  }
  function dn(a) {
    for (const f of He)
      typeof f.onErrorChange == "function" && f.onErrorChange(l(Je));
  }
  function ca(a) {
    l(T) === w.UNVERIFIED ? $e() : _() && J() === "focus" && l(T) === w.VERIFIED && Gt();
  }
  function fa(a) {
    var b;
    const f = a.target;
    f != null && f.hasAttribute("data-code-challenge-form") || (y(dt, a.submitter, !0), l($) && n() === "onsubmit" ? ((b = l(dt)) == null || b.blur(), l(T) === w.UNVERIFIED ? (a.preventDefault(), a.stopPropagation(), $e().then(() => {
      wr(l(dt));
    })) : l(T) !== w.VERIFIED && (a.preventDefault(), a.stopPropagation(), l(T) === w.VERIFYING && da())) : l($) && _() && n() === "off" && l(T) === w.UNVERIFIED && (a.preventDefault(), a.stopPropagation(), Gt()));
  }
  function ua() {
    Qe();
  }
  function da() {
    l(T) === w.VERIFYING && l(P).waitAlert && alert(l(P).waitAlert);
  }
  function ha() {
    l(Oe) ? l(Oe).paused ? (l(Oe).currentTime = 0, l(Oe).play()) : l(Oe).pause() : (y(_r, !0), requestAnimationFrame(() => {
      var a;
      (a = l(Oe)) == null || a.play();
    }));
  }
  function hn(a) {
    for (const f of He)
      typeof f.onStateChange == "function" && f.onStateChange(l(T));
    _() && l(T) !== w.UNVERIFIED && requestAnimationFrame(() => {
      jt();
    }), y(Tt, l(T) === w.VERIFIED), Ae() && l(de) && (l(T) !== w.UNVERIFIED ? Gt() : Rt());
  }
  function ga() {
    _() && jt();
  }
  function va(a) {
    return JSON.parse(a);
  }
  async function gn(a) {
    if (!re())
      throw new Error("Attribute verifyurl not set.");
    I("requesting server verification from", re());
    const f = { payload: a };
    if (Le() !== !1) {
      const {
        blockedCountries: v,
        classifier: C,
        disableRules: A,
        email: L,
        expectedLanguages: M,
        expectedCountries: Q,
        fields: le,
        ipAddress: Fe,
        text: Lr,
        timeZone: Kt
      } = rn();
      f.blockedCountries = v, f.classifier = C, f.disableRules = A, f.email = L === !1 ? void 0 : tn(L), f.expectedCountries = Q, f.expectedLanguages = M || (ea ? [ea] : void 0), f.fields = le === !1 ? void 0 : na(le), f.ipAddress = Fe === !1 ? void 0 : Fe || "auto", f.text = Lr, f.timeZone = Kt === !1 ? void 0 : Kt || Ja();
    }
    const g = await aa()(re(), {
      body: JSON.stringify(f),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (!g || !(g instanceof Response))
      throw new Error("Custom fetch function did not return a response.");
    if (g.status !== 200)
      throw new Error(`Server responded with ${g.status}.`);
    const b = await g.json();
    if (b != null && b.payload && y(Se, b.payload, !0), qe("serververification", b), c() && b.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  async function ba(a, f) {
    if (!re())
      throw new Error("Attribute verifyurl not set.");
    I("requesting sentinel verification from", re());
    const g = { code: f, payload: a };
    Ke() && (g.fields = Ke().fields ? na() : void 0, g.timeZone = Ke().timeZone ? Ja() : void 0);
    const b = await fetch(re(), {
      body: JSON.stringify(g),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (!b || !(b instanceof Response))
      throw new Error("Fetch function did not return a response.");
    if (b.status !== 200)
      throw new Error(`Server responded with ${b.status}.`);
    const v = await b.json();
    return v != null && v.payload && y(Se, v.payload, !0), qe("sentinelverification", v), v;
  }
  function wr(a) {
    var f;
    l($) && "requestSubmit" in l($) ? l($).requestSubmit(a) : (f = l($)) != null && f.reportValidity() && (a ? a.click() : l($).submit());
  }
  function Cr(a) {
    I("expire", a), xe && (clearTimeout(xe), xe = null), a < 1 ? ra() : xe = setTimeout(ra, a);
  }
  function pa(a) {
    I("floating", a), _() !== a && (l(q).style.left = "", l(q).style.top = ""), _(a === !0 || a === "" ? "auto" : a === !1 || a === "false" ? void 0 : _()), _() ? (n() || n("onsubmit"), document.addEventListener("scroll", sa), document.addEventListener("click", la), window.addEventListener("resize", ga)) : n() === "onsubmit" && n(void 0);
  }
  function ma(a) {
    var f, g;
    if (I("overlay", a), Ae(a), a) {
      if (n() || n("onsubmit"), l(de) && l(q).parentElement && l(de).replaceWith(l(q).parentElement), (g = (f = l(q)) == null ? void 0 : f.parentElement) != null && g.parentElement) {
        y(de, document.createElement("div"), !0), l(q).parentElement.parentElement.appendChild(l(de));
        const b = document.createElement("div"), v = document.createElement("button");
        v.type = "button", v.innerHTML = "&times;", v.addEventListener("click", (C) => {
          C.preventDefault(), Qe();
        }), l(de).classList.add("altcha-overlay-backdrop"), v.classList.add("altcha-overlay-close-button"), b.classList.add("altcha-overlay"), l(de).append(b), b.append(v), Et() && b.append(...document.querySelectorAll(Et())), b.append(l(q).parentElement);
      }
    } else l(de) && l(q).parentElement && (l(de).replaceWith(l(q).parentElement), l(q).style.display = "block");
  }
  function ya(a) {
    if (!a.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (a.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!Qr.includes(a.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${Qr.join(", ")}`);
    if (!a.challenge || a.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!a.salt || a.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function Aa(a) {
    let f = null;
    if ("Worker" in window) {
      try {
        f = await vn(a, a.maxNumber || a.maxnumber || ye());
      } catch (g) {
        I(g);
      }
      if ((f == null ? void 0 : f.number) !== void 0 || "obfuscated" in a)
        return { data: a, solution: f };
    }
    if ("obfuscated" in a) {
      const g = await cs(a.obfuscated, a.key, a.maxNumber || a.maxnumber);
      return { data: a, solution: await g.promise };
    }
    return {
      data: a,
      solution: await os(a.challenge, a.salt, a.algorithm, a.maxNumber || a.maxnumber || ye()).promise
    };
  }
  async function vn(a, f = typeof ve() == "number" ? ve() : a.maxNumber || a.maxnumber || ye(), g = Math.ceil(ft())) {
    const b = [];
    g = Math.min(16, f, Math.max(1, g));
    for (let A = 0; A < g; A++)
      b.push(altchaCreateWorker(xt()));
    const v = Math.ceil(f / g), C = await Promise.all(b.map((A, L) => {
      const M = L * v;
      return new Promise((Q) => {
        A.addEventListener("message", (le) => {
          if (le.data)
            for (const Fe of b)
              Fe !== A && Fe.postMessage({ type: "abort" });
          Q(le.data);
        }), A.postMessage({
          payload: a,
          max: M + v,
          start: M,
          type: "work"
        });
      });
    }));
    for (const A of b)
      A.terminate();
    return C.find((A) => !!A) || null;
  }
  async function Vt() {
    if (!De()) {
      Te(w.ERROR);
      return;
    }
    const a = He.find((f) => f.constructor.pluginName === "obfuscation");
    if (!a || !("clarify" in a)) {
      Te(w.ERROR), I("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in a && typeof a.clarify == "function")
      return a.clarify();
  }
  function ka(a) {
    a.obfuscated !== void 0 && De(a.obfuscated), a.auto !== void 0 && (n(a.auto), n() === "onload" && (De() ? Vt() : $e())), a.blockspam !== void 0 && c(!!a.blockspam), a.customfetch !== void 0 && m(a.customfetch), a.floatinganchor !== void 0 && O(a.floatinganchor), a.delay !== void 0 && p(a.delay), a.floatingoffset !== void 0 && ue(a.floatingoffset), a.floating !== void 0 && pa(a.floating), a.expire !== void 0 && (Cr(a.expire), V(a.expire)), a.challenge && (u(typeof a.challenge == "string" ? a.challenge : JSON.stringify(a.challenge)), ya(l(Ar))), a.challengeurl !== void 0 && s(a.challengeurl), a.debug !== void 0 && h(!!a.debug), a.hidefooter !== void 0 && te(!!a.hidefooter), a.hidelogo !== void 0 && X(!!a.hidelogo), a.language !== void 0 && ct(ia(o(), [a.language])), a.maxnumber !== void 0 && ye(+a.maxnumber), a.mockerror !== void 0 && Ct(!!a.mockerror), a.name !== void 0 && oe(a.name), a.overlaycontent !== void 0 && Et(a.overlaycontent), a.overlay !== void 0 && ma(a.overlay), a.refetchonexpire !== void 0 && Lt(!!a.refetchonexpire), a.sentinel !== void 0 && typeof a.sentinel == "object" && Ke(a.sentinel), a.spamfilter !== void 0 && Le(typeof a.spamfilter == "object" ? a.spamfilter : !!a.spamfilter), a.strings && ct(typeof a.strings == "string" ? a.strings : JSON.stringify(a.strings)), a.test !== void 0 && ve(typeof a.test == "number" ? a.test : !!a.test), a.verifyurl !== void 0 && re(a.verifyurl), a.workers !== void 0 && ft(+a.workers), a.workerurl !== void 0 && xt(a.workerurl);
  }
  function _a() {
    return {
      auto: n(),
      blockspam: c(),
      challengeurl: s(),
      debug: h(),
      delay: p(),
      expire: V(),
      floating: _(),
      floatinganchor: O(),
      floatingoffset: ue(),
      hidefooter: te(),
      hidelogo: X(),
      name: oe(),
      maxnumber: ye(),
      mockerror: Ct(),
      obfuscated: De(),
      overlay: Ae(),
      refetchonexpire: Lt(),
      spamfilter: Le(),
      strings: l(P),
      test: ve(),
      verifyurl: re(),
      workers: ft(),
      workerurl: xt()
    };
  }
  function wa() {
    return l(ut);
  }
  function bn(a) {
    return He.find((f) => f.constructor.pluginName === a);
  }
  function Ca() {
    return l(T);
  }
  function Rt() {
    l(q).style.display = "none", Ae() && l(de) && (l(de).style.display = "none");
  }
  function jt(a = 20) {
    var f;
    if (l(q))
      if (l(ut) || y(ut, (O() ? document.querySelector(O()) : (f = l($)) == null ? void 0 : f.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || l($), !0), l(ut)) {
        const g = parseInt(ue(), 10) || 12, b = l(ut).getBoundingClientRect(), v = l(q).getBoundingClientRect(), C = document.documentElement.clientHeight, A = document.documentElement.clientWidth, L = _() === "auto" ? b.bottom + v.height + g + a > C : _() === "top", M = Math.max(a, Math.min(A - a - v.width, b.left + b.width / 2 - v.width / 2));
        if (L ? l(q).style.top = `${b.top - (v.height + g)}px` : l(q).style.top = `${b.bottom + g}px`, l(q).style.left = `${M}px`, l(q).setAttribute("data-floating", L ? "top" : "bottom"), l(It)) {
          const Q = l(It).getBoundingClientRect();
          l(It).style.left = b.left - M + b.width / 2 - Q.width / 2 + "px";
        }
      } else
        I("unable to find floating anchor element");
  }
  function Qe(a = w.UNVERIFIED, f = null) {
    xe && (clearTimeout(xe), xe = null), y(Tt, !1), y(Se, null), y(B, null), y(_r, !1), y(U, null), Te(a, f);
  }
  function Ea(a) {
    y(ut, a, !0);
  }
  function Te(a, f = null) {
    y(T, a, !0), y(Je, f, !0), qe("statechange", {
      payload: l(Se),
      state: l(T)
    });
  }
  function Gt() {
    l(q).style.display = "block", _() && jt(), Ae() && l(de) && (l(de).style.display = "flex");
  }
  async function $e() {
    return Qe(w.VERIFYING), await new Promise((a) => setTimeout(a, p() || 0)), en().then((a) => (ya(a), I("challenge", a), Aa(a))).then(({ data: a, solution: f }) => {
      var g;
      if (I("solution", f), !f || a && "challenge" in a && !("clearText" in f))
        if ((f == null ? void 0 : f.number) !== void 0 && "challenge" in a)
          if (re() && "codeChallenge" in a)
            ["INPUT", "BUTTON", "SELECT", "TEXTAREA"].includes(((g = document.activeElement) == null ? void 0 : g.tagName) || "") && k() === !1 && document.activeElement.blur(), y(B, { challenge: a, solution: f }, !0);
          else {
            if (re() && Ke() !== void 0)
              return ba(Zt(a, f));
            if (re())
              return gn(Zt(a, f));
            y(Se, Zt(a, f), !0), I("payload", l(Se));
          }
        else
          throw I("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      l(B) ? (Te(w.CODE), jr().then(() => {
        qe("code", { codeChallenge: l(B) });
      })) : (Te(w.VERIFIED), I("verified"), jr().then(() => {
        qe("verified", { payload: l(Se) }), n() === "onsubmit" ? wr(l(dt)) : Ae() && Rt();
      }));
    }).catch((a) => {
      I(a), Te(w.ERROR, a.message);
    });
  }
  var La = Ts(), xa = Pt(La);
  Fo(xa, t, "default", {});
  var ht = Y(xa, 2), Er = W(ht), Wt = W(Er);
  let Ta;
  var Ia = W(Wt);
  {
    var pn = (a) => {
      Sr(a);
    };
    K(Ia, (a) => {
      l(T) === w.VERIFYING && a(pn);
    });
  }
  var et = Y(Ia, 2);
  Za(et), et.__change = [
    hs,
    T,
    Le,
    $,
    Tt,
    De,
    Vt,
    $e
  ], Qt(et, (a) => y(kr, a), () => l(kr)), G(Wt);
  var Yt = Y(Wt, 2), mn = W(Yt);
  {
    var yn = (a) => {
      var f = Xt(), g = Pt(f);
      tt(g, () => l(P).verified), H(a, f);
    }, An = (a, f) => {
      {
        var g = (v) => {
          var C = Xt(), A = Pt(C);
          tt(A, () => l(P).verifying), H(v, C);
        }, b = (v, C) => {
          {
            var A = (M) => {
              var Q = Xt(), le = Pt(Q);
              tt(le, () => l(P).verificationRequired), H(M, Q);
            }, L = (M) => {
              var Q = Xt(), le = Pt(Q);
              tt(le, () => l(P).label), H(M, Q);
            };
            K(
              v,
              (M) => {
                l(T) === w.CODE ? M(A) : M(L, !1);
              },
              C
            );
          }
        };
        K(
          a,
          (v) => {
            l(T) === w.VERIFYING ? v(g) : v(b, !1);
          },
          f
        );
      }
    };
    K(mn, (a) => {
      l(T) === w.VERIFIED ? a(yn) : a(An, !1);
    });
  }
  G(Yt);
  var Va = Y(Yt, 2);
  {
    var kn = (a) => {
      var f = vs();
      Za(f), Ie(() => {
        R(f, "name", oe()), Go(f, l(Se));
      }), H(a, f);
    };
    K(Va, (a) => {
      l(T) === w.VERIFIED && a(kn);
    });
  }
  var Ra = Y(Va, 2);
  {
    var _n = (a) => {
      var f = bs(), g = W(f);
      R(g, "href", Ji), G(f), Ie(() => R(g, "aria-label", l(P).ariaLinkLabel)), H(a, f);
    };
    K(Ra, (a) => {
      (X() !== !0 || l(yr)) && a(_n);
    });
  }
  var wn = Y(Ra, 2);
  {
    var Cn = (a) => {
      var f = _s(), g = Y(W(f), 2), b = W(g), v = Y(b, 2);
      Po(v, !k()), v.__keydown = [
        us,
        ha
      ];
      var C = Y(v, 2), A = W(C), L = W(A);
      {
        var M = (ke) => {
          var Z = As();
          Z.__click = ha;
          var Jt = W(Z);
          {
            var St = (gt) => {
              Sr(gt, () => 20);
            }, jn = (gt, Sn) => {
              {
                var $n = (vt) => {
                  var xr = ps();
                  H(vt, xr);
                }, Pn = (vt, xr) => {
                  {
                    var zn = (bt) => {
                      var Tr = ms();
                      H(bt, Tr);
                    }, Nn = (bt) => {
                      var Tr = ys();
                      H(bt, Tr);
                    };
                    K(
                      vt,
                      (bt) => {
                        l(U) === ee.PLAYING ? bt(zn) : bt(Nn, !1);
                      },
                      xr
                    );
                  }
                };
                K(
                  gt,
                  (vt) => {
                    l(U) === ee.ERROR ? vt($n) : vt(Pn, !1);
                  },
                  Sn
                );
              }
            };
            K(Jt, (gt) => {
              l(U) === ee.LOADING ? gt(St) : gt(jn, !1);
            });
          }
          G(Z), Ie(() => {
            R(Z, "title", l(P).getAudioChallenge), Z.disabled = l(U) === ee.LOADING || l(U) === ee.ERROR || l(Xe), R(Z, "aria-label", l(U) === ee.LOADING ? l(P).loading : l(P).getAudioChallenge);
          }), H(ke, Z);
        };
        K(L, (ke) => {
          l(B).challenge.codeChallenge.audio && ke(M);
        });
      }
      var Q = Y(L, 2);
      Q.__click = [ds, $e], G(A);
      var le = Y(A, 2), Fe = W(le);
      {
        var Lr = (ke) => {
          Sr(ke, () => 16);
        };
        K(Fe, (ke) => {
          l(Xe) && ke(Lr);
        });
      }
      var Kt = Y(Fe);
      G(le), G(C);
      var Vn = Y(C, 2);
      {
        var Rn = (ke) => {
          var Z = ks(), Jt = W(Z);
          G(Z), Qt(Z, (St) => y(Oe, St), () => l(Oe)), Ie((St) => R(Jt, "src", St), [
            () => oa(l(B).challenge.codeChallenge.audio, { language: F() })
          ]), Me("loadstart", Z, sn), Me("canplay", Z, ln), Me("pause", Z, fn), Me("playing", Z, cn), Me("ended", Z, nn), Me("error", Jt, on), H(ke, Z);
        };
        K(Vn, (ke) => {
          l(B).challenge.codeChallenge.audio && l(_r) && ke(Rn);
        });
      }
      G(g), G(f), Ie(() => {
        R(f, "aria-label", l(P).verificationRequired), R(b, "src", l(B).challenge.codeChallenge.image), R(v, "minlength", l(B).challenge.codeChallenge.length || 1), R(v, "maxlength", l(B).challenge.codeChallenge.length), R(v, "placeholder", l(P).enterCode), R(v, "aria-label", l(U) === ee.LOADING ? l(P).loading : l(U) === ee.PLAYING ? "" : l(P).enterCodeAria), R(v, "aria-live", l(U) ? "assertive" : "polite"), R(v, "aria-busy", l(U) === ee.LOADING), v.disabled = l(Xe), R(Q, "aria-label", l(P).reload), R(Q, "title", l(P).reload), Q.disabled = l(Xe), le.disabled = l(Xe), R(le, "aria-label", l(P).verify), qo(Kt, ` ${l(P).verify ?? ""}`);
      }), Me("submit", g, un, !0), H(a, f);
    };
    K(wn, (a) => {
      var f;
      (f = l(B)) != null && f.challenge.codeChallenge && a(Cn);
    });
  }
  G(Er);
  var ja = Y(Er, 2);
  {
    var En = (a) => {
      var f = Es(), g = Y(W(f), 2);
      {
        var b = (C) => {
          var A = ws(), L = W(A);
          tt(L, () => l(P).expired), G(A), Ie(() => R(A, "title", l(Je))), H(C, A);
        }, v = (C) => {
          var A = Cs(), L = W(A);
          tt(L, () => l(P).error), G(A), Ie(() => R(A, "title", l(Je))), H(C, A);
        };
        K(g, (C) => {
          l(T) === w.EXPIRED ? C(b) : C(v, !1);
        });
      }
      G(f), H(a, f);
    };
    K(ja, (a) => {
      (l(Je) || l(T) === w.EXPIRED) && a(En);
    });
  }
  var Sa = Y(ja, 2);
  {
    var Ln = (a) => {
      var f = Ls(), g = W(f), b = W(g);
      tt(b, () => l(P).footer), G(g), G(f), H(a, f);
    };
    K(Sa, (a) => {
      l(P).footer && (te() !== !0 || l(yr)) && a(Ln);
    });
  }
  var xn = Y(Sa, 2);
  {
    var Tn = (a) => {
      var f = xs();
      Qt(f, (g) => y(It, g), () => l(It)), H(a, f);
    };
    K(xn, (a) => {
      _() && a(Tn);
    });
  }
  G(ht), Qt(ht, (a) => y(q, a), () => l(q)), Ie(
    (a) => {
      R(ht, "data-state", l(T)), R(ht, "data-floating", _()), R(ht, "data-overlay", Ae()), Ta = Bo(Wt, 1, "altcha-checkbox", null, Ta, a), R(et, "id", l(ta)), et.required = n() !== "onsubmit" && (!_() || n() !== "off"), R(Yt, "for", l(ta));
    },
    [
      () => ({
        "altcha-checkbox-verifying": l(T) === w.VERIFYING
      })
    ]
  ), Me("invalid", et, da), Yo(et, () => l(Tt), (a) => y(Tt, a)), H(e, La);
  var In = hi({
    clarify: Vt,
    configure: ka,
    getConfiguration: _a,
    getFloatingAnchor: wa,
    getPlugin: bn,
    getState: Ca,
    hide: Rt,
    repositionFloating: jt,
    reset: Qe,
    setFloatingAnchor: Ea,
    setState: Te,
    show: Gt,
    verify: $e,
    get auto() {
      return n();
    },
    set auto(a = void 0) {
      n(a), E();
    },
    get blockspam() {
      return c();
    },
    set blockspam(a = void 0) {
      c(a), E();
    },
    get challengeurl() {
      return s();
    },
    set challengeurl(a = void 0) {
      s(a), E();
    },
    get challengejson() {
      return u();
    },
    set challengejson(a = void 0) {
      u(a), E();
    },
    get credentials() {
      return d();
    },
    set credentials(a = void 0) {
      d(a), E();
    },
    get customfetch() {
      return m();
    },
    set customfetch(a = void 0) {
      m(a), E();
    },
    get debug() {
      return h();
    },
    set debug(a = !1) {
      h(a), E();
    },
    get delay() {
      return p();
    },
    set delay(a = 0) {
      p(a), E();
    },
    get disableautofocus() {
      return k();
    },
    set disableautofocus(a = !1) {
      k(a), E();
    },
    get expire() {
      return V();
    },
    set expire(a = void 0) {
      V(a), E();
    },
    get floating() {
      return _();
    },
    set floating(a = void 0) {
      _(a), E();
    },
    get floatinganchor() {
      return O();
    },
    set floatinganchor(a = void 0) {
      O(a), E();
    },
    get floatingoffset() {
      return ue();
    },
    set floatingoffset(a = void 0) {
      ue(a), E();
    },
    get floatingpersist() {
      return J();
    },
    set floatingpersist(a = !1) {
      J(a), E();
    },
    get hidefooter() {
      return te();
    },
    set hidefooter(a = !1) {
      te(a), E();
    },
    get hidelogo() {
      return X();
    },
    set hidelogo(a = !1) {
      X(a), E();
    },
    get id() {
      return st();
    },
    set id(a = void 0) {
      st(a), E();
    },
    get language() {
      return F();
    },
    set language(a = void 0) {
      F(a), E();
    },
    get name() {
      return oe();
    },
    set name(a = "altcha") {
      oe(a), E();
    },
    get maxnumber() {
      return ye();
    },
    set maxnumber(a = 1e6) {
      ye(a), E();
    },
    get mockerror() {
      return Ct();
    },
    set mockerror(a = !1) {
      Ct(a), E();
    },
    get obfuscated() {
      return De();
    },
    set obfuscated(a = void 0) {
      De(a), E();
    },
    get overlay() {
      return Ae();
    },
    set overlay(a = void 0) {
      Ae(a), E();
    },
    get overlaycontent() {
      return Et();
    },
    set overlaycontent(a = void 0) {
      Et(a), E();
    },
    get plugins() {
      return Ut();
    },
    set plugins(a = void 0) {
      Ut(a), E();
    },
    get refetchonexpire() {
      return Lt();
    },
    set refetchonexpire(a = !0) {
      Lt(a), E();
    },
    get sentinel() {
      return Ke();
    },
    set sentinel(a = void 0) {
      Ke(a), E();
    },
    get spamfilter() {
      return Le();
    },
    set spamfilter(a = !1) {
      Le(a), E();
    },
    get strings() {
      return ct();
    },
    set strings(a = void 0) {
      ct(a), E();
    },
    get test() {
      return ve();
    },
    set test(a = !1) {
      ve(a), E();
    },
    get verifyurl() {
      return re();
    },
    set verifyurl(a = void 0) {
      re(a), E();
    },
    get workers() {
      return ft();
    },
    set workers(a = Math.min(16, navigator.hardwareConcurrency || 8)) {
      ft(a), E();
    },
    get workerurl() {
      return xt();
    },
    set workerurl(a = void 0) {
      xt(a), E();
    }
  });
  return i(), In;
}
Do(["change", "keydown", "click"]);
customElements.define("altcha-widget", rl(
  Is,
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
const Vs = '@keyframes overlay-slidein{to{opacity:1;top:50%}}@keyframes altcha-spinner{to{transform:rotate(360deg)}}.altcha{background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);position:relative}.altcha:focus-within{border-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating]{background:var(--altcha-color-base, white);display:none;filter:drop-shadow(3px 3px 6px rgba(0,0,0,.2));left:-100%;position:fixed;top:-100%;width:var(--altcha-max-width, 260px);z-index:999999}.altcha[data-floating=top] .altcha-anchor-arrow{border-bottom-color:transparent;border-top-color:var(--altcha-color-border, #a0a0a0);bottom:-12px;top:auto}.altcha[data-floating=bottom]:focus-within::after{border-bottom-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating=top]:focus-within::after{border-top-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating]:not([data-state=unverified]){display:block}.altcha-anchor-arrow{border:6px solid transparent;border-bottom-color:var(--altcha-color-border, #a0a0a0);content:"";height:0;left:12px;position:absolute;top:-12px;width:0}.altcha-main{align-items:center;display:flex;gap:.4rem;padding:.7rem;position:relative}.altcha-code-challenge{background:var(--altcha-color-base, white);border:1px solid var(--altcha-color-border-focus, currentColor);border-radius:var(--altcha-border-radius, 3px);filter:drop-shadow(3px 3px 6px rgba(0,0,0,.2));padding:.5rem;position:absolute;top:2.5rem;z-index:9999999}.altcha-code-challenge>form{display:flex;flex-direction:column;gap:.5rem}.altcha-code-challenge-input{border:1px solid currentColor;border-radius:3px;box-sizing:border-box;outline:0;font-size:16px;padding:.35rem;width:220px}.altcha-code-challenge-input:focus{outline:2px solid color-mix(in srgb,var(--altcha-color-active, #1D1DC9) 20%,transparent)}.altcha-code-challenge-input:disabled{opacity:.7}.altcha-code-challenge-image{background-color:#fff;border:1px solid currentColor;border-radius:3px;box-sizing:border-box;object-fit:contain;height:50px;width:220px}.altcha-code-challenge-audio,.altcha-code-challenge-reload{background:color-mix(in srgb,var(--altcha-color-text, currentColor) 10%,transparent);border:0;border-radius:3px;color:var(--altcha-color-text, currentColor);cursor:pointer;display:flex;align-items:center;justify-content:center;padding:.35rem}.altcha-code-challenge-audio:disabled,.altcha-code-challenge-reload:disabled,.altcha-code-challenge-verify:disabled{opacity:.7;pointer-events:none}.altcha-code-challenge-audio>*,.altcha-code-challenge-reload>*{height:20px;width:20px}.altcha-code-challenge-buttons{display:flex;justify-content:space-between}.altcha-code-challenge-buttons-left{display:flex;gap:.25rem}.altcha-code-challenge-verify{align-items:center;background:var(--altcha-color-active, #1D1DC9);border:0;border-radius:3px;color:#fff;cursor:pointer;display:flex;gap:.5rem;font-size:100%;padding:.35rem 1rem}.altcha-code-challenge-arrow{border:6px solid transparent;border-bottom-color:var(--altcha-color-border, currentColor);content:"";height:0;left:.15rem;position:absolute;top:-12px;width:0}.altcha[data-floating=top] .altcha-code-challenge{top:-150px}.altcha[data-floating=top] .altcha-code-challenge-arrow{border-bottom-color:transparent;border-top-color:var(--altcha-color-border, currentColor);bottom:-12px;top:auto}.altcha-label{cursor:pointer;flex-grow:1}.altcha-logo{color:currentColor!important;opacity:.7}.altcha-footer:hover,.altcha-logo:hover{opacity:1}.altcha-error{color:var(--altcha-color-error-text, #f23939);display:flex;font-size:.85rem;gap:.3rem;padding:0 .7rem .7rem}.altcha-footer{align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:.75rem;opacity:.7;justify-content:end;padding:.2rem .7rem}.altcha-footer a{color:currentColor}.altcha-checkbox{display:flex;align-items:center;justify-content:center;height:24px;position:relative;width:24px}.altcha-checkbox .altcha-spinner{bottom:0;left:0;position:absolute;right:0;top:0}.altcha-checkbox input{width:18px;height:18px;margin:0}.altcha-checkbox-verifying input{appearance:none;opacity:0;pointer-events:none}.altcha-spinner{animation:altcha-spinner .75s infinite linear;transform-origin:center}.altcha-overlay{--altcha-color-base:#fff;--altcha-color-text:#000;animation:overlay-slidein .5s forwards;display:flex;flex-direction:column;gap:.5rem;left:50%;width:260px;opacity:0;position:fixed;top:45%;transform:translate(-50%,-50%)}.altcha-overlay-backdrop{background:rgba(0,0,0,.5);bottom:0;display:none;left:0;position:fixed;right:0;top:0;z-index:99999999}.altcha-overlay-close-button{align-self:flex-end;background:0 0;border:0;padding:.25rem;cursor:pointer;color:currentColor;font-size:130%;line-height:1;opacity:.7}@media (max-height:450px){.altcha-overlay{top:10%!important;transform:translate(-50%,0)}}';
function Rs(e, t = "__altcha-css") {
  if (!document.getElementById(t)) {
    const r = document.createElement("style");
    r.id = t, r.textContent = e, document.head.appendChild(r);
  }
}
globalThis.altchaCreateWorker = (e) => e ? new Worker(new URL(e)) : new rs();
Rs(Vs);
export {
  Is as Altcha
};
