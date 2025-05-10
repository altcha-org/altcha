var _i = Object.defineProperty;
var Vr = (e) => {
  throw TypeError(e);
};
var mi = (e, t, r) => t in e ? _i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ne = (e, t, r) => mi(e, typeof t != "symbol" ? t + "" : t, r), Ur = (e, t, r) => t.has(e) || Vr("Cannot " + r);
var Y = (e, t, r) => (Ur(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Ut = (e, t, r) => t.has(e) ? Vr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), jt = (e, t, r, l) => (Ur(e, t, "write to private field"), l ? l.call(e, r) : t.set(e, r), r);
const pi = "5";
var rn;
typeof window < "u" && ((rn = window.__svelte ?? (window.__svelte = {})).v ?? (rn.v = /* @__PURE__ */ new Set())).add(pi);
const wi = 1, bi = 4, yi = 8, Ei = 16, xi = 1, $i = 2, Zt = "[", nn = "[!", ln = "]", Je = {}, W = Symbol(), ki = "http://www.w3.org/1999/xhtml", jr = !1, oe = 2, an = 4, Rt = 8, Gt = 16, be = 32, Fe = 64, bt = 128, re = 256, yt = 512, K = 1024, ye = 2048, et = 4096, Ke = 8192, St = 16384, Ci = 32768, Jt = 65536, Ai = 1 << 19, on = 1 << 20, ct = Symbol("$state"), sn = Symbol("legacy props"), Ii = Symbol("");
var fn = Array.isArray, Ri = Array.prototype.indexOf, Si = Array.from, Et = Object.keys, xt = Object.defineProperty, ze = Object.getOwnPropertyDescriptor, Ni = Object.getOwnPropertyDescriptors, Ti = Object.prototype, Di = Array.prototype, un = Object.getPrototypeOf;
function cn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const Li = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let vt = [], ht = [];
function dn() {
  var e = vt;
  vt = [], cn(e);
}
function vn() {
  var e = ht;
  ht = [], cn(e);
}
function Kt(e) {
  vt.length === 0 && queueMicrotask(dn), vt.push(e);
}
function Pi(e) {
  ht.length === 0 && Li(vn), ht.push(e);
}
function qr() {
  vt.length > 0 && dn(), ht.length > 0 && vn();
}
function hn(e) {
  return e === this.v;
}
function zi(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function gn(e) {
  return !zi(e, this.v);
}
function Oi(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Fi() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Mi(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Vi() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ui() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function ji(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function qi() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Bi() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Hi() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Yi() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Wi = !1;
function fe(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: hn,
    rv: 0,
    wv: 0
  };
  return r;
}
function He(e) {
  return /* @__PURE__ */ Zi(fe(e));
}
// @__NO_SIDE_EFFECTS__
function _n(e, t = !1) {
  const r = fe(e);
  return t || (r.equals = gn), r;
}
// @__NO_SIDE_EFFECTS__
function Zi(e) {
  return C !== null && !ae && (C.f & oe) !== 0 && (ue === null ? el([e]) : ue.push(e)), e;
}
function L(e, t) {
  return C !== null && !ae && zn() && (C.f & (oe | Gt)) !== 0 && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (ue === null || !ue.includes(e)) && Yi(), Gi(e, t);
}
function Gi(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = $n(), mn(e, ye), R !== null && (R.f & K) !== 0 && (R.f & (be | Fe)) === 0 && (_e === null ? tl([e]) : _e.push(e))), t;
}
function mn(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var l = r.length, i = 0; i < l; i++) {
      var a = r[i], o = a.f;
      (o & ye) === 0 && (ce(a, t), (o & (K | re)) !== 0 && ((o & oe) !== 0 ? mn(
        /** @type {Derived} */
        a,
        et
      ) : Dt(
        /** @type {Effect} */
        a
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Pe(e) {
  var t = oe | ye, r = C !== null && (C.f & oe) !== 0 ? (
    /** @type {Derived} */
    C
  ) : null;
  return R === null || r !== null && (r.f & re) !== 0 ? t |= re : R.f |= on, {
    ctx: q,
    deps: null,
    effects: null,
    equals: hn,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: r ?? R
  };
}
function pn(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      we(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Ji(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & oe) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Ki(e) {
  var t, r = R;
  Se(Ji(e));
  try {
    pn(e), t = Cn(e);
  } finally {
    Se(r);
  }
  return t;
}
function wn(e) {
  var t = Ki(e), r = (Ce || (e.f & re) !== 0) && e.deps !== null ? et : K;
  ce(e, r), e.equals(t) || (e.v = t, e.wv = $n());
}
function Nt(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let D = !1;
function Ge(e) {
  D = e;
}
let P;
function Ie(e) {
  if (e === null)
    throw Nt(), Je;
  return P = e;
}
function Xe() {
  return Ie(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ne(P)
  );
}
function Z(e) {
  if (D) {
    if (/* @__PURE__ */ Ne(P) !== null)
      throw Nt(), Je;
    P = e;
  }
}
function Xi() {
  for (var e = 0, t = P; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === ln) {
        if (e === 0) return t;
        e -= 1;
      } else (r === Zt || r === nn) && (e += 1);
    }
    var l = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ne(t)
    );
    t.remove(), t = l;
  }
}
function le(e, t = null, r) {
  if (typeof e != "object" || e === null || ct in e)
    return e;
  const l = un(e);
  if (l !== Ti && l !== Di)
    return e;
  var i = /* @__PURE__ */ new Map(), a = fn(e), o = fe(0);
  a && i.set("length", fe(
    /** @type {any[]} */
    e.length
  ));
  var f;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, c, v) {
        (!("value" in v) || v.configurable === !1 || v.enumerable === !1 || v.writable === !1) && qi();
        var h = i.get(c);
        return h === void 0 ? (h = fe(v.value), i.set(c, h)) : L(h, le(v.value, f)), !0;
      },
      deleteProperty(s, c) {
        var v = i.get(c);
        if (v === void 0)
          c in s && i.set(c, fe(W));
        else {
          if (a && typeof c == "string") {
            var h = (
              /** @type {Source<number>} */
              i.get("length")
            ), g = Number(c);
            Number.isInteger(g) && g < h.v && L(h, g);
          }
          L(v, W), Br(o);
        }
        return !0;
      },
      get(s, c, v) {
        var w;
        if (c === ct)
          return e;
        var h = i.get(c), g = c in s;
        if (h === void 0 && (!g || (w = ze(s, c)) != null && w.writable) && (h = fe(le(g ? s[c] : W, f)), i.set(c, h)), h !== void 0) {
          var m = d(h);
          return m === W ? void 0 : m;
        }
        return Reflect.get(s, c, v);
      },
      getOwnPropertyDescriptor(s, c) {
        var v = Reflect.getOwnPropertyDescriptor(s, c);
        if (v && "value" in v) {
          var h = i.get(c);
          h && (v.value = d(h));
        } else if (v === void 0) {
          var g = i.get(c), m = g == null ? void 0 : g.v;
          if (g !== void 0 && m !== W)
            return {
              enumerable: !0,
              configurable: !0,
              value: m,
              writable: !0
            };
        }
        return v;
      },
      has(s, c) {
        var m;
        if (c === ct)
          return !0;
        var v = i.get(c), h = v !== void 0 && v.v !== W || Reflect.has(s, c);
        if (v !== void 0 || R !== null && (!h || (m = ze(s, c)) != null && m.writable)) {
          v === void 0 && (v = fe(h ? le(s[c], f) : W), i.set(c, v));
          var g = d(v);
          if (g === W)
            return !1;
        }
        return h;
      },
      set(s, c, v, h) {
        var M;
        var g = i.get(c), m = c in s;
        if (a && c === "length")
          for (var w = v; w < /** @type {Source<number>} */
          g.v; w += 1) {
            var T = i.get(w + "");
            T !== void 0 ? L(T, W) : w in s && (T = fe(W), i.set(w + "", T));
          }
        g === void 0 ? (!m || (M = ze(s, c)) != null && M.writable) && (g = fe(void 0), L(g, le(v, f)), i.set(c, g)) : (m = g.v !== W, L(g, le(v, f)));
        var z = Reflect.getOwnPropertyDescriptor(s, c);
        if (z != null && z.set && z.set.call(h, v), !m) {
          if (a && typeof c == "string") {
            var B = (
              /** @type {Source<number>} */
              i.get("length")
            ), F = Number(c);
            Number.isInteger(F) && F >= B.v && L(B, F + 1);
          }
          Br(o);
        }
        return !0;
      },
      ownKeys(s) {
        d(o);
        var c = Reflect.ownKeys(s).filter((g) => {
          var m = i.get(g);
          return m === void 0 || m.v !== W;
        });
        for (var [v, h] of i)
          h.v !== W && !(v in s) && c.push(v);
        return c;
      },
      setPrototypeOf() {
        Bi();
      }
    }
  );
}
function Br(e, t = 1) {
  L(e, e.v + t);
}
var Hr, bn, yn, En;
function qt() {
  if (Hr === void 0) {
    Hr = window, bn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    yn = ze(t, "firstChild").get, En = ze(t, "nextSibling").get, e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Xt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function pe(e) {
  return yn.call(e);
}
// @__NO_SIDE_EFFECTS__
function Ne(e) {
  return En.call(e);
}
function G(e, t) {
  if (!D)
    return /* @__PURE__ */ pe(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ pe(P)
  );
  return r === null && (r = P.appendChild(Xt())), Ie(r), r;
}
function Yr(e, t) {
  if (!D) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ pe(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Ne(r) : r;
  }
  return P;
}
function ge(e, t = 1, r = !1) {
  let l = D ? P : e;
  for (var i; t--; )
    i = l, l = /** @type {TemplateNode} */
    /* @__PURE__ */ Ne(l);
  if (!D)
    return l;
  var a = l == null ? void 0 : l.nodeType;
  if (r && a !== 3) {
    var o = Xt();
    return l === null ? i == null || i.after(o) : l.before(o), Ie(o), o;
  }
  return Ie(l), /** @type {TemplateNode} */
  l;
}
function Qi(e) {
  e.textContent = "";
}
let pt = !1, $t = !1, kt = null, Oe = !1, Qt = !1;
function Wr(e) {
  Qt = e;
}
let dt = [];
let C = null, ae = !1;
function Re(e) {
  C = e;
}
let R = null;
function Se(e) {
  R = e;
}
let ue = null;
function el(e) {
  ue = e;
}
let j = null, J = 0, _e = null;
function tl(e) {
  _e = e;
}
let xn = 1, Ct = 0, Ce = !1;
function $n() {
  return ++xn;
}
function gt(e) {
  var h;
  var t = e.f;
  if ((t & ye) !== 0)
    return !0;
  if ((t & et) !== 0) {
    var r = e.deps, l = (t & re) !== 0;
    if (r !== null) {
      var i, a, o = (t & yt) !== 0, f = l && R !== null && !Ce, s = r.length;
      if (o || f) {
        var c = (
          /** @type {Derived} */
          e
        ), v = c.parent;
        for (i = 0; i < s; i++)
          a = r[i], (o || !((h = a == null ? void 0 : a.reactions) != null && h.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        o && (c.f ^= yt), f && v !== null && (v.f & re) === 0 && (c.f ^= re);
      }
      for (i = 0; i < s; i++)
        if (a = r[i], gt(
          /** @type {Derived} */
          a
        ) && wn(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!l || R !== null && !Ce) && ce(e, K);
  }
  return !1;
}
function rl(e, t) {
  for (var r = t; r !== null; ) {
    if ((r.f & bt) !== 0)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= bt;
      }
    r = r.parent;
  }
  throw pt = !1, e;
}
function nl(e) {
  return (e.f & St) === 0 && (e.parent === null || (e.parent.f & bt) === 0);
}
function Tt(e, t, r, l) {
  if (pt) {
    if (r === null && (pt = !1), nl(t))
      throw e;
    return;
  }
  r !== null && (pt = !0);
  {
    rl(e, t);
    return;
  }
}
function kn(e, t, r = !0) {
  var l = e.reactions;
  if (l !== null)
    for (var i = 0; i < l.length; i++) {
      var a = l[i];
      (a.f & oe) !== 0 ? kn(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (r ? ce(a, ye) : (a.f & K) !== 0 && ce(a, et), Dt(
        /** @type {Effect} */
        a
      ));
    }
}
function Cn(e) {
  var m;
  var t = j, r = J, l = _e, i = C, a = Ce, o = ue, f = q, s = ae, c = e.f;
  j = /** @type {null | Value[]} */
  null, J = 0, _e = null, Ce = (c & re) !== 0 && (ae || !Oe || C === null), C = (c & (be | Fe)) === 0 ? e : null, ue = null, Gr(e.ctx), ae = !1, Ct++;
  try {
    var v = (
      /** @type {Function} */
      (0, e.fn)()
    ), h = e.deps;
    if (j !== null) {
      var g;
      if (At(e, J), h !== null && J > 0)
        for (h.length = J + j.length, g = 0; g < j.length; g++)
          h[J + g] = j[g];
      else
        e.deps = h = j;
      if (!Ce)
        for (g = J; g < h.length; g++)
          ((m = h[g]).reactions ?? (m.reactions = [])).push(e);
    } else h !== null && J < h.length && (At(e, J), h.length = J);
    if (zn() && _e !== null && !ae && h !== null && (e.f & (oe | et | ye)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      _e.length; g++)
        kn(
          _e[g],
          /** @type {Effect} */
          e
        );
    return i !== null && Ct++, v;
  } finally {
    j = t, J = r, _e = l, C = i, Ce = a, ue = o, Gr(f), ae = s;
  }
}
function il(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var l = Ri.call(r, e);
    if (l !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[l] = r[i], r.pop());
    }
  }
  r === null && (t.f & oe) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (j === null || !j.includes(t)) && (ce(t, et), (t.f & (re | yt)) === 0 && (t.f ^= yt), pn(
    /** @type {Derived} **/
    t
  ), At(
    /** @type {Derived} **/
    t,
    0
  ));
}
function At(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var l = t; l < r.length; l++)
      il(e, r[l]);
}
function er(e) {
  var t = e.f;
  if ((t & St) === 0) {
    ce(e, K);
    var r = R, l = q, i = Oe;
    R = e, Oe = !0;
    try {
      (t & Gt) !== 0 ? gl(e) : Rn(e), In(e);
      var a = Cn(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = xn;
      var o = e.deps, f;
      jr && Wi && e.f & ye;
    } catch (s) {
      Tt(s, e, r, l || e.ctx);
    } finally {
      Oe = i, R = r;
    }
  }
}
function ll() {
  try {
    Vi();
  } catch (e) {
    if (kt !== null)
      Tt(e, kt, null);
    else
      throw e;
  }
}
function An() {
  var e = Oe;
  try {
    var t = 0;
    for (Oe = !0; dt.length > 0; ) {
      t++ > 1e3 && ll();
      var r = dt, l = r.length;
      dt = [];
      for (var i = 0; i < l; i++) {
        var a = ol(r[i]);
        al(a);
      }
    }
  } finally {
    $t = !1, Oe = e, kt = null;
  }
}
function al(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var l = e[r];
      if ((l.f & (St | Ke)) === 0)
        try {
          gt(l) && (er(l), l.deps === null && l.first === null && l.nodes_start === null && (l.teardown === null ? Sn(l) : l.fn = null));
        } catch (i) {
          Tt(i, l, null, l.ctx);
        }
    }
}
function Dt(e) {
  $t || ($t = !0, queueMicrotask(An));
  for (var t = kt = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (Fe | be)) !== 0) {
      if ((r & K) === 0) return;
      t.f ^= K;
    }
  }
  dt.push(t);
}
function ol(e) {
  for (var t = [], r = e; r !== null; ) {
    var l = r.f, i = (l & (be | Fe)) !== 0, a = i && (l & K) !== 0;
    if (!a && (l & Ke) === 0) {
      if ((l & an) !== 0)
        t.push(r);
      else if (i)
        r.f ^= K;
      else {
        var o = C;
        try {
          C = r, gt(r) && er(r);
        } catch (c) {
          Tt(c, r, null, r.ctx);
        } finally {
          C = o;
        }
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
function k(e) {
  var t;
  for (qr(); dt.length > 0; )
    $t = !0, An(), qr();
  return (
    /** @type {T} */
    t
  );
}
async function sl() {
  await Promise.resolve(), k();
}
function d(e) {
  var t = e.f, r = (t & oe) !== 0;
  if (C !== null && !ae) {
    ue !== null && ue.includes(e) && Hi();
    var l = C.deps;
    e.rv < Ct && (e.rv = Ct, j === null && l !== null && l[J] === e ? J++ : j === null ? j = [e] : (!Ce || !j.includes(e)) && j.push(e));
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var i = (
      /** @type {Derived} */
      e
    ), a = i.parent;
    a !== null && (a.f & re) === 0 && (i.f ^= re);
  }
  return r && (i = /** @type {Derived} */
  e, gt(i) && wn(i)), e.v;
}
function Qe(e) {
  var t = ae;
  try {
    return ae = !0, e();
  } finally {
    ae = t;
  }
}
const fl = -7169;
function ce(e, t) {
  e.f = e.f & fl | t;
}
function ul(e) {
  R === null && C === null && Mi(), C !== null && (C.f & re) !== 0 && R === null && Fi(), Qt && Oi();
}
function cl(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Me(e, t, r, l = !0) {
  var i = R, a = {
    ctx: q,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | ye,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: i,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (r)
    try {
      er(a), a.f |= Ci;
    } catch (s) {
      throw we(a), s;
    }
  else t !== null && Dt(a);
  var o = r && a.deps === null && a.first === null && a.nodes_start === null && a.teardown === null && (a.f & (on | bt)) === 0;
  if (!o && l && (i !== null && cl(a, i), C !== null && (C.f & oe) !== 0)) {
    var f = (
      /** @type {Derived} */
      C
    );
    (f.effects ?? (f.effects = [])).push(a);
  }
  return a;
}
function dl(e) {
  const t = Me(Rt, null, !1);
  return ce(t, K), t.teardown = e, t;
}
function Bt(e) {
  ul();
  var t = R !== null && (R.f & be) !== 0 && q !== null && !q.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      q
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: R,
      reaction: C
    });
  } else {
    var l = tr(e);
    return l;
  }
}
function vl(e) {
  const t = Me(Fe, e, !0);
  return () => {
    we(t);
  };
}
function hl(e) {
  const t = Me(Fe, e, !0);
  return (r = {}) => new Promise((l) => {
    r.outro ? Ht(t, () => {
      we(t), l(void 0);
    }) : (we(t), l(void 0));
  });
}
function tr(e) {
  return Me(an, e, !1);
}
function rr(e) {
  return Me(Rt, e, !0);
}
function Ye(e, t = [], r = Pe) {
  const l = t.map(r);
  return nr(() => e(...l.map(d)));
}
function nr(e, t = 0) {
  return Me(Rt | Gt | t, e, !0);
}
function It(e, t = !0) {
  return Me(Rt | be, e, !0, t);
}
function In(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Qt, l = C;
    Wr(!0), Re(null);
    try {
      t.call(null);
    } finally {
      Wr(r), Re(l);
    }
  }
}
function Rn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var l = r.next;
    (r.f & Fe) !== 0 ? r.parent = null : we(r, t), r = l;
  }
}
function gl(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & be) === 0 && we(t), t = r;
  }
}
function we(e, t = !0) {
  var r = !1;
  if ((t || (e.f & Ai) !== 0) && e.nodes_start !== null) {
    for (var l = e.nodes_start, i = e.nodes_end; l !== null; ) {
      var a = l === i ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ne(l)
      );
      l.remove(), l = a;
    }
    r = !0;
  }
  Rn(e, t && !r), At(e, 0), ce(e, St);
  var o = e.transitions;
  if (o !== null)
    for (const s of o)
      s.stop();
  In(e);
  var f = e.parent;
  f !== null && f.first !== null && Sn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function Sn(e) {
  var t = e.parent, r = e.prev, l = e.next;
  r !== null && (r.next = l), l !== null && (l.prev = r), t !== null && (t.first === e && (t.first = l), t.last === e && (t.last = r));
}
function Ht(e, t) {
  var r = [];
  Nn(e, r, !0), _l(r, () => {
    we(e), t && t();
  });
}
function _l(e, t) {
  var r = e.length;
  if (r > 0) {
    var l = () => --r || t();
    for (var i of e)
      i.out(l);
  } else
    t();
}
function Nn(e, t, r) {
  if ((e.f & Ke) === 0) {
    if (e.f ^= Ke, e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || r) && t.push(o);
    for (var l = e.first; l !== null; ) {
      var i = l.next, a = (l.f & Jt) !== 0 || (l.f & be) !== 0;
      Nn(l, t, a ? r : !1), l = i;
    }
  }
}
function Zr(e) {
  Tn(e, !0);
}
function Tn(e, t) {
  if ((e.f & Ke) !== 0) {
    e.f ^= Ke, (e.f & K) === 0 && (e.f ^= K), gt(e) && (ce(e, ye), Dt(e));
    for (var r = e.first; r !== null; ) {
      var l = r.next, i = (r.f & Jt) !== 0 || (r.f & be) !== 0;
      Tn(r, i ? t : !1), r = l;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
function Dn(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let q = null;
function Gr(e) {
  q = e;
}
function Ln(e, t = !1, r) {
  q = {
    p: q,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
}
function Pn(e) {
  const t = q;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const o = t.e;
    if (o !== null) {
      var r = R, l = C;
      t.e = null;
      try {
        for (var i = 0; i < o.length; i++) {
          var a = o[i];
          Se(a.effect), Re(a.reaction), tr(a.fn);
        }
      } finally {
        Se(r), Re(l);
      }
    }
    q = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function zn() {
  return !0;
}
const ml = ["touchstart", "touchmove"];
function pl(e) {
  return ml.includes(e);
}
let Jr = !1;
function On() {
  Jr || (Jr = !0, document.addEventListener(
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
function Fn(e) {
  var t = C, r = R;
  Re(null), Se(null);
  try {
    return e();
  } finally {
    Re(t), Se(r);
  }
}
function wl(e, t, r, l = r) {
  e.addEventListener(t, () => Fn(r));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), l(!0);
  } : e.__on_r = () => l(!0), On();
}
const Mn = /* @__PURE__ */ new Set(), Yt = /* @__PURE__ */ new Set();
function bl(e, t, r, l = {}) {
  function i(a) {
    if (l.capture || ut.call(t, a), !a.cancelBubble)
      return Fn(() => r == null ? void 0 : r.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Kt(() => {
    t.addEventListener(e, i, l);
  }) : t.addEventListener(e, i, l), i;
}
function yl(e, t, r, l, i) {
  var a = { capture: l, passive: i }, o = bl(e, t, r, a);
  (t === document.body || t === window || t === document) && dl(() => {
    t.removeEventListener(e, o, a);
  });
}
function El(e) {
  for (var t = 0; t < e.length; t++)
    Mn.add(e[t]);
  for (var r of Yt)
    r(e);
}
function ut(e) {
  var F;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), l = e.type, i = ((F = e.composedPath) == null ? void 0 : F.call(e)) || [], a = (
    /** @type {null | Element} */
    i[0] || e.target
  ), o = 0, f = e.__root;
  if (f) {
    var s = i.indexOf(f);
    if (s !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var c = i.indexOf(t);
    if (c === -1)
      return;
    s <= c && (o = s);
  }
  if (a = /** @type {Element} */
  i[o] || e.target, a !== t) {
    xt(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var v = C, h = R;
    Re(null), Se(null);
    try {
      for (var g, m = []; a !== null; ) {
        var w = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var T = a["__" + l];
          if (T != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (fn(T)) {
              var [z, ...B] = T;
              z.apply(a, [e, ...B]);
            } else
              T.call(a, e);
        } catch (M) {
          g ? m.push(M) : g = M;
        }
        if (e.cancelBubble || w === t || w === null)
          break;
        a = w;
      }
      if (g) {
        for (let M of m)
          queueMicrotask(() => {
            throw M;
          });
        throw g;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Re(v), Se(h);
    }
  }
}
function ir(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Ae(e, t) {
  var r = (
    /** @type {Effect} */
    R
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function de(e, t) {
  var r = (t & xi) !== 0, l = (t & $i) !== 0, i, a = !e.startsWith("<!>");
  return () => {
    if (D)
      return Ae(P, null), P;
    i === void 0 && (i = ir(a ? e : "<!>" + e), r || (i = /** @type {Node} */
    /* @__PURE__ */ pe(i)));
    var o = (
      /** @type {TemplateNode} */
      l || bn ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ pe(o)
      ), s = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Ae(f, s);
    } else
      Ae(o, o);
    return o;
  };
}
// @__NO_SIDE_EFFECTS__
function xl(e, t, r = "svg") {
  var l = !e.startsWith("<!>"), i = `<${r}>${l ? e : "<!>" + e}</${r}>`, a;
  return () => {
    if (D)
      return Ae(P, null), P;
    if (!a) {
      var o = (
        /** @type {DocumentFragment} */
        ir(i)
      ), f = (
        /** @type {Element} */
        /* @__PURE__ */ pe(o)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ pe(f);
    }
    var s = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return Ae(s, s), s;
  };
}
function ee(e, t) {
  if (D) {
    R.nodes_end = P, Xe();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Vn(e, t) {
  return Un(e, t);
}
function $l(e, t) {
  qt(), t.intro = t.intro ?? !1;
  const r = t.target, l = D, i = P;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ pe(r)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== Zt); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ Ne(a);
    if (!a)
      throw Je;
    Ge(!0), Ie(
      /** @type {Comment} */
      a
    ), Xe();
    const o = Un(e, { ...t, anchor: a });
    if (P === null || P.nodeType !== 8 || /** @type {Comment} */
    P.data !== ln)
      throw Nt(), Je;
    return Ge(!1), /**  @type {Exports} */
    o;
  } catch (o) {
    if (o === Je)
      return t.recover === !1 && Ui(), qt(), Qi(r), Ge(!1), Vn(e, t);
    throw o;
  } finally {
    Ge(l), Ie(i);
  }
}
const We = /* @__PURE__ */ new Map();
function Un(e, { target: t, anchor: r, props: l = {}, events: i, context: a, intro: o = !0 }) {
  qt();
  var f = /* @__PURE__ */ new Set(), s = (h) => {
    for (var g = 0; g < h.length; g++) {
      var m = h[g];
      if (!f.has(m)) {
        f.add(m);
        var w = pl(m);
        t.addEventListener(m, ut, { passive: w });
        var T = We.get(m);
        T === void 0 ? (document.addEventListener(m, ut, { passive: w }), We.set(m, 1)) : We.set(m, T + 1);
      }
    }
  };
  s(Si(Mn)), Yt.add(s);
  var c = void 0, v = hl(() => {
    var h = r ?? t.appendChild(Xt());
    return It(() => {
      if (a) {
        Ln({});
        var g = (
          /** @type {ComponentContext} */
          q
        );
        g.c = a;
      }
      i && (l.$$events = i), D && Ae(
        /** @type {TemplateNode} */
        h,
        null
      ), c = e(h, l) || {}, D && (R.nodes_end = P), a && Pn();
    }), () => {
      var w;
      for (var g of f) {
        t.removeEventListener(g, ut);
        var m = (
          /** @type {number} */
          We.get(g)
        );
        --m === 0 ? (document.removeEventListener(g, ut), We.delete(g)) : We.set(g, m);
      }
      Yt.delete(s), h !== r && ((w = h.parentNode) == null || w.removeChild(h));
    };
  });
  return Wt.set(c, v), c;
}
let Wt = /* @__PURE__ */ new WeakMap();
function kl(e, t) {
  const r = Wt.get(e);
  return r ? (Wt.delete(e), r(t)) : Promise.resolve();
}
function ke(e, t, [r, l] = [0, 0]) {
  D && r === 0 && Xe();
  var i = e, a = null, o = null, f = W, s = r > 0 ? Jt : 0, c = !1;
  const v = (g, m = !0) => {
    c = !0, h(m, g);
  }, h = (g, m) => {
    if (f === (f = g)) return;
    let w = !1;
    if (D && l !== -1) {
      if (r === 0) {
        const z = (
          /** @type {Comment} */
          i.data
        );
        z === Zt ? l = 0 : z === nn ? l = 1 / 0 : (l = parseInt(z.substring(1)), l !== l && (l = f ? 1 / 0 : -1));
      }
      const T = l > r;
      !!f === T && (i = Xi(), Ie(i), Ge(!1), w = !0, l = -1);
    }
    f ? (a ? Zr(a) : m && (a = It(() => m(i))), o && Ht(o, () => {
      o = null;
    })) : (o ? Zr(o) : m && (o = It(() => m(i, [r + 1, l]))), a && Ht(a, () => {
      a = null;
    })), w && Ge(!0);
  };
  nr(() => {
    c = !1, t(v), c || h(null, null);
  }, s), D && (i = P);
}
function Ze(e, t, r, l, i) {
  var a = e, o = "", f;
  nr(() => {
    if (o === (o = t() ?? "")) {
      D && Xe();
      return;
    }
    f !== void 0 && (we(f), f = void 0), o !== "" && (f = It(() => {
      if (D) {
        P.data;
        for (var s = Xe(), c = s; s !== null && (s.nodeType !== 8 || /** @type {Comment} */
        s.data !== ""); )
          c = s, s = /** @type {TemplateNode} */
          /* @__PURE__ */ Ne(s);
        if (s === null)
          throw Nt(), Je;
        Ae(P, c), a = Ie(s);
        return;
      }
      var v = o + "", h = ir(v);
      Ae(
        /** @type {TemplateNode} */
        /* @__PURE__ */ pe(h),
        /** @type {TemplateNode} */
        h.lastChild
      ), a.before(h);
    }));
  });
}
function Cl(e, t, r, l, i) {
  var f;
  D && Xe();
  var a = (f = t.$$slots) == null ? void 0 : f[r], o = !1;
  a === !0 && (a = t.children, o = !0), a === void 0 || a(e, o ? () => l : l);
}
function Al(e, t) {
  Kt(() => {
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
      const i = document.createElement("style");
      i.id = t.hash, i.textContent = t.code, l.appendChild(i);
    }
  });
}
const Kr = [...` 	
\r\f \v\uFEFF`];
function Il(e, t, r) {
  var l = "" + e;
  if (r) {
    for (var i in r)
      if (r[i])
        l = l ? l + " " + i : i;
      else if (l.length)
        for (var a = i.length, o = 0; (o = l.indexOf(i, o)) >= 0; ) {
          var f = o + a;
          (o === 0 || Kr.includes(l[o - 1])) && (f === l.length || Kr.includes(l[f])) ? l = (o === 0 ? "" : l.substring(0, o)) + l.substring(f + 1) : o = f;
        }
  }
  return l === "" ? null : l;
}
function Rl(e, t, r, l, i, a) {
  var o = e.__className;
  if (D || o !== r) {
    var f = Il(r, l, a);
    (!D || f !== e.getAttribute("class")) && (f == null ? e.removeAttribute("class") : e.className = f), e.__className = r;
  } else if (a && i !== a)
    for (var s in a) {
      var c = !!a[s];
      (i == null || c !== !!i[s]) && e.classList.toggle(s, c);
    }
  return a;
}
const Sl = Symbol("is custom element"), Nl = Symbol("is html");
function Xr(e) {
  if (D) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var l = e.value;
          ie(e, "value", null), e.value = l;
        }
        if (e.hasAttribute("checked")) {
          var i = e.checked;
          ie(e, "checked", null), e.checked = i;
        }
      }
    };
    e.__on_r = r, Pi(r), On();
  }
}
function Tl(e, t) {
  var r = jn(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function ie(e, t, r, l) {
  var i = jn(e);
  D && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || i[t] !== (i[t] = r) && (t === "loading" && (e[Ii] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Dl(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function jn(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Sl]: e.nodeName.includes("-"),
      [Nl]: e.namespaceURI === ki
    })
  );
}
var Qr = /* @__PURE__ */ new Map();
function Dl(e) {
  var t = Qr.get(e.nodeName);
  if (t) return t;
  Qr.set(e.nodeName, t = []);
  for (var r, l = e, i = Element.prototype; i !== l; ) {
    r = Ni(l);
    for (var a in r)
      r[a].set && t.push(a);
    l = un(l);
  }
  return t;
}
function Ll(e, t, r = t) {
  wl(e, "change", (l) => {
    var i = l ? e.defaultChecked : e.checked;
    r(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (D && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  Qe(t) == null) && r(e.checked), rr(() => {
    var l = t();
    e.checked = !!l;
  });
}
function en(e, t) {
  return e === t || (e == null ? void 0 : e[ct]) === t;
}
function tn(e = {}, t, r, l) {
  return tr(() => {
    var i, a;
    return rr(() => {
      i = a, a = [], Qe(() => {
        e !== r(...a) && (t(e, ...a), i && en(r(...i), e) && t(null, ...i));
      });
    }), () => {
      Kt(() => {
        a && en(r(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function qn(e) {
  q === null && Dn(), Bt(() => {
    const t = Qe(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Pl(e) {
  q === null && Dn(), qn(() => () => Qe(e));
}
let mt = !1;
function zl(e) {
  var t = mt;
  try {
    return mt = !1, [e(), mt];
  } finally {
    mt = t;
  }
}
function I(e, t, r, l) {
  var Te;
  var i = (r & wi) !== 0, a = !0, o = (r & yi) !== 0, f = (r & Ei) !== 0, s = !1, c;
  o ? [c, s] = zl(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var v = ct in e || sn in e, h = o && (((Te = ze(e, t)) == null ? void 0 : Te.set) ?? (v && t in e && ((O) => e[t] = O))) || void 0, g = (
    /** @type {V} */
    l
  ), m = !0, w = !1, T = () => (w = !0, m && (m = !1, f ? g = Qe(
    /** @type {() => V} */
    l
  ) : g = /** @type {V} */
  l), g);
  c === void 0 && l !== void 0 && (h && a && ji(), c = T(), h && h(c));
  var z;
  if (z = () => {
    var O = (
      /** @type {V} */
      e[t]
    );
    return O === void 0 ? T() : (m = !0, w = !1, O);
  }, (r & bi) === 0)
    return z;
  if (h) {
    var B = e.$$legacy;
    return function(O, V) {
      return arguments.length > 0 ? ((!V || B || s) && h(V ? z() : O), O) : z();
    };
  }
  var F = !1, M = /* @__PURE__ */ _n(c), H = /* @__PURE__ */ Pe(() => {
    var O = z(), V = d(M);
    return F ? (F = !1, V) : M.v = O;
  });
  return i || (H.equals = gn), function(O, V) {
    if (arguments.length > 0) {
      const ve = V ? d(H) : o ? le(O) : O;
      return H.equals(ve) || (F = !0, L(M, ve), w && g !== void 0 && (g = ve), Qe(() => d(H))), O;
    }
    return d(H);
  };
}
function Ol(e) {
  return new Fl(e);
}
var me, te;
class Fl {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    Ut(this, me);
    /** @type {Record<string, any>} */
    Ut(this, te);
    var a;
    var r = /* @__PURE__ */ new Map(), l = (o, f) => {
      var s = /* @__PURE__ */ _n(f);
      return r.set(o, s), s;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(o, f) {
          return d(r.get(f) ?? l(f, Reflect.get(o, f)));
        },
        has(o, f) {
          return f === sn ? !0 : (d(r.get(f) ?? l(f, Reflect.get(o, f))), Reflect.has(o, f));
        },
        set(o, f, s) {
          return L(r.get(f) ?? l(f, s), s), Reflect.set(o, f, s);
        }
      }
    );
    jt(this, te, (t.hydrate ? $l : Vn)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((a = t == null ? void 0 : t.props) != null && a.$$host) || t.sync === !1) && k(), jt(this, me, i.$$events);
    for (const o of Object.keys(Y(this, te)))
      o === "$set" || o === "$destroy" || o === "$on" || xt(this, o, {
        get() {
          return Y(this, te)[o];
        },
        /** @param {any} value */
        set(f) {
          Y(this, te)[o] = f;
        },
        enumerable: !0
      });
    Y(this, te).$set = /** @param {Record<string, any>} next */
    (o) => {
      Object.assign(i, o);
    }, Y(this, te).$destroy = () => {
      kl(Y(this, te));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    Y(this, te).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    Y(this, me)[t] = Y(this, me)[t] || [];
    const l = (...i) => r.call(this, ...i);
    return Y(this, me)[t].push(l), () => {
      Y(this, me)[t] = Y(this, me)[t].filter(
        /** @param {any} fn */
        (i) => i !== l
      );
    };
  }
  $destroy() {
    Y(this, te).$destroy();
  }
}
me = new WeakMap(), te = new WeakMap();
let Bn;
typeof HTMLElement == "function" && (Bn = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, l) {
    super();
    /** The Svelte component constructor */
    ne(this, "$$ctor");
    /** Slots */
    ne(this, "$$s");
    /** @type {any} The Svelte component instance */
    ne(this, "$$c");
    /** Whether or not the custom element is connected */
    ne(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    ne(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    ne(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    ne(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    ne(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    ne(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    ne(this, "$$me");
    this.$$ctor = t, this.$$s = r, l && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, r, l) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(r), this.$$c) {
      const i = this.$$c.$on(t, r);
      this.$$l_u.set(r, i);
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
      const i = this.$$l_u.get(r);
      i && (i(), this.$$l_u.delete(r));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(i) {
        return (a) => {
          const o = document.createElement("slot");
          i !== "default" && (o.name = i), ee(a, o);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, l = Ml(this);
      for (const i of this.$$s)
        i in l && (i === "default" && !this.$$d.children ? (this.$$d.children = t(i), r.default = !0) : r[i] = t(i));
      for (const i of this.attributes) {
        const a = this.$$g_p(i.name);
        a in this.$$d || (this.$$d[a] = wt(a, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = Ol({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = vl(() => {
        rr(() => {
          var i;
          this.$$r = !0;
          for (const a of Et(this.$$c)) {
            if (!((i = this.$$p_d[a]) != null && i.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const o = wt(
              a,
              this.$$d[a],
              this.$$p_d,
              "toAttribute"
            );
            o == null ? this.removeAttribute(this.$$p_d[a].attribute || a) : this.setAttribute(this.$$p_d[a].attribute || a, o);
          }
          this.$$r = !1;
        });
      });
      for (const i in this.$$l)
        for (const a of this.$$l[i]) {
          const o = this.$$c.$on(i, a);
          this.$$l_u.set(a, o);
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
    var i;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = wt(t, l, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
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
    return Et(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function wt(e, t, r, l) {
  var a;
  const i = (a = r[e]) == null ? void 0 : a.type;
  if (t = i === "Boolean" && typeof t != "boolean" ? t != null : t, !l || !r[e])
    return t;
  if (l === "toAttribute")
    switch (i) {
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
    switch (i) {
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
function Ml(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function Vl(e, t, r, l, i, a) {
  let o = class extends Bn {
    constructor() {
      super(e, r, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Et(t).map(
        (f) => (t[f].attribute || f).toLowerCase()
      );
    }
  };
  return Et(t).forEach((f) => {
    xt(o.prototype, f, {
      get() {
        return this.$$c && f in this.$$c ? this.$$c[f] : this.$$d[f];
      },
      set(s) {
        var h;
        s = wt(f, s, t), this.$$d[f] = s;
        var c = this.$$c;
        if (c) {
          var v = (h = ze(c, f)) == null ? void 0 : h.get;
          v ? c[f] = s : c.$set({ [f]: s });
        }
      }
    });
  }), l.forEach((f) => {
    xt(o.prototype, f, {
      get() {
        var s;
        return (s = this.$$c) == null ? void 0 : s[f];
      }
    });
  }), e.element = /** @type {any} */
  o, o;
}
const Hn = new TextEncoder();
function Ul(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function jl(e, t = "SHA-256", r = 1e5) {
  const l = Date.now().toString(16);
  e || (e = Math.round(Math.random() * r));
  const i = await Yn(l, e, t);
  return {
    algorithm: t,
    challenge: i,
    salt: l,
    signature: ""
  };
}
async function Yn(e, t, r) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return Ul(
    await crypto.subtle.digest(
      r.toUpperCase(),
      Hn.encode(e + t)
    )
  );
}
function ql(e, t, r = "SHA-256", l = 1e6, i = 0) {
  const a = new AbortController(), o = Date.now();
  return {
    promise: (async () => {
      for (let s = i; s <= l; s += 1) {
        if (a.signal.aborted)
          return null;
        if (await Yn(t, s, r) === e)
          return {
            number: s,
            took: Date.now() - o
          };
      }
      return null;
    })(),
    controller: a
  };
}
function Bl() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function Hl(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let l = 0; l < t.length; l++)
    r[l] = t.charCodeAt(l);
  return r;
}
function Yl(e, t = 12) {
  const r = new Uint8Array(t);
  for (let l = 0; l < t; l++)
    r[l] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function Wl(e, t = "", r = 1e6, l = 0) {
  const i = "AES-GCM", a = new AbortController(), o = Date.now(), f = async () => {
    for (let v = l; v <= r; v += 1) {
      if (a.signal.aborted || !s || !c)
        return null;
      try {
        const h = await crypto.subtle.decrypt(
          {
            name: i,
            iv: Yl(v)
          },
          s,
          c
        );
        if (h)
          return {
            clearText: new TextDecoder().decode(h),
            took: Date.now() - o
          };
      } catch {
      }
    }
    return null;
  };
  let s = null, c = null;
  try {
    c = Hl(e);
    const v = await crypto.subtle.digest(
      "SHA-256",
      Hn.encode(t)
    );
    s = await crypto.subtle.importKey(
      "raw",
      v,
      i,
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
var y = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(y || {}), Zl = /* @__PURE__ */ xl('<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="svelte-ddsc3z"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25" class="svelte-ddsc3z"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor" class="altcha-spinner svelte-ddsc3z"></path></svg>'), Gl = /* @__PURE__ */ de('<span role="status" aria-live="polite" class="svelte-ddsc3z"><!></span> <input type="hidden" class="svelte-ddsc3z">', 1), Jl = /* @__PURE__ */ de('<span role="status" aria-live="polite" class="svelte-ddsc3z"><!></span>'), Kl = /* @__PURE__ */ de('<label class="svelte-ddsc3z"><!></label>'), Xl = /* @__PURE__ */ de('<div class="svelte-ddsc3z"><a target="_blank" class="altcha-logo svelte-ddsc3z"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-ddsc3z"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor" class="svelte-ddsc3z"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor" class="svelte-ddsc3z"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor" class="svelte-ddsc3z"></path></svg></a></div>'), Ql = /* @__PURE__ */ de('<div class="svelte-ddsc3z"><!></div>'), ea = /* @__PURE__ */ de('<div class="svelte-ddsc3z"><!></div>'), ta = /* @__PURE__ */ de('<div class="altcha-error svelte-ddsc3z"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="svelte-ddsc3z"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" class="svelte-ddsc3z"></path></svg> <!></div>'), ra = /* @__PURE__ */ de('<div class="altcha-footer svelte-ddsc3z"><div class="svelte-ddsc3z"><!></div></div>'), na = /* @__PURE__ */ de('<div class="altcha-anchor-arrow svelte-ddsc3z"></div>'), ia = /* @__PURE__ */ de('<!> <div class="altcha svelte-ddsc3z"><div class="altcha-main svelte-ddsc3z"><!> <div><input type="checkbox" class="svelte-ddsc3z"></div> <div class="altcha-label svelte-ddsc3z"><!></div> <!></div> <!> <!> <!></div>', 1);
const la = {
  hash: "svelte-ddsc3z",
  code: `.altcha.svelte-ddsc3z {background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);position:relative;text-align:left;}.altcha.svelte-ddsc3z:focus-within {border-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating].svelte-ddsc3z {background:var(--altcha-color-base, white);display:none;filter:drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2));left:-100%;position:fixed;top:-100%;width:var(--altcha-max-width, 260px);z-index:999999;}.altcha[data-floating=top].svelte-ddsc3z .altcha-anchor-arrow:where(.svelte-ddsc3z) {border-bottom-color:transparent;border-top-color:var(--altcha-color-border, #a0a0a0);bottom:-12px;top:auto;}.altcha[data-floating=bottom].svelte-ddsc3z:focus-within::after {border-bottom-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating=top].svelte-ddsc3z:focus-within::after {border-top-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating].svelte-ddsc3z:not([data-state=unverified]) {display:block;}.altcha-anchor-arrow.svelte-ddsc3z {border:6px solid transparent;border-bottom-color:var(--altcha-color-border, #a0a0a0);content:"";height:0;left:12px;position:absolute;top:-12px;width:0;}.altcha-main.svelte-ddsc3z {align-items:center;display:flex;gap:0.4rem;padding:0.7rem;}.altcha-label.svelte-ddsc3z {flex-grow:1;}.altcha-label.svelte-ddsc3z label:where(.svelte-ddsc3z) {cursor:pointer;}.altcha-logo.svelte-ddsc3z {color:currentColor;opacity:0.3;}.altcha-logo.svelte-ddsc3z:hover {opacity:1;}.altcha-error.svelte-ddsc3z {color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem;}.altcha-footer.svelte-ddsc3z {align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.4;padding:0.2rem 0.7rem;text-align:right;}.altcha-footer.svelte-ddsc3z:hover {opacity:1;}.altcha-footer.svelte-ddsc3z > :where(.svelte-ddsc3z):first-child {flex-grow:1;}.altcha-footer.svelte-ddsc3z a {color:currentColor;}.altcha-checkbox.svelte-ddsc3z {display:flex;align-items:center;height:24px;width:24px;}.altcha-checkbox.svelte-ddsc3z input:where(.svelte-ddsc3z) {width:18px;height:18px;margin:0;}.altcha-hidden.svelte-ddsc3z {display:none;}.altcha-spinner.svelte-ddsc3z {
  animation: svelte-ddsc3z-altcha-spinner 0.75s infinite linear;transform-origin:center;}

@keyframes svelte-ddsc3z-altcha-spinner {
  100% {
    transform: rotate(360deg);
  }
}`
};
function aa(e, t) {
  var Or, Fr;
  Ln(t, !0), Al(e, la);
  let r = I(t, "auto", 7, void 0), l = I(t, "blockspam", 7, void 0), i = I(t, "challengeurl", 7, void 0), a = I(t, "challengejson", 7, void 0), o = I(t, "customfetch", 7, void 0), f = I(t, "debug", 7, !1), s = I(t, "delay", 7, 0), c = I(t, "expire", 7, void 0), v = I(t, "floating", 7, void 0), h = I(t, "floatinganchor", 7, void 0), g = I(t, "floatingoffset", 7, void 0), m = I(t, "floatingpersist", 7, !1), w = I(t, "hidefooter", 7, !1), T = I(t, "hidelogo", 7, !1), z = I(t, "id", 7, void 0), B = I(t, "name", 7, "altcha"), F = I(t, "maxnumber", 7, 1e6), M = I(t, "mockerror", 7, !1), H = I(t, "obfuscated", 7, void 0), Te = I(t, "plugins", 7, void 0), O = I(t, "refetchonexpire", 7, !0), V = I(t, "spamfilter", 7, !1), ve = I(t, "strings", 7, void 0), X = I(t, "test", 7, !1), Ee = I(t, "verifyurl", 7, void 0), Ve = I(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), tt = I(t, "workerurl", 7, void 0);
  const lr = ["SHA-256", "SHA-384", "SHA-512"], ar = "Visit Altcha.org", or = "https://altcha.org/", rt = (n, u) => {
    t.$$host.dispatchEvent(new CustomEvent(n, { detail: u }));
  }, sr = (Fr = (Or = document.documentElement.lang) == null ? void 0 : Or.split("-")) == null ? void 0 : Fr[0], Lt = /* @__PURE__ */ Pe(() => {
    var n;
    return i() && new URL(i(), location.origin).host.endsWith(".altcha.org") && !!((n = i()) != null && n.includes("apiKey=ckey_"));
  }), Pt = /* @__PURE__ */ Pe(() => a() ? yr(a()) : void 0), fr = /* @__PURE__ */ Pe(() => ve() ? yr(ve()) : {}), Q = /* @__PURE__ */ Pe(() => {
    var n;
    return {
      ariaLinkLabel: ar,
      error: "Verification failed. Try again later.",
      expired: "Verification expired. Try again.",
      footer: `Protected by <a href="${or}" target="_blank" aria-label="${((n = d(fr)) == null ? void 0 : n.ariaLinkLabel) || ar}">ALTCHA</a>`,
      label: "I'm not a robot",
      verified: "Verified",
      verifying: "Verifying...",
      waitAlert: "Verifying... please wait.",
      ...d(fr)
    };
  }), ur = /* @__PURE__ */ Pe(() => `${z() || B()}_checkbox`);
  let Ue = He(!1), A = He(le(y.UNVERIFIED)), U = He(void 0), nt = He(null), je = null, p = null, qe = He(null), se = null, xe = [], De = He(null);
  Bt(() => {
    ei(d(qe));
  }), Bt(() => {
    ti(d(A));
  }), Pl(() => {
    Wn(), p && (p.removeEventListener("submit", mr), p.removeEventListener("reset", pr), p.removeEventListener("focusin", _r), p = null), se && (clearTimeout(se), se = null), document.removeEventListener("click", hr), document.removeEventListener("scroll", gr), window.removeEventListener("resize", br);
  }), qn(() => {
    var n;
    S("mounted", "1.4.3"), S("workers", Ve()), Xn(), S("plugins", xe.length ? xe.map((u) => u.constructor.pluginName).join(", ") : "none"), X() && S("using test mode"), c() && zt(c()), r() !== void 0 && S("auto", r()), v() !== void 0 && Er(v()), p = (n = d(U)) == null ? void 0 : n.closest("form"), p && (p.addEventListener("submit", mr, { capture: !0 }), p.addEventListener("reset", pr), (r() === "onfocus" || m() === "focus") && p.addEventListener("focusin", _r)), r() === "onload" && (H() ? it() : $e()), d(Lt) && (w() || T()) && S("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      rt("load");
    });
  });
  function cr(n, u) {
    return btoa(JSON.stringify({
      algorithm: n.algorithm,
      challenge: n.challenge,
      number: u.number,
      salt: n.salt,
      signature: n.signature,
      test: X() ? !0 : void 0,
      took: u.took
    }));
  }
  function Wn() {
    for (const n of xe)
      n.destroy();
  }
  function dr() {
    i() && O() && d(A) === y.VERIFIED ? $e() : at(y.EXPIRED, d(Q).expired);
  }
  async function Zn() {
    var n;
    if (M())
      throw S("mocking error"), new Error("Mocked error.");
    if (d(Pt))
      return S("using provided json data"), d(Pt);
    if (X())
      return S("generating test challenge", { test: X() }), jl(typeof X() != "boolean" ? +X() : void 0);
    {
      if (!i() && p) {
        const $ = p.getAttribute("action");
        $ != null && $.includes("/form/") && i($ + "/altcha");
      }
      if (!i())
        throw new Error("Attribute challengeurl not set.");
      S("fetching challenge from", i());
      const u = {
        headers: V() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      }, _ = await vr()(i(), u);
      if (!_ || !(_ instanceof Response))
        throw new Error("Fetch function did not return a response.");
      if (_.status !== 200)
        throw new Error(`Server responded with ${_.status}.`);
      const E = _.headers.get("X-Altcha-Config"), N = await _.json(), x = new URLSearchParams((n = N.salt.split("?")) == null ? void 0 : n[1]), b = x.get("expires") || x.get("expire");
      if (b) {
        const $ = new Date(+b * 1e3), he = isNaN($.getTime()) ? 0 : $.getTime() - Date.now();
        he > 0 && zt(he);
      }
      if (E)
        try {
          const $ = JSON.parse(E);
          $ && typeof $ == "object" && ("sentinel" in $ ? alert("This version of the widget is not compatible with Sentinel. Upgrade to version 2.x.x.") : ($.verifyurl && ($.verifyurl = new URL($.verifyurl, new URL(i())).toString()), kr($)));
        } catch ($) {
          S("unable to configure from X-Altcha-Config", $);
        }
      return N;
    }
  }
  function Gn(n) {
    var _;
    const u = p == null ? void 0 : p.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((_ = u == null ? void 0 : u.value) == null ? void 0 : _.slice(u.value.indexOf("@"))) || void 0;
  }
  function vr() {
    let n = fetch;
    if (o())
      if (S("using customfetch"), typeof o() == "string") {
        if (n = globalThis[o()] || null, !n)
          throw new Error(`Custom fetch function not found: ${o()}`);
      } else
        n = o();
    return n;
  }
  function Jn() {
    return V() === "ipAddress" ? {
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
    } : typeof V() == "object" ? V() : {
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
  function Kn(n) {
    return [
      ...(p == null ? void 0 : p.querySelectorAll(n != null && n.length ? n.map((_) => `input[name="${_}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (_, E) => {
        const N = E.name, x = E.value;
        return N && x && (_[N] = /\n/.test(x) ? x.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : x), _;
      },
      {}
    );
  }
  function Xn() {
    const n = Te() !== void 0 ? Te().split(",") : void 0;
    for (const u of globalThis.altchaPlugins)
      (!n || n.includes(u.pluginName)) && xe.push(new u({
        el: d(U),
        clarify: it,
        dispatch: rt,
        getConfiguration: Cr,
        getFloatingAnchor: Ar,
        getState: Ir,
        log: S,
        reset: at,
        solve: $r,
        setState: Le,
        setFloatingAnchor: Sr,
        verify: $e
      }));
  }
  function S(...n) {
    (f() || n.some((u) => u instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${B()}]`, ...n);
  }
  function Qn() {
    [y.UNVERIFIED, y.ERROR, y.EXPIRED].includes(d(A)) ? V() !== !1 && (p == null ? void 0 : p.reportValidity()) === !1 ? L(Ue, !1) : H() ? it() : $e() : L(Ue, !0);
  }
  function hr(n) {
    const u = n.target;
    v() && u && !d(U).contains(u) && (d(A) === y.VERIFIED && m() === !1 || d(A) === y.VERIFIED && m() === "focus" && !(p != null && p.matches(":focus-within")) || r() === "off" && d(A) === y.UNVERIFIED) && Rr();
  }
  function gr() {
    v() && d(A) !== y.UNVERIFIED && lt();
  }
  function ei(n) {
    for (const u of xe)
      typeof u.onErrorChange == "function" && u.onErrorChange(d(qe));
  }
  function _r(n) {
    d(A) === y.UNVERIFIED ? $e() : v() && m() === "focus" && d(A) === y.VERIFIED && Ot();
  }
  function mr(n) {
    p && r() === "onsubmit" ? d(A) === y.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), $e().then(() => {
      p == null || p.requestSubmit();
    })) : d(A) !== y.VERIFIED && (n.preventDefault(), n.stopPropagation(), d(A) === y.VERIFYING && wr()) : p && v() && r() === "off" && d(A) === y.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), Ot());
  }
  function pr() {
    at();
  }
  function wr() {
    d(A) === y.VERIFYING && d(Q).waitAlert && alert(d(Q).waitAlert);
  }
  function ti(n) {
    for (const u of xe)
      typeof u.onStateChange == "function" && u.onStateChange(d(A));
    v() && d(A) !== y.UNVERIFIED && requestAnimationFrame(() => {
      lt();
    }), L(Ue, d(A) === y.VERIFIED);
  }
  function br() {
    v() && lt();
  }
  function yr(n) {
    return JSON.parse(n);
  }
  async function ri(n) {
    if (!Ee())
      throw new Error("Attribute verifyurl not set.");
    S("requesting server verification from", Ee());
    const u = { payload: n };
    if (V() !== !1) {
      const {
        blockedCountries: N,
        classifier: x,
        disableRules: b,
        email: $,
        expectedLanguages: he,
        expectedCountries: Vt,
        fields: st,
        ipAddress: ft,
        text: gi,
        timeZone: Mr
      } = Jn();
      u.blockedCountries = N, u.classifier = x, u.disableRules = b, u.email = $ === !1 ? void 0 : Gn($), u.expectedCountries = Vt, u.expectedLanguages = he || (sr ? [sr] : void 0), u.fields = st === !1 ? void 0 : Kn(st), u.ipAddress = ft === !1 ? void 0 : ft || "auto", u.text = gi, u.timeZone = Mr === !1 ? void 0 : Mr || Bl();
    }
    const _ = await vr()(Ee(), {
      body: JSON.stringify(u),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (!_ || !(_ instanceof Response))
      throw new Error("Fetch function did not return a response.");
    if (_.status !== 200)
      throw new Error(`Server responded with ${_.status}.`);
    const E = await _.json();
    if (E != null && E.payload && L(De, le(E.payload)), rt("serververification", E), l() && E.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  function zt(n) {
    S("expire", n), se && (clearTimeout(se), se = null), n < 1 ? dr() : se = setTimeout(dr, n);
  }
  function Er(n) {
    S("floating", n), v() !== n && (d(U).style.left = "", d(U).style.top = ""), v(n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : v()), v() ? (r() || r("onsubmit"), document.addEventListener("scroll", gr), document.addEventListener("click", hr), window.addEventListener("resize", br)) : r() === "onsubmit" && r(void 0);
  }
  function xr(n) {
    if (!n.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (n.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!lr.includes(n.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${lr.join(", ")}`);
    if (!n.challenge || n.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!n.salt || n.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function $r(n) {
    let u = null;
    if ("Worker" in window) {
      try {
        u = await ni(n, n.maxNumber || n.maxnumber || F());
      } catch (_) {
        S(_);
      }
      if ((u == null ? void 0 : u.number) !== void 0 || "obfuscated" in n)
        return { data: n, solution: u };
    }
    if ("obfuscated" in n) {
      const _ = await Wl(n.obfuscated, n.key, n.maxNumber || n.maxnumber);
      return { data: n, solution: await _.promise };
    }
    return {
      data: n,
      solution: await ql(n.challenge, n.salt, n.algorithm, n.maxNumber || n.maxnumber || F()).promise
    };
  }
  async function ni(n, u = typeof X() == "number" ? X() : n.maxNumber || n.maxnumber || F(), _ = Math.ceil(Ve())) {
    const E = [];
    _ = Math.min(16, u, Math.max(1, _));
    for (let b = 0; b < _; b++)
      E.push(altchaCreateWorker(tt()));
    const N = Math.ceil(u / _), x = await Promise.all(E.map((b, $) => {
      const he = $ * N;
      return new Promise((Vt) => {
        b.addEventListener("message", (st) => {
          if (st.data)
            for (const ft of E)
              ft !== b && ft.postMessage({ type: "abort" });
          Vt(st.data);
        }), b.postMessage({
          payload: n,
          max: he + N,
          start: he,
          type: "work"
        });
      });
    }));
    for (const b of E)
      b.terminate();
    return x.find((b) => !!b) || null;
  }
  async function it() {
    if (!H()) {
      Le(y.ERROR);
      return;
    }
    const n = xe.find((u) => u.constructor.pluginName === "obfuscation");
    if (!n || !("clarify" in n)) {
      Le(y.ERROR), S("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in n && typeof n.clarify == "function")
      return n.clarify();
  }
  function kr(n) {
    n.obfuscated !== void 0 && H(n.obfuscated), n.auto !== void 0 && (r(n.auto), r() === "onload" && (H() ? it() : $e())), n.blockspam !== void 0 && l(!!n.blockspam), n.customfetch !== void 0 && o(n.customfetch), n.floatinganchor !== void 0 && h(n.floatinganchor), n.delay !== void 0 && s(n.delay), n.floatingoffset !== void 0 && g(n.floatingoffset), n.floating !== void 0 && Er(n.floating), n.expire !== void 0 && (zt(n.expire), c(n.expire)), n.challenge && (a(typeof n.challenge == "string" ? n.challenge : JSON.stringify(n.challenge)), xr(d(Pt))), n.challengeurl !== void 0 && i(n.challengeurl), n.debug !== void 0 && f(!!n.debug), n.hidefooter !== void 0 && w(!!n.hidefooter), n.hidelogo !== void 0 && T(!!n.hidelogo), n.maxnumber !== void 0 && F(+n.maxnumber), n.mockerror !== void 0 && M(!!n.mockerror), n.name !== void 0 && B(n.name), n.refetchonexpire !== void 0 && O(!!n.refetchonexpire), n.spamfilter !== void 0 && V(typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && ve(typeof n.strings == "string" ? n.strings : JSON.stringify(n.strings)), n.test !== void 0 && X(typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && Ee(n.verifyurl), n.workers !== void 0 && Ve(+n.workers), n.workerurl !== void 0 && tt(n.workerurl);
  }
  function Cr() {
    return {
      auto: r(),
      blockspam: l(),
      challengeurl: i(),
      debug: f(),
      delay: s(),
      expire: c(),
      floating: v(),
      floatinganchor: h(),
      floatingoffset: g(),
      hidefooter: w(),
      hidelogo: T(),
      name: B(),
      maxnumber: F(),
      mockerror: M(),
      obfuscated: H(),
      refetchonexpire: O(),
      spamfilter: V(),
      strings: d(Q),
      test: X(),
      verifyurl: Ee(),
      workers: Ve(),
      workerurl: tt()
    };
  }
  function Ar() {
    return je;
  }
  function ii(n) {
    return xe.find((u) => u.constructor.pluginName === n);
  }
  function Ir() {
    return d(A);
  }
  function Rr() {
    d(U).style.display = "none";
  }
  function lt(n = 20) {
    if (d(U))
      if (je || (je = (h() ? document.querySelector(h()) : p == null ? void 0 : p.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || p), je) {
        const u = parseInt(g(), 10) || 12, _ = je.getBoundingClientRect(), E = d(U).getBoundingClientRect(), N = document.documentElement.clientHeight, x = document.documentElement.clientWidth, b = v() === "auto" ? _.bottom + E.height + u + n > N : v() === "top", $ = Math.max(n, Math.min(x - n - E.width, _.left + _.width / 2 - E.width / 2));
        if (b ? d(U).style.top = `${_.top - (E.height + u)}px` : d(U).style.top = `${_.bottom + u}px`, d(U).style.left = `${$}px`, d(U).setAttribute("data-floating", b ? "top" : "bottom"), d(nt)) {
          const he = d(nt).getBoundingClientRect();
          d(nt).style.left = _.left - $ + _.width / 2 - he.width / 2 + "px";
        }
      } else
        S("unable to find floating anchor element");
  }
  function at(n = y.UNVERIFIED, u = null) {
    se && (clearTimeout(se), se = null), L(Ue, !1), L(De, null), Le(n, u);
  }
  function Sr(n) {
    je = n;
  }
  function Le(n, u = null) {
    L(A, le(n)), L(qe, le(u)), rt("statechange", {
      payload: d(De),
      state: d(A)
    });
  }
  function Ot() {
    d(U).style.display = "block", v() && lt();
  }
  async function $e() {
    return at(y.VERIFYING), await new Promise((n) => setTimeout(n, s() || 0)), Zn().then((n) => (xr(n), S("challenge", n), $r(n))).then(({ data: n, solution: u }) => {
      if (S("solution", u), !u || n && "challenge" in n && !("clearText" in u))
        if ((u == null ? void 0 : u.number) !== void 0 && "challenge" in n) {
          if (Ee())
            return ri(cr(n, u));
          L(De, le(cr(n, u))), S("payload", d(De));
        } else
          throw S("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      Le(y.VERIFIED), S("verified"), sl().then(() => {
        rt("verified", { payload: d(De) });
      });
    }).catch((n) => {
      S(n), Le(y.ERROR, n.message);
    });
  }
  var Nr = ia(), Tr = Yr(Nr);
  Cl(Tr, t, "default", {});
  var ot = ge(Tr, 2), Ft = G(ot), Dr = G(Ft);
  {
    var li = (n) => {
      var u = Zl();
      ee(n, u);
    };
    ke(Dr, (n) => {
      d(A) === y.VERIFYING && n(li);
    });
  }
  var _t = ge(Dr, 2);
  let Lr;
  var Be = G(_t);
  Xr(Be), Be.__change = Qn, Z(_t);
  var Mt = ge(_t, 2), ai = G(Mt);
  {
    var oi = (n) => {
      var u = Gl(), _ = Yr(u), E = G(_);
      Ze(E, () => d(Q).verified), Z(_);
      var N = ge(_, 2);
      Xr(N), Ye(() => {
        ie(N, "name", B()), Tl(N, d(De));
      }), ee(n, u);
    }, si = (n, u) => {
      {
        var _ = (N) => {
          var x = Jl(), b = G(x);
          Ze(b, () => d(Q).verifying), Z(x), ee(N, x);
        }, E = (N) => {
          var x = Kl(), b = G(x);
          Ze(b, () => d(Q).label), Z(x), Ye(() => ie(x, "for", d(ur))), ee(N, x);
        };
        ke(
          n,
          (N) => {
            d(A) === y.VERIFYING ? N(_) : N(E, !1);
          },
          u
        );
      }
    };
    ke(ai, (n) => {
      d(A) === y.VERIFIED ? n(oi) : n(si, !1);
    });
  }
  Z(Mt);
  var fi = ge(Mt, 2);
  {
    var ui = (n) => {
      var u = Xl(), _ = G(u);
      ie(_, "href", or), Z(u), Ye(() => ie(_, "aria-label", d(Q).ariaLinkLabel)), ee(n, u);
    };
    ke(fi, (n) => {
      (T() !== !0 || d(Lt)) && n(ui);
    });
  }
  Z(Ft);
  var Pr = ge(Ft, 2);
  {
    var ci = (n) => {
      var u = ta(), _ = ge(G(u), 2);
      {
        var E = (x) => {
          var b = Ql(), $ = G(b);
          Ze($, () => d(Q).expired), Z(b), Ye(() => ie(b, "title", d(qe))), ee(x, b);
        }, N = (x) => {
          var b = ea(), $ = G(b);
          Ze($, () => d(Q).error), Z(b), Ye(() => ie(b, "title", d(qe))), ee(x, b);
        };
        ke(_, (x) => {
          d(A) === y.EXPIRED ? x(E) : x(N, !1);
        });
      }
      Z(u), ee(n, u);
    };
    ke(Pr, (n) => {
      (d(qe) || d(A) === y.EXPIRED) && n(ci);
    });
  }
  var zr = ge(Pr, 2);
  {
    var di = (n) => {
      var u = ra(), _ = G(u), E = G(_);
      Ze(E, () => d(Q).footer), Z(_), Z(u), ee(n, u);
    };
    ke(zr, (n) => {
      d(Q).footer && (w() !== !0 || d(Lt)) && n(di);
    });
  }
  var vi = ge(zr, 2);
  {
    var hi = (n) => {
      var u = na();
      tn(u, (_) => L(nt, _), () => d(nt)), ee(n, u);
    };
    ke(vi, (n) => {
      v() && n(hi);
    });
  }
  return Z(ot), tn(ot, (n) => L(U, n), () => d(U)), Ye(
    (n) => {
      ie(ot, "data-state", d(A)), ie(ot, "data-floating", v()), Lr = Rl(_t, 1, "altcha-checkbox svelte-ddsc3z", null, Lr, n), ie(Be, "id", d(ur)), Be.required = r() !== "onsubmit" && (!v() || r() !== "off");
    },
    [
      () => ({
        "altcha-hidden": d(A) === y.VERIFYING
      })
    ]
  ), yl("invalid", Be, wr), Ll(Be, () => d(Ue), (n) => L(Ue, n)), ee(e, Nr), Pn({
    clarify: it,
    configure: kr,
    getConfiguration: Cr,
    getFloatingAnchor: Ar,
    getPlugin: ii,
    getState: Ir,
    hide: Rr,
    repositionFloating: lt,
    reset: at,
    setFloatingAnchor: Sr,
    setState: Le,
    show: Ot,
    verify: $e,
    get auto() {
      return r();
    },
    set auto(n = void 0) {
      r(n), k();
    },
    get blockspam() {
      return l();
    },
    set blockspam(n = void 0) {
      l(n), k();
    },
    get challengeurl() {
      return i();
    },
    set challengeurl(n = void 0) {
      i(n), k();
    },
    get challengejson() {
      return a();
    },
    set challengejson(n = void 0) {
      a(n), k();
    },
    get customfetch() {
      return o();
    },
    set customfetch(n = void 0) {
      o(n), k();
    },
    get debug() {
      return f();
    },
    set debug(n = !1) {
      f(n), k();
    },
    get delay() {
      return s();
    },
    set delay(n = 0) {
      s(n), k();
    },
    get expire() {
      return c();
    },
    set expire(n = void 0) {
      c(n), k();
    },
    get floating() {
      return v();
    },
    set floating(n = void 0) {
      v(n), k();
    },
    get floatinganchor() {
      return h();
    },
    set floatinganchor(n = void 0) {
      h(n), k();
    },
    get floatingoffset() {
      return g();
    },
    set floatingoffset(n = void 0) {
      g(n), k();
    },
    get floatingpersist() {
      return m();
    },
    set floatingpersist(n = !1) {
      m(n), k();
    },
    get hidefooter() {
      return w();
    },
    set hidefooter(n = !1) {
      w(n), k();
    },
    get hidelogo() {
      return T();
    },
    set hidelogo(n = !1) {
      T(n), k();
    },
    get id() {
      return z();
    },
    set id(n = void 0) {
      z(n), k();
    },
    get name() {
      return B();
    },
    set name(n = "altcha") {
      B(n), k();
    },
    get maxnumber() {
      return F();
    },
    set maxnumber(n = 1e6) {
      F(n), k();
    },
    get mockerror() {
      return M();
    },
    set mockerror(n = !1) {
      M(n), k();
    },
    get obfuscated() {
      return H();
    },
    set obfuscated(n = void 0) {
      H(n), k();
    },
    get plugins() {
      return Te();
    },
    set plugins(n = void 0) {
      Te(n), k();
    },
    get refetchonexpire() {
      return O();
    },
    set refetchonexpire(n = !0) {
      O(n), k();
    },
    get spamfilter() {
      return V();
    },
    set spamfilter(n = !1) {
      V(n), k();
    },
    get strings() {
      return ve();
    },
    set strings(n = void 0) {
      ve(n), k();
    },
    get test() {
      return X();
    },
    set test(n = !1) {
      X(n), k();
    },
    get verifyurl() {
      return Ee();
    },
    set verifyurl(n = void 0) {
      Ee(n), k();
    },
    get workers() {
      return Ve();
    },
    set workers(n = Math.min(16, navigator.hardwareConcurrency || 8)) {
      Ve(n), k();
    },
    get workerurl() {
      return tt();
    },
    set workerurl(n = void 0) {
      tt(n), k();
    }
  });
}
El(["change"]);
customElements.define("altcha-widget", Vl(
  aa,
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
    name: {},
    obfuscated: {},
    plugins: {},
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
  aa as Altcha
};
