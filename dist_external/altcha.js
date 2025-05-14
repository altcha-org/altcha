var pl = Object.defineProperty;
var En = (e) => {
  throw TypeError(e);
};
var bl = (e, t, r) => t in e ? pl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var pe = (e, t, r) => bl(e, typeof t != "symbol" ? t + "" : t, r), Cn = (e, t, r) => t.has(e) || En("Cannot " + r);
var oe = (e, t, r) => (Cn(e, t, "read from private field"), r ? r.call(e) : t.get(e)), mr = (e, t, r) => t.has(e) ? En("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), wr = (e, t, r, i) => (Cn(e, t, "write to private field"), i ? i.call(e, r) : t.set(e, r), r);
const yl = "5";
var Vn;
typeof window < "u" && ((Vn = window.__svelte ?? (window.__svelte = {})).v ?? (Vn.v = /* @__PURE__ */ new Set())).add(yl);
const El = 1, Cl = 4, Al = 8, Il = 16, Rl = 1, kl = 2, $r = "[", Mn = "[!", qn = "]", vt = {}, se = Symbol(), xl = "http://www.w3.org/1999/xhtml", An = !1;
function Un(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var jn = Array.isArray, $l = Array.prototype.indexOf, Nl = Array.from, Yt = Object.keys, Gt = Object.defineProperty, Qe = Object.getOwnPropertyDescriptor, Sl = Object.getOwnPropertyDescriptors, Tl = Object.prototype, Dl = Array.prototype, Bn = Object.getPrototypeOf, In = Object.isExtensible;
function Hn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Ll(e, t, r = !1) {
  return e === void 0 ? r ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
const be = 2, Yn = 4, Qt = 8, Nr = 16, Pe = 32, tt = 64, Zt = 128, ve = 256, Wt = 512, ue = 1024, Ne = 2048, rt = 4096, ht = 8192, er = 16384, Pl = 32768, Sr = 65536, Ol = 1 << 19, Gn = 1 << 20, Er = 1 << 21, xt = Symbol("$state"), Zn = Symbol("legacy props"), Fl = Symbol("");
function Vl(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ml() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function ql(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ul() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function jl() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Bl(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Hl() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Yl() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Gl() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function tr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let F = !1;
function dt(e) {
  F = e;
}
let O;
function He(e) {
  if (e === null)
    throw tr(), vt;
  return O = e;
}
function gt() {
  return He(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ze(O)
  );
}
function Z(e) {
  if (F) {
    if (/* @__PURE__ */ Ze(O) !== null)
      throw tr(), vt;
    O = e;
  }
}
function Zl() {
  for (var e = 0, t = O; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === qn) {
        if (e === 0) return t;
        e -= 1;
      } else (r === $r || r === Mn) && (e += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ze(t)
    );
    t.remove(), t = i;
  }
}
let Wl = !1;
function je(e) {
  if (typeof e != "object" || e === null || xt in e)
    return e;
  const t = Bn(e);
  if (t !== Tl && t !== Dl)
    return e;
  var r = /* @__PURE__ */ new Map(), i = jn(e), l = /* @__PURE__ */ V(0), a = S, s = (f) => {
    var c = S;
    Se(a);
    var d = f();
    return Se(c), d;
  };
  return i && r.set("length", /* @__PURE__ */ V(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(f, c, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && Hl();
        var m = r.get(c);
        return m === void 0 ? (m = s(() => /* @__PURE__ */ V(d.value)), r.set(c, m)) : p(
          m,
          s(() => je(d.value))
        ), !0;
      },
      deleteProperty(f, c) {
        var d = r.get(c);
        if (d === void 0)
          c in f && (r.set(
            c,
            s(() => /* @__PURE__ */ V(se))
          ), pr(l));
        else {
          if (i && typeof c == "string") {
            var m = (
              /** @type {Source<number>} */
              r.get("length")
            ), v = Number(c);
            Number.isInteger(v) && v < m.v && p(m, v);
          }
          p(d, se), pr(l);
        }
        return !0;
      },
      get(f, c, d) {
        var b;
        if (c === xt)
          return e;
        var m = r.get(c), v = c in f;
        if (m === void 0 && (!v || (b = Qe(f, c)) != null && b.writable) && (m = s(() => /* @__PURE__ */ V(je(v ? f[c] : se))), r.set(c, m)), m !== void 0) {
          var h = o(m);
          return h === se ? void 0 : h;
        }
        return Reflect.get(f, c, d);
      },
      getOwnPropertyDescriptor(f, c) {
        var d = Reflect.getOwnPropertyDescriptor(f, c);
        if (d && "value" in d) {
          var m = r.get(c);
          m && (d.value = o(m));
        } else if (d === void 0) {
          var v = r.get(c), h = v == null ? void 0 : v.v;
          if (v !== void 0 && h !== se)
            return {
              enumerable: !0,
              configurable: !0,
              value: h,
              writable: !0
            };
        }
        return d;
      },
      has(f, c) {
        var h;
        if (c === xt)
          return !0;
        var d = r.get(c), m = d !== void 0 && d.v !== se || Reflect.has(f, c);
        if (d !== void 0 || T !== null && (!m || (h = Qe(f, c)) != null && h.writable)) {
          d === void 0 && (d = s(() => /* @__PURE__ */ V(m ? je(f[c]) : se)), r.set(c, d));
          var v = o(d);
          if (v === se)
            return !1;
        }
        return m;
      },
      set(f, c, d, m) {
        var fe;
        var v = r.get(c), h = c in f;
        if (i && c === "length")
          for (var b = d; b < /** @type {Source<number>} */
          v.v; b += 1) {
            var $ = r.get(b + "");
            $ !== void 0 ? p($, se) : b in f && ($ = s(() => /* @__PURE__ */ V(se)), r.set(b + "", $));
          }
        v === void 0 ? (!h || (fe = Qe(f, c)) != null && fe.writable) && (v = s(() => /* @__PURE__ */ V(void 0)), p(
          v,
          s(() => je(d))
        ), r.set(c, v)) : (h = v.v !== se, p(
          v,
          s(() => je(d))
        ));
        var L = Reflect.getOwnPropertyDescriptor(f, c);
        if (L != null && L.set && L.set.call(m, d), !h) {
          if (i && typeof c == "string") {
            var M = (
              /** @type {Source<number>} */
              r.get("length")
            ), le = Number(c);
            Number.isInteger(le) && le >= M.v && p(M, le + 1);
          }
          pr(l);
        }
        return !0;
      },
      ownKeys(f) {
        o(l);
        var c = Reflect.ownKeys(f).filter((v) => {
          var h = r.get(v);
          return h === void 0 || h.v !== se;
        });
        for (var [d, m] of r)
          m.v !== se && !(d in f) && c.push(d);
        return c;
      },
      setPrototypeOf() {
        Yl();
      }
    }
  );
}
function pr(e, t = 1) {
  p(e, e.v + t);
}
var Rn, Wn, Jn, Kn;
function Cr() {
  if (Rn === void 0) {
    Rn = window, Wn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Jn = Qe(t, "firstChild").get, Kn = Qe(t, "nextSibling").get, In(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), In(r) && (r.__t = void 0);
  }
}
function rr(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function me(e) {
  return Jn.call(e);
}
// @__NO_SIDE_EFFECTS__
function Ze(e) {
  return Kn.call(e);
}
function W(e, t) {
  if (!F)
    return /* @__PURE__ */ me(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ me(O)
  );
  return r === null && (r = O.appendChild(rr())), He(r), r;
}
function It(e, t) {
  if (!F) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ me(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Ze(r) : r;
  }
  return O;
}
function J(e, t = 1, r = !1) {
  let i = F ? O : e;
  for (var l; t--; )
    l = i, i = /** @type {TemplateNode} */
    /* @__PURE__ */ Ze(i);
  if (!F)
    return i;
  var a = i == null ? void 0 : i.nodeType;
  if (r && a !== 3) {
    var s = rr();
    return i === null ? l == null || l.after(s) : i.before(s), He(s), s;
  }
  return He(i), /** @type {TemplateNode} */
  i;
}
function Jl(e) {
  e.textContent = "";
}
function Xn(e) {
  return e === this.v;
}
function Kl(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Tr(e) {
  return !Kl(e, this.v);
}
// @__NO_SIDE_EFFECTS__
function nr(e) {
  var t = be | Ne, r = S !== null && (S.f & be) !== 0 ? (
    /** @type {Derived} */
    S
  ) : null;
  return T === null || r !== null && (r.f & ve) !== 0 ? t |= ve : T.f |= Gn, {
    ctx: ie,
    deps: null,
    effects: null,
    equals: Xn,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: r ?? T
  };
}
// @__NO_SIDE_EFFECTS__
function Rt(e) {
  const t = /* @__PURE__ */ nr(e);
  return ci(t), t;
}
// @__NO_SIDE_EFFECTS__
function Xl(e) {
  const t = /* @__PURE__ */ nr(e);
  return t.equals = Tr, t;
}
function zn(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Ye(
        /** @type {Effect} */
        t[r]
      );
  }
}
function zl(e) {
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
function Qn(e) {
  var t, r = T;
  Ge(zl(e));
  try {
    zn(e), t = gi(e);
  } finally {
    Ge(r);
  }
  return t;
}
function ei(e) {
  var t = Qn(e), r = (Be || (e.f & ve) !== 0) && e.deps !== null ? rt : ue;
  ye(e, r), e.equals(t) || (e.v = t, e.wv = vi());
}
function Ql(e) {
  T === null && S === null && ql(), S !== null && (S.f & ve) !== 0 && T === null && Ml(), Dt && Vl();
}
function ea(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function nt(e, t, r, i = !0) {
  var l = T, a = {
    ctx: ie,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Ne,
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
      Or(a), a.f |= Pl;
    } catch (c) {
      throw Ye(a), c;
    }
  else t !== null && lr(a);
  var s = r && a.deps === null && a.first === null && a.nodes_start === null && a.teardown === null && (a.f & (Gn | Zt)) === 0;
  if (!s && i && (l !== null && ea(a, l), S !== null && (S.f & be) !== 0)) {
    var f = (
      /** @type {Derived} */
      S
    );
    (f.effects ?? (f.effects = [])).push(a);
  }
  return a;
}
function ti(e) {
  const t = nt(Qt, null, !1);
  return ye(t, ue), t.teardown = e, t;
}
function Ar(e) {
  Ql();
  var t = T !== null && (T.f & Pe) !== 0 && ie !== null && !ie.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      ie
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: T,
      reaction: S
    });
  } else {
    var i = Dr(e);
    return i;
  }
}
function ta(e) {
  const t = nt(tt, e, !0);
  return () => {
    Ye(t);
  };
}
function ra(e) {
  const t = nt(tt, e, !0);
  return (r = {}) => new Promise((i) => {
    r.outro ? Rr(t, () => {
      Ye(t), i(void 0);
    }) : (Ye(t), i(void 0));
  });
}
function Dr(e) {
  return nt(Yn, e, !1);
}
function Lr(e) {
  return nt(Qt, e, !0);
}
function ke(e, t = [], r = nr) {
  const i = t.map(r);
  return ri(() => e(...i.map(o)));
}
function ri(e, t = 0) {
  return nt(Qt | Nr | t, e, !0);
}
function Ir(e, t = !0) {
  return nt(Qt | Pe, e, !0, t);
}
function ni(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Dt, i = S;
    xn(!0), Se(null);
    try {
      t.call(null);
    } finally {
      xn(r), Se(i);
    }
  }
}
function ii(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var i = r.next;
    (r.f & tt) !== 0 ? r.parent = null : Ye(r, t), r = i;
  }
}
function na(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Pe) === 0 && Ye(t), t = r;
  }
}
function Ye(e, t = !0) {
  var r = !1;
  (t || (e.f & Ol) !== 0) && e.nodes_start !== null && (li(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), r = !0), ii(e, t && !r), zt(e, 0), ye(e, er);
  var i = e.transitions;
  if (i !== null)
    for (const a of i)
      a.stop();
  ni(e);
  var l = e.parent;
  l !== null && l.first !== null && ai(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function li(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ze(e)
    );
    e.remove(), e = r;
  }
}
function ai(e) {
  var t = e.parent, r = e.prev, i = e.next;
  r !== null && (r.next = i), i !== null && (i.prev = r), t !== null && (t.first === e && (t.first = i), t.last === e && (t.last = r));
}
function Rr(e, t) {
  var r = [];
  oi(e, r, !0), ia(r, () => {
    Ye(e), t && t();
  });
}
function ia(e, t) {
  var r = e.length;
  if (r > 0) {
    var i = () => --r || t();
    for (var l of e)
      l.out(i);
  } else
    t();
}
function oi(e, t, r) {
  if ((e.f & ht) === 0) {
    if (e.f ^= ht, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || r) && t.push(s);
    for (var i = e.first; i !== null; ) {
      var l = i.next, a = (i.f & Sr) !== 0 || (i.f & Pe) !== 0;
      oi(i, t, a ? r : !1), i = l;
    }
  }
}
function kn(e) {
  si(e, !0);
}
function si(e, t) {
  if ((e.f & ht) !== 0) {
    e.f ^= ht, (e.f & ue) === 0 && (e.f ^= ue), Lt(e) && (ye(e, Ne), lr(e));
    for (var r = e.first; r !== null; ) {
      var i = r.next, l = (r.f & Sr) !== 0 || (r.f & Pe) !== 0;
      si(r, l ? t : !1), r = i;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
const la = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Nt = [], St = [];
function ui() {
  var e = Nt;
  Nt = [], Hn(e);
}
function fi() {
  var e = St;
  St = [], Hn(e);
}
function Pr(e) {
  Nt.length === 0 && queueMicrotask(ui), Nt.push(e);
}
function aa(e) {
  St.length === 0 && la(fi), St.push(e);
}
function oa() {
  Nt.length > 0 && ui(), St.length > 0 && fi();
}
let Bt = !1, Jt = !1, Kt = null, et = !1, Dt = !1;
function xn(e) {
  Dt = e;
}
let $t = [];
let S = null, xe = !1;
function Se(e) {
  S = e;
}
let T = null;
function Ge(e) {
  T = e;
}
let ne = null;
function ci(e) {
  S !== null && S.f & Er && (ne === null ? ne = [e] : ne.push(e));
}
let re = null, de = 0, ge = null;
function sa(e) {
  ge = e;
}
let di = 1, Xt = 0, Be = !1;
function vi() {
  return ++di;
}
function Lt(e) {
  var v;
  var t = e.f;
  if ((t & Ne) !== 0)
    return !0;
  if ((t & rt) !== 0) {
    var r = e.deps, i = (t & ve) !== 0;
    if (r !== null) {
      var l, a, s = (t & Wt) !== 0, f = i && T !== null && !Be, c = r.length;
      if (s || f) {
        var d = (
          /** @type {Derived} */
          e
        ), m = d.parent;
        for (l = 0; l < c; l++)
          a = r[l], (s || !((v = a == null ? void 0 : a.reactions) != null && v.includes(d))) && (a.reactions ?? (a.reactions = [])).push(d);
        s && (d.f ^= Wt), f && m !== null && (m.f & ve) === 0 && (d.f ^= ve);
      }
      for (l = 0; l < c; l++)
        if (a = r[l], Lt(
          /** @type {Derived} */
          a
        ) && ei(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!i || T !== null && !Be) && ye(e, ue);
  }
  return !1;
}
function ua(e, t) {
  for (var r = t; r !== null; ) {
    if ((r.f & Zt) !== 0)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= Zt;
      }
    r = r.parent;
  }
  throw Bt = !1, e;
}
function $n(e) {
  return (e.f & er) === 0 && (e.parent === null || (e.parent.f & Zt) === 0);
}
function ir(e, t, r, i) {
  if (Bt) {
    if (r === null && (Bt = !1), $n(t))
      throw e;
    return;
  }
  if (r !== null && (Bt = !0), ua(e, t), $n(t))
    throw e;
}
function hi(e, t, r = !0) {
  var i = e.reactions;
  if (i !== null)
    for (var l = 0; l < i.length; l++) {
      var a = i[l];
      ne != null && ne.includes(e) || ((a.f & be) !== 0 ? hi(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (r ? ye(a, Ne) : (a.f & ue) !== 0 && ye(a, rt), lr(
        /** @type {Effect} */
        a
      )));
    }
}
function gi(e) {
  var b;
  var t = re, r = de, i = ge, l = S, a = Be, s = ne, f = ie, c = xe, d = e.f;
  re = /** @type {null | Value[]} */
  null, de = 0, ge = null, Be = (d & ve) !== 0 && (xe || !et || S === null), S = (d & (Pe | tt)) === 0 ? e : null, ne = null, Nn(e.ctx), xe = !1, Xt++, e.f |= Er;
  try {
    var m = (
      /** @type {Function} */
      (0, e.fn)()
    ), v = e.deps;
    if (re !== null) {
      var h;
      if (zt(e, de), v !== null && de > 0)
        for (v.length = de + re.length, h = 0; h < re.length; h++)
          v[de + h] = re[h];
      else
        e.deps = v = re;
      if (!Be)
        for (h = de; h < v.length; h++)
          ((b = v[h]).reactions ?? (b.reactions = [])).push(e);
    } else v !== null && de < v.length && (zt(e, de), v.length = de);
    if (Ei() && ge !== null && !xe && v !== null && (e.f & (be | rt | Ne)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      ge.length; h++)
        hi(
          ge[h],
          /** @type {Effect} */
          e
        );
    return l !== null && l !== e && (Xt++, ge !== null && (i === null ? i = ge : i.push(.../** @type {Source[]} */
    ge))), m;
  } finally {
    re = t, de = r, ge = i, S = l, Be = a, ne = s, Nn(f), xe = c, e.f ^= Er;
  }
}
function fa(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var i = $l.call(r, e);
    if (i !== -1) {
      var l = r.length - 1;
      l === 0 ? r = t.reactions = null : (r[i] = r[l], r.pop());
    }
  }
  r === null && (t.f & be) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (re === null || !re.includes(t)) && (ye(t, rt), (t.f & (ve | Wt)) === 0 && (t.f ^= Wt), zn(
    /** @type {Derived} **/
    t
  ), zt(
    /** @type {Derived} **/
    t,
    0
  ));
}
function zt(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var i = t; i < r.length; i++)
      fa(e, r[i]);
}
function Or(e) {
  var t = e.f;
  if ((t & er) === 0) {
    ye(e, ue);
    var r = T, i = ie, l = et;
    T = e, et = !0;
    try {
      (t & Nr) !== 0 ? na(e) : ii(e), ni(e);
      var a = gi(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = di;
      var s = e.deps, f;
      An && Wl && e.f & Ne;
    } catch (c) {
      ir(c, e, r, i || e.ctx);
    } finally {
      et = l, T = r;
    }
  }
}
function ca() {
  try {
    Ul();
  } catch (e) {
    if (Kt !== null)
      ir(e, Kt, null);
    else
      throw e;
  }
}
function _i() {
  var e = et;
  try {
    var t = 0;
    for (et = !0; $t.length > 0; ) {
      t++ > 1e3 && ca();
      var r = $t, i = r.length;
      $t = [];
      for (var l = 0; l < i; l++) {
        var a = va(r[l]);
        da(a);
      }
      Tt.clear();
    }
  } finally {
    Jt = !1, et = e, Kt = null;
  }
}
function da(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var i = e[r];
      if ((i.f & (er | ht)) === 0)
        try {
          Lt(i) && (Or(i), i.deps === null && i.first === null && i.nodes_start === null && (i.teardown === null ? ai(i) : i.fn = null));
        } catch (l) {
          ir(l, i, null, i.ctx);
        }
    }
}
function lr(e) {
  Jt || (Jt = !0, queueMicrotask(_i));
  for (var t = Kt = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (tt | Pe)) !== 0) {
      if ((r & ue) === 0) return;
      t.f ^= ue;
    }
  }
  $t.push(t);
}
function va(e) {
  for (var t = [], r = e; r !== null; ) {
    var i = r.f, l = (i & (Pe | tt)) !== 0, a = l && (i & ue) !== 0;
    if (!a && (i & ht) === 0) {
      if ((i & Yn) !== 0)
        t.push(r);
      else if (l)
        r.f ^= ue;
      else
        try {
          Lt(r) && Or(r);
        } catch (c) {
          ir(c, r, null, r.ctx);
        }
      var s = r.first;
      if (s !== null) {
        r = s;
        continue;
      }
    }
    var f = r.parent;
    for (r = r.next; r === null && f !== null; )
      r = f.next, f = f.parent;
  }
  return t;
}
function A(e) {
  for (var t; ; ) {
    if (oa(), $t.length === 0)
      return (
        /** @type {T} */
        t
      );
    Jt = !0, _i();
  }
}
async function br() {
  await Promise.resolve(), A();
}
function o(e) {
  var t = e.f, r = (t & be) !== 0;
  if (S !== null && !xe) {
    if (!(ne != null && ne.includes(e))) {
      var i = S.deps;
      e.rv < Xt && (e.rv = Xt, re === null && i !== null && i[de] === e ? de++ : re === null ? re = [e] : (!Be || !re.includes(e)) && re.push(e));
    }
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var l = (
      /** @type {Derived} */
      e
    ), a = l.parent;
    a !== null && (a.f & ve) === 0 && (l.f ^= ve);
  }
  return r && (l = /** @type {Derived} */
  e, Lt(l) && ei(l)), Dt && Tt.has(e) ? Tt.get(e) : e.v;
}
function _t(e) {
  var t = xe;
  try {
    return xe = !0, e();
  } finally {
    xe = t;
  }
}
const ha = -7169;
function ye(e, t) {
  e.f = e.f & ha | t;
}
const Tt = /* @__PURE__ */ new Map();
function mi(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Xn,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function V(e, t) {
  const r = mi(e);
  return ci(r), r;
}
// @__NO_SIDE_EFFECTS__
function wi(e, t = !1) {
  const r = mi(e);
  return t || (r.equals = Tr), r;
}
function p(e, t, r = !1) {
  S !== null && !xe && Ei() && (S.f & (be | Nr)) !== 0 && !(ne != null && ne.includes(e)) && Gl();
  let i = r ? je(t) : t;
  return ga(e, i);
}
function ga(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    Dt ? Tt.set(e, t) : Tt.set(e, r), e.v = t, (e.f & be) !== 0 && ((e.f & Ne) !== 0 && Qn(
      /** @type {Derived} */
      e
    ), ye(e, (e.f & ve) === 0 ? ue : rt)), e.wv = vi(), pi(e, Ne), T !== null && (T.f & ue) !== 0 && (T.f & (Pe | tt)) === 0 && (ge === null ? sa([e]) : ge.push(e));
  }
  return t;
}
function pi(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, l = 0; l < i; l++) {
      var a = r[l], s = a.f;
      (s & Ne) === 0 && (ye(a, t), (s & (ue | ve)) !== 0 && ((s & be) !== 0 ? pi(
        /** @type {Derived} */
        a,
        rt
      ) : lr(
        /** @type {Effect} */
        a
      )));
    }
}
let ie = null;
function Nn(e) {
  ie = e;
}
function bi(e, t = !1, r) {
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
  ti(() => {
    i.d = !0;
  });
}
function yi(e) {
  const t = ie;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var r = T, i = S;
      t.e = null;
      try {
        for (var l = 0; l < s.length; l++) {
          var a = s[l];
          Ge(a.effect), Se(a.reaction), Dr(a.fn);
        }
      } finally {
        Ge(r), Se(i);
      }
    }
    ie = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Ei() {
  return !0;
}
const _a = ["touchstart", "touchmove"];
function ma(e) {
  return _a.includes(e);
}
function wa(e, t) {
  if (t) {
    const r = document.body;
    e.autofocus = !0, Pr(() => {
      document.activeElement === r && e.focus();
    });
  }
}
let Sn = !1;
function Ci() {
  Sn || (Sn = !0, document.addEventListener(
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
function Ai(e) {
  var t = S, r = T;
  Se(null), Ge(null);
  try {
    return e();
  } finally {
    Se(t), Ge(r);
  }
}
function pa(e, t, r, i = r) {
  e.addEventListener(t, () => Ai(r));
  const l = e.__on_r;
  l ? e.__on_r = () => {
    l(), i(!0);
  } : e.__on_r = () => i(!0), Ci();
}
const Ii = /* @__PURE__ */ new Set(), kr = /* @__PURE__ */ new Set();
function ba(e, t, r, i = {}) {
  function l(a) {
    if (i.capture || kt.call(t, a), !a.cancelBubble)
      return Ai(() => r == null ? void 0 : r.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Pr(() => {
    t.addEventListener(e, l, i);
  }) : t.addEventListener(e, l, i), l;
}
function Ue(e, t, r, i, l) {
  var a = { capture: i, passive: l }, s = ba(e, t, r, a);
  (t === document.body || t === window || t === document) && ti(() => {
    t.removeEventListener(e, s, a);
  });
}
function ya(e) {
  for (var t = 0; t < e.length; t++)
    Ii.add(e[t]);
  for (var r of kr)
    r(e);
}
function kt(e) {
  var fe;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), i = e.type, l = ((fe = e.composedPath) == null ? void 0 : fe.call(e)) || [], a = (
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
    Gt(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var m = S, v = T;
    Se(null), Ge(null);
    try {
      for (var h, b = []; a !== null; ) {
        var $ = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var L = a["__" + i];
          if (L != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (jn(L)) {
              var [M, ...le] = L;
              M.apply(a, [e, ...le]);
            } else
              L.call(a, e);
        } catch (ce) {
          h ? b.push(ce) : h = ce;
        }
        if (e.cancelBubble || $ === t || $ === null)
          break;
        a = $;
      }
      if (h) {
        for (let ce of b)
          queueMicrotask(() => {
            throw ce;
          });
        throw h;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Se(m), Ge(v);
    }
  }
}
function Fr(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function $e(e, t) {
  var r = (
    /** @type {Effect} */
    T
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function Ee(e, t) {
  var r = (t & Rl) !== 0, i = (t & kl) !== 0, l, a = !e.startsWith("<!>");
  return () => {
    if (F)
      return $e(O, null), O;
    l === void 0 && (l = Fr(a ? e : "<!>" + e), r || (l = /** @type {Node} */
    /* @__PURE__ */ me(l)));
    var s = (
      /** @type {TemplateNode} */
      i || Wn ? document.importNode(l, !0) : l.cloneNode(!0)
    );
    if (r) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ me(s)
      ), c = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      $e(f, c);
    } else
      $e(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function ar(e, t, r = "svg") {
  var i = !e.startsWith("<!>"), l = `<${r}>${i ? e : "<!>" + e}</${r}>`, a;
  return () => {
    if (F)
      return $e(O, null), O;
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        Fr(l)
      ), f = (
        /** @type {Element} */
        /* @__PURE__ */ me(s)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ me(f);
    }
    var c = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return $e(c, c), c;
  };
}
function qt() {
  if (F)
    return $e(O, null), O;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = rr();
  return e.append(t, r), $e(t, r), e;
}
function U(e, t) {
  if (F) {
    T.nodes_end = O, gt();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Ea(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function Ri(e, t) {
  return ki(e, t);
}
function Ca(e, t) {
  Cr(), t.intro = t.intro ?? !1;
  const r = t.target, i = F, l = O;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ me(r)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== $r); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ Ze(a);
    if (!a)
      throw vt;
    dt(!0), He(
      /** @type {Comment} */
      a
    ), gt();
    const s = ki(e, { ...t, anchor: a });
    if (O === null || O.nodeType !== 8 || /** @type {Comment} */
    O.data !== qn)
      throw tr(), vt;
    return dt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === vt)
      return t.recover === !1 && jl(), Cr(), Jl(r), dt(!1), Ri(e, t);
    throw s;
  } finally {
    dt(i), He(l);
  }
}
const ct = /* @__PURE__ */ new Map();
function ki(e, { target: t, anchor: r, props: i = {}, events: l, context: a, intro: s = !0 }) {
  Cr();
  var f = /* @__PURE__ */ new Set(), c = (v) => {
    for (var h = 0; h < v.length; h++) {
      var b = v[h];
      if (!f.has(b)) {
        f.add(b);
        var $ = ma(b);
        t.addEventListener(b, kt, { passive: $ });
        var L = ct.get(b);
        L === void 0 ? (document.addEventListener(b, kt, { passive: $ }), ct.set(b, 1)) : ct.set(b, L + 1);
      }
    }
  };
  c(Nl(Ii)), kr.add(c);
  var d = void 0, m = ra(() => {
    var v = r ?? t.appendChild(rr());
    return Ir(() => {
      if (a) {
        bi({});
        var h = (
          /** @type {ComponentContext} */
          ie
        );
        h.c = a;
      }
      l && (i.$$events = l), F && $e(
        /** @type {TemplateNode} */
        v,
        null
      ), d = e(v, i) || {}, F && (T.nodes_end = O), a && yi();
    }), () => {
      var $;
      for (var h of f) {
        t.removeEventListener(h, kt);
        var b = (
          /** @type {number} */
          ct.get(h)
        );
        --b === 0 ? (document.removeEventListener(h, kt), ct.delete(h)) : ct.set(h, b);
      }
      kr.delete(c), v !== r && (($ = v.parentNode) == null || $.removeChild(v));
    };
  });
  return xr.set(d, m), d;
}
let xr = /* @__PURE__ */ new WeakMap();
function Aa(e, t) {
  const r = xr.get(e);
  return r ? (xr.delete(e), r(t)) : Promise.resolve();
}
function K(e, t, [r, i] = [0, 0]) {
  F && r === 0 && gt();
  var l = e, a = null, s = null, f = se, c = r > 0 ? Sr : 0, d = !1;
  const m = (h, b = !0) => {
    d = !0, v(b, h);
  }, v = (h, b) => {
    if (f === (f = h)) return;
    let $ = !1;
    if (F && i !== -1) {
      if (r === 0) {
        const M = (
          /** @type {Comment} */
          l.data
        );
        M === $r ? i = 0 : M === Mn ? i = 1 / 0 : (i = parseInt(M.substring(1)), i !== i && (i = f ? 1 / 0 : -1));
      }
      const L = i > r;
      !!f === L && (l = Zl(), He(l), dt(!1), $ = !0, i = -1);
    }
    f ? (a ? kn(a) : b && (a = Ir(() => b(l))), s && Rr(s, () => {
      s = null;
    })) : (s ? kn(s) : b && (s = Ir(() => b(l, [r + 1, i]))), a && Rr(a, () => {
      a = null;
    })), $ && dt(!0);
  };
  ri(() => {
    d = !1, t(m), d || v(null, null);
  }, c), F && (l = O);
}
function ze(e, t, r = !1, i = !1, l = !1) {
  var a = e, s = "";
  ke(() => {
    var f = (
      /** @type {Effect} */
      T
    );
    if (s === (s = t() ?? "")) {
      F && gt();
      return;
    }
    if (f.nodes_start !== null && (li(
      f.nodes_start,
      /** @type {TemplateNode} */
      f.nodes_end
    ), f.nodes_start = f.nodes_end = null), s !== "") {
      if (F) {
        O.data;
        for (var c = gt(), d = c; c !== null && (c.nodeType !== 8 || /** @type {Comment} */
        c.data !== ""); )
          d = c, c = /** @type {TemplateNode} */
          /* @__PURE__ */ Ze(c);
        if (c === null)
          throw tr(), vt;
        $e(O, d), a = He(c);
        return;
      }
      var m = s + "";
      r ? m = `<svg>${m}</svg>` : i && (m = `<math>${m}</math>`);
      var v = Fr(m);
      if ((r || i) && (v = /** @type {Element} */
      /* @__PURE__ */ me(v)), $e(
        /** @type {TemplateNode} */
        /* @__PURE__ */ me(v),
        /** @type {TemplateNode} */
        v.lastChild
      ), r || i)
        for (; /* @__PURE__ */ me(v); )
          a.before(
            /** @type {Node} */
            /* @__PURE__ */ me(v)
          );
      else
        a.before(v);
    }
  });
}
function Ia(e, t, r, i, l) {
  var f;
  F && gt();
  var a = (f = t.$$slots) == null ? void 0 : f[r], s = !1;
  a === !0 && (a = t.children, s = !0), a === void 0 || a(e, s ? () => i : i);
}
const Tn = [...` 	
\r\f \v\uFEFF`];
function Ra(e, t, r) {
  var i = "" + e;
  if (r) {
    for (var l in r)
      if (r[l])
        i = i ? i + " " + l : l;
      else if (i.length)
        for (var a = l.length, s = 0; (s = i.indexOf(l, s)) >= 0; ) {
          var f = s + a;
          (s === 0 || Tn.includes(i[s - 1])) && (f === i.length || Tn.includes(i[f])) ? i = (s === 0 ? "" : i.substring(0, s)) + i.substring(f + 1) : s = f;
        }
  }
  return i === "" ? null : i;
}
function ka(e, t, r, i, l, a) {
  var s = e.__className;
  if (F || s !== r || s === void 0) {
    var f = Ra(r, i, a);
    (!F || f !== e.getAttribute("class")) && (f == null ? e.removeAttribute("class") : e.className = f), e.__className = r;
  } else if (a && l !== a)
    for (var c in a) {
      var d = !!a[c];
      (l == null || d !== !!l[c]) && e.classList.toggle(c, d);
    }
  return a;
}
const xa = Symbol("is custom element"), $a = Symbol("is html");
function Dn(e) {
  if (F) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var i = e.value;
          N(e, "value", null), e.value = i;
        }
        if (e.hasAttribute("checked")) {
          var l = e.checked;
          N(e, "checked", null), e.checked = l;
        }
      }
    };
    e.__on_r = r, aa(r), Ci();
  }
}
function Na(e, t) {
  var r = xi(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function N(e, t, r, i) {
  var l = xi(e);
  F && (l[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || l[t] !== (l[t] = r) && (t === "loading" && (e[Fl] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Sa(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function xi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [xa]: e.nodeName.includes("-"),
      [$a]: e.namespaceURI === xl
    })
  );
}
var Ln = /* @__PURE__ */ new Map();
function Sa(e) {
  var t = Ln.get(e.nodeName);
  if (t) return t;
  Ln.set(e.nodeName, t = []);
  for (var r, i = e, l = Element.prototype; l !== i; ) {
    r = Sl(i);
    for (var a in r)
      r[a].set && t.push(a);
    i = Bn(i);
  }
  return t;
}
function Ta(e, t, r = t) {
  pa(e, "change", (i) => {
    var l = i ? e.defaultChecked : e.checked;
    r(l);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (F && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  _t(t) == null) && r(e.checked), Lr(() => {
    var i = t();
    e.checked = !!i;
  });
}
function Pn(e, t) {
  return e === t || (e == null ? void 0 : e[xt]) === t;
}
function Ut(e = {}, t, r, i) {
  return Dr(() => {
    var l, a;
    return Lr(() => {
      l = a, a = [], _t(() => {
        e !== r(...a) && (t(e, ...a), l && Pn(r(...l), e) && t(null, ...l));
      });
    }), () => {
      Pr(() => {
        a && Pn(r(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function $i(e) {
  ie === null && Un(), Ar(() => {
    const t = _t(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Da(e) {
  ie === null && Un(), $i(() => () => _t(e));
}
let jt = !1;
function La(e) {
  var t = jt;
  try {
    return jt = !1, [e(), jt];
  } finally {
    jt = t;
  }
}
function On(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function R(e, t, r, i) {
  var Ce;
  var l = (r & El) !== 0, a = !0, s = (r & Al) !== 0, f = (r & Il) !== 0, c = !1, d;
  s ? [d, c] = La(() => (
    /** @type {V} */
    e[t]
  )) : d = /** @type {V} */
  e[t];
  var m = xt in e || Zn in e, v = s && (((Ce = Qe(e, t)) == null ? void 0 : Ce.set) ?? (m && t in e && ((q) => e[t] = q))) || void 0, h = (
    /** @type {V} */
    i
  ), b = !0, $ = !1, L = () => ($ = !0, b && (b = !1, f ? h = _t(
    /** @type {() => V} */
    i
  ) : h = /** @type {V} */
  i), h);
  d === void 0 && i !== void 0 && (v && a && Bl(), d = L(), v && v(d));
  var M;
  if (M = () => {
    var q = (
      /** @type {V} */
      e[t]
    );
    return q === void 0 ? L() : (b = !0, $ = !1, q);
  }, (r & Cl) === 0)
    return M;
  if (v) {
    var le = e.$$legacy;
    return function(q, Q) {
      return arguments.length > 0 ? ((!Q || le || c) && v(Q ? M() : q), q) : M();
    };
  }
  var fe = !1, ce = /* @__PURE__ */ wi(d), H = /* @__PURE__ */ nr(() => {
    var q = M(), Q = o(ce);
    return fe ? (fe = !1, Q) : ce.v = q;
  });
  return s && o(H), l || (H.equals = Tr), function(q, Q) {
    if (arguments.length > 0) {
      const Oe = Q ? o(H) : s ? je(q) : q;
      if (!H.equals(Oe)) {
        if (fe = !0, p(ce, Oe), $ && h !== void 0 && (h = Oe), On(H))
          return q;
        _t(() => o(H));
      }
      return q;
    }
    return On(H) ? H.v : o(H);
  };
}
function Pa(e) {
  return new Oa(e);
}
var Le, _e;
class Oa {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    mr(this, Le);
    /** @type {Record<string, any>} */
    mr(this, _e);
    var a;
    var r = /* @__PURE__ */ new Map(), i = (s, f) => {
      var c = /* @__PURE__ */ wi(f);
      return r.set(s, c), c;
    };
    const l = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, f) {
          return o(r.get(f) ?? i(f, Reflect.get(s, f)));
        },
        has(s, f) {
          return f === Zn ? !0 : (o(r.get(f) ?? i(f, Reflect.get(s, f))), Reflect.has(s, f));
        },
        set(s, f, c) {
          return p(r.get(f) ?? i(f, c), c), Reflect.set(s, f, c);
        }
      }
    );
    wr(this, _e, (t.hydrate ? Ca : Ri)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: l,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((a = t == null ? void 0 : t.props) != null && a.$$host) || t.sync === !1) && A(), wr(this, Le, l.$$events);
    for (const s of Object.keys(oe(this, _e)))
      s === "$set" || s === "$destroy" || s === "$on" || Gt(this, s, {
        get() {
          return oe(this, _e)[s];
        },
        /** @param {any} value */
        set(f) {
          oe(this, _e)[s] = f;
        },
        enumerable: !0
      });
    oe(this, _e).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(l, s);
    }, oe(this, _e).$destroy = () => {
      Aa(oe(this, _e));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    oe(this, _e).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    oe(this, Le)[t] = oe(this, Le)[t] || [];
    const i = (...l) => r.call(this, ...l);
    return oe(this, Le)[t].push(i), () => {
      oe(this, Le)[t] = oe(this, Le)[t].filter(
        /** @param {any} fn */
        (l) => l !== i
      );
    };
  }
  $destroy() {
    oe(this, _e).$destroy();
  }
}
Le = new WeakMap(), _e = new WeakMap();
let Ni;
typeof HTMLElement == "function" && (Ni = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, i) {
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
      const r = {}, i = Fa(this);
      for (const l of this.$$s)
        l in i && (l === "default" && !this.$$d.children ? (this.$$d.children = t(l), r.default = !0) : r[l] = t(l));
      for (const l of this.attributes) {
        const a = this.$$g_p(l.name);
        a in this.$$d || (this.$$d[a] = Ht(a, l.value, this.$$p_d, "toProp"));
      }
      for (const l in this.$$p_d)
        !(l in this.$$d) && this[l] !== void 0 && (this.$$d[l] = this[l], delete this[l]);
      this.$$c = Pa({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = ta(() => {
        Lr(() => {
          var l;
          this.$$r = !0;
          for (const a of Yt(this.$$c)) {
            if (!((l = this.$$p_d[a]) != null && l.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const s = Ht(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Ht(t, i, this.$$p_d, "toProp"), (l = this.$$c) == null || l.$set({ [t]: this.$$d[t] }));
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
    return Yt(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function Ht(e, t, r, i) {
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
function Fa(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function Va(e, t, r, i, l, a) {
  let s = class extends Ni {
    constructor() {
      super(e, r, l), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Yt(t).map(
        (f) => (t[f].attribute || f).toLowerCase()
      );
    }
  };
  return Yt(t).forEach((f) => {
    Gt(s.prototype, f, {
      get() {
        return this.$$c && f in this.$$c ? this.$$c[f] : this.$$d[f];
      },
      set(c) {
        var v;
        c = Ht(f, c, t), this.$$d[f] = c;
        var d = this.$$c;
        if (d) {
          var m = (v = Qe(d, f)) == null ? void 0 : v.get;
          m ? d[f] = c : d.$set({ [f]: c });
        }
      }
    });
  }), i.forEach((f) => {
    Gt(s.prototype, f, {
      get() {
        var c;
        return (c = this.$$c) == null ? void 0 : c[f];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
const Si = new TextEncoder();
function Ma(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function qa(e, t = "SHA-256", r = 1e5) {
  const i = Date.now().toString(16);
  e || (e = Math.round(Math.random() * r));
  const l = await Ti(i, e, t);
  return {
    algorithm: t,
    challenge: l,
    salt: i,
    signature: ""
  };
}
async function Ti(e, t, r) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return Ma(
    await crypto.subtle.digest(
      r.toUpperCase(),
      Si.encode(e + t)
    )
  );
}
function Ua(e, t, r = "SHA-256", i = 1e6, l = 0) {
  const a = new AbortController(), s = Date.now();
  return {
    promise: (async () => {
      for (let c = l; c <= i; c += 1) {
        if (a.signal.aborted)
          return null;
        if (await Ti(t, c, r) === e)
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
function Fn() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function ja(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let i = 0; i < t.length; i++)
    r[i] = t.charCodeAt(i);
  return r;
}
function Ba(e, t = 12) {
  const r = new Uint8Array(t);
  for (let i = 0; i < t; i++)
    r[i] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function Ha(e, t = "", r = 1e6, i = 0) {
  const l = "AES-GCM", a = new AbortController(), s = Date.now(), f = async () => {
    for (let m = i; m <= r; m += 1) {
      if (a.signal.aborted || !c || !d)
        return null;
      try {
        const v = await crypto.subtle.decrypt(
          {
            name: l,
            iv: Ba(m)
          },
          c,
          d
        );
        if (v)
          return {
            clearText: new TextDecoder().decode(v),
            took: Date.now() - s
          };
      } catch {
      }
    }
    return null;
  };
  let c = null, d = null;
  try {
    d = ja(e);
    const m = await crypto.subtle.digest(
      "SHA-256",
      Si.encode(t)
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
const Ya = {
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
globalThis.altchaI18n.register("en", Ya);
const yr = (e, t) => {
  let r = /* @__PURE__ */ Xl(() => Ll(t == null ? void 0 : t(), 24));
  var i = Ja();
  ke(() => {
    N(i, "width", o(r)), N(i, "height", o(r));
  }), U(e, i);
};
function Ga(e, t) {
  e.code === "Space" && (e.preventDefault(), e.stopImmediatePropagation(), t());
}
function Za(e, t) {
  e.preventDefault(), t();
}
function Wa(e, t, r, i, l, a, s, f) {
  var c;
  [
    E.UNVERIFIED,
    E.ERROR,
    E.EXPIRED,
    E.CODE
  ].includes(o(t)) ? r() !== !1 && ((c = o(i)) == null ? void 0 : c.reportValidity()) === !1 ? p(l, !1) : a() ? s() : f() : p(l, !0);
}
var Ja = /* @__PURE__ */ ar('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="altcha-spinner"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor"></path></svg>'), Ka = /* @__PURE__ */ Ee('<input type="hidden">'), Xa = /* @__PURE__ */ Ee('<div><a target="_blank" class="altcha-logo" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor"></path></svg></a></div>'), za = /* @__PURE__ */ ar('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg>'), Qa = /* @__PURE__ */ ar('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z"></path></svg>'), eo = /* @__PURE__ */ ar('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"></path></svg>'), to = /* @__PURE__ */ Ee('<button type="button" class="altcha-code-challenge-audio"><!></button>'), ro = /* @__PURE__ */ Ee("<audio hidden autoplay><source></audio>"), no = /* @__PURE__ */ Ee('<div class="altcha-code-challenge" role="dialog"><div class="altcha-code-challenge-arrow"></div> <form data-code-challenge-form="1"><img class="altcha-code-challenge-image" alt=""> <input type="text" autocomplete="off" name="code" class="altcha-code-challenge-input" required> <div class="altcha-code-challenge-buttons"><div class="altcha-code-challenge-buttons-left"><!> <button type="button" class="altcha-code-challenge-reload"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z"></path></svg></button></div> <button type="submit" class="altcha-code-challenge-verify"><!> </button></div> <!></form></div>'), io = /* @__PURE__ */ Ee("<div><!></div>"), lo = /* @__PURE__ */ Ee("<div><!></div>"), ao = /* @__PURE__ */ Ee('<div class="altcha-error"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg> <!></div>'), oo = /* @__PURE__ */ Ee('<div class="altcha-footer"><div><!></div></div>'), so = /* @__PURE__ */ Ee('<div class="altcha-anchor-arrow"></div>'), uo = /* @__PURE__ */ Ee('<!> <div class="altcha"><div class="altcha-main"><div><!> <input type="checkbox"></div> <label class="altcha-label"><!></label> <!> <!> <!></div> <!> <!> <!></div>', 1);
function fo(e, t) {
  var bn, yn;
  bi(t, !0);
  let r = R(t, "auto", 7, void 0), i = R(t, "blockspam", 7, void 0), l = R(t, "challengeurl", 7, void 0), a = R(t, "challengejson", 7, void 0), s = R(t, "credentials", 7, void 0), f = R(t, "customfetch", 7, void 0), c = R(t, "debug", 7, !1), d = R(t, "delay", 7, 0), m = R(t, "disableautofocus", 7, !1), v = R(t, "expire", 7, void 0), h = R(t, "floating", 7, void 0), b = R(t, "floatinganchor", 7, void 0), $ = R(t, "floatingoffset", 7, void 0), L = R(t, "floatingpersist", 7, !1), M = R(t, "hidefooter", 7, !1), le = R(t, "hidelogo", 7, !1), fe = R(t, "id", 7, void 0), ce = R(t, "language", 7, void 0), H = R(t, "name", 7, "altcha"), Ce = R(t, "maxnumber", 7, 1e6), q = R(t, "mockerror", 7, !1), Q = R(t, "obfuscated", 7, void 0), Oe = R(t, "plugins", 7, void 0), mt = R(t, "refetchonexpire", 7, !0), We = R(t, "sentinel", 7, void 0), Ae = R(t, "spamfilter", 7, !1), it = R(t, "strings", 7, void 0), he = R(t, "test", 7, !1), ee = R(t, "verifyurl", 7, void 0), lt = R(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), wt = R(t, "workerurl", 7, void 0);
  const Vr = ["SHA-256", "SHA-384", "SHA-512"], Di = "https://altcha.org/", Fe = (n, u) => {
    t.$$host.dispatchEvent(new CustomEvent(n, { detail: u }));
  }, Mr = (yn = (bn = document.documentElement.lang) == null ? void 0 : bn.split("-")) == null ? void 0 : yn[0], or = /* @__PURE__ */ Rt(() => {
    var n;
    return l() && new URL(l(), location.origin).host.endsWith(".altcha.org") && !!((n = l()) != null && n.includes("apiKey=ckey_"));
  }), sr = /* @__PURE__ */ Rt(() => a() ? en(a()) : void 0), Li = /* @__PURE__ */ Rt(() => it() ? en(it()) : {}), P = /* @__PURE__ */ Rt(() => ({
    ...Br(),
    ...o(Li)
  })), qr = /* @__PURE__ */ Rt(() => `${fe() || H()}_checkbox_${Math.round(Math.random() * 1e8)}`);
  let pt = /* @__PURE__ */ V(!1), B = /* @__PURE__ */ V(null), k = /* @__PURE__ */ V(je(E.UNVERIFIED)), te = /* @__PURE__ */ V(void 0), bt = /* @__PURE__ */ V(null), Ve = /* @__PURE__ */ V(null), ur = /* @__PURE__ */ V(null), at = /* @__PURE__ */ V(null), D = /* @__PURE__ */ V(null), Je = /* @__PURE__ */ V(null), Ie = null, Y = /* @__PURE__ */ V(null), Ke = /* @__PURE__ */ V(!1), Me = [], fr = /* @__PURE__ */ V(!1), Te = /* @__PURE__ */ V(null);
  Ar(() => {
    Zi(o(Je));
  }), Ar(() => {
    Wi(o(k));
  }), Da(() => {
    Pi(), o(D) && (o(D).removeEventListener("submit", Jr), o(D).removeEventListener("reset", Kr), o(D).removeEventListener("focusin", Wr), p(D, null)), Ie && (clearTimeout(Ie), Ie = null), document.removeEventListener("click", Gr), document.removeEventListener("scroll", Zr), window.removeEventListener("resize", Qr);
  }), $i(() => {
    var n;
    x("mounted", "2.0.0-beta.11"), x("workers", lt()), Mi(), x("plugins", Me.length ? Me.map((u) => u.constructor.pluginName).join(", ") : "none"), he() && x("using test mode"), v() && cr(v()), r() !== void 0 && x("auto", r()), h() !== void 0 && rn(h()), p(D, (n = o(te)) == null ? void 0 : n.closest("form"), !0), o(D) && (o(D).addEventListener("submit", Jr, { capture: !0 }), o(D).addEventListener("reset", Kr), (r() === "onfocus" || L() === "focus") && o(D).addEventListener("focusin", Wr)), r() === "onload" && (Q() ? yt() : De()), o(or) && (M() || le()) && x("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      Fe("load");
    });
  });
  function Pt(n, u) {
    return btoa(JSON.stringify({
      algorithm: n.algorithm,
      challenge: n.challenge,
      number: u.number,
      salt: n.salt,
      signature: n.signature,
      test: he() ? !0 : void 0,
      took: u.took
    }));
  }
  function Pi() {
    for (const n of Me)
      n.destroy();
  }
  function Ur() {
    l() && mt() && o(k) === E.VERIFIED ? De() : ot(E.EXPIRED, o(P).expired);
  }
  async function Oi() {
    var n;
    if (q())
      throw x("mocking error"), new Error("Mocked error.");
    if (o(sr))
      return x("using provided json data"), o(sr);
    if (he())
      return x("generating test challenge", { test: he() }), qa(typeof he() != "boolean" ? +he() : void 0);
    {
      if (!l() && o(D)) {
        const C = o(D).getAttribute("action");
        C != null && C.includes("/form/") && l(C + "/altcha");
      }
      if (!l())
        throw new Error("Attribute challengeurl not set.");
      x("fetching challenge from", l());
      const u = {
        credentials: typeof s() == "boolean" ? "include" : s(),
        headers: Ae() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      }, g = await jr()(l(), u);
      if (!g || !(g instanceof Response))
        throw new Error("Custom fetch function did not return a response.");
      if (g.status !== 200)
        throw new Error(`Server responded with ${g.status}.`);
      const w = g.headers.get("X-Altcha-Config"), _ = await g.json(), I = new URLSearchParams((n = _.salt.split("?")) == null ? void 0 : n[1]), y = I.get("expires") || I.get("expire");
      if (y) {
        const C = new Date(+y * 1e3), j = isNaN(C.getTime()) ? 0 : C.getTime() - Date.now();
        j > 0 && cr(j);
      }
      if (w)
        try {
          const C = JSON.parse(w);
          C && typeof C == "object" && (C.verifyurl && !C.verifyurl.startsWith("javascript:") && (C.verifyurl = Yr(C.verifyurl)), an(C));
        } catch (C) {
          x("unable to configure from X-Altcha-Config", C);
        }
      return _;
    }
  }
  function Fi(n) {
    var g, w;
    const u = (g = o(D)) == null ? void 0 : g.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((w = u == null ? void 0 : u.value) == null ? void 0 : w.slice(u.value.indexOf("@"))) || void 0;
  }
  function jr() {
    let n = fetch;
    if (f())
      if (x("using customfetch"), typeof f() == "string") {
        if (n = globalThis[f()] || null, !n)
          throw new Error(`Custom fetch function not found: ${f()}`);
      } else
        n = f();
    return n;
  }
  function Br(n = [
    ce() || "",
    document.documentElement.lang || "",
    ...navigator.languages
  ]) {
    const u = Object.keys(globalThis.altchaI18n).map((w) => w.toLowerCase()), g = n.reduce(
      (w, _) => (_ = _.toLowerCase(), w || (globalThis.altchaI18n[_] ? _ : null) || u.find((I) => _.split("-")[0] === I.split("-")[0]) || null),
      null
    );
    return globalThis.altchaI18n[g || "en"];
  }
  function Vi() {
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
  function Hr(n) {
    var g;
    return [
      ...((g = o(D)) == null ? void 0 : g.querySelectorAll(n != null && n.length ? n.map((w) => `input[name="${w}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (w, _) => {
        const I = _.name, y = _.value;
        return I && y && (w[I] = /\n/.test(y) ? y.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : y), w;
      },
      {}
    );
  }
  function Yr(n, u) {
    const g = new URL(l() || location.origin), w = new URL(n, g);
    if (w.search || (w.search = g.search), u)
      for (const _ in u)
        u[_] !== void 0 && u[_] !== null && w.searchParams.set(_, u[_]);
    return w.toString();
  }
  function Mi() {
    const n = Oe() !== void 0 ? Oe().split(",") : void 0;
    for (const u of globalThis.altchaPlugins)
      (!n || n.includes(u.pluginName)) && Me.push(new u({
        el: o(te),
        clarify: yt,
        dispatch: Fe,
        getConfiguration: on,
        getFloatingAnchor: sn,
        getState: un,
        log: x,
        reset: ot,
        solve: ln,
        setState: Re,
        setFloatingAnchor: cn,
        verify: De
      }));
  }
  function x(...n) {
    (c() || n.some((u) => u instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${H()}]`, ...n);
  }
  function qi() {
    p(Y, z.PAUSED, !0);
  }
  function Ui(n) {
    p(Y, z.ERROR, !0);
  }
  function ji() {
    p(Y, z.READY, !0);
  }
  function Bi() {
    p(Y, z.LOADING, !0);
  }
  function Hi() {
    p(Y, z.PLAYING, !0);
  }
  function Yi() {
    p(Y, z.PAUSED, !0);
  }
  function Gi(n) {
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
      p(Ke, !0), tn(Pt(o(B).challenge, o(B).solution), w).then(({ reason: _, verified: I }) => {
        I ? (p(B, null), Re(E.VERIFIED), x("verified"), br().then(() => {
          var y;
          (y = o(ur)) == null || y.focus(), Fe("verified", { payload: o(Te) });
        })) : (ot(), p(Je, _ || "Verification failed", !0));
      }).catch((_) => {
        p(B, null), Re(E.ERROR, _), x("sentinel verification failed:", _);
      }).finally(() => {
        p(Ke, !1);
      });
    }
  }
  function Gr(n) {
    var g;
    const u = n.target;
    h() && u && !o(te).contains(u) && (o(k) === E.VERIFIED && L() === !1 || o(k) === E.VERIFIED && L() === "focus" && !((g = o(D)) != null && g.matches(":focus-within")) || r() === "off" && o(k) === E.UNVERIFIED) && fn();
  }
  function Zr() {
    h() && o(k) !== E.UNVERIFIED && Et();
  }
  function Zi(n) {
    for (const u of Me)
      typeof u.onErrorChange == "function" && u.onErrorChange(o(Je));
  }
  function Wr(n) {
    o(k) === E.UNVERIFIED ? De() : h() && L() === "focus" && o(k) === E.VERIFIED && dr();
  }
  function Jr(n) {
    const u = n.target, g = n.submitter;
    u != null && u.hasAttribute("data-code-challenge-form") || (o(D) && r() === "onsubmit" ? o(k) === E.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), De().then(() => {
      Ki(g);
    })) : o(k) !== E.VERIFIED && (n.preventDefault(), n.stopPropagation(), o(k) === E.VERIFYING && Xr()) : o(D) && h() && r() === "off" && o(k) === E.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), dr()));
  }
  function Kr() {
    ot();
  }
  function Xr() {
    o(k) === E.VERIFYING && o(P).waitAlert && alert(o(P).waitAlert);
  }
  function zr() {
    o(Ve) ? o(Ve).paused ? (o(Ve).currentTime = 0, o(Ve).play()) : o(Ve).pause() : (p(fr, !0), requestAnimationFrame(() => {
      var n;
      (n = o(Ve)) == null || n.play();
    }));
  }
  function Wi(n) {
    for (const u of Me)
      typeof u.onStateChange == "function" && u.onStateChange(o(k));
    h() && o(k) !== E.UNVERIFIED && requestAnimationFrame(() => {
      Et();
    }), p(pt, o(k) === E.VERIFIED);
  }
  function Qr() {
    h() && Et();
  }
  function en(n) {
    return JSON.parse(n);
  }
  async function Ji(n) {
    if (!ee())
      throw new Error("Attribute verifyurl not set.");
    x("requesting server verification from", ee());
    const u = { payload: n };
    if (Ae() !== !1) {
      const {
        blockedCountries: _,
        classifier: I,
        disableRules: y,
        email: C,
        expectedLanguages: j,
        expectedCountries: X,
        fields: ae,
        ipAddress: qe,
        text: hr,
        timeZone: Vt
      } = Vi();
      u.blockedCountries = _, u.classifier = I, u.disableRules = y, u.email = C === !1 ? void 0 : Fi(C), u.expectedCountries = X, u.expectedLanguages = j || (Mr ? [Mr] : void 0), u.fields = ae === !1 ? void 0 : Hr(ae), u.ipAddress = qe === !1 ? void 0 : qe || "auto", u.text = hr, u.timeZone = Vt === !1 ? void 0 : Vt || Fn();
    }
    const g = await jr()(ee(), {
      body: JSON.stringify(u),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (!g || !(g instanceof Response))
      throw new Error("Custom fetch function did not return a response.");
    if (g.status !== 200)
      throw new Error(`Server responded with ${g.status}.`);
    const w = await g.json();
    if (w != null && w.payload && p(Te, w.payload, !0), Fe("serververification", w), i() && w.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  async function tn(n, u) {
    if (!ee())
      throw new Error("Attribute verifyurl not set.");
    x("requesting sentinel verification from", ee());
    const g = { code: u, payload: n };
    We() && (g.fields = We().fields ? Hr() : void 0, g.timeZone = We().timeZone ? Fn() : void 0);
    const w = await fetch(ee(), {
      body: JSON.stringify(g),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (w.status !== 200)
      throw new Error(`Server responded with ${w.status}.`);
    const _ = await w.json();
    return _ != null && _.payload && p(Te, _.payload, !0), Fe("sentinelverification", _), _;
  }
  function Ki(n) {
    var u;
    o(D) && "requestSubmit" in o(D) ? o(D).requestSubmit(n) : (u = o(D)) != null && u.reportValidity() && (n ? n.click() : o(D).submit());
  }
  function cr(n) {
    x("expire", n), Ie && (clearTimeout(Ie), Ie = null), n < 1 ? Ur() : Ie = setTimeout(Ur, n);
  }
  function rn(n) {
    x("floating", n), h() !== n && (o(te).style.left = "", o(te).style.top = ""), h(n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : h()), h() ? (r() || r("onsubmit"), document.addEventListener("scroll", Zr), document.addEventListener("click", Gr), window.addEventListener("resize", Qr)) : r() === "onsubmit" && r(void 0);
  }
  function nn(n) {
    if (!n.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (n.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!Vr.includes(n.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${Vr.join(", ")}`);
    if (!n.challenge || n.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!n.salt || n.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function ln(n) {
    let u = null;
    if ("Worker" in window) {
      try {
        u = await Xi(n, n.maxNumber || n.maxnumber || Ce());
      } catch (g) {
        x(g);
      }
      if ((u == null ? void 0 : u.number) !== void 0 || "obfuscated" in n)
        return { data: n, solution: u };
    }
    if ("obfuscated" in n) {
      const g = await Ha(n.obfuscated, n.key, n.maxNumber || n.maxnumber);
      return { data: n, solution: await g.promise };
    }
    return {
      data: n,
      solution: await Ua(n.challenge, n.salt, n.algorithm, n.maxNumber || n.maxnumber || Ce()).promise
    };
  }
  async function Xi(n, u = typeof he() == "number" ? he() : n.maxNumber || n.maxnumber || Ce(), g = Math.ceil(lt())) {
    const w = [];
    g = Math.min(16, u, Math.max(1, g));
    for (let y = 0; y < g; y++)
      w.push(altchaCreateWorker(wt()));
    const _ = Math.ceil(u / g), I = await Promise.all(w.map((y, C) => {
      const j = C * _;
      return new Promise((X) => {
        y.addEventListener("message", (ae) => {
          if (ae.data)
            for (const qe of w)
              qe !== y && qe.postMessage({ type: "abort" });
          X(ae.data);
        }), y.postMessage({
          payload: n,
          max: j + _,
          start: j,
          type: "work"
        });
      });
    }));
    for (const y of w)
      y.terminate();
    return I.find((y) => !!y) || null;
  }
  async function yt() {
    if (!Q()) {
      Re(E.ERROR);
      return;
    }
    const n = Me.find((u) => u.constructor.pluginName === "obfuscation");
    if (!n || !("clarify" in n)) {
      Re(E.ERROR), x("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in n && typeof n.clarify == "function")
      return n.clarify();
  }
  function an(n) {
    n.obfuscated !== void 0 && Q(n.obfuscated), n.auto !== void 0 && (r(n.auto), r() === "onload" && (Q() ? yt() : De())), n.blockspam !== void 0 && i(!!n.blockspam), n.customfetch !== void 0 && f(n.customfetch), n.floatinganchor !== void 0 && b(n.floatinganchor), n.delay !== void 0 && d(n.delay), n.floatingoffset !== void 0 && $(n.floatingoffset), n.floating !== void 0 && rn(n.floating), n.expire !== void 0 && (cr(n.expire), v(n.expire)), n.challenge && (a(typeof n.challenge == "string" ? n.challenge : JSON.stringify(n.challenge)), nn(o(sr))), n.challengeurl !== void 0 && l(n.challengeurl), n.debug !== void 0 && c(!!n.debug), n.hidefooter !== void 0 && M(!!n.hidefooter), n.hidelogo !== void 0 && le(!!n.hidelogo), n.language !== void 0 && it(Br([n.language])), n.maxnumber !== void 0 && Ce(+n.maxnumber), n.mockerror !== void 0 && q(!!n.mockerror), n.name !== void 0 && H(n.name), n.refetchonexpire !== void 0 && mt(!!n.refetchonexpire), n.sentinel !== void 0 && typeof n.sentinel == "object" && We(n.sentinel), n.spamfilter !== void 0 && Ae(typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && it(typeof n.strings == "string" ? n.strings : JSON.stringify(n.strings)), n.test !== void 0 && he(typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && ee(n.verifyurl), n.workers !== void 0 && lt(+n.workers), n.workerurl !== void 0 && wt(n.workerurl);
  }
  function on() {
    return {
      auto: r(),
      blockspam: i(),
      challengeurl: l(),
      debug: c(),
      delay: d(),
      expire: v(),
      floating: h(),
      floatinganchor: b(),
      floatingoffset: $(),
      hidefooter: M(),
      hidelogo: le(),
      name: H(),
      maxnumber: Ce(),
      mockerror: q(),
      obfuscated: Q(),
      refetchonexpire: mt(),
      spamfilter: Ae(),
      strings: o(P),
      test: he(),
      verifyurl: ee(),
      workers: lt(),
      workerurl: wt()
    };
  }
  function sn() {
    return o(at);
  }
  function zi(n) {
    return Me.find((u) => u.constructor.pluginName === n);
  }
  function un() {
    return o(k);
  }
  function fn() {
    o(te).style.display = "none";
  }
  function Et(n = 20) {
    var u;
    if (o(te))
      if (o(at) || p(at, (b() ? document.querySelector(b()) : (u = o(D)) == null ? void 0 : u.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || o(D), !0), o(at)) {
        const g = parseInt($(), 10) || 12, w = o(at).getBoundingClientRect(), _ = o(te).getBoundingClientRect(), I = document.documentElement.clientHeight, y = document.documentElement.clientWidth, C = h() === "auto" ? w.bottom + _.height + g + n > I : h() === "top", j = Math.max(n, Math.min(y - n - _.width, w.left + w.width / 2 - _.width / 2));
        if (C ? o(te).style.top = `${w.top - (_.height + g)}px` : o(te).style.top = `${w.bottom + g}px`, o(te).style.left = `${j}px`, o(te).setAttribute("data-floating", C ? "top" : "bottom"), o(bt)) {
          const X = o(bt).getBoundingClientRect();
          o(bt).style.left = w.left - j + w.width / 2 - X.width / 2 + "px";
        }
      } else
        x("unable to find floating anchor element");
  }
  function ot(n = E.UNVERIFIED, u = null) {
    Ie && (clearTimeout(Ie), Ie = null), p(pt, !1), p(Te, null), p(B, null), p(fr, !1), p(Y, null), Re(n, u);
  }
  function cn(n) {
    p(at, n, !0);
  }
  function Re(n, u = null) {
    p(k, n, !0), p(Je, u, !0), Fe("statechange", {
      payload: o(Te),
      state: o(k)
    });
  }
  function dr() {
    o(te).style.display = "block", h() && Et();
  }
  async function De() {
    return ot(E.VERIFYING), await new Promise((n) => setTimeout(n, d() || 0)), Oi().then((n) => (nn(n), x("challenge", n), ln(n))).then(({ data: n, solution: u }) => {
      var g;
      if (x("solution", u), !u || n && "challenge" in n && !("clearText" in u))
        if ((u == null ? void 0 : u.number) !== void 0 && "challenge" in n)
          if (ee() && "codeChallenge" in n)
            ((g = document.activeElement) == null ? void 0 : g.tagName) === "INPUT" && m() === !1 && document.activeElement.blur(), p(B, { challenge: n, solution: u }, !0);
          else {
            if (ee() && We() !== void 0)
              return tn(Pt(n, u));
            if (ee())
              return Ji(Pt(n, u));
            p(Te, Pt(n, u), !0), x("payload", o(Te));
          }
        else
          throw x("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      o(B) ? (Re(E.CODE), br().then(() => {
        Fe("code", { codeChallenge: o(B) });
      })) : (Re(E.VERIFIED), x("verified"), br().then(() => {
        Fe("verified", { payload: o(Te) });
      }));
    }).catch((n) => {
      x(n), Re(E.ERROR, n.message);
    });
  }
  var dn = uo(), vn = It(dn);
  Ia(vn, t, "default", {});
  var Ct = J(vn, 2), vr = W(Ct), Ot = W(vr);
  let hn;
  var gn = W(Ot);
  {
    var Qi = (n) => {
      yr(n);
    };
    K(gn, (n) => {
      o(k) === E.VERIFYING && n(Qi);
    });
  }
  var Xe = J(gn, 2);
  Dn(Xe), Xe.__change = [
    Wa,
    k,
    Ae,
    D,
    pt,
    Q,
    yt,
    De
  ], Ut(Xe, (n) => p(ur, n), () => o(ur)), Z(Ot);
  var Ft = J(Ot, 2), el = W(Ft);
  {
    var tl = (n) => {
      var u = qt(), g = It(u);
      ze(g, () => o(P).verified), U(n, u);
    }, rl = (n, u) => {
      {
        var g = (_) => {
          var I = qt(), y = It(I);
          ze(y, () => o(P).verifying), U(_, I);
        }, w = (_, I) => {
          {
            var y = (j) => {
              var X = qt(), ae = It(X);
              ze(ae, () => o(P).verificationRequired), U(j, X);
            }, C = (j) => {
              var X = qt(), ae = It(X);
              ze(ae, () => o(P).label), U(j, X);
            };
            K(
              _,
              (j) => {
                o(k) === E.CODE ? j(y) : j(C, !1);
              },
              I
            );
          }
        };
        K(
          n,
          (_) => {
            o(k) === E.VERIFYING ? _(g) : _(w, !1);
          },
          u
        );
      }
    };
    K(el, (n) => {
      o(k) === E.VERIFIED ? n(tl) : n(rl, !1);
    });
  }
  Z(Ft);
  var _n = J(Ft, 2);
  {
    var nl = (n) => {
      var u = Ka();
      Dn(u), ke(() => {
        N(u, "name", H()), Na(u, o(Te));
      }), U(n, u);
    };
    K(_n, (n) => {
      o(k) === E.VERIFIED && n(nl);
    });
  }
  var mn = J(_n, 2);
  {
    var il = (n) => {
      var u = Xa(), g = W(u);
      N(g, "href", Di), Z(u), ke(() => N(g, "aria-label", o(P).ariaLinkLabel)), U(n, u);
    };
    K(mn, (n) => {
      (le() !== !0 || o(or)) && n(il);
    });
  }
  var ll = J(mn, 2);
  {
    var al = (n) => {
      var u = no(), g = J(W(u), 2), w = W(g), _ = J(w, 2);
      wa(_, !m()), _.__keydown = [
        Ga,
        zr
      ];
      var I = J(_, 2), y = W(I), C = W(y);
      {
        var j = (we) => {
          var G = to();
          G.__click = zr;
          var Mt = W(G);
          {
            var At = (st) => {
              yr(st, () => 20);
            }, vl = (st, hl) => {
              {
                var gl = (ut) => {
                  var gr = za();
                  U(ut, gr);
                }, _l = (ut, gr) => {
                  {
                    var ml = (ft) => {
                      var _r = Qa();
                      U(ft, _r);
                    }, wl = (ft) => {
                      var _r = eo();
                      U(ft, _r);
                    };
                    K(
                      ut,
                      (ft) => {
                        o(Y) === z.PLAYING ? ft(ml) : ft(wl, !1);
                      },
                      gr
                    );
                  }
                };
                K(
                  st,
                  (ut) => {
                    o(Y) === z.ERROR ? ut(gl) : ut(_l, !1);
                  },
                  hl
                );
              }
            };
            K(Mt, (st) => {
              o(Y) === z.LOADING ? st(At) : st(vl, !1);
            });
          }
          Z(G), ke(() => {
            N(G, "title", o(P).getAudioChallenge), G.disabled = o(Y) === z.LOADING || o(Y) === z.ERROR || o(Ke), N(G, "aria-label", o(Y) === z.LOADING ? o(P).loading : o(P).getAudioChallenge);
          }), U(we, G);
        };
        K(C, (we) => {
          o(B).challenge.codeChallenge.audio && we(j);
        });
      }
      var X = J(C, 2);
      X.__click = [Za, De], Z(y);
      var ae = J(y, 2), qe = W(ae);
      {
        var hr = (we) => {
          yr(we, () => 16);
        };
        K(qe, (we) => {
          o(Ke) && we(hr);
        });
      }
      var Vt = J(qe);
      Z(ae), Z(I);
      var cl = J(I, 2);
      {
        var dl = (we) => {
          var G = ro(), Mt = W(G);
          Z(G), Ut(G, (At) => p(Ve, At), () => o(Ve)), ke((At) => N(Mt, "src", At), [
            () => Yr(o(B).challenge.codeChallenge.audio, { language: ce() })
          ]), Ue("loadstart", G, Bi), Ue("canplay", G, ji), Ue("pause", G, Yi), Ue("playing", G, Hi), Ue("ended", G, qi), Ue("error", Mt, Ui), U(we, G);
        };
        K(cl, (we) => {
          o(B).challenge.codeChallenge.audio && o(fr) && we(dl);
        });
      }
      Z(g), Z(u), ke(() => {
        N(u, "aria-label", o(P).verificationRequired), N(w, "src", o(B).challenge.codeChallenge.image), N(_, "minlength", o(B).challenge.codeChallenge.length || 1), N(_, "maxlength", o(B).challenge.codeChallenge.length), N(_, "placeholder", o(P).enterCode), N(_, "aria-label", o(Y) === z.LOADING ? o(P).loading : o(Y) === z.PLAYING ? "" : o(P).enterCodeAria), N(_, "aria-live", o(Y) ? "assertive" : "polite"), N(_, "aria-busy", o(Y) === z.LOADING), _.disabled = o(Ke), N(X, "aria-label", o(P).reload), N(X, "title", o(P).reload), X.disabled = o(Ke), ae.disabled = o(Ke), N(ae, "aria-label", o(P).verify), Ea(Vt, ` ${o(P).verify ?? ""}`);
      }), Ue("submit", g, Gi, !0), U(n, u);
    };
    K(ll, (n) => {
      var u;
      (u = o(B)) != null && u.challenge.codeChallenge && n(al);
    });
  }
  Z(vr);
  var wn = J(vr, 2);
  {
    var ol = (n) => {
      var u = ao(), g = J(W(u), 2);
      {
        var w = (I) => {
          var y = io(), C = W(y);
          ze(C, () => o(P).expired), Z(y), ke(() => N(y, "title", o(Je))), U(I, y);
        }, _ = (I) => {
          var y = lo(), C = W(y);
          ze(C, () => o(P).error), Z(y), ke(() => N(y, "title", o(Je))), U(I, y);
        };
        K(g, (I) => {
          o(k) === E.EXPIRED ? I(w) : I(_, !1);
        });
      }
      Z(u), U(n, u);
    };
    K(wn, (n) => {
      (o(Je) || o(k) === E.EXPIRED) && n(ol);
    });
  }
  var pn = J(wn, 2);
  {
    var sl = (n) => {
      var u = oo(), g = W(u), w = W(g);
      ze(w, () => o(P).footer), Z(g), Z(u), U(n, u);
    };
    K(pn, (n) => {
      o(P).footer && (M() !== !0 || o(or)) && n(sl);
    });
  }
  var ul = J(pn, 2);
  {
    var fl = (n) => {
      var u = so();
      Ut(u, (g) => p(bt, g), () => o(bt)), U(n, u);
    };
    K(ul, (n) => {
      h() && n(fl);
    });
  }
  return Z(Ct), Ut(Ct, (n) => p(te, n), () => o(te)), ke(
    (n) => {
      N(Ct, "data-state", o(k)), N(Ct, "data-floating", h()), hn = ka(Ot, 1, "altcha-checkbox", null, hn, n), N(Xe, "id", o(qr)), Xe.required = r() !== "onsubmit" && (!h() || r() !== "off"), N(Ft, "for", o(qr));
    },
    [
      () => ({
        "altcha-checkbox-verifying": o(k) === E.VERIFYING
      })
    ]
  ), Ue("invalid", Xe, Xr), Ta(Xe, () => o(pt), (n) => p(pt, n)), U(e, dn), yi({
    clarify: yt,
    configure: an,
    getConfiguration: on,
    getFloatingAnchor: sn,
    getPlugin: zi,
    getState: un,
    hide: fn,
    repositionFloating: Et,
    reset: ot,
    setFloatingAnchor: cn,
    setState: Re,
    show: dr,
    verify: De,
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
      return v();
    },
    set expire(n = void 0) {
      v(n), A();
    },
    get floating() {
      return h();
    },
    set floating(n = void 0) {
      h(n), A();
    },
    get floatinganchor() {
      return b();
    },
    set floatinganchor(n = void 0) {
      b(n), A();
    },
    get floatingoffset() {
      return $();
    },
    set floatingoffset(n = void 0) {
      $(n), A();
    },
    get floatingpersist() {
      return L();
    },
    set floatingpersist(n = !1) {
      L(n), A();
    },
    get hidefooter() {
      return M();
    },
    set hidefooter(n = !1) {
      M(n), A();
    },
    get hidelogo() {
      return le();
    },
    set hidelogo(n = !1) {
      le(n), A();
    },
    get id() {
      return fe();
    },
    set id(n = void 0) {
      fe(n), A();
    },
    get language() {
      return ce();
    },
    set language(n = void 0) {
      ce(n), A();
    },
    get name() {
      return H();
    },
    set name(n = "altcha") {
      H(n), A();
    },
    get maxnumber() {
      return Ce();
    },
    set maxnumber(n = 1e6) {
      Ce(n), A();
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
      return Oe();
    },
    set plugins(n = void 0) {
      Oe(n), A();
    },
    get refetchonexpire() {
      return mt();
    },
    set refetchonexpire(n = !0) {
      mt(n), A();
    },
    get sentinel() {
      return We();
    },
    set sentinel(n = void 0) {
      We(n), A();
    },
    get spamfilter() {
      return Ae();
    },
    set spamfilter(n = !1) {
      Ae(n), A();
    },
    get strings() {
      return it();
    },
    set strings(n = void 0) {
      it(n), A();
    },
    get test() {
      return he();
    },
    set test(n = !1) {
      he(n), A();
    },
    get verifyurl() {
      return ee();
    },
    set verifyurl(n = void 0) {
      ee(n), A();
    },
    get workers() {
      return lt();
    },
    set workers(n = Math.min(16, navigator.hardwareConcurrency || 8)) {
      lt(n), A();
    },
    get workerurl() {
      return wt();
    },
    set workerurl(n = void 0) {
      wt(n), A();
    }
  });
}
ya(["change", "keydown", "click"]);
customElements.define("altcha-widget", Va(
  fo,
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
  fo as Altcha
};
