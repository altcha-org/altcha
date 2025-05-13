var xi = Object.defineProperty;
var jr = (e) => {
  throw TypeError(e);
};
var Ci = (e, t, r) => t in e ? xi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ae = (e, t, r) => Ci(e, typeof t != "symbol" ? t + "" : t, r), Br = (e, t, r) => t.has(e) || jr("Cannot " + r);
var Z = (e, t, r) => (Br(e, t, "read from private field"), r ? r.call(e) : t.get(e)), jt = (e, t, r) => t.has(e) ? jr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), Bt = (e, t, r, i) => (Br(e, t, "write to private field"), i ? i.call(e, r) : t.set(e, r), r);
const Ai = "5";
var ln;
typeof window < "u" && ((ln = window.__svelte ?? (window.__svelte = {})).v ?? (ln.v = /* @__PURE__ */ new Set())).add(Ai);
const Ii = 1, Ri = 4, Si = 8, Ti = 16, Ni = 1, Di = 2, Xt = "[", on = "[!", an = "]", Je = {}, G = Symbol(), Li = "http://www.w3.org/1999/xhtml", qr = !1;
function sn(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var fn = Array.isArray, Pi = Array.prototype.indexOf, Fi = Array.from, bt = Object.keys, Et = Object.defineProperty, Fe = Object.getOwnPropertyDescriptor, Oi = Object.getOwnPropertyDescriptors, Mi = Object.prototype, Vi = Array.prototype, un = Object.getPrototypeOf, Hr = Object.isExtensible;
function cn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const fe = 2, dn = 4, Rt = 8, zt = 16, ye = 32, Me = 64, $t = 128, ee = 256, kt = 512, K = 1024, ve = 2048, Ve = 4096, Ke = 8192, St = 16384, Ui = 32768, Qt = 65536, ji = 1 << 19, vn = 1 << 20, Ht = 1 << 21, ut = Symbol("$state"), hn = Symbol("legacy props"), Bi = Symbol("");
function qi(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Hi() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Yi(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Wi() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Zi() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Gi(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Ji() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ki() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Xi() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Tt(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let D = !1;
function Ge(e) {
  D = e;
}
let P;
function Ie(e) {
  if (e === null)
    throw Tt(), Je;
  return P = e;
}
function Xe() {
  return Ie(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Te(P)
  );
}
function X(e) {
  if (D) {
    if (/* @__PURE__ */ Te(P) !== null)
      throw Tt(), Je;
    P = e;
  }
}
function zi() {
  for (var e = 0, t = P; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === an) {
        if (e === 0) return t;
        e -= 1;
      } else (r === Xt || r === on) && (e += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Te(t)
    );
    t.remove(), t = i;
  }
}
let Qi = !1;
function xe(e) {
  if (typeof e != "object" || e === null || ut in e)
    return e;
  const t = un(e);
  if (t !== Mi && t !== Vi)
    return e;
  var r = /* @__PURE__ */ new Map(), i = fn(e), l = /* @__PURE__ */ J(0), o = I, a = (s) => {
    var f = I;
    he(o);
    var d = s();
    return he(f), d;
  };
  return i && r.set("length", /* @__PURE__ */ J(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, f, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && Ji();
        var h = r.get(f);
        return h === void 0 ? (h = a(() => /* @__PURE__ */ J(d.value)), r.set(f, h)) : L(
          h,
          a(() => xe(d.value))
        ), !0;
      },
      deleteProperty(s, f) {
        var d = r.get(f);
        if (d === void 0)
          f in s && (r.set(
            f,
            a(() => /* @__PURE__ */ J(G))
          ), qt(l));
        else {
          if (i && typeof f == "string") {
            var h = (
              /** @type {Source<number>} */
              r.get("length")
            ), v = Number(f);
            Number.isInteger(v) && v < h.v && L(h, v);
          }
          L(d, G), qt(l);
        }
        return !0;
      },
      get(s, f, d) {
        var m;
        if (f === ut)
          return e;
        var h = r.get(f), v = f in s;
        if (h === void 0 && (!v || (m = Fe(s, f)) != null && m.writable) && (h = a(() => /* @__PURE__ */ J(xe(v ? s[f] : G))), r.set(f, h)), h !== void 0) {
          var g = c(h);
          return g === G ? void 0 : g;
        }
        return Reflect.get(s, f, d);
      },
      getOwnPropertyDescriptor(s, f) {
        var d = Reflect.getOwnPropertyDescriptor(s, f);
        if (d && "value" in d) {
          var h = r.get(f);
          h && (d.value = c(h));
        } else if (d === void 0) {
          var v = r.get(f), g = v == null ? void 0 : v.v;
          if (v !== void 0 && g !== G)
            return {
              enumerable: !0,
              configurable: !0,
              value: g,
              writable: !0
            };
        }
        return d;
      },
      has(s, f) {
        var g;
        if (f === ut)
          return !0;
        var d = r.get(f), h = d !== void 0 && d.v !== G || Reflect.has(s, f);
        if (d !== void 0 || R !== null && (!h || (g = Fe(s, f)) != null && g.writable)) {
          d === void 0 && (d = a(() => /* @__PURE__ */ J(h ? xe(s[f]) : G)), r.set(f, d));
          var v = c(d);
          if (v === G)
            return !1;
        }
        return h;
      },
      set(s, f, d, h) {
        var V;
        var v = r.get(f), g = f in s;
        if (i && f === "length")
          for (var m = d; m < /** @type {Source<number>} */
          v.v; m += 1) {
            var x = r.get(m + "");
            x !== void 0 ? L(x, G) : m in s && (x = a(() => /* @__PURE__ */ J(G)), r.set(m + "", x));
          }
        v === void 0 ? (!g || (V = Fe(s, f)) != null && V.writable) && (v = a(() => /* @__PURE__ */ J(void 0)), L(
          v,
          a(() => xe(d))
        ), r.set(f, v)) : (g = v.v !== G, L(
          v,
          a(() => xe(d))
        ));
        var N = Reflect.getOwnPropertyDescriptor(s, f);
        if (N != null && N.set && N.set.call(h, d), !g) {
          if (i && typeof f == "string") {
            var O = (
              /** @type {Source<number>} */
              r.get("length")
            ), j = Number(f);
            Number.isInteger(j) && j >= O.v && L(O, j + 1);
          }
          qt(l);
        }
        return !0;
      },
      ownKeys(s) {
        c(l);
        var f = Reflect.ownKeys(s).filter((v) => {
          var g = r.get(v);
          return g === void 0 || g.v !== G;
        });
        for (var [d, h] of r)
          h.v !== G && !(d in s) && f.push(d);
        return f;
      },
      setPrototypeOf() {
        Ki();
      }
    }
  );
}
function qt(e, t = 1) {
  L(e, e.v + t);
}
var Yr, gn, _n, mn;
function Yt() {
  if (Yr === void 0) {
    Yr = window, gn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    _n = Fe(t, "firstChild").get, mn = Fe(t, "nextSibling").get, Hr(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Hr(r) && (r.__t = void 0);
  }
}
function er(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function oe(e) {
  return _n.call(e);
}
// @__NO_SIDE_EFFECTS__
function Te(e) {
  return mn.call(e);
}
function z(e, t) {
  if (!D)
    return /* @__PURE__ */ oe(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ oe(P)
  );
  return r === null && (r = P.appendChild(er())), Ie(r), r;
}
function Wr(e, t) {
  if (!D) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ oe(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Te(r) : r;
  }
  return P;
}
function we(e, t = 1, r = !1) {
  let i = D ? P : e;
  for (var l; t--; )
    l = i, i = /** @type {TemplateNode} */
    /* @__PURE__ */ Te(i);
  if (!D)
    return i;
  var o = i == null ? void 0 : i.nodeType;
  if (r && o !== 3) {
    var a = er();
    return i === null ? l == null || l.after(a) : i.before(a), Ie(a), a;
  }
  return Ie(i), /** @type {TemplateNode} */
  i;
}
function el(e) {
  e.textContent = "";
}
function wn(e) {
  return e === this.v;
}
function tl(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function pn(e) {
  return !tl(e, this.v);
}
// @__NO_SIDE_EFFECTS__
function tr(e) {
  var t = fe | ve, r = I !== null && (I.f & fe) !== 0 ? (
    /** @type {Derived} */
    I
  ) : null;
  return R === null || r !== null && (r.f & ee) !== 0 ? t |= ee : R.f |= vn, {
    ctx: Y,
    deps: null,
    effects: null,
    equals: wn,
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
// @__NO_SIDE_EFFECTS__
function st(e) {
  const t = /* @__PURE__ */ tr(e);
  return Ln(t), t;
}
function yn(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Re(
        /** @type {Effect} */
        t[r]
      );
  }
}
function rl(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & fe) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function bn(e) {
  var t, r = R;
  Se(rl(e));
  try {
    yn(e), t = Mn(e);
  } finally {
    Se(r);
  }
  return t;
}
function En(e) {
  var t = bn(e), r = (Ce || (e.f & ee) !== 0) && e.deps !== null ? Ve : K;
  ue(e, r), e.equals(t) || (e.v = t, e.wv = Fn());
}
function nl(e) {
  R === null && I === null && Yi(), I !== null && (I.f & ee) !== 0 && R === null && Hi(), gt && qi();
}
function il(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Ue(e, t, r, i = !0) {
  var l = R, o = {
    ctx: Y,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | ve,
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
      ir(o), o.f |= Ui;
    } catch (f) {
      throw Re(o), f;
    }
  else t !== null && Dt(o);
  var a = r && o.deps === null && o.first === null && o.nodes_start === null && o.teardown === null && (o.f & (vn | $t)) === 0;
  if (!a && i && (l !== null && il(o, l), I !== null && (I.f & fe) !== 0)) {
    var s = (
      /** @type {Derived} */
      I
    );
    (s.effects ?? (s.effects = [])).push(o);
  }
  return o;
}
function $n(e) {
  const t = Ue(Rt, null, !1);
  return ue(t, K), t.teardown = e, t;
}
function Wt(e) {
  nl();
  var t = R !== null && (R.f & ye) !== 0 && Y !== null && !Y.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      Y
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: R,
      reaction: I
    });
  } else {
    var i = rr(e);
    return i;
  }
}
function ll(e) {
  const t = Ue(Me, e, !0);
  return () => {
    Re(t);
  };
}
function ol(e) {
  const t = Ue(Me, e, !0);
  return (r = {}) => new Promise((i) => {
    r.outro ? Gt(t, () => {
      Re(t), i(void 0);
    }) : (Re(t), i(void 0));
  });
}
function rr(e) {
  return Ue(dn, e, !1);
}
function nr(e) {
  return Ue(Rt, e, !0);
}
function Pe(e, t = [], r = tr) {
  const i = t.map(r);
  return kn(() => e(...i.map(c)));
}
function kn(e, t = 0) {
  return Ue(Rt | zt | t, e, !0);
}
function Zt(e, t = !0) {
  return Ue(Rt | ye, e, !0, t);
}
function xn(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = gt, i = I;
    Gr(!0), he(null);
    try {
      t.call(null);
    } finally {
      Gr(r), he(i);
    }
  }
}
function Cn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var i = r.next;
    (r.f & Me) !== 0 ? r.parent = null : Re(r, t), r = i;
  }
}
function al(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & ye) === 0 && Re(t), t = r;
  }
}
function Re(e, t = !0) {
  var r = !1;
  (t || (e.f & ji) !== 0) && e.nodes_start !== null && (An(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), r = !0), Cn(e, t && !r), It(e, 0), ue(e, St);
  var i = e.transitions;
  if (i !== null)
    for (const o of i)
      o.stop();
  xn(e);
  var l = e.parent;
  l !== null && l.first !== null && In(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function An(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Te(e)
    );
    e.remove(), e = r;
  }
}
function In(e) {
  var t = e.parent, r = e.prev, i = e.next;
  r !== null && (r.next = i), i !== null && (i.prev = r), t !== null && (t.first === e && (t.first = i), t.last === e && (t.last = r));
}
function Gt(e, t) {
  var r = [];
  Rn(e, r, !0), sl(r, () => {
    Re(e), t && t();
  });
}
function sl(e, t) {
  var r = e.length;
  if (r > 0) {
    var i = () => --r || t();
    for (var l of e)
      l.out(i);
  } else
    t();
}
function Rn(e, t, r) {
  if ((e.f & Ke) === 0) {
    if (e.f ^= Ke, e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || r) && t.push(a);
    for (var i = e.first; i !== null; ) {
      var l = i.next, o = (i.f & Qt) !== 0 || (i.f & ye) !== 0;
      Rn(i, t, o ? r : !1), i = l;
    }
  }
}
function Zr(e) {
  Sn(e, !0);
}
function Sn(e, t) {
  if ((e.f & Ke) !== 0) {
    e.f ^= Ke, (e.f & K) === 0 && (e.f ^= K), _t(e) && (ue(e, ve), Dt(e));
    for (var r = e.first; r !== null; ) {
      var i = r.next, l = (r.f & Qt) !== 0 || (r.f & ye) !== 0;
      Sn(r, l ? t : !1), r = i;
    }
    if (e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || t) && o.in();
  }
}
const fl = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let dt = [], vt = [];
function Tn() {
  var e = dt;
  dt = [], cn(e);
}
function Nn() {
  var e = vt;
  vt = [], cn(e);
}
function Dn(e) {
  dt.length === 0 && queueMicrotask(Tn), dt.push(e);
}
function ul(e) {
  vt.length === 0 && fl(Nn), vt.push(e);
}
function cl() {
  dt.length > 0 && Tn(), vt.length > 0 && Nn();
}
let pt = !1, xt = !1, Ct = null, Oe = !1, gt = !1;
function Gr(e) {
  gt = e;
}
let ct = [];
let I = null, de = !1;
function he(e) {
  I = e;
}
let R = null;
function Se(e) {
  R = e;
}
let H = null;
function Ln(e) {
  I !== null && I.f & Ht && (H === null ? H = [e] : H.push(e));
}
let q = null, Q = 0, ie = null;
function dl(e) {
  ie = e;
}
let Pn = 1, At = 0, Ce = !1;
function Fn() {
  return ++Pn;
}
function _t(e) {
  var v;
  var t = e.f;
  if ((t & ve) !== 0)
    return !0;
  if ((t & Ve) !== 0) {
    var r = e.deps, i = (t & ee) !== 0;
    if (r !== null) {
      var l, o, a = (t & kt) !== 0, s = i && R !== null && !Ce, f = r.length;
      if (a || s) {
        var d = (
          /** @type {Derived} */
          e
        ), h = d.parent;
        for (l = 0; l < f; l++)
          o = r[l], (a || !((v = o == null ? void 0 : o.reactions) != null && v.includes(d))) && (o.reactions ?? (o.reactions = [])).push(d);
        a && (d.f ^= kt), s && h !== null && (h.f & ee) === 0 && (d.f ^= ee);
      }
      for (l = 0; l < f; l++)
        if (o = r[l], _t(
          /** @type {Derived} */
          o
        ) && En(
          /** @type {Derived} */
          o
        ), o.wv > e.wv)
          return !0;
    }
    (!i || R !== null && !Ce) && ue(e, K);
  }
  return !1;
}
function vl(e, t) {
  for (var r = t; r !== null; ) {
    if ((r.f & $t) !== 0)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= $t;
      }
    r = r.parent;
  }
  throw pt = !1, e;
}
function Jr(e) {
  return (e.f & St) === 0 && (e.parent === null || (e.parent.f & $t) === 0);
}
function Nt(e, t, r, i) {
  if (pt) {
    if (r === null && (pt = !1), Jr(t))
      throw e;
    return;
  }
  if (r !== null && (pt = !0), vl(e, t), Jr(t))
    throw e;
}
function On(e, t, r = !0) {
  var i = e.reactions;
  if (i !== null)
    for (var l = 0; l < i.length; l++) {
      var o = i[l];
      H != null && H.includes(e) || ((o.f & fe) !== 0 ? On(
        /** @type {Derived} */
        o,
        t,
        !1
      ) : t === o && (r ? ue(o, ve) : (o.f & K) !== 0 && ue(o, Ve), Dt(
        /** @type {Effect} */
        o
      )));
    }
}
function Mn(e) {
  var m;
  var t = q, r = Q, i = ie, l = I, o = Ce, a = H, s = Y, f = de, d = e.f;
  q = /** @type {null | Value[]} */
  null, Q = 0, ie = null, Ce = (d & ee) !== 0 && (de || !Oe || I === null), I = (d & (ye | Me)) === 0 ? e : null, H = null, Kr(e.ctx), de = !1, At++, e.f |= Ht;
  try {
    var h = (
      /** @type {Function} */
      (0, e.fn)()
    ), v = e.deps;
    if (q !== null) {
      var g;
      if (It(e, Q), v !== null && Q > 0)
        for (v.length = Q + q.length, g = 0; g < q.length; g++)
          v[Q + g] = q[g];
      else
        e.deps = v = q;
      if (!Ce)
        for (g = Q; g < v.length; g++)
          ((m = v[g]).reactions ?? (m.reactions = [])).push(e);
    } else v !== null && Q < v.length && (It(e, Q), v.length = Q);
    if (Yn() && ie !== null && !de && v !== null && (e.f & (fe | Ve | ve)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      ie.length; g++)
        On(
          ie[g],
          /** @type {Effect} */
          e
        );
    return l !== null && l !== e && (At++, ie !== null && (i === null ? i = ie : i.push(.../** @type {Source[]} */
    ie))), h;
  } finally {
    q = t, Q = r, ie = i, I = l, Ce = o, H = a, Kr(s), de = f, e.f ^= Ht;
  }
}
function hl(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var i = Pi.call(r, e);
    if (i !== -1) {
      var l = r.length - 1;
      l === 0 ? r = t.reactions = null : (r[i] = r[l], r.pop());
    }
  }
  r === null && (t.f & fe) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (q === null || !q.includes(t)) && (ue(t, Ve), (t.f & (ee | kt)) === 0 && (t.f ^= kt), yn(
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
    for (var i = t; i < r.length; i++)
      hl(e, r[i]);
}
function ir(e) {
  var t = e.f;
  if ((t & St) === 0) {
    ue(e, K);
    var r = R, i = Y, l = Oe;
    R = e, Oe = !0;
    try {
      (t & zt) !== 0 ? al(e) : Cn(e), xn(e);
      var o = Mn(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = Pn;
      var a = e.deps, s;
      qr && Qi && e.f & ve;
    } catch (f) {
      Nt(f, e, r, i || e.ctx);
    } finally {
      Oe = l, R = r;
    }
  }
}
function gl() {
  try {
    Wi();
  } catch (e) {
    if (Ct !== null)
      Nt(e, Ct, null);
    else
      throw e;
  }
}
function Vn() {
  var e = Oe;
  try {
    var t = 0;
    for (Oe = !0; ct.length > 0; ) {
      t++ > 1e3 && gl();
      var r = ct, i = r.length;
      ct = [];
      for (var l = 0; l < i; l++) {
        var o = ml(r[l]);
        _l(o);
      }
      ht.clear();
    }
  } finally {
    xt = !1, Oe = e, Ct = null;
  }
}
function _l(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var i = e[r];
      if ((i.f & (St | Ke)) === 0)
        try {
          _t(i) && (ir(i), i.deps === null && i.first === null && i.nodes_start === null && (i.teardown === null ? In(i) : i.fn = null));
        } catch (l) {
          Nt(l, i, null, i.ctx);
        }
    }
}
function Dt(e) {
  xt || (xt = !0, queueMicrotask(Vn));
  for (var t = Ct = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (Me | ye)) !== 0) {
      if ((r & K) === 0) return;
      t.f ^= K;
    }
  }
  ct.push(t);
}
function ml(e) {
  for (var t = [], r = e; r !== null; ) {
    var i = r.f, l = (i & (ye | Me)) !== 0, o = l && (i & K) !== 0;
    if (!o && (i & Ke) === 0) {
      if ((i & dn) !== 0)
        t.push(r);
      else if (l)
        r.f ^= K;
      else
        try {
          _t(r) && ir(r);
        } catch (f) {
          Nt(f, r, null, r.ctx);
        }
      var a = r.first;
      if (a !== null) {
        r = a;
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
  for (var t; ; ) {
    if (cl(), ct.length === 0)
      return (
        /** @type {T} */
        t
      );
    xt = !0, Vn();
  }
}
async function wl() {
  await Promise.resolve(), k();
}
function c(e) {
  var t = e.f, r = (t & fe) !== 0;
  if (I !== null && !de) {
    if (!(H != null && H.includes(e))) {
      var i = I.deps;
      e.rv < At && (e.rv = At, q === null && i !== null && i[Q] === e ? Q++ : q === null ? q = [e] : (!Ce || !q.includes(e)) && q.push(e));
    }
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var l = (
      /** @type {Derived} */
      e
    ), o = l.parent;
    o !== null && (o.f & ee) === 0 && (l.f ^= ee);
  }
  return r && (l = /** @type {Derived} */
  e, _t(l) && En(l)), gt && ht.has(e) ? ht.get(e) : e.v;
}
function ze(e) {
  var t = de;
  try {
    return de = !0, e();
  } finally {
    de = t;
  }
}
const pl = -7169;
function ue(e, t) {
  e.f = e.f & pl | t;
}
const ht = /* @__PURE__ */ new Map();
function Un(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: wn,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function J(e, t) {
  const r = Un(e);
  return Ln(r), r;
}
// @__NO_SIDE_EFFECTS__
function jn(e, t = !1) {
  const r = Un(e);
  return t || (r.equals = pn), r;
}
function L(e, t, r = !1) {
  I !== null && !de && Yn() && (I.f & (fe | zt)) !== 0 && !(H != null && H.includes(e)) && Xi();
  let i = r ? xe(t) : t;
  return yl(e, i);
}
function yl(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    gt ? ht.set(e, t) : ht.set(e, r), e.v = t, (e.f & fe) !== 0 && ((e.f & ve) !== 0 && bn(
      /** @type {Derived} */
      e
    ), ue(e, (e.f & ee) === 0 ? K : Ve)), e.wv = Fn(), Bn(e, ve), R !== null && (R.f & K) !== 0 && (R.f & (ye | Me)) === 0 && (ie === null ? dl([e]) : ie.push(e));
  }
  return t;
}
function Bn(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, l = 0; l < i; l++) {
      var o = r[l], a = o.f;
      (a & ve) === 0 && (ue(o, t), (a & (K | ee)) !== 0 && ((a & fe) !== 0 ? Bn(
        /** @type {Derived} */
        o,
        Ve
      ) : Dt(
        /** @type {Effect} */
        o
      )));
    }
}
let Y = null;
function Kr(e) {
  Y = e;
}
function qn(e, t = !1, r) {
  var i = Y = {
    p: Y,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
  $n(() => {
    i.d = !0;
  });
}
function Hn(e) {
  const t = Y;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const a = t.e;
    if (a !== null) {
      var r = R, i = I;
      t.e = null;
      try {
        for (var l = 0; l < a.length; l++) {
          var o = a[l];
          Se(o.effect), he(o.reaction), rr(o.fn);
        }
      } finally {
        Se(r), he(i);
      }
    }
    Y = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Yn() {
  return !0;
}
const bl = ["touchstart", "touchmove"];
function El(e) {
  return bl.includes(e);
}
let Xr = !1;
function Wn() {
  Xr || (Xr = !0, document.addEventListener(
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
function Zn(e) {
  var t = I, r = R;
  he(null), Se(null);
  try {
    return e();
  } finally {
    he(t), Se(r);
  }
}
function $l(e, t, r, i = r) {
  e.addEventListener(t, () => Zn(r));
  const l = e.__on_r;
  l ? e.__on_r = () => {
    l(), i(!0);
  } : e.__on_r = () => i(!0), Wn();
}
const Gn = /* @__PURE__ */ new Set(), Jt = /* @__PURE__ */ new Set();
function kl(e, t, r, i = {}) {
  function l(o) {
    if (i.capture || ft.call(t, o), !o.cancelBubble)
      return Zn(() => r == null ? void 0 : r.call(this, o));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Dn(() => {
    t.addEventListener(e, l, i);
  }) : t.addEventListener(e, l, i), l;
}
function xl(e, t, r, i, l) {
  var o = { capture: i, passive: l }, a = kl(e, t, r, o);
  (t === document.body || t === window || t === document) && $n(() => {
    t.removeEventListener(e, a, o);
  });
}
function Cl(e) {
  for (var t = 0; t < e.length; t++)
    Gn.add(e[t]);
  for (var r of Jt)
    r(e);
}
function ft(e) {
  var V;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), i = e.type, l = ((V = e.composedPath) == null ? void 0 : V.call(e)) || [], o = (
    /** @type {null | Element} */
    l[0] || e.target
  ), a = 0, s = e.__root;
  if (s) {
    var f = l.indexOf(s);
    if (f !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var d = l.indexOf(t);
    if (d === -1)
      return;
    f <= d && (a = f);
  }
  if (o = /** @type {Element} */
  l[a] || e.target, o !== t) {
    Et(e, "currentTarget", {
      configurable: !0,
      get() {
        return o || r;
      }
    });
    var h = I, v = R;
    he(null), Se(null);
    try {
      for (var g, m = []; o !== null; ) {
        var x = o.assignedSlot || o.parentNode || /** @type {any} */
        o.host || null;
        try {
          var N = o["__" + i];
          if (N != null && (!/** @type {any} */
          o.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === o))
            if (fn(N)) {
              var [O, ...j] = N;
              O.apply(o, [e, ...j]);
            } else
              N.call(o, e);
        } catch (W) {
          g ? m.push(W) : g = W;
        }
        if (e.cancelBubble || x === t || x === null)
          break;
        o = x;
      }
      if (g) {
        for (let W of m)
          queueMicrotask(() => {
            throw W;
          });
        throw g;
      }
    } finally {
      e.__root = t, delete e.currentTarget, he(h), Se(v);
    }
  }
}
function lr(e) {
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
function ge(e, t) {
  var r = (t & Ni) !== 0, i = (t & Di) !== 0, l, o = !e.startsWith("<!>");
  return () => {
    if (D)
      return Ae(P, null), P;
    l === void 0 && (l = lr(o ? e : "<!>" + e), r || (l = /** @type {Node} */
    /* @__PURE__ */ oe(l)));
    var a = (
      /** @type {TemplateNode} */
      i || gn ? document.importNode(l, !0) : l.cloneNode(!0)
    );
    if (r) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ oe(a)
      ), f = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      Ae(s, f);
    } else
      Ae(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function Al(e, t, r = "svg") {
  var i = !e.startsWith("<!>"), l = `<${r}>${i ? e : "<!>" + e}</${r}>`, o;
  return () => {
    if (D)
      return Ae(P, null), P;
    if (!o) {
      var a = (
        /** @type {DocumentFragment} */
        lr(l)
      ), s = (
        /** @type {Element} */
        /* @__PURE__ */ oe(a)
      );
      o = /** @type {Element} */
      /* @__PURE__ */ oe(s);
    }
    var f = (
      /** @type {TemplateNode} */
      o.cloneNode(!0)
    );
    return Ae(f, f), f;
  };
}
function ne(e, t) {
  if (D) {
    R.nodes_end = P, Xe();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Jn(e, t) {
  return Kn(e, t);
}
function Il(e, t) {
  Yt(), t.intro = t.intro ?? !1;
  const r = t.target, i = D, l = P;
  try {
    for (var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ oe(r)
    ); o && (o.nodeType !== 8 || /** @type {Comment} */
    o.data !== Xt); )
      o = /** @type {TemplateNode} */
      /* @__PURE__ */ Te(o);
    if (!o)
      throw Je;
    Ge(!0), Ie(
      /** @type {Comment} */
      o
    ), Xe();
    const a = Kn(e, { ...t, anchor: o });
    if (P === null || P.nodeType !== 8 || /** @type {Comment} */
    P.data !== an)
      throw Tt(), Je;
    return Ge(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === Je)
      return t.recover === !1 && Zi(), Yt(), el(r), Ge(!1), Jn(e, t);
    throw a;
  } finally {
    Ge(i), Ie(l);
  }
}
const We = /* @__PURE__ */ new Map();
function Kn(e, { target: t, anchor: r, props: i = {}, events: l, context: o, intro: a = !0 }) {
  Yt();
  var s = /* @__PURE__ */ new Set(), f = (v) => {
    for (var g = 0; g < v.length; g++) {
      var m = v[g];
      if (!s.has(m)) {
        s.add(m);
        var x = El(m);
        t.addEventListener(m, ft, { passive: x });
        var N = We.get(m);
        N === void 0 ? (document.addEventListener(m, ft, { passive: x }), We.set(m, 1)) : We.set(m, N + 1);
      }
    }
  };
  f(Fi(Gn)), Jt.add(f);
  var d = void 0, h = ol(() => {
    var v = r ?? t.appendChild(er());
    return Zt(() => {
      if (o) {
        qn({});
        var g = (
          /** @type {ComponentContext} */
          Y
        );
        g.c = o;
      }
      l && (i.$$events = l), D && Ae(
        /** @type {TemplateNode} */
        v,
        null
      ), d = e(v, i) || {}, D && (R.nodes_end = P), o && Hn();
    }), () => {
      var x;
      for (var g of s) {
        t.removeEventListener(g, ft);
        var m = (
          /** @type {number} */
          We.get(g)
        );
        --m === 0 ? (document.removeEventListener(g, ft), We.delete(g)) : We.set(g, m);
      }
      Jt.delete(f), v !== r && ((x = v.parentNode) == null || x.removeChild(v));
    };
  });
  return Kt.set(d, h), d;
}
let Kt = /* @__PURE__ */ new WeakMap();
function Rl(e, t) {
  const r = Kt.get(e);
  return r ? (Kt.delete(e), r(t)) : Promise.resolve();
}
function ke(e, t, [r, i] = [0, 0]) {
  D && r === 0 && Xe();
  var l = e, o = null, a = null, s = G, f = r > 0 ? Qt : 0, d = !1;
  const h = (g, m = !0) => {
    d = !0, v(m, g);
  }, v = (g, m) => {
    if (s === (s = g)) return;
    let x = !1;
    if (D && i !== -1) {
      if (r === 0) {
        const O = (
          /** @type {Comment} */
          l.data
        );
        O === Xt ? i = 0 : O === on ? i = 1 / 0 : (i = parseInt(O.substring(1)), i !== i && (i = s ? 1 / 0 : -1));
      }
      const N = i > r;
      !!s === N && (l = zi(), Ie(l), Ge(!1), x = !0, i = -1);
    }
    s ? (o ? Zr(o) : m && (o = Zt(() => m(l))), a && Gt(a, () => {
      a = null;
    })) : (a ? Zr(a) : m && (a = Zt(() => m(l, [r + 1, i]))), o && Gt(o, () => {
      o = null;
    })), x && Ge(!0);
  };
  kn(() => {
    d = !1, t(h), d || v(null, null);
  }, f), D && (l = P);
}
function Ze(e, t, r = !1, i = !1, l = !1) {
  var o = e, a = "";
  Pe(() => {
    var s = (
      /** @type {Effect} */
      R
    );
    if (a === (a = t() ?? "")) {
      D && Xe();
      return;
    }
    if (s.nodes_start !== null && (An(
      s.nodes_start,
      /** @type {TemplateNode} */
      s.nodes_end
    ), s.nodes_start = s.nodes_end = null), a !== "") {
      if (D) {
        P.data;
        for (var f = Xe(), d = f; f !== null && (f.nodeType !== 8 || /** @type {Comment} */
        f.data !== ""); )
          d = f, f = /** @type {TemplateNode} */
          /* @__PURE__ */ Te(f);
        if (f === null)
          throw Tt(), Je;
        Ae(P, d), o = Ie(f);
        return;
      }
      var h = a + "";
      r ? h = `<svg>${h}</svg>` : i && (h = `<math>${h}</math>`);
      var v = lr(h);
      if ((r || i) && (v = /** @type {Element} */
      /* @__PURE__ */ oe(v)), Ae(
        /** @type {TemplateNode} */
        /* @__PURE__ */ oe(v),
        /** @type {TemplateNode} */
        v.lastChild
      ), r || i)
        for (; /* @__PURE__ */ oe(v); )
          o.before(
            /** @type {Node} */
            /* @__PURE__ */ oe(v)
          );
      else
        o.before(v);
    }
  });
}
function Sl(e, t, r, i, l) {
  var s;
  D && Xe();
  var o = (s = t.$$slots) == null ? void 0 : s[r], a = !1;
  o === !0 && (o = t.children, a = !0), o === void 0 || o(e, a ? () => i : i);
}
const zr = [...` 	
\r\f \v\uFEFF`];
function Tl(e, t, r) {
  var i = "" + e;
  if (r) {
    for (var l in r)
      if (r[l])
        i = i ? i + " " + l : l;
      else if (i.length)
        for (var o = l.length, a = 0; (a = i.indexOf(l, a)) >= 0; ) {
          var s = a + o;
          (a === 0 || zr.includes(i[a - 1])) && (s === i.length || zr.includes(i[s])) ? i = (a === 0 ? "" : i.substring(0, a)) + i.substring(s + 1) : a = s;
        }
  }
  return i === "" ? null : i;
}
function Nl(e, t, r, i, l, o) {
  var a = e.__className;
  if (D || a !== r || a === void 0) {
    var s = Tl(r, i, o);
    (!D || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : e.className = s), e.__className = r;
  } else if (o && l !== o)
    for (var f in o) {
      var d = !!o[f];
      (l == null || d !== !!l[f]) && e.classList.toggle(f, d);
    }
  return o;
}
const Dl = Symbol("is custom element"), Ll = Symbol("is html");
function Qr(e) {
  if (D) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var i = e.value;
          se(e, "value", null), e.value = i;
        }
        if (e.hasAttribute("checked")) {
          var l = e.checked;
          se(e, "checked", null), e.checked = l;
        }
      }
    };
    e.__on_r = r, ul(r), Wn();
  }
}
function Pl(e, t) {
  var r = Xn(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function se(e, t, r, i) {
  var l = Xn(e);
  D && (l[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || l[t] !== (l[t] = r) && (t === "loading" && (e[Bi] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Fl(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Xn(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Dl]: e.nodeName.includes("-"),
      [Ll]: e.namespaceURI === Li
    })
  );
}
var en = /* @__PURE__ */ new Map();
function Fl(e) {
  var t = en.get(e.nodeName);
  if (t) return t;
  en.set(e.nodeName, t = []);
  for (var r, i = e, l = Element.prototype; l !== i; ) {
    r = Oi(i);
    for (var o in r)
      r[o].set && t.push(o);
    i = un(i);
  }
  return t;
}
function Ol(e, t, r = t) {
  $l(e, "change", (i) => {
    var l = i ? e.defaultChecked : e.checked;
    r(l);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (D && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  ze(t) == null) && r(e.checked), nr(() => {
    var i = t();
    e.checked = !!i;
  });
}
function tn(e, t) {
  return e === t || (e == null ? void 0 : e[ut]) === t;
}
function rn(e = {}, t, r, i) {
  return rr(() => {
    var l, o;
    return nr(() => {
      l = o, o = [], ze(() => {
        e !== r(...o) && (t(e, ...o), l && tn(r(...l), e) && t(null, ...l));
      });
    }), () => {
      Dn(() => {
        o && tn(r(...o), e) && t(null, ...o);
      });
    };
  }), e;
}
function zn(e) {
  Y === null && sn(), Wt(() => {
    const t = ze(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Ml(e) {
  Y === null && sn(), zn(() => () => ze(e));
}
let wt = !1;
function Vl(e) {
  var t = wt;
  try {
    return wt = !1, [e(), wt];
  } finally {
    wt = t;
  }
}
function nn(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function A(e, t, r, i) {
  var Ne;
  var l = (r & Ii) !== 0, o = !0, a = (r & Si) !== 0, s = (r & Ti) !== 0, f = !1, d;
  a ? [d, f] = Vl(() => (
    /** @type {V} */
    e[t]
  )) : d = /** @type {V} */
  e[t];
  var h = ut in e || hn in e, v = a && (((Ne = Fe(e, t)) == null ? void 0 : Ne.set) ?? (h && t in e && ((F) => e[t] = F))) || void 0, g = (
    /** @type {V} */
    i
  ), m = !0, x = !1, N = () => (x = !0, m && (m = !1, s ? g = ze(
    /** @type {() => V} */
    i
  ) : g = /** @type {V} */
  i), g);
  d === void 0 && i !== void 0 && (v && o && Gi(), d = N(), v && v(d));
  var O;
  if (O = () => {
    var F = (
      /** @type {V} */
      e[t]
    );
    return F === void 0 ? N() : (m = !0, x = !1, F);
  }, (r & Ri) === 0)
    return O;
  if (v) {
    var j = e.$$legacy;
    return function(F, U) {
      return arguments.length > 0 ? ((!U || j || f) && v(U ? O() : F), F) : O();
    };
  }
  var V = !1, W = /* @__PURE__ */ jn(d), M = /* @__PURE__ */ tr(() => {
    var F = O(), U = c(W);
    return V ? (V = !1, U) : W.v = F;
  });
  return a && c(M), l || (M.equals = pn), function(F, U) {
    if (arguments.length > 0) {
      const _e = U ? c(M) : a ? xe(F) : F;
      if (!M.equals(_e)) {
        if (V = !0, L(W, _e), x && g !== void 0 && (g = _e), nn(M))
          return F;
        ze(() => c(M));
      }
      return F;
    }
    return nn(M) ? M.v : c(M);
  };
}
function Ul(e) {
  return new jl(e);
}
var pe, le;
class jl {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    jt(this, pe);
    /** @type {Record<string, any>} */
    jt(this, le);
    var o;
    var r = /* @__PURE__ */ new Map(), i = (a, s) => {
      var f = /* @__PURE__ */ jn(s);
      return r.set(a, f), f;
    };
    const l = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, s) {
          return c(r.get(s) ?? i(s, Reflect.get(a, s)));
        },
        has(a, s) {
          return s === hn ? !0 : (c(r.get(s) ?? i(s, Reflect.get(a, s))), Reflect.has(a, s));
        },
        set(a, s, f) {
          return L(r.get(s) ?? i(s, f), f), Reflect.set(a, s, f);
        }
      }
    );
    Bt(this, le, (t.hydrate ? Il : Jn)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: l,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((o = t == null ? void 0 : t.props) != null && o.$$host) || t.sync === !1) && k(), Bt(this, pe, l.$$events);
    for (const a of Object.keys(Z(this, le)))
      a === "$set" || a === "$destroy" || a === "$on" || Et(this, a, {
        get() {
          return Z(this, le)[a];
        },
        /** @param {any} value */
        set(s) {
          Z(this, le)[a] = s;
        },
        enumerable: !0
      });
    Z(this, le).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(l, a);
    }, Z(this, le).$destroy = () => {
      Rl(Z(this, le));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    Z(this, le).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    Z(this, pe)[t] = Z(this, pe)[t] || [];
    const i = (...l) => r.call(this, ...l);
    return Z(this, pe)[t].push(i), () => {
      Z(this, pe)[t] = Z(this, pe)[t].filter(
        /** @param {any} fn */
        (l) => l !== i
      );
    };
  }
  $destroy() {
    Z(this, le).$destroy();
  }
}
pe = new WeakMap(), le = new WeakMap();
let Qn;
typeof HTMLElement == "function" && (Qn = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, i) {
    super();
    /** The Svelte component constructor */
    ae(this, "$$ctor");
    /** Slots */
    ae(this, "$$s");
    /** @type {any} The Svelte component instance */
    ae(this, "$$c");
    /** Whether or not the custom element is connected */
    ae(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    ae(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    ae(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    ae(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    ae(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    ae(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    ae(this, "$$me");
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
          const a = document.createElement("slot");
          l !== "default" && (a.name = l), ne(o, a);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, i = Bl(this);
      for (const l of this.$$s)
        l in i && (l === "default" && !this.$$d.children ? (this.$$d.children = t(l), r.default = !0) : r[l] = t(l));
      for (const l of this.attributes) {
        const o = this.$$g_p(l.name);
        o in this.$$d || (this.$$d[o] = yt(o, l.value, this.$$p_d, "toProp"));
      }
      for (const l in this.$$p_d)
        !(l in this.$$d) && this[l] !== void 0 && (this.$$d[l] = this[l], delete this[l]);
      this.$$c = Ul({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = ll(() => {
        nr(() => {
          var l;
          this.$$r = !0;
          for (const o of bt(this.$$c)) {
            if (!((l = this.$$p_d[o]) != null && l.reflect)) continue;
            this.$$d[o] = this.$$c[o];
            const a = yt(
              o,
              this.$$d[o],
              this.$$p_d,
              "toAttribute"
            );
            a == null ? this.removeAttribute(this.$$p_d[o].attribute || o) : this.setAttribute(this.$$p_d[o].attribute || o, a);
          }
          this.$$r = !1;
        });
      });
      for (const l in this.$$l)
        for (const o of this.$$l[l]) {
          const a = this.$$c.$on(l, o);
          this.$$l_u.set(o, a);
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = yt(t, i, this.$$p_d, "toProp"), (l = this.$$c) == null || l.$set({ [t]: this.$$d[t] }));
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
    return bt(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function yt(e, t, r, i) {
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
function Bl(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function ql(e, t, r, i, l, o) {
  let a = class extends Qn {
    constructor() {
      super(e, r, l), this.$$p_d = t;
    }
    static get observedAttributes() {
      return bt(t).map(
        (s) => (t[s].attribute || s).toLowerCase()
      );
    }
  };
  return bt(t).forEach((s) => {
    Et(a.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(f) {
        var v;
        f = yt(s, f, t), this.$$d[s] = f;
        var d = this.$$c;
        if (d) {
          var h = (v = Fe(d, s)) == null ? void 0 : v.get;
          h ? d[s] = f : d.$set({ [s]: f });
        }
      }
    });
  }), i.forEach((s) => {
    Et(a.prototype, s, {
      get() {
        var f;
        return (f = this.$$c) == null ? void 0 : f[s];
      }
    });
  }), e.element = /** @type {any} */
  a, a;
}
const ei = new TextEncoder();
function Hl(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function Yl(e, t = "SHA-256", r = 1e5) {
  const i = Date.now().toString(16);
  e || (e = Math.round(Math.random() * r));
  const l = await ti(i, e, t);
  return {
    algorithm: t,
    challenge: l,
    salt: i,
    signature: ""
  };
}
async function ti(e, t, r) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return Hl(
    await crypto.subtle.digest(
      r.toUpperCase(),
      ei.encode(e + t)
    )
  );
}
function Wl(e, t, r = "SHA-256", i = 1e6, l = 0) {
  const o = new AbortController(), a = Date.now();
  return {
    promise: (async () => {
      for (let f = l; f <= i; f += 1) {
        if (o.signal.aborted)
          return null;
        if (await ti(t, f, r) === e)
          return {
            number: f,
            took: Date.now() - a
          };
      }
      return null;
    })(),
    controller: o
  };
}
function Zl() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function Gl(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let i = 0; i < t.length; i++)
    r[i] = t.charCodeAt(i);
  return r;
}
function Jl(e, t = 12) {
  const r = new Uint8Array(t);
  for (let i = 0; i < t; i++)
    r[i] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function Kl(e, t = "", r = 1e6, i = 0) {
  const l = "AES-GCM", o = new AbortController(), a = Date.now(), s = async () => {
    for (let h = i; h <= r; h += 1) {
      if (o.signal.aborted || !f || !d)
        return null;
      try {
        const v = await crypto.subtle.decrypt(
          {
            name: l,
            iv: Jl(h)
          },
          f,
          d
        );
        if (v)
          return {
            clearText: new TextDecoder().decode(v),
            took: Date.now() - a
          };
      } catch {
      }
    }
    return null;
  };
  let f = null, d = null;
  try {
    d = Gl(e);
    const h = await crypto.subtle.digest(
      "SHA-256",
      ei.encode(t)
    );
    f = await crypto.subtle.importKey(
      "raw",
      h,
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
    promise: s(),
    controller: o
  };
}
var y = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(y || {}), Xl = /* @__PURE__ */ Al('<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor" class="altcha-spinner"></path></svg>'), zl = /* @__PURE__ */ ge('<span role="status" aria-live="polite"><!></span> <input type="hidden">', 1), Ql = /* @__PURE__ */ ge('<span role="status" aria-live="polite"><!></span>'), eo = /* @__PURE__ */ ge("<label><!></label>"), to = /* @__PURE__ */ ge('<div><a target="_blank" class="altcha-logo"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor"></path></svg></a></div>'), ro = /* @__PURE__ */ ge("<div><!></div>"), no = /* @__PURE__ */ ge("<div><!></div>"), io = /* @__PURE__ */ ge('<div class="altcha-error"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg> <!></div>'), lo = /* @__PURE__ */ ge('<div class="altcha-footer"><div><!></div></div>'), oo = /* @__PURE__ */ ge('<div class="altcha-anchor-arrow"></div>'), ao = /* @__PURE__ */ ge('<!> <div class="altcha"><div class="altcha-main"><!> <div><input type="checkbox"></div> <div class="altcha-label"><!></div> <!></div> <!> <!> <!></div>', 1);
function so(e, t) {
  var Mr, Vr;
  qn(t, !0);
  let r = A(t, "auto", 7, void 0), i = A(t, "blockspam", 7, void 0), l = A(t, "challengeurl", 7, void 0), o = A(t, "challengejson", 7, void 0), a = A(t, "customfetch", 7, void 0), s = A(t, "debug", 7, !1), f = A(t, "delay", 7, 0), d = A(t, "expire", 7, void 0), h = A(t, "floating", 7, void 0), v = A(t, "floatinganchor", 7, void 0), g = A(t, "floatingoffset", 7, void 0), m = A(t, "floatingpersist", 7, !1), x = A(t, "hidefooter", 7, !1), N = A(t, "hidelogo", 7, !1), O = A(t, "id", 7, void 0), j = A(t, "name", 7, "altcha"), V = A(t, "maxnumber", 7, 1e6), W = A(t, "mockerror", 7, !1), M = A(t, "obfuscated", 7, void 0), Ne = A(t, "plugins", 7, void 0), F = A(t, "refetchonexpire", 7, !0), U = A(t, "spamfilter", 7, !1), _e = A(t, "strings", 7, void 0), te = A(t, "test", 7, !1), be = A(t, "verifyurl", 7, void 0), je = A(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), Qe = A(t, "workerurl", 7, void 0);
  const or = ["SHA-256", "SHA-384", "SHA-512"], ar = "Visit Altcha.org", sr = "https://altcha.org/", et = (n, u) => {
    t.$$host.dispatchEvent(new CustomEvent(n, { detail: u }));
  }, fr = (Vr = (Mr = document.documentElement.lang) == null ? void 0 : Mr.split("-")) == null ? void 0 : Vr[0], Lt = /* @__PURE__ */ st(() => {
    var n;
    return l() && new URL(l(), location.origin).host.endsWith(".altcha.org") && !!((n = l()) != null && n.includes("apiKey=ckey_"));
  }), Pt = /* @__PURE__ */ st(() => o() ? Er(o()) : void 0), ur = /* @__PURE__ */ st(() => _e() ? Er(_e()) : {}), re = /* @__PURE__ */ st(() => {
    var n;
    return {
      ariaLinkLabel: ar,
      error: "Verification failed. Try again later.",
      expired: "Verification expired. Try again.",
      footer: `Protected by <a href="${sr}" target="_blank" aria-label="${((n = c(ur)) == null ? void 0 : n.ariaLinkLabel) || ar}">ALTCHA</a>`,
      label: "I'm not a robot",
      verified: "Verified",
      verifying: "Verifying...",
      waitAlert: "Verifying... please wait.",
      ...c(ur)
    };
  }), cr = /* @__PURE__ */ st(() => `${O() || j()}_checkbox`);
  let Be = /* @__PURE__ */ J(!1), C = /* @__PURE__ */ J(xe(y.UNVERIFIED)), B = /* @__PURE__ */ J(void 0), tt = /* @__PURE__ */ J(null), qe = null, w = null, He = /* @__PURE__ */ J(null), ce = null, Ee = [], De = /* @__PURE__ */ J(null);
  Wt(() => {
    fi(c(He));
  }), Wt(() => {
    ui(c(C));
  }), Ml(() => {
    ri(), w && (w.removeEventListener("submit", wr), w.removeEventListener("reset", pr), w.removeEventListener("focusin", mr), w = null), ce && (clearTimeout(ce), ce = null), document.removeEventListener("click", gr), document.removeEventListener("scroll", _r), window.removeEventListener("resize", br);
  }), zn(() => {
    var n;
    S("mounted", "1.4.4"), S("workers", je()), ai(), S("plugins", Ee.length ? Ee.map((u) => u.constructor.pluginName).join(", ") : "none"), te() && S("using test mode"), d() && Ft(d()), r() !== void 0 && S("auto", r()), h() !== void 0 && $r(h()), w = (n = c(B)) == null ? void 0 : n.closest("form"), w && (w.addEventListener("submit", wr, { capture: !0 }), w.addEventListener("reset", pr), (r() === "onfocus" || m() === "focus") && w.addEventListener("focusin", mr)), r() === "onload" && (M() ? rt() : $e()), c(Lt) && (x() || N()) && S("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      et("load");
    });
  });
  function dr(n, u) {
    return btoa(JSON.stringify({
      algorithm: n.algorithm,
      challenge: n.challenge,
      number: u.number,
      salt: n.salt,
      signature: n.signature,
      test: te() ? !0 : void 0,
      took: u.took
    }));
  }
  function ri() {
    for (const n of Ee)
      n.destroy();
  }
  function vr() {
    l() && F() && c(C) === y.VERIFIED ? $e() : it(y.EXPIRED, c(re).expired);
  }
  async function ni() {
    var n;
    if (W())
      throw S("mocking error"), new Error("Mocked error.");
    if (c(Pt))
      return S("using provided json data"), c(Pt);
    if (te())
      return S("generating test challenge", { test: te() }), Yl(typeof te() != "boolean" ? +te() : void 0);
    {
      if (!l() && w) {
        const $ = w.getAttribute("action");
        $ != null && $.includes("/form/") && l($ + "/altcha");
      }
      if (!l())
        throw new Error("Attribute challengeurl not set.");
      S("fetching challenge from", l());
      const u = {
        headers: U() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      }, _ = await hr()(l(), u);
      if (!_ || !(_ instanceof Response))
        throw new Error("Fetch function did not return a response.");
      if (_.status !== 200)
        throw new Error(`Server responded with ${_.status}.`);
      const b = _.headers.get("X-Altcha-Config"), T = await _.json(), E = new URLSearchParams((n = T.salt.split("?")) == null ? void 0 : n[1]), p = E.get("expires") || E.get("expire");
      if (p) {
        const $ = new Date(+p * 1e3), me = isNaN($.getTime()) ? 0 : $.getTime() - Date.now();
        me > 0 && Ft(me);
      }
      if (b)
        try {
          const $ = JSON.parse(b);
          $ && typeof $ == "object" && ("sentinel" in $ ? alert("This version of the widget is not compatible with Sentinel. Upgrade to version 2.x.x.") : ($.verifyurl && ($.verifyurl = new URL($.verifyurl, new URL(l())).toString()), Cr($)));
        } catch ($) {
          S("unable to configure from X-Altcha-Config", $);
        }
      return T;
    }
  }
  function ii(n) {
    var _;
    const u = w == null ? void 0 : w.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((_ = u == null ? void 0 : u.value) == null ? void 0 : _.slice(u.value.indexOf("@"))) || void 0;
  }
  function hr() {
    let n = fetch;
    if (a())
      if (S("using customfetch"), typeof a() == "string") {
        if (n = globalThis[a()] || null, !n)
          throw new Error(`Custom fetch function not found: ${a()}`);
      } else
        n = a();
    return n;
  }
  function li() {
    return U() === "ipAddress" ? {
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
    } : typeof U() == "object" ? U() : {
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
  function oi(n) {
    return [
      ...(w == null ? void 0 : w.querySelectorAll(n != null && n.length ? n.map((_) => `input[name="${_}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (_, b) => {
        const T = b.name, E = b.value;
        return T && E && (_[T] = /\n/.test(E) ? E.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : E), _;
      },
      {}
    );
  }
  function ai() {
    const n = Ne() !== void 0 ? Ne().split(",") : void 0;
    for (const u of globalThis.altchaPlugins)
      (!n || n.includes(u.pluginName)) && Ee.push(new u({
        el: c(B),
        clarify: rt,
        dispatch: et,
        getConfiguration: Ar,
        getFloatingAnchor: Ir,
        getState: Rr,
        log: S,
        reset: it,
        solve: xr,
        setState: Le,
        setFloatingAnchor: Tr,
        verify: $e
      }));
  }
  function S(...n) {
    (s() || n.some((u) => u instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${j()}]`, ...n);
  }
  function si() {
    [y.UNVERIFIED, y.ERROR, y.EXPIRED].includes(c(C)) ? U() !== !1 && (w == null ? void 0 : w.reportValidity()) === !1 ? L(Be, !1) : M() ? rt() : $e() : L(Be, !0);
  }
  function gr(n) {
    const u = n.target;
    h() && u && !c(B).contains(u) && (c(C) === y.VERIFIED && m() === !1 || c(C) === y.VERIFIED && m() === "focus" && !(w != null && w.matches(":focus-within")) || r() === "off" && c(C) === y.UNVERIFIED) && Sr();
  }
  function _r() {
    h() && c(C) !== y.UNVERIFIED && nt();
  }
  function fi(n) {
    for (const u of Ee)
      typeof u.onErrorChange == "function" && u.onErrorChange(c(He));
  }
  function mr(n) {
    c(C) === y.UNVERIFIED ? $e() : h() && m() === "focus" && c(C) === y.VERIFIED && Ot();
  }
  function wr(n) {
    w && r() === "onsubmit" ? c(C) === y.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), $e().then(() => {
      w == null || w.requestSubmit();
    })) : c(C) !== y.VERIFIED && (n.preventDefault(), n.stopPropagation(), c(C) === y.VERIFYING && yr()) : w && h() && r() === "off" && c(C) === y.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), Ot());
  }
  function pr() {
    it();
  }
  function yr() {
    c(C) === y.VERIFYING && c(re).waitAlert && alert(c(re).waitAlert);
  }
  function ui(n) {
    for (const u of Ee)
      typeof u.onStateChange == "function" && u.onStateChange(c(C));
    h() && c(C) !== y.UNVERIFIED && requestAnimationFrame(() => {
      nt();
    }), L(Be, c(C) === y.VERIFIED);
  }
  function br() {
    h() && nt();
  }
  function Er(n) {
    return JSON.parse(n);
  }
  async function ci(n) {
    if (!be())
      throw new Error("Attribute verifyurl not set.");
    S("requesting server verification from", be());
    const u = { payload: n };
    if (U() !== !1) {
      const {
        blockedCountries: T,
        classifier: E,
        disableRules: p,
        email: $,
        expectedLanguages: me,
        expectedCountries: Ut,
        fields: ot,
        ipAddress: at,
        text: ki,
        timeZone: Ur
      } = li();
      u.blockedCountries = T, u.classifier = E, u.disableRules = p, u.email = $ === !1 ? void 0 : ii($), u.expectedCountries = Ut, u.expectedLanguages = me || (fr ? [fr] : void 0), u.fields = ot === !1 ? void 0 : oi(ot), u.ipAddress = at === !1 ? void 0 : at || "auto", u.text = ki, u.timeZone = Ur === !1 ? void 0 : Ur || Zl();
    }
    const _ = await hr()(be(), {
      body: JSON.stringify(u),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (!_ || !(_ instanceof Response))
      throw new Error("Fetch function did not return a response.");
    if (_.status !== 200)
      throw new Error(`Server responded with ${_.status}.`);
    const b = await _.json();
    if (b != null && b.payload && L(De, b.payload, !0), et("serververification", b), i() && b.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  function Ft(n) {
    S("expire", n), ce && (clearTimeout(ce), ce = null), n < 1 ? vr() : ce = setTimeout(vr, n);
  }
  function $r(n) {
    S("floating", n), h() !== n && (c(B).style.left = "", c(B).style.top = ""), h(n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : h()), h() ? (r() || r("onsubmit"), document.addEventListener("scroll", _r), document.addEventListener("click", gr), window.addEventListener("resize", br)) : r() === "onsubmit" && r(void 0);
  }
  function kr(n) {
    if (!n.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (n.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!or.includes(n.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${or.join(", ")}`);
    if (!n.challenge || n.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!n.salt || n.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function xr(n) {
    let u = null;
    if ("Worker" in window) {
      try {
        u = await di(n, n.maxNumber || n.maxnumber || V());
      } catch (_) {
        S(_);
      }
      if ((u == null ? void 0 : u.number) !== void 0 || "obfuscated" in n)
        return { data: n, solution: u };
    }
    if ("obfuscated" in n) {
      const _ = await Kl(n.obfuscated, n.key, n.maxNumber || n.maxnumber);
      return { data: n, solution: await _.promise };
    }
    return {
      data: n,
      solution: await Wl(n.challenge, n.salt, n.algorithm, n.maxNumber || n.maxnumber || V()).promise
    };
  }
  async function di(n, u = typeof te() == "number" ? te() : n.maxNumber || n.maxnumber || V(), _ = Math.ceil(je())) {
    const b = [];
    _ = Math.min(16, u, Math.max(1, _));
    for (let p = 0; p < _; p++)
      b.push(altchaCreateWorker(Qe()));
    const T = Math.ceil(u / _), E = await Promise.all(b.map((p, $) => {
      const me = $ * T;
      return new Promise((Ut) => {
        p.addEventListener("message", (ot) => {
          if (ot.data)
            for (const at of b)
              at !== p && at.postMessage({ type: "abort" });
          Ut(ot.data);
        }), p.postMessage({
          payload: n,
          max: me + T,
          start: me,
          type: "work"
        });
      });
    }));
    for (const p of b)
      p.terminate();
    return E.find((p) => !!p) || null;
  }
  async function rt() {
    if (!M()) {
      Le(y.ERROR);
      return;
    }
    const n = Ee.find((u) => u.constructor.pluginName === "obfuscation");
    if (!n || !("clarify" in n)) {
      Le(y.ERROR), S("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in n && typeof n.clarify == "function")
      return n.clarify();
  }
  function Cr(n) {
    n.obfuscated !== void 0 && M(n.obfuscated), n.auto !== void 0 && (r(n.auto), r() === "onload" && (M() ? rt() : $e())), n.blockspam !== void 0 && i(!!n.blockspam), n.customfetch !== void 0 && a(n.customfetch), n.floatinganchor !== void 0 && v(n.floatinganchor), n.delay !== void 0 && f(n.delay), n.floatingoffset !== void 0 && g(n.floatingoffset), n.floating !== void 0 && $r(n.floating), n.expire !== void 0 && (Ft(n.expire), d(n.expire)), n.challenge && (o(typeof n.challenge == "string" ? n.challenge : JSON.stringify(n.challenge)), kr(c(Pt))), n.challengeurl !== void 0 && l(n.challengeurl), n.debug !== void 0 && s(!!n.debug), n.hidefooter !== void 0 && x(!!n.hidefooter), n.hidelogo !== void 0 && N(!!n.hidelogo), n.maxnumber !== void 0 && V(+n.maxnumber), n.mockerror !== void 0 && W(!!n.mockerror), n.name !== void 0 && j(n.name), n.refetchonexpire !== void 0 && F(!!n.refetchonexpire), n.spamfilter !== void 0 && U(typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && _e(typeof n.strings == "string" ? n.strings : JSON.stringify(n.strings)), n.test !== void 0 && te(typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && be(n.verifyurl), n.workers !== void 0 && je(+n.workers), n.workerurl !== void 0 && Qe(n.workerurl);
  }
  function Ar() {
    return {
      auto: r(),
      blockspam: i(),
      challengeurl: l(),
      debug: s(),
      delay: f(),
      expire: d(),
      floating: h(),
      floatinganchor: v(),
      floatingoffset: g(),
      hidefooter: x(),
      hidelogo: N(),
      name: j(),
      maxnumber: V(),
      mockerror: W(),
      obfuscated: M(),
      refetchonexpire: F(),
      spamfilter: U(),
      strings: c(re),
      test: te(),
      verifyurl: be(),
      workers: je(),
      workerurl: Qe()
    };
  }
  function Ir() {
    return qe;
  }
  function vi(n) {
    return Ee.find((u) => u.constructor.pluginName === n);
  }
  function Rr() {
    return c(C);
  }
  function Sr() {
    c(B).style.display = "none";
  }
  function nt(n = 20) {
    if (c(B))
      if (qe || (qe = (v() ? document.querySelector(v()) : w == null ? void 0 : w.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || w), qe) {
        const u = parseInt(g(), 10) || 12, _ = qe.getBoundingClientRect(), b = c(B).getBoundingClientRect(), T = document.documentElement.clientHeight, E = document.documentElement.clientWidth, p = h() === "auto" ? _.bottom + b.height + u + n > T : h() === "top", $ = Math.max(n, Math.min(E - n - b.width, _.left + _.width / 2 - b.width / 2));
        if (p ? c(B).style.top = `${_.top - (b.height + u)}px` : c(B).style.top = `${_.bottom + u}px`, c(B).style.left = `${$}px`, c(B).setAttribute("data-floating", p ? "top" : "bottom"), c(tt)) {
          const me = c(tt).getBoundingClientRect();
          c(tt).style.left = _.left - $ + _.width / 2 - me.width / 2 + "px";
        }
      } else
        S("unable to find floating anchor element");
  }
  function it(n = y.UNVERIFIED, u = null) {
    ce && (clearTimeout(ce), ce = null), L(Be, !1), L(De, null), Le(n, u);
  }
  function Tr(n) {
    qe = n;
  }
  function Le(n, u = null) {
    L(C, n, !0), L(He, u, !0), et("statechange", {
      payload: c(De),
      state: c(C)
    });
  }
  function Ot() {
    c(B).style.display = "block", h() && nt();
  }
  async function $e() {
    return it(y.VERIFYING), await new Promise((n) => setTimeout(n, f() || 0)), ni().then((n) => (kr(n), S("challenge", n), xr(n))).then(({ data: n, solution: u }) => {
      if (S("solution", u), !u || n && "challenge" in n && !("clearText" in u))
        if ((u == null ? void 0 : u.number) !== void 0 && "challenge" in n) {
          if (be())
            return ci(dr(n, u));
          L(De, dr(n, u), !0), S("payload", c(De));
        } else
          throw S("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      Le(y.VERIFIED), S("verified"), wl().then(() => {
        et("verified", { payload: c(De) });
      });
    }).catch((n) => {
      S(n), Le(y.ERROR, n.message);
    });
  }
  var Nr = ao(), Dr = Wr(Nr);
  Sl(Dr, t, "default", {});
  var lt = we(Dr, 2), Mt = z(lt), Lr = z(Mt);
  {
    var hi = (n) => {
      var u = Xl();
      ne(n, u);
    };
    ke(Lr, (n) => {
      c(C) === y.VERIFYING && n(hi);
    });
  }
  var mt = we(Lr, 2);
  let Pr;
  var Ye = z(mt);
  Qr(Ye), Ye.__change = si, X(mt);
  var Vt = we(mt, 2), gi = z(Vt);
  {
    var _i = (n) => {
      var u = zl(), _ = Wr(u), b = z(_);
      Ze(b, () => c(re).verified), X(_);
      var T = we(_, 2);
      Qr(T), Pe(() => {
        se(T, "name", j()), Pl(T, c(De));
      }), ne(n, u);
    }, mi = (n, u) => {
      {
        var _ = (T) => {
          var E = Ql(), p = z(E);
          Ze(p, () => c(re).verifying), X(E), ne(T, E);
        }, b = (T) => {
          var E = eo(), p = z(E);
          Ze(p, () => c(re).label), X(E), Pe(() => se(E, "for", c(cr))), ne(T, E);
        };
        ke(
          n,
          (T) => {
            c(C) === y.VERIFYING ? T(_) : T(b, !1);
          },
          u
        );
      }
    };
    ke(gi, (n) => {
      c(C) === y.VERIFIED ? n(_i) : n(mi, !1);
    });
  }
  X(Vt);
  var wi = we(Vt, 2);
  {
    var pi = (n) => {
      var u = to(), _ = z(u);
      se(_, "href", sr), X(u), Pe(() => se(_, "aria-label", c(re).ariaLinkLabel)), ne(n, u);
    };
    ke(wi, (n) => {
      (N() !== !0 || c(Lt)) && n(pi);
    });
  }
  X(Mt);
  var Fr = we(Mt, 2);
  {
    var yi = (n) => {
      var u = io(), _ = we(z(u), 2);
      {
        var b = (E) => {
          var p = ro(), $ = z(p);
          Ze($, () => c(re).expired), X(p), Pe(() => se(p, "title", c(He))), ne(E, p);
        }, T = (E) => {
          var p = no(), $ = z(p);
          Ze($, () => c(re).error), X(p), Pe(() => se(p, "title", c(He))), ne(E, p);
        };
        ke(_, (E) => {
          c(C) === y.EXPIRED ? E(b) : E(T, !1);
        });
      }
      X(u), ne(n, u);
    };
    ke(Fr, (n) => {
      (c(He) || c(C) === y.EXPIRED) && n(yi);
    });
  }
  var Or = we(Fr, 2);
  {
    var bi = (n) => {
      var u = lo(), _ = z(u), b = z(_);
      Ze(b, () => c(re).footer), X(_), X(u), ne(n, u);
    };
    ke(Or, (n) => {
      c(re).footer && (x() !== !0 || c(Lt)) && n(bi);
    });
  }
  var Ei = we(Or, 2);
  {
    var $i = (n) => {
      var u = oo();
      rn(u, (_) => L(tt, _), () => c(tt)), ne(n, u);
    };
    ke(Ei, (n) => {
      h() && n($i);
    });
  }
  return X(lt), rn(lt, (n) => L(B, n), () => c(B)), Pe(
    (n) => {
      se(lt, "data-state", c(C)), se(lt, "data-floating", h()), Pr = Nl(mt, 1, "altcha-checkbox", null, Pr, n), se(Ye, "id", c(cr)), Ye.required = r() !== "onsubmit" && (!h() || r() !== "off");
    },
    [
      () => ({
        "altcha-hidden": c(C) === y.VERIFYING
      })
    ]
  ), xl("invalid", Ye, yr), Ol(Ye, () => c(Be), (n) => L(Be, n)), ne(e, Nr), Hn({
    clarify: rt,
    configure: Cr,
    getConfiguration: Ar,
    getFloatingAnchor: Ir,
    getPlugin: vi,
    getState: Rr,
    hide: Sr,
    repositionFloating: nt,
    reset: it,
    setFloatingAnchor: Tr,
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
      return i();
    },
    set blockspam(n = void 0) {
      i(n), k();
    },
    get challengeurl() {
      return l();
    },
    set challengeurl(n = void 0) {
      l(n), k();
    },
    get challengejson() {
      return o();
    },
    set challengejson(n = void 0) {
      o(n), k();
    },
    get customfetch() {
      return a();
    },
    set customfetch(n = void 0) {
      a(n), k();
    },
    get debug() {
      return s();
    },
    set debug(n = !1) {
      s(n), k();
    },
    get delay() {
      return f();
    },
    set delay(n = 0) {
      f(n), k();
    },
    get expire() {
      return d();
    },
    set expire(n = void 0) {
      d(n), k();
    },
    get floating() {
      return h();
    },
    set floating(n = void 0) {
      h(n), k();
    },
    get floatinganchor() {
      return v();
    },
    set floatinganchor(n = void 0) {
      v(n), k();
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
      return x();
    },
    set hidefooter(n = !1) {
      x(n), k();
    },
    get hidelogo() {
      return N();
    },
    set hidelogo(n = !1) {
      N(n), k();
    },
    get id() {
      return O();
    },
    set id(n = void 0) {
      O(n), k();
    },
    get name() {
      return j();
    },
    set name(n = "altcha") {
      j(n), k();
    },
    get maxnumber() {
      return V();
    },
    set maxnumber(n = 1e6) {
      V(n), k();
    },
    get mockerror() {
      return W();
    },
    set mockerror(n = !1) {
      W(n), k();
    },
    get obfuscated() {
      return M();
    },
    set obfuscated(n = void 0) {
      M(n), k();
    },
    get plugins() {
      return Ne();
    },
    set plugins(n = void 0) {
      Ne(n), k();
    },
    get refetchonexpire() {
      return F();
    },
    set refetchonexpire(n = !0) {
      F(n), k();
    },
    get spamfilter() {
      return U();
    },
    set spamfilter(n = !1) {
      U(n), k();
    },
    get strings() {
      return _e();
    },
    set strings(n = void 0) {
      _e(n), k();
    },
    get test() {
      return te();
    },
    set test(n = !1) {
      te(n), k();
    },
    get verifyurl() {
      return be();
    },
    set verifyurl(n = void 0) {
      be(n), k();
    },
    get workers() {
      return je();
    },
    set workers(n = Math.min(16, navigator.hardwareConcurrency || 8)) {
      je(n), k();
    },
    get workerurl() {
      return Qe();
    },
    set workerurl(n = void 0) {
      Qe(n), k();
    }
  });
}
Cl(["change"]);
customElements.define("altcha-widget", ql(
  so,
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
  so as Altcha
};
