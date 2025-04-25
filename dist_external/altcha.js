var ao = Object.defineProperty;
var pn = (e) => {
  throw TypeError(e);
};
var so = (e, t, r) => t in e ? ao(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var _e = (e, t, r) => so(e, typeof t != "symbol" ? t + "" : t, r), bn = (e, t, r) => t.has(e) || pn("Cannot " + r);
var ie = (e, t, r) => (bn(e, t, "read from private field"), r ? r.call(e) : t.get(e)), _r = (e, t, r) => t.has(e) ? pn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), mr = (e, t, r, i) => (bn(e, t, "write to private field"), i ? i.call(e, r) : t.set(e, r), r);
const uo = "5";
var Dn;
typeof window < "u" && ((Dn = window.__svelte ?? (window.__svelte = {})).v ?? (Dn.v = /* @__PURE__ */ new Set())).add(uo);
const fo = 1, co = 4, vo = 8, ho = 16, go = 1, _o = 2, xr = "[", Tn = "[!", Ln = "]", ht = {}, le = Symbol(), mo = "http://www.w3.org/1999/xhtml", wn = !1, pe = 2, Pn = 4, Xt = 8, Ar = 16, Pe = 32, nt = 64, Ut = 128, ve = 256, Ht = 512, fe = 1024, Oe = 2048, pt = 4096, gt = 8192, Qt = 16384, po = 32768, Ir = 65536, bo = 1 << 19, On = 1 << 20, $t = Symbol("$state"), Fn = Symbol("legacy props"), wo = Symbol("");
var Vn = Array.isArray, yo = Array.prototype.indexOf, Eo = Array.from, Bt = Object.keys, Yt = Object.defineProperty, tt = Object.getOwnPropertyDescriptor, ko = Object.getOwnPropertyDescriptors, Co = Object.prototype, xo = Array.prototype, Mn = Object.getPrototypeOf;
function qn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Ao(e, t, r = !1) {
  return e === void 0 ? r ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
const Io = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let zt = [], St = [];
function jn() {
  var e = zt;
  zt = [], qn(e);
}
function Un() {
  var e = St;
  St = [], qn(e);
}
function er(e) {
  zt.length === 0 && queueMicrotask(jn), zt.push(e);
}
function Ro(e) {
  St.length === 0 && Io(Un), St.push(e);
}
function yn() {
  zt.length > 0 && jn(), St.length > 0 && Un();
}
function Hn(e) {
  return e === this.v;
}
function $o(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Rr(e) {
  return !$o(e, this.v);
}
function No(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function zo() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function So(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Do() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function To() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Lo(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Po() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Oo() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Fo() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Vo() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Mo = !1;
function Ce(e, t) {
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
  return /* @__PURE__ */ qo(Ce(e));
}
// @__NO_SIDE_EFFECTS__
function Bn(e, t = !1) {
  const r = Ce(e);
  return t || (r.equals = Rr), r;
}
// @__NO_SIDE_EFFECTS__
function qo(e) {
  return z !== null && !me && (z.f & pe) !== 0 && (xe === null ? Zo([e]) : xe.push(e)), e;
}
function w(e, t) {
  return z !== null && !me && ci() && (z.f & (pe | Ar)) !== 0 && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (xe === null || !xe.includes(e)) && Vo(), jo(e, t);
}
function jo(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = Qn(), Yn(e, Oe), S !== null && (S.f & fe) !== 0 && (S.f & (Pe | nt)) === 0 && (Se === null ? Wo([e]) : Se.push(e))), t;
}
function Yn(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, o = 0; o < i; o++) {
      var l = r[o], s = l.f;
      (s & Oe) === 0 && (Ie(l, t), (s & (fe | ve)) !== 0 && ((s & pe) !== 0 ? Yn(
        /** @type {Derived} */
        l,
        pt
      ) : ir(
        /** @type {Effect} */
        l
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Be(e) {
  var t = pe | Oe, r = z !== null && (z.f & pe) !== 0 ? (
    /** @type {Derived} */
    z
  ) : null;
  return S === null || r !== null && (r.f & ve) !== 0 ? t |= ve : S.f |= On, {
    ctx: te,
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
function Uo(e) {
  const t = /* @__PURE__ */ Be(e);
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
function Ho(e) {
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
function Bo(e) {
  var t, r = S;
  We(Ho(e));
  try {
    Gn(e), t = ti(e);
  } finally {
    We(r);
  }
  return t;
}
function Zn(e) {
  var t = Bo(e), r = (Ye || (e.f & ve) !== 0) && e.deps !== null ? pt : fe;
  Ie(e, r), e.equals(t) || (e.v = t, e.wv = Qn());
}
function tr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let P = !1;
function vt(e) {
  P = e;
}
let L;
function Ge(e) {
  if (e === null)
    throw tr(), ht;
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
      throw tr(), ht;
    L = e;
  }
}
function Yo() {
  for (var e = 0, t = L; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === Ln) {
        if (e === 0) return t;
        e -= 1;
      } else (r === xr || r === Tn) && (e += 1);
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
  if (i !== Co && i !== xo)
    return e;
  var o = /* @__PURE__ */ new Map(), l = Vn(e), s = Ce(0);
  l && o.set("length", Ce(
    /** @type {any[]} */
    e.length
  ));
  var f;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(c, d, _) {
        (!("value" in _) || _.configurable === !1 || _.enumerable === !1 || _.writable === !1) && Po();
        var v = o.get(d);
        return v === void 0 ? (v = Ce(_.value), o.set(d, v)) : w(v, F(_.value, f)), !0;
      },
      deleteProperty(c, d) {
        var _ = o.get(d);
        if (_ === void 0)
          d in c && o.set(d, Ce(le));
        else {
          if (l && typeof d == "string") {
            var v = (
              /** @type {Source<number>} */
              o.get("length")
            ), h = Number(d);
            Number.isInteger(h) && h < v.v && w(v, h);
          }
          w(_, le), En(s);
        }
        return !0;
      },
      get(c, d, _) {
        var C;
        if (d === $t)
          return e;
        var v = o.get(d), h = d in c;
        if (v === void 0 && (!h || (C = tt(c, d)) != null && C.writable) && (v = Ce(F(h ? c[d] : le, f)), o.set(d, v)), v !== void 0) {
          var p = a(v);
          return p === le ? void 0 : p;
        }
        return Reflect.get(c, d, _);
      },
      getOwnPropertyDescriptor(c, d) {
        var _ = Reflect.getOwnPropertyDescriptor(c, d);
        if (_ && "value" in _) {
          var v = o.get(d);
          v && (_.value = a(v));
        } else if (_ === void 0) {
          var h = o.get(d), p = h == null ? void 0 : h.v;
          if (h !== void 0 && p !== le)
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
        var _ = o.get(d), v = _ !== void 0 && _.v !== le || Reflect.has(c, d);
        if (_ !== void 0 || S !== null && (!v || (p = tt(c, d)) != null && p.writable)) {
          _ === void 0 && (_ = Ce(v ? F(c[d], f) : le), o.set(d, _));
          var h = a(_);
          if (h === le)
            return !1;
        }
        return v;
      },
      set(c, d, _, v) {
        var j;
        var h = o.get(d), p = d in c;
        if (l && d === "length")
          for (var C = _; C < /** @type {Source<number>} */
          h.v; C += 1) {
            var D = o.get(C + "");
            D !== void 0 ? w(D, le) : C in c && (D = Ce(le), o.set(C + "", D));
          }
        h === void 0 ? (!p || (j = tt(c, d)) != null && j.writable) && (h = Ce(void 0), w(h, F(_, f)), o.set(d, h)) : (p = h.v !== le, w(h, F(_, f)));
        var O = Reflect.getOwnPropertyDescriptor(c, d);
        if (O != null && O.set && O.set.call(v, _), !p) {
          if (l && typeof d == "string") {
            var we = (
              /** @type {Source<number>} */
              o.get("length")
            ), re = Number(d);
            Number.isInteger(re) && re >= we.v && w(we, re + 1);
          }
          En(s);
        }
        return !0;
      },
      ownKeys(c) {
        a(s);
        var d = Reflect.ownKeys(c).filter((h) => {
          var p = o.get(h);
          return p === void 0 || p.v !== le;
        });
        for (var [_, v] of o)
          v.v !== le && !(_ in c) && d.push(_);
        return d;
      },
      setPrototypeOf() {
        Oo();
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
function Te(e) {
  return Jn.call(e);
}
// @__NO_SIDE_EFFECTS__
function Je(e) {
  return Kn.call(e);
}
function W(e, t) {
  if (!P)
    return /* @__PURE__ */ Te(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Te(L)
  );
  return r === null && (r = L.appendChild(rr())), Ge(r), r;
}
function It(e, t) {
  if (!P) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Te(
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
  for (var o; t--; )
    o = i, i = /** @type {TemplateNode} */
    /* @__PURE__ */ Je(i);
  if (!P)
    return i;
  var l = i == null ? void 0 : i.nodeType;
  if (r && l !== 3) {
    var s = rr();
    return i === null ? o == null || o.after(s) : i.before(s), Ge(s), s;
  }
  return Ge(i), /** @type {TemplateNode} */
  i;
}
function Go(e) {
  e.textContent = "";
}
let qt = !1, Gt = !1, Zt = null, rt = !1, $r = !1;
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
function Zo(e) {
  xe = e;
}
let ee = null, ue = 0, Se = null;
function Wo(e) {
  Se = e;
}
let Xn = 1, Wt = 0, Ye = !1;
function Qn() {
  return ++Xn;
}
function Dt(e) {
  var v;
  var t = e.f;
  if ((t & Oe) !== 0)
    return !0;
  if ((t & pt) !== 0) {
    var r = e.deps, i = (t & ve) !== 0;
    if (r !== null) {
      var o, l, s = (t & Ht) !== 0, f = i && S !== null && !Ye, c = r.length;
      if (s || f) {
        var d = (
          /** @type {Derived} */
          e
        ), _ = d.parent;
        for (o = 0; o < c; o++)
          l = r[o], (s || !((v = l == null ? void 0 : l.reactions) != null && v.includes(d))) && (l.reactions ?? (l.reactions = [])).push(d);
        s && (d.f ^= Ht), f && _ !== null && (_.f & ve) === 0 && (d.f ^= ve);
      }
      for (o = 0; o < c; o++)
        if (l = r[o], Dt(
          /** @type {Derived} */
          l
        ) && Zn(
          /** @type {Derived} */
          l
        ), l.wv > e.wv)
          return !0;
    }
    (!i || S !== null && !Ye) && Ie(e, fe);
  }
  return !1;
}
function Jo(e, t) {
  for (var r = t; r !== null; ) {
    if ((r.f & Ut) !== 0)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= Ut;
      }
    r = r.parent;
  }
  throw qt = !1, e;
}
function Ko(e) {
  return (e.f & Qt) === 0 && (e.parent === null || (e.parent.f & Ut) === 0);
}
function nr(e, t, r, i) {
  if (qt) {
    if (r === null && (qt = !1), Ko(t))
      throw e;
    return;
  }
  r !== null && (qt = !0);
  {
    Jo(e, t);
    return;
  }
}
function ei(e, t, r = !0) {
  var i = e.reactions;
  if (i !== null)
    for (var o = 0; o < i.length; o++) {
      var l = i[o];
      (l.f & pe) !== 0 ? ei(
        /** @type {Derived} */
        l,
        t,
        !1
      ) : t === l && (r ? Ie(l, Oe) : (l.f & fe) !== 0 && Ie(l, pt), ir(
        /** @type {Effect} */
        l
      ));
    }
}
function ti(e) {
  var p;
  var t = ee, r = ue, i = Se, o = z, l = Ye, s = xe, f = te, c = me, d = e.f;
  ee = /** @type {null | Value[]} */
  null, ue = 0, Se = null, Ye = (d & ve) !== 0 && (me || !rt || z === null), z = (d & (Pe | nt)) === 0 ? e : null, xe = null, An(e.ctx), me = !1, Wt++;
  try {
    var _ = (
      /** @type {Function} */
      (0, e.fn)()
    ), v = e.deps;
    if (ee !== null) {
      var h;
      if (Jt(e, ue), v !== null && ue > 0)
        for (v.length = ue + ee.length, h = 0; h < ee.length; h++)
          v[ue + h] = ee[h];
      else
        e.deps = v = ee;
      if (!Ye)
        for (h = ue; h < v.length; h++)
          ((p = v[h]).reactions ?? (p.reactions = [])).push(e);
    } else v !== null && ue < v.length && (Jt(e, ue), v.length = ue);
    if (ci() && Se !== null && !me && v !== null && (e.f & (pe | pt | Oe)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      Se.length; h++)
        ei(
          Se[h],
          /** @type {Effect} */
          e
        );
    return o !== null && Wt++, _;
  } finally {
    ee = t, ue = r, Se = i, z = o, Ye = l, xe = s, An(f), me = c;
  }
}
function Xo(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var i = yo.call(r, e);
    if (i !== -1) {
      var o = r.length - 1;
      o === 0 ? r = t.reactions = null : (r[i] = r[o], r.pop());
    }
  }
  r === null && (t.f & pe) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ee === null || !ee.includes(t)) && (Ie(t, pt), (t.f & (ve | Ht)) === 0 && (t.f ^= Ht), Gn(
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
      Xo(e, r[i]);
}
function Nr(e) {
  var t = e.f;
  if ((t & Qt) === 0) {
    Ie(e, fe);
    var r = S, i = te, o = rt;
    S = e, rt = !0;
    try {
      (t & Ar) !== 0 ? sl(e) : ii(e), ni(e);
      var l = ti(e);
      e.teardown = typeof l == "function" ? l : null, e.wv = Xn;
      var s = e.deps, f;
      wn && Mo && e.f & Oe;
    } catch (c) {
      nr(c, e, r, i || e.ctx);
    } finally {
      rt = o, S = r;
    }
  }
}
function Qo() {
  try {
    Do();
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
      t++ > 1e3 && Qo();
      var r = Nt, i = r.length;
      Nt = [];
      for (var o = 0; o < i; o++) {
        var l = tl(r[o]);
        el(l);
      }
    }
  } finally {
    Gt = !1, rt = e, Zt = null;
  }
}
function el(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var i = e[r];
      if ((i.f & (Qt | gt)) === 0)
        try {
          Dt(i) && (Nr(i), i.deps === null && i.first === null && i.nodes_start === null && (i.teardown === null ? oi(i) : i.fn = null));
        } catch (o) {
          nr(o, i, null, i.ctx);
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
function tl(e) {
  for (var t = [], r = e; r !== null; ) {
    var i = r.f, o = (i & (Pe | nt)) !== 0, l = o && (i & fe) !== 0;
    if (!l && (i & gt) === 0) {
      if ((i & Pn) !== 0)
        t.push(r);
      else if (o)
        r.f ^= fe;
      else {
        var s = z;
        try {
          z = r, Dt(r) && Nr(r);
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
    xe !== null && xe.includes(e) && Fo();
    var i = z.deps;
    e.rv < Wt && (e.rv = Wt, ee === null && i !== null && i[ue] === e ? ue++ : ee === null ? ee = [e] : (!Ye || !ee.includes(e)) && ee.push(e));
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), l = o.parent;
    l !== null && (l.f & ve) === 0 && (o.f ^= ve);
  }
  return r && (o = /** @type {Derived} */
  e, Dt(o) && Zn(o)), e.v;
}
function mt(e) {
  var t = me;
  try {
    return me = !0, e();
  } finally {
    me = t;
  }
}
const rl = -7169;
function Ie(e, t) {
  e.f = e.f & rl | t;
}
function nl(e) {
  S === null && z === null && So(), z !== null && (z.f & ve) !== 0 && S === null && zo(), $r && No();
}
function il(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function it(e, t, r, i = !0) {
  var o = S, l = {
    ctx: te,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Oe,
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
      Nr(l), l.f |= po;
    } catch (c) {
      throw Le(l), c;
    }
  else t !== null && ir(l);
  var s = r && l.deps === null && l.first === null && l.nodes_start === null && l.teardown === null && (l.f & (On | Ut)) === 0;
  if (!s && i && (o !== null && il(l, o), z !== null && (z.f & pe) !== 0)) {
    var f = (
      /** @type {Derived} */
      z
    );
    (f.effects ?? (f.effects = [])).push(l);
  }
  return l;
}
function ol(e) {
  const t = it(Xt, null, !1);
  return Ie(t, fe), t.teardown = e, t;
}
function yr(e) {
  nl();
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
function ll(e) {
  const t = it(nt, e, !0);
  return () => {
    Le(t);
  };
}
function al(e) {
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
function ze(e, t = [], r = Be) {
  const i = t.map(r);
  return Dr(() => e(...i.map(a)));
}
function Dr(e, t = 0) {
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
function sl(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Pe) === 0 && Le(t), t = r;
  }
}
function Le(e, t = !0) {
  var r = !1;
  if ((t || (e.f & bo) !== 0) && e.nodes_start !== null) {
    for (var i = e.nodes_start, o = e.nodes_end; i !== null; ) {
      var l = i === o ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Je(i)
      );
      i.remove(), i = l;
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
  f !== null && f.first !== null && oi(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function oi(e) {
  var t = e.parent, r = e.prev, i = e.next;
  r !== null && (r.next = i), i !== null && (i.prev = r), t !== null && (t.first === e && (t.first = i), t.last === e && (t.last = r));
}
function Er(e, t) {
  var r = [];
  li(e, r, !0), ul(r, () => {
    Le(e), t && t();
  });
}
function ul(e, t) {
  var r = e.length;
  if (r > 0) {
    var i = () => --r || t();
    for (var o of e)
      o.out(i);
  } else
    t();
}
function li(e, t, r) {
  if ((e.f & gt) === 0) {
    if (e.f ^= gt, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || r) && t.push(s);
    for (var i = e.first; i !== null; ) {
      var o = i.next, l = (i.f & Ir) !== 0 || (i.f & Pe) !== 0;
      li(i, t, l ? r : !1), i = o;
    }
  }
}
function xn(e) {
  ai(e, !0);
}
function ai(e, t) {
  if ((e.f & gt) !== 0) {
    e.f ^= gt, (e.f & fe) === 0 && (e.f ^= fe), Dt(e) && (Ie(e, Oe), ir(e));
    for (var r = e.first; r !== null; ) {
      var i = r.next, o = (r.f & Ir) !== 0 || (r.f & Pe) !== 0;
      ai(r, o ? t : !1), r = i;
    }
    if (e.transitions !== null)
      for (const l of e.transitions)
        (l.is_global || t) && l.in();
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
        for (var o = 0; o < s.length; o++) {
          var l = s[o];
          We(l.effect), Ze(l.reaction), zr(l.fn);
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
const fl = ["touchstart", "touchmove"];
function cl(e) {
  return fl.includes(e);
}
function dl(e, t) {
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
function vi(e) {
  var t = z, r = S;
  Ze(null), We(null);
  try {
    return e();
  } finally {
    Ze(t), We(r);
  }
}
function vl(e, t, r, i = r) {
  e.addEventListener(t, () => vi(r));
  const o = e.__on_r;
  o ? e.__on_r = () => {
    o(), i(!0);
  } : e.__on_r = () => i(!0), di();
}
const hi = /* @__PURE__ */ new Set(), kr = /* @__PURE__ */ new Set();
function hl(e, t, r, i = {}) {
  function o(l) {
    if (i.capture || Rt.call(t, l), !l.cancelBubble)
      return vi(() => r == null ? void 0 : r.call(this, l));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? er(() => {
    t.addEventListener(e, o, i);
  }) : t.addEventListener(e, o, i), o;
}
function He(e, t, r, i, o) {
  var l = { capture: i, passive: o }, s = hl(e, t, r, l);
  (t === document.body || t === window || t === document) && ol(() => {
    t.removeEventListener(e, s, l);
  });
}
function gl(e) {
  for (var t = 0; t < e.length; t++)
    hi.add(e[t]);
  for (var r of kr)
    r(e);
}
function Rt(e) {
  var re;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), i = e.type, o = ((re = e.composedPath) == null ? void 0 : re.call(e)) || [], l = (
    /** @type {null | Element} */
    o[0] || e.target
  ), s = 0, f = e.__root;
  if (f) {
    var c = o.indexOf(f);
    if (c !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var d = o.indexOf(t);
    if (d === -1)
      return;
    c <= d && (s = c);
  }
  if (l = /** @type {Element} */
  o[s] || e.target, l !== t) {
    Yt(e, "currentTarget", {
      configurable: !0,
      get() {
        return l || r;
      }
    });
    var _ = z, v = S;
    Ze(null), We(null);
    try {
      for (var h, p = []; l !== null; ) {
        var C = l.assignedSlot || l.parentNode || /** @type {any} */
        l.host || null;
        try {
          var D = l["__" + i];
          if (D != null && (!/** @type {any} */
          l.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === l))
            if (Vn(D)) {
              var [O, ...we] = D;
              O.apply(l, [e, ...we]);
            } else
              D.call(l, e);
        } catch (j) {
          h ? p.push(j) : h = j;
        }
        if (e.cancelBubble || C === t || C === null)
          break;
        l = C;
      }
      if (h) {
        for (let j of p)
          queueMicrotask(() => {
            throw j;
          });
        throw h;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Ze(_), We(v);
    }
  }
}
function Tr(e) {
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
  var r = (t & go) !== 0, i = (t & _o) !== 0, o, l = !e.startsWith("<!>");
  return () => {
    if (P)
      return Ae(L, null), L;
    o === void 0 && (o = Tr(l ? e : "<!>" + e), r || (o = /** @type {Node} */
    /* @__PURE__ */ Te(o)));
    var s = (
      /** @type {TemplateNode} */
      i || Wn ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (r) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Te(s)
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
function or(e, t, r = "svg") {
  var i = !e.startsWith("<!>"), o = `<${r}>${i ? e : "<!>" + e}</${r}>`, l;
  return () => {
    if (P)
      return Ae(L, null), L;
    if (!l) {
      var s = (
        /** @type {DocumentFragment} */
        Tr(o)
      ), f = (
        /** @type {Element} */
        /* @__PURE__ */ Te(s)
      );
      l = /** @type {Element} */
      /* @__PURE__ */ Te(f);
    }
    var c = (
      /** @type {TemplateNode} */
      l.cloneNode(!0)
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
function q(e, t) {
  if (P) {
    S.nodes_end = L, _t();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function _l(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function gi(e, t) {
  return _i(e, t);
}
function ml(e, t) {
  wr(), t.intro = t.intro ?? !1;
  const r = t.target, i = P, o = L;
  try {
    for (var l = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Te(r)
    ); l && (l.nodeType !== 8 || /** @type {Comment} */
    l.data !== xr); )
      l = /** @type {TemplateNode} */
      /* @__PURE__ */ Je(l);
    if (!l)
      throw ht;
    vt(!0), Ge(
      /** @type {Comment} */
      l
    ), _t();
    const s = _i(e, { ...t, anchor: l });
    if (L === null || L.nodeType !== 8 || /** @type {Comment} */
    L.data !== Ln)
      throw tr(), ht;
    return vt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === ht)
      return t.recover === !1 && To(), wr(), Go(r), vt(!1), gi(e, t);
    throw s;
  } finally {
    vt(i), Ge(o);
  }
}
const dt = /* @__PURE__ */ new Map();
function _i(e, { target: t, anchor: r, props: i = {}, events: o, context: l, intro: s = !0 }) {
  wr();
  var f = /* @__PURE__ */ new Set(), c = (v) => {
    for (var h = 0; h < v.length; h++) {
      var p = v[h];
      if (!f.has(p)) {
        f.add(p);
        var C = cl(p);
        t.addEventListener(p, Rt, { passive: C });
        var D = dt.get(p);
        D === void 0 ? (document.addEventListener(p, Rt, { passive: C }), dt.set(p, 1)) : dt.set(p, D + 1);
      }
    }
  };
  c(Eo(hi)), kr.add(c);
  var d = void 0, _ = al(() => {
    var v = r ?? t.appendChild(rr());
    return Kt(() => {
      if (l) {
        ui({});
        var h = (
          /** @type {ComponentContext} */
          te
        );
        h.c = l;
      }
      o && (i.$$events = o), P && Ae(
        /** @type {TemplateNode} */
        v,
        null
      ), d = e(v, i) || {}, P && (S.nodes_end = L), l && fi();
    }), () => {
      var C;
      for (var h of f) {
        t.removeEventListener(h, Rt);
        var p = (
          /** @type {number} */
          dt.get(h)
        );
        --p === 0 ? (document.removeEventListener(h, Rt), dt.delete(h)) : dt.set(h, p);
      }
      kr.delete(c), v !== r && ((C = v.parentNode) == null || C.removeChild(v));
    };
  });
  return Cr.set(d, _), d;
}
let Cr = /* @__PURE__ */ new WeakMap();
function pl(e, t) {
  const r = Cr.get(e);
  return r ? (Cr.delete(e), r(t)) : Promise.resolve();
}
function K(e, t, [r, i] = [0, 0]) {
  P && r === 0 && _t();
  var o = e, l = null, s = null, f = le, c = r > 0 ? Ir : 0, d = !1;
  const _ = (h, p = !0) => {
    d = !0, v(p, h);
  }, v = (h, p) => {
    if (f === (f = h)) return;
    let C = !1;
    if (P && i !== -1) {
      if (r === 0) {
        const O = (
          /** @type {Comment} */
          o.data
        );
        O === xr ? i = 0 : O === Tn ? i = 1 / 0 : (i = parseInt(O.substring(1)), i !== i && (i = f ? 1 / 0 : -1));
      }
      const D = i > r;
      !!f === D && (o = Yo(), Ge(o), vt(!1), C = !0, i = -1);
    }
    f ? (l ? xn(l) : p && (l = Kt(() => p(o))), s && Er(s, () => {
      s = null;
    })) : (s ? xn(s) : p && (s = Kt(() => p(o, [r + 1, i]))), l && Er(l, () => {
      l = null;
    })), C && vt(!0);
  };
  Dr(() => {
    d = !1, t(_), d || v(null, null);
  }, c), P && (o = L);
}
function et(e, t, r, i, o) {
  var l = e, s = "", f;
  Dr(() => {
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
          throw tr(), ht;
        Ae(L, d), l = Ge(c);
        return;
      }
      var _ = s + "", v = Tr(_);
      Ae(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Te(v),
        /** @type {TemplateNode} */
        v.lastChild
      ), l.before(v);
    }));
  });
}
function bl(e, t, r, i, o) {
  var f;
  P && _t();
  var l = (f = t.$$slots) == null ? void 0 : f[r], s = !1;
  l === !0 && (l = t.children, s = !0), l === void 0 || l(e, s ? () => i : i);
}
function wl(e, t) {
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
      const o = document.createElement("style");
      o.id = t.hash, o.textContent = t.code, i.appendChild(o);
    }
  });
}
const Rn = [...` 	
\r\f \v\uFEFF`];
function yl(e, t, r) {
  var i = "" + e;
  if (r) {
    for (var o in r)
      if (r[o])
        i = i ? i + " " + o : o;
      else if (i.length)
        for (var l = o.length, s = 0; (s = i.indexOf(o, s)) >= 0; ) {
          var f = s + l;
          (s === 0 || Rn.includes(i[s - 1])) && (f === i.length || Rn.includes(i[f])) ? i = (s === 0 ? "" : i.substring(0, s)) + i.substring(f + 1) : s = f;
        }
  }
  return i === "" ? null : i;
}
function El(e, t, r, i, o, l) {
  var s = e.__className;
  if (P || s !== r) {
    var f = yl(r, i, l);
    (!P || f !== e.getAttribute("class")) && (f == null ? e.removeAttribute("class") : e.className = f), e.__className = r;
  } else if (l && o !== l)
    for (var c in l) {
      var d = !!l[c];
      (o == null || d !== !!o[c]) && e.classList.toggle(c, d);
    }
  return l;
}
const kl = Symbol("is custom element"), Cl = Symbol("is html");
function $n(e) {
  if (P) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var i = e.value;
          $(e, "value", null), e.value = i;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          $(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = r, Ro(r), di();
  }
}
function xl(e, t) {
  var r = mi(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function $(e, t, r, i) {
  var o = mi(e);
  P && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = r) && (t === "loading" && (e[wo] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Al(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function mi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [kl]: e.nodeName.includes("-"),
      [Cl]: e.namespaceURI === mo
    })
  );
}
var Nn = /* @__PURE__ */ new Map();
function Al(e) {
  var t = Nn.get(e.nodeName);
  if (t) return t;
  Nn.set(e.nodeName, t = []);
  for (var r, i = e, o = Element.prototype; o !== i; ) {
    r = ko(i);
    for (var l in r)
      r[l].set && t.push(l);
    i = Mn(i);
  }
  return t;
}
function Il(e, t, r = t) {
  vl(e, "change", (i) => {
    var o = i ? e.defaultChecked : e.checked;
    r(o);
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
    var o, l;
    return Sr(() => {
      o = l, l = [], mt(() => {
        e !== r(...l) && (t(e, ...l), o && zn(r(...o), e) && t(null, ...o));
      });
    }), () => {
      er(() => {
        l && zn(r(...l), e) && t(null, ...l);
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
function Rl(e) {
  te === null && si(), pi(() => () => mt(e));
}
let Mt = !1;
function $l(e) {
  var t = Mt;
  try {
    return Mt = !1, [e(), Mt];
  } finally {
    Mt = t;
  }
}
function I(e, t, r, i) {
  var Fe;
  var o = (r & fo) !== 0, l = !0, s = (r & vo) !== 0, f = (r & ho) !== 0, c = !1, d;
  s ? [d, c] = $l(() => (
    /** @type {V} */
    e[t]
  )) : d = /** @type {V} */
  e[t];
  var _ = $t in e || Fn in e, v = s && (((Fe = tt(e, t)) == null ? void 0 : Fe.set) ?? (_ && t in e && ((V) => e[t] = V))) || void 0, h = (
    /** @type {V} */
    i
  ), p = !0, C = !1, D = () => (C = !0, p && (p = !1, f ? h = mt(
    /** @type {() => V} */
    i
  ) : h = /** @type {V} */
  i), h);
  d === void 0 && i !== void 0 && (v && l && Lo(), d = D(), v && v(d));
  var O;
  if (O = () => {
    var V = (
      /** @type {V} */
      e[t]
    );
    return V === void 0 ? D() : (p = !0, C = !1, V);
  }, (r & co) === 0)
    return O;
  if (v) {
    var we = e.$$legacy;
    return function(V, he) {
      return arguments.length > 0 ? ((!he || we || c) && v(he ? O() : V), V) : O();
    };
  }
  var re = !1, j = /* @__PURE__ */ Bn(d), ae = /* @__PURE__ */ Be(() => {
    var V = O(), he = a(j);
    return re ? (re = !1, he) : j.v = V;
  });
  return o || (ae.equals = Rr), function(V, he) {
    if (arguments.length > 0) {
      const Re = he ? a(ae) : s ? F(V) : V;
      return ae.equals(Re) || (re = !0, w(j, Re), C && h !== void 0 && (h = Re), mt(() => a(ae))), V;
    }
    return a(ae);
  };
}
function Nl(e) {
  return new zl(e);
}
var De, de;
class zl {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    _r(this, De);
    /** @type {Record<string, any>} */
    _r(this, de);
    var l;
    var r = /* @__PURE__ */ new Map(), i = (s, f) => {
      var c = /* @__PURE__ */ Bn(f);
      return r.set(s, c), c;
    };
    const o = new Proxy(
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
    mr(this, de, (t.hydrate ? ml : gi)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((l = t == null ? void 0 : t.props) != null && l.$$host) || t.sync === !1) && x(), mr(this, De, o.$$events);
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
      Object.assign(o, s);
    }, ie(this, de).$destroy = () => {
      pl(ie(this, de));
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
    ie(this, De)[t] = ie(this, De)[t] || [];
    const i = (...o) => r.call(this, ...o);
    return ie(this, De)[t].push(i), () => {
      ie(this, De)[t] = ie(this, De)[t].filter(
        /** @param {any} fn */
        (o) => o !== i
      );
    };
  }
  $destroy() {
    ie(this, de).$destroy();
  }
}
De = new WeakMap(), de = new WeakMap();
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
          const s = document.createElement("slot");
          o !== "default" && (s.name = o), q(l, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, i = Sl(this);
      for (const o of this.$$s)
        o in i && (o === "default" && !this.$$d.children ? (this.$$d.children = t(o), r.default = !0) : r[o] = t(o));
      for (const o of this.attributes) {
        const l = this.$$g_p(o.name);
        l in this.$$d || (this.$$d[l] = jt(l, o.value, this.$$p_d, "toProp"));
      }
      for (const o in this.$$p_d)
        !(o in this.$$d) && this[o] !== void 0 && (this.$$d[o] = this[o], delete this[o]);
      this.$$c = Nl({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = ll(() => {
        Sr(() => {
          var o;
          this.$$r = !0;
          for (const l of Bt(this.$$c)) {
            if (!((o = this.$$p_d[l]) != null && o.reflect)) continue;
            this.$$d[l] = this.$$c[l];
            const s = jt(
              l,
              this.$$d[l],
              this.$$p_d,
              "toAttribute"
            );
            s == null ? this.removeAttribute(this.$$p_d[l].attribute || l) : this.setAttribute(this.$$p_d[l].attribute || l, s);
          }
          this.$$r = !1;
        });
      });
      for (const o in this.$$l)
        for (const l of this.$$l[o]) {
          const s = this.$$c.$on(o, l);
          this.$$l_u.set(l, s);
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = jt(t, i, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [t]: this.$$d[t] }));
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
    return Bt(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function jt(e, t, r, i) {
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
function Sl(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function Dl(e, t, r, i, o, l) {
  let s = class extends bi {
    constructor() {
      super(e, r, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Bt(t).map(
        (f) => (t[f].attribute || f).toLowerCase()
      );
    }
  };
  return Bt(t).forEach((f) => {
    Yt(s.prototype, f, {
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
function Tl(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function Ll(e, t = "SHA-256", r = 1e5) {
  const i = Date.now().toString(16);
  e || (e = Math.round(Math.random() * r));
  const o = await yi(i, e, t);
  return {
    algorithm: t,
    challenge: o,
    salt: i,
    signature: ""
  };
}
async function yi(e, t, r) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return Tl(
    await crypto.subtle.digest(
      r.toUpperCase(),
      wi.encode(e + t)
    )
  );
}
function Pl(e, t, r = "SHA-256", i = 1e6, o = 0) {
  const l = new AbortController(), s = Date.now();
  return {
    promise: (async () => {
      for (let c = o; c <= i; c += 1) {
        if (l.signal.aborted)
          return null;
        if (await yi(t, c, r) === e)
          return {
            number: c,
            took: Date.now() - s
          };
      }
      return null;
    })(),
    controller: l
  };
}
function Sn() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function Ol(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let i = 0; i < t.length; i++)
    r[i] = t.charCodeAt(i);
  return r;
}
function Fl(e, t = 12) {
  const r = new Uint8Array(t);
  for (let i = 0; i < t; i++)
    r[i] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function Vl(e, t = "", r = 1e6, i = 0) {
  const o = "AES-GCM", l = new AbortController(), s = Date.now(), f = async () => {
    for (let _ = i; _ <= r; _ += 1) {
      if (l.signal.aborted || !c || !d)
        return null;
      try {
        const v = await crypto.subtle.decrypt(
          {
            name: o,
            iv: Fl(_)
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
    d = Ol(e);
    const _ = await crypto.subtle.digest(
      "SHA-256",
      wi.encode(t)
    );
    c = await crypto.subtle.importKey(
      "raw",
      _,
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
    promise: f(),
    controller: l
  };
}
var E = /* @__PURE__ */ ((e) => (e.CODE = "code", e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(E || {}), X = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.LOADING = "loading", e.PLAYING = "playing", e.PAUSED = "paused", e.READY = "ready", e))(X || {});
const Ml = {
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
typeof globalThis.altchaI18n != "object" && (globalThis.altchaI18n = {});
globalThis.altchaI18n.en = Ml;
const br = (e, t) => {
  let r = /* @__PURE__ */ Uo(() => Ao(t == null ? void 0 : t(), 24));
  var i = Hl();
  ze(() => {
    $(i, "width", a(r)), $(i, "height", a(r));
  }), q(e, i);
};
function ql(e, t) {
  e.code === "Space" && (e.preventDefault(), e.stopImmediatePropagation(), t());
}
function jl(e, t) {
  e.preventDefault(), t();
}
function Ul(e, t, r, i, o, l, s, f) {
  var c;
  [
    E.UNVERIFIED,
    E.ERROR,
    E.EXPIRED,
    E.CODE
  ].includes(a(t)) ? r() !== !1 && ((c = a(i)) == null ? void 0 : c.reportValidity()) === !1 ? w(o, !1) : l() ? s() : f() : w(o, !0);
}
var Hl = /* @__PURE__ */ or('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="svelte-uo3tkz"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25" class="svelte-uo3tkz"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor" class="altcha-spinner svelte-uo3tkz"></path></svg>'), Bl = /* @__PURE__ */ be('<input type="hidden" class="svelte-uo3tkz">'), Yl = /* @__PURE__ */ be('<div class="svelte-uo3tkz"><a target="_blank" class="altcha-logo svelte-uo3tkz" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-uo3tkz"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor" class="svelte-uo3tkz"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor" class="svelte-uo3tkz"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor" class="svelte-uo3tkz"></path></svg></a></div>'), Gl = /* @__PURE__ */ or('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-uo3tkz"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z" class="svelte-uo3tkz"></path></svg>'), Zl = /* @__PURE__ */ or('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-uo3tkz"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z" class="svelte-uo3tkz"></path></svg>'), Wl = /* @__PURE__ */ or('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-uo3tkz"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z" class="svelte-uo3tkz"></path></svg>'), Jl = /* @__PURE__ */ be('<button type="button" class="altcha-code-challenge-audio svelte-uo3tkz"><!></button>'), Kl = /* @__PURE__ */ be('<audio hidden autoplay class="svelte-uo3tkz"><source class="svelte-uo3tkz"></audio>'), Xl = /* @__PURE__ */ be('<div class="altcha-code-challenge svelte-uo3tkz" role="dialog"><div class="altcha-code-challenge-arrow svelte-uo3tkz"></div> <form class="svelte-uo3tkz"><img class="altcha-code-challenge-image svelte-uo3tkz" alt=""> <input type="text" autocomplete="off" name="code" class="altcha-code-challenge-input svelte-uo3tkz" required> <div class="altcha-code-challenge-buttons svelte-uo3tkz"><div class="altcha-code-challenge-buttons-left svelte-uo3tkz"><!> <button type="button" class="altcha-code-challenge-reload svelte-uo3tkz"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-uo3tkz"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z" class="svelte-uo3tkz"></path></svg></button></div> <button type="submit" class="altcha-code-challenge-verify svelte-uo3tkz"><!> </button></div> <!></form></div>'), Ql = /* @__PURE__ */ be('<div class="svelte-uo3tkz"><!></div>'), ea = /* @__PURE__ */ be('<div class="svelte-uo3tkz"><!></div>'), ta = /* @__PURE__ */ be('<div class="altcha-error svelte-uo3tkz"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="svelte-uo3tkz"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" class="svelte-uo3tkz"></path></svg> <!></div>'), ra = /* @__PURE__ */ be('<div class="altcha-footer svelte-uo3tkz"><div class="svelte-uo3tkz"><!></div></div>'), na = /* @__PURE__ */ be('<div class="altcha-anchor-arrow svelte-uo3tkz"></div>'), ia = /* @__PURE__ */ be('<!> <div class="altcha svelte-uo3tkz"><div class="altcha-main svelte-uo3tkz"><div><!> <input type="checkbox" class="svelte-uo3tkz"></div> <label class="altcha-label svelte-uo3tkz"><!></label> <!> <!> <!></div> <!> <!> <!></div>', 1);
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
function la(e, t) {
  var _n, mn;
  ui(t, !0), wl(e, oa);
  let r = I(t, "auto", 7, void 0), i = I(t, "blockspam", 7, void 0), o = I(t, "challengeurl", 7, void 0), l = I(t, "challengejson", 7, void 0), s = I(t, "credentials", 7, void 0), f = I(t, "customfetch", 7, void 0), c = I(t, "debug", 7, !1), d = I(t, "delay", 7, 0), _ = I(t, "expire", 7, void 0), v = I(t, "floating", 7, void 0), h = I(t, "floatinganchor", 7, void 0), p = I(t, "floatingoffset", 7, void 0), C = I(t, "floatingpersist", 7, !1), D = I(t, "hidefooter", 7, !1), O = I(t, "hidelogo", 7, !1), we = I(t, "id", 7, void 0), re = I(t, "language", 7, void 0), j = I(t, "name", 7, "altcha"), ae = I(t, "maxnumber", 7, 1e6), Fe = I(t, "mockerror", 7, !1), V = I(t, "obfuscated", 7, void 0), he = I(t, "plugins", 7, void 0), Re = I(t, "refetchonexpire", 7, !0), Ke = I(t, "sentinel", 7, void 0), ye = I(t, "spamfilter", 7, !1), ot = I(t, "strings", 7, void 0), ce = I(t, "test", 7, !1), se = I(t, "verifyurl", 7, void 0), lt = I(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), bt = I(t, "workerurl", 7, void 0);
  const Lr = ["SHA-256", "SHA-384", "SHA-512"], Ei = "https://altcha.org/", Ve = (n, u) => {
    t.$$host.dispatchEvent(new CustomEvent(n, { detail: u }));
  }, Pr = (mn = (_n = document.documentElement.lang) == null ? void 0 : _n.split("-")) == null ? void 0 : mn[0], lr = /* @__PURE__ */ Be(() => {
    var n;
    return o() && new URL(o(), location.origin).host.endsWith(".altcha.org") && !!((n = o()) != null && n.includes("apiKey=ckey_"));
  }), ar = /* @__PURE__ */ Be(() => l() ? Jr(l()) : void 0), ki = /* @__PURE__ */ Be(() => ot() ? Jr(ot()) : {}), T = /* @__PURE__ */ Be(() => ({
    ...Vr(),
    ...a(ki)
  })), Or = /* @__PURE__ */ Be(() => we() || `${j()}_checkbox_${Math.round(Math.random() * 1e8)}`);
  let wt = oe(!1), B = oe(null), A = oe(F(E.UNVERIFIED)), Q = oe(void 0), yt = oe(null), Me = oe(null), sr = oe(null), at = oe(null), M = oe(null), Xe = oe(null), Ee = null, Y = oe(null), Qe = oe(!1), qe = [], ur = oe(!1), $e = oe(null);
  yr(() => {
    Pi(a(Xe));
  }), yr(() => {
    Oi(a(A));
  }), Rl(() => {
    Ci(), a(M) && (a(M).removeEventListener("submit", Br), a(M).removeEventListener("reset", Yr), a(M).removeEventListener("focusin", Hr), w(M, null)), Ee && (clearTimeout(Ee), Ee = null), document.removeEventListener("click", jr), document.removeEventListener("scroll", Ur), window.removeEventListener("resize", Wr);
  }), pi(() => {
    var n;
    N("mounted", "1.4.2"), N("workers", lt()), Ri(), N("plugins", qe.length ? qe.map((u) => u.constructor.pluginName).join(", ") : "none"), ce() && N("using test mode"), _() && fr(_()), r() !== void 0 && N("auto", r()), v() !== void 0 && Xr(v()), w(M, F((n = a(Q)) == null ? void 0 : n.closest("form"))), a(M) && (a(M).addEventListener("submit", Br, { capture: !0 }), a(M).addEventListener("reset", Yr), (r() === "onfocus" || C() === "focus") && a(M).addEventListener("focusin", Hr)), r() === "onload" && (V() ? Et() : Ne()), a(lr) && (D() || O()) && N("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      Ve("load");
    });
  });
  function Tt(n, u) {
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
    for (const n of qe)
      n.destroy();
  }
  function Fr() {
    o() && Re() && a(A) === E.VERIFIED ? Ne() : st(E.EXPIRED, a(T).expired);
  }
  async function xi() {
    var n;
    if (Fe())
      throw N("mocking error"), new Error("Mocked error.");
    if (a(ar))
      return N("using provided json data"), a(ar);
    if (ce())
      return N("generating test challenge", { test: ce() }), Ll(typeof ce() != "boolean" ? +ce() : void 0);
    {
      if (!o() && a(M)) {
        const k = a(M).getAttribute("action");
        k != null && k.includes("/form/") && o(k + "/altcha");
      }
      if (!o())
        throw new Error("Attribute challengeurl not set.");
      N("fetching challenge from", o());
      let u = null, g = null;
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
        if (g = await u(o(), b), !g || !(g instanceof Response))
          throw new Error("Custom fetch function did not return a response.");
      } else
        g = await fetch(o(), b);
      if (g.status !== 200)
        throw new Error(`Server responded with ${g.status}.`);
      const m = g.headers.get("X-Altcha-Config"), R = await g.json(), y = new URLSearchParams((n = R.salt.split("?")) == null ? void 0 : n[1]), U = y.get("expires") || y.get("expire");
      if (U) {
        const k = new Date(+U * 1e3), H = isNaN(k.getTime()) ? 0 : k.getTime() - Date.now();
        H > 0 && fr(H);
      }
      if (m)
        try {
          const k = JSON.parse(m);
          k && typeof k == "object" && (k.verifyurl && (k.verifyurl = qr(k.verifyurl)), tn(k));
        } catch (k) {
          N("unable to configure from X-Altcha-Config", k);
        }
      return R;
    }
  }
  function Ai(n) {
    var g, b;
    const u = (g = a(M)) == null ? void 0 : g.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((b = u == null ? void 0 : u.value) == null ? void 0 : b.slice(u.value.indexOf("@"))) || void 0;
  }
  function Vr(n = [
    re() || "",
    document.documentElement.lang || "",
    ...navigator.languages
  ]) {
    const u = Object.keys(globalThis.altchaI18n).map((b) => b.toLowerCase()), g = n.reduce(
      (b, m) => (m = m.toLowerCase(), b || (globalThis.altchaI18n[m] ? m : null) || u.find((R) => m.split("-")[0] === R.split("-")[0]) || null),
      null
    );
    return globalThis.altchaI18n[g || "en"];
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
    var g;
    return [
      ...((g = a(M)) == null ? void 0 : g.querySelectorAll(n != null && n.length ? n.map((b) => `input[name="${b}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
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
    const u = new URL(o() || location.origin), g = new URL(n, u);
    return g.search || (g.search = u.search), g.toString();
  }
  function Ri() {
    const n = he() !== void 0 ? he().split(",") : void 0;
    for (const u of globalThis.altchaPlugins)
      (!n || n.includes(u.pluginName)) && qe.push(new u({
        el: a(Q),
        clarify: Et,
        dispatch: Ve,
        getConfiguration: rn,
        getFloatingAnchor: nn,
        getState: on,
        log: N,
        reset: st,
        solve: en,
        setState: ke,
        setFloatingAnchor: an,
        verify: Ne
      }));
  }
  function N(...n) {
    (c() || n.some((u) => u instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${j()}]`, ...n);
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
  function Di() {
    w(Y, F(X.PLAYING));
  }
  function Ti() {
    w(Y, F(X.PAUSED));
  }
  function Li(n) {
    if (n.preventDefault(), n.stopPropagation(), a(B)) {
      const u = new FormData(n.target);
      w(Qe, !0), Kr(Tt(a(B).challenge, a(B).solution), String(u.get("code"))).then(({ reason: g, verified: b }) => {
        b ? (w(B, null), ke(E.VERIFIED), N("verified"), pr().then(() => {
          var m;
          (m = a(sr)) == null || m.focus(), Ve("verified", { payload: a($e) });
        })) : (st(), w(Xe, F(g || "Verification failed")));
      }).catch((g) => {
        w(B, null), ke(E.ERROR, g), N("sentinel verification failed:", g);
      }).finally(() => {
        w(Qe, !1);
      });
    }
  }
  function jr(n) {
    var g;
    const u = n.target;
    v() && u && !a(Q).contains(u) && (a(A) === E.VERIFIED && C() === !1 || a(A) === E.VERIFIED && C() === "focus" && !((g = a(M)) != null && g.matches(":focus-within")) || r() === "off" && a(A) === E.UNVERIFIED) && ln();
  }
  function Ur() {
    v() && a(A) !== E.UNVERIFIED && kt();
  }
  function Pi(n) {
    for (const u of qe)
      typeof u.onErrorChange == "function" && u.onErrorChange(a(Xe));
  }
  function Hr(n) {
    a(A) === E.UNVERIFIED ? Ne() : v() && C() === "focus" && a(A) === E.VERIFIED && cr();
  }
  function Br(n) {
    a(M) && r() === "onsubmit" ? a(A) === E.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), Ne().then(() => {
      var u;
      (u = a(M)) == null || u.requestSubmit();
    })) : a(A) !== E.VERIFIED && (n.preventDefault(), n.stopPropagation(), a(A) === E.VERIFYING && Gr()) : a(M) && v() && r() === "off" && a(A) === E.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), cr());
  }
  function Yr() {
    st();
  }
  function Gr() {
    a(A) === E.VERIFYING && a(T).waitAlert && alert(a(T).waitAlert);
  }
  function Zr() {
    a(Me) ? a(Me).paused ? (a(Me).currentTime = 0, a(Me).play()) : a(Me).pause() : (w(ur, !0), requestAnimationFrame(() => {
      var n;
      (n = a(Me)) == null || n.play();
    }));
  }
  function Oi(n) {
    for (const u of qe)
      typeof u.onStateChange == "function" && u.onStateChange(a(A));
    v() && a(A) !== E.UNVERIFIED && requestAnimationFrame(() => {
      kt();
    }), w(wt, a(A) === E.VERIFIED);
  }
  function Wr() {
    v() && kt();
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
        email: U,
        expectedLanguages: k,
        expectedCountries: H,
        fields: ne,
        ipAddress: Ue,
        text: vr,
        timeZone: Pt
      } = Ii();
      u.blockedCountries = m, u.classifier = R, u.disableRules = y, u.email = U === !1 ? void 0 : Ai(U), u.expectedCountries = H, u.expectedLanguages = k || (Pr ? [Pr] : void 0), u.fields = ne === !1 ? void 0 : Mr(ne), u.ipAddress = Ue === !1 ? void 0 : Ue || "auto", u.text = vr, u.timeZone = Pt === !1 ? void 0 : Pt || Sn();
    }
    const g = await fetch(se(), {
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
  async function Kr(n, u) {
    if (!se())
      throw new Error("Attribute verifyurl not set.");
    N("requesting sentinel verification from", se());
    const g = { code: u, payload: n };
    Ke() && (g.fields = Ke().fields ? Mr() : void 0, g.timeZone = Ke().timeZone ? Sn() : void 0);
    const b = await fetch(se(), {
      body: JSON.stringify(g),
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
    N("floating", n), v() !== n && (a(Q).style.left = "", a(Q).style.top = ""), v(n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : v()), v() ? (r() || r("onsubmit"), document.addEventListener("scroll", Ur), document.addEventListener("click", jr), window.addEventListener("resize", Wr)) : r() === "onsubmit" && r(void 0);
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
      } catch (g) {
        N(g);
      }
      if ((u == null ? void 0 : u.number) !== void 0 || "obfuscated" in n)
        return { data: n, solution: u };
    }
    if ("obfuscated" in n) {
      const g = await Vl(n.obfuscated, n.key, n.maxNumber || n.maxnumber);
      return { data: n, solution: await g.promise };
    }
    return {
      data: n,
      solution: await Pl(n.challenge, n.salt, n.algorithm, n.maxNumber || n.maxnumber || ae()).promise
    };
  }
  async function Vi(n, u = typeof ce() == "number" ? ce() : n.maxNumber || n.maxnumber || ae(), g = Math.ceil(lt())) {
    const b = [];
    g = Math.min(16, u, Math.max(1, g));
    for (let y = 0; y < g; y++)
      b.push(altchaCreateWorker(bt()));
    const m = Math.ceil(u / g), R = await Promise.all(b.map((y, U) => {
      const k = U * m;
      return new Promise((H) => {
        y.addEventListener("message", (ne) => {
          if (ne.data)
            for (const Ue of b)
              Ue !== y && Ue.postMessage({ type: "abort" });
          H(ne.data);
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
    const n = qe.find((u) => u.constructor.pluginName === "obfuscation");
    if (!n || !("clarify" in n)) {
      ke(E.ERROR), N("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in n && typeof n.clarify == "function")
      return n.clarify();
  }
  function tn(n) {
    n.obfuscated !== void 0 && V(n.obfuscated), n.auto !== void 0 && (r(n.auto), r() === "onload" && (V() ? Et() : Ne())), n.blockspam !== void 0 && i(!!n.blockspam), n.customfetch !== void 0 && f(n.customfetch), n.floatinganchor !== void 0 && h(n.floatinganchor), n.delay !== void 0 && d(n.delay), n.floatingoffset !== void 0 && p(n.floatingoffset), n.floating !== void 0 && Xr(n.floating), n.expire !== void 0 && (fr(n.expire), _(n.expire)), n.challenge && (l(typeof n.challenge == "string" ? n.challenge : JSON.stringify(n.challenge)), Qr(a(ar))), n.challengeurl !== void 0 && o(n.challengeurl), n.debug !== void 0 && c(!!n.debug), n.hidefooter !== void 0 && D(!!n.hidefooter), n.hidelogo !== void 0 && O(!!n.hidelogo), n.language !== void 0 && ot(Vr([n.language])), n.maxnumber !== void 0 && ae(+n.maxnumber), n.mockerror !== void 0 && Fe(!!n.mockerror), n.name !== void 0 && j(n.name), n.refetchonexpire !== void 0 && Re(!!n.refetchonexpire), n.sentinel !== void 0 && typeof n.sentinel == "object" && Ke(n.sentinel), n.spamfilter !== void 0 && ye(typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && ot(typeof n.strings == "string" ? n.strings : JSON.stringify(n.strings)), n.test !== void 0 && ce(typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && se(n.verifyurl), n.workers !== void 0 && lt(+n.workers), n.workerurl !== void 0 && bt(n.workerurl);
  }
  function rn() {
    return {
      auto: r(),
      blockspam: i(),
      challengeurl: o(),
      debug: c(),
      delay: d(),
      expire: _(),
      floating: v(),
      floatinganchor: h(),
      floatingoffset: p(),
      hidefooter: D(),
      hidelogo: O(),
      name: j(),
      maxnumber: ae(),
      mockerror: Fe(),
      obfuscated: V(),
      refetchonexpire: Re(),
      spamfilter: ye(),
      strings: a(T),
      test: ce(),
      verifyurl: se(),
      workers: lt(),
      workerurl: bt()
    };
  }
  function nn() {
    return a(at);
  }
  function Mi(n) {
    return qe.find((u) => u.constructor.pluginName === n);
  }
  function on() {
    return a(A);
  }
  function ln() {
    a(Q).style.display = "none";
  }
  function kt(n = 20) {
    var u;
    if (a(Q))
      if (a(at) || w(at, F((h() ? document.querySelector(h()) : (u = a(M)) == null ? void 0 : u.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || a(M))), a(at)) {
        const g = parseInt(p(), 10) || 12, b = a(at).getBoundingClientRect(), m = a(Q).getBoundingClientRect(), R = document.documentElement.clientHeight, y = document.documentElement.clientWidth, U = v() === "auto" ? b.bottom + m.height + g + n > R : v() === "top", k = Math.max(n, Math.min(y - n - m.width, b.left + b.width / 2 - m.width / 2));
        if (U ? a(Q).style.top = `${b.top - (m.height + g)}px` : a(Q).style.top = `${b.bottom + g}px`, a(Q).style.left = `${k}px`, a(Q).setAttribute("data-floating", U ? "top" : "bottom"), a(yt)) {
          const H = a(yt).getBoundingClientRect();
          a(yt).style.left = b.left - k + b.width / 2 - H.width / 2 + "px";
        }
      } else
        N("unable to find floating anchor element");
  }
  function st(n = E.UNVERIFIED, u = null) {
    Ee && (clearTimeout(Ee), Ee = null), w(wt, !1), w($e, null), w(B, null), w(ur, !1), w(Y, null), ke(n, u);
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
    a(Q).style.display = "block", v() && kt();
  }
  async function Ne() {
    return st(E.VERIFYING), await new Promise((n) => setTimeout(n, d() || 0)), xi().then((n) => (Qr(n), N("challenge", n), en(n))).then(({ data: n, solution: u }) => {
      var g;
      if (N("solution", u), !u || n && "challenge" in n && !("clearText" in u))
        if ((u == null ? void 0 : u.number) !== void 0 && "challenge" in n)
          if (se() && "codeChallenge" in n)
            ((g = document.activeElement) == null ? void 0 : g.tagName) === "INPUT" && document.activeElement.blur(), w(B, F({ challenge: n, solution: u }));
          else {
            if (se() && Ke() !== void 0)
              return Kr(Tt(n, u));
            if (se())
              return Fi(Tt(n, u));
            w($e, F(Tt(n, u))), N("payload", a($e));
          }
        else
          throw N("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      a(B) ? (ke(E.CODE), pr().then(() => {
        Ve("code", { codeChallenge: a(B) });
      })) : (ke(E.VERIFIED), N("verified"), pr().then(() => {
        Ve("verified", { payload: a($e) });
      }));
    }).catch((n) => {
      N(n), ke(E.ERROR, n.message);
    });
  }
  var sn = ia(), un = It(sn);
  bl(un, t, "default", {});
  var Ct = J(un, 2), dr = W(Ct), Lt = W(dr);
  let fn;
  var cn = W(Lt);
  {
    var qi = (n) => {
      br(n);
    };
    K(cn, (n) => {
      a(A) === E.VERIFYING && n(qi);
    });
  }
  var je = J(cn, 2);
  $n(je), je.__change = [
    Ul,
    A,
    ye,
    M,
    wt,
    V,
    Et,
    Ne
  ], Vt(je, (n) => w(sr, n), () => a(sr)), Z(Lt);
  var xt = J(Lt, 2), ji = W(xt);
  {
    var Ui = (n) => {
      var u = Ft(), g = It(u);
      et(g, () => a(T).verified), q(n, u);
    }, Hi = (n, u) => {
      {
        var g = (m) => {
          var R = Ft(), y = It(R);
          et(y, () => a(T).verifying), q(m, R);
        }, b = (m, R) => {
          {
            var y = (k) => {
              var H = Ft(), ne = It(H);
              et(ne, () => a(T).verificationRequired), q(k, H);
            }, U = (k) => {
              var H = Ft(), ne = It(H);
              et(ne, () => a(T).label), q(k, H);
            };
            K(
              m,
              (k) => {
                a(A) === E.CODE ? k(y) : k(U, !1);
              },
              R
            );
          }
        };
        K(
          n,
          (m) => {
            a(A) === E.VERIFYING ? m(g) : m(b, !1);
          },
          u
        );
      }
    };
    K(ji, (n) => {
      a(A) === E.VERIFIED ? n(Ui) : n(Hi, !1);
    });
  }
  Z(xt);
  var dn = J(xt, 2);
  {
    var Bi = (n) => {
      var u = Bl();
      $n(u), ze(() => {
        $(u, "name", j()), xl(u, a($e));
      }), q(n, u);
    };
    K(dn, (n) => {
      a(A) === E.VERIFIED && n(Bi);
    });
  }
  var vn = J(dn, 2);
  {
    var Yi = (n) => {
      var u = Yl(), g = W(u);
      $(g, "href", Ei), Z(u), ze(() => $(g, "aria-label", a(T).ariaLinkLabel)), q(n, u);
    };
    K(vn, (n) => {
      (O() !== !0 || a(lr)) && n(Yi);
    });
  }
  var Gi = J(vn, 2);
  {
    var Zi = (n) => {
      var u = Xl(), g = J(W(u), 2), b = W(g), m = J(b, 2);
      dl(m), m.__keydown = [
        ql,
        Zr
      ];
      var R = J(m, 2), y = W(R), U = W(y);
      {
        var k = (ge) => {
          var G = Jl();
          G.__click = Zr;
          var Ot = W(G);
          {
            var At = (ut) => {
              br(ut, () => 20);
            }, to = (ut, ro) => {
              {
                var no = (ft) => {
                  var hr = Gl();
                  q(ft, hr);
                }, io = (ft, hr) => {
                  {
                    var oo = (ct) => {
                      var gr = Zl();
                      q(ct, gr);
                    }, lo = (ct) => {
                      var gr = Wl();
                      q(ct, gr);
                    };
                    K(
                      ft,
                      (ct) => {
                        a(Y) === X.PLAYING ? ct(oo) : ct(lo, !1);
                      },
                      hr
                    );
                  }
                };
                K(
                  ut,
                  (ft) => {
                    a(Y) === X.ERROR ? ft(no) : ft(io, !1);
                  },
                  ro
                );
              }
            };
            K(Ot, (ut) => {
              a(Y) === X.LOADING ? ut(At) : ut(to, !1);
            });
          }
          Z(G), ze(() => {
            $(G, "title", a(T).getAudioChallenge), G.disabled = a(Y) === X.LOADING || a(Y) === X.ERROR || a(Qe), $(G, "aria-label", a(Y) === X.LOADING ? a(T).loading : a(T).getAudioChallenge);
          }), q(ge, G);
        };
        K(U, (ge) => {
          a(B).challenge.codeChallenge.audio && ge(k);
        });
      }
      var H = J(U, 2);
      H.__click = [jl, Ne], Z(y);
      var ne = J(y, 2), Ue = W(ne);
      {
        var vr = (ge) => {
          br(ge, () => 16);
        };
        K(Ue, (ge) => {
          a(Qe) && ge(vr);
        });
      }
      var Pt = J(Ue);
      Z(ne), Z(R);
      var Qi = J(R, 2);
      {
        var eo = (ge) => {
          var G = Kl(), Ot = W(G);
          Z(G), Vt(G, (At) => w(Me, At), () => a(Me)), ze((At) => $(Ot, "src", At), [
            () => qr(a(B).challenge.codeChallenge.audio)
          ]), He("loadstart", G, Si), He("canplay", G, zi), He("pause", G, Ti), He("playing", G, Di), He("ended", G, $i), He("error", Ot, Ni), q(ge, G);
        };
        K(Qi, (ge) => {
          a(B).challenge.codeChallenge.audio && a(ur) && ge(eo);
        });
      }
      Z(g), Z(u), ze(() => {
        $(u, "aria-label", a(T).verificationRequired), $(b, "src", a(B).challenge.codeChallenge.image), $(m, "minlength", a(B).challenge.codeChallenge.length || 1), $(m, "maxlength", a(B).challenge.codeChallenge.length), $(m, "placeholder", a(T).enterCode), $(m, "aria-label", a(Y) === X.LOADING ? a(T).loading : a(Y) === X.PLAYING ? "" : a(T).enterCodeAria), $(m, "aria-live", a(Y) ? "assertive" : "polite"), $(m, "aria-busy", a(Y) === X.LOADING), m.disabled = a(Qe), $(H, "aria-label", a(T).reload), $(H, "title", a(T).reload), H.disabled = a(Qe), ne.disabled = a(Qe), $(ne, "aria-label", a(T).verify), _l(Pt, ` ${a(T).verify ?? ""}`);
      }), He("submit", g, Li), q(n, u);
    };
    K(Gi, (n) => {
      var u;
      (u = a(B)) != null && u.challenge.codeChallenge && n(Zi);
    });
  }
  Z(dr);
  var hn = J(dr, 2);
  {
    var Wi = (n) => {
      var u = ta(), g = J(W(u), 2);
      {
        var b = (R) => {
          var y = Ql(), U = W(y);
          et(U, () => a(T).expired), Z(y), ze(() => $(y, "title", a(Xe))), q(R, y);
        }, m = (R) => {
          var y = ea(), U = W(y);
          et(U, () => a(T).error), Z(y), ze(() => $(y, "title", a(Xe))), q(R, y);
        };
        K(g, (R) => {
          a(A) === E.EXPIRED ? R(b) : R(m, !1);
        });
      }
      Z(u), q(n, u);
    };
    K(hn, (n) => {
      (a(Xe) || a(A) === E.EXPIRED) && n(Wi);
    });
  }
  var gn = J(hn, 2);
  {
    var Ji = (n) => {
      var u = ra(), g = W(u), b = W(g);
      et(b, () => a(T).footer), Z(g), Z(u), q(n, u);
    };
    K(gn, (n) => {
      a(T).footer && (D() !== !0 || a(lr)) && n(Ji);
    });
  }
  var Ki = J(gn, 2);
  {
    var Xi = (n) => {
      var u = na();
      Vt(u, (g) => w(yt, g), () => a(yt)), q(n, u);
    };
    K(Ki, (n) => {
      v() && n(Xi);
    });
  }
  return Z(Ct), Vt(Ct, (n) => w(Q, n), () => a(Q)), ze(
    (n) => {
      var u;
      $(Ct, "data-state", a(A)), $(Ct, "data-floating", v()), fn = El(Lt, 1, "altcha-checkbox svelte-uo3tkz", null, fn, n), $(je, "id", a(Or)), je.required = r() !== "onsubmit" && (!v() || r() !== "off"), $(je, "aria-hidden", a(A) === E.VERIFYING), $(xt, "for", a(Or)), $(xt, "aria-hidden", !!((u = a(B)) != null && u.challenge.codeChallenge));
    },
    [
      () => ({
        "altcha-checkbox-verifying": a(A) === E.VERIFYING
      })
    ]
  ), He("invalid", je, Gr), Il(je, () => a(wt), (n) => w(wt, n)), q(e, sn), fi({
    clarify: Et,
    configure: tn,
    getConfiguration: rn,
    getFloatingAnchor: nn,
    getPlugin: Mi,
    getState: on,
    hide: ln,
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
      return o();
    },
    set challengeurl(n = void 0) {
      o(n), x();
    },
    get challengejson() {
      return l();
    },
    set challengejson(n = void 0) {
      l(n), x();
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
      return v();
    },
    set floating(n = void 0) {
      v(n), x();
    },
    get floatinganchor() {
      return h();
    },
    set floatinganchor(n = void 0) {
      h(n), x();
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
      return D();
    },
    set hidefooter(n = !1) {
      D(n), x();
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
      return j();
    },
    set name(n = "altcha") {
      j(n), x();
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
      return he();
    },
    set plugins(n = void 0) {
      he(n), x();
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
      return ot();
    },
    set strings(n = void 0) {
      ot(n), x();
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
      return lt();
    },
    set workers(n = Math.min(16, navigator.hardwareConcurrency || 8)) {
      lt(n), x();
    },
    get workerurl() {
      return bt();
    },
    set workerurl(n = void 0) {
      bt(n), x();
    }
  });
}
gl(["change", "keydown", "click"]);
customElements.define("altcha-widget", Dl(
  la,
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
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
export {
  la as Altcha
};
