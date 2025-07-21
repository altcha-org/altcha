var jo = Object.defineProperty;
var Fn = (e) => {
  throw TypeError(e);
};
var qo = (e, t, r) => t in e ? jo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Ee = (e, t, r) => qo(e, typeof t != "symbol" ? t + "" : t, r), Mn = (e, t, r) => t.has(e) || Fn("Cannot " + r);
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
const Go = 1, Wo = 4, Yo = 8, Zo = 16, zo = 1, Jo = 2, qr = "[", ri = "[!", ni = "]", yt = {}, ue = Symbol(), Ko = "http://www.w3.org/1999/xhtml", Un = !1;
function ii(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var oi = Array.isArray, Xo = Array.prototype.indexOf, Qo = Array.from, ir = Object.keys, Vt = Object.defineProperty, rt = Object.getOwnPropertyDescriptor, ea = Object.getOwnPropertyDescriptors, ta = Object.prototype, ra = Array.prototype, ai = Object.getPrototypeOf, jn = Object.isExtensible;
const wt = () => {
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
const Ce = 2, si = 4, cr = 8, Br = 16, Fe = 32, ot = 64, or = 128, ve = 256, ar = 512, fe = 1024, De = 2048, at = 4096, Et = 8192, dr = 16384, ia = 32768, Hr = 65536, oa = 1 << 19, ui = 1 << 20, Lr = 1 << 21, Ft = Symbol("$state"), fi = Symbol("legacy props"), aa = Symbol("");
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
function hr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let M = !1;
function bt(e) {
  M = e;
}
let F;
function We(e) {
  if (e === null)
    throw hr(), yt;
  return F = e;
}
function Ct() {
  return We(
    /** @type {TemplateNode} */
    /* @__PURE__ */ ze(F)
  );
}
function Y(e) {
  if (M) {
    if (/* @__PURE__ */ ze(F) !== null)
      throw hr(), yt;
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
  if (typeof e != "object" || e === null || Ft in e)
    return e;
  const t = ai(e);
  if (t !== ta && t !== ra)
    return e;
  var r = /* @__PURE__ */ new Map(), i = oi(e), a = /* @__PURE__ */ P(0), o = D, u = (s) => {
    var c = D;
    Ne(o);
    var d = s();
    return Ne(c), d;
  };
  return i && r.set("length", /* @__PURE__ */ P(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, c, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && ha();
        var _ = r.get(c);
        return _ === void 0 ? (_ = u(() => /* @__PURE__ */ P(d.value)), r.set(c, _)) : b(
          _,
          u(() => He(d.value))
        ), !0;
      },
      deleteProperty(s, c) {
        var d = r.get(c);
        if (d === void 0)
          c in s && (r.set(
            c,
            u(() => /* @__PURE__ */ P(ue))
          ), Tr(a));
        else {
          if (i && typeof c == "string") {
            var _ = (
              /** @type {Source<number>} */
              r.get("length")
            ), h = Number(c);
            Number.isInteger(h) && h < _.v && b(_, h);
          }
          b(d, ue), Tr(a);
        }
        return !0;
      },
      get(s, c, d) {
        var w;
        if (c === Ft)
          return e;
        var _ = r.get(c), h = c in s;
        if (_ === void 0 && (!h || (w = rt(s, c)) != null && w.writable) && (_ = u(() => /* @__PURE__ */ P(He(h ? s[c] : ue))), r.set(c, _)), _ !== void 0) {
          var m = l(_);
          return m === ue ? void 0 : m;
        }
        return Reflect.get(s, c, d);
      },
      getOwnPropertyDescriptor(s, c) {
        var d = Reflect.getOwnPropertyDescriptor(s, c);
        if (d && "value" in d) {
          var _ = r.get(c);
          _ && (d.value = l(_));
        } else if (d === void 0) {
          var h = r.get(c), m = h == null ? void 0 : h.v;
          if (h !== void 0 && m !== ue)
            return {
              enumerable: !0,
              configurable: !0,
              value: m,
              writable: !0
            };
        }
        return d;
      },
      has(s, c) {
        var m;
        if (c === Ft)
          return !0;
        var d = r.get(c), _ = d !== void 0 && d.v !== ue || Reflect.has(s, c);
        if (d !== void 0 || N !== null && (!_ || (m = rt(s, c)) != null && m.writable)) {
          d === void 0 && (d = u(() => /* @__PURE__ */ P(_ ? He(s[c]) : ue)), r.set(c, d));
          var h = l(d);
          if (h === ue)
            return !1;
        }
        return _;
      },
      set(s, c, d, _) {
        var K;
        var h = r.get(c), m = c in s;
        if (i && c === "length")
          for (var w = d; w < /** @type {Source<number>} */
          h.v; w += 1) {
            var S = r.get(w + "");
            S !== void 0 ? b(S, ue) : w in s && (S = u(() => /* @__PURE__ */ P(ue)), r.set(w + "", S));
          }
        h === void 0 ? (!m || (K = rt(s, c)) != null && K.writable) && (h = u(() => /* @__PURE__ */ P(void 0)), b(
          h,
          u(() => He(d))
        ), r.set(c, h)) : (m = h.v !== ue, b(
          h,
          u(() => He(d))
        ));
        var E = Reflect.getOwnPropertyDescriptor(s, c);
        if (E != null && E.set && E.set.call(_, d), !m) {
          if (i && typeof c == "string") {
            var U = (
              /** @type {Source<number>} */
              r.get("length")
            ), ce = Number(c);
            Number.isInteger(ce) && ce >= U.v && b(U, ce + 1);
          }
          Tr(a);
        }
        return !0;
      },
      ownKeys(s) {
        l(a);
        var c = Reflect.ownKeys(s).filter((h) => {
          var m = r.get(h);
          return m === void 0 || m.v !== ue;
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
function Tr(e, t = 1) {
  b(e, e.v + t);
}
var qn, ci, di, hi;
function Or() {
  if (qn === void 0) {
    qn = window, ci = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    di = rt(t, "firstChild").get, hi = rt(t, "nextSibling").get, jn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), jn(r) && (r.__t = void 0);
  }
}
function vr(e = "") {
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
  return r === null && (r = F.appendChild(vr())), We(r), r;
}
function Lt(e, t) {
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
    var u = vr();
    return i === null ? a == null || a.after(u) : i.before(u), We(u), u;
  }
  return We(i), /** @type {TemplateNode} */
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
function gr(e) {
  var t = Ce | De, r = D !== null && (D.f & Ce) !== 0 ? (
    /** @type {Derived} */
    D
  ) : null;
  return N === null || r !== null && (r.f & ve) !== 0 ? t |= ve : N.f |= ui, {
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
    parent: r ?? N
  };
}
// @__NO_SIDE_EFFECTS__
function Ot(e) {
  const t = /* @__PURE__ */ gr(e);
  return Ri(t), t;
}
// @__NO_SIDE_EFFECTS__
function ba(e) {
  const t = /* @__PURE__ */ gr(e);
  return t.equals = Gr, t;
}
function pi(e) {
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
function ya(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & Ce) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function mi(e) {
  var t, r = N;
  Ze(ya(e));
  try {
    pi(e), t = Di(e);
  } finally {
    Ze(r);
  }
  return t;
}
function _i(e) {
  var t = mi(e), r = (Ge || (e.f & ve) !== 0) && e.deps !== null ? at : fe;
  xe(e, r), e.equals(t) || (e.v = t, e.wv = Si());
}
function wa(e) {
  N === null && D === null && ua(), D !== null && (D.f & ve) !== 0 && N === null && sa(), Bt && la();
}
function Ea(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function lt(e, t, r, i = !0) {
  var a = N, o = {
    ctx: oe,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | De,
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
      throw Ye(o), c;
    }
  else t !== null && mr(o);
  var u = r && o.deps === null && o.first === null && o.nodes_start === null && o.teardown === null && (o.f & (ui | or)) === 0;
  if (!u && i && (a !== null && Ea(o, a), D !== null && (D.f & Ce) !== 0)) {
    var s = (
      /** @type {Derived} */
      D
    );
    (s.effects ?? (s.effects = [])).push(o);
  }
  return o;
}
function Wr(e) {
  const t = lt(cr, null, !1);
  return xe(t, fe), t.teardown = e, t;
}
function Pr(e) {
  wa();
  var t = N !== null && (N.f & Fe) !== 0 && oe !== null && !oe.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      oe
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: N,
      reaction: D
    });
  } else {
    var i = Yr(e);
    return i;
  }
}
function Ca(e) {
  const t = lt(ot, e, !0);
  return () => {
    Ye(t);
  };
}
function xa(e) {
  const t = lt(ot, e, !0);
  return (r = {}) => new Promise((i) => {
    r.outro ? Mr(t, () => {
      Ye(t), i(void 0);
    }) : (Ye(t), i(void 0));
  });
}
function Yr(e) {
  return lt(si, e, !1);
}
function Zr(e) {
  return lt(cr, e, !0);
}
function $e(e, t = [], r = gr) {
  const i = t.map(r);
  return bi(() => e(...i.map(l)));
}
function bi(e, t = 0) {
  return lt(cr | Br | t, e, !0);
}
function Fr(e, t = !0) {
  return lt(cr | Fe, e, !0, t);
}
function yi(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Bt, i = D;
    Hn(!0), Ne(null);
    try {
      t.call(null);
    } finally {
      Hn(r), Ne(i);
    }
  }
}
function wi(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var i = r.next;
    (r.f & ot) !== 0 ? r.parent = null : Ye(r, t), r = i;
  }
}
function ka(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Fe) === 0 && Ye(t), t = r;
  }
}
function Ye(e, t = !0) {
  var r = !1;
  (t || (e.f & oa) !== 0) && e.nodes_start !== null && (Ei(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), r = !0), wi(e, t && !r), fr(e, 0), xe(e, dr);
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
    Ye(e), t && t();
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
  if ((e.f & Et) === 0) {
    if (e.f ^= Et, e.transitions !== null)
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
  if ((e.f & Et) !== 0) {
    e.f ^= Et, (e.f & fe) === 0 && (e.f ^= fe), Ht(e) && (xe(e, De), mr(e));
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
let Ut = [], jt = [];
function Ai() {
  var e = Ut;
  Ut = [], li(e);
}
function Ii() {
  var e = jt;
  jt = [], li(e);
}
function zr(e) {
  Ut.length === 0 && queueMicrotask(Ai), Ut.push(e);
}
function Ra(e) {
  jt.length === 0 && Ia(Ii), jt.push(e);
}
function $a() {
  Ut.length > 0 && Ai(), jt.length > 0 && Ii();
}
let tr = !1, lr = !1, sr = null, nt = !1, Bt = !1;
function Hn(e) {
  Bt = e;
}
let Mt = [];
let D = null, Se = !1;
function Ne(e) {
  D = e;
}
let N = null;
function Ze(e) {
  N = e;
}
let ie = null;
function Ri(e) {
  D !== null && D.f & Lr && (ie === null ? ie = [e] : ie.push(e));
}
let ne = null, he = 0, pe = null;
function Sa(e) {
  pe = e;
}
let $i = 1, ur = 0, Ge = !1;
function Si() {
  return ++$i;
}
function Ht(e) {
  var h;
  var t = e.f;
  if ((t & De) !== 0)
    return !0;
  if ((t & at) !== 0) {
    var r = e.deps, i = (t & ve) !== 0;
    if (r !== null) {
      var a, o, u = (t & ar) !== 0, s = i && N !== null && !Ge, c = r.length;
      if (u || s) {
        var d = (
          /** @type {Derived} */
          e
        ), _ = d.parent;
        for (a = 0; a < c; a++)
          o = r[a], (u || !((h = o == null ? void 0 : o.reactions) != null && h.includes(d))) && (o.reactions ?? (o.reactions = [])).push(d);
        u && (d.f ^= ar), s && _ !== null && (_.f & ve) === 0 && (d.f ^= ve);
      }
      for (a = 0; a < c; a++)
        if (o = r[a], Ht(
          /** @type {Derived} */
          o
        ) && _i(
          /** @type {Derived} */
          o
        ), o.wv > e.wv)
          return !0;
    }
    (!i || N !== null && !Ge) && xe(e, fe);
  }
  return !1;
}
function Ta(e, t) {
  for (var r = t; r !== null; ) {
    if ((r.f & or) !== 0)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= or;
      }
    r = r.parent;
  }
  throw tr = !1, e;
}
function Gn(e) {
  return (e.f & dr) === 0 && (e.parent === null || (e.parent.f & or) === 0);
}
function pr(e, t, r, i) {
  if (tr) {
    if (r === null && (tr = !1), Gn(t))
      throw e;
    return;
  }
  if (r !== null && (tr = !0), Ta(e, t), Gn(t))
    throw e;
}
function Ti(e, t, r = !0) {
  var i = e.reactions;
  if (i !== null)
    for (var a = 0; a < i.length; a++) {
      var o = i[a];
      ie != null && ie.includes(e) || ((o.f & Ce) !== 0 ? Ti(
        /** @type {Derived} */
        o,
        t,
        !1
      ) : t === o && (r ? xe(o, De) : (o.f & fe) !== 0 && xe(o, at), mr(
        /** @type {Effect} */
        o
      )));
    }
}
function Di(e) {
  var w;
  var t = ne, r = he, i = pe, a = D, o = Ge, u = ie, s = oe, c = Se, d = e.f;
  ne = /** @type {null | Value[]} */
  null, he = 0, pe = null, Ge = (d & ve) !== 0 && (Se || !nt || D === null), D = (d & (Fe | ot)) === 0 ? e : null, ie = null, Wn(e.ctx), Se = !1, ur++, e.f |= Lr;
  try {
    var _ = (
      /** @type {Function} */
      (0, e.fn)()
    ), h = e.deps;
    if (ne !== null) {
      var m;
      if (fr(e, he), h !== null && he > 0)
        for (h.length = he + ne.length, m = 0; m < ne.length; m++)
          h[he + m] = ne[m];
      else
        e.deps = h = ne;
      if (!Ge)
        for (m = he; m < h.length; m++)
          ((w = h[m]).reactions ?? (w.reactions = [])).push(e);
    } else h !== null && he < h.length && (fr(e, he), h.length = he);
    if (Mi() && pe !== null && !Se && h !== null && (e.f & (Ce | at | De)) === 0)
      for (m = 0; m < /** @type {Source[]} */
      pe.length; m++)
        Ti(
          pe[m],
          /** @type {Effect} */
          e
        );
    return a !== null && a !== e && (ur++, pe !== null && (i === null ? i = pe : i.push(.../** @type {Source[]} */
    pe))), _;
  } finally {
    ne = t, he = r, pe = i, D = a, Ge = o, ie = u, Wn(s), Se = c, e.f ^= Lr;
  }
}
function Da(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var i = Xo.call(r, e);
    if (i !== -1) {
      var a = r.length - 1;
      a === 0 ? r = t.reactions = null : (r[i] = r[a], r.pop());
    }
  }
  r === null && (t.f & Ce) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ne === null || !ne.includes(t)) && (xe(t, at), (t.f & (ve | ar)) === 0 && (t.f ^= ar), pi(
    /** @type {Derived} **/
    t
  ), fr(
    /** @type {Derived} **/
    t,
    0
  ));
}
function fr(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var i = t; i < r.length; i++)
      Da(e, r[i]);
}
function Jr(e) {
  var t = e.f;
  if ((t & dr) === 0) {
    xe(e, fe);
    var r = N, i = oe, a = nt;
    N = e, nt = !0;
    try {
      (t & Br) !== 0 ? ka(e) : wi(e), yi(e);
      var o = Di(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = $i;
      var u = e.deps, s;
      Un && ma && e.f & De;
    } catch (c) {
      pr(c, e, r, i || e.ctx);
    } finally {
      nt = a, N = r;
    }
  }
}
function Na() {
  try {
    fa();
  } catch (e) {
    if (sr !== null)
      pr(e, sr, null);
    else
      throw e;
  }
}
function Ni() {
  var e = nt;
  try {
    var t = 0;
    for (nt = !0; Mt.length > 0; ) {
      t++ > 1e3 && Na();
      var r = Mt, i = r.length;
      Mt = [];
      for (var a = 0; a < i; a++) {
        var o = Oa(r[a]);
        La(o);
      }
      qt.clear();
    }
  } finally {
    lr = !1, nt = e, sr = null;
  }
}
function La(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var i = e[r];
      if ((i.f & (dr | Et)) === 0)
        try {
          Ht(i) && (Jr(i), i.deps === null && i.first === null && i.nodes_start === null && (i.teardown === null ? Ci(i) : i.fn = null));
        } catch (a) {
          pr(a, i, null, i.ctx);
        }
    }
}
function mr(e) {
  lr || (lr = !0, queueMicrotask(Ni));
  for (var t = sr = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (ot | Fe)) !== 0) {
      if ((r & fe) === 0) return;
      t.f ^= fe;
    }
  }
  Mt.push(t);
}
function Oa(e) {
  for (var t = [], r = e; r !== null; ) {
    var i = r.f, a = (i & (Fe | ot)) !== 0, o = a && (i & fe) !== 0;
    if (!o && (i & Et) === 0) {
      if ((i & si) !== 0)
        t.push(r);
      else if (a)
        r.f ^= fe;
      else
        try {
          Ht(r) && Jr(r);
        } catch (c) {
          pr(c, r, null, r.ctx);
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
function k(e) {
  for (var t; ; ) {
    if ($a(), Mt.length === 0)
      return (
        /** @type {T} */
        t
      );
    lr = !0, Ni();
  }
}
async function Dr() {
  await Promise.resolve(), k();
}
function l(e) {
  var t = e.f, r = (t & Ce) !== 0;
  if (D !== null && !Se) {
    if (!(ie != null && ie.includes(e))) {
      var i = D.deps;
      e.rv < ur && (e.rv = ur, ne === null && i !== null && i[he] === e ? he++ : ne === null ? ne = [e] : (!Ge || !ne.includes(e)) && ne.push(e));
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
  e, Ht(a) && _i(a)), Bt && qt.has(e) ? qt.get(e) : e.v;
}
function it(e) {
  var t = Se;
  try {
    return Se = !0, e();
  } finally {
    Se = t;
  }
}
const Pa = -7169;
function xe(e, t) {
  e.f = e.f & Pa | t;
}
const qt = /* @__PURE__ */ new Map();
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
function P(e, t) {
  const r = Li(e);
  return Ri(r), r;
}
// @__NO_SIDE_EFFECTS__
function Kr(e, t = !1) {
  const r = Li(e);
  return t || (r.equals = Gr), r;
}
function b(e, t, r = !1) {
  D !== null && !Se && Mi() && (D.f & (Ce | Br)) !== 0 && !(ie != null && ie.includes(e)) && ga();
  let i = r ? He(t) : t;
  return Fa(e, i);
}
function Fa(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    Bt ? qt.set(e, t) : qt.set(e, r), e.v = t, (e.f & Ce) !== 0 && ((e.f & De) !== 0 && mi(
      /** @type {Derived} */
      e
    ), xe(e, (e.f & ve) === 0 ? fe : at)), e.wv = Si(), Oi(e, De), N !== null && (N.f & fe) !== 0 && (N.f & (Fe | ot)) === 0 && (pe === null ? Sa([e]) : pe.push(e));
  }
  return t;
}
function Oi(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, a = 0; a < i; a++) {
      var o = r[a], u = o.f;
      (u & De) === 0 && (xe(o, t), (u & (fe | ve)) !== 0 && ((u & Ce) !== 0 ? Oi(
        /** @type {Derived} */
        o,
        at
      ) : mr(
        /** @type {Effect} */
        o
      )));
    }
}
let oe = null;
function Wn(e) {
  oe = e;
}
function Pi(e, t = !1, r) {
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
  Wr(() => {
    i.d = !0;
  });
}
function Fi(e) {
  const t = oe;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const u = t.e;
    if (u !== null) {
      var r = N, i = D;
      t.e = null;
      try {
        for (var a = 0; a < u.length; a++) {
          var o = u[a];
          Ze(o.effect), Ne(o.reaction), Yr(o.fn);
        }
      } finally {
        Ze(r), Ne(i);
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
let Yn = !1;
function Vi() {
  Yn || (Yn = !0, document.addEventListener(
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
  var t = D, r = N;
  Ne(null), Ze(null);
  try {
    return e();
  } finally {
    Ne(t), Ze(r);
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
  (t === document.body || t === window || t === document) && Wr(() => {
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
    Vt(e, "currentTarget", {
      configurable: !0,
      get() {
        return o || r;
      }
    });
    var _ = D, h = N;
    Ne(null), Ze(null);
    try {
      for (var m, w = []; o !== null; ) {
        var S = o.assignedSlot || o.parentNode || /** @type {any} */
        o.host || null;
        try {
          var E = o["__" + i];
          if (E != null && (!/** @type {any} */
          o.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === o))
            if (oi(E)) {
              var [U, ...ce] = E;
              U.apply(o, [e, ...ce]);
            } else
              E.call(o, e);
        } catch (te) {
          m ? w.push(te) : m = te;
        }
        if (e.cancelBubble || S === t || S === null)
          break;
        o = S;
      }
      if (m) {
        for (let te of w)
          queueMicrotask(() => {
            throw te;
          });
        throw m;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Ne(_), Ze(h);
    }
  }
}
function Xr(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Te(e, t) {
  var r = (
    /** @type {Effect} */
    N
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ke(e, t) {
  var r = (t & zo) !== 0, i = (t & Jo) !== 0, a, o = !e.startsWith("<!>");
  return () => {
    if (M)
      return Te(F, null), F;
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
      Te(s, c);
    } else
      Te(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function _r(e, t, r = "svg") {
  var i = !e.startsWith("<!>"), a = `<${r}>${i ? e : "<!>" + e}</${r}>`, o;
  return () => {
    if (M)
      return Te(F, null), F;
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
    return Te(c, c), c;
  };
}
function Xt() {
  if (M)
    return Te(F, null), F;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = vr();
  return e.append(t, r), Te(t, r), e;
}
function j(e, t) {
  if (M) {
    N.nodes_end = F, Ct();
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
  Or(), t.intro = t.intro ?? !1;
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
      throw yt;
    bt(!0), We(
      /** @type {Comment} */
      o
    ), Ct();
    const u = Bi(e, { ...t, anchor: o });
    if (F === null || F.nodeType !== 8 || /** @type {Comment} */
    F.data !== ni)
      throw hr(), yt;
    return bt(!1), /**  @type {Exports} */
    u;
  } catch (u) {
    if (u === yt)
      return t.recover === !1 && ca(), Or(), _a(r), bt(!1), qi(e, t);
    throw u;
  } finally {
    bt(i), We(a);
  }
}
const mt = /* @__PURE__ */ new Map();
function Bi(e, { target: t, anchor: r, props: i = {}, events: a, context: o, intro: u = !0 }) {
  Or();
  var s = /* @__PURE__ */ new Set(), c = (h) => {
    for (var m = 0; m < h.length; m++) {
      var w = h[m];
      if (!s.has(w)) {
        s.add(w);
        var S = Va(w);
        t.addEventListener(w, Pt, { passive: S });
        var E = mt.get(w);
        E === void 0 ? (document.addEventListener(w, Pt, { passive: S }), mt.set(w, 1)) : mt.set(w, E + 1);
      }
    }
  };
  c(Qo(ji)), Vr.add(c);
  var d = void 0, _ = xa(() => {
    var h = r ?? t.appendChild(vr());
    return Fr(() => {
      if (o) {
        Pi({});
        var m = (
          /** @type {ComponentContext} */
          oe
        );
        m.c = o;
      }
      a && (i.$$events = a), M && Te(
        /** @type {TemplateNode} */
        h,
        null
      ), d = e(h, i) || {}, M && (N.nodes_end = F), o && Fi();
    }), () => {
      var S;
      for (var m of s) {
        t.removeEventListener(m, Pt);
        var w = (
          /** @type {number} */
          mt.get(m)
        );
        --w === 0 ? (document.removeEventListener(m, Pt), mt.delete(m)) : mt.set(m, w);
      }
      Vr.delete(c), h !== r && ((S = h.parentNode) == null || S.removeChild(h));
    };
  });
  return Ur.set(d, _), d;
}
let Ur = /* @__PURE__ */ new WeakMap();
function Wa(e, t) {
  const r = Ur.get(e);
  return r ? (Ur.delete(e), r(t)) : Promise.resolve();
}
function J(e, t, [r, i] = [0, 0]) {
  M && r === 0 && Ct();
  var a = e, o = null, u = null, s = ue, c = r > 0 ? Hr : 0, d = !1;
  const _ = (m, w = !0) => {
    d = !0, h(w, m);
  }, h = (m, w) => {
    if (s === (s = m)) return;
    let S = !1;
    if (M && i !== -1) {
      if (r === 0) {
        const U = (
          /** @type {Comment} */
          a.data
        );
        U === qr ? i = 0 : U === ri ? i = 1 / 0 : (i = parseInt(U.substring(1)), i !== i && (i = s ? 1 / 0 : -1));
      }
      const E = i > r;
      !!s === E && (a = pa(), We(a), bt(!1), S = !0, i = -1);
    }
    s ? (o ? Bn(o) : w && (o = Fr(() => w(a))), u && Mr(u, () => {
      u = null;
    })) : (u ? Bn(u) : w && (u = Fr(() => w(a, [r + 1, i]))), o && Mr(o, () => {
      o = null;
    })), S && bt(!0);
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
      N
    );
    if (u === (u = t() ?? "")) {
      M && Ct();
      return;
    }
    if (s.nodes_start !== null && (Ei(
      s.nodes_start,
      /** @type {TemplateNode} */
      s.nodes_end
    ), s.nodes_start = s.nodes_end = null), u !== "") {
      if (M) {
        F.data;
        for (var c = Ct(), d = c; c !== null && (c.nodeType !== 8 || /** @type {Comment} */
        c.data !== ""); )
          d = c, c = /** @type {TemplateNode} */
          /* @__PURE__ */ ze(c);
        if (c === null)
          throw hr(), yt;
        Te(F, d), o = We(c);
        return;
      }
      var _ = u + "";
      r ? _ = `<svg>${_}</svg>` : i && (_ = `<math>${_}</math>`);
      var h = Xr(_);
      if ((r || i) && (h = /** @type {Element} */
      /* @__PURE__ */ _e(h)), Te(
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
function Ya(e, t, r, i, a) {
  var s;
  M && Ct();
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
function T(e, t, r, i) {
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
  return e === t || (e == null ? void 0 : e[Ft]) === t;
}
function Qt(e = {}, t, r, i) {
  return Yr(() => {
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
  oe === null && ii(), Pr(() => {
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
function Wi(e, t, r) {
  if (e == null)
    return t(void 0), wt;
  const i = it(
    () => e.subscribe(
      t,
      // @ts-expect-error
      r
    )
  );
  return i.unsubscribe ? () => i.unsubscribe() : i;
}
const _t = [];
function rl(e, t = wt) {
  let r = null;
  const i = /* @__PURE__ */ new Set();
  function a(s) {
    if (gi(e, s) && (e = s, r)) {
      const c = !_t.length;
      for (const d of i)
        d[1](), _t.push(d, e);
      if (c) {
        for (let d = 0; d < _t.length; d += 2)
          _t[d][0](_t[d + 1]);
        _t.length = 0;
      }
    }
  }
  function o(s) {
    a(s(
      /** @type {T} */
      e
    ));
  }
  function u(s, c = wt) {
    const d = [s, c];
    return i.add(d), i.size === 1 && (r = t(a, o) || wt), s(
      /** @type {T} */
      e
    ), () => {
      i.delete(d), i.size === 0 && r && (r(), r = null);
    };
  }
  return { set: a, update: o, subscribe: u };
}
function rr(e) {
  let t;
  return Wi(e, (r) => t = r)(), t;
}
let er = !1, jr = Symbol();
function nl(e, t, r) {
  const i = r[t] ?? (r[t] = {
    store: null,
    source: /* @__PURE__ */ Kr(void 0),
    unsubscribe: wt
  });
  if (i.store !== e && !(jr in r))
    if (i.unsubscribe(), i.store = e ?? null, e == null)
      i.source.v = void 0, i.unsubscribe = wt;
    else {
      var a = !0;
      i.unsubscribe = Wi(e, (o) => {
        a ? i.source.v = o : b(i.source, o);
      }), a = !1;
    }
  return e && jr in r ? rr(e) : l(i.source);
}
function il() {
  const e = {};
  function t() {
    Wr(() => {
      for (var r in e)
        e[r].unsubscribe();
      Vt(e, jr, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function ol(e) {
  var t = er;
  try {
    return er = !1, [e(), er];
  } finally {
    er = t;
  }
}
function Xn(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function I(e, t, r, i) {
  var st;
  var a = (r & Go) !== 0, o = !0, u = (r & Yo) !== 0, s = (r & Zo) !== 0, c = !1, d;
  u ? [d, c] = ol(() => (
    /** @type {V} */
    e[t]
  )) : d = /** @type {V} */
  e[t];
  var _ = Ft in e || fi in e, h = u && (((st = rt(e, t)) == null ? void 0 : st.set) ?? (_ && t in e && ((q) => e[t] = q))) || void 0, m = (
    /** @type {V} */
    i
  ), w = !0, S = !1, E = () => (S = !0, w && (w = !1, s ? m = it(
    /** @type {() => V} */
    i
  ) : m = /** @type {V} */
  i), m);
  d === void 0 && i !== void 0 && (h && o && da(), d = E(), h && h(d));
  var U;
  if (U = () => {
    var q = (
      /** @type {V} */
      e[t]
    );
    return q === void 0 ? E() : (w = !0, S = !1, q);
  }, (r & Wo) === 0)
    return U;
  if (h) {
    var ce = e.$$legacy;
    return function(q, ae) {
      return arguments.length > 0 ? ((!ae || ce || c) && h(ae ? U() : q), q) : U();
    };
  }
  var K = !1, te = /* @__PURE__ */ Kr(d), X = /* @__PURE__ */ gr(() => {
    var q = U(), ae = l(te);
    return K ? (K = !1, ae) : te.v = q;
  });
  return u && l(X), a || (X.equals = Gr), function(q, ae) {
    if (arguments.length > 0) {
      const be = ae ? l(X) : u ? He(q) : q;
      if (!X.equals(be)) {
        if (K = !0, b(te, be), S && m !== void 0 && (m = be), Xn(X))
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
var Pe, me;
class ll {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    $r(this, Pe);
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
          return b(r.get(s) ?? i(s, c), c), Reflect.set(u, s, c);
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
    })), (!((o = t == null ? void 0 : t.props) != null && o.$$host) || t.sync === !1) && k(), Sr(this, Pe, a.$$events);
    for (const u of Object.keys(se(this, me)))
      u === "$set" || u === "$destroy" || u === "$on" || Vt(this, u, {
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
      Wa(se(this, me));
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
    se(this, Pe)[t] = se(this, Pe)[t] || [];
    const i = (...a) => r.call(this, ...a);
    return se(this, Pe)[t].push(i), () => {
      se(this, Pe)[t] = se(this, Pe)[t].filter(
        /** @param {any} fn */
        (a) => a !== i
      );
    };
  }
  $destroy() {
    se(this, me).$destroy();
  }
}
Pe = new WeakMap(), me = new WeakMap();
let Yi;
typeof HTMLElement == "function" && (Yi = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, i) {
    super();
    /** The Svelte component constructor */
    Ee(this, "$$ctor");
    /** Slots */
    Ee(this, "$$s");
    /** @type {any} The Svelte component instance */
    Ee(this, "$$c");
    /** Whether or not the custom element is connected */
    Ee(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    Ee(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    Ee(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    Ee(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    Ee(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    Ee(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    Ee(this, "$$me");
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
        o in this.$$d || (this.$$d[o] = nr(o, a.value, this.$$p_d, "toProp"));
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
          for (const o of ir(this.$$c)) {
            if (!((a = this.$$p_d[o]) != null && a.reflect)) continue;
            this.$$d[o] = this.$$c[o];
            const u = nr(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = nr(t, i, this.$$p_d, "toProp"), (a = this.$$c) == null || a.$set({ [t]: this.$$d[t] }));
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
    return ir(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function nr(e, t, r, i) {
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
  let u = class extends Yi {
    constructor() {
      super(e, r, a), this.$$p_d = t;
    }
    static get observedAttributes() {
      return ir(t).map(
        (s) => (t[s].attribute || s).toLowerCase()
      );
    }
  };
  return ir(t).forEach((s) => {
    Vt(u.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(c) {
        var h;
        c = nr(s, c, t), this.$$d[s] = c;
        var d = this.$$c;
        if (d) {
          var _ = (h = rt(d, s)) == null ? void 0 : h.get;
          _ ? d[s] = c : d.$set({ [s]: c });
        }
      }
    });
  }), i.forEach((s) => {
    Vt(u.prototype, s, {
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
var C = /* @__PURE__ */ ((e) => (e.CODE = "code", e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(C || {}), ee = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.LOADING = "loading", e.PLAYING = "playing", e.PAUSED = "paused", e.READY = "ready", e))(ee || {});
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  get: (e) => rr(globalThis.altchaI18n.store)[e],
  set: (e, t) => {
    Object.assign(rr(globalThis.altchaI18n.store), {
      [e]: t
    }), globalThis.altchaI18n.store.set(rr(globalThis.altchaI18n.store));
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
const Nr = (e, t) => {
  let r = /* @__PURE__ */ ba(() => na(t == null ? void 0 : t(), 24));
  var i = yl();
  $e(() => {
    T(i, "width", l(r)), T(i, "height", l(r));
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
    C.UNVERIFIED,
    C.ERROR,
    C.EXPIRED,
    C.CODE
  ].includes(l(t)) ? r() !== !1 && ((c = l(i)) == null ? void 0 : c.reportValidity()) === !1 ? b(a, !1) : o() ? u() : s() : b(a, !0);
}
var yl = /* @__PURE__ */ _r('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="altcha-spinner"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor"></path></svg>'), wl = /* @__PURE__ */ ke('<input type="hidden">'), El = /* @__PURE__ */ ke('<div><a target="_blank" class="altcha-logo" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor"></path></svg></a></div>'), Cl = /* @__PURE__ */ _r('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg>'), xl = /* @__PURE__ */ _r('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z"></path></svg>'), kl = /* @__PURE__ */ _r('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"></path></svg>'), Al = /* @__PURE__ */ ke('<button type="button" class="altcha-code-challenge-audio"><!></button>'), Il = /* @__PURE__ */ ke("<audio hidden autoplay><source></audio>"), Rl = /* @__PURE__ */ ke('<div class="altcha-code-challenge" role="dialog"><div class="altcha-code-challenge-arrow"></div> <form data-code-challenge-form="1"><img class="altcha-code-challenge-image" alt=""> <input type="text" autocomplete="off" name="code" class="altcha-code-challenge-input" required> <div class="altcha-code-challenge-buttons"><div class="altcha-code-challenge-buttons-left"><!> <button type="button" class="altcha-code-challenge-reload"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z"></path></svg></button></div> <button type="submit" class="altcha-code-challenge-verify"><!> </button></div> <!></form></div>'), $l = /* @__PURE__ */ ke("<div><!></div>"), Sl = /* @__PURE__ */ ke("<div><!></div>"), Tl = /* @__PURE__ */ ke('<div class="altcha-error"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg> <!></div>'), Dl = /* @__PURE__ */ ke('<div class="altcha-footer"><div><!></div></div>'), Nl = /* @__PURE__ */ ke('<div class="altcha-anchor-arrow"></div>'), Ll = /* @__PURE__ */ ke('<!> <div class="altcha"><div class="altcha-main"><div><!> <input type="checkbox"></div> <label class="altcha-label"><!></label> <!> <!> <!></div> <!> <!> <!></div>', 1);
function Ol(e, t) {
  var On, Pn;
  Pi(t, !0);
  const [r, i] = il(), a = () => nl(Qi, "$altchaI18nStore", r);
  let o = I(t, "auto", 7, void 0), u = I(t, "blockspam", 7, void 0), s = I(t, "challengeurl", 7, void 0), c = I(t, "challengejson", 7, void 0), d = I(t, "credentials", 7, void 0), _ = I(t, "customfetch", 7, void 0), h = I(t, "debug", 7, !1), m = I(t, "delay", 7, 0), w = I(t, "disableautofocus", 7, !1), S = I(t, "expire", 7, void 0), E = I(t, "floating", 7, void 0), U = I(t, "floatinganchor", 7, void 0), ce = I(t, "floatingoffset", 7, void 0), K = I(t, "floatingpersist", 7, !1), te = I(t, "hidefooter", 7, !1), X = I(t, "hidelogo", 7, !1), st = I(t, "id", 7, void 0), q = I(t, "language", 7, void 0), ae = I(t, "name", 7, "altcha"), be = I(t, "maxnumber", 7, 1e6), xt = I(t, "mockerror", 7, !1), Me = I(t, "obfuscated", 7, void 0), ye = I(t, "overlay", 7, void 0), kt = I(t, "overlaycontent", 7, void 0), Gt = I(t, "plugins", 7, void 0), At = I(t, "refetchonexpire", 7, !0), Je = I(t, "sentinel", 7, void 0), Ae = I(t, "spamfilter", 7, !1), ut = I(t, "strings", 7, void 0), ge = I(t, "test", 7, !1), re = I(t, "verifyurl", 7, void 0), ft = I(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), It = I(t, "workerurl", 7, void 0);
  const { altchaI18n: Xi } = globalThis, Qi = Xi.store, Qr = ["SHA-256", "SHA-384", "SHA-512"], eo = "https://altcha.org/", Ve = (n, f) => {
    t.$$host.dispatchEvent(new CustomEvent(n, { detail: f }));
  }, en = (Pn = (On = document.documentElement.lang) == null ? void 0 : On.split("-")) == null ? void 0 : Pn[0], br = /* @__PURE__ */ Ot(() => {
    var n;
    return s() && new URL(s(), location.origin).host.endsWith(".altcha.org") && !!((n = s()) != null && n.includes("apiKey=ckey_"));
  }), yr = /* @__PURE__ */ Ot(() => c() ? pn(c()) : void 0), to = /* @__PURE__ */ Ot(() => ut() ? pn(ut()) : {}), O = /* @__PURE__ */ Ot(() => ({
    ...on(a()),
    ...l(to)
  })), tn = /* @__PURE__ */ Ot(() => `${st() || ae()}_checkbox_${Math.round(Math.random() * 1e8)}`);
  let Rt = /* @__PURE__ */ P(!1), H = /* @__PURE__ */ P(null), R = /* @__PURE__ */ P(He(C.UNVERIFIED)), V = /* @__PURE__ */ P(void 0), $t = /* @__PURE__ */ P(null), Ue = /* @__PURE__ */ P(null), de = /* @__PURE__ */ P(null), wr = /* @__PURE__ */ P(null), ct = /* @__PURE__ */ P(null), L = /* @__PURE__ */ P(null), dt = /* @__PURE__ */ P(null), Ke = /* @__PURE__ */ P(null), Ie = null, G = /* @__PURE__ */ P(null), Xe = /* @__PURE__ */ P(!1), je = [], Er = /* @__PURE__ */ P(!1), Le = /* @__PURE__ */ P(null);
  Pr(() => {
    go(l(Ke));
  }), Pr(() => {
    po(l(R));
  }), tl(() => {
    ro(), b(dt, null), l(L) && (l(L).removeEventListener("submit", cn), l(L).removeEventListener("reset", dn), l(L).removeEventListener("focusin", fn), b(L, null)), Ie && (clearTimeout(Ie), Ie = null), document.removeEventListener("click", sn), document.removeEventListener("scroll", un), window.removeEventListener("resize", gn);
  }), Gi(() => {
    var n;
    $("mounted", "2.1.0"), $("workers", ft()), ao(), $("plugins", je.length ? je.map((f) => f.constructor.pluginName).join(", ") : "none"), ge() && $("using test mode"), S() && xr(S()), o() !== void 0 && $("auto", o()), E() !== void 0 && _n(E()), b(L, (n = l(V)) == null ? void 0 : n.closest("form"), !0), l(L) && (l(L).addEventListener("submit", cn, { capture: !0 }), l(L).addEventListener("reset", dn), (o() === "onfocus" || K() === "focus") && l(L).addEventListener("focusin", fn)), ye() && bn(!0), o() === "onload" && (Me() ? St() : Oe()), l(br) && (te() || X()) && $("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
      Ve("load");
    });
  });
  function Wt(n, f) {
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
    s() && At() && l(R) === C.VERIFIED ? Oe() : Qe(C.EXPIRED, l(O).expired);
  }
  async function no() {
    var n;
    if (xt())
      throw $("mocking error"), new Error("Mocked error.");
    if (l(yr))
      return $("using provided json data"), l(yr);
    if (ge())
      return $("generating test challenge", { test: ge() }), cl(typeof ge() != "boolean" ? +ge() : void 0);
    {
      if (!s() && l(L)) {
        const A = l(L).getAttribute("action");
        A != null && A.includes("/form/") && s(A + "/altcha");
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
      const p = v.headers.get("X-Altcha-Config"), g = await v.json(), x = new URLSearchParams((n = g.salt.split("?")) == null ? void 0 : n[1]), y = x.get("expires") || x.get("expire");
      if (y) {
        const A = new Date(+y * 1e3), B = isNaN(A.getTime()) ? 0 : A.getTime() - Date.now();
        B > 0 && xr(B);
      }
      if (p)
        try {
          const A = JSON.parse(p);
          A && typeof A == "object" && (A.verifyurl && !A.verifyurl.startsWith("fn:") && (A.verifyurl = ln(A.verifyurl)), En(A));
        } catch (A) {
          $("unable to configure from X-Altcha-Config", A);
        }
      return g;
    }
  }
  function io(n) {
    var v, p;
    const f = (v = l(L)) == null ? void 0 : v.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((p = f == null ? void 0 : f.value) == null ? void 0 : p.slice(f.value.indexOf("@"))) || void 0;
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
    const v = Object.keys(n).map((g) => g.toLowerCase()), p = f.reduce(
      (g, x) => (x = x.toLowerCase(), g || (n[x] ? x : null) || v.find((y) => x.split("-")[0] === y.split("-")[0]) || null),
      null
    );
    return n[p || "en"];
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
      ...((v = l(L)) == null ? void 0 : v.querySelectorAll(n != null && n.length ? n.map((p) => `input[name="${p}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (p, g) => {
        const x = g.name, y = g.value;
        return x && y && (p[x] = /\n/.test(y) ? y.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : y), p;
      },
      {}
    );
  }
  function ln(n, f) {
    const v = new URL(s() || location.origin), p = new URL(n, v);
    if (p.search || (p.search = v.search), f)
      for (const g in f)
        f[g] !== void 0 && f[g] !== null && p.searchParams.set(g, f[g]);
    return p.toString();
  }
  function ao() {
    const n = Gt() !== void 0 ? Gt().split(",") : void 0;
    for (const f of globalThis.altchaPlugins)
      (!n || n.includes(f.pluginName)) && je.push(new f({
        el: l(V),
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
        verify: Oe
      }));
  }
  function $(...n) {
    (h() || n.some((f) => f instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${ae()}]`, ...n);
  }
  function lo() {
    b(G, ee.PAUSED, !0);
  }
  function so(n) {
    b(G, ee.ERROR, !0);
  }
  function uo() {
    b(G, ee.READY, !0);
  }
  function fo() {
    b(G, ee.LOADING, !0);
  }
  function co() {
    b(G, ee.PLAYING, !0);
  }
  function ho() {
    b(G, ee.PAUSED, !0);
  }
  function vo(n) {
    var f;
    if (n.preventDefault(), n.stopPropagation(), l(H)) {
      const v = new FormData(n.target), p = String(v.get("code"));
      if ((f = re()) != null && f.startsWith("fn:")) {
        const g = re().replace(/^fn:/, "");
        if ($(`calling ${g} function instead of verifyurl`), !(g in globalThis))
          throw new Error(`Global function "${g}" is undefined.`);
        return globalThis[g]({
          challenge: l(H).challenge,
          code: p,
          solution: l(H).solution
        });
      }
      b(Xe, !0), mn(Wt(l(H).challenge, l(H).solution), p).then(({ reason: g, verified: x }) => {
        x ? (b(H, null), Re(C.VERIFIED), $("verified"), Dr().then(() => {
          var y;
          (y = l(wr)) == null || y.focus(), Ve("verified", { payload: l(Le) }), o() === "onsubmit" ? Cr(l(dt)) : ye() && Tt();
        })) : (Qe(), b(Ke, g || "Verification failed", !0));
      }).catch((g) => {
        b(H, null), Re(C.ERROR, g), $("sentinel verification failed:", g);
      }).finally(() => {
        b(Xe, !1);
      });
    }
  }
  function sn(n) {
    var v;
    const f = n.target;
    E() && f && !l(V).contains(f) && (l(R) === C.VERIFIED && K() === !1 || l(R) === C.VERIFIED && K() === "focus" && !((v = l(L)) != null && v.matches(":focus-within")) || o() === "off" && l(R) === C.UNVERIFIED) && Tt();
  }
  function un() {
    E() && l(R) !== C.UNVERIFIED && Dt();
  }
  function go(n) {
    for (const f of je)
      typeof f.onErrorChange == "function" && f.onErrorChange(l(Ke));
  }
  function fn(n) {
    l(R) === C.UNVERIFIED ? Oe() : E() && K() === "focus" && l(R) === C.VERIFIED && Yt();
  }
  function cn(n) {
    var p;
    const f = n.target;
    f != null && f.hasAttribute("data-code-challenge-form") || (b(dt, n.submitter, !0), l(L) && o() === "onsubmit" ? ((p = l(dt)) == null || p.blur(), l(R) === C.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), Oe().then(() => {
      Cr(l(dt));
    })) : l(R) !== C.VERIFIED && (n.preventDefault(), n.stopPropagation(), l(R) === C.VERIFYING && hn())) : l(L) && E() && o() === "off" && l(R) === C.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), Yt()));
  }
  function dn() {
    Qe();
  }
  function hn() {
    l(R) === C.VERIFYING && l(O).waitAlert && alert(l(O).waitAlert);
  }
  function vn() {
    l(Ue) ? l(Ue).paused ? (l(Ue).currentTime = 0, l(Ue).play()) : l(Ue).pause() : (b(Er, !0), requestAnimationFrame(() => {
      var n;
      (n = l(Ue)) == null || n.play();
    }));
  }
  function po(n) {
    for (const f of je)
      typeof f.onStateChange == "function" && f.onStateChange(l(R));
    E() && l(R) !== C.UNVERIFIED && requestAnimationFrame(() => {
      Dt();
    }), b(Rt, l(R) === C.VERIFIED), ye() && l(de) && (l(R) !== C.UNVERIFIED ? Yt() : Tt());
  }
  function gn() {
    E() && Dt();
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
        classifier: x,
        disableRules: y,
        email: A,
        expectedLanguages: B,
        expectedCountries: Q,
        fields: le,
        ipAddress: qe,
        text: Ar,
        timeZone: Jt
      } = oo();
      f.blockedCountries = g, f.classifier = x, f.disableRules = y, f.email = A === !1 ? void 0 : io(A), f.expectedCountries = Q, f.expectedLanguages = B || (en ? [en] : void 0), f.fields = le === !1 ? void 0 : an(le), f.ipAddress = qe === !1 ? void 0 : qe || "auto", f.text = Ar, f.timeZone = Jt === !1 ? void 0 : Jt || Qn();
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
    const p = await v.json();
    if (p != null && p.payload && b(Le, p.payload, !0), Ve("serververification", p), u() && p.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  async function mn(n, f) {
    if (!re())
      throw new Error("Attribute verifyurl not set.");
    $("requesting sentinel verification from", re());
    const v = { code: f, payload: n };
    Je() && (v.fields = Je().fields ? an() : void 0, v.timeZone = Je().timeZone ? Qn() : void 0);
    const p = await fetch(re(), {
      body: JSON.stringify(v),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (!p || !(p instanceof Response))
      throw new Error("Fetch function did not return a response.");
    if (p.status !== 200)
      throw new Error(`Server responded with ${p.status}.`);
    const g = await p.json();
    return g != null && g.payload && b(Le, g.payload, !0), Ve("sentinelverification", g), g;
  }
  function Cr(n) {
    var f;
    l(L) && "requestSubmit" in l(L) ? l(L).requestSubmit(n) : (f = l(L)) != null && f.reportValidity() && (n ? n.click() : l(L).submit());
  }
  function xr(n) {
    $("expire", n), Ie && (clearTimeout(Ie), Ie = null), n < 1 ? rn() : Ie = setTimeout(rn, n);
  }
  function _n(n) {
    $("floating", n), E() !== n && (l(V).style.left = "", l(V).style.top = ""), E(n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : E()), E() ? (o() || o("onsubmit"), document.addEventListener("scroll", un), document.addEventListener("click", sn), window.addEventListener("resize", gn)) : o() === "onsubmit" && o(void 0);
  }
  function bn(n) {
    var f, v;
    if ($("overlay", n), ye(n), n) {
      if (o() || o("onsubmit"), l(de) && l(V).parentElement && l(de).replaceWith(l(V).parentElement), (v = (f = l(V)) == null ? void 0 : f.parentElement) != null && v.parentElement) {
        b(de, document.createElement("div"), !0), l(V).parentElement.parentElement.appendChild(l(de));
        const p = document.createElement("div"), g = document.createElement("button");
        g.type = "button", g.innerHTML = "&times;", g.addEventListener("click", (x) => {
          x.preventDefault(), Qe();
        }), l(de).classList.add("altcha-overlay-backdrop"), g.classList.add("altcha-overlay-close-button"), p.classList.add("altcha-overlay"), l(de).append(p), p.append(g), kt() && p.append(...document.querySelectorAll(kt())), p.append(l(V).parentElement);
      }
    } else l(de) && l(V).parentElement && (l(de).replaceWith(l(V).parentElement), l(V).style.display = "block");
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
    const p = [];
    v = Math.min(16, f, Math.max(1, v));
    for (let y = 0; y < v; y++)
      p.push(altchaCreateWorker(It()));
    const g = Math.ceil(f / v), x = await Promise.all(p.map((y, A) => {
      const B = A * g;
      return new Promise((Q) => {
        y.addEventListener("message", (le) => {
          if (le.data)
            for (const qe of p)
              qe !== y && qe.postMessage({ type: "abort" });
          Q(le.data);
        }), y.postMessage({
          payload: n,
          max: B + g,
          start: B,
          type: "work"
        });
      });
    }));
    for (const y of p)
      y.terminate();
    return x.find((y) => !!y) || null;
  }
  async function St() {
    if (!Me()) {
      Re(C.ERROR);
      return;
    }
    const n = je.find((f) => f.constructor.pluginName === "obfuscation");
    if (!n || !("clarify" in n)) {
      Re(C.ERROR), $("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in n && typeof n.clarify == "function")
      return n.clarify();
  }
  function En(n) {
    n.obfuscated !== void 0 && Me(n.obfuscated), n.auto !== void 0 && (o(n.auto), o() === "onload" && (Me() ? St() : Oe())), n.blockspam !== void 0 && u(!!n.blockspam), n.customfetch !== void 0 && _(n.customfetch), n.floatinganchor !== void 0 && U(n.floatinganchor), n.delay !== void 0 && m(n.delay), n.floatingoffset !== void 0 && ce(n.floatingoffset), n.floating !== void 0 && _n(n.floating), n.expire !== void 0 && (xr(n.expire), S(n.expire)), n.challenge && (c(typeof n.challenge == "string" ? n.challenge : JSON.stringify(n.challenge)), yn(l(yr))), n.challengeurl !== void 0 && s(n.challengeurl), n.debug !== void 0 && h(!!n.debug), n.hidefooter !== void 0 && te(!!n.hidefooter), n.hidelogo !== void 0 && X(!!n.hidelogo), n.language !== void 0 && ut(on(a(), [n.language])), n.maxnumber !== void 0 && be(+n.maxnumber), n.mockerror !== void 0 && xt(!!n.mockerror), n.name !== void 0 && ae(n.name), n.overlaycontent !== void 0 && kt(n.overlaycontent), n.overlay !== void 0 && bn(n.overlay), n.refetchonexpire !== void 0 && At(!!n.refetchonexpire), n.sentinel !== void 0 && typeof n.sentinel == "object" && Je(n.sentinel), n.spamfilter !== void 0 && Ae(typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && ut(typeof n.strings == "string" ? n.strings : JSON.stringify(n.strings)), n.test !== void 0 && ge(typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && re(n.verifyurl), n.workers !== void 0 && ft(+n.workers), n.workerurl !== void 0 && It(n.workerurl);
  }
  function Cn() {
    return {
      auto: o(),
      blockspam: u(),
      challengeurl: s(),
      debug: h(),
      delay: m(),
      expire: S(),
      floating: E(),
      floatinganchor: U(),
      floatingoffset: ce(),
      hidefooter: te(),
      hidelogo: X(),
      name: ae(),
      maxnumber: be(),
      mockerror: xt(),
      obfuscated: Me(),
      overlay: ye(),
      refetchonexpire: At(),
      spamfilter: Ae(),
      strings: l(O),
      test: ge(),
      verifyurl: re(),
      workers: ft(),
      workerurl: It()
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
  function Tt() {
    l(V).style.display = "none", ye() && l(de) && (l(de).style.display = "none");
  }
  function Dt(n = 20) {
    var f;
    if (l(V))
      if (l(ct) || b(ct, (U() ? document.querySelector(U()) : (f = l(L)) == null ? void 0 : f.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || l(L), !0), l(ct)) {
        const v = parseInt(ce(), 10) || 12, p = l(ct).getBoundingClientRect(), g = l(V).getBoundingClientRect(), x = document.documentElement.clientHeight, y = document.documentElement.clientWidth, A = E() === "auto" ? p.bottom + g.height + v + n > x : E() === "top", B = Math.max(n, Math.min(y - n - g.width, p.left + p.width / 2 - g.width / 2));
        if (A ? l(V).style.top = `${p.top - (g.height + v)}px` : l(V).style.top = `${p.bottom + v}px`, l(V).style.left = `${B}px`, l(V).setAttribute("data-floating", A ? "top" : "bottom"), l($t)) {
          const Q = l($t).getBoundingClientRect();
          l($t).style.left = p.left - B + p.width / 2 - Q.width / 2 + "px";
        }
      } else
        $("unable to find floating anchor element");
  }
  function Qe(n = C.UNVERIFIED, f = null) {
    Ie && (clearTimeout(Ie), Ie = null), b(Rt, !1), b(Le, null), b(H, null), b(Er, !1), b(G, null), Re(n, f);
  }
  function An(n) {
    b(ct, n, !0);
  }
  function Re(n, f = null) {
    b(R, n, !0), b(Ke, f, !0), Ve("statechange", {
      payload: l(Le),
      state: l(R)
    });
  }
  function Yt() {
    l(V).style.display = "block", E() && Dt(), ye() && l(de) && (l(de).style.display = "flex");
  }
  async function Oe() {
    return Qe(C.VERIFYING), await new Promise((n) => setTimeout(n, m() || 0)), no().then((n) => (yn(n), $("challenge", n), wn(n))).then(({ data: n, solution: f }) => {
      var v;
      if ($("solution", f), !f || n && "challenge" in n && !("clearText" in f))
        if ((f == null ? void 0 : f.number) !== void 0 && "challenge" in n)
          if (re() && "codeChallenge" in n)
            ["INPUT", "BUTTON", "SELECT", "TEXTAREA"].includes(((v = document.activeElement) == null ? void 0 : v.tagName) || "") && w() === !1 && document.activeElement.blur(), b(H, { challenge: n, solution: f }, !0);
          else {
            if (re() && Je() !== void 0)
              return mn(Wt(n, f));
            if (re())
              return mo(Wt(n, f));
            b(Le, Wt(n, f), !0), $("payload", l(Le));
          }
        else
          throw $("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      l(H) ? (Re(C.CODE), Dr().then(() => {
        Ve("code", { codeChallenge: l(H) });
      })) : (Re(C.VERIFIED), $("verified"), Dr().then(() => {
        Ve("verified", { payload: l(Le) }), o() === "onsubmit" ? Cr(l(dt)) : ye() && Tt();
      }));
    }).catch((n) => {
      $(n), Re(C.ERROR, n.message);
    });
  }
  var In = Ll(), Rn = Lt(In);
  Ya(Rn, t, "default", {});
  var ht = z(Rn, 2), kr = Z(ht), Zt = Z(kr);
  let $n;
  var Sn = Z(Zt);
  {
    var yo = (n) => {
      Nr(n);
    };
    J(Sn, (n) => {
      l(R) === C.VERIFYING && n(yo);
    });
  }
  var et = z(Sn, 2);
  zn(et), et.__change = [
    bl,
    R,
    Ae,
    L,
    Rt,
    Me,
    St,
    Oe
  ], Qt(et, (n) => b(wr, n), () => l(wr)), Y(Zt);
  var zt = z(Zt, 2), wo = Z(zt);
  {
    var Eo = (n) => {
      var f = Xt(), v = Lt(f);
      tt(v, () => l(O).verified), j(n, f);
    }, Co = (n, f) => {
      {
        var v = (g) => {
          var x = Xt(), y = Lt(x);
          tt(y, () => l(O).verifying), j(g, x);
        }, p = (g, x) => {
          {
            var y = (B) => {
              var Q = Xt(), le = Lt(Q);
              tt(le, () => l(O).verificationRequired), j(B, Q);
            }, A = (B) => {
              var Q = Xt(), le = Lt(Q);
              tt(le, () => l(O).label), j(B, Q);
            };
            J(
              g,
              (B) => {
                l(R) === C.CODE ? B(y) : B(A, !1);
              },
              x
            );
          }
        };
        J(
          n,
          (g) => {
            l(R) === C.VERIFYING ? g(v) : g(p, !1);
          },
          f
        );
      }
    };
    J(wo, (n) => {
      l(R) === C.VERIFIED ? n(Eo) : n(Co, !1);
    });
  }
  Y(zt);
  var Tn = z(zt, 2);
  {
    var xo = (n) => {
      var f = wl();
      zn(f), $e(() => {
        T(f, "name", ae()), Xa(f, l(Le));
      }), j(n, f);
    };
    J(Tn, (n) => {
      l(R) === C.VERIFIED && n(xo);
    });
  }
  var Dn = z(Tn, 2);
  {
    var ko = (n) => {
      var f = El(), v = Z(f);
      T(v, "href", eo), Y(f), $e(() => T(v, "aria-label", l(O).ariaLinkLabel)), j(n, f);
    };
    J(Dn, (n) => {
      (X() !== !0 || l(br)) && n(ko);
    });
  }
  var Ao = z(Dn, 2);
  {
    var Io = (n) => {
      var f = Rl(), v = z(Z(f), 2), p = Z(v), g = z(p, 2);
      Ua(g, !w()), g.__keydown = [
        ml,
        vn
      ];
      var x = z(g, 2), y = Z(x), A = Z(y);
      {
        var B = (we) => {
          var W = Al();
          W.__click = vn;
          var Kt = Z(W);
          {
            var Nt = (vt) => {
              Nr(vt, () => 20);
            }, Oo = (vt, Po) => {
              {
                var Fo = (gt) => {
                  var Ir = Cl();
                  j(gt, Ir);
                }, Mo = (gt, Ir) => {
                  {
                    var Vo = (pt) => {
                      var Rr = xl();
                      j(pt, Rr);
                    }, Uo = (pt) => {
                      var Rr = kl();
                      j(pt, Rr);
                    };
                    J(
                      gt,
                      (pt) => {
                        l(G) === ee.PLAYING ? pt(Vo) : pt(Uo, !1);
                      },
                      Ir
                    );
                  }
                };
                J(
                  vt,
                  (gt) => {
                    l(G) === ee.ERROR ? gt(Fo) : gt(Mo, !1);
                  },
                  Po
                );
              }
            };
            J(Kt, (vt) => {
              l(G) === ee.LOADING ? vt(Nt) : vt(Oo, !1);
            });
          }
          Y(W), $e(() => {
            T(W, "title", l(O).getAudioChallenge), W.disabled = l(G) === ee.LOADING || l(G) === ee.ERROR || l(Xe), T(W, "aria-label", l(G) === ee.LOADING ? l(O).loading : l(O).getAudioChallenge);
          }), j(we, W);
        };
        J(A, (we) => {
          l(H).challenge.codeChallenge.audio && we(B);
        });
      }
      var Q = z(A, 2);
      Q.__click = [_l, Oe], Y(y);
      var le = z(y, 2), qe = Z(le);
      {
        var Ar = (we) => {
          Nr(we, () => 16);
        };
        J(qe, (we) => {
          l(Xe) && we(Ar);
        });
      }
      var Jt = z(qe);
      Y(le), Y(x);
      var No = z(x, 2);
      {
        var Lo = (we) => {
          var W = Il(), Kt = Z(W);
          Y(W), Qt(W, (Nt) => b(Ue, Nt), () => l(Ue)), $e((Nt) => T(Kt, "src", Nt), [
            () => ln(l(H).challenge.codeChallenge.audio, { language: q() })
          ]), Be("loadstart", W, fo), Be("canplay", W, uo), Be("pause", W, ho), Be("playing", W, co), Be("ended", W, lo), Be("error", Kt, so), j(we, W);
        };
        J(No, (we) => {
          l(H).challenge.codeChallenge.audio && l(Er) && we(Lo);
        });
      }
      Y(v), Y(f), $e(() => {
        T(f, "aria-label", l(O).verificationRequired), T(p, "src", l(H).challenge.codeChallenge.image), T(g, "minlength", l(H).challenge.codeChallenge.length || 1), T(g, "maxlength", l(H).challenge.codeChallenge.length), T(g, "placeholder", l(O).enterCode), T(g, "aria-label", l(G) === ee.LOADING ? l(O).loading : l(G) === ee.PLAYING ? "" : l(O).enterCodeAria), T(g, "aria-live", l(G) ? "assertive" : "polite"), T(g, "aria-busy", l(G) === ee.LOADING), g.disabled = l(Xe), T(Q, "aria-label", l(O).reload), T(Q, "title", l(O).reload), Q.disabled = l(Xe), le.disabled = l(Xe), T(le, "aria-label", l(O).verify), Ha(Jt, ` ${l(O).verify ?? ""}`);
      }), Be("submit", v, vo, !0), j(n, f);
    };
    J(Ao, (n) => {
      var f;
      (f = l(H)) != null && f.challenge.codeChallenge && n(Io);
    });
  }
  Y(kr);
  var Nn = z(kr, 2);
  {
    var Ro = (n) => {
      var f = Tl(), v = z(Z(f), 2);
      {
        var p = (x) => {
          var y = $l(), A = Z(y);
          tt(A, () => l(O).expired), Y(y), $e(() => T(y, "title", l(Ke))), j(x, y);
        }, g = (x) => {
          var y = Sl(), A = Z(y);
          tt(A, () => l(O).error), Y(y), $e(() => T(y, "title", l(Ke))), j(x, y);
        };
        J(v, (x) => {
          l(R) === C.EXPIRED ? x(p) : x(g, !1);
        });
      }
      Y(f), j(n, f);
    };
    J(Nn, (n) => {
      (l(Ke) || l(R) === C.EXPIRED) && n(Ro);
    });
  }
  var Ln = z(Nn, 2);
  {
    var $o = (n) => {
      var f = Dl(), v = Z(f), p = Z(v);
      tt(p, () => l(O).footer), Y(v), Y(f), j(n, f);
    };
    J(Ln, (n) => {
      l(O).footer && (te() !== !0 || l(br)) && n($o);
    });
  }
  var So = z(Ln, 2);
  {
    var To = (n) => {
      var f = Nl();
      Qt(f, (v) => b($t, v), () => l($t)), j(n, f);
    };
    J(So, (n) => {
      E() && n(To);
    });
  }
  Y(ht), Qt(ht, (n) => b(V, n), () => l(V)), $e(
    (n) => {
      T(ht, "data-state", l(R)), T(ht, "data-floating", E()), T(ht, "data-overlay", ye()), $n = za(Zt, 1, "altcha-checkbox", null, $n, n), T(et, "id", l(tn)), et.required = o() !== "onsubmit" && (!E() || o() !== "off"), T(zt, "for", l(tn));
    },
    [
      () => ({
        "altcha-checkbox-verifying": l(R) === C.VERIFYING
      })
    ]
  ), Be("invalid", et, hn), el(et, () => l(Rt), (n) => b(Rt, n)), j(e, In);
  var Do = Fi({
    clarify: St,
    configure: En,
    getConfiguration: Cn,
    getFloatingAnchor: xn,
    getPlugin: bo,
    getState: kn,
    hide: Tt,
    repositionFloating: Dt,
    reset: Qe,
    setFloatingAnchor: An,
    setState: Re,
    show: Yt,
    verify: Oe,
    get auto() {
      return o();
    },
    set auto(n = void 0) {
      o(n), k();
    },
    get blockspam() {
      return u();
    },
    set blockspam(n = void 0) {
      u(n), k();
    },
    get challengeurl() {
      return s();
    },
    set challengeurl(n = void 0) {
      s(n), k();
    },
    get challengejson() {
      return c();
    },
    set challengejson(n = void 0) {
      c(n), k();
    },
    get credentials() {
      return d();
    },
    set credentials(n = void 0) {
      d(n), k();
    },
    get customfetch() {
      return _();
    },
    set customfetch(n = void 0) {
      _(n), k();
    },
    get debug() {
      return h();
    },
    set debug(n = !1) {
      h(n), k();
    },
    get delay() {
      return m();
    },
    set delay(n = 0) {
      m(n), k();
    },
    get disableautofocus() {
      return w();
    },
    set disableautofocus(n = !1) {
      w(n), k();
    },
    get expire() {
      return S();
    },
    set expire(n = void 0) {
      S(n), k();
    },
    get floating() {
      return E();
    },
    set floating(n = void 0) {
      E(n), k();
    },
    get floatinganchor() {
      return U();
    },
    set floatinganchor(n = void 0) {
      U(n), k();
    },
    get floatingoffset() {
      return ce();
    },
    set floatingoffset(n = void 0) {
      ce(n), k();
    },
    get floatingpersist() {
      return K();
    },
    set floatingpersist(n = !1) {
      K(n), k();
    },
    get hidefooter() {
      return te();
    },
    set hidefooter(n = !1) {
      te(n), k();
    },
    get hidelogo() {
      return X();
    },
    set hidelogo(n = !1) {
      X(n), k();
    },
    get id() {
      return st();
    },
    set id(n = void 0) {
      st(n), k();
    },
    get language() {
      return q();
    },
    set language(n = void 0) {
      q(n), k();
    },
    get name() {
      return ae();
    },
    set name(n = "altcha") {
      ae(n), k();
    },
    get maxnumber() {
      return be();
    },
    set maxnumber(n = 1e6) {
      be(n), k();
    },
    get mockerror() {
      return xt();
    },
    set mockerror(n = !1) {
      xt(n), k();
    },
    get obfuscated() {
      return Me();
    },
    set obfuscated(n = void 0) {
      Me(n), k();
    },
    get overlay() {
      return ye();
    },
    set overlay(n = void 0) {
      ye(n), k();
    },
    get overlaycontent() {
      return kt();
    },
    set overlaycontent(n = void 0) {
      kt(n), k();
    },
    get plugins() {
      return Gt();
    },
    set plugins(n = void 0) {
      Gt(n), k();
    },
    get refetchonexpire() {
      return At();
    },
    set refetchonexpire(n = !0) {
      At(n), k();
    },
    get sentinel() {
      return Je();
    },
    set sentinel(n = void 0) {
      Je(n), k();
    },
    get spamfilter() {
      return Ae();
    },
    set spamfilter(n = !1) {
      Ae(n), k();
    },
    get strings() {
      return ut();
    },
    set strings(n = void 0) {
      ut(n), k();
    },
    get test() {
      return ge();
    },
    set test(n = !1) {
      ge(n), k();
    },
    get verifyurl() {
      return re();
    },
    set verifyurl(n = void 0) {
      re(n), k();
    },
    get workers() {
      return ft();
    },
    set workers(n = Math.min(16, navigator.hardwareConcurrency || 8)) {
      ft(n), k();
    },
    get workerurl() {
      return It();
    },
    set workerurl(n = void 0) {
      It(n), k();
    }
  });
  return i(), Do;
}
Ba(["change", "keydown", "click"]);
customElements.define("altcha-widget", ul(
  Ol,
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
const Ji = '@keyframes overlay-slidein{to{opacity:1;top:50%}}@keyframes altcha-spinner{to{transform:rotate(360deg)}}.altcha{background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);position:relative}.altcha:focus-within{border-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating]{background:var(--altcha-color-base, white);display:none;filter:drop-shadow(3px 3px 6px rgba(0,0,0,.2));left:-100%;position:fixed;top:-100%;width:var(--altcha-max-width, 260px);z-index:999999}.altcha[data-floating=top] .altcha-anchor-arrow{border-bottom-color:transparent;border-top-color:var(--altcha-color-border, #a0a0a0);bottom:-12px;top:auto}.altcha[data-floating=bottom]:focus-within::after{border-bottom-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating=top]:focus-within::after{border-top-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating]:not([data-state=unverified]){display:block}.altcha-anchor-arrow{border:6px solid transparent;border-bottom-color:var(--altcha-color-border, #a0a0a0);content:"";height:0;left:12px;position:absolute;top:-12px;width:0}.altcha-main{align-items:center;display:flex;gap:.4rem;padding:.7rem;position:relative}.altcha-code-challenge{background:var(--altcha-color-base, white);border:1px solid var(--altcha-color-border-focus, currentColor);border-radius:var(--altcha-border-radius, 3px);filter:drop-shadow(3px 3px 6px rgba(0,0,0,.2));padding:.5rem;position:absolute;top:2.5rem;z-index:9999999}.altcha-code-challenge>form{display:flex;flex-direction:column;gap:.5rem}.altcha-code-challenge-input{border:1px solid currentColor;border-radius:3px;box-sizing:border-box;outline:0;font-size:16px;padding:.35rem;width:220px}.altcha-code-challenge-input:focus{outline:2px solid color-mix(in srgb,var(--altcha-color-active, #1D1DC9) 20%,transparent)}.altcha-code-challenge-input:disabled{opacity:.7}.altcha-code-challenge-image{background-color:#fff;border:1px solid currentColor;border-radius:3px;box-sizing:border-box;object-fit:contain;height:50px;width:220px}.altcha-code-challenge-audio,.altcha-code-challenge-reload{background:color-mix(in srgb,var(--altcha-color-text, currentColor) 10%,transparent);border:0;border-radius:3px;color:var(--altcha-color-text, currentColor);cursor:pointer;display:flex;align-items:center;justify-content:center;padding:.35rem}.altcha-code-challenge-audio:disabled,.altcha-code-challenge-reload:disabled,.altcha-code-challenge-verify:disabled{opacity:.7;pointer-events:none}.altcha-code-challenge-audio>*,.altcha-code-challenge-reload>*{height:20px;width:20px}.altcha-code-challenge-buttons{display:flex;justify-content:space-between}.altcha-code-challenge-buttons-left{display:flex;gap:.25rem}.altcha-code-challenge-verify{align-items:center;background:var(--altcha-color-active, #1D1DC9);border:0;border-radius:3px;color:#fff;cursor:pointer;display:flex;gap:.5rem;font-size:100%;padding:.35rem 1rem}.altcha-code-challenge-arrow{border:6px solid transparent;border-bottom-color:var(--altcha-color-border, currentColor);content:"";height:0;left:.15rem;position:absolute;top:-12px;width:0}.altcha[data-floating=top] .altcha-code-challenge{top:-150px}.altcha[data-floating=top] .altcha-code-challenge-arrow{border-bottom-color:transparent;border-top-color:var(--altcha-color-border, currentColor);bottom:-12px;top:auto}.altcha-label{cursor:pointer;flex-grow:1}.altcha-logo{color:currentColor!important;opacity:.7}.altcha-footer:hover,.altcha-logo:hover{opacity:1}.altcha-error{color:var(--altcha-color-error-text, #f23939);display:flex;font-size:.85rem;gap:.3rem;padding:0 .7rem .7rem}.altcha-footer{align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:.75rem;opacity:.7;justify-content:end;padding:.2rem .7rem}.altcha-footer a{color:currentColor}.altcha-checkbox{display:flex;align-items:center;justify-content:center;height:24px;position:relative;width:24px}.altcha-checkbox .altcha-spinner{bottom:0;left:0;position:absolute;right:0;top:0}.altcha-checkbox input{width:18px;height:18px;margin:0}.altcha-checkbox-verifying input{appearance:none;opacity:0;pointer-events:none}.altcha-spinner{animation:altcha-spinner .75s infinite linear;transform-origin:center}.altcha-overlay{--altcha-color-base:#fff;--altcha-color-text:#000;animation:overlay-slidein .5s forwards;display:flex;flex-direction:column;gap:.5rem;left:50%;width:260px;opacity:0;position:fixed;top:45%;transform:translate(-50%,-50%)}.altcha-overlay-backdrop{background:rgba(0,0,0,.5);bottom:0;display:none;left:0;position:fixed;right:0;top:0;z-index:99999999}.altcha-overlay-close-button{align-self:flex-end;background:0 0;border:0;padding:.25rem;cursor:pointer;color:currentColor;font-size:130%;line-height:1;opacity:.7}@media (max-height:450px){.altcha-overlay{top:10%!important;transform:translate(-50%,0)}}';
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
  Ol as Altcha
};
