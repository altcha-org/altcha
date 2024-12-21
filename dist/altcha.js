var vi = Object.defineProperty;
var Pr = (e) => {
  throw TypeError(e);
};
var gi = (e, t, r) => t in e ? vi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ie = (e, t, r) => gi(e, typeof t != "symbol" ? t + "" : t, r), zr = (e, t, r) => t.has(e) || Pr("Cannot " + r);
var j = (e, t, r) => (zr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Yt = (e, t, r) => t.has(e) ? Pr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), Ft = (e, t, r, l) => (zr(e, t, "write to private field"), l ? l.call(e, r) : t.set(e, r), r);
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
const yi = 1, pi = 4, wi = 8, Ei = 16, xi = 1, ki = 2, Jr = "[", Kr = "[!", qr = "]", Ue = {}, B = Symbol(), Qr = !1;
var en = Array.isArray, Ci = Array.from, kt = Object.keys, Ct = Object.defineProperty, Ae = Object.getOwnPropertyDescriptor, Ri = Object.getOwnPropertyDescriptors, Ii = Object.prototype, $i = Array.prototype, Xt = Object.getPrototypeOf;
function tn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const ae = 2, rn = 4, dt = 8, Ht = 16, oe = 32, ht = 64, Zt = 128, Ve = 256, Rt = 512, H = 1024, Re = 2048, vt = 4096, Be = 8192, Ke = 16384, Si = 32768, Jt = 65536, Ni = 1 << 19, nn = 1 << 20, st = Symbol("$state"), ln = Symbol("legacy props"), Li = Symbol("");
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
function ce(e) {
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
  return /* @__PURE__ */ Zi(ce(e));
}
// @__NO_SIDE_EFFECTS__
function un(e, t = !1) {
  const r = ce(e);
  return t || (r.equals = on), r;
}
// @__NO_SIDE_EFFECTS__
function Zi(e) {
  return $ !== null && $.f & ae && (de === null ? nl([e]) : de.push(e)), e;
}
function C(e, t) {
  return $ !== null && ll() && $.f & (ae | Ht) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (de === null || !de.includes(e)) && Xi(), Wi(e, t);
}
function Wi(e, t) {
  return e.equals(t) || (e.v = t, e.version = $n(), fn(e, Re), y !== null && y.f & H && !(y.f & oe) && (X !== null && X.includes(e) ? (ve(y, Re), Vt(y)) : ke === null ? il([e]) : ke.push(e))), t;
}
function fn(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var l = r.length, i = 0; i < l; i++) {
      var a = r[i], o = a.f;
      o & Re || (ve(a, t), o & (H | Ve) && (o & ae ? fn(
        /** @type {Derived} */
        a,
        vt
      ) : Vt(
        /** @type {Effect} */
        a
      )));
    }
}
function Nt(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let z = !1;
function Ze(e) {
  z = e;
}
let P;
function Ie(e) {
  if (e === null)
    throw Nt(), Ue;
  return P = e;
}
function He() {
  return Ie(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Se(P)
  );
}
function J(e) {
  if (z) {
    if (/* @__PURE__ */ Se(P) !== null)
      throw Nt(), Ue;
    P = e;
  }
}
function Ui() {
  for (var e = 0, t = P; ; ) {
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
      /* @__PURE__ */ Se(t)
    );
    t.remove(), t = l;
  }
}
function F(e, t = null, r) {
  if (typeof e != "object" || e === null || st in e)
    return e;
  const l = Xt(e);
  if (l !== Ii && l !== $i)
    return e;
  var i = /* @__PURE__ */ new Map(), a = en(e), o = ce(0);
  a && i.set("length", ce(
    /** @type {any[]} */
    e.length
  ));
  var d;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(u, f, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Yi();
        var v = i.get(f);
        return v === void 0 ? (v = ce(c.value), i.set(f, v)) : C(v, F(c.value, d)), !0;
      },
      deleteProperty(u, f) {
        var c = i.get(f);
        if (c === void 0)
          f in u && i.set(f, ce(B));
        else {
          if (a && typeof f == "string") {
            var v = (
              /** @type {Source<number>} */
              i.get("length")
            ), g = Number(f);
            Number.isInteger(g) && g < v.v && C(v, g);
          }
          C(c, B), Dr(o);
        }
        return !0;
      },
      get(u, f, c) {
        var p;
        if (f === st)
          return e;
        var v = i.get(f), g = f in u;
        if (v === void 0 && (!g || (p = Ae(u, f)) != null && p.writable) && (v = ce(F(g ? u[f] : B, d)), i.set(f, v)), v !== void 0) {
          var m = h(v);
          return m === B ? void 0 : m;
        }
        return Reflect.get(u, f, c);
      },
      getOwnPropertyDescriptor(u, f) {
        var c = Reflect.getOwnPropertyDescriptor(u, f);
        if (c && "value" in c) {
          var v = i.get(f);
          v && (c.value = h(v));
        } else if (c === void 0) {
          var g = i.get(f), m = g == null ? void 0 : g.v;
          if (g !== void 0 && m !== B)
            return {
              enumerable: !0,
              configurable: !0,
              value: m,
              writable: !0
            };
        }
        return c;
      },
      has(u, f) {
        var m;
        if (f === st)
          return !0;
        var c = i.get(f), v = c !== void 0 && c.v !== B || Reflect.has(u, f);
        if (c !== void 0 || y !== null && (!v || (m = Ae(u, f)) != null && m.writable)) {
          c === void 0 && (c = ce(v ? F(u[f], d) : B), i.set(f, c));
          var g = h(c);
          if (g === B)
            return !1;
        }
        return v;
      },
      set(u, f, c, v) {
        var W;
        var g = i.get(f), m = f in u;
        if (a && f === "length")
          for (var p = c; p < /** @type {Source<number>} */
          g.v; p += 1) {
            var A = i.get(p + "");
            A !== void 0 ? C(A, B) : p in u && (A = ce(B), i.set(p + "", A));
          }
        g === void 0 ? (!m || (W = Ae(u, f)) != null && W.writable) && (g = ce(void 0), C(g, F(c, d)), i.set(f, g)) : (m = g.v !== B, C(g, F(c, d)));
        var G = Reflect.getOwnPropertyDescriptor(u, f);
        if (G != null && G.set && G.set.call(v, c), !m) {
          if (a && typeof f == "string") {
            var ee = (
              /** @type {Source<number>} */
              i.get("length")
            ), D = Number(f);
            Number.isInteger(D) && D >= ee.v && C(ee, D + 1);
          }
          Dr(o);
        }
        return !0;
      },
      ownKeys(u) {
        h(o);
        var f = Reflect.ownKeys(u).filter((g) => {
          var m = i.get(g);
          return m === void 0 || m.v !== B;
        });
        for (var [c, v] of i)
          v.v !== B && !(c in u) && f.push(c);
        return f;
      },
      setPrototypeOf() {
        Fi();
      }
    }
  );
}
function Dr(e, t = 1) {
  C(e, e.v + t);
}
var Yr, cn, dn;
function Wt() {
  if (Yr === void 0) {
    Yr = window;
    var e = Element.prototype, t = Node.prototype;
    cn = Ae(t, "firstChild").get, dn = Ae(t, "nextSibling").get, e.__click = void 0, e.__className = "", e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Lt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Te(e) {
  return cn.call(e);
}
// @__NO_SIDE_EFFECTS__
function Se(e) {
  return dn.call(e);
}
function K(e, t) {
  if (!z)
    return /* @__PURE__ */ Te(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Te(P)
  );
  return r === null && (r = P.appendChild(Lt())), Ie(r), r;
}
function Ot(e, t) {
  if (!z) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Te(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Se(r) : r;
  }
  return P;
}
function me(e, t = 1, r = !1) {
  let l = z ? P : e;
  for (var i; t--; )
    i = l, l = /** @type {TemplateNode} */
    /* @__PURE__ */ Se(l);
  if (!z)
    return l;
  var a = l == null ? void 0 : l.nodeType;
  if (r && a !== 3) {
    var o = Lt();
    return l === null ? i == null || i.after(o) : l.before(o), Ie(o), o;
  }
  return Ie(l), /** @type {TemplateNode} */
  l;
}
function Mi(e) {
  e.textContent = "";
}
// @__NO_SIDE_EFFECTS__
function at(e) {
  var t = ae | Re;
  y === null ? t |= Ve : y.f |= nn;
  var r = $ !== null && $.f & ae ? (
    /** @type {Derived} */
    $
  ) : null;
  const l = {
    children: null,
    ctx: Z,
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
function hn(e) {
  var t = e.children;
  if (t !== null) {
    e.children = null;
    for (var r = 0; r < t.length; r += 1) {
      var l = t[r];
      l.f & ae ? Kt(
        /** @type {Derived} */
        l
      ) : Pe(
        /** @type {Effect} */
        l
      );
    }
  }
}
function ji(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & ae))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function vn(e) {
  var t, r = y;
  he(ji(e));
  try {
    hn(e), t = Sn(e);
  } finally {
    he(r);
  }
  return t;
}
function gn(e) {
  var t = vn(e), r = (We || e.f & Ve) && e.deps !== null ? vt : H;
  ve(e, r), e.equals(t) || (e.v = t, e.version = $n());
}
function Kt(e) {
  hn(e), ct(e, 0), ve(e, Ke), e.v = e.children = e.deps = e.ctx = e.reactions = null;
}
function Bi(e) {
  y === null && $ === null && Pi(), $ !== null && $.f & Ve && Vi(), rr && Ti();
}
function Hi(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function qe(e, t, r, l = !0) {
  var i = (e & ht) !== 0, a = y, o = {
    ctx: Z,
    deps: null,
    deriveds: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Re,
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
      Xr(!0), Tt(o), o.f |= Si;
    } catch (c) {
      throw Pe(o), c;
    } finally {
      Xr(d);
    }
  } else t !== null && Vt(o);
  var u = r && o.deps === null && o.first === null && o.nodes_start === null && o.teardown === null && (o.f & nn) === 0;
  if (!u && !i && l && (a !== null && Hi(o, a), $ !== null && $.f & ae)) {
    var f = (
      /** @type {Derived} */
      $
    );
    (f.children ?? (f.children = [])).push(o);
  }
  return o;
}
function Ji(e) {
  const t = qe(dt, null, !1);
  return ve(t, H), t.teardown = e, t;
}
function pt(e) {
  Bi();
  var t = y !== null && (y.f & oe) !== 0 && Z !== null && !Z.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      Z
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: y,
      reaction: $
    });
  } else {
    var l = qt(e);
    return l;
  }
}
function _n(e) {
  const t = qe(ht, e, !0);
  return () => {
    Pe(t);
  };
}
function qt(e) {
  return qe(rn, e, !1);
}
function Qt(e) {
  return qe(dt, e, !0);
}
function Fe(e) {
  return er(e);
}
function er(e, t = 0) {
  return qe(dt | Ht | t, e, !0);
}
function It(e, t = !0) {
  return qe(dt | oe, e, !0, t);
}
function mn(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = rr, l = $;
    Zr(!0), $e(null);
    try {
      t.call(null);
    } finally {
      Zr(r), $e(l);
    }
  }
}
function bn(e) {
  var t = e.deriveds;
  if (t !== null) {
    e.deriveds = null;
    for (var r = 0; r < t.length; r += 1)
      Kt(t[r]);
  }
}
function yn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var l = r.next;
    Pe(r, t), r = l;
  }
}
function Ki(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    t.f & oe || Pe(t), t = r;
  }
}
function Pe(e, t = !0) {
  var r = !1;
  if ((t || e.f & Ni) && e.nodes_start !== null) {
    for (var l = e.nodes_start, i = e.nodes_end; l !== null; ) {
      var a = l === i ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Se(l)
      );
      l.remove(), l = a;
    }
    r = !0;
  }
  yn(e, t && !r), bn(e), ct(e, 0), ve(e, Ke);
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
    Pe(e), t && t();
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
      var i = l.next, a = (l.f & Jt) !== 0 || (l.f & oe) !== 0;
      wn(l, t, a ? r : !1), l = i;
    }
  }
}
function Or(e) {
  En(e, !0);
}
function En(e, t) {
  if (e.f & Be) {
    gt(e) && Tt(e), e.f ^= Be;
    for (var r = e.first; r !== null; ) {
      var l = r.next, i = (r.f & Jt) !== 0 || (r.f & oe) !== 0;
      En(r, i ? t : !1), r = l;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
const Qi = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let $t = !1, St = !1, Ut = [], Mt = [];
function xn() {
  $t = !1;
  const e = Ut.slice();
  Ut = [], tn(e);
}
function kn() {
  St = !1;
  const e = Mt.slice();
  Mt = [], tn(e);
}
function tr(e) {
  $t || ($t = !0, queueMicrotask(xn)), Ut.push(e);
}
function el(e) {
  St || (St = !0, Qi(kn)), Mt.push(e);
}
function tl() {
  $t && xn(), St && kn();
}
function Cn(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
const Rn = 0, rl = 1;
let wt = !1, Et = Rn, ut = !1, ft = null, Me = !1, rr = !1;
function Xr(e) {
  Me = e;
}
function Zr(e) {
  rr = e;
}
let Le = [], je = 0;
let $ = null;
function $e(e) {
  $ = e;
}
let y = null;
function he(e) {
  y = e;
}
let de = null;
function nl(e) {
  de = e;
}
let X = null, Q = 0, ke = null;
function il(e) {
  ke = e;
}
let In = 0, We = !1, Z = null;
function $n() {
  return ++In;
}
function ll() {
  return !sn;
}
function gt(e) {
  var o, d;
  var t = e.f;
  if (t & Re)
    return !0;
  if (t & vt) {
    var r = e.deps, l = (t & Ve) !== 0;
    if (r !== null) {
      var i;
      if (t & Rt) {
        for (i = 0; i < r.length; i++)
          ((o = r[i]).reactions ?? (o.reactions = [])).push(e);
        e.f ^= Rt;
      }
      for (i = 0; i < r.length; i++) {
        var a = r[i];
        if (gt(
          /** @type {Derived} */
          a
        ) && gn(
          /** @type {Derived} */
          a
        ), l && y !== null && !We && !((d = a == null ? void 0 : a.reactions) != null && d.includes(e)) && (a.reactions ?? (a.reactions = [])).push(e), a.version > e.version)
          return !0;
      }
    }
    l || ve(e, H);
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
  throw wt = !1, e;
}
function ol(e) {
  return (e.f & Ke) === 0 && (e.parent === null || (e.parent.f & Zt) === 0);
}
function At(e, t, r, l) {
  if (wt) {
    if (r === null && (wt = !1), ol(t))
      throw e;
    return;
  }
  r !== null && (wt = !0);
  {
    al(e, t);
    return;
  }
}
function Sn(e) {
  var g;
  var t = X, r = Q, l = ke, i = $, a = We, o = de, d = Z, u = e.f;
  X = /** @type {null | Value[]} */
  null, Q = 0, ke = null, $ = u & (oe | ht) ? null : e, We = !Me && (u & Ve) !== 0, de = null, Z = e.ctx;
  try {
    var f = (
      /** @type {Function} */
      (0, e.fn)()
    ), c = e.deps;
    if (X !== null) {
      var v;
      if (ct(e, Q), c !== null && Q > 0)
        for (c.length = Q + X.length, v = 0; v < X.length; v++)
          c[Q + v] = X[v];
      else
        e.deps = c = X;
      if (!We)
        for (v = Q; v < c.length; v++)
          ((g = c[v]).reactions ?? (g.reactions = [])).push(e);
    } else c !== null && Q < c.length && (ct(e, Q), c.length = Q);
    return f;
  } finally {
    X = t, Q = r, ke = l, $ = i, We = a, de = o, Z = d;
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
  r === null && t.f & ae && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (X === null || !X.includes(t)) && (ve(t, vt), t.f & (Ve | Rt) || (t.f ^= Rt), ct(
    /** @type {Derived} **/
    t,
    0
  ));
}
function ct(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var l = t; l < r.length; l++)
      sl(e, r[l]);
}
function Tt(e) {
  var t = e.f;
  if (!(t & Ke)) {
    ve(e, H);
    var r = y, l = Z;
    y = e;
    try {
      t & Ht ? Ki(e) : yn(e), bn(e), mn(e);
      var i = Sn(e);
      e.teardown = typeof i == "function" ? i : null, e.version = In;
    } catch (a) {
      At(a, e, r, l || e.ctx);
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
      if (ft !== null)
        At(e, ft, null);
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
        i.f & H || (i.f ^= H);
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
          gt(l) && (Tt(l), l.deps === null && l.first === null && l.nodes_start === null && (l.teardown === null ? pn(l) : l.fn = null));
        } catch (i) {
          At(i, l, null, l.ctx);
        }
    }
}
function fl() {
  if (ut = !1, je > 1001)
    return;
  const e = Le;
  Le = [], Ln(e), ut || (je = 0, ft = null);
}
function Vt(e) {
  Et === Rn && (ut || (ut = !0, queueMicrotask(fl))), ft = e;
  for (var t = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if (r & (ht | oe)) {
      if (!(r & H)) return;
      t.f ^= H;
    }
  }
  Le.push(t);
}
function An(e, t) {
  var r = e.first, l = [];
  e: for (; r !== null; ) {
    var i = r.f, a = (i & oe) !== 0, o = a && (i & H) !== 0, d = r.next;
    if (!o && !(i & Be))
      if (i & dt) {
        if (a)
          r.f ^= H;
        else
          try {
            gt(r) && Tt(r);
          } catch (v) {
            At(v, r, null, r.ctx);
          }
        var u = r.first;
        if (u !== null) {
          r = u;
          continue;
        }
      } else i & rn && l.push(r);
    if (d === null) {
      let v = r.parent;
      for (; v !== null; ) {
        if (e === v)
          break e;
        var f = v.next;
        if (f !== null) {
          r = f;
          continue e;
        }
        v = v.parent;
      }
    }
    r = d;
  }
  for (var c = 0; c < l.length; c++)
    u = l[c], t.push(u), An(u, t);
}
function R(e) {
  var t = Et, r = Le;
  try {
    Nn();
    const i = [];
    Et = rl, Le = i, ut = !1, Ln(r);
    var l = e == null ? void 0 : e();
    return tl(), (Le.length > 0 || i.length > 0) && R(), je = 0, ft = null, l;
  } finally {
    Et = t, Le = r;
  }
}
async function cl() {
  await Promise.resolve(), R();
}
function h(e) {
  var c;
  var t = e.f, r = (t & ae) !== 0;
  if (r && t & Ke) {
    var l = vn(
      /** @type {Derived} */
      e
    );
    return Kt(
      /** @type {Derived} */
      e
    ), l;
  }
  if ($ !== null) {
    de !== null && de.includes(e) && Oi();
    var i = $.deps;
    X === null && i !== null && i[Q] === e ? Q++ : X === null ? X = [e] : X.push(e), ke !== null && y !== null && y.f & H && !(y.f & oe) && ke.includes(e) && (ve(y, Re), Vt(y));
  } else if (r && /** @type {Derived} */
  e.deps === null)
    for (var a = (
      /** @type {Derived} */
      e
    ), o = a.parent, d = a; o !== null; )
      if (o.f & ae) {
        var u = (
          /** @type {Derived} */
          o
        );
        d = u, o = u.parent;
      } else {
        var f = (
          /** @type {Effect} */
          o
        );
        (c = f.deriveds) != null && c.includes(d) || (f.deriveds ?? (f.deriveds = [])).push(d);
        break;
      }
  return r && (a = /** @type {Derived} */
  e, gt(a) && gn(a)), e.v;
}
function Je(e) {
  const t = $;
  try {
    return $ = null, e();
  } finally {
    $ = t;
  }
}
const dl = ~(Re | vt | H);
function ve(e, t) {
  e.f = e.f & dl | t;
}
function Tn(e, t = !1, r) {
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
function Vn(e) {
  const t = Z;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const o = t.e;
    if (o !== null) {
      var r = y, l = $;
      t.e = null;
      try {
        for (var i = 0; i < o.length; i++) {
          var a = o[i];
          he(a.effect), $e(a.reaction), qt(a.fn);
        }
      } finally {
        he(r), $e(l);
      }
    }
    Z = t.p, t.m = !0;
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
  var t = $, r = y;
  $e(null), he(null);
  try {
    return e();
  } finally {
    $e(t), he(r);
  }
}
function hl(e, t, r, l = r) {
  e.addEventListener(t, () => zn(r));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), l(!0);
  } : e.__on_r = () => l(!0), Pn();
}
const Gn = /* @__PURE__ */ new Set(), jt = /* @__PURE__ */ new Set();
function vl(e, t, r, l) {
  function i(a) {
    if (l.capture || ot.call(t, a), !a.cancelBubble)
      return zn(() => r.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? tr(() => {
    t.addEventListener(e, i, l);
  }) : t.addEventListener(e, i, l), i;
}
function gl(e, t, r, l, i) {
  var a = { capture: l, passive: i }, o = vl(e, t, r, a);
  (t === document.body || t === window || t === document) && Ji(() => {
    t.removeEventListener(e, o, a);
  });
}
function _l(e) {
  for (var t = 0; t < e.length; t++)
    Gn.add(e[t]);
  for (var r of jt)
    r(e);
}
function ot(e) {
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
    var f = i.indexOf(t);
    if (f === -1)
      return;
    u <= f && (o = u);
  }
  if (a = /** @type {Element} */
  i[o] || e.target, a !== t) {
    Ct(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var c = $, v = y;
    $e(null), he(null);
    try {
      for (var g, m = []; a !== null; ) {
        var p = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var A = a["__" + l];
          if (A !== void 0 && !/** @type {any} */
          a.disabled)
            if (en(A)) {
              var [G, ...ee] = A;
              G.apply(a, [e, ...ee]);
            } else
              A.call(a, e);
        } catch (W) {
          g ? m.push(W) : g = W;
        }
        if (e.cancelBubble || p === t || p === null)
          break;
        a = p;
      }
      if (g) {
        for (let W of m)
          queueMicrotask(() => {
            throw W;
          });
        throw g;
      }
    } finally {
      e.__root = t, delete e.currentTarget, $e(c), he(v);
    }
  }
}
function Dn(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Ce(e, t) {
  var r = (
    /** @type {Effect} */
    y
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function se(e, t) {
  var r = (t & xi) !== 0, l = (t & ki) !== 0, i, a = !e.startsWith("<!>");
  return () => {
    if (z)
      return Ce(P, null), P;
    i === void 0 && (i = Dn(a ? e : "<!>" + e), r || (i = /** @type {Node} */
    /* @__PURE__ */ Te(i)));
    var o = (
      /** @type {TemplateNode} */
      l ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Te(o)
      ), u = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Ce(d, u);
    } else
      Ce(o, o);
    return o;
  };
}
function ml() {
  if (z)
    return Ce(P, null), P;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = Lt();
  return e.append(t, r), Ce(t, r), e;
}
function q(e, t) {
  if (z) {
    y.nodes_end = P, He();
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
  const r = t.target, l = z, i = P;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Te(r)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== Jr); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ Se(a);
    if (!a)
      throw Ue;
    Ze(!0), Ie(
      /** @type {Comment} */
      a
    ), He();
    const o = Fn(e, { ...t, anchor: a });
    if (P === null || P.nodeType !== 8 || /** @type {Comment} */
    P.data !== qr)
      throw Nt(), Ue;
    return Ze(!1), /**  @type {Exports} */
    o;
  } catch (o) {
    if (o === Ue)
      return t.recover === !1 && Gi(), Wt(), Mi(r), Ze(!1), Yn(e, t);
    throw o;
  } finally {
    Ze(l), Ie(i);
  }
}
const Oe = /* @__PURE__ */ new Map();
function Fn(e, { target: t, anchor: r, props: l = {}, events: i, context: a, intro: o = !0 }) {
  Wt();
  var d = /* @__PURE__ */ new Set(), u = (v) => {
    for (var g = 0; g < v.length; g++) {
      var m = v[g];
      if (!d.has(m)) {
        d.add(m);
        var p = yl(m);
        t.addEventListener(m, ot, { passive: p });
        var A = Oe.get(m);
        A === void 0 ? (document.addEventListener(m, ot, { passive: p }), Oe.set(m, 1)) : Oe.set(m, A + 1);
      }
    }
  };
  u(Ci(Gn)), jt.add(u);
  var f = void 0, c = _n(() => {
    var v = r ?? t.appendChild(Lt());
    return It(() => {
      if (a) {
        Tn({});
        var g = (
          /** @type {ComponentContext} */
          Z
        );
        g.c = a;
      }
      i && (l.$$events = i), z && Ce(
        /** @type {TemplateNode} */
        v,
        null
      ), f = e(v, l) || {}, z && (y.nodes_end = P), a && Vn();
    }), () => {
      var p;
      for (var g of d) {
        t.removeEventListener(g, ot);
        var m = (
          /** @type {number} */
          Oe.get(g)
        );
        --m === 0 ? (document.removeEventListener(g, ot), Oe.delete(g)) : Oe.set(g, m);
      }
      jt.delete(u), Bt.delete(f), v !== r && ((p = v.parentNode) == null || p.removeChild(v));
    };
  });
  return Bt.set(f, c), f;
}
let Bt = /* @__PURE__ */ new WeakMap();
function wl(e) {
  const t = Bt.get(e);
  t && t();
}
function xe(e, t, r = !1) {
  z && He();
  var l = e, i = null, a = null, o = B, d = r ? Jt : 0, u = !1;
  const f = (v, g = !0) => {
    u = !0, c(g, v);
  }, c = (v, g) => {
    if (o === (o = v)) return;
    let m = !1;
    if (z) {
      const p = (
        /** @type {Comment} */
        l.data === Kr
      );
      !!o === p && (l = Ui(), Ie(l), Ze(!1), m = !0);
    }
    o ? (i ? Or(i) : g && (i = It(() => g(l))), a && Fr(a, () => {
      a = null;
    })) : (a ? Or(a) : g && (a = It(() => g(l))), i && Fr(i, () => {
      i = null;
    })), m && Ze(!0);
  };
  er(() => {
    u = !1, t(f), u || c(null, null);
  }, d), z && (l = P);
}
function Xe(e, t, r, l, i) {
  var a = e, o = "", d;
  er(() => {
    if (o === (o = t() ?? "")) {
      z && He();
      return;
    }
    d !== void 0 && (Pe(d), d = void 0), o !== "" && (d = It(() => {
      if (z) {
        P.data;
        for (var u = He(), f = u; u !== null && (u.nodeType !== 8 || /** @type {Comment} */
        u.data !== ""); )
          f = u, u = /** @type {TemplateNode} */
          /* @__PURE__ */ Se(u);
        if (u === null)
          throw Nt(), Ue;
        Ce(P, f), a = Ie(u);
        return;
      }
      var c = o + "", v = Dn(c);
      Ce(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Te(v),
        /** @type {TemplateNode} */
        v.lastChild
      ), a.before(v);
    }));
  });
}
function El(e, t, r, l, i) {
  var d;
  z && He();
  var a = (d = t.$$slots) == null ? void 0 : d[r], o = !1;
  a === !0 && (a = t.children, o = !0), a === void 0 || a(e, o ? () => l : l);
}
function xl(e, t) {
  tr(() => {
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
  if (z) {
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
function le(e, t, r, l) {
  var i = e.__attributes ?? (e.__attributes = {});
  z && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || i[t] !== (i[t] = r) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[Li] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Cl(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
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
  hl(e, "change", (l) => {
    var i = l ? e.defaultChecked : e.checked;
    r(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (z && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  Je(t) == null) && r(e.checked), Qt(() => {
    var l = t();
    e.checked = !!l;
  });
}
function jr(e, t) {
  return e === t || (e == null ? void 0 : e[st]) === t;
}
function Br(e = {}, t, r, l) {
  return qt(() => {
    var i, a;
    return Qt(() => {
      i = a, a = [], Je(() => {
        e !== r(...a) && (t(e, ...a), i && jr(r(...i), e) && t(null, ...i));
      });
    }), () => {
      tr(() => {
        a && jr(r(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function On(e) {
  Z === null && Cn(), pt(() => {
    const t = Je(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function $l(e) {
  Z === null && Cn(), On(() => () => Je(e));
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
  for (var t = y, r = y; t !== null && !(t.f & (oe | ht)); )
    t = t.parent;
  try {
    return he(t), e();
  } finally {
    he(r);
  }
}
function L(e, t, r, l) {
  var ye;
  var i = (r & yi) !== 0, a = !sn, o = (r & wi) !== 0, d = (r & Ei) !== 0, u = !1, f;
  o ? [f, u] = Sl(() => (
    /** @type {V} */
    e[t]
  )) : f = /** @type {V} */
  e[t];
  var c = st in e || ln in e, v = ((ye = Ae(e, t)) == null ? void 0 : ye.set) ?? (c && o && t in e ? (S) => e[t] = S : void 0), g = (
    /** @type {V} */
    l
  ), m = !0, p = !1, A = () => (p = !0, m && (m = !1, d ? g = Je(
    /** @type {() => V} */
    l
  ) : g = /** @type {V} */
  l), g);
  f === void 0 && l !== void 0 && (v && a && Di(), f = A(), v && v(f));
  var G;
  if (G = () => {
    var S = (
      /** @type {V} */
      e[t]
    );
    return S === void 0 ? A() : (m = !0, p = !1, S);
  }, !(r & pi))
    return G;
  if (v) {
    var ee = e.$$legacy;
    return function(S, U) {
      return arguments.length > 0 ? ((!U || ee || u) && v(U ? G() : S), S) : G();
    };
  }
  var D = !1, W = !1, ge = /* @__PURE__ */ un(f), O = Nl(
    () => /* @__PURE__ */ at(() => {
      var S = G(), U = h(ge);
      return D ? (D = !1, W = !0, U) : (W = !1, ge.v = S);
    })
  );
  return i || (O.equals = on), function(S, U) {
    if (arguments.length > 0) {
      const ue = U ? h(O) : o ? F(S) : S;
      return O.equals(ue) || (D = !0, C(ge, ue), p && g !== void 0 && (g = ue), Je(() => h(O))), S;
    }
    return h(O);
  };
}
function Ll(e) {
  return new Al(e);
}
var be, re;
class Al {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    Yt(this, be);
    /** @type {Record<string, any>} */
    Yt(this, re);
    var a;
    var r = /* @__PURE__ */ new Map(), l = (o, d) => {
      var u = /* @__PURE__ */ un(d);
      return r.set(o, u), u;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(o, d) {
          return h(r.get(d) ?? l(d, Reflect.get(o, d)));
        },
        has(o, d) {
          return d === ln ? !0 : (h(r.get(d) ?? l(d, Reflect.get(o, d))), Reflect.has(o, d));
        },
        set(o, d, u) {
          return C(r.get(d) ?? l(d, u), u), Reflect.set(o, d, u);
        }
      }
    );
    Ft(this, re, (t.hydrate ? pl : Yn)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((a = t == null ? void 0 : t.props) != null && a.$$host) || t.sync === !1) && R(), Ft(this, be, i.$$events);
    for (const o of Object.keys(j(this, re)))
      o === "$set" || o === "$destroy" || o === "$on" || Ct(this, o, {
        get() {
          return j(this, re)[o];
        },
        /** @param {any} value */
        set(d) {
          j(this, re)[o] = d;
        },
        enumerable: !0
      });
    j(this, re).$set = /** @param {Record<string, any>} next */
    (o) => {
      Object.assign(i, o);
    }, j(this, re).$destroy = () => {
      wl(j(this, re));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    j(this, re).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    j(this, be)[t] = j(this, be)[t] || [];
    const l = (...i) => r.call(this, ...i);
    return j(this, be)[t].push(l), () => {
      j(this, be)[t] = j(this, be)[t].filter(
        /** @param {any} fn */
        (i) => i !== l
      );
    };
  }
  $destroy() {
    j(this, re).$destroy();
  }
}
be = new WeakMap(), re = new WeakMap();
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
      const r = {}, l = Tl(this);
      for (const i of this.$$s)
        i in l && (i === "default" && !this.$$d.children ? (this.$$d.children = t(i), r.default = !0) : r[i] = t(i));
      for (const i of this.attributes) {
        const a = this.$$g_p(i.name);
        a in this.$$d || (this.$$d[a] = xt(a, i.value, this.$$p_d, "toProp"));
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
        Qt(() => {
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
        var v;
        u = xt(d, u, t), this.$$d[d] = u;
        var f = this.$$c;
        if (f) {
          var c = (v = Ae(f, d)) == null ? void 0 : v.get;
          c ? f[d] = u : f.$set({ [d]: u });
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
    for (let c = l; c <= r; c += 1) {
      if (a.signal.aborted || !u || !f)
        return null;
      try {
        const v = await crypto.subtle.decrypt(
          {
            name: i,
            iv: Fl(c)
          },
          u,
          f
        );
        if (v)
          return {
            clearText: new TextDecoder().decode(v),
            took: Date.now() - o
          };
      } catch {
      }
    }
    return null;
  };
  let u = null, f = null;
  try {
    f = Yl(e);
    const c = await crypto.subtle.digest(
      "SHA-256",
      Zn.encode(t)
    );
    u = await crypto.subtle.importKey(
      "raw",
      c,
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
var k = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(k || {}), Xl = /* @__PURE__ */ se('<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="svelte-ddsc3z"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25" class="svelte-ddsc3z"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor" class="altcha-spinner svelte-ddsc3z"></path></svg>'), Zl = /* @__PURE__ */ se('<span role="status" aria-live="polite" class="svelte-ddsc3z"><!></span> <input type="hidden" class="svelte-ddsc3z">', 1), Wl = /* @__PURE__ */ se('<span role="status" aria-live="polite" class="svelte-ddsc3z"><!></span>'), Ul = /* @__PURE__ */ se('<label class="svelte-ddsc3z"><!></label>'), Ml = /* @__PURE__ */ se('<div class="svelte-ddsc3z"><a target="_blank" class="altcha-logo svelte-ddsc3z"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-ddsc3z"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor" class="svelte-ddsc3z"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor" class="svelte-ddsc3z"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor" class="svelte-ddsc3z"></path></svg></a></div>'), jl = /* @__PURE__ */ se('<div class="svelte-ddsc3z"><!></div>'), Bl = /* @__PURE__ */ se('<div class="svelte-ddsc3z"><!></div>'), Hl = /* @__PURE__ */ se('<div class="altcha-error svelte-ddsc3z"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="svelte-ddsc3z"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" class="svelte-ddsc3z"></path></svg> <!></div>'), Jl = /* @__PURE__ */ se('<div class="altcha-footer svelte-ddsc3z"><div class="svelte-ddsc3z"><!></div></div>'), Kl = /* @__PURE__ */ se('<div class="altcha-anchor-arrow svelte-ddsc3z"></div>'), ql = /* @__PURE__ */ se('<!> <div class="altcha svelte-ddsc3z"><div class="altcha-main svelte-ddsc3z"><!> <div class="altcha-checkbox svelte-ddsc3z"><input type="checkbox" class="svelte-ddsc3z"></div> <div class="altcha-label svelte-ddsc3z"><!></div> <!></div> <!> <!> <!></div>', 1);
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
  let r = L(t, "auto", 7, void 0), l = L(t, "blockspam", 7, void 0), i = L(t, "challengeurl", 7, void 0), a = L(t, "challengejson", 7, void 0), o = L(t, "customfetch", 7, void 0), d = L(t, "debug", 7, !1), u = L(t, "delay", 7, 0), f = L(t, "expire", 7, void 0), c = L(t, "floating", 7, void 0), v = L(t, "floatinganchor", 7, void 0), g = L(t, "floatingoffset", 7, void 0), m = L(t, "hidefooter", 7, !1), p = L(t, "hidelogo", 7, !1), A = L(t, "name", 7, "altcha"), G = L(t, "maxnumber", 7, 1e6), ee = L(t, "mockerror", 7, !1), D = L(t, "obfuscated", 7, void 0), W = L(t, "plugins", 7, void 0), ge = L(t, "refetchonexpire", 7, !0), O = L(t, "spamfilter", 7, !1), ye = L(t, "strings", 7, void 0), S = L(t, "test", 7, !1), U = L(t, "verifyurl", 7, void 0), ue = L(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), Qe = L(t, "workerurl", 7, void 0);
  const nr = ["SHA-256", "SHA-384", "SHA-512"], ir = "Visit Altcha.org", lr = "https://altcha.org/", et = (n, s) => t.$$host.dispatchEvent(new CustomEvent(n, { detail: s })), ar = (Tr = (Ar = document.documentElement.lang) == null ? void 0 : Ar.split("-")) == null ? void 0 : Tr[0], Pt = /* @__PURE__ */ at(() => {
    var n;
    return i() && new URL(i(), location.origin).host.endsWith(".altcha.org") && !!((n = i()) != null && n.includes("apiKey=ckey_"));
  }), zt = /* @__PURE__ */ at(() => a() ? mr(a()) : void 0), or = /* @__PURE__ */ at(() => ye() ? mr(ye()) : {}), te = /* @__PURE__ */ at(() => {
    var n;
    return {
      ariaLinkLabel: ir,
      error: "Verification failed. Try again later.",
      expired: "Verification expired. Try again.",
      footer: `Protected by <a href="${lr}" target="_blank" aria-label="${((n = h(or)) == null ? void 0 : n.ariaLinkLabel) || ir}">ALTCHA</a>`,
      label: "I'm not a robot",
      verified: "Verified",
      verifying: "Verifying...",
      waitAlert: "Verifying... please wait.",
      ...h(or)
    };
  });
  let ze = Ye(!1), M = Ye(void 0), tt = Ye(null), Ge = null, w = null, pe = Ye(null), fe = null, Ne = Ye(null), we = [], E = Ye(F(k.UNVERIFIED));
  pt(() => {
    et("statechange", {
      payload: h(Ne),
      state: h(E)
    });
  }), pt(() => {
    qn(h(pe));
  }), pt(() => {
    Qn(h(E));
  }), $l(() => {
    Un(), w && (w.removeEventListener("submit", hr), w.removeEventListener("reset", vr), w.removeEventListener("focusin", dr), w = null), fe && (clearTimeout(fe), fe = null), document.removeEventListener("click", fr), document.removeEventListener("scroll", cr), window.removeEventListener("resize", _r);
  }), On(() => {
    var n;
    N("mounted", "1.1.0-beta.1"), N("workers", ue()), Jn(), N("plugins", we.length ? we.map((s) => s.constructor.pluginName).join(", ") : "none"), S() && N("using test mode"), f() && mt(f()), r() !== void 0 && N("auto", r()), c() !== void 0 && br(c()), w = (n = h(M)) == null ? void 0 : n.closest("form"), w && (w.addEventListener("submit", hr, { capture: !0 }), w.addEventListener("reset", vr), r() === "onfocus" && w.addEventListener("focusin", dr)), r() === "onload" && (D() ? rt() : Ee()), h(Pt) && (m() || p()) && N("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      et("load");
    });
  });
  function sr(n, s) {
    return btoa(JSON.stringify({
      algorithm: n.algorithm,
      challenge: n.challenge,
      number: s.number,
      salt: n.salt,
      signature: n.signature,
      test: S() ? !0 : void 0,
      took: s.took
    }));
  }
  function Un() {
    for (const n of we)
      n.destroy();
  }
  function ur() {
    i() && ge() && h(E) === k.VERIFIED ? Ee() : nt(k.EXPIRED, h(te).expired);
  }
  async function Mn() {
    var n;
    if (ee())
      throw N("mocking error"), new Error("Mocked error.");
    if (h(zt))
      return N("using provided json data"), h(zt);
    if (S())
      return N("generating test challenge", { test: S() }), zl(typeof S() != "boolean" ? +S() : void 0);
    {
      if (!i() && w) {
        const T = w.getAttribute("action");
        T != null && T.includes("/form/") && i(T + "/altcha");
      }
      if (!i())
        throw new Error("Attribute challengeurl not set.");
      N("fetching challenge from", i());
      let s = null, _ = null;
      if (o())
        if (N("using customfetch"), typeof o() == "string") {
          if (s = globalThis[o()] || null, !s)
            throw new Error(`Custom fetch function not found: ${o()}`);
        } else
          s = o();
      const x = {
        headers: O() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      };
      if (s) {
        if (_ = await s(i(), x), !_ || !(_ instanceof Response))
          throw new Error("Custom fetch function did not return a response.");
      } else
        _ = await fetch(i(), x);
      if (_.status !== 200)
        throw new Error(`Server responded with ${_.status}.`);
      const V = _.headers.get("Expires"), I = _.headers.get("X-Altcha-Config"), b = await _.json(), Y = new URLSearchParams((n = b.salt.split("?")) == null ? void 0 : n[1]), _e = Y.get("expires") || Y.get("expire");
      if (_e) {
        const T = new Date(+_e * 1e3), ne = isNaN(T.getTime()) ? 0 : T.getTime() - Date.now();
        ne > 0 && mt(ne);
      }
      if (I)
        try {
          const T = JSON.parse(I);
          T && typeof T == "object" && (T.verifyurl && (T.verifyurl = new URL(T.verifyurl, new URL(i())).toString()), wr(T));
        } catch (T) {
          N("unable to configure from X-Altcha-Config", T);
        }
      if (!f() && (V != null && V.length)) {
        const T = Date.parse(V);
        if (T) {
          const ne = T - Date.now();
          ne > 0 && mt(ne);
        }
      }
      return b;
    }
  }
  function jn(n) {
    var _;
    const s = w == null ? void 0 : w.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((_ = s == null ? void 0 : s.value) == null ? void 0 : _.slice(s.value.indexOf("@"))) || void 0;
  }
  function Bn() {
    return O() === "ipAddress" ? {
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
    } : typeof O() == "object" ? O() : {
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
      (_, x) => {
        const V = x.name, I = x.value;
        return V && I && (_[V] = /\n/.test(I) ? I.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : I), _;
      },
      {}
    );
  }
  function Jn() {
    const n = W() !== void 0 ? W().split(",") : void 0;
    for (const s of globalThis.altchaPlugins)
      (!n || n.includes(s.pluginName)) && we.push(new s({
        el: h(M),
        clarify: rt,
        dispatch: et,
        getConfiguration: Er,
        getFloatingAnchor: xr,
        getState: kr,
        log: N,
        reset: nt,
        solve: pr,
        setState: Rr,
        setFloatingAnchor: Cr,
        verify: Ee
      }));
  }
  function N(...n) {
    (d() || n.some((s) => s instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${A()}]`, ...n);
  }
  function Kn() {
    [k.UNVERIFIED, k.ERROR, k.EXPIRED].includes(h(E)) ? O() !== !1 && (w == null ? void 0 : w.reportValidity()) === !1 ? C(ze, !1) : D() ? rt() : Ee() : C(ze, !0);
  }
  function fr(n) {
    const s = n.target;
    c() && s && !h(M).contains(s) && (h(E) === k.VERIFIED || r() === "off" && h(E) === k.UNVERIFIED) && (h(M).style.display = "none");
  }
  function cr() {
    c() && h(E) !== k.UNVERIFIED && _t();
  }
  function qn(n) {
    for (const s of we)
      typeof s.onErrorChange == "function" && s.onErrorChange(h(pe));
  }
  function dr(n) {
    h(E) === k.UNVERIFIED && Ee();
  }
  function hr(n) {
    w && r() === "onsubmit" ? h(E) === k.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), Ee().then(() => {
      w == null || w.requestSubmit();
    })) : h(E) !== k.VERIFIED && (n.preventDefault(), n.stopPropagation(), h(E) === k.VERIFYING && gr()) : w && c() && r() === "off" && h(E) === k.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), h(M).style.display = "block", _t());
  }
  function vr() {
    nt();
  }
  function gr() {
    h(E) === k.VERIFYING && h(te).waitAlert && alert(h(te).waitAlert);
  }
  function Qn(n) {
    for (const s of we)
      typeof s.onStateChange == "function" && s.onStateChange(h(E));
    c() && h(E) !== k.UNVERIFIED && requestAnimationFrame(() => {
      _t();
    }), C(ze, h(E) === k.VERIFIED);
  }
  function _r() {
    c() && _t();
  }
  function mr(n) {
    return JSON.parse(n);
  }
  function _t(n = 20) {
    if (h(M))
      if (Ge || (Ge = (v() ? document.querySelector(v()) : w == null ? void 0 : w.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || w), Ge) {
        const s = parseInt(g(), 10) || 12, _ = Ge.getBoundingClientRect(), x = h(M).getBoundingClientRect(), V = document.documentElement.clientHeight, I = document.documentElement.clientWidth, b = c() === "auto" ? _.bottom + x.height + s + n > V : c() === "top", Y = Math.max(n, Math.min(I - n - x.width, _.left + _.width / 2 - x.width / 2));
        if (b ? h(M).style.top = `${_.top - (x.height + s)}px` : h(M).style.top = `${_.bottom + s}px`, h(M).style.left = `${Y}px`, h(M).setAttribute("data-floating", b ? "top" : "bottom"), h(tt)) {
          const _e = h(tt).getBoundingClientRect();
          h(tt).style.left = _.left - Y + _.width / 2 - _e.width / 2 + "px";
        }
      } else
        N("unable to find floating anchor element");
  }
  async function ei(n) {
    if (!U())
      throw new Error("Attribute verifyurl not set.");
    N("requesting server verification from", U());
    const s = { payload: n };
    if (O() !== !1) {
      const {
        blockedCountries: V,
        classifier: I,
        disableRules: b,
        email: Y,
        expectedLanguages: _e,
        expectedCountries: T,
        fields: ne,
        ipAddress: lt,
        text: hi,
        timeZone: Vr
      } = Bn();
      s.blockedCountries = V, s.classifier = I, s.disableRules = b, s.email = Y === !1 ? void 0 : jn(Y), s.expectedCountries = T, s.expectedLanguages = _e || (ar ? [ar] : void 0), s.fields = ne === !1 ? void 0 : Hn(ne), s.ipAddress = lt === !1 ? void 0 : lt || "auto", s.text = hi, s.timeZone = Vr === !1 ? void 0 : Vr || Dl();
    }
    const _ = await fetch(U(), {
      body: JSON.stringify(s),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (_.status !== 200)
      throw new Error(`Server responded with ${_.status}.`);
    const x = await _.json();
    if (x != null && x.payload && C(Ne, F(x.payload)), et("serververification", x), l() && x.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  function mt(n) {
    N("expire", n), fe && (clearTimeout(fe), fe = null), n < 1 ? ur() : fe = setTimeout(ur, n);
  }
  function br(n) {
    N("floating", n), c() !== n && (h(M).style.left = "", h(M).style.top = ""), c(n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : c()), c() ? (r() || r("onsubmit"), document.addEventListener("scroll", cr), document.addEventListener("click", fr), window.addEventListener("resize", _r)) : r() === "onsubmit" && r(void 0);
  }
  function yr(n) {
    if (!n.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (n.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!nr.includes(n.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${nr.join(", ")}`);
    if (!n.challenge || n.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!n.salt || n.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function pr(n) {
    let s = null;
    if ("Worker" in window) {
      try {
        s = await ti(n, n.maxnumber);
      } catch (_) {
        N(_);
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
  async function ti(n, s = typeof S() == "number" ? S() : G(), _ = Math.ceil(ue())) {
    const x = [];
    _ = Math.min(16, Math.max(1, _));
    for (let b = 0; b < _; b++)
      x.push(altchaCreateWorker(Qe()));
    const V = Math.ceil(s / _), I = await Promise.all(x.map((b, Y) => {
      const _e = Y * V;
      return new Promise((T) => {
        b.addEventListener("message", (ne) => {
          if (ne.data)
            for (const lt of x)
              lt !== b && lt.postMessage({ type: "abort" });
          T(ne.data);
        }), b.postMessage({
          payload: n,
          max: _e + V,
          start: _e,
          type: "work"
        });
      });
    }));
    for (const b of x)
      b.terminate();
    return I.find((b) => !!b) || null;
  }
  async function rt() {
    if (!D()) {
      C(E, F(k.ERROR));
      return;
    }
    const n = we.find((s) => s.constructor.pluginName === "obfuscation");
    if (!n || !("clarify" in n)) {
      C(E, F(k.ERROR)), N("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in n && typeof n.clarify == "function")
      return n.clarify();
  }
  function wr(n) {
    n.obfuscated !== void 0 && D(n.obfuscated), n.auto !== void 0 && (r(n.auto), r() === "onload" && (D() ? rt() : Ee())), n.blockspam !== void 0 && l(!!n.blockspam), n.customfetch !== void 0 && o(n.customfetch), n.floatinganchor !== void 0 && v(n.floatinganchor), n.delay !== void 0 && u(n.delay), n.floatingoffset !== void 0 && g(n.floatingoffset), n.floating !== void 0 && br(n.floating), n.expire !== void 0 && (mt(n.expire), f(n.expire)), n.challenge && (a(typeof n.challenge == "string" ? n.challenge : JSON.stringify(n.challenge)), yr(h(zt))), n.challengeurl !== void 0 && i(n.challengeurl), n.debug !== void 0 && d(!!n.debug), n.hidefooter !== void 0 && m(!!n.hidefooter), n.hidelogo !== void 0 && p(!!n.hidelogo), n.maxnumber !== void 0 && G(+n.maxnumber), n.mockerror !== void 0 && ee(!!n.mockerror), n.name !== void 0 && A(n.name), n.refetchonexpire !== void 0 && ge(!!n.refetchonexpire), n.spamfilter !== void 0 && O(typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && ye(typeof n.strings == "string" ? n.strings : JSON.stringify(n.strings)), n.test !== void 0 && S(typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && U(n.verifyurl), n.workers !== void 0 && ue(+n.workers), n.workerurl !== void 0 && Qe(n.workerurl);
  }
  function Er() {
    return {
      auto: r(),
      blockspam: l(),
      challengeurl: i(),
      debug: d(),
      delay: u(),
      expire: f(),
      floating: c(),
      floatinganchor: v(),
      floatingoffset: g(),
      hidefooter: m(),
      hidelogo: p(),
      name: A(),
      maxnumber: G(),
      mockerror: ee(),
      obfuscated: D(),
      refetchonexpire: ge(),
      spamfilter: O(),
      strings: h(te),
      test: S(),
      verifyurl: U(),
      workers: ue(),
      workerurl: Qe()
    };
  }
  function xr() {
    return Ge;
  }
  function ri(n) {
    return we.find((s) => s.constructor.pluginName === n);
  }
  function kr() {
    return h(E);
  }
  function nt(n = k.UNVERIFIED, s = null) {
    fe && (clearTimeout(fe), fe = null), C(ze, !1), C(pe, F(s)), C(Ne, null), C(E, F(n));
  }
  function Cr(n) {
    Ge = n;
  }
  function Rr(n, s = null) {
    C(E, F(n)), C(pe, F(s));
  }
  async function Ee() {
    return nt(k.VERIFYING), await new Promise((n) => setTimeout(n, u() || 0)), Mn().then((n) => (yr(n), N("challenge", n), pr(n))).then(({ data: n, solution: s }) => {
      if (N("solution", s), "challenge" in n && s && !("clearText" in s))
        if ((s == null ? void 0 : s.number) !== void 0) {
          if (U())
            return ei(sr(n, s));
          C(Ne, F(sr(n, s))), N("payload", h(Ne));
        } else
          throw N("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      C(E, F(k.VERIFIED)), N("verified"), cl().then(() => {
        et("verified", { payload: h(Ne) });
      });
    }).catch((n) => {
      N(n), C(E, F(k.ERROR)), C(pe, F(n.message));
    });
  }
  var Ir = ql(), $r = Ot(Ir);
  El($r, t, "default", {});
  var it = me($r, 2), Gt = K(it), Sr = K(Gt);
  {
    var ni = (n) => {
      var s = Xl();
      q(n, s);
    };
    xe(Sr, (n) => {
      h(E) === k.VERIFYING && n(ni);
    });
  }
  var bt = me(Sr, 2), De = K(bt);
  Ur(De), De.__change = Kn, J(bt);
  var Dt = me(bt, 2), ii = K(Dt);
  {
    var li = (n) => {
      var s = Zl(), _ = Ot(s), x = K(_);
      Xe(x, () => h(te).verified), J(_);
      var V = me(_, 2);
      Ur(V), Fe(() => {
        le(V, "name", A()), kl(V, h(Ne));
      }), q(n, s);
    }, ai = (n) => {
      var s = ml(), _ = Ot(s);
      {
        var x = (I) => {
          var b = Wl(), Y = K(b);
          Xe(Y, () => h(te).verifying), J(b), q(I, b);
        }, V = (I) => {
          var b = Ul(), Y = K(b);
          Xe(Y, () => h(te).label), J(b), Fe(() => le(b, "for", `${A() ?? ""}_checkbox`)), q(I, b);
        };
        xe(
          _,
          (I) => {
            h(E) === k.VERIFYING ? I(x) : I(V, !1);
          },
          !0
        );
      }
      q(n, s);
    };
    xe(ii, (n) => {
      h(E) === k.VERIFIED ? n(li) : n(ai, !1);
    });
  }
  J(Dt);
  var oi = me(Dt, 2);
  {
    var si = (n) => {
      var s = Ml(), _ = K(s);
      le(_, "href", lr), J(s), Fe(() => le(_, "aria-label", h(te).ariaLinkLabel)), q(n, s);
    };
    xe(oi, (n) => {
      (p() !== !0 || h(Pt)) && n(si);
    });
  }
  J(Gt);
  var Nr = me(Gt, 2);
  {
    var ui = (n) => {
      var s = Hl(), _ = me(K(s), 2);
      {
        var x = (I) => {
          var b = jl(), Y = K(b);
          Xe(Y, () => h(te).expired), J(b), Fe(() => le(b, "title", h(pe))), q(I, b);
        }, V = (I) => {
          var b = Bl(), Y = K(b);
          Xe(Y, () => h(te).error), J(b), Fe(() => le(b, "title", h(pe))), q(I, b);
        };
        xe(_, (I) => {
          h(E) === k.EXPIRED ? I(x) : I(V, !1);
        });
      }
      J(s), q(n, s);
    };
    xe(Nr, (n) => {
      (h(pe) || h(E) === k.EXPIRED) && n(ui);
    });
  }
  var Lr = me(Nr, 2);
  {
    var fi = (n) => {
      var s = Jl(), _ = K(s), x = K(_);
      Xe(x, () => h(te).footer), J(_), J(s), q(n, s);
    };
    xe(Lr, (n) => {
      h(te).footer && (m() !== !0 || h(Pt)) && n(fi);
    });
  }
  var ci = me(Lr, 2);
  {
    var di = (n) => {
      var s = Kl();
      Br(s, (_) => C(tt, _), () => h(tt)), q(n, s);
    };
    xe(ci, (n) => {
      c() && n(di);
    });
  }
  return J(it), Br(it, (n) => C(M, n), () => h(M)), Fe(() => {
    le(it, "data-state", h(E)), le(it, "data-floating", c()), Rl(bt, "altcha-hidden", h(E) === k.VERIFYING), le(De, "id", `${A() ?? ""}_checkbox`), De.required = r() !== "onsubmit" && (!c() || r() !== "off");
  }), gl("invalid", De, gr), Il(De, () => h(ze), (n) => C(ze, n)), q(e, Ir), Vn({
    clarify: rt,
    configure: wr,
    getConfiguration: Er,
    getFloatingAnchor: xr,
    getPlugin: ri,
    getState: kr,
    reset: nt,
    setFloatingAnchor: Cr,
    setState: Rr,
    verify: Ee,
    get auto() {
      return r();
    },
    set auto(n = void 0) {
      r(n), R();
    },
    get blockspam() {
      return l();
    },
    set blockspam(n = void 0) {
      l(n), R();
    },
    get challengeurl() {
      return i();
    },
    set challengeurl(n = void 0) {
      i(n), R();
    },
    get challengejson() {
      return a();
    },
    set challengejson(n = void 0) {
      a(n), R();
    },
    get customfetch() {
      return o();
    },
    set customfetch(n = void 0) {
      o(n), R();
    },
    get debug() {
      return d();
    },
    set debug(n = !1) {
      d(n), R();
    },
    get delay() {
      return u();
    },
    set delay(n = 0) {
      u(n), R();
    },
    get expire() {
      return f();
    },
    set expire(n = void 0) {
      f(n), R();
    },
    get floating() {
      return c();
    },
    set floating(n = void 0) {
      c(n), R();
    },
    get floatinganchor() {
      return v();
    },
    set floatinganchor(n = void 0) {
      v(n), R();
    },
    get floatingoffset() {
      return g();
    },
    set floatingoffset(n = void 0) {
      g(n), R();
    },
    get hidefooter() {
      return m();
    },
    set hidefooter(n = !1) {
      m(n), R();
    },
    get hidelogo() {
      return p();
    },
    set hidelogo(n = !1) {
      p(n), R();
    },
    get name() {
      return A();
    },
    set name(n = "altcha") {
      A(n), R();
    },
    get maxnumber() {
      return G();
    },
    set maxnumber(n = 1e6) {
      G(n), R();
    },
    get mockerror() {
      return ee();
    },
    set mockerror(n = !1) {
      ee(n), R();
    },
    get obfuscated() {
      return D();
    },
    set obfuscated(n = void 0) {
      D(n), R();
    },
    get plugins() {
      return W();
    },
    set plugins(n = void 0) {
      W(n), R();
    },
    get refetchonexpire() {
      return ge();
    },
    set refetchonexpire(n = !0) {
      ge(n), R();
    },
    get spamfilter() {
      return O();
    },
    set spamfilter(n = !1) {
      O(n), R();
    },
    get strings() {
      return ye();
    },
    set strings(n = void 0) {
      ye(n), R();
    },
    get test() {
      return S();
    },
    set test(n = !1) {
      S(n), R();
    },
    get verifyurl() {
      return U();
    },
    set verifyurl(n = void 0) {
      U(n), R();
    },
    get workers() {
      return ue();
    },
    set workers(n = Math.min(16, navigator.hardwareConcurrency || 8)) {
      ue(n), R();
    },
    get workerurl() {
      return Qe();
    },
    set workerurl(n = void 0) {
      Qe(n), R();
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
