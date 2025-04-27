var sl = Object.defineProperty;
var bn = (e) => {
  throw TypeError(e);
};
var ul = (e, t, r) => t in e ? sl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var me = (e, t, r) => ul(e, typeof t != "symbol" ? t + "" : t, r), wn = (e, t, r) => t.has(e) || bn("Cannot " + r);
var le = (e, t, r) => (wn(e, t, "read from private field"), r ? r.call(e) : t.get(e)), mr = (e, t, r) => t.has(e) ? bn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), pr = (e, t, r, i) => (wn(e, t, "write to private field"), i ? i.call(e, r) : t.set(e, r), r);
const fl = "5";
var Dn;
typeof window < "u" && ((Dn = window.__svelte ?? (window.__svelte = {})).v ?? (Dn.v = /* @__PURE__ */ new Set())).add(fl);
const cl = 1, dl = 4, hl = 8, vl = 16, gl = 1, _l = 2, Ar = "[", Ln = "[!", Pn = "]", vt = {}, ae = Symbol(), ml = "http://www.w3.org/1999/xhtml", yn = !1, be = 2, On = 4, Qt = 8, Ir = 16, Pe = 32, nt = 64, Bt = 128, ge = 256, Ht = 512, de = 1024, Oe = 2048, pt = 4096, gt = 8192, er = 16384, pl = 32768, Rr = 65536, bl = 1 << 19, Fn = 1 << 20, Nt = Symbol("$state"), Vn = Symbol("legacy props"), wl = Symbol("");
var Mn = Array.isArray, yl = Array.prototype.indexOf, El = Array.from, Yt = Object.keys, Gt = Object.defineProperty, tt = Object.getOwnPropertyDescriptor, kl = Object.getOwnPropertyDescriptors, Cl = Object.prototype, xl = Array.prototype, Un = Object.getPrototypeOf;
function qn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Al(e, t, r = !1) {
  return e === void 0 ? r ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
const Il = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let St = [], Tt = [];
function jn() {
  var e = St;
  St = [], qn(e);
}
function Bn() {
  var e = Tt;
  Tt = [], qn(e);
}
function tr(e) {
  St.length === 0 && queueMicrotask(jn), St.push(e);
}
function Rl(e) {
  Tt.length === 0 && Il(Bn), Tt.push(e);
}
function En() {
  St.length > 0 && jn(), Tt.length > 0 && Bn();
}
function Hn(e) {
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
function zl() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Sl(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Tl() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Dl() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Ll(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Pl() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ol() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Fl() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Vl() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Ml = !1;
function xe(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Hn,
    rv: 0,
    wv: 0
  };
  return r;
}
function oe(e) {
  return /* @__PURE__ */ Ul(xe(e));
}
// @__NO_SIDE_EFFECTS__
function Yn(e, t = !1) {
  const r = xe(e);
  return t || (r.equals = $r), r;
}
// @__NO_SIDE_EFFECTS__
function Ul(e) {
  return z !== null && !pe && (z.f & be) !== 0 && (Ae === null ? Zl([e]) : Ae.push(e)), e;
}
function w(e, t) {
  return z !== null && !pe && di() && (z.f & (be | Ir)) !== 0 && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (Ae === null || !Ae.includes(e)) && Vl(), ql(e, t);
}
function ql(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = ei(), Gn(e, Oe), S !== null && (S.f & de) !== 0 && (S.f & (Pe | nt)) === 0 && (Se === null ? Wl([e]) : Se.push(e))), t;
}
function Gn(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, l = 0; l < i; l++) {
      var o = r[l], s = o.f;
      (s & Oe) === 0 && (Re(o, t), (s & (de | ge)) !== 0 && ((s & be) !== 0 ? Gn(
        /** @type {Derived} */
        o,
        pt
      ) : lr(
        /** @type {Effect} */
        o
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function He(e) {
  var t = be | Oe, r = z !== null && (z.f & be) !== 0 ? (
    /** @type {Derived} */
    z
  ) : null;
  return S === null || r !== null && (r.f & ge) !== 0 ? t |= ge : S.f |= Fn, {
    ctx: re,
    deps: null,
    effects: null,
    equals: Hn,
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
function jl(e) {
  const t = /* @__PURE__ */ He(e);
  return t.equals = $r, t;
}
function Zn(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Le(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Bl(e) {
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
function Hl(e) {
  var t, r = S;
  We(Bl(e));
  try {
    Zn(e), t = ri(e);
  } finally {
    We(r);
  }
  return t;
}
function Wn(e) {
  var t = Hl(e), r = (Ye || (e.f & ge) !== 0) && e.deps !== null ? pt : de;
  Re(e, r), e.equals(t) || (e.v = t, e.wv = ei());
}
function rr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let P = !1;
function ht(e) {
  P = e;
}
let L;
function Ge(e) {
  if (e === null)
    throw rr(), vt;
  return L = e;
}
function _t() {
  return Ge(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Je(L)
  );
}
function G(e) {
  if (P) {
    if (/* @__PURE__ */ Je(L) !== null)
      throw rr(), vt;
    L = e;
  }
}
function Yl() {
  for (var e = 0, t = L; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === Pn) {
        if (e === 0) return t;
        e -= 1;
      } else (r === Ar || r === Ln) && (e += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Je(t)
    );
    t.remove(), t = i;
  }
}
function F(e, t = null, r) {
  if (typeof e != "object" || e === null || Nt in e)
    return e;
  const i = Un(e);
  if (i !== Cl && i !== xl)
    return e;
  var l = /* @__PURE__ */ new Map(), o = Mn(e), s = xe(0);
  o && l.set("length", xe(
    /** @type {any[]} */
    e.length
  ));
  var f;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(c, d, _) {
        (!("value" in _) || _.configurable === !1 || _.enumerable === !1 || _.writable === !1) && Pl();
        var v = l.get(d);
        return v === void 0 ? (v = xe(_.value), l.set(d, v)) : w(v, F(_.value, f)), !0;
      },
      deleteProperty(c, d) {
        var _ = l.get(d);
        if (_ === void 0)
          d in c && l.set(d, xe(ae));
        else {
          if (o && typeof d == "string") {
            var v = (
              /** @type {Source<number>} */
              l.get("length")
            ), h = Number(d);
            Number.isInteger(h) && h < v.v && w(v, h);
          }
          w(_, ae), kn(s);
        }
        return !0;
      },
      get(c, d, _) {
        var x;
        if (d === Nt)
          return e;
        var v = l.get(d), h = d in c;
        if (v === void 0 && (!h || (x = tt(c, d)) != null && x.writable) && (v = xe(F(h ? c[d] : ae, f)), l.set(d, v)), v !== void 0) {
          var p = a(v);
          return p === ae ? void 0 : p;
        }
        return Reflect.get(c, d, _);
      },
      getOwnPropertyDescriptor(c, d) {
        var _ = Reflect.getOwnPropertyDescriptor(c, d);
        if (_ && "value" in _) {
          var v = l.get(d);
          v && (_.value = a(v));
        } else if (_ === void 0) {
          var h = l.get(d), p = h == null ? void 0 : h.v;
          if (h !== void 0 && p !== ae)
            return {
              enumerable: !0,
              configurable: !0,
              value: p,
              writable: !0
            };
        }
        return _;
      },
      has(c, d) {
        var p;
        if (d === Nt)
          return !0;
        var _ = l.get(d), v = _ !== void 0 && _.v !== ae || Reflect.has(c, d);
        if (_ !== void 0 || S !== null && (!v || (p = tt(c, d)) != null && p.writable)) {
          _ === void 0 && (_ = xe(v ? F(c[d], f) : ae), l.set(d, _));
          var h = a(_);
          if (h === ae)
            return !1;
        }
        return v;
      },
      set(c, d, _, v) {
        var X;
        var h = l.get(d), p = d in c;
        if (o && d === "length")
          for (var x = _; x < /** @type {Source<number>} */
          h.v; x += 1) {
            var T = l.get(x + "");
            T !== void 0 ? w(T, ae) : x in c && (T = xe(ae), l.set(x + "", T));
          }
        h === void 0 ? (!p || (X = tt(c, d)) != null && X.writable) && (h = xe(void 0), w(h, F(_, f)), l.set(d, h)) : (p = h.v !== ae, w(h, F(_, f)));
        var O = Reflect.getOwnPropertyDescriptor(c, d);
        if (O != null && O.set && O.set.call(v, _), !p) {
          if (o && typeof d == "string") {
            var se = (
              /** @type {Source<number>} */
              l.get("length")
            ), ne = Number(d);
            Number.isInteger(ne) && ne >= se.v && w(se, ne + 1);
          }
          kn(s);
        }
        return !0;
      },
      ownKeys(c) {
        a(s);
        var d = Reflect.ownKeys(c).filter((h) => {
          var p = l.get(h);
          return p === void 0 || p.v !== ae;
        });
        for (var [_, v] of l)
          v.v !== ae && !(_ in c) && d.push(_);
        return d;
      },
      setPrototypeOf() {
        Ol();
      }
    }
  );
}
function kn(e, t = 1) {
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
function De(e) {
  return Kn.call(e);
}
// @__NO_SIDE_EFFECTS__
function Je(e) {
  return Xn.call(e);
}
function Z(e, t) {
  if (!P)
    return /* @__PURE__ */ De(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ De(L)
  );
  return r === null && (r = L.appendChild(nr())), Ge(r), r;
}
function Rt(e, t) {
  if (!P) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ De(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Je(r) : r;
  }
  return L;
}
function W(e, t = 1, r = !1) {
  let i = P ? L : e;
  for (var l; t--; )
    l = i, i = /** @type {TemplateNode} */
    /* @__PURE__ */ Je(i);
  if (!P)
    return i;
  var o = i == null ? void 0 : i.nodeType;
  if (r && o !== 3) {
    var s = nr();
    return i === null ? l == null || l.after(s) : i.before(s), Ge(s), s;
  }
  return Ge(i), /** @type {TemplateNode} */
  i;
}
function Gl(e) {
  e.textContent = "";
}
let qt = !1, Zt = !1, Wt = null, rt = !1, Nr = !1;
function xn(e) {
  Nr = e;
}
let zt = [];
let z = null, pe = !1;
function Ze(e) {
  z = e;
}
let S = null;
function We(e) {
  S = e;
}
let Ae = null;
function Zl(e) {
  Ae = e;
}
let te = null, ce = 0, Se = null;
function Wl(e) {
  Se = e;
}
let Qn = 1, Jt = 0, Ye = !1;
function ei() {
  return ++Qn;
}
function Dt(e) {
  var v;
  var t = e.f;
  if ((t & Oe) !== 0)
    return !0;
  if ((t & pt) !== 0) {
    var r = e.deps, i = (t & ge) !== 0;
    if (r !== null) {
      var l, o, s = (t & Ht) !== 0, f = i && S !== null && !Ye, c = r.length;
      if (s || f) {
        var d = (
          /** @type {Derived} */
          e
        ), _ = d.parent;
        for (l = 0; l < c; l++)
          o = r[l], (s || !((v = o == null ? void 0 : o.reactions) != null && v.includes(d))) && (o.reactions ?? (o.reactions = [])).push(d);
        s && (d.f ^= Ht), f && _ !== null && (_.f & ge) === 0 && (d.f ^= ge);
      }
      for (l = 0; l < c; l++)
        if (o = r[l], Dt(
          /** @type {Derived} */
          o
        ) && Wn(
          /** @type {Derived} */
          o
        ), o.wv > e.wv)
          return !0;
    }
    (!i || S !== null && !Ye) && Re(e, de);
  }
  return !1;
}
function Jl(e, t) {
  for (var r = t; r !== null; ) {
    if ((r.f & Bt) !== 0)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= Bt;
      }
    r = r.parent;
  }
  throw qt = !1, e;
}
function Kl(e) {
  return (e.f & er) === 0 && (e.parent === null || (e.parent.f & Bt) === 0);
}
function ir(e, t, r, i) {
  if (qt) {
    if (r === null && (qt = !1), Kl(t))
      throw e;
    return;
  }
  r !== null && (qt = !0);
  {
    Jl(e, t);
    return;
  }
}
function ti(e, t, r = !0) {
  var i = e.reactions;
  if (i !== null)
    for (var l = 0; l < i.length; l++) {
      var o = i[l];
      (o.f & be) !== 0 ? ti(
        /** @type {Derived} */
        o,
        t,
        !1
      ) : t === o && (r ? Re(o, Oe) : (o.f & de) !== 0 && Re(o, pt), lr(
        /** @type {Effect} */
        o
      ));
    }
}
function ri(e) {
  var p;
  var t = te, r = ce, i = Se, l = z, o = Ye, s = Ae, f = re, c = pe, d = e.f;
  te = /** @type {null | Value[]} */
  null, ce = 0, Se = null, Ye = (d & ge) !== 0 && (pe || !rt || z === null), z = (d & (Pe | nt)) === 0 ? e : null, Ae = null, In(e.ctx), pe = !1, Jt++;
  try {
    var _ = (
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
      if (!Ye)
        for (h = ce; h < v.length; h++)
          ((p = v[h]).reactions ?? (p.reactions = [])).push(e);
    } else v !== null && ce < v.length && (Kt(e, ce), v.length = ce);
    if (di() && Se !== null && !pe && v !== null && (e.f & (be | pt | Oe)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      Se.length; h++)
        ti(
          Se[h],
          /** @type {Effect} */
          e
        );
    return l !== null && Jt++, _;
  } finally {
    te = t, ce = r, Se = i, z = l, Ye = o, Ae = s, In(f), pe = c;
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
  (te === null || !te.includes(t)) && (Re(t, pt), (t.f & (ge | Ht)) === 0 && (t.f ^= Ht), Zn(
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
function zr(e) {
  var t = e.f;
  if ((t & er) === 0) {
    Re(e, de);
    var r = S, i = re, l = rt;
    S = e, rt = !0;
    try {
      (t & Ir) !== 0 ? so(e) : li(e), ii(e);
      var o = ri(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = Qn;
      var s = e.deps, f;
      yn && Ml && e.f & Oe;
    } catch (c) {
      ir(c, e, r, i || e.ctx);
    } finally {
      rt = l, S = r;
    }
  }
}
function Ql() {
  try {
    Tl();
  } catch (e) {
    if (Wt !== null)
      ir(e, Wt, null);
    else
      throw e;
  }
}
function ni() {
  var e = rt;
  try {
    var t = 0;
    for (rt = !0; zt.length > 0; ) {
      t++ > 1e3 && Ql();
      var r = zt, i = r.length;
      zt = [];
      for (var l = 0; l < i; l++) {
        var o = to(r[l]);
        eo(o);
      }
    }
  } finally {
    Zt = !1, rt = e, Wt = null;
  }
}
function eo(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var i = e[r];
      if ((i.f & (er | gt)) === 0)
        try {
          Dt(i) && (zr(i), i.deps === null && i.first === null && i.nodes_start === null && (i.teardown === null ? oi(i) : i.fn = null));
        } catch (l) {
          ir(l, i, null, i.ctx);
        }
    }
}
function lr(e) {
  Zt || (Zt = !0, queueMicrotask(ni));
  for (var t = Wt = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (nt | Pe)) !== 0) {
      if ((r & de) === 0) return;
      t.f ^= de;
    }
  }
  zt.push(t);
}
function to(e) {
  for (var t = [], r = e; r !== null; ) {
    var i = r.f, l = (i & (Pe | nt)) !== 0, o = l && (i & de) !== 0;
    if (!o && (i & gt) === 0) {
      if ((i & On) !== 0)
        t.push(r);
      else if (l)
        r.f ^= de;
      else {
        var s = z;
        try {
          z = r, Dt(r) && zr(r);
        } catch (d) {
          ir(d, r, null, r.ctx);
        } finally {
          z = s;
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
  for (En(); zt.length > 0; )
    Zt = !0, ni(), En();
  return (
    /** @type {T} */
    t
  );
}
async function br() {
  await Promise.resolve(), C();
}
function a(e) {
  var t = e.f, r = (t & be) !== 0;
  if (z !== null && !pe) {
    Ae !== null && Ae.includes(e) && Fl();
    var i = z.deps;
    e.rv < Jt && (e.rv = Jt, te === null && i !== null && i[ce] === e ? ce++ : te === null ? te = [e] : (!Ye || !te.includes(e)) && te.push(e));
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var l = (
      /** @type {Derived} */
      e
    ), o = l.parent;
    o !== null && (o.f & ge) === 0 && (l.f ^= ge);
  }
  return r && (l = /** @type {Derived} */
  e, Dt(l) && Wn(l)), e.v;
}
function mt(e) {
  var t = pe;
  try {
    return pe = !0, e();
  } finally {
    pe = t;
  }
}
const ro = -7169;
function Re(e, t) {
  e.f = e.f & ro | t;
}
function no(e) {
  S === null && z === null && Sl(), z !== null && (z.f & ge) !== 0 && S === null && zl(), Nr && Nl();
}
function io(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function it(e, t, r, i = !0) {
  var l = S, o = {
    ctx: re,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Oe,
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
      zr(o), o.f |= pl;
    } catch (c) {
      throw Le(o), c;
    }
  else t !== null && lr(o);
  var s = r && o.deps === null && o.first === null && o.nodes_start === null && o.teardown === null && (o.f & (Fn | Bt)) === 0;
  if (!s && i && (l !== null && io(o, l), z !== null && (z.f & be) !== 0)) {
    var f = (
      /** @type {Derived} */
      z
    );
    (f.effects ?? (f.effects = [])).push(o);
  }
  return o;
}
function lo(e) {
  const t = it(Qt, null, !1);
  return Re(t, de), t.teardown = e, t;
}
function Er(e) {
  no();
  var t = S !== null && (S.f & Pe) !== 0 && re !== null && !re.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      re
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: S,
      reaction: z
    });
  } else {
    var i = Sr(e);
    return i;
  }
}
function oo(e) {
  const t = it(nt, e, !0);
  return () => {
    Le(t);
  };
}
function ao(e) {
  const t = it(nt, e, !0);
  return (r = {}) => new Promise((i) => {
    r.outro ? kr(t, () => {
      Le(t), i(void 0);
    }) : (Le(t), i(void 0));
  });
}
function Sr(e) {
  return it(On, e, !1);
}
function Tr(e) {
  return it(Qt, e, !0);
}
function ze(e, t = [], r = He) {
  const i = t.map(r);
  return Dr(() => e(...i.map(a)));
}
function Dr(e, t = 0) {
  return it(Qt | Ir | t, e, !0);
}
function Xt(e, t = !0) {
  return it(Qt | Pe, e, !0, t);
}
function ii(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Nr, i = z;
    xn(!0), Ze(null);
    try {
      t.call(null);
    } finally {
      xn(r), Ze(i);
    }
  }
}
function li(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var i = r.next;
    (r.f & nt) !== 0 ? r.parent = null : Le(r, t), r = i;
  }
}
function so(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Pe) === 0 && Le(t), t = r;
  }
}
function Le(e, t = !0) {
  var r = !1;
  if ((t || (e.f & bl) !== 0) && e.nodes_start !== null) {
    for (var i = e.nodes_start, l = e.nodes_end; i !== null; ) {
      var o = i === l ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Je(i)
      );
      i.remove(), i = o;
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
  f !== null && f.first !== null && oi(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function oi(e) {
  var t = e.parent, r = e.prev, i = e.next;
  r !== null && (r.next = i), i !== null && (i.prev = r), t !== null && (t.first === e && (t.first = i), t.last === e && (t.last = r));
}
function kr(e, t) {
  var r = [];
  ai(e, r, !0), uo(r, () => {
    Le(e), t && t();
  });
}
function uo(e, t) {
  var r = e.length;
  if (r > 0) {
    var i = () => --r || t();
    for (var l of e)
      l.out(i);
  } else
    t();
}
function ai(e, t, r) {
  if ((e.f & gt) === 0) {
    if (e.f ^= gt, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || r) && t.push(s);
    for (var i = e.first; i !== null; ) {
      var l = i.next, o = (i.f & Rr) !== 0 || (i.f & Pe) !== 0;
      ai(i, t, o ? r : !1), i = l;
    }
  }
}
function An(e) {
  si(e, !0);
}
function si(e, t) {
  if ((e.f & gt) !== 0) {
    e.f ^= gt, (e.f & de) === 0 && (e.f ^= de), Dt(e) && (Re(e, Oe), lr(e));
    for (var r = e.first; r !== null; ) {
      var i = r.next, l = (r.f & Rr) !== 0 || (r.f & Pe) !== 0;
      si(r, l ? t : !1), r = i;
    }
    if (e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || t) && o.in();
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
      var r = S, i = z;
      t.e = null;
      try {
        for (var l = 0; l < s.length; l++) {
          var o = s[l];
          We(o.effect), Ze(o.reaction), Sr(o.fn);
        }
      } finally {
        We(r), Ze(i);
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
const fo = ["touchstart", "touchmove"];
function co(e) {
  return fo.includes(e);
}
function ho(e, t) {
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
  var t = z, r = S;
  Ze(null), We(null);
  try {
    return e();
  } finally {
    Ze(t), We(r);
  }
}
function vo(e, t, r, i = r) {
  e.addEventListener(t, () => vi(r));
  const l = e.__on_r;
  l ? e.__on_r = () => {
    l(), i(!0);
  } : e.__on_r = () => i(!0), hi();
}
const gi = /* @__PURE__ */ new Set(), Cr = /* @__PURE__ */ new Set();
function go(e, t, r, i = {}) {
  function l(o) {
    if (i.capture || $t.call(t, o), !o.cancelBubble)
      return vi(() => r == null ? void 0 : r.call(this, o));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? tr(() => {
    t.addEventListener(e, l, i);
  }) : t.addEventListener(e, l, i), l;
}
function Be(e, t, r, i, l) {
  var o = { capture: i, passive: l }, s = go(e, t, r, o);
  (t === document.body || t === window || t === document) && lo(() => {
    t.removeEventListener(e, s, o);
  });
}
function _o(e) {
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
  ), i = e.type, l = ((ne = e.composedPath) == null ? void 0 : ne.call(e)) || [], o = (
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
  if (o = /** @type {Element} */
  l[s] || e.target, o !== t) {
    Gt(e, "currentTarget", {
      configurable: !0,
      get() {
        return o || r;
      }
    });
    var _ = z, v = S;
    Ze(null), We(null);
    try {
      for (var h, p = []; o !== null; ) {
        var x = o.assignedSlot || o.parentNode || /** @type {any} */
        o.host || null;
        try {
          var T = o["__" + i];
          if (T != null && (!/** @type {any} */
          o.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === o))
            if (Mn(T)) {
              var [O, ...se] = T;
              O.apply(o, [e, ...se]);
            } else
              T.call(o, e);
        } catch (X) {
          h ? p.push(X) : h = X;
        }
        if (e.cancelBubble || x === t || x === null)
          break;
        o = x;
      }
      if (h) {
        for (let X of p)
          queueMicrotask(() => {
            throw X;
          });
        throw h;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Ze(_), We(v);
    }
  }
}
function Lr(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Ie(e, t) {
  var r = (
    /** @type {Effect} */
    S
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function we(e, t) {
  var r = (t & gl) !== 0, i = (t & _l) !== 0, l, o = !e.startsWith("<!>");
  return () => {
    if (P)
      return Ie(L, null), L;
    l === void 0 && (l = Lr(o ? e : "<!>" + e), r || (l = /** @type {Node} */
    /* @__PURE__ */ De(l)));
    var s = (
      /** @type {TemplateNode} */
      i || Jn ? document.importNode(l, !0) : l.cloneNode(!0)
    );
    if (r) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ De(s)
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
function or(e, t, r = "svg") {
  var i = !e.startsWith("<!>"), l = `<${r}>${i ? e : "<!>" + e}</${r}>`, o;
  return () => {
    if (P)
      return Ie(L, null), L;
    if (!o) {
      var s = (
        /** @type {DocumentFragment} */
        Lr(l)
      ), f = (
        /** @type {Element} */
        /* @__PURE__ */ De(s)
      );
      o = /** @type {Element} */
      /* @__PURE__ */ De(f);
    }
    var c = (
      /** @type {TemplateNode} */
      o.cloneNode(!0)
    );
    return Ie(c, c), c;
  };
}
function Vt() {
  if (P)
    return Ie(L, null), L;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = nr();
  return e.append(t, r), Ie(t, r), e;
}
function M(e, t) {
  if (P) {
    S.nodes_end = L, _t();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function mo(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function _i(e, t) {
  return mi(e, t);
}
function po(e, t) {
  yr(), t.intro = t.intro ?? !1;
  const r = t.target, i = P, l = L;
  try {
    for (var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ De(r)
    ); o && (o.nodeType !== 8 || /** @type {Comment} */
    o.data !== Ar); )
      o = /** @type {TemplateNode} */
      /* @__PURE__ */ Je(o);
    if (!o)
      throw vt;
    ht(!0), Ge(
      /** @type {Comment} */
      o
    ), _t();
    const s = mi(e, { ...t, anchor: o });
    if (L === null || L.nodeType !== 8 || /** @type {Comment} */
    L.data !== Pn)
      throw rr(), vt;
    return ht(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === vt)
      return t.recover === !1 && Dl(), yr(), Gl(r), ht(!1), _i(e, t);
    throw s;
  } finally {
    ht(i), Ge(l);
  }
}
const dt = /* @__PURE__ */ new Map();
function mi(e, { target: t, anchor: r, props: i = {}, events: l, context: o, intro: s = !0 }) {
  yr();
  var f = /* @__PURE__ */ new Set(), c = (v) => {
    for (var h = 0; h < v.length; h++) {
      var p = v[h];
      if (!f.has(p)) {
        f.add(p);
        var x = co(p);
        t.addEventListener(p, $t, { passive: x });
        var T = dt.get(p);
        T === void 0 ? (document.addEventListener(p, $t, { passive: x }), dt.set(p, 1)) : dt.set(p, T + 1);
      }
    }
  };
  c(El(gi)), Cr.add(c);
  var d = void 0, _ = ao(() => {
    var v = r ?? t.appendChild(nr());
    return Xt(() => {
      if (o) {
        fi({});
        var h = (
          /** @type {ComponentContext} */
          re
        );
        h.c = o;
      }
      l && (i.$$events = l), P && Ie(
        /** @type {TemplateNode} */
        v,
        null
      ), d = e(v, i) || {}, P && (S.nodes_end = L), o && ci();
    }), () => {
      var x;
      for (var h of f) {
        t.removeEventListener(h, $t);
        var p = (
          /** @type {number} */
          dt.get(h)
        );
        --p === 0 ? (document.removeEventListener(h, $t), dt.delete(h)) : dt.set(h, p);
      }
      Cr.delete(c), v !== r && ((x = v.parentNode) == null || x.removeChild(v));
    };
  });
  return xr.set(d, _), d;
}
let xr = /* @__PURE__ */ new WeakMap();
function bo(e, t) {
  const r = xr.get(e);
  return r ? (xr.delete(e), r(t)) : Promise.resolve();
}
function J(e, t, [r, i] = [0, 0]) {
  P && r === 0 && _t();
  var l = e, o = null, s = null, f = ae, c = r > 0 ? Rr : 0, d = !1;
  const _ = (h, p = !0) => {
    d = !0, v(p, h);
  }, v = (h, p) => {
    if (f === (f = h)) return;
    let x = !1;
    if (P && i !== -1) {
      if (r === 0) {
        const O = (
          /** @type {Comment} */
          l.data
        );
        O === Ar ? i = 0 : O === Ln ? i = 1 / 0 : (i = parseInt(O.substring(1)), i !== i && (i = f ? 1 / 0 : -1));
      }
      const T = i > r;
      !!f === T && (l = Yl(), Ge(l), ht(!1), x = !0, i = -1);
    }
    f ? (o ? An(o) : p && (o = Xt(() => p(l))), s && kr(s, () => {
      s = null;
    })) : (s ? An(s) : p && (s = Xt(() => p(l, [r + 1, i]))), o && kr(o, () => {
      o = null;
    })), x && ht(!0);
  };
  Dr(() => {
    d = !1, t(_), d || v(null, null);
  }, c), P && (l = L);
}
function et(e, t, r, i, l) {
  var o = e, s = "", f;
  Dr(() => {
    if (s === (s = t() ?? "")) {
      P && _t();
      return;
    }
    f !== void 0 && (Le(f), f = void 0), s !== "" && (f = Xt(() => {
      if (P) {
        L.data;
        for (var c = _t(), d = c; c !== null && (c.nodeType !== 8 || /** @type {Comment} */
        c.data !== ""); )
          d = c, c = /** @type {TemplateNode} */
          /* @__PURE__ */ Je(c);
        if (c === null)
          throw rr(), vt;
        Ie(L, d), o = Ge(c);
        return;
      }
      var _ = s + "", v = Lr(_);
      Ie(
        /** @type {TemplateNode} */
        /* @__PURE__ */ De(v),
        /** @type {TemplateNode} */
        v.lastChild
      ), o.before(v);
    }));
  });
}
function wo(e, t, r, i, l) {
  var f;
  P && _t();
  var o = (f = t.$$slots) == null ? void 0 : f[r], s = !1;
  o === !0 && (o = t.children, s = !0), o === void 0 || o(e, s ? () => i : i);
}
function yo(e, t) {
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
function Eo(e, t, r) {
  var i = "" + e;
  if (r) {
    for (var l in r)
      if (r[l])
        i = i ? i + " " + l : l;
      else if (i.length)
        for (var o = l.length, s = 0; (s = i.indexOf(l, s)) >= 0; ) {
          var f = s + o;
          (s === 0 || $n.includes(i[s - 1])) && (f === i.length || $n.includes(i[f])) ? i = (s === 0 ? "" : i.substring(0, s)) + i.substring(f + 1) : s = f;
        }
  }
  return i === "" ? null : i;
}
function ko(e, t, r, i, l, o) {
  var s = e.__className;
  if (P || s !== r) {
    var f = Eo(r, i, o);
    (!P || f !== e.getAttribute("class")) && (f == null ? e.removeAttribute("class") : e.className = f), e.__className = r;
  } else if (o && l !== o)
    for (var c in o) {
      var d = !!o[c];
      (l == null || d !== !!l[c]) && e.classList.toggle(c, d);
    }
  return o;
}
const Co = Symbol("is custom element"), xo = Symbol("is html");
function Nn(e) {
  if (P) {
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
function Ao(e, t) {
  var r = pi(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function $(e, t, r, i) {
  var l = pi(e);
  P && (l[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || l[t] !== (l[t] = r) && (t === "loading" && (e[wl] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Io(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function pi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Co]: e.nodeName.includes("-"),
      [xo]: e.namespaceURI === ml
    })
  );
}
var zn = /* @__PURE__ */ new Map();
function Io(e) {
  var t = zn.get(e.nodeName);
  if (t) return t;
  zn.set(e.nodeName, t = []);
  for (var r, i = e, l = Element.prototype; l !== i; ) {
    r = kl(i);
    for (var o in r)
      r[o].set && t.push(o);
    i = Un(i);
  }
  return t;
}
function Ro(e, t, r = t) {
  vo(e, "change", (i) => {
    var l = i ? e.defaultChecked : e.checked;
    r(l);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (P && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  mt(t) == null) && r(e.checked), Tr(() => {
    var i = t();
    e.checked = !!i;
  });
}
function Sn(e, t) {
  return e === t || (e == null ? void 0 : e[Nt]) === t;
}
function Mt(e = {}, t, r, i) {
  return Sr(() => {
    var l, o;
    return Tr(() => {
      l = o, o = [], mt(() => {
        e !== r(...o) && (t(e, ...o), l && Sn(r(...l), e) && t(null, ...l));
      });
    }), () => {
      tr(() => {
        o && Sn(r(...o), e) && t(null, ...o);
      });
    };
  }), e;
}
function bi(e) {
  re === null && ui(), Er(() => {
    const t = mt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function $o(e) {
  re === null && ui(), bi(() => () => mt(e));
}
let Ut = !1;
function No(e) {
  var t = Ut;
  try {
    return Ut = !1, [e(), Ut];
  } finally {
    Ut = t;
  }
}
function A(e, t, r, i) {
  var ye;
  var l = (r & cl) !== 0, o = !0, s = (r & hl) !== 0, f = (r & vl) !== 0, c = !1, d;
  s ? [d, c] = No(() => (
    /** @type {V} */
    e[t]
  )) : d = /** @type {V} */
  e[t];
  var _ = Nt in e || Vn in e, v = s && (((ye = tt(e, t)) == null ? void 0 : ye.set) ?? (_ && t in e && ((U) => e[t] = U))) || void 0, h = (
    /** @type {V} */
    i
  ), p = !0, x = !1, T = () => (x = !0, p && (p = !1, f ? h = mt(
    /** @type {() => V} */
    i
  ) : h = /** @type {V} */
  i), h);
  d === void 0 && i !== void 0 && (v && o && Ll(), d = T(), v && v(d));
  var O;
  if (O = () => {
    var U = (
      /** @type {V} */
      e[t]
    );
    return U === void 0 ? T() : (p = !0, x = !1, U);
  }, (r & dl) === 0)
    return O;
  if (v) {
    var se = e.$$legacy;
    return function(U, Q) {
      return arguments.length > 0 ? ((!Q || se || c) && v(Q ? O() : U), U) : O();
    };
  }
  var ne = !1, X = /* @__PURE__ */ Yn(d), ue = /* @__PURE__ */ He(() => {
    var U = O(), Q = a(X);
    return ne ? (ne = !1, Q) : X.v = U;
  });
  return l || (ue.equals = $r), function(U, Q) {
    if (arguments.length > 0) {
      const Fe = Q ? a(ue) : s ? F(U) : U;
      return ue.equals(Fe) || (ne = !0, w(X, Fe), x && h !== void 0 && (h = Fe), mt(() => a(ue))), U;
    }
    return a(ue);
  };
}
function zo(e) {
  return new So(e);
}
var Te, ve;
class So {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    mr(this, Te);
    /** @type {Record<string, any>} */
    mr(this, ve);
    var o;
    var r = /* @__PURE__ */ new Map(), i = (s, f) => {
      var c = /* @__PURE__ */ Yn(f);
      return r.set(s, c), c;
    };
    const l = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, f) {
          return a(r.get(f) ?? i(f, Reflect.get(s, f)));
        },
        has(s, f) {
          return f === Vn ? !0 : (a(r.get(f) ?? i(f, Reflect.get(s, f))), Reflect.has(s, f));
        },
        set(s, f, c) {
          return w(r.get(f) ?? i(f, c), c), Reflect.set(s, f, c);
        }
      }
    );
    pr(this, ve, (t.hydrate ? po : _i)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: l,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((o = t == null ? void 0 : t.props) != null && o.$$host) || t.sync === !1) && C(), pr(this, Te, l.$$events);
    for (const s of Object.keys(le(this, ve)))
      s === "$set" || s === "$destroy" || s === "$on" || Gt(this, s, {
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
      bo(le(this, ve));
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
    me(this, "$$ctor");
    /** Slots */
    me(this, "$$s");
    /** @type {any} The Svelte component instance */
    me(this, "$$c");
    /** Whether or not the custom element is connected */
    me(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    me(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    me(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    me(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    me(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    me(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    me(this, "$$me");
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
        return (o) => {
          const s = document.createElement("slot");
          l !== "default" && (s.name = l), M(o, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, i = To(this);
      for (const l of this.$$s)
        l in i && (l === "default" && !this.$$d.children ? (this.$$d.children = t(l), r.default = !0) : r[l] = t(l));
      for (const l of this.attributes) {
        const o = this.$$g_p(l.name);
        o in this.$$d || (this.$$d[o] = jt(o, l.value, this.$$p_d, "toProp"));
      }
      for (const l in this.$$p_d)
        !(l in this.$$d) && this[l] !== void 0 && (this.$$d[l] = this[l], delete this[l]);
      this.$$c = zo({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = oo(() => {
        Tr(() => {
          var l;
          this.$$r = !0;
          for (const o of Yt(this.$$c)) {
            if (!((l = this.$$p_d[o]) != null && l.reflect)) continue;
            this.$$d[o] = this.$$c[o];
            const s = jt(
              o,
              this.$$d[o],
              this.$$p_d,
              "toAttribute"
            );
            s == null ? this.removeAttribute(this.$$p_d[o].attribute || o) : this.setAttribute(this.$$p_d[o].attribute || o, s);
          }
          this.$$r = !1;
        });
      });
      for (const l in this.$$l)
        for (const o of this.$$l[l]) {
          const s = this.$$c.$on(l, o);
          this.$$l_u.set(o, s);
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = jt(t, i, this.$$p_d, "toProp"), (l = this.$$c) == null || l.$set({ [t]: this.$$d[t] }));
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
    return Yt(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function jt(e, t, r, i) {
  var o;
  const l = (o = r[e]) == null ? void 0 : o.type;
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
function To(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function Do(e, t, r, i, l, o) {
  let s = class extends wi {
    constructor() {
      super(e, r, l), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Yt(t).map(
        (f) => (t[f].attribute || f).toLowerCase()
      );
    }
  };
  return Yt(t).forEach((f) => {
    Gt(s.prototype, f, {
      get() {
        return this.$$c && f in this.$$c ? this.$$c[f] : this.$$d[f];
      },
      set(c) {
        var v;
        c = jt(f, c, t), this.$$d[f] = c;
        var d = this.$$c;
        if (d) {
          var _ = (v = tt(d, f)) == null ? void 0 : v.get;
          _ ? d[f] = c : d.$set({ [f]: c });
        }
      }
    });
  }), i.forEach((f) => {
    Gt(s.prototype, f, {
      get() {
        var c;
        return (c = this.$$c) == null ? void 0 : c[f];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
const yi = new TextEncoder();
function Lo(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function Po(e, t = "SHA-256", r = 1e5) {
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
  return Lo(
    await crypto.subtle.digest(
      r.toUpperCase(),
      yi.encode(e + t)
    )
  );
}
function Oo(e, t, r = "SHA-256", i = 1e6, l = 0) {
  const o = new AbortController(), s = Date.now();
  return {
    promise: (async () => {
      for (let c = l; c <= i; c += 1) {
        if (o.signal.aborted)
          return null;
        if (await Ei(t, c, r) === e)
          return {
            number: c,
            took: Date.now() - s
          };
      }
      return null;
    })(),
    controller: o
  };
}
function Tn() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function Fo(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let i = 0; i < t.length; i++)
    r[i] = t.charCodeAt(i);
  return r;
}
function Vo(e, t = 12) {
  const r = new Uint8Array(t);
  for (let i = 0; i < t; i++)
    r[i] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function Mo(e, t = "", r = 1e6, i = 0) {
  const l = "AES-GCM", o = new AbortController(), s = Date.now(), f = async () => {
    for (let _ = i; _ <= r; _ += 1) {
      if (o.signal.aborted || !c || !d)
        return null;
      try {
        const v = await crypto.subtle.decrypt(
          {
            name: l,
            iv: Vo(_)
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
    d = Fo(e);
    const _ = await crypto.subtle.digest(
      "SHA-256",
      yi.encode(t)
    );
    c = await crypto.subtle.importKey(
      "raw",
      _,
      l,
      !1,
      ["decrypt"]
    );
  } catch {
    return {
      promise: Promise.reject(),
      controller: o
    };
  }
  return {
    promise: f(),
    controller: o
  };
}
var E = /* @__PURE__ */ ((e) => (e.CODE = "code", e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(E || {}), K = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.LOADING = "loading", e.PLAYING = "playing", e.PAUSED = "paused", e.READY = "ready", e))(K || {});
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  register: (e, t) => {
    globalThis.altchaI18n[e] = t;
  }
};
const Uo = {
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
globalThis.altchaI18n.register("en", Uo);
const wr = (e, t) => {
  let r = /* @__PURE__ */ jl(() => Al(t == null ? void 0 : t(), 24));
  var i = Ho();
  ze(() => {
    $(i, "width", a(r)), $(i, "height", a(r));
  }), M(e, i);
};
function qo(e, t) {
  e.code === "Space" && (e.preventDefault(), e.stopImmediatePropagation(), t());
}
function jo(e, t) {
  e.preventDefault(), t();
}
function Bo(e, t, r, i, l, o, s, f) {
  var c;
  [
    E.UNVERIFIED,
    E.ERROR,
    E.EXPIRED,
    E.CODE
  ].includes(a(t)) ? r() !== !1 && ((c = a(i)) == null ? void 0 : c.reportValidity()) === !1 ? w(l, !1) : o() ? s() : f() : w(l, !0);
}
var Ho = /* @__PURE__ */ or('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="svelte-uo3tkz"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25" class="svelte-uo3tkz"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor" class="altcha-spinner svelte-uo3tkz"></path></svg>'), Yo = /* @__PURE__ */ we('<input type="hidden" class="svelte-uo3tkz">'), Go = /* @__PURE__ */ we('<div class="svelte-uo3tkz"><a target="_blank" class="altcha-logo svelte-uo3tkz" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-uo3tkz"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor" class="svelte-uo3tkz"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor" class="svelte-uo3tkz"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor" class="svelte-uo3tkz"></path></svg></a></div>'), Zo = /* @__PURE__ */ or('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-uo3tkz"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z" class="svelte-uo3tkz"></path></svg>'), Wo = /* @__PURE__ */ or('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-uo3tkz"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z" class="svelte-uo3tkz"></path></svg>'), Jo = /* @__PURE__ */ or('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-uo3tkz"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z" class="svelte-uo3tkz"></path></svg>'), Ko = /* @__PURE__ */ we('<button type="button" class="altcha-code-challenge-audio svelte-uo3tkz"><!></button>'), Xo = /* @__PURE__ */ we('<audio hidden autoplay class="svelte-uo3tkz"><source class="svelte-uo3tkz"></audio>'), Qo = /* @__PURE__ */ we('<div class="altcha-code-challenge svelte-uo3tkz" role="dialog"><div class="altcha-code-challenge-arrow svelte-uo3tkz"></div> <form data-code-challenge-form="1" class="svelte-uo3tkz"><img class="altcha-code-challenge-image svelte-uo3tkz" alt=""> <input type="text" autocomplete="off" name="code" class="altcha-code-challenge-input svelte-uo3tkz" required> <div class="altcha-code-challenge-buttons svelte-uo3tkz"><div class="altcha-code-challenge-buttons-left svelte-uo3tkz"><!> <button type="button" class="altcha-code-challenge-reload svelte-uo3tkz"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-uo3tkz"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z" class="svelte-uo3tkz"></path></svg></button></div> <button type="submit" class="altcha-code-challenge-verify svelte-uo3tkz"><!> </button></div> <!></form></div>'), ea = /* @__PURE__ */ we('<div class="svelte-uo3tkz"><!></div>'), ta = /* @__PURE__ */ we('<div class="svelte-uo3tkz"><!></div>'), ra = /* @__PURE__ */ we('<div class="altcha-error svelte-uo3tkz"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="svelte-uo3tkz"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" class="svelte-uo3tkz"></path></svg> <!></div>'), na = /* @__PURE__ */ we('<div class="altcha-footer svelte-uo3tkz"><div class="svelte-uo3tkz"><!></div></div>'), ia = /* @__PURE__ */ we('<div class="altcha-anchor-arrow svelte-uo3tkz"></div>'), la = /* @__PURE__ */ we('<!> <div class="altcha svelte-uo3tkz"><div class="altcha-main svelte-uo3tkz"><div><!> <input type="checkbox" class="svelte-uo3tkz"></div> <label class="altcha-label svelte-uo3tkz"><!></label> <!> <!> <!></div> <!> <!> <!></div>', 1);
const oa = {
  hash: "svelte-uo3tkz",
  code: `.altcha.svelte-uo3tkz {background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);position:relative;}.altcha.svelte-uo3tkz:focus-within {border-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating].svelte-uo3tkz {background:var(--altcha-color-base, white);display:none;filter:drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2));left:-100%;position:fixed;top:-100%;width:var(--altcha-max-width, 260px);z-index:999999;}.altcha[data-floating=top].svelte-uo3tkz .altcha-anchor-arrow:where(.svelte-uo3tkz) {border-bottom-color:transparent;border-top-color:var(--altcha-color-border, #a0a0a0);bottom:-12px;top:auto;}.altcha[data-floating=bottom].svelte-uo3tkz:focus-within::after {border-bottom-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating=top].svelte-uo3tkz:focus-within::after {border-top-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating].svelte-uo3tkz:not([data-state=unverified]) {display:block;}.altcha-anchor-arrow.svelte-uo3tkz {border:6px solid transparent;border-bottom-color:var(--altcha-color-border, #a0a0a0);content:"";height:0;left:12px;position:absolute;top:-12px;width:0;}.altcha-main.svelte-uo3tkz {align-items:center;display:flex;gap:0.4rem;padding:0.7rem;position:relative;}.altcha-code-challenge.svelte-uo3tkz {background:var(--altcha-color-base, white);border:1px solid var(--altcha-color-border-focus, currentColor);border-radius:var(--altcha-border-radius, 3px);filter:drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2));padding:0.5rem;position:absolute;top:2.5rem;z-index:9999999;}.altcha-code-challenge.svelte-uo3tkz > form:where(.svelte-uo3tkz) {display:flex;flex-direction:column;gap:0.5rem;}.altcha-code-challenge-input.svelte-uo3tkz {border:1px solid currentColor;border-radius:3px;box-sizing:border-box;outline:none;font-size:16px;padding:0.35rem;width:220px;}.altcha-code-challenge-input.svelte-uo3tkz:focus {outline:2px solid rgba(0, 0, 250, 0.2);}.altcha-code-challenge-input.svelte-uo3tkz:disabled {opacity:0.7;}.altcha-code-challenge-image.svelte-uo3tkz {border:1px solid currentColor;border-radius:3px;box-sizing:border-box;object-fit:contain;height:50px;width:220px;}.altcha-code-challenge-audio.svelte-uo3tkz,
.altcha-code-challenge-reload.svelte-uo3tkz {background:#efefef;border:0;border-radius:3px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0.35rem;}.altcha-code-challenge-audio.svelte-uo3tkz:disabled,
.altcha-code-challenge-reload.svelte-uo3tkz:disabled {opacity:0.7;pointer-events:none;}.altcha-code-challenge-audio.svelte-uo3tkz > :where(.svelte-uo3tkz),
.altcha-code-challenge-reload.svelte-uo3tkz > :where(.svelte-uo3tkz) {height:20px;width:20px;}.altcha-code-challenge-buttons.svelte-uo3tkz {display:flex;justify-content:space-between;}.altcha-code-challenge-buttons-left.svelte-uo3tkz {display:flex;gap:0.25rem;}.altcha-code-challenge-verify.svelte-uo3tkz {align-items:center;background:blue;border:0;border-radius:3px;color:white;cursor:pointer;display:flex;gap:0.5rem;font-size:100%;padding:0.35rem 1rem;}.altcha-code-challenge-verify.svelte-uo3tkz:disabled {opacity:0.7;pointer-events:none;}.altcha-code-challenge-arrow.svelte-uo3tkz {border:6px solid transparent;border-bottom-color:var(--altcha-color-border, currentColor);content:"";height:0;left:0.15rem;position:absolute;top:-12px;width:0;}.altcha[data-floating=top].svelte-uo3tkz .altcha-code-challenge:where(.svelte-uo3tkz) {top:-150px;}.altcha[data-floating=top].svelte-uo3tkz .altcha-code-challenge-arrow:where(.svelte-uo3tkz) {border-bottom-color:transparent;border-top-color:var(--altcha-color-border, currentColor);bottom:-12px;top:auto;}.altcha-label.svelte-uo3tkz {cursor:pointer;flex-grow:1;}.altcha-logo.svelte-uo3tkz {color:currentColor;opacity:0.7;}.altcha-logo.svelte-uo3tkz:hover {opacity:1;}.altcha-error.svelte-uo3tkz {color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem;}.altcha-footer.svelte-uo3tkz {align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.7;justify-content:end;padding:0.2rem 0.7rem;}.altcha-footer.svelte-uo3tkz:hover {opacity:1;}.altcha-footer.svelte-uo3tkz a {color:currentColor;}.altcha-checkbox.svelte-uo3tkz {display:flex;align-items:center;height:24px;width:24px;}.altcha-checkbox.svelte-uo3tkz input:where(.svelte-uo3tkz) {width:18px;height:18px;margin:0;}.altcha-checkbox-verifying.svelte-uo3tkz input:where(.svelte-uo3tkz) {appearance:none;pointer-events:none;height:0;width:0;}.altcha-spinner.svelte-uo3tkz {
  animation: svelte-uo3tkz-altcha-spinner 0.75s infinite linear;transform-origin:center;}

@keyframes svelte-uo3tkz-altcha-spinner {
  100% {
    transform: rotate(360deg);
  }
}`
};
function aa(e, t) {
  var mn, pn;
  fi(t, !0), yo(e, oa);
  let r = A(t, "auto", 7, void 0), i = A(t, "blockspam", 7, void 0), l = A(t, "challengeurl", 7, void 0), o = A(t, "challengejson", 7, void 0), s = A(t, "credentials", 7, void 0), f = A(t, "customfetch", 7, void 0), c = A(t, "debug", 7, !1), d = A(t, "delay", 7, 0), _ = A(t, "disableautofocus", 7, !1), v = A(t, "expire", 7, void 0), h = A(t, "floating", 7, void 0), p = A(t, "floatinganchor", 7, void 0), x = A(t, "floatingoffset", 7, void 0), T = A(t, "floatingpersist", 7, !1), O = A(t, "hidefooter", 7, !1), se = A(t, "hidelogo", 7, !1), ne = A(t, "id", 7, void 0), X = A(t, "language", 7, void 0), ue = A(t, "name", 7, "altcha"), ye = A(t, "maxnumber", 7, 1e6), U = A(t, "mockerror", 7, !1), Q = A(t, "obfuscated", 7, void 0), Fe = A(t, "plugins", 7, void 0), bt = A(t, "refetchonexpire", 7, !0), Ke = A(t, "sentinel", 7, void 0), Ee = A(t, "spamfilter", 7, !1), lt = A(t, "strings", 7, void 0), he = A(t, "test", 7, !1), fe = A(t, "verifyurl", 7, void 0), ot = A(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), wt = A(t, "workerurl", 7, void 0);
  const Pr = ["SHA-256", "SHA-384", "SHA-512"], ki = "https://altcha.org/", Ve = (n, u) => {
    t.$$host.dispatchEvent(new CustomEvent(n, { detail: u }));
  }, Or = (pn = (mn = document.documentElement.lang) == null ? void 0 : mn.split("-")) == null ? void 0 : pn[0], ar = /* @__PURE__ */ He(() => {
    var n;
    return l() && new URL(l(), location.origin).host.endsWith(".altcha.org") && !!((n = l()) != null && n.includes("apiKey=ckey_"));
  }), sr = /* @__PURE__ */ He(() => o() ? Kr(o()) : void 0), Ci = /* @__PURE__ */ He(() => lt() ? Kr(lt()) : {}), D = /* @__PURE__ */ He(() => ({
    ...Mr(),
    ...a(Ci)
  })), Fr = /* @__PURE__ */ He(() => ne() || `${ue()}_checkbox_${Math.round(Math.random() * 1e8)}`);
  let yt = oe(!1), B = oe(null), I = oe(F(E.UNVERIFIED)), ee = oe(void 0), Et = oe(null), Me = oe(null), ur = oe(null), at = oe(null), V = oe(null), Xe = oe(null), ke = null, H = oe(null), Qe = oe(!1), Ue = [], fr = oe(!1), $e = oe(null);
  Er(() => {
    Oi(a(Xe));
  }), Er(() => {
    Fi(a(I));
  }), $o(() => {
    xi(), a(V) && (a(V).removeEventListener("submit", Yr), a(V).removeEventListener("reset", Gr), a(V).removeEventListener("focusin", Hr), w(V, null)), ke && (clearTimeout(ke), ke = null), document.removeEventListener("click", jr), document.removeEventListener("scroll", Br), window.removeEventListener("resize", Jr);
  }), bi(() => {
    var n;
    N("mounted", "2.0.0-beta.3"), N("workers", ot()), $i(), N("plugins", Ue.length ? Ue.map((u) => u.constructor.pluginName).join(", ") : "none"), he() && N("using test mode"), v() && cr(v()), r() !== void 0 && N("auto", r()), h() !== void 0 && Qr(h()), w(V, F((n = a(ee)) == null ? void 0 : n.closest("form"))), a(V) && (a(V).addEventListener("submit", Yr, { capture: !0 }), a(V).addEventListener("reset", Gr), (r() === "onfocus" || T() === "focus") && a(V).addEventListener("focusin", Hr)), r() === "onload" && (Q() ? kt() : Ne()), a(ar) && (O() || se()) && N("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      Ve("load");
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
  function xi() {
    for (const n of Ue)
      n.destroy();
  }
  function Vr() {
    l() && bt() && a(I) === E.VERIFIED ? Ne() : st(E.EXPIRED, a(D).expired);
  }
  async function Ai() {
    var n;
    if (U())
      throw N("mocking error"), new Error("Mocked error.");
    if (a(sr))
      return N("using provided json data"), a(sr);
    if (he())
      return N("generating test challenge", { test: he() }), Po(typeof he() != "boolean" ? +he() : void 0);
    {
      if (!l() && a(V)) {
        const k = a(V).getAttribute("action");
        k != null && k.includes("/form/") && l(k + "/altcha");
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
        headers: Ee() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      };
      if (u) {
        if (g = await u(l(), b), !g || !(g instanceof Response))
          throw new Error("Custom fetch function did not return a response.");
      } else
        g = await fetch(l(), b);
      if (g.status !== 200)
        throw new Error(`Server responded with ${g.status}.`);
      const m = g.headers.get("X-Altcha-Config"), R = await g.json(), y = new URLSearchParams((n = R.salt.split("?")) == null ? void 0 : n[1]), q = y.get("expires") || y.get("expire");
      if (q) {
        const k = new Date(+q * 1e3), j = isNaN(k.getTime()) ? 0 : k.getTime() - Date.now();
        j > 0 && cr(j);
      }
      if (m)
        try {
          const k = JSON.parse(m);
          k && typeof k == "object" && (k.verifyurl && (k.verifyurl = qr(k.verifyurl)), rn(k));
        } catch (k) {
          N("unable to configure from X-Altcha-Config", k);
        }
      return R;
    }
  }
  function Ii(n) {
    var g, b;
    const u = (g = a(V)) == null ? void 0 : g.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((b = u == null ? void 0 : u.value) == null ? void 0 : b.slice(u.value.indexOf("@"))) || void 0;
  }
  function Mr(n = [
    X() || "",
    document.documentElement.lang || "",
    ...navigator.languages
  ]) {
    const u = Object.keys(globalThis.altchaI18n).map((b) => b.toLowerCase()), g = n.reduce(
      (b, m) => (m = m.toLowerCase(), b || (globalThis.altchaI18n[m] ? m : null) || u.find((R) => m.split("-")[0] === R.split("-")[0]) || null),
      null
    );
    return globalThis.altchaI18n[g || "en"];
  }
  function Ri() {
    return Ee() === "ipAddress" ? {
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
    } : typeof Ee() == "object" ? Ee() : {
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
  function Ur(n) {
    var g;
    return [
      ...((g = a(V)) == null ? void 0 : g.querySelectorAll(n != null && n.length ? n.map((b) => `input[name="${b}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (b, m) => {
        const R = m.name, y = m.value;
        return R && y && (b[R] = /\n/.test(y) ? y.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : y), b;
      },
      {}
    );
  }
  function qr(n) {
    const u = new URL(l() || location.origin), g = new URL(n, u);
    return g.search || (g.search = u.search), g.toString();
  }
  function $i() {
    const n = Fe() !== void 0 ? Fe().split(",") : void 0;
    for (const u of globalThis.altchaPlugins)
      (!n || n.includes(u.pluginName)) && Ue.push(new u({
        el: a(ee),
        clarify: kt,
        dispatch: Ve,
        getConfiguration: nn,
        getFloatingAnchor: ln,
        getState: on,
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
    w(H, F(K.PAUSED));
  }
  function zi(n) {
    w(H, F(K.ERROR));
  }
  function Si() {
    w(H, F(K.READY));
  }
  function Ti() {
    w(H, F(K.LOADING));
  }
  function Di() {
    w(H, F(K.PLAYING));
  }
  function Li() {
    w(H, F(K.PAUSED));
  }
  function Pi(n) {
    if (n.preventDefault(), n.stopPropagation(), a(B)) {
      const u = new FormData(n.target);
      w(Qe, !0), Xr(Lt(a(B).challenge, a(B).solution), String(u.get("code"))).then(({ reason: g, verified: b }) => {
        b ? (w(B, null), Ce(E.VERIFIED), N("verified"), br().then(() => {
          var m;
          (m = a(ur)) == null || m.focus(), Ve("verified", { payload: a($e) });
        })) : (st(), w(Xe, F(g || "Verification failed")));
      }).catch((g) => {
        w(B, null), Ce(E.ERROR, g), N("sentinel verification failed:", g);
      }).finally(() => {
        w(Qe, !1);
      });
    }
  }
  function jr(n) {
    var g;
    const u = n.target;
    h() && u && !a(ee).contains(u) && (a(I) === E.VERIFIED && T() === !1 || a(I) === E.VERIFIED && T() === "focus" && !((g = a(V)) != null && g.matches(":focus-within")) || r() === "off" && a(I) === E.UNVERIFIED) && an();
  }
  function Br() {
    h() && a(I) !== E.UNVERIFIED && Ct();
  }
  function Oi(n) {
    for (const u of Ue)
      typeof u.onErrorChange == "function" && u.onErrorChange(a(Xe));
  }
  function Hr(n) {
    a(I) === E.UNVERIFIED ? Ne() : h() && T() === "focus" && a(I) === E.VERIFIED && dr();
  }
  function Yr(n) {
    const u = n.target, g = n.submitter;
    u != null && u.hasAttribute("data-code-challenge-form") || (a(V) && r() === "onsubmit" ? a(I) === E.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), Ne().then(() => {
      var m;
      g && ["INPUT", "BUTTON"].includes(g.tagName) && g.getAttribute("name") ? g.click() : (m = a(V)) == null || m.requestSubmit();
    })) : a(I) !== E.VERIFIED && (n.preventDefault(), n.stopPropagation(), a(I) === E.VERIFYING && Zr()) : a(V) && h() && r() === "off" && a(I) === E.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), dr()));
  }
  function Gr() {
    st();
  }
  function Zr() {
    a(I) === E.VERIFYING && a(D).waitAlert && alert(a(D).waitAlert);
  }
  function Wr() {
    a(Me) ? a(Me).paused ? (a(Me).currentTime = 0, a(Me).play()) : a(Me).pause() : (w(fr, !0), requestAnimationFrame(() => {
      var n;
      (n = a(Me)) == null || n.play();
    }));
  }
  function Fi(n) {
    for (const u of Ue)
      typeof u.onStateChange == "function" && u.onStateChange(a(I));
    h() && a(I) !== E.UNVERIFIED && requestAnimationFrame(() => {
      Ct();
    }), w(yt, a(I) === E.VERIFIED);
  }
  function Jr() {
    h() && Ct();
  }
  function Kr(n) {
    return JSON.parse(n);
  }
  async function Vi(n) {
    if (!fe())
      throw new Error("Attribute verifyurl not set.");
    N("requesting server verification from", fe());
    const u = { payload: n };
    if (Ee() !== !1) {
      const {
        blockedCountries: m,
        classifier: R,
        disableRules: y,
        email: q,
        expectedLanguages: k,
        expectedCountries: j,
        fields: ie,
        ipAddress: je,
        text: vr,
        timeZone: Ot
      } = Ri();
      u.blockedCountries = m, u.classifier = R, u.disableRules = y, u.email = q === !1 ? void 0 : Ii(q), u.expectedCountries = j, u.expectedLanguages = k || (Or ? [Or] : void 0), u.fields = ie === !1 ? void 0 : Ur(ie), u.ipAddress = je === !1 ? void 0 : je || "auto", u.text = vr, u.timeZone = Ot === !1 ? void 0 : Ot || Tn();
    }
    const g = await fetch(fe(), {
      body: JSON.stringify(u),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (g.status !== 200)
      throw new Error(`Server responded with ${g.status}.`);
    const b = await g.json();
    if (b != null && b.payload && w($e, F(b.payload)), Ve("serververification", b), i() && b.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  async function Xr(n, u) {
    if (!fe())
      throw new Error("Attribute verifyurl not set.");
    N("requesting sentinel verification from", fe());
    const g = { code: u, payload: n };
    Ke() && (g.fields = Ke().fields ? Ur() : void 0, g.timeZone = Ke().timeZone ? Tn() : void 0);
    const b = await fetch(fe(), {
      body: JSON.stringify(g),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (b.status !== 200)
      throw new Error(`Server responded with ${b.status}.`);
    const m = await b.json();
    return m != null && m.payload && w($e, F(m.payload)), Ve("sentinelverification", m), m;
  }
  function cr(n) {
    N("expire", n), ke && (clearTimeout(ke), ke = null), n < 1 ? Vr() : ke = setTimeout(Vr, n);
  }
  function Qr(n) {
    N("floating", n), h() !== n && (a(ee).style.left = "", a(ee).style.top = ""), h(n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : h()), h() ? (r() || r("onsubmit"), document.addEventListener("scroll", Br), document.addEventListener("click", jr), window.addEventListener("resize", Jr)) : r() === "onsubmit" && r(void 0);
  }
  function en(n) {
    if (!n.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (n.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!Pr.includes(n.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${Pr.join(", ")}`);
    if (!n.challenge || n.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!n.salt || n.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function tn(n) {
    let u = null;
    if ("Worker" in window) {
      try {
        u = await Mi(n, n.maxNumber || n.maxnumber || ye());
      } catch (g) {
        N(g);
      }
      if ((u == null ? void 0 : u.number) !== void 0 || "obfuscated" in n)
        return { data: n, solution: u };
    }
    if ("obfuscated" in n) {
      const g = await Mo(n.obfuscated, n.key, n.maxNumber || n.maxnumber);
      return { data: n, solution: await g.promise };
    }
    return {
      data: n,
      solution: await Oo(n.challenge, n.salt, n.algorithm, n.maxNumber || n.maxnumber || ye()).promise
    };
  }
  async function Mi(n, u = typeof he() == "number" ? he() : n.maxNumber || n.maxnumber || ye(), g = Math.ceil(ot())) {
    const b = [];
    g = Math.min(16, u, Math.max(1, g));
    for (let y = 0; y < g; y++)
      b.push(altchaCreateWorker(wt()));
    const m = Math.ceil(u / g), R = await Promise.all(b.map((y, q) => {
      const k = q * m;
      return new Promise((j) => {
        y.addEventListener("message", (ie) => {
          if (ie.data)
            for (const je of b)
              je !== y && je.postMessage({ type: "abort" });
          j(ie.data);
        }), y.postMessage({
          payload: n,
          max: k + m,
          start: k,
          type: "work"
        });
      });
    }));
    for (const y of b)
      y.terminate();
    return R.find((y) => !!y) || null;
  }
  async function kt() {
    if (!Q()) {
      Ce(E.ERROR);
      return;
    }
    const n = Ue.find((u) => u.constructor.pluginName === "obfuscation");
    if (!n || !("clarify" in n)) {
      Ce(E.ERROR), N("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in n && typeof n.clarify == "function")
      return n.clarify();
  }
  function rn(n) {
    n.obfuscated !== void 0 && Q(n.obfuscated), n.auto !== void 0 && (r(n.auto), r() === "onload" && (Q() ? kt() : Ne())), n.blockspam !== void 0 && i(!!n.blockspam), n.customfetch !== void 0 && f(n.customfetch), n.floatinganchor !== void 0 && p(n.floatinganchor), n.delay !== void 0 && d(n.delay), n.floatingoffset !== void 0 && x(n.floatingoffset), n.floating !== void 0 && Qr(n.floating), n.expire !== void 0 && (cr(n.expire), v(n.expire)), n.challenge && (o(typeof n.challenge == "string" ? n.challenge : JSON.stringify(n.challenge)), en(a(sr))), n.challengeurl !== void 0 && l(n.challengeurl), n.debug !== void 0 && c(!!n.debug), n.hidefooter !== void 0 && O(!!n.hidefooter), n.hidelogo !== void 0 && se(!!n.hidelogo), n.language !== void 0 && lt(Mr([n.language])), n.maxnumber !== void 0 && ye(+n.maxnumber), n.mockerror !== void 0 && U(!!n.mockerror), n.name !== void 0 && ue(n.name), n.refetchonexpire !== void 0 && bt(!!n.refetchonexpire), n.sentinel !== void 0 && typeof n.sentinel == "object" && Ke(n.sentinel), n.spamfilter !== void 0 && Ee(typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && lt(typeof n.strings == "string" ? n.strings : JSON.stringify(n.strings)), n.test !== void 0 && he(typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && fe(n.verifyurl), n.workers !== void 0 && ot(+n.workers), n.workerurl !== void 0 && wt(n.workerurl);
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
      floatinganchor: p(),
      floatingoffset: x(),
      hidefooter: O(),
      hidelogo: se(),
      name: ue(),
      maxnumber: ye(),
      mockerror: U(),
      obfuscated: Q(),
      refetchonexpire: bt(),
      spamfilter: Ee(),
      strings: a(D),
      test: he(),
      verifyurl: fe(),
      workers: ot(),
      workerurl: wt()
    };
  }
  function ln() {
    return a(at);
  }
  function Ui(n) {
    return Ue.find((u) => u.constructor.pluginName === n);
  }
  function on() {
    return a(I);
  }
  function an() {
    a(ee).style.display = "none";
  }
  function Ct(n = 20) {
    var u;
    if (a(ee))
      if (a(at) || w(at, F((p() ? document.querySelector(p()) : (u = a(V)) == null ? void 0 : u.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || a(V))), a(at)) {
        const g = parseInt(x(), 10) || 12, b = a(at).getBoundingClientRect(), m = a(ee).getBoundingClientRect(), R = document.documentElement.clientHeight, y = document.documentElement.clientWidth, q = h() === "auto" ? b.bottom + m.height + g + n > R : h() === "top", k = Math.max(n, Math.min(y - n - m.width, b.left + b.width / 2 - m.width / 2));
        if (q ? a(ee).style.top = `${b.top - (m.height + g)}px` : a(ee).style.top = `${b.bottom + g}px`, a(ee).style.left = `${k}px`, a(ee).setAttribute("data-floating", q ? "top" : "bottom"), a(Et)) {
          const j = a(Et).getBoundingClientRect();
          a(Et).style.left = b.left - k + b.width / 2 - j.width / 2 + "px";
        }
      } else
        N("unable to find floating anchor element");
  }
  function st(n = E.UNVERIFIED, u = null) {
    ke && (clearTimeout(ke), ke = null), w(yt, !1), w($e, null), w(B, null), w(fr, !1), w(H, null), Ce(n, u);
  }
  function sn(n) {
    w(at, F(n));
  }
  function Ce(n, u = null) {
    w(I, F(n)), w(Xe, F(u)), Ve("statechange", {
      payload: a($e),
      state: a(I)
    });
  }
  function dr() {
    a(ee).style.display = "block", h() && Ct();
  }
  async function Ne() {
    return st(E.VERIFYING), await new Promise((n) => setTimeout(n, d() || 0)), Ai().then((n) => (en(n), N("challenge", n), tn(n))).then(({ data: n, solution: u }) => {
      var g;
      if (N("solution", u), !u || n && "challenge" in n && !("clearText" in u))
        if ((u == null ? void 0 : u.number) !== void 0 && "challenge" in n)
          if (fe() && "codeChallenge" in n)
            ((g = document.activeElement) == null ? void 0 : g.tagName) === "INPUT" && _() === !1 && document.activeElement.blur(), w(B, F({ challenge: n, solution: u }));
          else {
            if (fe() && Ke() !== void 0)
              return Xr(Lt(n, u));
            if (fe())
              return Vi(Lt(n, u));
            w($e, F(Lt(n, u))), N("payload", a($e));
          }
        else
          throw N("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      a(B) ? (Ce(E.CODE), br().then(() => {
        Ve("code", { codeChallenge: a(B) });
      })) : (Ce(E.VERIFIED), N("verified"), br().then(() => {
        Ve("verified", { payload: a($e) });
      }));
    }).catch((n) => {
      N(n), Ce(E.ERROR, n.message);
    });
  }
  var un = la(), fn = Rt(un);
  wo(fn, t, "default", {});
  var xt = W(fn, 2), hr = Z(xt), Pt = Z(hr);
  let cn;
  var dn = Z(Pt);
  {
    var qi = (n) => {
      wr(n);
    };
    J(dn, (n) => {
      a(I) === E.VERIFYING && n(qi);
    });
  }
  var qe = W(dn, 2);
  Nn(qe), qe.__change = [
    Bo,
    I,
    Ee,
    V,
    yt,
    Q,
    kt,
    Ne
  ], Mt(qe, (n) => w(ur, n), () => a(ur)), G(Pt);
  var At = W(Pt, 2), ji = Z(At);
  {
    var Bi = (n) => {
      var u = Vt(), g = Rt(u);
      et(g, () => a(D).verified), M(n, u);
    }, Hi = (n, u) => {
      {
        var g = (m) => {
          var R = Vt(), y = Rt(R);
          et(y, () => a(D).verifying), M(m, R);
        }, b = (m, R) => {
          {
            var y = (k) => {
              var j = Vt(), ie = Rt(j);
              et(ie, () => a(D).verificationRequired), M(k, j);
            }, q = (k) => {
              var j = Vt(), ie = Rt(j);
              et(ie, () => a(D).label), M(k, j);
            };
            J(
              m,
              (k) => {
                a(I) === E.CODE ? k(y) : k(q, !1);
              },
              R
            );
          }
        };
        J(
          n,
          (m) => {
            a(I) === E.VERIFYING ? m(g) : m(b, !1);
          },
          u
        );
      }
    };
    J(ji, (n) => {
      a(I) === E.VERIFIED ? n(Bi) : n(Hi, !1);
    });
  }
  G(At);
  var hn = W(At, 2);
  {
    var Yi = (n) => {
      var u = Yo();
      Nn(u), ze(() => {
        $(u, "name", ue()), Ao(u, a($e));
      }), M(n, u);
    };
    J(hn, (n) => {
      a(I) === E.VERIFIED && n(Yi);
    });
  }
  var vn = W(hn, 2);
  {
    var Gi = (n) => {
      var u = Go(), g = Z(u);
      $(g, "href", ki), G(u), ze(() => $(g, "aria-label", a(D).ariaLinkLabel)), M(n, u);
    };
    J(vn, (n) => {
      (se() !== !0 || a(ar)) && n(Gi);
    });
  }
  var Zi = W(vn, 2);
  {
    var Wi = (n) => {
      var u = Qo(), g = W(Z(u), 2), b = Z(g), m = W(b, 2);
      ho(m, !_()), m.__keydown = [
        qo,
        Wr
      ];
      var R = W(m, 2), y = Z(R), q = Z(y);
      {
        var k = (_e) => {
          var Y = Ko();
          Y.__click = Wr;
          var Ft = Z(Y);
          {
            var It = (ut) => {
              wr(ut, () => 20);
            }, rl = (ut, nl) => {
              {
                var il = (ft) => {
                  var gr = Zo();
                  M(ft, gr);
                }, ll = (ft, gr) => {
                  {
                    var ol = (ct) => {
                      var _r = Wo();
                      M(ct, _r);
                    }, al = (ct) => {
                      var _r = Jo();
                      M(ct, _r);
                    };
                    J(
                      ft,
                      (ct) => {
                        a(H) === K.PLAYING ? ct(ol) : ct(al, !1);
                      },
                      gr
                    );
                  }
                };
                J(
                  ut,
                  (ft) => {
                    a(H) === K.ERROR ? ft(il) : ft(ll, !1);
                  },
                  nl
                );
              }
            };
            J(Ft, (ut) => {
              a(H) === K.LOADING ? ut(It) : ut(rl, !1);
            });
          }
          G(Y), ze(() => {
            $(Y, "title", a(D).getAudioChallenge), Y.disabled = a(H) === K.LOADING || a(H) === K.ERROR || a(Qe), $(Y, "aria-label", a(H) === K.LOADING ? a(D).loading : a(D).getAudioChallenge);
          }), M(_e, Y);
        };
        J(q, (_e) => {
          a(B).challenge.codeChallenge.audio && _e(k);
        });
      }
      var j = W(q, 2);
      j.__click = [jo, Ne], G(y);
      var ie = W(y, 2), je = Z(ie);
      {
        var vr = (_e) => {
          wr(_e, () => 16);
        };
        J(je, (_e) => {
          a(Qe) && _e(vr);
        });
      }
      var Ot = W(je);
      G(ie), G(R);
      var el = W(R, 2);
      {
        var tl = (_e) => {
          var Y = Xo(), Ft = Z(Y);
          G(Y), Mt(Y, (It) => w(Me, It), () => a(Me)), ze((It) => $(Ft, "src", It), [
            () => qr(a(B).challenge.codeChallenge.audio)
          ]), Be("loadstart", Y, Ti), Be("canplay", Y, Si), Be("pause", Y, Li), Be("playing", Y, Di), Be("ended", Y, Ni), Be("error", Ft, zi), M(_e, Y);
        };
        J(el, (_e) => {
          a(B).challenge.codeChallenge.audio && a(fr) && _e(tl);
        });
      }
      G(g), G(u), ze(() => {
        $(u, "aria-label", a(D).verificationRequired), $(b, "src", a(B).challenge.codeChallenge.image), $(m, "minlength", a(B).challenge.codeChallenge.length || 1), $(m, "maxlength", a(B).challenge.codeChallenge.length), $(m, "placeholder", a(D).enterCode), $(m, "aria-label", a(H) === K.LOADING ? a(D).loading : a(H) === K.PLAYING ? "" : a(D).enterCodeAria), $(m, "aria-live", a(H) ? "assertive" : "polite"), $(m, "aria-busy", a(H) === K.LOADING), m.disabled = a(Qe), $(j, "aria-label", a(D).reload), $(j, "title", a(D).reload), j.disabled = a(Qe), ie.disabled = a(Qe), $(ie, "aria-label", a(D).verify), mo(Ot, ` ${a(D).verify ?? ""}`);
      }), Be("submit", g, Pi, !0), M(n, u);
    };
    J(Zi, (n) => {
      var u;
      (u = a(B)) != null && u.challenge.codeChallenge && n(Wi);
    });
  }
  G(hr);
  var gn = W(hr, 2);
  {
    var Ji = (n) => {
      var u = ra(), g = W(Z(u), 2);
      {
        var b = (R) => {
          var y = ea(), q = Z(y);
          et(q, () => a(D).expired), G(y), ze(() => $(y, "title", a(Xe))), M(R, y);
        }, m = (R) => {
          var y = ta(), q = Z(y);
          et(q, () => a(D).error), G(y), ze(() => $(y, "title", a(Xe))), M(R, y);
        };
        J(g, (R) => {
          a(I) === E.EXPIRED ? R(b) : R(m, !1);
        });
      }
      G(u), M(n, u);
    };
    J(gn, (n) => {
      (a(Xe) || a(I) === E.EXPIRED) && n(Ji);
    });
  }
  var _n = W(gn, 2);
  {
    var Ki = (n) => {
      var u = na(), g = Z(u), b = Z(g);
      et(b, () => a(D).footer), G(g), G(u), M(n, u);
    };
    J(_n, (n) => {
      a(D).footer && (O() !== !0 || a(ar)) && n(Ki);
    });
  }
  var Xi = W(_n, 2);
  {
    var Qi = (n) => {
      var u = ia();
      Mt(u, (g) => w(Et, g), () => a(Et)), M(n, u);
    };
    J(Xi, (n) => {
      h() && n(Qi);
    });
  }
  return G(xt), Mt(xt, (n) => w(ee, n), () => a(ee)), ze(
    (n) => {
      var u;
      $(xt, "data-state", a(I)), $(xt, "data-floating", h()), cn = ko(Pt, 1, "altcha-checkbox svelte-uo3tkz", null, cn, n), $(qe, "id", a(Fr)), qe.required = r() !== "onsubmit" && (!h() || r() !== "off"), $(qe, "aria-hidden", a(I) === E.VERIFYING), $(At, "for", a(Fr)), $(At, "aria-hidden", !!((u = a(B)) != null && u.challenge.codeChallenge));
    },
    [
      () => ({
        "altcha-checkbox-verifying": a(I) === E.VERIFYING
      })
    ]
  ), Be("invalid", qe, Zr), Ro(qe, () => a(yt), (n) => w(yt, n)), M(e, un), ci({
    clarify: kt,
    configure: rn,
    getConfiguration: nn,
    getFloatingAnchor: ln,
    getPlugin: Ui,
    getState: on,
    hide: an,
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
      return o();
    },
    set challengejson(n = void 0) {
      o(n), C();
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
      return _();
    },
    set disableautofocus(n = !1) {
      _(n), C();
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
      return x();
    },
    set floatingoffset(n = void 0) {
      x(n), C();
    },
    get floatingpersist() {
      return T();
    },
    set floatingpersist(n = !1) {
      T(n), C();
    },
    get hidefooter() {
      return O();
    },
    set hidefooter(n = !1) {
      O(n), C();
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
      return Fe();
    },
    set plugins(n = void 0) {
      Fe(n), C();
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
      return Ee();
    },
    set spamfilter(n = !1) {
      Ee(n), C();
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
      return ot();
    },
    set workers(n = Math.min(16, navigator.hardwareConcurrency || 8)) {
      ot(n), C();
    },
    get workerurl() {
      return wt();
    },
    set workerurl(n = void 0) {
      wt(n), C();
    }
  });
}
_o(["change", "keydown", "click"]);
customElements.define("altcha-widget", Do(
  aa,
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
  aa as Altcha
};
