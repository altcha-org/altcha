var di = Object.defineProperty;
var zr = (e) => {
  throw TypeError(e);
};
var vi = (e, t, r) => t in e ? di(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ne = (e, t, r) => vi(e, typeof t != "symbol" ? t + "" : t, r), Or = (e, t, r) => t.has(e) || zr("Cannot " + r);
var H = (e, t, r) => (Or(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Mt = (e, t, r) => t.has(e) ? zr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), Vt = (e, t, r, l) => (Or(e, t, "write to private field"), l ? l.call(e, r) : t.set(e, r), r);
const hi = "5";
var Xr;
typeof window < "u" && ((Xr = window.__svelte ?? (window.__svelte = {})).v ?? (Xr.v = /* @__PURE__ */ new Set())).add(hi);
const gi = 1, _i = 4, mi = 8, pi = 16, wi = 1, bi = 2, Yt = "[", Qr = "[!", en = "]", Je = {}, Y = Symbol(), yi = "http://www.w3.org/1999/xhtml", Fr = !1, oe = 2, tn = 4, It = 8, Wt = 16, we = 32, Oe = 64, bt = 128, re = 256, yt = 512, K = 1024, be = 2048, et = 4096, Ke = 8192, St = 16384, Ei = 32768, Zt = 65536, $i = 1 << 19, rn = 1 << 20, ut = Symbol("$state"), nn = Symbol("legacy props"), xi = Symbol("");
var ln = Array.isArray, ki = Array.prototype.indexOf, Ci = Array.from, Et = Object.keys, $t = Object.defineProperty, Pe = Object.getOwnPropertyDescriptor, Ai = Object.getOwnPropertyDescriptors, Ri = Object.prototype, Ii = Array.prototype, an = Object.getPrototypeOf;
function on(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const Si = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let dt = [], vt = [];
function sn() {
  var e = dt;
  dt = [], on(e);
}
function fn() {
  var e = vt;
  vt = [], on(e);
}
function Gt(e) {
  dt.length === 0 && queueMicrotask(sn), dt.push(e);
}
function Ti(e) {
  vt.length === 0 && Si(fn), vt.push(e);
}
function Mr() {
  dt.length > 0 && sn(), vt.length > 0 && fn();
}
function un(e) {
  return e === this.v;
}
function Ni(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function cn(e) {
  return !Ni(e, this.v);
}
function Li(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Di() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Pi(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function zi() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Oi() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Fi(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Mi() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Vi() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ui() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function ji() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let qi = !1;
function ue(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: un,
    rv: 0,
    wv: 0
  };
  return r;
}
function He(e) {
  return /* @__PURE__ */ Bi(ue(e));
}
// @__NO_SIDE_EFFECTS__
function dn(e, t = !1) {
  const r = ue(e);
  return t || (r.equals = cn), r;
}
// @__NO_SIDE_EFFECTS__
function Bi(e) {
  return k !== null && !ae && (k.f & oe) !== 0 && (ce === null ? Ji([e]) : ce.push(e)), e;
}
function P(e, t) {
  return k !== null && !ae && Nn() && (k.f & (oe | Wt)) !== 0 && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (ce === null || !ce.includes(e)) && ji(), Hi(e, t);
}
function Hi(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = bn(), vn(e, be), A !== null && (A.f & K) !== 0 && (A.f & (we | Oe)) === 0 && (ge === null ? Ki([e]) : ge.push(e))), t;
}
function vn(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var l = r.length, i = 0; i < l; i++) {
      var a = r[i], o = a.f;
      (o & be) === 0 && (de(a, t), (o & (K | re)) !== 0 && ((o & oe) !== 0 ? vn(
        /** @type {Derived} */
        a,
        et
      ) : Lt(
        /** @type {Effect} */
        a
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function De(e) {
  var t = oe | be, r = k !== null && (k.f & oe) !== 0 ? (
    /** @type {Derived} */
    k
  ) : null;
  return A === null || r !== null && (r.f & re) !== 0 ? t |= re : A.f |= rn, {
    ctx: q,
    deps: null,
    effects: null,
    equals: un,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: r ?? A
  };
}
function hn(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      pe(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Yi(e) {
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
function Wi(e) {
  var t, r = A;
  Se(Yi(e));
  try {
    hn(e), t = En(e);
  } finally {
    Se(r);
  }
  return t;
}
function gn(e) {
  var t = Wi(e), r = (Ce || (e.f & re) !== 0) && e.deps !== null ? et : K;
  de(e, r), e.equals(t) || (e.v = t, e.wv = bn());
}
function Tt(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let D = !1;
function Ge(e) {
  D = e;
}
let z;
function Re(e) {
  if (e === null)
    throw Tt(), Je;
  return z = e;
}
function Xe() {
  return Re(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Te(z)
  );
}
function Z(e) {
  if (D) {
    if (/* @__PURE__ */ Te(z) !== null)
      throw Tt(), Je;
    z = e;
  }
}
function Zi() {
  for (var e = 0, t = z; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === en) {
        if (e === 0) return t;
        e -= 1;
      } else (r === Yt || r === Qr) && (e += 1);
    }
    var l = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Te(t)
    );
    t.remove(), t = l;
  }
}
function le(e, t = null, r) {
  if (typeof e != "object" || e === null || ut in e)
    return e;
  const l = an(e);
  if (l !== Ri && l !== Ii)
    return e;
  var i = /* @__PURE__ */ new Map(), a = ln(e), o = ue(0);
  a && i.set("length", ue(
    /** @type {any[]} */
    e.length
  ));
  var f;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, c, v) {
        (!("value" in v) || v.configurable === !1 || v.enumerable === !1 || v.writable === !1) && Mi();
        var h = i.get(c);
        return h === void 0 ? (h = ue(v.value), i.set(c, h)) : P(h, le(v.value, f)), !0;
      },
      deleteProperty(s, c) {
        var v = i.get(c);
        if (v === void 0)
          c in s && i.set(c, ue(Y));
        else {
          if (a && typeof c == "string") {
            var h = (
              /** @type {Source<number>} */
              i.get("length")
            ), g = Number(c);
            Number.isInteger(g) && g < h.v && P(h, g);
          }
          P(v, Y), Vr(o);
        }
        return !0;
      },
      get(s, c, v) {
        var p;
        if (c === ut)
          return e;
        var h = i.get(c), g = c in s;
        if (h === void 0 && (!g || (p = Pe(s, c)) != null && p.writable) && (h = ue(le(g ? s[c] : Y, f)), i.set(c, h)), h !== void 0) {
          var m = d(h);
          return m === Y ? void 0 : m;
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
          if (g !== void 0 && m !== Y)
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
        if (c === ut)
          return !0;
        var v = i.get(c), h = v !== void 0 && v.v !== Y || Reflect.has(s, c);
        if (v !== void 0 || A !== null && (!h || (m = Pe(s, c)) != null && m.writable)) {
          v === void 0 && (v = ue(h ? le(s[c], f) : Y), i.set(c, v));
          var g = d(v);
          if (g === Y)
            return !1;
        }
        return h;
      },
      set(s, c, v, h) {
        var F;
        var g = i.get(c), m = c in s;
        if (a && c === "length")
          for (var p = v; p < /** @type {Source<number>} */
          g.v; p += 1) {
            var O = i.get(p + "");
            O !== void 0 ? P(O, Y) : p in s && (O = ue(Y), i.set(p + "", O));
          }
        g === void 0 ? (!m || (F = Pe(s, c)) != null && F.writable) && (g = ue(void 0), P(g, le(v, f)), i.set(c, g)) : (m = g.v !== Y, P(g, le(v, f)));
        var T = Reflect.getOwnPropertyDescriptor(s, c);
        if (T != null && T.set && T.set.call(h, v), !m) {
          if (a && typeof c == "string") {
            var W = (
              /** @type {Source<number>} */
              i.get("length")
            ), M = Number(c);
            Number.isInteger(M) && M >= W.v && P(W, M + 1);
          }
          Vr(o);
        }
        return !0;
      },
      ownKeys(s) {
        d(o);
        var c = Reflect.ownKeys(s).filter((g) => {
          var m = i.get(g);
          return m === void 0 || m.v !== Y;
        });
        for (var [v, h] of i)
          h.v !== Y && !(v in s) && c.push(v);
        return c;
      },
      setPrototypeOf() {
        Vi();
      }
    }
  );
}
function Vr(e, t = 1) {
  P(e, e.v + t);
}
var Ur, _n, mn, pn;
function Ut() {
  if (Ur === void 0) {
    Ur = window, _n = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    mn = Pe(t, "firstChild").get, pn = Pe(t, "nextSibling").get, e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Jt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function me(e) {
  return mn.call(e);
}
// @__NO_SIDE_EFFECTS__
function Te(e) {
  return pn.call(e);
}
function G(e, t) {
  if (!D)
    return /* @__PURE__ */ me(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ me(z)
  );
  return r === null && (r = z.appendChild(Jt())), Re(r), r;
}
function jr(e, t) {
  if (!D) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ me(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Te(r) : r;
  }
  return z;
}
function he(e, t = 1, r = !1) {
  let l = D ? z : e;
  for (var i; t--; )
    i = l, l = /** @type {TemplateNode} */
    /* @__PURE__ */ Te(l);
  if (!D)
    return l;
  var a = l == null ? void 0 : l.nodeType;
  if (r && a !== 3) {
    var o = Jt();
    return l === null ? i == null || i.after(o) : l.before(o), Re(o), o;
  }
  return Re(l), /** @type {TemplateNode} */
  l;
}
function Gi(e) {
  e.textContent = "";
}
let pt = !1, xt = !1, kt = null, ze = !1, Kt = !1;
function qr(e) {
  Kt = e;
}
let ct = [];
let k = null, ae = !1;
function Ie(e) {
  k = e;
}
let A = null;
function Se(e) {
  A = e;
}
let ce = null;
function Ji(e) {
  ce = e;
}
let j = null, J = 0, ge = null;
function Ki(e) {
  ge = e;
}
let wn = 1, Ct = 0, Ce = !1;
function bn() {
  return ++wn;
}
function ht(e) {
  var h;
  var t = e.f;
  if ((t & be) !== 0)
    return !0;
  if ((t & et) !== 0) {
    var r = e.deps, l = (t & re) !== 0;
    if (r !== null) {
      var i, a, o = (t & yt) !== 0, f = l && A !== null && !Ce, s = r.length;
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
        if (a = r[i], ht(
          /** @type {Derived} */
          a
        ) && gn(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!l || A !== null && !Ce) && de(e, K);
  }
  return !1;
}
function Xi(e, t) {
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
function Qi(e) {
  return (e.f & St) === 0 && (e.parent === null || (e.parent.f & bt) === 0);
}
function Nt(e, t, r, l) {
  if (pt) {
    if (r === null && (pt = !1), Qi(t))
      throw e;
    return;
  }
  r !== null && (pt = !0);
  {
    Xi(e, t);
    return;
  }
}
function yn(e, t, r = !0) {
  var l = e.reactions;
  if (l !== null)
    for (var i = 0; i < l.length; i++) {
      var a = l[i];
      (a.f & oe) !== 0 ? yn(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (r ? de(a, be) : (a.f & K) !== 0 && de(a, et), Lt(
        /** @type {Effect} */
        a
      ));
    }
}
function En(e) {
  var m;
  var t = j, r = J, l = ge, i = k, a = Ce, o = ce, f = q, s = ae, c = e.f;
  j = /** @type {null | Value[]} */
  null, J = 0, ge = null, Ce = (c & re) !== 0 && (ae || !ze || k === null), k = (c & (we | Oe)) === 0 ? e : null, ce = null, Hr(e.ctx), ae = !1, Ct++;
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
    if (Nn() && ge !== null && !ae && h !== null && (e.f & (oe | et | be)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      ge.length; g++)
        yn(
          ge[g],
          /** @type {Effect} */
          e
        );
    return i !== null && Ct++, v;
  } finally {
    j = t, J = r, ge = l, k = i, Ce = a, ce = o, Hr(f), ae = s;
  }
}
function el(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var l = ki.call(r, e);
    if (l !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[l] = r[i], r.pop());
    }
  }
  r === null && (t.f & oe) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (j === null || !j.includes(t)) && (de(t, et), (t.f & (re | yt)) === 0 && (t.f ^= yt), hn(
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
      el(e, r[l]);
}
function Xt(e) {
  var t = e.f;
  if ((t & St) === 0) {
    de(e, K);
    var r = A, l = q, i = ze;
    A = e, ze = !0;
    try {
      (t & Wt) !== 0 ? cl(e) : kn(e), xn(e);
      var a = En(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = wn;
      var o = e.deps, f;
      Fr && qi && e.f & be;
    } catch (s) {
      Nt(s, e, r, l || e.ctx);
    } finally {
      ze = i, A = r;
    }
  }
}
function tl() {
  try {
    zi();
  } catch (e) {
    if (kt !== null)
      Nt(e, kt, null);
    else
      throw e;
  }
}
function $n() {
  var e = ze;
  try {
    var t = 0;
    for (ze = !0; ct.length > 0; ) {
      t++ > 1e3 && tl();
      var r = ct, l = r.length;
      ct = [];
      for (var i = 0; i < l; i++) {
        var a = nl(r[i]);
        rl(a);
      }
    }
  } finally {
    xt = !1, ze = e, kt = null;
  }
}
function rl(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var l = e[r];
      if ((l.f & (St | Ke)) === 0)
        try {
          ht(l) && (Xt(l), l.deps === null && l.first === null && l.nodes_start === null && (l.teardown === null ? Cn(l) : l.fn = null));
        } catch (i) {
          Nt(i, l, null, l.ctx);
        }
    }
}
function Lt(e) {
  xt || (xt = !0, queueMicrotask($n));
  for (var t = kt = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (Oe | we)) !== 0) {
      if ((r & K) === 0) return;
      t.f ^= K;
    }
  }
  ct.push(t);
}
function nl(e) {
  for (var t = [], r = e; r !== null; ) {
    var l = r.f, i = (l & (we | Oe)) !== 0, a = i && (l & K) !== 0;
    if (!a && (l & Ke) === 0) {
      if ((l & tn) !== 0)
        t.push(r);
      else if (i)
        r.f ^= K;
      else {
        var o = k;
        try {
          k = r, ht(r) && Xt(r);
        } catch (c) {
          Nt(c, r, null, r.ctx);
        } finally {
          k = o;
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
function x(e) {
  var t;
  for (Mr(); ct.length > 0; )
    xt = !0, $n(), Mr();
  return (
    /** @type {T} */
    t
  );
}
async function il() {
  await Promise.resolve(), x();
}
function d(e) {
  var t = e.f, r = (t & oe) !== 0;
  if (k !== null && !ae) {
    ce !== null && ce.includes(e) && Ui();
    var l = k.deps;
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
  e, ht(i) && gn(i)), e.v;
}
function Qe(e) {
  var t = ae;
  try {
    return ae = !0, e();
  } finally {
    ae = t;
  }
}
const ll = -7169;
function de(e, t) {
  e.f = e.f & ll | t;
}
function al(e) {
  A === null && k === null && Pi(), k !== null && (k.f & re) !== 0 && A === null && Di(), Kt && Li();
}
function ol(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Fe(e, t, r, l = !0) {
  var i = A, a = {
    ctx: q,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | be,
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
      Xt(a), a.f |= Ei;
    } catch (s) {
      throw pe(a), s;
    }
  else t !== null && Lt(a);
  var o = r && a.deps === null && a.first === null && a.nodes_start === null && a.teardown === null && (a.f & (rn | bt)) === 0;
  if (!o && l && (i !== null && ol(a, i), k !== null && (k.f & oe) !== 0)) {
    var f = (
      /** @type {Derived} */
      k
    );
    (f.effects ?? (f.effects = [])).push(a);
  }
  return a;
}
function sl(e) {
  const t = Fe(It, null, !1);
  return de(t, K), t.teardown = e, t;
}
function jt(e) {
  al();
  var t = A !== null && (A.f & we) !== 0 && q !== null && !q.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      q
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: A,
      reaction: k
    });
  } else {
    var l = Qt(e);
    return l;
  }
}
function fl(e) {
  const t = Fe(Oe, e, !0);
  return () => {
    pe(t);
  };
}
function ul(e) {
  const t = Fe(Oe, e, !0);
  return (r = {}) => new Promise((l) => {
    r.outro ? qt(t, () => {
      pe(t), l(void 0);
    }) : (pe(t), l(void 0));
  });
}
function Qt(e) {
  return Fe(tn, e, !1);
}
function er(e) {
  return Fe(It, e, !0);
}
function Ye(e, t = [], r = De) {
  const l = t.map(r);
  return tr(() => e(...l.map(d)));
}
function tr(e, t = 0) {
  return Fe(It | Wt | t, e, !0);
}
function Rt(e, t = !0) {
  return Fe(It | we, e, !0, t);
}
function xn(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Kt, l = k;
    qr(!0), Ie(null);
    try {
      t.call(null);
    } finally {
      qr(r), Ie(l);
    }
  }
}
function kn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var l = r.next;
    (r.f & Oe) !== 0 ? r.parent = null : pe(r, t), r = l;
  }
}
function cl(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & we) === 0 && pe(t), t = r;
  }
}
function pe(e, t = !0) {
  var r = !1;
  if ((t || (e.f & $i) !== 0) && e.nodes_start !== null) {
    for (var l = e.nodes_start, i = e.nodes_end; l !== null; ) {
      var a = l === i ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Te(l)
      );
      l.remove(), l = a;
    }
    r = !0;
  }
  kn(e, t && !r), At(e, 0), de(e, St);
  var o = e.transitions;
  if (o !== null)
    for (const s of o)
      s.stop();
  xn(e);
  var f = e.parent;
  f !== null && f.first !== null && Cn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function Cn(e) {
  var t = e.parent, r = e.prev, l = e.next;
  r !== null && (r.next = l), l !== null && (l.prev = r), t !== null && (t.first === e && (t.first = l), t.last === e && (t.last = r));
}
function qt(e, t) {
  var r = [];
  An(e, r, !0), dl(r, () => {
    pe(e), t && t();
  });
}
function dl(e, t) {
  var r = e.length;
  if (r > 0) {
    var l = () => --r || t();
    for (var i of e)
      i.out(l);
  } else
    t();
}
function An(e, t, r) {
  if ((e.f & Ke) === 0) {
    if (e.f ^= Ke, e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || r) && t.push(o);
    for (var l = e.first; l !== null; ) {
      var i = l.next, a = (l.f & Zt) !== 0 || (l.f & we) !== 0;
      An(l, t, a ? r : !1), l = i;
    }
  }
}
function Br(e) {
  Rn(e, !0);
}
function Rn(e, t) {
  if ((e.f & Ke) !== 0) {
    e.f ^= Ke, (e.f & K) === 0 && (e.f ^= K), ht(e) && (de(e, be), Lt(e));
    for (var r = e.first; r !== null; ) {
      var l = r.next, i = (r.f & Zt) !== 0 || (r.f & we) !== 0;
      Rn(r, i ? t : !1), r = l;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
function In(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let q = null;
function Hr(e) {
  q = e;
}
function Sn(e, t = !1, r) {
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
function Tn(e) {
  const t = q;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const o = t.e;
    if (o !== null) {
      var r = A, l = k;
      t.e = null;
      try {
        for (var i = 0; i < o.length; i++) {
          var a = o[i];
          Se(a.effect), Ie(a.reaction), Qt(a.fn);
        }
      } finally {
        Se(r), Ie(l);
      }
    }
    q = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Nn() {
  return !0;
}
const vl = ["touchstart", "touchmove"];
function hl(e) {
  return vl.includes(e);
}
let Yr = !1;
function Ln() {
  Yr || (Yr = !0, document.addEventListener(
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
function Dn(e) {
  var t = k, r = A;
  Ie(null), Se(null);
  try {
    return e();
  } finally {
    Ie(t), Se(r);
  }
}
function gl(e, t, r, l = r) {
  e.addEventListener(t, () => Dn(r));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), l(!0);
  } : e.__on_r = () => l(!0), Ln();
}
const Pn = /* @__PURE__ */ new Set(), Bt = /* @__PURE__ */ new Set();
function _l(e, t, r, l = {}) {
  function i(a) {
    if (l.capture || ft.call(t, a), !a.cancelBubble)
      return Dn(() => r == null ? void 0 : r.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Gt(() => {
    t.addEventListener(e, i, l);
  }) : t.addEventListener(e, i, l), i;
}
function ml(e, t, r, l, i) {
  var a = { capture: l, passive: i }, o = _l(e, t, r, a);
  (t === document.body || t === window || t === document) && sl(() => {
    t.removeEventListener(e, o, a);
  });
}
function pl(e) {
  for (var t = 0; t < e.length; t++)
    Pn.add(e[t]);
  for (var r of Bt)
    r(e);
}
function ft(e) {
  var M;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), l = e.type, i = ((M = e.composedPath) == null ? void 0 : M.call(e)) || [], a = (
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
    $t(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var v = k, h = A;
    Ie(null), Se(null);
    try {
      for (var g, m = []; a !== null; ) {
        var p = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var O = a["__" + l];
          if (O != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (ln(O)) {
              var [T, ...W] = O;
              T.apply(a, [e, ...W]);
            } else
              O.call(a, e);
        } catch (F) {
          g ? m.push(F) : g = F;
        }
        if (e.cancelBubble || p === t || p === null)
          break;
        a = p;
      }
      if (g) {
        for (let F of m)
          queueMicrotask(() => {
            throw F;
          });
        throw g;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Ie(v), Se(h);
    }
  }
}
function rr(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Ae(e, t) {
  var r = (
    /** @type {Effect} */
    A
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ve(e, t) {
  var r = (t & wi) !== 0, l = (t & bi) !== 0, i, a = !e.startsWith("<!>");
  return () => {
    if (D)
      return Ae(z, null), z;
    i === void 0 && (i = rr(a ? e : "<!>" + e), r || (i = /** @type {Node} */
    /* @__PURE__ */ me(i)));
    var o = (
      /** @type {TemplateNode} */
      l || _n ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ me(o)
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
function wl(e, t, r = "svg") {
  var l = !e.startsWith("<!>"), i = `<${r}>${l ? e : "<!>" + e}</${r}>`, a;
  return () => {
    if (D)
      return Ae(z, null), z;
    if (!a) {
      var o = (
        /** @type {DocumentFragment} */
        rr(i)
      ), f = (
        /** @type {Element} */
        /* @__PURE__ */ me(o)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ me(f);
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
    A.nodes_end = z, Xe();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function zn(e, t) {
  return On(e, t);
}
function bl(e, t) {
  Ut(), t.intro = t.intro ?? !1;
  const r = t.target, l = D, i = z;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ me(r)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== Yt); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ Te(a);
    if (!a)
      throw Je;
    Ge(!0), Re(
      /** @type {Comment} */
      a
    ), Xe();
    const o = On(e, { ...t, anchor: a });
    if (z === null || z.nodeType !== 8 || /** @type {Comment} */
    z.data !== en)
      throw Tt(), Je;
    return Ge(!1), /**  @type {Exports} */
    o;
  } catch (o) {
    if (o === Je)
      return t.recover === !1 && Oi(), Ut(), Gi(r), Ge(!1), zn(e, t);
    throw o;
  } finally {
    Ge(l), Re(i);
  }
}
const We = /* @__PURE__ */ new Map();
function On(e, { target: t, anchor: r, props: l = {}, events: i, context: a, intro: o = !0 }) {
  Ut();
  var f = /* @__PURE__ */ new Set(), s = (h) => {
    for (var g = 0; g < h.length; g++) {
      var m = h[g];
      if (!f.has(m)) {
        f.add(m);
        var p = hl(m);
        t.addEventListener(m, ft, { passive: p });
        var O = We.get(m);
        O === void 0 ? (document.addEventListener(m, ft, { passive: p }), We.set(m, 1)) : We.set(m, O + 1);
      }
    }
  };
  s(Ci(Pn)), Bt.add(s);
  var c = void 0, v = ul(() => {
    var h = r ?? t.appendChild(Jt());
    return Rt(() => {
      if (a) {
        Sn({});
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
      ), c = e(h, l) || {}, D && (A.nodes_end = z), a && Tn();
    }), () => {
      var p;
      for (var g of f) {
        t.removeEventListener(g, ft);
        var m = (
          /** @type {number} */
          We.get(g)
        );
        --m === 0 ? (document.removeEventListener(g, ft), We.delete(g)) : We.set(g, m);
      }
      Bt.delete(s), h !== r && ((p = h.parentNode) == null || p.removeChild(h));
    };
  });
  return Ht.set(c, v), c;
}
let Ht = /* @__PURE__ */ new WeakMap();
function yl(e, t) {
  const r = Ht.get(e);
  return r ? (Ht.delete(e), r(t)) : Promise.resolve();
}
function ke(e, t, [r, l] = [0, 0]) {
  D && r === 0 && Xe();
  var i = e, a = null, o = null, f = Y, s = r > 0 ? Zt : 0, c = !1;
  const v = (g, m = !0) => {
    c = !0, h(m, g);
  }, h = (g, m) => {
    if (f === (f = g)) return;
    let p = !1;
    if (D && l !== -1) {
      if (r === 0) {
        const T = (
          /** @type {Comment} */
          i.data
        );
        T === Yt ? l = 0 : T === Qr ? l = 1 / 0 : (l = parseInt(T.substring(1)), l !== l && (l = f ? 1 / 0 : -1));
      }
      const O = l > r;
      !!f === O && (i = Zi(), Re(i), Ge(!1), p = !0, l = -1);
    }
    f ? (a ? Br(a) : m && (a = Rt(() => m(i))), o && qt(o, () => {
      o = null;
    })) : (o ? Br(o) : m && (o = Rt(() => m(i, [r + 1, l]))), a && qt(a, () => {
      a = null;
    })), p && Ge(!0);
  };
  tr(() => {
    c = !1, t(v), c || h(null, null);
  }, s), D && (i = z);
}
function Ze(e, t, r, l, i) {
  var a = e, o = "", f;
  tr(() => {
    if (o === (o = t() ?? "")) {
      D && Xe();
      return;
    }
    f !== void 0 && (pe(f), f = void 0), o !== "" && (f = Rt(() => {
      if (D) {
        z.data;
        for (var s = Xe(), c = s; s !== null && (s.nodeType !== 8 || /** @type {Comment} */
        s.data !== ""); )
          c = s, s = /** @type {TemplateNode} */
          /* @__PURE__ */ Te(s);
        if (s === null)
          throw Tt(), Je;
        Ae(z, c), a = Re(s);
        return;
      }
      var v = o + "", h = rr(v);
      Ae(
        /** @type {TemplateNode} */
        /* @__PURE__ */ me(h),
        /** @type {TemplateNode} */
        h.lastChild
      ), a.before(h);
    }));
  });
}
function El(e, t, r, l, i) {
  var f;
  D && Xe();
  var a = (f = t.$$slots) == null ? void 0 : f[r], o = !1;
  a === !0 && (a = t.children, o = !0), a === void 0 || a(e, o ? () => l : l);
}
function $l(e, t) {
  Gt(() => {
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
const Wr = [...` 	
\r\f \v\uFEFF`];
function xl(e, t, r) {
  var l = "" + e;
  if (r) {
    for (var i in r)
      if (r[i])
        l = l ? l + " " + i : i;
      else if (l.length)
        for (var a = i.length, o = 0; (o = l.indexOf(i, o)) >= 0; ) {
          var f = o + a;
          (o === 0 || Wr.includes(l[o - 1])) && (f === l.length || Wr.includes(l[f])) ? l = (o === 0 ? "" : l.substring(0, o)) + l.substring(f + 1) : o = f;
        }
  }
  return l === "" ? null : l;
}
function kl(e, t, r, l, i, a) {
  var o = e.__className;
  if (D || o !== r) {
    var f = xl(r, l, a);
    (!D || f !== e.getAttribute("class")) && (f == null ? e.removeAttribute("class") : e.className = f), e.__className = r;
  } else if (a && i !== a)
    for (var s in a) {
      var c = !!a[s];
      (i == null || c !== !!i[s]) && e.classList.toggle(s, c);
    }
  return a;
}
const Cl = Symbol("is custom element"), Al = Symbol("is html");
function Zr(e) {
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
    e.__on_r = r, Ti(r), Ln();
  }
}
function Rl(e, t) {
  var r = Fn(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function ie(e, t, r, l) {
  var i = Fn(e);
  D && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || i[t] !== (i[t] = r) && (t === "loading" && (e[xi] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Il(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Fn(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Cl]: e.nodeName.includes("-"),
      [Al]: e.namespaceURI === yi
    })
  );
}
var Gr = /* @__PURE__ */ new Map();
function Il(e) {
  var t = Gr.get(e.nodeName);
  if (t) return t;
  Gr.set(e.nodeName, t = []);
  for (var r, l = e, i = Element.prototype; i !== l; ) {
    r = Ai(l);
    for (var a in r)
      r[a].set && t.push(a);
    l = an(l);
  }
  return t;
}
function Sl(e, t, r = t) {
  gl(e, "change", (l) => {
    var i = l ? e.defaultChecked : e.checked;
    r(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (D && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  Qe(t) == null) && r(e.checked), er(() => {
    var l = t();
    e.checked = !!l;
  });
}
function Jr(e, t) {
  return e === t || (e == null ? void 0 : e[ut]) === t;
}
function Kr(e = {}, t, r, l) {
  return Qt(() => {
    var i, a;
    return er(() => {
      i = a, a = [], Qe(() => {
        e !== r(...a) && (t(e, ...a), i && Jr(r(...i), e) && t(null, ...i));
      });
    }), () => {
      Gt(() => {
        a && Jr(r(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function Mn(e) {
  q === null && In(), jt(() => {
    const t = Qe(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Tl(e) {
  q === null && In(), Mn(() => () => Qe(e));
}
let mt = !1;
function Nl(e) {
  var t = mt;
  try {
    return mt = !1, [e(), mt];
  } finally {
    mt = t;
  }
}
function C(e, t, r, l) {
  var ye;
  var i = (r & gi) !== 0, a = !0, o = (r & mi) !== 0, f = (r & pi) !== 0, s = !1, c;
  o ? [c, s] = Nl(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var v = ut in e || nn in e, h = o && (((ye = Pe(e, t)) == null ? void 0 : ye.set) ?? (v && t in e && ((N) => e[t] = N))) || void 0, g = (
    /** @type {V} */
    l
  ), m = !0, p = !1, O = () => (p = !0, m && (m = !1, f ? g = Qe(
    /** @type {() => V} */
    l
  ) : g = /** @type {V} */
  l), g);
  c === void 0 && l !== void 0 && (h && a && Fi(), c = O(), h && h(c));
  var T;
  if (T = () => {
    var N = (
      /** @type {V} */
      e[t]
    );
    return N === void 0 ? O() : (m = !0, p = !1, N);
  }, (r & _i) === 0)
    return T;
  if (h) {
    var W = e.$$legacy;
    return function(N, X) {
      return arguments.length > 0 ? ((!X || W || s) && h(X ? T() : N), N) : T();
    };
  }
  var M = !1, F = /* @__PURE__ */ dn(c), se = /* @__PURE__ */ De(() => {
    var N = T(), X = d(F);
    return M ? (M = !1, X) : F.v = N;
  });
  return i || (se.equals = cn), function(N, X) {
    if (arguments.length > 0) {
      const V = X ? d(se) : o ? le(N) : N;
      return se.equals(V) || (M = !0, P(F, V), p && g !== void 0 && (g = V), Qe(() => d(se))), N;
    }
    return d(se);
  };
}
function Ll(e) {
  return new Dl(e);
}
var _e, te;
class Dl {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    Mt(this, _e);
    /** @type {Record<string, any>} */
    Mt(this, te);
    var a;
    var r = /* @__PURE__ */ new Map(), l = (o, f) => {
      var s = /* @__PURE__ */ dn(f);
      return r.set(o, s), s;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(o, f) {
          return d(r.get(f) ?? l(f, Reflect.get(o, f)));
        },
        has(o, f) {
          return f === nn ? !0 : (d(r.get(f) ?? l(f, Reflect.get(o, f))), Reflect.has(o, f));
        },
        set(o, f, s) {
          return P(r.get(f) ?? l(f, s), s), Reflect.set(o, f, s);
        }
      }
    );
    Vt(this, te, (t.hydrate ? bl : zn)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((a = t == null ? void 0 : t.props) != null && a.$$host) || t.sync === !1) && x(), Vt(this, _e, i.$$events);
    for (const o of Object.keys(H(this, te)))
      o === "$set" || o === "$destroy" || o === "$on" || $t(this, o, {
        get() {
          return H(this, te)[o];
        },
        /** @param {any} value */
        set(f) {
          H(this, te)[o] = f;
        },
        enumerable: !0
      });
    H(this, te).$set = /** @param {Record<string, any>} next */
    (o) => {
      Object.assign(i, o);
    }, H(this, te).$destroy = () => {
      yl(H(this, te));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    H(this, te).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    H(this, _e)[t] = H(this, _e)[t] || [];
    const l = (...i) => r.call(this, ...i);
    return H(this, _e)[t].push(l), () => {
      H(this, _e)[t] = H(this, _e)[t].filter(
        /** @param {any} fn */
        (i) => i !== l
      );
    };
  }
  $destroy() {
    H(this, te).$destroy();
  }
}
_e = new WeakMap(), te = new WeakMap();
let Vn;
typeof HTMLElement == "function" && (Vn = class extends HTMLElement {
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
      const r = {}, l = Pl(this);
      for (const i of this.$$s)
        i in l && (i === "default" && !this.$$d.children ? (this.$$d.children = t(i), r.default = !0) : r[i] = t(i));
      for (const i of this.attributes) {
        const a = this.$$g_p(i.name);
        a in this.$$d || (this.$$d[a] = wt(a, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = Ll({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = fl(() => {
        er(() => {
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
function Pl(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function zl(e, t, r, l, i, a) {
  let o = class extends Vn {
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
    $t(o.prototype, f, {
      get() {
        return this.$$c && f in this.$$c ? this.$$c[f] : this.$$d[f];
      },
      set(s) {
        var h;
        s = wt(f, s, t), this.$$d[f] = s;
        var c = this.$$c;
        if (c) {
          var v = (h = Pe(c, f)) == null ? void 0 : h.get;
          v ? c[f] = s : c.$set({ [f]: s });
        }
      }
    });
  }), l.forEach((f) => {
    $t(o.prototype, f, {
      get() {
        var s;
        return (s = this.$$c) == null ? void 0 : s[f];
      }
    });
  }), e.element = /** @type {any} */
  o, o;
}
const Un = new TextEncoder();
function Ol(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function Fl(e, t = "SHA-256", r = 1e5) {
  const l = Date.now().toString(16);
  e || (e = Math.round(Math.random() * r));
  const i = await jn(l, e, t);
  return {
    algorithm: t,
    challenge: i,
    salt: l,
    signature: ""
  };
}
async function jn(e, t, r) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return Ol(
    await crypto.subtle.digest(
      r.toUpperCase(),
      Un.encode(e + t)
    )
  );
}
function Ml(e, t, r = "SHA-256", l = 1e6, i = 0) {
  const a = new AbortController(), o = Date.now();
  return {
    promise: (async () => {
      for (let s = i; s <= l; s += 1) {
        if (a.signal.aborted)
          return null;
        if (await jn(t, s, r) === e)
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
function Vl() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function Ul(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let l = 0; l < t.length; l++)
    r[l] = t.charCodeAt(l);
  return r;
}
function jl(e, t = 12) {
  const r = new Uint8Array(t);
  for (let l = 0; l < t; l++)
    r[l] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function ql(e, t = "", r = 1e6, l = 0) {
  const i = "AES-GCM", a = new AbortController(), o = Date.now(), f = async () => {
    for (let v = l; v <= r; v += 1) {
      if (a.signal.aborted || !s || !c)
        return null;
      try {
        const h = await crypto.subtle.decrypt(
          {
            name: i,
            iv: jl(v)
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
    c = Ul(e);
    const v = await crypto.subtle.digest(
      "SHA-256",
      Un.encode(t)
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
var E = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(E || {}), Bl = /* @__PURE__ */ wl('<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="svelte-ddsc3z"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25" class="svelte-ddsc3z"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor" class="altcha-spinner svelte-ddsc3z"></path></svg>'), Hl = /* @__PURE__ */ ve('<span role="status" aria-live="polite" class="svelte-ddsc3z"><!></span> <input type="hidden" class="svelte-ddsc3z">', 1), Yl = /* @__PURE__ */ ve('<span role="status" aria-live="polite" class="svelte-ddsc3z"><!></span>'), Wl = /* @__PURE__ */ ve('<label class="svelte-ddsc3z"><!></label>'), Zl = /* @__PURE__ */ ve('<div class="svelte-ddsc3z"><a target="_blank" class="altcha-logo svelte-ddsc3z"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-ddsc3z"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor" class="svelte-ddsc3z"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor" class="svelte-ddsc3z"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor" class="svelte-ddsc3z"></path></svg></a></div>'), Gl = /* @__PURE__ */ ve('<div class="svelte-ddsc3z"><!></div>'), Jl = /* @__PURE__ */ ve('<div class="svelte-ddsc3z"><!></div>'), Kl = /* @__PURE__ */ ve('<div class="altcha-error svelte-ddsc3z"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="svelte-ddsc3z"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" class="svelte-ddsc3z"></path></svg> <!></div>'), Xl = /* @__PURE__ */ ve('<div class="altcha-footer svelte-ddsc3z"><div class="svelte-ddsc3z"><!></div></div>'), Ql = /* @__PURE__ */ ve('<div class="altcha-anchor-arrow svelte-ddsc3z"></div>'), ea = /* @__PURE__ */ ve('<!> <div class="altcha svelte-ddsc3z"><div class="altcha-main svelte-ddsc3z"><!> <div><input type="checkbox" class="svelte-ddsc3z"></div> <div class="altcha-label svelte-ddsc3z"><!></div> <!></div> <!> <!> <!></div>', 1);
const ta = {
  hash: "svelte-ddsc3z",
  code: `.altcha.svelte-ddsc3z {background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);position:relative;text-align:left;}.altcha.svelte-ddsc3z:focus-within {border-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating].svelte-ddsc3z {background:var(--altcha-color-base, white);display:none;filter:drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2));left:-100%;position:fixed;top:-100%;width:var(--altcha-max-width, 260px);z-index:999999;}.altcha[data-floating=top].svelte-ddsc3z .altcha-anchor-arrow:where(.svelte-ddsc3z) {border-bottom-color:transparent;border-top-color:var(--altcha-color-border, #a0a0a0);bottom:-12px;top:auto;}.altcha[data-floating=bottom].svelte-ddsc3z:focus-within::after {border-bottom-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating=top].svelte-ddsc3z:focus-within::after {border-top-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating].svelte-ddsc3z:not([data-state=unverified]) {display:block;}.altcha-anchor-arrow.svelte-ddsc3z {border:6px solid transparent;border-bottom-color:var(--altcha-color-border, #a0a0a0);content:"";height:0;left:12px;position:absolute;top:-12px;width:0;}.altcha-main.svelte-ddsc3z {align-items:center;display:flex;gap:0.4rem;padding:0.7rem;}.altcha-label.svelte-ddsc3z {flex-grow:1;}.altcha-label.svelte-ddsc3z label:where(.svelte-ddsc3z) {cursor:pointer;}.altcha-logo.svelte-ddsc3z {color:currentColor;opacity:0.3;}.altcha-logo.svelte-ddsc3z:hover {opacity:1;}.altcha-error.svelte-ddsc3z {color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem;}.altcha-footer.svelte-ddsc3z {align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.4;padding:0.2rem 0.7rem;text-align:right;}.altcha-footer.svelte-ddsc3z:hover {opacity:1;}.altcha-footer.svelte-ddsc3z > :where(.svelte-ddsc3z):first-child {flex-grow:1;}.altcha-footer.svelte-ddsc3z a {color:currentColor;}.altcha-checkbox.svelte-ddsc3z {display:flex;align-items:center;height:24px;width:24px;}.altcha-checkbox.svelte-ddsc3z input:where(.svelte-ddsc3z) {width:18px;height:18px;margin:0;}.altcha-hidden.svelte-ddsc3z {display:none;}.altcha-spinner.svelte-ddsc3z {
  animation: svelte-ddsc3z-altcha-spinner 0.75s infinite linear;transform-origin:center;}

@keyframes svelte-ddsc3z-altcha-spinner {
  100% {
    transform: rotate(360deg);
  }
}`
};
function ra(e, t) {
  var Lr, Dr;
  Sn(t, !0), $l(e, ta);
  let r = C(t, "auto", 7, void 0), l = C(t, "blockspam", 7, void 0), i = C(t, "challengeurl", 7, void 0), a = C(t, "challengejson", 7, void 0), o = C(t, "customfetch", 7, void 0), f = C(t, "debug", 7, !1), s = C(t, "delay", 7, 0), c = C(t, "expire", 7, void 0), v = C(t, "floating", 7, void 0), h = C(t, "floatinganchor", 7, void 0), g = C(t, "floatingoffset", 7, void 0), m = C(t, "hidefooter", 7, !1), p = C(t, "hidelogo", 7, !1), O = C(t, "id", 7, void 0), T = C(t, "name", 7, "altcha"), W = C(t, "maxnumber", 7, 1e6), M = C(t, "mockerror", 7, !1), F = C(t, "obfuscated", 7, void 0), se = C(t, "plugins", 7, void 0), ye = C(t, "refetchonexpire", 7, !0), N = C(t, "spamfilter", 7, !1), X = C(t, "strings", 7, void 0), V = C(t, "test", 7, !1), Ee = C(t, "verifyurl", 7, void 0), Me = C(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), tt = C(t, "workerurl", 7, void 0);
  const nr = ["SHA-256", "SHA-384", "SHA-512"], ir = "Visit Altcha.org", lr = "https://altcha.org/", rt = (n, u) => {
    t.$$host.dispatchEvent(new CustomEvent(n, { detail: u }));
  }, ar = (Dr = (Lr = document.documentElement.lang) == null ? void 0 : Lr.split("-")) == null ? void 0 : Dr[0], Dt = /* @__PURE__ */ De(() => {
    var n;
    return i() && new URL(i(), location.origin).host.endsWith(".altcha.org") && !!((n = i()) != null && n.includes("apiKey=ckey_"));
  }), Pt = /* @__PURE__ */ De(() => a() ? pr(a()) : void 0), or = /* @__PURE__ */ De(() => X() ? pr(X()) : {}), Q = /* @__PURE__ */ De(() => {
    var n;
    return {
      ariaLinkLabel: ir,
      error: "Verification failed. Try again later.",
      expired: "Verification expired. Try again.",
      footer: `Protected by <a href="${lr}" target="_blank" aria-label="${((n = d(or)) == null ? void 0 : n.ariaLinkLabel) || ir}">ALTCHA</a>`,
      label: "I'm not a robot",
      verified: "Verified",
      verifying: "Verifying...",
      waitAlert: "Verifying... please wait.",
      ...d(or)
    };
  }), sr = /* @__PURE__ */ De(() => O() || `${T()}_checkbox`);
  let Ve = He(!1), R = He(le(E.UNVERIFIED)), U = He(void 0), nt = He(null), Ue = null, b = null, je = He(null), fe = null, $e = [], Ne = He(null);
  jt(() => {
    Jn(d(je));
  }), jt(() => {
    Kn(d(R));
  }), Tl(() => {
    qn(), b && (b.removeEventListener("submit", hr), b.removeEventListener("reset", gr), b.removeEventListener("focusin", vr), b = null), fe && (clearTimeout(fe), fe = null), document.removeEventListener("click", cr), document.removeEventListener("scroll", dr), window.removeEventListener("resize", mr);
  }), Mn(() => {
    var n;
    I("mounted", "1.3.0"), I("workers", Me()), Zn(), I("plugins", $e.length ? $e.map((u) => u.constructor.pluginName).join(", ") : "none"), V() && I("using test mode"), c() && zt(c()), r() !== void 0 && I("auto", r()), v() !== void 0 && wr(v()), b = (n = d(U)) == null ? void 0 : n.closest("form"), b && (b.addEventListener("submit", hr, { capture: !0 }), b.addEventListener("reset", gr), r() === "onfocus" && b.addEventListener("focusin", vr)), r() === "onload" && (F() ? it() : xe()), d(Dt) && (m() || p()) && I("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      rt("load");
    });
  });
  function fr(n, u) {
    return btoa(JSON.stringify({
      algorithm: n.algorithm,
      challenge: n.challenge,
      number: u.number,
      salt: n.salt,
      signature: n.signature,
      test: V() ? !0 : void 0,
      took: u.took
    }));
  }
  function qn() {
    for (const n of $e)
      n.destroy();
  }
  function ur() {
    i() && ye() && d(R) === E.VERIFIED ? xe() : lt(E.EXPIRED, d(Q).expired);
  }
  async function Bn() {
    var n;
    if (M())
      throw I("mocking error"), new Error("Mocked error.");
    if (d(Pt))
      return I("using provided json data"), d(Pt);
    if (V())
      return I("generating test challenge", { test: V() }), Fl(typeof V() != "boolean" ? +V() : void 0);
    {
      if (!i() && b) {
        const L = b.getAttribute("action");
        L != null && L.includes("/form/") && i(L + "/altcha");
      }
      if (!i())
        throw new Error("Attribute challengeurl not set.");
      I("fetching challenge from", i());
      let u = null, _ = null;
      if (o())
        if (I("using customfetch"), typeof o() == "string") {
          if (u = globalThis[o()] || null, !u)
            throw new Error(`Custom fetch function not found: ${o()}`);
        } else
          u = o();
      const y = {
        headers: N() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      };
      if (u) {
        if (_ = await u(i(), y), !_ || !(_ instanceof Response))
          throw new Error("Custom fetch function did not return a response.");
      } else
        _ = await fetch(i(), y);
      if (_.status !== 200)
        throw new Error(`Server responded with ${_.status}.`);
      const S = _.headers.get("X-Altcha-Config"), $ = await _.json(), w = new URLSearchParams((n = $.salt.split("?")) == null ? void 0 : n[1]), B = w.get("expires") || w.get("expire");
      if (B) {
        const L = new Date(+B * 1e3), Be = isNaN(L.getTime()) ? 0 : L.getTime() - Date.now();
        Be > 0 && zt(Be);
      }
      if (S)
        try {
          const L = JSON.parse(S);
          L && typeof L == "object" && (L.verifyurl && (L.verifyurl = new URL(L.verifyurl, new URL(i())).toString()), Er(L));
        } catch (L) {
          I("unable to configure from X-Altcha-Config", L);
        }
      return $;
    }
  }
  function Hn(n) {
    var _;
    const u = b == null ? void 0 : b.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((_ = u == null ? void 0 : u.value) == null ? void 0 : _.slice(u.value.indexOf("@"))) || void 0;
  }
  function Yn() {
    return N() === "ipAddress" ? {
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
    } : typeof N() == "object" ? N() : {
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
  function Wn(n) {
    return [
      ...(b == null ? void 0 : b.querySelectorAll(n != null && n.length ? n.map((_) => `input[name="${_}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (_, y) => {
        const S = y.name, $ = y.value;
        return S && $ && (_[S] = /\n/.test($) ? $.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : $), _;
      },
      {}
    );
  }
  function Zn() {
    const n = se() !== void 0 ? se().split(",") : void 0;
    for (const u of globalThis.altchaPlugins)
      (!n || n.includes(u.pluginName)) && $e.push(new u({
        el: d(U),
        clarify: it,
        dispatch: rt,
        getConfiguration: $r,
        getFloatingAnchor: xr,
        getState: kr,
        log: I,
        reset: lt,
        solve: yr,
        setState: Le,
        setFloatingAnchor: Cr,
        verify: xe
      }));
  }
  function I(...n) {
    (f() || n.some((u) => u instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${T()}]`, ...n);
  }
  function Gn() {
    [E.UNVERIFIED, E.ERROR, E.EXPIRED].includes(d(R)) ? N() !== !1 && (b == null ? void 0 : b.reportValidity()) === !1 ? P(Ve, !1) : F() ? it() : xe() : P(Ve, !0);
  }
  function cr(n) {
    const u = n.target;
    v() && u && !d(U).contains(u) && (d(R) === E.VERIFIED || r() === "off" && d(R) === E.UNVERIFIED) && (d(U).style.display = "none");
  }
  function dr() {
    v() && d(R) !== E.UNVERIFIED && gt();
  }
  function Jn(n) {
    for (const u of $e)
      typeof u.onErrorChange == "function" && u.onErrorChange(d(je));
  }
  function vr(n) {
    d(R) === E.UNVERIFIED && xe();
  }
  function hr(n) {
    b && r() === "onsubmit" ? d(R) === E.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), xe().then(() => {
      b == null || b.requestSubmit();
    })) : d(R) !== E.VERIFIED && (n.preventDefault(), n.stopPropagation(), d(R) === E.VERIFYING && _r()) : b && v() && r() === "off" && d(R) === E.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), d(U).style.display = "block", gt());
  }
  function gr() {
    lt();
  }
  function _r() {
    d(R) === E.VERIFYING && d(Q).waitAlert && alert(d(Q).waitAlert);
  }
  function Kn(n) {
    for (const u of $e)
      typeof u.onStateChange == "function" && u.onStateChange(d(R));
    v() && d(R) !== E.UNVERIFIED && requestAnimationFrame(() => {
      gt();
    }), P(Ve, d(R) === E.VERIFIED);
  }
  function mr() {
    v() && gt();
  }
  function pr(n) {
    return JSON.parse(n);
  }
  function gt(n = 20) {
    if (d(U))
      if (Ue || (Ue = (h() ? document.querySelector(h()) : b == null ? void 0 : b.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || b), Ue) {
        const u = parseInt(g(), 10) || 12, _ = Ue.getBoundingClientRect(), y = d(U).getBoundingClientRect(), S = document.documentElement.clientHeight, $ = document.documentElement.clientWidth, w = v() === "auto" ? _.bottom + y.height + u + n > S : v() === "top", B = Math.max(n, Math.min($ - n - y.width, _.left + _.width / 2 - y.width / 2));
        if (w ? d(U).style.top = `${_.top - (y.height + u)}px` : d(U).style.top = `${_.bottom + u}px`, d(U).style.left = `${B}px`, d(U).setAttribute("data-floating", w ? "top" : "bottom"), d(nt)) {
          const L = d(nt).getBoundingClientRect();
          d(nt).style.left = _.left - B + _.width / 2 - L.width / 2 + "px";
        }
      } else
        I("unable to find floating anchor element");
  }
  async function Xn(n) {
    if (!Ee())
      throw new Error("Attribute verifyurl not set.");
    I("requesting server verification from", Ee());
    const u = { payload: n };
    if (N() !== !1) {
      const {
        blockedCountries: S,
        classifier: $,
        disableRules: w,
        email: B,
        expectedLanguages: L,
        expectedCountries: Be,
        fields: ot,
        ipAddress: st,
        text: ci,
        timeZone: Pr
      } = Yn();
      u.blockedCountries = S, u.classifier = $, u.disableRules = w, u.email = B === !1 ? void 0 : Hn(B), u.expectedCountries = Be, u.expectedLanguages = L || (ar ? [ar] : void 0), u.fields = ot === !1 ? void 0 : Wn(ot), u.ipAddress = st === !1 ? void 0 : st || "auto", u.text = ci, u.timeZone = Pr === !1 ? void 0 : Pr || Vl();
    }
    const _ = await fetch(Ee(), {
      body: JSON.stringify(u),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (_.status !== 200)
      throw new Error(`Server responded with ${_.status}.`);
    const y = await _.json();
    if (y != null && y.payload && P(Ne, le(y.payload)), rt("serververification", y), l() && y.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  function zt(n) {
    I("expire", n), fe && (clearTimeout(fe), fe = null), n < 1 ? ur() : fe = setTimeout(ur, n);
  }
  function wr(n) {
    I("floating", n), v() !== n && (d(U).style.left = "", d(U).style.top = ""), v(n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : v()), v() ? (r() || r("onsubmit"), document.addEventListener("scroll", dr), document.addEventListener("click", cr), window.addEventListener("resize", mr)) : r() === "onsubmit" && r(void 0);
  }
  function br(n) {
    if (!n.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (n.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!nr.includes(n.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${nr.join(", ")}`);
    if (!n.challenge || n.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!n.salt || n.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function yr(n) {
    let u = null;
    if ("Worker" in window) {
      try {
        u = await Qn(n, n.maxnumber);
      } catch (_) {
        I(_);
      }
      if ((u == null ? void 0 : u.number) !== void 0 || "obfuscated" in n)
        return { data: n, solution: u };
    }
    if ("obfuscated" in n) {
      const _ = await ql(n.obfuscated, n.key, n.maxnumber);
      return { data: n, solution: await _.promise };
    }
    return {
      data: n,
      solution: await Ml(n.challenge, n.salt, n.algorithm, n.maxnumber || W()).promise
    };
  }
  async function Qn(n, u = typeof V() == "number" ? V() : W(), _ = Math.ceil(Me())) {
    const y = [];
    _ = Math.min(16, Math.max(1, _));
    for (let w = 0; w < _; w++)
      y.push(altchaCreateWorker(tt()));
    const S = Math.ceil(u / _), $ = await Promise.all(y.map((w, B) => {
      const L = B * S;
      return new Promise((Be) => {
        w.addEventListener("message", (ot) => {
          if (ot.data)
            for (const st of y)
              st !== w && st.postMessage({ type: "abort" });
          Be(ot.data);
        }), w.postMessage({
          payload: n,
          max: L + S,
          start: L,
          type: "work"
        });
      });
    }));
    for (const w of y)
      w.terminate();
    return $.find((w) => !!w) || null;
  }
  async function it() {
    if (!F()) {
      Le(E.ERROR);
      return;
    }
    const n = $e.find((u) => u.constructor.pluginName === "obfuscation");
    if (!n || !("clarify" in n)) {
      Le(E.ERROR), I("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in n && typeof n.clarify == "function")
      return n.clarify();
  }
  function Er(n) {
    n.obfuscated !== void 0 && F(n.obfuscated), n.auto !== void 0 && (r(n.auto), r() === "onload" && (F() ? it() : xe())), n.blockspam !== void 0 && l(!!n.blockspam), n.customfetch !== void 0 && o(n.customfetch), n.floatinganchor !== void 0 && h(n.floatinganchor), n.delay !== void 0 && s(n.delay), n.floatingoffset !== void 0 && g(n.floatingoffset), n.floating !== void 0 && wr(n.floating), n.expire !== void 0 && (zt(n.expire), c(n.expire)), n.challenge && (a(typeof n.challenge == "string" ? n.challenge : JSON.stringify(n.challenge)), br(d(Pt))), n.challengeurl !== void 0 && i(n.challengeurl), n.debug !== void 0 && f(!!n.debug), n.hidefooter !== void 0 && m(!!n.hidefooter), n.hidelogo !== void 0 && p(!!n.hidelogo), n.maxnumber !== void 0 && W(+n.maxnumber), n.mockerror !== void 0 && M(!!n.mockerror), n.name !== void 0 && T(n.name), n.refetchonexpire !== void 0 && ye(!!n.refetchonexpire), n.spamfilter !== void 0 && N(typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && X(typeof n.strings == "string" ? n.strings : JSON.stringify(n.strings)), n.test !== void 0 && V(typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && Ee(n.verifyurl), n.workers !== void 0 && Me(+n.workers), n.workerurl !== void 0 && tt(n.workerurl);
  }
  function $r() {
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
      hidefooter: m(),
      hidelogo: p(),
      name: T(),
      maxnumber: W(),
      mockerror: M(),
      obfuscated: F(),
      refetchonexpire: ye(),
      spamfilter: N(),
      strings: d(Q),
      test: V(),
      verifyurl: Ee(),
      workers: Me(),
      workerurl: tt()
    };
  }
  function xr() {
    return Ue;
  }
  function ei(n) {
    return $e.find((u) => u.constructor.pluginName === n);
  }
  function kr() {
    return d(R);
  }
  function lt(n = E.UNVERIFIED, u = null) {
    fe && (clearTimeout(fe), fe = null), P(Ve, !1), P(Ne, null), Le(n, u);
  }
  function Cr(n) {
    Ue = n;
  }
  function Le(n, u = null) {
    P(R, le(n)), P(je, le(u)), rt("statechange", {
      payload: d(Ne),
      state: d(R)
    });
  }
  async function xe() {
    return lt(E.VERIFYING), await new Promise((n) => setTimeout(n, s() || 0)), Bn().then((n) => (br(n), I("challenge", n), yr(n))).then(({ data: n, solution: u }) => {
      if (I("solution", u), "challenge" in n && u && !("clearText" in u))
        if ((u == null ? void 0 : u.number) !== void 0) {
          if (Ee())
            return Xn(fr(n, u));
          P(Ne, le(fr(n, u))), I("payload", d(Ne));
        } else
          throw I("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      Le(E.VERIFIED), I("verified"), il().then(() => {
        rt("verified", { payload: d(Ne) });
      });
    }).catch((n) => {
      I(n), Le(E.ERROR, n.message);
    });
  }
  var Ar = ea(), Rr = jr(Ar);
  El(Rr, t, "default", {});
  var at = he(Rr, 2), Ot = G(at), Ir = G(Ot);
  {
    var ti = (n) => {
      var u = Bl();
      ee(n, u);
    };
    ke(Ir, (n) => {
      d(R) === E.VERIFYING && n(ti);
    });
  }
  var _t = he(Ir, 2);
  let Sr;
  var qe = G(_t);
  Zr(qe), qe.__change = Gn, Z(_t);
  var Ft = he(_t, 2), ri = G(Ft);
  {
    var ni = (n) => {
      var u = Hl(), _ = jr(u), y = G(_);
      Ze(y, () => d(Q).verified), Z(_);
      var S = he(_, 2);
      Zr(S), Ye(() => {
        ie(S, "name", T()), Rl(S, d(Ne));
      }), ee(n, u);
    }, ii = (n, u) => {
      {
        var _ = (S) => {
          var $ = Yl(), w = G($);
          Ze(w, () => d(Q).verifying), Z($), ee(S, $);
        }, y = (S) => {
          var $ = Wl(), w = G($);
          Ze(w, () => d(Q).label), Z($), Ye(() => ie($, "for", d(sr))), ee(S, $);
        };
        ke(
          n,
          (S) => {
            d(R) === E.VERIFYING ? S(_) : S(y, !1);
          },
          u
        );
      }
    };
    ke(ri, (n) => {
      d(R) === E.VERIFIED ? n(ni) : n(ii, !1);
    });
  }
  Z(Ft);
  var li = he(Ft, 2);
  {
    var ai = (n) => {
      var u = Zl(), _ = G(u);
      ie(_, "href", lr), Z(u), Ye(() => ie(_, "aria-label", d(Q).ariaLinkLabel)), ee(n, u);
    };
    ke(li, (n) => {
      (p() !== !0 || d(Dt)) && n(ai);
    });
  }
  Z(Ot);
  var Tr = he(Ot, 2);
  {
    var oi = (n) => {
      var u = Kl(), _ = he(G(u), 2);
      {
        var y = ($) => {
          var w = Gl(), B = G(w);
          Ze(B, () => d(Q).expired), Z(w), Ye(() => ie(w, "title", d(je))), ee($, w);
        }, S = ($) => {
          var w = Jl(), B = G(w);
          Ze(B, () => d(Q).error), Z(w), Ye(() => ie(w, "title", d(je))), ee($, w);
        };
        ke(_, ($) => {
          d(R) === E.EXPIRED ? $(y) : $(S, !1);
        });
      }
      Z(u), ee(n, u);
    };
    ke(Tr, (n) => {
      (d(je) || d(R) === E.EXPIRED) && n(oi);
    });
  }
  var Nr = he(Tr, 2);
  {
    var si = (n) => {
      var u = Xl(), _ = G(u), y = G(_);
      Ze(y, () => d(Q).footer), Z(_), Z(u), ee(n, u);
    };
    ke(Nr, (n) => {
      d(Q).footer && (m() !== !0 || d(Dt)) && n(si);
    });
  }
  var fi = he(Nr, 2);
  {
    var ui = (n) => {
      var u = Ql();
      Kr(u, (_) => P(nt, _), () => d(nt)), ee(n, u);
    };
    ke(fi, (n) => {
      v() && n(ui);
    });
  }
  return Z(at), Kr(at, (n) => P(U, n), () => d(U)), Ye(
    (n) => {
      ie(at, "data-state", d(R)), ie(at, "data-floating", v()), Sr = kl(_t, 1, "altcha-checkbox svelte-ddsc3z", null, Sr, n), ie(qe, "id", d(sr)), qe.required = r() !== "onsubmit" && (!v() || r() !== "off");
    },
    [
      () => ({
        "altcha-hidden": d(R) === E.VERIFYING
      })
    ]
  ), ml("invalid", qe, _r), Sl(qe, () => d(Ve), (n) => P(Ve, n)), ee(e, Ar), Tn({
    clarify: it,
    configure: Er,
    getConfiguration: $r,
    getFloatingAnchor: xr,
    getPlugin: ei,
    getState: kr,
    reset: lt,
    setFloatingAnchor: Cr,
    setState: Le,
    verify: xe,
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
      return i();
    },
    set challengeurl(n = void 0) {
      i(n), x();
    },
    get challengejson() {
      return a();
    },
    set challengejson(n = void 0) {
      a(n), x();
    },
    get customfetch() {
      return o();
    },
    set customfetch(n = void 0) {
      o(n), x();
    },
    get debug() {
      return f();
    },
    set debug(n = !1) {
      f(n), x();
    },
    get delay() {
      return s();
    },
    set delay(n = 0) {
      s(n), x();
    },
    get expire() {
      return c();
    },
    set expire(n = void 0) {
      c(n), x();
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
    get hidefooter() {
      return m();
    },
    set hidefooter(n = !1) {
      m(n), x();
    },
    get hidelogo() {
      return p();
    },
    set hidelogo(n = !1) {
      p(n), x();
    },
    get id() {
      return O();
    },
    set id(n = void 0) {
      O(n), x();
    },
    get name() {
      return T();
    },
    set name(n = "altcha") {
      T(n), x();
    },
    get maxnumber() {
      return W();
    },
    set maxnumber(n = 1e6) {
      W(n), x();
    },
    get mockerror() {
      return M();
    },
    set mockerror(n = !1) {
      M(n), x();
    },
    get obfuscated() {
      return F();
    },
    set obfuscated(n = void 0) {
      F(n), x();
    },
    get plugins() {
      return se();
    },
    set plugins(n = void 0) {
      se(n), x();
    },
    get refetchonexpire() {
      return ye();
    },
    set refetchonexpire(n = !0) {
      ye(n), x();
    },
    get spamfilter() {
      return N();
    },
    set spamfilter(n = !1) {
      N(n), x();
    },
    get strings() {
      return X();
    },
    set strings(n = void 0) {
      X(n), x();
    },
    get test() {
      return V();
    },
    set test(n = !1) {
      V(n), x();
    },
    get verifyurl() {
      return Ee();
    },
    set verifyurl(n = void 0) {
      Ee(n), x();
    },
    get workers() {
      return Me();
    },
    set workers(n = Math.min(16, navigator.hardwareConcurrency || 8)) {
      Me(n), x();
    },
    get workerurl() {
      return tt();
    },
    set workerurl(n = void 0) {
      tt(n), x();
    }
  });
}
pl(["change"]);
customElements.define("altcha-widget", zl(
  ra,
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
    "reset",
    "setFloatingAnchor",
    "setState",
    "verify"
  ],
  !1
));
globalThis.altchaCreateWorker = (e) => new Worker(new URL(e || "./worker.js", import.meta.url));
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
export {
  ra as Altcha
};
