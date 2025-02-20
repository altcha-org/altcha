var hi = Object.defineProperty;
var Pr = (e) => {
  throw TypeError(e);
};
var gi = (e, t, r) => t in e ? hi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var re = (e, t, r) => gi(e, typeof t != "symbol" ? t + "" : t, r), zr = (e, t, r) => t.has(e) || Pr("Cannot " + r);
var M = (e, t, r) => (zr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Yt = (e, t, r) => t.has(e) ? Pr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), Ft = (e, t, r, l) => (zr(e, t, "write to private field"), l ? l.call(e, r) : t.set(e, r), r);
const Hr = "KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2NvbnN0IGQ9bmV3IFRleHRFbmNvZGVyO2Z1bmN0aW9uIHAoZSl7cmV0dXJuWy4uLm5ldyBVaW50OEFycmF5KGUpXS5tYXAodD0+dC50b1N0cmluZygxNikucGFkU3RhcnQoMiwiMCIpKS5qb2luKCIiKX1hc3luYyBmdW5jdGlvbiBiKGUsdCxyKXtpZih0eXBlb2YgY3J5cHRvPiJ1Inx8ISgic3VidGxlImluIGNyeXB0byl8fCEoImRpZ2VzdCJpbiBjcnlwdG8uc3VidGxlKSl0aHJvdyBuZXcgRXJyb3IoIldlYiBDcnlwdG8gaXMgbm90IGF2YWlsYWJsZS4gU2VjdXJlIGNvbnRleHQgaXMgcmVxdWlyZWQgKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL1NlY3VyaXR5L1NlY3VyZV9Db250ZXh0cykuIik7cmV0dXJuIHAoYXdhaXQgY3J5cHRvLnN1YnRsZS5kaWdlc3Qoci50b1VwcGVyQ2FzZSgpLGQuZW5jb2RlKGUrdCkpKX1mdW5jdGlvbiB3KGUsdCxyPSJTSEEtMjU2IixuPTFlNixzPTApe2NvbnN0IG89bmV3IEFib3J0Q29udHJvbGxlcixhPURhdGUubm93KCk7cmV0dXJue3Byb21pc2U6KGFzeW5jKCk9Pntmb3IobGV0IGM9cztjPD1uO2MrPTEpe2lmKG8uc2lnbmFsLmFib3J0ZWQpcmV0dXJuIG51bGw7aWYoYXdhaXQgYih0LGMscik9PT1lKXJldHVybntudW1iZXI6Yyx0b29rOkRhdGUubm93KCktYX19cmV0dXJuIG51bGx9KSgpLGNvbnRyb2xsZXI6b319ZnVuY3Rpb24gaChlKXtjb25zdCB0PWF0b2IoZSkscj1uZXcgVWludDhBcnJheSh0Lmxlbmd0aCk7Zm9yKGxldCBuPTA7bjx0Lmxlbmd0aDtuKyspcltuXT10LmNoYXJDb2RlQXQobik7cmV0dXJuIHJ9ZnVuY3Rpb24gZyhlLHQ9MTIpe2NvbnN0IHI9bmV3IFVpbnQ4QXJyYXkodCk7Zm9yKGxldCBuPTA7bjx0O24rKylyW25dPWUlMjU2LGU9TWF0aC5mbG9vcihlLzI1Nik7cmV0dXJuIHJ9YXN5bmMgZnVuY3Rpb24gbShlLHQ9IiIscj0xZTYsbj0wKXtjb25zdCBzPSJBRVMtR0NNIixvPW5ldyBBYm9ydENvbnRyb2xsZXIsYT1EYXRlLm5vdygpLGw9YXN5bmMoKT0+e2ZvcihsZXQgdT1uO3U8PXI7dSs9MSl7aWYoby5zaWduYWwuYWJvcnRlZHx8IWN8fCF5KXJldHVybiBudWxsO3RyeXtjb25zdCBmPWF3YWl0IGNyeXB0by5zdWJ0bGUuZGVjcnlwdCh7bmFtZTpzLGl2OmcodSl9LGMseSk7aWYoZilyZXR1cm57Y2xlYXJUZXh0Om5ldyBUZXh0RGVjb2RlcigpLmRlY29kZShmKSx0b29rOkRhdGUubm93KCktYX19Y2F0Y2h7fX1yZXR1cm4gbnVsbH07bGV0IGM9bnVsbCx5PW51bGw7dHJ5e3k9aChlKTtjb25zdCB1PWF3YWl0IGNyeXB0by5zdWJ0bGUuZGlnZXN0KCJTSEEtMjU2IixkLmVuY29kZSh0KSk7Yz1hd2FpdCBjcnlwdG8uc3VidGxlLmltcG9ydEtleSgicmF3Iix1LHMsITEsWyJkZWNyeXB0Il0pfWNhdGNoe3JldHVybntwcm9taXNlOlByb21pc2UucmVqZWN0KCksY29udHJvbGxlcjpvfX1yZXR1cm57cHJvbWlzZTpsKCksY29udHJvbGxlcjpvfX1sZXQgaTtvbm1lc3NhZ2U9YXN5bmMgZT0+e2NvbnN0e3R5cGU6dCxwYXlsb2FkOnIsc3RhcnQ6bixtYXg6c309ZS5kYXRhO2xldCBvPW51bGw7aWYodD09PSJhYm9ydCIpaT09bnVsbHx8aS5hYm9ydCgpLGk9dm9pZCAwO2Vsc2UgaWYodD09PSJ3b3JrIil7aWYoIm9iZnVzY2F0ZWQiaW4gcil7Y29uc3R7a2V5OmEsb2JmdXNjYXRlZDpsfT1yfHx7fTtvPWF3YWl0IG0obCxhLHMsbil9ZWxzZXtjb25zdHthbGdvcml0aG06YSxjaGFsbGVuZ2U6bCxzYWx0OmN9PXJ8fHt9O289dyhsLGMsYSxzLG4pfWk9by5jb250cm9sbGVyLG8ucHJvbWlzZS50aGVuKGE9PntzZWxmLnBvc3RNZXNzYWdlKGEmJnsuLi5hLHdvcmtlcjohMH0pfSl9fX0pKCk7Cg==", _i = (e) => Uint8Array.from(atob(e), (t) => t.charCodeAt(0)), Gr = typeof self < "u" && self.Blob && new Blob([_i(Hr)], { type: "text/javascript;charset=utf-8" });
function mi(e) {
  let t;
  try {
    if (t = Gr && (self.URL || self.webkitURL).createObjectURL(Gr), !t) throw "";
    const r = new Worker(t, {
      name: e == null ? void 0 : e.name
    });
    return r.addEventListener("error", () => {
      (self.URL || self.webkitURL).revokeObjectURL(t);
    }), r;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + Hr,
      {
        name: e == null ? void 0 : e.name
      }
    );
  } finally {
    t && (self.URL || self.webkitURL).revokeObjectURL(t);
  }
}
const bi = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(bi);
const yi = 1, pi = 4, wi = 8, Ei = 16, xi = 1, ki = 2, Jr = "[", Kr = "[!", qr = "]", Ue = {}, j = Symbol(), Qr = !1;
var en = Array.isArray, Ci = Array.from, xt = Object.keys, kt = Object.defineProperty, Ne = Object.getOwnPropertyDescriptor, Ri = Object.getOwnPropertyDescriptors, Ii = Object.prototype, $i = Array.prototype, Xt = Object.getPrototypeOf;
function tn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const le = 2, rn = 4, vt = 8, Jt = 16, ae = 32, ht = 64, Zt = 128, Ae = 256, Ct = 512, B = 1024, xe = 2048, gt = 4096, Be = 8192, Ke = 16384, Si = 32768, Kt = 65536, Ni = 1 << 19, nn = 1 << 20, ut = Symbol("$state"), ln = Symbol("legacy props"), Li = Symbol("");
function an(e) {
  return e === this.v;
}
function Ai(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function on(e) {
  return !Ai(e, this.v);
}
function Ti(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Vi() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Pi(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function zi() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Gi() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Di(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Yi() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Fi() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Oi() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Xi() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let sn = !1;
function fe(e) {
  return {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: an,
    version: 0
  };
}
function Ye(e) {
  return /* @__PURE__ */ Zi(fe(e));
}
// @__NO_SIDE_EFFECTS__
function un(e, t = !1) {
  const r = fe(e);
  return t || (r.equals = on), r;
}
// @__NO_SIDE_EFFECTS__
function Zi(e) {
  return R !== null && R.f & le && (ce === null ? nl([e]) : ce.push(e)), e;
}
function T(e, t) {
  return R !== null && ll() && R.f & (le | Jt) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (ce === null || !ce.includes(e)) && Xi(), Wi(e, t);
}
function Wi(e, t) {
  return e.equals(t) || (e.v = t, e.version = $n(), fn(e, xe), y !== null && y.f & B && !(y.f & ae) && (O !== null && O.includes(e) ? (ve(y, xe), Tt(y)) : we === null ? il([e]) : we.push(e))), t;
}
function fn(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var l = r.length, i = 0; i < l; i++) {
      var a = r[i], o = a.f;
      o & xe || (ve(a, t), o & (B | Ae) && (o & le ? fn(
        /** @type {Derived} */
        a,
        gt
      ) : Tt(
        /** @type {Effect} */
        a
      )));
    }
}
function St(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let P = !1;
function Ze(e) {
  P = e;
}
let V;
function ke(e) {
  if (e === null)
    throw St(), Ue;
  return V = e;
}
function He() {
  return ke(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Re(V)
  );
}
function H(e) {
  if (P) {
    if (/* @__PURE__ */ Re(V) !== null)
      throw St(), Ue;
    V = e;
  }
}
function Ui() {
  for (var e = 0, t = V; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === qr) {
        if (e === 0) return t;
        e -= 1;
      } else (r === Jr || r === Kr) && (e += 1);
    }
    var l = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Re(t)
    );
    t.remove(), t = l;
  }
}
function ie(e, t = null, r) {
  if (typeof e != "object" || e === null || ut in e)
    return e;
  const l = Xt(e);
  if (l !== Ii && l !== $i)
    return e;
  var i = /* @__PURE__ */ new Map(), a = en(e), o = fe(0);
  a && i.set("length", fe(
    /** @type {any[]} */
    e.length
  ));
  var d;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(u, c, f) {
        (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && Yi();
        var h = i.get(c);
        return h === void 0 ? (h = fe(f.value), i.set(c, h)) : T(h, ie(f.value, d)), !0;
      },
      deleteProperty(u, c) {
        var f = i.get(c);
        if (f === void 0)
          c in u && i.set(c, fe(j));
        else {
          if (a && typeof c == "string") {
            var h = (
              /** @type {Source<number>} */
              i.get("length")
            ), g = Number(c);
            Number.isInteger(g) && g < h.v && T(h, g);
          }
          T(f, j), Dr(o);
        }
        return !0;
      },
      get(u, c, f) {
        var p;
        if (c === ut)
          return e;
        var h = i.get(c), g = c in u;
        if (h === void 0 && (!g || (p = Ne(u, c)) != null && p.writable) && (h = fe(ie(g ? u[c] : j, d)), i.set(c, h)), h !== void 0) {
          var m = v(h);
          return m === j ? void 0 : m;
        }
        return Reflect.get(u, c, f);
      },
      getOwnPropertyDescriptor(u, c) {
        var f = Reflect.getOwnPropertyDescriptor(u, c);
        if (f && "value" in f) {
          var h = i.get(c);
          h && (f.value = v(h));
        } else if (f === void 0) {
          var g = i.get(c), m = g == null ? void 0 : g.v;
          if (g !== void 0 && m !== j)
            return {
              enumerable: !0,
              configurable: !0,
              value: m,
              writable: !0
            };
        }
        return f;
      },
      has(u, c) {
        var m;
        if (c === ut)
          return !0;
        var f = i.get(c), h = f !== void 0 && f.v !== j || Reflect.has(u, c);
        if (f !== void 0 || y !== null && (!h || (m = Ne(u, c)) != null && m.writable)) {
          f === void 0 && (f = fe(h ? ie(u[c], d) : j), i.set(c, f));
          var g = v(f);
          if (g === j)
            return !1;
        }
        return h;
      },
      set(u, c, f, h) {
        var Z;
        var g = i.get(c), m = c in u;
        if (a && c === "length")
          for (var p = f; p < /** @type {Source<number>} */
          g.v; p += 1) {
            var L = i.get(p + "");
            L !== void 0 ? T(L, j) : p in u && (L = fe(j), i.set(p + "", L));
          }
        g === void 0 ? (!m || (Z = Ne(u, c)) != null && Z.writable) && (g = fe(void 0), T(g, ie(f, d)), i.set(c, g)) : (m = g.v !== j, T(g, ie(f, d)));
        var G = Reflect.getOwnPropertyDescriptor(u, c);
        if (G != null && G.set && G.set.call(h, f), !m) {
          if (a && typeof c == "string") {
            var Q = (
              /** @type {Source<number>} */
              i.get("length")
            ), D = Number(c);
            Number.isInteger(D) && D >= Q.v && T(Q, D + 1);
          }
          Dr(o);
        }
        return !0;
      },
      ownKeys(u) {
        v(o);
        var c = Reflect.ownKeys(u).filter((g) => {
          var m = i.get(g);
          return m === void 0 || m.v !== j;
        });
        for (var [f, h] of i)
          h.v !== j && !(f in u) && c.push(f);
        return c;
      },
      setPrototypeOf() {
        Fi();
      }
    }
  );
}
function Dr(e, t = 1) {
  T(e, e.v + t);
}
var Yr, cn, dn;
function Wt() {
  if (Yr === void 0) {
    Yr = window;
    var e = Element.prototype, t = Node.prototype;
    cn = Ne(t, "firstChild").get, dn = Ne(t, "nextSibling").get, e.__click = void 0, e.__className = "", e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Nt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Le(e) {
  return cn.call(e);
}
// @__NO_SIDE_EFFECTS__
function Re(e) {
  return dn.call(e);
}
function J(e, t) {
  if (!P)
    return /* @__PURE__ */ Le(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Le(V)
  );
  return r === null && (r = V.appendChild(Nt())), ke(r), r;
}
function Ot(e, t) {
  if (!P) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Le(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Re(r) : r;
  }
  return V;
}
function ge(e, t = 1, r = !1) {
  let l = P ? V : e;
  for (var i; t--; )
    i = l, l = /** @type {TemplateNode} */
    /* @__PURE__ */ Re(l);
  if (!P)
    return l;
  var a = l == null ? void 0 : l.nodeType;
  if (r && a !== 3) {
    var o = Nt();
    return l === null ? i == null || i.after(o) : l.before(o), ke(o), o;
  }
  return ke(l), /** @type {TemplateNode} */
  l;
}
function Mi(e) {
  e.textContent = "";
}
// @__NO_SIDE_EFFECTS__
function ot(e) {
  var t = le | xe;
  y === null ? t |= Ae : y.f |= nn;
  var r = R !== null && R.f & le ? (
    /** @type {Derived} */
    R
  ) : null;
  const l = {
    children: null,
    ctx: X,
    deps: null,
    equals: an,
    f: t,
    fn: e,
    reactions: null,
    v: (
      /** @type {V} */
      null
    ),
    version: 0,
    parent: r ?? y
  };
  return r !== null && (r.children ?? (r.children = [])).push(l), l;
}
function vn(e) {
  var t = e.children;
  if (t !== null) {
    e.children = null;
    for (var r = 0; r < t.length; r += 1) {
      var l = t[r];
      l.f & le ? qt(
        /** @type {Derived} */
        l
      ) : Te(
        /** @type {Effect} */
        l
      );
    }
  }
}
function ji(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & le))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function hn(e) {
  var t, r = y;
  de(ji(e));
  try {
    vn(e), t = Sn(e);
  } finally {
    de(r);
  }
  return t;
}
function gn(e) {
  var t = hn(e), r = (We || e.f & Ae) && e.deps !== null ? gt : B;
  ve(e, r), e.equals(t) || (e.v = t, e.version = $n());
}
function qt(e) {
  vn(e), dt(e, 0), ve(e, Ke), e.v = e.children = e.deps = e.ctx = e.reactions = null;
}
function Bi(e) {
  y === null && R === null && Pi(), R !== null && R.f & Ae && Vi(), nr && Ti();
}
function Hi(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function qe(e, t, r, l = !0) {
  var i = (e & ht) !== 0, a = y, o = {
    ctx: X,
    deps: null,
    deriveds: null,
    nodes_start: null,
    nodes_end: null,
    f: e | xe,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: i ? null : a,
    prev: null,
    teardown: null,
    transitions: null,
    version: 0
  };
  if (r) {
    var d = Me;
    try {
      Xr(!0), At(o), o.f |= Si;
    } catch (f) {
      throw Te(o), f;
    } finally {
      Xr(d);
    }
  } else t !== null && Tt(o);
  var u = r && o.deps === null && o.first === null && o.nodes_start === null && o.teardown === null && (o.f & nn) === 0;
  if (!u && !i && l && (a !== null && Hi(o, a), R !== null && R.f & le)) {
    var c = (
      /** @type {Derived} */
      R
    );
    (c.children ?? (c.children = [])).push(o);
  }
  return o;
}
function Ji(e) {
  const t = qe(vt, null, !1);
  return ve(t, B), t.teardown = e, t;
}
function Ut(e) {
  Bi();
  var t = y !== null && (y.f & ae) !== 0 && X !== null && !X.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      X
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: y,
      reaction: R
    });
  } else {
    var l = Qt(e);
    return l;
  }
}
function _n(e) {
  const t = qe(ht, e, !0);
  return () => {
    Te(t);
  };
}
function Qt(e) {
  return qe(rn, e, !1);
}
function er(e) {
  return qe(vt, e, !0);
}
function Fe(e) {
  return tr(e);
}
function tr(e, t = 0) {
  return qe(vt | Jt | t, e, !0);
}
function Rt(e, t = !0) {
  return qe(vt | ae, e, !0, t);
}
function mn(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = nr, l = R;
    Zr(!0), Ce(null);
    try {
      t.call(null);
    } finally {
      Zr(r), Ce(l);
    }
  }
}
function bn(e) {
  var t = e.deriveds;
  if (t !== null) {
    e.deriveds = null;
    for (var r = 0; r < t.length; r += 1)
      qt(t[r]);
  }
}
function yn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var l = r.next;
    Te(r, t), r = l;
  }
}
function Ki(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    t.f & ae || Te(t), t = r;
  }
}
function Te(e, t = !0) {
  var r = !1;
  if ((t || e.f & Ni) && e.nodes_start !== null) {
    for (var l = e.nodes_start, i = e.nodes_end; l !== null; ) {
      var a = l === i ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Re(l)
      );
      l.remove(), l = a;
    }
    r = !0;
  }
  yn(e, t && !r), bn(e), dt(e, 0), ve(e, Ke);
  var o = e.transitions;
  if (o !== null)
    for (const u of o)
      u.stop();
  mn(e);
  var d = e.parent;
  d !== null && d.first !== null && pn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function pn(e) {
  var t = e.parent, r = e.prev, l = e.next;
  r !== null && (r.next = l), l !== null && (l.prev = r), t !== null && (t.first === e && (t.first = l), t.last === e && (t.last = r));
}
function Fr(e, t) {
  var r = [];
  wn(e, r, !0), qi(r, () => {
    Te(e), t && t();
  });
}
function qi(e, t) {
  var r = e.length;
  if (r > 0) {
    var l = () => --r || t();
    for (var i of e)
      i.out(l);
  } else
    t();
}
function wn(e, t, r) {
  if (!(e.f & Be)) {
    if (e.f ^= Be, e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || r) && t.push(o);
    for (var l = e.first; l !== null; ) {
      var i = l.next, a = (l.f & Kt) !== 0 || (l.f & ae) !== 0;
      wn(l, t, a ? r : !1), l = i;
    }
  }
}
function Or(e) {
  En(e, !0);
}
function En(e, t) {
  if (e.f & Be) {
    _t(e) && At(e), e.f ^= Be;
    for (var r = e.first; r !== null; ) {
      var l = r.next, i = (r.f & Kt) !== 0 || (r.f & ae) !== 0;
      En(r, i ? t : !1), r = l;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
const Qi = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let It = !1, $t = !1, Mt = [], jt = [];
function xn() {
  It = !1;
  const e = Mt.slice();
  Mt = [], tn(e);
}
function kn() {
  $t = !1;
  const e = jt.slice();
  jt = [], tn(e);
}
function rr(e) {
  It || (It = !0, queueMicrotask(xn)), Mt.push(e);
}
function el(e) {
  $t || ($t = !0, Qi(kn)), jt.push(e);
}
function tl() {
  It && xn(), $t && kn();
}
function Cn(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
const Rn = 0, rl = 1;
let pt = !1, wt = Rn, ft = !1, ct = null, Me = !1, nr = !1;
function Xr(e) {
  Me = e;
}
function Zr(e) {
  nr = e;
}
let Se = [], je = 0;
let R = null;
function Ce(e) {
  R = e;
}
let y = null;
function de(e) {
  y = e;
}
let ce = null;
function nl(e) {
  ce = e;
}
let O = null, q = 0, we = null;
function il(e) {
  we = e;
}
let In = 0, We = !1, X = null;
function $n() {
  return ++In;
}
function ll() {
  return !sn;
}
function _t(e) {
  var o, d;
  var t = e.f;
  if (t & xe)
    return !0;
  if (t & gt) {
    var r = e.deps, l = (t & Ae) !== 0;
    if (r !== null) {
      var i;
      if (t & Ct) {
        for (i = 0; i < r.length; i++)
          ((o = r[i]).reactions ?? (o.reactions = [])).push(e);
        e.f ^= Ct;
      }
      for (i = 0; i < r.length; i++) {
        var a = r[i];
        if (_t(
          /** @type {Derived} */
          a
        ) && gn(
          /** @type {Derived} */
          a
        ), l && y !== null && !We && !((d = a == null ? void 0 : a.reactions) != null && d.includes(e)) && (a.reactions ?? (a.reactions = [])).push(e), a.version > e.version)
          return !0;
      }
    }
    l || ve(e, B);
  }
  return !1;
}
function al(e, t) {
  for (var r = t; r !== null; ) {
    if (r.f & Zt)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= Zt;
      }
    r = r.parent;
  }
  throw pt = !1, e;
}
function ol(e) {
  return (e.f & Ke) === 0 && (e.parent === null || (e.parent.f & Zt) === 0);
}
function Lt(e, t, r, l) {
  if (pt) {
    if (r === null && (pt = !1), ol(t))
      throw e;
    return;
  }
  r !== null && (pt = !0);
  {
    al(e, t);
    return;
  }
}
function Sn(e) {
  var g;
  var t = O, r = q, l = we, i = R, a = We, o = ce, d = X, u = e.f;
  O = /** @type {null | Value[]} */
  null, q = 0, we = null, R = u & (ae | ht) ? null : e, We = !Me && (u & Ae) !== 0, ce = null, X = e.ctx;
  try {
    var c = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (O !== null) {
      var h;
      if (dt(e, q), f !== null && q > 0)
        for (f.length = q + O.length, h = 0; h < O.length; h++)
          f[q + h] = O[h];
      else
        e.deps = f = O;
      if (!We)
        for (h = q; h < f.length; h++)
          ((g = f[h]).reactions ?? (g.reactions = [])).push(e);
    } else f !== null && q < f.length && (dt(e, q), f.length = q);
    return c;
  } finally {
    O = t, q = r, we = l, R = i, We = a, ce = o, X = d;
  }
}
function sl(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var l = r.indexOf(e);
    if (l !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[l] = r[i], r.pop());
    }
  }
  r === null && t.f & le && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (O === null || !O.includes(t)) && (ve(t, gt), t.f & (Ae | Ct) || (t.f ^= Ct), dt(
    /** @type {Derived} **/
    t,
    0
  ));
}
function dt(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var l = t; l < r.length; l++)
      sl(e, r[l]);
}
function At(e) {
  var t = e.f;
  if (!(t & Ke)) {
    ve(e, B);
    var r = y, l = X;
    y = e;
    try {
      t & Jt ? Ki(e) : yn(e), bn(e), mn(e);
      var i = Sn(e);
      e.teardown = typeof i == "function" ? i : null, e.version = In;
    } catch (a) {
      Lt(a, e, r, l || e.ctx);
    } finally {
      y = r;
    }
  }
}
function Nn() {
  if (je > 1e3) {
    je = 0;
    try {
      zi();
    } catch (e) {
      if (ct !== null)
        Lt(e, ct, null);
      else
        throw e;
    }
  }
  je++;
}
function Ln(e) {
  var t = e.length;
  if (t !== 0) {
    Nn();
    var r = Me;
    Me = !0;
    try {
      for (var l = 0; l < t; l++) {
        var i = e[l];
        i.f & B || (i.f ^= B);
        var a = [];
        An(i, a), ul(a);
      }
    } finally {
      Me = r;
    }
  }
}
function ul(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var l = e[r];
      if (!(l.f & (Ke | Be)))
        try {
          _t(l) && (At(l), l.deps === null && l.first === null && l.nodes_start === null && (l.teardown === null ? pn(l) : l.fn = null));
        } catch (i) {
          Lt(i, l, null, l.ctx);
        }
    }
}
function fl() {
  if (ft = !1, je > 1001)
    return;
  const e = Se;
  Se = [], Ln(e), ft || (je = 0, ct = null);
}
function Tt(e) {
  wt === Rn && (ft || (ft = !0, queueMicrotask(fl))), ct = e;
  for (var t = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if (r & (ht | ae)) {
      if (!(r & B)) return;
      t.f ^= B;
    }
  }
  Se.push(t);
}
function An(e, t) {
  var r = e.first, l = [];
  e: for (; r !== null; ) {
    var i = r.f, a = (i & ae) !== 0, o = a && (i & B) !== 0, d = r.next;
    if (!o && !(i & Be))
      if (i & vt) {
        if (a)
          r.f ^= B;
        else
          try {
            _t(r) && At(r);
          } catch (h) {
            Lt(h, r, null, r.ctx);
          }
        var u = r.first;
        if (u !== null) {
          r = u;
          continue;
        }
      } else i & rn && l.push(r);
    if (d === null) {
      let h = r.parent;
      for (; h !== null; ) {
        if (e === h)
          break e;
        var c = h.next;
        if (c !== null) {
          r = c;
          continue e;
        }
        h = h.parent;
      }
    }
    r = d;
  }
  for (var f = 0; f < l.length; f++)
    u = l[f], t.push(u), An(u, t);
}
function k(e) {
  var t = wt, r = Se;
  try {
    Nn();
    const i = [];
    wt = rl, Se = i, ft = !1, Ln(r);
    var l = e == null ? void 0 : e();
    return tl(), (Se.length > 0 || i.length > 0) && k(), je = 0, ct = null, l;
  } finally {
    wt = t, Se = r;
  }
}
async function cl() {
  await Promise.resolve(), k();
}
function v(e) {
  var f;
  var t = e.f, r = (t & le) !== 0;
  if (r && t & Ke) {
    var l = hn(
      /** @type {Derived} */
      e
    );
    return qt(
      /** @type {Derived} */
      e
    ), l;
  }
  if (R !== null) {
    ce !== null && ce.includes(e) && Oi();
    var i = R.deps;
    O === null && i !== null && i[q] === e ? q++ : O === null ? O = [e] : O.push(e), we !== null && y !== null && y.f & B && !(y.f & ae) && we.includes(e) && (ve(y, xe), Tt(y));
  } else if (r && /** @type {Derived} */
  e.deps === null)
    for (var a = (
      /** @type {Derived} */
      e
    ), o = a.parent, d = a; o !== null; )
      if (o.f & le) {
        var u = (
          /** @type {Derived} */
          o
        );
        d = u, o = u.parent;
      } else {
        var c = (
          /** @type {Effect} */
          o
        );
        (f = c.deriveds) != null && f.includes(d) || (c.deriveds ?? (c.deriveds = [])).push(d);
        break;
      }
  return r && (a = /** @type {Derived} */
  e, _t(a) && gn(a)), e.v;
}
function Je(e) {
  const t = R;
  try {
    return R = null, e();
  } finally {
    R = t;
  }
}
const dl = ~(xe | gt | B);
function ve(e, t) {
  e.f = e.f & dl | t;
}
function Tn(e, t = !1, r) {
  X = {
    p: X,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
}
function Vn(e) {
  const t = X;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const o = t.e;
    if (o !== null) {
      var r = y, l = R;
      t.e = null;
      try {
        for (var i = 0; i < o.length; i++) {
          var a = o[i];
          de(a.effect), Ce(a.reaction), Qt(a.fn);
        }
      } finally {
        de(r), Ce(l);
      }
    }
    X = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
let Wr = !1;
function Pn() {
  Wr || (Wr = !0, document.addEventListener(
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
function zn(e) {
  var t = R, r = y;
  Ce(null), de(null);
  try {
    return e();
  } finally {
    Ce(t), de(r);
  }
}
function vl(e, t, r, l = r) {
  e.addEventListener(t, () => zn(r));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), l(!0);
  } : e.__on_r = () => l(!0), Pn();
}
const Gn = /* @__PURE__ */ new Set(), Bt = /* @__PURE__ */ new Set();
function hl(e, t, r, l) {
  function i(a) {
    if (l.capture || st.call(t, a), !a.cancelBubble)
      return zn(() => r.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? rr(() => {
    t.addEventListener(e, i, l);
  }) : t.addEventListener(e, i, l), i;
}
function gl(e, t, r, l, i) {
  var a = { capture: l, passive: i }, o = hl(e, t, r, a);
  (t === document.body || t === window || t === document) && Ji(() => {
    t.removeEventListener(e, o, a);
  });
}
function _l(e) {
  for (var t = 0; t < e.length; t++)
    Gn.add(e[t]);
  for (var r of Bt)
    r(e);
}
function st(e) {
  var D;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), l = e.type, i = ((D = e.composedPath) == null ? void 0 : D.call(e)) || [], a = (
    /** @type {null | Element} */
    i[0] || e.target
  ), o = 0, d = e.__root;
  if (d) {
    var u = i.indexOf(d);
    if (u !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var c = i.indexOf(t);
    if (c === -1)
      return;
    u <= c && (o = u);
  }
  if (a = /** @type {Element} */
  i[o] || e.target, a !== t) {
    kt(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var f = R, h = y;
    Ce(null), de(null);
    try {
      for (var g, m = []; a !== null; ) {
        var p = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var L = a["__" + l];
          if (L !== void 0 && !/** @type {any} */
          a.disabled)
            if (en(L)) {
              var [G, ...Q] = L;
              G.apply(a, [e, ...Q]);
            } else
              L.call(a, e);
        } catch (Z) {
          g ? m.push(Z) : g = Z;
        }
        if (e.cancelBubble || p === t || p === null)
          break;
        a = p;
      }
      if (g) {
        for (let Z of m)
          queueMicrotask(() => {
            throw Z;
          });
        throw g;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Ce(f), de(h);
    }
  }
}
function Dn(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Ee(e, t) {
  var r = (
    /** @type {Effect} */
    y
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function oe(e, t) {
  var r = (t & xi) !== 0, l = (t & ki) !== 0, i, a = !e.startsWith("<!>");
  return () => {
    if (P)
      return Ee(V, null), V;
    i === void 0 && (i = Dn(a ? e : "<!>" + e), r || (i = /** @type {Node} */
    /* @__PURE__ */ Le(i)));
    var o = (
      /** @type {TemplateNode} */
      l ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Le(o)
      ), u = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Ee(d, u);
    } else
      Ee(o, o);
    return o;
  };
}
function ml() {
  if (P)
    return Ee(V, null), V;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = Nt();
  return e.append(t, r), Ee(t, r), e;
}
function K(e, t) {
  if (P) {
    y.nodes_end = V, He();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const bl = ["touchstart", "touchmove"];
function yl(e) {
  return bl.includes(e);
}
function Yn(e, t) {
  return Fn(e, t);
}
function pl(e, t) {
  Wt(), t.intro = t.intro ?? !1;
  const r = t.target, l = P, i = V;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Le(r)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== Jr); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ Re(a);
    if (!a)
      throw Ue;
    Ze(!0), ke(
      /** @type {Comment} */
      a
    ), He();
    const o = Fn(e, { ...t, anchor: a });
    if (V === null || V.nodeType !== 8 || /** @type {Comment} */
    V.data !== qr)
      throw St(), Ue;
    return Ze(!1), /**  @type {Exports} */
    o;
  } catch (o) {
    if (o === Ue)
      return t.recover === !1 && Gi(), Wt(), Mi(r), Ze(!1), Yn(e, t);
    throw o;
  } finally {
    Ze(l), ke(i);
  }
}
const Oe = /* @__PURE__ */ new Map();
function Fn(e, { target: t, anchor: r, props: l = {}, events: i, context: a, intro: o = !0 }) {
  Wt();
  var d = /* @__PURE__ */ new Set(), u = (h) => {
    for (var g = 0; g < h.length; g++) {
      var m = h[g];
      if (!d.has(m)) {
        d.add(m);
        var p = yl(m);
        t.addEventListener(m, st, { passive: p });
        var L = Oe.get(m);
        L === void 0 ? (document.addEventListener(m, st, { passive: p }), Oe.set(m, 1)) : Oe.set(m, L + 1);
      }
    }
  };
  u(Ci(Gn)), Bt.add(u);
  var c = void 0, f = _n(() => {
    var h = r ?? t.appendChild(Nt());
    return Rt(() => {
      if (a) {
        Tn({});
        var g = (
          /** @type {ComponentContext} */
          X
        );
        g.c = a;
      }
      i && (l.$$events = i), P && Ee(
        /** @type {TemplateNode} */
        h,
        null
      ), c = e(h, l) || {}, P && (y.nodes_end = V), a && Vn();
    }), () => {
      var p;
      for (var g of d) {
        t.removeEventListener(g, st);
        var m = (
          /** @type {number} */
          Oe.get(g)
        );
        --m === 0 ? (document.removeEventListener(g, st), Oe.delete(g)) : Oe.set(g, m);
      }
      Bt.delete(u), Ht.delete(c), h !== r && ((p = h.parentNode) == null || p.removeChild(h));
    };
  });
  return Ht.set(c, f), c;
}
let Ht = /* @__PURE__ */ new WeakMap();
function wl(e) {
  const t = Ht.get(e);
  t && t();
}
function pe(e, t, r = !1) {
  P && He();
  var l = e, i = null, a = null, o = j, d = r ? Kt : 0, u = !1;
  const c = (h, g = !0) => {
    u = !0, f(g, h);
  }, f = (h, g) => {
    if (o === (o = h)) return;
    let m = !1;
    if (P) {
      const p = (
        /** @type {Comment} */
        l.data === Kr
      );
      !!o === p && (l = Ui(), ke(l), Ze(!1), m = !0);
    }
    o ? (i ? Or(i) : g && (i = Rt(() => g(l))), a && Fr(a, () => {
      a = null;
    })) : (a ? Or(a) : g && (a = Rt(() => g(l))), i && Fr(i, () => {
      i = null;
    })), m && Ze(!0);
  };
  tr(() => {
    u = !1, t(c), u || f(null, null);
  }, d), P && (l = V);
}
function Xe(e, t, r, l, i) {
  var a = e, o = "", d;
  tr(() => {
    if (o === (o = t() ?? "")) {
      P && He();
      return;
    }
    d !== void 0 && (Te(d), d = void 0), o !== "" && (d = Rt(() => {
      if (P) {
        V.data;
        for (var u = He(), c = u; u !== null && (u.nodeType !== 8 || /** @type {Comment} */
        u.data !== ""); )
          c = u, u = /** @type {TemplateNode} */
          /* @__PURE__ */ Re(u);
        if (u === null)
          throw St(), Ue;
        Ee(V, c), a = ke(u);
        return;
      }
      var f = o + "", h = Dn(f);
      Ee(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Le(h),
        /** @type {TemplateNode} */
        h.lastChild
      ), a.before(h);
    }));
  });
}
function El(e, t, r, l, i) {
  var d;
  P && He();
  var a = (d = t.$$slots) == null ? void 0 : d[r], o = !1;
  a === !0 && (a = t.children, o = !0), a === void 0 || a(e, o ? () => l : l);
}
function xl(e, t) {
  rr(() => {
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
function Ur(e) {
  if (P) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var l = e.value;
          ne(e, "value", null), e.value = l;
        }
        if (e.hasAttribute("checked")) {
          var i = e.checked;
          ne(e, "checked", null), e.checked = i;
        }
      }
    };
    e.__on_r = r, el(r), Pn();
  }
}
function kl(e, t) {
  var r = e.__attributes ?? (e.__attributes = {});
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when its `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t);
}
function ne(e, t, r, l) {
  var i = e.__attributes ?? (e.__attributes = {});
  P && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || i[t] !== (i[t] = r) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[Li] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Cl(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
var Mr = /* @__PURE__ */ new Map();
function Cl(e) {
  var t = Mr.get(e.nodeName);
  if (t) return t;
  Mr.set(e.nodeName, t = []);
  for (var r, l = Xt(e), i = Element.prototype; i !== l; ) {
    r = Ri(l);
    for (var a in r)
      r[a].set && t.push(a);
    l = Xt(l);
  }
  return t;
}
function Rl(e, t, r) {
  if (r) {
    if (e.classList.contains(t)) return;
    e.classList.add(t);
  } else {
    if (!e.classList.contains(t)) return;
    e.classList.remove(t);
  }
}
function Il(e, t, r = t) {
  vl(e, "change", (l) => {
    var i = l ? e.defaultChecked : e.checked;
    r(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (P && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  Je(t) == null) && r(e.checked), er(() => {
    var l = t();
    e.checked = !!l;
  });
}
function jr(e, t) {
  return e === t || (e == null ? void 0 : e[ut]) === t;
}
function Br(e = {}, t, r, l) {
  return Qt(() => {
    var i, a;
    return er(() => {
      i = a, a = [], Je(() => {
        e !== r(...a) && (t(e, ...a), i && jr(r(...i), e) && t(null, ...i));
      });
    }), () => {
      rr(() => {
        a && jr(r(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function On(e) {
  X === null && Cn(), Ut(() => {
    const t = Je(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function $l(e) {
  X === null && Cn(), On(() => () => Je(e));
}
let yt = !1;
function Sl(e) {
  var t = yt;
  try {
    return yt = !1, [e(), yt];
  } finally {
    yt = t;
  }
}
function Nl(e) {
  for (var t = y, r = y; t !== null && !(t.f & (ae | ht)); )
    t = t.parent;
  try {
    return de(t), e();
  } finally {
    de(r);
  }
}
function N(e, t, r, l) {
  var me;
  var i = (r & yi) !== 0, a = !sn, o = (r & wi) !== 0, d = (r & Ei) !== 0, u = !1, c;
  o ? [c, u] = Sl(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var f = ut in e || ln in e, h = ((me = Ne(e, t)) == null ? void 0 : me.set) ?? (f && o && t in e ? (I) => e[t] = I : void 0), g = (
    /** @type {V} */
    l
  ), m = !0, p = !1, L = () => (p = !0, m && (m = !1, d ? g = Je(
    /** @type {() => V} */
    l
  ) : g = /** @type {V} */
  l), g);
  c === void 0 && l !== void 0 && (h && a && Di(), c = L(), h && h(c));
  var G;
  if (G = () => {
    var I = (
      /** @type {V} */
      e[t]
    );
    return I === void 0 ? L() : (m = !0, p = !1, I);
  }, !(r & pi))
    return G;
  if (h) {
    var Q = e.$$legacy;
    return function(I, W) {
      return arguments.length > 0 ? ((!W || Q || u) && h(W ? G() : I), I) : G();
    };
  }
  var D = !1, Z = !1, he = /* @__PURE__ */ un(c), F = Nl(
    () => /* @__PURE__ */ ot(() => {
      var I = G(), W = v(he);
      return D ? (D = !1, Z = !0, W) : (Z = !1, he.v = I);
    })
  );
  return i || (F.equals = on), function(I, W) {
    if (arguments.length > 0) {
      const se = W ? v(F) : o ? ie(I) : I;
      return F.equals(se) || (D = !0, T(he, se), p && g !== void 0 && (g = se), Je(() => v(F))), I;
    }
    return v(F);
  };
}
function Ll(e) {
  return new Al(e);
}
var _e, te;
class Al {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    Yt(this, _e);
    /** @type {Record<string, any>} */
    Yt(this, te);
    var a;
    var r = /* @__PURE__ */ new Map(), l = (o, d) => {
      var u = /* @__PURE__ */ un(d);
      return r.set(o, u), u;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(o, d) {
          return v(r.get(d) ?? l(d, Reflect.get(o, d)));
        },
        has(o, d) {
          return d === ln ? !0 : (v(r.get(d) ?? l(d, Reflect.get(o, d))), Reflect.has(o, d));
        },
        set(o, d, u) {
          return T(r.get(d) ?? l(d, u), u), Reflect.set(o, d, u);
        }
      }
    );
    Ft(this, te, (t.hydrate ? pl : Yn)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((a = t == null ? void 0 : t.props) != null && a.$$host) || t.sync === !1) && k(), Ft(this, _e, i.$$events);
    for (const o of Object.keys(M(this, te)))
      o === "$set" || o === "$destroy" || o === "$on" || kt(this, o, {
        get() {
          return M(this, te)[o];
        },
        /** @param {any} value */
        set(d) {
          M(this, te)[o] = d;
        },
        enumerable: !0
      });
    M(this, te).$set = /** @param {Record<string, any>} next */
    (o) => {
      Object.assign(i, o);
    }, M(this, te).$destroy = () => {
      wl(M(this, te));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    M(this, te).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    M(this, _e)[t] = M(this, _e)[t] || [];
    const l = (...i) => r.call(this, ...i);
    return M(this, _e)[t].push(l), () => {
      M(this, _e)[t] = M(this, _e)[t].filter(
        /** @param {any} fn */
        (i) => i !== l
      );
    };
  }
  $destroy() {
    M(this, te).$destroy();
  }
}
_e = new WeakMap(), te = new WeakMap();
let Xn;
typeof HTMLElement == "function" && (Xn = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, l) {
    super();
    /** The Svelte component constructor */
    re(this, "$$ctor");
    /** Slots */
    re(this, "$$s");
    /** @type {any} The Svelte component instance */
    re(this, "$$c");
    /** Whether or not the custom element is connected */
    re(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    re(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    re(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    re(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    re(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    re(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    re(this, "$$me");
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
          i !== "default" && (o.name = i), K(a, o);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, l = Tl(this);
      for (const i of this.$$s)
        i in l && (i === "default" && !this.$$d.children ? (this.$$d.children = t(i), r.default = !0) : r[i] = t(i));
      for (const i of this.attributes) {
        const a = this.$$g_p(i.name);
        a in this.$$d || (this.$$d[a] = Et(a, i.value, this.$$p_d, "toProp"));
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
      }), this.$$me = _n(() => {
        er(() => {
          var i;
          this.$$r = !0;
          for (const a of xt(this.$$c)) {
            if (!((i = this.$$p_d[a]) != null && i.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const o = Et(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Et(t, l, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
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
function Et(e, t, r, l) {
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
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function Tl(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function Vl(e, t, r, l, i, a) {
  let o = class extends Xn {
    constructor() {
      super(e, r, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return xt(t).map(
        (d) => (t[d].attribute || d).toLowerCase()
      );
    }
  };
  return xt(t).forEach((d) => {
    kt(o.prototype, d, {
      get() {
        return this.$$c && d in this.$$c ? this.$$c[d] : this.$$d[d];
      },
      set(u) {
        var h;
        u = Et(d, u, t), this.$$d[d] = u;
        var c = this.$$c;
        if (c) {
          var f = (h = Ne(c, d)) == null ? void 0 : h.get;
          f ? c[d] = u : c.$set({ [d]: u });
        }
      }
    });
  }), l.forEach((d) => {
    kt(o.prototype, d, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[d];
      }
    });
  }), e.element = /** @type {any} */
  o, o;
}
const Zn = new TextEncoder();
function Pl(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function zl(e, t = "SHA-256", r = 1e5) {
  const l = Date.now().toString(16);
  e || (e = Math.round(Math.random() * r));
  const i = await Wn(l, e, t);
  return {
    algorithm: t,
    challenge: i,
    salt: l,
    signature: ""
  };
}
async function Wn(e, t, r) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return Pl(
    await crypto.subtle.digest(
      r.toUpperCase(),
      Zn.encode(e + t)
    )
  );
}
function Gl(e, t, r = "SHA-256", l = 1e6, i = 0) {
  const a = new AbortController(), o = Date.now();
  return {
    promise: (async () => {
      for (let u = i; u <= l; u += 1) {
        if (a.signal.aborted)
          return null;
        if (await Wn(t, u, r) === e)
          return {
            number: u,
            took: Date.now() - o
          };
      }
      return null;
    })(),
    controller: a
  };
}
function Dl() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function Yl(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let l = 0; l < t.length; l++)
    r[l] = t.charCodeAt(l);
  return r;
}
function Fl(e, t = 12) {
  const r = new Uint8Array(t);
  for (let l = 0; l < t; l++)
    r[l] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function Ol(e, t = "", r = 1e6, l = 0) {
  const i = "AES-GCM", a = new AbortController(), o = Date.now(), d = async () => {
    for (let f = l; f <= r; f += 1) {
      if (a.signal.aborted || !u || !c)
        return null;
      try {
        const h = await crypto.subtle.decrypt(
          {
            name: i,
            iv: Fl(f)
          },
          u,
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
  let u = null, c = null;
  try {
    c = Yl(e);
    const f = await crypto.subtle.digest(
      "SHA-256",
      Zn.encode(t)
    );
    u = await crypto.subtle.importKey(
      "raw",
      f,
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
    promise: d(),
    controller: a
  };
}
var x = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(x || {}), Xl = /* @__PURE__ */ oe('<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="svelte-ddsc3z"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25" class="svelte-ddsc3z"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor" class="altcha-spinner svelte-ddsc3z"></path></svg>'), Zl = /* @__PURE__ */ oe('<span role="status" aria-live="polite" class="svelte-ddsc3z"><!></span> <input type="hidden" class="svelte-ddsc3z">', 1), Wl = /* @__PURE__ */ oe('<span role="status" aria-live="polite" class="svelte-ddsc3z"><!></span>'), Ul = /* @__PURE__ */ oe('<label class="svelte-ddsc3z"><!></label>'), Ml = /* @__PURE__ */ oe('<div class="svelte-ddsc3z"><a target="_blank" class="altcha-logo svelte-ddsc3z"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-ddsc3z"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor" class="svelte-ddsc3z"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor" class="svelte-ddsc3z"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor" class="svelte-ddsc3z"></path></svg></a></div>'), jl = /* @__PURE__ */ oe('<div class="svelte-ddsc3z"><!></div>'), Bl = /* @__PURE__ */ oe('<div class="svelte-ddsc3z"><!></div>'), Hl = /* @__PURE__ */ oe('<div class="altcha-error svelte-ddsc3z"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="svelte-ddsc3z"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" class="svelte-ddsc3z"></path></svg> <!></div>'), Jl = /* @__PURE__ */ oe('<div class="altcha-footer svelte-ddsc3z"><div class="svelte-ddsc3z"><!></div></div>'), Kl = /* @__PURE__ */ oe('<div class="altcha-anchor-arrow svelte-ddsc3z"></div>'), ql = /* @__PURE__ */ oe('<!> <div class="altcha svelte-ddsc3z"><div class="altcha-main svelte-ddsc3z"><!> <div class="altcha-checkbox svelte-ddsc3z"><input type="checkbox" class="svelte-ddsc3z"></div> <div class="altcha-label svelte-ddsc3z"><!></div> <!></div> <!> <!> <!></div>', 1);
const Ql = {
  hash: "svelte-ddsc3z",
  code: `.altcha.svelte-ddsc3z {background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);position:relative;text-align:left;}.altcha.svelte-ddsc3z:focus-within {border-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating].svelte-ddsc3z {background:var(--altcha-color-base, white);display:none;filter:drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2));left:-100%;position:fixed;top:-100%;width:var(--altcha-max-width, 260px);z-index:999999;}.altcha[data-floating=top].svelte-ddsc3z .altcha-anchor-arrow:where(.svelte-ddsc3z) {border-bottom-color:transparent;border-top-color:var(--altcha-color-border, #a0a0a0);bottom:-12px;top:auto;}.altcha[data-floating=bottom].svelte-ddsc3z:focus-within::after {border-bottom-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating=top].svelte-ddsc3z:focus-within::after {border-top-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating].svelte-ddsc3z:not([data-state=unverified]) {display:block;}.altcha-anchor-arrow.svelte-ddsc3z {border:6px solid transparent;border-bottom-color:var(--altcha-color-border, #a0a0a0);content:"";height:0;left:12px;position:absolute;top:-12px;width:0;}.altcha-main.svelte-ddsc3z {align-items:center;display:flex;gap:0.4rem;padding:0.7rem;}.altcha-label.svelte-ddsc3z {flex-grow:1;}.altcha-label.svelte-ddsc3z label:where(.svelte-ddsc3z) {cursor:pointer;}.altcha-logo.svelte-ddsc3z {color:currentColor;opacity:0.3;}.altcha-logo.svelte-ddsc3z:hover {opacity:1;}.altcha-error.svelte-ddsc3z {color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem;}.altcha-footer.svelte-ddsc3z {align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.4;padding:0.2rem 0.7rem;text-align:right;}.altcha-footer.svelte-ddsc3z:hover {opacity:1;}.altcha-footer.svelte-ddsc3z > :where(.svelte-ddsc3z):first-child {flex-grow:1;}.altcha-footer.svelte-ddsc3z a {color:currentColor;}.altcha-checkbox.svelte-ddsc3z {display:flex;align-items:center;height:24px;width:24px;}.altcha-checkbox.svelte-ddsc3z input:where(.svelte-ddsc3z) {width:18px;height:18px;margin:0;}.altcha-hidden.svelte-ddsc3z {display:none;}.altcha-spinner.svelte-ddsc3z {
  animation: svelte-ddsc3z-altcha-spinner 0.75s infinite linear;transform-origin:center;}

@keyframes svelte-ddsc3z-altcha-spinner {
  100% {
    transform: rotate(360deg);
  }
}`
};
function ea(e, t) {
  var Ar, Tr;
  Tn(t, !0), xl(e, Ql);
  let r = N(t, "auto", 7, void 0), l = N(t, "blockspam", 7, void 0), i = N(t, "challengeurl", 7, void 0), a = N(t, "challengejson", 7, void 0), o = N(t, "customfetch", 7, void 0), d = N(t, "debug", 7, !1), u = N(t, "delay", 7, 0), c = N(t, "expire", 7, void 0), f = N(t, "floating", 7, void 0), h = N(t, "floatinganchor", 7, void 0), g = N(t, "floatingoffset", 7, void 0), m = N(t, "hidefooter", 7, !1), p = N(t, "hidelogo", 7, !1), L = N(t, "name", 7, "altcha"), G = N(t, "maxnumber", 7, 1e6), Q = N(t, "mockerror", 7, !1), D = N(t, "obfuscated", 7, void 0), Z = N(t, "plugins", 7, void 0), he = N(t, "refetchonexpire", 7, !0), F = N(t, "spamfilter", 7, !1), me = N(t, "strings", 7, void 0), I = N(t, "test", 7, !1), W = N(t, "verifyurl", 7, void 0), se = N(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), Qe = N(t, "workerurl", 7, void 0);
  const ir = ["SHA-256", "SHA-384", "SHA-512"], lr = "Visit Altcha.org", ar = "https://altcha.org/", et = (n, s) => {
    t.$$host.dispatchEvent(new CustomEvent(n, { detail: s }));
  }, or = (Tr = (Ar = document.documentElement.lang) == null ? void 0 : Ar.split("-")) == null ? void 0 : Tr[0], Vt = /* @__PURE__ */ ot(() => {
    var n;
    return i() && new URL(i(), location.origin).host.endsWith(".altcha.org") && !!((n = i()) != null && n.includes("apiKey=ckey_"));
  }), Pt = /* @__PURE__ */ ot(() => a() ? br(a()) : void 0), sr = /* @__PURE__ */ ot(() => me() ? br(me()) : {}), ee = /* @__PURE__ */ ot(() => {
    var n;
    return {
      ariaLinkLabel: lr,
      error: "Verification failed. Try again later.",
      expired: "Verification expired. Try again.",
      footer: `Protected by <a href="${ar}" target="_blank" aria-label="${((n = v(sr)) == null ? void 0 : n.ariaLinkLabel) || lr}">ALTCHA</a>`,
      label: "I'm not a robot",
      verified: "Verified",
      verifying: "Verifying...",
      waitAlert: "Verifying... please wait.",
      ...v(sr)
    };
  });
  let Ve = Ye(!1), $ = Ye(ie(x.UNVERIFIED)), U = Ye(void 0), tt = Ye(null), Pe = null, w = null, ze = Ye(null), ue = null, be = [], Ie = Ye(null);
  Ut(() => {
    qn(v(ze));
  }), Ut(() => {
    Qn(v($));
  }), $l(() => {
    Un(), w && (w.removeEventListener("submit", hr), w.removeEventListener("reset", gr), w.removeEventListener("focusin", vr), w = null), ue && (clearTimeout(ue), ue = null), document.removeEventListener("click", cr), document.removeEventListener("scroll", dr), window.removeEventListener("resize", mr);
  }), On(() => {
    var n;
    S("mounted", "1.1.1"), S("workers", se()), Jn(), S("plugins", be.length ? be.map((s) => s.constructor.pluginName).join(", ") : "none"), I() && S("using test mode"), c() && zt(c()), r() !== void 0 && S("auto", r()), f() !== void 0 && yr(f()), w = (n = v(U)) == null ? void 0 : n.closest("form"), w && (w.addEventListener("submit", hr, { capture: !0 }), w.addEventListener("reset", gr), r() === "onfocus" && w.addEventListener("focusin", vr)), r() === "onload" && (D() ? rt() : ye()), v(Vt) && (m() || p()) && S("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      et("load");
    });
  });
  function ur(n, s) {
    return btoa(JSON.stringify({
      algorithm: n.algorithm,
      challenge: n.challenge,
      number: s.number,
      salt: n.salt,
      signature: n.signature,
      test: I() ? !0 : void 0,
      took: s.took
    }));
  }
  function Un() {
    for (const n of be)
      n.destroy();
  }
  function fr() {
    i() && he() && v($) === x.VERIFIED ? ye() : nt(x.EXPIRED, v(ee).expired);
  }
  async function Mn() {
    var n;
    if (Q())
      throw S("mocking error"), new Error("Mocked error.");
    if (v(Pt))
      return S("using provided json data"), v(Pt);
    if (I())
      return S("generating test challenge", { test: I() }), zl(typeof I() != "boolean" ? +I() : void 0);
    {
      if (!i() && w) {
        const A = w.getAttribute("action");
        A != null && A.includes("/form/") && i(A + "/altcha");
      }
      if (!i())
        throw new Error("Attribute challengeurl not set.");
      S("fetching challenge from", i());
      let s = null, _ = null;
      if (o())
        if (S("using customfetch"), typeof o() == "string") {
          if (s = globalThis[o()] || null, !s)
            throw new Error(`Custom fetch function not found: ${o()}`);
        } else
          s = o();
      const E = {
        headers: F() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      };
      if (s) {
        if (_ = await s(i(), E), !_ || !(_ instanceof Response))
          throw new Error("Custom fetch function did not return a response.");
      } else
        _ = await fetch(i(), E);
      if (_.status !== 200)
        throw new Error(`Server responded with ${_.status}.`);
      const z = _.headers.get("X-Altcha-Config"), C = await _.json(), b = new URLSearchParams((n = C.salt.split("?")) == null ? void 0 : n[1]), Y = b.get("expires") || b.get("expire");
      if (Y) {
        const A = new Date(+Y * 1e3), De = isNaN(A.getTime()) ? 0 : A.getTime() - Date.now();
        De > 0 && zt(De);
      }
      if (z)
        try {
          const A = JSON.parse(z);
          A && typeof A == "object" && (A.verifyurl && (A.verifyurl = new URL(A.verifyurl, new URL(i())).toString()), Er(A));
        } catch (A) {
          S("unable to configure from X-Altcha-Config", A);
        }
      return C;
    }
  }
  function jn(n) {
    var _;
    const s = w == null ? void 0 : w.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((_ = s == null ? void 0 : s.value) == null ? void 0 : _.slice(s.value.indexOf("@"))) || void 0;
  }
  function Bn() {
    return F() === "ipAddress" ? {
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
    } : typeof F() == "object" ? F() : {
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
  function Hn(n) {
    return [
      ...(w == null ? void 0 : w.querySelectorAll(n != null && n.length ? n.map((_) => `input[name="${_}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (_, E) => {
        const z = E.name, C = E.value;
        return z && C && (_[z] = /\n/.test(C) ? C.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : C), _;
      },
      {}
    );
  }
  function Jn() {
    const n = Z() !== void 0 ? Z().split(",") : void 0;
    for (const s of globalThis.altchaPlugins)
      (!n || n.includes(s.pluginName)) && be.push(new s({
        el: v(U),
        clarify: rt,
        dispatch: et,
        getConfiguration: xr,
        getFloatingAnchor: kr,
        getState: Cr,
        log: S,
        reset: nt,
        solve: wr,
        setState: $e,
        setFloatingAnchor: Rr,
        verify: ye
      }));
  }
  function S(...n) {
    (d() || n.some((s) => s instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${L()}]`, ...n);
  }
  function Kn() {
    [x.UNVERIFIED, x.ERROR, x.EXPIRED].includes(v($)) ? F() !== !1 && (w == null ? void 0 : w.reportValidity()) === !1 ? T(Ve, !1) : D() ? rt() : ye() : T(Ve, !0);
  }
  function cr(n) {
    const s = n.target;
    f() && s && !v(U).contains(s) && (v($) === x.VERIFIED || r() === "off" && v($) === x.UNVERIFIED) && (v(U).style.display = "none");
  }
  function dr() {
    f() && v($) !== x.UNVERIFIED && mt();
  }
  function qn(n) {
    for (const s of be)
      typeof s.onErrorChange == "function" && s.onErrorChange(v(ze));
  }
  function vr(n) {
    v($) === x.UNVERIFIED && ye();
  }
  function hr(n) {
    w && r() === "onsubmit" ? v($) === x.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), ye().then(() => {
      w == null || w.requestSubmit();
    })) : v($) !== x.VERIFIED && (n.preventDefault(), n.stopPropagation(), v($) === x.VERIFYING && _r()) : w && f() && r() === "off" && v($) === x.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), v(U).style.display = "block", mt());
  }
  function gr() {
    nt();
  }
  function _r() {
    v($) === x.VERIFYING && v(ee).waitAlert && alert(v(ee).waitAlert);
  }
  function Qn(n) {
    for (const s of be)
      typeof s.onStateChange == "function" && s.onStateChange(v($));
    f() && v($) !== x.UNVERIFIED && requestAnimationFrame(() => {
      mt();
    }), T(Ve, v($) === x.VERIFIED);
  }
  function mr() {
    f() && mt();
  }
  function br(n) {
    return JSON.parse(n);
  }
  function mt(n = 20) {
    if (v(U))
      if (Pe || (Pe = (h() ? document.querySelector(h()) : w == null ? void 0 : w.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || w), Pe) {
        const s = parseInt(g(), 10) || 12, _ = Pe.getBoundingClientRect(), E = v(U).getBoundingClientRect(), z = document.documentElement.clientHeight, C = document.documentElement.clientWidth, b = f() === "auto" ? _.bottom + E.height + s + n > z : f() === "top", Y = Math.max(n, Math.min(C - n - E.width, _.left + _.width / 2 - E.width / 2));
        if (b ? v(U).style.top = `${_.top - (E.height + s)}px` : v(U).style.top = `${_.bottom + s}px`, v(U).style.left = `${Y}px`, v(U).setAttribute("data-floating", b ? "top" : "bottom"), v(tt)) {
          const A = v(tt).getBoundingClientRect();
          v(tt).style.left = _.left - Y + _.width / 2 - A.width / 2 + "px";
        }
      } else
        S("unable to find floating anchor element");
  }
  async function ei(n) {
    if (!W())
      throw new Error("Attribute verifyurl not set.");
    S("requesting server verification from", W());
    const s = { payload: n };
    if (F() !== !1) {
      const {
        blockedCountries: z,
        classifier: C,
        disableRules: b,
        email: Y,
        expectedLanguages: A,
        expectedCountries: De,
        fields: lt,
        ipAddress: at,
        text: vi,
        timeZone: Vr
      } = Bn();
      s.blockedCountries = z, s.classifier = C, s.disableRules = b, s.email = Y === !1 ? void 0 : jn(Y), s.expectedCountries = De, s.expectedLanguages = A || (or ? [or] : void 0), s.fields = lt === !1 ? void 0 : Hn(lt), s.ipAddress = at === !1 ? void 0 : at || "auto", s.text = vi, s.timeZone = Vr === !1 ? void 0 : Vr || Dl();
    }
    const _ = await fetch(W(), {
      body: JSON.stringify(s),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (_.status !== 200)
      throw new Error(`Server responded with ${_.status}.`);
    const E = await _.json();
    if (E != null && E.payload && T(Ie, ie(E.payload)), et("serververification", E), l() && E.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  function zt(n) {
    S("expire", n), ue && (clearTimeout(ue), ue = null), n < 1 ? fr() : ue = setTimeout(fr, n);
  }
  function yr(n) {
    S("floating", n), f() !== n && (v(U).style.left = "", v(U).style.top = ""), f(n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : f()), f() ? (r() || r("onsubmit"), document.addEventListener("scroll", dr), document.addEventListener("click", cr), window.addEventListener("resize", mr)) : r() === "onsubmit" && r(void 0);
  }
  function pr(n) {
    if (!n.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (n.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!ir.includes(n.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${ir.join(", ")}`);
    if (!n.challenge || n.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!n.salt || n.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function wr(n) {
    let s = null;
    if ("Worker" in window) {
      try {
        s = await ti(n, n.maxnumber);
      } catch (_) {
        S(_);
      }
      if ((s == null ? void 0 : s.number) !== void 0 || "obfuscated" in n)
        return { data: n, solution: s };
    }
    if ("obfuscated" in n) {
      const _ = await Ol(n.obfuscated, n.key, n.maxnumber);
      return { data: n, solution: await _.promise };
    }
    return {
      data: n,
      solution: await Gl(n.challenge, n.salt, n.algorithm, n.maxnumber || G()).promise
    };
  }
  async function ti(n, s = typeof I() == "number" ? I() : G(), _ = Math.ceil(se())) {
    const E = [];
    _ = Math.min(16, Math.max(1, _));
    for (let b = 0; b < _; b++)
      E.push(altchaCreateWorker(Qe()));
    const z = Math.ceil(s / _), C = await Promise.all(E.map((b, Y) => {
      const A = Y * z;
      return new Promise((De) => {
        b.addEventListener("message", (lt) => {
          if (lt.data)
            for (const at of E)
              at !== b && at.postMessage({ type: "abort" });
          De(lt.data);
        }), b.postMessage({
          payload: n,
          max: A + z,
          start: A,
          type: "work"
        });
      });
    }));
    for (const b of E)
      b.terminate();
    return C.find((b) => !!b) || null;
  }
  async function rt() {
    if (!D()) {
      $e(x.ERROR);
      return;
    }
    const n = be.find((s) => s.constructor.pluginName === "obfuscation");
    if (!n || !("clarify" in n)) {
      $e(x.ERROR), S("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in n && typeof n.clarify == "function")
      return n.clarify();
  }
  function Er(n) {
    n.obfuscated !== void 0 && D(n.obfuscated), n.auto !== void 0 && (r(n.auto), r() === "onload" && (D() ? rt() : ye())), n.blockspam !== void 0 && l(!!n.blockspam), n.customfetch !== void 0 && o(n.customfetch), n.floatinganchor !== void 0 && h(n.floatinganchor), n.delay !== void 0 && u(n.delay), n.floatingoffset !== void 0 && g(n.floatingoffset), n.floating !== void 0 && yr(n.floating), n.expire !== void 0 && (zt(n.expire), c(n.expire)), n.challenge && (a(typeof n.challenge == "string" ? n.challenge : JSON.stringify(n.challenge)), pr(v(Pt))), n.challengeurl !== void 0 && i(n.challengeurl), n.debug !== void 0 && d(!!n.debug), n.hidefooter !== void 0 && m(!!n.hidefooter), n.hidelogo !== void 0 && p(!!n.hidelogo), n.maxnumber !== void 0 && G(+n.maxnumber), n.mockerror !== void 0 && Q(!!n.mockerror), n.name !== void 0 && L(n.name), n.refetchonexpire !== void 0 && he(!!n.refetchonexpire), n.spamfilter !== void 0 && F(typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && me(typeof n.strings == "string" ? n.strings : JSON.stringify(n.strings)), n.test !== void 0 && I(typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && W(n.verifyurl), n.workers !== void 0 && se(+n.workers), n.workerurl !== void 0 && Qe(n.workerurl);
  }
  function xr() {
    return {
      auto: r(),
      blockspam: l(),
      challengeurl: i(),
      debug: d(),
      delay: u(),
      expire: c(),
      floating: f(),
      floatinganchor: h(),
      floatingoffset: g(),
      hidefooter: m(),
      hidelogo: p(),
      name: L(),
      maxnumber: G(),
      mockerror: Q(),
      obfuscated: D(),
      refetchonexpire: he(),
      spamfilter: F(),
      strings: v(ee),
      test: I(),
      verifyurl: W(),
      workers: se(),
      workerurl: Qe()
    };
  }
  function kr() {
    return Pe;
  }
  function ri(n) {
    return be.find((s) => s.constructor.pluginName === n);
  }
  function Cr() {
    return v($);
  }
  function nt(n = x.UNVERIFIED, s = null) {
    ue && (clearTimeout(ue), ue = null), T(Ve, !1), T(Ie, null), $e(n, s);
  }
  function Rr(n) {
    Pe = n;
  }
  function $e(n, s = null) {
    T($, ie(n)), T(ze, ie(s)), et("statechange", {
      payload: v(Ie),
      state: v($)
    });
  }
  async function ye() {
    return nt(x.VERIFYING), await new Promise((n) => setTimeout(n, u() || 0)), Mn().then((n) => (pr(n), S("challenge", n), wr(n))).then(({ data: n, solution: s }) => {
      if (S("solution", s), "challenge" in n && s && !("clearText" in s))
        if ((s == null ? void 0 : s.number) !== void 0) {
          if (W())
            return ei(ur(n, s));
          T(Ie, ie(ur(n, s))), S("payload", v(Ie));
        } else
          throw S("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      $e(x.VERIFIED), S("verified"), cl().then(() => {
        et("verified", { payload: v(Ie) });
      });
    }).catch((n) => {
      S(n), $e(x.ERROR, n.message);
    });
  }
  var Ir = ql(), $r = Ot(Ir);
  El($r, t, "default", {});
  var it = ge($r, 2), Gt = J(it), Sr = J(Gt);
  {
    var ni = (n) => {
      var s = Xl();
      K(n, s);
    };
    pe(Sr, (n) => {
      v($) === x.VERIFYING && n(ni);
    });
  }
  var bt = ge(Sr, 2), Ge = J(bt);
  Ur(Ge), Ge.__change = Kn, H(bt);
  var Dt = ge(bt, 2), ii = J(Dt);
  {
    var li = (n) => {
      var s = Zl(), _ = Ot(s), E = J(_);
      Xe(E, () => v(ee).verified), H(_);
      var z = ge(_, 2);
      Ur(z), Fe(() => {
        ne(z, "name", L()), kl(z, v(Ie));
      }), K(n, s);
    }, ai = (n) => {
      var s = ml(), _ = Ot(s);
      {
        var E = (C) => {
          var b = Wl(), Y = J(b);
          Xe(Y, () => v(ee).verifying), H(b), K(C, b);
        }, z = (C) => {
          var b = Ul(), Y = J(b);
          Xe(Y, () => v(ee).label), H(b), Fe(() => ne(b, "for", `${L() ?? ""}_checkbox`)), K(C, b);
        };
        pe(
          _,
          (C) => {
            v($) === x.VERIFYING ? C(E) : C(z, !1);
          },
          !0
        );
      }
      K(n, s);
    };
    pe(ii, (n) => {
      v($) === x.VERIFIED ? n(li) : n(ai, !1);
    });
  }
  H(Dt);
  var oi = ge(Dt, 2);
  {
    var si = (n) => {
      var s = Ml(), _ = J(s);
      ne(_, "href", ar), H(s), Fe(() => ne(_, "aria-label", v(ee).ariaLinkLabel)), K(n, s);
    };
    pe(oi, (n) => {
      (p() !== !0 || v(Vt)) && n(si);
    });
  }
  H(Gt);
  var Nr = ge(Gt, 2);
  {
    var ui = (n) => {
      var s = Hl(), _ = ge(J(s), 2);
      {
        var E = (C) => {
          var b = jl(), Y = J(b);
          Xe(Y, () => v(ee).expired), H(b), Fe(() => ne(b, "title", v(ze))), K(C, b);
        }, z = (C) => {
          var b = Bl(), Y = J(b);
          Xe(Y, () => v(ee).error), H(b), Fe(() => ne(b, "title", v(ze))), K(C, b);
        };
        pe(_, (C) => {
          v($) === x.EXPIRED ? C(E) : C(z, !1);
        });
      }
      H(s), K(n, s);
    };
    pe(Nr, (n) => {
      (v(ze) || v($) === x.EXPIRED) && n(ui);
    });
  }
  var Lr = ge(Nr, 2);
  {
    var fi = (n) => {
      var s = Jl(), _ = J(s), E = J(_);
      Xe(E, () => v(ee).footer), H(_), H(s), K(n, s);
    };
    pe(Lr, (n) => {
      v(ee).footer && (m() !== !0 || v(Vt)) && n(fi);
    });
  }
  var ci = ge(Lr, 2);
  {
    var di = (n) => {
      var s = Kl();
      Br(s, (_) => T(tt, _), () => v(tt)), K(n, s);
    };
    pe(ci, (n) => {
      f() && n(di);
    });
  }
  return H(it), Br(it, (n) => T(U, n), () => v(U)), Fe(() => {
    ne(it, "data-state", v($)), ne(it, "data-floating", f()), Rl(bt, "altcha-hidden", v($) === x.VERIFYING), ne(Ge, "id", `${L() ?? ""}_checkbox`), Ge.required = r() !== "onsubmit" && (!f() || r() !== "off");
  }), gl("invalid", Ge, _r), Il(Ge, () => v(Ve), (n) => T(Ve, n)), K(e, Ir), Vn({
    clarify: rt,
    configure: Er,
    getConfiguration: xr,
    getFloatingAnchor: kr,
    getPlugin: ri,
    getState: Cr,
    reset: nt,
    setFloatingAnchor: Rr,
    setState: $e,
    verify: ye,
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
      return d();
    },
    set debug(n = !1) {
      d(n), k();
    },
    get delay() {
      return u();
    },
    set delay(n = 0) {
      u(n), k();
    },
    get expire() {
      return c();
    },
    set expire(n = void 0) {
      c(n), k();
    },
    get floating() {
      return f();
    },
    set floating(n = void 0) {
      f(n), k();
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
    get hidefooter() {
      return m();
    },
    set hidefooter(n = !1) {
      m(n), k();
    },
    get hidelogo() {
      return p();
    },
    set hidelogo(n = !1) {
      p(n), k();
    },
    get name() {
      return L();
    },
    set name(n = "altcha") {
      L(n), k();
    },
    get maxnumber() {
      return G();
    },
    set maxnumber(n = 1e6) {
      G(n), k();
    },
    get mockerror() {
      return Q();
    },
    set mockerror(n = !1) {
      Q(n), k();
    },
    get obfuscated() {
      return D();
    },
    set obfuscated(n = void 0) {
      D(n), k();
    },
    get plugins() {
      return Z();
    },
    set plugins(n = void 0) {
      Z(n), k();
    },
    get refetchonexpire() {
      return he();
    },
    set refetchonexpire(n = !0) {
      he(n), k();
    },
    get spamfilter() {
      return F();
    },
    set spamfilter(n = !1) {
      F(n), k();
    },
    get strings() {
      return me();
    },
    set strings(n = void 0) {
      me(n), k();
    },
    get test() {
      return I();
    },
    set test(n = !1) {
      I(n), k();
    },
    get verifyurl() {
      return W();
    },
    set verifyurl(n = void 0) {
      W(n), k();
    },
    get workers() {
      return se();
    },
    set workers(n = Math.min(16, navigator.hardwareConcurrency || 8)) {
      se(n), k();
    },
    get workerurl() {
      return Qe();
    },
    set workerurl(n = void 0) {
      Qe(n), k();
    }
  });
}
_l(["change"]);
customElements.define("altcha-widget", Vl(
  ea,
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
globalThis.altchaCreateWorker = (e) => e ? new Worker(new URL(e)) : new mi();
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
export {
  ea as Altcha
};
