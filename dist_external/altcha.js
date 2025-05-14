var ul = Object.defineProperty;
var bn = (e) => {
  throw TypeError(e);
};
var fl = (e, t, r) => t in e ? ul(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var me = (e, t, r) => fl(e, typeof t != "symbol" ? t + "" : t, r), pn = (e, t, r) => t.has(e) || bn("Cannot " + r);
var ae = (e, t, r) => (pn(e, t, "read from private field"), r ? r.call(e) : t.get(e)), _r = (e, t, r) => t.has(e) ? bn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), mr = (e, t, r, i) => (pn(e, t, "write to private field"), i ? i.call(e, r) : t.set(e, r), r);
const cl = "5";
var Pn;
typeof window < "u" && ((Pn = window.__svelte ?? (window.__svelte = {})).v ?? (Pn.v = /* @__PURE__ */ new Set())).add(cl);
const dl = 1, vl = 4, hl = 8, gl = 16, _l = 1, ml = 2, Ir = "[", On = "[!", Fn = "]", ht = {}, se = Symbol(), wl = "http://www.w3.org/1999/xhtml", En = !1, ye = 2, Vn = 4, Qt = 8, Rr = 16, Oe = 32, nt = 64, Ht = 128, ge = 256, Yt = 512, de = 1024, Fe = 2048, wt = 4096, gt = 8192, er = 16384, yl = 32768, kr = 65536, bl = 1 << 19, Mn = 1 << 20, xt = Symbol("$state"), Un = Symbol("legacy props"), pl = Symbol("");
var qn = Array.isArray, El = Array.prototype.indexOf, Cl = Array.from, Gt = Object.keys, Zt = Object.defineProperty, tt = Object.getOwnPropertyDescriptor, Al = Object.getOwnPropertyDescriptors, Il = Object.prototype, Rl = Array.prototype, jn = Object.getPrototypeOf;
function Bn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function kl(e, t, r = !1) {
  return e === void 0 ? r ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
const $l = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Tt = [], St = [];
function Hn() {
  var e = Tt;
  Tt = [], Bn(e);
}
function Yn() {
  var e = St;
  St = [], Bn(e);
}
function $r(e) {
  Tt.length === 0 && queueMicrotask(Hn), Tt.push(e);
}
function xl(e) {
  St.length === 0 && $l(Yn), St.push(e);
}
function Cn() {
  Tt.length > 0 && Hn(), St.length > 0 && Yn();
}
function Gn(e) {
  return e === this.v;
}
function Nl(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function xr(e) {
  return !Nl(e, this.v);
}
function Tl(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Sl() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Dl(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ll() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Pl() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Ol(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Fl() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Vl() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ml() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Ul() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let ql = !1;
function Ie(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Gn,
    rv: 0,
    wv: 0
  };
  return r;
}
function oe(e) {
  return /* @__PURE__ */ jl(Ie(e));
}
// @__NO_SIDE_EFFECTS__
function Zn(e, t = !1) {
  const r = Ie(e);
  return t || (r.equals = xr), r;
}
// @__NO_SIDE_EFFECTS__
function jl(e) {
  return N !== null && !we && (N.f & ye) !== 0 && (Re === null ? Jl([e]) : Re.push(e)), e;
}
function b(e, t) {
  return N !== null && !we && vi() && (N.f & (ye | Rr)) !== 0 && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (Re === null || !Re.includes(e)) && Ul(), Bl(e, t);
}
function Bl(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = ti(), Wn(e, Fe), S !== null && (S.f & de) !== 0 && (S.f & (Oe | nt)) === 0 && (Se === null ? Kl([e]) : Se.push(e))), t;
}
function Wn(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, l = 0; l < i; l++) {
      var a = r[l], s = a.f;
      (s & Fe) === 0 && ($e(a, t), (s & (de | ge)) !== 0 && ((s & ye) !== 0 ? Wn(
        /** @type {Derived} */
        a,
        wt
      ) : ir(
        /** @type {Effect} */
        a
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function He(e) {
  var t = ye | Fe, r = N !== null && (N.f & ye) !== 0 ? (
    /** @type {Derived} */
    N
  ) : null;
  return S === null || r !== null && (r.f & ge) !== 0 ? t |= ge : S.f |= Mn, {
    ctx: ne,
    deps: null,
    effects: null,
    equals: Gn,
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
function Hl(e) {
  const t = /* @__PURE__ */ He(e);
  return t.equals = xr, t;
}
function Jn(e) {
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
function Yl(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & ye) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Gl(e) {
  var t, r = S;
  We(Yl(e));
  try {
    Jn(e), t = ni(e);
  } finally {
    We(r);
  }
  return t;
}
function Kn(e) {
  var t = Gl(e), r = (Ye || (e.f & ge) !== 0) && e.deps !== null ? wt : de;
  $e(e, r), e.equals(t) || (e.v = t, e.wv = ti());
}
function tr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let O = !1;
function vt(e) {
  O = e;
}
let P;
function Ge(e) {
  if (e === null)
    throw tr(), ht;
  return P = e;
}
function _t() {
  return Ge(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Je(P)
  );
}
function G(e) {
  if (O) {
    if (/* @__PURE__ */ Je(P) !== null)
      throw tr(), ht;
    P = e;
  }
}
function Zl() {
  for (var e = 0, t = P; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === Fn) {
        if (e === 0) return t;
        e -= 1;
      } else (r === Ir || r === On) && (e += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Je(t)
    );
    t.remove(), t = i;
  }
}
function V(e, t = null, r) {
  if (typeof e != "object" || e === null || xt in e)
    return e;
  const i = jn(e);
  if (i !== Il && i !== Rl)
    return e;
  var l = /* @__PURE__ */ new Map(), a = qn(e), s = Ie(0);
  a && l.set("length", Ie(
    /** @type {any[]} */
    e.length
  ));
  var f;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(c, d, m) {
        (!("value" in m) || m.configurable === !1 || m.enumerable === !1 || m.writable === !1) && Fl();
        var h = l.get(d);
        return h === void 0 ? (h = Ie(m.value), l.set(d, h)) : b(h, V(m.value, f)), !0;
      },
      deleteProperty(c, d) {
        var m = l.get(d);
        if (m === void 0)
          d in c && l.set(d, Ie(se));
        else {
          if (a && typeof d == "string") {
            var h = (
              /** @type {Source<number>} */
              l.get("length")
            ), v = Number(d);
            Number.isInteger(v) && v < h.v && b(h, v);
          }
          b(m, se), An(s);
        }
        return !0;
      },
      get(c, d, m) {
        var I;
        if (d === xt)
          return e;
        var h = l.get(d), v = d in c;
        if (h === void 0 && (!v || (I = tt(c, d)) != null && I.writable) && (h = Ie(V(v ? c[d] : se, f)), l.set(d, h)), h !== void 0) {
          var y = o(h);
          return y === se ? void 0 : y;
        }
        return Reflect.get(c, d, m);
      },
      getOwnPropertyDescriptor(c, d) {
        var m = Reflect.getOwnPropertyDescriptor(c, d);
        if (m && "value" in m) {
          var h = l.get(d);
          h && (m.value = o(h));
        } else if (m === void 0) {
          var v = l.get(d), y = v == null ? void 0 : v.v;
          if (v !== void 0 && y !== se)
            return {
              enumerable: !0,
              configurable: !0,
              value: y,
              writable: !0
            };
        }
        return m;
      },
      has(c, d) {
        var y;
        if (d === xt)
          return !0;
        var m = l.get(d), h = m !== void 0 && m.v !== se || Reflect.has(c, d);
        if (m !== void 0 || S !== null && (!h || (y = tt(c, d)) != null && y.writable)) {
          m === void 0 && (m = Ie(h ? V(c[d], f) : se), l.set(d, m));
          var v = o(m);
          if (v === se)
            return !1;
        }
        return h;
      },
      set(c, d, m, h) {
        var K;
        var v = l.get(d), y = d in c;
        if (a && d === "length")
          for (var I = m; I < /** @type {Source<number>} */
          v.v; I += 1) {
            var D = l.get(I + "");
            D !== void 0 ? b(D, se) : I in c && (D = Ie(se), l.set(I + "", D));
          }
        v === void 0 ? (!y || (K = tt(c, d)) != null && K.writable) && (v = Ie(void 0), b(v, V(m, f)), l.set(d, v)) : (y = v.v !== se, b(v, V(m, f)));
        var F = Reflect.getOwnPropertyDescriptor(c, d);
        if (F != null && F.set && F.set.call(h, m), !y) {
          if (a && typeof d == "string") {
            var ue = (
              /** @type {Source<number>} */
              l.get("length")
            ), ie = Number(d);
            Number.isInteger(ie) && ie >= ue.v && b(ue, ie + 1);
          }
          An(s);
        }
        return !0;
      },
      ownKeys(c) {
        o(s);
        var d = Reflect.ownKeys(c).filter((v) => {
          var y = l.get(v);
          return y === void 0 || y.v !== se;
        });
        for (var [m, h] of l)
          h.v !== se && !(m in c) && d.push(m);
        return d;
      },
      setPrototypeOf() {
        Vl();
      }
    }
  );
}
function An(e, t = 1) {
  b(e, e.v + t);
}
var In, Xn, zn, Qn;
function br() {
  if (In === void 0) {
    In = window, Xn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    zn = tt(t, "firstChild").get, Qn = tt(t, "nextSibling").get, e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function rr(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Le(e) {
  return zn.call(e);
}
// @__NO_SIDE_EFFECTS__
function Je(e) {
  return Qn.call(e);
}
function Z(e, t) {
  if (!O)
    return /* @__PURE__ */ Le(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Le(P)
  );
  return r === null && (r = P.appendChild(rr())), Ge(r), r;
}
function kt(e, t) {
  if (!O) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Le(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Je(r) : r;
  }
  return P;
}
function W(e, t = 1, r = !1) {
  let i = O ? P : e;
  for (var l; t--; )
    l = i, i = /** @type {TemplateNode} */
    /* @__PURE__ */ Je(i);
  if (!O)
    return i;
  var a = i == null ? void 0 : i.nodeType;
  if (r && a !== 3) {
    var s = rr();
    return i === null ? l == null || l.after(s) : i.before(s), Ge(s), s;
  }
  return Ge(i), /** @type {TemplateNode} */
  i;
}
function Wl(e) {
  e.textContent = "";
}
let jt = !1, Wt = !1, Jt = null, rt = !1, Nr = !1;
function Rn(e) {
  Nr = e;
}
let Nt = [];
let N = null, we = !1;
function Ze(e) {
  N = e;
}
let S = null;
function We(e) {
  S = e;
}
let Re = null;
function Jl(e) {
  Re = e;
}
let re = null, ce = 0, Se = null;
function Kl(e) {
  Se = e;
}
let ei = 1, Kt = 0, Ye = !1;
function ti() {
  return ++ei;
}
function Dt(e) {
  var h;
  var t = e.f;
  if ((t & Fe) !== 0)
    return !0;
  if ((t & wt) !== 0) {
    var r = e.deps, i = (t & ge) !== 0;
    if (r !== null) {
      var l, a, s = (t & Yt) !== 0, f = i && S !== null && !Ye, c = r.length;
      if (s || f) {
        var d = (
          /** @type {Derived} */
          e
        ), m = d.parent;
        for (l = 0; l < c; l++)
          a = r[l], (s || !((h = a == null ? void 0 : a.reactions) != null && h.includes(d))) && (a.reactions ?? (a.reactions = [])).push(d);
        s && (d.f ^= Yt), f && m !== null && (m.f & ge) === 0 && (d.f ^= ge);
      }
      for (l = 0; l < c; l++)
        if (a = r[l], Dt(
          /** @type {Derived} */
          a
        ) && Kn(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!i || S !== null && !Ye) && $e(e, de);
  }
  return !1;
}
function Xl(e, t) {
  for (var r = t; r !== null; ) {
    if ((r.f & Ht) !== 0)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= Ht;
      }
    r = r.parent;
  }
  throw jt = !1, e;
}
function zl(e) {
  return (e.f & er) === 0 && (e.parent === null || (e.parent.f & Ht) === 0);
}
function nr(e, t, r, i) {
  if (jt) {
    if (r === null && (jt = !1), zl(t))
      throw e;
    return;
  }
  r !== null && (jt = !0);
  {
    Xl(e, t);
    return;
  }
}
function ri(e, t, r = !0) {
  var i = e.reactions;
  if (i !== null)
    for (var l = 0; l < i.length; l++) {
      var a = i[l];
      (a.f & ye) !== 0 ? ri(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (r ? $e(a, Fe) : (a.f & de) !== 0 && $e(a, wt), ir(
        /** @type {Effect} */
        a
      ));
    }
}
function ni(e) {
  var y;
  var t = re, r = ce, i = Se, l = N, a = Ye, s = Re, f = ne, c = we, d = e.f;
  re = /** @type {null | Value[]} */
  null, ce = 0, Se = null, Ye = (d & ge) !== 0 && (we || !rt || N === null), N = (d & (Oe | nt)) === 0 ? e : null, Re = null, $n(e.ctx), we = !1, Kt++;
  try {
    var m = (
      /** @type {Function} */
      (0, e.fn)()
    ), h = e.deps;
    if (re !== null) {
      var v;
      if (Xt(e, ce), h !== null && ce > 0)
        for (h.length = ce + re.length, v = 0; v < re.length; v++)
          h[ce + v] = re[v];
      else
        e.deps = h = re;
      if (!Ye)
        for (v = ce; v < h.length; v++)
          ((y = h[v]).reactions ?? (y.reactions = [])).push(e);
    } else h !== null && ce < h.length && (Xt(e, ce), h.length = ce);
    if (vi() && Se !== null && !we && h !== null && (e.f & (ye | wt | Fe)) === 0)
      for (v = 0; v < /** @type {Source[]} */
      Se.length; v++)
        ri(
          Se[v],
          /** @type {Effect} */
          e
        );
    return l !== null && Kt++, m;
  } finally {
    re = t, ce = r, Se = i, N = l, Ye = a, Re = s, $n(f), we = c;
  }
}
function Ql(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var i = El.call(r, e);
    if (i !== -1) {
      var l = r.length - 1;
      l === 0 ? r = t.reactions = null : (r[i] = r[l], r.pop());
    }
  }
  r === null && (t.f & ye) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (re === null || !re.includes(t)) && ($e(t, wt), (t.f & (ge | Yt)) === 0 && (t.f ^= Yt), Jn(
    /** @type {Derived} **/
    t
  ), Xt(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Xt(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var i = t; i < r.length; i++)
      Ql(e, r[i]);
}
function Tr(e) {
  var t = e.f;
  if ((t & er) === 0) {
    $e(e, de);
    var r = S, i = ne, l = rt;
    S = e, rt = !0;
    try {
      (t & Rr) !== 0 ? ua(e) : ai(e), li(e);
      var a = ni(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = ei;
      var s = e.deps, f;
      En && ql && e.f & Fe;
    } catch (c) {
      nr(c, e, r, i || e.ctx);
    } finally {
      rt = l, S = r;
    }
  }
}
function ea() {
  try {
    Ll();
  } catch (e) {
    if (Jt !== null)
      nr(e, Jt, null);
    else
      throw e;
  }
}
function ii() {
  var e = rt;
  try {
    var t = 0;
    for (rt = !0; Nt.length > 0; ) {
      t++ > 1e3 && ea();
      var r = Nt, i = r.length;
      Nt = [];
      for (var l = 0; l < i; l++) {
        var a = ra(r[l]);
        ta(a);
      }
    }
  } finally {
    Wt = !1, rt = e, Jt = null;
  }
}
function ta(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var i = e[r];
      if ((i.f & (er | gt)) === 0)
        try {
          Dt(i) && (Tr(i), i.deps === null && i.first === null && i.nodes_start === null && (i.teardown === null ? oi(i) : i.fn = null));
        } catch (l) {
          nr(l, i, null, i.ctx);
        }
    }
}
function ir(e) {
  Wt || (Wt = !0, queueMicrotask(ii));
  for (var t = Jt = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (nt | Oe)) !== 0) {
      if ((r & de) === 0) return;
      t.f ^= de;
    }
  }
  Nt.push(t);
}
function ra(e) {
  for (var t = [], r = e; r !== null; ) {
    var i = r.f, l = (i & (Oe | nt)) !== 0, a = l && (i & de) !== 0;
    if (!a && (i & gt) === 0) {
      if ((i & Vn) !== 0)
        t.push(r);
      else if (l)
        r.f ^= de;
      else {
        var s = N;
        try {
          N = r, Dt(r) && Tr(r);
        } catch (d) {
          nr(d, r, null, r.ctx);
        } finally {
          N = s;
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
function A(e) {
  var t;
  for (Cn(); Nt.length > 0; )
    Wt = !0, ii(), Cn();
  return (
    /** @type {T} */
    t
  );
}
async function wr() {
  await Promise.resolve(), A();
}
function o(e) {
  var t = e.f, r = (t & ye) !== 0;
  if (N !== null && !we) {
    Re !== null && Re.includes(e) && Ml();
    var i = N.deps;
    e.rv < Kt && (e.rv = Kt, re === null && i !== null && i[ce] === e ? ce++ : re === null ? re = [e] : (!Ye || !re.includes(e)) && re.push(e));
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var l = (
      /** @type {Derived} */
      e
    ), a = l.parent;
    a !== null && (a.f & ge) === 0 && (l.f ^= ge);
  }
  return r && (l = /** @type {Derived} */
  e, Dt(l) && Kn(l)), e.v;
}
function mt(e) {
  var t = we;
  try {
    return we = !0, e();
  } finally {
    we = t;
  }
}
const na = -7169;
function $e(e, t) {
  e.f = e.f & na | t;
}
function ia(e) {
  S === null && N === null && Dl(), N !== null && (N.f & ge) !== 0 && S === null && Sl(), Nr && Tl();
}
function la(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function it(e, t, r, i = !0) {
  var l = S, a = {
    ctx: ne,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Fe,
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
      Tr(a), a.f |= yl;
    } catch (c) {
      throw Pe(a), c;
    }
  else t !== null && ir(a);
  var s = r && a.deps === null && a.first === null && a.nodes_start === null && a.teardown === null && (a.f & (Mn | Ht)) === 0;
  if (!s && i && (l !== null && la(a, l), N !== null && (N.f & ye) !== 0)) {
    var f = (
      /** @type {Derived} */
      N
    );
    (f.effects ?? (f.effects = [])).push(a);
  }
  return a;
}
function aa(e) {
  const t = it(Qt, null, !1);
  return $e(t, de), t.teardown = e, t;
}
function pr(e) {
  ia();
  var t = S !== null && (S.f & Oe) !== 0 && ne !== null && !ne.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      ne
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: S,
      reaction: N
    });
  } else {
    var i = Sr(e);
    return i;
  }
}
function oa(e) {
  const t = it(nt, e, !0);
  return () => {
    Pe(t);
  };
}
function sa(e) {
  const t = it(nt, e, !0);
  return (r = {}) => new Promise((i) => {
    r.outro ? Er(t, () => {
      Pe(t), i(void 0);
    }) : (Pe(t), i(void 0));
  });
}
function Sr(e) {
  return it(Vn, e, !1);
}
function Dr(e) {
  return it(Qt, e, !0);
}
function Te(e, t = [], r = He) {
  const i = t.map(r);
  return Lr(() => e(...i.map(o)));
}
function Lr(e, t = 0) {
  return it(Qt | Rr | t, e, !0);
}
function zt(e, t = !0) {
  return it(Qt | Oe, e, !0, t);
}
function li(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Nr, i = N;
    Rn(!0), Ze(null);
    try {
      t.call(null);
    } finally {
      Rn(r), Ze(i);
    }
  }
}
function ai(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var i = r.next;
    (r.f & nt) !== 0 ? r.parent = null : Pe(r, t), r = i;
  }
}
function ua(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Oe) === 0 && Pe(t), t = r;
  }
}
function Pe(e, t = !0) {
  var r = !1;
  if ((t || (e.f & bl) !== 0) && e.nodes_start !== null) {
    for (var i = e.nodes_start, l = e.nodes_end; i !== null; ) {
      var a = i === l ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Je(i)
      );
      i.remove(), i = a;
    }
    r = !0;
  }
  ai(e, t && !r), Xt(e, 0), $e(e, er);
  var s = e.transitions;
  if (s !== null)
    for (const c of s)
      c.stop();
  li(e);
  var f = e.parent;
  f !== null && f.first !== null && oi(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function oi(e) {
  var t = e.parent, r = e.prev, i = e.next;
  r !== null && (r.next = i), i !== null && (i.prev = r), t !== null && (t.first === e && (t.first = i), t.last === e && (t.last = r));
}
function Er(e, t) {
  var r = [];
  si(e, r, !0), fa(r, () => {
    Pe(e), t && t();
  });
}
function fa(e, t) {
  var r = e.length;
  if (r > 0) {
    var i = () => --r || t();
    for (var l of e)
      l.out(i);
  } else
    t();
}
function si(e, t, r) {
  if ((e.f & gt) === 0) {
    if (e.f ^= gt, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || r) && t.push(s);
    for (var i = e.first; i !== null; ) {
      var l = i.next, a = (i.f & kr) !== 0 || (i.f & Oe) !== 0;
      si(i, t, a ? r : !1), i = l;
    }
  }
}
function kn(e) {
  ui(e, !0);
}
function ui(e, t) {
  if ((e.f & gt) !== 0) {
    e.f ^= gt, (e.f & de) === 0 && (e.f ^= de), Dt(e) && ($e(e, Fe), ir(e));
    for (var r = e.first; r !== null; ) {
      var i = r.next, l = (r.f & kr) !== 0 || (r.f & Oe) !== 0;
      ui(r, l ? t : !1), r = i;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
function fi(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let ne = null;
function $n(e) {
  ne = e;
}
function ci(e, t = !1, r) {
  ne = {
    p: ne,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
}
function di(e) {
  const t = ne;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var r = S, i = N;
      t.e = null;
      try {
        for (var l = 0; l < s.length; l++) {
          var a = s[l];
          We(a.effect), Ze(a.reaction), Sr(a.fn);
        }
      } finally {
        We(r), Ze(i);
      }
    }
    ne = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function vi() {
  return !0;
}
const ca = ["touchstart", "touchmove"];
function da(e) {
  return ca.includes(e);
}
function va(e, t) {
  if (t) {
    const r = document.body;
    e.autofocus = !0, $r(() => {
      document.activeElement === r && e.focus();
    });
  }
}
let xn = !1;
function hi() {
  xn || (xn = !0, document.addEventListener(
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
function gi(e) {
  var t = N, r = S;
  Ze(null), We(null);
  try {
    return e();
  } finally {
    Ze(t), We(r);
  }
}
function ha(e, t, r, i = r) {
  e.addEventListener(t, () => gi(r));
  const l = e.__on_r;
  l ? e.__on_r = () => {
    l(), i(!0);
  } : e.__on_r = () => i(!0), hi();
}
const _i = /* @__PURE__ */ new Set(), Cr = /* @__PURE__ */ new Set();
function ga(e, t, r, i = {}) {
  function l(a) {
    if (i.capture || $t.call(t, a), !a.cancelBubble)
      return gi(() => r == null ? void 0 : r.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? $r(() => {
    t.addEventListener(e, l, i);
  }) : t.addEventListener(e, l, i), l;
}
function Be(e, t, r, i, l) {
  var a = { capture: i, passive: l }, s = ga(e, t, r, a);
  (t === document.body || t === window || t === document) && aa(() => {
    t.removeEventListener(e, s, a);
  });
}
function _a(e) {
  for (var t = 0; t < e.length; t++)
    _i.add(e[t]);
  for (var r of Cr)
    r(e);
}
function $t(e) {
  var ie;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), i = e.type, l = ((ie = e.composedPath) == null ? void 0 : ie.call(e)) || [], a = (
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
  if (a = /** @type {Element} */
  l[s] || e.target, a !== t) {
    Zt(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var m = N, h = S;
    Ze(null), We(null);
    try {
      for (var v, y = []; a !== null; ) {
        var I = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var D = a["__" + i];
          if (D != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (qn(D)) {
              var [F, ...ue] = D;
              F.apply(a, [e, ...ue]);
            } else
              D.call(a, e);
        } catch (K) {
          v ? y.push(K) : v = K;
        }
        if (e.cancelBubble || I === t || I === null)
          break;
        a = I;
      }
      if (v) {
        for (let K of y)
          queueMicrotask(() => {
            throw K;
          });
        throw v;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Ze(m), We(h);
    }
  }
}
function Pr(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function ke(e, t) {
  var r = (
    /** @type {Effect} */
    S
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function be(e, t) {
  var r = (t & _l) !== 0, i = (t & ml) !== 0, l, a = !e.startsWith("<!>");
  return () => {
    if (O)
      return ke(P, null), P;
    l === void 0 && (l = Pr(a ? e : "<!>" + e), r || (l = /** @type {Node} */
    /* @__PURE__ */ Le(l)));
    var s = (
      /** @type {TemplateNode} */
      i || Xn ? document.importNode(l, !0) : l.cloneNode(!0)
    );
    if (r) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Le(s)
      ), c = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      ke(f, c);
    } else
      ke(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function lr(e, t, r = "svg") {
  var i = !e.startsWith("<!>"), l = `<${r}>${i ? e : "<!>" + e}</${r}>`, a;
  return () => {
    if (O)
      return ke(P, null), P;
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        Pr(l)
      ), f = (
        /** @type {Element} */
        /* @__PURE__ */ Le(s)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ Le(f);
    }
    var c = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return ke(c, c), c;
  };
}
function Mt() {
  if (O)
    return ke(P, null), P;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = rr();
  return e.append(t, r), ke(t, r), e;
}
function U(e, t) {
  if (O) {
    S.nodes_end = P, _t();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function ma(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function mi(e, t) {
  return wi(e, t);
}
function wa(e, t) {
  br(), t.intro = t.intro ?? !1;
  const r = t.target, i = O, l = P;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Le(r)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== Ir); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ Je(a);
    if (!a)
      throw ht;
    vt(!0), Ge(
      /** @type {Comment} */
      a
    ), _t();
    const s = wi(e, { ...t, anchor: a });
    if (P === null || P.nodeType !== 8 || /** @type {Comment} */
    P.data !== Fn)
      throw tr(), ht;
    return vt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === ht)
      return t.recover === !1 && Pl(), br(), Wl(r), vt(!1), mi(e, t);
    throw s;
  } finally {
    vt(i), Ge(l);
  }
}
const dt = /* @__PURE__ */ new Map();
function wi(e, { target: t, anchor: r, props: i = {}, events: l, context: a, intro: s = !0 }) {
  br();
  var f = /* @__PURE__ */ new Set(), c = (h) => {
    for (var v = 0; v < h.length; v++) {
      var y = h[v];
      if (!f.has(y)) {
        f.add(y);
        var I = da(y);
        t.addEventListener(y, $t, { passive: I });
        var D = dt.get(y);
        D === void 0 ? (document.addEventListener(y, $t, { passive: I }), dt.set(y, 1)) : dt.set(y, D + 1);
      }
    }
  };
  c(Cl(_i)), Cr.add(c);
  var d = void 0, m = sa(() => {
    var h = r ?? t.appendChild(rr());
    return zt(() => {
      if (a) {
        ci({});
        var v = (
          /** @type {ComponentContext} */
          ne
        );
        v.c = a;
      }
      l && (i.$$events = l), O && ke(
        /** @type {TemplateNode} */
        h,
        null
      ), d = e(h, i) || {}, O && (S.nodes_end = P), a && di();
    }), () => {
      var I;
      for (var v of f) {
        t.removeEventListener(v, $t);
        var y = (
          /** @type {number} */
          dt.get(v)
        );
        --y === 0 ? (document.removeEventListener(v, $t), dt.delete(v)) : dt.set(v, y);
      }
      Cr.delete(c), h !== r && ((I = h.parentNode) == null || I.removeChild(h));
    };
  });
  return Ar.set(d, m), d;
}
let Ar = /* @__PURE__ */ new WeakMap();
function ya(e, t) {
  const r = Ar.get(e);
  return r ? (Ar.delete(e), r(t)) : Promise.resolve();
}
function J(e, t, [r, i] = [0, 0]) {
  O && r === 0 && _t();
  var l = e, a = null, s = null, f = se, c = r > 0 ? kr : 0, d = !1;
  const m = (v, y = !0) => {
    d = !0, h(y, v);
  }, h = (v, y) => {
    if (f === (f = v)) return;
    let I = !1;
    if (O && i !== -1) {
      if (r === 0) {
        const F = (
          /** @type {Comment} */
          l.data
        );
        F === Ir ? i = 0 : F === On ? i = 1 / 0 : (i = parseInt(F.substring(1)), i !== i && (i = f ? 1 / 0 : -1));
      }
      const D = i > r;
      !!f === D && (l = Zl(), Ge(l), vt(!1), I = !0, i = -1);
    }
    f ? (a ? kn(a) : y && (a = zt(() => y(l))), s && Er(s, () => {
      s = null;
    })) : (s ? kn(s) : y && (s = zt(() => y(l, [r + 1, i]))), a && Er(a, () => {
      a = null;
    })), I && vt(!0);
  };
  Lr(() => {
    d = !1, t(m), d || h(null, null);
  }, c), O && (l = P);
}
function et(e, t, r, i, l) {
  var a = e, s = "", f;
  Lr(() => {
    if (s === (s = t() ?? "")) {
      O && _t();
      return;
    }
    f !== void 0 && (Pe(f), f = void 0), s !== "" && (f = zt(() => {
      if (O) {
        P.data;
        for (var c = _t(), d = c; c !== null && (c.nodeType !== 8 || /** @type {Comment} */
        c.data !== ""); )
          d = c, c = /** @type {TemplateNode} */
          /* @__PURE__ */ Je(c);
        if (c === null)
          throw tr(), ht;
        ke(P, d), a = Ge(c);
        return;
      }
      var m = s + "", h = Pr(m);
      ke(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Le(h),
        /** @type {TemplateNode} */
        h.lastChild
      ), a.before(h);
    }));
  });
}
function ba(e, t, r, i, l) {
  var f;
  O && _t();
  var a = (f = t.$$slots) == null ? void 0 : f[r], s = !1;
  a === !0 && (a = t.children, s = !0), a === void 0 || a(e, s ? () => i : i);
}
const Nn = [...` 	
\r\f \v\uFEFF`];
function pa(e, t, r) {
  var i = "" + e;
  if (r) {
    for (var l in r)
      if (r[l])
        i = i ? i + " " + l : l;
      else if (i.length)
        for (var a = l.length, s = 0; (s = i.indexOf(l, s)) >= 0; ) {
          var f = s + a;
          (s === 0 || Nn.includes(i[s - 1])) && (f === i.length || Nn.includes(i[f])) ? i = (s === 0 ? "" : i.substring(0, s)) + i.substring(f + 1) : s = f;
        }
  }
  return i === "" ? null : i;
}
function Ea(e, t, r, i, l, a) {
  var s = e.__className;
  if (O || s !== r) {
    var f = pa(r, i, a);
    (!O || f !== e.getAttribute("class")) && (f == null ? e.removeAttribute("class") : e.className = f), e.__className = r;
  } else if (a && l !== a)
    for (var c in a) {
      var d = !!a[c];
      (l == null || d !== !!l[c]) && e.classList.toggle(c, d);
    }
  return a;
}
const Ca = Symbol("is custom element"), Aa = Symbol("is html");
function Tn(e) {
  if (O) {
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
    e.__on_r = r, xl(r), hi();
  }
}
function Ia(e, t) {
  var r = yi(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function T(e, t, r, i) {
  var l = yi(e);
  O && (l[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || l[t] !== (l[t] = r) && (t === "loading" && (e[pl] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Ra(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function yi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Ca]: e.nodeName.includes("-"),
      [Aa]: e.namespaceURI === wl
    })
  );
}
var Sn = /* @__PURE__ */ new Map();
function Ra(e) {
  var t = Sn.get(e.nodeName);
  if (t) return t;
  Sn.set(e.nodeName, t = []);
  for (var r, i = e, l = Element.prototype; l !== i; ) {
    r = Al(i);
    for (var a in r)
      r[a].set && t.push(a);
    i = jn(i);
  }
  return t;
}
function ka(e, t, r = t) {
  ha(e, "change", (i) => {
    var l = i ? e.defaultChecked : e.checked;
    r(l);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (O && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  mt(t) == null) && r(e.checked), Dr(() => {
    var i = t();
    e.checked = !!i;
  });
}
function Dn(e, t) {
  return e === t || (e == null ? void 0 : e[xt]) === t;
}
function Ut(e = {}, t, r, i) {
  return Sr(() => {
    var l, a;
    return Dr(() => {
      l = a, a = [], mt(() => {
        e !== r(...a) && (t(e, ...a), l && Dn(r(...l), e) && t(null, ...l));
      });
    }), () => {
      $r(() => {
        a && Dn(r(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function bi(e) {
  ne === null && fi(), pr(() => {
    const t = mt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function $a(e) {
  ne === null && fi(), bi(() => () => mt(e));
}
let qt = !1;
function xa(e) {
  var t = qt;
  try {
    return qt = !1, [e(), qt];
  } finally {
    qt = t;
  }
}
function k(e, t, r, i) {
  var pe;
  var l = (r & dl) !== 0, a = !0, s = (r & hl) !== 0, f = (r & gl) !== 0, c = !1, d;
  s ? [d, c] = xa(() => (
    /** @type {V} */
    e[t]
  )) : d = /** @type {V} */
  e[t];
  var m = xt in e || Un in e, h = s && (((pe = tt(e, t)) == null ? void 0 : pe.set) ?? (m && t in e && ((q) => e[t] = q))) || void 0, v = (
    /** @type {V} */
    i
  ), y = !0, I = !1, D = () => (I = !0, y && (y = !1, f ? v = mt(
    /** @type {() => V} */
    i
  ) : v = /** @type {V} */
  i), v);
  d === void 0 && i !== void 0 && (h && a && Ol(), d = D(), h && h(d));
  var F;
  if (F = () => {
    var q = (
      /** @type {V} */
      e[t]
    );
    return q === void 0 ? D() : (y = !0, I = !1, q);
  }, (r & vl) === 0)
    return F;
  if (h) {
    var ue = e.$$legacy;
    return function(q, Q) {
      return arguments.length > 0 ? ((!Q || ue || c) && h(Q ? F() : q), q) : F();
    };
  }
  var ie = !1, K = /* @__PURE__ */ Zn(d), fe = /* @__PURE__ */ He(() => {
    var q = F(), Q = o(K);
    return ie ? (ie = !1, Q) : K.v = q;
  });
  return l || (fe.equals = xr), function(q, Q) {
    if (arguments.length > 0) {
      const Ve = Q ? o(fe) : s ? V(q) : q;
      return fe.equals(Ve) || (ie = !0, b(K, Ve), I && v !== void 0 && (v = Ve), mt(() => o(fe))), q;
    }
    return o(fe);
  };
}
function Na(e) {
  return new Ta(e);
}
var De, he;
class Ta {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    _r(this, De);
    /** @type {Record<string, any>} */
    _r(this, he);
    var a;
    var r = /* @__PURE__ */ new Map(), i = (s, f) => {
      var c = /* @__PURE__ */ Zn(f);
      return r.set(s, c), c;
    };
    const l = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, f) {
          return o(r.get(f) ?? i(f, Reflect.get(s, f)));
        },
        has(s, f) {
          return f === Un ? !0 : (o(r.get(f) ?? i(f, Reflect.get(s, f))), Reflect.has(s, f));
        },
        set(s, f, c) {
          return b(r.get(f) ?? i(f, c), c), Reflect.set(s, f, c);
        }
      }
    );
    mr(this, he, (t.hydrate ? wa : mi)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: l,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((a = t == null ? void 0 : t.props) != null && a.$$host) || t.sync === !1) && A(), mr(this, De, l.$$events);
    for (const s of Object.keys(ae(this, he)))
      s === "$set" || s === "$destroy" || s === "$on" || Zt(this, s, {
        get() {
          return ae(this, he)[s];
        },
        /** @param {any} value */
        set(f) {
          ae(this, he)[s] = f;
        },
        enumerable: !0
      });
    ae(this, he).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(l, s);
    }, ae(this, he).$destroy = () => {
      ya(ae(this, he));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    ae(this, he).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    ae(this, De)[t] = ae(this, De)[t] || [];
    const i = (...l) => r.call(this, ...l);
    return ae(this, De)[t].push(i), () => {
      ae(this, De)[t] = ae(this, De)[t].filter(
        /** @param {any} fn */
        (l) => l !== i
      );
    };
  }
  $destroy() {
    ae(this, he).$destroy();
  }
}
De = new WeakMap(), he = new WeakMap();
let pi;
typeof HTMLElement == "function" && (pi = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, i) {
    super();
    /** The Svelte component constructor */
    me(this, "$$ctor");
    /** Slots */
    me(this, "$$s");
    /** @type {any} The Svelte component instance */
    me(this, "$$c");
    /** Whether or not the custom element is connected */
    me(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    me(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    me(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    me(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    me(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    me(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    me(this, "$$me");
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
        return (a) => {
          const s = document.createElement("slot");
          l !== "default" && (s.name = l), U(a, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, i = Sa(this);
      for (const l of this.$$s)
        l in i && (l === "default" && !this.$$d.children ? (this.$$d.children = t(l), r.default = !0) : r[l] = t(l));
      for (const l of this.attributes) {
        const a = this.$$g_p(l.name);
        a in this.$$d || (this.$$d[a] = Bt(a, l.value, this.$$p_d, "toProp"));
      }
      for (const l in this.$$p_d)
        !(l in this.$$d) && this[l] !== void 0 && (this.$$d[l] = this[l], delete this[l]);
      this.$$c = Na({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = oa(() => {
        Dr(() => {
          var l;
          this.$$r = !0;
          for (const a of Gt(this.$$c)) {
            if (!((l = this.$$p_d[a]) != null && l.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const s = Bt(
              a,
              this.$$d[a],
              this.$$p_d,
              "toAttribute"
            );
            s == null ? this.removeAttribute(this.$$p_d[a].attribute || a) : this.setAttribute(this.$$p_d[a].attribute || a, s);
          }
          this.$$r = !1;
        });
      });
      for (const l in this.$$l)
        for (const a of this.$$l[l]) {
          const s = this.$$c.$on(l, a);
          this.$$l_u.set(a, s);
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Bt(t, i, this.$$p_d, "toProp"), (l = this.$$c) == null || l.$set({ [t]: this.$$d[t] }));
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
    return Gt(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function Bt(e, t, r, i) {
  var a;
  const l = (a = r[e]) == null ? void 0 : a.type;
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
function Sa(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function Da(e, t, r, i, l, a) {
  let s = class extends pi {
    constructor() {
      super(e, r, l), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Gt(t).map(
        (f) => (t[f].attribute || f).toLowerCase()
      );
    }
  };
  return Gt(t).forEach((f) => {
    Zt(s.prototype, f, {
      get() {
        return this.$$c && f in this.$$c ? this.$$c[f] : this.$$d[f];
      },
      set(c) {
        var h;
        c = Bt(f, c, t), this.$$d[f] = c;
        var d = this.$$c;
        if (d) {
          var m = (h = tt(d, f)) == null ? void 0 : h.get;
          m ? d[f] = c : d.$set({ [f]: c });
        }
      }
    });
  }), i.forEach((f) => {
    Zt(s.prototype, f, {
      get() {
        var c;
        return (c = this.$$c) == null ? void 0 : c[f];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
const Ei = new TextEncoder();
function La(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function Pa(e, t = "SHA-256", r = 1e5) {
  const i = Date.now().toString(16);
  e || (e = Math.round(Math.random() * r));
  const l = await Ci(i, e, t);
  return {
    algorithm: t,
    challenge: l,
    salt: i,
    signature: ""
  };
}
async function Ci(e, t, r) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return La(
    await crypto.subtle.digest(
      r.toUpperCase(),
      Ei.encode(e + t)
    )
  );
}
function Oa(e, t, r = "SHA-256", i = 1e6, l = 0) {
  const a = new AbortController(), s = Date.now();
  return {
    promise: (async () => {
      for (let c = l; c <= i; c += 1) {
        if (a.signal.aborted)
          return null;
        if (await Ci(t, c, r) === e)
          return {
            number: c,
            took: Date.now() - s
          };
      }
      return null;
    })(),
    controller: a
  };
}
function Ln() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function Fa(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let i = 0; i < t.length; i++)
    r[i] = t.charCodeAt(i);
  return r;
}
function Va(e, t = 12) {
  const r = new Uint8Array(t);
  for (let i = 0; i < t; i++)
    r[i] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function Ma(e, t = "", r = 1e6, i = 0) {
  const l = "AES-GCM", a = new AbortController(), s = Date.now(), f = async () => {
    for (let m = i; m <= r; m += 1) {
      if (a.signal.aborted || !c || !d)
        return null;
      try {
        const h = await crypto.subtle.decrypt(
          {
            name: l,
            iv: Va(m)
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
    d = Fa(e);
    const m = await crypto.subtle.digest(
      "SHA-256",
      Ei.encode(t)
    );
    c = await crypto.subtle.importKey(
      "raw",
      m,
      l,
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
var E = /* @__PURE__ */ ((e) => (e.CODE = "code", e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(E || {}), z = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.LOADING = "loading", e.PLAYING = "playing", e.PAUSED = "paused", e.READY = "ready", e))(z || {});
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  register: (e, t) => {
    globalThis.altchaI18n[e] = t;
  }
};
const Ua = {
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
globalThis.altchaI18n.register("en", Ua);
const yr = (e, t) => {
  let r = /* @__PURE__ */ Hl(() => kl(t == null ? void 0 : t(), 24));
  var i = Ha();
  Te(() => {
    T(i, "width", o(r)), T(i, "height", o(r));
  }), U(e, i);
};
function qa(e, t) {
  e.code === "Space" && (e.preventDefault(), e.stopImmediatePropagation(), t());
}
function ja(e, t) {
  e.preventDefault(), t();
}
function Ba(e, t, r, i, l, a, s, f) {
  var c;
  [
    E.UNVERIFIED,
    E.ERROR,
    E.EXPIRED,
    E.CODE
  ].includes(o(t)) ? r() !== !1 && ((c = o(i)) == null ? void 0 : c.reportValidity()) === !1 ? b(l, !1) : a() ? s() : f() : b(l, !0);
}
var Ha = /* @__PURE__ */ lr('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="altcha-spinner"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor"></path></svg>'), Ya = /* @__PURE__ */ be('<input type="hidden">'), Ga = /* @__PURE__ */ be('<div><a target="_blank" class="altcha-logo" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor"></path></svg></a></div>'), Za = /* @__PURE__ */ lr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg>'), Wa = /* @__PURE__ */ lr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z"></path></svg>'), Ja = /* @__PURE__ */ lr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"></path></svg>'), Ka = /* @__PURE__ */ be('<button type="button" class="altcha-code-challenge-audio"><!></button>'), Xa = /* @__PURE__ */ be("<audio hidden autoplay><source></audio>"), za = /* @__PURE__ */ be('<div class="altcha-code-challenge" role="dialog"><div class="altcha-code-challenge-arrow"></div> <form data-code-challenge-form="1"><img class="altcha-code-challenge-image" alt=""> <input type="text" autocomplete="off" name="code" class="altcha-code-challenge-input" required> <div class="altcha-code-challenge-buttons"><div class="altcha-code-challenge-buttons-left"><!> <button type="button" class="altcha-code-challenge-reload"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z"></path></svg></button></div> <button type="submit" class="altcha-code-challenge-verify"><!> </button></div> <!></form></div>'), Qa = /* @__PURE__ */ be("<div><!></div>"), eo = /* @__PURE__ */ be("<div><!></div>"), to = /* @__PURE__ */ be('<div class="altcha-error"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg> <!></div>'), ro = /* @__PURE__ */ be('<div class="altcha-footer"><div><!></div></div>'), no = /* @__PURE__ */ be('<div class="altcha-anchor-arrow"></div>'), io = /* @__PURE__ */ be('<!> <div class="altcha"><div class="altcha-main"><div><!> <input type="checkbox"></div> <label class="altcha-label"><!></label> <!> <!> <!></div> <!> <!> <!></div>', 1);
function lo(e, t) {
  var wn, yn;
  ci(t, !0);
  let r = k(t, "auto", 7, void 0), i = k(t, "blockspam", 7, void 0), l = k(t, "challengeurl", 7, void 0), a = k(t, "challengejson", 7, void 0), s = k(t, "credentials", 7, void 0), f = k(t, "customfetch", 7, void 0), c = k(t, "debug", 7, !1), d = k(t, "delay", 7, 0), m = k(t, "disableautofocus", 7, !1), h = k(t, "expire", 7, void 0), v = k(t, "floating", 7, void 0), y = k(t, "floatinganchor", 7, void 0), I = k(t, "floatingoffset", 7, void 0), D = k(t, "floatingpersist", 7, !1), F = k(t, "hidefooter", 7, !1), ue = k(t, "hidelogo", 7, !1), ie = k(t, "id", 7, void 0), K = k(t, "language", 7, void 0), fe = k(t, "name", 7, "altcha"), pe = k(t, "maxnumber", 7, 1e6), q = k(t, "mockerror", 7, !1), Q = k(t, "obfuscated", 7, void 0), Ve = k(t, "plugins", 7, void 0), yt = k(t, "refetchonexpire", 7, !0), Ke = k(t, "sentinel", 7, void 0), Ee = k(t, "spamfilter", 7, !1), lt = k(t, "strings", 7, void 0), ve = k(t, "test", 7, !1), ee = k(t, "verifyurl", 7, void 0), at = k(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), bt = k(t, "workerurl", 7, void 0);
  const Or = ["SHA-256", "SHA-384", "SHA-512"], Ai = "https://altcha.org/", Me = (n, u) => {
    t.$$host.dispatchEvent(new CustomEvent(n, { detail: u }));
  }, Fr = (yn = (wn = document.documentElement.lang) == null ? void 0 : wn.split("-")) == null ? void 0 : yn[0], ar = /* @__PURE__ */ He(() => {
    var n;
    return l() && new URL(l(), location.origin).host.endsWith(".altcha.org") && !!((n = l()) != null && n.includes("apiKey=ckey_"));
  }), or = /* @__PURE__ */ He(() => a() ? zr(a()) : void 0), Ii = /* @__PURE__ */ He(() => lt() ? zr(lt()) : {}), L = /* @__PURE__ */ He(() => ({
    ...qr(),
    ...o(Ii)
  })), Vr = /* @__PURE__ */ He(() => `${ie() || fe()}_checkbox_${Math.round(Math.random() * 1e8)}`);
  let pt = oe(!1), B = oe(null), $ = oe(V(E.UNVERIFIED)), te = oe(void 0), Et = oe(null), Ue = oe(null), sr = oe(null), ot = oe(null), M = oe(null), Xe = oe(null), Ce = null, H = oe(null), ze = oe(!1), qe = [], ur = oe(!1), xe = oe(null);
  pr(() => {
    Vi(o(Xe));
  }), pr(() => {
    Mi(o($));
  }), $a(() => {
    Ri(), o(M) && (o(M).removeEventListener("submit", Zr), o(M).removeEventListener("reset", Wr), o(M).removeEventListener("focusin", Gr), b(M, null)), Ce && (clearTimeout(Ce), Ce = null), document.removeEventListener("click", Hr), document.removeEventListener("scroll", Yr), window.removeEventListener("resize", Xr);
  }), bi(() => {
    var n;
    x("mounted", "2.0.0-beta.10"), x("workers", at()), Ni(), x("plugins", qe.length ? qe.map((u) => u.constructor.pluginName).join(", ") : "none"), ve() && x("using test mode"), h() && fr(h()), r() !== void 0 && x("auto", r()), v() !== void 0 && en(v()), b(M, V((n = o(te)) == null ? void 0 : n.closest("form"))), o(M) && (o(M).addEventListener("submit", Zr, { capture: !0 }), o(M).addEventListener("reset", Wr), (r() === "onfocus" || D() === "focus") && o(M).addEventListener("focusin", Gr)), r() === "onload" && (Q() ? Ct() : Ne()), o(ar) && (F() || ue()) && x("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      Me("load");
    });
  });
  function Lt(n, u) {
    return btoa(JSON.stringify({
      algorithm: n.algorithm,
      challenge: n.challenge,
      number: u.number,
      salt: n.salt,
      signature: n.signature,
      test: ve() ? !0 : void 0,
      took: u.took
    }));
  }
  function Ri() {
    for (const n of qe)
      n.destroy();
  }
  function Mr() {
    l() && yt() && o($) === E.VERIFIED ? Ne() : st(E.EXPIRED, o(L).expired);
  }
  async function ki() {
    var n;
    if (q())
      throw x("mocking error"), new Error("Mocked error.");
    if (o(or))
      return x("using provided json data"), o(or);
    if (ve())
      return x("generating test challenge", { test: ve() }), Pa(typeof ve() != "boolean" ? +ve() : void 0);
    {
      if (!l() && o(M)) {
        const C = o(M).getAttribute("action");
        C != null && C.includes("/form/") && l(C + "/altcha");
      }
      if (!l())
        throw new Error("Attribute challengeurl not set.");
      x("fetching challenge from", l());
      const u = {
        credentials: typeof s() == "boolean" ? "include" : s(),
        headers: Ee() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      }, g = await Ur()(l(), u);
      if (!g || !(g instanceof Response))
        throw new Error("Custom fetch function did not return a response.");
      if (g.status !== 200)
        throw new Error(`Server responded with ${g.status}.`);
      const w = g.headers.get("X-Altcha-Config"), _ = await g.json(), R = new URLSearchParams((n = _.salt.split("?")) == null ? void 0 : n[1]), p = R.get("expires") || R.get("expire");
      if (p) {
        const C = new Date(+p * 1e3), j = isNaN(C.getTime()) ? 0 : C.getTime() - Date.now();
        j > 0 && fr(j);
      }
      if (w)
        try {
          const C = JSON.parse(w);
          C && typeof C == "object" && (C.verifyurl && !C.verifyurl.startsWith("javascript:") && (C.verifyurl = Br(C.verifyurl)), nn(C));
        } catch (C) {
          x("unable to configure from X-Altcha-Config", C);
        }
      return _;
    }
  }
  function $i(n) {
    var g, w;
    const u = (g = o(M)) == null ? void 0 : g.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((w = u == null ? void 0 : u.value) == null ? void 0 : w.slice(u.value.indexOf("@"))) || void 0;
  }
  function Ur() {
    let n = fetch;
    if (f())
      if (x("using customfetch"), typeof f() == "string") {
        if (n = globalThis[f()] || null, !n)
          throw new Error(`Custom fetch function not found: ${f()}`);
      } else
        n = f();
    return n;
  }
  function qr(n = [
    K() || "",
    document.documentElement.lang || "",
    ...navigator.languages
  ]) {
    const u = Object.keys(globalThis.altchaI18n).map((w) => w.toLowerCase()), g = n.reduce(
      (w, _) => (_ = _.toLowerCase(), w || (globalThis.altchaI18n[_] ? _ : null) || u.find((R) => _.split("-")[0] === R.split("-")[0]) || null),
      null
    );
    return globalThis.altchaI18n[g || "en"];
  }
  function xi() {
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
  function jr(n) {
    var g;
    return [
      ...((g = o(M)) == null ? void 0 : g.querySelectorAll(n != null && n.length ? n.map((w) => `input[name="${w}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (w, _) => {
        const R = _.name, p = _.value;
        return R && p && (w[R] = /\n/.test(p) ? p.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : p), w;
      },
      {}
    );
  }
  function Br(n, u) {
    const g = new URL(l() || location.origin), w = new URL(n, g);
    if (w.search || (w.search = g.search), u)
      for (const _ in u)
        u[_] !== void 0 && u[_] !== null && w.searchParams.set(_, u[_]);
    return w.toString();
  }
  function Ni() {
    const n = Ve() !== void 0 ? Ve().split(",") : void 0;
    for (const u of globalThis.altchaPlugins)
      (!n || n.includes(u.pluginName)) && qe.push(new u({
        el: o(te),
        clarify: Ct,
        dispatch: Me,
        getConfiguration: ln,
        getFloatingAnchor: an,
        getState: on,
        log: x,
        reset: st,
        solve: rn,
        setState: Ae,
        setFloatingAnchor: un,
        verify: Ne
      }));
  }
  function x(...n) {
    (c() || n.some((u) => u instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${fe()}]`, ...n);
  }
  function Ti() {
    b(H, V(z.PAUSED));
  }
  function Si(n) {
    b(H, V(z.ERROR));
  }
  function Di() {
    b(H, V(z.READY));
  }
  function Li() {
    b(H, V(z.LOADING));
  }
  function Pi() {
    b(H, V(z.PLAYING));
  }
  function Oi() {
    b(H, V(z.PAUSED));
  }
  function Fi(n) {
    var u;
    if (n.preventDefault(), n.stopPropagation(), o(B)) {
      const g = new FormData(n.target), w = String(g.get("code"));
      if ((u = ee()) != null && u.startsWith("javascript:")) {
        const _ = ee().replace(/^javascript:/, "");
        if (x(`calling ${_} function instead of verifyurl`), !(_ in globalThis))
          throw new Error(`Global function "${_}" is undefined.`);
        return globalThis[_]({
          challenge: o(B).challenge,
          code: w,
          solution: o(B).solution
        });
      }
      b(ze, !0), Qr(Lt(o(B).challenge, o(B).solution), w).then(({ reason: _, verified: R }) => {
        R ? (b(B, null), Ae(E.VERIFIED), x("verified"), wr().then(() => {
          var p;
          (p = o(sr)) == null || p.focus(), Me("verified", { payload: o(xe) });
        })) : (st(), b(Xe, V(_ || "Verification failed")));
      }).catch((_) => {
        b(B, null), Ae(E.ERROR, _), x("sentinel verification failed:", _);
      }).finally(() => {
        b(ze, !1);
      });
    }
  }
  function Hr(n) {
    var g;
    const u = n.target;
    v() && u && !o(te).contains(u) && (o($) === E.VERIFIED && D() === !1 || o($) === E.VERIFIED && D() === "focus" && !((g = o(M)) != null && g.matches(":focus-within")) || r() === "off" && o($) === E.UNVERIFIED) && sn();
  }
  function Yr() {
    v() && o($) !== E.UNVERIFIED && At();
  }
  function Vi(n) {
    for (const u of qe)
      typeof u.onErrorChange == "function" && u.onErrorChange(o(Xe));
  }
  function Gr(n) {
    o($) === E.UNVERIFIED ? Ne() : v() && D() === "focus" && o($) === E.VERIFIED && cr();
  }
  function Zr(n) {
    const u = n.target, g = n.submitter;
    u != null && u.hasAttribute("data-code-challenge-form") || (o(M) && r() === "onsubmit" ? o($) === E.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), Ne().then(() => {
      var _;
      g && ["INPUT", "BUTTON"].includes(g.tagName) && g.getAttribute("name") ? g.click() : (_ = o(M)) == null || _.requestSubmit();
    })) : o($) !== E.VERIFIED && (n.preventDefault(), n.stopPropagation(), o($) === E.VERIFYING && Jr()) : o(M) && v() && r() === "off" && o($) === E.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), cr()));
  }
  function Wr() {
    st();
  }
  function Jr() {
    o($) === E.VERIFYING && o(L).waitAlert && alert(o(L).waitAlert);
  }
  function Kr() {
    o(Ue) ? o(Ue).paused ? (o(Ue).currentTime = 0, o(Ue).play()) : o(Ue).pause() : (b(ur, !0), requestAnimationFrame(() => {
      var n;
      (n = o(Ue)) == null || n.play();
    }));
  }
  function Mi(n) {
    for (const u of qe)
      typeof u.onStateChange == "function" && u.onStateChange(o($));
    v() && o($) !== E.UNVERIFIED && requestAnimationFrame(() => {
      At();
    }), b(pt, o($) === E.VERIFIED);
  }
  function Xr() {
    v() && At();
  }
  function zr(n) {
    return JSON.parse(n);
  }
  async function Ui(n) {
    if (!ee())
      throw new Error("Attribute verifyurl not set.");
    x("requesting server verification from", ee());
    const u = { payload: n };
    if (Ee() !== !1) {
      const {
        blockedCountries: _,
        classifier: R,
        disableRules: p,
        email: C,
        expectedLanguages: j,
        expectedCountries: X,
        fields: le,
        ipAddress: je,
        text: vr,
        timeZone: Ft
      } = xi();
      u.blockedCountries = _, u.classifier = R, u.disableRules = p, u.email = C === !1 ? void 0 : $i(C), u.expectedCountries = X, u.expectedLanguages = j || (Fr ? [Fr] : void 0), u.fields = le === !1 ? void 0 : jr(le), u.ipAddress = je === !1 ? void 0 : je || "auto", u.text = vr, u.timeZone = Ft === !1 ? void 0 : Ft || Ln();
    }
    const g = await Ur()(ee(), {
      body: JSON.stringify(u),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (!g || !(g instanceof Response))
      throw new Error("Custom fetch function did not return a response.");
    if (g.status !== 200)
      throw new Error(`Server responded with ${g.status}.`);
    const w = await g.json();
    if (w != null && w.payload && b(xe, V(w.payload)), Me("serververification", w), i() && w.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  async function Qr(n, u) {
    if (!ee())
      throw new Error("Attribute verifyurl not set.");
    x("requesting sentinel verification from", ee());
    const g = { code: u, payload: n };
    Ke() && (g.fields = Ke().fields ? jr() : void 0, g.timeZone = Ke().timeZone ? Ln() : void 0);
    const w = await fetch(ee(), {
      body: JSON.stringify(g),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (w.status !== 200)
      throw new Error(`Server responded with ${w.status}.`);
    const _ = await w.json();
    return _ != null && _.payload && b(xe, V(_.payload)), Me("sentinelverification", _), _;
  }
  function fr(n) {
    x("expire", n), Ce && (clearTimeout(Ce), Ce = null), n < 1 ? Mr() : Ce = setTimeout(Mr, n);
  }
  function en(n) {
    x("floating", n), v() !== n && (o(te).style.left = "", o(te).style.top = ""), v(n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : v()), v() ? (r() || r("onsubmit"), document.addEventListener("scroll", Yr), document.addEventListener("click", Hr), window.addEventListener("resize", Xr)) : r() === "onsubmit" && r(void 0);
  }
  function tn(n) {
    if (!n.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (n.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!Or.includes(n.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${Or.join(", ")}`);
    if (!n.challenge || n.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!n.salt || n.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function rn(n) {
    let u = null;
    if ("Worker" in window) {
      try {
        u = await qi(n, n.maxNumber || n.maxnumber || pe());
      } catch (g) {
        x(g);
      }
      if ((u == null ? void 0 : u.number) !== void 0 || "obfuscated" in n)
        return { data: n, solution: u };
    }
    if ("obfuscated" in n) {
      const g = await Ma(n.obfuscated, n.key, n.maxNumber || n.maxnumber);
      return { data: n, solution: await g.promise };
    }
    return {
      data: n,
      solution: await Oa(n.challenge, n.salt, n.algorithm, n.maxNumber || n.maxnumber || pe()).promise
    };
  }
  async function qi(n, u = typeof ve() == "number" ? ve() : n.maxNumber || n.maxnumber || pe(), g = Math.ceil(at())) {
    const w = [];
    g = Math.min(16, u, Math.max(1, g));
    for (let p = 0; p < g; p++)
      w.push(altchaCreateWorker(bt()));
    const _ = Math.ceil(u / g), R = await Promise.all(w.map((p, C) => {
      const j = C * _;
      return new Promise((X) => {
        p.addEventListener("message", (le) => {
          if (le.data)
            for (const je of w)
              je !== p && je.postMessage({ type: "abort" });
          X(le.data);
        }), p.postMessage({
          payload: n,
          max: j + _,
          start: j,
          type: "work"
        });
      });
    }));
    for (const p of w)
      p.terminate();
    return R.find((p) => !!p) || null;
  }
  async function Ct() {
    if (!Q()) {
      Ae(E.ERROR);
      return;
    }
    const n = qe.find((u) => u.constructor.pluginName === "obfuscation");
    if (!n || !("clarify" in n)) {
      Ae(E.ERROR), x("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in n && typeof n.clarify == "function")
      return n.clarify();
  }
  function nn(n) {
    n.obfuscated !== void 0 && Q(n.obfuscated), n.auto !== void 0 && (r(n.auto), r() === "onload" && (Q() ? Ct() : Ne())), n.blockspam !== void 0 && i(!!n.blockspam), n.customfetch !== void 0 && f(n.customfetch), n.floatinganchor !== void 0 && y(n.floatinganchor), n.delay !== void 0 && d(n.delay), n.floatingoffset !== void 0 && I(n.floatingoffset), n.floating !== void 0 && en(n.floating), n.expire !== void 0 && (fr(n.expire), h(n.expire)), n.challenge && (a(typeof n.challenge == "string" ? n.challenge : JSON.stringify(n.challenge)), tn(o(or))), n.challengeurl !== void 0 && l(n.challengeurl), n.debug !== void 0 && c(!!n.debug), n.hidefooter !== void 0 && F(!!n.hidefooter), n.hidelogo !== void 0 && ue(!!n.hidelogo), n.language !== void 0 && lt(qr([n.language])), n.maxnumber !== void 0 && pe(+n.maxnumber), n.mockerror !== void 0 && q(!!n.mockerror), n.name !== void 0 && fe(n.name), n.refetchonexpire !== void 0 && yt(!!n.refetchonexpire), n.sentinel !== void 0 && typeof n.sentinel == "object" && Ke(n.sentinel), n.spamfilter !== void 0 && Ee(typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && lt(typeof n.strings == "string" ? n.strings : JSON.stringify(n.strings)), n.test !== void 0 && ve(typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && ee(n.verifyurl), n.workers !== void 0 && at(+n.workers), n.workerurl !== void 0 && bt(n.workerurl);
  }
  function ln() {
    return {
      auto: r(),
      blockspam: i(),
      challengeurl: l(),
      debug: c(),
      delay: d(),
      expire: h(),
      floating: v(),
      floatinganchor: y(),
      floatingoffset: I(),
      hidefooter: F(),
      hidelogo: ue(),
      name: fe(),
      maxnumber: pe(),
      mockerror: q(),
      obfuscated: Q(),
      refetchonexpire: yt(),
      spamfilter: Ee(),
      strings: o(L),
      test: ve(),
      verifyurl: ee(),
      workers: at(),
      workerurl: bt()
    };
  }
  function an() {
    return o(ot);
  }
  function ji(n) {
    return qe.find((u) => u.constructor.pluginName === n);
  }
  function on() {
    return o($);
  }
  function sn() {
    o(te).style.display = "none";
  }
  function At(n = 20) {
    var u;
    if (o(te))
      if (o(ot) || b(ot, V((y() ? document.querySelector(y()) : (u = o(M)) == null ? void 0 : u.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || o(M))), o(ot)) {
        const g = parseInt(I(), 10) || 12, w = o(ot).getBoundingClientRect(), _ = o(te).getBoundingClientRect(), R = document.documentElement.clientHeight, p = document.documentElement.clientWidth, C = v() === "auto" ? w.bottom + _.height + g + n > R : v() === "top", j = Math.max(n, Math.min(p - n - _.width, w.left + w.width / 2 - _.width / 2));
        if (C ? o(te).style.top = `${w.top - (_.height + g)}px` : o(te).style.top = `${w.bottom + g}px`, o(te).style.left = `${j}px`, o(te).setAttribute("data-floating", C ? "top" : "bottom"), o(Et)) {
          const X = o(Et).getBoundingClientRect();
          o(Et).style.left = w.left - j + w.width / 2 - X.width / 2 + "px";
        }
      } else
        x("unable to find floating anchor element");
  }
  function st(n = E.UNVERIFIED, u = null) {
    Ce && (clearTimeout(Ce), Ce = null), b(pt, !1), b(xe, null), b(B, null), b(ur, !1), b(H, null), Ae(n, u);
  }
  function un(n) {
    b(ot, V(n));
  }
  function Ae(n, u = null) {
    b($, V(n)), b(Xe, V(u)), Me("statechange", {
      payload: o(xe),
      state: o($)
    });
  }
  function cr() {
    o(te).style.display = "block", v() && At();
  }
  async function Ne() {
    return st(E.VERIFYING), await new Promise((n) => setTimeout(n, d() || 0)), ki().then((n) => (tn(n), x("challenge", n), rn(n))).then(({ data: n, solution: u }) => {
      var g;
      if (x("solution", u), !u || n && "challenge" in n && !("clearText" in u))
        if ((u == null ? void 0 : u.number) !== void 0 && "challenge" in n)
          if (ee() && "codeChallenge" in n)
            ((g = document.activeElement) == null ? void 0 : g.tagName) === "INPUT" && m() === !1 && document.activeElement.blur(), b(B, V({ challenge: n, solution: u }));
          else {
            if (ee() && Ke() !== void 0)
              return Qr(Lt(n, u));
            if (ee())
              return Ui(Lt(n, u));
            b(xe, V(Lt(n, u))), x("payload", o(xe));
          }
        else
          throw x("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      o(B) ? (Ae(E.CODE), wr().then(() => {
        Me("code", { codeChallenge: o(B) });
      })) : (Ae(E.VERIFIED), x("verified"), wr().then(() => {
        Me("verified", { payload: o(xe) });
      }));
    }).catch((n) => {
      x(n), Ae(E.ERROR, n.message);
    });
  }
  var fn = io(), cn = kt(fn);
  ba(cn, t, "default", {});
  var It = W(cn, 2), dr = Z(It), Pt = Z(dr);
  let dn;
  var vn = Z(Pt);
  {
    var Bi = (n) => {
      yr(n);
    };
    J(vn, (n) => {
      o($) === E.VERIFYING && n(Bi);
    });
  }
  var Qe = W(vn, 2);
  Tn(Qe), Qe.__change = [
    Ba,
    $,
    Ee,
    M,
    pt,
    Q,
    Ct,
    Ne
  ], Ut(Qe, (n) => b(sr, n), () => o(sr)), G(Pt);
  var Ot = W(Pt, 2), Hi = Z(Ot);
  {
    var Yi = (n) => {
      var u = Mt(), g = kt(u);
      et(g, () => o(L).verified), U(n, u);
    }, Gi = (n, u) => {
      {
        var g = (_) => {
          var R = Mt(), p = kt(R);
          et(p, () => o(L).verifying), U(_, R);
        }, w = (_, R) => {
          {
            var p = (j) => {
              var X = Mt(), le = kt(X);
              et(le, () => o(L).verificationRequired), U(j, X);
            }, C = (j) => {
              var X = Mt(), le = kt(X);
              et(le, () => o(L).label), U(j, X);
            };
            J(
              _,
              (j) => {
                o($) === E.CODE ? j(p) : j(C, !1);
              },
              R
            );
          }
        };
        J(
          n,
          (_) => {
            o($) === E.VERIFYING ? _(g) : _(w, !1);
          },
          u
        );
      }
    };
    J(Hi, (n) => {
      o($) === E.VERIFIED ? n(Yi) : n(Gi, !1);
    });
  }
  G(Ot);
  var hn = W(Ot, 2);
  {
    var Zi = (n) => {
      var u = Ya();
      Tn(u), Te(() => {
        T(u, "name", fe()), Ia(u, o(xe));
      }), U(n, u);
    };
    J(hn, (n) => {
      o($) === E.VERIFIED && n(Zi);
    });
  }
  var gn = W(hn, 2);
  {
    var Wi = (n) => {
      var u = Ga(), g = Z(u);
      T(g, "href", Ai), G(u), Te(() => T(g, "aria-label", o(L).ariaLinkLabel)), U(n, u);
    };
    J(gn, (n) => {
      (ue() !== !0 || o(ar)) && n(Wi);
    });
  }
  var Ji = W(gn, 2);
  {
    var Ki = (n) => {
      var u = za(), g = W(Z(u), 2), w = Z(g), _ = W(w, 2);
      va(_, !m()), _.__keydown = [
        qa,
        Kr
      ];
      var R = W(_, 2), p = Z(R), C = Z(p);
      {
        var j = (_e) => {
          var Y = Ka();
          Y.__click = Kr;
          var Vt = Z(Y);
          {
            var Rt = (ut) => {
              yr(ut, () => 20);
            }, nl = (ut, il) => {
              {
                var ll = (ft) => {
                  var hr = Za();
                  U(ft, hr);
                }, al = (ft, hr) => {
                  {
                    var ol = (ct) => {
                      var gr = Wa();
                      U(ct, gr);
                    }, sl = (ct) => {
                      var gr = Ja();
                      U(ct, gr);
                    };
                    J(
                      ft,
                      (ct) => {
                        o(H) === z.PLAYING ? ct(ol) : ct(sl, !1);
                      },
                      hr
                    );
                  }
                };
                J(
                  ut,
                  (ft) => {
                    o(H) === z.ERROR ? ft(ll) : ft(al, !1);
                  },
                  il
                );
              }
            };
            J(Vt, (ut) => {
              o(H) === z.LOADING ? ut(Rt) : ut(nl, !1);
            });
          }
          G(Y), Te(() => {
            T(Y, "title", o(L).getAudioChallenge), Y.disabled = o(H) === z.LOADING || o(H) === z.ERROR || o(ze), T(Y, "aria-label", o(H) === z.LOADING ? o(L).loading : o(L).getAudioChallenge);
          }), U(_e, Y);
        };
        J(C, (_e) => {
          o(B).challenge.codeChallenge.audio && _e(j);
        });
      }
      var X = W(C, 2);
      X.__click = [ja, Ne], G(p);
      var le = W(p, 2), je = Z(le);
      {
        var vr = (_e) => {
          yr(_e, () => 16);
        };
        J(je, (_e) => {
          o(ze) && _e(vr);
        });
      }
      var Ft = W(je);
      G(le), G(R);
      var tl = W(R, 2);
      {
        var rl = (_e) => {
          var Y = Xa(), Vt = Z(Y);
          G(Y), Ut(Y, (Rt) => b(Ue, Rt), () => o(Ue)), Te((Rt) => T(Vt, "src", Rt), [
            () => Br(o(B).challenge.codeChallenge.audio, { language: K() })
          ]), Be("loadstart", Y, Li), Be("canplay", Y, Di), Be("pause", Y, Oi), Be("playing", Y, Pi), Be("ended", Y, Ti), Be("error", Vt, Si), U(_e, Y);
        };
        J(tl, (_e) => {
          o(B).challenge.codeChallenge.audio && o(ur) && _e(rl);
        });
      }
      G(g), G(u), Te(() => {
        T(u, "aria-label", o(L).verificationRequired), T(w, "src", o(B).challenge.codeChallenge.image), T(_, "minlength", o(B).challenge.codeChallenge.length || 1), T(_, "maxlength", o(B).challenge.codeChallenge.length), T(_, "placeholder", o(L).enterCode), T(_, "aria-label", o(H) === z.LOADING ? o(L).loading : o(H) === z.PLAYING ? "" : o(L).enterCodeAria), T(_, "aria-live", o(H) ? "assertive" : "polite"), T(_, "aria-busy", o(H) === z.LOADING), _.disabled = o(ze), T(X, "aria-label", o(L).reload), T(X, "title", o(L).reload), X.disabled = o(ze), le.disabled = o(ze), T(le, "aria-label", o(L).verify), ma(Ft, ` ${o(L).verify ?? ""}`);
      }), Be("submit", g, Fi, !0), U(n, u);
    };
    J(Ji, (n) => {
      var u;
      (u = o(B)) != null && u.challenge.codeChallenge && n(Ki);
    });
  }
  G(dr);
  var _n = W(dr, 2);
  {
    var Xi = (n) => {
      var u = to(), g = W(Z(u), 2);
      {
        var w = (R) => {
          var p = Qa(), C = Z(p);
          et(C, () => o(L).expired), G(p), Te(() => T(p, "title", o(Xe))), U(R, p);
        }, _ = (R) => {
          var p = eo(), C = Z(p);
          et(C, () => o(L).error), G(p), Te(() => T(p, "title", o(Xe))), U(R, p);
        };
        J(g, (R) => {
          o($) === E.EXPIRED ? R(w) : R(_, !1);
        });
      }
      G(u), U(n, u);
    };
    J(_n, (n) => {
      (o(Xe) || o($) === E.EXPIRED) && n(Xi);
    });
  }
  var mn = W(_n, 2);
  {
    var zi = (n) => {
      var u = ro(), g = Z(u), w = Z(g);
      et(w, () => o(L).footer), G(g), G(u), U(n, u);
    };
    J(mn, (n) => {
      o(L).footer && (F() !== !0 || o(ar)) && n(zi);
    });
  }
  var Qi = W(mn, 2);
  {
    var el = (n) => {
      var u = no();
      Ut(u, (g) => b(Et, g), () => o(Et)), U(n, u);
    };
    J(Qi, (n) => {
      v() && n(el);
    });
  }
  return G(It), Ut(It, (n) => b(te, n), () => o(te)), Te(
    (n) => {
      T(It, "data-state", o($)), T(It, "data-floating", v()), dn = Ea(Pt, 1, "altcha-checkbox", null, dn, n), T(Qe, "id", o(Vr)), Qe.required = r() !== "onsubmit" && (!v() || r() !== "off"), T(Ot, "for", o(Vr));
    },
    [
      () => ({
        "altcha-checkbox-verifying": o($) === E.VERIFYING
      })
    ]
  ), Be("invalid", Qe, Jr), ka(Qe, () => o(pt), (n) => b(pt, n)), U(e, fn), di({
    clarify: Ct,
    configure: nn,
    getConfiguration: ln,
    getFloatingAnchor: an,
    getPlugin: ji,
    getState: on,
    hide: sn,
    repositionFloating: At,
    reset: st,
    setFloatingAnchor: un,
    setState: Ae,
    show: cr,
    verify: Ne,
    get auto() {
      return r();
    },
    set auto(n = void 0) {
      r(n), A();
    },
    get blockspam() {
      return i();
    },
    set blockspam(n = void 0) {
      i(n), A();
    },
    get challengeurl() {
      return l();
    },
    set challengeurl(n = void 0) {
      l(n), A();
    },
    get challengejson() {
      return a();
    },
    set challengejson(n = void 0) {
      a(n), A();
    },
    get credentials() {
      return s();
    },
    set credentials(n = void 0) {
      s(n), A();
    },
    get customfetch() {
      return f();
    },
    set customfetch(n = void 0) {
      f(n), A();
    },
    get debug() {
      return c();
    },
    set debug(n = !1) {
      c(n), A();
    },
    get delay() {
      return d();
    },
    set delay(n = 0) {
      d(n), A();
    },
    get disableautofocus() {
      return m();
    },
    set disableautofocus(n = !1) {
      m(n), A();
    },
    get expire() {
      return h();
    },
    set expire(n = void 0) {
      h(n), A();
    },
    get floating() {
      return v();
    },
    set floating(n = void 0) {
      v(n), A();
    },
    get floatinganchor() {
      return y();
    },
    set floatinganchor(n = void 0) {
      y(n), A();
    },
    get floatingoffset() {
      return I();
    },
    set floatingoffset(n = void 0) {
      I(n), A();
    },
    get floatingpersist() {
      return D();
    },
    set floatingpersist(n = !1) {
      D(n), A();
    },
    get hidefooter() {
      return F();
    },
    set hidefooter(n = !1) {
      F(n), A();
    },
    get hidelogo() {
      return ue();
    },
    set hidelogo(n = !1) {
      ue(n), A();
    },
    get id() {
      return ie();
    },
    set id(n = void 0) {
      ie(n), A();
    },
    get language() {
      return K();
    },
    set language(n = void 0) {
      K(n), A();
    },
    get name() {
      return fe();
    },
    set name(n = "altcha") {
      fe(n), A();
    },
    get maxnumber() {
      return pe();
    },
    set maxnumber(n = 1e6) {
      pe(n), A();
    },
    get mockerror() {
      return q();
    },
    set mockerror(n = !1) {
      q(n), A();
    },
    get obfuscated() {
      return Q();
    },
    set obfuscated(n = void 0) {
      Q(n), A();
    },
    get plugins() {
      return Ve();
    },
    set plugins(n = void 0) {
      Ve(n), A();
    },
    get refetchonexpire() {
      return yt();
    },
    set refetchonexpire(n = !0) {
      yt(n), A();
    },
    get sentinel() {
      return Ke();
    },
    set sentinel(n = void 0) {
      Ke(n), A();
    },
    get spamfilter() {
      return Ee();
    },
    set spamfilter(n = !1) {
      Ee(n), A();
    },
    get strings() {
      return lt();
    },
    set strings(n = void 0) {
      lt(n), A();
    },
    get test() {
      return ve();
    },
    set test(n = !1) {
      ve(n), A();
    },
    get verifyurl() {
      return ee();
    },
    set verifyurl(n = void 0) {
      ee(n), A();
    },
    get workers() {
      return at();
    },
    set workers(n = Math.min(16, navigator.hardwareConcurrency || 8)) {
      at(n), A();
    },
    get workerurl() {
      return bt();
    },
    set workerurl(n = void 0) {
      bt(n), A();
    }
  });
}
_a(["change", "keydown", "click"]);
customElements.define("altcha-widget", Da(
  lo,
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
globalThis.altchaCreateWorker = (e) => new Worker(new URL(e || "./worker.js", import.meta.url));
export {
  lo as Altcha
};
