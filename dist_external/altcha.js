var Ml = Object.defineProperty;
var qn = (e) => {
  throw TypeError(e);
};
var ql = (e, t, r) => t in e ? Ml(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ye = (e, t, r) => ql(e, typeof t != "symbol" ? t + "" : t, r), Un = (e, t, r) => t.has(e) || qn("Cannot " + r);
var se = (e, t, r) => (Un(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Tr = (e, t, r) => t.has(e) ? qn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), Nr = (e, t, r, i) => (Un(e, t, "write to private field"), i ? i.call(e, r) : t.set(e, r), r);
const Ul = "5";
var ri;
typeof window < "u" && ((ri = window.__svelte ?? (window.__svelte = {})).v ?? (ri.v = /* @__PURE__ */ new Set())).add(Ul);
const Bl = 1, jl = 4, Hl = 8, Yl = 16, Gl = 1, Zl = 2, Hr = "[", ni = "[!", ii = "]", At = {}, ue = Symbol(), Wl = "http://www.w3.org/1999/xhtml", Bn = !1;
function li(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var oi = Array.isArray, Jl = Array.prototype.indexOf, Kl = Array.from, sr = Object.keys, jt = Object.defineProperty, at = Object.getOwnPropertyDescriptor, Xl = Object.getOwnPropertyDescriptors, zl = Object.prototype, Ql = Array.prototype, ai = Object.getPrototypeOf, jn = Object.isExtensible;
const It = () => {
};
function si(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function eo(e, t, r = !1) {
  return e === void 0 ? r ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
const we = 2, ui = 4, gr = 8, Yr = 16, Fe = 32, ft = 64, ur = 128, ve = 256, fr = 512, fe = 1024, Ne = 2048, ct = 4096, Rt = 8192, _r = 16384, to = 32768, Gr = 65536, ro = 1 << 19, fi = 1 << 20, Or = 1 << 21, Ut = Symbol("$state"), ci = Symbol("legacy props"), no = Symbol("");
function io(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function lo() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function oo(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function ao() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function so() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function uo(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function fo() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function co() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function vo() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function mr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let V = !1;
function Ct(e) {
  V = e;
}
let F;
function Ge(e) {
  if (e === null)
    throw mr(), At;
  return F = e;
}
function xt() {
  return Ge(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Je(F)
  );
}
function W(e) {
  if (V) {
    if (/* @__PURE__ */ Je(F) !== null)
      throw mr(), At;
    F = e;
  }
}
function ho() {
  for (var e = 0, t = F; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === ii) {
        if (e === 0) return t;
        e -= 1;
      } else (r === Hr || r === ni) && (e += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Je(t)
    );
    t.remove(), t = i;
  }
}
let go = !1;
function He(e) {
  if (typeof e != "object" || e === null || Ut in e)
    return e;
  const t = ai(e);
  if (t !== zl && t !== Ql)
    return e;
  var r = /* @__PURE__ */ new Map(), i = oi(e), a = /* @__PURE__ */ P(0), l = S, f = (s) => {
    var c = S;
    De(l);
    var d = s();
    return De(c), d;
  };
  return i && r.set("length", /* @__PURE__ */ P(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, c, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && fo();
        var b = r.get(c);
        return b === void 0 ? (b = f(() => /* @__PURE__ */ P(d.value)), r.set(c, b)) : p(
          b,
          f(() => He(d.value))
        ), !0;
      },
      deleteProperty(s, c) {
        var d = r.get(c);
        if (d === void 0)
          c in s && (r.set(
            c,
            f(() => /* @__PURE__ */ P(ue))
          ), Dr(a));
        else {
          if (i && typeof c == "string") {
            var b = (
              /** @type {Source<number>} */
              r.get("length")
            ), h = Number(c);
            Number.isInteger(h) && h < b.v && p(b, h);
          }
          p(d, ue), Dr(a);
        }
        return !0;
      },
      get(s, c, d) {
        var y;
        if (c === Ut)
          return e;
        var b = r.get(c), h = c in s;
        if (b === void 0 && (!h || (y = at(s, c)) != null && y.writable) && (b = f(() => /* @__PURE__ */ P(He(h ? s[c] : ue))), r.set(c, b)), b !== void 0) {
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
        if (c === Ut)
          return !0;
        var d = r.get(c), b = d !== void 0 && d.v !== ue || Reflect.has(s, c);
        if (d !== void 0 || T !== null && (!b || (m = at(s, c)) != null && m.writable)) {
          d === void 0 && (d = f(() => /* @__PURE__ */ P(b ? He(s[c]) : ue)), r.set(c, d));
          var h = o(d);
          if (h === ue)
            return !1;
        }
        return b;
      },
      set(s, c, d, b) {
        var z;
        var h = r.get(c), m = c in s;
        if (i && c === "length")
          for (var y = d; y < /** @type {Source<number>} */
          h.v; y += 1) {
            var N = r.get(y + "");
            N !== void 0 ? p(N, ue) : y in s && (N = f(() => /* @__PURE__ */ P(ue)), r.set(y + "", N));
          }
        h === void 0 ? (!m || (z = at(s, c)) != null && z.writable) && (h = f(() => /* @__PURE__ */ P(void 0)), p(
          h,
          f(() => He(d))
        ), r.set(c, h)) : (m = h.v !== ue, p(
          h,
          f(() => He(d))
        ));
        var D = Reflect.getOwnPropertyDescriptor(s, c);
        if (D != null && D.set && D.set.call(b, d), !m) {
          if (i && typeof c == "string") {
            var U = (
              /** @type {Source<number>} */
              r.get("length")
            ), k = Number(c);
            Number.isInteger(k) && k >= U.v && p(U, k + 1);
          }
          Dr(a);
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
        co();
      }
    }
  );
}
function Dr(e, t = 1) {
  p(e, e.v + t);
}
var Hn, di, vi, hi;
function Fr() {
  if (Hn === void 0) {
    Hn = window, di = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    vi = at(t, "firstChild").get, hi = at(t, "nextSibling").get, jn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), jn(r) && (r.__t = void 0);
  }
}
function br(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function me(e) {
  return vi.call(e);
}
// @__NO_SIDE_EFFECTS__
function Je(e) {
  return hi.call(e);
}
function J(e, t) {
  if (!V)
    return /* @__PURE__ */ me(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ me(F)
  );
  return r === null && (r = F.appendChild(br())), Ge(r), r;
}
function Vt(e, t) {
  if (!V) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ me(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Je(r) : r;
  }
  return F;
}
function K(e, t = 1, r = !1) {
  let i = V ? F : e;
  for (var a; t--; )
    a = i, i = /** @type {TemplateNode} */
    /* @__PURE__ */ Je(i);
  if (!V)
    return i;
  var l = i == null ? void 0 : i.nodeType;
  if (r && l !== 3) {
    var f = br();
    return i === null ? a == null || a.after(f) : i.before(f), Ge(f), f;
  }
  return Ge(i), /** @type {TemplateNode} */
  i;
}
function _o(e) {
  e.textContent = "";
}
function gi(e) {
  return e === this.v;
}
function _i(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Zr(e) {
  return !_i(e, this.v);
}
// @__NO_SIDE_EFFECTS__
function pr(e) {
  var t = we | Ne, r = S !== null && (S.f & we) !== 0 ? (
    /** @type {Derived} */
    S
  ) : null;
  return T === null || r !== null && (r.f & ve) !== 0 ? t |= ve : T.f |= fi, {
    ctx: le,
    deps: null,
    effects: null,
    equals: gi,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: r ?? T
  };
}
// @__NO_SIDE_EFFECTS__
function Mt(e) {
  const t = /* @__PURE__ */ pr(e);
  return $i(t), t;
}
// @__NO_SIDE_EFFECTS__
function mo(e) {
  const t = /* @__PURE__ */ pr(e);
  return t.equals = Zr, t;
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
  var t, r = T;
  We(bo(e));
  try {
    mi(e), t = Di(e);
  } finally {
    We(r);
  }
  return t;
}
function pi(e) {
  var t = bi(e), r = (Ye || (e.f & ve) !== 0) && e.deps !== null ? ct : fe;
  Ee(e, r), e.equals(t) || (e.v = t, e.wv = Ti());
}
function po(e) {
  T === null && S === null && oo(), S !== null && (S.f & ve) !== 0 && T === null && lo(), Zt && io();
}
function yo(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function dt(e, t, r, i = !0) {
  var a = T, l = {
    ctx: le,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Ne,
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
      zr(l), l.f |= to;
    } catch (c) {
      throw Ze(l), c;
    }
  else t !== null && wr(l);
  var f = r && l.deps === null && l.first === null && l.nodes_start === null && l.teardown === null && (l.f & (fi | ur)) === 0;
  if (!f && i && (a !== null && yo(l, a), S !== null && (S.f & we) !== 0)) {
    var s = (
      /** @type {Derived} */
      S
    );
    (s.effects ?? (s.effects = [])).push(l);
  }
  return l;
}
function Wr(e) {
  const t = dt(gr, null, !1);
  return Ee(t, fe), t.teardown = e, t;
}
function Vr(e) {
  po();
  var t = T !== null && (T.f & Fe) !== 0 && le !== null && !le.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      le
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: T,
      reaction: S
    });
  } else {
    var i = Jr(e);
    return i;
  }
}
function wo(e) {
  const t = dt(ft, e, !0);
  return () => {
    Ze(t);
  };
}
function Eo(e) {
  const t = dt(ft, e, !0);
  return (r = {}) => new Promise((i) => {
    r.outro ? qr(t, () => {
      Ze(t), i(void 0);
    }) : (Ze(t), i(void 0));
  });
}
function Jr(e) {
  return dt(ui, e, !1);
}
function Kr(e) {
  return dt(gr, e, !0);
}
function $e(e, t = [], r = pr) {
  const i = t.map(r);
  return yi(() => e(...i.map(o)));
}
function yi(e, t = 0) {
  return dt(gr | Yr | t, e, !0);
}
function Mr(e, t = !0) {
  return dt(gr | Fe, e, !0, t);
}
function wi(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Zt, i = S;
    Gn(!0), De(null);
    try {
      t.call(null);
    } finally {
      Gn(r), De(i);
    }
  }
}
function Ei(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var i = r.next;
    (r.f & ft) !== 0 ? r.parent = null : Ze(r, t), r = i;
  }
}
function Co(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Fe) === 0 && Ze(t), t = r;
  }
}
function Ze(e, t = !0) {
  var r = !1;
  (t || (e.f & ro) !== 0) && e.nodes_start !== null && (Ci(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), r = !0), Ei(e, t && !r), hr(e, 0), Ee(e, _r);
  var i = e.transitions;
  if (i !== null)
    for (const l of i)
      l.stop();
  wi(e);
  var a = e.parent;
  a !== null && a.first !== null && Ai(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function Ci(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Je(e)
    );
    e.remove(), e = r;
  }
}
function Ai(e) {
  var t = e.parent, r = e.prev, i = e.next;
  r !== null && (r.next = i), i !== null && (i.prev = r), t !== null && (t.first === e && (t.first = i), t.last === e && (t.last = r));
}
function qr(e, t) {
  var r = [];
  Ii(e, r, !0), Ao(r, () => {
    Ze(e), t && t();
  });
}
function Ao(e, t) {
  var r = e.length;
  if (r > 0) {
    var i = () => --r || t();
    for (var a of e)
      a.out(i);
  } else
    t();
}
function Ii(e, t, r) {
  if ((e.f & Rt) === 0) {
    if (e.f ^= Rt, e.transitions !== null)
      for (const f of e.transitions)
        (f.is_global || r) && t.push(f);
    for (var i = e.first; i !== null; ) {
      var a = i.next, l = (i.f & Gr) !== 0 || (i.f & Fe) !== 0;
      Ii(i, t, l ? r : !1), i = a;
    }
  }
}
function Yn(e) {
  Ri(e, !0);
}
function Ri(e, t) {
  if ((e.f & Rt) !== 0) {
    e.f ^= Rt, (e.f & fe) === 0 && (e.f ^= fe), Wt(e) && (Ee(e, Ne), wr(e));
    for (var r = e.first; r !== null; ) {
      var i = r.next, a = (r.f & Gr) !== 0 || (r.f & Fe) !== 0;
      Ri(r, a ? t : !1), r = i;
    }
    if (e.transitions !== null)
      for (const l of e.transitions)
        (l.is_global || t) && l.in();
  }
}
const Io = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Ht = [], Yt = [];
function xi() {
  var e = Ht;
  Ht = [], si(e);
}
function ki() {
  var e = Yt;
  Yt = [], si(e);
}
function Xr(e) {
  Ht.length === 0 && queueMicrotask(xi), Ht.push(e);
}
function Ro(e) {
  Yt.length === 0 && Io(ki), Yt.push(e);
}
function xo() {
  Ht.length > 0 && xi(), Yt.length > 0 && ki();
}
let lr = !1, cr = !1, dr = null, st = !1, Zt = !1;
function Gn(e) {
  Zt = e;
}
let Bt = [];
let S = null, Se = !1;
function De(e) {
  S = e;
}
let T = null;
function We(e) {
  T = e;
}
let ie = null;
function $i(e) {
  S !== null && S.f & Or && (ie === null ? ie = [e] : ie.push(e));
}
let ne = null, de = 0, ge = null;
function ko(e) {
  ge = e;
}
let Si = 1, vr = 0, Ye = !1;
function Ti() {
  return ++Si;
}
function Wt(e) {
  var h;
  var t = e.f;
  if ((t & Ne) !== 0)
    return !0;
  if ((t & ct) !== 0) {
    var r = e.deps, i = (t & ve) !== 0;
    if (r !== null) {
      var a, l, f = (t & fr) !== 0, s = i && T !== null && !Ye, c = r.length;
      if (f || s) {
        var d = (
          /** @type {Derived} */
          e
        ), b = d.parent;
        for (a = 0; a < c; a++)
          l = r[a], (f || !((h = l == null ? void 0 : l.reactions) != null && h.includes(d))) && (l.reactions ?? (l.reactions = [])).push(d);
        f && (d.f ^= fr), s && b !== null && (b.f & ve) === 0 && (d.f ^= ve);
      }
      for (a = 0; a < c; a++)
        if (l = r[a], Wt(
          /** @type {Derived} */
          l
        ) && pi(
          /** @type {Derived} */
          l
        ), l.wv > e.wv)
          return !0;
    }
    (!i || T !== null && !Ye) && Ee(e, fe);
  }
  return !1;
}
function $o(e, t) {
  for (var r = t; r !== null; ) {
    if ((r.f & ur) !== 0)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= ur;
      }
    r = r.parent;
  }
  throw lr = !1, e;
}
function Zn(e) {
  return (e.f & _r) === 0 && (e.parent === null || (e.parent.f & ur) === 0);
}
function yr(e, t, r, i) {
  if (lr) {
    if (r === null && (lr = !1), Zn(t))
      throw e;
    return;
  }
  if (r !== null && (lr = !0), $o(e, t), Zn(t))
    throw e;
}
function Ni(e, t, r = !0) {
  var i = e.reactions;
  if (i !== null)
    for (var a = 0; a < i.length; a++) {
      var l = i[a];
      ie != null && ie.includes(e) || ((l.f & we) !== 0 ? Ni(
        /** @type {Derived} */
        l,
        t,
        !1
      ) : t === l && (r ? Ee(l, Ne) : (l.f & fe) !== 0 && Ee(l, ct), wr(
        /** @type {Effect} */
        l
      )));
    }
}
function Di(e) {
  var y;
  var t = ne, r = de, i = ge, a = S, l = Ye, f = ie, s = le, c = Se, d = e.f;
  ne = /** @type {null | Value[]} */
  null, de = 0, ge = null, Ye = (d & ve) !== 0 && (Se || !st || S === null), S = (d & (Fe | ft)) === 0 ? e : null, ie = null, Wn(e.ctx), Se = !1, vr++, e.f |= Or;
  try {
    var b = (
      /** @type {Function} */
      (0, e.fn)()
    ), h = e.deps;
    if (ne !== null) {
      var m;
      if (hr(e, de), h !== null && de > 0)
        for (h.length = de + ne.length, m = 0; m < ne.length; m++)
          h[de + m] = ne[m];
      else
        e.deps = h = ne;
      if (!Ye)
        for (m = de; m < h.length; m++)
          ((y = h[m]).reactions ?? (y.reactions = [])).push(e);
    } else h !== null && de < h.length && (hr(e, de), h.length = de);
    if (Mi() && ge !== null && !Se && h !== null && (e.f & (we | ct | Ne)) === 0)
      for (m = 0; m < /** @type {Source[]} */
      ge.length; m++)
        Ni(
          ge[m],
          /** @type {Effect} */
          e
        );
    return a !== null && a !== e && (vr++, ge !== null && (i === null ? i = ge : i.push(.../** @type {Source[]} */
    ge))), b;
  } finally {
    ne = t, de = r, ge = i, S = a, Ye = l, ie = f, Wn(s), Se = c, e.f ^= Or;
  }
}
function So(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var i = Jl.call(r, e);
    if (i !== -1) {
      var a = r.length - 1;
      a === 0 ? r = t.reactions = null : (r[i] = r[a], r.pop());
    }
  }
  r === null && (t.f & we) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ne === null || !ne.includes(t)) && (Ee(t, ct), (t.f & (ve | fr)) === 0 && (t.f ^= fr), mi(
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
      So(e, r[i]);
}
function zr(e) {
  var t = e.f;
  if ((t & _r) === 0) {
    Ee(e, fe);
    var r = T, i = le, a = st;
    T = e, st = !0;
    try {
      (t & Yr) !== 0 ? Co(e) : Ei(e), wi(e);
      var l = Di(e);
      e.teardown = typeof l == "function" ? l : null, e.wv = Si;
      var f = e.deps, s;
      Bn && go && e.f & Ne;
    } catch (c) {
      yr(c, e, r, i || e.ctx);
    } finally {
      st = a, T = r;
    }
  }
}
function To() {
  try {
    ao();
  } catch (e) {
    if (dr !== null)
      yr(e, dr, null);
    else
      throw e;
  }
}
function Li() {
  var e = st;
  try {
    var t = 0;
    for (st = !0; Bt.length > 0; ) {
      t++ > 1e3 && To();
      var r = Bt, i = r.length;
      Bt = [];
      for (var a = 0; a < i; a++) {
        var l = Do(r[a]);
        No(l);
      }
      Gt.clear();
    }
  } finally {
    cr = !1, st = e, dr = null;
  }
}
function No(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var i = e[r];
      if ((i.f & (_r | Rt)) === 0)
        try {
          Wt(i) && (zr(i), i.deps === null && i.first === null && i.nodes_start === null && (i.teardown === null ? Ai(i) : i.fn = null));
        } catch (a) {
          yr(a, i, null, i.ctx);
        }
    }
}
function wr(e) {
  cr || (cr = !0, queueMicrotask(Li));
  for (var t = dr = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (ft | Fe)) !== 0) {
      if ((r & fe) === 0) return;
      t.f ^= fe;
    }
  }
  Bt.push(t);
}
function Do(e) {
  for (var t = [], r = e; r !== null; ) {
    var i = r.f, a = (i & (Fe | ft)) !== 0, l = a && (i & fe) !== 0;
    if (!l && (i & Rt) === 0) {
      if ((i & ui) !== 0)
        t.push(r);
      else if (a)
        r.f ^= fe;
      else
        try {
          Wt(r) && zr(r);
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
function C(e) {
  for (var t; ; ) {
    if (xo(), Bt.length === 0)
      return (
        /** @type {T} */
        t
      );
    cr = !0, Li();
  }
}
async function Lr() {
  await Promise.resolve(), C();
}
function o(e) {
  var t = e.f, r = (t & we) !== 0;
  if (S !== null && !Se) {
    if (!(ie != null && ie.includes(e))) {
      var i = S.deps;
      e.rv < vr && (e.rv = vr, ne === null && i !== null && i[de] === e ? de++ : ne === null ? ne = [e] : (!Ye || !ne.includes(e)) && ne.push(e));
    }
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var a = (
      /** @type {Derived} */
      e
    ), l = a.parent;
    l !== null && (l.f & ve) === 0 && (a.f ^= ve);
  }
  return r && (a = /** @type {Derived} */
  e, Wt(a) && pi(a)), Zt && Gt.has(e) ? Gt.get(e) : e.v;
}
function ut(e) {
  var t = Se;
  try {
    return Se = !0, e();
  } finally {
    Se = t;
  }
}
const Lo = -7169;
function Ee(e, t) {
  e.f = e.f & Lo | t;
}
const Gt = /* @__PURE__ */ new Map();
function Pi(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: gi,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function P(e, t) {
  const r = Pi(e);
  return $i(r), r;
}
// @__NO_SIDE_EFFECTS__
function Qr(e, t = !1) {
  const r = Pi(e);
  return t || (r.equals = Zr), r;
}
function p(e, t, r = !1) {
  S !== null && !Se && Mi() && (S.f & (we | Yr)) !== 0 && !(ie != null && ie.includes(e)) && vo();
  let i = r ? He(t) : t;
  return Po(e, i);
}
function Po(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    Zt ? Gt.set(e, t) : Gt.set(e, r), e.v = t, (e.f & we) !== 0 && ((e.f & Ne) !== 0 && bi(
      /** @type {Derived} */
      e
    ), Ee(e, (e.f & ve) === 0 ? fe : ct)), e.wv = Ti(), Oi(e, Ne), T !== null && (T.f & fe) !== 0 && (T.f & (Fe | ft)) === 0 && (ge === null ? ko([e]) : ge.push(e));
  }
  return t;
}
function Oi(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, a = 0; a < i; a++) {
      var l = r[a], f = l.f;
      (f & Ne) === 0 && (Ee(l, t), (f & (fe | ve)) !== 0 && ((f & we) !== 0 ? Oi(
        /** @type {Derived} */
        l,
        ct
      ) : wr(
        /** @type {Effect} */
        l
      )));
    }
}
let le = null;
function Wn(e) {
  le = e;
}
function Fi(e, t = !1, r) {
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
  Wr(() => {
    i.d = !0;
  });
}
function Vi(e) {
  const t = le;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const f = t.e;
    if (f !== null) {
      var r = T, i = S;
      t.e = null;
      try {
        for (var a = 0; a < f.length; a++) {
          var l = f[a];
          We(l.effect), De(l.reaction), Jr(l.fn);
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
function Mi() {
  return !0;
}
const Oo = ["touchstart", "touchmove"];
function Fo(e) {
  return Oo.includes(e);
}
function Vo(e, t) {
  if (t) {
    const r = document.body;
    e.autofocus = !0, Xr(() => {
      document.activeElement === r && e.focus();
    });
  }
}
let Jn = !1;
function qi() {
  Jn || (Jn = !0, document.addEventListener(
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
function Ui(e) {
  var t = S, r = T;
  De(null), We(null);
  try {
    return e();
  } finally {
    De(t), We(r);
  }
}
function Mo(e, t, r, i = r) {
  e.addEventListener(t, () => Ui(r));
  const a = e.__on_r;
  a ? e.__on_r = () => {
    a(), i(!0);
  } : e.__on_r = () => i(!0), qi();
}
const Bi = /* @__PURE__ */ new Set(), Ur = /* @__PURE__ */ new Set();
function qo(e, t, r, i = {}) {
  function a(l) {
    if (i.capture || qt.call(t, l), !l.cancelBubble)
      return Ui(() => r == null ? void 0 : r.call(this, l));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Xr(() => {
    t.addEventListener(e, a, i);
  }) : t.addEventListener(e, a, i), a;
}
function je(e, t, r, i, a) {
  var l = { capture: i, passive: a }, f = qo(e, t, r, l);
  (t === document.body || t === window || t === document) && Wr(() => {
    t.removeEventListener(e, f, l);
  });
}
function Uo(e) {
  for (var t = 0; t < e.length; t++)
    Bi.add(e[t]);
  for (var r of Ur)
    r(e);
}
function qt(e) {
  var z;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), i = e.type, a = ((z = e.composedPath) == null ? void 0 : z.call(e)) || [], l = (
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
    jt(e, "currentTarget", {
      configurable: !0,
      get() {
        return l || r;
      }
    });
    var b = S, h = T;
    De(null), We(null);
    try {
      for (var m, y = []; l !== null; ) {
        var N = l.assignedSlot || l.parentNode || /** @type {any} */
        l.host || null;
        try {
          var D = l["__" + i];
          if (D != null && (!/** @type {any} */
          l.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === l))
            if (oi(D)) {
              var [U, ...k] = D;
              U.apply(l, [e, ...k]);
            } else
              D.call(l, e);
        } catch (oe) {
          m ? y.push(oe) : m = oe;
        }
        if (e.cancelBubble || N === t || N === null)
          break;
        l = N;
      }
      if (m) {
        for (let oe of y)
          queueMicrotask(() => {
            throw oe;
          });
        throw m;
      }
    } finally {
      e.__root = t, delete e.currentTarget, De(b), We(h);
    }
  }
}
function en(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Te(e, t) {
  var r = (
    /** @type {Effect} */
    T
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function Ce(e, t) {
  var r = (t & Gl) !== 0, i = (t & Zl) !== 0, a, l = !e.startsWith("<!>");
  return () => {
    if (V)
      return Te(F, null), F;
    a === void 0 && (a = en(l ? e : "<!>" + e), r || (a = /** @type {Node} */
    /* @__PURE__ */ me(a)));
    var f = (
      /** @type {TemplateNode} */
      i || di ? document.importNode(a, !0) : a.cloneNode(!0)
    );
    if (r) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ me(f)
      ), c = (
        /** @type {TemplateNode} */
        f.lastChild
      );
      Te(s, c);
    } else
      Te(f, f);
    return f;
  };
}
// @__NO_SIDE_EFFECTS__
function Er(e, t, r = "svg") {
  var i = !e.startsWith("<!>"), a = `<${r}>${i ? e : "<!>" + e}</${r}>`, l;
  return () => {
    if (V)
      return Te(F, null), F;
    if (!l) {
      var f = (
        /** @type {DocumentFragment} */
        en(a)
      ), s = (
        /** @type {Element} */
        /* @__PURE__ */ me(f)
      );
      l = /** @type {Element} */
      /* @__PURE__ */ me(s);
    }
    var c = (
      /** @type {TemplateNode} */
      l.cloneNode(!0)
    );
    return Te(c, c), c;
  };
}
function rr() {
  if (V)
    return Te(F, null), F;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = br();
  return e.append(t, r), Te(t, r), e;
}
function j(e, t) {
  if (V) {
    T.nodes_end = F, xt();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Bo(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function ji(e, t) {
  return Hi(e, t);
}
function jo(e, t) {
  Fr(), t.intro = t.intro ?? !1;
  const r = t.target, i = V, a = F;
  try {
    for (var l = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ me(r)
    ); l && (l.nodeType !== 8 || /** @type {Comment} */
    l.data !== Hr); )
      l = /** @type {TemplateNode} */
      /* @__PURE__ */ Je(l);
    if (!l)
      throw At;
    Ct(!0), Ge(
      /** @type {Comment} */
      l
    ), xt();
    const f = Hi(e, { ...t, anchor: l });
    if (F === null || F.nodeType !== 8 || /** @type {Comment} */
    F.data !== ii)
      throw mr(), At;
    return Ct(!1), /**  @type {Exports} */
    f;
  } catch (f) {
    if (f === At)
      return t.recover === !1 && so(), Fr(), _o(r), Ct(!1), ji(e, t);
    throw f;
  } finally {
    Ct(i), Ge(a);
  }
}
const wt = /* @__PURE__ */ new Map();
function Hi(e, { target: t, anchor: r, props: i = {}, events: a, context: l, intro: f = !0 }) {
  Fr();
  var s = /* @__PURE__ */ new Set(), c = (h) => {
    for (var m = 0; m < h.length; m++) {
      var y = h[m];
      if (!s.has(y)) {
        s.add(y);
        var N = Fo(y);
        t.addEventListener(y, qt, { passive: N });
        var D = wt.get(y);
        D === void 0 ? (document.addEventListener(y, qt, { passive: N }), wt.set(y, 1)) : wt.set(y, D + 1);
      }
    }
  };
  c(Kl(Bi)), Ur.add(c);
  var d = void 0, b = Eo(() => {
    var h = r ?? t.appendChild(br());
    return Mr(() => {
      if (l) {
        Fi({});
        var m = (
          /** @type {ComponentContext} */
          le
        );
        m.c = l;
      }
      a && (i.$$events = a), V && Te(
        /** @type {TemplateNode} */
        h,
        null
      ), d = e(h, i) || {}, V && (T.nodes_end = F), l && Vi();
    }), () => {
      var N;
      for (var m of s) {
        t.removeEventListener(m, qt);
        var y = (
          /** @type {number} */
          wt.get(m)
        );
        --y === 0 ? (document.removeEventListener(m, qt), wt.delete(m)) : wt.set(m, y);
      }
      Ur.delete(c), h !== r && ((N = h.parentNode) == null || N.removeChild(h));
    };
  });
  return Br.set(d, b), d;
}
let Br = /* @__PURE__ */ new WeakMap();
function Ho(e, t) {
  const r = Br.get(e);
  return r ? (Br.delete(e), r(t)) : Promise.resolve();
}
function X(e, t, [r, i] = [0, 0]) {
  V && r === 0 && xt();
  var a = e, l = null, f = null, s = ue, c = r > 0 ? Gr : 0, d = !1;
  const b = (m, y = !0) => {
    d = !0, h(y, m);
  }, h = (m, y) => {
    if (s === (s = m)) return;
    let N = !1;
    if (V && i !== -1) {
      if (r === 0) {
        const U = (
          /** @type {Comment} */
          a.data
        );
        U === Hr ? i = 0 : U === ni ? i = 1 / 0 : (i = parseInt(U.substring(1)), i !== i && (i = s ? 1 / 0 : -1));
      }
      const D = i > r;
      !!s === D && (a = ho(), Ge(a), Ct(!1), N = !0, i = -1);
    }
    s ? (l ? Yn(l) : y && (l = Mr(() => y(a))), f && qr(f, () => {
      f = null;
    })) : (f ? Yn(f) : y && (f = Mr(() => y(a, [r + 1, i]))), l && qr(l, () => {
      l = null;
    })), N && Ct(!0);
  };
  yi(() => {
    d = !1, t(b), d || h(null, null);
  }, c), V && (a = F);
}
function ot(e, t, r = !1, i = !1, a = !1) {
  var l = e, f = "";
  $e(() => {
    var s = (
      /** @type {Effect} */
      T
    );
    if (f === (f = t() ?? "")) {
      V && xt();
      return;
    }
    if (s.nodes_start !== null && (Ci(
      s.nodes_start,
      /** @type {TemplateNode} */
      s.nodes_end
    ), s.nodes_start = s.nodes_end = null), f !== "") {
      if (V) {
        F.data;
        for (var c = xt(), d = c; c !== null && (c.nodeType !== 8 || /** @type {Comment} */
        c.data !== ""); )
          d = c, c = /** @type {TemplateNode} */
          /* @__PURE__ */ Je(c);
        if (c === null)
          throw mr(), At;
        Te(F, d), l = Ge(c);
        return;
      }
      var b = f + "";
      r ? b = `<svg>${b}</svg>` : i && (b = `<math>${b}</math>`);
      var h = en(b);
      if ((r || i) && (h = /** @type {Element} */
      /* @__PURE__ */ me(h)), Te(
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
function Yo(e, t, r, i, a) {
  var s;
  V && xt();
  var l = (s = t.$$slots) == null ? void 0 : s[r], f = !1;
  l === !0 && (l = t.children, f = !0), l === void 0 || l(e, f ? () => i : i);
}
const Kn = [...` 	
\r\f \v\uFEFF`];
function Go(e, t, r) {
  var i = "" + e;
  if (r) {
    for (var a in r)
      if (r[a])
        i = i ? i + " " + a : a;
      else if (i.length)
        for (var l = a.length, f = 0; (f = i.indexOf(a, f)) >= 0; ) {
          var s = f + l;
          (f === 0 || Kn.includes(i[f - 1])) && (s === i.length || Kn.includes(i[s])) ? i = (f === 0 ? "" : i.substring(0, f)) + i.substring(s + 1) : f = s;
        }
  }
  return i === "" ? null : i;
}
function Zo(e, t, r, i, a, l) {
  var f = e.__className;
  if (V || f !== r || f === void 0) {
    var s = Go(r, i, l);
    (!V || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : e.className = s), e.__className = r;
  } else if (l && a !== l)
    for (var c in l) {
      var d = !!l[c];
      (a == null || d !== !!a[c]) && e.classList.toggle(c, d);
    }
  return l;
}
const Wo = Symbol("is custom element"), Jo = Symbol("is html");
function Xn(e) {
  if (V) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var i = e.value;
          $(e, "value", null), e.value = i;
        }
        if (e.hasAttribute("checked")) {
          var a = e.checked;
          $(e, "checked", null), e.checked = a;
        }
      }
    };
    e.__on_r = r, Ro(r), qi();
  }
}
function Ko(e, t) {
  var r = Yi(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function $(e, t, r, i) {
  var a = Yi(e);
  V && (a[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || a[t] !== (a[t] = r) && (t === "loading" && (e[no] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Xo(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Yi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Wo]: e.nodeName.includes("-"),
      [Jo]: e.namespaceURI === Wl
    })
  );
}
var zn = /* @__PURE__ */ new Map();
function Xo(e) {
  var t = zn.get(e.nodeName);
  if (t) return t;
  zn.set(e.nodeName, t = []);
  for (var r, i = e, a = Element.prototype; a !== i; ) {
    r = Xl(i);
    for (var l in r)
      r[l].set && t.push(l);
    i = ai(i);
  }
  return t;
}
function zo(e, t, r = t) {
  Mo(e, "change", (i) => {
    var a = i ? e.defaultChecked : e.checked;
    r(a);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (V && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  ut(t) == null) && r(e.checked), Kr(() => {
    var i = t();
    e.checked = !!i;
  });
}
function Qn(e, t) {
  return e === t || (e == null ? void 0 : e[Ut]) === t;
}
function nr(e = {}, t, r, i) {
  return Jr(() => {
    var a, l;
    return Kr(() => {
      a = l, l = [], ut(() => {
        e !== r(...l) && (t(e, ...l), a && Qn(r(...a), e) && t(null, ...a));
      });
    }), () => {
      Xr(() => {
        l && Qn(r(...l), e) && t(null, ...l);
      });
    };
  }), e;
}
function Gi(e) {
  le === null && li(), Vr(() => {
    const t = ut(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Qo(e) {
  le === null && li(), Gi(() => () => ut(e));
}
function Zi(e, t, r) {
  if (e == null)
    return t(void 0), It;
  const i = ut(
    () => e.subscribe(
      t,
      // @ts-expect-error
      r
    )
  );
  return i.unsubscribe ? () => i.unsubscribe() : i;
}
const Et = [];
function ea(e, t = It) {
  let r = null;
  const i = /* @__PURE__ */ new Set();
  function a(s) {
    if (_i(e, s) && (e = s, r)) {
      const c = !Et.length;
      for (const d of i)
        d[1](), Et.push(d, e);
      if (c) {
        for (let d = 0; d < Et.length; d += 2)
          Et[d][0](Et[d + 1]);
        Et.length = 0;
      }
    }
  }
  function l(s) {
    a(s(
      /** @type {T} */
      e
    ));
  }
  function f(s, c = It) {
    const d = [s, c];
    return i.add(d), i.size === 1 && (r = t(a, l) || It), s(
      /** @type {T} */
      e
    ), () => {
      i.delete(d), i.size === 0 && r && (r(), r = null);
    };
  }
  return { set: a, update: l, subscribe: f };
}
function or(e) {
  let t;
  return Zi(e, (r) => t = r)(), t;
}
let ir = !1, jr = Symbol();
function ta(e, t, r) {
  const i = r[t] ?? (r[t] = {
    store: null,
    source: /* @__PURE__ */ Qr(void 0),
    unsubscribe: It
  });
  if (i.store !== e && !(jr in r))
    if (i.unsubscribe(), i.store = e ?? null, e == null)
      i.source.v = void 0, i.unsubscribe = It;
    else {
      var a = !0;
      i.unsubscribe = Zi(e, (l) => {
        a ? i.source.v = l : p(i.source, l);
      }), a = !1;
    }
  return e && jr in r ? or(e) : o(i.source);
}
function ra() {
  const e = {};
  function t() {
    Wr(() => {
      for (var r in e)
        e[r].unsubscribe();
      jt(e, jr, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function na(e) {
  var t = ir;
  try {
    return ir = !1, [e(), ir];
  } finally {
    ir = t;
  }
}
function ei(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function A(e, t, r, i) {
  var Le;
  var a = (r & Bl) !== 0, l = !0, f = (r & Hl) !== 0, s = (r & Yl) !== 0, c = !1, d;
  f ? [d, c] = na(() => (
    /** @type {V} */
    e[t]
  )) : d = /** @type {V} */
  e[t];
  var b = Ut in e || ci in e, h = f && (((Le = at(e, t)) == null ? void 0 : Le.set) ?? (b && t in e && ((B) => e[t] = B))) || void 0, m = (
    /** @type {V} */
    i
  ), y = !0, N = !1, D = () => (N = !0, y && (y = !1, s ? m = ut(
    /** @type {() => V} */
    i
  ) : m = /** @type {V} */
  i), m);
  d === void 0 && i !== void 0 && (h && l && uo(), d = D(), h && h(d));
  var U;
  if (U = () => {
    var B = (
      /** @type {V} */
      e[t]
    );
    return B === void 0 ? D() : (y = !0, N = !1, B);
  }, (r & jl) === 0)
    return U;
  if (h) {
    var k = e.$$legacy;
    return function(B, Ae) {
      return arguments.length > 0 ? ((!Ae || k || c) && h(Ae ? U() : B), B) : U();
    };
  }
  var z = !1, oe = /* @__PURE__ */ Qr(d), Q = /* @__PURE__ */ pr(() => {
    var B = U(), Ae = o(oe);
    return z ? (z = !1, Ae) : oe.v = B;
  });
  return f && o(Q), a || (Q.equals = Zr), function(B, Ae) {
    if (arguments.length > 0) {
      const Ve = Ae ? o(Q) : f ? He(B) : B;
      if (!Q.equals(Ve)) {
        if (z = !0, p(oe, Ve), N && m !== void 0 && (m = Ve), ei(Q))
          return B;
        ut(() => o(Q));
      }
      return B;
    }
    return ei(Q) ? Q.v : o(Q);
  };
}
function ia(e) {
  return new la(e);
}
var Oe, _e;
class la {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    Tr(this, Oe);
    /** @type {Record<string, any>} */
    Tr(this, _e);
    var l;
    var r = /* @__PURE__ */ new Map(), i = (f, s) => {
      var c = /* @__PURE__ */ Qr(s);
      return r.set(f, c), c;
    };
    const a = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(f, s) {
          return o(r.get(s) ?? i(s, Reflect.get(f, s)));
        },
        has(f, s) {
          return s === ci ? !0 : (o(r.get(s) ?? i(s, Reflect.get(f, s))), Reflect.has(f, s));
        },
        set(f, s, c) {
          return p(r.get(s) ?? i(s, c), c), Reflect.set(f, s, c);
        }
      }
    );
    Nr(this, _e, (t.hydrate ? jo : ji)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: a,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((l = t == null ? void 0 : t.props) != null && l.$$host) || t.sync === !1) && C(), Nr(this, Oe, a.$$events);
    for (const f of Object.keys(se(this, _e)))
      f === "$set" || f === "$destroy" || f === "$on" || jt(this, f, {
        get() {
          return se(this, _e)[f];
        },
        /** @param {any} value */
        set(s) {
          se(this, _e)[f] = s;
        },
        enumerable: !0
      });
    se(this, _e).$set = /** @param {Record<string, any>} next */
    (f) => {
      Object.assign(a, f);
    }, se(this, _e).$destroy = () => {
      Ho(se(this, _e));
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
    se(this, _e).$destroy();
  }
}
Oe = new WeakMap(), _e = new WeakMap();
let Wi;
typeof HTMLElement == "function" && (Wi = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, i) {
    super();
    /** The Svelte component constructor */
    ye(this, "$$ctor");
    /** Slots */
    ye(this, "$$s");
    /** @type {any} The Svelte component instance */
    ye(this, "$$c");
    /** Whether or not the custom element is connected */
    ye(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    ye(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    ye(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    ye(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    ye(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    ye(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    ye(this, "$$me");
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
          a !== "default" && (f.name = a), j(l, f);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, i = oa(this);
      for (const a of this.$$s)
        a in i && (a === "default" && !this.$$d.children ? (this.$$d.children = t(a), r.default = !0) : r[a] = t(a));
      for (const a of this.attributes) {
        const l = this.$$g_p(a.name);
        l in this.$$d || (this.$$d[l] = ar(l, a.value, this.$$p_d, "toProp"));
      }
      for (const a in this.$$p_d)
        !(a in this.$$d) && this[a] !== void 0 && (this.$$d[a] = this[a], delete this[a]);
      this.$$c = ia({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = wo(() => {
        Kr(() => {
          var a;
          this.$$r = !0;
          for (const l of sr(this.$$c)) {
            if (!((a = this.$$p_d[l]) != null && a.reflect)) continue;
            this.$$d[l] = this.$$c[l];
            const f = ar(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = ar(t, i, this.$$p_d, "toProp"), (a = this.$$c) == null || a.$set({ [t]: this.$$d[t] }));
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
function ar(e, t, r, i) {
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
function oa(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function aa(e, t, r, i, a, l) {
  let f = class extends Wi {
    constructor() {
      super(e, r, a), this.$$p_d = t;
    }
    static get observedAttributes() {
      return sr(t).map(
        (s) => (t[s].attribute || s).toLowerCase()
      );
    }
  };
  return sr(t).forEach((s) => {
    jt(f.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(c) {
        var h;
        c = ar(s, c, t), this.$$d[s] = c;
        var d = this.$$c;
        if (d) {
          var b = (h = at(d, s)) == null ? void 0 : h.get;
          b ? d[s] = c : d.$set({ [s]: c });
        }
      }
    });
  }), i.forEach((s) => {
    jt(f.prototype, s, {
      get() {
        var c;
        return (c = this.$$c) == null ? void 0 : c[s];
      }
    });
  }), e.element = /** @type {any} */
  f, f;
}
const Ji = new TextEncoder();
function sa(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function ua(e, t = "SHA-256", r = 1e5) {
  const i = Date.now().toString(16);
  e || (e = Math.round(Math.random() * r));
  const a = await Ki(i, e, t);
  return {
    algorithm: t,
    challenge: a,
    salt: i,
    signature: ""
  };
}
async function Ki(e, t, r) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return sa(
    await crypto.subtle.digest(
      r.toUpperCase(),
      Ji.encode(e + t)
    )
  );
}
function fa(e, t, r = "SHA-256", i = 1e6, a = 0) {
  const l = new AbortController(), f = Date.now();
  return {
    promise: (async () => {
      for (let c = a; c <= i; c += 1) {
        if (l.signal.aborted)
          return null;
        if (await Ki(t, c, r) === e)
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
function ti() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function ca(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let i = 0; i < t.length; i++)
    r[i] = t.charCodeAt(i);
  return r;
}
function da(e, t = 12) {
  const r = new Uint8Array(t);
  for (let i = 0; i < t; i++)
    r[i] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function va(e, t = "", r = 1e6, i = 0) {
  const a = "AES-GCM", l = new AbortController(), f = Date.now(), s = async () => {
    for (let b = i; b <= r; b += 1) {
      if (l.signal.aborted || !c || !d)
        return null;
      try {
        const h = await crypto.subtle.decrypt(
          {
            name: a,
            iv: da(b)
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
    d = ca(e);
    const b = await crypto.subtle.digest(
      "SHA-256",
      Ji.encode(t)
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
var w = /* @__PURE__ */ ((e) => (e.CODE = "code", e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(w || {}), te = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.LOADING = "loading", e.PLAYING = "playing", e.PAUSED = "paused", e.READY = "ready", e))(te || {});
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (e) => or(globalThis.altchaI18n.store)[e],
  set: (e, t) => {
    Object.assign(or(globalThis.altchaI18n.store), {
      [e]: t
    }), globalThis.altchaI18n.store.set(or(globalThis.altchaI18n.store));
  },
  store: ea({})
};
const ha = {
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
globalThis.altchaI18n.set("en", ha);
const Pr = (e, t) => {
  let r = /* @__PURE__ */ mo(() => eo(t == null ? void 0 : t(), 24));
  var i = ba();
  $e(() => {
    $(i, "width", o(r)), $(i, "height", o(r));
  }), j(e, i);
};
function ga(e, t) {
  e.code === "Space" && (e.preventDefault(), e.stopImmediatePropagation(), t());
}
function _a(e, t) {
  e.preventDefault(), t();
}
function ma(e, t, r, i, a, l, f, s) {
  var c;
  [
    w.UNVERIFIED,
    w.ERROR,
    w.EXPIRED,
    w.CODE
  ].includes(o(t)) ? r() !== !1 && ((c = o(i)) == null ? void 0 : c.reportValidity()) === !1 ? p(a, !1) : l() ? f() : s() : p(a, !0);
}
var ba = /* @__PURE__ */ Er('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="altcha-spinner"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor"></path></svg>'), pa = /* @__PURE__ */ Ce('<input type="hidden">'), ya = /* @__PURE__ */ Ce('<div><a target="_blank" class="altcha-logo" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor"></path></svg></a></div>'), wa = /* @__PURE__ */ Er('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg>'), Ea = /* @__PURE__ */ Er('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z"></path></svg>'), Ca = /* @__PURE__ */ Er('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"></path></svg>'), Aa = /* @__PURE__ */ Ce('<button type="button" class="altcha-code-challenge-audio"><!></button>'), Ia = /* @__PURE__ */ Ce("<audio hidden autoplay><source></audio>"), Ra = /* @__PURE__ */ Ce('<div class="altcha-code-challenge" role="dialog"><div class="altcha-code-challenge-arrow"></div> <form data-code-challenge-form="1"><img class="altcha-code-challenge-image" alt=""> <input type="text" autocomplete="off" name="code" class="altcha-code-challenge-input" required> <div class="altcha-code-challenge-buttons"><div class="altcha-code-challenge-buttons-left"><!> <button type="button" class="altcha-code-challenge-reload"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z"></path></svg></button></div> <button type="submit" class="altcha-code-challenge-verify"><!> </button></div> <!></form></div>'), xa = /* @__PURE__ */ Ce("<div><!></div>"), ka = /* @__PURE__ */ Ce("<div><!></div>"), $a = /* @__PURE__ */ Ce('<div class="altcha-error"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg> <!></div>'), Sa = /* @__PURE__ */ Ce('<div class="altcha-footer"><div><!></div></div>'), Ta = /* @__PURE__ */ Ce('<div class="altcha-anchor-arrow"></div>'), Na = /* @__PURE__ */ Ce('<!> <div class="altcha"><div class="altcha-main"><div><!> <input type="checkbox"></div> <label class="altcha-label"><!></label> <!> <!> <!></div> <!> <!> <!></div>', 1);
function Da(e, t) {
  var Vn, Mn;
  Fi(t, !0);
  const [r, i] = ra(), a = () => ta(zi, "$altchaI18nStore", r);
  let l = A(t, "auto", 7, void 0), f = A(t, "blockspam", 7, void 0), s = A(t, "challengeurl", 7, void 0), c = A(t, "challengejson", 7, void 0), d = A(t, "credentials", 7, void 0), b = A(t, "customfetch", 7, void 0), h = A(t, "debug", 7, !1), m = A(t, "delay", 7, 0), y = A(t, "disableautofocus", 7, !1), N = A(t, "refetchonexpire", 7, !0), D = A(t, "disablerefetchonexpire", 23, () => !N()), U = A(t, "expire", 7, void 0), k = A(t, "floating", 7, void 0), z = A(t, "floatinganchor", 7, void 0), oe = A(t, "floatingoffset", 7, void 0), Q = A(t, "floatingpersist", 7, !1), Le = A(t, "hidefooter", 7, !1), B = A(t, "hidelogo", 7, !1), Ae = A(t, "id", 7, void 0), Ve = A(t, "language", 7, void 0), Ke = A(t, "name", 7, "altcha"), Xe = A(t, "maxnumber", 7, 1e6), kt = A(t, "mockerror", 7, !1), Me = A(t, "obfuscated", 7, void 0), be = A(t, "overlay", 7, void 0), $t = A(t, "overlaycontent", 7, void 0), Jt = A(t, "plugins", 7, void 0), ze = A(t, "sentinel", 7, void 0), Ie = A(t, "spamfilter", 7, !1), vt = A(t, "strings", 7, void 0), he = A(t, "test", 7, !1), re = A(t, "verifyurl", 7, void 0), ht = A(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), St = A(t, "workerurl", 7, void 0);
  const { altchaI18n: Xi } = globalThis, zi = Xi.store, tn = ["SHA-256", "SHA-384", "SHA-512"], Qi = "https://altcha.org/", qe = (n, u) => {
    t.$$host.dispatchEvent(new CustomEvent(n, { detail: u }));
  }, rn = (Mn = (Vn = document.documentElement.lang) == null ? void 0 : Vn.split("-")) == null ? void 0 : Mn[0], Cr = /* @__PURE__ */ Mt(() => {
    var n;
    return s() && new URL(s(), location.origin).host.endsWith(".altcha.org") && !!((n = s()) != null && n.includes("apiKey=ckey_"));
  }), Kt = /* @__PURE__ */ Mt(() => c() ? mn(c()) : void 0), el = /* @__PURE__ */ Mt(() => vt() ? mn(vt()) : {}), O = /* @__PURE__ */ Mt(() => ({
    ...on(a()),
    ...o(el)
  })), nn = /* @__PURE__ */ Mt(() => `${Ae() || Ke()}_checkbox_${Math.round(Math.random() * 1e8)}`);
  let Qe = /* @__PURE__ */ P(null), Tt = /* @__PURE__ */ P(!1), Y = /* @__PURE__ */ P(null), R = /* @__PURE__ */ P(He(w.UNVERIFIED)), M = /* @__PURE__ */ P(void 0), Nt = /* @__PURE__ */ P(null), Ue = /* @__PURE__ */ P(null), ce = /* @__PURE__ */ P(null), Ar = /* @__PURE__ */ P(null), gt = /* @__PURE__ */ P(null), L = /* @__PURE__ */ P(null), Dt = /* @__PURE__ */ P(null), et = /* @__PURE__ */ P(null), Re = null, G = /* @__PURE__ */ P(null), tt = /* @__PURE__ */ P(!1), Be = [], Ir = /* @__PURE__ */ P(!1), xe = /* @__PURE__ */ P(null);
  Vr(() => {
    vl(o(et));
  }), Vr(() => {
    hl(o(R));
  }), Qo(() => {
    tl(), p(Dt, null), o(L) && (o(L).removeEventListener("submit", dn), o(L).removeEventListener("reset", vn), o(L).removeEventListener("focusin", cn), p(L, null)), Re && (clearTimeout(Re), Re = null), document.removeEventListener("click", un), document.removeEventListener("scroll", fn), window.removeEventListener("resize", _n);
  }), Gi(() => {
    var n;
    x("mounted", "2.2.3"), x("workers", ht()), ll(), x("plugins", Be.length ? Be.map((u) => u.constructor.pluginName).join(", ") : "none"), he() && x("using test mode"), U() && xr(U()), l() !== void 0 && x("auto", l()), k() !== void 0 && wn(k()), p(L, (n = o(M)) == null ? void 0 : n.closest("form"), !0), o(L) && (o(L).addEventListener("submit", dn, { capture: !0 }), o(L).addEventListener("reset", vn), (l() === "onfocus" || Q() === "focus") && o(L).addEventListener("focusin", cn)), be() && En(!0), l() === "onload" && (Me() ? Lt() : Pe()), o(Cr) && (Le() || B()) && x("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      qe("load");
    });
  });
  function Xt(n, u) {
    return btoa(JSON.stringify({
      algorithm: n.algorithm,
      challenge: n.challenge,
      number: u.number,
      salt: n.salt,
      signature: n.signature,
      test: he() ? !0 : void 0,
      took: u.took
    }));
  }
  function tl() {
    for (const n of Be)
      n.destroy();
  }
  function ln() {
    s() && !D() && o(R) === w.VERIFIED ? Pe() : rt(w.EXPIRED, o(O).expired);
  }
  async function rl() {
    if (kt())
      throw x("mocking error"), new Error("Mocked error.");
    if (o(Kt))
      return x("using provided json data"), bn(o(Kt).salt), o(Kt);
    if (he())
      return x("generating test challenge", { test: he() }), ua(typeof he() != "boolean" ? +he() : void 0);
    {
      if (!s() && o(L)) {
        const v = o(L).getAttribute("action");
        v != null && v.includes("/form/") && s(v + "/altcha");
      }
      if (!s())
        throw new Error("Attribute challengeurl not set.");
      x("fetching challenge from", s());
      const n = {
        credentials: typeof d() == "boolean" ? "include" : d(),
        headers: Ie() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      }, u = await Rr()(s(), n);
      if (!u || !(u instanceof Response))
        throw new Error("Custom fetch function did not return a response.");
      if (u.status !== 200)
        throw new Error(`Server responded with ${u.status}.`);
      const g = u.headers.get("X-Altcha-Config"), _ = await u.json();
      if (bn(_.salt), g)
        try {
          const v = JSON.parse(g);
          v && typeof v == "object" && (v.verifyurl && !v.verifyurl.startsWith("fn:") && (v.verifyurl = sn(v.verifyurl)), In(v));
        } catch (v) {
          x("unable to configure from X-Altcha-Config", v);
        }
      return _;
    }
  }
  function nl(n) {
    var g, _;
    const u = (g = o(L)) == null ? void 0 : g.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((_ = u == null ? void 0 : u.value) == null ? void 0 : _.slice(u.value.indexOf("@"))) || void 0;
  }
  function Rr() {
    let n = fetch;
    if (b())
      if (x("using customfetch"), typeof b() == "string") {
        if (n = globalThis[b()] || null, !n)
          throw new Error(`Custom fetch function not found: ${b()}`);
      } else
        n = b();
    return n;
  }
  function on(n, u = [
    Ve() || "",
    document.documentElement.lang || "",
    ...navigator.languages
  ]) {
    const g = Object.keys(n).map((v) => v.toLowerCase()), _ = u.reduce(
      (v, E) => (E = E.toLowerCase(), v || (n[E] ? E : null) || g.find((I) => E.split("-")[0] === I.split("-")[0]) || null),
      null
    );
    return n[_ || "en"];
  }
  function il() {
    return Ie() === "ipAddress" ? {
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
    } : typeof Ie() == "object" ? Ie() : {
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
  function an(n) {
    var g;
    return [
      ...((g = o(L)) == null ? void 0 : g.querySelectorAll(n != null && n.length ? n.map((_) => `input[name="${_}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (_, v) => {
        const E = v.name, I = v.value;
        return E && I && (_[E] = /\n/.test(I) ? I.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : I), _;
      },
      {}
    );
  }
  function sn(n, u) {
    const g = new URL(s() || location.origin), _ = new URL(n, g);
    if (_.search || (_.search = g.search), u)
      for (const v in u)
        u[v] !== void 0 && u[v] !== null && _.searchParams.set(v, u[v]);
    return _.toString();
  }
  function ll() {
    const n = Jt() !== void 0 ? Jt().split(",") : void 0;
    for (const u of globalThis.altchaPlugins)
      (!n || n.includes(u.pluginName)) && Be.push(new u({
        el: o(M),
        clarify: Lt,
        dispatch: qe,
        getConfiguration: Rn,
        getFloatingAnchor: xn,
        getState: kn,
        log: x,
        reset: rt,
        solve: An,
        setState: ke,
        setFloatingAnchor: $n,
        verify: Pe
      }));
  }
  function x(...n) {
    (h() || n.some((u) => u instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${Ke()}]`, ...n);
  }
  function ol() {
    p(G, te.PAUSED, !0);
  }
  function al(n) {
    p(G, te.ERROR, !0);
  }
  function sl() {
    p(G, te.READY, !0);
  }
  function ul() {
    p(G, te.LOADING, !0);
  }
  function fl() {
    p(G, te.PLAYING, !0);
  }
  function cl() {
    p(G, te.PAUSED, !0);
  }
  function dl(n) {
    var u;
    if (n.preventDefault(), n.stopPropagation(), o(Y)) {
      const g = new FormData(n.target), _ = String(g.get("code"));
      if ((u = re()) != null && u.startsWith("fn:")) {
        const v = re().replace(/^fn:/, "");
        if (x(`calling ${v} function instead of verifyurl`), !(v in globalThis))
          throw new Error(`Global function "${v}" is undefined.`);
        return globalThis[v]({
          challenge: o(Y).challenge,
          code: _,
          solution: o(Y).solution
        });
      }
      p(tt, !0), pn(Xt(o(Y).challenge, o(Y).solution), _).then(({ reason: v, verified: E }) => {
        E ? (p(Y, null), ke(w.VERIFIED), x("verified"), Lr().then(() => {
          var I;
          (I = o(Ar)) == null || I.focus(), qe("verified", { payload: o(xe) }), l() === "onsubmit" ? yn(o(Dt)) : be() && Pt();
        })) : (rt(), p(et, v || "Verification failed", !0));
      }).catch((v) => {
        p(Y, null), ke(w.ERROR, v), x("sentinel verification failed:", v);
      }).finally(() => {
        p(tt, !1);
      });
    }
  }
  function un(n) {
    var g;
    const u = n.target;
    k() && u && !o(M).contains(u) && (o(R) === w.VERIFIED && Q() === !1 || o(R) === w.VERIFIED && Q() === "focus" && !((g = o(L)) != null && g.matches(":focus-within")) || l() === "off" && o(R) === w.UNVERIFIED) && Pt();
  }
  function fn() {
    k() && o(R) !== w.UNVERIFIED && Ot();
  }
  function vl(n) {
    for (const u of Be)
      typeof u.onErrorChange == "function" && u.onErrorChange(o(et));
  }
  function cn(n) {
    o(R) === w.UNVERIFIED ? Pe() : k() && Q() === "focus" && o(R) === w.VERIFIED && zt();
  }
  function dn(n) {
    var _;
    const u = n.target;
    u != null && u.hasAttribute("data-code-challenge-form") || (p(Dt, n.submitter, !0), o(L) && l() === "onsubmit" ? ((_ = o(Dt)) == null || _.blur(), o(R) === w.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), Pe().then(() => {
      yn(o(Dt));
    })) : o(R) !== w.VERIFIED && (n.preventDefault(), n.stopPropagation(), o(R) === w.VERIFYING && hn())) : o(L) && k() && l() === "off" && o(R) === w.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), zt()));
  }
  function vn() {
    rt();
  }
  function hn() {
    o(R) === w.VERIFYING && o(O).waitAlert && alert(o(O).waitAlert);
  }
  function gn() {
    o(Ue) ? o(Ue).paused ? (o(Ue).currentTime = 0, o(Ue).play()) : o(Ue).pause() : (p(Ir, !0), requestAnimationFrame(() => {
      var n;
      (n = o(Ue)) == null || n.play();
    }));
  }
  function hl(n) {
    for (const u of Be)
      typeof u.onStateChange == "function" && u.onStateChange(o(R));
    k() && o(R) !== w.UNVERIFIED && requestAnimationFrame(() => {
      Ot();
    }), p(Tt, o(R) === w.VERIFIED), be() && o(ce) && (o(R) !== w.UNVERIFIED ? zt() : Pt());
  }
  function _n() {
    k() && Ot();
  }
  function mn(n) {
    return JSON.parse(n);
  }
  function bn(n) {
    var _;
    const u = new URLSearchParams((_ = n.split("?")) == null ? void 0 : _[1]), g = u.get("expires") || u.get("expire");
    if (g) {
      const v = new Date(+g * 1e3), E = isNaN(v.getTime()) ? 0 : v.getTime() - Date.now();
      E > 0 && xr(E);
    } else Re && (clearTimeout(Re), Re = null);
  }
  async function gl(n) {
    if (!re())
      throw new Error("Attribute verifyurl not set.");
    x("requesting server verification from", re());
    const u = { payload: n };
    if (Ie() !== !1) {
      const {
        blockedCountries: v,
        classifier: E,
        disableRules: I,
        email: H,
        expectedLanguages: q,
        expectedCountries: ee,
        fields: ae,
        ipAddress: it,
        text: mt,
        timeZone: lt
      } = il();
      u.blockedCountries = v, u.classifier = E, u.disableRules = I, u.email = H === !1 ? void 0 : nl(H), u.expectedCountries = ee, u.expectedLanguages = q || (rn ? [rn] : void 0), u.fields = ae === !1 ? void 0 : an(ae), u.ipAddress = it === !1 ? void 0 : it || "auto", u.text = mt, u.timeZone = lt === !1 ? void 0 : lt || ti();
    }
    const g = await Rr()(re(), {
      body: JSON.stringify(u),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (!g || !(g instanceof Response))
      throw new Error("Custom fetch function did not return a response.");
    if (g.status !== 200)
      throw new Error(`Server responded with ${g.status}.`);
    const _ = await g.json();
    if (_ != null && _.payload && p(xe, _.payload, !0), qe("serververification", _), f() && _.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  async function pn(n, u) {
    if (!re())
      throw new Error("Attribute verifyurl not set.");
    x("requesting sentinel verification from", re());
    const g = { code: u, payload: n };
    ze() && (g.fields = ze().fields ? an() : void 0, g.timeZone = ze().timeZone ? ti() : void 0);
    const _ = await Rr()(re(), {
      body: JSON.stringify(g),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (!_ || !(_ instanceof Response))
      throw new Error("Fetch function did not return a response.");
    if (_.status !== 200)
      throw new Error(`Server responded with ${_.status}.`);
    const v = await _.json();
    return v != null && v.payload && p(xe, v.payload, !0), qe("sentinelverification", v), v;
  }
  function yn(n) {
    var u;
    o(L) && "requestSubmit" in o(L) ? o(L).requestSubmit(n) : (u = o(L)) != null && u.reportValidity() && (n ? n.click() : o(L).submit());
  }
  function xr(n) {
    x("expire", n), Re && (clearTimeout(Re), Re = null), n < 1 ? ln() : Re = setTimeout(ln, n);
  }
  function wn(n) {
    x("floating", n), k() !== n && (o(M).style.left = "", o(M).style.top = ""), k(n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : k()), k() ? (l() || l("onsubmit"), document.addEventListener("scroll", fn), document.addEventListener("click", un), window.addEventListener("resize", _n)) : l() === "onsubmit" && l(void 0);
  }
  function En(n) {
    var u, g;
    if (x("overlay", n), be(n), n) {
      if (l() || l("onsubmit"), o(ce) && o(M).parentElement && o(ce).replaceWith(o(M).parentElement), (g = (u = o(M)) == null ? void 0 : u.parentElement) != null && g.parentElement) {
        p(ce, document.createElement("div"), !0), o(M).parentElement.parentElement.appendChild(o(ce));
        const _ = document.createElement("div"), v = document.createElement("button");
        v.type = "button", v.innerHTML = "&times;", v.addEventListener("click", (E) => {
          E.preventDefault(), rt();
        }), o(ce).classList.add("altcha-overlay-backdrop"), v.classList.add("altcha-overlay-close-button"), _.classList.add("altcha-overlay"), o(ce).append(_), _.append(v), $t() && _.append(...document.querySelectorAll($t())), _.append(o(M).parentElement);
      }
    } else o(ce) && o(M).parentElement && (o(ce).replaceWith(o(M).parentElement), o(M).style.display = "block");
  }
  function Cn(n) {
    if (!n.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (n.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!tn.includes(n.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${tn.join(", ")}`);
    if (!n.challenge || n.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!n.salt || n.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function An(n) {
    let u = null, g = null;
    if ("Worker" in window) {
      try {
        u = _l(n, n.maxNumber || n.maxnumber || Xe()), p(Qe, u.controller, !0), g = await u.promise;
      } catch (_) {
        x(_);
      } finally {
        p(Qe, null);
      }
      if (g === null || (g == null ? void 0 : g.number) !== void 0 || "obfuscated" in n)
        return { data: n, solution: g };
    }
    if ("obfuscated" in n) {
      const _ = await va(n.obfuscated, n.key, n.maxNumber || n.maxnumber);
      return { data: n, solution: await _.promise };
    }
    u = fa(n.challenge, n.salt, n.algorithm, n.maxNumber || n.maxnumber || Xe()), p(Qe, u.controller, !0);
    try {
      g = await u.promise;
    } catch (_) {
      x(_);
    } finally {
      p(Qe, null);
    }
    return { data: n, solution: g };
  }
  function _l(n, u = typeof he() == "number" ? he() : n.maxNumber || n.maxnumber || Xe(), g = Math.ceil(ht())) {
    const _ = new AbortController(), v = [];
    g = Math.min(16, u, Math.max(1, g));
    for (let H = 0; H < g; H++)
      v.push(altchaCreateWorker(St()));
    const E = Math.ceil(u / g);
    return { promise: (async () => {
      const H = await Promise.all(v.map((q, ee) => {
        const ae = ee * E;
        return _.signal.addEventListener("abort", () => {
          q.postMessage({ type: "abort" });
        }), new Promise((it) => {
          q.addEventListener("message", (mt) => {
            if (mt.data)
              for (const lt of v)
                lt !== q && lt.postMessage({ type: "abort" });
            it(mt.data);
          }), q.postMessage({
            payload: n,
            max: ae + E,
            start: ae,
            type: "work"
          });
        });
      }));
      for (const q of v)
        q.terminate();
      return H.find((q) => !!q) || null;
    })(), controller: _ };
  }
  async function Lt() {
    if (!Me()) {
      ke(w.ERROR);
      return;
    }
    const n = Be.find((u) => u.constructor.pluginName === "obfuscation");
    if (!n || !("clarify" in n)) {
      ke(w.ERROR), x("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in n && typeof n.clarify == "function")
      return n.clarify();
  }
  function In(n) {
    n.obfuscated !== void 0 && Me(n.obfuscated), n.auto !== void 0 && (l(n.auto), l() === "onload" && (Me() ? Lt() : Pe())), n.blockspam !== void 0 && f(!!n.blockspam), n.customfetch !== void 0 && b(n.customfetch), n.floatinganchor !== void 0 && z(n.floatinganchor), n.delay !== void 0 && m(n.delay), n.floatingoffset !== void 0 && oe(n.floatingoffset), n.floating !== void 0 && wn(n.floating), n.expire !== void 0 && (xr(n.expire), U(n.expire)), n.challenge && (c(typeof n.challenge == "string" ? n.challenge : JSON.stringify(n.challenge)), Cn(o(Kt))), n.challengeurl !== void 0 && s(n.challengeurl), n.debug !== void 0 && h(!!n.debug), n.hidefooter !== void 0 && Le(!!n.hidefooter), n.hidelogo !== void 0 && B(!!n.hidelogo), n.language !== void 0 && vt(on(a(), [n.language])), n.maxnumber !== void 0 && Xe(+n.maxnumber), n.mockerror !== void 0 && kt(!!n.mockerror), n.name !== void 0 && Ke(n.name), n.overlaycontent !== void 0 && $t(n.overlaycontent), n.overlay !== void 0 && En(n.overlay), n.refetchonexpire !== void 0 && D(!n.refetchonexpire), n.disablerefetchonexpire !== void 0 && D(!n.disablerefetchonexpire), n.sentinel !== void 0 && typeof n.sentinel == "object" && ze(n.sentinel), n.spamfilter !== void 0 && Ie(typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && vt(typeof n.strings == "string" ? n.strings : JSON.stringify(n.strings)), n.test !== void 0 && he(typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && re(n.verifyurl), n.workers !== void 0 && ht(+n.workers), n.workerurl !== void 0 && St(n.workerurl);
  }
  function Rn() {
    return {
      auto: l(),
      blockspam: f(),
      challengeurl: s(),
      debug: h(),
      delay: m(),
      disableautofocus: y(),
      disablerefetchonexpire: D(),
      expire: U(),
      floating: k(),
      floatinganchor: z(),
      floatingoffset: oe(),
      hidefooter: Le(),
      hidelogo: B(),
      name: Ke(),
      maxnumber: Xe(),
      mockerror: kt(),
      obfuscated: Me(),
      overlay: be(),
      refetchonexpire: !D(),
      spamfilter: Ie(),
      strings: o(O),
      test: he(),
      verifyurl: re(),
      workers: ht(),
      workerurl: St()
    };
  }
  function xn() {
    return o(gt);
  }
  function ml(n) {
    return Be.find((u) => u.constructor.pluginName === n);
  }
  function kn() {
    return o(R);
  }
  function Pt() {
    o(M).style.display = "none", be() && o(ce) && (o(ce).style.display = "none");
  }
  function Ot(n = 20) {
    var u;
    if (o(M))
      if (o(gt) || p(gt, (z() ? document.querySelector(z()) : (u = o(L)) == null ? void 0 : u.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || o(L), !0), o(gt)) {
        const g = parseInt(oe(), 10) || 12, _ = o(gt).getBoundingClientRect(), v = o(M).getBoundingClientRect(), E = document.documentElement.clientHeight, I = document.documentElement.clientWidth, H = k() === "auto" ? _.bottom + v.height + g + n > E : k() === "top", q = Math.max(n, Math.min(I - n - v.width, _.left + _.width / 2 - v.width / 2));
        if (H ? o(M).style.top = `${_.top - (v.height + g)}px` : o(M).style.top = `${_.bottom + g}px`, o(M).style.left = `${q}px`, o(M).setAttribute("data-floating", H ? "top" : "bottom"), o(Nt)) {
          const ee = o(Nt).getBoundingClientRect();
          o(Nt).style.left = _.left - q + _.width / 2 - ee.width / 2 + "px";
        }
      } else
        x("unable to find floating anchor element");
  }
  function rt(n = w.UNVERIFIED, u = null) {
    o(Qe) && (o(Qe).abort(), p(Qe, null)), p(Tt, !1), p(xe, null), p(Y, null), p(Ir, !1), p(G, null), ke(n, u);
  }
  function $n(n) {
    p(gt, n, !0);
  }
  function ke(n, u = null) {
    p(R, n, !0), p(et, u, !0), qe("statechange", {
      payload: o(xe),
      state: o(R)
    });
  }
  function zt() {
    o(M).style.display = "block", k() && Ot(), be() && o(ce) && (o(ce).style.display = "flex");
  }
  async function Pe() {
    return rt(w.VERIFYING), await new Promise((n) => setTimeout(n, m() || 0)), rl().then((n) => (Cn(n), x("challenge", n), An(n))).then(({ data: n, solution: u }) => {
      var g;
      if (x("solution", u), !u || n && "challenge" in n && !("clearText" in u)) {
        if ((u == null ? void 0 : u.number) !== void 0 && "challenge" in n)
          if (re() && "codeChallenge" in n)
            ["INPUT", "BUTTON", "SELECT", "TEXTAREA"].includes(((g = document.activeElement) == null ? void 0 : g.tagName) || "") && y() === !1 && document.activeElement.blur(), p(Y, { challenge: n, solution: u }, !0);
          else {
            if (re() && ze() !== void 0)
              return pn(Xt(n, u));
            if (re())
              return gl(Xt(n, u));
            p(xe, Xt(n, u), !0), x("payload", o(xe));
          }
        else if (o(R) !== w.EXPIRED)
          throw x("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
      }
    }).then(() => {
      o(Y) ? (ke(w.CODE), Lr().then(() => {
        qe("code", { codeChallenge: o(Y) });
      })) : o(xe) && (ke(w.VERIFIED), x("verified"), Lr().then(() => {
        qe("verified", { payload: o(xe) }), be() && Pt();
      }));
    }).catch((n) => {
      x(n), ke(w.ERROR, n.message);
    });
  }
  var Sn = Na(), Tn = Vt(Sn);
  Yo(Tn, t, "default", {});
  var _t = K(Tn, 2), kr = J(_t), Qt = J(kr);
  let Nn;
  var Dn = J(Qt);
  {
    var bl = (n) => {
      Pr(n);
    };
    X(Dn, (n) => {
      o(R) === w.VERIFYING && n(bl);
    });
  }
  var nt = K(Dn, 2);
  Xn(nt), nt.__change = [
    ma,
    R,
    Ie,
    L,
    Tt,
    Me,
    Lt,
    Pe
  ], nr(nt, (n) => p(Ar, n), () => o(Ar)), W(Qt);
  var er = K(Qt, 2), pl = J(er);
  {
    var yl = (n) => {
      var u = rr(), g = Vt(u);
      ot(g, () => o(O).verified), j(n, u);
    }, wl = (n, u) => {
      {
        var g = (v) => {
          var E = rr(), I = Vt(E);
          ot(I, () => o(O).verifying), j(v, E);
        }, _ = (v, E) => {
          {
            var I = (q) => {
              var ee = rr(), ae = Vt(ee);
              ot(ae, () => o(O).verificationRequired), j(q, ee);
            }, H = (q) => {
              var ee = rr(), ae = Vt(ee);
              ot(ae, () => o(O).label), j(q, ee);
            };
            X(
              v,
              (q) => {
                o(R) === w.CODE ? q(I) : q(H, !1);
              },
              E
            );
          }
        };
        X(
          n,
          (v) => {
            o(R) === w.VERIFYING ? v(g) : v(_, !1);
          },
          u
        );
      }
    };
    X(pl, (n) => {
      o(R) === w.VERIFIED ? n(yl) : n(wl, !1);
    });
  }
  W(er);
  var Ln = K(er, 2);
  {
    var El = (n) => {
      var u = pa();
      Xn(u), $e(() => {
        $(u, "name", Ke()), Ko(u, o(xe));
      }), j(n, u);
    };
    X(Ln, (n) => {
      o(R) === w.VERIFIED && n(El);
    });
  }
  var Pn = K(Ln, 2);
  {
    var Cl = (n) => {
      var u = ya(), g = J(u);
      $(g, "href", Qi), W(u), $e(() => $(g, "aria-label", o(O).ariaLinkLabel)), j(n, u);
    };
    X(Pn, (n) => {
      (B() !== !0 || o(Cr)) && n(Cl);
    });
  }
  var Al = K(Pn, 2);
  {
    var Il = (n) => {
      var u = Ra(), g = K(J(u), 2), _ = J(g), v = K(_, 2);
      Vo(v, !y()), v.__keydown = [
        ga,
        gn
      ];
      var E = K(v, 2), I = J(E), H = J(I);
      {
        var q = (pe) => {
          var Z = Aa();
          Z.__click = gn;
          var tr = J(Z);
          {
            var Ft = (bt) => {
              Pr(bt, () => 20);
            }, Dl = (bt, Ll) => {
              {
                var Pl = (pt) => {
                  var $r = wa();
                  j(pt, $r);
                }, Ol = (pt, $r) => {
                  {
                    var Fl = (yt) => {
                      var Sr = Ea();
                      j(yt, Sr);
                    }, Vl = (yt) => {
                      var Sr = Ca();
                      j(yt, Sr);
                    };
                    X(
                      pt,
                      (yt) => {
                        o(G) === te.PLAYING ? yt(Fl) : yt(Vl, !1);
                      },
                      $r
                    );
                  }
                };
                X(
                  bt,
                  (pt) => {
                    o(G) === te.ERROR ? pt(Pl) : pt(Ol, !1);
                  },
                  Ll
                );
              }
            };
            X(tr, (bt) => {
              o(G) === te.LOADING ? bt(Ft) : bt(Dl, !1);
            });
          }
          W(Z), $e(() => {
            $(Z, "title", o(O).getAudioChallenge), Z.disabled = o(G) === te.LOADING || o(G) === te.ERROR || o(tt), $(Z, "aria-label", o(G) === te.LOADING ? o(O).loading : o(O).getAudioChallenge);
          }), j(pe, Z);
        };
        X(H, (pe) => {
          o(Y).challenge.codeChallenge.audio && pe(q);
        });
      }
      var ee = K(H, 2);
      ee.__click = [_a, Pe], W(I);
      var ae = K(I, 2), it = J(ae);
      {
        var mt = (pe) => {
          Pr(pe, () => 16);
        };
        X(it, (pe) => {
          o(tt) && pe(mt);
        });
      }
      var lt = K(it);
      W(ae), W(E);
      var Tl = K(E, 2);
      {
        var Nl = (pe) => {
          var Z = Ia(), tr = J(Z);
          W(Z), nr(Z, (Ft) => p(Ue, Ft), () => o(Ue)), $e((Ft) => $(tr, "src", Ft), [
            () => sn(o(Y).challenge.codeChallenge.audio, { language: Ve() })
          ]), je("loadstart", Z, ul), je("canplay", Z, sl), je("pause", Z, cl), je("playing", Z, fl), je("ended", Z, ol), je("error", tr, al), j(pe, Z);
        };
        X(Tl, (pe) => {
          o(Y).challenge.codeChallenge.audio && o(Ir) && pe(Nl);
        });
      }
      W(g), W(u), $e(() => {
        $(u, "aria-label", o(O).verificationRequired), $(_, "src", o(Y).challenge.codeChallenge.image), $(v, "minlength", o(Y).challenge.codeChallenge.length || 1), $(v, "maxlength", o(Y).challenge.codeChallenge.length), $(v, "placeholder", o(O).enterCode), $(v, "aria-label", o(G) === te.LOADING ? o(O).loading : o(G) === te.PLAYING ? "" : o(O).enterCodeAria), $(v, "aria-live", o(G) ? "assertive" : "polite"), $(v, "aria-busy", o(G) === te.LOADING), v.disabled = o(tt), $(ee, "aria-label", o(O).reload), $(ee, "title", o(O).reload), ee.disabled = o(tt), ae.disabled = o(tt), $(ae, "aria-label", o(O).verify), Bo(lt, ` ${o(O).verify ?? ""}`);
      }), je("submit", g, dl, !0), j(n, u);
    };
    X(Al, (n) => {
      var u;
      (u = o(Y)) != null && u.challenge.codeChallenge && n(Il);
    });
  }
  W(kr);
  var On = K(kr, 2);
  {
    var Rl = (n) => {
      var u = $a(), g = K(J(u), 2);
      {
        var _ = (E) => {
          var I = xa(), H = J(I);
          ot(H, () => o(O).expired), W(I), $e(() => $(I, "title", o(et))), j(E, I);
        }, v = (E) => {
          var I = ka(), H = J(I);
          ot(H, () => o(O).error), W(I), $e(() => $(I, "title", o(et))), j(E, I);
        };
        X(g, (E) => {
          o(R) === w.EXPIRED ? E(_) : E(v, !1);
        });
      }
      W(u), j(n, u);
    };
    X(On, (n) => {
      (o(et) || o(R) === w.EXPIRED) && n(Rl);
    });
  }
  var Fn = K(On, 2);
  {
    var xl = (n) => {
      var u = Sa(), g = J(u), _ = J(g);
      ot(_, () => o(O).footer), W(g), W(u), j(n, u);
    };
    X(Fn, (n) => {
      o(O).footer && (Le() !== !0 || o(Cr)) && n(xl);
    });
  }
  var kl = K(Fn, 2);
  {
    var $l = (n) => {
      var u = Ta();
      nr(u, (g) => p(Nt, g), () => o(Nt)), j(n, u);
    };
    X(kl, (n) => {
      k() && n($l);
    });
  }
  W(_t), nr(_t, (n) => p(M, n), () => o(M)), $e(
    (n) => {
      $(_t, "data-state", o(R)), $(_t, "data-floating", k()), $(_t, "data-overlay", be()), Nn = Zo(Qt, 1, "altcha-checkbox", null, Nn, n), $(nt, "id", o(nn)), nt.required = l() !== "onsubmit" && (!k() || l() !== "off"), $(er, "for", o(nn));
    },
    [
      () => ({
        "altcha-checkbox-verifying": o(R) === w.VERIFYING
      })
    ]
  ), je("invalid", nt, hn), zo(nt, () => o(Tt), (n) => p(Tt, n)), j(e, Sn);
  var Sl = Vi({
    clarify: Lt,
    configure: In,
    getConfiguration: Rn,
    getFloatingAnchor: xn,
    getPlugin: ml,
    getState: kn,
    hide: Pt,
    repositionFloating: Ot,
    reset: rt,
    setFloatingAnchor: $n,
    setState: ke,
    show: zt,
    verify: Pe,
    get auto() {
      return l();
    },
    set auto(n = void 0) {
      l(n), C();
    },
    get blockspam() {
      return f();
    },
    set blockspam(n = void 0) {
      f(n), C();
    },
    get challengeurl() {
      return s();
    },
    set challengeurl(n = void 0) {
      s(n), C();
    },
    get challengejson() {
      return c();
    },
    set challengejson(n = void 0) {
      c(n), C();
    },
    get credentials() {
      return d();
    },
    set credentials(n = void 0) {
      d(n), C();
    },
    get customfetch() {
      return b();
    },
    set customfetch(n = void 0) {
      b(n), C();
    },
    get debug() {
      return h();
    },
    set debug(n = !1) {
      h(n), C();
    },
    get delay() {
      return m();
    },
    set delay(n = 0) {
      m(n), C();
    },
    get disableautofocus() {
      return y();
    },
    set disableautofocus(n = !1) {
      y(n), C();
    },
    get refetchonexpire() {
      return N();
    },
    set refetchonexpire(n = !0) {
      N(n), C();
    },
    get disablerefetchonexpire() {
      return D();
    },
    set disablerefetchonexpire(n = !N) {
      D(n), C();
    },
    get expire() {
      return U();
    },
    set expire(n = void 0) {
      U(n), C();
    },
    get floating() {
      return k();
    },
    set floating(n = void 0) {
      k(n), C();
    },
    get floatinganchor() {
      return z();
    },
    set floatinganchor(n = void 0) {
      z(n), C();
    },
    get floatingoffset() {
      return oe();
    },
    set floatingoffset(n = void 0) {
      oe(n), C();
    },
    get floatingpersist() {
      return Q();
    },
    set floatingpersist(n = !1) {
      Q(n), C();
    },
    get hidefooter() {
      return Le();
    },
    set hidefooter(n = !1) {
      Le(n), C();
    },
    get hidelogo() {
      return B();
    },
    set hidelogo(n = !1) {
      B(n), C();
    },
    get id() {
      return Ae();
    },
    set id(n = void 0) {
      Ae(n), C();
    },
    get language() {
      return Ve();
    },
    set language(n = void 0) {
      Ve(n), C();
    },
    get name() {
      return Ke();
    },
    set name(n = "altcha") {
      Ke(n), C();
    },
    get maxnumber() {
      return Xe();
    },
    set maxnumber(n = 1e6) {
      Xe(n), C();
    },
    get mockerror() {
      return kt();
    },
    set mockerror(n = !1) {
      kt(n), C();
    },
    get obfuscated() {
      return Me();
    },
    set obfuscated(n = void 0) {
      Me(n), C();
    },
    get overlay() {
      return be();
    },
    set overlay(n = void 0) {
      be(n), C();
    },
    get overlaycontent() {
      return $t();
    },
    set overlaycontent(n = void 0) {
      $t(n), C();
    },
    get plugins() {
      return Jt();
    },
    set plugins(n = void 0) {
      Jt(n), C();
    },
    get sentinel() {
      return ze();
    },
    set sentinel(n = void 0) {
      ze(n), C();
    },
    get spamfilter() {
      return Ie();
    },
    set spamfilter(n = !1) {
      Ie(n), C();
    },
    get strings() {
      return vt();
    },
    set strings(n = void 0) {
      vt(n), C();
    },
    get test() {
      return he();
    },
    set test(n = !1) {
      he(n), C();
    },
    get verifyurl() {
      return re();
    },
    set verifyurl(n = void 0) {
      re(n), C();
    },
    get workers() {
      return ht();
    },
    set workers(n = Math.min(16, navigator.hardwareConcurrency || 8)) {
      ht(n), C();
    },
    get workerurl() {
      return St();
    },
    set workerurl(n = void 0) {
      St(n), C();
    }
  });
  return i(), Sl;
}
Uo(["change", "keydown", "click"]);
customElements.define("altcha-widget", aa(
  Da,
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
globalThis.altchaCreateWorker = (e) => new Worker(new URL(e || "./worker.js", import.meta.url));
export {
  Da as Altcha
};
