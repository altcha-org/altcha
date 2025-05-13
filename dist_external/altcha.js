var ul = Object.defineProperty;
var bn = (e) => {
  throw TypeError(e);
};
var fl = (e, t, r) => t in e ? ul(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var we = (e, t, r) => fl(e, typeof t != "symbol" ? t + "" : t, r), yn = (e, t, r) => t.has(e) || bn("Cannot " + r);
var ae = (e, t, r) => (yn(e, t, "read from private field"), r ? r.call(e) : t.get(e)), wr = (e, t, r) => t.has(e) ? bn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), mr = (e, t, r, i) => (yn(e, t, "write to private field"), i ? i.call(e, r) : t.set(e, r), r);
const cl = "5";
var Pn;
typeof window < "u" && ((Pn = window.__svelte ?? (window.__svelte = {})).v ?? (Pn.v = /* @__PURE__ */ new Set())).add(cl);
const dl = 1, hl = 4, vl = 8, gl = 16, _l = 1, wl = 2, kr = "[", On = "[!", Fn = "]", vt = {}, se = Symbol(), ml = "http://www.w3.org/1999/xhtml", xn = !1, pe = 2, Vn = 4, Qt = 8, Ir = 16, Oe = 32, nt = 64, Ht = 128, ge = 256, Yt = 512, de = 1024, Fe = 2048, mt = 4096, gt = 8192, er = 16384, pl = 32768, Rr = 65536, bl = 1 << 19, Mn = 1 << 20, $t = Symbol("$state"), jn = Symbol("legacy props"), yl = Symbol("");
var Un = Array.isArray, xl = Array.prototype.indexOf, El = Array.from, Gt = Object.keys, Zt = Object.defineProperty, tt = Object.getOwnPropertyDescriptor, Cl = Object.getOwnPropertyDescriptors, Al = Object.prototype, kl = Array.prototype, qn = Object.getPrototypeOf;
function Bn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Il(e, t, r = !1) {
  return e === void 0 ? r ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
const Rl = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let St = [], Tt = [];
function Hn() {
  var e = St;
  St = [], Bn(e);
}
function Yn() {
  var e = Tt;
  Tt = [], Bn(e);
}
function tr(e) {
  St.length === 0 && queueMicrotask(Hn), St.push(e);
}
function $l(e) {
  Tt.length === 0 && Rl(Yn), Tt.push(e);
}
function En() {
  St.length > 0 && Hn(), Tt.length > 0 && Yn();
}
function Gn(e) {
  return e === this.v;
}
function Nl(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function $r(e) {
  return !Nl(e, this.v);
}
function Sl(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Tl() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Dl(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ll() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Pl() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Ol(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Fl() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Vl() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ml() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function jl() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Ul = !1;
function Ae(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Gn,
    rv: 0,
    wv: 0
  };
  return r;
}
function oe(e) {
  return /* @__PURE__ */ ql(Ae(e));
}
// @__NO_SIDE_EFFECTS__
function Zn(e, t = !1) {
  const r = Ae(e);
  return t || (r.equals = $r), r;
}
// @__NO_SIDE_EFFECTS__
function ql(e) {
  return N !== null && !me && (N.f & pe) !== 0 && (ke === null ? zl([e]) : ke.push(e)), e;
}
function b(e, t) {
  return N !== null && !me && hi() && (N.f & (pe | Ir)) !== 0 && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (ke === null || !ke.includes(e)) && jl(), Bl(e, t);
}
function Bl(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = ti(), Wn(e, Fe), T !== null && (T.f & de) !== 0 && (T.f & (Oe | nt)) === 0 && (Te === null ? Jl([e]) : Te.push(e))), t;
}
function Wn(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, l = 0; l < i; l++) {
      var a = r[l], s = a.f;
      (s & Fe) === 0 && (Re(a, t), (s & (de | ge)) !== 0 && ((s & pe) !== 0 ? Wn(
        /** @type {Derived} */
        a,
        mt
      ) : lr(
        /** @type {Effect} */
        a
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function He(e) {
  var t = pe | Fe, r = N !== null && (N.f & pe) !== 0 ? (
    /** @type {Derived} */
    N
  ) : null;
  return T === null || r !== null && (r.f & ge) !== 0 ? t |= ge : T.f |= Mn, {
    ctx: ne,
    deps: null,
    effects: null,
    equals: Gn,
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
function Hl(e) {
  const t = /* @__PURE__ */ He(e);
  return t.equals = $r, t;
}
function zn(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Pe(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Yl(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & pe) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Gl(e) {
  var t, r = T;
  We(Yl(e));
  try {
    zn(e), t = ni(e);
  } finally {
    We(r);
  }
  return t;
}
function Jn(e) {
  var t = Gl(e), r = (Ye || (e.f & ge) !== 0) && e.deps !== null ? mt : de;
  Re(e, r), e.equals(t) || (e.v = t, e.wv = ti());
}
function rr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let O = !1;
function ht(e) {
  O = e;
}
let P;
function Ge(e) {
  if (e === null)
    throw rr(), vt;
  return P = e;
}
function _t() {
  return Ge(
    /** @type {TemplateNode} */
    /* @__PURE__ */ ze(P)
  );
}
function G(e) {
  if (O) {
    if (/* @__PURE__ */ ze(P) !== null)
      throw rr(), vt;
    P = e;
  }
}
function Zl() {
  for (var e = 0, t = P; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === Fn) {
        if (e === 0) return t;
        e -= 1;
      } else (r === kr || r === On) && (e += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ze(t)
    );
    t.remove(), t = i;
  }
}
function V(e, t = null, r) {
  if (typeof e != "object" || e === null || $t in e)
    return e;
  const i = qn(e);
  if (i !== Al && i !== kl)
    return e;
  var l = /* @__PURE__ */ new Map(), a = Un(e), s = Ae(0);
  a && l.set("length", Ae(
    /** @type {any[]} */
    e.length
  ));
  var f;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(c, d, w) {
        (!("value" in w) || w.configurable === !1 || w.enumerable === !1 || w.writable === !1) && Fl();
        var v = l.get(d);
        return v === void 0 ? (v = Ae(w.value), l.set(d, v)) : b(v, V(w.value, f)), !0;
      },
      deleteProperty(c, d) {
        var w = l.get(d);
        if (w === void 0)
          d in c && l.set(d, Ae(se));
        else {
          if (a && typeof d == "string") {
            var v = (
              /** @type {Source<number>} */
              l.get("length")
            ), h = Number(d);
            Number.isInteger(h) && h < v.v && b(v, h);
          }
          b(w, se), Cn(s);
        }
        return !0;
      },
      get(c, d, w) {
        var A;
        if (d === $t)
          return e;
        var v = l.get(d), h = d in c;
        if (v === void 0 && (!h || (A = tt(c, d)) != null && A.writable) && (v = Ae(V(h ? c[d] : se, f)), l.set(d, v)), v !== void 0) {
          var p = o(v);
          return p === se ? void 0 : p;
        }
        return Reflect.get(c, d, w);
      },
      getOwnPropertyDescriptor(c, d) {
        var w = Reflect.getOwnPropertyDescriptor(c, d);
        if (w && "value" in w) {
          var v = l.get(d);
          v && (w.value = o(v));
        } else if (w === void 0) {
          var h = l.get(d), p = h == null ? void 0 : h.v;
          if (h !== void 0 && p !== se)
            return {
              enumerable: !0,
              configurable: !0,
              value: p,
              writable: !0
            };
        }
        return w;
      },
      has(c, d) {
        var p;
        if (d === $t)
          return !0;
        var w = l.get(d), v = w !== void 0 && w.v !== se || Reflect.has(c, d);
        if (w !== void 0 || T !== null && (!v || (p = tt(c, d)) != null && p.writable)) {
          w === void 0 && (w = Ae(v ? V(c[d], f) : se), l.set(d, w));
          var h = o(w);
          if (h === se)
            return !1;
        }
        return v;
      },
      set(c, d, w, v) {
        var J;
        var h = l.get(d), p = d in c;
        if (a && d === "length")
          for (var A = w; A < /** @type {Source<number>} */
          h.v; A += 1) {
            var D = l.get(A + "");
            D !== void 0 ? b(D, se) : A in c && (D = Ae(se), l.set(A + "", D));
          }
        h === void 0 ? (!p || (J = tt(c, d)) != null && J.writable) && (h = Ae(void 0), b(h, V(w, f)), l.set(d, h)) : (p = h.v !== se, b(h, V(w, f)));
        var F = Reflect.getOwnPropertyDescriptor(c, d);
        if (F != null && F.set && F.set.call(v, w), !p) {
          if (a && typeof d == "string") {
            var ue = (
              /** @type {Source<number>} */
              l.get("length")
            ), ie = Number(d);
            Number.isInteger(ie) && ie >= ue.v && b(ue, ie + 1);
          }
          Cn(s);
        }
        return !0;
      },
      ownKeys(c) {
        o(s);
        var d = Reflect.ownKeys(c).filter((h) => {
          var p = l.get(h);
          return p === void 0 || p.v !== se;
        });
        for (var [w, v] of l)
          v.v !== se && !(w in c) && d.push(w);
        return d;
      },
      setPrototypeOf() {
        Vl();
      }
    }
  );
}
function Cn(e, t = 1) {
  b(e, e.v + t);
}
var An, Kn, Xn, Qn;
function yr() {
  if (An === void 0) {
    An = window, Kn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    Xn = tt(t, "firstChild").get, Qn = tt(t, "nextSibling").get, e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function nr(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Le(e) {
  return Xn.call(e);
}
// @__NO_SIDE_EFFECTS__
function ze(e) {
  return Qn.call(e);
}
function Z(e, t) {
  if (!O)
    return /* @__PURE__ */ Le(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Le(P)
  );
  return r === null && (r = P.appendChild(nr())), Ge(r), r;
}
function It(e, t) {
  if (!O) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Le(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ ze(r) : r;
  }
  return P;
}
function W(e, t = 1, r = !1) {
  let i = O ? P : e;
  for (var l; t--; )
    l = i, i = /** @type {TemplateNode} */
    /* @__PURE__ */ ze(i);
  if (!O)
    return i;
  var a = i == null ? void 0 : i.nodeType;
  if (r && a !== 3) {
    var s = nr();
    return i === null ? l == null || l.after(s) : i.before(s), Ge(s), s;
  }
  return Ge(i), /** @type {TemplateNode} */
  i;
}
function Wl(e) {
  e.textContent = "";
}
let qt = !1, Wt = !1, zt = null, rt = !1, Nr = !1;
function kn(e) {
  Nr = e;
}
let Nt = [];
let N = null, me = !1;
function Ze(e) {
  N = e;
}
let T = null;
function We(e) {
  T = e;
}
let ke = null;
function zl(e) {
  ke = e;
}
let re = null, ce = 0, Te = null;
function Jl(e) {
  Te = e;
}
let ei = 1, Jt = 0, Ye = !1;
function ti() {
  return ++ei;
}
function Dt(e) {
  var v;
  var t = e.f;
  if ((t & Fe) !== 0)
    return !0;
  if ((t & mt) !== 0) {
    var r = e.deps, i = (t & ge) !== 0;
    if (r !== null) {
      var l, a, s = (t & Yt) !== 0, f = i && T !== null && !Ye, c = r.length;
      if (s || f) {
        var d = (
          /** @type {Derived} */
          e
        ), w = d.parent;
        for (l = 0; l < c; l++)
          a = r[l], (s || !((v = a == null ? void 0 : a.reactions) != null && v.includes(d))) && (a.reactions ?? (a.reactions = [])).push(d);
        s && (d.f ^= Yt), f && w !== null && (w.f & ge) === 0 && (d.f ^= ge);
      }
      for (l = 0; l < c; l++)
        if (a = r[l], Dt(
          /** @type {Derived} */
          a
        ) && Jn(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!i || T !== null && !Ye) && Re(e, de);
  }
  return !1;
}
function Kl(e, t) {
  for (var r = t; r !== null; ) {
    if ((r.f & Ht) !== 0)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= Ht;
      }
    r = r.parent;
  }
  throw qt = !1, e;
}
function Xl(e) {
  return (e.f & er) === 0 && (e.parent === null || (e.parent.f & Ht) === 0);
}
function ir(e, t, r, i) {
  if (qt) {
    if (r === null && (qt = !1), Xl(t))
      throw e;
    return;
  }
  r !== null && (qt = !0);
  {
    Kl(e, t);
    return;
  }
}
function ri(e, t, r = !0) {
  var i = e.reactions;
  if (i !== null)
    for (var l = 0; l < i.length; l++) {
      var a = i[l];
      (a.f & pe) !== 0 ? ri(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (r ? Re(a, Fe) : (a.f & de) !== 0 && Re(a, mt), lr(
        /** @type {Effect} */
        a
      ));
    }
}
function ni(e) {
  var p;
  var t = re, r = ce, i = Te, l = N, a = Ye, s = ke, f = ne, c = me, d = e.f;
  re = /** @type {null | Value[]} */
  null, ce = 0, Te = null, Ye = (d & ge) !== 0 && (me || !rt || N === null), N = (d & (Oe | nt)) === 0 ? e : null, ke = null, Rn(e.ctx), me = !1, Jt++;
  try {
    var w = (
      /** @type {Function} */
      (0, e.fn)()
    ), v = e.deps;
    if (re !== null) {
      var h;
      if (Kt(e, ce), v !== null && ce > 0)
        for (v.length = ce + re.length, h = 0; h < re.length; h++)
          v[ce + h] = re[h];
      else
        e.deps = v = re;
      if (!Ye)
        for (h = ce; h < v.length; h++)
          ((p = v[h]).reactions ?? (p.reactions = [])).push(e);
    } else v !== null && ce < v.length && (Kt(e, ce), v.length = ce);
    if (hi() && Te !== null && !me && v !== null && (e.f & (pe | mt | Fe)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      Te.length; h++)
        ri(
          Te[h],
          /** @type {Effect} */
          e
        );
    return l !== null && Jt++, w;
  } finally {
    re = t, ce = r, Te = i, N = l, Ye = a, ke = s, Rn(f), me = c;
  }
}
function Ql(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var i = xl.call(r, e);
    if (i !== -1) {
      var l = r.length - 1;
      l === 0 ? r = t.reactions = null : (r[i] = r[l], r.pop());
    }
  }
  r === null && (t.f & pe) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (re === null || !re.includes(t)) && (Re(t, mt), (t.f & (ge | Yt)) === 0 && (t.f ^= Yt), zn(
    /** @type {Derived} **/
    t
  ), Kt(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Kt(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var i = t; i < r.length; i++)
      Ql(e, r[i]);
}
function Sr(e) {
  var t = e.f;
  if ((t & er) === 0) {
    Re(e, de);
    var r = T, i = ne, l = rt;
    T = e, rt = !0;
    try {
      (t & Ir) !== 0 ? ua(e) : ai(e), li(e);
      var a = ni(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = ei;
      var s = e.deps, f;
      xn && Ul && e.f & Fe;
    } catch (c) {
      ir(c, e, r, i || e.ctx);
    } finally {
      rt = l, T = r;
    }
  }
}
function ea() {
  try {
    Ll();
  } catch (e) {
    if (zt !== null)
      ir(e, zt, null);
    else
      throw e;
  }
}
function ii() {
  var e = rt;
  try {
    var t = 0;
    for (rt = !0; Nt.length > 0; ) {
      t++ > 1e3 && ea();
      var r = Nt, i = r.length;
      Nt = [];
      for (var l = 0; l < i; l++) {
        var a = ra(r[l]);
        ta(a);
      }
    }
  } finally {
    Wt = !1, rt = e, zt = null;
  }
}
function ta(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var i = e[r];
      if ((i.f & (er | gt)) === 0)
        try {
          Dt(i) && (Sr(i), i.deps === null && i.first === null && i.nodes_start === null && (i.teardown === null ? oi(i) : i.fn = null));
        } catch (l) {
          ir(l, i, null, i.ctx);
        }
    }
}
function lr(e) {
  Wt || (Wt = !0, queueMicrotask(ii));
  for (var t = zt = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (nt | Oe)) !== 0) {
      if ((r & de) === 0) return;
      t.f ^= de;
    }
  }
  Nt.push(t);
}
function ra(e) {
  for (var t = [], r = e; r !== null; ) {
    var i = r.f, l = (i & (Oe | nt)) !== 0, a = l && (i & de) !== 0;
    if (!a && (i & gt) === 0) {
      if ((i & Vn) !== 0)
        t.push(r);
      else if (l)
        r.f ^= de;
      else {
        var s = N;
        try {
          N = r, Dt(r) && Sr(r);
        } catch (d) {
          ir(d, r, null, r.ctx);
        } finally {
          N = s;
        }
      }
      var f = r.first;
      if (f !== null) {
        r = f;
        continue;
      }
    }
    var c = r.parent;
    for (r = r.next; r === null && c !== null; )
      r = c.next, c = c.parent;
  }
  return t;
}
function C(e) {
  var t;
  for (En(); Nt.length > 0; )
    Wt = !0, ii(), En();
  return (
    /** @type {T} */
    t
  );
}
async function pr() {
  await Promise.resolve(), C();
}
function o(e) {
  var t = e.f, r = (t & pe) !== 0;
  if (N !== null && !me) {
    ke !== null && ke.includes(e) && Ml();
    var i = N.deps;
    e.rv < Jt && (e.rv = Jt, re === null && i !== null && i[ce] === e ? ce++ : re === null ? re = [e] : (!Ye || !re.includes(e)) && re.push(e));
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var l = (
      /** @type {Derived} */
      e
    ), a = l.parent;
    a !== null && (a.f & ge) === 0 && (l.f ^= ge);
  }
  return r && (l = /** @type {Derived} */
  e, Dt(l) && Jn(l)), e.v;
}
function wt(e) {
  var t = me;
  try {
    return me = !0, e();
  } finally {
    me = t;
  }
}
const na = -7169;
function Re(e, t) {
  e.f = e.f & na | t;
}
function ia(e) {
  T === null && N === null && Dl(), N !== null && (N.f & ge) !== 0 && T === null && Tl(), Nr && Sl();
}
function la(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function it(e, t, r, i = !0) {
  var l = T, a = {
    ctx: ne,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Fe,
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
      Sr(a), a.f |= pl;
    } catch (c) {
      throw Pe(a), c;
    }
  else t !== null && lr(a);
  var s = r && a.deps === null && a.first === null && a.nodes_start === null && a.teardown === null && (a.f & (Mn | Ht)) === 0;
  if (!s && i && (l !== null && la(a, l), N !== null && (N.f & pe) !== 0)) {
    var f = (
      /** @type {Derived} */
      N
    );
    (f.effects ?? (f.effects = [])).push(a);
  }
  return a;
}
function aa(e) {
  const t = it(Qt, null, !1);
  return Re(t, de), t.teardown = e, t;
}
function xr(e) {
  ia();
  var t = T !== null && (T.f & Oe) !== 0 && ne !== null && !ne.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      ne
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: T,
      reaction: N
    });
  } else {
    var i = Tr(e);
    return i;
  }
}
function oa(e) {
  const t = it(nt, e, !0);
  return () => {
    Pe(t);
  };
}
function sa(e) {
  const t = it(nt, e, !0);
  return (r = {}) => new Promise((i) => {
    r.outro ? Er(t, () => {
      Pe(t), i(void 0);
    }) : (Pe(t), i(void 0));
  });
}
function Tr(e) {
  return it(Vn, e, !1);
}
function Dr(e) {
  return it(Qt, e, !0);
}
function Se(e, t = [], r = He) {
  const i = t.map(r);
  return Lr(() => e(...i.map(o)));
}
function Lr(e, t = 0) {
  return it(Qt | Ir | t, e, !0);
}
function Xt(e, t = !0) {
  return it(Qt | Oe, e, !0, t);
}
function li(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Nr, i = N;
    kn(!0), Ze(null);
    try {
      t.call(null);
    } finally {
      kn(r), Ze(i);
    }
  }
}
function ai(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var i = r.next;
    (r.f & nt) !== 0 ? r.parent = null : Pe(r, t), r = i;
  }
}
function ua(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Oe) === 0 && Pe(t), t = r;
  }
}
function Pe(e, t = !0) {
  var r = !1;
  if ((t || (e.f & bl) !== 0) && e.nodes_start !== null) {
    for (var i = e.nodes_start, l = e.nodes_end; i !== null; ) {
      var a = i === l ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ze(i)
      );
      i.remove(), i = a;
    }
    r = !0;
  }
  ai(e, t && !r), Kt(e, 0), Re(e, er);
  var s = e.transitions;
  if (s !== null)
    for (const c of s)
      c.stop();
  li(e);
  var f = e.parent;
  f !== null && f.first !== null && oi(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function oi(e) {
  var t = e.parent, r = e.prev, i = e.next;
  r !== null && (r.next = i), i !== null && (i.prev = r), t !== null && (t.first === e && (t.first = i), t.last === e && (t.last = r));
}
function Er(e, t) {
  var r = [];
  si(e, r, !0), fa(r, () => {
    Pe(e), t && t();
  });
}
function fa(e, t) {
  var r = e.length;
  if (r > 0) {
    var i = () => --r || t();
    for (var l of e)
      l.out(i);
  } else
    t();
}
function si(e, t, r) {
  if ((e.f & gt) === 0) {
    if (e.f ^= gt, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || r) && t.push(s);
    for (var i = e.first; i !== null; ) {
      var l = i.next, a = (i.f & Rr) !== 0 || (i.f & Oe) !== 0;
      si(i, t, a ? r : !1), i = l;
    }
  }
}
function In(e) {
  ui(e, !0);
}
function ui(e, t) {
  if ((e.f & gt) !== 0) {
    e.f ^= gt, (e.f & de) === 0 && (e.f ^= de), Dt(e) && (Re(e, Fe), lr(e));
    for (var r = e.first; r !== null; ) {
      var i = r.next, l = (r.f & Rr) !== 0 || (r.f & Oe) !== 0;
      ui(r, l ? t : !1), r = i;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
function fi(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let ne = null;
function Rn(e) {
  ne = e;
}
function ci(e, t = !1, r) {
  ne = {
    p: ne,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
}
function di(e) {
  const t = ne;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var r = T, i = N;
      t.e = null;
      try {
        for (var l = 0; l < s.length; l++) {
          var a = s[l];
          We(a.effect), Ze(a.reaction), Tr(a.fn);
        }
      } finally {
        We(r), Ze(i);
      }
    }
    ne = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function hi() {
  return !0;
}
const ca = ["touchstart", "touchmove"];
function da(e) {
  return ca.includes(e);
}
function ha(e, t) {
  if (t) {
    const r = document.body;
    e.autofocus = !0, tr(() => {
      document.activeElement === r && e.focus();
    });
  }
}
let $n = !1;
function vi() {
  $n || ($n = !0, document.addEventListener(
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
function gi(e) {
  var t = N, r = T;
  Ze(null), We(null);
  try {
    return e();
  } finally {
    Ze(t), We(r);
  }
}
function va(e, t, r, i = r) {
  e.addEventListener(t, () => gi(r));
  const l = e.__on_r;
  l ? e.__on_r = () => {
    l(), i(!0);
  } : e.__on_r = () => i(!0), vi();
}
const _i = /* @__PURE__ */ new Set(), Cr = /* @__PURE__ */ new Set();
function ga(e, t, r, i = {}) {
  function l(a) {
    if (i.capture || Rt.call(t, a), !a.cancelBubble)
      return gi(() => r == null ? void 0 : r.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? tr(() => {
    t.addEventListener(e, l, i);
  }) : t.addEventListener(e, l, i), l;
}
function Be(e, t, r, i, l) {
  var a = { capture: i, passive: l }, s = ga(e, t, r, a);
  (t === document.body || t === window || t === document) && aa(() => {
    t.removeEventListener(e, s, a);
  });
}
function _a(e) {
  for (var t = 0; t < e.length; t++)
    _i.add(e[t]);
  for (var r of Cr)
    r(e);
}
function Rt(e) {
  var ie;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), i = e.type, l = ((ie = e.composedPath) == null ? void 0 : ie.call(e)) || [], a = (
    /** @type {null | Element} */
    l[0] || e.target
  ), s = 0, f = e.__root;
  if (f) {
    var c = l.indexOf(f);
    if (c !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var d = l.indexOf(t);
    if (d === -1)
      return;
    c <= d && (s = c);
  }
  if (a = /** @type {Element} */
  l[s] || e.target, a !== t) {
    Zt(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var w = N, v = T;
    Ze(null), We(null);
    try {
      for (var h, p = []; a !== null; ) {
        var A = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var D = a["__" + i];
          if (D != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (Un(D)) {
              var [F, ...ue] = D;
              F.apply(a, [e, ...ue]);
            } else
              D.call(a, e);
        } catch (J) {
          h ? p.push(J) : h = J;
        }
        if (e.cancelBubble || A === t || A === null)
          break;
        a = A;
      }
      if (h) {
        for (let J of p)
          queueMicrotask(() => {
            throw J;
          });
        throw h;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Ze(w), We(v);
    }
  }
}
function Pr(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Ie(e, t) {
  var r = (
    /** @type {Effect} */
    T
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function be(e, t) {
  var r = (t & _l) !== 0, i = (t & wl) !== 0, l, a = !e.startsWith("<!>");
  return () => {
    if (O)
      return Ie(P, null), P;
    l === void 0 && (l = Pr(a ? e : "<!>" + e), r || (l = /** @type {Node} */
    /* @__PURE__ */ Le(l)));
    var s = (
      /** @type {TemplateNode} */
      i || Kn ? document.importNode(l, !0) : l.cloneNode(!0)
    );
    if (r) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Le(s)
      ), c = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Ie(f, c);
    } else
      Ie(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function ar(e, t, r = "svg") {
  var i = !e.startsWith("<!>"), l = `<${r}>${i ? e : "<!>" + e}</${r}>`, a;
  return () => {
    if (O)
      return Ie(P, null), P;
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        Pr(l)
      ), f = (
        /** @type {Element} */
        /* @__PURE__ */ Le(s)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ Le(f);
    }
    var c = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return Ie(c, c), c;
  };
}
function Mt() {
  if (O)
    return Ie(P, null), P;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = nr();
  return e.append(t, r), Ie(t, r), e;
}
function j(e, t) {
  if (O) {
    T.nodes_end = P, _t();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function wa(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function wi(e, t) {
  return mi(e, t);
}
function ma(e, t) {
  yr(), t.intro = t.intro ?? !1;
  const r = t.target, i = O, l = P;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Le(r)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== kr); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ ze(a);
    if (!a)
      throw vt;
    ht(!0), Ge(
      /** @type {Comment} */
      a
    ), _t();
    const s = mi(e, { ...t, anchor: a });
    if (P === null || P.nodeType !== 8 || /** @type {Comment} */
    P.data !== Fn)
      throw rr(), vt;
    return ht(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === vt)
      return t.recover === !1 && Pl(), yr(), Wl(r), ht(!1), wi(e, t);
    throw s;
  } finally {
    ht(i), Ge(l);
  }
}
const dt = /* @__PURE__ */ new Map();
function mi(e, { target: t, anchor: r, props: i = {}, events: l, context: a, intro: s = !0 }) {
  yr();
  var f = /* @__PURE__ */ new Set(), c = (v) => {
    for (var h = 0; h < v.length; h++) {
      var p = v[h];
      if (!f.has(p)) {
        f.add(p);
        var A = da(p);
        t.addEventListener(p, Rt, { passive: A });
        var D = dt.get(p);
        D === void 0 ? (document.addEventListener(p, Rt, { passive: A }), dt.set(p, 1)) : dt.set(p, D + 1);
      }
    }
  };
  c(El(_i)), Cr.add(c);
  var d = void 0, w = sa(() => {
    var v = r ?? t.appendChild(nr());
    return Xt(() => {
      if (a) {
        ci({});
        var h = (
          /** @type {ComponentContext} */
          ne
        );
        h.c = a;
      }
      l && (i.$$events = l), O && Ie(
        /** @type {TemplateNode} */
        v,
        null
      ), d = e(v, i) || {}, O && (T.nodes_end = P), a && di();
    }), () => {
      var A;
      for (var h of f) {
        t.removeEventListener(h, Rt);
        var p = (
          /** @type {number} */
          dt.get(h)
        );
        --p === 0 ? (document.removeEventListener(h, Rt), dt.delete(h)) : dt.set(h, p);
      }
      Cr.delete(c), v !== r && ((A = v.parentNode) == null || A.removeChild(v));
    };
  });
  return Ar.set(d, w), d;
}
let Ar = /* @__PURE__ */ new WeakMap();
function pa(e, t) {
  const r = Ar.get(e);
  return r ? (Ar.delete(e), r(t)) : Promise.resolve();
}
function z(e, t, [r, i] = [0, 0]) {
  O && r === 0 && _t();
  var l = e, a = null, s = null, f = se, c = r > 0 ? Rr : 0, d = !1;
  const w = (h, p = !0) => {
    d = !0, v(p, h);
  }, v = (h, p) => {
    if (f === (f = h)) return;
    let A = !1;
    if (O && i !== -1) {
      if (r === 0) {
        const F = (
          /** @type {Comment} */
          l.data
        );
        F === kr ? i = 0 : F === On ? i = 1 / 0 : (i = parseInt(F.substring(1)), i !== i && (i = f ? 1 / 0 : -1));
      }
      const D = i > r;
      !!f === D && (l = Zl(), Ge(l), ht(!1), A = !0, i = -1);
    }
    f ? (a ? In(a) : p && (a = Xt(() => p(l))), s && Er(s, () => {
      s = null;
    })) : (s ? In(s) : p && (s = Xt(() => p(l, [r + 1, i]))), a && Er(a, () => {
      a = null;
    })), A && ht(!0);
  };
  Lr(() => {
    d = !1, t(w), d || v(null, null);
  }, c), O && (l = P);
}
function et(e, t, r, i, l) {
  var a = e, s = "", f;
  Lr(() => {
    if (s === (s = t() ?? "")) {
      O && _t();
      return;
    }
    f !== void 0 && (Pe(f), f = void 0), s !== "" && (f = Xt(() => {
      if (O) {
        P.data;
        for (var c = _t(), d = c; c !== null && (c.nodeType !== 8 || /** @type {Comment} */
        c.data !== ""); )
          d = c, c = /** @type {TemplateNode} */
          /* @__PURE__ */ ze(c);
        if (c === null)
          throw rr(), vt;
        Ie(P, d), a = Ge(c);
        return;
      }
      var w = s + "", v = Pr(w);
      Ie(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Le(v),
        /** @type {TemplateNode} */
        v.lastChild
      ), a.before(v);
    }));
  });
}
function ba(e, t, r, i, l) {
  var f;
  O && _t();
  var a = (f = t.$$slots) == null ? void 0 : f[r], s = !1;
  a === !0 && (a = t.children, s = !0), a === void 0 || a(e, s ? () => i : i);
}
function ya(e, t) {
  tr(() => {
    var r = e.getRootNode(), i = (
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
    if (!i.querySelector("#" + t.hash)) {
      const l = document.createElement("style");
      l.id = t.hash, l.textContent = t.code, i.appendChild(l);
    }
  });
}
const Nn = [...` 	
\r\f \v\uFEFF`];
function xa(e, t, r) {
  var i = "" + e;
  if (r) {
    for (var l in r)
      if (r[l])
        i = i ? i + " " + l : l;
      else if (i.length)
        for (var a = l.length, s = 0; (s = i.indexOf(l, s)) >= 0; ) {
          var f = s + a;
          (s === 0 || Nn.includes(i[s - 1])) && (f === i.length || Nn.includes(i[f])) ? i = (s === 0 ? "" : i.substring(0, s)) + i.substring(f + 1) : s = f;
        }
  }
  return i === "" ? null : i;
}
function Ea(e, t, r, i, l, a) {
  var s = e.__className;
  if (O || s !== r) {
    var f = xa(r, i, a);
    (!O || f !== e.getAttribute("class")) && (f == null ? e.removeAttribute("class") : e.className = f), e.__className = r;
  } else if (a && l !== a)
    for (var c in a) {
      var d = !!a[c];
      (l == null || d !== !!l[c]) && e.classList.toggle(c, d);
    }
  return a;
}
const Ca = Symbol("is custom element"), Aa = Symbol("is html");
function Sn(e) {
  if (O) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var i = e.value;
          S(e, "value", null), e.value = i;
        }
        if (e.hasAttribute("checked")) {
          var l = e.checked;
          S(e, "checked", null), e.checked = l;
        }
      }
    };
    e.__on_r = r, $l(r), vi();
  }
}
function ka(e, t) {
  var r = pi(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function S(e, t, r, i) {
  var l = pi(e);
  O && (l[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || l[t] !== (l[t] = r) && (t === "loading" && (e[yl] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Ia(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function pi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Ca]: e.nodeName.includes("-"),
      [Aa]: e.namespaceURI === ml
    })
  );
}
var Tn = /* @__PURE__ */ new Map();
function Ia(e) {
  var t = Tn.get(e.nodeName);
  if (t) return t;
  Tn.set(e.nodeName, t = []);
  for (var r, i = e, l = Element.prototype; l !== i; ) {
    r = Cl(i);
    for (var a in r)
      r[a].set && t.push(a);
    i = qn(i);
  }
  return t;
}
function Ra(e, t, r = t) {
  va(e, "change", (i) => {
    var l = i ? e.defaultChecked : e.checked;
    r(l);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (O && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  wt(t) == null) && r(e.checked), Dr(() => {
    var i = t();
    e.checked = !!i;
  });
}
function Dn(e, t) {
  return e === t || (e == null ? void 0 : e[$t]) === t;
}
function jt(e = {}, t, r, i) {
  return Tr(() => {
    var l, a;
    return Dr(() => {
      l = a, a = [], wt(() => {
        e !== r(...a) && (t(e, ...a), l && Dn(r(...l), e) && t(null, ...l));
      });
    }), () => {
      tr(() => {
        a && Dn(r(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function bi(e) {
  ne === null && fi(), xr(() => {
    const t = wt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function $a(e) {
  ne === null && fi(), bi(() => () => wt(e));
}
let Ut = !1;
function Na(e) {
  var t = Ut;
  try {
    return Ut = !1, [e(), Ut];
  } finally {
    Ut = t;
  }
}
function I(e, t, r, i) {
  var ye;
  var l = (r & dl) !== 0, a = !0, s = (r & vl) !== 0, f = (r & gl) !== 0, c = !1, d;
  s ? [d, c] = Na(() => (
    /** @type {V} */
    e[t]
  )) : d = /** @type {V} */
  e[t];
  var w = $t in e || jn in e, v = s && (((ye = tt(e, t)) == null ? void 0 : ye.set) ?? (w && t in e && ((U) => e[t] = U))) || void 0, h = (
    /** @type {V} */
    i
  ), p = !0, A = !1, D = () => (A = !0, p && (p = !1, f ? h = wt(
    /** @type {() => V} */
    i
  ) : h = /** @type {V} */
  i), h);
  d === void 0 && i !== void 0 && (v && a && Ol(), d = D(), v && v(d));
  var F;
  if (F = () => {
    var U = (
      /** @type {V} */
      e[t]
    );
    return U === void 0 ? D() : (p = !0, A = !1, U);
  }, (r & hl) === 0)
    return F;
  if (v) {
    var ue = e.$$legacy;
    return function(U, Q) {
      return arguments.length > 0 ? ((!Q || ue || c) && v(Q ? F() : U), U) : F();
    };
  }
  var ie = !1, J = /* @__PURE__ */ Zn(d), fe = /* @__PURE__ */ He(() => {
    var U = F(), Q = o(J);
    return ie ? (ie = !1, Q) : J.v = U;
  });
  return l || (fe.equals = $r), function(U, Q) {
    if (arguments.length > 0) {
      const Ve = Q ? o(fe) : s ? V(U) : U;
      return fe.equals(Ve) || (ie = !0, b(J, Ve), A && h !== void 0 && (h = Ve), wt(() => o(fe))), U;
    }
    return o(fe);
  };
}
function Sa(e) {
  return new Ta(e);
}
var De, ve;
class Ta {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    wr(this, De);
    /** @type {Record<string, any>} */
    wr(this, ve);
    var a;
    var r = /* @__PURE__ */ new Map(), i = (s, f) => {
      var c = /* @__PURE__ */ Zn(f);
      return r.set(s, c), c;
    };
    const l = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, f) {
          return o(r.get(f) ?? i(f, Reflect.get(s, f)));
        },
        has(s, f) {
          return f === jn ? !0 : (o(r.get(f) ?? i(f, Reflect.get(s, f))), Reflect.has(s, f));
        },
        set(s, f, c) {
          return b(r.get(f) ?? i(f, c), c), Reflect.set(s, f, c);
        }
      }
    );
    mr(this, ve, (t.hydrate ? ma : wi)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: l,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((a = t == null ? void 0 : t.props) != null && a.$$host) || t.sync === !1) && C(), mr(this, De, l.$$events);
    for (const s of Object.keys(ae(this, ve)))
      s === "$set" || s === "$destroy" || s === "$on" || Zt(this, s, {
        get() {
          return ae(this, ve)[s];
        },
        /** @param {any} value */
        set(f) {
          ae(this, ve)[s] = f;
        },
        enumerable: !0
      });
    ae(this, ve).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(l, s);
    }, ae(this, ve).$destroy = () => {
      pa(ae(this, ve));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    ae(this, ve).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    ae(this, De)[t] = ae(this, De)[t] || [];
    const i = (...l) => r.call(this, ...l);
    return ae(this, De)[t].push(i), () => {
      ae(this, De)[t] = ae(this, De)[t].filter(
        /** @param {any} fn */
        (l) => l !== i
      );
    };
  }
  $destroy() {
    ae(this, ve).$destroy();
  }
}
De = new WeakMap(), ve = new WeakMap();
let yi;
typeof HTMLElement == "function" && (yi = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, i) {
    super();
    /** The Svelte component constructor */
    we(this, "$$ctor");
    /** Slots */
    we(this, "$$s");
    /** @type {any} The Svelte component instance */
    we(this, "$$c");
    /** Whether or not the custom element is connected */
    we(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    we(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    we(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    we(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    we(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    we(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    we(this, "$$me");
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
        return (a) => {
          const s = document.createElement("slot");
          l !== "default" && (s.name = l), j(a, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, i = Da(this);
      for (const l of this.$$s)
        l in i && (l === "default" && !this.$$d.children ? (this.$$d.children = t(l), r.default = !0) : r[l] = t(l));
      for (const l of this.attributes) {
        const a = this.$$g_p(l.name);
        a in this.$$d || (this.$$d[a] = Bt(a, l.value, this.$$p_d, "toProp"));
      }
      for (const l in this.$$p_d)
        !(l in this.$$d) && this[l] !== void 0 && (this.$$d[l] = this[l], delete this[l]);
      this.$$c = Sa({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = oa(() => {
        Dr(() => {
          var l;
          this.$$r = !0;
          for (const a of Gt(this.$$c)) {
            if (!((l = this.$$p_d[a]) != null && l.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const s = Bt(
              a,
              this.$$d[a],
              this.$$p_d,
              "toAttribute"
            );
            s == null ? this.removeAttribute(this.$$p_d[a].attribute || a) : this.setAttribute(this.$$p_d[a].attribute || a, s);
          }
          this.$$r = !1;
        });
      });
      for (const l in this.$$l)
        for (const a of this.$$l[l]) {
          const s = this.$$c.$on(l, a);
          this.$$l_u.set(a, s);
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Bt(t, i, this.$$p_d, "toProp"), (l = this.$$c) == null || l.$set({ [t]: this.$$d[t] }));
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
    return Gt(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function Bt(e, t, r, i) {
  var a;
  const l = (a = r[e]) == null ? void 0 : a.type;
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
function Da(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function La(e, t, r, i, l, a) {
  let s = class extends yi {
    constructor() {
      super(e, r, l), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Gt(t).map(
        (f) => (t[f].attribute || f).toLowerCase()
      );
    }
  };
  return Gt(t).forEach((f) => {
    Zt(s.prototype, f, {
      get() {
        return this.$$c && f in this.$$c ? this.$$c[f] : this.$$d[f];
      },
      set(c) {
        var v;
        c = Bt(f, c, t), this.$$d[f] = c;
        var d = this.$$c;
        if (d) {
          var w = (v = tt(d, f)) == null ? void 0 : v.get;
          w ? d[f] = c : d.$set({ [f]: c });
        }
      }
    });
  }), i.forEach((f) => {
    Zt(s.prototype, f, {
      get() {
        var c;
        return (c = this.$$c) == null ? void 0 : c[f];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
const xi = new TextEncoder();
function Pa(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function Oa(e, t = "SHA-256", r = 1e5) {
  const i = Date.now().toString(16);
  e || (e = Math.round(Math.random() * r));
  const l = await Ei(i, e, t);
  return {
    algorithm: t,
    challenge: l,
    salt: i,
    signature: ""
  };
}
async function Ei(e, t, r) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return Pa(
    await crypto.subtle.digest(
      r.toUpperCase(),
      xi.encode(e + t)
    )
  );
}
function Fa(e, t, r = "SHA-256", i = 1e6, l = 0) {
  const a = new AbortController(), s = Date.now();
  return {
    promise: (async () => {
      for (let c = l; c <= i; c += 1) {
        if (a.signal.aborted)
          return null;
        if (await Ei(t, c, r) === e)
          return {
            number: c,
            took: Date.now() - s
          };
      }
      return null;
    })(),
    controller: a
  };
}
function Ln() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function Va(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let i = 0; i < t.length; i++)
    r[i] = t.charCodeAt(i);
  return r;
}
function Ma(e, t = 12) {
  const r = new Uint8Array(t);
  for (let i = 0; i < t; i++)
    r[i] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function ja(e, t = "", r = 1e6, i = 0) {
  const l = "AES-GCM", a = new AbortController(), s = Date.now(), f = async () => {
    for (let w = i; w <= r; w += 1) {
      if (a.signal.aborted || !c || !d)
        return null;
      try {
        const v = await crypto.subtle.decrypt(
          {
            name: l,
            iv: Ma(w)
          },
          c,
          d
        );
        if (v)
          return {
            clearText: new TextDecoder().decode(v),
            took: Date.now() - s
          };
      } catch {
      }
    }
    return null;
  };
  let c = null, d = null;
  try {
    d = Va(e);
    const w = await crypto.subtle.digest(
      "SHA-256",
      xi.encode(t)
    );
    c = await crypto.subtle.importKey(
      "raw",
      w,
      l,
      !1,
      ["decrypt"]
    );
  } catch {
    return {
      promise: Promise.reject(),
      controller: a
    };
  }
  return {
    promise: f(),
    controller: a
  };
}
var x = /* @__PURE__ */ ((e) => (e.CODE = "code", e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(x || {}), X = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.LOADING = "loading", e.PLAYING = "playing", e.PAUSED = "paused", e.READY = "ready", e))(X || {});
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  register: (e, t) => {
    globalThis.altchaI18n[e] = t;
  }
};
const Ua = {
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
globalThis.altchaI18n.register("en", Ua);
const br = (e, t) => {
  let r = /* @__PURE__ */ Hl(() => Il(t == null ? void 0 : t(), 24));
  var i = Ya();
  Se(() => {
    S(i, "width", o(r)), S(i, "height", o(r));
  }), j(e, i);
};
function qa(e, t) {
  e.code === "Space" && (e.preventDefault(), e.stopImmediatePropagation(), t());
}
function Ba(e, t) {
  e.preventDefault(), t();
}
function Ha(e, t, r, i, l, a, s, f) {
  var c;
  [
    x.UNVERIFIED,
    x.ERROR,
    x.EXPIRED,
    x.CODE
  ].includes(o(t)) ? r() !== !1 && ((c = o(i)) == null ? void 0 : c.reportValidity()) === !1 ? b(l, !1) : a() ? s() : f() : b(l, !0);
}
var Ya = /* @__PURE__ */ ar('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="svelte-74x4nw"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25" class="svelte-74x4nw"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor" class="altcha-spinner svelte-74x4nw"></path></svg>'), Ga = /* @__PURE__ */ be('<input type="hidden" class="svelte-74x4nw">'), Za = /* @__PURE__ */ be('<div class="svelte-74x4nw"><a target="_blank" class="altcha-logo svelte-74x4nw" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-74x4nw"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor" class="svelte-74x4nw"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor" class="svelte-74x4nw"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor" class="svelte-74x4nw"></path></svg></a></div>'), Wa = /* @__PURE__ */ ar('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-74x4nw"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z" class="svelte-74x4nw"></path></svg>'), za = /* @__PURE__ */ ar('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-74x4nw"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z" class="svelte-74x4nw"></path></svg>'), Ja = /* @__PURE__ */ ar('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-74x4nw"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z" class="svelte-74x4nw"></path></svg>'), Ka = /* @__PURE__ */ be('<button type="button" class="altcha-code-challenge-audio svelte-74x4nw"><!></button>'), Xa = /* @__PURE__ */ be('<audio hidden autoplay class="svelte-74x4nw"><source class="svelte-74x4nw"></audio>'), Qa = /* @__PURE__ */ be('<div class="altcha-code-challenge svelte-74x4nw" role="dialog"><div class="altcha-code-challenge-arrow svelte-74x4nw"></div> <form data-code-challenge-form="1" class="svelte-74x4nw"><img class="altcha-code-challenge-image svelte-74x4nw" alt=""> <input type="text" autocomplete="off" name="code" class="altcha-code-challenge-input svelte-74x4nw" required> <div class="altcha-code-challenge-buttons svelte-74x4nw"><div class="altcha-code-challenge-buttons-left svelte-74x4nw"><!> <button type="button" class="altcha-code-challenge-reload svelte-74x4nw"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-74x4nw"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z" class="svelte-74x4nw"></path></svg></button></div> <button type="submit" class="altcha-code-challenge-verify svelte-74x4nw"><!> </button></div> <!></form></div>'), eo = /* @__PURE__ */ be('<div class="svelte-74x4nw"><!></div>'), to = /* @__PURE__ */ be('<div class="svelte-74x4nw"><!></div>'), ro = /* @__PURE__ */ be('<div class="altcha-error svelte-74x4nw"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="svelte-74x4nw"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" class="svelte-74x4nw"></path></svg> <!></div>'), no = /* @__PURE__ */ be('<div class="altcha-footer svelte-74x4nw"><div class="svelte-74x4nw"><!></div></div>'), io = /* @__PURE__ */ be('<div class="altcha-anchor-arrow svelte-74x4nw"></div>'), lo = /* @__PURE__ */ be('<!> <div class="altcha svelte-74x4nw"><div class="altcha-main svelte-74x4nw"><div><!> <input type="checkbox" class="svelte-74x4nw"></div> <label class="altcha-label svelte-74x4nw"><!></label> <!> <!> <!></div> <!> <!> <!></div>', 1);
const ao = {
  hash: "svelte-74x4nw",
  code: `.altcha.svelte-74x4nw {background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);position:relative;}.altcha.svelte-74x4nw:focus-within {border-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating].svelte-74x4nw {background:var(--altcha-color-base, white);display:none;filter:drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2));left:-100%;position:fixed;top:-100%;width:var(--altcha-max-width, 260px);z-index:999999;}.altcha[data-floating=top].svelte-74x4nw .altcha-anchor-arrow:where(.svelte-74x4nw) {border-bottom-color:transparent;border-top-color:var(--altcha-color-border, #a0a0a0);bottom:-12px;top:auto;}.altcha[data-floating=bottom].svelte-74x4nw:focus-within::after {border-bottom-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating=top].svelte-74x4nw:focus-within::after {border-top-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating].svelte-74x4nw:not([data-state=unverified]) {display:block;}.altcha-anchor-arrow.svelte-74x4nw {border:6px solid transparent;border-bottom-color:var(--altcha-color-border, #a0a0a0);content:"";height:0;left:12px;position:absolute;top:-12px;width:0;}.altcha-main.svelte-74x4nw {align-items:center;display:flex;gap:0.4rem;padding:0.7rem;position:relative;}.altcha-code-challenge.svelte-74x4nw {background:var(--altcha-color-base, white);border:1px solid var(--altcha-color-border-focus, currentColor);border-radius:var(--altcha-border-radius, 3px);filter:drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2));padding:0.5rem;position:absolute;top:2.5rem;z-index:9999999;}.altcha-code-challenge.svelte-74x4nw > form:where(.svelte-74x4nw) {display:flex;flex-direction:column;gap:0.5rem;}.altcha-code-challenge-input.svelte-74x4nw {border:1px solid currentColor;border-radius:3px;box-sizing:border-box;outline:none;font-size:16px;padding:0.35rem;width:220px;}.altcha-code-challenge-input.svelte-74x4nw:focus {outline:2px solid color-mix(in srgb, var(--altcha-color-active, #1D1DC9) 20%, transparent);}.altcha-code-challenge-input.svelte-74x4nw:disabled {opacity:0.7;}.altcha-code-challenge-image.svelte-74x4nw {background-color:white;border:1px solid currentColor;border-radius:3px;box-sizing:border-box;object-fit:contain;height:50px;width:220px;}.altcha-code-challenge-audio.svelte-74x4nw,
.altcha-code-challenge-reload.svelte-74x4nw {background:color-mix(in srgb, var(--altcha-color-text, currentColor) 10%, transparent);border:0;border-radius:3px;color:var(--altcha-color-text, currentColor);cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0.35rem;}.altcha-code-challenge-audio.svelte-74x4nw:disabled,
.altcha-code-challenge-reload.svelte-74x4nw:disabled {opacity:0.7;pointer-events:none;}.altcha-code-challenge-audio.svelte-74x4nw > :where(.svelte-74x4nw),
.altcha-code-challenge-reload.svelte-74x4nw > :where(.svelte-74x4nw) {height:20px;width:20px;}.altcha-code-challenge-buttons.svelte-74x4nw {display:flex;justify-content:space-between;}.altcha-code-challenge-buttons-left.svelte-74x4nw {display:flex;gap:0.25rem;}.altcha-code-challenge-verify.svelte-74x4nw {align-items:center;background:var(--altcha-color-active, #1D1DC9);border:0;border-radius:3px;color:white;cursor:pointer;display:flex;gap:0.5rem;font-size:100%;padding:0.35rem 1rem;}.altcha-code-challenge-verify.svelte-74x4nw:disabled {opacity:0.7;pointer-events:none;}.altcha-code-challenge-arrow.svelte-74x4nw {border:6px solid transparent;border-bottom-color:var(--altcha-color-border, currentColor);content:"";height:0;left:0.15rem;position:absolute;top:-12px;width:0;}.altcha[data-floating=top].svelte-74x4nw .altcha-code-challenge:where(.svelte-74x4nw) {top:-150px;}.altcha[data-floating=top].svelte-74x4nw .altcha-code-challenge-arrow:where(.svelte-74x4nw) {border-bottom-color:transparent;border-top-color:var(--altcha-color-border, currentColor);bottom:-12px;top:auto;}.altcha-label.svelte-74x4nw {cursor:pointer;flex-grow:1;}.altcha-logo.svelte-74x4nw {color:currentColor;opacity:0.7;}.altcha-logo.svelte-74x4nw:hover {opacity:1;}.altcha-error.svelte-74x4nw {color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem;}.altcha-footer.svelte-74x4nw {align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.7;justify-content:end;padding:0.2rem 0.7rem;}.altcha-footer.svelte-74x4nw:hover {opacity:1;}.altcha-footer.svelte-74x4nw a {color:currentColor;}.altcha-checkbox.svelte-74x4nw {display:flex;align-items:center;height:24px;width:24px;}.altcha-checkbox.svelte-74x4nw input:where(.svelte-74x4nw) {width:18px;height:18px;margin:0;}.altcha-checkbox-verifying.svelte-74x4nw input:where(.svelte-74x4nw) {appearance:none;pointer-events:none;height:0;width:0;}.altcha-spinner.svelte-74x4nw {
  animation: svelte-74x4nw-altcha-spinner 0.75s infinite linear;transform-origin:center;}

@keyframes svelte-74x4nw-altcha-spinner {
  100% {
    transform: rotate(360deg);
  }
}`
};
function oo(e, t) {
  var mn, pn;
  ci(t, !0), ya(e, ao);
  let r = I(t, "auto", 7, void 0), i = I(t, "blockspam", 7, void 0), l = I(t, "challengeurl", 7, void 0), a = I(t, "challengejson", 7, void 0), s = I(t, "credentials", 7, void 0), f = I(t, "customfetch", 7, void 0), c = I(t, "debug", 7, !1), d = I(t, "delay", 7, 0), w = I(t, "disableautofocus", 7, !1), v = I(t, "expire", 7, void 0), h = I(t, "floating", 7, void 0), p = I(t, "floatinganchor", 7, void 0), A = I(t, "floatingoffset", 7, void 0), D = I(t, "floatingpersist", 7, !1), F = I(t, "hidefooter", 7, !1), ue = I(t, "hidelogo", 7, !1), ie = I(t, "id", 7, void 0), J = I(t, "language", 7, void 0), fe = I(t, "name", 7, "altcha"), ye = I(t, "maxnumber", 7, 1e6), U = I(t, "mockerror", 7, !1), Q = I(t, "obfuscated", 7, void 0), Ve = I(t, "plugins", 7, void 0), pt = I(t, "refetchonexpire", 7, !0), Je = I(t, "sentinel", 7, void 0), xe = I(t, "spamfilter", 7, !1), lt = I(t, "strings", 7, void 0), he = I(t, "test", 7, !1), ee = I(t, "verifyurl", 7, void 0), at = I(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), bt = I(t, "workerurl", 7, void 0);
  const Or = ["SHA-256", "SHA-384", "SHA-512"], Ci = "https://altcha.org/", Me = (n, u) => {
    t.$$host.dispatchEvent(new CustomEvent(n, { detail: u }));
  }, Fr = (pn = (mn = document.documentElement.lang) == null ? void 0 : mn.split("-")) == null ? void 0 : pn[0], or = /* @__PURE__ */ He(() => {
    var n;
    return l() && new URL(l(), location.origin).host.endsWith(".altcha.org") && !!((n = l()) != null && n.includes("apiKey=ckey_"));
  }), sr = /* @__PURE__ */ He(() => a() ? Xr(a()) : void 0), Ai = /* @__PURE__ */ He(() => lt() ? Xr(lt()) : {}), L = /* @__PURE__ */ He(() => ({
    ...Ur(),
    ...o(Ai)
  })), Vr = /* @__PURE__ */ He(() => `${ie() || fe()}_checkbox_${Math.round(Math.random() * 1e8)}`);
  let yt = oe(!1), B = oe(null), R = oe(V(x.UNVERIFIED)), te = oe(void 0), xt = oe(null), je = oe(null), ur = oe(null), ot = oe(null), M = oe(null), Ke = oe(null), Ee = null, H = oe(null), Xe = oe(!1), Ue = [], fr = oe(!1), $e = oe(null);
  xr(() => {
    Vi(o(Ke));
  }), xr(() => {
    Mi(o(R));
  }), $a(() => {
    ki(), o(M) && (o(M).removeEventListener("submit", Zr), o(M).removeEventListener("reset", Wr), o(M).removeEventListener("focusin", Gr), b(M, null)), Ee && (clearTimeout(Ee), Ee = null), document.removeEventListener("click", Hr), document.removeEventListener("scroll", Yr), window.removeEventListener("resize", Kr);
  }), bi(() => {
    var n;
    $("mounted", "2.0.0-beta.8"), $("workers", at()), Ni(), $("plugins", Ue.length ? Ue.map((u) => u.constructor.pluginName).join(", ") : "none"), he() && $("using test mode"), v() && cr(v()), r() !== void 0 && $("auto", r()), h() !== void 0 && en(h()), b(M, V((n = o(te)) == null ? void 0 : n.closest("form"))), o(M) && (o(M).addEventListener("submit", Zr, { capture: !0 }), o(M).addEventListener("reset", Wr), (r() === "onfocus" || D() === "focus") && o(M).addEventListener("focusin", Gr)), r() === "onload" && (Q() ? Et() : Ne()), o(or) && (F() || ue()) && $("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      Me("load");
    });
  });
  function Lt(n, u) {
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
  function ki() {
    for (const n of Ue)
      n.destroy();
  }
  function Mr() {
    l() && pt() && o(R) === x.VERIFIED ? Ne() : st(x.EXPIRED, o(L).expired);
  }
  async function Ii() {
    var n;
    if (U())
      throw $("mocking error"), new Error("Mocked error.");
    if (o(sr))
      return $("using provided json data"), o(sr);
    if (he())
      return $("generating test challenge", { test: he() }), Oa(typeof he() != "boolean" ? +he() : void 0);
    {
      if (!l() && o(M)) {
        const E = o(M).getAttribute("action");
        E != null && E.includes("/form/") && l(E + "/altcha");
      }
      if (!l())
        throw new Error("Attribute challengeurl not set.");
      $("fetching challenge from", l());
      const u = {
        credentials: typeof s() == "boolean" ? "include" : s(),
        headers: xe() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      }, g = await jr()(l(), u);
      if (!g || !(g instanceof Response))
        throw new Error("Custom fetch function did not return a response.");
      if (g.status !== 200)
        throw new Error(`Server responded with ${g.status}.`);
      const m = g.headers.get("X-Altcha-Config"), _ = await g.json(), k = new URLSearchParams((n = _.salt.split("?")) == null ? void 0 : n[1]), y = k.get("expires") || k.get("expire");
      if (y) {
        const E = new Date(+y * 1e3), q = isNaN(E.getTime()) ? 0 : E.getTime() - Date.now();
        q > 0 && cr(q);
      }
      if (m)
        try {
          const E = JSON.parse(m);
          E && typeof E == "object" && (E.verifyurl && !E.verifyurl.startsWith("javascript:") && (E.verifyurl = Br(E.verifyurl)), nn(E));
        } catch (E) {
          $("unable to configure from X-Altcha-Config", E);
        }
      return _;
    }
  }
  function Ri(n) {
    var g, m;
    const u = (g = o(M)) == null ? void 0 : g.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((m = u == null ? void 0 : u.value) == null ? void 0 : m.slice(u.value.indexOf("@"))) || void 0;
  }
  function jr() {
    let n = fetch;
    if (f())
      if ($("using customfetch"), typeof f() == "string") {
        if (n = globalThis[f()] || null, !n)
          throw new Error(`Custom fetch function not found: ${f()}`);
      } else
        n = f();
    return n;
  }
  function Ur(n = [
    J() || "",
    document.documentElement.lang || "",
    ...navigator.languages
  ]) {
    const u = Object.keys(globalThis.altchaI18n).map((m) => m.toLowerCase()), g = n.reduce(
      (m, _) => (_ = _.toLowerCase(), m || (globalThis.altchaI18n[_] ? _ : null) || u.find((k) => _.split("-")[0] === k.split("-")[0]) || null),
      null
    );
    return globalThis.altchaI18n[g || "en"];
  }
  function $i() {
    return xe() === "ipAddress" ? {
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
    } : typeof xe() == "object" ? xe() : {
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
  function qr(n) {
    var g;
    return [
      ...((g = o(M)) == null ? void 0 : g.querySelectorAll(n != null && n.length ? n.map((m) => `input[name="${m}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (m, _) => {
        const k = _.name, y = _.value;
        return k && y && (m[k] = /\n/.test(y) ? y.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : y), m;
      },
      {}
    );
  }
  function Br(n, u) {
    const g = new URL(l() || location.origin), m = new URL(n, g);
    if (m.search || (m.search = g.search), u)
      for (const _ in u)
        u[_] !== void 0 && u[_] !== null && m.searchParams.set(_, u[_]);
    return m.toString();
  }
  function Ni() {
    const n = Ve() !== void 0 ? Ve().split(",") : void 0;
    for (const u of globalThis.altchaPlugins)
      (!n || n.includes(u.pluginName)) && Ue.push(new u({
        el: o(te),
        clarify: Et,
        dispatch: Me,
        getConfiguration: ln,
        getFloatingAnchor: an,
        getState: on,
        log: $,
        reset: st,
        solve: rn,
        setState: Ce,
        setFloatingAnchor: un,
        verify: Ne
      }));
  }
  function $(...n) {
    (c() || n.some((u) => u instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${fe()}]`, ...n);
  }
  function Si() {
    b(H, V(X.PAUSED));
  }
  function Ti(n) {
    b(H, V(X.ERROR));
  }
  function Di() {
    b(H, V(X.READY));
  }
  function Li() {
    b(H, V(X.LOADING));
  }
  function Pi() {
    b(H, V(X.PLAYING));
  }
  function Oi() {
    b(H, V(X.PAUSED));
  }
  function Fi(n) {
    var u;
    if (n.preventDefault(), n.stopPropagation(), o(B)) {
      const g = new FormData(n.target), m = String(g.get("code"));
      if ((u = ee()) != null && u.startsWith("javascript:")) {
        const _ = ee().replace(/^javascript:/, "");
        if ($(`calling ${_} function instead of verifyurl`), !(_ in globalThis))
          throw new Error(`Global function "${_}" is undefined.`);
        return globalThis[_]({
          challenge: o(B).challenge,
          code: m,
          solution: o(B).solution
        });
      }
      b(Xe, !0), Qr(Lt(o(B).challenge, o(B).solution), m).then(({ reason: _, verified: k }) => {
        k ? (b(B, null), Ce(x.VERIFIED), $("verified"), pr().then(() => {
          var y;
          (y = o(ur)) == null || y.focus(), Me("verified", { payload: o($e) });
        })) : (st(), b(Ke, V(_ || "Verification failed")));
      }).catch((_) => {
        b(B, null), Ce(x.ERROR, _), $("sentinel verification failed:", _);
      }).finally(() => {
        b(Xe, !1);
      });
    }
  }
  function Hr(n) {
    var g;
    const u = n.target;
    h() && u && !o(te).contains(u) && (o(R) === x.VERIFIED && D() === !1 || o(R) === x.VERIFIED && D() === "focus" && !((g = o(M)) != null && g.matches(":focus-within")) || r() === "off" && o(R) === x.UNVERIFIED) && sn();
  }
  function Yr() {
    h() && o(R) !== x.UNVERIFIED && Ct();
  }
  function Vi(n) {
    for (const u of Ue)
      typeof u.onErrorChange == "function" && u.onErrorChange(o(Ke));
  }
  function Gr(n) {
    o(R) === x.UNVERIFIED ? Ne() : h() && D() === "focus" && o(R) === x.VERIFIED && dr();
  }
  function Zr(n) {
    const u = n.target, g = n.submitter;
    u != null && u.hasAttribute("data-code-challenge-form") || (o(M) && r() === "onsubmit" ? o(R) === x.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), Ne().then(() => {
      var _;
      g && ["INPUT", "BUTTON"].includes(g.tagName) && g.getAttribute("name") ? g.click() : (_ = o(M)) == null || _.requestSubmit();
    })) : o(R) !== x.VERIFIED && (n.preventDefault(), n.stopPropagation(), o(R) === x.VERIFYING && zr()) : o(M) && h() && r() === "off" && o(R) === x.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), dr()));
  }
  function Wr() {
    st();
  }
  function zr() {
    o(R) === x.VERIFYING && o(L).waitAlert && alert(o(L).waitAlert);
  }
  function Jr() {
    o(je) ? o(je).paused ? (o(je).currentTime = 0, o(je).play()) : o(je).pause() : (b(fr, !0), requestAnimationFrame(() => {
      var n;
      (n = o(je)) == null || n.play();
    }));
  }
  function Mi(n) {
    for (const u of Ue)
      typeof u.onStateChange == "function" && u.onStateChange(o(R));
    h() && o(R) !== x.UNVERIFIED && requestAnimationFrame(() => {
      Ct();
    }), b(yt, o(R) === x.VERIFIED);
  }
  function Kr() {
    h() && Ct();
  }
  function Xr(n) {
    return JSON.parse(n);
  }
  async function ji(n) {
    if (!ee())
      throw new Error("Attribute verifyurl not set.");
    $("requesting server verification from", ee());
    const u = { payload: n };
    if (xe() !== !1) {
      const {
        blockedCountries: _,
        classifier: k,
        disableRules: y,
        email: E,
        expectedLanguages: q,
        expectedCountries: K,
        fields: le,
        ipAddress: qe,
        text: vr,
        timeZone: Ft
      } = $i();
      u.blockedCountries = _, u.classifier = k, u.disableRules = y, u.email = E === !1 ? void 0 : Ri(E), u.expectedCountries = K, u.expectedLanguages = q || (Fr ? [Fr] : void 0), u.fields = le === !1 ? void 0 : qr(le), u.ipAddress = qe === !1 ? void 0 : qe || "auto", u.text = vr, u.timeZone = Ft === !1 ? void 0 : Ft || Ln();
    }
    const g = await jr()(ee(), {
      body: JSON.stringify(u),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (!g || !(g instanceof Response))
      throw new Error("Custom fetch function did not return a response.");
    if (g.status !== 200)
      throw new Error(`Server responded with ${g.status}.`);
    const m = await g.json();
    if (m != null && m.payload && b($e, V(m.payload)), Me("serververification", m), i() && m.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  async function Qr(n, u) {
    if (!ee())
      throw new Error("Attribute verifyurl not set.");
    $("requesting sentinel verification from", ee());
    const g = { code: u, payload: n };
    Je() && (g.fields = Je().fields ? qr() : void 0, g.timeZone = Je().timeZone ? Ln() : void 0);
    const m = await fetch(ee(), {
      body: JSON.stringify(g),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (m.status !== 200)
      throw new Error(`Server responded with ${m.status}.`);
    const _ = await m.json();
    return _ != null && _.payload && b($e, V(_.payload)), Me("sentinelverification", _), _;
  }
  function cr(n) {
    $("expire", n), Ee && (clearTimeout(Ee), Ee = null), n < 1 ? Mr() : Ee = setTimeout(Mr, n);
  }
  function en(n) {
    $("floating", n), h() !== n && (o(te).style.left = "", o(te).style.top = ""), h(n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : h()), h() ? (r() || r("onsubmit"), document.addEventListener("scroll", Yr), document.addEventListener("click", Hr), window.addEventListener("resize", Kr)) : r() === "onsubmit" && r(void 0);
  }
  function tn(n) {
    if (!n.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (n.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!Or.includes(n.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${Or.join(", ")}`);
    if (!n.challenge || n.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!n.salt || n.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function rn(n) {
    let u = null;
    if ("Worker" in window) {
      try {
        u = await Ui(n, n.maxNumber || n.maxnumber || ye());
      } catch (g) {
        $(g);
      }
      if ((u == null ? void 0 : u.number) !== void 0 || "obfuscated" in n)
        return { data: n, solution: u };
    }
    if ("obfuscated" in n) {
      const g = await ja(n.obfuscated, n.key, n.maxNumber || n.maxnumber);
      return { data: n, solution: await g.promise };
    }
    return {
      data: n,
      solution: await Fa(n.challenge, n.salt, n.algorithm, n.maxNumber || n.maxnumber || ye()).promise
    };
  }
  async function Ui(n, u = typeof he() == "number" ? he() : n.maxNumber || n.maxnumber || ye(), g = Math.ceil(at())) {
    const m = [];
    g = Math.min(16, u, Math.max(1, g));
    for (let y = 0; y < g; y++)
      m.push(altchaCreateWorker(bt()));
    const _ = Math.ceil(u / g), k = await Promise.all(m.map((y, E) => {
      const q = E * _;
      return new Promise((K) => {
        y.addEventListener("message", (le) => {
          if (le.data)
            for (const qe of m)
              qe !== y && qe.postMessage({ type: "abort" });
          K(le.data);
        }), y.postMessage({
          payload: n,
          max: q + _,
          start: q,
          type: "work"
        });
      });
    }));
    for (const y of m)
      y.terminate();
    return k.find((y) => !!y) || null;
  }
  async function Et() {
    if (!Q()) {
      Ce(x.ERROR);
      return;
    }
    const n = Ue.find((u) => u.constructor.pluginName === "obfuscation");
    if (!n || !("clarify" in n)) {
      Ce(x.ERROR), $("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in n && typeof n.clarify == "function")
      return n.clarify();
  }
  function nn(n) {
    n.obfuscated !== void 0 && Q(n.obfuscated), n.auto !== void 0 && (r(n.auto), r() === "onload" && (Q() ? Et() : Ne())), n.blockspam !== void 0 && i(!!n.blockspam), n.customfetch !== void 0 && f(n.customfetch), n.floatinganchor !== void 0 && p(n.floatinganchor), n.delay !== void 0 && d(n.delay), n.floatingoffset !== void 0 && A(n.floatingoffset), n.floating !== void 0 && en(n.floating), n.expire !== void 0 && (cr(n.expire), v(n.expire)), n.challenge && (a(typeof n.challenge == "string" ? n.challenge : JSON.stringify(n.challenge)), tn(o(sr))), n.challengeurl !== void 0 && l(n.challengeurl), n.debug !== void 0 && c(!!n.debug), n.hidefooter !== void 0 && F(!!n.hidefooter), n.hidelogo !== void 0 && ue(!!n.hidelogo), n.language !== void 0 && lt(Ur([n.language])), n.maxnumber !== void 0 && ye(+n.maxnumber), n.mockerror !== void 0 && U(!!n.mockerror), n.name !== void 0 && fe(n.name), n.refetchonexpire !== void 0 && pt(!!n.refetchonexpire), n.sentinel !== void 0 && typeof n.sentinel == "object" && Je(n.sentinel), n.spamfilter !== void 0 && xe(typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && lt(typeof n.strings == "string" ? n.strings : JSON.stringify(n.strings)), n.test !== void 0 && he(typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && ee(n.verifyurl), n.workers !== void 0 && at(+n.workers), n.workerurl !== void 0 && bt(n.workerurl);
  }
  function ln() {
    return {
      auto: r(),
      blockspam: i(),
      challengeurl: l(),
      debug: c(),
      delay: d(),
      expire: v(),
      floating: h(),
      floatinganchor: p(),
      floatingoffset: A(),
      hidefooter: F(),
      hidelogo: ue(),
      name: fe(),
      maxnumber: ye(),
      mockerror: U(),
      obfuscated: Q(),
      refetchonexpire: pt(),
      spamfilter: xe(),
      strings: o(L),
      test: he(),
      verifyurl: ee(),
      workers: at(),
      workerurl: bt()
    };
  }
  function an() {
    return o(ot);
  }
  function qi(n) {
    return Ue.find((u) => u.constructor.pluginName === n);
  }
  function on() {
    return o(R);
  }
  function sn() {
    o(te).style.display = "none";
  }
  function Ct(n = 20) {
    var u;
    if (o(te))
      if (o(ot) || b(ot, V((p() ? document.querySelector(p()) : (u = o(M)) == null ? void 0 : u.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || o(M))), o(ot)) {
        const g = parseInt(A(), 10) || 12, m = o(ot).getBoundingClientRect(), _ = o(te).getBoundingClientRect(), k = document.documentElement.clientHeight, y = document.documentElement.clientWidth, E = h() === "auto" ? m.bottom + _.height + g + n > k : h() === "top", q = Math.max(n, Math.min(y - n - _.width, m.left + m.width / 2 - _.width / 2));
        if (E ? o(te).style.top = `${m.top - (_.height + g)}px` : o(te).style.top = `${m.bottom + g}px`, o(te).style.left = `${q}px`, o(te).setAttribute("data-floating", E ? "top" : "bottom"), o(xt)) {
          const K = o(xt).getBoundingClientRect();
          o(xt).style.left = m.left - q + m.width / 2 - K.width / 2 + "px";
        }
      } else
        $("unable to find floating anchor element");
  }
  function st(n = x.UNVERIFIED, u = null) {
    Ee && (clearTimeout(Ee), Ee = null), b(yt, !1), b($e, null), b(B, null), b(fr, !1), b(H, null), Ce(n, u);
  }
  function un(n) {
    b(ot, V(n));
  }
  function Ce(n, u = null) {
    b(R, V(n)), b(Ke, V(u)), Me("statechange", {
      payload: o($e),
      state: o(R)
    });
  }
  function dr() {
    o(te).style.display = "block", h() && Ct();
  }
  async function Ne() {
    return st(x.VERIFYING), await new Promise((n) => setTimeout(n, d() || 0)), Ii().then((n) => (tn(n), $("challenge", n), rn(n))).then(({ data: n, solution: u }) => {
      var g;
      if ($("solution", u), !u || n && "challenge" in n && !("clearText" in u))
        if ((u == null ? void 0 : u.number) !== void 0 && "challenge" in n)
          if (ee() && "codeChallenge" in n)
            ((g = document.activeElement) == null ? void 0 : g.tagName) === "INPUT" && w() === !1 && document.activeElement.blur(), b(B, V({ challenge: n, solution: u }));
          else {
            if (ee() && Je() !== void 0)
              return Qr(Lt(n, u));
            if (ee())
              return ji(Lt(n, u));
            b($e, V(Lt(n, u))), $("payload", o($e));
          }
        else
          throw $("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      o(B) ? (Ce(x.CODE), pr().then(() => {
        Me("code", { codeChallenge: o(B) });
      })) : (Ce(x.VERIFIED), $("verified"), pr().then(() => {
        Me("verified", { payload: o($e) });
      }));
    }).catch((n) => {
      $(n), Ce(x.ERROR, n.message);
    });
  }
  var fn = lo(), cn = It(fn);
  ba(cn, t, "default", {});
  var At = W(cn, 2), hr = Z(At), Pt = Z(hr);
  let dn;
  var hn = Z(Pt);
  {
    var Bi = (n) => {
      br(n);
    };
    z(hn, (n) => {
      o(R) === x.VERIFYING && n(Bi);
    });
  }
  var Qe = W(hn, 2);
  Sn(Qe), Qe.__change = [
    Ha,
    R,
    xe,
    M,
    yt,
    Q,
    Et,
    Ne
  ], jt(Qe, (n) => b(ur, n), () => o(ur)), G(Pt);
  var Ot = W(Pt, 2), Hi = Z(Ot);
  {
    var Yi = (n) => {
      var u = Mt(), g = It(u);
      et(g, () => o(L).verified), j(n, u);
    }, Gi = (n, u) => {
      {
        var g = (_) => {
          var k = Mt(), y = It(k);
          et(y, () => o(L).verifying), j(_, k);
        }, m = (_, k) => {
          {
            var y = (q) => {
              var K = Mt(), le = It(K);
              et(le, () => o(L).verificationRequired), j(q, K);
            }, E = (q) => {
              var K = Mt(), le = It(K);
              et(le, () => o(L).label), j(q, K);
            };
            z(
              _,
              (q) => {
                o(R) === x.CODE ? q(y) : q(E, !1);
              },
              k
            );
          }
        };
        z(
          n,
          (_) => {
            o(R) === x.VERIFYING ? _(g) : _(m, !1);
          },
          u
        );
      }
    };
    z(Hi, (n) => {
      o(R) === x.VERIFIED ? n(Yi) : n(Gi, !1);
    });
  }
  G(Ot);
  var vn = W(Ot, 2);
  {
    var Zi = (n) => {
      var u = Ga();
      Sn(u), Se(() => {
        S(u, "name", fe()), ka(u, o($e));
      }), j(n, u);
    };
    z(vn, (n) => {
      o(R) === x.VERIFIED && n(Zi);
    });
  }
  var gn = W(vn, 2);
  {
    var Wi = (n) => {
      var u = Za(), g = Z(u);
      S(g, "href", Ci), G(u), Se(() => S(g, "aria-label", o(L).ariaLinkLabel)), j(n, u);
    };
    z(gn, (n) => {
      (ue() !== !0 || o(or)) && n(Wi);
    });
  }
  var zi = W(gn, 2);
  {
    var Ji = (n) => {
      var u = Qa(), g = W(Z(u), 2), m = Z(g), _ = W(m, 2);
      ha(_, !w()), _.__keydown = [
        qa,
        Jr
      ];
      var k = W(_, 2), y = Z(k), E = Z(y);
      {
        var q = (_e) => {
          var Y = Ka();
          Y.__click = Jr;
          var Vt = Z(Y);
          {
            var kt = (ut) => {
              br(ut, () => 20);
            }, nl = (ut, il) => {
              {
                var ll = (ft) => {
                  var gr = Wa();
                  j(ft, gr);
                }, al = (ft, gr) => {
                  {
                    var ol = (ct) => {
                      var _r = za();
                      j(ct, _r);
                    }, sl = (ct) => {
                      var _r = Ja();
                      j(ct, _r);
                    };
                    z(
                      ft,
                      (ct) => {
                        o(H) === X.PLAYING ? ct(ol) : ct(sl, !1);
                      },
                      gr
                    );
                  }
                };
                z(
                  ut,
                  (ft) => {
                    o(H) === X.ERROR ? ft(ll) : ft(al, !1);
                  },
                  il
                );
              }
            };
            z(Vt, (ut) => {
              o(H) === X.LOADING ? ut(kt) : ut(nl, !1);
            });
          }
          G(Y), Se(() => {
            S(Y, "title", o(L).getAudioChallenge), Y.disabled = o(H) === X.LOADING || o(H) === X.ERROR || o(Xe), S(Y, "aria-label", o(H) === X.LOADING ? o(L).loading : o(L).getAudioChallenge);
          }), j(_e, Y);
        };
        z(E, (_e) => {
          o(B).challenge.codeChallenge.audio && _e(q);
        });
      }
      var K = W(E, 2);
      K.__click = [Ba, Ne], G(y);
      var le = W(y, 2), qe = Z(le);
      {
        var vr = (_e) => {
          br(_e, () => 16);
        };
        z(qe, (_e) => {
          o(Xe) && _e(vr);
        });
      }
      var Ft = W(qe);
      G(le), G(k);
      var tl = W(k, 2);
      {
        var rl = (_e) => {
          var Y = Xa(), Vt = Z(Y);
          G(Y), jt(Y, (kt) => b(je, kt), () => o(je)), Se((kt) => S(Vt, "src", kt), [
            () => Br(o(B).challenge.codeChallenge.audio, { language: J() })
          ]), Be("loadstart", Y, Li), Be("canplay", Y, Di), Be("pause", Y, Oi), Be("playing", Y, Pi), Be("ended", Y, Si), Be("error", Vt, Ti), j(_e, Y);
        };
        z(tl, (_e) => {
          o(B).challenge.codeChallenge.audio && o(fr) && _e(rl);
        });
      }
      G(g), G(u), Se(() => {
        S(u, "aria-label", o(L).verificationRequired), S(m, "src", o(B).challenge.codeChallenge.image), S(_, "minlength", o(B).challenge.codeChallenge.length || 1), S(_, "maxlength", o(B).challenge.codeChallenge.length), S(_, "placeholder", o(L).enterCode), S(_, "aria-label", o(H) === X.LOADING ? o(L).loading : o(H) === X.PLAYING ? "" : o(L).enterCodeAria), S(_, "aria-live", o(H) ? "assertive" : "polite"), S(_, "aria-busy", o(H) === X.LOADING), _.disabled = o(Xe), S(K, "aria-label", o(L).reload), S(K, "title", o(L).reload), K.disabled = o(Xe), le.disabled = o(Xe), S(le, "aria-label", o(L).verify), wa(Ft, ` ${o(L).verify ?? ""}`);
      }), Be("submit", g, Fi, !0), j(n, u);
    };
    z(zi, (n) => {
      var u;
      (u = o(B)) != null && u.challenge.codeChallenge && n(Ji);
    });
  }
  G(hr);
  var _n = W(hr, 2);
  {
    var Ki = (n) => {
      var u = ro(), g = W(Z(u), 2);
      {
        var m = (k) => {
          var y = eo(), E = Z(y);
          et(E, () => o(L).expired), G(y), Se(() => S(y, "title", o(Ke))), j(k, y);
        }, _ = (k) => {
          var y = to(), E = Z(y);
          et(E, () => o(L).error), G(y), Se(() => S(y, "title", o(Ke))), j(k, y);
        };
        z(g, (k) => {
          o(R) === x.EXPIRED ? k(m) : k(_, !1);
        });
      }
      G(u), j(n, u);
    };
    z(_n, (n) => {
      (o(Ke) || o(R) === x.EXPIRED) && n(Ki);
    });
  }
  var wn = W(_n, 2);
  {
    var Xi = (n) => {
      var u = no(), g = Z(u), m = Z(g);
      et(m, () => o(L).footer), G(g), G(u), j(n, u);
    };
    z(wn, (n) => {
      o(L).footer && (F() !== !0 || o(or)) && n(Xi);
    });
  }
  var Qi = W(wn, 2);
  {
    var el = (n) => {
      var u = io();
      jt(u, (g) => b(xt, g), () => o(xt)), j(n, u);
    };
    z(Qi, (n) => {
      h() && n(el);
    });
  }
  return G(At), jt(At, (n) => b(te, n), () => o(te)), Se(
    (n) => {
      S(At, "data-state", o(R)), S(At, "data-floating", h()), dn = Ea(Pt, 1, "altcha-checkbox svelte-74x4nw", null, dn, n), S(Qe, "id", o(Vr)), Qe.required = r() !== "onsubmit" && (!h() || r() !== "off"), S(Ot, "for", o(Vr));
    },
    [
      () => ({
        "altcha-checkbox-verifying": o(R) === x.VERIFYING
      })
    ]
  ), Be("invalid", Qe, zr), Ra(Qe, () => o(yt), (n) => b(yt, n)), j(e, fn), di({
    clarify: Et,
    configure: nn,
    getConfiguration: ln,
    getFloatingAnchor: an,
    getPlugin: qi,
    getState: on,
    hide: sn,
    repositionFloating: Ct,
    reset: st,
    setFloatingAnchor: un,
    setState: Ce,
    show: dr,
    verify: Ne,
    get auto() {
      return r();
    },
    set auto(n = void 0) {
      r(n), C();
    },
    get blockspam() {
      return i();
    },
    set blockspam(n = void 0) {
      i(n), C();
    },
    get challengeurl() {
      return l();
    },
    set challengeurl(n = void 0) {
      l(n), C();
    },
    get challengejson() {
      return a();
    },
    set challengejson(n = void 0) {
      a(n), C();
    },
    get credentials() {
      return s();
    },
    set credentials(n = void 0) {
      s(n), C();
    },
    get customfetch() {
      return f();
    },
    set customfetch(n = void 0) {
      f(n), C();
    },
    get debug() {
      return c();
    },
    set debug(n = !1) {
      c(n), C();
    },
    get delay() {
      return d();
    },
    set delay(n = 0) {
      d(n), C();
    },
    get disableautofocus() {
      return w();
    },
    set disableautofocus(n = !1) {
      w(n), C();
    },
    get expire() {
      return v();
    },
    set expire(n = void 0) {
      v(n), C();
    },
    get floating() {
      return h();
    },
    set floating(n = void 0) {
      h(n), C();
    },
    get floatinganchor() {
      return p();
    },
    set floatinganchor(n = void 0) {
      p(n), C();
    },
    get floatingoffset() {
      return A();
    },
    set floatingoffset(n = void 0) {
      A(n), C();
    },
    get floatingpersist() {
      return D();
    },
    set floatingpersist(n = !1) {
      D(n), C();
    },
    get hidefooter() {
      return F();
    },
    set hidefooter(n = !1) {
      F(n), C();
    },
    get hidelogo() {
      return ue();
    },
    set hidelogo(n = !1) {
      ue(n), C();
    },
    get id() {
      return ie();
    },
    set id(n = void 0) {
      ie(n), C();
    },
    get language() {
      return J();
    },
    set language(n = void 0) {
      J(n), C();
    },
    get name() {
      return fe();
    },
    set name(n = "altcha") {
      fe(n), C();
    },
    get maxnumber() {
      return ye();
    },
    set maxnumber(n = 1e6) {
      ye(n), C();
    },
    get mockerror() {
      return U();
    },
    set mockerror(n = !1) {
      U(n), C();
    },
    get obfuscated() {
      return Q();
    },
    set obfuscated(n = void 0) {
      Q(n), C();
    },
    get plugins() {
      return Ve();
    },
    set plugins(n = void 0) {
      Ve(n), C();
    },
    get refetchonexpire() {
      return pt();
    },
    set refetchonexpire(n = !0) {
      pt(n), C();
    },
    get sentinel() {
      return Je();
    },
    set sentinel(n = void 0) {
      Je(n), C();
    },
    get spamfilter() {
      return xe();
    },
    set spamfilter(n = !1) {
      xe(n), C();
    },
    get strings() {
      return lt();
    },
    set strings(n = void 0) {
      lt(n), C();
    },
    get test() {
      return he();
    },
    set test(n = !1) {
      he(n), C();
    },
    get verifyurl() {
      return ee();
    },
    set verifyurl(n = void 0) {
      ee(n), C();
    },
    get workers() {
      return at();
    },
    set workers(n = Math.min(16, navigator.hardwareConcurrency || 8)) {
      at(n), C();
    },
    get workerurl() {
      return bt();
    },
    set workerurl(n = void 0) {
      bt(n), C();
    }
  });
}
_a(["change", "keydown", "click"]);
customElements.define("altcha-widget", La(
  oo,
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
  oo as Altcha
};
