var Ol = Object.defineProperty;
var Fn = (e) => {
  throw TypeError(e);
};
var Fl = (e, t, r) => t in e ? Ol(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Ee = (e, t, r) => Fl(e, typeof t != "symbol" ? t + "" : t, r), Vn = (e, t, r) => t.has(e) || Fn("Cannot " + r);
var se = (e, t, r) => (Vn(e, t, "read from private field"), r ? r.call(e) : t.get(e)), xr = (e, t, r) => t.has(e) ? Fn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), Sr = (e, t, r, i) => (Vn(e, t, "write to private field"), i ? i.call(e, r) : t.set(e, r), r);
const Vl = "5";
var Qn;
typeof window < "u" && ((Qn = window.__svelte ?? (window.__svelte = {})).v ?? (Qn.v = /* @__PURE__ */ new Set())).add(Vl);
const Ml = 1, ql = 4, Ul = 8, Bl = 16, jl = 1, Hl = 2, Br = "[", ei = "[!", ti = "]", pt = {}, ue = Symbol(), Yl = "http://www.w3.org/1999/xhtml", Mn = !1;
function ri(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var ni = Array.isArray, Gl = Array.prototype.indexOf, Zl = Array.from, ir = Object.keys, Mt = Object.defineProperty, rt = Object.getOwnPropertyDescriptor, Wl = Object.getOwnPropertyDescriptors, Jl = Object.prototype, Kl = Array.prototype, ii = Object.getPrototypeOf, qn = Object.isExtensible;
const wt = () => {
};
function li(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function zl(e, t, r = !1) {
  return e === void 0 ? r ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
const Ce = 2, oi = 4, cr = 8, jr = 16, Fe = 32, lt = 64, lr = 128, he = 256, or = 512, fe = 1024, Ne = 2048, ot = 4096, Et = 8192, dr = 16384, Xl = 32768, Hr = 65536, Ql = 1 << 19, ai = 1 << 20, Lr = 1 << 21, Ft = Symbol("$state"), si = Symbol("legacy props"), eo = Symbol("");
function to(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ro() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function no(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function io() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function lo() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function oo(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function ao() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function so() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function uo() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function vr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let V = !1;
function yt(e) {
  V = e;
}
let F;
function Ge(e) {
  if (e === null)
    throw vr(), pt;
  return F = e;
}
function Ct() {
  return Ge(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Je(F)
  );
}
function Z(e) {
  if (V) {
    if (/* @__PURE__ */ Je(F) !== null)
      throw vr(), pt;
    F = e;
  }
}
function fo() {
  for (var e = 0, t = F; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === ti) {
        if (e === 0) return t;
        e -= 1;
      } else (r === Br || r === ei) && (e += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Je(t)
    );
    t.remove(), t = i;
  }
}
let co = !1;
function He(e) {
  if (typeof e != "object" || e === null || Ft in e)
    return e;
  const t = ii(e);
  if (t !== Jl && t !== Kl)
    return e;
  var r = /* @__PURE__ */ new Map(), i = ni(e), o = /* @__PURE__ */ O(0), l = N, u = (s) => {
    var c = N;
    De(l);
    var d = s();
    return De(c), d;
  };
  return i && r.set("length", /* @__PURE__ */ O(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, c, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && ao();
        var b = r.get(c);
        return b === void 0 ? (b = u(() => /* @__PURE__ */ O(d.value)), r.set(c, b)) : y(
          b,
          u(() => He(d.value))
        ), !0;
      },
      deleteProperty(s, c) {
        var d = r.get(c);
        if (d === void 0)
          c in s && (r.set(
            c,
            u(() => /* @__PURE__ */ O(ue))
          ), Tr(o));
        else {
          if (i && typeof c == "string") {
            var b = (
              /** @type {Source<number>} */
              r.get("length")
            ), v = Number(c);
            Number.isInteger(v) && v < b.v && y(b, v);
          }
          y(d, ue), Tr(o);
        }
        return !0;
      },
      get(s, c, d) {
        var w;
        if (c === Ft)
          return e;
        var b = r.get(c), v = c in s;
        if (b === void 0 && (!v || (w = rt(s, c)) != null && w.writable) && (b = u(() => /* @__PURE__ */ O(He(v ? s[c] : ue))), r.set(c, b)), b !== void 0) {
          var m = a(b);
          return m === ue ? void 0 : m;
        }
        return Reflect.get(s, c, d);
      },
      getOwnPropertyDescriptor(s, c) {
        var d = Reflect.getOwnPropertyDescriptor(s, c);
        if (d && "value" in d) {
          var b = r.get(c);
          b && (d.value = a(b));
        } else if (d === void 0) {
          var v = r.get(c), m = v == null ? void 0 : v.v;
          if (v !== void 0 && m !== ue)
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
        if (c === Ft)
          return !0;
        var d = r.get(c), b = d !== void 0 && d.v !== ue || Reflect.has(s, c);
        if (d !== void 0 || D !== null && (!b || (m = rt(s, c)) != null && m.writable)) {
          d === void 0 && (d = u(() => /* @__PURE__ */ O(b ? He(s[c]) : ue)), r.set(c, d));
          var v = a(d);
          if (v === ue)
            return !1;
        }
        return b;
      },
      set(s, c, d, b) {
        var z;
        var v = r.get(c), m = c in s;
        if (i && c === "length")
          for (var w = d; w < /** @type {Source<number>} */
          v.v; w += 1) {
            var S = r.get(w + "");
            S !== void 0 ? y(S, ue) : w in s && (S = u(() => /* @__PURE__ */ O(ue)), r.set(w + "", S));
          }
        v === void 0 ? (!m || (z = rt(s, c)) != null && z.writable) && (v = u(() => /* @__PURE__ */ O(void 0)), y(
          v,
          u(() => He(d))
        ), r.set(c, v)) : (m = v.v !== ue, y(
          v,
          u(() => He(d))
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
          Tr(o);
        }
        return !0;
      },
      ownKeys(s) {
        a(o);
        var c = Reflect.ownKeys(s).filter((v) => {
          var m = r.get(v);
          return m === void 0 || m.v !== ue;
        });
        for (var [d, b] of r)
          b.v !== ue && !(d in s) && c.push(d);
        return c;
      },
      setPrototypeOf() {
        so();
      }
    }
  );
}
function Tr(e, t = 1) {
  y(e, e.v + t);
}
var Un, ui, fi, ci;
function Pr() {
  if (Un === void 0) {
    Un = window, ui = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    fi = rt(t, "firstChild").get, ci = rt(t, "nextSibling").get, qn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), qn(r) && (r.__t = void 0);
  }
}
function hr(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function be(e) {
  return fi.call(e);
}
// @__NO_SIDE_EFFECTS__
function Je(e) {
  return ci.call(e);
}
function W(e, t) {
  if (!V)
    return /* @__PURE__ */ be(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ be(F)
  );
  return r === null && (r = F.appendChild(hr())), Ge(r), r;
}
function Lt(e, t) {
  if (!V) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ be(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Je(r) : r;
  }
  return F;
}
function J(e, t = 1, r = !1) {
  let i = V ? F : e;
  for (var o; t--; )
    o = i, i = /** @type {TemplateNode} */
    /* @__PURE__ */ Je(i);
  if (!V)
    return i;
  var l = i == null ? void 0 : i.nodeType;
  if (r && l !== 3) {
    var u = hr();
    return i === null ? o == null || o.after(u) : i.before(u), Ge(u), u;
  }
  return Ge(i), /** @type {TemplateNode} */
  i;
}
function vo(e) {
  e.textContent = "";
}
function di(e) {
  return e === this.v;
}
function vi(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Yr(e) {
  return !vi(e, this.v);
}
// @__NO_SIDE_EFFECTS__
function gr(e) {
  var t = Ce | Ne, r = N !== null && (N.f & Ce) !== 0 ? (
    /** @type {Derived} */
    N
  ) : null;
  return D === null || r !== null && (r.f & he) !== 0 ? t |= he : D.f |= ai, {
    ctx: le,
    deps: null,
    effects: null,
    equals: di,
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
function Pt(e) {
  const t = /* @__PURE__ */ gr(e);
  return Ri(t), t;
}
// @__NO_SIDE_EFFECTS__
function ho(e) {
  const t = /* @__PURE__ */ gr(e);
  return t.equals = Yr, t;
}
function hi(e) {
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
function go(e) {
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
function gi(e) {
  var t, r = D;
  We(go(e));
  try {
    hi(e), t = Si(e);
  } finally {
    We(r);
  }
  return t;
}
function _i(e) {
  var t = gi(e), r = (Ye || (e.f & he) !== 0) && e.deps !== null ? ot : fe;
  Ae(e, r), e.equals(t) || (e.v = t, e.wv = $i());
}
function _o(e) {
  D === null && N === null && no(), N !== null && (N.f & he) !== 0 && D === null && ro(), jt && to();
}
function mo(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function at(e, t, r, i = !0) {
  var o = D, l = {
    ctx: le,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Ne,
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
      Kr(l), l.f |= Xl;
    } catch (c) {
      throw Ze(l), c;
    }
  else t !== null && mr(l);
  var u = r && l.deps === null && l.first === null && l.nodes_start === null && l.teardown === null && (l.f & (ai | lr)) === 0;
  if (!u && i && (o !== null && mo(l, o), N !== null && (N.f & Ce) !== 0)) {
    var s = (
      /** @type {Derived} */
      N
    );
    (s.effects ?? (s.effects = [])).push(l);
  }
  return l;
}
function Gr(e) {
  const t = at(cr, null, !1);
  return Ae(t, fe), t.teardown = e, t;
}
function Or(e) {
  _o();
  var t = D !== null && (D.f & Fe) !== 0 && le !== null && !le.m;
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
    var i = Zr(e);
    return i;
  }
}
function bo(e) {
  const t = at(lt, e, !0);
  return () => {
    Ze(t);
  };
}
function yo(e) {
  const t = at(lt, e, !0);
  return (r = {}) => new Promise((i) => {
    r.outro ? Vr(t, () => {
      Ze(t), i(void 0);
    }) : (Ze(t), i(void 0));
  });
}
function Zr(e) {
  return at(oi, e, !1);
}
function Wr(e) {
  return at(cr, e, !0);
}
function xe(e, t = [], r = gr) {
  const i = t.map(r);
  return mi(() => e(...i.map(a)));
}
function mi(e, t = 0) {
  return at(cr | jr | t, e, !0);
}
function Fr(e, t = !0) {
  return at(cr | Fe, e, !0, t);
}
function bi(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = jt, i = N;
    jn(!0), De(null);
    try {
      t.call(null);
    } finally {
      jn(r), De(i);
    }
  }
}
function yi(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var i = r.next;
    (r.f & lt) !== 0 ? r.parent = null : Ze(r, t), r = i;
  }
}
function po(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Fe) === 0 && Ze(t), t = r;
  }
}
function Ze(e, t = !0) {
  var r = !1;
  (t || (e.f & Ql) !== 0) && e.nodes_start !== null && (pi(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), r = !0), yi(e, t && !r), fr(e, 0), Ae(e, dr);
  var i = e.transitions;
  if (i !== null)
    for (const l of i)
      l.stop();
  bi(e);
  var o = e.parent;
  o !== null && o.first !== null && wi(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function pi(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Je(e)
    );
    e.remove(), e = r;
  }
}
function wi(e) {
  var t = e.parent, r = e.prev, i = e.next;
  r !== null && (r.next = i), i !== null && (i.prev = r), t !== null && (t.first === e && (t.first = i), t.last === e && (t.last = r));
}
function Vr(e, t) {
  var r = [];
  Ei(e, r, !0), wo(r, () => {
    Ze(e), t && t();
  });
}
function wo(e, t) {
  var r = e.length;
  if (r > 0) {
    var i = () => --r || t();
    for (var o of e)
      o.out(i);
  } else
    t();
}
function Ei(e, t, r) {
  if ((e.f & Et) === 0) {
    if (e.f ^= Et, e.transitions !== null)
      for (const u of e.transitions)
        (u.is_global || r) && t.push(u);
    for (var i = e.first; i !== null; ) {
      var o = i.next, l = (i.f & Hr) !== 0 || (i.f & Fe) !== 0;
      Ei(i, t, l ? r : !1), i = o;
    }
  }
}
function Bn(e) {
  Ci(e, !0);
}
function Ci(e, t) {
  if ((e.f & Et) !== 0) {
    e.f ^= Et, (e.f & fe) === 0 && (e.f ^= fe), Ht(e) && (Ae(e, Ne), mr(e));
    for (var r = e.first; r !== null; ) {
      var i = r.next, o = (r.f & Hr) !== 0 || (r.f & Fe) !== 0;
      Ci(r, o ? t : !1), r = i;
    }
    if (e.transitions !== null)
      for (const l of e.transitions)
        (l.is_global || t) && l.in();
  }
}
const Eo = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let qt = [], Ut = [];
function Ai() {
  var e = qt;
  qt = [], li(e);
}
function Ii() {
  var e = Ut;
  Ut = [], li(e);
}
function Jr(e) {
  qt.length === 0 && queueMicrotask(Ai), qt.push(e);
}
function Co(e) {
  Ut.length === 0 && Eo(Ii), Ut.push(e);
}
function Ao() {
  qt.length > 0 && Ai(), Ut.length > 0 && Ii();
}
let tr = !1, ar = !1, sr = null, nt = !1, jt = !1;
function jn(e) {
  jt = e;
}
let Vt = [];
let N = null, Se = !1;
function De(e) {
  N = e;
}
let D = null;
function We(e) {
  D = e;
}
let ie = null;
function Ri(e) {
  N !== null && N.f & Lr && (ie === null ? ie = [e] : ie.push(e));
}
let ne = null, ve = 0, _e = null;
function Io(e) {
  _e = e;
}
let ki = 1, ur = 0, Ye = !1;
function $i() {
  return ++ki;
}
function Ht(e) {
  var v;
  var t = e.f;
  if ((t & Ne) !== 0)
    return !0;
  if ((t & ot) !== 0) {
    var r = e.deps, i = (t & he) !== 0;
    if (r !== null) {
      var o, l, u = (t & or) !== 0, s = i && D !== null && !Ye, c = r.length;
      if (u || s) {
        var d = (
          /** @type {Derived} */
          e
        ), b = d.parent;
        for (o = 0; o < c; o++)
          l = r[o], (u || !((v = l == null ? void 0 : l.reactions) != null && v.includes(d))) && (l.reactions ?? (l.reactions = [])).push(d);
        u && (d.f ^= or), s && b !== null && (b.f & he) === 0 && (d.f ^= he);
      }
      for (o = 0; o < c; o++)
        if (l = r[o], Ht(
          /** @type {Derived} */
          l
        ) && _i(
          /** @type {Derived} */
          l
        ), l.wv > e.wv)
          return !0;
    }
    (!i || D !== null && !Ye) && Ae(e, fe);
  }
  return !1;
}
function Ro(e, t) {
  for (var r = t; r !== null; ) {
    if ((r.f & lr) !== 0)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= lr;
      }
    r = r.parent;
  }
  throw tr = !1, e;
}
function Hn(e) {
  return (e.f & dr) === 0 && (e.parent === null || (e.parent.f & lr) === 0);
}
function _r(e, t, r, i) {
  if (tr) {
    if (r === null && (tr = !1), Hn(t))
      throw e;
    return;
  }
  if (r !== null && (tr = !0), Ro(e, t), Hn(t))
    throw e;
}
function xi(e, t, r = !0) {
  var i = e.reactions;
  if (i !== null)
    for (var o = 0; o < i.length; o++) {
      var l = i[o];
      ie != null && ie.includes(e) || ((l.f & Ce) !== 0 ? xi(
        /** @type {Derived} */
        l,
        t,
        !1
      ) : t === l && (r ? Ae(l, Ne) : (l.f & fe) !== 0 && Ae(l, ot), mr(
        /** @type {Effect} */
        l
      )));
    }
}
function Si(e) {
  var w;
  var t = ne, r = ve, i = _e, o = N, l = Ye, u = ie, s = le, c = Se, d = e.f;
  ne = /** @type {null | Value[]} */
  null, ve = 0, _e = null, Ye = (d & he) !== 0 && (Se || !nt || N === null), N = (d & (Fe | lt)) === 0 ? e : null, ie = null, Yn(e.ctx), Se = !1, ur++, e.f |= Lr;
  try {
    var b = (
      /** @type {Function} */
      (0, e.fn)()
    ), v = e.deps;
    if (ne !== null) {
      var m;
      if (fr(e, ve), v !== null && ve > 0)
        for (v.length = ve + ne.length, m = 0; m < ne.length; m++)
          v[ve + m] = ne[m];
      else
        e.deps = v = ne;
      if (!Ye)
        for (m = ve; m < v.length; m++)
          ((w = v[m]).reactions ?? (w.reactions = [])).push(e);
    } else v !== null && ve < v.length && (fr(e, ve), v.length = ve);
    if (Oi() && _e !== null && !Se && v !== null && (e.f & (Ce | ot | Ne)) === 0)
      for (m = 0; m < /** @type {Source[]} */
      _e.length; m++)
        xi(
          _e[m],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (ur++, _e !== null && (i === null ? i = _e : i.push(.../** @type {Source[]} */
    _e))), b;
  } finally {
    ne = t, ve = r, _e = i, N = o, Ye = l, ie = u, Yn(s), Se = c, e.f ^= Lr;
  }
}
function ko(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var i = Gl.call(r, e);
    if (i !== -1) {
      var o = r.length - 1;
      o === 0 ? r = t.reactions = null : (r[i] = r[o], r.pop());
    }
  }
  r === null && (t.f & Ce) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ne === null || !ne.includes(t)) && (Ae(t, ot), (t.f & (he | or)) === 0 && (t.f ^= or), hi(
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
      ko(e, r[i]);
}
function Kr(e) {
  var t = e.f;
  if ((t & dr) === 0) {
    Ae(e, fe);
    var r = D, i = le, o = nt;
    D = e, nt = !0;
    try {
      (t & jr) !== 0 ? po(e) : yi(e), bi(e);
      var l = Si(e);
      e.teardown = typeof l == "function" ? l : null, e.wv = ki;
      var u = e.deps, s;
      Mn && co && e.f & Ne;
    } catch (c) {
      _r(c, e, r, i || e.ctx);
    } finally {
      nt = o, D = r;
    }
  }
}
function $o() {
  try {
    io();
  } catch (e) {
    if (sr !== null)
      _r(e, sr, null);
    else
      throw e;
  }
}
function Ti() {
  var e = nt;
  try {
    var t = 0;
    for (nt = !0; Vt.length > 0; ) {
      t++ > 1e3 && $o();
      var r = Vt, i = r.length;
      Vt = [];
      for (var o = 0; o < i; o++) {
        var l = So(r[o]);
        xo(l);
      }
      Bt.clear();
    }
  } finally {
    ar = !1, nt = e, sr = null;
  }
}
function xo(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var i = e[r];
      if ((i.f & (dr | Et)) === 0)
        try {
          Ht(i) && (Kr(i), i.deps === null && i.first === null && i.nodes_start === null && (i.teardown === null ? wi(i) : i.fn = null));
        } catch (o) {
          _r(o, i, null, i.ctx);
        }
    }
}
function mr(e) {
  ar || (ar = !0, queueMicrotask(Ti));
  for (var t = sr = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (lt | Fe)) !== 0) {
      if ((r & fe) === 0) return;
      t.f ^= fe;
    }
  }
  Vt.push(t);
}
function So(e) {
  for (var t = [], r = e; r !== null; ) {
    var i = r.f, o = (i & (Fe | lt)) !== 0, l = o && (i & fe) !== 0;
    if (!l && (i & Et) === 0) {
      if ((i & oi) !== 0)
        t.push(r);
      else if (o)
        r.f ^= fe;
      else
        try {
          Ht(r) && Kr(r);
        } catch (c) {
          _r(c, r, null, r.ctx);
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
function I(e) {
  for (var t; ; ) {
    if (Ao(), Vt.length === 0)
      return (
        /** @type {T} */
        t
      );
    ar = !0, Ti();
  }
}
async function Nr() {
  await Promise.resolve(), I();
}
function a(e) {
  var t = e.f, r = (t & Ce) !== 0;
  if (N !== null && !Se) {
    if (!(ie != null && ie.includes(e))) {
      var i = N.deps;
      e.rv < ur && (e.rv = ur, ne === null && i !== null && i[ve] === e ? ve++ : ne === null ? ne = [e] : (!Ye || !ne.includes(e)) && ne.push(e));
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
  e, Ht(o) && _i(o)), jt && Bt.has(e) ? Bt.get(e) : e.v;
}
function it(e) {
  var t = Se;
  try {
    return Se = !0, e();
  } finally {
    Se = t;
  }
}
const To = -7169;
function Ae(e, t) {
  e.f = e.f & To | t;
}
const Bt = /* @__PURE__ */ new Map();
function Ni(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: di,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function O(e, t) {
  const r = Ni(e);
  return Ri(r), r;
}
// @__NO_SIDE_EFFECTS__
function zr(e, t = !1) {
  const r = Ni(e);
  return t || (r.equals = Yr), r;
}
function y(e, t, r = !1) {
  N !== null && !Se && Oi() && (N.f & (Ce | jr)) !== 0 && !(ie != null && ie.includes(e)) && uo();
  let i = r ? He(t) : t;
  return No(e, i);
}
function No(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    jt ? Bt.set(e, t) : Bt.set(e, r), e.v = t, (e.f & Ce) !== 0 && ((e.f & Ne) !== 0 && gi(
      /** @type {Derived} */
      e
    ), Ae(e, (e.f & he) === 0 ? fe : ot)), e.wv = $i(), Di(e, Ne), D !== null && (D.f & fe) !== 0 && (D.f & (Fe | lt)) === 0 && (_e === null ? Io([e]) : _e.push(e));
  }
  return t;
}
function Di(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, o = 0; o < i; o++) {
      var l = r[o], u = l.f;
      (u & Ne) === 0 && (Ae(l, t), (u & (fe | he)) !== 0 && ((u & Ce) !== 0 ? Di(
        /** @type {Derived} */
        l,
        ot
      ) : mr(
        /** @type {Effect} */
        l
      )));
    }
}
let le = null;
function Yn(e) {
  le = e;
}
function Li(e, t = !1, r) {
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
function Pi(e) {
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
          We(l.effect), De(l.reaction), Zr(l.fn);
        }
      } finally {
        We(r), De(i);
      }
    }
    le = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Oi() {
  return !0;
}
const Do = ["touchstart", "touchmove"];
function Lo(e) {
  return Do.includes(e);
}
function Po(e, t) {
  if (t) {
    const r = document.body;
    e.autofocus = !0, Jr(() => {
      document.activeElement === r && e.focus();
    });
  }
}
let Gn = !1;
function Fi() {
  Gn || (Gn = !0, document.addEventListener(
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
function Vi(e) {
  var t = N, r = D;
  De(null), We(null);
  try {
    return e();
  } finally {
    De(t), We(r);
  }
}
function Oo(e, t, r, i = r) {
  e.addEventListener(t, () => Vi(r));
  const o = e.__on_r;
  o ? e.__on_r = () => {
    o(), i(!0);
  } : e.__on_r = () => i(!0), Fi();
}
const Mi = /* @__PURE__ */ new Set(), Mr = /* @__PURE__ */ new Set();
function Fo(e, t, r, i = {}) {
  function o(l) {
    if (i.capture || Ot.call(t, l), !l.cancelBubble)
      return Vi(() => r == null ? void 0 : r.call(this, l));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Jr(() => {
    t.addEventListener(e, o, i);
  }) : t.addEventListener(e, o, i), o;
}
function je(e, t, r, i, o) {
  var l = { capture: i, passive: o }, u = Fo(e, t, r, l);
  (t === document.body || t === window || t === document) && Gr(() => {
    t.removeEventListener(e, u, l);
  });
}
function Vo(e) {
  for (var t = 0; t < e.length; t++)
    Mi.add(e[t]);
  for (var r of Mr)
    r(e);
}
function Ot(e) {
  var z;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), i = e.type, o = ((z = e.composedPath) == null ? void 0 : z.call(e)) || [], l = (
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
    Mt(e, "currentTarget", {
      configurable: !0,
      get() {
        return l || r;
      }
    });
    var b = N, v = D;
    De(null), We(null);
    try {
      for (var m, w = []; l !== null; ) {
        var S = l.assignedSlot || l.parentNode || /** @type {any} */
        l.host || null;
        try {
          var E = l["__" + i];
          if (E != null && (!/** @type {any} */
          l.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === l))
            if (ni(E)) {
              var [q, ...ce] = E;
              q.apply(l, [e, ...ce]);
            } else
              E.call(l, e);
        } catch (te) {
          m ? w.push(te) : m = te;
        }
        if (e.cancelBubble || S === t || S === null)
          break;
        l = S;
      }
      if (m) {
        for (let te of w)
          queueMicrotask(() => {
            throw te;
          });
        throw m;
      }
    } finally {
      e.__root = t, delete e.currentTarget, De(b), We(v);
    }
  }
}
function Xr(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Te(e, t) {
  var r = (
    /** @type {Effect} */
    D
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function Ie(e, t) {
  var r = (t & jl) !== 0, i = (t & Hl) !== 0, o, l = !e.startsWith("<!>");
  return () => {
    if (V)
      return Te(F, null), F;
    o === void 0 && (o = Xr(l ? e : "<!>" + e), r || (o = /** @type {Node} */
    /* @__PURE__ */ be(o)));
    var u = (
      /** @type {TemplateNode} */
      i || ui ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (r) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ be(u)
      ), c = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Te(s, c);
    } else
      Te(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function br(e, t, r = "svg") {
  var i = !e.startsWith("<!>"), o = `<${r}>${i ? e : "<!>" + e}</${r}>`, l;
  return () => {
    if (V)
      return Te(F, null), F;
    if (!l) {
      var u = (
        /** @type {DocumentFragment} */
        Xr(o)
      ), s = (
        /** @type {Element} */
        /* @__PURE__ */ be(u)
      );
      l = /** @type {Element} */
      /* @__PURE__ */ be(s);
    }
    var c = (
      /** @type {TemplateNode} */
      l.cloneNode(!0)
    );
    return Te(c, c), c;
  };
}
function Xt() {
  if (V)
    return Te(F, null), F;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = hr();
  return e.append(t, r), Te(t, r), e;
}
function U(e, t) {
  if (V) {
    D.nodes_end = F, Ct();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Mo(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function qi(e, t) {
  return Ui(e, t);
}
function qo(e, t) {
  Pr(), t.intro = t.intro ?? !1;
  const r = t.target, i = V, o = F;
  try {
    for (var l = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ be(r)
    ); l && (l.nodeType !== 8 || /** @type {Comment} */
    l.data !== Br); )
      l = /** @type {TemplateNode} */
      /* @__PURE__ */ Je(l);
    if (!l)
      throw pt;
    yt(!0), Ge(
      /** @type {Comment} */
      l
    ), Ct();
    const u = Ui(e, { ...t, anchor: l });
    if (F === null || F.nodeType !== 8 || /** @type {Comment} */
    F.data !== ti)
      throw vr(), pt;
    return yt(!1), /**  @type {Exports} */
    u;
  } catch (u) {
    if (u === pt)
      return t.recover === !1 && lo(), Pr(), vo(r), yt(!1), qi(e, t);
    throw u;
  } finally {
    yt(i), Ge(o);
  }
}
const mt = /* @__PURE__ */ new Map();
function Ui(e, { target: t, anchor: r, props: i = {}, events: o, context: l, intro: u = !0 }) {
  Pr();
  var s = /* @__PURE__ */ new Set(), c = (v) => {
    for (var m = 0; m < v.length; m++) {
      var w = v[m];
      if (!s.has(w)) {
        s.add(w);
        var S = Lo(w);
        t.addEventListener(w, Ot, { passive: S });
        var E = mt.get(w);
        E === void 0 ? (document.addEventListener(w, Ot, { passive: S }), mt.set(w, 1)) : mt.set(w, E + 1);
      }
    }
  };
  c(Zl(Mi)), Mr.add(c);
  var d = void 0, b = yo(() => {
    var v = r ?? t.appendChild(hr());
    return Fr(() => {
      if (l) {
        Li({});
        var m = (
          /** @type {ComponentContext} */
          le
        );
        m.c = l;
      }
      o && (i.$$events = o), V && Te(
        /** @type {TemplateNode} */
        v,
        null
      ), d = e(v, i) || {}, V && (D.nodes_end = F), l && Pi();
    }), () => {
      var S;
      for (var m of s) {
        t.removeEventListener(m, Ot);
        var w = (
          /** @type {number} */
          mt.get(m)
        );
        --w === 0 ? (document.removeEventListener(m, Ot), mt.delete(m)) : mt.set(m, w);
      }
      Mr.delete(c), v !== r && ((S = v.parentNode) == null || S.removeChild(v));
    };
  });
  return qr.set(d, b), d;
}
let qr = /* @__PURE__ */ new WeakMap();
function Uo(e, t) {
  const r = qr.get(e);
  return r ? (qr.delete(e), r(t)) : Promise.resolve();
}
function K(e, t, [r, i] = [0, 0]) {
  V && r === 0 && Ct();
  var o = e, l = null, u = null, s = ue, c = r > 0 ? Hr : 0, d = !1;
  const b = (m, w = !0) => {
    d = !0, v(w, m);
  }, v = (m, w) => {
    if (s === (s = m)) return;
    let S = !1;
    if (V && i !== -1) {
      if (r === 0) {
        const q = (
          /** @type {Comment} */
          o.data
        );
        q === Br ? i = 0 : q === ei ? i = 1 / 0 : (i = parseInt(q.substring(1)), i !== i && (i = s ? 1 / 0 : -1));
      }
      const E = i > r;
      !!s === E && (o = fo(), Ge(o), yt(!1), S = !0, i = -1);
    }
    s ? (l ? Bn(l) : w && (l = Fr(() => w(o))), u && Vr(u, () => {
      u = null;
    })) : (u ? Bn(u) : w && (u = Fr(() => w(o, [r + 1, i]))), l && Vr(l, () => {
      l = null;
    })), S && yt(!0);
  };
  mi(() => {
    d = !1, t(b), d || v(null, null);
  }, c), V && (o = F);
}
function tt(e, t, r = !1, i = !1, o = !1) {
  var l = e, u = "";
  xe(() => {
    var s = (
      /** @type {Effect} */
      D
    );
    if (u === (u = t() ?? "")) {
      V && Ct();
      return;
    }
    if (s.nodes_start !== null && (pi(
      s.nodes_start,
      /** @type {TemplateNode} */
      s.nodes_end
    ), s.nodes_start = s.nodes_end = null), u !== "") {
      if (V) {
        F.data;
        for (var c = Ct(), d = c; c !== null && (c.nodeType !== 8 || /** @type {Comment} */
        c.data !== ""); )
          d = c, c = /** @type {TemplateNode} */
          /* @__PURE__ */ Je(c);
        if (c === null)
          throw vr(), pt;
        Te(F, d), l = Ge(c);
        return;
      }
      var b = u + "";
      r ? b = `<svg>${b}</svg>` : i && (b = `<math>${b}</math>`);
      var v = Xr(b);
      if ((r || i) && (v = /** @type {Element} */
      /* @__PURE__ */ be(v)), Te(
        /** @type {TemplateNode} */
        /* @__PURE__ */ be(v),
        /** @type {TemplateNode} */
        v.lastChild
      ), r || i)
        for (; /* @__PURE__ */ be(v); )
          l.before(
            /** @type {Node} */
            /* @__PURE__ */ be(v)
          );
      else
        l.before(v);
    }
  });
}
function Bo(e, t, r, i, o) {
  var s;
  V && Ct();
  var l = (s = t.$$slots) == null ? void 0 : s[r], u = !1;
  l === !0 && (l = t.children, u = !0), l === void 0 || l(e, u ? () => i : i);
}
const Zn = [...` 	
\r\f \v\uFEFF`];
function jo(e, t, r) {
  var i = "" + e;
  if (r) {
    for (var o in r)
      if (r[o])
        i = i ? i + " " + o : o;
      else if (i.length)
        for (var l = o.length, u = 0; (u = i.indexOf(o, u)) >= 0; ) {
          var s = u + l;
          (u === 0 || Zn.includes(i[u - 1])) && (s === i.length || Zn.includes(i[s])) ? i = (u === 0 ? "" : i.substring(0, u)) + i.substring(s + 1) : u = s;
        }
  }
  return i === "" ? null : i;
}
function Ho(e, t, r, i, o, l) {
  var u = e.__className;
  if (V || u !== r || u === void 0) {
    var s = jo(r, i, l);
    (!V || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : e.className = s), e.__className = r;
  } else if (l && o !== l)
    for (var c in l) {
      var d = !!l[c];
      (o == null || d !== !!o[c]) && e.classList.toggle(c, d);
    }
  return l;
}
const Yo = Symbol("is custom element"), Go = Symbol("is html");
function Wn(e) {
  if (V) {
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
    e.__on_r = r, Co(r), Fi();
  }
}
function Zo(e, t) {
  var r = Bi(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function T(e, t, r, i) {
  var o = Bi(e);
  V && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = r) && (t === "loading" && (e[eo] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Wo(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Bi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Yo]: e.nodeName.includes("-"),
      [Go]: e.namespaceURI === Yl
    })
  );
}
var Jn = /* @__PURE__ */ new Map();
function Wo(e) {
  var t = Jn.get(e.nodeName);
  if (t) return t;
  Jn.set(e.nodeName, t = []);
  for (var r, i = e, o = Element.prototype; o !== i; ) {
    r = Wl(i);
    for (var l in r)
      r[l].set && t.push(l);
    i = ii(i);
  }
  return t;
}
function Jo(e, t, r = t) {
  Oo(e, "change", (i) => {
    var o = i ? e.defaultChecked : e.checked;
    r(o);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (V && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  it(t) == null) && r(e.checked), Wr(() => {
    var i = t();
    e.checked = !!i;
  });
}
function Kn(e, t) {
  return e === t || (e == null ? void 0 : e[Ft]) === t;
}
function Qt(e = {}, t, r, i) {
  return Zr(() => {
    var o, l;
    return Wr(() => {
      o = l, l = [], it(() => {
        e !== r(...l) && (t(e, ...l), o && Kn(r(...o), e) && t(null, ...o));
      });
    }), () => {
      Jr(() => {
        l && Kn(r(...l), e) && t(null, ...l);
      });
    };
  }), e;
}
function ji(e) {
  le === null && ri(), Or(() => {
    const t = it(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Ko(e) {
  le === null && ri(), ji(() => () => it(e));
}
function Hi(e, t, r) {
  if (e == null)
    return t(void 0), wt;
  const i = it(
    () => e.subscribe(
      t,
      // @ts-expect-error
      r
    )
  );
  return i.unsubscribe ? () => i.unsubscribe() : i;
}
const bt = [];
function zo(e, t = wt) {
  let r = null;
  const i = /* @__PURE__ */ new Set();
  function o(s) {
    if (vi(e, s) && (e = s, r)) {
      const c = !bt.length;
      for (const d of i)
        d[1](), bt.push(d, e);
      if (c) {
        for (let d = 0; d < bt.length; d += 2)
          bt[d][0](bt[d + 1]);
        bt.length = 0;
      }
    }
  }
  function l(s) {
    o(s(
      /** @type {T} */
      e
    ));
  }
  function u(s, c = wt) {
    const d = [s, c];
    return i.add(d), i.size === 1 && (r = t(o, l) || wt), s(
      /** @type {T} */
      e
    ), () => {
      i.delete(d), i.size === 0 && r && (r(), r = null);
    };
  }
  return { set: o, update: l, subscribe: u };
}
function rr(e) {
  let t;
  return Hi(e, (r) => t = r)(), t;
}
let er = !1, Ur = Symbol();
function Xo(e, t, r) {
  const i = r[t] ?? (r[t] = {
    store: null,
    source: /* @__PURE__ */ zr(void 0),
    unsubscribe: wt
  });
  if (i.store !== e && !(Ur in r))
    if (i.unsubscribe(), i.store = e ?? null, e == null)
      i.source.v = void 0, i.unsubscribe = wt;
    else {
      var o = !0;
      i.unsubscribe = Hi(e, (l) => {
        o ? i.source.v = l : y(i.source, l);
      }), o = !1;
    }
  return e && Ur in r ? rr(e) : a(i.source);
}
function Qo() {
  const e = {};
  function t() {
    Gr(() => {
      for (var r in e)
        e[r].unsubscribe();
      Mt(e, Ur, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function ea(e) {
  var t = er;
  try {
    return er = !1, [e(), er];
  } finally {
    er = t;
  }
}
function zn(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function k(e, t, r, i) {
  var st;
  var o = (r & Ml) !== 0, l = !0, u = (r & Ul) !== 0, s = (r & Bl) !== 0, c = !1, d;
  u ? [d, c] = ea(() => (
    /** @type {V} */
    e[t]
  )) : d = /** @type {V} */
  e[t];
  var b = Ft in e || si in e, v = u && (((st = rt(e, t)) == null ? void 0 : st.set) ?? (b && t in e && ((B) => e[t] = B))) || void 0, m = (
    /** @type {V} */
    i
  ), w = !0, S = !1, E = () => (S = !0, w && (w = !1, s ? m = it(
    /** @type {() => V} */
    i
  ) : m = /** @type {V} */
  i), m);
  d === void 0 && i !== void 0 && (v && l && oo(), d = E(), v && v(d));
  var q;
  if (q = () => {
    var B = (
      /** @type {V} */
      e[t]
    );
    return B === void 0 ? E() : (w = !0, S = !1, B);
  }, (r & ql) === 0)
    return q;
  if (v) {
    var ce = e.$$legacy;
    return function(B, oe) {
      return arguments.length > 0 ? ((!oe || ce || c) && v(oe ? q() : B), B) : q();
    };
  }
  var z = !1, te = /* @__PURE__ */ zr(d), X = /* @__PURE__ */ gr(() => {
    var B = q(), oe = a(te);
    return z ? (z = !1, oe) : te.v = B;
  });
  return u && a(X), o || (X.equals = Yr), function(B, oe) {
    if (arguments.length > 0) {
      const ye = oe ? a(X) : u ? He(B) : B;
      if (!X.equals(ye)) {
        if (z = !0, y(te, ye), S && m !== void 0 && (m = ye), zn(X))
          return B;
        it(() => a(X));
      }
      return B;
    }
    return zn(X) ? X.v : a(X);
  };
}
function ta(e) {
  return new ra(e);
}
var Oe, me;
class ra {
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
    var r = /* @__PURE__ */ new Map(), i = (u, s) => {
      var c = /* @__PURE__ */ zr(s);
      return r.set(u, c), c;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(u, s) {
          return a(r.get(s) ?? i(s, Reflect.get(u, s)));
        },
        has(u, s) {
          return s === si ? !0 : (a(r.get(s) ?? i(s, Reflect.get(u, s))), Reflect.has(u, s));
        },
        set(u, s, c) {
          return y(r.get(s) ?? i(s, c), c), Reflect.set(u, s, c);
        }
      }
    );
    Sr(this, me, (t.hydrate ? qo : qi)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((l = t == null ? void 0 : t.props) != null && l.$$host) || t.sync === !1) && I(), Sr(this, Oe, o.$$events);
    for (const u of Object.keys(se(this, me)))
      u === "$set" || u === "$destroy" || u === "$on" || Mt(this, u, {
        get() {
          return se(this, me)[u];
        },
        /** @param {any} value */
        set(s) {
          se(this, me)[u] = s;
        },
        enumerable: !0
      });
    se(this, me).$set = /** @param {Record<string, any>} next */
    (u) => {
      Object.assign(o, u);
    }, se(this, me).$destroy = () => {
      Uo(se(this, me));
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
    const i = (...o) => r.call(this, ...o);
    return se(this, Oe)[t].push(i), () => {
      se(this, Oe)[t] = se(this, Oe)[t].filter(
        /** @param {any} fn */
        (o) => o !== i
      );
    };
  }
  $destroy() {
    se(this, me).$destroy();
  }
}
Oe = new WeakMap(), me = new WeakMap();
let Yi;
typeof HTMLElement == "function" && (Yi = class extends HTMLElement {
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
          o !== "default" && (u.name = o), U(l, u);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, i = na(this);
      for (const o of this.$$s)
        o in i && (o === "default" && !this.$$d.children ? (this.$$d.children = t(o), r.default = !0) : r[o] = t(o));
      for (const o of this.attributes) {
        const l = this.$$g_p(o.name);
        l in this.$$d || (this.$$d[l] = nr(l, o.value, this.$$p_d, "toProp"));
      }
      for (const o in this.$$p_d)
        !(o in this.$$d) && this[o] !== void 0 && (this.$$d[o] = this[o], delete this[o]);
      this.$$c = ta({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = bo(() => {
        Wr(() => {
          var o;
          this.$$r = !0;
          for (const l of ir(this.$$c)) {
            if (!((o = this.$$p_d[l]) != null && o.reflect)) continue;
            this.$$d[l] = this.$$c[l];
            const u = nr(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = nr(t, i, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [t]: this.$$d[t] }));
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
function nr(e, t, r, i) {
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
function na(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function ia(e, t, r, i, o, l) {
  let u = class extends Yi {
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
    Mt(u.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(c) {
        var v;
        c = nr(s, c, t), this.$$d[s] = c;
        var d = this.$$c;
        if (d) {
          var b = (v = rt(d, s)) == null ? void 0 : v.get;
          b ? d[s] = c : d.$set({ [s]: c });
        }
      }
    });
  }), i.forEach((s) => {
    Mt(u.prototype, s, {
      get() {
        var c;
        return (c = this.$$c) == null ? void 0 : c[s];
      }
    });
  }), e.element = /** @type {any} */
  u, u;
}
const Gi = new TextEncoder();
function la(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function oa(e, t = "SHA-256", r = 1e5) {
  const i = Date.now().toString(16);
  e || (e = Math.round(Math.random() * r));
  const o = await Zi(i, e, t);
  return {
    algorithm: t,
    challenge: o,
    salt: i,
    signature: ""
  };
}
async function Zi(e, t, r) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return la(
    await crypto.subtle.digest(
      r.toUpperCase(),
      Gi.encode(e + t)
    )
  );
}
function aa(e, t, r = "SHA-256", i = 1e6, o = 0) {
  const l = new AbortController(), u = Date.now();
  return {
    promise: (async () => {
      for (let c = o; c <= i; c += 1) {
        if (l.signal.aborted)
          return null;
        if (await Zi(t, c, r) === e)
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
function Xn() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function sa(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let i = 0; i < t.length; i++)
    r[i] = t.charCodeAt(i);
  return r;
}
function ua(e, t = 12) {
  const r = new Uint8Array(t);
  for (let i = 0; i < t; i++)
    r[i] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function fa(e, t = "", r = 1e6, i = 0) {
  const o = "AES-GCM", l = new AbortController(), u = Date.now(), s = async () => {
    for (let b = i; b <= r; b += 1) {
      if (l.signal.aborted || !c || !d)
        return null;
      try {
        const v = await crypto.subtle.decrypt(
          {
            name: o,
            iv: ua(b)
          },
          c,
          d
        );
        if (v)
          return {
            clearText: new TextDecoder().decode(v),
            took: Date.now() - u
          };
      } catch {
      }
    }
    return null;
  };
  let c = null, d = null;
  try {
    d = sa(e);
    const b = await crypto.subtle.digest(
      "SHA-256",
      Gi.encode(t)
    );
    c = await crypto.subtle.importKey(
      "raw",
      b,
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
var C = /* @__PURE__ */ ((e) => (e.CODE = "code", e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(C || {}), ee = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.LOADING = "loading", e.PLAYING = "playing", e.PAUSED = "paused", e.READY = "ready", e))(ee || {});
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (e) => rr(globalThis.altchaI18n.store)[e],
  set: (e, t) => {
    Object.assign(rr(globalThis.altchaI18n.store), {
      [e]: t
    }), globalThis.altchaI18n.store.set(rr(globalThis.altchaI18n.store));
  },
  store: zo({})
};
const ca = {
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
globalThis.altchaI18n.set("en", ca);
const Dr = (e, t) => {
  let r = /* @__PURE__ */ ho(() => zl(t == null ? void 0 : t(), 24));
  var i = ga();
  xe(() => {
    T(i, "width", a(r)), T(i, "height", a(r));
  }), U(e, i);
};
function da(e, t) {
  e.code === "Space" && (e.preventDefault(), e.stopImmediatePropagation(), t());
}
function va(e, t) {
  e.preventDefault(), t();
}
function ha(e, t, r, i, o, l, u, s) {
  var c;
  [
    C.UNVERIFIED,
    C.ERROR,
    C.EXPIRED,
    C.CODE
  ].includes(a(t)) ? r() !== !1 && ((c = a(i)) == null ? void 0 : c.reportValidity()) === !1 ? y(o, !1) : l() ? u() : s() : y(o, !0);
}
var ga = /* @__PURE__ */ br('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="altcha-spinner"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor"></path></svg>'), _a = /* @__PURE__ */ Ie('<input type="hidden">'), ma = /* @__PURE__ */ Ie('<div><a target="_blank" class="altcha-logo" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor"></path></svg></a></div>'), ba = /* @__PURE__ */ br('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg>'), ya = /* @__PURE__ */ br('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z"></path></svg>'), pa = /* @__PURE__ */ br('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"></path></svg>'), wa = /* @__PURE__ */ Ie('<button type="button" class="altcha-code-challenge-audio"><!></button>'), Ea = /* @__PURE__ */ Ie("<audio hidden autoplay><source></audio>"), Ca = /* @__PURE__ */ Ie('<div class="altcha-code-challenge" role="dialog"><div class="altcha-code-challenge-arrow"></div> <form data-code-challenge-form="1"><img class="altcha-code-challenge-image" alt=""> <input type="text" autocomplete="off" name="code" class="altcha-code-challenge-input" required> <div class="altcha-code-challenge-buttons"><div class="altcha-code-challenge-buttons-left"><!> <button type="button" class="altcha-code-challenge-reload"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z"></path></svg></button></div> <button type="submit" class="altcha-code-challenge-verify"><!> </button></div> <!></form></div>'), Aa = /* @__PURE__ */ Ie("<div><!></div>"), Ia = /* @__PURE__ */ Ie("<div><!></div>"), Ra = /* @__PURE__ */ Ie('<div class="altcha-error"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg> <!></div>'), ka = /* @__PURE__ */ Ie('<div class="altcha-footer"><div><!></div></div>'), $a = /* @__PURE__ */ Ie('<div class="altcha-anchor-arrow"></div>'), xa = /* @__PURE__ */ Ie('<!> <div class="altcha"><div class="altcha-main"><div><!> <input type="checkbox"></div> <label class="altcha-label"><!></label> <!> <!> <!></div> <!> <!> <!></div>', 1);
function Sa(e, t) {
  var Pn, On;
  Li(t, !0);
  const [r, i] = Qo(), o = () => Xo(Ji, "$altchaI18nStore", r);
  let l = k(t, "auto", 7, void 0), u = k(t, "blockspam", 7, void 0), s = k(t, "challengeurl", 7, void 0), c = k(t, "challengejson", 7, void 0), d = k(t, "credentials", 7, void 0), b = k(t, "customfetch", 7, void 0), v = k(t, "debug", 7, !1), m = k(t, "delay", 7, 0), w = k(t, "disableautofocus", 7, !1), S = k(t, "expire", 7, void 0), E = k(t, "floating", 7, void 0), q = k(t, "floatinganchor", 7, void 0), ce = k(t, "floatingoffset", 7, void 0), z = k(t, "floatingpersist", 7, !1), te = k(t, "hidefooter", 7, !1), X = k(t, "hidelogo", 7, !1), st = k(t, "id", 7, void 0), B = k(t, "language", 7, void 0), oe = k(t, "name", 7, "altcha"), ye = k(t, "maxnumber", 7, 1e6), At = k(t, "mockerror", 7, !1), Ve = k(t, "obfuscated", 7, void 0), pe = k(t, "overlay", 7, void 0), It = k(t, "overlaycontent", 7, void 0), Yt = k(t, "plugins", 7, void 0), Rt = k(t, "refetchonexpire", 7, !0), Ke = k(t, "sentinel", 7, void 0), Re = k(t, "spamfilter", 7, !1), ut = k(t, "strings", 7, void 0), ge = k(t, "test", 7, !1), re = k(t, "verifyurl", 7, void 0), ft = k(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), kt = k(t, "workerurl", 7, void 0);
  const { altchaI18n: Wi } = globalThis, Ji = Wi.store, Qr = ["SHA-256", "SHA-384", "SHA-512"], Ki = "https://altcha.org/", Me = (n, f) => {
    t.$$host.dispatchEvent(new CustomEvent(n, { detail: f }));
  }, en = (On = (Pn = document.documentElement.lang) == null ? void 0 : Pn.split("-")) == null ? void 0 : On[0], yr = /* @__PURE__ */ Pt(() => {
    var n;
    return s() && new URL(s(), location.origin).host.endsWith(".altcha.org") && !!((n = s()) != null && n.includes("apiKey=ckey_"));
  }), pr = /* @__PURE__ */ Pt(() => c() ? _n(c()) : void 0), zi = /* @__PURE__ */ Pt(() => ut() ? _n(ut()) : {}), P = /* @__PURE__ */ Pt(() => ({
    ...ln(o()),
    ...a(zi)
  })), tn = /* @__PURE__ */ Pt(() => `${st() || oe()}_checkbox_${Math.round(Math.random() * 1e8)}`);
  let $t = /* @__PURE__ */ O(!1), H = /* @__PURE__ */ O(null), $ = /* @__PURE__ */ O(He(C.UNVERIFIED)), M = /* @__PURE__ */ O(void 0), xt = /* @__PURE__ */ O(null), qe = /* @__PURE__ */ O(null), de = /* @__PURE__ */ O(null), wr = /* @__PURE__ */ O(null), ct = /* @__PURE__ */ O(null), L = /* @__PURE__ */ O(null), dt = /* @__PURE__ */ O(null), ze = /* @__PURE__ */ O(null), ke = null, Y = /* @__PURE__ */ O(null), Xe = /* @__PURE__ */ O(!1), Ue = [], Er = /* @__PURE__ */ O(!1), Le = /* @__PURE__ */ O(null);
  Or(() => {
    fl(a(ze));
  }), Or(() => {
    cl(a($));
  }), Ko(() => {
    Xi(), y(dt, null), a(L) && (a(L).removeEventListener("submit", cn), a(L).removeEventListener("reset", dn), a(L).removeEventListener("focusin", fn), y(L, null)), ke && (clearTimeout(ke), ke = null), document.removeEventListener("click", sn), document.removeEventListener("scroll", un), window.removeEventListener("resize", gn);
  }), ji(() => {
    var n;
    x("mounted", "2.1.0"), x("workers", ft()), rl(), x("plugins", Ue.length ? Ue.map((f) => f.constructor.pluginName).join(", ") : "none"), ge() && x("using test mode"), S() && Ar(S()), l() !== void 0 && x("auto", l()), E() !== void 0 && bn(E()), y(L, (n = a(M)) == null ? void 0 : n.closest("form"), !0), a(L) && (a(L).addEventListener("submit", cn, { capture: !0 }), a(L).addEventListener("reset", dn), (l() === "onfocus" || z() === "focus") && a(L).addEventListener("focusin", fn)), pe() && yn(!0), l() === "onload" && (Ve() ? St() : Pe()), a(yr) && (te() || X()) && x("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      Me("load");
    });
  });
  function Gt(n, f) {
    return btoa(JSON.stringify({
      algorithm: n.algorithm,
      challenge: n.challenge,
      number: f.number,
      salt: n.salt,
      signature: n.signature,
      test: ge() ? !0 : void 0,
      took: f.took
    }));
  }
  function Xi() {
    for (const n of Ue)
      n.destroy();
  }
  function rn() {
    s() && Rt() && a($) === C.VERIFIED ? Pe() : Qe(C.EXPIRED, a(P).expired);
  }
  async function Qi() {
    var n;
    if (At())
      throw x("mocking error"), new Error("Mocked error.");
    if (a(pr))
      return x("using provided json data"), a(pr);
    if (ge())
      return x("generating test challenge", { test: ge() }), oa(typeof ge() != "boolean" ? +ge() : void 0);
    {
      if (!s() && a(L)) {
        const R = a(L).getAttribute("action");
        R != null && R.includes("/form/") && s(R + "/altcha");
      }
      if (!s())
        throw new Error("Attribute challengeurl not set.");
      x("fetching challenge from", s());
      const f = {
        credentials: typeof d() == "boolean" ? "include" : d(),
        headers: Re() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      }, h = await nn()(s(), f);
      if (!h || !(h instanceof Response))
        throw new Error("Custom fetch function did not return a response.");
      if (h.status !== 200)
        throw new Error(`Server responded with ${h.status}.`);
      const _ = h.headers.get("X-Altcha-Config"), g = await h.json(), A = new URLSearchParams((n = g.salt.split("?")) == null ? void 0 : n[1]), p = A.get("expires") || A.get("expire");
      if (p) {
        const R = new Date(+p * 1e3), j = isNaN(R.getTime()) ? 0 : R.getTime() - Date.now();
        j > 0 && Ar(j);
      }
      if (_)
        try {
          const R = JSON.parse(_);
          R && typeof R == "object" && (R.verifyurl && !R.verifyurl.startsWith("fn:") && (R.verifyurl = an(R.verifyurl)), En(R));
        } catch (R) {
          x("unable to configure from X-Altcha-Config", R);
        }
      return g;
    }
  }
  function el(n) {
    var h, _;
    const f = (h = a(L)) == null ? void 0 : h.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((_ = f == null ? void 0 : f.value) == null ? void 0 : _.slice(f.value.indexOf("@"))) || void 0;
  }
  function nn() {
    let n = fetch;
    if (b())
      if (x("using customfetch"), typeof b() == "string") {
        if (n = globalThis[b()] || null, !n)
          throw new Error(`Custom fetch function not found: ${b()}`);
      } else
        n = b();
    return n;
  }
  function ln(n, f = [
    B() || "",
    document.documentElement.lang || "",
    ...navigator.languages
  ]) {
    const h = Object.keys(n).map((g) => g.toLowerCase()), _ = f.reduce(
      (g, A) => (A = A.toLowerCase(), g || (n[A] ? A : null) || h.find((p) => A.split("-")[0] === p.split("-")[0]) || null),
      null
    );
    return n[_ || "en"];
  }
  function tl() {
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
    var h;
    return [
      ...((h = a(L)) == null ? void 0 : h.querySelectorAll(n != null && n.length ? n.map((_) => `input[name="${_}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (_, g) => {
        const A = g.name, p = g.value;
        return A && p && (_[A] = /\n/.test(p) ? p.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : p), _;
      },
      {}
    );
  }
  function an(n, f) {
    const h = new URL(s() || location.origin), _ = new URL(n, h);
    if (_.search || (_.search = h.search), f)
      for (const g in f)
        f[g] !== void 0 && f[g] !== null && _.searchParams.set(g, f[g]);
    return _.toString();
  }
  function rl() {
    const n = Yt() !== void 0 ? Yt().split(",") : void 0;
    for (const f of globalThis.altchaPlugins)
      (!n || n.includes(f.pluginName)) && Ue.push(new f({
        el: a(M),
        clarify: St,
        dispatch: Me,
        getConfiguration: Cn,
        getFloatingAnchor: An,
        getState: In,
        log: x,
        reset: Qe,
        solve: wn,
        setState: $e,
        setFloatingAnchor: Rn,
        verify: Pe
      }));
  }
  function x(...n) {
    (v() || n.some((f) => f instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${oe()}]`, ...n);
  }
  function nl() {
    y(Y, ee.PAUSED, !0);
  }
  function il(n) {
    y(Y, ee.ERROR, !0);
  }
  function ll() {
    y(Y, ee.READY, !0);
  }
  function ol() {
    y(Y, ee.LOADING, !0);
  }
  function al() {
    y(Y, ee.PLAYING, !0);
  }
  function sl() {
    y(Y, ee.PAUSED, !0);
  }
  function ul(n) {
    var f;
    if (n.preventDefault(), n.stopPropagation(), a(H)) {
      const h = new FormData(n.target), _ = String(h.get("code"));
      if ((f = re()) != null && f.startsWith("fn:")) {
        const g = re().replace(/^fn:/, "");
        if (x(`calling ${g} function instead of verifyurl`), !(g in globalThis))
          throw new Error(`Global function "${g}" is undefined.`);
        return globalThis[g]({
          challenge: a(H).challenge,
          code: _,
          solution: a(H).solution
        });
      }
      y(Xe, !0), mn(Gt(a(H).challenge, a(H).solution), _).then(({ reason: g, verified: A }) => {
        A ? (y(H, null), $e(C.VERIFIED), x("verified"), Nr().then(() => {
          var p;
          (p = a(wr)) == null || p.focus(), Me("verified", { payload: a(Le) }), l() === "onsubmit" ? Cr(a(dt)) : pe() && Tt();
        })) : (Qe(), y(ze, g || "Verification failed", !0));
      }).catch((g) => {
        y(H, null), $e(C.ERROR, g), x("sentinel verification failed:", g);
      }).finally(() => {
        y(Xe, !1);
      });
    }
  }
  function sn(n) {
    var h;
    const f = n.target;
    E() && f && !a(M).contains(f) && (a($) === C.VERIFIED && z() === !1 || a($) === C.VERIFIED && z() === "focus" && !((h = a(L)) != null && h.matches(":focus-within")) || l() === "off" && a($) === C.UNVERIFIED) && Tt();
  }
  function un() {
    E() && a($) !== C.UNVERIFIED && Nt();
  }
  function fl(n) {
    for (const f of Ue)
      typeof f.onErrorChange == "function" && f.onErrorChange(a(ze));
  }
  function fn(n) {
    a($) === C.UNVERIFIED ? Pe() : E() && z() === "focus" && a($) === C.VERIFIED && Zt();
  }
  function cn(n) {
    var _;
    const f = n.target;
    f != null && f.hasAttribute("data-code-challenge-form") || (y(dt, n.submitter, !0), a(L) && l() === "onsubmit" ? ((_ = a(dt)) == null || _.blur(), a($) === C.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), Pe().then(() => {
      Cr(a(dt));
    })) : a($) !== C.VERIFIED && (n.preventDefault(), n.stopPropagation(), a($) === C.VERIFYING && vn())) : a(L) && E() && l() === "off" && a($) === C.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), Zt()));
  }
  function dn() {
    Qe();
  }
  function vn() {
    a($) === C.VERIFYING && a(P).waitAlert && alert(a(P).waitAlert);
  }
  function hn() {
    a(qe) ? a(qe).paused ? (a(qe).currentTime = 0, a(qe).play()) : a(qe).pause() : (y(Er, !0), requestAnimationFrame(() => {
      var n;
      (n = a(qe)) == null || n.play();
    }));
  }
  function cl(n) {
    for (const f of Ue)
      typeof f.onStateChange == "function" && f.onStateChange(a($));
    E() && a($) !== C.UNVERIFIED && requestAnimationFrame(() => {
      Nt();
    }), y($t, a($) === C.VERIFIED), pe() && a(de) && (a($) !== C.UNVERIFIED ? Zt() : Tt());
  }
  function gn() {
    E() && Nt();
  }
  function _n(n) {
    return JSON.parse(n);
  }
  async function dl(n) {
    if (!re())
      throw new Error("Attribute verifyurl not set.");
    x("requesting server verification from", re());
    const f = { payload: n };
    if (Re() !== !1) {
      const {
        blockedCountries: g,
        classifier: A,
        disableRules: p,
        email: R,
        expectedLanguages: j,
        expectedCountries: Q,
        fields: ae,
        ipAddress: Be,
        text: Rr,
        timeZone: Kt
      } = tl();
      f.blockedCountries = g, f.classifier = A, f.disableRules = p, f.email = R === !1 ? void 0 : el(R), f.expectedCountries = Q, f.expectedLanguages = j || (en ? [en] : void 0), f.fields = ae === !1 ? void 0 : on(ae), f.ipAddress = Be === !1 ? void 0 : Be || "auto", f.text = Rr, f.timeZone = Kt === !1 ? void 0 : Kt || Xn();
    }
    const h = await nn()(re(), {
      body: JSON.stringify(f),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (!h || !(h instanceof Response))
      throw new Error("Custom fetch function did not return a response.");
    if (h.status !== 200)
      throw new Error(`Server responded with ${h.status}.`);
    const _ = await h.json();
    if (_ != null && _.payload && y(Le, _.payload, !0), Me("serververification", _), u() && _.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  async function mn(n, f) {
    if (!re())
      throw new Error("Attribute verifyurl not set.");
    x("requesting sentinel verification from", re());
    const h = { code: f, payload: n };
    Ke() && (h.fields = Ke().fields ? on() : void 0, h.timeZone = Ke().timeZone ? Xn() : void 0);
    const _ = await fetch(re(), {
      body: JSON.stringify(h),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (!_ || !(_ instanceof Response))
      throw new Error("Fetch function did not return a response.");
    if (_.status !== 200)
      throw new Error(`Server responded with ${_.status}.`);
    const g = await _.json();
    return g != null && g.payload && y(Le, g.payload, !0), Me("sentinelverification", g), g;
  }
  function Cr(n) {
    var f;
    a(L) && "requestSubmit" in a(L) ? a(L).requestSubmit(n) : (f = a(L)) != null && f.reportValidity() && (n ? n.click() : a(L).submit());
  }
  function Ar(n) {
    x("expire", n), ke && (clearTimeout(ke), ke = null), n < 1 ? rn() : ke = setTimeout(rn, n);
  }
  function bn(n) {
    x("floating", n), E() !== n && (a(M).style.left = "", a(M).style.top = ""), E(n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : E()), E() ? (l() || l("onsubmit"), document.addEventListener("scroll", un), document.addEventListener("click", sn), window.addEventListener("resize", gn)) : l() === "onsubmit" && l(void 0);
  }
  function yn(n) {
    var f, h;
    if (x("overlay", n), pe(n), n) {
      if (l() || l("onsubmit"), a(de) && a(M).parentElement && a(de).replaceWith(a(M).parentElement), (h = (f = a(M)) == null ? void 0 : f.parentElement) != null && h.parentElement) {
        y(de, document.createElement("div"), !0), a(M).parentElement.parentElement.appendChild(a(de));
        const _ = document.createElement("div"), g = document.createElement("button");
        g.type = "button", g.innerHTML = "&times;", g.addEventListener("click", (A) => {
          A.preventDefault(), Qe();
        }), a(de).classList.add("altcha-overlay-backdrop"), g.classList.add("altcha-overlay-close-button"), _.classList.add("altcha-overlay"), a(de).append(_), _.append(g), It() && _.append(...document.querySelectorAll(It())), _.append(a(M).parentElement);
      }
    } else a(de) && a(M).parentElement && (a(de).replaceWith(a(M).parentElement), a(M).style.display = "block");
  }
  function pn(n) {
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
  async function wn(n) {
    let f = null;
    if ("Worker" in window) {
      try {
        f = await vl(n, n.maxNumber || n.maxnumber || ye());
      } catch (h) {
        x(h);
      }
      if ((f == null ? void 0 : f.number) !== void 0 || "obfuscated" in n)
        return { data: n, solution: f };
    }
    if ("obfuscated" in n) {
      const h = await fa(n.obfuscated, n.key, n.maxNumber || n.maxnumber);
      return { data: n, solution: await h.promise };
    }
    return {
      data: n,
      solution: await aa(n.challenge, n.salt, n.algorithm, n.maxNumber || n.maxnumber || ye()).promise
    };
  }
  async function vl(n, f = typeof ge() == "number" ? ge() : n.maxNumber || n.maxnumber || ye(), h = Math.ceil(ft())) {
    const _ = [];
    h = Math.min(16, f, Math.max(1, h));
    for (let p = 0; p < h; p++)
      _.push(altchaCreateWorker(kt()));
    const g = Math.ceil(f / h), A = await Promise.all(_.map((p, R) => {
      const j = R * g;
      return new Promise((Q) => {
        p.addEventListener("message", (ae) => {
          if (ae.data)
            for (const Be of _)
              Be !== p && Be.postMessage({ type: "abort" });
          Q(ae.data);
        }), p.postMessage({
          payload: n,
          max: j + g,
          start: j,
          type: "work"
        });
      });
    }));
    for (const p of _)
      p.terminate();
    return A.find((p) => !!p) || null;
  }
  async function St() {
    if (!Ve()) {
      $e(C.ERROR);
      return;
    }
    const n = Ue.find((f) => f.constructor.pluginName === "obfuscation");
    if (!n || !("clarify" in n)) {
      $e(C.ERROR), x("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in n && typeof n.clarify == "function")
      return n.clarify();
  }
  function En(n) {
    n.obfuscated !== void 0 && Ve(n.obfuscated), n.auto !== void 0 && (l(n.auto), l() === "onload" && (Ve() ? St() : Pe())), n.blockspam !== void 0 && u(!!n.blockspam), n.customfetch !== void 0 && b(n.customfetch), n.floatinganchor !== void 0 && q(n.floatinganchor), n.delay !== void 0 && m(n.delay), n.floatingoffset !== void 0 && ce(n.floatingoffset), n.floating !== void 0 && bn(n.floating), n.expire !== void 0 && (Ar(n.expire), S(n.expire)), n.challenge && (c(typeof n.challenge == "string" ? n.challenge : JSON.stringify(n.challenge)), pn(a(pr))), n.challengeurl !== void 0 && s(n.challengeurl), n.debug !== void 0 && v(!!n.debug), n.hidefooter !== void 0 && te(!!n.hidefooter), n.hidelogo !== void 0 && X(!!n.hidelogo), n.language !== void 0 && ut(ln(o(), [n.language])), n.maxnumber !== void 0 && ye(+n.maxnumber), n.mockerror !== void 0 && At(!!n.mockerror), n.name !== void 0 && oe(n.name), n.overlaycontent !== void 0 && It(n.overlaycontent), n.overlay !== void 0 && yn(n.overlay), n.refetchonexpire !== void 0 && Rt(!!n.refetchonexpire), n.sentinel !== void 0 && typeof n.sentinel == "object" && Ke(n.sentinel), n.spamfilter !== void 0 && Re(typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && ut(typeof n.strings == "string" ? n.strings : JSON.stringify(n.strings)), n.test !== void 0 && ge(typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && re(n.verifyurl), n.workers !== void 0 && ft(+n.workers), n.workerurl !== void 0 && kt(n.workerurl);
  }
  function Cn() {
    return {
      auto: l(),
      blockspam: u(),
      challengeurl: s(),
      debug: v(),
      delay: m(),
      expire: S(),
      floating: E(),
      floatinganchor: q(),
      floatingoffset: ce(),
      hidefooter: te(),
      hidelogo: X(),
      name: oe(),
      maxnumber: ye(),
      mockerror: At(),
      obfuscated: Ve(),
      overlay: pe(),
      refetchonexpire: Rt(),
      spamfilter: Re(),
      strings: a(P),
      test: ge(),
      verifyurl: re(),
      workers: ft(),
      workerurl: kt()
    };
  }
  function An() {
    return a(ct);
  }
  function hl(n) {
    return Ue.find((f) => f.constructor.pluginName === n);
  }
  function In() {
    return a($);
  }
  function Tt() {
    a(M).style.display = "none", pe() && a(de) && (a(de).style.display = "none");
  }
  function Nt(n = 20) {
    var f;
    if (a(M))
      if (a(ct) || y(ct, (q() ? document.querySelector(q()) : (f = a(L)) == null ? void 0 : f.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || a(L), !0), a(ct)) {
        const h = parseInt(ce(), 10) || 12, _ = a(ct).getBoundingClientRect(), g = a(M).getBoundingClientRect(), A = document.documentElement.clientHeight, p = document.documentElement.clientWidth, R = E() === "auto" ? _.bottom + g.height + h + n > A : E() === "top", j = Math.max(n, Math.min(p - n - g.width, _.left + _.width / 2 - g.width / 2));
        if (R ? a(M).style.top = `${_.top - (g.height + h)}px` : a(M).style.top = `${_.bottom + h}px`, a(M).style.left = `${j}px`, a(M).setAttribute("data-floating", R ? "top" : "bottom"), a(xt)) {
          const Q = a(xt).getBoundingClientRect();
          a(xt).style.left = _.left - j + _.width / 2 - Q.width / 2 + "px";
        }
      } else
        x("unable to find floating anchor element");
  }
  function Qe(n = C.UNVERIFIED, f = null) {
    ke && (clearTimeout(ke), ke = null), y($t, !1), y(Le, null), y(H, null), y(Er, !1), y(Y, null), $e(n, f);
  }
  function Rn(n) {
    y(ct, n, !0);
  }
  function $e(n, f = null) {
    y($, n, !0), y(ze, f, !0), Me("statechange", {
      payload: a(Le),
      state: a($)
    });
  }
  function Zt() {
    a(M).style.display = "block", E() && Nt(), pe() && a(de) && (a(de).style.display = "flex");
  }
  async function Pe() {
    return Qe(C.VERIFYING), await new Promise((n) => setTimeout(n, m() || 0)), Qi().then((n) => (pn(n), x("challenge", n), wn(n))).then(({ data: n, solution: f }) => {
      var h;
      if (x("solution", f), !f || n && "challenge" in n && !("clearText" in f))
        if ((f == null ? void 0 : f.number) !== void 0 && "challenge" in n)
          if (re() && "codeChallenge" in n)
            ["INPUT", "BUTTON", "SELECT", "TEXTAREA"].includes(((h = document.activeElement) == null ? void 0 : h.tagName) || "") && w() === !1 && document.activeElement.blur(), y(H, { challenge: n, solution: f }, !0);
          else {
            if (re() && Ke() !== void 0)
              return mn(Gt(n, f));
            if (re())
              return dl(Gt(n, f));
            y(Le, Gt(n, f), !0), x("payload", a(Le));
          }
        else
          throw x("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      a(H) ? ($e(C.CODE), Nr().then(() => {
        Me("code", { codeChallenge: a(H) });
      })) : ($e(C.VERIFIED), x("verified"), Nr().then(() => {
        Me("verified", { payload: a(Le) }), l() === "onsubmit" ? Cr(a(dt)) : pe() && Tt();
      }));
    }).catch((n) => {
      x(n), $e(C.ERROR, n.message);
    });
  }
  var kn = xa(), $n = Lt(kn);
  Bo($n, t, "default", {});
  var vt = J($n, 2), Ir = W(vt), Wt = W(Ir);
  let xn;
  var Sn = W(Wt);
  {
    var gl = (n) => {
      Dr(n);
    };
    K(Sn, (n) => {
      a($) === C.VERIFYING && n(gl);
    });
  }
  var et = J(Sn, 2);
  Wn(et), et.__change = [
    ha,
    $,
    Re,
    L,
    $t,
    Ve,
    St,
    Pe
  ], Qt(et, (n) => y(wr, n), () => a(wr)), Z(Wt);
  var Jt = J(Wt, 2), _l = W(Jt);
  {
    var ml = (n) => {
      var f = Xt(), h = Lt(f);
      tt(h, () => a(P).verified), U(n, f);
    }, bl = (n, f) => {
      {
        var h = (g) => {
          var A = Xt(), p = Lt(A);
          tt(p, () => a(P).verifying), U(g, A);
        }, _ = (g, A) => {
          {
            var p = (j) => {
              var Q = Xt(), ae = Lt(Q);
              tt(ae, () => a(P).verificationRequired), U(j, Q);
            }, R = (j) => {
              var Q = Xt(), ae = Lt(Q);
              tt(ae, () => a(P).label), U(j, Q);
            };
            K(
              g,
              (j) => {
                a($) === C.CODE ? j(p) : j(R, !1);
              },
              A
            );
          }
        };
        K(
          n,
          (g) => {
            a($) === C.VERIFYING ? g(h) : g(_, !1);
          },
          f
        );
      }
    };
    K(_l, (n) => {
      a($) === C.VERIFIED ? n(ml) : n(bl, !1);
    });
  }
  Z(Jt);
  var Tn = J(Jt, 2);
  {
    var yl = (n) => {
      var f = _a();
      Wn(f), xe(() => {
        T(f, "name", oe()), Zo(f, a(Le));
      }), U(n, f);
    };
    K(Tn, (n) => {
      a($) === C.VERIFIED && n(yl);
    });
  }
  var Nn = J(Tn, 2);
  {
    var pl = (n) => {
      var f = ma(), h = W(f);
      T(h, "href", Ki), Z(f), xe(() => T(h, "aria-label", a(P).ariaLinkLabel)), U(n, f);
    };
    K(Nn, (n) => {
      (X() !== !0 || a(yr)) && n(pl);
    });
  }
  var wl = J(Nn, 2);
  {
    var El = (n) => {
      var f = Ca(), h = J(W(f), 2), _ = W(h), g = J(_, 2);
      Po(g, !w()), g.__keydown = [
        da,
        hn
      ];
      var A = J(g, 2), p = W(A), R = W(p);
      {
        var j = (we) => {
          var G = wa();
          G.__click = hn;
          var zt = W(G);
          {
            var Dt = (ht) => {
              Dr(ht, () => 20);
            }, Sl = (ht, Tl) => {
              {
                var Nl = (gt) => {
                  var kr = ba();
                  U(gt, kr);
                }, Dl = (gt, kr) => {
                  {
                    var Ll = (_t) => {
                      var $r = ya();
                      U(_t, $r);
                    }, Pl = (_t) => {
                      var $r = pa();
                      U(_t, $r);
                    };
                    K(
                      gt,
                      (_t) => {
                        a(Y) === ee.PLAYING ? _t(Ll) : _t(Pl, !1);
                      },
                      kr
                    );
                  }
                };
                K(
                  ht,
                  (gt) => {
                    a(Y) === ee.ERROR ? gt(Nl) : gt(Dl, !1);
                  },
                  Tl
                );
              }
            };
            K(zt, (ht) => {
              a(Y) === ee.LOADING ? ht(Dt) : ht(Sl, !1);
            });
          }
          Z(G), xe(() => {
            T(G, "title", a(P).getAudioChallenge), G.disabled = a(Y) === ee.LOADING || a(Y) === ee.ERROR || a(Xe), T(G, "aria-label", a(Y) === ee.LOADING ? a(P).loading : a(P).getAudioChallenge);
          }), U(we, G);
        };
        K(R, (we) => {
          a(H).challenge.codeChallenge.audio && we(j);
        });
      }
      var Q = J(R, 2);
      Q.__click = [va, Pe], Z(p);
      var ae = J(p, 2), Be = W(ae);
      {
        var Rr = (we) => {
          Dr(we, () => 16);
        };
        K(Be, (we) => {
          a(Xe) && we(Rr);
        });
      }
      var Kt = J(Be);
      Z(ae), Z(A);
      var $l = J(A, 2);
      {
        var xl = (we) => {
          var G = Ea(), zt = W(G);
          Z(G), Qt(G, (Dt) => y(qe, Dt), () => a(qe)), xe((Dt) => T(zt, "src", Dt), [
            () => an(a(H).challenge.codeChallenge.audio, { language: B() })
          ]), je("loadstart", G, ol), je("canplay", G, ll), je("pause", G, sl), je("playing", G, al), je("ended", G, nl), je("error", zt, il), U(we, G);
        };
        K($l, (we) => {
          a(H).challenge.codeChallenge.audio && a(Er) && we(xl);
        });
      }
      Z(h), Z(f), xe(() => {
        T(f, "aria-label", a(P).verificationRequired), T(_, "src", a(H).challenge.codeChallenge.image), T(g, "minlength", a(H).challenge.codeChallenge.length || 1), T(g, "maxlength", a(H).challenge.codeChallenge.length), T(g, "placeholder", a(P).enterCode), T(g, "aria-label", a(Y) === ee.LOADING ? a(P).loading : a(Y) === ee.PLAYING ? "" : a(P).enterCodeAria), T(g, "aria-live", a(Y) ? "assertive" : "polite"), T(g, "aria-busy", a(Y) === ee.LOADING), g.disabled = a(Xe), T(Q, "aria-label", a(P).reload), T(Q, "title", a(P).reload), Q.disabled = a(Xe), ae.disabled = a(Xe), T(ae, "aria-label", a(P).verify), Mo(Kt, ` ${a(P).verify ?? ""}`);
      }), je("submit", h, ul, !0), U(n, f);
    };
    K(wl, (n) => {
      var f;
      (f = a(H)) != null && f.challenge.codeChallenge && n(El);
    });
  }
  Z(Ir);
  var Dn = J(Ir, 2);
  {
    var Cl = (n) => {
      var f = Ra(), h = J(W(f), 2);
      {
        var _ = (A) => {
          var p = Aa(), R = W(p);
          tt(R, () => a(P).expired), Z(p), xe(() => T(p, "title", a(ze))), U(A, p);
        }, g = (A) => {
          var p = Ia(), R = W(p);
          tt(R, () => a(P).error), Z(p), xe(() => T(p, "title", a(ze))), U(A, p);
        };
        K(h, (A) => {
          a($) === C.EXPIRED ? A(_) : A(g, !1);
        });
      }
      Z(f), U(n, f);
    };
    K(Dn, (n) => {
      (a(ze) || a($) === C.EXPIRED) && n(Cl);
    });
  }
  var Ln = J(Dn, 2);
  {
    var Al = (n) => {
      var f = ka(), h = W(f), _ = W(h);
      tt(_, () => a(P).footer), Z(h), Z(f), U(n, f);
    };
    K(Ln, (n) => {
      a(P).footer && (te() !== !0 || a(yr)) && n(Al);
    });
  }
  var Il = J(Ln, 2);
  {
    var Rl = (n) => {
      var f = $a();
      Qt(f, (h) => y(xt, h), () => a(xt)), U(n, f);
    };
    K(Il, (n) => {
      E() && n(Rl);
    });
  }
  Z(vt), Qt(vt, (n) => y(M, n), () => a(M)), xe(
    (n) => {
      T(vt, "data-state", a($)), T(vt, "data-floating", E()), T(vt, "data-overlay", pe()), xn = Ho(Wt, 1, "altcha-checkbox", null, xn, n), T(et, "id", a(tn)), et.required = l() !== "onsubmit" && (!E() || l() !== "off"), T(Jt, "for", a(tn));
    },
    [
      () => ({
        "altcha-checkbox-verifying": a($) === C.VERIFYING
      })
    ]
  ), je("invalid", et, vn), Jo(et, () => a($t), (n) => y($t, n)), U(e, kn);
  var kl = Pi({
    clarify: St,
    configure: En,
    getConfiguration: Cn,
    getFloatingAnchor: An,
    getPlugin: hl,
    getState: In,
    hide: Tt,
    repositionFloating: Nt,
    reset: Qe,
    setFloatingAnchor: Rn,
    setState: $e,
    show: Zt,
    verify: Pe,
    get auto() {
      return l();
    },
    set auto(n = void 0) {
      l(n), I();
    },
    get blockspam() {
      return u();
    },
    set blockspam(n = void 0) {
      u(n), I();
    },
    get challengeurl() {
      return s();
    },
    set challengeurl(n = void 0) {
      s(n), I();
    },
    get challengejson() {
      return c();
    },
    set challengejson(n = void 0) {
      c(n), I();
    },
    get credentials() {
      return d();
    },
    set credentials(n = void 0) {
      d(n), I();
    },
    get customfetch() {
      return b();
    },
    set customfetch(n = void 0) {
      b(n), I();
    },
    get debug() {
      return v();
    },
    set debug(n = !1) {
      v(n), I();
    },
    get delay() {
      return m();
    },
    set delay(n = 0) {
      m(n), I();
    },
    get disableautofocus() {
      return w();
    },
    set disableautofocus(n = !1) {
      w(n), I();
    },
    get expire() {
      return S();
    },
    set expire(n = void 0) {
      S(n), I();
    },
    get floating() {
      return E();
    },
    set floating(n = void 0) {
      E(n), I();
    },
    get floatinganchor() {
      return q();
    },
    set floatinganchor(n = void 0) {
      q(n), I();
    },
    get floatingoffset() {
      return ce();
    },
    set floatingoffset(n = void 0) {
      ce(n), I();
    },
    get floatingpersist() {
      return z();
    },
    set floatingpersist(n = !1) {
      z(n), I();
    },
    get hidefooter() {
      return te();
    },
    set hidefooter(n = !1) {
      te(n), I();
    },
    get hidelogo() {
      return X();
    },
    set hidelogo(n = !1) {
      X(n), I();
    },
    get id() {
      return st();
    },
    set id(n = void 0) {
      st(n), I();
    },
    get language() {
      return B();
    },
    set language(n = void 0) {
      B(n), I();
    },
    get name() {
      return oe();
    },
    set name(n = "altcha") {
      oe(n), I();
    },
    get maxnumber() {
      return ye();
    },
    set maxnumber(n = 1e6) {
      ye(n), I();
    },
    get mockerror() {
      return At();
    },
    set mockerror(n = !1) {
      At(n), I();
    },
    get obfuscated() {
      return Ve();
    },
    set obfuscated(n = void 0) {
      Ve(n), I();
    },
    get overlay() {
      return pe();
    },
    set overlay(n = void 0) {
      pe(n), I();
    },
    get overlaycontent() {
      return It();
    },
    set overlaycontent(n = void 0) {
      It(n), I();
    },
    get plugins() {
      return Yt();
    },
    set plugins(n = void 0) {
      Yt(n), I();
    },
    get refetchonexpire() {
      return Rt();
    },
    set refetchonexpire(n = !0) {
      Rt(n), I();
    },
    get sentinel() {
      return Ke();
    },
    set sentinel(n = void 0) {
      Ke(n), I();
    },
    get spamfilter() {
      return Re();
    },
    set spamfilter(n = !1) {
      Re(n), I();
    },
    get strings() {
      return ut();
    },
    set strings(n = void 0) {
      ut(n), I();
    },
    get test() {
      return ge();
    },
    set test(n = !1) {
      ge(n), I();
    },
    get verifyurl() {
      return re();
    },
    set verifyurl(n = void 0) {
      re(n), I();
    },
    get workers() {
      return ft();
    },
    set workers(n = Math.min(16, navigator.hardwareConcurrency || 8)) {
      ft(n), I();
    },
    get workerurl() {
      return kt();
    },
    set workerurl(n = void 0) {
      kt(n), I();
    }
  });
  return i(), kl;
}
Vo(["change", "keydown", "click"]);
customElements.define("altcha-widget", ia(
  Sa,
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
  Sa as Altcha
};
