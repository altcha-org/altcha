var vi = Object.defineProperty;
var Vr = (e) => {
  throw TypeError(e);
};
var hi = (e, t, r) => t in e ? vi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var le = (e, t, r) => hi(e, typeof t != "symbol" ? t + "" : t, r), Pr = (e, t, r) => t.has(e) || Vr("Cannot " + r);
var j = (e, t, r) => (Pr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Dt = (e, t, r) => t.has(e) ? Vr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), Yt = (e, t, r, l) => (Pr(e, t, "write to private field"), l ? l.call(e, r) : t.set(e, r), r);
const Br = "KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2NvbnN0IGQ9bmV3IFRleHRFbmNvZGVyO2Z1bmN0aW9uIHAoZSl7cmV0dXJuWy4uLm5ldyBVaW50OEFycmF5KGUpXS5tYXAodD0+dC50b1N0cmluZygxNikucGFkU3RhcnQoMiwiMCIpKS5qb2luKCIiKX1hc3luYyBmdW5jdGlvbiBiKGUsdCxyKXtpZih0eXBlb2YgY3J5cHRvPiJ1Inx8ISgic3VidGxlImluIGNyeXB0byl8fCEoImRpZ2VzdCJpbiBjcnlwdG8uc3VidGxlKSl0aHJvdyBuZXcgRXJyb3IoIldlYiBDcnlwdG8gaXMgbm90IGF2YWlsYWJsZS4gU2VjdXJlIGNvbnRleHQgaXMgcmVxdWlyZWQgKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL1NlY3VyaXR5L1NlY3VyZV9Db250ZXh0cykuIik7cmV0dXJuIHAoYXdhaXQgY3J5cHRvLnN1YnRsZS5kaWdlc3Qoci50b1VwcGVyQ2FzZSgpLGQuZW5jb2RlKGUrdCkpKX1mdW5jdGlvbiB3KGUsdCxyPSJTSEEtMjU2IixuPTFlNixzPTApe2NvbnN0IG89bmV3IEFib3J0Q29udHJvbGxlcixhPURhdGUubm93KCk7cmV0dXJue3Byb21pc2U6KGFzeW5jKCk9Pntmb3IobGV0IGM9cztjPD1uO2MrPTEpe2lmKG8uc2lnbmFsLmFib3J0ZWQpcmV0dXJuIG51bGw7aWYoYXdhaXQgYih0LGMscik9PT1lKXJldHVybntudW1iZXI6Yyx0b29rOkRhdGUubm93KCktYX19cmV0dXJuIG51bGx9KSgpLGNvbnRyb2xsZXI6b319ZnVuY3Rpb24gaChlKXtjb25zdCB0PWF0b2IoZSkscj1uZXcgVWludDhBcnJheSh0Lmxlbmd0aCk7Zm9yKGxldCBuPTA7bjx0Lmxlbmd0aDtuKyspcltuXT10LmNoYXJDb2RlQXQobik7cmV0dXJuIHJ9ZnVuY3Rpb24gZyhlLHQ9MTIpe2NvbnN0IHI9bmV3IFVpbnQ4QXJyYXkodCk7Zm9yKGxldCBuPTA7bjx0O24rKylyW25dPWUlMjU2LGU9TWF0aC5mbG9vcihlLzI1Nik7cmV0dXJuIHJ9YXN5bmMgZnVuY3Rpb24gbShlLHQ9IiIscj0xZTYsbj0wKXtjb25zdCBzPSJBRVMtR0NNIixvPW5ldyBBYm9ydENvbnRyb2xsZXIsYT1EYXRlLm5vdygpLGw9YXN5bmMoKT0+e2ZvcihsZXQgdT1uO3U8PXI7dSs9MSl7aWYoby5zaWduYWwuYWJvcnRlZHx8IWN8fCF5KXJldHVybiBudWxsO3RyeXtjb25zdCBmPWF3YWl0IGNyeXB0by5zdWJ0bGUuZGVjcnlwdCh7bmFtZTpzLGl2OmcodSl9LGMseSk7aWYoZilyZXR1cm57Y2xlYXJUZXh0Om5ldyBUZXh0RGVjb2RlcigpLmRlY29kZShmKSx0b29rOkRhdGUubm93KCktYX19Y2F0Y2h7fX1yZXR1cm4gbnVsbH07bGV0IGM9bnVsbCx5PW51bGw7dHJ5e3k9aChlKTtjb25zdCB1PWF3YWl0IGNyeXB0by5zdWJ0bGUuZGlnZXN0KCJTSEEtMjU2IixkLmVuY29kZSh0KSk7Yz1hd2FpdCBjcnlwdG8uc3VidGxlLmltcG9ydEtleSgicmF3Iix1LHMsITEsWyJkZWNyeXB0Il0pfWNhdGNoe3JldHVybntwcm9taXNlOlByb21pc2UucmVqZWN0KCksY29udHJvbGxlcjpvfX1yZXR1cm57cHJvbWlzZTpsKCksY29udHJvbGxlcjpvfX1sZXQgaTtvbm1lc3NhZ2U9YXN5bmMgZT0+e2NvbnN0e3R5cGU6dCxwYXlsb2FkOnIsc3RhcnQ6bixtYXg6c309ZS5kYXRhO2xldCBvPW51bGw7aWYodD09PSJhYm9ydCIpaT09bnVsbHx8aS5hYm9ydCgpLGk9dm9pZCAwO2Vsc2UgaWYodD09PSJ3b3JrIil7aWYoIm9iZnVzY2F0ZWQiaW4gcil7Y29uc3R7a2V5OmEsb2JmdXNjYXRlZDpsfT1yfHx7fTtvPWF3YWl0IG0obCxhLHMsbil9ZWxzZXtjb25zdHthbGdvcml0aG06YSxjaGFsbGVuZ2U6bCxzYWx0OmN9PXJ8fHt9O289dyhsLGMsYSxzLG4pfWk9by5jb250cm9sbGVyLG8ucHJvbWlzZS50aGVuKGE9PntzZWxmLnBvc3RNZXNzYWdlKGEmJnsuLi5hLHdvcmtlcjohMH0pfSl9fX0pKCk7Cg==", gi = (e) => Uint8Array.from(atob(e), (t) => t.charCodeAt(0)), zr = typeof self < "u" && self.Blob && new Blob([gi(Br)], { type: "text/javascript;charset=utf-8" });
function _i(e) {
  let t;
  try {
    if (t = zr && (self.URL || self.webkitURL).createObjectURL(zr), !t) throw "";
    const r = new Worker(t, {
      name: e == null ? void 0 : e.name
    });
    return r.addEventListener("error", () => {
      (self.URL || self.webkitURL).revokeObjectURL(t);
    }), r;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + Br,
      {
        name: e == null ? void 0 : e.name
      }
    );
  } finally {
    t && (self.URL || self.webkitURL).revokeObjectURL(t);
  }
}
const mi = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(mi);
const bi = 1, yi = 4, pi = 8, wi = 16, Ei = 1, xi = 2, Hr = "[", Jr = "[!", Kr = "]", Ze = {}, B = Symbol(), qr = !1;
var Qr = Array.isArray, ki = Array.from, Et = Object.keys, xt = Object.defineProperty, Le = Object.getOwnPropertyDescriptor, Ci = Object.getOwnPropertyDescriptors, Ri = Object.prototype, Ii = Array.prototype, Ot = Object.getPrototypeOf;
function en(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const oe = 2, tn = 4, ft = 8, Bt = 16, se = 32, ct = 64, Xt = 128, Ae = 256, kt = 512, H = 1024, ke = 2048, dt = 4096, Me = 8192, He = 16384, $i = 32768, Ht = 65536, Si = 1 << 19, rn = 1 << 20, at = Symbol("$state"), nn = Symbol("legacy props"), Li = Symbol("");
function ln(e) {
  return e === this.v;
}
function Ni(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function an(e) {
  return !Ni(e, this.v);
}
function Ai(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ti() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Vi(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Pi() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function zi() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Gi(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Di() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Yi() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Fi() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Oi() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let on = !1;
function ce(e) {
  return {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: ln,
    version: 0
  };
}
function Ge(e) {
  return /* @__PURE__ */ Xi(ce(e));
}
// @__NO_SIDE_EFFECTS__
function sn(e, t = !1) {
  const r = ce(e);
  return t || (r.equals = an), r;
}
// @__NO_SIDE_EFFECTS__
function Xi(e) {
  return S !== null && S.f & oe && (de === null ? rl([e]) : de.push(e)), e;
}
function R(e, t) {
  return S !== null && il() && S.f & (oe | Bt) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (de === null || !de.includes(e)) && Oi(), Zi(e, t);
}
function Zi(e, t) {
  return e.equals(t) || (e.v = t, e.version = In(), un(e, ke), w !== null && w.f & H && !(w.f & se) && (F !== null && F.includes(e) ? (he(w, ke), At(w)) : Ee === null ? nl([e]) : Ee.push(e))), t;
}
function un(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var l = r.length, i = 0; i < l; i++) {
      var a = r[i], o = a.f;
      o & ke || (he(a, t), o & (H | Ae) && (o & oe ? un(
        /** @type {Derived} */
        a,
        dt
      ) : At(
        /** @type {Effect} */
        a
      )));
    }
}
function $t(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let P = !1;
function Oe(e) {
  P = e;
}
let V;
function Ce(e) {
  if (e === null)
    throw $t(), Ze;
  return V = e;
}
function je() {
  return Ce(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ie(V)
  );
}
function K(e) {
  if (P) {
    if (/* @__PURE__ */ Ie(V) !== null)
      throw $t(), Ze;
    V = e;
  }
}
function Wi() {
  for (var e = 0, t = V; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === Kr) {
        if (e === 0) return t;
        e -= 1;
      } else (r === Hr || r === Jr) && (e += 1);
    }
    var l = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ie(t)
    );
    t.remove(), t = l;
  }
}
function D(e, t = null, r) {
  if (typeof e != "object" || e === null || at in e)
    return e;
  const l = Ot(e);
  if (l !== Ri && l !== Ii)
    return e;
  var i = /* @__PURE__ */ new Map(), a = Qr(e), o = ce(0);
  a && i.set("length", ce(
    /** @type {any[]} */
    e.length
  ));
  var c;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(u, s, h) {
        (!("value" in h) || h.configurable === !1 || h.enumerable === !1 || h.writable === !1) && Di();
        var v = i.get(s);
        return v === void 0 ? (v = ce(h.value), i.set(s, v)) : R(v, D(h.value, c)), !0;
      },
      deleteProperty(u, s) {
        var h = i.get(s);
        if (h === void 0)
          s in u && i.set(s, ce(B));
        else {
          if (a && typeof s == "string") {
            var v = (
              /** @type {Source<number>} */
              i.get("length")
            ), g = Number(s);
            Number.isInteger(g) && g < v.v && R(v, g);
          }
          R(h, B), Gr(o);
        }
        return !0;
      },
      get(u, s, h) {
        var p;
        if (s === at)
          return e;
        var v = i.get(s), g = s in u;
        if (v === void 0 && (!g || (p = Le(u, s)) != null && p.writable) && (v = ce(D(g ? u[s] : B, c)), i.set(s, v)), v !== void 0) {
          var m = d(v);
          return m === B ? void 0 : m;
        }
        return Reflect.get(u, s, h);
      },
      getOwnPropertyDescriptor(u, s) {
        var h = Reflect.getOwnPropertyDescriptor(u, s);
        if (h && "value" in h) {
          var v = i.get(s);
          v && (h.value = d(v));
        } else if (h === void 0) {
          var g = i.get(s), m = g == null ? void 0 : g.v;
          if (g !== void 0 && m !== B)
            return {
              enumerable: !0,
              configurable: !0,
              value: m,
              writable: !0
            };
        }
        return h;
      },
      has(u, s) {
        var m;
        if (s === at)
          return !0;
        var h = i.get(s), v = h !== void 0 && h.v !== B || Reflect.has(u, s);
        if (h !== void 0 || w !== null && (!v || (m = Le(u, s)) != null && m.writable)) {
          h === void 0 && (h = ce(v ? D(u[s], c) : B), i.set(s, h));
          var g = d(h);
          if (g === B)
            return !1;
        }
        return v;
      },
      set(u, s, h, v) {
        var Y;
        var g = i.get(s), m = s in u;
        if (a && s === "length")
          for (var p = h; p < /** @type {Source<number>} */
          g.v; p += 1) {
            var A = i.get(p + "");
            A !== void 0 ? R(A, B) : p in u && (A = ce(B), i.set(p + "", A));
          }
        g === void 0 ? (!m || (Y = Le(u, s)) != null && Y.writable) && (g = ce(void 0), R(g, D(h, c)), i.set(s, g)) : (m = g.v !== B, R(g, D(h, c)));
        var G = Reflect.getOwnPropertyDescriptor(u, s);
        if (G != null && G.set && G.set.call(v, h), !m) {
          if (a && typeof s == "string") {
            var X = (
              /** @type {Source<number>} */
              i.get("length")
            ), Z = Number(s);
            Number.isInteger(Z) && Z >= X.v && R(X, Z + 1);
          }
          Gr(o);
        }
        return !0;
      },
      ownKeys(u) {
        d(o);
        var s = Reflect.ownKeys(u).filter((g) => {
          var m = i.get(g);
          return m === void 0 || m.v !== B;
        });
        for (var [h, v] of i)
          v.v !== B && !(h in u) && s.push(h);
        return s;
      },
      setPrototypeOf() {
        Yi();
      }
    }
  );
}
function Gr(e, t = 1) {
  R(e, e.v + t);
}
var Dr, fn, cn;
function Zt() {
  if (Dr === void 0) {
    Dr = window;
    var e = Element.prototype, t = Node.prototype;
    fn = Le(t, "firstChild").get, cn = Le(t, "nextSibling").get, e.__click = void 0, e.__className = "", e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function St(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Ne(e) {
  return fn.call(e);
}
// @__NO_SIDE_EFFECTS__
function Ie(e) {
  return cn.call(e);
}
function q(e, t) {
  if (!P)
    return /* @__PURE__ */ Ne(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ne(V)
  );
  return r === null && (r = V.appendChild(St())), Ce(r), r;
}
function Ft(e, t) {
  if (!P) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Ne(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Ie(r) : r;
  }
  return V;
}
function _e(e, t = 1, r = !1) {
  let l = P ? V : e;
  for (var i; t--; )
    i = l, l = /** @type {TemplateNode} */
    /* @__PURE__ */ Ie(l);
  if (!P)
    return l;
  var a = l == null ? void 0 : l.nodeType;
  if (r && a !== 3) {
    var o = St();
    return l === null ? i == null || i.after(o) : l.before(o), Ce(o), o;
  }
  return Ce(l), /** @type {TemplateNode} */
  l;
}
function Ui(e) {
  e.textContent = "";
}
// @__NO_SIDE_EFFECTS__
function it(e) {
  var t = oe | ke;
  w === null ? t |= Ae : w.f |= rn;
  var r = S !== null && S.f & oe ? (
    /** @type {Derived} */
    S
  ) : null;
  const l = {
    children: null,
    ctx: O,
    deps: null,
    equals: ln,
    f: t,
    fn: e,
    reactions: null,
    v: (
      /** @type {V} */
      null
    ),
    version: 0,
    parent: r ?? w
  };
  return r !== null && (r.children ?? (r.children = [])).push(l), l;
}
function dn(e) {
  var t = e.children;
  if (t !== null) {
    e.children = null;
    for (var r = 0; r < t.length; r += 1) {
      var l = t[r];
      l.f & oe ? Jt(
        /** @type {Derived} */
        l
      ) : Te(
        /** @type {Effect} */
        l
      );
    }
  }
}
function Mi(e) {
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
function vn(e) {
  var t, r = w;
  ve(Mi(e));
  try {
    dn(e), t = $n(e);
  } finally {
    ve(r);
  }
  return t;
}
function hn(e) {
  var t = vn(e), r = (Xe || e.f & Ae) && e.deps !== null ? dt : H;
  he(e, r), e.equals(t) || (e.v = t, e.version = In());
}
function Jt(e) {
  dn(e), ut(e, 0), he(e, He), e.v = e.children = e.deps = e.ctx = e.reactions = null;
}
function ji(e) {
  w === null && S === null && Vi(), S !== null && S.f & Ae && Ti(), tr && Ai();
}
function Bi(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Je(e, t, r, l = !0) {
  var i = (e & ct) !== 0, a = w, o = {
    ctx: O,
    deps: null,
    deriveds: null,
    nodes_start: null,
    nodes_end: null,
    f: e | ke,
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
    var c = We;
    try {
      Or(!0), Nt(o), o.f |= $i;
    } catch (h) {
      throw Te(o), h;
    } finally {
      Or(c);
    }
  } else t !== null && At(o);
  var u = r && o.deps === null && o.first === null && o.nodes_start === null && o.teardown === null && (o.f & rn) === 0;
  if (!u && !i && l && (a !== null && Bi(o, a), S !== null && S.f & oe)) {
    var s = (
      /** @type {Derived} */
      S
    );
    (s.children ?? (s.children = [])).push(o);
  }
  return o;
}
function Hi(e) {
  const t = Je(ft, null, !1);
  return he(t, H), t.teardown = e, t;
}
function bt(e) {
  ji();
  var t = w !== null && (w.f & se) !== 0 && O !== null && !O.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      O
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: w,
      reaction: S
    });
  } else {
    var l = Kt(e);
    return l;
  }
}
function gn(e) {
  const t = Je(ct, e, !0);
  return () => {
    Te(t);
  };
}
function Kt(e) {
  return Je(tn, e, !1);
}
function qt(e) {
  return Je(ft, e, !0);
}
function De(e) {
  return Qt(e);
}
function Qt(e, t = 0) {
  return Je(ft | Bt | t, e, !0);
}
function Ct(e, t = !0) {
  return Je(ft | se, e, !0, t);
}
function _n(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = tr, l = S;
    Xr(!0), Re(null);
    try {
      t.call(null);
    } finally {
      Xr(r), Re(l);
    }
  }
}
function mn(e) {
  var t = e.deriveds;
  if (t !== null) {
    e.deriveds = null;
    for (var r = 0; r < t.length; r += 1)
      Jt(t[r]);
  }
}
function bn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var l = r.next;
    Te(r, t), r = l;
  }
}
function Ji(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    t.f & se || Te(t), t = r;
  }
}
function Te(e, t = !0) {
  var r = !1;
  if ((t || e.f & Si) && e.nodes_start !== null) {
    for (var l = e.nodes_start, i = e.nodes_end; l !== null; ) {
      var a = l === i ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ie(l)
      );
      l.remove(), l = a;
    }
    r = !0;
  }
  bn(e, t && !r), mn(e), ut(e, 0), he(e, He);
  var o = e.transitions;
  if (o !== null)
    for (const u of o)
      u.stop();
  _n(e);
  var c = e.parent;
  c !== null && c.first !== null && yn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function yn(e) {
  var t = e.parent, r = e.prev, l = e.next;
  r !== null && (r.next = l), l !== null && (l.prev = r), t !== null && (t.first === e && (t.first = l), t.last === e && (t.last = r));
}
function Yr(e, t) {
  var r = [];
  pn(e, r, !0), Ki(r, () => {
    Te(e), t && t();
  });
}
function Ki(e, t) {
  var r = e.length;
  if (r > 0) {
    var l = () => --r || t();
    for (var i of e)
      i.out(l);
  } else
    t();
}
function pn(e, t, r) {
  if (!(e.f & Me)) {
    if (e.f ^= Me, e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || r) && t.push(o);
    for (var l = e.first; l !== null; ) {
      var i = l.next, a = (l.f & Ht) !== 0 || (l.f & se) !== 0;
      pn(l, t, a ? r : !1), l = i;
    }
  }
}
function Fr(e) {
  wn(e, !0);
}
function wn(e, t) {
  if (e.f & Me) {
    vt(e) && Nt(e), e.f ^= Me;
    for (var r = e.first; r !== null; ) {
      var l = r.next, i = (r.f & Ht) !== 0 || (r.f & se) !== 0;
      wn(r, i ? t : !1), r = l;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
const qi = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Rt = !1, It = !1, Wt = [], Ut = [];
function En() {
  Rt = !1;
  const e = Wt.slice();
  Wt = [], en(e);
}
function xn() {
  It = !1;
  const e = Ut.slice();
  Ut = [], en(e);
}
function er(e) {
  Rt || (Rt = !0, queueMicrotask(En)), Wt.push(e);
}
function Qi(e) {
  It || (It = !0, qi(xn)), Ut.push(e);
}
function el() {
  Rt && En(), It && xn();
}
function kn(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
const Cn = 0, tl = 1;
let yt = !1, pt = Cn, ot = !1, st = null, We = !1, tr = !1;
function Or(e) {
  We = e;
}
function Xr(e) {
  tr = e;
}
let Se = [], Ue = 0;
let S = null;
function Re(e) {
  S = e;
}
let w = null;
function ve(e) {
  w = e;
}
let de = null;
function rl(e) {
  de = e;
}
let F = null, ee = 0, Ee = null;
function nl(e) {
  Ee = e;
}
let Rn = 0, Xe = !1, O = null;
function In() {
  return ++Rn;
}
function il() {
  return !on;
}
function vt(e) {
  var o, c;
  var t = e.f;
  if (t & ke)
    return !0;
  if (t & dt) {
    var r = e.deps, l = (t & Ae) !== 0;
    if (r !== null) {
      var i;
      if (t & kt) {
        for (i = 0; i < r.length; i++)
          ((o = r[i]).reactions ?? (o.reactions = [])).push(e);
        e.f ^= kt;
      }
      for (i = 0; i < r.length; i++) {
        var a = r[i];
        if (vt(
          /** @type {Derived} */
          a
        ) && hn(
          /** @type {Derived} */
          a
        ), l && w !== null && !Xe && !((c = a == null ? void 0 : a.reactions) != null && c.includes(e)) && (a.reactions ?? (a.reactions = [])).push(e), a.version > e.version)
          return !0;
      }
    }
    l || he(e, H);
  }
  return !1;
}
function ll(e, t) {
  for (var r = t; r !== null; ) {
    if (r.f & Xt)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= Xt;
      }
    r = r.parent;
  }
  throw yt = !1, e;
}
function al(e) {
  return (e.f & He) === 0 && (e.parent === null || (e.parent.f & Xt) === 0);
}
function Lt(e, t, r, l) {
  if (yt) {
    if (r === null && (yt = !1), al(t))
      throw e;
    return;
  }
  r !== null && (yt = !0);
  {
    ll(e, t);
    return;
  }
}
function $n(e) {
  var g;
  var t = F, r = ee, l = Ee, i = S, a = Xe, o = de, c = O, u = e.f;
  F = /** @type {null | Value[]} */
  null, ee = 0, Ee = null, S = u & (se | ct) ? null : e, Xe = !We && (u & Ae) !== 0, de = null, O = e.ctx;
  try {
    var s = (
      /** @type {Function} */
      (0, e.fn)()
    ), h = e.deps;
    if (F !== null) {
      var v;
      if (ut(e, ee), h !== null && ee > 0)
        for (h.length = ee + F.length, v = 0; v < F.length; v++)
          h[ee + v] = F[v];
      else
        e.deps = h = F;
      if (!Xe)
        for (v = ee; v < h.length; v++)
          ((g = h[v]).reactions ?? (g.reactions = [])).push(e);
    } else h !== null && ee < h.length && (ut(e, ee), h.length = ee);
    return s;
  } finally {
    F = t, ee = r, Ee = l, S = i, Xe = a, de = o, O = c;
  }
}
function ol(e, t) {
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
  (F === null || !F.includes(t)) && (he(t, dt), t.f & (Ae | kt) || (t.f ^= kt), ut(
    /** @type {Derived} **/
    t,
    0
  ));
}
function ut(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var l = t; l < r.length; l++)
      ol(e, r[l]);
}
function Nt(e) {
  var t = e.f;
  if (!(t & He)) {
    he(e, H);
    var r = w, l = O;
    w = e;
    try {
      t & Bt ? Ji(e) : bn(e), mn(e), _n(e);
      var i = $n(e);
      e.teardown = typeof i == "function" ? i : null, e.version = Rn;
    } catch (a) {
      Lt(a, e, r, l || e.ctx);
    } finally {
      w = r;
    }
  }
}
function Sn() {
  if (Ue > 1e3) {
    Ue = 0;
    try {
      Pi();
    } catch (e) {
      if (st !== null)
        Lt(e, st, null);
      else
        throw e;
    }
  }
  Ue++;
}
function Ln(e) {
  var t = e.length;
  if (t !== 0) {
    Sn();
    var r = We;
    We = !0;
    try {
      for (var l = 0; l < t; l++) {
        var i = e[l];
        i.f & H || (i.f ^= H);
        var a = [];
        Nn(i, a), sl(a);
      }
    } finally {
      We = r;
    }
  }
}
function sl(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var l = e[r];
      if (!(l.f & (He | Me)))
        try {
          vt(l) && (Nt(l), l.deps === null && l.first === null && l.nodes_start === null && (l.teardown === null ? yn(l) : l.fn = null));
        } catch (i) {
          Lt(i, l, null, l.ctx);
        }
    }
}
function ul() {
  if (ot = !1, Ue > 1001)
    return;
  const e = Se;
  Se = [], Ln(e), ot || (Ue = 0, st = null);
}
function At(e) {
  pt === Cn && (ot || (ot = !0, queueMicrotask(ul))), st = e;
  for (var t = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if (r & (ct | se)) {
      if (!(r & H)) return;
      t.f ^= H;
    }
  }
  Se.push(t);
}
function Nn(e, t) {
  var r = e.first, l = [];
  e: for (; r !== null; ) {
    var i = r.f, a = (i & se) !== 0, o = a && (i & H) !== 0, c = r.next;
    if (!o && !(i & Me))
      if (i & ft) {
        if (a)
          r.f ^= H;
        else
          try {
            vt(r) && Nt(r);
          } catch (v) {
            Lt(v, r, null, r.ctx);
          }
        var u = r.first;
        if (u !== null) {
          r = u;
          continue;
        }
      } else i & tn && l.push(r);
    if (c === null) {
      let v = r.parent;
      for (; v !== null; ) {
        if (e === v)
          break e;
        var s = v.next;
        if (s !== null) {
          r = s;
          continue e;
        }
        v = v.parent;
      }
    }
    r = c;
  }
  for (var h = 0; h < l.length; h++)
    u = l[h], t.push(u), Nn(u, t);
}
function $(e) {
  var t = pt, r = Se;
  try {
    Sn();
    const i = [];
    pt = tl, Se = i, ot = !1, Ln(r);
    var l = e == null ? void 0 : e();
    return el(), (Se.length > 0 || i.length > 0) && $(), Ue = 0, st = null, l;
  } finally {
    pt = t, Se = r;
  }
}
async function fl() {
  await Promise.resolve(), $();
}
function d(e) {
  var h;
  var t = e.f, r = (t & oe) !== 0;
  if (r && t & He) {
    var l = vn(
      /** @type {Derived} */
      e
    );
    return Jt(
      /** @type {Derived} */
      e
    ), l;
  }
  if (S !== null) {
    de !== null && de.includes(e) && Fi();
    var i = S.deps;
    F === null && i !== null && i[ee] === e ? ee++ : F === null ? F = [e] : F.push(e), Ee !== null && w !== null && w.f & H && !(w.f & se) && Ee.includes(e) && (he(w, ke), At(w));
  } else if (r && /** @type {Derived} */
  e.deps === null)
    for (var a = (
      /** @type {Derived} */
      e
    ), o = a.parent, c = a; o !== null; )
      if (o.f & oe) {
        var u = (
          /** @type {Derived} */
          o
        );
        c = u, o = u.parent;
      } else {
        var s = (
          /** @type {Effect} */
          o
        );
        (h = s.deriveds) != null && h.includes(c) || (s.deriveds ?? (s.deriveds = [])).push(c);
        break;
      }
  return r && (a = /** @type {Derived} */
  e, vt(a) && hn(a)), e.v;
}
function Be(e) {
  const t = S;
  try {
    return S = null, e();
  } finally {
    S = t;
  }
}
const cl = ~(ke | dt | H);
function he(e, t) {
  e.f = e.f & cl | t;
}
function An(e, t = !1, r) {
  O = {
    p: O,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
}
function Tn(e) {
  const t = O;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const o = t.e;
    if (o !== null) {
      var r = w, l = S;
      t.e = null;
      try {
        for (var i = 0; i < o.length; i++) {
          var a = o[i];
          ve(a.effect), Re(a.reaction), Kt(a.fn);
        }
      } finally {
        ve(r), Re(l);
      }
    }
    O = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
let Zr = !1;
function Vn() {
  Zr || (Zr = !0, document.addEventListener(
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
function Pn(e) {
  var t = S, r = w;
  Re(null), ve(null);
  try {
    return e();
  } finally {
    Re(t), ve(r);
  }
}
function dl(e, t, r, l = r) {
  e.addEventListener(t, () => Pn(r));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), l(!0);
  } : e.__on_r = () => l(!0), Vn();
}
const zn = /* @__PURE__ */ new Set(), Mt = /* @__PURE__ */ new Set();
function vl(e, t, r, l) {
  function i(a) {
    if (l.capture || lt.call(t, a), !a.cancelBubble)
      return Pn(() => r.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? er(() => {
    t.addEventListener(e, i, l);
  }) : t.addEventListener(e, i, l), i;
}
function hl(e, t, r, l, i) {
  var a = { capture: l, passive: i }, o = vl(e, t, r, a);
  (t === document.body || t === window || t === document) && Hi(() => {
    t.removeEventListener(e, o, a);
  });
}
function gl(e) {
  for (var t = 0; t < e.length; t++)
    zn.add(e[t]);
  for (var r of Mt)
    r(e);
}
function lt(e) {
  var Z;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), l = e.type, i = ((Z = e.composedPath) == null ? void 0 : Z.call(e)) || [], a = (
    /** @type {null | Element} */
    i[0] || e.target
  ), o = 0, c = e.__root;
  if (c) {
    var u = i.indexOf(c);
    if (u !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var s = i.indexOf(t);
    if (s === -1)
      return;
    u <= s && (o = u);
  }
  if (a = /** @type {Element} */
  i[o] || e.target, a !== t) {
    xt(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var h = S, v = w;
    Re(null), ve(null);
    try {
      for (var g, m = []; a !== null; ) {
        var p = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var A = a["__" + l];
          if (A !== void 0 && !/** @type {any} */
          a.disabled)
            if (Qr(A)) {
              var [G, ...X] = A;
              G.apply(a, [e, ...X]);
            } else
              A.call(a, e);
        } catch (Y) {
          g ? m.push(Y) : g = Y;
        }
        if (e.cancelBubble || p === t || p === null)
          break;
        a = p;
      }
      if (g) {
        for (let Y of m)
          queueMicrotask(() => {
            throw Y;
          });
        throw g;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Re(h), ve(v);
    }
  }
}
function Gn(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function xe(e, t) {
  var r = (
    /** @type {Effect} */
    w
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ue(e, t) {
  var r = (t & Ei) !== 0, l = (t & xi) !== 0, i, a = !e.startsWith("<!>");
  return () => {
    if (P)
      return xe(V, null), V;
    i === void 0 && (i = Gn(a ? e : "<!>" + e), r || (i = /** @type {Node} */
    /* @__PURE__ */ Ne(i)));
    var o = (
      /** @type {TemplateNode} */
      l ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ne(o)
      ), u = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      xe(c, u);
    } else
      xe(o, o);
    return o;
  };
}
function _l() {
  if (P)
    return xe(V, null), V;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = St();
  return e.append(t, r), xe(t, r), e;
}
function Q(e, t) {
  if (P) {
    w.nodes_end = V, je();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const ml = ["touchstart", "touchmove"];
function bl(e) {
  return ml.includes(e);
}
function Dn(e, t) {
  return Yn(e, t);
}
function yl(e, t) {
  Zt(), t.intro = t.intro ?? !1;
  const r = t.target, l = P, i = V;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ne(r)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== Hr); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ Ie(a);
    if (!a)
      throw Ze;
    Oe(!0), Ce(
      /** @type {Comment} */
      a
    ), je();
    const o = Yn(e, { ...t, anchor: a });
    if (V === null || V.nodeType !== 8 || /** @type {Comment} */
    V.data !== Kr)
      throw $t(), Ze;
    return Oe(!1), /**  @type {Exports} */
    o;
  } catch (o) {
    if (o === Ze)
      return t.recover === !1 && zi(), Zt(), Ui(r), Oe(!1), Dn(e, t);
    throw o;
  } finally {
    Oe(l), Ce(i);
  }
}
const Ye = /* @__PURE__ */ new Map();
function Yn(e, { target: t, anchor: r, props: l = {}, events: i, context: a, intro: o = !0 }) {
  Zt();
  var c = /* @__PURE__ */ new Set(), u = (v) => {
    for (var g = 0; g < v.length; g++) {
      var m = v[g];
      if (!c.has(m)) {
        c.add(m);
        var p = bl(m);
        t.addEventListener(m, lt, { passive: p });
        var A = Ye.get(m);
        A === void 0 ? (document.addEventListener(m, lt, { passive: p }), Ye.set(m, 1)) : Ye.set(m, A + 1);
      }
    }
  };
  u(ki(zn)), Mt.add(u);
  var s = void 0, h = gn(() => {
    var v = r ?? t.appendChild(St());
    return Ct(() => {
      if (a) {
        An({});
        var g = (
          /** @type {ComponentContext} */
          O
        );
        g.c = a;
      }
      i && (l.$$events = i), P && xe(
        /** @type {TemplateNode} */
        v,
        null
      ), s = e(v, l) || {}, P && (w.nodes_end = V), a && Tn();
    }), () => {
      var p;
      for (var g of c) {
        t.removeEventListener(g, lt);
        var m = (
          /** @type {number} */
          Ye.get(g)
        );
        --m === 0 ? (document.removeEventListener(g, lt), Ye.delete(g)) : Ye.set(g, m);
      }
      Mt.delete(u), jt.delete(s), v !== r && ((p = v.parentNode) == null || p.removeChild(v));
    };
  });
  return jt.set(s, h), s;
}
let jt = /* @__PURE__ */ new WeakMap();
function pl(e) {
  const t = jt.get(e);
  t && t();
}
function we(e, t, r = !1) {
  P && je();
  var l = e, i = null, a = null, o = B, c = r ? Ht : 0, u = !1;
  const s = (v, g = !0) => {
    u = !0, h(g, v);
  }, h = (v, g) => {
    if (o === (o = v)) return;
    let m = !1;
    if (P) {
      const p = (
        /** @type {Comment} */
        l.data === Jr
      );
      !!o === p && (l = Wi(), Ce(l), Oe(!1), m = !0);
    }
    o ? (i ? Fr(i) : g && (i = Ct(() => g(l))), a && Yr(a, () => {
      a = null;
    })) : (a ? Fr(a) : g && (a = Ct(() => g(l))), i && Yr(i, () => {
      i = null;
    })), m && Oe(!0);
  };
  Qt(() => {
    u = !1, t(s), u || h(null, null);
  }, c), P && (l = V);
}
function Fe(e, t, r, l, i) {
  var a = e, o = "", c;
  Qt(() => {
    if (o === (o = t() ?? "")) {
      P && je();
      return;
    }
    c !== void 0 && (Te(c), c = void 0), o !== "" && (c = Ct(() => {
      if (P) {
        V.data;
        for (var u = je(), s = u; u !== null && (u.nodeType !== 8 || /** @type {Comment} */
        u.data !== ""); )
          s = u, u = /** @type {TemplateNode} */
          /* @__PURE__ */ Ie(u);
        if (u === null)
          throw $t(), Ze;
        xe(V, s), a = Ce(u);
        return;
      }
      var h = o + "", v = Gn(h);
      xe(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ne(v),
        /** @type {TemplateNode} */
        v.lastChild
      ), a.before(v);
    }));
  });
}
function wl(e, t, r, l, i) {
  var c;
  P && je();
  var a = (c = t.$$slots) == null ? void 0 : c[r], o = !1;
  a === !0 && (a = t.children, o = !0), a === void 0 || a(e, o ? () => l : l);
}
function El(e, t) {
  er(() => {
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
function Wr(e) {
  if (P) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var l = e.value;
          ae(e, "value", null), e.value = l;
        }
        if (e.hasAttribute("checked")) {
          var i = e.checked;
          ae(e, "checked", null), e.checked = i;
        }
      }
    };
    e.__on_r = r, Qi(r), Vn();
  }
}
function xl(e, t) {
  var r = e.__attributes ?? (e.__attributes = {});
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when its `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t);
}
function ae(e, t, r, l) {
  var i = e.__attributes ?? (e.__attributes = {});
  P && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || i[t] !== (i[t] = r) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[Li] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && kl(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
var Ur = /* @__PURE__ */ new Map();
function kl(e) {
  var t = Ur.get(e.nodeName);
  if (t) return t;
  Ur.set(e.nodeName, t = []);
  for (var r, l = Ot(e), i = Element.prototype; i !== l; ) {
    r = Ci(l);
    for (var a in r)
      r[a].set && t.push(a);
    l = Ot(l);
  }
  return t;
}
function Cl(e, t, r) {
  if (r) {
    if (e.classList.contains(t)) return;
    e.classList.add(t);
  } else {
    if (!e.classList.contains(t)) return;
    e.classList.remove(t);
  }
}
function Rl(e, t, r = t) {
  dl(e, "change", (l) => {
    var i = l ? e.defaultChecked : e.checked;
    r(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (P && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  Be(t) == null) && r(e.checked), qt(() => {
    var l = t();
    e.checked = !!l;
  });
}
function Mr(e, t) {
  return e === t || (e == null ? void 0 : e[at]) === t;
}
function jr(e = {}, t, r, l) {
  return Kt(() => {
    var i, a;
    return qt(() => {
      i = a, a = [], Be(() => {
        e !== r(...a) && (t(e, ...a), i && Mr(r(...i), e) && t(null, ...i));
      });
    }), () => {
      er(() => {
        a && Mr(r(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function Fn(e) {
  O === null && kn(), bt(() => {
    const t = Be(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Il(e) {
  O === null && kn(), Fn(() => () => Be(e));
}
let mt = !1;
function $l(e) {
  var t = mt;
  try {
    return mt = !1, [e(), mt];
  } finally {
    mt = t;
  }
}
function Sl(e) {
  for (var t = w, r = w; t !== null && !(t.f & (se | ct)); )
    t = t.parent;
  try {
    return ve(t), e();
  } finally {
    ve(r);
  }
}
function N(e, t, r, l) {
  var W;
  var i = (r & bi) !== 0, a = !on, o = (r & pi) !== 0, c = (r & wi) !== 0, u = !1, s;
  o ? [s, u] = $l(() => (
    /** @type {V} */
    e[t]
  )) : s = /** @type {V} */
  e[t];
  var h = at in e || nn in e, v = ((W = Le(e, t)) == null ? void 0 : W.set) ?? (h && o && t in e ? (T) => e[t] = T : void 0), g = (
    /** @type {V} */
    l
  ), m = !0, p = !1, A = () => (p = !0, m && (m = !1, c ? g = Be(
    /** @type {() => V} */
    l
  ) : g = /** @type {V} */
  l), g);
  s === void 0 && l !== void 0 && (v && a && Gi(), s = A(), v && v(s));
  var G;
  if (G = () => {
    var T = (
      /** @type {V} */
      e[t]
    );
    return T === void 0 ? A() : (m = !0, p = !1, T);
  }, !(r & yi))
    return G;
  if (v) {
    var X = e.$$legacy;
    return function(T, J) {
      return arguments.length > 0 ? ((!J || X || u) && v(J ? G() : T), T) : G();
    };
  }
  var Z = !1, Y = !1, M = /* @__PURE__ */ sn(s), ie = Sl(
    () => /* @__PURE__ */ it(() => {
      var T = G(), J = d(M);
      return Z ? (Z = !1, Y = !0, J) : (Y = !1, M.v = T);
    })
  );
  return i || (ie.equals = an), function(T, J) {
    if (arguments.length > 0) {
      const ge = J ? d(ie) : o ? D(T) : T;
      return ie.equals(ge) || (Z = !0, R(M, ge), p && g !== void 0 && (g = ge), Be(() => d(ie))), T;
    }
    return d(ie);
  };
}
function Ll(e) {
  return new Nl(e);
}
var me, ne;
class Nl {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    Dt(this, me);
    /** @type {Record<string, any>} */
    Dt(this, ne);
    var a;
    var r = /* @__PURE__ */ new Map(), l = (o, c) => {
      var u = /* @__PURE__ */ sn(c);
      return r.set(o, u), u;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(o, c) {
          return d(r.get(c) ?? l(c, Reflect.get(o, c)));
        },
        has(o, c) {
          return c === nn ? !0 : (d(r.get(c) ?? l(c, Reflect.get(o, c))), Reflect.has(o, c));
        },
        set(o, c, u) {
          return R(r.get(c) ?? l(c, u), u), Reflect.set(o, c, u);
        }
      }
    );
    Yt(this, ne, (t.hydrate ? yl : Dn)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((a = t == null ? void 0 : t.props) != null && a.$$host) || t.sync === !1) && $(), Yt(this, me, i.$$events);
    for (const o of Object.keys(j(this, ne)))
      o === "$set" || o === "$destroy" || o === "$on" || xt(this, o, {
        get() {
          return j(this, ne)[o];
        },
        /** @param {any} value */
        set(c) {
          j(this, ne)[o] = c;
        },
        enumerable: !0
      });
    j(this, ne).$set = /** @param {Record<string, any>} next */
    (o) => {
      Object.assign(i, o);
    }, j(this, ne).$destroy = () => {
      pl(j(this, ne));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    j(this, ne).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    j(this, me)[t] = j(this, me)[t] || [];
    const l = (...i) => r.call(this, ...i);
    return j(this, me)[t].push(l), () => {
      j(this, me)[t] = j(this, me)[t].filter(
        /** @param {any} fn */
        (i) => i !== l
      );
    };
  }
  $destroy() {
    j(this, ne).$destroy();
  }
}
me = new WeakMap(), ne = new WeakMap();
let On;
typeof HTMLElement == "function" && (On = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, l) {
    super();
    /** The Svelte component constructor */
    le(this, "$$ctor");
    /** Slots */
    le(this, "$$s");
    /** @type {any} The Svelte component instance */
    le(this, "$$c");
    /** Whether or not the custom element is connected */
    le(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    le(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    le(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    le(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    le(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    le(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    le(this, "$$me");
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
          i !== "default" && (o.name = i), Q(a, o);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, l = Al(this);
      for (const i of this.$$s)
        i in l && (i === "default" && !this.$$d.children ? (this.$$d.children = t(i), r.default = !0) : r[i] = t(i));
      for (const i of this.attributes) {
        const a = this.$$g_p(i.name);
        a in this.$$d || (this.$$d[a] = wt(a, i.value, this.$$p_d, "toProp"));
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
      }), this.$$me = gn(() => {
        qt(() => {
          var i;
          this.$$r = !0;
          for (const a of Et(this.$$c)) {
            if (!((i = this.$$p_d[a]) != null && i.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const o = wt(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = wt(t, l, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
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
    return Et(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function wt(e, t, r, l) {
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
function Al(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function Tl(e, t, r, l, i, a) {
  let o = class extends On {
    constructor() {
      super(e, r, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Et(t).map(
        (c) => (t[c].attribute || c).toLowerCase()
      );
    }
  };
  return Et(t).forEach((c) => {
    xt(o.prototype, c, {
      get() {
        return this.$$c && c in this.$$c ? this.$$c[c] : this.$$d[c];
      },
      set(u) {
        var v;
        u = wt(c, u, t), this.$$d[c] = u;
        var s = this.$$c;
        if (s) {
          var h = (v = Le(s, c)) == null ? void 0 : v.get;
          h ? s[c] = u : s.$set({ [c]: u });
        }
      }
    });
  }), l.forEach((c) => {
    xt(o.prototype, c, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[c];
      }
    });
  }), e.element = /** @type {any} */
  o, o;
}
const Xn = new TextEncoder();
function Vl(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function Pl(e, t = "SHA-256", r = 1e5) {
  const l = Date.now().toString(16);
  e || (e = Math.round(Math.random() * r));
  const i = await Zn(l, e, t);
  return {
    algorithm: t,
    challenge: i,
    salt: l,
    signature: ""
  };
}
async function Zn(e, t, r) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return Vl(
    await crypto.subtle.digest(
      r.toUpperCase(),
      Xn.encode(e + t)
    )
  );
}
function zl(e, t, r = "SHA-256", l = 1e6, i = 0) {
  const a = new AbortController(), o = Date.now();
  return {
    promise: (async () => {
      for (let u = i; u <= l; u += 1) {
        if (a.signal.aborted)
          return null;
        if (await Zn(t, u, r) === e)
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
function Gl() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function Dl(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let l = 0; l < t.length; l++)
    r[l] = t.charCodeAt(l);
  return r;
}
function Yl(e, t = 12) {
  const r = new Uint8Array(t);
  for (let l = 0; l < t; l++)
    r[l] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function Fl(e, t = "", r = 1e6, l = 0) {
  const i = "AES-GCM", a = new AbortController(), o = Date.now(), c = async () => {
    for (let h = l; h <= r; h += 1) {
      if (a.signal.aborted || !u || !s)
        return null;
      try {
        const v = await crypto.subtle.decrypt(
          {
            name: i,
            iv: Yl(h)
          },
          u,
          s
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
  let u = null, s = null;
  try {
    s = Dl(e);
    const h = await crypto.subtle.digest(
      "SHA-256",
      Xn.encode(t)
    );
    u = await crypto.subtle.importKey(
      "raw",
      h,
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
var C = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(C || {}), Ol = /* @__PURE__ */ ue('<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="svelte-ddsc3z"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25" class="svelte-ddsc3z"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor" class="altcha-spinner svelte-ddsc3z"></path></svg>'), Xl = /* @__PURE__ */ ue('<span role="status" aria-live="polite" class="svelte-ddsc3z"><!></span> <input type="hidden" class="svelte-ddsc3z">', 1), Zl = /* @__PURE__ */ ue('<span role="status" aria-live="polite" class="svelte-ddsc3z"><!></span>'), Wl = /* @__PURE__ */ ue('<label class="svelte-ddsc3z"><!></label>'), Ul = /* @__PURE__ */ ue('<div class="svelte-ddsc3z"><a target="_blank" class="altcha-logo svelte-ddsc3z"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-ddsc3z"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor" class="svelte-ddsc3z"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor" class="svelte-ddsc3z"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor" class="svelte-ddsc3z"></path></svg></a></div>'), Ml = /* @__PURE__ */ ue('<div class="svelte-ddsc3z"><!></div>'), jl = /* @__PURE__ */ ue('<div class="svelte-ddsc3z"><!></div>'), Bl = /* @__PURE__ */ ue('<div class="altcha-error svelte-ddsc3z"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="svelte-ddsc3z"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" class="svelte-ddsc3z"></path></svg> <!></div>'), Hl = /* @__PURE__ */ ue('<div class="altcha-footer svelte-ddsc3z"><div class="svelte-ddsc3z"><!></div></div>'), Jl = /* @__PURE__ */ ue('<div class="altcha-anchor-arrow svelte-ddsc3z"></div>'), Kl = /* @__PURE__ */ ue('<!> <div class="altcha svelte-ddsc3z"><div class="altcha-main svelte-ddsc3z"><!> <div class="altcha-checkbox svelte-ddsc3z"><input type="checkbox" class="svelte-ddsc3z"></div> <div class="altcha-label svelte-ddsc3z"><!></div> <!></div> <!> <!> <!></div>', 1);
const ql = {
  hash: "svelte-ddsc3z",
  code: `.altcha.svelte-ddsc3z {background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);position:relative;text-align:left;}.altcha.svelte-ddsc3z:focus-within {border-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating].svelte-ddsc3z {background:var(--altcha-color-base, white);display:none;filter:drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2));left:-100%;position:fixed;top:-100%;width:var(--altcha-max-width, 260px);z-index:999999;}.altcha[data-floating=top].svelte-ddsc3z .altcha-anchor-arrow:where(.svelte-ddsc3z) {border-bottom-color:transparent;border-top-color:var(--altcha-color-border, #a0a0a0);bottom:-12px;top:auto;}.altcha[data-floating=bottom].svelte-ddsc3z:focus-within::after {border-bottom-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating=top].svelte-ddsc3z:focus-within::after {border-top-color:var(--altcha-color-border-focus, currentColor);}.altcha[data-floating].svelte-ddsc3z:not([data-state=unverified]) {display:block;}.altcha-anchor-arrow.svelte-ddsc3z {border:6px solid transparent;border-bottom-color:var(--altcha-color-border, #a0a0a0);content:"";height:0;left:12px;position:absolute;top:-12px;width:0;}.altcha-main.svelte-ddsc3z {align-items:center;display:flex;gap:0.4rem;padding:0.7rem;}.altcha-label.svelte-ddsc3z {flex-grow:1;}.altcha-label.svelte-ddsc3z label:where(.svelte-ddsc3z) {cursor:pointer;}.altcha-logo.svelte-ddsc3z {color:currentColor;opacity:0.3;}.altcha-logo.svelte-ddsc3z:hover {opacity:1;}.altcha-error.svelte-ddsc3z {color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem;}.altcha-footer.svelte-ddsc3z {align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.4;padding:0.2rem 0.7rem;text-align:right;}.altcha-footer.svelte-ddsc3z:hover {opacity:1;}.altcha-footer.svelte-ddsc3z > :where(.svelte-ddsc3z):first-child {flex-grow:1;}.altcha-footer.svelte-ddsc3z a {color:currentColor;}.altcha-checkbox.svelte-ddsc3z {display:flex;align-items:center;height:24px;width:24px;}.altcha-checkbox.svelte-ddsc3z input:where(.svelte-ddsc3z) {width:18px;height:18px;margin:0;}.altcha-hidden.svelte-ddsc3z {display:none;}.altcha-spinner.svelte-ddsc3z {
  animation: svelte-ddsc3z-altcha-spinner 0.75s infinite linear;transform-origin:center;}

@keyframes svelte-ddsc3z-altcha-spinner {
  100% {
    transform: rotate(360deg);
  }
}`
};
function Ql(e, t) {
  var Nr, Ar;
  An(t, !0), El(e, ql);
  let r = N(t, "auto", 7, void 0), l = N(t, "blockspam", 7, void 0), i = N(t, "challengeurl", 7, void 0), a = N(t, "challengejson", 7, void 0), o = N(t, "debug", 7, !1), c = N(t, "delay", 7, 0), u = N(t, "expire", 7, void 0), s = N(t, "floating", 7, void 0), h = N(t, "floatinganchor", 7, void 0), v = N(t, "floatingoffset", 7, void 0), g = N(t, "hidefooter", 7, !1), m = N(t, "hidelogo", 7, !1), p = N(t, "name", 7, "altcha"), A = N(t, "maxnumber", 7, 1e6), G = N(t, "mockerror", 7, !1), X = N(t, "obfuscated", 7, void 0), Z = N(t, "plugins", 7, void 0), Y = N(t, "refetchonexpire", 7, !0), M = N(t, "spamfilter", 7, !1), ie = N(t, "strings", 7, void 0), W = N(t, "test", 7, !1), T = N(t, "verifyurl", 7, void 0), J = N(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), ge = N(t, "workerurl", 7, void 0);
  const rr = ["SHA-256", "SHA-384", "SHA-512"], nr = "Visit Altcha.org", ir = "https://altcha.org/", Ke = (n, f) => t.$$host.dispatchEvent(new CustomEvent(n, { detail: f })), lr = (Ar = (Nr = document.documentElement.lang) == null ? void 0 : Nr.split("-")) == null ? void 0 : Ar[0], Tt = /* @__PURE__ */ it(() => {
    var n;
    return i() && new URL(i(), location.origin).host.endsWith(".altcha.org") && !!((n = i()) != null && n.includes("apiKey=ckey_"));
  }), Vt = /* @__PURE__ */ it(() => a() ? _r(a()) : void 0), ar = /* @__PURE__ */ it(() => ie() ? _r(ie()) : {}), te = /* @__PURE__ */ it(() => {
    var n;
    return {
      ariaLinkLabel: nr,
      error: "Verification failed. Try again later.",
      expired: "Verification expired. Try again.",
      footer: `Protected by <a href="${ir}" target="_blank" aria-label="${((n = d(ar)) == null ? void 0 : n.ariaLinkLabel) || nr}">ALTCHA</a>`,
      label: "I'm not a robot",
      verified: "Verified",
      verifying: "Verifying...",
      waitAlert: "Verifying... please wait.",
      ...d(ar)
    };
  });
  let Ve = Ge(!1), U = Ge(void 0), qe = Ge(null), Pe = null, E = null, be = Ge(null), fe = null, $e = Ge(null), ye = [], x = Ge(D(C.UNVERIFIED));
  bt(() => {
    Ke("statechange", {
      payload: d($e),
      state: d(x)
    });
  }), bt(() => {
    Kn(d(be));
  }), bt(() => {
    qn(d(x));
  }), Il(() => {
    Wn(), E && (E.removeEventListener("submit", dr), E.removeEventListener("reset", vr), E.removeEventListener("focusin", cr), E = null), fe && (clearTimeout(fe), fe = null), document.removeEventListener("click", ur), document.removeEventListener("scroll", fr), window.removeEventListener("resize", gr);
  }), Fn(() => {
    var n;
    L("mounted", "1.0.7"), L("workers", J()), Hn(), L("plugins", ye.length ? ye.map((f) => f.constructor.pluginName).join(", ") : "none"), W() && L("using test mode"), u() && gt(u()), r() !== void 0 && L("auto", r()), s() !== void 0 && mr(s()), E = (n = d(U)) == null ? void 0 : n.closest("form"), E && (E.addEventListener("submit", dr, { capture: !0 }), E.addEventListener("reset", vr), r() === "onfocus" && E.addEventListener("focusin", cr)), r() === "onload" && (X() ? Qe() : pe()), d(Tt) && (g() || m()) && L("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      Ke("load");
    });
  });
  function or(n, f) {
    return btoa(JSON.stringify({
      algorithm: n.algorithm,
      challenge: n.challenge,
      number: f.number,
      salt: n.salt,
      signature: n.signature,
      test: W() ? !0 : void 0,
      took: f.took
    }));
  }
  function Wn() {
    for (const n of ye)
      n.destroy();
  }
  function sr() {
    i() && Y() && d(x) === C.VERIFIED ? pe() : et(C.EXPIRED, d(te).expired);
  }
  async function Un() {
    var n;
    if (G())
      throw L("mocking error"), new Error("Mocked error.");
    if (d(Vt))
      return L("using provided json data"), d(Vt);
    if (W())
      return L("generating test challenge", { test: W() }), Pl(typeof W() != "boolean" ? +W() : void 0);
    {
      if (!i() && E) {
        const y = E.getAttribute("action");
        y != null && y.includes("/form/") && i(y + "/altcha");
      }
      if (!i())
        throw new Error("Attribute challengeurl not set.");
      L("fetching challenge from", i());
      const f = await fetch(i(), {
        headers: M() ? { "x-altcha-spam-filter": "1" } : {}
      });
      if (f.status !== 200)
        throw new Error(`Server responded with ${f.status}.`);
      const _ = f.headers.get("Expires"), k = f.headers.get("X-Altcha-Config"), z = await f.json(), I = new URLSearchParams((n = z.salt.split("?")) == null ? void 0 : n[1]), b = I.get("expires") || I.get("expire");
      if (b) {
        const y = new Date(+b * 1e3), re = isNaN(y.getTime()) ? 0 : y.getTime() - Date.now();
        re > 0 && gt(re);
      }
      if (k)
        try {
          const y = JSON.parse(k);
          y && typeof y == "object" && (y.verifyurl && (y.verifyurl = new URL(y.verifyurl, new URL(i())).toString()), pr(y));
        } catch (y) {
          L("unable to configure from X-Altcha-Config", y);
        }
      if (!u() && (_ != null && _.length)) {
        const y = Date.parse(_);
        if (y) {
          const re = y - Date.now();
          re > 0 && gt(re);
        }
      }
      return z;
    }
  }
  function Mn(n) {
    var _;
    const f = E == null ? void 0 : E.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((_ = f == null ? void 0 : f.value) == null ? void 0 : _.slice(f.value.indexOf("@"))) || void 0;
  }
  function jn() {
    return M() === "ipAddress" ? {
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
    } : typeof M() == "object" ? M() : {
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
  function Bn(n) {
    return [
      ...(E == null ? void 0 : E.querySelectorAll(n != null && n.length ? n.map((_) => `input[name="${_}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (_, k) => {
        const z = k.name, I = k.value;
        return z && I && (_[z] = /\n/.test(I) ? I.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : I), _;
      },
      {}
    );
  }
  function Hn() {
    const n = Z() !== void 0 ? Z().split(",") : void 0;
    for (const f of globalThis.altchaPlugins)
      (!n || n.includes(f.pluginName)) && ye.push(new f({
        el: d(U),
        clarify: Qe,
        dispatch: Ke,
        getConfiguration: wr,
        getFloatingAnchor: Er,
        getState: xr,
        log: L,
        reset: et,
        solve: yr,
        setState: Cr,
        setFloatingAnchor: kr,
        verify: pe
      }));
  }
  function L(...n) {
    (o() || n.some((f) => f instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${p()}]`, ...n);
  }
  function Jn() {
    [C.UNVERIFIED, C.ERROR, C.EXPIRED].includes(d(x)) ? M() && (E == null ? void 0 : E.reportValidity()) === !1 ? R(Ve, !1) : X() ? Qe() : pe() : R(Ve, !0);
  }
  function ur(n) {
    const f = n.target;
    s() && f && !d(U).contains(f) && (d(x) === C.VERIFIED || r() === "off" && d(x) === C.UNVERIFIED) && (d(U).style.display = "none");
  }
  function fr() {
    s() && d(x) !== C.UNVERIFIED && ht();
  }
  function Kn(n) {
    for (const f of ye)
      typeof f.onErrorChange == "function" && f.onErrorChange(d(be));
  }
  function cr(n) {
    d(x) === C.UNVERIFIED && pe();
  }
  function dr(n) {
    E && r() === "onsubmit" ? d(x) === C.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), pe().then(() => {
      E == null || E.requestSubmit();
    })) : d(x) !== C.VERIFIED && (n.preventDefault(), n.stopPropagation(), d(x) === C.VERIFYING && hr()) : E && s() && r() === "off" && d(x) === C.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), d(U).style.display = "block", ht());
  }
  function vr() {
    et();
  }
  function hr() {
    d(x) === C.VERIFYING && d(te).waitAlert && alert(d(te).waitAlert);
  }
  function qn(n) {
    for (const f of ye)
      typeof f.onStateChange == "function" && f.onStateChange(d(x));
    s() && d(x) !== C.UNVERIFIED && requestAnimationFrame(() => {
      ht();
    }), R(Ve, d(x) === C.VERIFIED);
  }
  function gr() {
    s() && ht();
  }
  function _r(n) {
    return JSON.parse(n);
  }
  function ht(n = 20) {
    if (d(U))
      if (Pe || (Pe = (h() ? document.querySelector(h()) : E == null ? void 0 : E.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || E), Pe) {
        const f = parseInt(v(), 10) || 12, _ = Pe.getBoundingClientRect(), k = d(U).getBoundingClientRect(), z = document.documentElement.clientHeight, I = document.documentElement.clientWidth, b = s() === "auto" ? _.bottom + k.height + f + n > z : s() === "top", y = Math.max(n, Math.min(I - n - k.width, _.left + _.width / 2 - k.width / 2));
        if (b ? d(U).style.top = `${_.top - (k.height + f)}px` : d(U).style.top = `${_.bottom + f}px`, d(U).style.left = `${y}px`, d(U).setAttribute("data-floating", b ? "top" : "bottom"), d(qe)) {
          const re = d(qe).getBoundingClientRect();
          d(qe).style.left = _.left - y + _.width / 2 - re.width / 2 + "px";
        }
      } else
        L("unable to find floating anchor element");
  }
  async function Qn(n) {
    if (!T())
      throw new Error("Attribute verifyurl not set.");
    L("requesting server verification from", T());
    const f = { payload: n };
    if (M()) {
      const {
        blockedCountries: z,
        classifier: I,
        disableRules: b,
        email: y,
        expectedLanguages: re,
        expectedCountries: Gt,
        fields: rt,
        ipAddress: nt,
        text: di,
        timeZone: Tr
      } = jn();
      f.blockedCountries = z, f.classifier = I, f.disableRules = b, f.email = y === !1 ? void 0 : Mn(y), f.expectedCountries = Gt, f.expectedLanguages = re || (lr ? [lr] : void 0), f.fields = rt === !1 ? void 0 : Bn(rt), f.ipAddress = nt === !1 ? void 0 : nt || "auto", f.text = di, f.timeZone = Tr === !1 ? void 0 : Tr || Gl();
    }
    const _ = await fetch(T(), {
      body: JSON.stringify(f),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (_.status !== 200)
      throw new Error(`Server responded with ${_.status}.`);
    const k = await _.json();
    if (k != null && k.payload && R($e, D(k.payload)), Ke("serververification", k), l() && k.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  function gt(n) {
    L("expire", n), fe && (clearTimeout(fe), fe = null), n < 1 ? sr() : fe = setTimeout(sr, n);
  }
  function mr(n) {
    L("floating", n), s() !== n && (d(U).style.left = "", d(U).style.top = ""), s(n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : s()), s() ? (r() || r("onsubmit"), document.addEventListener("scroll", fr), document.addEventListener("click", ur), window.addEventListener("resize", gr)) : r() === "onsubmit" && r(void 0);
  }
  function br(n) {
    if (!n.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (n.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!rr.includes(n.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${rr.join(", ")}`);
    if (!n.challenge || n.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!n.salt || n.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function yr(n) {
    let f = null;
    if ("Worker" in window) {
      try {
        f = await ei(n, n.maxnumber);
      } catch (_) {
        L(_);
      }
      if ((f == null ? void 0 : f.number) !== void 0 || "obfuscated" in n)
        return { data: n, solution: f };
    }
    if ("obfuscated" in n) {
      const _ = await Fl(n.obfuscated, n.key, n.maxnumber);
      return { data: n, solution: await _.promise };
    }
    return {
      data: n,
      solution: await zl(n.challenge, n.salt, n.algorithm, n.maxnumber || A()).promise
    };
  }
  async function ei(n, f = typeof W() == "number" ? W() : A(), _ = Math.ceil(J())) {
    const k = [];
    _ = Math.min(16, Math.max(1, _));
    for (let b = 0; b < _; b++)
      k.push(altchaCreateWorker(ge()));
    const z = Math.ceil(f / _), I = await Promise.all(k.map((b, y) => {
      const re = y * z;
      return new Promise((Gt) => {
        b.addEventListener("message", (rt) => {
          if (rt.data)
            for (const nt of k)
              nt !== b && nt.postMessage({ type: "abort" });
          Gt(rt.data);
        }), b.postMessage({
          payload: n,
          max: re + z,
          start: re,
          type: "work"
        });
      });
    }));
    for (const b of k)
      b.terminate();
    return I.find((b) => !!b) || null;
  }
  async function Qe() {
    if (!X()) {
      R(x, D(C.ERROR));
      return;
    }
    const n = ye.find((f) => f.constructor.pluginName === "obfuscation");
    if (!n || !("clarify" in n)) {
      R(x, D(C.ERROR)), L("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in n && typeof n.clarify == "function")
      return n.clarify();
  }
  function pr(n) {
    n.obfuscated !== void 0 && X(n.obfuscated), n.auto !== void 0 && (r(n.auto), r() === "onload" && (X() ? Qe() : pe())), n.blockspam !== void 0 && l(!!n.blockspam), n.floatinganchor !== void 0 && h(n.floatinganchor), n.delay !== void 0 && c(n.delay), n.floatingoffset !== void 0 && v(n.floatingoffset), n.floating !== void 0 && mr(n.floating), n.expire !== void 0 && (gt(n.expire), u(n.expire)), n.challenge && (a(typeof n.challenge == "string" ? n.challenge : JSON.stringify(n.challenge)), br(d(Vt))), n.challengeurl !== void 0 && i(n.challengeurl), n.debug !== void 0 && o(!!n.debug), n.hidefooter !== void 0 && g(!!n.hidefooter), n.hidelogo !== void 0 && m(!!n.hidelogo), n.maxnumber !== void 0 && A(+n.maxnumber), n.mockerror !== void 0 && G(!!n.mockerror), n.name !== void 0 && p(n.name), n.refetchonexpire !== void 0 && Y(!!n.refetchonexpire), n.spamfilter !== void 0 && M(typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && ie(typeof n.strings == "string" ? n.strings : JSON.stringify(n.strings)), n.test !== void 0 && W(typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && T(n.verifyurl), n.workers !== void 0 && J(+n.workers), n.workerurl !== void 0 && ge(n.workerurl);
  }
  function wr() {
    return {
      auto: r(),
      blockspam: l(),
      challengeurl: i(),
      debug: o(),
      delay: c(),
      expire: u(),
      floating: s(),
      floatinganchor: h(),
      floatingoffset: v(),
      hidefooter: g(),
      hidelogo: m(),
      name: p(),
      maxnumber: A(),
      mockerror: G(),
      obfuscated: X(),
      refetchonexpire: Y(),
      spamfilter: M(),
      strings: d(te),
      test: W(),
      verifyurl: T(),
      workers: J(),
      workerurl: ge()
    };
  }
  function Er() {
    return Pe;
  }
  function ti(n) {
    return ye.find((f) => f.constructor.pluginName === n);
  }
  function xr() {
    return d(x);
  }
  function et(n = C.UNVERIFIED, f = null) {
    fe && (clearTimeout(fe), fe = null), R(Ve, !1), R(be, D(f)), R($e, null), R(x, D(n));
  }
  function kr(n) {
    Pe = n;
  }
  function Cr(n, f = null) {
    R(x, D(n)), R(be, D(f));
  }
  async function pe() {
    return et(C.VERIFYING), await new Promise((n) => setTimeout(n, c() || 0)), Un().then((n) => (br(n), L("challenge", n), yr(n))).then(({ data: n, solution: f }) => {
      if (L("solution", f), "challenge" in n && f && !("clearText" in f))
        if ((f == null ? void 0 : f.number) !== void 0) {
          if (T())
            return Qn(or(n, f));
          R($e, D(or(n, f))), L("payload", d($e));
        } else
          throw L("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      R(x, D(C.VERIFIED)), L("verified"), fl().then(() => {
        Ke("verified", { payload: d($e) });
      });
    }).catch((n) => {
      L(n), R(x, D(C.ERROR)), R(be, D(n.message));
    });
  }
  var Rr = Kl(), Ir = Ft(Rr);
  wl(Ir, t, "default", {});
  var tt = _e(Ir, 2), Pt = q(tt), $r = q(Pt);
  {
    var ri = (n) => {
      var f = Ol();
      Q(n, f);
    };
    we($r, (n) => {
      d(x) === C.VERIFYING && n(ri);
    });
  }
  var _t = _e($r, 2), ze = q(_t);
  Wr(ze), ze.__change = Jn, K(_t);
  var zt = _e(_t, 2), ni = q(zt);
  {
    var ii = (n) => {
      var f = Xl(), _ = Ft(f), k = q(_);
      Fe(k, () => d(te).verified), K(_);
      var z = _e(_, 2);
      Wr(z), De(() => {
        ae(z, "name", p()), xl(z, d($e));
      }), Q(n, f);
    }, li = (n) => {
      var f = _l(), _ = Ft(f);
      {
        var k = (I) => {
          var b = Zl(), y = q(b);
          Fe(y, () => d(te).verifying), K(b), Q(I, b);
        }, z = (I) => {
          var b = Wl(), y = q(b);
          Fe(y, () => d(te).label), K(b), De(() => ae(b, "for", `${p() ?? ""}_checkbox`)), Q(I, b);
        };
        we(
          _,
          (I) => {
            d(x) === C.VERIFYING ? I(k) : I(z, !1);
          },
          !0
        );
      }
      Q(n, f);
    };
    we(ni, (n) => {
      d(x) === C.VERIFIED ? n(ii) : n(li, !1);
    });
  }
  K(zt);
  var ai = _e(zt, 2);
  {
    var oi = (n) => {
      var f = Ul(), _ = q(f);
      ae(_, "href", ir), K(f), De(() => ae(_, "aria-label", d(te).ariaLinkLabel)), Q(n, f);
    };
    we(ai, (n) => {
      (m() !== !0 || d(Tt)) && n(oi);
    });
  }
  K(Pt);
  var Sr = _e(Pt, 2);
  {
    var si = (n) => {
      var f = Bl(), _ = _e(q(f), 2);
      {
        var k = (I) => {
          var b = Ml(), y = q(b);
          Fe(y, () => d(te).expired), K(b), De(() => ae(b, "title", d(be))), Q(I, b);
        }, z = (I) => {
          var b = jl(), y = q(b);
          Fe(y, () => d(te).error), K(b), De(() => ae(b, "title", d(be))), Q(I, b);
        };
        we(_, (I) => {
          d(x) === C.EXPIRED ? I(k) : I(z, !1);
        });
      }
      K(f), Q(n, f);
    };
    we(Sr, (n) => {
      (d(be) || d(x) === C.EXPIRED) && n(si);
    });
  }
  var Lr = _e(Sr, 2);
  {
    var ui = (n) => {
      var f = Hl(), _ = q(f), k = q(_);
      Fe(k, () => d(te).footer), K(_), K(f), Q(n, f);
    };
    we(Lr, (n) => {
      d(te).footer && (g() !== !0 || d(Tt)) && n(ui);
    });
  }
  var fi = _e(Lr, 2);
  {
    var ci = (n) => {
      var f = Jl();
      jr(f, (_) => R(qe, _), () => d(qe)), Q(n, f);
    };
    we(fi, (n) => {
      s() && n(ci);
    });
  }
  return K(tt), jr(tt, (n) => R(U, n), () => d(U)), De(() => {
    ae(tt, "data-state", d(x)), ae(tt, "data-floating", s()), Cl(_t, "altcha-hidden", d(x) === C.VERIFYING), ae(ze, "id", `${p() ?? ""}_checkbox`), ze.required = r() !== "onsubmit" && (!s() || r() !== "off");
  }), hl("invalid", ze, hr), Rl(ze, () => d(Ve), (n) => R(Ve, n)), Q(e, Rr), Tn({
    clarify: Qe,
    configure: pr,
    getConfiguration: wr,
    getFloatingAnchor: Er,
    getPlugin: ti,
    getState: xr,
    reset: et,
    setFloatingAnchor: kr,
    setState: Cr,
    verify: pe,
    get auto() {
      return r();
    },
    set auto(n = void 0) {
      r(n), $();
    },
    get blockspam() {
      return l();
    },
    set blockspam(n = void 0) {
      l(n), $();
    },
    get challengeurl() {
      return i();
    },
    set challengeurl(n = void 0) {
      i(n), $();
    },
    get challengejson() {
      return a();
    },
    set challengejson(n = void 0) {
      a(n), $();
    },
    get debug() {
      return o();
    },
    set debug(n = !1) {
      o(n), $();
    },
    get delay() {
      return c();
    },
    set delay(n = 0) {
      c(n), $();
    },
    get expire() {
      return u();
    },
    set expire(n = void 0) {
      u(n), $();
    },
    get floating() {
      return s();
    },
    set floating(n = void 0) {
      s(n), $();
    },
    get floatinganchor() {
      return h();
    },
    set floatinganchor(n = void 0) {
      h(n), $();
    },
    get floatingoffset() {
      return v();
    },
    set floatingoffset(n = void 0) {
      v(n), $();
    },
    get hidefooter() {
      return g();
    },
    set hidefooter(n = !1) {
      g(n), $();
    },
    get hidelogo() {
      return m();
    },
    set hidelogo(n = !1) {
      m(n), $();
    },
    get name() {
      return p();
    },
    set name(n = "altcha") {
      p(n), $();
    },
    get maxnumber() {
      return A();
    },
    set maxnumber(n = 1e6) {
      A(n), $();
    },
    get mockerror() {
      return G();
    },
    set mockerror(n = !1) {
      G(n), $();
    },
    get obfuscated() {
      return X();
    },
    set obfuscated(n = void 0) {
      X(n), $();
    },
    get plugins() {
      return Z();
    },
    set plugins(n = void 0) {
      Z(n), $();
    },
    get refetchonexpire() {
      return Y();
    },
    set refetchonexpire(n = !0) {
      Y(n), $();
    },
    get spamfilter() {
      return M();
    },
    set spamfilter(n = !1) {
      M(n), $();
    },
    get strings() {
      return ie();
    },
    set strings(n = void 0) {
      ie(n), $();
    },
    get test() {
      return W();
    },
    set test(n = !1) {
      W(n), $();
    },
    get verifyurl() {
      return T();
    },
    set verifyurl(n = void 0) {
      T(n), $();
    },
    get workers() {
      return J();
    },
    set workers(n = Math.min(16, navigator.hardwareConcurrency || 8)) {
      J(n), $();
    },
    get workerurl() {
      return ge();
    },
    set workerurl(n = void 0) {
      ge(n), $();
    }
  });
}
gl(["change"]);
customElements.define("altcha-widget", Tl(
  Ql,
  {
    auto: {},
    blockspam: {},
    challengeurl: {},
    challengejson: {},
    debug: {},
    delay: {},
    expire: {},
    floating: {},
    floatinganchor: {},
    floatingoffset: {},
    hidefooter: {},
    hidelogo: {},
    name: {},
    maxnumber: {},
    mockerror: {},
    obfuscated: {},
    plugins: {},
    refetchonexpire: {},
    spamfilter: {},
    strings: {},
    test: {},
    verifyurl: {},
    workers: {},
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
globalThis.altchaCreateWorker = (e) => e ? new Worker(new URL(e)) : new _i();
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
export {
  Ql as Altcha
};
