var Nl = Object.defineProperty;
var Dn = (e) => {
  throw TypeError(e);
};
var Dl = (e, t, r) => t in e ? Nl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var pe = (e, t, r) => Dl(e, typeof t != "symbol" ? t + "" : t, r), Ln = (e, t, r) => t.has(e) || Dn("Cannot " + r);
var se = (e, t, r) => (Ln(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Ar = (e, t, r) => t.has(e) ? Dn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), Ir = (e, t, r, i) => (Ln(e, t, "write to private field"), i ? i.call(e, r) : t.set(e, r), r);
const Ll = "5";
var Jn;
typeof window < "u" && ((Jn = window.__svelte ?? (window.__svelte = {})).v ?? (Jn.v = /* @__PURE__ */ new Set())).add(Ll);
const Pl = 1, Ol = 4, Fl = 8, Vl = 16, Ml = 1, ql = 2, Fr = "[", Kn = "[!", zn = "]", _t = {}, ue = Symbol(), Ul = "http://www.w3.org/1999/xhtml", Pn = !1;
function Xn(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var Qn = Array.isArray, jl = Array.prototype.indexOf, Bl = Array.from, Qt = Object.keys, Lt = Object.defineProperty, Qe = Object.getOwnPropertyDescriptor, Hl = Object.getOwnPropertyDescriptors, Yl = Object.prototype, Gl = Array.prototype, ei = Object.getPrototypeOf, On = Object.isExtensible;
const mt = () => {
};
function ti(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Zl(e, t, r = !1) {
  return e === void 0 ? r ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
const ye = 2, ri = 4, or = 8, Vr = 16, Pe = 32, rt = 64, er = 128, he = 256, tr = 512, fe = 1024, Se = 2048, nt = 4096, bt = 8192, ar = 16384, Wl = 32768, Mr = 65536, Jl = 1 << 19, ni = 1 << 20, xr = 1 << 21, Nt = Symbol("$state"), ii = Symbol("legacy props"), Kl = Symbol("");
function zl(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Xl() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ql(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function eo() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function to() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function ro(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function no() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function io() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function lo() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function sr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let F = !1;
function gt(e) {
  F = e;
}
let O;
function He(e) {
  if (e === null)
    throw sr(), _t;
  return O = e;
}
function wt() {
  return He(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ze(O)
  );
}
function G(e) {
  if (F) {
    if (/* @__PURE__ */ Ze(O) !== null)
      throw sr(), _t;
    O = e;
  }
}
function oo() {
  for (var e = 0, t = O; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === zn) {
        if (e === 0) return t;
        e -= 1;
      } else (r === Fr || r === Kn) && (e += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ze(t)
    );
    t.remove(), t = i;
  }
}
let ao = !1;
function je(e) {
  if (typeof e != "object" || e === null || Nt in e)
    return e;
  const t = ei(e);
  if (t !== Yl && t !== Gl)
    return e;
  var r = /* @__PURE__ */ new Map(), i = Qn(e), o = /* @__PURE__ */ V(0), l = N, u = (s) => {
    var c = N;
    Te(l);
    var d = s();
    return Te(c), d;
  };
  return i && r.set("length", /* @__PURE__ */ V(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, c, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && no();
        var m = r.get(c);
        return m === void 0 ? (m = u(() => /* @__PURE__ */ V(d.value)), r.set(c, m)) : w(
          m,
          u(() => je(d.value))
        ), !0;
      },
      deleteProperty(s, c) {
        var d = r.get(c);
        if (d === void 0)
          c in s && (r.set(
            c,
            u(() => /* @__PURE__ */ V(ue))
          ), Rr(o));
        else {
          if (i && typeof c == "string") {
            var m = (
              /** @type {Source<number>} */
              r.get("length")
            ), h = Number(c);
            Number.isInteger(h) && h < m.v && w(m, h);
          }
          w(d, ue), Rr(o);
        }
        return !0;
      },
      get(s, c, d) {
        var y;
        if (c === Nt)
          return e;
        var m = r.get(c), h = c in s;
        if (m === void 0 && (!h || (y = Qe(s, c)) != null && y.writable) && (m = u(() => /* @__PURE__ */ V(je(h ? s[c] : ue))), r.set(c, m)), m !== void 0) {
          var g = a(m);
          return g === ue ? void 0 : g;
        }
        return Reflect.get(s, c, d);
      },
      getOwnPropertyDescriptor(s, c) {
        var d = Reflect.getOwnPropertyDescriptor(s, c);
        if (d && "value" in d) {
          var m = r.get(c);
          m && (d.value = a(m));
        } else if (d === void 0) {
          var h = r.get(c), g = h == null ? void 0 : h.v;
          if (h !== void 0 && g !== ue)
            return {
              enumerable: !0,
              configurable: !0,
              value: g,
              writable: !0
            };
        }
        return d;
      },
      has(s, c) {
        var g;
        if (c === Nt)
          return !0;
        var d = r.get(c), m = d !== void 0 && d.v !== ue || Reflect.has(s, c);
        if (d !== void 0 || D !== null && (!m || (g = Qe(s, c)) != null && g.writable)) {
          d === void 0 && (d = u(() => /* @__PURE__ */ V(m ? je(s[c]) : ue)), r.set(c, d));
          var h = a(d);
          if (h === ue)
            return !1;
        }
        return m;
      },
      set(s, c, d, m) {
        var K;
        var h = r.get(c), g = c in s;
        if (i && c === "length")
          for (var y = d; y < /** @type {Source<number>} */
          h.v; y += 1) {
            var S = r.get(y + "");
            S !== void 0 ? w(S, ue) : y in s && (S = u(() => /* @__PURE__ */ V(ue)), r.set(y + "", S));
          }
        h === void 0 ? (!g || (K = Qe(s, c)) != null && K.writable) && (h = u(() => /* @__PURE__ */ V(void 0)), w(
          h,
          u(() => je(d))
        ), r.set(c, h)) : (g = h.v !== ue, w(
          h,
          u(() => je(d))
        ));
        var E = Reflect.getOwnPropertyDescriptor(s, c);
        if (E != null && E.set && E.set.call(m, d), !g) {
          if (i && typeof c == "string") {
            var M = (
              /** @type {Source<number>} */
              r.get("length")
            ), ce = Number(c);
            Number.isInteger(ce) && ce >= M.v && w(M, ce + 1);
          }
          Rr(o);
        }
        return !0;
      },
      ownKeys(s) {
        a(o);
        var c = Reflect.ownKeys(s).filter((h) => {
          var g = r.get(h);
          return g === void 0 || g.v !== ue;
        });
        for (var [d, m] of r)
          m.v !== ue && !(d in s) && c.push(d);
        return c;
      },
      setPrototypeOf() {
        io();
      }
    }
  );
}
function Rr(e, t = 1) {
  w(e, e.v + t);
}
var Fn, li, oi, ai;
function Sr() {
  if (Fn === void 0) {
    Fn = window, li = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    oi = Qe(t, "firstChild").get, ai = Qe(t, "nextSibling").get, On(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), On(r) && (r.__t = void 0);
  }
}
function ur(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function me(e) {
  return oi.call(e);
}
// @__NO_SIDE_EFFECTS__
function Ze(e) {
  return ai.call(e);
}
function Z(e, t) {
  if (!F)
    return /* @__PURE__ */ me(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ me(O)
  );
  return r === null && (r = O.appendChild(ur())), He(r), r;
}
function xt(e, t) {
  if (!F) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ me(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Ze(r) : r;
  }
  return O;
}
function W(e, t = 1, r = !1) {
  let i = F ? O : e;
  for (var o; t--; )
    o = i, i = /** @type {TemplateNode} */
    /* @__PURE__ */ Ze(i);
  if (!F)
    return i;
  var l = i == null ? void 0 : i.nodeType;
  if (r && l !== 3) {
    var u = ur();
    return i === null ? o == null || o.after(u) : i.before(u), He(u), u;
  }
  return He(i), /** @type {TemplateNode} */
  i;
}
function so(e) {
  e.textContent = "";
}
function si(e) {
  return e === this.v;
}
function ui(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function qr(e) {
  return !ui(e, this.v);
}
// @__NO_SIDE_EFFECTS__
function fr(e) {
  var t = ye | Se, r = N !== null && (N.f & ye) !== 0 ? (
    /** @type {Derived} */
    N
  ) : null;
  return D === null || r !== null && (r.f & he) !== 0 ? t |= he : D.f |= ni, {
    ctx: le,
    deps: null,
    effects: null,
    equals: si,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: r ?? D
  };
}
// @__NO_SIDE_EFFECTS__
function St(e) {
  const t = /* @__PURE__ */ fr(e);
  return Ei(t), t;
}
// @__NO_SIDE_EFFECTS__
function uo(e) {
  const t = /* @__PURE__ */ fr(e);
  return t.equals = qr, t;
}
function fi(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Ye(
        /** @type {Effect} */
        t[r]
      );
  }
}
function fo(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & ye) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function ci(e) {
  var t, r = D;
  Ge(fo(e));
  try {
    fi(e), t = Ri(e);
  } finally {
    Ge(r);
  }
  return t;
}
function di(e) {
  var t = ci(e), r = (Be || (e.f & he) !== 0) && e.deps !== null ? nt : fe;
  Ee(e, r), e.equals(t) || (e.v = t, e.wv = Ai());
}
function co(e) {
  D === null && N === null && Ql(), N !== null && (N.f & he) !== 0 && D === null && Xl(), Vt && zl();
}
function ho(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function it(e, t, r, i = !0) {
  var o = D, l = {
    ctx: le,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Se,
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
      Yr(l), l.f |= Wl;
    } catch (c) {
      throw Ye(l), c;
    }
  else t !== null && dr(l);
  var u = r && l.deps === null && l.first === null && l.nodes_start === null && l.teardown === null && (l.f & (ni | er)) === 0;
  if (!u && i && (o !== null && ho(l, o), N !== null && (N.f & ye) !== 0)) {
    var s = (
      /** @type {Derived} */
      N
    );
    (s.effects ?? (s.effects = [])).push(l);
  }
  return l;
}
function Ur(e) {
  const t = it(or, null, !1);
  return Ee(t, fe), t.teardown = e, t;
}
function Tr(e) {
  co();
  var t = D !== null && (D.f & Pe) !== 0 && le !== null && !le.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      le
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: D,
      reaction: N
    });
  } else {
    var i = jr(e);
    return i;
  }
}
function vo(e) {
  const t = it(rt, e, !0);
  return () => {
    Ye(t);
  };
}
function go(e) {
  const t = it(rt, e, !0);
  return (r = {}) => new Promise((i) => {
    r.outro ? Dr(t, () => {
      Ye(t), i(void 0);
    }) : (Ye(t), i(void 0));
  });
}
function jr(e) {
  return it(ri, e, !1);
}
function Br(e) {
  return it(or, e, !0);
}
function $e(e, t = [], r = fr) {
  const i = t.map(r);
  return hi(() => e(...i.map(a)));
}
function hi(e, t = 0) {
  return it(or | Vr | t, e, !0);
}
function Nr(e, t = !0) {
  return it(or | Pe, e, !0, t);
}
function vi(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Vt, i = N;
    Mn(!0), Te(null);
    try {
      t.call(null);
    } finally {
      Mn(r), Te(i);
    }
  }
}
function gi(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var i = r.next;
    (r.f & rt) !== 0 ? r.parent = null : Ye(r, t), r = i;
  }
}
function _o(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Pe) === 0 && Ye(t), t = r;
  }
}
function Ye(e, t = !0) {
  var r = !1;
  (t || (e.f & Jl) !== 0) && e.nodes_start !== null && (_i(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), r = !0), gi(e, t && !r), lr(e, 0), Ee(e, ar);
  var i = e.transitions;
  if (i !== null)
    for (const l of i)
      l.stop();
  vi(e);
  var o = e.parent;
  o !== null && o.first !== null && mi(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function _i(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ze(e)
    );
    e.remove(), e = r;
  }
}
function mi(e) {
  var t = e.parent, r = e.prev, i = e.next;
  r !== null && (r.next = i), i !== null && (i.prev = r), t !== null && (t.first === e && (t.first = i), t.last === e && (t.last = r));
}
function Dr(e, t) {
  var r = [];
  bi(e, r, !0), mo(r, () => {
    Ye(e), t && t();
  });
}
function mo(e, t) {
  var r = e.length;
  if (r > 0) {
    var i = () => --r || t();
    for (var o of e)
      o.out(i);
  } else
    t();
}
function bi(e, t, r) {
  if ((e.f & bt) === 0) {
    if (e.f ^= bt, e.transitions !== null)
      for (const u of e.transitions)
        (u.is_global || r) && t.push(u);
    for (var i = e.first; i !== null; ) {
      var o = i.next, l = (i.f & Mr) !== 0 || (i.f & Pe) !== 0;
      bi(i, t, l ? r : !1), i = o;
    }
  }
}
function Vn(e) {
  wi(e, !0);
}
function wi(e, t) {
  if ((e.f & bt) !== 0) {
    e.f ^= bt, (e.f & fe) === 0 && (e.f ^= fe), Mt(e) && (Ee(e, Se), dr(e));
    for (var r = e.first; r !== null; ) {
      var i = r.next, o = (r.f & Mr) !== 0 || (r.f & Pe) !== 0;
      wi(r, o ? t : !1), r = i;
    }
    if (e.transitions !== null)
      for (const l of e.transitions)
        (l.is_global || t) && l.in();
  }
}
const bo = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Pt = [], Ot = [];
function pi() {
  var e = Pt;
  Pt = [], ti(e);
}
function yi() {
  var e = Ot;
  Ot = [], ti(e);
}
function Hr(e) {
  Pt.length === 0 && queueMicrotask(pi), Pt.push(e);
}
function wo(e) {
  Ot.length === 0 && bo(yi), Ot.push(e);
}
function po() {
  Pt.length > 0 && pi(), Ot.length > 0 && yi();
}
let Kt = !1, rr = !1, nr = null, et = !1, Vt = !1;
function Mn(e) {
  Vt = e;
}
let Dt = [];
let N = null, ke = !1;
function Te(e) {
  N = e;
}
let D = null;
function Ge(e) {
  D = e;
}
let ie = null;
function Ei(e) {
  N !== null && N.f & xr && (ie === null ? ie = [e] : ie.push(e));
}
let ne = null, de = 0, ge = null;
function yo(e) {
  ge = e;
}
let Ci = 1, ir = 0, Be = !1;
function Ai() {
  return ++Ci;
}
function Mt(e) {
  var h;
  var t = e.f;
  if ((t & Se) !== 0)
    return !0;
  if ((t & nt) !== 0) {
    var r = e.deps, i = (t & he) !== 0;
    if (r !== null) {
      var o, l, u = (t & tr) !== 0, s = i && D !== null && !Be, c = r.length;
      if (u || s) {
        var d = (
          /** @type {Derived} */
          e
        ), m = d.parent;
        for (o = 0; o < c; o++)
          l = r[o], (u || !((h = l == null ? void 0 : l.reactions) != null && h.includes(d))) && (l.reactions ?? (l.reactions = [])).push(d);
        u && (d.f ^= tr), s && m !== null && (m.f & he) === 0 && (d.f ^= he);
      }
      for (o = 0; o < c; o++)
        if (l = r[o], Mt(
          /** @type {Derived} */
          l
        ) && di(
          /** @type {Derived} */
          l
        ), l.wv > e.wv)
          return !0;
    }
    (!i || D !== null && !Be) && Ee(e, fe);
  }
  return !1;
}
function Eo(e, t) {
  for (var r = t; r !== null; ) {
    if ((r.f & er) !== 0)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= er;
      }
    r = r.parent;
  }
  throw Kt = !1, e;
}
function qn(e) {
  return (e.f & ar) === 0 && (e.parent === null || (e.parent.f & er) === 0);
}
function cr(e, t, r, i) {
  if (Kt) {
    if (r === null && (Kt = !1), qn(t))
      throw e;
    return;
  }
  if (r !== null && (Kt = !0), Eo(e, t), qn(t))
    throw e;
}
function Ii(e, t, r = !0) {
  var i = e.reactions;
  if (i !== null)
    for (var o = 0; o < i.length; o++) {
      var l = i[o];
      ie != null && ie.includes(e) || ((l.f & ye) !== 0 ? Ii(
        /** @type {Derived} */
        l,
        t,
        !1
      ) : t === l && (r ? Ee(l, Se) : (l.f & fe) !== 0 && Ee(l, nt), dr(
        /** @type {Effect} */
        l
      )));
    }
}
function Ri(e) {
  var y;
  var t = ne, r = de, i = ge, o = N, l = Be, u = ie, s = le, c = ke, d = e.f;
  ne = /** @type {null | Value[]} */
  null, de = 0, ge = null, Be = (d & he) !== 0 && (ke || !et || N === null), N = (d & (Pe | rt)) === 0 ? e : null, ie = null, Un(e.ctx), ke = !1, ir++, e.f |= xr;
  try {
    var m = (
      /** @type {Function} */
      (0, e.fn)()
    ), h = e.deps;
    if (ne !== null) {
      var g;
      if (lr(e, de), h !== null && de > 0)
        for (h.length = de + ne.length, g = 0; g < ne.length; g++)
          h[de + g] = ne[g];
      else
        e.deps = h = ne;
      if (!Be)
        for (g = de; g < h.length; g++)
          ((y = h[g]).reactions ?? (y.reactions = [])).push(e);
    } else h !== null && de < h.length && (lr(e, de), h.length = de);
    if (Ni() && ge !== null && !ke && h !== null && (e.f & (ye | nt | Se)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      ge.length; g++)
        Ii(
          ge[g],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (ir++, ge !== null && (i === null ? i = ge : i.push(.../** @type {Source[]} */
    ge))), m;
  } finally {
    ne = t, de = r, ge = i, N = o, Be = l, ie = u, Un(s), ke = c, e.f ^= xr;
  }
}
function Co(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var i = jl.call(r, e);
    if (i !== -1) {
      var o = r.length - 1;
      o === 0 ? r = t.reactions = null : (r[i] = r[o], r.pop());
    }
  }
  r === null && (t.f & ye) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ne === null || !ne.includes(t)) && (Ee(t, nt), (t.f & (he | tr)) === 0 && (t.f ^= tr), fi(
    /** @type {Derived} **/
    t
  ), lr(
    /** @type {Derived} **/
    t,
    0
  ));
}
function lr(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var i = t; i < r.length; i++)
      Co(e, r[i]);
}
function Yr(e) {
  var t = e.f;
  if ((t & ar) === 0) {
    Ee(e, fe);
    var r = D, i = le, o = et;
    D = e, et = !0;
    try {
      (t & Vr) !== 0 ? _o(e) : gi(e), vi(e);
      var l = Ri(e);
      e.teardown = typeof l == "function" ? l : null, e.wv = Ci;
      var u = e.deps, s;
      Pn && ao && e.f & Se;
    } catch (c) {
      cr(c, e, r, i || e.ctx);
    } finally {
      et = o, D = r;
    }
  }
}
function Ao() {
  try {
    eo();
  } catch (e) {
    if (nr !== null)
      cr(e, nr, null);
    else
      throw e;
  }
}
function $i() {
  var e = et;
  try {
    var t = 0;
    for (et = !0; Dt.length > 0; ) {
      t++ > 1e3 && Ao();
      var r = Dt, i = r.length;
      Dt = [];
      for (var o = 0; o < i; o++) {
        var l = Ro(r[o]);
        Io(l);
      }
      Ft.clear();
    }
  } finally {
    rr = !1, et = e, nr = null;
  }
}
function Io(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var i = e[r];
      if ((i.f & (ar | bt)) === 0)
        try {
          Mt(i) && (Yr(i), i.deps === null && i.first === null && i.nodes_start === null && (i.teardown === null ? mi(i) : i.fn = null));
        } catch (o) {
          cr(o, i, null, i.ctx);
        }
    }
}
function dr(e) {
  rr || (rr = !0, queueMicrotask($i));
  for (var t = nr = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (rt | Pe)) !== 0) {
      if ((r & fe) === 0) return;
      t.f ^= fe;
    }
  }
  Dt.push(t);
}
function Ro(e) {
  for (var t = [], r = e; r !== null; ) {
    var i = r.f, o = (i & (Pe | rt)) !== 0, l = o && (i & fe) !== 0;
    if (!l && (i & bt) === 0) {
      if ((i & ri) !== 0)
        t.push(r);
      else if (o)
        r.f ^= fe;
      else
        try {
          Mt(r) && Yr(r);
        } catch (c) {
          cr(c, r, null, r.ctx);
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
function R(e) {
  for (var t; ; ) {
    if (po(), Dt.length === 0)
      return (
        /** @type {T} */
        t
      );
    rr = !0, $i();
  }
}
async function $r() {
  await Promise.resolve(), R();
}
function a(e) {
  var t = e.f, r = (t & ye) !== 0;
  if (N !== null && !ke) {
    if (!(ie != null && ie.includes(e))) {
      var i = N.deps;
      e.rv < ir && (e.rv = ir, ne === null && i !== null && i[de] === e ? de++ : ne === null ? ne = [e] : (!Be || !ne.includes(e)) && ne.push(e));
    }
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), l = o.parent;
    l !== null && (l.f & he) === 0 && (o.f ^= he);
  }
  return r && (o = /** @type {Derived} */
  e, Mt(o) && di(o)), Vt && Ft.has(e) ? Ft.get(e) : e.v;
}
function tt(e) {
  var t = ke;
  try {
    return ke = !0, e();
  } finally {
    ke = t;
  }
}
const $o = -7169;
function Ee(e, t) {
  e.f = e.f & $o | t;
}
const Ft = /* @__PURE__ */ new Map();
function ki(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: si,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function V(e, t) {
  const r = ki(e);
  return Ei(r), r;
}
// @__NO_SIDE_EFFECTS__
function Gr(e, t = !1) {
  const r = ki(e);
  return t || (r.equals = qr), r;
}
function w(e, t, r = !1) {
  N !== null && !ke && Ni() && (N.f & (ye | Vr)) !== 0 && !(ie != null && ie.includes(e)) && lo();
  let i = r ? je(t) : t;
  return ko(e, i);
}
function ko(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    Vt ? Ft.set(e, t) : Ft.set(e, r), e.v = t, (e.f & ye) !== 0 && ((e.f & Se) !== 0 && ci(
      /** @type {Derived} */
      e
    ), Ee(e, (e.f & he) === 0 ? fe : nt)), e.wv = Ai(), xi(e, Se), D !== null && (D.f & fe) !== 0 && (D.f & (Pe | rt)) === 0 && (ge === null ? yo([e]) : ge.push(e));
  }
  return t;
}
function xi(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, o = 0; o < i; o++) {
      var l = r[o], u = l.f;
      (u & Se) === 0 && (Ee(l, t), (u & (fe | he)) !== 0 && ((u & ye) !== 0 ? xi(
        /** @type {Derived} */
        l,
        nt
      ) : dr(
        /** @type {Effect} */
        l
      )));
    }
}
let le = null;
function Un(e) {
  le = e;
}
function Si(e, t = !1, r) {
  var i = le = {
    p: le,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
  Ur(() => {
    i.d = !0;
  });
}
function Ti(e) {
  const t = le;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const u = t.e;
    if (u !== null) {
      var r = D, i = N;
      t.e = null;
      try {
        for (var o = 0; o < u.length; o++) {
          var l = u[o];
          Ge(l.effect), Te(l.reaction), jr(l.fn);
        }
      } finally {
        Ge(r), Te(i);
      }
    }
    le = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Ni() {
  return !0;
}
const xo = ["touchstart", "touchmove"];
function So(e) {
  return xo.includes(e);
}
function To(e, t) {
  if (t) {
    const r = document.body;
    e.autofocus = !0, Hr(() => {
      document.activeElement === r && e.focus();
    });
  }
}
let jn = !1;
function Di() {
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
function Li(e) {
  var t = N, r = D;
  Te(null), Ge(null);
  try {
    return e();
  } finally {
    Te(t), Ge(r);
  }
}
function No(e, t, r, i = r) {
  e.addEventListener(t, () => Li(r));
  const o = e.__on_r;
  o ? e.__on_r = () => {
    o(), i(!0);
  } : e.__on_r = () => i(!0), Di();
}
const Pi = /* @__PURE__ */ new Set(), Lr = /* @__PURE__ */ new Set();
function Do(e, t, r, i = {}) {
  function o(l) {
    if (i.capture || Tt.call(t, l), !l.cancelBubble)
      return Li(() => r == null ? void 0 : r.call(this, l));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Hr(() => {
    t.addEventListener(e, o, i);
  }) : t.addEventListener(e, o, i), o;
}
function Ue(e, t, r, i, o) {
  var l = { capture: i, passive: o }, u = Do(e, t, r, l);
  (t === document.body || t === window || t === document) && Ur(() => {
    t.removeEventListener(e, u, l);
  });
}
function Lo(e) {
  for (var t = 0; t < e.length; t++)
    Pi.add(e[t]);
  for (var r of Lr)
    r(e);
}
function Tt(e) {
  var K;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), i = e.type, o = ((K = e.composedPath) == null ? void 0 : K.call(e)) || [], l = (
    /** @type {null | Element} */
    o[0] || e.target
  ), u = 0, s = e.__root;
  if (s) {
    var c = o.indexOf(s);
    if (c !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var d = o.indexOf(t);
    if (d === -1)
      return;
    c <= d && (u = c);
  }
  if (l = /** @type {Element} */
  o[u] || e.target, l !== t) {
    Lt(e, "currentTarget", {
      configurable: !0,
      get() {
        return l || r;
      }
    });
    var m = N, h = D;
    Te(null), Ge(null);
    try {
      for (var g, y = []; l !== null; ) {
        var S = l.assignedSlot || l.parentNode || /** @type {any} */
        l.host || null;
        try {
          var E = l["__" + i];
          if (E != null && (!/** @type {any} */
          l.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === l))
            if (Qn(E)) {
              var [M, ...ce] = E;
              M.apply(l, [e, ...ce]);
            } else
              E.call(l, e);
        } catch (ee) {
          g ? y.push(ee) : g = ee;
        }
        if (e.cancelBubble || S === t || S === null)
          break;
        l = S;
      }
      if (g) {
        for (let ee of y)
          queueMicrotask(() => {
            throw ee;
          });
        throw g;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Te(m), Ge(h);
    }
  }
}
function Zr(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function xe(e, t) {
  var r = (
    /** @type {Effect} */
    D
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function Ce(e, t) {
  var r = (t & Ml) !== 0, i = (t & ql) !== 0, o, l = !e.startsWith("<!>");
  return () => {
    if (F)
      return xe(O, null), O;
    o === void 0 && (o = Zr(l ? e : "<!>" + e), r || (o = /** @type {Node} */
    /* @__PURE__ */ me(o)));
    var u = (
      /** @type {TemplateNode} */
      i || li ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (r) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ me(u)
      ), c = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      xe(s, c);
    } else
      xe(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function hr(e, t, r = "svg") {
  var i = !e.startsWith("<!>"), o = `<${r}>${i ? e : "<!>" + e}</${r}>`, l;
  return () => {
    if (F)
      return xe(O, null), O;
    if (!l) {
      var u = (
        /** @type {DocumentFragment} */
        Zr(o)
      ), s = (
        /** @type {Element} */
        /* @__PURE__ */ me(u)
      );
      l = /** @type {Element} */
      /* @__PURE__ */ me(s);
    }
    var c = (
      /** @type {TemplateNode} */
      l.cloneNode(!0)
    );
    return xe(c, c), c;
  };
}
function Zt() {
  if (F)
    return xe(O, null), O;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = ur();
  return e.append(t, r), xe(t, r), e;
}
function q(e, t) {
  if (F) {
    D.nodes_end = O, wt();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Po(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function Oi(e, t) {
  return Fi(e, t);
}
function Oo(e, t) {
  Sr(), t.intro = t.intro ?? !1;
  const r = t.target, i = F, o = O;
  try {
    for (var l = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ me(r)
    ); l && (l.nodeType !== 8 || /** @type {Comment} */
    l.data !== Fr); )
      l = /** @type {TemplateNode} */
      /* @__PURE__ */ Ze(l);
    if (!l)
      throw _t;
    gt(!0), He(
      /** @type {Comment} */
      l
    ), wt();
    const u = Fi(e, { ...t, anchor: l });
    if (O === null || O.nodeType !== 8 || /** @type {Comment} */
    O.data !== zn)
      throw sr(), _t;
    return gt(!1), /**  @type {Exports} */
    u;
  } catch (u) {
    if (u === _t)
      return t.recover === !1 && to(), Sr(), so(r), gt(!1), Oi(e, t);
    throw u;
  } finally {
    gt(i), He(o);
  }
}
const ht = /* @__PURE__ */ new Map();
function Fi(e, { target: t, anchor: r, props: i = {}, events: o, context: l, intro: u = !0 }) {
  Sr();
  var s = /* @__PURE__ */ new Set(), c = (h) => {
    for (var g = 0; g < h.length; g++) {
      var y = h[g];
      if (!s.has(y)) {
        s.add(y);
        var S = So(y);
        t.addEventListener(y, Tt, { passive: S });
        var E = ht.get(y);
        E === void 0 ? (document.addEventListener(y, Tt, { passive: S }), ht.set(y, 1)) : ht.set(y, E + 1);
      }
    }
  };
  c(Bl(Pi)), Lr.add(c);
  var d = void 0, m = go(() => {
    var h = r ?? t.appendChild(ur());
    return Nr(() => {
      if (l) {
        Si({});
        var g = (
          /** @type {ComponentContext} */
          le
        );
        g.c = l;
      }
      o && (i.$$events = o), F && xe(
        /** @type {TemplateNode} */
        h,
        null
      ), d = e(h, i) || {}, F && (D.nodes_end = O), l && Ti();
    }), () => {
      var S;
      for (var g of s) {
        t.removeEventListener(g, Tt);
        var y = (
          /** @type {number} */
          ht.get(g)
        );
        --y === 0 ? (document.removeEventListener(g, Tt), ht.delete(g)) : ht.set(g, y);
      }
      Lr.delete(c), h !== r && ((S = h.parentNode) == null || S.removeChild(h));
    };
  });
  return Pr.set(d, m), d;
}
let Pr = /* @__PURE__ */ new WeakMap();
function Fo(e, t) {
  const r = Pr.get(e);
  return r ? (Pr.delete(e), r(t)) : Promise.resolve();
}
function J(e, t, [r, i] = [0, 0]) {
  F && r === 0 && wt();
  var o = e, l = null, u = null, s = ue, c = r > 0 ? Mr : 0, d = !1;
  const m = (g, y = !0) => {
    d = !0, h(y, g);
  }, h = (g, y) => {
    if (s === (s = g)) return;
    let S = !1;
    if (F && i !== -1) {
      if (r === 0) {
        const M = (
          /** @type {Comment} */
          o.data
        );
        M === Fr ? i = 0 : M === Kn ? i = 1 / 0 : (i = parseInt(M.substring(1)), i !== i && (i = s ? 1 / 0 : -1));
      }
      const E = i > r;
      !!s === E && (o = oo(), He(o), gt(!1), S = !0, i = -1);
    }
    s ? (l ? Vn(l) : y && (l = Nr(() => y(o))), u && Dr(u, () => {
      u = null;
    })) : (u ? Vn(u) : y && (u = Nr(() => y(o, [r + 1, i]))), l && Dr(l, () => {
      l = null;
    })), S && gt(!0);
  };
  hi(() => {
    d = !1, t(m), d || h(null, null);
  }, c), F && (o = O);
}
function Xe(e, t, r = !1, i = !1, o = !1) {
  var l = e, u = "";
  $e(() => {
    var s = (
      /** @type {Effect} */
      D
    );
    if (u === (u = t() ?? "")) {
      F && wt();
      return;
    }
    if (s.nodes_start !== null && (_i(
      s.nodes_start,
      /** @type {TemplateNode} */
      s.nodes_end
    ), s.nodes_start = s.nodes_end = null), u !== "") {
      if (F) {
        O.data;
        for (var c = wt(), d = c; c !== null && (c.nodeType !== 8 || /** @type {Comment} */
        c.data !== ""); )
          d = c, c = /** @type {TemplateNode} */
          /* @__PURE__ */ Ze(c);
        if (c === null)
          throw sr(), _t;
        xe(O, d), l = He(c);
        return;
      }
      var m = u + "";
      r ? m = `<svg>${m}</svg>` : i && (m = `<math>${m}</math>`);
      var h = Zr(m);
      if ((r || i) && (h = /** @type {Element} */
      /* @__PURE__ */ me(h)), xe(
        /** @type {TemplateNode} */
        /* @__PURE__ */ me(h),
        /** @type {TemplateNode} */
        h.lastChild
      ), r || i)
        for (; /* @__PURE__ */ me(h); )
          l.before(
            /** @type {Node} */
            /* @__PURE__ */ me(h)
          );
      else
        l.before(h);
    }
  });
}
function Vo(e, t, r, i, o) {
  var s;
  F && wt();
  var l = (s = t.$$slots) == null ? void 0 : s[r], u = !1;
  l === !0 && (l = t.children, u = !0), l === void 0 || l(e, u ? () => i : i);
}
const Bn = [...` 	
\r\f \v\uFEFF`];
function Mo(e, t, r) {
  var i = "" + e;
  if (r) {
    for (var o in r)
      if (r[o])
        i = i ? i + " " + o : o;
      else if (i.length)
        for (var l = o.length, u = 0; (u = i.indexOf(o, u)) >= 0; ) {
          var s = u + l;
          (u === 0 || Bn.includes(i[u - 1])) && (s === i.length || Bn.includes(i[s])) ? i = (u === 0 ? "" : i.substring(0, u)) + i.substring(s + 1) : u = s;
        }
  }
  return i === "" ? null : i;
}
function qo(e, t, r, i, o, l) {
  var u = e.__className;
  if (F || u !== r || u === void 0) {
    var s = Mo(r, i, l);
    (!F || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : e.className = s), e.__className = r;
  } else if (l && o !== l)
    for (var c in l) {
      var d = !!l[c];
      (o == null || d !== !!o[c]) && e.classList.toggle(c, d);
    }
  return l;
}
const Uo = Symbol("is custom element"), jo = Symbol("is html");
function Hn(e) {
  if (F) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var i = e.value;
          T(e, "value", null), e.value = i;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          T(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = r, wo(r), Di();
  }
}
function Bo(e, t) {
  var r = Vi(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function T(e, t, r, i) {
  var o = Vi(e);
  F && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = r) && (t === "loading" && (e[Kl] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Ho(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Vi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Uo]: e.nodeName.includes("-"),
      [jo]: e.namespaceURI === Ul
    })
  );
}
var Yn = /* @__PURE__ */ new Map();
function Ho(e) {
  var t = Yn.get(e.nodeName);
  if (t) return t;
  Yn.set(e.nodeName, t = []);
  for (var r, i = e, o = Element.prototype; o !== i; ) {
    r = Hl(i);
    for (var l in r)
      r[l].set && t.push(l);
    i = ei(i);
  }
  return t;
}
function Yo(e, t, r = t) {
  No(e, "change", (i) => {
    var o = i ? e.defaultChecked : e.checked;
    r(o);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (F && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  tt(t) == null) && r(e.checked), Br(() => {
    var i = t();
    e.checked = !!i;
  });
}
function Gn(e, t) {
  return e === t || (e == null ? void 0 : e[Nt]) === t;
}
function Wt(e = {}, t, r, i) {
  return jr(() => {
    var o, l;
    return Br(() => {
      o = l, l = [], tt(() => {
        e !== r(...l) && (t(e, ...l), o && Gn(r(...o), e) && t(null, ...o));
      });
    }), () => {
      Hr(() => {
        l && Gn(r(...l), e) && t(null, ...l);
      });
    };
  }), e;
}
function Mi(e) {
  le === null && Xn(), Tr(() => {
    const t = tt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Go(e) {
  le === null && Xn(), Mi(() => () => tt(e));
}
function qi(e, t, r) {
  if (e == null)
    return t(void 0), mt;
  const i = tt(
    () => e.subscribe(
      t,
      // @ts-expect-error
      r
    )
  );
  return i.unsubscribe ? () => i.unsubscribe() : i;
}
const vt = [];
function Zo(e, t = mt) {
  let r = null;
  const i = /* @__PURE__ */ new Set();
  function o(s) {
    if (ui(e, s) && (e = s, r)) {
      const c = !vt.length;
      for (const d of i)
        d[1](), vt.push(d, e);
      if (c) {
        for (let d = 0; d < vt.length; d += 2)
          vt[d][0](vt[d + 1]);
        vt.length = 0;
      }
    }
  }
  function l(s) {
    o(s(
      /** @type {T} */
      e
    ));
  }
  function u(s, c = mt) {
    const d = [s, c];
    return i.add(d), i.size === 1 && (r = t(o, l) || mt), s(
      /** @type {T} */
      e
    ), () => {
      i.delete(d), i.size === 0 && r && (r(), r = null);
    };
  }
  return { set: o, update: l, subscribe: u };
}
function zt(e) {
  let t;
  return qi(e, (r) => t = r)(), t;
}
let Jt = !1, Or = Symbol();
function Wo(e, t, r) {
  const i = r[t] ?? (r[t] = {
    store: null,
    source: /* @__PURE__ */ Gr(void 0),
    unsubscribe: mt
  });
  if (i.store !== e && !(Or in r))
    if (i.unsubscribe(), i.store = e ?? null, e == null)
      i.source.v = void 0, i.unsubscribe = mt;
    else {
      var o = !0;
      i.unsubscribe = qi(e, (l) => {
        o ? i.source.v = l : w(i.source, l);
      }), o = !1;
    }
  return e && Or in r ? zt(e) : a(i.source);
}
function Jo() {
  const e = {};
  function t() {
    Ur(() => {
      for (var r in e)
        e[r].unsubscribe();
      Lt(e, Or, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function Ko(e) {
  var t = Jt;
  try {
    return Jt = !1, [e(), Jt];
  } finally {
    Jt = t;
  }
}
function Zn(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function $(e, t, r, i) {
  var lt;
  var o = (r & Pl) !== 0, l = !0, u = (r & Fl) !== 0, s = (r & Vl) !== 0, c = !1, d;
  u ? [d, c] = Ko(() => (
    /** @type {V} */
    e[t]
  )) : d = /** @type {V} */
  e[t];
  var m = Nt in e || ii in e, h = u && (((lt = Qe(e, t)) == null ? void 0 : lt.set) ?? (m && t in e && ((U) => e[t] = U))) || void 0, g = (
    /** @type {V} */
    i
  ), y = !0, S = !1, E = () => (S = !0, y && (y = !1, s ? g = tt(
    /** @type {() => V} */
    i
  ) : g = /** @type {V} */
  i), g);
  d === void 0 && i !== void 0 && (h && l && ro(), d = E(), h && h(d));
  var M;
  if (M = () => {
    var U = (
      /** @type {V} */
      e[t]
    );
    return U === void 0 ? E() : (y = !0, S = !1, U);
  }, (r & Ol) === 0)
    return M;
  if (h) {
    var ce = e.$$legacy;
    return function(U, oe) {
      return arguments.length > 0 ? ((!oe || ce || c) && h(oe ? M() : U), U) : M();
    };
  }
  var K = !1, ee = /* @__PURE__ */ Gr(d), z = /* @__PURE__ */ fr(() => {
    var U = M(), oe = a(ee);
    return K ? (K = !1, oe) : ee.v = U;
  });
  return u && a(z), o || (z.equals = qr), function(U, oe) {
    if (arguments.length > 0) {
      const be = oe ? a(z) : u ? je(U) : U;
      if (!z.equals(be)) {
        if (K = !0, w(ee, be), S && g !== void 0 && (g = be), Zn(z))
          return U;
        tt(() => a(z));
      }
      return U;
    }
    return Zn(z) ? z.v : a(z);
  };
}
function zo(e) {
  return new Xo(e);
}
var Le, _e;
class Xo {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    Ar(this, Le);
    /** @type {Record<string, any>} */
    Ar(this, _e);
    var l;
    var r = /* @__PURE__ */ new Map(), i = (u, s) => {
      var c = /* @__PURE__ */ Gr(s);
      return r.set(u, c), c;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(u, s) {
          return a(r.get(s) ?? i(s, Reflect.get(u, s)));
        },
        has(u, s) {
          return s === ii ? !0 : (a(r.get(s) ?? i(s, Reflect.get(u, s))), Reflect.has(u, s));
        },
        set(u, s, c) {
          return w(r.get(s) ?? i(s, c), c), Reflect.set(u, s, c);
        }
      }
    );
    Ir(this, _e, (t.hydrate ? Oo : Oi)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((l = t == null ? void 0 : t.props) != null && l.$$host) || t.sync === !1) && R(), Ir(this, Le, o.$$events);
    for (const u of Object.keys(se(this, _e)))
      u === "$set" || u === "$destroy" || u === "$on" || Lt(this, u, {
        get() {
          return se(this, _e)[u];
        },
        /** @param {any} value */
        set(s) {
          se(this, _e)[u] = s;
        },
        enumerable: !0
      });
    se(this, _e).$set = /** @param {Record<string, any>} next */
    (u) => {
      Object.assign(o, u);
    }, se(this, _e).$destroy = () => {
      Fo(se(this, _e));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    se(this, _e).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    se(this, Le)[t] = se(this, Le)[t] || [];
    const i = (...o) => r.call(this, ...o);
    return se(this, Le)[t].push(i), () => {
      se(this, Le)[t] = se(this, Le)[t].filter(
        /** @param {any} fn */
        (o) => o !== i
      );
    };
  }
  $destroy() {
    se(this, _e).$destroy();
  }
}
Le = new WeakMap(), _e = new WeakMap();
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
        return (l) => {
          const u = document.createElement("slot");
          o !== "default" && (u.name = o), q(l, u);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, i = Qo(this);
      for (const o of this.$$s)
        o in i && (o === "default" && !this.$$d.children ? (this.$$d.children = t(o), r.default = !0) : r[o] = t(o));
      for (const o of this.attributes) {
        const l = this.$$g_p(o.name);
        l in this.$$d || (this.$$d[l] = Xt(l, o.value, this.$$p_d, "toProp"));
      }
      for (const o in this.$$p_d)
        !(o in this.$$d) && this[o] !== void 0 && (this.$$d[o] = this[o], delete this[o]);
      this.$$c = zo({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = vo(() => {
        Br(() => {
          var o;
          this.$$r = !0;
          for (const l of Qt(this.$$c)) {
            if (!((o = this.$$p_d[l]) != null && o.reflect)) continue;
            this.$$d[l] = this.$$c[l];
            const u = Xt(
              l,
              this.$$d[l],
              this.$$p_d,
              "toAttribute"
            );
            u == null ? this.removeAttribute(this.$$p_d[l].attribute || l) : this.setAttribute(this.$$p_d[l].attribute || l, u);
          }
          this.$$r = !1;
        });
      });
      for (const o in this.$$l)
        for (const l of this.$$l[o]) {
          const u = this.$$c.$on(o, l);
          this.$$l_u.set(l, u);
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Xt(t, i, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [t]: this.$$d[t] }));
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
    return Qt(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function Xt(e, t, r, i) {
  var l;
  const o = (l = r[e]) == null ? void 0 : l.type;
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
function Qo(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function ea(e, t, r, i, o, l) {
  let u = class extends Ui {
    constructor() {
      super(e, r, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Qt(t).map(
        (s) => (t[s].attribute || s).toLowerCase()
      );
    }
  };
  return Qt(t).forEach((s) => {
    Lt(u.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(c) {
        var h;
        c = Xt(s, c, t), this.$$d[s] = c;
        var d = this.$$c;
        if (d) {
          var m = (h = Qe(d, s)) == null ? void 0 : h.get;
          m ? d[s] = c : d.$set({ [s]: c });
        }
      }
    });
  }), i.forEach((s) => {
    Lt(u.prototype, s, {
      get() {
        var c;
        return (c = this.$$c) == null ? void 0 : c[s];
      }
    });
  }), e.element = /** @type {any} */
  u, u;
}
const ji = new TextEncoder();
function ta(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function ra(e, t = "SHA-256", r = 1e5) {
  const i = Date.now().toString(16);
  e || (e = Math.round(Math.random() * r));
  const o = await Bi(i, e, t);
  return {
    algorithm: t,
    challenge: o,
    salt: i,
    signature: ""
  };
}
async function Bi(e, t, r) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return ta(
    await crypto.subtle.digest(
      r.toUpperCase(),
      ji.encode(e + t)
    )
  );
}
function na(e, t, r = "SHA-256", i = 1e6, o = 0) {
  const l = new AbortController(), u = Date.now();
  return {
    promise: (async () => {
      for (let c = o; c <= i; c += 1) {
        if (l.signal.aborted)
          return null;
        if (await Bi(t, c, r) === e)
          return {
            number: c,
            took: Date.now() - u
          };
      }
      return null;
    })(),
    controller: l
  };
}
function Wn() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function ia(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let i = 0; i < t.length; i++)
    r[i] = t.charCodeAt(i);
  return r;
}
function la(e, t = 12) {
  const r = new Uint8Array(t);
  for (let i = 0; i < t; i++)
    r[i] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function oa(e, t = "", r = 1e6, i = 0) {
  const o = "AES-GCM", l = new AbortController(), u = Date.now(), s = async () => {
    for (let m = i; m <= r; m += 1) {
      if (l.signal.aborted || !c || !d)
        return null;
      try {
        const h = await crypto.subtle.decrypt(
          {
            name: o,
            iv: la(m)
          },
          c,
          d
        );
        if (h)
          return {
            clearText: new TextDecoder().decode(h),
            took: Date.now() - u
          };
      } catch {
      }
    }
    return null;
  };
  let c = null, d = null;
  try {
    d = ia(e);
    const m = await crypto.subtle.digest(
      "SHA-256",
      ji.encode(t)
    );
    c = await crypto.subtle.importKey(
      "raw",
      m,
      o,
      !1,
      ["decrypt"]
    );
  } catch {
    return {
      promise: Promise.reject(),
      controller: l
    };
  }
  return {
    promise: s(),
    controller: l
  };
}
var C = /* @__PURE__ */ ((e) => (e.CODE = "code", e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(C || {}), Q = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.LOADING = "loading", e.PLAYING = "playing", e.PAUSED = "paused", e.READY = "ready", e))(Q || {});
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (e) => zt(globalThis.altchaI18n.store)[e],
  set: (e, t) => {
    Object.assign(zt(globalThis.altchaI18n.store), {
      [e]: t
    }), globalThis.altchaI18n.store.set(zt(globalThis.altchaI18n.store));
  },
  store: Zo({})
};
const aa = {
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
globalThis.altchaI18n.set("en", aa);
const kr = (e, t) => {
  let r = /* @__PURE__ */ uo(() => Zl(t == null ? void 0 : t(), 24));
  var i = ca();
  $e(() => {
    T(i, "width", a(r)), T(i, "height", a(r));
  }), q(e, i);
};
function sa(e, t) {
  e.code === "Space" && (e.preventDefault(), e.stopImmediatePropagation(), t());
}
function ua(e, t) {
  e.preventDefault(), t();
}
function fa(e, t, r, i, o, l, u, s) {
  var c;
  [
    C.UNVERIFIED,
    C.ERROR,
    C.EXPIRED,
    C.CODE
  ].includes(a(t)) ? r() !== !1 && ((c = a(i)) == null ? void 0 : c.reportValidity()) === !1 ? w(o, !1) : l() ? u() : s() : w(o, !0);
}
var ca = /* @__PURE__ */ hr('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="altcha-spinner"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor"></path></svg>'), da = /* @__PURE__ */ Ce('<input type="hidden">'), ha = /* @__PURE__ */ Ce('<div><a target="_blank" class="altcha-logo" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor"></path></svg></a></div>'), va = /* @__PURE__ */ hr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg>'), ga = /* @__PURE__ */ hr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z"></path></svg>'), _a = /* @__PURE__ */ hr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"></path></svg>'), ma = /* @__PURE__ */ Ce('<button type="button" class="altcha-code-challenge-audio"><!></button>'), ba = /* @__PURE__ */ Ce("<audio hidden autoplay><source></audio>"), wa = /* @__PURE__ */ Ce('<div class="altcha-code-challenge" role="dialog"><div class="altcha-code-challenge-arrow"></div> <form data-code-challenge-form="1"><img class="altcha-code-challenge-image" alt=""> <input type="text" autocomplete="off" name="code" class="altcha-code-challenge-input" required> <div class="altcha-code-challenge-buttons"><div class="altcha-code-challenge-buttons-left"><!> <button type="button" class="altcha-code-challenge-reload"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z"></path></svg></button></div> <button type="submit" class="altcha-code-challenge-verify"><!> </button></div> <!></form></div>'), pa = /* @__PURE__ */ Ce("<div><!></div>"), ya = /* @__PURE__ */ Ce("<div><!></div>"), Ea = /* @__PURE__ */ Ce('<div class="altcha-error"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg> <!></div>'), Ca = /* @__PURE__ */ Ce('<div class="altcha-footer"><div><!></div></div>'), Aa = /* @__PURE__ */ Ce('<div class="altcha-anchor-arrow"></div>'), Ia = /* @__PURE__ */ Ce('<!> <div class="altcha"><div class="altcha-main"><div><!> <input type="checkbox"></div> <label class="altcha-label"><!></label> <!> <!> <!></div> <!> <!> <!></div>', 1);
function Ra(e, t) {
  var Tn, Nn;
  Si(t, !0);
  const [r, i] = Jo(), o = () => Wo(Yi, "$altchaI18nStore", r);
  let l = $(t, "auto", 7, void 0), u = $(t, "blockspam", 7, void 0), s = $(t, "challengeurl", 7, void 0), c = $(t, "challengejson", 7, void 0), d = $(t, "credentials", 7, void 0), m = $(t, "customfetch", 7, void 0), h = $(t, "debug", 7, !1), g = $(t, "delay", 7, 0), y = $(t, "disableautofocus", 7, !1), S = $(t, "expire", 7, void 0), E = $(t, "floating", 7, void 0), M = $(t, "floatinganchor", 7, void 0), ce = $(t, "floatingoffset", 7, void 0), K = $(t, "floatingpersist", 7, !1), ee = $(t, "hidefooter", 7, !1), z = $(t, "hidelogo", 7, !1), lt = $(t, "id", 7, void 0), U = $(t, "language", 7, void 0), oe = $(t, "name", 7, "altcha"), be = $(t, "maxnumber", 7, 1e6), pt = $(t, "mockerror", 7, !1), Oe = $(t, "obfuscated", 7, void 0), qt = $(t, "plugins", 7, void 0), yt = $(t, "refetchonexpire", 7, !0), We = $(t, "sentinel", 7, void 0), Ae = $(t, "spamfilter", 7, !1), ot = $(t, "strings", 7, void 0), ve = $(t, "test", 7, !1), te = $(t, "verifyurl", 7, void 0), at = $(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), Et = $(t, "workerurl", 7, void 0);
  const { altchaI18n: Hi } = globalThis, Yi = Hi.store, Wr = ["SHA-256", "SHA-384", "SHA-512"], Gi = "https://altcha.org/", Fe = (n, f) => {
    t.$$host.dispatchEvent(new CustomEvent(n, { detail: f }));
  }, Jr = (Nn = (Tn = document.documentElement.lang) == null ? void 0 : Tn.split("-")) == null ? void 0 : Nn[0], vr = /* @__PURE__ */ St(() => {
    var n;
    return s() && new URL(s(), location.origin).host.endsWith(".altcha.org") && !!((n = s()) != null && n.includes("apiKey=ckey_"));
  }), gr = /* @__PURE__ */ St(() => c() ? cn(c()) : void 0), Zi = /* @__PURE__ */ St(() => ot() ? cn(ot()) : {}), P = /* @__PURE__ */ St(() => ({
    ...Qr(o()),
    ...a(Zi)
  })), Kr = /* @__PURE__ */ St(() => `${lt() || oe()}_checkbox_${Math.round(Math.random() * 1e8)}`);
  let Ct = /* @__PURE__ */ V(!1), B = /* @__PURE__ */ V(null), k = /* @__PURE__ */ V(je(C.UNVERIFIED)), re = /* @__PURE__ */ V(void 0), At = /* @__PURE__ */ V(null), Ve = /* @__PURE__ */ V(null), _r = /* @__PURE__ */ V(null), st = /* @__PURE__ */ V(null), L = /* @__PURE__ */ V(null), Ut = /* @__PURE__ */ V(null), Je = /* @__PURE__ */ V(null), Ie = null, H = /* @__PURE__ */ V(null), Ke = /* @__PURE__ */ V(!1), Me = [], mr = /* @__PURE__ */ V(!1), Ne = /* @__PURE__ */ V(null);
  Tr(() => {
    ol(a(Je));
  }), Tr(() => {
    al(a(k));
  }), Go(() => {
    Wi(), w(Ut, null), a(L) && (a(L).removeEventListener("submit", on), a(L).removeEventListener("reset", an), a(L).removeEventListener("focusin", ln), w(L, null)), Ie && (clearTimeout(Ie), Ie = null), document.removeEventListener("click", rn), document.removeEventListener("scroll", nn), window.removeEventListener("resize", fn);
  }), Mi(() => {
    var n;
    x("mounted", "2.0.4"), x("workers", at()), Xi(), x("plugins", Me.length ? Me.map((f) => f.constructor.pluginName).join(", ") : "none"), ve() && x("using test mode"), S() && br(S()), l() !== void 0 && x("auto", l()), E() !== void 0 && vn(E()), w(L, (n = a(re)) == null ? void 0 : n.closest("form"), !0), a(L) && (a(L).addEventListener("submit", on, { capture: !0 }), a(L).addEventListener("reset", an), (l() === "onfocus" || K() === "focus") && a(L).addEventListener("focusin", ln)), l() === "onload" && (Oe() ? It() : De()), a(vr) && (ee() || z()) && x("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      Fe("load");
    });
  });
  function jt(n, f) {
    return btoa(JSON.stringify({
      algorithm: n.algorithm,
      challenge: n.challenge,
      number: f.number,
      salt: n.salt,
      signature: n.signature,
      test: ve() ? !0 : void 0,
      took: f.took
    }));
  }
  function Wi() {
    for (const n of Me)
      n.destroy();
  }
  function zr() {
    s() && yt() && a(k) === C.VERIFIED ? De() : ut(C.EXPIRED, a(P).expired);
  }
  async function Ji() {
    var n;
    if (pt())
      throw x("mocking error"), new Error("Mocked error.");
    if (a(gr))
      return x("using provided json data"), a(gr);
    if (ve())
      return x("generating test challenge", { test: ve() }), ra(typeof ve() != "boolean" ? +ve() : void 0);
    {
      if (!s() && a(L)) {
        const I = a(L).getAttribute("action");
        I != null && I.includes("/form/") && s(I + "/altcha");
      }
      if (!s())
        throw new Error("Attribute challengeurl not set.");
      x("fetching challenge from", s());
      const f = {
        credentials: typeof d() == "boolean" ? "include" : d(),
        headers: Ae() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      }, v = await Xr()(s(), f);
      if (!v || !(v instanceof Response))
        throw new Error("Custom fetch function did not return a response.");
      if (v.status !== 200)
        throw new Error(`Server responded with ${v.status}.`);
      const b = v.headers.get("X-Altcha-Config"), _ = await v.json(), A = new URLSearchParams((n = _.salt.split("?")) == null ? void 0 : n[1]), p = A.get("expires") || A.get("expire");
      if (p) {
        const I = new Date(+p * 1e3), j = isNaN(I.getTime()) ? 0 : I.getTime() - Date.now();
        j > 0 && br(j);
      }
      if (b)
        try {
          const I = JSON.parse(b);
          I && typeof I == "object" && (I.verifyurl && !I.verifyurl.startsWith("fn:") && (I.verifyurl = tn(I.verifyurl)), mn(I));
        } catch (I) {
          x("unable to configure from X-Altcha-Config", I);
        }
      return _;
    }
  }
  function Ki(n) {
    var v, b;
    const f = (v = a(L)) == null ? void 0 : v.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((b = f == null ? void 0 : f.value) == null ? void 0 : b.slice(f.value.indexOf("@"))) || void 0;
  }
  function Xr() {
    let n = fetch;
    if (m())
      if (x("using customfetch"), typeof m() == "string") {
        if (n = globalThis[m()] || null, !n)
          throw new Error(`Custom fetch function not found: ${m()}`);
      } else
        n = m();
    return n;
  }
  function Qr(n, f = [
    U() || "",
    document.documentElement.lang || "",
    ...navigator.languages
  ]) {
    const v = Object.keys(n).map((_) => _.toLowerCase()), b = f.reduce(
      (_, A) => (A = A.toLowerCase(), _ || (n[A] ? A : null) || v.find((p) => A.split("-")[0] === p.split("-")[0]) || null),
      null
    );
    return n[b || "en"];
  }
  function zi() {
    return Ae() === "ipAddress" ? {
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
    } : typeof Ae() == "object" ? Ae() : {
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
  function en(n) {
    var v;
    return [
      ...((v = a(L)) == null ? void 0 : v.querySelectorAll(n != null && n.length ? n.map((b) => `input[name="${b}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (b, _) => {
        const A = _.name, p = _.value;
        return A && p && (b[A] = /\n/.test(p) ? p.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : p), b;
      },
      {}
    );
  }
  function tn(n, f) {
    const v = new URL(s() || location.origin), b = new URL(n, v);
    if (b.search || (b.search = v.search), f)
      for (const _ in f)
        f[_] !== void 0 && f[_] !== null && b.searchParams.set(_, f[_]);
    return b.toString();
  }
  function Xi() {
    const n = qt() !== void 0 ? qt().split(",") : void 0;
    for (const f of globalThis.altchaPlugins)
      (!n || n.includes(f.pluginName)) && Me.push(new f({
        el: a(re),
        clarify: It,
        dispatch: Fe,
        getConfiguration: bn,
        getFloatingAnchor: wn,
        getState: pn,
        log: x,
        reset: ut,
        solve: _n,
        setState: Re,
        setFloatingAnchor: En,
        verify: De
      }));
  }
  function x(...n) {
    (h() || n.some((f) => f instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${oe()}]`, ...n);
  }
  function Qi() {
    w(H, Q.PAUSED, !0);
  }
  function el(n) {
    w(H, Q.ERROR, !0);
  }
  function tl() {
    w(H, Q.READY, !0);
  }
  function rl() {
    w(H, Q.LOADING, !0);
  }
  function nl() {
    w(H, Q.PLAYING, !0);
  }
  function il() {
    w(H, Q.PAUSED, !0);
  }
  function ll(n) {
    var f;
    if (n.preventDefault(), n.stopPropagation(), a(B)) {
      const v = new FormData(n.target), b = String(v.get("code"));
      if ((f = te()) != null && f.startsWith("fn:")) {
        const _ = te().replace(/^fn:/, "");
        if (x(`calling ${_} function instead of verifyurl`), !(_ in globalThis))
          throw new Error(`Global function "${_}" is undefined.`);
        return globalThis[_]({
          challenge: a(B).challenge,
          code: b,
          solution: a(B).solution
        });
      }
      w(Ke, !0), dn(jt(a(B).challenge, a(B).solution), b).then(({ reason: _, verified: A }) => {
        A ? (w(B, null), Re(C.VERIFIED), x("verified"), $r().then(() => {
          var p;
          (p = a(_r)) == null || p.focus(), Fe("verified", { payload: a(Ne) }), l() === "onsubmit" && hn(a(Ut));
        })) : (ut(), w(Je, _ || "Verification failed", !0));
      }).catch((_) => {
        w(B, null), Re(C.ERROR, _), x("sentinel verification failed:", _);
      }).finally(() => {
        w(Ke, !1);
      });
    }
  }
  function rn(n) {
    var v;
    const f = n.target;
    E() && f && !a(re).contains(f) && (a(k) === C.VERIFIED && K() === !1 || a(k) === C.VERIFIED && K() === "focus" && !((v = a(L)) != null && v.matches(":focus-within")) || l() === "off" && a(k) === C.UNVERIFIED) && yn();
  }
  function nn() {
    E() && a(k) !== C.UNVERIFIED && Rt();
  }
  function ol(n) {
    for (const f of Me)
      typeof f.onErrorChange == "function" && f.onErrorChange(a(Je));
  }
  function ln(n) {
    a(k) === C.UNVERIFIED ? De() : E() && K() === "focus" && a(k) === C.VERIFIED && wr();
  }
  function on(n) {
    const f = n.target;
    f != null && f.hasAttribute("data-code-challenge-form") || (w(Ut, n.submitter, !0), a(L) && l() === "onsubmit" ? a(k) === C.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), De().then(() => {
      hn(a(Ut));
    })) : a(k) !== C.VERIFIED && (n.preventDefault(), n.stopPropagation(), a(k) === C.VERIFYING && sn()) : a(L) && E() && l() === "off" && a(k) === C.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), wr()));
  }
  function an() {
    ut();
  }
  function sn() {
    a(k) === C.VERIFYING && a(P).waitAlert && alert(a(P).waitAlert);
  }
  function un() {
    a(Ve) ? a(Ve).paused ? (a(Ve).currentTime = 0, a(Ve).play()) : a(Ve).pause() : (w(mr, !0), requestAnimationFrame(() => {
      var n;
      (n = a(Ve)) == null || n.play();
    }));
  }
  function al(n) {
    for (const f of Me)
      typeof f.onStateChange == "function" && f.onStateChange(a(k));
    E() && a(k) !== C.UNVERIFIED && requestAnimationFrame(() => {
      Rt();
    }), w(Ct, a(k) === C.VERIFIED);
  }
  function fn() {
    E() && Rt();
  }
  function cn(n) {
    return JSON.parse(n);
  }
  async function sl(n) {
    if (!te())
      throw new Error("Attribute verifyurl not set.");
    x("requesting server verification from", te());
    const f = { payload: n };
    if (Ae() !== !1) {
      const {
        blockedCountries: _,
        classifier: A,
        disableRules: p,
        email: I,
        expectedLanguages: j,
        expectedCountries: X,
        fields: ae,
        ipAddress: qe,
        text: yr,
        timeZone: Yt
      } = zi();
      f.blockedCountries = _, f.classifier = A, f.disableRules = p, f.email = I === !1 ? void 0 : Ki(I), f.expectedCountries = X, f.expectedLanguages = j || (Jr ? [Jr] : void 0), f.fields = ae === !1 ? void 0 : en(ae), f.ipAddress = qe === !1 ? void 0 : qe || "auto", f.text = yr, f.timeZone = Yt === !1 ? void 0 : Yt || Wn();
    }
    const v = await Xr()(te(), {
      body: JSON.stringify(f),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (!v || !(v instanceof Response))
      throw new Error("Custom fetch function did not return a response.");
    if (v.status !== 200)
      throw new Error(`Server responded with ${v.status}.`);
    const b = await v.json();
    if (b != null && b.payload && w(Ne, b.payload, !0), Fe("serververification", b), u() && b.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  async function dn(n, f) {
    if (!te())
      throw new Error("Attribute verifyurl not set.");
    x("requesting sentinel verification from", te());
    const v = { code: f, payload: n };
    We() && (v.fields = We().fields ? en() : void 0, v.timeZone = We().timeZone ? Wn() : void 0);
    const b = await fetch(te(), {
      body: JSON.stringify(v),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (!b || !(b instanceof Response))
      throw new Error("Fetch function did not return a response.");
    if (b.status !== 200)
      throw new Error(`Server responded with ${b.status}.`);
    const _ = await b.json();
    return _ != null && _.payload && w(Ne, _.payload, !0), Fe("sentinelverification", _), _;
  }
  function hn(n) {
    var f;
    a(L) && "requestSubmit" in a(L) ? a(L).requestSubmit(n) : (f = a(L)) != null && f.reportValidity() && (n ? n.click() : a(L).submit());
  }
  function br(n) {
    x("expire", n), Ie && (clearTimeout(Ie), Ie = null), n < 1 ? zr() : Ie = setTimeout(zr, n);
  }
  function vn(n) {
    x("floating", n), E() !== n && (a(re).style.left = "", a(re).style.top = ""), E(n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : E()), E() ? (l() || l("onsubmit"), document.addEventListener("scroll", nn), document.addEventListener("click", rn), window.addEventListener("resize", fn)) : l() === "onsubmit" && l(void 0);
  }
  function gn(n) {
    if (!n.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (n.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!Wr.includes(n.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${Wr.join(", ")}`);
    if (!n.challenge || n.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!n.salt || n.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function _n(n) {
    let f = null;
    if ("Worker" in window) {
      try {
        f = await ul(n, n.maxNumber || n.maxnumber || be());
      } catch (v) {
        x(v);
      }
      if ((f == null ? void 0 : f.number) !== void 0 || "obfuscated" in n)
        return { data: n, solution: f };
    }
    if ("obfuscated" in n) {
      const v = await oa(n.obfuscated, n.key, n.maxNumber || n.maxnumber);
      return { data: n, solution: await v.promise };
    }
    return {
      data: n,
      solution: await na(n.challenge, n.salt, n.algorithm, n.maxNumber || n.maxnumber || be()).promise
    };
  }
  async function ul(n, f = typeof ve() == "number" ? ve() : n.maxNumber || n.maxnumber || be(), v = Math.ceil(at())) {
    const b = [];
    v = Math.min(16, f, Math.max(1, v));
    for (let p = 0; p < v; p++)
      b.push(altchaCreateWorker(Et()));
    const _ = Math.ceil(f / v), A = await Promise.all(b.map((p, I) => {
      const j = I * _;
      return new Promise((X) => {
        p.addEventListener("message", (ae) => {
          if (ae.data)
            for (const qe of b)
              qe !== p && qe.postMessage({ type: "abort" });
          X(ae.data);
        }), p.postMessage({
          payload: n,
          max: j + _,
          start: j,
          type: "work"
        });
      });
    }));
    for (const p of b)
      p.terminate();
    return A.find((p) => !!p) || null;
  }
  async function It() {
    if (!Oe()) {
      Re(C.ERROR);
      return;
    }
    const n = Me.find((f) => f.constructor.pluginName === "obfuscation");
    if (!n || !("clarify" in n)) {
      Re(C.ERROR), x("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in n && typeof n.clarify == "function")
      return n.clarify();
  }
  function mn(n) {
    n.obfuscated !== void 0 && Oe(n.obfuscated), n.auto !== void 0 && (l(n.auto), l() === "onload" && (Oe() ? It() : De())), n.blockspam !== void 0 && u(!!n.blockspam), n.customfetch !== void 0 && m(n.customfetch), n.floatinganchor !== void 0 && M(n.floatinganchor), n.delay !== void 0 && g(n.delay), n.floatingoffset !== void 0 && ce(n.floatingoffset), n.floating !== void 0 && vn(n.floating), n.expire !== void 0 && (br(n.expire), S(n.expire)), n.challenge && (c(typeof n.challenge == "string" ? n.challenge : JSON.stringify(n.challenge)), gn(a(gr))), n.challengeurl !== void 0 && s(n.challengeurl), n.debug !== void 0 && h(!!n.debug), n.hidefooter !== void 0 && ee(!!n.hidefooter), n.hidelogo !== void 0 && z(!!n.hidelogo), n.language !== void 0 && ot(Qr(o(), [n.language])), n.maxnumber !== void 0 && be(+n.maxnumber), n.mockerror !== void 0 && pt(!!n.mockerror), n.name !== void 0 && oe(n.name), n.refetchonexpire !== void 0 && yt(!!n.refetchonexpire), n.sentinel !== void 0 && typeof n.sentinel == "object" && We(n.sentinel), n.spamfilter !== void 0 && Ae(typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && ot(typeof n.strings == "string" ? n.strings : JSON.stringify(n.strings)), n.test !== void 0 && ve(typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && te(n.verifyurl), n.workers !== void 0 && at(+n.workers), n.workerurl !== void 0 && Et(n.workerurl);
  }
  function bn() {
    return {
      auto: l(),
      blockspam: u(),
      challengeurl: s(),
      debug: h(),
      delay: g(),
      expire: S(),
      floating: E(),
      floatinganchor: M(),
      floatingoffset: ce(),
      hidefooter: ee(),
      hidelogo: z(),
      name: oe(),
      maxnumber: be(),
      mockerror: pt(),
      obfuscated: Oe(),
      refetchonexpire: yt(),
      spamfilter: Ae(),
      strings: a(P),
      test: ve(),
      verifyurl: te(),
      workers: at(),
      workerurl: Et()
    };
  }
  function wn() {
    return a(st);
  }
  function fl(n) {
    return Me.find((f) => f.constructor.pluginName === n);
  }
  function pn() {
    return a(k);
  }
  function yn() {
    a(re).style.display = "none";
  }
  function Rt(n = 20) {
    var f;
    if (a(re))
      if (a(st) || w(st, (M() ? document.querySelector(M()) : (f = a(L)) == null ? void 0 : f.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || a(L), !0), a(st)) {
        const v = parseInt(ce(), 10) || 12, b = a(st).getBoundingClientRect(), _ = a(re).getBoundingClientRect(), A = document.documentElement.clientHeight, p = document.documentElement.clientWidth, I = E() === "auto" ? b.bottom + _.height + v + n > A : E() === "top", j = Math.max(n, Math.min(p - n - _.width, b.left + b.width / 2 - _.width / 2));
        if (I ? a(re).style.top = `${b.top - (_.height + v)}px` : a(re).style.top = `${b.bottom + v}px`, a(re).style.left = `${j}px`, a(re).setAttribute("data-floating", I ? "top" : "bottom"), a(At)) {
          const X = a(At).getBoundingClientRect();
          a(At).style.left = b.left - j + b.width / 2 - X.width / 2 + "px";
        }
      } else
        x("unable to find floating anchor element");
  }
  function ut(n = C.UNVERIFIED, f = null) {
    Ie && (clearTimeout(Ie), Ie = null), w(Ct, !1), w(Ne, null), w(B, null), w(mr, !1), w(H, null), Re(n, f);
  }
  function En(n) {
    w(st, n, !0);
  }
  function Re(n, f = null) {
    w(k, n, !0), w(Je, f, !0), Fe("statechange", {
      payload: a(Ne),
      state: a(k)
    });
  }
  function wr() {
    a(re).style.display = "block", E() && Rt();
  }
  async function De() {
    return ut(C.VERIFYING), await new Promise((n) => setTimeout(n, g() || 0)), Ji().then((n) => (gn(n), x("challenge", n), _n(n))).then(({ data: n, solution: f }) => {
      var v;
      if (x("solution", f), !f || n && "challenge" in n && !("clearText" in f))
        if ((f == null ? void 0 : f.number) !== void 0 && "challenge" in n)
          if (te() && "codeChallenge" in n)
            ["INPUT", "BUTTON", "SELECT", "TEXTAREA"].includes(((v = document.activeElement) == null ? void 0 : v.tagName) || "") && y() === !1 && document.activeElement.blur(), w(B, { challenge: n, solution: f }, !0);
          else {
            if (te() && We() !== void 0)
              return dn(jt(n, f));
            if (te())
              return sl(jt(n, f));
            w(Ne, jt(n, f), !0), x("payload", a(Ne));
          }
        else
          throw x("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      a(B) ? (Re(C.CODE), $r().then(() => {
        Fe("code", { codeChallenge: a(B) });
      })) : (Re(C.VERIFIED), x("verified"), $r().then(() => {
        Fe("verified", { payload: a(Ne) });
      }));
    }).catch((n) => {
      x(n), Re(C.ERROR, n.message);
    });
  }
  var Cn = Ia(), An = xt(Cn);
  Vo(An, t, "default", {});
  var $t = W(An, 2), pr = Z($t), Bt = Z(pr);
  let In;
  var Rn = Z(Bt);
  {
    var cl = (n) => {
      kr(n);
    };
    J(Rn, (n) => {
      a(k) === C.VERIFYING && n(cl);
    });
  }
  var ze = W(Rn, 2);
  Hn(ze), ze.__change = [
    fa,
    k,
    Ae,
    L,
    Ct,
    Oe,
    It,
    De
  ], Wt(ze, (n) => w(_r, n), () => a(_r)), G(Bt);
  var Ht = W(Bt, 2), dl = Z(Ht);
  {
    var hl = (n) => {
      var f = Zt(), v = xt(f);
      Xe(v, () => a(P).verified), q(n, f);
    }, vl = (n, f) => {
      {
        var v = (_) => {
          var A = Zt(), p = xt(A);
          Xe(p, () => a(P).verifying), q(_, A);
        }, b = (_, A) => {
          {
            var p = (j) => {
              var X = Zt(), ae = xt(X);
              Xe(ae, () => a(P).verificationRequired), q(j, X);
            }, I = (j) => {
              var X = Zt(), ae = xt(X);
              Xe(ae, () => a(P).label), q(j, X);
            };
            J(
              _,
              (j) => {
                a(k) === C.CODE ? j(p) : j(I, !1);
              },
              A
            );
          }
        };
        J(
          n,
          (_) => {
            a(k) === C.VERIFYING ? _(v) : _(b, !1);
          },
          f
        );
      }
    };
    J(dl, (n) => {
      a(k) === C.VERIFIED ? n(hl) : n(vl, !1);
    });
  }
  G(Ht);
  var $n = W(Ht, 2);
  {
    var gl = (n) => {
      var f = da();
      Hn(f), $e(() => {
        T(f, "name", oe()), Bo(f, a(Ne));
      }), q(n, f);
    };
    J($n, (n) => {
      a(k) === C.VERIFIED && n(gl);
    });
  }
  var kn = W($n, 2);
  {
    var _l = (n) => {
      var f = ha(), v = Z(f);
      T(v, "href", Gi), G(f), $e(() => T(v, "aria-label", a(P).ariaLinkLabel)), q(n, f);
    };
    J(kn, (n) => {
      (z() !== !0 || a(vr)) && n(_l);
    });
  }
  var ml = W(kn, 2);
  {
    var bl = (n) => {
      var f = wa(), v = W(Z(f), 2), b = Z(v), _ = W(b, 2);
      To(_, !y()), _.__keydown = [
        sa,
        un
      ];
      var A = W(_, 2), p = Z(A), I = Z(p);
      {
        var j = (we) => {
          var Y = ma();
          Y.__click = un;
          var Gt = Z(Y);
          {
            var kt = (ft) => {
              kr(ft, () => 20);
            }, Rl = (ft, $l) => {
              {
                var kl = (ct) => {
                  var Er = va();
                  q(ct, Er);
                }, xl = (ct, Er) => {
                  {
                    var Sl = (dt) => {
                      var Cr = ga();
                      q(dt, Cr);
                    }, Tl = (dt) => {
                      var Cr = _a();
                      q(dt, Cr);
                    };
                    J(
                      ct,
                      (dt) => {
                        a(H) === Q.PLAYING ? dt(Sl) : dt(Tl, !1);
                      },
                      Er
                    );
                  }
                };
                J(
                  ft,
                  (ct) => {
                    a(H) === Q.ERROR ? ct(kl) : ct(xl, !1);
                  },
                  $l
                );
              }
            };
            J(Gt, (ft) => {
              a(H) === Q.LOADING ? ft(kt) : ft(Rl, !1);
            });
          }
          G(Y), $e(() => {
            T(Y, "title", a(P).getAudioChallenge), Y.disabled = a(H) === Q.LOADING || a(H) === Q.ERROR || a(Ke), T(Y, "aria-label", a(H) === Q.LOADING ? a(P).loading : a(P).getAudioChallenge);
          }), q(we, Y);
        };
        J(I, (we) => {
          a(B).challenge.codeChallenge.audio && we(j);
        });
      }
      var X = W(I, 2);
      X.__click = [ua, De], G(p);
      var ae = W(p, 2), qe = Z(ae);
      {
        var yr = (we) => {
          kr(we, () => 16);
        };
        J(qe, (we) => {
          a(Ke) && we(yr);
        });
      }
      var Yt = W(qe);
      G(ae), G(A);
      var Al = W(A, 2);
      {
        var Il = (we) => {
          var Y = ba(), Gt = Z(Y);
          G(Y), Wt(Y, (kt) => w(Ve, kt), () => a(Ve)), $e((kt) => T(Gt, "src", kt), [
            () => tn(a(B).challenge.codeChallenge.audio, { language: U() })
          ]), Ue("loadstart", Y, rl), Ue("canplay", Y, tl), Ue("pause", Y, il), Ue("playing", Y, nl), Ue("ended", Y, Qi), Ue("error", Gt, el), q(we, Y);
        };
        J(Al, (we) => {
          a(B).challenge.codeChallenge.audio && a(mr) && we(Il);
        });
      }
      G(v), G(f), $e(() => {
        T(f, "aria-label", a(P).verificationRequired), T(b, "src", a(B).challenge.codeChallenge.image), T(_, "minlength", a(B).challenge.codeChallenge.length || 1), T(_, "maxlength", a(B).challenge.codeChallenge.length), T(_, "placeholder", a(P).enterCode), T(_, "aria-label", a(H) === Q.LOADING ? a(P).loading : a(H) === Q.PLAYING ? "" : a(P).enterCodeAria), T(_, "aria-live", a(H) ? "assertive" : "polite"), T(_, "aria-busy", a(H) === Q.LOADING), _.disabled = a(Ke), T(X, "aria-label", a(P).reload), T(X, "title", a(P).reload), X.disabled = a(Ke), ae.disabled = a(Ke), T(ae, "aria-label", a(P).verify), Po(Yt, ` ${a(P).verify ?? ""}`);
      }), Ue("submit", v, ll, !0), q(n, f);
    };
    J(ml, (n) => {
      var f;
      (f = a(B)) != null && f.challenge.codeChallenge && n(bl);
    });
  }
  G(pr);
  var xn = W(pr, 2);
  {
    var wl = (n) => {
      var f = Ea(), v = W(Z(f), 2);
      {
        var b = (A) => {
          var p = pa(), I = Z(p);
          Xe(I, () => a(P).expired), G(p), $e(() => T(p, "title", a(Je))), q(A, p);
        }, _ = (A) => {
          var p = ya(), I = Z(p);
          Xe(I, () => a(P).error), G(p), $e(() => T(p, "title", a(Je))), q(A, p);
        };
        J(v, (A) => {
          a(k) === C.EXPIRED ? A(b) : A(_, !1);
        });
      }
      G(f), q(n, f);
    };
    J(xn, (n) => {
      (a(Je) || a(k) === C.EXPIRED) && n(wl);
    });
  }
  var Sn = W(xn, 2);
  {
    var pl = (n) => {
      var f = Ca(), v = Z(f), b = Z(v);
      Xe(b, () => a(P).footer), G(v), G(f), q(n, f);
    };
    J(Sn, (n) => {
      a(P).footer && (ee() !== !0 || a(vr)) && n(pl);
    });
  }
  var yl = W(Sn, 2);
  {
    var El = (n) => {
      var f = Aa();
      Wt(f, (v) => w(At, v), () => a(At)), q(n, f);
    };
    J(yl, (n) => {
      E() && n(El);
    });
  }
  G($t), Wt($t, (n) => w(re, n), () => a(re)), $e(
    (n) => {
      T($t, "data-state", a(k)), T($t, "data-floating", E()), In = qo(Bt, 1, "altcha-checkbox", null, In, n), T(ze, "id", a(Kr)), ze.required = l() !== "onsubmit" && (!E() || l() !== "off"), T(Ht, "for", a(Kr));
    },
    [
      () => ({
        "altcha-checkbox-verifying": a(k) === C.VERIFYING
      })
    ]
  ), Ue("invalid", ze, sn), Yo(ze, () => a(Ct), (n) => w(Ct, n)), q(e, Cn);
  var Cl = Ti({
    clarify: It,
    configure: mn,
    getConfiguration: bn,
    getFloatingAnchor: wn,
    getPlugin: fl,
    getState: pn,
    hide: yn,
    repositionFloating: Rt,
    reset: ut,
    setFloatingAnchor: En,
    setState: Re,
    show: wr,
    verify: De,
    get auto() {
      return l();
    },
    set auto(n = void 0) {
      l(n), R();
    },
    get blockspam() {
      return u();
    },
    set blockspam(n = void 0) {
      u(n), R();
    },
    get challengeurl() {
      return s();
    },
    set challengeurl(n = void 0) {
      s(n), R();
    },
    get challengejson() {
      return c();
    },
    set challengejson(n = void 0) {
      c(n), R();
    },
    get credentials() {
      return d();
    },
    set credentials(n = void 0) {
      d(n), R();
    },
    get customfetch() {
      return m();
    },
    set customfetch(n = void 0) {
      m(n), R();
    },
    get debug() {
      return h();
    },
    set debug(n = !1) {
      h(n), R();
    },
    get delay() {
      return g();
    },
    set delay(n = 0) {
      g(n), R();
    },
    get disableautofocus() {
      return y();
    },
    set disableautofocus(n = !1) {
      y(n), R();
    },
    get expire() {
      return S();
    },
    set expire(n = void 0) {
      S(n), R();
    },
    get floating() {
      return E();
    },
    set floating(n = void 0) {
      E(n), R();
    },
    get floatinganchor() {
      return M();
    },
    set floatinganchor(n = void 0) {
      M(n), R();
    },
    get floatingoffset() {
      return ce();
    },
    set floatingoffset(n = void 0) {
      ce(n), R();
    },
    get floatingpersist() {
      return K();
    },
    set floatingpersist(n = !1) {
      K(n), R();
    },
    get hidefooter() {
      return ee();
    },
    set hidefooter(n = !1) {
      ee(n), R();
    },
    get hidelogo() {
      return z();
    },
    set hidelogo(n = !1) {
      z(n), R();
    },
    get id() {
      return lt();
    },
    set id(n = void 0) {
      lt(n), R();
    },
    get language() {
      return U();
    },
    set language(n = void 0) {
      U(n), R();
    },
    get name() {
      return oe();
    },
    set name(n = "altcha") {
      oe(n), R();
    },
    get maxnumber() {
      return be();
    },
    set maxnumber(n = 1e6) {
      be(n), R();
    },
    get mockerror() {
      return pt();
    },
    set mockerror(n = !1) {
      pt(n), R();
    },
    get obfuscated() {
      return Oe();
    },
    set obfuscated(n = void 0) {
      Oe(n), R();
    },
    get plugins() {
      return qt();
    },
    set plugins(n = void 0) {
      qt(n), R();
    },
    get refetchonexpire() {
      return yt();
    },
    set refetchonexpire(n = !0) {
      yt(n), R();
    },
    get sentinel() {
      return We();
    },
    set sentinel(n = void 0) {
      We(n), R();
    },
    get spamfilter() {
      return Ae();
    },
    set spamfilter(n = !1) {
      Ae(n), R();
    },
    get strings() {
      return ot();
    },
    set strings(n = void 0) {
      ot(n), R();
    },
    get test() {
      return ve();
    },
    set test(n = !1) {
      ve(n), R();
    },
    get verifyurl() {
      return te();
    },
    set verifyurl(n = void 0) {
      te(n), R();
    },
    get workers() {
      return at();
    },
    set workers(n = Math.min(16, navigator.hardwareConcurrency || 8)) {
      at(n), R();
    },
    get workerurl() {
      return Et();
    },
    set workerurl(n = void 0) {
      Et(n), R();
    }
  });
  return i(), Cl;
}
Lo(["change", "keydown", "click"]);
customElements.define("altcha-widget", ea(
  Ra,
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
globalThis.altchaCreateWorker = (e) => new Worker(new URL(e || "./worker.js", import.meta.url));
export {
  Ra as Altcha
};
