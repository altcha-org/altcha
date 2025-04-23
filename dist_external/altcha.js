var io = Object.defineProperty;
var mn = (e) => {
  throw TypeError(e);
};
var ao = (e, t, r) => t in e ? io(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var pe = (e, t, r) => ao(e, typeof t != "symbol" ? t + "" : t, r), pn = (e, t, r) => t.has(e) || mn("Cannot " + r);
var le = (e, t, r) => (pn(e, t, "read from private field"), r ? r.call(e) : t.get(e)), gr = (e, t, r) => t.has(e) ? mn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), _r = (e, t, r, l) => (pn(e, t, "write to private field"), l ? l.call(e, r) : t.set(e, r), r);
const so = "5";
var Sn;
typeof window < "u" && ((Sn = window.__svelte ?? (window.__svelte = {})).v ?? (Sn.v = /* @__PURE__ */ new Set())).add(so);
const uo = 1, fo = 4, co = 8, vo = 16, ho = 1, go = 2, Cr = "[", Dn = "[!", Tn = "]", vt = {}, ie = Symbol(), _o = "http://www.w3.org/1999/xhtml", bn = !1, we = 2, Ln = 4, Kt = 8, xr = 16, Oe = 32, rt = 64, Ut = 128, ve = 256, qt = 512, ue = 1024, Fe = 2048, mt = 4096, ht = 8192, Xt = 16384, mo = 32768, Ar = 65536, po = 1 << 19, Pn = 1 << 20, Rt = Symbol("$state"), On = Symbol("legacy props"), bo = Symbol("");
var Fn = Array.isArray, wo = Array.prototype.indexOf, yo = Array.from, Ht = Object.keys, Bt = Object.defineProperty, et = Object.getOwnPropertyDescriptor, ko = Object.getOwnPropertyDescriptors, Eo = Object.prototype, Co = Array.prototype, Vn = Object.getPrototypeOf;
function Mn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function xo(e, t, r = !1) {
  return e === void 0 ? r ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
const Ao = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Nt = [], zt = [];
function jn() {
  var e = Nt;
  Nt = [], Mn(e);
}
function Un() {
  var e = zt;
  zt = [], Mn(e);
}
function Qt(e) {
  Nt.length === 0 && queueMicrotask(jn), Nt.push(e);
}
function Io(e) {
  zt.length === 0 && Ao(Un), zt.push(e);
}
function wn() {
  Nt.length > 0 && jn(), zt.length > 0 && Un();
}
function qn(e) {
  return e === this.v;
}
function Ro(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ir(e) {
  return !Ro(e, this.v);
}
function $o(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function No() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function zo(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function So() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Do() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function To(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Lo() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Po() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Oo() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Fo() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Vo = !1;
function Ae(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: qn,
    rv: 0,
    wv: 0
  };
  return r;
}
function oe(e) {
  return /* @__PURE__ */ Mo(Ae(e));
}
// @__NO_SIDE_EFFECTS__
function Hn(e, t = !1) {
  const r = Ae(e);
  return t || (r.equals = Ir), r;
}
// @__NO_SIDE_EFFECTS__
function Mo(e) {
  return z !== null && !be && (z.f & we) !== 0 && (Ie === null ? Go([e]) : Ie.push(e)), e;
}
function w(e, t) {
  return z !== null && !be && fl() && (z.f & (we | xr)) !== 0 && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (Ie === null || !Ie.includes(e)) && Fo(), jo(e, t);
}
function jo(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = Xn(), Bn(e, Fe), S !== null && (S.f & ue) !== 0 && (S.f & (Oe | rt)) === 0 && (De === null ? Zo([e]) : De.push(e))), t;
}
function Bn(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var l = r.length, o = 0; o < l; o++) {
      var i = r[o], s = i.f;
      (s & Fe) === 0 && ($e(i, t), (s & (ue | ve)) !== 0 && ((s & we) !== 0 ? Bn(
        /** @type {Derived} */
        i,
        mt
      ) : nr(
        /** @type {Effect} */
        i
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Be(e) {
  var t = we | Fe, r = z !== null && (z.f & we) !== 0 ? (
    /** @type {Derived} */
    z
  ) : null;
  return S === null || r !== null && (r.f & ve) !== 0 ? t |= ve : S.f |= Pn, {
    ctx: re,
    deps: null,
    effects: null,
    equals: qn,
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
  return t.equals = Ir, t;
}
function Yn(e) {
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
function qo(e) {
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
function Ho(e) {
  var t, r = S;
  We(qo(e));
  try {
    Yn(e), t = el(e);
  } finally {
    We(r);
  }
  return t;
}
function Gn(e) {
  var t = Ho(e), r = (Ye || (e.f & ve) !== 0) && e.deps !== null ? mt : ue;
  $e(e, r), e.equals(t) || (e.v = t, e.wv = Xn());
}
function er(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let P = !1;
function dt(e) {
  P = e;
}
let L;
function Ge(e) {
  if (e === null)
    throw er(), vt;
  return L = e;
}
function gt() {
  return Ge(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Je(L)
  );
}
function W(e) {
  if (P) {
    if (/* @__PURE__ */ Je(L) !== null)
      throw er(), vt;
    L = e;
  }
}
function Bo() {
  for (var e = 0, t = L; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === Tn) {
        if (e === 0) return t;
        e -= 1;
      } else (r === Cr || r === Dn) && (e += 1);
    }
    var l = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Je(t)
    );
    t.remove(), t = l;
  }
}
function O(e, t = null, r) {
  if (typeof e != "object" || e === null || Rt in e)
    return e;
  const l = Vn(e);
  if (l !== Eo && l !== Co)
    return e;
  var o = /* @__PURE__ */ new Map(), i = Fn(e), s = Ae(0);
  i && o.set("length", Ae(
    /** @type {any[]} */
    e.length
  ));
  var c;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(f, d, v) {
        (!("value" in v) || v.configurable === !1 || v.enumerable === !1 || v.writable === !1) && Lo();
        var h = o.get(d);
        return h === void 0 ? (h = Ae(v.value), o.set(d, h)) : w(h, O(v.value, c)), !0;
      },
      deleteProperty(f, d) {
        var v = o.get(d);
        if (v === void 0)
          d in f && o.set(d, Ae(ie));
        else {
          if (i && typeof d == "string") {
            var h = (
              /** @type {Source<number>} */
              o.get("length")
            ), g = Number(d);
            Number.isInteger(g) && g < h.v && w(h, g);
          }
          w(v, ie), yn(s);
        }
        return !0;
      },
      get(f, d, v) {
        var C;
        if (d === Rt)
          return e;
        var h = o.get(d), g = d in f;
        if (h === void 0 && (!g || (C = et(f, d)) != null && C.writable) && (h = Ae(O(g ? f[d] : ie, c)), o.set(d, h)), h !== void 0) {
          var m = a(h);
          return m === ie ? void 0 : m;
        }
        return Reflect.get(f, d, v);
      },
      getOwnPropertyDescriptor(f, d) {
        var v = Reflect.getOwnPropertyDescriptor(f, d);
        if (v && "value" in v) {
          var h = o.get(d);
          h && (v.value = a(h));
        } else if (v === void 0) {
          var g = o.get(d), m = g == null ? void 0 : g.v;
          if (g !== void 0 && m !== ie)
            return {
              enumerable: !0,
              configurable: !0,
              value: m,
              writable: !0
            };
        }
        return v;
      },
      has(f, d) {
        var m;
        if (d === Rt)
          return !0;
        var v = o.get(d), h = v !== void 0 && v.v !== ie || Reflect.has(f, d);
        if (v !== void 0 || S !== null && (!h || (m = et(f, d)) != null && m.writable)) {
          v === void 0 && (v = Ae(h ? O(f[d], c) : ie), o.set(d, v));
          var g = a(v);
          if (g === ie)
            return !1;
        }
        return h;
      },
      set(f, d, v, h) {
        var j;
        var g = o.get(d), m = d in f;
        if (i && d === "length")
          for (var C = v; C < /** @type {Source<number>} */
          g.v; C += 1) {
            var D = o.get(C + "");
            D !== void 0 ? w(D, ie) : C in f && (D = Ae(ie), o.set(C + "", D));
          }
        g === void 0 ? (!m || (j = et(f, d)) != null && j.writable) && (g = Ae(void 0), w(g, O(v, c)), o.set(d, g)) : (m = g.v !== ie, w(g, O(v, c)));
        var V = Reflect.getOwnPropertyDescriptor(f, d);
        if (V != null && V.set && V.set.call(h, v), !m) {
          if (i && typeof d == "string") {
            var ke = (
              /** @type {Source<number>} */
              o.get("length")
            ), H = Number(d);
            Number.isInteger(H) && H >= ke.v && w(ke, H + 1);
          }
          yn(s);
        }
        return !0;
      },
      ownKeys(f) {
        a(s);
        var d = Reflect.ownKeys(f).filter((g) => {
          var m = o.get(g);
          return m === void 0 || m.v !== ie;
        });
        for (var [v, h] of o)
          h.v !== ie && !(v in f) && d.push(v);
        return d;
      },
      setPrototypeOf() {
        Po();
      }
    }
  );
}
function yn(e, t = 1) {
  w(e, e.v + t);
}
var kn, Zn, Wn, Jn;
function br() {
  if (kn === void 0) {
    kn = window, Zn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    Wn = et(t, "firstChild").get, Jn = et(t, "nextSibling").get, e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function tr(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Le(e) {
  return Wn.call(e);
}
// @__NO_SIDE_EFFECTS__
function Je(e) {
  return Jn.call(e);
}
function J(e, t) {
  if (!P)
    return /* @__PURE__ */ Le(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Le(L)
  );
  return r === null && (r = L.appendChild(tr())), Ge(r), r;
}
function At(e, t) {
  if (!P) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Le(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Je(r) : r;
  }
  return L;
}
function K(e, t = 1, r = !1) {
  let l = P ? L : e;
  for (var o; t--; )
    o = l, l = /** @type {TemplateNode} */
    /* @__PURE__ */ Je(l);
  if (!P)
    return l;
  var i = l == null ? void 0 : l.nodeType;
  if (r && i !== 3) {
    var s = tr();
    return l === null ? o == null || o.after(s) : l.before(s), Ge(s), s;
  }
  return Ge(l), /** @type {TemplateNode} */
  l;
}
function Yo(e) {
  e.textContent = "";
}
let Mt = !1, Yt = !1, Gt = null, tt = !1, Rr = !1;
function En(e) {
  Rr = e;
}
let $t = [];
let z = null, be = !1;
function Ze(e) {
  z = e;
}
let S = null;
function We(e) {
  S = e;
}
let Ie = null;
function Go(e) {
  Ie = e;
}
let te = null, se = 0, De = null;
function Zo(e) {
  De = e;
}
let Kn = 1, Zt = 0, Ye = !1;
function Xn() {
  return ++Kn;
}
function St(e) {
  var h;
  var t = e.f;
  if ((t & Fe) !== 0)
    return !0;
  if ((t & mt) !== 0) {
    var r = e.deps, l = (t & ve) !== 0;
    if (r !== null) {
      var o, i, s = (t & qt) !== 0, c = l && S !== null && !Ye, f = r.length;
      if (s || c) {
        var d = (
          /** @type {Derived} */
          e
        ), v = d.parent;
        for (o = 0; o < f; o++)
          i = r[o], (s || !((h = i == null ? void 0 : i.reactions) != null && h.includes(d))) && (i.reactions ?? (i.reactions = [])).push(d);
        s && (d.f ^= qt), c && v !== null && (v.f & ve) === 0 && (d.f ^= ve);
      }
      for (o = 0; o < f; o++)
        if (i = r[o], St(
          /** @type {Derived} */
          i
        ) && Gn(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!l || S !== null && !Ye) && $e(e, ue);
  }
  return !1;
}
function Wo(e, t) {
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
  throw Mt = !1, e;
}
function Jo(e) {
  return (e.f & Xt) === 0 && (e.parent === null || (e.parent.f & Ut) === 0);
}
function rr(e, t, r, l) {
  if (Mt) {
    if (r === null && (Mt = !1), Jo(t))
      throw e;
    return;
  }
  r !== null && (Mt = !0);
  {
    Wo(e, t);
    return;
  }
}
function Qn(e, t, r = !0) {
  var l = e.reactions;
  if (l !== null)
    for (var o = 0; o < l.length; o++) {
      var i = l[o];
      (i.f & we) !== 0 ? Qn(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (r ? $e(i, Fe) : (i.f & ue) !== 0 && $e(i, mt), nr(
        /** @type {Effect} */
        i
      ));
    }
}
function el(e) {
  var m;
  var t = te, r = se, l = De, o = z, i = Ye, s = Ie, c = re, f = be, d = e.f;
  te = /** @type {null | Value[]} */
  null, se = 0, De = null, Ye = (d & ve) !== 0 && (be || !tt || z === null), z = (d & (Oe | rt)) === 0 ? e : null, Ie = null, xn(e.ctx), be = !1, Zt++;
  try {
    var v = (
      /** @type {Function} */
      (0, e.fn)()
    ), h = e.deps;
    if (te !== null) {
      var g;
      if (Wt(e, se), h !== null && se > 0)
        for (h.length = se + te.length, g = 0; g < te.length; g++)
          h[se + g] = te[g];
      else
        e.deps = h = te;
      if (!Ye)
        for (g = se; g < h.length; g++)
          ((m = h[g]).reactions ?? (m.reactions = [])).push(e);
    } else h !== null && se < h.length && (Wt(e, se), h.length = se);
    if (fl() && De !== null && !be && h !== null && (e.f & (we | mt | Fe)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      De.length; g++)
        Qn(
          De[g],
          /** @type {Effect} */
          e
        );
    return o !== null && Zt++, v;
  } finally {
    te = t, se = r, De = l, z = o, Ye = i, Ie = s, xn(c), be = f;
  }
}
function Ko(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var l = wo.call(r, e);
    if (l !== -1) {
      var o = r.length - 1;
      o === 0 ? r = t.reactions = null : (r[l] = r[o], r.pop());
    }
  }
  r === null && (t.f & we) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (te === null || !te.includes(t)) && ($e(t, mt), (t.f & (ve | qt)) === 0 && (t.f ^= qt), Yn(
    /** @type {Derived} **/
    t
  ), Wt(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Wt(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var l = t; l < r.length; l++)
      Ko(e, r[l]);
}
function $r(e) {
  var t = e.f;
  if ((t & Xt) === 0) {
    $e(e, ue);
    var r = S, l = re, o = tt;
    S = e, tt = !0;
    try {
      (t & xr) !== 0 ? ai(e) : nl(e), rl(e);
      var i = el(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Kn;
      var s = e.deps, c;
      bn && Vo && e.f & Fe;
    } catch (f) {
      rr(f, e, r, l || e.ctx);
    } finally {
      tt = o, S = r;
    }
  }
}
function Xo() {
  try {
    So();
  } catch (e) {
    if (Gt !== null)
      rr(e, Gt, null);
    else
      throw e;
  }
}
function tl() {
  var e = tt;
  try {
    var t = 0;
    for (tt = !0; $t.length > 0; ) {
      t++ > 1e3 && Xo();
      var r = $t, l = r.length;
      $t = [];
      for (var o = 0; o < l; o++) {
        var i = ei(r[o]);
        Qo(i);
      }
    }
  } finally {
    Yt = !1, tt = e, Gt = null;
  }
}
function Qo(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var l = e[r];
      if ((l.f & (Xt | ht)) === 0)
        try {
          St(l) && ($r(l), l.deps === null && l.first === null && l.nodes_start === null && (l.teardown === null ? ll(l) : l.fn = null));
        } catch (o) {
          rr(o, l, null, l.ctx);
        }
    }
}
function nr(e) {
  Yt || (Yt = !0, queueMicrotask(tl));
  for (var t = Gt = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (rt | Oe)) !== 0) {
      if ((r & ue) === 0) return;
      t.f ^= ue;
    }
  }
  $t.push(t);
}
function ei(e) {
  for (var t = [], r = e; r !== null; ) {
    var l = r.f, o = (l & (Oe | rt)) !== 0, i = o && (l & ue) !== 0;
    if (!i && (l & ht) === 0) {
      if ((l & Ln) !== 0)
        t.push(r);
      else if (o)
        r.f ^= ue;
      else {
        var s = z;
        try {
          z = r, St(r) && $r(r);
        } catch (d) {
          rr(d, r, null, r.ctx);
        } finally {
          z = s;
        }
      }
      var c = r.first;
      if (c !== null) {
        r = c;
        continue;
      }
    }
    var f = r.parent;
    for (r = r.next; r === null && f !== null; )
      r = f.next, f = f.parent;
  }
  return t;
}
function x(e) {
  var t;
  for (wn(); $t.length > 0; )
    Yt = !0, tl(), wn();
  return (
    /** @type {T} */
    t
  );
}
async function mr() {
  await Promise.resolve(), x();
}
function a(e) {
  var t = e.f, r = (t & we) !== 0;
  if (z !== null && !be) {
    Ie !== null && Ie.includes(e) && Oo();
    var l = z.deps;
    e.rv < Zt && (e.rv = Zt, te === null && l !== null && l[se] === e ? se++ : te === null ? te = [e] : (!Ye || !te.includes(e)) && te.push(e));
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), i = o.parent;
    i !== null && (i.f & ve) === 0 && (o.f ^= ve);
  }
  return r && (o = /** @type {Derived} */
  e, St(o) && Gn(o)), e.v;
}
function _t(e) {
  var t = be;
  try {
    return be = !0, e();
  } finally {
    be = t;
  }
}
const ti = -7169;
function $e(e, t) {
  e.f = e.f & ti | t;
}
function ri(e) {
  S === null && z === null && zo(), z !== null && (z.f & ve) !== 0 && S === null && No(), Rr && $o();
}
function ni(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function nt(e, t, r, l = !0) {
  var o = S, i = {
    ctx: re,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Fe,
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
      $r(i), i.f |= mo;
    } catch (f) {
      throw Pe(i), f;
    }
  else t !== null && nr(i);
  var s = r && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (Pn | Ut)) === 0;
  if (!s && l && (o !== null && ni(i, o), z !== null && (z.f & we) !== 0)) {
    var c = (
      /** @type {Derived} */
      z
    );
    (c.effects ?? (c.effects = [])).push(i);
  }
  return i;
}
function li(e) {
  const t = nt(Kt, null, !1);
  return $e(t, ue), t.teardown = e, t;
}
function wr(e) {
  ri();
  var t = S !== null && (S.f & Oe) !== 0 && re !== null && !re.m;
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
    var l = Nr(e);
    return l;
  }
}
function oi(e) {
  const t = nt(rt, e, !0);
  return () => {
    Pe(t);
  };
}
function ii(e) {
  const t = nt(rt, e, !0);
  return (r = {}) => new Promise((l) => {
    r.outro ? yr(t, () => {
      Pe(t), l(void 0);
    }) : (Pe(t), l(void 0));
  });
}
function Nr(e) {
  return nt(Ln, e, !1);
}
function zr(e) {
  return nt(Kt, e, !0);
}
function Se(e, t = [], r = Be) {
  const l = t.map(r);
  return Sr(() => e(...l.map(a)));
}
function Sr(e, t = 0) {
  return nt(Kt | xr | t, e, !0);
}
function Jt(e, t = !0) {
  return nt(Kt | Oe, e, !0, t);
}
function rl(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Rr, l = z;
    En(!0), Ze(null);
    try {
      t.call(null);
    } finally {
      En(r), Ze(l);
    }
  }
}
function nl(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var l = r.next;
    (r.f & rt) !== 0 ? r.parent = null : Pe(r, t), r = l;
  }
}
function ai(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Oe) === 0 && Pe(t), t = r;
  }
}
function Pe(e, t = !0) {
  var r = !1;
  if ((t || (e.f & po) !== 0) && e.nodes_start !== null) {
    for (var l = e.nodes_start, o = e.nodes_end; l !== null; ) {
      var i = l === o ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Je(l)
      );
      l.remove(), l = i;
    }
    r = !0;
  }
  nl(e, t && !r), Wt(e, 0), $e(e, Xt);
  var s = e.transitions;
  if (s !== null)
    for (const f of s)
      f.stop();
  rl(e);
  var c = e.parent;
  c !== null && c.first !== null && ll(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function ll(e) {
  var t = e.parent, r = e.prev, l = e.next;
  r !== null && (r.next = l), l !== null && (l.prev = r), t !== null && (t.first === e && (t.first = l), t.last === e && (t.last = r));
}
function yr(e, t) {
  var r = [];
  ol(e, r, !0), si(r, () => {
    Pe(e), t && t();
  });
}
function si(e, t) {
  var r = e.length;
  if (r > 0) {
    var l = () => --r || t();
    for (var o of e)
      o.out(l);
  } else
    t();
}
function ol(e, t, r) {
  if ((e.f & ht) === 0) {
    if (e.f ^= ht, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || r) && t.push(s);
    for (var l = e.first; l !== null; ) {
      var o = l.next, i = (l.f & Ar) !== 0 || (l.f & Oe) !== 0;
      ol(l, t, i ? r : !1), l = o;
    }
  }
}
function Cn(e) {
  il(e, !0);
}
function il(e, t) {
  if ((e.f & ht) !== 0) {
    e.f ^= ht, (e.f & ue) === 0 && (e.f ^= ue), St(e) && ($e(e, Fe), nr(e));
    for (var r = e.first; r !== null; ) {
      var l = r.next, o = (r.f & Ar) !== 0 || (r.f & Oe) !== 0;
      il(r, o ? t : !1), r = l;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
function al(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let re = null;
function xn(e) {
  re = e;
}
function sl(e, t = !1, r) {
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
function ul(e) {
  const t = re;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var r = S, l = z;
      t.e = null;
      try {
        for (var o = 0; o < s.length; o++) {
          var i = s[o];
          We(i.effect), Ze(i.reaction), Nr(i.fn);
        }
      } finally {
        We(r), Ze(l);
      }
    }
    re = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function fl() {
  return !0;
}
const ui = ["touchstart", "touchmove"];
function fi(e) {
  return ui.includes(e);
}
function ci(e, t) {
  {
    const r = document.body;
    e.autofocus = !0, Qt(() => {
      document.activeElement === r && e.focus();
    });
  }
}
let An = !1;
function cl() {
  An || (An = !0, document.addEventListener(
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
function dl(e) {
  var t = z, r = S;
  Ze(null), We(null);
  try {
    return e();
  } finally {
    Ze(t), We(r);
  }
}
function di(e, t, r, l = r) {
  e.addEventListener(t, () => dl(r));
  const o = e.__on_r;
  o ? e.__on_r = () => {
    o(), l(!0);
  } : e.__on_r = () => l(!0), cl();
}
const vl = /* @__PURE__ */ new Set(), kr = /* @__PURE__ */ new Set();
function vi(e, t, r, l = {}) {
  function o(i) {
    if (l.capture || It.call(t, i), !i.cancelBubble)
      return dl(() => r == null ? void 0 : r.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Qt(() => {
    t.addEventListener(e, o, l);
  }) : t.addEventListener(e, o, l), o;
}
function He(e, t, r, l, o) {
  var i = { capture: l, passive: o }, s = vi(e, t, r, i);
  (t === document.body || t === window || t === document) && li(() => {
    t.removeEventListener(e, s, i);
  });
}
function hi(e) {
  for (var t = 0; t < e.length; t++)
    vl.add(e[t]);
  for (var r of kr)
    r(e);
}
function It(e) {
  var H;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), l = e.type, o = ((H = e.composedPath) == null ? void 0 : H.call(e)) || [], i = (
    /** @type {null | Element} */
    o[0] || e.target
  ), s = 0, c = e.__root;
  if (c) {
    var f = o.indexOf(c);
    if (f !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var d = o.indexOf(t);
    if (d === -1)
      return;
    f <= d && (s = f);
  }
  if (i = /** @type {Element} */
  o[s] || e.target, i !== t) {
    Bt(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || r;
      }
    });
    var v = z, h = S;
    Ze(null), We(null);
    try {
      for (var g, m = []; i !== null; ) {
        var C = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var D = i["__" + l];
          if (D != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (Fn(D)) {
              var [V, ...ke] = D;
              V.apply(i, [e, ...ke]);
            } else
              D.call(i, e);
        } catch (j) {
          g ? m.push(j) : g = j;
        }
        if (e.cancelBubble || C === t || C === null)
          break;
        i = C;
      }
      if (g) {
        for (let j of m)
          queueMicrotask(() => {
            throw j;
          });
        throw g;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Ze(v), We(h);
    }
  }
}
function Dr(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Re(e, t) {
  var r = (
    /** @type {Effect} */
    S
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ye(e, t) {
  var r = (t & ho) !== 0, l = (t & go) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (P)
      return Re(L, null), L;
    o === void 0 && (o = Dr(i ? e : "<!>" + e), r || (o = /** @type {Node} */
    /* @__PURE__ */ Le(o)));
    var s = (
      /** @type {TemplateNode} */
      l || Zn ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (r) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Le(s)
      ), f = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Re(c, f);
    } else
      Re(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function lr(e, t, r = "svg") {
  var l = !e.startsWith("<!>"), o = `<${r}>${l ? e : "<!>" + e}</${r}>`, i;
  return () => {
    if (P)
      return Re(L, null), L;
    if (!i) {
      var s = (
        /** @type {DocumentFragment} */
        Dr(o)
      ), c = (
        /** @type {Element} */
        /* @__PURE__ */ Le(s)
      );
      i = /** @type {Element} */
      /* @__PURE__ */ Le(c);
    }
    var f = (
      /** @type {TemplateNode} */
      i.cloneNode(!0)
    );
    return Re(f, f), f;
  };
}
function Ot() {
  if (P)
    return Re(L, null), L;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = tr();
  return e.append(t, r), Re(t, r), e;
}
function M(e, t) {
  if (P) {
    S.nodes_end = L, gt();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function gi(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function hl(e, t) {
  return gl(e, t);
}
function _i(e, t) {
  br(), t.intro = t.intro ?? !1;
  const r = t.target, l = P, o = L;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Le(r)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== Cr); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ Je(i);
    if (!i)
      throw vt;
    dt(!0), Ge(
      /** @type {Comment} */
      i
    ), gt();
    const s = gl(e, { ...t, anchor: i });
    if (L === null || L.nodeType !== 8 || /** @type {Comment} */
    L.data !== Tn)
      throw er(), vt;
    return dt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === vt)
      return t.recover === !1 && Do(), br(), Yo(r), dt(!1), hl(e, t);
    throw s;
  } finally {
    dt(l), Ge(o);
  }
}
const ct = /* @__PURE__ */ new Map();
function gl(e, { target: t, anchor: r, props: l = {}, events: o, context: i, intro: s = !0 }) {
  br();
  var c = /* @__PURE__ */ new Set(), f = (h) => {
    for (var g = 0; g < h.length; g++) {
      var m = h[g];
      if (!c.has(m)) {
        c.add(m);
        var C = fi(m);
        t.addEventListener(m, It, { passive: C });
        var D = ct.get(m);
        D === void 0 ? (document.addEventListener(m, It, { passive: C }), ct.set(m, 1)) : ct.set(m, D + 1);
      }
    }
  };
  f(yo(vl)), kr.add(f);
  var d = void 0, v = ii(() => {
    var h = r ?? t.appendChild(tr());
    return Jt(() => {
      if (i) {
        sl({});
        var g = (
          /** @type {ComponentContext} */
          re
        );
        g.c = i;
      }
      o && (l.$$events = o), P && Re(
        /** @type {TemplateNode} */
        h,
        null
      ), d = e(h, l) || {}, P && (S.nodes_end = L), i && ul();
    }), () => {
      var C;
      for (var g of c) {
        t.removeEventListener(g, It);
        var m = (
          /** @type {number} */
          ct.get(g)
        );
        --m === 0 ? (document.removeEventListener(g, It), ct.delete(g)) : ct.set(g, m);
      }
      kr.delete(f), h !== r && ((C = h.parentNode) == null || C.removeChild(h));
    };
  });
  return Er.set(d, v), d;
}
let Er = /* @__PURE__ */ new WeakMap();
function mi(e, t) {
  const r = Er.get(e);
  return r ? (Er.delete(e), r(t)) : Promise.resolve();
}
function X(e, t, [r, l] = [0, 0]) {
  P && r === 0 && gt();
  var o = e, i = null, s = null, c = ie, f = r > 0 ? Ar : 0, d = !1;
  const v = (g, m = !0) => {
    d = !0, h(m, g);
  }, h = (g, m) => {
    if (c === (c = g)) return;
    let C = !1;
    if (P && l !== -1) {
      if (r === 0) {
        const V = (
          /** @type {Comment} */
          o.data
        );
        V === Cr ? l = 0 : V === Dn ? l = 1 / 0 : (l = parseInt(V.substring(1)), l !== l && (l = c ? 1 / 0 : -1));
      }
      const D = l > r;
      !!c === D && (o = Bo(), Ge(o), dt(!1), C = !0, l = -1);
    }
    c ? (i ? Cn(i) : m && (i = Jt(() => m(o))), s && yr(s, () => {
      s = null;
    })) : (s ? Cn(s) : m && (s = Jt(() => m(o, [r + 1, l]))), i && yr(i, () => {
      i = null;
    })), C && dt(!0);
  };
  Sr(() => {
    d = !1, t(v), d || h(null, null);
  }, f), P && (o = L);
}
function Qe(e, t, r, l, o) {
  var i = e, s = "", c;
  Sr(() => {
    if (s === (s = t() ?? "")) {
      P && gt();
      return;
    }
    c !== void 0 && (Pe(c), c = void 0), s !== "" && (c = Jt(() => {
      if (P) {
        L.data;
        for (var f = gt(), d = f; f !== null && (f.nodeType !== 8 || /** @type {Comment} */
        f.data !== ""); )
          d = f, f = /** @type {TemplateNode} */
          /* @__PURE__ */ Je(f);
        if (f === null)
          throw er(), vt;
        Re(L, d), i = Ge(f);
        return;
      }
      var v = s + "", h = Dr(v);
      Re(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Le(h),
        /** @type {TemplateNode} */
        h.lastChild
      ), i.before(h);
    }));
  });
}
function pi(e, t, r, l, o) {
  var c;
  P && gt();
  var i = (c = t.$$slots) == null ? void 0 : c[r], s = !1;
  i === !0 && (i = t.children, s = !0), i === void 0 || i(e, s ? () => l : l);
}
function bi(e, t) {
  Qt(() => {
    var r = e.getRootNode(), l = (
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
    if (!l.querySelector("#" + t.hash)) {
      const o = document.createElement("style");
      o.id = t.hash, o.textContent = t.code, l.appendChild(o);
    }
  });
}
const In = [...` 	
\r\f \v\uFEFF`];
function wi(e, t, r) {
  var l = "" + e;
  if (r) {
    for (var o in r)
      if (r[o])
        l = l ? l + " " + o : o;
      else if (l.length)
        for (var i = o.length, s = 0; (s = l.indexOf(o, s)) >= 0; ) {
          var c = s + i;
          (s === 0 || In.includes(l[s - 1])) && (c === l.length || In.includes(l[c])) ? l = (s === 0 ? "" : l.substring(0, s)) + l.substring(c + 1) : s = c;
        }
  }
  return l === "" ? null : l;
}
function yi(e, t, r, l, o, i) {
  var s = e.__className;
  if (P || s !== r) {
    var c = wi(r, l, i);
    (!P || c !== e.getAttribute("class")) && (c == null ? e.removeAttribute("class") : e.className = c), e.__className = r;
  } else if (i && o !== i)
    for (var f in i) {
      var d = !!i[f];
      (o == null || d !== !!o[f]) && e.classList.toggle(f, d);
    }
  return i;
}
const ki = Symbol("is custom element"), Ei = Symbol("is html");
function Rn(e) {
  if (P) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var l = e.value;
          $(e, "value", null), e.value = l;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          $(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = r, Io(r), cl();
  }
}
function Ci(e, t) {
  var r = _l(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function $(e, t, r, l) {
  var o = _l(e);
  P && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = r) && (t === "loading" && (e[bo] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && xi(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function _l(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [ki]: e.nodeName.includes("-"),
      [Ei]: e.namespaceURI === _o
    })
  );
}
var $n = /* @__PURE__ */ new Map();
function xi(e) {
  var t = $n.get(e.nodeName);
  if (t) return t;
  $n.set(e.nodeName, t = []);
  for (var r, l = e, o = Element.prototype; o !== l; ) {
    r = ko(l);
    for (var i in r)
      r[i].set && t.push(i);
    l = Vn(l);
  }
  return t;
}
function Ai(e, t, r = t) {
  di(e, "change", (l) => {
    var o = l ? e.defaultChecked : e.checked;
    r(o);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (P && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  _t(t) == null) && r(e.checked), zr(() => {
    var l = t();
    e.checked = !!l;
  });
}
function Nn(e, t) {
  return e === t || (e == null ? void 0 : e[Rt]) === t;
}
function Ft(e = {}, t, r, l) {
  return Nr(() => {
    var o, i;
    return zr(() => {
      o = i, i = [], _t(() => {
        e !== r(...i) && (t(e, ...i), o && Nn(r(...o), e) && t(null, ...o));
      });
    }), () => {
      Qt(() => {
        i && Nn(r(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function ml(e) {
  re === null && al(), wr(() => {
    const t = _t(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Ii(e) {
  re === null && al(), ml(() => () => _t(e));
}
let Vt = !1;
function Ri(e) {
  var t = Vt;
  try {
    return Vt = !1, [e(), Vt];
  } finally {
    Vt = t;
  }
}
function R(e, t, r, l) {
  var ge;
  var o = (r & uo) !== 0, i = !0, s = (r & co) !== 0, c = (r & vo) !== 0, f = !1, d;
  s ? [d, f] = Ri(() => (
    /** @type {V} */
    e[t]
  )) : d = /** @type {V} */
  e[t];
  var v = Rt in e || On in e, h = s && (((ge = et(e, t)) == null ? void 0 : ge.set) ?? (v && t in e && ((B) => e[t] = B))) || void 0, g = (
    /** @type {V} */
    l
  ), m = !0, C = !1, D = () => (C = !0, m && (m = !1, c ? g = _t(
    /** @type {() => V} */
    l
  ) : g = /** @type {V} */
  l), g);
  d === void 0 && l !== void 0 && (h && i && To(), d = D(), h && h(d));
  var V;
  if (V = () => {
    var B = (
      /** @type {V} */
      e[t]
    );
    return B === void 0 ? D() : (m = !0, C = !1, B);
  }, (r & fo) === 0)
    return V;
  if (h) {
    var ke = e.$$legacy;
    return function(B, fe) {
      return arguments.length > 0 ? ((!fe || ke || f) && h(fe ? V() : B), B) : V();
    };
  }
  var H = !1, j = /* @__PURE__ */ Hn(d), he = /* @__PURE__ */ Be(() => {
    var B = V(), fe = a(j);
    return H ? (H = !1, fe) : j.v = B;
  });
  return o || (he.equals = Ir), function(B, fe) {
    if (arguments.length > 0) {
      const _e = fe ? a(he) : s ? O(B) : B;
      return he.equals(_e) || (H = !0, w(j, _e), C && g !== void 0 && (g = _e), _t(() => a(he))), B;
    }
    return a(he);
  };
}
function $i(e) {
  return new Ni(e);
}
var Te, de;
class Ni {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    gr(this, Te);
    /** @type {Record<string, any>} */
    gr(this, de);
    var i;
    var r = /* @__PURE__ */ new Map(), l = (s, c) => {
      var f = /* @__PURE__ */ Hn(c);
      return r.set(s, f), f;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, c) {
          return a(r.get(c) ?? l(c, Reflect.get(s, c)));
        },
        has(s, c) {
          return c === On ? !0 : (a(r.get(c) ?? l(c, Reflect.get(s, c))), Reflect.has(s, c));
        },
        set(s, c, f) {
          return w(r.get(c) ?? l(c, f), f), Reflect.set(s, c, f);
        }
      }
    );
    _r(this, de, (t.hydrate ? _i : hl)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((i = t == null ? void 0 : t.props) != null && i.$$host) || t.sync === !1) && x(), _r(this, Te, o.$$events);
    for (const s of Object.keys(le(this, de)))
      s === "$set" || s === "$destroy" || s === "$on" || Bt(this, s, {
        get() {
          return le(this, de)[s];
        },
        /** @param {any} value */
        set(c) {
          le(this, de)[s] = c;
        },
        enumerable: !0
      });
    le(this, de).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(o, s);
    }, le(this, de).$destroy = () => {
      mi(le(this, de));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    le(this, de).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    le(this, Te)[t] = le(this, Te)[t] || [];
    const l = (...o) => r.call(this, ...o);
    return le(this, Te)[t].push(l), () => {
      le(this, Te)[t] = le(this, Te)[t].filter(
        /** @param {any} fn */
        (o) => o !== l
      );
    };
  }
  $destroy() {
    le(this, de).$destroy();
  }
}
Te = new WeakMap(), de = new WeakMap();
let pl;
typeof HTMLElement == "function" && (pl = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, l) {
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
    this.$$ctor = t, this.$$s = r, l && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, r, l) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(r), this.$$c) {
      const o = this.$$c.$on(t, r);
      this.$$l_u.set(r, o);
    }
    super.addEventListener(t, r, l);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, r, l) {
    if (super.removeEventListener(t, r, l), this.$$c) {
      const o = this.$$l_u.get(r);
      o && (o(), this.$$l_u.delete(r));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(o) {
        return (i) => {
          const s = document.createElement("slot");
          o !== "default" && (s.name = o), M(i, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, l = zi(this);
      for (const o of this.$$s)
        o in l && (o === "default" && !this.$$d.children ? (this.$$d.children = t(o), r.default = !0) : r[o] = t(o));
      for (const o of this.attributes) {
        const i = this.$$g_p(o.name);
        i in this.$$d || (this.$$d[i] = jt(i, o.value, this.$$p_d, "toProp"));
      }
      for (const o in this.$$p_d)
        !(o in this.$$d) && this[o] !== void 0 && (this.$$d[o] = this[o], delete this[o]);
      this.$$c = $i({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = oi(() => {
        zr(() => {
          var o;
          this.$$r = !0;
          for (const i of Ht(this.$$c)) {
            if (!((o = this.$$p_d[i]) != null && o.reflect)) continue;
            this.$$d[i] = this.$$c[i];
            const s = jt(
              i,
              this.$$d[i],
              this.$$p_d,
              "toAttribute"
            );
            s == null ? this.removeAttribute(this.$$p_d[i].attribute || i) : this.setAttribute(this.$$p_d[i].attribute || i, s);
          }
          this.$$r = !1;
        });
      });
      for (const o in this.$$l)
        for (const i of this.$$l[o]) {
          const s = this.$$c.$on(o, i);
          this.$$l_u.set(i, s);
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
  attributeChangedCallback(t, r, l) {
    var o;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = jt(t, l, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [t]: this.$$d[t] }));
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
function jt(e, t, r, l) {
  var i;
  const o = (i = r[e]) == null ? void 0 : i.type;
  if (t = o === "Boolean" && typeof t != "boolean" ? t != null : t, !l || !r[e])
    return t;
  if (l === "toAttribute")
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
function zi(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function Si(e, t, r, l, o, i) {
  let s = class extends pl {
    constructor() {
      super(e, r, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Ht(t).map(
        (c) => (t[c].attribute || c).toLowerCase()
      );
    }
  };
  return Ht(t).forEach((c) => {
    Bt(s.prototype, c, {
      get() {
        return this.$$c && c in this.$$c ? this.$$c[c] : this.$$d[c];
      },
      set(f) {
        var h;
        f = jt(c, f, t), this.$$d[c] = f;
        var d = this.$$c;
        if (d) {
          var v = (h = et(d, c)) == null ? void 0 : h.get;
          v ? d[c] = f : d.$set({ [c]: f });
        }
      }
    });
  }), l.forEach((c) => {
    Bt(s.prototype, c, {
      get() {
        var f;
        return (f = this.$$c) == null ? void 0 : f[c];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
const bl = new TextEncoder();
function Di(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function Ti(e, t = "SHA-256", r = 1e5) {
  const l = Date.now().toString(16);
  e || (e = Math.round(Math.random() * r));
  const o = await wl(l, e, t);
  return {
    algorithm: t,
    challenge: o,
    salt: l,
    signature: ""
  };
}
async function wl(e, t, r) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return Di(
    await crypto.subtle.digest(
      r.toUpperCase(),
      bl.encode(e + t)
    )
  );
}
function Li(e, t, r = "SHA-256", l = 1e6, o = 0) {
  const i = new AbortController(), s = Date.now();
  return {
    promise: (async () => {
      for (let f = o; f <= l; f += 1) {
        if (i.signal.aborted)
          return null;
        if (await wl(t, f, r) === e)
          return {
            number: f,
            took: Date.now() - s
          };
      }
      return null;
    })(),
    controller: i
  };
}
function zn() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function Pi(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let l = 0; l < t.length; l++)
    r[l] = t.charCodeAt(l);
  return r;
}
function Oi(e, t = 12) {
  const r = new Uint8Array(t);
  for (let l = 0; l < t; l++)
    r[l] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function Fi(e, t = "", r = 1e6, l = 0) {
  const o = "AES-GCM", i = new AbortController(), s = Date.now(), c = async () => {
    for (let v = l; v <= r; v += 1) {
      if (i.signal.aborted || !f || !d)
        return null;
      try {
        const h = await crypto.subtle.decrypt(
          {
            name: o,
            iv: Oi(v)
          },
          f,
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
  let f = null, d = null;
  try {
    d = Pi(e);
    const v = await crypto.subtle.digest(
      "SHA-256",
      bl.encode(t)
    );
    f = await crypto.subtle.importKey(
      "raw",
      v,
      o,
      !1,
      ["decrypt"]
    );
  } catch {
    return {
      promise: Promise.reject(),
      controller: i
    };
  }
  return {
    promise: c(),
    controller: i
  };
}
var k = /* @__PURE__ */ ((e) => (e.CODE = "code", e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(k || {}), Q = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.LOADING = "loading", e.PLAYING = "playing", e.PAUSED = "paused", e.READY = "ready", e))(Q || {});
const Vi = {
  ariaLinkLabel: "Visit Altcha.org",
  enterCode: "Enter code",
  enterCodeAria: "Enter code you hear. Press Space to play audio.",
  error: "Verification failed. Try again later.",
  expired: "Verification expired. Try again.",
  extraCheck: "Verification required!",
  footer: 'Protected by <a href="https://altcha.org/" target="_blank" aria-label="Visit Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Get an audio challenge",
  label: "I'm not a robot",
  loading: "Loading...",
  reload: "Reload",
  verify: "Verify",
  verified: "Verified",
  verifying: "Verifying...",
  waitAlert: "Verifying... please wait."
};
typeof globalThis.altchaI18n != "object" && (globalThis.altchaI18n = {});
globalThis.altchaI18n.en = Vi;
const pr = (e, t) => {
  let r = /* @__PURE__ */ Uo(() => xo(t == null ? void 0 : t(), 24));
  var l = qi();
  Se(() => {
    $(l, "width", a(r)), $(l, "height", a(r));
  }), M(e, l);
};
function Mi(e, t) {
  e.code === "Space" && (e.preventDefault(), e.stopImmediatePropagation(), t());
}
function ji(e, t) {
  e.preventDefault(), t();
}
function Ui(e, t, r, l, o, i, s, c) {
  var f;
  [
    k.UNVERIFIED,
    k.ERROR,
    k.EXPIRED,
    k.CODE
  ].includes(a(t)) ? r() !== !1 && ((f = a(l)) == null ? void 0 : f.reportValidity()) === !1 ? w(o, !1) : i() ? s() : c() : w(o, !0);
}
var qi = /* @__PURE__ */ lr('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="svelte-uo3tkz"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25" class="svelte-uo3tkz"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor" class="altcha-spinner svelte-uo3tkz"></path></svg>'), Hi = /* @__PURE__ */ ye('<input type="hidden" class="svelte-uo3tkz">'), Bi = /* @__PURE__ */ ye('<div class="svelte-uo3tkz"><a target="_blank" class="altcha-logo svelte-uo3tkz" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-uo3tkz"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor" class="svelte-uo3tkz"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor" class="svelte-uo3tkz"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor" class="svelte-uo3tkz"></path></svg></a></div>'), Yi = /* @__PURE__ */ lr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-uo3tkz"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z" class="svelte-uo3tkz"></path></svg>'), Gi = /* @__PURE__ */ lr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-uo3tkz"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z" class="svelte-uo3tkz"></path></svg>'), Zi = /* @__PURE__ */ lr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-uo3tkz"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z" class="svelte-uo3tkz"></path></svg>'), Wi = /* @__PURE__ */ ye('<button type="button" class="altcha-code-challenge-audio svelte-uo3tkz"><!></button>'), Ji = /* @__PURE__ */ ye('<audio hidden autoplay class="svelte-uo3tkz"><source class="svelte-uo3tkz"></audio>'), Ki = /* @__PURE__ */ ye('<div class="altcha-code-challenge svelte-uo3tkz" role="dialog"><div class="altcha-code-challenge-arrow svelte-uo3tkz"></div> <form class="svelte-uo3tkz"><img class="altcha-code-challenge-image svelte-uo3tkz" alt=""> <input type="text" autocomplete="off" name="code" class="altcha-code-challenge-input svelte-uo3tkz" required> <div class="altcha-code-challenge-buttons svelte-uo3tkz"><div class="altcha-code-challenge-buttons-left svelte-uo3tkz"><!> <button type="button" class="altcha-code-challenge-reload svelte-uo3tkz"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-uo3tkz"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z" class="svelte-uo3tkz"></path></svg></button></div> <button type="submit" class="altcha-code-challenge-verify svelte-uo3tkz"><!> </button></div> <!></form></div>'), Xi = /* @__PURE__ */ ye('<div class="svelte-uo3tkz"><!></div>'), Qi = /* @__PURE__ */ ye('<div class="svelte-uo3tkz"><!></div>'), ea = /* @__PURE__ */ ye('<div class="altcha-error svelte-uo3tkz"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="svelte-uo3tkz"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" class="svelte-uo3tkz"></path></svg> <!></div>'), ta = /* @__PURE__ */ ye('<div class="altcha-footer svelte-uo3tkz"><div class="svelte-uo3tkz"><!></div></div>'), ra = /* @__PURE__ */ ye('<div class="altcha-anchor-arrow svelte-uo3tkz"></div>'), na = /* @__PURE__ */ ye('<!> <div class="altcha svelte-uo3tkz"><div class="altcha-main svelte-uo3tkz"><div><!> <input type="checkbox" class="svelte-uo3tkz"></div> <label class="altcha-label svelte-uo3tkz"><!></label> <!> <!> <!></div> <!> <!> <!></div>', 1);
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
  var gn, _n;
  sl(t, !0), bi(e, la);
  let r = R(t, "auto", 7, void 0), l = R(t, "blockspam", 7, void 0), o = R(t, "challengeurl", 7, void 0), i = R(t, "challengejson", 7, void 0), s = R(t, "customfetch", 7, void 0), c = R(t, "debug", 7, !1), f = R(t, "delay", 7, 0), d = R(t, "expire", 7, void 0), v = R(t, "floating", 7, void 0), h = R(t, "floatinganchor", 7, void 0), g = R(t, "floatingoffset", 7, void 0), m = R(t, "floatingpersist", 7, !1), C = R(t, "hidefooter", 7, !1), D = R(t, "hidelogo", 7, !1), V = R(t, "id", 7, void 0), ke = R(t, "locale", 7, void 0), H = R(t, "name", 7, "altcha"), j = R(t, "maxnumber", 7, 1e6), he = R(t, "mockerror", 7, !1), ge = R(t, "obfuscated", 7, void 0), B = R(t, "plugins", 7, void 0), fe = R(t, "refetchonexpire", 7, !0), _e = R(t, "sentinel", 7, void 0), Ee = R(t, "spamfilter", 7, !1), lt = R(t, "strings", 7, void 0), ce = R(t, "test", 7, !1), ae = R(t, "verifyurl", 7, void 0), ot = R(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), pt = R(t, "workerurl", 7, void 0);
  const Tr = ["SHA-256", "SHA-384", "SHA-512"], yl = "https://altcha.org/", Ve = (n, u) => {
    t.$$host.dispatchEvent(new CustomEvent(n, { detail: u }));
  }, Lr = (_n = (gn = document.documentElement.lang) == null ? void 0 : gn.split("-")) == null ? void 0 : _n[0], or = /* @__PURE__ */ Be(() => {
    var n;
    return o() && new URL(o(), location.origin).host.endsWith(".altcha.org") && !!((n = o()) != null && n.includes("apiKey=ckey_"));
  }), ir = /* @__PURE__ */ Be(() => i() ? Wr(i()) : void 0), kl = /* @__PURE__ */ Be(() => lt() ? Wr(lt()) : {}), T = /* @__PURE__ */ Be(() => ({
    ...Fr(),
    ...a(kl)
  })), Pr = /* @__PURE__ */ Be(() => V() || `${H()}_checkbox`);
  let bt = oe(!1), Y = oe(null), A = oe(O(k.UNVERIFIED)), ee = oe(void 0), wt = oe(null), Me = oe(null), ar = oe(null), it = oe(null), F = oe(null), Ke = oe(null), Ce = null, G = oe(null), Xe = oe(!1), je = [], sr = oe(!1), Ne = oe(null);
  wr(() => {
    Ll(a(Ke));
  }), wr(() => {
    Pl(a(A));
  }), Ii(() => {
    El(), a(F) && (a(F).removeEventListener("submit", Hr), a(F).removeEventListener("reset", Br), a(F).removeEventListener("focusin", qr), w(F, null)), Ce && (clearTimeout(Ce), Ce = null), document.removeEventListener("click", jr), document.removeEventListener("scroll", Ur), window.removeEventListener("resize", Zr);
  }), ml(() => {
    var n;
    N("mounted", "1.4.2"), N("workers", ot()), Il(), N("plugins", je.length ? je.map((u) => u.constructor.pluginName).join(", ") : "none"), ce() && N("using test mode"), d() && ur(d()), r() !== void 0 && N("auto", r()), v() !== void 0 && Kr(v()), w(F, O((n = a(ee)) == null ? void 0 : n.closest("form"))), a(F) && (a(F).addEventListener("submit", Hr, { capture: !0 }), a(F).addEventListener("reset", Br), (r() === "onfocus" || m() === "focus") && a(F).addEventListener("focusin", qr)), r() === "onload" && (ge() ? yt() : ze()), a(or) && (C() || D()) && N("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
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
  function El() {
    for (const n of je)
      n.destroy();
  }
  function Or() {
    o() && fe() && a(A) === k.VERIFIED ? ze() : at(k.EXPIRED, a(T).expired);
  }
  async function Cl() {
    var n;
    if (he())
      throw N("mocking error"), new Error("Mocked error.");
    if (a(ir))
      return N("using provided json data"), a(ir);
    if (ce())
      return N("generating test challenge", { test: ce() }), Ti(typeof ce() != "boolean" ? +ce() : void 0);
    {
      if (!o() && a(F)) {
        const E = a(F).getAttribute("action");
        E != null && E.includes("/form/") && o(E + "/altcha");
      }
      if (!o())
        throw new Error("Attribute challengeurl not set.");
      N("fetching challenge from", o());
      let u = null, _ = null;
      if (s())
        if (N("using customfetch"), typeof s() == "string") {
          if (u = globalThis[s()] || null, !u)
            throw new Error(`Custom fetch function not found: ${s()}`);
        } else
          u = s();
      const b = {
        headers: Ee() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      };
      if (u) {
        if (_ = await u(o(), b), !_ || !(_ instanceof Response))
          throw new Error("Custom fetch function did not return a response.");
      } else
        _ = await fetch(o(), b);
      if (_.status !== 200)
        throw new Error(`Server responded with ${_.status}.`);
      const p = _.headers.get("X-Altcha-Config"), I = await _.json(), y = new URLSearchParams((n = I.salt.split("?")) == null ? void 0 : n[1]), U = y.get("expires") || y.get("expire");
      if (U) {
        const E = new Date(+U * 1e3), q = isNaN(E.getTime()) ? 0 : E.getTime() - Date.now();
        q > 0 && ur(q);
      }
      if (p)
        try {
          const E = JSON.parse(p);
          E && typeof E == "object" && (E.verifyurl && (E.verifyurl = Mr(E.verifyurl)), en(E));
        } catch (E) {
          N("unable to configure from X-Altcha-Config", E);
        }
      return I;
    }
  }
  function xl(n) {
    var _, b;
    const u = (_ = a(F)) == null ? void 0 : _.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((b = u == null ? void 0 : u.value) == null ? void 0 : b.slice(u.value.indexOf("@"))) || void 0;
  }
  function Fr(n = [
    ke() || "",
    document.documentElement.lang || "",
    ...navigator.languages
  ]) {
    const u = Object.keys(globalThis.altchaI18n).map((b) => b.toLowerCase()), _ = n.reduce(
      (b, p) => (p = p.toLowerCase(), b || (globalThis.altchaI18n[p] ? p : null) || u.find((I) => p.split("-")[0] === I.split("-")[0]) || null),
      null
    );
    return globalThis.altchaI18n[_ || "en"];
  }
  function Al() {
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
  function Vr(n) {
    var _;
    return [
      ...((_ = a(F)) == null ? void 0 : _.querySelectorAll(n != null && n.length ? n.map((b) => `input[name="${b}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (b, p) => {
        const I = p.name, y = p.value;
        return I && y && (b[I] = /\n/.test(y) ? y.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : y), b;
      },
      {}
    );
  }
  function Mr(n) {
    const u = new URL(o() || location.origin), _ = new URL(n, u);
    return _.search || (_.search = u.search), _.toString();
  }
  function Il() {
    const n = B() !== void 0 ? B().split(",") : void 0;
    for (const u of globalThis.altchaPlugins)
      (!n || n.includes(u.pluginName)) && je.push(new u({
        el: a(ee),
        clarify: yt,
        dispatch: Ve,
        getConfiguration: tn,
        getFloatingAnchor: rn,
        getState: nn,
        log: N,
        reset: at,
        solve: Qr,
        setState: xe,
        setFloatingAnchor: on,
        verify: ze
      }));
  }
  function N(...n) {
    (c() || n.some((u) => u instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${H()}]`, ...n);
  }
  function Rl() {
    w(G, O(Q.PAUSED));
  }
  function $l(n) {
    w(G, O(Q.ERROR));
  }
  function Nl() {
    w(G, O(Q.READY));
  }
  function zl() {
    w(G, O(Q.LOADING));
  }
  function Sl() {
    w(G, O(Q.PLAYING));
  }
  function Dl() {
    w(G, O(Q.PAUSED));
  }
  function Tl(n) {
    if (n.preventDefault(), n.stopPropagation(), a(Y)) {
      const u = new FormData(n.target);
      w(Xe, !0), Jr(Dt(a(Y).challenge, a(Y).solution), String(u.get("code"))).then(({ reason: _, verified: b }) => {
        b ? (w(Y, null), xe(k.VERIFIED), N("verified"), mr().then(() => {
          var p;
          (p = a(ar)) == null || p.focus(), Ve("verified", { payload: a(Ne) });
        })) : (at(), w(Ke, O(_ || "Verification failed")));
      }).catch((_) => {
        w(Y, null), xe(k.ERROR, _), N("sentinel verification failed:", _);
      }).finally(() => {
        w(Xe, !1);
      });
    }
  }
  function jr(n) {
    var _;
    const u = n.target;
    v() && u && !a(ee).contains(u) && (a(A) === k.VERIFIED && m() === !1 || a(A) === k.VERIFIED && m() === "focus" && !((_ = a(F)) != null && _.matches(":focus-within")) || r() === "off" && a(A) === k.UNVERIFIED) && ln();
  }
  function Ur() {
    v() && a(A) !== k.UNVERIFIED && kt();
  }
  function Ll(n) {
    for (const u of je)
      typeof u.onErrorChange == "function" && u.onErrorChange(a(Ke));
  }
  function qr(n) {
    a(A) === k.UNVERIFIED ? ze() : v() && m() === "focus" && a(A) === k.VERIFIED && fr();
  }
  function Hr(n) {
    a(F) && r() === "onsubmit" ? a(A) === k.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), ze().then(() => {
      var u;
      (u = a(F)) == null || u.requestSubmit();
    })) : a(A) !== k.VERIFIED && (n.preventDefault(), n.stopPropagation(), a(A) === k.VERIFYING && Yr()) : a(F) && v() && r() === "off" && a(A) === k.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), fr());
  }
  function Br() {
    at();
  }
  function Yr() {
    a(A) === k.VERIFYING && a(T).waitAlert && alert(a(T).waitAlert);
  }
  function Gr() {
    a(Me) ? a(Me).paused ? (a(Me).currentTime = 0, a(Me).play()) : a(Me).pause() : (w(sr, !0), requestAnimationFrame(() => {
      var n;
      (n = a(Me)) == null || n.play();
    }));
  }
  function Pl(n) {
    for (const u of je)
      typeof u.onStateChange == "function" && u.onStateChange(a(A));
    v() && a(A) !== k.UNVERIFIED && requestAnimationFrame(() => {
      kt();
    }), w(bt, a(A) === k.VERIFIED);
  }
  function Zr() {
    v() && kt();
  }
  function Wr(n) {
    return JSON.parse(n);
  }
  async function Ol(n) {
    if (!ae())
      throw new Error("Attribute verifyurl not set.");
    N("requesting server verification from", ae());
    const u = { payload: n };
    if (Ee() !== !1) {
      const {
        blockedCountries: p,
        classifier: I,
        disableRules: y,
        email: U,
        expectedLanguages: E,
        expectedCountries: q,
        fields: ne,
        ipAddress: qe,
        text: dr,
        timeZone: Lt
      } = Al();
      u.blockedCountries = p, u.classifier = I, u.disableRules = y, u.email = U === !1 ? void 0 : xl(U), u.expectedCountries = q, u.expectedLanguages = E || (Lr ? [Lr] : void 0), u.fields = ne === !1 ? void 0 : Vr(ne), u.ipAddress = qe === !1 ? void 0 : qe || "auto", u.text = dr, u.timeZone = Lt === !1 ? void 0 : Lt || zn();
    }
    const _ = await fetch(ae(), {
      body: JSON.stringify(u),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (_.status !== 200)
      throw new Error(`Server responded with ${_.status}.`);
    const b = await _.json();
    if (b != null && b.payload && w(Ne, O(b.payload)), Ve("serververification", b), l() && b.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  async function Jr(n, u) {
    if (!ae())
      throw new Error("Attribute verifyurl not set.");
    N("requesting sentinel verification from", ae());
    const _ = { code: u, payload: n };
    _e() && (_.fields = _e().fields ? Vr() : void 0, _.timeZone = _e().timeZone ? zn() : void 0);
    const b = await fetch(ae(), {
      body: JSON.stringify(_),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (b.status !== 200)
      throw new Error(`Server responded with ${b.status}.`);
    const p = await b.json();
    return p != null && p.payload && w(Ne, O(p.payload)), Ve("sentinelverification", p), p;
  }
  function ur(n) {
    N("expire", n), Ce && (clearTimeout(Ce), Ce = null), n < 1 ? Or() : Ce = setTimeout(Or, n);
  }
  function Kr(n) {
    N("floating", n), v() !== n && (a(ee).style.left = "", a(ee).style.top = ""), v(n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : v()), v() ? (r() || r("onsubmit"), document.addEventListener("scroll", Ur), document.addEventListener("click", jr), window.addEventListener("resize", Zr)) : r() === "onsubmit" && r(void 0);
  }
  function Xr(n) {
    if (!n.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (n.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!Tr.includes(n.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${Tr.join(", ")}`);
    if (!n.challenge || n.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!n.salt || n.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function Qr(n) {
    let u = null;
    if ("Worker" in window) {
      try {
        u = await Fl(n, n.maxNumber || n.maxnumber || j());
      } catch (_) {
        N(_);
      }
      if ((u == null ? void 0 : u.number) !== void 0 || "obfuscated" in n)
        return { data: n, solution: u };
    }
    if ("obfuscated" in n) {
      const _ = await Fi(n.obfuscated, n.key, n.maxNumber || n.maxnumber);
      return { data: n, solution: await _.promise };
    }
    return {
      data: n,
      solution: await Li(n.challenge, n.salt, n.algorithm, n.maxNumber || n.maxnumber || j()).promise
    };
  }
  async function Fl(n, u = typeof ce() == "number" ? ce() : n.maxNumber || n.maxnumber || j(), _ = Math.ceil(ot())) {
    const b = [];
    _ = Math.min(16, u, Math.max(1, _));
    for (let y = 0; y < _; y++)
      b.push(altchaCreateWorker(pt()));
    const p = Math.ceil(u / _), I = await Promise.all(b.map((y, U) => {
      const E = U * p;
      return new Promise((q) => {
        y.addEventListener("message", (ne) => {
          if (ne.data)
            for (const qe of b)
              qe !== y && qe.postMessage({ type: "abort" });
          q(ne.data);
        }), y.postMessage({
          payload: n,
          max: E + p,
          start: E,
          type: "work"
        });
      });
    }));
    for (const y of b)
      y.terminate();
    return I.find((y) => !!y) || null;
  }
  async function yt() {
    if (!ge()) {
      xe(k.ERROR);
      return;
    }
    const n = je.find((u) => u.constructor.pluginName === "obfuscation");
    if (!n || !("clarify" in n)) {
      xe(k.ERROR), N("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in n && typeof n.clarify == "function")
      return n.clarify();
  }
  function en(n) {
    n.obfuscated !== void 0 && ge(n.obfuscated), n.auto !== void 0 && (r(n.auto), r() === "onload" && (ge() ? yt() : ze())), n.blockspam !== void 0 && l(!!n.blockspam), n.customfetch !== void 0 && s(n.customfetch), n.floatinganchor !== void 0 && h(n.floatinganchor), n.delay !== void 0 && f(n.delay), n.floatingoffset !== void 0 && g(n.floatingoffset), n.floating !== void 0 && Kr(n.floating), n.expire !== void 0 && (ur(n.expire), d(n.expire)), n.challenge && (i(typeof n.challenge == "string" ? n.challenge : JSON.stringify(n.challenge)), Xr(a(ir))), n.challengeurl !== void 0 && o(n.challengeurl), n.debug !== void 0 && c(!!n.debug), n.hidefooter !== void 0 && C(!!n.hidefooter), n.hidelogo !== void 0 && D(!!n.hidelogo), n.locale !== void 0 && lt(Fr([n.locale])), n.maxnumber !== void 0 && j(+n.maxnumber), n.mockerror !== void 0 && he(!!n.mockerror), n.name !== void 0 && H(n.name), n.refetchonexpire !== void 0 && fe(!!n.refetchonexpire), n.sentinel !== void 0 && typeof n.sentinel == "object" && _e(n.sentinel), n.spamfilter !== void 0 && Ee(typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && lt(typeof n.strings == "string" ? n.strings : JSON.stringify(n.strings)), n.test !== void 0 && ce(typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && ae(n.verifyurl), n.workers !== void 0 && ot(+n.workers), n.workerurl !== void 0 && pt(n.workerurl);
  }
  function tn() {
    return {
      auto: r(),
      blockspam: l(),
      challengeurl: o(),
      debug: c(),
      delay: f(),
      expire: d(),
      floating: v(),
      floatinganchor: h(),
      floatingoffset: g(),
      hidefooter: C(),
      hidelogo: D(),
      name: H(),
      maxnumber: j(),
      mockerror: he(),
      obfuscated: ge(),
      refetchonexpire: fe(),
      spamfilter: Ee(),
      strings: a(T),
      test: ce(),
      verifyurl: ae(),
      workers: ot(),
      workerurl: pt()
    };
  }
  function rn() {
    return a(it);
  }
  function Vl(n) {
    return je.find((u) => u.constructor.pluginName === n);
  }
  function nn() {
    return a(A);
  }
  function ln() {
    a(ee).style.display = "none";
  }
  function kt(n = 20) {
    var u;
    if (a(ee))
      if (a(it) || w(it, O((h() ? document.querySelector(h()) : (u = a(F)) == null ? void 0 : u.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || a(F))), a(it)) {
        const _ = parseInt(g(), 10) || 12, b = a(it).getBoundingClientRect(), p = a(ee).getBoundingClientRect(), I = document.documentElement.clientHeight, y = document.documentElement.clientWidth, U = v() === "auto" ? b.bottom + p.height + _ + n > I : v() === "top", E = Math.max(n, Math.min(y - n - p.width, b.left + b.width / 2 - p.width / 2));
        if (U ? a(ee).style.top = `${b.top - (p.height + _)}px` : a(ee).style.top = `${b.bottom + _}px`, a(ee).style.left = `${E}px`, a(ee).setAttribute("data-floating", U ? "top" : "bottom"), a(wt)) {
          const q = a(wt).getBoundingClientRect();
          a(wt).style.left = b.left - E + b.width / 2 - q.width / 2 + "px";
        }
      } else
        N("unable to find floating anchor element");
  }
  function at(n = k.UNVERIFIED, u = null) {
    Ce && (clearTimeout(Ce), Ce = null), w(bt, !1), w(Ne, null), w(Y, null), w(sr, !1), w(G, null), xe(n, u);
  }
  function on(n) {
    w(it, O(n));
  }
  function xe(n, u = null) {
    w(A, O(n)), w(Ke, O(u)), Ve("statechange", {
      payload: a(Ne),
      state: a(A)
    });
  }
  function fr() {
    a(ee).style.display = "block", v() && kt();
  }
  async function ze() {
    return at(k.VERIFYING), await new Promise((n) => setTimeout(n, f() || 0)), Cl().then((n) => (Xr(n), N("challenge", n), Qr(n))).then(({ data: n, solution: u }) => {
      var _;
      if (N("solution", u), !u || n && "challenge" in n && !("clearText" in u))
        if ((u == null ? void 0 : u.number) !== void 0 && "challenge" in n)
          if (ae() && "codeChallenge" in n)
            ((_ = document.activeElement) == null ? void 0 : _.tagName) === "INPUT" && document.activeElement.blur(), w(Y, O({ challenge: n, solution: u }));
          else {
            if (ae() && _e() !== void 0)
              return Jr(Dt(n, u));
            if (ae())
              return Ol(Dt(n, u));
            w(Ne, O(Dt(n, u))), N("payload", a(Ne));
          }
        else
          throw N("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      a(Y) ? (xe(k.CODE), mr().then(() => {
        Ve("code", { codeChallenge: a(Y) });
      })) : (xe(k.VERIFIED), N("verified"), mr().then(() => {
        Ve("verified", { payload: a(Ne) });
      }));
    }).catch((n) => {
      N(n), xe(k.ERROR, n.message);
    });
  }
  var an = na(), sn = At(an);
  pi(sn, t, "default", {});
  var Et = K(sn, 2), cr = J(Et), Tt = J(cr);
  let un;
  var fn = J(Tt);
  {
    var Ml = (n) => {
      pr(n);
    };
    X(fn, (n) => {
      a(A) === k.VERIFYING && n(Ml);
    });
  }
  var Ue = K(fn, 2);
  Rn(Ue), Ue.__change = [
    Ui,
    A,
    Ee,
    F,
    bt,
    ge,
    yt,
    ze
  ], Ft(Ue, (n) => w(ar, n), () => a(ar)), W(Tt);
  var Ct = K(Tt, 2), jl = J(Ct);
  {
    var Ul = (n) => {
      var u = Ot(), _ = At(u);
      Qe(_, () => a(T).verified), M(n, u);
    }, ql = (n, u) => {
      {
        var _ = (p) => {
          var I = Ot(), y = At(I);
          Qe(y, () => a(T).verifying), M(p, I);
        }, b = (p, I) => {
          {
            var y = (E) => {
              var q = Ot(), ne = At(q);
              Qe(ne, () => a(T).extraCheck), M(E, q);
            }, U = (E) => {
              var q = Ot(), ne = At(q);
              Qe(ne, () => a(T).label), M(E, q);
            };
            X(
              p,
              (E) => {
                a(A) === k.CODE ? E(y) : E(U, !1);
              },
              I
            );
          }
        };
        X(
          n,
          (p) => {
            a(A) === k.VERIFYING ? p(_) : p(b, !1);
          },
          u
        );
      }
    };
    X(jl, (n) => {
      a(A) === k.VERIFIED ? n(Ul) : n(ql, !1);
    });
  }
  W(Ct);
  var cn = K(Ct, 2);
  {
    var Hl = (n) => {
      var u = Hi();
      Rn(u), Se(() => {
        $(u, "name", H()), Ci(u, a(Ne));
      }), M(n, u);
    };
    X(cn, (n) => {
      a(A) === k.VERIFIED && n(Hl);
    });
  }
  var dn = K(cn, 2);
  {
    var Bl = (n) => {
      var u = Bi(), _ = J(u);
      $(_, "href", yl), W(u), Se(() => $(_, "aria-label", a(T).ariaLinkLabel)), M(n, u);
    };
    X(dn, (n) => {
      (D() !== !0 || a(or)) && n(Bl);
    });
  }
  var Yl = K(dn, 2);
  {
    var Gl = (n) => {
      var u = Ki(), _ = K(J(u), 2), b = J(_), p = K(b, 2);
      ci(p), p.__keydown = [
        Mi,
        Gr
      ];
      var I = K(p, 2), y = J(I), U = J(y);
      {
        var E = (me) => {
          var Z = Wi();
          Z.__click = Gr;
          var Pt = J(Z);
          {
            var xt = (st) => {
              pr(st, () => 20);
            }, eo = (st, to) => {
              {
                var ro = (ut) => {
                  var vr = Yi();
                  M(ut, vr);
                }, no = (ut, vr) => {
                  {
                    var lo = (ft) => {
                      var hr = Gi();
                      M(ft, hr);
                    }, oo = (ft) => {
                      var hr = Zi();
                      M(ft, hr);
                    };
                    X(
                      ut,
                      (ft) => {
                        a(G) === Q.PLAYING ? ft(lo) : ft(oo, !1);
                      },
                      vr
                    );
                  }
                };
                X(
                  st,
                  (ut) => {
                    a(G) === Q.ERROR ? ut(ro) : ut(no, !1);
                  },
                  to
                );
              }
            };
            X(Pt, (st) => {
              a(G) === Q.LOADING ? st(xt) : st(eo, !1);
            });
          }
          W(Z), Se(() => {
            $(Z, "title", a(T).getAudioChallenge), Z.disabled = a(G) === Q.LOADING || a(G) === Q.ERROR || a(Xe), $(Z, "aria-label", a(G) === Q.LOADING ? a(T).loading : a(T).getAudioChallenge);
          }), M(me, Z);
        };
        X(U, (me) => {
          a(Y).challenge.codeChallenge.audio && me(E);
        });
      }
      var q = K(U, 2);
      q.__click = [ji, ze], W(y);
      var ne = K(y, 2), qe = J(ne);
      {
        var dr = (me) => {
          pr(me, () => 16);
        };
        X(qe, (me) => {
          a(Xe) && me(dr);
        });
      }
      var Lt = K(qe);
      W(ne), W(I);
      var Xl = K(I, 2);
      {
        var Ql = (me) => {
          var Z = Ji(), Pt = J(Z);
          W(Z), Ft(Z, (xt) => w(Me, xt), () => a(Me)), Se((xt) => $(Pt, "src", xt), [
            () => Mr(a(Y).challenge.codeChallenge.audio)
          ]), He("loadstart", Z, zl), He("canplay", Z, Nl), He("pause", Z, Dl), He("playing", Z, Sl), He("ended", Z, Rl), He("error", Pt, $l), M(me, Z);
        };
        X(Xl, (me) => {
          a(Y).challenge.codeChallenge.audio && a(sr) && me(Ql);
        });
      }
      W(_), W(u), Se(() => {
        $(u, "aria-label", a(T).extraCheck), $(b, "src", a(Y).challenge.codeChallenge.image), $(p, "minlength", a(Y).challenge.codeChallenge.length || 1), $(p, "maxlength", a(Y).challenge.codeChallenge.length), $(p, "placeholder", a(T).enterCode), $(p, "aria-label", a(G) === Q.LOADING ? a(T).loading : a(G) === Q.PLAYING ? "" : a(T).enterCodeAria), $(p, "aria-live", a(G) ? "assertive" : "polite"), $(p, "aria-busy", a(G) === Q.LOADING), p.disabled = a(Xe), $(q, "aria-label", a(T).reload), $(q, "title", a(T).reload), q.disabled = a(Xe), ne.disabled = a(Xe), $(ne, "aria-label", a(T).verify), gi(Lt, ` ${a(T).verify ?? ""}`);
      }), He("submit", _, Tl), M(n, u);
    };
    X(Yl, (n) => {
      var u;
      (u = a(Y)) != null && u.challenge.codeChallenge && n(Gl);
    });
  }
  W(cr);
  var vn = K(cr, 2);
  {
    var Zl = (n) => {
      var u = ea(), _ = K(J(u), 2);
      {
        var b = (I) => {
          var y = Xi(), U = J(y);
          Qe(U, () => a(T).expired), W(y), Se(() => $(y, "title", a(Ke))), M(I, y);
        }, p = (I) => {
          var y = Qi(), U = J(y);
          Qe(U, () => a(T).error), W(y), Se(() => $(y, "title", a(Ke))), M(I, y);
        };
        X(_, (I) => {
          a(A) === k.EXPIRED ? I(b) : I(p, !1);
        });
      }
      W(u), M(n, u);
    };
    X(vn, (n) => {
      (a(Ke) || a(A) === k.EXPIRED) && n(Zl);
    });
  }
  var hn = K(vn, 2);
  {
    var Wl = (n) => {
      var u = ta(), _ = J(u), b = J(_);
      Qe(b, () => a(T).footer), W(_), W(u), M(n, u);
    };
    X(hn, (n) => {
      a(T).footer && (C() !== !0 || a(or)) && n(Wl);
    });
  }
  var Jl = K(hn, 2);
  {
    var Kl = (n) => {
      var u = ra();
      Ft(u, (_) => w(wt, _), () => a(wt)), M(n, u);
    };
    X(Jl, (n) => {
      v() && n(Kl);
    });
  }
  return W(Et), Ft(Et, (n) => w(ee, n), () => a(ee)), Se(
    (n) => {
      var u;
      $(Et, "data-state", a(A)), $(Et, "data-floating", v()), un = yi(Tt, 1, "altcha-checkbox svelte-uo3tkz", null, un, n), $(Ue, "id", a(Pr)), Ue.required = r() !== "onsubmit" && (!v() || r() !== "off"), $(Ue, "aria-hidden", a(A) === k.VERIFYING), $(Ct, "for", a(Pr)), $(Ct, "aria-hidden", !!((u = a(Y)) != null && u.challenge.codeChallenge));
    },
    [
      () => ({
        "altcha-checkbox-verifying": a(A) === k.VERIFYING
      })
    ]
  ), He("invalid", Ue, Yr), Ai(Ue, () => a(bt), (n) => w(bt, n)), M(e, an), ul({
    clarify: yt,
    configure: en,
    getConfiguration: tn,
    getFloatingAnchor: rn,
    getPlugin: Vl,
    getState: nn,
    hide: ln,
    repositionFloating: kt,
    reset: at,
    setFloatingAnchor: on,
    setState: xe,
    show: fr,
    verify: ze,
    get auto() {
      return r();
    },
    set auto(n = void 0) {
      r(n), x();
    },
    get blockspam() {
      return l();
    },
    set blockspam(n = void 0) {
      l(n), x();
    },
    get challengeurl() {
      return o();
    },
    set challengeurl(n = void 0) {
      o(n), x();
    },
    get challengejson() {
      return i();
    },
    set challengejson(n = void 0) {
      i(n), x();
    },
    get customfetch() {
      return s();
    },
    set customfetch(n = void 0) {
      s(n), x();
    },
    get debug() {
      return c();
    },
    set debug(n = !1) {
      c(n), x();
    },
    get delay() {
      return f();
    },
    set delay(n = 0) {
      f(n), x();
    },
    get expire() {
      return d();
    },
    set expire(n = void 0) {
      d(n), x();
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
      return g();
    },
    set floatingoffset(n = void 0) {
      g(n), x();
    },
    get floatingpersist() {
      return m();
    },
    set floatingpersist(n = !1) {
      m(n), x();
    },
    get hidefooter() {
      return C();
    },
    set hidefooter(n = !1) {
      C(n), x();
    },
    get hidelogo() {
      return D();
    },
    set hidelogo(n = !1) {
      D(n), x();
    },
    get id() {
      return V();
    },
    set id(n = void 0) {
      V(n), x();
    },
    get locale() {
      return ke();
    },
    set locale(n = void 0) {
      ke(n), x();
    },
    get name() {
      return H();
    },
    set name(n = "altcha") {
      H(n), x();
    },
    get maxnumber() {
      return j();
    },
    set maxnumber(n = 1e6) {
      j(n), x();
    },
    get mockerror() {
      return he();
    },
    set mockerror(n = !1) {
      he(n), x();
    },
    get obfuscated() {
      return ge();
    },
    set obfuscated(n = void 0) {
      ge(n), x();
    },
    get plugins() {
      return B();
    },
    set plugins(n = void 0) {
      B(n), x();
    },
    get refetchonexpire() {
      return fe();
    },
    set refetchonexpire(n = !0) {
      fe(n), x();
    },
    get sentinel() {
      return _e();
    },
    set sentinel(n = void 0) {
      _e(n), x();
    },
    get spamfilter() {
      return Ee();
    },
    set spamfilter(n = !1) {
      Ee(n), x();
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
      return ae();
    },
    set verifyurl(n = void 0) {
      ae(n), x();
    },
    get workers() {
      return ot();
    },
    set workers(n = Math.min(16, navigator.hardwareConcurrency || 8)) {
      ot(n), x();
    },
    get workerurl() {
      return pt();
    },
    set workerurl(n = void 0) {
      pt(n), x();
    }
  });
}
hi(["change", "keydown", "click"]);
customElements.define("altcha-widget", Si(
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
    customfetch: {},
    floating: {},
    floatinganchor: {},
    floatingpersist: {},
    id: {},
    locale: {},
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
  oa as Altcha
};
