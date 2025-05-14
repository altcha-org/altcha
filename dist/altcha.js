var ya = Object.defineProperty;
var En = (e) => {
  throw TypeError(e);
};
var Ea = (e, t, r) => t in e ? ya(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var be = (e, t, r) => Ea(e, typeof t != "symbol" ? t + "" : t, r), Cn = (e, t, r) => t.has(e) || En("Cannot " + r);
var le = (e, t, r) => (Cn(e, t, "read from private field"), r ? r.call(e) : t.get(e)), mr = (e, t, r) => t.has(e) ? En("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), pr = (e, t, r, i) => (Cn(e, t, "write to private field"), i ? i.call(e, r) : t.set(e, r), r);
const Un = `(function(){"use strict";const d=new TextEncoder;function p(e){return[...new Uint8Array(e)].map(t=>t.toString(16).padStart(2,"0")).join("")}async function b(e,t,r){if(typeof crypto>"u"||!("subtle"in crypto)||!("digest"in crypto.subtle))throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");return p(await crypto.subtle.digest(r.toUpperCase(),d.encode(e+t)))}function w(e,t,r="SHA-256",n=1e6,s=0){const o=new AbortController,a=Date.now();return{promise:(async()=>{for(let c=s;c<=n;c+=1){if(o.signal.aborted)return null;if(await b(t,c,r)===e)return{number:c,took:Date.now()-a}}return null})(),controller:o}}function h(e){const t=atob(e),r=new Uint8Array(t.length);for(let n=0;n<t.length;n++)r[n]=t.charCodeAt(n);return r}function g(e,t=12){const r=new Uint8Array(t);for(let n=0;n<t;n++)r[n]=e%256,e=Math.floor(e/256);return r}async function m(e,t="",r=1e6,n=0){const s="AES-GCM",o=new AbortController,a=Date.now(),l=async()=>{for(let u=n;u<=r;u+=1){if(o.signal.aborted||!c||!y)return null;try{const f=await crypto.subtle.decrypt({name:s,iv:g(u)},c,y);if(f)return{clearText:new TextDecoder().decode(f),took:Date.now()-a}}catch{}}return null};let c=null,y=null;try{y=h(e);const u=await crypto.subtle.digest("SHA-256",d.encode(t));c=await crypto.subtle.importKey("raw",u,s,!1,["decrypt"])}catch{return{promise:Promise.reject(),controller:o}}return{promise:l(),controller:o}}let i;onmessage=async e=>{const{type:t,payload:r,start:n,max:s}=e.data;let o=null;if(t==="abort")i==null||i.abort(),i=void 0;else if(t==="work"){if("obfuscated"in r){const{key:a,obfuscated:l}=r||{};o=await m(l,a,s,n)}else{const{algorithm:a,challenge:l,salt:c}=r||{};o=w(l,c,a,s,n)}i=o.controller,o.promise.then(a=>{self.postMessage(a&&{...a,worker:!0})})}}})();
`, xn = typeof self < "u" && self.Blob && new Blob([Un], { type: "text/javascript;charset=utf-8" });
function Ca(e) {
  let t;
  try {
    if (t = xn && (self.URL || self.webkitURL).createObjectURL(xn), !t) throw "";
    const r = new Worker(t, {
      name: e == null ? void 0 : e.name
    });
    return r.addEventListener("error", () => {
      (self.URL || self.webkitURL).revokeObjectURL(t);
    }), r;
  } catch {
    return new Worker(
      "data:text/javascript;charset=utf-8," + encodeURIComponent(Un),
      {
        name: e == null ? void 0 : e.name
      }
    );
  } finally {
    t && (self.URL || self.webkitURL).revokeObjectURL(t);
  }
}
const xa = "5";
var Mn;
typeof window < "u" && ((Mn = window.__svelte ?? (window.__svelte = {})).v ?? (Mn.v = /* @__PURE__ */ new Set())).add(xa);
const ka = 1, Aa = 4, Ra = 8, Ia = 16, $a = 1, Sa = 2, $r = "[", jn = "[!", qn = "]", ht = {}, se = Symbol(), Da = "http://www.w3.org/1999/xhtml", kn = !1;
function Bn(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var Hn = Array.isArray, Na = Array.prototype.indexOf, Ta = Array.from, Gt = Object.keys, Yt = Object.defineProperty, Qe = Object.getOwnPropertyDescriptor, La = Object.getOwnPropertyDescriptors, Pa = Object.prototype, Oa = Array.prototype, Gn = Object.getPrototypeOf, An = Object.isExtensible;
function Yn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Fa(e, t, r = !1) {
  return e === void 0 ? r ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
const we = 2, Wn = 4, Qt = 8, Sr = 16, Pe = 32, tt = 64, Wt = 128, he = 256, Zt = 512, ue = 1024, Se = 2048, rt = 4096, vt = 8192, er = 16384, Va = 32768, Dr = 65536, Ma = 1 << 19, Zn = 1 << 20, Er = 1 << 21, It = Symbol("$state"), zn = Symbol("legacy props"), Ua = Symbol("");
function ja(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function qa() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ba(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ha() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ga() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Ya(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Wa() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Za() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function za() {
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
    throw tr(), ht;
  return O = e;
}
function gt() {
  return He(
    /** @type {TemplateNode} */
    /* @__PURE__ */ We(O)
  );
}
function W(e) {
  if (F) {
    if (/* @__PURE__ */ We(O) !== null)
      throw tr(), ht;
    O = e;
  }
}
function Ja() {
  for (var e = 0, t = O; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === qn) {
        if (e === 0) return t;
        e -= 1;
      } else (r === $r || r === jn) && (e += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ We(t)
    );
    t.remove(), t = i;
  }
}
let Ka = !1;
function qe(e) {
  if (typeof e != "object" || e === null || It in e)
    return e;
  const t = Gn(e);
  if (t !== Pa && t !== Oa)
    return e;
  var r = /* @__PURE__ */ new Map(), i = Hn(e), a = /* @__PURE__ */ V(0), o = D, s = (f) => {
    var c = D;
    De(o);
    var d = f();
    return De(c), d;
  };
  return i && r.set("length", /* @__PURE__ */ V(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(f, c, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && Wa();
        var m = r.get(c);
        return m === void 0 ? (m = s(() => /* @__PURE__ */ V(d.value)), r.set(c, m)) : b(
          m,
          s(() => qe(d.value))
        ), !0;
      },
      deleteProperty(f, c) {
        var d = r.get(c);
        if (d === void 0)
          c in f && (r.set(
            c,
            s(() => /* @__PURE__ */ V(se))
          ), br(a));
        else {
          if (i && typeof c == "string") {
            var m = (
              /** @type {Source<number>} */
              r.get("length")
            ), h = Number(c);
            Number.isInteger(h) && h < m.v && b(m, h);
          }
          b(d, se), br(a);
        }
        return !0;
      },
      get(f, c, d) {
        var w;
        if (c === It)
          return e;
        var m = r.get(c), h = c in f;
        if (m === void 0 && (!h || (w = Qe(f, c)) != null && w.writable) && (m = s(() => /* @__PURE__ */ V(qe(h ? f[c] : se))), r.set(c, m)), m !== void 0) {
          var v = l(m);
          return v === se ? void 0 : v;
        }
        return Reflect.get(f, c, d);
      },
      getOwnPropertyDescriptor(f, c) {
        var d = Reflect.getOwnPropertyDescriptor(f, c);
        if (d && "value" in d) {
          var m = r.get(c);
          m && (d.value = l(m));
        } else if (d === void 0) {
          var h = r.get(c), v = h == null ? void 0 : h.v;
          if (h !== void 0 && v !== se)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return d;
      },
      has(f, c) {
        var v;
        if (c === It)
          return !0;
        var d = r.get(c), m = d !== void 0 && d.v !== se || Reflect.has(f, c);
        if (d !== void 0 || N !== null && (!m || (v = Qe(f, c)) != null && v.writable)) {
          d === void 0 && (d = s(() => /* @__PURE__ */ V(m ? qe(f[c]) : se)), r.set(c, d));
          var h = l(d);
          if (h === se)
            return !1;
        }
        return m;
      },
      set(f, c, d, m) {
        var fe;
        var h = r.get(c), v = c in f;
        if (i && c === "length")
          for (var w = d; w < /** @type {Source<number>} */
          h.v; w += 1) {
            var $ = r.get(w + "");
            $ !== void 0 ? b($, se) : w in f && ($ = s(() => /* @__PURE__ */ V(se)), r.set(w + "", $));
          }
        h === void 0 ? (!v || (fe = Qe(f, c)) != null && fe.writable) && (h = s(() => /* @__PURE__ */ V(void 0)), b(
          h,
          s(() => qe(d))
        ), r.set(c, h)) : (v = h.v !== se, b(
          h,
          s(() => qe(d))
        ));
        var L = Reflect.getOwnPropertyDescriptor(f, c);
        if (L != null && L.set && L.set.call(m, d), !v) {
          if (i && typeof c == "string") {
            var M = (
              /** @type {Source<number>} */
              r.get("length")
            ), ae = Number(c);
            Number.isInteger(ae) && ae >= M.v && b(M, ae + 1);
          }
          br(a);
        }
        return !0;
      },
      ownKeys(f) {
        l(a);
        var c = Reflect.ownKeys(f).filter((h) => {
          var v = r.get(h);
          return v === void 0 || v.v !== se;
        });
        for (var [d, m] of r)
          m.v !== se && !(d in f) && c.push(d);
        return c;
      },
      setPrototypeOf() {
        Za();
      }
    }
  );
}
function br(e, t = 1) {
  b(e, e.v + t);
}
var Rn, Jn, Kn, Xn;
function Cr() {
  if (Rn === void 0) {
    Rn = window, Jn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Kn = Qe(t, "firstChild").get, Xn = Qe(t, "nextSibling").get, An(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), An(r) && (r.__t = void 0);
  }
}
function rr(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function me(e) {
  return Kn.call(e);
}
// @__NO_SIDE_EFFECTS__
function We(e) {
  return Xn.call(e);
}
function Z(e, t) {
  if (!F)
    return /* @__PURE__ */ me(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ me(O)
  );
  return r === null && (r = O.appendChild(rr())), He(r), r;
}
function kt(e, t) {
  if (!F) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ me(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ We(r) : r;
  }
  return O;
}
function z(e, t = 1, r = !1) {
  let i = F ? O : e;
  for (var a; t--; )
    a = i, i = /** @type {TemplateNode} */
    /* @__PURE__ */ We(i);
  if (!F)
    return i;
  var o = i == null ? void 0 : i.nodeType;
  if (r && o !== 3) {
    var s = rr();
    return i === null ? a == null || a.after(s) : i.before(s), He(s), s;
  }
  return He(i), /** @type {TemplateNode} */
  i;
}
function Xa(e) {
  e.textContent = "";
}
function Qn(e) {
  return e === this.v;
}
function Qa(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Nr(e) {
  return !Qa(e, this.v);
}
// @__NO_SIDE_EFFECTS__
function nr(e) {
  var t = we | Se, r = D !== null && (D.f & we) !== 0 ? (
    /** @type {Derived} */
    D
  ) : null;
  return N === null || r !== null && (r.f & he) !== 0 ? t |= he : N.f |= Zn, {
    ctx: ie,
    deps: null,
    effects: null,
    equals: Qn,
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
function At(e) {
  const t = /* @__PURE__ */ nr(e);
  return hi(t), t;
}
// @__NO_SIDE_EFFECTS__
function eo(e) {
  const t = /* @__PURE__ */ nr(e);
  return t.equals = Nr, t;
}
function ei(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Ge(
        /** @type {Effect} */
        t[r]
      );
  }
}
function to(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & we) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function ti(e) {
  var t, r = N;
  Ye(to(e));
  try {
    ei(e), t = mi(e);
  } finally {
    Ye(r);
  }
  return t;
}
function ri(e) {
  var t = ti(e), r = (Be || (e.f & he) !== 0) && e.deps !== null ? rt : ue;
  ye(e, r), e.equals(t) || (e.v = t, e.wv = gi());
}
function ro(e) {
  N === null && D === null && Ba(), D !== null && (D.f & he) !== 0 && N === null && qa(), Tt && ja();
}
function no(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function nt(e, t, r, i = !0) {
  var a = N, o = {
    ctx: ie,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Se,
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
      Or(o), o.f |= Va;
    } catch (c) {
      throw Ge(o), c;
    }
  else t !== null && ar(o);
  var s = r && o.deps === null && o.first === null && o.nodes_start === null && o.teardown === null && (o.f & (Zn | Wt)) === 0;
  if (!s && i && (a !== null && no(o, a), D !== null && (D.f & we) !== 0)) {
    var f = (
      /** @type {Derived} */
      D
    );
    (f.effects ?? (f.effects = [])).push(o);
  }
  return o;
}
function ni(e) {
  const t = nt(Qt, null, !1);
  return ye(t, ue), t.teardown = e, t;
}
function xr(e) {
  ro();
  var t = N !== null && (N.f & Pe) !== 0 && ie !== null && !ie.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      ie
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: N,
      reaction: D
    });
  } else {
    var i = Tr(e);
    return i;
  }
}
function io(e) {
  const t = nt(tt, e, !0);
  return () => {
    Ge(t);
  };
}
function ao(e) {
  const t = nt(tt, e, !0);
  return (r = {}) => new Promise((i) => {
    r.outro ? Ar(t, () => {
      Ge(t), i(void 0);
    }) : (Ge(t), i(void 0));
  });
}
function Tr(e) {
  return nt(Wn, e, !1);
}
function Lr(e) {
  return nt(Qt, e, !0);
}
function Re(e, t = [], r = nr) {
  const i = t.map(r);
  return ii(() => e(...i.map(l)));
}
function ii(e, t = 0) {
  return nt(Qt | Sr | t, e, !0);
}
function kr(e, t = !0) {
  return nt(Qt | Pe, e, !0, t);
}
function ai(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Tt, i = D;
    $n(!0), De(null);
    try {
      t.call(null);
    } finally {
      $n(r), De(i);
    }
  }
}
function oi(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var i = r.next;
    (r.f & tt) !== 0 ? r.parent = null : Ge(r, t), r = i;
  }
}
function oo(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Pe) === 0 && Ge(t), t = r;
  }
}
function Ge(e, t = !0) {
  var r = !1;
  (t || (e.f & Ma) !== 0) && e.nodes_start !== null && (li(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), r = !0), oi(e, t && !r), Xt(e, 0), ye(e, er);
  var i = e.transitions;
  if (i !== null)
    for (const o of i)
      o.stop();
  ai(e);
  var a = e.parent;
  a !== null && a.first !== null && si(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function li(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ We(e)
    );
    e.remove(), e = r;
  }
}
function si(e) {
  var t = e.parent, r = e.prev, i = e.next;
  r !== null && (r.next = i), i !== null && (i.prev = r), t !== null && (t.first === e && (t.first = i), t.last === e && (t.last = r));
}
function Ar(e, t) {
  var r = [];
  ui(e, r, !0), lo(r, () => {
    Ge(e), t && t();
  });
}
function lo(e, t) {
  var r = e.length;
  if (r > 0) {
    var i = () => --r || t();
    for (var a of e)
      a.out(i);
  } else
    t();
}
function ui(e, t, r) {
  if ((e.f & vt) === 0) {
    if (e.f ^= vt, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || r) && t.push(s);
    for (var i = e.first; i !== null; ) {
      var a = i.next, o = (i.f & Dr) !== 0 || (i.f & Pe) !== 0;
      ui(i, t, o ? r : !1), i = a;
    }
  }
}
function In(e) {
  fi(e, !0);
}
function fi(e, t) {
  if ((e.f & vt) !== 0) {
    e.f ^= vt, (e.f & ue) === 0 && (e.f ^= ue), Lt(e) && (ye(e, Se), ar(e));
    for (var r = e.first; r !== null; ) {
      var i = r.next, a = (r.f & Dr) !== 0 || (r.f & Pe) !== 0;
      fi(r, a ? t : !1), r = i;
    }
    if (e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || t) && o.in();
  }
}
const so = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let St = [], Dt = [];
function ci() {
  var e = St;
  St = [], Yn(e);
}
function di() {
  var e = Dt;
  Dt = [], Yn(e);
}
function Pr(e) {
  St.length === 0 && queueMicrotask(ci), St.push(e);
}
function uo(e) {
  Dt.length === 0 && so(di), Dt.push(e);
}
function fo() {
  St.length > 0 && ci(), Dt.length > 0 && di();
}
let Bt = !1, zt = !1, Jt = null, et = !1, Tt = !1;
function $n(e) {
  Tt = e;
}
let $t = [];
let D = null, Ie = !1;
function De(e) {
  D = e;
}
let N = null;
function Ye(e) {
  N = e;
}
let ne = null;
function hi(e) {
  D !== null && D.f & Er && (ne === null ? ne = [e] : ne.push(e));
}
let re = null, de = 0, ge = null;
function co(e) {
  ge = e;
}
let vi = 1, Kt = 0, Be = !1;
function gi() {
  return ++vi;
}
function Lt(e) {
  var h;
  var t = e.f;
  if ((t & Se) !== 0)
    return !0;
  if ((t & rt) !== 0) {
    var r = e.deps, i = (t & he) !== 0;
    if (r !== null) {
      var a, o, s = (t & Zt) !== 0, f = i && N !== null && !Be, c = r.length;
      if (s || f) {
        var d = (
          /** @type {Derived} */
          e
        ), m = d.parent;
        for (a = 0; a < c; a++)
          o = r[a], (s || !((h = o == null ? void 0 : o.reactions) != null && h.includes(d))) && (o.reactions ?? (o.reactions = [])).push(d);
        s && (d.f ^= Zt), f && m !== null && (m.f & he) === 0 && (d.f ^= he);
      }
      for (a = 0; a < c; a++)
        if (o = r[a], Lt(
          /** @type {Derived} */
          o
        ) && ri(
          /** @type {Derived} */
          o
        ), o.wv > e.wv)
          return !0;
    }
    (!i || N !== null && !Be) && ye(e, ue);
  }
  return !1;
}
function ho(e, t) {
  for (var r = t; r !== null; ) {
    if ((r.f & Wt) !== 0)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= Wt;
      }
    r = r.parent;
  }
  throw Bt = !1, e;
}
function Sn(e) {
  return (e.f & er) === 0 && (e.parent === null || (e.parent.f & Wt) === 0);
}
function ir(e, t, r, i) {
  if (Bt) {
    if (r === null && (Bt = !1), Sn(t))
      throw e;
    return;
  }
  if (r !== null && (Bt = !0), ho(e, t), Sn(t))
    throw e;
}
function _i(e, t, r = !0) {
  var i = e.reactions;
  if (i !== null)
    for (var a = 0; a < i.length; a++) {
      var o = i[a];
      ne != null && ne.includes(e) || ((o.f & we) !== 0 ? _i(
        /** @type {Derived} */
        o,
        t,
        !1
      ) : t === o && (r ? ye(o, Se) : (o.f & ue) !== 0 && ye(o, rt), ar(
        /** @type {Effect} */
        o
      )));
    }
}
function mi(e) {
  var w;
  var t = re, r = de, i = ge, a = D, o = Be, s = ne, f = ie, c = Ie, d = e.f;
  re = /** @type {null | Value[]} */
  null, de = 0, ge = null, Be = (d & he) !== 0 && (Ie || !et || D === null), D = (d & (Pe | tt)) === 0 ? e : null, ne = null, Dn(e.ctx), Ie = !1, Kt++, e.f |= Er;
  try {
    var m = (
      /** @type {Function} */
      (0, e.fn)()
    ), h = e.deps;
    if (re !== null) {
      var v;
      if (Xt(e, de), h !== null && de > 0)
        for (h.length = de + re.length, v = 0; v < re.length; v++)
          h[de + v] = re[v];
      else
        e.deps = h = re;
      if (!Be)
        for (v = de; v < h.length; v++)
          ((w = h[v]).reactions ?? (w.reactions = [])).push(e);
    } else h !== null && de < h.length && (Xt(e, de), h.length = de);
    if (xi() && ge !== null && !Ie && h !== null && (e.f & (we | rt | Se)) === 0)
      for (v = 0; v < /** @type {Source[]} */
      ge.length; v++)
        _i(
          ge[v],
          /** @type {Effect} */
          e
        );
    return a !== null && a !== e && (Kt++, ge !== null && (i === null ? i = ge : i.push(.../** @type {Source[]} */
    ge))), m;
  } finally {
    re = t, de = r, ge = i, D = a, Be = o, ne = s, Dn(f), Ie = c, e.f ^= Er;
  }
}
function vo(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var i = Na.call(r, e);
    if (i !== -1) {
      var a = r.length - 1;
      a === 0 ? r = t.reactions = null : (r[i] = r[a], r.pop());
    }
  }
  r === null && (t.f & we) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (re === null || !re.includes(t)) && (ye(t, rt), (t.f & (he | Zt)) === 0 && (t.f ^= Zt), ei(
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
      vo(e, r[i]);
}
function Or(e) {
  var t = e.f;
  if ((t & er) === 0) {
    ye(e, ue);
    var r = N, i = ie, a = et;
    N = e, et = !0;
    try {
      (t & Sr) !== 0 ? oo(e) : oi(e), ai(e);
      var o = mi(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = vi;
      var s = e.deps, f;
      kn && Ka && e.f & Se;
    } catch (c) {
      ir(c, e, r, i || e.ctx);
    } finally {
      et = a, N = r;
    }
  }
}
function go() {
  try {
    Ha();
  } catch (e) {
    if (Jt !== null)
      ir(e, Jt, null);
    else
      throw e;
  }
}
function pi() {
  var e = et;
  try {
    var t = 0;
    for (et = !0; $t.length > 0; ) {
      t++ > 1e3 && go();
      var r = $t, i = r.length;
      $t = [];
      for (var a = 0; a < i; a++) {
        var o = mo(r[a]);
        _o(o);
      }
      Nt.clear();
    }
  } finally {
    zt = !1, et = e, Jt = null;
  }
}
function _o(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var i = e[r];
      if ((i.f & (er | vt)) === 0)
        try {
          Lt(i) && (Or(i), i.deps === null && i.first === null && i.nodes_start === null && (i.teardown === null ? si(i) : i.fn = null));
        } catch (a) {
          ir(a, i, null, i.ctx);
        }
    }
}
function ar(e) {
  zt || (zt = !0, queueMicrotask(pi));
  for (var t = Jt = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (tt | Pe)) !== 0) {
      if ((r & ue) === 0) return;
      t.f ^= ue;
    }
  }
  $t.push(t);
}
function mo(e) {
  for (var t = [], r = e; r !== null; ) {
    var i = r.f, a = (i & (Pe | tt)) !== 0, o = a && (i & ue) !== 0;
    if (!o && (i & vt) === 0) {
      if ((i & Wn) !== 0)
        t.push(r);
      else if (a)
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
function x(e) {
  for (var t; ; ) {
    if (fo(), $t.length === 0)
      return (
        /** @type {T} */
        t
      );
    zt = !0, pi();
  }
}
async function wr() {
  await Promise.resolve(), x();
}
function l(e) {
  var t = e.f, r = (t & we) !== 0;
  if (D !== null && !Ie) {
    if (!(ne != null && ne.includes(e))) {
      var i = D.deps;
      e.rv < Kt && (e.rv = Kt, re === null && i !== null && i[de] === e ? de++ : re === null ? re = [e] : (!Be || !re.includes(e)) && re.push(e));
    }
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var a = (
      /** @type {Derived} */
      e
    ), o = a.parent;
    o !== null && (o.f & he) === 0 && (a.f ^= he);
  }
  return r && (a = /** @type {Derived} */
  e, Lt(a) && ri(a)), Tt && Nt.has(e) ? Nt.get(e) : e.v;
}
function _t(e) {
  var t = Ie;
  try {
    return Ie = !0, e();
  } finally {
    Ie = t;
  }
}
const po = -7169;
function ye(e, t) {
  e.f = e.f & po | t;
}
const Nt = /* @__PURE__ */ new Map();
function bi(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Qn,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function V(e, t) {
  const r = bi(e);
  return hi(r), r;
}
// @__NO_SIDE_EFFECTS__
function wi(e, t = !1) {
  const r = bi(e);
  return t || (r.equals = Nr), r;
}
function b(e, t, r = !1) {
  D !== null && !Ie && xi() && (D.f & (we | Sr)) !== 0 && !(ne != null && ne.includes(e)) && za();
  let i = r ? qe(t) : t;
  return bo(e, i);
}
function bo(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    Tt ? Nt.set(e, t) : Nt.set(e, r), e.v = t, (e.f & we) !== 0 && ((e.f & Se) !== 0 && ti(
      /** @type {Derived} */
      e
    ), ye(e, (e.f & he) === 0 ? ue : rt)), e.wv = gi(), yi(e, Se), N !== null && (N.f & ue) !== 0 && (N.f & (Pe | tt)) === 0 && (ge === null ? co([e]) : ge.push(e));
  }
  return t;
}
function yi(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, a = 0; a < i; a++) {
      var o = r[a], s = o.f;
      (s & Se) === 0 && (ye(o, t), (s & (ue | he)) !== 0 && ((s & we) !== 0 ? yi(
        /** @type {Derived} */
        o,
        rt
      ) : ar(
        /** @type {Effect} */
        o
      )));
    }
}
let ie = null;
function Dn(e) {
  ie = e;
}
function Ei(e, t = !1, r) {
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
  ni(() => {
    i.d = !0;
  });
}
function Ci(e) {
  const t = ie;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var r = N, i = D;
      t.e = null;
      try {
        for (var a = 0; a < s.length; a++) {
          var o = s[a];
          Ye(o.effect), De(o.reaction), Tr(o.fn);
        }
      } finally {
        Ye(r), De(i);
      }
    }
    ie = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function xi() {
  return !0;
}
const wo = ["touchstart", "touchmove"];
function yo(e) {
  return wo.includes(e);
}
function Eo(e, t) {
  if (t) {
    const r = document.body;
    e.autofocus = !0, Pr(() => {
      document.activeElement === r && e.focus();
    });
  }
}
let Nn = !1;
function ki() {
  Nn || (Nn = !0, document.addEventListener(
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
  var t = D, r = N;
  De(null), Ye(null);
  try {
    return e();
  } finally {
    De(t), Ye(r);
  }
}
function Co(e, t, r, i = r) {
  e.addEventListener(t, () => Ai(r));
  const a = e.__on_r;
  a ? e.__on_r = () => {
    a(), i(!0);
  } : e.__on_r = () => i(!0), ki();
}
const Ri = /* @__PURE__ */ new Set(), Rr = /* @__PURE__ */ new Set();
function xo(e, t, r, i = {}) {
  function a(o) {
    if (i.capture || Rt.call(t, o), !o.cancelBubble)
      return Ai(() => r == null ? void 0 : r.call(this, o));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Pr(() => {
    t.addEventListener(e, a, i);
  }) : t.addEventListener(e, a, i), a;
}
function je(e, t, r, i, a) {
  var o = { capture: i, passive: a }, s = xo(e, t, r, o);
  (t === document.body || t === window || t === document) && ni(() => {
    t.removeEventListener(e, s, o);
  });
}
function ko(e) {
  for (var t = 0; t < e.length; t++)
    Ri.add(e[t]);
  for (var r of Rr)
    r(e);
}
function Rt(e) {
  var fe;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), i = e.type, a = ((fe = e.composedPath) == null ? void 0 : fe.call(e)) || [], o = (
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
    Yt(e, "currentTarget", {
      configurable: !0,
      get() {
        return o || r;
      }
    });
    var m = D, h = N;
    De(null), Ye(null);
    try {
      for (var v, w = []; o !== null; ) {
        var $ = o.assignedSlot || o.parentNode || /** @type {any} */
        o.host || null;
        try {
          var L = o["__" + i];
          if (L != null && (!/** @type {any} */
          o.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === o))
            if (Hn(L)) {
              var [M, ...ae] = L;
              M.apply(o, [e, ...ae]);
            } else
              L.call(o, e);
        } catch (ce) {
          v ? w.push(ce) : v = ce;
        }
        if (e.cancelBubble || $ === t || $ === null)
          break;
        o = $;
      }
      if (v) {
        for (let ce of w)
          queueMicrotask(() => {
            throw ce;
          });
        throw v;
      }
    } finally {
      e.__root = t, delete e.currentTarget, De(m), Ye(h);
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
    N
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function Ee(e, t) {
  var r = (t & $a) !== 0, i = (t & Sa) !== 0, a, o = !e.startsWith("<!>");
  return () => {
    if (F)
      return $e(O, null), O;
    a === void 0 && (a = Fr(o ? e : "<!>" + e), r || (a = /** @type {Node} */
    /* @__PURE__ */ me(a)));
    var s = (
      /** @type {TemplateNode} */
      i || Jn ? document.importNode(a, !0) : a.cloneNode(!0)
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
function or(e, t, r = "svg") {
  var i = !e.startsWith("<!>"), a = `<${r}>${i ? e : "<!>" + e}</${r}>`, o;
  return () => {
    if (F)
      return $e(O, null), O;
    if (!o) {
      var s = (
        /** @type {DocumentFragment} */
        Fr(a)
      ), f = (
        /** @type {Element} */
        /* @__PURE__ */ me(s)
      );
      o = /** @type {Element} */
      /* @__PURE__ */ me(f);
    }
    var c = (
      /** @type {TemplateNode} */
      o.cloneNode(!0)
    );
    return $e(c, c), c;
  };
}
function Ut() {
  if (F)
    return $e(O, null), O;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = rr();
  return e.append(t, r), $e(t, r), e;
}
function j(e, t) {
  if (F) {
    N.nodes_end = O, gt();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Ao(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function Ii(e, t) {
  return $i(e, t);
}
function Ro(e, t) {
  Cr(), t.intro = t.intro ?? !1;
  const r = t.target, i = F, a = O;
  try {
    for (var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ me(r)
    ); o && (o.nodeType !== 8 || /** @type {Comment} */
    o.data !== $r); )
      o = /** @type {TemplateNode} */
      /* @__PURE__ */ We(o);
    if (!o)
      throw ht;
    dt(!0), He(
      /** @type {Comment} */
      o
    ), gt();
    const s = $i(e, { ...t, anchor: o });
    if (O === null || O.nodeType !== 8 || /** @type {Comment} */
    O.data !== qn)
      throw tr(), ht;
    return dt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === ht)
      return t.recover === !1 && Ga(), Cr(), Xa(r), dt(!1), Ii(e, t);
    throw s;
  } finally {
    dt(i), He(a);
  }
}
const ct = /* @__PURE__ */ new Map();
function $i(e, { target: t, anchor: r, props: i = {}, events: a, context: o, intro: s = !0 }) {
  Cr();
  var f = /* @__PURE__ */ new Set(), c = (h) => {
    for (var v = 0; v < h.length; v++) {
      var w = h[v];
      if (!f.has(w)) {
        f.add(w);
        var $ = yo(w);
        t.addEventListener(w, Rt, { passive: $ });
        var L = ct.get(w);
        L === void 0 ? (document.addEventListener(w, Rt, { passive: $ }), ct.set(w, 1)) : ct.set(w, L + 1);
      }
    }
  };
  c(Ta(Ri)), Rr.add(c);
  var d = void 0, m = ao(() => {
    var h = r ?? t.appendChild(rr());
    return kr(() => {
      if (o) {
        Ei({});
        var v = (
          /** @type {ComponentContext} */
          ie
        );
        v.c = o;
      }
      a && (i.$$events = a), F && $e(
        /** @type {TemplateNode} */
        h,
        null
      ), d = e(h, i) || {}, F && (N.nodes_end = O), o && Ci();
    }), () => {
      var $;
      for (var v of f) {
        t.removeEventListener(v, Rt);
        var w = (
          /** @type {number} */
          ct.get(v)
        );
        --w === 0 ? (document.removeEventListener(v, Rt), ct.delete(v)) : ct.set(v, w);
      }
      Rr.delete(c), h !== r && (($ = h.parentNode) == null || $.removeChild(h));
    };
  });
  return Ir.set(d, m), d;
}
let Ir = /* @__PURE__ */ new WeakMap();
function Io(e, t) {
  const r = Ir.get(e);
  return r ? (Ir.delete(e), r(t)) : Promise.resolve();
}
function J(e, t, [r, i] = [0, 0]) {
  F && r === 0 && gt();
  var a = e, o = null, s = null, f = se, c = r > 0 ? Dr : 0, d = !1;
  const m = (v, w = !0) => {
    d = !0, h(w, v);
  }, h = (v, w) => {
    if (f === (f = v)) return;
    let $ = !1;
    if (F && i !== -1) {
      if (r === 0) {
        const M = (
          /** @type {Comment} */
          a.data
        );
        M === $r ? i = 0 : M === jn ? i = 1 / 0 : (i = parseInt(M.substring(1)), i !== i && (i = f ? 1 / 0 : -1));
      }
      const L = i > r;
      !!f === L && (a = Ja(), He(a), dt(!1), $ = !0, i = -1);
    }
    f ? (o ? In(o) : w && (o = kr(() => w(a))), s && Ar(s, () => {
      s = null;
    })) : (s ? In(s) : w && (s = kr(() => w(a, [r + 1, i]))), o && Ar(o, () => {
      o = null;
    })), $ && dt(!0);
  };
  ii(() => {
    d = !1, t(m), d || h(null, null);
  }, c), F && (a = O);
}
function Xe(e, t, r = !1, i = !1, a = !1) {
  var o = e, s = "";
  Re(() => {
    var f = (
      /** @type {Effect} */
      N
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
          /* @__PURE__ */ We(c);
        if (c === null)
          throw tr(), ht;
        $e(O, d), o = He(c);
        return;
      }
      var m = s + "";
      r ? m = `<svg>${m}</svg>` : i && (m = `<math>${m}</math>`);
      var h = Fr(m);
      if ((r || i) && (h = /** @type {Element} */
      /* @__PURE__ */ me(h)), $e(
        /** @type {TemplateNode} */
        /* @__PURE__ */ me(h),
        /** @type {TemplateNode} */
        h.lastChild
      ), r || i)
        for (; /* @__PURE__ */ me(h); )
          o.before(
            /** @type {Node} */
            /* @__PURE__ */ me(h)
          );
      else
        o.before(h);
    }
  });
}
function $o(e, t, r, i, a) {
  var f;
  F && gt();
  var o = (f = t.$$slots) == null ? void 0 : f[r], s = !1;
  o === !0 && (o = t.children, s = !0), o === void 0 || o(e, s ? () => i : i);
}
const Tn = [...` 	
\r\f \v\uFEFF`];
function So(e, t, r) {
  var i = "" + e;
  if (r) {
    for (var a in r)
      if (r[a])
        i = i ? i + " " + a : a;
      else if (i.length)
        for (var o = a.length, s = 0; (s = i.indexOf(a, s)) >= 0; ) {
          var f = s + o;
          (s === 0 || Tn.includes(i[s - 1])) && (f === i.length || Tn.includes(i[f])) ? i = (s === 0 ? "" : i.substring(0, s)) + i.substring(f + 1) : s = f;
        }
  }
  return i === "" ? null : i;
}
function Do(e, t, r, i, a, o) {
  var s = e.__className;
  if (F || s !== r || s === void 0) {
    var f = So(r, i, o);
    (!F || f !== e.getAttribute("class")) && (f == null ? e.removeAttribute("class") : e.className = f), e.__className = r;
  } else if (o && a !== o)
    for (var c in o) {
      var d = !!o[c];
      (a == null || d !== !!a[c]) && e.classList.toggle(c, d);
    }
  return o;
}
const No = Symbol("is custom element"), To = Symbol("is html");
function Ln(e) {
  if (F) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var i = e.value;
          S(e, "value", null), e.value = i;
        }
        if (e.hasAttribute("checked")) {
          var a = e.checked;
          S(e, "checked", null), e.checked = a;
        }
      }
    };
    e.__on_r = r, uo(r), ki();
  }
}
function Lo(e, t) {
  var r = Si(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function S(e, t, r, i) {
  var a = Si(e);
  F && (a[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || a[t] !== (a[t] = r) && (t === "loading" && (e[Ua] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Po(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Si(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [No]: e.nodeName.includes("-"),
      [To]: e.namespaceURI === Da
    })
  );
}
var Pn = /* @__PURE__ */ new Map();
function Po(e) {
  var t = Pn.get(e.nodeName);
  if (t) return t;
  Pn.set(e.nodeName, t = []);
  for (var r, i = e, a = Element.prototype; a !== i; ) {
    r = La(i);
    for (var o in r)
      r[o].set && t.push(o);
    i = Gn(i);
  }
  return t;
}
function Oo(e, t, r = t) {
  Co(e, "change", (i) => {
    var a = i ? e.defaultChecked : e.checked;
    r(a);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  (F && e.defaultChecked !== e.checked || // If defaultChecked is set, then checked == defaultChecked
  _t(t) == null) && r(e.checked), Lr(() => {
    var i = t();
    e.checked = !!i;
  });
}
function On(e, t) {
  return e === t || (e == null ? void 0 : e[It]) === t;
}
function jt(e = {}, t, r, i) {
  return Tr(() => {
    var a, o;
    return Lr(() => {
      a = o, o = [], _t(() => {
        e !== r(...o) && (t(e, ...o), a && On(r(...a), e) && t(null, ...a));
      });
    }), () => {
      Pr(() => {
        o && On(r(...o), e) && t(null, ...o);
      });
    };
  }), e;
}
function Di(e) {
  ie === null && Bn(), xr(() => {
    const t = _t(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Fo(e) {
  ie === null && Bn(), Di(() => () => _t(e));
}
let qt = !1;
function Vo(e) {
  var t = qt;
  try {
    return qt = !1, [e(), qt];
  } finally {
    qt = t;
  }
}
function Fn(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function A(e, t, r, i) {
  var Ce;
  var a = (r & ka) !== 0, o = !0, s = (r & Ra) !== 0, f = (r & Ia) !== 0, c = !1, d;
  s ? [d, c] = Vo(() => (
    /** @type {V} */
    e[t]
  )) : d = /** @type {V} */
  e[t];
  var m = It in e || zn in e, h = s && (((Ce = Qe(e, t)) == null ? void 0 : Ce.set) ?? (m && t in e && ((U) => e[t] = U))) || void 0, v = (
    /** @type {V} */
    i
  ), w = !0, $ = !1, L = () => ($ = !0, w && (w = !1, f ? v = _t(
    /** @type {() => V} */
    i
  ) : v = /** @type {V} */
  i), v);
  d === void 0 && i !== void 0 && (h && o && Ya(), d = L(), h && h(d));
  var M;
  if (M = () => {
    var U = (
      /** @type {V} */
      e[t]
    );
    return U === void 0 ? L() : (w = !0, $ = !1, U);
  }, (r & Aa) === 0)
    return M;
  if (h) {
    var ae = e.$$legacy;
    return function(U, Q) {
      return arguments.length > 0 ? ((!Q || ae || c) && h(Q ? M() : U), U) : M();
    };
  }
  var fe = !1, ce = /* @__PURE__ */ wi(d), H = /* @__PURE__ */ nr(() => {
    var U = M(), Q = l(ce);
    return fe ? (fe = !1, Q) : ce.v = U;
  });
  return s && l(H), a || (H.equals = Nr), function(U, Q) {
    if (arguments.length > 0) {
      const Oe = Q ? l(H) : s ? qe(U) : U;
      if (!H.equals(Oe)) {
        if (fe = !0, b(ce, Oe), $ && v !== void 0 && (v = Oe), Fn(H))
          return U;
        _t(() => l(H));
      }
      return U;
    }
    return Fn(H) ? H.v : l(H);
  };
}
function Mo(e) {
  return new Uo(e);
}
var Le, _e;
class Uo {
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
    var o;
    var r = /* @__PURE__ */ new Map(), i = (s, f) => {
      var c = /* @__PURE__ */ wi(f);
      return r.set(s, c), c;
    };
    const a = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, f) {
          return l(r.get(f) ?? i(f, Reflect.get(s, f)));
        },
        has(s, f) {
          return f === zn ? !0 : (l(r.get(f) ?? i(f, Reflect.get(s, f))), Reflect.has(s, f));
        },
        set(s, f, c) {
          return b(r.get(f) ?? i(f, c), c), Reflect.set(s, f, c);
        }
      }
    );
    pr(this, _e, (t.hydrate ? Ro : Ii)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: a,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((o = t == null ? void 0 : t.props) != null && o.$$host) || t.sync === !1) && x(), pr(this, Le, a.$$events);
    for (const s of Object.keys(le(this, _e)))
      s === "$set" || s === "$destroy" || s === "$on" || Yt(this, s, {
        get() {
          return le(this, _e)[s];
        },
        /** @param {any} value */
        set(f) {
          le(this, _e)[s] = f;
        },
        enumerable: !0
      });
    le(this, _e).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(a, s);
    }, le(this, _e).$destroy = () => {
      Io(le(this, _e));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    le(this, _e).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    le(this, Le)[t] = le(this, Le)[t] || [];
    const i = (...a) => r.call(this, ...a);
    return le(this, Le)[t].push(i), () => {
      le(this, Le)[t] = le(this, Le)[t].filter(
        /** @param {any} fn */
        (a) => a !== i
      );
    };
  }
  $destroy() {
    le(this, _e).$destroy();
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
    be(this, "$$ctor");
    /** Slots */
    be(this, "$$s");
    /** @type {any} The Svelte component instance */
    be(this, "$$c");
    /** Whether or not the custom element is connected */
    be(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    be(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    be(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    be(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    be(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    be(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    be(this, "$$me");
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
          const s = document.createElement("slot");
          a !== "default" && (s.name = a), j(o, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, i = jo(this);
      for (const a of this.$$s)
        a in i && (a === "default" && !this.$$d.children ? (this.$$d.children = t(a), r.default = !0) : r[a] = t(a));
      for (const a of this.attributes) {
        const o = this.$$g_p(a.name);
        o in this.$$d || (this.$$d[o] = Ht(o, a.value, this.$$p_d, "toProp"));
      }
      for (const a in this.$$p_d)
        !(a in this.$$d) && this[a] !== void 0 && (this.$$d[a] = this[a], delete this[a]);
      this.$$c = Mo({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = io(() => {
        Lr(() => {
          var a;
          this.$$r = !0;
          for (const o of Gt(this.$$c)) {
            if (!((a = this.$$p_d[o]) != null && a.reflect)) continue;
            this.$$d[o] = this.$$c[o];
            const s = Ht(
              o,
              this.$$d[o],
              this.$$p_d,
              "toAttribute"
            );
            s == null ? this.removeAttribute(this.$$p_d[o].attribute || o) : this.setAttribute(this.$$p_d[o].attribute || o, s);
          }
          this.$$r = !1;
        });
      });
      for (const a in this.$$l)
        for (const o of this.$$l[a]) {
          const s = this.$$c.$on(a, o);
          this.$$l_u.set(o, s);
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Ht(t, i, this.$$p_d, "toProp"), (a = this.$$c) == null || a.$set({ [t]: this.$$d[t] }));
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
function Ht(e, t, r, i) {
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
function jo(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function qo(e, t, r, i, a, o) {
  let s = class extends Ni {
    constructor() {
      super(e, r, a), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Gt(t).map(
        (f) => (t[f].attribute || f).toLowerCase()
      );
    }
  };
  return Gt(t).forEach((f) => {
    Yt(s.prototype, f, {
      get() {
        return this.$$c && f in this.$$c ? this.$$c[f] : this.$$d[f];
      },
      set(c) {
        var h;
        c = Ht(f, c, t), this.$$d[f] = c;
        var d = this.$$c;
        if (d) {
          var m = (h = Qe(d, f)) == null ? void 0 : h.get;
          m ? d[f] = c : d.$set({ [f]: c });
        }
      }
    });
  }), i.forEach((f) => {
    Yt(s.prototype, f, {
      get() {
        var c;
        return (c = this.$$c) == null ? void 0 : c[f];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
const Ti = new TextEncoder();
function Bo(e) {
  return [...new Uint8Array(e)].map((t) => t.toString(16).padStart(2, "0")).join("");
}
async function Ho(e, t = "SHA-256", r = 1e5) {
  const i = Date.now().toString(16);
  e || (e = Math.round(Math.random() * r));
  const a = await Li(i, e, t);
  return {
    algorithm: t,
    challenge: a,
    salt: i,
    signature: ""
  };
}
async function Li(e, t, r) {
  if (typeof crypto > "u" || !("subtle" in crypto) || !("digest" in crypto.subtle))
    throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");
  return Bo(
    await crypto.subtle.digest(
      r.toUpperCase(),
      Ti.encode(e + t)
    )
  );
}
function Go(e, t, r = "SHA-256", i = 1e6, a = 0) {
  const o = new AbortController(), s = Date.now();
  return {
    promise: (async () => {
      for (let c = a; c <= i; c += 1) {
        if (o.signal.aborted)
          return null;
        if (await Li(t, c, r) === e)
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
function Vn() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function Yo(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let i = 0; i < t.length; i++)
    r[i] = t.charCodeAt(i);
  return r;
}
function Wo(e, t = 12) {
  const r = new Uint8Array(t);
  for (let i = 0; i < t; i++)
    r[i] = e % 256, e = Math.floor(e / 256);
  return r;
}
async function Zo(e, t = "", r = 1e6, i = 0) {
  const a = "AES-GCM", o = new AbortController(), s = Date.now(), f = async () => {
    for (let m = i; m <= r; m += 1) {
      if (o.signal.aborted || !c || !d)
        return null;
      try {
        const h = await crypto.subtle.decrypt(
          {
            name: a,
            iv: Wo(m)
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
    d = Yo(e);
    const m = await crypto.subtle.digest(
      "SHA-256",
      Ti.encode(t)
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
var E = /* @__PURE__ */ ((e) => (e.CODE = "code", e.ERROR = "error", e.VERIFIED = "verified", e.VERIFYING = "verifying", e.UNVERIFIED = "unverified", e.EXPIRED = "expired", e))(E || {}), X = /* @__PURE__ */ ((e) => (e.ERROR = "error", e.LOADING = "loading", e.PLAYING = "playing", e.PAUSED = "paused", e.READY = "ready", e))(X || {});
globalThis.altchaPlugins = globalThis.altchaPlugins || [];
globalThis.altchaI18n = globalThis.altchaI18n || {
  register: (e, t) => {
    globalThis.altchaI18n[e] = t;
  }
};
const zo = {
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
globalThis.altchaI18n.register("en", zo);
const yr = (e, t) => {
  let r = /* @__PURE__ */ eo(() => Fa(t == null ? void 0 : t(), 24));
  var i = Qo();
  Re(() => {
    S(i, "width", l(r)), S(i, "height", l(r));
  }), j(e, i);
};
function Jo(e, t) {
  e.code === "Space" && (e.preventDefault(), e.stopImmediatePropagation(), t());
}
function Ko(e, t) {
  e.preventDefault(), t();
}
function Xo(e, t, r, i, a, o, s, f) {
  var c;
  [
    E.UNVERIFIED,
    E.ERROR,
    E.EXPIRED,
    E.CODE
  ].includes(l(t)) ? r() !== !1 && ((c = l(i)) == null ? void 0 : c.reportValidity()) === !1 ? b(a, !1) : o() ? s() : f() : b(a, !0);
}
var Qo = /* @__PURE__ */ or('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="altcha-spinner"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" fill="currentColor" opacity=".25"></path><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" fill="currentColor"></path></svg>'), el = /* @__PURE__ */ Ee('<input type="hidden">'), tl = /* @__PURE__ */ Ee('<div><a target="_blank" class="altcha-logo" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor"></path></svg></a></div>'), rl = /* @__PURE__ */ or('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg>'), nl = /* @__PURE__ */ or('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z"></path></svg>'), il = /* @__PURE__ */ or('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"></path></svg>'), al = /* @__PURE__ */ Ee('<button type="button" class="altcha-code-challenge-audio"><!></button>'), ol = /* @__PURE__ */ Ee("<audio hidden autoplay><source></audio>"), ll = /* @__PURE__ */ Ee('<div class="altcha-code-challenge" role="dialog"><div class="altcha-code-challenge-arrow"></div> <form data-code-challenge-form="1"><img class="altcha-code-challenge-image" alt=""> <input type="text" autocomplete="off" name="code" class="altcha-code-challenge-input" required> <div class="altcha-code-challenge-buttons"><div class="altcha-code-challenge-buttons-left"><!> <button type="button" class="altcha-code-challenge-reload"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z"></path></svg></button></div> <button type="submit" class="altcha-code-challenge-verify"><!> </button></div> <!></form></div>'), sl = /* @__PURE__ */ Ee("<div><!></div>"), ul = /* @__PURE__ */ Ee("<div><!></div>"), fl = /* @__PURE__ */ Ee('<div class="altcha-error"><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg> <!></div>'), cl = /* @__PURE__ */ Ee('<div class="altcha-footer"><div><!></div></div>'), dl = /* @__PURE__ */ Ee('<div class="altcha-anchor-arrow"></div>'), hl = /* @__PURE__ */ Ee('<!> <div class="altcha"><div class="altcha-main"><div><!> <input type="checkbox"></div> <label class="altcha-label"><!></label> <!> <!> <!></div> <!> <!> <!></div>', 1);
function vl(e, t) {
  var wn, yn;
  Ei(t, !0);
  let r = A(t, "auto", 7, void 0), i = A(t, "blockspam", 7, void 0), a = A(t, "challengeurl", 7, void 0), o = A(t, "challengejson", 7, void 0), s = A(t, "credentials", 7, void 0), f = A(t, "customfetch", 7, void 0), c = A(t, "debug", 7, !1), d = A(t, "delay", 7, 0), m = A(t, "disableautofocus", 7, !1), h = A(t, "expire", 7, void 0), v = A(t, "floating", 7, void 0), w = A(t, "floatinganchor", 7, void 0), $ = A(t, "floatingoffset", 7, void 0), L = A(t, "floatingpersist", 7, !1), M = A(t, "hidefooter", 7, !1), ae = A(t, "hidelogo", 7, !1), fe = A(t, "id", 7, void 0), ce = A(t, "language", 7, void 0), H = A(t, "name", 7, "altcha"), Ce = A(t, "maxnumber", 7, 1e6), U = A(t, "mockerror", 7, !1), Q = A(t, "obfuscated", 7, void 0), Oe = A(t, "plugins", 7, void 0), mt = A(t, "refetchonexpire", 7, !0), Ze = A(t, "sentinel", 7, void 0), xe = A(t, "spamfilter", 7, !1), it = A(t, "strings", 7, void 0), ve = A(t, "test", 7, !1), ee = A(t, "verifyurl", 7, void 0), at = A(t, "workers", 23, () => Math.min(16, navigator.hardwareConcurrency || 8)), pt = A(t, "workerurl", 7, void 0);
  const Vr = ["SHA-256", "SHA-384", "SHA-512"], Pi = "https://altcha.org/", Fe = (n, u) => {
    t.$$host.dispatchEvent(new CustomEvent(n, { detail: u }));
  }, Mr = (yn = (wn = document.documentElement.lang) == null ? void 0 : wn.split("-")) == null ? void 0 : yn[0], lr = /* @__PURE__ */ At(() => {
    var n;
    return a() && new URL(a(), location.origin).host.endsWith(".altcha.org") && !!((n = a()) != null && n.includes("apiKey=ckey_"));
  }), sr = /* @__PURE__ */ At(() => o() ? en(o()) : void 0), Oi = /* @__PURE__ */ At(() => it() ? en(it()) : {}), P = /* @__PURE__ */ At(() => ({
    ...Br(),
    ...l(Oi)
  })), Ur = /* @__PURE__ */ At(() => `${fe() || H()}_checkbox_${Math.round(Math.random() * 1e8)}`);
  let bt = /* @__PURE__ */ V(!1), B = /* @__PURE__ */ V(null), R = /* @__PURE__ */ V(qe(E.UNVERIFIED)), te = /* @__PURE__ */ V(void 0), wt = /* @__PURE__ */ V(null), Ve = /* @__PURE__ */ V(null), ur = /* @__PURE__ */ V(null), ot = /* @__PURE__ */ V(null), T = /* @__PURE__ */ V(null), ze = /* @__PURE__ */ V(null), ke = null, G = /* @__PURE__ */ V(null), Je = /* @__PURE__ */ V(!1), Me = [], fr = /* @__PURE__ */ V(!1), Ne = /* @__PURE__ */ V(null);
  xr(() => {
    zi(l(ze));
  }), xr(() => {
    Ji(l(R));
  }), Fo(() => {
    Fi(), l(T) && (l(T).removeEventListener("submit", zr), l(T).removeEventListener("reset", Jr), l(T).removeEventListener("focusin", Zr), b(T, null)), ke && (clearTimeout(ke), ke = null), document.removeEventListener("click", Yr), document.removeEventListener("scroll", Wr), window.removeEventListener("resize", Qr);
  }), Di(() => {
    var n;
    I("mounted", "2.0.0-beta.11"), I("workers", at()), ji(), I("plugins", Me.length ? Me.map((u) => u.constructor.pluginName).join(", ") : "none"), ve() && I("using test mode"), h() && cr(h()), r() !== void 0 && I("auto", r()), v() !== void 0 && rn(v()), b(T, (n = l(te)) == null ? void 0 : n.closest("form"), !0), l(T) && (l(T).addEventListener("submit", zr, { capture: !0 }), l(T).addEventListener("reset", Jr), (r() === "onfocus" || L() === "focus") && l(T).addEventListener("focusin", Zr)), r() === "onload" && (Q() ? yt() : Te()), l(lr) && (M() || ae()) && I("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."), requestAnimationFrame(() => {
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
      test: ve() ? !0 : void 0,
      took: u.took
    }));
  }
  function Fi() {
    for (const n of Me)
      n.destroy();
  }
  function jr() {
    a() && mt() && l(R) === E.VERIFIED ? Te() : lt(E.EXPIRED, l(P).expired);
  }
  async function Vi() {
    var n;
    if (U())
      throw I("mocking error"), new Error("Mocked error.");
    if (l(sr))
      return I("using provided json data"), l(sr);
    if (ve())
      return I("generating test challenge", { test: ve() }), Ho(typeof ve() != "boolean" ? +ve() : void 0);
    {
      if (!a() && l(T)) {
        const C = l(T).getAttribute("action");
        C != null && C.includes("/form/") && a(C + "/altcha");
      }
      if (!a())
        throw new Error("Attribute challengeurl not set.");
      I("fetching challenge from", a());
      const u = {
        credentials: typeof s() == "boolean" ? "include" : s(),
        headers: xe() !== !1 ? { "x-altcha-spam-filter": "1" } : {}
      }, g = await qr()(a(), u);
      if (!g || !(g instanceof Response))
        throw new Error("Custom fetch function did not return a response.");
      if (g.status !== 200)
        throw new Error(`Server responded with ${g.status}.`);
      const p = g.headers.get("X-Altcha-Config"), _ = await g.json(), k = new URLSearchParams((n = _.salt.split("?")) == null ? void 0 : n[1]), y = k.get("expires") || k.get("expire");
      if (y) {
        const C = new Date(+y * 1e3), q = isNaN(C.getTime()) ? 0 : C.getTime() - Date.now();
        q > 0 && cr(q);
      }
      if (p)
        try {
          const C = JSON.parse(p);
          C && typeof C == "object" && (C.verifyurl && !C.verifyurl.startsWith("javascript:") && (C.verifyurl = Gr(C.verifyurl)), on(C));
        } catch (C) {
          I("unable to configure from X-Altcha-Config", C);
        }
      return _;
    }
  }
  function Mi(n) {
    var g, p;
    const u = (g = l(T)) == null ? void 0 : g.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((p = u == null ? void 0 : u.value) == null ? void 0 : p.slice(u.value.indexOf("@"))) || void 0;
  }
  function qr() {
    let n = fetch;
    if (f())
      if (I("using customfetch"), typeof f() == "string") {
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
    const u = Object.keys(globalThis.altchaI18n).map((p) => p.toLowerCase()), g = n.reduce(
      (p, _) => (_ = _.toLowerCase(), p || (globalThis.altchaI18n[_] ? _ : null) || u.find((k) => _.split("-")[0] === k.split("-")[0]) || null),
      null
    );
    return globalThis.altchaI18n[g || "en"];
  }
  function Ui() {
    return xe() === "ipAddress" ? {
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
    } : typeof xe() == "object" ? xe() : {
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
      ...((g = l(T)) == null ? void 0 : g.querySelectorAll(n != null && n.length ? n.map((p) => `input[name="${p}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (p, _) => {
        const k = _.name, y = _.value;
        return k && y && (p[k] = /\n/.test(y) ? y.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : y), p;
      },
      {}
    );
  }
  function Gr(n, u) {
    const g = new URL(a() || location.origin), p = new URL(n, g);
    if (p.search || (p.search = g.search), u)
      for (const _ in u)
        u[_] !== void 0 && u[_] !== null && p.searchParams.set(_, u[_]);
    return p.toString();
  }
  function ji() {
    const n = Oe() !== void 0 ? Oe().split(",") : void 0;
    for (const u of globalThis.altchaPlugins)
      (!n || n.includes(u.pluginName)) && Me.push(new u({
        el: l(te),
        clarify: yt,
        dispatch: Fe,
        getConfiguration: ln,
        getFloatingAnchor: sn,
        getState: un,
        log: I,
        reset: lt,
        solve: an,
        setState: Ae,
        setFloatingAnchor: cn,
        verify: Te
      }));
  }
  function I(...n) {
    (c() || n.some((u) => u instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("ALTCHA", `[name=${H()}]`, ...n);
  }
  function qi() {
    b(G, X.PAUSED, !0);
  }
  function Bi(n) {
    b(G, X.ERROR, !0);
  }
  function Hi() {
    b(G, X.READY, !0);
  }
  function Gi() {
    b(G, X.LOADING, !0);
  }
  function Yi() {
    b(G, X.PLAYING, !0);
  }
  function Wi() {
    b(G, X.PAUSED, !0);
  }
  function Zi(n) {
    var u;
    if (n.preventDefault(), n.stopPropagation(), l(B)) {
      const g = new FormData(n.target), p = String(g.get("code"));
      if ((u = ee()) != null && u.startsWith("javascript:")) {
        const _ = ee().replace(/^javascript:/, "");
        if (I(`calling ${_} function instead of verifyurl`), !(_ in globalThis))
          throw new Error(`Global function "${_}" is undefined.`);
        return globalThis[_]({
          challenge: l(B).challenge,
          code: p,
          solution: l(B).solution
        });
      }
      b(Je, !0), tn(Pt(l(B).challenge, l(B).solution), p).then(({ reason: _, verified: k }) => {
        k ? (b(B, null), Ae(E.VERIFIED), I("verified"), wr().then(() => {
          var y;
          (y = l(ur)) == null || y.focus(), Fe("verified", { payload: l(Ne) });
        })) : (lt(), b(ze, _ || "Verification failed", !0));
      }).catch((_) => {
        b(B, null), Ae(E.ERROR, _), I("sentinel verification failed:", _);
      }).finally(() => {
        b(Je, !1);
      });
    }
  }
  function Yr(n) {
    var g;
    const u = n.target;
    v() && u && !l(te).contains(u) && (l(R) === E.VERIFIED && L() === !1 || l(R) === E.VERIFIED && L() === "focus" && !((g = l(T)) != null && g.matches(":focus-within")) || r() === "off" && l(R) === E.UNVERIFIED) && fn();
  }
  function Wr() {
    v() && l(R) !== E.UNVERIFIED && Et();
  }
  function zi(n) {
    for (const u of Me)
      typeof u.onErrorChange == "function" && u.onErrorChange(l(ze));
  }
  function Zr(n) {
    l(R) === E.UNVERIFIED ? Te() : v() && L() === "focus" && l(R) === E.VERIFIED && dr();
  }
  function zr(n) {
    const u = n.target, g = n.submitter;
    u != null && u.hasAttribute("data-code-challenge-form") || (l(T) && r() === "onsubmit" ? l(R) === E.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), Te().then(() => {
      Xi(g);
    })) : l(R) !== E.VERIFIED && (n.preventDefault(), n.stopPropagation(), l(R) === E.VERIFYING && Kr()) : l(T) && v() && r() === "off" && l(R) === E.UNVERIFIED && (n.preventDefault(), n.stopPropagation(), dr()));
  }
  function Jr() {
    lt();
  }
  function Kr() {
    l(R) === E.VERIFYING && l(P).waitAlert && alert(l(P).waitAlert);
  }
  function Xr() {
    l(Ve) ? l(Ve).paused ? (l(Ve).currentTime = 0, l(Ve).play()) : l(Ve).pause() : (b(fr, !0), requestAnimationFrame(() => {
      var n;
      (n = l(Ve)) == null || n.play();
    }));
  }
  function Ji(n) {
    for (const u of Me)
      typeof u.onStateChange == "function" && u.onStateChange(l(R));
    v() && l(R) !== E.UNVERIFIED && requestAnimationFrame(() => {
      Et();
    }), b(bt, l(R) === E.VERIFIED);
  }
  function Qr() {
    v() && Et();
  }
  function en(n) {
    return JSON.parse(n);
  }
  async function Ki(n) {
    if (!ee())
      throw new Error("Attribute verifyurl not set.");
    I("requesting server verification from", ee());
    const u = { payload: n };
    if (xe() !== !1) {
      const {
        blockedCountries: _,
        classifier: k,
        disableRules: y,
        email: C,
        expectedLanguages: q,
        expectedCountries: K,
        fields: oe,
        ipAddress: Ue,
        text: vr,
        timeZone: Vt
      } = Ui();
      u.blockedCountries = _, u.classifier = k, u.disableRules = y, u.email = C === !1 ? void 0 : Mi(C), u.expectedCountries = K, u.expectedLanguages = q || (Mr ? [Mr] : void 0), u.fields = oe === !1 ? void 0 : Hr(oe), u.ipAddress = Ue === !1 ? void 0 : Ue || "auto", u.text = vr, u.timeZone = Vt === !1 ? void 0 : Vt || Vn();
    }
    const g = await qr()(ee(), {
      body: JSON.stringify(u),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (!g || !(g instanceof Response))
      throw new Error("Custom fetch function did not return a response.");
    if (g.status !== 200)
      throw new Error(`Server responded with ${g.status}.`);
    const p = await g.json();
    if (p != null && p.payload && b(Ne, p.payload, !0), Fe("serververification", p), i() && p.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  async function tn(n, u) {
    if (!ee())
      throw new Error("Attribute verifyurl not set.");
    I("requesting sentinel verification from", ee());
    const g = { code: u, payload: n };
    Ze() && (g.fields = Ze().fields ? Hr() : void 0, g.timeZone = Ze().timeZone ? Vn() : void 0);
    const p = await fetch(ee(), {
      body: JSON.stringify(g),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (p.status !== 200)
      throw new Error(`Server responded with ${p.status}.`);
    const _ = await p.json();
    return _ != null && _.payload && b(Ne, _.payload, !0), Fe("sentinelverification", _), _;
  }
  function Xi(n) {
    var u;
    l(T) && "requestSubmit" in l(T) ? l(T).requestSubmit(n) : (u = l(T)) != null && u.reportValidity() && (n ? n.click() : l(T).submit());
  }
  function cr(n) {
    I("expire", n), ke && (clearTimeout(ke), ke = null), n < 1 ? jr() : ke = setTimeout(jr, n);
  }
  function rn(n) {
    I("floating", n), v() !== n && (l(te).style.left = "", l(te).style.top = ""), v(n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : v()), v() ? (r() || r("onsubmit"), document.addEventListener("scroll", Wr), document.addEventListener("click", Yr), window.addEventListener("resize", Qr)) : r() === "onsubmit" && r(void 0);
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
  async function an(n) {
    let u = null;
    if ("Worker" in window) {
      try {
        u = await Qi(n, n.maxNumber || n.maxnumber || Ce());
      } catch (g) {
        I(g);
      }
      if ((u == null ? void 0 : u.number) !== void 0 || "obfuscated" in n)
        return { data: n, solution: u };
    }
    if ("obfuscated" in n) {
      const g = await Zo(n.obfuscated, n.key, n.maxNumber || n.maxnumber);
      return { data: n, solution: await g.promise };
    }
    return {
      data: n,
      solution: await Go(n.challenge, n.salt, n.algorithm, n.maxNumber || n.maxnumber || Ce()).promise
    };
  }
  async function Qi(n, u = typeof ve() == "number" ? ve() : n.maxNumber || n.maxnumber || Ce(), g = Math.ceil(at())) {
    const p = [];
    g = Math.min(16, u, Math.max(1, g));
    for (let y = 0; y < g; y++)
      p.push(altchaCreateWorker(pt()));
    const _ = Math.ceil(u / g), k = await Promise.all(p.map((y, C) => {
      const q = C * _;
      return new Promise((K) => {
        y.addEventListener("message", (oe) => {
          if (oe.data)
            for (const Ue of p)
              Ue !== y && Ue.postMessage({ type: "abort" });
          K(oe.data);
        }), y.postMessage({
          payload: n,
          max: q + _,
          start: q,
          type: "work"
        });
      });
    }));
    for (const y of p)
      y.terminate();
    return k.find((y) => !!y) || null;
  }
  async function yt() {
    if (!Q()) {
      Ae(E.ERROR);
      return;
    }
    const n = Me.find((u) => u.constructor.pluginName === "obfuscation");
    if (!n || !("clarify" in n)) {
      Ae(E.ERROR), I("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it.");
      return;
    }
    if ("clarify" in n && typeof n.clarify == "function")
      return n.clarify();
  }
  function on(n) {
    n.obfuscated !== void 0 && Q(n.obfuscated), n.auto !== void 0 && (r(n.auto), r() === "onload" && (Q() ? yt() : Te())), n.blockspam !== void 0 && i(!!n.blockspam), n.customfetch !== void 0 && f(n.customfetch), n.floatinganchor !== void 0 && w(n.floatinganchor), n.delay !== void 0 && d(n.delay), n.floatingoffset !== void 0 && $(n.floatingoffset), n.floating !== void 0 && rn(n.floating), n.expire !== void 0 && (cr(n.expire), h(n.expire)), n.challenge && (o(typeof n.challenge == "string" ? n.challenge : JSON.stringify(n.challenge)), nn(l(sr))), n.challengeurl !== void 0 && a(n.challengeurl), n.debug !== void 0 && c(!!n.debug), n.hidefooter !== void 0 && M(!!n.hidefooter), n.hidelogo !== void 0 && ae(!!n.hidelogo), n.language !== void 0 && it(Br([n.language])), n.maxnumber !== void 0 && Ce(+n.maxnumber), n.mockerror !== void 0 && U(!!n.mockerror), n.name !== void 0 && H(n.name), n.refetchonexpire !== void 0 && mt(!!n.refetchonexpire), n.sentinel !== void 0 && typeof n.sentinel == "object" && Ze(n.sentinel), n.spamfilter !== void 0 && xe(typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && it(typeof n.strings == "string" ? n.strings : JSON.stringify(n.strings)), n.test !== void 0 && ve(typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && ee(n.verifyurl), n.workers !== void 0 && at(+n.workers), n.workerurl !== void 0 && pt(n.workerurl);
  }
  function ln() {
    return {
      auto: r(),
      blockspam: i(),
      challengeurl: a(),
      debug: c(),
      delay: d(),
      expire: h(),
      floating: v(),
      floatinganchor: w(),
      floatingoffset: $(),
      hidefooter: M(),
      hidelogo: ae(),
      name: H(),
      maxnumber: Ce(),
      mockerror: U(),
      obfuscated: Q(),
      refetchonexpire: mt(),
      spamfilter: xe(),
      strings: l(P),
      test: ve(),
      verifyurl: ee(),
      workers: at(),
      workerurl: pt()
    };
  }
  function sn() {
    return l(ot);
  }
  function ea(n) {
    return Me.find((u) => u.constructor.pluginName === n);
  }
  function un() {
    return l(R);
  }
  function fn() {
    l(te).style.display = "none";
  }
  function Et(n = 20) {
    var u;
    if (l(te))
      if (l(ot) || b(ot, (w() ? document.querySelector(w()) : (u = l(T)) == null ? void 0 : u.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || l(T), !0), l(ot)) {
        const g = parseInt($(), 10) || 12, p = l(ot).getBoundingClientRect(), _ = l(te).getBoundingClientRect(), k = document.documentElement.clientHeight, y = document.documentElement.clientWidth, C = v() === "auto" ? p.bottom + _.height + g + n > k : v() === "top", q = Math.max(n, Math.min(y - n - _.width, p.left + p.width / 2 - _.width / 2));
        if (C ? l(te).style.top = `${p.top - (_.height + g)}px` : l(te).style.top = `${p.bottom + g}px`, l(te).style.left = `${q}px`, l(te).setAttribute("data-floating", C ? "top" : "bottom"), l(wt)) {
          const K = l(wt).getBoundingClientRect();
          l(wt).style.left = p.left - q + p.width / 2 - K.width / 2 + "px";
        }
      } else
        I("unable to find floating anchor element");
  }
  function lt(n = E.UNVERIFIED, u = null) {
    ke && (clearTimeout(ke), ke = null), b(bt, !1), b(Ne, null), b(B, null), b(fr, !1), b(G, null), Ae(n, u);
  }
  function cn(n) {
    b(ot, n, !0);
  }
  function Ae(n, u = null) {
    b(R, n, !0), b(ze, u, !0), Fe("statechange", {
      payload: l(Ne),
      state: l(R)
    });
  }
  function dr() {
    l(te).style.display = "block", v() && Et();
  }
  async function Te() {
    return lt(E.VERIFYING), await new Promise((n) => setTimeout(n, d() || 0)), Vi().then((n) => (nn(n), I("challenge", n), an(n))).then(({ data: n, solution: u }) => {
      var g;
      if (I("solution", u), !u || n && "challenge" in n && !("clearText" in u))
        if ((u == null ? void 0 : u.number) !== void 0 && "challenge" in n)
          if (ee() && "codeChallenge" in n)
            ((g = document.activeElement) == null ? void 0 : g.tagName) === "INPUT" && m() === !1 && document.activeElement.blur(), b(B, { challenge: n, solution: u }, !0);
          else {
            if (ee() && Ze() !== void 0)
              return tn(Pt(n, u));
            if (ee())
              return Ki(Pt(n, u));
            b(Ne, Pt(n, u), !0), I("payload", l(Ne));
          }
        else
          throw I("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      l(B) ? (Ae(E.CODE), wr().then(() => {
        Fe("code", { codeChallenge: l(B) });
      })) : (Ae(E.VERIFIED), I("verified"), wr().then(() => {
        Fe("verified", { payload: l(Ne) });
      }));
    }).catch((n) => {
      I(n), Ae(E.ERROR, n.message);
    });
  }
  var dn = hl(), hn = kt(dn);
  $o(hn, t, "default", {});
  var Ct = z(hn, 2), hr = Z(Ct), Ot = Z(hr);
  let vn;
  var gn = Z(Ot);
  {
    var ta = (n) => {
      yr(n);
    };
    J(gn, (n) => {
      l(R) === E.VERIFYING && n(ta);
    });
  }
  var Ke = z(gn, 2);
  Ln(Ke), Ke.__change = [
    Xo,
    R,
    xe,
    T,
    bt,
    Q,
    yt,
    Te
  ], jt(Ke, (n) => b(ur, n), () => l(ur)), W(Ot);
  var Ft = z(Ot, 2), ra = Z(Ft);
  {
    var na = (n) => {
      var u = Ut(), g = kt(u);
      Xe(g, () => l(P).verified), j(n, u);
    }, ia = (n, u) => {
      {
        var g = (_) => {
          var k = Ut(), y = kt(k);
          Xe(y, () => l(P).verifying), j(_, k);
        }, p = (_, k) => {
          {
            var y = (q) => {
              var K = Ut(), oe = kt(K);
              Xe(oe, () => l(P).verificationRequired), j(q, K);
            }, C = (q) => {
              var K = Ut(), oe = kt(K);
              Xe(oe, () => l(P).label), j(q, K);
            };
            J(
              _,
              (q) => {
                l(R) === E.CODE ? q(y) : q(C, !1);
              },
              k
            );
          }
        };
        J(
          n,
          (_) => {
            l(R) === E.VERIFYING ? _(g) : _(p, !1);
          },
          u
        );
      }
    };
    J(ra, (n) => {
      l(R) === E.VERIFIED ? n(na) : n(ia, !1);
    });
  }
  W(Ft);
  var _n = z(Ft, 2);
  {
    var aa = (n) => {
      var u = el();
      Ln(u), Re(() => {
        S(u, "name", H()), Lo(u, l(Ne));
      }), j(n, u);
    };
    J(_n, (n) => {
      l(R) === E.VERIFIED && n(aa);
    });
  }
  var mn = z(_n, 2);
  {
    var oa = (n) => {
      var u = tl(), g = Z(u);
      S(g, "href", Pi), W(u), Re(() => S(g, "aria-label", l(P).ariaLinkLabel)), j(n, u);
    };
    J(mn, (n) => {
      (ae() !== !0 || l(lr)) && n(oa);
    });
  }
  var la = z(mn, 2);
  {
    var sa = (n) => {
      var u = ll(), g = z(Z(u), 2), p = Z(g), _ = z(p, 2);
      Eo(_, !m()), _.__keydown = [
        Jo,
        Xr
      ];
      var k = z(_, 2), y = Z(k), C = Z(y);
      {
        var q = (pe) => {
          var Y = al();
          Y.__click = Xr;
          var Mt = Z(Y);
          {
            var xt = (st) => {
              yr(st, () => 20);
            }, ga = (st, _a) => {
              {
                var ma = (ut) => {
                  var gr = rl();
                  j(ut, gr);
                }, pa = (ut, gr) => {
                  {
                    var ba = (ft) => {
                      var _r = nl();
                      j(ft, _r);
                    }, wa = (ft) => {
                      var _r = il();
                      j(ft, _r);
                    };
                    J(
                      ut,
                      (ft) => {
                        l(G) === X.PLAYING ? ft(ba) : ft(wa, !1);
                      },
                      gr
                    );
                  }
                };
                J(
                  st,
                  (ut) => {
                    l(G) === X.ERROR ? ut(ma) : ut(pa, !1);
                  },
                  _a
                );
              }
            };
            J(Mt, (st) => {
              l(G) === X.LOADING ? st(xt) : st(ga, !1);
            });
          }
          W(Y), Re(() => {
            S(Y, "title", l(P).getAudioChallenge), Y.disabled = l(G) === X.LOADING || l(G) === X.ERROR || l(Je), S(Y, "aria-label", l(G) === X.LOADING ? l(P).loading : l(P).getAudioChallenge);
          }), j(pe, Y);
        };
        J(C, (pe) => {
          l(B).challenge.codeChallenge.audio && pe(q);
        });
      }
      var K = z(C, 2);
      K.__click = [Ko, Te], W(y);
      var oe = z(y, 2), Ue = Z(oe);
      {
        var vr = (pe) => {
          yr(pe, () => 16);
        };
        J(Ue, (pe) => {
          l(Je) && pe(vr);
        });
      }
      var Vt = z(Ue);
      W(oe), W(k);
      var ha = z(k, 2);
      {
        var va = (pe) => {
          var Y = ol(), Mt = Z(Y);
          W(Y), jt(Y, (xt) => b(Ve, xt), () => l(Ve)), Re((xt) => S(Mt, "src", xt), [
            () => Gr(l(B).challenge.codeChallenge.audio, { language: ce() })
          ]), je("loadstart", Y, Gi), je("canplay", Y, Hi), je("pause", Y, Wi), je("playing", Y, Yi), je("ended", Y, qi), je("error", Mt, Bi), j(pe, Y);
        };
        J(ha, (pe) => {
          l(B).challenge.codeChallenge.audio && l(fr) && pe(va);
        });
      }
      W(g), W(u), Re(() => {
        S(u, "aria-label", l(P).verificationRequired), S(p, "src", l(B).challenge.codeChallenge.image), S(_, "minlength", l(B).challenge.codeChallenge.length || 1), S(_, "maxlength", l(B).challenge.codeChallenge.length), S(_, "placeholder", l(P).enterCode), S(_, "aria-label", l(G) === X.LOADING ? l(P).loading : l(G) === X.PLAYING ? "" : l(P).enterCodeAria), S(_, "aria-live", l(G) ? "assertive" : "polite"), S(_, "aria-busy", l(G) === X.LOADING), _.disabled = l(Je), S(K, "aria-label", l(P).reload), S(K, "title", l(P).reload), K.disabled = l(Je), oe.disabled = l(Je), S(oe, "aria-label", l(P).verify), Ao(Vt, ` ${l(P).verify ?? ""}`);
      }), je("submit", g, Zi, !0), j(n, u);
    };
    J(la, (n) => {
      var u;
      (u = l(B)) != null && u.challenge.codeChallenge && n(sa);
    });
  }
  W(hr);
  var pn = z(hr, 2);
  {
    var ua = (n) => {
      var u = fl(), g = z(Z(u), 2);
      {
        var p = (k) => {
          var y = sl(), C = Z(y);
          Xe(C, () => l(P).expired), W(y), Re(() => S(y, "title", l(ze))), j(k, y);
        }, _ = (k) => {
          var y = ul(), C = Z(y);
          Xe(C, () => l(P).error), W(y), Re(() => S(y, "title", l(ze))), j(k, y);
        };
        J(g, (k) => {
          l(R) === E.EXPIRED ? k(p) : k(_, !1);
        });
      }
      W(u), j(n, u);
    };
    J(pn, (n) => {
      (l(ze) || l(R) === E.EXPIRED) && n(ua);
    });
  }
  var bn = z(pn, 2);
  {
    var fa = (n) => {
      var u = cl(), g = Z(u), p = Z(g);
      Xe(p, () => l(P).footer), W(g), W(u), j(n, u);
    };
    J(bn, (n) => {
      l(P).footer && (M() !== !0 || l(lr)) && n(fa);
    });
  }
  var ca = z(bn, 2);
  {
    var da = (n) => {
      var u = dl();
      jt(u, (g) => b(wt, g), () => l(wt)), j(n, u);
    };
    J(ca, (n) => {
      v() && n(da);
    });
  }
  return W(Ct), jt(Ct, (n) => b(te, n), () => l(te)), Re(
    (n) => {
      S(Ct, "data-state", l(R)), S(Ct, "data-floating", v()), vn = Do(Ot, 1, "altcha-checkbox", null, vn, n), S(Ke, "id", l(Ur)), Ke.required = r() !== "onsubmit" && (!v() || r() !== "off"), S(Ft, "for", l(Ur));
    },
    [
      () => ({
        "altcha-checkbox-verifying": l(R) === E.VERIFYING
      })
    ]
  ), je("invalid", Ke, Kr), Oo(Ke, () => l(bt), (n) => b(bt, n)), j(e, dn), Ci({
    clarify: yt,
    configure: on,
    getConfiguration: ln,
    getFloatingAnchor: sn,
    getPlugin: ea,
    getState: un,
    hide: fn,
    repositionFloating: Et,
    reset: lt,
    setFloatingAnchor: cn,
    setState: Ae,
    show: dr,
    verify: Te,
    get auto() {
      return r();
    },
    set auto(n = void 0) {
      r(n), x();
    },
    get blockspam() {
      return i();
    },
    set blockspam(n = void 0) {
      i(n), x();
    },
    get challengeurl() {
      return a();
    },
    set challengeurl(n = void 0) {
      a(n), x();
    },
    get challengejson() {
      return o();
    },
    set challengejson(n = void 0) {
      o(n), x();
    },
    get credentials() {
      return s();
    },
    set credentials(n = void 0) {
      s(n), x();
    },
    get customfetch() {
      return f();
    },
    set customfetch(n = void 0) {
      f(n), x();
    },
    get debug() {
      return c();
    },
    set debug(n = !1) {
      c(n), x();
    },
    get delay() {
      return d();
    },
    set delay(n = 0) {
      d(n), x();
    },
    get disableautofocus() {
      return m();
    },
    set disableautofocus(n = !1) {
      m(n), x();
    },
    get expire() {
      return h();
    },
    set expire(n = void 0) {
      h(n), x();
    },
    get floating() {
      return v();
    },
    set floating(n = void 0) {
      v(n), x();
    },
    get floatinganchor() {
      return w();
    },
    set floatinganchor(n = void 0) {
      w(n), x();
    },
    get floatingoffset() {
      return $();
    },
    set floatingoffset(n = void 0) {
      $(n), x();
    },
    get floatingpersist() {
      return L();
    },
    set floatingpersist(n = !1) {
      L(n), x();
    },
    get hidefooter() {
      return M();
    },
    set hidefooter(n = !1) {
      M(n), x();
    },
    get hidelogo() {
      return ae();
    },
    set hidelogo(n = !1) {
      ae(n), x();
    },
    get id() {
      return fe();
    },
    set id(n = void 0) {
      fe(n), x();
    },
    get language() {
      return ce();
    },
    set language(n = void 0) {
      ce(n), x();
    },
    get name() {
      return H();
    },
    set name(n = "altcha") {
      H(n), x();
    },
    get maxnumber() {
      return Ce();
    },
    set maxnumber(n = 1e6) {
      Ce(n), x();
    },
    get mockerror() {
      return U();
    },
    set mockerror(n = !1) {
      U(n), x();
    },
    get obfuscated() {
      return Q();
    },
    set obfuscated(n = void 0) {
      Q(n), x();
    },
    get plugins() {
      return Oe();
    },
    set plugins(n = void 0) {
      Oe(n), x();
    },
    get refetchonexpire() {
      return mt();
    },
    set refetchonexpire(n = !0) {
      mt(n), x();
    },
    get sentinel() {
      return Ze();
    },
    set sentinel(n = void 0) {
      Ze(n), x();
    },
    get spamfilter() {
      return xe();
    },
    set spamfilter(n = !1) {
      xe(n), x();
    },
    get strings() {
      return it();
    },
    set strings(n = void 0) {
      it(n), x();
    },
    get test() {
      return ve();
    },
    set test(n = !1) {
      ve(n), x();
    },
    get verifyurl() {
      return ee();
    },
    set verifyurl(n = void 0) {
      ee(n), x();
    },
    get workers() {
      return at();
    },
    set workers(n = Math.min(16, navigator.hardwareConcurrency || 8)) {
      at(n), x();
    },
    get workerurl() {
      return pt();
    },
    set workerurl(n = void 0) {
      pt(n), x();
    }
  });
}
ko(["change", "keydown", "click"]);
customElements.define("altcha-widget", qo(
  vl,
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
const gl = '@keyframes altcha-spinner{to{transform:rotate(360deg)}}.altcha{background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);position:relative}.altcha:focus-within{border-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating]{background:var(--altcha-color-base, white);display:none;filter:drop-shadow(3px 3px 6px rgba(0,0,0,.2));left:-100%;position:fixed;top:-100%;width:var(--altcha-max-width, 260px);z-index:999999}.altcha[data-floating=top] .altcha-anchor-arrow{border-bottom-color:transparent;border-top-color:var(--altcha-color-border, #a0a0a0);bottom:-12px;top:auto}.altcha[data-floating=bottom]:focus-within::after{border-bottom-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating=top]:focus-within::after{border-top-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating]:not([data-state=unverified]){display:block}.altcha-anchor-arrow{border:6px solid transparent;border-bottom-color:var(--altcha-color-border, #a0a0a0);content:"";height:0;left:12px;position:absolute;top:-12px;width:0}.altcha-main{align-items:center;display:flex;gap:.4rem;padding:.7rem;position:relative}.altcha-code-challenge{background:var(--altcha-color-base, white);border:1px solid var(--altcha-color-border-focus, currentColor);border-radius:var(--altcha-border-radius, 3px);filter:drop-shadow(3px 3px 6px rgba(0,0,0,.2));padding:.5rem;position:absolute;top:2.5rem;z-index:9999999}.altcha-code-challenge>form{display:flex;flex-direction:column;gap:.5rem}.altcha-code-challenge-input{border:1px solid currentColor;border-radius:3px;box-sizing:border-box;outline:0;font-size:16px;padding:.35rem;width:220px}.altcha-code-challenge-input:focus{outline:2px solid color-mix(in srgb,var(--altcha-color-active, #1D1DC9) 20%,transparent)}.altcha-code-challenge-input:disabled{opacity:.7}.altcha-code-challenge-image{background-color:#fff;border:1px solid currentColor;border-radius:3px;box-sizing:border-box;object-fit:contain;height:50px;width:220px}.altcha-code-challenge-audio,.altcha-code-challenge-reload{background:color-mix(in srgb,var(--altcha-color-text, currentColor) 10%,transparent);border:0;border-radius:3px;color:var(--altcha-color-text, currentColor);cursor:pointer;display:flex;align-items:center;justify-content:center;padding:.35rem}.altcha-code-challenge-audio:disabled,.altcha-code-challenge-reload:disabled,.altcha-code-challenge-verify:disabled{opacity:.7;pointer-events:none}.altcha-code-challenge-audio>*,.altcha-code-challenge-reload>*{height:20px;width:20px}.altcha-code-challenge-buttons{display:flex;justify-content:space-between}.altcha-code-challenge-buttons-left{display:flex;gap:.25rem}.altcha-code-challenge-verify{align-items:center;background:var(--altcha-color-active, #1D1DC9);border:0;border-radius:3px;color:#fff;cursor:pointer;display:flex;gap:.5rem;font-size:100%;padding:.35rem 1rem}.altcha-code-challenge-arrow{border:6px solid transparent;border-bottom-color:var(--altcha-color-border, currentColor);content:"";height:0;left:.15rem;position:absolute;top:-12px;width:0}.altcha[data-floating=top] .altcha-code-challenge{top:-150px}.altcha[data-floating=top] .altcha-code-challenge-arrow{border-bottom-color:transparent;border-top-color:var(--altcha-color-border, currentColor);bottom:-12px;top:auto}.altcha-label{cursor:pointer;flex-grow:1}.altcha-logo{color:currentColor;opacity:.7}.altcha-footer:hover,.altcha-logo:hover{opacity:1}.altcha-error{color:var(--altcha-color-error-text, #f23939);display:flex;font-size:.85rem;gap:.3rem;padding:0 .7rem .7rem}.altcha-footer{align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:.75rem;opacity:.7;justify-content:end;padding:.2rem .7rem}.altcha-footer a{color:currentColor}.altcha-checkbox{display:flex;align-items:center;justify-content:center;height:24px;position:relative;width:24px}.altcha-checkbox .altcha-spinner{bottom:0;left:0;position:absolute;right:0;top:0}.altcha-checkbox input{width:18px;height:18px;margin:0}.altcha-checkbox-verifying input{appearance:none;opacity:0;pointer-events:none}.altcha-spinner{animation:altcha-spinner .75s infinite linear;transform-origin:center}';
function _l(e, t = "__altcha-css") {
  if (!document.getElementById(t)) {
    const r = document.createElement("style");
    r.id = t, r.textContent = e, document.head.appendChild(r);
  }
}
globalThis.altchaCreateWorker = (e) => e ? new Worker(new URL(e)) : new Ca();
_l(gl);
export {
  vl as Altcha
};
