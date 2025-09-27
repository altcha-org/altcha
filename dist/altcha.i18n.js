var Ua = Array.isArray, Vn = Array.prototype.indexOf, jn = Array.from, ir = Object.keys, Dt = Object.defineProperty, rt = Object.getOwnPropertyDescriptor, Rn = Object.getOwnPropertyDescriptors, $n = Object.prototype, Sn = Array.prototype, Ga = Object.getPrototypeOf, ja = Object.isExtensible;
const yt = () => {
};
function Wa(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Pn(e, t, r = !1) {
  return e === void 0 ? r ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
const pe = 2, Za = 4, fr = 8, Dr = 16, Re = 32, nt = 64, nr = 128, fe = 256, or = 512, le = 1024, je = 2048, ot = 4096, kt = 8192, dr = 16384, zn = 32768, qr = 65536, Nn = 1 << 19, Ya = 1 << 20, Vr = 1 << 21, zt = Symbol("$state"), Ka = Symbol("legacy props"), Dn = Symbol(""), qn = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let qt = [], Ht = [];
function Ja() {
  var e = qt;
  qt = [], Wa(e);
}
function Xa() {
  var e = Ht;
  Ht = [], Wa(e);
}
function Hr(e) {
  qt.length === 0 && queueMicrotask(Ja), qt.push(e);
}
function Hn(e) {
  Ht.length === 0 && qn(Xa), Ht.push(e);
}
function On() {
  qt.length > 0 && Ja(), Ht.length > 0 && Xa();
}
function Qa(e) {
  return e === this.v;
}
function ei(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Or(e) {
  return !ei(e, this.v);
}
function Fn(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Mn() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Bn(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Un() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Gn() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Wn(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Zn() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Yn() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Kn() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
const Jn = 1, Xn = 4, Qn = 8, eo = 16, to = 1, ro = 2, Fr = "[", ti = "[!", ri = "]", At = {}, oe = Symbol(), ao = "http://www.w3.org/1999/xhtml";
function ai(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let ae = null;
function Ra(e) {
  ae = e;
}
function ii(e, t = !1, r) {
  var i = ae = {
    p: ae,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
  Ur(() => {
    i.d = !0;
  });
}
function ni(e) {
  const t = ae;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var r = V, i = I;
      t.e = null;
      try {
        for (var l = 0; l < s.length; l++) {
          var o = s[l];
          Oe(o.effect), Ee(o.reaction), Gr(o.fn);
        }
      } finally {
        Oe(r), Ee(i);
      }
    }
    ae = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function oi() {
  return !0;
}
function De(e) {
  if (typeof e != "object" || e === null || zt in e)
    return e;
  const t = Ga(e);
  if (t !== $n && t !== Sn)
    return e;
  var r = /* @__PURE__ */ new Map(), i = Ua(e), l = /* @__PURE__ */ $(0), o = I, s = (u) => {
    var f = I;
    Ee(o);
    var d = u();
    return Ee(f), d;
  };
  return i && r.set("length", /* @__PURE__ */ $(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(u, f, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && Zn();
        var p = r.get(f);
        return p === void 0 ? (p = s(() => /* @__PURE__ */ $(d.value)), r.set(f, p)) : y(
          p,
          s(() => De(d.value))
        ), !0;
      },
      deleteProperty(u, f) {
        var d = r.get(f);
        if (d === void 0)
          f in u && (r.set(
            f,
            s(() => /* @__PURE__ */ $(oe))
          ), Er(l));
        else {
          if (i && typeof f == "string") {
            var p = (
              /** @type {Source<number>} */
              r.get("length")
            ), g = Number(f);
            Number.isInteger(g) && g < p.v && y(p, g);
          }
          y(d, oe), Er(l);
        }
        return !0;
      },
      get(u, f, d) {
        if (f === zt)
          return e;
        var p = r.get(f), g = f in u;
        if (p === void 0 && (!g || rt(u, f)?.writable) && (p = s(() => /* @__PURE__ */ $(De(g ? u[f] : oe))), r.set(f, p)), p !== void 0) {
          var m = n(p);
          return m === oe ? void 0 : m;
        }
        return Reflect.get(u, f, d);
      },
      getOwnPropertyDescriptor(u, f) {
        var d = Reflect.getOwnPropertyDescriptor(u, f);
        if (d && "value" in d) {
          var p = r.get(f);
          p && (d.value = n(p));
        } else if (d === void 0) {
          var g = r.get(f), m = g?.v;
          if (g !== void 0 && m !== oe)
            return {
              enumerable: !0,
              configurable: !0,
              value: m,
              writable: !0
            };
        }
        return d;
      },
      has(u, f) {
        if (f === zt)
          return !0;
        var d = r.get(f), p = d !== void 0 && d.v !== oe || Reflect.has(u, f);
        if (d !== void 0 || V !== null && (!p || rt(u, f)?.writable)) {
          d === void 0 && (d = s(() => /* @__PURE__ */ $(p ? De(u[f]) : oe)), r.set(f, d));
          var g = n(d);
          if (g === oe)
            return !1;
        }
        return p;
      },
      set(u, f, d, p) {
        var g = r.get(f), m = f in u;
        if (i && f === "length")
          for (var k = d; k < /** @type {Source<number>} */
          g.v; k += 1) {
            var N = r.get(k + "");
            N !== void 0 ? y(N, oe) : k in u && (N = s(() => /* @__PURE__ */ $(oe)), r.set(k + "", N));
          }
        g === void 0 ? (!m || rt(u, f)?.writable) && (g = s(() => /* @__PURE__ */ $(void 0)), y(
          g,
          s(() => De(d))
        ), r.set(f, g)) : (m = g.v !== oe, y(
          g,
          s(() => De(d))
        ));
        var D = Reflect.getOwnPropertyDescriptor(u, f);
        if (D?.set && D.set.call(p, d), !m) {
          if (i && typeof f == "string") {
            var H = (
              /** @type {Source<number>} */
              r.get("length")
            ), E = Number(f);
            Number.isInteger(E) && E >= H.v && y(H, E + 1);
          }
          Er(l);
        }
        return !0;
      },
      ownKeys(u) {
        n(l);
        var f = Reflect.ownKeys(u).filter((g) => {
          var m = r.get(g);
          return m === void 0 || m.v !== oe;
        });
        for (var [d, p] of r)
          p.v !== oe && !(d in u) && f.push(d);
        return f;
      },
      setPrototypeOf() {
        Yn();
      }
    }
  );
}
function Er(e, t = 1) {
  y(e, e.v + t);
}
// @__NO_SIDE_EFFECTS__
function hr(e) {
  var t = pe | je, r = I !== null && (I.f & pe) !== 0 ? (
    /** @type {Derived} */
    I
  ) : null;
  return V === null || r !== null && (r.f & fe) !== 0 ? t |= fe : V.f |= Ya, {
    ctx: ae,
    deps: null,
    effects: null,
    equals: Qa,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: r ?? V
  };
}
// @__NO_SIDE_EFFECTS__
function $t(e) {
  const t = /* @__PURE__ */ hr(e);
  return vi(t), t;
}
// @__NO_SIDE_EFFECTS__
function io(e) {
  const t = /* @__PURE__ */ hr(e);
  return t.equals = Or, t;
}
function li(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Fe(
        /** @type {Effect} */
        t[r]
      );
  }
}
function no(e) {
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
function si(e) {
  var t, r = V;
  Oe(no(e));
  try {
    li(e), t = yi(e);
  } finally {
    Oe(r);
  }
  return t;
}
function ci(e) {
  var t = si(e), r = (qe || (e.f & fe) !== 0) && e.deps !== null ? ot : le;
  me(e, r), e.equals(t) || (e.v = t, e.wv = pi());
}
const Ot = /* @__PURE__ */ new Map();
function ui(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Qa,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function $(e, t) {
  const r = ui(e);
  return vi(r), r;
}
// @__NO_SIDE_EFFECTS__
function Mr(e, t = !1) {
  const r = ui(e);
  return t || (r.equals = Or), r;
}
function y(e, t, r = !1) {
  I !== null && !Le && oi() && (I.f & (pe | Dr)) !== 0 && !Ve?.includes(e) && Kn();
  let i = r ? De(t) : t;
  return oo(e, i);
}
function oo(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    Ft ? Ot.set(e, t) : Ot.set(e, r), e.v = t, (e.f & pe) !== 0 && ((e.f & je) !== 0 && si(
      /** @type {Derived} */
      e
    ), me(e, (e.f & fe) === 0 ? le : ot)), e.wv = pi(), fi(e, je), V !== null && (V.f & le) !== 0 && (V.f & (Re | nt)) === 0 && (he === null ? co([e]) : he.push(e));
  }
  return t;
}
function fi(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, l = 0; l < i; l++) {
      var o = r[l], s = o.f;
      (s & je) === 0 && (me(o, t), (s & (le | fe)) !== 0 && ((s & pe) !== 0 ? fi(
        /** @type {Derived} */
        o,
        ot
      ) : pr(
        /** @type {Effect} */
        o
      )));
    }
}
function gr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let z = !1;
function mt(e) {
  z = e;
}
let P;
function He(e) {
  if (e === null)
    throw gr(), At;
  return P = e;
}
function _t() {
  return He(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Me(P)
  );
}
function Z(e) {
  if (z) {
    if (/* @__PURE__ */ Me(P) !== null)
      throw gr(), At;
    P = e;
  }
}
function lo() {
  for (var e = 0, t = P; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === ri) {
        if (e === 0) return t;
        e -= 1;
      } else (r === Fr || r === ti) && (e += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Me(t)
    );
    t.remove(), t = i;
  }
}
var $a, di, hi, gi;
function jr() {
  if ($a === void 0) {
    $a = window, di = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    hi = rt(t, "firstChild").get, gi = rt(t, "nextSibling").get, ja(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), ja(r) && (r.__t = void 0);
  }
}
function vr(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function ge(e) {
  return hi.call(e);
}
// @__NO_SIDE_EFFECTS__
function Me(e) {
  return gi.call(e);
}
function Y(e, t) {
  if (!z)
    return /* @__PURE__ */ ge(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ ge(P)
  );
  return r === null && (r = P.appendChild(vr())), He(r), r;
}
function St(e, t) {
  if (!z) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ ge(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Me(r) : r;
  }
  return P;
}
function K(e, t = 1, r = !1) {
  let i = z ? P : e;
  for (var l; t--; )
    l = i, i = /** @type {TemplateNode} */
    /* @__PURE__ */ Me(i);
  if (!z)
    return i;
  var o = i?.nodeType;
  if (r && o !== 3) {
    var s = vr();
    return i === null ? l?.after(s) : i.before(s), He(s), s;
  }
  return He(i), /** @type {TemplateNode} */
  i;
}
function so(e) {
  e.textContent = "";
}
let tr = !1, lr = !1, sr = null, at = !1, Ft = !1;
function Sa(e) {
  Ft = e;
}
let Nt = [];
let I = null, Le = !1;
function Ee(e) {
  I = e;
}
let V = null;
function Oe(e) {
  V = e;
}
let Ve = null;
function vi(e) {
  I !== null && I.f & Vr && (Ve === null ? Ve = [e] : Ve.push(e));
}
let re = null, ue = 0, he = null;
function co(e) {
  he = e;
}
let bi = 1, cr = 0, qe = !1;
function pi() {
  return ++bi;
}
function Mt(e) {
  var t = e.f;
  if ((t & je) !== 0)
    return !0;
  if ((t & ot) !== 0) {
    var r = e.deps, i = (t & fe) !== 0;
    if (r !== null) {
      var l, o, s = (t & or) !== 0, u = i && V !== null && !qe, f = r.length;
      if (s || u) {
        var d = (
          /** @type {Derived} */
          e
        ), p = d.parent;
        for (l = 0; l < f; l++)
          o = r[l], (s || !o?.reactions?.includes(d)) && (o.reactions ??= []).push(d);
        s && (d.f ^= or), u && p !== null && (p.f & fe) === 0 && (d.f ^= fe);
      }
      for (l = 0; l < f; l++)
        if (o = r[l], Mt(
          /** @type {Derived} */
          o
        ) && ci(
          /** @type {Derived} */
          o
        ), o.wv > e.wv)
          return !0;
    }
    (!i || V !== null && !qe) && me(e, le);
  }
  return !1;
}
function uo(e, t) {
  for (var r = t; r !== null; ) {
    if ((r.f & nr) !== 0)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= nr;
      }
    r = r.parent;
  }
  throw tr = !1, e;
}
function Pa(e) {
  return (e.f & dr) === 0 && (e.parent === null || (e.parent.f & nr) === 0);
}
function br(e, t, r, i) {
  if (tr) {
    if (r === null && (tr = !1), Pa(t))
      throw e;
    return;
  }
  if (r !== null && (tr = !0), uo(e, t), Pa(t))
    throw e;
}
function mi(e, t, r = !0) {
  var i = e.reactions;
  if (i !== null)
    for (var l = 0; l < i.length; l++) {
      var o = i[l];
      Ve?.includes(e) || ((o.f & pe) !== 0 ? mi(
        /** @type {Derived} */
        o,
        t,
        !1
      ) : t === o && (r ? me(o, je) : (o.f & le) !== 0 && me(o, ot), pr(
        /** @type {Effect} */
        o
      )));
    }
}
function yi(e) {
  var t = re, r = ue, i = he, l = I, o = qe, s = Ve, u = ae, f = Le, d = e.f;
  re = /** @type {null | Value[]} */
  null, ue = 0, he = null, qe = (d & fe) !== 0 && (Le || !at || I === null), I = (d & (Re | nt)) === 0 ? e : null, Ve = null, Ra(e.ctx), Le = !1, cr++, e.f |= Vr;
  try {
    var p = (
      /** @type {Function} */
      (0, e.fn)()
    ), g = e.deps;
    if (re !== null) {
      var m;
      if (ur(e, ue), g !== null && ue > 0)
        for (g.length = ue + re.length, m = 0; m < re.length; m++)
          g[ue + m] = re[m];
      else
        e.deps = g = re;
      if (!qe)
        for (m = ue; m < g.length; m++)
          (g[m].reactions ??= []).push(e);
    } else g !== null && ue < g.length && (ur(e, ue), g.length = ue);
    if (oi() && he !== null && !Le && g !== null && (e.f & (pe | ot | je)) === 0)
      for (m = 0; m < /** @type {Source[]} */
      he.length; m++)
        mi(
          he[m],
          /** @type {Effect} */
          e
        );
    return l !== null && l !== e && (cr++, he !== null && (i === null ? i = he : i.push(.../** @type {Source[]} */
    he))), p;
  } finally {
    re = t, ue = r, he = i, I = l, qe = o, Ve = s, Ra(u), Le = f, e.f ^= Vr;
  }
}
function fo(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var i = Vn.call(r, e);
    if (i !== -1) {
      var l = r.length - 1;
      l === 0 ? r = t.reactions = null : (r[i] = r[l], r.pop());
    }
  }
  r === null && (t.f & pe) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (re === null || !re.includes(t)) && (me(t, ot), (t.f & (fe | or)) === 0 && (t.f ^= or), li(
    /** @type {Derived} **/
    t
  ), ur(
    /** @type {Derived} **/
    t,
    0
  ));
}
function ur(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var i = t; i < r.length; i++)
      fo(e, r[i]);
}
function Br(e) {
  var t = e.f;
  if ((t & dr) === 0) {
    me(e, le);
    var r = V, i = ae, l = at;
    V = e, at = !0;
    try {
      (t & Dr) !== 0 ? ko(e) : wi(e), _i(e);
      var o = yi(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = bi;
      var s = e.deps, u;
    } catch (f) {
      br(f, e, r, i || e.ctx);
    } finally {
      at = l, V = r;
    }
  }
}
function ho() {
  try {
    Un();
  } catch (e) {
    if (sr !== null)
      br(e, sr, null);
    else
      throw e;
  }
}
function Ai() {
  var e = at;
  try {
    var t = 0;
    for (at = !0; Nt.length > 0; ) {
      t++ > 1e3 && ho();
      var r = Nt, i = r.length;
      Nt = [];
      for (var l = 0; l < i; l++) {
        var o = vo(r[l]);
        go(o);
      }
      Ot.clear();
    }
  } finally {
    lr = !1, at = e, sr = null;
  }
}
function go(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var i = e[r];
      if ((i.f & (dr | kt)) === 0)
        try {
          Mt(i) && (Br(i), i.deps === null && i.first === null && i.nodes_start === null && (i.teardown === null ? Li(i) : i.fn = null));
        } catch (l) {
          br(l, i, null, i.ctx);
        }
    }
}
function pr(e) {
  lr || (lr = !0, queueMicrotask(Ai));
  for (var t = sr = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (nt | Re)) !== 0) {
      if ((r & le) === 0) return;
      t.f ^= le;
    }
  }
  Nt.push(t);
}
function vo(e) {
  for (var t = [], r = e; r !== null; ) {
    var i = r.f, l = (i & (Re | nt)) !== 0, o = l && (i & le) !== 0;
    if (!o && (i & kt) === 0) {
      if ((i & Za) !== 0)
        t.push(r);
      else if (l)
        r.f ^= le;
      else
        try {
          Mt(r) && Br(r);
        } catch (f) {
          br(f, r, null, r.ctx);
        }
      var s = r.first;
      if (s !== null) {
        r = s;
        continue;
      }
    }
    var u = r.parent;
    for (r = r.next; r === null && u !== null; )
      r = u.next, u = u.parent;
  }
  return t;
}
function _(e) {
  for (var t; ; ) {
    if (On(), Nt.length === 0)
      return (
        /** @type {T} */
        t
      );
    lr = !0, Ai();
  }
}
async function Tr() {
  await Promise.resolve(), _();
}
function n(e) {
  var t = e.f, r = (t & pe) !== 0;
  if (I !== null && !Le) {
    if (!Ve?.includes(e)) {
      var i = I.deps;
      e.rv < cr && (e.rv = cr, re === null && i !== null && i[ue] === e ? ue++ : re === null ? re = [e] : (!qe || !re.includes(e)) && re.push(e));
    }
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var l = (
      /** @type {Derived} */
      e
    ), o = l.parent;
    o !== null && (o.f & fe) === 0 && (l.f ^= fe);
  }
  return r && (l = /** @type {Derived} */
  e, Mt(l) && ci(l)), Ft && Ot.has(e) ? Ot.get(e) : e.v;
}
function it(e) {
  var t = Le;
  try {
    return Le = !0, e();
  } finally {
    Le = t;
  }
}
const bo = -7169;
function me(e, t) {
  e.f = e.f & bo | t;
}
function po(e) {
  V === null && I === null && Bn(), I !== null && (I.f & fe) !== 0 && V === null && Mn(), Ft && Fn();
}
function mo(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function lt(e, t, r, i = !0) {
  var l = V, o = {
    ctx: ae,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | je,
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
      Br(o), o.f |= zn;
    } catch (f) {
      throw Fe(o), f;
    }
  else t !== null && pr(o);
  var s = r && o.deps === null && o.first === null && o.nodes_start === null && o.teardown === null && (o.f & (Ya | nr)) === 0;
  if (!s && i && (l !== null && mo(o, l), I !== null && (I.f & pe) !== 0)) {
    var u = (
      /** @type {Derived} */
      I
    );
    (u.effects ??= []).push(o);
  }
  return o;
}
function Ur(e) {
  const t = lt(fr, null, !1);
  return me(t, le), t.teardown = e, t;
}
function Rr(e) {
  po();
  var t = V !== null && (V.f & Re) !== 0 && ae !== null && !ae.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      ae
    );
    (r.e ??= []).push({
      fn: e,
      effect: V,
      reaction: I
    });
  } else {
    var i = Gr(e);
    return i;
  }
}
function yo(e) {
  const t = lt(nt, e, !0);
  return () => {
    Fe(t);
  };
}
function Ao(e) {
  const t = lt(nt, e, !0);
  return (r = {}) => new Promise((i) => {
    r.outro ? Sr(t, () => {
      Fe(t), i(void 0);
    }) : (Fe(t), i(void 0));
  });
}
function Gr(e) {
  return lt(Za, e, !1);
}
function Wr(e) {
  return lt(fr, e, !0);
}
function Ce(e, t = [], r = hr) {
  const i = t.map(r);
  return ki(() => e(...i.map(n)));
}
function ki(e, t = 0) {
  return lt(fr | Dr | t, e, !0);
}
function $r(e, t = !0) {
  return lt(fr | Re, e, !0, t);
}
function _i(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Ft, i = I;
    Sa(!0), Ee(null);
    try {
      t.call(null);
    } finally {
      Sa(r), Ee(i);
    }
  }
}
function wi(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var i = r.next;
    (r.f & nt) !== 0 ? r.parent = null : Fe(r, t), r = i;
  }
}
function ko(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Re) === 0 && Fe(t), t = r;
  }
}
function Fe(e, t = !0) {
  var r = !1;
  (t || (e.f & Nn) !== 0) && e.nodes_start !== null && (Ci(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), r = !0), wi(e, t && !r), ur(e, 0), me(e, dr);
  var i = e.transitions;
  if (i !== null)
    for (const o of i)
      o.stop();
  _i(e);
  var l = e.parent;
  l !== null && l.first !== null && Li(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function Ci(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Me(e)
    );
    e.remove(), e = r;
  }
}
function Li(e) {
  var t = e.parent, r = e.prev, i = e.next;
  r !== null && (r.next = i), i !== null && (i.prev = r), t !== null && (t.first === e && (t.first = i), t.last === e && (t.last = r));
}
function Sr(e, t) {
  var r = [];
  xi(e, r, !0), _o(r, () => {
    Fe(e), t && t();
  });
}
function _o(e, t) {
  var r = e.length;
  if (r > 0) {
    var i = () => --r || t();
    for (var l of e)
      l.out(i);
  } else
    t();
}
function xi(e, t, r) {
  if ((e.f & kt) === 0) {
    if (e.f ^= kt, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || r) && t.push(s);
    for (var i = e.first; i !== null; ) {
      var l = i.next, o = (i.f & qr) !== 0 || (i.f & Re) !== 0;
      xi(i, t, o ? r : !1), i = l;
    }
  }
}
function za(e) {
  Ei(e, !0);
}
function Ei(e, t) {
  if ((e.f & kt) !== 0) {
    e.f ^= kt, (e.f & le) === 0 && (e.f ^= le), Mt(e) && (me(e, je), pr(e));
    for (var r = e.first; r !== null; ) {
      var i = r.next, l = (r.f & qr) !== 0 || (r.f & Re) !== 0;
      Ei(r, l ? t : !1), r = i;
    }
    if (e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || t) && o.in();
  }
}
const wo = ["touchstart", "touchmove"];
function Co(e) {
  return wo.includes(e);
}
function Lo(e, t) {
  if (t) {
    const r = document.body;
    e.autofocus = !0, Hr(() => {
      document.activeElement === r && e.focus();
    });
  }
}
let Na = !1;
function Ti() {
  Na || (Na = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        if (!e.defaultPrevented)
          for (
            const t of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            t.__on_r?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function Ii(e) {
  var t = I, r = V;
  Ee(null), Oe(null);
  try {
    return e();
  } finally {
    Ee(t), Oe(r);
  }
}
function xo(e, t, r, i = r) {
  e.addEventListener(t, () => Ii(r));
  const l = e.__on_r;
  l ? e.__on_r = () => {
    l(), i(!0);
  } : e.__on_r = () => i(!0), Ti();
}
const Vi = /* @__PURE__ */ new Set(), Pr = /* @__PURE__ */ new Set();
function Eo(e, t, r, i = {}) {
  function l(o) {
    if (i.capture || Pt.call(t, o), !o.cancelBubble)
      return Ii(() => r?.call(this, o));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Hr(() => {
    t.addEventListener(e, l, i);
  }) : t.addEventListener(e, l, i), l;
}
function Ne(e, t, r, i, l) {
  var o = { capture: i, passive: l }, s = Eo(e, t, r, o);
  (t === document.body || t === window || t === document) && Ur(() => {
    t.removeEventListener(e, s, o);
  });
}
function To(e) {
  for (var t = 0; t < e.length; t++)
    Vi.add(e[t]);
  for (var r of Pr)
    r(e);
}
function Pt(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), i = e.type, l = e.composedPath?.() || [], o = (
    /** @type {null | Element} */
    l[0] || e.target
  ), s = 0, u = e.__root;
  if (u) {
    var f = l.indexOf(u);
    if (f !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var d = l.indexOf(t);
    if (d === -1)
      return;
    f <= d && (s = f);
  }
  if (o = /** @type {Element} */
  l[s] || e.target, o !== t) {
    Dt(e, "currentTarget", {
      configurable: !0,
      get() {
        return o || r;
      }
    });
    var p = I, g = V;
    Ee(null), Oe(null);
    try {
      for (var m, k = []; o !== null; ) {
        var N = o.assignedSlot || o.parentNode || /** @type {any} */
        o.host || null;
        try {
          var D = o["__" + i];
          if (D != null && (!/** @type {any} */
          o.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === o))
            if (Ua(D)) {
              var [H, ...E] = D;
              H.apply(o, [e, ...E]);
            } else
              D.call(o, e);
        } catch (ee) {
          m ? k.push(ee) : m = ee;
        }
        if (e.cancelBubble || N === t || N === null)
          break;
        o = N;
      }
      if (m) {
        for (let ee of k)
          queueMicrotask(() => {
            throw ee;
          });
        throw m;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Ee(p), Oe(g);
    }
  }
}
function Zr(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function xe(e, t) {
  var r = (
    /** @type {Effect} */
    V
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ye(e, t) {
  var r = (t & to) !== 0, i = (t & ro) !== 0, l, o = !e.startsWith("<!>");
  return () => {
    if (z)
      return xe(P, null), P;
    l === void 0 && (l = Zr(o ? e : "<!>" + e), r || (l = /** @type {Node} */
    /* @__PURE__ */ ge(l)));
    var s = (
      /** @type {TemplateNode} */
      i || di ? document.importNode(l, !0) : l.cloneNode(!0)
    );
    if (r) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ge(s)
      ), f = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      xe(u, f);
    } else
      xe(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function mr(e, t, r = "svg") {
  var i = !e.startsWith("<!>"), l = `<${r}>${i ? e : "<!>" + e}</${r}>`, o;
  return () => {
    if (z)
      return xe(P, null), P;
    if (!o) {
      var s = (
        /** @type {DocumentFragment} */
        Zr(l)
      ), u = (
        /** @type {Element} */
        /* @__PURE__ */ ge(s)
      );
      o = /** @type {Element} */
      /* @__PURE__ */ ge(u);
    }
    var f = (
      /** @type {TemplateNode} */
      o.cloneNode(!0)
    );
    return xe(f, f), f;
  };
}
function Xt() {
  if (z)
    return xe(P, null), P;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = vr();
  return e.append(t, r), xe(t, r), e;
}
function M(e, t) {
  if (z) {
    V.nodes_end = P, _t();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Io(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ??= e.nodeValue) && (e.__t = r, e.nodeValue = r + "");
}
function ji(e, t) {
  return Ri(e, t);
}
function Vo(e, t) {
  jr(), t.intro = t.intro ?? !1;
  const r = t.target, i = z, l = P;
  try {
    for (var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ge(r)
    ); o && (o.nodeType !== 8 || /** @type {Comment} */
    o.data !== Fr); )
      o = /** @type {TemplateNode} */
      /* @__PURE__ */ Me(o);
    if (!o)
      throw At;
    mt(!0), He(
      /** @type {Comment} */
      o
    ), _t();
    const s = Ri(e, { ...t, anchor: o });
    if (P === null || P.nodeType !== 8 || /** @type {Comment} */
    P.data !== ri)
      throw gr(), At;
    return mt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === At)
      return t.recover === !1 && Gn(), jr(), so(r), mt(!1), ji(e, t);
    throw s;
  } finally {
    mt(i), He(l);
  }
}
const bt = /* @__PURE__ */ new Map();
function Ri(e, { target: t, anchor: r, props: i = {}, events: l, context: o, intro: s = !0 }) {
  jr();
  var u = /* @__PURE__ */ new Set(), f = (g) => {
    for (var m = 0; m < g.length; m++) {
      var k = g[m];
      if (!u.has(k)) {
        u.add(k);
        var N = Co(k);
        t.addEventListener(k, Pt, { passive: N });
        var D = bt.get(k);
        D === void 0 ? (document.addEventListener(k, Pt, { passive: N }), bt.set(k, 1)) : bt.set(k, D + 1);
      }
    }
  };
  f(jn(Vi)), Pr.add(f);
  var d = void 0, p = Ao(() => {
    var g = r ?? t.appendChild(vr());
    return $r(() => {
      if (o) {
        ii({});
        var m = (
          /** @type {ComponentContext} */
          ae
        );
        m.c = o;
      }
      l && (i.$$events = l), z && xe(
        /** @type {TemplateNode} */
        g,
        null
      ), d = e(g, i) || {}, z && (V.nodes_end = P), o && ni();
    }), () => {
      for (var m of u) {
        t.removeEventListener(m, Pt);
        var k = (
          /** @type {number} */
          bt.get(m)
        );
        --k === 0 ? (document.removeEventListener(m, Pt), bt.delete(m)) : bt.set(m, k);
      }
      Pr.delete(f), g !== r && g.parentNode?.removeChild(g);
    };
  });
  return zr.set(d, p), d;
}
let zr = /* @__PURE__ */ new WeakMap();
function jo(e, t) {
  const r = zr.get(e);
  return r ? (zr.delete(e), r(t)) : Promise.resolve();
}
function J(e, t, [r, i] = [0, 0]) {
  z && r === 0 && _t();
  var l = e, o = null, s = null, u = oe, f = r > 0 ? qr : 0, d = !1;
  const p = (m, k = !0) => {
    d = !0, g(k, m);
  }, g = (m, k) => {
    if (u === (u = m)) return;
    let N = !1;
    if (z && i !== -1) {
      if (r === 0) {
        const H = (
          /** @type {Comment} */
          l.data
        );
        H === Fr ? i = 0 : H === ti ? i = 1 / 0 : (i = parseInt(H.substring(1)), i !== i && (i = u ? 1 / 0 : -1));
      }
      const D = i > r;
      !!u === D && (l = lo(), He(l), mt(!1), N = !0, i = -1);
    }
    u ? (o ? za(o) : k && (o = $r(() => k(l))), s && Sr(s, () => {
      s = null;
    })) : (s ? za(s) : k && (s = $r(() => k(l, [r + 1, i]))), o && Sr(o, () => {
      o = null;
    })), N && mt(!0);
  };
  ki(() => {
    d = !1, t(p), d || g(null, null);
  }, f), z && (l = P);
}
function tt(e, t, r = !1, i = !1, l = !1) {
  var o = e, s = "";
  Ce(() => {
    var u = (
      /** @type {Effect} */
      V
    );
    if (s === (s = t() ?? "")) {
      z && _t();
      return;
    }
    if (u.nodes_start !== null && (Ci(
      u.nodes_start,
      /** @type {TemplateNode} */
      u.nodes_end
    ), u.nodes_start = u.nodes_end = null), s !== "") {
      if (z) {
        P.data;
        for (var f = _t(), d = f; f !== null && (f.nodeType !== 8 || /** @type {Comment} */
        f.data !== ""); )
          d = f, f = /** @type {TemplateNode} */
          /* @__PURE__ */ Me(f);
        if (f === null)
          throw gr(), At;
        xe(P, d), o = He(f);
        return;
      }
      var p = s + "";
      r ? p = `<svg>${p}</svg>` : i && (p = `<math>${p}</math>`);
      var g = Zr(p);
      if ((r || i) && (g = /** @type {Element} */
      /* @__PURE__ */ ge(g)), xe(
        /** @type {TemplateNode} */
        /* @__PURE__ */ ge(g),
        /** @type {TemplateNode} */
        g.lastChild
      ), r || i)
        for (; /* @__PURE__ */ ge(g); )
          o.before(
            /** @type {Node} */
            /* @__PURE__ */ ge(g)
          );
      else
        o.before(g);
    }
  });
}
function Ro(e, t, r, i, l) {
  z && _t();
  var o = t.$$slots?.[r], s = !1;
  o === !0 && (o = t.children, s = !0), o === void 0 || o(e, s ? () => i : i);
}
const Da = [...` 	
\r\f \v\uFEFF`];
function $o(e, t, r) {
  var i = "" + e;
  if (r) {
    for (var l in r)
      if (r[l])
        i = i ? i + " " + l : l;
      else if (i.length)
        for (var o = l.length, s = 0; (s = i.indexOf(l, s)) >= 0; ) {
          var u = s + o;
          (s === 0 || Da.includes(i[s - 1])) && (u === i.length || Da.includes(i[u])) ? i = (s === 0 ? "" : i.substring(0, s)) + i.substring(u + 1) : s = u;
        }
  }
  return i === "" ? null : i;
}
function So(e, t, r, i, l, o) {
  var s = e.__className;
  if (z || s !== r || s === void 0) {
    var u = $o(r, i, o);
    (!z || u !== e.getAttribute("class")) && (u == null ? e.removeAttribute("class") : e.className = u), e.__className = r;
  } else if (o && l !== o)
    for (var f in o) {
      var d = !!o[f];
      (l == null || d !== !!l[f]) && e.classList.toggle(f, d);
    }
  return o;
}
const Po = Symbol("is custom element"), zo = Symbol("is html");
function qa(e) {
  if (z) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var i = e.value;
          T(e, "value", null), e.value = i;
        }
        if (e.hasAttribute("checked")) {
          var l = e.checked;
          T(e, "checked", null), e.checked = l;
        }
      }
    };
    e.__on_r = r, Hn(r), Ti();
  }
}
function No(e, t) {
  var r = $i(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function T(e, t, r, i) {
  var l = $i(e);
  z && (l[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || l[t] !== (l[t] = r) && (t === "loading" && (e[Dn] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Do(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function $i(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [Po]: e.nodeName.includes("-"),
      [zo]: e.namespaceURI === ao
    }
  );
}
var Ha = /* @__PURE__ */ new Map();
function Do(e) {
  var t = Ha.get(e.nodeName);
  if (t) return t;
  Ha.set(e.nodeName, t = []);
  for (var r, i = e, l = Element.prototype; l !== i; ) {
    r = Rn(i);
    for (var o in r)
      r[o].set && t.push(o);
    i = Ga(i);
  }
  return t;
}
function qo(e, t, r = t) {
  xo(e, "change", (i) => {
    var l = i ? e.defaultChecked : e.checked;
    r(l);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (z && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  it(t) == null) && r(e.checked), Wr(() => {
    var i = t();
    e.checked = !!i;
  });
}
function Oa(e, t) {
  return e === t || e?.[zt] === t;
}
function Qt(e = {}, t, r, i) {
  return Gr(() => {
    var l, o;
    return Wr(() => {
      l = o, o = [], it(() => {
        e !== r(...o) && (t(e, ...o), l && Oa(r(...l), e) && t(null, ...l));
      });
    }), () => {
      Hr(() => {
        o && Oa(r(...o), e) && t(null, ...o);
      });
    };
  }), e;
}
let er = !1, Nr = Symbol();
function Ho(e, t, r) {
  const i = r[t] ??= {
    store: null,
    source: /* @__PURE__ */ Mr(void 0),
    unsubscribe: yt
  };
  if (i.store !== e && !(Nr in r))
    if (i.unsubscribe(), i.store = e ?? null, e == null)
      i.source.v = void 0, i.unsubscribe = yt;
    else {
      var l = !0;
      i.unsubscribe = zi(e, (o) => {
        l ? i.source.v = o : y(i.source, o);
      }), l = !1;
    }
  return e && Nr in r ? ar(e) : n(i.source);
}
function Oo() {
  const e = {};
  function t() {
    Ur(() => {
      for (var r in e)
        e[r].unsubscribe();
      Dt(e, Nr, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function Fo(e) {
  var t = er;
  try {
    return er = !1, [e(), er];
  } finally {
    er = t;
  }
}
function Fa(e) {
  return e.ctx?.d ?? !1;
}
function w(e, t, r, i) {
  var l = (r & Jn) !== 0, o = !0, s = (r & Qn) !== 0, u = (r & eo) !== 0, f = !1, d;
  s ? [d, f] = Fo(() => (
    /** @type {V} */
    e[t]
  )) : d = /** @type {V} */
  e[t];
  var p = zt in e || Ka in e, g = s && (rt(e, t)?.set ?? (p && t in e && ((O) => e[t] = O))) || void 0, m = (
    /** @type {V} */
    i
  ), k = !0, N = !1, D = () => (N = !0, k && (k = !1, u ? m = it(
    /** @type {() => V} */
    i
  ) : m = /** @type {V} */
  i), m);
  d === void 0 && i !== void 0 && (g && o && Wn(), d = D(), g && g(d));
  var H;
  if (H = () => {
    var O = (
      /** @type {V} */
      e[t]
    );
    return O === void 0 ? D() : (k = !0, N = !1, O);
  }, (r & Xn) === 0)
    return H;
  if (g) {
    var E = e.$$legacy;
    return function(O, se) {
      return arguments.length > 0 ? ((!se || E || f) && g(se ? H() : O), O) : H();
    };
  }
  var ee = !1, Te = /* @__PURE__ */ Mr(d), X = /* @__PURE__ */ hr(() => {
    var O = H(), se = n(Te);
    return ee ? (ee = !1, se) : Te.v = O;
  });
  return s && n(X), l || (X.equals = Or), function(O, se) {
    if (arguments.length > 0) {
      const Be = se ? n(X) : s ? De(O) : O;
      if (!X.equals(Be)) {
        if (ee = !0, y(Te, Be), N && m !== void 0 && (m = Be), Fa(X))
          return O;
        it(() => n(X));
      }
      return O;
    }
    return Fa(X) ? X.v : n(X);
  };
}
function Mo(e) {
  return new Bo(e);
}
class Bo {
  /** @type {any} */
  #t;
  /** @type {Record<string, any>} */
  #e;
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    var r = /* @__PURE__ */ new Map(), i = (o, s) => {
      var u = /* @__PURE__ */ Mr(s);
      return r.set(o, u), u;
    };
    const l = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(o, s) {
          return n(r.get(s) ?? i(s, Reflect.get(o, s)));
        },
        has(o, s) {
          return s === Ka ? !0 : (n(r.get(s) ?? i(s, Reflect.get(o, s))), Reflect.has(o, s));
        },
        set(o, s, u) {
          return y(r.get(s) ?? i(s, u), u), Reflect.set(o, s, u);
        }
      }
    );
    this.#e = (t.hydrate ? Vo : ji)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: l,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && _(), this.#t = l.$$events;
    for (const o of Object.keys(this.#e))
      o === "$set" || o === "$destroy" || o === "$on" || Dt(this, o, {
        get() {
          return this.#e[o];
        },
        /** @param {any} value */
        set(s) {
          this.#e[o] = s;
        },
        enumerable: !0
      });
    this.#e.$set = /** @param {Record<string, any>} next */
    (o) => {
      Object.assign(l, o);
    }, this.#e.$destroy = () => {
      jo(this.#e);
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    this.#e.$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    this.#t[t] = this.#t[t] || [];
    const i = (...l) => r.call(this, ...l);
    return this.#t[t].push(i), () => {
      this.#t[t] = this.#t[t].filter(
        /** @param {any} fn */
        (l) => l !== i
      );
    };
  }
  $destroy() {
    this.#e.$destroy();
  }
}
let Si;
typeof HTMLElement == "function" && (Si = class extends HTMLElement {
  /** The Svelte component constructor */
  $$ctor;
  /** Slots */
  $$s;
  /** @type {any} The Svelte component instance */
  $$c;
  /** Whether or not the custom element is connected */
  $$cn = !1;
  /** @type {Record<string, any>} Component props data */
  $$d = {};
  /** `true` if currently in the process of reflecting component props back to attributes */
  $$r = !1;
  /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
  $$p_d = {};
  /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
  $$l = {};
  /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
  $$l_u = /* @__PURE__ */ new Map();
  /** @type {any} The managed render effect for reflecting attributes */
  $$me;
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, t, r) {
    super(), this.$$ctor = e, this.$$s = t, r && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(e, t, r) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
      const i = this.$$c.$on(e, t);
      this.$$l_u.set(t, i);
    }
    super.addEventListener(e, t, r);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(e, t, r) {
    if (super.removeEventListener(e, t, r), this.$$c) {
      const i = this.$$l_u.get(t);
      i && (i(), this.$$l_u.delete(t));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(i) {
        return (l) => {
          const o = document.createElement("slot");
          i !== "default" && (o.name = i), M(l, o);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, r = Uo(this);
      for (const i of this.$$s)
        i in r && (i === "default" && !this.$$d.children ? (this.$$d.children = e(i), t.default = !0) : t[i] = e(i));
      for (const i of this.attributes) {
        const l = this.$$g_p(i.name);
        l in this.$$d || (this.$$d[l] = rr(l, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = Mo({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = yo(() => {
        Wr(() => {
          this.$$r = !0;
          for (const i of ir(this.$$c)) {
            if (!this.$$p_d[i]?.reflect) continue;
            this.$$d[i] = this.$$c[i];
            const l = rr(
              i,
              this.$$d[i],
              this.$$p_d,
              "toAttribute"
            );
            l == null ? this.removeAttribute(this.$$p_d[i].attribute || i) : this.setAttribute(this.$$p_d[i].attribute || i, l);
          }
          this.$$r = !1;
        });
      });
      for (const i in this.$$l)
        for (const l of this.$$l[i]) {
          const o = this.$$c.$on(i, l);
          this.$$l_u.set(l, o);
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
  attributeChangedCallback(e, t, r) {
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = rr(e, r, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(e) {
    return ir(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function rr(e, t, r, i) {
  const l = r[e]?.type;
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
function Uo(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function Go(e, t, r, i, l, o) {
  let s = class extends Si {
    constructor() {
      super(e, r, l), this.$$p_d = t;
    }
    static get observedAttributes() {
      return ir(t).map(
        (u) => (t[u].attribute || u).toLowerCase()
      );
    }
  };
  return ir(t).forEach((u) => {
    Dt(s.prototype, u, {
      get() {
        return this.$$c && u in this.$$c ? this.$$c[u] : this.$$d[u];
      },
      set(f) {
        f = rr(u, f, t), this.$$d[u] = f;
        var d = this.$$c;
        if (d) {
          var p = rt(d, u)?.get;
          p ? d[u] = f : d.$set({ [u]: f });
        }
      }
    });
  }), i.forEach((u) => {
    Dt(s.prototype, u, {
      get() {
        return this.$$c?.[u];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
function Pi(e) {
  ae === null && ai(), Rr(() => {
    const t = it(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Wo(e) {
  ae === null && ai(), Pi(() => () => it(e));
}
function zi(e, t, r) {
  if (e == null)
    return t(void 0), yt;
  const i = it(
    () => e.subscribe(
      t,
      // @ts-expect-error
      r
    )
  );
  return i.unsubscribe ? () => i.unsubscribe() : i;
}
const pt = [];
function Zo(e, t = yt) {
  let r = null;
  const i = /* @__PURE__ */ new Set();
  function l(u) {
    if (ei(e, u) && (e = u, r)) {
      const f = !pt.length;
      for (const d of i)
        d[1](), pt.push(d, e);
      if (f) {
        for (let d = 0; d < pt.length; d += 2)
          pt[d][0](pt[d + 1]);
        pt.length = 0;
      }
    }
  }
  function o(u) {
    l(u(
      /** @type {T} */
      e
    ));
  }
  function s(u, f = yt) {
    const d = [u, f];
    return i.add(d), i.size === 1 && (r = t(l, o) || yt), u(
      /** @type {T} */
      e
    ), () => {
      i.delete(d), i.size === 0 && r && (r(), r = null);
    };
  }
  return { set: l, update: o, subscribe: s };
}
function ar(e) {
  let t;
  return zi(e, (r) => t = r)(), t;
}
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (e) => ar(globalThis.altchaI18n.store)[e],
  set: (e, t) => {
    Object.assign(ar(globalThis.altchaI18n.store), {
      [e]: t
    }), globalThis.altchaI18n.store.set(ar(globalThis.altchaI18n.store));
  },
  store: Zo({})
};
const Yo = {
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
globalThis.altchaI18n.set("ar", Yo);
const Ko = {
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
globalThis.altchaI18n.set("bg", Ko);
const Jo = {
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
globalThis.altchaI18n.set("be", Jo);
const Xo = {
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
globalThis.altchaI18n.set("bs", Xo);
const Qo = {
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
globalThis.altchaI18n.set("ca", Qo);
const el = {
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
globalThis.altchaI18n.set("cs", el);
const tl = {
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
globalThis.altchaI18n.set("da", tl);
const rl = {
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
globalThis.altchaI18n.set("de", rl);
const al = {
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
globalThis.altchaI18n.set("el", al);
const il = {
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
globalThis.altchaI18n.set("es-es", il);
const nl = {
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
globalThis.altchaI18n.set("es-419", nl);
const ol = {
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
globalThis.altchaI18n.set("et", ol);
const ll = {
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
globalThis.altchaI18n.set("eu", ll);
const sl = {
  ariaLinkLabel: "بازدید از Altcha.org",
  enterCode: "کد را وارد کنید",
  enterCodeAria: "کدی که می‌شنوید را وارد کنید. برای پخش صدا Space را فشار دهید.",
  error: "احراز هویت ناموفق بود. بعداً دوباره تلاش کنید.",
  expired: "احراز هویت منقضی شد. دوباره تلاش کنید.",
  footer: 'محافظت شده توسط <a href="https://altcha.org/" target="_blank" aria-label="بازدید از Altcha.org">ALTCHA</a>',
  getAudioChallenge: "دریافت چالش صوتی",
  label: "من ربات نیستم",
  loading: "در حال بارگذاری...",
  reload: "بارگذاری مجدد",
  verify: "تایید",
  verificationRequired: "احراز هویت لازم است!",
  verified: "تایید شد",
  verifying: "در حال تایید...",
  waitAlert: "در حال تایید... لطفا منتظر بمانید."
};
globalThis.altchaI18n.set("fa", sl);
const cl = {
  ariaLinkLabel: "Besicht Altcha.org",
  enterCode: "Code aginn",
  enterCodeAria: "Gitt de Code an deen dir héiert. Dréckt op d'Weltraumtast fir Audio ofzespillen.",
  error: "Verifikatioun ass feelgeschloen. Probéiert méi spéit nach emol.",
  expired: "Verifikatioun ofgelaf. Probéiert nach emol.",
  footer: 'Geschützt vun <a href="https://altcha.org/" target="_blank" aria-label="Besicht Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Kritt eng Audio-Herausfuerderung",
  label: "Ech sinn keen Robot",
  loading: "Lueden...",
  reload: "Nei lueden",
  verify: "Verifizéieren",
  verificationRequired: "Verifikatioun néideg!",
  verified: "Verifizéiert",
  verifying: "Verifizéieren...",
  waitAlert: "Verifizéieren... waart wgl."
};
globalThis.altchaI18n.set("lb", cl);
const ul = {
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
globalThis.altchaI18n.set("fi", ul);
const fl = {
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
globalThis.altchaI18n.set("fr-ca", fl);
const dl = {
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
globalThis.altchaI18n.set("fr-fr", dl);
const hl = {
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
globalThis.altchaI18n.set("ga", hl);
const gl = {
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
globalThis.altchaI18n.set("hr", gl);
const vl = {
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
globalThis.altchaI18n.set("hu", vl);
const bl = {
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
globalThis.altchaI18n.set("is", bl);
const pl = {
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
globalThis.altchaI18n.set("it", pl);
const ml = {
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
globalThis.altchaI18n.set("lt", ml);
const yl = {
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
globalThis.altchaI18n.set("lv", yl);
const Al = {
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
globalThis.altchaI18n.set("mt", Al);
const Ni = {
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
globalThis.altchaI18n.set("nb", Ni);
globalThis.altchaI18n.set("no", Ni);
const kl = {
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
globalThis.altchaI18n.set("nl", kl);
const _l = {
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
globalThis.altchaI18n.set("pl", _l);
const wl = {
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
globalThis.altchaI18n.set("pt-pt", wl);
const Cl = {
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
globalThis.altchaI18n.set("pt-br", Cl);
const Ll = {
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
globalThis.altchaI18n.set("ro", Ll);
const xl = {
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
globalThis.altchaI18n.set("ru", xl);
const El = {
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
globalThis.altchaI18n.set("sk", El);
const Tl = {
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
globalThis.altchaI18n.set("sl", Tl);
const Il = {
  ariaLinkLabel: "Vizitoni Altcha.org",
  enterCode: "Fut kodin",
  enterCodeAria: "Fut kodin që dëgjon. Shtypni Hapësirë për të luajtur audio.",
  error: "Verifikimi dështoi. Provoni përsëri më vonë.",
  expired: "Verifikimi ka skaduar. Provoni përsëri.",
  footer: 'I mbrojtur nga <a href="https://altcha.org/" target="_blank" aria-label="Vizitoni Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Merr një sfidë audio",
  label: "Unë nuk jam një robot",
  loading: "Duke u ngarkuar...",
  reload: "Ringarko",
  verify: "Verifiko",
  verificationRequired: "Kërkohet verifikimi!",
  verified: "I verifikuar",
  verifying: "Duke verifikuar...",
  waitAlert: "Duke verifikuar... ju lutem prisni."
};
globalThis.altchaI18n.set("sq", Il);
const Vl = {
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
globalThis.altchaI18n.set("sr", Vl);
const jl = {
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
globalThis.altchaI18n.set("sv", jl);
const Rl = {
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
globalThis.altchaI18n.set("tr", Rl);
const $l = {
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
globalThis.altchaI18n.set("uk", $l);
const Sl = {
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
globalThis.altchaI18n.set("af", Sl);
const Pl = {
  ariaLinkLabel: "Altcha.org ይጎብኙ",
  enterCode: "ኮድ አስገባ",
  enterCodeAria: "የሚሰማዎትን ኮድ ያስገቡ። ድምጽ ለመጫወት Space ን ይጫኑ።",
  error: "ማረጋገጫ አልተሳካም። በኋላ ላይ እንደገና ይሞክሩ።",
  expired: "ማረጋገጫው ጊዜው አልፏል። እንደገና ይሞክሩ።",
  footer: 'በ <a href="https://altcha.org/" target="_blank" aria-label="Altcha.org ይጎብኙ">ALTCHA</a> የተጠበቀ',
  getAudioChallenge: "የድምጽ ፈተና ያግኙ",
  label: "እኔ ሮቦት አይደለሁም",
  loading: "በመጫን ላይ...",
  reload: "እንደገና ጫን",
  verify: "አረጋግጥ",
  verificationRequired: "ማረጋገጫ ያስፈልጋል!",
  verified: "ተረጋግጧል",
  verifying: "በማረጋገጥ ላይ...",
  waitAlert: "በማረጋገጥ ላይ... እባክዎ ይጠብቁ።"
};
globalThis.altchaI18n.set("am", Pl);
const zl = {
  ariaLinkLabel: "Tembelea Altcha.org",
  enterCode: "Weka nambari",
  enterCodeAria: "Weka nambari unayosikia. Bonyeza Space kucheza sauti.",
  error: "Uthibitishaji umeshindwa. Jaribu tena baadaye.",
  expired: "Uthibitishaji umeisha. Jaribu tena.",
  footer: 'Imealindwa na <a href="https://altcha.org/" target="_blank" aria-label="Tembelea Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Pata changamoto ya sauti",
  label: "Mimi sio roboti",
  loading: "Inapakia...",
  reload: "Pakia tena",
  verify: "Thibitisha",
  verificationRequired: "Uthibitishaji unahitajika!",
  verified: "Imethibitishwa",
  verifying: "Inathibitisha...",
  waitAlert: "Inathibitisha... tafadhali subiri."
};
globalThis.altchaI18n.set("sw", zl);
const Nl = {
  ariaLinkLabel: "Ṣe abẹwo si Altcha.org",
  enterCode: "Tẹ koodu sii",
  enterCodeAria: "Tẹ koodu ti o ngbọ sii. Tẹ Space lati ṣe ohun orin.",
  error: "Ìdájọ́kòwò kò ṣẹ́ṣe. Gbiyanju lẹẹkansi ni ọjọ́ iwájú.",
  expired: "Ìdájọ́kòwò ti pari. Gbiyanju lẹẹkansi.",
  footer: 'Ti wa ni ààbò nipasẹ <a href="https://altcha.org/" target="_blank" aria-label="Ṣe abẹwo si Altcha.org">ALTCHA</a>',
  getAudioChallenge: "Gba ìjàdú ohùn",
  label: "Emi kii ṣe ẹrọ",
  loading: "Ó ń gbé sílẹ̀...",
  reload: "Tún gbé wọlé",
  verify: "Ṣàdájọ́",
  verificationRequired: "Ìdájọ́kòwò ni a nílò!",
  verified: "A ti dájọ́",
  verifying: "Ó ń ṣàdájọ́...",
  waitAlert: "Ó ń ṣàdájọ́... ẹ jọ̀ọ́ ẹ duro."
};
globalThis.altchaI18n.set("yo", Nl);
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
const Hl = {
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
globalThis.altchaI18n.set("hi", Hl);
const Ol = {
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
globalThis.altchaI18n.set("id", Ol);
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
  ariaLinkLabel: "Altcha.org сайтына кіру",
  enterCode: "Кодты енгізіңіз",
  enterCodeAria: "Естіген кодыңызды енгізіңіз. Аудионы ойнату үшін Бос орынды басыңыз.",
  error: "Тексеру сәтсіз аяқталды. Кейінірек қайталаңыз.",
  expired: "Тексеру мерзімі аяқталды. Қайталаңыз.",
  footer: '<a href="https://altcha.org/" target="_blank" aria-label="Altcha.org сайтына кіру">ALTCHA</a> қорғайды',
  getAudioChallenge: "Аудио сынақ алу",
  label: "Мен робот емеспін",
  loading: "Жүктелуде...",
  reload: "Қайта жүктеу",
  verify: "Тексеру",
  verificationRequired: "Тексеру талап етіледі!",
  verified: "Тексерілді",
  verifying: "Тексеруде...",
  waitAlert: "Тексерілуде... күте тұрыңыз."
};
globalThis.altchaI18n.set("kk", Bl);
const Ul = {
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
globalThis.altchaI18n.set("mr", Ul);
const Gl = {
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
globalThis.altchaI18n.set("ta", Gl);
const Wl = {
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
globalThis.altchaI18n.set("te", Wl);
const Zl = {
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
globalThis.altchaI18n.set("th", Zl);
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
const Kl = {
  ariaLinkLabel: "Altcha.org saytiga tashrif buyuring",
  enterCode: "Kodni kiriting",
  enterCodeAria: "Eshitgan kodingizni kiriting. Audioni ijro etish uchun Bo'sh joy tugmasini bosing.",
  error: "Tekshiruv muvaffaqiyatsiz tugadi. Keyinroq qayta urinib ko'ring.",
  expired: "Tekshiruv muddati tugadi. Qayta urinib ko'ring.",
  footer: '<a href="https://altcha.org/" target="_blank" aria-label="Altcha.org saytiga tashrif buyuring">ALTCHA</a> tomonidan himoyalangan',
  getAudioChallenge: "Audio sinovni olish",
  label: "Men robot emasman",
  loading: "Yuklanmoqda...",
  reload: "Qayta yuklash",
  verify: "Tekshirish",
  verificationRequired: "Tekshiruv talab qilinadi!",
  verified: "Tekshirildi",
  verifying: "Tekshirilmoqda...",
  waitAlert: "Tekshirilmoqda... iltimos kuting."
};
globalThis.altchaI18n.set("uz", Kl);
const Jl = {
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
globalThis.altchaI18n.set("vi", Jl);
const Xl = {
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
globalThis.altchaI18n.set("zh-cn", Xl);
const Ql = {
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
globalThis.altchaI18n.set("zh-tw", Ql);
const Di = `(function(){"use strict";const d=new TextEncoder;function p(e){return[...new Uint8Array(e)].map(t=>t.toString(16).padStart(2,"0")).join("")}async function b(e,t,r){if(typeof crypto>"u"||!("subtle"in crypto)||!("digest"in crypto.subtle))throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");return p(await crypto.subtle.digest(r.toUpperCase(),d.encode(e+t)))}function w(e,t,r="SHA-256",n=1e6,l=0){const o=new AbortController,a=Date.now();return{promise:(async()=>{for(let c=l;c<=n;c+=1){if(o.signal.aborted)return null;if(await b(t,c,r)===e)return{number:c,took:Date.now()-a}}return null})(),controller:o}}function h(e){const t=atob(e),r=new Uint8Array(t.length);for(let n=0;n<t.length;n++)r[n]=t.charCodeAt(n);return r}function g(e,t=12){const r=new Uint8Array(t);for(let n=0;n<t;n++)r[n]=e%256,e=Math.floor(e/256);return r}async function m(e,t="",r=1e6,n=0){const l="AES-GCM",o=new AbortController,a=Date.now(),s=async()=>{for(let i=n;i<=r;i+=1){if(o.signal.aborted||!c||!u)return null;try{const f=await crypto.subtle.decrypt({name:l,iv:g(i)},c,u);if(f)return{clearText:new TextDecoder().decode(f),took:Date.now()-a}}catch{}}return null};let c=null,u=null;try{u=h(e);const i=await crypto.subtle.digest("SHA-256",d.encode(t));c=await crypto.subtle.importKey("raw",i,l,!1,["decrypt"])}catch{return{promise:Promise.reject(),controller:o}}return{promise:s(),controller:o}}let y;onmessage=async e=>{const{type:t,payload:r,start:n,max:l}=e.data;let o=null;if(t==="abort")y?.abort(),y=void 0;else if(t==="work"){if("obfuscated"in r){const{key:a,obfuscated:s}=r||{};o=await m(s,a,l,n)}else{const{algorithm:a,challenge:s,salt:c}=r||{};o=w(s,c,a,l,n)}y=o.controller,o.promise.then(a=>{self.postMessage(a&&{...a,worker:!0})})}}})();
`, Ma = typeof self < "u" && self.Blob && new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);", Di], { type: "text/javascript;charset=utf-8" });
function es(e) {
  let t;
  try {
    if (t = Ma && (self.URL || self.webkitURL).createObjectURL(Ma), !t) throw "";
    const r = new Worker(t, {
      name: e?.name
    });
    return r.addEventListener("error", () => {
      (self.URL || self.webkitURL).revokeObjectURL(t);
    }), r;
  } catch {
    return new Worker(
      "data:text/javascript;charset=utf-8," + encodeURIComponent(Di),
      {
        name: e?.name
      }
    );
  }
}
const ts = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(ts);
const qi = new TextEncoder();
function rs(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function as(e, t = "SHA-256", r = 1e5) {
  const i = Date.now().toString(16);
  e || (e = Math.round(Math.random() * r));
  const l = await Hi(i, e, t);
  return {
    algorithm: t,
    challenge: l,
    salt: i,
    signature: ""
  };
}
async function Hi(e, t, r) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return rs(
    await crypto.subtle.digest(
      r.toUpperCase(),
      qi.encode(e + t)
    )
  );
}
function is(e, t, r = "SHA-256", i = 1e6, l = 0) {
  const o = new AbortController(), s = Date.now();
  return {
    promise: (async () => {
      for (let f = l; f <= i; f += 1) {
        if (o.signal.aborted)
          return null;
        if (await Hi(t, f, r) === e)
          return {
            number: f,
            took: Date.now() - s
          };
      }
      return null;
    })(),
    controller: o
  };
}
function Ba() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function ns(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let i = 0; i < t.length; i++)
    r[i] = t.charCodeAt(i);
  return r;
}
function os(e, t = 12) {
  const r = new Uint8Array(t);
  for (let i = 0; i < t; i++)
    r[i] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function ls(e, t = "", r = 1e6, i = 0) {
  const l = "AES-GCM", o = new AbortController(), s = Date.now(), u = async () => {
    for (let p = i; p <= r; p += 1) {
      if (o.signal.aborted || !f || !d)
        return null;
      try {
        const g = await crypto.subtle.decrypt(
          {
            name: l,
            iv: os(p)
          },
          f,
          d
        );
        if (g)
          return {
            clearText: new TextDecoder().decode(g),
            took: Date.now() - s
          };
      } catch {
      }
    }
    return null;
  };
  let f = null, d = null;
  try {
    d = ns(e);
    const p = await crypto.subtle.digest(
      "SHA-256",
      qi.encode(t)
    );
    f = await crypto.subtle.importKey(
      "raw",
      p,
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
    promise: u(),
    controller: o
  };
}
var A = /* @__PURE__ */ ((e) => (e.CODE = "code", e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(A || {}), Q = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.LOADING = "loading", e.PLAYING = "playing", e.PAUSED = "paused", e.READY = "ready", e))(Q || {});
const ss = {
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
globalThis.altchaI18n.set("en", ss);
const Ir = (e, t) => {
  let r = /* @__PURE__ */ io(() => Pn(t?.(), 24));
  var i = ds();
  Ce(() => {
    T(i, "width", n(r)), T(i, "height", n(r));
  }), M(e, i);
};
function cs(e, t) {
  e.code === "Space" && (e.preventDefault(), e.stopImmediatePropagation(), t());
}
function us(e, t) {
  e.preventDefault(), t();
}
function fs(e, t, r, i, l, o, s, u) {
  [
    A.UNVERIFIED,
    A.ERROR,
    A.EXPIRED,
    A.CODE
  ].includes(n(t)) ? r() !== !1 && n(i)?.reportValidity() === !1 ? y(l, !1) : o() ? s() : u() : y(l, !0);
}
var ds = /* @__PURE__ */ mr('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="altcha-spinner"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor"></path></svg>'), hs = /* @__PURE__ */ ye('<input type="hidden">'), gs = /* @__PURE__ */ ye('<div><a target="_blank" class="altcha-logo" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor"></path></svg></a></div>'), vs = /* @__PURE__ */ mr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg>'), bs = /* @__PURE__ */ mr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z"></path></svg>'), ps = /* @__PURE__ */ mr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"></path></svg>'), ms = /* @__PURE__ */ ye('<button type="button" class="altcha-code-challenge-audio"><!></button>'), ys = /* @__PURE__ */ ye("<audio hidden autoplay><source></audio>"), As = /* @__PURE__ */ ye('<div class="altcha-code-challenge" role="dialog"><div class="altcha-code-challenge-arrow"></div> <form data-code-challenge-form="1"><img class="altcha-code-challenge-image" alt=""> <input type="text" autocomplete="off" name="code" class="altcha-code-challenge-input" required> <div class="altcha-code-challenge-buttons"><div class="altcha-code-challenge-buttons-left"><!> <button type="button" class="altcha-code-challenge-reload"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z"></path></svg></button></div> <button type="submit" class="altcha-code-challenge-verify"><!> </button></div> <!></form></div>'), ks = /* @__PURE__ */ ye("<div><!></div>"), _s = /* @__PURE__ */ ye("<div><!></div>"), ws = /* @__PURE__ */ ye('<div class="altcha-error"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg> <!></div>'), Cs = /* @__PURE__ */ ye('<div class="altcha-footer"><div><!></div></div>'), Ls = /* @__PURE__ */ ye('<div class="altcha-anchor-arrow"></div>'), xs = /* @__PURE__ */ ye('<!> <div class="altcha"><div class="altcha-main"><div><!> <input type="checkbox"></div> <label class="altcha-label"><!></label> <!> <!> <!></div> <!> <!> <!></div>', 1);
function Es(e, t) {
  ii(t, !0);
  const [r, i] = Oo(), l = () => Ho(Fi, "$altchaI18nStore", r);
  let o = w(t, "auto", 7, void 0), s = w(t, "blockspam", 7, void 0), u = w(t, "challengeurl", 7, void 0), f = w(t, "challengejson", 7, void 0), d = w(t, "credentials", 7, void 0), p = w(t, "customfetch", 7, void 0), g = w(t, "debug", 7, !1), m = w(t, "delay", 7, 0), k = w(t, "disableautofocus", 7, !1), N = w(t, "refetchonexpire", 7, !0), D = w(t, "disablerefetchonexpire", 23, () => !N()), H = w(t, "expire", 7, void 0), E = w(t, "floating", 7, void 0), ee = w(t, "floatinganchor", 7, void 0), Te = w(t, "floatingoffset", 7, void 0), X = w(t, "floatingpersist", 7, !1), O = w(t, "hidefooter", 7, !1), se = w(t, "hidelogo", 7, !1), Be = w(t, "id", 7, void 0), Bt = w(t, "language", 7, void 0), Ue = w(t, "name", 7, "altcha"), Ge = w(t, "maxnumber", 7, 1e6), wt = w(t, "mockerror", 7, !1), $e = w(t, "obfuscated", 7, void 0), ve = w(t, "overlay", 7, void 0), Ct = w(t, "overlaycontent", 7, void 0), Ut = w(t, "plugins", 7, void 0), We = w(t, "sentinel", 7, void 0), Ae = w(t, "spamfilter", 7, !1), st = w(t, "strings", 7, void 0), de = w(t, "test", 7, !1), te = w(t, "verifyurl", 7, void 0), ct = w(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), Lt = w(t, "workerurl", 7, void 0);
  const { altchaI18n: Oi } = globalThis, Fi = Oi.store, Yr = ["SHA-256", "SHA-384", "SHA-512"], Mi = "https://altcha.org/", Se = (a, c) => {
    t.$$host.dispatchEvent(new CustomEvent(a, { detail: c }));
  }, Kr = document.documentElement.lang?.split("-")?.[0], yr = /* @__PURE__ */ $t(() => u() && new URL(u(), location.origin).host.endsWith(".altcha.org") && !!u()?.includes("apiKey=ckey_")), Gt = /* @__PURE__ */ $t(() => f() ? ua(f()) : void 0), Bi = /* @__PURE__ */ $t(() => st() ? ua(st()) : {}), S = /* @__PURE__ */ $t(() => ({
    ...Qr(l()),
    ...n(Bi)
  })), Jr = /* @__PURE__ */ $t(() => `${Be() || Ue()}_checkbox_${Math.round(Math.random() * 1e8)}`);
  let Ze = /* @__PURE__ */ $(null), xt = /* @__PURE__ */ $(!1), U = /* @__PURE__ */ $(null), L = /* @__PURE__ */ $(De(A.UNVERIFIED)), q = /* @__PURE__ */ $(void 0), Et = /* @__PURE__ */ $(null), Pe = /* @__PURE__ */ $(null), ce = /* @__PURE__ */ $(null), Ar = /* @__PURE__ */ $(null), ut = /* @__PURE__ */ $(null), j = /* @__PURE__ */ $(null), Tt = /* @__PURE__ */ $(null), Ye = /* @__PURE__ */ $(null), ke = null, G = /* @__PURE__ */ $(null), Ke = /* @__PURE__ */ $(!1), ze = [], kr = /* @__PURE__ */ $(!1), _e = /* @__PURE__ */ $(null);
  Rr(() => {
    an(n(Ye));
  }), Rr(() => {
    nn(n(L));
  }), Wo(() => {
    Ui(), y(Tt, null), n(j) && (n(j).removeEventListener("submit", na), n(j).removeEventListener("reset", oa), n(j).removeEventListener("focusin", ia), y(j, null)), ke && (clearTimeout(ke), ke = null), document.removeEventListener("click", ra), document.removeEventListener("scroll", aa), window.removeEventListener("resize", ca);
  }), Pi(() => {
    x("mounted", "2.2.4"), x("workers", ct()), Yi(), x("plugins", ze.length ? ze.map((a) => a.constructor.pluginName).join(", ") : "none"), de() && x("using test mode"), H() && wr(H()), o() !== void 0 && x("auto", o()), E() !== void 0 && ga(E()), y(j, n(q)?.closest("form"), !0), n(j) && (n(j).addEventListener("submit", na, { capture: !0 }), n(j).addEventListener("reset", oa), (o() === "onfocus" || X() === "focus") && n(j).addEventListener("focusin", ia)), ve() && va(!0), o() === "onload" && ($e() ? It() : Ie()), n(yr) && (O() || se()) && x("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      Se("load");
    });
  });
  function Wt(a, c) {
    return btoa(JSON.stringify({
      algorithm: a.algorithm,
      challenge: a.challenge,
      number: c.number,
      salt: a.salt,
      signature: a.signature,
      test: de() ? !0 : void 0,
      took: c.took
    }));
  }
  function Ui() {
    for (const a of ze)
      a.destroy();
  }
  function Xr() {
    u() && !D() && n(L) === A.VERIFIED ? Ie() : Je(A.EXPIRED, n(S).expired);
  }
  async function Gi() {
    if (wt())
      throw x("mocking error"), new Error("Mocked error.");
    if (n(Gt))
      return x("using provided json data"), fa(n(Gt).salt), n(Gt);
    if (de())
      return x("generating test challenge", { test: de() }), as(typeof de() != "boolean" ? +de() : void 0);
    {
      if (!u() && n(j)) {
        const v = n(j).getAttribute("action");
        v?.includes("/form/") && u(v + "/altcha");
      }
      if (!u())
        throw new Error("Attribute challengeurl not set.");
      x("fetching challenge from", u());
      const a = {
        credentials: typeof d() == "boolean" ? "include" : d(),
        headers: Ae() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      }, c = await _r()(u(), a);
      if (!c || !(c instanceof Response))
        throw new Error("Custom fetch function did not return a response.");
      if (c.status !== 200)
        throw new Error(`Server responded with ${c.status}.`);
      const h = c.headers.get("X-Altcha-Config"), b = await c.json();
      if (fa(b.salt), h)
        try {
          const v = JSON.parse(h);
          v && typeof v == "object" && (v.verifyurl && !v.verifyurl.startsWith("fn:") && (v.verifyurl = ta(v.verifyurl)), ma(v));
        } catch (v) {
          x("unable to configure from X-Altcha-Config", v);
        }
      return b;
    }
  }
  function Wi(a) {
    const c = n(j)?.querySelector(typeof a == "string" ? `input[name="${a}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return c?.value?.slice(c.value.indexOf("@")) || void 0;
  }
  function _r() {
    let a = fetch;
    if (p())
      if (x("using customfetch"), typeof p() == "string") {
        if (a = globalThis[p()] || null, !a)
          throw new Error(`Custom fetch function not found: ${p()}`);
      } else
        a = p();
    return a;
  }
  function Qr(a, c = [
    Bt() || "",
    document.documentElement.lang || "",
    ...navigator.languages
  ]) {
    const h = Object.keys(a).map((v) => v.toLowerCase()), b = c.reduce(
      (v, C) => (C = C.toLowerCase(), v || (a[C] ? C : null) || h.find((R) => C.split("-")[0] === R.split("-")[0]) || null),
      null
    );
    return a[b || "en"];
  }
  function Zi() {
    return Ae() === "ipAddress" ? {
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
    } : typeof Ae() == "object" ? Ae() : {
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
    return [
      ...n(j)?.querySelectorAll(a?.length ? a.map((h) => `input[name="${h}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])') || []
    ].reduce(
      (h, b) => {
        const v = b.name, C = b.value;
        return v && C && (h[v] = /\n/.test(C) ? C.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : C), h;
      },
      {}
    );
  }
  function ta(a, c) {
    const h = new URL(u() || location.origin), b = new URL(a, h);
    if (b.search || (b.search = h.search), c)
      for (const v in c)
        c[v] !== void 0 && c[v] !== null && b.searchParams.set(v, c[v]);
    return b.toString();
  }
  function Yi() {
    const a = Ut() !== void 0 ? Ut().split(",") : void 0;
    for (const c of globalThis.altchaPlugins)
      (!a || a.includes(c.pluginName)) && ze.push(new c({
        el: n(q),
        clarify: It,
        dispatch: Se,
        getConfiguration: ya,
        getFloatingAnchor: Aa,
        getState: ka,
        log: x,
        reset: Je,
        solve: pa,
        setState: we,
        setFloatingAnchor: _a,
        verify: Ie
      }));
  }
  function x(...a) {
    (g() || a.some((c) => c instanceof Error)) && console[a[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${Ue()}]`, ...a);
  }
  function Ki() {
    y(G, Q.PAUSED, !0);
  }
  function Ji(a) {
    y(G, Q.ERROR, !0);
  }
  function Xi() {
    y(G, Q.READY, !0);
  }
  function Qi() {
    y(G, Q.LOADING, !0);
  }
  function en() {
    y(G, Q.PLAYING, !0);
  }
  function tn() {
    y(G, Q.PAUSED, !0);
  }
  function rn(a) {
    if (a.preventDefault(), a.stopPropagation(), n(U)) {
      const c = new FormData(a.target), h = String(c.get("code"));
      if (te()?.startsWith("fn:")) {
        const b = te().replace(/^fn:/, "");
        if (x(`calling ${b} function instead of verifyurl`), !(b in globalThis))
          throw new Error(`Global function "${b}" is undefined.`);
        return globalThis[b]({
          challenge: n(U).challenge,
          code: h,
          solution: n(U).solution
        });
      }
      y(Ke, !0), da(Wt(n(U).challenge, n(U).solution), h).then(({ reason: b, verified: v }) => {
        v ? (y(U, null), we(A.VERIFIED), x("verified"), Tr().then(() => {
          n(Ar)?.focus(), Se("verified", { payload: n(_e) }), o() === "onsubmit" ? ha(n(Tt)) : ve() && Vt();
        })) : (Je(), y(Ye, b || "Verification failed", !0));
      }).catch((b) => {
        y(U, null), we(A.ERROR, b), x("sentinel verification failed:", b);
      }).finally(() => {
        y(Ke, !1);
      });
    }
  }
  function ra(a) {
    const c = a.target;
    E() && c && !n(q).contains(c) && (n(L) === A.VERIFIED && X() === !1 || n(L) === A.VERIFIED && X() === "focus" && !n(j)?.matches(":focus-within") || o() === "off" && n(L) === A.UNVERIFIED) && Vt();
  }
  function aa() {
    E() && n(L) !== A.UNVERIFIED && jt();
  }
  function an(a) {
    for (const c of ze)
      typeof c.onErrorChange == "function" && c.onErrorChange(n(Ye));
  }
  function ia(a) {
    n(L) === A.UNVERIFIED ? Ie() : E() && X() === "focus" && n(L) === A.VERIFIED && Zt();
  }
  function na(a) {
    a.target?.hasAttribute("data-code-challenge-form") || (y(Tt, a.submitter, !0), n(j) && o() === "onsubmit" ? (n(Tt)?.blur(), n(L) === A.UNVERIFIED ? (a.preventDefault(), a.stopPropagation(), Ie().then(() => {
      ha(n(Tt));
    })) : n(L) !== A.VERIFIED && (a.preventDefault(), a.stopPropagation(), n(L) === A.VERIFYING && la())) : n(j) && E() && o() === "off" && n(L) === A.UNVERIFIED && (a.preventDefault(), a.stopPropagation(), Zt()));
  }
  function oa() {
    Je();
  }
  function la() {
    n(L) === A.VERIFYING && n(S).waitAlert && alert(n(S).waitAlert);
  }
  function sa() {
    n(Pe) ? n(Pe).paused ? (n(Pe).currentTime = 0, n(Pe).play()) : n(Pe).pause() : (y(kr, !0), requestAnimationFrame(() => {
      n(Pe)?.play();
    }));
  }
  function nn(a) {
    for (const c of ze)
      typeof c.onStateChange == "function" && c.onStateChange(n(L));
    E() && n(L) !== A.UNVERIFIED && requestAnimationFrame(() => {
      jt();
    }), y(xt, n(L) === A.VERIFIED), ve() && n(ce) && (n(L) !== A.UNVERIFIED ? Zt() : Vt());
  }
  function ca() {
    E() && jt();
  }
  function ua(a) {
    return JSON.parse(a);
  }
  function fa(a) {
    const c = new URLSearchParams(a.split("?")?.[1]), h = c.get("expires") || c.get("expire");
    if (h) {
      const b = new Date(+h * 1e3), v = isNaN(b.getTime()) ? 0 : b.getTime() - Date.now();
      v > 0 && wr(v);
    } else ke && (clearTimeout(ke), ke = null);
  }
  async function on(a) {
    if (!te())
      throw new Error("Attribute verifyurl not set.");
    x("requesting server verification from", te());
    const c = { payload: a };
    if (Ae() !== !1) {
      const {
        blockedCountries: v,
        classifier: C,
        disableRules: R,
        email: B,
        expectedLanguages: F,
        expectedCountries: ie,
        fields: ne,
        ipAddress: Qe,
        text: dt,
        timeZone: et
      } = Zi();
      c.blockedCountries = v, c.classifier = C, c.disableRules = R, c.email = B === !1 ? void 0 : Wi(B), c.expectedCountries = ie, c.expectedLanguages = F || (Kr ? [Kr] : void 0), c.fields = ne === !1 ? void 0 : ea(ne), c.ipAddress = Qe === !1 ? void 0 : Qe || "auto", c.text = dt, c.timeZone = et === !1 ? void 0 : et || Ba();
    }
    const h = await _r()(te(), {
      body: JSON.stringify(c),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (!h || !(h instanceof Response))
      throw new Error("Custom fetch function did not return a response.");
    if (h.status !== 200)
      throw new Error(`Server responded with ${h.status}.`);
    const b = await h.json();
    if (b?.payload && y(_e, b.payload, !0), Se("serververification", b), s() && b.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  async function da(a, c) {
    if (!te())
      throw new Error("Attribute verifyurl not set.");
    x("requesting sentinel verification from", te());
    const h = { code: c, payload: a };
    We() && (h.fields = We().fields ? ea() : void 0, h.timeZone = We().timeZone ? Ba() : void 0);
    const b = await _r()(te(), {
      body: JSON.stringify(h),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (!b || !(b instanceof Response))
      throw new Error("Fetch function did not return a response.");
    if (b.status !== 200)
      throw new Error(`Server responded with ${b.status}.`);
    const v = await b.json();
    return v?.payload && y(_e, v.payload, !0), Se("sentinelverification", v), v;
  }
  function ha(a) {
    n(j) && "requestSubmit" in n(j) ? n(j).requestSubmit(a) : n(j)?.reportValidity() && (a ? a.click() : n(j).submit());
  }
  function wr(a) {
    x("expire", a), ke && (clearTimeout(ke), ke = null), a < 1 ? Xr() : ke = setTimeout(Xr, a);
  }
  function ga(a) {
    x("floating", a), E() !== a && (n(q).style.left = "", n(q).style.top = ""), E(a === !0 || a === "" ? "auto" : a === !1 || a === "false" ? void 0 : E()), E() ? (o() || o("onsubmit"), document.addEventListener("scroll", aa), document.addEventListener("click", ra), window.addEventListener("resize", ca)) : o() === "onsubmit" && o(void 0);
  }
  function va(a) {
    if (x("overlay", a), ve(a), a) {
      if (o() || o("onsubmit"), n(ce) && n(q).parentElement && n(ce).replaceWith(n(q).parentElement), n(q)?.parentElement?.parentElement) {
        y(ce, document.createElement("div"), !0), n(q).parentElement.parentElement.appendChild(n(ce));
        const c = document.createElement("div"), h = document.createElement("button");
        h.type = "button", h.innerHTML = "&times;", h.addEventListener("click", (b) => {
          b.preventDefault(), Je();
        }), n(ce).classList.add("altcha-overlay-backdrop"), h.classList.add("altcha-overlay-close-button"), c.classList.add("altcha-overlay"), n(ce).append(c), c.append(h), Ct() && c.append(...document.querySelectorAll(Ct())), c.append(n(q).parentElement);
      }
    } else n(ce) && n(q).parentElement && (n(ce).replaceWith(n(q).parentElement), n(q).style.display = "block");
  }
  function ba(a) {
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
  async function pa(a) {
    let c = null, h = null;
    if ("Worker" in window) {
      try {
        c = ln(a, a.maxNumber || a.maxnumber || Ge()), y(Ze, c.controller, !0), h = await c.promise;
      } catch (b) {
        x(b);
      } finally {
        y(Ze, null);
      }
      if (h === null || h?.number !== void 0 || "obfuscated" in a)
        return { data: a, solution: h };
    }
    if ("obfuscated" in a) {
      const b = await ls(a.obfuscated, a.key, a.maxNumber || a.maxnumber);
      return { data: a, solution: await b.promise };
    }
    c = is(a.challenge, a.salt, a.algorithm, a.maxNumber || a.maxnumber || Ge()), y(Ze, c.controller, !0);
    try {
      h = await c.promise;
    } catch (b) {
      x(b);
    } finally {
      y(Ze, null);
    }
    return { data: a, solution: h };
  }
  function ln(a, c = typeof de() == "number" ? de() : a.maxNumber || a.maxnumber || Ge(), h = Math.ceil(ct())) {
    const b = new AbortController(), v = [];
    h = Math.min(16, c, Math.max(1, h));
    for (let B = 0; B < h; B++)
      v.push(altchaCreateWorker(Lt()));
    const C = Math.ceil(c / h);
    return { promise: (async () => {
      const B = await Promise.all(v.map((F, ie) => {
        const ne = ie * C;
        return b.signal.addEventListener("abort", () => {
          F.postMessage({ type: "abort" });
        }), new Promise((Qe) => {
          F.addEventListener("message", (dt) => {
            if (dt.data)
              for (const et of v)
                et !== F && et.postMessage({ type: "abort" });
            Qe(dt.data);
          }), F.postMessage({
            payload: a,
            max: ne + C,
            start: ne,
            type: "work"
          });
        });
      }));
      for (const F of v)
        F.terminate();
      return B.find((F) => !!F) || null;
    })(), controller: b };
  }
  async function It() {
    if (!$e()) {
      we(A.ERROR);
      return;
    }
    const a = ze.find((c) => c.constructor.pluginName === "obfuscation");
    if (!a || !("clarify" in a)) {
      we(A.ERROR), x("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in a && typeof a.clarify == "function")
      return a.clarify();
  }
  function ma(a) {
    a.obfuscated !== void 0 && $e(a.obfuscated), a.auto !== void 0 && (o(a.auto), o() === "onload" && ($e() ? It() : Ie())), a.blockspam !== void 0 && s(!!a.blockspam), a.customfetch !== void 0 && p(a.customfetch), a.floatinganchor !== void 0 && ee(a.floatinganchor), a.delay !== void 0 && m(a.delay), a.floatingoffset !== void 0 && Te(a.floatingoffset), a.floating !== void 0 && ga(a.floating), a.expire !== void 0 && (wr(a.expire), H(a.expire)), a.challenge && (f(typeof a.challenge == "string" ? a.challenge : JSON.stringify(a.challenge)), ba(n(Gt))), a.challengeurl !== void 0 && u(a.challengeurl), a.debug !== void 0 && g(!!a.debug), a.hidefooter !== void 0 && O(!!a.hidefooter), a.hidelogo !== void 0 && se(!!a.hidelogo), a.language !== void 0 && st(Qr(l(), [a.language])), a.maxnumber !== void 0 && Ge(+a.maxnumber), a.mockerror !== void 0 && wt(!!a.mockerror), a.name !== void 0 && Ue(a.name), a.overlaycontent !== void 0 && Ct(a.overlaycontent), a.overlay !== void 0 && va(a.overlay), a.refetchonexpire !== void 0 && D(!a.refetchonexpire), a.disablerefetchonexpire !== void 0 && D(!a.disablerefetchonexpire), a.sentinel !== void 0 && typeof a.sentinel == "object" && We(a.sentinel), a.spamfilter !== void 0 && Ae(typeof a.spamfilter == "object" ? a.spamfilter : !!a.spamfilter), a.strings && st(typeof a.strings == "string" ? a.strings : JSON.stringify(a.strings)), a.test !== void 0 && de(typeof a.test == "number" ? a.test : !!a.test), a.verifyurl !== void 0 && te(a.verifyurl), a.workers !== void 0 && ct(+a.workers), a.workerurl !== void 0 && Lt(a.workerurl);
  }
  function ya() {
    return {
      auto: o(),
      blockspam: s(),
      challengeurl: u(),
      debug: g(),
      delay: m(),
      disableautofocus: k(),
      disablerefetchonexpire: D(),
      expire: H(),
      floating: E(),
      floatinganchor: ee(),
      floatingoffset: Te(),
      hidefooter: O(),
      hidelogo: se(),
      name: Ue(),
      maxnumber: Ge(),
      mockerror: wt(),
      obfuscated: $e(),
      overlay: ve(),
      refetchonexpire: !D(),
      spamfilter: Ae(),
      strings: n(S),
      test: de(),
      verifyurl: te(),
      workers: ct(),
      workerurl: Lt()
    };
  }
  function Aa() {
    return n(ut);
  }
  function sn(a) {
    return ze.find((c) => c.constructor.pluginName === a);
  }
  function ka() {
    return n(L);
  }
  function Vt() {
    n(q).style.display = "none", ve() && n(ce) && (n(ce).style.display = "none");
  }
  function jt(a = 20) {
    if (n(q))
      if (n(ut) || y(ut, (ee() ? document.querySelector(ee()) : n(j)?.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || n(j), !0), n(ut)) {
        const c = parseInt(Te(), 10) || 12, h = n(ut).getBoundingClientRect(), b = n(q).getBoundingClientRect(), v = document.documentElement.clientHeight, C = document.documentElement.clientWidth, R = E() === "auto" ? h.bottom + b.height + c + a > v : E() === "top", B = Math.max(a, Math.min(C - a - b.width, h.left + h.width / 2 - b.width / 2));
        if (R ? n(q).style.top = `${h.top - (b.height + c)}px` : n(q).style.top = `${h.bottom + c}px`, n(q).style.left = `${B}px`, n(q).setAttribute("data-floating", R ? "top" : "bottom"), n(Et)) {
          const F = n(Et).getBoundingClientRect();
          n(Et).style.left = h.left - B + h.width / 2 - F.width / 2 + "px";
        }
      } else
        x("unable to find floating anchor element");
  }
  function Je(a = A.UNVERIFIED, c = null) {
    n(Ze) && (n(Ze).abort(), y(Ze, null)), y(xt, !1), y(_e, null), y(U, null), y(kr, !1), y(G, null), we(a, c);
  }
  function _a(a) {
    y(ut, a, !0);
  }
  function we(a, c = null) {
    y(L, a, !0), y(Ye, c, !0), Se("statechange", {
      payload: n(_e),
      state: n(L)
    });
  }
  function Zt() {
    n(q).style.display = "block", E() && jt(), ve() && n(ce) && (n(ce).style.display = "flex");
  }
  async function Ie() {
    return Je(A.VERIFYING), await new Promise((a) => setTimeout(a, m() || 0)), Gi().then((a) => (ba(a), x("challenge", a), pa(a))).then(({ data: a, solution: c }) => {
      if (x("solution", c), !c || a && "challenge" in a && !("clearText" in c)) {
        if (c?.number !== void 0 && "challenge" in a)
          if (te() && "codeChallenge" in a)
            ["INPUT", "BUTTON", "SELECT", "TEXTAREA"].includes(document.activeElement?.tagName || "") && k() === !1 && document.activeElement.blur(), y(U, { challenge: a, solution: c }, !0);
          else {
            if (te() && We() !== void 0)
              return da(Wt(a, c));
            if (te())
              return on(Wt(a, c));
            y(_e, Wt(a, c), !0), x("payload", n(_e));
          }
        else if (n(L) !== A.EXPIRED)
          throw x("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
      }
    }).then(() => {
      n(U) ? (we(A.CODE), Tr().then(() => {
        Se("code", { codeChallenge: n(U) });
      })) : n(_e) && (we(A.VERIFIED), x("verified"), Tr().then(() => {
        Se("verified", { payload: n(_e) }), ve() && Vt();
      }));
    }).catch((a) => {
      x(a), we(A.ERROR, a.message);
    });
  }
  var wa = xs(), Ca = St(wa);
  Ro(Ca, t, "default", {});
  var ft = K(Ca, 2), Cr = Y(ft), Yt = Y(Cr);
  let La;
  var xa = Y(Yt);
  {
    var cn = (a) => {
      Ir(a);
    };
    J(xa, (a) => {
      n(L) === A.VERIFYING && a(cn);
    });
  }
  var Xe = K(xa, 2);
  qa(Xe), Xe.__change = [
    fs,
    L,
    Ae,
    j,
    xt,
    $e,
    It,
    Ie
  ], Qt(Xe, (a) => y(Ar, a), () => n(Ar)), Z(Yt);
  var Kt = K(Yt, 2), un = Y(Kt);
  {
    var fn = (a) => {
      var c = Xt(), h = St(c);
      tt(h, () => n(S).verified), M(a, c);
    }, dn = (a, c) => {
      {
        var h = (v) => {
          var C = Xt(), R = St(C);
          tt(R, () => n(S).verifying), M(v, C);
        }, b = (v, C) => {
          {
            var R = (F) => {
              var ie = Xt(), ne = St(ie);
              tt(ne, () => n(S).verificationRequired), M(F, ie);
            }, B = (F) => {
              var ie = Xt(), ne = St(ie);
              tt(ne, () => n(S).label), M(F, ie);
            };
            J(
              v,
              (F) => {
                n(L) === A.CODE ? F(R) : F(B, !1);
              },
              C
            );
          }
        };
        J(
          a,
          (v) => {
            n(L) === A.VERIFYING ? v(h) : v(b, !1);
          },
          c
        );
      }
    };
    J(un, (a) => {
      n(L) === A.VERIFIED ? a(fn) : a(dn, !1);
    });
  }
  Z(Kt);
  var Ea = K(Kt, 2);
  {
    var hn = (a) => {
      var c = hs();
      qa(c), Ce(() => {
        T(c, "name", Ue()), No(c, n(_e));
      }), M(a, c);
    };
    J(Ea, (a) => {
      n(L) === A.VERIFIED && a(hn);
    });
  }
  var Ta = K(Ea, 2);
  {
    var gn = (a) => {
      var c = gs(), h = Y(c);
      T(h, "href", Mi), Z(c), Ce(() => T(h, "aria-label", n(S).ariaLinkLabel)), M(a, c);
    };
    J(Ta, (a) => {
      (se() !== !0 || n(yr)) && a(gn);
    });
  }
  var vn = K(Ta, 2);
  {
    var bn = (a) => {
      var c = As(), h = K(Y(c), 2), b = Y(h), v = K(b, 2);
      Lo(v, !k()), v.__keydown = [
        cs,
        sa
      ];
      var C = K(v, 2), R = Y(C), B = Y(R);
      {
        var F = (be) => {
          var W = ms();
          W.__click = sa;
          var Jt = Y(W);
          {
            var Rt = (ht) => {
              Ir(ht, () => 20);
            }, Cn = (ht, Ln) => {
              {
                var xn = (gt) => {
                  var Lr = vs();
                  M(gt, Lr);
                }, En = (gt, Lr) => {
                  {
                    var Tn = (vt) => {
                      var xr = bs();
                      M(vt, xr);
                    }, In = (vt) => {
                      var xr = ps();
                      M(vt, xr);
                    };
                    J(
                      gt,
                      (vt) => {
                        n(G) === Q.PLAYING ? vt(Tn) : vt(In, !1);
                      },
                      Lr
                    );
                  }
                };
                J(
                  ht,
                  (gt) => {
                    n(G) === Q.ERROR ? gt(xn) : gt(En, !1);
                  },
                  Ln
                );
              }
            };
            J(Jt, (ht) => {
              n(G) === Q.LOADING ? ht(Rt) : ht(Cn, !1);
            });
          }
          Z(W), Ce(() => {
            T(W, "title", n(S).getAudioChallenge), W.disabled = n(G) === Q.LOADING || n(G) === Q.ERROR || n(Ke), T(W, "aria-label", n(G) === Q.LOADING ? n(S).loading : n(S).getAudioChallenge);
          }), M(be, W);
        };
        J(B, (be) => {
          n(U).challenge.codeChallenge.audio && be(F);
        });
      }
      var ie = K(B, 2);
      ie.__click = [us, Ie], Z(R);
      var ne = K(R, 2), Qe = Y(ne);
      {
        var dt = (be) => {
          Ir(be, () => 16);
        };
        J(Qe, (be) => {
          n(Ke) && be(dt);
        });
      }
      var et = K(Qe);
      Z(ne), Z(C);
      var _n = K(C, 2);
      {
        var wn = (be) => {
          var W = ys(), Jt = Y(W);
          Z(W), Qt(W, (Rt) => y(Pe, Rt), () => n(Pe)), Ce((Rt) => T(Jt, "src", Rt), [
            () => ta(n(U).challenge.codeChallenge.audio, { language: Bt() })
          ]), Ne("loadstart", W, Qi), Ne("canplay", W, Xi), Ne("pause", W, tn), Ne("playing", W, en), Ne("ended", W, Ki), Ne("error", Jt, Ji), M(be, W);
        };
        J(_n, (be) => {
          n(U).challenge.codeChallenge.audio && n(kr) && be(wn);
        });
      }
      Z(h), Z(c), Ce(() => {
        T(c, "aria-label", n(S).verificationRequired), T(b, "src", n(U).challenge.codeChallenge.image), T(v, "minlength", n(U).challenge.codeChallenge.length || 1), T(v, "maxlength", n(U).challenge.codeChallenge.length), T(v, "placeholder", n(S).enterCode), T(v, "aria-label", n(G) === Q.LOADING ? n(S).loading : n(G) === Q.PLAYING ? "" : n(S).enterCodeAria), T(v, "aria-live", n(G) ? "assertive" : "polite"), T(v, "aria-busy", n(G) === Q.LOADING), v.disabled = n(Ke), T(ie, "aria-label", n(S).reload), T(ie, "title", n(S).reload), ie.disabled = n(Ke), ne.disabled = n(Ke), T(ne, "aria-label", n(S).verify), Io(et, ` ${n(S).verify ?? ""}`);
      }), Ne("submit", h, rn, !0), M(a, c);
    };
    J(vn, (a) => {
      n(U)?.challenge.codeChallenge && a(bn);
    });
  }
  Z(Cr);
  var Ia = K(Cr, 2);
  {
    var pn = (a) => {
      var c = ws(), h = K(Y(c), 2);
      {
        var b = (C) => {
          var R = ks(), B = Y(R);
          tt(B, () => n(S).expired), Z(R), Ce(() => T(R, "title", n(Ye))), M(C, R);
        }, v = (C) => {
          var R = _s(), B = Y(R);
          tt(B, () => n(S).error), Z(R), Ce(() => T(R, "title", n(Ye))), M(C, R);
        };
        J(h, (C) => {
          n(L) === A.EXPIRED ? C(b) : C(v, !1);
        });
      }
      Z(c), M(a, c);
    };
    J(Ia, (a) => {
      (n(Ye) || n(L) === A.EXPIRED) && a(pn);
    });
  }
  var Va = K(Ia, 2);
  {
    var mn = (a) => {
      var c = Cs(), h = Y(c), b = Y(h);
      tt(b, () => n(S).footer), Z(h), Z(c), M(a, c);
    };
    J(Va, (a) => {
      n(S).footer && (O() !== !0 || n(yr)) && a(mn);
    });
  }
  var yn = K(Va, 2);
  {
    var An = (a) => {
      var c = Ls();
      Qt(c, (h) => y(Et, h), () => n(Et)), M(a, c);
    };
    J(yn, (a) => {
      E() && a(An);
    });
  }
  Z(ft), Qt(ft, (a) => y(q, a), () => n(q)), Ce(
    (a) => {
      T(ft, "data-state", n(L)), T(ft, "data-floating", E()), T(ft, "data-overlay", ve()), La = So(Yt, 1, "altcha-checkbox", null, La, a), T(Xe, "id", n(Jr)), Xe.required = o() !== "onsubmit" && (!E() || o() !== "off"), T(Kt, "for", n(Jr));
    },
    [
      () => ({
        "altcha-checkbox-verifying": n(L) === A.VERIFYING
      })
    ]
  ), Ne("invalid", Xe, la), qo(Xe, () => n(xt), (a) => y(xt, a)), M(e, wa);
  var kn = ni({
    clarify: It,
    configure: ma,
    getConfiguration: ya,
    getFloatingAnchor: Aa,
    getPlugin: sn,
    getState: ka,
    hide: Vt,
    repositionFloating: jt,
    reset: Je,
    setFloatingAnchor: _a,
    setState: we,
    show: Zt,
    verify: Ie,
    get auto() {
      return o();
    },
    set auto(a = void 0) {
      o(a), _();
    },
    get blockspam() {
      return s();
    },
    set blockspam(a = void 0) {
      s(a), _();
    },
    get challengeurl() {
      return u();
    },
    set challengeurl(a = void 0) {
      u(a), _();
    },
    get challengejson() {
      return f();
    },
    set challengejson(a = void 0) {
      f(a), _();
    },
    get credentials() {
      return d();
    },
    set credentials(a = void 0) {
      d(a), _();
    },
    get customfetch() {
      return p();
    },
    set customfetch(a = void 0) {
      p(a), _();
    },
    get debug() {
      return g();
    },
    set debug(a = !1) {
      g(a), _();
    },
    get delay() {
      return m();
    },
    set delay(a = 0) {
      m(a), _();
    },
    get disableautofocus() {
      return k();
    },
    set disableautofocus(a = !1) {
      k(a), _();
    },
    get refetchonexpire() {
      return N();
    },
    set refetchonexpire(a = !0) {
      N(a), _();
    },
    get disablerefetchonexpire() {
      return D();
    },
    set disablerefetchonexpire(a = !N) {
      D(a), _();
    },
    get expire() {
      return H();
    },
    set expire(a = void 0) {
      H(a), _();
    },
    get floating() {
      return E();
    },
    set floating(a = void 0) {
      E(a), _();
    },
    get floatinganchor() {
      return ee();
    },
    set floatinganchor(a = void 0) {
      ee(a), _();
    },
    get floatingoffset() {
      return Te();
    },
    set floatingoffset(a = void 0) {
      Te(a), _();
    },
    get floatingpersist() {
      return X();
    },
    set floatingpersist(a = !1) {
      X(a), _();
    },
    get hidefooter() {
      return O();
    },
    set hidefooter(a = !1) {
      O(a), _();
    },
    get hidelogo() {
      return se();
    },
    set hidelogo(a = !1) {
      se(a), _();
    },
    get id() {
      return Be();
    },
    set id(a = void 0) {
      Be(a), _();
    },
    get language() {
      return Bt();
    },
    set language(a = void 0) {
      Bt(a), _();
    },
    get name() {
      return Ue();
    },
    set name(a = "altcha") {
      Ue(a), _();
    },
    get maxnumber() {
      return Ge();
    },
    set maxnumber(a = 1e6) {
      Ge(a), _();
    },
    get mockerror() {
      return wt();
    },
    set mockerror(a = !1) {
      wt(a), _();
    },
    get obfuscated() {
      return $e();
    },
    set obfuscated(a = void 0) {
      $e(a), _();
    },
    get overlay() {
      return ve();
    },
    set overlay(a = void 0) {
      ve(a), _();
    },
    get overlaycontent() {
      return Ct();
    },
    set overlaycontent(a = void 0) {
      Ct(a), _();
    },
    get plugins() {
      return Ut();
    },
    set plugins(a = void 0) {
      Ut(a), _();
    },
    get sentinel() {
      return We();
    },
    set sentinel(a = void 0) {
      We(a), _();
    },
    get spamfilter() {
      return Ae();
    },
    set spamfilter(a = !1) {
      Ae(a), _();
    },
    get strings() {
      return st();
    },
    set strings(a = void 0) {
      st(a), _();
    },
    get test() {
      return de();
    },
    set test(a = !1) {
      de(a), _();
    },
    get verifyurl() {
      return te();
    },
    set verifyurl(a = void 0) {
      te(a), _();
    },
    get workers() {
      return ct();
    },
    set workers(a = Math.min(16, navigator.hardwareConcurrency || 8)) {
      ct(a), _();
    },
    get workerurl() {
      return Lt();
    },
    set workerurl(a = void 0) {
      Lt(a), _();
    }
  });
  return i(), kn;
}
To(["change", "keydown", "click"]);
customElements.define("altcha-widget", Go(
  Es,
  {
    blockspam: { type: "Boolean" },
    debug: { type: "Boolean" },
    delay: { type: "Number" },
    disableautofocus: { type: "Boolean" },
    disablerefetchonexpire: { type: "Boolean" },
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
    overlay: {},
    overlaycontent: {},
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
const Ts = '@keyframes overlay-slidein{to{opacity:1;top:50%}}@keyframes altcha-spinner{to{transform:rotate(360deg)}}.altcha{background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);position:relative}.altcha:focus-within{border-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating]{background:var(--altcha-color-base, white);display:none;filter:drop-shadow(3px 3px 6px rgba(0,0,0,.2));left:-100%;position:fixed;top:-100%;width:var(--altcha-max-width, 260px);z-index:999999}.altcha[data-floating=top] .altcha-anchor-arrow{border-bottom-color:transparent;border-top-color:var(--altcha-color-border, #a0a0a0);bottom:-12px;top:auto}.altcha[data-floating=bottom]:focus-within::after{border-bottom-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating=top]:focus-within::after{border-top-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating]:not([data-state=unverified]){display:block}.altcha-anchor-arrow{border:6px solid transparent;border-bottom-color:var(--altcha-color-border, #a0a0a0);content:"";height:0;left:12px;position:absolute;top:-12px;width:0}.altcha-main{align-items:center;display:flex;gap:.4rem;padding:.7rem;position:relative}.altcha-code-challenge{background:var(--altcha-color-base, white);border:1px solid var(--altcha-color-border-focus, currentColor);border-radius:var(--altcha-border-radius, 3px);filter:drop-shadow(3px 3px 6px rgba(0,0,0,.2));padding:.5rem;position:absolute;top:2.5rem;z-index:9999999}.altcha-code-challenge>form{display:flex;flex-direction:column;gap:.5rem}.altcha-code-challenge-input{border:1px solid currentColor;border-radius:3px;box-sizing:border-box;outline:0;font-size:16px;padding:.35rem;width:220px}.altcha-code-challenge-input:focus{outline:2px solid color-mix(in srgb,var(--altcha-color-active, #1D1DC9) 20%,transparent)}.altcha-code-challenge-input:disabled{opacity:.7}.altcha-code-challenge-image{background-color:#fff;border:1px solid currentColor;border-radius:3px;box-sizing:border-box;object-fit:contain;height:50px;width:220px}.altcha-code-challenge-audio,.altcha-code-challenge-reload{background:color-mix(in srgb,var(--altcha-color-text, currentColor) 10%,transparent);border:0;border-radius:3px;color:var(--altcha-color-text, currentColor);cursor:pointer;display:flex;align-items:center;justify-content:center;padding:.35rem}.altcha-code-challenge-audio:disabled,.altcha-code-challenge-reload:disabled,.altcha-code-challenge-verify:disabled{opacity:.7;pointer-events:none}.altcha-code-challenge-audio>*,.altcha-code-challenge-reload>*{height:20px;width:20px}.altcha-code-challenge-buttons{display:flex;justify-content:space-between}.altcha-code-challenge-buttons-left{display:flex;gap:.25rem}.altcha-code-challenge-verify{align-items:center;background:var(--altcha-color-active, #1D1DC9);border:0;border-radius:3px;color:#fff;cursor:pointer;display:flex;gap:.5rem;font-size:100%;padding:.35rem 1rem}.altcha-code-challenge-arrow{border:6px solid transparent;border-bottom-color:var(--altcha-color-border, currentColor);content:"";height:0;left:.15rem;position:absolute;top:-12px;width:0}.altcha[data-floating=top] .altcha-code-challenge{top:-150px}.altcha[data-floating=top] .altcha-code-challenge-arrow{border-bottom-color:transparent;border-top-color:var(--altcha-color-border, currentColor);bottom:-12px;top:auto}.altcha-label{cursor:pointer;flex-grow:1}.altcha-logo{color:currentColor!important;opacity:.7}.altcha-footer:hover,.altcha-logo:hover{opacity:1}.altcha-error{color:var(--altcha-color-error-text, #f23939);display:flex;font-size:.85rem;gap:.3rem;padding:0 .7rem .7rem}.altcha-footer{align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:.75rem;opacity:.7;justify-content:end;padding:.2rem .7rem}.altcha-footer a{color:currentColor}.altcha-checkbox{display:flex;align-items:center;justify-content:center;height:24px;position:relative;width:24px}.altcha-checkbox .altcha-spinner{bottom:0;left:0;position:absolute;right:0;top:0}.altcha-checkbox input{width:18px;height:18px;margin:0}.altcha-checkbox-verifying input{appearance:none;opacity:0;pointer-events:none}.altcha-spinner{animation:altcha-spinner .75s infinite linear;transform-origin:center}.altcha-overlay{--altcha-color-base:#fff;--altcha-color-text:#000;animation:overlay-slidein .5s forwards;display:flex;flex-direction:column;gap:.5rem;left:50%;width:260px;opacity:0;position:fixed;top:45%;transform:translate(-50%,-50%)}.altcha-overlay-backdrop{background:rgba(0,0,0,.5);bottom:0;display:none;left:0;position:fixed;right:0;top:0;z-index:99999999}.altcha-overlay-close-button{align-self:flex-end;background:0 0;border:0;padding:.25rem;cursor:pointer;color:currentColor;font-size:130%;line-height:1;opacity:.7}@media (max-height:450px){.altcha-overlay{top:10%!important;transform:translate(-50%,0)}}';
function Is(e, t = "__altcha-css") {
  if (!document.getElementById(t)) {
    const r = document.createElement("style");
    r.id = t, r.textContent = e, document.head.appendChild(r);
  }
}
globalThis.altchaCreateWorker = (e) => e ? new Worker(new URL(e)) : new es();
Is(Ts);
export {
  Es as Altcha
};
