var jo = Object.defineProperty;
var Fn = (e) => {
  throw TypeError(e);
};
var qo = (e, t, r) => t in e ? jo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var we = (e, t, r) => qo(e, typeof t != "symbol" ? t + "" : t, r), Mn = (e, t, r) => t.has(e) || Fn("Cannot " + r);
var se = (e, t, r) => (Mn(e, t, "read from private field"), r ? r.call(e) : t.get(e)), $r = (e, t, r) => t.has(e) ? Fn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), Sr = (e, t, r, i) => (Mn(e, t, "write to private field"), i ? i.call(e, r) : t.set(e, r), r);
const ti = `(function(){"use strict";const d=new TextEncoder;function p(e){return[...new Uint8Array(e)].map(t=>t.toString(16).padStart(2,"0")).join("")}async function b(e,t,r){if(typeof crypto>"u"||!("subtle"in crypto)||!("digest"in crypto.subtle))throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");return p(await crypto.subtle.digest(r.toUpperCase(),d.encode(e+t)))}function w(e,t,r="SHA-256",n=1e6,s=0){const o=new AbortController,a=Date.now();return{promise:(async()=>{for(let c=s;c<=n;c+=1){if(o.signal.aborted)return null;if(await b(t,c,r)===e)return{number:c,took:Date.now()-a}}return null})(),controller:o}}function h(e){const t=atob(e),r=new Uint8Array(t.length);for(let n=0;n<t.length;n++)r[n]=t.charCodeAt(n);return r}function g(e,t=12){const r=new Uint8Array(t);for(let n=0;n<t;n++)r[n]=e%256,e=Math.floor(e/256);return r}async function m(e,t="",r=1e6,n=0){const s="AES-GCM",o=new AbortController,a=Date.now(),l=async()=>{for(let u=n;u<=r;u+=1){if(o.signal.aborted||!c||!y)return null;try{const f=await crypto.subtle.decrypt({name:s,iv:g(u)},c,y);if(f)return{clearText:new TextDecoder().decode(f),took:Date.now()-a}}catch{}}return null};let c=null,y=null;try{y=h(e);const u=await crypto.subtle.digest("SHA-256",d.encode(t));c=await crypto.subtle.importKey("raw",u,s,!1,["decrypt"])}catch{return{promise:Promise.reject(),controller:o}}return{promise:l(),controller:o}}let i;onmessage=async e=>{const{type:t,payload:r,start:n,max:s}=e.data;let o=null;if(t==="abort")i==null||i.abort(),i=void 0;else if(t==="work"){if("obfuscated"in r){const{key:a,obfuscated:l}=r||{};o=await m(l,a,s,n)}else{const{algorithm:a,challenge:l,salt:c}=r||{};o=w(l,c,a,s,n)}i=o.controller,o.promise.then(a=>{self.postMessage(a&&{...a,worker:!0})})}}})();
`, Vn = typeof self < "u" && self.Blob && new Blob([ti], { type: "text/javascript;charset=utf-8" });
function Bo(e) {
  let t;
  try {
    if (t = Vn && (self.URL || self.webkitURL).createObjectURL(Vn), !t) throw "";
    const r = new Worker(t, {
      name: e == null ? void 0 : e.name
    });
    return r.addEventListener("error", () => {
      (self.URL || self.webkitURL).revokeObjectURL(t);
    }), r;
  } catch {
    return new Worker(
      "data:text/javascript;charset=utf-8," + encodeURIComponent(ti),
      {
        name: e == null ? void 0 : e.name
      }
    );
  } finally {
    t && (self.URL || self.webkitURL).revokeObjectURL(t);
  }
}
const Ho = "5";
var ei;
typeof window < "u" && ((ei = window.__svelte ?? (window.__svelte = {})).v ?? (ei.v = /* @__PURE__ */ new Set())).add(Ho);
const Go = 1, Yo = 4, Wo = 8, Zo = 16, zo = 1, Jo = 2, qr = "[", ri = "[!", ni = "]", bt = {}, ue = Symbol(), Ko = "http://www.w3.org/1999/xhtml", Un = !1;
function ii(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var oi = Array.isArray, Xo = Array.prototype.indexOf, Qo = Array.from, nr = Object.keys, Mt = Object.defineProperty, rt = Object.getOwnPropertyDescriptor, ea = Object.getOwnPropertyDescriptors, ta = Object.prototype, ra = Array.prototype, ai = Object.getPrototypeOf, jn = Object.isExtensible;
const yt = () => {
};
function li(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function na(e, t, r = !1) {
  return e === void 0 ? r ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
const Ee = 2, si = 4, fr = 8, Br = 16, Fe = 32, ot = 64, ir = 128, ve = 256, or = 512, fe = 1024, Ne = 2048, at = 4096, wt = 8192, cr = 16384, ia = 32768, Hr = 65536, oa = 1 << 19, ui = 1 << 20, Lr = 1 << 21, Ot = Symbol("$state"), fi = Symbol("legacy props"), aa = Symbol("");
function la(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function sa() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function ua(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function fa() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ca() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function da(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function ha() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function va() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function ga() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function dr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let M = !1;
function _t(e) {
  M = e;
}
let F;
function Ye(e) {
  if (e === null)
    throw dr(), bt;
  return F = e;
}
function Et() {
  return Ye(
    /** @type {TemplateNode} */
    /* @__PURE__ */ ze(F)
  );
}
function W(e) {
  if (M) {
    if (/* @__PURE__ */ ze(F) !== null)
      throw dr(), bt;
    F = e;
  }
}
function pa() {
  for (var e = 0, t = F; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === ni) {
        if (e === 0) return t;
        e -= 1;
      } else (r === qr || r === ri) && (e += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ze(t)
    );
    t.remove(), t = i;
  }
}
let ma = !1;
function He(e) {
  if (typeof e != "object" || e === null || Ot in e)
    return e;
  const t = ai(e);
  if (t !== ta && t !== ra)
    return e;
  var r = /* @__PURE__ */ new Map(), i = oi(e), a = /* @__PURE__ */ O(0), o = N, u = (s) => {
    var c = N;
    Te(o);
    var d = s();
    return Te(c), d;
  };
  return i && r.set("length", /* @__PURE__ */ O(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, c, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && ha();
        var _ = r.get(c);
        return _ === void 0 ? (_ = u(() => /* @__PURE__ */ O(d.value)), r.set(c, _)) : y(
          _,
          u(() => He(d.value))
        ), !0;
      },
      deleteProperty(s, c) {
        var d = r.get(c);
        if (d === void 0)
          c in s && (r.set(
            c,
            u(() => /* @__PURE__ */ O(ue))
          ), Dr(a));
        else {
          if (i && typeof c == "string") {
            var _ = (
              /** @type {Source<number>} */
              r.get("length")
            ), h = Number(c);
            Number.isInteger(h) && h < _.v && y(_, h);
          }
          y(d, ue), Dr(a);
        }
        return !0;
      },
      get(s, c, d) {
        var w;
        if (c === Ot)
          return e;
        var _ = r.get(c), h = c in s;
        if (_ === void 0 && (!h || (w = rt(s, c)) != null && w.writable) && (_ = u(() => /* @__PURE__ */ O(He(h ? s[c] : ue))), r.set(c, _)), _ !== void 0) {
          var p = l(_);
          return p === ue ? void 0 : p;
        }
        return Reflect.get(s, c, d);
      },
      getOwnPropertyDescriptor(s, c) {
        var d = Reflect.getOwnPropertyDescriptor(s, c);
        if (d && "value" in d) {
          var _ = r.get(c);
          _ && (d.value = l(_));
        } else if (d === void 0) {
          var h = r.get(c), p = h == null ? void 0 : h.v;
          if (h !== void 0 && p !== ue)
            return {
              enumerable: !0,
              configurable: !0,
              value: p,
              writable: !0
            };
        }
        return d;
      },
      has(s, c) {
        var p;
        if (c === Ot)
          return !0;
        var d = r.get(c), _ = d !== void 0 && d.v !== ue || Reflect.has(s, c);
        if (d !== void 0 || T !== null && (!_ || (p = rt(s, c)) != null && p.writable)) {
          d === void 0 && (d = u(() => /* @__PURE__ */ O(_ ? He(s[c]) : ue)), r.set(c, d));
          var h = l(d);
          if (h === ue)
            return !1;
        }
        return _;
      },
      set(s, c, d, _) {
        var K;
        var h = r.get(c), p = c in s;
        if (i && c === "length")
          for (var w = d; w < /** @type {Source<number>} */
          h.v; w += 1) {
            var S = r.get(w + "");
            S !== void 0 ? y(S, ue) : w in s && (S = u(() => /* @__PURE__ */ O(ue)), r.set(w + "", S));
          }
        h === void 0 ? (!p || (K = rt(s, c)) != null && K.writable) && (h = u(() => /* @__PURE__ */ O(void 0)), y(
          h,
          u(() => He(d))
        ), r.set(c, h)) : (p = h.v !== ue, y(
          h,
          u(() => He(d))
        ));
        var C = Reflect.getOwnPropertyDescriptor(s, c);
        if (C != null && C.set && C.set.call(_, d), !p) {
          if (i && typeof c == "string") {
            var V = (
              /** @type {Source<number>} */
              r.get("length")
            ), ce = Number(c);
            Number.isInteger(ce) && ce >= V.v && y(V, ce + 1);
          }
          Dr(a);
        }
        return !0;
      },
      ownKeys(s) {
        l(a);
        var c = Reflect.ownKeys(s).filter((h) => {
          var p = r.get(h);
          return p === void 0 || p.v !== ue;
        });
        for (var [d, _] of r)
          _.v !== ue && !(d in s) && c.push(d);
        return c;
      },
      setPrototypeOf() {
        va();
      }
    }
  );
}
function Dr(e, t = 1) {
  y(e, e.v + t);
}
var qn, ci, di, hi;
function Pr() {
  if (qn === void 0) {
    qn = window, ci = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    di = rt(t, "firstChild").get, hi = rt(t, "nextSibling").get, jn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), jn(r) && (r.__t = void 0);
  }
}
function hr(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function _e(e) {
  return di.call(e);
}
// @__NO_SIDE_EFFECTS__
function ze(e) {
  return hi.call(e);
}
function Z(e, t) {
  if (!M)
    return /* @__PURE__ */ _e(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ _e(F)
  );
  return r === null && (r = F.appendChild(hr())), Ye(r), r;
}
function Tt(e, t) {
  if (!M) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ _e(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ ze(r) : r;
  }
  return F;
}
function z(e, t = 1, r = !1) {
  let i = M ? F : e;
  for (var a; t--; )
    a = i, i = /** @type {TemplateNode} */
    /* @__PURE__ */ ze(i);
  if (!M)
    return i;
  var o = i == null ? void 0 : i.nodeType;
  if (r && o !== 3) {
    var u = hr();
    return i === null ? a == null || a.after(u) : i.before(u), Ye(u), u;
  }
  return Ye(i), /** @type {TemplateNode} */
  i;
}
function _a(e) {
  e.textContent = "";
}
function vi(e) {
  return e === this.v;
}
function gi(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Gr(e) {
  return !gi(e, this.v);
}
// @__NO_SIDE_EFFECTS__
function vr(e) {
  var t = Ee | Ne, r = N !== null && (N.f & Ee) !== 0 ? (
    /** @type {Derived} */
    N
  ) : null;
  return T === null || r !== null && (r.f & ve) !== 0 ? t |= ve : T.f |= ui, {
    ctx: oe,
    deps: null,
    effects: null,
    equals: vi,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: r ?? D
  };
}
// @__NO_SIDE_EFFECTS__
function Lt(e) {
  const t = /* @__PURE__ */ vr(e);
  return Ri(t), t;
}
// @__NO_SIDE_EFFECTS__
function ba(e) {
  const t = /* @__PURE__ */ vr(e);
  return t.equals = Gr, t;
}
function pi(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      We(
        /** @type {Effect} */
        t[r]
      );
  }
}
function ya(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & Ee) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function mi(e) {
  var t, r = T;
  Ze(ya(e));
  try {
    pi(e), t = Ni(e);
  } finally {
    Ze(r);
  }
  return t;
}
function _i(e) {
  var t = mi(e), r = (Ge || (e.f & ve) !== 0) && e.deps !== null ? at : fe;
  Ce(e, r), e.equals(t) || (e.v = t, e.wv = Si());
}
function wa(e) {
  T === null && N === null && ua(), N !== null && (N.f & ve) !== 0 && T === null && sa(), qt && la();
}
function Ea(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function lt(e, t, r, i = !0) {
  var a = T, o = {
    ctx: oe,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Ne,
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
  if (r)
    try {
      Jr(o), o.f |= ia;
    } catch (c) {
      throw We(o), c;
    }
  else t !== null && pr(o);
  var u = r && o.deps === null && o.first === null && o.nodes_start === null && o.teardown === null && (o.f & (ui | ir)) === 0;
  if (!u && i && (a !== null && Ea(o, a), N !== null && (N.f & Ee) !== 0)) {
    var s = (
      /** @type {Derived} */
      N
    );
    (s.effects ?? (s.effects = [])).push(o);
  }
  return o;
}
function Yr(e) {
  const t = lt(fr, null, !1);
  return Ce(t, fe), t.teardown = e, t;
}
function Or(e) {
  wa();
  var t = T !== null && (T.f & Fe) !== 0 && oe !== null && !oe.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      oe
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: D,
      reaction: N
    });
  } else {
    var i = Wr(e);
    return i;
  }
}
function Ca(e) {
  const t = lt(ot, e, !0);
  return () => {
    We(t);
  };
}
function xa(e) {
  const t = lt(ot, e, !0);
  return (r = {}) => new Promise((i) => {
    r.outro ? Mr(t, () => {
      We(t), i(void 0);
    }) : (We(t), i(void 0));
  });
}
function Wr(e) {
  return lt(si, e, !1);
}
function Zr(e) {
  return lt(fr, e, !0);
}
function $e(e, t = [], r = vr) {
  const i = t.map(r);
  return bi(() => e(...i.map(l)));
}
function bi(e, t = 0) {
  return lt(fr | Br | t, e, !0);
}
function Fr(e, t = !0) {
  return lt(fr | Fe, e, !0, t);
}
function yi(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = qt, i = N;
    Hn(!0), Te(null);
    try {
      t.call(null);
    } finally {
      Hn(r), Te(i);
    }
  }
}
function wi(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var i = r.next;
    (r.f & ot) !== 0 ? r.parent = null : We(r, t), r = i;
  }
}
function ka(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Fe) === 0 && We(t), t = r;
  }
}
function We(e, t = !0) {
  var r = !1;
  (t || (e.f & oa) !== 0) && e.nodes_start !== null && (Ei(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), r = !0), wi(e, t && !r), ur(e, 0), Ce(e, cr);
  var i = e.transitions;
  if (i !== null)
    for (const o of i)
      o.stop();
  yi(e);
  var a = e.parent;
  a !== null && a.first !== null && Ci(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function Ei(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ze(e)
    );
    e.remove(), e = r;
  }
}
function Ci(e) {
  var t = e.parent, r = e.prev, i = e.next;
  r !== null && (r.next = i), i !== null && (i.prev = r), t !== null && (t.first === e && (t.first = i), t.last === e && (t.last = r));
}
function Mr(e, t) {
  var r = [];
  xi(e, r, !0), Aa(r, () => {
    We(e), t && t();
  });
}
function Aa(e, t) {
  var r = e.length;
  if (r > 0) {
    var i = () => --r || t();
    for (var a of e)
      a.out(i);
  } else
    t();
}
function xi(e, t, r) {
  if ((e.f & wt) === 0) {
    if (e.f ^= wt, e.transitions !== null)
      for (const u of e.transitions)
        (u.is_global || r) && t.push(u);
    for (var i = e.first; i !== null; ) {
      var a = i.next, o = (i.f & Hr) !== 0 || (i.f & Fe) !== 0;
      xi(i, t, o ? r : !1), i = a;
    }
  }
}
function Bn(e) {
  ki(e, !0);
}
function ki(e, t) {
  if ((e.f & wt) !== 0) {
    e.f ^= wt, (e.f & fe) === 0 && (e.f ^= fe), Bt(e) && (Ce(e, Ne), pr(e));
    for (var r = e.first; r !== null; ) {
      var i = r.next, a = (r.f & Hr) !== 0 || (r.f & Fe) !== 0;
      ki(r, a ? t : !1), r = i;
    }
    if (e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || t) && o.in();
  }
}
const Ia = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let Vt = [], Ut = [];
function Ai() {
  var e = Vt;
  Vt = [], li(e);
}
function Ii() {
  var e = Ut;
  Ut = [], li(e);
}
function zr(e) {
  Vt.length === 0 && queueMicrotask(Ai), Vt.push(e);
}
function Ra(e) {
  Ut.length === 0 && Ia(Ii), Ut.push(e);
}
function $a() {
  Vt.length > 0 && Ai(), Ut.length > 0 && Ii();
}
let er = !1, ar = !1, lr = null, nt = !1, qt = !1;
function Hn(e) {
  qt = e;
}
let Ft = [];
let N = null, Se = !1;
function Te(e) {
  N = e;
}
let T = null;
function Ze(e) {
  T = e;
}
let ie = null;
function Ri(e) {
  N !== null && N.f & Lr && (ie === null ? ie = [e] : ie.push(e));
}
let ne = null, he = 0, pe = null;
function Sa(e) {
  pe = e;
}
let $i = 1, sr = 0, Ge = !1;
function Si() {
  return ++$i;
}
function Bt(e) {
  var h;
  var t = e.f;
  if ((t & Ne) !== 0)
    return !0;
  if ((t & at) !== 0) {
    var r = e.deps, i = (t & ve) !== 0;
    if (r !== null) {
      var a, o, u = (t & or) !== 0, s = i && T !== null && !Ge, c = r.length;
      if (u || s) {
        var d = (
          /** @type {Derived} */
          e
        ), _ = d.parent;
        for (a = 0; a < c; a++)
          o = r[a], (u || !((h = o == null ? void 0 : o.reactions) != null && h.includes(d))) && (o.reactions ?? (o.reactions = [])).push(d);
        u && (d.f ^= or), s && _ !== null && (_.f & ve) === 0 && (d.f ^= ve);
      }
      for (a = 0; a < c; a++)
        if (o = r[a], Bt(
          /** @type {Derived} */
          o
        ) && _i(
          /** @type {Derived} */
          o
        ), o.wv > e.wv)
          return !0;
    }
    (!i || T !== null && !Ge) && Ce(e, fe);
  }
  return !1;
}
function Da(e, t) {
  for (var r = t; r !== null; ) {
    if ((r.f & ir) !== 0)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= ir;
      }
    r = r.parent;
  }
  throw er = !1, e;
}
function Gn(e) {
  return (e.f & cr) === 0 && (e.parent === null || (e.parent.f & ir) === 0);
}
function gr(e, t, r, i) {
  if (er) {
    if (r === null && (er = !1), Gn(t))
      throw e;
    return;
  }
  if (r !== null && (er = !0), Da(e, t), Gn(t))
    throw e;
}
function Di(e, t, r = !0) {
  var i = e.reactions;
  if (i !== null)
    for (var a = 0; a < i.length; a++) {
      var o = i[a];
      ie != null && ie.includes(e) || ((o.f & Ee) !== 0 ? Di(
        /** @type {Derived} */
        o,
        t,
        !1
      ) : t === o && (r ? Ce(o, Ne) : (o.f & fe) !== 0 && Ce(o, at), pr(
        /** @type {Effect} */
        o
      )));
    }
}
function Ni(e) {
  var w;
  var t = ne, r = he, i = pe, a = N, o = Ge, u = ie, s = oe, c = Se, d = e.f;
  ne = /** @type {null | Value[]} */
  null, he = 0, pe = null, Ge = (d & ve) !== 0 && (Se || !nt || N === null), N = (d & (Fe | ot)) === 0 ? e : null, ie = null, Yn(e.ctx), Se = !1, sr++, e.f |= Lr;
  try {
    var _ = (
      /** @type {Function} */
      (0, e.fn)()
    ), h = e.deps;
    if (ne !== null) {
      var p;
      if (ur(e, he), h !== null && he > 0)
        for (h.length = he + ne.length, p = 0; p < ne.length; p++)
          h[he + p] = ne[p];
      else
        e.deps = h = ne;
      if (!Ge)
        for (p = he; p < h.length; p++)
          ((w = h[p]).reactions ?? (w.reactions = [])).push(e);
    } else h !== null && he < h.length && (ur(e, he), h.length = he);
    if (Mi() && pe !== null && !Se && h !== null && (e.f & (Ee | at | Ne)) === 0)
      for (p = 0; p < /** @type {Source[]} */
      pe.length; p++)
        Di(
          pe[p],
          /** @type {Effect} */
          e
        );
    return a !== null && a !== e && (sr++, pe !== null && (i === null ? i = pe : i.push(.../** @type {Source[]} */
    pe))), _;
  } finally {
    ne = t, he = r, pe = i, N = a, Ge = o, ie = u, Yn(s), Se = c, e.f ^= Lr;
  }
}
function Na(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var i = Xo.call(r, e);
    if (i !== -1) {
      var a = r.length - 1;
      a === 0 ? r = t.reactions = null : (r[i] = r[a], r.pop());
    }
  }
  r === null && (t.f & Ee) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ne === null || !ne.includes(t)) && (Ce(t, at), (t.f & (ve | or)) === 0 && (t.f ^= or), pi(
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
      Na(e, r[i]);
}
function Jr(e) {
  var t = e.f;
  if ((t & cr) === 0) {
    Ce(e, fe);
    var r = T, i = oe, a = nt;
    T = e, nt = !0;
    try {
      (t & Br) !== 0 ? ka(e) : wi(e), yi(e);
      var o = Ni(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = $i;
      var u = e.deps, s;
      Un && ma && e.f & Ne;
    } catch (c) {
      gr(c, e, r, i || e.ctx);
    } finally {
      nt = a, T = r;
    }
  }
}
function Ta() {
  try {
    fa();
  } catch (e) {
    if (lr !== null)
      gr(e, lr, null);
    else
      throw e;
  }
}
function Ti() {
  var e = nt;
  try {
    var t = 0;
    for (nt = !0; Ft.length > 0; ) {
      t++ > 1e3 && Ta();
      var r = Ft, i = r.length;
      Ft = [];
      for (var a = 0; a < i; a++) {
        var o = Pa(r[a]);
        La(o);
      }
      jt.clear();
    }
  } finally {
    ar = !1, nt = e, lr = null;
  }
}
function La(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var i = e[r];
      if ((i.f & (cr | wt)) === 0)
        try {
          Bt(i) && (Jr(i), i.deps === null && i.first === null && i.nodes_start === null && (i.teardown === null ? Ci(i) : i.fn = null));
        } catch (a) {
          gr(a, i, null, i.ctx);
        }
    }
}
function pr(e) {
  ar || (ar = !0, queueMicrotask(Ti));
  for (var t = lr = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (ot | Fe)) !== 0) {
      if ((r & fe) === 0) return;
      t.f ^= fe;
    }
  }
  Ft.push(t);
}
function Pa(e) {
  for (var t = [], r = e; r !== null; ) {
    var i = r.f, a = (i & (Fe | ot)) !== 0, o = a && (i & fe) !== 0;
    if (!o && (i & wt) === 0) {
      if ((i & si) !== 0)
        t.push(r);
      else if (a)
        r.f ^= fe;
      else
        try {
          Bt(r) && Jr(r);
        } catch (c) {
          gr(c, r, null, r.ctx);
        }
      var u = r.first;
      if (u !== null) {
        r = u;
        continue;
      }
    }
    var s = r.parent;
    for (r = r.next; r === null && s !== null; )
      r = s.next, s = s.parent;
  }
  return t;
}
function A(e) {
  for (var t; ; ) {
    if ($a(), Ft.length === 0)
      return (
        /** @type {T} */
        t
      );
    ar = !0, Ti();
  }
}
async function Nr() {
  await Promise.resolve(), A();
}
function l(e) {
  var t = e.f, r = (t & Ee) !== 0;
  if (N !== null && !Se) {
    if (!(ie != null && ie.includes(e))) {
      var i = N.deps;
      e.rv < sr && (e.rv = sr, ne === null && i !== null && i[he] === e ? he++ : ne === null ? ne = [e] : (!Ge || !ne.includes(e)) && ne.push(e));
    }
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var a = (
      /** @type {Derived} */
      e
    ), o = a.parent;
    o !== null && (o.f & ve) === 0 && (a.f ^= ve);
  }
  return r && (a = /** @type {Derived} */
  e, Bt(a) && _i(a)), qt && jt.has(e) ? jt.get(e) : e.v;
}
function it(e) {
  var t = Se;
  try {
    return Se = !0, e();
  } finally {
    Se = t;
  }
}
const Oa = -7169;
function Ce(e, t) {
  e.f = e.f & Oa | t;
}
const jt = /* @__PURE__ */ new Map();
function Li(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: vi,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function O(e, t) {
  const r = Li(e);
  return Ri(r), r;
}
// @__NO_SIDE_EFFECTS__
function Kr(e, t = !1) {
  const r = Li(e);
  return t || (r.equals = Gr), r;
}
function y(e, t, r = !1) {
  N !== null && !Se && Mi() && (N.f & (Ee | Br)) !== 0 && !(ie != null && ie.includes(e)) && ga();
  let i = r ? He(t) : t;
  return Fa(e, i);
}
function Fa(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    qt ? jt.set(e, t) : jt.set(e, r), e.v = t, (e.f & Ee) !== 0 && ((e.f & Ne) !== 0 && mi(
      /** @type {Derived} */
      e
    ), Ce(e, (e.f & ve) === 0 ? fe : at)), e.wv = Si(), Pi(e, Ne), T !== null && (T.f & fe) !== 0 && (T.f & (Fe | ot)) === 0 && (pe === null ? Sa([e]) : pe.push(e));
  }
  return t;
}
function Pi(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, a = 0; a < i; a++) {
      var o = r[a], u = o.f;
      (u & Ne) === 0 && (Ce(o, t), (u & (fe | ve)) !== 0 && ((u & Ee) !== 0 ? Pi(
        /** @type {Derived} */
        o,
        at
      ) : pr(
        /** @type {Effect} */
        o
      )));
    }
}
let oe = null;
function Yn(e) {
  oe = e;
}
function Oi(e, t = !1, r) {
  var i = oe = {
    p: oe,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
  Yr(() => {
    i.d = !0;
  });
}
function Fi(e) {
  const t = oe;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const u = t.e;
    if (u !== null) {
      var r = D, i = N;
      t.e = null;
      try {
        for (var a = 0; a < u.length; a++) {
          var o = u[a];
          Ze(o.effect), Te(o.reaction), Wr(o.fn);
        }
      } finally {
        Ze(r), Te(i);
      }
    }
    oe = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Mi() {
  return !0;
}
const Ma = ["touchstart", "touchmove"];
function Va(e) {
  return Ma.includes(e);
}
function Ua(e, t) {
  if (t) {
    const r = document.body;
    e.autofocus = !0, zr(() => {
      document.activeElement === r && e.focus();
    });
  }
}
let Wn = !1;
function Vi() {
  Wn || (Wn = !0, document.addEventListener(
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
function Ui(e) {
  var t = N, r = T;
  Te(null), Ze(null);
  try {
    return e();
  } finally {
    Te(t), Ze(r);
  }
}
function ja(e, t, r, i = r) {
  e.addEventListener(t, () => Ui(r));
  const a = e.__on_r;
  a ? e.__on_r = () => {
    a(), i(!0);
  } : e.__on_r = () => i(!0), Vi();
}
const ji = /* @__PURE__ */ new Set(), Vr = /* @__PURE__ */ new Set();
function qa(e, t, r, i = {}) {
  function a(o) {
    if (i.capture || Pt.call(t, o), !o.cancelBubble)
      return Ui(() => r == null ? void 0 : r.call(this, o));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? zr(() => {
    t.addEventListener(e, a, i);
  }) : t.addEventListener(e, a, i), a;
}
function Be(e, t, r, i, a) {
  var o = { capture: i, passive: a }, u = qa(e, t, r, o);
  (t === document.body || t === window || t === document) && Yr(() => {
    t.removeEventListener(e, u, o);
  });
}
function Ba(e) {
  for (var t = 0; t < e.length; t++)
    ji.add(e[t]);
  for (var r of Vr)
    r(e);
}
function Pt(e) {
  var K;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), i = e.type, a = ((K = e.composedPath) == null ? void 0 : K.call(e)) || [], o = (
    /** @type {null | Element} */
    a[0] || e.target
  ), u = 0, s = e.__root;
  if (s) {
    var c = a.indexOf(s);
    if (c !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var d = a.indexOf(t);
    if (d === -1)
      return;
    c <= d && (u = c);
  }
  if (o = /** @type {Element} */
  a[u] || e.target, o !== t) {
    Mt(e, "currentTarget", {
      configurable: !0,
      get() {
        return o || r;
      }
    });
    var _ = N, h = T;
    Te(null), Ze(null);
    try {
      for (var p, w = []; o !== null; ) {
        var S = o.assignedSlot || o.parentNode || /** @type {any} */
        o.host || null;
        try {
          var C = o["__" + i];
          if (C != null && (!/** @type {any} */
          o.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === o))
            if (oi(C)) {
              var [V, ...ce] = C;
              V.apply(o, [e, ...ce]);
            } else
              C.call(o, e);
        } catch (te) {
          p ? w.push(te) : p = te;
        }
        if (e.cancelBubble || S === t || S === null)
          break;
        o = S;
      }
      if (p) {
        for (let te of w)
          queueMicrotask(() => {
            throw te;
          });
        throw p;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Te(_), Ze(h);
    }
  }
}
function Xr(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function De(e, t) {
  var r = (
    /** @type {Effect} */
    D
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function xe(e, t) {
  var r = (t & zo) !== 0, i = (t & Jo) !== 0, a, o = !e.startsWith("<!>");
  return () => {
    if (M)
      return De(F, null), F;
    a === void 0 && (a = Xr(o ? e : "<!>" + e), r || (a = /** @type {Node} */
    /* @__PURE__ */ _e(a)));
    var u = (
      /** @type {TemplateNode} */
      i || ci ? document.importNode(a, !0) : a.cloneNode(!0)
    );
    if (r) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ _e(u)
      ), c = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      De(s, c);
    } else
      De(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function mr(e, t, r = "svg") {
  var i = !e.startsWith("<!>"), a = `<${r}>${i ? e : "<!>" + e}</${r}>`, o;
  return () => {
    if (M)
      return De(F, null), F;
    if (!o) {
      var u = (
        /** @type {DocumentFragment} */
        Xr(a)
      ), s = (
        /** @type {Element} */
        /* @__PURE__ */ _e(u)
      );
      o = /** @type {Element} */
      /* @__PURE__ */ _e(s);
    }
    var c = (
      /** @type {TemplateNode} */
      o.cloneNode(!0)
    );
    return De(c, c), c;
  };
}
function Kt() {
  if (M)
    return De(F, null), F;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = hr();
  return e.append(t, r), De(t, r), e;
}
function j(e, t) {
  if (M) {
    T.nodes_end = F, Et();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Ha(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function qi(e, t) {
  return Bi(e, t);
}
function Ga(e, t) {
  Pr(), t.intro = t.intro ?? !1;
  const r = t.target, i = M, a = F;
  try {
    for (var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ _e(r)
    ); o && (o.nodeType !== 8 || /** @type {Comment} */
    o.data !== qr); )
      o = /** @type {TemplateNode} */
      /* @__PURE__ */ ze(o);
    if (!o)
      throw bt;
    _t(!0), Ye(
      /** @type {Comment} */
      o
    ), Et();
    const u = Bi(e, { ...t, anchor: o });
    if (F === null || F.nodeType !== 8 || /** @type {Comment} */
    F.data !== ni)
      throw dr(), bt;
    return _t(!1), /**  @type {Exports} */
    u;
  } catch (u) {
    if (u === bt)
      return t.recover === !1 && ca(), Pr(), _a(r), _t(!1), qi(e, t);
    throw u;
  } finally {
    _t(i), Ye(a);
  }
}
const pt = /* @__PURE__ */ new Map();
function Bi(e, { target: t, anchor: r, props: i = {}, events: a, context: o, intro: u = !0 }) {
  Pr();
  var s = /* @__PURE__ */ new Set(), c = (h) => {
    for (var p = 0; p < h.length; p++) {
      var w = h[p];
      if (!s.has(w)) {
        s.add(w);
        var S = Va(w);
        t.addEventListener(w, Pt, { passive: S });
        var C = pt.get(w);
        C === void 0 ? (document.addEventListener(w, Pt, { passive: S }), pt.set(w, 1)) : pt.set(w, C + 1);
      }
    }
  };
  c(Qo(ji)), Vr.add(c);
  var d = void 0, _ = xa(() => {
    var h = r ?? t.appendChild(hr());
    return Fr(() => {
      if (o) {
        Oi({});
        var p = (
          /** @type {ComponentContext} */
          oe
        );
        p.c = o;
      }
      a && (i.$$events = a), M && De(
        /** @type {TemplateNode} */
        h,
        null
      ), d = e(h, i) || {}, M && (T.nodes_end = F), o && Fi();
    }), () => {
      var S;
      for (var p of s) {
        t.removeEventListener(p, Pt);
        var w = (
          /** @type {number} */
          pt.get(p)
        );
        --w === 0 ? (document.removeEventListener(p, Pt), pt.delete(p)) : pt.set(p, w);
      }
      Vr.delete(c), h !== r && ((S = h.parentNode) == null || S.removeChild(h));
    };
  });
  return Ur.set(d, _), d;
}
let Ur = /* @__PURE__ */ new WeakMap();
function Ya(e, t) {
  const r = Ur.get(e);
  return r ? (Ur.delete(e), r(t)) : Promise.resolve();
}
function J(e, t, [r, i] = [0, 0]) {
  M && r === 0 && Et();
  var a = e, o = null, u = null, s = ue, c = r > 0 ? Hr : 0, d = !1;
  const _ = (p, w = !0) => {
    d = !0, h(w, p);
  }, h = (p, w) => {
    if (s === (s = p)) return;
    let S = !1;
    if (M && i !== -1) {
      if (r === 0) {
        const V = (
          /** @type {Comment} */
          a.data
        );
        V === qr ? i = 0 : V === ri ? i = 1 / 0 : (i = parseInt(V.substring(1)), i !== i && (i = s ? 1 / 0 : -1));
      }
      const C = i > r;
      !!s === C && (a = pa(), Ye(a), _t(!1), S = !0, i = -1);
    }
    s ? (o ? Bn(o) : w && (o = Fr(() => w(a))), u && Mr(u, () => {
      u = null;
    })) : (u ? Bn(u) : w && (u = Fr(() => w(a, [r + 1, i]))), o && Mr(o, () => {
      o = null;
    })), S && _t(!0);
  };
  bi(() => {
    d = !1, t(_), d || h(null, null);
  }, c), M && (a = F);
}
function tt(e, t, r = !1, i = !1, a = !1) {
  var o = e, u = "";
  $e(() => {
    var s = (
      /** @type {Effect} */
      D
    );
    if (u === (u = t() ?? "")) {
      M && Et();
      return;
    }
    if (s.nodes_start !== null && (Ei(
      s.nodes_start,
      /** @type {TemplateNode} */
      s.nodes_end
    ), s.nodes_start = s.nodes_end = null), u !== "") {
      if (M) {
        F.data;
        for (var c = Et(), d = c; c !== null && (c.nodeType !== 8 || /** @type {Comment} */
        c.data !== ""); )
          d = c, c = /** @type {TemplateNode} */
          /* @__PURE__ */ ze(c);
        if (c === null)
          throw dr(), bt;
        De(F, d), o = Ye(c);
        return;
      }
      var _ = u + "";
      r ? _ = `<svg>${_}</svg>` : i && (_ = `<math>${_}</math>`);
      var h = Xr(_);
      if ((r || i) && (h = /** @type {Element} */
      /* @__PURE__ */ _e(h)), De(
        /** @type {TemplateNode} */
        /* @__PURE__ */ _e(h),
        /** @type {TemplateNode} */
        h.lastChild
      ), r || i)
        for (; /* @__PURE__ */ _e(h); )
          o.before(
            /** @type {Node} */
            /* @__PURE__ */ _e(h)
          );
      else
        o.before(h);
    }
  });
}
function Wa(e, t, r, i, a) {
  var s;
  M && Et();
  var o = (s = t.$$slots) == null ? void 0 : s[r], u = !1;
  o === !0 && (o = t.children, u = !0), o === void 0 || o(e, u ? () => i : i);
}
const Zn = [...` 	
\r\f \v\uFEFF`];
function Za(e, t, r) {
  var i = "" + e;
  if (r) {
    for (var a in r)
      if (r[a])
        i = i ? i + " " + a : a;
      else if (i.length)
        for (var o = a.length, u = 0; (u = i.indexOf(a, u)) >= 0; ) {
          var s = u + o;
          (u === 0 || Zn.includes(i[u - 1])) && (s === i.length || Zn.includes(i[s])) ? i = (u === 0 ? "" : i.substring(0, u)) + i.substring(s + 1) : u = s;
        }
  }
  return i === "" ? null : i;
}
function za(e, t, r, i, a, o) {
  var u = e.__className;
  if (M || u !== r || u === void 0) {
    var s = Za(r, i, o);
    (!M || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : e.className = s), e.__className = r;
  } else if (o && a !== o)
    for (var c in o) {
      var d = !!o[c];
      (a == null || d !== !!a[c]) && e.classList.toggle(c, d);
    }
  return o;
}
const Ja = Symbol("is custom element"), Ka = Symbol("is html");
function zn(e) {
  if (M) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var i = e.value;
          T(e, "value", null), e.value = i;
        }
        if (e.hasAttribute("checked")) {
          var a = e.checked;
          T(e, "checked", null), e.checked = a;
        }
      }
    };
    e.__on_r = r, Ra(r), Vi();
  }
}
function Xa(e, t) {
  var r = Hi(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function D(e, t, r, i) {
  var a = Hi(e);
  M && (a[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || a[t] !== (a[t] = r) && (t === "loading" && (e[aa] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Qa(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Hi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Ja]: e.nodeName.includes("-"),
      [Ka]: e.namespaceURI === Ko
    })
  );
}
var Jn = /* @__PURE__ */ new Map();
function Qa(e) {
  var t = Jn.get(e.nodeName);
  if (t) return t;
  Jn.set(e.nodeName, t = []);
  for (var r, i = e, a = Element.prototype; a !== i; ) {
    r = ea(i);
    for (var o in r)
      r[o].set && t.push(o);
    i = ai(i);
  }
  return t;
}
function el(e, t, r = t) {
  ja(e, "change", (i) => {
    var a = i ? e.defaultChecked : e.checked;
    r(a);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (M && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  it(t) == null) && r(e.checked), Zr(() => {
    var i = t();
    e.checked = !!i;
  });
}
function Kn(e, t) {
  return e === t || (e == null ? void 0 : e[Ot]) === t;
}
function Xt(e = {}, t, r, i) {
  return Wr(() => {
    var a, o;
    return Zr(() => {
      a = o, o = [], it(() => {
        e !== r(...o) && (t(e, ...o), a && Kn(r(...a), e) && t(null, ...a));
      });
    }), () => {
      zr(() => {
        o && Kn(r(...o), e) && t(null, ...o);
      });
    };
  }), e;
}
function Gi(e) {
  oe === null && ii(), Or(() => {
    const t = it(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function tl(e) {
  oe === null && ii(), Gi(() => () => it(e));
}
function Yi(e, t, r) {
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
const mt = [];
function rl(e, t = yt) {
  let r = null;
  const i = /* @__PURE__ */ new Set();
  function a(s) {
    if (gi(e, s) && (e = s, r)) {
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
  function o(s) {
    a(s(
      /** @type {T} */
      e
    ));
  }
  function u(s, c = yt) {
    const d = [s, c];
    return i.add(d), i.size === 1 && (r = t(a, o) || yt), s(
      /** @type {T} */
      e
    ), () => {
      i.delete(d), i.size === 0 && r && (r(), r = null);
    };
  }
  return { set: a, update: o, subscribe: u };
}
function tr(e) {
  let t;
  return Yi(e, (r) => t = r)(), t;
}
let Qt = !1, jr = Symbol();
function nl(e, t, r) {
  const i = r[t] ?? (r[t] = {
    store: null,
    source: /* @__PURE__ */ Kr(void 0),
    unsubscribe: yt
  });
  if (i.store !== e && !(jr in r))
    if (i.unsubscribe(), i.store = e ?? null, e == null)
      i.source.v = void 0, i.unsubscribe = yt;
    else {
      var a = !0;
      i.unsubscribe = Yi(e, (o) => {
        a ? i.source.v = o : y(i.source, o);
      }), a = !1;
    }
  return e && jr in r ? tr(e) : l(i.source);
}
function il() {
  const e = {};
  function t() {
    Yr(() => {
      for (var r in e)
        e[r].unsubscribe();
      Mt(e, jr, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function ol(e) {
  var t = Qt;
  try {
    return Qt = !1, [e(), Qt];
  } finally {
    Qt = t;
  }
}
function Xn(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function I(e, t, r, i) {
  var st;
  var a = (r & Go) !== 0, o = !0, u = (r & Wo) !== 0, s = (r & Zo) !== 0, c = !1, d;
  u ? [d, c] = ol(() => (
    /** @type {V} */
    e[t]
  )) : d = /** @type {V} */
  e[t];
  var _ = Ot in e || fi in e, h = u && (((st = rt(e, t)) == null ? void 0 : st.set) ?? (_ && t in e && ((q) => e[t] = q))) || void 0, p = (
    /** @type {V} */
    i
  ), w = !0, S = !1, C = () => (S = !0, w && (w = !1, s ? p = it(
    /** @type {() => V} */
    i
  ) : p = /** @type {V} */
  i), p);
  d === void 0 && i !== void 0 && (h && o && da(), d = C(), h && h(d));
  var V;
  if (V = () => {
    var q = (
      /** @type {V} */
      e[t]
    );
    return q === void 0 ? C() : (w = !0, S = !1, q);
  }, (r & Yo) === 0)
    return V;
  if (h) {
    var ce = e.$$legacy;
    return function(q, ae) {
      return arguments.length > 0 ? ((!ae || ce || c) && h(ae ? V() : q), q) : V();
    };
  }
  var K = !1, te = /* @__PURE__ */ Kr(d), X = /* @__PURE__ */ vr(() => {
    var q = V(), ae = l(te);
    return K ? (K = !1, ae) : te.v = q;
  });
  return u && l(X), a || (X.equals = Gr), function(q, ae) {
    if (arguments.length > 0) {
      const be = ae ? l(X) : u ? He(q) : q;
      if (!X.equals(be)) {
        if (K = !0, y(te, be), S && p !== void 0 && (p = be), Xn(X))
          return q;
        it(() => l(X));
      }
      return q;
    }
    return Xn(X) ? X.v : l(X);
  };
}
function al(e) {
  return new ll(e);
}
var Oe, me;
class ll {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    $r(this, Oe);
    /** @type {Record<string, any>} */
    $r(this, me);
    var o;
    var r = /* @__PURE__ */ new Map(), i = (u, s) => {
      var c = /* @__PURE__ */ Kr(s);
      return r.set(u, c), c;
    };
    const a = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(u, s) {
          return l(r.get(s) ?? i(s, Reflect.get(u, s)));
        },
        has(u, s) {
          return s === fi ? !0 : (l(r.get(s) ?? i(s, Reflect.get(u, s))), Reflect.has(u, s));
        },
        set(u, s, c) {
          return y(r.get(s) ?? i(s, c), c), Reflect.set(u, s, c);
        }
      }
    );
    Sr(this, me, (t.hydrate ? Ga : qi)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: a,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((o = t == null ? void 0 : t.props) != null && o.$$host) || t.sync === !1) && A(), Sr(this, Oe, a.$$events);
    for (const u of Object.keys(se(this, me)))
      u === "$set" || u === "$destroy" || u === "$on" || Mt(this, u, {
        get() {
          return se(this, me)[u];
        },
        /** @param {any} value */
        set(s) {
          se(this, me)[u] = s;
        },
        enumerable: !0
      });
    se(this, me).$set = /** @param {Record<string, any>} next */
    (u) => {
      Object.assign(a, u);
    }, se(this, me).$destroy = () => {
      Ya(se(this, me));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    se(this, me).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    se(this, Oe)[t] = se(this, Oe)[t] || [];
    const i = (...a) => r.call(this, ...a);
    return se(this, Oe)[t].push(i), () => {
      se(this, Oe)[t] = se(this, Oe)[t].filter(
        /** @param {any} fn */
        (a) => a !== i
      );
    };
  }
  $destroy() {
    se(this, me).$destroy();
  }
}
Oe = new WeakMap(), me = new WeakMap();
let Wi;
typeof HTMLElement == "function" && (Wi = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, i) {
    super();
    /** The Svelte component constructor */
    we(this, "$$ctor");
    /** Slots */
    we(this, "$$s");
    /** @type {any} The Svelte component instance */
    we(this, "$$c");
    /** Whether or not the custom element is connected */
    we(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    we(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    we(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    we(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    we(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    we(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    we(this, "$$me");
    this.$$ctor = t, this.$$s = r, i && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, r, i) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(r), this.$$c) {
      const a = this.$$c.$on(t, r);
      this.$$l_u.set(r, a);
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
      const a = this.$$l_u.get(r);
      a && (a(), this.$$l_u.delete(r));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(a) {
        return (o) => {
          const u = document.createElement("slot");
          a !== "default" && (u.name = a), j(o, u);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, i = sl(this);
      for (const a of this.$$s)
        a in i && (a === "default" && !this.$$d.children ? (this.$$d.children = t(a), r.default = !0) : r[a] = t(a));
      for (const a of this.attributes) {
        const o = this.$$g_p(a.name);
        o in this.$$d || (this.$$d[o] = rr(o, a.value, this.$$p_d, "toProp"));
      }
      for (const a in this.$$p_d)
        !(a in this.$$d) && this[a] !== void 0 && (this.$$d[a] = this[a], delete this[a]);
      this.$$c = al({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = Ca(() => {
        Zr(() => {
          var a;
          this.$$r = !0;
          for (const o of nr(this.$$c)) {
            if (!((a = this.$$p_d[o]) != null && a.reflect)) continue;
            this.$$d[o] = this.$$c[o];
            const u = rr(
              o,
              this.$$d[o],
              this.$$p_d,
              "toAttribute"
            );
            u == null ? this.removeAttribute(this.$$p_d[o].attribute || o) : this.setAttribute(this.$$p_d[o].attribute || o, u);
          }
          this.$$r = !1;
        });
      });
      for (const a in this.$$l)
        for (const o of this.$$l[a]) {
          const u = this.$$c.$on(a, o);
          this.$$l_u.set(o, u);
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
    var a;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = rr(t, i, this.$$p_d, "toProp"), (a = this.$$c) == null || a.$set({ [t]: this.$$d[t] }));
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
    return nr(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function rr(e, t, r, i) {
  var o;
  const a = (o = r[e]) == null ? void 0 : o.type;
  if (t = a === "Boolean" && typeof t != "boolean" ? t != null : t, !i || !r[e])
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
function sl(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function ul(e, t, r, i, a, o) {
  let u = class extends Wi {
    constructor() {
      super(e, r, a), this.$$p_d = t;
    }
    static get observedAttributes() {
      return nr(t).map(
        (s) => (t[s].attribute || s).toLowerCase()
      );
    }
  };
  return nr(t).forEach((s) => {
    Mt(u.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(c) {
        var h;
        c = rr(s, c, t), this.$$d[s] = c;
        var d = this.$$c;
        if (d) {
          var _ = (h = rt(d, s)) == null ? void 0 : h.get;
          _ ? d[s] = c : d.$set({ [s]: c });
        }
      }
    });
  }), i.forEach((s) => {
    Mt(u.prototype, s, {
      get() {
        var c;
        return (c = this.$$c) == null ? void 0 : c[s];
      }
    });
  }), e.element = /** @type {any} */
  u, u;
}
const Zi = new TextEncoder();
function fl(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function cl(e, t = "SHA-256", r = 1e5) {
  const i = Date.now().toString(16);
  e || (e = Math.round(Math.random() * r));
  const a = await zi(i, e, t);
  return {
    algorithm: t,
    challenge: a,
    salt: i,
    signature: ""
  };
}
async function zi(e, t, r) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return fl(
    await crypto.subtle.digest(
      r.toUpperCase(),
      Zi.encode(e + t)
    )
  );
}
function dl(e, t, r = "SHA-256", i = 1e6, a = 0) {
  const o = new AbortController(), u = Date.now();
  return {
    promise: (async () => {
      for (let c = a; c <= i; c += 1) {
        if (o.signal.aborted)
          return null;
        if (await zi(t, c, r) === e)
          return {
            number: c,
            took: Date.now() - u
          };
      }
      return null;
    })(),
    controller: o
  };
}
function Qn() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function hl(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let i = 0; i < t.length; i++)
    r[i] = t.charCodeAt(i);
  return r;
}
function vl(e, t = 12) {
  const r = new Uint8Array(t);
  for (let i = 0; i < t; i++)
    r[i] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function gl(e, t = "", r = 1e6, i = 0) {
  const a = "AES-GCM", o = new AbortController(), u = Date.now(), s = async () => {
    for (let _ = i; _ <= r; _ += 1) {
      if (o.signal.aborted || !c || !d)
        return null;
      try {
        const h = await crypto.subtle.decrypt(
          {
            name: a,
            iv: vl(_)
          },
          c,
          d
        );
        if (h)
          return {
            clearText: new TextDecoder().decode(h),
            took: Date.now() - u
          };
      } catch {
      }
    }
    return null;
  };
  let c = null, d = null;
  try {
    d = hl(e);
    const _ = await crypto.subtle.digest(
      "SHA-256",
      Zi.encode(t)
    );
    c = await crypto.subtle.importKey(
      "raw",
      _,
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
    promise: s(),
    controller: o
  };
}
var x = /* @__PURE__ */ ((e) => (e.CODE = "code", e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(x || {}), ee = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.LOADING = "loading", e.PLAYING = "playing", e.PAUSED = "paused", e.READY = "ready", e))(ee || {});
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (e) => tr(globalThis.altchaI18n.store)[e],
  set: (e, t) => {
    Object.assign(tr(globalThis.altchaI18n.store), {
      [e]: t
    }), globalThis.altchaI18n.store.set(tr(globalThis.altchaI18n.store));
  },
  store: rl({})
};
const pl = {
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
globalThis.altchaI18n.set("en", pl);
const Tr = (e, t) => {
  let r = /* @__PURE__ */ ba(() => na(t == null ? void 0 : t(), 24));
  var i = yl();
  $e(() => {
    D(i, "width", l(r)), D(i, "height", l(r));
  }), j(e, i);
};
function ml(e, t) {
  e.code === "Space" && (e.preventDefault(), e.stopImmediatePropagation(), t());
}
function _l(e, t) {
  e.preventDefault(), t();
}
function bl(e, t, r, i, a, o, u, s) {
  var c;
  [
    x.UNVERIFIED,
    x.ERROR,
    x.EXPIRED,
    x.CODE
  ].includes(l(t)) ? r() !== !1 && ((c = l(i)) == null ? void 0 : c.reportValidity()) === !1 ? y(a, !1) : o() ? u() : s() : y(a, !0);
}
var yl = /* @__PURE__ */ mr('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="altcha-spinner"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor"></path></svg>'), wl = /* @__PURE__ */ xe('<input type="hidden">'), El = /* @__PURE__ */ xe('<div><a target="_blank" class="altcha-logo" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor"></path></svg></a></div>'), Cl = /* @__PURE__ */ mr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg>'), xl = /* @__PURE__ */ mr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z"></path></svg>'), kl = /* @__PURE__ */ mr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"></path></svg>'), Al = /* @__PURE__ */ xe('<button type="button" class="altcha-code-challenge-audio"><!></button>'), Il = /* @__PURE__ */ xe("<audio hidden autoplay><source></audio>"), Rl = /* @__PURE__ */ xe('<div class="altcha-code-challenge" role="dialog"><div class="altcha-code-challenge-arrow"></div> <form data-code-challenge-form="1"><img class="altcha-code-challenge-image" alt=""> <input type="text" autocomplete="off" name="code" class="altcha-code-challenge-input" required> <div class="altcha-code-challenge-buttons"><div class="altcha-code-challenge-buttons-left"><!> <button type="button" class="altcha-code-challenge-reload"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z"></path></svg></button></div> <button type="submit" class="altcha-code-challenge-verify"><!> </button></div> <!></form></div>'), $l = /* @__PURE__ */ xe("<div><!></div>"), Sl = /* @__PURE__ */ xe("<div><!></div>"), Dl = /* @__PURE__ */ xe('<div class="altcha-error"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg> <!></div>'), Nl = /* @__PURE__ */ xe('<div class="altcha-footer"><div><!></div></div>'), Tl = /* @__PURE__ */ xe('<div class="altcha-anchor-arrow"></div>'), Ll = /* @__PURE__ */ xe('<!> <div class="altcha"><div class="altcha-main"><div><!> <input type="checkbox"></div> <label class="altcha-label"><!></label> <!> <!> <!></div> <!> <!> <!></div>', 1);
function Pl(e, t) {
  var Pn, On;
  Oi(t, !0);
  const [r, i] = il(), a = () => nl(Qi, "$altchaI18nStore", r);
  let o = I(t, "auto", 7, void 0), u = I(t, "blockspam", 7, void 0), s = I(t, "challengeurl", 7, void 0), c = I(t, "challengejson", 7, void 0), d = I(t, "credentials", 7, void 0), _ = I(t, "customfetch", 7, void 0), h = I(t, "debug", 7, !1), p = I(t, "delay", 7, 0), w = I(t, "disableautofocus", 7, !1), S = I(t, "expire", 7, void 0), C = I(t, "floating", 7, void 0), V = I(t, "floatinganchor", 7, void 0), ce = I(t, "floatingoffset", 7, void 0), K = I(t, "floatingpersist", 7, !1), te = I(t, "hidefooter", 7, !1), X = I(t, "hidelogo", 7, !1), st = I(t, "id", 7, void 0), q = I(t, "language", 7, void 0), ae = I(t, "name", 7, "altcha"), be = I(t, "maxnumber", 7, 1e6), Ct = I(t, "mockerror", 7, !1), Me = I(t, "obfuscated", 7, void 0), ke = I(t, "overlay", 7, void 0), xt = I(t, "overlaycontent", 7, void 0), Ht = I(t, "plugins", 7, void 0), kt = I(t, "refetchonexpire", 7, !0), Je = I(t, "sentinel", 7, void 0), Ae = I(t, "spamfilter", 7, !1), ut = I(t, "strings", 7, void 0), ge = I(t, "test", 7, !1), re = I(t, "verifyurl", 7, void 0), ft = I(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), At = I(t, "workerurl", 7, void 0);
  const { altchaI18n: Xi } = globalThis, Qi = Xi.store, Qr = ["SHA-256", "SHA-384", "SHA-512"], eo = "https://altcha.org/", Ve = (n, f) => {
    t.$$host.dispatchEvent(new CustomEvent(n, { detail: f }));
  }, en = (On = (Pn = document.documentElement.lang) == null ? void 0 : Pn.split("-")) == null ? void 0 : On[0], _r = /* @__PURE__ */ Lt(() => {
    var n;
    return s() && new URL(s(), location.origin).host.endsWith(".altcha.org") && !!((n = s()) != null && n.includes("apiKey=ckey_"));
  }), br = /* @__PURE__ */ Lt(() => c() ? pn(c()) : void 0), to = /* @__PURE__ */ Lt(() => ut() ? pn(ut()) : {}), P = /* @__PURE__ */ Lt(() => ({
    ...on(a()),
    ...l(to)
  })), tn = /* @__PURE__ */ Lt(() => `${st() || ae()}_checkbox_${Math.round(Math.random() * 1e8)}`);
  let It = /* @__PURE__ */ O(!1), H = /* @__PURE__ */ O(null), R = /* @__PURE__ */ O(He(x.UNVERIFIED)), U = /* @__PURE__ */ O(void 0), Rt = /* @__PURE__ */ O(null), Ue = /* @__PURE__ */ O(null), de = /* @__PURE__ */ O(null), yr = /* @__PURE__ */ O(null), ct = /* @__PURE__ */ O(null), L = /* @__PURE__ */ O(null), $t = /* @__PURE__ */ O(null), Ke = /* @__PURE__ */ O(null), Ie = null, G = /* @__PURE__ */ O(null), Xe = /* @__PURE__ */ O(!1), je = [], wr = /* @__PURE__ */ O(!1), Le = /* @__PURE__ */ O(null);
  Or(() => {
    go(l(Ke));
  }), Or(() => {
    po(l(R));
  }), tl(() => {
    ro(), l(L) && (l(L).removeEventListener("submit", cn), l(L).removeEventListener("reset", dn), l(L).removeEventListener("focusin", fn), y(L, null)), Ie && (clearTimeout(Ie), Ie = null), document.removeEventListener("click", sn), document.removeEventListener("scroll", un), window.removeEventListener("resize", gn);
  }), Gi(() => {
    var n;
    $("mounted", "2.0.3"), $("workers", ft()), ao(), $("plugins", je.length ? je.map((f) => f.constructor.pluginName).join(", ") : "none"), ge() && $("using test mode"), S() && Cr(S()), o() !== void 0 && $("auto", o()), C() !== void 0 && _n(C()), y(L, (n = l(U)) == null ? void 0 : n.closest("form"), !0), l(L) && (l(L).addEventListener("submit", cn, { capture: !0 }), l(L).addEventListener("reset", dn), (o() === "onfocus" || K() === "focus") && l(L).addEventListener("focusin", fn)), ke() && bn(!0), o() === "onload" && (Me() ? St() : Pe()), l(_r) && (te() || X()) && $("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      Ve("load");
    });
  });
  function Gt(n, f) {
    return btoa(JSON.stringify({
      algorithm: n.algorithm,
      challenge: n.challenge,
      number: f.number,
      salt: n.salt,
      signature: n.signature,
      test: ge() ? !0 : void 0,
      took: f.took
    }));
  }
  function ro() {
    for (const n of je)
      n.destroy();
  }
  function rn() {
    s() && kt() && l(R) === x.VERIFIED ? Pe() : Qe(x.EXPIRED, l(P).expired);
  }
  async function no() {
    var n;
    if (Ct())
      throw $("mocking error"), new Error("Mocked error.");
    if (l(br))
      return $("using provided json data"), l(br);
    if (ge())
      return $("generating test challenge", { test: ge() }), cl(typeof ge() != "boolean" ? +ge() : void 0);
    {
      if (!s() && l(L)) {
        const k = l(L).getAttribute("action");
        k != null && k.includes("/form/") && s(k + "/altcha");
      }
      if (!s())
        throw new Error("Attribute challengeurl not set.");
      $("fetching challenge from", s());
      const f = {
        credentials: typeof d() == "boolean" ? "include" : d(),
        headers: Ae() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      }, v = await nn()(s(), f);
      if (!v || !(v instanceof Response))
        throw new Error("Custom fetch function did not return a response.");
      if (v.status !== 200)
        throw new Error(`Server responded with ${v.status}.`);
      const m = v.headers.get("X-Altcha-Config"), g = await v.json(), E = new URLSearchParams((n = g.salt.split("?")) == null ? void 0 : n[1]), b = E.get("expires") || E.get("expire");
      if (b) {
        const k = new Date(+b * 1e3), B = isNaN(k.getTime()) ? 0 : k.getTime() - Date.now();
        B > 0 && Cr(B);
      }
      if (m)
        try {
          const k = JSON.parse(m);
          k && typeof k == "object" && (k.verifyurl && !k.verifyurl.startsWith("fn:") && (k.verifyurl = ln(k.verifyurl)), En(k));
        } catch (k) {
          $("unable to configure from X-Altcha-Config", k);
        }
      return g;
    }
  }
  function io(n) {
    var v, m;
    const f = (v = l(L)) == null ? void 0 : v.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((m = f == null ? void 0 : f.value) == null ? void 0 : m.slice(f.value.indexOf("@"))) || void 0;
  }
  function nn() {
    let n = fetch;
    if (_())
      if ($("using customfetch"), typeof _() == "string") {
        if (n = globalThis[_()] || null, !n)
          throw new Error(`Custom fetch function not found: ${_()}`);
      } else
        n = _();
    return n;
  }
  function on(n, f = [
    q() || "",
    document.documentElement.lang || "",
    ...navigator.languages
  ]) {
    const v = Object.keys(n).map((g) => g.toLowerCase()), m = f.reduce(
      (g, E) => (E = E.toLowerCase(), g || (n[E] ? E : null) || v.find((b) => E.split("-")[0] === b.split("-")[0]) || null),
      null
    );
    return n[m || "en"];
  }
  function oo() {
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
  function an(n) {
    var v;
    return [
      ...((v = l(L)) == null ? void 0 : v.querySelectorAll(n != null && n.length ? n.map((m) => `input[name="${m}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (m, g) => {
        const E = g.name, b = g.value;
        return E && b && (m[E] = /\n/.test(b) ? b.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : b), m;
      },
      {}
    );
  }
  function ln(n, f) {
    const v = new URL(s() || location.origin), m = new URL(n, v);
    if (m.search || (m.search = v.search), f)
      for (const g in f)
        f[g] !== void 0 && f[g] !== null && m.searchParams.set(g, f[g]);
    return m.toString();
  }
  function ao() {
    const n = Ht() !== void 0 ? Ht().split(",") : void 0;
    for (const f of globalThis.altchaPlugins)
      (!n || n.includes(f.pluginName)) && je.push(new f({
        el: l(U),
        clarify: St,
        dispatch: Ve,
        getConfiguration: Cn,
        getFloatingAnchor: xn,
        getState: kn,
        log: $,
        reset: Qe,
        solve: wn,
        setState: Re,
        setFloatingAnchor: An,
        verify: Pe
      }));
  }
  function $(...n) {
    (h() || n.some((f) => f instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${ae()}]`, ...n);
  }
  function lo() {
    y(G, ee.PAUSED, !0);
  }
  function so(n) {
    y(G, ee.ERROR, !0);
  }
  function uo() {
    y(G, ee.READY, !0);
  }
  function fo() {
    y(G, ee.LOADING, !0);
  }
  function co() {
    y(G, ee.PLAYING, !0);
  }
  function ho() {
    y(G, ee.PAUSED, !0);
  }
  function vo(n) {
    var f;
    if (n.preventDefault(), n.stopPropagation(), l(H)) {
      const v = new FormData(n.target), m = String(v.get("code"));
      if ((f = re()) != null && f.startsWith("fn:")) {
        const g = re().replace(/^fn:/, "");
        if ($(`calling ${g} function instead of verifyurl`), !(g in globalThis))
          throw new Error(`Global function "${g}" is undefined.`);
        return globalThis[g]({
          challenge: l(H).challenge,
          code: m,
          solution: l(H).solution
        });
      }
      y(Xe, !0), mn(Gt(l(H).challenge, l(H).solution), m).then(({ reason: g, verified: E }) => {
        E ? (y(H, null), Re(x.VERIFIED), $("verified"), Nr().then(() => {
          var b;
          (b = l(yr)) == null || b.focus(), Ve("verified", { payload: l(Le) }), o() === "onsubmit" ? Er(l($t)) : ke() && Yt();
        })) : (Qe(), y(Ke, g || "Verification failed", !0));
      }).catch((g) => {
        y(H, null), Re(x.ERROR, g), $("sentinel verification failed:", g);
      }).finally(() => {
        y(Xe, !1);
      });
    }
  }
  function sn(n) {
    var v;
    const f = n.target;
    C() && f && !l(U).contains(f) && (l(R) === x.VERIFIED && K() === !1 || l(R) === x.VERIFIED && K() === "focus" && !((v = l(L)) != null && v.matches(":focus-within")) || o() === "off" && l(R) === x.UNVERIFIED) && Yt();
  }
  function un() {
    C() && l(R) !== x.UNVERIFIED && Dt();
  }
  function go(n) {
    for (const f of je)
      typeof f.onErrorChange == "function" && f.onErrorChange(l(Ke));
  }
  function fn(n) {
    l(R) === x.UNVERIFIED ? Pe() : C() && K() === "focus" && l(R) === x.VERIFIED && xr();
  }
  function cn(n) {
    var m;
    const f = n.target;
    f != null && f.hasAttribute("data-code-challenge-form") || (y($t, n.submitter, !0), l(L) && o() === "onsubmit" ? ((m = l($t)) == null || m.blur(), l(R) === x.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), Pe().then(() => {
      Er(l($t));
    })) : l(R) !== x.VERIFIED && (n.preventDefault(), n.stopPropagation(), l(R) === x.VERIFYING && hn())) : l(L) && C() && o() === "off" && l(R) === x.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), xr()));
  }
  function dn() {
    Qe();
  }
  function hn() {
    l(R) === x.VERIFYING && l(P).waitAlert && alert(l(P).waitAlert);
  }
  function vn() {
    l(Ue) ? l(Ue).paused ? (l(Ue).currentTime = 0, l(Ue).play()) : l(Ue).pause() : (y(wr, !0), requestAnimationFrame(() => {
      var n;
      (n = l(Ue)) == null || n.play();
    }));
  }
  function po(n) {
    for (const f of je)
      typeof f.onStateChange == "function" && f.onStateChange(l(R));
    C() && l(R) !== x.UNVERIFIED && requestAnimationFrame(() => {
      Dt();
    }), y(It, l(R) === x.VERIFIED), ke() && l(de) && (l(R) !== x.UNVERIFIED ? l(de).style.display = "flex" : l(de).style.display = "none");
  }
  function gn() {
    C() && Dt();
  }
  function pn(n) {
    return JSON.parse(n);
  }
  async function mo(n) {
    if (!re())
      throw new Error("Attribute verifyurl not set.");
    $("requesting server verification from", re());
    const f = { payload: n };
    if (Ae() !== !1) {
      const {
        blockedCountries: g,
        classifier: E,
        disableRules: b,
        email: k,
        expectedLanguages: B,
        expectedCountries: Q,
        fields: le,
        ipAddress: qe,
        text: Ar,
        timeZone: zt
      } = oo();
      f.blockedCountries = g, f.classifier = E, f.disableRules = b, f.email = k === !1 ? void 0 : io(k), f.expectedCountries = Q, f.expectedLanguages = B || (en ? [en] : void 0), f.fields = le === !1 ? void 0 : an(le), f.ipAddress = qe === !1 ? void 0 : qe || "auto", f.text = Ar, f.timeZone = zt === !1 ? void 0 : zt || Qn();
    }
    const v = await nn()(re(), {
      body: JSON.stringify(f),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (!v || !(v instanceof Response))
      throw new Error("Custom fetch function did not return a response.");
    if (v.status !== 200)
      throw new Error(`Server responded with ${v.status}.`);
    const m = await v.json();
    if (m != null && m.payload && y(Le, m.payload, !0), Ve("serververification", m), u() && m.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  async function mn(n, f) {
    if (!re())
      throw new Error("Attribute verifyurl not set.");
    $("requesting sentinel verification from", re());
    const v = { code: f, payload: n };
    Je() && (v.fields = Je().fields ? an() : void 0, v.timeZone = Je().timeZone ? Qn() : void 0);
    const m = await fetch(re(), {
      body: JSON.stringify(v),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (!m || !(m instanceof Response))
      throw new Error("Fetch function did not return a response.");
    if (m.status !== 200)
      throw new Error(`Server responded with ${m.status}.`);
    const g = await m.json();
    return g != null && g.payload && y(Le, g.payload, !0), Ve("sentinelverification", g), g;
  }
  function Er(n) {
    var f;
    l(L) && "requestSubmit" in l(L) ? l(L).requestSubmit(n) : (f = l(L)) != null && f.reportValidity() && (n ? n.click() : l(L).submit());
  }
  function Cr(n) {
    $("expire", n), Ie && (clearTimeout(Ie), Ie = null), n < 1 ? rn() : Ie = setTimeout(rn, n);
  }
  function _n(n) {
    $("floating", n), C() !== n && (l(U).style.left = "", l(U).style.top = ""), C(n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : C()), C() ? (o() || o("onsubmit"), document.addEventListener("scroll", un), document.addEventListener("click", sn), window.addEventListener("resize", gn)) : o() === "onsubmit" && o(void 0);
  }
  function bn(n) {
    var f, v, m, g;
    if (l(de) && ((v = (f = l(U).parentElement) == null ? void 0 : f.parentElement) == null || v.append(l(U).parentElement), document.body.removeChild(l(de))), n && (o() || o("onsubmit"), (g = (m = l(U)) == null ? void 0 : m.parentElement) != null && g.parentElement)) {
      y(de, document.createElement("div"), !0), l(U).parentElement.parentElement.appendChild(l(de));
      const E = document.createElement("div"), b = document.createElement("button");
      b.type = "button", b.innerHTML = "&times;", b.addEventListener("click", (k) => {
        k.preventDefault(), Qe();
      }), l(de).classList.add("altcha-overlay-backdrop"), b.classList.add("altcha-overlay-close-button"), E.classList.add("altcha-overlay"), l(de).append(E), E.append(b), xt() && E.append(...document.querySelectorAll(xt())), E.append(l(U).parentElement);
    }
  }
  function yn(n) {
    if (!n.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (n.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!Qr.includes(n.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${Qr.join(", ")}`);
    if (!n.challenge || n.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!n.salt || n.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function wn(n) {
    let f = null;
    if ("Worker" in window) {
      try {
        f = await _o(n, n.maxNumber || n.maxnumber || be());
      } catch (v) {
        $(v);
      }
      if ((f == null ? void 0 : f.number) !== void 0 || "obfuscated" in n)
        return { data: n, solution: f };
    }
    if ("obfuscated" in n) {
      const v = await gl(n.obfuscated, n.key, n.maxNumber || n.maxnumber);
      return { data: n, solution: await v.promise };
    }
    return {
      data: n,
      solution: await dl(n.challenge, n.salt, n.algorithm, n.maxNumber || n.maxnumber || be()).promise
    };
  }
  async function _o(n, f = typeof ge() == "number" ? ge() : n.maxNumber || n.maxnumber || be(), v = Math.ceil(ft())) {
    const m = [];
    v = Math.min(16, f, Math.max(1, v));
    for (let b = 0; b < v; b++)
      m.push(altchaCreateWorker(At()));
    const g = Math.ceil(f / v), E = await Promise.all(m.map((b, k) => {
      const B = k * g;
      return new Promise((Q) => {
        b.addEventListener("message", (le) => {
          if (le.data)
            for (const qe of m)
              qe !== b && qe.postMessage({ type: "abort" });
          Q(le.data);
        }), b.postMessage({
          payload: n,
          max: B + g,
          start: B,
          type: "work"
        });
      });
    }));
    for (const b of m)
      b.terminate();
    return E.find((b) => !!b) || null;
  }
  async function St() {
    if (!Me()) {
      Re(x.ERROR);
      return;
    }
    const n = je.find((f) => f.constructor.pluginName === "obfuscation");
    if (!n || !("clarify" in n)) {
      Re(x.ERROR), $("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in n && typeof n.clarify == "function")
      return n.clarify();
  }
  function En(n) {
    n.obfuscated !== void 0 && Me(n.obfuscated), n.auto !== void 0 && (o(n.auto), o() === "onload" && (Me() ? St() : Pe())), n.blockspam !== void 0 && u(!!n.blockspam), n.customfetch !== void 0 && _(n.customfetch), n.floatinganchor !== void 0 && V(n.floatinganchor), n.delay !== void 0 && p(n.delay), n.floatingoffset !== void 0 && ce(n.floatingoffset), n.floating !== void 0 && _n(n.floating), n.expire !== void 0 && (Cr(n.expire), S(n.expire)), n.challenge && (c(typeof n.challenge == "string" ? n.challenge : JSON.stringify(n.challenge)), yn(l(br))), n.challengeurl !== void 0 && s(n.challengeurl), n.debug !== void 0 && h(!!n.debug), n.hidefooter !== void 0 && te(!!n.hidefooter), n.hidelogo !== void 0 && X(!!n.hidelogo), n.language !== void 0 && ut(on(a(), [n.language])), n.maxnumber !== void 0 && be(+n.maxnumber), n.mockerror !== void 0 && Ct(!!n.mockerror), n.name !== void 0 && ae(n.name), n.overlay !== void 0 && bn(n.overlay), n.overlaycontent !== void 0 && xt(n.overlaycontent), n.refetchonexpire !== void 0 && kt(!!n.refetchonexpire), n.sentinel !== void 0 && typeof n.sentinel == "object" && Je(n.sentinel), n.spamfilter !== void 0 && Ae(typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && ut(typeof n.strings == "string" ? n.strings : JSON.stringify(n.strings)), n.test !== void 0 && ge(typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && re(n.verifyurl), n.workers !== void 0 && ft(+n.workers), n.workerurl !== void 0 && At(n.workerurl);
  }
  function Cn() {
    return {
      auto: o(),
      blockspam: u(),
      challengeurl: s(),
      debug: h(),
      delay: p(),
      expire: S(),
      floating: C(),
      floatinganchor: V(),
      floatingoffset: ce(),
      hidefooter: te(),
      hidelogo: X(),
      name: ae(),
      maxnumber: be(),
      mockerror: Ct(),
      obfuscated: Me(),
      overlay: ke(),
      refetchonexpire: kt(),
      spamfilter: Ae(),
      strings: l(P),
      test: ge(),
      verifyurl: re(),
      workers: ft(),
      workerurl: At()
    };
  }
  function xn() {
    return l(ct);
  }
  function bo(n) {
    return je.find((f) => f.constructor.pluginName === n);
  }
  function kn() {
    return l(R);
  }
  function Yt() {
    l(U).style.display = "none", ke() && l(de) && (l(de).style.display = "none");
  }
  function Dt(n = 20) {
    var f;
    if (l(U))
      if (l(ct) || y(ct, (V() ? document.querySelector(V()) : (f = l(L)) == null ? void 0 : f.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || l(L), !0), l(ct)) {
        const v = parseInt(ce(), 10) || 12, m = l(ct).getBoundingClientRect(), g = l(U).getBoundingClientRect(), E = document.documentElement.clientHeight, b = document.documentElement.clientWidth, k = C() === "auto" ? m.bottom + g.height + v + n > E : C() === "top", B = Math.max(n, Math.min(b - n - g.width, m.left + m.width / 2 - g.width / 2));
        if (k ? l(U).style.top = `${m.top - (g.height + v)}px` : l(U).style.top = `${m.bottom + v}px`, l(U).style.left = `${B}px`, l(U).setAttribute("data-floating", k ? "top" : "bottom"), l(Rt)) {
          const Q = l(Rt).getBoundingClientRect();
          l(Rt).style.left = m.left - B + m.width / 2 - Q.width / 2 + "px";
        }
      } else
        $("unable to find floating anchor element");
  }
  function Qe(n = x.UNVERIFIED, f = null) {
    Ie && (clearTimeout(Ie), Ie = null), y(It, !1), y(Le, null), y(H, null), y(wr, !1), y(G, null), Re(n, f);
  }
  function An(n) {
    y(ct, n, !0);
  }
  function Re(n, f = null) {
    y(R, n, !0), y(Ke, f, !0), Ve("statechange", {
      payload: l(Le),
      state: l(R)
    });
  }
  function xr() {
    l(U).style.display = "block", C() && Dt(), ke() && l(de) && (l(de).style.display = "flex");
  }
  async function Pe() {
    return Qe(x.VERIFYING), await new Promise((n) => setTimeout(n, p() || 0)), no().then((n) => (yn(n), $("challenge", n), wn(n))).then(({ data: n, solution: f }) => {
      var v;
      if ($("solution", f), !f || n && "challenge" in n && !("clearText" in f))
        if ((f == null ? void 0 : f.number) !== void 0 && "challenge" in n)
          if (re() && "codeChallenge" in n)
            ((v = document.activeElement) == null ? void 0 : v.tagName) === "INPUT" && w() === !1 && document.activeElement.blur(), y(H, { challenge: n, solution: f }, !0);
          else {
            if (re() && Je() !== void 0)
              return mn(Gt(n, f));
            if (re())
              return mo(Gt(n, f));
            y(Le, Gt(n, f), !0), $("payload", l(Le));
          }
        else
          throw $("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      l(H) ? (Re(x.CODE), Nr().then(() => {
        Ve("code", { codeChallenge: l(H) });
      })) : (Re(x.VERIFIED), $("verified"), Nr().then(() => {
        Ve("verified", { payload: l(Le) }), o() === "onsubmit" ? Er(l($t)) : ke() && Yt();
      }));
    }).catch((n) => {
      $(n), Re(x.ERROR, n.message);
    });
  }
  var In = Ll(), Rn = Tt(In);
  Wa(Rn, t, "default", {});
  var dt = z(Rn, 2), kr = Z(dt), Wt = Z(kr);
  let $n;
  var Sn = Z(Wt);
  {
    var yo = (n) => {
      Tr(n);
    };
    J(Sn, (n) => {
      l(R) === x.VERIFYING && n(yo);
    });
  }
  var et = z(Sn, 2);
  zn(et), et.__change = [
    bl,
    R,
    Ae,
    L,
    It,
    Me,
    St,
    Pe
  ], Xt(et, (n) => y(yr, n), () => l(yr)), W(Wt);
  var Zt = z(Wt, 2), wo = Z(Zt);
  {
    var Eo = (n) => {
      var f = Kt(), v = Tt(f);
      tt(v, () => l(P).verified), j(n, f);
    }, Co = (n, f) => {
      {
        var v = (g) => {
          var E = Kt(), b = Tt(E);
          tt(b, () => l(P).verifying), j(g, E);
        }, m = (g, E) => {
          {
            var b = (B) => {
              var Q = Kt(), le = Tt(Q);
              tt(le, () => l(P).verificationRequired), j(B, Q);
            }, k = (B) => {
              var Q = Kt(), le = Tt(Q);
              tt(le, () => l(P).label), j(B, Q);
            };
            J(
              g,
              (B) => {
                l(R) === x.CODE ? B(b) : B(k, !1);
              },
              E
            );
          }
        };
        J(
          n,
          (g) => {
            l(R) === x.VERIFYING ? g(v) : g(m, !1);
          },
          f
        );
      }
    };
    J(wo, (n) => {
      l(R) === x.VERIFIED ? n(Eo) : n(Co, !1);
    });
  }
  W(Zt);
  var Dn = z(Zt, 2);
  {
    var xo = (n) => {
      var f = wl();
      zn(f), $e(() => {
        D(f, "name", ae()), Xa(f, l(Le));
      }), j(n, f);
    };
    J(Dn, (n) => {
      l(R) === x.VERIFIED && n(xo);
    });
  }
  var Nn = z(Dn, 2);
  {
    var ko = (n) => {
      var f = El(), v = Z(f);
      D(v, "href", eo), W(f), $e(() => D(v, "aria-label", l(P).ariaLinkLabel)), j(n, f);
    };
    J(Nn, (n) => {
      (X() !== !0 || l(_r)) && n(ko);
    });
  }
  var Ao = z(Nn, 2);
  {
    var Io = (n) => {
      var f = Rl(), v = z(Z(f), 2), m = Z(v), g = z(m, 2);
      Ua(g, !w()), g.__keydown = [
        ml,
        vn
      ];
      var E = z(g, 2), b = Z(E), k = Z(b);
      {
        var B = (ye) => {
          var Y = Al();
          Y.__click = vn;
          var Jt = Z(Y);
          {
            var Nt = (ht) => {
              Tr(ht, () => 20);
            }, Po = (ht, Oo) => {
              {
                var Fo = (vt) => {
                  var Ir = Cl();
                  j(vt, Ir);
                }, Mo = (vt, Ir) => {
                  {
                    var Vo = (gt) => {
                      var Rr = xl();
                      j(gt, Rr);
                    }, Uo = (gt) => {
                      var Rr = kl();
                      j(gt, Rr);
                    };
                    J(
                      vt,
                      (gt) => {
                        l(G) === ee.PLAYING ? gt(Vo) : gt(Uo, !1);
                      },
                      Ir
                    );
                  }
                };
                J(
                  ht,
                  (vt) => {
                    l(G) === ee.ERROR ? vt(Fo) : vt(Mo, !1);
                  },
                  Oo
                );
              }
            };
            J(Jt, (ht) => {
              l(G) === ee.LOADING ? ht(Nt) : ht(Po, !1);
            });
          }
          W(Y), $e(() => {
            D(Y, "title", l(P).getAudioChallenge), Y.disabled = l(G) === ee.LOADING || l(G) === ee.ERROR || l(Xe), D(Y, "aria-label", l(G) === ee.LOADING ? l(P).loading : l(P).getAudioChallenge);
          }), j(ye, Y);
        };
        J(k, (ye) => {
          l(H).challenge.codeChallenge.audio && ye(B);
        });
      }
      var Q = z(k, 2);
      Q.__click = [_l, Pe], W(b);
      var le = z(b, 2), qe = Z(le);
      {
        var Ar = (ye) => {
          Tr(ye, () => 16);
        };
        J(qe, (ye) => {
          l(Xe) && ye(Ar);
        });
      }
      var zt = z(qe);
      W(le), W(E);
      var To = z(E, 2);
      {
        var Lo = (ye) => {
          var Y = Il(), Jt = Z(Y);
          W(Y), Xt(Y, (Nt) => y(Ue, Nt), () => l(Ue)), $e((Nt) => D(Jt, "src", Nt), [
            () => ln(l(H).challenge.codeChallenge.audio, { language: q() })
          ]), Be("loadstart", Y, fo), Be("canplay", Y, uo), Be("pause", Y, ho), Be("playing", Y, co), Be("ended", Y, lo), Be("error", Jt, so), j(ye, Y);
        };
        J(To, (ye) => {
          l(H).challenge.codeChallenge.audio && l(wr) && ye(Lo);
        });
      }
      W(v), W(f), $e(() => {
        D(f, "aria-label", l(P).verificationRequired), D(m, "src", l(H).challenge.codeChallenge.image), D(g, "minlength", l(H).challenge.codeChallenge.length || 1), D(g, "maxlength", l(H).challenge.codeChallenge.length), D(g, "placeholder", l(P).enterCode), D(g, "aria-label", l(G) === ee.LOADING ? l(P).loading : l(G) === ee.PLAYING ? "" : l(P).enterCodeAria), D(g, "aria-live", l(G) ? "assertive" : "polite"), D(g, "aria-busy", l(G) === ee.LOADING), g.disabled = l(Xe), D(Q, "aria-label", l(P).reload), D(Q, "title", l(P).reload), Q.disabled = l(Xe), le.disabled = l(Xe), D(le, "aria-label", l(P).verify), Ha(zt, ` ${l(P).verify ?? ""}`);
      }), Be("submit", v, vo, !0), j(n, f);
    };
    J(Ao, (n) => {
      var f;
      (f = l(H)) != null && f.challenge.codeChallenge && n(Io);
    });
  }
  W(kr);
  var Tn = z(kr, 2);
  {
    var Ro = (n) => {
      var f = Dl(), v = z(Z(f), 2);
      {
        var m = (E) => {
          var b = $l(), k = Z(b);
          tt(k, () => l(P).expired), W(b), $e(() => D(b, "title", l(Ke))), j(E, b);
        }, g = (E) => {
          var b = Sl(), k = Z(b);
          tt(k, () => l(P).error), W(b), $e(() => D(b, "title", l(Ke))), j(E, b);
        };
        J(v, (E) => {
          l(R) === x.EXPIRED ? E(m) : E(g, !1);
        });
      }
      W(f), j(n, f);
    };
    J(Tn, (n) => {
      (l(Ke) || l(R) === x.EXPIRED) && n(Ro);
    });
  }
  var Ln = z(Tn, 2);
  {
    var $o = (n) => {
      var f = Nl(), v = Z(f), m = Z(v);
      tt(m, () => l(P).footer), W(v), W(f), j(n, f);
    };
    J(Ln, (n) => {
      l(P).footer && (te() !== !0 || l(_r)) && n($o);
    });
  }
  var So = z(Ln, 2);
  {
    var Do = (n) => {
      var f = Tl();
      Xt(f, (v) => y(Rt, v), () => l(Rt)), j(n, f);
    };
    J(So, (n) => {
      C() && n(Do);
    });
  }
  W(dt), Xt(dt, (n) => y(U, n), () => l(U)), $e(
    (n) => {
      D(dt, "data-state", l(R)), D(dt, "data-floating", C()), D(dt, "data-overlay", ke()), $n = za(Wt, 1, "altcha-checkbox", null, $n, n), D(et, "id", l(tn)), et.required = o() !== "onsubmit" && (!C() || o() !== "off"), D(Zt, "for", l(tn));
    },
    [
      () => ({
        "altcha-checkbox-verifying": l(R) === x.VERIFYING
      })
    ]
  ), Be("invalid", et, hn), el(et, () => l(It), (n) => y(It, n)), j(e, In);
  var No = Fi({
    clarify: St,
    configure: En,
    getConfiguration: Cn,
    getFloatingAnchor: xn,
    getPlugin: bo,
    getState: kn,
    hide: Yt,
    repositionFloating: Dt,
    reset: Qe,
    setFloatingAnchor: An,
    setState: Re,
    show: xr,
    verify: Pe,
    get auto() {
      return o();
    },
    set auto(n = void 0) {
      o(n), A();
    },
    get blockspam() {
      return u();
    },
    set blockspam(n = void 0) {
      u(n), A();
    },
    get challengeurl() {
      return s();
    },
    set challengeurl(n = void 0) {
      s(n), A();
    },
    get challengejson() {
      return c();
    },
    set challengejson(n = void 0) {
      c(n), A();
    },
    get credentials() {
      return d();
    },
    set credentials(n = void 0) {
      d(n), A();
    },
    get customfetch() {
      return _();
    },
    set customfetch(n = void 0) {
      _(n), A();
    },
    get debug() {
      return h();
    },
    set debug(n = !1) {
      h(n), A();
    },
    get delay() {
      return p();
    },
    set delay(n = 0) {
      p(n), A();
    },
    get disableautofocus() {
      return w();
    },
    set disableautofocus(n = !1) {
      w(n), A();
    },
    get expire() {
      return S();
    },
    set expire(n = void 0) {
      S(n), A();
    },
    get floating() {
      return C();
    },
    set floating(n = void 0) {
      C(n), A();
    },
    get floatinganchor() {
      return V();
    },
    set floatinganchor(n = void 0) {
      V(n), A();
    },
    get floatingoffset() {
      return ce();
    },
    set floatingoffset(n = void 0) {
      ce(n), A();
    },
    get floatingpersist() {
      return K();
    },
    set floatingpersist(n = !1) {
      K(n), A();
    },
    get hidefooter() {
      return te();
    },
    set hidefooter(n = !1) {
      te(n), A();
    },
    get hidelogo() {
      return X();
    },
    set hidelogo(n = !1) {
      X(n), A();
    },
    get id() {
      return st();
    },
    set id(n = void 0) {
      st(n), A();
    },
    get language() {
      return q();
    },
    set language(n = void 0) {
      q(n), A();
    },
    get name() {
      return ae();
    },
    set name(n = "altcha") {
      ae(n), A();
    },
    get maxnumber() {
      return be();
    },
    set maxnumber(n = 1e6) {
      be(n), A();
    },
    get mockerror() {
      return Ct();
    },
    set mockerror(n = !1) {
      Ct(n), A();
    },
    get obfuscated() {
      return Me();
    },
    set obfuscated(n = void 0) {
      Me(n), A();
    },
    get overlay() {
      return ke();
    },
    set overlay(n = void 0) {
      ke(n), A();
    },
    get overlaycontent() {
      return xt();
    },
    set overlaycontent(n = void 0) {
      xt(n), A();
    },
    get plugins() {
      return Ht();
    },
    set plugins(n = void 0) {
      Ht(n), A();
    },
    get refetchonexpire() {
      return kt();
    },
    set refetchonexpire(n = !0) {
      kt(n), A();
    },
    get sentinel() {
      return Je();
    },
    set sentinel(n = void 0) {
      Je(n), A();
    },
    get spamfilter() {
      return Ae();
    },
    set spamfilter(n = !1) {
      Ae(n), A();
    },
    get strings() {
      return ut();
    },
    set strings(n = void 0) {
      ut(n), A();
    },
    get test() {
      return ge();
    },
    set test(n = !1) {
      ge(n), A();
    },
    get verifyurl() {
      return re();
    },
    set verifyurl(n = void 0) {
      re(n), A();
    },
    get workers() {
      return ft();
    },
    set workers(n = Math.min(16, navigator.hardwareConcurrency || 8)) {
      ft(n), A();
    },
    get workerurl() {
      return At();
    },
    set workerurl(n = void 0) {
      At(n), A();
    }
  });
  return i(), No;
}
Ba(["change", "keydown", "click"]);
customElements.define("altcha-widget", ul(
  Pl,
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
const Ji = '@keyframes overlay-slidein{to{opacity:1;top:50%}}@keyframes altcha-spinner{to{transform:rotate(360deg)}}.altcha{background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);position:relative}.altcha:focus-within{border-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating]{background:var(--altcha-color-base, white);display:none;filter:drop-shadow(3px 3px 6px rgba(0,0,0,.2));left:-100%;position:fixed;top:-100%;width:var(--altcha-max-width, 260px);z-index:999999}.altcha[data-floating=top] .altcha-anchor-arrow{border-bottom-color:transparent;border-top-color:var(--altcha-color-border, #a0a0a0);bottom:-12px;top:auto}.altcha[data-floating=bottom]:focus-within::after{border-bottom-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating=top]:focus-within::after{border-top-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating]:not([data-state=unverified]){display:block}.altcha-anchor-arrow{border:6px solid transparent;border-bottom-color:var(--altcha-color-border, #a0a0a0);content:"";height:0;left:12px;position:absolute;top:-12px;width:0}.altcha-main{align-items:center;display:flex;gap:.4rem;padding:.7rem;position:relative}.altcha-code-challenge{background:var(--altcha-color-base, white);border:1px solid var(--altcha-color-border-focus, currentColor);border-radius:var(--altcha-border-radius, 3px);filter:drop-shadow(3px 3px 6px rgba(0,0,0,.2));padding:.5rem;position:absolute;top:2.5rem;z-index:9999999}.altcha-code-challenge>form{display:flex;flex-direction:column;gap:.5rem}.altcha-code-challenge-input{border:1px solid currentColor;border-radius:3px;box-sizing:border-box;outline:0;font-size:16px;padding:.35rem;width:220px}.altcha-code-challenge-input:focus{outline:2px solid color-mix(in srgb,var(--altcha-color-active, #1D1DC9) 20%,transparent)}.altcha-code-challenge-input:disabled{opacity:.7}.altcha-code-challenge-image{background-color:#fff;border:1px solid currentColor;border-radius:3px;box-sizing:border-box;object-fit:contain;height:50px;width:220px}.altcha-code-challenge-audio,.altcha-code-challenge-reload{background:color-mix(in srgb,var(--altcha-color-text, currentColor) 10%,transparent);border:0;border-radius:3px;color:var(--altcha-color-text, currentColor);cursor:pointer;display:flex;align-items:center;justify-content:center;padding:.35rem}.altcha-code-challenge-audio:disabled,.altcha-code-challenge-reload:disabled,.altcha-code-challenge-verify:disabled{opacity:.7;pointer-events:none}.altcha-code-challenge-audio>*,.altcha-code-challenge-reload>*{height:20px;width:20px}.altcha-code-challenge-buttons{display:flex;justify-content:space-between}.altcha-code-challenge-buttons-left{display:flex;gap:.25rem}.altcha-code-challenge-verify{align-items:center;background:var(--altcha-color-active, #1D1DC9);border:0;border-radius:3px;color:#fff;cursor:pointer;display:flex;gap:.5rem;font-size:100%;padding:.35rem 1rem}.altcha-code-challenge-arrow{border:6px solid transparent;border-bottom-color:var(--altcha-color-border, currentColor);content:"";height:0;left:.15rem;position:absolute;top:-12px;width:0}.altcha[data-floating=top] .altcha-code-challenge{top:-150px}.altcha[data-floating=top] .altcha-code-challenge-arrow{border-bottom-color:transparent;border-top-color:var(--altcha-color-border, currentColor);bottom:-12px;top:auto}.altcha-label{cursor:pointer;flex-grow:1}.altcha-logo{color:currentColor!important;opacity:.7}.altcha-footer:hover,.altcha-logo:hover{opacity:1}.altcha-error{color:var(--altcha-color-error-text, #f23939);display:flex;font-size:.85rem;gap:.3rem;padding:0 .7rem .7rem}.altcha-footer{align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:.75rem;opacity:.7;justify-content:end;padding:.2rem .7rem}.altcha-footer a{color:currentColor}.altcha-checkbox{display:flex;align-items:center;justify-content:center;height:24px;position:relative;width:24px}.altcha-checkbox .altcha-spinner{bottom:0;left:0;position:absolute;right:0;top:0}.altcha-checkbox input{width:18px;height:18px;margin:0}.altcha-checkbox-verifying input{appearance:none;opacity:0;pointer-events:none}.altcha-spinner{animation:altcha-spinner .75s infinite linear;transform-origin:center}.altcha-overlay{--altcha-color-base:#fff;--altcha-color-text:#000;animation:overlay-slidein .5s forwards;display:flex;flex-direction:column;gap:.5rem;left:50%;width:260px;opacity:0;position:fixed;top:45%;transform:translate(-50%,-50%)}.altcha-overlay-backdrop{background:rgba(0,0,0,.5);bottom:0;display:none;left:0;position:fixed;right:0;top:0;z-index:999990}.altcha-overlay-close-button{align-self:flex-end;background:0 0;border:0;padding:.25rem;cursor:pointer;color:currentColor;font-size:130%;line-height:1;opacity:.7}@media (max-height:450px){.altcha-overlay{top:10%!important;transform:translate(-50%,0)}}';
function Ki(e, t = "__altcha-css") {
  if (!document.getElementById(t)) {
    const r = document.createElement("style");
    r.id = t, r.textContent = e, document.head.appendChild(r);
  }
}
globalThis.altchaCreateWorker = (e) => e ? new Worker(new URL(e)) : new Bo();
Ki(Ji);
Ki(Ji);
export {
  Pl as Altcha
};
