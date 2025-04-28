var sl = Object.defineProperty;
var bn = (e) => {
  throw TypeError(e);
};
var ul = (e, t, r) => t in e ? sl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var _e = (e, t, r) => ul(e, typeof t != "symbol" ? t + "" : t, r), wn = (e, t, r) => t.has(e) || bn("Cannot " + r);
var le = (e, t, r) => (wn(e, t, "read from private field"), r ? r.call(e) : t.get(e)), _r = (e, t, r) => t.has(e) ? bn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), mr = (e, t, r, i) => (wn(e, t, "write to private field"), i ? i.call(e, r) : t.set(e, r), r);
const fl = "5";
var Ln;
typeof window < "u" && ((Ln = window.__svelte ?? (window.__svelte = {})).v ?? (Ln.v = /* @__PURE__ */ new Set())).add(fl);
const cl = 1, dl = 4, hl = 8, vl = 16, gl = 1, pl = 2, kr = "[", Pn = "[!", On = "]", vt = {}, oe = Symbol(), _l = "http://www.w3.org/1999/xhtml", yn = !1, be = 2, Fn = 4, Qt = 8, Ir = 16, Oe = 32, nt = 64, Ht = 128, ge = 256, Yt = 512, de = 1024, Fe = 2048, mt = 4096, gt = 8192, er = 16384, ml = 32768, Rr = 65536, bl = 1 << 19, Vn = 1 << 20, Nt = Symbol("$state"), Mn = Symbol("legacy props"), wl = Symbol("");
var Un = Array.isArray, yl = Array.prototype.indexOf, xl = Array.from, Gt = Object.keys, Zt = Object.defineProperty, tt = Object.getOwnPropertyDescriptor, El = Object.getOwnPropertyDescriptors, Cl = Object.prototype, Al = Array.prototype, qn = Object.getPrototypeOf;
function jn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function kl(e, t, r = !1) {
  return e === void 0 ? r ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
const Il = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Dt = [], Tt = [];
function Bn() {
  var e = Dt;
  Dt = [], jn(e);
}
function Hn() {
  var e = Tt;
  Tt = [], jn(e);
}
function tr(e) {
  Dt.length === 0 && queueMicrotask(Bn), Dt.push(e);
}
function Rl(e) {
  Tt.length === 0 && Il(Hn), Tt.push(e);
}
function xn() {
  Dt.length > 0 && Bn(), Tt.length > 0 && Hn();
}
function Yn(e) {
  return e === this.v;
}
function $l(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function $r(e) {
  return !$l(e, this.v);
}
function Nl(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Sl() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Dl(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Tl() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ll() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Pl(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Ol() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Fl() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Vl() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Ml() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Ul = !1;
function Ae(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Yn,
    rv: 0,
    wv: 0
  };
  return r;
}
function ae(e) {
  return /* @__PURE__ */ ql(Ae(e));
}
// @__NO_SIDE_EFFECTS__
function Gn(e, t = !1) {
  const r = Ae(e);
  return t || (r.equals = $r), r;
}
// @__NO_SIDE_EFFECTS__
function ql(e) {
  return S !== null && !me && (S.f & be) !== 0 && (ke === null ? Wl([e]) : ke.push(e)), e;
}
function w(e, t) {
  return S !== null && !me && di() && (S.f & (be | Ir)) !== 0 && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (ke === null || !ke.includes(e)) && Ml(), jl(e, t);
}
function jl(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = ei(), Zn(e, Fe), D !== null && (D.f & de) !== 0 && (D.f & (Oe | nt)) === 0 && (De === null ? zl([e]) : De.push(e))), t;
}
function Zn(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, l = 0; l < i; l++) {
      var a = r[l], s = a.f;
      (s & Fe) === 0 && (Re(a, t), (s & (de | ge)) !== 0 && ((s & be) !== 0 ? Zn(
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
function Ye(e) {
  var t = be | Fe, r = S !== null && (S.f & be) !== 0 ? (
    /** @type {Derived} */
    S
  ) : null;
  return D === null || r !== null && (r.f & ge) !== 0 ? t |= ge : D.f |= Vn, {
    ctx: re,
    deps: null,
    effects: null,
    equals: Yn,
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
function Bl(e) {
  const t = /* @__PURE__ */ Ye(e);
  return t.equals = $r, t;
}
function Wn(e) {
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
function Hl(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & be) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Yl(e) {
  var t, r = D;
  ze(Hl(e));
  try {
    Wn(e), t = ri(e);
  } finally {
    ze(r);
  }
  return t;
}
function zn(e) {
  var t = Yl(e), r = (Ge || (e.f & ge) !== 0) && e.deps !== null ? mt : de;
  Re(e, r), e.equals(t) || (e.v = t, e.wv = ei());
}
function rr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let O = !1;
function ht(e) {
  O = e;
}
let P;
function Ze(e) {
  if (e === null)
    throw rr(), vt;
  return P = e;
}
function pt() {
  return Ze(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Je(P)
  );
}
function Z(e) {
  if (O) {
    if (/* @__PURE__ */ Je(P) !== null)
      throw rr(), vt;
    P = e;
  }
}
function Gl() {
  for (var e = 0, t = P; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === On) {
        if (e === 0) return t;
        e -= 1;
      } else (r === kr || r === Pn) && (e += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Je(t)
    );
    t.remove(), t = i;
  }
}
function V(e, t = null, r) {
  if (typeof e != "object" || e === null || Nt in e)
    return e;
  const i = qn(e);
  if (i !== Cl && i !== Al)
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
      defineProperty(c, d, p) {
        (!("value" in p) || p.configurable === !1 || p.enumerable === !1 || p.writable === !1) && Ol();
        var v = l.get(d);
        return v === void 0 ? (v = Ae(p.value), l.set(d, v)) : w(v, V(p.value, f)), !0;
      },
      deleteProperty(c, d) {
        var p = l.get(d);
        if (p === void 0)
          d in c && l.set(d, Ae(oe));
        else {
          if (a && typeof d == "string") {
            var v = (
              /** @type {Source<number>} */
              l.get("length")
            ), h = Number(d);
            Number.isInteger(h) && h < v.v && w(v, h);
          }
          w(p, oe), En(s);
        }
        return !0;
      },
      get(c, d, p) {
        var A;
        if (d === Nt)
          return e;
        var v = l.get(d), h = d in c;
        if (v === void 0 && (!h || (A = tt(c, d)) != null && A.writable) && (v = Ae(V(h ? c[d] : oe, f)), l.set(d, v)), v !== void 0) {
          var m = o(v);
          return m === oe ? void 0 : m;
        }
        return Reflect.get(c, d, p);
      },
      getOwnPropertyDescriptor(c, d) {
        var p = Reflect.getOwnPropertyDescriptor(c, d);
        if (p && "value" in p) {
          var v = l.get(d);
          v && (p.value = o(v));
        } else if (p === void 0) {
          var h = l.get(d), m = h == null ? void 0 : h.v;
          if (h !== void 0 && m !== oe)
            return {
              enumerable: !0,
              configurable: !0,
              value: m,
              writable: !0
            };
        }
        return p;
      },
      has(c, d) {
        var m;
        if (d === Nt)
          return !0;
        var p = l.get(d), v = p !== void 0 && p.v !== oe || Reflect.has(c, d);
        if (p !== void 0 || D !== null && (!v || (m = tt(c, d)) != null && m.writable)) {
          p === void 0 && (p = Ae(v ? V(c[d], f) : oe), l.set(d, p));
          var h = o(p);
          if (h === oe)
            return !1;
        }
        return v;
      },
      set(c, d, p, v) {
        var X;
        var h = l.get(d), m = d in c;
        if (a && d === "length")
          for (var A = p; A < /** @type {Source<number>} */
          h.v; A += 1) {
            var T = l.get(A + "");
            T !== void 0 ? w(T, oe) : A in c && (T = Ae(oe), l.set(A + "", T));
          }
        h === void 0 ? (!m || (X = tt(c, d)) != null && X.writable) && (h = Ae(void 0), w(h, V(p, f)), l.set(d, h)) : (m = h.v !== oe, w(h, V(p, f)));
        var F = Reflect.getOwnPropertyDescriptor(c, d);
        if (F != null && F.set && F.set.call(v, p), !m) {
          if (a && typeof d == "string") {
            var se = (
              /** @type {Source<number>} */
              l.get("length")
            ), ne = Number(d);
            Number.isInteger(ne) && ne >= se.v && w(se, ne + 1);
          }
          En(s);
        }
        return !0;
      },
      ownKeys(c) {
        o(s);
        var d = Reflect.ownKeys(c).filter((h) => {
          var m = l.get(h);
          return m === void 0 || m.v !== oe;
        });
        for (var [p, v] of l)
          v.v !== oe && !(p in c) && d.push(p);
        return d;
      },
      setPrototypeOf() {
        Fl();
      }
    }
  );
}
function En(e, t = 1) {
  w(e, e.v + t);
}
var Cn, Jn, Kn, Xn;
function yr() {
  if (Cn === void 0) {
    Cn = window, Jn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    Kn = tt(t, "firstChild").get, Xn = tt(t, "nextSibling").get, e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function nr(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Le(e) {
  return Kn.call(e);
}
// @__NO_SIDE_EFFECTS__
function Je(e) {
  return Xn.call(e);
}
function W(e, t) {
  if (!O)
    return /* @__PURE__ */ Le(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Le(P)
  );
  return r === null && (r = P.appendChild(nr())), Ze(r), r;
}
function Rt(e, t) {
  if (!O) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Le(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Je(r) : r;
  }
  return P;
}
function z(e, t = 1, r = !1) {
  let i = O ? P : e;
  for (var l; t--; )
    l = i, i = /** @type {TemplateNode} */
    /* @__PURE__ */ Je(i);
  if (!O)
    return i;
  var a = i == null ? void 0 : i.nodeType;
  if (r && a !== 3) {
    var s = nr();
    return i === null ? l == null || l.after(s) : i.before(s), Ze(s), s;
  }
  return Ze(i), /** @type {TemplateNode} */
  i;
}
function Zl(e) {
  e.textContent = "";
}
let jt = !1, Wt = !1, zt = null, rt = !1, Nr = !1;
function An(e) {
  Nr = e;
}
let St = [];
let S = null, me = !1;
function We(e) {
  S = e;
}
let D = null;
function ze(e) {
  D = e;
}
let ke = null;
function Wl(e) {
  ke = e;
}
let te = null, ce = 0, De = null;
function zl(e) {
  De = e;
}
let Qn = 1, Jt = 0, Ge = !1;
function ei() {
  return ++Qn;
}
function Lt(e) {
  var v;
  var t = e.f;
  if ((t & Fe) !== 0)
    return !0;
  if ((t & mt) !== 0) {
    var r = e.deps, i = (t & ge) !== 0;
    if (r !== null) {
      var l, a, s = (t & Yt) !== 0, f = i && D !== null && !Ge, c = r.length;
      if (s || f) {
        var d = (
          /** @type {Derived} */
          e
        ), p = d.parent;
        for (l = 0; l < c; l++)
          a = r[l], (s || !((v = a == null ? void 0 : a.reactions) != null && v.includes(d))) && (a.reactions ?? (a.reactions = [])).push(d);
        s && (d.f ^= Yt), f && p !== null && (p.f & ge) === 0 && (d.f ^= ge);
      }
      for (l = 0; l < c; l++)
        if (a = r[l], Lt(
          /** @type {Derived} */
          a
        ) && zn(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!i || D !== null && !Ge) && Re(e, de);
  }
  return !1;
}
function Jl(e, t) {
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
  throw jt = !1, e;
}
function Kl(e) {
  return (e.f & er) === 0 && (e.parent === null || (e.parent.f & Ht) === 0);
}
function ir(e, t, r, i) {
  if (jt) {
    if (r === null && (jt = !1), Kl(t))
      throw e;
    return;
  }
  r !== null && (jt = !0);
  {
    Jl(e, t);
    return;
  }
}
function ti(e, t, r = !0) {
  var i = e.reactions;
  if (i !== null)
    for (var l = 0; l < i.length; l++) {
      var a = i[l];
      (a.f & be) !== 0 ? ti(
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
function ri(e) {
  var m;
  var t = te, r = ce, i = De, l = S, a = Ge, s = ke, f = re, c = me, d = e.f;
  te = /** @type {null | Value[]} */
  null, ce = 0, De = null, Ge = (d & ge) !== 0 && (me || !rt || S === null), S = (d & (Oe | nt)) === 0 ? e : null, ke = null, In(e.ctx), me = !1, Jt++;
  try {
    var p = (
      /** @type {Function} */
      (0, e.fn)()
    ), v = e.deps;
    if (te !== null) {
      var h;
      if (Kt(e, ce), v !== null && ce > 0)
        for (v.length = ce + te.length, h = 0; h < te.length; h++)
          v[ce + h] = te[h];
      else
        e.deps = v = te;
      if (!Ge)
        for (h = ce; h < v.length; h++)
          ((m = v[h]).reactions ?? (m.reactions = [])).push(e);
    } else v !== null && ce < v.length && (Kt(e, ce), v.length = ce);
    if (di() && De !== null && !me && v !== null && (e.f & (be | mt | Fe)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      De.length; h++)
        ti(
          De[h],
          /** @type {Effect} */
          e
        );
    return l !== null && Jt++, p;
  } finally {
    te = t, ce = r, De = i, S = l, Ge = a, ke = s, In(f), me = c;
  }
}
function Xl(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var i = yl.call(r, e);
    if (i !== -1) {
      var l = r.length - 1;
      l === 0 ? r = t.reactions = null : (r[i] = r[l], r.pop());
    }
  }
  r === null && (t.f & be) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (te === null || !te.includes(t)) && (Re(t, mt), (t.f & (ge | Yt)) === 0 && (t.f ^= Yt), Wn(
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
      Xl(e, r[i]);
}
function Sr(e) {
  var t = e.f;
  if ((t & er) === 0) {
    Re(e, de);
    var r = D, i = re, l = rt;
    D = e, rt = !0;
    try {
      (t & Ir) !== 0 ? sa(e) : li(e), ii(e);
      var a = ri(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = Qn;
      var s = e.deps, f;
      yn && Ul && e.f & Fe;
    } catch (c) {
      ir(c, e, r, i || e.ctx);
    } finally {
      rt = l, D = r;
    }
  }
}
function Ql() {
  try {
    Tl();
  } catch (e) {
    if (zt !== null)
      ir(e, zt, null);
    else
      throw e;
  }
}
function ni() {
  var e = rt;
  try {
    var t = 0;
    for (rt = !0; St.length > 0; ) {
      t++ > 1e3 && Ql();
      var r = St, i = r.length;
      St = [];
      for (var l = 0; l < i; l++) {
        var a = ta(r[l]);
        ea(a);
      }
    }
  } finally {
    Wt = !1, rt = e, zt = null;
  }
}
function ea(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var i = e[r];
      if ((i.f & (er | gt)) === 0)
        try {
          Lt(i) && (Sr(i), i.deps === null && i.first === null && i.nodes_start === null && (i.teardown === null ? ai(i) : i.fn = null));
        } catch (l) {
          ir(l, i, null, i.ctx);
        }
    }
}
function lr(e) {
  Wt || (Wt = !0, queueMicrotask(ni));
  for (var t = zt = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (nt | Oe)) !== 0) {
      if ((r & de) === 0) return;
      t.f ^= de;
    }
  }
  St.push(t);
}
function ta(e) {
  for (var t = [], r = e; r !== null; ) {
    var i = r.f, l = (i & (Oe | nt)) !== 0, a = l && (i & de) !== 0;
    if (!a && (i & gt) === 0) {
      if ((i & Fn) !== 0)
        t.push(r);
      else if (l)
        r.f ^= de;
      else {
        var s = S;
        try {
          S = r, Lt(r) && Sr(r);
        } catch (d) {
          ir(d, r, null, r.ctx);
        } finally {
          S = s;
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
  for (xn(); St.length > 0; )
    Wt = !0, ni(), xn();
  return (
    /** @type {T} */
    t
  );
}
async function br() {
  await Promise.resolve(), C();
}
function o(e) {
  var t = e.f, r = (t & be) !== 0;
  if (S !== null && !me) {
    ke !== null && ke.includes(e) && Vl();
    var i = S.deps;
    e.rv < Jt && (e.rv = Jt, te === null && i !== null && i[ce] === e ? ce++ : te === null ? te = [e] : (!Ge || !te.includes(e)) && te.push(e));
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
  e, Lt(l) && zn(l)), e.v;
}
function _t(e) {
  var t = me;
  try {
    return me = !0, e();
  } finally {
    me = t;
  }
}
const ra = -7169;
function Re(e, t) {
  e.f = e.f & ra | t;
}
function na(e) {
  D === null && S === null && Dl(), S !== null && (S.f & ge) !== 0 && D === null && Sl(), Nr && Nl();
}
function ia(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function it(e, t, r, i = !0) {
  var l = D, a = {
    ctx: re,
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
      Sr(a), a.f |= ml;
    } catch (c) {
      throw Pe(a), c;
    }
  else t !== null && lr(a);
  var s = r && a.deps === null && a.first === null && a.nodes_start === null && a.teardown === null && (a.f & (Vn | Ht)) === 0;
  if (!s && i && (l !== null && ia(a, l), S !== null && (S.f & be) !== 0)) {
    var f = (
      /** @type {Derived} */
      S
    );
    (f.effects ?? (f.effects = [])).push(a);
  }
  return a;
}
function la(e) {
  const t = it(Qt, null, !1);
  return Re(t, de), t.teardown = e, t;
}
function xr(e) {
  na();
  var t = D !== null && (D.f & Oe) !== 0 && re !== null && !re.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      re
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: D,
      reaction: S
    });
  } else {
    var i = Dr(e);
    return i;
  }
}
function aa(e) {
  const t = it(nt, e, !0);
  return () => {
    Pe(t);
  };
}
function oa(e) {
  const t = it(nt, e, !0);
  return (r = {}) => new Promise((i) => {
    r.outro ? Er(t, () => {
      Pe(t), i(void 0);
    }) : (Pe(t), i(void 0));
  });
}
function Dr(e) {
  return it(Fn, e, !1);
}
function Tr(e) {
  return it(Qt, e, !0);
}
function Se(e, t = [], r = Ye) {
  const i = t.map(r);
  return Lr(() => e(...i.map(o)));
}
function Lr(e, t = 0) {
  return it(Qt | Ir | t, e, !0);
}
function Xt(e, t = !0) {
  return it(Qt | Oe, e, !0, t);
}
function ii(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Nr, i = S;
    An(!0), We(null);
    try {
      t.call(null);
    } finally {
      An(r), We(i);
    }
  }
}
function li(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var i = r.next;
    (r.f & nt) !== 0 ? r.parent = null : Pe(r, t), r = i;
  }
}
function sa(e) {
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
        /* @__PURE__ */ Je(i)
      );
      i.remove(), i = a;
    }
    r = !0;
  }
  li(e, t && !r), Kt(e, 0), Re(e, er);
  var s = e.transitions;
  if (s !== null)
    for (const c of s)
      c.stop();
  ii(e);
  var f = e.parent;
  f !== null && f.first !== null && ai(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function ai(e) {
  var t = e.parent, r = e.prev, i = e.next;
  r !== null && (r.next = i), i !== null && (i.prev = r), t !== null && (t.first === e && (t.first = i), t.last === e && (t.last = r));
}
function Er(e, t) {
  var r = [];
  oi(e, r, !0), ua(r, () => {
    Pe(e), t && t();
  });
}
function ua(e, t) {
  var r = e.length;
  if (r > 0) {
    var i = () => --r || t();
    for (var l of e)
      l.out(i);
  } else
    t();
}
function oi(e, t, r) {
  if ((e.f & gt) === 0) {
    if (e.f ^= gt, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || r) && t.push(s);
    for (var i = e.first; i !== null; ) {
      var l = i.next, a = (i.f & Rr) !== 0 || (i.f & Oe) !== 0;
      oi(i, t, a ? r : !1), i = l;
    }
  }
}
function kn(e) {
  si(e, !0);
}
function si(e, t) {
  if ((e.f & gt) !== 0) {
    e.f ^= gt, (e.f & de) === 0 && (e.f ^= de), Lt(e) && (Re(e, Fe), lr(e));
    for (var r = e.first; r !== null; ) {
      var i = r.next, l = (r.f & Rr) !== 0 || (r.f & Oe) !== 0;
      si(r, l ? t : !1), r = i;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
function ui(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let re = null;
function In(e) {
  re = e;
}
function fi(e, t = !1, r) {
  re = {
    p: re,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
}
function ci(e) {
  const t = re;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var r = D, i = S;
      t.e = null;
      try {
        for (var l = 0; l < s.length; l++) {
          var a = s[l];
          ze(a.effect), We(a.reaction), Dr(a.fn);
        }
      } finally {
        ze(r), We(i);
      }
    }
    re = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function di() {
  return !0;
}
const fa = ["touchstart", "touchmove"];
function ca(e) {
  return fa.includes(e);
}
function da(e, t) {
  if (t) {
    const r = document.body;
    e.autofocus = !0, tr(() => {
      document.activeElement === r && e.focus();
    });
  }
}
let Rn = !1;
function hi() {
  Rn || (Rn = !0, document.addEventListener(
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
function vi(e) {
  var t = S, r = D;
  We(null), ze(null);
  try {
    return e();
  } finally {
    We(t), ze(r);
  }
}
function ha(e, t, r, i = r) {
  e.addEventListener(t, () => vi(r));
  const l = e.__on_r;
  l ? e.__on_r = () => {
    l(), i(!0);
  } : e.__on_r = () => i(!0), hi();
}
const gi = /* @__PURE__ */ new Set(), Cr = /* @__PURE__ */ new Set();
function va(e, t, r, i = {}) {
  function l(a) {
    if (i.capture || $t.call(t, a), !a.cancelBubble)
      return vi(() => r == null ? void 0 : r.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? tr(() => {
    t.addEventListener(e, l, i);
  }) : t.addEventListener(e, l, i), l;
}
function He(e, t, r, i, l) {
  var a = { capture: i, passive: l }, s = va(e, t, r, a);
  (t === document.body || t === window || t === document) && la(() => {
    t.removeEventListener(e, s, a);
  });
}
function ga(e) {
  for (var t = 0; t < e.length; t++)
    gi.add(e[t]);
  for (var r of Cr)
    r(e);
}
function $t(e) {
  var ne;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), i = e.type, l = ((ne = e.composedPath) == null ? void 0 : ne.call(e)) || [], a = (
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
    var p = S, v = D;
    We(null), ze(null);
    try {
      for (var h, m = []; a !== null; ) {
        var A = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var T = a["__" + i];
          if (T != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (Un(T)) {
              var [F, ...se] = T;
              F.apply(a, [e, ...se]);
            } else
              T.call(a, e);
        } catch (X) {
          h ? m.push(X) : h = X;
        }
        if (e.cancelBubble || A === t || A === null)
          break;
        a = A;
      }
      if (h) {
        for (let X of m)
          queueMicrotask(() => {
            throw X;
          });
        throw h;
      }
    } finally {
      e.__root = t, delete e.currentTarget, We(p), ze(v);
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
    D
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function we(e, t) {
  var r = (t & gl) !== 0, i = (t & pl) !== 0, l, a = !e.startsWith("<!>");
  return () => {
    if (O)
      return Ie(P, null), P;
    l === void 0 && (l = Pr(a ? e : "<!>" + e), r || (l = /** @type {Node} */
    /* @__PURE__ */ Le(l)));
    var s = (
      /** @type {TemplateNode} */
      i || Jn ? document.importNode(l, !0) : l.cloneNode(!0)
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
function U(e, t) {
  if (O) {
    D.nodes_end = P, pt();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function pa(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function pi(e, t) {
  return _i(e, t);
}
function _a(e, t) {
  yr(), t.intro = t.intro ?? !1;
  const r = t.target, i = O, l = P;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Le(r)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== kr); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ Je(a);
    if (!a)
      throw vt;
    ht(!0), Ze(
      /** @type {Comment} */
      a
    ), pt();
    const s = _i(e, { ...t, anchor: a });
    if (P === null || P.nodeType !== 8 || /** @type {Comment} */
    P.data !== On)
      throw rr(), vt;
    return ht(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === vt)
      return t.recover === !1 && Ll(), yr(), Zl(r), ht(!1), pi(e, t);
    throw s;
  } finally {
    ht(i), Ze(l);
  }
}
const dt = /* @__PURE__ */ new Map();
function _i(e, { target: t, anchor: r, props: i = {}, events: l, context: a, intro: s = !0 }) {
  yr();
  var f = /* @__PURE__ */ new Set(), c = (v) => {
    for (var h = 0; h < v.length; h++) {
      var m = v[h];
      if (!f.has(m)) {
        f.add(m);
        var A = ca(m);
        t.addEventListener(m, $t, { passive: A });
        var T = dt.get(m);
        T === void 0 ? (document.addEventListener(m, $t, { passive: A }), dt.set(m, 1)) : dt.set(m, T + 1);
      }
    }
  };
  c(xl(gi)), Cr.add(c);
  var d = void 0, p = oa(() => {
    var v = r ?? t.appendChild(nr());
    return Xt(() => {
      if (a) {
        fi({});
        var h = (
          /** @type {ComponentContext} */
          re
        );
        h.c = a;
      }
      l && (i.$$events = l), O && Ie(
        /** @type {TemplateNode} */
        v,
        null
      ), d = e(v, i) || {}, O && (D.nodes_end = P), a && ci();
    }), () => {
      var A;
      for (var h of f) {
        t.removeEventListener(h, $t);
        var m = (
          /** @type {number} */
          dt.get(h)
        );
        --m === 0 ? (document.removeEventListener(h, $t), dt.delete(h)) : dt.set(h, m);
      }
      Cr.delete(c), v !== r && ((A = v.parentNode) == null || A.removeChild(v));
    };
  });
  return Ar.set(d, p), d;
}
let Ar = /* @__PURE__ */ new WeakMap();
function ma(e, t) {
  const r = Ar.get(e);
  return r ? (Ar.delete(e), r(t)) : Promise.resolve();
}
function J(e, t, [r, i] = [0, 0]) {
  O && r === 0 && pt();
  var l = e, a = null, s = null, f = oe, c = r > 0 ? Rr : 0, d = !1;
  const p = (h, m = !0) => {
    d = !0, v(m, h);
  }, v = (h, m) => {
    if (f === (f = h)) return;
    let A = !1;
    if (O && i !== -1) {
      if (r === 0) {
        const F = (
          /** @type {Comment} */
          l.data
        );
        F === kr ? i = 0 : F === Pn ? i = 1 / 0 : (i = parseInt(F.substring(1)), i !== i && (i = f ? 1 / 0 : -1));
      }
      const T = i > r;
      !!f === T && (l = Gl(), Ze(l), ht(!1), A = !0, i = -1);
    }
    f ? (a ? kn(a) : m && (a = Xt(() => m(l))), s && Er(s, () => {
      s = null;
    })) : (s ? kn(s) : m && (s = Xt(() => m(l, [r + 1, i]))), a && Er(a, () => {
      a = null;
    })), A && ht(!0);
  };
  Lr(() => {
    d = !1, t(p), d || v(null, null);
  }, c), O && (l = P);
}
function et(e, t, r, i, l) {
  var a = e, s = "", f;
  Lr(() => {
    if (s === (s = t() ?? "")) {
      O && pt();
      return;
    }
    f !== void 0 && (Pe(f), f = void 0), s !== "" && (f = Xt(() => {
      if (O) {
        P.data;
        for (var c = pt(), d = c; c !== null && (c.nodeType !== 8 || /** @type {Comment} */
        c.data !== ""); )
          d = c, c = /** @type {TemplateNode} */
          /* @__PURE__ */ Je(c);
        if (c === null)
          throw rr(), vt;
        Ie(P, d), a = Ze(c);
        return;
      }
      var p = s + "", v = Pr(p);
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
  O && pt();
  var a = (f = t.$$slots) == null ? void 0 : f[r], s = !1;
  a === !0 && (a = t.children, s = !0), a === void 0 || a(e, s ? () => i : i);
}
function wa(e, t) {
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
const $n = [...` 	
\r\f \v\uFEFF`];
function ya(e, t, r) {
  var i = "" + e;
  if (r) {
    for (var l in r)
      if (r[l])
        i = i ? i + " " + l : l;
      else if (i.length)
        for (var a = l.length, s = 0; (s = i.indexOf(l, s)) >= 0; ) {
          var f = s + a;
          (s === 0 || $n.includes(i[s - 1])) && (f === i.length || $n.includes(i[f])) ? i = (s === 0 ? "" : i.substring(0, s)) + i.substring(f + 1) : s = f;
        }
  }
  return i === "" ? null : i;
}
function xa(e, t, r, i, l, a) {
  var s = e.__className;
  if (O || s !== r) {
    var f = ya(r, i, a);
    (!O || f !== e.getAttribute("class")) && (f == null ? e.removeAttribute("class") : e.className = f), e.__className = r;
  } else if (a && l !== a)
    for (var c in a) {
      var d = !!a[c];
      (l == null || d !== !!l[c]) && e.classList.toggle(c, d);
    }
  return a;
}
const Ea = Symbol("is custom element"), Ca = Symbol("is html");
function Nn(e) {
  if (O) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var i = e.value;
          $(e, "value", null), e.value = i;
        }
        if (e.hasAttribute("checked")) {
          var l = e.checked;
          $(e, "checked", null), e.checked = l;
        }
      }
    };
    e.__on_r = r, Rl(r), hi();
  }
}
function Aa(e, t) {
  var r = mi(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function $(e, t, r, i) {
  var l = mi(e);
  O && (l[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || l[t] !== (l[t] = r) && (t === "loading" && (e[wl] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && ka(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function mi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Ea]: e.nodeName.includes("-"),
      [Ca]: e.namespaceURI === _l
    })
  );
}
var Sn = /* @__PURE__ */ new Map();
function ka(e) {
  var t = Sn.get(e.nodeName);
  if (t) return t;
  Sn.set(e.nodeName, t = []);
  for (var r, i = e, l = Element.prototype; l !== i; ) {
    r = El(i);
    for (var a in r)
      r[a].set && t.push(a);
    i = qn(i);
  }
  return t;
}
function Ia(e, t, r = t) {
  ha(e, "change", (i) => {
    var l = i ? e.defaultChecked : e.checked;
    r(l);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (O && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  _t(t) == null) && r(e.checked), Tr(() => {
    var i = t();
    e.checked = !!i;
  });
}
function Dn(e, t) {
  return e === t || (e == null ? void 0 : e[Nt]) === t;
}
function Ut(e = {}, t, r, i) {
  return Dr(() => {
    var l, a;
    return Tr(() => {
      l = a, a = [], _t(() => {
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
  re === null && ui(), xr(() => {
    const t = _t(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Ra(e) {
  re === null && ui(), bi(() => () => _t(e));
}
let qt = !1;
function $a(e) {
  var t = qt;
  try {
    return qt = !1, [e(), qt];
  } finally {
    qt = t;
  }
}
function k(e, t, r, i) {
  var ye;
  var l = (r & cl) !== 0, a = !0, s = (r & hl) !== 0, f = (r & vl) !== 0, c = !1, d;
  s ? [d, c] = $a(() => (
    /** @type {V} */
    e[t]
  )) : d = /** @type {V} */
  e[t];
  var p = Nt in e || Mn in e, v = s && (((ye = tt(e, t)) == null ? void 0 : ye.set) ?? (p && t in e && ((q) => e[t] = q))) || void 0, h = (
    /** @type {V} */
    i
  ), m = !0, A = !1, T = () => (A = !0, m && (m = !1, f ? h = _t(
    /** @type {() => V} */
    i
  ) : h = /** @type {V} */
  i), h);
  d === void 0 && i !== void 0 && (v && a && Pl(), d = T(), v && v(d));
  var F;
  if (F = () => {
    var q = (
      /** @type {V} */
      e[t]
    );
    return q === void 0 ? T() : (m = !0, A = !1, q);
  }, (r & dl) === 0)
    return F;
  if (v) {
    var se = e.$$legacy;
    return function(q, Q) {
      return arguments.length > 0 ? ((!Q || se || c) && v(Q ? F() : q), q) : F();
    };
  }
  var ne = !1, X = /* @__PURE__ */ Gn(d), ue = /* @__PURE__ */ Ye(() => {
    var q = F(), Q = o(X);
    return ne ? (ne = !1, Q) : X.v = q;
  });
  return l || (ue.equals = $r), function(q, Q) {
    if (arguments.length > 0) {
      const Ve = Q ? o(ue) : s ? V(q) : q;
      return ue.equals(Ve) || (ne = !0, w(X, Ve), A && h !== void 0 && (h = Ve), _t(() => o(ue))), q;
    }
    return o(ue);
  };
}
function Na(e) {
  return new Sa(e);
}
var Te, ve;
class Sa {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    _r(this, Te);
    /** @type {Record<string, any>} */
    _r(this, ve);
    var a;
    var r = /* @__PURE__ */ new Map(), i = (s, f) => {
      var c = /* @__PURE__ */ Gn(f);
      return r.set(s, c), c;
    };
    const l = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, f) {
          return o(r.get(f) ?? i(f, Reflect.get(s, f)));
        },
        has(s, f) {
          return f === Mn ? !0 : (o(r.get(f) ?? i(f, Reflect.get(s, f))), Reflect.has(s, f));
        },
        set(s, f, c) {
          return w(r.get(f) ?? i(f, c), c), Reflect.set(s, f, c);
        }
      }
    );
    mr(this, ve, (t.hydrate ? _a : pi)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: l,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((a = t == null ? void 0 : t.props) != null && a.$$host) || t.sync === !1) && C(), mr(this, Te, l.$$events);
    for (const s of Object.keys(le(this, ve)))
      s === "$set" || s === "$destroy" || s === "$on" || Zt(this, s, {
        get() {
          return le(this, ve)[s];
        },
        /** @param {any} value */
        set(f) {
          le(this, ve)[s] = f;
        },
        enumerable: !0
      });
    le(this, ve).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(l, s);
    }, le(this, ve).$destroy = () => {
      ma(le(this, ve));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    le(this, ve).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    le(this, Te)[t] = le(this, Te)[t] || [];
    const i = (...l) => r.call(this, ...l);
    return le(this, Te)[t].push(i), () => {
      le(this, Te)[t] = le(this, Te)[t].filter(
        /** @param {any} fn */
        (l) => l !== i
      );
    };
  }
  $destroy() {
    le(this, ve).$destroy();
  }
}
Te = new WeakMap(), ve = new WeakMap();
let wi;
typeof HTMLElement == "function" && (wi = class extends HTMLElement {
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
        return (a) => {
          const s = document.createElement("slot");
          l !== "default" && (s.name = l), U(a, s);
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
      this.$$c = Na({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = aa(() => {
        Tr(() => {
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
function Ta(e, t, r, i, l, a) {
  let s = class extends wi {
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
          var p = (v = tt(d, f)) == null ? void 0 : v.get;
          p ? d[f] = c : d.$set({ [f]: c });
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
const yi = new TextEncoder();
function La(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function Pa(e, t = "SHA-256", r = 1e5) {
  const i = Date.now().toString(16);
  e || (e = Math.round(Math.random() * r));
  const l = await xi(i, e, t);
  return {
    algorithm: t,
    challenge: l,
    salt: i,
    signature: ""
  };
}
async function xi(e, t, r) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return La(
    await crypto.subtle.digest(
      r.toUpperCase(),
      yi.encode(e + t)
    )
  );
}
function Oa(e, t, r = "SHA-256", i = 1e6, l = 0) {
  const a = new AbortController(), s = Date.now();
  return {
    promise: (async () => {
      for (let c = l; c <= i; c += 1) {
        if (a.signal.aborted)
          return null;
        if (await xi(t, c, r) === e)
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
function Tn() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function Fa(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let i = 0; i < t.length; i++)
    r[i] = t.charCodeAt(i);
  return r;
}
function Va(e, t = 12) {
  const r = new Uint8Array(t);
  for (let i = 0; i < t; i++)
    r[i] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function Ma(e, t = "", r = 1e6, i = 0) {
  const l = "AES-GCM", a = new AbortController(), s = Date.now(), f = async () => {
    for (let p = i; p <= r; p += 1) {
      if (a.signal.aborted || !c || !d)
        return null;
      try {
        const v = await crypto.subtle.decrypt(
          {
            name: l,
            iv: Va(p)
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
    d = Fa(e);
    const p = await crypto.subtle.digest(
      "SHA-256",
      yi.encode(t)
    );
    c = await crypto.subtle.importKey(
      "raw",
      p,
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
var x = /* @__PURE__ */ ((e) => (e.CODE = "code", e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(x || {}), K = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.LOADING = "loading", e.PLAYING = "playing", e.PAUSED = "paused", e.READY = "ready", e))(K || {});
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
const wr = (e, t) => {
  let r = /* @__PURE__ */ Bl(() => kl(t == null ? void 0 : t(), 24));
  var i = Ha();
  Se(() => {
    $(i, "width", o(r)), $(i, "height", o(r));
  }), U(e, i);
};
function qa(e, t) {
  e.code === "Space" && (e.preventDefault(), e.stopImmediatePropagation(), t());
}
function ja(e, t) {
  e.preventDefault(), t();
}
function Ba(e, t, r, i, l, a, s, f) {
  var c;
  [
    x.UNVERIFIED,
    x.ERROR,
    x.EXPIRED,
    x.CODE
  ].includes(o(t)) ? r() !== !1 && ((c = o(i)) == null ? void 0 : c.reportValidity()) === !1 ? w(l, !1) : a() ? s() : f() : w(l, !0);
}
var Ha = /* @__PURE__ */ ar('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="svelte-16ux7p0"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25" class="svelte-16ux7p0"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor" class="altcha-spinner svelte-16ux7p0"></path></svg>'), Ya = /* @__PURE__ */ we('<input type="hidden" class="svelte-16ux7p0">'), Ga = /* @__PURE__ */ we('<div class="svelte-16ux7p0"><a target="_blank" class="altcha-logo svelte-16ux7p0" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-16ux7p0"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor" class="svelte-16ux7p0"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor" class="svelte-16ux7p0"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor" class="svelte-16ux7p0"></path></svg></a></div>'), Za = /* @__PURE__ */ ar('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-16ux7p0"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z" class="svelte-16ux7p0"></path></svg>'), Wa = /* @__PURE__ */ ar('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-16ux7p0"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z" class="svelte-16ux7p0"></path></svg>'), za = /* @__PURE__ */ ar('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-16ux7p0"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z" class="svelte-16ux7p0"></path></svg>'), Ja = /* @__PURE__ */ we('<button type="button" class="altcha-code-challenge-audio svelte-16ux7p0"><!></button>'), Ka = /* @__PURE__ */ we('<audio hidden autoplay class="svelte-16ux7p0"><source class="svelte-16ux7p0"></audio>'), Xa = /* @__PURE__ */ we('<div class="altcha-code-challenge svelte-16ux7p0" role="dialog"><div class="altcha-code-challenge-arrow svelte-16ux7p0"></div> <form data-code-challenge-form="1" class="svelte-16ux7p0"><img class="altcha-code-challenge-image svelte-16ux7p0" alt=""> <input type="text" autocomplete="off" name="code" class="altcha-code-challenge-input svelte-16ux7p0" required> <div class="altcha-code-challenge-buttons svelte-16ux7p0"><div class="altcha-code-challenge-buttons-left svelte-16ux7p0"><!> <button type="button" class="altcha-code-challenge-reload svelte-16ux7p0"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-16ux7p0"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z" class="svelte-16ux7p0"></path></svg></button></div> <button type="submit" class="altcha-code-challenge-verify svelte-16ux7p0"><!> </button></div> <!></form></div>'), Qa = /* @__PURE__ */ we('<div class="svelte-16ux7p0"><!></div>'), eo = /* @__PURE__ */ we('<div class="svelte-16ux7p0"><!></div>'), to = /* @__PURE__ */ we('<div class="altcha-error svelte-16ux7p0"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="svelte-16ux7p0"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" class="svelte-16ux7p0"></path></svg> <!></div>'), ro = /* @__PURE__ */ we('<div class="altcha-footer svelte-16ux7p0"><div class="svelte-16ux7p0"><!></div></div>'), no = /* @__PURE__ */ we('<div class="altcha-anchor-arrow svelte-16ux7p0"></div>'), io = /* @__PURE__ */ we('<!> <div class="altcha svelte-16ux7p0"><div class="altcha-main svelte-16ux7p0"><div><!> <input type="checkbox" class="svelte-16ux7p0"></div> <label class="altcha-label svelte-16ux7p0"><!></label> <!> <!> <!></div> <!> <!> <!></div>', 1);
const lo = {
  hash: "svelte-16ux7p0",
  code: `.altcha.svelte-16ux7p0 {background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);position:relative;}.altcha.svelte-16ux7p0:focus-within {border-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating].svelte-16ux7p0 {background:var(--altcha-color-base, white);display:none;filter:drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2));left:-100%;position:fixed;top:-100%;width:var(--altcha-max-width, 260px);z-index:999999;}.altcha[data-floating=top].svelte-16ux7p0 .altcha-anchor-arrow:where(.svelte-16ux7p0) {border-bottom-color:transparent;border-top-color:var(--altcha-color-border, #a0a0a0);bottom:-12px;top:auto;}.altcha[data-floating=bottom].svelte-16ux7p0:focus-within::after {border-bottom-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating=top].svelte-16ux7p0:focus-within::after {border-top-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating].svelte-16ux7p0:not([data-state=unverified]) {display:block;}.altcha-anchor-arrow.svelte-16ux7p0 {border:6px solid transparent;border-bottom-color:var(--altcha-color-border, #a0a0a0);content:"";height:0;left:12px;position:absolute;top:-12px;width:0;}.altcha-main.svelte-16ux7p0 {align-items:center;display:flex;gap:0.4rem;padding:0.7rem;position:relative;}.altcha-code-challenge.svelte-16ux7p0 {background:var(--altcha-color-base, white);border:1px solid var(--altcha-color-border-focus, currentColor);border-radius:var(--altcha-border-radius, 3px);filter:drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2));padding:0.5rem;position:absolute;top:2.5rem;z-index:9999999;}.altcha-code-challenge.svelte-16ux7p0 > form:where(.svelte-16ux7p0) {display:flex;flex-direction:column;gap:0.5rem;}.altcha-code-challenge-input.svelte-16ux7p0 {border:1px solid currentColor;border-radius:3px;box-sizing:border-box;outline:none;font-size:16px;padding:0.35rem;width:220px;}.altcha-code-challenge-input.svelte-16ux7p0:focus {outline:2px solid color-mix(in srgb, var(--altcha-color-active, #1D1DC9) 20%, transparent);}.altcha-code-challenge-input.svelte-16ux7p0:disabled {opacity:0.7;}.altcha-code-challenge-image.svelte-16ux7p0 {border:1px solid currentColor;border-radius:3px;box-sizing:border-box;object-fit:contain;height:50px;width:220px;}.altcha-code-challenge-audio.svelte-16ux7p0,
.altcha-code-challenge-reload.svelte-16ux7p0 {background:#efefef;border:0;border-radius:3px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0.35rem;}.altcha-code-challenge-audio.svelte-16ux7p0:disabled,
.altcha-code-challenge-reload.svelte-16ux7p0:disabled {opacity:0.7;pointer-events:none;}.altcha-code-challenge-audio.svelte-16ux7p0 > :where(.svelte-16ux7p0),
.altcha-code-challenge-reload.svelte-16ux7p0 > :where(.svelte-16ux7p0) {height:20px;width:20px;}.altcha-code-challenge-buttons.svelte-16ux7p0 {display:flex;justify-content:space-between;}.altcha-code-challenge-buttons-left.svelte-16ux7p0 {display:flex;gap:0.25rem;}.altcha-code-challenge-verify.svelte-16ux7p0 {align-items:center;background:var(--altcha-color-active, #1D1DC9);border:0;border-radius:3px;color:white;cursor:pointer;display:flex;gap:0.5rem;font-size:100%;padding:0.35rem 1rem;}.altcha-code-challenge-verify.svelte-16ux7p0:disabled {opacity:0.7;pointer-events:none;}.altcha-code-challenge-arrow.svelte-16ux7p0 {border:6px solid transparent;border-bottom-color:var(--altcha-color-border, currentColor);content:"";height:0;left:0.15rem;position:absolute;top:-12px;width:0;}.altcha[data-floating=top].svelte-16ux7p0 .altcha-code-challenge:where(.svelte-16ux7p0) {top:-150px;}.altcha[data-floating=top].svelte-16ux7p0 .altcha-code-challenge-arrow:where(.svelte-16ux7p0) {border-bottom-color:transparent;border-top-color:var(--altcha-color-border, currentColor);bottom:-12px;top:auto;}.altcha-label.svelte-16ux7p0 {cursor:pointer;flex-grow:1;}.altcha-logo.svelte-16ux7p0 {color:currentColor;opacity:0.7;}.altcha-logo.svelte-16ux7p0:hover {opacity:1;}.altcha-error.svelte-16ux7p0 {color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem;}.altcha-footer.svelte-16ux7p0 {align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.7;justify-content:end;padding:0.2rem 0.7rem;}.altcha-footer.svelte-16ux7p0:hover {opacity:1;}.altcha-footer.svelte-16ux7p0 a {color:currentColor;}.altcha-checkbox.svelte-16ux7p0 {display:flex;align-items:center;height:24px;width:24px;}.altcha-checkbox.svelte-16ux7p0 input:where(.svelte-16ux7p0) {width:18px;height:18px;margin:0;}.altcha-checkbox-verifying.svelte-16ux7p0 input:where(.svelte-16ux7p0) {appearance:none;pointer-events:none;height:0;width:0;}.altcha-spinner.svelte-16ux7p0 {
  animation: svelte-16ux7p0-altcha-spinner 0.75s infinite linear;transform-origin:center;}

@keyframes svelte-16ux7p0-altcha-spinner {
  100% {
    transform: rotate(360deg);
  }
}`
};
function ao(e, t) {
  var _n, mn;
  fi(t, !0), wa(e, lo);
  let r = k(t, "auto", 7, void 0), i = k(t, "blockspam", 7, void 0), l = k(t, "challengeurl", 7, void 0), a = k(t, "challengejson", 7, void 0), s = k(t, "credentials", 7, void 0), f = k(t, "customfetch", 7, void 0), c = k(t, "debug", 7, !1), d = k(t, "delay", 7, 0), p = k(t, "disableautofocus", 7, !1), v = k(t, "expire", 7, void 0), h = k(t, "floating", 7, void 0), m = k(t, "floatinganchor", 7, void 0), A = k(t, "floatingoffset", 7, void 0), T = k(t, "floatingpersist", 7, !1), F = k(t, "hidefooter", 7, !1), se = k(t, "hidelogo", 7, !1), ne = k(t, "id", 7, void 0), X = k(t, "language", 7, void 0), ue = k(t, "name", 7, "altcha"), ye = k(t, "maxnumber", 7, 1e6), q = k(t, "mockerror", 7, !1), Q = k(t, "obfuscated", 7, void 0), Ve = k(t, "plugins", 7, void 0), bt = k(t, "refetchonexpire", 7, !0), Ke = k(t, "sentinel", 7, void 0), xe = k(t, "spamfilter", 7, !1), lt = k(t, "strings", 7, void 0), he = k(t, "test", 7, !1), fe = k(t, "verifyurl", 7, void 0), at = k(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), wt = k(t, "workerurl", 7, void 0);
  const Or = ["SHA-256", "SHA-384", "SHA-512"], Ei = "https://altcha.org/", Me = (n, u) => {
    t.$$host.dispatchEvent(new CustomEvent(n, { detail: u }));
  }, Fr = (mn = (_n = document.documentElement.lang) == null ? void 0 : _n.split("-")) == null ? void 0 : mn[0], or = /* @__PURE__ */ Ye(() => {
    var n;
    return l() && new URL(l(), location.origin).host.endsWith(".altcha.org") && !!((n = l()) != null && n.includes("apiKey=ckey_"));
  }), sr = /* @__PURE__ */ Ye(() => a() ? Kr(a()) : void 0), Ci = /* @__PURE__ */ Ye(() => lt() ? Kr(lt()) : {}), L = /* @__PURE__ */ Ye(() => ({
    ...Ur(),
    ...o(Ci)
  })), Vr = /* @__PURE__ */ Ye(() => ne() || `${ue()}_checkbox_${Math.round(Math.random() * 1e8)}`);
  let yt = ae(!1), H = ae(null), I = ae(V(x.UNVERIFIED)), ee = ae(void 0), xt = ae(null), Ue = ae(null), ur = ae(null), ot = ae(null), M = ae(null), Xe = ae(null), Ee = null, Y = ae(null), Qe = ae(!1), qe = [], fr = ae(!1), $e = ae(null);
  xr(() => {
    Fi(o(Xe));
  }), xr(() => {
    Vi(o(I));
  }), Ra(() => {
    Ai(), o(M) && (o(M).removeEventListener("submit", Gr), o(M).removeEventListener("reset", Zr), o(M).removeEventListener("focusin", Yr), w(M, null)), Ee && (clearTimeout(Ee), Ee = null), document.removeEventListener("click", Br), document.removeEventListener("scroll", Hr), window.removeEventListener("resize", Jr);
  }), bi(() => {
    var n;
    N("mounted", "2.0.0-beta.3"), N("workers", at()), $i(), N("plugins", qe.length ? qe.map((u) => u.constructor.pluginName).join(", ") : "none"), he() && N("using test mode"), v() && cr(v()), r() !== void 0 && N("auto", r()), h() !== void 0 && Qr(h()), w(M, V((n = o(ee)) == null ? void 0 : n.closest("form"))), o(M) && (o(M).addEventListener("submit", Gr, { capture: !0 }), o(M).addEventListener("reset", Zr), (r() === "onfocus" || T() === "focus") && o(M).addEventListener("focusin", Yr)), r() === "onload" && (Q() ? Et() : Ne()), o(or) && (F() || se()) && N("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      Me("load");
    });
  });
  function Pt(n, u) {
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
  function Ai() {
    for (const n of qe)
      n.destroy();
  }
  function Mr() {
    l() && bt() && o(I) === x.VERIFIED ? Ne() : st(x.EXPIRED, o(L).expired);
  }
  async function ki() {
    var n;
    if (q())
      throw N("mocking error"), new Error("Mocked error.");
    if (o(sr))
      return N("using provided json data"), o(sr);
    if (he())
      return N("generating test challenge", { test: he() }), Pa(typeof he() != "boolean" ? +he() : void 0);
    {
      if (!l() && o(M)) {
        const E = o(M).getAttribute("action");
        E != null && E.includes("/form/") && l(E + "/altcha");
      }
      if (!l())
        throw new Error("Attribute challengeurl not set.");
      N("fetching challenge from", l());
      let u = null, g = null;
      if (f())
        if (N("using customfetch"), typeof f() == "string") {
          if (u = globalThis[f()] || null, !u)
            throw new Error(`Custom fetch function not found: ${f()}`);
        } else
          u = f();
      const b = {
        credentials: typeof s() == "boolean" ? "include" : s(),
        headers: xe() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      };
      if (u) {
        if (g = await u(l(), b), !g || !(g instanceof Response))
          throw new Error("Custom fetch function did not return a response.");
      } else
        g = await fetch(l(), b);
      if (g.status !== 200)
        throw new Error(`Server responded with ${g.status}.`);
      const _ = g.headers.get("X-Altcha-Config"), R = await g.json(), y = new URLSearchParams((n = R.salt.split("?")) == null ? void 0 : n[1]), j = y.get("expires") || y.get("expire");
      if (j) {
        const E = new Date(+j * 1e3), B = isNaN(E.getTime()) ? 0 : E.getTime() - Date.now();
        B > 0 && cr(B);
      }
      if (_)
        try {
          const E = JSON.parse(_);
          E && typeof E == "object" && (E.verifyurl && (E.verifyurl = jr(E.verifyurl)), rn(E));
        } catch (E) {
          N("unable to configure from X-Altcha-Config", E);
        }
      return R;
    }
  }
  function Ii(n) {
    var g, b;
    const u = (g = o(M)) == null ? void 0 : g.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((b = u == null ? void 0 : u.value) == null ? void 0 : b.slice(u.value.indexOf("@"))) || void 0;
  }
  function Ur(n = [
    X() || "",
    document.documentElement.lang || "",
    ...navigator.languages
  ]) {
    const u = Object.keys(globalThis.altchaI18n).map((b) => b.toLowerCase()), g = n.reduce(
      (b, _) => (_ = _.toLowerCase(), b || (globalThis.altchaI18n[_] ? _ : null) || u.find((R) => _.split("-")[0] === R.split("-")[0]) || null),
      null
    );
    return globalThis.altchaI18n[g || "en"];
  }
  function Ri() {
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
      ...((g = o(M)) == null ? void 0 : g.querySelectorAll(n != null && n.length ? n.map((b) => `input[name="${b}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (b, _) => {
        const R = _.name, y = _.value;
        return R && y && (b[R] = /\n/.test(y) ? y.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : y), b;
      },
      {}
    );
  }
  function jr(n) {
    const u = new URL(l() || location.origin), g = new URL(n, u);
    return g.search || (g.search = u.search), g.toString();
  }
  function $i() {
    const n = Ve() !== void 0 ? Ve().split(",") : void 0;
    for (const u of globalThis.altchaPlugins)
      (!n || n.includes(u.pluginName)) && qe.push(new u({
        el: o(ee),
        clarify: Et,
        dispatch: Me,
        getConfiguration: nn,
        getFloatingAnchor: ln,
        getState: an,
        log: N,
        reset: st,
        solve: tn,
        setState: Ce,
        setFloatingAnchor: sn,
        verify: Ne
      }));
  }
  function N(...n) {
    (c() || n.some((u) => u instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${ue()}]`, ...n);
  }
  function Ni() {
    w(Y, V(K.PAUSED));
  }
  function Si(n) {
    w(Y, V(K.ERROR));
  }
  function Di() {
    w(Y, V(K.READY));
  }
  function Ti() {
    w(Y, V(K.LOADING));
  }
  function Li() {
    w(Y, V(K.PLAYING));
  }
  function Pi() {
    w(Y, V(K.PAUSED));
  }
  function Oi(n) {
    if (n.preventDefault(), n.stopPropagation(), o(H)) {
      const u = new FormData(n.target);
      w(Qe, !0), Xr(Pt(o(H).challenge, o(H).solution), String(u.get("code"))).then(({ reason: g, verified: b }) => {
        b ? (w(H, null), Ce(x.VERIFIED), N("verified"), br().then(() => {
          var _;
          (_ = o(ur)) == null || _.focus(), Me("verified", { payload: o($e) });
        })) : (st(), w(Xe, V(g || "Verification failed")));
      }).catch((g) => {
        w(H, null), Ce(x.ERROR, g), N("sentinel verification failed:", g);
      }).finally(() => {
        w(Qe, !1);
      });
    }
  }
  function Br(n) {
    var g;
    const u = n.target;
    h() && u && !o(ee).contains(u) && (o(I) === x.VERIFIED && T() === !1 || o(I) === x.VERIFIED && T() === "focus" && !((g = o(M)) != null && g.matches(":focus-within")) || r() === "off" && o(I) === x.UNVERIFIED) && on();
  }
  function Hr() {
    h() && o(I) !== x.UNVERIFIED && Ct();
  }
  function Fi(n) {
    for (const u of qe)
      typeof u.onErrorChange == "function" && u.onErrorChange(o(Xe));
  }
  function Yr(n) {
    o(I) === x.UNVERIFIED ? Ne() : h() && T() === "focus" && o(I) === x.VERIFIED && dr();
  }
  function Gr(n) {
    const u = n.target, g = n.submitter;
    u != null && u.hasAttribute("data-code-challenge-form") || (o(M) && r() === "onsubmit" ? o(I) === x.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), Ne().then(() => {
      var _;
      g && ["INPUT", "BUTTON"].includes(g.tagName) && g.getAttribute("name") ? g.click() : (_ = o(M)) == null || _.requestSubmit();
    })) : o(I) !== x.VERIFIED && (n.preventDefault(), n.stopPropagation(), o(I) === x.VERIFYING && Wr()) : o(M) && h() && r() === "off" && o(I) === x.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), dr()));
  }
  function Zr() {
    st();
  }
  function Wr() {
    o(I) === x.VERIFYING && o(L).waitAlert && alert(o(L).waitAlert);
  }
  function zr() {
    o(Ue) ? o(Ue).paused ? (o(Ue).currentTime = 0, o(Ue).play()) : o(Ue).pause() : (w(fr, !0), requestAnimationFrame(() => {
      var n;
      (n = o(Ue)) == null || n.play();
    }));
  }
  function Vi(n) {
    for (const u of qe)
      typeof u.onStateChange == "function" && u.onStateChange(o(I));
    h() && o(I) !== x.UNVERIFIED && requestAnimationFrame(() => {
      Ct();
    }), w(yt, o(I) === x.VERIFIED);
  }
  function Jr() {
    h() && Ct();
  }
  function Kr(n) {
    return JSON.parse(n);
  }
  async function Mi(n) {
    if (!fe())
      throw new Error("Attribute verifyurl not set.");
    N("requesting server verification from", fe());
    const u = { payload: n };
    if (xe() !== !1) {
      const {
        blockedCountries: _,
        classifier: R,
        disableRules: y,
        email: j,
        expectedLanguages: E,
        expectedCountries: B,
        fields: ie,
        ipAddress: Be,
        text: vr,
        timeZone: Ft
      } = Ri();
      u.blockedCountries = _, u.classifier = R, u.disableRules = y, u.email = j === !1 ? void 0 : Ii(j), u.expectedCountries = B, u.expectedLanguages = E || (Fr ? [Fr] : void 0), u.fields = ie === !1 ? void 0 : qr(ie), u.ipAddress = Be === !1 ? void 0 : Be || "auto", u.text = vr, u.timeZone = Ft === !1 ? void 0 : Ft || Tn();
    }
    const g = await fetch(fe(), {
      body: JSON.stringify(u),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (g.status !== 200)
      throw new Error(`Server responded with ${g.status}.`);
    const b = await g.json();
    if (b != null && b.payload && w($e, V(b.payload)), Me("serververification", b), i() && b.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  async function Xr(n, u) {
    if (!fe())
      throw new Error("Attribute verifyurl not set.");
    N("requesting sentinel verification from", fe());
    const g = { code: u, payload: n };
    Ke() && (g.fields = Ke().fields ? qr() : void 0, g.timeZone = Ke().timeZone ? Tn() : void 0);
    const b = await fetch(fe(), {
      body: JSON.stringify(g),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (b.status !== 200)
      throw new Error(`Server responded with ${b.status}.`);
    const _ = await b.json();
    return _ != null && _.payload && w($e, V(_.payload)), Me("sentinelverification", _), _;
  }
  function cr(n) {
    N("expire", n), Ee && (clearTimeout(Ee), Ee = null), n < 1 ? Mr() : Ee = setTimeout(Mr, n);
  }
  function Qr(n) {
    N("floating", n), h() !== n && (o(ee).style.left = "", o(ee).style.top = ""), h(n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : h()), h() ? (r() || r("onsubmit"), document.addEventListener("scroll", Hr), document.addEventListener("click", Br), window.addEventListener("resize", Jr)) : r() === "onsubmit" && r(void 0);
  }
  function en(n) {
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
  async function tn(n) {
    let u = null;
    if ("Worker" in window) {
      try {
        u = await Ui(n, n.maxNumber || n.maxnumber || ye());
      } catch (g) {
        N(g);
      }
      if ((u == null ? void 0 : u.number) !== void 0 || "obfuscated" in n)
        return { data: n, solution: u };
    }
    if ("obfuscated" in n) {
      const g = await Ma(n.obfuscated, n.key, n.maxNumber || n.maxnumber);
      return { data: n, solution: await g.promise };
    }
    return {
      data: n,
      solution: await Oa(n.challenge, n.salt, n.algorithm, n.maxNumber || n.maxnumber || ye()).promise
    };
  }
  async function Ui(n, u = typeof he() == "number" ? he() : n.maxNumber || n.maxnumber || ye(), g = Math.ceil(at())) {
    const b = [];
    g = Math.min(16, u, Math.max(1, g));
    for (let y = 0; y < g; y++)
      b.push(altchaCreateWorker(wt()));
    const _ = Math.ceil(u / g), R = await Promise.all(b.map((y, j) => {
      const E = j * _;
      return new Promise((B) => {
        y.addEventListener("message", (ie) => {
          if (ie.data)
            for (const Be of b)
              Be !== y && Be.postMessage({ type: "abort" });
          B(ie.data);
        }), y.postMessage({
          payload: n,
          max: E + _,
          start: E,
          type: "work"
        });
      });
    }));
    for (const y of b)
      y.terminate();
    return R.find((y) => !!y) || null;
  }
  async function Et() {
    if (!Q()) {
      Ce(x.ERROR);
      return;
    }
    const n = qe.find((u) => u.constructor.pluginName === "obfuscation");
    if (!n || !("clarify" in n)) {
      Ce(x.ERROR), N("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in n && typeof n.clarify == "function")
      return n.clarify();
  }
  function rn(n) {
    n.obfuscated !== void 0 && Q(n.obfuscated), n.auto !== void 0 && (r(n.auto), r() === "onload" && (Q() ? Et() : Ne())), n.blockspam !== void 0 && i(!!n.blockspam), n.customfetch !== void 0 && f(n.customfetch), n.floatinganchor !== void 0 && m(n.floatinganchor), n.delay !== void 0 && d(n.delay), n.floatingoffset !== void 0 && A(n.floatingoffset), n.floating !== void 0 && Qr(n.floating), n.expire !== void 0 && (cr(n.expire), v(n.expire)), n.challenge && (a(typeof n.challenge == "string" ? n.challenge : JSON.stringify(n.challenge)), en(o(sr))), n.challengeurl !== void 0 && l(n.challengeurl), n.debug !== void 0 && c(!!n.debug), n.hidefooter !== void 0 && F(!!n.hidefooter), n.hidelogo !== void 0 && se(!!n.hidelogo), n.language !== void 0 && lt(Ur([n.language])), n.maxnumber !== void 0 && ye(+n.maxnumber), n.mockerror !== void 0 && q(!!n.mockerror), n.name !== void 0 && ue(n.name), n.refetchonexpire !== void 0 && bt(!!n.refetchonexpire), n.sentinel !== void 0 && typeof n.sentinel == "object" && Ke(n.sentinel), n.spamfilter !== void 0 && xe(typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && lt(typeof n.strings == "string" ? n.strings : JSON.stringify(n.strings)), n.test !== void 0 && he(typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && fe(n.verifyurl), n.workers !== void 0 && at(+n.workers), n.workerurl !== void 0 && wt(n.workerurl);
  }
  function nn() {
    return {
      auto: r(),
      blockspam: i(),
      challengeurl: l(),
      debug: c(),
      delay: d(),
      expire: v(),
      floating: h(),
      floatinganchor: m(),
      floatingoffset: A(),
      hidefooter: F(),
      hidelogo: se(),
      name: ue(),
      maxnumber: ye(),
      mockerror: q(),
      obfuscated: Q(),
      refetchonexpire: bt(),
      spamfilter: xe(),
      strings: o(L),
      test: he(),
      verifyurl: fe(),
      workers: at(),
      workerurl: wt()
    };
  }
  function ln() {
    return o(ot);
  }
  function qi(n) {
    return qe.find((u) => u.constructor.pluginName === n);
  }
  function an() {
    return o(I);
  }
  function on() {
    o(ee).style.display = "none";
  }
  function Ct(n = 20) {
    var u;
    if (o(ee))
      if (o(ot) || w(ot, V((m() ? document.querySelector(m()) : (u = o(M)) == null ? void 0 : u.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || o(M))), o(ot)) {
        const g = parseInt(A(), 10) || 12, b = o(ot).getBoundingClientRect(), _ = o(ee).getBoundingClientRect(), R = document.documentElement.clientHeight, y = document.documentElement.clientWidth, j = h() === "auto" ? b.bottom + _.height + g + n > R : h() === "top", E = Math.max(n, Math.min(y - n - _.width, b.left + b.width / 2 - _.width / 2));
        if (j ? o(ee).style.top = `${b.top - (_.height + g)}px` : o(ee).style.top = `${b.bottom + g}px`, o(ee).style.left = `${E}px`, o(ee).setAttribute("data-floating", j ? "top" : "bottom"), o(xt)) {
          const B = o(xt).getBoundingClientRect();
          o(xt).style.left = b.left - E + b.width / 2 - B.width / 2 + "px";
        }
      } else
        N("unable to find floating anchor element");
  }
  function st(n = x.UNVERIFIED, u = null) {
    Ee && (clearTimeout(Ee), Ee = null), w(yt, !1), w($e, null), w(H, null), w(fr, !1), w(Y, null), Ce(n, u);
  }
  function sn(n) {
    w(ot, V(n));
  }
  function Ce(n, u = null) {
    w(I, V(n)), w(Xe, V(u)), Me("statechange", {
      payload: o($e),
      state: o(I)
    });
  }
  function dr() {
    o(ee).style.display = "block", h() && Ct();
  }
  async function Ne() {
    return st(x.VERIFYING), await new Promise((n) => setTimeout(n, d() || 0)), ki().then((n) => (en(n), N("challenge", n), tn(n))).then(({ data: n, solution: u }) => {
      var g;
      if (N("solution", u), !u || n && "challenge" in n && !("clearText" in u))
        if ((u == null ? void 0 : u.number) !== void 0 && "challenge" in n)
          if (fe() && "codeChallenge" in n)
            ((g = document.activeElement) == null ? void 0 : g.tagName) === "INPUT" && p() === !1 && document.activeElement.blur(), w(H, V({ challenge: n, solution: u }));
          else {
            if (fe() && Ke() !== void 0)
              return Xr(Pt(n, u));
            if (fe())
              return Mi(Pt(n, u));
            w($e, V(Pt(n, u))), N("payload", o($e));
          }
        else
          throw N("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      o(H) ? (Ce(x.CODE), br().then(() => {
        Me("code", { codeChallenge: o(H) });
      })) : (Ce(x.VERIFIED), N("verified"), br().then(() => {
        Me("verified", { payload: o($e) });
      }));
    }).catch((n) => {
      N(n), Ce(x.ERROR, n.message);
    });
  }
  var un = io(), fn = Rt(un);
  ba(fn, t, "default", {});
  var At = z(fn, 2), hr = W(At), Ot = W(hr);
  let cn;
  var dn = W(Ot);
  {
    var ji = (n) => {
      wr(n);
    };
    J(dn, (n) => {
      o(I) === x.VERIFYING && n(ji);
    });
  }
  var je = z(dn, 2);
  Nn(je), je.__change = [
    Ba,
    I,
    xe,
    M,
    yt,
    Q,
    Et,
    Ne
  ], Ut(je, (n) => w(ur, n), () => o(ur)), Z(Ot);
  var kt = z(Ot, 2), Bi = W(kt);
  {
    var Hi = (n) => {
      var u = Mt(), g = Rt(u);
      et(g, () => o(L).verified), U(n, u);
    }, Yi = (n, u) => {
      {
        var g = (_) => {
          var R = Mt(), y = Rt(R);
          et(y, () => o(L).verifying), U(_, R);
        }, b = (_, R) => {
          {
            var y = (E) => {
              var B = Mt(), ie = Rt(B);
              et(ie, () => o(L).verificationRequired), U(E, B);
            }, j = (E) => {
              var B = Mt(), ie = Rt(B);
              et(ie, () => o(L).label), U(E, B);
            };
            J(
              _,
              (E) => {
                o(I) === x.CODE ? E(y) : E(j, !1);
              },
              R
            );
          }
        };
        J(
          n,
          (_) => {
            o(I) === x.VERIFYING ? _(g) : _(b, !1);
          },
          u
        );
      }
    };
    J(Bi, (n) => {
      o(I) === x.VERIFIED ? n(Hi) : n(Yi, !1);
    });
  }
  Z(kt);
  var hn = z(kt, 2);
  {
    var Gi = (n) => {
      var u = Ya();
      Nn(u), Se(() => {
        $(u, "name", ue()), Aa(u, o($e));
      }), U(n, u);
    };
    J(hn, (n) => {
      o(I) === x.VERIFIED && n(Gi);
    });
  }
  var vn = z(hn, 2);
  {
    var Zi = (n) => {
      var u = Ga(), g = W(u);
      $(g, "href", Ei), Z(u), Se(() => $(g, "aria-label", o(L).ariaLinkLabel)), U(n, u);
    };
    J(vn, (n) => {
      (se() !== !0 || o(or)) && n(Zi);
    });
  }
  var Wi = z(vn, 2);
  {
    var zi = (n) => {
      var u = Xa(), g = z(W(u), 2), b = W(g), _ = z(b, 2);
      da(_, !p()), _.__keydown = [
        qa,
        zr
      ];
      var R = z(_, 2), y = W(R), j = W(y);
      {
        var E = (pe) => {
          var G = Ja();
          G.__click = zr;
          var Vt = W(G);
          {
            var It = (ut) => {
              wr(ut, () => 20);
            }, rl = (ut, nl) => {
              {
                var il = (ft) => {
                  var gr = Za();
                  U(ft, gr);
                }, ll = (ft, gr) => {
                  {
                    var al = (ct) => {
                      var pr = Wa();
                      U(ct, pr);
                    }, ol = (ct) => {
                      var pr = za();
                      U(ct, pr);
                    };
                    J(
                      ft,
                      (ct) => {
                        o(Y) === K.PLAYING ? ct(al) : ct(ol, !1);
                      },
                      gr
                    );
                  }
                };
                J(
                  ut,
                  (ft) => {
                    o(Y) === K.ERROR ? ft(il) : ft(ll, !1);
                  },
                  nl
                );
              }
            };
            J(Vt, (ut) => {
              o(Y) === K.LOADING ? ut(It) : ut(rl, !1);
            });
          }
          Z(G), Se(() => {
            $(G, "title", o(L).getAudioChallenge), G.disabled = o(Y) === K.LOADING || o(Y) === K.ERROR || o(Qe), $(G, "aria-label", o(Y) === K.LOADING ? o(L).loading : o(L).getAudioChallenge);
          }), U(pe, G);
        };
        J(j, (pe) => {
          o(H).challenge.codeChallenge.audio && pe(E);
        });
      }
      var B = z(j, 2);
      B.__click = [ja, Ne], Z(y);
      var ie = z(y, 2), Be = W(ie);
      {
        var vr = (pe) => {
          wr(pe, () => 16);
        };
        J(Be, (pe) => {
          o(Qe) && pe(vr);
        });
      }
      var Ft = z(Be);
      Z(ie), Z(R);
      var el = z(R, 2);
      {
        var tl = (pe) => {
          var G = Ka(), Vt = W(G);
          Z(G), Ut(G, (It) => w(Ue, It), () => o(Ue)), Se((It) => $(Vt, "src", It), [
            () => jr(o(H).challenge.codeChallenge.audio)
          ]), He("loadstart", G, Ti), He("canplay", G, Di), He("pause", G, Pi), He("playing", G, Li), He("ended", G, Ni), He("error", Vt, Si), U(pe, G);
        };
        J(el, (pe) => {
          o(H).challenge.codeChallenge.audio && o(fr) && pe(tl);
        });
      }
      Z(g), Z(u), Se(() => {
        $(u, "aria-label", o(L).verificationRequired), $(b, "src", o(H).challenge.codeChallenge.image), $(_, "minlength", o(H).challenge.codeChallenge.length || 1), $(_, "maxlength", o(H).challenge.codeChallenge.length), $(_, "placeholder", o(L).enterCode), $(_, "aria-label", o(Y) === K.LOADING ? o(L).loading : o(Y) === K.PLAYING ? "" : o(L).enterCodeAria), $(_, "aria-live", o(Y) ? "assertive" : "polite"), $(_, "aria-busy", o(Y) === K.LOADING), _.disabled = o(Qe), $(B, "aria-label", o(L).reload), $(B, "title", o(L).reload), B.disabled = o(Qe), ie.disabled = o(Qe), $(ie, "aria-label", o(L).verify), pa(Ft, ` ${o(L).verify ?? ""}`);
      }), He("submit", g, Oi, !0), U(n, u);
    };
    J(Wi, (n) => {
      var u;
      (u = o(H)) != null && u.challenge.codeChallenge && n(zi);
    });
  }
  Z(hr);
  var gn = z(hr, 2);
  {
    var Ji = (n) => {
      var u = to(), g = z(W(u), 2);
      {
        var b = (R) => {
          var y = Qa(), j = W(y);
          et(j, () => o(L).expired), Z(y), Se(() => $(y, "title", o(Xe))), U(R, y);
        }, _ = (R) => {
          var y = eo(), j = W(y);
          et(j, () => o(L).error), Z(y), Se(() => $(y, "title", o(Xe))), U(R, y);
        };
        J(g, (R) => {
          o(I) === x.EXPIRED ? R(b) : R(_, !1);
        });
      }
      Z(u), U(n, u);
    };
    J(gn, (n) => {
      (o(Xe) || o(I) === x.EXPIRED) && n(Ji);
    });
  }
  var pn = z(gn, 2);
  {
    var Ki = (n) => {
      var u = ro(), g = W(u), b = W(g);
      et(b, () => o(L).footer), Z(g), Z(u), U(n, u);
    };
    J(pn, (n) => {
      o(L).footer && (F() !== !0 || o(or)) && n(Ki);
    });
  }
  var Xi = z(pn, 2);
  {
    var Qi = (n) => {
      var u = no();
      Ut(u, (g) => w(xt, g), () => o(xt)), U(n, u);
    };
    J(Xi, (n) => {
      h() && n(Qi);
    });
  }
  return Z(At), Ut(At, (n) => w(ee, n), () => o(ee)), Se(
    (n) => {
      var u;
      $(At, "data-state", o(I)), $(At, "data-floating", h()), cn = xa(Ot, 1, "altcha-checkbox svelte-16ux7p0", null, cn, n), $(je, "id", o(Vr)), je.required = r() !== "onsubmit" && (!h() || r() !== "off"), $(je, "aria-hidden", o(I) === x.VERIFYING), $(kt, "for", o(Vr)), $(kt, "aria-hidden", !!((u = o(H)) != null && u.challenge.codeChallenge));
    },
    [
      () => ({
        "altcha-checkbox-verifying": o(I) === x.VERIFYING
      })
    ]
  ), He("invalid", je, Wr), Ia(je, () => o(yt), (n) => w(yt, n)), U(e, un), ci({
    clarify: Et,
    configure: rn,
    getConfiguration: nn,
    getFloatingAnchor: ln,
    getPlugin: qi,
    getState: an,
    hide: on,
    repositionFloating: Ct,
    reset: st,
    setFloatingAnchor: sn,
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
      return p();
    },
    set disableautofocus(n = !1) {
      p(n), C();
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
      return m();
    },
    set floatinganchor(n = void 0) {
      m(n), C();
    },
    get floatingoffset() {
      return A();
    },
    set floatingoffset(n = void 0) {
      A(n), C();
    },
    get floatingpersist() {
      return T();
    },
    set floatingpersist(n = !1) {
      T(n), C();
    },
    get hidefooter() {
      return F();
    },
    set hidefooter(n = !1) {
      F(n), C();
    },
    get hidelogo() {
      return se();
    },
    set hidelogo(n = !1) {
      se(n), C();
    },
    get id() {
      return ne();
    },
    set id(n = void 0) {
      ne(n), C();
    },
    get language() {
      return X();
    },
    set language(n = void 0) {
      X(n), C();
    },
    get name() {
      return ue();
    },
    set name(n = "altcha") {
      ue(n), C();
    },
    get maxnumber() {
      return ye();
    },
    set maxnumber(n = 1e6) {
      ye(n), C();
    },
    get mockerror() {
      return q();
    },
    set mockerror(n = !1) {
      q(n), C();
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
      return bt();
    },
    set refetchonexpire(n = !0) {
      bt(n), C();
    },
    get sentinel() {
      return Ke();
    },
    set sentinel(n = void 0) {
      Ke(n), C();
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
      return fe();
    },
    set verifyurl(n = void 0) {
      fe(n), C();
    },
    get workers() {
      return at();
    },
    set workers(n = Math.min(16, navigator.hardwareConcurrency || 8)) {
      at(n), C();
    },
    get workerurl() {
      return wt();
    },
    set workerurl(n = void 0) {
      wt(n), C();
    }
  });
}
ga(["change", "keydown", "click"]);
customElements.define("altcha-widget", Ta(
  ao,
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
  ao as Altcha
};
