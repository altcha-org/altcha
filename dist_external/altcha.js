const $l = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add($l);
const kl = 1, Sl = 4, Tl = 8, Nl = 16, Dl = 1, Ll = 2, Mn = "[", Gr = "[!", Zr = "]", pt = {}, oe = Symbol(), Pl = "http://www.w3.org/1999/xhtml", Nr = !1;
function Wr(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var Jr = Array.isArray, Ol = Array.prototype.indexOf, Fl = Array.from, ln = Object.keys, Vt = Object.defineProperty, nt = Object.getOwnPropertyDescriptor, Vl = Object.getOwnPropertyDescriptors, Ml = Object.prototype, ql = Array.prototype, Kr = Object.getPrototypeOf, Dr = Object.isExtensible;
const yt = () => {
};
function Xr(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Ul(e, t, n = !1) {
  return e === void 0 ? n ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
const me = 2, zr = 4, dn = 8, qn = 16, Ne = 32, lt = 64, on = 128, ce = 256, an = 512, ae = 1024, Re = 2048, ot = 4096, wt = 8192, vn = 16384, jl = 32768, Un = 65536, Bl = 1 << 19, Qr = 1 << 20, Tn = 1 << 21, Ot = Symbol("$state"), ei = Symbol("legacy props"), Hl = Symbol("");
function Yl(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Gl() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Zl(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Wl() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Jl() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Kl(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Xl() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function zl() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ql() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function hn(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let O = !1;
function bt(e) {
  O = e;
}
let P;
function qe(e) {
  if (e === null)
    throw hn(), pt;
  return P = e;
}
function Et() {
  return qe(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Be(P)
  );
}
function W(e) {
  if (O) {
    if (/* @__PURE__ */ Be(P) !== null)
      throw hn(), pt;
    P = e;
  }
}
function eo() {
  for (var e = 0, t = P; ; ) {
    if (t.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === Zr) {
        if (e === 0) return t;
        e -= 1;
      } else (n === Mn || n === Gr) && (e += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Be(t)
    );
    t.remove(), t = i;
  }
}
let to = !1;
function Ve(e) {
  if (typeof e != "object" || e === null || Ot in e)
    return e;
  const t = Kr(e);
  if (t !== Ml && t !== ql)
    return e;
  var n = /* @__PURE__ */ new Map(), i = Jr(e), a = /* @__PURE__ */ D(0), o = k, s = (f) => {
    var c = k;
    $e(o);
    var d = f();
    return $e(c), d;
  };
  return i && n.set("length", /* @__PURE__ */ D(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(f, c, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && Xl();
        var m = n.get(c);
        return m === void 0 ? (m = s(() => /* @__PURE__ */ D(d.value)), n.set(c, m)) : p(
          m,
          s(() => Ve(d.value))
        ), !0;
      },
      deleteProperty(f, c) {
        var d = n.get(c);
        if (d === void 0)
          c in f && (n.set(
            c,
            s(() => /* @__PURE__ */ D(oe))
          ), $n(a));
        else {
          if (i && typeof c == "string") {
            var m = (
              /** @type {Source<number>} */
              n.get("length")
            ), h = Number(c);
            Number.isInteger(h) && h < m.v && p(m, h);
          }
          p(d, oe), $n(a);
        }
        return !0;
      },
      get(f, c, d) {
        if (c === Ot)
          return e;
        var m = n.get(c), h = c in f;
        if (m === void 0 && (!h || nt(f, c)?.writable) && (m = s(() => /* @__PURE__ */ D(Ve(h ? f[c] : oe))), n.set(c, m)), m !== void 0) {
          var b = l(m);
          return b === oe ? void 0 : b;
        }
        return Reflect.get(f, c, d);
      },
      getOwnPropertyDescriptor(f, c) {
        var d = Reflect.getOwnPropertyDescriptor(f, c);
        if (d && "value" in d) {
          var m = n.get(c);
          m && (d.value = l(m));
        } else if (d === void 0) {
          var h = n.get(c), b = h?.v;
          if (h !== void 0 && b !== oe)
            return {
              enumerable: !0,
              configurable: !0,
              value: b,
              writable: !0
            };
        }
        return d;
      },
      has(f, c) {
        if (c === Ot)
          return !0;
        var d = n.get(c), m = d !== void 0 && d.v !== oe || Reflect.has(f, c);
        if (d !== void 0 || S !== null && (!m || nt(f, c)?.writable)) {
          d === void 0 && (d = s(() => /* @__PURE__ */ D(m ? Ve(f[c]) : oe)), n.set(c, d));
          var h = l(d);
          if (h === oe)
            return !1;
        }
        return m;
      },
      set(f, c, d, m) {
        var h = n.get(c), b = c in f;
        if (i && c === "length")
          for (var w = d; w < /** @type {Source<number>} */
          h.v; w += 1) {
            var F = n.get(w + "");
            F !== void 0 ? p(F, oe) : w in f && (F = s(() => /* @__PURE__ */ D(oe)), n.set(w + "", F));
          }
        h === void 0 ? (!b || nt(f, c)?.writable) && (h = s(() => /* @__PURE__ */ D(void 0)), p(
          h,
          s(() => Ve(d))
        ), n.set(c, h)) : (b = h.v !== oe, p(
          h,
          s(() => Ve(d))
        ));
        var V = Reflect.getOwnPropertyDescriptor(f, c);
        if (V?.set && V.set.call(m, d), !b) {
          if (i && typeof c == "string") {
            var q = (
              /** @type {Source<number>} */
              n.get("length")
            ), R = Number(c);
            Number.isInteger(R) && R >= q.v && p(q, R + 1);
          }
          $n(a);
        }
        return !0;
      },
      ownKeys(f) {
        l(a);
        var c = Reflect.ownKeys(f).filter((h) => {
          var b = n.get(h);
          return b === void 0 || b.v !== oe;
        });
        for (var [d, m] of n)
          m.v !== oe && !(d in f) && c.push(d);
        return c;
      },
      setPrototypeOf() {
        zl();
      }
    }
  );
}
function $n(e, t = 1) {
  p(e, e.v + t);
}
var Lr, ti, ni, ri;
function Nn() {
  if (Lr === void 0) {
    Lr = window, ti = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    ni = nt(t, "firstChild").get, ri = nt(t, "nextSibling").get, Dr(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Dr(n) && (n.__t = void 0);
  }
}
function gn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function he(e) {
  return ni.call(e);
}
// @__NO_SIDE_EFFECTS__
function Be(e) {
  return ri.call(e);
}
function J(e, t) {
  if (!O)
    return /* @__PURE__ */ he(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ he(P)
  );
  return n === null && (n = P.appendChild(gn())), qe(n), n;
}
function Dt(e, t) {
  if (!O) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ he(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Be(n) : n;
  }
  return P;
}
function K(e, t = 1, n = !1) {
  let i = O ? P : e;
  for (var a; t--; )
    a = i, i = /** @type {TemplateNode} */
    /* @__PURE__ */ Be(i);
  if (!O)
    return i;
  var o = i?.nodeType;
  if (n && o !== 3) {
    var s = gn();
    return i === null ? a?.after(s) : i.before(s), qe(s), s;
  }
  return qe(i), /** @type {TemplateNode} */
  i;
}
function no(e) {
  e.textContent = "";
}
function ii(e) {
  return e === this.v;
}
function li(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function jn(e) {
  return !li(e, this.v);
}
// @__NO_SIDE_EFFECTS__
function _n(e) {
  var t = me | Re, n = k !== null && (k.f & me) !== 0 ? (
    /** @type {Derived} */
    k
  ) : null;
  return S === null || n !== null && (n.f & ce) !== 0 ? t |= ce : S.f |= Qr, {
    ctx: re,
    deps: null,
    effects: null,
    equals: ii,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: n ?? S
  };
}
// @__NO_SIDE_EFFECTS__
function Lt(e) {
  const t = /* @__PURE__ */ _n(e);
  return bi(t), t;
}
// @__NO_SIDE_EFFECTS__
function ro(e) {
  const t = /* @__PURE__ */ _n(e);
  return t.equals = jn, t;
}
function oi(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      Ue(
        /** @type {Effect} */
        t[n]
      );
  }
}
function io(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & me) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function ai(e) {
  var t, n = S;
  je(io(e));
  try {
    oi(e), t = Ei(e);
  } finally {
    je(n);
  }
  return t;
}
function si(e) {
  var t = ai(e), n = (Me || (e.f & ce) !== 0) && e.deps !== null ? ot : ae;
  be(e, n), e.equals(t) || (e.v = t, e.wv = yi());
}
function lo(e) {
  S === null && k === null && Zl(), k !== null && (k.f & ce) !== 0 && S === null && Gl(), jt && Yl();
}
function oo(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function at(e, t, n, i = !0) {
  var a = S, o = {
    ctx: re,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Re,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: a,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (n)
    try {
      Zn(o), o.f |= jl;
    } catch (c) {
      throw Ue(o), c;
    }
  else t !== null && bn(o);
  var s = n && o.deps === null && o.first === null && o.nodes_start === null && o.teardown === null && (o.f & (Qr | on)) === 0;
  if (!s && i && (a !== null && oo(o, a), k !== null && (k.f & me) !== 0)) {
    var f = (
      /** @type {Derived} */
      k
    );
    (f.effects ??= []).push(o);
  }
  return o;
}
function Bn(e) {
  const t = at(dn, null, !1);
  return be(t, ae), t.teardown = e, t;
}
function Dn(e) {
  lo();
  var t = S !== null && (S.f & Ne) !== 0 && re !== null && !re.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      re
    );
    (n.e ??= []).push({
      fn: e,
      effect: S,
      reaction: k
    });
  } else {
    var i = Hn(e);
    return i;
  }
}
function ao(e) {
  const t = at(lt, e, !0);
  return () => {
    Ue(t);
  };
}
function so(e) {
  const t = at(lt, e, !0);
  return (n = {}) => new Promise((i) => {
    n.outro ? Pn(t, () => {
      Ue(t), i(void 0);
    }) : (Ue(t), i(void 0));
  });
}
function Hn(e) {
  return at(zr, e, !1);
}
function Yn(e) {
  return at(dn, e, !0);
}
function Ae(e, t = [], n = _n) {
  const i = t.map(n);
  return ui(() => e(...i.map(l)));
}
function ui(e, t = 0) {
  return at(dn | qn | t, e, !0);
}
function Ln(e, t = !0) {
  return at(dn | Ne, e, !0, t);
}
function fi(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = jt, i = k;
    Or(!0), $e(null);
    try {
      t.call(null);
    } finally {
      Or(n), $e(i);
    }
  }
}
function ci(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var i = n.next;
    (n.f & lt) !== 0 ? n.parent = null : Ue(n, t), n = i;
  }
}
function uo(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Ne) === 0 && Ue(t), t = n;
  }
}
function Ue(e, t = !0) {
  var n = !1;
  (t || (e.f & Bl) !== 0) && e.nodes_start !== null && (di(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), ci(e, t && !n), cn(e, 0), be(e, vn);
  var i = e.transitions;
  if (i !== null)
    for (const o of i)
      o.stop();
  fi(e);
  var a = e.parent;
  a !== null && a.first !== null && vi(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function di(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Be(e)
    );
    e.remove(), e = n;
  }
}
function vi(e) {
  var t = e.parent, n = e.prev, i = e.next;
  n !== null && (n.next = i), i !== null && (i.prev = n), t !== null && (t.first === e && (t.first = i), t.last === e && (t.last = n));
}
function Pn(e, t) {
  var n = [];
  hi(e, n, !0), fo(n, () => {
    Ue(e), t && t();
  });
}
function fo(e, t) {
  var n = e.length;
  if (n > 0) {
    var i = () => --n || t();
    for (var a of e)
      a.out(i);
  } else
    t();
}
function hi(e, t, n) {
  if ((e.f & wt) === 0) {
    if (e.f ^= wt, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var i = e.first; i !== null; ) {
      var a = i.next, o = (i.f & Un) !== 0 || (i.f & Ne) !== 0;
      hi(i, t, o ? n : !1), i = a;
    }
  }
}
function Pr(e) {
  gi(e, !0);
}
function gi(e, t) {
  if ((e.f & wt) !== 0) {
    e.f ^= wt, (e.f & ae) === 0 && (e.f ^= ae), Bt(e) && (be(e, Re), bn(e));
    for (var n = e.first; n !== null; ) {
      var i = n.next, a = (n.f & Un) !== 0 || (n.f & Ne) !== 0;
      gi(n, a ? t : !1), n = i;
    }
    if (e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || t) && o.in();
  }
}
const co = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Mt = [], qt = [];
function _i() {
  var e = Mt;
  Mt = [], Xr(e);
}
function mi() {
  var e = qt;
  qt = [], Xr(e);
}
function Gn(e) {
  Mt.length === 0 && queueMicrotask(_i), Mt.push(e);
}
function vo(e) {
  qt.length === 0 && co(mi), qt.push(e);
}
function ho() {
  Mt.length > 0 && _i(), qt.length > 0 && mi();
}
let tn = !1, sn = !1, un = null, rt = !1, jt = !1;
function Or(e) {
  jt = e;
}
let Ft = [];
let k = null, Ie = !1;
function $e(e) {
  k = e;
}
let S = null;
function je(e) {
  S = e;
}
let Te = null;
function bi(e) {
  k !== null && k.f & Tn && (Te === null ? Te = [e] : Te.push(e));
}
let ne = null, fe = 0, ve = null;
function go(e) {
  ve = e;
}
let pi = 1, fn = 0, Me = !1;
function yi() {
  return ++pi;
}
function Bt(e) {
  var t = e.f;
  if ((t & Re) !== 0)
    return !0;
  if ((t & ot) !== 0) {
    var n = e.deps, i = (t & ce) !== 0;
    if (n !== null) {
      var a, o, s = (t & an) !== 0, f = i && S !== null && !Me, c = n.length;
      if (s || f) {
        var d = (
          /** @type {Derived} */
          e
        ), m = d.parent;
        for (a = 0; a < c; a++)
          o = n[a], (s || !o?.reactions?.includes(d)) && (o.reactions ??= []).push(d);
        s && (d.f ^= an), f && m !== null && (m.f & ce) === 0 && (d.f ^= ce);
      }
      for (a = 0; a < c; a++)
        if (o = n[a], Bt(
          /** @type {Derived} */
          o
        ) && si(
          /** @type {Derived} */
          o
        ), o.wv > e.wv)
          return !0;
    }
    (!i || S !== null && !Me) && be(e, ae);
  }
  return !1;
}
function _o(e, t) {
  for (var n = t; n !== null; ) {
    if ((n.f & on) !== 0)
      try {
        n.fn(e);
        return;
      } catch {
        n.f ^= on;
      }
    n = n.parent;
  }
  throw tn = !1, e;
}
function Fr(e) {
  return (e.f & vn) === 0 && (e.parent === null || (e.parent.f & on) === 0);
}
function mn(e, t, n, i) {
  if (tn) {
    if (n === null && (tn = !1), Fr(t))
      throw e;
    return;
  }
  if (n !== null && (tn = !0), _o(e, t), Fr(t))
    throw e;
}
function wi(e, t, n = !0) {
  var i = e.reactions;
  if (i !== null)
    for (var a = 0; a < i.length; a++) {
      var o = i[a];
      Te?.includes(e) || ((o.f & me) !== 0 ? wi(
        /** @type {Derived} */
        o,
        t,
        !1
      ) : t === o && (n ? be(o, Re) : (o.f & ae) !== 0 && be(o, ot), bn(
        /** @type {Effect} */
        o
      )));
    }
}
function Ei(e) {
  var t = ne, n = fe, i = ve, a = k, o = Me, s = Te, f = re, c = Ie, d = e.f;
  ne = /** @type {null | Value[]} */
  null, fe = 0, ve = null, Me = (d & ce) !== 0 && (Ie || !rt || k === null), k = (d & (Ne | lt)) === 0 ? e : null, Te = null, Vr(e.ctx), Ie = !1, fn++, e.f |= Tn;
  try {
    var m = (
      /** @type {Function} */
      (0, e.fn)()
    ), h = e.deps;
    if (ne !== null) {
      var b;
      if (cn(e, fe), h !== null && fe > 0)
        for (h.length = fe + ne.length, b = 0; b < ne.length; b++)
          h[fe + b] = ne[b];
      else
        e.deps = h = ne;
      if (!Me)
        for (b = fe; b < h.length; b++)
          (h[b].reactions ??= []).push(e);
    } else h !== null && fe < h.length && (cn(e, fe), h.length = fe);
    if ($i() && ve !== null && !Ie && h !== null && (e.f & (me | ot | Re)) === 0)
      for (b = 0; b < /** @type {Source[]} */
      ve.length; b++)
        wi(
          ve[b],
          /** @type {Effect} */
          e
        );
    return a !== null && a !== e && (fn++, ve !== null && (i === null ? i = ve : i.push(.../** @type {Source[]} */
    ve))), m;
  } finally {
    ne = t, fe = n, ve = i, k = a, Me = o, Te = s, Vr(f), Ie = c, e.f ^= Tn;
  }
}
function mo(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var i = Ol.call(n, e);
    if (i !== -1) {
      var a = n.length - 1;
      a === 0 ? n = t.reactions = null : (n[i] = n[a], n.pop());
    }
  }
  n === null && (t.f & me) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ne === null || !ne.includes(t)) && (be(t, ot), (t.f & (ce | an)) === 0 && (t.f ^= an), oi(
    /** @type {Derived} **/
    t
  ), cn(
    /** @type {Derived} **/
    t,
    0
  ));
}
function cn(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var i = t; i < n.length; i++)
      mo(e, n[i]);
}
function Zn(e) {
  var t = e.f;
  if ((t & vn) === 0) {
    be(e, ae);
    var n = S, i = re, a = rt;
    S = e, rt = !0;
    try {
      (t & qn) !== 0 ? uo(e) : ci(e), fi(e);
      var o = Ei(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = pi;
      var s = e.deps, f;
      Nr && to && e.f & Re;
    } catch (c) {
      mn(c, e, n, i || e.ctx);
    } finally {
      rt = a, S = n;
    }
  }
}
function bo() {
  try {
    Wl();
  } catch (e) {
    if (un !== null)
      mn(e, un, null);
    else
      throw e;
  }
}
function Ci() {
  var e = rt;
  try {
    var t = 0;
    for (rt = !0; Ft.length > 0; ) {
      t++ > 1e3 && bo();
      var n = Ft, i = n.length;
      Ft = [];
      for (var a = 0; a < i; a++) {
        var o = yo(n[a]);
        po(o);
      }
      Ut.clear();
    }
  } finally {
    sn = !1, rt = e, un = null;
  }
}
function po(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var i = e[n];
      if ((i.f & (vn | wt)) === 0)
        try {
          Bt(i) && (Zn(i), i.deps === null && i.first === null && i.nodes_start === null && (i.teardown === null ? vi(i) : i.fn = null));
        } catch (a) {
          mn(a, i, null, i.ctx);
        }
    }
}
function bn(e) {
  sn || (sn = !0, queueMicrotask(Ci));
  for (var t = un = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if ((n & (lt | Ne)) !== 0) {
      if ((n & ae) === 0) return;
      t.f ^= ae;
    }
  }
  Ft.push(t);
}
function yo(e) {
  for (var t = [], n = e; n !== null; ) {
    var i = n.f, a = (i & (Ne | lt)) !== 0, o = a && (i & ae) !== 0;
    if (!o && (i & wt) === 0) {
      if ((i & zr) !== 0)
        t.push(n);
      else if (a)
        n.f ^= ae;
      else
        try {
          Bt(n) && Zn(n);
        } catch (c) {
          mn(c, n, null, n.ctx);
        }
      var s = n.first;
      if (s !== null) {
        n = s;
        continue;
      }
    }
    var f = n.parent;
    for (n = n.next; n === null && f !== null; )
      n = f.next, f = f.parent;
  }
  return t;
}
function E(e) {
  for (var t; ; ) {
    if (ho(), Ft.length === 0)
      return (
        /** @type {T} */
        t
      );
    sn = !0, Ci();
  }
}
async function kn() {
  await Promise.resolve(), E();
}
function l(e) {
  var t = e.f, n = (t & me) !== 0;
  if (k !== null && !Ie) {
    if (!Te?.includes(e)) {
      var i = k.deps;
      e.rv < fn && (e.rv = fn, ne === null && i !== null && i[fe] === e ? fe++ : ne === null ? ne = [e] : (!Me || !ne.includes(e)) && ne.push(e));
    }
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var a = (
      /** @type {Derived} */
      e
    ), o = a.parent;
    o !== null && (o.f & ce) === 0 && (a.f ^= ce);
  }
  return n && (a = /** @type {Derived} */
  e, Bt(a) && si(a)), jt && Ut.has(e) ? Ut.get(e) : e.v;
}
function it(e) {
  var t = Ie;
  try {
    return Ie = !0, e();
  } finally {
    Ie = t;
  }
}
const wo = -7169;
function be(e, t) {
  e.f = e.f & wo | t;
}
const Ut = /* @__PURE__ */ new Map();
function Ai(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: ii,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function D(e, t) {
  const n = Ai(e);
  return bi(n), n;
}
// @__NO_SIDE_EFFECTS__
function Wn(e, t = !1) {
  const n = Ai(e);
  return t || (n.equals = jn), n;
}
function p(e, t, n = !1) {
  k !== null && !Ie && $i() && (k.f & (me | qn)) !== 0 && !Te?.includes(e) && Ql();
  let i = n ? Ve(t) : t;
  return Eo(e, i);
}
function Eo(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    jt ? Ut.set(e, t) : Ut.set(e, n), e.v = t, (e.f & me) !== 0 && ((e.f & Re) !== 0 && ai(
      /** @type {Derived} */
      e
    ), be(e, (e.f & ce) === 0 ? ae : ot)), e.wv = yi(), Ii(e, Re), S !== null && (S.f & ae) !== 0 && (S.f & (Ne | lt)) === 0 && (ve === null ? go([e]) : ve.push(e));
  }
  return t;
}
function Ii(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var i = n.length, a = 0; a < i; a++) {
      var o = n[a], s = o.f;
      (s & Re) === 0 && (be(o, t), (s & (ae | ce)) !== 0 && ((s & me) !== 0 ? Ii(
        /** @type {Derived} */
        o,
        ot
      ) : bn(
        /** @type {Effect} */
        o
      )));
    }
}
let re = null;
function Vr(e) {
  re = e;
}
function xi(e, t = !1, n) {
  var i = re = {
    p: re,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
  Bn(() => {
    i.d = !0;
  });
}
function Ri(e) {
  const t = re;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var n = S, i = k;
      t.e = null;
      try {
        for (var a = 0; a < s.length; a++) {
          var o = s[a];
          je(o.effect), $e(o.reaction), Hn(o.fn);
        }
      } finally {
        je(n), $e(i);
      }
    }
    re = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function $i() {
  return !0;
}
const Co = ["touchstart", "touchmove"];
function Ao(e) {
  return Co.includes(e);
}
function Io(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, Gn(() => {
      document.activeElement === n && e.focus();
    });
  }
}
let Mr = !1;
function ki() {
  Mr || (Mr = !0, document.addEventListener(
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
function Si(e) {
  var t = k, n = S;
  $e(null), je(null);
  try {
    return e();
  } finally {
    $e(t), je(n);
  }
}
function xo(e, t, n, i = n) {
  e.addEventListener(t, () => Si(n));
  const a = e.__on_r;
  a ? e.__on_r = () => {
    a(), i(!0);
  } : e.__on_r = () => i(!0), ki();
}
const Ti = /* @__PURE__ */ new Set(), On = /* @__PURE__ */ new Set();
function Ro(e, t, n, i = {}) {
  function a(o) {
    if (i.capture || Pt.call(t, o), !o.cancelBubble)
      return Si(() => n?.call(this, o));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Gn(() => {
    t.addEventListener(e, a, i);
  }) : t.addEventListener(e, a, i), a;
}
function Fe(e, t, n, i, a) {
  var o = { capture: i, passive: a }, s = Ro(e, t, n, o);
  (t === document.body || t === window || t === document) && Bn(() => {
    t.removeEventListener(e, s, o);
  });
}
function $o(e) {
  for (var t = 0; t < e.length; t++)
    Ti.add(e[t]);
  for (var n of On)
    n(e);
}
function Pt(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), i = e.type, a = e.composedPath?.() || [], o = (
    /** @type {null | Element} */
    a[0] || e.target
  ), s = 0, f = e.__root;
  if (f) {
    var c = a.indexOf(f);
    if (c !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var d = a.indexOf(t);
    if (d === -1)
      return;
    c <= d && (s = c);
  }
  if (o = /** @type {Element} */
  a[s] || e.target, o !== t) {
    Vt(e, "currentTarget", {
      configurable: !0,
      get() {
        return o || n;
      }
    });
    var m = k, h = S;
    $e(null), je(null);
    try {
      for (var b, w = []; o !== null; ) {
        var F = o.assignedSlot || o.parentNode || /** @type {any} */
        o.host || null;
        try {
          var V = o["__" + i];
          if (V != null && (!/** @type {any} */
          o.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === o))
            if (Jr(V)) {
              var [q, ...R] = V;
              q.apply(o, [e, ...R]);
            } else
              V.call(o, e);
        } catch (ee) {
          b ? w.push(ee) : b = ee;
        }
        if (e.cancelBubble || F === t || F === null)
          break;
        o = F;
      }
      if (b) {
        for (let ee of w)
          queueMicrotask(() => {
            throw ee;
          });
        throw b;
      }
    } finally {
      e.__root = t, delete e.currentTarget, $e(m), je(h);
    }
  }
}
function Jn(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function xe(e, t) {
  var n = (
    /** @type {Effect} */
    S
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function pe(e, t) {
  var n = (t & Dl) !== 0, i = (t & Ll) !== 0, a, o = !e.startsWith("<!>");
  return () => {
    if (O)
      return xe(P, null), P;
    a === void 0 && (a = Jn(o ? e : "<!>" + e), n || (a = /** @type {Node} */
    /* @__PURE__ */ he(a)));
    var s = (
      /** @type {TemplateNode} */
      i || ti ? document.importNode(a, !0) : a.cloneNode(!0)
    );
    if (n) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ he(s)
      ), c = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      xe(f, c);
    } else
      xe(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function pn(e, t, n = "svg") {
  var i = !e.startsWith("<!>"), a = `<${n}>${i ? e : "<!>" + e}</${n}>`, o;
  return () => {
    if (O)
      return xe(P, null), P;
    if (!o) {
      var s = (
        /** @type {DocumentFragment} */
        Jn(a)
      ), f = (
        /** @type {Element} */
        /* @__PURE__ */ he(s)
      );
      o = /** @type {Element} */
      /* @__PURE__ */ he(f);
    }
    var c = (
      /** @type {TemplateNode} */
      o.cloneNode(!0)
    );
    return xe(c, c), c;
  };
}
function zt() {
  if (O)
    return xe(P, null), P;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = gn();
  return e.append(t, n), xe(t, n), e;
}
function B(e, t) {
  if (O) {
    S.nodes_end = P, Et();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function ko(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function Ni(e, t) {
  return Di(e, t);
}
function So(e, t) {
  Nn(), t.intro = t.intro ?? !1;
  const n = t.target, i = O, a = P;
  try {
    for (var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ he(n)
    ); o && (o.nodeType !== 8 || /** @type {Comment} */
    o.data !== Mn); )
      o = /** @type {TemplateNode} */
      /* @__PURE__ */ Be(o);
    if (!o)
      throw pt;
    bt(!0), qe(
      /** @type {Comment} */
      o
    ), Et();
    const s = Di(e, { ...t, anchor: o });
    if (P === null || P.nodeType !== 8 || /** @type {Comment} */
    P.data !== Zr)
      throw hn(), pt;
    return bt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === pt)
      return t.recover === !1 && Jl(), Nn(), no(n), bt(!1), Ni(e, t);
    throw s;
  } finally {
    bt(i), qe(a);
  }
}
const _t = /* @__PURE__ */ new Map();
function Di(e, { target: t, anchor: n, props: i = {}, events: a, context: o, intro: s = !0 }) {
  Nn();
  var f = /* @__PURE__ */ new Set(), c = (h) => {
    for (var b = 0; b < h.length; b++) {
      var w = h[b];
      if (!f.has(w)) {
        f.add(w);
        var F = Ao(w);
        t.addEventListener(w, Pt, { passive: F });
        var V = _t.get(w);
        V === void 0 ? (document.addEventListener(w, Pt, { passive: F }), _t.set(w, 1)) : _t.set(w, V + 1);
      }
    }
  };
  c(Fl(Ti)), On.add(c);
  var d = void 0, m = so(() => {
    var h = n ?? t.appendChild(gn());
    return Ln(() => {
      if (o) {
        xi({});
        var b = (
          /** @type {ComponentContext} */
          re
        );
        b.c = o;
      }
      a && (i.$$events = a), O && xe(
        /** @type {TemplateNode} */
        h,
        null
      ), d = e(h, i) || {}, O && (S.nodes_end = P), o && Ri();
    }), () => {
      for (var b of f) {
        t.removeEventListener(b, Pt);
        var w = (
          /** @type {number} */
          _t.get(b)
        );
        --w === 0 ? (document.removeEventListener(b, Pt), _t.delete(b)) : _t.set(b, w);
      }
      On.delete(c), h !== n && h.parentNode?.removeChild(h);
    };
  });
  return Fn.set(d, m), d;
}
let Fn = /* @__PURE__ */ new WeakMap();
function To(e, t) {
  const n = Fn.get(e);
  return n ? (Fn.delete(e), n(t)) : Promise.resolve();
}
function X(e, t, [n, i] = [0, 0]) {
  O && n === 0 && Et();
  var a = e, o = null, s = null, f = oe, c = n > 0 ? Un : 0, d = !1;
  const m = (b, w = !0) => {
    d = !0, h(w, b);
  }, h = (b, w) => {
    if (f === (f = b)) return;
    let F = !1;
    if (O && i !== -1) {
      if (n === 0) {
        const q = (
          /** @type {Comment} */
          a.data
        );
        q === Mn ? i = 0 : q === Gr ? i = 1 / 0 : (i = parseInt(q.substring(1)), i !== i && (i = f ? 1 / 0 : -1));
      }
      const V = i > n;
      !!f === V && (a = eo(), qe(a), bt(!1), F = !0, i = -1);
    }
    f ? (o ? Pr(o) : w && (o = Ln(() => w(a))), s && Pn(s, () => {
      s = null;
    })) : (s ? Pr(s) : w && (s = Ln(() => w(a, [n + 1, i]))), o && Pn(o, () => {
      o = null;
    })), F && bt(!0);
  };
  ui(() => {
    d = !1, t(m), d || h(null, null);
  }, c), O && (a = P);
}
function tt(e, t, n = !1, i = !1, a = !1) {
  var o = e, s = "";
  Ae(() => {
    var f = (
      /** @type {Effect} */
      S
    );
    if (s === (s = t() ?? "")) {
      O && Et();
      return;
    }
    if (f.nodes_start !== null && (di(
      f.nodes_start,
      /** @type {TemplateNode} */
      f.nodes_end
    ), f.nodes_start = f.nodes_end = null), s !== "") {
      if (O) {
        P.data;
        for (var c = Et(), d = c; c !== null && (c.nodeType !== 8 || /** @type {Comment} */
        c.data !== ""); )
          d = c, c = /** @type {TemplateNode} */
          /* @__PURE__ */ Be(c);
        if (c === null)
          throw hn(), pt;
        xe(P, d), o = qe(c);
        return;
      }
      var m = s + "";
      n ? m = `<svg>${m}</svg>` : i && (m = `<math>${m}</math>`);
      var h = Jn(m);
      if ((n || i) && (h = /** @type {Element} */
      /* @__PURE__ */ he(h)), xe(
        /** @type {TemplateNode} */
        /* @__PURE__ */ he(h),
        /** @type {TemplateNode} */
        h.lastChild
      ), n || i)
        for (; /* @__PURE__ */ he(h); )
          o.before(
            /** @type {Node} */
            /* @__PURE__ */ he(h)
          );
      else
        o.before(h);
    }
  });
}
function No(e, t, n, i, a) {
  O && Et();
  var o = t.$$slots?.[n], s = !1;
  o === !0 && (o = t.children, s = !0), o === void 0 || o(e, s ? () => i : i);
}
const qr = [...` 	
\r\f \v\uFEFF`];
function Do(e, t, n) {
  var i = "" + e;
  if (n) {
    for (var a in n)
      if (n[a])
        i = i ? i + " " + a : a;
      else if (i.length)
        for (var o = a.length, s = 0; (s = i.indexOf(a, s)) >= 0; ) {
          var f = s + o;
          (s === 0 || qr.includes(i[s - 1])) && (f === i.length || qr.includes(i[f])) ? i = (s === 0 ? "" : i.substring(0, s)) + i.substring(f + 1) : s = f;
        }
  }
  return i === "" ? null : i;
}
function Lo(e, t, n, i, a, o) {
  var s = e.__className;
  if (O || s !== n || s === void 0) {
    var f = Do(n, i, o);
    (!O || f !== e.getAttribute("class")) && (f == null ? e.removeAttribute("class") : e.className = f), e.__className = n;
  } else if (o && a !== o)
    for (var c in o) {
      var d = !!o[c];
      (a == null || d !== !!a[c]) && e.classList.toggle(c, d);
    }
  return o;
}
const Po = Symbol("is custom element"), Oo = Symbol("is html");
function Ur(e) {
  if (O) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var i = e.value;
          $(e, "value", null), e.value = i;
        }
        if (e.hasAttribute("checked")) {
          var a = e.checked;
          $(e, "checked", null), e.checked = a;
        }
      }
    };
    e.__on_r = n, vo(n), ki();
  }
}
function Fo(e, t) {
  var n = Li(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function $(e, t, n, i) {
  var a = Li(e);
  O && (a[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || a[t] !== (a[t] = n) && (t === "loading" && (e[Hl] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Vo(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Li(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [Po]: e.nodeName.includes("-"),
      [Oo]: e.namespaceURI === Pl
    }
  );
}
var jr = /* @__PURE__ */ new Map();
function Vo(e) {
  var t = jr.get(e.nodeName);
  if (t) return t;
  jr.set(e.nodeName, t = []);
  for (var n, i = e, a = Element.prototype; a !== i; ) {
    n = Vl(i);
    for (var o in n)
      n[o].set && t.push(o);
    i = Kr(i);
  }
  return t;
}
function Mo(e, t, n = t) {
  xo(e, "change", (i) => {
    var a = i ? e.defaultChecked : e.checked;
    n(a);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (O && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  it(t) == null) && n(e.checked), Yn(() => {
    var i = t();
    e.checked = !!i;
  });
}
function Br(e, t) {
  return e === t || e?.[Ot] === t;
}
function Qt(e = {}, t, n, i) {
  return Hn(() => {
    var a, o;
    return Yn(() => {
      a = o, o = [], it(() => {
        e !== n(...o) && (t(e, ...o), a && Br(n(...a), e) && t(null, ...a));
      });
    }), () => {
      Gn(() => {
        o && Br(n(...o), e) && t(null, ...o);
      });
    };
  }), e;
}
function Pi(e) {
  re === null && Wr(), Dn(() => {
    const t = it(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function qo(e) {
  re === null && Wr(), Pi(() => () => it(e));
}
function Oi(e, t, n) {
  if (e == null)
    return t(void 0), yt;
  const i = it(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return i.unsubscribe ? () => i.unsubscribe() : i;
}
const mt = [];
function Uo(e, t = yt) {
  let n = null;
  const i = /* @__PURE__ */ new Set();
  function a(f) {
    if (li(e, f) && (e = f, n)) {
      const c = !mt.length;
      for (const d of i)
        d[1](), mt.push(d, e);
      if (c) {
        for (let d = 0; d < mt.length; d += 2)
          mt[d][0](mt[d + 1]);
        mt.length = 0;
      }
    }
  }
  function o(f) {
    a(f(
      /** @type {T} */
      e
    ));
  }
  function s(f, c = yt) {
    const d = [f, c];
    return i.add(d), i.size === 1 && (n = t(a, o) || yt), f(
      /** @type {T} */
      e
    ), () => {
      i.delete(d), i.size === 0 && n && (n(), n = null);
    };
  }
  return { set: a, update: o, subscribe: s };
}
function nn(e) {
  let t;
  return Oi(e, (n) => t = n)(), t;
}
let en = !1, Vn = Symbol();
function jo(e, t, n) {
  const i = n[t] ??= {
    store: null,
    source: /* @__PURE__ */ Wn(void 0),
    unsubscribe: yt
  };
  if (i.store !== e && !(Vn in n))
    if (i.unsubscribe(), i.store = e ?? null, e == null)
      i.source.v = void 0, i.unsubscribe = yt;
    else {
      var a = !0;
      i.unsubscribe = Oi(e, (o) => {
        a ? i.source.v = o : p(i.source, o);
      }), a = !1;
    }
  return e && Vn in n ? nn(e) : l(i.source);
}
function Bo() {
  const e = {};
  function t() {
    Bn(() => {
      for (var n in e)
        e[n].unsubscribe();
      Vt(e, Vn, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function Ho(e) {
  var t = en;
  try {
    return en = !1, [e(), en];
  } finally {
    en = t;
  }
}
function Hr(e) {
  return e.ctx?.d ?? !1;
}
function C(e, t, n, i) {
  var a = (n & kl) !== 0, o = !0, s = (n & Tl) !== 0, f = (n & Nl) !== 0, c = !1, d;
  s ? [d, c] = Ho(() => (
    /** @type {V} */
    e[t]
  )) : d = /** @type {V} */
  e[t];
  var m = Ot in e || ei in e, h = s && (nt(e, t)?.set ?? (m && t in e && ((U) => e[t] = U))) || void 0, b = (
    /** @type {V} */
    i
  ), w = !0, F = !1, V = () => (F = !0, w && (w = !1, f ? b = it(
    /** @type {() => V} */
    i
  ) : b = /** @type {V} */
  i), b);
  d === void 0 && i !== void 0 && (h && o && Kl(), d = V(), h && h(d));
  var q;
  if (q = () => {
    var U = (
      /** @type {V} */
      e[t]
    );
    return U === void 0 ? V() : (w = !0, F = !1, U);
  }, (n & Sl) === 0)
    return q;
  if (h) {
    var R = e.$$legacy;
    return function(U, se) {
      return arguments.length > 0 ? ((!se || R || c) && h(se ? q() : U), U) : q();
    };
  }
  var ee = !1, ke = /* @__PURE__ */ Wn(d), z = /* @__PURE__ */ _n(() => {
    var U = q(), se = l(ke);
    return ee ? (ee = !1, se) : ke.v = U;
  });
  return s && l(z), a || (z.equals = jn), function(U, se) {
    if (arguments.length > 0) {
      const He = se ? l(z) : s ? Ve(U) : U;
      if (!z.equals(He)) {
        if (ee = !0, p(ke, He), F && b !== void 0 && (b = He), Hr(z))
          return U;
        it(() => l(z));
      }
      return U;
    }
    return Hr(z) ? z.v : l(z);
  };
}
function Yo(e) {
  return new Go(e);
}
class Go {
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
    var n = /* @__PURE__ */ new Map(), i = (o, s) => {
      var f = /* @__PURE__ */ Wn(s);
      return n.set(o, f), f;
    };
    const a = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(o, s) {
          return l(n.get(s) ?? i(s, Reflect.get(o, s)));
        },
        has(o, s) {
          return s === ei ? !0 : (l(n.get(s) ?? i(s, Reflect.get(o, s))), Reflect.has(o, s));
        },
        set(o, s, f) {
          return p(n.get(s) ?? i(s, f), f), Reflect.set(o, s, f);
        }
      }
    );
    this.#e = (t.hydrate ? So : Ni)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: a,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && E(), this.#t = a.$$events;
    for (const o of Object.keys(this.#e))
      o === "$set" || o === "$destroy" || o === "$on" || Vt(this, o, {
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
      Object.assign(a, o);
    }, this.#e.$destroy = () => {
      To(this.#e);
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
  $on(t, n) {
    this.#t[t] = this.#t[t] || [];
    const i = (...a) => n.call(this, ...a);
    return this.#t[t].push(i), () => {
      this.#t[t] = this.#t[t].filter(
        /** @param {any} fn */
        (a) => a !== i
      );
    };
  }
  $destroy() {
    this.#e.$destroy();
  }
}
let Fi;
typeof HTMLElement == "function" && (Fi = class extends HTMLElement {
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
  constructor(e, t, n) {
    super(), this.$$ctor = e, this.$$s = t, n && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(e, t, n) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
      const i = this.$$c.$on(e, t);
      this.$$l_u.set(t, i);
    }
    super.addEventListener(e, t, n);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(e, t, n) {
    if (super.removeEventListener(e, t, n), this.$$c) {
      const i = this.$$l_u.get(t);
      i && (i(), this.$$l_u.delete(t));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(i) {
        return (a) => {
          const o = document.createElement("slot");
          i !== "default" && (o.name = i), B(a, o);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, n = Zo(this);
      for (const i of this.$$s)
        i in n && (i === "default" && !this.$$d.children ? (this.$$d.children = e(i), t.default = !0) : t[i] = e(i));
      for (const i of this.attributes) {
        const a = this.$$g_p(i.name);
        a in this.$$d || (this.$$d[a] = rn(a, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = Yo({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = ao(() => {
        Yn(() => {
          this.$$r = !0;
          for (const i of ln(this.$$c)) {
            if (!this.$$p_d[i]?.reflect) continue;
            this.$$d[i] = this.$$c[i];
            const a = rn(
              i,
              this.$$d[i],
              this.$$p_d,
              "toAttribute"
            );
            a == null ? this.removeAttribute(this.$$p_d[i].attribute || i) : this.setAttribute(this.$$p_d[i].attribute || i, a);
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
  attributeChangedCallback(e, t, n) {
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = rn(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
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
    return ln(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function rn(e, t, n, i) {
  const a = n[e]?.type;
  if (t = a === "Boolean" && typeof t != "boolean" ? t != null : t, !i || !n[e])
    return t;
  if (i === "toAttribute")
    switch (a) {
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
    switch (a) {
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
function Zo(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function Wo(e, t, n, i, a, o) {
  let s = class extends Fi {
    constructor() {
      super(e, n, a), this.$$p_d = t;
    }
    static get observedAttributes() {
      return ln(t).map(
        (f) => (t[f].attribute || f).toLowerCase()
      );
    }
  };
  return ln(t).forEach((f) => {
    Vt(s.prototype, f, {
      get() {
        return this.$$c && f in this.$$c ? this.$$c[f] : this.$$d[f];
      },
      set(c) {
        c = rn(f, c, t), this.$$d[f] = c;
        var d = this.$$c;
        if (d) {
          var m = nt(d, f)?.get;
          m ? d[f] = c : d.$set({ [f]: c });
        }
      }
    });
  }), i.forEach((f) => {
    Vt(s.prototype, f, {
      get() {
        return this.$$c?.[f];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
const Vi = new TextEncoder();
function Jo(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function Ko(e, t = "SHA-256", n = 1e5) {
  const i = Date.now().toString(16);
  e || (e = Math.round(Math.random() * n));
  const a = await Mi(i, e, t);
  return {
    algorithm: t,
    challenge: a,
    salt: i,
    signature: ""
  };
}
async function Mi(e, t, n) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return Jo(
    await crypto.subtle.digest(
      n.toUpperCase(),
      Vi.encode(e + t)
    )
  );
}
function Xo(e, t, n = "SHA-256", i = 1e6, a = 0) {
  const o = new AbortController(), s = Date.now();
  return {
    promise: (async () => {
      for (let c = a; c <= i; c += 1) {
        if (o.signal.aborted)
          return null;
        if (await Mi(t, c, n) === e)
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
function Yr() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function zo(e) {
  const t = atob(e), n = new Uint8Array(t.length);
  for (let i = 0; i < t.length; i++)
    n[i] = t.charCodeAt(i);
  return n;
}
function Qo(e, t = 12) {
  const n = new Uint8Array(t);
  for (let i = 0; i < t; i++)
    n[i] = e % 256, e = Math.floor(e / 256);
  return n;
}
async function ea(e, t = "", n = 1e6, i = 0) {
  const a = "AES-GCM", o = new AbortController(), s = Date.now(), f = async () => {
    for (let m = i; m <= n; m += 1) {
      if (o.signal.aborted || !c || !d)
        return null;
      try {
        const h = await crypto.subtle.decrypt(
          {
            name: a,
            iv: Qo(m)
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
    d = zo(e);
    const m = await crypto.subtle.digest(
      "SHA-256",
      Vi.encode(t)
    );
    c = await crypto.subtle.importKey(
      "raw",
      m,
      a,
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
var y = /* @__PURE__ */ ((e) => (e.CODE = "code", e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(y || {}), Q = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.LOADING = "loading", e.PLAYING = "playing", e.PAUSED = "paused", e.READY = "ready", e))(Q || {});
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (e) => nn(globalThis.altchaI18n.store)[e],
  set: (e, t) => {
    Object.assign(nn(globalThis.altchaI18n.store), {
      [e]: t
    }), globalThis.altchaI18n.store.set(nn(globalThis.altchaI18n.store));
  },
  store: Uo({})
};
const ta = {
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
globalThis.altchaI18n.set("en", ta);
const Sn = (e, t) => {
  let n = /* @__PURE__ */ ro(() => Ul(t?.(), 24));
  var i = la();
  Ae(() => {
    $(i, "width", l(n)), $(i, "height", l(n));
  }), B(e, i);
};
function na(e, t) {
  e.code === "Space" && (e.preventDefault(), e.stopImmediatePropagation(), t());
}
function ra(e, t) {
  e.preventDefault(), t();
}
function ia(e, t, n, i, a, o, s, f) {
  [
    y.UNVERIFIED,
    y.ERROR,
    y.EXPIRED,
    y.CODE
  ].includes(l(t)) ? n() !== !1 && l(i)?.reportValidity() === !1 ? p(a, !1) : o() ? s() : f() : p(a, !0);
}
var la = /* @__PURE__ */ pn('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="altcha-spinner"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor"></path></svg>'), oa = /* @__PURE__ */ pe('<input type="hidden">'), aa = /* @__PURE__ */ pe('<div><a target="_blank" class="altcha-logo" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor"></path></svg></a></div>'), sa = /* @__PURE__ */ pn('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg>'), ua = /* @__PURE__ */ pn('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z"></path></svg>'), fa = /* @__PURE__ */ pn('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"></path></svg>'), ca = /* @__PURE__ */ pe('<button type="button" class="altcha-code-challenge-audio"><!></button>'), da = /* @__PURE__ */ pe("<audio hidden autoplay><source></audio>"), va = /* @__PURE__ */ pe('<div class="altcha-code-challenge" role="dialog"><div class="altcha-code-challenge-arrow"></div> <form data-code-challenge-form="1"><img class="altcha-code-challenge-image" alt=""> <input type="text" autocomplete="off" name="code" class="altcha-code-challenge-input" required> <div class="altcha-code-challenge-buttons"><div class="altcha-code-challenge-buttons-left"><!> <button type="button" class="altcha-code-challenge-reload"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z"></path></svg></button></div> <button type="submit" class="altcha-code-challenge-verify"><!> </button></div> <!></form></div>'), ha = /* @__PURE__ */ pe("<div><!></div>"), ga = /* @__PURE__ */ pe("<div><!></div>"), _a = /* @__PURE__ */ pe('<div class="altcha-error"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg> <!></div>'), ma = /* @__PURE__ */ pe('<div class="altcha-footer"><div><!></div></div>'), ba = /* @__PURE__ */ pe('<div class="altcha-anchor-arrow"></div>'), pa = /* @__PURE__ */ pe('<!> <div class="altcha"><div class="altcha-main"><div><!> <input type="checkbox"></div> <label class="altcha-label"><!></label> <!> <!> <!></div> <!> <!> <!></div>', 1);
function ya(e, t) {
  xi(t, !0);
  const [n, i] = Bo(), a = () => jo(Ui, "$altchaI18nStore", n);
  let o = C(t, "auto", 7, void 0), s = C(t, "blockspam", 7, void 0), f = C(t, "challengeurl", 7, void 0), c = C(t, "challengejson", 7, void 0), d = C(t, "credentials", 7, void 0), m = C(t, "customfetch", 7, void 0), h = C(t, "debug", 7, !1), b = C(t, "delay", 7, 0), w = C(t, "disableautofocus", 7, !1), F = C(t, "refetchonexpire", 7, !0), V = C(t, "disablerefetchonexpire", 23, () => !F()), q = C(t, "expire", 7, void 0), R = C(t, "floating", 7, void 0), ee = C(t, "floatinganchor", 7, void 0), ke = C(t, "floatingoffset", 7, void 0), z = C(t, "floatingpersist", 7, !1), U = C(t, "hidefooter", 7, !1), se = C(t, "hidelogo", 7, !1), He = C(t, "id", 7, void 0), Ht = C(t, "language", 7, void 0), Ye = C(t, "name", 7, "altcha"), Ge = C(t, "maxnumber", 7, 1e6), Ct = C(t, "mockerror", 7, !1), De = C(t, "obfuscated", 7, void 0), ge = C(t, "overlay", 7, void 0), At = C(t, "overlaycontent", 7, void 0), Yt = C(t, "plugins", 7, void 0), Ze = C(t, "sentinel", 7, void 0), ye = C(t, "spamfilter", 7, !1), st = C(t, "strings", 7, void 0), de = C(t, "test", 7, !1), te = C(t, "verifyurl", 7, void 0), ut = C(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), It = C(t, "workerurl", 7, void 0);
  const { altchaI18n: qi } = globalThis, Ui = qi.store, Kn = ["SHA-256", "SHA-384", "SHA-512"], ji = "https://altcha.org/", Le = (r, u) => {
    t.$$host.dispatchEvent(new CustomEvent(r, { detail: u }));
  }, Xn = document.documentElement.lang?.split("-")?.[0], yn = /* @__PURE__ */ Lt(() => f() && new URL(f(), location.origin).host.endsWith(".altcha.org") && !!f()?.includes("apiKey=ckey_")), Gt = /* @__PURE__ */ Lt(() => c() ? cr(c()) : void 0), Bi = /* @__PURE__ */ Lt(() => st() ? cr(st()) : {}), L = /* @__PURE__ */ Lt(() => ({
    ...er(a()),
    ...l(Bi)
  })), zn = /* @__PURE__ */ Lt(() => `${He() || Ye()}_checkbox_${Math.round(Math.random() * 1e8)}`);
  let We = /* @__PURE__ */ D(null), xt = /* @__PURE__ */ D(!1), Y = /* @__PURE__ */ D(null), I = /* @__PURE__ */ D(Ve(y.UNVERIFIED)), M = /* @__PURE__ */ D(void 0), Rt = /* @__PURE__ */ D(null), Pe = /* @__PURE__ */ D(null), ue = /* @__PURE__ */ D(null), wn = /* @__PURE__ */ D(null), ft = /* @__PURE__ */ D(null), T = /* @__PURE__ */ D(null), $t = /* @__PURE__ */ D(null), Je = /* @__PURE__ */ D(null), we = null, G = /* @__PURE__ */ D(null), Ke = /* @__PURE__ */ D(!1), Oe = [], En = /* @__PURE__ */ D(!1), Ee = /* @__PURE__ */ D(null);
  Dn(() => {
    nl(l(Je));
  }), Dn(() => {
    rl(l(I));
  }), qo(() => {
    Hi(), p($t, null), l(T) && (l(T).removeEventListener("submit", or), l(T).removeEventListener("reset", ar), l(T).removeEventListener("focusin", lr), p(T, null)), we && (clearTimeout(we), we = null), document.removeEventListener("click", rr), document.removeEventListener("scroll", ir), window.removeEventListener("resize", fr);
  }), Pi(() => {
    x("mounted", "2.2.4"), x("workers", ut()), Wi(), x("plugins", Oe.length ? Oe.map((r) => r.constructor.pluginName).join(", ") : "none"), de() && x("using test mode"), q() && An(q()), o() !== void 0 && x("auto", o()), R() !== void 0 && gr(R()), p(T, l(M)?.closest("form"), !0), l(T) && (l(T).addEventListener("submit", or, { capture: !0 }), l(T).addEventListener("reset", ar), (o() === "onfocus" || z() === "focus") && l(T).addEventListener("focusin", lr)), ge() && _r(!0), o() === "onload" && (De() ? kt() : Se()), l(yn) && (U() || se()) && x("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      Le("load");
    });
  });
  function Zt(r, u) {
    return btoa(JSON.stringify({
      algorithm: r.algorithm,
      challenge: r.challenge,
      number: u.number,
      salt: r.salt,
      signature: r.signature,
      test: de() ? !0 : void 0,
      took: u.took
    }));
  }
  function Hi() {
    for (const r of Oe)
      r.destroy();
  }
  function Qn() {
    f() && !V() && l(I) === y.VERIFIED ? Se() : Xe(y.EXPIRED, l(L).expired);
  }
  async function Yi() {
    if (Ct())
      throw x("mocking error"), new Error("Mocked error.");
    if (l(Gt))
      return x("using provided json data"), dr(l(Gt).salt), l(Gt);
    if (de())
      return x("generating test challenge", { test: de() }), Ko(typeof de() != "boolean" ? +de() : void 0);
    {
      if (!f() && l(T)) {
        const g = l(T).getAttribute("action");
        g?.includes("/form/") && f(g + "/altcha");
      }
      if (!f())
        throw new Error("Attribute challengeurl not set.");
      x("fetching challenge from", f());
      const r = {
        credentials: typeof d() == "boolean" ? "include" : d(),
        headers: ye() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      }, u = await Cn()(f(), r);
      if (!u || !(u instanceof Response))
        throw new Error("Custom fetch function did not return a response.");
      if (u.status !== 200)
        throw new Error(`Server responded with ${u.status}.`);
      const v = u.headers.get("X-Altcha-Config"), _ = await u.json();
      if (dr(_.salt), v)
        try {
          const g = JSON.parse(v);
          g && typeof g == "object" && (g.verifyurl && !g.verifyurl.startsWith("fn:") && (g.verifyurl = nr(g.verifyurl)), pr(g));
        } catch (g) {
          x("unable to configure from X-Altcha-Config", g);
        }
      return _;
    }
  }
  function Gi(r) {
    const u = l(T)?.querySelector(typeof r == "string" ? `input[name="${r}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return u?.value?.slice(u.value.indexOf("@")) || void 0;
  }
  function Cn() {
    let r = fetch;
    if (m())
      if (x("using customfetch"), typeof m() == "string") {
        if (r = globalThis[m()] || null, !r)
          throw new Error(`Custom fetch function not found: ${m()}`);
      } else
        r = m();
    return r;
  }
  function er(r, u = [
    Ht() || "",
    document.documentElement.lang || "",
    ...navigator.languages
  ]) {
    const v = Object.keys(r).map((g) => g.toLowerCase()), _ = u.reduce(
      (g, A) => (A = A.toLowerCase(), g || (r[A] ? A : null) || v.find((N) => A.split("-")[0] === N.split("-")[0]) || null),
      null
    );
    return r[_ || "en"];
  }
  function Zi() {
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
  function tr(r) {
    return [
      ...l(T)?.querySelectorAll(r?.length ? r.map((v) => `input[name="${v}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])') || []
    ].reduce(
      (v, _) => {
        const g = _.name, A = _.value;
        return g && A && (v[g] = /\n/.test(A) ? A.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : A), v;
      },
      {}
    );
  }
  function nr(r, u) {
    const v = new URL(f() || location.origin), _ = new URL(r, v);
    if (_.search || (_.search = v.search), u)
      for (const g in u)
        u[g] !== void 0 && u[g] !== null && _.searchParams.set(g, u[g]);
    return _.toString();
  }
  function Wi() {
    const r = Yt() !== void 0 ? Yt().split(",") : void 0;
    for (const u of globalThis.altchaPlugins)
      (!r || r.includes(u.pluginName)) && Oe.push(new u({
        el: l(M),
        clarify: kt,
        dispatch: Le,
        getConfiguration: yr,
        getFloatingAnchor: wr,
        getState: Er,
        log: x,
        reset: Xe,
        solve: br,
        setState: Ce,
        setFloatingAnchor: Cr,
        verify: Se
      }));
  }
  function x(...r) {
    (h() || r.some((u) => u instanceof Error)) && console[r[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${Ye()}]`, ...r);
  }
  function Ji() {
    p(G, Q.PAUSED, !0);
  }
  function Ki(r) {
    p(G, Q.ERROR, !0);
  }
  function Xi() {
    p(G, Q.READY, !0);
  }
  function zi() {
    p(G, Q.LOADING, !0);
  }
  function Qi() {
    p(G, Q.PLAYING, !0);
  }
  function el() {
    p(G, Q.PAUSED, !0);
  }
  function tl(r) {
    if (r.preventDefault(), r.stopPropagation(), l(Y)) {
      const u = new FormData(r.target), v = String(u.get("code"));
      if (te()?.startsWith("fn:")) {
        const _ = te().replace(/^fn:/, "");
        if (x(`calling ${_} function instead of verifyurl`), !(_ in globalThis))
          throw new Error(`Global function "${_}" is undefined.`);
        return globalThis[_]({
          challenge: l(Y).challenge,
          code: v,
          solution: l(Y).solution
        });
      }
      p(Ke, !0), vr(Zt(l(Y).challenge, l(Y).solution), v).then(({ reason: _, verified: g }) => {
        g ? (p(Y, null), Ce(y.VERIFIED), x("verified"), kn().then(() => {
          l(wn)?.focus(), Le("verified", { payload: l(Ee) }), o() === "onsubmit" ? hr(l($t)) : ge() && St();
        })) : (Xe(), p(Je, _ || "Verification failed", !0));
      }).catch((_) => {
        p(Y, null), Ce(y.ERROR, _), x("sentinel verification failed:", _);
      }).finally(() => {
        p(Ke, !1);
      });
    }
  }
  function rr(r) {
    const u = r.target;
    R() && u && !l(M).contains(u) && (l(I) === y.VERIFIED && z() === !1 || l(I) === y.VERIFIED && z() === "focus" && !l(T)?.matches(":focus-within") || o() === "off" && l(I) === y.UNVERIFIED) && St();
  }
  function ir() {
    R() && l(I) !== y.UNVERIFIED && Tt();
  }
  function nl(r) {
    for (const u of Oe)
      typeof u.onErrorChange == "function" && u.onErrorChange(l(Je));
  }
  function lr(r) {
    l(I) === y.UNVERIFIED ? Se() : R() && z() === "focus" && l(I) === y.VERIFIED && Wt();
  }
  function or(r) {
    r.target?.hasAttribute("data-code-challenge-form") || (p($t, r.submitter, !0), l(T) && o() === "onsubmit" ? (l($t)?.blur(), l(I) === y.UNVERIFIED ? (r.preventDefault(), r.stopPropagation(), Se().then(() => {
      hr(l($t));
    })) : l(I) !== y.VERIFIED && (r.preventDefault(), r.stopPropagation(), l(I) === y.VERIFYING && sr())) : l(T) && R() && o() === "off" && l(I) === y.UNVERIFIED && (r.preventDefault(), r.stopPropagation(), Wt()));
  }
  function ar() {
    Xe();
  }
  function sr() {
    l(I) === y.VERIFYING && l(L).waitAlert && alert(l(L).waitAlert);
  }
  function ur() {
    l(Pe) ? l(Pe).paused ? (l(Pe).currentTime = 0, l(Pe).play()) : l(Pe).pause() : (p(En, !0), requestAnimationFrame(() => {
      l(Pe)?.play();
    }));
  }
  function rl(r) {
    for (const u of Oe)
      typeof u.onStateChange == "function" && u.onStateChange(l(I));
    R() && l(I) !== y.UNVERIFIED && requestAnimationFrame(() => {
      Tt();
    }), p(xt, l(I) === y.VERIFIED), ge() && l(ue) && (l(I) !== y.UNVERIFIED ? Wt() : St());
  }
  function fr() {
    R() && Tt();
  }
  function cr(r) {
    return JSON.parse(r);
  }
  function dr(r) {
    const u = new URLSearchParams(r.split("?")?.[1]), v = u.get("expires") || u.get("expire");
    if (v) {
      const _ = new Date(+v * 1e3), g = isNaN(_.getTime()) ? 0 : _.getTime() - Date.now();
      g > 0 && An(g);
    } else we && (clearTimeout(we), we = null);
  }
  async function il(r) {
    if (!te())
      throw new Error("Attribute verifyurl not set.");
    x("requesting server verification from", te());
    const u = { payload: r };
    if (ye() !== !1) {
      const {
        blockedCountries: g,
        classifier: A,
        disableRules: N,
        email: H,
        expectedLanguages: j,
        expectedCountries: ie,
        fields: le,
        ipAddress: Qe,
        text: dt,
        timeZone: et
      } = Zi();
      u.blockedCountries = g, u.classifier = A, u.disableRules = N, u.email = H === !1 ? void 0 : Gi(H), u.expectedCountries = ie, u.expectedLanguages = j || (Xn ? [Xn] : void 0), u.fields = le === !1 ? void 0 : tr(le), u.ipAddress = Qe === !1 ? void 0 : Qe || "auto", u.text = dt, u.timeZone = et === !1 ? void 0 : et || Yr();
    }
    const v = await Cn()(te(), {
      body: JSON.stringify(u),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (!v || !(v instanceof Response))
      throw new Error("Custom fetch function did not return a response.");
    if (v.status !== 200)
      throw new Error(`Server responded with ${v.status}.`);
    const _ = await v.json();
    if (_?.payload && p(Ee, _.payload, !0), Le("serververification", _), s() && _.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  async function vr(r, u) {
    if (!te())
      throw new Error("Attribute verifyurl not set.");
    x("requesting sentinel verification from", te());
    const v = { code: u, payload: r };
    Ze() && (v.fields = Ze().fields ? tr() : void 0, v.timeZone = Ze().timeZone ? Yr() : void 0);
    const _ = await Cn()(te(), {
      body: JSON.stringify(v),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (!_ || !(_ instanceof Response))
      throw new Error("Fetch function did not return a response.");
    if (_.status !== 200)
      throw new Error(`Server responded with ${_.status}.`);
    const g = await _.json();
    return g?.payload && p(Ee, g.payload, !0), Le("sentinelverification", g), g;
  }
  function hr(r) {
    l(T) && "requestSubmit" in l(T) ? l(T).requestSubmit(r) : l(T)?.reportValidity() && (r ? r.click() : l(T).submit());
  }
  function An(r) {
    x("expire", r), we && (clearTimeout(we), we = null), r < 1 ? Qn() : we = setTimeout(Qn, r);
  }
  function gr(r) {
    x("floating", r), R() !== r && (l(M).style.left = "", l(M).style.top = ""), R(r === !0 || r === "" ? "auto" : r === !1 || r === "false" ? void 0 : R()), R() ? (o() || o("onsubmit"), document.addEventListener("scroll", ir), document.addEventListener("click", rr), window.addEventListener("resize", fr)) : o() === "onsubmit" && o(void 0);
  }
  function _r(r) {
    if (x("overlay", r), ge(r), r) {
      if (o() || o("onsubmit"), l(ue) && l(M).parentElement && l(ue).replaceWith(l(M).parentElement), l(M)?.parentElement?.parentElement) {
        p(ue, document.createElement("div"), !0), l(M).parentElement.parentElement.appendChild(l(ue));
        const u = document.createElement("div"), v = document.createElement("button");
        v.type = "button", v.innerHTML = "&times;", v.addEventListener("click", (_) => {
          _.preventDefault(), Xe();
        }), l(ue).classList.add("altcha-overlay-backdrop"), v.classList.add("altcha-overlay-close-button"), u.classList.add("altcha-overlay"), l(ue).append(u), u.append(v), At() && u.append(...document.querySelectorAll(At())), u.append(l(M).parentElement);
      }
    } else l(ue) && l(M).parentElement && (l(ue).replaceWith(l(M).parentElement), l(M).style.display = "block");
  }
  function mr(r) {
    if (!r.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (r.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!Kn.includes(r.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${Kn.join(", ")}`);
    if (!r.challenge || r.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!r.salt || r.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function br(r) {
    let u = null, v = null;
    if ("Worker" in window) {
      try {
        u = ll(r, r.maxNumber || r.maxnumber || Ge()), p(We, u.controller, !0), v = await u.promise;
      } catch (_) {
        x(_);
      } finally {
        p(We, null);
      }
      if (v === null || v?.number !== void 0 || "obfuscated" in r)
        return { data: r, solution: v };
    }
    if ("obfuscated" in r) {
      const _ = await ea(r.obfuscated, r.key, r.maxNumber || r.maxnumber);
      return { data: r, solution: await _.promise };
    }
    u = Xo(r.challenge, r.salt, r.algorithm, r.maxNumber || r.maxnumber || Ge()), p(We, u.controller, !0);
    try {
      v = await u.promise;
    } catch (_) {
      x(_);
    } finally {
      p(We, null);
    }
    return { data: r, solution: v };
  }
  function ll(r, u = typeof de() == "number" ? de() : r.maxNumber || r.maxnumber || Ge(), v = Math.ceil(ut())) {
    const _ = new AbortController(), g = [];
    v = Math.min(16, u, Math.max(1, v));
    for (let H = 0; H < v; H++)
      g.push(altchaCreateWorker(It()));
    const A = Math.ceil(u / v);
    return { promise: (async () => {
      const H = await Promise.all(g.map((j, ie) => {
        const le = ie * A;
        return _.signal.addEventListener("abort", () => {
          j.postMessage({ type: "abort" });
        }), new Promise((Qe) => {
          j.addEventListener("message", (dt) => {
            if (dt.data)
              for (const et of g)
                et !== j && et.postMessage({ type: "abort" });
            Qe(dt.data);
          }), j.postMessage({
            payload: r,
            max: le + A,
            start: le,
            type: "work"
          });
        });
      }));
      for (const j of g)
        j.terminate();
      return H.find((j) => !!j) || null;
    })(), controller: _ };
  }
  async function kt() {
    if (!De()) {
      Ce(y.ERROR);
      return;
    }
    const r = Oe.find((u) => u.constructor.pluginName === "obfuscation");
    if (!r || !("clarify" in r)) {
      Ce(y.ERROR), x("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in r && typeof r.clarify == "function")
      return r.clarify();
  }
  function pr(r) {
    r.obfuscated !== void 0 && De(r.obfuscated), r.auto !== void 0 && (o(r.auto), o() === "onload" && (De() ? kt() : Se())), r.blockspam !== void 0 && s(!!r.blockspam), r.customfetch !== void 0 && m(r.customfetch), r.floatinganchor !== void 0 && ee(r.floatinganchor), r.delay !== void 0 && b(r.delay), r.floatingoffset !== void 0 && ke(r.floatingoffset), r.floating !== void 0 && gr(r.floating), r.expire !== void 0 && (An(r.expire), q(r.expire)), r.challenge && (c(typeof r.challenge == "string" ? r.challenge : JSON.stringify(r.challenge)), mr(l(Gt))), r.challengeurl !== void 0 && f(r.challengeurl), r.debug !== void 0 && h(!!r.debug), r.hidefooter !== void 0 && U(!!r.hidefooter), r.hidelogo !== void 0 && se(!!r.hidelogo), r.language !== void 0 && st(er(a(), [r.language])), r.maxnumber !== void 0 && Ge(+r.maxnumber), r.mockerror !== void 0 && Ct(!!r.mockerror), r.name !== void 0 && Ye(r.name), r.overlaycontent !== void 0 && At(r.overlaycontent), r.overlay !== void 0 && _r(r.overlay), r.refetchonexpire !== void 0 && V(!r.refetchonexpire), r.disablerefetchonexpire !== void 0 && V(!r.disablerefetchonexpire), r.sentinel !== void 0 && typeof r.sentinel == "object" && Ze(r.sentinel), r.spamfilter !== void 0 && ye(typeof r.spamfilter == "object" ? r.spamfilter : !!r.spamfilter), r.strings && st(typeof r.strings == "string" ? r.strings : JSON.stringify(r.strings)), r.test !== void 0 && de(typeof r.test == "number" ? r.test : !!r.test), r.verifyurl !== void 0 && te(r.verifyurl), r.workers !== void 0 && ut(+r.workers), r.workerurl !== void 0 && It(r.workerurl);
  }
  function yr() {
    return {
      auto: o(),
      blockspam: s(),
      challengeurl: f(),
      debug: h(),
      delay: b(),
      disableautofocus: w(),
      disablerefetchonexpire: V(),
      expire: q(),
      floating: R(),
      floatinganchor: ee(),
      floatingoffset: ke(),
      hidefooter: U(),
      hidelogo: se(),
      name: Ye(),
      maxnumber: Ge(),
      mockerror: Ct(),
      obfuscated: De(),
      overlay: ge(),
      refetchonexpire: !V(),
      spamfilter: ye(),
      strings: l(L),
      test: de(),
      verifyurl: te(),
      workers: ut(),
      workerurl: It()
    };
  }
  function wr() {
    return l(ft);
  }
  function ol(r) {
    return Oe.find((u) => u.constructor.pluginName === r);
  }
  function Er() {
    return l(I);
  }
  function St() {
    l(M).style.display = "none", ge() && l(ue) && (l(ue).style.display = "none");
  }
  function Tt(r = 20) {
    if (l(M))
      if (l(ft) || p(ft, (ee() ? document.querySelector(ee()) : l(T)?.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || l(T), !0), l(ft)) {
        const u = parseInt(ke(), 10) || 12, v = l(ft).getBoundingClientRect(), _ = l(M).getBoundingClientRect(), g = document.documentElement.clientHeight, A = document.documentElement.clientWidth, N = R() === "auto" ? v.bottom + _.height + u + r > g : R() === "top", H = Math.max(r, Math.min(A - r - _.width, v.left + v.width / 2 - _.width / 2));
        if (N ? l(M).style.top = `${v.top - (_.height + u)}px` : l(M).style.top = `${v.bottom + u}px`, l(M).style.left = `${H}px`, l(M).setAttribute("data-floating", N ? "top" : "bottom"), l(Rt)) {
          const j = l(Rt).getBoundingClientRect();
          l(Rt).style.left = v.left - H + v.width / 2 - j.width / 2 + "px";
        }
      } else
        x("unable to find floating anchor element");
  }
  function Xe(r = y.UNVERIFIED, u = null) {
    l(We) && (l(We).abort(), p(We, null)), p(xt, !1), p(Ee, null), p(Y, null), p(En, !1), p(G, null), Ce(r, u);
  }
  function Cr(r) {
    p(ft, r, !0);
  }
  function Ce(r, u = null) {
    p(I, r, !0), p(Je, u, !0), Le("statechange", {
      payload: l(Ee),
      state: l(I)
    });
  }
  function Wt() {
    l(M).style.display = "block", R() && Tt(), ge() && l(ue) && (l(ue).style.display = "flex");
  }
  async function Se() {
    return Xe(y.VERIFYING), await new Promise((r) => setTimeout(r, b() || 0)), Yi().then((r) => (mr(r), x("challenge", r), br(r))).then(({ data: r, solution: u }) => {
      if (x("solution", u), !u || r && "challenge" in r && !("clearText" in u)) {
        if (u?.number !== void 0 && "challenge" in r)
          if (te() && "codeChallenge" in r)
            ["INPUT", "BUTTON", "SELECT", "TEXTAREA"].includes(document.activeElement?.tagName || "") && w() === !1 && document.activeElement.blur(), p(Y, { challenge: r, solution: u }, !0);
          else {
            if (te() && Ze() !== void 0)
              return vr(Zt(r, u));
            if (te())
              return il(Zt(r, u));
            p(Ee, Zt(r, u), !0), x("payload", l(Ee));
          }
        else if (l(I) !== y.EXPIRED)
          throw x("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
      }
    }).then(() => {
      l(Y) ? (Ce(y.CODE), kn().then(() => {
        Le("code", { codeChallenge: l(Y) });
      })) : l(Ee) && (Ce(y.VERIFIED), x("verified"), kn().then(() => {
        Le("verified", { payload: l(Ee) }), ge() && St();
      }));
    }).catch((r) => {
      x(r), Ce(y.ERROR, r.message);
    });
  }
  var Ar = pa(), Ir = Dt(Ar);
  No(Ir, t, "default", {});
  var ct = K(Ir, 2), In = J(ct), Jt = J(In);
  let xr;
  var Rr = J(Jt);
  {
    var al = (r) => {
      Sn(r);
    };
    X(Rr, (r) => {
      l(I) === y.VERIFYING && r(al);
    });
  }
  var ze = K(Rr, 2);
  Ur(ze), ze.__change = [
    ia,
    I,
    ye,
    T,
    xt,
    De,
    kt,
    Se
  ], Qt(ze, (r) => p(wn, r), () => l(wn)), W(Jt);
  var Kt = K(Jt, 2), sl = J(Kt);
  {
    var ul = (r) => {
      var u = zt(), v = Dt(u);
      tt(v, () => l(L).verified), B(r, u);
    }, fl = (r, u) => {
      {
        var v = (g) => {
          var A = zt(), N = Dt(A);
          tt(N, () => l(L).verifying), B(g, A);
        }, _ = (g, A) => {
          {
            var N = (j) => {
              var ie = zt(), le = Dt(ie);
              tt(le, () => l(L).verificationRequired), B(j, ie);
            }, H = (j) => {
              var ie = zt(), le = Dt(ie);
              tt(le, () => l(L).label), B(j, ie);
            };
            X(
              g,
              (j) => {
                l(I) === y.CODE ? j(N) : j(H, !1);
              },
              A
            );
          }
        };
        X(
          r,
          (g) => {
            l(I) === y.VERIFYING ? g(v) : g(_, !1);
          },
          u
        );
      }
    };
    X(sl, (r) => {
      l(I) === y.VERIFIED ? r(ul) : r(fl, !1);
    });
  }
  W(Kt);
  var $r = K(Kt, 2);
  {
    var cl = (r) => {
      var u = oa();
      Ur(u), Ae(() => {
        $(u, "name", Ye()), Fo(u, l(Ee));
      }), B(r, u);
    };
    X($r, (r) => {
      l(I) === y.VERIFIED && r(cl);
    });
  }
  var kr = K($r, 2);
  {
    var dl = (r) => {
      var u = aa(), v = J(u);
      $(v, "href", ji), W(u), Ae(() => $(v, "aria-label", l(L).ariaLinkLabel)), B(r, u);
    };
    X(kr, (r) => {
      (se() !== !0 || l(yn)) && r(dl);
    });
  }
  var vl = K(kr, 2);
  {
    var hl = (r) => {
      var u = va(), v = K(J(u), 2), _ = J(v), g = K(_, 2);
      Io(g, !w()), g.__keydown = [
        na,
        ur
      ];
      var A = K(g, 2), N = J(A), H = J(N);
      {
        var j = (_e) => {
          var Z = ca();
          Z.__click = ur;
          var Xt = J(Z);
          {
            var Nt = (vt) => {
              Sn(vt, () => 20);
            }, El = (vt, Cl) => {
              {
                var Al = (ht) => {
                  var xn = sa();
                  B(ht, xn);
                }, Il = (ht, xn) => {
                  {
                    var xl = (gt) => {
                      var Rn = ua();
                      B(gt, Rn);
                    }, Rl = (gt) => {
                      var Rn = fa();
                      B(gt, Rn);
                    };
                    X(
                      ht,
                      (gt) => {
                        l(G) === Q.PLAYING ? gt(xl) : gt(Rl, !1);
                      },
                      xn
                    );
                  }
                };
                X(
                  vt,
                  (ht) => {
                    l(G) === Q.ERROR ? ht(Al) : ht(Il, !1);
                  },
                  Cl
                );
              }
            };
            X(Xt, (vt) => {
              l(G) === Q.LOADING ? vt(Nt) : vt(El, !1);
            });
          }
          W(Z), Ae(() => {
            $(Z, "title", l(L).getAudioChallenge), Z.disabled = l(G) === Q.LOADING || l(G) === Q.ERROR || l(Ke), $(Z, "aria-label", l(G) === Q.LOADING ? l(L).loading : l(L).getAudioChallenge);
          }), B(_e, Z);
        };
        X(H, (_e) => {
          l(Y).challenge.codeChallenge.audio && _e(j);
        });
      }
      var ie = K(H, 2);
      ie.__click = [ra, Se], W(N);
      var le = K(N, 2), Qe = J(le);
      {
        var dt = (_e) => {
          Sn(_e, () => 16);
        };
        X(Qe, (_e) => {
          l(Ke) && _e(dt);
        });
      }
      var et = K(Qe);
      W(le), W(A);
      var yl = K(A, 2);
      {
        var wl = (_e) => {
          var Z = da(), Xt = J(Z);
          W(Z), Qt(Z, (Nt) => p(Pe, Nt), () => l(Pe)), Ae((Nt) => $(Xt, "src", Nt), [
            () => nr(l(Y).challenge.codeChallenge.audio, { language: Ht() })
          ]), Fe("loadstart", Z, zi), Fe("canplay", Z, Xi), Fe("pause", Z, el), Fe("playing", Z, Qi), Fe("ended", Z, Ji), Fe("error", Xt, Ki), B(_e, Z);
        };
        X(yl, (_e) => {
          l(Y).challenge.codeChallenge.audio && l(En) && _e(wl);
        });
      }
      W(v), W(u), Ae(() => {
        $(u, "aria-label", l(L).verificationRequired), $(_, "src", l(Y).challenge.codeChallenge.image), $(g, "minlength", l(Y).challenge.codeChallenge.length || 1), $(g, "maxlength", l(Y).challenge.codeChallenge.length), $(g, "placeholder", l(L).enterCode), $(g, "aria-label", l(G) === Q.LOADING ? l(L).loading : l(G) === Q.PLAYING ? "" : l(L).enterCodeAria), $(g, "aria-live", l(G) ? "assertive" : "polite"), $(g, "aria-busy", l(G) === Q.LOADING), g.disabled = l(Ke), $(ie, "aria-label", l(L).reload), $(ie, "title", l(L).reload), ie.disabled = l(Ke), le.disabled = l(Ke), $(le, "aria-label", l(L).verify), ko(et, ` ${l(L).verify ?? ""}`);
      }), Fe("submit", v, tl, !0), B(r, u);
    };
    X(vl, (r) => {
      l(Y)?.challenge.codeChallenge && r(hl);
    });
  }
  W(In);
  var Sr = K(In, 2);
  {
    var gl = (r) => {
      var u = _a(), v = K(J(u), 2);
      {
        var _ = (A) => {
          var N = ha(), H = J(N);
          tt(H, () => l(L).expired), W(N), Ae(() => $(N, "title", l(Je))), B(A, N);
        }, g = (A) => {
          var N = ga(), H = J(N);
          tt(H, () => l(L).error), W(N), Ae(() => $(N, "title", l(Je))), B(A, N);
        };
        X(v, (A) => {
          l(I) === y.EXPIRED ? A(_) : A(g, !1);
        });
      }
      W(u), B(r, u);
    };
    X(Sr, (r) => {
      (l(Je) || l(I) === y.EXPIRED) && r(gl);
    });
  }
  var Tr = K(Sr, 2);
  {
    var _l = (r) => {
      var u = ma(), v = J(u), _ = J(v);
      tt(_, () => l(L).footer), W(v), W(u), B(r, u);
    };
    X(Tr, (r) => {
      l(L).footer && (U() !== !0 || l(yn)) && r(_l);
    });
  }
  var ml = K(Tr, 2);
  {
    var bl = (r) => {
      var u = ba();
      Qt(u, (v) => p(Rt, v), () => l(Rt)), B(r, u);
    };
    X(ml, (r) => {
      R() && r(bl);
    });
  }
  W(ct), Qt(ct, (r) => p(M, r), () => l(M)), Ae(
    (r) => {
      $(ct, "data-state", l(I)), $(ct, "data-floating", R()), $(ct, "data-overlay", ge()), xr = Lo(Jt, 1, "altcha-checkbox", null, xr, r), $(ze, "id", l(zn)), ze.required = o() !== "onsubmit" && (!R() || o() !== "off"), $(Kt, "for", l(zn));
    },
    [
      () => ({
        "altcha-checkbox-verifying": l(I) === y.VERIFYING
      })
    ]
  ), Fe("invalid", ze, sr), Mo(ze, () => l(xt), (r) => p(xt, r)), B(e, Ar);
  var pl = Ri({
    clarify: kt,
    configure: pr,
    getConfiguration: yr,
    getFloatingAnchor: wr,
    getPlugin: ol,
    getState: Er,
    hide: St,
    repositionFloating: Tt,
    reset: Xe,
    setFloatingAnchor: Cr,
    setState: Ce,
    show: Wt,
    verify: Se,
    get auto() {
      return o();
    },
    set auto(r = void 0) {
      o(r), E();
    },
    get blockspam() {
      return s();
    },
    set blockspam(r = void 0) {
      s(r), E();
    },
    get challengeurl() {
      return f();
    },
    set challengeurl(r = void 0) {
      f(r), E();
    },
    get challengejson() {
      return c();
    },
    set challengejson(r = void 0) {
      c(r), E();
    },
    get credentials() {
      return d();
    },
    set credentials(r = void 0) {
      d(r), E();
    },
    get customfetch() {
      return m();
    },
    set customfetch(r = void 0) {
      m(r), E();
    },
    get debug() {
      return h();
    },
    set debug(r = !1) {
      h(r), E();
    },
    get delay() {
      return b();
    },
    set delay(r = 0) {
      b(r), E();
    },
    get disableautofocus() {
      return w();
    },
    set disableautofocus(r = !1) {
      w(r), E();
    },
    get refetchonexpire() {
      return F();
    },
    set refetchonexpire(r = !0) {
      F(r), E();
    },
    get disablerefetchonexpire() {
      return V();
    },
    set disablerefetchonexpire(r = !F) {
      V(r), E();
    },
    get expire() {
      return q();
    },
    set expire(r = void 0) {
      q(r), E();
    },
    get floating() {
      return R();
    },
    set floating(r = void 0) {
      R(r), E();
    },
    get floatinganchor() {
      return ee();
    },
    set floatinganchor(r = void 0) {
      ee(r), E();
    },
    get floatingoffset() {
      return ke();
    },
    set floatingoffset(r = void 0) {
      ke(r), E();
    },
    get floatingpersist() {
      return z();
    },
    set floatingpersist(r = !1) {
      z(r), E();
    },
    get hidefooter() {
      return U();
    },
    set hidefooter(r = !1) {
      U(r), E();
    },
    get hidelogo() {
      return se();
    },
    set hidelogo(r = !1) {
      se(r), E();
    },
    get id() {
      return He();
    },
    set id(r = void 0) {
      He(r), E();
    },
    get language() {
      return Ht();
    },
    set language(r = void 0) {
      Ht(r), E();
    },
    get name() {
      return Ye();
    },
    set name(r = "altcha") {
      Ye(r), E();
    },
    get maxnumber() {
      return Ge();
    },
    set maxnumber(r = 1e6) {
      Ge(r), E();
    },
    get mockerror() {
      return Ct();
    },
    set mockerror(r = !1) {
      Ct(r), E();
    },
    get obfuscated() {
      return De();
    },
    set obfuscated(r = void 0) {
      De(r), E();
    },
    get overlay() {
      return ge();
    },
    set overlay(r = void 0) {
      ge(r), E();
    },
    get overlaycontent() {
      return At();
    },
    set overlaycontent(r = void 0) {
      At(r), E();
    },
    get plugins() {
      return Yt();
    },
    set plugins(r = void 0) {
      Yt(r), E();
    },
    get sentinel() {
      return Ze();
    },
    set sentinel(r = void 0) {
      Ze(r), E();
    },
    get spamfilter() {
      return ye();
    },
    set spamfilter(r = !1) {
      ye(r), E();
    },
    get strings() {
      return st();
    },
    set strings(r = void 0) {
      st(r), E();
    },
    get test() {
      return de();
    },
    set test(r = !1) {
      de(r), E();
    },
    get verifyurl() {
      return te();
    },
    set verifyurl(r = void 0) {
      te(r), E();
    },
    get workers() {
      return ut();
    },
    set workers(r = Math.min(16, navigator.hardwareConcurrency || 8)) {
      ut(r), E();
    },
    get workerurl() {
      return It();
    },
    set workerurl(r = void 0) {
      It(r), E();
    }
  });
  return i(), pl;
}
$o(["change", "keydown", "click"]);
customElements.define("altcha-widget", Wo(
  ya,
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
globalThis.altchaCreateWorker = (e) => new Worker(new URL(e || "./worker.js", import.meta.url));
export {
  ya as Altcha
};
