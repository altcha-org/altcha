var _i = Object.defineProperty;
var Gr = (e) => {
  throw TypeError(e);
};
var mi = (e, t, r) => t in e ? _i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ie = (e, t, r) => mi(e, typeof t != "symbol" ? t + "" : t, r), Dr = (e, t, r) => t.has(e) || Gr("Cannot " + r);
var U = (e, t, r) => (Dr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Ft = (e, t, r) => t.has(e) ? Gr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), Ot = (e, t, r, l) => (Dr(e, t, "write to private field"), l ? l.call(e, r) : t.set(e, r), r);
const Kr = "KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2NvbnN0IGQ9bmV3IFRleHRFbmNvZGVyO2Z1bmN0aW9uIHAoZSl7cmV0dXJuWy4uLm5ldyBVaW50OEFycmF5KGUpXS5tYXAodD0+dC50b1N0cmluZygxNikucGFkU3RhcnQoMiwiMCIpKS5qb2luKCIiKX1hc3luYyBmdW5jdGlvbiBiKGUsdCxyKXtpZih0eXBlb2YgY3J5cHRvPiJ1Inx8ISgic3VidGxlImluIGNyeXB0byl8fCEoImRpZ2VzdCJpbiBjcnlwdG8uc3VidGxlKSl0aHJvdyBuZXcgRXJyb3IoIldlYiBDcnlwdG8gaXMgbm90IGF2YWlsYWJsZS4gU2VjdXJlIGNvbnRleHQgaXMgcmVxdWlyZWQgKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL1NlY3VyaXR5L1NlY3VyZV9Db250ZXh0cykuIik7cmV0dXJuIHAoYXdhaXQgY3J5cHRvLnN1YnRsZS5kaWdlc3Qoci50b1VwcGVyQ2FzZSgpLGQuZW5jb2RlKGUrdCkpKX1mdW5jdGlvbiB3KGUsdCxyPSJTSEEtMjU2IixuPTFlNixzPTApe2NvbnN0IG89bmV3IEFib3J0Q29udHJvbGxlcixhPURhdGUubm93KCk7cmV0dXJue3Byb21pc2U6KGFzeW5jKCk9Pntmb3IobGV0IGM9cztjPD1uO2MrPTEpe2lmKG8uc2lnbmFsLmFib3J0ZWQpcmV0dXJuIG51bGw7aWYoYXdhaXQgYih0LGMscik9PT1lKXJldHVybntudW1iZXI6Yyx0b29rOkRhdGUubm93KCktYX19cmV0dXJuIG51bGx9KSgpLGNvbnRyb2xsZXI6b319ZnVuY3Rpb24gaChlKXtjb25zdCB0PWF0b2IoZSkscj1uZXcgVWludDhBcnJheSh0Lmxlbmd0aCk7Zm9yKGxldCBuPTA7bjx0Lmxlbmd0aDtuKyspcltuXT10LmNoYXJDb2RlQXQobik7cmV0dXJuIHJ9ZnVuY3Rpb24gZyhlLHQ9MTIpe2NvbnN0IHI9bmV3IFVpbnQ4QXJyYXkodCk7Zm9yKGxldCBuPTA7bjx0O24rKylyW25dPWUlMjU2LGU9TWF0aC5mbG9vcihlLzI1Nik7cmV0dXJuIHJ9YXN5bmMgZnVuY3Rpb24gbShlLHQ9IiIscj0xZTYsbj0wKXtjb25zdCBzPSJBRVMtR0NNIixvPW5ldyBBYm9ydENvbnRyb2xsZXIsYT1EYXRlLm5vdygpLGw9YXN5bmMoKT0+e2ZvcihsZXQgdT1uO3U8PXI7dSs9MSl7aWYoby5zaWduYWwuYWJvcnRlZHx8IWN8fCF5KXJldHVybiBudWxsO3RyeXtjb25zdCBmPWF3YWl0IGNyeXB0by5zdWJ0bGUuZGVjcnlwdCh7bmFtZTpzLGl2OmcodSl9LGMseSk7aWYoZilyZXR1cm57Y2xlYXJUZXh0Om5ldyBUZXh0RGVjb2RlcigpLmRlY29kZShmKSx0b29rOkRhdGUubm93KCktYX19Y2F0Y2h7fX1yZXR1cm4gbnVsbH07bGV0IGM9bnVsbCx5PW51bGw7dHJ5e3k9aChlKTtjb25zdCB1PWF3YWl0IGNyeXB0by5zdWJ0bGUuZGlnZXN0KCJTSEEtMjU2IixkLmVuY29kZSh0KSk7Yz1hd2FpdCBjcnlwdG8uc3VidGxlLmltcG9ydEtleSgicmF3Iix1LHMsITEsWyJkZWNyeXB0Il0pfWNhdGNoe3JldHVybntwcm9taXNlOlByb21pc2UucmVqZWN0KCksY29udHJvbGxlcjpvfX1yZXR1cm57cHJvbWlzZTpsKCksY29udHJvbGxlcjpvfX1sZXQgaTtvbm1lc3NhZ2U9YXN5bmMgZT0+e2NvbnN0e3R5cGU6dCxwYXlsb2FkOnIsc3RhcnQ6bixtYXg6c309ZS5kYXRhO2xldCBvPW51bGw7aWYodD09PSJhYm9ydCIpaT09bnVsbHx8aS5hYm9ydCgpLGk9dm9pZCAwO2Vsc2UgaWYodD09PSJ3b3JrIil7aWYoIm9iZnVzY2F0ZWQiaW4gcil7Y29uc3R7a2V5OmEsb2JmdXNjYXRlZDpsfT1yfHx7fTtvPWF3YWl0IG0obCxhLHMsbil9ZWxzZXtjb25zdHthbGdvcml0aG06YSxjaGFsbGVuZ2U6bCxzYWx0OmN9PXJ8fHt9O289dyhsLGMsYSxzLG4pfWk9by5jb250cm9sbGVyLG8ucHJvbWlzZS50aGVuKGE9PntzZWxmLnBvc3RNZXNzYWdlKGEmJnsuLi5hLHdvcmtlcjohMH0pfSl9fX0pKCk7Cg==", bi = (e) => Uint8Array.from(atob(e), (t) => t.charCodeAt(0)), Yr = typeof self < "u" && self.Blob && new Blob([bi(Kr)], { type: "text/javascript;charset=utf-8" });
function yi(e) {
  let t;
  try {
    if (t = Yr && (self.URL || self.webkitURL).createObjectURL(Yr), !t) throw "";
    const r = new Worker(t, {
      name: e == null ? void 0 : e.name
    });
    return r.addEventListener("error", () => {
      (self.URL || self.webkitURL).revokeObjectURL(t);
    }), r;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + Kr,
      {
        name: e == null ? void 0 : e.name
      }
    );
  } finally {
    t && (self.URL || self.webkitURL).revokeObjectURL(t);
  }
}
const pi = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(pi);
const wi = 1, Ei = 4, xi = 8, ki = 16, Ci = 1, Ri = 2, qr = "[", Qr = "[!", en = "]", je = {}, M = Symbol(), tn = !1;
var rn = Array.isArray, Ii = Array.from, kt = Object.keys, Ct = Object.defineProperty, Ne = Object.getOwnPropertyDescriptor, $i = Object.getOwnPropertyDescriptors, Si = Object.prototype, Ni = Array.prototype, Zt = Object.getPrototypeOf;
function nn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const oe = 2, ln = 4, ht = 8, Kt = 16, se = 32, gt = 64, Wt = 128, Ae = 256, Rt = 512, j = 1024, xe = 2048, _t = 4096, Je = 8192, Qe = 16384, Li = 32768, qt = 65536, Ai = 1 << 19, an = 1 << 20, ft = Symbol("$state"), on = Symbol("legacy props"), Ti = Symbol("");
function sn(e) {
  return e === this.v;
}
function Vi(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function un(e) {
  return !Vi(e, this.v);
}
function Pi(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function zi() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Gi(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Di() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Yi() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Fi(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Oi() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Xi() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Zi() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Wi() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let fn = !1;
function ce(e) {
  return {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: sn,
    version: 0
  };
}
function Fe(e) {
  return /* @__PURE__ */ Ui(ce(e));
}
// @__NO_SIDE_EFFECTS__
function cn(e, t = !1) {
  const r = ce(e);
  return t || (r.equals = un), r;
}
// @__NO_SIDE_EFFECTS__
function Ui(e) {
  return R !== null && R.f & oe && (de === null ? ll([e]) : de.push(e)), e;
}
function L(e, t) {
  return R !== null && ol() && R.f & (oe | Kt) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (de === null || !de.includes(e)) && Wi(), Mi(e, t);
}
function Mi(e, t) {
  return e.equals(t) || (e.v = t, e.version = Nn(), dn(e, xe), y !== null && y.f & j && !(y.f & se) && (X !== null && X.includes(e) ? (he(y, xe), Vt(y)) : we === null ? al([e]) : we.push(e))), t;
}
function dn(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var l = r.length, i = 0; i < l; i++) {
      var a = r[i], o = a.f;
      o & xe || (he(a, t), o & (j | Ae) && (o & oe ? dn(
        /** @type {Derived} */
        a,
        _t
      ) : Vt(
        /** @type {Effect} */
        a
      )));
    }
}
function Nt(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let T = !1;
function Ue(e) {
  T = e;
}
let A;
function ke(e) {
  if (e === null)
    throw Nt(), je;
  return A = e;
}
function Ke() {
  return ke(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Re(A)
  );
}
function J(e) {
  if (T) {
    if (/* @__PURE__ */ Re(A) !== null)
      throw Nt(), je;
    A = e;
  }
}
function ji() {
  for (var e = 0, t = A; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === en) {
        if (e === 0) return t;
        e -= 1;
      } else (r === qr || r === Qr) && (e += 1);
    }
    var l = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Re(t)
    );
    t.remove(), t = l;
  }
}
function ae(e, t = null, r) {
  if (typeof e != "object" || e === null || ft in e)
    return e;
  const l = Zt(e);
  if (l !== Si && l !== Ni)
    return e;
  var i = /* @__PURE__ */ new Map(), a = rn(e), o = ce(0);
  a && i.set("length", ce(
    /** @type {any[]} */
    e.length
  ));
  var d;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(u, c, f) {
        (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && Oi();
        var h = i.get(c);
        return h === void 0 ? (h = ce(f.value), i.set(c, h)) : L(h, ae(f.value, d)), !0;
      },
      deleteProperty(u, c) {
        var f = i.get(c);
        if (f === void 0)
          c in u && i.set(c, ce(M));
        else {
          if (a && typeof c == "string") {
            var h = (
              /** @type {Source<number>} */
              i.get("length")
            ), g = Number(c);
            Number.isInteger(g) && g < h.v && L(h, g);
          }
          L(f, M), Fr(o);
        }
        return !0;
      },
      get(u, c, f) {
        var p;
        if (c === ft)
          return e;
        var h = i.get(c), g = c in u;
        if (h === void 0 && (!g || (p = Ne(u, c)) != null && p.writable) && (h = ce(ae(g ? u[c] : M, d)), i.set(c, h)), h !== void 0) {
          var m = v(h);
          return m === M ? void 0 : m;
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
          if (g !== void 0 && m !== M)
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
        if (c === ft)
          return !0;
        var f = i.get(c), h = f !== void 0 && f.v !== M || Reflect.has(u, c);
        if (f !== void 0 || y !== null && (!h || (m = Ne(u, c)) != null && m.writable)) {
          f === void 0 && (f = ce(h ? ae(u[c], d) : M), i.set(c, f));
          var g = v(f);
          if (g === M)
            return !1;
        }
        return h;
      },
      set(u, c, f, h) {
        var G;
        var g = i.get(c), m = c in u;
        if (a && c === "length")
          for (var p = f; p < /** @type {Source<number>} */
          g.v; p += 1) {
            var z = i.get(p + "");
            z !== void 0 ? L(z, M) : p in u && (z = ce(M), i.set(p + "", z));
          }
        g === void 0 ? (!m || (G = Ne(u, c)) != null && G.writable) && (g = ce(void 0), L(g, ae(f, d)), i.set(c, g)) : (m = g.v !== M, L(g, ae(f, d)));
        var V = Reflect.getOwnPropertyDescriptor(u, c);
        if (V != null && V.set && V.set.call(h, f), !m) {
          if (a && typeof c == "string") {
            var B = (
              /** @type {Source<number>} */
              i.get("length")
            ), O = Number(c);
            Number.isInteger(O) && O >= B.v && L(B, O + 1);
          }
          Fr(o);
        }
        return !0;
      },
      ownKeys(u) {
        v(o);
        var c = Reflect.ownKeys(u).filter((g) => {
          var m = i.get(g);
          return m === void 0 || m.v !== M;
        });
        for (var [f, h] of i)
          h.v !== M && !(f in u) && c.push(f);
        return c;
      },
      setPrototypeOf() {
        Xi();
      }
    }
  );
}
function Fr(e, t = 1) {
  L(e, e.v + t);
}
var Or, vn, hn;
function Ut() {
  if (Or === void 0) {
    Or = window;
    var e = Element.prototype, t = Node.prototype;
    vn = Ne(t, "firstChild").get, hn = Ne(t, "nextSibling").get, e.__click = void 0, e.__className = "", e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Lt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Le(e) {
  return vn.call(e);
}
// @__NO_SIDE_EFFECTS__
function Re(e) {
  return hn.call(e);
}
function K(e, t) {
  if (!T)
    return /* @__PURE__ */ Le(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Le(A)
  );
  return r === null && (r = A.appendChild(Lt())), ke(r), r;
}
function Xt(e, t) {
  if (!T) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Le(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Re(r) : r;
  }
  return A;
}
function ge(e, t = 1, r = !1) {
  let l = T ? A : e;
  for (var i; t--; )
    i = l, l = /** @type {TemplateNode} */
    /* @__PURE__ */ Re(l);
  if (!T)
    return l;
  var a = l == null ? void 0 : l.nodeType;
  if (r && a !== 3) {
    var o = Lt();
    return l === null ? i == null || i.after(o) : l.before(o), ke(o), o;
  }
  return ke(l), /** @type {TemplateNode} */
  l;
}
function Bi(e) {
  e.textContent = "";
}
// @__NO_SIDE_EFFECTS__
function We(e) {
  var t = oe | xe;
  y === null ? t |= Ae : y.f |= an;
  var r = R !== null && R.f & oe ? (
    /** @type {Derived} */
    R
  ) : null;
  const l = {
    children: null,
    ctx: Z,
    deps: null,
    equals: sn,
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
function gn(e) {
  var t = e.children;
  if (t !== null) {
    e.children = null;
    for (var r = 0; r < t.length; r += 1) {
      var l = t[r];
      l.f & oe ? Qt(
        /** @type {Derived} */
        l
      ) : Te(
        /** @type {Effect} */
        l
      );
    }
  }
}
function Hi(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & oe))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function _n(e) {
  var t, r = y;
  ve(Hi(e));
  try {
    gn(e), t = Ln(e);
  } finally {
    ve(r);
  }
  return t;
}
function mn(e) {
  var t = _n(e), r = (Me || e.f & Ae) && e.deps !== null ? _t : j;
  he(e, r), e.equals(t) || (e.v = t, e.version = Nn());
}
function Qt(e) {
  gn(e), vt(e, 0), he(e, Qe), e.v = e.children = e.deps = e.ctx = e.reactions = null;
}
function Ji(e) {
  y === null && R === null && Gi(), R !== null && R.f & Ae && zi(), ir && Pi();
}
function Ki(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function et(e, t, r, l = !0) {
  var i = (e & gt) !== 0, a = y, o = {
    ctx: Z,
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
    var d = Be;
    try {
      Wr(!0), Tt(o), o.f |= Li;
    } catch (f) {
      throw Te(o), f;
    } finally {
      Wr(d);
    }
  } else t !== null && Vt(o);
  var u = r && o.deps === null && o.first === null && o.nodes_start === null && o.teardown === null && (o.f & an) === 0;
  if (!u && !i && l && (a !== null && Ki(o, a), R !== null && R.f & oe)) {
    var c = (
      /** @type {Derived} */
      R
    );
    (c.children ?? (c.children = [])).push(o);
  }
  return o;
}
function qi(e) {
  const t = et(ht, null, !1);
  return he(t, j), t.teardown = e, t;
}
function Mt(e) {
  Ji();
  var t = y !== null && (y.f & se) !== 0 && Z !== null && !Z.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      Z
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: y,
      reaction: R
    });
  } else {
    var l = er(e);
    return l;
  }
}
function bn(e) {
  const t = et(gt, e, !0);
  return () => {
    Te(t);
  };
}
function er(e) {
  return et(ln, e, !1);
}
function tr(e) {
  return et(ht, e, !0);
}
function Oe(e) {
  return rr(e);
}
function rr(e, t = 0) {
  return et(ht | Kt | t, e, !0);
}
function It(e, t = !0) {
  return et(ht | se, e, !0, t);
}
function yn(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = ir, l = R;
    Ur(!0), Ce(null);
    try {
      t.call(null);
    } finally {
      Ur(r), Ce(l);
    }
  }
}
function pn(e) {
  var t = e.deriveds;
  if (t !== null) {
    e.deriveds = null;
    for (var r = 0; r < t.length; r += 1)
      Qt(t[r]);
  }
}
function wn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var l = r.next;
    Te(r, t), r = l;
  }
}
function Qi(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    t.f & se || Te(t), t = r;
  }
}
function Te(e, t = !0) {
  var r = !1;
  if ((t || e.f & Ai) && e.nodes_start !== null) {
    for (var l = e.nodes_start, i = e.nodes_end; l !== null; ) {
      var a = l === i ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Re(l)
      );
      l.remove(), l = a;
    }
    r = !0;
  }
  wn(e, t && !r), pn(e), vt(e, 0), he(e, Qe);
  var o = e.transitions;
  if (o !== null)
    for (const u of o)
      u.stop();
  yn(e);
  var d = e.parent;
  d !== null && d.first !== null && En(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function En(e) {
  var t = e.parent, r = e.prev, l = e.next;
  r !== null && (r.next = l), l !== null && (l.prev = r), t !== null && (t.first === e && (t.first = l), t.last === e && (t.last = r));
}
function Xr(e, t) {
  var r = [];
  xn(e, r, !0), el(r, () => {
    Te(e), t && t();
  });
}
function el(e, t) {
  var r = e.length;
  if (r > 0) {
    var l = () => --r || t();
    for (var i of e)
      i.out(l);
  } else
    t();
}
function xn(e, t, r) {
  if (!(e.f & Je)) {
    if (e.f ^= Je, e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || r) && t.push(o);
    for (var l = e.first; l !== null; ) {
      var i = l.next, a = (l.f & qt) !== 0 || (l.f & se) !== 0;
      xn(l, t, a ? r : !1), l = i;
    }
  }
}
function Zr(e) {
  kn(e, !0);
}
function kn(e, t) {
  if (e.f & Je) {
    mt(e) && Tt(e), e.f ^= Je;
    for (var r = e.first; r !== null; ) {
      var l = r.next, i = (r.f & qt) !== 0 || (r.f & se) !== 0;
      kn(r, i ? t : !1), r = l;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
const tl = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let $t = !1, St = !1, jt = [], Bt = [];
function Cn() {
  $t = !1;
  const e = jt.slice();
  jt = [], nn(e);
}
function Rn() {
  St = !1;
  const e = Bt.slice();
  Bt = [], nn(e);
}
function nr(e) {
  $t || ($t = !0, queueMicrotask(Cn)), jt.push(e);
}
function rl(e) {
  St || (St = !0, tl(Rn)), Bt.push(e);
}
function nl() {
  $t && Cn(), St && Rn();
}
function In(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
const $n = 0, il = 1;
let wt = !1, Et = $n, ct = !1, dt = null, Be = !1, ir = !1;
function Wr(e) {
  Be = e;
}
function Ur(e) {
  ir = e;
}
let Se = [], He = 0;
let R = null;
function Ce(e) {
  R = e;
}
let y = null;
function ve(e) {
  y = e;
}
let de = null;
function ll(e) {
  de = e;
}
let X = null, Q = 0, we = null;
function al(e) {
  we = e;
}
let Sn = 0, Me = !1, Z = null;
function Nn() {
  return ++Sn;
}
function ol() {
  return !fn;
}
function mt(e) {
  var o, d;
  var t = e.f;
  if (t & xe)
    return !0;
  if (t & _t) {
    var r = e.deps, l = (t & Ae) !== 0;
    if (r !== null) {
      var i;
      if (t & Rt) {
        for (i = 0; i < r.length; i++)
          ((o = r[i]).reactions ?? (o.reactions = [])).push(e);
        e.f ^= Rt;
      }
      for (i = 0; i < r.length; i++) {
        var a = r[i];
        if (mt(
          /** @type {Derived} */
          a
        ) && mn(
          /** @type {Derived} */
          a
        ), l && y !== null && !Me && !((d = a == null ? void 0 : a.reactions) != null && d.includes(e)) && (a.reactions ?? (a.reactions = [])).push(e), a.version > e.version)
          return !0;
      }
    }
    l || he(e, j);
  }
  return !1;
}
function sl(e, t) {
  for (var r = t; r !== null; ) {
    if (r.f & Wt)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= Wt;
      }
    r = r.parent;
  }
  throw wt = !1, e;
}
function ul(e) {
  return (e.f & Qe) === 0 && (e.parent === null || (e.parent.f & Wt) === 0);
}
function At(e, t, r, l) {
  if (wt) {
    if (r === null && (wt = !1), ul(t))
      throw e;
    return;
  }
  r !== null && (wt = !0);
  {
    sl(e, t);
    return;
  }
}
function Ln(e) {
  var g;
  var t = X, r = Q, l = we, i = R, a = Me, o = de, d = Z, u = e.f;
  X = /** @type {null | Value[]} */
  null, Q = 0, we = null, R = u & (se | gt) ? null : e, Me = !Be && (u & Ae) !== 0, de = null, Z = e.ctx;
  try {
    var c = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (X !== null) {
      var h;
      if (vt(e, Q), f !== null && Q > 0)
        for (f.length = Q + X.length, h = 0; h < X.length; h++)
          f[Q + h] = X[h];
      else
        e.deps = f = X;
      if (!Me)
        for (h = Q; h < f.length; h++)
          ((g = f[h]).reactions ?? (g.reactions = [])).push(e);
    } else f !== null && Q < f.length && (vt(e, Q), f.length = Q);
    return c;
  } finally {
    X = t, Q = r, we = l, R = i, Me = a, de = o, Z = d;
  }
}
function fl(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var l = r.indexOf(e);
    if (l !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[l] = r[i], r.pop());
    }
  }
  r === null && t.f & oe && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (X === null || !X.includes(t)) && (he(t, _t), t.f & (Ae | Rt) || (t.f ^= Rt), vt(
    /** @type {Derived} **/
    t,
    0
  ));
}
function vt(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var l = t; l < r.length; l++)
      fl(e, r[l]);
}
function Tt(e) {
  var t = e.f;
  if (!(t & Qe)) {
    he(e, j);
    var r = y, l = Z;
    y = e;
    try {
      t & Kt ? Qi(e) : wn(e), pn(e), yn(e);
      var i = Ln(e);
      e.teardown = typeof i == "function" ? i : null, e.version = Sn;
    } catch (a) {
      At(a, e, r, l || e.ctx);
    } finally {
      y = r;
    }
  }
}
function An() {
  if (He > 1e3) {
    He = 0;
    try {
      Di();
    } catch (e) {
      if (dt !== null)
        At(e, dt, null);
      else
        throw e;
    }
  }
  He++;
}
function Tn(e) {
  var t = e.length;
  if (t !== 0) {
    An();
    var r = Be;
    Be = !0;
    try {
      for (var l = 0; l < t; l++) {
        var i = e[l];
        i.f & j || (i.f ^= j);
        var a = [];
        Vn(i, a), cl(a);
      }
    } finally {
      Be = r;
    }
  }
}
function cl(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var l = e[r];
      if (!(l.f & (Qe | Je)))
        try {
          mt(l) && (Tt(l), l.deps === null && l.first === null && l.nodes_start === null && (l.teardown === null ? En(l) : l.fn = null));
        } catch (i) {
          At(i, l, null, l.ctx);
        }
    }
}
function dl() {
  if (ct = !1, He > 1001)
    return;
  const e = Se;
  Se = [], Tn(e), ct || (He = 0, dt = null);
}
function Vt(e) {
  Et === $n && (ct || (ct = !0, queueMicrotask(dl))), dt = e;
  for (var t = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if (r & (gt | se)) {
      if (!(r & j)) return;
      t.f ^= j;
    }
  }
  Se.push(t);
}
function Vn(e, t) {
  var r = e.first, l = [];
  e: for (; r !== null; ) {
    var i = r.f, a = (i & se) !== 0, o = a && (i & j) !== 0, d = r.next;
    if (!o && !(i & Je))
      if (i & ht) {
        if (a)
          r.f ^= j;
        else
          try {
            mt(r) && Tt(r);
          } catch (h) {
            At(h, r, null, r.ctx);
          }
        var u = r.first;
        if (u !== null) {
          r = u;
          continue;
        }
      } else i & ln && l.push(r);
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
    u = l[f], t.push(u), Vn(u, t);
}
function k(e) {
  var t = Et, r = Se;
  try {
    An();
    const i = [];
    Et = il, Se = i, ct = !1, Tn(r);
    var l = e == null ? void 0 : e();
    return nl(), (Se.length > 0 || i.length > 0) && k(), He = 0, dt = null, l;
  } finally {
    Et = t, Se = r;
  }
}
async function vl() {
  await Promise.resolve(), k();
}
function v(e) {
  var f;
  var t = e.f, r = (t & oe) !== 0;
  if (r && t & Qe) {
    var l = _n(
      /** @type {Derived} */
      e
    );
    return Qt(
      /** @type {Derived} */
      e
    ), l;
  }
  if (R !== null) {
    de !== null && de.includes(e) && Zi();
    var i = R.deps;
    X === null && i !== null && i[Q] === e ? Q++ : X === null ? X = [e] : X.push(e), we !== null && y !== null && y.f & j && !(y.f & se) && we.includes(e) && (he(y, xe), Vt(y));
  } else if (r && /** @type {Derived} */
  e.deps === null)
    for (var a = (
      /** @type {Derived} */
      e
    ), o = a.parent, d = a; o !== null; )
      if (o.f & oe) {
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
  e, mt(a) && mn(a)), e.v;
}
function qe(e) {
  const t = R;
  try {
    return R = null, e();
  } finally {
    R = t;
  }
}
const hl = ~(xe | _t | j);
function he(e, t) {
  e.f = e.f & hl | t;
}
function Pn(e, t = !1, r) {
  Z = {
    p: Z,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
}
function zn(e) {
  const t = Z;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const o = t.e;
    if (o !== null) {
      var r = y, l = R;
      t.e = null;
      try {
        for (var i = 0; i < o.length; i++) {
          var a = o[i];
          ve(a.effect), Ce(a.reaction), er(a.fn);
        }
      } finally {
        ve(r), Ce(l);
      }
    }
    Z = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
let Mr = !1;
function Gn() {
  Mr || (Mr = !0, document.addEventListener(
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
  var t = R, r = y;
  Ce(null), ve(null);
  try {
    return e();
  } finally {
    Ce(t), ve(r);
  }
}
function gl(e, t, r, l = r) {
  e.addEventListener(t, () => Dn(r));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), l(!0);
  } : e.__on_r = () => l(!0), Gn();
}
const Yn = /* @__PURE__ */ new Set(), Ht = /* @__PURE__ */ new Set();
function _l(e, t, r, l) {
  function i(a) {
    if (l.capture || ut.call(t, a), !a.cancelBubble)
      return Dn(() => r.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? nr(() => {
    t.addEventListener(e, i, l);
  }) : t.addEventListener(e, i, l), i;
}
function ml(e, t, r, l, i) {
  var a = { capture: l, passive: i }, o = _l(e, t, r, a);
  (t === document.body || t === window || t === document) && qi(() => {
    t.removeEventListener(e, o, a);
  });
}
function bl(e) {
  for (var t = 0; t < e.length; t++)
    Yn.add(e[t]);
  for (var r of Ht)
    r(e);
}
function ut(e) {
  var O;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), l = e.type, i = ((O = e.composedPath) == null ? void 0 : O.call(e)) || [], a = (
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
    Ct(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var f = R, h = y;
    Ce(null), ve(null);
    try {
      for (var g, m = []; a !== null; ) {
        var p = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var z = a["__" + l];
          if (z !== void 0 && !/** @type {any} */
          a.disabled)
            if (rn(z)) {
              var [V, ...B] = z;
              V.apply(a, [e, ...B]);
            } else
              z.call(a, e);
        } catch (G) {
          g ? m.push(G) : g = G;
        }
        if (e.cancelBubble || p === t || p === null)
          break;
        a = p;
      }
      if (g) {
        for (let G of m)
          queueMicrotask(() => {
            throw G;
          });
        throw g;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Ce(f), ve(h);
    }
  }
}
function Fn(e) {
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
function ue(e, t) {
  var r = (t & Ci) !== 0, l = (t & Ri) !== 0, i, a = !e.startsWith("<!>");
  return () => {
    if (T)
      return Ee(A, null), A;
    i === void 0 && (i = Fn(a ? e : "<!>" + e), r || (i = /** @type {Node} */
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
function yl() {
  if (T)
    return Ee(A, null), A;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = Lt();
  return e.append(t, r), Ee(t, r), e;
}
function q(e, t) {
  if (T) {
    y.nodes_end = A, Ke();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const pl = ["touchstart", "touchmove"];
function wl(e) {
  return pl.includes(e);
}
function On(e, t) {
  return Xn(e, t);
}
function El(e, t) {
  Ut(), t.intro = t.intro ?? !1;
  const r = t.target, l = T, i = A;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Le(r)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== qr); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ Re(a);
    if (!a)
      throw je;
    Ue(!0), ke(
      /** @type {Comment} */
      a
    ), Ke();
    const o = Xn(e, { ...t, anchor: a });
    if (A === null || A.nodeType !== 8 || /** @type {Comment} */
    A.data !== en)
      throw Nt(), je;
    return Ue(!1), /**  @type {Exports} */
    o;
  } catch (o) {
    if (o === je)
      return t.recover === !1 && Yi(), Ut(), Bi(r), Ue(!1), On(e, t);
    throw o;
  } finally {
    Ue(l), ke(i);
  }
}
const Xe = /* @__PURE__ */ new Map();
function Xn(e, { target: t, anchor: r, props: l = {}, events: i, context: a, intro: o = !0 }) {
  Ut();
  var d = /* @__PURE__ */ new Set(), u = (h) => {
    for (var g = 0; g < h.length; g++) {
      var m = h[g];
      if (!d.has(m)) {
        d.add(m);
        var p = wl(m);
        t.addEventListener(m, ut, { passive: p });
        var z = Xe.get(m);
        z === void 0 ? (document.addEventListener(m, ut, { passive: p }), Xe.set(m, 1)) : Xe.set(m, z + 1);
      }
    }
  };
  u(Ii(Yn)), Ht.add(u);
  var c = void 0, f = bn(() => {
    var h = r ?? t.appendChild(Lt());
    return It(() => {
      if (a) {
        Pn({});
        var g = (
          /** @type {ComponentContext} */
          Z
        );
        g.c = a;
      }
      i && (l.$$events = i), T && Ee(
        /** @type {TemplateNode} */
        h,
        null
      ), c = e(h, l) || {}, T && (y.nodes_end = A), a && zn();
    }), () => {
      var p;
      for (var g of d) {
        t.removeEventListener(g, ut);
        var m = (
          /** @type {number} */
          Xe.get(g)
        );
        --m === 0 ? (document.removeEventListener(g, ut), Xe.delete(g)) : Xe.set(g, m);
      }
      Ht.delete(u), Jt.delete(c), h !== r && ((p = h.parentNode) == null || p.removeChild(h));
    };
  });
  return Jt.set(c, f), c;
}
let Jt = /* @__PURE__ */ new WeakMap();
function xl(e) {
  const t = Jt.get(e);
  t && t();
}
function pe(e, t, r = !1) {
  T && Ke();
  var l = e, i = null, a = null, o = M, d = r ? qt : 0, u = !1;
  const c = (h, g = !0) => {
    u = !0, f(g, h);
  }, f = (h, g) => {
    if (o === (o = h)) return;
    let m = !1;
    if (T) {
      const p = (
        /** @type {Comment} */
        l.data === Qr
      );
      !!o === p && (l = ji(), ke(l), Ue(!1), m = !0);
    }
    o ? (i ? Zr(i) : g && (i = It(() => g(l))), a && Xr(a, () => {
      a = null;
    })) : (a ? Zr(a) : g && (a = It(() => g(l))), i && Xr(i, () => {
      i = null;
    })), m && Ue(!0);
  };
  rr(() => {
    u = !1, t(c), u || f(null, null);
  }, d), T && (l = A);
}
function Ze(e, t, r, l, i) {
  var a = e, o = "", d;
  rr(() => {
    if (o === (o = t() ?? "")) {
      T && Ke();
      return;
    }
    d !== void 0 && (Te(d), d = void 0), o !== "" && (d = It(() => {
      if (T) {
        A.data;
        for (var u = Ke(), c = u; u !== null && (u.nodeType !== 8 || /** @type {Comment} */
        u.data !== ""); )
          c = u, u = /** @type {TemplateNode} */
          /* @__PURE__ */ Re(u);
        if (u === null)
          throw Nt(), je;
        Ee(A, c), a = ke(u);
        return;
      }
      var f = o + "", h = Fn(f);
      Ee(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Le(h),
        /** @type {TemplateNode} */
        h.lastChild
      ), a.before(h);
    }));
  });
}
function kl(e, t, r, l, i) {
  var d;
  T && Ke();
  var a = (d = t.$$slots) == null ? void 0 : d[r], o = !1;
  a === !0 && (a = t.children, o = !0), a === void 0 || a(e, o ? () => l : l);
}
function Cl(e, t) {
  nr(() => {
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
function jr(e) {
  if (T) {
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
    e.__on_r = r, rl(r), Gn();
  }
}
function Rl(e, t) {
  var r = e.__attributes ?? (e.__attributes = {});
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when its `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t);
}
function le(e, t, r, l) {
  var i = e.__attributes ?? (e.__attributes = {});
  T && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || i[t] !== (i[t] = r) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[Ti] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Il(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
var Br = /* @__PURE__ */ new Map();
function Il(e) {
  var t = Br.get(e.nodeName);
  if (t) return t;
  Br.set(e.nodeName, t = []);
  for (var r, l = Zt(e), i = Element.prototype; i !== l; ) {
    r = $i(l);
    for (var a in r)
      r[a].set && t.push(a);
    l = Zt(l);
  }
  return t;
}
function $l(e, t, r) {
  if (r) {
    if (e.classList.contains(t)) return;
    e.classList.add(t);
  } else {
    if (!e.classList.contains(t)) return;
    e.classList.remove(t);
  }
}
function Sl(e, t, r = t) {
  gl(e, "change", (l) => {
    var i = l ? e.defaultChecked : e.checked;
    r(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (T && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  qe(t) == null) && r(e.checked), tr(() => {
    var l = t();
    e.checked = !!l;
  });
}
function Hr(e, t) {
  return e === t || (e == null ? void 0 : e[ft]) === t;
}
function Jr(e = {}, t, r, l) {
  return er(() => {
    var i, a;
    return tr(() => {
      i = a, a = [], qe(() => {
        e !== r(...a) && (t(e, ...a), i && Hr(r(...i), e) && t(null, ...i));
      });
    }), () => {
      nr(() => {
        a && Hr(r(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function Zn(e) {
  Z === null && In(), Mt(() => {
    const t = qe(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Nl(e) {
  Z === null && In(), Zn(() => () => qe(e));
}
let pt = !1;
function Ll(e) {
  var t = pt;
  try {
    return pt = !1, [e(), pt];
  } finally {
    pt = t;
  }
}
function Al(e) {
  for (var t = y, r = y; t !== null && !(t.f & (se | gt)); )
    t = t.parent;
  try {
    return ve(t), e();
  } finally {
    ve(r);
  }
}
function I(e, t, r, l) {
  var H;
  var i = (r & wi) !== 0, a = !fn, o = (r & xi) !== 0, d = (r & ki) !== 0, u = !1, c;
  o ? [c, u] = Ll(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var f = ft in e || on in e, h = ((H = Ne(e, t)) == null ? void 0 : H.set) ?? (f && o && t in e ? (D) => e[t] = D : void 0), g = (
    /** @type {V} */
    l
  ), m = !0, p = !1, z = () => (p = !0, m && (m = !1, d ? g = qe(
    /** @type {() => V} */
    l
  ) : g = /** @type {V} */
  l), g);
  c === void 0 && l !== void 0 && (h && a && Fi(), c = z(), h && h(c));
  var V;
  if (V = () => {
    var D = (
      /** @type {V} */
      e[t]
    );
    return D === void 0 ? z() : (m = !0, p = !1, D);
  }, !(r & Ei))
    return V;
  if (h) {
    var B = e.$$legacy;
    return function(D, Y) {
      return arguments.length > 0 ? ((!Y || B || u) && h(Y ? V() : D), D) : V();
    };
  }
  var O = !1, G = !1, me = /* @__PURE__ */ cn(c), ne = Al(
    () => /* @__PURE__ */ We(() => {
      var D = V(), Y = v(me);
      return O ? (O = !1, G = !0, Y) : (G = !1, me.v = D);
    })
  );
  return i || (ne.equals = un), function(D, Y) {
    if (arguments.length > 0) {
      const ee = Y ? v(ne) : o ? ae(D) : D;
      return ne.equals(ee) || (O = !0, L(me, ee), p && g !== void 0 && (g = ee), qe(() => v(ne))), D;
    }
    return v(ne);
  };
}
function Tl(e) {
  return new Vl(e);
}
var _e, re;
class Vl {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    Ft(this, _e);
    /** @type {Record<string, any>} */
    Ft(this, re);
    var a;
    var r = /* @__PURE__ */ new Map(), l = (o, d) => {
      var u = /* @__PURE__ */ cn(d);
      return r.set(o, u), u;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(o, d) {
          return v(r.get(d) ?? l(d, Reflect.get(o, d)));
        },
        has(o, d) {
          return d === on ? !0 : (v(r.get(d) ?? l(d, Reflect.get(o, d))), Reflect.has(o, d));
        },
        set(o, d, u) {
          return L(r.get(d) ?? l(d, u), u), Reflect.set(o, d, u);
        }
      }
    );
    Ot(this, re, (t.hydrate ? El : On)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((a = t == null ? void 0 : t.props) != null && a.$$host) || t.sync === !1) && k(), Ot(this, _e, i.$$events);
    for (const o of Object.keys(U(this, re)))
      o === "$set" || o === "$destroy" || o === "$on" || Ct(this, o, {
        get() {
          return U(this, re)[o];
        },
        /** @param {any} value */
        set(d) {
          U(this, re)[o] = d;
        },
        enumerable: !0
      });
    U(this, re).$set = /** @param {Record<string, any>} next */
    (o) => {
      Object.assign(i, o);
    }, U(this, re).$destroy = () => {
      xl(U(this, re));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    U(this, re).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    U(this, _e)[t] = U(this, _e)[t] || [];
    const l = (...i) => r.call(this, ...i);
    return U(this, _e)[t].push(l), () => {
      U(this, _e)[t] = U(this, _e)[t].filter(
        /** @param {any} fn */
        (i) => i !== l
      );
    };
  }
  $destroy() {
    U(this, re).$destroy();
  }
}
_e = new WeakMap(), re = new WeakMap();
let Wn;
typeof HTMLElement == "function" && (Wn = class extends HTMLElement {
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
          i !== "default" && (o.name = i), q(a, o);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, l = Pl(this);
      for (const i of this.$$s)
        i in l && (i === "default" && !this.$$d.children ? (this.$$d.children = t(i), r.default = !0) : r[i] = t(i));
      for (const i of this.attributes) {
        const a = this.$$g_p(i.name);
        a in this.$$d || (this.$$d[a] = xt(a, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = Tl({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = bn(() => {
        tr(() => {
          var i;
          this.$$r = !0;
          for (const a of kt(this.$$c)) {
            if (!((i = this.$$p_d[a]) != null && i.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const o = xt(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = xt(t, l, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
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
    return kt(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function xt(e, t, r, l) {
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
  let o = class extends Wn {
    constructor() {
      super(e, r, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return kt(t).map(
        (d) => (t[d].attribute || d).toLowerCase()
      );
    }
  };
  return kt(t).forEach((d) => {
    Ct(o.prototype, d, {
      get() {
        return this.$$c && d in this.$$c ? this.$$c[d] : this.$$d[d];
      },
      set(u) {
        var h;
        u = xt(d, u, t), this.$$d[d] = u;
        var c = this.$$c;
        if (c) {
          var f = (h = Ne(c, d)) == null ? void 0 : h.get;
          f ? c[d] = u : c.$set({ [d]: u });
        }
      }
    });
  }), l.forEach((d) => {
    Ct(o.prototype, d, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[d];
      }
    });
  }), e.element = /** @type {any} */
  o, o;
}
const Un = new TextEncoder();
function Gl(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function Dl(e, t = "SHA-256", r = 1e5) {
  const l = Date.now().toString(16);
  e || (e = Math.round(Math.random() * r));
  const i = await Mn(l, e, t);
  return {
    algorithm: t,
    challenge: i,
    salt: l,
    signature: ""
  };
}
async function Mn(e, t, r) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return Gl(
    await crypto.subtle.digest(
      r.toUpperCase(),
      Un.encode(e + t)
    )
  );
}
function Yl(e, t, r = "SHA-256", l = 1e6, i = 0) {
  const a = new AbortController(), o = Date.now();
  return {
    promise: (async () => {
      for (let u = i; u <= l; u += 1) {
        if (a.signal.aborted)
          return null;
        if (await Mn(t, u, r) === e)
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
function Fl() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function Ol(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let l = 0; l < t.length; l++)
    r[l] = t.charCodeAt(l);
  return r;
}
function Xl(e, t = 12) {
  const r = new Uint8Array(t);
  for (let l = 0; l < t; l++)
    r[l] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function Zl(e, t = "", r = 1e6, l = 0) {
  const i = "AES-GCM", a = new AbortController(), o = Date.now(), d = async () => {
    for (let f = l; f <= r; f += 1) {
      if (a.signal.aborted || !u || !c)
        return null;
      try {
        const h = await crypto.subtle.decrypt(
          {
            name: i,
            iv: Xl(f)
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
    c = Ol(e);
    const f = await crypto.subtle.digest(
      "SHA-256",
      Un.encode(t)
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
var x = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(x || {}), Wl = /* @__PURE__ */ ue('<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="svelte-ddsc3z"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25" class="svelte-ddsc3z"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor" class="altcha-spinner svelte-ddsc3z"></path></svg>'), Ul = /* @__PURE__ */ ue('<span role="status" aria-live="polite" class="svelte-ddsc3z"><!></span> <input type="hidden" class="svelte-ddsc3z">', 1), Ml = /* @__PURE__ */ ue('<span role="status" aria-live="polite" class="svelte-ddsc3z"><!></span>'), jl = /* @__PURE__ */ ue('<label class="svelte-ddsc3z"><!></label>'), Bl = /* @__PURE__ */ ue('<div class="svelte-ddsc3z"><a target="_blank" class="altcha-logo svelte-ddsc3z"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-ddsc3z"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor" class="svelte-ddsc3z"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor" class="svelte-ddsc3z"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor" class="svelte-ddsc3z"></path></svg></a></div>'), Hl = /* @__PURE__ */ ue('<div class="svelte-ddsc3z"><!></div>'), Jl = /* @__PURE__ */ ue('<div class="svelte-ddsc3z"><!></div>'), Kl = /* @__PURE__ */ ue('<div class="altcha-error svelte-ddsc3z"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="svelte-ddsc3z"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" class="svelte-ddsc3z"></path></svg> <!></div>'), ql = /* @__PURE__ */ ue('<div class="altcha-footer svelte-ddsc3z"><div class="svelte-ddsc3z"><!></div></div>'), Ql = /* @__PURE__ */ ue('<div class="altcha-anchor-arrow svelte-ddsc3z"></div>'), ea = /* @__PURE__ */ ue('<!> <div class="altcha svelte-ddsc3z"><div class="altcha-main svelte-ddsc3z"><!> <div class="altcha-checkbox svelte-ddsc3z"><input type="checkbox" class="svelte-ddsc3z"></div> <div class="altcha-label svelte-ddsc3z"><!></div> <!></div> <!> <!> <!></div>', 1);
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
  var Vr, Pr;
  Pn(t, !0), Cl(e, ta);
  let r = I(t, "auto", 7, void 0), l = I(t, "blockspam", 7, void 0), i = I(t, "challengeurl", 7, void 0), a = I(t, "challengejson", 7, void 0), o = I(t, "customfetch", 7, void 0), d = I(t, "debug", 7, !1), u = I(t, "delay", 7, 0), c = I(t, "expire", 7, void 0), f = I(t, "floating", 7, void 0), h = I(t, "floatinganchor", 7, void 0), g = I(t, "floatingoffset", 7, void 0), m = I(t, "hidefooter", 7, !1), p = I(t, "hidelogo", 7, !1), z = I(t, "id", 7, void 0), V = I(t, "name", 7, "altcha"), B = I(t, "maxnumber", 7, 1e6), O = I(t, "mockerror", 7, !1), G = I(t, "obfuscated", 7, void 0), me = I(t, "plugins", 7, void 0), ne = I(t, "refetchonexpire", 7, !0), H = I(t, "spamfilter", 7, !1), D = I(t, "strings", 7, void 0), Y = I(t, "test", 7, !1), ee = I(t, "verifyurl", 7, void 0), Ve = I(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), tt = I(t, "workerurl", 7, void 0);
  const lr = ["SHA-256", "SHA-384", "SHA-512"], ar = "Visit Altcha.org", or = "https://altcha.org/", rt = (n, s) => {
    t.$$host.dispatchEvent(new CustomEvent(n, { detail: s }));
  }, sr = (Pr = (Vr = document.documentElement.lang) == null ? void 0 : Vr.split("-")) == null ? void 0 : Pr[0], Pt = /* @__PURE__ */ We(() => {
    var n;
    return i() && new URL(i(), location.origin).host.endsWith(".altcha.org") && !!((n = i()) != null && n.includes("apiKey=ckey_"));
  }), zt = /* @__PURE__ */ We(() => a() ? pr(a()) : void 0), ur = /* @__PURE__ */ We(() => D() ? pr(D()) : {}), te = /* @__PURE__ */ We(() => {
    var n;
    return {
      ariaLinkLabel: ar,
      error: "Verification failed. Try again later.",
      expired: "Verification expired. Try again.",
      footer: `Protected by <a href="${or}" target="_blank" aria-label="${((n = v(ur)) == null ? void 0 : n.ariaLinkLabel) || ar}">ALTCHA</a>`,
      label: "I'm not a robot",
      verified: "Verified",
      verifying: "Verifying...",
      waitAlert: "Verifying... please wait.",
      ...v(ur)
    };
  }), fr = /* @__PURE__ */ We(() => z() || `${V()}_checkbox`);
  let Pe = Fe(!1), $ = Fe(ae(x.UNVERIFIED)), W = Fe(void 0), nt = Fe(null), ze = null, w = null, Ge = Fe(null), fe = null, be = [], Ie = Fe(null);
  Mt(() => {
    ei(v(Ge));
  }), Mt(() => {
    ti(v($));
  }), Nl(() => {
    jn(), w && (w.removeEventListener("submit", _r), w.removeEventListener("reset", mr), w.removeEventListener("focusin", gr), w = null), fe && (clearTimeout(fe), fe = null), document.removeEventListener("click", vr), document.removeEventListener("scroll", hr), window.removeEventListener("resize", yr);
  }), Zn(() => {
    var n;
    S("mounted", "1.2.0"), S("workers", Ve()), qn(), S("plugins", be.length ? be.map((s) => s.constructor.pluginName).join(", ") : "none"), Y() && S("using test mode"), c() && Gt(c()), r() !== void 0 && S("auto", r()), f() !== void 0 && wr(f()), w = (n = v(W)) == null ? void 0 : n.closest("form"), w && (w.addEventListener("submit", _r, { capture: !0 }), w.addEventListener("reset", mr), r() === "onfocus" && w.addEventListener("focusin", gr)), r() === "onload" && (G() ? it() : ye()), v(Pt) && (m() || p()) && S("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      rt("load");
    });
  });
  function cr(n, s) {
    return btoa(JSON.stringify({
      algorithm: n.algorithm,
      challenge: n.challenge,
      number: s.number,
      salt: n.salt,
      signature: n.signature,
      test: Y() ? !0 : void 0,
      took: s.took
    }));
  }
  function jn() {
    for (const n of be)
      n.destroy();
  }
  function dr() {
    i() && ne() && v($) === x.VERIFIED ? ye() : lt(x.EXPIRED, v(te).expired);
  }
  async function Bn() {
    var n;
    if (O())
      throw S("mocking error"), new Error("Mocked error.");
    if (v(zt))
      return S("using provided json data"), v(zt);
    if (Y())
      return S("generating test challenge", { test: Y() }), Dl(typeof Y() != "boolean" ? +Y() : void 0);
    {
      if (!i() && w) {
        const N = w.getAttribute("action");
        N != null && N.includes("/form/") && i(N + "/altcha");
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
        headers: H() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      };
      if (s) {
        if (_ = await s(i(), E), !_ || !(_ instanceof Response))
          throw new Error("Custom fetch function did not return a response.");
      } else
        _ = await fetch(i(), E);
      if (_.status !== 200)
        throw new Error(`Server responded with ${_.status}.`);
      const P = _.headers.get("X-Altcha-Config"), C = await _.json(), b = new URLSearchParams((n = C.salt.split("?")) == null ? void 0 : n[1]), F = b.get("expires") || b.get("expire");
      if (F) {
        const N = new Date(+F * 1e3), Ye = isNaN(N.getTime()) ? 0 : N.getTime() - Date.now();
        Ye > 0 && Gt(Ye);
      }
      if (P)
        try {
          const N = JSON.parse(P);
          N && typeof N == "object" && (N.verifyurl && (N.verifyurl = new URL(N.verifyurl, new URL(i())).toString()), kr(N));
        } catch (N) {
          S("unable to configure from X-Altcha-Config", N);
        }
      return C;
    }
  }
  function Hn(n) {
    var _;
    const s = w == null ? void 0 : w.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((_ = s == null ? void 0 : s.value) == null ? void 0 : _.slice(s.value.indexOf("@"))) || void 0;
  }
  function Jn() {
    return H() === "ipAddress" ? {
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
    } : typeof H() == "object" ? H() : {
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
  function Kn(n) {
    return [
      ...(w == null ? void 0 : w.querySelectorAll(n != null && n.length ? n.map((_) => `input[name="${_}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (_, E) => {
        const P = E.name, C = E.value;
        return P && C && (_[P] = /\n/.test(C) ? C.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : C), _;
      },
      {}
    );
  }
  function qn() {
    const n = me() !== void 0 ? me().split(",") : void 0;
    for (const s of globalThis.altchaPlugins)
      (!n || n.includes(s.pluginName)) && be.push(new s({
        el: v(W),
        clarify: it,
        dispatch: rt,
        getConfiguration: Cr,
        getFloatingAnchor: Rr,
        getState: Ir,
        log: S,
        reset: lt,
        solve: xr,
        setState: $e,
        setFloatingAnchor: $r,
        verify: ye
      }));
  }
  function S(...n) {
    (d() || n.some((s) => s instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${V()}]`, ...n);
  }
  function Qn() {
    [x.UNVERIFIED, x.ERROR, x.EXPIRED].includes(v($)) ? H() !== !1 && (w == null ? void 0 : w.reportValidity()) === !1 ? L(Pe, !1) : G() ? it() : ye() : L(Pe, !0);
  }
  function vr(n) {
    const s = n.target;
    f() && s && !v(W).contains(s) && (v($) === x.VERIFIED || r() === "off" && v($) === x.UNVERIFIED) && (v(W).style.display = "none");
  }
  function hr() {
    f() && v($) !== x.UNVERIFIED && bt();
  }
  function ei(n) {
    for (const s of be)
      typeof s.onErrorChange == "function" && s.onErrorChange(v(Ge));
  }
  function gr(n) {
    v($) === x.UNVERIFIED && ye();
  }
  function _r(n) {
    w && r() === "onsubmit" ? v($) === x.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), ye().then(() => {
      w == null || w.requestSubmit();
    })) : v($) !== x.VERIFIED && (n.preventDefault(), n.stopPropagation(), v($) === x.VERIFYING && br()) : w && f() && r() === "off" && v($) === x.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), v(W).style.display = "block", bt());
  }
  function mr() {
    lt();
  }
  function br() {
    v($) === x.VERIFYING && v(te).waitAlert && alert(v(te).waitAlert);
  }
  function ti(n) {
    for (const s of be)
      typeof s.onStateChange == "function" && s.onStateChange(v($));
    f() && v($) !== x.UNVERIFIED && requestAnimationFrame(() => {
      bt();
    }), L(Pe, v($) === x.VERIFIED);
  }
  function yr() {
    f() && bt();
  }
  function pr(n) {
    return JSON.parse(n);
  }
  function bt(n = 20) {
    if (v(W))
      if (ze || (ze = (h() ? document.querySelector(h()) : w == null ? void 0 : w.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || w), ze) {
        const s = parseInt(g(), 10) || 12, _ = ze.getBoundingClientRect(), E = v(W).getBoundingClientRect(), P = document.documentElement.clientHeight, C = document.documentElement.clientWidth, b = f() === "auto" ? _.bottom + E.height + s + n > P : f() === "top", F = Math.max(n, Math.min(C - n - E.width, _.left + _.width / 2 - E.width / 2));
        if (b ? v(W).style.top = `${_.top - (E.height + s)}px` : v(W).style.top = `${_.bottom + s}px`, v(W).style.left = `${F}px`, v(W).setAttribute("data-floating", b ? "top" : "bottom"), v(nt)) {
          const N = v(nt).getBoundingClientRect();
          v(nt).style.left = _.left - F + _.width / 2 - N.width / 2 + "px";
        }
      } else
        S("unable to find floating anchor element");
  }
  async function ri(n) {
    if (!ee())
      throw new Error("Attribute verifyurl not set.");
    S("requesting server verification from", ee());
    const s = { payload: n };
    if (H() !== !1) {
      const {
        blockedCountries: P,
        classifier: C,
        disableRules: b,
        email: F,
        expectedLanguages: N,
        expectedCountries: Ye,
        fields: ot,
        ipAddress: st,
        text: gi,
        timeZone: zr
      } = Jn();
      s.blockedCountries = P, s.classifier = C, s.disableRules = b, s.email = F === !1 ? void 0 : Hn(F), s.expectedCountries = Ye, s.expectedLanguages = N || (sr ? [sr] : void 0), s.fields = ot === !1 ? void 0 : Kn(ot), s.ipAddress = st === !1 ? void 0 : st || "auto", s.text = gi, s.timeZone = zr === !1 ? void 0 : zr || Fl();
    }
    const _ = await fetch(ee(), {
      body: JSON.stringify(s),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (_.status !== 200)
      throw new Error(`Server responded with ${_.status}.`);
    const E = await _.json();
    if (E != null && E.payload && L(Ie, ae(E.payload)), rt("serververification", E), l() && E.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  function Gt(n) {
    S("expire", n), fe && (clearTimeout(fe), fe = null), n < 1 ? dr() : fe = setTimeout(dr, n);
  }
  function wr(n) {
    S("floating", n), f() !== n && (v(W).style.left = "", v(W).style.top = ""), f(n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : f()), f() ? (r() || r("onsubmit"), document.addEventListener("scroll", hr), document.addEventListener("click", vr), window.addEventListener("resize", yr)) : r() === "onsubmit" && r(void 0);
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
    let s = null;
    if ("Worker" in window) {
      try {
        s = await ni(n, n.maxnumber);
      } catch (_) {
        S(_);
      }
      if ((s == null ? void 0 : s.number) !== void 0 || "obfuscated" in n)
        return { data: n, solution: s };
    }
    if ("obfuscated" in n) {
      const _ = await Zl(n.obfuscated, n.key, n.maxnumber);
      return { data: n, solution: await _.promise };
    }
    return {
      data: n,
      solution: await Yl(n.challenge, n.salt, n.algorithm, n.maxnumber || B()).promise
    };
  }
  async function ni(n, s = typeof Y() == "number" ? Y() : B(), _ = Math.ceil(Ve())) {
    const E = [];
    _ = Math.min(16, Math.max(1, _));
    for (let b = 0; b < _; b++)
      E.push(altchaCreateWorker(tt()));
    const P = Math.ceil(s / _), C = await Promise.all(E.map((b, F) => {
      const N = F * P;
      return new Promise((Ye) => {
        b.addEventListener("message", (ot) => {
          if (ot.data)
            for (const st of E)
              st !== b && st.postMessage({ type: "abort" });
          Ye(ot.data);
        }), b.postMessage({
          payload: n,
          max: N + P,
          start: N,
          type: "work"
        });
      });
    }));
    for (const b of E)
      b.terminate();
    return C.find((b) => !!b) || null;
  }
  async function it() {
    if (!G()) {
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
  function kr(n) {
    n.obfuscated !== void 0 && G(n.obfuscated), n.auto !== void 0 && (r(n.auto), r() === "onload" && (G() ? it() : ye())), n.blockspam !== void 0 && l(!!n.blockspam), n.customfetch !== void 0 && o(n.customfetch), n.floatinganchor !== void 0 && h(n.floatinganchor), n.delay !== void 0 && u(n.delay), n.floatingoffset !== void 0 && g(n.floatingoffset), n.floating !== void 0 && wr(n.floating), n.expire !== void 0 && (Gt(n.expire), c(n.expire)), n.challenge && (a(typeof n.challenge == "string" ? n.challenge : JSON.stringify(n.challenge)), Er(v(zt))), n.challengeurl !== void 0 && i(n.challengeurl), n.debug !== void 0 && d(!!n.debug), n.hidefooter !== void 0 && m(!!n.hidefooter), n.hidelogo !== void 0 && p(!!n.hidelogo), n.maxnumber !== void 0 && B(+n.maxnumber), n.mockerror !== void 0 && O(!!n.mockerror), n.name !== void 0 && V(n.name), n.refetchonexpire !== void 0 && ne(!!n.refetchonexpire), n.spamfilter !== void 0 && H(typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && D(typeof n.strings == "string" ? n.strings : JSON.stringify(n.strings)), n.test !== void 0 && Y(typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && ee(n.verifyurl), n.workers !== void 0 && Ve(+n.workers), n.workerurl !== void 0 && tt(n.workerurl);
  }
  function Cr() {
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
      name: V(),
      maxnumber: B(),
      mockerror: O(),
      obfuscated: G(),
      refetchonexpire: ne(),
      spamfilter: H(),
      strings: v(te),
      test: Y(),
      verifyurl: ee(),
      workers: Ve(),
      workerurl: tt()
    };
  }
  function Rr() {
    return ze;
  }
  function ii(n) {
    return be.find((s) => s.constructor.pluginName === n);
  }
  function Ir() {
    return v($);
  }
  function lt(n = x.UNVERIFIED, s = null) {
    fe && (clearTimeout(fe), fe = null), L(Pe, !1), L(Ie, null), $e(n, s);
  }
  function $r(n) {
    ze = n;
  }
  function $e(n, s = null) {
    L($, ae(n)), L(Ge, ae(s)), rt("statechange", {
      payload: v(Ie),
      state: v($)
    });
  }
  async function ye() {
    return lt(x.VERIFYING), await new Promise((n) => setTimeout(n, u() || 0)), Bn().then((n) => (Er(n), S("challenge", n), xr(n))).then(({ data: n, solution: s }) => {
      if (S("solution", s), "challenge" in n && s && !("clearText" in s))
        if ((s == null ? void 0 : s.number) !== void 0) {
          if (ee())
            return ri(cr(n, s));
          L(Ie, ae(cr(n, s))), S("payload", v(Ie));
        } else
          throw S("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      $e(x.VERIFIED), S("verified"), vl().then(() => {
        rt("verified", { payload: v(Ie) });
      });
    }).catch((n) => {
      S(n), $e(x.ERROR, n.message);
    });
  }
  var Sr = ea(), Nr = Xt(Sr);
  kl(Nr, t, "default", {});
  var at = ge(Nr, 2), Dt = K(at), Lr = K(Dt);
  {
    var li = (n) => {
      var s = Wl();
      q(n, s);
    };
    pe(Lr, (n) => {
      v($) === x.VERIFYING && n(li);
    });
  }
  var yt = ge(Lr, 2), De = K(yt);
  jr(De), De.__change = Qn, J(yt);
  var Yt = ge(yt, 2), ai = K(Yt);
  {
    var oi = (n) => {
      var s = Ul(), _ = Xt(s), E = K(_);
      Ze(E, () => v(te).verified), J(_);
      var P = ge(_, 2);
      jr(P), Oe(() => {
        le(P, "name", V()), Rl(P, v(Ie));
      }), q(n, s);
    }, si = (n) => {
      var s = yl(), _ = Xt(s);
      {
        var E = (C) => {
          var b = Ml(), F = K(b);
          Ze(F, () => v(te).verifying), J(b), q(C, b);
        }, P = (C) => {
          var b = jl(), F = K(b);
          Ze(F, () => v(te).label), J(b), Oe(() => le(b, "for", v(fr))), q(C, b);
        };
        pe(
          _,
          (C) => {
            v($) === x.VERIFYING ? C(E) : C(P, !1);
          },
          !0
        );
      }
      q(n, s);
    };
    pe(ai, (n) => {
      v($) === x.VERIFIED ? n(oi) : n(si, !1);
    });
  }
  J(Yt);
  var ui = ge(Yt, 2);
  {
    var fi = (n) => {
      var s = Bl(), _ = K(s);
      le(_, "href", or), J(s), Oe(() => le(_, "aria-label", v(te).ariaLinkLabel)), q(n, s);
    };
    pe(ui, (n) => {
      (p() !== !0 || v(Pt)) && n(fi);
    });
  }
  J(Dt);
  var Ar = ge(Dt, 2);
  {
    var ci = (n) => {
      var s = Kl(), _ = ge(K(s), 2);
      {
        var E = (C) => {
          var b = Hl(), F = K(b);
          Ze(F, () => v(te).expired), J(b), Oe(() => le(b, "title", v(Ge))), q(C, b);
        }, P = (C) => {
          var b = Jl(), F = K(b);
          Ze(F, () => v(te).error), J(b), Oe(() => le(b, "title", v(Ge))), q(C, b);
        };
        pe(_, (C) => {
          v($) === x.EXPIRED ? C(E) : C(P, !1);
        });
      }
      J(s), q(n, s);
    };
    pe(Ar, (n) => {
      (v(Ge) || v($) === x.EXPIRED) && n(ci);
    });
  }
  var Tr = ge(Ar, 2);
  {
    var di = (n) => {
      var s = ql(), _ = K(s), E = K(_);
      Ze(E, () => v(te).footer), J(_), J(s), q(n, s);
    };
    pe(Tr, (n) => {
      v(te).footer && (m() !== !0 || v(Pt)) && n(di);
    });
  }
  var vi = ge(Tr, 2);
  {
    var hi = (n) => {
      var s = Ql();
      Jr(s, (_) => L(nt, _), () => v(nt)), q(n, s);
    };
    pe(vi, (n) => {
      f() && n(hi);
    });
  }
  return J(at), Jr(at, (n) => L(W, n), () => v(W)), Oe(() => {
    le(at, "data-state", v($)), le(at, "data-floating", f()), $l(yt, "altcha-hidden", v($) === x.VERIFYING), le(De, "id", v(fr)), De.required = r() !== "onsubmit" && (!f() || r() !== "off");
  }), ml("invalid", De, br), Sl(De, () => v(Pe), (n) => L(Pe, n)), q(e, Sr), zn({
    clarify: it,
    configure: kr,
    getConfiguration: Cr,
    getFloatingAnchor: Rr,
    getPlugin: ii,
    getState: Ir,
    reset: lt,
    setFloatingAnchor: $r,
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
    get id() {
      return z();
    },
    set id(n = void 0) {
      z(n), k();
    },
    get name() {
      return V();
    },
    set name(n = "altcha") {
      V(n), k();
    },
    get maxnumber() {
      return B();
    },
    set maxnumber(n = 1e6) {
      B(n), k();
    },
    get mockerror() {
      return O();
    },
    set mockerror(n = !1) {
      O(n), k();
    },
    get obfuscated() {
      return G();
    },
    set obfuscated(n = void 0) {
      G(n), k();
    },
    get plugins() {
      return me();
    },
    set plugins(n = void 0) {
      me(n), k();
    },
    get refetchonexpire() {
      return ne();
    },
    set refetchonexpire(n = !0) {
      ne(n), k();
    },
    get spamfilter() {
      return H();
    },
    set spamfilter(n = !1) {
      H(n), k();
    },
    get strings() {
      return D();
    },
    set strings(n = void 0) {
      D(n), k();
    },
    get test() {
      return Y();
    },
    set test(n = !1) {
      Y(n), k();
    },
    get verifyurl() {
      return ee();
    },
    set verifyurl(n = void 0) {
      ee(n), k();
    },
    get workers() {
      return Ve();
    },
    set workers(n = Math.min(16, navigator.hardwareConcurrency || 8)) {
      Ve(n), k();
    },
    get workerurl() {
      return tt();
    },
    set workerurl(n = void 0) {
      tt(n), k();
    }
  });
}
bl(["change"]);
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
globalThis.altchaCreateWorker = (e) => e ? new Worker(new URL(e)) : new yi();
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
export {
  ra as Altcha
};
