var al = Object.defineProperty;
var pn = (e) => {
  throw TypeError(e);
};
var sl = (e, t, r) => t in e ? al(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var _e = (e, t, r) => sl(e, typeof t != "symbol" ? t + "" : t, r), bn = (e, t, r) => t.has(e) || pn("Cannot " + r);
var ie = (e, t, r) => (bn(e, t, "read from private field"), r ? r.call(e) : t.get(e)), _r = (e, t, r) => t.has(e) ? pn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), mr = (e, t, r, i) => (bn(e, t, "write to private field"), i ? i.call(e, r) : t.set(e, r), r);
const ul = "5";
var Tn;
typeof window < "u" && ((Tn = window.__svelte ?? (window.__svelte = {})).v ?? (Tn.v = /* @__PURE__ */ new Set())).add(ul);
const fl = 1, cl = 4, dl = 8, hl = 16, vl = 1, gl = 2, xr = "[", Dn = "[!", Ln = "]", vt = {}, oe = Symbol(), _l = "http://www.w3.org/1999/xhtml", wn = !1, pe = 2, Pn = 4, Xt = 8, Ar = 16, Pe = 32, nt = 64, jt = 128, he = 256, Bt = 512, fe = 1024, Oe = 2048, pt = 4096, gt = 8192, Qt = 16384, ml = 32768, Ir = 65536, pl = 1 << 19, On = 1 << 20, $t = Symbol("$state"), Fn = Symbol("legacy props"), bl = Symbol("");
var Vn = Array.isArray, wl = Array.prototype.indexOf, yl = Array.from, Ht = Object.keys, Yt = Object.defineProperty, tt = Object.getOwnPropertyDescriptor, El = Object.getOwnPropertyDescriptors, kl = Object.prototype, Cl = Array.prototype, Mn = Object.getPrototypeOf;
function Un(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function xl(e, t, r = !1) {
  return e === void 0 ? r ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
const Al = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let zt = [], St = [];
function qn() {
  var e = zt;
  zt = [], Un(e);
}
function jn() {
  var e = St;
  St = [], Un(e);
}
function er(e) {
  zt.length === 0 && queueMicrotask(qn), zt.push(e);
}
function Il(e) {
  St.length === 0 && Al(jn), St.push(e);
}
function yn() {
  zt.length > 0 && qn(), St.length > 0 && jn();
}
function Bn(e) {
  return e === this.v;
}
function Rl(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Rr(e) {
  return !Rl(e, this.v);
}
function $l(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Nl() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function zl(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Sl() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Tl() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Dl(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Ll() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Pl() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ol() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Fl() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Vl = !1;
function Ce(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Bn,
    rv: 0,
    wv: 0
  };
  return r;
}
function le(e) {
  return /* @__PURE__ */ Ml(Ce(e));
}
// @__NO_SIDE_EFFECTS__
function Hn(e, t = !1) {
  const r = Ce(e);
  return t || (r.equals = Rr), r;
}
// @__NO_SIDE_EFFECTS__
function Ml(e) {
  return z !== null && !me && (z.f & pe) !== 0 && (xe === null ? Gl([e]) : xe.push(e)), e;
}
function w(e, t) {
  return z !== null && !me && ci() && (z.f & (pe | Ar)) !== 0 && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (xe === null || !xe.includes(e)) && Fl(), Ul(e, t);
}
function Ul(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = Qn(), Yn(e, Oe), S !== null && (S.f & fe) !== 0 && (S.f & (Pe | nt)) === 0 && (Se === null ? Zl([e]) : Se.push(e))), t;
}
function Yn(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, l = 0; l < i; l++) {
      var o = r[l], s = o.f;
      (s & Oe) === 0 && (Ie(o, t), (s & (fe | he)) !== 0 && ((s & pe) !== 0 ? Yn(
        /** @type {Derived} */
        o,
        pt
      ) : ir(
        /** @type {Effect} */
        o
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function He(e) {
  var t = pe | Oe, r = z !== null && (z.f & pe) !== 0 ? (
    /** @type {Derived} */
    z
  ) : null;
  return S === null || r !== null && (r.f & he) !== 0 ? t |= he : S.f |= On, {
    ctx: te,
    deps: null,
    effects: null,
    equals: Bn,
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
function ql(e) {
  const t = /* @__PURE__ */ He(e);
  return t.equals = Rr, t;
}
function Gn(e) {
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
function jl(e) {
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
function Bl(e) {
  var t, r = S;
  We(jl(e));
  try {
    Gn(e), t = ti(e);
  } finally {
    We(r);
  }
  return t;
}
function Zn(e) {
  var t = Bl(e), r = (Ye || (e.f & he) !== 0) && e.deps !== null ? pt : fe;
  Ie(e, r), e.equals(t) || (e.v = t, e.wv = Qn());
}
function tr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let P = !1;
function ht(e) {
  P = e;
}
let L;
function Ge(e) {
  if (e === null)
    throw tr(), vt;
  return L = e;
}
function _t() {
  return Ge(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Je(L)
  );
}
function Z(e) {
  if (P) {
    if (/* @__PURE__ */ Je(L) !== null)
      throw tr(), vt;
    L = e;
  }
}
function Hl() {
  for (var e = 0, t = L; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === Ln) {
        if (e === 0) return t;
        e -= 1;
      } else (r === xr || r === Dn) && (e += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Je(t)
    );
    t.remove(), t = i;
  }
}
function F(e, t = null, r) {
  if (typeof e != "object" || e === null || $t in e)
    return e;
  const i = Mn(e);
  if (i !== kl && i !== Cl)
    return e;
  var l = /* @__PURE__ */ new Map(), o = Vn(e), s = Ce(0);
  o && l.set("length", Ce(
    /** @type {any[]} */
    e.length
  ));
  var f;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(c, d, _) {
        (!("value" in _) || _.configurable === !1 || _.enumerable === !1 || _.writable === !1) && Ll();
        var h = l.get(d);
        return h === void 0 ? (h = Ce(_.value), l.set(d, h)) : w(h, F(_.value, f)), !0;
      },
      deleteProperty(c, d) {
        var _ = l.get(d);
        if (_ === void 0)
          d in c && l.set(d, Ce(oe));
        else {
          if (o && typeof d == "string") {
            var h = (
              /** @type {Source<number>} */
              l.get("length")
            ), g = Number(d);
            Number.isInteger(g) && g < h.v && w(h, g);
          }
          w(_, oe), En(s);
        }
        return !0;
      },
      get(c, d, _) {
        var C;
        if (d === $t)
          return e;
        var h = l.get(d), g = d in c;
        if (h === void 0 && (!g || (C = tt(c, d)) != null && C.writable) && (h = Ce(F(g ? c[d] : oe, f)), l.set(d, h)), h !== void 0) {
          var p = a(h);
          return p === oe ? void 0 : p;
        }
        return Reflect.get(c, d, _);
      },
      getOwnPropertyDescriptor(c, d) {
        var _ = Reflect.getOwnPropertyDescriptor(c, d);
        if (_ && "value" in _) {
          var h = l.get(d);
          h && (_.value = a(h));
        } else if (_ === void 0) {
          var g = l.get(d), p = g == null ? void 0 : g.v;
          if (g !== void 0 && p !== oe)
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
        if (d === $t)
          return !0;
        var _ = l.get(d), h = _ !== void 0 && _.v !== oe || Reflect.has(c, d);
        if (_ !== void 0 || S !== null && (!h || (p = tt(c, d)) != null && p.writable)) {
          _ === void 0 && (_ = Ce(h ? F(c[d], f) : oe), l.set(d, _));
          var g = a(_);
          if (g === oe)
            return !1;
        }
        return h;
      },
      set(c, d, _, h) {
        var q;
        var g = l.get(d), p = d in c;
        if (o && d === "length")
          for (var C = _; C < /** @type {Source<number>} */
          g.v; C += 1) {
            var T = l.get(C + "");
            T !== void 0 ? w(T, oe) : C in c && (T = Ce(oe), l.set(C + "", T));
          }
        g === void 0 ? (!p || (q = tt(c, d)) != null && q.writable) && (g = Ce(void 0), w(g, F(_, f)), l.set(d, g)) : (p = g.v !== oe, w(g, F(_, f)));
        var O = Reflect.getOwnPropertyDescriptor(c, d);
        if (O != null && O.set && O.set.call(h, _), !p) {
          if (o && typeof d == "string") {
            var we = (
              /** @type {Source<number>} */
              l.get("length")
            ), re = Number(d);
            Number.isInteger(re) && re >= we.v && w(we, re + 1);
          }
          En(s);
        }
        return !0;
      },
      ownKeys(c) {
        a(s);
        var d = Reflect.ownKeys(c).filter((g) => {
          var p = l.get(g);
          return p === void 0 || p.v !== oe;
        });
        for (var [_, h] of l)
          h.v !== oe && !(_ in c) && d.push(_);
        return d;
      },
      setPrototypeOf() {
        Pl();
      }
    }
  );
}
function En(e, t = 1) {
  w(e, e.v + t);
}
var kn, Wn, Jn, Kn;
function wr() {
  if (kn === void 0) {
    kn = window, Wn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    Jn = tt(t, "firstChild").get, Kn = tt(t, "nextSibling").get, e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function rr(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function De(e) {
  return Jn.call(e);
}
// @__NO_SIDE_EFFECTS__
function Je(e) {
  return Kn.call(e);
}
function W(e, t) {
  if (!P)
    return /* @__PURE__ */ De(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ De(L)
  );
  return r === null && (r = L.appendChild(rr())), Ge(r), r;
}
function It(e, t) {
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
function J(e, t = 1, r = !1) {
  let i = P ? L : e;
  for (var l; t--; )
    l = i, i = /** @type {TemplateNode} */
    /* @__PURE__ */ Je(i);
  if (!P)
    return i;
  var o = i == null ? void 0 : i.nodeType;
  if (r && o !== 3) {
    var s = rr();
    return i === null ? l == null || l.after(s) : i.before(s), Ge(s), s;
  }
  return Ge(i), /** @type {TemplateNode} */
  i;
}
function Yl(e) {
  e.textContent = "";
}
let Ut = !1, Gt = !1, Zt = null, rt = !1, $r = !1;
function Cn(e) {
  $r = e;
}
let Nt = [];
let z = null, me = !1;
function Ze(e) {
  z = e;
}
let S = null;
function We(e) {
  S = e;
}
let xe = null;
function Gl(e) {
  xe = e;
}
let ee = null, ue = 0, Se = null;
function Zl(e) {
  Se = e;
}
let Xn = 1, Wt = 0, Ye = !1;
function Qn() {
  return ++Xn;
}
function Tt(e) {
  var h;
  var t = e.f;
  if ((t & Oe) !== 0)
    return !0;
  if ((t & pt) !== 0) {
    var r = e.deps, i = (t & he) !== 0;
    if (r !== null) {
      var l, o, s = (t & Bt) !== 0, f = i && S !== null && !Ye, c = r.length;
      if (s || f) {
        var d = (
          /** @type {Derived} */
          e
        ), _ = d.parent;
        for (l = 0; l < c; l++)
          o = r[l], (s || !((h = o == null ? void 0 : o.reactions) != null && h.includes(d))) && (o.reactions ?? (o.reactions = [])).push(d);
        s && (d.f ^= Bt), f && _ !== null && (_.f & he) === 0 && (d.f ^= he);
      }
      for (l = 0; l < c; l++)
        if (o = r[l], Tt(
          /** @type {Derived} */
          o
        ) && Zn(
          /** @type {Derived} */
          o
        ), o.wv > e.wv)
          return !0;
    }
    (!i || S !== null && !Ye) && Ie(e, fe);
  }
  return !1;
}
function Wl(e, t) {
  for (var r = t; r !== null; ) {
    if ((r.f & jt) !== 0)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= jt;
      }
    r = r.parent;
  }
  throw Ut = !1, e;
}
function Jl(e) {
  return (e.f & Qt) === 0 && (e.parent === null || (e.parent.f & jt) === 0);
}
function nr(e, t, r, i) {
  if (Ut) {
    if (r === null && (Ut = !1), Jl(t))
      throw e;
    return;
  }
  r !== null && (Ut = !0);
  {
    Wl(e, t);
    return;
  }
}
function ei(e, t, r = !0) {
  var i = e.reactions;
  if (i !== null)
    for (var l = 0; l < i.length; l++) {
      var o = i[l];
      (o.f & pe) !== 0 ? ei(
        /** @type {Derived} */
        o,
        t,
        !1
      ) : t === o && (r ? Ie(o, Oe) : (o.f & fe) !== 0 && Ie(o, pt), ir(
        /** @type {Effect} */
        o
      ));
    }
}
function ti(e) {
  var p;
  var t = ee, r = ue, i = Se, l = z, o = Ye, s = xe, f = te, c = me, d = e.f;
  ee = /** @type {null | Value[]} */
  null, ue = 0, Se = null, Ye = (d & he) !== 0 && (me || !rt || z === null), z = (d & (Pe | nt)) === 0 ? e : null, xe = null, An(e.ctx), me = !1, Wt++;
  try {
    var _ = (
      /** @type {Function} */
      (0, e.fn)()
    ), h = e.deps;
    if (ee !== null) {
      var g;
      if (Jt(e, ue), h !== null && ue > 0)
        for (h.length = ue + ee.length, g = 0; g < ee.length; g++)
          h[ue + g] = ee[g];
      else
        e.deps = h = ee;
      if (!Ye)
        for (g = ue; g < h.length; g++)
          ((p = h[g]).reactions ?? (p.reactions = [])).push(e);
    } else h !== null && ue < h.length && (Jt(e, ue), h.length = ue);
    if (ci() && Se !== null && !me && h !== null && (e.f & (pe | pt | Oe)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      Se.length; g++)
        ei(
          Se[g],
          /** @type {Effect} */
          e
        );
    return l !== null && Wt++, _;
  } finally {
    ee = t, ue = r, Se = i, z = l, Ye = o, xe = s, An(f), me = c;
  }
}
function Kl(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var i = wl.call(r, e);
    if (i !== -1) {
      var l = r.length - 1;
      l === 0 ? r = t.reactions = null : (r[i] = r[l], r.pop());
    }
  }
  r === null && (t.f & pe) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ee === null || !ee.includes(t)) && (Ie(t, pt), (t.f & (he | Bt)) === 0 && (t.f ^= Bt), Gn(
    /** @type {Derived} **/
    t
  ), Jt(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Jt(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var i = t; i < r.length; i++)
      Kl(e, r[i]);
}
function Nr(e) {
  var t = e.f;
  if ((t & Qt) === 0) {
    Ie(e, fe);
    var r = S, i = te, l = rt;
    S = e, rt = !0;
    try {
      (t & Ar) !== 0 ? ao(e) : ii(e), ni(e);
      var o = ti(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = Xn;
      var s = e.deps, f;
      wn && Vl && e.f & Oe;
    } catch (c) {
      nr(c, e, r, i || e.ctx);
    } finally {
      rt = l, S = r;
    }
  }
}
function Xl() {
  try {
    Sl();
  } catch (e) {
    if (Zt !== null)
      nr(e, Zt, null);
    else
      throw e;
  }
}
function ri() {
  var e = rt;
  try {
    var t = 0;
    for (rt = !0; Nt.length > 0; ) {
      t++ > 1e3 && Xl();
      var r = Nt, i = r.length;
      Nt = [];
      for (var l = 0; l < i; l++) {
        var o = eo(r[l]);
        Ql(o);
      }
    }
  } finally {
    Gt = !1, rt = e, Zt = null;
  }
}
function Ql(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var i = e[r];
      if ((i.f & (Qt | gt)) === 0)
        try {
          Tt(i) && (Nr(i), i.deps === null && i.first === null && i.nodes_start === null && (i.teardown === null ? li(i) : i.fn = null));
        } catch (l) {
          nr(l, i, null, i.ctx);
        }
    }
}
function ir(e) {
  Gt || (Gt = !0, queueMicrotask(ri));
  for (var t = Zt = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (nt | Pe)) !== 0) {
      if ((r & fe) === 0) return;
      t.f ^= fe;
    }
  }
  Nt.push(t);
}
function eo(e) {
  for (var t = [], r = e; r !== null; ) {
    var i = r.f, l = (i & (Pe | nt)) !== 0, o = l && (i & fe) !== 0;
    if (!o && (i & gt) === 0) {
      if ((i & Pn) !== 0)
        t.push(r);
      else if (l)
        r.f ^= fe;
      else {
        var s = z;
        try {
          z = r, Tt(r) && Nr(r);
        } catch (d) {
          nr(d, r, null, r.ctx);
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
function x(e) {
  var t;
  for (yn(); Nt.length > 0; )
    Gt = !0, ri(), yn();
  return (
    /** @type {T} */
    t
  );
}
async function pr() {
  await Promise.resolve(), x();
}
function a(e) {
  var t = e.f, r = (t & pe) !== 0;
  if (z !== null && !me) {
    xe !== null && xe.includes(e) && Ol();
    var i = z.deps;
    e.rv < Wt && (e.rv = Wt, ee === null && i !== null && i[ue] === e ? ue++ : ee === null ? ee = [e] : (!Ye || !ee.includes(e)) && ee.push(e));
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var l = (
      /** @type {Derived} */
      e
    ), o = l.parent;
    o !== null && (o.f & he) === 0 && (l.f ^= he);
  }
  return r && (l = /** @type {Derived} */
  e, Tt(l) && Zn(l)), e.v;
}
function mt(e) {
  var t = me;
  try {
    return me = !0, e();
  } finally {
    me = t;
  }
}
const to = -7169;
function Ie(e, t) {
  e.f = e.f & to | t;
}
function ro(e) {
  S === null && z === null && zl(), z !== null && (z.f & he) !== 0 && S === null && Nl(), $r && $l();
}
function no(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function it(e, t, r, i = !0) {
  var l = S, o = {
    ctx: te,
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
      Nr(o), o.f |= ml;
    } catch (c) {
      throw Le(o), c;
    }
  else t !== null && ir(o);
  var s = r && o.deps === null && o.first === null && o.nodes_start === null && o.teardown === null && (o.f & (On | jt)) === 0;
  if (!s && i && (l !== null && no(o, l), z !== null && (z.f & pe) !== 0)) {
    var f = (
      /** @type {Derived} */
      z
    );
    (f.effects ?? (f.effects = [])).push(o);
  }
  return o;
}
function io(e) {
  const t = it(Xt, null, !1);
  return Ie(t, fe), t.teardown = e, t;
}
function yr(e) {
  ro();
  var t = S !== null && (S.f & Pe) !== 0 && te !== null && !te.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      te
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: S,
      reaction: z
    });
  } else {
    var i = zr(e);
    return i;
  }
}
function lo(e) {
  const t = it(nt, e, !0);
  return () => {
    Le(t);
  };
}
function oo(e) {
  const t = it(nt, e, !0);
  return (r = {}) => new Promise((i) => {
    r.outro ? Er(t, () => {
      Le(t), i(void 0);
    }) : (Le(t), i(void 0));
  });
}
function zr(e) {
  return it(Pn, e, !1);
}
function Sr(e) {
  return it(Xt, e, !0);
}
function ze(e, t = [], r = He) {
  const i = t.map(r);
  return Tr(() => e(...i.map(a)));
}
function Tr(e, t = 0) {
  return it(Xt | Ar | t, e, !0);
}
function Kt(e, t = !0) {
  return it(Xt | Pe, e, !0, t);
}
function ni(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = $r, i = z;
    Cn(!0), Ze(null);
    try {
      t.call(null);
    } finally {
      Cn(r), Ze(i);
    }
  }
}
function ii(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var i = r.next;
    (r.f & nt) !== 0 ? r.parent = null : Le(r, t), r = i;
  }
}
function ao(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Pe) === 0 && Le(t), t = r;
  }
}
function Le(e, t = !0) {
  var r = !1;
  if ((t || (e.f & pl) !== 0) && e.nodes_start !== null) {
    for (var i = e.nodes_start, l = e.nodes_end; i !== null; ) {
      var o = i === l ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Je(i)
      );
      i.remove(), i = o;
    }
    r = !0;
  }
  ii(e, t && !r), Jt(e, 0), Ie(e, Qt);
  var s = e.transitions;
  if (s !== null)
    for (const c of s)
      c.stop();
  ni(e);
  var f = e.parent;
  f !== null && f.first !== null && li(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function li(e) {
  var t = e.parent, r = e.prev, i = e.next;
  r !== null && (r.next = i), i !== null && (i.prev = r), t !== null && (t.first === e && (t.first = i), t.last === e && (t.last = r));
}
function Er(e, t) {
  var r = [];
  oi(e, r, !0), so(r, () => {
    Le(e), t && t();
  });
}
function so(e, t) {
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
      var l = i.next, o = (i.f & Ir) !== 0 || (i.f & Pe) !== 0;
      oi(i, t, o ? r : !1), i = l;
    }
  }
}
function xn(e) {
  ai(e, !0);
}
function ai(e, t) {
  if ((e.f & gt) !== 0) {
    e.f ^= gt, (e.f & fe) === 0 && (e.f ^= fe), Tt(e) && (Ie(e, Oe), ir(e));
    for (var r = e.first; r !== null; ) {
      var i = r.next, l = (r.f & Ir) !== 0 || (r.f & Pe) !== 0;
      ai(r, l ? t : !1), r = i;
    }
    if (e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || t) && o.in();
  }
}
function si(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let te = null;
function An(e) {
  te = e;
}
function ui(e, t = !1, r) {
  te = {
    p: te,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
}
function fi(e) {
  const t = te;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var r = S, i = z;
      t.e = null;
      try {
        for (var l = 0; l < s.length; l++) {
          var o = s[l];
          We(o.effect), Ze(o.reaction), zr(o.fn);
        }
      } finally {
        We(r), Ze(i);
      }
    }
    te = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function ci() {
  return !0;
}
const uo = ["touchstart", "touchmove"];
function fo(e) {
  return uo.includes(e);
}
function co(e, t) {
  {
    const r = document.body;
    e.autofocus = !0, er(() => {
      document.activeElement === r && e.focus();
    });
  }
}
let In = !1;
function di() {
  In || (In = !0, document.addEventListener(
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
function hi(e) {
  var t = z, r = S;
  Ze(null), We(null);
  try {
    return e();
  } finally {
    Ze(t), We(r);
  }
}
function ho(e, t, r, i = r) {
  e.addEventListener(t, () => hi(r));
  const l = e.__on_r;
  l ? e.__on_r = () => {
    l(), i(!0);
  } : e.__on_r = () => i(!0), di();
}
const vi = /* @__PURE__ */ new Set(), kr = /* @__PURE__ */ new Set();
function vo(e, t, r, i = {}) {
  function l(o) {
    if (i.capture || Rt.call(t, o), !o.cancelBubble)
      return hi(() => r == null ? void 0 : r.call(this, o));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? er(() => {
    t.addEventListener(e, l, i);
  }) : t.addEventListener(e, l, i), l;
}
function Be(e, t, r, i, l) {
  var o = { capture: i, passive: l }, s = vo(e, t, r, o);
  (t === document.body || t === window || t === document) && io(() => {
    t.removeEventListener(e, s, o);
  });
}
function go(e) {
  for (var t = 0; t < e.length; t++)
    vi.add(e[t]);
  for (var r of kr)
    r(e);
}
function Rt(e) {
  var re;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), i = e.type, l = ((re = e.composedPath) == null ? void 0 : re.call(e)) || [], o = (
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
    Yt(e, "currentTarget", {
      configurable: !0,
      get() {
        return o || r;
      }
    });
    var _ = z, h = S;
    Ze(null), We(null);
    try {
      for (var g, p = []; o !== null; ) {
        var C = o.assignedSlot || o.parentNode || /** @type {any} */
        o.host || null;
        try {
          var T = o["__" + i];
          if (T != null && (!/** @type {any} */
          o.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === o))
            if (Vn(T)) {
              var [O, ...we] = T;
              O.apply(o, [e, ...we]);
            } else
              T.call(o, e);
        } catch (q) {
          g ? p.push(q) : g = q;
        }
        if (e.cancelBubble || C === t || C === null)
          break;
        o = C;
      }
      if (g) {
        for (let q of p)
          queueMicrotask(() => {
            throw q;
          });
        throw g;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Ze(_), We(h);
    }
  }
}
function Dr(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Ae(e, t) {
  var r = (
    /** @type {Effect} */
    S
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function be(e, t) {
  var r = (t & vl) !== 0, i = (t & gl) !== 0, l, o = !e.startsWith("<!>");
  return () => {
    if (P)
      return Ae(L, null), L;
    l === void 0 && (l = Dr(o ? e : "<!>" + e), r || (l = /** @type {Node} */
    /* @__PURE__ */ De(l)));
    var s = (
      /** @type {TemplateNode} */
      i || Wn ? document.importNode(l, !0) : l.cloneNode(!0)
    );
    if (r) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ De(s)
      ), c = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Ae(f, c);
    } else
      Ae(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function lr(e, t, r = "svg") {
  var i = !e.startsWith("<!>"), l = `<${r}>${i ? e : "<!>" + e}</${r}>`, o;
  return () => {
    if (P)
      return Ae(L, null), L;
    if (!o) {
      var s = (
        /** @type {DocumentFragment} */
        Dr(l)
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
    return Ae(c, c), c;
  };
}
function Ft() {
  if (P)
    return Ae(L, null), L;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = rr();
  return e.append(t, r), Ae(t, r), e;
}
function U(e, t) {
  if (P) {
    S.nodes_end = L, _t();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function _o(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function gi(e, t) {
  return _i(e, t);
}
function mo(e, t) {
  wr(), t.intro = t.intro ?? !1;
  const r = t.target, i = P, l = L;
  try {
    for (var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ De(r)
    ); o && (o.nodeType !== 8 || /** @type {Comment} */
    o.data !== xr); )
      o = /** @type {TemplateNode} */
      /* @__PURE__ */ Je(o);
    if (!o)
      throw vt;
    ht(!0), Ge(
      /** @type {Comment} */
      o
    ), _t();
    const s = _i(e, { ...t, anchor: o });
    if (L === null || L.nodeType !== 8 || /** @type {Comment} */
    L.data !== Ln)
      throw tr(), vt;
    return ht(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === vt)
      return t.recover === !1 && Tl(), wr(), Yl(r), ht(!1), gi(e, t);
    throw s;
  } finally {
    ht(i), Ge(l);
  }
}
const dt = /* @__PURE__ */ new Map();
function _i(e, { target: t, anchor: r, props: i = {}, events: l, context: o, intro: s = !0 }) {
  wr();
  var f = /* @__PURE__ */ new Set(), c = (h) => {
    for (var g = 0; g < h.length; g++) {
      var p = h[g];
      if (!f.has(p)) {
        f.add(p);
        var C = fo(p);
        t.addEventListener(p, Rt, { passive: C });
        var T = dt.get(p);
        T === void 0 ? (document.addEventListener(p, Rt, { passive: C }), dt.set(p, 1)) : dt.set(p, T + 1);
      }
    }
  };
  c(yl(vi)), kr.add(c);
  var d = void 0, _ = oo(() => {
    var h = r ?? t.appendChild(rr());
    return Kt(() => {
      if (o) {
        ui({});
        var g = (
          /** @type {ComponentContext} */
          te
        );
        g.c = o;
      }
      l && (i.$$events = l), P && Ae(
        /** @type {TemplateNode} */
        h,
        null
      ), d = e(h, i) || {}, P && (S.nodes_end = L), o && fi();
    }), () => {
      var C;
      for (var g of f) {
        t.removeEventListener(g, Rt);
        var p = (
          /** @type {number} */
          dt.get(g)
        );
        --p === 0 ? (document.removeEventListener(g, Rt), dt.delete(g)) : dt.set(g, p);
      }
      kr.delete(c), h !== r && ((C = h.parentNode) == null || C.removeChild(h));
    };
  });
  return Cr.set(d, _), d;
}
let Cr = /* @__PURE__ */ new WeakMap();
function po(e, t) {
  const r = Cr.get(e);
  return r ? (Cr.delete(e), r(t)) : Promise.resolve();
}
function K(e, t, [r, i] = [0, 0]) {
  P && r === 0 && _t();
  var l = e, o = null, s = null, f = oe, c = r > 0 ? Ir : 0, d = !1;
  const _ = (g, p = !0) => {
    d = !0, h(p, g);
  }, h = (g, p) => {
    if (f === (f = g)) return;
    let C = !1;
    if (P && i !== -1) {
      if (r === 0) {
        const O = (
          /** @type {Comment} */
          l.data
        );
        O === xr ? i = 0 : O === Dn ? i = 1 / 0 : (i = parseInt(O.substring(1)), i !== i && (i = f ? 1 / 0 : -1));
      }
      const T = i > r;
      !!f === T && (l = Hl(), Ge(l), ht(!1), C = !0, i = -1);
    }
    f ? (o ? xn(o) : p && (o = Kt(() => p(l))), s && Er(s, () => {
      s = null;
    })) : (s ? xn(s) : p && (s = Kt(() => p(l, [r + 1, i]))), o && Er(o, () => {
      o = null;
    })), C && ht(!0);
  };
  Tr(() => {
    d = !1, t(_), d || h(null, null);
  }, c), P && (l = L);
}
function et(e, t, r, i, l) {
  var o = e, s = "", f;
  Tr(() => {
    if (s === (s = t() ?? "")) {
      P && _t();
      return;
    }
    f !== void 0 && (Le(f), f = void 0), s !== "" && (f = Kt(() => {
      if (P) {
        L.data;
        for (var c = _t(), d = c; c !== null && (c.nodeType !== 8 || /** @type {Comment} */
        c.data !== ""); )
          d = c, c = /** @type {TemplateNode} */
          /* @__PURE__ */ Je(c);
        if (c === null)
          throw tr(), vt;
        Ae(L, d), o = Ge(c);
        return;
      }
      var _ = s + "", h = Dr(_);
      Ae(
        /** @type {TemplateNode} */
        /* @__PURE__ */ De(h),
        /** @type {TemplateNode} */
        h.lastChild
      ), o.before(h);
    }));
  });
}
function bo(e, t, r, i, l) {
  var f;
  P && _t();
  var o = (f = t.$$slots) == null ? void 0 : f[r], s = !1;
  o === !0 && (o = t.children, s = !0), o === void 0 || o(e, s ? () => i : i);
}
function wo(e, t) {
  er(() => {
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
const Rn = [...` 	
\r\f \v\uFEFF`];
function yo(e, t, r) {
  var i = "" + e;
  if (r) {
    for (var l in r)
      if (r[l])
        i = i ? i + " " + l : l;
      else if (i.length)
        for (var o = l.length, s = 0; (s = i.indexOf(l, s)) >= 0; ) {
          var f = s + o;
          (s === 0 || Rn.includes(i[s - 1])) && (f === i.length || Rn.includes(i[f])) ? i = (s === 0 ? "" : i.substring(0, s)) + i.substring(f + 1) : s = f;
        }
  }
  return i === "" ? null : i;
}
function Eo(e, t, r, i, l, o) {
  var s = e.__className;
  if (P || s !== r) {
    var f = yo(r, i, o);
    (!P || f !== e.getAttribute("class")) && (f == null ? e.removeAttribute("class") : e.className = f), e.__className = r;
  } else if (o && l !== o)
    for (var c in o) {
      var d = !!o[c];
      (l == null || d !== !!l[c]) && e.classList.toggle(c, d);
    }
  return o;
}
const ko = Symbol("is custom element"), Co = Symbol("is html");
function $n(e) {
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
    e.__on_r = r, Il(r), di();
  }
}
function xo(e, t) {
  var r = mi(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function $(e, t, r, i) {
  var l = mi(e);
  P && (l[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || l[t] !== (l[t] = r) && (t === "loading" && (e[bl] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Ao(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function mi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [ko]: e.nodeName.includes("-"),
      [Co]: e.namespaceURI === _l
    })
  );
}
var Nn = /* @__PURE__ */ new Map();
function Ao(e) {
  var t = Nn.get(e.nodeName);
  if (t) return t;
  Nn.set(e.nodeName, t = []);
  for (var r, i = e, l = Element.prototype; l !== i; ) {
    r = El(i);
    for (var o in r)
      r[o].set && t.push(o);
    i = Mn(i);
  }
  return t;
}
function Io(e, t, r = t) {
  ho(e, "change", (i) => {
    var l = i ? e.defaultChecked : e.checked;
    r(l);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (P && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  mt(t) == null) && r(e.checked), Sr(() => {
    var i = t();
    e.checked = !!i;
  });
}
function zn(e, t) {
  return e === t || (e == null ? void 0 : e[$t]) === t;
}
function Vt(e = {}, t, r, i) {
  return zr(() => {
    var l, o;
    return Sr(() => {
      l = o, o = [], mt(() => {
        e !== r(...o) && (t(e, ...o), l && zn(r(...l), e) && t(null, ...l));
      });
    }), () => {
      er(() => {
        o && zn(r(...o), e) && t(null, ...o);
      });
    };
  }), e;
}
function pi(e) {
  te === null && si(), yr(() => {
    const t = mt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Ro(e) {
  te === null && si(), pi(() => () => mt(e));
}
let Mt = !1;
function $o(e) {
  var t = Mt;
  try {
    return Mt = !1, [e(), Mt];
  } finally {
    Mt = t;
  }
}
function I(e, t, r, i) {
  var Fe;
  var l = (r & fl) !== 0, o = !0, s = (r & dl) !== 0, f = (r & hl) !== 0, c = !1, d;
  s ? [d, c] = $o(() => (
    /** @type {V} */
    e[t]
  )) : d = /** @type {V} */
  e[t];
  var _ = $t in e || Fn in e, h = s && (((Fe = tt(e, t)) == null ? void 0 : Fe.set) ?? (_ && t in e && ((V) => e[t] = V))) || void 0, g = (
    /** @type {V} */
    i
  ), p = !0, C = !1, T = () => (C = !0, p && (p = !1, f ? g = mt(
    /** @type {() => V} */
    i
  ) : g = /** @type {V} */
  i), g);
  d === void 0 && i !== void 0 && (h && o && Dl(), d = T(), h && h(d));
  var O;
  if (O = () => {
    var V = (
      /** @type {V} */
      e[t]
    );
    return V === void 0 ? T() : (p = !0, C = !1, V);
  }, (r & cl) === 0)
    return O;
  if (h) {
    var we = e.$$legacy;
    return function(V, ve) {
      return arguments.length > 0 ? ((!ve || we || c) && h(ve ? O() : V), V) : O();
    };
  }
  var re = !1, q = /* @__PURE__ */ Hn(d), ae = /* @__PURE__ */ He(() => {
    var V = O(), ve = a(q);
    return re ? (re = !1, ve) : q.v = V;
  });
  return l || (ae.equals = Rr), function(V, ve) {
    if (arguments.length > 0) {
      const Re = ve ? a(ae) : s ? F(V) : V;
      return ae.equals(Re) || (re = !0, w(q, Re), C && g !== void 0 && (g = Re), mt(() => a(ae))), V;
    }
    return a(ae);
  };
}
function No(e) {
  return new zo(e);
}
var Te, de;
class zo {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    _r(this, Te);
    /** @type {Record<string, any>} */
    _r(this, de);
    var o;
    var r = /* @__PURE__ */ new Map(), i = (s, f) => {
      var c = /* @__PURE__ */ Hn(f);
      return r.set(s, c), c;
    };
    const l = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, f) {
          return a(r.get(f) ?? i(f, Reflect.get(s, f)));
        },
        has(s, f) {
          return f === Fn ? !0 : (a(r.get(f) ?? i(f, Reflect.get(s, f))), Reflect.has(s, f));
        },
        set(s, f, c) {
          return w(r.get(f) ?? i(f, c), c), Reflect.set(s, f, c);
        }
      }
    );
    mr(this, de, (t.hydrate ? mo : gi)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: l,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((o = t == null ? void 0 : t.props) != null && o.$$host) || t.sync === !1) && x(), mr(this, Te, l.$$events);
    for (const s of Object.keys(ie(this, de)))
      s === "$set" || s === "$destroy" || s === "$on" || Yt(this, s, {
        get() {
          return ie(this, de)[s];
        },
        /** @param {any} value */
        set(f) {
          ie(this, de)[s] = f;
        },
        enumerable: !0
      });
    ie(this, de).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(l, s);
    }, ie(this, de).$destroy = () => {
      po(ie(this, de));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    ie(this, de).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    ie(this, Te)[t] = ie(this, Te)[t] || [];
    const i = (...l) => r.call(this, ...l);
    return ie(this, Te)[t].push(i), () => {
      ie(this, Te)[t] = ie(this, Te)[t].filter(
        /** @param {any} fn */
        (l) => l !== i
      );
    };
  }
  $destroy() {
    ie(this, de).$destroy();
  }
}
Te = new WeakMap(), de = new WeakMap();
let bi;
typeof HTMLElement == "function" && (bi = class extends HTMLElement {
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
        return (o) => {
          const s = document.createElement("slot");
          l !== "default" && (s.name = l), U(o, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, i = So(this);
      for (const l of this.$$s)
        l in i && (l === "default" && !this.$$d.children ? (this.$$d.children = t(l), r.default = !0) : r[l] = t(l));
      for (const l of this.attributes) {
        const o = this.$$g_p(l.name);
        o in this.$$d || (this.$$d[o] = qt(o, l.value, this.$$p_d, "toProp"));
      }
      for (const l in this.$$p_d)
        !(l in this.$$d) && this[l] !== void 0 && (this.$$d[l] = this[l], delete this[l]);
      this.$$c = No({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = lo(() => {
        Sr(() => {
          var l;
          this.$$r = !0;
          for (const o of Ht(this.$$c)) {
            if (!((l = this.$$p_d[o]) != null && l.reflect)) continue;
            this.$$d[o] = this.$$c[o];
            const s = qt(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = qt(t, i, this.$$p_d, "toProp"), (l = this.$$c) == null || l.$set({ [t]: this.$$d[t] }));
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
    return Ht(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function qt(e, t, r, i) {
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
function So(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function To(e, t, r, i, l, o) {
  let s = class extends bi {
    constructor() {
      super(e, r, l), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Ht(t).map(
        (f) => (t[f].attribute || f).toLowerCase()
      );
    }
  };
  return Ht(t).forEach((f) => {
    Yt(s.prototype, f, {
      get() {
        return this.$$c && f in this.$$c ? this.$$c[f] : this.$$d[f];
      },
      set(c) {
        var h;
        c = qt(f, c, t), this.$$d[f] = c;
        var d = this.$$c;
        if (d) {
          var _ = (h = tt(d, f)) == null ? void 0 : h.get;
          _ ? d[f] = c : d.$set({ [f]: c });
        }
      }
    });
  }), i.forEach((f) => {
    Yt(s.prototype, f, {
      get() {
        var c;
        return (c = this.$$c) == null ? void 0 : c[f];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
const wi = new TextEncoder();
function Do(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function Lo(e, t = "SHA-256", r = 1e5) {
  const i = Date.now().toString(16);
  e || (e = Math.round(Math.random() * r));
  const l = await yi(i, e, t);
  return {
    algorithm: t,
    challenge: l,
    salt: i,
    signature: ""
  };
}
async function yi(e, t, r) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return Do(
    await crypto.subtle.digest(
      r.toUpperCase(),
      wi.encode(e + t)
    )
  );
}
function Po(e, t, r = "SHA-256", i = 1e6, l = 0) {
  const o = new AbortController(), s = Date.now();
  return {
    promise: (async () => {
      for (let c = l; c <= i; c += 1) {
        if (o.signal.aborted)
          return null;
        if (await yi(t, c, r) === e)
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
function Sn() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function Oo(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let i = 0; i < t.length; i++)
    r[i] = t.charCodeAt(i);
  return r;
}
function Fo(e, t = 12) {
  const r = new Uint8Array(t);
  for (let i = 0; i < t; i++)
    r[i] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function Vo(e, t = "", r = 1e6, i = 0) {
  const l = "AES-GCM", o = new AbortController(), s = Date.now(), f = async () => {
    for (let _ = i; _ <= r; _ += 1) {
      if (o.signal.aborted || !c || !d)
        return null;
      try {
        const h = await crypto.subtle.decrypt(
          {
            name: l,
            iv: Fo(_)
          },
          c,
          d
        );
        if (h)
          return {
            clearText: new TextDecoder().decode(h),
            took: Date.now() - s
          };
      } catch {
      }
    }
    return null;
  };
  let c = null, d = null;
  try {
    d = Oo(e);
    const _ = await crypto.subtle.digest(
      "SHA-256",
      wi.encode(t)
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
var E = /* @__PURE__ */ ((e) => (e.CODE = "code", e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(E || {}), X = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.LOADING = "loading", e.PLAYING = "playing", e.PAUSED = "paused", e.READY = "ready", e))(X || {});
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  register: (e, t) => {
    globalThis.altchaI18n[e] = t;
  }
};
const Mo = {
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
globalThis.altchaI18n.register("en", Mo);
const br = (e, t) => {
  let r = /* @__PURE__ */ ql(() => xl(t == null ? void 0 : t(), 24));
  var i = Bo();
  ze(() => {
    $(i, "width", a(r)), $(i, "height", a(r));
  }), U(e, i);
};
function Uo(e, t) {
  e.code === "Space" && (e.preventDefault(), e.stopImmediatePropagation(), t());
}
function qo(e, t) {
  e.preventDefault(), t();
}
function jo(e, t, r, i, l, o, s, f) {
  var c;
  [
    E.UNVERIFIED,
    E.ERROR,
    E.EXPIRED,
    E.CODE
  ].includes(a(t)) ? r() !== !1 && ((c = a(i)) == null ? void 0 : c.reportValidity()) === !1 ? w(l, !1) : o() ? s() : f() : w(l, !0);
}
var Bo = /* @__PURE__ */ lr('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="svelte-uo3tkz"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25" class="svelte-uo3tkz"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor" class="altcha-spinner svelte-uo3tkz"></path></svg>'), Ho = /* @__PURE__ */ be('<input type="hidden" class="svelte-uo3tkz">'), Yo = /* @__PURE__ */ be('<div class="svelte-uo3tkz"><a target="_blank" class="altcha-logo svelte-uo3tkz" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-uo3tkz"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor" class="svelte-uo3tkz"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor" class="svelte-uo3tkz"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor" class="svelte-uo3tkz"></path></svg></a></div>'), Go = /* @__PURE__ */ lr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-uo3tkz"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z" class="svelte-uo3tkz"></path></svg>'), Zo = /* @__PURE__ */ lr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-uo3tkz"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z" class="svelte-uo3tkz"></path></svg>'), Wo = /* @__PURE__ */ lr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-uo3tkz"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z" class="svelte-uo3tkz"></path></svg>'), Jo = /* @__PURE__ */ be('<button type="button" class="altcha-code-challenge-audio svelte-uo3tkz"><!></button>'), Ko = /* @__PURE__ */ be('<audio hidden autoplay class="svelte-uo3tkz"><source class="svelte-uo3tkz"></audio>'), Xo = /* @__PURE__ */ be('<div class="altcha-code-challenge svelte-uo3tkz" role="dialog"><div class="altcha-code-challenge-arrow svelte-uo3tkz"></div> <form data-code-challenge-form="1" class="svelte-uo3tkz"><img class="altcha-code-challenge-image svelte-uo3tkz" alt=""> <input type="text" autocomplete="off" name="code" class="altcha-code-challenge-input svelte-uo3tkz" required> <div class="altcha-code-challenge-buttons svelte-uo3tkz"><div class="altcha-code-challenge-buttons-left svelte-uo3tkz"><!> <button type="button" class="altcha-code-challenge-reload svelte-uo3tkz"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-uo3tkz"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z" class="svelte-uo3tkz"></path></svg></button></div> <button type="submit" class="altcha-code-challenge-verify svelte-uo3tkz"><!> </button></div> <!></form></div>'), Qo = /* @__PURE__ */ be('<div class="svelte-uo3tkz"><!></div>'), ea = /* @__PURE__ */ be('<div class="svelte-uo3tkz"><!></div>'), ta = /* @__PURE__ */ be('<div class="altcha-error svelte-uo3tkz"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="svelte-uo3tkz"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" class="svelte-uo3tkz"></path></svg> <!></div>'), ra = /* @__PURE__ */ be('<div class="altcha-footer svelte-uo3tkz"><div class="svelte-uo3tkz"><!></div></div>'), na = /* @__PURE__ */ be('<div class="altcha-anchor-arrow svelte-uo3tkz"></div>'), ia = /* @__PURE__ */ be('<!> <div class="altcha svelte-uo3tkz"><div class="altcha-main svelte-uo3tkz"><div><!> <input type="checkbox" class="svelte-uo3tkz"></div> <label class="altcha-label svelte-uo3tkz"><!></label> <!> <!> <!></div> <!> <!> <!></div>', 1);
const la = {
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
function oa(e, t) {
  var _n, mn;
  ui(t, !0), wo(e, la);
  let r = I(t, "auto", 7, void 0), i = I(t, "blockspam", 7, void 0), l = I(t, "challengeurl", 7, void 0), o = I(t, "challengejson", 7, void 0), s = I(t, "credentials", 7, void 0), f = I(t, "customfetch", 7, void 0), c = I(t, "debug", 7, !1), d = I(t, "delay", 7, 0), _ = I(t, "expire", 7, void 0), h = I(t, "floating", 7, void 0), g = I(t, "floatinganchor", 7, void 0), p = I(t, "floatingoffset", 7, void 0), C = I(t, "floatingpersist", 7, !1), T = I(t, "hidefooter", 7, !1), O = I(t, "hidelogo", 7, !1), we = I(t, "id", 7, void 0), re = I(t, "language", 7, void 0), q = I(t, "name", 7, "altcha"), ae = I(t, "maxnumber", 7, 1e6), Fe = I(t, "mockerror", 7, !1), V = I(t, "obfuscated", 7, void 0), ve = I(t, "plugins", 7, void 0), Re = I(t, "refetchonexpire", 7, !0), Ke = I(t, "sentinel", 7, void 0), ye = I(t, "spamfilter", 7, !1), lt = I(t, "strings", 7, void 0), ce = I(t, "test", 7, !1), se = I(t, "verifyurl", 7, void 0), ot = I(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), bt = I(t, "workerurl", 7, void 0);
  const Lr = ["SHA-256", "SHA-384", "SHA-512"], Ei = "https://altcha.org/", Ve = (n, u) => {
    t.$$host.dispatchEvent(new CustomEvent(n, { detail: u }));
  }, Pr = (mn = (_n = document.documentElement.lang) == null ? void 0 : _n.split("-")) == null ? void 0 : mn[0], or = /* @__PURE__ */ He(() => {
    var n;
    return l() && new URL(l(), location.origin).host.endsWith(".altcha.org") && !!((n = l()) != null && n.includes("apiKey=ckey_"));
  }), ar = /* @__PURE__ */ He(() => o() ? Jr(o()) : void 0), ki = /* @__PURE__ */ He(() => lt() ? Jr(lt()) : {}), D = /* @__PURE__ */ He(() => ({
    ...Vr(),
    ...a(ki)
  })), Or = /* @__PURE__ */ He(() => we() || `${q()}_checkbox_${Math.round(Math.random() * 1e8)}`);
  let wt = le(!1), H = le(null), A = le(F(E.UNVERIFIED)), Q = le(void 0), yt = le(null), Me = le(null), sr = le(null), at = le(null), M = le(null), Xe = le(null), Ee = null, Y = le(null), Qe = le(!1), Ue = [], ur = le(!1), $e = le(null);
  yr(() => {
    Pi(a(Xe));
  }), yr(() => {
    Oi(a(A));
  }), Ro(() => {
    Ci(), a(M) && (a(M).removeEventListener("submit", Hr), a(M).removeEventListener("reset", Yr), a(M).removeEventListener("focusin", Br), w(M, null)), Ee && (clearTimeout(Ee), Ee = null), document.removeEventListener("click", qr), document.removeEventListener("scroll", jr), window.removeEventListener("resize", Wr);
  }), pi(() => {
    var n;
    N("mounted", "2.0.0-beta.1"), N("workers", ot()), Ri(), N("plugins", Ue.length ? Ue.map((u) => u.constructor.pluginName).join(", ") : "none"), ce() && N("using test mode"), _() && fr(_()), r() !== void 0 && N("auto", r()), h() !== void 0 && Xr(h()), w(M, F((n = a(Q)) == null ? void 0 : n.closest("form"))), a(M) && (a(M).addEventListener("submit", Hr, { capture: !0 }), a(M).addEventListener("reset", Yr), (r() === "onfocus" || C() === "focus") && a(M).addEventListener("focusin", Br)), r() === "onload" && (V() ? Et() : Ne()), a(or) && (T() || O()) && N("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      Ve("load");
    });
  });
  function Dt(n, u) {
    return btoa(JSON.stringify({
      algorithm: n.algorithm,
      challenge: n.challenge,
      number: u.number,
      salt: n.salt,
      signature: n.signature,
      test: ce() ? !0 : void 0,
      took: u.took
    }));
  }
  function Ci() {
    for (const n of Ue)
      n.destroy();
  }
  function Fr() {
    l() && Re() && a(A) === E.VERIFIED ? Ne() : st(E.EXPIRED, a(D).expired);
  }
  async function xi() {
    var n;
    if (Fe())
      throw N("mocking error"), new Error("Mocked error.");
    if (a(ar))
      return N("using provided json data"), a(ar);
    if (ce())
      return N("generating test challenge", { test: ce() }), Lo(typeof ce() != "boolean" ? +ce() : void 0);
    {
      if (!l() && a(M)) {
        const k = a(M).getAttribute("action");
        k != null && k.includes("/form/") && l(k + "/altcha");
      }
      if (!l())
        throw new Error("Attribute challengeurl not set.");
      N("fetching challenge from", l());
      let u = null, v = null;
      if (f())
        if (N("using customfetch"), typeof f() == "string") {
          if (u = globalThis[f()] || null, !u)
            throw new Error(`Custom fetch function not found: ${f()}`);
        } else
          u = f();
      const b = {
        credentials: typeof s() == "boolean" ? "include" : s(),
        headers: ye() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      };
      if (u) {
        if (v = await u(l(), b), !v || !(v instanceof Response))
          throw new Error("Custom fetch function did not return a response.");
      } else
        v = await fetch(l(), b);
      if (v.status !== 200)
        throw new Error(`Server responded with ${v.status}.`);
      const m = v.headers.get("X-Altcha-Config"), R = await v.json(), y = new URLSearchParams((n = R.salt.split("?")) == null ? void 0 : n[1]), j = y.get("expires") || y.get("expire");
      if (j) {
        const k = new Date(+j * 1e3), B = isNaN(k.getTime()) ? 0 : k.getTime() - Date.now();
        B > 0 && fr(B);
      }
      if (m)
        try {
          const k = JSON.parse(m);
          k && typeof k == "object" && (k.verifyurl && (k.verifyurl = Ur(k.verifyurl)), tn(k));
        } catch (k) {
          N("unable to configure from X-Altcha-Config", k);
        }
      return R;
    }
  }
  function Ai(n) {
    var v, b;
    const u = (v = a(M)) == null ? void 0 : v.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((b = u == null ? void 0 : u.value) == null ? void 0 : b.slice(u.value.indexOf("@"))) || void 0;
  }
  function Vr(n = [
    re() || "",
    document.documentElement.lang || "",
    ...navigator.languages
  ]) {
    const u = Object.keys(globalThis.altchaI18n).map((b) => b.toLowerCase()), v = n.reduce(
      (b, m) => (m = m.toLowerCase(), b || (globalThis.altchaI18n[m] ? m : null) || u.find((R) => m.split("-")[0] === R.split("-")[0]) || null),
      null
    );
    return globalThis.altchaI18n[v || "en"];
  }
  function Ii() {
    return ye() === "ipAddress" ? {
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
    } : typeof ye() == "object" ? ye() : {
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
  function Mr(n) {
    var v;
    return [
      ...((v = a(M)) == null ? void 0 : v.querySelectorAll(n != null && n.length ? n.map((b) => `input[name="${b}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (b, m) => {
        const R = m.name, y = m.value;
        return R && y && (b[R] = /\n/.test(y) ? y.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : y), b;
      },
      {}
    );
  }
  function Ur(n) {
    const u = new URL(l() || location.origin), v = new URL(n, u);
    return v.search || (v.search = u.search), v.toString();
  }
  function Ri() {
    const n = ve() !== void 0 ? ve().split(",") : void 0;
    for (const u of globalThis.altchaPlugins)
      (!n || n.includes(u.pluginName)) && Ue.push(new u({
        el: a(Q),
        clarify: Et,
        dispatch: Ve,
        getConfiguration: rn,
        getFloatingAnchor: nn,
        getState: ln,
        log: N,
        reset: st,
        solve: en,
        setState: ke,
        setFloatingAnchor: an,
        verify: Ne
      }));
  }
  function N(...n) {
    (c() || n.some((u) => u instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${q()}]`, ...n);
  }
  function $i() {
    w(Y, F(X.PAUSED));
  }
  function Ni(n) {
    w(Y, F(X.ERROR));
  }
  function zi() {
    w(Y, F(X.READY));
  }
  function Si() {
    w(Y, F(X.LOADING));
  }
  function Ti() {
    w(Y, F(X.PLAYING));
  }
  function Di() {
    w(Y, F(X.PAUSED));
  }
  function Li(n) {
    if (n.preventDefault(), n.stopPropagation(), a(H)) {
      const u = new FormData(n.target);
      w(Qe, !0), Kr(Dt(a(H).challenge, a(H).solution), String(u.get("code"))).then(({ reason: v, verified: b }) => {
        b ? (w(H, null), ke(E.VERIFIED), N("verified"), pr().then(() => {
          var m;
          (m = a(sr)) == null || m.focus(), Ve("verified", { payload: a($e) });
        })) : (st(), w(Xe, F(v || "Verification failed")));
      }).catch((v) => {
        w(H, null), ke(E.ERROR, v), N("sentinel verification failed:", v);
      }).finally(() => {
        w(Qe, !1);
      });
    }
  }
  function qr(n) {
    var v;
    const u = n.target;
    h() && u && !a(Q).contains(u) && (a(A) === E.VERIFIED && C() === !1 || a(A) === E.VERIFIED && C() === "focus" && !((v = a(M)) != null && v.matches(":focus-within")) || r() === "off" && a(A) === E.UNVERIFIED) && on();
  }
  function jr() {
    h() && a(A) !== E.UNVERIFIED && kt();
  }
  function Pi(n) {
    for (const u of Ue)
      typeof u.onErrorChange == "function" && u.onErrorChange(a(Xe));
  }
  function Br(n) {
    a(A) === E.UNVERIFIED ? Ne() : h() && C() === "focus" && a(A) === E.VERIFIED && cr();
  }
  function Hr(n) {
    const u = n.target, v = n.submitter;
    u != null && u.hasAttribute("data-code-challenge-form") || (a(M) && r() === "onsubmit" ? a(A) === E.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), Ne().then(() => {
      var m;
      v && ["INPUT", "BUTTON"].includes(v.tagName) && v.getAttribute("name") ? v.click() : (m = a(M)) == null || m.requestSubmit();
    })) : a(A) !== E.VERIFIED && (n.preventDefault(), n.stopPropagation(), a(A) === E.VERIFYING && Gr()) : a(M) && h() && r() === "off" && a(A) === E.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), cr()));
  }
  function Yr() {
    st();
  }
  function Gr() {
    a(A) === E.VERIFYING && a(D).waitAlert && alert(a(D).waitAlert);
  }
  function Zr() {
    a(Me) ? a(Me).paused ? (a(Me).currentTime = 0, a(Me).play()) : a(Me).pause() : (w(ur, !0), requestAnimationFrame(() => {
      var n;
      (n = a(Me)) == null || n.play();
    }));
  }
  function Oi(n) {
    for (const u of Ue)
      typeof u.onStateChange == "function" && u.onStateChange(a(A));
    h() && a(A) !== E.UNVERIFIED && requestAnimationFrame(() => {
      kt();
    }), w(wt, a(A) === E.VERIFIED);
  }
  function Wr() {
    h() && kt();
  }
  function Jr(n) {
    return JSON.parse(n);
  }
  async function Fi(n) {
    if (!se())
      throw new Error("Attribute verifyurl not set.");
    N("requesting server verification from", se());
    const u = { payload: n };
    if (ye() !== !1) {
      const {
        blockedCountries: m,
        classifier: R,
        disableRules: y,
        email: j,
        expectedLanguages: k,
        expectedCountries: B,
        fields: ne,
        ipAddress: je,
        text: hr,
        timeZone: Pt
      } = Ii();
      u.blockedCountries = m, u.classifier = R, u.disableRules = y, u.email = j === !1 ? void 0 : Ai(j), u.expectedCountries = B, u.expectedLanguages = k || (Pr ? [Pr] : void 0), u.fields = ne === !1 ? void 0 : Mr(ne), u.ipAddress = je === !1 ? void 0 : je || "auto", u.text = hr, u.timeZone = Pt === !1 ? void 0 : Pt || Sn();
    }
    const v = await fetch(se(), {
      body: JSON.stringify(u),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (v.status !== 200)
      throw new Error(`Server responded with ${v.status}.`);
    const b = await v.json();
    if (b != null && b.payload && w($e, F(b.payload)), Ve("serververification", b), i() && b.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  async function Kr(n, u) {
    if (!se())
      throw new Error("Attribute verifyurl not set.");
    N("requesting sentinel verification from", se());
    const v = { code: u, payload: n };
    Ke() && (v.fields = Ke().fields ? Mr() : void 0, v.timeZone = Ke().timeZone ? Sn() : void 0);
    const b = await fetch(se(), {
      body: JSON.stringify(v),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (b.status !== 200)
      throw new Error(`Server responded with ${b.status}.`);
    const m = await b.json();
    return m != null && m.payload && w($e, F(m.payload)), Ve("sentinelverification", m), m;
  }
  function fr(n) {
    N("expire", n), Ee && (clearTimeout(Ee), Ee = null), n < 1 ? Fr() : Ee = setTimeout(Fr, n);
  }
  function Xr(n) {
    N("floating", n), h() !== n && (a(Q).style.left = "", a(Q).style.top = ""), h(n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : h()), h() ? (r() || r("onsubmit"), document.addEventListener("scroll", jr), document.addEventListener("click", qr), window.addEventListener("resize", Wr)) : r() === "onsubmit" && r(void 0);
  }
  function Qr(n) {
    if (!n.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (n.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!Lr.includes(n.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${Lr.join(", ")}`);
    if (!n.challenge || n.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!n.salt || n.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function en(n) {
    let u = null;
    if ("Worker" in window) {
      try {
        u = await Vi(n, n.maxNumber || n.maxnumber || ae());
      } catch (v) {
        N(v);
      }
      if ((u == null ? void 0 : u.number) !== void 0 || "obfuscated" in n)
        return { data: n, solution: u };
    }
    if ("obfuscated" in n) {
      const v = await Vo(n.obfuscated, n.key, n.maxNumber || n.maxnumber);
      return { data: n, solution: await v.promise };
    }
    return {
      data: n,
      solution: await Po(n.challenge, n.salt, n.algorithm, n.maxNumber || n.maxnumber || ae()).promise
    };
  }
  async function Vi(n, u = typeof ce() == "number" ? ce() : n.maxNumber || n.maxnumber || ae(), v = Math.ceil(ot())) {
    const b = [];
    v = Math.min(16, u, Math.max(1, v));
    for (let y = 0; y < v; y++)
      b.push(altchaCreateWorker(bt()));
    const m = Math.ceil(u / v), R = await Promise.all(b.map((y, j) => {
      const k = j * m;
      return new Promise((B) => {
        y.addEventListener("message", (ne) => {
          if (ne.data)
            for (const je of b)
              je !== y && je.postMessage({ type: "abort" });
          B(ne.data);
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
  async function Et() {
    if (!V()) {
      ke(E.ERROR);
      return;
    }
    const n = Ue.find((u) => u.constructor.pluginName === "obfuscation");
    if (!n || !("clarify" in n)) {
      ke(E.ERROR), N("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in n && typeof n.clarify == "function")
      return n.clarify();
  }
  function tn(n) {
    n.obfuscated !== void 0 && V(n.obfuscated), n.auto !== void 0 && (r(n.auto), r() === "onload" && (V() ? Et() : Ne())), n.blockspam !== void 0 && i(!!n.blockspam), n.customfetch !== void 0 && f(n.customfetch), n.floatinganchor !== void 0 && g(n.floatinganchor), n.delay !== void 0 && d(n.delay), n.floatingoffset !== void 0 && p(n.floatingoffset), n.floating !== void 0 && Xr(n.floating), n.expire !== void 0 && (fr(n.expire), _(n.expire)), n.challenge && (o(typeof n.challenge == "string" ? n.challenge : JSON.stringify(n.challenge)), Qr(a(ar))), n.challengeurl !== void 0 && l(n.challengeurl), n.debug !== void 0 && c(!!n.debug), n.hidefooter !== void 0 && T(!!n.hidefooter), n.hidelogo !== void 0 && O(!!n.hidelogo), n.language !== void 0 && lt(Vr([n.language])), n.maxnumber !== void 0 && ae(+n.maxnumber), n.mockerror !== void 0 && Fe(!!n.mockerror), n.name !== void 0 && q(n.name), n.refetchonexpire !== void 0 && Re(!!n.refetchonexpire), n.sentinel !== void 0 && typeof n.sentinel == "object" && Ke(n.sentinel), n.spamfilter !== void 0 && ye(typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && lt(typeof n.strings == "string" ? n.strings : JSON.stringify(n.strings)), n.test !== void 0 && ce(typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && se(n.verifyurl), n.workers !== void 0 && ot(+n.workers), n.workerurl !== void 0 && bt(n.workerurl);
  }
  function rn() {
    return {
      auto: r(),
      blockspam: i(),
      challengeurl: l(),
      debug: c(),
      delay: d(),
      expire: _(),
      floating: h(),
      floatinganchor: g(),
      floatingoffset: p(),
      hidefooter: T(),
      hidelogo: O(),
      name: q(),
      maxnumber: ae(),
      mockerror: Fe(),
      obfuscated: V(),
      refetchonexpire: Re(),
      spamfilter: ye(),
      strings: a(D),
      test: ce(),
      verifyurl: se(),
      workers: ot(),
      workerurl: bt()
    };
  }
  function nn() {
    return a(at);
  }
  function Mi(n) {
    return Ue.find((u) => u.constructor.pluginName === n);
  }
  function ln() {
    return a(A);
  }
  function on() {
    a(Q).style.display = "none";
  }
  function kt(n = 20) {
    var u;
    if (a(Q))
      if (a(at) || w(at, F((g() ? document.querySelector(g()) : (u = a(M)) == null ? void 0 : u.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || a(M))), a(at)) {
        const v = parseInt(p(), 10) || 12, b = a(at).getBoundingClientRect(), m = a(Q).getBoundingClientRect(), R = document.documentElement.clientHeight, y = document.documentElement.clientWidth, j = h() === "auto" ? b.bottom + m.height + v + n > R : h() === "top", k = Math.max(n, Math.min(y - n - m.width, b.left + b.width / 2 - m.width / 2));
        if (j ? a(Q).style.top = `${b.top - (m.height + v)}px` : a(Q).style.top = `${b.bottom + v}px`, a(Q).style.left = `${k}px`, a(Q).setAttribute("data-floating", j ? "top" : "bottom"), a(yt)) {
          const B = a(yt).getBoundingClientRect();
          a(yt).style.left = b.left - k + b.width / 2 - B.width / 2 + "px";
        }
      } else
        N("unable to find floating anchor element");
  }
  function st(n = E.UNVERIFIED, u = null) {
    Ee && (clearTimeout(Ee), Ee = null), w(wt, !1), w($e, null), w(H, null), w(ur, !1), w(Y, null), ke(n, u);
  }
  function an(n) {
    w(at, F(n));
  }
  function ke(n, u = null) {
    w(A, F(n)), w(Xe, F(u)), Ve("statechange", {
      payload: a($e),
      state: a(A)
    });
  }
  function cr() {
    a(Q).style.display = "block", h() && kt();
  }
  async function Ne() {
    return st(E.VERIFYING), await new Promise((n) => setTimeout(n, d() || 0)), xi().then((n) => (Qr(n), N("challenge", n), en(n))).then(({ data: n, solution: u }) => {
      var v;
      if (N("solution", u), !u || n && "challenge" in n && !("clearText" in u))
        if ((u == null ? void 0 : u.number) !== void 0 && "challenge" in n)
          if (se() && "codeChallenge" in n)
            ((v = document.activeElement) == null ? void 0 : v.tagName) === "INPUT" && document.activeElement.blur(), w(H, F({ challenge: n, solution: u }));
          else {
            if (se() && Ke() !== void 0)
              return Kr(Dt(n, u));
            if (se())
              return Fi(Dt(n, u));
            w($e, F(Dt(n, u))), N("payload", a($e));
          }
        else
          throw N("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      a(H) ? (ke(E.CODE), pr().then(() => {
        Ve("code", { codeChallenge: a(H) });
      })) : (ke(E.VERIFIED), N("verified"), pr().then(() => {
        Ve("verified", { payload: a($e) });
      }));
    }).catch((n) => {
      N(n), ke(E.ERROR, n.message);
    });
  }
  var sn = ia(), un = It(sn);
  bo(un, t, "default", {});
  var Ct = J(un, 2), dr = W(Ct), Lt = W(dr);
  let fn;
  var cn = W(Lt);
  {
    var Ui = (n) => {
      br(n);
    };
    K(cn, (n) => {
      a(A) === E.VERIFYING && n(Ui);
    });
  }
  var qe = J(cn, 2);
  $n(qe), qe.__change = [
    jo,
    A,
    ye,
    M,
    wt,
    V,
    Et,
    Ne
  ], Vt(qe, (n) => w(sr, n), () => a(sr)), Z(Lt);
  var xt = J(Lt, 2), qi = W(xt);
  {
    var ji = (n) => {
      var u = Ft(), v = It(u);
      et(v, () => a(D).verified), U(n, u);
    }, Bi = (n, u) => {
      {
        var v = (m) => {
          var R = Ft(), y = It(R);
          et(y, () => a(D).verifying), U(m, R);
        }, b = (m, R) => {
          {
            var y = (k) => {
              var B = Ft(), ne = It(B);
              et(ne, () => a(D).verificationRequired), U(k, B);
            }, j = (k) => {
              var B = Ft(), ne = It(B);
              et(ne, () => a(D).label), U(k, B);
            };
            K(
              m,
              (k) => {
                a(A) === E.CODE ? k(y) : k(j, !1);
              },
              R
            );
          }
        };
        K(
          n,
          (m) => {
            a(A) === E.VERIFYING ? m(v) : m(b, !1);
          },
          u
        );
      }
    };
    K(qi, (n) => {
      a(A) === E.VERIFIED ? n(ji) : n(Bi, !1);
    });
  }
  Z(xt);
  var dn = J(xt, 2);
  {
    var Hi = (n) => {
      var u = Ho();
      $n(u), ze(() => {
        $(u, "name", q()), xo(u, a($e));
      }), U(n, u);
    };
    K(dn, (n) => {
      a(A) === E.VERIFIED && n(Hi);
    });
  }
  var hn = J(dn, 2);
  {
    var Yi = (n) => {
      var u = Yo(), v = W(u);
      $(v, "href", Ei), Z(u), ze(() => $(v, "aria-label", a(D).ariaLinkLabel)), U(n, u);
    };
    K(hn, (n) => {
      (O() !== !0 || a(or)) && n(Yi);
    });
  }
  var Gi = J(hn, 2);
  {
    var Zi = (n) => {
      var u = Xo(), v = J(W(u), 2), b = W(v), m = J(b, 2);
      co(m), m.__keydown = [
        Uo,
        Zr
      ];
      var R = J(m, 2), y = W(R), j = W(y);
      {
        var k = (ge) => {
          var G = Jo();
          G.__click = Zr;
          var Ot = W(G);
          {
            var At = (ut) => {
              br(ut, () => 20);
            }, tl = (ut, rl) => {
              {
                var nl = (ft) => {
                  var vr = Go();
                  U(ft, vr);
                }, il = (ft, vr) => {
                  {
                    var ll = (ct) => {
                      var gr = Zo();
                      U(ct, gr);
                    }, ol = (ct) => {
                      var gr = Wo();
                      U(ct, gr);
                    };
                    K(
                      ft,
                      (ct) => {
                        a(Y) === X.PLAYING ? ct(ll) : ct(ol, !1);
                      },
                      vr
                    );
                  }
                };
                K(
                  ut,
                  (ft) => {
                    a(Y) === X.ERROR ? ft(nl) : ft(il, !1);
                  },
                  rl
                );
              }
            };
            K(Ot, (ut) => {
              a(Y) === X.LOADING ? ut(At) : ut(tl, !1);
            });
          }
          Z(G), ze(() => {
            $(G, "title", a(D).getAudioChallenge), G.disabled = a(Y) === X.LOADING || a(Y) === X.ERROR || a(Qe), $(G, "aria-label", a(Y) === X.LOADING ? a(D).loading : a(D).getAudioChallenge);
          }), U(ge, G);
        };
        K(j, (ge) => {
          a(H).challenge.codeChallenge.audio && ge(k);
        });
      }
      var B = J(j, 2);
      B.__click = [qo, Ne], Z(y);
      var ne = J(y, 2), je = W(ne);
      {
        var hr = (ge) => {
          br(ge, () => 16);
        };
        K(je, (ge) => {
          a(Qe) && ge(hr);
        });
      }
      var Pt = J(je);
      Z(ne), Z(R);
      var Qi = J(R, 2);
      {
        var el = (ge) => {
          var G = Ko(), Ot = W(G);
          Z(G), Vt(G, (At) => w(Me, At), () => a(Me)), ze((At) => $(Ot, "src", At), [
            () => Ur(a(H).challenge.codeChallenge.audio)
          ]), Be("loadstart", G, Si), Be("canplay", G, zi), Be("pause", G, Di), Be("playing", G, Ti), Be("ended", G, $i), Be("error", Ot, Ni), U(ge, G);
        };
        K(Qi, (ge) => {
          a(H).challenge.codeChallenge.audio && a(ur) && ge(el);
        });
      }
      Z(v), Z(u), ze(() => {
        $(u, "aria-label", a(D).verificationRequired), $(b, "src", a(H).challenge.codeChallenge.image), $(m, "minlength", a(H).challenge.codeChallenge.length || 1), $(m, "maxlength", a(H).challenge.codeChallenge.length), $(m, "placeholder", a(D).enterCode), $(m, "aria-label", a(Y) === X.LOADING ? a(D).loading : a(Y) === X.PLAYING ? "" : a(D).enterCodeAria), $(m, "aria-live", a(Y) ? "assertive" : "polite"), $(m, "aria-busy", a(Y) === X.LOADING), m.disabled = a(Qe), $(B, "aria-label", a(D).reload), $(B, "title", a(D).reload), B.disabled = a(Qe), ne.disabled = a(Qe), $(ne, "aria-label", a(D).verify), _o(Pt, ` ${a(D).verify ?? ""}`);
      }), Be("submit", v, Li, !0), U(n, u);
    };
    K(Gi, (n) => {
      var u;
      (u = a(H)) != null && u.challenge.codeChallenge && n(Zi);
    });
  }
  Z(dr);
  var vn = J(dr, 2);
  {
    var Wi = (n) => {
      var u = ta(), v = J(W(u), 2);
      {
        var b = (R) => {
          var y = Qo(), j = W(y);
          et(j, () => a(D).expired), Z(y), ze(() => $(y, "title", a(Xe))), U(R, y);
        }, m = (R) => {
          var y = ea(), j = W(y);
          et(j, () => a(D).error), Z(y), ze(() => $(y, "title", a(Xe))), U(R, y);
        };
        K(v, (R) => {
          a(A) === E.EXPIRED ? R(b) : R(m, !1);
        });
      }
      Z(u), U(n, u);
    };
    K(vn, (n) => {
      (a(Xe) || a(A) === E.EXPIRED) && n(Wi);
    });
  }
  var gn = J(vn, 2);
  {
    var Ji = (n) => {
      var u = ra(), v = W(u), b = W(v);
      et(b, () => a(D).footer), Z(v), Z(u), U(n, u);
    };
    K(gn, (n) => {
      a(D).footer && (T() !== !0 || a(or)) && n(Ji);
    });
  }
  var Ki = J(gn, 2);
  {
    var Xi = (n) => {
      var u = na();
      Vt(u, (v) => w(yt, v), () => a(yt)), U(n, u);
    };
    K(Ki, (n) => {
      h() && n(Xi);
    });
  }
  return Z(Ct), Vt(Ct, (n) => w(Q, n), () => a(Q)), ze(
    (n) => {
      var u;
      $(Ct, "data-state", a(A)), $(Ct, "data-floating", h()), fn = Eo(Lt, 1, "altcha-checkbox svelte-uo3tkz", null, fn, n), $(qe, "id", a(Or)), qe.required = r() !== "onsubmit" && (!h() || r() !== "off"), $(qe, "aria-hidden", a(A) === E.VERIFYING), $(xt, "for", a(Or)), $(xt, "aria-hidden", !!((u = a(H)) != null && u.challenge.codeChallenge));
    },
    [
      () => ({
        "altcha-checkbox-verifying": a(A) === E.VERIFYING
      })
    ]
  ), Be("invalid", qe, Gr), Io(qe, () => a(wt), (n) => w(wt, n)), U(e, sn), fi({
    clarify: Et,
    configure: tn,
    getConfiguration: rn,
    getFloatingAnchor: nn,
    getPlugin: Mi,
    getState: ln,
    hide: on,
    repositionFloating: kt,
    reset: st,
    setFloatingAnchor: an,
    setState: ke,
    show: cr,
    verify: Ne,
    get auto() {
      return r();
    },
    set auto(n = void 0) {
      r(n), x();
    },
    get blockspam() {
      return i();
    },
    set blockspam(n = void 0) {
      i(n), x();
    },
    get challengeurl() {
      return l();
    },
    set challengeurl(n = void 0) {
      l(n), x();
    },
    get challengejson() {
      return o();
    },
    set challengejson(n = void 0) {
      o(n), x();
    },
    get credentials() {
      return s();
    },
    set credentials(n = void 0) {
      s(n), x();
    },
    get customfetch() {
      return f();
    },
    set customfetch(n = void 0) {
      f(n), x();
    },
    get debug() {
      return c();
    },
    set debug(n = !1) {
      c(n), x();
    },
    get delay() {
      return d();
    },
    set delay(n = 0) {
      d(n), x();
    },
    get expire() {
      return _();
    },
    set expire(n = void 0) {
      _(n), x();
    },
    get floating() {
      return h();
    },
    set floating(n = void 0) {
      h(n), x();
    },
    get floatinganchor() {
      return g();
    },
    set floatinganchor(n = void 0) {
      g(n), x();
    },
    get floatingoffset() {
      return p();
    },
    set floatingoffset(n = void 0) {
      p(n), x();
    },
    get floatingpersist() {
      return C();
    },
    set floatingpersist(n = !1) {
      C(n), x();
    },
    get hidefooter() {
      return T();
    },
    set hidefooter(n = !1) {
      T(n), x();
    },
    get hidelogo() {
      return O();
    },
    set hidelogo(n = !1) {
      O(n), x();
    },
    get id() {
      return we();
    },
    set id(n = void 0) {
      we(n), x();
    },
    get language() {
      return re();
    },
    set language(n = void 0) {
      re(n), x();
    },
    get name() {
      return q();
    },
    set name(n = "altcha") {
      q(n), x();
    },
    get maxnumber() {
      return ae();
    },
    set maxnumber(n = 1e6) {
      ae(n), x();
    },
    get mockerror() {
      return Fe();
    },
    set mockerror(n = !1) {
      Fe(n), x();
    },
    get obfuscated() {
      return V();
    },
    set obfuscated(n = void 0) {
      V(n), x();
    },
    get plugins() {
      return ve();
    },
    set plugins(n = void 0) {
      ve(n), x();
    },
    get refetchonexpire() {
      return Re();
    },
    set refetchonexpire(n = !0) {
      Re(n), x();
    },
    get sentinel() {
      return Ke();
    },
    set sentinel(n = void 0) {
      Ke(n), x();
    },
    get spamfilter() {
      return ye();
    },
    set spamfilter(n = !1) {
      ye(n), x();
    },
    get strings() {
      return lt();
    },
    set strings(n = void 0) {
      lt(n), x();
    },
    get test() {
      return ce();
    },
    set test(n = !1) {
      ce(n), x();
    },
    get verifyurl() {
      return se();
    },
    set verifyurl(n = void 0) {
      se(n), x();
    },
    get workers() {
      return ot();
    },
    set workers(n = Math.min(16, navigator.hardwareConcurrency || 8)) {
      ot(n), x();
    },
    get workerurl() {
      return bt();
    },
    set workerurl(n = void 0) {
      bt(n), x();
    }
  });
}
go(["change", "keydown", "click"]);
customElements.define("altcha-widget", To(
  oa,
  {
    blockspam: { type: "Boolean" },
    debug: { type: "Boolean" },
    delay: { type: "Number" },
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
  oa as Altcha
};
