var Ql = Object.defineProperty;
var gn = (e) => {
  throw TypeError(e);
};
var ei = (e, t, r) => t in e ? Ql(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ye = (e, t, r) => ei(e, typeof t != "symbol" ? t + "" : t, r), _n = (e, t, r) => t.has(e) || gn("Cannot " + r);
var ae = (e, t, r) => (_n(e, t, "read from private field"), r ? r.call(e) : t.get(e)), ur = (e, t, r) => t.has(e) ? gn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), cr = (e, t, r, l) => (_n(e, t, "write to private field"), l ? l.call(e, r) : t.set(e, r), r);
const ti = "5";
var Nn;
typeof window < "u" && ((Nn = window.__svelte ?? (window.__svelte = {})).v ?? (Nn.v = /* @__PURE__ */ new Set())).add(ti);
const ri = 1, ni = 4, li = 8, ii = 16, ai = 1, oi = 2, mr = "[", Dn = "[!", Tn = "]", dt = {}, oe = Symbol(), si = "http://www.w3.org/1999/xhtml", pn = !1, be = 2, Ln = 4, Yt = 8, wr = 16, Te = 32, et = 64, Pt = 128, _e = 256, Ot = 512, ue = 1024, Le = 2048, _t = 4096, vt = 8192, Zt = 16384, fi = 32768, br = 65536, ui = 1 << 19, Pn = 1 << 20, jt = Symbol("$state"), On = Symbol("legacy props"), ci = Symbol("");
var Fn = Array.isArray, di = Array.prototype.indexOf, vi = Array.from, Ft = Object.keys, Vt = Object.defineProperty, Xe = Object.getOwnPropertyDescriptor, hi = Object.getOwnPropertyDescriptors, gi = Object.prototype, _i = Array.prototype, Vn = Object.getPrototypeOf;
function Mn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function pi(e, t, r = !1) {
  return e === void 0 ? r ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
const yi = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let kt = [], $t = [];
function Un() {
  var e = kt;
  kt = [], Mn(e);
}
function qn() {
  var e = $t;
  $t = [], Mn(e);
}
function Gt(e) {
  kt.length === 0 && queueMicrotask(Un), kt.push(e);
}
function mi(e) {
  $t.length === 0 && yi(qn), $t.push(e);
}
function yn() {
  kt.length > 0 && Un(), $t.length > 0 && qn();
}
function Hn(e) {
  return e === this.v;
}
function wi(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Er(e) {
  return !wi(e, this.v);
}
function bi(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ei() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ci(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function xi() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ji() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Ai(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function ki() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function $i() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ri() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Ii() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Si = !1;
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
function se(e) {
  return /* @__PURE__ */ Ni(Ce(e));
}
// @__NO_SIDE_EFFECTS__
function Bn(e, t = !1) {
  const r = Ce(e);
  return t || (r.equals = Er), r;
}
// @__NO_SIDE_EFFECTS__
function Ni(e) {
  return $ !== null && !we && ($.f & be) !== 0 && (xe === null ? Vi([e]) : xe.push(e)), e;
}
function b(e, t) {
  return $ !== null && !we && ul() && ($.f & (be | wr)) !== 0 && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (xe === null || !xe.includes(e)) && Ii(), Di(e, t);
}
function Di(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = Xn(), Yn(e, Le), N !== null && (N.f & ue) !== 0 && (N.f & (Te | et)) === 0 && (Ie === null ? Mi([e]) : Ie.push(e))), t;
}
function Yn(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var l = r.length, i = 0; i < l; i++) {
      var a = r[i], s = a.f;
      (s & Le) === 0 && (je(a, t), (s & (ue | _e)) !== 0 && ((s & be) !== 0 ? Yn(
        /** @type {Derived} */
        a,
        _t
      ) : Kt(
        /** @type {Effect} */
        a
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Fe(e) {
  var t = be | Le, r = $ !== null && ($.f & be) !== 0 ? (
    /** @type {Derived} */
    $
  ) : null;
  return N === null || r !== null && (r.f & _e) !== 0 ? t |= _e : N.f |= Pn, {
    ctx: ee,
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
    parent: r ?? N
  };
}
// @__NO_SIDE_EFFECTS__
function Ti(e) {
  const t = /* @__PURE__ */ Fe(e);
  return t.equals = Er, t;
}
function Zn(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      De(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Li(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & be) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Pi(e) {
  var t, r = N;
  He(Li(e));
  try {
    Zn(e), t = el(e);
  } finally {
    He(r);
  }
  return t;
}
function Gn(e) {
  var t = Pi(e), r = (Ve || (e.f & _e) !== 0) && e.deps !== null ? _t : ue;
  je(e, r), e.equals(t) || (e.v = t, e.wv = Xn());
}
function Wt(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let O = !1;
function ct(e) {
  O = e;
}
let U;
function Ue(e) {
  if (e === null)
    throw Wt(), dt;
  return U = e;
}
function ht() {
  return Ue(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Be(U)
  );
}
function V(e) {
  if (O) {
    if (/* @__PURE__ */ Be(U) !== null)
      throw Wt(), dt;
    U = e;
  }
}
function Oi() {
  for (var e = 0, t = U; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === Tn) {
        if (e === 0) return t;
        e -= 1;
      } else (r === mr || r === Dn) && (e += 1);
    }
    var l = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Be(t)
    );
    t.remove(), t = l;
  }
}
function P(e, t = null, r) {
  if (typeof e != "object" || e === null || jt in e)
    return e;
  const l = Vn(e);
  if (l !== gi && l !== _i)
    return e;
  var i = /* @__PURE__ */ new Map(), a = Fn(e), s = Ce(0);
  a && i.set("length", Ce(
    /** @type {any[]} */
    e.length
  ));
  var c;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(u, d, v) {
        (!("value" in v) || v.configurable === !1 || v.enumerable === !1 || v.writable === !1) && ki();
        var h = i.get(d);
        return h === void 0 ? (h = Ce(v.value), i.set(d, h)) : b(h, P(v.value, c)), !0;
      },
      deleteProperty(u, d) {
        var v = i.get(d);
        if (v === void 0)
          d in u && i.set(d, Ce(oe));
        else {
          if (a && typeof d == "string") {
            var h = (
              /** @type {Source<number>} */
              i.get("length")
            ), g = Number(d);
            Number.isInteger(g) && g < h.v && b(h, g);
          }
          b(v, oe), mn(s);
        }
        return !0;
      },
      get(u, d, v) {
        var x;
        if (d === jt)
          return e;
        var h = i.get(d), g = d in u;
        if (h === void 0 && (!g || (x = Xe(u, d)) != null && x.writable) && (h = Ce(P(g ? u[d] : oe, c)), i.set(d, h)), h !== void 0) {
          var p = o(h);
          return p === oe ? void 0 : p;
        }
        return Reflect.get(u, d, v);
      },
      getOwnPropertyDescriptor(u, d) {
        var v = Reflect.getOwnPropertyDescriptor(u, d);
        if (v && "value" in v) {
          var h = i.get(d);
          h && (v.value = o(h));
        } else if (v === void 0) {
          var g = i.get(d), p = g == null ? void 0 : g.v;
          if (g !== void 0 && p !== oe)
            return {
              enumerable: !0,
              configurable: !0,
              value: p,
              writable: !0
            };
        }
        return v;
      },
      has(u, d) {
        var p;
        if (d === jt)
          return !0;
        var v = i.get(d), h = v !== void 0 && v.v !== oe || Reflect.has(u, d);
        if (v !== void 0 || N !== null && (!h || (p = Xe(u, d)) != null && p.writable)) {
          v === void 0 && (v = Ce(h ? P(u[d], c) : oe), i.set(d, v));
          var g = o(v);
          if (g === oe)
            return !1;
        }
        return h;
      },
      set(u, d, v, h) {
        var W;
        var g = i.get(d), p = d in u;
        if (a && d === "length")
          for (var x = v; x < /** @type {Source<number>} */
          g.v; x += 1) {
            var T = i.get(x + "");
            T !== void 0 ? b(T, oe) : x in u && (T = Ce(oe), i.set(x + "", T));
          }
        g === void 0 ? (!p || (W = Xe(u, d)) != null && W.writable) && (g = Ce(void 0), b(g, P(v, c)), i.set(d, g)) : (p = g.v !== oe, b(g, P(v, c)));
        var H = Reflect.getOwnPropertyDescriptor(u, d);
        if (H != null && H.set && H.set.call(h, v), !p) {
          if (a && typeof d == "string") {
            var re = (
              /** @type {Source<number>} */
              i.get("length")
            ), Z = Number(d);
            Number.isInteger(Z) && Z >= re.v && b(re, Z + 1);
          }
          mn(s);
        }
        return !0;
      },
      ownKeys(u) {
        o(s);
        var d = Reflect.ownKeys(u).filter((g) => {
          var p = i.get(g);
          return p === void 0 || p.v !== oe;
        });
        for (var [v, h] of i)
          h.v !== oe && !(v in u) && d.push(v);
        return d;
      },
      setPrototypeOf() {
        $i();
      }
    }
  );
}
function mn(e, t = 1) {
  b(e, e.v + t);
}
var wn, Wn, zn, Kn;
function hr() {
  if (wn === void 0) {
    wn = window, Wn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    zn = Xe(t, "firstChild").get, Kn = Xe(t, "nextSibling").get, e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Cr(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Ne(e) {
  return zn.call(e);
}
// @__NO_SIDE_EFFECTS__
function Be(e) {
  return Kn.call(e);
}
function M(e, t) {
  if (!O)
    return /* @__PURE__ */ Ne(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ne(U)
  );
  return r === null && (r = U.appendChild(Cr())), Ue(r), r;
}
function bn(e, t) {
  if (!O) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Ne(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Be(r) : r;
  }
  return U;
}
function z(e, t = 1, r = !1) {
  let l = O ? U : e;
  for (var i; t--; )
    i = l, l = /** @type {TemplateNode} */
    /* @__PURE__ */ Be(l);
  if (!O)
    return l;
  var a = l == null ? void 0 : l.nodeType;
  if (r && a !== 3) {
    var s = Cr();
    return l === null ? i == null || i.after(s) : l.before(s), Ue(s), s;
  }
  return Ue(l), /** @type {TemplateNode} */
  l;
}
function Fi(e) {
  e.textContent = "";
}
let Tt = !1, Mt = !1, Ut = null, Qe = !1, xr = !1;
function En(e) {
  xr = e;
}
let At = [];
let $ = null, we = !1;
function qe(e) {
  $ = e;
}
let N = null;
function He(e) {
  N = e;
}
let xe = null;
function Vi(e) {
  xe = e;
}
let Q = null, fe = 0, Ie = null;
function Mi(e) {
  Ie = e;
}
let Jn = 1, qt = 0, Ve = !1;
function Xn() {
  return ++Jn;
}
function Rt(e) {
  var h;
  var t = e.f;
  if ((t & Le) !== 0)
    return !0;
  if ((t & _t) !== 0) {
    var r = e.deps, l = (t & _e) !== 0;
    if (r !== null) {
      var i, a, s = (t & Ot) !== 0, c = l && N !== null && !Ve, u = r.length;
      if (s || c) {
        var d = (
          /** @type {Derived} */
          e
        ), v = d.parent;
        for (i = 0; i < u; i++)
          a = r[i], (s || !((h = a == null ? void 0 : a.reactions) != null && h.includes(d))) && (a.reactions ?? (a.reactions = [])).push(d);
        s && (d.f ^= Ot), c && v !== null && (v.f & _e) === 0 && (d.f ^= _e);
      }
      for (i = 0; i < u; i++)
        if (a = r[i], Rt(
          /** @type {Derived} */
          a
        ) && Gn(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!l || N !== null && !Ve) && je(e, ue);
  }
  return !1;
}
function Ui(e, t) {
  for (var r = t; r !== null; ) {
    if ((r.f & Pt) !== 0)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= Pt;
      }
    r = r.parent;
  }
  throw Tt = !1, e;
}
function qi(e) {
  return (e.f & Zt) === 0 && (e.parent === null || (e.parent.f & Pt) === 0);
}
function zt(e, t, r, l) {
  if (Tt) {
    if (r === null && (Tt = !1), qi(t))
      throw e;
    return;
  }
  r !== null && (Tt = !0);
  {
    Ui(e, t);
    return;
  }
}
function Qn(e, t, r = !0) {
  var l = e.reactions;
  if (l !== null)
    for (var i = 0; i < l.length; i++) {
      var a = l[i];
      (a.f & be) !== 0 ? Qn(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (r ? je(a, Le) : (a.f & ue) !== 0 && je(a, _t), Kt(
        /** @type {Effect} */
        a
      ));
    }
}
function el(e) {
  var p;
  var t = Q, r = fe, l = Ie, i = $, a = Ve, s = xe, c = ee, u = we, d = e.f;
  Q = /** @type {null | Value[]} */
  null, fe = 0, Ie = null, Ve = (d & _e) !== 0 && (we || !Qe || $ === null), $ = (d & (Te | et)) === 0 ? e : null, xe = null, jn(e.ctx), we = !1, qt++;
  try {
    var v = (
      /** @type {Function} */
      (0, e.fn)()
    ), h = e.deps;
    if (Q !== null) {
      var g;
      if (Ht(e, fe), h !== null && fe > 0)
        for (h.length = fe + Q.length, g = 0; g < Q.length; g++)
          h[fe + g] = Q[g];
      else
        e.deps = h = Q;
      if (!Ve)
        for (g = fe; g < h.length; g++)
          ((p = h[g]).reactions ?? (p.reactions = [])).push(e);
    } else h !== null && fe < h.length && (Ht(e, fe), h.length = fe);
    if (ul() && Ie !== null && !we && h !== null && (e.f & (be | _t | Le)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      Ie.length; g++)
        Qn(
          Ie[g],
          /** @type {Effect} */
          e
        );
    return i !== null && qt++, v;
  } finally {
    Q = t, fe = r, Ie = l, $ = i, Ve = a, xe = s, jn(c), we = u;
  }
}
function Hi(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var l = di.call(r, e);
    if (l !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[l] = r[i], r.pop());
    }
  }
  r === null && (t.f & be) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Q === null || !Q.includes(t)) && (je(t, _t), (t.f & (_e | Ot)) === 0 && (t.f ^= Ot), Zn(
    /** @type {Derived} **/
    t
  ), Ht(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Ht(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var l = t; l < r.length; l++)
      Hi(e, r[l]);
}
function jr(e) {
  var t = e.f;
  if ((t & Zt) === 0) {
    je(e, ue);
    var r = N, l = ee, i = Qe;
    N = e, Qe = !0;
    try {
      (t & wr) !== 0 ? Qi(e) : nl(e), rl(e);
      var a = el(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = Jn;
      var s = e.deps, c;
      pn && Si && e.f & Le;
    } catch (u) {
      zt(u, e, r, l || e.ctx);
    } finally {
      Qe = i, N = r;
    }
  }
}
function Bi() {
  try {
    xi();
  } catch (e) {
    if (Ut !== null)
      zt(e, Ut, null);
    else
      throw e;
  }
}
function tl() {
  var e = Qe;
  try {
    var t = 0;
    for (Qe = !0; At.length > 0; ) {
      t++ > 1e3 && Bi();
      var r = At, l = r.length;
      At = [];
      for (var i = 0; i < l; i++) {
        var a = Zi(r[i]);
        Yi(a);
      }
    }
  } finally {
    Mt = !1, Qe = e, Ut = null;
  }
}
function Yi(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var l = e[r];
      if ((l.f & (Zt | vt)) === 0)
        try {
          Rt(l) && (jr(l), l.deps === null && l.first === null && l.nodes_start === null && (l.teardown === null ? ll(l) : l.fn = null));
        } catch (i) {
          zt(i, l, null, l.ctx);
        }
    }
}
function Kt(e) {
  Mt || (Mt = !0, queueMicrotask(tl));
  for (var t = Ut = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (et | Te)) !== 0) {
      if ((r & ue) === 0) return;
      t.f ^= ue;
    }
  }
  At.push(t);
}
function Zi(e) {
  for (var t = [], r = e; r !== null; ) {
    var l = r.f, i = (l & (Te | et)) !== 0, a = i && (l & ue) !== 0;
    if (!a && (l & vt) === 0) {
      if ((l & Ln) !== 0)
        t.push(r);
      else if (i)
        r.f ^= ue;
      else {
        var s = $;
        try {
          $ = r, Rt(r) && jr(r);
        } catch (d) {
          zt(d, r, null, r.ctx);
        } finally {
          $ = s;
        }
      }
      var c = r.first;
      if (c !== null) {
        r = c;
        continue;
      }
    }
    var u = r.parent;
    for (r = r.next; r === null && u !== null; )
      r = u.next, u = u.parent;
  }
  return t;
}
function A(e) {
  var t;
  for (yn(); At.length > 0; )
    Mt = !0, tl(), yn();
  return (
    /** @type {T} */
    t
  );
}
async function Cn() {
  await Promise.resolve(), A();
}
function o(e) {
  var t = e.f, r = (t & be) !== 0;
  if ($ !== null && !we) {
    xe !== null && xe.includes(e) && Ri();
    var l = $.deps;
    e.rv < qt && (e.rv = qt, Q === null && l !== null && l[fe] === e ? fe++ : Q === null ? Q = [e] : (!Ve || !Q.includes(e)) && Q.push(e));
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var i = (
      /** @type {Derived} */
      e
    ), a = i.parent;
    a !== null && (a.f & _e) === 0 && (i.f ^= _e);
  }
  return r && (i = /** @type {Derived} */
  e, Rt(i) && Gn(i)), e.v;
}
function gt(e) {
  var t = we;
  try {
    return we = !0, e();
  } finally {
    we = t;
  }
}
const Gi = -7169;
function je(e, t) {
  e.f = e.f & Gi | t;
}
function Wi(e) {
  N === null && $ === null && Ci(), $ !== null && ($.f & _e) !== 0 && N === null && Ei(), xr && bi();
}
function zi(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function tt(e, t, r, l = !0) {
  var i = N, a = {
    ctx: ee,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Le,
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
      jr(a), a.f |= fi;
    } catch (u) {
      throw De(a), u;
    }
  else t !== null && Kt(a);
  var s = r && a.deps === null && a.first === null && a.nodes_start === null && a.teardown === null && (a.f & (Pn | Pt)) === 0;
  if (!s && l && (i !== null && zi(a, i), $ !== null && ($.f & be) !== 0)) {
    var c = (
      /** @type {Derived} */
      $
    );
    (c.effects ?? (c.effects = [])).push(a);
  }
  return a;
}
function Ki(e) {
  const t = tt(Yt, null, !1);
  return je(t, ue), t.teardown = e, t;
}
function gr(e) {
  Wi();
  var t = N !== null && (N.f & Te) !== 0 && ee !== null && !ee.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      ee
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: N,
      reaction: $
    });
  } else {
    var l = Ar(e);
    return l;
  }
}
function Ji(e) {
  const t = tt(et, e, !0);
  return () => {
    De(t);
  };
}
function Xi(e) {
  const t = tt(et, e, !0);
  return (r = {}) => new Promise((l) => {
    r.outro ? _r(t, () => {
      De(t), l(void 0);
    }) : (De(t), l(void 0));
  });
}
function Ar(e) {
  return tt(Ln, e, !1);
}
function kr(e) {
  return tt(Yt, e, !0);
}
function me(e, t = [], r = Fe) {
  const l = t.map(r);
  return $r(() => e(...l.map(o)));
}
function $r(e, t = 0) {
  return tt(Yt | wr | t, e, !0);
}
function Bt(e, t = !0) {
  return tt(Yt | Te, e, !0, t);
}
function rl(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = xr, l = $;
    En(!0), qe(null);
    try {
      t.call(null);
    } finally {
      En(r), qe(l);
    }
  }
}
function nl(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var l = r.next;
    (r.f & et) !== 0 ? r.parent = null : De(r, t), r = l;
  }
}
function Qi(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Te) === 0 && De(t), t = r;
  }
}
function De(e, t = !0) {
  var r = !1;
  if ((t || (e.f & ui) !== 0) && e.nodes_start !== null) {
    for (var l = e.nodes_start, i = e.nodes_end; l !== null; ) {
      var a = l === i ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Be(l)
      );
      l.remove(), l = a;
    }
    r = !0;
  }
  nl(e, t && !r), Ht(e, 0), je(e, Zt);
  var s = e.transitions;
  if (s !== null)
    for (const u of s)
      u.stop();
  rl(e);
  var c = e.parent;
  c !== null && c.first !== null && ll(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function ll(e) {
  var t = e.parent, r = e.prev, l = e.next;
  r !== null && (r.next = l), l !== null && (l.prev = r), t !== null && (t.first === e && (t.first = l), t.last === e && (t.last = r));
}
function _r(e, t) {
  var r = [];
  il(e, r, !0), ea(r, () => {
    De(e), t && t();
  });
}
function ea(e, t) {
  var r = e.length;
  if (r > 0) {
    var l = () => --r || t();
    for (var i of e)
      i.out(l);
  } else
    t();
}
function il(e, t, r) {
  if ((e.f & vt) === 0) {
    if (e.f ^= vt, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || r) && t.push(s);
    for (var l = e.first; l !== null; ) {
      var i = l.next, a = (l.f & br) !== 0 || (l.f & Te) !== 0;
      il(l, t, a ? r : !1), l = i;
    }
  }
}
function xn(e) {
  al(e, !0);
}
function al(e, t) {
  if ((e.f & vt) !== 0) {
    e.f ^= vt, (e.f & ue) === 0 && (e.f ^= ue), Rt(e) && (je(e, Le), Kt(e));
    for (var r = e.first; r !== null; ) {
      var l = r.next, i = (r.f & br) !== 0 || (r.f & Te) !== 0;
      al(r, i ? t : !1), r = l;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
function ol(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let ee = null;
function jn(e) {
  ee = e;
}
function sl(e, t = !1, r) {
  ee = {
    p: ee,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
}
function fl(e) {
  const t = ee;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var r = N, l = $;
      t.e = null;
      try {
        for (var i = 0; i < s.length; i++) {
          var a = s[i];
          He(a.effect), qe(a.reaction), Ar(a.fn);
        }
      } finally {
        He(r), qe(l);
      }
    }
    ee = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function ul() {
  return !0;
}
const ta = ["touchstart", "touchmove"];
function ra(e) {
  return ta.includes(e);
}
function na(e, t) {
  {
    const r = document.body;
    e.autofocus = !0, Gt(() => {
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
  var t = $, r = N;
  qe(null), He(null);
  try {
    return e();
  } finally {
    qe(t), He(r);
  }
}
function la(e, t, r, l = r) {
  e.addEventListener(t, () => dl(r));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), l(!0);
  } : e.__on_r = () => l(!0), cl();
}
const vl = /* @__PURE__ */ new Set(), pr = /* @__PURE__ */ new Set();
function ia(e, t, r, l = {}) {
  function i(a) {
    if (l.capture || xt.call(t, a), !a.cancelBubble)
      return dl(() => r == null ? void 0 : r.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Gt(() => {
    t.addEventListener(e, i, l);
  }) : t.addEventListener(e, i, l), i;
}
function Ke(e, t, r, l, i) {
  var a = { capture: l, passive: i }, s = ia(e, t, r, a);
  (t === document.body || t === window || t === document) && Ki(() => {
    t.removeEventListener(e, s, a);
  });
}
function aa(e) {
  for (var t = 0; t < e.length; t++)
    vl.add(e[t]);
  for (var r of pr)
    r(e);
}
function xt(e) {
  var Z;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), l = e.type, i = ((Z = e.composedPath) == null ? void 0 : Z.call(e)) || [], a = (
    /** @type {null | Element} */
    i[0] || e.target
  ), s = 0, c = e.__root;
  if (c) {
    var u = i.indexOf(c);
    if (u !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var d = i.indexOf(t);
    if (d === -1)
      return;
    u <= d && (s = u);
  }
  if (a = /** @type {Element} */
  i[s] || e.target, a !== t) {
    Vt(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var v = $, h = N;
    qe(null), He(null);
    try {
      for (var g, p = []; a !== null; ) {
        var x = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var T = a["__" + l];
          if (T != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (Fn(T)) {
              var [H, ...re] = T;
              H.apply(a, [e, ...re]);
            } else
              T.call(a, e);
        } catch (W) {
          g ? p.push(W) : g = W;
        }
        if (e.cancelBubble || x === t || x === null)
          break;
        a = x;
      }
      if (g) {
        for (let W of p)
          queueMicrotask(() => {
            throw W;
          });
        throw g;
      }
    } finally {
      e.__root = t, delete e.currentTarget, qe(v), He(h);
    }
  }
}
function Rr(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Me(e, t) {
  var r = (
    /** @type {Effect} */
    N
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function te(e, t) {
  var r = (t & ai) !== 0, l = (t & oi) !== 0, i, a = !e.startsWith("<!>");
  return () => {
    if (O)
      return Me(U, null), U;
    i === void 0 && (i = Rr(a ? e : "<!>" + e), r || (i = /** @type {Node} */
    /* @__PURE__ */ Ne(i)));
    var s = (
      /** @type {TemplateNode} */
      l || Wn ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ne(s)
      ), u = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Me(c, u);
    } else
      Me(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Jt(e, t, r = "svg") {
  var l = !e.startsWith("<!>"), i = `<${r}>${l ? e : "<!>" + e}</${r}>`, a;
  return () => {
    if (O)
      return Me(U, null), U;
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        Rr(i)
      ), c = (
        /** @type {Element} */
        /* @__PURE__ */ Ne(s)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ Ne(c);
    }
    var u = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return Me(u, u), u;
  };
}
function B(e, t) {
  if (O) {
    N.nodes_end = U, ht();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function oa(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function hl(e, t) {
  return gl(e, t);
}
function sa(e, t) {
  hr(), t.intro = t.intro ?? !1;
  const r = t.target, l = O, i = U;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ne(r)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== mr); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ Be(a);
    if (!a)
      throw dt;
    ct(!0), Ue(
      /** @type {Comment} */
      a
    ), ht();
    const s = gl(e, { ...t, anchor: a });
    if (U === null || U.nodeType !== 8 || /** @type {Comment} */
    U.data !== Tn)
      throw Wt(), dt;
    return ct(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === dt)
      return t.recover === !1 && ji(), hr(), Fi(r), ct(!1), hl(e, t);
    throw s;
  } finally {
    ct(l), Ue(i);
  }
}
const ut = /* @__PURE__ */ new Map();
function gl(e, { target: t, anchor: r, props: l = {}, events: i, context: a, intro: s = !0 }) {
  hr();
  var c = /* @__PURE__ */ new Set(), u = (h) => {
    for (var g = 0; g < h.length; g++) {
      var p = h[g];
      if (!c.has(p)) {
        c.add(p);
        var x = ra(p);
        t.addEventListener(p, xt, { passive: x });
        var T = ut.get(p);
        T === void 0 ? (document.addEventListener(p, xt, { passive: x }), ut.set(p, 1)) : ut.set(p, T + 1);
      }
    }
  };
  u(vi(vl)), pr.add(u);
  var d = void 0, v = Xi(() => {
    var h = r ?? t.appendChild(Cr());
    return Bt(() => {
      if (a) {
        sl({});
        var g = (
          /** @type {ComponentContext} */
          ee
        );
        g.c = a;
      }
      i && (l.$$events = i), O && Me(
        /** @type {TemplateNode} */
        h,
        null
      ), d = e(h, l) || {}, O && (N.nodes_end = U), a && fl();
    }), () => {
      var x;
      for (var g of c) {
        t.removeEventListener(g, xt);
        var p = (
          /** @type {number} */
          ut.get(g)
        );
        --p === 0 ? (document.removeEventListener(g, xt), ut.delete(g)) : ut.set(g, p);
      }
      pr.delete(u), h !== r && ((x = h.parentNode) == null || x.removeChild(h));
    };
  });
  return yr.set(d, v), d;
}
let yr = /* @__PURE__ */ new WeakMap();
function fa(e, t) {
  const r = yr.get(e);
  return r ? (yr.delete(e), r(t)) : Promise.resolve();
}
function J(e, t, [r, l] = [0, 0]) {
  O && r === 0 && ht();
  var i = e, a = null, s = null, c = oe, u = r > 0 ? br : 0, d = !1;
  const v = (g, p = !0) => {
    d = !0, h(p, g);
  }, h = (g, p) => {
    if (c === (c = g)) return;
    let x = !1;
    if (O && l !== -1) {
      if (r === 0) {
        const H = (
          /** @type {Comment} */
          i.data
        );
        H === mr ? l = 0 : H === Dn ? l = 1 / 0 : (l = parseInt(H.substring(1)), l !== l && (l = c ? 1 / 0 : -1));
      }
      const T = l > r;
      !!c === T && (i = Oi(), Ue(i), ct(!1), x = !0, l = -1);
    }
    c ? (a ? xn(a) : p && (a = Bt(() => p(i))), s && _r(s, () => {
      s = null;
    })) : (s ? xn(s) : p && (s = Bt(() => p(i, [r + 1, l]))), a && _r(a, () => {
      a = null;
    })), x && ct(!0);
  };
  $r(() => {
    d = !1, t(v), d || h(null, null);
  }, u), O && (i = U);
}
function Je(e, t, r, l, i) {
  var a = e, s = "", c;
  $r(() => {
    if (s === (s = t() ?? "")) {
      O && ht();
      return;
    }
    c !== void 0 && (De(c), c = void 0), s !== "" && (c = Bt(() => {
      if (O) {
        U.data;
        for (var u = ht(), d = u; u !== null && (u.nodeType !== 8 || /** @type {Comment} */
        u.data !== ""); )
          d = u, u = /** @type {TemplateNode} */
          /* @__PURE__ */ Be(u);
        if (u === null)
          throw Wt(), dt;
        Me(U, d), a = Ue(u);
        return;
      }
      var v = s + "", h = Rr(v);
      Me(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ne(h),
        /** @type {TemplateNode} */
        h.lastChild
      ), a.before(h);
    }));
  });
}
function ua(e, t, r, l, i) {
  var c;
  O && ht();
  var a = (c = t.$$slots) == null ? void 0 : c[r], s = !1;
  a === !0 && (a = t.children, s = !0), a === void 0 || a(e, s ? () => l : l);
}
function ca(e, t) {
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
const kn = [...` 	
\r\f \v\uFEFF`];
function da(e, t, r) {
  var l = "" + e;
  if (r) {
    for (var i in r)
      if (r[i])
        l = l ? l + " " + i : i;
      else if (l.length)
        for (var a = i.length, s = 0; (s = l.indexOf(i, s)) >= 0; ) {
          var c = s + a;
          (s === 0 || kn.includes(l[s - 1])) && (c === l.length || kn.includes(l[c])) ? l = (s === 0 ? "" : l.substring(0, s)) + l.substring(c + 1) : s = c;
        }
  }
  return l === "" ? null : l;
}
function va(e, t, r, l, i, a) {
  var s = e.__className;
  if (O || s !== r) {
    var c = da(r, l, a);
    (!O || c !== e.getAttribute("class")) && (c == null ? e.removeAttribute("class") : e.className = c), e.__className = r;
  } else if (a && i !== a)
    for (var u in a) {
      var d = !!a[u];
      (i == null || d !== !!i[u]) && e.classList.toggle(u, d);
    }
  return a;
}
const ha = Symbol("is custom element"), ga = Symbol("is html");
function $n(e) {
  if (O) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var l = e.value;
          S(e, "value", null), e.value = l;
        }
        if (e.hasAttribute("checked")) {
          var i = e.checked;
          S(e, "checked", null), e.checked = i;
        }
      }
    };
    e.__on_r = r, mi(r), cl();
  }
}
function _a(e, t) {
  var r = _l(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function S(e, t, r, l) {
  var i = _l(e);
  O && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || i[t] !== (i[t] = r) && (t === "loading" && (e[ci] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && pa(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function _l(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [ha]: e.nodeName.includes("-"),
      [ga]: e.namespaceURI === si
    })
  );
}
var Rn = /* @__PURE__ */ new Map();
function pa(e) {
  var t = Rn.get(e.nodeName);
  if (t) return t;
  Rn.set(e.nodeName, t = []);
  for (var r, l = e, i = Element.prototype; i !== l; ) {
    r = hi(l);
    for (var a in r)
      r[a].set && t.push(a);
    l = Vn(l);
  }
  return t;
}
function ya(e, t, r = t) {
  la(e, "change", (l) => {
    var i = l ? e.defaultChecked : e.checked;
    r(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (O && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  gt(t) == null) && r(e.checked), kr(() => {
    var l = t();
    e.checked = !!l;
  });
}
function In(e, t) {
  return e === t || (e == null ? void 0 : e[jt]) === t;
}
function dr(e = {}, t, r, l) {
  return Ar(() => {
    var i, a;
    return kr(() => {
      i = a, a = [], gt(() => {
        e !== r(...a) && (t(e, ...a), i && In(r(...i), e) && t(null, ...i));
      });
    }), () => {
      Gt(() => {
        a && In(r(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function pl(e) {
  ee === null && ol(), gr(() => {
    const t = gt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function ma(e) {
  ee === null && ol(), pl(() => () => gt(e));
}
let Dt = !1;
function wa(e) {
  var t = Dt;
  try {
    return Dt = !1, [e(), Dt];
  } finally {
    Dt = t;
  }
}
function I(e, t, r, l) {
  var Ye;
  var i = (r & ri) !== 0, a = !0, s = (r & li) !== 0, c = (r & ii) !== 0, u = !1, d;
  s ? [d, u] = wa(() => (
    /** @type {V} */
    e[t]
  )) : d = /** @type {V} */
  e[t];
  var v = jt in e || On in e, h = s && (((Ye = Xe(e, t)) == null ? void 0 : Ye.set) ?? (v && t in e && ((Y) => e[t] = Y))) || void 0, g = (
    /** @type {V} */
    l
  ), p = !0, x = !1, T = () => (x = !0, p && (p = !1, c ? g = gt(
    /** @type {() => V} */
    l
  ) : g = /** @type {V} */
  l), g);
  d === void 0 && l !== void 0 && (h && a && Ai(), d = T(), h && h(d));
  var H;
  if (H = () => {
    var Y = (
      /** @type {V} */
      e[t]
    );
    return Y === void 0 ? T() : (p = !0, x = !1, Y);
  }, (r & ni) === 0)
    return H;
  if (h) {
    var re = e.$$legacy;
    return function(Y, G) {
      return arguments.length > 0 ? ((!G || re || u) && h(G ? H() : Y), Y) : H();
    };
  }
  var Z = !1, W = /* @__PURE__ */ Bn(d), ne = /* @__PURE__ */ Fe(() => {
    var Y = H(), G = o(W);
    return Z ? (Z = !1, G) : W.v = Y;
  });
  return i || (ne.equals = Er), function(Y, G) {
    if (arguments.length > 0) {
      const Ae = G ? o(ne) : s ? P(Y) : Y;
      return ne.equals(Ae) || (Z = !0, b(W, Ae), x && g !== void 0 && (g = Ae), gt(() => o(ne))), Y;
    }
    return o(ne);
  };
}
function ba(e) {
  return new Ea(e);
}
var Se, ge;
class Ea {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    ur(this, Se);
    /** @type {Record<string, any>} */
    ur(this, ge);
    var a;
    var r = /* @__PURE__ */ new Map(), l = (s, c) => {
      var u = /* @__PURE__ */ Bn(c);
      return r.set(s, u), u;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, c) {
          return o(r.get(c) ?? l(c, Reflect.get(s, c)));
        },
        has(s, c) {
          return c === On ? !0 : (o(r.get(c) ?? l(c, Reflect.get(s, c))), Reflect.has(s, c));
        },
        set(s, c, u) {
          return b(r.get(c) ?? l(c, u), u), Reflect.set(s, c, u);
        }
      }
    );
    cr(this, ge, (t.hydrate ? sa : hl)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((a = t == null ? void 0 : t.props) != null && a.$$host) || t.sync === !1) && A(), cr(this, Se, i.$$events);
    for (const s of Object.keys(ae(this, ge)))
      s === "$set" || s === "$destroy" || s === "$on" || Vt(this, s, {
        get() {
          return ae(this, ge)[s];
        },
        /** @param {any} value */
        set(c) {
          ae(this, ge)[s] = c;
        },
        enumerable: !0
      });
    ae(this, ge).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(i, s);
    }, ae(this, ge).$destroy = () => {
      fa(ae(this, ge));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    ae(this, ge).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    ae(this, Se)[t] = ae(this, Se)[t] || [];
    const l = (...i) => r.call(this, ...i);
    return ae(this, Se)[t].push(l), () => {
      ae(this, Se)[t] = ae(this, Se)[t].filter(
        /** @param {any} fn */
        (i) => i !== l
      );
    };
  }
  $destroy() {
    ae(this, ge).$destroy();
  }
}
Se = new WeakMap(), ge = new WeakMap();
let yl;
typeof HTMLElement == "function" && (yl = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, l) {
    super();
    /** The Svelte component constructor */
    ye(this, "$$ctor");
    /** Slots */
    ye(this, "$$s");
    /** @type {any} The Svelte component instance */
    ye(this, "$$c");
    /** Whether or not the custom element is connected */
    ye(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    ye(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    ye(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    ye(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    ye(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    ye(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    ye(this, "$$me");
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
          const s = document.createElement("slot");
          i !== "default" && (s.name = i), B(a, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, l = Ca(this);
      for (const i of this.$$s)
        i in l && (i === "default" && !this.$$d.children ? (this.$$d.children = t(i), r.default = !0) : r[i] = t(i));
      for (const i of this.attributes) {
        const a = this.$$g_p(i.name);
        a in this.$$d || (this.$$d[a] = Lt(a, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = ba({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = Ji(() => {
        kr(() => {
          var i;
          this.$$r = !0;
          for (const a of Ft(this.$$c)) {
            if (!((i = this.$$p_d[a]) != null && i.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const s = Lt(
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
      for (const i in this.$$l)
        for (const a of this.$$l[i]) {
          const s = this.$$c.$on(i, a);
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
  attributeChangedCallback(t, r, l) {
    var i;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Lt(t, l, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
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
    return Ft(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function Lt(e, t, r, l) {
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
function Ca(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function xa(e, t, r, l, i, a) {
  let s = class extends yl {
    constructor() {
      super(e, r, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Ft(t).map(
        (c) => (t[c].attribute || c).toLowerCase()
      );
    }
  };
  return Ft(t).forEach((c) => {
    Vt(s.prototype, c, {
      get() {
        return this.$$c && c in this.$$c ? this.$$c[c] : this.$$d[c];
      },
      set(u) {
        var h;
        u = Lt(c, u, t), this.$$d[c] = u;
        var d = this.$$c;
        if (d) {
          var v = (h = Xe(d, c)) == null ? void 0 : h.get;
          v ? d[c] = u : d.$set({ [c]: u });
        }
      }
    });
  }), l.forEach((c) => {
    Vt(s.prototype, c, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[c];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
const ml = new TextEncoder();
function ja(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function Aa(e, t = "SHA-256", r = 1e5) {
  const l = Date.now().toString(16);
  e || (e = Math.round(Math.random() * r));
  const i = await wl(l, e, t);
  return {
    algorithm: t,
    challenge: i,
    salt: l,
    signature: ""
  };
}
async function wl(e, t, r) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return ja(
    await crypto.subtle.digest(
      r.toUpperCase(),
      ml.encode(e + t)
    )
  );
}
function ka(e, t, r = "SHA-256", l = 1e6, i = 0) {
  const a = new AbortController(), s = Date.now();
  return {
    promise: (async () => {
      for (let u = i; u <= l; u += 1) {
        if (a.signal.aborted)
          return null;
        if (await wl(t, u, r) === e)
          return {
            number: u,
            took: Date.now() - s
          };
      }
      return null;
    })(),
    controller: a
  };
}
function Sn() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function $a(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let l = 0; l < t.length; l++)
    r[l] = t.charCodeAt(l);
  return r;
}
function Ra(e, t = 12) {
  const r = new Uint8Array(t);
  for (let l = 0; l < t; l++)
    r[l] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function Ia(e, t = "", r = 1e6, l = 0) {
  const i = "AES-GCM", a = new AbortController(), s = Date.now(), c = async () => {
    for (let v = l; v <= r; v += 1) {
      if (a.signal.aborted || !u || !d)
        return null;
      try {
        const h = await crypto.subtle.decrypt(
          {
            name: i,
            iv: Ra(v)
          },
          u,
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
  let u = null, d = null;
  try {
    d = $a(e);
    const v = await crypto.subtle.digest(
      "SHA-256",
      ml.encode(t)
    );
    u = await crypto.subtle.importKey(
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
    promise: c(),
    controller: a
  };
}
var E = /* @__PURE__ */ ((e) => (e.CODE = "code", e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(E || {}), he = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.LOADING = "loading", e.PLAYING = "playing", e.PAUSED = "paused", e.READY = "ready", e))(he || {});
const vr = (e, t) => {
  let r = /* @__PURE__ */ Ti(() => pi(t == null ? void 0 : t(), 24));
  var l = Ta();
  me(() => {
    S(l, "width", o(r)), S(l, "height", o(r));
  }), B(e, l);
};
function Sa(e, t) {
  e.ctrlKey && e.altKey && e.code === "KeyA" && (e.preventDefault(), e.stopImmediatePropagation(), t());
}
function Na(e, t) {
  e.preventDefault(), t();
}
function Da(e, t, r, l, i, a, s, c) {
  var u;
  [
    E.UNVERIFIED,
    E.ERROR,
    E.EXPIRED,
    E.CODE
  ].includes(o(t)) ? r() !== !1 && ((u = o(l)) == null ? void 0 : u.reportValidity()) === !1 ? b(i, !1) : a() ? s() : c() : b(i, !0);
}
var Ta = /* @__PURE__ */ Jt('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="svelte-10f5jdy"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25" class="svelte-10f5jdy"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor" class="altcha-spinner svelte-10f5jdy"></path></svg>'), La = /* @__PURE__ */ te('<span role="status" aria-live="polite" class="svelte-10f5jdy"><!></span> <input type="hidden" class="svelte-10f5jdy">', 1), Pa = /* @__PURE__ */ te('<span role="status" aria-live="polite" class="svelte-10f5jdy"><!></span>'), Oa = /* @__PURE__ */ te('<span role="status" aria-live="polite" class="svelte-10f5jdy"><!></span>'), Fa = /* @__PURE__ */ te('<label class="svelte-10f5jdy"><!></label>'), Va = /* @__PURE__ */ te('<div class="svelte-10f5jdy"><a target="_blank" class="altcha-logo svelte-10f5jdy"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-10f5jdy"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor" class="svelte-10f5jdy"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor" class="svelte-10f5jdy"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor" class="svelte-10f5jdy"></path></svg></a></div>'), Ma = /* @__PURE__ */ te('<span role="status" aria-live="polite" class="svelte-10f5jdy"><!></span>'), Ua = /* @__PURE__ */ Jt('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-10f5jdy"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z" class="svelte-10f5jdy"></path></svg>'), qa = /* @__PURE__ */ Jt('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-10f5jdy"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z" class="svelte-10f5jdy"></path></svg>'), Ha = /* @__PURE__ */ Jt('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-10f5jdy"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z" class="svelte-10f5jdy"></path></svg>'), Ba = /* @__PURE__ */ te('<button type="button" class="altcha-code-challenge-audio svelte-10f5jdy"><!></button>'), Ya = /* @__PURE__ */ te('<audio hidden autoplay class="svelte-10f5jdy"><source class="svelte-10f5jdy"></audio>'), Za = /* @__PURE__ */ te('<div class="altcha-code-challenge svelte-10f5jdy" role="dialog"><div class="altcha-code-challenge-arrow svelte-10f5jdy"></div> <form class="svelte-10f5jdy"><img class="altcha-code-challenge-image svelte-10f5jdy" alt=""> <input type="text" autocomplete="off" name="code" class="altcha-code-challenge-input svelte-10f5jdy" required> <div class="altcha-code-challenge-buttons svelte-10f5jdy"><div class="altcha-code-challenge-buttons-left svelte-10f5jdy"><!> <button type="button" class="altcha-code-challenge-reload svelte-10f5jdy"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-10f5jdy"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z" class="svelte-10f5jdy"></path></svg></button></div> <button type="submit" class="altcha-code-challenge-verify svelte-10f5jdy"><!> </button></div> <!></form></div>'), Ga = /* @__PURE__ */ te('<div class="svelte-10f5jdy"><!></div>'), Wa = /* @__PURE__ */ te('<div class="svelte-10f5jdy"><!></div>'), za = /* @__PURE__ */ te('<div class="altcha-error svelte-10f5jdy"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="svelte-10f5jdy"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" class="svelte-10f5jdy"></path></svg> <!></div>'), Ka = /* @__PURE__ */ te('<div class="altcha-footer svelte-10f5jdy"><div class="svelte-10f5jdy"><!></div></div>'), Ja = /* @__PURE__ */ te('<div class="altcha-anchor-arrow svelte-10f5jdy"></div>'), Xa = /* @__PURE__ */ te('<!> <div class="altcha svelte-10f5jdy"><div class="altcha-main svelte-10f5jdy"><!> <div><input type="checkbox" class="svelte-10f5jdy"></div> <div class="altcha-label svelte-10f5jdy"><!></div> <!> <!></div> <!> <!> <!></div>', 1);
const Qa = {
  hash: "svelte-10f5jdy",
  code: `.altcha.svelte-10f5jdy {background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);position:relative;text-align:left;}.altcha.svelte-10f5jdy:focus-within {border-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating].svelte-10f5jdy {background:var(--altcha-color-base, white);display:none;filter:drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2));left:-100%;position:fixed;top:-100%;width:var(--altcha-max-width, 260px);z-index:999999;}.altcha[data-floating=top].svelte-10f5jdy .altcha-anchor-arrow:where(.svelte-10f5jdy) {border-bottom-color:transparent;border-top-color:var(--altcha-color-border, #a0a0a0);bottom:-12px;top:auto;}.altcha[data-floating=bottom].svelte-10f5jdy:focus-within::after {border-bottom-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating=top].svelte-10f5jdy:focus-within::after {border-top-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating].svelte-10f5jdy:not([data-state=unverified]) {display:block;}.altcha-anchor-arrow.svelte-10f5jdy {border:6px solid transparent;border-bottom-color:var(--altcha-color-border, #a0a0a0);content:"";height:0;left:12px;position:absolute;top:-12px;width:0;}.altcha-main.svelte-10f5jdy {align-items:center;display:flex;gap:0.4rem;padding:0.7rem;position:relative;}.altcha-code-challenge.svelte-10f5jdy {background:var(--altcha-color-base, white);border:1px solid var(--altcha-color-border-focus, currentColor);border-radius:var(--altcha-border-radius, 3px);filter:drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2));padding:0.5rem;position:absolute;top:2.5rem;z-index:9999999;}.altcha-code-challenge.svelte-10f5jdy > form:where(.svelte-10f5jdy) {display:flex;flex-direction:column;gap:0.5rem;}.altcha-code-challenge-input.svelte-10f5jdy {border:1px solid currentColor;border-radius:3px;box-sizing:border-box;outline:none;font-size:16px;padding:0.35rem;width:220px;}.altcha-code-challenge-input.svelte-10f5jdy:focus {outline:2px solid rgba(0, 0, 250, 0.2);}.altcha-code-challenge-input.svelte-10f5jdy:disabled {opacity:0.7;}.altcha-code-challenge-image.svelte-10f5jdy {border:1px solid currentColor;border-radius:3px;box-sizing:border-box;object-fit:contain;height:50px;width:220px;}.altcha-code-challenge-audio.svelte-10f5jdy,
.altcha-code-challenge-reload.svelte-10f5jdy {background:#efefef;border:0;border-radius:3px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0.35rem;}.altcha-code-challenge-audio.svelte-10f5jdy:disabled,
.altcha-code-challenge-reload.svelte-10f5jdy:disabled {opacity:0.7;pointer-events:none;}.altcha-code-challenge-audio.svelte-10f5jdy > :where(.svelte-10f5jdy),
.altcha-code-challenge-reload.svelte-10f5jdy > :where(.svelte-10f5jdy) {height:20px;width:20px;}.altcha-code-challenge-buttons.svelte-10f5jdy {display:flex;justify-content:space-between;}.altcha-code-challenge-buttons-left.svelte-10f5jdy {display:flex;gap:0.25rem;}.altcha-code-challenge-verify.svelte-10f5jdy {align-items:center;background:blue;border:0;border-radius:3px;color:white;cursor:pointer;display:flex;gap:0.5rem;font-size:100%;padding:0.35rem 1rem;}.altcha-code-challenge-verify.svelte-10f5jdy:disabled {opacity:0.7;pointer-events:none;}.altcha-code-challenge-arrow.svelte-10f5jdy {border:6px solid transparent;border-bottom-color:var(--altcha-color-border, currentColor);content:"";height:0;left:0.15rem;position:absolute;top:-12px;width:0;}.altcha[data-floating=top].svelte-10f5jdy .altcha-code-challenge:where(.svelte-10f5jdy) {top:-150px;}.altcha[data-floating=top].svelte-10f5jdy .altcha-code-challenge-arrow:where(.svelte-10f5jdy) {border-bottom-color:transparent;border-top-color:var(--altcha-color-border, currentColor);bottom:-12px;top:auto;}.altcha-label.svelte-10f5jdy {flex-grow:1;}.altcha-label.svelte-10f5jdy label:where(.svelte-10f5jdy) {cursor:pointer;}.altcha-logo.svelte-10f5jdy {color:currentColor;opacity:0.3;}.altcha-logo.svelte-10f5jdy:hover {opacity:1;}.altcha-error.svelte-10f5jdy {color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem;}.altcha-footer.svelte-10f5jdy {align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.4;padding:0.2rem 0.7rem;text-align:right;}.altcha-footer.svelte-10f5jdy:hover {opacity:1;}.altcha-footer.svelte-10f5jdy > :where(.svelte-10f5jdy):first-child {flex-grow:1;}.altcha-footer.svelte-10f5jdy a {color:currentColor;}.altcha-checkbox.svelte-10f5jdy {display:flex;align-items:center;height:24px;width:24px;}.altcha-checkbox.svelte-10f5jdy input:where(.svelte-10f5jdy) {width:18px;height:18px;margin:0;}.altcha-hidden.svelte-10f5jdy {display:none;}.altcha-spinner.svelte-10f5jdy {
  animation: svelte-10f5jdy-altcha-spinner 0.75s infinite linear;transform-origin:center;}

@keyframes svelte-10f5jdy-altcha-spinner {
  100% {
    transform: rotate(360deg);
  }
}`
};
function eo(e, t) {
  var vn, hn;
  sl(t, !0), ca(e, Qa);
  let r = I(t, "auto", 7, void 0), l = I(t, "blockspam", 7, void 0), i = I(t, "challengeurl", 7, void 0), a = I(t, "challengejson", 7, void 0), s = I(t, "customfetch", 7, void 0), c = I(t, "debug", 7, !1), u = I(t, "delay", 7, 0), d = I(t, "expire", 7, void 0), v = I(t, "floating", 7, void 0), h = I(t, "floatinganchor", 7, void 0), g = I(t, "floatingoffset", 7, void 0), p = I(t, "floatingpersist", 7, !1), x = I(t, "hidefooter", 7, !1), T = I(t, "hidelogo", 7, !1), H = I(t, "id", 7, void 0), re = I(t, "name", 7, "altcha"), Z = I(t, "maxnumber", 7, 1e6), W = I(t, "mockerror", 7, !1), ne = I(t, "obfuscated", 7, void 0), Ye = I(t, "plugins", 7, void 0), Y = I(t, "refetchonexpire", 7, !0), G = I(t, "spamfilter", 7, !1), Ae = I(t, "strings", 7, void 0), ce = I(t, "test", 7, !1), de = I(t, "verifyurl", 7, void 0), rt = I(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), pt = I(t, "workerurl", 7, void 0);
  const Ir = ["SHA-256", "SHA-384", "SHA-512"], Sr = "Visit Altcha.org", Nr = "https://altcha.org/", Ze = (n, f) => {
    t.$$host.dispatchEvent(new CustomEvent(n, { detail: f }));
  }, Dr = (hn = (vn = document.documentElement.lang) == null ? void 0 : vn.split("-")) == null ? void 0 : hn[0], Xt = /* @__PURE__ */ Fe(() => {
    var n;
    return i() && new URL(i(), location.origin).host.endsWith(".altcha.org") && !!((n = i()) != null && n.includes("apiKey=ckey_"));
  }), Qt = /* @__PURE__ */ Fe(() => a() ? zr(a()) : void 0), Tr = /* @__PURE__ */ Fe(() => Ae() ? zr(Ae()) : {}), L = /* @__PURE__ */ Fe(() => {
    var n;
    return {
      ariaLinkLabel: Sr,
      enterCode: "Enter code shown above",
      enterCodeAria: "Enter code you hear. Press Ctrl + Alt + A to play audio.",
      error: "Verification failed. Try again later.",
      expired: "Verification expired. Try again.",
      extraCheck: "Extra check required!",
      footer: `Protected by <a href="${Nr}" target="_blank" aria-label="${((n = o(Tr)) == null ? void 0 : n.ariaLinkLabel) || Sr}">ALTCHA</a>`,
      getAudioChallege: "Get an audio challenge",
      label: "I'm not a robot",
      loading: "Loading...",
      reload: "Reload",
      verify: "Verify",
      verified: "Verified",
      verifying: "Verifying...",
      waitAlert: "Verifying... please wait.",
      ...o(Tr)
    };
  }), Lr = /* @__PURE__ */ Fe(() => H() || `${re()}_checkbox`);
  let yt = se(!1), le = se(null), k = se(P(E.UNVERIFIED)), X = se(void 0), mt = se(null), Ge = se(null), nt = se(null), q = se(null), We = se(null), Ee = null, ve = se(null), ze = se(!1), Pe = [], er = se(!1), ke = se(null);
  gr(() => {
    Il(o(We));
  }), gr(() => {
    Sl(o(k));
  }), ma(() => {
    bl(), o(q) && (o(q).removeEventListener("submit", Br), o(q).removeEventListener("reset", Yr), o(q).removeEventListener("focusin", Hr), b(q, null)), Ee && (clearTimeout(Ee), Ee = null), document.removeEventListener("click", Ur), document.removeEventListener("scroll", qr), window.removeEventListener("resize", Wr);
  }), pl(() => {
    var n;
    R("mounted", "1.4.2"), R("workers", rt()), Cl(), R("plugins", Pe.length ? Pe.map((f) => f.constructor.pluginName).join(", ") : "none"), ce() && R("using test mode"), d() && rr(d()), r() !== void 0 && R("auto", r()), v() !== void 0 && Kr(v()), b(q, P((n = o(X)) == null ? void 0 : n.closest("form"))), o(q) && (o(q).addEventListener("submit", Br, { capture: !0 }), o(q).addEventListener("reset", Yr), (r() === "onfocus" || p() === "focus") && o(q).addEventListener("focusin", Hr)), r() === "onload" && (ne() ? wt() : Re()), o(Xt) && (x() || T()) && R("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      Ze("load");
    });
  });
  function tr(n, f) {
    return btoa(JSON.stringify({
      algorithm: n.algorithm,
      challenge: n.challenge,
      number: f.number,
      salt: n.salt,
      signature: n.signature,
      test: ce() ? !0 : void 0,
      took: f.took
    }));
  }
  function bl() {
    for (const n of Pe)
      n.destroy();
  }
  function Pr() {
    i() && Y() && o(k) === E.VERIFIED ? Re() : lt(E.EXPIRED, o(L).expired);
  }
  async function El() {
    var n;
    if (W())
      throw R("mocking error"), new Error("Mocked error.");
    if (o(Qt))
      return R("using provided json data"), o(Qt);
    if (ce())
      return R("generating test challenge", { test: ce() }), Aa(typeof ce() != "boolean" ? +ce() : void 0);
    {
      if (!i() && o(q)) {
        const C = o(q).getAttribute("action");
        C != null && C.includes("/form/") && i(C + "/altcha");
      }
      if (!i())
        throw new Error("Attribute challengeurl not set.");
      R("fetching challenge from", i());
      let f = null, _ = null;
      if (s())
        if (R("using customfetch"), typeof s() == "string") {
          if (f = globalThis[s()] || null, !f)
            throw new Error(`Custom fetch function not found: ${s()}`);
        } else
          f = s();
      const y = {
        headers: G() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      };
      if (f) {
        if (_ = await f(i(), y), !_ || !(_ instanceof Response))
          throw new Error("Custom fetch function did not return a response.");
      } else
        _ = await fetch(i(), y);
      if (_.status !== 200)
        throw new Error(`Server responded with ${_.status}.`);
      const m = _.headers.get("X-Altcha-Config"), j = await _.json(), w = new URLSearchParams((n = j.salt.split("?")) == null ? void 0 : n[1]), F = w.get("expires") || w.get("expire");
      if (F) {
        const C = new Date(+F * 1e3), D = isNaN(C.getTime()) ? 0 : C.getTime() - Date.now();
        D > 0 && rr(D);
      }
      if (m)
        try {
          const C = JSON.parse(m);
          C && typeof C == "object" && (C.verifyurl && (C.verifyurl = Mr(C.verifyurl)), Qr(C));
        } catch (C) {
          R("unable to configure from X-Altcha-Config", C);
        }
      return j;
    }
  }
  function Or(n) {
    var _, y;
    const f = (_ = o(q)) == null ? void 0 : _.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((y = f == null ? void 0 : f.value) == null ? void 0 : y.slice(f.value.indexOf("@"))) || void 0;
  }
  function Fr() {
    return G() === "ipAddress" ? {
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
    } : typeof G() == "object" ? G() : {
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
      ...((_ = o(q)) == null ? void 0 : _.querySelectorAll(n != null && n.length ? n.map((y) => `input[name="${y}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (y, m) => {
        const j = m.name, w = m.value;
        return j && w && (y[j] = /\n/.test(w) ? w.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : w), y;
      },
      {}
    );
  }
  function Mr(n) {
    const f = new URL(i() || location.origin), _ = new URL(n, f);
    return _.search || (_.search = f.search), _.toString();
  }
  function Cl() {
    const n = Ye() !== void 0 ? Ye().split(",") : void 0;
    for (const f of globalThis.altchaPlugins)
      (!n || n.includes(f.pluginName)) && Pe.push(new f({
        el: o(X),
        clarify: wt,
        dispatch: Ze,
        getConfiguration: en,
        getFloatingAnchor: tn,
        getState: rn,
        log: R,
        reset: lt,
        solve: Xr,
        setState: $e,
        setFloatingAnchor: ln,
        verify: Re
      }));
  }
  function R(...n) {
    (c() || n.some((f) => f instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${re()}]`, ...n);
  }
  function xl() {
    b(ve, P(he.PAUSED));
  }
  function jl(n) {
    b(ve, P(he.ERROR));
  }
  function Al() {
    b(ve, P(he.READY));
  }
  function kl() {
    b(ve, P(he.PLAYING));
  }
  function $l() {
    b(ve, P(he.PAUSED));
  }
  function Rl(n) {
    if (n.preventDefault(), n.stopPropagation(), o(le)) {
      const f = new FormData(n.target);
      b(ze, !0), Dl(tr(o(le).challenge, o(le).solution), String(f.get("code"))).then(({ reason: _, verified: y }) => {
        y ? (b(le, null), $e(E.VERIFIED), R("verified"), Cn().then(() => {
          Ze("verified", { payload: o(ke) });
        })) : (lt(), b(We, P(_ || "Verification failed")));
      }).finally(() => {
        b(ze, !1);
      });
    }
  }
  function Ur(n) {
    var _;
    const f = n.target;
    v() && f && !o(X).contains(f) && (o(k) === E.VERIFIED && p() === !1 || o(k) === E.VERIFIED && p() === "focus" && !((_ = o(q)) != null && _.matches(":focus-within")) || r() === "off" && o(k) === E.UNVERIFIED) && nn();
  }
  function qr() {
    v() && o(k) !== E.UNVERIFIED && bt();
  }
  function Il(n) {
    for (const f of Pe)
      typeof f.onErrorChange == "function" && f.onErrorChange(o(We));
  }
  function Hr(n) {
    o(k) === E.UNVERIFIED ? Re() : v() && p() === "focus" && o(k) === E.VERIFIED && nr();
  }
  function Br(n) {
    o(q) && r() === "onsubmit" ? o(k) === E.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), Re().then(() => {
      var f;
      (f = o(q)) == null || f.requestSubmit();
    })) : o(k) !== E.VERIFIED && (n.preventDefault(), n.stopPropagation(), o(k) === E.VERIFYING && Zr()) : o(q) && v() && r() === "off" && o(k) === E.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), nr());
  }
  function Yr() {
    lt();
  }
  function Zr() {
    o(k) === E.VERIFYING && o(L).waitAlert && alert(o(L).waitAlert);
  }
  function Gr() {
    o(Ge) ? o(Ge).paused ? (o(Ge).currentTime = 0, o(Ge).play()) : o(Ge).pause() : (b(er, !0), b(ve, P(he.LOADING)));
  }
  function Sl(n) {
    for (const f of Pe)
      typeof f.onStateChange == "function" && f.onStateChange(o(k));
    v() && o(k) !== E.UNVERIFIED && requestAnimationFrame(() => {
      bt();
    }), b(yt, o(k) === E.VERIFIED);
  }
  function Wr() {
    v() && bt();
  }
  function zr(n) {
    return JSON.parse(n);
  }
  async function Nl(n) {
    if (!de())
      throw new Error("Attribute verifyurl not set.");
    R("requesting server verification from", de());
    const f = { payload: n };
    if (G() !== !1) {
      const {
        blockedCountries: m,
        classifier: j,
        disableRules: w,
        email: F,
        expectedLanguages: C,
        expectedCountries: D,
        fields: ie,
        ipAddress: Oe,
        text: ar,
        timeZone: St
      } = Fr();
      f.blockedCountries = m, f.classifier = j, f.disableRules = w, f.email = F === !1 ? void 0 : Or(F), f.expectedCountries = D, f.expectedLanguages = C || (Dr ? [Dr] : void 0), f.fields = ie === !1 ? void 0 : Vr(ie), f.ipAddress = Oe === !1 ? void 0 : Oe || "auto", f.text = ar, f.timeZone = St === !1 ? void 0 : St || Sn();
    }
    const _ = await fetch(de(), {
      body: JSON.stringify(f),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (_.status !== 200)
      throw new Error(`Server responded with ${_.status}.`);
    const y = await _.json();
    if (y != null && y.payload && b(ke, P(y.payload)), Ze("serververification", y), l() && y.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  async function Dl(n, f) {
    if (!de())
      throw new Error("Attribute verifyurl not set.");
    R("requesting sentinel verification from", de());
    const _ = { code: f, payload: n };
    if (G() !== !1) {
      const { email: j, fields: w, ipAddress: F, text: C, timeZone: D } = Fr();
      _.email = j === !1 ? void 0 : Or(j), _.fields = w === !1 ? void 0 : Vr(w), _.ipAddress = F === !1 ? void 0 : F || "auto", _.text = C, _.timeZone = D === !1 ? void 0 : D || Sn();
    }
    const y = await fetch(de(), {
      body: JSON.stringify(_),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (y.status !== 200)
      throw new Error(`Server responded with ${y.status}.`);
    const m = await y.json();
    return m != null && m.payload && b(ke, P(m.payload)), Ze("sentinelverification", m), m;
  }
  function rr(n) {
    R("expire", n), Ee && (clearTimeout(Ee), Ee = null), n < 1 ? Pr() : Ee = setTimeout(Pr, n);
  }
  function Kr(n) {
    R("floating", n), v() !== n && (o(X).style.left = "", o(X).style.top = ""), v(n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : v()), v() ? (r() || r("onsubmit"), document.addEventListener("scroll", qr), document.addEventListener("click", Ur), window.addEventListener("resize", Wr)) : r() === "onsubmit" && r(void 0);
  }
  function Jr(n) {
    if (!n.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (n.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!Ir.includes(n.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${Ir.join(", ")}`);
    if (!n.challenge || n.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!n.salt || n.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function Xr(n) {
    let f = null;
    if ("Worker" in window) {
      try {
        f = await Tl(n, n.maxNumber || n.maxnumber || Z());
      } catch (_) {
        R(_);
      }
      if ((f == null ? void 0 : f.number) !== void 0 || "obfuscated" in n)
        return { data: n, solution: f };
    }
    if ("obfuscated" in n) {
      const _ = await Ia(n.obfuscated, n.key, n.maxNumber || n.maxnumber);
      return { data: n, solution: await _.promise };
    }
    return {
      data: n,
      solution: await ka(n.challenge, n.salt, n.algorithm, n.maxNumber || n.maxnumber || Z()).promise
    };
  }
  async function Tl(n, f = typeof ce() == "number" ? ce() : n.maxNumber || n.maxnumber || Z(), _ = Math.ceil(rt())) {
    const y = [];
    _ = Math.min(16, f, Math.max(1, _));
    for (let w = 0; w < _; w++)
      y.push(altchaCreateWorker(pt()));
    const m = Math.ceil(f / _), j = await Promise.all(y.map((w, F) => {
      const C = F * m;
      return new Promise((D) => {
        w.addEventListener("message", (ie) => {
          if (ie.data)
            for (const Oe of y)
              Oe !== w && Oe.postMessage({ type: "abort" });
          D(ie.data);
        }), w.postMessage({
          payload: n,
          max: C + m,
          start: C,
          type: "work"
        });
      });
    }));
    for (const w of y)
      w.terminate();
    return j.find((w) => !!w) || null;
  }
  async function wt() {
    if (!ne()) {
      $e(E.ERROR);
      return;
    }
    const n = Pe.find((f) => f.constructor.pluginName === "obfuscation");
    if (!n || !("clarify" in n)) {
      $e(E.ERROR), R("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in n && typeof n.clarify == "function")
      return n.clarify();
  }
  function Qr(n) {
    n.obfuscated !== void 0 && ne(n.obfuscated), n.auto !== void 0 && (r(n.auto), r() === "onload" && (ne() ? wt() : Re())), n.blockspam !== void 0 && l(!!n.blockspam), n.customfetch !== void 0 && s(n.customfetch), n.floatinganchor !== void 0 && h(n.floatinganchor), n.delay !== void 0 && u(n.delay), n.floatingoffset !== void 0 && g(n.floatingoffset), n.floating !== void 0 && Kr(n.floating), n.expire !== void 0 && (rr(n.expire), d(n.expire)), n.challenge && (a(typeof n.challenge == "string" ? n.challenge : JSON.stringify(n.challenge)), Jr(o(Qt))), n.challengeurl !== void 0 && i(n.challengeurl), n.debug !== void 0 && c(!!n.debug), n.hidefooter !== void 0 && x(!!n.hidefooter), n.hidelogo !== void 0 && T(!!n.hidelogo), n.maxnumber !== void 0 && Z(+n.maxnumber), n.mockerror !== void 0 && W(!!n.mockerror), n.name !== void 0 && re(n.name), n.refetchonexpire !== void 0 && Y(!!n.refetchonexpire), n.spamfilter !== void 0 && G(typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && Ae(typeof n.strings == "string" ? n.strings : JSON.stringify(n.strings)), n.test !== void 0 && ce(typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && de(n.verifyurl), n.workers !== void 0 && rt(+n.workers), n.workerurl !== void 0 && pt(n.workerurl);
  }
  function en() {
    return {
      auto: r(),
      blockspam: l(),
      challengeurl: i(),
      debug: c(),
      delay: u(),
      expire: d(),
      floating: v(),
      floatinganchor: h(),
      floatingoffset: g(),
      hidefooter: x(),
      hidelogo: T(),
      name: re(),
      maxnumber: Z(),
      mockerror: W(),
      obfuscated: ne(),
      refetchonexpire: Y(),
      spamfilter: G(),
      strings: o(L),
      test: ce(),
      verifyurl: de(),
      workers: rt(),
      workerurl: pt()
    };
  }
  function tn() {
    return o(nt);
  }
  function Ll(n) {
    return Pe.find((f) => f.constructor.pluginName === n);
  }
  function rn() {
    return o(k);
  }
  function nn() {
    o(X).style.display = "none";
  }
  function bt(n = 20) {
    var f;
    if (o(X))
      if (o(nt) || b(nt, P((h() ? document.querySelector(h()) : (f = o(q)) == null ? void 0 : f.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || o(q))), o(nt)) {
        const _ = parseInt(g(), 10) || 12, y = o(nt).getBoundingClientRect(), m = o(X).getBoundingClientRect(), j = document.documentElement.clientHeight, w = document.documentElement.clientWidth, F = v() === "auto" ? y.bottom + m.height + _ + n > j : v() === "top", C = Math.max(n, Math.min(w - n - m.width, y.left + y.width / 2 - m.width / 2));
        if (F ? o(X).style.top = `${y.top - (m.height + _)}px` : o(X).style.top = `${y.bottom + _}px`, o(X).style.left = `${C}px`, o(X).setAttribute("data-floating", F ? "top" : "bottom"), o(mt)) {
          const D = o(mt).getBoundingClientRect();
          o(mt).style.left = y.left - C + y.width / 2 - D.width / 2 + "px";
        }
      } else
        R("unable to find floating anchor element");
  }
  function lt(n = E.UNVERIFIED, f = null) {
    Ee && (clearTimeout(Ee), Ee = null), b(yt, !1), b(ke, null), b(le, null), b(er, !1), b(ve, null), $e(n, f);
  }
  function ln(n) {
    b(nt, P(n));
  }
  function $e(n, f = null) {
    b(k, P(n)), b(We, P(f)), Ze("statechange", {
      payload: o(ke),
      state: o(k)
    });
  }
  function nr() {
    o(X).style.display = "block", v() && bt();
  }
  async function Re() {
    return lt(E.VERIFYING), await new Promise((n) => setTimeout(n, u() || 0)), El().then((n) => (Jr(n), R("challenge", n), Xr(n))).then(({ data: n, solution: f }) => {
      if (R("solution", f), !f || n && "challenge" in n && !("clearText" in f))
        if ((f == null ? void 0 : f.number) !== void 0 && "challenge" in n)
          if (de() && "codeChallenge" in n)
            b(le, P({ challenge: n, solution: f }));
          else {
            if (de())
              return Nl(tr(n, f));
            b(ke, P(tr(n, f))), R("payload", o(ke));
          }
        else
          throw R("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      o(le) ? $e(E.CODE) : ($e(E.VERIFIED), R("verified"), Cn().then(() => {
        Ze("verified", { payload: o(ke) });
      }));
    }).catch((n) => {
      R(n), $e(E.ERROR, n.message);
    });
  }
  var an = Xa(), on = bn(an);
  ua(on, t, "default", {});
  var Et = z(on, 2), lr = M(Et), sn = M(lr);
  {
    var Pl = (n) => {
      vr(n);
    };
    J(sn, (n) => {
      o(k) === E.VERIFYING && n(Pl);
    });
  }
  var It = z(sn, 2);
  let fn;
  var it = M(It);
  $n(it), it.__change = [
    Da,
    k,
    G,
    q,
    yt,
    ne,
    wt,
    Re
  ], V(It);
  var ir = z(It, 2), Ol = M(ir);
  {
    var Fl = (n) => {
      var f = La(), _ = bn(f), y = M(_);
      Je(y, () => o(L).verified), V(_);
      var m = z(_, 2);
      $n(m), me(() => {
        S(m, "name", re()), _a(m, o(ke));
      }), B(n, f);
    }, Vl = (n, f) => {
      {
        var _ = (m) => {
          var j = Pa(), w = M(j);
          Je(w, () => o(L).verifying), V(j), B(m, j);
        }, y = (m, j) => {
          {
            var w = (C) => {
              var D = Oa(), ie = M(D);
              Je(ie, () => o(L).extraCheck), V(D), B(C, D);
            }, F = (C) => {
              var D = Fa(), ie = M(D);
              Je(ie, () => o(L).label), V(D), me(() => S(D, "for", o(Lr))), B(C, D);
            };
            J(
              m,
              (C) => {
                o(k) === E.CODE ? C(w) : C(F, !1);
              },
              j
            );
          }
        };
        J(
          n,
          (m) => {
            o(k) === E.VERIFYING ? m(_) : m(y, !1);
          },
          f
        );
      }
    };
    J(Ol, (n) => {
      o(k) === E.VERIFIED ? n(Fl) : n(Vl, !1);
    });
  }
  V(ir);
  var un = z(ir, 2);
  {
    var Ml = (n) => {
      var f = Va(), _ = M(f);
      S(_, "href", Nr), V(f), me(() => S(_, "aria-label", o(L).ariaLinkLabel)), B(n, f);
    };
    J(un, (n) => {
      (T() !== !0 || o(Xt)) && n(Ml);
    });
  }
  var Ul = z(un, 2);
  {
    var ql = (n) => {
      var f = Za(), _ = z(M(f), 2), y = M(_), m = z(y, 2);
      na(m), m.__keydown = [
        Sa,
        Gr
      ];
      var j = z(m, 2), w = M(j), F = M(w);
      {
        var C = (pe) => {
          var K = Ba();
          K.__click = Gr;
          var Nt = M(K);
          {
            var Ct = (at) => {
              var ot = Ma(), or = M(ot);
              vr(or, () => 20), V(ot), me(() => S(ot, "aria-label", o(L).loading)), B(at, ot);
            }, zl = (at, ot) => {
              {
                var or = (st) => {
                  var sr = Ua();
                  B(st, sr);
                }, Kl = (st, sr) => {
                  {
                    var Jl = (ft) => {
                      var fr = qa();
                      B(ft, fr);
                    }, Xl = (ft) => {
                      var fr = Ha();
                      B(ft, fr);
                    };
                    J(
                      st,
                      (ft) => {
                        o(ve) === he.PLAYING ? ft(Jl) : ft(Xl, !1);
                      },
                      sr
                    );
                  }
                };
                J(
                  at,
                  (st) => {
                    o(ve) === he.ERROR ? st(or) : st(Kl, !1);
                  },
                  ot
                );
              }
            };
            J(Nt, (at) => {
              o(ve) === he.LOADING ? at(Ct) : at(zl, !1);
            });
          }
          V(K), me(() => {
            S(K, "aria-label", o(L).getAudioChallege), S(K, "title", o(L).getAudioChallege), K.disabled = o(ve) === he.LOADING || o(ve) === he.ERROR || o(ze);
          }), B(pe, K);
        };
        J(F, (pe) => {
          o(le).challenge.codeChallenge.audio && pe(C);
        });
      }
      var D = z(F, 2);
      D.__click = [Na, Re], V(w);
      var ie = z(w, 2), Oe = M(ie);
      {
        var ar = (pe) => {
          vr(pe, () => 16);
        };
        J(Oe, (pe) => {
          o(ze) && pe(ar);
        });
      }
      var St = z(Oe);
      V(ie), V(j);
      var Gl = z(j, 2);
      {
        var Wl = (pe) => {
          var K = Ya(), Nt = M(K);
          V(K), dr(K, (Ct) => b(Ge, Ct), () => o(Ge)), me((Ct) => S(Nt, "src", Ct), [
            () => Mr(o(le).challenge.codeChallenge.audio)
          ]), Ke("loadeddata", K, Al), Ke("pause", K, $l), Ke("play", K, kl), Ke("ended", K, xl), Ke("error", Nt, jl), B(pe, K);
        };
        J(Gl, (pe) => {
          o(le).challenge.codeChallenge.audio && o(er) && pe(Wl);
        });
      }
      V(_), V(f), me(() => {
        S(f, "aria-label", o(L).extraCheck), S(y, "src", o(le).challenge.codeChallenge.image), S(m, "minlength", o(le).challenge.codeChallenge.length || 1), S(m, "maxlength", o(le).challenge.codeChallenge.length), S(m, "placeholder", o(L).enterCode), S(m, "aria-label", o(L).enterCodeAria), m.disabled = o(ze), S(D, "aria-label", o(L).reload), S(D, "title", o(L).reload), D.disabled = o(ze), ie.disabled = o(ze), S(ie, "aria-label", o(L).verify), oa(St, ` ${o(L).verify ?? ""}`);
      }), Ke("submit", _, Rl), B(n, f);
    };
    J(Ul, (n) => {
      var f;
      (f = o(le)) != null && f.challenge.codeChallenge && n(ql);
    });
  }
  V(lr);
  var cn = z(lr, 2);
  {
    var Hl = (n) => {
      var f = za(), _ = z(M(f), 2);
      {
        var y = (j) => {
          var w = Ga(), F = M(w);
          Je(F, () => o(L).expired), V(w), me(() => S(w, "title", o(We))), B(j, w);
        }, m = (j) => {
          var w = Wa(), F = M(w);
          Je(F, () => o(L).error), V(w), me(() => S(w, "title", o(We))), B(j, w);
        };
        J(_, (j) => {
          o(k) === E.EXPIRED ? j(y) : j(m, !1);
        });
      }
      V(f), B(n, f);
    };
    J(cn, (n) => {
      (o(We) || o(k) === E.EXPIRED) && n(Hl);
    });
  }
  var dn = z(cn, 2);
  {
    var Bl = (n) => {
      var f = Ka(), _ = M(f), y = M(_);
      Je(y, () => o(L).footer), V(_), V(f), B(n, f);
    };
    J(dn, (n) => {
      o(L).footer && (x() !== !0 || o(Xt)) && n(Bl);
    });
  }
  var Yl = z(dn, 2);
  {
    var Zl = (n) => {
      var f = Ja();
      dr(f, (_) => b(mt, _), () => o(mt)), B(n, f);
    };
    J(Yl, (n) => {
      v() && n(Zl);
    });
  }
  return V(Et), dr(Et, (n) => b(X, n), () => o(X)), me(
    (n) => {
      S(Et, "data-state", o(k)), S(Et, "data-floating", v()), fn = va(It, 1, "altcha-checkbox svelte-10f5jdy", null, fn, n), S(it, "id", o(Lr)), it.required = r() !== "onsubmit" && (!v() || r() !== "off");
    },
    [
      () => ({
        "altcha-hidden": o(k) === E.VERIFYING
      })
    ]
  ), Ke("invalid", it, Zr), ya(it, () => o(yt), (n) => b(yt, n)), B(e, an), fl({
    clarify: wt,
    configure: Qr,
    getConfiguration: en,
    getFloatingAnchor: tn,
    getPlugin: Ll,
    getState: rn,
    hide: nn,
    repositionFloating: bt,
    reset: lt,
    setFloatingAnchor: ln,
    setState: $e,
    show: nr,
    verify: Re,
    get auto() {
      return r();
    },
    set auto(n = void 0) {
      r(n), A();
    },
    get blockspam() {
      return l();
    },
    set blockspam(n = void 0) {
      l(n), A();
    },
    get challengeurl() {
      return i();
    },
    set challengeurl(n = void 0) {
      i(n), A();
    },
    get challengejson() {
      return a();
    },
    set challengejson(n = void 0) {
      a(n), A();
    },
    get customfetch() {
      return s();
    },
    set customfetch(n = void 0) {
      s(n), A();
    },
    get debug() {
      return c();
    },
    set debug(n = !1) {
      c(n), A();
    },
    get delay() {
      return u();
    },
    set delay(n = 0) {
      u(n), A();
    },
    get expire() {
      return d();
    },
    set expire(n = void 0) {
      d(n), A();
    },
    get floating() {
      return v();
    },
    set floating(n = void 0) {
      v(n), A();
    },
    get floatinganchor() {
      return h();
    },
    set floatinganchor(n = void 0) {
      h(n), A();
    },
    get floatingoffset() {
      return g();
    },
    set floatingoffset(n = void 0) {
      g(n), A();
    },
    get floatingpersist() {
      return p();
    },
    set floatingpersist(n = !1) {
      p(n), A();
    },
    get hidefooter() {
      return x();
    },
    set hidefooter(n = !1) {
      x(n), A();
    },
    get hidelogo() {
      return T();
    },
    set hidelogo(n = !1) {
      T(n), A();
    },
    get id() {
      return H();
    },
    set id(n = void 0) {
      H(n), A();
    },
    get name() {
      return re();
    },
    set name(n = "altcha") {
      re(n), A();
    },
    get maxnumber() {
      return Z();
    },
    set maxnumber(n = 1e6) {
      Z(n), A();
    },
    get mockerror() {
      return W();
    },
    set mockerror(n = !1) {
      W(n), A();
    },
    get obfuscated() {
      return ne();
    },
    set obfuscated(n = void 0) {
      ne(n), A();
    },
    get plugins() {
      return Ye();
    },
    set plugins(n = void 0) {
      Ye(n), A();
    },
    get refetchonexpire() {
      return Y();
    },
    set refetchonexpire(n = !0) {
      Y(n), A();
    },
    get spamfilter() {
      return G();
    },
    set spamfilter(n = !1) {
      G(n), A();
    },
    get strings() {
      return Ae();
    },
    set strings(n = void 0) {
      Ae(n), A();
    },
    get test() {
      return ce();
    },
    set test(n = !1) {
      ce(n), A();
    },
    get verifyurl() {
      return de();
    },
    set verifyurl(n = void 0) {
      de(n), A();
    },
    get workers() {
      return rt();
    },
    set workers(n = Math.min(16, navigator.hardwareConcurrency || 8)) {
      rt(n), A();
    },
    get workerurl() {
      return pt();
    },
    set workerurl(n = void 0) {
      pt(n), A();
    }
  });
}
aa(["change", "keydown", "click"]);
customElements.define("altcha-widget", xa(
  eo,
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
  eo as Altcha
};
