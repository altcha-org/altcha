var Vl = Object.defineProperty;
var Mn = (e) => {
  throw TypeError(e);
};
var Ml = (e, t, r) => t in e ? Vl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Ee = (e, t, r) => Ml(e, typeof t != "symbol" ? t + "" : t, r), qn = (e, t, r) => t.has(e) || Mn("Cannot " + r);
var se = (e, t, r) => (qn(e, t, "read from private field"), r ? r.call(e) : t.get(e)), xr = (e, t, r) => t.has(e) ? Mn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), Sr = (e, t, r, i) => (qn(e, t, "write to private field"), i ? i.call(e, r) : t.set(e, r), r);
const ql = "5";
var ti;
typeof window < "u" && ((ti = window.__svelte ?? (window.__svelte = {})).v ?? (ti.v = /* @__PURE__ */ new Set())).add(ql);
const Ul = 1, Bl = 4, jl = 8, Hl = 16, Yl = 1, Gl = 2, Br = "[", ri = "[!", ni = "]", Et = {}, ue = Symbol(), Zl = "http://www.w3.org/1999/xhtml", Un = !1;
function ii(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var li = Array.isArray, Wl = Array.prototype.indexOf, Jl = Array.from, ar = Object.keys, Bt = Object.defineProperty, it = Object.getOwnPropertyDescriptor, Kl = Object.getOwnPropertyDescriptors, Xl = Object.prototype, zl = Array.prototype, oi = Object.getPrototypeOf, Bn = Object.isExtensible;
const Ct = () => {
};
function ai(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Ql(e, t, r = !1) {
  return e === void 0 ? r ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
const Ce = 2, si = 4, hr = 8, jr = 16, Fe = 32, at = 64, sr = 128, he = 256, ur = 512, fe = 1024, De = 2048, st = 4096, At = 8192, gr = 16384, eo = 32768, Hr = 65536, to = 1 << 19, ui = 1 << 20, Lr = 1 << 21, qt = Symbol("$state"), fi = Symbol("legacy props"), ro = Symbol("");
function no(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function io() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function lo(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function oo() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ao() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function so(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function uo() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function fo() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function co() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function _r(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let F = !1;
function wt(e) {
  F = e;
}
let O;
function Ye(e) {
  if (e === null)
    throw _r(), Et;
  return O = e;
}
function It() {
  return Ye(
    /** @type {TemplateNode} */
    /* @__PURE__ */ We(O)
  );
}
function Z(e) {
  if (F) {
    if (/* @__PURE__ */ We(O) !== null)
      throw _r(), Et;
    O = e;
  }
}
function vo() {
  for (var e = 0, t = O; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === ni) {
        if (e === 0) return t;
        e -= 1;
      } else (r === Br || r === ri) && (e += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ We(t)
    );
    t.remove(), t = i;
  }
}
let ho = !1;
function je(e) {
  if (typeof e != "object" || e === null || qt in e)
    return e;
  const t = oi(e);
  if (t !== Xl && t !== zl)
    return e;
  var r = /* @__PURE__ */ new Map(), i = li(e), a = /* @__PURE__ */ L(0), l = T, f = (s) => {
    var c = T;
    Le(l);
    var d = s();
    return Le(c), d;
  };
  return i && r.set("length", /* @__PURE__ */ L(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, c, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && uo();
        var b = r.get(c);
        return b === void 0 ? (b = f(() => /* @__PURE__ */ L(d.value)), r.set(c, b)) : y(
          b,
          f(() => je(d.value))
        ), !0;
      },
      deleteProperty(s, c) {
        var d = r.get(c);
        if (d === void 0)
          c in s && (r.set(
            c,
            f(() => /* @__PURE__ */ L(ue))
          ), Tr(a));
        else {
          if (i && typeof c == "string") {
            var b = (
              /** @type {Source<number>} */
              r.get("length")
            ), h = Number(c);
            Number.isInteger(h) && h < b.v && y(b, h);
          }
          y(d, ue), Tr(a);
        }
        return !0;
      },
      get(s, c, d) {
        var p;
        if (c === qt)
          return e;
        var b = r.get(c), h = c in s;
        if (b === void 0 && (!h || (p = it(s, c)) != null && p.writable) && (b = f(() => /* @__PURE__ */ L(je(h ? s[c] : ue))), r.set(c, b)), b !== void 0) {
          var m = o(b);
          return m === ue ? void 0 : m;
        }
        return Reflect.get(s, c, d);
      },
      getOwnPropertyDescriptor(s, c) {
        var d = Reflect.getOwnPropertyDescriptor(s, c);
        if (d && "value" in d) {
          var b = r.get(c);
          b && (d.value = o(b));
        } else if (d === void 0) {
          var h = r.get(c), m = h == null ? void 0 : h.v;
          if (h !== void 0 && m !== ue)
            return {
              enumerable: !0,
              configurable: !0,
              value: m,
              writable: !0
            };
        }
        return d;
      },
      has(s, c) {
        var m;
        if (c === qt)
          return !0;
        var d = r.get(c), b = d !== void 0 && d.v !== ue || Reflect.has(s, c);
        if (d !== void 0 || N !== null && (!b || (m = it(s, c)) != null && m.writable)) {
          d === void 0 && (d = f(() => /* @__PURE__ */ L(b ? je(s[c]) : ue)), r.set(c, d));
          var h = o(d);
          if (h === ue)
            return !1;
        }
        return b;
      },
      set(s, c, d, b) {
        var X;
        var h = r.get(c), m = c in s;
        if (i && c === "length")
          for (var p = d; p < /** @type {Source<number>} */
          h.v; p += 1) {
            var x = r.get(p + "");
            x !== void 0 ? y(x, ue) : p in s && (x = f(() => /* @__PURE__ */ L(ue)), r.set(p + "", x));
          }
        h === void 0 ? (!m || (X = it(s, c)) != null && X.writable) && (h = f(() => /* @__PURE__ */ L(void 0)), y(
          h,
          f(() => je(d))
        ), r.set(c, h)) : (m = h.v !== ue, y(
          h,
          f(() => je(d))
        ));
        var E = Reflect.getOwnPropertyDescriptor(s, c);
        if (E != null && E.set && E.set.call(b, d), !m) {
          if (i && typeof c == "string") {
            var q = (
              /** @type {Source<number>} */
              r.get("length")
            ), ce = Number(c);
            Number.isInteger(ce) && ce >= q.v && y(q, ce + 1);
          }
          Tr(a);
        }
        return !0;
      },
      ownKeys(s) {
        o(a);
        var c = Reflect.ownKeys(s).filter((h) => {
          var m = r.get(h);
          return m === void 0 || m.v !== ue;
        });
        for (var [d, b] of r)
          b.v !== ue && !(d in s) && c.push(d);
        return c;
      },
      setPrototypeOf() {
        fo();
      }
    }
  );
}
function Tr(e, t = 1) {
  y(e, e.v + t);
}
var jn, ci, di, vi;
function Pr() {
  if (jn === void 0) {
    jn = window, ci = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    di = it(t, "firstChild").get, vi = it(t, "nextSibling").get, Bn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Bn(r) && (r.__t = void 0);
  }
}
function mr(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function be(e) {
  return di.call(e);
}
// @__NO_SIDE_EFFECTS__
function We(e) {
  return vi.call(e);
}
function W(e, t) {
  if (!F)
    return /* @__PURE__ */ be(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ be(O)
  );
  return r === null && (r = O.appendChild(mr())), Ye(r), r;
}
function Ft(e, t) {
  if (!F) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ be(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ We(r) : r;
  }
  return O;
}
function J(e, t = 1, r = !1) {
  let i = F ? O : e;
  for (var a; t--; )
    a = i, i = /** @type {TemplateNode} */
    /* @__PURE__ */ We(i);
  if (!F)
    return i;
  var l = i == null ? void 0 : i.nodeType;
  if (r && l !== 3) {
    var f = mr();
    return i === null ? a == null || a.after(f) : i.before(f), Ye(f), f;
  }
  return Ye(i), /** @type {TemplateNode} */
  i;
}
function go(e) {
  e.textContent = "";
}
function hi(e) {
  return e === this.v;
}
function gi(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Yr(e) {
  return !gi(e, this.v);
}
// @__NO_SIDE_EFFECTS__
function br(e) {
  var t = Ce | De, r = T !== null && (T.f & Ce) !== 0 ? (
    /** @type {Derived} */
    T
  ) : null;
  return N === null || r !== null && (r.f & he) !== 0 ? t |= he : N.f |= ui, {
    ctx: le,
    deps: null,
    effects: null,
    equals: hi,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: r ?? N
  };
}
// @__NO_SIDE_EFFECTS__
function Vt(e) {
  const t = /* @__PURE__ */ br(e);
  return $i(t), t;
}
// @__NO_SIDE_EFFECTS__
function _o(e) {
  const t = /* @__PURE__ */ br(e);
  return t.equals = Yr, t;
}
function _i(e) {
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
    if ((t.f & Ce) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function mi(e) {
  var t, r = N;
  Ze(mo(e));
  try {
    _i(e), t = Ni(e);
  } finally {
    Ze(r);
  }
  return t;
}
function bi(e) {
  var t = mi(e), r = (He || (e.f & he) !== 0) && e.deps !== null ? st : fe;
  Ae(e, r), e.equals(t) || (e.v = t, e.wv = Si());
}
function bo(e) {
  N === null && T === null && lo(), T !== null && (T.f & he) !== 0 && N === null && io(), Gt && no();
}
function yo(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function ut(e, t, r, i = !0) {
  var a = N, l = {
    ctx: le,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | De,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: a,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (r)
    try {
      Kr(l), l.f |= eo;
    } catch (c) {
      throw Ge(l), c;
    }
  else t !== null && pr(l);
  var f = r && l.deps === null && l.first === null && l.nodes_start === null && l.teardown === null && (l.f & (ui | sr)) === 0;
  if (!f && i && (a !== null && yo(l, a), T !== null && (T.f & Ce) !== 0)) {
    var s = (
      /** @type {Derived} */
      T
    );
    (s.effects ?? (s.effects = [])).push(l);
  }
  return l;
}
function Gr(e) {
  const t = ut(hr, null, !1);
  return Ae(t, fe), t.teardown = e, t;
}
function Or(e) {
  bo();
  var t = N !== null && (N.f & Fe) !== 0 && le !== null && !le.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      le
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: N,
      reaction: T
    });
  } else {
    var i = Zr(e);
    return i;
  }
}
function po(e) {
  const t = ut(at, e, !0);
  return () => {
    Ge(t);
  };
}
function wo(e) {
  const t = ut(at, e, !0);
  return (r = {}) => new Promise((i) => {
    r.outro ? Vr(t, () => {
      Ge(t), i(void 0);
    }) : (Ge(t), i(void 0));
  });
}
function Zr(e) {
  return ut(si, e, !1);
}
function Wr(e) {
  return ut(hr, e, !0);
}
function Se(e, t = [], r = br) {
  const i = t.map(r);
  return yi(() => e(...i.map(o)));
}
function yi(e, t = 0) {
  return ut(hr | jr | t, e, !0);
}
function Fr(e, t = !0) {
  return ut(hr | Fe, e, !0, t);
}
function pi(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Gt, i = T;
    Yn(!0), Le(null);
    try {
      t.call(null);
    } finally {
      Yn(r), Le(i);
    }
  }
}
function wi(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var i = r.next;
    (r.f & at) !== 0 ? r.parent = null : Ge(r, t), r = i;
  }
}
function Eo(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Fe) === 0 && Ge(t), t = r;
  }
}
function Ge(e, t = !0) {
  var r = !1;
  (t || (e.f & to) !== 0) && e.nodes_start !== null && (Ei(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), r = !0), wi(e, t && !r), vr(e, 0), Ae(e, gr);
  var i = e.transitions;
  if (i !== null)
    for (const l of i)
      l.stop();
  pi(e);
  var a = e.parent;
  a !== null && a.first !== null && Ci(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function Ei(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ We(e)
    );
    e.remove(), e = r;
  }
}
function Ci(e) {
  var t = e.parent, r = e.prev, i = e.next;
  r !== null && (r.next = i), i !== null && (i.prev = r), t !== null && (t.first === e && (t.first = i), t.last === e && (t.last = r));
}
function Vr(e, t) {
  var r = [];
  Ai(e, r, !0), Co(r, () => {
    Ge(e), t && t();
  });
}
function Co(e, t) {
  var r = e.length;
  if (r > 0) {
    var i = () => --r || t();
    for (var a of e)
      a.out(i);
  } else
    t();
}
function Ai(e, t, r) {
  if ((e.f & At) === 0) {
    if (e.f ^= At, e.transitions !== null)
      for (const f of e.transitions)
        (f.is_global || r) && t.push(f);
    for (var i = e.first; i !== null; ) {
      var a = i.next, l = (i.f & Hr) !== 0 || (i.f & Fe) !== 0;
      Ai(i, t, l ? r : !1), i = a;
    }
  }
}
function Hn(e) {
  Ii(e, !0);
}
function Ii(e, t) {
  if ((e.f & At) !== 0) {
    e.f ^= At, (e.f & fe) === 0 && (e.f ^= fe), Zt(e) && (Ae(e, De), pr(e));
    for (var r = e.first; r !== null; ) {
      var i = r.next, a = (r.f & Hr) !== 0 || (r.f & Fe) !== 0;
      Ii(r, a ? t : !1), r = i;
    }
    if (e.transitions !== null)
      for (const l of e.transitions)
        (l.is_global || t) && l.in();
  }
}
const Ao = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let jt = [], Ht = [];
function Ri() {
  var e = jt;
  jt = [], ai(e);
}
function ki() {
  var e = Ht;
  Ht = [], ai(e);
}
function Jr(e) {
  jt.length === 0 && queueMicrotask(Ri), jt.push(e);
}
function Io(e) {
  Ht.length === 0 && Ao(ki), Ht.push(e);
}
function Ro() {
  jt.length > 0 && Ri(), Ht.length > 0 && ki();
}
let ir = !1, fr = !1, cr = null, lt = !1, Gt = !1;
function Yn(e) {
  Gt = e;
}
let Ut = [];
let T = null, Te = !1;
function Le(e) {
  T = e;
}
let N = null;
function Ze(e) {
  N = e;
}
let ie = null;
function $i(e) {
  T !== null && T.f & Lr && (ie === null ? ie = [e] : ie.push(e));
}
let ne = null, ve = 0, _e = null;
function ko(e) {
  _e = e;
}
let xi = 1, dr = 0, He = !1;
function Si() {
  return ++xi;
}
function Zt(e) {
  var h;
  var t = e.f;
  if ((t & De) !== 0)
    return !0;
  if ((t & st) !== 0) {
    var r = e.deps, i = (t & he) !== 0;
    if (r !== null) {
      var a, l, f = (t & ur) !== 0, s = i && N !== null && !He, c = r.length;
      if (f || s) {
        var d = (
          /** @type {Derived} */
          e
        ), b = d.parent;
        for (a = 0; a < c; a++)
          l = r[a], (f || !((h = l == null ? void 0 : l.reactions) != null && h.includes(d))) && (l.reactions ?? (l.reactions = [])).push(d);
        f && (d.f ^= ur), s && b !== null && (b.f & he) === 0 && (d.f ^= he);
      }
      for (a = 0; a < c; a++)
        if (l = r[a], Zt(
          /** @type {Derived} */
          l
        ) && bi(
          /** @type {Derived} */
          l
        ), l.wv > e.wv)
          return !0;
    }
    (!i || N !== null && !He) && Ae(e, fe);
  }
  return !1;
}
function $o(e, t) {
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
function Gn(e) {
  return (e.f & gr) === 0 && (e.parent === null || (e.parent.f & sr) === 0);
}
function yr(e, t, r, i) {
  if (ir) {
    if (r === null && (ir = !1), Gn(t))
      throw e;
    return;
  }
  if (r !== null && (ir = !0), $o(e, t), Gn(t))
    throw e;
}
function Ti(e, t, r = !0) {
  var i = e.reactions;
  if (i !== null)
    for (var a = 0; a < i.length; a++) {
      var l = i[a];
      ie != null && ie.includes(e) || ((l.f & Ce) !== 0 ? Ti(
        /** @type {Derived} */
        l,
        t,
        !1
      ) : t === l && (r ? Ae(l, De) : (l.f & fe) !== 0 && Ae(l, st), pr(
        /** @type {Effect} */
        l
      )));
    }
}
function Ni(e) {
  var p;
  var t = ne, r = ve, i = _e, a = T, l = He, f = ie, s = le, c = Te, d = e.f;
  ne = /** @type {null | Value[]} */
  null, ve = 0, _e = null, He = (d & he) !== 0 && (Te || !lt || T === null), T = (d & (Fe | at)) === 0 ? e : null, ie = null, Zn(e.ctx), Te = !1, dr++, e.f |= Lr;
  try {
    var b = (
      /** @type {Function} */
      (0, e.fn)()
    ), h = e.deps;
    if (ne !== null) {
      var m;
      if (vr(e, ve), h !== null && ve > 0)
        for (h.length = ve + ne.length, m = 0; m < ne.length; m++)
          h[ve + m] = ne[m];
      else
        e.deps = h = ne;
      if (!He)
        for (m = ve; m < h.length; m++)
          ((p = h[m]).reactions ?? (p.reactions = [])).push(e);
    } else h !== null && ve < h.length && (vr(e, ve), h.length = ve);
    if (Vi() && _e !== null && !Te && h !== null && (e.f & (Ce | st | De)) === 0)
      for (m = 0; m < /** @type {Source[]} */
      _e.length; m++)
        Ti(
          _e[m],
          /** @type {Effect} */
          e
        );
    return a !== null && a !== e && (dr++, _e !== null && (i === null ? i = _e : i.push(.../** @type {Source[]} */
    _e))), b;
  } finally {
    ne = t, ve = r, _e = i, T = a, He = l, ie = f, Zn(s), Te = c, e.f ^= Lr;
  }
}
function xo(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var i = Wl.call(r, e);
    if (i !== -1) {
      var a = r.length - 1;
      a === 0 ? r = t.reactions = null : (r[i] = r[a], r.pop());
    }
  }
  r === null && (t.f & Ce) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ne === null || !ne.includes(t)) && (Ae(t, st), (t.f & (he | ur)) === 0 && (t.f ^= ur), _i(
    /** @type {Derived} **/
    t
  ), vr(
    /** @type {Derived} **/
    t,
    0
  ));
}
function vr(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var i = t; i < r.length; i++)
      xo(e, r[i]);
}
function Kr(e) {
  var t = e.f;
  if ((t & gr) === 0) {
    Ae(e, fe);
    var r = N, i = le, a = lt;
    N = e, lt = !0;
    try {
      (t & jr) !== 0 ? Eo(e) : wi(e), pi(e);
      var l = Ni(e);
      e.teardown = typeof l == "function" ? l : null, e.wv = xi;
      var f = e.deps, s;
      Un && ho && e.f & De;
    } catch (c) {
      yr(c, e, r, i || e.ctx);
    } finally {
      lt = a, N = r;
    }
  }
}
function So() {
  try {
    oo();
  } catch (e) {
    if (cr !== null)
      yr(e, cr, null);
    else
      throw e;
  }
}
function Di() {
  var e = lt;
  try {
    var t = 0;
    for (lt = !0; Ut.length > 0; ) {
      t++ > 1e3 && So();
      var r = Ut, i = r.length;
      Ut = [];
      for (var a = 0; a < i; a++) {
        var l = No(r[a]);
        To(l);
      }
      Yt.clear();
    }
  } finally {
    fr = !1, lt = e, cr = null;
  }
}
function To(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var i = e[r];
      if ((i.f & (gr | At)) === 0)
        try {
          Zt(i) && (Kr(i), i.deps === null && i.first === null && i.nodes_start === null && (i.teardown === null ? Ci(i) : i.fn = null));
        } catch (a) {
          yr(a, i, null, i.ctx);
        }
    }
}
function pr(e) {
  fr || (fr = !0, queueMicrotask(Di));
  for (var t = cr = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (at | Fe)) !== 0) {
      if ((r & fe) === 0) return;
      t.f ^= fe;
    }
  }
  Ut.push(t);
}
function No(e) {
  for (var t = [], r = e; r !== null; ) {
    var i = r.f, a = (i & (Fe | at)) !== 0, l = a && (i & fe) !== 0;
    if (!l && (i & At) === 0) {
      if ((i & si) !== 0)
        t.push(r);
      else if (a)
        r.f ^= fe;
      else
        try {
          Zt(r) && Kr(r);
        } catch (c) {
          yr(c, r, null, r.ctx);
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
function A(e) {
  for (var t; ; ) {
    if (Ro(), Ut.length === 0)
      return (
        /** @type {T} */
        t
      );
    fr = !0, Di();
  }
}
async function Nr() {
  await Promise.resolve(), A();
}
function o(e) {
  var t = e.f, r = (t & Ce) !== 0;
  if (T !== null && !Te) {
    if (!(ie != null && ie.includes(e))) {
      var i = T.deps;
      e.rv < dr && (e.rv = dr, ne === null && i !== null && i[ve] === e ? ve++ : ne === null ? ne = [e] : (!He || !ne.includes(e)) && ne.push(e));
    }
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var a = (
      /** @type {Derived} */
      e
    ), l = a.parent;
    l !== null && (l.f & he) === 0 && (a.f ^= he);
  }
  return r && (a = /** @type {Derived} */
  e, Zt(a) && bi(a)), Gt && Yt.has(e) ? Yt.get(e) : e.v;
}
function ot(e) {
  var t = Te;
  try {
    return Te = !0, e();
  } finally {
    Te = t;
  }
}
const Do = -7169;
function Ae(e, t) {
  e.f = e.f & Do | t;
}
const Yt = /* @__PURE__ */ new Map();
function Li(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: hi,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function L(e, t) {
  const r = Li(e);
  return $i(r), r;
}
// @__NO_SIDE_EFFECTS__
function Xr(e, t = !1) {
  const r = Li(e);
  return t || (r.equals = Yr), r;
}
function y(e, t, r = !1) {
  T !== null && !Te && Vi() && (T.f & (Ce | jr)) !== 0 && !(ie != null && ie.includes(e)) && co();
  let i = r ? je(t) : t;
  return Lo(e, i);
}
function Lo(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    Gt ? Yt.set(e, t) : Yt.set(e, r), e.v = t, (e.f & Ce) !== 0 && ((e.f & De) !== 0 && mi(
      /** @type {Derived} */
      e
    ), Ae(e, (e.f & he) === 0 ? fe : st)), e.wv = Si(), Pi(e, De), N !== null && (N.f & fe) !== 0 && (N.f & (Fe | at)) === 0 && (_e === null ? ko([e]) : _e.push(e));
  }
  return t;
}
function Pi(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, a = 0; a < i; a++) {
      var l = r[a], f = l.f;
      (f & De) === 0 && (Ae(l, t), (f & (fe | he)) !== 0 && ((f & Ce) !== 0 ? Pi(
        /** @type {Derived} */
        l,
        st
      ) : pr(
        /** @type {Effect} */
        l
      )));
    }
}
let le = null;
function Zn(e) {
  le = e;
}
function Oi(e, t = !1, r) {
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
  Gr(() => {
    i.d = !0;
  });
}
function Fi(e) {
  const t = le;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const f = t.e;
    if (f !== null) {
      var r = N, i = T;
      t.e = null;
      try {
        for (var a = 0; a < f.length; a++) {
          var l = f[a];
          Ze(l.effect), Le(l.reaction), Zr(l.fn);
        }
      } finally {
        Ze(r), Le(i);
      }
    }
    le = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Vi() {
  return !0;
}
const Po = ["touchstart", "touchmove"];
function Oo(e) {
  return Po.includes(e);
}
function Fo(e, t) {
  if (t) {
    const r = document.body;
    e.autofocus = !0, Jr(() => {
      document.activeElement === r && e.focus();
    });
  }
}
let Wn = !1;
function Mi() {
  Wn || (Wn = !0, document.addEventListener(
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
  var t = T, r = N;
  Le(null), Ze(null);
  try {
    return e();
  } finally {
    Le(t), Ze(r);
  }
}
function Vo(e, t, r, i = r) {
  e.addEventListener(t, () => qi(r));
  const a = e.__on_r;
  a ? e.__on_r = () => {
    a(), i(!0);
  } : e.__on_r = () => i(!0), Mi();
}
const Ui = /* @__PURE__ */ new Set(), Mr = /* @__PURE__ */ new Set();
function Mo(e, t, r, i = {}) {
  function a(l) {
    if (i.capture || Mt.call(t, l), !l.cancelBubble)
      return qi(() => r == null ? void 0 : r.call(this, l));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Jr(() => {
    t.addEventListener(e, a, i);
  }) : t.addEventListener(e, a, i), a;
}
function Be(e, t, r, i, a) {
  var l = { capture: i, passive: a }, f = Mo(e, t, r, l);
  (t === document.body || t === window || t === document) && Gr(() => {
    t.removeEventListener(e, f, l);
  });
}
function qo(e) {
  for (var t = 0; t < e.length; t++)
    Ui.add(e[t]);
  for (var r of Mr)
    r(e);
}
function Mt(e) {
  var X;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), i = e.type, a = ((X = e.composedPath) == null ? void 0 : X.call(e)) || [], l = (
    /** @type {null | Element} */
    a[0] || e.target
  ), f = 0, s = e.__root;
  if (s) {
    var c = a.indexOf(s);
    if (c !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var d = a.indexOf(t);
    if (d === -1)
      return;
    c <= d && (f = c);
  }
  if (l = /** @type {Element} */
  a[f] || e.target, l !== t) {
    Bt(e, "currentTarget", {
      configurable: !0,
      get() {
        return l || r;
      }
    });
    var b = T, h = N;
    Le(null), Ze(null);
    try {
      for (var m, p = []; l !== null; ) {
        var x = l.assignedSlot || l.parentNode || /** @type {any} */
        l.host || null;
        try {
          var E = l["__" + i];
          if (E != null && (!/** @type {any} */
          l.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === l))
            if (li(E)) {
              var [q, ...ce] = E;
              q.apply(l, [e, ...ce]);
            } else
              E.call(l, e);
        } catch (te) {
          m ? p.push(te) : m = te;
        }
        if (e.cancelBubble || x === t || x === null)
          break;
        l = x;
      }
      if (m) {
        for (let te of p)
          queueMicrotask(() => {
            throw te;
          });
        throw m;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Le(b), Ze(h);
    }
  }
}
function zr(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Ne(e, t) {
  var r = (
    /** @type {Effect} */
    N
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function Ie(e, t) {
  var r = (t & Yl) !== 0, i = (t & Gl) !== 0, a, l = !e.startsWith("<!>");
  return () => {
    if (F)
      return Ne(O, null), O;
    a === void 0 && (a = zr(l ? e : "<!>" + e), r || (a = /** @type {Node} */
    /* @__PURE__ */ be(a)));
    var f = (
      /** @type {TemplateNode} */
      i || ci ? document.importNode(a, !0) : a.cloneNode(!0)
    );
    if (r) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ be(f)
      ), c = (
        /** @type {TemplateNode} */
        f.lastChild
      );
      Ne(s, c);
    } else
      Ne(f, f);
    return f;
  };
}
// @__NO_SIDE_EFFECTS__
function wr(e, t, r = "svg") {
  var i = !e.startsWith("<!>"), a = `<${r}>${i ? e : "<!>" + e}</${r}>`, l;
  return () => {
    if (F)
      return Ne(O, null), O;
    if (!l) {
      var f = (
        /** @type {DocumentFragment} */
        zr(a)
      ), s = (
        /** @type {Element} */
        /* @__PURE__ */ be(f)
      );
      l = /** @type {Element} */
      /* @__PURE__ */ be(s);
    }
    var c = (
      /** @type {TemplateNode} */
      l.cloneNode(!0)
    );
    return Ne(c, c), c;
  };
}
function tr() {
  if (F)
    return Ne(O, null), O;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = mr();
  return e.append(t, r), Ne(t, r), e;
}
function U(e, t) {
  if (F) {
    N.nodes_end = O, It();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Uo(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function Bi(e, t) {
  return ji(e, t);
}
function Bo(e, t) {
  Pr(), t.intro = t.intro ?? !1;
  const r = t.target, i = F, a = O;
  try {
    for (var l = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ be(r)
    ); l && (l.nodeType !== 8 || /** @type {Comment} */
    l.data !== Br); )
      l = /** @type {TemplateNode} */
      /* @__PURE__ */ We(l);
    if (!l)
      throw Et;
    wt(!0), Ye(
      /** @type {Comment} */
      l
    ), It();
    const f = ji(e, { ...t, anchor: l });
    if (O === null || O.nodeType !== 8 || /** @type {Comment} */
    O.data !== ni)
      throw _r(), Et;
    return wt(!1), /**  @type {Exports} */
    f;
  } catch (f) {
    if (f === Et)
      return t.recover === !1 && ao(), Pr(), go(r), wt(!1), Bi(e, t);
    throw f;
  } finally {
    wt(i), Ye(a);
  }
}
const yt = /* @__PURE__ */ new Map();
function ji(e, { target: t, anchor: r, props: i = {}, events: a, context: l, intro: f = !0 }) {
  Pr();
  var s = /* @__PURE__ */ new Set(), c = (h) => {
    for (var m = 0; m < h.length; m++) {
      var p = h[m];
      if (!s.has(p)) {
        s.add(p);
        var x = Oo(p);
        t.addEventListener(p, Mt, { passive: x });
        var E = yt.get(p);
        E === void 0 ? (document.addEventListener(p, Mt, { passive: x }), yt.set(p, 1)) : yt.set(p, E + 1);
      }
    }
  };
  c(Jl(Ui)), Mr.add(c);
  var d = void 0, b = wo(() => {
    var h = r ?? t.appendChild(mr());
    return Fr(() => {
      if (l) {
        Oi({});
        var m = (
          /** @type {ComponentContext} */
          le
        );
        m.c = l;
      }
      a && (i.$$events = a), F && Ne(
        /** @type {TemplateNode} */
        h,
        null
      ), d = e(h, i) || {}, F && (N.nodes_end = O), l && Fi();
    }), () => {
      var x;
      for (var m of s) {
        t.removeEventListener(m, Mt);
        var p = (
          /** @type {number} */
          yt.get(m)
        );
        --p === 0 ? (document.removeEventListener(m, Mt), yt.delete(m)) : yt.set(m, p);
      }
      Mr.delete(c), h !== r && ((x = h.parentNode) == null || x.removeChild(h));
    };
  });
  return qr.set(d, b), d;
}
let qr = /* @__PURE__ */ new WeakMap();
function jo(e, t) {
  const r = qr.get(e);
  return r ? (qr.delete(e), r(t)) : Promise.resolve();
}
function K(e, t, [r, i] = [0, 0]) {
  F && r === 0 && It();
  var a = e, l = null, f = null, s = ue, c = r > 0 ? Hr : 0, d = !1;
  const b = (m, p = !0) => {
    d = !0, h(p, m);
  }, h = (m, p) => {
    if (s === (s = m)) return;
    let x = !1;
    if (F && i !== -1) {
      if (r === 0) {
        const q = (
          /** @type {Comment} */
          a.data
        );
        q === Br ? i = 0 : q === ri ? i = 1 / 0 : (i = parseInt(q.substring(1)), i !== i && (i = s ? 1 / 0 : -1));
      }
      const E = i > r;
      !!s === E && (a = vo(), Ye(a), wt(!1), x = !0, i = -1);
    }
    s ? (l ? Hn(l) : p && (l = Fr(() => p(a))), f && Vr(f, () => {
      f = null;
    })) : (f ? Hn(f) : p && (f = Fr(() => p(a, [r + 1, i]))), l && Vr(l, () => {
      l = null;
    })), x && wt(!0);
  };
  yi(() => {
    d = !1, t(b), d || h(null, null);
  }, c), F && (a = O);
}
function nt(e, t, r = !1, i = !1, a = !1) {
  var l = e, f = "";
  Se(() => {
    var s = (
      /** @type {Effect} */
      N
    );
    if (f === (f = t() ?? "")) {
      F && It();
      return;
    }
    if (s.nodes_start !== null && (Ei(
      s.nodes_start,
      /** @type {TemplateNode} */
      s.nodes_end
    ), s.nodes_start = s.nodes_end = null), f !== "") {
      if (F) {
        O.data;
        for (var c = It(), d = c; c !== null && (c.nodeType !== 8 || /** @type {Comment} */
        c.data !== ""); )
          d = c, c = /** @type {TemplateNode} */
          /* @__PURE__ */ We(c);
        if (c === null)
          throw _r(), Et;
        Ne(O, d), l = Ye(c);
        return;
      }
      var b = f + "";
      r ? b = `<svg>${b}</svg>` : i && (b = `<math>${b}</math>`);
      var h = zr(b);
      if ((r || i) && (h = /** @type {Element} */
      /* @__PURE__ */ be(h)), Ne(
        /** @type {TemplateNode} */
        /* @__PURE__ */ be(h),
        /** @type {TemplateNode} */
        h.lastChild
      ), r || i)
        for (; /* @__PURE__ */ be(h); )
          l.before(
            /** @type {Node} */
            /* @__PURE__ */ be(h)
          );
      else
        l.before(h);
    }
  });
}
function Ho(e, t, r, i, a) {
  var s;
  F && It();
  var l = (s = t.$$slots) == null ? void 0 : s[r], f = !1;
  l === !0 && (l = t.children, f = !0), l === void 0 || l(e, f ? () => i : i);
}
const Jn = [...` 	
\r\f \v\uFEFF`];
function Yo(e, t, r) {
  var i = "" + e;
  if (r) {
    for (var a in r)
      if (r[a])
        i = i ? i + " " + a : a;
      else if (i.length)
        for (var l = a.length, f = 0; (f = i.indexOf(a, f)) >= 0; ) {
          var s = f + l;
          (f === 0 || Jn.includes(i[f - 1])) && (s === i.length || Jn.includes(i[s])) ? i = (f === 0 ? "" : i.substring(0, f)) + i.substring(s + 1) : f = s;
        }
  }
  return i === "" ? null : i;
}
function Go(e, t, r, i, a, l) {
  var f = e.__className;
  if (F || f !== r || f === void 0) {
    var s = Yo(r, i, l);
    (!F || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : e.className = s), e.__className = r;
  } else if (l && a !== l)
    for (var c in l) {
      var d = !!l[c];
      (a == null || d !== !!a[c]) && e.classList.toggle(c, d);
    }
  return l;
}
const Zo = Symbol("is custom element"), Wo = Symbol("is html");
function Kn(e) {
  if (F) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var i = e.value;
          S(e, "value", null), e.value = i;
        }
        if (e.hasAttribute("checked")) {
          var a = e.checked;
          S(e, "checked", null), e.checked = a;
        }
      }
    };
    e.__on_r = r, Io(r), Mi();
  }
}
function Jo(e, t) {
  var r = Hi(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function S(e, t, r, i) {
  var a = Hi(e);
  F && (a[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || a[t] !== (a[t] = r) && (t === "loading" && (e[ro] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Ko(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Hi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Zo]: e.nodeName.includes("-"),
      [Wo]: e.namespaceURI === Zl
    })
  );
}
var Xn = /* @__PURE__ */ new Map();
function Ko(e) {
  var t = Xn.get(e.nodeName);
  if (t) return t;
  Xn.set(e.nodeName, t = []);
  for (var r, i = e, a = Element.prototype; a !== i; ) {
    r = Kl(i);
    for (var l in r)
      r[l].set && t.push(l);
    i = oi(i);
  }
  return t;
}
function Xo(e, t, r = t) {
  Vo(e, "change", (i) => {
    var a = i ? e.defaultChecked : e.checked;
    r(a);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (F && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  ot(t) == null) && r(e.checked), Wr(() => {
    var i = t();
    e.checked = !!i;
  });
}
function zn(e, t) {
  return e === t || (e == null ? void 0 : e[qt]) === t;
}
function rr(e = {}, t, r, i) {
  return Zr(() => {
    var a, l;
    return Wr(() => {
      a = l, l = [], ot(() => {
        e !== r(...l) && (t(e, ...l), a && zn(r(...a), e) && t(null, ...a));
      });
    }), () => {
      Jr(() => {
        l && zn(r(...l), e) && t(null, ...l);
      });
    };
  }), e;
}
function Yi(e) {
  le === null && ii(), Or(() => {
    const t = ot(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function zo(e) {
  le === null && ii(), Yi(() => () => ot(e));
}
function Gi(e, t, r) {
  if (e == null)
    return t(void 0), Ct;
  const i = ot(
    () => e.subscribe(
      t,
      // @ts-expect-error
      r
    )
  );
  return i.unsubscribe ? () => i.unsubscribe() : i;
}
const pt = [];
function Qo(e, t = Ct) {
  let r = null;
  const i = /* @__PURE__ */ new Set();
  function a(s) {
    if (gi(e, s) && (e = s, r)) {
      const c = !pt.length;
      for (const d of i)
        d[1](), pt.push(d, e);
      if (c) {
        for (let d = 0; d < pt.length; d += 2)
          pt[d][0](pt[d + 1]);
        pt.length = 0;
      }
    }
  }
  function l(s) {
    a(s(
      /** @type {T} */
      e
    ));
  }
  function f(s, c = Ct) {
    const d = [s, c];
    return i.add(d), i.size === 1 && (r = t(a, l) || Ct), s(
      /** @type {T} */
      e
    ), () => {
      i.delete(d), i.size === 0 && r && (r(), r = null);
    };
  }
  return { set: a, update: l, subscribe: f };
}
function lr(e) {
  let t;
  return Gi(e, (r) => t = r)(), t;
}
let nr = !1, Ur = Symbol();
function ea(e, t, r) {
  const i = r[t] ?? (r[t] = {
    store: null,
    source: /* @__PURE__ */ Xr(void 0),
    unsubscribe: Ct
  });
  if (i.store !== e && !(Ur in r))
    if (i.unsubscribe(), i.store = e ?? null, e == null)
      i.source.v = void 0, i.unsubscribe = Ct;
    else {
      var a = !0;
      i.unsubscribe = Gi(e, (l) => {
        a ? i.source.v = l : y(i.source, l);
      }), a = !1;
    }
  return e && Ur in r ? lr(e) : o(i.source);
}
function ta() {
  const e = {};
  function t() {
    Gr(() => {
      for (var r in e)
        e[r].unsubscribe();
      Bt(e, Ur, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function ra(e) {
  var t = nr;
  try {
    return nr = !1, [e(), nr];
  } finally {
    nr = t;
  }
}
function Qn(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function I(e, t, r, i) {
  var ft;
  var a = (r & Ul) !== 0, l = !0, f = (r & jl) !== 0, s = (r & Hl) !== 0, c = !1, d;
  f ? [d, c] = ra(() => (
    /** @type {V} */
    e[t]
  )) : d = /** @type {V} */
  e[t];
  var b = qt in e || fi in e, h = f && (((ft = it(e, t)) == null ? void 0 : ft.set) ?? (b && t in e && ((B) => e[t] = B))) || void 0, m = (
    /** @type {V} */
    i
  ), p = !0, x = !1, E = () => (x = !0, p && (p = !1, s ? m = ot(
    /** @type {() => V} */
    i
  ) : m = /** @type {V} */
  i), m);
  d === void 0 && i !== void 0 && (h && l && so(), d = E(), h && h(d));
  var q;
  if (q = () => {
    var B = (
      /** @type {V} */
      e[t]
    );
    return B === void 0 ? E() : (p = !0, x = !1, B);
  }, (r & Bl) === 0)
    return q;
  if (h) {
    var ce = e.$$legacy;
    return function(B, oe) {
      return arguments.length > 0 ? ((!oe || ce || c) && h(oe ? q() : B), B) : q();
    };
  }
  var X = !1, te = /* @__PURE__ */ Xr(d), z = /* @__PURE__ */ br(() => {
    var B = q(), oe = o(te);
    return X ? (X = !1, oe) : te.v = B;
  });
  return f && o(z), a || (z.equals = Yr), function(B, oe) {
    if (arguments.length > 0) {
      const ye = oe ? o(z) : f ? je(B) : B;
      if (!z.equals(ye)) {
        if (X = !0, y(te, ye), x && m !== void 0 && (m = ye), Qn(z))
          return B;
        ot(() => o(z));
      }
      return B;
    }
    return Qn(z) ? z.v : o(z);
  };
}
function na(e) {
  return new ia(e);
}
var Oe, me;
class ia {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    xr(this, Oe);
    /** @type {Record<string, any>} */
    xr(this, me);
    var l;
    var r = /* @__PURE__ */ new Map(), i = (f, s) => {
      var c = /* @__PURE__ */ Xr(s);
      return r.set(f, c), c;
    };
    const a = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(f, s) {
          return o(r.get(s) ?? i(s, Reflect.get(f, s)));
        },
        has(f, s) {
          return s === fi ? !0 : (o(r.get(s) ?? i(s, Reflect.get(f, s))), Reflect.has(f, s));
        },
        set(f, s, c) {
          return y(r.get(s) ?? i(s, c), c), Reflect.set(f, s, c);
        }
      }
    );
    Sr(this, me, (t.hydrate ? Bo : Bi)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: a,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((l = t == null ? void 0 : t.props) != null && l.$$host) || t.sync === !1) && A(), Sr(this, Oe, a.$$events);
    for (const f of Object.keys(se(this, me)))
      f === "$set" || f === "$destroy" || f === "$on" || Bt(this, f, {
        get() {
          return se(this, me)[f];
        },
        /** @param {any} value */
        set(s) {
          se(this, me)[f] = s;
        },
        enumerable: !0
      });
    se(this, me).$set = /** @param {Record<string, any>} next */
    (f) => {
      Object.assign(a, f);
    }, se(this, me).$destroy = () => {
      jo(se(this, me));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    se(this, me).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    se(this, Oe)[t] = se(this, Oe)[t] || [];
    const i = (...a) => r.call(this, ...a);
    return se(this, Oe)[t].push(i), () => {
      se(this, Oe)[t] = se(this, Oe)[t].filter(
        /** @param {any} fn */
        (a) => a !== i
      );
    };
  }
  $destroy() {
    se(this, me).$destroy();
  }
}
Oe = new WeakMap(), me = new WeakMap();
let Zi;
typeof HTMLElement == "function" && (Zi = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, i) {
    super();
    /** The Svelte component constructor */
    Ee(this, "$$ctor");
    /** Slots */
    Ee(this, "$$s");
    /** @type {any} The Svelte component instance */
    Ee(this, "$$c");
    /** Whether or not the custom element is connected */
    Ee(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    Ee(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    Ee(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    Ee(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    Ee(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    Ee(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    Ee(this, "$$me");
    this.$$ctor = t, this.$$s = r, i && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, r, i) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(r), this.$$c) {
      const a = this.$$c.$on(t, r);
      this.$$l_u.set(r, a);
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
      const a = this.$$l_u.get(r);
      a && (a(), this.$$l_u.delete(r));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(a) {
        return (l) => {
          const f = document.createElement("slot");
          a !== "default" && (f.name = a), U(l, f);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, i = la(this);
      for (const a of this.$$s)
        a in i && (a === "default" && !this.$$d.children ? (this.$$d.children = t(a), r.default = !0) : r[a] = t(a));
      for (const a of this.attributes) {
        const l = this.$$g_p(a.name);
        l in this.$$d || (this.$$d[l] = or(l, a.value, this.$$p_d, "toProp"));
      }
      for (const a in this.$$p_d)
        !(a in this.$$d) && this[a] !== void 0 && (this.$$d[a] = this[a], delete this[a]);
      this.$$c = na({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = po(() => {
        Wr(() => {
          var a;
          this.$$r = !0;
          for (const l of ar(this.$$c)) {
            if (!((a = this.$$p_d[l]) != null && a.reflect)) continue;
            this.$$d[l] = this.$$c[l];
            const f = or(
              l,
              this.$$d[l],
              this.$$p_d,
              "toAttribute"
            );
            f == null ? this.removeAttribute(this.$$p_d[l].attribute || l) : this.setAttribute(this.$$p_d[l].attribute || l, f);
          }
          this.$$r = !1;
        });
      });
      for (const a in this.$$l)
        for (const l of this.$$l[a]) {
          const f = this.$$c.$on(a, l);
          this.$$l_u.set(l, f);
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
    var a;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = or(t, i, this.$$p_d, "toProp"), (a = this.$$c) == null || a.$set({ [t]: this.$$d[t] }));
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
    return ar(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function or(e, t, r, i) {
  var l;
  const a = (l = r[e]) == null ? void 0 : l.type;
  if (t = a === "Boolean" && typeof t != "boolean" ? t != null : t, !i || !r[e])
    return t;
  if (i === "toAttribute")
    switch (a) {
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
    switch (a) {
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
function la(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function oa(e, t, r, i, a, l) {
  let f = class extends Zi {
    constructor() {
      super(e, r, a), this.$$p_d = t;
    }
    static get observedAttributes() {
      return ar(t).map(
        (s) => (t[s].attribute || s).toLowerCase()
      );
    }
  };
  return ar(t).forEach((s) => {
    Bt(f.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(c) {
        var h;
        c = or(s, c, t), this.$$d[s] = c;
        var d = this.$$c;
        if (d) {
          var b = (h = it(d, s)) == null ? void 0 : h.get;
          b ? d[s] = c : d.$set({ [s]: c });
        }
      }
    });
  }), i.forEach((s) => {
    Bt(f.prototype, s, {
      get() {
        var c;
        return (c = this.$$c) == null ? void 0 : c[s];
      }
    });
  }), e.element = /** @type {any} */
  f, f;
}
const Wi = new TextEncoder();
function aa(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function sa(e, t = "SHA-256", r = 1e5) {
  const i = Date.now().toString(16);
  e || (e = Math.round(Math.random() * r));
  const a = await Ji(i, e, t);
  return {
    algorithm: t,
    challenge: a,
    salt: i,
    signature: ""
  };
}
async function Ji(e, t, r) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return aa(
    await crypto.subtle.digest(
      r.toUpperCase(),
      Wi.encode(e + t)
    )
  );
}
function ua(e, t, r = "SHA-256", i = 1e6, a = 0) {
  const l = new AbortController(), f = Date.now();
  return {
    promise: (async () => {
      for (let c = a; c <= i; c += 1) {
        if (l.signal.aborted)
          return null;
        if (await Ji(t, c, r) === e)
          return {
            number: c,
            took: Date.now() - f
          };
      }
      return null;
    })(),
    controller: l
  };
}
function ei() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function fa(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let i = 0; i < t.length; i++)
    r[i] = t.charCodeAt(i);
  return r;
}
function ca(e, t = 12) {
  const r = new Uint8Array(t);
  for (let i = 0; i < t; i++)
    r[i] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function da(e, t = "", r = 1e6, i = 0) {
  const a = "AES-GCM", l = new AbortController(), f = Date.now(), s = async () => {
    for (let b = i; b <= r; b += 1) {
      if (l.signal.aborted || !c || !d)
        return null;
      try {
        const h = await crypto.subtle.decrypt(
          {
            name: a,
            iv: ca(b)
          },
          c,
          d
        );
        if (h)
          return {
            clearText: new TextDecoder().decode(h),
            took: Date.now() - f
          };
      } catch {
      }
    }
    return null;
  };
  let c = null, d = null;
  try {
    d = fa(e);
    const b = await crypto.subtle.digest(
      "SHA-256",
      Wi.encode(t)
    );
    c = await crypto.subtle.importKey(
      "raw",
      b,
      a,
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
var w = /* @__PURE__ */ ((e) => (e.CODE = "code", e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(w || {}), ee = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.LOADING = "loading", e.PLAYING = "playing", e.PAUSED = "paused", e.READY = "ready", e))(ee || {});
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (e) => lr(globalThis.altchaI18n.store)[e],
  set: (e, t) => {
    Object.assign(lr(globalThis.altchaI18n.store), {
      [e]: t
    }), globalThis.altchaI18n.store.set(lr(globalThis.altchaI18n.store));
  },
  store: Qo({})
};
const va = {
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
globalThis.altchaI18n.set("en", va);
const Dr = (e, t) => {
  let r = /* @__PURE__ */ _o(() => Ql(t == null ? void 0 : t(), 24));
  var i = ma();
  Se(() => {
    S(i, "width", o(r)), S(i, "height", o(r));
  }), U(e, i);
};
function ha(e, t) {
  e.code === "Space" && (e.preventDefault(), e.stopImmediatePropagation(), t());
}
function ga(e, t) {
  e.preventDefault(), t();
}
function _a(e, t, r, i, a, l, f, s) {
  var c;
  [
    w.UNVERIFIED,
    w.ERROR,
    w.EXPIRED,
    w.CODE
  ].includes(o(t)) ? r() !== !1 && ((c = o(i)) == null ? void 0 : c.reportValidity()) === !1 ? y(a, !1) : l() ? f() : s() : y(a, !0);
}
var ma = /* @__PURE__ */ wr('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="altcha-spinner"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor"></path></svg>'), ba = /* @__PURE__ */ Ie('<input type="hidden">'), ya = /* @__PURE__ */ Ie('<div><a target="_blank" class="altcha-logo" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor"></path></svg></a></div>'), pa = /* @__PURE__ */ wr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg>'), wa = /* @__PURE__ */ wr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z"></path></svg>'), Ea = /* @__PURE__ */ wr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"></path></svg>'), Ca = /* @__PURE__ */ Ie('<button type="button" class="altcha-code-challenge-audio"><!></button>'), Aa = /* @__PURE__ */ Ie("<audio hidden autoplay><source></audio>"), Ia = /* @__PURE__ */ Ie('<div class="altcha-code-challenge" role="dialog"><div class="altcha-code-challenge-arrow"></div> <form data-code-challenge-form="1"><img class="altcha-code-challenge-image" alt=""> <input type="text" autocomplete="off" name="code" class="altcha-code-challenge-input" required> <div class="altcha-code-challenge-buttons"><div class="altcha-code-challenge-buttons-left"><!> <button type="button" class="altcha-code-challenge-reload"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z"></path></svg></button></div> <button type="submit" class="altcha-code-challenge-verify"><!> </button></div> <!></form></div>'), Ra = /* @__PURE__ */ Ie("<div><!></div>"), ka = /* @__PURE__ */ Ie("<div><!></div>"), $a = /* @__PURE__ */ Ie('<div class="altcha-error"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg> <!></div>'), xa = /* @__PURE__ */ Ie('<div class="altcha-footer"><div><!></div></div>'), Sa = /* @__PURE__ */ Ie('<div class="altcha-anchor-arrow"></div>'), Ta = /* @__PURE__ */ Ie('<!> <div class="altcha"><div class="altcha-main"><div><!> <input type="checkbox"></div> <label class="altcha-label"><!></label> <!> <!> <!></div> <!> <!> <!></div>', 1);
function Na(e, t) {
  var Fn, Vn;
  Oi(t, !0);
  const [r, i] = ta(), a = () => ea(Xi, "$altchaI18nStore", r);
  let l = I(t, "auto", 7, void 0), f = I(t, "blockspam", 7, void 0), s = I(t, "challengeurl", 7, void 0), c = I(t, "challengejson", 7, void 0), d = I(t, "credentials", 7, void 0), b = I(t, "customfetch", 7, void 0), h = I(t, "debug", 7, !1), m = I(t, "delay", 7, 0), p = I(t, "disableautofocus", 7, !1), x = I(t, "expire", 7, void 0), E = I(t, "floating", 7, void 0), q = I(t, "floatinganchor", 7, void 0), ce = I(t, "floatingoffset", 7, void 0), X = I(t, "floatingpersist", 7, !1), te = I(t, "hidefooter", 7, !1), z = I(t, "hidelogo", 7, !1), ft = I(t, "id", 7, void 0), B = I(t, "language", 7, void 0), oe = I(t, "name", 7, "altcha"), ye = I(t, "maxnumber", 7, 1e6), Rt = I(t, "mockerror", 7, !1), Ve = I(t, "obfuscated", 7, void 0), pe = I(t, "overlay", 7, void 0), kt = I(t, "overlaycontent", 7, void 0), Wt = I(t, "plugins", 7, void 0), $t = I(t, "refetchonexpire", 7, !0), Je = I(t, "sentinel", 7, void 0), Re = I(t, "spamfilter", 7, !1), ct = I(t, "strings", 7, void 0), ge = I(t, "test", 7, !1), re = I(t, "verifyurl", 7, void 0), dt = I(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), xt = I(t, "workerurl", 7, void 0);
  const { altchaI18n: Ki } = globalThis, Xi = Ki.store, Qr = ["SHA-256", "SHA-384", "SHA-512"], zi = "https://altcha.org/", Me = (n, u) => {
    t.$$host.dispatchEvent(new CustomEvent(n, { detail: u }));
  }, en = (Vn = (Fn = document.documentElement.lang) == null ? void 0 : Fn.split("-")) == null ? void 0 : Vn[0], Er = /* @__PURE__ */ Vt(() => {
    var n;
    return s() && new URL(s(), location.origin).host.endsWith(".altcha.org") && !!((n = s()) != null && n.includes("apiKey=ckey_"));
  }), Jt = /* @__PURE__ */ Vt(() => c() ? _n(c()) : void 0), Qi = /* @__PURE__ */ Vt(() => ct() ? _n(ct()) : {}), P = /* @__PURE__ */ Vt(() => ({
    ...ln(a()),
    ...o(Qi)
  })), tn = /* @__PURE__ */ Vt(() => `${ft() || oe()}_checkbox_${Math.round(Math.random() * 1e8)}`);
  let Ke = /* @__PURE__ */ L(null), St = /* @__PURE__ */ L(!1), H = /* @__PURE__ */ L(null), k = /* @__PURE__ */ L(je(w.UNVERIFIED)), V = /* @__PURE__ */ L(void 0), Tt = /* @__PURE__ */ L(null), qe = /* @__PURE__ */ L(null), de = /* @__PURE__ */ L(null), Cr = /* @__PURE__ */ L(null), vt = /* @__PURE__ */ L(null), D = /* @__PURE__ */ L(null), Nt = /* @__PURE__ */ L(null), Xe = /* @__PURE__ */ L(null), ke = null, Y = /* @__PURE__ */ L(null), ze = /* @__PURE__ */ L(!1), Ue = [], Ar = /* @__PURE__ */ L(!1), $e = /* @__PURE__ */ L(null);
  Or(() => {
    dl(o(Xe));
  }), Or(() => {
    vl(o(k));
  }), zo(() => {
    el(), y(Nt, null), o(D) && (o(D).removeEventListener("submit", cn), o(D).removeEventListener("reset", dn), o(D).removeEventListener("focusin", fn), y(D, null)), ke && (clearTimeout(ke), ke = null), document.removeEventListener("click", sn), document.removeEventListener("scroll", un), window.removeEventListener("resize", gn);
  }), Yi(() => {
    var n;
    $("mounted", "2.2.2"), $("workers", dt()), il(), $("plugins", Ue.length ? Ue.map((u) => u.constructor.pluginName).join(", ") : "none"), ge() && $("using test mode"), x() && Ir(x()), l() !== void 0 && $("auto", l()), E() !== void 0 && pn(E()), y(D, (n = o(V)) == null ? void 0 : n.closest("form"), !0), o(D) && (o(D).addEventListener("submit", cn, { capture: !0 }), o(D).addEventListener("reset", dn), (l() === "onfocus" || X() === "focus") && o(D).addEventListener("focusin", fn)), pe() && wn(!0), l() === "onload" && (Ve() ? Dt() : Pe()), o(Er) && (te() || z()) && $("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      Me("load");
    });
  });
  function Kt(n, u) {
    return btoa(JSON.stringify({
      algorithm: n.algorithm,
      challenge: n.challenge,
      number: u.number,
      salt: n.salt,
      signature: n.signature,
      test: ge() ? !0 : void 0,
      took: u.took
    }));
  }
  function el() {
    for (const n of Ue)
      n.destroy();
  }
  function rn() {
    s() && $t() && o(k) === w.VERIFIED ? Pe() : Qe(w.EXPIRED, o(P).expired);
  }
  async function tl() {
    if (Rt())
      throw $("mocking error"), new Error("Mocked error.");
    if (o(Jt))
      return $("using provided json data"), mn(o(Jt).salt), o(Jt);
    if (ge())
      return $("generating test challenge", { test: ge() }), sa(typeof ge() != "boolean" ? +ge() : void 0);
    {
      if (!s() && o(D)) {
        const v = o(D).getAttribute("action");
        v != null && v.includes("/form/") && s(v + "/altcha");
      }
      if (!s())
        throw new Error("Attribute challengeurl not set.");
      $("fetching challenge from", s());
      const n = {
        credentials: typeof d() == "boolean" ? "include" : d(),
        headers: Re() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      }, u = await nn()(s(), n);
      if (!u || !(u instanceof Response))
        throw new Error("Custom fetch function did not return a response.");
      if (u.status !== 200)
        throw new Error(`Server responded with ${u.status}.`);
      const g = u.headers.get("X-Altcha-Config"), _ = await u.json();
      if (mn(_.salt), g)
        try {
          const v = JSON.parse(g);
          v && typeof v == "object" && (v.verifyurl && !v.verifyurl.startsWith("fn:") && (v.verifyurl = an(v.verifyurl)), An(v));
        } catch (v) {
          $("unable to configure from X-Altcha-Config", v);
        }
      return _;
    }
  }
  function rl(n) {
    var g, _;
    const u = (g = o(D)) == null ? void 0 : g.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((_ = u == null ? void 0 : u.value) == null ? void 0 : _.slice(u.value.indexOf("@"))) || void 0;
  }
  function nn() {
    let n = fetch;
    if (b())
      if ($("using customfetch"), typeof b() == "string") {
        if (n = globalThis[b()] || null, !n)
          throw new Error(`Custom fetch function not found: ${b()}`);
      } else
        n = b();
    return n;
  }
  function ln(n, u = [
    B() || "",
    document.documentElement.lang || "",
    ...navigator.languages
  ]) {
    const g = Object.keys(n).map((v) => v.toLowerCase()), _ = u.reduce(
      (v, C) => (C = C.toLowerCase(), v || (n[C] ? C : null) || g.find((R) => C.split("-")[0] === R.split("-")[0]) || null),
      null
    );
    return n[_ || "en"];
  }
  function nl() {
    return Re() === "ipAddress" ? {
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
    } : typeof Re() == "object" ? Re() : {
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
  function on(n) {
    var g;
    return [
      ...((g = o(D)) == null ? void 0 : g.querySelectorAll(n != null && n.length ? n.map((_) => `input[name="${_}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (_, v) => {
        const C = v.name, R = v.value;
        return C && R && (_[C] = /\n/.test(R) ? R.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : R), _;
      },
      {}
    );
  }
  function an(n, u) {
    const g = new URL(s() || location.origin), _ = new URL(n, g);
    if (_.search || (_.search = g.search), u)
      for (const v in u)
        u[v] !== void 0 && u[v] !== null && _.searchParams.set(v, u[v]);
    return _.toString();
  }
  function il() {
    const n = Wt() !== void 0 ? Wt().split(",") : void 0;
    for (const u of globalThis.altchaPlugins)
      (!n || n.includes(u.pluginName)) && Ue.push(new u({
        el: o(V),
        clarify: Dt,
        dispatch: Me,
        getConfiguration: In,
        getFloatingAnchor: Rn,
        getState: kn,
        log: $,
        reset: Qe,
        solve: Cn,
        setState: xe,
        setFloatingAnchor: $n,
        verify: Pe
      }));
  }
  function $(...n) {
    (h() || n.some((u) => u instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${oe()}]`, ...n);
  }
  function ll() {
    y(Y, ee.PAUSED, !0);
  }
  function ol(n) {
    y(Y, ee.ERROR, !0);
  }
  function al() {
    y(Y, ee.READY, !0);
  }
  function sl() {
    y(Y, ee.LOADING, !0);
  }
  function ul() {
    y(Y, ee.PLAYING, !0);
  }
  function fl() {
    y(Y, ee.PAUSED, !0);
  }
  function cl(n) {
    var u;
    if (n.preventDefault(), n.stopPropagation(), o(H)) {
      const g = new FormData(n.target), _ = String(g.get("code"));
      if ((u = re()) != null && u.startsWith("fn:")) {
        const v = re().replace(/^fn:/, "");
        if ($(`calling ${v} function instead of verifyurl`), !(v in globalThis))
          throw new Error(`Global function "${v}" is undefined.`);
        return globalThis[v]({
          challenge: o(H).challenge,
          code: _,
          solution: o(H).solution
        });
      }
      y(ze, !0), bn(Kt(o(H).challenge, o(H).solution), _).then(({ reason: v, verified: C }) => {
        C ? (y(H, null), xe(w.VERIFIED), $("verified"), Nr().then(() => {
          var R;
          (R = o(Cr)) == null || R.focus(), Me("verified", { payload: o($e) }), l() === "onsubmit" ? yn(o(Nt)) : pe() && Lt();
        })) : (Qe(), y(Xe, v || "Verification failed", !0));
      }).catch((v) => {
        y(H, null), xe(w.ERROR, v), $("sentinel verification failed:", v);
      }).finally(() => {
        y(ze, !1);
      });
    }
  }
  function sn(n) {
    var g;
    const u = n.target;
    E() && u && !o(V).contains(u) && (o(k) === w.VERIFIED && X() === !1 || o(k) === w.VERIFIED && X() === "focus" && !((g = o(D)) != null && g.matches(":focus-within")) || l() === "off" && o(k) === w.UNVERIFIED) && Lt();
  }
  function un() {
    E() && o(k) !== w.UNVERIFIED && Pt();
  }
  function dl(n) {
    for (const u of Ue)
      typeof u.onErrorChange == "function" && u.onErrorChange(o(Xe));
  }
  function fn(n) {
    o(k) === w.UNVERIFIED ? Pe() : E() && X() === "focus" && o(k) === w.VERIFIED && Xt();
  }
  function cn(n) {
    var _;
    const u = n.target;
    u != null && u.hasAttribute("data-code-challenge-form") || (y(Nt, n.submitter, !0), o(D) && l() === "onsubmit" ? ((_ = o(Nt)) == null || _.blur(), o(k) === w.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), Pe().then(() => {
      yn(o(Nt));
    })) : o(k) !== w.VERIFIED && (n.preventDefault(), n.stopPropagation(), o(k) === w.VERIFYING && vn())) : o(D) && E() && l() === "off" && o(k) === w.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), Xt()));
  }
  function dn() {
    Qe();
  }
  function vn() {
    o(k) === w.VERIFYING && o(P).waitAlert && alert(o(P).waitAlert);
  }
  function hn() {
    o(qe) ? o(qe).paused ? (o(qe).currentTime = 0, o(qe).play()) : o(qe).pause() : (y(Ar, !0), requestAnimationFrame(() => {
      var n;
      (n = o(qe)) == null || n.play();
    }));
  }
  function vl(n) {
    for (const u of Ue)
      typeof u.onStateChange == "function" && u.onStateChange(o(k));
    E() && o(k) !== w.UNVERIFIED && requestAnimationFrame(() => {
      Pt();
    }), y(St, o(k) === w.VERIFIED), pe() && o(de) && (o(k) !== w.UNVERIFIED ? Xt() : Lt());
  }
  function gn() {
    E() && Pt();
  }
  function _n(n) {
    return JSON.parse(n);
  }
  function mn(n) {
    var _;
    const u = new URLSearchParams((_ = n.split("?")) == null ? void 0 : _[1]), g = u.get("expires") || u.get("expire");
    if (g) {
      const v = new Date(+g * 1e3), C = isNaN(v.getTime()) ? 0 : v.getTime() - Date.now();
      C > 0 && Ir(C);
    } else ke && (clearTimeout(ke), ke = null);
  }
  async function hl(n) {
    if (!re())
      throw new Error("Attribute verifyurl not set.");
    $("requesting server verification from", re());
    const u = { payload: n };
    if (Re() !== !1) {
      const {
        blockedCountries: v,
        classifier: C,
        disableRules: R,
        email: j,
        expectedLanguages: M,
        expectedCountries: Q,
        fields: ae,
        ipAddress: tt,
        text: gt,
        timeZone: rt
      } = nl();
      u.blockedCountries = v, u.classifier = C, u.disableRules = R, u.email = j === !1 ? void 0 : rl(j), u.expectedCountries = Q, u.expectedLanguages = M || (en ? [en] : void 0), u.fields = ae === !1 ? void 0 : on(ae), u.ipAddress = tt === !1 ? void 0 : tt || "auto", u.text = gt, u.timeZone = rt === !1 ? void 0 : rt || ei();
    }
    const g = await nn()(re(), {
      body: JSON.stringify(u),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (!g || !(g instanceof Response))
      throw new Error("Custom fetch function did not return a response.");
    if (g.status !== 200)
      throw new Error(`Server responded with ${g.status}.`);
    const _ = await g.json();
    if (_ != null && _.payload && y($e, _.payload, !0), Me("serververification", _), f() && _.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  async function bn(n, u) {
    if (!re())
      throw new Error("Attribute verifyurl not set.");
    $("requesting sentinel verification from", re());
    const g = { code: u, payload: n };
    Je() && (g.fields = Je().fields ? on() : void 0, g.timeZone = Je().timeZone ? ei() : void 0);
    const _ = await fetch(re(), {
      body: JSON.stringify(g),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (!_ || !(_ instanceof Response))
      throw new Error("Fetch function did not return a response.");
    if (_.status !== 200)
      throw new Error(`Server responded with ${_.status}.`);
    const v = await _.json();
    return v != null && v.payload && y($e, v.payload, !0), Me("sentinelverification", v), v;
  }
  function yn(n) {
    var u;
    o(D) && "requestSubmit" in o(D) ? o(D).requestSubmit(n) : (u = o(D)) != null && u.reportValidity() && (n ? n.click() : o(D).submit());
  }
  function Ir(n) {
    $("expire", n), ke && (clearTimeout(ke), ke = null), n < 1 ? rn() : ke = setTimeout(rn, n);
  }
  function pn(n) {
    $("floating", n), E() !== n && (o(V).style.left = "", o(V).style.top = ""), E(n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : E()), E() ? (l() || l("onsubmit"), document.addEventListener("scroll", un), document.addEventListener("click", sn), window.addEventListener("resize", gn)) : l() === "onsubmit" && l(void 0);
  }
  function wn(n) {
    var u, g;
    if ($("overlay", n), pe(n), n) {
      if (l() || l("onsubmit"), o(de) && o(V).parentElement && o(de).replaceWith(o(V).parentElement), (g = (u = o(V)) == null ? void 0 : u.parentElement) != null && g.parentElement) {
        y(de, document.createElement("div"), !0), o(V).parentElement.parentElement.appendChild(o(de));
        const _ = document.createElement("div"), v = document.createElement("button");
        v.type = "button", v.innerHTML = "&times;", v.addEventListener("click", (C) => {
          C.preventDefault(), Qe();
        }), o(de).classList.add("altcha-overlay-backdrop"), v.classList.add("altcha-overlay-close-button"), _.classList.add("altcha-overlay"), o(de).append(_), _.append(v), kt() && _.append(...document.querySelectorAll(kt())), _.append(o(V).parentElement);
      }
    } else o(de) && o(V).parentElement && (o(de).replaceWith(o(V).parentElement), o(V).style.display = "block");
  }
  function En(n) {
    if (!n.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (n.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!Qr.includes(n.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${Qr.join(", ")}`);
    if (!n.challenge || n.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!n.salt || n.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function Cn(n) {
    let u = null, g = null;
    if ("Worker" in window) {
      try {
        u = gl(n, n.maxNumber || n.maxnumber || ye()), y(Ke, u.controller, !0), g = await u.promise;
      } catch (_) {
        $(_);
      } finally {
        y(Ke, null);
      }
      if (g === null || (g == null ? void 0 : g.number) !== void 0 || "obfuscated" in n)
        return { data: n, solution: g };
    }
    if ("obfuscated" in n) {
      const _ = await da(n.obfuscated, n.key, n.maxNumber || n.maxnumber);
      return { data: n, solution: await _.promise };
    }
    u = ua(n.challenge, n.salt, n.algorithm, n.maxNumber || n.maxnumber || ye()), y(Ke, u.controller, !0);
    try {
      g = await u.promise;
    } catch (_) {
      $(_);
    } finally {
      y(Ke, null);
    }
    return { data: n, solution: g };
  }
  function gl(n, u = typeof ge() == "number" ? ge() : n.maxNumber || n.maxnumber || ye(), g = Math.ceil(dt())) {
    const _ = new AbortController(), v = [];
    g = Math.min(16, u, Math.max(1, g));
    for (let j = 0; j < g; j++)
      v.push(altchaCreateWorker(xt()));
    const C = Math.ceil(u / g);
    return { promise: (async () => {
      const j = await Promise.all(v.map((M, Q) => {
        const ae = Q * C;
        return _.signal.addEventListener("abort", () => {
          M.postMessage({ type: "abort" });
        }), new Promise((tt) => {
          M.addEventListener("message", (gt) => {
            if (gt.data)
              for (const rt of v)
                rt !== M && rt.postMessage({ type: "abort" });
            tt(gt.data);
          }), M.postMessage({
            payload: n,
            max: ae + C,
            start: ae,
            type: "work"
          });
        });
      }));
      for (const M of v)
        M.terminate();
      return j.find((M) => !!M) || null;
    })(), controller: _ };
  }
  async function Dt() {
    if (!Ve()) {
      xe(w.ERROR);
      return;
    }
    const n = Ue.find((u) => u.constructor.pluginName === "obfuscation");
    if (!n || !("clarify" in n)) {
      xe(w.ERROR), $("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in n && typeof n.clarify == "function")
      return n.clarify();
  }
  function An(n) {
    n.obfuscated !== void 0 && Ve(n.obfuscated), n.auto !== void 0 && (l(n.auto), l() === "onload" && (Ve() ? Dt() : Pe())), n.blockspam !== void 0 && f(!!n.blockspam), n.customfetch !== void 0 && b(n.customfetch), n.floatinganchor !== void 0 && q(n.floatinganchor), n.delay !== void 0 && m(n.delay), n.floatingoffset !== void 0 && ce(n.floatingoffset), n.floating !== void 0 && pn(n.floating), n.expire !== void 0 && (Ir(n.expire), x(n.expire)), n.challenge && (c(typeof n.challenge == "string" ? n.challenge : JSON.stringify(n.challenge)), En(o(Jt))), n.challengeurl !== void 0 && s(n.challengeurl), n.debug !== void 0 && h(!!n.debug), n.hidefooter !== void 0 && te(!!n.hidefooter), n.hidelogo !== void 0 && z(!!n.hidelogo), n.language !== void 0 && ct(ln(a(), [n.language])), n.maxnumber !== void 0 && ye(+n.maxnumber), n.mockerror !== void 0 && Rt(!!n.mockerror), n.name !== void 0 && oe(n.name), n.overlaycontent !== void 0 && kt(n.overlaycontent), n.overlay !== void 0 && wn(n.overlay), n.refetchonexpire !== void 0 && $t(!!n.refetchonexpire), n.sentinel !== void 0 && typeof n.sentinel == "object" && Je(n.sentinel), n.spamfilter !== void 0 && Re(typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && ct(typeof n.strings == "string" ? n.strings : JSON.stringify(n.strings)), n.test !== void 0 && ge(typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && re(n.verifyurl), n.workers !== void 0 && dt(+n.workers), n.workerurl !== void 0 && xt(n.workerurl);
  }
  function In() {
    return {
      auto: l(),
      blockspam: f(),
      challengeurl: s(),
      debug: h(),
      delay: m(),
      expire: x(),
      floating: E(),
      floatinganchor: q(),
      floatingoffset: ce(),
      hidefooter: te(),
      hidelogo: z(),
      name: oe(),
      maxnumber: ye(),
      mockerror: Rt(),
      obfuscated: Ve(),
      overlay: pe(),
      refetchonexpire: $t(),
      spamfilter: Re(),
      strings: o(P),
      test: ge(),
      verifyurl: re(),
      workers: dt(),
      workerurl: xt()
    };
  }
  function Rn() {
    return o(vt);
  }
  function _l(n) {
    return Ue.find((u) => u.constructor.pluginName === n);
  }
  function kn() {
    return o(k);
  }
  function Lt() {
    o(V).style.display = "none", pe() && o(de) && (o(de).style.display = "none");
  }
  function Pt(n = 20) {
    var u;
    if (o(V))
      if (o(vt) || y(vt, (q() ? document.querySelector(q()) : (u = o(D)) == null ? void 0 : u.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || o(D), !0), o(vt)) {
        const g = parseInt(ce(), 10) || 12, _ = o(vt).getBoundingClientRect(), v = o(V).getBoundingClientRect(), C = document.documentElement.clientHeight, R = document.documentElement.clientWidth, j = E() === "auto" ? _.bottom + v.height + g + n > C : E() === "top", M = Math.max(n, Math.min(R - n - v.width, _.left + _.width / 2 - v.width / 2));
        if (j ? o(V).style.top = `${_.top - (v.height + g)}px` : o(V).style.top = `${_.bottom + g}px`, o(V).style.left = `${M}px`, o(V).setAttribute("data-floating", j ? "top" : "bottom"), o(Tt)) {
          const Q = o(Tt).getBoundingClientRect();
          o(Tt).style.left = _.left - M + _.width / 2 - Q.width / 2 + "px";
        }
      } else
        $("unable to find floating anchor element");
  }
  function Qe(n = w.UNVERIFIED, u = null) {
    o(Ke) && (o(Ke).abort(), y(Ke, null)), y(St, !1), y($e, null), y(H, null), y(Ar, !1), y(Y, null), xe(n, u);
  }
  function $n(n) {
    y(vt, n, !0);
  }
  function xe(n, u = null) {
    y(k, n, !0), y(Xe, u, !0), Me("statechange", {
      payload: o($e),
      state: o(k)
    });
  }
  function Xt() {
    o(V).style.display = "block", E() && Pt(), pe() && o(de) && (o(de).style.display = "flex");
  }
  async function Pe() {
    return Qe(w.VERIFYING), await new Promise((n) => setTimeout(n, m() || 0)), tl().then((n) => (En(n), $("challenge", n), Cn(n))).then(({ data: n, solution: u }) => {
      var g;
      if ($("solution", u), !u || n && "challenge" in n && !("clearText" in u)) {
        if ((u == null ? void 0 : u.number) !== void 0 && "challenge" in n)
          if (re() && "codeChallenge" in n)
            ["INPUT", "BUTTON", "SELECT", "TEXTAREA"].includes(((g = document.activeElement) == null ? void 0 : g.tagName) || "") && p() === !1 && document.activeElement.blur(), y(H, { challenge: n, solution: u }, !0);
          else {
            if (re() && Je() !== void 0)
              return bn(Kt(n, u));
            if (re())
              return hl(Kt(n, u));
            y($e, Kt(n, u), !0), $("payload", o($e));
          }
        else if (o(k) !== w.EXPIRED)
          throw $("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
      }
    }).then(() => {
      o(H) ? (xe(w.CODE), Nr().then(() => {
        Me("code", { codeChallenge: o(H) });
      })) : o($e) && (xe(w.VERIFIED), $("verified"), Nr().then(() => {
        Me("verified", { payload: o($e) }), pe() && Lt();
      }));
    }).catch((n) => {
      $(n), xe(w.ERROR, n.message);
    });
  }
  var xn = Ta(), Sn = Ft(xn);
  Ho(Sn, t, "default", {});
  var ht = J(Sn, 2), Rr = W(ht), zt = W(Rr);
  let Tn;
  var Nn = W(zt);
  {
    var ml = (n) => {
      Dr(n);
    };
    K(Nn, (n) => {
      o(k) === w.VERIFYING && n(ml);
    });
  }
  var et = J(Nn, 2);
  Kn(et), et.__change = [
    _a,
    k,
    Re,
    D,
    St,
    Ve,
    Dt,
    Pe
  ], rr(et, (n) => y(Cr, n), () => o(Cr)), Z(zt);
  var Qt = J(zt, 2), bl = W(Qt);
  {
    var yl = (n) => {
      var u = tr(), g = Ft(u);
      nt(g, () => o(P).verified), U(n, u);
    }, pl = (n, u) => {
      {
        var g = (v) => {
          var C = tr(), R = Ft(C);
          nt(R, () => o(P).verifying), U(v, C);
        }, _ = (v, C) => {
          {
            var R = (M) => {
              var Q = tr(), ae = Ft(Q);
              nt(ae, () => o(P).verificationRequired), U(M, Q);
            }, j = (M) => {
              var Q = tr(), ae = Ft(Q);
              nt(ae, () => o(P).label), U(M, Q);
            };
            K(
              v,
              (M) => {
                o(k) === w.CODE ? M(R) : M(j, !1);
              },
              C
            );
          }
        };
        K(
          n,
          (v) => {
            o(k) === w.VERIFYING ? v(g) : v(_, !1);
          },
          u
        );
      }
    };
    K(bl, (n) => {
      o(k) === w.VERIFIED ? n(yl) : n(pl, !1);
    });
  }
  Z(Qt);
  var Dn = J(Qt, 2);
  {
    var wl = (n) => {
      var u = ba();
      Kn(u), Se(() => {
        S(u, "name", oe()), Jo(u, o($e));
      }), U(n, u);
    };
    K(Dn, (n) => {
      o(k) === w.VERIFIED && n(wl);
    });
  }
  var Ln = J(Dn, 2);
  {
    var El = (n) => {
      var u = ya(), g = W(u);
      S(g, "href", zi), Z(u), Se(() => S(g, "aria-label", o(P).ariaLinkLabel)), U(n, u);
    };
    K(Ln, (n) => {
      (z() !== !0 || o(Er)) && n(El);
    });
  }
  var Cl = J(Ln, 2);
  {
    var Al = (n) => {
      var u = Ia(), g = J(W(u), 2), _ = W(g), v = J(_, 2);
      Fo(v, !p()), v.__keydown = [
        ha,
        hn
      ];
      var C = J(v, 2), R = W(C), j = W(R);
      {
        var M = (we) => {
          var G = Ca();
          G.__click = hn;
          var er = W(G);
          {
            var Ot = (_t) => {
              Dr(_t, () => 20);
            }, Nl = (_t, Dl) => {
              {
                var Ll = (mt) => {
                  var kr = pa();
                  U(mt, kr);
                }, Pl = (mt, kr) => {
                  {
                    var Ol = (bt) => {
                      var $r = wa();
                      U(bt, $r);
                    }, Fl = (bt) => {
                      var $r = Ea();
                      U(bt, $r);
                    };
                    K(
                      mt,
                      (bt) => {
                        o(Y) === ee.PLAYING ? bt(Ol) : bt(Fl, !1);
                      },
                      kr
                    );
                  }
                };
                K(
                  _t,
                  (mt) => {
                    o(Y) === ee.ERROR ? mt(Ll) : mt(Pl, !1);
                  },
                  Dl
                );
              }
            };
            K(er, (_t) => {
              o(Y) === ee.LOADING ? _t(Ot) : _t(Nl, !1);
            });
          }
          Z(G), Se(() => {
            S(G, "title", o(P).getAudioChallenge), G.disabled = o(Y) === ee.LOADING || o(Y) === ee.ERROR || o(ze), S(G, "aria-label", o(Y) === ee.LOADING ? o(P).loading : o(P).getAudioChallenge);
          }), U(we, G);
        };
        K(j, (we) => {
          o(H).challenge.codeChallenge.audio && we(M);
        });
      }
      var Q = J(j, 2);
      Q.__click = [ga, Pe], Z(R);
      var ae = J(R, 2), tt = W(ae);
      {
        var gt = (we) => {
          Dr(we, () => 16);
        };
        K(tt, (we) => {
          o(ze) && we(gt);
        });
      }
      var rt = J(tt);
      Z(ae), Z(C);
      var Sl = J(C, 2);
      {
        var Tl = (we) => {
          var G = Aa(), er = W(G);
          Z(G), rr(G, (Ot) => y(qe, Ot), () => o(qe)), Se((Ot) => S(er, "src", Ot), [
            () => an(o(H).challenge.codeChallenge.audio, { language: B() })
          ]), Be("loadstart", G, sl), Be("canplay", G, al), Be("pause", G, fl), Be("playing", G, ul), Be("ended", G, ll), Be("error", er, ol), U(we, G);
        };
        K(Sl, (we) => {
          o(H).challenge.codeChallenge.audio && o(Ar) && we(Tl);
        });
      }
      Z(g), Z(u), Se(() => {
        S(u, "aria-label", o(P).verificationRequired), S(_, "src", o(H).challenge.codeChallenge.image), S(v, "minlength", o(H).challenge.codeChallenge.length || 1), S(v, "maxlength", o(H).challenge.codeChallenge.length), S(v, "placeholder", o(P).enterCode), S(v, "aria-label", o(Y) === ee.LOADING ? o(P).loading : o(Y) === ee.PLAYING ? "" : o(P).enterCodeAria), S(v, "aria-live", o(Y) ? "assertive" : "polite"), S(v, "aria-busy", o(Y) === ee.LOADING), v.disabled = o(ze), S(Q, "aria-label", o(P).reload), S(Q, "title", o(P).reload), Q.disabled = o(ze), ae.disabled = o(ze), S(ae, "aria-label", o(P).verify), Uo(rt, ` ${o(P).verify ?? ""}`);
      }), Be("submit", g, cl, !0), U(n, u);
    };
    K(Cl, (n) => {
      var u;
      (u = o(H)) != null && u.challenge.codeChallenge && n(Al);
    });
  }
  Z(Rr);
  var Pn = J(Rr, 2);
  {
    var Il = (n) => {
      var u = $a(), g = J(W(u), 2);
      {
        var _ = (C) => {
          var R = Ra(), j = W(R);
          nt(j, () => o(P).expired), Z(R), Se(() => S(R, "title", o(Xe))), U(C, R);
        }, v = (C) => {
          var R = ka(), j = W(R);
          nt(j, () => o(P).error), Z(R), Se(() => S(R, "title", o(Xe))), U(C, R);
        };
        K(g, (C) => {
          o(k) === w.EXPIRED ? C(_) : C(v, !1);
        });
      }
      Z(u), U(n, u);
    };
    K(Pn, (n) => {
      (o(Xe) || o(k) === w.EXPIRED) && n(Il);
    });
  }
  var On = J(Pn, 2);
  {
    var Rl = (n) => {
      var u = xa(), g = W(u), _ = W(g);
      nt(_, () => o(P).footer), Z(g), Z(u), U(n, u);
    };
    K(On, (n) => {
      o(P).footer && (te() !== !0 || o(Er)) && n(Rl);
    });
  }
  var kl = J(On, 2);
  {
    var $l = (n) => {
      var u = Sa();
      rr(u, (g) => y(Tt, g), () => o(Tt)), U(n, u);
    };
    K(kl, (n) => {
      E() && n($l);
    });
  }
  Z(ht), rr(ht, (n) => y(V, n), () => o(V)), Se(
    (n) => {
      S(ht, "data-state", o(k)), S(ht, "data-floating", E()), S(ht, "data-overlay", pe()), Tn = Go(zt, 1, "altcha-checkbox", null, Tn, n), S(et, "id", o(tn)), et.required = l() !== "onsubmit" && (!E() || l() !== "off"), S(Qt, "for", o(tn));
    },
    [
      () => ({
        "altcha-checkbox-verifying": o(k) === w.VERIFYING
      })
    ]
  ), Be("invalid", et, vn), Xo(et, () => o(St), (n) => y(St, n)), U(e, xn);
  var xl = Fi({
    clarify: Dt,
    configure: An,
    getConfiguration: In,
    getFloatingAnchor: Rn,
    getPlugin: _l,
    getState: kn,
    hide: Lt,
    repositionFloating: Pt,
    reset: Qe,
    setFloatingAnchor: $n,
    setState: xe,
    show: Xt,
    verify: Pe,
    get auto() {
      return l();
    },
    set auto(n = void 0) {
      l(n), A();
    },
    get blockspam() {
      return f();
    },
    set blockspam(n = void 0) {
      f(n), A();
    },
    get challengeurl() {
      return s();
    },
    set challengeurl(n = void 0) {
      s(n), A();
    },
    get challengejson() {
      return c();
    },
    set challengejson(n = void 0) {
      c(n), A();
    },
    get credentials() {
      return d();
    },
    set credentials(n = void 0) {
      d(n), A();
    },
    get customfetch() {
      return b();
    },
    set customfetch(n = void 0) {
      b(n), A();
    },
    get debug() {
      return h();
    },
    set debug(n = !1) {
      h(n), A();
    },
    get delay() {
      return m();
    },
    set delay(n = 0) {
      m(n), A();
    },
    get disableautofocus() {
      return p();
    },
    set disableautofocus(n = !1) {
      p(n), A();
    },
    get expire() {
      return x();
    },
    set expire(n = void 0) {
      x(n), A();
    },
    get floating() {
      return E();
    },
    set floating(n = void 0) {
      E(n), A();
    },
    get floatinganchor() {
      return q();
    },
    set floatinganchor(n = void 0) {
      q(n), A();
    },
    get floatingoffset() {
      return ce();
    },
    set floatingoffset(n = void 0) {
      ce(n), A();
    },
    get floatingpersist() {
      return X();
    },
    set floatingpersist(n = !1) {
      X(n), A();
    },
    get hidefooter() {
      return te();
    },
    set hidefooter(n = !1) {
      te(n), A();
    },
    get hidelogo() {
      return z();
    },
    set hidelogo(n = !1) {
      z(n), A();
    },
    get id() {
      return ft();
    },
    set id(n = void 0) {
      ft(n), A();
    },
    get language() {
      return B();
    },
    set language(n = void 0) {
      B(n), A();
    },
    get name() {
      return oe();
    },
    set name(n = "altcha") {
      oe(n), A();
    },
    get maxnumber() {
      return ye();
    },
    set maxnumber(n = 1e6) {
      ye(n), A();
    },
    get mockerror() {
      return Rt();
    },
    set mockerror(n = !1) {
      Rt(n), A();
    },
    get obfuscated() {
      return Ve();
    },
    set obfuscated(n = void 0) {
      Ve(n), A();
    },
    get overlay() {
      return pe();
    },
    set overlay(n = void 0) {
      pe(n), A();
    },
    get overlaycontent() {
      return kt();
    },
    set overlaycontent(n = void 0) {
      kt(n), A();
    },
    get plugins() {
      return Wt();
    },
    set plugins(n = void 0) {
      Wt(n), A();
    },
    get refetchonexpire() {
      return $t();
    },
    set refetchonexpire(n = !0) {
      $t(n), A();
    },
    get sentinel() {
      return Je();
    },
    set sentinel(n = void 0) {
      Je(n), A();
    },
    get spamfilter() {
      return Re();
    },
    set spamfilter(n = !1) {
      Re(n), A();
    },
    get strings() {
      return ct();
    },
    set strings(n = void 0) {
      ct(n), A();
    },
    get test() {
      return ge();
    },
    set test(n = !1) {
      ge(n), A();
    },
    get verifyurl() {
      return re();
    },
    set verifyurl(n = void 0) {
      re(n), A();
    },
    get workers() {
      return dt();
    },
    set workers(n = Math.min(16, navigator.hardwareConcurrency || 8)) {
      dt(n), A();
    },
    get workerurl() {
      return xt();
    },
    set workerurl(n = void 0) {
      xt(n), A();
    }
  });
  return i(), xl;
}
qo(["change", "keydown", "click"]);
customElements.define("altcha-widget", oa(
  Na,
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
globalThis.altchaCreateWorker = (e) => new Worker(new URL(e || "./worker.js", import.meta.url));
export {
  Na as Altcha
};
