var gi = Object.defineProperty;
var Mr = (e) => {
  throw TypeError(e);
};
var _i = (e, t, r) => t in e ? gi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ie = (e, t, r) => _i(e, typeof t != "symbol" ? t + "" : t, r), Vr = (e, t, r) => t.has(e) || Mr("Cannot " + r);
var W = (e, t, r) => (Vr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Ut = (e, t, r) => t.has(e) ? Mr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), jt = (e, t, r, l) => (Vr(e, t, "write to private field"), l ? l.call(e, r) : t.set(e, r), r);
const mi = "5";
var tn;
typeof window < "u" && ((tn = window.__svelte ?? (window.__svelte = {})).v ?? (tn.v = /* @__PURE__ */ new Set())).add(mi);
const pi = 1, wi = 4, bi = 8, yi = 16, Ei = 1, xi = 2, Zt = "[", rn = "[!", nn = "]", Ke = {}, Z = Symbol(), $i = "http://www.w3.org/1999/xhtml", Ur = !1, se = 2, ln = 4, St = 8, Gt = 16, be = 32, Fe = 64, yt = 128, ne = 256, Et = 512, X = 1024, ye = 2048, tt = 4096, Xe = 8192, Nt = 16384, ki = 32768, Jt = 65536, Ci = 1 << 19, an = 1 << 20, dt = Symbol("$state"), on = Symbol("legacy props"), Ai = Symbol("");
var sn = Array.isArray, Ii = Array.prototype.indexOf, Ri = Array.from, xt = Object.keys, $t = Object.defineProperty, ze = Object.getOwnPropertyDescriptor, Si = Object.getOwnPropertyDescriptors, Ni = Object.prototype, Ti = Array.prototype, fn = Object.getPrototypeOf;
function un(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const Di = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let ht = [], gt = [];
function cn() {
  var e = ht;
  ht = [], un(e);
}
function dn() {
  var e = gt;
  gt = [], un(e);
}
function Kt(e) {
  ht.length === 0 && queueMicrotask(cn), ht.push(e);
}
function Li(e) {
  gt.length === 0 && Di(dn), gt.push(e);
}
function jr() {
  ht.length > 0 && cn(), gt.length > 0 && dn();
}
function vn(e) {
  return e === this.v;
}
function Pi(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function hn(e) {
  return !Pi(e, this.v);
}
function zi(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Oi() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Fi(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Mi() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Vi() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Ui(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function ji() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function qi() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Bi() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Hi() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Yi = !1;
function ue(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: vn,
    rv: 0,
    wv: 0
  };
  return r;
}
function Ye(e) {
  return /* @__PURE__ */ Wi(ue(e));
}
// @__NO_SIDE_EFFECTS__
function gn(e, t = !1) {
  const r = ue(e);
  return t || (r.equals = hn), r;
}
// @__NO_SIDE_EFFECTS__
function Wi(e) {
  return k !== null && !oe && (k.f & se) !== 0 && (ce === null ? Qi([e]) : ce.push(e)), e;
}
function L(e, t) {
  return k !== null && !oe && Pn() && (k.f & (se | Gt)) !== 0 && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (ce === null || !ce.includes(e)) && Hi(), Zi(e, t);
}
function Zi(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = xn(), _n(e, ye), I !== null && (I.f & X) !== 0 && (I.f & (be | Fe)) === 0 && (_e === null ? el([e]) : _e.push(e))), t;
}
function _n(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var l = r.length, i = 0; i < l; i++) {
      var a = r[i], o = a.f;
      (o & ye) === 0 && (de(a, t), (o & (X | ne)) !== 0 && ((o & se) !== 0 ? _n(
        /** @type {Derived} */
        a,
        tt
      ) : Lt(
        /** @type {Effect} */
        a
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Pe(e) {
  var t = se | ye, r = k !== null && (k.f & se) !== 0 ? (
    /** @type {Derived} */
    k
  ) : null;
  return I === null || r !== null && (r.f & ne) !== 0 ? t |= ne : I.f |= an, {
    ctx: q,
    deps: null,
    effects: null,
    equals: vn,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: r ?? I
  };
}
function mn(e) {
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
function Gi(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & se) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Ji(e) {
  var t, r = I;
  Se(Gi(e));
  try {
    mn(e), t = kn(e);
  } finally {
    Se(r);
  }
  return t;
}
function pn(e) {
  var t = Ji(e), r = (Ce || (e.f & ne) !== 0) && e.deps !== null ? tt : X;
  de(e, r), e.equals(t) || (e.v = t, e.wv = xn());
}
function Tt(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let D = !1;
function Je(e) {
  D = e;
}
let P;
function Ie(e) {
  if (e === null)
    throw Tt(), Ke;
  return P = e;
}
function Qe() {
  return Ie(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ne(P)
  );
}
function G(e) {
  if (D) {
    if (/* @__PURE__ */ Ne(P) !== null)
      throw Tt(), Ke;
    P = e;
  }
}
function Ki() {
  for (var e = 0, t = P; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === nn) {
        if (e === 0) return t;
        e -= 1;
      } else (r === Zt || r === rn) && (e += 1);
    }
    var l = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ne(t)
    );
    t.remove(), t = l;
  }
}
function ae(e, t = null, r) {
  if (typeof e != "object" || e === null || dt in e)
    return e;
  const l = fn(e);
  if (l !== Ni && l !== Ti)
    return e;
  var i = /* @__PURE__ */ new Map(), a = sn(e), o = ue(0);
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
        (!("value" in v) || v.configurable === !1 || v.enumerable === !1 || v.writable === !1) && ji();
        var h = i.get(c);
        return h === void 0 ? (h = ue(v.value), i.set(c, h)) : L(h, ae(v.value, f)), !0;
      },
      deleteProperty(s, c) {
        var v = i.get(c);
        if (v === void 0)
          c in s && i.set(c, ue(Z));
        else {
          if (a && typeof c == "string") {
            var h = (
              /** @type {Source<number>} */
              i.get("length")
            ), g = Number(c);
            Number.isInteger(g) && g < h.v && L(h, g);
          }
          L(v, Z), qr(o);
        }
        return !0;
      },
      get(s, c, v) {
        var w;
        if (c === dt)
          return e;
        var h = i.get(c), g = c in s;
        if (h === void 0 && (!g || (w = ze(s, c)) != null && w.writable) && (h = ue(ae(g ? s[c] : Z, f)), i.set(c, h)), h !== void 0) {
          var m = d(h);
          return m === Z ? void 0 : m;
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
          if (g !== void 0 && m !== Z)
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
        if (c === dt)
          return !0;
        var v = i.get(c), h = v !== void 0 && v.v !== Z || Reflect.has(s, c);
        if (v !== void 0 || I !== null && (!h || (m = ze(s, c)) != null && m.writable)) {
          v === void 0 && (v = ue(h ? ae(s[c], f) : Z), i.set(c, v));
          var g = d(v);
          if (g === Z)
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
            var N = i.get(w + "");
            N !== void 0 ? L(N, Z) : w in s && (N = ue(Z), i.set(w + "", N));
          }
        g === void 0 ? (!m || (M = ze(s, c)) != null && M.writable) && (g = ue(void 0), L(g, ae(v, f)), i.set(c, g)) : (m = g.v !== Z, L(g, ae(v, f)));
        var z = Reflect.getOwnPropertyDescriptor(s, c);
        if (z != null && z.set && z.set.call(h, v), !m) {
          if (a && typeof c == "string") {
            var B = (
              /** @type {Source<number>} */
              i.get("length")
            ), F = Number(c);
            Number.isInteger(F) && F >= B.v && L(B, F + 1);
          }
          qr(o);
        }
        return !0;
      },
      ownKeys(s) {
        d(o);
        var c = Reflect.ownKeys(s).filter((g) => {
          var m = i.get(g);
          return m === void 0 || m.v !== Z;
        });
        for (var [v, h] of i)
          h.v !== Z && !(v in s) && c.push(v);
        return c;
      },
      setPrototypeOf() {
        qi();
      }
    }
  );
}
function qr(e, t = 1) {
  L(e, e.v + t);
}
var Br, wn, bn, yn;
function qt() {
  if (Br === void 0) {
    Br = window, wn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    bn = ze(t, "firstChild").get, yn = ze(t, "nextSibling").get, e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Xt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function pe(e) {
  return bn.call(e);
}
// @__NO_SIDE_EFFECTS__
function Ne(e) {
  return yn.call(e);
}
function J(e, t) {
  if (!D)
    return /* @__PURE__ */ pe(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ pe(P)
  );
  return r === null && (r = P.appendChild(Xt())), Ie(r), r;
}
function Hr(e, t) {
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
function Xi(e) {
  e.textContent = "";
}
let wt = !1, kt = !1, Ct = null, Oe = !1, Qt = !1;
function Yr(e) {
  Qt = e;
}
let vt = [];
let k = null, oe = !1;
function Re(e) {
  k = e;
}
let I = null;
function Se(e) {
  I = e;
}
let ce = null;
function Qi(e) {
  ce = e;
}
let j = null, K = 0, _e = null;
function el(e) {
  _e = e;
}
let En = 1, At = 0, Ce = !1;
function xn() {
  return ++En;
}
function _t(e) {
  var h;
  var t = e.f;
  if ((t & ye) !== 0)
    return !0;
  if ((t & tt) !== 0) {
    var r = e.deps, l = (t & ne) !== 0;
    if (r !== null) {
      var i, a, o = (t & Et) !== 0, f = l && I !== null && !Ce, s = r.length;
      if (o || f) {
        var c = (
          /** @type {Derived} */
          e
        ), v = c.parent;
        for (i = 0; i < s; i++)
          a = r[i], (o || !((h = a == null ? void 0 : a.reactions) != null && h.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        o && (c.f ^= Et), f && v !== null && (v.f & ne) === 0 && (c.f ^= ne);
      }
      for (i = 0; i < s; i++)
        if (a = r[i], _t(
          /** @type {Derived} */
          a
        ) && pn(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!l || I !== null && !Ce) && de(e, X);
  }
  return !1;
}
function tl(e, t) {
  for (var r = t; r !== null; ) {
    if ((r.f & yt) !== 0)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= yt;
      }
    r = r.parent;
  }
  throw wt = !1, e;
}
function rl(e) {
  return (e.f & Nt) === 0 && (e.parent === null || (e.parent.f & yt) === 0);
}
function Dt(e, t, r, l) {
  if (wt) {
    if (r === null && (wt = !1), rl(t))
      throw e;
    return;
  }
  r !== null && (wt = !0);
  {
    tl(e, t);
    return;
  }
}
function $n(e, t, r = !0) {
  var l = e.reactions;
  if (l !== null)
    for (var i = 0; i < l.length; i++) {
      var a = l[i];
      (a.f & se) !== 0 ? $n(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (r ? de(a, ye) : (a.f & X) !== 0 && de(a, tt), Lt(
        /** @type {Effect} */
        a
      ));
    }
}
function kn(e) {
  var m;
  var t = j, r = K, l = _e, i = k, a = Ce, o = ce, f = q, s = oe, c = e.f;
  j = /** @type {null | Value[]} */
  null, K = 0, _e = null, Ce = (c & ne) !== 0 && (oe || !Oe || k === null), k = (c & (be | Fe)) === 0 ? e : null, ce = null, Zr(e.ctx), oe = !1, At++;
  try {
    var v = (
      /** @type {Function} */
      (0, e.fn)()
    ), h = e.deps;
    if (j !== null) {
      var g;
      if (It(e, K), h !== null && K > 0)
        for (h.length = K + j.length, g = 0; g < j.length; g++)
          h[K + g] = j[g];
      else
        e.deps = h = j;
      if (!Ce)
        for (g = K; g < h.length; g++)
          ((m = h[g]).reactions ?? (m.reactions = [])).push(e);
    } else h !== null && K < h.length && (It(e, K), h.length = K);
    if (Pn() && _e !== null && !oe && h !== null && (e.f & (se | tt | ye)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      _e.length; g++)
        $n(
          _e[g],
          /** @type {Effect} */
          e
        );
    return i !== null && At++, v;
  } finally {
    j = t, K = r, _e = l, k = i, Ce = a, ce = o, Zr(f), oe = s;
  }
}
function nl(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var l = Ii.call(r, e);
    if (l !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[l] = r[i], r.pop());
    }
  }
  r === null && (t.f & se) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (j === null || !j.includes(t)) && (de(t, tt), (t.f & (ne | Et)) === 0 && (t.f ^= Et), mn(
    /** @type {Derived} **/
    t
  ), It(
    /** @type {Derived} **/
    t,
    0
  ));
}
function It(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var l = t; l < r.length; l++)
      nl(e, r[l]);
}
function er(e) {
  var t = e.f;
  if ((t & Nt) === 0) {
    de(e, X);
    var r = I, l = q, i = Oe;
    I = e, Oe = !0;
    try {
      (t & Gt) !== 0 ? hl(e) : In(e), An(e);
      var a = kn(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = En;
      var o = e.deps, f;
      Ur && Yi && e.f & ye;
    } catch (s) {
      Dt(s, e, r, l || e.ctx);
    } finally {
      Oe = i, I = r;
    }
  }
}
function il() {
  try {
    Mi();
  } catch (e) {
    if (Ct !== null)
      Dt(e, Ct, null);
    else
      throw e;
  }
}
function Cn() {
  var e = Oe;
  try {
    var t = 0;
    for (Oe = !0; vt.length > 0; ) {
      t++ > 1e3 && il();
      var r = vt, l = r.length;
      vt = [];
      for (var i = 0; i < l; i++) {
        var a = al(r[i]);
        ll(a);
      }
    }
  } finally {
    kt = !1, Oe = e, Ct = null;
  }
}
function ll(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var l = e[r];
      if ((l.f & (Nt | Xe)) === 0)
        try {
          _t(l) && (er(l), l.deps === null && l.first === null && l.nodes_start === null && (l.teardown === null ? Rn(l) : l.fn = null));
        } catch (i) {
          Dt(i, l, null, l.ctx);
        }
    }
}
function Lt(e) {
  kt || (kt = !0, queueMicrotask(Cn));
  for (var t = Ct = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (Fe | be)) !== 0) {
      if ((r & X) === 0) return;
      t.f ^= X;
    }
  }
  vt.push(t);
}
function al(e) {
  for (var t = [], r = e; r !== null; ) {
    var l = r.f, i = (l & (be | Fe)) !== 0, a = i && (l & X) !== 0;
    if (!a && (l & Xe) === 0) {
      if ((l & ln) !== 0)
        t.push(r);
      else if (i)
        r.f ^= X;
      else {
        var o = k;
        try {
          k = r, _t(r) && er(r);
        } catch (c) {
          Dt(c, r, null, r.ctx);
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
function $(e) {
  var t;
  for (jr(); vt.length > 0; )
    kt = !0, Cn(), jr();
  return (
    /** @type {T} */
    t
  );
}
async function ol() {
  await Promise.resolve(), $();
}
function d(e) {
  var t = e.f, r = (t & se) !== 0;
  if (k !== null && !oe) {
    ce !== null && ce.includes(e) && Bi();
    var l = k.deps;
    e.rv < At && (e.rv = At, j === null && l !== null && l[K] === e ? K++ : j === null ? j = [e] : (!Ce || !j.includes(e)) && j.push(e));
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var i = (
      /** @type {Derived} */
      e
    ), a = i.parent;
    a !== null && (a.f & ne) === 0 && (i.f ^= ne);
  }
  return r && (i = /** @type {Derived} */
  e, _t(i) && pn(i)), e.v;
}
function et(e) {
  var t = oe;
  try {
    return oe = !0, e();
  } finally {
    oe = t;
  }
}
const sl = -7169;
function de(e, t) {
  e.f = e.f & sl | t;
}
function fl(e) {
  I === null && k === null && Fi(), k !== null && (k.f & ne) !== 0 && I === null && Oi(), Qt && zi();
}
function ul(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Me(e, t, r, l = !0) {
  var i = I, a = {
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
      er(a), a.f |= ki;
    } catch (s) {
      throw we(a), s;
    }
  else t !== null && Lt(a);
  var o = r && a.deps === null && a.first === null && a.nodes_start === null && a.teardown === null && (a.f & (an | yt)) === 0;
  if (!o && l && (i !== null && ul(a, i), k !== null && (k.f & se) !== 0)) {
    var f = (
      /** @type {Derived} */
      k
    );
    (f.effects ?? (f.effects = [])).push(a);
  }
  return a;
}
function cl(e) {
  const t = Me(St, null, !1);
  return de(t, X), t.teardown = e, t;
}
function Bt(e) {
  fl();
  var t = I !== null && (I.f & be) !== 0 && q !== null && !q.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      q
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: I,
      reaction: k
    });
  } else {
    var l = tr(e);
    return l;
  }
}
function dl(e) {
  const t = Me(Fe, e, !0);
  return () => {
    we(t);
  };
}
function vl(e) {
  const t = Me(Fe, e, !0);
  return (r = {}) => new Promise((l) => {
    r.outro ? Ht(t, () => {
      we(t), l(void 0);
    }) : (we(t), l(void 0));
  });
}
function tr(e) {
  return Me(ln, e, !1);
}
function rr(e) {
  return Me(St, e, !0);
}
function We(e, t = [], r = Pe) {
  const l = t.map(r);
  return nr(() => e(...l.map(d)));
}
function nr(e, t = 0) {
  return Me(St | Gt | t, e, !0);
}
function Rt(e, t = !0) {
  return Me(St | be, e, !0, t);
}
function An(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Qt, l = k;
    Yr(!0), Re(null);
    try {
      t.call(null);
    } finally {
      Yr(r), Re(l);
    }
  }
}
function In(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var l = r.next;
    (r.f & Fe) !== 0 ? r.parent = null : we(r, t), r = l;
  }
}
function hl(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & be) === 0 && we(t), t = r;
  }
}
function we(e, t = !0) {
  var r = !1;
  if ((t || (e.f & Ci) !== 0) && e.nodes_start !== null) {
    for (var l = e.nodes_start, i = e.nodes_end; l !== null; ) {
      var a = l === i ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ne(l)
      );
      l.remove(), l = a;
    }
    r = !0;
  }
  In(e, t && !r), It(e, 0), de(e, Nt);
  var o = e.transitions;
  if (o !== null)
    for (const s of o)
      s.stop();
  An(e);
  var f = e.parent;
  f !== null && f.first !== null && Rn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function Rn(e) {
  var t = e.parent, r = e.prev, l = e.next;
  r !== null && (r.next = l), l !== null && (l.prev = r), t !== null && (t.first === e && (t.first = l), t.last === e && (t.last = r));
}
function Ht(e, t) {
  var r = [];
  Sn(e, r, !0), gl(r, () => {
    we(e), t && t();
  });
}
function gl(e, t) {
  var r = e.length;
  if (r > 0) {
    var l = () => --r || t();
    for (var i of e)
      i.out(l);
  } else
    t();
}
function Sn(e, t, r) {
  if ((e.f & Xe) === 0) {
    if (e.f ^= Xe, e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || r) && t.push(o);
    for (var l = e.first; l !== null; ) {
      var i = l.next, a = (l.f & Jt) !== 0 || (l.f & be) !== 0;
      Sn(l, t, a ? r : !1), l = i;
    }
  }
}
function Wr(e) {
  Nn(e, !0);
}
function Nn(e, t) {
  if ((e.f & Xe) !== 0) {
    e.f ^= Xe, (e.f & X) === 0 && (e.f ^= X), _t(e) && (de(e, ye), Lt(e));
    for (var r = e.first; r !== null; ) {
      var l = r.next, i = (r.f & Jt) !== 0 || (r.f & be) !== 0;
      Nn(r, i ? t : !1), r = l;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
function Tn(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let q = null;
function Zr(e) {
  q = e;
}
function Dn(e, t = !1, r) {
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
function Ln(e) {
  const t = q;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const o = t.e;
    if (o !== null) {
      var r = I, l = k;
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
function Pn() {
  return !0;
}
const _l = ["touchstart", "touchmove"];
function ml(e) {
  return _l.includes(e);
}
let Gr = !1;
function zn() {
  Gr || (Gr = !0, document.addEventListener(
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
function On(e) {
  var t = k, r = I;
  Re(null), Se(null);
  try {
    return e();
  } finally {
    Re(t), Se(r);
  }
}
function pl(e, t, r, l = r) {
  e.addEventListener(t, () => On(r));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), l(!0);
  } : e.__on_r = () => l(!0), zn();
}
const Fn = /* @__PURE__ */ new Set(), Yt = /* @__PURE__ */ new Set();
function wl(e, t, r, l = {}) {
  function i(a) {
    if (l.capture || ct.call(t, a), !a.cancelBubble)
      return On(() => r == null ? void 0 : r.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Kt(() => {
    t.addEventListener(e, i, l);
  }) : t.addEventListener(e, i, l), i;
}
function bl(e, t, r, l, i) {
  var a = { capture: l, passive: i }, o = wl(e, t, r, a);
  (t === document.body || t === window || t === document) && cl(() => {
    t.removeEventListener(e, o, a);
  });
}
function yl(e) {
  for (var t = 0; t < e.length; t++)
    Fn.add(e[t]);
  for (var r of Yt)
    r(e);
}
function ct(e) {
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
    $t(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var v = k, h = I;
    Re(null), Se(null);
    try {
      for (var g, m = []; a !== null; ) {
        var w = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var N = a["__" + l];
          if (N != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (sn(N)) {
              var [z, ...B] = N;
              z.apply(a, [e, ...B]);
            } else
              N.call(a, e);
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
    I
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ve(e, t) {
  var r = (t & Ei) !== 0, l = (t & xi) !== 0, i, a = !e.startsWith("<!>");
  return () => {
    if (D)
      return Ae(P, null), P;
    i === void 0 && (i = ir(a ? e : "<!>" + e), r || (i = /** @type {Node} */
    /* @__PURE__ */ pe(i)));
    var o = (
      /** @type {TemplateNode} */
      l || wn ? document.importNode(i, !0) : i.cloneNode(!0)
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
function El(e, t, r = "svg") {
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
function te(e, t) {
  if (D) {
    I.nodes_end = P, Qe();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Mn(e, t) {
  return Vn(e, t);
}
function xl(e, t) {
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
      throw Ke;
    Je(!0), Ie(
      /** @type {Comment} */
      a
    ), Qe();
    const o = Vn(e, { ...t, anchor: a });
    if (P === null || P.nodeType !== 8 || /** @type {Comment} */
    P.data !== nn)
      throw Tt(), Ke;
    return Je(!1), /**  @type {Exports} */
    o;
  } catch (o) {
    if (o === Ke)
      return t.recover === !1 && Vi(), qt(), Xi(r), Je(!1), Mn(e, t);
    throw o;
  } finally {
    Je(l), Ie(i);
  }
}
const Ze = /* @__PURE__ */ new Map();
function Vn(e, { target: t, anchor: r, props: l = {}, events: i, context: a, intro: o = !0 }) {
  qt();
  var f = /* @__PURE__ */ new Set(), s = (h) => {
    for (var g = 0; g < h.length; g++) {
      var m = h[g];
      if (!f.has(m)) {
        f.add(m);
        var w = ml(m);
        t.addEventListener(m, ct, { passive: w });
        var N = Ze.get(m);
        N === void 0 ? (document.addEventListener(m, ct, { passive: w }), Ze.set(m, 1)) : Ze.set(m, N + 1);
      }
    }
  };
  s(Ri(Fn)), Yt.add(s);
  var c = void 0, v = vl(() => {
    var h = r ?? t.appendChild(Xt());
    return Rt(() => {
      if (a) {
        Dn({});
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
      ), c = e(h, l) || {}, D && (I.nodes_end = P), a && Ln();
    }), () => {
      var w;
      for (var g of f) {
        t.removeEventListener(g, ct);
        var m = (
          /** @type {number} */
          Ze.get(g)
        );
        --m === 0 ? (document.removeEventListener(g, ct), Ze.delete(g)) : Ze.set(g, m);
      }
      Yt.delete(s), h !== r && ((w = h.parentNode) == null || w.removeChild(h));
    };
  });
  return Wt.set(c, v), c;
}
let Wt = /* @__PURE__ */ new WeakMap();
function $l(e, t) {
  const r = Wt.get(e);
  return r ? (Wt.delete(e), r(t)) : Promise.resolve();
}
function ke(e, t, [r, l] = [0, 0]) {
  D && r === 0 && Qe();
  var i = e, a = null, o = null, f = Z, s = r > 0 ? Jt : 0, c = !1;
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
        z === Zt ? l = 0 : z === rn ? l = 1 / 0 : (l = parseInt(z.substring(1)), l !== l && (l = f ? 1 / 0 : -1));
      }
      const N = l > r;
      !!f === N && (i = Ki(), Ie(i), Je(!1), w = !0, l = -1);
    }
    f ? (a ? Wr(a) : m && (a = Rt(() => m(i))), o && Ht(o, () => {
      o = null;
    })) : (o ? Wr(o) : m && (o = Rt(() => m(i, [r + 1, l]))), a && Ht(a, () => {
      a = null;
    })), w && Je(!0);
  };
  nr(() => {
    c = !1, t(v), c || h(null, null);
  }, s), D && (i = P);
}
function Ge(e, t, r, l, i) {
  var a = e, o = "", f;
  nr(() => {
    if (o === (o = t() ?? "")) {
      D && Qe();
      return;
    }
    f !== void 0 && (we(f), f = void 0), o !== "" && (f = Rt(() => {
      if (D) {
        P.data;
        for (var s = Qe(), c = s; s !== null && (s.nodeType !== 8 || /** @type {Comment} */
        s.data !== ""); )
          c = s, s = /** @type {TemplateNode} */
          /* @__PURE__ */ Ne(s);
        if (s === null)
          throw Tt(), Ke;
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
function kl(e, t, r, l, i) {
  var f;
  D && Qe();
  var a = (f = t.$$slots) == null ? void 0 : f[r], o = !1;
  a === !0 && (a = t.children, o = !0), a === void 0 || a(e, o ? () => l : l);
}
function Cl(e, t) {
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
const Jr = [...` 	
\r\f \v\uFEFF`];
function Al(e, t, r) {
  var l = "" + e;
  if (r) {
    for (var i in r)
      if (r[i])
        l = l ? l + " " + i : i;
      else if (l.length)
        for (var a = i.length, o = 0; (o = l.indexOf(i, o)) >= 0; ) {
          var f = o + a;
          (o === 0 || Jr.includes(l[o - 1])) && (f === l.length || Jr.includes(l[f])) ? l = (o === 0 ? "" : l.substring(0, o)) + l.substring(f + 1) : o = f;
        }
  }
  return l === "" ? null : l;
}
function Il(e, t, r, l, i, a) {
  var o = e.__className;
  if (D || o !== r) {
    var f = Al(r, l, a);
    (!D || f !== e.getAttribute("class")) && (f == null ? e.removeAttribute("class") : e.className = f), e.__className = r;
  } else if (a && i !== a)
    for (var s in a) {
      var c = !!a[s];
      (i == null || c !== !!i[s]) && e.classList.toggle(s, c);
    }
  return a;
}
const Rl = Symbol("is custom element"), Sl = Symbol("is html");
function Kr(e) {
  if (D) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var l = e.value;
          le(e, "value", null), e.value = l;
        }
        if (e.hasAttribute("checked")) {
          var i = e.checked;
          le(e, "checked", null), e.checked = i;
        }
      }
    };
    e.__on_r = r, Li(r), zn();
  }
}
function Nl(e, t) {
  var r = Un(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function le(e, t, r, l) {
  var i = Un(e);
  D && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || i[t] !== (i[t] = r) && (t === "loading" && (e[Ai] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Tl(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Un(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Rl]: e.nodeName.includes("-"),
      [Sl]: e.namespaceURI === $i
    })
  );
}
var Xr = /* @__PURE__ */ new Map();
function Tl(e) {
  var t = Xr.get(e.nodeName);
  if (t) return t;
  Xr.set(e.nodeName, t = []);
  for (var r, l = e, i = Element.prototype; i !== l; ) {
    r = Si(l);
    for (var a in r)
      r[a].set && t.push(a);
    l = fn(l);
  }
  return t;
}
function Dl(e, t, r = t) {
  pl(e, "change", (l) => {
    var i = l ? e.defaultChecked : e.checked;
    r(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (D && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  et(t) == null) && r(e.checked), rr(() => {
    var l = t();
    e.checked = !!l;
  });
}
function Qr(e, t) {
  return e === t || (e == null ? void 0 : e[dt]) === t;
}
function en(e = {}, t, r, l) {
  return tr(() => {
    var i, a;
    return rr(() => {
      i = a, a = [], et(() => {
        e !== r(...a) && (t(e, ...a), i && Qr(r(...i), e) && t(null, ...i));
      });
    }), () => {
      Kt(() => {
        a && Qr(r(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function jn(e) {
  q === null && Tn(), Bt(() => {
    const t = et(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Ll(e) {
  q === null && Tn(), jn(() => () => et(e));
}
let pt = !1;
function Pl(e) {
  var t = pt;
  try {
    return pt = !1, [e(), pt];
  } finally {
    pt = t;
  }
}
function A(e, t, r, l) {
  var Te;
  var i = (r & pi) !== 0, a = !0, o = (r & bi) !== 0, f = (r & yi) !== 0, s = !1, c;
  o ? [c, s] = Pl(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var v = dt in e || on in e, h = o && (((Te = ze(e, t)) == null ? void 0 : Te.set) ?? (v && t in e && ((O) => e[t] = O))) || void 0, g = (
    /** @type {V} */
    l
  ), m = !0, w = !1, N = () => (w = !0, m && (m = !1, f ? g = et(
    /** @type {() => V} */
    l
  ) : g = /** @type {V} */
  l), g);
  c === void 0 && l !== void 0 && (h && a && Ui(), c = N(), h && h(c));
  var z;
  if (z = () => {
    var O = (
      /** @type {V} */
      e[t]
    );
    return O === void 0 ? N() : (m = !0, w = !1, O);
  }, (r & wi) === 0)
    return z;
  if (h) {
    var B = e.$$legacy;
    return function(O, V) {
      return arguments.length > 0 ? ((!V || B || s) && h(V ? z() : O), O) : z();
    };
  }
  var F = !1, M = /* @__PURE__ */ gn(c), H = /* @__PURE__ */ Pe(() => {
    var O = z(), V = d(M);
    return F ? (F = !1, V) : M.v = O;
  });
  return i || (H.equals = hn), function(O, V) {
    if (arguments.length > 0) {
      const he = V ? d(H) : o ? ae(O) : O;
      return H.equals(he) || (F = !0, L(M, he), w && g !== void 0 && (g = he), et(() => d(H))), O;
    }
    return d(H);
  };
}
function zl(e) {
  return new Ol(e);
}
var me, re;
class Ol {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    Ut(this, me);
    /** @type {Record<string, any>} */
    Ut(this, re);
    var a;
    var r = /* @__PURE__ */ new Map(), l = (o, f) => {
      var s = /* @__PURE__ */ gn(f);
      return r.set(o, s), s;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(o, f) {
          return d(r.get(f) ?? l(f, Reflect.get(o, f)));
        },
        has(o, f) {
          return f === on ? !0 : (d(r.get(f) ?? l(f, Reflect.get(o, f))), Reflect.has(o, f));
        },
        set(o, f, s) {
          return L(r.get(f) ?? l(f, s), s), Reflect.set(o, f, s);
        }
      }
    );
    jt(this, re, (t.hydrate ? xl : Mn)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((a = t == null ? void 0 : t.props) != null && a.$$host) || t.sync === !1) && $(), jt(this, me, i.$$events);
    for (const o of Object.keys(W(this, re)))
      o === "$set" || o === "$destroy" || o === "$on" || $t(this, o, {
        get() {
          return W(this, re)[o];
        },
        /** @param {any} value */
        set(f) {
          W(this, re)[o] = f;
        },
        enumerable: !0
      });
    W(this, re).$set = /** @param {Record<string, any>} next */
    (o) => {
      Object.assign(i, o);
    }, W(this, re).$destroy = () => {
      $l(W(this, re));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    W(this, re).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    W(this, me)[t] = W(this, me)[t] || [];
    const l = (...i) => r.call(this, ...i);
    return W(this, me)[t].push(l), () => {
      W(this, me)[t] = W(this, me)[t].filter(
        /** @param {any} fn */
        (i) => i !== l
      );
    };
  }
  $destroy() {
    W(this, re).$destroy();
  }
}
me = new WeakMap(), re = new WeakMap();
let qn;
typeof HTMLElement == "function" && (qn = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, l) {
    super();
    /** The Svelte component constructor */
    ie(this, "$$ctor");
    /** Slots */
    ie(this, "$$s");
    /** @type {any} The Svelte component instance */
    ie(this, "$$c");
    /** Whether or not the custom element is connected */
    ie(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    ie(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    ie(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    ie(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    ie(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    ie(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    ie(this, "$$me");
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
          i !== "default" && (o.name = i), te(a, o);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, l = Fl(this);
      for (const i of this.$$s)
        i in l && (i === "default" && !this.$$d.children ? (this.$$d.children = t(i), r.default = !0) : r[i] = t(i));
      for (const i of this.attributes) {
        const a = this.$$g_p(i.name);
        a in this.$$d || (this.$$d[a] = bt(a, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = zl({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = dl(() => {
        rr(() => {
          var i;
          this.$$r = !0;
          for (const a of xt(this.$$c)) {
            if (!((i = this.$$p_d[a]) != null && i.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const o = bt(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = bt(t, l, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
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
    return xt(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function bt(e, t, r, l) {
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
function Fl(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function Ml(e, t, r, l, i, a) {
  let o = class extends qn {
    constructor() {
      super(e, r, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return xt(t).map(
        (f) => (t[f].attribute || f).toLowerCase()
      );
    }
  };
  return xt(t).forEach((f) => {
    $t(o.prototype, f, {
      get() {
        return this.$$c && f in this.$$c ? this.$$c[f] : this.$$d[f];
      },
      set(s) {
        var h;
        s = bt(f, s, t), this.$$d[f] = s;
        var c = this.$$c;
        if (c) {
          var v = (h = ze(c, f)) == null ? void 0 : h.get;
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
const Bn = new TextEncoder();
function Vl(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function Ul(e, t = "SHA-256", r = 1e5) {
  const l = Date.now().toString(16);
  e || (e = Math.round(Math.random() * r));
  const i = await Hn(l, e, t);
  return {
    algorithm: t,
    challenge: i,
    salt: l,
    signature: ""
  };
}
async function Hn(e, t, r) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return Vl(
    await crypto.subtle.digest(
      r.toUpperCase(),
      Bn.encode(e + t)
    )
  );
}
function jl(e, t, r = "SHA-256", l = 1e6, i = 0) {
  const a = new AbortController(), o = Date.now();
  return {
    promise: (async () => {
      for (let s = i; s <= l; s += 1) {
        if (a.signal.aborted)
          return null;
        if (await Hn(t, s, r) === e)
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
function ql() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function Bl(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let l = 0; l < t.length; l++)
    r[l] = t.charCodeAt(l);
  return r;
}
function Hl(e, t = 12) {
  const r = new Uint8Array(t);
  for (let l = 0; l < t; l++)
    r[l] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function Yl(e, t = "", r = 1e6, l = 0) {
  const i = "AES-GCM", a = new AbortController(), o = Date.now(), f = async () => {
    for (let v = l; v <= r; v += 1) {
      if (a.signal.aborted || !s || !c)
        return null;
      try {
        const h = await crypto.subtle.decrypt(
          {
            name: i,
            iv: Hl(v)
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
    c = Bl(e);
    const v = await crypto.subtle.digest(
      "SHA-256",
      Bn.encode(t)
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
var y = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(y || {}), Wl = /* @__PURE__ */ El('<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="svelte-ddsc3z"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25" class="svelte-ddsc3z"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor" class="altcha-spinner svelte-ddsc3z"></path></svg>'), Zl = /* @__PURE__ */ ve('<span role="status" aria-live="polite" class="svelte-ddsc3z"><!></span> <input type="hidden" class="svelte-ddsc3z">', 1), Gl = /* @__PURE__ */ ve('<span role="status" aria-live="polite" class="svelte-ddsc3z"><!></span>'), Jl = /* @__PURE__ */ ve('<label class="svelte-ddsc3z"><!></label>'), Kl = /* @__PURE__ */ ve('<div class="svelte-ddsc3z"><a target="_blank" class="altcha-logo svelte-ddsc3z"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-ddsc3z"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor" class="svelte-ddsc3z"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor" class="svelte-ddsc3z"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor" class="svelte-ddsc3z"></path></svg></a></div>'), Xl = /* @__PURE__ */ ve('<div class="svelte-ddsc3z"><!></div>'), Ql = /* @__PURE__ */ ve('<div class="svelte-ddsc3z"><!></div>'), ea = /* @__PURE__ */ ve('<div class="altcha-error svelte-ddsc3z"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="svelte-ddsc3z"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" class="svelte-ddsc3z"></path></svg> <!></div>'), ta = /* @__PURE__ */ ve('<div class="altcha-footer svelte-ddsc3z"><div class="svelte-ddsc3z"><!></div></div>'), ra = /* @__PURE__ */ ve('<div class="altcha-anchor-arrow svelte-ddsc3z"></div>'), na = /* @__PURE__ */ ve('<!> <div class="altcha svelte-ddsc3z"><div class="altcha-main svelte-ddsc3z"><!> <div><input type="checkbox" class="svelte-ddsc3z"></div> <div class="altcha-label svelte-ddsc3z"><!></div> <!></div> <!> <!> <!></div>', 1);
const ia = {
  hash: "svelte-ddsc3z",
  code: `.altcha.svelte-ddsc3z {background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);position:relative;text-align:left;}.altcha.svelte-ddsc3z:focus-within {border-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating].svelte-ddsc3z {background:var(--altcha-color-base, white);display:none;filter:drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2));left:-100%;position:fixed;top:-100%;width:var(--altcha-max-width, 260px);z-index:999999;}.altcha[data-floating=top].svelte-ddsc3z .altcha-anchor-arrow:where(.svelte-ddsc3z) {border-bottom-color:transparent;border-top-color:var(--altcha-color-border, #a0a0a0);bottom:-12px;top:auto;}.altcha[data-floating=bottom].svelte-ddsc3z:focus-within::after {border-bottom-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating=top].svelte-ddsc3z:focus-within::after {border-top-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating].svelte-ddsc3z:not([data-state=unverified]) {display:block;}.altcha-anchor-arrow.svelte-ddsc3z {border:6px solid transparent;border-bottom-color:var(--altcha-color-border, #a0a0a0);content:"";height:0;left:12px;position:absolute;top:-12px;width:0;}.altcha-main.svelte-ddsc3z {align-items:center;display:flex;gap:0.4rem;padding:0.7rem;}.altcha-label.svelte-ddsc3z {flex-grow:1;}.altcha-label.svelte-ddsc3z label:where(.svelte-ddsc3z) {cursor:pointer;}.altcha-logo.svelte-ddsc3z {color:currentColor;opacity:0.3;}.altcha-logo.svelte-ddsc3z:hover {opacity:1;}.altcha-error.svelte-ddsc3z {color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem;}.altcha-footer.svelte-ddsc3z {align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.4;padding:0.2rem 0.7rem;text-align:right;}.altcha-footer.svelte-ddsc3z:hover {opacity:1;}.altcha-footer.svelte-ddsc3z > :where(.svelte-ddsc3z):first-child {flex-grow:1;}.altcha-footer.svelte-ddsc3z a {color:currentColor;}.altcha-checkbox.svelte-ddsc3z {display:flex;align-items:center;height:24px;width:24px;}.altcha-checkbox.svelte-ddsc3z input:where(.svelte-ddsc3z) {width:18px;height:18px;margin:0;}.altcha-hidden.svelte-ddsc3z {display:none;}.altcha-spinner.svelte-ddsc3z {
  animation: svelte-ddsc3z-altcha-spinner 0.75s infinite linear;transform-origin:center;}

@keyframes svelte-ddsc3z-altcha-spinner {
  100% {
    transform: rotate(360deg);
  }
}`
};
function la(e, t) {
  var zr, Or;
  Dn(t, !0), Cl(e, ia);
  let r = A(t, "auto", 7, void 0), l = A(t, "blockspam", 7, void 0), i = A(t, "challengeurl", 7, void 0), a = A(t, "challengejson", 7, void 0), o = A(t, "customfetch", 7, void 0), f = A(t, "debug", 7, !1), s = A(t, "delay", 7, 0), c = A(t, "expire", 7, void 0), v = A(t, "floating", 7, void 0), h = A(t, "floatinganchor", 7, void 0), g = A(t, "floatingoffset", 7, void 0), m = A(t, "floatingpersist", 7, !1), w = A(t, "hidefooter", 7, !1), N = A(t, "hidelogo", 7, !1), z = A(t, "id", 7, void 0), B = A(t, "name", 7, "altcha"), F = A(t, "maxnumber", 7, 1e6), M = A(t, "mockerror", 7, !1), H = A(t, "obfuscated", 7, void 0), Te = A(t, "plugins", 7, void 0), O = A(t, "refetchonexpire", 7, !0), V = A(t, "spamfilter", 7, !1), he = A(t, "strings", 7, void 0), Q = A(t, "test", 7, !1), Ee = A(t, "verifyurl", 7, void 0), Ve = A(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), rt = A(t, "workerurl", 7, void 0);
  const lr = ["SHA-256", "SHA-384", "SHA-512"], ar = "Visit Altcha.org", or = "https://altcha.org/", nt = (n, u) => {
    t.$$host.dispatchEvent(new CustomEvent(n, { detail: u }));
  }, sr = (Or = (zr = document.documentElement.lang) == null ? void 0 : zr.split("-")) == null ? void 0 : Or[0], Pt = /* @__PURE__ */ Pe(() => {
    var n;
    return i() && new URL(i(), location.origin).host.endsWith(".altcha.org") && !!((n = i()) != null && n.includes("apiKey=ckey_"));
  }), zt = /* @__PURE__ */ Pe(() => a() ? br(a()) : void 0), fr = /* @__PURE__ */ Pe(() => he() ? br(he()) : {}), ee = /* @__PURE__ */ Pe(() => {
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
  }), ur = /* @__PURE__ */ Pe(() => z() || `${B()}_checkbox`);
  let Ue = Ye(!1), C = Ye(ae(y.UNVERIFIED)), U = Ye(void 0), it = Ye(null), je = null, p = null, qe = Ye(null), fe = null, xe = [], De = Ye(null);
  Bt(() => {
    Qn(d(qe));
  }), Bt(() => {
    ei(d(C));
  }), Ll(() => {
    Yn(), p && (p.removeEventListener("submit", _r), p.removeEventListener("reset", mr), p.removeEventListener("focusin", gr), p = null), fe && (clearTimeout(fe), fe = null), document.removeEventListener("click", vr), document.removeEventListener("scroll", hr), window.removeEventListener("resize", wr);
  }), jn(() => {
    var n;
    R("mounted", "1.4.1"), R("workers", Ve()), Kn(), R("plugins", xe.length ? xe.map((u) => u.constructor.pluginName).join(", ") : "none"), Q() && R("using test mode"), c() && Ot(c()), r() !== void 0 && R("auto", r()), v() !== void 0 && yr(v()), p = (n = d(U)) == null ? void 0 : n.closest("form"), p && (p.addEventListener("submit", _r, { capture: !0 }), p.addEventListener("reset", mr), (r() === "onfocus" || m() === "focus") && p.addEventListener("focusin", gr)), r() === "onload" && (H() ? lt() : $e()), d(Pt) && (w() || N()) && R("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      nt("load");
    });
  });
  function cr(n, u) {
    return btoa(JSON.stringify({
      algorithm: n.algorithm,
      challenge: n.challenge,
      number: u.number,
      salt: n.salt,
      signature: n.signature,
      test: Q() ? !0 : void 0,
      took: u.took
    }));
  }
  function Yn() {
    for (const n of xe)
      n.destroy();
  }
  function dr() {
    i() && O() && d(C) === y.VERIFIED ? $e() : ot(y.EXPIRED, d(ee).expired);
  }
  async function Wn() {
    var n;
    if (M())
      throw R("mocking error"), new Error("Mocked error.");
    if (d(zt))
      return R("using provided json data"), d(zt);
    if (Q())
      return R("generating test challenge", { test: Q() }), Ul(typeof Q() != "boolean" ? +Q() : void 0);
    {
      if (!i() && p) {
        const T = p.getAttribute("action");
        T != null && T.includes("/form/") && i(T + "/altcha");
      }
      if (!i())
        throw new Error("Attribute challengeurl not set.");
      R("fetching challenge from", i());
      let u = null, _ = null;
      if (o())
        if (R("using customfetch"), typeof o() == "string") {
          if (u = globalThis[o()] || null, !u)
            throw new Error(`Custom fetch function not found: ${o()}`);
        } else
          u = o();
      const E = {
        headers: V() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      };
      if (u) {
        if (_ = await u(i(), E), !_ || !(_ instanceof Response))
          throw new Error("Custom fetch function did not return a response.");
      } else
        _ = await fetch(i(), E);
      if (_.status !== 200)
        throw new Error(`Server responded with ${_.status}.`);
      const S = _.headers.get("X-Altcha-Config"), x = await _.json(), b = new URLSearchParams((n = x.salt.split("?")) == null ? void 0 : n[1]), Y = b.get("expires") || b.get("expire");
      if (Y) {
        const T = new Date(+Y * 1e3), He = isNaN(T.getTime()) ? 0 : T.getTime() - Date.now();
        He > 0 && Ot(He);
      }
      if (S)
        try {
          const T = JSON.parse(S);
          T && typeof T == "object" && (T.verifyurl && (T.verifyurl = new URL(T.verifyurl, new URL(i())).toString()), $r(T));
        } catch (T) {
          R("unable to configure from X-Altcha-Config", T);
        }
      return x;
    }
  }
  function Zn(n) {
    var _;
    const u = p == null ? void 0 : p.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((_ = u == null ? void 0 : u.value) == null ? void 0 : _.slice(u.value.indexOf("@"))) || void 0;
  }
  function Gn() {
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
  function Jn(n) {
    return [
      ...(p == null ? void 0 : p.querySelectorAll(n != null && n.length ? n.map((_) => `input[name="${_}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (_, E) => {
        const S = E.name, x = E.value;
        return S && x && (_[S] = /\n/.test(x) ? x.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : x), _;
      },
      {}
    );
  }
  function Kn() {
    const n = Te() !== void 0 ? Te().split(",") : void 0;
    for (const u of globalThis.altchaPlugins)
      (!n || n.includes(u.pluginName)) && xe.push(new u({
        el: d(U),
        clarify: lt,
        dispatch: nt,
        getConfiguration: kr,
        getFloatingAnchor: Cr,
        getState: Ar,
        log: R,
        reset: ot,
        solve: xr,
        setState: Le,
        setFloatingAnchor: Rr,
        verify: $e
      }));
  }
  function R(...n) {
    (f() || n.some((u) => u instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${B()}]`, ...n);
  }
  function Xn() {
    [y.UNVERIFIED, y.ERROR, y.EXPIRED].includes(d(C)) ? V() !== !1 && (p == null ? void 0 : p.reportValidity()) === !1 ? L(Ue, !1) : H() ? lt() : $e() : L(Ue, !0);
  }
  function vr(n) {
    const u = n.target;
    v() && u && !d(U).contains(u) && (d(C) === y.VERIFIED && m() === !1 || d(C) === y.VERIFIED && m() === "focus" && !(p != null && p.matches(":focus-within")) || r() === "off" && d(C) === y.UNVERIFIED) && Ir();
  }
  function hr() {
    v() && d(C) !== y.UNVERIFIED && at();
  }
  function Qn(n) {
    for (const u of xe)
      typeof u.onErrorChange == "function" && u.onErrorChange(d(qe));
  }
  function gr(n) {
    d(C) === y.UNVERIFIED ? $e() : v() && m() === "focus" && d(C) === y.VERIFIED && Ft();
  }
  function _r(n) {
    p && r() === "onsubmit" ? d(C) === y.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), $e().then(() => {
      p == null || p.requestSubmit();
    })) : d(C) !== y.VERIFIED && (n.preventDefault(), n.stopPropagation(), d(C) === y.VERIFYING && pr()) : p && v() && r() === "off" && d(C) === y.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), Ft());
  }
  function mr() {
    ot();
  }
  function pr() {
    d(C) === y.VERIFYING && d(ee).waitAlert && alert(d(ee).waitAlert);
  }
  function ei(n) {
    for (const u of xe)
      typeof u.onStateChange == "function" && u.onStateChange(d(C));
    v() && d(C) !== y.UNVERIFIED && requestAnimationFrame(() => {
      at();
    }), L(Ue, d(C) === y.VERIFIED);
  }
  function wr() {
    v() && at();
  }
  function br(n) {
    return JSON.parse(n);
  }
  async function ti(n) {
    if (!Ee())
      throw new Error("Attribute verifyurl not set.");
    R("requesting server verification from", Ee());
    const u = { payload: n };
    if (V() !== !1) {
      const {
        blockedCountries: S,
        classifier: x,
        disableRules: b,
        email: Y,
        expectedLanguages: T,
        expectedCountries: He,
        fields: ft,
        ipAddress: ut,
        text: hi,
        timeZone: Fr
      } = Gn();
      u.blockedCountries = S, u.classifier = x, u.disableRules = b, u.email = Y === !1 ? void 0 : Zn(Y), u.expectedCountries = He, u.expectedLanguages = T || (sr ? [sr] : void 0), u.fields = ft === !1 ? void 0 : Jn(ft), u.ipAddress = ut === !1 ? void 0 : ut || "auto", u.text = hi, u.timeZone = Fr === !1 ? void 0 : Fr || ql();
    }
    const _ = await fetch(Ee(), {
      body: JSON.stringify(u),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (_.status !== 200)
      throw new Error(`Server responded with ${_.status}.`);
    const E = await _.json();
    if (E != null && E.payload && L(De, ae(E.payload)), nt("serververification", E), l() && E.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  function Ot(n) {
    R("expire", n), fe && (clearTimeout(fe), fe = null), n < 1 ? dr() : fe = setTimeout(dr, n);
  }
  function yr(n) {
    R("floating", n), v() !== n && (d(U).style.left = "", d(U).style.top = ""), v(n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : v()), v() ? (r() || r("onsubmit"), document.addEventListener("scroll", hr), document.addEventListener("click", vr), window.addEventListener("resize", wr)) : r() === "onsubmit" && r(void 0);
  }
  function Er(n) {
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
  async function xr(n) {
    let u = null;
    if ("Worker" in window) {
      try {
        u = await ri(n, n.maxNumber || n.maxnumber || F());
      } catch (_) {
        R(_);
      }
      if ((u == null ? void 0 : u.number) !== void 0 || "obfuscated" in n)
        return { data: n, solution: u };
    }
    if ("obfuscated" in n) {
      const _ = await Yl(n.obfuscated, n.key, n.maxNumber || n.maxnumber);
      return { data: n, solution: await _.promise };
    }
    return {
      data: n,
      solution: await jl(n.challenge, n.salt, n.algorithm, n.maxNumber || n.maxnumber || F()).promise
    };
  }
  async function ri(n, u = typeof Q() == "number" ? Q() : n.maxNumber || n.maxnumber || F(), _ = Math.ceil(Ve())) {
    const E = [];
    _ = Math.min(16, u, Math.max(1, _));
    for (let b = 0; b < _; b++)
      E.push(altchaCreateWorker(rt()));
    const S = Math.ceil(u / _), x = await Promise.all(E.map((b, Y) => {
      const T = Y * S;
      return new Promise((He) => {
        b.addEventListener("message", (ft) => {
          if (ft.data)
            for (const ut of E)
              ut !== b && ut.postMessage({ type: "abort" });
          He(ft.data);
        }), b.postMessage({
          payload: n,
          max: T + S,
          start: T,
          type: "work"
        });
      });
    }));
    for (const b of E)
      b.terminate();
    return x.find((b) => !!b) || null;
  }
  async function lt() {
    if (!H()) {
      Le(y.ERROR);
      return;
    }
    const n = xe.find((u) => u.constructor.pluginName === "obfuscation");
    if (!n || !("clarify" in n)) {
      Le(y.ERROR), R("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in n && typeof n.clarify == "function")
      return n.clarify();
  }
  function $r(n) {
    n.obfuscated !== void 0 && H(n.obfuscated), n.auto !== void 0 && (r(n.auto), r() === "onload" && (H() ? lt() : $e())), n.blockspam !== void 0 && l(!!n.blockspam), n.customfetch !== void 0 && o(n.customfetch), n.floatinganchor !== void 0 && h(n.floatinganchor), n.delay !== void 0 && s(n.delay), n.floatingoffset !== void 0 && g(n.floatingoffset), n.floating !== void 0 && yr(n.floating), n.expire !== void 0 && (Ot(n.expire), c(n.expire)), n.challenge && (a(typeof n.challenge == "string" ? n.challenge : JSON.stringify(n.challenge)), Er(d(zt))), n.challengeurl !== void 0 && i(n.challengeurl), n.debug !== void 0 && f(!!n.debug), n.hidefooter !== void 0 && w(!!n.hidefooter), n.hidelogo !== void 0 && N(!!n.hidelogo), n.maxnumber !== void 0 && F(+n.maxnumber), n.mockerror !== void 0 && M(!!n.mockerror), n.name !== void 0 && B(n.name), n.refetchonexpire !== void 0 && O(!!n.refetchonexpire), n.spamfilter !== void 0 && V(typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && he(typeof n.strings == "string" ? n.strings : JSON.stringify(n.strings)), n.test !== void 0 && Q(typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && Ee(n.verifyurl), n.workers !== void 0 && Ve(+n.workers), n.workerurl !== void 0 && rt(n.workerurl);
  }
  function kr() {
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
      hidelogo: N(),
      name: B(),
      maxnumber: F(),
      mockerror: M(),
      obfuscated: H(),
      refetchonexpire: O(),
      spamfilter: V(),
      strings: d(ee),
      test: Q(),
      verifyurl: Ee(),
      workers: Ve(),
      workerurl: rt()
    };
  }
  function Cr() {
    return je;
  }
  function ni(n) {
    return xe.find((u) => u.constructor.pluginName === n);
  }
  function Ar() {
    return d(C);
  }
  function Ir() {
    d(U).style.display = "none";
  }
  function at(n = 20) {
    if (d(U))
      if (je || (je = (h() ? document.querySelector(h()) : p == null ? void 0 : p.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || p), je) {
        const u = parseInt(g(), 10) || 12, _ = je.getBoundingClientRect(), E = d(U).getBoundingClientRect(), S = document.documentElement.clientHeight, x = document.documentElement.clientWidth, b = v() === "auto" ? _.bottom + E.height + u + n > S : v() === "top", Y = Math.max(n, Math.min(x - n - E.width, _.left + _.width / 2 - E.width / 2));
        if (b ? d(U).style.top = `${_.top - (E.height + u)}px` : d(U).style.top = `${_.bottom + u}px`, d(U).style.left = `${Y}px`, d(U).setAttribute("data-floating", b ? "top" : "bottom"), d(it)) {
          const T = d(it).getBoundingClientRect();
          d(it).style.left = _.left - Y + _.width / 2 - T.width / 2 + "px";
        }
      } else
        R("unable to find floating anchor element");
  }
  function ot(n = y.UNVERIFIED, u = null) {
    fe && (clearTimeout(fe), fe = null), L(Ue, !1), L(De, null), Le(n, u);
  }
  function Rr(n) {
    je = n;
  }
  function Le(n, u = null) {
    L(C, ae(n)), L(qe, ae(u)), nt("statechange", {
      payload: d(De),
      state: d(C)
    });
  }
  function Ft() {
    d(U).style.display = "block", v() && at();
  }
  async function $e() {
    return ot(y.VERIFYING), await new Promise((n) => setTimeout(n, s() || 0)), Wn().then((n) => (Er(n), R("challenge", n), xr(n))).then(({ data: n, solution: u }) => {
      if (R("solution", u), !u || n && "challenge" in n && !("clearText" in u))
        if ((u == null ? void 0 : u.number) !== void 0 && "challenge" in n) {
          if (Ee())
            return ti(cr(n, u));
          L(De, ae(cr(n, u))), R("payload", d(De));
        } else
          throw R("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      Le(y.VERIFIED), R("verified"), ol().then(() => {
        nt("verified", { payload: d(De) });
      });
    }).catch((n) => {
      R(n), Le(y.ERROR, n.message);
    });
  }
  var Sr = na(), Nr = Hr(Sr);
  kl(Nr, t, "default", {});
  var st = ge(Nr, 2), Mt = J(st), Tr = J(Mt);
  {
    var ii = (n) => {
      var u = Wl();
      te(n, u);
    };
    ke(Tr, (n) => {
      d(C) === y.VERIFYING && n(ii);
    });
  }
  var mt = ge(Tr, 2);
  let Dr;
  var Be = J(mt);
  Kr(Be), Be.__change = Xn, G(mt);
  var Vt = ge(mt, 2), li = J(Vt);
  {
    var ai = (n) => {
      var u = Zl(), _ = Hr(u), E = J(_);
      Ge(E, () => d(ee).verified), G(_);
      var S = ge(_, 2);
      Kr(S), We(() => {
        le(S, "name", B()), Nl(S, d(De));
      }), te(n, u);
    }, oi = (n, u) => {
      {
        var _ = (S) => {
          var x = Gl(), b = J(x);
          Ge(b, () => d(ee).verifying), G(x), te(S, x);
        }, E = (S) => {
          var x = Jl(), b = J(x);
          Ge(b, () => d(ee).label), G(x), We(() => le(x, "for", d(ur))), te(S, x);
        };
        ke(
          n,
          (S) => {
            d(C) === y.VERIFYING ? S(_) : S(E, !1);
          },
          u
        );
      }
    };
    ke(li, (n) => {
      d(C) === y.VERIFIED ? n(ai) : n(oi, !1);
    });
  }
  G(Vt);
  var si = ge(Vt, 2);
  {
    var fi = (n) => {
      var u = Kl(), _ = J(u);
      le(_, "href", or), G(u), We(() => le(_, "aria-label", d(ee).ariaLinkLabel)), te(n, u);
    };
    ke(si, (n) => {
      (N() !== !0 || d(Pt)) && n(fi);
    });
  }
  G(Mt);
  var Lr = ge(Mt, 2);
  {
    var ui = (n) => {
      var u = ea(), _ = ge(J(u), 2);
      {
        var E = (x) => {
          var b = Xl(), Y = J(b);
          Ge(Y, () => d(ee).expired), G(b), We(() => le(b, "title", d(qe))), te(x, b);
        }, S = (x) => {
          var b = Ql(), Y = J(b);
          Ge(Y, () => d(ee).error), G(b), We(() => le(b, "title", d(qe))), te(x, b);
        };
        ke(_, (x) => {
          d(C) === y.EXPIRED ? x(E) : x(S, !1);
        });
      }
      G(u), te(n, u);
    };
    ke(Lr, (n) => {
      (d(qe) || d(C) === y.EXPIRED) && n(ui);
    });
  }
  var Pr = ge(Lr, 2);
  {
    var ci = (n) => {
      var u = ta(), _ = J(u), E = J(_);
      Ge(E, () => d(ee).footer), G(_), G(u), te(n, u);
    };
    ke(Pr, (n) => {
      d(ee).footer && (w() !== !0 || d(Pt)) && n(ci);
    });
  }
  var di = ge(Pr, 2);
  {
    var vi = (n) => {
      var u = ra();
      en(u, (_) => L(it, _), () => d(it)), te(n, u);
    };
    ke(di, (n) => {
      v() && n(vi);
    });
  }
  return G(st), en(st, (n) => L(U, n), () => d(U)), We(
    (n) => {
      le(st, "data-state", d(C)), le(st, "data-floating", v()), Dr = Il(mt, 1, "altcha-checkbox svelte-ddsc3z", null, Dr, n), le(Be, "id", d(ur)), Be.required = r() !== "onsubmit" && (!v() || r() !== "off");
    },
    [
      () => ({
        "altcha-hidden": d(C) === y.VERIFYING
      })
    ]
  ), bl("invalid", Be, pr), Dl(Be, () => d(Ue), (n) => L(Ue, n)), te(e, Sr), Ln({
    clarify: lt,
    configure: $r,
    getConfiguration: kr,
    getFloatingAnchor: Cr,
    getPlugin: ni,
    getState: Ar,
    hide: Ir,
    repositionFloating: at,
    reset: ot,
    setFloatingAnchor: Rr,
    setState: Le,
    show: Ft,
    verify: $e,
    get auto() {
      return r();
    },
    set auto(n = void 0) {
      r(n), $();
    },
    get blockspam() {
      return l();
    },
    set blockspam(n = void 0) {
      l(n), $();
    },
    get challengeurl() {
      return i();
    },
    set challengeurl(n = void 0) {
      i(n), $();
    },
    get challengejson() {
      return a();
    },
    set challengejson(n = void 0) {
      a(n), $();
    },
    get customfetch() {
      return o();
    },
    set customfetch(n = void 0) {
      o(n), $();
    },
    get debug() {
      return f();
    },
    set debug(n = !1) {
      f(n), $();
    },
    get delay() {
      return s();
    },
    set delay(n = 0) {
      s(n), $();
    },
    get expire() {
      return c();
    },
    set expire(n = void 0) {
      c(n), $();
    },
    get floating() {
      return v();
    },
    set floating(n = void 0) {
      v(n), $();
    },
    get floatinganchor() {
      return h();
    },
    set floatinganchor(n = void 0) {
      h(n), $();
    },
    get floatingoffset() {
      return g();
    },
    set floatingoffset(n = void 0) {
      g(n), $();
    },
    get floatingpersist() {
      return m();
    },
    set floatingpersist(n = !1) {
      m(n), $();
    },
    get hidefooter() {
      return w();
    },
    set hidefooter(n = !1) {
      w(n), $();
    },
    get hidelogo() {
      return N();
    },
    set hidelogo(n = !1) {
      N(n), $();
    },
    get id() {
      return z();
    },
    set id(n = void 0) {
      z(n), $();
    },
    get name() {
      return B();
    },
    set name(n = "altcha") {
      B(n), $();
    },
    get maxnumber() {
      return F();
    },
    set maxnumber(n = 1e6) {
      F(n), $();
    },
    get mockerror() {
      return M();
    },
    set mockerror(n = !1) {
      M(n), $();
    },
    get obfuscated() {
      return H();
    },
    set obfuscated(n = void 0) {
      H(n), $();
    },
    get plugins() {
      return Te();
    },
    set plugins(n = void 0) {
      Te(n), $();
    },
    get refetchonexpire() {
      return O();
    },
    set refetchonexpire(n = !0) {
      O(n), $();
    },
    get spamfilter() {
      return V();
    },
    set spamfilter(n = !1) {
      V(n), $();
    },
    get strings() {
      return he();
    },
    set strings(n = void 0) {
      he(n), $();
    },
    get test() {
      return Q();
    },
    set test(n = !1) {
      Q(n), $();
    },
    get verifyurl() {
      return Ee();
    },
    set verifyurl(n = void 0) {
      Ee(n), $();
    },
    get workers() {
      return Ve();
    },
    set workers(n = Math.min(16, navigator.hardwareConcurrency || 8)) {
      Ve(n), $();
    },
    get workerurl() {
      return rt();
    },
    set workerurl(n = void 0) {
      rt(n), $();
    }
  });
}
yl(["change"]);
customElements.define("altcha-widget", Ml(
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
  la as Altcha
};
