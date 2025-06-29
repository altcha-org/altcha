var Nl = Object.defineProperty;
var Nn = (e) => {
  throw TypeError(e);
};
var Tl = (e, t, r) => t in e ? Nl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var pe = (e, t, r) => Tl(e, typeof t != "symbol" ? t + "" : t, r), Tn = (e, t, r) => t.has(e) || Nn("Cannot " + r);
var se = (e, t, r) => (Tn(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Cr = (e, t, r) => t.has(e) ? Nn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), Ar = (e, t, r, i) => (Tn(e, t, "write to private field"), i ? i.call(e, r) : t.set(e, r), r);
const Dl = "5";
var Zn;
typeof window < "u" && ((Zn = window.__svelte ?? (window.__svelte = {})).v ?? (Zn.v = /* @__PURE__ */ new Set())).add(Dl);
const Ll = 1, Pl = 4, Ol = 8, Fl = 16, Vl = 1, Ml = 2, Or = "[", Wn = "[!", Jn = "]", _t = {}, ue = Symbol(), ql = "http://www.w3.org/1999/xhtml", Dn = !1;
function Kn(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var zn = Array.isArray, Ul = Array.prototype.indexOf, jl = Array.from, Xt = Object.keys, Lt = Object.defineProperty, Qe = Object.getOwnPropertyDescriptor, Bl = Object.getOwnPropertyDescriptors, Hl = Object.prototype, Yl = Array.prototype, Xn = Object.getPrototypeOf, Ln = Object.isExtensible;
const mt = () => {
};
function Qn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Gl(e, t, r = !1) {
  return e === void 0 ? r ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
const ye = 2, ei = 4, lr = 8, Fr = 16, Pe = 32, rt = 64, Qt = 128, he = 256, er = 512, fe = 1024, Se = 2048, nt = 4096, bt = 8192, or = 16384, Zl = 32768, Vr = 65536, Wl = 1 << 19, ti = 1 << 20, kr = 1 << 21, Tt = Symbol("$state"), ri = Symbol("legacy props"), Jl = Symbol("");
function Kl(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function zl() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Xl(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ql() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function eo() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function to(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function ro() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function no() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function io() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ar(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let F = !1;
function gt(e) {
  F = e;
}
let O;
function He(e) {
  if (e === null)
    throw ar(), _t;
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
      throw ar(), _t;
    O = e;
  }
}
function lo() {
  for (var e = 0, t = O; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === Jn) {
        if (e === 0) return t;
        e -= 1;
      } else (r === Or || r === Wn) && (e += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ze(t)
    );
    t.remove(), t = i;
  }
}
let oo = !1;
function je(e) {
  if (typeof e != "object" || e === null || Tt in e)
    return e;
  const t = Xn(e);
  if (t !== Hl && t !== Yl)
    return e;
  var r = /* @__PURE__ */ new Map(), i = zn(e), o = /* @__PURE__ */ V(0), l = T, u = (s) => {
    var c = T;
    Ne(l);
    var d = s();
    return Ne(c), d;
  };
  return i && r.set("length", /* @__PURE__ */ V(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, c, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && ro();
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
          ), Ir(o));
        else {
          if (i && typeof c == "string") {
            var m = (
              /** @type {Source<number>} */
              r.get("length")
            ), h = Number(c);
            Number.isInteger(h) && h < m.v && w(m, h);
          }
          w(d, ue), Ir(o);
        }
        return !0;
      },
      get(s, c, d) {
        var y;
        if (c === Tt)
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
        if (c === Tt)
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
          Ir(o);
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
        no();
      }
    }
  );
}
function Ir(e, t = 1) {
  w(e, e.v + t);
}
var Pn, ni, ii, li;
function xr() {
  if (Pn === void 0) {
    Pn = window, ni = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    ii = Qe(t, "firstChild").get, li = Qe(t, "nextSibling").get, Ln(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Ln(r) && (r.__t = void 0);
  }
}
function sr(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function me(e) {
  return ii.call(e);
}
// @__NO_SIDE_EFFECTS__
function Ze(e) {
  return li.call(e);
}
function Z(e, t) {
  if (!F)
    return /* @__PURE__ */ me(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ me(O)
  );
  return r === null && (r = O.appendChild(sr())), He(r), r;
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
    var u = sr();
    return i === null ? o == null || o.after(u) : i.before(u), He(u), u;
  }
  return He(i), /** @type {TemplateNode} */
  i;
}
function ao(e) {
  e.textContent = "";
}
function oi(e) {
  return e === this.v;
}
function ai(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Mr(e) {
  return !ai(e, this.v);
}
// @__NO_SIDE_EFFECTS__
function ur(e) {
  var t = ye | Se, r = T !== null && (T.f & ye) !== 0 ? (
    /** @type {Derived} */
    T
  ) : null;
  return D === null || r !== null && (r.f & he) !== 0 ? t |= he : D.f |= ti, {
    ctx: le,
    deps: null,
    effects: null,
    equals: oi,
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
  const t = /* @__PURE__ */ ur(e);
  return pi(t), t;
}
// @__NO_SIDE_EFFECTS__
function so(e) {
  const t = /* @__PURE__ */ ur(e);
  return t.equals = Mr, t;
}
function si(e) {
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
function uo(e) {
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
function ui(e) {
  var t, r = D;
  Ge(uo(e));
  try {
    si(e), t = Ai(e);
  } finally {
    Ge(r);
  }
  return t;
}
function fi(e) {
  var t = ui(e), r = (Be || (e.f & he) !== 0) && e.deps !== null ? nt : fe;
  Ee(e, r), e.equals(t) || (e.v = t, e.wv = Ei());
}
function fo(e) {
  D === null && T === null && Xl(), T !== null && (T.f & he) !== 0 && D === null && zl(), Vt && Kl();
}
function co(e, t) {
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
      Hr(l), l.f |= Zl;
    } catch (c) {
      throw Ye(l), c;
    }
  else t !== null && cr(l);
  var u = r && l.deps === null && l.first === null && l.nodes_start === null && l.teardown === null && (l.f & (ti | Qt)) === 0;
  if (!u && i && (o !== null && co(l, o), T !== null && (T.f & ye) !== 0)) {
    var s = (
      /** @type {Derived} */
      T
    );
    (s.effects ?? (s.effects = [])).push(l);
  }
  return l;
}
function qr(e) {
  const t = it(lr, null, !1);
  return Ee(t, fe), t.teardown = e, t;
}
function Sr(e) {
  fo();
  var t = D !== null && (D.f & Pe) !== 0 && le !== null && !le.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      le
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: D,
      reaction: T
    });
  } else {
    var i = Ur(e);
    return i;
  }
}
function ho(e) {
  const t = it(rt, e, !0);
  return () => {
    Ye(t);
  };
}
function vo(e) {
  const t = it(rt, e, !0);
  return (r = {}) => new Promise((i) => {
    r.outro ? Tr(t, () => {
      Ye(t), i(void 0);
    }) : (Ye(t), i(void 0));
  });
}
function Ur(e) {
  return it(ei, e, !1);
}
function jr(e) {
  return it(lr, e, !0);
}
function $e(e, t = [], r = ur) {
  const i = t.map(r);
  return ci(() => e(...i.map(a)));
}
function ci(e, t = 0) {
  return it(lr | Fr | t, e, !0);
}
function Nr(e, t = !0) {
  return it(lr | Pe, e, !0, t);
}
function di(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Vt, i = T;
    Fn(!0), Ne(null);
    try {
      t.call(null);
    } finally {
      Fn(r), Ne(i);
    }
  }
}
function hi(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var i = r.next;
    (r.f & rt) !== 0 ? r.parent = null : Ye(r, t), r = i;
  }
}
function go(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Pe) === 0 && Ye(t), t = r;
  }
}
function Ye(e, t = !0) {
  var r = !1;
  (t || (e.f & Wl) !== 0) && e.nodes_start !== null && (vi(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), r = !0), hi(e, t && !r), ir(e, 0), Ee(e, or);
  var i = e.transitions;
  if (i !== null)
    for (const l of i)
      l.stop();
  di(e);
  var o = e.parent;
  o !== null && o.first !== null && gi(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function vi(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ze(e)
    );
    e.remove(), e = r;
  }
}
function gi(e) {
  var t = e.parent, r = e.prev, i = e.next;
  r !== null && (r.next = i), i !== null && (i.prev = r), t !== null && (t.first === e && (t.first = i), t.last === e && (t.last = r));
}
function Tr(e, t) {
  var r = [];
  _i(e, r, !0), _o(r, () => {
    Ye(e), t && t();
  });
}
function _o(e, t) {
  var r = e.length;
  if (r > 0) {
    var i = () => --r || t();
    for (var o of e)
      o.out(i);
  } else
    t();
}
function _i(e, t, r) {
  if ((e.f & bt) === 0) {
    if (e.f ^= bt, e.transitions !== null)
      for (const u of e.transitions)
        (u.is_global || r) && t.push(u);
    for (var i = e.first; i !== null; ) {
      var o = i.next, l = (i.f & Vr) !== 0 || (i.f & Pe) !== 0;
      _i(i, t, l ? r : !1), i = o;
    }
  }
}
function On(e) {
  mi(e, !0);
}
function mi(e, t) {
  if ((e.f & bt) !== 0) {
    e.f ^= bt, (e.f & fe) === 0 && (e.f ^= fe), Mt(e) && (Ee(e, Se), cr(e));
    for (var r = e.first; r !== null; ) {
      var i = r.next, o = (r.f & Vr) !== 0 || (r.f & Pe) !== 0;
      mi(r, o ? t : !1), r = i;
    }
    if (e.transitions !== null)
      for (const l of e.transitions)
        (l.is_global || t) && l.in();
  }
}
const mo = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Pt = [], Ot = [];
function bi() {
  var e = Pt;
  Pt = [], Qn(e);
}
function wi() {
  var e = Ot;
  Ot = [], Qn(e);
}
function Br(e) {
  Pt.length === 0 && queueMicrotask(bi), Pt.push(e);
}
function bo(e) {
  Ot.length === 0 && mo(wi), Ot.push(e);
}
function wo() {
  Pt.length > 0 && bi(), Ot.length > 0 && wi();
}
let Jt = !1, tr = !1, rr = null, et = !1, Vt = !1;
function Fn(e) {
  Vt = e;
}
let Dt = [];
let T = null, ke = !1;
function Ne(e) {
  T = e;
}
let D = null;
function Ge(e) {
  D = e;
}
let ie = null;
function pi(e) {
  T !== null && T.f & kr && (ie === null ? ie = [e] : ie.push(e));
}
let ne = null, de = 0, ge = null;
function po(e) {
  ge = e;
}
let yi = 1, nr = 0, Be = !1;
function Ei() {
  return ++yi;
}
function Mt(e) {
  var h;
  var t = e.f;
  if ((t & Se) !== 0)
    return !0;
  if ((t & nt) !== 0) {
    var r = e.deps, i = (t & he) !== 0;
    if (r !== null) {
      var o, l, u = (t & er) !== 0, s = i && D !== null && !Be, c = r.length;
      if (u || s) {
        var d = (
          /** @type {Derived} */
          e
        ), m = d.parent;
        for (o = 0; o < c; o++)
          l = r[o], (u || !((h = l == null ? void 0 : l.reactions) != null && h.includes(d))) && (l.reactions ?? (l.reactions = [])).push(d);
        u && (d.f ^= er), s && m !== null && (m.f & he) === 0 && (d.f ^= he);
      }
      for (o = 0; o < c; o++)
        if (l = r[o], Mt(
          /** @type {Derived} */
          l
        ) && fi(
          /** @type {Derived} */
          l
        ), l.wv > e.wv)
          return !0;
    }
    (!i || D !== null && !Be) && Ee(e, fe);
  }
  return !1;
}
function yo(e, t) {
  for (var r = t; r !== null; ) {
    if ((r.f & Qt) !== 0)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= Qt;
      }
    r = r.parent;
  }
  throw Jt = !1, e;
}
function Vn(e) {
  return (e.f & or) === 0 && (e.parent === null || (e.parent.f & Qt) === 0);
}
function fr(e, t, r, i) {
  if (Jt) {
    if (r === null && (Jt = !1), Vn(t))
      throw e;
    return;
  }
  if (r !== null && (Jt = !0), yo(e, t), Vn(t))
    throw e;
}
function Ci(e, t, r = !0) {
  var i = e.reactions;
  if (i !== null)
    for (var o = 0; o < i.length; o++) {
      var l = i[o];
      ie != null && ie.includes(e) || ((l.f & ye) !== 0 ? Ci(
        /** @type {Derived} */
        l,
        t,
        !1
      ) : t === l && (r ? Ee(l, Se) : (l.f & fe) !== 0 && Ee(l, nt), cr(
        /** @type {Effect} */
        l
      )));
    }
}
function Ai(e) {
  var y;
  var t = ne, r = de, i = ge, o = T, l = Be, u = ie, s = le, c = ke, d = e.f;
  ne = /** @type {null | Value[]} */
  null, de = 0, ge = null, Be = (d & he) !== 0 && (ke || !et || T === null), T = (d & (Pe | rt)) === 0 ? e : null, ie = null, Mn(e.ctx), ke = !1, nr++, e.f |= kr;
  try {
    var m = (
      /** @type {Function} */
      (0, e.fn)()
    ), h = e.deps;
    if (ne !== null) {
      var g;
      if (ir(e, de), h !== null && de > 0)
        for (h.length = de + ne.length, g = 0; g < ne.length; g++)
          h[de + g] = ne[g];
      else
        e.deps = h = ne;
      if (!Be)
        for (g = de; g < h.length; g++)
          ((y = h[g]).reactions ?? (y.reactions = [])).push(e);
    } else h !== null && de < h.length && (ir(e, de), h.length = de);
    if (Si() && ge !== null && !ke && h !== null && (e.f & (ye | nt | Se)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      ge.length; g++)
        Ci(
          ge[g],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (nr++, ge !== null && (i === null ? i = ge : i.push(.../** @type {Source[]} */
    ge))), m;
  } finally {
    ne = t, de = r, ge = i, T = o, Be = l, ie = u, Mn(s), ke = c, e.f ^= kr;
  }
}
function Eo(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var i = Ul.call(r, e);
    if (i !== -1) {
      var o = r.length - 1;
      o === 0 ? r = t.reactions = null : (r[i] = r[o], r.pop());
    }
  }
  r === null && (t.f & ye) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ne === null || !ne.includes(t)) && (Ee(t, nt), (t.f & (he | er)) === 0 && (t.f ^= er), si(
    /** @type {Derived} **/
    t
  ), ir(
    /** @type {Derived} **/
    t,
    0
  ));
}
function ir(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var i = t; i < r.length; i++)
      Eo(e, r[i]);
}
function Hr(e) {
  var t = e.f;
  if ((t & or) === 0) {
    Ee(e, fe);
    var r = D, i = le, o = et;
    D = e, et = !0;
    try {
      (t & Fr) !== 0 ? go(e) : hi(e), di(e);
      var l = Ai(e);
      e.teardown = typeof l == "function" ? l : null, e.wv = yi;
      var u = e.deps, s;
      Dn && oo && e.f & Se;
    } catch (c) {
      fr(c, e, r, i || e.ctx);
    } finally {
      et = o, D = r;
    }
  }
}
function Co() {
  try {
    Ql();
  } catch (e) {
    if (rr !== null)
      fr(e, rr, null);
    else
      throw e;
  }
}
function Ii() {
  var e = et;
  try {
    var t = 0;
    for (et = !0; Dt.length > 0; ) {
      t++ > 1e3 && Co();
      var r = Dt, i = r.length;
      Dt = [];
      for (var o = 0; o < i; o++) {
        var l = Io(r[o]);
        Ao(l);
      }
      Ft.clear();
    }
  } finally {
    tr = !1, et = e, rr = null;
  }
}
function Ao(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var i = e[r];
      if ((i.f & (or | bt)) === 0)
        try {
          Mt(i) && (Hr(i), i.deps === null && i.first === null && i.nodes_start === null && (i.teardown === null ? gi(i) : i.fn = null));
        } catch (o) {
          fr(o, i, null, i.ctx);
        }
    }
}
function cr(e) {
  tr || (tr = !0, queueMicrotask(Ii));
  for (var t = rr = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (rt | Pe)) !== 0) {
      if ((r & fe) === 0) return;
      t.f ^= fe;
    }
  }
  Dt.push(t);
}
function Io(e) {
  for (var t = [], r = e; r !== null; ) {
    var i = r.f, o = (i & (Pe | rt)) !== 0, l = o && (i & fe) !== 0;
    if (!l && (i & bt) === 0) {
      if ((i & ei) !== 0)
        t.push(r);
      else if (o)
        r.f ^= fe;
      else
        try {
          Mt(r) && Hr(r);
        } catch (c) {
          fr(c, r, null, r.ctx);
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
    if (wo(), Dt.length === 0)
      return (
        /** @type {T} */
        t
      );
    tr = !0, Ii();
  }
}
async function Rr() {
  await Promise.resolve(), R();
}
function a(e) {
  var t = e.f, r = (t & ye) !== 0;
  if (T !== null && !ke) {
    if (!(ie != null && ie.includes(e))) {
      var i = T.deps;
      e.rv < nr && (e.rv = nr, ne === null && i !== null && i[de] === e ? de++ : ne === null ? ne = [e] : (!Be || !ne.includes(e)) && ne.push(e));
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
  e, Mt(o) && fi(o)), Vt && Ft.has(e) ? Ft.get(e) : e.v;
}
function tt(e) {
  var t = ke;
  try {
    return ke = !0, e();
  } finally {
    ke = t;
  }
}
const Ro = -7169;
function Ee(e, t) {
  e.f = e.f & Ro | t;
}
const Ft = /* @__PURE__ */ new Map();
function Ri(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: oi,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function V(e, t) {
  const r = Ri(e);
  return pi(r), r;
}
// @__NO_SIDE_EFFECTS__
function Yr(e, t = !1) {
  const r = Ri(e);
  return t || (r.equals = Mr), r;
}
function w(e, t, r = !1) {
  T !== null && !ke && Si() && (T.f & (ye | Fr)) !== 0 && !(ie != null && ie.includes(e)) && io();
  let i = r ? je(t) : t;
  return $o(e, i);
}
function $o(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    Vt ? Ft.set(e, t) : Ft.set(e, r), e.v = t, (e.f & ye) !== 0 && ((e.f & Se) !== 0 && ui(
      /** @type {Derived} */
      e
    ), Ee(e, (e.f & he) === 0 ? fe : nt)), e.wv = Ei(), $i(e, Se), D !== null && (D.f & fe) !== 0 && (D.f & (Pe | rt)) === 0 && (ge === null ? po([e]) : ge.push(e));
  }
  return t;
}
function $i(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, o = 0; o < i; o++) {
      var l = r[o], u = l.f;
      (u & Se) === 0 && (Ee(l, t), (u & (fe | he)) !== 0 && ((u & ye) !== 0 ? $i(
        /** @type {Derived} */
        l,
        nt
      ) : cr(
        /** @type {Effect} */
        l
      )));
    }
}
let le = null;
function Mn(e) {
  le = e;
}
function ki(e, t = !1, r) {
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
  qr(() => {
    i.d = !0;
  });
}
function xi(e) {
  const t = le;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const u = t.e;
    if (u !== null) {
      var r = D, i = T;
      t.e = null;
      try {
        for (var o = 0; o < u.length; o++) {
          var l = u[o];
          Ge(l.effect), Ne(l.reaction), Ur(l.fn);
        }
      } finally {
        Ge(r), Ne(i);
      }
    }
    le = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Si() {
  return !0;
}
const ko = ["touchstart", "touchmove"];
function xo(e) {
  return ko.includes(e);
}
function So(e, t) {
  if (t) {
    const r = document.body;
    e.autofocus = !0, Br(() => {
      document.activeElement === r && e.focus();
    });
  }
}
let qn = !1;
function Ni() {
  qn || (qn = !0, document.addEventListener(
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
function Ti(e) {
  var t = T, r = D;
  Ne(null), Ge(null);
  try {
    return e();
  } finally {
    Ne(t), Ge(r);
  }
}
function No(e, t, r, i = r) {
  e.addEventListener(t, () => Ti(r));
  const o = e.__on_r;
  o ? e.__on_r = () => {
    o(), i(!0);
  } : e.__on_r = () => i(!0), Ni();
}
const Di = /* @__PURE__ */ new Set(), Dr = /* @__PURE__ */ new Set();
function To(e, t, r, i = {}) {
  function o(l) {
    if (i.capture || Nt.call(t, l), !l.cancelBubble)
      return Ti(() => r == null ? void 0 : r.call(this, l));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Br(() => {
    t.addEventListener(e, o, i);
  }) : t.addEventListener(e, o, i), o;
}
function Ue(e, t, r, i, o) {
  var l = { capture: i, passive: o }, u = To(e, t, r, l);
  (t === document.body || t === window || t === document) && qr(() => {
    t.removeEventListener(e, u, l);
  });
}
function Do(e) {
  for (var t = 0; t < e.length; t++)
    Di.add(e[t]);
  for (var r of Dr)
    r(e);
}
function Nt(e) {
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
    var m = T, h = D;
    Ne(null), Ge(null);
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
            if (zn(E)) {
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
      e.__root = t, delete e.currentTarget, Ne(m), Ge(h);
    }
  }
}
function Gr(e) {
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
  var r = (t & Vl) !== 0, i = (t & Ml) !== 0, o, l = !e.startsWith("<!>");
  return () => {
    if (F)
      return xe(O, null), O;
    o === void 0 && (o = Gr(l ? e : "<!>" + e), r || (o = /** @type {Node} */
    /* @__PURE__ */ me(o)));
    var u = (
      /** @type {TemplateNode} */
      i || ni ? document.importNode(o, !0) : o.cloneNode(!0)
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
function dr(e, t, r = "svg") {
  var i = !e.startsWith("<!>"), o = `<${r}>${i ? e : "<!>" + e}</${r}>`, l;
  return () => {
    if (F)
      return xe(O, null), O;
    if (!l) {
      var u = (
        /** @type {DocumentFragment} */
        Gr(o)
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
function Gt() {
  if (F)
    return xe(O, null), O;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = sr();
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
function Lo(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function Li(e, t) {
  return Pi(e, t);
}
function Po(e, t) {
  xr(), t.intro = t.intro ?? !1;
  const r = t.target, i = F, o = O;
  try {
    for (var l = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ me(r)
    ); l && (l.nodeType !== 8 || /** @type {Comment} */
    l.data !== Or); )
      l = /** @type {TemplateNode} */
      /* @__PURE__ */ Ze(l);
    if (!l)
      throw _t;
    gt(!0), He(
      /** @type {Comment} */
      l
    ), wt();
    const u = Pi(e, { ...t, anchor: l });
    if (O === null || O.nodeType !== 8 || /** @type {Comment} */
    O.data !== Jn)
      throw ar(), _t;
    return gt(!1), /**  @type {Exports} */
    u;
  } catch (u) {
    if (u === _t)
      return t.recover === !1 && eo(), xr(), ao(r), gt(!1), Li(e, t);
    throw u;
  } finally {
    gt(i), He(o);
  }
}
const ht = /* @__PURE__ */ new Map();
function Pi(e, { target: t, anchor: r, props: i = {}, events: o, context: l, intro: u = !0 }) {
  xr();
  var s = /* @__PURE__ */ new Set(), c = (h) => {
    for (var g = 0; g < h.length; g++) {
      var y = h[g];
      if (!s.has(y)) {
        s.add(y);
        var S = xo(y);
        t.addEventListener(y, Nt, { passive: S });
        var E = ht.get(y);
        E === void 0 ? (document.addEventListener(y, Nt, { passive: S }), ht.set(y, 1)) : ht.set(y, E + 1);
      }
    }
  };
  c(jl(Di)), Dr.add(c);
  var d = void 0, m = vo(() => {
    var h = r ?? t.appendChild(sr());
    return Nr(() => {
      if (l) {
        ki({});
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
      ), d = e(h, i) || {}, F && (D.nodes_end = O), l && xi();
    }), () => {
      var S;
      for (var g of s) {
        t.removeEventListener(g, Nt);
        var y = (
          /** @type {number} */
          ht.get(g)
        );
        --y === 0 ? (document.removeEventListener(g, Nt), ht.delete(g)) : ht.set(g, y);
      }
      Dr.delete(c), h !== r && ((S = h.parentNode) == null || S.removeChild(h));
    };
  });
  return Lr.set(d, m), d;
}
let Lr = /* @__PURE__ */ new WeakMap();
function Oo(e, t) {
  const r = Lr.get(e);
  return r ? (Lr.delete(e), r(t)) : Promise.resolve();
}
function J(e, t, [r, i] = [0, 0]) {
  F && r === 0 && wt();
  var o = e, l = null, u = null, s = ue, c = r > 0 ? Vr : 0, d = !1;
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
        M === Or ? i = 0 : M === Wn ? i = 1 / 0 : (i = parseInt(M.substring(1)), i !== i && (i = s ? 1 / 0 : -1));
      }
      const E = i > r;
      !!s === E && (o = lo(), He(o), gt(!1), S = !0, i = -1);
    }
    s ? (l ? On(l) : y && (l = Nr(() => y(o))), u && Tr(u, () => {
      u = null;
    })) : (u ? On(u) : y && (u = Nr(() => y(o, [r + 1, i]))), l && Tr(l, () => {
      l = null;
    })), S && gt(!0);
  };
  ci(() => {
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
    if (s.nodes_start !== null && (vi(
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
          throw ar(), _t;
        xe(O, d), l = He(c);
        return;
      }
      var m = u + "";
      r ? m = `<svg>${m}</svg>` : i && (m = `<math>${m}</math>`);
      var h = Gr(m);
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
function Fo(e, t, r, i, o) {
  var s;
  F && wt();
  var l = (s = t.$$slots) == null ? void 0 : s[r], u = !1;
  l === !0 && (l = t.children, u = !0), l === void 0 || l(e, u ? () => i : i);
}
const Un = [...` 	
\r\f \v\uFEFF`];
function Vo(e, t, r) {
  var i = "" + e;
  if (r) {
    for (var o in r)
      if (r[o])
        i = i ? i + " " + o : o;
      else if (i.length)
        for (var l = o.length, u = 0; (u = i.indexOf(o, u)) >= 0; ) {
          var s = u + l;
          (u === 0 || Un.includes(i[u - 1])) && (s === i.length || Un.includes(i[s])) ? i = (u === 0 ? "" : i.substring(0, u)) + i.substring(s + 1) : u = s;
        }
  }
  return i === "" ? null : i;
}
function Mo(e, t, r, i, o, l) {
  var u = e.__className;
  if (F || u !== r || u === void 0) {
    var s = Vo(r, i, l);
    (!F || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : e.className = s), e.__className = r;
  } else if (l && o !== l)
    for (var c in l) {
      var d = !!l[c];
      (o == null || d !== !!o[c]) && e.classList.toggle(c, d);
    }
  return l;
}
const qo = Symbol("is custom element"), Uo = Symbol("is html");
function jn(e) {
  if (F) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var i = e.value;
          N(e, "value", null), e.value = i;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          N(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = r, bo(r), Ni();
  }
}
function jo(e, t) {
  var r = Oi(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function N(e, t, r, i) {
  var o = Oi(e);
  F && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = r) && (t === "loading" && (e[Jl] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Bo(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Oi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [qo]: e.nodeName.includes("-"),
      [Uo]: e.namespaceURI === ql
    })
  );
}
var Bn = /* @__PURE__ */ new Map();
function Bo(e) {
  var t = Bn.get(e.nodeName);
  if (t) return t;
  Bn.set(e.nodeName, t = []);
  for (var r, i = e, o = Element.prototype; o !== i; ) {
    r = Bl(i);
    for (var l in r)
      r[l].set && t.push(l);
    i = Xn(i);
  }
  return t;
}
function Ho(e, t, r = t) {
  No(e, "change", (i) => {
    var o = i ? e.defaultChecked : e.checked;
    r(o);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (F && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  tt(t) == null) && r(e.checked), jr(() => {
    var i = t();
    e.checked = !!i;
  });
}
function Hn(e, t) {
  return e === t || (e == null ? void 0 : e[Tt]) === t;
}
function Zt(e = {}, t, r, i) {
  return Ur(() => {
    var o, l;
    return jr(() => {
      o = l, l = [], tt(() => {
        e !== r(...l) && (t(e, ...l), o && Hn(r(...o), e) && t(null, ...o));
      });
    }), () => {
      Br(() => {
        l && Hn(r(...l), e) && t(null, ...l);
      });
    };
  }), e;
}
function Fi(e) {
  le === null && Kn(), Sr(() => {
    const t = tt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Yo(e) {
  le === null && Kn(), Fi(() => () => tt(e));
}
function Vi(e, t, r) {
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
function Go(e, t = mt) {
  let r = null;
  const i = /* @__PURE__ */ new Set();
  function o(s) {
    if (ai(e, s) && (e = s, r)) {
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
function Kt(e) {
  let t;
  return Vi(e, (r) => t = r)(), t;
}
let Wt = !1, Pr = Symbol();
function Zo(e, t, r) {
  const i = r[t] ?? (r[t] = {
    store: null,
    source: /* @__PURE__ */ Yr(void 0),
    unsubscribe: mt
  });
  if (i.store !== e && !(Pr in r))
    if (i.unsubscribe(), i.store = e ?? null, e == null)
      i.source.v = void 0, i.unsubscribe = mt;
    else {
      var o = !0;
      i.unsubscribe = Vi(e, (l) => {
        o ? i.source.v = l : w(i.source, l);
      }), o = !1;
    }
  return e && Pr in r ? Kt(e) : a(i.source);
}
function Wo() {
  const e = {};
  function t() {
    qr(() => {
      for (var r in e)
        e[r].unsubscribe();
      Lt(e, Pr, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function Jo(e) {
  var t = Wt;
  try {
    return Wt = !1, [e(), Wt];
  } finally {
    Wt = t;
  }
}
function Yn(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function $(e, t, r, i) {
  var lt;
  var o = (r & Ll) !== 0, l = !0, u = (r & Ol) !== 0, s = (r & Fl) !== 0, c = !1, d;
  u ? [d, c] = Jo(() => (
    /** @type {V} */
    e[t]
  )) : d = /** @type {V} */
  e[t];
  var m = Tt in e || ri in e, h = u && (((lt = Qe(e, t)) == null ? void 0 : lt.set) ?? (m && t in e && ((U) => e[t] = U))) || void 0, g = (
    /** @type {V} */
    i
  ), y = !0, S = !1, E = () => (S = !0, y && (y = !1, s ? g = tt(
    /** @type {() => V} */
    i
  ) : g = /** @type {V} */
  i), g);
  d === void 0 && i !== void 0 && (h && l && to(), d = E(), h && h(d));
  var M;
  if (M = () => {
    var U = (
      /** @type {V} */
      e[t]
    );
    return U === void 0 ? E() : (y = !0, S = !1, U);
  }, (r & Pl) === 0)
    return M;
  if (h) {
    var ce = e.$$legacy;
    return function(U, oe) {
      return arguments.length > 0 ? ((!oe || ce || c) && h(oe ? M() : U), U) : M();
    };
  }
  var K = !1, ee = /* @__PURE__ */ Yr(d), z = /* @__PURE__ */ ur(() => {
    var U = M(), oe = a(ee);
    return K ? (K = !1, oe) : ee.v = U;
  });
  return u && a(z), o || (z.equals = Mr), function(U, oe) {
    if (arguments.length > 0) {
      const be = oe ? a(z) : u ? je(U) : U;
      if (!z.equals(be)) {
        if (K = !0, w(ee, be), S && g !== void 0 && (g = be), Yn(z))
          return U;
        tt(() => a(z));
      }
      return U;
    }
    return Yn(z) ? z.v : a(z);
  };
}
function Ko(e) {
  return new zo(e);
}
var Le, _e;
class zo {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    Cr(this, Le);
    /** @type {Record<string, any>} */
    Cr(this, _e);
    var l;
    var r = /* @__PURE__ */ new Map(), i = (u, s) => {
      var c = /* @__PURE__ */ Yr(s);
      return r.set(u, c), c;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(u, s) {
          return a(r.get(s) ?? i(s, Reflect.get(u, s)));
        },
        has(u, s) {
          return s === ri ? !0 : (a(r.get(s) ?? i(s, Reflect.get(u, s))), Reflect.has(u, s));
        },
        set(u, s, c) {
          return w(r.get(s) ?? i(s, c), c), Reflect.set(u, s, c);
        }
      }
    );
    Ar(this, _e, (t.hydrate ? Po : Li)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((l = t == null ? void 0 : t.props) != null && l.$$host) || t.sync === !1) && R(), Ar(this, Le, o.$$events);
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
      Oo(se(this, _e));
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
let Mi;
typeof HTMLElement == "function" && (Mi = class extends HTMLElement {
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
      const r = {}, i = Xo(this);
      for (const o of this.$$s)
        o in i && (o === "default" && !this.$$d.children ? (this.$$d.children = t(o), r.default = !0) : r[o] = t(o));
      for (const o of this.attributes) {
        const l = this.$$g_p(o.name);
        l in this.$$d || (this.$$d[l] = zt(l, o.value, this.$$p_d, "toProp"));
      }
      for (const o in this.$$p_d)
        !(o in this.$$d) && this[o] !== void 0 && (this.$$d[o] = this[o], delete this[o]);
      this.$$c = Ko({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = ho(() => {
        jr(() => {
          var o;
          this.$$r = !0;
          for (const l of Xt(this.$$c)) {
            if (!((o = this.$$p_d[l]) != null && o.reflect)) continue;
            this.$$d[l] = this.$$c[l];
            const u = zt(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = zt(t, i, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [t]: this.$$d[t] }));
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
    return Xt(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function zt(e, t, r, i) {
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
function Xo(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function Qo(e, t, r, i, o, l) {
  let u = class extends Mi {
    constructor() {
      super(e, r, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Xt(t).map(
        (s) => (t[s].attribute || s).toLowerCase()
      );
    }
  };
  return Xt(t).forEach((s) => {
    Lt(u.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(c) {
        var h;
        c = zt(s, c, t), this.$$d[s] = c;
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
const qi = new TextEncoder();
function ea(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function ta(e, t = "SHA-256", r = 1e5) {
  const i = Date.now().toString(16);
  e || (e = Math.round(Math.random() * r));
  const o = await Ui(i, e, t);
  return {
    algorithm: t,
    challenge: o,
    salt: i,
    signature: ""
  };
}
async function Ui(e, t, r) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return ea(
    await crypto.subtle.digest(
      r.toUpperCase(),
      qi.encode(e + t)
    )
  );
}
function ra(e, t, r = "SHA-256", i = 1e6, o = 0) {
  const l = new AbortController(), u = Date.now();
  return {
    promise: (async () => {
      for (let c = o; c <= i; c += 1) {
        if (l.signal.aborted)
          return null;
        if (await Ui(t, c, r) === e)
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
function Gn() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function na(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let i = 0; i < t.length; i++)
    r[i] = t.charCodeAt(i);
  return r;
}
function ia(e, t = 12) {
  const r = new Uint8Array(t);
  for (let i = 0; i < t; i++)
    r[i] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function la(e, t = "", r = 1e6, i = 0) {
  const o = "AES-GCM", l = new AbortController(), u = Date.now(), s = async () => {
    for (let m = i; m <= r; m += 1) {
      if (l.signal.aborted || !c || !d)
        return null;
      try {
        const h = await crypto.subtle.decrypt(
          {
            name: o,
            iv: ia(m)
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
    d = na(e);
    const m = await crypto.subtle.digest(
      "SHA-256",
      qi.encode(t)
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
  get: (e) => Kt(globalThis.altchaI18n.store)[e],
  set: (e, t) => {
    Object.assign(Kt(globalThis.altchaI18n.store), {
      [e]: t
    }), globalThis.altchaI18n.store.set(Kt(globalThis.altchaI18n.store));
  },
  store: Go({})
};
const oa = {
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
globalThis.altchaI18n.set("en", oa);
const $r = (e, t) => {
  let r = /* @__PURE__ */ so(() => Gl(t == null ? void 0 : t(), 24));
  var i = fa();
  $e(() => {
    N(i, "width", a(r)), N(i, "height", a(r));
  }), q(e, i);
};
function aa(e, t) {
  e.code === "Space" && (e.preventDefault(), e.stopImmediatePropagation(), t());
}
function sa(e, t) {
  e.preventDefault(), t();
}
function ua(e, t, r, i, o, l, u, s) {
  var c;
  [
    C.UNVERIFIED,
    C.ERROR,
    C.EXPIRED,
    C.CODE
  ].includes(a(t)) ? r() !== !1 && ((c = a(i)) == null ? void 0 : c.reportValidity()) === !1 ? w(o, !1) : l() ? u() : s() : w(o, !0);
}
var fa = /* @__PURE__ */ dr('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="altcha-spinner"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor"></path></svg>'), ca = /* @__PURE__ */ Ce('<input type="hidden">'), da = /* @__PURE__ */ Ce('<div><a target="_blank" class="altcha-logo" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor"></path></svg></a></div>'), ha = /* @__PURE__ */ dr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg>'), va = /* @__PURE__ */ dr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z"></path></svg>'), ga = /* @__PURE__ */ dr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"></path></svg>'), _a = /* @__PURE__ */ Ce('<button type="button" class="altcha-code-challenge-audio"><!></button>'), ma = /* @__PURE__ */ Ce("<audio hidden autoplay><source></audio>"), ba = /* @__PURE__ */ Ce('<div class="altcha-code-challenge" role="dialog"><div class="altcha-code-challenge-arrow"></div> <form data-code-challenge-form="1"><img class="altcha-code-challenge-image" alt=""> <input type="text" autocomplete="off" name="code" class="altcha-code-challenge-input" required> <div class="altcha-code-challenge-buttons"><div class="altcha-code-challenge-buttons-left"><!> <button type="button" class="altcha-code-challenge-reload"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z"></path></svg></button></div> <button type="submit" class="altcha-code-challenge-verify"><!> </button></div> <!></form></div>'), wa = /* @__PURE__ */ Ce("<div><!></div>"), pa = /* @__PURE__ */ Ce("<div><!></div>"), ya = /* @__PURE__ */ Ce('<div class="altcha-error"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg> <!></div>'), Ea = /* @__PURE__ */ Ce('<div class="altcha-footer"><div><!></div></div>'), Ca = /* @__PURE__ */ Ce('<div class="altcha-anchor-arrow"></div>'), Aa = /* @__PURE__ */ Ce('<!> <div class="altcha"><div class="altcha-main"><div><!> <input type="checkbox"></div> <label class="altcha-label"><!></label> <!> <!> <!></div> <!> <!> <!></div>', 1);
function Ia(e, t) {
  var xn, Sn;
  ki(t, !0);
  const [r, i] = Wo(), o = () => Zo(Bi, "$altchaI18nStore", r);
  let l = $(t, "auto", 7, void 0), u = $(t, "blockspam", 7, void 0), s = $(t, "challengeurl", 7, void 0), c = $(t, "challengejson", 7, void 0), d = $(t, "credentials", 7, void 0), m = $(t, "customfetch", 7, void 0), h = $(t, "debug", 7, !1), g = $(t, "delay", 7, 0), y = $(t, "disableautofocus", 7, !1), S = $(t, "expire", 7, void 0), E = $(t, "floating", 7, void 0), M = $(t, "floatinganchor", 7, void 0), ce = $(t, "floatingoffset", 7, void 0), K = $(t, "floatingpersist", 7, !1), ee = $(t, "hidefooter", 7, !1), z = $(t, "hidelogo", 7, !1), lt = $(t, "id", 7, void 0), U = $(t, "language", 7, void 0), oe = $(t, "name", 7, "altcha"), be = $(t, "maxnumber", 7, 1e6), pt = $(t, "mockerror", 7, !1), Oe = $(t, "obfuscated", 7, void 0), qt = $(t, "plugins", 7, void 0), yt = $(t, "refetchonexpire", 7, !0), We = $(t, "sentinel", 7, void 0), Ae = $(t, "spamfilter", 7, !1), ot = $(t, "strings", 7, void 0), ve = $(t, "test", 7, !1), te = $(t, "verifyurl", 7, void 0), at = $(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), Et = $(t, "workerurl", 7, void 0);
  const { altchaI18n: ji } = globalThis, Bi = ji.store, Zr = ["SHA-256", "SHA-384", "SHA-512"], Hi = "https://altcha.org/", Fe = (n, f) => {
    t.$$host.dispatchEvent(new CustomEvent(n, { detail: f }));
  }, Wr = (Sn = (xn = document.documentElement.lang) == null ? void 0 : xn.split("-")) == null ? void 0 : Sn[0], hr = /* @__PURE__ */ St(() => {
    var n;
    return s() && new URL(s(), location.origin).host.endsWith(".altcha.org") && !!((n = s()) != null && n.includes("apiKey=ckey_"));
  }), vr = /* @__PURE__ */ St(() => c() ? fn(c()) : void 0), Yi = /* @__PURE__ */ St(() => ot() ? fn(ot()) : {}), P = /* @__PURE__ */ St(() => ({
    ...Xr(o()),
    ...a(Yi)
  })), Jr = /* @__PURE__ */ St(() => `${lt() || oe()}_checkbox_${Math.round(Math.random() * 1e8)}`);
  let Ct = /* @__PURE__ */ V(!1), B = /* @__PURE__ */ V(null), k = /* @__PURE__ */ V(je(C.UNVERIFIED)), re = /* @__PURE__ */ V(void 0), At = /* @__PURE__ */ V(null), Ve = /* @__PURE__ */ V(null), gr = /* @__PURE__ */ V(null), st = /* @__PURE__ */ V(null), L = /* @__PURE__ */ V(null), Je = /* @__PURE__ */ V(null), Ie = null, H = /* @__PURE__ */ V(null), Ke = /* @__PURE__ */ V(!1), Me = [], _r = /* @__PURE__ */ V(!1), Te = /* @__PURE__ */ V(null);
  Sr(() => {
    il(a(Je));
  }), Sr(() => {
    ll(a(k));
  }), Yo(() => {
    Gi(), a(L) && (a(L).removeEventListener("submit", ln), a(L).removeEventListener("reset", on), a(L).removeEventListener("focusin", nn), w(L, null)), Ie && (clearTimeout(Ie), Ie = null), document.removeEventListener("click", tn), document.removeEventListener("scroll", rn), window.removeEventListener("resize", un);
  }), Fi(() => {
    var n;
    x("mounted", "2.0.4"), x("workers", at()), Ki(), x("plugins", Me.length ? Me.map((f) => f.constructor.pluginName).join(", ") : "none"), ve() && x("using test mode"), S() && mr(S()), l() !== void 0 && x("auto", l()), E() !== void 0 && dn(E()), w(L, (n = a(re)) == null ? void 0 : n.closest("form"), !0), a(L) && (a(L).addEventListener("submit", ln, { capture: !0 }), a(L).addEventListener("reset", on), (l() === "onfocus" || K() === "focus") && a(L).addEventListener("focusin", nn)), l() === "onload" && (Oe() ? It() : De()), a(hr) && (ee() || z()) && x("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      Fe("load");
    });
  });
  function Ut(n, f) {
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
  function Gi() {
    for (const n of Me)
      n.destroy();
  }
  function Kr() {
    s() && yt() && a(k) === C.VERIFIED ? De() : ut(C.EXPIRED, a(P).expired);
  }
  async function Zi() {
    var n;
    if (pt())
      throw x("mocking error"), new Error("Mocked error.");
    if (a(vr))
      return x("using provided json data"), a(vr);
    if (ve())
      return x("generating test challenge", { test: ve() }), ta(typeof ve() != "boolean" ? +ve() : void 0);
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
      }, v = await zr()(s(), f);
      if (!v || !(v instanceof Response))
        throw new Error("Custom fetch function did not return a response.");
      if (v.status !== 200)
        throw new Error(`Server responded with ${v.status}.`);
      const b = v.headers.get("X-Altcha-Config"), _ = await v.json(), A = new URLSearchParams((n = _.salt.split("?")) == null ? void 0 : n[1]), p = A.get("expires") || A.get("expire");
      if (p) {
        const I = new Date(+p * 1e3), j = isNaN(I.getTime()) ? 0 : I.getTime() - Date.now();
        j > 0 && mr(j);
      }
      if (b)
        try {
          const I = JSON.parse(b);
          I && typeof I == "object" && (I.verifyurl && !I.verifyurl.startsWith("fn:") && (I.verifyurl = en(I.verifyurl)), gn(I));
        } catch (I) {
          x("unable to configure from X-Altcha-Config", I);
        }
      return _;
    }
  }
  function Wi(n) {
    var v, b;
    const f = (v = a(L)) == null ? void 0 : v.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((b = f == null ? void 0 : f.value) == null ? void 0 : b.slice(f.value.indexOf("@"))) || void 0;
  }
  function zr() {
    let n = fetch;
    if (m())
      if (x("using customfetch"), typeof m() == "string") {
        if (n = globalThis[m()] || null, !n)
          throw new Error(`Custom fetch function not found: ${m()}`);
      } else
        n = m();
    return n;
  }
  function Xr(n, f = [
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
  function Ji() {
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
  function Qr(n) {
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
  function en(n, f) {
    const v = new URL(s() || location.origin), b = new URL(n, v);
    if (b.search || (b.search = v.search), f)
      for (const _ in f)
        f[_] !== void 0 && f[_] !== null && b.searchParams.set(_, f[_]);
    return b.toString();
  }
  function Ki() {
    const n = qt() !== void 0 ? qt().split(",") : void 0;
    for (const f of globalThis.altchaPlugins)
      (!n || n.includes(f.pluginName)) && Me.push(new f({
        el: a(re),
        clarify: It,
        dispatch: Fe,
        getConfiguration: _n,
        getFloatingAnchor: mn,
        getState: bn,
        log: x,
        reset: ut,
        solve: vn,
        setState: Re,
        setFloatingAnchor: pn,
        verify: De
      }));
  }
  function x(...n) {
    (h() || n.some((f) => f instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${oe()}]`, ...n);
  }
  function zi() {
    w(H, Q.PAUSED, !0);
  }
  function Xi(n) {
    w(H, Q.ERROR, !0);
  }
  function Qi() {
    w(H, Q.READY, !0);
  }
  function el() {
    w(H, Q.LOADING, !0);
  }
  function tl() {
    w(H, Q.PLAYING, !0);
  }
  function rl() {
    w(H, Q.PAUSED, !0);
  }
  function nl(n) {
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
      w(Ke, !0), cn(Ut(a(B).challenge, a(B).solution), b).then(({ reason: _, verified: A }) => {
        A ? (w(B, null), Re(C.VERIFIED), x("verified"), Rr().then(() => {
          var p;
          (p = a(gr)) == null || p.focus(), Fe("verified", { payload: a(Te) });
        })) : (ut(), w(Je, _ || "Verification failed", !0));
      }).catch((_) => {
        w(B, null), Re(C.ERROR, _), x("sentinel verification failed:", _);
      }).finally(() => {
        w(Ke, !1);
      });
    }
  }
  function tn(n) {
    var v;
    const f = n.target;
    E() && f && !a(re).contains(f) && (a(k) === C.VERIFIED && K() === !1 || a(k) === C.VERIFIED && K() === "focus" && !((v = a(L)) != null && v.matches(":focus-within")) || l() === "off" && a(k) === C.UNVERIFIED) && wn();
  }
  function rn() {
    E() && a(k) !== C.UNVERIFIED && Rt();
  }
  function il(n) {
    for (const f of Me)
      typeof f.onErrorChange == "function" && f.onErrorChange(a(Je));
  }
  function nn(n) {
    a(k) === C.UNVERIFIED ? De() : E() && K() === "focus" && a(k) === C.VERIFIED && br();
  }
  function ln(n) {
    const f = n.target, v = n.submitter;
    f != null && f.hasAttribute("data-code-challenge-form") || (a(L) && l() === "onsubmit" ? a(k) === C.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), De().then(() => {
      al(v);
    })) : a(k) !== C.VERIFIED && (n.preventDefault(), n.stopPropagation(), a(k) === C.VERIFYING && an()) : a(L) && E() && l() === "off" && a(k) === C.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), br()));
  }
  function on() {
    ut();
  }
  function an() {
    a(k) === C.VERIFYING && a(P).waitAlert && alert(a(P).waitAlert);
  }
  function sn() {
    a(Ve) ? a(Ve).paused ? (a(Ve).currentTime = 0, a(Ve).play()) : a(Ve).pause() : (w(_r, !0), requestAnimationFrame(() => {
      var n;
      (n = a(Ve)) == null || n.play();
    }));
  }
  function ll(n) {
    for (const f of Me)
      typeof f.onStateChange == "function" && f.onStateChange(a(k));
    E() && a(k) !== C.UNVERIFIED && requestAnimationFrame(() => {
      Rt();
    }), w(Ct, a(k) === C.VERIFIED);
  }
  function un() {
    E() && Rt();
  }
  function fn(n) {
    return JSON.parse(n);
  }
  async function ol(n) {
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
        text: pr,
        timeZone: Ht
      } = Ji();
      f.blockedCountries = _, f.classifier = A, f.disableRules = p, f.email = I === !1 ? void 0 : Wi(I), f.expectedCountries = X, f.expectedLanguages = j || (Wr ? [Wr] : void 0), f.fields = ae === !1 ? void 0 : Qr(ae), f.ipAddress = qe === !1 ? void 0 : qe || "auto", f.text = pr, f.timeZone = Ht === !1 ? void 0 : Ht || Gn();
    }
    const v = await zr()(te(), {
      body: JSON.stringify(f),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (!v || !(v instanceof Response))
      throw new Error("Custom fetch function did not return a response.");
    if (v.status !== 200)
      throw new Error(`Server responded with ${v.status}.`);
    const b = await v.json();
    if (b != null && b.payload && w(Te, b.payload, !0), Fe("serververification", b), u() && b.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  async function cn(n, f) {
    if (!te())
      throw new Error("Attribute verifyurl not set.");
    x("requesting sentinel verification from", te());
    const v = { code: f, payload: n };
    We() && (v.fields = We().fields ? Qr() : void 0, v.timeZone = We().timeZone ? Gn() : void 0);
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
    return _ != null && _.payload && w(Te, _.payload, !0), Fe("sentinelverification", _), _;
  }
  function al(n) {
    var f;
    a(L) && "requestSubmit" in a(L) ? a(L).requestSubmit(n) : (f = a(L)) != null && f.reportValidity() && (n ? n.click() : a(L).submit());
  }
  function mr(n) {
    x("expire", n), Ie && (clearTimeout(Ie), Ie = null), n < 1 ? Kr() : Ie = setTimeout(Kr, n);
  }
  function dn(n) {
    x("floating", n), E() !== n && (a(re).style.left = "", a(re).style.top = ""), E(n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : E()), E() ? (l() || l("onsubmit"), document.addEventListener("scroll", rn), document.addEventListener("click", tn), window.addEventListener("resize", un)) : l() === "onsubmit" && l(void 0);
  }
  function hn(n) {
    if (!n.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (n.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!Zr.includes(n.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${Zr.join(", ")}`);
    if (!n.challenge || n.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!n.salt || n.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function vn(n) {
    let f = null;
    if ("Worker" in window) {
      try {
        f = await sl(n, n.maxNumber || n.maxnumber || be());
      } catch (v) {
        x(v);
      }
      if ((f == null ? void 0 : f.number) !== void 0 || "obfuscated" in n)
        return { data: n, solution: f };
    }
    if ("obfuscated" in n) {
      const v = await la(n.obfuscated, n.key, n.maxNumber || n.maxnumber);
      return { data: n, solution: await v.promise };
    }
    return {
      data: n,
      solution: await ra(n.challenge, n.salt, n.algorithm, n.maxNumber || n.maxnumber || be()).promise
    };
  }
  async function sl(n, f = typeof ve() == "number" ? ve() : n.maxNumber || n.maxnumber || be(), v = Math.ceil(at())) {
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
  function gn(n) {
    n.obfuscated !== void 0 && Oe(n.obfuscated), n.auto !== void 0 && (l(n.auto), l() === "onload" && (Oe() ? It() : De())), n.blockspam !== void 0 && u(!!n.blockspam), n.customfetch !== void 0 && m(n.customfetch), n.floatinganchor !== void 0 && M(n.floatinganchor), n.delay !== void 0 && g(n.delay), n.floatingoffset !== void 0 && ce(n.floatingoffset), n.floating !== void 0 && dn(n.floating), n.expire !== void 0 && (mr(n.expire), S(n.expire)), n.challenge && (c(typeof n.challenge == "string" ? n.challenge : JSON.stringify(n.challenge)), hn(a(vr))), n.challengeurl !== void 0 && s(n.challengeurl), n.debug !== void 0 && h(!!n.debug), n.hidefooter !== void 0 && ee(!!n.hidefooter), n.hidelogo !== void 0 && z(!!n.hidelogo), n.language !== void 0 && ot(Xr(o(), [n.language])), n.maxnumber !== void 0 && be(+n.maxnumber), n.mockerror !== void 0 && pt(!!n.mockerror), n.name !== void 0 && oe(n.name), n.refetchonexpire !== void 0 && yt(!!n.refetchonexpire), n.sentinel !== void 0 && typeof n.sentinel == "object" && We(n.sentinel), n.spamfilter !== void 0 && Ae(typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && ot(typeof n.strings == "string" ? n.strings : JSON.stringify(n.strings)), n.test !== void 0 && ve(typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && te(n.verifyurl), n.workers !== void 0 && at(+n.workers), n.workerurl !== void 0 && Et(n.workerurl);
  }
  function _n() {
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
  function mn() {
    return a(st);
  }
  function ul(n) {
    return Me.find((f) => f.constructor.pluginName === n);
  }
  function bn() {
    return a(k);
  }
  function wn() {
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
    Ie && (clearTimeout(Ie), Ie = null), w(Ct, !1), w(Te, null), w(B, null), w(_r, !1), w(H, null), Re(n, f);
  }
  function pn(n) {
    w(st, n, !0);
  }
  function Re(n, f = null) {
    w(k, n, !0), w(Je, f, !0), Fe("statechange", {
      payload: a(Te),
      state: a(k)
    });
  }
  function br() {
    a(re).style.display = "block", E() && Rt();
  }
  async function De() {
    return ut(C.VERIFYING), await new Promise((n) => setTimeout(n, g() || 0)), Zi().then((n) => (hn(n), x("challenge", n), vn(n))).then(({ data: n, solution: f }) => {
      var v;
      if (x("solution", f), !f || n && "challenge" in n && !("clearText" in f))
        if ((f == null ? void 0 : f.number) !== void 0 && "challenge" in n)
          if (te() && "codeChallenge" in n)
            ((v = document.activeElement) == null ? void 0 : v.tagName) === "INPUT" && y() === !1 && document.activeElement.blur(), w(B, { challenge: n, solution: f }, !0);
          else {
            if (te() && We() !== void 0)
              return cn(Ut(n, f));
            if (te())
              return ol(Ut(n, f));
            w(Te, Ut(n, f), !0), x("payload", a(Te));
          }
        else
          throw x("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      a(B) ? (Re(C.CODE), Rr().then(() => {
        Fe("code", { codeChallenge: a(B) });
      })) : (Re(C.VERIFIED), x("verified"), Rr().then(() => {
        Fe("verified", { payload: a(Te) });
      }));
    }).catch((n) => {
      x(n), Re(C.ERROR, n.message);
    });
  }
  var yn = Aa(), En = xt(yn);
  Fo(En, t, "default", {});
  var $t = W(En, 2), wr = Z($t), jt = Z(wr);
  let Cn;
  var An = Z(jt);
  {
    var fl = (n) => {
      $r(n);
    };
    J(An, (n) => {
      a(k) === C.VERIFYING && n(fl);
    });
  }
  var ze = W(An, 2);
  jn(ze), ze.__change = [
    ua,
    k,
    Ae,
    L,
    Ct,
    Oe,
    It,
    De
  ], Zt(ze, (n) => w(gr, n), () => a(gr)), G(jt);
  var Bt = W(jt, 2), cl = Z(Bt);
  {
    var dl = (n) => {
      var f = Gt(), v = xt(f);
      Xe(v, () => a(P).verified), q(n, f);
    }, hl = (n, f) => {
      {
        var v = (_) => {
          var A = Gt(), p = xt(A);
          Xe(p, () => a(P).verifying), q(_, A);
        }, b = (_, A) => {
          {
            var p = (j) => {
              var X = Gt(), ae = xt(X);
              Xe(ae, () => a(P).verificationRequired), q(j, X);
            }, I = (j) => {
              var X = Gt(), ae = xt(X);
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
    J(cl, (n) => {
      a(k) === C.VERIFIED ? n(dl) : n(hl, !1);
    });
  }
  G(Bt);
  var In = W(Bt, 2);
  {
    var vl = (n) => {
      var f = ca();
      jn(f), $e(() => {
        N(f, "name", oe()), jo(f, a(Te));
      }), q(n, f);
    };
    J(In, (n) => {
      a(k) === C.VERIFIED && n(vl);
    });
  }
  var Rn = W(In, 2);
  {
    var gl = (n) => {
      var f = da(), v = Z(f);
      N(v, "href", Hi), G(f), $e(() => N(v, "aria-label", a(P).ariaLinkLabel)), q(n, f);
    };
    J(Rn, (n) => {
      (z() !== !0 || a(hr)) && n(gl);
    });
  }
  var _l = W(Rn, 2);
  {
    var ml = (n) => {
      var f = ba(), v = W(Z(f), 2), b = Z(v), _ = W(b, 2);
      So(_, !y()), _.__keydown = [
        aa,
        sn
      ];
      var A = W(_, 2), p = Z(A), I = Z(p);
      {
        var j = (we) => {
          var Y = _a();
          Y.__click = sn;
          var Yt = Z(Y);
          {
            var kt = (ft) => {
              $r(ft, () => 20);
            }, Il = (ft, Rl) => {
              {
                var $l = (ct) => {
                  var yr = ha();
                  q(ct, yr);
                }, kl = (ct, yr) => {
                  {
                    var xl = (dt) => {
                      var Er = va();
                      q(dt, Er);
                    }, Sl = (dt) => {
                      var Er = ga();
                      q(dt, Er);
                    };
                    J(
                      ct,
                      (dt) => {
                        a(H) === Q.PLAYING ? dt(xl) : dt(Sl, !1);
                      },
                      yr
                    );
                  }
                };
                J(
                  ft,
                  (ct) => {
                    a(H) === Q.ERROR ? ct($l) : ct(kl, !1);
                  },
                  Rl
                );
              }
            };
            J(Yt, (ft) => {
              a(H) === Q.LOADING ? ft(kt) : ft(Il, !1);
            });
          }
          G(Y), $e(() => {
            N(Y, "title", a(P).getAudioChallenge), Y.disabled = a(H) === Q.LOADING || a(H) === Q.ERROR || a(Ke), N(Y, "aria-label", a(H) === Q.LOADING ? a(P).loading : a(P).getAudioChallenge);
          }), q(we, Y);
        };
        J(I, (we) => {
          a(B).challenge.codeChallenge.audio && we(j);
        });
      }
      var X = W(I, 2);
      X.__click = [sa, De], G(p);
      var ae = W(p, 2), qe = Z(ae);
      {
        var pr = (we) => {
          $r(we, () => 16);
        };
        J(qe, (we) => {
          a(Ke) && we(pr);
        });
      }
      var Ht = W(qe);
      G(ae), G(A);
      var Cl = W(A, 2);
      {
        var Al = (we) => {
          var Y = ma(), Yt = Z(Y);
          G(Y), Zt(Y, (kt) => w(Ve, kt), () => a(Ve)), $e((kt) => N(Yt, "src", kt), [
            () => en(a(B).challenge.codeChallenge.audio, { language: U() })
          ]), Ue("loadstart", Y, el), Ue("canplay", Y, Qi), Ue("pause", Y, rl), Ue("playing", Y, tl), Ue("ended", Y, zi), Ue("error", Yt, Xi), q(we, Y);
        };
        J(Cl, (we) => {
          a(B).challenge.codeChallenge.audio && a(_r) && we(Al);
        });
      }
      G(v), G(f), $e(() => {
        N(f, "aria-label", a(P).verificationRequired), N(b, "src", a(B).challenge.codeChallenge.image), N(_, "minlength", a(B).challenge.codeChallenge.length || 1), N(_, "maxlength", a(B).challenge.codeChallenge.length), N(_, "placeholder", a(P).enterCode), N(_, "aria-label", a(H) === Q.LOADING ? a(P).loading : a(H) === Q.PLAYING ? "" : a(P).enterCodeAria), N(_, "aria-live", a(H) ? "assertive" : "polite"), N(_, "aria-busy", a(H) === Q.LOADING), _.disabled = a(Ke), N(X, "aria-label", a(P).reload), N(X, "title", a(P).reload), X.disabled = a(Ke), ae.disabled = a(Ke), N(ae, "aria-label", a(P).verify), Lo(Ht, ` ${a(P).verify ?? ""}`);
      }), Ue("submit", v, nl, !0), q(n, f);
    };
    J(_l, (n) => {
      var f;
      (f = a(B)) != null && f.challenge.codeChallenge && n(ml);
    });
  }
  G(wr);
  var $n = W(wr, 2);
  {
    var bl = (n) => {
      var f = ya(), v = W(Z(f), 2);
      {
        var b = (A) => {
          var p = wa(), I = Z(p);
          Xe(I, () => a(P).expired), G(p), $e(() => N(p, "title", a(Je))), q(A, p);
        }, _ = (A) => {
          var p = pa(), I = Z(p);
          Xe(I, () => a(P).error), G(p), $e(() => N(p, "title", a(Je))), q(A, p);
        };
        J(v, (A) => {
          a(k) === C.EXPIRED ? A(b) : A(_, !1);
        });
      }
      G(f), q(n, f);
    };
    J($n, (n) => {
      (a(Je) || a(k) === C.EXPIRED) && n(bl);
    });
  }
  var kn = W($n, 2);
  {
    var wl = (n) => {
      var f = Ea(), v = Z(f), b = Z(v);
      Xe(b, () => a(P).footer), G(v), G(f), q(n, f);
    };
    J(kn, (n) => {
      a(P).footer && (ee() !== !0 || a(hr)) && n(wl);
    });
  }
  var pl = W(kn, 2);
  {
    var yl = (n) => {
      var f = Ca();
      Zt(f, (v) => w(At, v), () => a(At)), q(n, f);
    };
    J(pl, (n) => {
      E() && n(yl);
    });
  }
  G($t), Zt($t, (n) => w(re, n), () => a(re)), $e(
    (n) => {
      N($t, "data-state", a(k)), N($t, "data-floating", E()), Cn = Mo(jt, 1, "altcha-checkbox", null, Cn, n), N(ze, "id", a(Jr)), ze.required = l() !== "onsubmit" && (!E() || l() !== "off"), N(Bt, "for", a(Jr));
    },
    [
      () => ({
        "altcha-checkbox-verifying": a(k) === C.VERIFYING
      })
    ]
  ), Ue("invalid", ze, an), Ho(ze, () => a(Ct), (n) => w(Ct, n)), q(e, yn);
  var El = xi({
    clarify: It,
    configure: gn,
    getConfiguration: _n,
    getFloatingAnchor: mn,
    getPlugin: ul,
    getState: bn,
    hide: wn,
    repositionFloating: Rt,
    reset: ut,
    setFloatingAnchor: pn,
    setState: Re,
    show: br,
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
  return i(), El;
}
Do(["change", "keydown", "click"]);
customElements.define("altcha-widget", Qo(
  Ia,
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
  Ia as Altcha
};
