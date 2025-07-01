var Sn = Object.defineProperty;
var ja = (e) => {
  throw TypeError(e);
};
var Pn = (e, t, r) => t in e ? Sn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Ae = (e, t, r) => Pn(e, typeof t != "symbol" ? t + "" : t, r), $a = (e, t, r) => t.has(e) || ja("Cannot " + r);
var se = (e, t, r) => ($a(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Cr = (e, t, r) => t.has(e) ? ja("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), Lr = (e, t, r, i) => ($a(e, t, "write to private field"), i ? i.call(e, r) : t.set(e, r), r);
var Wa = Array.isArray, Nn = Array.prototype.indexOf, zn = Array.from, Qt = Object.keys, St = Object.defineProperty, Qe = Object.getOwnPropertyDescriptor, Dn = Object.getOwnPropertyDescriptors, qn = Object.prototype, On = Array.prototype, Ka = Object.getPrototypeOf, Sa = Object.isExtensible;
const bt = () => {
};
function Ja(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Hn(e, t, r = !1) {
  return e === void 0 ? r ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
const ke = 2, Xa = 4, or = 8, zr = 16, Pe = 32, rt = 64, er = 128, he = 256, tr = 512, fe = 1024, Se = 2048, at = 4096, mt = 8192, lr = 16384, Fn = 32768, Dr = 65536, Mn = 1 << 19, Qa = 1 << 20, Ir = 1 << 21, jt = Symbol("$state"), ei = Symbol("legacy props"), Bn = Symbol(""), Un = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Pt = [], Nt = [];
function ti() {
  var e = Pt;
  Pt = [], Ja(e);
}
function ri() {
  var e = Nt;
  Nt = [], Ja(e);
}
function qr(e) {
  Pt.length === 0 && queueMicrotask(ti), Pt.push(e);
}
function Zn(e) {
  Nt.length === 0 && Un(ri), Nt.push(e);
}
function Gn() {
  Pt.length > 0 && ti(), Nt.length > 0 && ri();
}
function ai(e) {
  return e === this.v;
}
function ii(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Or(e) {
  return !ii(e, this.v);
}
function Yn(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Wn() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Kn(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Jn() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Xn() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Qn(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function eo() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function to() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function ro() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
const ao = 1, io = 4, no = 8, oo = 16, lo = 1, so = 2, Hr = "[", ni = "[!", oi = "]", pt = {}, ue = Symbol(), uo = "http://www.w3.org/1999/xhtml";
function li(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let ie = null;
function Pa(e) {
  ie = e;
}
function si(e, t = !1, r) {
  var i = ie = {
    p: ie,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
  Br(() => {
    i.d = !0;
  });
}
function ui(e) {
  const t = ie;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const u = t.e;
    if (u !== null) {
      var r = $, i = j;
      t.e = null;
      try {
        for (var o = 0; o < u.length; o++) {
          var n = u[o];
          Ue(n.effect), Ve(n.reaction), Ur(n.fn);
        }
      } finally {
        Ue(r), Ve(i);
      }
    }
    ie = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function fi() {
  return !0;
}
function Fe(e) {
  if (typeof e != "object" || e === null || jt in e)
    return e;
  const t = Ka(e);
  if (t !== qn && t !== On)
    return e;
  var r = /* @__PURE__ */ new Map(), i = Wa(e), o = /* @__PURE__ */ D(0), n = j, u = (s) => {
    var c = j;
    Ve(n);
    var d = s();
    return Ve(c), d;
  };
  return i && r.set("length", /* @__PURE__ */ D(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, c, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && eo();
        var p = r.get(c);
        return p === void 0 ? (p = u(() => /* @__PURE__ */ D(d.value)), r.set(c, p)) : y(
          p,
          u(() => Fe(d.value))
        ), !0;
      },
      deleteProperty(s, c) {
        var d = r.get(c);
        if (d === void 0)
          c in s && (r.set(
            c,
            u(() => /* @__PURE__ */ D(ue))
          ), Er(o));
        else {
          if (i && typeof c == "string") {
            var p = (
              /** @type {Source<number>} */
              r.get("length")
            ), h = Number(c);
            Number.isInteger(h) && h < p.v && y(p, h);
          }
          y(d, ue), Er(o);
        }
        return !0;
      },
      get(s, c, d) {
        var k;
        if (c === jt)
          return e;
        var p = r.get(c), h = c in s;
        if (p === void 0 && (!h || (k = Qe(s, c)) != null && k.writable) && (p = u(() => /* @__PURE__ */ D(Fe(h ? s[c] : ue))), r.set(c, p)), p !== void 0) {
          var v = l(p);
          return v === ue ? void 0 : v;
        }
        return Reflect.get(s, c, d);
      },
      getOwnPropertyDescriptor(s, c) {
        var d = Reflect.getOwnPropertyDescriptor(s, c);
        if (d && "value" in d) {
          var p = r.get(c);
          p && (d.value = l(p));
        } else if (d === void 0) {
          var h = r.get(c), v = h == null ? void 0 : h.v;
          if (h !== void 0 && v !== ue)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return d;
      },
      has(s, c) {
        var v;
        if (c === jt)
          return !0;
        var d = r.get(c), p = d !== void 0 && d.v !== ue || Reflect.has(s, c);
        if (d !== void 0 || $ !== null && (!p || (v = Qe(s, c)) != null && v.writable)) {
          d === void 0 && (d = u(() => /* @__PURE__ */ D(p ? Fe(s[c]) : ue)), r.set(c, d));
          var h = l(d);
          if (h === ue)
            return !1;
        }
        return p;
      },
      set(s, c, d, p) {
        var K;
        var h = r.get(c), v = c in s;
        if (i && c === "length")
          for (var k = d; k < /** @type {Source<number>} */
          h.v; k += 1) {
            var V = r.get(k + "");
            V !== void 0 ? y(V, ue) : k in s && (V = u(() => /* @__PURE__ */ D(ue)), r.set(k + "", V));
          }
        h === void 0 ? (!v || (K = Qe(s, c)) != null && K.writable) && (h = u(() => /* @__PURE__ */ D(void 0)), y(
          h,
          u(() => Fe(d))
        ), r.set(c, h)) : (v = h.v !== ue, y(
          h,
          u(() => Fe(d))
        ));
        var _ = Reflect.getOwnPropertyDescriptor(s, c);
        if (_ != null && _.set && _.set.call(p, d), !v) {
          if (i && typeof c == "string") {
            var q = (
              /** @type {Source<number>} */
              r.get("length")
            ), ce = Number(c);
            Number.isInteger(ce) && ce >= q.v && y(q, ce + 1);
          }
          Er(o);
        }
        return !0;
      },
      ownKeys(s) {
        l(o);
        var c = Reflect.ownKeys(s).filter((h) => {
          var v = r.get(h);
          return v === void 0 || v.v !== ue;
        });
        for (var [d, p] of r)
          p.v !== ue && !(d in s) && c.push(d);
        return c;
      },
      setPrototypeOf() {
        to();
      }
    }
  );
}
function Er(e, t = 1) {
  y(e, e.v + t);
}
// @__NO_SIDE_EFFECTS__
function sr(e) {
  var t = ke | Se, r = j !== null && (j.f & ke) !== 0 ? (
    /** @type {Derived} */
    j
  ) : null;
  return $ === null || r !== null && (r.f & he) !== 0 ? t |= he : $.f |= Qa, {
    ctx: ie,
    deps: null,
    effects: null,
    equals: ai,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: r ?? $
  };
}
// @__NO_SIDE_EFFECTS__
function It(e) {
  const t = /* @__PURE__ */ sr(e);
  return yi(t), t;
}
// @__NO_SIDE_EFFECTS__
function fo(e) {
  const t = /* @__PURE__ */ sr(e);
  return t.equals = Or, t;
}
function ci(e) {
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
function co(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & ke) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function di(e) {
  var t, r = $;
  Ue(co(e));
  try {
    ci(e), t = wi(e);
  } finally {
    Ue(r);
  }
  return t;
}
function hi(e) {
  var t = di(e), r = (Me || (e.f & he) !== 0) && e.deps !== null ? at : fe;
  _e(e, r), e.equals(t) || (e.v = t, e.wv = ki());
}
const zt = /* @__PURE__ */ new Map();
function gi(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: ai,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function D(e, t) {
  const r = gi(e);
  return yi(r), r;
}
// @__NO_SIDE_EFFECTS__
function Fr(e, t = !1) {
  const r = gi(e);
  return t || (r.equals = Or), r;
}
function y(e, t, r = !1) {
  j !== null && !Te && fi() && (j.f & (ke | zr)) !== 0 && !(ne != null && ne.includes(e)) && ro();
  let i = r ? Fe(t) : t;
  return ho(e, i);
}
function ho(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    Dt ? zt.set(e, t) : zt.set(e, r), e.v = t, (e.f & ke) !== 0 && ((e.f & Se) !== 0 && di(
      /** @type {Derived} */
      e
    ), _e(e, (e.f & he) === 0 ? fe : at)), e.wv = ki(), vi(e, Se), $ !== null && ($.f & fe) !== 0 && ($.f & (Pe | rt)) === 0 && (ve === null ? bo([e]) : ve.push(e));
  }
  return t;
}
function vi(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, o = 0; o < i; o++) {
      var n = r[o], u = n.f;
      (u & Se) === 0 && (_e(n, t), (u & (fe | he)) !== 0 && ((u & ke) !== 0 ? vi(
        /** @type {Derived} */
        n,
        at
      ) : dr(
        /** @type {Effect} */
        n
      )));
    }
}
function ur(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let z = !1;
function vt(e) {
  z = e;
}
let N;
function Be(e) {
  if (e === null)
    throw ur(), pt;
  return N = e;
}
function yt() {
  return Be(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ge(N)
  );
}
function Z(e) {
  if (z) {
    if (/* @__PURE__ */ Ge(N) !== null)
      throw ur(), pt;
    N = e;
  }
}
function go() {
  for (var e = 0, t = N; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === oi) {
        if (e === 0) return t;
        e -= 1;
      } else (r === Hr || r === ni) && (e += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ge(t)
    );
    t.remove(), t = i;
  }
}
var Na, bi, pi, mi;
function Vr() {
  if (Na === void 0) {
    Na = window, bi = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    pi = Qe(t, "firstChild").get, mi = Qe(t, "nextSibling").get, Sa(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Sa(r) && (r.__t = void 0);
  }
}
function fr(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function pe(e) {
  return pi.call(e);
}
// @__NO_SIDE_EFFECTS__
function Ge(e) {
  return mi.call(e);
}
function G(e, t) {
  if (!z)
    return /* @__PURE__ */ pe(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ pe(N)
  );
  return r === null && (r = N.appendChild(fr())), Be(r), r;
}
function Vt(e, t) {
  if (!z) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ pe(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Ge(r) : r;
  }
  return N;
}
function Y(e, t = 1, r = !1) {
  let i = z ? N : e;
  for (var o; t--; )
    o = i, i = /** @type {TemplateNode} */
    /* @__PURE__ */ Ge(i);
  if (!z)
    return i;
  var n = i == null ? void 0 : i.nodeType;
  if (r && n !== 3) {
    var u = fr();
    return i === null ? o == null || o.after(u) : i.before(u), Be(u), u;
  }
  return Be(i), /** @type {TemplateNode} */
  i;
}
function vo(e) {
  e.textContent = "";
}
let Kt = !1, rr = !1, ar = null, et = !1, Dt = !1;
function za(e) {
  Dt = e;
}
let $t = [];
let j = null, Te = !1;
function Ve(e) {
  j = e;
}
let $ = null;
function Ue(e) {
  $ = e;
}
let ne = null;
function yi(e) {
  j !== null && j.f & Ir && (ne === null ? ne = [e] : ne.push(e));
}
let ae = null, de = 0, ve = null;
function bo(e) {
  ve = e;
}
let Ai = 1, ir = 0, Me = !1;
function ki() {
  return ++Ai;
}
function qt(e) {
  var h;
  var t = e.f;
  if ((t & Se) !== 0)
    return !0;
  if ((t & at) !== 0) {
    var r = e.deps, i = (t & he) !== 0;
    if (r !== null) {
      var o, n, u = (t & tr) !== 0, s = i && $ !== null && !Me, c = r.length;
      if (u || s) {
        var d = (
          /** @type {Derived} */
          e
        ), p = d.parent;
        for (o = 0; o < c; o++)
          n = r[o], (u || !((h = n == null ? void 0 : n.reactions) != null && h.includes(d))) && (n.reactions ?? (n.reactions = [])).push(d);
        u && (d.f ^= tr), s && p !== null && (p.f & he) === 0 && (d.f ^= he);
      }
      for (o = 0; o < c; o++)
        if (n = r[o], qt(
          /** @type {Derived} */
          n
        ) && hi(
          /** @type {Derived} */
          n
        ), n.wv > e.wv)
          return !0;
    }
    (!i || $ !== null && !Me) && _e(e, fe);
  }
  return !1;
}
function po(e, t) {
  for (var r = t; r !== null; ) {
    if ((r.f & er) !== 0)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= er;
      }
    r = r.parent;
  }
  throw Kt = !1, e;
}
function Da(e) {
  return (e.f & lr) === 0 && (e.parent === null || (e.parent.f & er) === 0);
}
function cr(e, t, r, i) {
  if (Kt) {
    if (r === null && (Kt = !1), Da(t))
      throw e;
    return;
  }
  if (r !== null && (Kt = !0), po(e, t), Da(t))
    throw e;
}
function _i(e, t, r = !0) {
  var i = e.reactions;
  if (i !== null)
    for (var o = 0; o < i.length; o++) {
      var n = i[o];
      ne != null && ne.includes(e) || ((n.f & ke) !== 0 ? _i(
        /** @type {Derived} */
        n,
        t,
        !1
      ) : t === n && (r ? _e(n, Se) : (n.f & fe) !== 0 && _e(n, at), dr(
        /** @type {Effect} */
        n
      )));
    }
}
function wi(e) {
  var k;
  var t = ae, r = de, i = ve, o = j, n = Me, u = ne, s = ie, c = Te, d = e.f;
  ae = /** @type {null | Value[]} */
  null, de = 0, ve = null, Me = (d & he) !== 0 && (Te || !et || j === null), j = (d & (Pe | rt)) === 0 ? e : null, ne = null, Pa(e.ctx), Te = !1, ir++, e.f |= Ir;
  try {
    var p = (
      /** @type {Function} */
      (0, e.fn)()
    ), h = e.deps;
    if (ae !== null) {
      var v;
      if (nr(e, de), h !== null && de > 0)
        for (h.length = de + ae.length, v = 0; v < ae.length; v++)
          h[de + v] = ae[v];
      else
        e.deps = h = ae;
      if (!Me)
        for (v = de; v < h.length; v++)
          ((k = h[v]).reactions ?? (k.reactions = [])).push(e);
    } else h !== null && de < h.length && (nr(e, de), h.length = de);
    if (fi() && ve !== null && !Te && h !== null && (e.f & (ke | at | Se)) === 0)
      for (v = 0; v < /** @type {Source[]} */
      ve.length; v++)
        _i(
          ve[v],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (ir++, ve !== null && (i === null ? i = ve : i.push(.../** @type {Source[]} */
    ve))), p;
  } finally {
    ae = t, de = r, ve = i, j = o, Me = n, ne = u, Pa(s), Te = c, e.f ^= Ir;
  }
}
function mo(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var i = Nn.call(r, e);
    if (i !== -1) {
      var o = r.length - 1;
      o === 0 ? r = t.reactions = null : (r[i] = r[o], r.pop());
    }
  }
  r === null && (t.f & ke) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ae === null || !ae.includes(t)) && (_e(t, at), (t.f & (he | tr)) === 0 && (t.f ^= tr), ci(
    /** @type {Derived} **/
    t
  ), nr(
    /** @type {Derived} **/
    t,
    0
  ));
}
function nr(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var i = t; i < r.length; i++)
      mo(e, r[i]);
}
function Mr(e) {
  var t = e.f;
  if ((t & lr) === 0) {
    _e(e, fe);
    var r = $, i = ie, o = et;
    $ = e, et = !0;
    try {
      (t & zr) !== 0 ? xo(e) : xi(e), Ei(e);
      var n = wi(e);
      e.teardown = typeof n == "function" ? n : null, e.wv = Ai;
      var u = e.deps, s;
    } catch (c) {
      cr(c, e, r, i || e.ctx);
    } finally {
      et = o, $ = r;
    }
  }
}
function yo() {
  try {
    Jn();
  } catch (e) {
    if (ar !== null)
      cr(e, ar, null);
    else
      throw e;
  }
}
function Ci() {
  var e = et;
  try {
    var t = 0;
    for (et = !0; $t.length > 0; ) {
      t++ > 1e3 && yo();
      var r = $t, i = r.length;
      $t = [];
      for (var o = 0; o < i; o++) {
        var n = ko(r[o]);
        Ao(n);
      }
      zt.clear();
    }
  } finally {
    rr = !1, et = e, ar = null;
  }
}
function Ao(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var i = e[r];
      if ((i.f & (lr | mt)) === 0)
        try {
          qt(i) && (Mr(i), i.deps === null && i.first === null && i.nodes_start === null && (i.teardown === null ? Ii(i) : i.fn = null));
        } catch (o) {
          cr(o, i, null, i.ctx);
        }
    }
}
function dr(e) {
  rr || (rr = !0, queueMicrotask(Ci));
  for (var t = ar = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (rt | Pe)) !== 0) {
      if ((r & fe) === 0) return;
      t.f ^= fe;
    }
  }
  $t.push(t);
}
function ko(e) {
  for (var t = [], r = e; r !== null; ) {
    var i = r.f, o = (i & (Pe | rt)) !== 0, n = o && (i & fe) !== 0;
    if (!n && (i & mt) === 0) {
      if ((i & Xa) !== 0)
        t.push(r);
      else if (o)
        r.f ^= fe;
      else
        try {
          qt(r) && Mr(r);
        } catch (c) {
          cr(c, r, null, r.ctx);
        }
      var u = r.first;
      if (u !== null) {
        r = u;
        continue;
      }
    }
    var s = r.parent;
    for (r = r.next; r === null && s !== null; )
      r = s.next, s = s.parent;
  }
  return t;
}
function E(e) {
  for (var t; ; ) {
    if (Gn(), $t.length === 0)
      return (
        /** @type {T} */
        t
      );
    rr = !0, Ci();
  }
}
async function xr() {
  await Promise.resolve(), E();
}
function l(e) {
  var t = e.f, r = (t & ke) !== 0;
  if (j !== null && !Te) {
    if (!(ne != null && ne.includes(e))) {
      var i = j.deps;
      e.rv < ir && (e.rv = ir, ae === null && i !== null && i[de] === e ? de++ : ae === null ? ae = [e] : (!Me || !ae.includes(e)) && ae.push(e));
    }
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), n = o.parent;
    n !== null && (n.f & he) === 0 && (o.f ^= he);
  }
  return r && (o = /** @type {Derived} */
  e, qt(o) && hi(o)), Dt && zt.has(e) ? zt.get(e) : e.v;
}
function tt(e) {
  var t = Te;
  try {
    return Te = !0, e();
  } finally {
    Te = t;
  }
}
const _o = -7169;
function _e(e, t) {
  e.f = e.f & _o | t;
}
function wo(e) {
  $ === null && j === null && Kn(), j !== null && (j.f & he) !== 0 && $ === null && Wn(), Dt && Yn();
}
function Co(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function it(e, t, r, i = !0) {
  var o = $, n = {
    ctx: ie,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Se,
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
      Mr(n), n.f |= Fn;
    } catch (c) {
      throw Ze(n), c;
    }
  else t !== null && dr(n);
  var u = r && n.deps === null && n.first === null && n.nodes_start === null && n.teardown === null && (n.f & (Qa | er)) === 0;
  if (!u && i && (o !== null && Co(n, o), j !== null && (j.f & ke) !== 0)) {
    var s = (
      /** @type {Derived} */
      j
    );
    (s.effects ?? (s.effects = [])).push(n);
  }
  return n;
}
function Br(e) {
  const t = it(or, null, !1);
  return _e(t, fe), t.teardown = e, t;
}
function Rr(e) {
  wo();
  var t = $ !== null && ($.f & Pe) !== 0 && ie !== null && !ie.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      ie
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: $,
      reaction: j
    });
  } else {
    var i = Ur(e);
    return i;
  }
}
function Lo(e) {
  const t = it(rt, e, !0);
  return () => {
    Ze(t);
  };
}
function Eo(e) {
  const t = it(rt, e, !0);
  return (r = {}) => new Promise((i) => {
    r.outro ? $r(t, () => {
      Ze(t), i(void 0);
    }) : (Ze(t), i(void 0));
  });
}
function Ur(e) {
  return it(Xa, e, !1);
}
function Zr(e) {
  return it(or, e, !0);
}
function xe(e, t = [], r = sr) {
  const i = t.map(r);
  return Li(() => e(...i.map(l)));
}
function Li(e, t = 0) {
  return it(or | zr | t, e, !0);
}
function jr(e, t = !0) {
  return it(or | Pe, e, !0, t);
}
function Ei(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Dt, i = j;
    za(!0), Ve(null);
    try {
      t.call(null);
    } finally {
      za(r), Ve(i);
    }
  }
}
function xi(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var i = r.next;
    (r.f & rt) !== 0 ? r.parent = null : Ze(r, t), r = i;
  }
}
function xo(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Pe) === 0 && Ze(t), t = r;
  }
}
function Ze(e, t = !0) {
  var r = !1;
  (t || (e.f & Mn) !== 0) && e.nodes_start !== null && (Ti(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), r = !0), xi(e, t && !r), nr(e, 0), _e(e, lr);
  var i = e.transitions;
  if (i !== null)
    for (const n of i)
      n.stop();
  Ei(e);
  var o = e.parent;
  o !== null && o.first !== null && Ii(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function Ti(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ge(e)
    );
    e.remove(), e = r;
  }
}
function Ii(e) {
  var t = e.parent, r = e.prev, i = e.next;
  r !== null && (r.next = i), i !== null && (i.prev = r), t !== null && (t.first === e && (t.first = i), t.last === e && (t.last = r));
}
function $r(e, t) {
  var r = [];
  Vi(e, r, !0), To(r, () => {
    Ze(e), t && t();
  });
}
function To(e, t) {
  var r = e.length;
  if (r > 0) {
    var i = () => --r || t();
    for (var o of e)
      o.out(i);
  } else
    t();
}
function Vi(e, t, r) {
  if ((e.f & mt) === 0) {
    if (e.f ^= mt, e.transitions !== null)
      for (const u of e.transitions)
        (u.is_global || r) && t.push(u);
    for (var i = e.first; i !== null; ) {
      var o = i.next, n = (i.f & Dr) !== 0 || (i.f & Pe) !== 0;
      Vi(i, t, n ? r : !1), i = o;
    }
  }
}
function qa(e) {
  Ri(e, !0);
}
function Ri(e, t) {
  if ((e.f & mt) !== 0) {
    e.f ^= mt, (e.f & fe) === 0 && (e.f ^= fe), qt(e) && (_e(e, Se), dr(e));
    for (var r = e.first; r !== null; ) {
      var i = r.next, o = (r.f & Dr) !== 0 || (r.f & Pe) !== 0;
      Ri(r, o ? t : !1), r = i;
    }
    if (e.transitions !== null)
      for (const n of e.transitions)
        (n.is_global || t) && n.in();
  }
}
const Io = ["touchstart", "touchmove"];
function Vo(e) {
  return Io.includes(e);
}
function Ro(e, t) {
  if (t) {
    const r = document.body;
    e.autofocus = !0, qr(() => {
      document.activeElement === r && e.focus();
    });
  }
}
let Oa = !1;
function ji() {
  Oa || (Oa = !0, document.addEventListener(
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
function $i(e) {
  var t = j, r = $;
  Ve(null), Ue(null);
  try {
    return e();
  } finally {
    Ve(t), Ue(r);
  }
}
function jo(e, t, r, i = r) {
  e.addEventListener(t, () => $i(r));
  const o = e.__on_r;
  o ? e.__on_r = () => {
    o(), i(!0);
  } : e.__on_r = () => i(!0), ji();
}
const Si = /* @__PURE__ */ new Set(), Sr = /* @__PURE__ */ new Set();
function $o(e, t, r, i = {}) {
  function o(n) {
    if (i.capture || Rt.call(t, n), !n.cancelBubble)
      return $i(() => r == null ? void 0 : r.call(this, n));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? qr(() => {
    t.addEventListener(e, o, i);
  }) : t.addEventListener(e, o, i), o;
}
function He(e, t, r, i, o) {
  var n = { capture: i, passive: o }, u = $o(e, t, r, n);
  (t === document.body || t === window || t === document) && Br(() => {
    t.removeEventListener(e, u, n);
  });
}
function So(e) {
  for (var t = 0; t < e.length; t++)
    Si.add(e[t]);
  for (var r of Sr)
    r(e);
}
function Rt(e) {
  var K;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), i = e.type, o = ((K = e.composedPath) == null ? void 0 : K.call(e)) || [], n = (
    /** @type {null | Element} */
    o[0] || e.target
  ), u = 0, s = e.__root;
  if (s) {
    var c = o.indexOf(s);
    if (c !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var d = o.indexOf(t);
    if (d === -1)
      return;
    c <= d && (u = c);
  }
  if (n = /** @type {Element} */
  o[u] || e.target, n !== t) {
    St(e, "currentTarget", {
      configurable: !0,
      get() {
        return n || r;
      }
    });
    var p = j, h = $;
    Ve(null), Ue(null);
    try {
      for (var v, k = []; n !== null; ) {
        var V = n.assignedSlot || n.parentNode || /** @type {any} */
        n.host || null;
        try {
          var _ = n["__" + i];
          if (_ != null && (!/** @type {any} */
          n.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === n))
            if (Wa(_)) {
              var [q, ...ce] = _;
              q.apply(n, [e, ...ce]);
            } else
              _.call(n, e);
        } catch (ee) {
          v ? k.push(ee) : v = ee;
        }
        if (e.cancelBubble || V === t || V === null)
          break;
        n = V;
      }
      if (v) {
        for (let ee of k)
          queueMicrotask(() => {
            throw ee;
          });
        throw v;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Ve(p), Ue(h);
    }
  }
}
function Gr(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Ie(e, t) {
  var r = (
    /** @type {Effect} */
    $
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function we(e, t) {
  var r = (t & lo) !== 0, i = (t & so) !== 0, o, n = !e.startsWith("<!>");
  return () => {
    if (z)
      return Ie(N, null), N;
    o === void 0 && (o = Gr(n ? e : "<!>" + e), r || (o = /** @type {Node} */
    /* @__PURE__ */ pe(o)));
    var u = (
      /** @type {TemplateNode} */
      i || bi ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (r) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ pe(u)
      ), c = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Ie(s, c);
    } else
      Ie(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function hr(e, t, r = "svg") {
  var i = !e.startsWith("<!>"), o = `<${r}>${i ? e : "<!>" + e}</${r}>`, n;
  return () => {
    if (z)
      return Ie(N, null), N;
    if (!n) {
      var u = (
        /** @type {DocumentFragment} */
        Gr(o)
      ), s = (
        /** @type {Element} */
        /* @__PURE__ */ pe(u)
      );
      n = /** @type {Element} */
      /* @__PURE__ */ pe(s);
    }
    var c = (
      /** @type {TemplateNode} */
      n.cloneNode(!0)
    );
    return Ie(c, c), c;
  };
}
function Gt() {
  if (z)
    return Ie(N, null), N;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = fr();
  return e.append(t, r), Ie(t, r), e;
}
function O(e, t) {
  if (z) {
    $.nodes_end = N, yt();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Po(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function Pi(e, t) {
  return Ni(e, t);
}
function No(e, t) {
  Vr(), t.intro = t.intro ?? !1;
  const r = t.target, i = z, o = N;
  try {
    for (var n = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ pe(r)
    ); n && (n.nodeType !== 8 || /** @type {Comment} */
    n.data !== Hr); )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Ge(n);
    if (!n)
      throw pt;
    vt(!0), Be(
      /** @type {Comment} */
      n
    ), yt();
    const u = Ni(e, { ...t, anchor: n });
    if (N === null || N.nodeType !== 8 || /** @type {Comment} */
    N.data !== oi)
      throw ur(), pt;
    return vt(!1), /**  @type {Exports} */
    u;
  } catch (u) {
    if (u === pt)
      return t.recover === !1 && Xn(), Vr(), vo(r), vt(!1), Pi(e, t);
    throw u;
  } finally {
    vt(i), Be(o);
  }
}
const ht = /* @__PURE__ */ new Map();
function Ni(e, { target: t, anchor: r, props: i = {}, events: o, context: n, intro: u = !0 }) {
  Vr();
  var s = /* @__PURE__ */ new Set(), c = (h) => {
    for (var v = 0; v < h.length; v++) {
      var k = h[v];
      if (!s.has(k)) {
        s.add(k);
        var V = Vo(k);
        t.addEventListener(k, Rt, { passive: V });
        var _ = ht.get(k);
        _ === void 0 ? (document.addEventListener(k, Rt, { passive: V }), ht.set(k, 1)) : ht.set(k, _ + 1);
      }
    }
  };
  c(zn(Si)), Sr.add(c);
  var d = void 0, p = Eo(() => {
    var h = r ?? t.appendChild(fr());
    return jr(() => {
      if (n) {
        si({});
        var v = (
          /** @type {ComponentContext} */
          ie
        );
        v.c = n;
      }
      o && (i.$$events = o), z && Ie(
        /** @type {TemplateNode} */
        h,
        null
      ), d = e(h, i) || {}, z && ($.nodes_end = N), n && ui();
    }), () => {
      var V;
      for (var v of s) {
        t.removeEventListener(v, Rt);
        var k = (
          /** @type {number} */
          ht.get(v)
        );
        --k === 0 ? (document.removeEventListener(v, Rt), ht.delete(v)) : ht.set(v, k);
      }
      Sr.delete(c), h !== r && ((V = h.parentNode) == null || V.removeChild(h));
    };
  });
  return Pr.set(d, p), d;
}
let Pr = /* @__PURE__ */ new WeakMap();
function zo(e, t) {
  const r = Pr.get(e);
  return r ? (Pr.delete(e), r(t)) : Promise.resolve();
}
function W(e, t, [r, i] = [0, 0]) {
  z && r === 0 && yt();
  var o = e, n = null, u = null, s = ue, c = r > 0 ? Dr : 0, d = !1;
  const p = (v, k = !0) => {
    d = !0, h(k, v);
  }, h = (v, k) => {
    if (s === (s = v)) return;
    let V = !1;
    if (z && i !== -1) {
      if (r === 0) {
        const q = (
          /** @type {Comment} */
          o.data
        );
        q === Hr ? i = 0 : q === ni ? i = 1 / 0 : (i = parseInt(q.substring(1)), i !== i && (i = s ? 1 / 0 : -1));
      }
      const _ = i > r;
      !!s === _ && (o = go(), Be(o), vt(!1), V = !0, i = -1);
    }
    s ? (n ? qa(n) : k && (n = jr(() => k(o))), u && $r(u, () => {
      u = null;
    })) : (u ? qa(u) : k && (u = jr(() => k(o, [r + 1, i]))), n && $r(n, () => {
      n = null;
    })), V && vt(!0);
  };
  Li(() => {
    d = !1, t(p), d || h(null, null);
  }, c), z && (o = N);
}
function Xe(e, t, r = !1, i = !1, o = !1) {
  var n = e, u = "";
  xe(() => {
    var s = (
      /** @type {Effect} */
      $
    );
    if (u === (u = t() ?? "")) {
      z && yt();
      return;
    }
    if (s.nodes_start !== null && (Ti(
      s.nodes_start,
      /** @type {TemplateNode} */
      s.nodes_end
    ), s.nodes_start = s.nodes_end = null), u !== "") {
      if (z) {
        N.data;
        for (var c = yt(), d = c; c !== null && (c.nodeType !== 8 || /** @type {Comment} */
        c.data !== ""); )
          d = c, c = /** @type {TemplateNode} */
          /* @__PURE__ */ Ge(c);
        if (c === null)
          throw ur(), pt;
        Ie(N, d), n = Be(c);
        return;
      }
      var p = u + "";
      r ? p = `<svg>${p}</svg>` : i && (p = `<math>${p}</math>`);
      var h = Gr(p);
      if ((r || i) && (h = /** @type {Element} */
      /* @__PURE__ */ pe(h)), Ie(
        /** @type {TemplateNode} */
        /* @__PURE__ */ pe(h),
        /** @type {TemplateNode} */
        h.lastChild
      ), r || i)
        for (; /* @__PURE__ */ pe(h); )
          n.before(
            /** @type {Node} */
            /* @__PURE__ */ pe(h)
          );
      else
        n.before(h);
    }
  });
}
function Do(e, t, r, i, o) {
  var s;
  z && yt();
  var n = (s = t.$$slots) == null ? void 0 : s[r], u = !1;
  n === !0 && (n = t.children, u = !0), n === void 0 || n(e, u ? () => i : i);
}
const Ha = [...` 	
\r\f \v\uFEFF`];
function qo(e, t, r) {
  var i = "" + e;
  if (r) {
    for (var o in r)
      if (r[o])
        i = i ? i + " " + o : o;
      else if (i.length)
        for (var n = o.length, u = 0; (u = i.indexOf(o, u)) >= 0; ) {
          var s = u + n;
          (u === 0 || Ha.includes(i[u - 1])) && (s === i.length || Ha.includes(i[s])) ? i = (u === 0 ? "" : i.substring(0, u)) + i.substring(s + 1) : u = s;
        }
  }
  return i === "" ? null : i;
}
function Oo(e, t, r, i, o, n) {
  var u = e.__className;
  if (z || u !== r || u === void 0) {
    var s = qo(r, i, n);
    (!z || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : e.className = s), e.__className = r;
  } else if (n && o !== n)
    for (var c in n) {
      var d = !!n[c];
      (o == null || d !== !!o[c]) && e.classList.toggle(c, d);
    }
  return n;
}
const Ho = Symbol("is custom element"), Fo = Symbol("is html");
function Fa(e) {
  if (z) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var i = e.value;
          R(e, "value", null), e.value = i;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          R(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = r, Zn(r), ji();
  }
}
function Mo(e, t) {
  var r = zi(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function R(e, t, r, i) {
  var o = zi(e);
  z && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = r) && (t === "loading" && (e[Bn] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Bo(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function zi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Ho]: e.nodeName.includes("-"),
      [Fo]: e.namespaceURI === uo
    })
  );
}
var Ma = /* @__PURE__ */ new Map();
function Bo(e) {
  var t = Ma.get(e.nodeName);
  if (t) return t;
  Ma.set(e.nodeName, t = []);
  for (var r, i = e, o = Element.prototype; o !== i; ) {
    r = Dn(i);
    for (var n in r)
      r[n].set && t.push(n);
    i = Ka(i);
  }
  return t;
}
function Uo(e, t, r = t) {
  jo(e, "change", (i) => {
    var o = i ? e.defaultChecked : e.checked;
    r(o);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (z && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  tt(t) == null) && r(e.checked), Zr(() => {
    var i = t();
    e.checked = !!i;
  });
}
function Ba(e, t) {
  return e === t || (e == null ? void 0 : e[jt]) === t;
}
function Yt(e = {}, t, r, i) {
  return Ur(() => {
    var o, n;
    return Zr(() => {
      o = n, n = [], tt(() => {
        e !== r(...n) && (t(e, ...n), o && Ba(r(...o), e) && t(null, ...o));
      });
    }), () => {
      qr(() => {
        n && Ba(r(...n), e) && t(null, ...n);
      });
    };
  }), e;
}
let Wt = !1, Nr = Symbol();
function Zo(e, t, r) {
  const i = r[t] ?? (r[t] = {
    store: null,
    source: /* @__PURE__ */ Fr(void 0),
    unsubscribe: bt
  });
  if (i.store !== e && !(Nr in r))
    if (i.unsubscribe(), i.store = e ?? null, e == null)
      i.source.v = void 0, i.unsubscribe = bt;
    else {
      var o = !0;
      i.unsubscribe = Oi(e, (n) => {
        o ? i.source.v = n : y(i.source, n);
      }), o = !1;
    }
  return e && Nr in r ? Xt(e) : l(i.source);
}
function Go() {
  const e = {};
  function t() {
    Br(() => {
      for (var r in e)
        e[r].unsubscribe();
      St(e, Nr, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function Yo(e) {
  var t = Wt;
  try {
    return Wt = !1, [e(), Wt];
  } finally {
    Wt = t;
  }
}
function Ua(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function x(e, t, r, i) {
  var nt;
  var o = (r & ao) !== 0, n = !0, u = (r & no) !== 0, s = (r & oo) !== 0, c = !1, d;
  u ? [d, c] = Yo(() => (
    /** @type {V} */
    e[t]
  )) : d = /** @type {V} */
  e[t];
  var p = jt in e || ei in e, h = u && (((nt = Qe(e, t)) == null ? void 0 : nt.set) ?? (p && t in e && ((H) => e[t] = H))) || void 0, v = (
    /** @type {V} */
    i
  ), k = !0, V = !1, _ = () => (V = !0, k && (k = !1, s ? v = tt(
    /** @type {() => V} */
    i
  ) : v = /** @type {V} */
  i), v);
  d === void 0 && i !== void 0 && (h && n && Qn(), d = _(), h && h(d));
  var q;
  if (q = () => {
    var H = (
      /** @type {V} */
      e[t]
    );
    return H === void 0 ? _() : (k = !0, V = !1, H);
  }, (r & io) === 0)
    return q;
  if (h) {
    var ce = e.$$legacy;
    return function(H, oe) {
      return arguments.length > 0 ? ((!oe || ce || c) && h(oe ? q() : H), H) : q();
    };
  }
  var K = !1, ee = /* @__PURE__ */ Fr(d), J = /* @__PURE__ */ sr(() => {
    var H = q(), oe = l(ee);
    return K ? (K = !1, oe) : ee.v = H;
  });
  return u && l(J), o || (J.equals = Or), function(H, oe) {
    if (arguments.length > 0) {
      const me = oe ? l(J) : u ? Fe(H) : H;
      if (!J.equals(me)) {
        if (K = !0, y(ee, me), V && v !== void 0 && (v = me), Ua(J))
          return H;
        tt(() => l(J));
      }
      return H;
    }
    return Ua(J) ? J.v : l(J);
  };
}
function Wo(e) {
  return new Ko(e);
}
var $e, be;
class Ko {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    Cr(this, $e);
    /** @type {Record<string, any>} */
    Cr(this, be);
    var n;
    var r = /* @__PURE__ */ new Map(), i = (u, s) => {
      var c = /* @__PURE__ */ Fr(s);
      return r.set(u, c), c;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(u, s) {
          return l(r.get(s) ?? i(s, Reflect.get(u, s)));
        },
        has(u, s) {
          return s === ei ? !0 : (l(r.get(s) ?? i(s, Reflect.get(u, s))), Reflect.has(u, s));
        },
        set(u, s, c) {
          return y(r.get(s) ?? i(s, c), c), Reflect.set(u, s, c);
        }
      }
    );
    Lr(this, be, (t.hydrate ? No : Pi)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((n = t == null ? void 0 : t.props) != null && n.$$host) || t.sync === !1) && E(), Lr(this, $e, o.$$events);
    for (const u of Object.keys(se(this, be)))
      u === "$set" || u === "$destroy" || u === "$on" || St(this, u, {
        get() {
          return se(this, be)[u];
        },
        /** @param {any} value */
        set(s) {
          se(this, be)[u] = s;
        },
        enumerable: !0
      });
    se(this, be).$set = /** @param {Record<string, any>} next */
    (u) => {
      Object.assign(o, u);
    }, se(this, be).$destroy = () => {
      zo(se(this, be));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    se(this, be).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    se(this, $e)[t] = se(this, $e)[t] || [];
    const i = (...o) => r.call(this, ...o);
    return se(this, $e)[t].push(i), () => {
      se(this, $e)[t] = se(this, $e)[t].filter(
        /** @param {any} fn */
        (o) => o !== i
      );
    };
  }
  $destroy() {
    se(this, be).$destroy();
  }
}
$e = new WeakMap(), be = new WeakMap();
let Di;
typeof HTMLElement == "function" && (Di = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, i) {
    super();
    /** The Svelte component constructor */
    Ae(this, "$$ctor");
    /** Slots */
    Ae(this, "$$s");
    /** @type {any} The Svelte component instance */
    Ae(this, "$$c");
    /** Whether or not the custom element is connected */
    Ae(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    Ae(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    Ae(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    Ae(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    Ae(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    Ae(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    Ae(this, "$$me");
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
        return (n) => {
          const u = document.createElement("slot");
          o !== "default" && (u.name = o), O(n, u);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, i = Jo(this);
      for (const o of this.$$s)
        o in i && (o === "default" && !this.$$d.children ? (this.$$d.children = t(o), r.default = !0) : r[o] = t(o));
      for (const o of this.attributes) {
        const n = this.$$g_p(o.name);
        n in this.$$d || (this.$$d[n] = Jt(n, o.value, this.$$p_d, "toProp"));
      }
      for (const o in this.$$p_d)
        !(o in this.$$d) && this[o] !== void 0 && (this.$$d[o] = this[o], delete this[o]);
      this.$$c = Wo({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = Lo(() => {
        Zr(() => {
          var o;
          this.$$r = !0;
          for (const n of Qt(this.$$c)) {
            if (!((o = this.$$p_d[n]) != null && o.reflect)) continue;
            this.$$d[n] = this.$$c[n];
            const u = Jt(
              n,
              this.$$d[n],
              this.$$p_d,
              "toAttribute"
            );
            u == null ? this.removeAttribute(this.$$p_d[n].attribute || n) : this.setAttribute(this.$$p_d[n].attribute || n, u);
          }
          this.$$r = !1;
        });
      });
      for (const o in this.$$l)
        for (const n of this.$$l[o]) {
          const u = this.$$c.$on(o, n);
          this.$$l_u.set(n, u);
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Jt(t, i, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [t]: this.$$d[t] }));
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
    return Qt(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function Jt(e, t, r, i) {
  var n;
  const o = (n = r[e]) == null ? void 0 : n.type;
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
function Jo(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function Xo(e, t, r, i, o, n) {
  let u = class extends Di {
    constructor() {
      super(e, r, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Qt(t).map(
        (s) => (t[s].attribute || s).toLowerCase()
      );
    }
  };
  return Qt(t).forEach((s) => {
    St(u.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(c) {
        var h;
        c = Jt(s, c, t), this.$$d[s] = c;
        var d = this.$$c;
        if (d) {
          var p = (h = Qe(d, s)) == null ? void 0 : h.get;
          p ? d[s] = c : d.$set({ [s]: c });
        }
      }
    });
  }), i.forEach((s) => {
    St(u.prototype, s, {
      get() {
        var c;
        return (c = this.$$c) == null ? void 0 : c[s];
      }
    });
  }), e.element = /** @type {any} */
  u, u;
}
function qi(e) {
  ie === null && li(), Rr(() => {
    const t = tt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Qo(e) {
  ie === null && li(), qi(() => () => tt(e));
}
function Oi(e, t, r) {
  if (e == null)
    return t(void 0), bt;
  const i = tt(
    () => e.subscribe(
      t,
      // @ts-expect-error
      r
    )
  );
  return i.unsubscribe ? () => i.unsubscribe() : i;
}
const gt = [];
function el(e, t = bt) {
  let r = null;
  const i = /* @__PURE__ */ new Set();
  function o(s) {
    if (ii(e, s) && (e = s, r)) {
      const c = !gt.length;
      for (const d of i)
        d[1](), gt.push(d, e);
      if (c) {
        for (let d = 0; d < gt.length; d += 2)
          gt[d][0](gt[d + 1]);
        gt.length = 0;
      }
    }
  }
  function n(s) {
    o(s(
      /** @type {T} */
      e
    ));
  }
  function u(s, c = bt) {
    const d = [s, c];
    return i.add(d), i.size === 1 && (r = t(o, n) || bt), s(
      /** @type {T} */
      e
    ), () => {
      i.delete(d), i.size === 0 && r && (r(), r = null);
    };
  }
  return { set: o, update: n, subscribe: u };
}
function Xt(e) {
  let t;
  return Oi(e, (r) => t = r)(), t;
}
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (e) => Xt(globalThis.altchaI18n.store)[e],
  set: (e, t) => {
    Object.assign(Xt(globalThis.altchaI18n.store), {
      [e]: t
    }), globalThis.altchaI18n.store.set(Xt(globalThis.altchaI18n.store));
  },
  store: el({})
};
const tl = {
  ariaLinkLabel: "Besoek Altcha.org",
  enterCode: "Voer kode in",
  enterCodeAria: "Voer die kode in wat jy hoor. Druk Spasie om die klank af te speel.",
  error: "Verifikasie het misluk. Probeer later weer.",
  expired: "Verifikasie het verval. Probeer weer.",
  footer: 'Beskerm deur <a href="https://altcha.org/" target="_blank" aria-label="Besoek Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Kry 'n klankuitdaging",
  label: "Ek is nie 'n robot nie",
  loading: "Laai...",
  reload: "Laai weer",
  verify: "Verifieer",
  verificationRequired: "Verifikasie is vereis!",
  verified: "Geverifieer",
  verifying: "Verifieer...",
  waitAlert: "Verifieer... wag asseblief."
};
globalThis.altchaI18n.set("af", tl);
const rl = {
  ariaLinkLabel: "زور Altcha.org",
  enterCode: "أدخل الرمز",
  enterCodeAria: "أدخل الرمز الذي تسمعه. اضغط على المسافة لتشغيل الصوت.",
  error: "فشل التحقق. حاول مرة أخرى لاحقاً.",
  expired: "انتهت صلاحية التحقق. حاول مرة أخرى.",
  verificationRequired: "مطلوب التحقق!",
  footer: 'محمي بواسطة <a href="https://altcha.org/" target="_blank" aria-label="زور Altcha.org">ALTCHA</a>',
  getAudioChallenge: "احصل على تحدي صوتي",
  label: "أنا لست روبوتاً",
  loading: "جارٍ التحميل...",
  reload: "إعادة تحميل",
  verify: "تحقق",
  verified: "تم التحقق",
  verifying: "جارٍ التحقق...",
  waitAlert: "جارٍ التحقق... يرجى الانتظار."
};
globalThis.altchaI18n.set("ar", rl);
const al = {
  ariaLinkLabel: "Посетете Altcha.org",
  enterCode: "Въведете код",
  enterCodeAria: "Въведете кода, който чувате. Натиснете Space за възпроизвеждане на аудио.",
  error: "Проверката неуспешна. Моля, опитайте по-късно.",
  expired: "Времето за проверка изтече. Моля, опитайте отново.",
  verificationRequired: "Изисква се проверка!",
  footer: 'Защитено от <a href="https://altcha.org/" target="_blank" aria-label="Посетете Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Аудио проверка",
  label: "Аз не съм робот",
  loading: "Зареждане...",
  reload: "Презареди",
  verify: "Провери",
  verified: "Проверено",
  verifying: "Проверява се...",
  waitAlert: "Проверката е в процес... моля изчакайте."
};
globalThis.altchaI18n.set("bg", al);
const il = {
  ariaLinkLabel: "Наведаць Altcha.org",
  enterCode: "Увядзіце код",
  enterCodeAria: "Увядзіце код, які вы чуеце. Націсніце прабел, каб прайграць аўдыё.",
  error: "Праверка не прайшла. Паспрабуйце пазней.",
  expired: "Тэрмін праверкі скончыўся. Паспрабуйце зноў.",
  footer: 'Абаронена <a href="https://altcha.org/" target="_blank" aria-label="Наведаць Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Атрымаць аўдыё выклік",
  label: "Я не робат",
  loading: "Загрузка...",
  reload: "Перазагрузіць",
  verify: "Праверыць",
  verificationRequired: "Патрабуецца праверка!",
  verified: "Праверана",
  verifying: "Правяраем...",
  waitAlert: "Праверка... калі ласка, пачакайце."
};
globalThis.altchaI18n.set("be", il);
const nl = {
  ariaLinkLabel: "Posjetite Altcha.org",
  enterCode: "Unesite kod",
  enterCodeAria: "Unesite kod koji čujete. Pritisnite Space da biste pustili zvuk.",
  error: "Verifikacija nije uspjela. Pokušajte ponovo kasnije.",
  expired: "Verifikacija je istekla. Pokušajte ponovo.",
  footer: 'Zaštićeno od strane <a href="https://altcha.org/" target="_blank" aria-label="Posjetite Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Dohvatite audio izazov",
  label: "Nisam robot",
  loading: "Učitavanje...",
  reload: "Ponovno učitaj",
  verify: "Verifikuj",
  verificationRequired: "Verifikacija je obavezna!",
  verified: "Verifikovano",
  verifying: "Verifikacija u toku...",
  waitAlert: "Verifikacija u toku... molimo vas da sačekate."
};
globalThis.altchaI18n.set("bs", nl);
const ol = {
  ariaLinkLabel: "Visita Altcha.org",
  enterCode: "Introdueix el codi",
  enterCodeAria: "Introdueix el codi que escoltes. Prem Espai per reproduir l’àudio.",
  error: "Verificació fallida. Torna-ho a provar més tard.",
  expired: "Verificació expirada. Torna-ho a provar.",
  footer: 'Protegit per <a href="https://altcha.org/" target="_blank" aria-label="Visita Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Obtenir un desafiament d’àudio",
  label: "No sóc un robot",
  loading: "Carregant...",
  reload: "Torna a carregar",
  verify: "Verificar",
  verificationRequired: "Es requereix verificació!",
  verified: "Verificat",
  verifying: "Verificant...",
  waitAlert: "Verificant... si us plau, espera."
};
globalThis.altchaI18n.set("ca", ol);
const ll = {
  ariaLinkLabel: "Navštivte Altcha.org",
  enterCode: "Zadejte kód",
  enterCodeAria: "Zadejte kód, který slyšíte. Stisknutím mezerníku přehrajete zvuk.",
  error: "Ověření selhalo. Zkuste to prosím později.",
  expired: "Ověření vypršelo. Zkuste to prosím znovu.",
  verificationRequired: "Vyžaduje se ověření!",
  footer: 'Chráněno pomocí <a href="https://altcha.org/" target="_blank" aria-label="Navštivte Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Získat audio výzvu",
  label: "Nejsem robot",
  loading: "Načítání...",
  reload: "Znovu načíst",
  verify: "Ověřit",
  verified: "Ověřeno",
  verifying: "Ověřování...",
  waitAlert: "Probíhá ověření... prosím počkejte."
};
globalThis.altchaI18n.set("cs", ll);
const sl = {
  ariaLinkLabel: "Besøg Altcha.org",
  enterCode: "Indtast kode",
  enterCodeAria: "Indtast den kode, du hører. Tryk på mellemrumstasten for at afspille lyd.",
  error: "Verificering mislykkedes. Prøv venligst igen senere.",
  expired: "Verificering udløbet. Prøv venligst igen.",
  verificationRequired: "Verificering kræves!",
  footer: 'Beskyttet af <a href="https://altcha.org/" target="_blank" aria-label="Besøg Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Hent lydudfordring",
  label: "Jeg er ikke en robot",
  loading: "Indlæser...",
  reload: "Genindlæs",
  verify: "Verificer",
  verified: "Verificeret",
  verifying: "Verificerer...",
  waitAlert: "Verificerer... vent venligst."
};
globalThis.altchaI18n.set("da", sl);
const ul = {
  ariaLinkLabel: "Besuche Altcha.org",
  enterCode: "Code eingeben",
  enterCodeAria: "Geben Sie den Code ein, den Sie hören. Drücken Sie die Leertaste, um die Audio abzuspielen.",
  error: "Überprüfung fehlgeschlagen. Bitte versuchen Sie es später erneut.",
  expired: "Überprüfung abgelaufen. Bitte versuchen Sie es erneut.",
  verificationRequired: "Überprüfung erforderlich!",
  footer: 'Geschützt durch <a href="https://altcha.org/" target="_blank" aria-label="Besuche Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Audio-Herausforderung anfordern",
  label: "Ich bin kein Roboter",
  loading: "Lade...",
  reload: "Neu laden",
  verify: "Überprüfen",
  verified: "Überprüft",
  verifying: "Wird überprüft...",
  waitAlert: "Überprüfung läuft... bitte warten."
};
globalThis.altchaI18n.set("de", ul);
const fl = {
  ariaLinkLabel: "Επισκεφθείτε το Altcha.org",
  enterCode: "Εισαγάγετε κωδικό",
  enterCodeAria: "Εισαγάγετε τον κωδικό που ακούτε. Πατήστε Space για να παίξετε τον ήχο.",
  error: "Η επαλήθευση απέτυχε. Δοκιμάστε ξανά αργότερα.",
  expired: "Η επαλήθευση έληξε. Δοκιμάστε ξανά.",
  verificationRequired: "Απαιτείται έλεγχος!",
  footer: 'Προστατεύεται από το <a href="https://altcha.org/" target="_blank" aria-label="Επισκεφθείτε το Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Λήψη ηχητικής δοκιμασίας",
  label: "Δεν είμαι ρομπότ",
  loading: "Φόρτωση...",
  reload: "Επαναφόρτωση",
  verify: "Επαλήθευση",
  verified: "Επαληθεύτηκε",
  verifying: "Γίνεται επαλήθευση...",
  waitAlert: "Γίνεται επαλήθευση... παρακαλώ περιμένετε."
};
globalThis.altchaI18n.set("el", fl);
const cl = {
  ariaLinkLabel: "Visitar Altcha.org",
  enterCode: "Introduce el código",
  enterCodeAria: "Introduce el código que escuchas. Pulsa Espacio para reproducir el audio.",
  error: "Falló la verificación. Por favor intente nuevamente más tarde.",
  expired: "Verificación expirada. Por favor intente nuevamente.",
  verificationRequired: "¡Verificación requerida!",
  footer: 'Protegido por <a href="https://altcha.org/" target="_blank" aria-label="Visitar Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Obtener un desafío de audio",
  label: "No soy un robot",
  loading: "Cargando...",
  reload: "Recargar",
  verify: "Verificar",
  verified: "Verificado",
  verifying: "Verificando...",
  waitAlert: "Verificando... por favor espere."
};
globalThis.altchaI18n.set("es-es", cl);
const dl = {
  ariaLinkLabel: "Visitar Altcha.org",
  enterCode: "Ingresa el código",
  enterCodeAria: "Ingresa el código que escuchas. Presiona Espacio para reproducir el audio.",
  error: "Falló la verificación. Por favor vuelve a intentarlo más tarde.",
  expired: "La verificación expiró. Por favor inténtalo de nuevo.",
  verificationRequired: "¡Verificación requerida!",
  footer: 'Protegido por <a href="https://altcha.org/" target="_blank" aria-label="Visitar Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Obtener un reto de audio",
  label: "No soy un robot",
  loading: "Cargando...",
  reload: "Volver a cargar",
  verify: "Verificar",
  verified: "Verificado",
  verifying: "Verificando...",
  waitAlert: "Verificando... por favor espera."
};
globalThis.altchaI18n.set("es-419", dl);
const hl = {
  ariaLinkLabel: "Külasta Altcha.org",
  enterCode: "Sisesta kood",
  enterCodeAria: "Sisestage kuuldu kood. Vajutage tühikut, et esitada heli.",
  error: "Kinnitamine ebaõnnestus. Proovi hiljem uuesti.",
  expired: "Kinnitamine aegus. Proovi uuesti.",
  verificationRequired: "Kontroll on vajalik!",
  footer: 'Kaitstud <a href="https://altcha.org/" target="_blank" aria-label="Külasta Altcha.org">ALTCHA</a> poolt',
  getAudioChallenge: "Hangi heliülesanne",
  label: "Ma ei ole robot",
  loading: "Laadimine...",
  reload: "Laadi uuesti",
  verify: "Kinnita",
  verified: "Kinnitatud",
  verifying: "Kinnitamine...",
  waitAlert: "Kinnitamine... palun oota."
};
globalThis.altchaI18n.set("et", hl);
const gl = {
  ariaLinkLabel: "Bisitatu Altcha.org",
  enterCode: "Sartu kodea",
  enterCodeAria: "Sartu entzun duzun kodea. Sakatu Espazioa audioa erreproduzitzeko.",
  error: "Egiaztatzeak huts egin du. Saiatu berriro geroago.",
  expired: "Egiaztatzea iraungi da. Saiatu berriro.",
  verificationRequired: "Egiaztatzea beharrezkoa da!",
  footer: '<a href="https://altcha.org/" target="_blank" aria-label="Bisitatu Altcha.org">ALTCHA</a>k babestuta',
  getAudioChallenge: "Jaso audio-erronka bat",
  label: "Ez naiz robot bat",
  loading: "Kargatzen...",
  reload: "Birkargatu",
  verify: "Egiaztatu",
  verified: "Egiaztatuta",
  verifying: "Egiaztatzen...",
  waitAlert: "Egiaztatzen... itxaron mesedez."
};
globalThis.altchaI18n.set("eu", gl);
const vl = {
  ariaLinkLabel: "Vieraile sivulla Altcha.org",
  enterCode: "Syötä koodi",
  enterCodeAria: "Kirjoita kuulemasi koodi. Paina välilyöntiä toistaaksesi äänen.",
  error: "Varmennus epäonnistui. Yritä myöhemmin uudelleen.",
  expired: "Varmennus vanhentui. Yritä uudelleen.",
  verificationRequired: "Vahvistus vaaditaan!",
  footer: 'Suojattu <a href="https://altcha.org/" target="_blank" aria-label="Vieraile sivulla Altcha.org">ALTCHA</a>:lla',
  getAudioChallenge: "Hae äänitehtävä",
  label: "En ole robotti",
  loading: "Ladataan...",
  reload: "Lataa uudelleen",
  verify: "Vahvista",
  verified: "Vahvistettu",
  verifying: "Vahvistetaan...",
  waitAlert: "Vahvistetaan... odota hetki."
};
globalThis.altchaI18n.set("fi", vl);
const bl = {
  ariaLinkLabel: "Visitez Altcha.org",
  enterCode: "Entrez le code",
  enterCodeAria: "Entrez le code que vous entendez. Appuyez sur la barre d'espace pour écouter l'audio.",
  error: "Échec de la vérification. Réessayez plus tard.",
  expired: "La vérification a expiré. Réessayez.",
  verificationRequired: "Vérification requise !",
  footer: 'Protégé par <a href="https://altcha.org/" target="_blank" aria-label="Visitez Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Obtenir un défi audio",
  label: "Pas un robot",
  loading: "Chargement...",
  reload: "Recharger",
  verify: "Vérifier",
  verified: "Vérifié",
  verifying: "Vérification en cours...",
  waitAlert: "Vérification en cours... veuillez patienter."
};
globalThis.altchaI18n.set("fr-ca", bl);
const pl = {
  ariaLinkLabel: "Visitez Altcha.org",
  enterCode: "Entrez le code",
  enterCodeAria: "Entrez le code que vous entendez. Appuyez sur Espace pour écouter l'audio.",
  error: "Échec de la vérification. Essayez à nouveau plus tard.",
  expired: "La vérification a expiré. Essayez à nouveau.",
  verificationRequired: "Vérification requise !",
  footer: 'Protégé par <a href="https://altcha.org/" target="_blank" aria-label="Visitez Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Obtenir un défi audio",
  label: "Pas un robot",
  loading: "Chargement...",
  reload: "Recharger",
  verify: "Vérifier",
  verified: "Vérifié",
  verifying: "Vérification en cours...",
  waitAlert: "Vérification en cours... veuillez patienter."
};
globalThis.altchaI18n.set("fr-fr", pl);
const ml = {
  ariaLinkLabel: "Tabhair cuairt ar Altcha.org",
  enterCode: "Iontráil cód",
  enterCodeAria: "Cuir isteach an cód a chloiseann tú. Brúigh Spás chun an fuaime a sheinm.",
  error: "Theip ar an bhfíorú. Bain triail eile as níos déanaí.",
  expired: "Tá an fíorú as feidhm. Bain triail eile as.",
  verificationRequired: "Fíorú riachtanach!",
  footer: 'Cosanta ag <a href="https://altcha.org/" target="_blank" aria-label="Tabhair cuairt ar Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Faigh dúshlán fuaime",
  label: "Níl mé i mo róbat",
  loading: "Á luchtú...",
  reload: "Athluchtaigh",
  verify: "Fíoraigh",
  verified: "Fíoraithe",
  verifying: "Fíorú ar siúl...",
  waitAlert: "Fíorú ar siúl... fan go fóill."
};
globalThis.altchaI18n.set("ga", ml);
const yl = {
  ariaLinkLabel: "Posjetite Altcha.org",
  enterCode: "Unesite kod",
  enterCodeAria: "Unesite kod koji čujete. Pritisnite razmaknicu za reprodukciju zvuka.",
  error: "Provjera nije uspjela. Molimo pokušajte kasnije.",
  expired: "Provjera je istekla. Molimo pokušajte ponovo.",
  verificationRequired: "Potrebna je provjera!",
  footer: 'Zaštićeno od strane <a href="https://altcha.org/" target="_blank" aria-label="Posjetite Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Audio provjera",
  label: "Ja nisam robot",
  loading: "Učitavanje...",
  reload: "Ponovno učitaj",
  verify: "Provjeri",
  verified: "Provjereno",
  verifying: "Provjeravanje...",
  waitAlert: "Provjera je u tijeku... molimo pričekajte."
};
globalThis.altchaI18n.set("hr", yl);
const Al = {
  ariaLinkLabel: "Látogass el az Altcha.org oldalra",
  enterCode: "Írja be a kódot",
  enterCodeAria: "Írja be a hallott kódot. Nyomja meg a Szóköz billentyűt a hang lejátszásához.",
  error: "A hitelesítés nem sikerült. Próbáld meg később újra.",
  expired: "A hitelesítés lejárt. Próbáld újra.",
  verificationRequired: "Ellenőrzés szükséges!",
  footer: 'Védve a következő által: <a href="https://altcha.org/" target="_blank" aria-label="Látogass el az Altcha.org oldalra">ALTCHA</a>',
  getAudioChallenge: "Hangalapú kihívás kérése",
  label: "Nem vagyok robot",
  loading: "Betöltés...",
  reload: "Újratöltés",
  verify: "Ellenőrzés",
  verified: "Ellenőrizve",
  verifying: "Ellenőrzés folyamatban...",
  waitAlert: "Ellenőrzés folyamatban... kérlek várj."
};
globalThis.altchaI18n.set("hu", Al);
const kl = {
  ariaLinkLabel: "Heimsækja Altcha.org",
  enterCode: "Sláðu inn kóða",
  enterCodeAria: "Sláðu inn kóðann sem þú heyrir. Ýttu á Space til að spila hljóðið.",
  error: "Staðfesting mistókst. Reyndu aftur síðar.",
  expired: "Staðfesting er útrunnin. Reyndu aftur.",
  footer: 'Verndað af <a href="https://altcha.org/" target="_blank" aria-label="Heimsækja Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Fá hljóðáskorun",
  label: "Ég er ekki robot",
  loading: "Hleður...",
  reload: "Hleð aftur",
  verify: "Staðfesta",
  verificationRequired: "Staðfesting er nauðsynleg!",
  verified: "Staðfest",
  verifying: "Að staðfesta...",
  waitAlert: "Að staðfesta... vinsamlegast bíða."
};
globalThis.altchaI18n.set("is", kl);
const _l = {
  ariaLinkLabel: "Visita Altcha.org",
  enterCode: "Inserisci il codice",
  enterCodeAria: "Inserisci il codice che senti. Premi Spazio per riprodurre l'audio.",
  error: "Verifica fallita. Riprova più tardi.",
  expired: "Verifica scaduta. Riprova.",
  verificationRequired: "Verifica richiesta!",
  footer: 'Protetto da <a href="https://altcha.org/" target="_blank" aria-label="Visita Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Ottieni una sfida audio",
  label: "Non sono un robot",
  loading: "Caricamento...",
  reload: "Ricarica",
  verify: "Verifica",
  verified: "Verificato",
  verifying: "Verifica in corso...",
  waitAlert: "Verifica in corso... attendere."
};
globalThis.altchaI18n.set("it", _l);
const wl = {
  ariaLinkLabel: "Apsilankykite Altcha.org",
  enterCode: "Įveskite kodą",
  enterCodeAria: "Įveskite girdimą kodą. Paspauskite tarpo klavišą, kad grotumėte garso įrašą.",
  error: "Patvirtinimas nepavyko. Bandykite vėliau.",
  expired: "Patvirtinimo laikas baigėsi. Bandykite dar kartą.",
  verificationRequired: "Reikalingas patvirtinimas!",
  footer: 'Apsaugota <a href="https://altcha.org/" target="_blank" aria-label="Apsilankykite Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Gauti garso užduotį",
  label: "Aš nesu robotas",
  loading: "Įkeliama...",
  reload: "Įkelti iš naujo",
  verify: "Patvirtinti",
  verified: "Patvirtinta",
  verifying: "Tikrinama...",
  waitAlert: "Tikrinama... prašome palaukti."
};
globalThis.altchaI18n.set("lt", wl);
const Cl = {
  ariaLinkLabel: "Apmeklējiet Altcha.org",
  enterCode: "Ievadiet kodu",
  enterCodeAria: "Ievadiet dzirdamo kodu. Nospiediet atstarpes taustiņu, lai atskaņotu audio.",
  error: "Verifikācija neizdevās. Mēģiniet vēlāk vēlreiz.",
  expired: "Verifikācijas laiks ir beidzies. Mēģiniet vēlreiz.",
  verificationRequired: "Nepieciešama verifikācija!",
  footer: 'Aizsargāts ar <a href="https://altcha.org/" target="_blank" aria-label="Apmeklējiet Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Saņemt audio izaicinājumu",
  label: "Es neesmu robots",
  loading: "Notiek ielāde...",
  reload: "Pārlādēt",
  verify: "Verificēt",
  verified: "Verificēts",
  verifying: "Notiek verifikācija...",
  waitAlert: "Notiek verifikācija... lūdzu, uzgaidiet."
};
globalThis.altchaI18n.set("lv", Cl);
const Ll = {
  ariaLinkLabel: "Żur Altcha.org",
  enterCode: "Idħol il-kodiċi",
  enterCodeAria: "Idħol il-kodiċi li tisma'. Agħfas Spazju biex tindaqq l-awdjo.",
  error: "Il-verifika falliet. Erġa’ pprova aktar tard.",
  expired: "Il-verifika skadiet. Erġa’ pprova.",
  verificationRequired: "Verifika meħtieġa!",
  footer: 'Protett minn <a href="https://altcha.org/" target="_blank" aria-label="Żur Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Ikseb sfida bl-awdjo",
  label: "M’inix robot",
  loading: "Qed jitgħabba...",
  reload: "Ittella’ mill-ġdid",
  verify: "Ivverifika",
  verified: "Ivverifikat",
  verifying: "Verifika għaddejja...",
  waitAlert: "Verifika għaddejja... stenna ftit."
};
globalThis.altchaI18n.set("mt", Ll);
const Hi = {
  ariaLinkLabel: "Besøk Altcha.org",
  enterCode: "Skriv inn kode",
  enterCodeAria: "Skriv inn koden du hører. Trykk på Space for å spille av lyden.",
  error: "Verifisering mislyktes. Prøv igjen senere.",
  expired: "Verifiseringen utløp. Prøv igjen.",
  footer: 'Beskyttet av <a href="https://altcha.org/" target="_blank" aria-label="Besøk Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Få en lydutfordring",
  label: "Jeg er ikke en robot",
  loading: "Laster...",
  reload: "Last på nytt",
  verify: "Verifiser",
  verificationRequired: "Verifisering kreves!",
  verified: "Verifisert",
  verifying: "Verifiserer...",
  waitAlert: "Verifiserer... vennligst vent."
};
globalThis.altchaI18n.set("nb", Hi);
globalThis.altchaI18n.set("no", Hi);
const El = {
  ariaLinkLabel: "Bezoek Altcha.org",
  enterCode: "Voer code in",
  enterCodeAria: "Voer de code in die je hoort. Druk op Spatie om de audio af te spelen.",
  error: "Verificatie mislukt. Probeer het later opnieuw.",
  expired: "Verificatie verlopen. Probeer het opnieuw.",
  verificationRequired: "Verificatie vereist!",
  footer: 'Beschermd door <a href="https://altcha.org/" target="_blank" aria-label="Bezoek Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Audio-uitdaging ontvangen",
  label: "Ik ben geen robot",
  loading: "Laden...",
  reload: "Herladen",
  verify: "Verifiëren",
  verified: "Geverifieerd",
  verifying: "Bezig met verifiëren...",
  waitAlert: "Bezig met verifiëren... even geduld a.u.b."
};
globalThis.altchaI18n.set("nl", El);
const xl = {
  ariaLinkLabel: "Odwiedź Altcha.org",
  enterCode: "Wprowadź kod",
  enterCodeAria: "Wpisz kod, który słyszysz. Naciśnij Spację, aby odtworzyć dźwięk.",
  error: "Weryfikacja nie powiodła się. Spróbuj ponownie później.",
  expired: "Weryfikacja wygasła. Spróbuj ponownie.",
  verificationRequired: "Wymagana weryfikacja!",
  footer: 'Chronione przez <a href="https://altcha.org/" target="_blank" aria-label="Odwiedź Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Pobierz zadanie dźwiękowe",
  label: "Nie jestem robotem",
  loading: "Ładowanie...",
  reload: "Odśwież",
  verify: "Zweryfikuj",
  verified: "Zweryfikowano",
  verifying: "Weryfikacja...",
  waitAlert: "Trwa weryfikacja... proszę czekać."
};
globalThis.altchaI18n.set("pl", xl);
const Tl = {
  ariaLinkLabel: "Visitar Altcha.org",
  enterCode: "Introduza o código",
  enterCodeAria: "Introduza o código que ouve. Prima Espaço para reproduzir o áudio.",
  error: "A verificação falhou. Por favor, tente novamente mais tarde.",
  expired: "Verificação expirada. Por favor, tente novamente.",
  verificationRequired: "Verificação necessária!",
  footer: 'Protegido por <a href="https://altcha.org/" target="_blank" aria-label="Visitar Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Obter desafio de áudio",
  label: "Não sou um robô",
  loading: "A carregar...",
  reload: "Recarregar",
  verify: "Verificar",
  verified: "Verificado",
  verifying: "A verificar...",
  waitAlert: "A verificar... por favor aguarde."
};
globalThis.altchaI18n.set("pt-pt", Tl);
const Il = {
  ariaLinkLabel: "Visitar Altcha.org",
  enterCode: "Digite o código",
  enterCodeAria: "Digite o código que você ouve. Pressione Espaço para reproduzir o áudio.",
  error: "Falha na verificação. Por favor, tente novamente mais tarde.",
  expired: "Verificação expirada. Por favor, tente novamente.",
  verificationRequired: "Verificação necessária!",
  footer: 'Protegido por <a href="https://altcha.org/" target="_blank" aria-label="Visitar Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Obter desafio de áudio",
  label: "Eu não sou um robô",
  loading: "Carregando...",
  reload: "Recarregar",
  verify: "Verificar",
  verified: "Verificado",
  verifying: "Verificando...",
  waitAlert: "Verificando... por favor aguarde."
};
globalThis.altchaI18n.set("pt-br", Il);
const Vl = {
  ariaLinkLabel: "Vizitează Altcha.org",
  enterCode: "Introduceți codul",
  enterCodeAria: "Introduceți codul pe care îl auziți. Apăsați Spațiu pentru a reda audio.",
  error: "Verificarea a eșuat. Încearcă din nou mai târziu.",
  expired: "Verificarea a expirat. Încearcă din nou.",
  verificationRequired: "Verificare necesară!",
  footer: 'Protejat de <a href="https://altcha.org/" target="_blank" aria-label="Vizitează Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Obține o provocare audio",
  label: "Nu sunt un robot",
  loading: "Se încarcă...",
  reload: "Reîncarcă",
  verify: "Verifică",
  verified: "Verificat",
  verifying: "Se verifică...",
  waitAlert: "Se verifică... te rugăm să aștepți."
};
globalThis.altchaI18n.set("ro", Vl);
const Rl = {
  ariaLinkLabel: "Перейти на Altcha.org",
  enterCode: "Введите код",
  enterCodeAria: "Введите код, который слышите. Нажмите пробел для воспроизведения аудио.",
  error: "Ошибка верификации. Попробуйте позже.",
  expired: "Срок действия верификации истек. Попробуйте снова.",
  verificationRequired: "Требуется проверка!",
  footer: 'Защищено <a href="https://altcha.org/" target="_blank" aria-label="Перейти на Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Получить аудио задачу",
  label: "Я не робот",
  loading: "Загрузка...",
  reload: "Перезагрузить",
  verify: "Проверить",
  verified: "Проверено",
  verifying: "Идет проверка...",
  waitAlert: "Идет проверка... Пожалуйста, подождите."
};
globalThis.altchaI18n.set("ru", Rl);
const jl = {
  ariaLinkLabel: "Navštívte Altcha.org",
  enterCode: "Zadajte kód",
  enterCodeAria: "Zadajte kód, ktorý počujete. Stlačením medzerníka prehráte zvuk.",
  error: "Verifikácia zlyhala. Skúste to znova neskôr.",
  expired: "Verifikácia vypršala. Skúste to znova.",
  verificationRequired: "Vyžaduje sa overenie!",
  footer: 'Chránené <a href="https://altcha.org/" target="_blank" aria-label="Navštívte Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Získať audio výzvu",
  label: "Nie som robot",
  loading: "Načítava sa...",
  reload: "Obnoviť",
  verify: "Verifikovať",
  verified: "Verifikované",
  verifying: "Prebieha verifikácia...",
  waitAlert: "Prebieha verifikácia... prosím čakajte."
};
globalThis.altchaI18n.set("sk", jl);
const $l = {
  ariaLinkLabel: "Obiščite Altcha.org",
  enterCode: "Vnesite kodo",
  enterCodeAria: "Vnesite kodo, ki jo slišite. Pritisnite preslednico za predvajanje zvoka.",
  error: "Preverjanje ni uspelo. Poskusite znova kasneje.",
  expired: "Preverjanje je poteklo. Poskusite znova.",
  verificationRequired: "Potrebna je preveritev!",
  footer: 'Zaščiteno z <a href="https://altcha.org/" target="_blank" aria-label="Obiščite Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Pridobite zvočni izziv",
  label: "Nisem robot",
  loading: "Nalagam...",
  reload: "Ponovno naloži",
  verify: "Preveri",
  verified: "Preverjeno",
  verifying: "Preverjanje...",
  waitAlert: "Preverjanje... prosim počakajte."
};
globalThis.altchaI18n.set("sl", $l);
const Sl = {
  ariaLinkLabel: "Posetite Altcha.org",
  enterCode: "Unesite kod",
  enterCodeAria: "Unesite kod koji čujete. Pritisnite Space da biste pustili zvuk.",
  error: "Verifikacija nije uspela. Pokušajte ponovo kasnije.",
  expired: "Verifikacija je istekla. Pokušajte ponovo.",
  footer: 'Zaštićeno od strane <a href="https://altcha.org/" target="_blank" aria-label="Posetite Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Dohvatite audio izazov",
  label: "Nisam robot",
  loading: "Učitavanje...",
  reload: "Ponovo učitaj",
  verify: "Verifikuj",
  verificationRequired: "Verifikacija je obavezna!",
  verified: "Verifikovano",
  verifying: "Verifikacija u toku...",
  waitAlert: "Verifikacija u toku... molimo vas da sačekate."
};
globalThis.altchaI18n.set("sr", Sl);
const Pl = {
  ariaLinkLabel: "Besök Altcha.org",
  enterCode: "Ange kod",
  enterCodeAria: "Ange koden du hör. Tryck på mellanslag för att spela upp ljudet.",
  error: "Verifiering misslyckades. Försök igen senare.",
  expired: "Verifieringen har gått ut. Försök igen.",
  verificationRequired: "Verifiering krävs!",
  footer: 'Skyddad av <a href="https://altcha.org/" target="_blank" aria-label="Besök Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Få ljudutmaning",
  label: "Jag är inte en robot",
  loading: "Laddar...",
  reload: "Ladda om",
  verify: "Verifiera",
  verified: "Verifierad",
  verifying: "Verifierar...",
  waitAlert: "Verifierar... vänligen vänta."
};
globalThis.altchaI18n.set("sv", Pl);
const Nl = {
  ariaLinkLabel: "Altcha.org'yu ziyaret edin",
  enterCode: "Kodu girin",
  enterCodeAria: "Duyduğunuz kodu girin. Ses dosyasını oynatmak için Boşluk tuşuna basın.",
  error: "Doğrulama başarısız oldu. Lütfen daha sonra tekrar deneyin.",
  expired: "Doğrulama süresi doldu. Lütfen tekrar deneyin.",
  verificationRequired: "Doğrulama gerekli!",
  footer: `ALTCHA tarafından korunuyor <a href="https://altcha.org/" target="_blank" aria-label="Altcha.org'yu ziyaret edin">ALTCHA</a>`,
  getAudioChallenge: "Sesli doğrulama al",
  label: "Ben robot değilim",
  loading: "Yükleniyor...",
  reload: "Yeniden yükle",
  verify: "Doğrula",
  verified: "Doğrulandı",
  verifying: "Doğrulama yapılıyor...",
  waitAlert: "Doğrulama yapılıyor... lütfen bekleyin."
};
globalThis.altchaI18n.set("tr", Nl);
const zl = {
  ariaLinkLabel: "Відвідати Altcha.org",
  enterCode: "Введіть код",
  enterCodeAria: "Введіть код, який ви чуєте. Натисніть пробіл, щоб відтворити аудіо.",
  error: "Перевірка не вдалася. Спробуйте пізніше.",
  expired: "Перевірка прострочена. Спробуйте знову.",
  verificationRequired: "Потрібна перевірка!",
  footer: 'Захищено <a href="https://altcha.org/" target="_blank" aria-label="Відвідати Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Отримати аудіо-челлендж",
  label: "Я не робот",
  loading: "Завантаження...",
  reload: "Перезавантажити",
  verify: "Перевірити",
  verified: "Перевірено",
  verifying: "Перевіряється...",
  waitAlert: "Перевірка... будь ласка, зачекайте."
};
globalThis.altchaI18n.set("uk", zl);
const Dl = {
  ariaLinkLabel: "Altcha.org পরিদর্শন করুন",
  enterCode: "কোড লিখুন",
  enterCodeAria: "আপনি যে কোড শুনতে পান তা লিখুন। অডিও প্লে করতে স্পেস বাটন টিপুন।",
  error: "যাচাইকরণ ব্যর্থ হয়েছে। পরে আবার চেষ্টা করুন।",
  expired: "যাচাইকরণ সময়সীমা শেষ হয়েছে। আবার চেষ্টা করুন।",
  verificationRequired: "যাচাই প্রয়োজন!",
  footer: 'দ্বারা সুরক্ষিত <a href="https://altcha.org/" target="_blank" aria-label="Altcha.org পরিদর্শন করুন">ALTCHA</a>',
  getAudioChallenge: "অডিও চ্যালেঞ্জ নিন",
  label: "আমি রোবট নই",
  loading: "লোড হচ্ছে...",
  reload: "পুনরায় লোড করুন",
  verify: "যাচাই করুন",
  verified: "যাচাই করা হয়েছে",
  verifying: "যাচাই করা হচ্ছে...",
  waitAlert: "যাচাই করা হচ্ছে... দয়া করে অপেক্ষা করুন।"
};
globalThis.altchaI18n.set("bn", Dl);
const ql = {
  ariaLinkLabel: "בקר באתר Altcha.org",
  enterCode: "הזן קוד",
  enterCodeAria: "הזן את הקוד שאתה שומע. לחץ על רווח להפעלת השמע.",
  error: "האימות נכשל. נסה שוב מאוחר יותר.",
  expired: "תוקף האימות פג. נסה שוב.",
  verificationRequired: "נדרש אימות!",
  footer: 'מוגן על ידי <a href="https://altcha.org/" target="_blank" aria-label="בקר באתר Altcha.org">ALTCHA</a>',
  getAudioChallenge: "קבל אתגר שמע",
  label: "אני לא רובוט",
  loading: "טוען...",
  reload: "טען מחדש",
  verify: "אמת",
  verified: "אומת",
  verifying: "מאמת...",
  waitAlert: "מבצע אימות... אנא המתן."
};
globalThis.altchaI18n.set("he", ql);
const Ol = {
  ariaLinkLabel: "Altcha.org पर जाएं",
  enterCode: "कोड दर्ज करेंं",
  enterCodeAria: "आप जो कोड सुनते हैं उसे दर्ज करें। ऑडियो चलाने के लिए स्पेस दबाएं।",
  error: "सत्यापन विफल। कृपया बाद में फिर से प्रयास करें।",
  expired: "सत्यापन समाप्त हो गया है। कृपया पुनः प्रयास करें।",
  verificationRequired: "सत्यापन आवश्यक है!",
  footer: 'द्वारा संरक्षित <a href="https://altcha.org/" target="_blank" aria-label="Altcha.org पर जाएं">ALTCHA</a>',
  getAudioChallenge: "ऑडियो चुनौती प्राप्त करें",
  label: "मैं रोबोट नहीं हूँ",
  loading: "लोड हो रहा है...",
  reload: "पुनः लोड करें",
  verify: "सत्यापित करें",
  verified: "सत्यापित",
  verifying: "सत्यापित कर रहे हैं...",
  waitAlert: "सत्यापित किया जा रहा है... कृपया प्रतीक्षा करें।"
};
globalThis.altchaI18n.set("hi", Ol);
const Hl = {
  ariaLinkLabel: "Kunjungi Altcha.org",
  enterCode: "Masukkan kode",
  enterCodeAria: "Masukkan kode yang Anda dengar. Tekan Spasi untuk memutar audio.",
  error: "Verifikasi gagal. Coba lagi nanti.",
  expired: "Verifikasi telah kedaluwarsa. Coba lagi.",
  verificationRequired: "Verifikasi diperlukan!",
  footer: 'Dilindungi oleh <a href="https://altcha.org/" target="_blank" aria-label="Kunjungi Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Dapatkan tantangan audio",
  label: "Saya bukan robot",
  loading: "Memuat...",
  reload: "Muat ulang",
  verify: "Verifikasi",
  verified: "Terverifikasi",
  verifying: "Memverifikasi...",
  waitAlert: "Memverifikasi... harap tunggu."
};
globalThis.altchaI18n.set("id", Hl);
const Fl = {
  ariaLinkLabel: "Altcha.orgを訪問",
  enterCode: "コードを入力",
  enterCodeAria: "聞こえるコードを入力してください。スペースキーを押して音声を再生します。",
  error: "認証に失敗しました。後でもう一度試してください。",
  expired: "認証が期限切れです。再試行してください。",
  verificationRequired: "認証が必要です！",
  footer: '保護されています <a href="https://altcha.org/" target="_blank" aria-label="Altcha.orgを訪問">ALTCHA</a>',
  getAudioChallenge: "音声チャレンジを取得",
  label: "私はロボットではありません",
  loading: "読み込み中...",
  reload: "再読み込み",
  verify: "確認",
  verified: "確認済み",
  verifying: "確認中...",
  waitAlert: "確認中...少々お待ちください。"
};
globalThis.altchaI18n.set("ja", Fl);
const Ml = {
  ariaLinkLabel: "Altcha.org 방문하기",
  enterCode: "코드 입력",
  enterCodeAria: "들리는 코드를 입력하세요. 스페이스 바를 눌러 오디오를 재생합니다.",
  error: "인증 실패. 나중에 다시 시도해주세요.",
  expired: "인증이 만료되었습니다. 다시 시도해주세요.",
  verificationRequired: "인증이 필요합니다!",
  footer: 'ALTCHA에서 보호됨 <a href="https://altcha.org/" target="_blank" aria-label="Altcha.org 방문하기">ALTCHA</a>',
  getAudioChallenge: "오디오 챌린지 받기",
  label: "저는 로봇이 아닙니다",
  loading: "로딩 중...",
  reload: "새로 고침",
  verify: "확인",
  verified: "확인됨",
  verifying: "확인 중...",
  waitAlert: "확인 중... 잠시만 기다려주세요."
};
globalThis.altchaI18n.set("ko", Ml);
const Bl = {
  ariaLinkLabel: "Altcha.org भेट द्या",
  enterCode: "कोड टाकाा",
  enterCodeAria: "तुम्ही ऐकत असलेला कोड टाका. ऑडिओ प्ले करण्यासाठी स्पेस दाबा.",
  error: "पुष्टीकरण अयशस्वी झाले. कृपया नंतर पुन्हा प्रयत्न करा.",
  expired: "पुष्टीकरण कालबाह्य झाले आहे. कृपया पुन्हा प्रयत्न करा.",
  verificationRequired: "पडताळणी आवश्यक आहे!",
  footer: 'द्वारे संरक्षित <a href="https://altcha.org/" target="_blank" aria-label="Altcha.org भेट द्या">ALTCHA</a>',
  getAudioChallenge: "ऑडिओ चॅलेंज मिळवा",
  label: "मी रोबोट नाही",
  loading: "लोड होत आहे...",
  reload: "पुन्हा लोड करा",
  verify: "पुष्टीकरण करा",
  verified: "पुष्टीकरण झाले",
  verifying: "पुष्टीकरण करत आहे...",
  waitAlert: "पुष्टीकरण करत आहे... कृपया थोडा वेळ थांबा."
};
globalThis.altchaI18n.set("mr", Bl);
const Ul = {
  ariaLinkLabel: "Altcha.org ஐ பார்வையிடவும்",
  enterCode: "குறியீட்டை உள்ளிடவும்",
  enterCodeAria: "நீங்கள் கேட்கும் குறியீட்டை உள்ளிடவும். ஆடியோவை இயக்க Space ஐ அழுத்தவும்.",
  error: "சரிபார்ப்பு தோல்வி. பிறகு மீண்டும் முயற்சிக்கவும்.",
  expired: "சரிபார்ப்பு காலாவதியானது. மீண்டும் முயற்சிக்கவும்.",
  verificationRequired: "சரிபார்ப்பு தேவை!",
  footer: 'மூலமாக பாதுகாக்கப்பட்டவை <a href="https://altcha.org/" target="_blank" aria-label="Altcha.org ஐ பார்வையிடவும்">ALTCHA</a>',
  getAudioChallenge: "ஒலி சவாலை பெறவும்",
  label: "நான் ரோபோடான அல்ல",
  loading: "செயலாக்கம்...",
  reload: "மீண்டும் புதுப்பிக்கவும்",
  verify: "சரிபார்க்கவும்",
  verified: "சரிபார்க்கப்பட்டது",
  verifying: "சரிபார்க்கப்படுகிறது...",
  waitAlert: "சரிபார்க்கப்படுகிறது... தயவுசெய்து காத்திருக்கவும்."
};
globalThis.altchaI18n.set("ta", Ul);
const Zl = {
  ariaLinkLabel: "Altcha.org సందర్శించండి",
  enterCode: "కోడ్‌ని నమోదు చేయండి",
  enterCodeAria: "మీరు విన్న కోడ్‌ని నమోదు చేయండి. ఆడియో ప్లే చేయడానికి స్పేస్‌ను నొక్కండి.",
  error: "చెకింగ్ విఫలమైంది. దయచేసి మరల ప్రయత్నించండి.",
  expired: "చెకింగ్ కాలం ముగిసింది. దయచేసి మరల ప్రయత్నించండి.",
  verificationRequired: "ధృవీకరణ అవసరం!",
  footer: 'ఈ సైట్ రక్షించబడింది <a href="https://altcha.org/" target="_blank" aria-label="Altcha.org సందర్శించండి">ALTCHA</a>',
  getAudioChallenge: "ఆడియో ఛాలెంజ్ పొందండి",
  label: "నేను రోబోట్ కాదు",
  loading: "లోడ్ అవుతోంది...",
  reload: "మళ్ళీ లోడ్ చేయండి",
  verify: "ధ్రువీకరించు",
  verified: "ధ్రువీకరించబడింది",
  verifying: "ధ్రువీకరణ జరుగుతుంది...",
  waitAlert: "ధ్రువీకరణ జరుగుతుంది... దయచేసి వేచి ఉండండి."
};
globalThis.altchaI18n.set("te", Zl);
const Gl = {
  ariaLinkLabel: "เยี่ยมชม Altcha.org",
  enterCode: "ป้อนรหัส",
  enterCodeAria: "ป้อนรหัสที่คุณได้ยิน กด Space เพื่อเล่นเสียง",
  error: "การตรวจสอบล้มเหลว กรุณาลองอีกครั้งภายหลัง",
  expired: "การตรวจสอบหมดอายุ กรุณาลองใหม่",
  verificationRequired: "จำเป็นต้องตรวจสอบ!",
  footer: 'ป้องกันโดย <a href="https://altcha.org/" target="_blank" aria-label="เยี่ยมชม Altcha.org">ALTCHA</a>',
  getAudioChallenge: "รับการท้าทายเสียง",
  label: "ฉันไม่ใช่บอท",
  loading: "กำลังโหลด...",
  reload: "โหลดใหม่",
  verify: "ตรวจสอบ",
  verified: "ตรวจสอบแล้ว",
  verifying: "กำลังตรวจสอบ...",
  waitAlert: "กำลังตรวจสอบ... กรุณารอ"
};
globalThis.altchaI18n.set("th", Gl);
const Yl = {
  ariaLinkLabel: "Altcha.org پر جائیں",
  enterCode: "کوڈ درج کریں",
  enterCodeAria: "جو کوڈ آپ سنتے ہیں وہ درج کریں۔ آڈیو چلانے کے لیے اسپیس دبائیں۔",
  error: "توثیق ناکام ہو گئی۔ براہ کرم بعد میں دوبارہ کوشش کریں۔",
  expired: "توثیق کی مدت ختم ہو گئی ہے۔ براہ کرم دوبارہ کوشش کریں۔",
  verificationRequired: "تصدیق ضروری ہے!",
  footer: 'کے ذریعے محفوظ <a href="https://altcha.org/" target="_blank" aria-label="Altcha.org پر جائیں">ALTCHA</a>',
  getAudioChallenge: "آڈیو چیلنج حاصل کریں",
  label: "میں روبوٹ نہیں ہوں",
  loading: "لوڈ ہو رہا ہے...",
  reload: "دوبارہ لوڈ کریں",
  verify: "توثیق کریں",
  verified: "توثیق شدہ",
  verifying: "توثیق ہو رہی ہے...",
  waitAlert: "توثیق ہو رہی ہے... براہ کرم انتظار کریں۔"
};
globalThis.altchaI18n.set("ur", Yl);
const Wl = {
  ariaLinkLabel: "Truy cập Altcha.org",
  enterCode: "Nhập mã",
  enterCodeAria: "Nhập mã bạn nghe được. Nhấn Phím cách để phát âm thanh.",
  error: "Xác minh thất bại. Vui lòng thử lại sau.",
  expired: "Xác minh đã hết hạn. Vui lòng thử lại.",
  verificationRequired: "Yêu cầu xác minh!",
  footer: 'Được bảo vệ bởi <a href="https://altcha.org/" target="_blank" aria-label="Truy cập Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Nhận thử thách âm thanh",
  label: "Tôi không phải là robot",
  loading: "Đang tải...",
  reload: "Tải lại",
  verify: "Xác minh",
  verified: "Đã xác minh",
  verifying: "Đang xác minh...",
  waitAlert: "Đang xác minh... vui lòng chờ."
};
globalThis.altchaI18n.set("vi", Wl);
const Kl = {
  ariaLinkLabel: "访问 Altcha.org",
  enterCode: "输入代码",
  enterCodeAria: "输入您听到的代码。按空格键播放音频。",
  error: "验证失败。稍后再试。",
  expired: "验证已过期。请重试。",
  verificationRequired: "需要验证！",
  footer: '由 <a href="https://altcha.org/" target="_blank" aria-label="访问 Altcha.org">ALTCHA</a> 保护',
  getAudioChallenge: "获取音频挑战",
  label: "我不是机器人",
  loading: "加载中...",
  reload: "重新加载",
  verify: "验证",
  verified: "已验证",
  verifying: "正在验证...",
  waitAlert: "正在验证... 请稍等。"
};
globalThis.altchaI18n.set("zh-cn", Kl);
const Jl = {
  ariaLinkLabel: "訪問 Altcha.org",
  enterCode: "輸入代碼",
  enterCodeAria: "輸入您聽到的代碼。按空格鍵播放音頻。",
  error: "驗證失敗。稍後再試。",
  expired: "驗證已過期。請重試。",
  verificationRequired: "需要驗證！",
  footer: '由 <a href="https://altcha.org/" target="_blank" aria-label="訪問 Altcha.org">ALTCHA</a> 保護',
  getAudioChallenge: "獲取音頻挑戰",
  label: "我不是機器人",
  loading: "載入中...",
  reload: "重新載入",
  verify: "驗證",
  verified: "已驗證",
  verifying: "正在驗證...",
  waitAlert: "正在驗證... 請稍等。"
};
globalThis.altchaI18n.set("zh-tw", Jl);
const Fi = `(function(){"use strict";const d=new TextEncoder;function p(e){return[...new Uint8Array(e)].map(t=>t.toString(16).padStart(2,"0")).join("")}async function b(e,t,r){if(typeof crypto>"u"||!("subtle"in crypto)||!("digest"in crypto.subtle))throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");return p(await crypto.subtle.digest(r.toUpperCase(),d.encode(e+t)))}function w(e,t,r="SHA-256",n=1e6,s=0){const o=new AbortController,a=Date.now();return{promise:(async()=>{for(let c=s;c<=n;c+=1){if(o.signal.aborted)return null;if(await b(t,c,r)===e)return{number:c,took:Date.now()-a}}return null})(),controller:o}}function h(e){const t=atob(e),r=new Uint8Array(t.length);for(let n=0;n<t.length;n++)r[n]=t.charCodeAt(n);return r}function g(e,t=12){const r=new Uint8Array(t);for(let n=0;n<t;n++)r[n]=e%256,e=Math.floor(e/256);return r}async function m(e,t="",r=1e6,n=0){const s="AES-GCM",o=new AbortController,a=Date.now(),l=async()=>{for(let u=n;u<=r;u+=1){if(o.signal.aborted||!c||!y)return null;try{const f=await crypto.subtle.decrypt({name:s,iv:g(u)},c,y);if(f)return{clearText:new TextDecoder().decode(f),took:Date.now()-a}}catch{}}return null};let c=null,y=null;try{y=h(e);const u=await crypto.subtle.digest("SHA-256",d.encode(t));c=await crypto.subtle.importKey("raw",u,s,!1,["decrypt"])}catch{return{promise:Promise.reject(),controller:o}}return{promise:l(),controller:o}}let i;onmessage=async e=>{const{type:t,payload:r,start:n,max:s}=e.data;let o=null;if(t==="abort")i==null||i.abort(),i=void 0;else if(t==="work"){if("obfuscated"in r){const{key:a,obfuscated:l}=r||{};o=await m(l,a,s,n)}else{const{algorithm:a,challenge:l,salt:c}=r||{};o=w(l,c,a,s,n)}i=o.controller,o.promise.then(a=>{self.postMessage(a&&{...a,worker:!0})})}}})();
`, Za = typeof self < "u" && self.Blob && new Blob([Fi], { type: "text/javascript;charset=utf-8" });
function Xl(e) {
  let t;
  try {
    if (t = Za && (self.URL || self.webkitURL).createObjectURL(Za), !t) throw "";
    const r = new Worker(t, {
      name: e == null ? void 0 : e.name
    });
    return r.addEventListener("error", () => {
      (self.URL || self.webkitURL).revokeObjectURL(t);
    }), r;
  } catch {
    return new Worker(
      "data:text/javascript;charset=utf-8," + encodeURIComponent(Fi),
      {
        name: e == null ? void 0 : e.name
      }
    );
  } finally {
    t && (self.URL || self.webkitURL).revokeObjectURL(t);
  }
}
const Ql = "5";
var Ya;
typeof window < "u" && ((Ya = window.__svelte ?? (window.__svelte = {})).v ?? (Ya.v = /* @__PURE__ */ new Set())).add(Ql);
const Mi = new TextEncoder();
function es(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function ts(e, t = "SHA-256", r = 1e5) {
  const i = Date.now().toString(16);
  e || (e = Math.round(Math.random() * r));
  const o = await Bi(i, e, t);
  return {
    algorithm: t,
    challenge: o,
    salt: i,
    signature: ""
  };
}
async function Bi(e, t, r) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return es(
    await crypto.subtle.digest(
      r.toUpperCase(),
      Mi.encode(e + t)
    )
  );
}
function rs(e, t, r = "SHA-256", i = 1e6, o = 0) {
  const n = new AbortController(), u = Date.now();
  return {
    promise: (async () => {
      for (let c = o; c <= i; c += 1) {
        if (n.signal.aborted)
          return null;
        if (await Bi(t, c, r) === e)
          return {
            number: c,
            took: Date.now() - u
          };
      }
      return null;
    })(),
    controller: n
  };
}
function Ga() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function as(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let i = 0; i < t.length; i++)
    r[i] = t.charCodeAt(i);
  return r;
}
function is(e, t = 12) {
  const r = new Uint8Array(t);
  for (let i = 0; i < t; i++)
    r[i] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function ns(e, t = "", r = 1e6, i = 0) {
  const o = "AES-GCM", n = new AbortController(), u = Date.now(), s = async () => {
    for (let p = i; p <= r; p += 1) {
      if (n.signal.aborted || !c || !d)
        return null;
      try {
        const h = await crypto.subtle.decrypt(
          {
            name: o,
            iv: is(p)
          },
          c,
          d
        );
        if (h)
          return {
            clearText: new TextDecoder().decode(h),
            took: Date.now() - u
          };
      } catch {
      }
    }
    return null;
  };
  let c = null, d = null;
  try {
    d = as(e);
    const p = await crypto.subtle.digest(
      "SHA-256",
      Mi.encode(t)
    );
    c = await crypto.subtle.importKey(
      "raw",
      p,
      o,
      !1,
      ["decrypt"]
    );
  } catch {
    return {
      promise: Promise.reject(),
      controller: n
    };
  }
  return {
    promise: s(),
    controller: n
  };
}
var w = /* @__PURE__ */ ((e) => (e.CODE = "code", e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(w || {}), Q = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.LOADING = "loading", e.PLAYING = "playing", e.PAUSED = "paused", e.READY = "ready", e))(Q || {});
const os = {
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
globalThis.altchaI18n.set("en", os);
const Tr = (e, t) => {
  let r = /* @__PURE__ */ fo(() => Hn(t == null ? void 0 : t(), 24));
  var i = fs();
  xe(() => {
    R(i, "width", l(r)), R(i, "height", l(r));
  }), O(e, i);
};
function ls(e, t) {
  e.code === "Space" && (e.preventDefault(), e.stopImmediatePropagation(), t());
}
function ss(e, t) {
  e.preventDefault(), t();
}
function us(e, t, r, i, o, n, u, s) {
  var c;
  [
    w.UNVERIFIED,
    w.ERROR,
    w.EXPIRED,
    w.CODE
  ].includes(l(t)) ? r() !== !1 && ((c = l(i)) == null ? void 0 : c.reportValidity()) === !1 ? y(o, !1) : n() ? u() : s() : y(o, !0);
}
var fs = /* @__PURE__ */ hr('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="altcha-spinner"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor"></path></svg>'), cs = /* @__PURE__ */ we('<input type="hidden">'), ds = /* @__PURE__ */ we('<div><a target="_blank" class="altcha-logo" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor"></path></svg></a></div>'), hs = /* @__PURE__ */ hr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg>'), gs = /* @__PURE__ */ hr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z"></path></svg>'), vs = /* @__PURE__ */ hr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"></path></svg>'), bs = /* @__PURE__ */ we('<button type="button" class="altcha-code-challenge-audio"><!></button>'), ps = /* @__PURE__ */ we("<audio hidden autoplay><source></audio>"), ms = /* @__PURE__ */ we('<div class="altcha-code-challenge" role="dialog"><div class="altcha-code-challenge-arrow"></div> <form data-code-challenge-form="1"><img class="altcha-code-challenge-image" alt=""> <input type="text" autocomplete="off" name="code" class="altcha-code-challenge-input" required> <div class="altcha-code-challenge-buttons"><div class="altcha-code-challenge-buttons-left"><!> <button type="button" class="altcha-code-challenge-reload"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z"></path></svg></button></div> <button type="submit" class="altcha-code-challenge-verify"><!> </button></div> <!></form></div>'), ys = /* @__PURE__ */ we("<div><!></div>"), As = /* @__PURE__ */ we("<div><!></div>"), ks = /* @__PURE__ */ we('<div class="altcha-error"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg> <!></div>'), _s = /* @__PURE__ */ we('<div class="altcha-footer"><div><!></div></div>'), ws = /* @__PURE__ */ we('<div class="altcha-anchor-arrow"></div>'), Cs = /* @__PURE__ */ we('<!> <div class="altcha"><div class="altcha-main"><div><!> <input type="checkbox"></div> <label class="altcha-label"><!></label> <!> <!> <!></div> <!> <!> <!></div>', 1);
function Ls(e, t) {
  var Va, Ra;
  si(t, !0);
  const [r, i] = Go(), o = () => Zo(Zi, "$altchaI18nStore", r);
  let n = x(t, "auto", 7, void 0), u = x(t, "blockspam", 7, void 0), s = x(t, "challengeurl", 7, void 0), c = x(t, "challengejson", 7, void 0), d = x(t, "credentials", 7, void 0), p = x(t, "customfetch", 7, void 0), h = x(t, "debug", 7, !1), v = x(t, "delay", 7, 0), k = x(t, "disableautofocus", 7, !1), V = x(t, "expire", 7, void 0), _ = x(t, "floating", 7, void 0), q = x(t, "floatinganchor", 7, void 0), ce = x(t, "floatingoffset", 7, void 0), K = x(t, "floatingpersist", 7, !1), ee = x(t, "hidefooter", 7, !1), J = x(t, "hidelogo", 7, !1), nt = x(t, "id", 7, void 0), H = x(t, "language", 7, void 0), oe = x(t, "name", 7, "altcha"), me = x(t, "maxnumber", 7, 1e6), At = x(t, "mockerror", 7, !1), Ne = x(t, "obfuscated", 7, void 0), Ot = x(t, "plugins", 7, void 0), kt = x(t, "refetchonexpire", 7, !0), Ye = x(t, "sentinel", 7, void 0), Ce = x(t, "spamfilter", 7, !1), ot = x(t, "strings", 7, void 0), ge = x(t, "test", 7, !1), te = x(t, "verifyurl", 7, void 0), lt = x(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), _t = x(t, "workerurl", 7, void 0);
  const { altchaI18n: Ui } = globalThis, Zi = Ui.store, Yr = ["SHA-256", "SHA-384", "SHA-512"], Gi = "https://altcha.org/", ze = (a, f) => {
    t.$$host.dispatchEvent(new CustomEvent(a, { detail: f }));
  }, Wr = (Ra = (Va = document.documentElement.lang) == null ? void 0 : Va.split("-")) == null ? void 0 : Ra[0], gr = /* @__PURE__ */ It(() => {
    var a;
    return s() && new URL(s(), location.origin).host.endsWith(".altcha.org") && !!((a = s()) != null && a.includes("apiKey=ckey_"));
  }), vr = /* @__PURE__ */ It(() => c() ? fa(c()) : void 0), Yi = /* @__PURE__ */ It(() => ot() ? fa(ot()) : {}), P = /* @__PURE__ */ It(() => ({
    ...Qr(o()),
    ...l(Yi)
  })), Kr = /* @__PURE__ */ It(() => `${nt() || oe()}_checkbox_${Math.round(Math.random() * 1e8)}`);
  let wt = /* @__PURE__ */ D(!1), M = /* @__PURE__ */ D(null), T = /* @__PURE__ */ D(Fe(w.UNVERIFIED)), re = /* @__PURE__ */ D(void 0), Ct = /* @__PURE__ */ D(null), De = /* @__PURE__ */ D(null), br = /* @__PURE__ */ D(null), st = /* @__PURE__ */ D(null), S = /* @__PURE__ */ D(null), Ht = /* @__PURE__ */ D(null), We = /* @__PURE__ */ D(null), Le = null, B = /* @__PURE__ */ D(null), Ke = /* @__PURE__ */ D(!1), qe = [], pr = /* @__PURE__ */ D(!1), Re = /* @__PURE__ */ D(null);
  Rr(() => {
    sn(l(We));
  }), Rr(() => {
    un(l(T));
  }), Qo(() => {
    Wi(), y(Ht, null), l(S) && (l(S).removeEventListener("submit", na), l(S).removeEventListener("reset", oa), l(S).removeEventListener("focusin", ia), y(S, null)), Le && (clearTimeout(Le), Le = null), document.removeEventListener("click", ra), document.removeEventListener("scroll", aa), window.removeEventListener("resize", ua);
  }), qi(() => {
    var a;
    I("mounted", "2.0.4"), I("workers", lt()), Qi(), I("plugins", qe.length ? qe.map((f) => f.constructor.pluginName).join(", ") : "none"), ge() && I("using test mode"), V() && mr(V()), n() !== void 0 && I("auto", n()), _() !== void 0 && ha(_()), y(S, (a = l(re)) == null ? void 0 : a.closest("form"), !0), l(S) && (l(S).addEventListener("submit", na, { capture: !0 }), l(S).addEventListener("reset", oa), (n() === "onfocus" || K() === "focus") && l(S).addEventListener("focusin", ia)), n() === "onload" && (Ne() ? Lt() : je()), l(gr) && (ee() || J()) && I("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      ze("load");
    });
  });
  function Ft(a, f) {
    return btoa(JSON.stringify({
      algorithm: a.algorithm,
      challenge: a.challenge,
      number: f.number,
      salt: a.salt,
      signature: a.signature,
      test: ge() ? !0 : void 0,
      took: f.took
    }));
  }
  function Wi() {
    for (const a of qe)
      a.destroy();
  }
  function Jr() {
    s() && kt() && l(T) === w.VERIFIED ? je() : ut(w.EXPIRED, l(P).expired);
  }
  async function Ki() {
    var a;
    if (At())
      throw I("mocking error"), new Error("Mocked error.");
    if (l(vr))
      return I("using provided json data"), l(vr);
    if (ge())
      return I("generating test challenge", { test: ge() }), ts(typeof ge() != "boolean" ? +ge() : void 0);
    {
      if (!s() && l(S)) {
        const L = l(S).getAttribute("action");
        L != null && L.includes("/form/") && s(L + "/altcha");
      }
      if (!s())
        throw new Error("Attribute challengeurl not set.");
      I("fetching challenge from", s());
      const f = {
        credentials: typeof d() == "boolean" ? "include" : d(),
        headers: Ce() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      }, g = await Xr()(s(), f);
      if (!g || !(g instanceof Response))
        throw new Error("Custom fetch function did not return a response.");
      if (g.status !== 200)
        throw new Error(`Server responded with ${g.status}.`);
      const m = g.headers.get("X-Altcha-Config"), b = await g.json(), C = new URLSearchParams((a = b.salt.split("?")) == null ? void 0 : a[1]), A = C.get("expires") || C.get("expire");
      if (A) {
        const L = new Date(+A * 1e3), F = isNaN(L.getTime()) ? 0 : L.getTime() - Date.now();
        F > 0 && mr(F);
      }
      if (m)
        try {
          const L = JSON.parse(m);
          L && typeof L == "object" && (L.verifyurl && !L.verifyurl.startsWith("fn:") && (L.verifyurl = ta(L.verifyurl)), ba(L));
        } catch (L) {
          I("unable to configure from X-Altcha-Config", L);
        }
      return b;
    }
  }
  function Ji(a) {
    var g, m;
    const f = (g = l(S)) == null ? void 0 : g.querySelector(typeof a == "string" ? `input[name="${a}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((m = f == null ? void 0 : f.value) == null ? void 0 : m.slice(f.value.indexOf("@"))) || void 0;
  }
  function Xr() {
    let a = fetch;
    if (p())
      if (I("using customfetch"), typeof p() == "string") {
        if (a = globalThis[p()] || null, !a)
          throw new Error(`Custom fetch function not found: ${p()}`);
      } else
        a = p();
    return a;
  }
  function Qr(a, f = [
    H() || "",
    document.documentElement.lang || "",
    ...navigator.languages
  ]) {
    const g = Object.keys(a).map((b) => b.toLowerCase()), m = f.reduce(
      (b, C) => (C = C.toLowerCase(), b || (a[C] ? C : null) || g.find((A) => C.split("-")[0] === A.split("-")[0]) || null),
      null
    );
    return a[m || "en"];
  }
  function Xi() {
    return Ce() === "ipAddress" ? {
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
    } : typeof Ce() == "object" ? Ce() : {
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
  function ea(a) {
    var g;
    return [
      ...((g = l(S)) == null ? void 0 : g.querySelectorAll(a != null && a.length ? a.map((m) => `input[name="${m}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (m, b) => {
        const C = b.name, A = b.value;
        return C && A && (m[C] = /\n/.test(A) ? A.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : A), m;
      },
      {}
    );
  }
  function ta(a, f) {
    const g = new URL(s() || location.origin), m = new URL(a, g);
    if (m.search || (m.search = g.search), f)
      for (const b in f)
        f[b] !== void 0 && f[b] !== null && m.searchParams.set(b, f[b]);
    return m.toString();
  }
  function Qi() {
    const a = Ot() !== void 0 ? Ot().split(",") : void 0;
    for (const f of globalThis.altchaPlugins)
      (!a || a.includes(f.pluginName)) && qe.push(new f({
        el: l(re),
        clarify: Lt,
        dispatch: ze,
        getConfiguration: pa,
        getFloatingAnchor: ma,
        getState: ya,
        log: I,
        reset: ut,
        solve: va,
        setState: Ee,
        setFloatingAnchor: ka,
        verify: je
      }));
  }
  function I(...a) {
    (h() || a.some((f) => f instanceof Error)) && console[a[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${oe()}]`, ...a);
  }
  function en() {
    y(B, Q.PAUSED, !0);
  }
  function tn(a) {
    y(B, Q.ERROR, !0);
  }
  function rn() {
    y(B, Q.READY, !0);
  }
  function an() {
    y(B, Q.LOADING, !0);
  }
  function nn() {
    y(B, Q.PLAYING, !0);
  }
  function on() {
    y(B, Q.PAUSED, !0);
  }
  function ln(a) {
    var f;
    if (a.preventDefault(), a.stopPropagation(), l(M)) {
      const g = new FormData(a.target), m = String(g.get("code"));
      if ((f = te()) != null && f.startsWith("fn:")) {
        const b = te().replace(/^fn:/, "");
        if (I(`calling ${b} function instead of verifyurl`), !(b in globalThis))
          throw new Error(`Global function "${b}" is undefined.`);
        return globalThis[b]({
          challenge: l(M).challenge,
          code: m,
          solution: l(M).solution
        });
      }
      y(Ke, !0), ca(Ft(l(M).challenge, l(M).solution), m).then(({ reason: b, verified: C }) => {
        C ? (y(M, null), Ee(w.VERIFIED), I("verified"), xr().then(() => {
          var A;
          (A = l(br)) == null || A.focus(), ze("verified", { payload: l(Re) }), n() === "onsubmit" && da(l(Ht));
        })) : (ut(), y(We, b || "Verification failed", !0));
      }).catch((b) => {
        y(M, null), Ee(w.ERROR, b), I("sentinel verification failed:", b);
      }).finally(() => {
        y(Ke, !1);
      });
    }
  }
  function ra(a) {
    var g;
    const f = a.target;
    _() && f && !l(re).contains(f) && (l(T) === w.VERIFIED && K() === !1 || l(T) === w.VERIFIED && K() === "focus" && !((g = l(S)) != null && g.matches(":focus-within")) || n() === "off" && l(T) === w.UNVERIFIED) && Aa();
  }
  function aa() {
    _() && l(T) !== w.UNVERIFIED && Et();
  }
  function sn(a) {
    for (const f of qe)
      typeof f.onErrorChange == "function" && f.onErrorChange(l(We));
  }
  function ia(a) {
    l(T) === w.UNVERIFIED ? je() : _() && K() === "focus" && l(T) === w.VERIFIED && yr();
  }
  function na(a) {
    const f = a.target;
    f != null && f.hasAttribute("data-code-challenge-form") || (y(Ht, a.submitter, !0), l(S) && n() === "onsubmit" ? l(T) === w.UNVERIFIED ? (a.preventDefault(), a.stopPropagation(), je().then(() => {
      da(l(Ht));
    })) : l(T) !== w.VERIFIED && (a.preventDefault(), a.stopPropagation(), l(T) === w.VERIFYING && la()) : l(S) && _() && n() === "off" && l(T) === w.UNVERIFIED && (a.preventDefault(), a.stopPropagation(), yr()));
  }
  function oa() {
    ut();
  }
  function la() {
    l(T) === w.VERIFYING && l(P).waitAlert && alert(l(P).waitAlert);
  }
  function sa() {
    l(De) ? l(De).paused ? (l(De).currentTime = 0, l(De).play()) : l(De).pause() : (y(pr, !0), requestAnimationFrame(() => {
      var a;
      (a = l(De)) == null || a.play();
    }));
  }
  function un(a) {
    for (const f of qe)
      typeof f.onStateChange == "function" && f.onStateChange(l(T));
    _() && l(T) !== w.UNVERIFIED && requestAnimationFrame(() => {
      Et();
    }), y(wt, l(T) === w.VERIFIED);
  }
  function ua() {
    _() && Et();
  }
  function fa(a) {
    return JSON.parse(a);
  }
  async function fn(a) {
    if (!te())
      throw new Error("Attribute verifyurl not set.");
    I("requesting server verification from", te());
    const f = { payload: a };
    if (Ce() !== !1) {
      const {
        blockedCountries: b,
        classifier: C,
        disableRules: A,
        email: L,
        expectedLanguages: F,
        expectedCountries: X,
        fields: le,
        ipAddress: Oe,
        text: kr,
        timeZone: Ut
      } = Xi();
      f.blockedCountries = b, f.classifier = C, f.disableRules = A, f.email = L === !1 ? void 0 : Ji(L), f.expectedCountries = X, f.expectedLanguages = F || (Wr ? [Wr] : void 0), f.fields = le === !1 ? void 0 : ea(le), f.ipAddress = Oe === !1 ? void 0 : Oe || "auto", f.text = kr, f.timeZone = Ut === !1 ? void 0 : Ut || Ga();
    }
    const g = await Xr()(te(), {
      body: JSON.stringify(f),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (!g || !(g instanceof Response))
      throw new Error("Custom fetch function did not return a response.");
    if (g.status !== 200)
      throw new Error(`Server responded with ${g.status}.`);
    const m = await g.json();
    if (m != null && m.payload && y(Re, m.payload, !0), ze("serververification", m), u() && m.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  async function ca(a, f) {
    if (!te())
      throw new Error("Attribute verifyurl not set.");
    I("requesting sentinel verification from", te());
    const g = { code: f, payload: a };
    Ye() && (g.fields = Ye().fields ? ea() : void 0, g.timeZone = Ye().timeZone ? Ga() : void 0);
    const m = await fetch(te(), {
      body: JSON.stringify(g),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (!m || !(m instanceof Response))
      throw new Error("Fetch function did not return a response.");
    if (m.status !== 200)
      throw new Error(`Server responded with ${m.status}.`);
    const b = await m.json();
    return b != null && b.payload && y(Re, b.payload, !0), ze("sentinelverification", b), b;
  }
  function da(a) {
    var f;
    l(S) && "requestSubmit" in l(S) ? l(S).requestSubmit(a) : (f = l(S)) != null && f.reportValidity() && (a ? a.click() : l(S).submit());
  }
  function mr(a) {
    I("expire", a), Le && (clearTimeout(Le), Le = null), a < 1 ? Jr() : Le = setTimeout(Jr, a);
  }
  function ha(a) {
    I("floating", a), _() !== a && (l(re).style.left = "", l(re).style.top = ""), _(a === !0 || a === "" ? "auto" : a === !1 || a === "false" ? void 0 : _()), _() ? (n() || n("onsubmit"), document.addEventListener("scroll", aa), document.addEventListener("click", ra), window.addEventListener("resize", ua)) : n() === "onsubmit" && n(void 0);
  }
  function ga(a) {
    if (!a.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (a.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!Yr.includes(a.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${Yr.join(", ")}`);
    if (!a.challenge || a.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!a.salt || a.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function va(a) {
    let f = null;
    if ("Worker" in window) {
      try {
        f = await cn(a, a.maxNumber || a.maxnumber || me());
      } catch (g) {
        I(g);
      }
      if ((f == null ? void 0 : f.number) !== void 0 || "obfuscated" in a)
        return { data: a, solution: f };
    }
    if ("obfuscated" in a) {
      const g = await ns(a.obfuscated, a.key, a.maxNumber || a.maxnumber);
      return { data: a, solution: await g.promise };
    }
    return {
      data: a,
      solution: await rs(a.challenge, a.salt, a.algorithm, a.maxNumber || a.maxnumber || me()).promise
    };
  }
  async function cn(a, f = typeof ge() == "number" ? ge() : a.maxNumber || a.maxnumber || me(), g = Math.ceil(lt())) {
    const m = [];
    g = Math.min(16, f, Math.max(1, g));
    for (let A = 0; A < g; A++)
      m.push(altchaCreateWorker(_t()));
    const b = Math.ceil(f / g), C = await Promise.all(m.map((A, L) => {
      const F = L * b;
      return new Promise((X) => {
        A.addEventListener("message", (le) => {
          if (le.data)
            for (const Oe of m)
              Oe !== A && Oe.postMessage({ type: "abort" });
          X(le.data);
        }), A.postMessage({
          payload: a,
          max: F + b,
          start: F,
          type: "work"
        });
      });
    }));
    for (const A of m)
      A.terminate();
    return C.find((A) => !!A) || null;
  }
  async function Lt() {
    if (!Ne()) {
      Ee(w.ERROR);
      return;
    }
    const a = qe.find((f) => f.constructor.pluginName === "obfuscation");
    if (!a || !("clarify" in a)) {
      Ee(w.ERROR), I("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in a && typeof a.clarify == "function")
      return a.clarify();
  }
  function ba(a) {
    a.obfuscated !== void 0 && Ne(a.obfuscated), a.auto !== void 0 && (n(a.auto), n() === "onload" && (Ne() ? Lt() : je())), a.blockspam !== void 0 && u(!!a.blockspam), a.customfetch !== void 0 && p(a.customfetch), a.floatinganchor !== void 0 && q(a.floatinganchor), a.delay !== void 0 && v(a.delay), a.floatingoffset !== void 0 && ce(a.floatingoffset), a.floating !== void 0 && ha(a.floating), a.expire !== void 0 && (mr(a.expire), V(a.expire)), a.challenge && (c(typeof a.challenge == "string" ? a.challenge : JSON.stringify(a.challenge)), ga(l(vr))), a.challengeurl !== void 0 && s(a.challengeurl), a.debug !== void 0 && h(!!a.debug), a.hidefooter !== void 0 && ee(!!a.hidefooter), a.hidelogo !== void 0 && J(!!a.hidelogo), a.language !== void 0 && ot(Qr(o(), [a.language])), a.maxnumber !== void 0 && me(+a.maxnumber), a.mockerror !== void 0 && At(!!a.mockerror), a.name !== void 0 && oe(a.name), a.refetchonexpire !== void 0 && kt(!!a.refetchonexpire), a.sentinel !== void 0 && typeof a.sentinel == "object" && Ye(a.sentinel), a.spamfilter !== void 0 && Ce(typeof a.spamfilter == "object" ? a.spamfilter : !!a.spamfilter), a.strings && ot(typeof a.strings == "string" ? a.strings : JSON.stringify(a.strings)), a.test !== void 0 && ge(typeof a.test == "number" ? a.test : !!a.test), a.verifyurl !== void 0 && te(a.verifyurl), a.workers !== void 0 && lt(+a.workers), a.workerurl !== void 0 && _t(a.workerurl);
  }
  function pa() {
    return {
      auto: n(),
      blockspam: u(),
      challengeurl: s(),
      debug: h(),
      delay: v(),
      expire: V(),
      floating: _(),
      floatinganchor: q(),
      floatingoffset: ce(),
      hidefooter: ee(),
      hidelogo: J(),
      name: oe(),
      maxnumber: me(),
      mockerror: At(),
      obfuscated: Ne(),
      refetchonexpire: kt(),
      spamfilter: Ce(),
      strings: l(P),
      test: ge(),
      verifyurl: te(),
      workers: lt(),
      workerurl: _t()
    };
  }
  function ma() {
    return l(st);
  }
  function dn(a) {
    return qe.find((f) => f.constructor.pluginName === a);
  }
  function ya() {
    return l(T);
  }
  function Aa() {
    l(re).style.display = "none";
  }
  function Et(a = 20) {
    var f;
    if (l(re))
      if (l(st) || y(st, (q() ? document.querySelector(q()) : (f = l(S)) == null ? void 0 : f.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || l(S), !0), l(st)) {
        const g = parseInt(ce(), 10) || 12, m = l(st).getBoundingClientRect(), b = l(re).getBoundingClientRect(), C = document.documentElement.clientHeight, A = document.documentElement.clientWidth, L = _() === "auto" ? m.bottom + b.height + g + a > C : _() === "top", F = Math.max(a, Math.min(A - a - b.width, m.left + m.width / 2 - b.width / 2));
        if (L ? l(re).style.top = `${m.top - (b.height + g)}px` : l(re).style.top = `${m.bottom + g}px`, l(re).style.left = `${F}px`, l(re).setAttribute("data-floating", L ? "top" : "bottom"), l(Ct)) {
          const X = l(Ct).getBoundingClientRect();
          l(Ct).style.left = m.left - F + m.width / 2 - X.width / 2 + "px";
        }
      } else
        I("unable to find floating anchor element");
  }
  function ut(a = w.UNVERIFIED, f = null) {
    Le && (clearTimeout(Le), Le = null), y(wt, !1), y(Re, null), y(M, null), y(pr, !1), y(B, null), Ee(a, f);
  }
  function ka(a) {
    y(st, a, !0);
  }
  function Ee(a, f = null) {
    y(T, a, !0), y(We, f, !0), ze("statechange", {
      payload: l(Re),
      state: l(T)
    });
  }
  function yr() {
    l(re).style.display = "block", _() && Et();
  }
  async function je() {
    return ut(w.VERIFYING), await new Promise((a) => setTimeout(a, v() || 0)), Ki().then((a) => (ga(a), I("challenge", a), va(a))).then(({ data: a, solution: f }) => {
      var g;
      if (I("solution", f), !f || a && "challenge" in a && !("clearText" in f))
        if ((f == null ? void 0 : f.number) !== void 0 && "challenge" in a)
          if (te() && "codeChallenge" in a)
            ["INPUT", "BUTTON", "SELECT", "TEXTAREA"].includes(((g = document.activeElement) == null ? void 0 : g.tagName) || "") && k() === !1 && document.activeElement.blur(), y(M, { challenge: a, solution: f }, !0);
          else {
            if (te() && Ye() !== void 0)
              return ca(Ft(a, f));
            if (te())
              return fn(Ft(a, f));
            y(Re, Ft(a, f), !0), I("payload", l(Re));
          }
        else
          throw I("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      l(M) ? (Ee(w.CODE), xr().then(() => {
        ze("code", { codeChallenge: l(M) });
      })) : (Ee(w.VERIFIED), I("verified"), xr().then(() => {
        ze("verified", { payload: l(Re) });
      }));
    }).catch((a) => {
      I(a), Ee(w.ERROR, a.message);
    });
  }
  var _a = Cs(), wa = Vt(_a);
  Do(wa, t, "default", {});
  var xt = Y(wa, 2), Ar = G(xt), Mt = G(Ar);
  let Ca;
  var La = G(Mt);
  {
    var hn = (a) => {
      Tr(a);
    };
    W(La, (a) => {
      l(T) === w.VERIFYING && a(hn);
    });
  }
  var Je = Y(La, 2);
  Fa(Je), Je.__change = [
    us,
    T,
    Ce,
    S,
    wt,
    Ne,
    Lt,
    je
  ], Yt(Je, (a) => y(br, a), () => l(br)), Z(Mt);
  var Bt = Y(Mt, 2), gn = G(Bt);
  {
    var vn = (a) => {
      var f = Gt(), g = Vt(f);
      Xe(g, () => l(P).verified), O(a, f);
    }, bn = (a, f) => {
      {
        var g = (b) => {
          var C = Gt(), A = Vt(C);
          Xe(A, () => l(P).verifying), O(b, C);
        }, m = (b, C) => {
          {
            var A = (F) => {
              var X = Gt(), le = Vt(X);
              Xe(le, () => l(P).verificationRequired), O(F, X);
            }, L = (F) => {
              var X = Gt(), le = Vt(X);
              Xe(le, () => l(P).label), O(F, X);
            };
            W(
              b,
              (F) => {
                l(T) === w.CODE ? F(A) : F(L, !1);
              },
              C
            );
          }
        };
        W(
          a,
          (b) => {
            l(T) === w.VERIFYING ? b(g) : b(m, !1);
          },
          f
        );
      }
    };
    W(gn, (a) => {
      l(T) === w.VERIFIED ? a(vn) : a(bn, !1);
    });
  }
  Z(Bt);
  var Ea = Y(Bt, 2);
  {
    var pn = (a) => {
      var f = cs();
      Fa(f), xe(() => {
        R(f, "name", oe()), Mo(f, l(Re));
      }), O(a, f);
    };
    W(Ea, (a) => {
      l(T) === w.VERIFIED && a(pn);
    });
  }
  var xa = Y(Ea, 2);
  {
    var mn = (a) => {
      var f = ds(), g = G(f);
      R(g, "href", Gi), Z(f), xe(() => R(g, "aria-label", l(P).ariaLinkLabel)), O(a, f);
    };
    W(xa, (a) => {
      (J() !== !0 || l(gr)) && a(mn);
    });
  }
  var yn = Y(xa, 2);
  {
    var An = (a) => {
      var f = ms(), g = Y(G(f), 2), m = G(g), b = Y(m, 2);
      Ro(b, !k()), b.__keydown = [
        ls,
        sa
      ];
      var C = Y(b, 2), A = G(C), L = G(A);
      {
        var F = (ye) => {
          var U = bs();
          U.__click = sa;
          var Zt = G(U);
          {
            var Tt = (ft) => {
              Tr(ft, () => 20);
            }, Tn = (ft, In) => {
              {
                var Vn = (ct) => {
                  var _r = hs();
                  O(ct, _r);
                }, Rn = (ct, _r) => {
                  {
                    var jn = (dt) => {
                      var wr = gs();
                      O(dt, wr);
                    }, $n = (dt) => {
                      var wr = vs();
                      O(dt, wr);
                    };
                    W(
                      ct,
                      (dt) => {
                        l(B) === Q.PLAYING ? dt(jn) : dt($n, !1);
                      },
                      _r
                    );
                  }
                };
                W(
                  ft,
                  (ct) => {
                    l(B) === Q.ERROR ? ct(Vn) : ct(Rn, !1);
                  },
                  In
                );
              }
            };
            W(Zt, (ft) => {
              l(B) === Q.LOADING ? ft(Tt) : ft(Tn, !1);
            });
          }
          Z(U), xe(() => {
            R(U, "title", l(P).getAudioChallenge), U.disabled = l(B) === Q.LOADING || l(B) === Q.ERROR || l(Ke), R(U, "aria-label", l(B) === Q.LOADING ? l(P).loading : l(P).getAudioChallenge);
          }), O(ye, U);
        };
        W(L, (ye) => {
          l(M).challenge.codeChallenge.audio && ye(F);
        });
      }
      var X = Y(L, 2);
      X.__click = [ss, je], Z(A);
      var le = Y(A, 2), Oe = G(le);
      {
        var kr = (ye) => {
          Tr(ye, () => 16);
        };
        W(Oe, (ye) => {
          l(Ke) && ye(kr);
        });
      }
      var Ut = Y(Oe);
      Z(le), Z(C);
      var En = Y(C, 2);
      {
        var xn = (ye) => {
          var U = ps(), Zt = G(U);
          Z(U), Yt(U, (Tt) => y(De, Tt), () => l(De)), xe((Tt) => R(Zt, "src", Tt), [
            () => ta(l(M).challenge.codeChallenge.audio, { language: H() })
          ]), He("loadstart", U, an), He("canplay", U, rn), He("pause", U, on), He("playing", U, nn), He("ended", U, en), He("error", Zt, tn), O(ye, U);
        };
        W(En, (ye) => {
          l(M).challenge.codeChallenge.audio && l(pr) && ye(xn);
        });
      }
      Z(g), Z(f), xe(() => {
        R(f, "aria-label", l(P).verificationRequired), R(m, "src", l(M).challenge.codeChallenge.image), R(b, "minlength", l(M).challenge.codeChallenge.length || 1), R(b, "maxlength", l(M).challenge.codeChallenge.length), R(b, "placeholder", l(P).enterCode), R(b, "aria-label", l(B) === Q.LOADING ? l(P).loading : l(B) === Q.PLAYING ? "" : l(P).enterCodeAria), R(b, "aria-live", l(B) ? "assertive" : "polite"), R(b, "aria-busy", l(B) === Q.LOADING), b.disabled = l(Ke), R(X, "aria-label", l(P).reload), R(X, "title", l(P).reload), X.disabled = l(Ke), le.disabled = l(Ke), R(le, "aria-label", l(P).verify), Po(Ut, ` ${l(P).verify ?? ""}`);
      }), He("submit", g, ln, !0), O(a, f);
    };
    W(yn, (a) => {
      var f;
      (f = l(M)) != null && f.challenge.codeChallenge && a(An);
    });
  }
  Z(Ar);
  var Ta = Y(Ar, 2);
  {
    var kn = (a) => {
      var f = ks(), g = Y(G(f), 2);
      {
        var m = (C) => {
          var A = ys(), L = G(A);
          Xe(L, () => l(P).expired), Z(A), xe(() => R(A, "title", l(We))), O(C, A);
        }, b = (C) => {
          var A = As(), L = G(A);
          Xe(L, () => l(P).error), Z(A), xe(() => R(A, "title", l(We))), O(C, A);
        };
        W(g, (C) => {
          l(T) === w.EXPIRED ? C(m) : C(b, !1);
        });
      }
      Z(f), O(a, f);
    };
    W(Ta, (a) => {
      (l(We) || l(T) === w.EXPIRED) && a(kn);
    });
  }
  var Ia = Y(Ta, 2);
  {
    var _n = (a) => {
      var f = _s(), g = G(f), m = G(g);
      Xe(m, () => l(P).footer), Z(g), Z(f), O(a, f);
    };
    W(Ia, (a) => {
      l(P).footer && (ee() !== !0 || l(gr)) && a(_n);
    });
  }
  var wn = Y(Ia, 2);
  {
    var Cn = (a) => {
      var f = ws();
      Yt(f, (g) => y(Ct, g), () => l(Ct)), O(a, f);
    };
    W(wn, (a) => {
      _() && a(Cn);
    });
  }
  Z(xt), Yt(xt, (a) => y(re, a), () => l(re)), xe(
    (a) => {
      R(xt, "data-state", l(T)), R(xt, "data-floating", _()), Ca = Oo(Mt, 1, "altcha-checkbox", null, Ca, a), R(Je, "id", l(Kr)), Je.required = n() !== "onsubmit" && (!_() || n() !== "off"), R(Bt, "for", l(Kr));
    },
    [
      () => ({
        "altcha-checkbox-verifying": l(T) === w.VERIFYING
      })
    ]
  ), He("invalid", Je, la), Uo(Je, () => l(wt), (a) => y(wt, a)), O(e, _a);
  var Ln = ui({
    clarify: Lt,
    configure: ba,
    getConfiguration: pa,
    getFloatingAnchor: ma,
    getPlugin: dn,
    getState: ya,
    hide: Aa,
    repositionFloating: Et,
    reset: ut,
    setFloatingAnchor: ka,
    setState: Ee,
    show: yr,
    verify: je,
    get auto() {
      return n();
    },
    set auto(a = void 0) {
      n(a), E();
    },
    get blockspam() {
      return u();
    },
    set blockspam(a = void 0) {
      u(a), E();
    },
    get challengeurl() {
      return s();
    },
    set challengeurl(a = void 0) {
      s(a), E();
    },
    get challengejson() {
      return c();
    },
    set challengejson(a = void 0) {
      c(a), E();
    },
    get credentials() {
      return d();
    },
    set credentials(a = void 0) {
      d(a), E();
    },
    get customfetch() {
      return p();
    },
    set customfetch(a = void 0) {
      p(a), E();
    },
    get debug() {
      return h();
    },
    set debug(a = !1) {
      h(a), E();
    },
    get delay() {
      return v();
    },
    set delay(a = 0) {
      v(a), E();
    },
    get disableautofocus() {
      return k();
    },
    set disableautofocus(a = !1) {
      k(a), E();
    },
    get expire() {
      return V();
    },
    set expire(a = void 0) {
      V(a), E();
    },
    get floating() {
      return _();
    },
    set floating(a = void 0) {
      _(a), E();
    },
    get floatinganchor() {
      return q();
    },
    set floatinganchor(a = void 0) {
      q(a), E();
    },
    get floatingoffset() {
      return ce();
    },
    set floatingoffset(a = void 0) {
      ce(a), E();
    },
    get floatingpersist() {
      return K();
    },
    set floatingpersist(a = !1) {
      K(a), E();
    },
    get hidefooter() {
      return ee();
    },
    set hidefooter(a = !1) {
      ee(a), E();
    },
    get hidelogo() {
      return J();
    },
    set hidelogo(a = !1) {
      J(a), E();
    },
    get id() {
      return nt();
    },
    set id(a = void 0) {
      nt(a), E();
    },
    get language() {
      return H();
    },
    set language(a = void 0) {
      H(a), E();
    },
    get name() {
      return oe();
    },
    set name(a = "altcha") {
      oe(a), E();
    },
    get maxnumber() {
      return me();
    },
    set maxnumber(a = 1e6) {
      me(a), E();
    },
    get mockerror() {
      return At();
    },
    set mockerror(a = !1) {
      At(a), E();
    },
    get obfuscated() {
      return Ne();
    },
    set obfuscated(a = void 0) {
      Ne(a), E();
    },
    get plugins() {
      return Ot();
    },
    set plugins(a = void 0) {
      Ot(a), E();
    },
    get refetchonexpire() {
      return kt();
    },
    set refetchonexpire(a = !0) {
      kt(a), E();
    },
    get sentinel() {
      return Ye();
    },
    set sentinel(a = void 0) {
      Ye(a), E();
    },
    get spamfilter() {
      return Ce();
    },
    set spamfilter(a = !1) {
      Ce(a), E();
    },
    get strings() {
      return ot();
    },
    set strings(a = void 0) {
      ot(a), E();
    },
    get test() {
      return ge();
    },
    set test(a = !1) {
      ge(a), E();
    },
    get verifyurl() {
      return te();
    },
    set verifyurl(a = void 0) {
      te(a), E();
    },
    get workers() {
      return lt();
    },
    set workers(a = Math.min(16, navigator.hardwareConcurrency || 8)) {
      lt(a), E();
    },
    get workerurl() {
      return _t();
    },
    set workerurl(a = void 0) {
      _t(a), E();
    }
  });
  return i(), Ln;
}
So(["change", "keydown", "click"]);
customElements.define("altcha-widget", Xo(
  Ls,
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
const Es = '@keyframes altcha-spinner{to{transform:rotate(360deg)}}.altcha{background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);position:relative}.altcha:focus-within{border-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating]{background:var(--altcha-color-base, white);display:none;filter:drop-shadow(3px 3px 6px rgba(0,0,0,.2));left:-100%;position:fixed;top:-100%;width:var(--altcha-max-width, 260px);z-index:999999}.altcha[data-floating=top] .altcha-anchor-arrow{border-bottom-color:transparent;border-top-color:var(--altcha-color-border, #a0a0a0);bottom:-12px;top:auto}.altcha[data-floating=bottom]:focus-within::after{border-bottom-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating=top]:focus-within::after{border-top-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating]:not([data-state=unverified]){display:block}.altcha-anchor-arrow{border:6px solid transparent;border-bottom-color:var(--altcha-color-border, #a0a0a0);content:"";height:0;left:12px;position:absolute;top:-12px;width:0}.altcha-main{align-items:center;display:flex;gap:.4rem;padding:.7rem;position:relative}.altcha-code-challenge{background:var(--altcha-color-base, white);border:1px solid var(--altcha-color-border-focus, currentColor);border-radius:var(--altcha-border-radius, 3px);filter:drop-shadow(3px 3px 6px rgba(0,0,0,.2));padding:.5rem;position:absolute;top:2.5rem;z-index:9999999}.altcha-code-challenge>form{display:flex;flex-direction:column;gap:.5rem}.altcha-code-challenge-input{border:1px solid currentColor;border-radius:3px;box-sizing:border-box;outline:0;font-size:16px;padding:.35rem;width:220px}.altcha-code-challenge-input:focus{outline:2px solid color-mix(in srgb,var(--altcha-color-active, #1D1DC9) 20%,transparent)}.altcha-code-challenge-input:disabled{opacity:.7}.altcha-code-challenge-image{background-color:#fff;border:1px solid currentColor;border-radius:3px;box-sizing:border-box;object-fit:contain;height:50px;width:220px}.altcha-code-challenge-audio,.altcha-code-challenge-reload{background:color-mix(in srgb,var(--altcha-color-text, currentColor) 10%,transparent);border:0;border-radius:3px;color:var(--altcha-color-text, currentColor);cursor:pointer;display:flex;align-items:center;justify-content:center;padding:.35rem}.altcha-code-challenge-audio:disabled,.altcha-code-challenge-reload:disabled,.altcha-code-challenge-verify:disabled{opacity:.7;pointer-events:none}.altcha-code-challenge-audio>*,.altcha-code-challenge-reload>*{height:20px;width:20px}.altcha-code-challenge-buttons{display:flex;justify-content:space-between}.altcha-code-challenge-buttons-left{display:flex;gap:.25rem}.altcha-code-challenge-verify{align-items:center;background:var(--altcha-color-active, #1D1DC9);border:0;border-radius:3px;color:#fff;cursor:pointer;display:flex;gap:.5rem;font-size:100%;padding:.35rem 1rem}.altcha-code-challenge-arrow{border:6px solid transparent;border-bottom-color:var(--altcha-color-border, currentColor);content:"";height:0;left:.15rem;position:absolute;top:-12px;width:0}.altcha[data-floating=top] .altcha-code-challenge{top:-150px}.altcha[data-floating=top] .altcha-code-challenge-arrow{border-bottom-color:transparent;border-top-color:var(--altcha-color-border, currentColor);bottom:-12px;top:auto}.altcha-label{cursor:pointer;flex-grow:1}.altcha-logo{color:currentColor!important;opacity:.7}.altcha-footer:hover,.altcha-logo:hover{opacity:1}.altcha-error{color:var(--altcha-color-error-text, #f23939);display:flex;font-size:.85rem;gap:.3rem;padding:0 .7rem .7rem}.altcha-footer{align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:.75rem;opacity:.7;justify-content:end;padding:.2rem .7rem}.altcha-footer a{color:currentColor}.altcha-checkbox{display:flex;align-items:center;justify-content:center;height:24px;position:relative;width:24px}.altcha-checkbox .altcha-spinner{bottom:0;left:0;position:absolute;right:0;top:0}.altcha-checkbox input{width:18px;height:18px;margin:0}.altcha-checkbox-verifying input{appearance:none;opacity:0;pointer-events:none}.altcha-spinner{animation:altcha-spinner .75s infinite linear;transform-origin:center}';
function xs(e, t = "__altcha-css") {
  if (!document.getElementById(t)) {
    const r = document.createElement("style");
    r.id = t, r.textContent = e, document.head.appendChild(r);
  }
}
globalThis.altchaCreateWorker = (e) => e ? new Worker(new URL(e)) : new Xl();
xs(Es);
export {
  Ls as Altcha
};
